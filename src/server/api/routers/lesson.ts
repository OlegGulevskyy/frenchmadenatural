import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { getEventDetails } from "@/lib/calendly";
import { TRPCError } from "@trpc/server";

export const lessonsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        calendlyEventUrl: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
      });
      if (!user) {
        throw new TRPCError({
          message: "User not found",
          code: "NOT_FOUND",
        });
      }

      const hasCredits = user.credits > 0;
      const hasConsumedFreeLesson = user.hasConsumedFreeLesson;
      if (!hasCredits && hasConsumedFreeLesson) {
        throw new TRPCError({
          message: "Cannot create a new lesson, buy more credits first",
          code: "FORBIDDEN",
        });
      }

      const eventDetails = await getEventDetails(input.calendlyEventUrl);
      if (!eventDetails.resource) {
        throw new TRPCError({
          message: "Invalid Calendly Event URL",
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      const { resource } = eventDetails;
      if (!resource.start_time || !resource.end_time) {
        throw new TRPCError({
          message: "Event missing start or end time",
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      const lesson = await ctx.db.lesson.create({
        data: {
          startAt: resource.start_time,
          endAt: resource.end_time,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });

      if (ctx.session.user.credits === 0) {
        await ctx.db.user.update({
          where: { id: ctx.session.user.id },
          data: {
            hasConsumedFreeLesson: true,
          },
        });
      } else {
        await ctx.db.user.update({
          where: { id: ctx.session.user.id },
          data: {
            credits: {
              decrement: 1,
            },
          },
        });
      }

      return lesson;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.lesson.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return posts;
  }),
});

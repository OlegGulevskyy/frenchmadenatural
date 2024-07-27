import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";

export const lessonsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        startAt: z.string().datetime(),
        endAt: z.string().datetime(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.lesson.create({
        data: {
          startAt: input.startAt,
          endAt: input.endAt,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.lesson.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return posts;
  }),
});

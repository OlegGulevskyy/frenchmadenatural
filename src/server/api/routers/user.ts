import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    if (!userId) {
      throw new TRPCError({
        message: "Required user ID",
        code: "BAD_REQUEST",
      });
    }

    const user = await ctx.db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new TRPCError({
        message: "User not found",
        code: "NOT_FOUND",
      });
    }

    return user;
  }),
});

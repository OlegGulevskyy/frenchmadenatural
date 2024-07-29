import { type PropsWithChildren } from "react";
import { PURHCASE_PAGE, SIGN_IN_PAGE } from "@/lib/navigation";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { api } from "@/trpc/server";

type ProtectRules = {
  withAuth?: boolean;
  canPurchase?: boolean;
};

export const ProtectedRoute = async ({
  children,
  withAuth,
  canPurchase,
}: PropsWithChildren<ProtectRules>) => {
  if (withAuth) {
    const session = await getServerAuthSession();
    if (!session?.user) {
      redirect(SIGN_IN_PAGE);
    }
  }

  if (canPurchase) {
    const user = await api.user.getProfile();
    if (user?.credits === 0 && user.hasConsumedFreeLesson) {
      redirect(PURHCASE_PAGE);
    }
  }

  return <>{children}</>;
};

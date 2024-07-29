import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { type PropsWithChildren } from "react";
import { Header } from "@/components/header";
import { AuthSessionProvider } from "@/providers/next-auth";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "French Made Natural",
  description: "Learn French with Xavier - French Made Natural",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AuthSessionProvider>
          <TRPCReactProvider>
            <Header />
            {children}
          </TRPCReactProvider>
        </AuthSessionProvider>
        <Toaster />
      </body>
    </html>
  );
}

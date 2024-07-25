"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { CircleUser, Menu } from "lucide-react";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  const { status, data } = useSession();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/">
          <span className="text-4xl">🇫🇷</span>
        </Link>
        <Link
          href="/reserve"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Button variant="default">Reserve a lesson</Button>
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About me
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">Acme Inc</span>
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Reserve a lesson
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              About me
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="ml-auto flex items-center gap-4 md:gap-2 lg:gap-4">
        {status === "loading" && <Skeleton className="h-9 w-9 rounded-full" />}

        {status === "authenticated" && (
          <>
            <span className="hidden font-semibold md:flex">
              6 lessons available
            </span>
            <Button variant="secondary" className="hidden md:flex">
              Buy more
            </Button>
            <Button variant="secondary" className="flex md:hidden">Buy more lessons</Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  {data.user.image ? (
                    <Avatar>
                      <AvatarImage src={data.user.image} />
                      <AvatarFallback className="flex w-full items-center justify-center">
                        <CircleUser className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <CircleUser className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <p className="mt-1 font-normal text-slate-600">
                    6 lessons available
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Lessons</DropdownMenuItem>
                <DropdownMenuItem>Reserve</DropdownMenuItem>
                <DropdownMenuItem>Purchase</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}

        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">
            <Button variant="default">Sign in</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

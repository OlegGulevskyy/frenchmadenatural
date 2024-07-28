import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);

export const Hero = () => {
  return (
    <Container className="mx-0 max-w-full bg-gradient-to-b from-[#48c6ef] to-[#6f86d6]">
      <main className="mx-auto max-w-7xl pt-10 md:mt-0 md:pt-0">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col gap-20">
            <h1 className="font-display mx-auto max-w-4xl text-left text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              French{" "}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-white/30"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative text-white/80">made natural</span>
              </span>{" "}
              for everyone.
            </h1>
            <Link href="/reserve" className="w-fit">
              <Button className="p-6 text-lg">
                Get your first lesson for free now!
              </Button>
            </Link>
          </div>
          <Image
            src="/xavier_no_bg.png"
            alt="Xavier"
            width={400}
            height={400}
            className="mx-auto mt-10 w-60 max-w-2xl rounded-full md:w-1/3"
          />
        </div>

        <p className="mx-auto mt-20 max-w-2xl text-2xl tracking-tight text-slate-700">
          I help adults at a high beginner / low intermediate level understand
          French native speakers with my natural methods.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700">
          Using my <b>natural method</b>, I help adults understand French native
          speakers. My lessons are designed to fit your busy life, focusing on
          real-life conversations and practical listening exercises. 🇫🇷✨
        </p>
        <div className="mt-20 flex justify-start gap-x-6 md:justify-center"></div>
      </main>
    </Container>
  );
};

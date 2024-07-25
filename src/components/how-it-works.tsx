import Image from "next/image";
import { Container } from "@/components/container";

export const HowItWorks = () => {
  return (
    <Container className="relative overflow-hidden">
      <Image
        className="z-1 absolute left-0 top-0 h-[1024px] w-full object-cover sm:w-[1024]"
        src={"/background-features.jpg"}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <section className="relative z-10 mx-auto mb-20 mt-20 max-w-2xl md:text-center">
        <h2 className="font-display z-10 text-3xl tracking-tight text-white sm:text-4xl">
          How does it work?
        </h2>
        <ul className="mt-4 list-outside list-none text-left text-lg tracking-tight text-white">
          <li className="mb-2 text-xl">🗣 Small talk</li>
          <li className="mb-2 text-xl">
            🆕 Review new vocabulary and expressions
          </li>
          <li className="mb-2 text-xl">
            📖 Listen to and analyze native dialogues
          </li>
          <li className="mb-2 text-xl">🎭 Practice through conversation</li>
          <li className="mb-2 text-xl">
            📝 Review, feedback, and homework assignment
          </li>
        </ul>
      </section>
    </Container>
  );
};

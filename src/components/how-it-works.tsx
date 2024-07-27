import { Container } from "@/components/container";

export const HowItWorks = () => {
  return (
    <Container className="relative overflow-hidden mx-0 w-full max-w-full px-4 sm:px-6 lg:px-8 bg-slate-900">
      <section className="relative z-10 mx-auto mb-20 mt-20 max-w-2xl md:text-center">
        <h2 className="font-display z-10 text-3xl tracking-tight text-white sm:text-4xl">
          How does it work?
        </h2>
        <ul className="mt-10 list-outside list-none text-left text-lg tracking-tight text-white">
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

import { HowItWorks } from "@/components/how-it-works";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <Hero />
      <HowItWorks />
      <Testimonials />
    </HydrateClient>
  );
}

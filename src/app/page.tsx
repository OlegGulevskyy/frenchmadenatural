import { HowItWorks } from "@/components/how-it-works";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
// import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <Hero />
      <HowItWorks />
      <Testimonials />
    </HydrateClient>
  );
}

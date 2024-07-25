import { Container } from "@/components/container";
import { QuoteIcon } from "@/icons/quote";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { CircleUser } from "lucide-react";

const testimonials = [
  [
    {
      content:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      author: {
        name: "Sheryl Berge",
        role: "CEO at Lynch LLC",
        image: "/happy_dude_lol.jpg",
      },
    },
    {
      content:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: "/happy_dude_lol.jpg",
      },
    },
  ],
  [
    {
      content:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      author: {
        name: "Leland Kiehn",
        role: "Founder of Kiehn and Sons",
        image: "/happy_dude_lol.jpg",
      },
    },
    {
      content:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      author: {
        name: "Erin Powlowski",
        role: "COO at Armstrong Inc",
        image: "/happy_dude_lol.jpg",
      },
    },
  ],
  [
    {
      content:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      author: {
        name: "Peter Renolds",
        role: "Founder of West Inc",
        image: "/happy_dude_lol.jpg",
      },
    },
    {
      content:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: "/happy_dude_lol.jpg",
      },
    },
  ],
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by students worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            My natural method is so simple that people can’t help but fall in
            love with it. 💙
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Avatar className="h-14 w-14 object-cover" />

                          <Avatar>
                            <AvatarImage
                              src={testimonial.author.image}
                              className="h-14 w-14 object-cover"
                            />
                            <AvatarFallback className="flex w-full items-center justify-center">
                              <CircleUser className="h-14 w-14" />
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

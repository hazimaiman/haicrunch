import Image from "next/image";
import Link from "next/link";

const orderCards = [
  {
    title: "WhatsApp Fast Order",
    description:
      "Chat directly with us for same-day response and quick order confirmation.",
    image: "/order-options/whatsapp.png",
  },
  {
    title: "Advance Pick Up",
    description: "Book your preferred date and collect fresh bakes around Kelantan.",
    image: "/order-options/pickup.png",
  },
  {
    title: "Events and Catering",
    description:
      "Custom quantity planning for office events, gifts, and celebration tables.",
    image: "/order-options/celebration (1).png",
  },
];

export default function OrderOptionsSection() {
  return (
    <section
      id="why"
      className="w-full bg-[#f2d0d9] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8b6e4f]">
            Order Options
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#2f2118] sm:text-5xl">
            Delivery and pick up made simple
          </h2>
          <p className="mt-3 text-sm text-[#5c4432] sm:text-base">
            Choose the flow that fits your schedule and event planning needs.
          </p>
          <Link
            href="/order"
            className="mt-5 inline-flex text-base font-semibold uppercase tracking-[0.06em] text-[#2f2118] underline decoration-[#7e5b45] underline-offset-6 hover:text-[#604736]"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {orderCards.map((card) => (
            <article key={card.title} className="space-y-3 text-center">
              <div className="rounded-md border border-[#eadbc7] bg-[#fffaf4] p-2 sm:p-3">
                <div className="relative h-44 w-full overflow-hidden sm:h-36 lg:h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-[#2f2118]">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[#5c4432]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

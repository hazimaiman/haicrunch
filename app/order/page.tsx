import Image from "next/image";
import Link from "next/link";

import FloatingWhatsAppButton from "@/components/layout/floating-whatsapp-button";
import SiteFooter from "@/components/layout/site-footer";
import SiteNav from "@/components/layout/site-nav";
import { whatsappNumber } from "@/data/menu";

type OrderFlow = {
  title: string;
  summary: string;
  details: string;
  image: string;
  whatsappText: string;
  ctaLabel: string;
  backgroundClass: string;
};

const orderFlows: OrderFlow[] = [
  {
    title: "WhatsApp Fast Order",
    summary: "Best for urgent same-day requests and fast order confirmation.",
    details:
      "Send item name, quantity, preferred time, and delivery/pickup choice. Our team will confirm availability and finalize your booking details through WhatsApp.",
    image: "/order-options/whatsapp.png",
    whatsappText: "Hi, saya nak setup booking untuk WhatsApp Fast Order HaiCrunch.",
    ctaLabel: "Setup Fast Order",
    backgroundClass: "bg-[#f8f5ef]",
  },
  {
    title: "Advance Pick Up",
    summary: "Reserve your preferred date and collect fresh bakes on schedule.",
    details:
      "For planned orders, message us early with your date, time, and products. We will lock your pickup slot and confirm order details before production.",
    image: "/order-options/pickup.png",
    whatsappText: "Hi, saya nak setup booking untuk Advance Pick Up HaiCrunch.",
    ctaLabel: "Schedule Pick Up",
    backgroundClass: "bg-[#d0ecdf]",
  },
  {
    title: "Events and Catering",
    summary: "Custom quantity planning for offices, gifting, and celebration tables.",
    details:
      "Tell us your event date, pax, and menu preference. We will guide portion planning and timeline so your event setup is smooth and on time.",
    image: "/order-options/celebration (1).png",
    whatsappText: "Hi, saya nak setup booking untuk Events and Catering HaiCrunch.",
    ctaLabel: "Start Event Booking",
    backgroundClass: "bg-[#f6dfd0]",
  },
];

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#f8f1e6] text-[#2f2118]">
      <FloatingWhatsAppButton />
      <SiteNav activePage="home" />

      <main>
        <section className="bg-[#f4d7df] px-4 py-12 sm:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8b6e4f]">Order Guide</p>
            <h1 className="mt-2 text-4xl font-semibold text-[#2f2118] sm:text-6xl">
              Delivery and Pick Up Options
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#5c4432] sm:text-base">
              Choose the flow that fits your timeline. All setup bookings require WhatsApp
              confirmation before production starts.
            </p>
            <Link
              href="/#why"
              className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.06em] text-[#2f2118] underline decoration-[#7e5b45] underline-offset-6"
            >
              Back to Home Section
            </Link>
          </div>
        </section>

        {orderFlows.map((flow, index) => {
          const contactHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            flow.whatsappText
          )}`;
          const isReverse = index % 2 === 1;

          return (
            <section key={flow.title} className={`${flow.backgroundClass} px-4 py-10 sm:px-8 sm:py-12`}>
              <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                  <div className={isReverse ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image
                        src={flow.image}
                        alt={flow.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  </div>

                  <div className={isReverse ? "lg:order-1" : "lg:order-2"}>
                    <h2 className="text-4xl font-semibold leading-tight text-[#1f3a31] sm:text-5xl">
                      {flow.title}
                    </h2>
                    <p className="mt-3 text-base font-medium text-[#3f2f24]">{flow.summary}</p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4f392a] sm:text-base">
                      {flow.details}
                    </p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.06em] text-[#6f4d38]">
                      Booking setup must be confirmed via WhatsApp.
                    </p>
                    <a
                      href={contactHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center rounded-xl border border-[#0b3028] bg-[#103f34] px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] !text-[#fff7ea] shadow-[0_8px_20px_rgba(10,40,34,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b3028] hover:!text-[#fffdf7] hover:shadow-[0_12px_24px_rgba(10,40,34,0.28)]"
                    >
                      {flow.ctaLabel}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <SiteFooter />
    </div>
  );
}

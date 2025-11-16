"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa6";

import menuItems, { whatsappNumber } from "@/data/menu";

type Review = {
  name: string;
  quote: string;
  rating: number;
  location?: string;
};

const reviews: Review[] = [
  {
    name: "Aina",
    location: "Kota Bharu",
    quote:
      "Crunchy on the outside, soft on the inside. My family finishes a jar in one sitting!",
    rating: 5,
  },
  {
    name: "Hafiz",
    location: "Pengkalan Chepa",
    quote: "Easy COD, cepat sampai. Cookies rasa homemade betul!",
    rating: 5,
  },
  {
    name: "Nora",
    location: "Bachok",
    quote: "Moist cakes dengan topping padu. Portion besar dan berbaloi.",
    rating: 5,
  },
  {
    name: "Yusuf",
    location: "Pasir Mas",
    quote: "Service mesra, order melalui WhatsApp je. Anak-anak suka sangat.",
    rating: 5,
  },
  {
    name: "Sarah",
    location: "Tanah Merah",
    quote: "Packaging kemas, rasa premium. Repeat order untuk hadiah kawan!",
    rating: 5,
  },
  {
    name: "Danial",
    location: "Machang",
    quote: "Cakes moist gila, portion besar. Harga berbaloi.",
    rating: 5,
  },
];

const heroProduct = menuItems[3] ?? menuItems[0];

function buildWhatsAppLink(productName: string) {
  const message = encodeURIComponent(`Hi, saya nak order ${productName}`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

function ReviewCarousel({ items }: { items: Review[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4200);
    return () => clearInterval(timer);
  }, [total]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const current = items[index];

  return (
    <div className="flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:gap-10">
      <button
        type="button"
        onClick={prev}
        className="hidden h-12 w-12 items-center justify-center rounded-lg border border-purple-100 bg-white text-lg font-semibold text-[#5b3fa3] shadow-sm transition hover:-translate-y-0.5 hover:border-[#5b3fa3] sm:inline-flex"
        aria-label="Previous review"
      >
        ←
      </button>
      <div className="flex-1 space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-[#2a1b4f]">
              {current.name}
            </p>
            {current.location && (
              <p className="text-sm text-[#7c6fa3]">{current.location}</p>
            )}
          </div>
          <div className="text-[#ffb703] text-2xl">
            {"★".repeat(current.rating)}
          </div>
        </div>
        <p className="text-xl text-[#3d2d64] leading-relaxed">
          “{current.quote}”
        </p>
        <div className="flex items-center gap-3 text-lg">
          <span className="text-base font-semibold text-[#5b3fa3]">
            {index + 1}/{total}
          </span>
          <div className="flex gap-2 text-xl">
            {["😊", "🤩", "😍", "⭐", "😋"].map((emoji, idx) => (
              <span
                key={emoji + idx}
                className={`transition ${
                  idx === index % 5 ? "opacity-100" : "opacity-40"
                }`}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:hidden">
        <button
          type="button"
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-100 bg-white text-lg font-semibold text-[#5b3fa3] shadow-sm transition hover:-translate-y-0.5 hover:border-[#5b3fa3]"
          aria-label="Previous review"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-100 bg-white text-lg font-semibold text-[#5b3fa3] shadow-sm transition hover:-translate-y-0.5 hover:border-[#5b3fa3]"
          aria-label="Next review"
        >
          →
        </button>
      </div>
      <button
        type="button"
        onClick={next}
        className="hidden h-12 w-12 items-center justify-center rounded-lg border border-purple-100 bg-white text-lg font-semibold text-[#5b3fa3] shadow-sm transition hover:-translate-y-0.5 hover:border-[#5b3fa3] sm:inline-flex"
        aria-label="Next review"
      >
        →
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ff] via-white to-[#f8f1e6] text-[#2b1b4b]">
      <a
        href={buildWhatsAppLink("HaiCrunch order")}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 transition hover:-translate-y-1 hover:shadow-[#25D366]/40"
        aria-label="WhatsApp order"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="text-lg" />
        WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-purple-100/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-8 px-4 py-4 sm:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-purple-100 shadow-sm">
              <Image
                src="/logo/logo_hc.jpg"
                alt="HaiCrunch logo"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold text-[#5b3fa3]">
                HaiCrunch
              </p>
              <p className="text-xs text-purple-500">
                Homemade Cookies & Cakes
              </p>
            </div>
          </Link>
          <nav className="ml-auto hidden items-center gap-8 text-sm font-medium text-[#3b2a6d] md:flex">
            <a className="hover:text-[#5b3fa3]" href="#about">
              About
            </a>
            <a className="hover:text-[#5b3fa3]" href="#products">
              Products
            </a>
            <a className="hover:text-[#5b3fa3]" href="#why">
              Why Us
            </a>
            <a className="hover:text-[#5b3fa3]" href="#reviews">
              Reviews
            </a>
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-8 sm:pb-16"
      >
        <section className="grid items-center gap-8 rounded-xl bg-white px-6 py-10 shadow-md shadow-purple-200/25 ring-1 ring-purple-100/60 lg:grid-cols-2 lg:px-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight text-[#2a1b4f] sm:text-4xl">
              HaiCrunch — Homemade Cookies & Cakes from Kelantan.
            </h1>
            <p className="max-w-xl text-base text-[#4b3b73] sm:text-lg">
              Homemade cookies, cakes, and snack jars baked by a passionate home
              baker. Cozy flavors, crunchy textures, and friendly service
              straight from our kitchen in Kelantan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5b3fa3] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5b3fa3]/25 transition hover:-translate-y-0.5 hover:bg-[#4c2f8c]"
              >
                View Products
              </a>
            </div>
          </div>
          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#e9ddff] via-[#f5ecff] to-[#f5e6d7]"></div>
            <div className="absolute inset-4 overflow-hidden rounded-[20px] shadow-2xl shadow-purple-200/50">
              <Image
                src={heroProduct.image}
                alt={heroProduct.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-10 grid gap-8 rounded-xl bg-white/85 p-6 shadow-sm shadow-purple-200/30 ring-1 ring-purple-100/50 lg:grid-cols-[1.05fr_0.95fr] sm:mt-12"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8a6ed8]">
              Founder Story
            </p>
            <h2 className="text-2xl font-semibold text-[#2a1b4f] sm:text-3xl">
              From UniSZA Engineering to a home-based bakery in Kelantan
            </h2>
            <p className="text-base leading-relaxed text-[#4b3b73]">
              HaiCrunch is run by a home baker who turned her passion in the
              kitchen into a small, cozy business. From testing recipes at home
              to baking daily for neighbors, every batch of cookies, cakes, and
              snack jars is made with care.
            </p>
            <p className="text-base leading-relaxed text-[#4b3b73]">
              Operating from Kelantan, orders are available through WhatsApp and
              Cash on Delivery (COD). Every jar is baked in small batches,
              ensuring freshness, crunch, and the warm homemade taste locals
              love.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-[#4b3b73]">
              <span className="rounded-full bg-purple-50 px-3 py-2">
                🏠 Home-based bakery
              </span>
              <span className="rounded-full bg-brown-50 px-3 py-2">
                🍞 Freshly baked daily
              </span>
              <span className="rounded-full bg-pink-50 px-3 py-2">
                🎉 Great for events & parties
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-md shadow-purple-100">
            <Image
              src="/profile/profile.png"
              alt="HaiCrunch founder"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 320px, 100vw"
            />
          </div>
        </section>

        <section id="products" className="mt-10 sm:mt-12">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8a6ed8]">
                Signature Products
              </p>
              <h2 className="text-2xl font-semibold text-[#2a1b4f] sm:text-3xl">
                Simple, cozy showcase
              </h2>
              <p className="text-sm text-[#4b3b73]">
                Best sellers and seasonal favorites. Order via WhatsApp—easy.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, index) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-purple-100 bg-white p-4 shadow-sm shadow-purple-100/50 transition hover:-translate-y-1 hover:shadow-md hover:shadow-purple-200"
              >
                <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-xl bg-black/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 240px, 100vw"
                    priority={index < 2}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-[#2a1b4f]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#7a699f]">{item.price}</p>
                  <p className="text-sm text-[#4b3b73]">{item.description}</p>
                  <a
                    href={buildWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#5b3fa3] underline decoration-[#d8c6ff] underline-offset-4 transition hover:text-[#4b2f91]"
                  >
                    <FaWhatsapp /> Order via WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="why"
          className="mt-10 grid gap-4 rounded-xl bg-white/90 p-6 shadow-sm shadow-purple-200/30 ring-1 ring-purple-100/50 sm:mt-12 sm:grid-cols-2"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8a6ed8]">
              Why people love HaiCrunch
            </p>
            <h2 className="text-2xl font-bold text-[#2a1b4f] sm:text-3xl">
              Cozy, small-batch, trusted locally
            </h2>
          </div>
          <ul className="grid gap-2 text-sm font-semibold text-[#2f2256] sm:text-base">
            {[
              "Small-batch daily bakes",
              "Fresh ingredients, halal-friendly",
              "Local Kelantan delivery + COD",
              "Friendly home-baker service",
              "TikTok & Facebook verified presence",
              "Homemade flavors with engineering-level care",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-lg bg-purple-50/60 px-3 py-2 text-[#3b2a6d]"
              >
                <span className="pt-[2px] text-sm">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="reviews"
          className="mt-10 overflow-hidden rounded-xl bg-white/90 p-6 shadow-sm shadow-purple-200/30 ring-1 ring-purple-100/50 sm:mt-12"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8a6ed8]">
                Customer Reviews
              </p>
              <h2 className="text-2xl font-semibold text-[#2a1b4f] sm:text-3xl">
                Loved by cookie fans across Kelantan
              </h2>
            </div>
            <div className="hidden items-center gap-2 text-lg md:flex">
              <span role="img" aria-label="happy">
                😍
              </span>
              <span role="img" aria-label="yum">
                🤩
              </span>
              <span role="img" aria-label="star">
                ⭐
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-md shadow-purple-100">
            <ReviewCarousel items={reviews} />
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-100 bg-white/90 py-6">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-[#3b2a6d] sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink("HaiCrunch order")}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/40 transition hover:-translate-y-0.5"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@haicrunch_"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md shadow-purple-200 transition hover:-translate-y-0.5"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/haicrunch"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="text-center text-xs text-[#4b3b73] sm:text-sm">
            © 2025 HaiCrunch. Homemade cookies & cakes baked with love in
            Kelantan.
          </div>
        </div>
      </footer>
    </div>
  );
}

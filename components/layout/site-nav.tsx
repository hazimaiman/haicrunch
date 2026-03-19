"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBagShopping, FaBars, FaXmark } from "react-icons/fa6";

import { categoryInfo, type ProductCategory, whatsappNumber } from "@/data/menu";

type SiteNavProps = {
  activePage?: "home" | "menu";
};

const categoryOrder: ProductCategory[] = ["cookies", "chocobar", "tart", "cake", "brownies"];

export default function SiteNav({ activePage = "home" }: SiteNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const orderAsapHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, saya nak order ASAP")}`;
  const desktopNavLinkClass = (isActive: boolean) =>
    isActive ? "text-[#14231b]" : "text-[#1a2a21] hover:text-[#14231b]";

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#ecdcc7] bg-white/95 backdrop-blur-md">
      <div className="overflow-hidden bg-[#103f34] py-2">
        <div className="ticker-track whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-[#f6f2e8]">
          <span className="ticker-item">
            Homemade desserts for Kelantan pick up, COD, and event orders
          </span>
          <span className="ticker-item">
            Promo Raya: select any 4 items only RM100
          </span>
          <span className="ticker-item">
            WhatsApp fast order available every day
          </span>
          <span className="ticker-item">
            Homemade desserts for Kelantan pick up, COD, and event orders
          </span>
          <span className="ticker-item">
            Promo Raya: select any 4 items only RM100
          </span>
          <span className="ticker-item">
            WhatsApp fast order available every day
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-8">
        <div className="grid grid-cols-[2.5rem_1fr_2.5rem] items-center xl:hidden">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dec8ad] text-[#1a2a21]"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <FaXmark className="text-base" /> : <FaBars className="text-base" />}
          </button>

          <Link
            href="/"
            className="justify-self-center text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative mx-auto h-10 w-10 overflow-hidden rounded-2xl border border-[#ecdcc7] shadow-sm">
              <Image
                src="/logo/logo_hc.jpg"
                alt="HaiCrunch logo"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <p className="mt-1 text-sm font-semibold leading-none text-[#14231b]">HaiCrunch</p>
          </Link>

          <a
            href={orderAsapHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Order ASAP via WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-[#dec8ad] text-[#3c2d59]"
          >
            <FaBagShopping className="text-base" />
          </a>
        </div>

        {isMobileMenuOpen && (
          <nav className="mt-4 space-y-2 rounded-2xl border border-[#eadcc8] bg-white p-4 text-sm font-semibold text-[#1a2a21] xl:hidden">
            <Link href="/" className="block rounded-lg px-3 py-2 hover:bg-[#f8efe2]" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/menu"
              className="block rounded-lg px-3 py-2 hover:bg-[#f8efe2]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#about"
              className="block rounded-lg px-3 py-2 hover:bg-[#f8efe2]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Founder Story
            </Link>
            <Link
              href="/#reviews"
              className="block rounded-lg px-3 py-2 hover:bg-[#f8efe2]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/#footer"
              className="block rounded-lg px-3 py-2 hover:bg-[#f8efe2]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-1 flex flex-wrap gap-2 border-t border-[#f1e4d4] pt-3">
              {categoryOrder.map((category) => (
                <Link
                  key={category}
                  href={`/menu?type=${category}`}
                  className="rounded-full border border-[#e2d1ba] px-3 py-1.5 text-xs uppercase tracking-[0.06em]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {categoryInfo[category].label}
                </Link>
              ))}
            </div>

            <a
              href={orderAsapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#e6d3ef] px-5 text-sm font-bold text-[#3c2d59] transition hover:bg-[#dcc3e8]"
            >
              ORDER ASAP
            </a>
          </nav>
        )}

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#ecdcc7] shadow-sm">
              <Image
                src="/logo/logo_hc.jpg"
                alt="HaiCrunch logo"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold text-[#14231b]">HaiCrunch</p>
              <p className="text-xs text-[#4a5c52]">Homemade Cookies and Cakes</p>
            </div>
          </Link>

          <nav className="ml-auto flex flex-nowrap items-center gap-4 text-sm font-semibold text-[#1a2a21]">
            <Link href="/" className={desktopNavLinkClass(activePage === "home")}>
              Home
            </Link>

            <div className="group relative">
              <Link href="/menu" className={desktopNavLinkClass(activePage === "menu")}>
                Products
              </Link>
              <div className="invisible absolute left-0 top-7 w-64 rounded-xl border border-[#eadcc8] bg-white p-3 opacity-0 shadow-lg shadow-[#d8c7b0]/35 transition group-hover:visible group-hover:opacity-100">
                {categoryOrder.map((category) => (
                  <Link
                    key={category}
                    href={`/menu?type=${category}`}
                    className="block rounded-lg px-3 py-2 text-sm text-[#4a382c] hover:bg-[#f8efe2]"
                  >
                    {categoryInfo[category].label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/#about" className="hover:text-[#14231b]">
              Founder Story
            </Link>
            <Link href="/#reviews" className="hover:text-[#14231b]">
              Reviews
            </Link>
            <Link href="/#footer" className="hover:text-[#14231b]">
              Contact
            </Link>

            <a
              href={orderAsapHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#e6d3ef] px-5 py-2.5 text-sm font-bold text-[#3c2d59] transition hover:bg-[#dcc3e8]"
            >
              ORDER ASAP
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

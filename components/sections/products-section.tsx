"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import menuItems, { categoryInfo, type ProductCategory } from "@/data/menu";

const categoryOrder: ProductCategory[] = ["cookies", "chocobar", "tart", "cake", "brownies"];
const categoryDisplay: Record<ProductCategory, string> = {
  cookies: "Cookies",
  chocobar: "Choco Series",
  tart: "Cheese Tart",
  cake: "Cakes",
  brownies: "Brownies",
};

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const groupedProducts: Record<ProductCategory, string> = {
    cookies: "/menu/4.jpg",
    chocobar: "/menu/3.jpg",
    tart: "/menu/1.jpg",
    cake: "/menu/12.JPG",
    brownies: "/menu/13.JPG",
  };

  menuItems.forEach((item) => {
    if (!groupedProducts[item.category]) {
      groupedProducts[item.category] = item.image;
    }
  });

  const total = categoryOrder.length;

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    const targetCard = cardRefs.current[index];
    if (!scroller || !targetCard) return;

    scroller.scrollTo({
      left: targetCard.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleNext = () => {
    const nextIndex = activeIndex >= total - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex <= 0 ? total - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || isDesktop) return;

    const onScroll = () => {
      const scrollLeft = scroller.scrollLeft;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const distance = Math.abs(card.offsetLeft - scroller.offsetLeft - scrollLeft);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  return (
    <section
      id="products"
      className="w-full bg-[#f5f2ea] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8b6e4f]">
            Signature Product
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-[#1f3a31] sm:text-6xl">Our Products</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c4432] sm:text-base">
            Browse all categories and open full menu to view every item.
          </p>
          <Link
            href="/menu"
            className="mt-6 inline-flex text-xl font-semibold uppercase tracking-[0.06em] text-[#1f3a31] underline decoration-2 underline-offset-8 hover:text-[#365a4d]"
          >
            View More
          </Link>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:pb-0"
        >
          {categoryOrder.map((category, index) => (
            <article
              key={category}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group snap-start shrink-0 basis-[72%] sm:basis-[44%] lg:basis-auto"
            >
              <div className="relative h-44 overflow-hidden sm:h-48 lg:h-56 xl:h-60">
                <Image
                  src={groupedProducts[category]}
                  alt={categoryInfo[category].label}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <Link
                href={`/menu?type=${category}`}
                className="mt-3 inline-block text-3xl font-semibold leading-tight text-[#1f3a31] hover:underline sm:text-4xl"
              >
                {categoryDisplay[category]}
              </Link>
            </article>
          ))}
        </div>

        {!isDesktop ? (
          <div className="mt-5 flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous products"
                className="rounded-full border border-[#ddc7af] bg-[#fff7ec] p-2 text-[#5a4230] transition hover:bg-[#f8ecdf]"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next products"
                className="rounded-full border border-[#ddc7af] bg-[#fff7ec] p-2 text-[#5a4230] transition hover:bg-[#f8ecdf]"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {categoryOrder.map((category, index) => (
                <button
                  key={`product-dot-${category}`}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to product card ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-[#6f4d38]" : "w-2.5 bg-[#d8c0a5]"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

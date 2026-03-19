"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

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
      "Crunchy on the outside, soft on the inside. My family finishes a jar in one sitting.",
    rating: 5,
  },
  {
    name: "Hafiz",
    location: "Pengkalan Chepa",
    quote: "Easy COD, cepat sampai. Cookies rasa homemade betul.",
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
    quote: "Packaging kemas, rasa premium. Repeat order untuk hadiah kawan.",
    rating: 5,
  },
];

const AUTO_SLIDE_MS = 4000;

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const total = reviews.length;
  const visibleCount = isDesktop ? 2 : 1;
  const maxStartIndex = Math.max(0, total - visibleCount);
  const clampedStartIndex = Math.min(startIndex, maxStartIndex);
  const pageCount = maxStartIndex + 1;

  const activeIndices = useMemo(() => {
    const indices = new Set<number>();
    for (let offset = 0; offset < visibleCount; offset += 1) {
      indices.add(clampedStartIndex + offset);
    }
    return indices;
  }, [clampedStartIndex, visibleCount]);

  const handleNext = () => {
    setStartIndex((current) => (current >= maxStartIndex ? 0 : current + 1));
  };

  const handlePrev = () => {
    setStartIndex((current) => (current <= 0 ? maxStartIndex : current - 1));
  };

  const goToIndex = (index: number) => {
    setStartIndex(Math.min(Math.max(index, 0), maxStartIndex));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (total <= visibleCount) {
      return;
    }

    const timer = window.setInterval(() => {
      setStartIndex((current) => (current >= maxStartIndex ? 0 : current + 1));
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [maxStartIndex, total, visibleCount]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const targetCard = cardRefs.current[clampedStartIndex];
    if (!targetCard || !scroller) return;

    scroller.scrollTo({
      left: targetCard.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
  }, [clampedStartIndex, isDesktop]);

  if (!total) return null;

  return (
    <section
      id="reviews"
      className="w-full py-10 sm:py-12 lg:py-14"
      style={{
        backgroundColor: "#f8f2e8",
        backgroundImage:
          "radial-gradient(circle at 20px 20px, #f2e4d6 9px, transparent 9px), radial-gradient(circle at 54px 54px, #efe1d3 9px, transparent 9px)",
        backgroundSize: "74px 74px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8b6e4f]">Reviews</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#2f2118] sm:text-4xl">
              Loved by repeat customers in Kelantan
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#5f4633] sm:text-base">
              Trusted by families and event hosts who come back for handcrafted bakes, friendly
              service, and consistent quality.
            </p>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#e8d6c2] bg-[#fff9f2] p-2 sm:p-3">
              <div
                ref={scrollerRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-live="polite"
              >
                {reviews.map((review, index) => {
                  const isActive = activeIndices.has(index);

                  return (
                    <article
                      key={`${review.name}-${index}`}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className={`snap-start shrink-0 basis-full rounded-2xl border p-5 transition-all duration-500 lg:basis-[calc(50%-0.5rem)] ${
                        isActive
                          ? "border-[#d6b291] bg-[#fffdf9] opacity-100 shadow-[0_10px_26px_rgba(104,70,44,0.14)]"
                          : "border-[#eadbc8] bg-[#fbf2e8]/80 opacity-55 shadow-none"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="flex items-center gap-1 text-[#c58b47]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={`${review.name}-star-${starIndex}`}
                            className={`h-4 w-4 ${
                              starIndex < review.rating ? "fill-current" : "opacity-35"
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#3d2d24] sm:text-[15px]">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                      <footer className="mt-4 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#2f2118]">{review.name}</span>
                        {review.location ? (
                          <span className="rounded-full bg-[#f5e7d8] px-3 py-1 text-xs font-medium text-[#6d523d]">
                            {review.location}
                          </span>
                        ) : null}
                      </footer>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonials"
                  className="rounded-full border border-[#ddc7af] bg-[#fff7ec] p-2 text-[#5a4230] transition hover:bg-[#f8ecdf]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonials"
                  className="rounded-full border border-[#ddc7af] bg-[#fff7ec] p-2 text-[#5a4230] transition hover:bg-[#f8ecdf]"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: pageCount }).map((_, dotIndex) => (
                  <button
                    key={`testimonial-dot-${dotIndex}`}
                    type="button"
                    onClick={() => goToIndex(dotIndex)}
                    aria-label={`Go to testimonial set ${dotIndex + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      dotIndex === clampedStartIndex ? "w-6 bg-[#6f4d38]" : "w-2.5 bg-[#d8c0a5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

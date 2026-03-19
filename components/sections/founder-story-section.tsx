import Image from "next/image";

export default function FounderStorySection() {
  return (
    <section
      id="about"
      className="w-full bg-[#c7e4d7] py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8a6c4f]">
            Founder Story
          </p>
          <h2 className="text-2xl font-semibold text-[#2f2118] sm:text-4xl">
            From UniSZA Engineering to a home-based bakery in Kelantan
          </h2>
          <p className="text-base leading-relaxed text-[#4f392a]">
            HaiCrunch is run by a home baker who turned her passion in the
            kitchen into a cozy business. Each batch is tested and baked with care
            to keep flavor, texture, and consistency strong.
          </p>
          <p className="text-base leading-relaxed text-[#4f392a]">
            Orders are available through WhatsApp with COD and pickup options.
            This founder-led workflow keeps every jar fresh and every customer
            interaction personal.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[#4f392a]">
            <span>Home-based bakery</span>
            <span>Freshly baked daily</span>
            <span>Trusted by local customers</span>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden lg:mx-0 lg:max-w-none">
          <Image
            src="/profile/profile.png"
            alt="HaiCrunch founder"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 320px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

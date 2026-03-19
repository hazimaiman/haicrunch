import Image from "next/image";
import Link from "next/link";

import menuItems from "@/data/menu";

const heroProduct = menuItems.find((item) => item.id === "4") ?? menuItems[0];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f4efe6] py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-[#2f2118] sm:text-5xl">
            HaiCrunch - homemade cookies and cakes from Kelantan.
          </h1>
          <p className="max-w-xl text-base text-[#4f392a] sm:text-lg">
            Cozy homemade desserts with signature cookies, celebration cakes, and
            premium choco series made in small batches.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="btn-magnolia btn-magnolia-lilac"
            >
              View Full Menu
            </Link>
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden">
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
  );
}

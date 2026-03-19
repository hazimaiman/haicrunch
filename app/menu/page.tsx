"use client";

import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";

import SiteNav from "@/components/layout/site-nav";
import menuItems, {
  categoryInfo,
  type Product,
  type ProductCategory,
  whatsappNumber,
} from "@/data/menu";

const categoryOrder: ProductCategory[] = ["cookies", "chocobar", "tart", "cake", "brownies"];

type TypeFilter = ProductCategory | "all";
type OrderFilter = "all" | "pickup" | "delivery" | "both";
type SortFilter = "recommended" | "name";

const filterType = (value: string | null): TypeFilter => {
  if (!value) {
    return "all";
  }

  if (categoryOrder.includes(value as ProductCategory)) {
    return value as ProductCategory;
  }

  return "all";
};

function buildWhatsAppLink(productName: string) {
  const message = encodeURIComponent(`Hi, saya nak order ${productName}`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

function getAllFlavors(items: Product[]) {
  return Array.from(new Set(items.map((item) => item.flavor))).sort((a, b) => a.localeCompare(b));
}

function MenuPageContent() {
  const searchParams = useSearchParams();
  const initialType = filterType(searchParams.get("type"));

  const [selectedType, setSelectedType] = useState<TypeFilter>(initialType);
  const [selectedOrder, setSelectedOrder] = useState<OrderFilter>("all");
  const [selectedFlavor, setSelectedFlavor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortFilter>("recommended");

  useEffect(() => {
    setSelectedType(filterType(searchParams.get("type")));
  }, [searchParams]);

  const flavors = useMemo(() => getAllFlavors(menuItems), []);

  const filteredItems = useMemo(() => {
    const filtered = menuItems.filter((item) => {
      const typeOk = selectedType === "all" || item.category === selectedType;
      const orderOk =
        selectedOrder === "all" ||
        item.orderMode === selectedOrder ||
        (selectedOrder !== "both" && item.orderMode === "both");
      const flavorOk = selectedFlavor === "all" || item.flavor === selectedFlavor;
      return typeOk && orderOk && flavorOk;
    });

    const sorted = [...filtered];

    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort((a, b) => a.sortOrder - b.sortOrder);
    }

    return sorted;
  }, [selectedType, selectedOrder, selectedFlavor, sortBy]);

  const activeCategory = selectedType === "all" ? null : categoryInfo[selectedType];

  return (
    <div className="min-h-screen bg-[#f9f5ed] text-[#2f2118]">
      <SiteNav activePage="menu" />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-8">
        <section className="overflow-hidden rounded-[28px] border border-[#eadcc8] bg-white">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 px-6 py-10 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8a6c4f]">
                {selectedType === "all" ? "Our Full Menu" : activeCategory?.label}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-[#1f3a31] sm:text-5xl">
                {selectedType === "all" ? "Browse all HaiCrunch products" : activeCategory?.label}
              </h1>
              <p className="text-base leading-relaxed text-[#4f392a]">
                {selectedType === "all"
                  ? "Filter by type, flavor, and order mode to quickly find what you want."
                  : activeCategory?.story}
              </p>
              {activeCategory && (
                <p className="text-sm font-semibold text-[#6f4d38]">Best for: {activeCategory.bestFor}</p>
              )}
            </div>
            <div className="relative min-h-[300px]">
              <Image
                src={
                  selectedType === "all"
                    ? "/menu/10.JPG"
                    : menuItems.find((item) => item.category === selectedType)?.image ?? "/menu/10.JPG"
                }
                alt="Menu category cover"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-[#eadcc8] bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-4xl font-semibold text-[#1f3a31]">Filter</h2>
              <button
                type="button"
                className="text-sm font-semibold text-[#6f4d38] underline"
                onClick={() => {
                  setSelectedType("all");
                  setSelectedOrder("all");
                  setSelectedFlavor("all");
                  setSortBy("recommended");
                }}
              >
                Clear all
              </button>
            </div>

            <div className="space-y-6 text-sm text-[#3f2f24]">
              <div className="space-y-2">
                <p className="font-semibold uppercase tracking-[0.06em]">Type</p>
                <select
                  value={selectedType}
                  onChange={(event) => setSelectedType(event.target.value as TypeFilter)}
                  className="h-11 w-full rounded-xl border border-[#dcc8ab] px-3 outline-none focus:border-[#7a5a43]"
                >
                  <option value="all">All types</option>
                  {categoryOrder.map((category) => (
                    <option key={category} value={category}>
                      {categoryInfo[category].label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <p className="font-semibold uppercase tracking-[0.06em]">Pick up / delivery</p>
                <select
                  value={selectedOrder}
                  onChange={(event) => setSelectedOrder(event.target.value as OrderFilter)}
                  className="h-11 w-full rounded-xl border border-[#dcc8ab] px-3 outline-none focus:border-[#7a5a43]"
                >
                  <option value="all">All modes</option>
                  <option value="pickup">Pick up only</option>
                  <option value="delivery">Delivery only</option>
                  <option value="both">Pick up and delivery</option>
                </select>
              </div>

              <div className="space-y-2">
                <p className="font-semibold uppercase tracking-[0.06em]">Flavor</p>
                <select
                  value={selectedFlavor}
                  onChange={(event) => setSelectedFlavor(event.target.value)}
                  className="h-11 w-full rounded-xl border border-[#dcc8ab] px-3 outline-none focus:border-[#7a5a43]"
                >
                  <option value="all">All flavors</option>
                  {flavors.map((flavor) => (
                    <option key={flavor} value={flavor}>
                      {flavor}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#eadcc8] bg-white px-4 py-3 text-sm">
              <p className="font-semibold text-[#5a4231]">
                Showing {filteredItems.length} product{filteredItems.length === 1 ? "" : "s"}
              </p>
              <label className="flex items-center gap-2 text-[#4e3a2b]">
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortFilter)}
                  className="h-10 rounded-xl border border-[#dcc8ab] px-3 outline-none focus:border-[#7a5a43]"
                >
                  <option value="recommended">Recommended</option>
                  <option value="name">Name</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-[#eadcc8] bg-white p-3 shadow-sm shadow-[#deceb8]/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 100vw"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-[#5a4231]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2 px-1 pb-1 pt-4">
                    <h3 className="text-3xl font-semibold leading-tight text-[#1f3a31]">{item.name}</h3>
                    <p className="text-sm text-[#6b503d]">{item.price}</p>
                    <p className="text-sm leading-relaxed text-[#4f392a]">{item.description}</p>
                    {item.flavorOptions && (
                      <p className="text-xs text-[#6b503d]">
                        Flavor options: {item.flavorOptions.join(", ")}
                      </p>
                    )}
                    <a
                      href={buildWhatsAppLink(item.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#6f4d38] underline decoration-[#d8c0a2] underline-offset-4"
                    >
                      <FaWhatsapp /> Order via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f5ed]" />}>
      <MenuPageContent />
    </Suspense>
  );
}

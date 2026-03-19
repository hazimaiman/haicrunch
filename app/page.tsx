import FloatingWhatsAppButton from "@/components/layout/floating-whatsapp-button";
import SiteFooter from "@/components/layout/site-footer";
import SiteNav from "@/components/layout/site-nav";
import FounderStorySection from "@/components/sections/founder-story-section";
import HeroSection from "@/components/sections/hero-section";
import OrderOptionsSection from "@/components/sections/order-options-section";
import ProductsSection from "@/components/sections/products-section";
import ReviewsSection from "@/components/sections/reviews-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f1e6] text-[#2f2118]">
      <FloatingWhatsAppButton />
      <SiteNav activePage="home" />

      <main id="top" className="w-full">
        <HeroSection />
        <FounderStorySection />
        <ProductsSection />
        <OrderOptionsSection />
        <ReviewsSection />
      </main>

      <SiteFooter />
    </div>
  );
}

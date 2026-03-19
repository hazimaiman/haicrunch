import Link from "next/link";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa6";

import { whatsappNumber } from "@/data/menu";

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-[#9ecdb7] bg-[#b9e5d1] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4 text-[#143c2f]">
            <p className="text-xl font-semibold">HaiCrunch</p>
            <p className="max-w-sm text-sm leading-relaxed text-[#235243]">
              Homemade cookies and cakes from Kelantan, baked in small batches
              with cozy flavors and premium topping choices.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={buildWhatsAppLink("Hi, saya nak order HaiCrunch")}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 transition hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.tiktok.com/@haicrunch_"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md shadow-black/20 transition hover:-translate-y-0.5"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/haicrunch"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md shadow-[#1877F2]/20 transition hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="space-y-2 text-sm text-[#143c2f]">
            <p className="text-base font-semibold">Quick Links</p>
            <Link href="/#about" className="block hover:underline">
              Founder Story
            </Link>
            <Link href="/#products" className="block hover:underline">
              Signature Products
            </Link>
            <Link href="/menu" className="block hover:underline">
              Full Menu
            </Link>
            <Link href="/#reviews" className="block hover:underline">
              Customer Reviews
            </Link>
          </div>

          <div className="space-y-3 text-sm text-[#143c2f]">
            <p className="text-base font-semibold">Contact</p>
            <p>DM on WhatsApp for custom orders and event packages.</p>
            <p>Operating area: Kelantan</p>
            <p>COD and pick up available by schedule.</p>
            <a
              href={buildWhatsAppLink("Hi, saya nak tanya pasal order HaiCrunch")}
              target="_blank"
              rel="noreferrer"
              className="btn-magnolia btn-magnolia-dark"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#94c7b0] pt-4 text-xs text-[#235243]">
          Copyright 2026 HaiCrunch. Homemade cookies and cakes baked with care in
          Kelantan.
        </div>
      </div>
    </footer>
  );
}

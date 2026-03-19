import { FaWhatsapp } from "react-icons/fa6";

import { whatsappNumber } from "@/data/menu";

export default function FloatingWhatsAppButton() {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, saya nak order HaiCrunch"
  )}`;

  return (
    <a
      href={href}
      className="btn-magnolia btn-magnolia-whatsapp fixed bottom-6 right-6 z-50 inline-flex items-center gap-2"
      aria-label="WhatsApp order"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp className="text-lg" />
      WhatsApp Us
    </a>
  );
}

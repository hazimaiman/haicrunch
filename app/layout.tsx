import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HaiCrunch | Homemade Cookies & Cakes",
  description:
    "Fresh homemade cookies, cakes, and snack jars from Kelantan. Baked with love and delivered via WhatsApp or COD.",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo/logo_hc.jpg",
        type: "image/jpeg",
      },
      {
        rel: "shortcut icon",
        url: "/logo/logo_hc.jpg",
        type: "image/jpeg",
      },
      {
        rel: "icon",
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

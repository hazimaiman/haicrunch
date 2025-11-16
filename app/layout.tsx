import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

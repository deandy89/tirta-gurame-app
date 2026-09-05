import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tirta Gurame - Premium Freshwater Aquaculture",
  description:
    "Budidaya ikan ini dilakukan dengan menggunakan media kolam terpal. Teknik pemeliharaannya mengandalkan sistem suplai gelembung udara (aerasi) secara konsisten untuk memastikan kadar oksigen terlarut di dalam air selalu tinggi, sehingga pertumbuhan ikan menjadi lebih optimal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${caveat.variable}`}
    >
      <body className="bg-[#121617] text-slate-800 font-sans antialiased min-h-[100dvh] md:min-h-screen flex items-center justify-center p-0 sm:p-4 md:p-8 select-none">
        {children}
      </body>
    </html>
  );
}

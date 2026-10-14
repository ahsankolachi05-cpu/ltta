import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Learning Through the Arts — Creative Workshops for Community",
    template: "%s — Learning Through the Arts",
  },
  description:
    "Learning Through the Arts (LTTA) is a charity devoted to creativity, imagination and arts development. Music, writing and art workshops for children, youth and adults in Borehamwood, Luton and Bedford.",
  keywords: ["community arts", "charity", "art workshops", "music workshops", "Borehamwood", "Luton", "Bedford", "creative learning"],
  openGraph: {
    title: "Learning Through the Arts — Creativity for Community",
    description: "Music, writing and art workshops that ignite imagination across our community.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

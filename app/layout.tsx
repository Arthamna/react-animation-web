import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/site/header";
import "./globals.css";

const agrandir = localFont({
  src: [
    { path: "../public/fonts/Agrandir-Regular.woff", weight: "300 600", style: "normal" },
    { path: "../public/fonts/Agrandir-GrandHeavy.woff", weight: "700 900", style: "normal" },
  ],
  variable: "--font-agrandir",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arthamna.is-a.dev/"),
  title: { default: "Arthamna Learn How To Frontend", template: "%s — How To Frontend" },
  description: "Frontend designer and developer crafting fast, characterful interfaces through thoughtful visuals, code, and motion.",
  openGraph: { title: "Arthamna Learn How To Frontend", description: "Distinctive interfaces shaped through design, frontend engineering, and purposeful motion.", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#141516" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={agrandir.variable}><body><Header />{children}</body></html>;
}

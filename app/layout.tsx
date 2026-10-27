import type { Metadata, Viewport } from "next";
import { Orbitron, Michroma, Exo_2 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";
import LiquidGlassDefs from "@/components/LiquidGlassDefs";
import { site } from "@/lib/site";
import "./globals.css";

const display = Orbitron({ subsets: ["latin"], weight: ["500", "700", "800", "900"], variable: "--f-display" });
const label = Michroma({ subsets: ["latin"], weight: "400", variable: "--f-label" });
const body = Exo_2({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--f-body" });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description:
    "Abujacars is Abuja's premium car marketplace. Buy brand new and foreign used Mercedes-Benz, BMW, Toyota, Lexus, Ferrari and more, or sell your car for a fair cash offer in 24 hours.",
  openGraph: { images: ["/cars/ferrari-458-top.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0d0d0f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${label.variable} ${body.variable}`}>
      <body>
        <LiquidGlassDefs />
        <ScrollFX />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

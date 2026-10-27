import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Inventory from "@/components/Inventory";

export const metadata: Metadata = {
  title: "Inventory",
  description: "Browse brand new and foreign used cars for sale in Abuja — SUVs, sedans, coupes, pickups and supercars.",
};

export default function InventoryPage() {
  return (
    <>
      <section className="page-hero wrap">
        <nav className="crumbs"><Link href="/">Home</Link> / <span>Inventory</span></nav>
        <h1>Find Your Car</h1>
        <p>Every car on Abujacars is physically inspected in Abuja, with verified customs papers and a clear history.</p>
      </section>
      <Suspense fallback={<div className="wrap" style={{ minHeight: 600 }} />}>
        <Inventory />
      </Suspense>
    </>
  );
}

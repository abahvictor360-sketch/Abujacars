"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brands, bodyTypes, cars } from "@/lib/cars";
import { BodyIcon } from "../Icons";

export default function SelectBy() {
  const [tab, setTab] = useState<"brands" | "types">("brands");
  return (
    <section className="select-by wrap" id="select">
      <div className="section-head" data-reveal>
        <h2 className="h-section">
          <b>Select</b> your car by
        </h2>
        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === "brands"} className={tab === "brands" ? "on" : ""} onClick={() => setTab("brands")}>
            Brands
          </button>
          <button role="tab" aria-selected={tab === "types"} className={tab === "types" ? "on" : ""} onClick={() => setTab("types")}>
            Types
          </button>
        </div>
      </div>

      {tab === "brands" ? (
        <div className="logo-grid" key="brands">
          {brands.slice(0, 8).map((b, i) => (
            <Link key={b.slug} href={`/inventory?brand=${b.slug}`} className="logo-cell" style={{ ["--i" as string]: i }}>
              <Image src={b.logo} alt="" width={84} height={64} />
              <span>{b.name}</span>
              <small>{cars.filter((c) => c.brandSlug === b.slug).length} cars</small>
            </Link>
          ))}
        </div>
      ) : (
        <div className="logo-grid logo-grid--types" key="types">
          {bodyTypes.map((t, i) => (
            <Link key={t.type} href={`/inventory?type=${t.type}`} className="logo-cell" style={{ ["--i" as string]: i }}>
              <BodyIcon name={t.icon} />
              <span>{t.label}</span>
              <small>{cars.filter((c) => c.type === t.type).length} cars</small>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

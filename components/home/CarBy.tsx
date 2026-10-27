"use client";

import Link from "next/link";
import { useState } from "react";
import { cars, Tag } from "@/lib/cars";
import CarCard from "../CarCard";

const tabs: { id: Tag; label: string }[] = [
  { id: "latest", label: "Latest" },
  { id: "featured", label: "Featured" },
  { id: "popular", label: "Popular" },
];

export default function CarBy() {
  const [tab, setTab] = useState<Tag>("popular");
  const list = cars.filter((c) => c.tags.includes(tab)).slice(0, 6);
  return (
    <section className="car-by wrap" id="cars">
      <div className="section-head" data-reveal>
        <h2 className="h-section">
          <b>Car</b> by
        </h2>
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? "on" : ""} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="card-grid" key={tab}>
        {list.map((c, i) => (
          <div key={c.slug} className="pop" style={{ ["--i" as string]: i }}>
            <CarCard car={c} />
          </div>
        ))}
      </div>
      <div className="center-cta">
        <Link href="/inventory" className="btn btn--red">View All {cars.length} Cars</Link>
      </div>
    </section>
  );
}

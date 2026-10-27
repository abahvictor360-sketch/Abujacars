"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { bodyTypes, brands, cars, Condition } from "@/lib/cars";
import CarCard from "./CarCard";

const conditions: Condition[] = ["Brand New", "Foreign Used", "Nigerian Used"];
const budgets = [
  { id: "", label: "Any budget" },
  { id: "0-60", label: "Under ₦60M", min: 0, max: 60e6 },
  { id: "60-150", label: "₦60M – ₦150M", min: 60e6, max: 150e6 },
  { id: "150-300", label: "₦150M – ₦300M", min: 150e6, max: 300e6 },
  { id: "300+", label: "Above ₦300M", min: 300e6, max: Infinity },
];
const sorts = [
  { id: "newest", label: "Newest first" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "mileage", label: "Lowest mileage" },
];

export default function Inventory() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const q = params.get("q") ?? "";
  const brand = params.get("brand") ?? "";
  const type = params.get("type") ?? "";
  const cond = params.get("condition") ?? "";
  const budget = params.get("budget") ?? "";
  const sort = params.get("sort") ?? "newest";

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false });
  };

  const list = useMemo(() => {
    const b = budgets.find((x) => x.id === budget);
    const needle = q.toLowerCase();
    const out = cars.filter(
      (c) =>
        (!needle || `${c.brand} ${c.model} ${c.year} ${c.type} ${c.color}`.toLowerCase().includes(needle)) &&
        (!brand || c.brandSlug === brand) &&
        (!type || c.type === type) &&
        (!cond || c.condition === cond) &&
        (!b || !("min" in b) || (c.price !== null && c.price >= b.min! && c.price < b.max!))
    );
    const price = (n: number | null) => n ?? Number.MAX_SAFE_INTEGER;
    out.sort((a, z) => {
      if (sort === "price-asc") return price(a.price) - price(z.price);
      if (sort === "price-desc") return price(z.price) - price(a.price);
      if (sort === "mileage") return a.mileage - z.mileage;
      return z.year - a.year;
    });
    return out;
  }, [q, brand, type, cond, budget, sort]);

  const active = [q, brand, type, cond, budget].filter(Boolean).length;

  return (
    <section className="inv wrap">
      <aside className={`filters glass ${open ? "is-open" : ""}`} aria-label="Filters">
        <div className="field">
          <label htmlFor="q">Search</label>
          <input id="q" className="input" defaultValue={q} placeholder="Model, year, colour…" onChange={(e) => set("q", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="brand">Brand</label>
          <select id="brand" className="select" value={brand} onChange={(e) => set("brand", e.target.value)}>
            <option value="">All brands</option>
            {brands.map((b) => (
              <option key={b.slug} value={b.slug}>{b.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <span>Body type</span>
          <div className="chips">
            <button className={`chip ${!type ? "on" : ""}`} onClick={() => set("type", "")}>All</button>
            {bodyTypes.map((t) => (
              <button key={t.type} className={`chip ${type === t.type ? "on" : ""}`} onClick={() => set("type", t.type)}>
                {t.type}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <span>Condition</span>
          <div className="chips">
            <button className={`chip ${!cond ? "on" : ""}`} onClick={() => set("condition", "")}>Any</button>
            {conditions.map((c) => (
              <button key={c} className={`chip ${cond === c ? "on" : ""}`} onClick={() => set("condition", c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget</label>
          <select id="budget" className="select" value={budget} onChange={(e) => set("budget", e.target.value)}>
            {budgets.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
        </div>
        {active > 0 && (
          <button className="btn btn--outline btn--sm" onClick={() => router.replace(pathname, { scroll: false })}>
            Clear filters
          </button>
        )}
      </aside>

      <div>
        <div className="inv__bar">
          <span className="inv__count">
            <b>{list.length}</b> {list.length === 1 ? "car" : "cars"} available
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn--outline btn--sm filters-toggle" onClick={() => setOpen((o) => !o)}>
              Filters{active ? ` (${active})` : ""}
            </button>
            <select className="select" style={{ height: 38, width: "auto" }} value={sort} onChange={(e) => set("sort", e.target.value)} aria-label="Sort">
              {sorts.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>
        {list.length ? (
          <div className="card-grid">
            {list.map((c, i) => (
              <div key={c.slug} className="pop" style={{ ["--i" as string]: Math.min(i, 8) }}>
                <CarCard car={c} priority={i < 3} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>No cars match those filters yet.</p>
            <p>Tell us what you want and we&apos;ll source it — <a href="/contact" style={{ color: "var(--red-2)" }}>request a car</a>.</p>
          </div>
        )}
      </div>
    </section>
  );
}

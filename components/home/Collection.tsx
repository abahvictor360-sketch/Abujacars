import Image from "next/image";
import Link from "next/link";
import { cars, formatNairaShort } from "@/lib/cars";

const picks = [
  "bugatti-chiron-pur-sport-2021",
  "ferrari-laferrari-2016",
  "ferrari-f8-tributo-2022",
  "mercedes-amg-gt-63-2024",
  "bmw-m8-competition-2023",
  "chevrolet-corvette-c8-2023",
];

/** Pinned horizontal "scroll world": vertical scroll drives the track sideways. */
export default function Collection() {
  const list = picks.map((s) => cars.find((c) => c.slug === s)!);
  return (
    <section className="collection" data-progress="pin" style={{ ["--n" as string]: list.length }}>
      <div className="collection__stage">
        <div className="collection__head wrap">
          <h2 className="h-section">
            <b>The</b> Supercar Collection
          </h2>
          <span className="collection__count">
            <i style={{ ["--n" as string]: list.length }} /> {list.length} exotics in stock
          </span>
        </div>
        <div className="collection__track">
          {list.map((c, i) => (
            <Link href={`/cars/${c.slug}`} key={c.slug} className="exotic" style={{ ["--i" as string]: i }}>
              <span className="exotic__ghost" aria-hidden>{c.brand.split("-")[0].toUpperCase()}</span>
              <div className="exotic__img">
                <Image src={c.cutout} alt={`${c.brand} ${c.model}`} fill sizes="(max-width: 800px) 85vw, 52vw" />
              </div>
              <div className="exotic__meta glass glass--liquid">
                <small>0{i + 1} / {c.year}</small>
                <strong>{c.brand} {c.model}</strong>
                <span>{c.power} · {c.engine}</span>
                <em>{formatNairaShort(c.price)}</em>
              </div>
            </Link>
          ))}
        </div>
        <div className="collection__bar"><i /></div>
      </div>
    </section>
  );
}

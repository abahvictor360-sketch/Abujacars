import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars, formatNaira, getCar } from "@/lib/cars";
import { site, waLink } from "@/lib/site";
import Gallery from "@/components/Gallery";
import CarCard from "@/components/CarCard";
import { BrandIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCar((await params).slug);
  if (!car) return {};
  return {
    title: `${car.year} ${car.brand} ${car.model}`,
    description: `${car.condition} ${car.year} ${car.brand} ${car.model} for sale in Abuja — ${formatNaira(car.price)}. ${car.blurb}`,
    openGraph: { images: [car.photos[0]] },
  };
}

export default async function CarPage({ params }: Props) {
  const car = getCar((await params).slug);
  if (!car) notFound();

  const name = `${car.year} ${car.brand} ${car.model}`;
  const related = cars.filter((c) => c.slug !== car.slug && (c.brandSlug === car.brandSlug || c.type === car.type)).slice(0, 3);
  const specs = [
    ["Year", car.year],
    ["Condition", car.condition],
    ["Mileage", car.mileage ? `${car.mileage.toLocaleString()} km` : "0 km"],
    ["Body", car.type],
    ["Engine", car.engine],
    ["Power", car.power],
    ["Transmission", car.transmission],
    ["Fuel", car.fuel],
    ["Colour", car.color],
    ["Location", car.location],
    ["Papers", "Customs verified"],
    ["Inspection", "150-point passed"],
  ];

  return (
    <>
      <section className="page-hero wrap" style={{ paddingBottom: 30 }}>
        <nav className="crumbs">
          <Link href="/">Home</Link> / <Link href="/inventory">Inventory</Link> /{" "}
          <Link href={`/inventory?brand=${car.brandSlug}`}>{car.brand}</Link>
        </nav>
      </section>

      <section className="detail wrap">
        <Gallery cutout={car.cutout} photos={car.photos} alt={name} />
        <aside className="buybox glass glass--liquid">
          <span className="eyebrow">{car.brand}</span>
          <h1>{car.model}</h1>
          <div className="sub">{car.year} · {car.power} · {car.location}</div>
          <div className="price">{formatNaira(car.price)}</div>
          <div className="badges">
            <span className="badge badge--red">{car.condition}</span>
            <span className="badge">{car.type}</span>
            <span className="badge">{car.fuel}</span>
          </div>
          <p style={{ color: "rgba(255,255,255,.8)", fontSize: 14, margin: "0 0 22px" }}>{car.blurb}</p>
          <div className="actions">
            <a className="btn btn--red" href={waLink(`Hi Abujacars, I'm interested in the ${name} (${formatNaira(car.price)}). Is it still available?`)} target="_blank" rel="noreferrer">
              <BrandIcon name="whatsapp" /> Enquire on WhatsApp
            </a>
            <a className="btn btn--glass" href={waLink(`Hi Abujacars, I'd like to book an inspection / test drive for the ${name}.`)} target="_blank" rel="noreferrer">
              Book a Test Drive
            </a>
            <a className="btn btn--outline" href={`tel:${site.phone.replace(/\s/g, "")}`}>Call {site.phone}</a>
            <Link className="btn btn--outline" href="/sell">Trade in your car</Link>
          </div>
        </aside>
      </section>

      <section className="wrap">
        <div className="section-head">
          <h2 className="h-section"><b>Full</b> specifications</h2>
        </div>
        <div className="specs-grid" data-reveal>
          {specs.map(([k, v]) => (
            <div className="spec" key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="related wrap">
          <div className="section-head">
            <h2 className="h-section"><b>You may</b> also like</h2>
            <Link href="/inventory" className="btn btn--outline btn--sm">All cars</Link>
          </div>
          <div className="card-grid">
            {related.map((c) => (
              <CarCard key={c.slug} car={c} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

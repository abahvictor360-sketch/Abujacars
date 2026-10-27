import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brands, cars } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Brands",
  description: "Shop cars in Abuja by brand: Mercedes-Benz, BMW, Toyota, Lexus, Ferrari, Bugatti, Land Rover, Cadillac and Chevrolet.",
};

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero wrap">
        <nav className="crumbs"><Link href="/">Home</Link> / <span>Brands</span></nav>
        <h1>Shop By Brand</h1>
        <p>From everyday Toyotas to one-of-sixty Bugattis — pick a marque and see what&apos;s in stock today.</p>
      </section>
      <section className="brand-list wrap">
        {brands.map((b, i) => {
          const list = cars.filter((c) => c.brandSlug === b.slug);
          const hero = list[0];
          return (
            <Link key={b.slug} href={`/inventory?brand=${b.slug}`} className="brand-card" data-reveal style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}>
              <div className="brand-card__top">
                <Image src={b.logo} alt="" width={60} height={44} />
                <span>{list.length} in stock</span>
              </div>
              {hero && (
                <div className="brand-card__car">
                  <Image src={hero.cutout} alt={`${hero.brand} ${hero.model}`} fill sizes="300px" />
                </div>
              )}
              <h2>{b.name}</h2>
            </Link>
          );
        })}
      </section>
    </>
  );
}

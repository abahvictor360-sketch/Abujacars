import Image from "next/image";
import Link from "next/link";
import { Car, formatNaira } from "@/lib/cars";

export default function CarCard({ car, priority = false }: { car: Car; priority?: boolean }) {
  return (
    <article className="car-card">
      <div className="car-card__inner">
        <span className="car-card__cond">{car.condition}</span>
        <div className="car-card__img">
          <Image
            src={car.cutout}
            alt={`${car.year} ${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 700px) 80vw, 320px"
            priority={priority}
          />
        </div>
        <h3 className="car-card__brand">{car.brand}</h3>
        <p className="car-card__model">
          {car.model} {car.year}
        </p>
        <dl className="car-card__specs">
          <div><dt>Price:</dt><dd>{formatNaira(car.price)}</dd></div>
          <div><dt>Type:</dt><dd>{car.type}</dd></div>
          <div><dt>Engine:</dt><dd>{car.engine}</dd></div>
        </dl>
        <Link href={`/cars/${car.slug}`} className="btn btn--outline btn--block">
          Explore Car
        </Link>
      </div>
    </article>
  );
}

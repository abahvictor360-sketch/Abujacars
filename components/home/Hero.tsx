import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "../Icons";

const features = [
  { n: "01", icon: "inspect", label: "150-Point Inspection" },
  { n: "02", icon: "delivery", label: "Nationwide Delivery" },
  { n: "03", icon: "gauge", label: "Cash Offer In 24 Hrs" },
  { n: "04", icon: "finance", label: "Flexible Financing" },
  { n: "05", icon: "papers", label: "Verified Papers" },
] as const;

/**
 * "Scroll world" hero: the section is taller than the viewport and its stage
 * is sticky, so scrolling drives `--p` (0 → 1) which rotates the car, sweeps
 * the feature dial and lifts the title.
 */
export default function Hero() {
  return (
    <section className="hero" data-progress="pin">
      <div className="hero__stage">
        <div className="hero__red" />
        <div className="hero__frame glass">
          <div className="hero__dots hero__dots--l"><i /><i /><i className="on" /><i /></div>
          <div className="hero__dots hero__dots--r"><i /><i /><i /><i /></div>
        </div>

        <h1 className="hero__title" aria-label="Abujacars">
          {"ABUJACARS".split("").map((l, i) => (
            <span key={i} style={{ ["--i" as string]: i }}>{l}</span>
          ))}
        </h1>

        <div className="hero__car">
          <Image
            src="/cars/cut/ferrari-458-top.png"
            alt="Red Ferrari 458 Italia seen from above"
            width={445}
            height={857}
            priority
            sizes="(max-width: 700px) 60vw, 420px"
          />
        </div>

        <div className="hero__copy">
          <h2>Abuja&apos;s Home Of Premium Cars</h2>
          <p>
            Buy brand new and foreign used luxury cars, inspected and verified — or sell yours for a fair cash offer
            within 24 hours.
          </p>
        </div>

        <div className="hero__cta">
          <Link href="/inventory" className="btn btn--red">Browse Cars</Link>
          <Link href="/sell" className="btn btn--glass">Sell Your Car</Link>
        </div>

        <div className="dial" aria-label="Why Abujacars">
          <div className="dial__ring">
            {features.map((f, i) => (
              <div key={f.n} className="dial__seg" style={{ ["--k" as string]: i - 2 }}>
                <span className="dial__num">{f.n}</span>
                <FeatureIcon name={f.icon} />
                <span className="dial__label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dial__lens glass" aria-hidden />

        <div className="hero__scroll" aria-hidden>
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}

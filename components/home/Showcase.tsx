import Image from "next/image";

export default function Showcase() {
  return (
    <section className="showcase wrap">
      <figure className="panel" data-reveal>
        <Image src="/cars/mercedes-gle63-rear.jpg" alt="Rear of a white Mercedes-AMG GLE 63 S with carbon diffuser" fill sizes="(max-width: 800px) 100vw, 50vw" />
        <figcaption>
          <strong>Built For<br />Performance</strong>
          <span>Hand-picked AMG, M and GR cars engineered for those who love to drive.</span>
        </figcaption>
      </figure>
      <figure className="panel" data-reveal style={{ ["--d" as string]: "120ms" }}>
        <Image src="/cars/bmw-i7.jpg" alt="Black BMW i7 in a showroom under a ring light" fill sizes="(max-width: 800px) 100vw, 50vw" />
        <figcaption>
          <strong className="dots">
            <span>Inspected</span>
            <span>Verified</span>
            <span>Guaranteed.</span>
          </strong>
          <span>Every car passes a 150-point check and a full custom &amp; papers verification.</span>
        </figcaption>
      </figure>
    </section>
  );
}

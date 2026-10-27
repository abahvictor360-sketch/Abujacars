import type { Metadata } from "next";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { BrandIcon } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit the Abujacars showroom in Wuse 2, Abuja, call us or chat on WhatsApp.",
};

const ico = (d: string) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export default function ContactPage() {
  return (
    <>
      <section className="page-hero wrap">
        <nav className="crumbs"><Link href="/">Home</Link> / <span>Contact</span></nav>
        <h1>Visit The Showroom</h1>
        <p>Come see the cars in person, book a test drive or just ask a question. We reply on WhatsApp within minutes.</p>
      </section>
      <section className="split wrap">
        <div>
          <div className="contact-cards">
            <a className="contact-card" href={waLink("Hi Abujacars, I have a question.")} target="_blank" rel="noreferrer">
              <span className="ico"><BrandIcon name="whatsapp" size={20} /></span>
              <div><small>WhatsApp</small>Chat with sales</div>
            </a>
            <a className="contact-card" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <span className="ico">{ico("M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z")}</span>
              <div><small>Phone</small>{site.phone}</div>
            </a>
            <a className="contact-card" href={`mailto:${site.email}`}>
              <span className="ico">{ico("M4 4h16v16H4zM4 6l8 7 8-7")}</span>
              <div><small>Email</small>{site.email}</div>
            </a>
            <div className="contact-card">
              <span className="ico">{ico("M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5")}</span>
              <div><small>Showroom · {site.hours}</small>{site.address}</div>
            </div>
          </div>
          <div className="map">
            <iframe title="Abujacars showroom map" loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=15&output=embed`} />
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

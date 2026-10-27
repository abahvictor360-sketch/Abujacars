import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { SocialIcons } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <Logo />
          <p className="footer__about">
            Find the perfect luxury and everyday car in Abuja at fair, transparent prices. Every car inspected, every
            paper verified — and when it&apos;s time to move on, we&apos;ll buy yours.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/inventory">Inventory</Link></li>
            <li><Link href="/brands">Brands</Link></li>
            <li><Link href="/inventory?type=SUV">Luxury SUVs</Link></li>
            <li><Link href="/inventory?type=Supercar">Sports Cars</Link></li>
            <li><Link href="/sell">Sell Your Car</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{site.address}</li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p className="footer__about">Get first access to new arrivals, price drops and exclusive deals on WhatsApp.</p>
          <Link href="/#stay-in-touch" className="btn btn--ghost btn--sm">Join the list</Link>
        </div>
      </div>
      <div className="wrap footer__bar">
        <span>© {new Date().getFullYear()} Abujacars. All rights reserved.</span>
        <SocialIcons />
      </div>
    </footer>
  );
}

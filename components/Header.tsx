"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/inventory", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setMenu(false);
    setSearch(false);
  }, [pathname]);

  useEffect(() => {
    if (search) inputRef.current?.focus();
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearch(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [search]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/inventory${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ""}`);
  };

  return (
    <>
      <header className={`header ${scrolled ? "header--solid" : ""}`}>
        <div className="header__inner wrap">
          <Logo />
          <nav className="header__nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={pathname.startsWith(n.href) ? "is-active" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="header__tools">
            <span className="header__lang">
              NG <i>₦</i>
            </span>
            <button className="icon-btn" aria-label="Search cars" onClick={() => setSearch((s) => !s)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <button className={`icon-btn burger ${menu ? "is-open" : ""}`} aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <form className={`search-drop glass glass--liquid ${search ? "is-open" : ""}`} onSubmit={submit} role="search">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Land Cruiser, G 63, Ferrari…"
            aria-label="Search inventory"
          />
          <button className="btn btn--red btn--sm" type="submit">
            Search
          </button>
        </form>
      </header>

      <div className={`menu ${menu ? "is-open" : ""}`} aria-hidden={!menu}>
        <div className="menu__panel glass glass--liquid">
          <nav aria-label="Menu">
            {[{ href: "/", label: "Home" }, { href: "/inventory", label: "Inventory" }, ...nav.slice(1)].map((n, i) => (
              <Link key={n.href} href={n.href} style={{ transitionDelay: `${menu ? 80 + i * 60 : 0}ms` }}>
                <small>0{i + 1}</small>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="menu__foot">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.address}</span>
          </div>
        </div>
      </div>
    </>
  );
}

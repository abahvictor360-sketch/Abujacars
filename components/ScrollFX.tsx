"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll engine.
 * - `[data-reveal]` elements get `.in` once they enter the viewport.
 * - `[data-progress]` elements get `--p` (0 → 1) as they travel through the
 *   viewport, or across their own height when `data-progress="pin"` (used by
 *   sticky "scroll world" sections).
 * - `<html>` gets `.lg-svg` on Chromium so liquid glass can use SVG refraction.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const ua = (navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } }).userAgentData;
    if (ua?.brands?.some((b) => b.brand === "Chromium")) document.documentElement.classList.add("lg-svg");
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    if (!reduce) reveals.forEach((el) => io.observe(el));

    const tracked = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of tracked) {
        const r = el.getBoundingClientRect();
        let p: number;
        if (el.dataset.progress === "pin") {
          const span = r.height - vh;
          p = span > 0 ? -r.top / span : 0;
        } else {
          p = (vh - r.top) / (vh + r.height);
        }
        el.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
      }
      document.documentElement.style.setProperty("--sy", String(window.scrollY));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}

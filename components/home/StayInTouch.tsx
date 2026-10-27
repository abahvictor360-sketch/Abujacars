"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

const reel = [
  "/cars/mercedes-gle-coupe-road.jpg",
  "/cars/bugatti-chiron.jpg",
  "/cars/toyota-lc300-snow.jpg",
  "/cars/bmw-x6m.jpg",
  "/cars/mercedes-amg-gt.jpg",
  "/cars/land-rover-defender.jpg",
  "/cars/ferrari-458-top-dark.jpg",
];

export default function StayInTouch() {
  const [contact, setContact] = useState("");
  const [open, setOpen] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!open) return;
    const t = setInterval(() => setFrame((f) => (f + 1) % reel.length), 2600);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      clearInterval(t);
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(`Hi Abujacars, please add me to your new arrivals list. My contact: ${contact}`), "_blank");
  };

  return (
    <section className="stay wrap" id="stay-in-touch">
      <div className="stay__frame" data-reveal>
        <div className="stay__form">
          <h2>Stay In Touch</h2>
          <p>Join our new-arrivals list and get exclusive deals and price drops you won&apos;t find anywhere else — straight to your WhatsApp.</p>
          <form onSubmit={submit} className="pill-input">
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your email or phone"
              aria-label="Email or phone"
            />
            <button type="submit" aria-label="Join list">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </form>
          <div className="stay__stripes" aria-hidden><i /><i /><i /><i /><i /></div>
        </div>
        <button className="stay__video" onClick={() => setOpen(true)} aria-label="Play showroom reel">
          <Image src="/cars/bmw-4-series.jpg" alt="" fill sizes="(max-width: 800px) 100vw, 55vw" />
          <span className="play glass glass--liquid">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="stay__video-cap">Showroom Reel · 0:18</span>
        </button>
      </div>

      {open && (
        <div className="reel" role="dialog" aria-modal="true" aria-label="Showroom reel" onClick={() => setOpen(false)}>
          <div className="reel__screen" onClick={(e) => e.stopPropagation()}>
            {reel.map((src, i) => (
              <Image key={src} src={src} alt="" fill sizes="90vw" className={i === frame ? "on" : ""} />
            ))}
            <div className="reel__progress">
              {reel.map((_, i) => (
                <i key={i} className={i < frame ? "done" : i === frame ? "on" : ""} />
              ))}
            </div>
            <button className="reel__close glass glass--liquid" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

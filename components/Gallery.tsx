"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * First slide is the background-removed cutout on a studio stage; the rest
 * are the original photos.
 */
export default function Gallery({ cutout, photos, alt }: { cutout: string; photos: string[]; alt: string }) {
  const slides = [cutout, ...photos];
  const [i, setI] = useState(0);
  const studio = i === 0;
  return (
    <div className="gallery">
      <div className={`gallery__main ${studio ? "gallery__main--studio" : ""}`}>
        {studio ? (
          <div className="studio__car" key="studio">
            <Image src={cutout} alt={alt} fill priority sizes="(max-width: 900px) 100vw, 60vw" />
          </div>
        ) : (
          <Image key={slides[i]} src={slides[i]} alt={alt} fill sizes="(max-width: 900px) 100vw, 60vw" />
        )}
      </div>
      <div className="gallery__thumbs">
        {slides.map((p, k) => (
          <button key={p} className={`${k === i ? "on" : ""} ${k === 0 ? "thumb--studio" : ""}`} onClick={() => setI(k)} aria-label={k === 0 ? "Studio view" : `Photo ${k}`}>
            <Image src={p} alt="" fill sizes="96px" />
          </button>
        ))}
      </div>
    </div>
  );
}

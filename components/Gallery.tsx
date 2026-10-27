"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery__main">
        <Image key={photos[i]} src={photos[i]} alt={alt} fill priority sizes="(max-width: 900px) 100vw, 60vw" />
      </div>
      {photos.length > 1 && (
        <div className="gallery__thumbs">
          {photos.map((p, k) => (
            <button key={p} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}>
              <Image src={p} alt="" fill sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

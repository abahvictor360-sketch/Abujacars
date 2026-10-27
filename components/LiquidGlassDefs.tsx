/**
 * SVG filter used by `.glass--liquid` surfaces. Chromium applies it through
 * `backdrop-filter: url(#lg-refract)` for a real refraction/lensing edge;
 * other browsers fall back to blur + saturate + specular highlights in CSS.
 */
export default function LiquidGlassDefs() {
  return (
    <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id="lg-refract" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="22" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

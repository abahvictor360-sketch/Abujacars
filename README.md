# Abujacars

Premium car marketplace for Abuja — buy and sell cars. Built with Next.js (App Router), deployed on Vercel.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Scroll-driven home: pinned hero with rotating feature dial and liquid-glass lens, brand/type selector, pinned horizontal supercar collection, latest/featured/popular cars, newsletter + showroom reel |
| `/inventory` | All cars with search, brand, body type, condition, budget filters and sorting (URL-synced, e.g. `/inventory?brand=toyota&type=SUV`) |
| `/cars/[slug]` | Car detail: gallery, price, specs, WhatsApp enquiry / test drive |
| `/brands` | Shop by brand |
| `/sell` | 2-step "sell your car" form → sends details to WhatsApp |
| `/contact` | Showroom details, map and contact form → WhatsApp |

## Editing content

- **Business details** (phone, WhatsApp number, email, address, socials): `lib/site.ts`
- **Cars, prices, brands**: `lib/cars.ts`
- **Photos**: full photos in `public/cars/`, background-removed cutouts in `public/cars/cut/`

### Adding a car

1. Put the photo in `public/cars/`.
2. Remove the background: `pip install "rembg[cpu]" pillow && python scripts/remove-bg.py public/cars/new-car.jpg`
3. Add an entry to `cars` in `lib/cars.ts` pointing `cutout` at `/cars/cut/new-car.png` and `photos` at the full photo(s).

## Design

- Fonts: Orbitron (display), Michroma (labels), Exo 2 (body) via `next/font`.
- Liquid glass: `.glass` / `.glass--liquid` in `app/globals.css`; Chromium additionally gets real refraction through the SVG filter in `components/LiquidGlassDefs.tsx`.
- Scroll world: `components/ScrollFX.tsx` exposes scroll progress as the CSS variable `--p` on `[data-progress]` sections and reveals `[data-reveal]` elements.

## Develop

```bash
npm install
npm run dev
```

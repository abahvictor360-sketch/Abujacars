export type BodyType = "Supercar" | "SUV" | "Sedan" | "Coupe" | "Pickup";
export type Condition = "Brand New" | "Foreign Used" | "Nigerian Used";
export type Tag = "latest" | "featured" | "popular";

export type Car = {
  slug: string;
  brand: string;
  brandSlug: string;
  model: string;
  year: number;
  /** Price in Naira. null = price on request */
  price: number | null;
  type: BodyType;
  condition: Condition;
  mileage: number;
  engine: string;
  power: string;
  transmission: string;
  fuel: string;
  color: string;
  location: string;
  /** Background-removed hero shot used on cards */
  cutout: string;
  /** Full photos used on the detail page */
  photos: string[];
  tags: Tag[];
  blurb: string;
};

export type Brand = { slug: string; name: string; logo: string };

export const brands: Brand[] = [
  { slug: "mercedes-benz", name: "Mercedes-Benz", logo: "/brands/mercedes.svg" },
  { slug: "bmw", name: "BMW", logo: "/brands/bmw.svg" },
  { slug: "toyota", name: "Toyota", logo: "/brands/toyota.svg" },
  { slug: "lexus", name: "Lexus", logo: "/brands/lexus.svg" },
  { slug: "ferrari", name: "Ferrari", logo: "/brands/ferrari.svg" },
  { slug: "bugatti", name: "Bugatti", logo: "/brands/bugatti.svg" },
  { slug: "land-rover", name: "Land Rover", logo: "/brands/landrover.svg" },
  { slug: "cadillac", name: "Cadillac", logo: "/brands/cadillac.svg" },
  { slug: "chevrolet", name: "Chevrolet", logo: "/brands/chevrolet.svg" },
];

export const bodyTypes: { type: BodyType; label: string; icon: string }[] = [
  { type: "SUV", label: "SUVs", icon: "suv" },
  { type: "Sedan", label: "Sedans", icon: "sedan" },
  { type: "Coupe", label: "Coupes", icon: "coupe" },
  { type: "Supercar", label: "Supercars", icon: "supercar" },
  { type: "Pickup", label: "Pickups", icon: "pickup" },
];

const p = (f: string) => `/cars/${f}.jpg`;
const c = (f: string) => `/cars/cut/${f}.png`;

export const cars: Car[] = [
  {
    slug: "ferrari-458-italia-2015",
    brand: "Ferrari", brandSlug: "ferrari", model: "458 Italia", year: 2015,
    price: 285_000_000, type: "Supercar", condition: "Foreign Used", mileage: 18400,
    engine: "4.5L Naturally Aspirated V8", power: "562 hp", transmission: "7-Speed Dual-Clutch",
    fuel: "Petrol", color: "Rosso Corsa", location: "Maitama, Abuja",
    cutout: c("ferrari-458-top-side"), photos: [p("ferrari-458-top"), p("ferrari-458-top-dark")],
    tags: ["featured", "popular"],
    blurb: "The last naturally aspirated mid-engine V8 Ferrari. Screams to 9,000 rpm and looks like nothing else on Abuja roads.",
  },
  {
    slug: "bugatti-chiron-pur-sport-2021",
    brand: "Bugatti", brandSlug: "bugatti", model: "Chiron Pur Sport", year: 2021,
    price: null, type: "Supercar", condition: "Foreign Used", mileage: 2100,
    engine: "8.0L Quad-Turbo W16", power: "1,479 hp", transmission: "7-Speed Dual-Clutch",
    fuel: "Petrol", color: "Agile Blue / Carbon", location: "By appointment",
    cutout: c("bugatti-chiron"), photos: [p("bugatti-chiron"), p("bugatti-chiron-top")],
    tags: ["featured"],
    blurb: "One of 60. The handling-focused Chiron with a fixed rear wing, lighter wheels and a sharper gearbox. Viewing strictly by appointment.",
  },
  {
    slug: "ferrari-f8-tributo-2022",
    brand: "Ferrari", brandSlug: "ferrari", model: "F8 Tributo", year: 2022,
    price: 520_000_000, type: "Supercar", condition: "Foreign Used", mileage: 6200,
    engine: "3.9L Twin-Turbo V8", power: "710 hp", transmission: "7-Speed Dual-Clutch",
    fuel: "Petrol", color: "Giallo Modena", location: "Maitama, Abuja",
    cutout: c("ferrari-f8"), photos: [p("ferrari-f8")],
    tags: ["latest", "featured"],
    blurb: "Ferrari's most powerful V8 berlinetta. 0–100 km/h in 2.9 seconds in a colour you will never lose in a car park.",
  },
  {
    slug: "ferrari-laferrari-2016",
    brand: "Ferrari", brandSlug: "ferrari", model: "LaFerrari", year: 2016,
    price: null, type: "Supercar", condition: "Foreign Used", mileage: 3900,
    engine: "6.3L V12 + HY-KERS Hybrid", power: "950 hp", transmission: "7-Speed Dual-Clutch",
    fuel: "Hybrid", color: "Rosso Corsa", location: "By appointment",
    cutout: c("laferrari"), photos: [p("laferrari")],
    tags: ["featured"],
    blurb: "The hybrid hypercar that defined a generation. Collector-grade, fully documented, price on request.",
  },
  {
    slug: "chevrolet-corvette-c8-2023",
    brand: "Chevrolet", brandSlug: "chevrolet", model: "Corvette Stingray C8", year: 2023,
    price: 165_000_000, type: "Supercar", condition: "Foreign Used", mileage: 9800,
    engine: "6.2L LT2 V8", power: "495 hp", transmission: "8-Speed Dual-Clutch",
    fuel: "Petrol", color: "Torch Red", location: "Wuse 2, Abuja",
    cutout: c("corvette-c8"), photos: [p("corvette-c8")],
    tags: ["latest", "popular"],
    blurb: "Mid-engine American muscle with supercar looks at a fraction of the price. Z51 package, front lift, clean title.",
  },
  {
    slug: "mercedes-amg-g63-2023",
    brand: "Mercedes-Benz", brandSlug: "mercedes-benz", model: "AMG G 63", year: 2023,
    price: 420_000_000, type: "SUV", condition: "Foreign Used", mileage: 11200,
    engine: "4.0L Twin-Turbo V8", power: "577 hp", transmission: "9-Speed Automatic",
    fuel: "Petrol", color: "Obsidian Black", location: "Maitama, Abuja",
    cutout: c("mercedes-g63"), photos: [p("mercedes-g63")],
    tags: ["popular", "featured"],
    blurb: "The G-Wagon. Night package, red stitched interior, Burmester sound. Abuja's most requested SUV.",
  },
  {
    slug: "mercedes-amg-gle-53-coupe-2024",
    brand: "Mercedes-Benz", brandSlug: "mercedes-benz", model: "AMG GLE 53 Coupé", year: 2024,
    price: 185_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "3.0L Inline-6 Turbo + EQ Boost", power: "429 hp", transmission: "9-Speed Automatic",
    fuel: "Mild Hybrid", color: "Polar White", location: "Wuse 2, Abuja",
    cutout: c("mercedes-gle53-coupe"), photos: [p("mercedes-gle53-coupe"), p("mercedes-gle-coupe-road"), p("mercedes-gle63-rear")],
    tags: ["latest", "popular"],
    blurb: "Coupé roofline, AMG performance and room for five. Brand new with full manufacturer warranty.",
  },
  {
    slug: "mercedes-amg-gt-63-2024",
    brand: "Mercedes-Benz", brandSlug: "mercedes-benz", model: "AMG GT 63 Coupé", year: 2024,
    price: 310_000_000, type: "Coupe", condition: "Brand New", mileage: 0,
    engine: "4.0L Twin-Turbo V8", power: "577 hp", transmission: "9-Speed MCT",
    fuel: "Petrol", color: "Alpine Grey", location: "Maitama, Abuja",
    cutout: c("mercedes-amg-gt"), photos: [p("mercedes-amg-gt")],
    tags: ["latest", "featured"],
    blurb: "The all-new second-generation AMG GT. 4MATIC+, rear-axle steering and carbon ceramic brakes.",
  },
  {
    slug: "mercedes-glc-300-coupe-2024",
    brand: "Mercedes-Benz", brandSlug: "mercedes-benz", model: "GLC 300 Coupé", year: 2024,
    price: 120_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "2.0L Turbo Inline-4", power: "255 hp", transmission: "9-Speed Automatic",
    fuel: "Mild Hybrid", color: "Polar White", location: "Wuse 2, Abuja",
    cutout: c("mercedes-glc-coupe"), photos: [p("mercedes-glc-coupe")],
    tags: ["latest"],
    blurb: "AMG Line exterior, panoramic roof and the latest MBUX. The sweet spot of the Mercedes SUV range.",
  },
  {
    slug: "mercedes-amg-e53-coupe-2022",
    brand: "Mercedes-Benz", brandSlug: "mercedes-benz", model: "AMG E 53 Coupé", year: 2022,
    price: 98_000_000, type: "Coupe", condition: "Foreign Used", mileage: 21500,
    engine: "3.0L Inline-6 Turbo + EQ Boost", power: "429 hp", transmission: "9-Speed Automatic",
    fuel: "Mild Hybrid", color: "Graphite Grey", location: "Garki, Abuja",
    cutout: c("mercedes-e53-coupe"), photos: [p("mercedes-e53-coupe")],
    tags: ["popular"],
    blurb: "Pillarless two-door elegance with AMG muscle. Red callipers, Night package, one owner.",
  },
  {
    slug: "mercedes-c300-amg-line-2021",
    brand: "Mercedes-Benz", brandSlug: "mercedes-benz", model: "C 300 AMG Line", year: 2021,
    price: 62_000_000, type: "Sedan", condition: "Foreign Used", mileage: 34800,
    engine: "2.0L Turbo Inline-4", power: "255 hp", transmission: "9-Speed Automatic",
    fuel: "Petrol", color: "Polar White", location: "Garki, Abuja",
    cutout: c("mercedes-c300"), photos: [p("mercedes-c300")],
    tags: ["popular"],
    blurb: "Tokunbo C-Class in excellent condition. Panoramic roof, AMG wheels, full service history.",
  },
  {
    slug: "bmw-x6-m-competition-2024",
    brand: "BMW", brandSlug: "bmw", model: "X6 M Competition", year: 2024,
    price: 215_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "4.4L Twin-Turbo V8", power: "617 hp", transmission: "8-Speed M Steptronic",
    fuel: "Mild Hybrid", color: "Toronto Red", location: "Wuse 2, Abuja",
    cutout: c("bmw-x6m"), photos: [p("bmw-x6m")],
    tags: ["latest", "featured"],
    blurb: "Larte Design body kit, carbon accents and laser lights. A Sports Activity Coupé that refuses to blend in.",
  },
  {
    slug: "bmw-m8-competition-2023",
    brand: "BMW", brandSlug: "bmw", model: "M8 Competition Coupé", year: 2023,
    price: 240_000_000, type: "Coupe", condition: "Foreign Used", mileage: 7600,
    engine: "4.4L Twin-Turbo V8", power: "617 hp", transmission: "8-Speed M Steptronic",
    fuel: "Petrol", color: "Alpine White", location: "Maitama, Abuja",
    cutout: c("bmw-m8"), photos: [p("bmw-m8")],
    tags: ["featured"],
    blurb: "BMW's flagship grand tourer. Carbon roof, M carbon bucket seats and a widebody conversion.",
  },
  {
    slug: "bmw-i7-xdrive60-2024",
    brand: "BMW", brandSlug: "bmw", model: "i7 xDrive60", year: 2024,
    price: 260_000_000, type: "Sedan", condition: "Brand New", mileage: 0,
    engine: "Dual Electric Motors", power: "536 hp", transmission: "Single-Speed",
    fuel: "Electric", color: "Black Sapphire", location: "Wuse 2, Abuja",
    cutout: c("bmw-i7"), photos: [p("bmw-i7")],
    tags: ["latest"],
    blurb: "Silent, all-electric luxury with the 31-inch rear Theatre Screen. Home charger installation included.",
  },
  {
    slug: "bmw-750li-m-sport-2021",
    brand: "BMW", brandSlug: "bmw", model: "750Li xDrive M Sport", year: 2021,
    price: 95_000_000, type: "Sedan", condition: "Foreign Used", mileage: 28300,
    engine: "4.4L Twin-Turbo V8", power: "523 hp", transmission: "8-Speed Automatic",
    fuel: "Petrol", color: "Carbon Black", location: "Garki, Abuja",
    cutout: c("bmw-750li"), photos: [p("bmw-750li")],
    tags: ["popular"],
    blurb: "Long-wheelbase executive saloon. Rear massage seats, Bowers & Wilkins audio, chauffeur-ready.",
  },
  {
    slug: "bmw-440i-m-sport-2020",
    brand: "BMW", brandSlug: "bmw", model: "440i M Sport", year: 2020,
    price: 48_000_000, type: "Coupe", condition: "Nigerian Used", mileage: 46200,
    engine: "3.0L Inline-6 Turbo", power: "382 hp", transmission: "8-Speed Automatic",
    fuel: "Petrol", color: "Jet Black", location: "Gwarinpa, Abuja",
    cutout: c("bmw-4-series"), photos: [p("bmw-4-series")],
    tags: ["popular"],
    blurb: "Angel-eye lights, M stripe grille and a silky straight-six. Registered, duty fully paid.",
  },
  {
    slug: "cadillac-escalade-v-2024",
    brand: "Cadillac", brandSlug: "cadillac", model: "Escalade-V", year: 2024,
    price: 290_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "6.2L Supercharged V8", power: "682 hp", transmission: "10-Speed Automatic",
    fuel: "Petrol", color: "Black Raven", location: "Maitama, Abuja",
    cutout: c("cadillac-escalade-v"), photos: [p("cadillac-escalade-v")],
    tags: ["latest", "featured"],
    blurb: "The most powerful Escalade ever. 38-inch curved OLED, AKG 36-speaker audio, presidential presence.",
  },
  {
    slug: "lexus-gx-550-overtrail-tan-2024",
    brand: "Lexus", brandSlug: "lexus", model: "GX 550 Overtrail+", year: 2024,
    price: 175_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "3.4L Twin-Turbo V6", power: "349 hp", transmission: "10-Speed Automatic",
    fuel: "Petrol", color: "Earth / Black Roof", location: "Wuse 2, Abuja",
    cutout: c("lexus-gx550-tan"), photos: [p("lexus-gx550-tan"), p("lexus-gx550-tan-2")],
    tags: ["latest", "popular"],
    blurb: "Off-road ready luxury with locking differentials and all-terrain tyres on blacked-out wheels.",
  },
  {
    slug: "lexus-gx-550-luxury-white-2025",
    brand: "Lexus", brandSlug: "lexus", model: "GX 550 Luxury+", year: 2025,
    price: 185_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "3.4L Twin-Turbo V6", power: "349 hp", transmission: "10-Speed Automatic",
    fuel: "Petrol", color: "Eminent White", location: "Wuse 2, Abuja",
    cutout: c("lexus-gx550-white"), photos: [p("lexus-gx550-white")],
    tags: ["latest"],
    blurb: "2025 model in two-tone white and black. Semi-aniline leather, Mark Levinson audio, 7 seats.",
  },
  {
    slug: "land-rover-defender-110-2023",
    brand: "Land Rover", brandSlug: "land-rover", model: "Defender 110 X-Dynamic", year: 2023,
    price: 195_000_000, type: "SUV", condition: "Foreign Used", mileage: 8900,
    engine: "3.0L Inline-6 MHEV", power: "395 hp", transmission: "8-Speed Automatic",
    fuel: "Mild Hybrid", color: "Fuji White", location: "Maitama, Abuja",
    cutout: c("land-rover-defender"), photos: [p("land-rover-defender")],
    tags: ["popular", "featured"],
    blurb: "Iconic, capable and comfortable. Air suspension, Terrain Response 2 and a showroom finish.",
  },
  {
    slug: "toyota-land-cruiser-300-vx-2024",
    brand: "Toyota", brandSlug: "toyota", model: "Land Cruiser 300 VX", year: 2024,
    price: 230_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "3.5L Twin-Turbo V6", power: "409 hp", transmission: "10-Speed Automatic",
    fuel: "Petrol", color: "Pearl White", location: "Wuse 2, Abuja",
    cutout: c("toyota-lc300-studio"), photos: [p("toyota-lc300-street"), p("toyota-lc300-snow"), p("toyota-lc300-studio")],
    tags: ["popular", "featured"],
    blurb: "The king of Nigerian roads. GCC spec, full option, ready for Abuja–Kaduna or the school run.",
  },
  {
    slug: "toyota-land-cruiser-300-gr-sport-2024",
    brand: "Toyota", brandSlug: "toyota", model: "Land Cruiser 300 GR Sport", year: 2024,
    price: 255_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "3.5L Twin-Turbo V6", power: "409 hp", transmission: "10-Speed Automatic",
    fuel: "Petrol", color: "Attitude Black", location: "Maitama, Abuja",
    cutout: c("toyota-lc300-gr"), photos: [p("toyota-lc300-gr")],
    tags: ["latest", "popular"],
    blurb: "GR Sport styling with E-KDSS active stabilisers and front/rear locking diffs. Blacked-out everything.",
  },
  {
    slug: "toyota-hilux-gr-sport-2024",
    brand: "Toyota", brandSlug: "toyota", model: "Hilux GR Sport", year: 2024,
    price: 78_000_000, type: "Pickup", condition: "Brand New", mileage: 0,
    engine: "2.8L Turbo Diesel", power: "221 hp", transmission: "6-Speed Automatic",
    fuel: "Diesel", color: "Attitude Black", location: "Kubwa, Abuja",
    cutout: c("toyota-hilux-gr"), photos: [p("toyota-hilux-gr")],
    tags: ["latest"],
    blurb: "Indestructible workhorse with GR suspension, wide fenders and BF Goodrich all-terrains.",
  },
  {
    slug: "toyota-land-cruiser-prado-2021",
    brand: "Toyota", brandSlug: "toyota", model: "Land Cruiser Prado VXR", year: 2021,
    price: 85_000_000, type: "SUV", condition: "Foreign Used", mileage: 39500,
    engine: "4.0L V6", power: "271 hp", transmission: "6-Speed Automatic",
    fuel: "Petrol", color: "Pearl White", location: "Gwarinpa, Abuja",
    cutout: c("toyota-prado"), photos: [p("toyota-prado")],
    tags: ["popular"],
    blurb: "Facelifted Prado with sequential indicators and body kit. Clean, accident-free, custom papers ready.",
  },
  {
    slug: "toyota-camry-xse-2025",
    brand: "Toyota", brandSlug: "toyota", model: "Camry XSE Hybrid", year: 2025,
    price: 58_000_000, type: "Sedan", condition: "Brand New", mileage: 0,
    engine: "2.5L Hybrid", power: "225 hp", transmission: "eCVT",
    fuel: "Hybrid", color: "Wind Chill Pearl", location: "Wuse 2, Abuja",
    cutout: c("toyota-camry"), photos: [p("toyota-camry")],
    tags: ["latest"],
    blurb: "The all-new Camry. Hybrid only, sharper styling and around 20 km per litre in city driving.",
  },
  {
    slug: "toyota-crown-signia-2025",
    brand: "Toyota", brandSlug: "toyota", model: "Crown Signia", year: 2025,
    price: 72_000_000, type: "SUV", condition: "Brand New", mileage: 0,
    engine: "2.5L Hybrid AWD", power: "240 hp", transmission: "eCVT",
    fuel: "Hybrid", color: "Wind Chill Pearl", location: "Wuse 2, Abuja",
    cutout: c("toyota-crown-signia"), photos: [p("toyota-crown-signia")],
    tags: ["latest"],
    blurb: "A stylish hybrid crossover wagon with a premium cabin and standard all-wheel drive.",
  },
  {
    slug: "toyota-rav4-hybrid-2023",
    brand: "Toyota", brandSlug: "toyota", model: "RAV4 Hybrid XSE", year: 2023,
    price: 52_000_000, type: "SUV", condition: "Foreign Used", mileage: 15200,
    engine: "2.5L Hybrid AWD", power: "219 hp", transmission: "eCVT",
    fuel: "Hybrid", color: "Silver / Black Roof", location: "Garki, Abuja",
    cutout: c("toyota-rav4"), photos: [p("toyota-rav4")],
    tags: ["popular"],
    blurb: "Efficient, reliable and roomy. Two-tone paint, JBL audio and Toyota Safety Sense 2.5.",
  },
];

export const formatNaira = (n: number | null) =>
  n === null ? "Price on request" : "₦" + n.toLocaleString("en-NG");

export const formatNairaShort = (n: number | null) => {
  if (n === null) return "On request";
  if (n >= 1_000_000_000) return `₦${(n / 1_000_000_000).toFixed(1)}B`;
  return `₦${Math.round(n / 1_000_000)}M`;
};

export const getCar = (slug: string) => cars.find((c) => c.slug === slug);
export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);

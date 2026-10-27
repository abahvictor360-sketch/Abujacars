// Business details — edit these to update the whole site.
export const site = {
  name: "Abujacars",
  tagline: "Buy & Sell Premium Cars in Abuja",
  phone: "+234 803 000 0000",
  whatsapp: "2348030000000",
  email: "hello@abujacars.ng",
  address: "Plot 12, Aminu Kano Crescent, Wuse 2, Abuja",
  hours: "Mon – Sat · 9:00am – 7:00pm",
  socials: {
    instagram: "https://instagram.com/",
    x: "https://x.com/",
    tiktok: "https://tiktok.com/",
    facebook: "https://facebook.com/",
  },
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

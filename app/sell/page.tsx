import type { Metadata } from "next";
import Link from "next/link";
import SellForm from "@/components/SellForm";

export const metadata: Metadata = {
  title: "Sell Your Car",
  description: "Sell your car in Abuja for a fair cash offer within 24 hours. Free inspection, instant payment and we handle the paperwork.",
};

const steps = [
  { t: "Tell us about your car", d: "Fill in the quick form — make, model, year, mileage and a few details. Takes about a minute." },
  { t: "Get your offer", d: "Our team reviews current Abuja market prices and sends you a fair cash offer within 24 hours." },
  { t: "Free inspection", d: "Bring the car to our Wuse 2 showroom or we come to you anywhere in the FCT." },
  { t: "Get paid instantly", d: "Accept the offer and receive payment by bank transfer the same day. We handle the paperwork." },
];

export default function SellPage() {
  return (
    <>
      <section className="page-hero wrap">
        <nav className="crumbs"><Link href="/">Home</Link> / <span>Sell your car</span></nav>
        <h1>Sell Your Car</h1>
        <p>No haggling at the roadside, no time-wasters. A fair cash offer within 24 hours and same-day payment.</p>
      </section>
      <section className="split wrap">
        <div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <SellForm />
      </section>
    </>
  );
}

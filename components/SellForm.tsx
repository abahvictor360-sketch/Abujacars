"use client";

import { useState } from "react";
import { brands } from "@/lib/cars";
import { waLink } from "@/lib/site";

const empty = {
  make: "", model: "", year: "", mileage: "", condition: "Foreign Used", transmission: "Automatic",
  price: "", name: "", phone: "", area: "", notes: "",
};

export default function SellForm() {
  const [step, setStep] = useState(0);
  const [f, setF] = useState(empty);
  const up = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0) return setStep(1);
    const msg = [
      "Hi Abujacars, I want to sell my car:",
      `• ${f.year} ${f.make} ${f.model}`,
      `• Mileage: ${f.mileage} km`,
      `• Condition: ${f.condition} · ${f.transmission}`,
      f.price && `• Asking price: ₦${f.price}`,
      f.notes && `• Notes: ${f.notes}`,
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.area && `Location: ${f.area}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank");
  };

  const years = Array.from({ length: 22 }, (_, i) => String(new Date().getFullYear() + 1 - i));

  return (
    <form className="form-card glass glass--liquid" onSubmit={submit}>
      <span className="eyebrow">Step {step + 1} of 2</span>
      <h2>{step === 0 ? "Your car" : "Your details"}</h2>
      <div className="progress-steps"><i className="on" /><i className={step ? "on" : ""} /></div>

      {step === 0 ? (
        <div className="form-grid">
          <div className="field">
            <label htmlFor="make">Make</label>
            <input id="make" className="input" list="makes" required value={f.make} onChange={up("make")} placeholder="e.g. Toyota" />
            <datalist id="makes">
              {brands.map((b) => <option key={b.slug} value={b.name} />)}
              <option value="Honda" /><option value="Hyundai" /><option value="Kia" /><option value="Ford" /><option value="Range Rover" />
            </datalist>
          </div>
          <div className="field">
            <label htmlFor="model">Model</label>
            <input id="model" className="input" required value={f.model} onChange={up("model")} placeholder="e.g. Camry XLE" />
          </div>
          <div className="field">
            <label htmlFor="year">Year</label>
            <select id="year" className="select" required value={f.year} onChange={up("year")}>
              <option value="">Select year</option>
              {years.map((y) => <option key={y}>{y}</option>)}
              <option value="Older">Older</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="mileage">Mileage (km)</label>
            <input id="mileage" className="input" inputMode="numeric" required value={f.mileage} onChange={up("mileage")} placeholder="e.g. 45000" />
          </div>
          <div className="field">
            <label htmlFor="condition">Condition</label>
            <select id="condition" className="select" value={f.condition} onChange={up("condition")}>
              <option>Brand New</option><option>Foreign Used</option><option>Nigerian Used</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="trans">Transmission</label>
            <select id="trans" className="select" value={f.transmission} onChange={up("transmission")}>
              <option>Automatic</option><option>Manual</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="price">Asking price (optional, ₦)</label>
            <input id="price" className="input" inputMode="numeric" value={f.price} onChange={up("price")} placeholder="e.g. 18,500,000" />
          </div>
        </div>
      ) : (
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" className="input" required value={f.name} onChange={up("name")} />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input id="phone" className="input" type="tel" required value={f.phone} onChange={up("phone")} placeholder="080…" />
          </div>
          <div className="field full">
            <label htmlFor="area">Your area in Abuja</label>
            <input id="area" className="input" value={f.area} onChange={up("area")} placeholder="e.g. Gwarinpa" />
          </div>
          <div className="field full">
            <label htmlFor="notes">Anything else? (accidents, repairs, extras)</label>
            <textarea id="notes" className="textarea" value={f.notes} onChange={up("notes")} />
          </div>
        </div>
      )}

      <div className="form-nav">
        {step > 0 ? (
          <button type="button" className="btn btn--outline" onClick={() => setStep(0)}>Back</button>
        ) : <span />}
        <button type="submit" className="btn btn--red">{step === 0 ? "Continue" : "Get My Offer"}</button>
      </div>
      <p className="note">Submitting opens WhatsApp with your details pre-filled so our team can reply instantly.</p>
    </form>
  );
}

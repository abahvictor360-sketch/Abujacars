"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", topic: "Buying a car", message: "" });
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(`Hi Abujacars — ${f.topic}\n${f.message}\n\n${f.name} · ${f.phone}`), "_blank");
  };
  return (
    <form className="form-card glass glass--liquid" onSubmit={submit}>
      <span className="eyebrow">Send a message</span>
      <h2>How can we help?</h2>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" className="input" required value={f.name} onChange={up("name")} />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" className="input" type="tel" required value={f.phone} onChange={up("phone")} />
        </div>
        <div className="field full">
          <label htmlFor="c-topic">Topic</label>
          <select id="c-topic" className="select" value={f.topic} onChange={up("topic")}>
            <option>Buying a car</option>
            <option>Selling my car</option>
            <option>Source a specific car for me</option>
            <option>Financing</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="c-msg">Message</label>
          <textarea id="c-msg" className="textarea" required value={f.message} onChange={up("message")} />
        </div>
      </div>
      <button className="btn btn--red btn--block" type="submit">Send via WhatsApp</button>
    </form>
  );
}

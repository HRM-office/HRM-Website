"use client";

import { useState } from "react";
import { EMAIL, PHONE, PHONE_HREF, WHATSAPP } from "@/lib/content";
import { Arrow } from "./ui";

const TOPICS = ["General", "Recruitment", "HR outsourcing", "HR software", "Training and certification", "Business functions"];


// topic comes from the link the visitor followed (for example /contact/?topic=Recruitment).
export function ContactForm({ topic }) {
  const [error, setError] = useState("");
  const [state, setState] = useState("idle"); // idle | sent

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setError("Enter your name, a valid email address and a message.");
      form.querySelector(":invalid")?.focus();
      return;
    }
    setError("");
    const data = new FormData(form);
    const d = Object.fromEntries(data);
    const lines = [
      d.message, "",
      `Name: ${d.name}`,
      d.company && `Company: ${d.company}`,
      `Email: ${d.email}`,
      d.phone && `Phone: ${d.phone}`,
      `Topic: ${d.topic}`,
    ].filter((l) => l || l === "");
    const body = encodeURIComponent(lines.join("\n"));

    // Messages go straight to our team: WhatsApp chat or the official inbox, ready to send.
    if (e.nativeEvent.submitter?.value === "whatsapp") {
      window.open(`${WHATSAPP}?text=${body}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${d.topic} enquiry from ${d.name}`)}&body=${body}`;
    }
    setState("sent");
  };

  if (state === "sent") {
    return (
      <div className="form form--sent" role="status">
        <h2>Your message is ready to send.</h2>
        <p>It opened in WhatsApp or your email app. Press send there and our Lagos team will reply the same working day.</p>
        <p className="form__next">Need us sooner? Call <a href={PHONE_HREF}>{PHONE}</a> or <a href={WHATSAPP}>chat on WhatsApp</a>.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" autoComplete="name" placeholder="Ada Okafor" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company (optional)</label>
          <input id="company" name="company" autoComplete="organization" placeholder="Company name" />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" spellCheck={false} placeholder="you@company.com" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+234" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">What do you need help with?</label>
        <select id="topic" name="topic" defaultValue={TOPICS.includes(topic) ? topic : "General"}>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      {/* Spam trap: people never see or fill this, bots do. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us a little about your team and what's not working." required />
        <div aria-live="polite">{error && <p className="form__error">{error}</p>}</div>
      </div>
      <div className="form__send">
        <button className="btn btn--navy" type="submit" name="via" value="email">Send by email <Arrow /></button>
        <button className="btn btn--wa" type="submit" name="via" value="whatsapp">Send on WhatsApp <Arrow /></button>
      </div>
      <p className="form__next">
        Opens WhatsApp or your email app with your message ready to send to {EMAIL}.
      </p>
    </form>
  );
}

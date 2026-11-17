"use client";

import { useState } from "react";
import { EMAIL, WHATSAPP } from "@/lib/content";
import { Arrow } from "./ui";

export function MentorshipForm() {
  const [state, setState] = useState("idle"); // idle | sent
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setError("Enter your name and a valid email address, and tick the box to agree.");
      form.querySelector(":invalid")?.focus();
      return;
    }
    setError("");
    const d = Object.fromEntries(new FormData(form));
    const text = encodeURIComponent([
      "HR Mentorship application", "",
      `Name: ${d.name}`, `Email: ${d.email}`, d.phone && `Phone: ${d.phone}`,
      d.message && `About me: ${d.message}`, "I agree to take part in the HR Mentorship program.",
    ].filter(Boolean).join("\n"));
    if (e.nativeEvent.submitter?.value === "whatsapp") window.open(`${WHATSAPP}?text=${text}`, "_blank", "noopener");
    else window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`HR Mentorship application from ${d.name}`)}&body=${text}`;
    setState("sent");
  };

  if (state === "sent") {
    return (
      <div className="form form--sent" role="status">
        <h2>Your application is ready to send.</h2>
        <p>It opened in WhatsApp or your email app. Press send there and we&apos;ll be in touch within 24 to 48 hours.</p>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field"><label htmlFor="m-name">Full name</label><input id="m-name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="m-email">Email</label><input id="m-email" name="email" type="email" autoComplete="email" spellCheck={false} required /></div>
      </div>
      <div className="field"><label htmlFor="m-phone">Phone (optional)</label><input id="m-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+234" /></div>
      <div className="field">
        <label htmlFor="m-msg">Tell us about yourself (optional)</label>
        <textarea id="m-msg" name="message" placeholder="Your HR experience so far, and what you want from mentorship." />
      </div>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <label className="check">
        <input type="checkbox" name="agree" required />
        <span>I agree to take part in the HR Mentorship program and understand the commitment it needs.</span>
      </label>
      <div aria-live="polite">{error && <p className="form__error">{error}</p>}</div>
      <div className="form__send">
        <button className="btn btn--navy" type="submit" name="via" value="email">Apply by email <Arrow /></button>
        <button className="btn btn--wa" type="submit" name="via" value="whatsapp">Apply on WhatsApp <Arrow /></button>
      </div>
    </form>
  );
}

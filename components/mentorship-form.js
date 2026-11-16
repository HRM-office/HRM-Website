"use client";

import { useState } from "react";
import { WHATSAPP } from "@/lib/content";
import { Arrow } from "./ui";

export function MentorshipForm() {
  const [state, setState] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setError("Enter your name and a valid email address, and tick the box to agree.");
      form.querySelector(":invalid")?.focus();
      return;
    }
    setError(""); setState("sending");
    const d = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/mentorship/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, agree: d.agree ? "Yes" : "" }) });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error);
      setState("sent");
    } catch (err) {
      setState("idle");
      setError(err.message || "We couldn't send your application. Try again, or apply on WhatsApp.");
    }
  };

  if (state === "sent") {
    return (
      <div className="form form--sent" role="status">
        <h2>Application received.</h2>
        <p>Thank you. We&apos;ll contact you within 24 to 48 hours about next steps.</p>
      </div>
    );
  }
  const sending = state === "sending";
  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-busy={sending}>
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
        <button className="btn btn--navy" type="submit" disabled={sending}>{sending ? "Sending…" : "Apply now"} <Arrow /></button>
        <a className="btn btn--wa" href={`${WHATSAPP}?text=${encodeURIComponent("Hello HRM Office, I'd like to join the HR Mentorship program.")}`} target="_blank" rel="noopener">Apply on WhatsApp <Arrow /></a>
      </div>
    </form>
  );
}

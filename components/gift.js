"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AIHR_PARTNER } from "@/lib/content";

// A gift box in brand colours: amber box, navy ribbon, teal bow.
export const GiftBox = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
    <defs>
      <linearGradient id="gb-front" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffd77a" /><stop offset="1" stopColor="#f2a024" /></linearGradient>
      <linearGradient id="gb-side" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e88a1c" /><stop offset="1" stopColor="#c8680c" /></linearGradient>
      <linearGradient id="gb-lid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffe3a0" /><stop offset="1" stopColor="#f7b32b" /></linearGradient>
    </defs>
    <path d="M22 54h58v52H22z" fill="url(#gb-front)" />
    <path d="M80 54l18-8v50l-18 10z" fill="url(#gb-side)" />
    <path d="M44 54h14v52H44z" fill="#263d85" />
    <path d="M80 70l18-8v8l-18 8z" fill="#1a2b66" />
    <g className="gift__lid">
      <path d="M16 40h68v16H16z" fill="url(#gb-lid)" />
      <path d="M84 40l18-8v16l-18 8z" fill="#e88a1c" />
      <path d="M16 40l18-8h68l-18 8z" fill="#ffecb8" />
      <path d="M43 40h16v16H43z" fill="#2c4592" />
      <path d="M43 40l18-8h16l-18 8z" fill="#3d5bb0" />
      <path d="M52 34c-14-14-30-10-26-1 3 7 18 6 26 1z" fill="#2bbec5" />
      <path d="M56 34c10-16 28-14 25-4-2 7-17 8-25 4z" fill="#1f9aa2" />
      <circle cx="54" cy="34" r="5" fill="#147f87" />
    </g>
  </svg>
);

// A front-facing gift, drawn for small sizes: wrapped box, ribbon cross and bow, readable at a glance.
export const GiftIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="gi-box" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffcf5c" /><stop offset="1" stopColor="#f08a1c" /></linearGradient>
      <linearGradient id="gi-lid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe08a" /><stop offset="1" stopColor="#f7b32b" /></linearGradient>
    </defs>
    <rect x="9" y="22" width="30" height="20" rx="3" fill="url(#gi-box)" />
    <rect x="21.5" y="22" width="5" height="20" fill="#263d85" />
    <g className="giftic__lid">
      <path d="M14 15c-4-5 1-10 6-6l4 5 4-5c5-4 10 1 6 6" fill="none" stroke="#2bbec5" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="15" width="34" height="9" rx="2.5" fill="url(#gi-lid)" />
      <rect x="21.5" y="15" width="5" height="9" fill="#263d85" />
    </g>
    <g className="giftic__spark" fill="#ffd77a"><path d="M40 5l1.4 3.6L45 10l-3.6 1.4L40 15l-1.4-3.6L35 10l3.6-1.4z" /><circle cx="8" cy="9" r="1.6" /></g>
    <rect x="9" y="24" width="30" height="2" fill="#000" opacity=".12" />
  </svg>
);

const Confetti = () => (
  <span className="gift__confetti" aria-hidden="true">
    {["#f7b32b", "#2bbec5", "#f2792b", "#7ae0e5", "#ffd77a", "#263d85", "#f7b32b", "#2bbec5"].map((c, i) => <i key={i} style={{ "--c": c, "--i": i }} />)}
  </span>
);

const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
const sread = (k) => { try { return sessionStorage.getItem(k); } catch { return null; } };
const swrite = (k, v) => { try { sessionStorage.setItem(k, v); } catch {} };

const SNOOZE = "hrm-gift-snooze";   // set when a visitor closes the offer: quiet for 3 days
const SEEN = "hrm-gift-seen";       // one gift moment per visit
const TIME = "hrm-gift-time";       // seconds on the site since the banner was closed, across pages
const PROMO_CLOSED = "hrm-aihr-promo-closed"; // set by the promo bar when the visitor closes it
const WEEK3 = 3 * 24 * 3600 * 1000;

// Gift strip: appears 20 seconds after the visitor closes the promo banner, and opens on hover.
// Once per visit; closing it keeps it away for three days. ?gift=card previews the popup card version.
export function GiftOffer() {
  const [mode, setMode] = useState(null); // null | "card" | "peek"
  const [open, setOpen] = useState(false);
  const closeBtn = useRef(null);

  useEffect(() => {
    // Preview either state on demand: ?gift=card or ?gift=peek
    const force = new URLSearchParams(location.search).get("gift");
    if (force === "card" || force === "peek") { setMode(force); return; }
    if (sread(SEEN) || Number(read(SNOOZE) || 0) > Date.now()) return;
    // The banner comes first. Once the visitor closes it, count visible time (across pages);
    // after 20 seconds still on the site, the gift strip slides in. One gift per visit.
    let spent = Number(sread(TIME) || 0);
    const iv = setInterval(() => {
      if (document.hidden || !sread(PROMO_CLOSED)) return;
      spent += 5; swrite(TIME, String(spent));
      if (spent >= 20) { clearInterval(iv); swrite(SEEN, "1"); setMode("peek"); }
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => { if (mode === "card") closeBtn.current?.focus(); }, [mode]);
  // One offer at a time: while the gift is showing, the promo bar hides (CSS keys off this attribute).
  useEffect(() => {
    if (mode) document.documentElement.dataset.gift = mode; else delete document.documentElement.dataset.gift;
    return () => { delete document.documentElement.dataset.gift; };
  }, [mode]);
  useEffect(() => {
    if (!mode) return;
    const esc = (e) => e.key === "Escape" && dismiss();
    addEventListener("keydown", esc);
    return () => removeEventListener("keydown", esc);
  });

  const dismiss = () => { write(SNOOZE, String(Date.now() + WEEK3)); setMode(null); };

  if (!mode) return null;

  const card = (
    <div className="gift__card">
      <Confetti />
      <GiftBox className="gift__box" />
      <p className="gift__kicker">A gift for HRM Office visitors</p>
      <p className="gift__big">10% off</p>
      <p className="gift__sub">any AIHR certification, through our partner link</p>
      <a className="btn btn--cta gift__cta" href={AIHR_PARTNER} onClick={() => write(SNOOZE, String(Date.now() + WEEK3))}>Claim my discount</a>
      <button type="button" className="gift__no" onClick={dismiss}>No, thanks</button>
      <Image quality={90} className="gift__aihr" src="/brand/aihr-logo.png" alt="AIHR" width={1200} height={348} sizes="90px" />
    </div>
  );

  if (mode === "card") {
    return (
      <div className="gift gift--modal" role="dialog" aria-modal="true" aria-label="A 10% AIHR discount for you" onClick={(e) => e.target === e.currentTarget && dismiss()}>
        <div className="gift__wrap">
          <button ref={closeBtn} type="button" className="gift__x" onClick={dismiss} aria-label="Close offer">×</button>
          {card}
        </div>
      </div>
    );
  }

  // Peek: a slim gift strip, bottom left. Hover, focus or tap widens it to reveal the offer and the button.
  return (
    <aside className={`gift gift--peek${open ? " is-open" : ""}`} aria-label="Your gift" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="gift__strip" aria-expanded={open} onClick={() => setOpen((o) => !o)} onFocus={() => setOpen(true)}>
        <span className="gift__icon"><GiftIcon className="gift__mini" /></span>
        <span className="gift__label"><small>You&apos;ve unlocked a gift</small><b><em>10% off</em> AIHR certification</b></span>
        <span className="gift__chev" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
      </button>
      <div className="gift__more" aria-hidden={!open}>
        <p>Globally recognized HR programs, through HRM Office&apos;s official AIHR partner link.</p>
        <div className="gift__acts">
          <a className="btn btn--cta" href={AIHR_PARTNER} tabIndex={open ? 0 : -1} onClick={() => write(SNOOZE, String(Date.now() + WEEK3))}>Claim my gift</a>
          <button type="button" className="gift__later" onClick={dismiss} tabIndex={open ? 0 : -1}>Not now</button>
        </div>
      </div>
    </aside>
  );
}

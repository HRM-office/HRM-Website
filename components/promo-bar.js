"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AIHR_PARTNER } from "@/lib/content";

const KEY = "hrm-aihr-promo-closed";

// Slides up once the visitor has scrolled past the first screen and stayed a few seconds. Closing it keeps it closed for the visit.
export function PromoBar() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem(KEY)) return; } catch {}
    let timer = 0;
    const onScroll = () => {
      if (timer || scrollY < innerHeight * 0.8) return;
      timer = setTimeout(() => setShow(true), 4000);
      removeEventListener("scroll", onScroll);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => { removeEventListener("scroll", onScroll); clearTimeout(timer); };
  }, []);
  // Leaves the way it came in: back down off the screen.
  const close = () => {
    setLeaving(true);
    setTimeout(() => setShow(false), 320);
    try { sessionStorage.setItem(KEY, "1"); } catch {}
  };
  if (!show) return null;
  return (
    <aside className={leaving ? "promo promo--out" : "promo"} aria-label="AIHR offer">
      <Image quality={90} className="promo__aihr" src="/brand/aihr-logo.png" alt="AIHR" width={1200} height={348} sizes="110px" />
      <p><b>Get certified globally today.</b> AIHR courses for HRM Office members, <strong className="promo__off">10% off</strong>.</p>
      <a className="btn btn--cta" href={AIHR_PARTNER}>Claim 10% discount</a>
      <button className="promo__x" onClick={close} aria-label="Close offer">×</button>
    </aside>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GiftIcon } from "@/components/gift";
import { AIHR_PARTNER } from "@/lib/content";

const KEY = "hrm-aihr-promo-closed";

// The first offer a visitor sees. Closing it keeps it closed for the visit and starts the gift strip's timer.
export function PromoBar() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem(KEY)) return; } catch {}
    // First offer of the visit: slides up a few seconds after the page opens.
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
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
      <span className="promo__gift"><GiftIcon className="promo__giftbox" /></span>
      <p><small>A gift for you</small><b><strong className="promo__off">10% off</strong> AIHR certification</b><span>Globally recognized HR programs, through our official partner link.</span></p>
      <Image quality={90} className="promo__aihr" src="/brand/aihr-logo.png" alt="AIHR" width={1200} height={348} sizes="110px" />
      <a className="btn btn--cta" href={AIHR_PARTNER}>Claim my gift</a>
      <button className="promo__x" onClick={close} aria-label="Close offer">×</button>
    </aside>
  );
}

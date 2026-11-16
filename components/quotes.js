"use client";

import { useEffect, useRef, useState } from "react";
import { QUOTES, Quote } from "@/lib/content";
import { Arrow } from "@/components/ui";

const ALL = Object.values(QUOTES);
const EVERY = 7000; // long enough to read the headline and start the quote

// Swipe, scroll, tap a company or use the arrows. Moves on by itself every few seconds,
// waits while the visitor hovers or focuses it, and stops for good once they swipe, tap or pick a story.
// That interaction is the pause control (WCAG 2.2.2); visitors who prefer reduced motion never see it move.
export function QuoteRotator() {
  const root = useRef(null);
  const track = useRef(null);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false); // stops for good once the visitor takes over
  const [held, setHeld] = useState(false); // hover, focus or touch
  const [seen, setSeen] = useState(false); // on screen

  // The card that is mostly in view is the active one, however the visitor got there.
  useEffect(() => {
    const el = track.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setI(Number(e.target.dataset.i))),
      { root: el, threshold: 0.6 },
    );
    [...el.children].forEach((c) => io.observe(c));
    const vis = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.2 });
    vis.observe(root.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
    return () => { io.disconnect(); vis.disconnect(); };
  }, []);

  const go = (n) => {
    const el = track.current;
    const card = el.children[n];
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2, behavior: still ? "auto" : "smooth" });
  };

  useEffect(() => {
    if (paused || held || !seen) return;
    const t = setTimeout(() => go((i + 1) % ALL.length), EVERY);
    return () => clearTimeout(t);
  }, [i, paused, held, seen]);

  const pick = (n) => { setPaused(true); go(n); };
  const hold = () => setHeld(true);
  const release = () => setHeld(false);

  return (
    <div className="tq-stage" ref={root} onMouseEnter={hold} onMouseLeave={release} onFocus={hold} onBlur={release} onTouchStart={() => setPaused(true)}>
      <div className="tq-bar">
        <button type="button" className="tq-arrow tq-arrow--prev" aria-label="Previous story" disabled={i === 0} onClick={() => pick(i - 1)}><Arrow /></button>
        <div className="tq-tabs" role="group" aria-label="Choose a client story">
          {ALL.map((q, n) => (
            <button key={q.name} type="button" aria-pressed={n === i} onClick={() => pick(n)}>
              {q.company}
              {n === i && !paused && <i className="tq-tabs__time" style={{ animationDuration: `${EVERY}ms`, animationPlayState: held || !seen ? "paused" : "running" }} key={i} aria-hidden="true" />}
            </button>
          ))}
        </div>
        <button type="button" className="tq-arrow" aria-label="Next story" disabled={i === ALL.length - 1} onClick={() => pick(i + 1)}><Arrow /></button>
      </div>
      <div className="tq-track" ref={track} tabIndex={0} aria-label="Client stories, scroll sideways for more">
        {ALL.map((q, n) => <Quote key={q.name} q={q} data-i={n} data-on={n === i} />)}
      </div>
    </div>
  );
}

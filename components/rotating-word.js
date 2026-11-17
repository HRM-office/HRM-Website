"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Swaps the underlined phrase in the home headline. The h1 carries a fixed aria-label, so screen readers hear one sentence.
// The slot glides to the width of the phrase on show, so the line re-centres smoothly instead of jumping or sitting off-centre.
export function RotatingWord({ words, end = "", every = 2800 }) {
  const [i, setI] = useState(0);
  const [moved, setMoved] = useState(false);
  const [width, setWidth] = useState(null);
  const refs = useRef([]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => { setMoved(true); setI((n) => (n + 1) % words.length); }, every);
    return () => clearInterval(t);
  }, [words.length, every]);
  useLayoutEffect(() => {
    const measure = () => setWidth(refs.current[i]?.offsetWidth ?? null);
    measure();
    addEventListener("resize", measure);
    return () => removeEventListener("resize", measure);
  }, [i]);
  return (
    <span className={moved ? "rot rot--live" : "rot"} style={width ? { width } : undefined}>
      {words.map((w, n) => (
        <span
          key={n === i ? `on-${i}` : w}
          ref={(el) => { refs.current[n] = el; }}
          className={n !== i ? "rot__w rot__w--off" : moved ? "rot__w rot__w--in" : "rot__w"}
        >
          <span className="scribble">{w}</span>{end}
        </span>
      ))}
    </span>
  );
}

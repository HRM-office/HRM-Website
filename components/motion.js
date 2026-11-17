"use client";

import { useEffect, useRef, useState } from "react";

// Fades content in the first time it scrolls into view. Content is visible by default (no JS, slow JS,
// crawlers, print); only blocks still below the fold once the page is running get hidden and revealed.
export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState("static"); // static | armed | in
  useEffect(() => {
    const el = ref.current;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) { setState("in"); return; }
    setState("armed");
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setState("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = state === "static" ? className.replace("rv--kids", "") : `rv ${state === "in" ? "in" : ""} ${className}`;
  return <Tag ref={ref} className={cls.trim()} {...rest}>{children}</Tag>;
}

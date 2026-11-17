"use client";

import { useState } from "react";

const SITE = "https://www.hrmoffice.org";

const ICONS = {
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z",
  x: "M4 4l16 16M20 4L4 20",
  linkedin: "M5 9h3v11H5zM6.500 4a1.800 1.800 0 1 1 0 3.600 1.800 1.800 0 0 1 0-3.600zM11 9h3v1.600c.6-1 1.800-1.800 3.400-1.800 2.600 0 3.600 1.700 3.600 4.400V20h-3v-6c0-1.500-.4-2.600-1.900-2.600S14 12.600 14 14v6h-3z",
  whatsapp: "M4 20l1.200-4A8 8 0 1 1 8 18.800zM9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 1c-1.200-.5-2.300-1.600-2.800-2.800l1-1-1-2z",
  link: "M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1",
};

const Glyph = ({ d }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

export function ShareBar({ slug, title }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE}/blog/${slug}/`;
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    ["facebook", "Share on Facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ["x", "Share on X", `https://twitter.com/intent/tweet?url=${u}&text=${t}`],
    ["linkedin", "Share on LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
    ["whatsapp", "Share on WhatsApp", `https://wa.me/?text=${t}%20${u}`],
  ];
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };
  return (
    <div className="share" aria-label="Share this article">
      {links.map(([k, label, href]) => (
        <a key={k} className={`share__btn share__btn--${k}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Glyph d={ICONS[k]} /></a>
      ))}
      <button className="share__btn share__btn--link" onClick={copy} aria-label="Copy link"><Glyph d={ICONS.link} /></button>
      <span className="share__ok" role="status">{copied ? "Link copied" : ""}</span>
    </div>
  );
}

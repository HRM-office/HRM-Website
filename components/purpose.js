"use client";

import { useEffect, useRef, useState } from "react";
import { RibCube } from "@/components/art";
import { Icon } from "@/components/icons";

const STEPS = [
  ["target", "Deliver", "Consistently deliver outstanding results across the Human Resource Management value chain."],
  ["spark", "Equip", "Use world class technologies that enable organisations to run their HR departments."],
  ["chart", "Improve", "Make HR more strategic and efficient, at a reduced cost."],
  ["link", "Connect", "Add real time digital data reporting and virtual collaboration as extra value."],
  ["star", "Our vision", "To be the number one automated and integrated Human Resource Management services provider in Africa."],
];

const clamp = (v) => Math.min(1, Math.max(0, v));
const easeOut = (t) => 1 - (1 - t) ** 3;

// Scroll position drives the stack: each card flies in over the last, which settles back behind it.
const cardStyle = (a, i) => {
  const enter = easeOut(clamp((a - i + 1) / 0.6));
  const after = Math.max(0, a - i);
  const y = (1 - enter) * 75 ;
  const x = (1 - enter) * 12;
  return {
    zIndex: i,
    opacity: enter === 0 ? 0 : clamp(3 - after),
    transform: `translate3d(${x}vw, calc(${y}vh - ${after * 20}px), 0) rotate(${(1 - enter) * 4}deg) scale(${1 - after * 0.045})`,
  };
};

export function Purpose() {
  const ref = useRef(null);
  const [a, setA] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = ref.current.getBoundingClientRect();
      setA(clamp(-r.top / (r.height - innerHeight)) * (STEPS.length - 1));
    };
    const onScroll = () => { frame ||= requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);
  // The ease-out puts a card almost in place halfway through its entrance, so the list switches there.
  const now = Math.floor(a + 0.7);

  return (
    <section className="story dark" ref={ref} style={{ "--n": STEPS.length }}>
      <div className="story__pin">
        <div className="hbg hbg--home" aria-hidden="true"><i /><i /><i /></div>
        <RibCube tone="teal" className="story__cube" style={{ transform: `translateY(${-a * 26}px) rotate(${a * 9}deg)` }} />
        <div className="wrap story__in">
          <div className="story__head">
            <p className="eyebrow">Our mission and vision</p>
            <h2>What we do every day, and where it leads.</h2>
            <ol className="story__rail" aria-hidden="true">
              {STEPS.map(([, title], i) => (
                <li key={title} data-on={i <= now} data-now={i === now}><i />{title}</li>
              ))}
            </ol>
          </div>
          <ol className="story__stage">
            {STEPS.map(([icon, title, text], i) => (
              <li
                className={i === STEPS.length - 1 ? "story__card story__card--end" : "story__card"}
                key={title}
                style={cardStyle(a, i)}
              >
                <div className="story__top">
                  <span className="story__ico"><Icon name={icon} size={24} /></span>
                  <b aria-hidden="true">0{i + 1}</b>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

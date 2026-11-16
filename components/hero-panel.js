"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Arrow } from "@/components/ui";

const TABS = [
  {
    label: "Hire", scope: "Recruitment", icon: "userPlus", href: "/recruitment/",
    problems: ["We can't find qualified candidates", "Our roles stay open for months", "New hires leave within a year"],
    path: ["Brief", "Source", "Screen", "Interview", "Offer and onboard"],
  },
  {
    label: "Outsource", scope: "Outsourcing", icon: "handshake", href: "/outsourcing/",
    problems: ["HR takes too much of our time", "We're not sure we're compliant", "Our HR policies are out of date"],
    path: ["Assess needs", "Design the solution", "Hand over", "Ongoing support"],
  },
  {
    label: "HR software", scope: "HR software", icon: "grid", href: "/hr-software/",
    problems: ["Payroll takes days every month", "Leave records live in spreadsheets", "We can't see headcount at a glance"],
    path: ["Self service", "Payroll", "Attendance", "Performance", "Reports"],
  },
  {
    label: "Get certified", scope: "Training", icon: "cap", href: "/training/",
    problems: ["I want a recognized HR certification", "I'm new to HR and need the basics", "I want to move into HR leadership"],
    path: ["Learn", "Get certified", "Move your career forward"],
  },
];

// Types each problem out, holds, deletes, then moves to the next. After the last one it calls onEnd,
// which moves the panel to the next offering. Restarts when the tab changes.
function useTyped(lines, onEnd) {
  const end = useRef(onEnd);
  end.current = onEnd;
  const [text, setText] = useState(lines[0]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setText(lines[0]); return; }
    let line = 0, len = 0, deleting = false, t;
    const tick = () => {
      const full = lines[line];
      if (!deleting) {
        len++;
        if (len >= full.length) { deleting = true; t = setTimeout(tick, 1700); setText(full); setDone(true); return; }
      } else {
        setDone(false);
        len--;
        if (len <= 0) {
          if (line === lines.length - 1 && end.current) { setText(""); end.current(); return; }
          deleting = false; line = (line + 1) % lines.length;
        }
      }
      setText(lines[line].slice(0, len));
      t = setTimeout(tick, deleting ? 22 : 48);
    };
    setText("");
    t = setTimeout(tick, 250);
    return () => clearTimeout(t);
  }, [lines]);
  return [text, done];
}

export function HeroPanel() {
  const [i, setI] = useState(0);
  // Cycles through the offerings on its own until the visitor picks a tab.
  const [auto, setAuto] = useState(true);
  const refs = useRef([]);
  const tab = TABS[i];
  const [typed, done] = useTyped(tab.problems, auto ? () => setI((n) => (n + 1) % TABS.length) : null);
  const pick = (n) => { setAuto(false); setI(n); };
  const onKey = (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    const next = (i + step + TABS.length) % TABS.length;
    pick(next);
    refs.current[next].focus();
  };
  return (
    <div className="hp glass">
      <div className="hp__tabs" role="tablist" aria-label="What do you need?" onKeyDown={onKey}>
        {TABS.map((t, n) => (
          <button
            key={t.label}
            ref={(el) => { refs.current[n] = el; }}
            className="hp__tab"
            role="tab"
            id={`hp-tab-${n}`}
            aria-selected={n === i}
            aria-controls="hp-panel"
            tabIndex={n === i ? 0 : -1}
            onClick={() => pick(n)}
          >
            <Icon name={t.icon} size={17} />{t.label}
          </button>
        ))}
      </div>
      <div id="hp-panel" role="tabpanel" aria-labelledby={`hp-tab-${i}`} className="hp__body">
        <Link className="hp__row" href={tab.href} aria-label={`${tab.label}: see how we help`}>
          <svg className="hp__search" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="hp__typed" aria-hidden="true">{typed}<span className="hp__caret" /></span>
          <span className={done ? "hp__scope hp__scope--on" : "hp__scope"} key={tab.scope}>in {tab.scope}</span>
        </Link>
        <ol className="hp__path" key={tab.label} aria-label="How we go about it">
          {tab.path.map((s, n) => (
            <li key={s} style={{ "--i": n }}>{s}{n < tab.path.length - 1 && <Arrow />}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

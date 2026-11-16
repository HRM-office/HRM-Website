"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { Arrow } from "@/components/ui";
import { PROGRAMS } from "@/lib/content";

const LEVELS = [
  { key: "Beginner", label: "New to HR", icon: "book" },
  { key: "Intermediate", label: "Building my expertise", icon: "chart" },
  { key: "Advanced", label: "Leading and advising", icon: "target" },
];
const FOR = { Beginner: "Best if you're new to HR", Intermediate: "Best for growing HR professionals", Advanced: "Best for senior HR leaders", "All levels": "Open to every level" };
const TONES = ["navy", "teal", "amber", "orange"];

// Programs for this level first, then the ones open to every level.
const forLevel = (key) => [
  ...PROGRAMS.filter((p) => p.level === key),
  ...PROGRAMS.filter((p) => p.level === "All levels"),
];
const maxMonths = (time) => Number(time.match(/(\d+) months/)?.[1]) || null;

// One choice (career stage), then the matching programs as cards. No empty state to wait on.
export function ProgramPicker() {
  const [level, setLevel] = useState(LEVELS[0].key);
  return (
    <div className="prog">
      <div className="prog__tabs" role="group" aria-label="Where are you in your HR career?">
        {LEVELS.map((l) => (
          <button key={l.key} type="button" aria-pressed={level === l.key} onClick={() => setLevel(l.key)}>
            <Icon name={l.icon} size={18} />{l.label}
          </button>
        ))}
      </div>
      <ul className="prog__cards" key={level} aria-live="polite">
        {forLevel(level).map((p, i) => {
          const months = maxMonths(p.time);
          return (
            <li key={p.name} className={`prog__card prog__card--${TONES[i % TONES.length]}`} style={{ "--i": i }}>
              <small>{FOR[p.level]}</small>
              <h3>{p.name}</h3>
              <p className="prog__time"><b>{p.time}</b>{months ? " to complete" : " access"}</p>
              <a className="prog__go" href={p.page || p.href} aria-label={`${p.page ? "View" : "Enroll in"} ${p.name}`}>{p.page ? "View program" : "Enroll"} <Arrow /></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

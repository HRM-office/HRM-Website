"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons";
import { AIHR_PARTNER } from "@/lib/content";

// [href, name, who it's for, icon, cta label, cta href]
const SERVICES = [
  ["/outsourcing/", "HR outsourcing", "Our team runs it", "hands", "Start outsourcing", "/contact/?topic=HR%20outsourcing"],
  ["/hr-software/", "HR software", "Your team runs it", "grid", "Get a demo", "/contact/?topic=HR%20software"],
  ["/recruitment/", "Recruitment", "We find your hire", "users", "Start hiring", "/contact/?topic=Recruitment"],
  ["/training/", "Training", "For HR and your staff", "cap", "Get certified", AIHR_PARTNER],
];

// Each feature comes from that service's own list on the live site. Flags follow SERVICES order.
const GROUPS = [
  ["Hiring and onboarding", [
    ["Position descriptions and job adverts", [0, 0, 1, 0]],
    ["Shortlisting and interview coordination", [0, 0, 1, 0]],
    ["Employment contracts and salary benchmarking", [0, 0, 1, 0]],
    ["Orientation programs", [0, 0, 1, 0]],
    ["Recruitment and onboarding modules", [0, 1, 0, 0]],
  ]],
  ["Payroll, attendance and leave", [
    ["Payroll management", [0, 1, 0, 0]],
    ["Time and attendance", [0, 1, 0, 0]],
    ["Leave management", [0, 1, 0, 0]],
    ["Loans and salary advance", [0, 1, 0, 0]],
  ]],
  ["Performance management", [
    ["Performance systems run by our team", [1, 0, 0, 0]],
    ["Performance management module", [0, 1, 0, 0]],
  ]],
  ["Compliance and policies", [
    ["Policy development", [1, 0, 0, 0]],
    ["Compliance management", [1, 0, 0, 0]],
    ["Compliance and security built into the software", [0, 1, 0, 0]],
  ]],
  ["Employee relations and discipline", [
    ["Employee relations handled by our team", [1, 0, 0, 0]],
    ["Discipline management module", [0, 1, 0, 0]],
  ]],
  ["Reports and analytics", [
    ["Reports and analytics dashboards", [0, 1, 0, 0]],
    ["People Analytics training for your HR team", [0, 0, 0, 1]],
  ]],
  ["Skills, training and certification", [
    ["Tailored training for your staff and managers", [0, 0, 0, 1]],
    ["AIHR certificate programs, HR Essentials to Business Partnering", [0, 0, 0, 1]],
    ["Certificate on completion", [0, 0, 0, 1]],
  ]],
];

const Mark = ({ on }) => on ? (
  <><span className="cmp__yes"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.500 4.500L19 7.500" /></svg></span><span className="sr-only">Included</span></>
) : (
  <><span className="cmp__no" aria-hidden="true" /><span className="sr-only">Not included</span></>
);

export function Compare() {
  const [open, setOpen] = useState([0]);
  const toggle = (g) => setOpen((o) => (o.includes(g) ? o.filter((x) => x !== g) : [...o, g]));
  return (
    <div className="cmp">
      <table>
        <caption className="sr-only">What each HRM Office service covers</caption>
        <thead>
          <tr>
            <th scope="col" className="cmp__lead">
              <span>Expand a need to see exactly what each service covers.</span>
            </th>
            {SERVICES.map(([href, name, who, icon, cta, ctaHref]) => (
              <th scope="col" key={href}>
                <Link className="cmp__name" href={href}><Icon name={icon} size={18} /><span>{name}</span></Link>
                <small className="cmp__who">{who}</small>
                {ctaHref.startsWith("http")
                  ? <a className="cmp__cta" href={ctaHref}>{cta}</a>
                  : <Link className="cmp__cta" href={ctaHref}>{cta}</Link>}
              </th>
            ))}
          </tr>
        </thead>
        {GROUPS.map(([label, items], g) => {
          const isOpen = open.includes(g);
          const any = SERVICES.map((_, n) => items.some(([, f]) => f[n]));
          return (
            <tbody key={label} className={isOpen ? "cmp__group is-open" : "cmp__group"}>
              <tr className="cmp__head">
                <th scope="row">
                  <button type="button" aria-expanded={isOpen} aria-controls={`cmp-${g}`} onClick={() => toggle(g)}>
                    <span className="cmp__toggle" aria-hidden="true" />{label}
                    <small>{items.length} features</small>
                  </button>
                </th>
                {any.map((on, n) => <td key={n}><Mark on={on} /></td>)}
              </tr>
              {items.map(([name, flags], k) => (
                <tr className="cmp__row" key={name} id={k === 0 ? `cmp-${g}` : undefined} hidden={!isOpen}>
                  <th scope="row">{name}</th>
                  {flags.map((on, n) => <td key={n}><Mark on={!!on} /></td>)}
                </tr>
              ))}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

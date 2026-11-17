import Link from "next/link";
import { Arrow, Closing, Faq, Head, PageHero, Ruled, Why, Banner, Download } from "@/components/ui";
import { Icon } from "@/components/icons";
import { PHOTOS, QUOTES, Quote } from "@/lib/content";

// Modules grouped by the part of the job they serve. [name, icon, what it does]
const GROUPS = [
  ["hire", "Hire", [
    ["Recruitment", "userPlus", "Post roles, track applicants and shortlist in one place."],
    ["Employee onboarding", "handshake", "Offer letters, documents and first-day checklists."],
  ]],
  ["people", "People", [
    ["HR information system", "id", "One up-to-date record for every employee."],
    ["Employee self service", "users", "Staff update details, see payslips and request leave."],
    ["Discipline management", "gavel", "Queries, hearings and outcomes, kept on record."],
    ["Retirement and exit", "exit", "Exit interviews, clearance and final settlement."],
  ]],
  ["pay", "Pay", [
    ["Payroll management", "money", "Run payroll, deductions and payslips every month."],
    ["Loans and salary advance", "loan", "Requests, approvals and repayments through payroll."],
  ]],
  ["time", "Time", [
    ["Time and attendance", "clock", "Clock-ins, shifts and lateness at a glance."],
    ["Leave management", "calendar", "Balances, requests and approvals without the paperwork."],
  ]],
  ["grow", "Grow", [
    ["Performance management", "chart", "Goals, appraisals and review cycles."],
    ["Training and development", "cap", "Plan training and see who completed what."],
  ]],
  ["insight", "Insight", [
    ["Reports and analytics", "growth", "Headcount, turnover and payroll reports when you need them."],
  ]],
];

export const metadata = {
  title: "HR software",
  description: "HR software for payroll, attendance, leave, performance, self service and reporting, from HRM Office.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="HR software"
        title="Run your HR operations from one system."
        lede="Centralize your employee data and automate the routine work, from recruitment through to retirement and exit."
        main={PHOTOS.laptopPair}
        icons={[["grid", "Dashboard"], ["users", "People"], ["chart", "Reports"], ["doc", "Payroll"], ["shield", "Compliance"]]}
      >
        <Link className="btn btn--cta" href="/contact/?topic=HR%20software">Get a demo <Arrow /></Link>
        <a className="btn btn--ghost" href="#modules">See what's included</a>
      </PageHero>

      <Why
        title={<>Why choose our <em className="hl">HR software</em></>}
        items={[
          ["Increased efficiency", "Automate routine HR tasks and give your team time for strategy."],
          ["Centralized data", "All HR information in one secure, accessible platform."],
          ["Customizable", "Tailor the system to match how your organization works."],
          ["Scalable", "Grows with your business, from startup to enterprise."],
        ]}
        photos={[PHOTOS.desk, PHOTOS.officeBlue, PHOTOS.expoTalk]}
      />

      <section className="section section--tint" id="modules">
        <div className="wrap">
          <div className="mods2__head">
            <div>
              <p className="eyebrow">What&apos;s included</p>
              <h2>Thirteen modules. One login.</h2>
            </div>
            <p className="lede">Start with what you need today and add the rest as you grow, from a new hire&apos;s first day to their exit.</p>
          </div>
          <div className="mods2">
            {GROUPS.map(([key, label, items]) => (
              <section className={`mgrp mod--${key}`} key={key} aria-labelledby={`mg-${key}`}>
                <h3 id={`mg-${key}`}>{label}<span>{items.length} {items.length === 1 ? "module" : "modules"}</span></h3>
                <ul>
                  {items.map(([name, icon, text]) => (
                    <li key={name}>
                      <span className="mgrp__ico"><Icon name={icon} size={18} /></span>
                      <span><b>{name}</b><small>{text}</small></span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Download item="software" />

      <section className="section" id="features">
        <div className="wrap split split--even">
          <div>
            <p className="eyebrow">Comprehensive HR features</p>
            <h2>Features your whole team will use</h2>
          </div>
          <Ruled items={["Employee management", "Analytics and reporting", "Time and attendance", "Payroll management", "Performance management", "Compliance and security"]} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap"><Quote q={QUOTES.janefrancis} /></div>
      </section>

      <Faq
        title="HR software, answered"
        topic="HR software"
        items={[
          ["What does the software cover?", "Thirteen modules across the employee lifecycle: recruitment, employee records, self service, performance, payroll, time and attendance, leave, loans and salary advance, onboarding, training, discipline, exit and reports."],
          ["Is our employee data safe?", "The platform uses data encryption, audit trails and role-based permissions, and supports GDPR compliance."],
          ["Can it be set up for how we work?", "Yes. The system is customizable, so approval flows, policies and reports match your organization."],
          ["Will it still fit as we grow?", "Yes. It is built to scale from a startup team to an enterprise workforce."],
          ["Can staff use it away from their desk?", "Time and attendance tracking supports mobile, and employee self service lets staff handle routine requests themselves."],
        ]}
      />

      <Banner img="/photos/cut-hrm-cafe-waist.webp" w={683} h={926} title="All your people. One system." text="Records, payroll, leave and reports in one place your managers will actually use." cta="Get a demo" href="/contact/?topic=HR%20software" chips={[["Payroll approved", "248 employees"], ["Leave approved", "3 days · Annual leave"], ["New hire onboarded", "Documents complete"]]} />
      <Closing
        action="Get a demo"
        topic="HR software"
        title="Ready to modernize your HR operations?"
        lede="Tell us how your team works today, and we'll show you how the software fits."
      />
    </>
  );
}

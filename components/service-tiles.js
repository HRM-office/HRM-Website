import Link from "next/link";
import { Arrow, Crop } from "@/components/ui";
import { PHOTOS } from "@/lib/content";

// One focused product moment per service, laid over a real photo. Hovering a tile plays the
// next step of that moment (a review finishes, payroll gets approved, a candidate reaches offer).

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.500 4.500L19 7.500" /></svg>
);

// Swaps label a for label b when the tile is hovered or focused.
const Flip = ({ a, b, className = "" }) => (
  <span className={`flip ${className}`}><span className="flip__a">{a}</span><span className="flip__b">{b}</span></span>
);

const Desk = () => (
  <div className="frag frag--desk">
    <p className="frag__head"><b>HR desk</b><span>This month</span></p>
    <ul>
      <li><span><b>Leave policy update</b><small>Compliance</small></span><i className="pill pill--done"><Check /> Done</i></li>
      <li>
        <span><b>Mid-year reviews</b><small>Performance</small></span>
        <Flip className="pill pill--live" a="68%" b={<><Check /> Done</>} />
        <em className="frag__bar"><i /></em>
      </li>
      <li><span><b>Disciplinary hearing</b><small>Employee relations</small></span><i className="pill">Thu, 10:00</i></li>
    </ul>
  </div>
);

const Payroll = () => (
  <div className="frag frag--pay">
    <p className="frag__head"><b>October payroll</b><span>248 employees</span></p>
    <p className="frag__big">₦48,260,500</p>
    <div className="frag__spark" aria-hidden="true">{[38, 44, 41, 52, 49, 58, 61, 57, 66, 70, 68, 76].map((h, n) => <i key={n} style={{ height: `${h}%` }} />)}</div>
    <Flip className="frag__cta" a="Ready to approve" b={<><Check /> Approved, paying Friday</>} />
  </div>
);

const STAGES = ["Sourced", "Screened", "Interview", "Offer"];
const Candidate = () => (
  <div className="frag frag--cand">
    <div className="frag__who">
      <span className="frag__face"><Crop photo={PHOTOS.manOutdoor} sizes="48px" /></span>
      <span><b>Tunde Bakare</b><small>Finance Analyst · Shortlisted</small></span>
    </div>
    <ol className="frag__track">{STAGES.map((s) => <li key={s}>{s}</li>)}</ol>
    <Flip className="frag__status" a="Interview booked, Tue 11:00" b={<><Check /> Offer accepted</>} />
  </div>
);

// The real AIHR course player and certificate, as the overlay for the training tile.
const Course = () => (
  <img className="frag-img" src="/photos/aihr-lms.webp" alt="" width="468" height="491" loading="lazy" />
);

export const TILES = [
  { id: "outsourcing", icon: "hands", tone: "navy", label: "HR outsourcing", title: "Focus on your core business.", body: "Our team runs policy, compliance, employee relations and performance, and you see every open item.", href: "/outsourcing/", cta: "Explore outsourcing", top: true, photo: { ...PHOTOS.teamLaptop, pos: "50% 29%" }, frag: <Desk /> },
  { id: "software", icon: "grid", tone: "teal", label: "HR software", title: "One system for everyday HR.", body: "Employee records, self service, payroll and reporting in one place your managers will actually use.", href: "/hr-software/", cta: "Explore HR software", photo: { ...PHOTOS.callDesk, pos: "60% 40%" }, frag: <Payroll /> },
  { id: "recruitment", icon: "users", tone: "amber", label: "Recruitment", title: "The right talent, without the chase.", body: "We write the brief, source, screen and book interviews, then see your hire through to day one.", href: "/recruitment/", cta: "Explore recruitment", photo: PHOTOS.interview, frag: <Candidate /> },
  { id: "training", icon: "cap", tone: "sky", label: "Training and certification", title: "Train your people, grow your career.", body: "AIHR certification for HR professionals, and tailored training for your staff and managers.", href: "/training/", cta: "Explore training", badge: ["Now enrolling", "10% off for members"], photo: { ...PHOTOS.lobby, pos: "50% 40%" }, cut: ["/photos/cut-folders-waist.webp", 440, 430], frag: <Course /> },
];

export function ServiceTiles() {
  return (
    <div className="tiles">
      {TILES.map((t) => (
        <Link className={`tile tile--${t.tone}${t.top ? " tile--ftop" : ""}`} href={t.href} id={`svc-${t.id}`} key={t.id}>
          {t.badge && <span className="tile__badge"><b>{t.badge[0]}</b><span>{t.badge[1]}</span></span>}
          <div className="tile__art" aria-hidden="true">
            <div className={`tile__photo${t.cut ? " tile__photo--soft" : ""}`}><Crop photo={t.photo} sizes="(max-width: 900px) 90vw, 560px" /></div>
            {t.cut && <img className="tile__cut" src={t.cut[0]} alt="" width={t.cut[1]} height={t.cut[2]} loading="lazy" />}
            {t.frag}
          </div>
          <div className="tile__copy">
            <p className="tile__kicker">{t.label}</p>
            <h3>{t.title}</h3>
            <p className="tile__body">{t.body}</p>
            <span className="tile__cta">{t.cta} <Arrow /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}

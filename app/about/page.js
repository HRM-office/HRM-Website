import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Purpose } from "@/components/purpose";
import { Arrow, Closing, Head, PartnerSection } from "@/components/ui";
import { PHOTOS } from "@/lib/content";

export const metadata = {
  title: "About us",
  description: "HRM Office is a Lagos-based HR services company and official AIHR Certified Partner. Meet our mission, values and Managing Partner.",
};

// Placeholder names until HRM Office supplies the real team.
// Leadership team. Add email and linkedin as they are confirmed; empty slots show as "coming soon".
const TEAM = [
  { name: "Fredrick Okeagu", role: "Managing Partner", photo: "/brand/fredrick.webp", email: "", linkedin: "" },
  { name: "Chima Duru", role: "", email: "", linkedin: "" },
  { name: "Jacinta", role: "", email: "", linkedin: "" },
  { name: "Vivian", role: "", email: "", linkedin: "" },
];

// Neutral profile drawing used until a portrait is supplied.
const Avatar = () => (
  <svg className="team__avatar" viewBox="0 0 120 150" aria-hidden="true">
    <rect width="120" height="150" fill="#e9eefb" />
    <circle cx="60" cy="58" r="24" fill="#c3cdea" />
    <path d="M18 150c3-30 20-46 42-46s39 16 42 46z" fill="#c3cdea" />
  </svg>
);

const VALUES = [
  ["Professionalism", "shield", "We are reliable in following global best practices and guided by high ethical standards."],
  ["Responsibility", "target", "We show leadership through responsibility and accountability, handling every client's business with a sense of ownership."],
  ["Excellence", "star", "We are innovative, creative and responsive in the way we think, learn and act."],
  ["Teamwork", "users", "We share experiences, knowledge and ideas to foster greater communication, interaction and cohesiveness."],
  ["Relationship", "hands", "People make an organisation what it becomes, so we build solutions that attract talent and create lasting relationships."],
  ["Innovation", "spark", "We encourage our staff and partners to think creatively and reach their potential."],
  ["Passion", "heart", "We are driven by a desire to make a difference and enhance the workforce performance of different organisations."],
];

export default function Page() {
  return (
    <>
      {/* Full-bleed hero: real HRM Office photos crossfade with a slow zoom behind the copy. */}
      <section className="ahero">
        <div className="ahero__slides" aria-hidden="true">
          {[["about-team", "50% 30%"], ["about-booth", "55% 30%"], ["about-card", "50% 25%"]].map(([f, pos], i) => (
            <span className="ahero__slide" style={{ "--i": i }} key={f}>
              <Image quality={90} src={`/photos/${f}.webp`} alt="" fill priority={i === 0} sizes="100vw" style={{ objectFit: "cover", objectPosition: pos }} />
            </span>
          ))}
        </div>
        <div className="wrap ahero__copy">
          <p className="eyebrow">About HRM Office</p>
          <h1>Transforming HR excellence, together.</h1>
          <p className="lede">Recruitment, people development, performance, payroll and HR outsourcing, delivered by a Lagos team in a technology-enabled way.</p>
          <div className="ahero__ticks" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <section className="boss" id="leadership">
        <div className="boss__photo">
          <Image quality={90} src="/brand/fredrick.webp" alt="Portrait of Fredrick Okeagu, Managing Partner of HRM Office" fill sizes="(max-width: 900px) 100vw, 58vw" />
        </div>
        <div className="wrap">
          <div className="boss__copy">
            <p className="eyebrow">Our leadership</p>
            <h2>Fredrick Okeagu</h2>
            <p className="boss__role">Managing Partner</p>
            <p className="boss__cred">Ph.D in view, MSc, ACIPM, HRPL, CMC, C-KPI</p>
            <p className="boss__bio">
              An experienced HR professional with extensive expertise in human resource management and strategic leadership.
            </p>
            <div className="btn-row">
              <Link className="btn btn--cta" href="/contact/">Book a consultation <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team: four frames. Replace names, roles and photos with the real team. */}
      {/* Hidden until team roles, photos and contacts are confirmed. Remove `hidden` to show. */}
      <section className="section team" hidden>
        <div className="wrap">
          <div className="team__head">
            <div>
              <p className="eyebrow">Our team</p>
              <h2>The people behind <em className="hl">your HR</em>.</h2>
            </div>
            <p className="lede">The people who lead your recruitment, outsourcing, software and training work.</p>
          </div>
          <ul className="team__grid">
            {TEAM.map((m) => (
              <li key={m.name} className="team__card">
                <div className="team__photo">
                  {m.photo ? <Image quality={90} src={m.photo} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 700px) 50vw, 300px" style={{ objectFit: "cover", objectPosition: "50% 15%" }} /> : <Avatar />}
                </div>
                <b>{m.name}</b>
                <span>{m.role || "HRM Office team"}</span>
                <div className="team__links">
                  {m.email
                    ? <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`}><Icon name="mail" size={18} /></a>
                    : <span className="team__slot" title="Email coming soon"><Icon name="mail" size={18} /></span>}
                  {m.linkedin
                    ? <a href={m.linkedin} target="_blank" rel="noopener" aria-label={`${m.name} on LinkedIn`}><Icon name="linkedin" size={18} /></a>
                    : <span className="team__slot" title="LinkedIn coming soon"><Icon name="linkedin" size={18} /></span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Purpose />

      <PartnerSection />

      <section className="section section--orbs">
        <div className="wrap">
          <Head center eyebrow="Our values" title="The principles we work by" />
          <Reveal as="ul" className="rv--kids values">
            {VALUES.map(([name, icon, text]) => (
              <li className="glass" key={name}>
                <span className="values__ico"><Icon name={icon} /></span>
                <div><h3>{name}</h3><p>{text}</p></div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <Closing title="Let's transform your HR operations together." lede="Tell us about your organization and where you need support." />
    </>
  );
}

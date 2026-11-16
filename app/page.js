import Image from "next/image";
import Link from "next/link";
import { FileRack, Folder3D, RibCube } from "@/components/art";
import { Compare } from "@/components/compare";
import { FlagStack } from "@/components/flags";
import { HeroPanel } from "@/components/hero-panel";
import { Icon } from "@/components/icons";
import { QuoteRotator } from "@/components/quotes";
import { RotatingWord } from "@/components/rotating-word";
import { ServiceTiles, TILES } from "@/components/service-tiles";
import { Arrow, Closing, Crop, Head, HeroBg, PartnerSection, Waves } from "@/components/ui";
import { PHOTOS } from "@/lib/content";

const PROOF = [
  ["200+", "companies served in Nigeria and across Africa"],
  ["2K+", "professionals trained on our programs"],
  ["98%", "client satisfaction and completion"],
  ["5+", "industry awards"],
];

// [file, name, width, height] of the trimmed logo files.
const PARTNERS = [
  ["aihr", "AIHR, Academy to Innovate HR", 1095, 248], ["afro-penthouse", "Afro-Penthouse", 444, 34], ["digital-energy", "Digital Energy", 389, 137], ["pivot", "Pivot Integrated Energy Services", 330, 134],
  ["aci-holdings", "ACI Holdings", 100, 36], ["futuretech", "Futuretech", 112, 43], ["dowslakers", "Dowslakers", 395, 200],
  ["greencorp-africa", "Greencorp Africa", 197, 200], ["cinemas", "Nile Cinemas", 175, 200], ["masterslive", "Masterslive Network", 192, 48],
];
// Same visual area for every logo: wide marks get wider, square marks stay compact.
const logoWidth = (w, h) => Math.round(Math.min(270, 76 * (w / h) ** 0.6));

const RESOURCES = [
  ["/blog/", "HR insights", "Blog and articles", "Practical guidance on recruitment, training and outsourcing from our team."],
  ["/training/", "AIHR certification", "Certificate programs", "Globally recognized programs, from HR Essentials to Business Partnering."],
  ["/business-functions/", "Consulting", "Business functions", "Compliance, analytics, process optimization and strategic HR consulting."],
  ["/jobs/", "Careers", "Jobs at HRM Office", "See current openings, or send your resume for future roles."],
];


export default function Home() {
  return (
    <>
      <section className="hero dark">
        <HeroBg variant="home" />
        <div className="hero__art" aria-hidden="true">
          <Folder3D className="cube--a" />
          <RibCube tone="amber" className="cube--b" />
          <RibCube tone="navy" className="cube--c" />
          <FileRack className="cube--d" />
        </div>
        <div className="wrap hero__copy">
          <p className="tagpill"><FlagStack /><span>Serving teams across Africa</span></p>
          <h1 aria-label="Every part of HR, run by one team.">Every part of HR, run by <RotatingWord words={["one team", "one software"]} end="." /></h1>
          <p className="lede">
            Hiring, payroll, performance, compliance and certification for companies and HR
            professionals in Nigeria and across Africa.
          </p>
          <HeroPanel />
        </div>
      </section>

      <section className="proof" aria-label="Results">
        <div className="wrap">
          <div className="proof__card">
            <div className="proof__grid">
              {PROOF.map(([n, label]) => (
                <div className="proof__item" key={n}><b>{n}</b><span>{label}</span></div>
              ))}
            </div>
          </div>
          <p className="tiles-head">Trusted by leading organizations</p>
        </div>
        <div className="logos" role="region" aria-label="Organizations we work with">
          <ul className="logos__track">
            {[0, 1].map((copy) => PARTNERS.map(([file, name, w, h]) => (
              <li key={`${copy}-${file}`} aria-hidden={copy === 1 || undefined}>
                <Image quality={90} src={`/logos/${file}.webp`} alt={copy ? "" : name} width={w} height={h} sizes="200px" style={{ width: logoWidth(w, h) }} />
              </li>
            )))}
          </ul>
        </div>
      </section>

      <PartnerSection />

      <section className="section" id="services">
        <div className="wrap">
          <Head center eyebrow="What we do" title={<>Use one service, or hand us <em className="hl">the whole department</em>.</>} />
          <nav className="svc-nav" aria-label="Services">
            {TILES.map((s) => <a key={s.id} href={`#svc-${s.id}`}><Icon name={s.icon} size={18} />{s.label}</a>)}
          </nav>
          <ServiceTiles />
        </div>
      </section>

      <section className="section section--orbs">
        <div className="wrap">
          <Head
            center
            title={<>Compare our <em className="hl">services</em></>}
            lede="Every HR need, broken down feature by feature, so you can see exactly which service covers it."
          />
          <Compare />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head center title="Trusted by the leaders we work with" lede="Real stories from HRM Office clients." />
          <QuoteRotator />
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <Head center title="More ways to grow your HR practice" />
          <div className="res">
            {RESOURCES.map(([href, label, title, body]) => (
              <Link href={href} key={href}>
                <b>{label}</b>
                <h3>{title}</h3>
                <p>{body}</p>
                <span>View more <i><Arrow /></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Waves>
        <div className="ways" style={{ paddingBlock: "clamp(56px, 7vw, 96px)" }}>
          <div>
            <h3>For HR professionals</h3>
            <p>Earn a globally recognized certification and move your career forward with AIHR programs.</p>
            <Link className="btn btn--cta" href="/training/">See programs</Link>
          </div>
          <div className="ways__mid">
            <h3>For employers</h3>
            <p>Hand us your HR department, train your staff, or fix just the part that needs help. We'll recommend where to start.</p>
            <Link className="btn btn--cta" href="/contact/">Book a consultation</Link>
            <div className="ways__photo"><Crop photo={PHOTOS.team} sizes="420px" /></div>
          </div>
          <div>
            <h3>For job seekers</h3>
            <p>See open roles at HRM Office, or send your resume so we can keep it on file.</p>
            <Link className="btn btn--cta" href="/jobs/">See careers</Link>
          </div>
        </div>
      </Waves>

      <Closing
        title="We would love to help you."
        lede="Tell us where HR is stuck, and we'll recommend the right starting point."
      />
    </>
  );
}

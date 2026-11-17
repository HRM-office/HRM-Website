import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { Arrow, Checks, Closing, Head, PageHero, Stats } from "@/components/ui";
import { AIHR_PARTNER, PHOTOS, PROGRAM_PAGES, PROGRAMS } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(PROGRAM_PAGES).map((slug) => ({ slug }));

export async function generateMetadata({ params }) {
  const p = PROGRAM_PAGES[(await params).slug];
  return p ? { title: `${p.name} | AIHR training`, description: p.intro } : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = PROGRAM_PAGES[slug];
  if (!p) notFound();
  const program = PROGRAMS.find((x) => x.name === p.name);
  const others = PROGRAMS.filter((x) => x.name !== p.name);
  return (
    <>
      <PageHero eyebrow="AIHR program, with HRM Office" title={p.name} lede={p.intro} main={PHOTOS[p.photo]}
        sub={program && `${program.time} · ${program.level} · at least 10% off for HRM Office members`}>
        <a className="btn btn--cta" href={AIHR_PARTNER}>Enroll at AIHR <Arrow /></a>
        <Link className="btn btn--ghost" href="/contact/?topic=Training%20and%20certification">Ask us about it</Link>
      </PageHero>

      <Stats items={p.stats} />

      <section className="section">
        <div className="wrap pdetail">
          <div>
            <p className="eyebrow">Why take it with us</p>
            <h2>The AIHR program, with a Lagos team behind you.</h2>
            <p className="lede">HRM Office is an official AIHR partner. You study on AIHR&apos;s platform, and we help you choose, enroll and finish.</p>
            <a className="btn btn--navy" href={AIHR_PARTNER}>Claim your member discount <Arrow /></a>
          </div>
          <Checks items={p.why} variant="lg" />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Head center eyebrow="Compare" title="Other AIHR programs" />
          <ul className="pothers">
            {others.map((o) => (
              <li key={o.name}>
                <Link href={o.page || o.href}>
                  <b>{o.name}</b><span>{o.time} · {o.level}</span><Arrow />
                </Link>
              </li>
            ))}
            <li><Link href="/training/hr-mentorship/"><b>HR Mentorship</b><span>Community · monthly sessions</span><Arrow /></Link></li>
          </ul>
        </div>
      </section>

      <Closing title="Not sure this is the right program?" lede="Tell us your role and goals. We'll recommend a program and walk you through enrolling." topic="Training and certification" />
    </>
  );
}

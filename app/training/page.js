import { ProgramPicker } from "@/components/program-picker";
import { Arrow, Closing, Crop, Head, PageHero, PartnerSection, Download } from "@/components/ui";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { HexPeople } from "@/components/hex-people";
import { PHOTOS, PROGRAMS, WHATSAPP } from "@/lib/content";

export const metadata = {
  title: "HR training and certification",
  description: "AIHR-certified HR programs for professionals across Africa, through HRM Office, an official AIHR Certified Partner.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Training and certification"
        title="World-class HR training for you and your whole team."
        visual={<HexPeople />}
      >
        <a className="btn btn--cta" href="#programs">View programs <Arrow /></a>
        <a className="btn btn--ghost" href="#tailored">Tailored training</a>
      </PageHero>

      <section className="section section--orbs" id="programs">
        <div className="wrap">
          <Head center eyebrow="Our training programs" title={<>Choose the program that fits <em className="hl">your level</em></>} />
          <ProgramPicker />
          <details className="allp">
            <summary>See all {PROGRAMS.length} programs side by side <Arrow /></summary>
          <div className="table">
            {PROGRAMS.map((p) => (
              <div className="table__row" key={p.name}>
                <h3>{p.name}</h3>
                <span>{p.time}</span>
                <span>{p.level}</span>
                <a className="btn btn--cta" href={p.page || p.href} aria-label={`${p.page ? "View" : "Enroll in"} ${p.name}`}>{p.page ? "View" : "Enroll"} <Arrow /></a>
              </div>
            ))}
          </div>
          </details>
        </div>
      </section>

      <Download item="calendar" />

      {/* Tailored, in-house training: the B2B path alongside the AIHR programs. */}
      <section className="section" id="tailored">
        <div className="wrap tlr">
          <div className="tlr__art" aria-hidden="true">
            <div className="tlr__main"><Crop photo={PHOTOS.meetingWomen} sizes="(max-width: 900px) 90vw, 560px" /></div>
            <div className="tlr__side"><Crop photo={PHOTOS.teamLaptop} sizes="240px" /></div>
            <div className="tlr__chip tlr__chip--a"><Icon name="users" size={18} /><span><b>On-site or online</b><small>Lagos, or wherever your team is</small></span></div>
            <div className="tlr__chip tlr__chip--b"><Icon name="cap" size={18} /><span><b>Built for your roles</b><small>Staff, managers and HR</small></span></div>
          </div>
          <div className="tlr__copy">
            <p className="eyebrow">For organizations</p>
            <h2>Training shaped around <em className="hl">your team</em>.</h2>
            <p className="lede">Tell us where your people need to grow. We build the program around your sector and goals.</p>
            <ol className="tlr__steps">
              {["Consultation", "Training plan", "Delivery", "Follow-up"].map((t) => <li key={t}>{t}</li>)}
            </ol>
            <p className="tlr__topics"><span>Popular topics</span>{["Line managers", "Performance", "Labour law", "Leadership", "Payroll", "People analytics"].map((t) => <i key={t}>{t}</i>)}</p>
            <div className="btn-row">
              <Link className="btn btn--navy" href="/contact/?topic=Training%20and%20certification">Book a consultation <Arrow /></Link>
              <a className="tailor__wa" href={WHATSAPP}>Or chat on WhatsApp <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <PartnerSection />

      <Closing
        title="Ready to train your team or grow your career?"
        lede="Ask us which program fits you, or book a consultation for your staff."
        action="Contact us"
      />
    </>
  );
}

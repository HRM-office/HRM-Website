import Link from "next/link";
import { Arrow, Closing, Head, PageHero, Faq, Process, Ruled, Stats, Why, Banner, Download } from "@/components/ui";
import { OUTSOURCE_STEPS, PHOTOS, QUOTES, Quote } from "@/lib/content";

export const metadata = {
  title: "HR outsourcing",
  description: "HR outsourcing for companies in Nigeria and across Africa. Focus on your core business while HRM Office handles HR.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="HR outsourcing"
        title="We handle HR. You grow the business."
        lede="A strategic HR partner for policy, compliance, employee relations and performance."
        main={PHOTOS.clientMeeting}

      >
        <Link className="btn btn--cta" href="/contact/?topic=HR%20outsourcing">Start outsourcing <Arrow /></Link>
        <a className="btn btn--ghost" href="#process">How it works</a>
      </PageHero>

      <Stats items={[["200+", "businesses served"], ["40%", "average HR cost reduction"], ["98%", "client satisfaction"], ["8+", "years of experience"]]} />

      <Why
        title={<>Why companies <em className="hl">outsource</em> to us</>}
        items={[
          ["Cost reduction", "Cut HR operating costs by up to 40% without losing quality."],
          ["Improved efficiency", "Streamlined processes and expert management lift productivity."],
          ["Expert management", "Dedicated HR consultants with specialist and industry knowledge."],
          ["Scalable solutions", "Flexible services that grow and adapt as your business does."],
        ]}
        photos={[PHOTOS.officeChat, PHOTOS.expoCrowd, PHOTOS.lobby]}
      />

      <section className="section section--tint" id="process">
        <div className="wrap">
          <Head center eyebrow="Our process" title={<>How our HR outsourcing <em className="hl">works</em></>} />
          <Process items={OUTSOURCE_STEPS} />
        </div>
      </section>

      <Download item="outsourcing" />

      <section className="section" id="industries">
        <div className="wrap">
          <Head center eyebrow="Industries served" title="Expertise across industries" />
          <Ruled three items={["Technology and IT", "Manufacturing", "Healthcare", "Financial services", "Retail and e-commerce", "Education", "Construction", "Hospitality", "Oil and gas", "Transport and logistics"]} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap"><Quote q={QUOTES.simon} /></div>
      </section>

      <Faq
        title="HR outsourcing, answered"
        topic="HR outsourcing"
        items={[
          ["What can we hand over to you?", "Policy development, compliance management, employee relations and performance systems. Hand over one area, or the whole HR function."],
          ["How do we get started?", "With a needs assessment. We review how HR runs in your company today, then design a plan around your requirements before anything changes."],
          ["Will the switch disrupt our team?", "The transition is planned so daily work carries on. We roll the plan out in stages, with little disruption to operations."],
          ["Do you work in our industry?", "We serve ten sectors, from technology, financial services and healthcare to oil and gas, manufacturing and logistics, and tailor the solution to each."],
          ["What happens after the handover?", "A dedicated team manages HR day to day, handles compliance proactively and reviews performance with you on a regular schedule."],
        ]}
      />

      <Banner img="/photos/cut-hrm-woman-navy.webp" w={758} h={1100} title="Let us run HR, so you can run the business." text="Policy, compliance, employee relations and performance, handled by a team that does it every day." cta="Start outsourcing" href="/contact/?topic=HR%20outsourcing" chips={[["Leave policy updated", "Handled by HRM Office"], ["Compliance check", "All clear for Q3"]]} />
      <Closing title="Hand HR to a team that does it every day." lede="Start with a needs assessment, and we'll build the solution around you." action="Start outsourcing" topic="HR outsourcing" />
    </>
  );
}

import Link from "next/link";
import { Arrow, Closing, Head, PageHero, Faq, Process, Stats, Why, Banner } from "@/components/ui";
import { PHOTOS, QUOTES, Quote, RECRUIT_STEPS } from "@/lib/content";
import { TalentWall } from "@/components/talent-wall";

export const metadata = {
  title: "Recruitment",
  description: "Recruitment and staffing for companies in Nigeria: job adverts, shortlisting, interviews, contracts, salary benchmarking and onboarding.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment"
        title="Find the right talent for your organization."
        lede="Let us take care of staffing, from the position description to your new hire's orientation."
        visual={<TalentWall />}
      >
        <Link className="btn btn--cta" href="/contact/?topic=Recruitment">Start hiring <Arrow /></Link>
      </PageHero>

      <Stats items={[["2,000+", "successful placements"], ["98%", "client satisfaction"], ["48hrs", "average response time"]]} />

      <section className="section" id="process">
        <div className="wrap">
          <Head center eyebrow="Our recruitment process" title={<>Five steps from <em className="hl">brief to first day</em></>} />
          <Process items={RECRUIT_STEPS} />
        </div>
      </section>

      <div id="solutions" />
      <Why
        title={<>Comprehensive <em className="hl">staffing solutions</em></>}
        items={[
          ["Position descriptions", "Job descriptions written to attract the right talent."],
          ["Job adverts and tracking", "Adverts posted and tracked for the widest candidate reach."],
          ["Interviews and shortlisting", "We interview and bring you only the most qualified people."],
          ["Employment contracts", "Legally compliant contracts tailored to your needs."],
          ["Onboarding documentation", "Advice on background checks and commencement documents."],
          ["Salary benchmarking", "Salary analysis so your offer is competitive and fair."],
          ["Orientation programs", "Induction programs designed and delivered for new hires."],
        ]}
        photos={[PHOTOS.suit, PHOTOS.expoPair, PHOTOS.team]}
      />

      <section className="section section--tint">
        <div className="wrap"><Quote q={QUOTES.ogochukwu} /></div>
      </section>

      <Faq
        title="Recruitment, answered"
        topic="Recruitment"
        items={[
          ["How quickly will we hear from you?", "Our average response time is 48 hours. Send the role, and we come back to agree the brief and next steps."],
          ["Which parts of hiring do you handle?", "All of it, or the part you choose: the position description, job adverts, shortlisting, interviews, contracts, salary benchmarking and orientation."],
          ["How do you check candidates?", "Every shortlisted candidate goes through a skills assessment and a culture-fit review before the interview stage."],
          ["Do you stay involved after the offer?", "Yes. We support the offer negotiation, advise on background checks and commencement documents, and can run the orientation program."],
          ["Can you tell us what to pay for a role?", "Yes. Salary benchmarking is part of the service, so your offer is competitive and fair for the market."],
        ]}
      />

      <Banner img="/photos/cut-hrm-portrait-glasses.webp" w={1100} h={999} title="Your next great hire is already out there." text="Tell us about the role. We write the brief, find the people and see them through to their first day." cta="Start hiring" href="/contact/?topic=Recruitment" chips={[["Offer accepted", "Finance Analyst"], ["Interview booked", "Tue, 11:00"]]} />
      <Closing title="Have a role to fill?" lede="Tell us about the position, and we'll take it from there." action="Start hiring" topic="Recruitment" />
    </>
  );
}

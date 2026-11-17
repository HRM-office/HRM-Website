import Image from "next/image";
import { Arrow, Head, PageHero, SplitCard, Why } from "@/components/ui";
import { PHOTOS } from "@/lib/content";

export const metadata = {
  title: "Jobs and careers",
  description: "Build your career with HRM Office. See current openings or send us your resume.",
};

const RESUME_EMAIL = "hrmofficeltd@gmail.com";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Join our team"
        title="Build your career with HRM Office."
        lede="Work with HR professionals serving companies in Nigeria and across Africa."
        visual={
          <div className="seat">
            <span className="seat__halo glass-dark" />
            <span className="seat__floor" />
            <Image quality={90} className="seat__chair" src="/photos/cut-office-chair.webp" alt="An empty office chair waiting for its next team member" width={876} height={1300} sizes="(max-width: 900px) 60vw, 360px" priority />
            <span className="seat__tag glass">This seat could be yours</span>
          </div>
        }
      >
        <a className="btn btn--cta" href="#openings">View open positions <Arrow /></a>
      </PageHero>

      <Why
        title={<>Why join <em className="hl">HRM Office</em></>}
        items={["Competitive compensation", "Health and wellness", "Career growth", "Work-life balance"]}
        photos={[PHOTOS.officeBraids, PHOTOS.expoTalk, PHOTOS.team]}
      />

      <section className="section section--tint" id="openings">
        <div className="wrap">
          <Head center eyebrow="Current job openings" title="No open positions right now" lede="New openings will appear on this page. You can send your resume today and we'll keep it on file." />
        </div>
      </section>
      <SplitCard
        title="Send us your resume"
        action="Email your resume"
        href={`mailto:${RESUME_EMAIL}?subject=Resume`}
        question="Questions about working with us?"
      />
    </>
  );
}

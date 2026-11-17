import { MentorshipForm } from "@/components/mentorship-form";
import { Arrow, Checks, PageHero, Stats } from "@/components/ui";
import { PHOTOS } from "@/lib/content";

export const metadata = {
  title: "HR mentorship community",
  description: "Join HRM Office's HR Mentorship community: one-on-one guidance, monthly sessions and a network of HR professionals.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="HR mentorship" title="Grow your HR career with people who've done it." main={PHOTOS.duoArms}
        lede="Join our HR Mentorship community. Experienced professionals guide you from fundamentals to advanced strategy, with a network of HR peers around you.">
        <a className="btn btn--cta" href="#apply">Apply to join <Arrow /></a>
      </PageHero>

      <Stats items={[["4.9/5", "member rating"], ["500+", "active members"], ["Monthly", "group sessions"]]} />

      <section className="section" id="apply">
        <div className="wrap pdetail">
          <div>
            <p className="eyebrow">Why join</p>
            <h2>Guidance, community and a clear next step.</h2>
            <Checks variant="lg" items={[
              ["Personal mentorship", "One-on-one guidance from experienced HR professionals."],
              ["An active community", "Connect with 500+ HR professionals and share experience."],
              ["Career direction", "Insight on career paths and the skills to build next."],
              ["Ongoing learning", "Exclusive resources and monthly group sessions."],
            ]} />
          </div>
          <div className="pdetail__form">
            <h2>Apply for HR mentorship</h2>
            <p className="lede">Takes two minutes. We reply within 24 to 48 hours.</p>
            <MentorshipForm />
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ResourceLibrary } from "@/components/resource-library";
import { Arrow, Closing, PageHero } from "@/components/ui";
import { PHOTOS } from "@/lib/content";
import RESOURCES from "@/lib/resources.json";

export const metadata = {
  title: "AI in HR resource library",
  description: "Free AI-in-HR guides, templates and checklists from AIHR and HRM Office: prompts, policy, vendor evaluation, analytics and more.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="AIHR x HRM Office" title="The AI in HR resource library." main={PHOTOS.teamLaptop}
        lede={`${RESOURCES.length} free guides, templates and checklists to help your HR team use AI well: prompts, policy, vendors, analytics and more.`}>
        <a className="btn btn--cta" href="#library">Browse the library <Arrow /></a>
        <Link className="btn btn--ghost" href="/training/">AIHR training</Link>
      </PageHero>
      <section className="section" id="library">
        <div className="wrap"><ResourceLibrary /></div>
      </section>
      <Closing title="Turn downloads into action." lede="Book a session and we'll help you pick the right resources, adapt the templates and connect your team to AIHR training." topic="Training and certification" />
    </>
  );
}

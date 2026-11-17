import Link from "next/link";
import { Arrow, Closing, Head, PageHero, Ruled, Why } from "@/components/ui";
import { PHOTOS } from "@/lib/content";

export const metadata = {
  title: "HR business functions",
  description: "Human capital management, HR analytics, compliance, process optimization, HR consulting and policies from HRM Office.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Business functions"
        title="Strategic HR business functions for growth."
        lede="Consulting and hands-on support for the HR functions that keep your organization compliant and moving."
        main={PHOTOS.execOutdoor}
        map

      >
        <Link className="btn btn--cta" href="/contact/?topic=Business%20functions">Book a consultation <Arrow /></Link>
        <a className="btn btn--ghost" href="#functions">Explore functions</a>
      </PageHero>

      <div id="functions" />
      <Why
        title={<>Six <em className="hl">core functions</em> we strengthen</>}
        items={["Human capital management", "HR analytics and insights", "Compliance and risk management", "Process optimization", "Strategic HR consulting", "Documentation and policies"]}
        photos={[PHOTOS.expoBooth, PHOTOS.laptop, PHOTOS.lead]}
      />

      <section className="section section--tint">
        <div className="wrap">
          <Head center eyebrow="Industry-specific solutions" title="Fitted to how your sector works" />
          <Ruled three items={["Technology and software", "Manufacturing", "Healthcare", "Financial services", "Retail and e-commerce", "Education"]} />
        </div>
      </section>

      <Closing title="Ready to optimize your HR business functions?" lede="Book a consultation and tell us what needs attention first." action="Schedule a consultation" />
    </>
  );
}

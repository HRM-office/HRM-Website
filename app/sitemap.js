import { PROGRAM_PAGES } from "@/lib/content";
import { POSTS } from "@/lib/posts";

const SITE = "https://www.hrmoffice.org";
const PAGES = ["", "outsourcing/", "hr-software/", "recruitment/", "training/", "business-functions/", "about/", "blog/", "jobs/", "contact/", "training/hr-mentorship/", "aihrguide/", "privacy-policy/"];

export default function sitemap() {
  return [
    ...PAGES.map((p) => ({ url: `${SITE}/${p}`, changeFrequency: "monthly", priority: p ? 0.8 : 1 })),
    ...Object.keys(PROGRAM_PAGES).map((slug) => ({ url: `${SITE}/training/${slug}/`, changeFrequency: "monthly", priority: 0.7 })),
    ...POSTS.map((p) => ({ url: `${SITE}/blog/${p.slug}/`, changeFrequency: "yearly", priority: 0.5 })),
  ];
}

import Link from "next/link";
import { Arrow } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap">
        <b>Error 404</b>
        <h1>We can&apos;t find that page.</h1>
        <p>The link may be old, or the page may have moved. These will get you back on track.</p>
        <div className="btn-row">
          <Link className="btn btn--navy" href="/">Go to the home page <Arrow /></Link>
          <Link className="btn btn--ghost" href="/contact/">Book a consultation</Link>
        </div>
        <ul>
          <li><Link href="/outsourcing/">HR outsourcing</Link></li>
          <li><Link href="/hr-software/">HR software</Link></li>
          <li><Link href="/recruitment/">Recruitment</Link></li>
          <li><Link href="/training/">Training</Link></li>
          <li><Link href="/blog/">Blog</Link></li>
        </ul>
      </div>
    </section>
  );
}

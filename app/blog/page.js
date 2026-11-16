import Image from "next/image";
import Link from "next/link";
import { BlogList } from "@/components/blog-list";
import { POSTS } from "@/lib/posts";

export const metadata = {
  title: "Blog and insights",
  description: "HR insights and resources from HRM Office on recruitment, training, outsourcing and compliance.",
};

export default function Page() {
  const [a, b, c] = POSTS;
  return (
    <div className="ins">
      <nav className="ins__bar" aria-label="Insights">
        <div className="wrap ins__bar-in">
          <Link className="ins__brand" href="/blog/"><b>hrm</b>.insights<small>by HRM Office</small></Link>
          <span className="ins__links">
            <a href="#articles">Articles</a>
            <Link href="/training/">Training calendar</Link>
            <a href="#subscribe">Subscribe</a>
          </span>
        </div>
      </nav>

      <header className="wrap ins__hero">
        <div>
          <h1>HR insights, guides and stories</h1>
          <p>
            Practical reading from the HRM Office team on recruitment, training, outsourcing and compliance in
            Nigeria and across Africa. Written for HR people and the leaders they work with, <b>and all free.</b>
          </p>
        </div>
        {/* Three articles shown as tablets, like a stack of reports. */}
        <div className="ins__devices" aria-hidden="true">
          {[b, a, c].map((p, i) => (
            <span className={`itab itab--${i}`} key={p.slug}>
              <span className="itab__screen">
                <Image quality={90} src={p.image} alt="" fill sizes="220px" priority />
                <span className="itab__title">{p.title}</span>
              </span>
            </span>
          ))}
        </div>
      </header>

      <section className="wrap ins__list" id="articles"><BlogList /></section>
    </div>
  );
}

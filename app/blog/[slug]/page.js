import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog-list";
import { ShareBar } from "@/components/share-bar";
import { Arrow } from "@/components/ui";
import { getPost, POSTS } from "@/lib/posts";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const p = getPost((await params).slug);
  return p ? { title: p.title, description: p.excerpt.slice(0, 160) } : {};
}

export default async function Page({ params }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const [lede, ...body] = p.blocks[0]?.[0] === "p" ? p.blocks : [null, ...p.blocks];
  const related = [...POSTS.filter((x) => x.slug !== p.slug && x.category === p.category), ...POSTS.filter((x) => x.slug !== p.slug && x.category !== p.category)].slice(0, 3);
  return (
    <article className="article">
      <div className="wrap article__wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/" aria-label="Home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z" /></svg>
          </Link>
          <span aria-hidden="true">›</span><Link href="/blog/">Blog</Link>
          <span aria-hidden="true">›</span><span>{p.category}</span>
        </nav>
        <p className="article__cat">{p.category}</p>
        <h1>{p.title}</h1>
        {lede && <p className="article__lede">{lede[1]}</p>}
        <div className="article__meta">
          <p><b>Written by</b> {p.author}<br /><b>Published</b> {p.date} · {p.read}</p>
          <ShareBar slug={p.slug} title={p.title} />
        </div>
        <figure className="article__img"><Image quality={90} src={p.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 960px" /></figure>
        <div className="prose">
          {body.map(([t, c], i) => t === "ul"
            ? <ul key={i}>{c.map((li) => <li key={li}>{li}</li>)}</ul>
            : t === "h2" ? <h2 key={i}>{c}</h2> : <p key={i}>{c}</p>)}
        </div>
        <aside className="article__cta">
          <div><b>Need help putting this into practice?</b><p>Talk to the HRM Office team about recruitment, training or outsourcing.</p></div>
          <Link className="btn btn--cta" href="/contact/">Talk to us <Arrow /></Link>
        </aside>
      </div>
      <section className="section section--tint">
        <div className="wrap">
          <div className="article__more"><h2>Keep reading</h2><Link className="link" href="/blog/">All articles <Arrow /></Link></div>
          <div className="rgrid">{related.map((r) => <PostCard key={r.slug} p={r} />)}</div>
        </div>
      </section>
    </article>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Arrow } from "@/components/ui";
import { EMAIL } from "@/lib/content";
import { CATEGORIES, POSTS } from "@/lib/posts";

const MONTHS = { Jan: "January", Feb: "February", Mar: "March", Apr: "April", May: "May", Jun: "June", Jul: "July", Aug: "August", Sep: "September", Oct: "October", Nov: "November", Dec: "December" };
// "Apr 16, 2025" -> "April 2025"
const month = (d) => { const [m, , y] = d.replace(",", "").split(" "); return `${MONTHS[m] ?? m} ${y}`; };

// Designed thumbnail: cover line on a brand panel, photo cut on an angle.
const Cover = ({ p, priority }) => {
  const [pre, hl, post, tone] = p.cover ?? ["", p.title, "", "navy"];
  return (
    <span className={`cover cover--${tone}`}>
      <span className="cover__photo"><Image quality={90} src={p.image} alt="" fill sizes="(max-width: 900px) 60vw, 240px" priority={priority} /></span>
      <span className="cover__text">{pre}<b>{hl}</b>{post}<i className="cover__rule" /></span>
    </span>
  );
};

const Read = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export const PostCard = ({ p, priority }) => (
  <Link className="rcard" href={`/blog/${p.slug}/`}>
    <span className="rcard__top"><span>{month(p.date)}</span><span className="rcard__read"><Read /> {p.read}</span></span>
    <Cover p={p} priority={priority} />
    <span className="rcard__dots" aria-hidden="true"><i /><i /><i /><i /></span>
    <b className="rcard__title">{p.title}</b>
    <span className="rcard__excerpt">{p.excerpt}</span>
    <span className="rcard__go">Read more <Arrow /></span>
  </Link>
);

export function BlogList() {
  const [category, setCategory] = useState("All");
  const shown = POSTS.filter((p) => category === "All" || p.category === category);
  return (
    <>
      <p className="rfind">Find articles by category</p>
      <div className="rchips" role="group" aria-label="Filter by category">
        {CATEGORIES.map((c) => (
          <button key={c} className="rchip" aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>

      {shown.length > 0
        ? <div className="rgrid">{shown.map((p, i) => <PostCard key={p.slug} p={p} priority={i < 3} />)}</div>
        : <p className="posts-empty">No articles in {category} yet.</p>}
      <p className="rcount">{shown.length ? `1 to ${shown.length} of ${shown.length} articles` : ""}</p>

      {/* shortcut: opens the visitor's email app; swap for a mailing-list form when one exists. */}
      <form className="news" id="subscribe" action={`mailto:${EMAIL}`} method="get" encType="text/plain">
        <div>
          <b>Get new articles first</b>
          <p>HR guides, training dates and job openings, sent to your inbox.</p>
        </div>
        <input type="hidden" name="subject" value="Subscribe me to HRM Office updates" />
        <label className="news__field"><span className="sr-only">Your name</span><input name="body" placeholder="Your name" autoComplete="name" /></label>
        <button className="btn btn--navy" type="submit">Subscribe</button>
      </form>
    </>
  );
}

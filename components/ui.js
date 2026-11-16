import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { AIHR_BENEFITS, AIHR_PARTNER, ASSET, DOWNLOADS, EMAIL, PHONE, PHONE_HREF, PHOTOS, WHATSAPP } from "@/lib/content";

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h10.5M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Tick = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Checks = ({ items, variant }) => (
  <ul className={variant ? `checks checks--${variant}` : "checks"}>
    {items.map((item) => Array.isArray(item)
      ? <li key={item[0]}><Tick /><span><b>{item[0]}</b><small>{item[1]}</small></span></li>
      : <li key={item}><Tick />{item}</li>)}
  </ul>
);

export const Ruled = ({ items, three }) => (
  <Reveal as="ul" className={three ? "rv--kids ruled ruled--three" : "rv--kids ruled"}>
    {items.map((item) => <li key={item}>{item}</li>)}
  </Reveal>
);

// The person from the HRM Office logo, with a line drawing out from it: our own heading signature.
// Frames one person from a wide photo. Decorative unless alt is given.
export const Crop = ({ photo, alt = "", sizes = "420px", priority }) => (
  <span className="crop">
    <Image quality={90}
      src={photo.src.startsWith("/") ? photo.src : `${ASSET}/${photo.src}`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectPosition: photo.pos, transform: photo.zoom ? `scale(${Math.min(photo.zoom, 1.12)})` : undefined, transformOrigin: photo.pos }}
    />
  </span>
);

export const Process = ({ items }) => (
  <Reveal as="ol" className="band" style={{ "--n": items.length }}>
    {items.map((item, i) => {
      const [title, text] = Array.isArray(item) ? item : [item];
      return (
        <li key={title} style={{ "--i": i }}>
          <span className="blob">{i + 1}</span>{title}
          {text && <small>{text}</small>}
        </li>
      );
    })}
  </Reveal>
);

export const Waves = ({ children, className = "" }) => (
  <section className={`waves ${className}`}>
    <svg viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 180C240 60 420 300 720 200S1180 60 1440 190V700H0Z" fill="#2bbec5" opacity=".1" />
      <path d="M0 340C300 220 460 440 760 340S1200 260 1440 360V700H0Z" fill="#2bbec5" opacity=".1" />
      <path d="M0 520C260 430 520 620 820 520S1240 470 1440 540V700H0Z" fill="#f7b32b" opacity=".12" />
    </svg>
    <div className="wrap">{children}</div>
  </section>
);

export const PartnerSection = () => (
  <Waves>
    <div className="prime" id="aihr-partner">
      <div className="prime__copy">
        <h2>Certified <em className="hl">AIHR Partner</em></h2>
        <p className="lede">
          As an official AIHR Certified Partner, we bring world-class HR education and certification programs directly to
          HR professionals and teams across Africa. Our partnership ensures you receive the same high-quality training that's trusted
          by HR leaders globally.
        </p>
        <Reveal><Checks items={AIHR_BENEFITS} variant="lg" /></Reveal>
        <div className="btn-row">
          <a className="btn btn--cta" href={AIHR_PARTNER}>Explore programs <Arrow /></a>
        </div>
      </div>
      <Reveal className="partner">
        <a className="mbk" href={AIHR_PARTNER} aria-label="Open AIHR's exclusive offer for HRM Office members">
          <span className="mbk__lid">
            <span className="mbk__cam" />
            <span className="mbk__screen">
              <Image quality={90} src="/photos/aihr-offer.webp" alt="AIHR's exclusive offer page for HRM Office members" fill sizes="(max-width: 900px) 80vw, 480px" style={{ objectFit: "cover", objectPosition: "50% 0" }} />
            </span>
          </span>
          <span className="mbk__base"><i /></span>
        </a>
        <span className="partner__aihr" aria-hidden="true">
          <Image quality={90} src="/brand/aihr-logo.png" alt="" width={1200} height={348} sizes="200px" />
        </span>
        <div className="partner__woman" aria-hidden="true">
          <Image quality={90} src="/photos/cut-arms.webp" alt="" fill sizes="280px" style={{ objectFit: "contain", objectPosition: "50% 100%" }} />
        </div>
        {/* Card covers the photo's cut edge; figure as shown on AIHR's own page. */}
        <div className="partner__stat" aria-hidden="true"><b>85,000+</b><span>HR professionals trained by AIHR worldwide</span></div>
        <div className="medal" role="img" aria-label="Official AIHR Partner since 2025">
          <span className="medal__tails" aria-hidden="true"><i /><i /></span>
          <span className="medal__disc" aria-hidden="true">
            {/* Text set on the ring itself, so it reads as part of the badge. */}
            <svg viewBox="0 0 140 140">
              <defs>
                <path id="medal-top" d="M22 70a48 48 0 0 1 96 0" />
                <path id="medal-bottom" d="M16 70a54 54 0 0 0 108 0" />
              </defs>
              <text className="medal__arc"><textPath href="#medal-top" startOffset="50%" textAnchor="middle">OFFICIAL PARTNER</textPath></text>
              <text className="medal__arc medal__arc--sm"><textPath href="#medal-bottom" startOffset="50%" textAnchor="middle">SINCE 2025</textPath></text>
              <circle cx="27" cy="74" r="2.500" fill="#ffd77a" />
              <circle cx="113" cy="74" r="2.500" fill="#ffd77a" />
              <text className="medal__name" x="70" y="80" textAnchor="middle">AIHR</text>
            </svg>
          </span>
        </div>
      </Reveal>
    </div>
  </Waves>
);

export const HeroBg = ({ variant }) => (
  <div className={`hbg hbg--${variant}`} aria-hidden="true"><i /><i /><i /></div>
);

export const PageHero = ({ eyebrow, title, lede, sub, main = PHOTOS.team, visual, icons, map = true, children }) => (
  <section className="phero dark">
    <HeroBg variant="plain" />
    {map && <span className="phero__map" aria-hidden="true" />}
    <div className="wrap phero__in">
      <div className="phero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {sub && <p className="phero__sub">{sub}</p>}
        {children && <div className="btn-row">{children}</div>}
      </div>
      {visual || <div className="net" aria-hidden="true">
        <div className="net__main"><Crop photo={main} sizes="(max-width: 900px) 100vw, 45vw" priority /></div>
        {icons?.map(([icon, label], n) => (
          <span className={`gicon gicon--${n}`} key={icon} title={label}><Icon name={icon} size={26} /></span>
        ))}
      </div>}
    </div>
  </section>
);

export const Head = ({ eyebrow, title, lede, center }) => (
  <div className={center ? "section-head section-head--c" : "section-head"}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {lede && <p className="lede">{lede}</p>}
  </div>
);

export const Why = ({ title, items, lede, photos = [PHOTOS.lead, PHOTOS.tablet, PHOTOS.team], flip }) => {
  const collage = (
    <div className="collage" aria-hidden="true">
      <div className="collage__blob" />
      <div className="collage__main"><Crop photo={photos[0]} sizes="(max-width: 900px) 70vw, 30vw" /></div>
      <div className="collage__a"><Crop photo={photos[1]} sizes="200px" /></div>
      <div className="collage__b"><Crop photo={photos[2]} sizes="280px" /></div>
    </div>
  );
  return (
    <section className="section">
      <div className="wrap why">
        {!flip && collage}
        <div>
          <h2>{title}</h2>
          {lede && <p className="lede" style={{ marginBottom: 16 }}>{lede}</p>}
          <Checks items={items} variant="sq" />
        </div>
        {flip && collage}
      </div>
    </section>
  );
};

export const SplitCard = ({ title, action, href, question, photo = PHOTOS.tablet, children }) => (
  <section className="section">
    <div className="wrap">
      <div className="scard">
        <div className="scard__photo"><Crop photo={photo} sizes="(max-width: 900px) 100vw, 40vw" /></div>
        <div className="scard__copy">
          <h2>{title}</h2>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a className="btn btn--cta" href={href}>{action} <Arrow /></a>
          </div>
          <p className="scard__q">{question} Contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          {children}
        </div>
      </div>
    </div>
  </section>
);

// Closing CTA: a light card that sits across the page/footer seam, with live-looking HR moments around it.
// Result figures for one service, as published on hrmoffice.org.
export const Stats = ({ items }) => (
  <section className="sstats" aria-label="Results">
    <div className="wrap">
      <dl style={{ "--n": items.length }}>
        {items.map(([n, label]) => <div key={label}><dt>{n}</dt><dd>{label}</dd></div>)}
      </dl>
    </div>
  </section>
);

// Questions buyers ask before they get in touch. Native details (one open at a time), so it works without JavaScript.
export const Faq = ({ title = "Questions, answered", items, topic }) => (
  <section className="section faq2">
    <div className="wrap faq2__in">
      <div className="faq2__head">
        <p className="eyebrow">Before you ask</p>
        <h2>{title}</h2>
        <div className="faq2__help">
          <span className="faq2__faces" aria-hidden="true">
            {[PHOTOS.portraitDark, PHOTOS.portraitGlasses, PHOTOS.womanNavy].map((ph) => <span key={ph.src}><Crop photo={ph} sizes="48px" /></span>)}
          </span>
          <b>Still deciding?</b>
          <p>Talk to a person on our Lagos team. We usually reply the same working day.</p>
          <div className="faq2__actions">
            <Link className="btn btn--navy" href={topic ? `/contact/?topic=${encodeURIComponent(topic)}` : "/contact/"}>Book a consultation <Arrow /></Link>
            <a className="faq2__wa" href={WHATSAPP}>WhatsApp us <Arrow /></a>
          </div>
        </div>
      </div>
      <div className="faq2__list">
        {items.map(([q, a], i) => (
          <details key={q} name={`faq-${topic || "general"}`} open={i === 0}>
            <summary><span className="faq2__n">{String(i + 1).padStart(2, "0")}</span>{q}<i aria-hidden="true" /></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const Closing = ({ title, lede, action = "Book a consultation", topic }) => (
  <section className="close2">
    <div className="wrap">
      <div className="close2__card">
        <div className="close2__copy">
          <p className="eyebrow">Next step</p>
          <h2>{title}</h2>
          <p>{lede}</p>
          <div className="close2__actions">
            <Link className="btn btn--cta" href={topic ? `/contact/?topic=${encodeURIComponent(topic)}` : "/contact/"}>{action} <Arrow /></Link>
            <a className="close2__wa" href={WHATSAPP} target="_blank" rel="noopener"><Icon name="whatsapp" size={20} weight="fill" />Chat on WhatsApp</a>
          </div>
        </div>
        <div className="close2__side">
        <div className="close2__photos" aria-hidden="true">
          <span><Crop photo={PHOTOS.callDesk} sizes="260px" /></span>
          <span><Crop photo={PHOTOS.meetingWomen} sizes="260px" /></span>
          <i>Lagos office · Mon to Fri</i>
        </div>
        </div>
      </div>
    </div>
  </section>
);

// Full-width promo band: cut-out person over a glowing orb with orbit lines, copy and one action.
export const Banner = ({ img, w, h, title, text, cta, href, chips = [] }) => (
  <section className="pband">
    <div className="wrap pband__in">
      <div className="pband__art" aria-hidden="true">
        <span className="pband__orb" />
        <span className="pband__ring pband__ring--a" />
        <span className="pband__ring pband__ring--b" />
        <span className="pband__grid" />
        <i className="pband__spark pband__spark--a" /><i className="pband__spark pband__spark--b" /><i className="pband__spark pband__spark--c" />
        <Image quality={90} className="pband__person" src={img} alt="" width={w} height={h} sizes="(max-width: 900px) 70vw, 420px" />
        {chips.map(([b, small], i) => <span className={`pband__chip pband__chip--${i}`} key={b}><b>{b}</b><small>{small}</small></span>)}
      </div>
      <div className="pband__copy">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="pband__cta" href={href}>{cta} <Arrow /></Link>
      </div>
    </div>
  </section>
);

// A brochure or calendar offer, placed where a visitor needs something to take to their team.
export const Download = ({ item }) => {
  const d = DOWNLOADS[item];
  const ask = `${WHATSAPP}?text=${encodeURIComponent(`Hello HRM Office, please send me the ${d.title}.`)}`;
  return (
    <section className="section dlsec">
      <div className="wrap">
        <div className="dl">
          <div className="dl__doc" aria-hidden="true">
            <span className="dl__page dl__page--back" />
            <span className="dl__page"><small>HRM Office</small><b>{d.cover}</b><em>{d.year}</em><i /><i /><i /></span>
          </div>
          <div className="dl__copy">
            <p className="eyebrow">{d.eyebrow}</p>
            <h2>{d.title}</h2>
            <p>{d.text}</p>
          </div>
          <div className="dl__act">
            {d.file
              ? <a className="btn btn--navy" href={d.file} download><Icon name="download" size={20} /> Download PDF</a>
              : <a className="btn btn--navy" href={ask} target="_blank" rel="noopener"><Icon name="download" size={20} /> {d.cta}</a>}
            <small>{d.file ? "PDF, free, no sign-up" : "Free. We send the PDF to you on WhatsApp."}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

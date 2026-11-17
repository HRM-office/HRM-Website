"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Icon } from "@/components/icons";
import { AIHR_PARTNER, EMAIL, MAPS, PHONE, PHONE_HREF, PROGRAMS, WHATSAPP } from "@/lib/content";

const PROGRAM_ICONS = ["cap", "chart", "brain", "link", "book", "star"];

const NAV = [
  {
    href: "/training/", label: "Trainings & Certification", intro: "Globally recognized AIHR programs, through an official partner in Lagos.",
    items: [
      ...PROGRAMS.map((p, i) => [p.page || p.href, p.name, `${p.time} · ${p.level}`, PROGRAM_ICONS[i]]),
      ["/training/hr-mentorship/", "HR Mentorship", "Community · monthly sessions", "users"],
      ["/aihrguide/", "AI in HR library", "Free guides and templates", "download"],
    ],
    feature: { title: "Not sure which program fits?", text: "Answer one question and we'll narrow it down.", href: "/training/#programs", cta: "Find my program" },
  },
  // Plain links: these three go straight to their page, no menu.
  { href: "/hr-software/", label: "HR Software" },
  { href: "/recruitment/", label: "Recruitment" },
  { href: "/outsourcing/", label: "Outsourcing" },
  {
    href: "/about/", label: "About Us", intro: "A Lagos HR team and official AIHR Certified Partner.",
    items: [
      ["/about/", "About us", "Mission, vision and values", "buildings"],
      ["/about/#leadership", "Managing Partner", "Meet Fredrick Okeagu", "users"],
      ["/blog/", "Blog and insights", "Practical HR guidance from our team", "doc"],
      ["/contact/", "Contact", `${PHONE}`, "mail"],
    ],
    feature: { title: "Visit or call us", text: "2nd Floor, Tapa House, Surulere, Lagos.", href: "/contact/", cta: "Get in touch" },
  },
];

// Same-site paths use client routing; AIHR program links are external.
const NavLink = ({ href, ...rest }) =>
  href.startsWith("http") ? <a href={href} {...rest} /> : <Link href={href} {...rest} />;

const Logo = ({ light, alt = "", width = 170, priority = !light }) => (
  <Image quality={90}
    src={light ? "/brand/logo-white.webp" : "/brand/logo.webp"}
    alt={alt}
    width={2000}
    height={563}
    priority={priority}
    style={{ display: "block", width, height: "auto" }}
  />
);

export function Header() {
  const path = usePathname();
  // A click inside the mega menu must close it even while the pointer still hovers.
  const [closed, setClosed] = useState(false);
  const closeMenu = (e) => {
    if (!e.target.closest("a")) return;
    setClosed(true);
    document.activeElement?.blur();
  };
  // Mobile menu closes on Escape or a tap outside it, like any other popover.
  const menu = useRef(null);
  useEffect(() => {
    const out = (e) => { const d = menu.current; if (d?.open && !d.contains(e.target)) d.open = false; };
    const esc = (e) => { const d = menu.current; if (e.key === "Escape" && d?.open) { d.open = false; d.querySelector("summary").focus(); } };
    document.addEventListener("pointerdown", out);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", out); document.removeEventListener("keydown", esc); };
  }, []);
  // Glass bar once the page moves; solid at rest so it reads on light pages too.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <a className="announce" href={AIHR_PARTNER}>
        <span className="announce__badge"><Icon name="award" size={16} weight="fill" />Official AIHR Certified Partner since 2025</span> <b>Get certified →</b>
      </a>
      <header className="header" data-scrolled={scrolled}>
        <div className="header__bar">
          <Link className="logo" href="/" aria-label="HRM Office home"><Logo light priority width={146} /></Link>
          <nav
            className="nav"
            aria-label="Main"
            data-closed={closed}
            onClick={closeMenu}
            onMouseLeave={() => setClosed(false)}
            onKeyDown={(e) => e.key === "Escape" && document.activeElement?.blur()}
          >
            {NAV.map((group) => (
              <div className="nav__item" key={group.label}>
                <Link className="nav__top" href={group.href} aria-current={path === group.href ? "page" : undefined}>
                  {group.label}
                  {group.items && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.500L5 6.500l3-3" stroke="currentColor" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </Link>
                {group.items && <div className="drop">
                  <div className="wrap drop__in">
                  <div className="drop__intro">
                    <b>{group.label}</b>
                    <p>{group.intro}</p>
                    <Link href={group.href}>Explore {group.label.toLowerCase()} <span aria-hidden="true">→</span></Link>
                  </div>
                  <div className="drop__links">
                    {group.items.map(([href, label, note, icon], n) => (
                      <NavLink className="drop__link" key={label} href={href}>
                        <span className={`drop__ico drop__ico--${n % 6}`}><Icon name={icon} size={22} /></span>
                        <span><b>{label}</b><small>{note}</small></span>
                      </NavLink>
                    ))}
                  </div>
                  <NavLink className="drop__feature" href={group.feature.href}>
                    {group.href === "/training/" && (
                      <Image quality={90} className="drop__aihr" src="/brand/aihr-logo.png" alt="AIHR" width={1200} height={348} sizes="120px" />
                    )}
                    {group.href === "/training/" && (
                      <Image quality={90} className="drop__person" src="/photos/cut-arms.webp" alt="" width={856} height={1400} sizes="200px" />
                    )}
                    <b>{group.feature.title}</b>
                    <small>{group.feature.text}</small>
                    <span>{group.feature.cta} →</span>
                  </NavLink>
                  </div>
                </div>}
              </div>
            ))}
          </nav>
          <div className="header__cta">
            <Link className="nav__top header__careers" href="/jobs/" aria-current={path === "/jobs/" ? "page" : undefined}>Careers</Link>
            <Link className="header__pill" href="/contact/">Book a consultation</Link>
            <a className="header__pill header__pill--solid" href={AIHR_PARTNER}>Get certified</a>
          </div>
          {/* Keying by path closes the menu after navigation. */}
          <details className="menu" key={path} ref={menu}>
            <summary aria-label="Menu"><i /><i /></summary>
            <nav className="menu__panel" aria-label="Mobile">
              {NAV.map((group) => !group.items ? (
                <Link className="menu__group menu__careers" key={group.label} href={group.href}>{group.label}</Link>
              ) : (
                <details className="menu__group" key={group.label}>
                  <summary>{group.label}</summary>
                  {group.items.map(([href, label, , icon]) => (
                    <NavLink className="menu__sub" key={label} href={href}><Icon name={icon} size={18} />{label}</NavLink>
                  ))}
                  <Link className="menu__sub menu__sub--all" href={group.href}>View {group.label} →</Link>
                </details>
              ))}
              <Link className="menu__group menu__careers" href="/jobs/">Careers</Link>
              <Link className="btn btn--navy" href="/contact/">Book a consultation</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

const SOCIAL = [
  ["linkedin", "LinkedIn", "https://www.linkedin.com/company/hrmoffice"],
  ["instagram", "Instagram", "https://www.instagram.com/hrmofficeng/"],
  ["facebook", "Facebook", "https://www.facebook.com/hrmofficeng"],
];

// Footer framed by a hairline grid, like a blueprint: every column sits in its own cell.
export function Footer() {
  return (
    <footer className="ft">
      <div className="ft__band" aria-hidden="true" />
      <div className="wrap">
        <div className="ft__grid">
          <div className="ft__brand">
            <Logo light alt="HRM Office" width={150} />
            <p>HRM Office is a Lagos HR firm and official AIHR Certified Partner. We recruit, run HR, build HR software and train HR professionals across Africa.</p>
            <ul className="ft__social">
              {SOCIAL.map(([icon, label, href]) => (
                <li key={label}><a href={href} target="_blank" rel="noopener" aria-label={`HRM Office on ${label}`}><Icon name={icon} size={20} weight="fill" /></a></li>
              ))}
            </ul>
          </div>
          <nav aria-label="Services">
            <h2>Services</h2>
            <ul>
              <li><Link href="/recruitment/">Recruitment</Link></li>
              <li><Link href="/outsourcing/">HR outsourcing</Link></li>
              <li><Link href="/hr-software/">HR software</Link></li>
              <li><Link href="/business-functions/">Business functions</Link></li>
            </ul>
          </nav>
          <nav aria-label="Training">
            <h2>Training</h2>
            <ul>
              <li><Link href="/training/">All AIHR programs</Link></li>
              <li><Link href="/training/certificate-programs/">Certificate programs</Link></li>
              <li><Link href="/training/hr-mentorship/">HR mentorship</Link></li>
              <li><Link href="/aihrguide/">AI in HR library</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2>Company</h2>
            <ul>
              <li><Link href="/about/">About us</Link></li>
              <li><Link href="/blog/">Blog and insights</Link></li>
              <li><Link href="/jobs/">Careers</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </nav>
          <div className="ft__contact">
            <h2>Contact</h2>
            <ul>
              <li><a className="ft__mono" href={PHONE_HREF}>{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={MAPS}>Tapa House, 3/5 Immam Dauda St, Surulere, Lagos</a></li>
              <li><span>Mon to Fri, 9am to 5pm</span></li>
            </ul>
          </div>
        </div>
        <div className="ft__base">
          <span>© {new Date().getFullYear()} HRM Office Ltd. All rights reserved.</span>
          <span>AIHR is a trademark of the Academy to Innovate HR. HRM Office is an official AIHR Certified Partner.</span>
          <Link href="/privacy-policy/">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}

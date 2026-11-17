import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { Arrow, Faq } from "@/components/ui";
import { EMAIL, MAPS, PHONE, PHONE_HREF, WHATSAPP } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Talk to HRM Office in Surulere, Lagos. Call +234 704 307 1341, chat on WhatsApp or email hello@hrmoffice.org.",
};

// Fastest channel first. Each row is one tap on a phone.
const CHANNELS = [
  ["whatsapp", "WhatsApp", "The quickest way to reach us", WHATSAPP, "Chat now"],
  ["phone", "Call us", PHONE, PHONE_HREF, "Call"],
  ["mail", "Email", EMAIL, `mailto:${EMAIL}`, "Write"],
];

export default async function Page({ searchParams }) {
  const { topic } = await searchParams;
  return (
    <>
      <section className="ct">
        <div className="wrap ct__in">
          <div className="ct__intro">
            <p className="eyebrow">Contact us</p>
            <h1>Talk to us.</h1>
            <p className="lede">Tell us what you need and we&apos;ll reply the same working day.</p>
            <ul className="ct__channels">
              {CHANNELS.map(([icon, label, detail, href, cta]) => (
                <li key={label}>
                  <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                    <span className="ct__ico"><Icon name={icon} size={22} /></span>
                    <span className="ct__txt"><b>{label}</b><small>{detail}</small></span>
                    <span className="ct__go">{cta} <Arrow /></span>
                  </a>
                </li>
              ))}
            </ul>
            <dl className="ct__facts">
              <div><dt>Office</dt><dd><a href={MAPS}>2nd Floor, Tapa House, 3/5 Immam Dauda St, off Eric Moore Rd, Surulere, Lagos</a></dd></div>
              <div><dt>Hours</dt><dd>Monday to Friday, 9am to 5pm</dd></div>
            </dl>
          </div>
          <div className="ct__card">
            <h2>Send us a message</h2>
            <p>Pick a topic so it reaches the right person first time.</p>
            <ContactForm topic={topic} />
          </div>
        </div>
      </section>

      <section className="cmap">
        <div className="wrap">
          <div className="cmap__frame">
            <iframe
              title="Map showing the HRM Office location in Surulere, Lagos"
              src="https://www.google.com/maps?q=Tapa+House,+3%2F5+Imam+Dauda+St,+Surulere,+Lagos&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="cmap__card">
              <small>Visit the office</small>
              <b>2nd Floor, Tapa House</b>
              <span>3/5 Immam Dauda St, off Eric Moore Rd, Surulere, Lagos 101271</span>
              <a className="btn btn--navy" href={MAPS}>Get directions <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <Faq
        title="Before you get in touch"
        items={[
          ["How fast will you reply?", "WhatsApp is the quickest during working hours. Emails and form messages get a reply the same working day."],
          ["Can I visit without booking?", "You're welcome to, but book ahead if you want to meet a specific consultant so they're in the office."],
          ["Do you work with companies outside Lagos?", "Yes. We support teams across Nigeria and Africa, on-site where needed and remotely the rest of the time."],
          ["I'm applying for a job at HRM Office. Where do I send my CV?", "See open roles on our careers page. You can also send your CV through this form with the topic set to General."],
        ]}
      />
    </>
  );
}

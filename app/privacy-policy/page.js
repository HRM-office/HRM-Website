import Link from "next/link";
import { EMAIL } from "@/lib/content";

export const metadata = {
  title: "Privacy policy",
  description: "How HRM Office collects, uses and protects your information when you use our website and services.",
};

// Text as published on hrmoffice.org/privacy-policy.
const SECTIONS = [
  ["Who we are", [<>HRM Office (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides HR training, recruitment, outsourcing and software services. You can reach us through our <Link href="/contact/">contact page</Link> or at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>]],
  ["Information we collect", [["Contact details, such as name, email address and phone number.", "Messages and enquiry content you submit through our forms.", "Mentorship or training application details you submit, where applicable."]]],
  ["How we use your information", [["Respond to your enquiries and provide customer support.", "Deliver requested services: training, recruitment support, outsourcing and related offerings.", "Improve our website content, performance and user experience.", "Maintain security, prevent fraud and protect our users and operations.", "Comply with legal obligations and enforce our policies."]]],
  ["Cookies, analytics and advertising", ["We may use cookies or similar technologies to help the website function, understand how visitors use the site, and measure the effectiveness of marketing. This site includes the Meta (Facebook) Pixel for analytics and advertising measurement.", "You can control cookies through your browser settings. You may also manage ad preferences through relevant third-party platforms, for example Meta."]],
  ["How we share your information", ["We do not sell your personal information. We may share information in limited situations:", ["With service providers who help us operate the website and communicate with you, for example email delivery providers.", "With analytics and advertising partners to measure performance and improve marketing.", "When required by law, regulation or a valid legal process.", "To protect the rights, safety and security of HRM Office, our users and the public."]]],
  ["Data retention", ["We keep personal information only as long as necessary to fulfil the purposes described in this policy, including responding to enquiries, providing services, maintaining records and meeting legal obligations."]],
  ["Security", ["We use reasonable administrative, technical and organizational measures to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security."]],
  ["Your choices and rights", [["You can request access to, correction of or deletion of your personal information.", "You can opt out of marketing communications by following the instructions in our messages.", "You can control cookies through your browser settings."]]],
  ["Children's privacy", ["Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children."]],
  ["Changes to this policy", ["We may update this policy from time to time. When we do, we will post the updated version on this page. Your continued use of the website after changes are posted means you accept the updated policy."]],
];

export default function Page() {
  return (
    <article className="legal">
      <div className="wrap legal__wrap">
        <p className="eyebrow">Legal</p>
        <h1>Privacy policy</h1>
        <p className="legal__lede">How HRM Office collects, uses, shares and protects your information when you visit our website, contact us or use our services.</p>
        <div className="legal__grid">
          <nav className="legal__toc" aria-label="On this page">
            <b>On this page</b>
            <ol>{SECTIONS.map(([h], i) => <li key={h}><a href={`#s${i + 1}`}>{h}</a></li>)}</ol>
          </nav>
          <div className="prose">
            {SECTIONS.map(([h, parts], i) => (
              <section key={h} id={`s${i + 1}`}>
                <h2>{h}</h2>
                {parts.map((part, n) => Array.isArray(part) ? <ul key={n}>{part.map((li) => <li key={li}>{li}</li>)}</ul> : <p key={n}>{part}</p>)}
              </section>
            ))}
            <p className="legal__ask">Questions about your data? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

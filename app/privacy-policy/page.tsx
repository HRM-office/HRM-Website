import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - HRM Office",
  description:
    "Learn how HRM Office collects, uses, and protects your information when you use our website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Privacy Policy</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl text-pretty">
            This Privacy Policy explains how HRM Office ("we", "us", "our") collects, uses, shares, and protects your
            information when you visit our website, contact us, or use our services.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                HRM Office is an HR services company providing training, certification, recruitment, outsourcing, and
                HR software solutions. If you have questions about this policy or your data, contact us via our{" "}
                <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  contact page
                </Link>{" "}
                or email{" "}
                <a
                  href="mailto:hello@hrmoffice.org"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  hello@hrmoffice.org
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                    <li>Contact details (such as name, email address, phone number).</li>
                    <li>Messages and inquiry content you submit through our forms.</li>
                    <li>Mentorship/training application details you submit (where applicable).</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Deliver requested services (training, recruitment support, outsourcing, and related offerings).</li>
                <li>Improve our website content, performance, and user experience.</li>
                <li>Maintain security, prevent fraud, and protect our users and operations.</li>
                <li>Comply with legal obligations and enforce our policies.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cookies, Analytics, and Advertising</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We may use cookies or similar technologies to help the website function, understand how visitors use
                the site, and measure the effectiveness of marketing. This site includes Meta/Facebook Pixel for
                analytics and advertising measurement.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                You can control cookies through your browser settings. You may also manage ad preferences through
                relevant third-party platforms (for example, Meta).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How We Share Your Information</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We do not sell your personal information. We may share information in limited situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>
                  With service providers who help us operate the website and communicate with you (for example, email
                  delivery providers).
                </li>
                <li>With analytics and advertising partners to measure performance and improve marketing.</li>
                <li>When required by law, regulation, or a valid legal process.</li>
                <li>To protect the rights, safety, and security of HRM Office, our users, and the public.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We retain personal information only as long as necessary to fulfill the purposes described in this
                policy, including responding to inquiries, providing services, maintaining records, and meeting legal
                obligations.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Security</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We use reasonable administrative, technical, and organizational measures to protect personal
                information. No method of transmission or storage is completely secure, so we cannot guarantee absolute
                security.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Your Choices and Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>You can request access, correction, or deletion of your personal information.</li>
                <li>You can opt out of marketing communications by following instructions in our messages.</li>
                <li>You can control cookies through your browser settings.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                To make a request, contact{" "}
                <a
                  href="mailto:hello@hrmoffice.org"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  hello@hrmoffice.org
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Our website and services are not directed to children under 13, and we do not knowingly collect
                personal information from children.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We may update this Privacy Policy from time to time. When we make changes, we will post the updated
                version on this page. Your continued use of the website after changes are posted means you accept the
                updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

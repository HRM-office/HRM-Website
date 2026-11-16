import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { PromoBar } from "@/components/promo-bar";
import { Footer, Header } from "@/components/site";
import { EMAIL, WHATSAPP } from "@/lib/content";

const TITLE = "HRM Office | HR services, software and training in Nigeria";
const DESCRIPTION =
  "Recruitment, HR outsourcing, HR software and training for companies, their staff and HR professionals in Nigeria and across Africa.";

export const metadata = {
  metadataBase: new URL("https://www.hrmoffice.org"),
  title: { default: TITLE, template: "%s | HRM Office" },
  description: DESCRIPTION,
  openGraph: { type: "website", siteName: "HRM Office", locale: "en_NG", title: TITLE, description: DESCRIPTION, images: ["/photos/hrm-client-meeting.webp"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/photos/hrm-client-meeting.webp"] },
};

export const viewport = { themeColor: "#0d1433" };

// Tells search engines who and where the business is.
const ORG = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HRM Office",
  url: "https://www.hrmoffice.org",
  logo: "https://www.hrmoffice.org/brand/logo.webp",
  description: DESCRIPTION,
  telephone: "+2347043071341",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Tapa House, 3/5 Immam Dauda St, off Eric Moore Rd",
    addressLocality: "Surulere",
    addressRegion: "Lagos",
    postalCode: "101271",
    addressCountry: "NG",
  },
  areaServed: ["Nigeria", "Africa"],
  knowsAbout: ["Recruitment", "HR outsourcing", "HR software", "HR training and certification"],
};

export default function RootLayout({ children }) {
  return (
    // Browser extensions add attributes to these two tags, which is not a real mismatch.
    <html lang="en" className={GeistSans.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <noscript><style>{`.rv, .rv > * { opacity: 1 !important; transform: none !important; } .story { height: auto !important; } .story__pin { position: static !important; height: auto !important; } .story__stage { height: auto !important; display: grid; gap: 14px; } .story__card { position: static !important; opacity: 1 !important; transform: none !important; }`}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="wafab" href={WHATSAPP} target="_blank" rel="noopener" aria-label="Chat with HRM Office on WhatsApp">
          <svg className="wafab__icon" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2Zm0 1.800a8.200 8.200 0 1 1-4.200 15.250l-.300-.180-2.950.770.790-2.870-.200-.300A8.200 8.200 0 0 1 12 3.800Zm-3.500 4.100c-.200 0-.500.070-.750.350-.260.280-.980.960-.980 2.330s1 2.700 1.140 2.890c.140.190 1.960 3.100 4.830 4.230 2.390.940 2.870.750 3.390.700.520-.050 1.670-.680 1.900-1.340.240-.660.240-1.220.170-1.340-.070-.120-.260-.190-.540-.330-.280-.140-1.670-.820-1.930-.920-.260-.090-.450-.140-.640.140-.190.280-.730.920-.900 1.110-.160.190-.330.210-.610.070-.280-.140-1.190-.440-2.270-1.400-.840-.750-1.400-1.670-1.570-1.950-.160-.280-.020-.430.120-.570.130-.130.280-.330.420-.490.140-.170.190-.280.280-.470.090-.190.050-.350-.020-.490-.070-.140-.630-1.550-.880-2.120-.220-.500-.450-.510-.640-.520l-.540-.010Z" /></svg>
          <span className="wafab__tip"><b>Chat with us on WhatsApp</b><small>Our Lagos team replies the same working day</small></span>
        </a>
        <PromoBar />
      </body>
    </html>
  );
}

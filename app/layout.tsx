import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { GlobalLoadingSpinner } from "@/components/loading"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HRM Office - Professional HR Services & Training",
  description:
    "Leading HR services company providing training, certification, recruitment, and outsourcing solutions. AIHR certified programs and comprehensive HR software.",
  generator: "v0.app",
  keywords: "HR services, human resources, training, certification, recruitment, outsourcing, AIHR, HR software",
  authors: [{ name: "HRM Office" }],
  openGraph: {
    title: "HRM Office - Professional HR Services & Training",
    description:
      "Leading HR services company providing training, certification, recruitment, and outsourcing solutions.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '912814145047492');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=912814145047492&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<GlobalLoadingSpinner />}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Suspense>
      </body>
    </html>
  )
}

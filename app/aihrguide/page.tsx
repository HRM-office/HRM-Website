import type { Metadata } from "next"
import Script from 'next/script'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "HR Career Development Roadmap",
  description: "Standalone HR Career Development Roadmap with contact options and disclaimer",
}

export default function AIHRGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-[#222]">
      {/* Mini Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="HRMOFFICE"
              width={140}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Video Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#263c85] to-[#2abec5] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative rounded-[18px] shadow-2xl overflow-hidden border-2 border-white/20">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/hi1zFhbc4KI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="block w-full h-[320px] sm:h-[360px] lg:h-[400px] bg-black rounded-[18px]"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#263c85] to-[#2abec5] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative rounded-[18px] shadow-2xl overflow-hidden border-2 border-white/20">
                <video
                  src="/fredTalk.mp4"
                  controls
                  playsInline
                  className="block w-full h-[320px] sm:h-[360px] lg:h-[400px] bg-black"
                />
              </div>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <a href="#roadmap-form" aria-label="Go to form" className="animate-bounce bg-white rounded-full p-3 shadow-lg border border-gray-200">
              <svg className="w-6 h-6 text-[#3b4f9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="roadmap-form" className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto w-full max-w-[1250px]">
          {/* Single Card holding image + form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Book Image (left on large screens) */}
              <div className="flex items-center justify-center">
                <Image
                  src="/mockup.png"
                  alt="HR Roadmap Preview"
                  width={800}
                  height={600}
                  className="w-full h-auto max-w-[620px]"
                />
              </div>

              {/* Form with Sender script (right on large screens) */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-[#263c85]">Get Your HR Roadmap</h3>
                  <p className="text-gray-600 mt-2">Enter your details to access the complete guide</p>
                </div>

                <Script
                  id="sender-script"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `(function (s, e, n, d, er) {
                      s['Sender'] = er;
                      s[er] = s[er] || function () {
                        (s[er].q = s[er].q || []).push(arguments)
                      }, s[er].l = 1 * new Date();
                      var a = e.createElement(n),
                          m = e.getElementsByTagName(n)[0];
                      a.async = 1;
                      a.src = d;
                      m.parentNode.insertBefore(a, m)
                    })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
                    sender('596df286b97903')`,
                  }}
                />

                <div className="w-full">
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: '<div style="text-align: center; width: 100%" class="sender-form-field" data-sender-form-id="bkRlBX"></div>' 
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Roadmap Matters */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#263c85] mb-4">Why This Roadmap Matters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accelerate your HR career with our carefully crafted development pathway
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#263c85] to-[#3b4f9a] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#263c85] mb-3">Clear Milestones</h3>
            <p className="text-gray-600">Actionable HR capability milestones with defined progression paths</p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2abec5] to-[#4ccbd2] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#263c85] mb-3">Future-Ready Skills</h3>
            <p className="text-gray-600">Essential skills mapped out to keep you ahead in the evolving HR landscape</p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#263c85] to-[#2abec5] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#263c85] mb-3">Guided Growth</h3>
            <p className="text-gray-600">Structured pathway to accelerate your professional development and career growth</p>
          </div>
        </div>
      </section>

      {/* Need Support Section */}
      <section className="bg-gradient-to-br from-[#263c85] to-[#2abec5] py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
            <p className="text-white/80 text-lg mb-10">
              We're here to help you make the most of your HR growth journey
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto">
              <a 
                href="https://wa.me/+2349049391030" 
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#263c85] hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                </svg>
                WhatsApp
              </a>
              
              <a 
                href="mailto:aihr@hrmoffice.org" 
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#263c85] hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              
              <div 
                className="group flex flex-col items-center justify-center gap-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#263c85] hover:shadow-xl"
              >
                <a href="tel:+2348032613268" className="hover:underline">+234 803 261 3268</a>
                <a href="tel:+2349049391030" className="hover:underline">+234 904 939 1030</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">HRMOFFICE</div>
            <div className="text-sm text-gray-400 mb-6">© {new Date().getFullYear()} HRMOFFICE. All Rights Reserved.</div>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              HRMOFFICE is dedicated to advancing HR professionals through innovative career development solutions.
              This site is not affiliated with, endorsed by, or sponsored by Meta, Facebook, or Instagram.
              All trademarks and brand names are the property of their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
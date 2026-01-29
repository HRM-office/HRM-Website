"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react"
import { usePathname } from "next/navigation"

const footerSections = [
  {
    title: "Resources",
    links: [
      { name: "Job & Careers", href: "/jobs" },
      { name: "Blog & Insights", href: "/blog" },
      { name: "Certificate Programs", href: "/training/certificate-programs" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Recruitment", href: "/recruitment" },
      { name: "Outsourcing", href: "/outsourcing" },
      { name: "HR Software", href: "/hr-software" },
      { name: "Business Functions", href: "/business-functions" },
    ],
  },
  {
    title: "Contact",
    links: [],
  },
]

export function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/aihrguide')) {
    return null
  }
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-40 h-12 overflow-hidden relative">
                  <Image src="/hrm_white.png" alt="HRM Office Logo" fill className="object-contain w-full h-full" />
                </div>
              </div>
              <p className="text-white/80 mb-6 text-pretty">
                Leading HR services company providing comprehensive training, certification, recruitment, and
                outsourcing solutions to help organizations thrive in today's competitive landscape.
              </p>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                {section.title === "Contact" ? (
                  <div>
                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-accent" />
                        <span className="text-white/80">+234 704 307 1341
</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-accent" />
                        <span className="text-white/80">hello@hrmoffice.org</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span className="text-white/80">Lagos, Nigeria</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                      <Link
                        href="https://www.linkedin.com/company/hrmoffice"
                        className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/hrmofficeng/"
                        className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/hrmofficeng"
                        className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-accent transition-colors"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-white/20 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-white/70 text-sm">© {new Date().getFullYear()} HRM Office. All rights reserved.</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

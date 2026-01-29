"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Menu, X, ChevronDown, Award, Sparkles, BookOpen, Users, TrendingUp, BarChart3, Brain, Target,
  UserCog, DollarSign, UserCheck, Search, Cpu, Briefcase, GraduationCap, HeartHandshake, LineChart,
  Bot, UserPlus, ChartNetwork
} from "lucide-react"

const navigationItems = [
  {
    name: "Trainings & Certification",
    href: "/training",
    hasSubmenu: true,
    submenu: [
      { name: "Certificate Programs", href: "/training/certificate-programs" },
      { name: "People Analytics", href: "/training/people-analytics" },
      { name: "Digital HR", href: "/training/digital-hr" },
      { name: "Business Partnering", href: "/training/business-partering" },
      { name: "HR Mentorship", href: "/training/hr-mentorship", icon: BookOpen },
      { name: "Full Academy Access", href: "/training/full-academy" },
    ],
  },
  { name: "HR Software", href: "/hr-software" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "Outsourcing", href: "/outsourcing" },
  { name: "About Us", href: "/about" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState<string | null>(null)
  const submenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (pathname?.startsWith('/aihrguide')) {
    return null
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-primary backdrop-blur-lg border-b border-accent/30 shadow-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Banner */}
      <div className="hidden md:block w-full bg-gradient-to-r from-accent/20 to-accent/10 border-b border-accent/20 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white/90 text-sm bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+234 704 307 1341</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 text-sm bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-accent mr-2" />
              <span className="font-medium">Official AIHR Certified Partner</span>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>
            <div className="flex items-center space-x-2 text-white/90 text-sm bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">hello@hrmoffice.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center">
              <div className="w-40 h-12 overflow-hidden relative">
                <Image src="/hrm_white.png" alt="HRM Office Logo" fill className="object-contain w-full h-full" />
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group" ref={submenuRef}>
                {item.hasSubmenu ? (
                  <>
                    <div
                      className={`flex items-center space-x-1 text-white/90 hover:text-white transition-all duration-300 cursor-pointer py-2 px-4 rounded-xl hover:bg-white/5 ${
                        (item.submenu?.some((sub) => pathname === sub.href) || pathname === item.href) ? "bg-accent text-white" : ""
                      }`}
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                    >
                      <span className="font-medium text-sm">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.name ? "rotate-180" : ""}`} />
                    </div>

                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 w-[940px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 overflow-hidden"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="grid grid-cols-4">
                            {/* Column 1: Main Menu Heading */}
                            <div className="p-5 border-r border-accent/10">
                              <div className="text-accent font-bold text-sm mb-4 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Training & Certification
                              </div>
                            </div>
                            {/* Header spanning columns 2-4 */}
                            <div className="p-5 border-r border-accent/10 col-span-3 text-center">
                              <h2 className="font-bold text-primary text-xl flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5 text-accent" />
                                Certificate Programs
                              </h2>
                            </div>
                            {/* Column 1: Main Menu List */}
                            <div className="p-5 border-r border-accent/10 col-span-1">
                              <nav className="space-y-1">
                              {item.submenu?.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setActiveSubmenu(null)}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary font-semibold hover:bg-accent/10 transition ${
                                    pathname === sub.href ? 'bg-accent/20 text-accent' : ''
                                  }`}
                                >
                                  {sub.name.includes('Certificate') && <BookOpen className="w-4 h-4" />}
                                  {sub.name.includes('People Analytics') && <BarChart3 className="w-4 h-4" />}
                                  {sub.name.includes('Digital HR') && <TrendingUp className="w-4 h-4" />}
                                  {sub.name.includes('Business') && <Target className="w-4 h-4" />}
                                  {sub.name.includes('Mentorship') && <BookOpen className="w-4 h-4" />}
                                  {sub.name.includes('Full Academy') && <Sparkles className="w-4 h-4" />}
                                  {sub.name}
                                </Link>
                              ))}
                            </nav>
                          </div>

                          {/* Column 2: Certificate Programs */}
                          <div className="p-5 border-r border-accent/10 col-span-1">
                            <ul className="space-y-4 text-base">
                              <li className="flex items-center gap-2"><BarChart3 className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">People Analytics</Link></li>
                              <li className="flex items-center gap-2"><UserCog className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">HR Manager</Link></li>
                              <li className="flex items-center gap-2"><HeartHandshake className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Diversity & Inclusion</Link></li>
                              <li className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Organizational Development</Link></li>
                              <li className="flex items-center gap-2"><Search className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Sourcing & Recruitment</Link></li>
                            </ul>
                          </div>

                          {/* Column 3: Specializations */}
                          <div className="p-5 border-r border-accent/10 col-span-1">
                            <ul className="space-y-4 text-base">
                              <li className="flex items-center gap-2"><Users className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">HR Generalist</Link></li>
                              <li className="flex items-center gap-2"><Target className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">HR Business Partner 2.0</Link></li>
                              <li className="flex items-center gap-2"><LineChart className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">HR Metrics & Dashboarding</Link></li>
                              <li className="flex items-center gap-2"><UserPlus className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Strategic Talent Acquisition</Link></li>
                              <li className="flex items-center gap-2"><Bot className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Artificial Intelligence for HR</Link></li>
                            </ul>
                          </div>

                          {/* Column 4: Academy & New */}
                          <div className="p-5 border-r border-accent/10 col-span-1">
                            <ul className="space-y-4 text-base">
                              <li className="flex items-center gap-2"><Cpu className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Digital HR 2.0</Link></li>
                              <li className="flex items-center gap-2"><DollarSign className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Compensation & Benefits</Link></li>
                              <li className="flex items-center gap-2"><GraduationCap className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Learning & Development</Link></li>
                              <li className="flex items-center gap-2"><ChartNetwork className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">Talent Management & Succession Planning</Link></li>
                              <li className="flex items-center gap-2"><UserCheck className="w-3 h-3 text-primary/60" /><Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent">HR Coordinator</Link></li>
                            </ul>
                            <div className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
                              <Award className="w-3 h-3 text-accent" />
                              <span>Official AIHR Certified Partner</span>
                            </div>
                          </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    prefetch
                    onMouseEnter={() => setActiveSubmenu(null)}
                    className={`text-white/90 hover:text-white transition-all duration-300 font-medium text-sm py-2 px-4 rounded-xl hover:bg-white/5 ${
                      pathname === item.href ? "bg-accent text-white" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <Award className="w-4 h-4 mr-2" />
                <span>Get Certified</span>
                <svg className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(!isOpen)
                if (isOpen) setIsMobileSubmenuOpen(null)
              }}
              className="text-white hover:text-accent hover:bg-white/10 rounded-xl p-2 h-10 w-10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-4 space-y-1 bg-primary/98 backdrop-blur-lg rounded-b-xl border-t border-accent/20 mt-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.hasSubmenu ? (
                      <>
                        <button
                          className={`w-full text-left px-4 py-3 text-white hover:text-accent transition-colors flex items-center justify-between rounded-xl hover:bg-white/5 ${
                            (item.submenu?.some((sub) => pathname === sub.href) || pathname === item.href) ? "bg-accent text-white" : ""
                          }`}
                          onClick={() => setIsMobileSubmenuOpen(isMobileSubmenuOpen === item.name ? null : item.name)}
                        >
                          <span className="font-medium text-sm">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSubmenuOpen === item.name ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isMobileSubmenuOpen === item.name && (
                            <motion.div
                              className="pl-4 space-y-0.5 mt-0.5"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.submenu?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  prefetch
                                  className={`block px-3 py-2 text-white/80 hover:text-accent transition-colors rounded-md hover:bg-white/5 ${
                                    pathname === subItem.href ? "bg-accent text-white" : ""
                                  }`}
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsMobileSubmenuOpen(null)
                                  }}
                                >
                                  <div className="font-medium text-sm flex items-center">
                                    {subItem.name}
                                    <svg className="h-3 w-3 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="text-xs text-white/60">In collaboration with AIHR</div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        prefetch
                        className={`block px-4 py-3 text-white hover:text-accent transition-colors rounded-xl hover:bg-white/5 font-medium text-sm ${
                          pathname === item.href ? "bg-accent text-white" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-2">
                  <Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold rounded-xl py-3">
                      <Award className="w-4 h-4 mr-2" />
                      <span>Get Certified</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
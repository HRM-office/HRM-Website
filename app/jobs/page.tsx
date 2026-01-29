"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Mail, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Commented out job openings as requested
/*
const jobOpenings = [
  {
    title: "Senior HR Consultant",
    department: "Consulting",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦2,500,000 - ₦3,500,000",
    description: "Lead HR consulting projects and provide strategic guidance to our clients.",
    requirements: [
      "8+ years of HR consulting experience",
      "AIHR certification preferred",
      "Strong analytical and communication skills",
      "Experience with HR transformation projects",
    ],
    posted: "2 days ago",
  },
  // More job openings would go here
]
*/

const benefits = [
  {
    icon: Briefcase,
    title: "Competitive Compensation",
    description: "Industry-competitive salary and performance bonuses"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Mail,
    title: "Career Growth",
    description: "Professional development and advancement opportunities"
  },
  {
    icon: ArrowRight,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and generous leave"
  },
]

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-10 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Join Our Team</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Build Your Career with <span className="text-accent">HRM Office</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Join a dynamic team of HR professionals dedicated to transforming organizations and advancing careers.
                Discover exciting opportunities to grow with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="#openings" className="flex items-center">
                    View Open Positions <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5"
                >
                  <Link href="#benefits">Why Join Us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/jobs.webp"
                alt="HRM Office team collaboration"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Enhanced */}
      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary"></div>
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
              <div className="w-6 h-px bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join HRM Office?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a team that&apos;s shaping the future of HR services across Africa while advancing your own career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section - Updated */}
      <section id="openings" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary"></div>
              <span className="text-sm font-medium text-primary">Career Opportunities</span>
              <div className="w-6 h-px bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Current Job Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and find your perfect role.
            </p>
          </motion.div>

          {/* No Openings Message */}
          <motion.div
            className="text-center py-12 bg-background rounded-2xl shadow-sm mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No Current Openings</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We don&apos;t have any open positions at the moment. Please check back later or submit your resume for future opportunities.
            </p>
            <Button asChild variant="outline">
              <a href="#submit-resume">Submit Your Resume</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Resume Submission Section - Simplified */}
      <section id="submit-resume" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary"></div>
              <span className="text-sm font-medium text-primary">Submit Your Resume</span>
              <div className="w-6 h-px bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Interested in Working With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Send your resume to our email and we&apos;ll keep it on file for future opportunities.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Submit Your Resume</CardTitle>
                <CardDescription>
                  Email your resume directly to our HR team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <p className="text-lg font-medium text-foreground mb-2">Send your resume to:</p>
                    <p className="text-2xl font-bold text-primary break-all">
                      hrmofficeltd@gmail.com
                    </p>
                    <p className="text-muted-foreground mt-4">
                      We&apos;ll review your qualifications and contact you when suitable positions become available.
                    </p>
                  </div>
                  <Button asChild size="lg" className="w-full">
                    <a href="mailto:hrmofficeltd@gmail.com" className="flex items-center">
                      Send Email <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have Questions About Working With Us?</h2>
            <p className="text-xl text-white/90 mb-8">
              Feel free to reach out to our team for more information about career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/contact" className="flex items-center">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="#submit-resume">Submit Resume</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
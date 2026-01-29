"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle, ArrowDown, FileText, Megaphone, ClipboardCheck, BarChart3, Presentation } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const staffingServices = [
  {
    icon: FileText,
    title: "Position Descriptions",
    description: "Reviewing and developing comprehensive job descriptions that attract the right talent.",
    features: [
      "Role requirement analysis",
      "Competency framework development",
      "Clear responsibility outlining",
      "Skill requirement specification",
    ],
  },
  {
    icon: Megaphone,
    title: "Job Adverts & Tracking",
    description: "Posting job advertisements and implementing tracking systems for optimal candidate reach.",
    features: [
      "Multi-platform job posting",
      "Application tracking system",
      "Candidate response analytics",
      "Advertisement performance metrics",
    ],
  },
  {
    icon: Users,
    title: "Interviews & Shortlisting",
    description: "Conducting interviews and identifying the most qualified candidates for your organization.",
    features: [
      "Structured interview process",
      "Candidate assessment scoring",
      "Cultural fit evaluation",
      "Skills-based selection",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Employment Contracts",
    description: "Reviewing and developing legally compliant employment contracts tailored to your needs.",
    features: [
      "Legal compliance review",
      "Custom contract development",
      "Terms and conditions optimization",
      "Regulatory requirement adherence",
    ],
  },
  {
    icon: CheckCircle,
    title: "Onboarding Documentation",
    description: "Providing advice on employee background checks and commencement documentation.",
    features: [
      "Background verification",
      "Documentation checklist",
      "Record keeping systems",
      "Compliance assurance",
    ],
  },
  {
    icon: BarChart3,
    title: "Salary Benchmarking",
    description: "Comprehensive salary analysis to ensure competitive and fair compensation packages.",
    features: [
      "Market rate analysis",
      "Industry benchmarking",
      "Compensation structure development",
      "Benefits package optimization",
    ],
  },
  {
    icon: Presentation,
    title: "Orientation Programs",
    description: "Developing and delivering comprehensive orientation and induction programs.",
    features: [
      "Custom program development",
      "Workplace safety integration",
      "Cultural immersion design",
      "Role-specific training",
    ],
  },
]

const stats = [
  { number: "2000+", label: "Successful Placements" },
  { number: "500+", label: "Partner Companies" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "48hrs", label: "Average Response Time" },
]

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "Deep dive into your hiring needs, company culture, and role specifications.",
  },
  {
    step: "02",
    title: "Talent Sourcing",
    description: "Leverage our extensive network and advanced tools to identify top candidates.",
  },
  {
    step: "03",
    title: "Screening & Assessment",
    description: "Comprehensive evaluation including skills assessment and cultural fit analysis.",
  },
  {
    step: "04",
    title: "Interview Coordination",
    description: "Manage the entire interview process with seamless coordination and feedback.",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    description: "Support through offer negotiation and smooth onboarding transition.",
  },
]

export default function RecruitmentPage() {
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
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Professional Recruitment</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Find the <span className="text-accent">Right Talent</span> for Your Organization
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Expert recruitment services connecting exceptional talent with forward-thinking organizations. From
                executive search to bulk hiring, we deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <span className="flex items-center">
                    Start Hiring <ArrowDown className="w-5 h-5 ml-2" />
                  </span>
                </Button>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/hr-business-partner-presenting-to-executives.png.jpg"
                alt="Professional recruitment interview"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let&apos;s Take Care of Staffing in Your Workplace
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Engaging new staff and immersing them in your workplace is often time consuming and can be a legal minefield 
                when it comes to making sure you are compliant with all legislation.
              </p>
              <p>
                We can assist you in getting new employees within record time, get them up and running as soon as possible, 
                providing a quick return on investment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/20 text-accent hover:bg-accent/30">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 5-step process that ensures we find the perfect match for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Our Offers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Staffing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end staffing services designed to streamline your hiring process and ensure compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
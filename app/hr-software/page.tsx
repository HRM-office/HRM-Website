"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BarChart3,
  Shield,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
  Database,
  Settings,
  TrendingUp,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ContactPopup } from "@/components/contact-popup"

const softwareFeatures = [
  {
    icon: Users,
    title: "Employee Management",
    description: "Comprehensive employee database with advanced search and filtering capabilities.",
    features: ["Employee profiles", "Document management", "Organizational charts", "Role-based access"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Powerful analytics tools to track HR metrics and generate insightful reports.",
    features: ["Custom dashboards", "Real-time analytics", "Automated reports", "Data visualization"],
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description: "Automated time tracking and attendance management with mobile support.",
    features: ["Clock in/out", "Leave management", "Overtime tracking", "Mobile app"],
  },
  {
    icon: FileText,
    title: "Payroll Management",
    description: "Streamlined payroll processing with tax calculations and compliance features.",
    features: ["Automated payroll", "Tax compliance", "Direct deposits", "Pay slip generation"],
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Track employee performance with goal setting and review management.",
    features: ["Goal tracking", "Performance reviews", "360-degree feedback", "Career planning"],
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Ensure data security and regulatory compliance with advanced protection.",
    features: ["Data encryption", "Audit trails", "GDPR compliance", "Role permissions"],
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Increased Efficiency",
    description: "Automate routine HR tasks and focus on strategic initiatives",
  },
  {
    icon: Database,
    title: "Centralized Data",
    description: "All HR information in one secure, accessible platform",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Tailor the system to match your organization's needs",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution",
    description: "Grows with your business from startup to enterprise",
  },
]

export default function HRSoftwarePage() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

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
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Enterprise HR Solutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Streamline Your HR Operations with <span className="text-accent">Smart Software</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Comprehensive HR software solutions designed to automate processes, improve efficiency, and drive
                organizational success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <span className="flex items-center">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5 px-8 py-6 text-base font-medium rounded-xl"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Learn More
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
                src="/hr-software.webp"
                alt="HR Software Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose Our HR Software?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Transform your HR operations with our comprehensive software solution designed for modern businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our comprehensive range of HR services and solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Recruitment",
              "HR Information System",
              "Employee Self Service",
              "Performance Management",
              "Payroll Management",
              "Time & Attendance Management",
              "Leave Management",
              "Employee Benefits (Loans & Salary Advance)",
              "Employee Onboarding",
              "Training and Development",
              "Discipline Management",
              "Retirement & Exit Management",
              "Reports & Analytics"
            ].map((offer, index) => (
              <motion.div
                key={offer}
                className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{offer}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Comprehensive HR Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Everything you need to manage your human resources effectively in one integrated platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {item}
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Ready to Modernize Your HR Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Join hundreds of companies that have transformed their HR processes with our comprehensive software
              solution.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsContactPopupOpen(true)}
              >
                <span className="flex items-center">
                  Send a Message <ArrowRight className="w-6 h-6 ml-3" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </div>
  )
}

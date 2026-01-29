"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, ArrowRight, CheckCircle, BarChart3, Settings, FileText, Target } from "lucide-react"
import Link from "next/link"

const businessFunctions = [
  {
    icon: Users,
    title: "Human Capital Management",
    description: "Strategic workforce planning and talent optimization for sustainable business growth.",
    features: [
      "Workforce analytics and planning",
      "Talent acquisition strategies",
      "Performance management systems",
      "Employee engagement programs",
    ],
    benefits: ["Improved productivity", "Better talent retention", "Enhanced employee satisfaction"],
  },
  {
    icon: BarChart3,
    title: "HR Analytics & Insights",
    description: "Data-driven HR decision making with comprehensive analytics and reporting capabilities.",
    features: [
      "People analytics dashboards",
      "Predictive workforce modeling",
      "ROI measurement tools",
      "Custom reporting solutions",
    ],
    benefits: ["Informed decision making", "Cost optimization", "Strategic workforce planning"],
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    description: "Comprehensive compliance management to mitigate risks and ensure regulatory adherence.",
    features: [
      "Legal compliance audits",
      "Policy development and updates",
      "Risk assessment frameworks",
      "Regulatory reporting systems",
    ],
    benefits: ["Reduced legal risks", "Regulatory compliance", "Enhanced governance"],
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Streamline HR processes for maximum efficiency and improved employee experience.",
    features: ["Workflow automation", "Process reengineering", "Digital transformation", "Efficiency measurement"],
    benefits: ["Reduced operational costs", "Faster processing times", "Improved accuracy"],
  },
  {
    icon: Target,
    title: "Strategic HR Consulting",
    description: "Expert guidance on HR strategy alignment with business objectives and goals.",
    features: ["HR strategy development", "Organizational design", "Change management", "Leadership development"],
    benefits: ["Strategic alignment", "Organizational effectiveness", "Leadership capability"],
  },
  {
    icon: FileText,
    title: "Documentation & Policies",
    description: "Comprehensive documentation management and policy development services.",
    features: [
      "Employee handbook creation",
      "Policy documentation",
      "Procedure standardization",
      "Compliance documentation",
    ],
    benefits: ["Clear guidelines", "Consistent processes", "Legal protection"],
  },
]

const industries = [
  {
    name: "Technology & Software",
    description: "Specialized HR solutions for tech companies and startups",
    icon: "💻",
  },
  {
    name: "Manufacturing",
    description: "Industrial HR management and workforce optimization",
    icon: "🏭",
  },
  {
    name: "Healthcare",
    description: "Healthcare-specific compliance and staffing solutions",
    icon: "🏥",
  },
  {
    name: "Financial Services",
    description: "Regulatory compliance and risk management for finance",
    icon: "🏦",
  },
  {
    name: "Retail & E-commerce",
    description: "Scalable HR solutions for retail operations",
    icon: "🛍️",
  },
  {
    name: "Education",
    description: "Academic institution HR management and compliance",
    icon: "🎓",
  },
]

export default function BusinessFunctionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Business Functions</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Strategic HR <span className="text-accent">Business Functions</span> for Growth
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Comprehensive HR business functions designed to align with your organizational goals and drive sustainable
              growth across all business areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="#functions">Explore Functions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Functions */}
      <section id="functions" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Core HR Business Functions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive HR functions that integrate seamlessly with your business operations to drive efficiency and
              growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {businessFunctions.map((func, index) => (
              <motion.div
                key={func.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <func.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2">{func.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {func.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {func.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {func.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Tailored HR business functions designed for specific industry requirements and compliance needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <CardTitle className="text-lg text-foreground">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-pretty">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Ready to Optimize Your HR Business Functions?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Let our experts help you align your HR functions with your business strategy for maximum impact and
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

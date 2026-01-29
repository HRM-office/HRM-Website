"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Monitor, Users, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: GraduationCap,
    title: "HR Certification Programs",
    description: "Elevate your team's capabilities with our industry-recognized HR certification and training programs.",
    features: ["Professional Certifications", "Leadership Development", "Skill Enhancement", "Compliance Training"],
    href: "/training/certificate-programs",
    color: "bg-accent",
  },
  {
    icon: Monitor,
    title: "HR Software Solutions",
    description: "Implement cutting-edge HR systems that streamline processes and provide valuable workforce insights.",
    features: ["HRIS Implementation", "Automated Workflows", "Data Analytics", "Employee Self-Service"],
    href: "/hr-software",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Recruitment Services",
    description: "Attract, identify, and secure top talent that aligns with your organizational culture and goals.",
    features: ["Candidate Sourcing", "Employment Branding", "Selection Process", "Onboarding Integration"],
    href: "/recruitment",
    color: "bg-accent",
  },
  {
    icon: Building,
    title: "HR Outsourcing Support",
    description: "Comprehensive HR management solutions that allow you to focus on core business objectives.",
    features: ["Policy Development", "Compliance Management", "Employee Relations", "Performance Systems"],
    href: "/outsourcing",
    color: "bg-primary",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Strategic HR Solutions for Organizational Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our comprehensive suite of HR services is designed to optimize your human capital investment, ensure compliance, 
            and drive sustainable business growth through people-focused strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="block">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                    >
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  CheckCircle,
  ArrowDown,
  TrendingUp,
  UserCheck,
  Settings,
  Target,
  BarChart3,
  HeartHandshake,
  Clock,
  Sparkles,
  Lightbulb,
  Building,
  ShoppingBag,
  GraduationCap,
  Star,
  Flame
} from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce HR operational costs by up to 40% while maintaining quality",
    stat: "40% Savings"
  },
  {
    icon: TrendingUp,
    title: "Improved Efficiency",
    description: "Streamlined processes and expert management increase productivity",
    stat: "95% Efficiency"
  },
  {
    icon: UserCheck,
    title: "Expert Management",
    description: "Access to specialized HR professionals and industry expertise",
    stat: "50+ Experts"
  },
  {
    icon: Settings,
    title: "Scalable Solutions",
    description: "Flexible services that grow and adapt with your business needs",
    stat: "Flexible Plans"
  },
]

const industries = [
  { name: "Technology & IT", icon: Settings },
  { name: "Manufacturing", icon: BarChart3 },
  { name: "Healthcare", icon: HeartHandshake },
  { name: "Financial Services", icon: DollarSign },
  { name: "Retail & E-commerce", icon: ShoppingBag },
  { name: "Education", icon: GraduationCap },
  { name: "Construction", icon: Building },
  { name: "Hospitality", icon: Star },
  { name: "Oil and Gas", icon: Flame },
  { name: "Transport and Logistics", icon: Clock },
]

const processSteps = [
  {
    step: "01",
    title: "Needs Assessment",
    description: "We analyze your current HR processes and identify optimization opportunities",
    icon: Target
  },
  {
    step: "02",
    title: "Custom Solution",
    description: "We design a tailored HR outsourcing plan that fits your specific requirements",
    icon: Lightbulb
  },
  {
    step: "03",
    title: "Seamless Transition",
    description: "We implement the solution with minimal disruption to your operations",
    icon: Sparkles
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "We provide continuous HR management and regular performance reviews",
    icon: Clock
  },
]

const stats = [
  { number: "200+", label: "Businesses Served" },
  { number: "40%", label: "Average Cost Reduction" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "8+", label: "Years Experience" },
]

export default function OutsourcingPage() {
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
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">HR Outsourcing Solutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Focus on Your <span className="text-accent">Core Business</span> While We Handle HR
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Comprehensive HR outsourcing services that reduce costs, improve efficiency, and ensure compliance while
                you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <span className="flex items-center">
                    Start Outsourcing <ArrowDown className="w-5 h-5 ml-2" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5"
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
                src="/outsourcing_1.webp"
                alt="HR outsourcing team at work"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-muted/30 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
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

      {/* Benefits Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transform Your HR Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our HR outsourcing solutions deliver tangible benefits that directly impact your bottom line.
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
                    <CardDescription className="text-base mb-4">
                      {benefit.description}
                    </CardDescription>
                    <div className="text-lg font-bold text-accent">
                      {benefit.stat}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <Badge className="mb-4 bg-accent/20 text-accent hover:bg-accent/30">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our HR Outsourcing Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A seamless transition process designed to minimize disruption and maximize value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Industries Served</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expertise Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our HR outsourcing expertise spans across multiple industries with specialized knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-card rounded-xl p-5 text-center hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-foreground font-medium">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/outsourcing_2.webp"
                alt="HR team collaboration"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Our Value</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic HR Partnership
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don&apos;t just handle administrative tasks—we become your strategic HR partner, aligning human resources with your business objectives for sustainable growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Proactive compliance management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Customized HR solutions for your industry</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Scalable services that grow with your business</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Dedicated HR consultants for personalized support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

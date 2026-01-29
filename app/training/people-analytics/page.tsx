"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Star, TrendingUp, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navigationItems = [
  { title: "Certificate Programs", href: "/training/certificate-programs", icon: "Award" },
  { title: "People Analytics", href: "/training/people-analytics", icon: "BarChart3", current: true },
  { title: "Digital HR", href: "/training/digital-hr", icon: "Monitor" },
  { title: "Business Partnering", href: "/training/business-partering", icon: "Users" },
  { title: "HR Mentorship", href: "/training/hr-mentorship", icon: "BookOpen" },
  { title: "Full Academy", href: "/training/full-academy", icon: "GraduationCap" },
]

export default function PeopleAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link href="/training" className="hover:text-primary">Training</Link>
            <span>/</span>
            <span className="text-foreground font-medium">People Analytics</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href}>
                <Badge
                  variant={item.current ? "default" : "secondary"}
                  className={`cursor-pointer hover:bg-primary hover:text-white transition-colors ${
                    item.current ? "bg-primary text-white" : ""
                  }`}
                >
                  {item.title}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">People Analytics</h1>
                  <p className="text-accent font-semibold">In collaboration with AIHR</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your HR function with data-driven insights. Master the art and science of people analytics to
                make strategic decisions that drive business success.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">8,500+ Graduates</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="font-semibold">10 Weeks Program</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enroll Now Section */}
        <section className="py-12 bg-gradient-to-r from-accent/10 to-primary/10 border-y border-accent/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Master People Analytics?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Enroll in AIHR's comprehensive People Analytics program and transform your HR data skills today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  <a
                    href="https://www.aihr.com/partner/hrmoffice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span>🚀 Enroll Now at AIHR</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <a
                    href="https://www.aihr.com/partner/hrmoffice/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Analytics Program
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Official AIHR Partner Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Image
                  src="/hrm.png"
                  alt="HRM Office"
                  width={120}
                  height={60}
                  className="bg-white/20 rounded-lg p-2"
                />
                <div className="text-4xl font-bold">×</div>
                <Image
                  src="/aihr.png"
                  alt="AIHR Academy"
                  width={120}
                  height={60}
                  className="bg-white/20 rounded-lg p-2"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Official AIHR Partner</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our collaboration with AIHR ensures you receive the highest quality HR education with local support and guidance. Choose our platform and enjoy a minimum 10% discount on all programs, making world-class HR certification truly accessible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our AIHR Collaboration */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our AIHR Collaboration?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our collaboration with AIHR ensures you receive the highest quality HR education with local
                support and guidance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Data-Driven Insights",
                  description: "Master analytics to make strategic HR decisions",
                },
                {
                  icon: Users,
                  title: "Expert Instructors",
                  description: "Learn from industry leaders and HR practitioners",
                },
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description: "95% of graduates report career advancement within 12 months",
                },
                {
                  icon: CheckCircle,
                  title: "Local Support",
                  description: "Get personalized guidance from our certified HR consultants",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

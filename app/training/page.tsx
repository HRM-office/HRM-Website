"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  GraduationCap,
  BarChart3,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Monitor,
} from "lucide-react"

const trainingPrograms = [
  {
    icon: Award,
    title: "Certificate Programs",
    description: "Comprehensive HR certification programs recognized globally by industry leaders.",
    duration: "3-6 months",
    level: "All Levels",
    rating: 4.9,
    students: "2,500+",
    features: [
      "Industry-recognized certificates",
      "Expert-led training sessions",
      "Practical case studies",
      "Career advancement support",
    ],
    href: "https://www.aihr.com/human-resources-certifications/",
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "People Analytics",
    description: "Master data-driven HR decisions with advanced people analytics and workforce insights.",
    duration: "2-4 months",
    level: "Intermediate",
    rating: 4.8,
    students: "1,800+",
    features: [
      "Advanced analytics techniques",
      "HR metrics and KPIs",
      "Predictive modeling",
      "Data visualization tools",
    ],
    href: "https://www.aihr.com/hr-analytics/",
    color: "bg-accent",
  },
  {
    icon: Monitor,
    title: "Digital HR",
    description: "Master digital HR strategies, technology implementation, and employee experience in the digital age.",
    duration: "4-6 months",
    level: "Intermediate",
    rating: 4.8,
    students: "1,200+",
    features: [
      "Digital HR strategy",
      "HR technology implementation",
      "Employee digital experience",
      "Data privacy and compliance",
    ],
    href: "https://www.aihr.com/digital-hr/",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Business Partnering",
    description: "Develop strategic HR business partnering skills to drive organizational success.",
    duration: "4-6 months",
    level: "Advanced",
    rating: 4.9,
    students: "2,100+",
    features: ["Strategic HR alignment", "Stakeholder management", "Change management", "Business acumen development"],
    href: "https://www.aihr.com/business-partnering/",
    color: "bg-accent",
  },
  {
    icon: BookOpen,
    title: "HR Essentials Membership",
    description: "Access fundamental HR knowledge and best practices through our comprehensive membership.",
    duration: "Ongoing",
    level: "Beginner",
    rating: 4.7,
    students: "5,000+",
    features: ["Monthly webinars", "Resource library access", "Community networking", "Regular updates"],
    href: "https://www.aihr.com/hr-essentials/",
    color: "bg-accent",
  },
  {
    icon: GraduationCap,
    title: "Full Academy Access",
    description: "Complete access to all training programs, resources, and exclusive content.",
    duration: "12 months",
    level: "All Levels",
    rating: 5.0,
    students: "1,200+",
    features: ["All courses included", "Priority support", "Exclusive masterclasses", "Certification pathways"],
    href: "https://www.aihr.com/package-deals/",
    color: "bg-primary",
  },
]

const benefits = [
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Certificates recognized by leading organizations worldwide",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry veterans with decades of experience",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to materials",
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Advance your career with in-demand HR skills and certifications",
  },
]

export default function TrainingPage() {
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
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">AIHR Programs</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Advance Your HR Career with <span className="text-accent">World-Class Training</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Join thousands of HR professionals who have transformed their careers through our comprehensive training
              and certification programs in collaboration with AIHR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.aihr.com/human-resources-certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Explore All Programs <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="#programs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  View Programs
                </Button>
              </Link>
            </div>
          </motion.div>
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
              Why Choose Our Training Programs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our collaboration with AIHR ensures you receive the highest quality HR education and certification.
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

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Choose from our comprehensive range of HR training programs designed to advance your career.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{program.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {program.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                      <Badge variant="secondary">{program.level}</Badge>
                      <div>{program.students} students</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={program.href} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:text-white transition-colors"
                      >
                        Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Your HR Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Join thousands of HR professionals who have advanced their careers through our AIHR programs.
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.aihr.com/human-resources-certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Start Learning Today <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

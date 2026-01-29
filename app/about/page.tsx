"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Heart, CheckCircle, Briefcase, Lightbulb, Flame } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const values = [
  {
    icon: Briefcase,
    title: "Professionalism",
    description: "We are reliable in following global best practices and guided by high ethical standards and we promote same in our client organisations.",
  },
  // 
  {
    icon: CheckCircle,
    title: "Responsibility",
    description: "We show leadership through responsibility and accountability, handling every clients business with sense of ownership.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are innovative, creative and responsive in the way we think, learn and act. Hence no challenge too great for us to tackle and we are committed to doing the best it takes to achieve quality outcomes and inspire exceptional performance.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We share experiences, knowledge and ideas to foster greater communication, interaction and cohesiveness and the result of this collaboration is reflected in the quality of service we deliver.",
  },
  {
    icon: Heart,
    title: "Relationship",
    description: "With a clear understanding that people make organisation what they become, we are committed to creating and implementing solutions that helps attract, talents thereby creating positive, long lasting relationships",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We've got insight into the role innovation play in the achievement of organisational vision and mandate. To this end we foster a culture that encourages all staff and partners to think outside the box and maximize their potential.",
  },
  {
    icon: Flame,
    title: "Passion",
    description: "Driven by a desire to make a difference, and enhance workforce performance of different organisations, we firmly believe passion is at the heart of our business model as it is for every member of our team.",
  },
]

const team = [
  {
    name: "Fredrick Okeagu (Ph.D in view, MSc, ACIPM, HRPL, CMC, C-KPI)",
    role: "Managing Partner",
    image: "/fred.webp",
    description: "Experienced HR professional with extensive expertise in human resource management and strategic leadership.",
  },
]

// Optimized Image Component with Error Handling
function OptimizedAvatar({
  src,
  alt,
  name,
  className = "w-32 h-32 rounded-full mx-auto object-cover relative z-10 border-4 border-background shadow-lg"
}: {
  src: string
  alt: string
  name: string
  className?: string
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    // Show default avatar with initials
    const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
    return (
      <div className={`${className} bg-gradient-to-br from-primary to-accent flex items-center justify-center`}>
        <span className="text-white font-bold text-2xl">{initials}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={128}
      height={128}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}

export default function AboutPage() {
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
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">About HRM Office</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Transforming HR <span className="text-accent">Excellence</span> Together
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                We consistently deliver outstanding results in Recruitment and On-boarding, Human Capital Development, Performance Management, Payroll Administration, Organisational Development and Human Resource Outsourcing in a technology enabled environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Read our blog
                  </Button>
                </Link>
                <Link href="#mission">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5"
                  >
                    Our Mission
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
                src="/about_1.webp"
                alt="HRM Office team collaboration"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-7 bg-primary rounded-md mr-3"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance tracking-tight">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                  To consistently deliver outstanding results across the Human Resource Management value chain, using world class technologies that enable organisations run their HR departments more strategically, efficiently and at a reduced cost, with real time digital data reporting and virtual collaboration as extra value added. 
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-7 bg-primary rounded-md mr-3"></div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  To be the number one automated and integrated Human Resource Management services provider in Africa. 
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/aboutusTeam.webp"
                  alt="HRM Office team collaboration"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover aspect-video"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">Guiding Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              As a dedicated team of professionals, we pride ourselves on delivering superior service and live by an inherent set of values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <Card className="h-full group border-0 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-1 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground text-center">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-pretty text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
              Meet the Managing Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our team of dedicated HR professionals, delivering exceptional solutions and driving your success, is led by
            </p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full max-w-sm"
              >
                <Card className="h-full text-center border-0 bg-transparent shadow-none group">
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-5 w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                      <OptimizedAvatar
                        src={member.image}
                        alt={member.name}
                        name={member.name}
                      />
                    </div>
                    <CardTitle className="text-lg text-foreground tracking-tight">
                      {(() => {
                        const mainName = "Fredrick Okeagu";
                        const credentialsMatch = member.name.match(/\(([^)]+)\)/);
                        const credentials = credentialsMatch ? credentialsMatch[0] : "";
                        const rest = member.name.replace(mainName, "").replace(credentials, "").trim();
                        return <>
                          <span className="font-bold">{mainName} {credentials}</span>
                          <br />
                          <span className="font-normal">{rest}</span>
                        </>;
                      })()}
                    </CardTitle>
                    <CardDescription className="text-accent font-medium mt-1">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{member.description}</p>
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
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Building, Scale, MapPin, Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Let's Transform Your <span className="text-accent">HR Operations</span> Together
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Ready to take your HR to the next level? Contact our team of experts to discuss your needs and discover
                how we can help your organization thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact-form">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Send a Message <Send className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#location">
                  <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5">
                    Map Address <MapPin className="w-5 h-5 ml-2" />
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
                src="/business-partnering-strategic-meeting.png.jpg"
                alt="HR consultation and strategic meeting"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Send Message</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Get In Touch With Our Experts
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Have questions about our HR services? Need consultation for your business?
                Send us a message and we'll get back to you promptly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="What's this about? (Optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-vertical"
                      placeholder="Tell us about your needs, questions, or how we can help your business..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span className="font-medium">Failed to send message. Please try again or contact us directly.</span>
                    </motion.div>
                  )}

                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Location</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Find our office location on the map below. We're located in Surulere, Lagos, and ready to help you
                with your HR needs. Visit us or get directions to start your journey with our expert services.
              </p>

              {/* Address and Map Section */}
              <div className="mb-8">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Visit Our Office</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        2nd Floor, Tapa House, 3/5 Immam Dauda St, off Eric Moore Rd, Surulere, Lagos 101271, Lagos
                      </p>
                    </div>
                  </div>

                  {/* Embedded Map */}
                  <div className="mt-6">
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31714.431922451997!2d3.350495!3d6.483132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8db12acd2439%3A0x1903d46a38b303ab!2sHRMOffice!5e0!3m2!1sen!2sng!4v1757073516252!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="HRM Office Location"
                      ></iframe>
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href="https://maps.app.goo.gl/M9NWSRYbyVeHtsJE7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our HR Services</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Discover our comprehensive range of HR solutions designed to transform your business operations and drive success.
                  </p>

                  <div className="grid gap-6">
                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">Training & Certification Programs</h4>
                          <p className="text-muted-foreground">Comprehensive HR training programs, certifications, and professional development courses tailored to Nigerian businesses.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">Recruitment & Talent Acquisition</h4>
                          <p className="text-muted-foreground">End-to-end recruitment services, executive search, and talent acquisition strategies for growing organizations.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">HR Outsourcing Services</h4>
                          <p className="text-muted-foreground">Complete HR outsourcing solutions including payroll, benefits administration, and compliance management.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">Business Consulting & Strategy</h4>
                          <p className="text-muted-foreground">Strategic HR consulting, organizational development, and business transformation services for sustainable growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Star, TrendingUp, CheckCircle, Users, ExternalLink, X, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function HRMentorshipPage() {
  const pathname = usePathname()

  const navigationItems = [
    { title: "Certificate Programs", href: "/training/certificate-programs", icon: "Award" },
    { title: "People Analytics", href: "/training/people-analytics", icon: "BarChart3" },
    { title: "Digital HR", href: "/training/digital-hr", icon: "Monitor" },
    { title: "Business Partnering", href: "/training/business-partering", icon: "Users" },
    { title: "HR Mentorship", href: "/training/hr-mentorship", icon: "BookOpen" },
    { title: "Full Academy", href: "/training/full-academy", icon: "GraduationCap" },
  ].map(item => ({
    ...item,
    current: pathname === item.href
  }))
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  })
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  // Function to get page title based on current path
  const getPageTitle = (path: string) => {
    const pathMap: { [key: string]: string } = {
      '/training/certificate-programs': 'Certificate Programs',
      '/training/people-analytics': 'People Analytics',
      '/training/digital-hr': 'Digital HR',
      '/training/business-partering': 'Business Partnering',
      '/training/hr-mentorship': 'HR Mentorship',
      '/training/full-academy': 'Full Academy',
    }
    return pathMap[path] || 'Training'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/mentorship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setShowSuccessPopup(true)
        setFormData({ name: '', email: '', phone: '', message: '', agree: false })
      } else {
        alert('Failed to submit application. Please try again.')
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link href="/training" className="hover:text-primary">Training</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{getPageTitle(pathname)}</span>
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
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Join Our HR Mentorship Community</h1>
                  <p className="text-accent font-semibold">Connect, Learn, and Grow Together</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Become part of our exclusive HR Mentorship community where experienced professionals guide you through
                your HR career journey. From fundamentals to advanced strategies, get personalized mentorship and access
                to a supportive network of HR experts.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">500+ Active Members</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Monthly Sessions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-12 bg-gradient-to-r from-accent/10 to-primary/10 border-y border-accent/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Apply for HR Mentorship
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to join our HR Mentorship community and start your journey towards HR excellence.
              </p>
            </motion.div>
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number (Optional)</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tell us about yourself</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Briefly describe your HR experience and what you hope to achieve through mentorship"
                  rows={4}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agree}
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                  required
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  I agree to participate in the HR Mentorship program and understand the commitment required.
                </label>
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  Submit Application
                </Button>
              </div>
            </motion.form>
          </div>
        </section>


        {/* Why Join Our HR Mentorship Community */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join Our HR Mentorship Community?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our HR Mentorship program provides personalized guidance and a supportive community to help you excel in your HR career. Join us to connect with like-minded professionals and accelerate your professional growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Personalized Mentorship",
                  description: "One-on-one guidance from experienced HR professionals",
                },
                {
                  icon: Users,
                  title: "Active Community",
                  description: "Connect with 500+ HR enthusiasts and share experiences",
                },
                {
                  icon: TrendingUp,
                  title: "Career Advancement",
                  description: "Get insights on career paths and skill development",
                },
                {
                  icon: CheckCircle,
                  title: "Ongoing Learning",
                  description: "Access exclusive resources and monthly group sessions",
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

        {/* Success Popup Modal */}
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccessPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

              {/* Close button */}
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              <div className="relative p-8 text-center">
                {/* Success icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                {/* Success message */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Application Submitted! 🎉
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for applying to our HR Mentorship program. We've received your application and will contact you within 24-48 hours to discuss next steps.
                  </p>
                </motion.div>


                {/* Action buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    onClick={() => setShowSuccessPopup(false)}
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Continue Exploring
                  </Button>
                  <Button
                    onClick={() => {
                      setShowSuccessPopup(false)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-xl"
                  >
                    Back to Top
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

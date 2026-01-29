"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Simon Chukwunweluwa",
    role: "Managing Director",
    company: "Digital Energy",
    content:
      "Getting to outsource our workforce management to HRMOffice has helped us immensely as their team of HR Experts did streamline all our HR processes and made employee engagement seamless. Their automated HR Management has transformed our HR services and employee experience.",
    rating: 5,
  },
  {
    name: "Dr. Janefrancis Duru",
    role: "Group Head, Management Services",
    company: "ACI Holdings",
    content:
      "HRMOffice software and digital platform has become part of our company because the features are robust enough to handle our end-to-end HR functions, it's very user friendly and easy to navigate. Our employees love it much more than a few other HRMS we have tried in the past. Plus, their prompt support is a bonus. Highly recommended HRMS!",
    rating: 5,
  },
  {
    name: "Ogochukwu Odikpo",
    role: "CEO",
    company: "LifeBounty Pharmacy & Stores",
    content:
      "Seamless and hassle-free HR Management is the best way I can describe HRMOffice services. We chose their HRMOffice Outsourcing package and we have not had any need to worry about people management issues any longer. The time it takes to fill a vacant role is so short, yet you feel so satisfied with the quality of talent recruited. Thank you HRMOffice team for your top-notch outsourcing and recruitment services.",
    rating: 5,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why forward-thinking companies choose HRM Office for their HR transformation.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-medium mt-1">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={activeIndex}
            className="bg-white rounded-2xl p-8 shadow-lg border border-border/50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-12 h-12 text-primary" />
            </div>

            <div className="flex mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed relative z-10">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="mt-8 pt-6 border-t border-border/30">
              <div className="font-semibold text-foreground text-lg">{testimonials[activeIndex].name}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {testimonials[activeIndex].role}
              </div>
              <div className="text-sm text-primary font-medium mt-1">
                {testimonials[activeIndex].company}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
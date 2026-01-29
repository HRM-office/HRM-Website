"use client"

import { motion } from "framer-motion"
import { Users, Award, Building, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Building,
    number: "200+",
    label: "Companies Served",
    description: "Across Nigeria and West Africa",
  },
  {
    icon: Users,
    number: "2K+",
    label: "Professionals Trained",
    description: "Through our comprehensive programs",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Success Rate",
    description: "Client satisfaction and program completion",
  },
  {
    icon: Award,
    number: "5+",
    label: "Industry Awards",
    description: "Recognition for excellence in HR services",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our proven track record speaks for itself. We've helped thousands of professionals and hundreds of
            organizations achieve their HR excellence goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "./blog-data"

const categories = [
  "All",
  "Legal Compliance",
  "Recruitment",
  "Training",
  "Events",
  "Outsourcing",
  "Post-Covid HR",
]

const popularTags = [
  "Labour Laws", "Recruitment", "Training Programs", "HR Outsourcing", "Post-Covid HR",
  "Corporate Training", "HR Events", "Workplace Compliance", "Employee Development"
]

export default function BlogPage() {
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
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">HR Insights & Resources</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Stay Ahead with <span className="text-accent">HR Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Expert insights, industry trends, and practical advice to help you navigate the evolving world of human
                resources and organizational development.
              </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#guides">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                      Read Latest Posts <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="#tags">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-primary/5"
                    >
                      Popular Tags
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
                src="/blog.webp"
                alt="HR insights and digital transformation"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Badge
                    key={category}
                    variant={index === 0 ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${index === 0 ? "bg-primary" : "hover:bg-primary/10"}`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative w-full md:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Blog Posts Grid */}
      <section id="guides" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary"></div>
              <span className="text-sm font-medium text-primary">Latest Articles</span>
              <div className="w-6 h-px bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">HR Insights & Best Practices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential reading for HR professionals navigating modern workplace challenges and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => {
              const getBlogUrl = (slug: string) => {
                const urlMap: { [key: string]: string } = {
                  "nigerian-labour-laws": "/blog/nigerian-labour-laws",
                  "hiring-right-candidate-guide": "/blog/hiring-right-candidate-guide",
                  "2025-corporate-training-programs": "/blog/2025-corporate-training-programs",
                  "hrmoffice-2025-training-calendar": "/blog/hrmoffice-2025-training-calendar",
                  "hrmoffice-cipm-conference-2023": "/blog/hrmoffice-cipm-conference-2023",
                  "hr-outsourcing-competitive-tool": "/blog/hr-outsourcing-competitive-tool",
                  "hr-role-post-covid-era": "/blog/hr-role-post-covid-era"
                }
                return urlMap[slug] || `/blog/${slug}`
              }

              return (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={getBlogUrl(post.slug)} className="block h-full">
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-0 shadow-sm">
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={192}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <Badge className="absolute top-3 left-3 bg-accent text-white border-0">{post.category}</Badge>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-foreground mb-2 text-balance group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground text-pretty line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{post.readTime}</span>
                          <div className="text-primary group-hover:gap-1 transition-all flex items-center px-3 py-2 rounded-md text-sm font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section id="tags" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary"></div>
              <span className="text-sm font-medium text-primary">Explore Topics</span>
              <div className="w-6 h-px bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Tags</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover articles by topics that matter most to Nigerian HR professionals.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                #{tag}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>


    </div>
  )
}
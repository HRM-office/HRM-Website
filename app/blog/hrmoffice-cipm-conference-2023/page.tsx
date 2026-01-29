import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HRMOfficeCIPMConferencePage() {
  const post = {
    title: "HRMOffice Team Engages HR Professionals at the Lagos CIPM Conference 2023, Showcases RobustHR Software",
    author: "HRMOffice",
    date: "May 15, 2023",
    readTime: "6 min read",
    category: "Events",
    image: "/hr-software.webp",
    slug: "hrmoffice-team-engages-hr-professionals-lagos-cipm-conference-2023",
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: `
              <p>From 2nd to 5th May 2023, the HRMOffice team was present at the Lagos Chartered Institute of Personnel Management (CIPM) Conference which took place at the Muson Centre Onikan in Lagos. The conference was attended by a diverse group of HR professionals from different industries.</p>

              <p>At the conference, our team had the opportunity to engage with these professionals and discuss how our services could support and enhance their HR operations. One of the highlights of our discussions was the robust nature of our all-in-one HR software – RobustHR. We pride ourselves on the quality of our software which has been designed to cater to all aspects of HR management. From talent acquisition to performance management, RobustHR offers a comprehensive solution to all HR needs.</p>

              <p>We encourage interested parties to contact us for a demo of the software. Our team of experts will be available to walk you through the features and capabilities of RobustHR. We believe that experiencing the software first-hand is the best way to understand its potential in streamlining your HR operations.</p>

              <p>In addition to our software solution, we also offer a range of other services such as Recruitment, Workforce Outsourcing, and Training. We understand that different organizations have unique needs and we are committed to providing tailored solutions that meet those needs.</p>

              <p>At HRMOffice, we believe that HR is a critical component of any organization and that effective HR management is essential for business success. Our services are designed to empower HR professionals and organizations to achieve their goals and objectives.</p>

              <p>Thank you for considering HRMOffice for your HR needs. We look forward to the opportunity to work with you.</p>
            ` }} />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-end">
                <Button asChild>
                  <Link href="/blog" className="inline-flex items-center">
                    Read More Articles
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
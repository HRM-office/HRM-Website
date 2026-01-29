import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowToHireRightCandidatePage() {
  const post = {
    title: "HOW TO HIRE THE RIGHT CANDIDATE: A Step-by-Step Guide for HR Professionals/Employers",
    author: "HRMOffice",
    date: "Apr 16, 2025",
    readTime: "10 min read",
    category: "Recruitment",
    image: "/aboutusTeam.webp",
    slug: "how-to-hire-the-right-candidate-step-by-step-guide",
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
              <p>Dear Employer, Hiring the right candidate is a crucial task for any organization. The process not only determines the quality of the workforce, but also impacts the overall productivity, culture, and growth of the organization. With the right strategy, businesses can find employees who are not just skilled but also aligned with the company's values and goals.</p>

              <p>Here's how you can hire the right hands:</p>

              <h2>Define the Role Clearly.</h2>
              <p>Before beginning the hiring process, it is essential to have a clear understanding of the role you're looking to fill. This involves creating a detailed job description that outlines the responsibilities, necessary skills, and qualifications. A well-defined role helps attract candidates who are a good match and ensures that both the hiring team and applicant have a clear understanding of the expectations.</p>

              <h2>Develop a Robust Recruitment Strategy</h2>
              <p>A well-thought-out recruitment strategy is key to attracting the right talent. These strategies include:</p>
              <ul>
                <li>Employee referrals</li>
                <li>Recruitment Agencies</li>
                <li>Career Fairs and Events</li>
                <li>Employer Branding</li>
                <li>Internship Programs</li>
                <li>Competitive Compensation and Benefits</li>
              </ul>

              <h2>Screening and Shortlisting</h2>
              <p>Once applicants have been shortlisted, the next step is to screen them. This involves reviewing resumes and cover letters to identify those with minimum requirements. With RobustHR, this process can be seamless and time-saving.</p>

              <h2>Background and reference Checks.</h2>
              <p>Conduct thorough background and reference checks to verify the candidate's employment history, qualifications, and any other relevant information. This step helps ensure the authenticity of the candidate's credentials and provides additional insights into their past performance and behavior.</p>

              <p>Once the right candidates have been selected, extend an offer that includes details on salary, benefits, and other relevant terms. When an offer has been accepted by the candidate, it is now time for the onboarding process. This is where a well-structured onboarding programme is required to enhance employee engagement and retention.</p>

              <h2>Conducting Interviews.</h2>
              <p>Interviews are a critical part of the hiring process. They provide the opportunity to assess the candidate's skills, experience, and behaviour.</p>

              <p>In conclusion, hiring the right hands is a process that requires careful planning and execution. This is why it is key for employers to leave the tedious work of the recruitment process and hand it over to professionals or consult with a hiring firm.</p>

              <p>It is crucial that employers seek professional hands who have years of expertise in the hiring process to seek the best hands best suited for roles in their organisations. HRMOffice has mastered the right strategies for recruitment-from interviews to onboarding to training, etc.</p>
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
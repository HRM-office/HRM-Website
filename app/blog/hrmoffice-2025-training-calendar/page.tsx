import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HRMOfficeTrainingCalendarPage() {
  const post = {
    title: "HRMOffice 2025 Training Calendar: Empowering Workplaces Through Knowledge",
    author: "HRMOffice",
    date: "Feb 24, 2025",
    readTime: "7 min read",
    category: "Training",
    image: "/Hero_team.webp",
    slug: "hrmoffice-2025-training-calendar-empowering-workplaces-knowledge",
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
              <p>At HRMOffice, we believe that a well-trained workforce is the foundation of a thriving business. Organizations that invest in continuous learning see higher productivity, better employee engagement, and stronger leadership.</p>

              <p>That's why we're excited to introduce the HRMOffice 2025 Training Calendar, a carefully curated lineup of training programs designed to equip HR professionals, business leaders, and employees with essential skills for workplace success.</p>

              <h2>Why Training Matters More Than Ever</h2>
              <p>The modern workplace is evolving faster than ever. With shifting business landscapes, emerging technologies, and new workforce expectations, staying ahead requires continuous learning.</p>

              <p>Here's how HRMOffice training programs will benefit your team:</p>
              <ul>
                <li>Boosts employee performance and efficiency</li>
                <li>Strengthens leadership and management skills</li>
                <li>Enhances compliance knowledge and HR strategies</li>
                <li>Improves workplace culture and employee engagement</li>
                <li>Prepares businesses for future challenges and opportunities</li>
              </ul>

              <h2>What's Inside the HRMOffice 2025 Training Calendar?</h2>
              <p>Our training calendar is structured to meet the evolving needs of businesses while providing flexible learning options. It includes:</p>
              <ul>
                <li>A year-round schedule of expert-led training programs</li>
                <li>Courses covering HR management, leadership, compliance, performance management, and more</li>
                <li>Customizable training options virtual, in-house, and tailored to your organization's needs</li>
                <li>Industry-recognized trainers with years of experience in HR and business management</li>
              </ul>

              <h2>Key Training Categories</h2>
              <p>The HRMOffice 2025 Training Calendar includes courses on:</p>
              <ul>
                <li>Leadership & People Management—Building high-performing teams and inspiring leadership.</li>
                <li>HR & Compliance Training—Staying up to date with labour laws and HR best practices.</li>
                <li>Workplace Productivity & Performance—Helping employees maximise their efficiency.</li>
                <li>Employee Engagement & Retention Strategies—Creating a motivated and engaged workforce.</li>
                <li>Digital HR Transformation—Adopting technology for smarter HR operations.</li>
              </ul>
              <p>...and many more essential topics tailored to help businesses grow.</p>

              <h2>Who Should Attend?</h2>
              <p>Our training programs are designed for:</p>
              <ul>
                <li>HR professionals looking to stay ahead in the field</li>
                <li>Business owners and executives aiming for better workforce management</li>
                <li>Managers and team leaders wanting to improve leadership skills</li>
                <li>Employees seeking career growth and workplace success</li>
              </ul>
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
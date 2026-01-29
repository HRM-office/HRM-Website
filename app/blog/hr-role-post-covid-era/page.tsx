import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function UnderstandingRoleRelevanceHRPostCovidPage() {
  const post = {
    title: "Understanding the Role and Relevance of HR in Post-Covid era",
    author: "HRMOffice",
    date: "Aug 08, 2022",
    readTime: "11 min read",
    category: "Post-Covid HR",
    image: "/outsource2.webp",
    slug: "understanding-role-relevance-hr-post-covid-era",
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
              <p>The coronavirus pandemic has caused tremendous disruption in lives and in business, and human resources (HR) is key to supporting companies navigate through crises. HR has a role amidst the coronavirus- to drive business success and the work experience, through a forward-thinking HR strategy. The issues are complex, but here are some of the most important ways HR can lead, partner and drive for the best in their organizations in view of the above stated scenario.</p>

              <ul>
                <li><strong>Educating and equipping the workforce –</strong> Educating and equipping the workforce with the right information on COVID-19, safety tips, nutrition information and so on are crucial and jobs for HR Professionals. The HR needs to communicate measures taken by the company during this situation. Organizations need to focus on building Communication, Trust & Transparency related to the coronavirus pandemic to restore productivity and deliver on employee experience. They need engaged employees more than ever to get through this challenging period. The employees might struggle with feelings of uncertainty, isolation, not being in the know, and more. Thus, the role of HR as change agents becomes crucial in this scenario.</li>
                <li><strong>Leadership –</strong> Brilliant leadership will ensure success for organizations and there is no room for mediocre leadership during difficult times. HR has a key role to play in developing leaders, ensuring they are successful and holding them accountable.</li>
                <li><strong>Focus on Employee Wellness –</strong> After understanding the anxiety and stress of the COVID-19 pandemic, HR will need to put more focus on the mental health and overall wellness of the employees.</li>
                <li><strong>Employee upskilling –</strong> The pandemic has also ushered in an era of high dependence on Technology to do business. Hence, HR needs to implement Learning and Development initiatives that will prepare the workforce for the future of work. Not only does this help employees feel valued, but it also helps fill knowledge gaps within the company.</li>
                <li><strong>Framing New Policies –</strong> Considering the disruptions that COVID-19 brought, and its impact on business continuity, HR need to review policies on workplace flexibility, remote working & contractual staffing; review and clarify polices around pay and benefits as offices or factories get closed or impacted by COVID-19.</li>
                <li><strong>Counseling and collaboration –</strong> Good personalized communication is required from the HR team. Offering proper counseling sessions with employees to help them offload their isolation anxiety, vent their fears, or just de-stress.</li>
                <li><strong>Recognizing Employee efforts –</strong> As COVID-19 generates significant disruption, and undercuts employee engagement, HR managers need to redouble their recognition initiatives & efforts. Effective recognition motivates the recipient and the same time serves as a strong signal to other employees of behaviors they should emulate. Recognition can take many forms other than monetary rewards such as public acknowledgment, tokens of appreciation, development opportunities and low-cost perks.</li>
              </ul>

              <p>In summary, with the impact of the pandemic on the way we work, HR should shift towards a more human-focused approach.</p>
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
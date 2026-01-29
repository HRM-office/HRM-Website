import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NigerianLabourLawsPage() {
  const post = {
    title: "Nigerian Labour Laws Every HR Professional Must Know",
    author: "HRMOffice",
    date: "Jun 02, 2025",
    readTime: "8 min read",
    category: "Legal Compliance",
    image: "/about_1.webp",
    slug: "nigerian-labour-laws-every-hr-professional-must-know",
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
              <p>As an HR professional in Nigeria, having a solid grasp of labour laws is non-negotiable. HR professionals manage recruitment, termination, compensation, workplace disputes etc.   Understanding the legal framework governing employment helps you protect your organisation and its employees.</p>

              <p>Let's break down key Nigerian labour laws every HR professional must be familiar with in 2025.</p>

              <h2>1. The Labour Act (2004) – The Foundation</h2>
              <p>The Nigerian Labour Act is the cornerstone of labour regulation. While it mostly applies to low to mid-level employees (non-executives), it outlines the basic terms and conditions of employment, including:</p>
              <ul>
                <li>Minimum wage requirements</li>
                <li>Working hours (typically 40 hours/week)</li>
                <li>Overtime rules</li>
                <li>Sick leave and annual leave entitlements</li>
                <li>Termination procedures</li>
              </ul>
              <p><strong>Note:</strong> Always draft employment contracts in line with the Labour Act. Include clauses on leave, working hours, and termination to avoid disputes.</p>

              <h2>2. Employee Compensation Act (2010)</h2>
              <p>This Act mandates employers to provide compensation to employees who suffer injuries, diseases, or death in the course of employment.</p>
              <p><strong>Key Provisions:</strong></p>
              <ul>
                <li>Employers must register with the Nigeria Social Insurance Trust Fund (NSITF)</li>
                <li>Compensation covers medical treatment, disability, and dependents of deceased employees</li>
                <li>Applies to both private and public sector employees</li>
              </ul>
              <p><strong>Note:</strong> Ensure your organization is registered with the NSITF and that your employees know how to report workplace injuries.</p>

              <h2>3. National Minimum Wage Act</h2>
              <p>The current national minimum wage in Nigeria is ₦70,000/month, States or sectors' minimum wage may vary but no employer is permitted to pay below this threshold.</p>
              <p><strong>Note:</strong> Ensure all employees, including contract staff and interns, are paid at or above the minimum wage as non-compliance can lead to serious penalties.</p>

              <h2>4. Trade Unions and Industrial Disputes Act</h2>
              <p>This law governs the registration of trade unions and the resolution of industrial disputes.</p>
              <p><strong>HR Responsibilities:</strong></p>
              <ul>
                <li>Allow employees to freely join or form trade unions</li>
                <li>Engage in collective bargaining where necessary</li>
                <li>Follow due process before dismissing unionized staff</li>
                <li>Handle strikes in compliance with the law</li>
              </ul>
              <p><strong>Note:</strong> Foster open dialogue between management and union leaders to prevent escalations.</p>

              <h2>5. Pensions Reform Act (2014)</h2>
              <p>The Act makes pension contributions mandatory for employers with more than 3 employees.</p>
              <p><strong>Contribution Breakdown:</strong></p>
              <ul>
                <li>Employer: Minimum of 10% of monthly salary</li>
                <li>Employee: Minimum of 8%</li>
              </ul>
              <p><strong>Note:</strong> Remit pension contributions monthly to employees' Retirement Savings Accounts (RSA) via a licensed PFA (Pension Fund Administrator).</p>

              <h2>6. Personal Income Tax Act (PITA)</h2>
              <p>As an HR lead, you're responsible for deducting Pay-As-You-Earn (PAYE) tax from employee salaries and remitting to the appropriate state Inland Revenue Service.</p>

              <h2>7. The Factories Act</h2>
              <p>If your company operates in a manufacturing or production setting, this law applies.</p>
              <p>It covers:</p>
              <ul>
                <li>Workplace safety standards</li>
                <li>Provision of protective equipment</li>
                <li>Clean working environment</li>
                <li>Medical examinations</li>
              </ul>
              <p><strong>Note:</strong> Regularly conduct health and safety audits and ensure compliance with the Ministry of Labour guidelines.</p>

              <h2>8. Maternity and Paternity Leave Laws</h2>
              <p>Under the Labour Act:</p>
              <ul>
                <li>Female employees are entitled to at least 12 weeks of maternity leave (6 before and 6 after delivery), with at least 50% pay.</li>
                <li>Paternity leave is not yet officially recognized under federal law, but some states (e.g., Lagos, Enugu) grant up to 10 days of paternity leave.</li>
              </ul>
              <p><strong>Note:</strong> Offer competitive and inclusive leave policies to support employee wellbeing and attract top talent.</p>

              <h2>9. Termination and Redundancy Laws</h2>
              <p>Termination must follow due process, including:</p>
              <ul>
                <li>Issuing proper notice or payment in lieu</li>
                <li>Providing severance packages where applicable</li>
                <li>Avoiding unfair dismissal (e.g., based on gender, religion, or union membership)</li>
              </ul>
              <p><strong>Note:</strong> Keep documentation for every disciplinary action or performance issue to avoid legal pitfalls if termination arises.</p>

              <h2>Conclusion</h2>
              <p>Labour law compliance is a core HR responsibility. Staying updated helps you:</p>
              <ul>
                <li>Build trust with your workforce</li>
                <li>Avoid costly legal battles</li>
                <li>Protect your organization's reputation</li>
              </ul>
              <p>In a dynamic economy like Nigeria's, labour laws are evolving. Smart HR leaders regularly consult legal advisors, stay in tune with policy updates, and adapt company policies accordingly.</p>
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
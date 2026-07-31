'use client'

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import {
  ArrowLeft,
  ArrowDown,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Download,
  FileCheck2,
  FileText,
  LibraryBig,
  Search,
  Sparkles,
  Zap,
} from "lucide-react"

type ResourceType = "PDF" | "DOCX" | "PNG"

interface Resource {
  id: number
  title: string
  description: string
  file: string
  type: ResourceType
  minutes: number
  tags: string[]
  bestFor: string
  takeaway: string
  preview?: string
}

interface Collection {
  title: string
  eyebrow: string
  description: string
  outcome: string
  overview: string
  bestUse: string
  icon: typeof LibraryBig
  bullets: string[]
}

const resources: Resource[] = [
  {
    id: 2,
    title: "15 ChatGPT Prompts for HR Professionals",
    description: "Ready-to-use prompts for HR writing, planning, analysis, policy communication, and everyday work.",
    file: "/AI-HR/15_ChatGPT_Prompts_for_HR_Professionals.pdf",
    type: "PDF",
    minutes: 10,
    tags: ["ChatGPT", "prompts", "productivity"],
    bestFor: "HR teams that want quick AI wins without starting from a blank page.",
    takeaway: "Download first if your team wants useful outputs from AI today.",
    preview: "/AI-HR/ChatGPT_for_HR.png",
  },
  {
    id: 3,
    title: "AI Risk Assessment Process",
    description: "A practical process for identifying, rating, and managing AI risks inside HR workflows.",
    file: "/AI-HR/AI Risk Assessment Process.pdf",
    type: "PDF",
    minutes: 15,
    tags: ["risk", "governance", "compliance"],
    bestFor: "Leaders reviewing AI tools before rollout.",
    takeaway: "Use it before adopting new AI tools or exposing employee data to vendors.",
    preview: "/hr-business-partner-presenting-to-executives.png.jpg",
  },
  {
    id: 4,
    title: "AI Vendor Evaluation Checklist",
    description: "A checklist for comparing AI vendors, product claims, data practices, governance, and business fit.",
    file: "/AI-HR/AI Vendor Evaluation Checklist - RESOURCE LIBRARY.pdf",
    type: "PDF",
    minutes: 12,
    tags: ["vendors", "checklist", "procurement"],
    bestFor: "Teams choosing a new HR AI tool or platform.",
    takeaway: "Bring this into procurement conversations so the right questions get asked early.",
    preview: "/business-partnering-strategic-meeting.png.jpg",
  },
  {
    id: 5,
    title: "AI Glossary",
    description: "Plain-English definitions of essential AI terms every HR professional should understand.",
    file: "/AI-HR/AI_Glossary.pdf",
    type: "PDF",
    minutes: 20,
    tags: ["glossary", "foundation", "terms"],
    bestFor: "Building a shared AI vocabulary across the HR team.",
    takeaway: "Useful for onboarding non-technical HR stakeholders into AI conversations.",
    preview: "/AI-HR/HR_2026_Starter_Guide.png",
  },
  {
    id: 6,
    title: "AI in HR Toolbox",
    description: "A mapped toolbox of AI use cases, tool categories, and practical HR applications.",
    file: "/AI-HR/AI_in_HR_Toolbox.pdf",
    type: "PDF",
    minutes: 25,
    tags: ["toolbox", "use cases", "AI tools"],
    bestFor: "Planning where AI can support HR operations.",
    takeaway: "A strong planning resource for spotting opportunities across the employee lifecycle.",
    preview: "/AI-HR/Top_AI_Tools_for_HR_Professionals.png",
  },
  {
    id: 7,
    title: "AI Policy Template",
    description: "A customizable policy template to guide responsible AI use across the organization.",
    file: "/AI-HR/AI_Policy_Template.docx",
    type: "DOCX",
    minutes: 18,
    tags: ["policy", "template", "governance"],
    bestFor: "HR leaders formalizing AI usage rules.",
    takeaway: "Download when your organization needs a practical draft to adapt, approve, and launch.",
    preview: "/Hero_team.webp",
  },
  {
    id: 8,
    title: "AI Skills Framework",
    description: "A framework for mapping the AI skills HR teams need now and next.",
    file: "/AI-HR/AI_Skills_Framework.docx",
    type: "DOCX",
    minutes: 22,
    tags: ["skills", "framework", "capability"],
    bestFor: "Building an AI capability plan for HR teams.",
    takeaway: "Use it to define capability gaps, learning needs, and development priorities.",
    preview: "/AI-HR/HR_2026_Starter_Guide.png",
  },
  {
    id: 9,
    title: "AIHR AI in HR Cheat Sheet Collection",
    description: "A concise bundle of AI-in-HR references that can become a repeat-use team desk guide.",
    file: "/AI-HR/AIHR_AI_in_HR_Cheat_Sheet_Collection.pdf",
    type: "PDF",
    minutes: 15,
    tags: ["cheat sheet", "reference", "bundle"],
    bestFor: "Professionals who want a fast reference library.",
    takeaway: "A useful anchor download for teams that want multiple reference points in one place.",
    preview: "/AI-HR/ChatGPT_for_People_Analytics.png",
  },
  {
    id: 10,
    title: "AI Strategy Framework",
    description: "A strategy framework for aligning AI initiatives with people priorities and business outcomes.",
    file: "/AI-HR/AIHR_AI_Strategy_Framework.pdf",
    type: "PDF",
    minutes: 25,
    tags: ["strategy", "roadmap", "leadership"],
    bestFor: "Senior HR leaders creating an AI roadmap.",
    takeaway: "Use it to move AI from scattered experiments into a clearer HR transformation plan.",
    preview: "/business-partnering-strategic-meeting.png.jpg",
  },
  {
    id: 11,
    title: "AIHR Post-AI HRBP Model",
    description: "A model for how the HR Business Partner role evolves in an AI-enabled workplace.",
    file: "/AI-HR/AIHR_Post_AI_HRBP_Model.pdf",
    type: "PDF",
    minutes: 20,
    tags: ["HRBP", "operating model", "future of work"],
    bestFor: "Business partners repositioning their strategic value.",
    takeaway: "Great for HRBPs who want to sharpen advisory value as AI handles more routine work.",
    preview: "/hr-business-partner-presenting-to-executives.png.jpg",
  },
  {
    id: 12,
    title: "ChatGPT for HR",
    description: "A visual quick guide showing practical ways HR professionals can use ChatGPT.",
    file: "/AI-HR/ChatGPT_for_HR.png",
    type: "PNG",
    minutes: 8,
    tags: ["ChatGPT", "visual guide", "quick reference"],
    bestFor: "Sharing a simple AI explainer with your HR team.",
    takeaway: "A lightweight visual to help stakeholders see practical ChatGPT use cases quickly.",
    preview: "/AI-HR/ChatGPT_for_HR.png",
  },
  {
    id: 13,
    title: "ChatGPT for People Analytics",
    description: "A visual guide for applying ChatGPT to data questions, analysis, and insight generation.",
    file: "/AI-HR/ChatGPT_for_People_Analytics.png",
    type: "PNG",
    minutes: 16,
    tags: ["people analytics", "ChatGPT", "data"],
    bestFor: "HR analysts and HRBPs working with people data.",
    takeaway: "Use it to frame better questions before interpreting people analytics outputs.",
    preview: "/AI-HR/ChatGPT_for_People_Analytics.png",
  },
  {
    id: 14,
    title: "Prompt Design Cheat Sheet",
    description: "A concise prompt engineering reference for writing clearer instructions and better AI requests.",
    file: "/AI-HR/ChatGPT_Prompt_Design_Cheat_Sheet-1.pdf",
    type: "PDF",
    minutes: 10,
    tags: ["prompting", "cheat sheet", "ChatGPT"],
    bestFor: "Anyone who wants more reliable outputs from AI tools.",
    takeaway: "Pair this with the prompt guide when your team wants consistent AI output quality.",
    preview: "/AI-HR/ChatGPT_for_HR.png",
  },
  {
    id: 15,
    title: "Creating an AI Prompt Template Guide",
    description: "A guide for turning repeated HR tasks into reusable prompt templates.",
    file: "/AI-HR/Creating_an_AI_Prompt_Template_Guide-1.pdf",
    type: "PDF",
    minutes: 14,
    tags: ["prompt templates", "guide", "workflow"],
    bestFor: "Teams standardizing AI-assisted HR work.",
    takeaway: "Useful when HR work needs repeatable prompts rather than one-off experimentation.",
    preview: "/AI-HR/ChatGPT_for_HR.png",
  },
  {
    id: 16,
    title: "Decision Tree for AI Use in Talent Acquisition",
    description: "A decision tree for choosing where AI should and should not support recruitment work.",
    file: "/AI-HR/Decision_Tree_for_AI_Use_in_Talent_Acquisition.pdf",
    type: "PDF",
    minutes: 12,
    tags: ["talent acquisition", "recruitment", "decision tree"],
    bestFor: "Recruiters and TA leads reviewing AI-enabled hiring processes.",
    takeaway: "Use it to keep speed, fairness, candidate experience, and risk in balance.",
    preview: "/hr-experts-look-cvs-green-screen-tablet-vet-applicants.webp",
  },
  {
    id: 17,
    title: "Generative AI User Guidelines",
    description: "Guidelines for using generative AI responsibly, clearly, and consistently at work.",
    file: "/AI-HR/Generative_AI_User_Guidelines.docx",
    type: "DOCX",
    minutes: 20,
    tags: ["guidelines", "responsible AI", "GenAI"],
    bestFor: "Organizations launching AI usage standards.",
    takeaway: "Download when staff need plain rules for what to do, avoid, check, and disclose.",
    preview: "/Hero_team.webp",
  },
  {
    id: 18,
    title: "HR 2026 Starter Guide",
    description: "A forward-looking guide to HR priorities, AI readiness, and the future of the profession.",
    file: "/AI-HR/HR_2026_Starter_Guide.png",
    type: "PNG",
    minutes: 30,
    tags: ["2026", "future HR", "readiness"],
    bestFor: "Planning HR priorities and team development.",
    takeaway: "Strong for leadership discussions about capability, readiness, and the HR roadmap.",
    preview: "/AI-HR/HR_2026_Starter_Guide.png",
  },
  {
    id: 19,
    title: "Top AI Tools for HR Professionals",
    description: "A visual shortlist of AI tools HR professionals can explore for practical workflows.",
    file: "/AI-HR/Top_AI_Tools_for_HR_Professionals.png",
    type: "PNG",
    minutes: 18,
    tags: ["AI tools", "software", "shortlist"],
    bestFor: "Finding tools to test for HR productivity.",
    takeaway: "Use this to shortlist practical tools before moving into vendor evaluation.",
    preview: "/AI-HR/Top_AI_Tools_for_HR_Professionals.png",
  },
]

const aiHrResources = resources.filter((resource) => resource.file.startsWith("/AI-HR/"))
const previewResourceCount = 6

const getDownloadName = (resource: Resource) =>
  resource.file.startsWith("/") ? decodeURIComponent(resource.file.split("/").pop() || resource.title) : undefined

const typeIcons: Record<ResourceType, typeof FileText> = {
  PDF: FileText,
  DOCX: FileCheck2,
  PNG: Sparkles,
}

export default function AIHRGuidePage() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [query, setQuery] = useState("")
  const [showAllResources, setShowAllResources] = useState(false)

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return aiHrResources.filter((resource) => {
      const matchesQuery =
        !normalizedQuery ||
        resource.title.toLowerCase().includes(normalizedQuery) ||
        resource.description.toLowerCase().includes(normalizedQuery) ||
        resource.bestFor.toLowerCase().includes(normalizedQuery) ||
        resource.takeaway.toLowerCase().includes(normalizedQuery) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))

      return matchesQuery
    })
  }, [query])

  const openResource = (resource: Resource) => {
    setSelectedResource(resource)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const closeResource = () => {
    setSelectedResource(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const switchResource = (resource: Resource) => {
    setSelectedResource(resource)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (selectedResource) {
    return (
      <ResourceScreen
        resource={selectedResource}
        allResources={aiHrResources}
        onBack={closeResource}
        onOpenResource={switchResource}
      />
    )
  }

  return (
    <main className="min-h-screen bg-background text-slate-950">
      <HeroSection query={query} onQueryChange={setQuery} />

      <section id="resource-preview" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="max-w-3xl">
            <Badge icon={LibraryBig}>Resource Library</Badge>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Preview the highlights, then explore the full library.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Browse a curated set first, then reveal additional resources tailored to your HR needs.
            </p>
          </div>
        </div>

        <div>
          {visibleResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {(showAllResources ? visibleResources : visibleResources.slice(0, previewResourceCount)).map((resource) => (
                <ResourceCard key={resource.id} resource={resource} onOpen={() => openResource(resource)} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search className="mx-auto h-10 w-10 text-slate-400" />
              <h3 className="mt-4 text-xl font-black text-slate-900">No resources found</h3>
              <p className="mt-2 text-slate-500">Try a different search term.</p>
            </div>
          )}
          {!showAllResources && visibleResources.length > previewResourceCount && (
            <button
              onClick={() => setShowAllResources(true)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Show more resources
              <ArrowDown className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>

      <BookingBand />
    </main>
  )
}

function Badge({
  children,
  icon: Icon,
}: {
  children: ReactNode
  icon: typeof LibraryBig
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-black text-primary">
      <Icon className="h-4 w-4" />
      {children}
    </div>
  )
}

function BrandLogos({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="inline-flex min-h-11 items-center rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-white/60">
        <Image
          src="/aihr.png"
          alt="AIHR"
          width={126}
          height={42}
          className={compact ? "h-7 w-auto object-contain" : "h-8 w-auto object-contain"}
        />
      </span>
      <span className="inline-flex min-h-11 items-center rounded-lg bg-primary/80 px-3 py-2 ring-1 ring-white/20">
        <Image
          src="/hrm_white.png"
          alt="HRM Office"
          width={126}
          height={42}
          className={compact ? "h-7 w-auto object-contain" : "h-8 w-auto object-contain"}
        />
      </span>
    </div>
  )
}

function HeroSection({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (value: string) => void
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/business-partnering-strategic-meeting.png.jpg"
          alt="HR professionals reviewing strategy"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container relative mx-auto grid min-h-[680px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="flex max-w-3xl flex-col justify-center">
          <div className="mb-6">
            <BrandLogos />
          </div>

          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-white/25 bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
            <LibraryBig className="h-4 w-4 text-accent" />
            AIHR x HRM Office Knowledge Base
          </div>

          <h1 className="text-5xl font-black leading-none md:text-7xl">HRMOffice AI in HR Hub</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Explore curated HR resources, guides, templates, and toolkits. Browse by topic, preview materials, and download
            exactly what your team needs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#resource-preview"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-black text-white shadow-xl transition hover:bg-accent/90"
            >
              Explore Resources
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#resource-preview"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              Preview Resources
            </a>
          </div>

          <div className="mt-10 max-w-2xl rounded-full border border-white/20 bg-white p-2 shadow-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search prompts, policy, analytics, vendors..."
                className="h-12 w-full rounded-full border-0 bg-slate-50 pl-12 pr-4 text-base font-semibold text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:bg-white focus:shadow-inner"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full overflow-hidden rounded-lg border border-white/20 bg-white text-slate-950 shadow-2xl">
            <div className="relative min-h-[210px] bg-primary">
              <Image src="/AI-HR/HR_2026_Starter_Guide.png" alt="HR 2026 Starter Guide" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-sm font-black uppercase text-accent">Featured library experience</div>
                <div className="mt-1 text-3xl font-black text-white">Find. Preview. Download. Apply.</div>
                <div className="mt-3 inline-flex rounded-lg bg-white/90 px-3 py-1 text-sm font-black text-primary">
                  {aiHrResources.length} AI-HR resources
                </div>
              </div>
            </div>
            <div className="grid gap-0 divide-y divide-slate-200">
              {[
                ["Choose a section", "Start with the HR challenge closest to your team."],
                ["Review the resources", "See the best fit, takeaway, and download type."],
                ["Book support", "Get help adapting the materials to your organization."],
              ].map(([title, copy], index) => (
                <div key={title} className="flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-black text-slate-950">{title}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResourceCard({
  resource,
  onOpen,
}: {
  resource: Resource
  onOpen: () => void
}) {
  const Icon = typeIcons[resource.type]

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex min-h-[380px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden bg-slate-100">
        {resource.preview ? (
          <Image src={resource.preview} alt={resource.title} fill className="object-cover transition group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center bg-accent/10">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-slate-200 bg-white text-primary shadow-sm">
              <Icon className="h-10 w-10" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
        <div className="absolute bottom-4 right-4">
          <span className="rounded-lg bg-white/92 px-3 py-1 text-xs font-black text-slate-800">
            {resource.minutes} min
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-black leading-tight text-slate-950 transition group-hover:text-primary">
          {resource.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{resource.description}</p>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">
          {resource.takeaway}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-sm font-black text-primary">View resource</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-primary transition group-hover:bg-accent group-hover:text-white">
            <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </button>
  )
}

function ResourceMiniCard({
  resource,
  onOpen,
}: {
  resource: Resource
  onOpen: () => void
}) {
  const Icon = typeIcons[resource.type]

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-black uppercase text-slate-400">{resource.type} / {resource.minutes} min</span>
        <span className="mt-1 block text-sm font-black leading-5 text-slate-950 group-hover:text-primary">
          {resource.title}
        </span>
        <span className="mt-2 line-clamp-2 block text-xs leading-5 text-slate-600">{resource.takeaway}</span>
      </span>
    </button>
  )
}

function CollectionScreen({
  collection,
  resources,
  onBack,
  onOpenResource,
}: {
  collection: Collection
  resources: Resource[]
  onBack: () => void
  onOpenResource: (resource: Resource) => void
}) {
  const Icon = collection.icon
  const primaryDownload = resources.find((resource) => resource.type !== "Video") || resources[0]

  return (
    <main className="min-h-screen bg-background text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image src="/Hero_team.webp" alt="HRM Office advisory team" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resource Library
          </button>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="mb-6">
                <BrandLogos compact />
              </div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-black uppercase">
                <Icon className="h-4 w-4 text-accent" />
                {collection.eyebrow}
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-none md:text-7xl">{collection.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/86">{collection.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {collection.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-lg border border-white/20 bg-white/10 p-4 font-bold backdrop-blur">
                    <CheckCircle2 className="mb-3 h-5 w-5 text-accent" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white p-6 text-slate-950 shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl font-black">What this page helps you do</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{collection.outcome}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-100 p-4">
                  <div className="text-sm font-black text-slate-500">Resources</div>
                  <div className="mt-2 text-3xl font-black text-primary">{resources.length}</div>
                </div>
                <div className="rounded-lg bg-accent/10 p-4">
                  <div className="text-sm font-black text-primary">Next step</div>
                  <div className="mt-2 text-lg font-black text-slate-950">Download</div>
                </div>
              </div>
              {primaryDownload && (
                <a
                  href={primaryDownload.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={getDownloadName(primaryDownload)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-4 text-sm font-black text-white transition hover:bg-accent/90"
                >
                  <Download className="h-4 w-4" />
                  Download Starter Resource
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <div className="mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="p-6 md:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-black text-primary">
                <BookOpen className="h-4 w-4" />
                Section Brief
              </div>
              <h2 className="text-3xl font-black leading-tight text-slate-950">Before you download</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{collection.overview}</p>
              <div className="mt-5 rounded-lg bg-accent/10 p-5">
                <div className="text-sm font-black uppercase text-primary">Best way to use this section</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{collection.bestUse}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-black">Recommended resources</h2>
            <p className="mt-2 text-slate-600">
              Start with the file that matches your current need. You can open any item for more context before
              downloading.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} onOpen={() => onOpenResource(resource)} />
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <BookingPanel />
        </aside>
      </section>
    </main>
  )
}

function BookingPanel() {
  return (
    <div className="overflow-hidden rounded-lg bg-slate-950 text-white shadow-xl">
      <div className="relative min-h-[190px]">
        <Image
          src="/hr-business-partner-presenting-to-executives.png.jpg"
          alt="HR advisory session"
          fill
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute bottom-5 left-5 right-5">
          <div className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1 text-xs font-black">
            <CalendarDays className="h-4 w-4" />
            Booking support
          </div>
          <h3 className="mt-3 text-2xl font-black leading-tight">Turn downloads into action.</h3>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-sm leading-6 text-white/75">
          Book a guidance session with HRM Office to choose the right resources, adapt templates, and connect your
          downloads to AIHR learning or HR transformation work.
        </p>
        {["Resource walkthrough", "Team implementation advice", "Certification guidance"].map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-sm font-bold">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            {item}
          </div>
        ))}
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-black text-primary transition hover:bg-accent hover:text-white"
        >
          Book Advisory Session
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function ResourceScreen({
  resource,
  allResources,
  onBack,
  onOpenResource,
}: {
  resource: Resource
  allResources: Resource[]
  onBack: () => void
  onOpenResource: (resource: Resource) => void
}) {
  const Icon = typeIcons[resource.type]
  const otherResources = allResources.filter((item) => item.id !== resource.id).slice(0, 6)

  return (
    <main className="min-h-screen bg-background text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image src="/Hero_team.webp" alt="HRM Office advisory team" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resource Library
          </button>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="mb-6">
                <BrandLogos compact />
              </div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-black uppercase">
                <Icon className="h-4 w-4 text-accent" />
                {resource.type} Resource
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-none md:text-7xl">{resource.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/86">{resource.description}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
                Use this resource with a real HR decision in mind. It becomes more valuable when you connect the
                guidance to a policy conversation, team capability gap, vendor review, people analytics question, or AI
                workflow your organization is already trying to improve.
              </p>
              <div className="mt-4 text-sm font-bold text-white/70">{resource.minutes} min read / use</div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white p-6 text-slate-950 shadow-2xl">
              {resource.preview && (
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image src={resource.preview} alt={resource.title} fill className="object-cover" />
                </div>
              )}
              <h2 className="mt-5 text-2xl font-black">Why this resource helps</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
              <div className="mt-4 rounded-lg bg-accent/10 p-4">
                <div className="text-sm font-black uppercase text-primary">Best for</div>
                <p className="mt-1 text-sm leading-6 text-slate-700">{resource.bestFor}</p>
              </div>
              <div className="mt-3 rounded-lg bg-slate-50 p-4">
                <div className="text-sm font-black uppercase text-slate-500">Key takeaway</div>
                <p className="mt-1 text-sm leading-6 text-slate-700">{resource.takeaway}</p>
              </div>
              <a
                href={resource.file}
                target="_blank"
                rel="noopener noreferrer"
                download={getDownloadName(resource)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-4 text-sm font-black text-white transition hover:bg-accent/90"
              >
                <Download className="h-4 w-4" />
                Download Resource
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-black uppercase text-primary">Resource reader</div>
              <h2 className="mt-1 text-2xl font-black leading-tight text-slate-950">{resource.title}</h2>
            </div>
            <a
              href={resource.file}
              target="_blank"
              rel="noopener noreferrer"
              download={getDownloadName(resource)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Open or Download
            </a>
          </div>

          {resource.type === "PDF" ? (
            <iframe
              src={resource.file}
              title={resource.title}
              className="h-[72vh] min-h-[520px] w-full bg-slate-100"
            />
          ) : resource.type === "PNG" ? (
            <div className="bg-slate-100 p-4">
              <div className="relative mx-auto min-h-[72vh] max-w-5xl overflow-hidden rounded-lg bg-white shadow-inner">
                <Image src={resource.file} alt={resource.title} fill className="object-contain" />
              </div>
            </div>
          ) : (
            <div className="grid min-h-[420px] place-items-center bg-slate-50 p-8 text-center">
              <div className="max-w-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-black">Download to read this document</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  This file is an editable {resource.type} template, so it is best opened in Word or your document editor.
                </p>
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-black uppercase text-primary">Quick context</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
            <div className="mt-4 rounded-lg bg-accent/10 p-4">
              <div className="text-sm font-black text-primary">Best for</div>
              <p className="mt-1 text-sm leading-6 text-slate-700">{resource.bestFor}</p>
            </div>
            <div className="mt-3 rounded-lg bg-slate-50 p-4">
              <div className="text-sm font-black text-slate-500">Key takeaway</div>
              <p className="mt-1 text-sm leading-6 text-slate-700">{resource.takeaway}</p>
            </div>
            <div className="mt-3 rounded-lg border border-slate-200 p-4">
              <div className="text-sm font-black text-slate-500">How to use it</div>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Skim it first for the main idea, then return to the sections that match your current HR priority. If it
                is a checklist, guide, or template, use it as a working document in a team discussion rather than a file
                that simply gets downloaded and forgotten.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-black uppercase text-primary">Tags</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span key={tag} className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge icon={LibraryBig}>Keep Exploring</Badge>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">Other AI-HR resources</h2>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Back to full library
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {otherResources.map((item) => (
            <ResourceMiniCard key={item.id} resource={item} onOpen={() => onOpenResource(item)} />
          ))}
        </div>
      </section>
    </main>
  )
}

function BookingBand() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white">
      <div className="absolute inset-0">
        <Image src="/Hero_team.webp" alt="HRM Office team" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-slate-950/85" />
      </div>
      <div className="container relative mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:px-8">
        <div>
          <div className="mb-5">
            <BrandLogos compact />
          </div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
            <BriefcaseBusiness className="h-4 w-4 text-accent" />
            From download to implementation
          </div>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Make the resource library useful for your actual HR priorities.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            The library gives you the materials. HRM Office helps you adapt them, prioritize the right next step, and
            connect your team to relevant AIHR training.
          </p>
        </div>
        <div className="rounded-lg border border-white/20 bg-white p-6 text-slate-950 shadow-xl">
          <h3 className="text-2xl font-black">Book a resource session</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tell us what you are trying to solve and we will point you to the right resource set.
          </p>
          <div className="my-5 grid grid-cols-2 gap-3">
            {["AI policy", "Prompting", "Vendor review", "Team training"].map((item) => (
              <div key={item} className="rounded-lg bg-slate-100 px-4 py-3 text-center text-sm font-black text-slate-700">
                {item}
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/2347043071341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-200 px-5 py-4 text-sm font-black text-slate-700 transition hover:bg-slate-300"
          >
            Contact HRM Office
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import type { Metadata } from "next"
import Image from 'next/image'
import { useState, useMemo } from "react"

const knowledgeItems = [
  {
    id: 1,
    title: "AIHR AI In HR Video Advert",
    description: "Introduction to AI in HR with AIHR video guide",
    type: "video",
    link: "https://drive.google.com/file/d/1u4xdMBjhKLKD7hAoZ95gKC96fgFyfooQ/view",
    tags: ["video", "introduction"],
  },
  {
    id: 2,
    title: "15 ChatGPT Prompts for HR Professionals",
    description: "Essential ChatGPT prompts to boost HR productivity",
    type: "guide",
    link: "https://drive.google.com/file/d/1iRJlynVkTqPyCd392JUuL19MqX0pKCRf/view",
    tags: ["chatgpt", "prompts"],
  },
  {
    id: 3,
    title: "AI Risk Assessment Process",
    description: "Process to assess AI risks in HR operations",
    type: "tool",
    link: "https://drive.google.com/file/d/191JZUi2GEi82ZmunoFTMi7OK8t7OF_VO/view",
    tags: ["risk", "assessment"],
  },
  {
    id: 4,
    title: "AI Vendor Evaluation Checklist",
    description: "Checklist to evaluate AI vendors effectively",
    type: "checklist",
    link: "https://drive.google.com/file/d/1t5h-ZzztR4MKo9TXx7-_JEnO0vt53vKv/view",
    tags: ["vendor", "checklist"],
  },
  {
    id: 5,
    title: "AI Glossary",
    description: "Key AI terms explained for HR professionals",
    type: "glossary",
    link: "https://drive.google.com/file/d/13tXcKkQJiF9FLQwx-JtuztcWHix1lwY0/view",
    tags: ["glossary", "terms"],
  },
  {
    id: 6,
    title: "AI in HR Toolbox",
    description: "Comprehensive AI tools for HR use cases",
    type: "toolbox",
    link: "https://drive.google.com/file/d/1Ja8kSFIua3bWdvKrWipd1jV_U9FLORuc/view",
    tags: ["tools", "toolbox"],
  },
  {
    id: 7,
    title: "AI Policy Template",
    description: "Template to create an AI policy for your organization",
    type: "template",
    link: "https://drive.google.com/file/d/1TzbgD6QzE9Z5vKbUoFH40sAv8ETn-KvG/view",
    tags: ["policy", "template"],
  },
  {
    id: 8,
    title: "AI Skills Framework",
    description: "Framework to develop AI skills in HR",
    type: "framework",
    link: "https://drive.google.com/file/d/1TO1Jasa24uDY32cS16u_5ZTn4F2TfqGi/view",
    tags: ["skills", "framework"],
  },
  {
    id: 9,
    title: "AIHR AI in HR Cheat sheet collection",
    description: "Collection of cheat sheets for AI in HR",
    type: "cheatsheet",
    link: "https://drive.google.com/file/d/1N_SspUaa_am3UYkFDJxiYUX9gNXSxdJP/view",
    tags: ["cheatsheet", "collection"],
  },
  {
    id: 10,
    title: "AI Strategy Framework",
    description: "Framework to build an AI strategy for HR",
    type: "framework",
    link: "https://drive.google.com/file/d/1KsxokEjT4hFUCm-PuqP1Qwn8-siNXJhd/view",
    tags: ["strategy", "framework"],
  },
  {
    id: 11,
    title: "AIHR Post-AI HRBP Model",
    description: "HR Business Partner model for the AI era",
    type: "model",
    link: "https://drive.google.com/file/d/1DHg4G2n6E-dpWWhMclktGedYgdxdaJgG/view",
    tags: ["hrbp", "model"],
  },
  {
    id: 12,
    title: "ChatGPT for HR (picture)",
    description: "Visual guide to using ChatGPT in HR",
    type: "image",
    link: "https://drive.google.com/file/d/198Hy_XfS0yGqXtORKsh7j1jxkyXyhomw/view",
    tags: ["chatgpt", "visual"],
  },
  {
    id: 13,
    title: "ChatGPT for People Analytics",
    description: "Leverage ChatGPT for people analytics",
    type: "guide",
    link: "https://drive.google.com/file/d/1s4bTp4wV_roloHkT_wTiLxckmWknqkgg/view",
    tags: ["people analytics", "chatgpt"],
  },
  {
    id: 14,
    title: "Prompt Design Cheat Sheet",
    description: "Cheat sheet for effective prompt engineering",
    type: "cheatsheet",
    link: "https://drive.google.com/file/d/16H5KrRe07yWf015WAaDTA2Ak007FzEfP/view",
    tags: ["prompts", "cheatsheet"],
  },
  {
    id: 15,
    title: "Creating an AI Prompt Template Guide",
    description: "Guide to creating AI prompt templates",
    type: "guide",
    link: "https://drive.google.com/file/d/1oYspgPOWLdwkd3-ze0VapKiHrXZDeYTR/view",
    tags: ["prompts", "templates"],
  },
  {
    id: 16,
    title: "Decision Tree for AI Use in Talent Acquisition",
    description: "Decision tree to guide AI use in talent acquisition",
    type: "tool",
    link: "https://drive.google.com/file/d/1ucXceumINiNizeLzU2G7d6fDTC1dl9Co/view",
    tags: ["talent acquisition", "decision tree"],
  },
  {
    id: 17,
    title: "GENERATIVE AI USER GUIDELINES",
    description: "Guidelines for using generative AI responsibly",
    type: "guidelines",
    link: "https://drive.google.com/file/d/1SY_HarH5VEdq0q1Vnm85_Qzdj0KQiqrq/view",
    tags: ["generative ai", "guidelines"],
  },
  {
    id: 18,
    title: "HR 2026 Starter Guide",
    description: "Starter guide for HR in 2026",
    type: "guide",
    link: "https://drive.google.com/file/d/1erlg0EJO-Yx_VUbeaD3J0v5LhCjv6pdT/view",
    tags: ["2026", "guide"],
  },
  {
    id: 19,
    title: "Top AI Tools for HR Professionals",
    description: "Top AI tools for HR professionals to use",
    type: "tools",
    link: "https://drive.google.com/file/d/1s1Hh0p1l5iQoZP9_MjUGzwT4vzVLx5H_/view",
    tags: ["tools", "top"],
  },
]

const typeColors = {
  video: "bg-purple-100 text-purple-800",
  guide: "bg-blue-100 text-blue-800",
  tool: "bg-green-100 text-green-800",
  checklist: "bg-yellow-100 text-yellow-800",
  glossary: "bg-orange-100 text-orange-800",
  toolbox: "bg-teal-100 text-teal-800",
  template: "bg-pink-100 text-pink-800",
  framework: "bg-indigo-100 text-indigo-800",
  cheatsheet: "bg-cyan-100 text-cyan-800",
  model: "bg-lime-100 text-lime-800",
  image: "bg-rose-100 text-rose-800",
  guidelines: "bg-sky-100 text-sky-800",
}

export default function AIHRGuidePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const uniqueTypes = ["all", ...Array.from(new Set(knowledgeItems.map(item => item.type)))]

  const filteredItems = useMemo(() => {
    return knowledgeItems.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesType = selectedType === "all" || item.type === selectedType
      return matchesSearch && matchesType
    })
  }, [searchQuery, selectedType])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-[#222]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="HRMOFFICE"
              width={140}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#263c85] mb-4">
          AIHR Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of AI in HR resources, guides, tools, and more to help you excel in the AI era.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search resources by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-lg focus:ring-2 focus:ring-[#263c85] focus:border-[#263c85] outline-none text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {uniqueTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === type
                  ? "bg-gradient-to-r from-[#263c85] to-[#2abec5] text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
          </div>
        </div>

        {/* Knowledge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${typeColors[item.type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#263c85] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#263c85] mb-2 group-hover:text-[#2abec5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">HRMOFFICE</div>
            <div className="text-sm text-gray-400 mb-6">© {new Date().getFullYear()} HRMOFFICE. All Rights Reserved.</div>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
              HRMOFFICE is dedicated to advancing HR professionals through innovative career development solutions.
              This site is not affiliated with, endorsed by, or sponsored by Meta, Facebook, or Instagram.
              All trademarks and brand names are the property of their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
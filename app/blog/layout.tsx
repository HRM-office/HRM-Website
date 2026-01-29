import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog - HRMOffice',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Full Academy - HRMOffice',
}

export default function FullAcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
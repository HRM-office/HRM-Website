import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Recruitment - HRMOffice',
}

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'People Analytics - HRMOffice',
}

export default function PeopleAnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Business Partnering - HRMOffice',
}

export default function BusinessPartneringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
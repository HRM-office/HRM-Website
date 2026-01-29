import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'HR Software - HRMOffice',
}

export default function HRSoftwareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
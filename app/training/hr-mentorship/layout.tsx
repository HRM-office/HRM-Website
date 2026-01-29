import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'HR Essentials - HRMOffice',
}

export default function HREssentialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
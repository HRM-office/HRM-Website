import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact - HRMOffice',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
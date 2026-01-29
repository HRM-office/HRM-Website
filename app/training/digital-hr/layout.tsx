import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Digital HR - HRMOffice',
}

export default function DigitalHRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Business Functions - HRMOffice',
}

export default function BusinessFunctionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
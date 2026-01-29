import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Outsourcing - HRMOffice',
}

export default function OutsourcingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
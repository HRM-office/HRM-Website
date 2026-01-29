import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Training - HRMOffice',
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Certificate Programs - HRMOffice',
}

export default function CertificateProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
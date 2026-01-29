import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Partnership } from "@/components/partnership"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Services />
      <Partnership />
      <Testimonials />
      <CTA />
    </div>
  )
}

import AboutApp from "@/components/landing/AboutApp"
import Benefits from "@/components/landing/Benefits"
import Blog from "@/components/landing/Blog"
import Community from "@/components/landing/Community"
import CTA from "@/components/landing/CTA"
import Features from "@/components/landing/Features"
import FinancialManagement from "@/components/landing/FinancialManagement"
import Footer from "@/components/landing/Footer"
import Hero from "@/components/landing/Hero"
import Logos from "@/components/landing/Logos"
import Nav from "@/components/landing/Nav"
import Pricing from "@/components/landing/Pricing"
import Testimonials from "@/components/landing/Testimonials"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Skeleton className="pointer-events-none absolute left-[-260px] top-[200px] hidden h-[220px] w-[480px] rounded-full bg-white/70 lg:block" />
      <Skeleton className="pointer-events-none absolute right-[-260px] top-[200px] hidden h-[220px] w-[480px] rounded-full bg-white/70 lg:block" />
      <Nav />
      <main className="relative z-10 flex flex-col gap-8 pb-24 pt-24">
        <Hero />
        <Logos />
        <AboutApp />
        <Benefits />
        <FinancialManagement />
        <Features />
        <Testimonials />
        <Pricing />
        <Blog />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

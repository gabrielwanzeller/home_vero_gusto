import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { IdealFor } from "@/components/sections/ideal-for"
import { WhyUs } from "@/components/sections/why-us"
import { ProblemSolution } from "@/components/sections/problem-solution"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Authority } from "@/components/sections/authority"
import { Testimonials } from "@/components/sections/testimonials"
import { Menu } from "@/components/sections/menu"
import { Investment } from "@/components/sections/investment"
import { Gallery } from "@/components/sections/gallery"
import { Region } from "@/components/sections/region"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <IdealFor />
        <WhyUs />
        <ProblemSolution />
        <HowItWorks />
        <Authority />
        <Testimonials />
        <Menu />
        <Investment />
        <Gallery />
        <Region />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}


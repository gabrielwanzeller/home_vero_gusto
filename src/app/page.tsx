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
import { TestimonialsSecond } from "@/components/sections/testimonials-second"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden max-w-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <ProblemSolution />
        <HowItWorks />
        <Menu />
        <Testimonials />
        <IdealFor />
        <Gallery />
        <Investment />
        <Authority />
        <TestimonialsSecond />
        <FAQ />
        <Region />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}


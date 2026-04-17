import dynamic from "next/dynamic"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { WhyUs } from "@/components/sections/why-us"

// Seções abaixo do fold — carregadas de forma assíncrona
const ProblemSolution   = dynamic(() => import("@/components/sections/problem-solution").then(m => ({ default: m.ProblemSolution })))
const HowItWorks        = dynamic(() => import("@/components/sections/how-it-works").then(m => ({ default: m.HowItWorks })))
const Menu              = dynamic(() => import("@/components/sections/menu").then(m => ({ default: m.Menu })))
const Testimonials      = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.Testimonials })))
const IdealFor          = dynamic(() => import("@/components/sections/ideal-for").then(m => ({ default: m.IdealFor })))
const Gallery           = dynamic(() => import("@/components/sections/gallery").then(m => ({ default: m.Gallery })))
const Investment        = dynamic(() => import("@/components/sections/investment").then(m => ({ default: m.Investment })))
const Authority         = dynamic(() => import("@/components/sections/authority").then(m => ({ default: m.Authority })))
const TestimonialsSecond = dynamic(() => import("@/components/sections/testimonials-second").then(m => ({ default: m.TestimonialsSecond })))
const FAQ               = dynamic(() => import("@/components/sections/faq").then(m => ({ default: m.FAQ })))
const Region            = dynamic(() => import("@/components/sections/region").then(m => ({ default: m.Region })))
const FinalCTA          = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCTA })))

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

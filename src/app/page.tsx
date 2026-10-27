import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { WhyUs } from "@/components/sections/why-us"
import { pageMetadata } from "@/lib/seo"
import { SeoPage } from "@/components/seo-page"

export const metadata = pageMetadata('/', 'Rodízio de pizza para eventos em Brasília', 'Rodízio de pizza em domicílio no estilo napolitano. Forno, equipe e pizzas assadas ao vivo em Brasília, no Distrito Federal e Entorno. Peça uma proposta.')

// Conteúdo estático renderizado no servidor. Os players continuam carregando por interação.
import { ProblemSolution } from "@/components/sections/problem-solution"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Menu } from "@/components/sections/menu"
import { Testimonials } from "@/components/sections/testimonials"
import { IdealFor } from "@/components/sections/ideal-for"
import { Gallery } from "@/components/sections/gallery"
import { Investment } from "@/components/sections/investment"
import { Authority } from "@/components/sections/authority"
import { TestimonialsSecond } from "@/components/sections/testimonials-second"
import { FAQ } from "@/components/sections/faq"
import { Region } from "@/components/sections/region"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden max-w-full">
      <Header />
      <main id="conteudo" className="flex-1">
        <SeoPage path="/" name="Rodízio de pizza para eventos em Brasília" />
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

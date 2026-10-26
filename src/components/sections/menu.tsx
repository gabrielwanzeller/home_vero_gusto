import Link from 'next/link'
import { WhatsAppCtaButton } from '@/components/ui/whatsapp-cta-button'
import { Leaf, Flame, Candy } from 'lucide-react'
import { business, menuCategories } from '@/lib/business'

export function Menu({ full = false }: { full?: boolean }) {
  const icons = [Leaf, Flame, Candy]
  const Heading = full ? 'h1' : 'h2'
  const CategoryHeading = full ? 'h2' : 'h3'
  return (
    <section id="cardapio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-5 max-w-3xl mx-auto">
          <Heading className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-primary leading-tight">{full ? 'Cardápio de pizzas para eventos' : 'Cardápio completo: entradas, pizzas salgadas e doces'}</Heading>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{business.menuText}</p>
          {full && <p className="text-lg text-muted-foreground">{business.doughText} Consulte a equipe sobre os ingredientes e as necessidades dos seus convidados antes de contratar.</p>}
          {full && <p className="text-base text-muted-foreground">{business.coverageText} <Link href="/#regiao" className="font-bold text-primary underline underline-offset-4">Veja como atendemos sua região.</Link></p>}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {menuCategories.map((category, index) => {
            const Icon = icons[index]
            return <article key={category.title} className="bg-white border-2 border-foreground rounded-xl p-6 md:p-8 shadow-hard">
              <div className="flex items-center gap-3 border-b-2 border-border pb-4 mb-6"><Icon className="w-6 h-6 text-primary shrink-0" aria-hidden="true" /><CategoryHeading className="font-display text-3xl uppercase font-bold">{category.title}</CategoryHeading></div>
              <ul className="space-y-3">{category.items.map(item => <li key={item} className="text-lg text-muted-foreground flex gap-2"><span className="text-primary" aria-hidden="true">•</span>{item}</li>)}</ul>
            </article>
          })}
        </div>
        <div className="text-center space-y-6">
          <WhatsAppCtaButton data-gtm="generate_form" size="lg" className="w-full md:w-auto h-auto min-h-16 py-4 px-8 text-lg md:text-xl whitespace-normal rounded-full">Consultar cardápio para meu evento</WhatsAppCtaButton>
          {full && <p><Link href="/orcamento" className="font-bold text-primary underline underline-offset-4">Veja inclusões, pagamento e orçamento</Link></p>}
        </div>
      </div>
    </section>
  )
}

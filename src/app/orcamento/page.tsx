import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Investment } from '@/components/sections/investment'
import { WhatsAppCtaButton } from '@/components/ui/whatsapp-cta-button'
import { SeoPage } from '@/components/seo-page'
import { EventQuoteForm } from '@/components/event-quote-form'
import { business } from '@/lib/business'
import { pageMetadata } from '@/lib/seo'
import { isPreview } from '@/lib/site-environment'

export const metadata = pageMetadata('/orcamento', 'Orçamento de rodízio de pizza para eventos', 'Entenda inclusões, adicionais, mínimo, duração e pagamento. Solicite uma proposta de buffet de pizza em Brasília, no Distrito Federal e Entorno.')

export default function OrcamentoPage() {
  return <div className="min-h-screen bg-background">
    <Header solid />
    <main id="conteudo" className="pt-28">
      <SeoPage path="/orcamento" name="Orçamento de rodízio de pizza" />
      <section className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-5 pb-10">
        <h1 className="font-display text-4xl md:text-6xl font-bold uppercase text-primary">Orçamento para seu evento</h1>
        <p className="text-lg md:text-xl text-muted-foreground">A proposta considera a quantidade de pessoas, a data, o cardápio, a duração e os serviços adicionais. Os preços são sob consulta.</p>
      </section>
      <section aria-label="Condições e solicitação de proposta" className="container mx-auto px-4 md:px-6 max-w-6xl grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start pb-16">
        <aside className="space-y-6">
          <h2 className="font-display text-3xl font-bold uppercase">Antes de pedir sua proposta</h2>
          <ul className="space-y-4 text-base md:text-lg">
            <li className="border-l-4 border-primary pl-4">{business.minimumText}</li>
            <li className="border-l-4 border-primary pl-4">{business.capacityText}</li>
            <li className="border-l-4 border-primary pl-4">{business.coverageText}</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">{business.timingText}</p>
          <p className="text-muted-foreground leading-relaxed">{business.includedText}</p>
          <p className="text-sm text-muted-foreground">Consulte também <Link href="/cardapio" className="underline underline-offset-4 font-bold text-primary">o cardápio</Link> e <Link href="#condicoes" className="underline underline-offset-4 font-bold text-primary">os detalhes da contratação</Link>.</p>
        </aside>
        <EventQuoteForm testMode={isPreview} />
      </section>
      <section id="condicoes" className="container mx-auto px-4 md:px-6 max-w-4xl pb-20 space-y-10 scroll-mt-28">
        <div><h2 className="font-display text-3xl font-bold mb-3">Duração e montagem</h2><p className="text-lg text-muted-foreground">{business.timingText} {business.setupText}</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">Adicionais e itens do cliente</h2><p className="text-lg text-muted-foreground">{business.extrasText}</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">Reserva e pagamento</h2><p className="text-lg text-muted-foreground">{business.paymentText} A data é reservada conforme o contrato e a confirmação do pagamento da entrada.</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">Condições para crianças</h2><p className="text-lg text-muted-foreground">{business.childrenText}</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">O que informar para pedir a proposta</h2><p className="text-lg text-muted-foreground">Informe a data, a quantidade de convidados, o local e o tipo de evento. Confirme também o mínimo de adultos pagantes. Com esses dados, Gabriel e a equipe avaliam a disponibilidade e o formato de atendimento.</p></div>
        <div className="text-center"><WhatsAppCtaButton size="lg" className="rounded-full h-auto min-h-16 px-8 py-4 whitespace-normal">Preencher dados e consultar orçamento</WhatsAppCtaButton></div>
      </section>
      <Investment />
    </main>
    <Footer />
  </div>
}

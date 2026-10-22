import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Investment } from '@/components/sections/investment'
import { WhatsAppCtaButton } from '@/components/ui/whatsapp-cta-button'
import { SeoPage } from '@/components/seo-page'
import { EventQuoteForm } from '@/components/event-quote-form'
import { business } from '@/lib/business'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('/orcamento', 'Orçamento de rodízio de pizza para eventos', 'Entenda inclusões, adicionais, mínimo, duração e pagamento. Solicite uma proposta de buffet de pizza em Brasília, no Distrito Federal e Entorno.')

export default function OrcamentoPage() {
  return <div className="min-h-screen bg-background">
    <Header solid />
    <main id="conteudo" className="pt-32">
      <SeoPage path="/orcamento" name="Orçamento de rodízio de pizza" />
      <section className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-6">
        <h1 className="font-display text-4xl md:text-6xl font-bold uppercase text-primary">Orçamento para seu evento</h1>
        <p className="text-lg md:text-xl text-muted-foreground">Quanto custa um rodízio de pizza em casa? A proposta considera a quantidade de pessoas, a data, o cardápio, a duração e os serviços adicionais. Os preços são sob consulta.</p>
        <p className="font-bold">{business.minimumText}</p>
        <p>{business.capacityText} {business.coverageText}</p>
      </section>
      <Investment />
      <div className="container mx-auto px-4 md:px-6 pb-16"><EventQuoteForm /></div>
      <section className="container mx-auto px-4 md:px-6 max-w-4xl pb-20 space-y-10">
        <div><h2 className="font-display text-3xl font-bold mb-3">Duração e montagem</h2><p className="text-lg text-muted-foreground">{business.timingText} {business.setupText}</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">Adicionais e itens do cliente</h2><p className="text-lg text-muted-foreground">{business.extrasText}</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">Reserva e pagamento</h2><p className="text-lg text-muted-foreground">{business.paymentText} A data é reservada conforme o contrato e a confirmação do pagamento da entrada.</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">Condições para crianças</h2><p className="text-lg text-muted-foreground">{business.childrenText}</p></div>
        <div><h2 className="font-display text-3xl font-bold mb-3">O que informar para pedir a proposta</h2><p className="text-lg text-muted-foreground">Informe data, bairro e cidade, número de adultos pagantes, total de convidados e tipo de evento. Com esses dados, Gabriel e a equipe avaliam a disponibilidade e o formato de atendimento.</p></div>
        <div className="text-center space-y-6"><WhatsAppCtaButton size="lg" className="rounded-full h-auto min-h-16 px-8 py-4 whitespace-normal">Preencher dados e consultar orçamento</WhatsAppCtaButton><p><Link href="/cardapio" className="font-bold text-primary underline underline-offset-4">Conferir o cardápio</Link> · <Link href="/#perguntas" className="font-bold text-primary underline underline-offset-4">Outras perguntas frequentes</Link></p></div>
      </section>
    </main>
    <Footer />
  </div>
}

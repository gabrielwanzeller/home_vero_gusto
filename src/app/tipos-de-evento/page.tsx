import { pageMetadata } from '@/lib/seo'
import { SeoPage } from '@/components/seo-page'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppCtaButton } from '@/components/ui/whatsapp-cta-button'
import { business } from '@/lib/business'

export const metadata = pageMetadata('/tipos-de-evento', 'Pizza para aniversários e confraternizações em Brasília', 'Conheça o atendimento de rodízio de pizza para festas em casa, aniversários e confraternizações no Distrito Federal e Entorno.')

const events = [
  ['Aniversários', 'Uma operação completa para reunir família e amigos, com pizzas preparadas e servidas no local.'],
  ['Celebrações em família', 'Reuniões e comemorações com operação definida conforme a quantidade de convidados e o espaço disponível.'],
  ['Eventos corporativos', 'Serviço planejado para confraternizações, encontros de equipe e ações de relacionamento.'],
  ['Eventos em casa e condomínios', 'Atendimento em casas, apartamentos, áreas gourmet e salões de condomínio, conforme a estrutura disponível.'],
]

export default function TiposDeEventoPage() {
  return <div className="min-h-screen bg-background"><Header solid /><main id="conteudo" className="pt-32 pb-20"><SeoPage path="/tipos-de-evento" name="Tipos de evento" /><section className="container mx-auto px-4 md:px-6"><div className="max-w-4xl mx-auto text-center space-y-6 mb-14"><h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-primary">Pizza para diferentes tipos de evento</h1><p className="text-xl text-muted-foreground">A Vero Gusto atende eventos de 20 adultos pagantes em dias úteis ou 25 nos finais de semana, até 100 pessoas — e até 110 sob consulta.</p><p className="text-lg text-muted-foreground">{business.coverageText} <Link href="/#regiao" className="font-bold text-primary underline underline-offset-4">Confira a cobertura.</Link></p></div><div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">{events.map(([title, text]) => <article key={title} className="bg-white border-2 border-foreground rounded-xl p-8 shadow-hard"><h2 className="font-display text-3xl font-bold uppercase mb-4">{title}</h2><p className="text-lg text-muted-foreground">{text}</p></article>)}</div><div className="text-center mt-14"><WhatsAppCtaButton size="lg" className="rounded-full min-h-16 px-10 text-lg">Consultar disponibilidade</WhatsAppCtaButton></div><p className="max-w-3xl mx-auto mt-12 text-center text-lg text-muted-foreground">O serviço padrão dura 3 horas, com chegada 2 horas antes para montagem. Consulte o <Link href="/cardapio" className="text-primary underline font-bold">cardápio</Link> e as <Link href="/orcamento" className="text-primary underline font-bold">condições de orçamento</Link> para planejar o seu evento.</p></section></main><Footer /></div>
}

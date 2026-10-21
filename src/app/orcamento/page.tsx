import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Investment } from '@/components/sections/investment'
import { FAQ } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'Orçamento de rodízio de pizza para eventos',
  description: 'Peça uma proposta de rodízio de pizza para seu evento em Brasília, Distrito Federal ou Entorno. Valores personalizados e preços sob consulta.',
  alternates: { canonical: '/orcamento' },
}

export default function OrcamentoPage() {
  return <div className="min-h-screen bg-background"><Header solid /><main className="pt-28"><h1 className="sr-only">Orçamento de rodízio de pizza para eventos</h1><Investment /><FAQ /></main><Footer /></div>
}

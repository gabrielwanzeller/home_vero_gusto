import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Menu } from '@/components/sections/menu'

export const metadata: Metadata = {
  title: 'Cardápio de pizzas para eventos em Brasília',
  description: 'Conheça opções de entradas, pizzas salgadas e doces da Vero Gusto. A seleção contratada é definida na proposta conforme o evento.',
  alternates: { canonical: '/cardapio' },
}

export default function CardapioPage() {
  return <div className="min-h-screen bg-background"><Header solid /><main className="pt-28"><h1 className="sr-only">Cardápio de pizzas para eventos em Brasília</h1><Menu /></main><Footer /></div>
}

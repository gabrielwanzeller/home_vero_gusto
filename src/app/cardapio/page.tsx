import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Menu } from '@/components/sections/menu'
import { pageMetadata } from '@/lib/seo'
import { SeoPage } from '@/components/seo-page'

export const metadata = pageMetadata('/cardapio', 'Cardápio de pizzas para eventos em Brasília', 'Conheça o catálogo de entradas, pizzas salgadas e doces da Vero Gusto. A seleção contratada é definida na proposta conforme o evento.')

export default function CardapioPage() {
  return <div className="min-h-screen bg-background"><Header solid /><main id="conteudo" className="pt-24"><SeoPage path="/cardapio" name="Cardápio Vero Gusto" /><Menu full /></main><Footer /></div>
}

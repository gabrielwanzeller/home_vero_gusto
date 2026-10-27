import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Menu } from '@/components/sections/menu'
import { pageMetadata } from '@/lib/seo'
import { SeoPage } from '@/components/seo-page'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = pageMetadata('/cardapio', 'Cardápio de pizzas para eventos em Brasília', 'Conheça o catálogo de entradas, pizzas salgadas e doces da Vero Gusto. A seleção contratada é definida na proposta conforme o evento.')

export default function CardapioPage() {
  return <div className="min-h-screen bg-background"><Header solid /><main id="conteudo" className="pt-28"><SeoPage path="/cardapio" name="Cardápio Vero Gusto" /><Menu full /><section className="container mx-auto max-w-5xl px-4 md:px-6 pb-20 grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-center"><figure className="rounded-xl border-2 border-foreground overflow-hidden shadow-hard"><Image src="/videos/gallery/video02/thumb02-medium.jpeg" alt="Pizza fatiada em bandeja durante um evento atendido pela Vero Gusto" width={720} height={1280} sizes="(max-width: 768px) 90vw, 360px" className="w-full h-72 object-cover" /><figcaption className="p-4 text-sm text-muted-foreground">Registro da galeria: aniversário no Jardim Botânico.</figcaption></figure><div className="space-y-4"><h2 className="font-display text-3xl md:text-4xl font-bold">Como definir o cardápio do seu evento</h2><p className="text-lg text-muted-foreground">A lista acima apresenta o catálogo. Na proposta, a equipe confirma as entradas e os sabores que serão servidos, considerando a quantidade de pessoas.</p><p className="text-muted-foreground">Informe necessidades alimentares e dúvidas sobre ingredientes antes de contratar. A equipe precisa confirmar a composição e a possibilidade de atendimento para o seu evento.</p><Link href="/orcamento#solicitar" className="inline-block font-bold text-primary underline underline-offset-4">Consultar a seleção para meu evento</Link></div></section></main><Footer /></div>
}

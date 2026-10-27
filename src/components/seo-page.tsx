import { business } from '@/lib/business'
import Link from 'next/link'

export function SeoPage({ path, name }: { path: string; name: string }) {
  const hasBreadcrumb = ['/cardapio', '/orcamento', '/tipos-de-evento'].includes(path)
  const crumbs = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${business.url}${path}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: business.url },
      { '@type': 'ListItem', position: 2, name, item: `${business.url}${path}` },
    ],
  }
  const data = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    '@id': `${business.url}${path}#webpage`, url: `${business.url}${path}`,
    name, inLanguage: 'pt-BR',
    isPartOf: { '@id': `${business.url}/#website` },
    about: { '@id': `${business.url}/#service` },
    ...(hasBreadcrumb ? { breadcrumb: { '@id': crumbs['@id'] } } : {}),
  }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
    {hasBreadcrumb && <><nav aria-label="Caminho da página" className="container mx-auto px-4 md:px-6 max-w-6xl pb-6 text-sm"><ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="font-bold text-primary underline underline-offset-4">Início</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-muted-foreground">{name}</li></ol></nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs).replace(/</g, '\\u003c') }} /></>}
  </>
}

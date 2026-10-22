import { business } from '@/lib/business'

export function SeoPage({ path, name }: { path: string; name: string }) {
  const data = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    '@id': `${business.url}${path}#webpage`, url: `${business.url}${path}`,
    name, inLanguage: 'pt-BR',
    isPartOf: { '@id': `${business.url}/#website` },
    about: { '@id': `${business.url}/#service` },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

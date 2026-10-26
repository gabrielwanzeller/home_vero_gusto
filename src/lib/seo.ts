import type { Metadata } from 'next'
import { business } from './business'

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title: { absolute: `${title} | ${business.name}` }, description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', locale: 'pt_BR', siteName: business.name,
      url: path, title: `${title} | ${business.name}`, description,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Vero Gusto — rodízio de pizza para eventos em Brasília' }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${business.name}`, description, images: ['/opengraph-image'] },
  }
}

const serviceArea = [
  { '@type': 'AdministrativeArea', name: 'Distrito Federal' },
  { '@type': 'Place', name: 'Entorno do Distrito Federal' },
]

export const organizationGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': `${business.url}/#organization`,
      name: business.name, url: business.url, telephone: '+55 61 98320-2467',
      taxID: business.cnpj,
      logo: `${business.url}/images/logo-vero-gusto/logo-red.png`,
      image: `${business.url}/images/authority/fotos-equipe-large.jpeg`,
      sameAs: [business.instagram],
      areaServed: serviceArea,
      description: `${business.serviceText} ${business.coverageText} ${business.productionBaseText}`,
    },
    { '@type': 'WebSite', '@id': `${business.url}/#website`, url: business.url, name: business.name, inLanguage: 'pt-BR', publisher: { '@id': `${business.url}/#organization` } },
    {
      '@type': 'Service', '@id': `${business.url}/#service`,
      name: 'Rodízio de pizza para eventos em Brasília',
      serviceType: 'Buffet de pizza em domicílio para eventos',
      provider: { '@id': `${business.url}/#organization` },
      areaServed: serviceArea,
      description: `${business.serviceText} ${business.coverageText} ${business.minimumText} ${business.capacityText} ${business.timingText}`,
    },
  ],
}

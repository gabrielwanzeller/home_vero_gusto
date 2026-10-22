import type { MetadataRoute } from 'next'
import { business } from '@/lib/business'

export default function robots(): MetadataRoute.Robots {
  // O guia visual precisa continuar rastreável para que o noindex seja lido.
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${business.url}/sitemap.xml`, host: business.url }
}

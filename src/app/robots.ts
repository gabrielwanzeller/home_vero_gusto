import type { MetadataRoute } from 'next'
import { business } from '@/lib/business'
import { isPreview } from '@/lib/site-environment'

export default function robots(): MetadataRoute.Robots {
  if (isPreview) return { rules: { userAgent: '*', disallow: '/' } }
  // O guia visual precisa continuar rastreável para que o noindex seja lido.
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${business.url}/sitemap.xml`, host: business.url }
}

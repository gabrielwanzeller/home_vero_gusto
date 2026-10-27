import type { MetadataRoute } from 'next'
import { business } from '@/lib/business'
import { isPreview } from '@/lib/site-environment'

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return []
  return ['', '/cardapio', '/orcamento', '/tipos-de-evento', '/avalie', '/linktree'].map(route => ({ url: `${business.url}${route}` }))
}

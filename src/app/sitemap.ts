import type { MetadataRoute } from 'next'
import { business } from '@/lib/business'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/cardapio', '/orcamento', '/tipos-de-evento', '/avalie', '/linktree'].map(route => ({ url: `${business.url}${route}` }))
}

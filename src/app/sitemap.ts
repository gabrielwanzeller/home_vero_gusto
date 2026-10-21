import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/cardapio', '/orcamento', '/tipos-de-evento', '/avalie', '/linktree']
  return routes.map((route) => ({
    url: `https://www.verogusto.com.br${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}

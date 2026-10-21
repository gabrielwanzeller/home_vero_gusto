import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/styleguide/' },
    sitemap: 'https://www.verogusto.com.br/sitemap.xml',
    host: 'https://www.verogusto.com.br',
  }
}

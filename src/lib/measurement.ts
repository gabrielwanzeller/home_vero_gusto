'use client'

export function trackEvent(event: string, parameters: Record<string, string | number> = {}) {
  const target = window as Window & { dataLayer?: Record<string, unknown>[] }
  target.dataLayer = target.dataLayer || []
  target.dataLayer.push({ event, page_path: window.location.pathname, ...parameters })
}

'use client'

export type MeasurementEvent = 'vg_quote_navigate' | 'vg_quote_view' | 'vg_quote_start' | 'vg_quote_valid' | 'vg_whatsapp_click' | 'google_review_click'
type MeasurementParameters = Partial<Record<'form_name' | 'placement' | 'capacity_consultation' | 'contact_method', string>>

export function trackEvent(event: MeasurementEvent, parameters: MeasurementParameters = {}) {
  const safeParameters = Object.fromEntries(Object.entries(parameters).filter(([key]) => ['form_name', 'placement', 'capacity_consultation', 'contact_method'].includes(key)))
  const target = window as Window & { dataLayer?: Record<string, unknown>[] }
  target.dataLayer = target.dataLayer || []
  const payload = { ...safeParameters, event, page_path: window.location.pathname, measurement_mode: document.documentElement.dataset.measurementMode === 'test' ? 'test' : 'live' }
  target.dataLayer.push(payload)
  if (payload.measurement_mode === 'test') console.info('Vero Gusto — evento de teste', JSON.stringify(payload))
}

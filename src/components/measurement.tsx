'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/measurement'

export function Measurement() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null
      if (target && /https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(target.href)) {
        trackEvent('click_contact', { contact_method: 'whatsapp', placement: target.dataset.placement || 'link' })
      }
      if (target?.getAttribute('href') === '/orcamento#solicitar') {
        trackEvent('generate_form', { form_name: 'event_quote' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return null
}

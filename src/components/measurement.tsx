'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/measurement'

export function Measurement() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null
      if (!target) return
      const placement = target.dataset.placement || (target.closest('header') ? 'header' : target.closest('footer') ? 'footer' : 'content')
      if (target && /https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(target.href)) {
        trackEvent('vg_whatsapp_click', { contact_method: 'whatsapp', placement })
      }
      if (target.origin === window.location.origin && new URL(target.href).pathname === '/orcamento') {
        trackEvent('vg_quote_navigate', { form_name: 'event_quote', placement })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return null
}

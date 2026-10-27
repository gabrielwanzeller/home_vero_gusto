"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { whatsappUrl } from '@/lib/business'

export function FloatingWhatsApp() {
  const pathname = usePathname()
  const [formVisible, setFormVisible] = useState(false)
  useEffect(() => {
    const form = document.getElementById('solicitar')
    if (!form) return
    const observer = new IntersectionObserver(entries => setFormVisible(entries.some(entry => entry.isIntersecting)))
    observer.observe(form)
    return () => observer.disconnect()
  }, [pathname])
  // Fora da página de orçamento, não há formulário a observar.
  if (pathname === '/orcamento' && formVisible) return null

  return (
    <a
      href={whatsappUrl('Olá! Vim pelo site da Vero Gusto e quero consultar disponibilidade para meu evento')}
      aria-label="Falar com a Vero Gusto no WhatsApp"
      target="_blank"
      data-track="click_contact"
      data-placement="floating"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-2 bg-brand-green text-white px-5 py-3 rounded-full shadow-hard hover:-translate-y-1 transition-[transform,box-shadow] duration-300 border-2 border-foreground group animate-in fade-in slide-in-from-bottom-5"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold text-sm md:text-base uppercase tracking-wider hidden sm:inline-block">
        Fale Conosco
      </span>
    </a>
  )
}

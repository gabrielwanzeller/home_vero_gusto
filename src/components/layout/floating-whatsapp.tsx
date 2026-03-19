"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const whatsappNumber = "5561983202467" // Use actual number if available or generic link
  const message = encodeURIComponent("Olá! Vim pelo site da Vero Gusto e quero consultar disponibilidade para meu evento")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 bg-brand-green text-white px-4 md:px-5 py-3 rounded-full shadow-[2px_2px_0px_0px_rgba(20,23,26,1)] md:shadow-[4px_4px_0px_0px_rgba(20,23,26,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(20,23,26,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(20,23,26,1)] transition-all duration-300 border-2 border-foreground group animate-in fade-in slide-in-from-bottom-5"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold text-sm md:text-base uppercase tracking-wider hidden sm:inline-block">
        Fale Conosco
      </span>
    </a>
  )
}

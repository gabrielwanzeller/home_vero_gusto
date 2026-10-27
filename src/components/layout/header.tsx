"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, MessageCircle } from "lucide-react"


const whatsappNumber = "5561983202467" // Use actual number if available or generic link
const message = encodeURIComponent("Olá! Vim pelo site da Vero Gusto e quero consultar disponibilidade para meu evento")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

export function Header({ solid = false }: { solid?: boolean }) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10)
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const navLinks = [
    { name: "Por que nós", href: "/#porque-nos" },
    { name: "Como funciona", href: "/#como-funciona" },
    { name: "Cardápio", href: "/cardapio" },
    { name: "Eventos", href: "/tipos-de-evento" },
    { name: "Orçamento", href: "/orcamento" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,padding,box-shadow] duration-300 ${
        isScrolled || solid
        ? "bg-white/84 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          aria-label="Vero Gusto — página inicial"
          className="relative inline-block h-12 md:h-16 w-36 md:w-48 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/logo-vero-gusto/logo-red.png"
            alt=""
            fill
            sizes="(max-width: 768px) 144px, 192px"
            className={`object-contain object-left transition-opacity duration-300 ${
              isScrolled || solid ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image 
            src="/images/logo-vero-gusto/logo-white.png"
            alt=""
            fill
            sizes="(max-width: 768px) 144px, 192px"
            className={`object-contain object-left transition-opacity duration-300 ${
              isScrolled || solid ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                isScrolled || solid
                ? "text-foreground hover:text-primary" 
                : "text-white hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button 
            className={`rounded-full font-bold shadow-hard hover:translate-y-1 hover:shadow-none transition-[transform,box-shadow] flex size-12 p-0 lg:w-auto lg:h-10 lg:px-6 ${
                isScrolled || solid
                ? "bg-brand-green text-white lg:bg-primary lg:text-primary-foreground"
                : "bg-brand-green text-white lg:bg-white lg:text-primary border-0"
            }`}
            data-track="click_contact"
            size="lg"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 lg:w-4 lg:h-4 lg:mr-2" aria-hidden="true" />
              <span className="sr-only lg:not-sr-only">Falar no WhatsApp</span>
            </a>
          </Button>
          
          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer rounded-full bg-white text-foreground p-3 border-2 border-foreground focus-visible:outline-2 focus-visible:outline-primary" aria-label="Abrir navegação"><Menu className="w-6 h-6" /></summary>
            <nav aria-label="Navegação móvel" className="absolute right-0 top-16 w-64 max-w-[85vw] bg-white text-foreground border-2 border-foreground rounded-xl p-4 shadow-hard">
              {navLinks.map(link => <Link key={link.href} href={link.href} className="block py-3 px-2 font-bold hover:text-primary" onClick={event => event.currentTarget.closest('details')?.removeAttribute('open')}>{link.name}</Link>)}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block py-3 px-2 font-bold text-brand-green">Falar no WhatsApp</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, MessageCircle } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Por que nós", href: "#why-us" },
    { name: "Como funciona", href: "#how-it-works" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Cardápio", href: "#menu" },
    { name: "Região", href: "#region" },
    { name: "Perguntas", href: "#faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
         ? "bg-white/84 backdrop-blur-md shadow-sm py-3" 
         : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={`font-display font-bold text-2xl md:text-3xl tracking-tight uppercase transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          Vero Gusto
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                 isScrolled 
                 ? "text-foreground hover:text-primary" 
                 : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button 
            className={`rounded-full font-bold shadow-hard hover:translate-y-1 hover:shadow-none transition-all hidden md:flex ${
                isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white text-primary border-0"
            }`}
            size="lg"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar no WhatsApp
          </Button>
          
          <Button 
            className={`rounded-full w-10 h-10 p-0 md:hidden transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
            }`}
            variant="ghost"
            size="icon"
          >
            <Menu className="w-6 h-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

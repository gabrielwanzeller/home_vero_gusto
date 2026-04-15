"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, Instagram, MapPin, Search } from "lucide-react"

export default function LinktreePage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground flex flex-col items-center py-12 px-4 selection:bg-white/20 selection:text-white">
      
      <main className="w-full max-w-lg space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header Section */}
        <div className="text-center space-y-6">
          
          
          <div className="flex flex-col items-center gap-5">
            <h1 className="my-4 font-display xl:text-7xl uppercase leading-[0.8] tracking-tighter text-white drop-shadow-lg">
              Vero Gusto
            </h1>

            <div className="bg-white text-primary px-4 py-2 mt-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(20,23,26,1)] -rotate-1 border-2 border-foreground">
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-widest margin-0 leading-none pt-1">
                Pizza Napolitana em Eventos
              </h2>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-xs mx-auto leading-relaxed">
            O rodízio de pizza artesanal mais autêntico do DF.
          </p>

          <Button 
            size="lg" 
            data-gtm="click_contact"
            className="w-full h-16 mt-8 rounded-full font-display text-xl uppercase tracking-wide bg-white text-primary shadow-[6px_6px_0px_0px_rgba(20,23,26,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(20,23,26,1)] transition-all"
            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent("Olá! Vim do link na bio do instagram e quero consultar disponibilidade para o meu evento.")}`, "_blank")}
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Consultar disponibilidade
          </Button>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />

        {/* Links Section */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl uppercase text-center text-white/80 tracking-widest mb-6">
            O que você quer fazer agora?
          </h2>

          <div className="flex flex-col gap-4">
            <Button 
              variant="outline"
              size="lg"
              className="w-full h-16 rounded-xl border-2 border-white bg-transparent text-white font-bold text-lg justify-start px-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)] hover:bg-white hover:text-primary transition-all group overflow-hidden relative"
              asChild
            >
              <a href="https://www.instagram.com/verogusto.eventos/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-4 transition-transform group-hover:scale-125 group-hover:text-pink-600" />
                Seguir no Instagram
              </a>
            </Button>

            <Button 
              variant="outline"
              size="lg"
              className="w-full h-16 rounded-xl border-2 border-white bg-transparent text-white font-bold text-lg justify-start px-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)] hover:bg-white hover:text-primary transition-all group overflow-hidden relative"
              asChild
            >
              <a href="/avalie">
                <Star className="w-5 h-5 mr-4 transition-transform group-hover:scale-125 group-hover:text-yellow-500" />
                Avaliar experiência
              </a>
            </Button>

            <Button 
              variant="outline"
              size="lg"
              className="w-full h-16 rounded-xl border-2 border-white bg-transparent text-white font-bold text-lg justify-start px-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)] hover:bg-white hover:text-primary transition-all group overflow-hidden relative"
              asChild
            >
              <a href="/">
                <MapPin className="w-5 h-5 mr-4 transition-transform group-hover:scale-125 group-hover:text-brand-green" />
                Sobre a Vero Gusto
              </a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />

        {/* Social Proof Section */}
        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 text-center space-y-4">
          <h3 className="font-display text-2xl uppercase drop-shadow-sm">Quem contrata, recomenda</h3>
          <p className="text-lg font-medium text-white/90">
            Mais de <strong className="text-white font-bold">100 eventos</strong> realizados em Brasília.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-xl">5.0</span>
            <div className="flex text-yellow-400">
               {[1, 2, 3, 4, 5].map((star) => (
                 <Star key={star} className="w-5 h-5 fill-current" />
               ))}
            </div>
            <span className="text-white/80 font-medium">no Google</span>
          </div>
        </div>

        {/* Footer/Urgency Section */}
        <div className="text-center space-y-6 pt-4">
           <div className="inline-block bg-white text-primary font-bold px-4 py-2 rounded-md border-2 border-foreground rotate-2 shadow-[4px_4px_0px_0px_rgba(20,23,26,1)]">
             Datas concorridas esgotam rápido.
           </div>

           <Button 
             size="lg" 
             data-gtm="click_contact"
             className="w-full h-20 rounded-full font-display text-2xl uppercase tracking-wide bg-foreground text-background shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-1 hover:shadow-none transition-all"
             onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent("Olá! Vim pelo Linktree e quero falar com a equipe.")}`, "_blank")}
           >
             <MessageCircle className="w-6 h-6 mr-3 text-green-400" />
             Falar no WhatsApp
           </Button>
        </div>

      </main>

      <footer className="mt-20 text-sm xl text-white/60 font-medium">
        © 2026 Vero Gusto.
      </footer>
    </div>
  )
}

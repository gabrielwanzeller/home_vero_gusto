import { Button } from "@/components/ui/button"
import { ShieldCheck, CalendarCheck, FileCheck } from "lucide-react"

export function Investment() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Trust Box */}
        <div className="max-w-4xl mx-auto bg-white border-4 border-foreground rounded-2xl p-8 md:p-12 shadow-hard text-center relative overflow-hidden">
           
           <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6 text-foreground">
             Investimento
           </h2>
           
           <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
             Trabalhamos com <span className="font-bold text-foreground">valor por pessoa</span>, variando conforme número de convidados e formato do evento.
           </p>

           <div className="inline-block bg-primary/10 text-primary border-2 border-primary/20 rounded-lg px-6 py-3 mb-8">
             <span className="text-xl font-bold uppercase tracking-wide">Eventos a partir de 15 pessoas</span>
           </div>

           <p className="text-lg text-foreground/80 mb-10">
             Após informar os dados do evento, enviamos proposta personalizada pelo WhatsApp.
           </p>

           {/* Guarantee Badge */}
           <div className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">
             <ShieldCheck className="w-6 h-6" />
             <span className="font-bold text-lg md:text-xl uppercase tracking-wide">Sem taxas escondidas. Sem surpresas.</span>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute top-4 right-4 opacity-5">
              <FileCheck className="w-32 h-32" />
           </div>
           <div className="absolute bottom-4 left-4 opacity-5">
              <CalendarCheck className="w-32 h-32" />
           </div>
        </div>

      </div>
    </section>
  )
}

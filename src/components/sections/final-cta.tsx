import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
           <h2 className="font-display font-bold uppercase text-5xl md:text-7xl leading-none text-white drop-shadow-md">
             Seu evento merece ser lembrado
           </h2>
           
           <p className="text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
             Leve uma experiência completa de pizza artesanal para seu evento em Brasília. <br className="hidden md:inline"/>
             Sem estresse. Sem improviso. Com tudo funcionando do início ao fim.
           </p>

           <Button 
             size="lg"
             className="h-24 px-12 text-2xl md:text-3xl rounded-full font-display uppercase tracking-wide bg-white text-primary border-0 shadow-[6px_6px_0px_0px_rgba(20,23,26,1)] hover:scale-105 hover:shadow-[8px_8px_0px_0px_rgba(20,23,26,1)] transition-all"
           >
             Ver disponibilidade para minha data
           </Button>
        </div>
      </div>
    </section>
  )
}

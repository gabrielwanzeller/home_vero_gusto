import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight drop-shadow-md">
             Seu evento merece ser lembrado
           </h2>
           
           <p className="text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
             Leve uma experiência completa de pizza artesanal para seu evento em Brasília. <br className="hidden md:inline"/>
             Sem estresse. Sem improviso. Com tudo funcionando do início ao fim.
           </p>

           <Button 
             size="lg" 
             mode="red"
             className="h-20 px-10 md:px-14 text-xl md:text-2xl rounded-full font-display uppercase tracking-wider border-0"
           >
             Ver disponibilidade para minha data
           </Button>
        </div>
      </div>
    </section>
  )
}

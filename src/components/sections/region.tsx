import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Region() {
  return (
    <section id="regiao" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
              Atendemos toda <span className="text-primary">Brasília</span> e região
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Plano Piloto, Lago Sul, Lago Norte, Águas Claras, Guará, Taguatinga e demais regiões do DF. Levamos nossa estrutura completa até você.
            </p>
            
            <div className="inline-block bg-orange-100 text-orange-700 font-bold px-4 py-3 rounded-md border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Agenda limitada, principalmente em finais de semana.
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
              >
                Consultar agenda para minha região
              </Button>
            </div>
          </div>

          {/* Right Column: Map Placeholder */}
          <div className="relative">
            <div className="relative aspect-video bg-white rounded-2xl border-4 border-foreground shadow-hard flex items-center justify-center overflow-hidden">
               {/* Map graphic */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d491623.0465617232!2d-48.110227351562486!3d-15.708494929574561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd612474a795f353%3A0x365d3e8e1af77c72!2sVero%20Gusto%20Pizzaria%20-%20Rod%C3%ADzio%20em%20Casa%20Bras%C3%ADlia!5e0!3m2!1spt-BR!2sbr!4v1771593475533!5m2!1spt-BR!2sbr" 
                 className="absolute inset-0 w-full h-full pointer-events-none"
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
               
               <div className="relative z-10 flex flex-col items-center animate-bounce pointer-events-none">
                  <MapPin className="w-16 h-16 text-primary fill-current drop-shadow-md" />
                  <div className="w-4 h-1.5 bg-black/20 rounded-full blur-[2px] mt-1" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

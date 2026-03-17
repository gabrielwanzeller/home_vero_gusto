import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Investment() {
  return (
    <section className="py-20 md:py-32 bg-background border-b-2 border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Grid: 2 Columns on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto mb-16">
          
          {/* Left Column: Price Logic */}
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
              Como funciona o valor do rodízio
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Trabalhamos com valor por pessoa, ajustado conforme:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground shrink-0" />
                número de convidados
              </li>
              <li className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground shrink-0" />
                local do evento
              </li>
              <li className="flex items-center gap-3 text-lg md:text-xl font-bold text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground shrink-0" />
                formato do rodízio
              </li>
            </ul>
            <p className="text-xl text-muted-foreground font-medium pt-6 border-t-2 border-border/50">
              Assim conseguimos montar uma proposta justa e personalizada para o seu evento.
            </p>
          </div>

          {/* Right Column: Value Delivered (Card) */}
          <div className="bg-secondary/20 border-4 border-foreground rounded-2xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(20,23,26,1)]">
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8 text-foreground tracking-wide">
              Sua proposta sempre inclui:
            </h3>
            
            <ul className="space-y-6">
              {[
                "Forno profissional e estação completa de preparo montada no local.",
                "Cardápio com entradas e pizzas (salgadas e doces)",
                "Massa de longa fermentação (até 48h) e ingredientes frescos",
                "Pizzaiolo profissional e equipe responsável pelo serviço das pizzas",
                "Organização da área utilizada pela equipe ao final do evento"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="bg-brand-green text-background rounded-full p-1 shrink-0 mt-1">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Area: Footer & CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
           <p className="text-base md:text-lg font-bold uppercase tracking-widest text-muted-foreground">
             Eventos a partir de 15 pessoas. Sem taxas escondidas. Sem surpresas.
           </p>

           <Button 
             size="lg" 
             className="w-full md:w-auto h-20 px-10 md:px-14 text-xl md:text-2xl rounded-full font-display uppercase tracking-wider"
             variant="primary"
           >
             Receber proposta personalizada
           </Button>
        </div>

      </div>
    </section>
  )
}


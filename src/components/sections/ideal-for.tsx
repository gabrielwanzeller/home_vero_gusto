import { Button } from "@/components/ui/button"
import { PartyPopper, Flame, Clock } from "lucide-react"

export function IdealFor() {
  const benefits = [
    {
      icon: PartyPopper,
      title: "Aproveitar seu próprio evento",
      text: "Esqueça ficar preso na cozinha ou preocupado com comida. Nossa equipe cuida de tudo para você aproveitar o evento e dar atenção total aos seus convidados."
    },
    {
      icon: Flame,
      title: "Exige comida de verdade",
      text: "Nada de salgadinhos frios ou comida sem graça. Servimos pizza napolitana autêntica, assada na hora em forno de alta temperatura, com massa de longa fermentação e ingredientes frescos."
    },
    {
      icon: Clock,
      title: "Valoriza praticidade",
      text: "Levamos forno, estrutura e equipe completa. Montamos tudo no local e, ao final do evento, desmontamos rapidamente deixando o ambiente organizado."
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-b-2 border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            Esse rodízio é ideal para quem…
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Quem quer uma experiência gastronômica incrível no evento, sem se preocupar com nada.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mb-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,23,26,1)] flex flex-col items-center text-center space-y-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(20,23,26,1)] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-display text-2xl uppercase tracking-wider text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="h-20 px-10 md:px-14 text-xl md:text-2xl rounded-full font-display uppercase tracking-wider"
          >
            Quero um orçamento
          </Button>
        </div>

      </div>
    </section>
  )
}

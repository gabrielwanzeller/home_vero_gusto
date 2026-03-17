import { Button } from "@/components/ui/button"
import { Flame, Wheat, ChefHat, Pizza, Star } from "lucide-react"

export function WhyUs() {
  const benefits = [
    {
      icon: Flame,
      title: "Pizza na pedra a 400°C",
      description: "Crosta levemente crocante, massa macia e sabor autêntico.",
      colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
      icon: Wheat,
      title: "Fermentação natural (Até 48h)",
      description: "Massa leve, digestão mais confortável e sabor mais profundo.",
      colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
      icon: ChefHat,
      title: "Equipe 100% dedicada",
      description: "Cuidamos da produção, organização e ritmo do serviço.",
      colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
      icon: Pizza,
      title: "Rodízio sem limite",
      description: "Serviço contínuo, pizzas sempre quentes e circulando.",
      colSpan: "md:col-span-1 lg:col-span-2 lg:col-start-2"
    },
    {
      icon: Star,
      title: "Ideal para impressionar",
      description: "Seus convidados vão comentar por semanas.",
      colSpan: "md:col-span-2 lg:col-span-2"
    }
  ]

  return (
    <section id="porque-nos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.9] text-foreground">
            Por que nosso rodízio está transformando eventos em <span className="text-primary">Brasília</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nosso rodízio não é apenas comida. É uma experiência que muda o clima do evento.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group ${benefit.colSpan}`}
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border-2 border-black">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
            <Button 
              size="lg" 
              className="h-20 px-12 text-2xl rounded-full font-display uppercase tracking-wide shadow-hard hover:translate-y-1 hover:shadow-none transition-all"
            >
              Garantir minha data
            </Button>
        </div>

      </div>
    </section>
  )
}

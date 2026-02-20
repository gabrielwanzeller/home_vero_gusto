import { Button } from "@/components/ui/button"

export function HowItWorks() {
  const steps = [
    {
      id: "1",
      title: "Entre em contato",
      description: "Informe data, local e número de convidados."
    },
    {
      id: "2",
      title: "Montamos sua proposta",
      description: "Valor personalizado conforme o formato do evento."
    },
    {
      id: "3",
      title: "Levamos tudo até você",
      description: "Forno profissional, ingredientes frescos do dia, equipe uniformizada e estrutura completa."
    }
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-24">
          <h2 className="text-5xl md:text-6xl font-display font-bold uppercase leading-none text-foreground">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais simples do que você imagina.
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed pt-4">
            Imagine seus convidados chegando e sentindo o aroma da pizza assando. O forno já está quente. A equipe organizada. Em minutos, as primeiras fatias começam a circular. Você não está preocupado com nada.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/20 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center space-y-6 group">
                {/* Number Node */}
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-display font-bold shadow-hard relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-display text-2xl uppercase font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
            <Button 
              size="lg" 
              className="h-20 px-12 text-xl md:text-2xl rounded-full font-display uppercase tracking-wide shadow-hard hover:translate-y-1 hover:shadow-none transition-all"
            >
              Solicitar proposta personalizada
            </Button>
        </div>

      </div>
    </section>
  )
}

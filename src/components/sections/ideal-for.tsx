import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function IdealFor() {
  const events = [
    "Aniversários adultos",
    "Eventos corporativos",
    "Confraternizações",
    "Casamentos intimistas",
    "Eventos em casa ou salão"
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-b-2 border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-foreground leading-tight">
            Esse rodízio é ideal para:
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {events.map((event, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/10 bg-white shadow-hard hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                <span className="font-bold text-lg md:text-xl text-foreground">{event}</span>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground italic font-medium">
              Se há espaço, a Vero Gusto vai até você.
            </p>

            <Button 
              size="lg" 
              className="h-16 px-10 text-xl rounded-full font-display uppercase tracking-wide shadow-hard hover:translate-y-1 hover:shadow-none transition-all"
            >
              Quero orçamento personalizado
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

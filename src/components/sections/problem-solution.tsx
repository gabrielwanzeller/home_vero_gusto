import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
import { Check } from "lucide-react"

export function ProblemSolution() {
  const solutions = [
    "Equipe no local 2 horas antes do início para a montagem",
    "Pizza preparada, assada e servida durante 3 horas",
    "Cardápio e operação definidos na proposta",
    "Contrato com escopo e condições de pagamento",
    "Forno, mesa de apoio e equipe para o serviço das pizzas",
    "Retirada da estrutura e organização da estação de trabalho"
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Bloco Inferior (A Solução) */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            Uma operação planejada do início ao fim
          </h2>

          <div className="w-full max-w-lg mt-12">
            <ul className="space-y-6 text-left">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-lg md:text-xl font-medium text-foreground">
                  <Check className="w-8 h-8 text-brand-green bg-brand-green/10 rounded-full p-1 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="leading-snug pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Espaçamento antes do CTA */}
        <div className="w-full h-16 md:h-20" />

        {/* Call to Action (Final da Seção) */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-8">
           <p className="font-bold text-2xl md:text-3xl text-foreground">
             Você curte o momento. A gente cuida do resto.
           </p>

           <WhatsAppCtaButton 
             data-track="generate_form"
             size="lg" 
             className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
           >
             Quero um evento sem preocupações
           </WhatsAppCtaButton>
        </div>

      </div>
    </section>
  )
}

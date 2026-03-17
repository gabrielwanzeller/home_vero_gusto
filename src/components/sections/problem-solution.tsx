import { Button } from "@/components/ui/button"
import { X, Check } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    "Chegam atrasados e colocam o evento em risco",
    "Massas prontas de baixa qualidade",
    "Pouca variedade de sabores",
    "Comida fria ou que acaba rápido",
    "Anfitrião resolvendo imprevistos o tempo todo",
    "Desorganização no final"
  ]

  const solutions = [
    "Pontualidade garantida (chegada com antecedência)",
    "Serviço farto e contínuo (pizza sempre quente)",
    "Opções vegetarianas (sob demanda)",
    "Ingredientes premium (fornecedores selecionados)",
    "Contrato claro e transparente (validade jurídica)",
    "Equipe confirmada e comprometida",
    "Retirada total da estrutura após o evento (organização)"
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Bloco Superior (O Problema) */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            O problema dos buffets tradicionais
          </h2>
          <p className="text-xl text-muted-foreground italic mt-4 mb-10">
            Você já viu isso acontecer:
          </p>

          <div className="w-full max-w-lg">
            <ul className="space-y-6 text-left">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-lg md:text-xl font-medium text-foreground">
                  <X className="w-8 h-8 text-red-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="leading-snug pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-bold text-2xl md:text-3xl text-red-600 mt-12">
            Você paga caro e ainda passa estresse.
          </p>
        </div>

        {/* Espaçamento generoso entre blocos */}
        <div className="w-full h-24 md:h-32" />

        {/* Bloco Inferior (A Solução) */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            A solução: tranquilidade total do início ao fim
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

           <Button 
             size="lg" 
             className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
           >
             Quero um evento sem preocupações
           </Button>
        </div>

      </div>
    </section>
  )
}

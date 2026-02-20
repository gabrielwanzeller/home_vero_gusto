import { Button } from "@/components/ui/button"
import { XCircle, CheckCircle } from "lucide-react"

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
    <section className="grid grid-cols-1 lg:grid-cols-2">
      
      {/* Block A: The Problem (Buffets Tradicionais) */}
      <div className="bg-zinc-900 text-white py-20 px-4 md:px-12 lg:py-32 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
        <div className="max-w-xl space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight text-white/95">
              O problema dos buffets tradicionais
            </h2>
            <p className="text-lg text-white/70 italic">
              Você já viu isso acontecer:
            </p>
          </div>

          <ul className="space-y-4">
            {problems.map((item, index) => (
              <li key={index} className="flex items-center justify-end gap-3 text-lg md:text-xl text-white/80">
                <span>{item}</span>
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              </li>
            ))}
          </ul>

          <p className="font-bold text-xl md:text-2xl text-red-400 pt-4">
            Você paga caro e ainda passa estresse.
          </p>
        </div>
      </div>

      {/* Block B: The Solution (Vero Gusto) */}
      <div className="bg-white text-foreground py-20 px-4 md:px-12 lg:py-32 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className="max-w-xl space-y-8">
          <div className="space-y-2">
             <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight">
              A solução: <span className="text-brand-green">tranquilidade</span> total do início ao fim
            </h2>
          </div>

          <ul className="space-y-4">
            {solutions.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-3 text-lg md:text-xl text-muted-foreground">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-4">
            <p className="font-bold text-xl md:text-2xl text-foreground">
              Você curte o momento. A gente cuida do resto.
            </p>
            
            <Button 
               size="lg" 
               className="h-16 px-10 text-xl rounded-full font-display uppercase tracking-wide bg-primary text-white hover:bg-primary/90 shadow-hard hover:translate-y-1 hover:shadow-none transition-all w-full md:w-auto"
            >
              Quero um evento sem preocupações
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}

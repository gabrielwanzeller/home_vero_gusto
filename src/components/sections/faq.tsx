import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Qual o número mínimo de pessoas?",
      answer: "Atendemos eventos a partir de 12 pessoas pagantes."
    },
    {
      question: "O que preciso fornecer de estrutura?",
      answer: "Apenas um ponto de energia 110v ou 220v. Levamos o forno, mesas de apoio, toalhas para nossa estação e todo o material de serviço."
    },
    {
      question: "Vocês atendem em apartamento?",
      answer: "Sim! Nosso forno é elétrico, compacto e não gera fumaça, sendo perfeito para áreas gourmet, varandas e salões de festas."
    },
    {
      question: "Quanto tempo dura o rodízio?",
      answer: "O serviço de rodízio tem duração padrão de 4 horas, servindo pizzas salgadas e doces continuamente."
    },
    {
      question: "Vocês fornecem pratos e talheres?",
      answer: "Levamos guardanapos descartáveis premium. Pratos e talheres não estão inclusos no pacote padrão, pois a proposta é 'finger food' (comer com a mão), mas podemos incluir como opcional.",
      highlight: true
    },
    {
      question: "Crianças pagam?",
      answer: "Crianças até 5 anos não pagam. De 6 a 10 anos pagam metade. A partir de 11 anos, valor integral."
    },
    {
      question: "Quais são os sabores inclusos?",
      answer: "No pacote padrão, incluímos 5 sabores de pizzas salgadas e 2 doces, à sua escolha dentre nossas opções no cardápio."
    },
    {
      question: "Vocês lavam a louça?",
      answer: "Não lavamos pratos ou copos do local. Nossa equipe cuida apenas da limpeza e organização da nossa estação de trabalho e dos nossos utensílios.",
      highlight: true
    },
    {
      question: "Qual a forma de pagamento?",
      answer: "Solicitamos 30% de sinal para reserva da data e o restante até 2 dias antes do evento."
    },
    {
      question: "Atendem fora de Brasília?",
      answer: "Sim, atendemos entorno e cidades próximas mediante taxa de deslocamento. Consulte nossa equipe."
    }
  ]

  return (
    <section id="perguntas" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase leading-none text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-border py-2">
                <AccordionTrigger className="text-left font-bold text-lg md:text-xl text-foreground hover:text-primary transition-colors font-display uppercase tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                  {faq.highlight && (
                    <div className="mt-3 p-4 bg-muted border-l-4 border-primary rounded-r-md">
                      <p className="text-sm font-bold text-foreground italic">
                        Importante: {faq.question.includes("louça") ? "Não realizamos serviço de copa/limpeza do local." : "Item opcional sob consulta."}
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
             <Button 
               size="lg" 
               className="h-20 px-12 text-xl md:text-2xl rounded-full font-display uppercase tracking-wide shadow-hard hover:translate-y-1 hover:shadow-none transition-all"
               variant="primary"
             >
               Fale com a equipe e garanta sua data
             </Button>
        </div>

      </div>
    </section>
  )
}

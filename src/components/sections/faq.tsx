import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
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
      answer: "Atendemos eventos a partir de 15 pessoas pagantes. O valor por pessoa pode variar conforme a quantidade de convidados."
    },
    {
      question: "O que preciso fornecer de estrutura?",
      answer: (
        <>
          Precisamos apenas de uma pia com água. Levamos o forno, mesas de apoio e todo o material necessário para o serviço.
          <br />
          Caso não seja permitido o uso de botijão de gás no local, será necessário disponibilizar um ponto de energia 220V com tomada de 20A para o funcionamento do forno elétrico.
        </>
      )
    },
    {
      question: "Vocês atendem em apartamento?",
      answer: "Sim! Temos forno elétrico, compacto e não gera fumaça, sendo perfeito para áreas gourmet, varandas e salões de festas."
    },
    {
      question: "Quanto tempo dura o rodízio?",
      answer: "O serviço de rodízio tem duração padrão de 4 horas, servindo pizzas salgadas e doces continuamente."
    },
    {
      question: "Vocês fornecem pratos e talheres?",
      answer: "Sim. Pratos e talheres estão inclusos no pacote padrão do rodízio. Copos para bebidas não estão inclusos.",
      highlight: true
    },
    {
      question: "Crianças pagam?",
      answer: "Crianças até 6 anos não pagam. De 7 a 10 anos pagam metade. A partir de 11 anos, valor integral."
    },
    {
      question: "Quais são os sabores inclusos?",
      answer: (
        <>
          No pacote padrão incluímos <strong>6 entradas, 12 sabores de pizzas salgadas e 4 sabores de pizzas doces</strong>, à sua escolha dentre as opções disponíveis em nosso cardápio.
          <br /><br />
          Esse é o pacote padrão para eventos <strong>acima de 35 pessoas</strong>. Para eventos menores, o cardápio pode sofrer algumas adaptações.
        </>
      ),
      highlight: true
    },
    {
      question: "Vocês lavam a louça?",
      answer: "Não lavamos pratos ou copos do local. Nossa equipe cuida apenas da limpeza e organização da nossa estação de trabalho e dos nossos utensílios.",
      highlight: true
    },
    {
      question: "Qual a forma de pagamento?",
      answer: "Para reservar a data, solicitamos uma entrada. Para eventos acima de 50 pessoas, a entrada é de 35% do valor total. Para eventos de até 49 pessoas, a entrada é de 50% do valor total. O restante é pago no final do evento."
    },
    {
      question: "Atendem fora de Brasília?",
      answer: "Sim, atendemos entorno e cidades próximas mediante taxa de deslocamento. Consulte nossa equipe."
    }
  ]

  return (
    <section id="perguntas" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
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
             <WhatsAppCtaButton 
               size="lg" 
               className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
               variant="primary"
             >
               Fale com a equipe e garanta sua data
             </WhatsAppCtaButton>
        </div>

      </div>
    </section>
  )
}

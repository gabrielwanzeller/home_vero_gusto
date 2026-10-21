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
      answer: "O mínimo é de 20 adultos pagantes em dias úteis e 25 adultos pagantes nos finais de semana."
    },
    {
      question: "O que preciso fornecer de estrutura?",
      answer: (
        <>
          Precisamos de uma pia com água e levamos nossa mesa de apoio e a estrutura de produção.
          <br />
          Quando for utilizado o forno elétrico, o local precisa disponibilizar alimentação 220 V e tomada dedicada de 20 A, sem adaptador.
        </>
      )
    },
    {
      question: "Vocês atendem em apartamento?",
      answer: "Sim! Temos forno elétrico, compacto e não gera fumaça, sendo perfeito para áreas gourmet, varandas e salões de festas."
    },
    {
      question: "Quanto tempo dura o rodízio?",
      answer: "A duração padrão é de 3 horas. Eventos com 4 horas podem ser contratados sob consulta. Nossa equipe chega 2 horas antes do início para montar a operação."
    },
    {
      question: "Vocês fornecem pratos e talheres?",
      answer: "Incluímos pratos, talheres, copos descartáveis e garçons para servir as pizzas. Bebidas e garçom exclusivo para bebidas são adicionais. Pratos e talheres para bolo e taças ficam por conta do cliente.",
      highlight: true
    },
    {
      question: "Crianças pagam?",
      answer: "Crianças até 5 anos não pagam. De 6 a 10 anos, o valor depende da proposta. A partir de 11 anos, pagam integral."
    },
    {
      question: "Quais são os sabores inclusos?",
      answer: (
        <>
          O cardápio contratado pode variar conforme a quantidade de pessoas e será definido na proposta. As opções publicadas são referências; não prometemos que todas serão servidas em todos os eventos.
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
      answer: "Após a assinatura do contrato, a entrada é de 50% para eventos de até 50 pessoas e 35% para eventos acima de 50 pessoas. O saldo é pago no evento. Também há Pix parcelado, com quitação antes do evento, e cartão em até 12 vezes, com taxas."
    },
    {
      question: "Atendem fora de Brasília?",
      answer: "Sim. Atendemos todas as regiões do Distrito Federal e Entorno, sem taxa de deslocamento."
    },
    {
      question: "Qual é a capacidade de atendimento?",
      answer: "Atendemos eventos de até 100 pessoas. Para até 110 pessoas, consulte a equipe para avaliarmos a operação."
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
               data-gtm="generate_form"
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

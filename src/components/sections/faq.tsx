import { WhatsAppCtaButton } from '@/components/ui/whatsapp-cta-button'
import { faqs } from '@/lib/business'

export function FAQ() {
  return (
    <section id="perguntas" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center mb-12 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">Perguntas frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map(faq => <details key={faq.question} className="border-b-2 border-border py-2 group">
            <summary className="cursor-pointer py-5 font-display font-bold text-lg md:text-xl uppercase tracking-wide hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{faq.question}</summary>
            <p className="text-muted-foreground text-base leading-relaxed pb-5">{faq.answer}</p>
          </details>)}
        </div>
        <div className="text-center mt-12"><WhatsAppCtaButton data-track="generate_form" size="lg" className="w-full md:w-auto h-auto min-h-16 py-4 px-8 text-lg md:text-xl whitespace-normal rounded-full">Falar com a equipe sobre meu evento</WhatsAppCtaButton></div>
      </div>
    </section>
  )
}

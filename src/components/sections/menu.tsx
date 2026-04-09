import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
import { Leaf, Flame, Candy } from "lucide-react"

export function Menu() {
  return (
    <section id="cardapio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-primary leading-tight">
            Sabores que encantam
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            O cardápio é ajustado junto com você, conforme perfil do evento e preferências dos convidados.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Card 1: Entradas */}
          <div className="bg-white border-2 border-foreground rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform overflow-hidden relative">
            <div className="flex items-center gap-3 border-b-2 border-border pb-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center border-2 border-brand-green">
                 <Leaf className="w-5 h-5 text-brand-green" />
               </div>
               <h3 className="font-display text-3xl uppercase font-bold text-foreground">Entradas</h3>
            </div>
            
            <ul className="space-y-3">
              {[
                "Cestinha de pastel com patê",
                "Rotolino de calabresa",
                "Rotolino de queijo com geleia",
                "Rotolino de queijo com pesto",
                "Rotolino de frango com catupiry",
                "Rotolino "
              ].map((item, i) => (
                <li key={i} className="text-lg font-medium text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Pizzas Salgadas */}
          <div className="bg-white border-2 border-foreground rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform overflow-hidden relative">
            <div className="flex items-center gap-3 border-b-2 border-border pb-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                 <Flame className="w-5 h-5 text-primary" />
               </div>
               <h3 className="font-display text-3xl uppercase font-bold text-foreground">Salgadas</h3>
            </div>
            
            <ul className="space-y-3">
              {[
                "Marguerita com pesto", "Calabresa tradicional", "Frango com catupiry", 
                "Portuguesa", "Quatro queijos", "Diavoletta", "Calabresa com geleia de pimenta",
                "Carne seca com catupiry", "Abobrinha com gorgonzola", "Milho com bacon e catupiry", "Carne seca com banana da terra e mel"
              ].map((item, i) => (
                <li key={i} className="text-lg font-medium text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Pizzas Doces */}
          <div className="bg-white border-2 border-foreground rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform overflow-hidden relative">
            <div className="flex items-center gap-3 border-b-2 border-border pb-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500">
                 <Candy className="w-5 h-5 text-orange-500" />
               </div>
               <h3 className="font-display text-3xl uppercase font-bold text-foreground">Doces</h3>
            </div>
            
            <ul className="space-y-3">
              {[
                "Banana com canela", 
                "Banana com doce de leite",
                "Banana com chocolate", 
                "Chocolate com morango", 
                "Romeu e Julieta",
                "Chocolate com chocolate branco"                
              ].map((item, i) => (
                <li key={i} className="text-lg font-medium text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="text-center">
            <WhatsAppCtaButton 
              data-gtm="generate_form"
              size="lg" 
              className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
            >
              Montar meu cardápio personalizado
            </WhatsAppCtaButton>
        </div>

      </div>
    </section>
  )
}

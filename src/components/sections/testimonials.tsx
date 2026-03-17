import { Button } from "@/components/ui/button"
import { PlayCircle, Star } from "lucide-react"

export function Testimonials() {
  const videos = [1, 2, 3]
  
  const reviews = [
    {
      quote: "A massa é incrível, leve e saborosa. Todo mundo comentou. Foi sucesso total.",
      author: "Fernanda M.",
      detail: "Asa Sul | Evento familiar"
    },
    {
      quote: "Pizza incrível. Atendimento impecável. Profissionalismo do início ao fim.",
      author: "Carlos A.",
      detail: "Lago Sul | Evento corporativo"
    }
  ]

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Video Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {videos.map((item) => (
            <div 
              key={item}
              className="relative aspect-[9/16] bg-black/5 rounded-xl border-2 border-foreground shadow-hard overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform"
            >
               <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                 <PlayCircle className="w-16 h-16 text-white drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform" />
               </div>
               <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold drop-shadow-md">
                 Depoimento em Vídeo {item}
               </div>
            </div>
          ))}
        </div>

        {/* Text Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-foreground rounded-xl p-8 shadow-hard flex flex-col justify-between"
            >
              <div className="space-y-4">
                 <div className="flex gap-1">
                   {[1, 2, 3, 4, 5].map((star) => (
                     <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                   ))}
                 </div>
                 <p className="text-lg font-medium italic text-foreground leading-relaxed">
                   "{review.quote}"
                 </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-bold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
            <Button 
              size="lg" 
              className="h-20 px-10 md:px-14 text-xl md:text-2xl rounded-full font-display uppercase tracking-wider"
            >
              Quero no meu evento
            </Button>
        </div>

      </div>
    </section>
  )
}

import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
import { Star } from "lucide-react"

export function Testimonials() {

  const videos = [
    {
      id: "tatiana",
      name: "Tatiana",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/b9d586e6-c016-479f-a609-43eef0d66fea?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "romulo",
      name: "Rômulo",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/22834627-c5c2-44ef-ad37-035f3916c12d?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "clau",
      name: "Clau",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/18b8a698-435a-4653-adae-6a985270f3f2?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "andre",
      name: "André",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/95d6dac0-ffac-4854-a8d2-29e20cb7b095?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    }
  ]

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
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Video Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {videos.map((item, index) => (
            <div
              key={item.id}
              className={`relative aspect-9/16 bg-black/5 rounded-xl border-2 border-foreground shadow-hard overflow-hidden group hover:-translate-y-1 transition-transform ${
                videos.length === 4 && index === 3 ? "lg:col-start-2" : ""
              }`}
            >
               <iframe
                 src={item.iframeUrl}
                 loading="lazy"
                 className="absolute top-0 left-0 w-full h-full border-0"
                 allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                 allowFullScreen
               />
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
            <WhatsAppCtaButton
              data-gtm="generate_form"
              size="lg"
              className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
            >
              Quero no meu evento
            </WhatsAppCtaButton>
        </div>

      </div>
    </section>
  )
}

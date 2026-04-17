import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"

export function TestimonialsSecond() {

  const videos = [
    {
      id: "keyla",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/114be906-48de-4485-a7c7-4a223100899b?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "kelly",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/c0ca109b-7cc9-40c1-b0c4-509f66490837?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "thiago",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/4d2677a0-7e67-4c55-afb7-eab6604345f9?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    }
  ]

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            Mais dos nossos clientes
          </h2>
        </div>

        {/* Video Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {videos.map((item) => (
            <div
              key={item.id}
              className="relative aspect-9/16 bg-black/5 rounded-xl border-2 border-foreground shadow-hard overflow-hidden group hover:-translate-y-1 transition-transform"
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

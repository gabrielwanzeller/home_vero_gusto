import { VideoPreview } from "@/components/ui/video-preview"
import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"

export function Gallery() {

  const galleryItems = [
    {
      id: "video01",
      poster: "/videos/gallery/video01/thumb01-medium.jpeg",
      caption: "Aniversário — Park Way",
      description: "Montagem do forno pela equipe.",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/bd510645-2c30-4da1-9b63-bf23d76c2178?autoplay=false&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "video02",
      poster: "/videos/gallery/video02/thumb02-medium.jpeg",
      caption: "Aniversário — Jardim Botânico",
      description: "Pizza fatiada na bandeja para servir.",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/cddb3e39-0854-45db-ba3e-2ed45640909f?autoplay=false&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "video03",
      poster: "/videos/gallery/video03/thumb03-medium.jpeg",
      caption: "Encontro de amigos — Setor Park Sul",
      description: "Corte de uma pizza no evento.",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/21712349-92b0-4f82-8cf8-2f0b2bed5e4b?autoplay=false&loop=false&muted=false&preload=false&responsive=false"
    }
  ]

  return (
    <section id="eventos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-5 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            Um pouco do nosso sabor em vídeo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Registros de eventos atendidos pela Vero Gusto no Distrito Federal. Cada vídeo identifica o tipo de encontro e a localidade.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="min-w-0 bg-white rounded-xl border-2 border-foreground shadow-hard overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-9/16 bg-black/5">
                <VideoPreview src={item.iframeUrl} poster={item.poster} title={item.caption} showTitle={false} />
              </div>
              <figcaption className="p-5 space-y-2">
                <h3 className="font-display text-2xl font-bold uppercase leading-tight">{item.caption}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
            <WhatsAppCtaButton 
              data-track="generate_form"
              size="lg" 
              className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
            >
              Quero levar esse sabor pro meu evento
            </WhatsAppCtaButton>
        </div>

      </div>
    </section>
  )
}

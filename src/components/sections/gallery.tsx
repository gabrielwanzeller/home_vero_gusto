"use client"

import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"

export function Gallery() {

  const galleryItems = [
    {
      id: "video01",
      caption: "Aniversário — Park Way",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/bd510645-2c30-4da1-9b63-bf23d76c2178?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "video02",
      caption: "Aniversário — Jardim Botânico",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/cddb3e39-0854-45db-ba3e-2ed45640909f?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    },
    {
      id: "video03",
      caption: "Encontro de amigos — Setor Park Sul",
      iframeUrl: "https://player.mediadelivery.net/embed/634467/21712349-92b0-4f82-8cf8-2f0b2bed5e4b?autoplay=true&loop=false&muted=false&preload=false&responsive=false"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            Um pouco do nosso sabor em vídeo
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item) => (
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

               {/* Caption Box */}
               <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-foreground p-4 pointer-events-none">
                 <p className="text-sm font-bold text-foreground text-center uppercase tracking-wide">
                   {item.caption}
                 </p>
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
              Quero levar esse sabor pro meu evento
            </WhatsAppCtaButton>
        </div>

      </div>
    </section>
  )
}

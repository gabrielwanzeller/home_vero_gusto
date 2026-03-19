"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Gallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const galleryItems = [
    {
      id: "video01",
      caption: "Aniversário — Park Way",
      thumb: "/videos/gallery/video01/thumb01-medium.jpeg",
      video: "/videos/gallery/video01/video01.MP4"
    },
    {
      id: "video02",
      caption: "Aniversário — Jardim Botânico",
      thumb: "/videos/gallery/video02/thumb02-large.jpeg",
      video: "/videos/gallery/video02/video02.MP4"
    },
    {
      id: "video03",
      caption: "Encontro de amigos — Setor Park Sul",
      thumb: "/videos/gallery/video03/thumb03-large.jpeg",
      video: "/videos/gallery/video03/video03.MP4"
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
              className="relative aspect-[9/16] bg-black/5 rounded-xl border-2 border-foreground shadow-hard overflow-hidden group hover:-translate-y-1 transition-transform"
            >
               {activeVideo === item.id ? (
                 <video 
                   src={item.video}
                   poster={item.thumb}
                   controls
                   autoPlay
                   playsInline
                   className="w-full h-full object-cover"
                 />
               ) : (
                 <div 
                   className="absolute inset-0 cursor-pointer"
                   onClick={() => setActiveVideo(item.id)}
                 >
                   {/* Thumbnail */}
                   <img 
                     src={item.thumb} 
                     alt={`Galeria ${item.caption}`} 
                     className="w-full h-full object-cover"
                   />
                   
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-black transition-transform group-hover:scale-110">
                       <Play className="w-6 h-6 text-primary fill-current ml-1" />
                     </div>
                   </div>

                   {/* Caption Box */}
                   <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-foreground p-4">
                     <p className="text-sm font-bold text-foreground text-center uppercase tracking-wide">
                       {item.caption}
                     </p>
                   </div>
                 </div>
               )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
            <Button 
              size="lg" 
              className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
            >
              Quero levar esse sabor pro meu evento
            </Button>
        </div>

      </div>
    </section>
  )
}

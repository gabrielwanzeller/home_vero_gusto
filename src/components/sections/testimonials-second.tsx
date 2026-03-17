"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Star } from "lucide-react"

export function TestimonialsSecond() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const videos = [
    {
      id: "kelly",  
      name: "Kelly",
      thumb: "/videos/testimonials/Kelly/thumb-kelly.png",
      video: "/videos/testimonials/Kelly/video-kelly.mp4"
    },
    {
      id: "thiago",
      name: "Thiago",
      thumb: "/videos/testimonials/Thiago/thumb-thiago.png",
      video: "/videos/testimonials/Thiago/video-thiago.MOV"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16">
          {videos.map((item) => (
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
                     alt={`Depoimento ${item.name}`} 
                     className="w-full h-full object-cover"
                   />
                   
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-black transition-transform group-hover:scale-110">
                       <Play className="w-6 h-6 text-primary fill-current ml-1" />
                     </div>
                   </div>
                 </div>
               )}

               {/* Name Badge */}
               {activeVideo !== item.id && (
                 <div className="absolute top-4 left-4 right-4 pointer-events-none">
                   <span className="bg-black/70 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full drop-shadow-md backdrop-blur-md">
                     {item.name}
                   </span>
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
              Quero no meu evento
            </Button>
        </div>

      </div>
    </section>
  )
}

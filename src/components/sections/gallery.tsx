import { Button } from "@/components/ui/button"

export function Gallery() {
  const images = [
    {
      caption: "Evento corporativo — Lago Sul — 60 convidados",
      aspect: "aspect-[4/5]"
    },
    {
      caption: "Aniversário — Águas Claras — 40 convidados",
      aspect: "aspect-[4/5]"
    },
    {
      caption: "Casamento intimista — Park Way — 80 convidados",
      aspect: "aspect-[4/5]"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
            Um pouco do nosso sabor em imagens
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`relative ${img.aspect} bg-muted rounded-xl border-2 border-foreground shadow-hard overflow-hidden group cursor-pointer`}
            >
               {/* Placeholder Image Background */}
               <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <span className="font-display text-4xl uppercase text-foreground/10 rotate-[-15deg]">
                    Foto {index + 1}
                  </span>
               </div>
               
               {/* Caption Box */}
               <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-foreground p-4">
                 <p className="text-sm font-bold text-foreground text-center uppercase tracking-wide">
                   {img.caption}
                 </p>
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
              Quero levar esse sabor pro meu evento
            </Button>
        </div>

      </div>
    </section>
  )
}

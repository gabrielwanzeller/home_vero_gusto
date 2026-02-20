import { Button } from "@/components/ui/button"

export function Authority() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-[0.9] text-foreground">
              Quem está por trás da <span className="text-primary">Vero Gusto</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Vero Gusto nasceu com a missão de levar pizza napolitana de verdade para eventos em Brasília. Cada massa passa por <span className="font-bold text-foreground">48 horas de fermentação natural</span>. Cada evento é tratado como <span className="font-bold text-foreground">único</span>, com foco em qualidade, organização e experiência completa.
            </p>
            
            <div className="border-l-4 border-primary pl-6 py-2 mt-6">
              <p className="font-bold text-xl md:text-2xl italic text-foreground">
                "Mais do que pizza, entregamos tranquilidade e uma experiência que impressiona."
              </p>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] bg-muted rounded-2xl border-4 border-foreground shadow-hard rotate-3 hover:rotate-0 transition-transform duration-500 group overflow-hidden">
               {/* Fallback pattern/content */}
               <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                  <span className="font-display text-3xl uppercase text-foreground/20 text-center px-4">
                    Foto do Fundador / Pizza
                  </span>
               </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-green/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}

import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
import { CheckCircle, Clock, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-primary-foreground selection:bg-white selection:text-primary">
      

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-14">
          
          {/* Main Headline Group */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/30 bg-white/10 text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Disponível para Brasília & Entorno
            </div>
             
            <h1 className="text-6xl md:text-8xl lg:text-7xl font-display font-bold uppercase leading-[0.85] tracking-tighter text-white drop-shadow-xl">
              Pizza <br className="md:hidden" /> napolitana <br className="md:hidden" /> em eventos
            </h1>
             
            <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
              O rodízio de pizza artesanal mais autêntico do DF. <br className="hidden md:inline"/> 
              Levamos toda a estrutura, você só aproveita.
            </p>

            {/* Video Placeholder */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-muted rounded-2xl shadow-hard overflow-hidden group cursor-pointer border-2 border-black rotate-1 hover:rotate-0 transition-all duration-300">
              {/* Fallback Image / Background */}
              <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                <div className="text-center opacity-20">
                    <span className="block font-display text-4xl uppercase mb-2">Video Placeholder</span>
                    <span className="text-sm">Pizza em forno a lenha</span>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-black transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-primary fill-current ml-1" />
                </div>
              </div>

               {/* Overlay Badge */}
              <div className="absolute bottom-6 -right-2 bg-white border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 rotate-2">
                  <span className="font-bold text-sm uppercase flex items-center gap-2 text-red-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
                    Veja como funciona
                  </span>
              </div>
            </div>
            
            <p className="text-center text-sm italic text-white/80 mt-2">
              Pizza saindo na hora + serviço contínuo.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            
            <WhatsAppCtaButton 
              variant="outline"
              data-gtm="generate_form"
              size="lg" 
              className="w-full md:w-auto h-16 px-10 text-xl rounded-full font-display uppercase tracking-wide border-2 border-white text-white hover:bg-white hover:text-primary transition-colors bg-transparent"
            >
              Ver disponibilidade para minha data
            </WhatsAppCtaButton>
          </div>

          {/* Micro-proofs (Pill Style) */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
                "+150 Eventos",
                "Avaliação 5.0 ★",
                "Longa fermentação"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/5 text-white font-bold text-sm md:text-base shadow-lg">
                  <CheckCircle className="w-4 h-4 fill-primary text-white" />
                  <span>{item}</span>
                </div>
              ))}
          </div>
          
           {/* Scarcity */}
          <div className="text-white/80 text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span>Trabalhamos com apenas 1 evento por dia para garantir qualidade total.</span>
          </div>
          {/* <div className="text-white/80 text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span>Sextas e sábados costumam esgotar com 2 a 4 semanas de antecedência.</span>
           </div> */}

        </div>
      </div>
    </section>
  )
}


import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
import { CheckCircle, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary text-white selection:bg-white selection:text-primary">
      <link rel="preload" as="image" href="/videos/hero/poster-v2.webp" />
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-black/10 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest">
              <span className="size-2 rounded-full bg-white" aria-hidden="true" />
              Disponível para Brasília &amp; Entorno
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold uppercase leading-[1.05] tracking-tight text-white">
              Rodízio de pizza para eventos em Brasília
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white max-w-2xl mx-auto leading-relaxed">
              Pizza no estilo napolitano, preparada e assada no local. Levamos a estrutura e a equipe para você aproveitar.
            </p>
            <WhatsAppCtaButton variant="outline" data-track="generate_form" data-placement="hero" size="lg" className="w-full sm:w-auto h-auto min-h-16 py-4 px-7 whitespace-normal text-lg md:text-xl rounded-full font-display uppercase tracking-wide border-2 border-white text-primary bg-white hover:bg-white/95">
              Ver disponibilidade para minha data
            </WhatsAppCtaButton>
            <p className="text-sm text-white">A consulta não confirma disponibilidade ou reserva.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              {["+120 eventos realizados", "Atendimento em todo o DF e Entorno", "Massa com biga e até 48h"].map(item => (
                <div key={item} className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-bold">
                  <CheckCircle className="size-4 shrink-0" aria-hidden="true" /><span>{item}</span>
                </div>
              ))}
            </div>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-white">
              <Clock className="size-4 mt-1 shrink-0" aria-hidden="true" />
              Dedicamos a operação a um evento por dia. A reserva da data é formalizada em contrato e confirmada com a entrada.
            </p>
          </div>
          <figure className="w-full max-w-sm mx-auto space-y-4">
            <div className="relative aspect-[4/5] bg-muted rounded-2xl shadow-hard overflow-hidden border-2 border-foreground rotate-1">
              <video controls playsInline preload="none" poster="/videos/hero/poster-v2.webp" className="absolute inset-0 h-full w-full object-cover" aria-label="Vero Gusto preparando pizzas em um evento">
                <source src="/videos/hero/video-hero-v2.mp4" type="video/mp4" />
                Seu navegador não suporta este vídeo. Use o link da versão original abaixo.
              </video>
              <div className="absolute bottom-6 -right-2 bg-white text-primary border-2 border-foreground px-4 py-2 rounded-lg shadow-hard pointer-events-none">
                <span className="font-bold text-sm uppercase">Veja como funciona</span>
              </div>
            </div>
            <figcaption className="text-center text-sm text-white space-y-2">
              <p>Pizza saindo na hora + serviço contínuo.</p>
              <a href="/videos/hero/video-hero.mp4" target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4">Assistir à versão original do vídeo</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}


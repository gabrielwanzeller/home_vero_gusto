import { WhatsAppCtaButton } from "@/components/ui/whatsapp-cta-button"
import { MapPin } from "lucide-react"
import { business } from "@/lib/business"

export function Region() {
  return (
    <section id="regiao" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Copy */}
          <div className="space-y-6 min-w-0">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground leading-tight">
              Atendemos todo o <span className="text-primary">Distrito Federal</span> e Entorno
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {business.serviceText} Atendemos casas, apartamentos, salões de condomínio e empresas.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Levamos o serviço a localidades como Águas Claras, Park Way, Jardim Botânico, Lago Sul, Lago Norte, Noroeste, Park Sul, Plano Piloto, Guará e Taguatinga.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Esses são exemplos e não limitam a cobertura. {business.coverageText}
            </p>

            <div className="inline-block bg-orange-100 text-orange-700 font-bold px-4 py-3 rounded-md border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Agenda limitada, principalmente em finais de semana.
            </div>

            <div className="pt-4">
              <WhatsAppCtaButton
                data-gtm="generate_form"
                size="lg"
                className="w-full max-w-full md:w-auto h-auto min-h-20 py-4 px-6 md:px-14 text-lg md:text-2xl whitespace-normal break-words rounded-full font-display uppercase tracking-wider"
              >
                Consultar agenda para minha região
              </WhatsAppCtaButton>
            </div>
          </div>

          {/* Referência da base, sem apresentar um ponto de atendimento ao público. */}
          <figure className="relative min-w-0 space-y-5">
            <div className="relative aspect-video bg-white rounded-2xl border-4 border-foreground shadow-hard flex items-center justify-center overflow-hidden">
               {/* Map graphic */}
               <iframe title="Mapa de referência da base de produção da Vero Gusto"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491462.2314588756!2d-48.12676839836883!3d-15.774996780720564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd612474a795f353%3A0x365d3e8e1af77c72!2sVero%20Gusto%20Pizzaria%20-%20Rod%C3%ADzio%20em%20Casa%20Bras%C3%ADlia!5e0!3m2!1spt-BR!2sbr!4v1775945693656!5m2!1spt-BR!2sbr"
                 className="absolute inset-0 w-full h-full pointer-events-none"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               />

               <div className="relative z-10 flex flex-col items-center animate-bounce pointer-events-none">
                  <MapPin className="w-16 h-16 text-primary fill-current drop-shadow-md" aria-hidden="true" />
                  <div className="w-4 h-1.5 bg-black/20 rounded-full blur-[2px] mt-1" />
               </div>
            </div>
            <figcaption className="text-base text-muted-foreground leading-relaxed">
              {business.productionBaseText} O atendimento acontece no local do seu evento.
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  )
}

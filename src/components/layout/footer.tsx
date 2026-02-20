import { Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t-4 border-foreground pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
           {/* Brand */}
           <div className="space-y-4 text-center md:text-left">
             <Link href="/" className="font-display font-bold text-3xl uppercase tracking-tight text-white block">
               Vero Gusto
             </Link>
             <p className="text-zinc-400 text-sm max-w-xs mx-auto md:mx-0">
               Rodízio de pizza artesanal para eventos em Brasília – DF.
             </p>
           </div>

           {/* Contact */}
           <div className="space-y-4 text-center">
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-zinc-500">
                Contato
              </h3>
              <div className="space-y-2">
                 <p className="font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                   (61) 98449-4617
                 </p>
                 <p className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                   contato@verogusto.com.br
                 </p>
              </div>
           </div>

           {/* Social */}
           <div className="space-y-4 text-center md:text-right flex flex-col items-center md:items-end">
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-zinc-500">
                Redes Sociais
              </h3>
              <Link 
                href="#" 
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@verogusto.eventos</span>
              </Link>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 Vero Gusto. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}

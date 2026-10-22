import Link from 'next/link'
import { ReviewForm } from '@/components/avaliacao/review-form'
import { Footer } from '@/components/layout/footer'
import { pageMetadata } from '@/lib/seo'
import { SeoPage } from '@/components/seo-page'

export const metadata = pageMetadata('/avalie', 'Avalie sua experiência com a Vero Gusto', 'Compartilhe sua experiência em um evento Vero Gusto. Acesse o perfil no Google ou converse diretamente com a equipe pelo WhatsApp.')

export default function AvaliePage() {
  return <div className="min-h-screen bg-background">
    <main id="conteudo" className="max-w-2xl mx-auto px-4 py-14 space-y-10 text-center">
      <SeoPage path="/avalie" name="Avalie a Vero Gusto" />
      <Link href="/" className="text-primary font-bold underline underline-offset-4">Vero Gusto — início</Link>
      <h1 className="font-display text-4xl md:text-5xl font-bold">Sua experiência com a Vero Gusto</h1>
      <p className="text-lg text-muted-foreground">Foi um prazer fazer parte do seu evento. Agora queremos ouvir você.</p>
      <ReviewForm />
    </main>
    <Footer />
  </div>
}

"use client"

import { useState } from 'react'
import { StarRating } from '@/components/avaliacao/StarRating'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { business, whatsappUrl } from '@/lib/business'
import { trackEvent } from '@/lib/measurement'

export function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const message = `Olá! Quero compartilhar um feedback sobre meu evento com a Vero Gusto.\n\n${rating ? `Nota: ${rating}/5\n` : ''}${feedback.trim()}`
  return <div className="space-y-10">
    <section className="space-y-5 bg-secondary p-6 md:p-8 border-2 border-foreground rounded-xl shadow-hard">
      <h2 className="font-display text-3xl font-bold">Sua opinião no Google</h2>
      <p className="text-lg text-muted-foreground">Conte como foi sua experiência. Todos os clientes podem publicar sua avaliação, sem precisar escolher uma nota aqui.</p>
      <Button asChild size="lg" className="rounded-full min-h-14 h-auto py-4 px-6 whitespace-normal"><a href={business.googleProfile} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('google_review_click')}>Abrir perfil e avaliar no Google</a></Button>
      <p className="text-sm text-muted-foreground">No perfil, selecione a opção de escrever uma avaliação.</p>
    </section>
    <section className="space-y-5 border-2 border-border rounded-xl p-6 md:p-8">
      <h2 className="font-display text-3xl font-bold">Converse com a equipe</h2>
      <p className="text-muted-foreground">Se preferir, compartilhe sua opinião diretamente pelo WhatsApp.</p>
      <fieldset className="space-y-3"><legend className="font-bold mb-3">Como foi sua experiência? (opcional)</legend><StarRating onChange={setRating} className="justify-center" /></fieldset>
      <label htmlFor="feedback" className="block font-bold text-left">Seu comentário</label>
      <Textarea id="feedback" maxLength={2000} className="resize-y min-h-32 text-base" value={feedback} onChange={event => setFeedback(event.target.value)} placeholder="Compartilhe sua experiência" />
      <Button size="lg" asChild className="rounded-full h-auto min-h-14 px-6 py-4 whitespace-normal"><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Continuar com o feedback no WhatsApp</a></Button>
      <p className="text-sm text-muted-foreground">A mensagem será preparada no WhatsApp. Conclua o envio por lá para que a equipe receba.</p>
    </section>
  </div>
}

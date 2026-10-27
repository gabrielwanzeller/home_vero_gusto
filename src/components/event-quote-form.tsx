"use client"

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { business, minimumAdultsForDate, quoteIssue, quoteMessage, quoteTemplate, whatsappUrl } from '@/lib/business'
import { trackEvent } from '@/lib/measurement'

export function EventQuoteForm({ testMode = false }: { testMode?: boolean }) {
  const [date, setDate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [minimumConfirmed, setMinimumConfirmed] = useState(false)
  const [error, setError] = useState<{ field: string; message: string } | null>(null)
  const [continueUrl, setContinueUrl] = useState('')
  const [message, setMessage] = useState('')
  const section = useRef<HTMLElement>(null)
  const started = useRef(false)
  const lastSubmission = useRef('')
  const minimum = date ? minimumAdultsForDate(date) : business.minWeekday

  useEffect(() => {
    if (!section.current) return
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        trackEvent('vg_quote_view', { form_name: 'event_quote' })
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(section.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const quote = {
      date: String(data.get('date') || ''),
      guests: Number(data.get('quantity')),
      minimumConfirmed: data.get('minimumConfirmed') === 'on',
      location: String(data.get('location') || ''),
      style: String(data.get('style') || ''),
    }
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
    const issue = quoteIssue(quote, today)
    if (issue) {
      setError(issue)
      const field = form.elements.namedItem(issue.field)
      if (field instanceof HTMLElement) field.focus()
      return
    }
    setError(null)
    const fingerprint = JSON.stringify(quote)
    if (lastSubmission.current === fingerprint) return
    lastSubmission.current = fingerprint
    const text = quoteMessage(quote)
    const url = whatsappUrl(text)
    setMessage(text)
    setContinueUrl(url)
    trackEvent('vg_quote_valid', { form_name: 'event_quote', capacity_consultation: quote.guests > business.capacity ? 'yes' : 'no' })
    if (!testMode) {
      try { window.open(url, '_blank', 'noopener,noreferrer') } catch { /* O link de continuidade permanece disponível. */ }
    }
  }

  const inputClass = 'w-full min-w-0 h-12 px-4 rounded-xl border-2 border-border bg-muted/50 focus:bg-white focus:border-primary text-base'
  const fieldError = (field: string) => error?.field === field
  const describedBy = (field: string, description?: string) => [description, fieldError(field) ? 'quote-error' : null].filter(Boolean).join(' ') || undefined

  return (
    <section ref={section} id="solicitar" className="max-w-xl w-full mx-auto rounded-2xl border-2 border-foreground bg-white p-6 md:p-8 shadow-hard space-y-6 scroll-mt-28">
      <h2 className="font-display text-3xl font-bold uppercase">Dados para sua proposta</h2>
      <p className="text-muted-foreground">Preencha os dados e continue no WhatsApp. A consulta não confirma disponibilidade ou reserva.</p>
      {testMode && <p className="rounded-lg border border-primary bg-red-50 p-3 text-sm text-foreground">Modo de teste: a mensagem será mostrada aqui, sem abrir o WhatsApp ou enviar conversões às contas de anúncios.</p>}
      <form action="https://api.whatsapp.com/send/" method="get" noValidate onSubmit={handleSubmit} className="space-y-5" onChange={() => {
        if (!started.current) { started.current = true; trackEvent('vg_quote_start', { form_name: 'event_quote' }) }
        setContinueUrl(''); setMessage(''); setError(null); lastSubmission.current = ''
      }}>
        <input type="hidden" name="phone" value={business.whatsapp} /><input type="hidden" name="text" value={quoteTemplate} />
        <div><label htmlFor="date" className="font-bold block mb-2">Data do evento</label><input id="date" name="date" type="date" required value={date} onChange={event => { setDate(event.target.value); setMinimumConfirmed(false) }} aria-invalid={fieldError('date')} aria-describedby={describedBy('date')} className={inputClass} /></div>
        <div><label htmlFor="quantity" className="font-bold block mb-2">Quantidade de convidados</label><input id="quantity" name="quantity" type="number" inputMode="numeric" required min={minimum} max={business.capacityOnRequest} step="1" value={quantity} onChange={event => setQuantity(event.target.value)} aria-invalid={fieldError('quantity')} aria-describedby={describedBy('quantity', 'capacity-description')} placeholder="Ex.: 40" className={inputClass} /><p id="capacity-description" className="mt-2 text-sm text-muted-foreground">Informe o total de pessoas presentes. {business.capacityText}</p>{Number(quantity) > business.capacity && <p role="status" className="mt-2 font-bold text-primary">Eventos de 101 a 110 pessoas dependem de avaliação da equipe e confirmação na proposta.</p>}</div>
        <div className="rounded-xl border-2 border-border bg-muted/40 p-4 space-y-3">
          <label htmlFor="minimumConfirmed" className="flex items-start gap-3 cursor-pointer"><input id="minimumConfirmed" name="minimumConfirmed" type="checkbox" checked={minimumConfirmed} onChange={event => setMinimumConfirmed(event.target.checked)} required className="mt-1 size-5 shrink-0 accent-primary" aria-invalid={fieldError('minimumConfirmed')} aria-describedby={describedBy('minimumConfirmed', 'minimum-description')} /><span className="font-bold">Confirmo que meu evento terá pelo menos {minimum} adultos pagantes.</span></label>
          <p id="minimum-description" className="text-sm text-muted-foreground">{business.minimumText} <a href={whatsappUrl('Olá! Quero esclarecer a contagem de pessoas para meu evento.')} target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline underline-offset-4" data-placement="minimum_help">Tirar dúvida com a equipe</a>.</p>
        </div>
        <div><label htmlFor="location" className="font-bold block mb-2">Local do evento</label><input id="location" name="location" required maxLength={120} aria-invalid={fieldError('location')} aria-describedby={describedBy('location')} placeholder="Ex.: Águas Claras, Brasília" className={inputClass} /></div>
        <div><label htmlFor="style" className="font-bold block mb-2">Tipo de evento</label><input id="style" name="style" required maxLength={120} aria-invalid={fieldError('style')} aria-describedby={describedBy('style')} placeholder="Ex.: aniversário ou confraternização" className={inputClass} /></div>
        {error && <p id="quote-error" role="alert" className="font-bold text-red-800">{error.message}</p>}
        <button type="submit" className="w-full min-h-14 rounded-full bg-primary text-white font-display font-bold text-lg uppercase px-5 py-3 shadow-hard focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Continuar no WhatsApp</button>
        {continueUrl && <div role="status" className="space-y-3 text-sm text-muted-foreground"><p>{testMode ? 'Mensagem preparada para conferência. Nenhum aplicativo foi aberto.' : 'Conclua o envio da mensagem no WhatsApp. Se a conversa não abriu, use o link abaixo.'}</p>{testMode && <pre className="whitespace-pre-wrap break-words rounded-lg bg-muted p-4 font-sans text-foreground">{message}</pre>}<a className="underline font-bold text-primary" href={continueUrl} target="_blank" rel="noopener noreferrer" data-placement="quote_fallback">Abrir conversa no WhatsApp</a></div>}
      </form>
      <noscript><p className="text-sm text-muted-foreground">Informe os dados do evento diretamente no <a href={whatsappUrl(quoteTemplate)} className="underline font-bold text-primary">WhatsApp da Vero Gusto</a>.</p></noscript>
    </section>
  )
}

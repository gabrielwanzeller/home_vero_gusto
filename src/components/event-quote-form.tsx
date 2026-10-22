"use client"

import React, { useState } from "react"
import { business, minimumAdultsForDate, quoteError, quoteMessage, whatsappUrl } from "@/lib/business"
import { trackEvent } from "@/lib/measurement"

export function EventQuoteForm() {
  const [date, setDate] = useState("")
  const [quantity, setQuantity] = useState("")
  const [total, setTotal] = useState("")
  const [error, setError] = useState("")
  const [continueUrl, setContinueUrl] = useState("")
  const minimum = date ? minimumAdultsForDate(date) : business.minWeekday

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const quote = {
      date: String(data.get("date") || ""),
      adults: Number(data.get("quantity")),
      guests: Number(data.get("total")),
      location: String(data.get("location") || ""),
      style: String(data.get("style") || ""),
    }
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date())
    const validationError = quoteError(quote, today)
    if (validationError) {
      setError(validationError)
      return
    }
    setError("")
    const url = whatsappUrl(quoteMessage(quote))
    setContinueUrl(url)
    trackEvent("send_form_whatsapp", { form_name: "event_quote", capacity_consultation: quote.guests > business.capacity ? "yes" : "no" })
    window.open(url, "_blank", "noopener,noreferrer")
  }


  const inputClass = "w-full min-w-0 h-12 px-4 rounded-xl border-2 border-border bg-muted/50 focus:bg-white focus:border-primary text-base"

  return (
    <section id="solicitar" className="max-w-xl mx-auto rounded-2xl border-2 border-foreground bg-white p-6 md:p-8 shadow-hard space-y-6">
      <h2 className="font-display text-3xl font-bold uppercase">Dados para sua proposta</h2>
      <p className="text-muted-foreground">Preencha os dados e continue no WhatsApp para conversar com a equipe. O envio não confirma disponibilidade ou reserva.</p>
        <form action="https://api.whatsapp.com/send/" method="get" onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="phone" value={business.whatsapp} /><input type="hidden" name="text" value="Olá! Quero consultar um orçamento para meu evento." />
          <div><label htmlFor="date" className="font-bold block mb-2">Data do evento</label><input id="date" name="date" type="date" required onInput={event => setDate(event.currentTarget.value)} onChange={event => setDate(event.target.value)} className={inputClass} /></div>
          <div><label htmlFor="quantity" className="font-bold block mb-2">Adultos pagantes</label><input id="quantity" name="quantity" type="number" inputMode="numeric" required min={minimum} max={business.capacityOnRequest} step="1" value={quantity} onChange={event => setQuantity(event.target.value)} aria-describedby="minimum-description" placeholder="Ex.: 30" className={inputClass} /><p id="minimum-description" className="mt-2 text-sm text-muted-foreground">{business.minimumText}</p></div>
          <div><label htmlFor="total" className="font-bold block mb-2">Total de convidados</label><input id="total" name="total" type="number" inputMode="numeric" required min={Number(quantity) || minimum} max={business.capacityOnRequest} step="1" value={total} onChange={event => setTotal(event.target.value)} aria-describedby="capacity-description" placeholder="Ex.: 40" className={inputClass} /><p id="capacity-description" className="mt-2 text-sm text-muted-foreground">{business.capacityText}</p>{Number(total) > business.capacity && <p role="status" className="mt-2 font-bold text-primary">Eventos de 101 a 110 pessoas dependem de avaliação da equipe e confirmação na proposta.</p>}</div>
          <div><label htmlFor="location" className="font-bold block mb-2">Bairro e cidade do evento</label><input id="location" name="location" required maxLength={120} placeholder="Ex.: Águas Claras, Brasília" className={inputClass} /></div>
          <div><label htmlFor="style" className="font-bold block mb-2">Tipo de evento</label><input id="style" name="style" required maxLength={120} placeholder="Ex.: aniversário ou confraternização" className={inputClass} /></div>
          {error && <p role="alert" className="font-bold text-red-700">{error}</p>}
          <button type="submit" data-gtm="send_form_whatsapp" className="w-full min-h-14 rounded-full bg-primary text-white font-display font-bold text-lg uppercase px-5 py-3 shadow-hard focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Continuar no WhatsApp</button>
          {continueUrl && <p role="status" className="text-sm text-muted-foreground">Conclua o envio da mensagem no WhatsApp. Se a conversa não abriu, <a className="underline font-bold text-primary" href={continueUrl} target="_blank" rel="noopener noreferrer">abra por este link</a>.</p>}
        </form>
      <noscript><p className="text-sm text-muted-foreground">Se o navegador estiver sem JavaScript, informe os dados do evento diretamente no <a href={whatsappUrl("Olá! Quero consultar um orçamento para meu evento.")} className="underline font-bold text-primary">WhatsApp da Vero Gusto</a>.</p></noscript>
    </section>
  )
}

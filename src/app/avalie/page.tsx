"use client"

import * as React from "react"
import { StarRating } from "@/components/avaliacao/StarRating"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Send, Star, ExternalLink, MessageCircle } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function AvaliePage() {
  const [rating, setRating] = React.useState(0)
  const [feedback, setFeedback] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  const handleFeedbackSubmit = () => {
    console.log("Feedback enviado:", { rating, feedback })
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      
      <main className="w-full max-w-2xl mx-auto space-y-12 text-center flex-1">
        
        {/* Header - Always Visible */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-display text-4xl md:text-5xl uppercase leading-[0.9]">
            Sua experiência com a <span className="text-primary">Vero Gusto</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Foi um prazer fazer parte do seu evento. Agora queremos ouvir você.
          </p>
        </div>

        {/* Rating Block */}
        {!submitted && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <p className="font-bold text-xl">Como foi sua experiência?</p>
            <div className="flex justify-center">
              <StarRating onChange={handleRatingChange} />
            </div>
          </div>
        )}

        {/* Condition A: Happy Customer (4-5 Stars) */}
        {rating >= 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500 bg-green-50/50 p-8 rounded-2xl border-2 border-brand-green/20">
            <div className="space-y-2">
              <h2 className="font-display text-3xl text-primary uppercase">
                Que bom saber disso!
              </h2>
              <p className="text-lg text-muted-foreground">
                Sua avaliação ajuda outras pessoas a escolherem com segurança e nos permite continuar crescendo. Leva menos de 30 segundos.
              </p>
            </div>
            
            <Button
              size="lg"
              className="rounded-full shadow-hard h-16 px-8 text-xl font-display uppercase hover:scale-105 transition-transform bg-primary text-white"
              onClick={() => window.open("#", "_blank")}
            >
              <Star className="w-5 h-5 mr-2 fill-current" />
              Avaliar no Google
            </Button>
          </div>
        )}

        {/* Condition B: Needs Improvement (1-3 Stars) */}
        {rating > 0 && rating <= 3 && !submitted && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500 bg-neutral-50 p-8 rounded-2xl border-2 border-border">
            <div className="space-y-2">
              <h2 className="font-display text-3xl uppercase">
                Obrigado por nos contar.
              </h2>
              <p className="text-lg text-muted-foreground">
                Queremos melhorar sempre. O que podemos fazer diferente da próxima vez?
              </p>
            </div>

            <Textarea 
              className="resize-none h-32 text-lg"
              placeholder="Digite seu feedback aqui..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <Button
              size="lg"
              className="rounded-full shadow-hard h-14 px-8 text-lg font-bold bg-foreground text-background hover:bg-foreground/90"
              onClick={handleFeedbackSubmit}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar feedback
            </Button>
          </div>
        )}

        {/* Success Message After Submission */}
        {submitted && (
          <div className="p-8 bg-green-50 border-2 border-brand-green rounded-xl animate-in zoom-in duration-300">
             <h3 className="font-display text-2xl text-brand-green uppercase">Obrigado pelo seu feedback!</h3>
             <p className="text-muted-foreground mt-2">Sua opinião é fundamental para nossa evolução.</p>
          </div>
        )}

        {/* Footer / Sharing Block - Visible AFTER rating */}
        {rating > 0 && (
          <div className="pt-12 space-y-8 animate-in fade-in delay-200 duration-700">
            <div className="w-full h-1 bg-border rounded-full" />
            
            <div className="space-y-4">
              <p className="font-bold text-xl px-4">
                Conhece alguém que também faria um evento com pizza artesanal ao vivo?
              </p>
              <p className="text-muted-foreground">
                Compartilhe nossa página com quem valoriza experiência de verdade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-foreground font-bold h-12 w-full sm:w-auto hover:bg-foreground hover:text-background transition-colors"
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent("Conheça a Vero Gusto: Rodízio de pizza artesanal para eventos em Brasília. https://verogusto.com.br")}`, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Compartilhar no WhatsApp
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full font-bold h-12 w-full sm:w-auto"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Abrir Instagram
                </Button>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="mt-16 text-sm text-muted-foreground text-center px-4">
         Vero Gusto — Rodízio de pizza artesanal para eventos em Brasília
      </footer>

    </div>
  )
}

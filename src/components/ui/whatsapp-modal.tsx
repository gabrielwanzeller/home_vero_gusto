"use client"

import React, { createContext, useContext, useState } from "react"
import { X, Loader2 } from "lucide-react"

interface WhatsAppModalContextData {
  openModal: () => void
  closeModal: () => void
}

const WhatsAppModalContext = createContext<WhatsAppModalContextData>({} as WhatsAppModalContextData)

export function useWhatsAppModal() {
  return useContext(WhatsAppModalContext)
}

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const quantity = formData.get("quantity") as string
    const date = formData.get("date") as string
    const style = formData.get("style") as string

    // Formatar data para padrão brasileiro (DD/MM/YYYY)
    const dateParts = date.split('-')
    const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : date

    const rawMessage = `Olá! Quero fazer um orçamento para meu evento.\n\n- Data: ${formattedDate}\n- Pessoas: ${quantity}\n- Tipo de evento: ${style}`
    const messageContent = encodeURIComponent(rawMessage)
    const whatsappNumber = "5561983202467" 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageContent}`

    // Simulate small loading delay for better perceived value/processing
    setTimeout(() => {
      setIsLoading(false)
      closeModal()
      window.open(whatsappUrl, "_blank")
    }, 800)
  }

  return (
    <WhatsAppModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(20,23,26,1)] border-4 border-foreground p-6 sm:p-8 animate-in zoom-in-95 fade-in duration-200 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors hover:cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6 sm:mb-8 mt-2 sm:mt-0">
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
                Informações do Evento
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Preencha os dados para receber seu orçamento personalizado no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label htmlFor="quantity" className="font-bold text-foreground block text-sm sm:text-base">
                  O evento será para quantas pessoas?
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  required
                  autoFocus
                  placeholder="Ex: 30"
                  min={10}
                  max={200}
                  className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-border bg-muted/50 focus:bg-white focus:border-primary focus:ring-0 transition-colors text-base sm:text-lg"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="font-bold text-foreground block text-sm sm:text-base">
                  Qual a data do evento?
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-border bg-muted/50 focus:bg-white focus:border-primary focus:ring-0 transition-colors text-base sm:text-lg"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="style" className="font-bold text-foreground block text-sm sm:text-base">
                  Qual o estilo do evento?
                </label>
                <input
                  id="style"
                  name="style"
                  type="text"
                  required
                  placeholder="Ex: aniversário, casamento..."
                  className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-border bg-muted/50 focus:bg-white focus:border-primary focus:ring-0 transition-colors text-base sm:text-lg"
                />
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  data-gtm="send_form_whatsapp"
                  disabled={isLoading}
                  className="w-full h-14 sm:h-16 rounded-full bg-primary text-white font-display font-bold text-lg sm:text-xl uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-[4px_4px_0px_0px_rgba(20,23,26,1)] hover:translate-y-1 hover:shadow-none hover:cursor-pointer duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(20,23,26,1)]"
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    "Quero receber meu orçamento"
                  )}
                </button>
                <div className="mt-4 text-center space-y-1">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center justify-center gap-1.5">
                    <span className="text-green-600 font-bold">✔</span> Resposta rápida no WhatsApp
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center justify-center gap-1.5">
                    <span className="text-green-600 font-bold">✔</span> Orçamento sem compromisso
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </WhatsAppModalContext.Provider>
  )
}

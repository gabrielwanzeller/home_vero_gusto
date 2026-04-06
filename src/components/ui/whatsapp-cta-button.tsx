"use client"

import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { useWhatsAppModal } from "./whatsapp-modal"

/**
 * A drop-in replacement for the generic Button that automatically
 * opens the WhatsApp Lead Capture Modal when clicked.
 */
export function WhatsAppCtaButton({ children, ...props }: ButtonProps) {
  const { openModal } = useWhatsAppModal()
  
  return (
    <Button onClick={openModal} {...props}>
      {children}
    </Button>
  )
}

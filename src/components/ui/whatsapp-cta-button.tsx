import { Button, ButtonProps } from "@/components/ui/button"
import Link from "next/link"

// Link nativo para o formulário, inclusive antes do carregamento do JavaScript.
export function WhatsAppCtaButton({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} asChild>
      <Link href="/orcamento#solicitar">{children}</Link>
    </Button>
  )
}

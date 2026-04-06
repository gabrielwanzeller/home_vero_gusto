import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { WhatsAppModalProvider } from '@/components/ui/whatsapp-modal'

const fontBody = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const fontHeading = Oswald({ 
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${fontBody.variable} ${fontHeading.variable} font-sans antialiased`}>
        <WhatsAppModalProvider>
          {children}
          <FloatingWhatsApp />
        </WhatsAppModalProvider>
      </body>
    </html>
  )
}

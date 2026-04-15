import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { WhatsAppModalProvider } from '@/components/ui/whatsapp-modal'
import Script from 'next/script'
import type { Metadata } from 'next'


const fontBody = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const fontHeading = Oswald({ 
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700']
})

export const metadata: Metadata = {
  title: 'Vero Gusto | Rodízio de Pizza para Eventos',
  description: 'Pizza artesanal assada ao vivo no seu evento em Brasília',
  icons: {
    icon: '/images/favicon/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WMKB8GZZ');
          `}
        </Script>
      </head>

      <body className={`${fontBody.variable} ${fontHeading.variable} font-sans antialiased`}>
        
        {/* NOSCRIPT (importante) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMKB8GZZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <WhatsAppModalProvider>
          {children}
          <FloatingWhatsApp />
        </WhatsAppModalProvider>
      </body>
    </html>
  )
}

import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { Measurement } from '@/components/measurement'
import { organizationGraph } from '@/lib/seo'
import { business } from '@/lib/business'
import Script from 'next/script'
import type { Metadata } from 'next'

const fontBody = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const fontHeading = Oswald({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: 'Rodízio de pizza para eventos em Brasília | Vero Gusto', template: '%s | Vero Gusto' },
  description: 'Rodízio de pizza no estilo napolitano para eventos em Brasília, em todo o Distrito Federal e Entorno. Consulte disponibilidade e receba uma proposta.',
  icons: { icon: '/images/favicon/favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${fontBody.variable} ${fontHeading.variable} font-sans antialiased`}>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-foreground focus:p-4 focus:rounded-lg">Pular para o conteúdo</a>
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WMKB8GZZ');
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph).replace(/</g, '\\u003c') }} />
        <noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-WMKB8GZZ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
          <Measurement />
          {children}
          <FloatingWhatsApp />
      </body>
    </html>
  )
}

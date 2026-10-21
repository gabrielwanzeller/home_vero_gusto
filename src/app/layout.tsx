import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { WhatsAppModalProvider } from '@/components/ui/whatsapp-modal'
import Script from 'next/script'
import type { Metadata } from 'next'


const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fontHeading = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.verogusto.com.br'),
  title: { default: 'Rodízio de pizza para eventos em Brasília | Vero Gusto', template: '%s | Vero Gusto' },
  description: 'Rodízio de pizza no estilo napolitano para eventos em Brasília, em todo o Distrito Federal e Entorno. Consulte disponibilidade e receba uma proposta.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'pt_BR', siteName: 'Vero Gusto', url: '/',
    title: 'Rodízio de pizza para eventos em Brasília | Vero Gusto',
    description: 'Pizza no estilo napolitano preparada e assada no local do seu evento.',
    images: [{ url: '/images/authority/fotos-equipe-large.jpeg', width: 1200, height: 800, alt: 'Equipe Vero Gusto em um evento' }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/images/favicon/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Caterer',
    name: 'Vero Gusto',
    url: 'https://www.verogusto.com.br',
    telephone: '+55 61 98320-2467',
    taxID: '55.461.568/0001-00',
    image: 'https://www.verogusto.com.br/images/authority/fotos-equipe-large.jpeg',
    sameAs: ['https://www.instagram.com/verogusto.eventos/'],
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Distrito Federal' }, { '@type': 'Place', name: 'Entorno do Distrito Federal' }],
    description: 'Serviço de rodízio de pizza no estilo napolitano para eventos no Distrito Federal e Entorno.',
    priceRange: 'Sob consulta',
  }
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://player.mediadelivery.net" />
        <link rel="dns-prefetch" href="https://player.mediadelivery.net" />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        
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

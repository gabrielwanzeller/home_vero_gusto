import { Inter, Oswald } from 'next/font/google'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}

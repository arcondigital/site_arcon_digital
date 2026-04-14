import type { Metadata } from 'next'
import { Big_Shoulders, Manrope, DM_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  variable: '--font-big-shoulders',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Arcon Digital — Agência de Marketing Digital',
    template: '%s | Arcon Digital',
  },
  description: 'Agência de marketing digital em João Pessoa, PB. Sites, identidade visual, marketing digital e e-commerce.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://arcondigital.com.br',
    siteName: 'Arcon Digital',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://arcondigital.com.br' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${bigShoulders.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main style={{ overflowX: 'clip', position: 'relative' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

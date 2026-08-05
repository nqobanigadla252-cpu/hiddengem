import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Work_Sans } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A Hidden Gem Guesthouse · Inanda, KwaZulu-Natal',
  description:
    "A small, family-run guesthouse in the hills of Inanda, KwaZulu-Natal — comfortable rooms, honest hospitality, and a warm welcome for every guest.",
  generator: 'v0.app',
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml',
      sizes: 'any',
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#33502b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} bg-background`}>
      <body className="antialiased font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

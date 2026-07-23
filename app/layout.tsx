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
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M24 6L33 20L24 30L15 20Z' fill='%23b4842c'/%3E%3C/svg%3E",
        type: 'image/svg+xml',
      },
    ],
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

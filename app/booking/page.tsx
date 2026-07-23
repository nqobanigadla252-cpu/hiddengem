import type { Metadata } from 'next'
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { site } from '@/lib/site'
import { PageHero } from '@/components/page-hero'
import { BookingForm } from '@/components/booking-form'

export const metadata: Metadata = {
  title: 'Booking · A Hidden Gem Guesthouse',
  description:
    "Book your stay at A Hidden Gem Guesthouse in Inanda — send an enquiry by WhatsApp or email and we'll confirm availability.",
}

export default function BookingPage() {
  return (
    <main>
      <PageHero tag="Booking" title="Let's get your room sorted.">
        Fill in the form and we&apos;ll send your enquiry straight to WhatsApp, or reach us directly
        using the details alongside it. We reply fastest on WhatsApp.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-9">
            <h2 className="text-2xl font-600 text-ink">Booking enquiry</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              This isn&apos;t an instant booking system — it sends your details to us so we can
              confirm availability and get back to you personally.
            </p>
            <BookingForm />
          </div>

          {/* Contact aside */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-secondary/60 p-7">
              <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">
                Prefer to speak to someone?
              </span>
              <h3 className="mt-2 text-xl font-600 text-ink">Call or WhatsApp us directly</h3>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-600 text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp: {site.phoneDisplay}
                </a>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-forest/30 px-5 py-3 text-sm font-600 text-forest transition-colors hover:bg-forest/5"
                >
                  <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-600 text-ink-soft transition-colors hover:text-forest"
                >
                  <Mail className="h-4 w-4" /> {site.email}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.14em] text-gold">
                <Clock className="h-4 w-4" /> Good to know
              </span>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-ink-soft">
                <li>Check-in from 14:00, check-out by 10:00</li>
                <li>30% deposit confirms your booking</li>
                <li>Free cancellation up to 48 hours before</li>
                <li>We usually reply within the hour, 7 days a week</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

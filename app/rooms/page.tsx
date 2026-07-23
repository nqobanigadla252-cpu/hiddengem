import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Users, BedDouble } from 'lucide-react'
import { rooms, site } from '@/lib/site'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Rooms & Rates · A Hidden Gem Guesthouse',
  description:
    'Comfortable, well-kept rooms in Inanda — from the cosy Garden Room to our spacious Family Suite. See rates and book your stay.',
}

export default function RoomsPage() {
  return (
    <main>
      <PageHero tag="Rooms & Rates" title="Rooms made for resting well.">
        Every room is kept spotless and simple, with quality linens and the little comforts that
        matter. Rates are per night and include Wi-Fi and off-street parking.
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-col gap-16">
          {rooms.map((room, i) => (
            <article
              key={room.slug}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${
                  i % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={room.image || '/placeholder.svg'}
                  alt={`${room.name} at A Hidden Gem Guesthouse`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-3xl font-600 text-ink">{room.name}</h2>
                  <span className="whitespace-nowrap text-right">
                    <span className="block text-2xl font-700 text-forest">{room.price}</span>
                    <span className="text-xs font-500 uppercase tracking-wide text-ink-soft">
                      per night
                    </span>
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-gold" /> {room.sleeps}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-gold" /> {room.bed}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-ink-soft">{room.blurb}</p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink">
                      <Check className="h-4 w-4 shrink-0 text-forest" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/booking"
                    className="rounded-full bg-forest px-6 py-3 text-sm font-600 text-primary-foreground transition-colors hover:bg-forest-soft"
                  >
                    Book the {room.name}
                  </Link>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full border border-forest/30 px-6 py-3 text-sm font-600 text-forest transition-colors hover:bg-forest/5"
                  >
                    Ask a question
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bathroom / shared spaces note */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/bathroom.png"
              alt="Clean modern bathroom with a glass walk-in shower and tiled walls"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">
              Bathrooms & extras
            </span>
            <h2 className="mt-3 text-3xl font-600 text-ink">Fresh, modern, and spotless</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Enjoy modern bathrooms with walk-in showers, hot water around the clock, and fresh
              towels for every guest. Our open-plan lounge and kitchenette are there whenever you
              feel like a cup of tea or a quiet evening in.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
              {['Walk-in showers', 'Hot water 24/7', 'Fresh linens & towels', 'Shared lounge & kitchen'].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-forest" /> {f}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

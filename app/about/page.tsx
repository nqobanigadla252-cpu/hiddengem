import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Sparkles, MapPin, HandHeart } from 'lucide-react'
import { site } from '@/lib/site'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'About Us · A Hidden Gem Guesthouse',
  description:
    'A small, family-run guesthouse in Inanda, KwaZulu-Natal. Learn about our story, our values, and the warm welcome we offer every guest.',
}

const values = [
  {
    icon: Heart,
    title: 'Genuine hospitality',
    body: 'We treat every guest like family — because to us, you are. Nothing is too much trouble.',
  },
  {
    icon: Sparkles,
    title: 'Spotlessly clean',
    body: 'Fresh linens, clean rooms and tidy spaces every single time. We never cut corners.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Inanda',
    body: 'We know this valley and love sharing it — the dam, the falls, and the quiet green hills.',
  },
  {
    icon: HandHeart,
    title: 'Personal touch',
    body: 'A real person answers your messages. We help with directions, tips and anything you need.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero tag="About us" title="A little guesthouse with a big heart.">
        {site.tagline}
      </PageHero>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/exterior-porch.png"
              alt="The columned entrance and porch of A Hidden Gem Guesthouse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">Our story</span>
            <h2 className="mt-3 text-3xl font-600 text-ink md:text-4xl">
              Built on a love of home and hills
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              A Hidden Gem started with a simple idea: create the kind of place we&apos;d want to stay
              in ourselves. Somewhere clean and comfortable, where the welcome is warm and the pace is
              gentle — set against the beautiful backdrop of Inanda&apos;s hills.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Today we&apos;re proud to host travellers, families and visitors from near and far.
              Whether you&apos;re here for a night or a week, our goal is the same: that you leave
              feeling rested, looked after, and already planning your next visit.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We&apos;re a genuinely small, family-run guesthouse — so when you message us, you&apos;re
              talking to the people who&apos;ll be welcoming you at the door.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="max-w-xl">
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">
              What we care about
            </span>
            <h2 className="mt-3 text-3xl font-600 text-ink md:text-4xl">
              The things we never compromise on
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-600 text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">
              Where we are
            </span>
            <h2 className="mt-3 text-3xl font-600 text-ink md:text-4xl">Inanda, KwaZulu-Natal</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Tucked into the hills north-west of Durban, Inanda is known for its striking dam,
              hidden waterfalls, and rich history. It&apos;s a place of big skies and green valleys —
              perfect for a restful getaway that still keeps the city within easy reach.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm text-ink">
              <li>• Minutes from Inanda Dam&apos;s viewpoints and water activities</li>
              <li>• Close to local waterfalls and walking trails</li>
              <li>• Easy access to and from greater Durban</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:order-first">
            <Image
              src="/images/waterfall.png"
              alt="A waterfall dropping into a lush forested gorge near Inanda"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-16 text-center">
          <h2 className="text-balance font-serif text-3xl font-600 md:text-4xl">
            Come and be our guest.
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-cream/80">
            We&apos;d love to host you. Reach out with your dates and any questions — we&apos;re happy
            to help you plan the perfect stay.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/booking"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-600 text-accent-foreground transition-colors hover:brightness-95"
            >
              Make a booking
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-600 text-cream transition-colors hover:bg-cream/10"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

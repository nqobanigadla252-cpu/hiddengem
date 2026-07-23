import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Wifi, Coffee, Wind, TreePine, Star } from 'lucide-react'
import { rooms, site } from '@/lib/site'
import { RoomCard } from '@/components/room-card'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/exterior-hillside.png"
            alt="A Hidden Gem Guesthouse set on a green hillside in Inanda under a bright blue sky"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/45 to-forest/25" />
        </div>

        <div className="mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 text-cream">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-xs font-500 uppercase tracking-[0.14em] backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> {site.location}
          </span>
          <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl font-600 leading-[1.05] sm:text-5xl md:text-6xl">
            A quiet corner of the hills, kept just for you.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-cream/85 md:text-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-600 text-accent-foreground transition-colors hover:brightness-95"
            >
              Check availability
            </Link>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-600 text-cream transition-colors hover:bg-cream/10"
            >
              Browse rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome / intro */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">Welcome</span>
            <h2 className="mt-3 text-balance text-3xl font-600 text-ink md:text-4xl">
              Honest hospitality, the way it should be.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              A Hidden Gem is a small guesthouse run by a family who love this part of KwaZulu-Natal.
              We&apos;ve kept things simple and comfortable — bright rooms, clean linens, a proper
              cup of coffee in the morning, and the kind of welcome that makes you feel like you can
              finally exhale.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Whether you&apos;re here to explore Inanda Dam, visit family, or simply slow down for a
              few days, you&apos;ll find a peaceful base with everything you need close at hand.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-forest hover:text-forest-soft"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/lounge-open-plan.png"
              alt="Open-plan lounge with a comfortable sofa, cowhide rug and a kitchen behind"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 sm:grid-cols-4">
          {[
            { icon: Wifi, label: 'Free Wi-Fi', note: 'Throughout the house' },
            { icon: Coffee, label: 'Self-catering', note: 'Kitchen & appliances' },
            { icon: Wind, label: 'Air conditioning', note: 'In select rooms' },
            { icon: TreePine, label: 'Garden & views', note: 'Room to unwind' },
          ].map((a) => (
            <div key={a.label} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                <a.icon className="h-6 w-6" />
              </span>
              <span className="mt-3 font-600 text-ink">{a.label}</span>
              <span className="text-sm text-ink-soft">{a.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">Our rooms</span>
            <h2 className="mt-3 text-3xl font-600 text-ink md:text-4xl">Somewhere comfortable to land</h2>
          </div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-forest hover:text-forest-soft"
          >
            See all rooms <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </section>

      {/* Location feature */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
          <div className="relative min-h-64">
            <Image
              src="/images/inanda-dam.png"
              alt="Aerial view of Inanda Dam winding through the green hills of KwaZulu-Natal"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-sm font-600 uppercase tracking-[0.14em] text-gold">
              The area
            </span>
            <h2 className="mt-3 text-3xl font-600 text-ink">Inanda&apos;s hills & water</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We&apos;re a short drive from Inanda Dam, with its sweeping views, boating and birdlife,
              and close to the waterfalls and walking trails that make this valley special. It&apos;s
              green, calm, and a world away from the city rush.
            </p>
            <Link
              href="/gallery"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-600 text-forest hover:text-forest-soft"
            >
              See the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <div className="flex justify-center gap-1 text-gold-soft">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 text-balance font-serif text-2xl font-500 leading-relaxed md:text-3xl">
            &ldquo;Spotless rooms, the warmest hosts, and a view we didn&apos;t want to leave. Truly
            a hidden gem — we&apos;ll be back.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-500 uppercase tracking-[0.12em] text-cream/70">
            Nomsa &amp; family · Durban
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-secondary/60 px-6 py-14 text-center">
          <h2 className="text-balance text-3xl font-600 text-ink md:text-4xl">
            Ready when you are.
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-ink-soft">
            Send us your dates and we&apos;ll confirm availability personally. We reply fastest on
            WhatsApp — usually within the hour.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/booking"
              className="rounded-full bg-forest px-7 py-3.5 text-sm font-600 text-primary-foreground transition-colors hover:bg-forest-soft"
            >
              Make a booking enquiry
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-forest/30 px-7 py-3.5 text-sm font-600 text-forest transition-colors hover:bg-forest/5"
            >
              WhatsApp {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

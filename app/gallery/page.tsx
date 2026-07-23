import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Gallery · A Hidden Gem Guesthouse',
  description:
    'A look around A Hidden Gem Guesthouse in Inanda — our rooms, living spaces, the house, and the beautiful surrounding hills of KwaZulu-Natal.',
}

type Shot = { src: string; alt: string; span?: string }

const shots: Shot[] = [
  {
    src: '/images/exterior-hillside.png',
    alt: 'The guesthouse on a green hillside under a bright blue sky',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  { src: '/images/bedroom-gold.png', alt: 'King bedroom dressed in gold with African art' },
  { src: '/images/bedroom-teal.png', alt: 'Queen bedroom with a teal velvet headboard' },
  {
    src: '/images/lounge-open-plan.png',
    alt: 'Open-plan lounge with a sofa, cowhide rug and kitchen behind',
    span: 'sm:col-span-2',
  },
  { src: '/images/bedroom-master.png', alt: 'Master bedroom with air conditioning and a soft rug' },
  { src: '/images/bathroom.png', alt: 'Modern bathroom with a glass walk-in shower' },
  {
    src: '/images/lounge-leather.png',
    alt: 'Spacious living area with a brown leather sofa and open kitchen',
    span: 'sm:col-span-2',
  },
  { src: '/images/exterior-porch.png', alt: 'Columned entrance porch with tiled steps' },
  {
    src: '/images/inanda-dam.png',
    alt: 'Aerial view of Inanda Dam winding through green hills',
    span: 'sm:col-span-2',
  },
  {
    src: '/images/waterfall.png',
    alt: 'Aerial view of a waterfall dropping into a forested gorge near Inanda',
    span: 'sm:row-span-2',
  },
]

export default function GalleryPage() {
  return (
    <main>
      <PageHero tag="Gallery" title="A look around the place.">
        From the rooms you&apos;ll stay in to the hills, dam and waterfalls just beyond our door —
        here&apos;s a glimpse of what awaits.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 md:auto-rows-[240px]">
          {shots.map((shot) => (
            <div
              key={shot.src}
              className={`group relative overflow-hidden rounded-2xl ${shot.span ?? ''}`}
            >
              <Image
                src={shot.src || '/placeholder.svg'}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-border bg-secondary/60 px-6 py-12 text-center">
          <h2 className="text-balance text-3xl font-600 text-ink">Picture yourself here.</h2>
          <p className="max-w-md text-pretty leading-relaxed text-ink-soft">
            Photos only go so far — come and see it for yourself. Send us your dates and we&apos;ll do
            the rest.
          </p>
          <Link
            href="/booking"
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-600 text-primary-foreground transition-colors hover:bg-forest-soft"
          >
            Book your stay
          </Link>
        </div>
      </section>
    </main>
  )
}

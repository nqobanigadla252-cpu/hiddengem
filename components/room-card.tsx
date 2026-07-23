import Image from 'next/image'
import Link from 'next/link'
import { BedDouble, Users, ArrowRight } from 'lucide-react'
import type { Room } from '@/lib/site'

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image || '/placeholder.svg'}
          alt={`${room.name} at A Hidden Gem Guesthouse`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-forest/95 px-3 py-1 text-xs font-600 text-cream">
          {room.price} <span className="font-400 text-cream/70">/ night</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-600 text-ink">{room.name}</h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-gold" /> {room.sleeps}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold" /> {room.bed}
          </span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{room.blurb}</p>
        <div className="mt-6 flex items-center justify-between">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-forest hover:text-forest-soft"
          >
            View details <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/booking"
            className="rounded-full bg-gold px-4 py-2 text-sm font-600 text-accent-foreground transition-colors hover:brightness-95"
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  )
}

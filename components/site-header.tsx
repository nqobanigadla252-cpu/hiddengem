'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '@/lib/site'
import { BrandMark } from '@/components/brand-mark'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5"
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark className="h-10 w-10 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-600 text-ink">{site.name}</span>
            <span className="text-[0.7rem] font-500 uppercase tracking-[0.14em] text-gold">
              Guesthouse · Inanda
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-500 transition-colors ${
                    active ? 'text-forest' : 'text-ink-soft hover:text-forest'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              href="/booking"
              className="ml-2 rounded-full bg-forest px-5 py-2.5 text-sm font-600 text-primary-foreground transition-colors hover:bg-forest-soft"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`block rounded-md px-2 py-3 text-base font-500 ${
                      active ? 'text-forest' : 'text-ink-soft'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="py-3">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-forest px-5 py-3 text-center text-sm font-600 text-primary-foreground"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

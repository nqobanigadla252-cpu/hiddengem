import Link from 'next/link'
import { nav, site } from '@/lib/site'
import { BrandMark } from '@/components/brand-mark'

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" dark />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-600">{site.name}</span>
                <span className="text-[0.7rem] font-500 uppercase tracking-[0.14em] text-gold-soft">
                  Guesthouse · Inanda
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">{site.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-600 uppercase tracking-[0.12em] text-gold-soft">Explore</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-600 uppercase tracking-[0.12em] text-gold-soft">
              Get in touch
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a href={`tel:${site.phoneIntl}`} className="text-cream/80 hover:text-cream">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="text-cream/80 hover:text-cream"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-cream/80 hover:text-cream">
                  {site.email}
                </a>
              </li>
              <li className="text-cream/60">{site.location}, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} A Hidden Gem Guesthouse. All rights reserved.</span>
          <span>Built with care in Inanda.</span>
        </div>
      </div>
    </footer>
  )
}

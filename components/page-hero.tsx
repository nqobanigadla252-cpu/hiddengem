export function PageHero({
  tag,
  title,
  children,
}: {
  tag: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-forest text-cream">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="1040" cy="70" r="55" fill="none" stroke="#e8c98a" strokeWidth="1.4" opacity="0.5" />
        <path
          d="M-20 260C160 220 260 290 420 250C580 210 680 280 860 240C1000 210 1100 240 1220 220"
          stroke="#e8c98a"
          strokeWidth="1.6"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M-20 300C160 270 260 330 420 300C580 270 680 320 860 290C1000 270 1100 300 1220 290"
          stroke="#e8c98a"
          strokeWidth="1.6"
          fill="none"
          opacity="0.25"
        />
      </svg>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <span className="text-sm font-600 uppercase tracking-[0.16em] text-gold-soft">{tag}</span>
        <h1 className="mt-3 max-w-2xl text-balance font-serif text-4xl font-600 leading-tight md:text-5xl">
          {title}
        </h1>
        {children ? (
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-cream/80">{children}</p>
        ) : null}
      </div>
    </section>
  )
}

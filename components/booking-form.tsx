'use client'

import { useState } from 'react'
import { rooms, site } from '@/lib/site'

const inputClass =
  'w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-forest focus:ring-2 focus:ring-forest/20'

const labelClass = 'mb-1.5 block text-sm font-600 text-ink'

export function BookingForm() {
  const [status, setStatus] = useState<string>('')
  const [links, setLinks] = useState<{ wa: string; mail: string } | null>(null)

  function buildMessage(data: Record<string, string>) {
    const lines = [
      `New booking enquiry — ${site.fullName}`,
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Room: ${data.room}`,
      `Guests: ${data.guests}`,
      `Check-in: ${data.checkin}`,
      `Check-out: ${data.checkout}`,
      data.notes ? `Notes: ${data.notes}` : '',
    ].filter(Boolean)
    return lines.join('\n')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    const data = {
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      room: String(fd.get('room') || ''),
      guests: String(fd.get('guests') || ''),
      checkin: String(fd.get('checkin') || ''),
      checkout: String(fd.get('checkout') || ''),
      notes: String(fd.get('notes') || '').trim(),
    }

    if (!data.name || !data.phone || !data.room || !data.guests || !data.checkin || !data.checkout) {
      setStatus('Please fill in all the required fields so we can help you properly.')
      setLinks(null)
      return
    }

    if (data.checkout <= data.checkin) {
      setStatus('Your check-out date should be after your check-in date.')
      setLinks(null)
      return
    }

    const message = buildMessage(data)
    const wa = `${site.whatsapp}?text=${encodeURIComponent(message)}`
    const mail = `mailto:${site.email}?subject=${encodeURIComponent(
      `Booking enquiry — ${data.name}`,
    )}&body=${encodeURIComponent(message)}`

    setLinks({ wa, mail })
    setStatus('Your enquiry is ready. Choose how to send it below — WhatsApp is fastest.')

    // Open WhatsApp straight away for convenience.
    window.open(wa, '_blank', 'noopener')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="0XX XXX XXXX"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="checkin" className={labelClass}>
            Check-in date
          </label>
          <input id="checkin" name="checkin" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="checkout" className={labelClass}>
            Check-out date
          </label>
          <input id="checkout" name="checkout" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="room" className={labelClass}>
            Room
          </label>
          <select id="room" name="room" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a room
            </option>
            {rooms.map((r) => (
              <option key={r.slug} value={`${r.name} (${r.price}/night)`}>
                {r.name} — {r.price}/night
              </option>
            ))}
            <option value="Not sure yet — please advise">Not sure yet — please advise</option>
          </select>
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>
            Number of guests
          </label>
          <select id="guests" name="guests" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select
            </option>
            {['1 guest', '2 guests', '3 guests', '4 guests'].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className={labelClass}>
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Arrival time, dietary needs, special occasion..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-forest px-6 py-3.5 text-sm font-600 text-primary-foreground transition-colors hover:bg-forest-soft"
      >
        Send booking request
      </button>

      {status ? (
        <p role="status" aria-live="polite" className="mt-4 text-sm text-ink-soft">
          {status}
        </p>
      ) : null}

      {links ? (
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={links.wa}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-600 text-white transition-transform hover:scale-[1.02]"
          >
            Open in WhatsApp
          </a>
          <a
            href={links.mail}
            className="rounded-full border border-forest/30 px-6 py-3 text-sm font-600 text-forest transition-colors hover:bg-forest/5"
          >
            Send by email instead
          </a>
        </div>
      ) : null}
    </form>
  )
}

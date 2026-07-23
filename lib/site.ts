export const site = {
  name: 'A Hidden Gem',
  fullName: 'A Hidden Gem Guesthouse',
  location: 'Inanda, KwaZulu-Natal',
  phoneDisplay: '063 973 3399',
  phoneIntl: '+27639733399',
  whatsapp: 'https://wa.me/27639733399',
  email: 'Bwandil@gmail.com',
  tagline:
    'A small, family-run guesthouse in the hills of Inanda, KwaZulu-Natal — comfortable rooms, honest hospitality, and a warm welcome for every guest.',
}

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/booking', label: 'Booking' },
]

export type Room = {
  slug: string
  name: string
  price: string
  priceValue: string
  sleeps: string
  bed: string
  image: string
  blurb: string
  features: string[]
}

export const rooms: Room[] = [
  {
    slug: 'garden-room',
    name: 'Garden Room',
    price: 'R750',
    priceValue: 'Garden Room (R750/night)',
    sleeps: 'Sleeps 2',
    bed: 'Queen bed',
    image: '/images/bedroom-teal.png',
    blurb:
      'A calm, uncluttered room with a deep teal velvet headboard, soft linens and a view over the garden. Perfect for a couple looking for a quiet escape.',
    features: ['Queen bed', 'En-suite access', 'Free Wi-Fi', 'Garden outlook'],
  },
  {
    slug: 'hillside-room',
    name: 'Hillside Room',
    price: 'R950',
    priceValue: 'Hillside Room (R950/night)',
    sleeps: 'Sleeps 2',
    bed: 'King bed',
    image: '/images/bedroom-gold.png',
    blurb:
      'Our warmest room, dressed in gold and framed by handpicked African art. A generous king bed and bright, sheer-draped windows make it a treat.',
    features: ['King bed', 'Private en-suite', 'Air conditioning', 'Reading nook'],
  },
  {
    slug: 'family-suite',
    name: 'Family Suite',
    price: 'R1 450',
    priceValue: 'Family Suite (R1 450/night)',
    sleeps: 'Sleeps 4',
    bed: 'King + shared living',
    image: '/images/bedroom-master.png',
    blurb:
      'Space to spread out — a master bedroom with its own air conditioning plus access to the open-plan lounge and kitchenette. Ideal for families.',
    features: ['King bed', 'Air conditioning', 'Lounge & kitchenette', 'Extra bedding'],
  },
]

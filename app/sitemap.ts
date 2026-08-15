import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.hiddenngem.co.za'
  const lastModified = new Date()

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/rooms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/gallery`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${base}/booking`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}

import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'The Skramme Company — AI-Native Holding Company',
  description: 'A holding company for AI-native businesses. Building the infrastructure, tools, and playbooks for the next generation of AI-first companies.',
  keywords: ['AI company', 'AI startup', 'AI productivity tools', 'AI automation', 'holding company'],
  authors: [{ name: 'The Skramme Company' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skramme.co',
    siteName: 'The Skramme Company',
    title: 'The Skramme Company — AI-Native Holding Company',
    description: 'A holding company for AI-native businesses. Building the infrastructure, tools, and playbooks for the next generation of AI-first companies.',
    images: [
      {
        url: 'https://skramme.co/skramme-og.png',
        width: 1200,
        height: 630,
        alt: 'The Skramme Company — AI-Native Holding Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ChanceLoveAi',
    site: '@ChanceLoveAi',
    title: 'The Skramme Company — AI-Native Holding Company',
    description: 'A holding company for AI-native businesses. Building the infrastructure, tools, and playbooks for the next generation of AI-first companies.',
    images: ['https://skramme.co/skramme-og.png'],
  },
  alternates: {
    canonical: 'https://skramme.co',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://skramme.co/#organization',
        name: 'The Skramme Company',
        url: 'https://skramme.co',
        description: 'A holding company for AI-native businesses.',
        sameAs: [
          'https://x.com/ChanceLoveAi',
          'https://x.com/TheWildChancery',
          'https://chancelove.ai',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://skramme.co/#website',
        url: 'https://skramme.co',
        name: 'The Skramme Company',
        publisher: { '@id': 'https://skramme.co/#organization' },
      },
    ],
  }

  return (
    <html lang="en" scroll-behavior="smooth">
      <body className={`${playfair.variable} ${dmSans.variable} bg-black text-off-white font-dm-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

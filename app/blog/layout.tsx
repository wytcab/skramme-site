import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | The Skramme Company',
  description: 'Building AI-native businesses in public. The decisions, the numbers, the experiment. Follow The Skramme Company\'s journey to $500K donated to Water for People.',
  alternates: {
    canonical: 'https://skramme.co/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

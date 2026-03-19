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
  title: 'The Skramme Company',
  description: 'A holding company for AI-native businesses. Built by Machine. Run by Vision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" scroll-behavior="smooth">
      <body className={`${playfair.variable} ${dmSans.variable} bg-black text-off-white font-dm-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

'use client'

interface PortfolioCard {
  title: string
  status: 'live' | 'coming-soon'
  description: string
  ctaText?: string
  ctaLink?: string
}

const cards: PortfolioCard[] = [
  {
    title: 'AI Intern Playbook',
    status: 'live',
    description: 'The practical guide for hiring an AI that actually works in your business. From identity to daily rhythm — everything a business owner needs to make AI a real team member.',
    ctaText: 'Visit ChanceLove.ai →',
    ctaLink: 'https://chancelove.ai',
  },
  {
    title: 'AI Agent Marketplace',
    status: 'coming-soon',
    description: 'A curated marketplace of AI agents, skills, and automation workflows — built for business owners, not engineers.',
  },
  {
    title: 'AI Agent Swarm Protocol',
    status: 'coming-soon',
    description: 'Infrastructure for coordinating multiple AI agents working in parallel toward a shared business goal. The future of AI-native operations.',
  },
  {
    title: 'Token Launch',
    status: 'coming-soon',
    description: 'The Skramme Company\'s public token event. Details to follow.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 py-28 md:py-36">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-5">Portfolio</p>
          <h2 className="section-heading max-w-lg">
            What we&apos;re{' '}
            <em className="text-maroon" style={{ fontStyle: 'italic' }}>building.</em>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-black p-10 flex flex-col gap-6 transition-all duration-200 ${
                card.status === 'live'
                  ? 'hover:bg-white/[0.02]'
                  : 'opacity-50'
              }`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-playfair text-2xl font-bold text-off-white leading-snug">
                  {card.title}
                </h3>
                {card.status === 'coming-soon' && (
                  <span className="font-dm-sans text-xs text-soft-gray/60 border border-white/10 rounded px-2.5 py-1 whitespace-nowrap tracking-wider uppercase flex-shrink-0">
                    Coming Soon
                  </span>
                )}
                {card.status === 'live' && (
                  <span className="font-dm-sans text-xs text-green-400/80 border border-green-600/20 rounded px-2.5 py-1 whitespace-nowrap tracking-wider uppercase flex-shrink-0 bg-green-900/10">
                    Live
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="font-dm-sans text-[16px] text-soft-gray leading-relaxed flex-1">
                {card.description}
              </p>

              {/* CTA */}
              {card.status === 'live' && card.ctaLink && (
                <div>
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-maroon inline-block"
                  >
                    {card.ctaText}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

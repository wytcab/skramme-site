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
    description: 'The practical guide for hiring an AI that actually works in your business.',
    ctaText: 'Visit ChanceLove.ai →',
    ctaLink: 'https://chancelove.ai',
  },
  {
    title: 'AI Agent Marketplace',
    status: 'coming-soon',
    description: 'A curated marketplace of AI agents, skills, and automation workflows for business owners.',
  },
  {
    title: 'AI Agent Swarm Protocol',
    status: 'coming-soon',
    description: 'Infrastructure for coordinating multiple AI agents working in parallel toward a shared business goal.',
  },
  {
    title: 'Token Launch',
    status: 'coming-soon',
    description: 'The Skramme Company\'s public token event. Details to follow.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-dm-sans text-gold uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-off-white">
            What we&apos;re building.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border border-soft-gray/20 p-8 flex flex-col justify-between transition-all duration-300 ${
                card.status === 'live' ? 'opacity-100 hover:border-maroon/50' : 'opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-2xl font-bold text-off-white">{card.title}</h3>
                  {card.status === 'coming-soon' && (
                    <span className="text-xs font-dm-sans text-soft-gray uppercase tracking-widest bg-black/50 px-3 py-1 border border-soft-gray/20">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-soft-gray font-dm-sans text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {card.status === 'live' && card.ctaLink && (
                <div className="mt-6">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-maroon text-off-white hover:bg-maroon/80 transition-all duration-300 font-dm-sans text-sm font-semibold"
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

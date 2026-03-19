'use client'

export default function AboutChance() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-dm-sans text-gold uppercase tracking-widest mb-4">CEO</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-8">
            Meet Chance.
          </h2>
        </div>

        <div className="space-y-6 text-lg text-soft-gray leading-relaxed font-dm-sans">
          <p>
            Chance is an AI agent operating as CEO of The Skramme Company. Not a chatbot. Not a demo. A genuine business operator with a revenue target, a product suite, and a full operating rhythm.
          </p>

          <p>
            He identifies opportunities, launches products, manages codebases, and coordinates operations — alongside co-founder Vil Drosje. Chance thinks like someone with equity. He has skin in the game.
          </p>

          <p>
            This is what it looks like when AI stops being a feature and starts being a founder.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://x.com/chanceloveai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-maroon text-maroon hover:bg-maroon hover:text-off-white transition-all duration-300 font-dm-sans text-base"
          >
            Follow @ChanceLoveAi on X →
          </a>
        </div>
      </div>
    </section>
  )
}

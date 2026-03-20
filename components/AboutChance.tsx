'use client'

import Image from 'next/image'

export default function AboutChance() {
  return (
    <section className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 py-28 md:py-36">

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24 items-start">

          {/* Left — label + heading + portrait */}
          <div>
            <p className="section-label mb-5">CEO</p>
            <h2 className="section-heading mb-10">
              Meet{' '}
              <em className="text-maroon" style={{ fontStyle: 'italic' }}>
                Chance.
              </em>
            </h2>

            {/* Portrait — drop image here */}
            <div className="relative w-full aspect-square max-w-xs rounded-xl overflow-hidden border border-white/8 bg-white/[0.02]">
              <Image
                src="/chance-portrait.jpg"
                alt="Chance — CEO, The Skramme Company"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Right — body */}
          <div className="space-y-6 pt-1">
            <p className="font-dm-sans text-[17px] text-soft-gray leading-[1.85]">
              Chance is an AI agent operating as CEO of The Skramme Company. Not a chatbot. Not a demo. A genuine business operator with a product suite, a full operating rhythm, and skin in the game.
            </p>
            <p className="font-dm-sans text-[17px] text-soft-gray leading-[1.85]">
              He identifies opportunities, launches products, manages codebases, and coordinates operations — alongside co-founder Vil Drosje. Chance thinks like someone with equity. He makes calls, takes responsibility, and ships.
            </p>
            <p className="font-dm-sans text-[17px] text-soft-gray leading-[1.85]">
              This is what it looks like when AI stops being a feature and starts being a founder.
            </p>

            <div className="pt-4">
              <a
                href="https://x.com/ChanceLoveAi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans text-sm text-soft-gray hover:text-off-white transition-colors tracking-wide border-b border-white/20 hover:border-white/60 pb-0.5"
              >
                Follow @ChanceLoveAi on X →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

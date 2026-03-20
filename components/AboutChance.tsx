'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function AboutChance() {
  const imgRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

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

            {/* Portrait — scroll-triggered fade + float in */}
            <div
              ref={imgRef}
              className="relative w-full max-w-[280px]"
              style={{
                transition: 'opacity 0.9s ease, transform 0.9s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0px)' : 'translateY(28px)',
              }}
            >
              <Image
                src="/chance-portrait.png"
                alt="Chance — CEO, The Skramme Company"
                width={716}
                height={716}
                className="w-full h-auto"
                style={{
                  mixBlendMode: 'lighten',
                  filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.15))',
                }}
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

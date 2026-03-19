'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      radius: number; opacity: number
    }> = []

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.4 + 0.15,
      })
    }

    let frame: number
    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(201,168,76,${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        particles.forEach(o => {
          const dx = p.x - o.x
          const dy = p.y - o.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 140) {
            ctx.strokeStyle = `rgba(201,168,76,${(1 - d / 140) * 0.08})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(o.x, o.y)
            ctx.stroke()
          }
        })
      })
      frame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-8 overflow-hidden">
      {/* Animated background — fills the section */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.35 }}
      />

      {/* Gradient fade at bottom so it blends into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Hero content — left-aligned like chancelove.ai */}
      <div className="relative z-10 max-w-3xl ml-8 md:ml-16 lg:ml-24 pt-20">

        <p className="font-dm-sans text-xs font-semibold tracking-widest uppercase text-gold mb-8">
          The Skramme Company
        </p>

        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-off-white leading-[1.1] mb-8">
          Built by Machine.{' '}
          <em className="text-maroon" style={{ fontStyle: 'italic' }}>
            Run by Vision.
          </em>
        </h1>

        <p className="font-dm-sans text-lg md:text-xl text-soft-gray leading-relaxed mb-6 max-w-xl">
          A holding company for AI-native businesses. We don&apos;t use AI as a tool — we build companies where AI is the operator.
        </p>

        <p className="font-dm-sans text-sm text-soft-gray/60 leading-relaxed mb-12 max-w-xl">
          Every product we ship, every company we build, runs on AI at its core.
        </p>

        <button
          onClick={scrollToPortfolio}
          className="font-dm-sans px-7 py-3.5 bg-maroon text-white font-semibold rounded-lg hover:bg-red-900 transition-all duration-200 tracking-wide"
        >
          View Portfolio →
        </button>
      </div>
    </section>
  )
}

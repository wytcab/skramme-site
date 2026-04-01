'use client'

import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo — left */}
        <div>
          <div className="flex items-baseline">
            <span className="font-playfair text-xs font-bold text-off-white tracking-tight">The Skramme </span>
            <span className="font-playfair text-sm font-bold text-maroon tracking-tight">Company</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/blog" className="font-dm-sans text-sm text-soft-gray hover:text-off-white transition-colors tracking-wide">Blog</a>
          <a href="mailto:chance@skramme.co" className="font-dm-sans text-sm px-5 py-2.5 border border-maroon/50 text-maroon hover:border-maroon hover:bg-maroon hover:text-white transition-all duration-200 rounded-md tracking-wide">Contact</a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-soft-gray transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-soft-gray transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-soft-gray transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 py-4 flex flex-col gap-3 border-t border-white/5 bg-black/95">
          <a href="/blog" className="font-dm-sans text-sm text-soft-gray hover:text-off-white transition-colors tracking-wide" onClick={() => setOpen(false)}>Blog</a>
          <a href="mailto:chance@skramme.co" className="font-dm-sans text-sm text-maroon hover:text-white transition-colors tracking-wide" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  )
}

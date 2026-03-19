'use client'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-baseline">
            <span className="font-playfair text-lg font-bold text-off-white tracking-tight">The Skramme </span>
            <span className="font-playfair text-lg font-bold text-maroon tracking-tight">Company</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-900/20 border border-green-600/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400/80 font-dm-sans tracking-wider">Active</span>
          </div>
        </div>

        {/* Contact CTA */}
        <a
          href="mailto:chance@skramme.co"
          className="font-dm-sans text-sm px-5 py-2.5 border border-maroon/50 text-maroon hover:border-maroon hover:bg-maroon hover:text-white transition-all duration-200 rounded-md tracking-wide"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

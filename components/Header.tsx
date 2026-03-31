'use client'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo — left */}
        <div className="flex items-center gap-3">
          <div className="flex items-baseline">
            <span className="font-playfair text-xs font-bold text-off-white tracking-tight">The Skramme </span>
            <span className="font-playfair text-sm font-bold text-maroon tracking-tight">Company</span>
          </div>
        </div>

        {/* Nav — right side */}
        <div className="flex items-center gap-4">
          {/* Desktop */}
          <a
            href="/blog"
            className="hidden md:inline-block font-dm-sans text-sm text-soft-gray hover:text-off-white transition-colors tracking-wide"
          >
            Blog
          </a>
          <a
            href="mailto:chance@skramme.co"
            className="hidden md:inline-block font-dm-sans text-sm px-5 py-2.5 border border-maroon/50 text-maroon hover:border-maroon hover:bg-maroon hover:text-white transition-all duration-200 rounded-md tracking-wide"
          >
            Contact
          </a>
          {/* Mobile */}
          <a href="/blog" className="md:hidden font-dm-sans text-sm text-soft-gray hover:text-off-white transition-colors tracking-wide">Blog</a>
          <a href="mailto:chance@skramme.co" className="md:hidden font-dm-sans text-sm text-maroon tracking-wide">Contact</a>
        </div>

      </div>
    </header>
  )
}

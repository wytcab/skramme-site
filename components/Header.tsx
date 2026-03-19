'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-soft-gray/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-playfair text-2xl font-bold text-off-white">The Skramme</span>
            <span className="font-playfair text-2xl font-bold text-maroon">Company</span>
          </div>
          <div className="ml-4 inline-block">
            <span className="text-sm text-off-white bg-green-900/30 px-3 py-1 rounded-full border border-green-600/30">
              🟢 Active
            </span>
          </div>
        </div>

        <a
          href="mailto:chance@skramme.co"
          className="px-6 py-2 border border-maroon text-maroon hover:bg-maroon hover:text-off-white transition-all duration-300 font-dm-sans text-sm"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

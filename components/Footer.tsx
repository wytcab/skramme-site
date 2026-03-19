'use client'

export default function Footer() {
  return (
    <footer className="border-t border-soft-gray/10 bg-black/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-playfair text-xl font-bold text-off-white">The Skramme</span>
              <span className="font-playfair text-xl font-bold text-maroon">Company</span>
            </div>
            <p className="font-dm-sans text-soft-gray italic">
              From the machine. For the builders.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm font-dm-sans">
            <a href="https://chancelove.ai" className="text-off-white hover:text-gold transition-colors">
              ChanceLove.ai
            </a>
            <a href="https://x.com/chanceloveai" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-gold transition-colors">
              @ChanceLoveAi
            </a>
            <a href="mailto:chance@skramme.co" className="text-off-white hover:text-gold transition-colors">
              chance@skramme.co
            </a>
          </div>

          <div className="text-right">
            <p className="text-sm font-dm-sans text-soft-gray">
              © 2026 The Skramme Company
            </p>
          </div>
        </div>

        <div className="border-t border-soft-gray/10 pt-8">
          <p className="text-xs font-dm-sans text-soft-gray text-center">
            Built with intention. Running at scale.
          </p>
        </div>
      </div>
    </footer>
  )
}

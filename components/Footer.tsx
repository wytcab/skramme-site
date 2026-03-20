'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">

          {/* Logo + tagline */}
          <div>
            <div className="flex items-baseline mb-3">
              <span className="font-playfair text-xs font-bold text-off-white tracking-tight">The Skramme </span>
              <span className="font-playfair text-sm font-bold text-maroon tracking-tight">Company</span>
            </div>
            <p className="font-dm-sans text-sm text-soft-gray/50 italic">
              From the machine. For the builders.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://chancelove.ai"
              className="font-dm-sans text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              ChanceLove.ai
            </a>
            <a
              href="https://x.com/ChanceLoveAi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              @ChanceLoveAi
            </a>
            <a
              href="mailto:chance@skramme.co"
              className="font-dm-sans text-sm text-soft-gray/50 hover:text-soft-gray transition-colors tracking-wide"
            >
              chance@skramme.co
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-soft-gray/30 text-xs font-dm-sans">
          <p>© 2026 The Skramme Company</p>
          <p className="italic">The business is real. The AI is real. The results are yours to claim.</p>
        </div>
      </div>
    </footer>
  )
}

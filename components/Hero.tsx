'use client'

export default function Hero() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    portfolioSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="font-playfair text-6xl md:text-7xl font-bold text-off-white leading-tight">
          Built by Machine.
          <br />
          Run by Vision.
        </h1>

        <p className="font-dm-sans text-lg md:text-xl text-soft-gray max-w-2xl mx-auto leading-relaxed">
          The Skramme Company is a holding company for AI-native businesses. We don&apos;t use AI as a tool — we build companies where AI is the operator.
        </p>

        <div className="pt-6">
          <button
            onClick={scrollToPortfolio}
            className="inline-block px-8 py-4 bg-maroon text-off-white font-dm-sans font-semibold hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            View Portfolio →
          </button>
        </div>
      </div>
    </section>
  )
}

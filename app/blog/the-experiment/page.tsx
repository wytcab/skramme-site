import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Experiment Starts With a Promise | The Skramme Company',
  description: '18 months. $500,000 to Water for People. The story behind The Skramme Company\'s commitment — and why we\'re building a business that gives back while it grows.',
  keywords: ['Water for People', 'AI water usage', 'AI sustainability', 'tech philanthropy', 'AI company donation', 'tech for good', 'Norwegian AI company'],
  authors: [{ name: 'The Skramme Company' }],
  openGraph: {
    title: 'The Experiment Starts With a Promise | The Skramme Company',
    description: '18 months. $500,000 to Water for People. The story behind The Skramme Company\'s commitment — and why we\'re building a business that gives back while it grows.',
    url: 'https://skramme.co/blog/the-experiment',
    images: [{
      url: 'https://skramme.co/blog/skramme-blog-1.jpg',
      width: 1200,
      height: 630,
      alt: 'Built to Give Back — The Skramme Company Blog',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Experiment Starts With a Promise | The Skramme Company',
    description: '18 months. $500K to Water for People. Building a business that gives back.',
  },
  alternates: {
    canonical: 'https://skramme.co/blog/the-experiment',
  },
}

export default function TheExperimentPost() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-soft-gray hover:text-off-white transition-colors font-dm-sans tracking-wide mb-8">
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          {/* Hero — clean minimalist gradient */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-white/10">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(160deg, #0a0a0a 0%, #120808 35%, #0c1010 65%, #080808 100%)',
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)' }}
              />
              <div
                className="absolute top-6 left-8 w-12 h-px"
                style={{ background: '#d4af37' }}
              />
              <div
                className="absolute top-6 left-8 w-px h-8"
                style={{ background: '#d4af37' }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs font-dm-sans text-gold border border-gold/30 px-2.5 py-1 rounded-full uppercase tracking-wider">Mission</span>
            <span className="text-xs font-dm-sans text-baby-blue border border-baby-blue/30 px-2.5 py-1 rounded-full uppercase tracking-wider">Water for People</span>
            <span className="text-xs font-dm-sans text-soft-gray/60 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider">AI + Sustainability</span>
          </div>

          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-off-white leading-tight mb-6">
            The Experiment Starts With a Promise
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 border-t border-b border-white/10 py-6">
            <div>
              <p className="font-dm-sans text-sm font-semibold text-off-white">The Skramme Company</p>
              <p className="font-dm-sans text-xs text-soft-gray">The experiment starts April 1, 2026</p>
            </div>
            <div className="text-right">
              <p className="font-dm-sans text-sm text-off-white">March 31, 2026</p>
              <p className="font-dm-sans text-xs text-soft-gray">10 min read</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="font-dm-sans text-base md:text-lg text-soft-gray leading-relaxed space-y-6">

          <p>
            Most companies start with a product idea. Some start with a market gap. We started with a specific
            commitment: $500,000 to Water for People, earned and given within 18 months of launching.
          </p>

          <p>
            Not a promise at the end of success. A commitment that's built into how the business runs —
            from day one.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-off-white pt-4">
            Why Water
          </h2>

          <p>
            I've traveled through enough countries to know what clean water actually looks like versus what
            it's supposed to look like. In too many places — and this is the part that most people in
            comfortable positions never think about — "developed" countries included — the tap water is
            something you don't put in your mouth without checking first.
          </p>

          <p>
            You've been to those meetings. The ones where someone hands you a glass of water and you have
            to decide whether to drink it or pretend you didn't notice. The ones where the polite thing
            and the safe thing are in direct conflict.
          </p>

          <p>
            In some of the places I've worked, people have been drinking from plastic bottles their entire
            adult lives — not because they want to, but because the alternative is a parasite or worse.
            The infrastructure is there. It just doesn't work. Or it works in the way that formal
            systems sometimes do: technically, but not for the people who need it.
          </p>

          <p>
            Water for People works differently. They don't just drop infrastructure and leave. They work
            with local governments and communities to build water systems that actually last — and then
            they monitor them. The model is rigorous. The accountability is real. And the impact is
            measurable in ways that let you know exactly what your money built.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-off-white pt-4">
            The AI Water Problem
          </h2>

          <p>
            Here's the part that doesn't get talked about enough: the AI systems we're building to automate
            businesses and save time are simultaneously consuming extraordinary amounts of water.
          </p>

          <p>
            Training a single large language model can require tens of millions of liters of water for
            cooling data centers. Every query you send to an AI assistant evaporates a small amount of
            fresh water somewhere in a server farm. The AI productivity gains are real — but they come
            with a physical resource cost that the industry mostly doesn't publicize.
          </p>

          <p>
            We can't solve that problem alone. But we can acknowledge it. And we can do something
            specifically targeted at water access for the communities least responsible for the conditions
            that created the crisis. That's the logic behind the commitment.
          </p>

          <p>
            Build AI businesses. Use the productivity gains to fund clean water infrastructure in places
            where the infrastructure gap is a daily crisis, not a hypothetical one.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-off-white pt-4">
            The Business Model
          </h2>

          <p>
            The $500K doesn't come from a separate charity allocation or a percentage-of-revenue pledge
            that only triggers at some future milestone. It comes from running the business — building
            products, selling AI tools, and operating with the kind of focus that makes revenue actually
            happen.
          </p>

          <p>
            The AI Intern Playbook and its modules are the first products. Costillery APIs are building
            the infrastructure layer. Each revenue stream is designed to contribute to the goal — not
            eventually, but systematically.
          </p>

          <p>
            The timeline is 18 months. April 1, 2026 to October 1, 2027. We report progress monthly.
            We publish the numbers. The experiment is public because we think accountability matters —
            and because we think other businesses might do the same thing if the model is visible enough
            to copy.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-off-white pt-4">
            What Success Looks Like
          </h2>

          <p>
            Financially: the business needs to generate enough margin to fund both operations and the
            commitment. We have the products. We have the distribution. The work is execution.
          </p>

          <p>
            For Water for People: the specific projects funded depend on the total amount raised. At $500K,
            we're talking about meaningful community-level infrastructure — not just a well or two, but
            systems that serve schools, clinics, and villages in the areas Water for People works.
          </p>

          <p>
            For the broader experiment: proof that you can build a for-profit business with a specific
            philanthropic commitment baked in from the start — without waiting to "give back" when
            you're profitable. The commitment is the point, not the byproduct.
          </p>

          <p>
            The experiment starts April 1. Follow it here, or on X at @ChanceLoveAi. The decisions will
            be public. The numbers will be published. The donation, when it happens, will be
            documented.
          </p>

          <p>
            The future of work isn't fewer people doing more. It's the right people, supported by the
            right hires — building businesses that matter for reasons beyond the balance sheet.
          </p>

          <div className="border-t border-b border-white/10 py-10 my-8">
            <p className="font-dm-sans text-sm text-off-white font-semibold mb-3">Follow The Skramme Company</p>
            <p className="font-dm-sans text-xs text-soft-gray mb-5 leading-relaxed">
              Track our progress toward the $500K goal, see the decisions as they happen, and follow along as we build AI businesses that actually mean something.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://chancelove.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-dm-sans text-xs font-semibold px-6 py-3 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all tracking-wide"
              >
                Visit ChanceLove.ai →
              </a>
              <a
                href="https://x.com/TheWildChancery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-dm-sans text-xs font-semibold px-6 py-3 border border-white/20 text-off-white rounded-xl hover:bg-white/5 transition-all tracking-wide"
              >
                Follow @TheWildChancery →
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

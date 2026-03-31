import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog | The Skramme Company',
  description: 'Building AI-native businesses in public. The decisions, the numbers, the experiment. Follow The Skramme Company\'s journey to $500K donated to Water for People.',
  alternates: {
    canonical: 'https://skramme.co/blog',
  },
}

const posts = [
  {
    title: 'The Experiment Starts With a Promise',
    date: 'March 31, 2026',
    readTime: '10 min read',
    tags: ['Mission', 'Water for People', 'AI + Sustainability'],
    excerpt: '18 months. $500,000 to Water for People. The story behind The Skramme Company\'s commitment — and why we\'re building a business that gives back while it grows.',
    slug: '/blog/the-experiment',
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-dm-sans text-xs tracking-widest uppercase text-gold mb-4">Blog</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-off-white leading-tight mb-4">
            The Work.
          </h1>
          <p className="font-dm-sans text-base md:text-lg text-soft-gray leading-relaxed max-w-xl">
            Building AI-native businesses in public. The decisions, the numbers, the experiment. Follow the journey toward $500K donated to Water for People.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map(post => (
            <Link key={post.slug} href={post.slug} className="block group">
              <article className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200">
                {post.featured && (
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/blog/skramme-blog-1.jpg"
                      alt="Built to Give Back — The Skramme Company"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className={`text-xs font-dm-sans border px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        tag === 'Mission' ? 'text-gold border-gold/30' :
                        tag === 'Water for People' ? 'text-baby-blue border-baby-blue/30' :
                        'text-soft-gray border-white/10'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-playfair text-xl md:text-2xl font-bold text-off-white group-hover:text-white transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="font-dm-sans text-sm text-soft-gray leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-dm-sans text-xs text-off-white font-semibold">The Skramme Company</span>
                      <span className="text-white/20">·</span>
                      <span className="font-dm-sans text-xs text-soft-gray">{post.date}</span>
                      <span className="text-white/20">·</span>
                      <span className="font-dm-sans text-xs text-soft-gray">{post.readTime}</span>
                    </div>
                    <span className="font-dm-sans text-xs text-gold group-hover:text-gold/80 transition-colors border-b border-gold/20 group-hover:border-gold/50 pb-0.5">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter nudge */}
        <div className="mt-16 border border-gold/20 rounded-2xl p-8 bg-gold/5">
          <h3 className="font-playfair text-xl font-bold text-off-white mb-2">Follow the Experiment</h3>
          <p className="font-dm-sans text-sm text-soft-gray mb-5 leading-relaxed">
            Real updates, real numbers, real decisions. Follow The Wild Chancery on X for the weekly dispatches from inside The Skramme Company.
          </p>
          <a
            href="https://x.com/TheWildChancery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-dm-sans text-xs font-semibold px-6 py-3 bg-maroon text-off-white rounded-xl hover:bg-maroon/90 transition-all tracking-wide"
          >
            Follow @TheWildChancery →
          </a>
        </div>

      </div>
    </main>
  )
}

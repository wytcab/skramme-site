import Header from '@/components/Header'
import AnimatedBackground from '@/components/AnimatedBackground'
import Hero from '@/components/Hero'
import AboutChance from '@/components/AboutChance'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-black text-off-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutChance />
        <Portfolio />
        <Footer />
      </div>
    </main>
  )
}

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutChance from '@/components/AboutChance'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-off-white">
      <Header />
      <Hero />
      <AboutChance />
      <Portfolio />
      <Footer />
    </main>
  )
}

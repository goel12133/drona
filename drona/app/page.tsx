import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section id="welcome">
        <Hero />
      </section>
      <AboutUs />
      <Footer />
    </main>
  )
}


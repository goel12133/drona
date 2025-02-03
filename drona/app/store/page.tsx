import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function StorePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-grow">
        <Services />
      </div>
      <Footer />
    </main>
  )
}


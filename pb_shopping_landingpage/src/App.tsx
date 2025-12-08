import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solutions from './components/Solutions'
import BetaPromotion from './components/BetaPromotion'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <BetaPromotion />
        <FAQ />
        <Testimonials />
        <Brands />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App





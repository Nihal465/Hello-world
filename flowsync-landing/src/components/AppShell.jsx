import Navbar from './Navbar'
import Hero from './Hero'
import ValueSection from './ValueSection'
import Features from './Features'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'

export default function AppShell() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueSection />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

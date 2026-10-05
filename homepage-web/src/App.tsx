import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Team from './sections/Team'
import CallToAction from './sections/CallToAction'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

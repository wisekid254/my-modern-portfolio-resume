import { useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

import Nav          from './components/Nav/Nav'
import Hero         from './components/Hero/Hero'
import Marquee      from './components/Marquee/Marquee'
import About        from './components/About/About'
import Skills       from './components/Skills/Skills'
import Projects     from './components/Projects/Projects'
import Journey      from './components/Journey/Journey'
import Services     from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact      from './components/Contact/Contact'
import Footer       from './components/Footer/Footer'
import Divider      from './components/ui/Divider'

export default function App() {
  const contactRef = useRef(null)

  useScrollReveal()

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Nav onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <Marquee />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Journey />
      <Divider />
      <Services />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  )
}

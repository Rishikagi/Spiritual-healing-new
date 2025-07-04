import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Hero from './Hero'
import Features from './Features'
import ServicesOffered from './ServicesOffered'
import WhyChooseUs from './WhyChooseUs'
import NumerologyHero from './NumerologyHero'
import UpcomingEvents from './UpcomingEvents'
import TestimonialSection from './TestimonialSection'
import Journey from './Journey'
import Footer from './Footer'
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Navbar should be at the top */}
      <Navbar />

      {/* Sections with IDs for scrolling */}
      <section id="home">
        <Slider />
        <Hero />
      </section>

      <section id="about">
        <WhyChooseUs  />
      </section>

      <section id="services">
        <ServicesOffered />
        
      </section>
      <section>
        <NumerologyHero />
        
      </section>

      <section id="events">
        
        <UpcomingEvents />
      </section>

      <section id="blogs">
        <TestimonialSection />
        <Journey />
      </section>
      <section >
        <ImageSlider/>
      </section>

      {/* Footer (no scroll link needed) */}
      <Footer />
    </div>
  )
}

export default App

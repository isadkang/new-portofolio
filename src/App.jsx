import React, { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import NavbarSection from './components/NavbarSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import TechSection from './components/TechSection'
import SertiSection from './components/SertiSection'
import Portfolio from './components/Portofolio'
import EducSection from './components/EducSection'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  };



  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>

      <div className='font-inter bg-white dark:bg-neutral-900'>

        <NavbarSection isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <div className='w-full'>
          <div data-AOS='fade-down' data-AOS-duration='2000'>
            <HeroSection />
            <AboutSection />
          </div>
          <div data-aos='fade-right' data-aos-duration='1500'>
            <Services />
          </div>
          <div data-aos='zoom-in' data-aos-duration='1500'>
            <SertiSection />
          </div>
          <div data-aos='zoom-in' data-aos-duration='1500'>
            <TechSection />
          </div>
          <div data-aos='zoom-in' data-aos-duration='1500'>
            <Portfolio />
          </div>
          <div data-aos='zoom-in' data-aos-duration='1500'>
            <EducSection />
          </div>
        </div>
        <div>
          <ContactSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <button
        type='button'
        className='fixed bottom-4 right-4  bg-sky-600 text-white text-lg p-2 rounded-full shadow-lg'
        onClick={scrollToTop}
      >
        &#8593;
      </button>
    </>
  );
}

export default App

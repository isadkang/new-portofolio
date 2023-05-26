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
import { MdSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState(null);
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
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button
        type='button'
        onClick={handleTheme}
        className={`fixed z-10 right-2 top-2 ${theme === 'dark' ? 'bg-gray-600' : 'bg-yellow-300'
          } p-1 rounded-full flex items-center`}
      >
        <span
          className={`w-6 h-6 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-yellow-500'
            } flex items-center justify-center`}
        >
          {theme === 'dark' ? (
            <FaMoon/>
          ) : (
            <MdSunny/>
          )}
        </span>
      </button>

      <div className='font-inter bg-white dark:bg-neutral-900'>
        <NavbarSection isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <div className='max-w-5xl mx-auto w-11/12'>
          <HeroSection />
          <AboutSection />
          <Services />
          <SertiSection />
          <TechSection />
          <Portfolio />
          <EducSection />
        </div>
        <ContactSection />
        <Footer />
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

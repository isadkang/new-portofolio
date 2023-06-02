import React from 'react'

const NavbarSection = ({ isOpen, toggleNavbar, theme, handleTheme }) => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    const target = document.querySelector(sectionId)
    if(target){
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      })
    }
  }
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold">
              <img src='/MYLOGO.png' width={80} height={80} alt='logosaya'></img>
            </a>
          </div>
          <div className="flex sm:hidden">
            {/* Tombol toggle navbar pada hp */}
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={handleTheme}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
            </button>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            {/* Tautan navbar */}
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, '#about')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#skill"
              onClick={(event) => scrollToSection(event, '#skill')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </a>
            <a
              href="#sertifikat"
              onClick={(event) => scrollToSections(event, '#sertifikat')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sertifikat
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, '#contact')}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
        {/* Tampilan navbar pada perangkat seluler */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(event) => scrollToSection(event, '#about')}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#skill"
                onClick={(event) => scrollToSection(event, '#skill')}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </a>
              <a
                href="#sertifikat"
                onClick={(event) => scrollToSection(event, '#sertifikat')}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sertifikat
              </a>
              <a
                href="#sertifikat"
                onClick={(event) => scrollToSection(event, '#sertifikat')}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarSection

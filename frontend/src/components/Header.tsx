import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-secondary-deep-blue border-b border-secondary-deep-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 py-2">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity" onClick={closeMobileMenu}>
            <img 
              src="/logo.svg" 
              alt="Parkrun Accessibility" 
              className="h-12 w-12 mr-3 flex-shrink-0"
            />
            <h1 className="text-lg sm:text-xl font-bold text-brand-orange leading-tight text-center">
              Parkrun Accessibility
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-brand-orange' 
                  : 'text-neutral-off-white hover:text-brand-orange'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/search') 
                  ? 'text-brand-orange' 
                  : 'text-neutral-off-white hover:text-brand-orange'
              }`}
            >
              Search
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-brand-orange' 
                  : 'text-neutral-off-white hover:text-brand-orange'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-brand-orange' 
                  : 'text-neutral-off-white hover:text-brand-orange'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-neutral-off-white hover:text-brand-orange hover:bg-white/10 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // X icon when menu is open
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-brand-orange bg-white/10' 
                    : 'text-neutral-off-white hover:text-brand-orange hover:bg-white/10'
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/search" 
                className={`block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive('/search') 
                    ? 'text-brand-orange bg-white/10' 
                    : 'text-neutral-off-white hover:text-brand-orange hover:bg-white/10'
                }`}
                onClick={closeMobileMenu}
              >
                Search
              </Link>
              <Link 
                to="/about" 
                className={`block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-brand-orange bg-white/10' 
                    : 'text-neutral-off-white hover:text-brand-orange hover:bg-white/10'
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-brand-orange bg-white/10' 
                    : 'text-neutral-off-white hover:text-brand-orange hover:bg-white/10'
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
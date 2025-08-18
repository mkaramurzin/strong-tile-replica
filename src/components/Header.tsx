'use client';

import Link from 'next/link';
import { useState } from 'react';
import { businessConfig } from '../config/business';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <div className="text-2xl font-bold text-gray-800">
                <span className="inline-block w-8 h-8 bg-gray-800 mr-2 transform rotate-45"></span>
                {businessConfig.brand.name}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              HOME
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              SERVICES
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              ABOUT
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              PORTFOLIO
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              FAQS
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              CONTACT
            </Link>
            <Link 
              href="/contact" 
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors font-medium"
            >
              FREE ESTIMATE →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                onClick={closeMenu}
              >
                HOME
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                onClick={closeMenu}
              >
                SERVICES
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                onClick={closeMenu}
              >
                ABOUT
              </Link>
              <Link 
                href="/portfolio" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                onClick={closeMenu}
              >
                PORTFOLIO
              </Link>
              <Link 
                href="/faqs" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                onClick={closeMenu}
              >
                FAQS
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                onClick={closeMenu}
              >
                CONTACT
              </Link>
              <Link 
                href="/contact" 
                className="block mx-3 my-2 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors font-medium text-center"
                onClick={closeMenu}
              >
                FREE ESTIMATE →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
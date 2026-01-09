import { Link, usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { url } = usePage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/destination', label: 'Destinations' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => url === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">WG</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">Wanderlust Ghana</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-1 py-2 transition-colors duration-300 ${
                  isActive(link.href) 
                    ? 'text-green-700 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? 'top-3 rotate-45' : 'top-2'
            }`}></span>
            <span className={`absolute left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? 'top-3 -rotate-45' : 'top-3'
            }`}></span>
            <span className={`absolute left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'top-4'
            }`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <ul className="flex flex-col space-y-1 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-green-50 text-green-700 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
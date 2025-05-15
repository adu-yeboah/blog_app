import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-20 flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-green-500 text-2xl mr-2">●</span>
        <h1 className="text-xl font-bold text-gray-800">Wanderlust Ghana</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        <li>
          <Link
            href="/"
            className="hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/destination"
            className="hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
          >
            Destination
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-b-green-800"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/destination"
              className="text-gray-600 hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
              onClick={toggleMenu}
            >
              Destination
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-800 focus:text-gray-800 hover:border-b-2 hover:border-b-green-800 py-1"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
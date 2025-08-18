
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-orange-500">ZeN</span>
              <span className="text-blue-600">Blog</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Bookmarks
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden border-t border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
              end
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bookmarks
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
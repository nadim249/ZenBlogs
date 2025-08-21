import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! This is just a demo - no actual subscription is processed.');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand and Description */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-orange-500">ZeN</span>
            <span className="text-blue-600">Blog</span>
          </h3>
          <p className="text-gray-600 mb-4">
            Your daily source for insightful articles and tech updates.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-4 text-gray-800">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/blogs" className="text-gray-600 hover:text-orange-500 transition-colors">Blogs</Link>
            <Link to="/bookmarks" className="text-gray-600 hover:text-orange-500 transition-colors">Bookmarks</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-4 text-gray-800">Contact</h4>
          <div className="space-y-2 text-gray-600">
            <p>Email: info@zenblog.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-4 text-gray-800">Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600">© {new Date().getFullYear()} <span className="text-orange-500">ZeN</span><span className="text-blue-600">Blog</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
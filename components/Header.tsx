import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-saffron-600 rounded-full flex items-center justify-center text-white">
              <Heart fill="currentColor" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-none">Gau Seva Dham</h1>
              <p className="text-xs text-saffron-600 font-medium tracking-wide">PROTECT • FEED • LOVE</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-saffron-600 font-medium transition-colors">Our Mission</a>
            <a href="#impact" className="text-gray-600 hover:text-saffron-600 font-medium transition-colors">Impact</a>
            <a href="#gallery" className="text-gray-600 hover:text-saffron-600 font-medium transition-colors">Gallery</a>
            <a 
              href="#donate" 
              className="px-6 py-2.5 rounded-full bg-saffron-600 text-white font-semibold hover:bg-saffron-700 transition-all shadow-lg hover:shadow-saffron-500/30 transform hover:-translate-y-0.5"
            >
              Donate Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-saffron-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-saffron-600 hover:bg-orange-50 rounded-md">Our Mission</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-saffron-600 hover:bg-orange-50 rounded-md">Impact</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-saffron-600 hover:bg-orange-50 rounded-md">Gallery</a>
            <div className="pt-4">
              <a 
                href="#donate" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-md bg-saffron-600 text-white font-bold hover:bg-saffron-700 shadow-md"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

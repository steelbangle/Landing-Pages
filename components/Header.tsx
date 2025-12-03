import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-saffron-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <Heart fill="currentColor" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-none font-serif tracking-tight">Gau Seva Dham</h1>
              <p className="text-xs text-saffron-600 font-bold tracking-widest uppercase mt-1">Sanctuary for the Divine</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">Our Mission</a>
            <a href="#impact" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">Impact</a>
            <a href="#gallery" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">Gallery</a>
            <a 
              href="#donate" 
              className="px-8 py-3 rounded-full bg-saffron-600 text-white font-bold hover:bg-saffron-700 transition-all shadow-lg shadow-saffron-500/30 transform hover:-translate-y-0.5 animate-pulse-slow"
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
                className="block w-full text-center px-4 py-4 rounded-xl bg-saffron-600 text-white font-bold hover:bg-saffron-700 shadow-md text-lg"
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
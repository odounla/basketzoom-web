import React, { useState, useEffect } from 'react';
import { ShoppingBasket as Basketball, User, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-primary/95'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50,0 C77.6142,0 100,22.3858 100,50 C100,77.6142 77.6142,100 50,100 C22.3858,100 0,77.6142 0,50 C0,22.3858 22.3858,0 50,0 Z"
                    fill="#1a365d"
                  />
                  <path
                    d="M31.2047,27.1211 C32.7332,26.5473 35.2285,26.9795 35.2285,26.9795 C35.2285,26.9795 43.0566,40.0658 45.3106,38.2063 C48.0851,35.9013 51.9147,32.9093 54.2317,33.7942 C56.7891,34.7774 59.5244,39.1435 59.5244,39.1435 C59.5244,39.1435 65.7759,32.0159 67.8292,32.0159 C71.4478,32.0159 72.8853,38.9863 72.8853,38.9863 C72.8853,38.9863 77.5557,36.8467 78.8941,38.3752 C80.3208,39.9912 79.1797,44.5 77.7529,47.3636 C76.3262,50.2272 69.1626,69.9215 67.7359,71.5375 C66.3091,73.1536 63.0146,73.0556 60.152,72.551 C57.2893,72.0464 43.5278,65.583 38.7305,58.6101 C33.9331,51.6371 28.5332,40.6661 28.2466,37.6045 C27.7832,33.0542 29.6763,27.695 31.2047,27.1211 Z"
                    fill="#ff7a00"
                  />
                </svg>
                <Basketball className="absolute -bottom-1 -right-1 w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">BASKETZOOM</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-1">
              {['Games', 'Schedule', 'News', 'Watch', 'Stats', 'Standings', 'Teams', 'Players'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className={`nav-link ${item === 'Games' ? 'active' : ''}`}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/tv" className="nav-link">
                  <span className="bg-secondary px-2 py-0.5 rounded text-sm font-medium">BASKETZOOM TV</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a href="/signin" className="hidden md:flex items-center text-white hover:text-neutral-300 transition-colors">
              <User className="w-5 h-5 mr-1" />
              <span>Sign In</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark animate-fadeIn">
          <nav className="container py-4">
            <ul className="flex flex-col space-y-2">
              {['Games', 'Schedule', 'News', 'Watch', 'Stats', 'Standings', 'Teams', 'Players', 'BASKETZOOM TV'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className={`block py-2 px-4 text-white hover:bg-primary-light rounded ${
                      item === 'Games' ? 'bg-primary-light' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-neutral-700">
                <a 
                  href="/signin" 
                  className="flex items-center py-2 px-4 text-white hover:bg-primary-light rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  <span>Sign In</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
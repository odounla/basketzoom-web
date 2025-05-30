import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BASKETZOOM ORGANISATION</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-neutral-300 transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-neutral-300 transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-neutral-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">BASKETZOOM INITIATIVE</h3>
            <ul className="space-y-2">
              <li><a href="/tournaments/go" className="hover:text-neutral-300 transition-colors">TOURNOI DES GO</a></li>
              <li><a href="/youth-development" className="hover:text-neutral-300 transition-colors">Youth Development</a></li>
              <li><a href="/community" className="hover:text-neutral-300 transition-colors">Community Outreach</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">ACROSS THE CHAMPIONSHIP</h3>
            <ul className="space-y-2">
              <li><a href="/tournaments/final-4" className="hover:text-neutral-300 transition-colors">FINAL 4</a></li>
              <li><a href="/leagues/centre" className="hover:text-neutral-300 transition-colors">LIGUE REGIONALE DU CENTRE</a></li>
              <li><a href="/leagues/littoral" className="hover:text-neutral-300 transition-colors">LIGUE REGIONALE DU LITTORAL</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">SHOP & SUBSCRIPTIONS</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="hover:text-neutral-300 transition-colors">BASKETZOOM STORES</a></li>
              <li><a href="/subscribe" className="hover:text-neutral-300 transition-colors">BASKETZOOM TV</a></li>
              <li><a href="/merchandise" className="hover:text-neutral-300 transition-colors">Merchandise</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-8 border-t border-neutral-700">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative w-10 h-10 mr-2">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50,0 C77.6142,0 100,22.3858 100,50 C100,77.6142 77.6142,100 50,100 C22.3858,100 0,77.6142 0,50 C0,22.3858 22.3858,0 50,0 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M31.2047,27.1211 C32.7332,26.5473 35.2285,26.9795 35.2285,26.9795 C35.2285,26.9795 43.0566,40.0658 45.3106,38.2063 C48.0851,35.9013 51.9147,32.9093 54.2317,33.7942 C56.7891,34.7774 59.5244,39.1435 59.5244,39.1435 C59.5244,39.1435 65.7759,32.0159 67.8292,32.0159 C71.4478,32.0159 72.8853,38.9863 72.8853,38.9863 C72.8853,38.9863 77.5557,36.8467 78.8941,38.3752 C80.3208,39.9912 79.1797,44.5 77.7529,47.3636 C76.3262,50.2272 69.1626,69.9215 67.7359,71.5375 C66.3091,73.1536 63.0146,73.0556 60.152,72.551 C57.2893,72.0464 43.5278,65.583 38.7305,58.6101 C33.9331,51.6371 28.5332,40.6661 28.2466,37.6045 C27.7832,33.0542 29.6763,27.695 31.2047,27.1211 Z"
                    fill="#1a365d"
                  />
                </svg>
              </div>
              <span className="text-white text-lg font-bold">BASKETZOOM</span>
            </div>
            <p className="text-neutral-300 text-sm text-center md:text-left mt-2">
              © {currentYear} Basketzoom. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-secondary transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-secondary transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" className="text-white hover:text-secondary transition-colors" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
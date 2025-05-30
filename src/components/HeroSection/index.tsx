import React from 'react';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  game: {
    homeTeam: {
      name: string;
      logo: string;
      score: number;
    };
    awayTeam: {
      name: string;
      logo: string;
      score: number;
    };
    status: 'live' | 'final' | 'upcoming';
    summary: string;
  };
  backgroundImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ game, backgroundImage }) => {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-40"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/30 to-neutral-900" />
      
      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-slideUp">
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 bg-secondary/90 rounded-full text-sm font-medium mb-4">
                {game.status === 'live' ? (
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                    LIVE NOW
                  </span>
                ) : game.status === 'final' ? (
                  <span>GAME RECAP</span>
                ) : (
                  <span>UPCOMING GAME</span>
                )}
              </div>
              
              <div className="flex items-center mb-2">
                <div className="flex items-center mr-4">
                  <img src={game.homeTeam.logo} alt={game.homeTeam.name} className="w-12 h-12 md:w-16 md:h-16 object-contain mr-3" />
                  <span className="text-3xl md:text-5xl font-bold">{game.homeTeam.score}</span>
                </div>
                <span className="text-xl md:text-2xl mx-2 font-light text-neutral-400">vs</span>
                <div className="flex items-center ml-4">
                  <span className="text-3xl md:text-5xl font-bold">{game.awayTeam.score}</span>
                  <img src={game.awayTeam.logo} alt={game.awayTeam.name} className="w-12 h-12 md:w-16 md:h-16 object-contain ml-3" />
                </div>
              </div>
              
              <div className="text-lg md:text-xl font-medium mb-4">
                <span>{game.homeTeam.name}</span>
                <span className="mx-2 text-neutral-400">•</span>
                <span>{game.awayTeam.name}</span>
                {game.status === 'final' && <span className="ml-2 text-neutral-400">• Final</span>}
              </div>
            </div>
            
            <p className="text-neutral-300 text-lg mb-6 max-w-lg">{game.summary}</p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/watch" 
                className="btn btn-secondary flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                WATCH
              </a>
              <a 
                href="/box-score" 
                className="btn btn-outline border-white text-white hover:bg-white/20 hover:text-white"
              >
                BOX SCORE
              </a>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/30 transition-colors"></div>
            <div className="play-button animate-pulse-slow group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
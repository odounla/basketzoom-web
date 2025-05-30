import React from 'react';
import { Play } from 'lucide-react';

interface VideoHighlight {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}

interface HighlightsSectionProps {
  highlights: VideoHighlight[];
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ highlights }) => {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">MUST SEE HIGHLIGHTS</h2>
          <a href="/highlights" className="text-primary hover:text-primary-dark font-medium text-sm">
            See more
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {highlights.map(highlight => (
            <div key={highlight.id} className="group animate-fadeIn">
              <div className="video-card mb-2 aspect-video group-hover:shadow-lg transition-shadow">
                <img 
                  src={highlight.thumbnail} 
                  alt={highlight.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="play-button w-12 h-12 group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <Play className="w-6 h-6 text-white" fill="white" />
                </div>
                <div className="video-duration">{highlight.duration}</div>
              </div>
              <h3 className="font-medium line-clamp-2">{highlight.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
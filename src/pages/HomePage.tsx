import React from 'react';
import { ScoreBoard } from '../components/ScoreBoard';
import { HeroSection } from '../components/HeroSection';
import { HighlightsSection } from '../components/HighlightsSection';
import { NewsSection } from '../components/NewsSection';
import { ClubsSection } from '../components/ClubsSection';
import { AnalysisSection } from '../components/AnalysisSection';
import { 
  gameScores, 
  featuredGame, 
  videoHighlights, 
  newsArticles, 
  clubs,
  analysis
} from '../data/mockData';

export const HomePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const heroBackgroundImage = "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  return (
    <div>
      <ScoreBoard 
        games={gameScores}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      
      <HeroSection 
        game={featuredGame} 
        backgroundImage={heroBackgroundImage}
      />
      
      <HighlightsSection highlights={videoHighlights} />
      
      <div className="py-10 bg-neutral-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NewsSection 
                articles={newsArticles.slice(1)} 
                featuredArticle={newsArticles[0]} 
              />
              
              <div className="mt-8">
                <AnalysisSection 
                  title={analysis.title}
                  image={analysis.image}
                  description={analysis.description}
                  points={analysis.points}
                />
              </div>
            </div>
            
            <div>
              <ClubsSection clubs={clubs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
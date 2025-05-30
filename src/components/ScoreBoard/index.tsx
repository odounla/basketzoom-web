import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GameScore {
  id: string;
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
  period?: string;
  timeRemaining?: string;
  date?: string;
}

interface ScoreBoardProps {
  games: GameScore[];
  selectedDate?: Date;
  onDateChange?: (date: Date) => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ 
  games, 
  selectedDate = new Date(),
  onDateChange
}) => {
  const [showScores, setShowScores] = useState(true);
  
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  const changeDate = (days: number) => {
    if (onDateChange) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + days);
      onDateChange(newDate);
    }
  };

  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => changeDate(-1)}
              className="p-1 rounded-full hover:bg-neutral-100"
              aria-label="Previous day"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="relative group">
              <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm font-medium hover:bg-neutral-100">
                {formatDate(selectedDate)}
              </button>
              {/* Calendar dropdown would go here */}
            </div>
            
            <button 
              onClick={() => changeDate(1)}
              className="p-1 rounded-full hover:bg-neutral-100"
              aria-label="Next day"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center">
            <span className="text-sm mr-2">Hide score</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={!showScores}
                onChange={() => setShowScores(!showScores)}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-4 min-w-max">
            {games.map((game) => (
              <div key={game.id} className="w-64 card animate-fadeIn">
                <div className="px-3 py-2 bg-neutral-100 border-b border-neutral-200 text-sm font-medium text-center">
                  {game.status === 'live' ? (
                    <span className="text-error font-semibold flex items-center justify-center">
                      <span className="w-2 h-2 bg-error rounded-full mr-1 animate-pulse"></span>
                      LIVE • {game.period} • {game.timeRemaining}
                    </span>
                  ) : game.status === 'final' ? (
                    <span>Final score</span>
                  ) : (
                    <span>{game.date}</span>
                  )}
                </div>
                
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <img src={game.homeTeam.logo} alt={game.homeTeam.name} className="w-8 h-8 object-contain mr-2" />
                      <span className="font-medium">{game.homeTeam.name}</span>
                    </div>
                    {showScores && (
                      <span className={`text-lg font-bold ${game.homeTeam.score > game.awayTeam.score && game.status === 'final' ? 'text-primary' : ''}`}>
                        {game.homeTeam.score}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={game.awayTeam.logo} alt={game.awayTeam.name} className="w-8 h-8 object-contain mr-2" />
                      <span className="font-medium">{game.awayTeam.name}</span>
                    </div>
                    {showScores && (
                      <span className={`text-lg font-bold ${game.awayTeam.score > game.homeTeam.score && game.status === 'final' ? 'text-primary' : ''}`}>
                        {game.awayTeam.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
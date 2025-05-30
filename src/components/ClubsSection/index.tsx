import React from 'react';

interface Club {
  id: string;
  name: string;
  logo: string;
}

interface ClubsSectionProps {
  clubs: Club[];
}

export const ClubsSection: React.FC<ClubsSectionProps> = ({ clubs }) => {
  return (
    <section className="py-6 bg-white">
      <div className="container">
        <div className="card">
          <div className="p-4 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Clubs Info</h2>
              <a href="/teams" className="text-primary hover:text-primary-dark font-medium text-sm">
                See more
              </a>
            </div>
          </div>
          
          <div>
            {clubs.map(club => (
              <a 
                key={club.id}
                href={`/teams/${club.id}`}
                className="flex items-center p-4 hover:bg-neutral-50 transition-colors border-b border-neutral-200 last:border-0"
              >
                <img src={club.logo} alt={club.name} className="w-10 h-10 object-contain mr-4" />
                <span className="font-medium text-primary">{club.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
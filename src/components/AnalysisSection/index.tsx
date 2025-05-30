import React from 'react';

interface AnalysisItem {
  id: string;
  text: string;
}

interface AnalysisSectionProps {
  title: string;
  image: string;
  description: string;
  points: AnalysisItem[];
}

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({ title, image, description, points }) => {
  return (
    <section className="py-10 bg-neutral-100">
      <div className="container">
        <div className="card">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-xl font-bold">ANALYSIS</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src={image} alt={title} className="w-full h-auto rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-neutral-600">{description}</p>
              </div>
              
              <div className="space-y-4">
                {points.map(point => (
                  <div key={point.id} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      <span className="text-white text-sm">•</span>
                    </div>
                    <p className="text-neutral-700">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
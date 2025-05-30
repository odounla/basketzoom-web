import React from 'react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category: string;
}

interface NewsSectionProps {
  articles: NewsArticle[];
  featuredArticle?: NewsArticle;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ articles, featuredArticle }) => {
  return (
    <section className="py-10 bg-neutral-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="lg:col-span-2 card overflow-hidden animate-fadeIn">
              <div className="relative aspect-[16/9]">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-secondary text-white px-3 py-1 text-sm font-medium">
                  {featuredArticle.category}
                </div>
              </div>
              <div className="p-6">
                <span className="text-neutral-500 text-sm">{featuredArticle.date}</span>
                <h2 className="text-2xl font-bold mt-2 mb-3 hover:text-primary transition-colors">
                  <a href={`/news/${featuredArticle.id}`}>{featuredArticle.title}</a>
                </h2>
                <p className="text-neutral-600">{featuredArticle.excerpt}</p>
                <a 
                  href={`/news/${featuredArticle.id}`} 
                  className="inline-block mt-4 text-primary font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          )}
          
          {/* News List */}
          <div className="card">
            <div className="p-6 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Headlines</h2>
                <a href="/news" className="text-primary hover:text-primary-dark font-medium text-sm">
                  See more
                </a>
              </div>
            </div>
            
            <div className="divide-y divide-neutral-200">
              {articles.map(article => (
                <div key={article.id} className="p-4 hover:bg-neutral-50 transition-colors animate-fadeIn">
                  <span className="text-neutral-500 text-sm">{article.date}</span>
                  <h3 className="font-medium mt-1 hover:text-primary transition-colors">
                    <a href={`/news/${article.id}`}>{article.title}</a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
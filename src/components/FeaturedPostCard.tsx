
import React from 'react';

interface FeaturedPostCardProps {
  title: string;
  category: string;
  author: string;
  imageUrl: string;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ title, category, author, imageUrl }) => {
  return (
    <article className="relative rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-teal-light">{category}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1 leading-tight">{title}</h2>
        <p className="text-sm text-gray-300">Por {author}</p>
      </div>
    </article>
  );
};

export default FeaturedPostCard;


import React from 'react';

interface PostCardProps {
  title: string;
  category?: string;
  author?: string;
  date: string;
  imageUrl: string;
  summary?: string;
  isPopular?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ title, category, author, date, imageUrl, summary, isPopular }) => {
  if (isPopular) {
    return (
      <article className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"> {/* Alterado shadow para shadow-md e hover:shadow-lg */}
        <img src={imageUrl} alt={title} className="w-20 h-16 object-cover rounded" />
        <div>
          <h3 className="text-md font-semibold text-gray-800 leading-tight">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">{date}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" /> {/* Alterado h-48 para h-56 */}
      <div className="p-6">
        {category && <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal-dark">{category}</span>}
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2 leading-tight">{title}</h3>
        {summary && <p className="text-gray-700 text-sm mb-3 leading-relaxed">{summary}</p>}
        {author && (
          <p className="text-xs text-gray-500">
            Por <span className="font-medium text-gray-700">{author}</span> &bull; {date}
          </p>
        )}
        {!author && <p className="text-xs text-gray-500">{date}</p>}
      </div>
    </article>
  );
};

export default PostCard;

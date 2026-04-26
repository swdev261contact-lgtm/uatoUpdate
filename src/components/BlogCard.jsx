import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ImageOff, User } from 'lucide-react';

const BlogCard = ({ news, idx, onClick }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  // Generate slug from title
  const slug = useMemo(() => {
    return news.title
      .toLowerCase()
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâä]/g, 'a')
      .replace(/[ôö]/g, 'o')
      .replace(/[ù]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[:']/g, '')
      .replace(/\s+/g, '-');
  }, [news.title]);

  const handleClick = () => {
    navigate(`/blog/${slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.05, shadow: '0 20px 25px rgba(0,0,0,0.15)' }}
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
        {!imageError && news.image ? (
          <img
            src={news.image}
            alt={news.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageOff size={48} className="text-gray-400 dark:text-gray-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Badge & Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            {news.category}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{news.readTime} min</span>
        </div>

        {/* Date */}
        <time className="block text-xs text-gray-500 dark:text-gray-400 mb-2">
          {news.date}
        </time>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {news.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {news.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {news.tags?.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
          {news.tags?.length > 2 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{news.tags.length - 2}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <User size={14} />
            {news.author}
          </div>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 font-medium text-sm group/btn">
            Lire
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

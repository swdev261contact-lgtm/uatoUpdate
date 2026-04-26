import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X, TrendingUp } from 'lucide-react';

const BlogSidebar = ({ categories, tags, selectedCategory, selectedTags, onCategoryChange, onTagChange, onClear, isOpen, onClose }) => {
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([tag]) => tag);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed lg:relative lg:translate-x-0 top-0 left-0 w-64 h-full lg:h-auto bg-white dark:bg-gray-800 p-6 shadow-lg lg:shadow-none z-40 lg:z-0 overflow-y-auto ${
          !isOpen ? '-translate-x-full' : ''
        } transition-transform duration-300 lg:transition-none`}
      >
        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mt-8 lg:mt-0">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={20} className="text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filtres</h2>
          </div>

          {/* Clear filters */}
          {(selectedCategory || selectedTags.length > 0) && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onClear}
              className="w-full mb-6 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline"
            >
              Réinitialiser les filtres
            </motion.button>
          )}
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Catégories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ x: 4 }}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span className="block">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-pink-500" />
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Tags Populaires
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {sortedTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.1 }}
                onClick={() => onTagChange(tag)}
                className={`text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{categories.length}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Catégories</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{sortedTags.length}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Tags</p>
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default BlogSidebar;

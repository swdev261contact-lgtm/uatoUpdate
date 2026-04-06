import React, { useState, useMemo } from 'react';
import { X, Menu, Search } from 'lucide-react';
import { newsList } from '../data/newsList';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';

const News = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Extract unique categories and tags
  const categories = [...new Set(newsList.map((item) => item.category))];
  const allTags = newsList.flatMap((item) => item.tags || []);

  // Filter articles
  const filteredNews = useMemo(() => {
    return newsList.filter((item) => {
      const matchCategory = !selectedCategory || item.category === selectedCategory;
      const matchTags = selectedTags.length === 0 || selectedTags.some((tag) => item.tags?.includes(tag));
      const matchSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchTags && matchSearch;
    });
  }, [selectedCategory, selectedTags, searchQuery]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClear = () => {
    setSelectedCategory('');
    setSelectedTags([]);
    setSearchQuery('');
  };

  return (
    <>
      <Navbar type="listeNews" />

      <motion.div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-pink-500 text-white py-16 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Actualités & Événements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-blue-100 max-w-2xl"
            >
              Découvrez les dernières actualités, événements et accomplissements de notre université
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mt-8 md:gap-8"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{newsList.length}</div>
                <p className="text-sm md:text-base text-blue-100">Articles</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{categories.length}</div>
                <p className="text-sm md:text-base text-blue-100">Catégories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{[...new Set(allTags)].length}</div>
                <p className="text-sm md:text-base text-blue-100">Tags</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="mb-6 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Menu size={20} />
              Filtres
            </motion.button>
          </div>

          {/* Content Grid */}
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <BlogSidebar
                categories={categories}
                tags={allTags}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                onCategoryChange={setSelectedCategory}
                onTagChange={handleTagToggle}
                onClear={handleClear}
                isOpen={true}
                onClose={() => {}}
              />
            </div>

            {/* Sidebar - Mobile */}
            <AnimatePresence>
              {sidebarOpen && (
                <div className="lg:hidden">
                  <BlogSidebar
                    categories={categories}
                    tags={allTags}
                    selectedCategory={selectedCategory}
                    selectedTags={selectedTags}
                    onCategoryChange={setSelectedCategory}
                    onTagChange={handleTagToggle}
                    onClear={handleClear}
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                </div>
              )}
            </AnimatePresence>

            {/* Articles Grid */}
            <div className="flex-1">
              {filteredNews.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                >
                  {filteredNews.map((news, idx) => (
                    <BlogCard
                      key={idx}
                      news={news}
                      idx={idx}
                      onClick={() => setOpenIdx(newsList.indexOf(news))}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    Aucun article ne correspond à vos critères
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleClear}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    Réinitialiser les filtres
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal Detail */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenIdx(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 z-10 bg-white dark:bg-gray-800 rounded-full p-2"
              >
                <X size={24} />
              </motion.button>

              {/* Header with Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={newsList[openIdx].image}
                  alt={newsList[openIdx].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                <div className="absolute bottom-4 left-6 right-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {newsList[openIdx].category}
                  </motion.span>
                </div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {newsList[openIdx].title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{newsList[openIdx].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Par {newsList[openIdx].author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{newsList[openIdx].readTime} min de lecture</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {newsList[openIdx].tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {newsList[openIdx].description}
                </p>

                {/* Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Points clés
                  </h3>
                  <ul className="space-y-3">
                    {newsList[openIdx].details?.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default News;

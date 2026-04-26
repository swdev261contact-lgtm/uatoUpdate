import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ArrowRight, Filter, Clock, MapPin } from 'lucide-react';
import { CalendarMonth } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import { newsList } from '../data/newsList';
import BlogCard from '../components/BlogCard';

const Calendrier = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  // Extract categories
  const categories = [...new Set(newsList.map((item) => item.category))];

  // Parse dates and sort by date
  const parseDate = (dateStr) => {
    const months = {
      'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
      'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
    };
    const parts = dateStr.toLowerCase().split(' ');
    const day = parseInt(parts[0]);
    const month = months[parts[1]];
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  };

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    return newsList
      .filter(item => !selectedCategory || item.category === selectedCategory)
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  }, [selectedCategory]);

  // Group events by month
  const eventsByMonth = useMemo(() => {
    const grouped = {};
    filteredEvents.forEach(event => {
      const date = parseDate(event.date);
      const monthKey = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(event);
    });
    return grouped;
  }, [filteredEvents]);

  const monthsArray = Object.entries(eventsByMonth);

  return (
    <>
      <Navbar type="blog" />

      <motion.div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-pink-500 text-white"
        >
          {/* Animated Background */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <CalendarMonth sx={{ fontSize: 20 }} /> Calendrier des Événements
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Calendrier Académique 2025
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl"
            >
              Découvrez tous les événements, conférences, activités et dates importantes de l'année académique, organisés par mois
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 max-w-xl"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold">{filteredEvents.length}</div>
                <div className="text-sm text-blue-100">Événements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold">{categories.length}</div>
                <div className="text-sm text-blue-100">Catégories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <div className="text-3xl font-bold">{monthsArray.length}</div>
                <div className="text-sm text-blue-100">Mois actifs</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Filter size={24} className="text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Filtrer par catégorie</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory('')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === ''
                    ? 'bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                Tous les événements
              </motion.button>

              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-12">
            {monthsArray.map(([month, events], monthIdx) => (
              <motion.div
                key={month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: monthIdx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Month Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-pink-500"></div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    {month.charAt(0).toUpperCase() + month.slice(1)}
                  </h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-pink-500 to-blue-600"></div>
                </div>

                {/* Events Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {events.map((event, idx) => (
                    <BlogCard
                      key={idx}
                      news={event}
                      idx={idx}
                      onClick={() => setOpenIdx(newsList.indexOf(event))}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Aucun événement trouvé pour cette catégorie
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Modal - Same as News */}
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
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenIdx(null)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 z-10 bg-white dark:bg-gray-800 rounded-full p-2"
            >
              ✕
            </motion.button>

            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
              <img
                src={newsList[openIdx].image}
                alt={newsList[openIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {newsList[openIdx].title}
              </h2>

              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={16} />
                  {newsList[openIdx].date}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{newsList[openIdx].author}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {newsList[openIdx].readTime} min
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {newsList[openIdx].description}
              </p>

              <ul className="space-y-3">
                {newsList[openIdx].details?.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Calendrier;

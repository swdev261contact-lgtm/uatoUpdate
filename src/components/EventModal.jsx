import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, X, Bell, User, AlertCircle } from 'lucide-react';
import { mockEvents } from '../data/mockCalendarData';

const EventModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closestEvent, setClosestEvent] = useState(null);

  useEffect(() => {
    const today = new Date();

    const upcomingEvents = mockEvents
      .map(event => ({
        ...event,
        dateObj: new Date(event.event_date)
      }))
      .filter(event => event.dateObj >= today)
      .sort((a, b) => a.dateObj - b.dateObj);

    if (upcomingEvents.length > 0) {
      setClosestEvent(upcomingEvents[0]);
      setIsOpen(true);
    }
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getEventTypeLabel = (type) => {
    const labels = {
      ACADEMIQUE: 'Academique',
      ADMINISTRATIF: 'Administratif',
      CULTUREL: 'Culturel',
      SPORTIF: 'Sportif'
    };
    return labels[type] || type;
  };

  const getEventTypeColor = (type) => {
    const colors = {
      ACADEMIQUE: 'from-blue-500 to-cyan-500',
      ADMINISTRATIF: 'from-purple-500 to-pink-500',
      CULTUREL: 'from-yellow-500 to-orange-500',
      SPORTIF: 'from-green-500 to-emerald-500'
    };
    return colors[type] || 'from-gray-500 to-slate-500';
  };

  if (!closestEvent) return null;

  const hasSpeaker = closestEvent.speaker !== undefined;
  const hasImportantNote = closestEvent.important_note !== undefined;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[60] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-xl modal-shell overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-44 bg-gradient-to-r ${getEventTypeColor(closestEvent.event_type)} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                    {getEventTypeLabel(closestEvent.event_type)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Bell className="w-5 h-5" />
                    <span className="font-medium">Prochain événement</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-7">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {closestEvent.title}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span>{formatDate(closestEvent.event_date)}</span>
                  </div>

                  {closestEvent.event_time && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <span>{closestEvent.event_time}</span>
                    </div>
                  )}

                  {closestEvent.event_location && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <span>{closestEvent.event_location}</span>
                    </div>
                  )}

                  {hasSpeaker && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <User className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <span>{closestEvent.speaker.name} - {closestEvent.speaker.role} @ {closestEvent.speaker.company}</span>
                    </div>
                  )}
                </div>

                {hasImportantNote && (
                  <div className="flex items-start gap-2 p-3 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700 dark:text-red-300 text-sm font-medium">{closestEvent.important_note}</span>
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {closestEvent.description}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                  >
                    Fermer
                  </button>
                  <a
                    href="/blog"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium text-center hover:from-primary-700 hover:to-primary-800 transition-all"
                  >
                    Voir le blog
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
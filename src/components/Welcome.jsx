import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Users, Award } from 'lucide-react';
import welcomeImg1 from '../assets/upaSite.jpg';
import welcomeImg2 from '../assets/welcome.jpg';
import welcomeImg3 from '../assets/upasalle.jpg';
import welcomeImg4 from '../assets/VieEtudiante1.jpg';
import welcomeImg5 from '../assets/loisirSalle.jpg';
import welcomeImg6 from '../assets/infosalle.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

const Welcome = () => {
  const images = [welcomeImg1, welcomeImg2, welcomeImg3, welcomeImg4, welcomeImg5, welcomeImg6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const highlights = [
    { icon: BookOpen, text: 'Programmes Académiques', color: 'from-blue-600 to-cyan-600' },
    { icon: Users, text: 'Communauté Dynamique', color: 'from-primary-600 to-blue-600' },
    { icon: Award, text: 'Excellence Reconnue', color: 'from-amber-600 to-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold"
            >
              <span className="text-blue-700 dark:text-blue-300">À Propos de Nous</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Bienvenue à <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">l'UPA</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Notre université offre un environnement stimulant où les étudiants développent leurs compétences et leur potentiel pour devenir les leaders de demain.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
            >
              Avec des programmes académiques rigoureux, des professeurs expérimentés et des infrastructures modernes, nous nous engageons à fournir une éducation de qualité.
            </motion.p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${item.color} p-4 rounded-lg text-white hover:shadow-lg transition-all duration-300`}>
                    <item.icon className="w-6 h-6 mb-2" />
                    <p className="text-sm font-semibold">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Carrousel image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Image container */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex]}
                  alt="Campus"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

              {/* Logo overlay */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-lg"
              >
                <img src={miniLogoUpa} alt="UPA Logo" className="w-16 h-16 rounded-lg object-cover" />
              </motion.div>

              {/* Navigation buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all z-10"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all z-10"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

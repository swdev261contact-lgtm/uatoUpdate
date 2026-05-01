import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

import welcomeImg1 from '../assets/upaSite.jpg';
import welcomeImg2 from '../assets/welcome.jpg';
import welcomeImg3 from '../assets/upasalle.jpg';
import welcomeImg4 from '../assets/VieEtudiante1.jpg';
import welcomeImg5 from '../assets/loisirSalle.jpg';
import welcomeImg6 from '../assets/infosalle.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

const Welcome = () => {
  const images = [
    welcomeImg1,
    welcomeImg2,
    welcomeImg3,
    welcomeImg4,
    welcomeImg5,
    welcomeImg6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const highlights = [
    { icon: BookOpen, text: 'Programmes Académiques', color: 'from-blue-600 to-cyan-600' },
    { icon: Users, text: 'Communauté Dynamique', color: 'from-primary-600 to-blue-600' },
    { icon: Award, text: 'Excellence Reconnue', color: 'from-amber-600 to-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold">
              <span className="text-blue-700 dark:text-blue-300">
                À Propos de Nous
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Bienvenue à{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                l'UPA
              </span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Notre université offre un environnement stimulant où les étudiants développent leurs compétences.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Avec des programmes académiques rigoureux et des infrastructures modernes.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx}>
                  <div className={`bg-gradient-to-br ${item.color} p-4 rounded-lg text-white`}>
                    <item.icon className="w-6 h-6 mb-2" />
                    <p className="text-sm font-semibold">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
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

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

              {/* LOGO */}
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg">
                <img
                  src={miniLogoUpa}
                  alt="UPA Logo"
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>

              {/* PREV */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full"
              >
                <ChevronLeft />
              </button>

              {/* NEXT */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full"
              >
                <ChevronRight />
              </button>

              {/* INDICATORS */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <RouterLink to="/admission">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold">
              Découvrir nos formations
              <ArrowRight className="w-5 h-5" />
            </button>
          </RouterLink>
        </div>

      </div>
    </section>
  );
};

export default Welcome;
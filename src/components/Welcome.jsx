<<<<<<< HEAD
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Globe } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Welcome = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Excellence Académique',
      desc: 'Programmes de formation reconnus, dispensés par des experts qualifiés'
    },
    {
      icon: Users,
      title: 'Communauté Engagée',
      desc: 'Un environnement académique stimulant avec des activités étudiantes riches'
    },
    {
      icon: Award,
      title: 'Diplômés Emploïbles',
      desc: 'Des compétences pratiques pour réussir dans le monde professionnel'
    },
    {
      icon: Globe,
      title: 'Partenariats Internationaux',
      desc: 'Des collaborations avec des institutions internationales reconnues'
    }
  ];
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const highlights = [
    { icon: BookOpen, text: 'Programmes Académiques', color: 'from-blue-600 to-cyan-600' },
    { icon: Users, text: 'Communauté Dynamique', color: 'from-primary-600 to-blue-600' },
    { icon: Award, text: 'Excellence Reconnue', color: 'from-amber-600 to-orange-600' },
  ];

  return (
<<<<<<< HEAD
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
=======
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            Université Privée d'Ambohydratrimo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Une Mission Définie par la Réussite
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            À l'UPA, notre mission de découverte et d'apprentissage est animée par un esprit d'optimisme et de possibilité. Ici, vous trouverez un lieu d'expansion intellectuelle, des perspectives variées et la liberté d'explorer de nouvelles voies de pensée.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <RouterLink to="/admission">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl">
              Découvrir nos formations
              <ArrowRight className="w-5 h-5" />
            </button>
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
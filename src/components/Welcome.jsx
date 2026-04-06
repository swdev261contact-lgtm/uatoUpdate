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

  return (
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
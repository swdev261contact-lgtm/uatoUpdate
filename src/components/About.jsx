import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { History, Target, Eye, TrendingUp, Users, Heart, Lightbulb, Shield, BookOpen, Sparkles } from 'lucide-react';
import historyImg from '../assets/hero.png';
import visionImg from '../assets/VieEtudiante3.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

function useCountUp(target, duration = 1500, animate = false) {
  const [count, setCount] = useState(0);
  const rafId = useRef(null);
  const startTime = useRef(null);

  const animateCount = timestamp => {
    if (!startTime.current) startTime.current = timestamp;
    const progress = timestamp - startTime.current;
    if (progress < duration) {
      const value = Math.min(target, Math.floor((progress / duration) * target));
      setCount(value);
      rafId.current = requestAnimationFrame(animateCount);
    } else {
      setCount(target);
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  useEffect(() => {
    if (animate) {
      startTime.current = null;
      rafId.current = requestAnimationFrame(animateCount);
    } else {
      setCount(0);
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    return () => cancelAnimationFrame(rafId.current);
  }, [animate, target]);

  return count;
}

function useInView(ref, options = { threshold: 0.3 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

const stats = [
  { value: 3, label: 'Écoles', suffix: '' },
  { value: 200, label: 'Étudiants', suffix: '+' },
  { value: 10, label: 'Partenaires', suffix: '+' },
  { value: 8, label: 'Parcours', suffix: '+' },
];

function CountUpCard({ value, label, suffix, animate }) {
  const count = useCountUp(value, 1500, animate);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-gold opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
      <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-gold bg-clip-text text-transparent mb-2">
          {count}{suffix}
        </h2>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
      </div>
    </motion.div>
  );
}

const values = [
  {
    icon: TrendingUp,
    title: "Excellence et Amélioration Continue",
    desc: "Nous visons l'excellence académique dans chaque programme. Notre engagement envers l'amélioration continue garantit que nos étudiants reçoivent une formation de pointe.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Ouverture et Respect",
    desc: "La diversité est notre force. Nous célébrons les différences culturelles et les perspectives uniques de chaque étudiant, créant un environnement inclusif.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation et Créativité",
    desc: "L'innovation est au cœur de notre pédagogie. Nous encourageons la curiosité intellectuelle et la pensée créative.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Professionnalisme et Intégrité",
    desc: "L'éthique professionnelle et l'intégrité sont les fondements de notre institution. Nous formons des leaders responsables.",
    gradient: "from-green-500 to-emerald-500"
  },
];

const About = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
          >
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            <span className="text-blue-700 dark:text-blue-300 font-semibold">Notre Histoire</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            À propos de <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">l'UPA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Une institution d'excellence dédiée à former les leaders de demain à travers
            une éducation innovante et des valeurs fortes.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                <History className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Notre Histoire</h3>
            </motion.div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
<<<<<<< HEAD
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg"
              >
                Fondée en <span className="font-bold text-blue-600 dark:text-blue-400">2021</span>,
                l'Université Privée d\'Ambohidratrimo est née d'une vision ambitieuse : démocratiser
=======
              <p>
                Fondée en <span className="font-semibold text-primary-600 dark:text-primary-400">2021</span>,
                l'Université Privée d'Ambohydratrimo est née d'une vision ambitieuse : démocratiser
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
                l'accès à une éducation supérieure de qualité pour tous les jeunes malgaches.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg"
              >
                Démarrant avec deux programmes et une cinquantaine d'étudiants passionnés, l'UPA s'est
<<<<<<< HEAD
                rapidement imposée comme une référence dans le paysage éducatif malgache, combinant
                excellence académique et innovation pédagogique.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg"
              >
                Aujourd'hui, avec <span className="font-bold text-blue-600 dark:text-blue-400">trois écoles spécialisées</span> et
                plus de <span className="font-bold text-blue-600 dark:text-blue-400">200 étudiants</span>, nous continuons
                d'évoluer en créant des partenariats stratégiques avec des institutions internationales
                pour offrir à nos étudiants les meilleures opportunités de carrière.
              </motion.p>
=======
                rapidement imposée comme une référence dans le paysage éducatif malgache.
              </p>
              <p>
                Aujourd'hui, avec <span className="font-semibold text-primary-600 dark:text-primary-400">trois écoles spécialisées</span> et
                plus de <span className="font-semibold text-primary-600 dark:text-primary-400">200 étudiants</span>, nous continuons
                d'évoluer en créant des partenariats stratégiques.
              </p>
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <motion.img
                src={historyImg}
                alt="Campus UPA"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg"
              >
                <img src={miniLogoUpa} alt="Logo UPA" className="w-16 h-16 rounded-lg object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <motion.img
                src={visionImg}
                alt="Vision UPA"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg"
              >
                <img src={miniLogoUpa} alt="Logo UPA" className="w-16 h-16 rounded-lg object-cover" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Notre Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Fournir une éducation supérieure de qualité exceptionnelle, accessible à tous les étudiants
                  malgaches, avec des programmes innovants qui allient excellence académique, compétences
                  pratiques et valeurs éthiques pour former les professionnels et leaders de demain.
                </p>
              </div>
<<<<<<< HEAD
            </motion.div>
=======
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Fournir une éducation supérieure de qualité exceptionnelle, accessible à tous les étudiants
                malgaches, avec des programmes innovants qui allient excellence académique et valeurs éthiques.
              </p>
            </div>
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Notre Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Devenir l'institution de référence dans l'enseignement supérieur à Madagascar et dans
                  l'océan Indien, reconnue pour son excellence pédagogique, son innovation et sa contribution
                  au développement socio-économique du pays en formant des diplômés compétents, engagés et
                  prêts à relever les défis du XXIe siècle.
                </p>
              </div>
<<<<<<< HEAD
            </motion.div>
=======
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Devenir l'institution de référence dans l'enseignement supérieur à Madagascar et dans
                l'océan Indien, reconnue pour son excellence pédagogique et son innovation.
              </p>
            </div>
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Nos Valeurs Fondamentales
<<<<<<< HEAD
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Des principes qui guident notre mission éducative et façonnent l'expérience de nos étudiants
            </motion.p>
=======
            </h3>
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-8 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              L'UPA en Chiffres
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CountUpCard
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  animate={isInView}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
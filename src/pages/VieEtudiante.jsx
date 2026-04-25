import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Users, Zap, TrendingUp, Calendar, MapPin, Facebook, Instagram, Filter, ExternalLink } from 'lucide-react';
import { Newspaper, Book, SchoolOutlined, SportsBasketball, Lightbulb, People, Rocket, TheaterComedy, Nature } from '@mui/icons-material';

import BlogModal from '../components/modals/BlogModal';
import LabModal from '../components/modals/LabModal';
import ClubModal from '../components/modals/ClubModal';

import laboScience from '../assets/infosalle.jpg';
import labLangues from '../assets/VieEtudiante2.jpg';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import blog1 from '../assets/robo2.jpg';

import gallery1 from '../assets/VieEtudiante.jpg';
import gallery2 from '../assets/malagasy.jpg';
import gallery3 from '../assets/malagasy2.jpg';
import gallery4 from '../assets/culture1.jpg';
import gallery5 from '../assets/malagache.jpg';
import gallery6 from '../assets/robo2.jpg';
import gallery7 from '../assets/robo1.jpg';
import gallery8 from '../assets/BDS.jpg';

import gallery9 from '../assets/integration1.jpg';
import gallery10 from '../assets/integration2.jpg';
import gallery11 from '../assets/integration3.jpg';
import gallery12 from '../assets/integration4.jpg';
import gallery13 from '../assets/integration5.jpg';
import heroBg from '../assets/integration5.jpg';

import club1Fond from '../assets/logoRE.jpg';
import club2Fond from '../assets/logoCC.png';
import club3Fond from '../assets/sport.jpg';
import club3basket1 from '../assets/BDS.jpg';
import club3basket2 from '../assets/basket2.jpg';
import Navbar from '../components/Navbar';

const bureaux = [
  {
    id: 'bde',
    image: club1Fond,
    title: 'Bureau Des Étudiants (BDE)',
    badge: 'Gouvernance',
    badgeIcon: 'graduation',
    description: "Cœur battant de la vie étudiante. Le BDE représente les intérêts de tous les étudiants, organise les grands événements campus et facilite la communication entre l'administration et la communauté.",
    members: '200+',
    shortDescription: 'Représentation, événements campus et vie étudiante',
    responsibilities: [
      'Représentation des intérêts étudiants',
      'Organisation des événements majeurs',
      'Gestion du budget étudiant',
      'Communication administration-étudiants'
    ]
  },
  {
    id: 'bds',
    image: club3Fond,
    title: 'Bureau Des Sports (BDS)',
    badge: 'Sports',
    badgeIcon: 'sports',
    description: "Pilier du développement physique et du bien-être étudiant. Le BDS promeut l'excellence sportive, organise compétitions inter-classes et représente UPA dans les compétitions universitaires nationales.",
    members: '150+',
    shortDescription: 'Excellence sportive, compétitions et bien-être',
    responsibilities: [
      'Organisation des événements sportifs',
      'Représentation aux compétitions nationales',
      'Gestion des équipes universitaires',
      'Promotion du bien-être physique'
    ]
  }
];

const labs = [
  {
    id: 'lab1',
    image: laboScience,
    title: 'Science & Technologie',
    description: 'Un laboratoire équipé des technologies pour la recherche en informatique et tout ce qui va avec.',
    features: [
      { icon: '🔬', title: 'IA & Robotique', description: 'Plateformes de développement IA' },
      { icon: '⚛️', title: 'Réseaux', description: 'Wi-Fi et câblage pour apprentissage' },
      { icon: '💻', title: 'Informatique', description: 'Salle serveur haute performance' }
    ]
  },
  {
    id: 'lab2',
    image: labLangues,
    title: 'Centre Linguistique',
    description: "Un espace moderne dédié à l'apprentissage des langues avec des technologies de pointe.",
    features: [
      { icon: '🌐', title: '3 Langues', description: 'Cours de langues étrangères' },
      { icon: '📝', title: 'TOEFL Prep', description: 'Préparation aux tests' },
      { icon: '📚', title: 'Bibliothèque', description: 'Ressources multilingues' }
    ]
  }
];

const clubs = [
  {
    id: 'club1',
    slug: 'club-entrepreneurship',
    image: club1Fond,
    title: 'Club Entrepreneurship',
    category: 'Entrepreneurship',
    badge: 'Startup',
    badgeIcon: 'rocket',
    description: "Incubateur de rêves où les aspirants entrepreneurs transforment leurs idées en entreprises viables.",
    members: '95+',
    activities: ['Formation en business plan', 'Programme de mentorat', 'Pitch competitions', 'Startup Weekends']
  },
  {
    id: 'club2',
    slug: 'club-arts-culture',
    image: club2Fond,
    title: 'Club Arts & Culture',
    category: 'Culture',
    badge: 'Arts',
    badgeIcon: 'theater',
    description: 'Sanctuaire pour les âmes créatives. Concerts, expositions et célébration de la culture malgache.',
    members: '140+',
    activities: ['Concerts et performances', 'Expositions d\'art', 'Ateliers artistiques', 'Festivals']
  },
  {
    id: 'club3',
    slug: 'club-innovation-tech',
    image: club3Fond,
    image1: club3basket1,
    image2: club3basket2,
    title: 'Club Innovation Tech',
    category: 'Tech',
    badge: 'Startup',
    badgeIcon: 'rocket',
    description: 'Écosystème dynamique où l\'innovation technologique se transforme en solutions réelles.',
    members: '120+',
    liensFB: 'https://www.facebook.com/profile.php?id=61569998111954',
    liensIG: 'https://www.instagram.com/bde_upa/',
    activities: ['Hackathons internes', 'Ateliers de programmation', 'Projets communautaires', 'Conférences']
  }
];

const galleryImages = [
  { id: 1, src: gallery1, title: 'Journée culturelle', category: 'Événements', description: 'Célébration des traditions malgaches' },
  { id: 2, src: gallery2, title: 'Semaine internationale', category: 'Culture', description: 'Étudiants en costume traditionnel' },
  { id: 3, src: gallery3, title: 'Festival des arts', category: 'Arts', description: 'Performance étudiante' },
  { id: 4, src: gallery4, title: 'Conférence annuelle', category: 'Académique', description: 'Intervenants internationaux' },
  { id: 5, src: gallery5, title: 'Journée culturelle', category: 'Culture', description: 'Traditions malgaches' },
  { id: 6, src: gallery6, title: 'Hackathon 2025', category: 'Tech', description: 'Participants au hackathon' },
  { id: 7, src: gallery7, title: 'Hackathon 2025 (suite)', category: 'Tech', description: 'Participants au hackathon' },
  { id: 8, src: gallery8, title: 'Club Basket UPA', category: 'Sports', description: 'Coach et mentor du club' },
  { id: 9, src: gallery9, title: 'Journée d\'intégration 2025', category: 'Événements', description: 'Animations et jeux' },
  { id: 10, src: gallery10, title: 'Journée d\'intégration 2025', category: 'Événements', description: 'Jeux encore plus excitants' },
  { id: 11, src: gallery11, title: 'Journée d\'intégration 2025', category: 'Événements', description: 'Le défi' },
  { id: 12, src: gallery12, title: 'Journée d\'intégration 2025', category: 'Événements', description: 'Ambiance festive' },
  { id: 13, src: gallery13, title: 'Journée d\'intégration 2025', category: 'Événements', description: 'La joie en images' },
];

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâä]/g, 'a')
    .replace(/[ôö]/g, 'o')
    .replace(/[ù]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[:']/g, '')
    .replace(/\s+/g, '-');
};

const blogArticles = [
  {
    id: 1,
    src: blog1,
    title: 'Hackathon Innovation 2025',
    slug: 'hackathon-innovation-2025',
    category: 'Tech & Innovation',
    date: '01/05/2025',
    excerpt: 'Aperçu…',
    content:
      "Événement organisé par SmartOne pour un tournoi inter-universitaire en informatique. Notre université a envoyé deux représentants exceptionnels.",
    contentHack1: 'Nos deux équipes mixtes : UPADEVSTORM et ZAY BACK IDEV.'
  },
  {
    id: 2,
    src: gallery3,
    title: 'Taom-baovao Malagasy - Celebration de l\'Année',
    slug: 'taom-baovao-malagasy',
    category: 'Culture & Tradition',
    date: '02/05/2025',
    excerpt: 'Aperçu…',
    content:
      "À l'occasion du Nouvel An malgache, nos étudiants ont organisé des exposés, des spectacles artistiques et diverses activités pour célébrer."
  },
  {
    id: 3,
    src: gallery4,
    title: 'Conférence Annuelle UPA 2025',
    slug: 'conference-annuelle-upa',
    category: 'Académique',
    date: '03/05/2025',
    excerpt: 'Aperçu…',
    content:
      "Des conférences sur divers sujets ont eu lieu sur notre campus pour sensibiliser, partager de nouvelles connaissances et favoriser des partenariats."
  }
];

const stats = [
  { icon: Users, label: 'Étudiants actifs', value: '2000+', color: 'from-blue-500 to-blue-600' },
  { icon: Zap, label: 'Clubs & Associations', value: '15+', color: 'from-purple-500 to-purple-600' },
  { icon: TrendingUp, label: 'Événements/an', value: '50+', color: 'from-pink-500 to-pink-600' }
];

const galleryCategories = ['Tous', 'Événements', 'Culture', 'Arts', 'Tech', 'Sports', 'Académique'];

const VieEtudiante = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const containerRef = useRef(null);

  const openModal = (content) => setActiveModal(content);
  const closeModal = () => setActiveModal(null);

  const getBadgeIcon = (iconName) => {
    const iconMap = {
  rocket: Rocket,
  theater: TheaterComedy,
  graduation: SchoolOutlined,
  sports: SportsBasketball,
  eco: Nature,
};
    return iconMap[iconName] || null;
  };

  const filteredImages = selectedCategory === 'Tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.querySelector('div')?.offsetWidth + 16;
      if (cardWidth) containerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.querySelector('div')?.offsetWidth + 16;
      if (cardWidth) containerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventDrag = e => e.preventDefault();
    container.addEventListener('dragstart', preventDrag);

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: 'smooth'
        });
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      container.removeEventListener('dragstart', preventDrag);
      container.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <>
      <Navbar type="vieEtudiante" />

      <motion.div
        id="vie-etudiant"
        className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* HERO SECTION */}
        <motion.div
          className="relative overflow-hidden text-white py-24 md:py-40 lg:py-48"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

          {/* Animated background elements */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold flex items-center gap-2"
              >
                <Users size={20} className="text-blue-200" />
                Vie Étudiante & Campus
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Découvrez la Vie<br /><span className="bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">sur le Campus</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-blue-50 mb-10 leading-relaxed max-w-2xl"
              >
                Explorez notre écosystème dynamique rempli de clubs passionnants, d'événements inoubliables et d'opportunités exceptionnelles pour vous développer
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/actualites')}
                  className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  <Newspaper sx={{ fontSize: 20 }} />
                  Voir les Actualités
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/actualites')}
                  className="px-8 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2"
                >
                  <Book sx={{ fontSize: 20 }} />
                  Découvrir le Blog
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Stats - Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                    <stat.icon size={32} className="text-blue-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ARTICLES DE BLOG */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Articles de Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Les dernières actualités et événements de notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <img
                    src={article.src}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar size={16} />
                    {article.date}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow line-clamp-2">
                    {article.content}
                  </p>

                  <div className="space-y-3 flex flex-col gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/blog-article/${article.slug}`)}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all w-full flex items-center justify-center gap-2"
                    >
                      Lire plus
                      <ExternalLink size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal({ type: 'blog', ...article })}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all w-full"
                    >
                      Aperçu rapide
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Blog CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/actualites')}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Book sx={{ fontSize: 24 }} />
              Voir tous les articles
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </section>

        {/* NOS LABORATOIRES */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Laboratoires
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Des espaces modernes équipés pour l'innovation et l'apprentissage
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {labs.map((lab, idx) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {lab.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {lab.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {lab.features.map((feature, fIdx) => (
                      <div key={fIdx} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">{feature.title}</p>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal({ type: 'lab', ...lab })}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BUREAUX ÉTUDIANTS - BDE & BDS */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl my-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Bureaux Étudiants
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Gouvernance et bien-être - Les piliers de la vie étudiante
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {bureaux.map((bureau, idx) => (
              <motion.div
                key={bureau.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <img
                    src={bureau.image}
                    alt={bureau.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full flex items-center gap-2">
                      {(() => {
                        const IconComponent = getBadgeIcon(bureau.badgeIcon);
                        return IconComponent ? <IconComponent sx={{ fontSize: 16 }} /> : null;
                      })()}
                      {bureau.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2"><People sx={{ fontSize: 18 }} /> {bureau.members} Membres</p>
                    <h3 className="text-2xl font-bold">{bureau.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                    {bureau.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">Responsabilités clés</p>
                    {bureau.responsibilities.map((resp, rIdx) => (
                      <motion.div
                        key={rIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: rIdx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg flex-shrink-0">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    En savoir plus
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CLUBS ÉTUDIANTS */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Clubs Étudiants
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Rejoignez une communauté passionnée et développez vos talents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full flex items-center gap-2">
                      {(() => {
                        const IconComponent = getBadgeIcon(club.badgeIcon);
                        return IconComponent ? <IconComponent sx={{ fontSize: 14 }} /> : null;
                      })()}
                      {club.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2"><People sx={{ fontSize: 18 }} /> {club.members} Membres</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {club.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {club.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {club.activities.slice(0, 2).map((activity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        {activity}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      {club.liensFB && (
                        <a
                          href={club.liensFB}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition"
                        >
                          <Facebook size={20} />
                        </a>
                      )}
                      {club.liensIG && (
                        <a
                          href={club.liensIG}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-900/50 transition"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal({ type: 'club', ...club })}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Découvrir
                      </motion.button>
                    </div>
                    {club.slug && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(`/club/${club.slug}`)}
                        className="w-full px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all flex items-center justify-center gap-2"
                      >
                        Lire plus
                        <ExternalLink size={16} />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALERIE PHOTO AVEC FILTRES */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Galerie Photo
            </h2>

            {/* Filtres */}
            <div className="flex flex-wrap gap-3">
              {galleryCategories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category === 'Tous' && <Filter size={16} className="inline mr-2" />}
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl group"
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative h-48 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white"
                >
                  <h4 className="font-bold text-lg">{img.title}</h4>
                  <p className="text-sm text-gray-300">{img.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-6 py-20"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-2xl p-12 text-white text-center overflow-hidden">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-36 -mt-36"
            />

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à Rejoindre Notre Communauté ?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Découvrez les clubs, participez aux événements et faites partie de l'aventure UPA
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl transition-all text-lg"
              >
                Explorer les Clubs
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Modales */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative w-full max-w-5xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {activeModal.type === 'blog' && (
                  <BlogModal data={activeModal} onClose={closeModal} />
                )}
                {activeModal.type === 'lab' && (
                  <LabModal data={activeModal} onClose={closeModal} />
                )}
                {activeModal.type === 'club' && (
                  <ClubModal data={activeModal} onClose={closeModal} />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Galerie Modale */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-lg z-10 transition"
                >
                  <X size={32} />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full object-contain rounded-lg mb-6"
                />

                <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg text-white">
                  <h4 className="text-2xl font-bold mb-3">{selectedImage.title}</h4>
                  <p className="text-lg text-gray-300 mb-2">{selectedImage.category}</p>
                  <p className="text-gray-400">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default VieEtudiante;

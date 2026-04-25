import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Calendar, MapPin, Facebook, Instagram } from 'lucide-react';
import { People } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import { clubsList, getClubContent } from '../data/clubsList';

const ClubDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find club by slug
  const club = useMemo(() => {
    return clubsList.find(item => item.slug === slug);
  }, [slug]);

  const content = useMemo(() => {
    if (!club) return '';
    return getClubContent(slug);
  }, [club, slug]);

  if (!club) {
    return (
      <>
        <Navbar type="blog" />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Club non trouvé
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Le club que vous cherchez n'existe pas ou a été archivé.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/vie-etudiante')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              Retour à Vie Étudiante
            </motion.button>
          </div>
        </div>
      </>
    );
  }

  // Parse the club content into paragraphs
  const paragraphs = content
    .split('\n\n')
    .filter(p => p.trim().length > 0);

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
    <>
      <Navbar type="blog" />
      <motion.div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6 pt-24 pb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            onClick={() => navigate('/vie-etudiante')}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Retour à Vie Étudiante
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-6 mb-12"
        >
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
            {club.image ? (
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
                <People sx={{ fontSize: 80, color: 'white' }} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </div>
        </motion.div>

        {/* Club Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 mb-12"
        >
          {/* Category Badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              {club.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            {club.name}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Users size={20} className="text-blue-600 dark:text-blue-400" />
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-500">Membres</span>
                <p className="font-semibold">{club.members}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Calendar size={20} className="text-blue-600 dark:text-blue-400" />
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-500">Fondé en</span>
                <p className="font-semibold">{club.founded}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-500">Réunions</span>
                <p className="font-semibold">{club.meeting}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-500">Nous suivre:</span>
              <div className="flex gap-3">
                <a href={club.social.facebook} className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={club.social.instagram} className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          {club.highlights && club.highlights.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Points clés</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {club.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Club Content */}
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 mb-20"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.article>

        {/* Related Clubs */}
        {clubsList.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto px-6 mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Autres clubs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubsList
                .filter(c => c.slug !== slug)
                .slice(0, 3)
                .map((relatedClub, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    onClick={() => navigate(`/club/${relatedClub.slug}`)}
                    className="cursor-pointer group"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                      {relatedClub.image ? (
                        <img
                          src={relatedClub.image}
                          alt={relatedClub.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
                          <People sx={{ fontSize: 60, color: 'white' }} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mb-2">
                      {relatedClub.category}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedClub.name}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {relatedClub.shortDescription}
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto px-6 mb-20 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-500 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Intéressé par ce club ?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Rejoignez {club.name} et devenez part d'une communauté dynamique. Consultez la page Vie Étudiante pour plus d'informations et les modalités d'adhésion.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/vie-etudiante')}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Explorer tous les clubs
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ClubDetail;

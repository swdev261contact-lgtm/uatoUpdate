import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Newspaper } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import { getBlogArticleContent } from '../data/blogContent';

// Blog articles data
const blogArticlesData = [
  {
    slug: 'hackathon-innovation-2025',
    title: 'Hackathon Innovation 2025',
    category: 'Tech & Innovation',
    date: '01 Mai 2025',
    author: 'Cellule Vie Étudiante',
    readTime: 8,
    image: 'https://via.placeholder.com/800x400?text=Hackathon+Innovation'
  },
  {
    slug: 'taom-baovao-malagasy',
    title: 'Taom-baovao Malagasy - Célébration de l\'Année',
    category: 'Culture & Tradition',
    date: '02 Mai 2025',
    author: 'Cellule Vie Étudiante',
    readTime: 7,
    image: 'https://via.placeholder.com/800x400?text=Taom-baovao'
  },
  {
    slug: 'conference-annuelle-upa',
    title: 'Conférence Annuelle UPA 2025',
    category: 'Académique',
    date: '03 Mai 2025',
    author: 'Cellule Vie Étudiante',
    readTime: 7,
    image: 'https://via.placeholder.com/800x400?text=Conference+Annuelle'
  }
];

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find blog article by slug
  const article = useMemo(() => {
    return blogArticlesData.find(item => item.slug === slug);
  }, [slug]);

  const content = useMemo(() => {
    if (!article) return '';
    return getBlogArticleContent(slug);
  }, [article, slug]);

  if (!article) {
    return (
      <>
        <Navbar type="blog" />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Article non trouvé
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              L'article que vous cherchez n'existe pas.
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

  // Parse the article content into paragraphs
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
            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
                <Newspaper sx={{ fontSize: 80, color: 'white' }} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </div>
        </motion.div>

        {/* Article Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 mb-12"
        >
          {/* Category Badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            {article.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pb-8 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={18} className="text-blue-600 dark:text-blue-400" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <User size={18} className="text-blue-600 dark:text-blue-400" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock size={18} className="text-blue-600 dark:text-blue-400" />
              <span>{article.readTime} min de lecture</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Article Content */}
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

        {/* Related Articles */}
        {blogArticlesData.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto px-6 mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Articles connexes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticlesData
                .filter(a => a.slug !== slug)
                .map((relatedArticle, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    onClick={() => navigate(`/blog-article/${relatedArticle.slug}`)}
                    className="cursor-pointer group"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                      {relatedArticle.image ? (
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
                          <Newspaper sx={{ fontSize: 60, color: 'white' }} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mb-2">
                      {relatedArticle.category}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {relatedArticle.date}
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
          <h2 className="text-3xl font-bold mb-4">Découvrez toute la vie étudiante</h2>
          <p className="text-lg text-blue-100 mb-8">
            Explorez nos clubs, nos événements et bien d'autres opportunités pour grandir et vous développer.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/vie-etudiante')}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Retour à Vie Étudiante
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default BlogDetail;

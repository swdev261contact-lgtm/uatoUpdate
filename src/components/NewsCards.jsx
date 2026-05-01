import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Calendar, Tag, AlertCircle, Image } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import sortieHecm from '../assets/sortieHecm.jpg';
import conferenceia from '../assets/iaConference.jpg';
import hack1 from '../assets/robo2.jpg';
import hack2 from '../assets/robo1.jpg';
import smatching from '../assets/sport.jpg';
import smatching2 from '../assets/basket2.jpg';
import laureatAF from '../assets/laureatAF.jpg';
import conferenceOratoire from '../assets/conferenceOratoire.jpg';

const newsList = [
  { 
    type: 'Conférence', 
    date: '15 Avril 2026', 
    title: "Conférence - High-Performance Task-Specific Language Models", 
    description: "Conférence exceptionnelle avec Dr Urchade Zaratiana (Fastino Labs).",
    image: conferenceia, 
    important: 'OBLIGATOIRE : HEST INFO',
    details: [
      "🎯 Alternative aux LLMs",
      "💡 Modèles compacts et efficaces",
      "🔧 Architectures multi-tâches",
      "🤖 Automatisation du machine learning",
      "👨‍🏫 Intervenant: Dr Urchade Zaratiana - Member of Technical Staff @ Fastino Labs",
      "📍 Lieu: Salle HECM L2 - ⏰ 14:00",
    ],
    gallery: [conferenceia, conferenceia, conferenceia],
    descriptions: [
      "📸 Vue de la salle pendant la présentation de Dr Zaratiana",
      "🎤 Le speaker en pleine explication technique",
      "❓ Session de questions-réponses avec les étudiants"
    ]
  },
  { 
    type: 'Événement', 
    date: '30 Mai 2025', 
    title: "Conférence sur l'art oratoire", 
    description: "Une conférence exceptionnelle sur l'éloquence et l'authenticité.",
    image: conferenceOratoire, 
    details: [
      "🏆 Ny Avo Razafindrazaka - Champion du monde de Débat",
      "🥇 Josie Ramanantsoa - Championne du monde 2024",
      "🎯 Techniques de persuasion et d'argumentation",
      "💬 Trouver sa voix intérieure",
    ],
    gallery: [conferenceOratoire, conferenceOratoire, conferenceOratoire],
    descriptions: [
      "📸 Vue générale de la salle comble - 150+ étudiants",
      "🎤 Les deux intervenants en action",
      "👥 Les étudiants attentifs et engagés"
    ]
  },
  { 
    type: 'Actualité', 
    date: '5 Mai 2025', 
    title: 'Cérémonie de remise des diplômes 2025', 
    description: 'Félicitations à tous nos diplômés de la promotion 2025 !',
    image: sortieHecm, 
    details: [
      "🎓 150 diplômé(e)s toutes filières",
      "🏛️ 3 écoles représentées (HEST, HECM, HELS)",
      "💼 98% taux d'insertion professionnelle",
      "🤝 12 entreprises partenaires présentes",
    ],
    gallery: [sortieHecm, sortieHecm, sortieHecm],
    descriptions: [
      "📸 Les diplômés de la promotion 2025",
      "🎓 Remise des diplômes par le président",
      "👨‍👩‍👧 Photo de famille avec les familles"
    ]
  },
  { 
    type: 'Événement', 
    date: '13 Avril 2025', 
    title: 'Hackathon Inter-Universitaire', 
    description: 'Nos équipes ont relevé le défi avec passion et créativité.',
    image: hack1, 
    details: [
      "💻 24 heures de codage intensif",
      "🏅 4ème place sur 20 équipes",
      "🚀 Équipes: UPADEVSTORM et ZAYBACKIDEV",
      "🌍 Thème: Tech pour un Madagascar durable",
    ],
    gallery: [hack1, hack2, hack1],
    descriptions: [
      "💻 Équipe UPADEVSTORM en pleine négociation",
      "⏰ Session de codage marathon de 24 heures",
      "🏆 Remise des prix aux équipes"
    ]
  },
  { 
    type: 'Sport', 
    date: '08 Février 2025', 
    title: 'Smatching - Tournoi de Basketball', 
    description: 'Première participation aux tournois national de Basketball',
    image: smatching, 
    details: [
      "🏀 1ère participation nationale",
      "🥇 4ème place finale",
      "💪 12 équipes concurrentes",
      "🎯 Esprit d'équipe et fair-play",
    ],
    gallery: [smatching, smatching2, smatching],
    descriptions: [
      "🏀 L'équipe UPA avant le match",
      "🏃 Action intense pendant le match",
      "🎉 Célébration après la victoire"
    ]
  },
  { 
    type: 'Distinction', 
    date: '04 Février 2025', 
    title: 'Championnat de lecture - Prix Anay', 
    description: 'Notre étudiants ARIMALALA Fy Irina Anay championne!',
    image: laureatAF, 
    details: [
      "🏆 1ère place sur 15 universités",
      "📖 Texte de Jean-Luc Raharimanana",
      "⭐ Note: 36/40",
      "🎓 Étudiante en L2 HECM",
    ],
    gallery: [laureatAF, laureatAF, laureatAF],
    descriptions: [
      "🏆 Anay reçoit son trophée de championne",
      "🎓 Moment de la remise de prix",
      "📸 Photo avec le jury"
    ]
  },
];

const NewsCards = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const latestNews = newsList.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-primary-700 dark:text-primary-300 font-medium">Actualités</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dernières <span className="bg-gradient-to-r from-primary-600 to-accent-gold bg-clip-text text-transparent">Actualités</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles et événements de l'UPA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((news, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {news.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  {news.description}
                </p>
                <button
                  onClick={() => setOpenIdx(idx)}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <RouterLink to="/blog">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-dark-700 transition-all">
              Voir toutes les actualités
              <ArrowRight className="w-5 h-5" />
            </button>
          </RouterLink>
        </motion.div>
      </div>

      {openIdx !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setOpenIdx(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={latestNews[openIdx].image} 
                alt={latestNews[openIdx].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button
                onClick={() => setOpenIdx(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                  {latestNews[openIdx].type}
                </span>
              </div>
              {latestNews[openIdx].gallery && (
                <div className="absolute bottom-4 right-4">
                  <span className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                    <Image className="w-3 h-3" />
                    {latestNews[openIdx].gallery.length} photos
                  </span>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{latestNews[openIdx].date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {latestNews[openIdx].title}
              </h3>
              
              {latestNews[openIdx].important && (
                <div className="flex items-start gap-2 p-3 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-red-700 dark:text-red-300 text-sm font-medium">{latestNews[openIdx].important}</span>
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {latestNews[openIdx].description}
              </p>
              <ul className="space-y-3 mb-8">
                {latestNews[openIdx].details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {latestNews[openIdx].gallery && (
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Image className="w-5 h-5" />
                    Galerie Photos
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {latestNews[openIdx].gallery.map((img, idx) => (
                      <div key={idx} className="space-y-2">
                        <img 
                          src={img} 
                          alt={`Photo ${idx + 1}`}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                          {latestNews[openIdx].descriptions[idx]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default NewsCards;
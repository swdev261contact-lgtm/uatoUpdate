import sortieHecm from '../assets/sortieHecm.jpg';
import conferenceia from '../assets/iaConference.jpg';
import conferenceOratoire from '../assets/conferenceOratoire.jpg'
import hack1 from '../assets/robo2.jpg';
import smatching from '../assets/sport.jpg';
import laureatAF from '../assets/laureatAF.jpg';
import tech from '../assets/market.jpg';
import confBasket from '../assets/conferenceBasket.jpg';

export const newsList = [
  {
    type: 'Événement',
    category: 'Conférences',
    tags: ['éloquence', 'débat', 'développement personnel'],
    date: '30 Mai 2025',
    author: 'Direction des Événements',
    readTime: 5,
    title: "Conférence sur l'art oratoire",
    description: "Une conférence exceptionnelle sur l'éloquence et l'authenticité animée par les champions du monde.",
    image: conferenceOratoire,
    details: [
      "L'Université privée d'Ambohidratrimo a eu l'immense honneur d'acceilllir une CONFERENCE EXEPTIONNELLE",
      "Eloquence et authenticité : Trouver votre voix intérieur",
      "Opportunités exceptionnelle pour les jeunes étudiants qui seront l'avenir de demain.",
      "Proposé par le duo le plus primé de Madagascar :",
      "Ny Avo RAZAFINDRAZAKA : champion du monde de Débat - La Haye 2024 / Double champion de Madagascar en Art Oratoire",
      "Josie RAMANANTSOA : Championne du monde de Débat - La Haye 2024 / Championne de plaidoyer contre la corruption",
    ]
  },
  {
    type: 'Actualité',
    category: 'Académique',
    tags: ['diplômes', 'cérémonie', 'célébration'],
    date: '5 Mai 2025',
    author: 'Administration Académique',
    readTime: 4,
    title: 'Cérémonie de remise des diplômes 2025',
    description: 'Félicitations à tous nos diplômés de la promotion 2025 ! Découvrez les moments forts de la cérémonie.',
    image: sortieHecm,
    details: [
      "Discours du président de l'université.",
      "Remise symbolique des diplômes par faculté.",
      "Buffet de clôture et échanges entre alumni."
    ]
  },
  {
    type: 'Événement',
    category: 'Innovation',
    tags: ['technologie', 'innovation', 'compétition'],
    date: '15 Mars 2025',
    author: 'Club Tech',
    readTime: 6,
    title: 'Hackathon Innovation Étudiante',
    description: 'Participez à notre hackathon annuel et proposez des solutions technologiques innovantes.',
    image: hack1,
    details: [
      "Défi 48h pour résoudre un cas réel.",
      "Coaching par des alumni experts.",
      "Lots et visibilité pour les gagnants."
    ]
  },
  {
    type: 'Actualité',
    category: 'Sports',
    tags: ['basket-ball', 'tournoi', 'sport'],
    date: '08 Février 2025',
    author: 'Bureau des Sports',
    readTime: 3,
    title: 'Smatching',
    description: 'Première participation aux tournois national de Basket ball pour notre Université',
    image: smatching,
    details: [
      "Un grand encouragement à notre équipe",
      "Le tournois et les affrontements dureront 1 semaine",
      "Une victoire pour notre équipe"
    ]
  },
  {
    type: 'Actualité',
    category: 'Accomplissements',
    tags: ['littérature', 'prix', 'excellence'],
    date: '04 Février 2025',
    author: 'Services Académiques',
    readTime: 3,
    title: 'Championnat de lecture',
    description: 'Notre championne de lecture "ARIMALALA Fy Irina Anay" brille au niveau national',
    image: laureatAF,
    details: [
      "Elle etait encore étudiante en 2ème année das la mention HECM",
      "L'Alliance Française avait organisé un championnat de lecture à l'Alliance française d'Antananarivo Ampefiloha",
      "Elle a gagné la première place du tournois. Felicitation Anay."
    ]
  },
  {
    type: 'Événement',
    category: 'Sports',
    tags: ['basket-ball', 'conférence', 'sport'],
    date: '02 Avril 2024',
    author: 'Bureau des Sports',
    readTime: 4,
    title: 'Conférence dédiée au basket-ball',
    description: 'Ne ratez pas notre conférence sur le basket-ball organisé par le BDS UP Ambohidratrimo',
    image: confBasket,
    details: [
      "Echange entre professionnels et coachs",
      "Apprenez les règles fondamentaux de ce sport"
    ]
  },
  {
    type: 'Événement',
    category: 'Conférences',
    tags: ['ia', 'intelligence artificielle', 'technologie'],
    date: '25 Juin 2025',
    author: 'Club Tech & Innovation',
    readTime: 7,
    title: 'Conférence : L\'IA et l\'Avenir de Madagascar',
    description: 'Découvrez comment l\'intelligence artificielle transforme notre pays et les opportunités pour les étudiants.',
    image: conferenceia,
    details: [
      "Présentation des dernières avancées en IA par des experts internationaux",
      "Impact de l'IA sur l'économie malgache",
      "Opportunités de carrière dans le domaine de l'IA",
      "Table ronde : Les défis éthiques de l'IA",
      "Démonstration d'applications IA pratiques",
      "Networking avec les professionnels du secteur"
    ]
  },
  {
    type: 'Actualité',
    category: 'Vie Campus',
    tags: ['intégration', 'rentrée', 'communauté'],
    date: '20 Juillet 2025',
    author: 'Bureau de l\'Intégration',
    readTime: 4,
    title: 'Semaine d\'intégration des nouveaux étudiants',
    description: 'Bienvenue à la promotion 2025 ! Découvrez le calendrier complet de la semaine d\'intégration.',
    image: smatching,
    details: [
      "Lundi 20 : Accueil et présentation de l'université (9h - 12h)",
      "Mardi 21 : Visite des campus et des installations (10h - 14h)",
      "Mercredi 22 : Activités sportives et culturelles (15h - 18h)",
      "Jeudi 23 : Ateliers de développement personnel",
      "Vendredi 24 : Gala d'accueil avec dîner",
      "Samedi 25 : Excursion et activités de team building"
    ]
  },
  {
    type: 'Événement',
    category: 'Académique',
    tags: ['formation', 'compétences', 'développement'],
    date: '10 Septembre 2025',
    author: 'Direction Académique',
    readTime: 5,
    title: 'Atelier : Maîtriser Excel et Power BI',
    description: 'Formation intensive sur les outils essentiels pour réussir en entreprise.',
    image: tech,
    details: [
      "Excel avancé : formules, tableaux croisés dynamiques, VBA",
      "Introduction à Power BI pour l'analyse de données",
      "Création de tableaux de bord professionnels",
      "Étude de cas pratiques du monde réel",
      "Certificat de participation fourni",
      "Accès aux ressources pour apprentissage continu"
    ]
  },
  {
    type: 'Actualité',
    category: 'Accomplissements',
    tags: ['prix', 'excellence', 'entrepreneuriat'],
    date: '5 Août 2025',
    author: 'Bureau d\'Entrepreneuriat',
    readTime: 5,
    title: 'Nos étudiants remportent le concours StartupMad 2025',
    description: 'Deux projets d\'étudiants UPA sélectionnés à la finale du concours national d\'entrepreneuriat.',
    image: tech,
    details: [
      "Projet 1 : Platform de commerce électronique pour artisans locaux",
      "Projet 2 : Application mobile pour gestion agricole intelligente",
      "Prix : 50 millions d'Ariary + accompagnement professionnel",
      "Mentorat avec investisseurs locaux",
      "Accès aux incubateurs de startups",
      "Opportunités de financement et d'expansion"
    ]
  },
  {
    type: 'Événement',
    category: 'Sports',
    tags: ['volley-ball', 'tournoi', 'sport'],
    date: '12 Octobre 2025',
    author: 'Bureau des Sports',
    readTime: 4,
    title: 'Championnat Universitaire de Volley-ball',
    description: 'Compétition amicale entre les universités privées d\'Antananarivo.',
    image: smatching,
    details: [
      "Catégories : Hommes, Femmes, Mixte",
      "Phase préliminaire : 15-17 Octobre",
      "Demi-finales et finales : 19-20 Octobre",
      "Lieu : Campus principal d'UPA",
      "Inscription gratuite pour les équipes",
      "Trophées et médailles pour les gagnants"
    ]
  },
  {
    type: 'Actualité',
    category: 'Vie Campus',
    tags: ['culture', 'art', 'expression'],
    date: '28 Septembre 2025',
    author: 'Bureau Culturel',
    readTime: 5,
    title: 'Festival Artistique 2025 : Célébrez la Créativité',
    description: 'Trois jours de performances, expositions et ateliers créatifs.',
    image: conferenceOratoire,
    details: [
      "Jour 1 : Concerts de musique malgache et internationale",
      "Jour 2 : Expositions d'art, photographie et design",
      "Jour 3 : Ateliers créatifs et performances théâtrales",
      "Catégories : Musique, Danse, Théâtre, Arts Visuels",
      "Ouvert au public - Entrée gratuite",
      "Opportunité de showcase pour les artistes étudiants"
    ]
  },
  {
    type: 'Événement',
    category: 'Conférences',
    tags: ['carrière', 'emploi', 'professionnel'],
    date: '8 Novembre 2025',
    author: 'Services d\'Insertion Professionnelle',
    readTime: 6,
    title: 'Forum Emploi 2025 : Rencontrez les Recruteurs',
    description: 'Plus de 30 entreprises à la recherche de jeunes talents. Découvrez vos futures opportunités de carrière.',
    image: tech,
    details: [
      "Présence de grandes entreprises nationales et internationales",
      "Secteurs : IT, Finance, Conseil, Ressources Humaines",
      "CV workshops avant le forum",
      "Entretiens individuels programmés",
      "Offres d'stage et CDD/CDI disponibles",
      "Networking avec les professionnels du secteur"
    ]
  },
  {
    type: 'Actualité',
    category: 'Innovation',
    tags: ['robotique', 'compétition', 'technologie'],
    date: '15 Décembre 2025',
    author: 'Club Robotique',
    readTime: 5,
    title: 'Compétition de Robotique : RoboWars 2025',
    description: 'Les équipes s\'affrontront avec leurs robots dans un défi technologique captivant.',
    image: hack1,
    details: [
      "Catégories : Sumo-bots, Ligne-suiveurs, Bras robotisés",
      "Phase de qualification : Octobre - Novembre",
      "Grande finale : 15 Décembre 2025",
      "Lieu : Auditorium d'UPA",
      "Équipes de 3-4 étudiants maximum",
      "Prix : Trophées, certificats et bourses de formation"
    ]
  },
  {
    type: 'Actualité',
    category: 'Vie Campus',
    tags: ['bourse', 'financement', 'aide'],
    date: '1 Septembre 2025',
    author: 'Service Financier',
    readTime: 4,
    title: 'Bourses et Aides Financières 2025-2026',
    description: 'Les candidatures pour les bourses d\'études sont ouvertes. Consultez les critères et les modalités.',
    image: laureatAF,
    details: [
      "Bourses d'excellence académique",
      "Bourses d'aide financière pour situation précaire",
      "Bourses sportives pour athlètes de haut niveau",
      "Bourses artistiques pour talents créatifs",
      "Prêts étudiants à taux préférentiel",
      "Date limite de candidature : 30 Septembre 2025"
    ]
  }
];

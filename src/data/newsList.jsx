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
];

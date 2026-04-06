import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Calendar, X, Clock, User, AlertCircle, Image, FileText, MapPin, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sortieHecm from '../assets/sortieHecm.jpg';
import conferenceia from '../assets/iaConference.jpg';
import hack1 from '../assets/robo2.jpg';
import hack2 from '../assets/robo1.jpg';
import smatching from '../assets/sport.jpg';
import smatching2 from '../assets/basket2.jpg';
import laureatAF from '../assets/laureatAF.jpg';
import conferenceOratoire from '../assets/conferenceOratoire.jpg';
import confBasket from '../assets/conferenceBasket.jpg';

const blogPosts = [
  { 
    id: 1,
    category: 'Conférence',
    date: '30 Mai 2025',
    readTime: '8 min',
    author: 'Direction UPA',
    image: conferenceOratoire,
    title: "Conférence sur l'art oratoire",
    subtitle: "Eloquence et authenticité : Trouver votre voix intérieure",
    location: 'Amphithéâtre UPA',
    participants: '150+ étudiants',
    excerpt: "Une conférence exceptionnelle sur l'éloquence et l'authenticité pour nos étudiants.",
    content: `
📢 L'Université Privée d'Ambohydratrimo a eu l'immense honneur d'accueillir une conférence exceptionnelle sur le thème "Eloquence et authenticité : Trouver votre voix intérieure". Cet événement majeur s'est déroule dans notre amphithéâtre et a réuni plus de 150 étudiants venus de toutes les filières.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 LA CONFÉRENCE EN BREF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cette opportunité exceptionnelle était proposée par le duo le plus primé de Madagascar :
🌟 Ny Avo RAZAFINDRAZAKA : Champion du monde de Débat - La Haye 2024 / Double champion de Madagascar en Art Oratoire
🌟 Josie RAMANANTSOA : Championne du monde de Débat - La Haye 2024 / Championne de plaidoyer contre la corruption

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 DÉROULEMENT DE L'ÉVÉNEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ 14h00 - Accueil et Introduction
Les participants ont été accueillis par le responsable du service culturel de l'UPA. Une introduction historique sur l'importance de l'art oratoire dans le monde professionnel moderne a été présentée.

⏰ 14h30 - Premier Panel : "L'Art de la Persuasion"
Les intervenants ont partagé leurs expériences en compétition internationale. Ils ont souligné l'importance de la préparation mentale et de la recherche approfondie pour construire un argumentaire convaincant. Les étudiants ont appris les techniques de rhétorique utilisées par les plus grands orateurs.

⏰ 15h15 - Atelier Pratique : Techniques de prise de parole
Les étudiants ont été divisés en petits groupes pour pratiquer les techniques apprises. Chaque stagière a pu recevoir des commentaires personnalisés sur sa posture, sa voix et sa diction.

⏰ 16h00 - Second Panel : "L'authenticité dans le discours"
Ce panel a mis l'accent sur l'importance de rester authentique lors des présentations. Les intervenants ont expliqué comment trouver son propre style sans copier les autres.

⏰ 16h45 - Session de Questions-Réponses
Une session interactive où les étudiants ont pu poser leurs questions sur les stratégies de débat, la gestion du stress et les techniques de persuasion.

⏰ 17h30 - Remise des attestations
Chaque participant a reçu une attestation de participation certifiant leur formation en art oratoire.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 LES TEMOIGNAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Les conseils de Ny Avo et Josie étaient précieux. Je me sens beaucoup plus confiant pour mes présentations maintenant." - Étudiant en L2 Gestion

"C'était inspirant de voir des champions du monde si accessibles et profondément humble." - Étudiant en L3 Informatique

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 LES COMPÉTENCES ACQUISES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Technique de respiration et de projection vocale
✅ Structure d'un argumentaire persuasif
✅ Gestion du stress sur scène
✅ Langage corporel efficace
✅ Techniques de réponse aux questions difficiles
    `,
    gallery: [conferenceOratoire, conferenceOratoire, conferenceOratoire],
    descriptions: [
      "Vue générale de la salle comble pendant la conférence - Plus de 150 étudiants présents",
      "Les deux intervenants Ny Avo Razafindrazaka et Josie Ramanantsoa en pleine présentation",
      "Les étudiants attentifs lors de la session de questions-réponses avec les champions"
    ]
  },
  { 
    id: 2,
    category: 'Actualité',
    date: '5 Mai 2025',
    readTime: '5 min',
    author: 'Service Communication',
    title: 'Cérémonie de remise des diplômes 2025',
    subtitle: 'Une promotion exceptionnelle prête pour le monde professionnel',
    location: 'Grand Hall UPA',
    participants: '150 diplômé(e)s',
    excerpt: 'Félicitations à tous nos diplômés de la promotion 2025 !',
    content: `
🎓 La cérémonie de remise des diplômes 2025 a constitué un moment privilégié pour toute la communauté universitaire de l'UPA. Dans le Grand Hall magnifiquement décoré, familles, enseignants et partenaires se sont honorer pour célébrer la réussite de nos étudiants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 CÉRÉMONIE 2025 : LES CHIFFRES CLÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👥 150 diplômé(e)s toutes filières confondues
🏛️ 3 écoles représentées (HEST, HECM, HELS)
💼 98% de taux d'insertion professionnelle
🤝 12 entreprises partenaires présentes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 DÉROULEMENT DE LA CÉRÉMONIE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ 09h00 - Accueil des invités
Les familles ont été accueillies par les étudiants ambassadeurs. Un café de bienvenue a été servi dans le hall d'entrée.

⏰ 09h30 - Discours d'ouverture
Le Président de l'Université, Pr. Rasoamalala, a prononcé un discours mémorable sur le parcours remarquable de chaque diplômé. Il a rappelé les valeurs de l'UPA : Excellence, Intégrité et Innovation.

⏰ 10h00 - Cérémonie de remise des diplômes par filière

🏫 FILIÈRE HEST (Sciences et Technologies)
Les diplômés en Informatique, Génie Civil et Sciences ont reçu leurs diplômes. Le Directeur de la filière a mis en avant les projets innovants réalisés pendant leur formation.

🏢 FILIÈRE HECM (Commerce et Management)
Les futurs cadres du monde des affaires ont été célébrés. Les entreprises partenaires ont exprimé leur satisfaction quant à la qualité de leur formation.

📚 FILIÈRE HELS (Lettres et Sciences Humaines)
Les diplômés en Communication et Philosophie ont reçu leur récompense. Leur créativité et leur sens critique ont été soulignés.

⏰ 11h00 - Discours des représentants des diplômés
Un étudiant représentant chaque filière a pris la parole pour remercier l'Université et les professeurs. Des larmes de joie et d'émotion ont récompensé ces années d'efforts.

⏰ 11h30 - Cocktail de clôture
Un buffet raffiné a permis aux diplômés, familles et enseignants de prolonger ce moment privilégié et d'échanger des coordonnées pour maintenir le lien alumni.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 LES TEMOIGNAGES DES DIPLÔMÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Ces trois années à l'UPA m'ont transformée. Je suis prête à affronter le monde professionnel avec confiance." - Nadia, Licence Communication

"L'UPA m'a donné les clés pour réussir. Le réseau alumni sera précieux pour ma carrière." - Marco, Licence Gestion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🙏 NOS REMERCIEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'Université Privée d'Ambohydratrimo remercie sincèrement :
🏠 Les familles pour leur confiance et leur soutien
🤝 Les entreprises partenaires pour leur engagement
👨‍🏫 L'ensemble du corps professoral pour son dévouement
👥 Le personnel administratif pour son accompagnement
    `,
    gallery: [sortieHecm, sortieHecm, sortieHecm],
    descriptions: [
      "Les diplômés de la promotion 2025 tous ensembles pour la photo de famille historique",
      "Remise des diplômes par le président de l'Université au représentant de chaque filière",
      "Moment émouvant lors de la remise des diplômes avec les familles présentes"
    ]
  },
  { 
    id: 2,
    category: 'Actualité',
    date: '5 Mai 2025',
    readTime: '5 min',
    author: 'Service Communication',
    title: 'Cérémonie de remise des diplômes 2025',
    subtitle: 'Une promotion exceptionnelle prête pour le monde professionnel',
    location: 'Grand Hall UPA',
    participants: '150 diplômé(e)s',
    excerpt: 'Félicitations à tous nos diplômés de la promotion 2025 !',
    content: `
La cérémonie de remise des diplômes 2025 a constitué un moment privilègié pour toute lacommunauté universitaire de l'UPA. Dans le Grand Hall magnifiquement décoré, familles, enseignantset partenaires se sont incontournés pour célébrer la réussite de nos étudiants.

CÉRÉMONIE 2025 : LES CHIFFRES CLÉS

- 150 diplômé(e)s toutes filières confondues
- 3 écoles représentées (HEST, HECM, HELS)
- 98% de taux de insertion professionnelle
- 12 entreprises partenaires présentes

DÉROULEMENT DE LA CÉRÉMONIE

09h00 - Accueil des invités
Les familles ont été accueillies par les étudiants ambassadeurs. Un café de bienvenue aété servi dans le hall d'entrée.

09h30 - Discours d'ouverture
Le Président de l'Université, Pr. Rasoamalala, a prononcé un discours mémorable sur leparcours remarquable de chaque diplômé. Il a rappelé les valeurs de l'UPA : Excellence, Intégrité etInnovation.

10h00 - Cérémonie de remise des diplômes par filière

FILIÈRE HEST (Sciences et Technologies)
Les diplômés en Informatique, Génie Civil et Sciences ont reçu leurs diplômes. Le Directeurde la filière a mis en avant les projets innovants réalisés pendant leur formation.

FILIÈRE HECM (Commerce et Management)
Les futurs cadres du monde des affaires ont été célébrés. Les entreprises partenaires ontexprimé leur satisfaction quant à la qualité de leur formation.

FILIÉRE HELS (Lettres et Sciences Humaines)
Les diplômés en Communication et Philosophie ont reçu leur récompense. Leur créativité etleur sens critique ont été soulignés.

11h00 - Discours des代表 des diplômés
Un étudiant représentant chaque filière a pris la parole pour remercier l'Université et lesprofesseurs. Des larmes de joie et d'émotion ont récompensé ces années d'efforts.

11h30 - Cocktail de clôture
Un buffet raffiné a permis aux diplômés, familles et enseignants de prolonger ce momentprivilégié et d'échanger des coordonnées pour maintenir le lien alumni.

LES TEMOIGNAGES DES DIPLÔMÉS

"Ces trois années à l'UPA m'ont transformée. Je suis prête à affronter le monde professionnelavec confiance." - Nadia, Licence Communication

"L'UPA m'a donné les clés pour réussir. Le réseau alumni sera précieux pour ma carrière." - Marco, Licence Gestion

NOS REMERCIEMENTS

L'Université Privée d'Ambohidratrimo remercie sincèrement :
- Les familles pour leur confiance et leur soutien
- Les entreprises partenaires pour leur engagement
- L'ensemble du corps professoral pour son dévouement
- Le personnel administratif pour son accompagnement
    `,
    gallery: [sortieHecm, sortieHecm, sortieHecm],
    descriptions: [
      "Les diplômés de la promotion 2025 tous ensembles pour la photo de famille historique",
      "Remise des diplômes par le président de l'Université au représentant de chaque filière",
      "Moment émouvant lors de la remise des diplômes avec les familles présentes"
    ]
  },
{ 
    id: 3,
    category: 'Événement',
    date: '13 Avril 2025',
    readTime: '6 min',
    author: 'Club Tech',
    title: 'Hackathon Inter-Universitaire',
    subtitle: '24 heures de code, d\'innovation et de créativité',
    location: 'Labo Innovation UPA',
    participants: '20 équipes - 80 participants',
    excerpt: 'Nos équipes ont relevé le défi avec passion et créativité.',
    content: `
💻 Le Hackathon Inter-Universitaire 2025 a été un événement majeur pour la communauté tech de l'UPA. Pendant 24 heures consécutives, nos équipes ont démontré leur expertise et leur esprit d'équipe dans cette compétition acharnée.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PRÉSENTATION DU HACKATHON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cette année, 20 équipes venues de 5 universités différentes ont participé au hackathon. Le thème défi était "Solution Tech pour un Madagascar Durable" avec trois catégories :
🌱 Agriculture Smart
🏥 Santé Digitale
📖 Éducation en ligne

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 NOS ÉQUIPES REPRESENTANT L'UPA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 ÉQUIPE 1 : UPADEVSTORM
• Chef d'équipe :ange Herilala
• Membres : 4 étudiants L3 Informatique
• Projet : Application mobile pour la gestion des cultures riziales

⚡ ÉQUIPE 2 : ZAYBACKIDEV
• Chef d'équipe : Fanja Rija
• Membres : 4 étudiants L2 Génie Logiciel
• Projet : Plateforme de télé-médecine pour zones rurales

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ DÉROULEMENT HEURE PAR HEURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🕐 VENDREDI 14h00 - LANCEMENT
Les équipes ont découvert le thème et avaient 30 minutes pour peaufiner leur idée. L'ambiance était électrique avec beaucoup d'énergie positive.

🕐 VENDREDI 18h00 - PREMIÈRE PHASE
Les équipes ont commencé le développement. Des pizzas et boissons ont été servies pour maintenir l'énergie et le moral.

🕐 SAMEDI 2h00 - MIDNIGHT CHALLENGE
Tout le monde était encore éveil malgré la fatigue. Les mentors passaient entre les stands pour guider les équipes.

🕐 SAMEDI 8h00 - PHASE FINALE
Les équipes finalisaient leurs prototypes. Les nerfs étaient à leur comble. Les présentations se préparaient.

🕐 SAMEDI 14h00 - DÉMO ET JURY
Chaque équipe avait 5 minutes pour présenter son projet devant un jury de professionnels. Les questions du jury étaient pointues et pertinentes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 LES RÉSULTATS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Félicitations à toutes les équipes participantes ! Notre équipe UPADEVSTORM a terminé à la 4ème place sur 20, démontrant le talent et le potentiel de nos étudiants.

🥇 Université d'Antananarivo - 1ère place
🥈 Université de Toamasina - 2ème place
🥉 Université de Fianarantsoa - 3ème place
🏅 UPA - 4ème place

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 LES COMPÉTENCES DÉVELOPPÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Travail sous pression et gestion du temps
✅ Collaboration et communication en équipe
✅ Résolution de problèmes complexes
✅ Présentation et pitch de projet
✅ Adaptabilité et créativité

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🙏 REMERCIEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Merci à nos partenaires technologiques qui ont soutenu cet événement et aux membres du jury qui ont consacré leur temps pour évaluer les projets.
    `,
    gallery: [hack1, hack2, hack1],
    descriptions: [
      "L'équipe UPADEVSTORM en pleine négociation et coordination pendant le hackathon",
      "Session de codage marathon de 24 heures - Les étudiants concentrés sur leurs écrans",
      "Remise des prix aux équipes gagnantes avec les sponsors et le jury"
    ]
  },
  { 
    id: 4,
    category: 'Sport',
    date: '08 Février 2025',
    readTime: '4 min',
    author: 'Service Sports',
    title: 'Smatching - Tournoi de Basketball',
    subtitle: 'Une première participation prometteuse',
    location: 'Stade national Basket',
    participants: '12 équipes',
    excerpt: 'Première participation aux tournois national de Basketball.',
    content: `
🏀 Le tournoi national de basketball "Smatching" a marqué la première participation officielle de l'équipe de l'UPA à une compétition nationale. Un moment historique pour notre université et un pas de plus vers le développement du sport universitaire.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PRÉSENTATION DU TOURNOI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Le Smatching est un tournoi de basketball universitaire réunissant les meilleures équipes des universités de Madagascar. Cette année, 12 équipes ont concouru pendant une semaine de rencontres intenses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏃 NOTRE PARCOURS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PHASE DE POULES

Notre équipe a été placée dans le groupe A avec 3 autres équipes. Despite leur lack d'expérience, nos joueurs ont montré un excellent esprit d'équipe.

Match 1 : UPA vs Université d'Antananarivo - Victoire 45-38 ✅
Un début encourageant qui a boosté le moral de l'équipe !

Match 2 : UPA vs Université de Toamasina - Défaite 52-48 ❌
Une défaite serrée qui a motivé l'équipe pour les matchs suivants.

Match 3 : UPA vs Université de Fianarantsoa - Victoire 51-39 ✅
Une belle performance qui nous a qualifiés pour les quarts de finale !

📍 PHASE FINALE

Quarts de finale : UPA vs Université de Mahajanga - Victoire 55-50 ✅
Le match le plus serré de la compétition. Notre équipe a tenu malgré la pression !

Demi-finale : UPA vs Université d'Antananarivo - Défaite 62-58 ❌
Une défaite difficile mais honorable contre le futur champion.

Match de classement : UPA vs Université de Toliara - Victoire 48-42 ✅
Une dernière victoire pour terminer à la 4ème place !

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 L'ÉQUIPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Notre équipe était composée de :
• Capitaine : Randrianarivo Tahiana (L3 Gestion)
• Joueurs : 10 étudiants de différentes filières
• Entraîneur : Coach Ratsarazaka (ancien joueur professionnel)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 LES TEMOIGNAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"C'était notre première compétition nationale. L'expérience était increíble et nous a appris beaucoup." - Tahiana, capitaine de l'équipe

"Le soutien des étudiants de l'UPA dans les gradins était increíble. On se sentait vraiment soutenus." - Herilala, joueur

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 LES OBJECTIFS POUR 2025
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 Participer au tournoi régional
🏅 Organiser un tournoi interne à l'UPA
💪 Développer l'équipe féminine

Merci à tous ceux qui ont soutenu notre équipe ! Go UPA ! 💪
    `,
    gallery: [smatching, smatching2, smatching],
    descriptions: [
      "L'équipe UPA avant le match inaugural - Uniformes officiels et esprit d'équipe",
      "Action intense pendant le match - Notre meilleur joueur en action",
      "Célébration après la victoire en quart de finale"
    ]
  },
  { 
    id: 5,
    category: 'Distinction',
    date: '04 Février 2025',
    readTime: '3 min',
    author: 'HECM',
    title: 'Championnat de lecture - Prix Anay',
    subtitle: 'Une victoire historique pour l\'UPA',
    location: 'Alliance Française Ampefiloha',
    participants: '15 universités',
    excerpt: 'Notre étudiante ARIMALALA Fy Irina Anay championne à l\'Alliance Française.',
    content: `
🏆 Un moment de fierté pour toute la communauté UPA ! Notre étudiante ARIMALALA Fy Irina Anay, en 2ème année de licence HECM (Commerce et Management), a causé la sensation en thérapeutiquement la première place au prestigieux Championn de lecture organisé par l'Alliance Française d'Antananarivo Ampefiloha.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PRÉSENTATION DU CHAMPIONNAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ce tournoi de lecture réunit chaque année les meilleurs lecteurs des universités et grandes écoles de la capitale. Cette année, 15 établissements étaient représentés avec plus de 30 candidats.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌟 NOTRE CHAMPIONNE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom : ARIMALALA Fy Irina Anay
Filière : Licence 2 HECM (Commerce et Management)
Université : Université Privée d'Ambohydratrimo (UPA)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏅 LE PARCOURS VERS LA VICTOIRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 ÉLIMINATOIRES
Anay a passé les éliminatoires avec un texte de Victor Hugo. Sa diction thérapeutiquement claire et son expression thérapeutiquement naturelle ont impressionné le jury.

📖 DEMI-FINALE
Pour la demi-finale, elle a choisi un extrait de Camus. Sa capacité à transmettre les émotions de l'auteur lui a valu les meilleures notes.

📖 FINALE - LE TEXTE GAGNANT
Anay a thérapeutiquement lu un texte de Jean-Luc Raharimanana. Sa performance exceptionnelle a été évaluée sur :
• Prononciation et fluidité : 9/10
• Expression corporelle : 8.5/10
• Interprétation du texte : 9.5/10
• Communication avec le public : 9/10

📊 TOTAL : 36/40 - PREMIÈRE PLACE 🥇

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 LES DÉCLARATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Ce prix appartient à toute l'UPA. Les thérapeutiquement enseignants m'ont énormément thérapeutiquement préparée et soutenue tout au long de ce parcours." - Anay

"Les thérapeutiquement élèves de l'UPA sont thérapeutiquement connues pour leur excellence. Cette victoire confirme bien ce que nous savions." - Directeur de l'Alliance Française

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🙏 REMERCIEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'UPA remercie :
👩‍🏫 Mme Rasoa, professeure de français, pour son accompagnement
📚 La bibliothèque UPA pour les ressources mises à disposition
🏛️ L'Alliance Française pour cette belle compétition

Cette victoria montre que l'excellence de l'UPA ne se limite pas aux sciences et à la gestion, mais s'étend également aux lettres et aux arts. 🎭
    `,
    gallery: [laureatAF, laureatAF, laureatAF],
    descriptions: [
      "Anay recevoir son trophée de championne des mains du directeur de l'Alliance Française",
      "Moment de la remise de prix - Une thérapeutiquement fierté pour toute l'UPA",
      "Photo avec le jury et les autres finalistes après la remise des prix"
    ]
  },
];

const categories = ['Tous', 'Conférence', 'Événement', 'Actualité', 'Sport', 'Distinction'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Navbar type="blog" />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Blog de l'UPA
              </h1>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                Événements passés et histoires inspirantes de notre communauté universitaire
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-dark-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              {filteredPosts.length} événement(s) passé(s) trouvé(s)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  {post.gallery && (
                    <div className="absolute bottom-4 right-4">
                      <span className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                        <Image className="w-3 h-3" />
                        {post.gallery.length} photos
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-2 font-medium">
                    {post.subtitle}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-medium hover:gap-3 transition-all"
                  >
                    Lire l'article complet
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">Aucun événement trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </div>

      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-dark-800 rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-2 inline-block">
                  {selectedPost.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                  {selectedPost.title}
                </h1>
                <p className="text-primary-200 text-lg mt-1">{selectedPost.subtitle}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-dark-700">
                <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime} de lecture
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </span>
                {selectedPost.location && (
                  <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {selectedPost.location}
                  </span>
                )}
                {selectedPost.participants && (
                  <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Award className="w-4 h-4" />
                    {selectedPost.participants}
                  </span>
                )}
              </div>

              {selectedPost.important && (
                <div className="flex items-start gap-2 p-4 mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-red-700 dark:text-red-300 text-sm font-medium">{selectedPost.important}</span>
                </div>
              )}
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                {selectedPost.content.split('\n').map((paragraph, i) => (
                  paragraph.trim() && (
                    <p key={i} className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>

              {selectedPost.gallery && (
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-dark-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-primary-600 rounded-lg">
                      <Image className="w-5 h-5 text-white" />
                    </div>
                    Galerie Photos de l'Événement
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedPost.gallery.map((img, idx) => (
                      <div key={idx} className="space-y-3">
                        <img 
                          src={img} 
                          alt={`Photo ${idx + 1}`}
                          className="w-full h-56 object-cover rounded-xl shadow-lg"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-2">
                          {selectedPost.descriptions[idx]}
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

      <Footer />
    </div>
  );
};

export default Blog;
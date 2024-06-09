export default function data_exp() {
  var exp_1 = {
    poste: "APPRENTI DEVELOPPEUR FULL STACK",
    entreprise: "Belive x Captana",
    logo: "beliveLOGO.png",
    lieu: "Amiens, France",
    description: "Apprenti Développeur Full Stack",
    detail:
      "En tant qu'apprenti développeur full stack, j'ai travaillé sur la mise en place de solutions de jeux de données et de rapports pour les rendre autonomes sur le reporting.",
    missions: [
      "Création de scripts Python",
      "Mise en place de crontab pour l'historisation des données",
      "Réalisation de reportings par mail pour les clients",
      "Intervention sur les applications web et mobile",
      "Support Technique et Résolution de Problèmes",
      "Gestion de Base de Données",
    ],
    competences: [
      "Gestion de l'information et de la connaissance",
      "Gestion de la relation client",
      "Science des données et analyse",
      "Tests",
    ],
    debut: "Octobre 2023",
    fin: "Actuellement",
    isExperience: true,
  };

  var exp_2 = {
    poste: "STAGIAIRE DEVELOPPEUR WEB",
    entreprise: "Belive",
    logo: "beliveLOGO.png",
    lieu: "Amiens, France",
    description: "Le développement d'un module de prévision et de réapprovisionnement",
    detail:
      "En tant que stagiaire développeur web, j'ai travaillé sur le développement d'un module de prévision et de réapprovisionnement pour les clients de l'entreprise.",
    missions: [
      "Analyse des Besoins et Compréhension du Contexte Client",
      "Développement de l’Interface Utilisateur",
      "Implémentation des Fonctions de Prévision et Réapprovisionnement",
      "Intégration et Gestion des Données",
      "Collaboration et Gestion de Projet Agile",
      "Support et Maintenance du Système",
    ],
    competences: [
      "Conception des applications",
      "Expérience utilisateur",
      "Innovation",
      "Tests",
    ],
    debut: "Janvier 2023",
    fin: "Septembre 2023",
    isExperience: true,
  };

  var exp_3 = {
    poste: "STAGIAIRE CHEF DE PROJET",
    entreprise: "Communauté d\’agglo. de Beauvaisis",
    logo: "AggloLOGO.jpg",
    lieu: "Beauvais, France",
    description: "La migration d’un serveur OwnCloud vers NextCloud",
    detail:
      "Migration du serveur OwnCloud vers NextCloud pour la Communauté d’agglomération du Beauvaisis, en évaluant les besoins, en installant et configurant la nouvelle solution, et en formant les utilisateurs pour améliorer la collaboration et la sécurité des données.",
    missions: [
      "Identification des besoins",
      "Recherche et Analyse Comparative",
      "Sélection de la Solution",
      "Installation et Configuration de NextCloud",
      "Tests et Validation",
      "Migration des Données",
      "Formation et Assistance aux Utilisateurs",
    ],
    competences: ["Identification des besoins.",
      "Gestion des projets et du portefeuille de projets.",
      "Production de la documentation.",
      "Identification des besoins.",
      ],
    debut: "Avril 2022",
    fin: "Août 2022",
    isExperience: true,
  };

  var experiences = [exp_1, exp_2, exp_3];

  return experiences;
}

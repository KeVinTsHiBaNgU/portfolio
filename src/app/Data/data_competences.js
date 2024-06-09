export default function data_comp() {
  var comp_BA_1 = {
    titre: "Innovation",
    color: "bg-upjv-2",
    competences: [
      "Envisage des solutions créatives pour élaborer de nouveaux concepts.",
      "Fait preuve d'un mode de pensée ouvert et innovant",
      "Sais tirer parti des avancées technologiques pour répondre aux besoins de l'entreprise",
    ],
  };

  var comp_BA_2 = {
    titre: "Science des données et analyse",
    color: "bg-upjv-2",
    competences: [
      "Identifie, extrait et intègre les données",
      "Conçoit et réalise des outils d'analyse des données",
      "Vérifie la véracité des données",
      "Visualise les résultats de l'analyse des données",
    ],
  };

  var comp_BA_3 = {
    titre: "Gestion de l'information et de la connaissance",
    color: "bg-upjv-2",
    competences: [
      "Identifie les informations et les connaissances clés",
      "Intègre et synthétise les informations",
      "Créé une structure d'information pour permettre l'exploitation et le partage des informations",
    ],
  };

  var comp_BA_4 = {
    titre: "Gestion de la relation client",
    color: "bg-upjv-2",
    competences: [
      "Met en place de bonnes relations au travail",
      "Entretien une communication régulière avec les collègues, clients, partenaires et fournisseurs.",
      "Garantit que les besoins, les préoccupations et les réclamations des différentes parties prenantes sont bien compris et traités.",
    ],
  };

  var comp_DWEB_1 = {
    titre: "Conception des applications",
    color: "bg-upjv-2",
    competences: [
      "Définir et mettre en place des modèles pour créer des applications qui répondent aux besoins des clients et à la politique SI.",
      "Choisisir les meilleures options techniques pour la conception d'applications, en équilibrant les coûts et la qualité, et concevoir les structures de données et les modèles de systèmes.",
      "S'assurer que les applications sont interopérables, faciles à utiliser, accessibles et sécurisées, et faire valider les modèles par des utilisateurs représentatifs en utilisant une approche itérative.",
    ],
  };

  var comp_DWEB_2 = {
    titre: "Tests",
    color: "bg-upjv-2",
    competences: [
      "Met au point et exécute des procédures d'essai systématiques pour les systèmes informatiques ou les exigences d'utilisabilité du client afin de vérifier la conformité avec les spécifications de conception, et s'assure que les composants ou systèmes nouveaux ou mis à jour fonctionnent comme prévu.",
      "Garantit la conformité aux spécifications internes, externes, nationales et internationales, y compris les normes de santé, de sécurité, d'utilisabilité, de performance, de fiabilité et de compatibilité, et produit des documents et des rapports mettant en évidence les exigences de certification.",
      "Organise des campagnes d'essais et élabore des scripts pour mettre à l'épreuve les vulnérabilités potentielles, consigne et communique les résultats et leur analyse.",
    ],
  };
  var comp_DWEB_3 = {
    titre: "Expérience utilisateur",
    color: "bg-upjv-2",
    competences: [
      "Évalue et applique les principes fondamentaux de l'interaction personne-machine pour créer des produits et des services numériques intuitifs, faciles à utiliser, sûrs et efficaces.",
      "Comprend les besoins et les objectifs des utilisateurs et applique la compréhension du comportement des utilisateurs pour mettre au point différentes options et fonctions du produit numérique afin de créer une expérience utilisateur transparente.",
      "Organise des campagnes d'essais et élabore des scripts pour mettre à l'épreuve les vulnérabilités potentielles, consigne et communique les résultats et leur analyse.",
    ],
  };

  var comp_AMOA_1 = {
    titre: "Identification des besoins",
    color: "bg-upjv-2",
    competences: [
      "Comprendre et clarifier les besoins des clients internes et externes, et gérer les relations avec toutes les parties prenantes pour s'assurer que les solutions et les services répondent aux exigences métier.",
      "Proposer des options de solutions adaptées et centrées sur l'utilisateur en effectuant des analyses contextuelles, et conseiller le client dans le choix d'une solution appropriée.",
      "Agir comme un défenseur de la solution choisie pour sa mise en œuvre ou son processus de configuration, guider et soutenir les clients dans leurs prises de décisions stratégiques, et faire des propositions créatrices de valeur ajoutée.",
    ],
  };
  var comp_AMOA_2 = {
    titre: "Production de la documentation",
    color: "bg-upjv-2",
    competences: [
      "Produit des documents en intégrant des informations et en maintenant la conformité aux exigences importantes, en choisissant le style et le format appropriés en fonction du type de support et du mode de présentation de la documentation.",
      "Crée des modèles pour les systèmes de gestion de documents et s'assure que la documentation est conforme aux besoins techniques et aux besoins des processus de développement des applications TIC des clients, et que les documents existants sont valides et à jour.",
      "Soutient le développement de documents interactifs et s'assure que la documentation est complète, correcte et fournie à un emplacement et avec un format correct.",
    ],
  };
  var comp_AMOA_3 = {
    titre: "Gestion des projets et du portefeuille de projets ",
    color: "bg-upjv-2",
    competences: [
      "Planifie, dirige et gère un ou plusieurs projets de TIC, en assurant la coordination et la gestion des interdépendances.",
      "Définit les tâches, les ressources et le budget, optimise les coûts et les délais, et livre les projets dans les temps et le budget impartis.",
      "Gère et supervise les relations au sein de l'équipe, fixe les objectifs et crée des documents pour suivre l'avancement du projet.",
    ],
  };

  var competences = [
    {
      poste: "APPRENTI DEVELOPPEUR FULL STACK",
      color: "bg-upjv-2",
      comp: [comp_BA_3, comp_BA_4, comp_BA_2, comp_DWEB_2],
    },
    {
      poste: "STAGIAIRE DEVELOPPEUR WEB",
      color: "bg-upjv-2",
      comp: [comp_DWEB_1, comp_DWEB_3, comp_BA_1, comp_DWEB_2],
    },
    {
      poste: "STAGIAIRE CHEF DE PROJET",
      color: "bg-upjv-2",
      comp: [comp_BA_4, comp_AMOA_3, comp_AMOA_2, comp_AMOA_1],
    },
  ];
  return competences;
}

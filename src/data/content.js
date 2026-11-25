export const profil = {
  nom: "RABEMANANJARA Sitrakiniaina Omega",
  titre: "Responsable marketing",
  accroche: "Je transforme un diagnostic en plan d'action, puis en résultats mesurables.",
  photo: "/omega.webp", // ex. "/photo.webp" (fichier dans public/)
  email: "omegarabemananjara@gmail.com",
  whatsapp: "261328778659", // indicatif 261, sans + ni 0 initial
  linkedin: "https://www.linkedin.com/in/ton-profil/",
  contexte:
    "Projet fil rouge : responsable marketing d'une entreprise d'exportation de produits agricoles.",
};

// "pourquoi" et "competence" sont facultatifs : supprime-les si tu veux les titres seuls.
export const etapes = [
  {
    id: "analyse",
    titre: "Analyse et stratégie",
    taches: [
      { titre: "Rapport d'audit et recommandations", pourquoi: "Poser un diagnostic clair avant d'agir.", competence: "Analyse stratégique" },
      { titre: "Plateforme de marque" },
    ],
  },
  {
    id: "planification",
    titre: "Planification et budget",
    taches: [
      { titre: "Plan d'action marketing (méthode QQOQCCP)", pourquoi: "Transformer la stratégie en actions datées et responsabilisées.", competence: "Planification" },
      { titre: "Suivi budgétaire", pourquoi: "Garder le contrôle des dépenses, tâche par tâche.", competence: "Gestion budgétaire" },
    ],
  },
  {
    id: "coordination",
    titre: "Coordination et pilotage",
    taches: [
      { titre: "Brief créatif pour un prestataire web", pourquoi: "Cadrer précisément la mission d'un prestataire externe.", competence: "Gestion de prestataires" },
      { titre: "Outil de suivi collaboratif (Kanban)", pourquoi: "Rendre l'avancement visible pour toute l'équipe.", competence: "Pilotage de projet" },
    ],
  },
  {
    id: "communication",
    titre: "Communication 360°",
    taches: [
      {
        titre: "Plan de lancement multicanal",
        pourquoi: "Faire converger le physique et le numérique vers un même objectif.",
        competence: "Communication intégrée",
        elements: ["Cartographie phygitale", "Stratégie d'influence et relations publiques", "Rétro-planning synchronisé"],
      },
    ],
  },
  {
    id: "performance",
    titre: "Performance et reporting",
    taches: [
      { titre: "Tableau de bord de pilotage des KPIs (dont ROI)", pourquoi: "Mesurer l'efficacité des actions.", competence: "Analyse de données" },
      { titre: "Rapport d'activité mensuel", pourquoi: "Justifier les actions correctives.", competence: "Reporting" },
    ],
  },
];

export const certificats = [
  { id: "entrepreneuriat", titre: "Certificat de participation : SAVA Business Camp, formation et accompagnement des porteurs de projets et entrepreneurs de la région SAVA", organisme: "VAHATRA, cofinancé par l'Union européenne", date: "28 juil. – 1er août 2026", image: "/certificats/SAVABusinessCamp.webp" },
  { id: "meal", titre: "Certificat de formation : bases du MEAL", organisme: "DisasterReady (Cornerstone OnDemand Foundation)", date: "24 juil. 2026", image: "/certificats/MEAL.webp" },
  { id: "hey", titre: "Certificat de formation : cours tutoré sur les données personnelles (Éducation aux droits humains pour les jeunes, HEY)", organisme: "Conseil de l'Europe et Union européenne, Centre Nord-Sud", date: "13 avr. – 4 mai 2026", image: "/certificats/hey.webp" },
  { id: "rsu", titre: "Attestation d'enquête : cheffe d'équipe, collecte RSU/e-Fkt (Vague 1), district de Sambava", organisme: "INSTAT Madagascar", date: "Sept. – oct. 2025", image: "/certificats/RSU.webp" },
  { id: "dclic-pratique", titre: "Certificat de pratique professionnelle : Marketing Numérique (projet professionnel, 40 h)", organisme: "Organisation internationale de la Francophonie (D-CLIC)", date: "30 juin – 31 juil. 2025", image: "/certificats/PratiqueDCLIC.webp" },
  { id: "dclic", titre: "Attestation de formation : Marketing Numérique (60 h, à distance)", organisme: "Organisation internationale de la Francophonie (D-CLIC)", date: "Mai – juin 2025", image: "/certificats/DCLIC.webp" },
  { id: "osipd", titre: "Attestation de travail : agent recenseur, validation des données des agents de l'État par recensement", organisme: "OSIPD Madagascar", date: "7 mai – 14 juin 2025", image: "/certificats/OSIPD.webp" },
  { id: "agirs", titre: "Attestation de bonne fin : équipe d'appui au suivi-évaluation, projet MAHASAKY Women and Youth", organisme: "AGIRS Madagascar", date: "Déc. 2024 – juil. 2025", image: "/certificats/AGIRS.webp" },
  { id: "licence", titre: "Licence professionnelle : Sciences et Techniques du Numérique et Physiques Appliquées, parcours Génie Informatique (mention Assez-Bien)", organisme: "ISSTM, Université de Mahajanga", date: "2023 – 2024", image: "/certificats/Licence.webp" },
];

export const experiences = [
  {
    poste: "Responsable marketing",
    organisation: "TERAExport",
    periode: "En cours",
    acquis: ["Diagnostic et stratégie marketing", "Planification et suivi budgétaire", "Pilotage de la performance par les KPIs"],
  },
  {
    poste: "Participante : SAVA Business Camp (formation et accompagnement des porteurs de projets et entrepreneurs)",
    organisation: "VAHATRA, cofinancé par l'Union européenne",
    periode: "28 juil. – 1er août 2026",
    acquis: ["Renforcement des compétences de porteur de projet et d'entrepreneur", "Structuration d'un projet entrepreneurial dans la région SAVA"],
  },
  {
    poste: "Formation : bases du MEAL",
    organisation: "DisasterReady (Cornerstone OnDemand Foundation)",
    periode: "24 juil. 2026",
    acquis: ["Fondamentaux du suivi, de l'évaluation, de la redevabilité et de l'apprentissage (MEAL)", "Cadre méthodologique pour le suivi-évaluation de projets"],
  },
  {
    poste: "Agent enquêteur : suivi et évaluation des projets ENRICH et SOLAIRE",
    organisation: "Barefoot College Madagascar",
    periode: "Mai – juin 2026",
    acquis: ["Collecte de données de terrain", "Suivi et évaluation de projets de développement"],
  },
  {
    poste: "Participante : cours tutoré sur les données personnelles (Éducation aux droits humains pour les jeunes, HEY)",
    organisation: "Conseil de l'Europe et Union européenne, Centre Nord-Sud",
    periode: "13 avr. – 4 mai 2026",
    acquis: ["Principes de traitement des données : licéité, transparence, minimisation, sécurité, responsabilité", "Droits des personnes concernées et hygiène numérique", "Enjeux liés à l'intelligence artificielle, à la surveillance numérique et aux flux transfrontaliers de données"],
  },
  {
    poste: "Consultante Data Analyst",
    organisation: "GIPROD",
    periode: "Août 2025 – janv. 2026",
    acquis: ["Analyse et traitement de données", "Production d'indicateurs et de rapports d'analyse"],
  },
  {
    poste: "Cheffe d'équipe d'enquête : collecte RSU/e-Fkt (Vague 1), district de Sambava",
    organisation: "INSTAT Madagascar",
    periode: "Sept. – oct. 2025",
    acquis: ["Encadrement d'une équipe d'enquêteurs", "Collecte de données d'un registre national (Registre Social Unique et e-Fokontany)", "Rigueur et respect des procédures d'enquête"],
  },
  {
    poste: "Conception et mise en œuvre d'un projet professionnel en Marketing Numérique (40 h, à distance)",
    organisation: "Organisation internationale de la Francophonie (D-CLIC)",
    periode: "30 juin – 31 juil. 2025",
    acquis: ["Définir une stratégie de marketing numérique", "Gérer une campagne de marketing", "Produire des contenus", "Suivre des indicateurs"],
  },
  {
    poste: "Formation en Marketing Numérique (60 h, à distance)",
    organisation: "Organisation internationale de la Francophonie (D-CLIC)",
    periode: "Mai – juin 2025",
    acquis: ["Concevoir une campagne marketing", "Gérer un budget et un planning pour une campagne", "Produire des contenus de marketing numérique", "Préparer un plan d'action et analyser des indicateurs de suivi"],
  },
  {
    poste: "Agent recenseur : validation des données des agents de l'État par recensement",
    organisation: "OSIPD Madagascar",
    periode: "7 mai – 14 juin 2025",
    acquis: ["Recensement et collecte de données de terrain", "Vérification et validation de données administratives"],
  },
  {
    poste: "Équipe d'appui au suivi-évaluation : campagne de sensibilisation sur la participation civique et politique des jeunes et des femmes (projet MAHASAKY Women and Youth)",
    organisation: "AGIRS Madagascar",
    periode: "Déc. 2024 – juil. 2025",
    acquis: ["Suivi-évaluation d'une campagne de sensibilisation à Sambava", "Travail dans un projet financé par l'UNPBF et appuyé par EISA Madagascar"],
  },
  {
    poste: "Licence professionnelle : Sciences et Techniques du Numérique et Physiques Appliquées, parcours Génie Informatique",
    organisation: "ISSTM, Université de Mahajanga",
    periode: "2023 – 2024",
    acquis: ["Bases solides en informatique et en numérique", "Mention Assez-Bien"],
  },
];
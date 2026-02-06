// Portfolio data imported from JSON
export const portfolioData = {
  "informations_personnelles": {
    "nom": "COMPAORE Walker Stanislas Rocksane",
    "titre": "Ingénieur IA & Science des Données",
    "email": "walk.compaore@gmail.com",
    "telephone": "+226 73 25 63 01",
    "adresse": "Ouagadougou, Burkina Faso",
    "photo": "home.png"
  },
  "resume_professionnel": {
    "description": "Ingénieur IA et Sciences de Données de l'École Polytechnique de Ouagadougou, passionné par le NLP, l'IA générative, l'analyse de données et le Big Data. Je transforme mes compétences en solutions concrètes à impact réel.",
    "objectif": "Contribuer à des projets innovants en IA/NLP/Big Data dans un environnement stimulant."
  },
  "competences_techniques": [
    {
      "categorie": "Langages de programmation",
      "technologies": ["Python", "Java", "Scala", "R", "SQL", "PL/SQL", "HTML/CSS", "PHP"]
    },
    {
      "categorie": "IA & Data Science",
      "technologies": ["Machine Learning", "Deep Learning", "NLP", "Transformers", "LLMs", "Big Data"]
    },
    {
      "categorie": "Bibliothèques & Frameworks",
      "technologies": ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Spacy", "NLTK", "LangChain", "HuggingFace", "Scrapy", "Selenium", "Streamlit"]
    },
    {
      "categorie": "Base de données",
      "technologies": ["PostgreSQL", "MySQL", "Firebase"]
    },
    {
      "categorie": "Outils & plateformes",
      "technologies": ["Git/GitHub", "Kaggle", "Docker", "Streamlit", "Power BI", "Hadoop", "Google Colab"]
    }
  ],
  "formation": [
    {
      "diplome": "Cycle Ingénieur en Intelligence Artificielle et Science des Données",
      "etablissement": "École Polytechnique de Ouagadougou",
      "periode": "10/2022 – 12/2025"
    },
    {
      "diplome": "Classe préparatoire PCSI-PTSI",
      "etablissement": "École Polytechnique de Ouagadougou",
      "periode": "09/2020 – 07/2022"
    }
  ],
  "experiences_professionnelles": [
    {
      "poste": "Stagiaire Ouvrier",
      "entreprise": "NeXT's",
      "periode": "09/2023 – 10/2023",
      "description": "Optimisation des tâches dans GLPI, contributions aux modules Odoo."
    },
    {
      "poste": "Stagiaire Technicien en Intelligence Artificielle",
      "entreprise": "CITADEL",
      "periode": "09/2024 – 11/2024",
      "description": "Participation à des projets IA en lien avec la santé et le traitement automatique du langage."
    },
    {
      "poste": "Stagiaire AI for Language",
      "entreprise": "CITADEL",
      "periode": "05/2025 – 11/2025",
      "description": "Développement et optimisation de modèles d'IA pour le traitement du langage."
    },
    {
      "poste": "Développeur mobile",
      "entreprise": "AJPD-BF",
      "periode": "03/2025 – Aujourd'hui",
      "description": "Développement d'applications mobiles répondant à des enjeux sociaux."
    },
    {
      "poste": "Ingénieur Consultant Développeur",
      "entreprise": "ANAM",
      "periode": "11/2025 – 01/2026",
      "description": "Mission de consulting en développement (3 mois)."
    }
  ],
  "projets": [
    {
      "titre": "Analysis of News Trends",
      "type": "Projet de stage Bac+4",
      "periode": "2024",
      "description": "Analyse des tendances de l'actualité à partir de données extraites par web scraping.",
      "technologies": ["Spacy", "NLTK", "VADER", "TF-IDF"],
      "liens": {
        "github": "https://github.com/WalkerStanislas/Analysis-of-new-trends-in-BF",
        "demo": "https://analysis-of-new-trends-in-bf-foxjnxwtqkbxhpqypwgwwv.streamlit.app/"
      }
    },
    {
      "titre": "Plateforme de classification de plantes",
      "type": "Projet de classe",
      "periode": "2024",
      "description": "Développement d'un modèle de Deep Learning permettant de classifier des plantes.",
      "technologies": ["Scikit-learn", "Matplotlib", "Seaborn", "Tensorflow"],
      "liens": {
        "github": "https://www.kaggle.com/code/walkerstan/deep-learning",
      }
    },
    {
      "titre": "French2English Traductor",
      "type": "Projet personnel",
      "periode": "2024",
      "description": "Traduction automatique via OpenNMT et Streamlit à partir de corpus parlementaires.",
      "technologies": ["Scikit-learn", "Spacy", "PyTorch", "OpenNMT"],
      "liens": {
        "github": "https://github.com/WalkerStanislas/French2English-traductor-app",
        "demo": "https://french2english-traductor-app-n5hdcljskuxvsu8btby3mm.streamlit.app/"
      }
    },
    {
      "titre": "Chatbot de prédiction épidémiologique",
      "type": "Projet événementiel - FRSIT",
      "periode": "2024",
      "description": "Développement d'un chatbot prédictif de maladies à partir de descriptions de symptômes."
    },
    {
      "titre": "Application mobile santé/pharmacies de garde",
      "type": "Projet personnel",
      "periode": "2024",
      "description": "Application de géolocalisation des pharmacies de garde avec options de commande."
    },
    {
      "titre": "Application de gestion des tâches collaboratives",
      "type": "Projet freelance (worked with SAWADOGO Souleymane)",
      "periode": "2022",
      "description": "Développement d'une application CLI de gestion des tâches collaboratives au sein d'une entreprise",
      "technologies": ["Python", "Sqlite", "CLI dev", "Intégration continue"],
      "liens": {
        "github": "https://github.com/WalkerStanislas/Gestion-de-taches-collaboratives",
        "demo": "https://www.youtube.com/watch?v=YknXutXMa40",
      }
    },
    {
      "titre": "Beogo AI - Traduction vocale Français-Mooré",
      "type": "Projet Start-up - Semaine du Numérique 2025",
      "periode": "2025",
      "description": "Plateforme de traduction vocale complète français-mooré : traduction texte bidirectionnelle, transcription et synthèse vocale. Valorisation des langues locales par l'IA.",
      "technologies": ["LLMs", "NLP", "Fast API", "Streamlit", "HuggingFace"],
      "role": "Co-développeur"
    },
    {
      "titre": "Assistant RAG - Guide Touristique BF",
      "type": "Projet Sprint - Semaine du Numérique 2025",
      "periode": "2025",
      "description": "Assistant intelligent basé sur le RAG pour le guidage touristique au Burkina Faso.",
      "technologies": ["LangChain", "RAG", "Streamlit", "Python"],
      "liens": {
        "demo": "https://tourism-rag-bvcud3pzrutjb6xbn5be54.streamlit.app/"
      }
    }
  ],
  "certifications": [
    {
      "titre": "Web Scraping",
      "organisme": "DataCamp",
      "date": "2024",
      "lien": "https://www.datacamp.com/completed/statement-of-accomplishment/course/4e337827e5db31f93f38fa7ca97bdf83219cc9bc"
    },
    {
      "titre": "Natural Language Processing",
      "organisme": "365 Data Science",
      "date": "2024",
      "lien": "https://learn.365datascience.com/certificates/CC-BCBDD387DA/"
    },
    {
      "titre": "LLM Applications with LangChain",
      "organisme": "DataCamp",
      "date": "2024",
      "lien": "https://www.datacamp.com/completed/statement-of-accomplishment/course/5f064b71fb33765f91d8e482a658b5b213183925"
    },
    {
      "titre": "Best Student 2024",
      "organisme": "École Polytechnique de Ouagadougou",
      "date": "2024",
      "lien": "https://www.facebook.com/share/p/161FY18Hay/"
    },
    {
      "titre": "Attestation de reconnaissance",
      "organisme": "IndabaX Burkina",
      "date": "Août 2025",
      "lien": "https://drive.google.com/file/d/1GgrNVmPFHummmcNfwpASkJ4yuwexpWcL/view?usp=drive_link"
    },
    {
      "titre": "Attestation de participation - Hackathon des Nations Unies",
      "organisme": "Nations Unies",
      "date": "2025",
      "lien": "/walk-portfolio/documents/participation_hackathon_onu.pdf"
    }
  ],
  "langues": [
    {
      "langue": "Français",
      "niveau": "Langue maternelle"
    },
    {
      "langue": "Anglais",
      "niveau": "Courant (B2)"
    },
    {
      "langue": "Chinois",
      "niveau": "Débutant (A2)"
    }
  ],
  "soft_skills": [
    "Curiosité scientifique",
    "Rigueur",
    "Capacité d'analyse",
    "Esprit d'équipe"
  ],
  "centres_interet": [
    "Informatique",
    "Technologie et IA",
    "Défis de programmation",
    "Santé digitale"
  ],
  "distinctions": [
    {
      "titre": "Prix Spécial de Son Excellence M. le Premier Ministre",
      "evenement": "AI Start-up Day - Semaine du Numérique 2025",
      "description": "Projet Beogo AI : Valorisation des langues locales par l'IA, cas du mooré. Plateforme de traduction vocale complète français-mooré incluant traduction texte bidirectionnelle, transcription et synthèse vocale.",
      "type": "premier",
      "role": "Co-développeur & Porteur du projet"
    },
    {
      "titre": "Lauréat - Meilleures AI Start-up SN25",
      "evenement": "AI Start-up Day - Semaine du Numérique 2025",
      "description": "Catégorie AI Start-up Day : Beogo AI sélectionné parmi les meilleures AI Start-up de la SN25.",
      "type": "or"
    },
    {
      "titre": "Vainqueur - Concours de conception du site web de l'EPO",
      "evenement": "École Polytechnique de Ouagadougou",
      "description": "Conception et développement du site web officiel de l'École Polytechnique de Ouagadougou.",
      "type": "or",
      "role": "Co-développeur",
      "lien": "https://epo.bf"
    },
    {
      "titre": "2e Prix - Hackathon des Universités",
      "evenement": "Catégorie AI for Média Monitoring",
      "description": "Développement d'une solution d'IA pour le monitoring et l'analyse des médias.",
      "type": "argent"
    }
  ],
  "sections_portfolio": [
    "Home",
    "About",
    "Portfolio",
    "Distinctions",
    "Projects and Services",
    "Contact"
  ],
  "liens_professionnels": {
    "github": "https://github.com/WalkerStanislas",
    "linkedin": "https://www.linkedin.com/in/walkerstanislasrocksanecompaore",
    "portfolio": "https://walkerstanislas.github.io/My-portfolio/"
  },
  "communications":[
    {
      "titre": "Traduction Automatique Français ↔ Mooré basée sur les LLMs",
      "type": "Communication à IndabaX Burkina Faso",
      "periode": "Août 2025",
      "description": "Il s'agissait pour moi d'exposer aux participants, les différents défis de traduction automatique pour les langues africaines: cas du Mooré",
      "technologies": ["Scraping", "Data mining", "LLM", "Fast API"],
      "liens": {
        "demo": "https://www.youtube.com/watch?v=uUU26HBVDxA"
      }
    },
    


  ]
};

// Tech icons mapping
export const techIcons = {
  // Programming Languages
  "Python": { icon: "devicon-python-plain", color: "#3776AB" },
  "Java": { icon: "devicon-java-plain", color: "#007396" },
  "Scala": { icon: "devicon-scala-plain", color: "#DC322F" },
  "R": { icon: "devicon-r-plain", color: "#276DC3" },
  "SQL": { icon: "devicon-mysql-plain", color: "#4479A1" },
  "PL/SQL": { icon: "devicon-oracle-plain", color: "#F80000" },
  "HTML/CSS": { icon: "devicon-html5-plain", color: "#E34F26" },
  "PHP": { icon: "devicon-php-plain", color: "#777BB4" },
  
  // AI & Data Science
  "Machine Learning": { icon: "fas fa-brain", color: "#FF6B6B" },
  "Deep Learning": { icon: "fas fa-network-wired", color: "#845EC2" },
  "NLP": { icon: "fas fa-language", color: "#FF9671" },
  "Transformers": { icon: "fas fa-robot", color: "#FFC75F" },
  "LLMs": { icon: "fas fa-comment-dots", color: "#F9F871" },
  "Big Data": { icon: "fas fa-database", color: "#00C9A7" },
  
  // Libraries & Frameworks
  "Pandas": { icon: "devicon-pandas-plain", color: "#150458" },
  "NumPy": { icon: "devicon-numpy-plain", color: "#013243" },
  "TensorFlow": { icon: "devicon-tensorflow-plain", color: "#FF6F00" },
  "Scikit-learn": { icon: "devicon-python-plain", color: "#F7931E" },
  "Spacy": { icon: "fas fa-spell-check", color: "#09A3D5" },
  "NLTK": { icon: "fas fa-comment-alt", color: "#3E863D" },
  "LangChain": { icon: "fas fa-link", color: "#2D46C1" },
  "HuggingFace": { icon: "fas fa-smile", color: "#FFBD59" },
  "Scrapy": { icon: "devicon-scrapy-plain", color: "#69B600" },
  "Selenium": { icon: "devicon-selenium-plain", color: "#43B02A" },
  "Streamlit": { icon: "fas fa-stream", color: "#FF4B4B" }, // Déjà présent, mais je le laisse pour la clarté
  
  // Databases
  "PostgreSQL": { icon: "devicon-postgresql-plain", color: "#336791" },
  "MySQL": { icon: "devicon-mysql-plain", color: "#4479A1" },
  "Firebase": { icon: "devicon-firebase-plain", color: "#FFCA28" },
  
  // Tools & Platforms
  "Git/GitHub": { icon: "devicon-github-plain", color: "#181717" },
  "Kaggle": { icon: "devicon-kaggle-plain", color: "#20BEFF" },
  "Docker": { icon: "devicon-docker-plain", color: "#2496ED" },
  "Streamlit": { icon: "fas fa-stream", color: "#FF4B4B" }, // Déjà présent, mais je le laisse pour la clarté
  "Power BI": { icon: "fas fa-chart-bar", color: "#F2C811" },
  "Hadoop": { icon: "devicon-apache-plain", color: "#D22128" },
  "Google Colab": { icon: "fas fa-flask", color: "#F9AB00" },

  // Project technologies
  "VADER": { icon: "fas fa-star-half-alt", color: "#6B7280" },
  "TF-IDF": { icon: "fas fa-calculator", color: "#6366F1" },
  "PyTorch": { icon: "devicon-pytorch-plain", color: "#EE4C2C" },
  "OpenNMT": { icon: "fas fa-language", color: "#3B82F6" },
  "RAG": { icon: "fas fa-search-plus", color: "#8B5CF6" },
  "Fast API": { icon: "fas fa-bolt", color: "#009688" },
  "Sqlite": { icon: "devicon-sqlite-plain", color: "#003B57" },
  "CLI dev": { icon: "fas fa-terminal", color: "#4B5563" },
  "Intégration continue": { icon: "fas fa-sync-alt", color: "#2563EB" }
};
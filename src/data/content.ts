import { ServiceItem, IndustryItem, ProcessTimelineStep, ExpertiseCard, TechnicalHotspot } from '../types';

export const COMPANY_INFO = {
  name: 'NOGA-PROCESS',
  tagline: 'NOGA Industrial Intelligence',
  headlineFr: 'Vos projets industriels. De la conception à la mise en service.',
  headlineEn: 'Your industrial projects. From engineering design to commissioning.',
  subheadlineFr: 'NOGA-PROCESS accompagne vos projets CAPEX industriels avec une expertise intégrée en ingénierie des procédés, qualification, validation et commissioning.',
  subheadlineEn: 'NOGA-PROCESS supports your industrial CAPEX projects with integrated expertise in process engineering, qualification, validation, and commissioning.',
  address: '41 Rue Jacquemars Giélée, 59800 Lille',
  officeAddress: 'Bureaux : L’Atrium, 11 rue Paul Dubrule, 59810 Lesquin',
  phone: '+33 7 78 66 91 40',
  phoneClean: '+33778669140',
  email: 'noga@noga-process.com',
  whatsappUrl: 'https://wa.me/33778669140',
  linkedinUrl: 'https://www.linkedin.com/company/noga-process/',
  calculatorUrl: 'https://outils-de-calcul-procedes-industriels.noga-process.com/formulas',
  logoUrl: '/images/logo.png',
  heroImg: '/images/hero-case.jpeg'
};

export const REAL_CASE_ANECDOTE = {
  titleFr: '47 000 € perdus pour un calcul jamais vérifié.',
  titleEn: '€47,000 lost due to an unverified calculation.',
  subtitleFr: 'Évitez la même erreur sur votre projet CAPEX.',
  subtitleEn: 'Avoid the same mistake on your CAPEX project.',
  bodyFr: 'Une incohérence de dimensionnement, une mauvaise évaluation de perte de charge ou une interface utilités mal anticipée amène des retards de mise en service et des surcoûts majeurs (+10% à +30%). NOGA-PROCESS offre un diagnostic initial de 30 minutes pour repérer les angles morts techniques avant chantier.',
  bodyEn: 'A sizing mismatch, improper head loss evaluation, or unhandled utility interface leads to commissioning delays and major cost overruns (+10% to +30%). NOGA-PROCESS offers a 30-minute initial diagnostic to spot technical blind spots before construction.'
};

export const ADVANCED_TECHS = [
  {
    id: 'scan-3d',
    titleFr: 'Relevés par Scan 3D',
    titleEn: '3D Laser Scanning',
    descFr: 'Capture ultra-précise de vos installations existantes pour fiabiliser les études, réduire les erreurs terrain et sécuriser les travaux en salle propre ou usine.',
    descEn: 'Ultra-precise capture of existing facilities to secure design studies, eliminate site errors, and streamline cleanroom or plant retrofits.'
  },
  {
    id: 'drone',
    titleFr: 'Inspection par Drone',
    titleEn: 'Drone Inspections',
    descFr: '« Safety First » : nos drones interviennent là où l’Homme risque sa vie. Accès aux zones critiques en hauteur ou confinées sans arrêt d’installation.',
    descEn: '"Safety First": our drones operate where human entry poses high risk. Access confined or elevated critical zones without plant shutdown.'
  },
  {
    id: 'cao-bim',
    titleFr: 'Exploitation CAO & Maquette Numérique',
    titleEn: 'CAD & Digital Twin Modeling',
    descFr: 'Plans 2D/3D et maquettes techniques fiables, continuellement mis à jour pour réduire les reprises de tuyauterie et sécuriser vos arbitrages.',
    descEn: 'Reliable, continuously updated 2D/3D technical models to minimize piping rework and secure engineering choices.'
  },
  {
    id: 'ia-audit',
    titleFr: 'Intelligence Artificielle & Audit P&ID',
    titleEn: 'AI-Powered P&ID Auditing',
    descFr: 'Détection automatique d’incohérences entre P&ID, utilités et maquette 3D réelle pour identifier les risques de dérive budgétaire en amont.',
    descEn: 'Automated inconsistency detection between P&IDs, utility interfaces, and 3D models to spot cost overruns early.'
  }
];

export const FOUNDER_MESSAGE = {
  quoteFr: 'Et si votre futur dépassement CAPEX était déjà caché dans vos P&ID, vos utilités ou vos hypothèses de dimensionnement… sans que personne ne l’ait encore vu ?',
  quoteEn: 'What if your next CAPEX cost overrun was already hidden in your P&IDs, utilities, or sizing assumptions... without anyone noticing it yet?',
  bodyFr: 'Une incoherence process, un mauvais dimensionnement ou une interface utilités mal anticipée peut générer des retards de mise en service, des surcoûts majeurs et des modifications tardives extrêmement coûteuses. NOGA-PROCESS identifie les angles morts techniques dès la phase amont pour sécuriser vos investissements industriels avant qu’ils ne deviennent des problèmes terrain.',
  bodyEn: 'A process inconsistency, improper equipment sizing, or unhandled utility interface can cause commissioning delays, major budget overruns, and extremely expensive late modifications. NOGA-PROCESS identifies technical blind spots early in the project to secure your industrial investments before they turn into site issues.',
  author: 'Fondateur & Architecte Procédés',
  experience: '20+ ans d’expérience terrain (Pharma, Biotech, Agro, Cosmétique, Chimie fine)',
  experienceEn: '20+ years of field experience (Pharma, Biotech, Food Processing, Cosmetics, Fine Chemicals)'
};

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    id: 'process-engineering',
    title: 'Ingénierie des Procédés',
    titleEn: 'Process Engineering',
    metric: 'P&ID / PFD',
    desc: 'Conception d’architectures fluides, bilans thermiques & hydrauliques et schémas d’implantation.',
    descEn: 'Design of fluid architectures, thermal & hydraulic balances, and plant layout schematics.',
    icon: 'Cpu'
  },
  {
    id: 'industrial-capex',
    title: 'Ingénierie CAPEX',
    titleEn: 'Industrial CAPEX',
    metric: '185k€ → 150M€',
    desc: 'Cadrage budgétaire, consultation fournisseurs et maîtrise des risques d’investissement.',
    descEn: 'Budget framing, vendor tender management, and investment risk control.',
    icon: 'TrendingUp'
  },
  {
    id: 'qualification-validation',
    title: 'Qualification & Validation',
    titleEn: 'Qualification & Validation',
    metric: 'QI / QO / QP',
    desc: 'Rédaction des protocoles QC, QI, QO, QP et conformité réglementaire (GMP, HACCP, ATEX).',
    descEn: 'Drafting QC, IQ, OQ, PQ protocols and regulatory compliance (GMP, HACCP, ATEX).',
    icon: 'ShieldCheck'
  },
  {
    id: 'fat-sat',
    title: 'Receptions FAT / SAT',
    titleEn: 'FAT / SAT Acceptance',
    metric: 'Factory & Site',
    desc: 'Essais de réception en usine constructeur et sur site client pour fiabiliser le démarrage.',
    descEn: 'Factory and site acceptance testing to ensure smooth and reliable start-up.',
    icon: 'CheckCircle2'
  },
  {
    id: 'commissioning',
    title: 'Commissioning',
    titleEn: 'Commissioning',
    metric: '15 km réseaux',
    desc: 'Coordination des essais fluides, utilités propres et accompagnement à la mise en service.',
    descEn: 'Fluid & clean utilities testing coordination and plant start-up support.',
    icon: 'Zap'
  },
  {
    id: 'process-optimization',
    title: 'Optimisation Procédés',
    titleEn: 'Process Optimization',
    metric: 'Scan 3D & IA',
    desc: 'Relevés laser 3D, détection des goulots d’étranglement et réduction des coûts opératoires.',
    descEn: '3D laser scanning, bottleneck detection, and operational cost reduction.',
    icon: 'Sliders'
  }
];

export const PROCESS_TIMELINE: ProcessTimelineStep[] = [
  {
    stepNumber: '01',
    phase: 'Amont CAPEX',
    phaseEn: 'Pre-CAPEX Phase',
    title: 'Cadrage & Analyse des Risques',
    titleEn: 'Scoping & Risk Analysis',
    desc: 'Analyse structurée des URS (cahier des charges), exigences GMP/HACCP/ATEX et identification des angles morts techniques.',
    descEn: 'Structured review of URS (User Requirement Specifications), GMP/HACCP/ATEX constraints, and technical blind spot detection.',
    deliverables: ['Audit URS & Contraintes', 'Matrice de risques CAPEX', 'Diagnostic 30 min'],
    deliverablesEn: ['URS & Constraints Audit', 'CAPEX Risk Matrix', '30-min Diagnostic'],
    glbFocus: 'pipe.glb',
    technicalNode: 'NODE_01_URS'
  },
  {
    stepNumber: '02',
    phase: 'Ingénierie',
    phaseEn: 'Engineering',
    title: 'Conception & Dimensionnement',
    titleEn: 'Design & Sizing',
    desc: 'Établissement des PFD, P&ID, bilans hydrauliques, dimensionnement des pompes, cuves et spécifications d’achats.',
    descEn: 'Creation of PFDs, P&IDs, hydraulic balances, pump and tank sizing, and purchasing specifications.',
    deliverables: ['P&ID & PFD validés', 'Calculs HMT & Pertes de charge', 'Cahier des charges fournisseurs'],
    deliverablesEn: ['Validated P&IDs & PFDs', 'HMT & Head Loss Calculations', 'Vendor Technical Specs'],
    glbFocus: 'reactor.glb',
    technicalNode: 'NODE_02_DESIGN'
  },
  {
    stepNumber: '03',
    phase: 'Arbitrage',
    phaseEn: 'Arbitration',
    title: 'Sélection & Arbitrages CAPEX',
    titleEn: 'Vendor Selection & Trade-offs',
    desc: 'Alignement technique des offres fournisseurs, arbitrages coût/performance et validation du planning de réalisation.',
    descEn: 'Technical bid alignment, cost/performance trade-offs, and execution timeline validation.',
    deliverables: ['Tableau comparatif technique', 'Optimisation enveloppe CAPEX', 'Planning jalons'],
    deliverablesEn: ['Technical Comparison Sheet', 'CAPEX Envelope Optimization', 'Milestone Schedule'],
    glbFocus: 'pump.glb',
    technicalNode: 'NODE_03_CAPEX'
  },
  {
    stepNumber: '04',
    phase: 'Qualification',
    phaseEn: 'Qualification',
    title: 'Protocoles & Essais FAT / SAT',
    titleEn: 'FAT / SAT Protocols & Tests',
    desc: 'Réception constructeur (FAT), installation sur site (SAT) et exécution des qualifications (QI/QO/QP).',
    descEn: 'Factory Acceptance Testing (FAT), Site Acceptance Testing (SAT), and IQ/OQ/PQ execution.',
    deliverables: ['Rapports FAT / SAT', 'Dossiers QI / QO / QP', 'Revues de conformité GMP'],
    deliverablesEn: ['FAT / SAT Reports', 'IQ / OQ / PQ Dossiers', 'GMP Compliance Reviews'],
    glbFocus: 'valve.glb',
    technicalNode: 'NODE_04_QUALIF'
  },
  {
    stepNumber: '05',
    phase: 'Validation',
    phaseEn: 'Validation',
    title: 'Validation Procédé & Qualité',
    titleEn: 'Process & Quality Validation',
    desc: 'Vérification de la répétabilité du procédé en conditions nominales et dégradées avec traçabilité complète.',
    descEn: 'Verification of process repeatability under nominal and worst-case conditions with full traceability.',
    deliverables: ['Rapport de validation procédé', 'Dossier de lots d’essai', 'Traçabilité échantillonnage'],
    deliverablesEn: ['Process Validation Report', 'Test Batch Documentation', 'Sampling Traceability'],
    glbFocus: 'tank.glb',
    technicalNode: 'NODE_05_VAL'
  },
  {
    stepNumber: '06',
    phase: 'Mise en Service',
    phaseEn: 'Commissioning',
    title: 'Commissioning & Transfert Usine',
    titleEn: 'Commissioning & Plant Handover',
    desc: 'Mise en fluide, montée en cadence de production, formation des équipes d’opérateurs et transfert aux équipes d’exploitation.',
    descEn: 'Fluid startup, production ramp-up, operator team training, and handover to plant operations.',
    deliverables: ['Démarrage usine sécurisé', 'Procédures SOP & Formations', 'Dossier d’ouvrage exécuté (DOE)'],
    deliverablesEn: ['Secure Plant Start-up', 'SOPs & Training Material', 'As-Built Documentation (DOE)'],
    glbFocus: 'room.glb',
    technicalNode: 'NODE_06_MES'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'etudes-conception',
    title: 'Études et Conception des Procédés',
    titleEn: 'Process Engineering & Design',
    category: 'Ingénierie Amont',
    categoryEn: 'Front-End Engineering',
    shortDesc: 'Conception de schémas de procédés PFD/P&ID, bilans de matière et énergie, dimensionnement d’équipements et utilités.',
    shortDescEn: 'Design of PFD/P&ID process schematics, material & energy balances, equipment and utility sizing.',
    fullDesc: 'Nous traduisons vos besoins de production en schémas d’ingénierie rigoureux et optimisés. Chaque ligne, vanne et mesure est analysée pour garantir l’opérabilité, la nettoyabilité (CIP/SIP) et la rentabilité CAPEX.',
    fullDescEn: 'We turn your production requirements into rigorous, optimized engineering schematics. Every line, valve, and transmitter is analyzed to ensure operability, cleanability (CIP/SIP), and CAPEX efficiency.',
    deliverables: ['Schémas PFD et P&ID', 'Notes de calcul hydrauliques & HMT', 'Spécifications d’équipements', 'Implantation 2D/3D & Scan laser'],
    deliverablesEn: ['PFD & P&ID Drawings', 'Hydraulic & HMT Calculations', 'Equipment Specifications', '2D/3D Layout & Laser Scanning'],
    glbModel: '/models/reactor.glb',
    modelHotspotLabel: 'Réacteur Inox Process',
    modelHotspotLabelEn: 'Stainless Steel Process Reactor'
  },
  {
    id: 'qualification-validation-service',
    title: 'Qualification & Validation (QI / QO / QP)',
    titleEn: 'Qualification & Validation (IQ / OQ / PQ)',
    category: 'Conformité Réglementaire',
    categoryEn: 'Regulatory Compliance',
    shortDesc: 'Rédaction et exécution des protocoles de qualification d’équipements, salles propres et utilités critiques (GMP/BPF).',
    shortDescEn: 'Drafting and execution of equipment, cleanroom, and critical utility qualification protocols (GMP/cGMP).',
    fullDesc: 'Sécurisez vos audits et inspections grâce à un dossier de qualification inattaquable. Nous encadrons les étapes QC, QI, QO, QP en assurant une traçabilité intégrale.',
    fullDescEn: 'Pass audits and inspections with robust qualification dossiers. We manage QC, IQ, OQ, and PQ stages with complete data integrity.',
    deliverables: ['Analyses de risques (FMEA / HACCP)', 'Protocoles et rapports QI / QO / QP', 'Validation des utilités propres (PPI, Vapeur Pure)', 'Dossier de conformité audit'],
    deliverablesEn: ['Risk Assessments (FMEA / HACCP)', 'IQ / OQ / PQ Protocols & Reports', 'Clean Utilities Validation (WFI, Pure Steam)', 'Audit Compliance File'],
    glbModel: '/models/tank.glb',
    modelHotspotLabel: 'Cuve de Stockage Qualifiée',
    modelHotspotLabelEn: 'Qualified Storage Vessel'
  },
  {
    id: 'commissioning-fat-sat',
    title: 'Commissioning, FAT & SAT',
    titleEn: 'Commissioning, FAT & SAT',
    category: 'Mise en Service',
    categoryEn: 'Site Start-up',
    shortDesc: 'Supervision des essais en usine constructeur (FAT), réception sur site (SAT) et essais à blanc avant démarrage.',
    shortDescEn: 'Supervision of factory acceptance tests (FAT), site acceptance (SAT), and dry run testing prior to startup.',
    fullDesc: 'Le passage de la théorie du bureau d’études au fonctionnement réel sur site. Nous accompagnons les essais dynamiques pour réduire la durée de démarrage d’usine.',
    fullDescEn: 'Transitioning from engineering design to real site operation. We manage dynamic trials to minimize plant startup time.',
    deliverables: ['Protocoles & Procès-verbaux FAT', 'Vérification des boucles d’instrumentation', 'Essais à blanc et en eau', 'Commissioning fluides & utilités'],
    deliverablesEn: ['FAT Protocols & Minutes', 'Instrumentation Loop Checks', 'Dry & Water Run Testing', 'Fluid & Utility Commissioning'],
    glbModel: '/models/pump.glb',
    modelHotspotLabel: 'Groupe de Pompage Sanitaire',
    modelHotspotLabelEn: 'Sanitary Pumping Unit'
  },
  {
    id: 'assistance-capex',
    title: 'Assistance Maîtrise d’Ouvrage CAPEX',
    titleEn: 'CAPEX Project Management Support',
    category: 'Conseil & Décision',
    categoryEn: 'Consulting & Decision',
    shortDesc: 'Cadrage amont des projets industriels, structuration du besoin URS et pilotage technico-économique des fournisseurs.',
    shortDescEn: 'Front-end framing of industrial projects, URS specification, and vendor technical-economic oversight.',
    fullDesc: 'Anticipez les dérives de +10% à +30% sur votre enveloppe budgétaire. Nous agissons comme votre partenaire de décision neutre et indépendant.',
    fullDescEn: 'Prevent 10% to 30% budget slippages. We act as your independent, objective technical decision partner.',
    deliverables: ['Rédaction URS & Cahier des charges', 'Alignement technico-économique', 'Revue critique des P&ID constructeurs', 'Suivi du planning d’exécution'],
    deliverablesEn: ['URS & Tender Drafting', 'Technical-Economic Alignment', 'Vendor P&ID Critical Review', 'Execution Schedule Tracking'],
    glbModel: '/models/valve.glb',
    modelHotspotLabel: 'Vanne de Régulation Automatisée',
    modelHotspotLabelEn: 'Automated Control Valve'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'pharma',
    title: 'Pharmaceutique',
    titleEn: 'Pharmaceutical',
    subtitle: 'Conformité GMP, Salles Propres & Utilités Critiques',
    subtitleEn: 'GMP Compliance, Cleanrooms & Critical Utilities',
    desc: 'Ingénierie pour formes liquides, injectables, poudres et solides. Maitrise des fluides propres (PPI, vapeurs pures, air comprimé médical) et des environnements classés.',
    descEn: 'Engineering for liquid forms, injectables, powders, and solid doses. Expertise in clean utilities (WFI, pure steam, medical air) and classified environments.',
    glbModel: '/models/room.glb',
    modelName: 'room.glb',
    features: ['Salles propres ISO 5 à ISO 8', 'Boucles d’eau PPI & Vapeur pure', 'Cycles NEP / SEP automatiques', 'Qualification QI/QO/QP & BPF'],
    featuresEn: ['ISO 5 to ISO 8 Cleanrooms', 'WFI loops & Pure Steam', 'Automatic CIP / SIP cycles', 'IQ/OQ/PQ & GMP Qualification'],
    image: '/images/pharma.jpg'
  },
  {
    id: 'biotechnologie',
    title: 'Biotechnologie',
    titleEn: 'Biotechnology',
    subtitle: 'Bioréacteurs, Fermentation & Lignes Downstream',
    subtitleEn: 'Bioreactors, Fermentation & Downstream Processing',
    desc: 'Conception de lignes de fermentation, culture cellulaire, filtration membranaire et systèmes de purification en milieu stérile.',
    descEn: 'Design of fermentation lines, cell culture, membrane filtration, and sterile downstream purification systems.',
    glbModel: '/models/ChemistryLab.glb',
    modelName: 'ChemistryLab.glb',
    features: ['Bioréacteurs et cuves de fermentation', 'Systèmes de chromatographie & TFF', 'Contrôle précis pH / pO2 / T°', 'Intégrité stérile & Confinement'],
    featuresEn: ['Bioreactors & Fermentation Vessels', 'Chromatography & TFF Systems', 'Precise pH / pO2 / Temp Control', 'Sterile Integrity & Containment'],
    image: '/images/biotech.jpg'
  },
  {
    id: 'cosmetique',
    title: 'Cosmétique',
    titleEn: 'Cosmetics',
    subtitle: 'Mélanges sous vide, Émulsions & Lignes Haut Cadence',
    subtitleEn: 'Vacuum Mixing, Emulsions & High-Speed Lines',
    desc: 'Optimisation des procédés de fabrication de crèmes, gels, parfums et produits de soin. Gestion de la rhéologie et de la nettoyabilité des équipements.',
    descEn: 'Optimization of cream, gel, perfume, and skincare manufacturing processes. Rheology management and equipment washability.',
    glbModel: '/models/tank.glb',
    modelName: 'tank.glb',
    features: ['Mélangeurs sous vide & Émulsionneurs', 'Gestion des produits visqueux & Piggables', 'Flexibilité des formats de production', 'Nettoyage en place (NEP/CIP) rapide'],
    featuresEn: ['Vacuum Mixers & Homogenizers', 'Viscous Product Handling & Pigging', 'Production Format Flexibility', 'Fast Clean-In-Place (CIP)'],
    image: '/images/cosmetics.jpg'
  },
  {
    id: 'agro-alimentaire',
    title: 'Agro-alimentaire',
    titleEn: 'Food & Beverage',
    subtitle: 'Process Hygiénique, Traitement Thermique & HACCP',
    subtitleEn: 'Hygienic Process, Thermal Treatment & HACCP',
    desc: 'Ingénierie des procédés laitiers, boissons, ingrédients et produits liquides avec intégration stricte du guide EHEDG et des normes HACCP.',
    descEn: 'Dairy, beverage, ingredient, and liquid process engineering with strict EHEDG guidelines and HACCP standards integration.',
    glbModel: '/models/reactor.glb',
    modelName: 'reactor.glb',
    features: ['Pasteurisation & Stérilisation UHT', 'Réseaux inox EHEDG hygiéniques', 'Optimisation énergétique & Récupération', 'Traçabilité des lots & HACCP'],
    featuresEn: ['Pasteurization & UHT Sterilization', 'EHEDG Hygienic Stainless Lines', 'Energy Recovery & Optimization', 'Batch Traceability & HACCP'],
    image: '/images/agro.jpg'
  },
  {
    id: 'chimie-fine',
    title: 'Chimie Fine',
    titleEn: 'Fine Chemicals',
    subtitle: 'Réacteurs Synthèse, Directive ATEX & DESP',
    subtitleEn: 'Synthesis Reactors, ATEX & PED Directives',
    desc: 'Conception de réacteurs de synthèse, réseaux sous pression et unités d’échantillonnage pour environnements explosifs et corrosifs.',
    descEn: 'Synthesis reactor design, pressurized networks, and sampling units for explosive and corrosive environments.',
    glbModel: '/models/valve.glb',
    modelName: 'valve.glb',
    features: ['Réacteurs sous pression & Échangeurs', 'Conformité réglementaire ATEX Zone 1/21', 'Calcul d’épaisseur DESP (PED 2014/68/EU)', 'Sécurité procédés & Éventing'],
    featuresEn: ['Pressure Reactors & Heat Exchangers', 'ATEX Zone 1/21 Compliance', 'PED Pressure Vessel Calculations', 'Process Safety & Venting'],
    image: '/images/finechem.jpg'
  }
];

export const TECHNICAL_HOTSPOTS: TechnicalHotspot[] = [
  {
    id: 'hs-reactor',
    model: 'reactor.glb',
    name: 'Réacteur Process Inox 316L',
    nameEn: '316L Stainless Process Reactor',
    position: [0, 1.2, 0],
    specLabel: 'P&ID / CIP / SIP Qualified',
    specLabelEn: 'P&ID / CIP / SIP Qualified',
    detailText: 'Double enveloppe de chauffage/refroidissement, agitation magnétique étanche, piquages normalisés Clamp.',
    detailTextEn: 'Heating/cooling jacket, magnetic drive agitator, Clamp sanitary ports.'
  },
  {
    id: 'hs-tank',
    model: 'tank.glb',
    name: 'Cuve de Stockage Tampique',
    nameEn: 'Buffer Storage Vessel',
    position: [2.2, 1.0, -0.5],
    specLabel: 'Capacité sur mesure / GMP',
    specLabelEn: 'Custom Capacity / GMP',
    detailText: 'Polissage miroir Ra < 0.4 µm, boule de lavage rotative à 360°, capteurs de niveau hygiéniques.',
    detailTextEn: 'Mirror polish Ra < 0.4 µm, 360° spray ball, hygienic level sensors.'
  },
  {
    id: 'hs-pipe',
    model: 'pipe.glb',
    name: 'Ligne de Transfert Fluides',
    nameEn: 'Fluid Transfer Pipe Network',
    position: [-1.2, 0.4, 0.8],
    specLabel: 'Débit & Pertes de Charge',
    specLabelEn: 'Flow Rate & Pressure Drop',
    detailText: 'Tuyauterie inox orbitalement soudée, pente d’autovidangeabilité 1.5%, test de rugosité et endoscopie.',
    detailTextEn: 'Orbital welded stainless steel piping, 1.5% self-draining slope, endoscopy verified.'
  },
  {
    id: 'hs-pump',
    model: 'pump.glb',
    name: 'Pompe Centrifuge Sanitaire',
    nameEn: 'Sanitary Centrifugal Pump',
    position: [-2.0, -0.6, 0.2],
    specLabel: 'HMT & Dimensionnement',
    specLabelEn: 'Head & Sizing',
    detailText: 'Garniture mécanique simple ou double lavable, corps inox 316L, variateur de vitesse intégré.',
    detailTextEn: 'Flushable single/double mechanical seal, 316L casing, integrated VFD.'
  },
  {
    id: 'hs-valve',
    model: 'valve.glb',
    name: 'Vanne à Membrane Automatisée',
    nameEn: 'Automated Diaphragm Valve',
    position: [1.1, -0.4, 1.2],
    specLabel: 'Contrôle / Automation',
    specLabelEn: 'Control & Automation',
    detailText: 'Membrane PTFE/EPDM certifiée FDA, boîtier de commande pneumatique ASI/IO-Link, zéro rétention.',
    detailTextEn: 'FDA certified PTFE/EPDM diaphragm, ASI/IO-Link pneumatic head, zero dead-leg.'
  }
];

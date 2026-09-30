import { prixEntree } from './offres';
import type { IconName } from '../components/icons';

export type Secteur = {
  slug: string;
  icon: IconName;
  /** Nom affiché, au pluriel */
  nom: string;
  /** « un coiffeur », « un restaurant »… pour les tournures de phrase */
  singulier: string;
  /** Résumé pour la grille de la page d'accueil */
  text: string;
  besoins: string[];

  // --- contenu de la page dédiée ---
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[];
  /** Les problèmes concrets du métier, et ce qu'on y répond */
  enjeux: { titre: string; text: string }[];
  livrables: string[];
  faq: { q: string; r: string }[];
};

// Secteurs réellement accompagnés. Les clients restent anonymes : nous ne
// publions ni leur nom ni de chiffres que nous ne pourrions pas justifier.
export const secteurs: Secteur[] = [
  {
    slug: 'barbier',
    icon: 'barbier',
    nom: 'Barbiers',
    singulier: 'barbier',
    text: "Un site qui remplit le fauteuil : réservation en ligne, tarifs à jour et visibilité sur les recherches de proximité.",
    besoins: ['Réservation', 'Google Maps', 'Galerie'],
    metaTitle: 'Création de site internet pour barbier à Lyon | Madaria',
    metaDesc: `Site internet pour barbier avec réservation en ligne, vitrine dès ${prixEntree}, intégrations sur devis. Référencement local pour être trouvé dans votre quartier.`,
    h1: 'Création de site internet pour barbier',
    intro: [
      "Un barbershop se choisit à trois rues près. Vos futurs clients tapent « barbier » sur leur téléphone, regardent les trois premiers résultats, et réservent chez celui qui leur simplifie la vie. Si votre salon n'apparaît pas, ou qu'il faut appeler pendant que vous avez les mains prises, le rendez-vous part chez le voisin.",
      "Nous construisons des sites de barbier qui règlent ce problème précis : être trouvé dans son quartier, et transformer cette visibilité en fauteuils remplis, sans que vous ayez à décrocher.",
    ],
    enjeux: [
      {
        titre: 'Être trouvé au bon moment',
        text: "La majorité des recherches se font sur mobile, à proximité immédiate, et souvent le jour même. Nous optimisons votre site pour ces requêtes locales et le connectons à votre fiche Google, pour que votre salon sorte quand quelqu'un cherche un barbier près de chez lui.",
      },
      {
        titre: 'Encaisser les réservations 24 h/24',
        text: "Les demandes arrivent le soir et le dimanche, quand le salon est fermé. Un module de réservation en ligne capte ces rendez-vous pendant que vous coupez ou que vous dormez, avec confirmation automatique et rappel avant la séance.",
      },
      {
        titre: 'Réduire les rendez-vous non honorés',
        text: "Un client qui oublie, c'est un créneau perdu qui ne se rattrape pas. Les rappels automatiques par SMS ou e-mail la veille du rendez-vous font chuter les absences, sans que vous ayez à relancer qui que ce soit.",
      },
      {
        titre: 'Montrer votre travail',
        text: "Une coupe se juge à l'œil. Une galerie propre, rapide à charger et facile à mettre à jour depuis votre téléphone vaut mieux qu'un long discours sur votre savoir-faire.",
      },
    ],
    livrables: [
      'Réservation en ligne connectée à votre agenda',
      'Rappels automatiques avant chaque rendez-vous',
      'Galerie de coupes que vous mettez à jour vous-même',
      'Tarifs et horaires modifiables en deux clics',
      'Fiche Google optimisée et reliée au site',
      'Affichage impeccable sur mobile',
    ],
    faq: [
      {
        q: 'Puis-je garder mon logiciel de réservation actuel ?',
        r: "Oui. Nous intégrons la plupart des solutions du marché directement dans le site, pour que vos clients réservent sans quitter votre page. Si vous n'en avez pas encore, nous vous en installons une adaptée à votre volume.",
      },
      {
        q: 'Combien de temps pour mettre mon salon en ligne ?',
        r: "Le planning de sept jours concerne une vitrine après cadrage et réception des contenus. Une intégration de réservation dépend de votre outil : son périmètre, ses coûts et son délai sont précisés au devis.",
      },
    ],
  },

  {
    slug: 'coiffeur',
    icon: 'coiffeur',
    nom: 'Coiffeurs',
    singulier: 'salon de coiffure',
    text: "Prise de rendez-vous sans appel téléphonique, présentation de l'équipe et des prestations, avis clients mis en avant.",
    besoins: ['Prise de RDV', 'Prestations', 'Avis'],
    metaTitle: 'Création de site internet pour coiffeur à Lyon | Madaria',
    metaDesc: `Site internet pour salon de coiffure avec prise de rendez-vous en ligne, vitrine dès ${prixEntree}, intégrations sur devis. Accompagnement local selon formule.`,
    h1: 'Création de site internet pour salon de coiffure',
    intro: [
      "Le téléphone qui sonne pendant une couleur, c'est un client mal servi d'un côté et un rendez-vous mal noté de l'autre. Un site de salon bien conçu absorbe ces appels : il montre vos prestations, vos tarifs, votre équipe, et laisse le client choisir son créneau tout seul.",
      "Nous concevons des sites de coiffeur qui libèrent votre temps au lieu d'en consommer — pensés pour être mis à jour en deux minutes, depuis votre téléphone, entre deux clients.",
    ],
    enjeux: [
      {
        titre: 'Des prestations et des tarifs limpides',
        text: "Une cliente qui hésite entre deux salons compare d'abord les prix et les prestations. Un tableau clair, à jour, qui distingue les longueurs et les techniques, évite les mauvaises surprises au fauteuil et les devis à rallonge au téléphone.",
      },
      {
        titre: 'La prise de rendez-vous en autonomie',
        text: "Vos clientes réservent le soir, depuis leur canapé. Un module de réservation relié à votre agenda leur montre vos vrais créneaux disponibles, par prestation et par coiffeur, et bloque le rendez-vous immédiatement.",
      },
      {
        titre: "Mettre en avant l'équipe",
        text: "Dans un salon, on ne choisit pas seulement une adresse mais une personne. Présenter chaque coiffeur, sa spécialité et son travail crée un attachement qui réduit la fuite vers la concurrence.",
      },
      {
        titre: 'Faire travailler vos avis',
        text: "Vos avis Google sont votre meilleur argument commercial, et ils dorment sur une page que personne ne visite. Nous les affichons sur votre site et facilitons leur collecte après chaque passage.",
      },
    ],
    livrables: [
      'Prise de rendez-vous en ligne par prestation et par coiffeur',
      'Grille tarifaire que vous modifiez vous-même',
      'Présentation de l’équipe et des spécialités',
      'Avis Google affichés automatiquement',
      'Galerie de réalisations',
      'Référencement local sur votre quartier',
    ],
    faq: [
      {
        q: 'Je ne suis pas à l’aise avec l’informatique, je pourrai gérer ?',
        r: "Oui. Vous recevez une interface simplifiée — modifier un tarif ou ajouter une photo se fait comme sur une application de téléphone — et une formation enregistrée que vous pouvez revoir autant de fois que nécessaire.",
      },
      {
        q: 'Le site fonctionnera-t-il si j’ai plusieurs salons ?',
        r: "Oui. Nous gérons plusieurs adresses sur un même site, chacune avec ses horaires, son équipe et son agenda de réservation, et une fiche Google distincte pour maximiser la visibilité de chaque salon dans son quartier.",
      },
    ],
  },

  {
    slug: 'tatoueur',
    icon: 'tatoueur',
    nom: 'Tatoueurs',
    singulier: 'tatoueur',
    text: "Un portfolio qui met vos pièces en valeur et un formulaire de projet qui filtre les demandes sérieuses.",
    besoins: ['Portfolio', 'Demande de projet', 'Acompte'],
    metaTitle: 'Création de site internet pour tatoueur à Lyon | Madaria',
    metaDesc: `Site internet pour tatoueur : portfolio haute qualité, formulaire de projet et acompte en ligne. Vitrine dès ${prixEntree}, options sur devis.`,
    h1: 'Création de site internet pour tatoueur',
    intro: [
      "Instagram vous a apporté vos premiers clients, mais il ne vous appartient pas : l'algorithme décide qui voit vos pièces, le format écrase vos images, et vos demandes se noient dans les messages privés. Un site vous rend la maîtrise de votre travail et de vos prises de contact.",
      "Nous construisons des sites de tatoueur pensés pour deux choses : montrer vos pièces dans leur qualité réelle, et filtrer les demandes pour ne garder que les projets sérieux.",
    ],
    enjeux: [
      {
        titre: 'Un portfolio à la hauteur du travail',
        text: "Vos photos méritent mieux qu'une compression de réseau social. Nous les affichons en haute définition, organisées par style, avec un chargement rapide — condition indispensable pour que le visiteur reste et fasse défiler.",
      },
      {
        titre: 'Filtrer les demandes en amont',
        text: "Un formulaire de projet structuré — emplacement, taille, style, budget, photos de référence, disponibilités — vous évite dix allers-retours par message. Vous recevez des demandes exploitables et vous répondez une seule fois.",
      },
      {
        titre: "Sécuriser les créneaux avec un acompte",
        text: "Les rendez-vous non honorés coûtent des journées entières. Un acompte réglé en ligne au moment de la validation engage le client et protège votre agenda, sans discussion gênante.",
      },
      {
        titre: 'Exister en dehors des réseaux',
        text: "Quand quelqu'un cherche un tatoueur spécialisé dans un style précis, il passe par Google. Un site référencé sur votre style et votre ville capte cette recherche à forte intention, que votre compte Instagram ne verra jamais.",
      },
    ],
    livrables: [
      'Portfolio haute définition organisé par style',
      'Formulaire de projet détaillé avec envoi de références',
      'Acompte réglé en ligne',
      'Informations de préparation et de cicatrisation',
      'Flashs disponibles, mis à jour par vos soins',
      'Référencement sur votre style et votre ville',
    ],
    faq: [
      {
        q: 'Mes photos Instagram peuvent-elles être reprises ?',
        r: "Oui, nous récupérons vos pièces existantes et les intégrons au portfolio. Nous pouvons aussi connecter le site à votre compte pour que les nouvelles publications remontent automatiquement, sans double saisie.",
      },
      {
        q: 'Comment gérez-vous les demandes de projet ?',
        r: "Elles vous arrivent par e-mail, structurées et complètes, avec les photos de référence. Nous pouvons aussi les envoyer dans un tableau de suivi pour que vous gardiez la trace de chaque demande, de la première prise de contact à la séance.",
      },
    ],
  },

  {
    slug: 'perceur',
    icon: 'perceur',
    nom: 'Perceurs',
    singulier: 'perceur',
    text: "Catalogue des poses et des bijoux, prise de rendez-vous, et les documents d'information remis avant la séance.",
    besoins: ['Catalogue', 'Prise de RDV', 'Documents'],
    metaTitle: 'Création de site internet pour perceur à Lyon | Madaria',
    metaDesc: `Site internet pour perceur : catalogue des poses, prise de rendez-vous et documents d'information. Vitrine dès ${prixEntree}, options sur devis.`,
    h1: 'Création de site internet pour perceur',
    intro: [
      "Le piercing se décide vite mais se renseigne longuement : quelle pose, quel bijou, quelle cicatrisation, quel prix, quelles conditions pour les mineurs. Chaque question sans réponse sur votre site devient un appel — ou un client qui va voir ailleurs.",
      "Nous construisons des sites de perceur qui répondent à ces questions avant la prise de contact, et qui inspirent la confiance qu'exige un acte sur le corps.",
    ],
    enjeux: [
      {
        titre: 'Un catalogue clair des poses',
        text: "Chaque emplacement a son prix, son temps de cicatrisation et ses contraintes. Les présenter de façon lisible, avec des photos, transforme les curieux en clients décidés et peut réduire les questions répétitives.",
      },
      {
        titre: 'Rassurer sur l’hygiène et le cadre légal',
        text: "Formation, stérilisation, matériel à usage unique, déclaration en ARS : ce qui vous paraît évident est précisément ce que le client vérifie. Une page dédiée à vos protocoles lève ce frein en amont.",
      },
      {
        titre: 'Remettre les documents en amont',
        text: "Fiches de consentement, autorisation parentale, consignes de cicatrisation : téléchargeables ou remplis en ligne avant la séance, ils vous font gagner du temps le jour J et sécurisent votre pratique.",
      },
      {
        titre: 'Vendre vos bijoux',
        text: "La pose est un point d'entrée, le renouvellement de bijoux une source de revenu récurrente. Un catalogue en ligne, avec ou sans paiement, prolonge la relation bien après la séance.",
      },
    ],
    livrables: [
      'Catalogue des poses avec tarifs et cicatrisation',
      'Prise de rendez-vous en ligne',
      'Documents de consentement et consignes téléchargeables',
      'Page dédiée à l’hygiène et aux protocoles',
      'Catalogue de bijoux',
      'Référencement local',
    ],
    faq: [
      {
        q: 'Puis-je faire remplir les autorisations en ligne ?',
        r: "Oui. Nous mettons en place des formulaires que le client remplit avant de venir, avec pièce jointe pour l'autorisation parentale et la pièce d'identité si nécessaire. Vous recevez le dossier complet avant la séance.",
      },
      {
        q: 'Puis-je vendre mes bijoux directement sur le site ?',
        r: "Oui, avec paiement en ligne et retrait au studio ou envoi postal. Si vous préférez commencer simplement, nous pouvons aussi présenter le catalogue sans vente en ligne et l'activer plus tard.",
      },
    ],
  },

  {
    slug: 'restaurant',
    icon: 'restaurant',
    nom: 'Restaurants',
    singulier: 'restaurant',
    text: "Carte toujours à jour, réservation en ligne et commande à emporter, sans commission prélevée par une plateforme.",
    besoins: ['Carte', 'Réservation', 'Click & collect'],
    metaTitle: 'Création de site internet pour restaurant à Lyon | Madaria',
    metaDesc: `Site internet pour restaurant : carte à jour, réservation et commande à emporter selon votre outil. Vitrine dès ${prixEntree}, options sur devis.`,
    h1: 'Création de site internet pour restaurant',
    intro: [
      "Les plateformes de livraison et de réservation prélèvent une commission sur chaque couvert. C'est un loyer que vous payez pour parler à vos propres clients. Un site qui vous appartient transforme cette dépense récurrente en investissement fait une fois.",
      "Nous construisons des sites de restaurant qui reprennent la main sur la réservation et la vente à emporter — et qui gardent la carte à jour sans que vous ayez à appeler qui que ce soit.",
    ],
    enjeux: [
      {
        titre: 'Une carte toujours juste',
        text: "Une carte périmée en PDF fait fuir. Vous modifiez un plat, un prix ou une suggestion du jour depuis votre téléphone, et la carte est à jour partout en quelques secondes — y compris sur votre fiche Google.",
      },
      {
        titre: 'Réserver sans commission',
        text: "Un module de réservation intégré à votre site vous coûte le prix du site, pas un pourcentage par couvert. Vous gardez les coordonnées de vos clients, ce qui vous permet de les relancer directement.",
      },
      {
        titre: 'La vente à emporter en direct',
        text: "Le click & collect sur votre propre site vous laisse la marge entière. Les clients qui vous ont découvert via une plateforme peuvent ensuite commander en direct, et c'est là que la rentabilité se joue.",
      },
      {
        titre: 'Sortir sur les recherches locales',
        text: "« Restaurant italien près de moi », « où manger à Lyon 7 » : ces recherches se décident en quelques secondes. Un site rapide, avec les bonnes informations et une fiche Google soignée, capte cette intention immédiate.",
      },
    ],
    livrables: [
      'Carte modifiable en autonomie, synchronisée avec Google',
      'Réservation en ligne sans commission',
      'Commande à emporter avec paiement',
      'Galerie des plats et de la salle',
      'Horaires, accès et informations pratiques',
      'Référencement local et fiche Google optimisée',
    ],
    faq: [
      {
        q: 'Dois-je quitter les plateformes de livraison ?',
        r: "Non, et ce serait rarement une bonne idée du jour au lendemain : elles vous apportent de la visibilité. L'objectif est de récupérer progressivement les clients fidèles en direct, là où votre marge est entière.",
      },
      {
        q: 'Puis-je changer la carte moi-même tous les jours ?',
        r: "Oui, c'est même le but. Modifier un plat ou une suggestion du jour prend quelques secondes depuis votre téléphone, sans nous solliciter et sans surcoût.",
      },
    ],
  },

  {
    slug: 'institut-de-beaute',
    icon: 'esthetique',
    nom: 'Instituts de beauté',
    singulier: 'institut de beauté',
    text: "Vos soins présentés clairement, réservation par créneaux, cartes cadeaux et relances automatiques entre deux séances.",
    besoins: ['Soins', 'Créneaux', 'Cartes cadeaux'],
    metaTitle: 'Création de site internet pour institut de beauté à Lyon | Madaria',
    metaDesc: `Site internet pour institut de beauté : réservation en ligne, cartes cadeaux et relances automatiques. Vitrine dès ${prixEntree}, options sur devis.`,
    h1: 'Création de site internet pour institut de beauté',
    intro: [
      "L'esthétique vit de la fidélité : une cliente satisfaite revient toutes les quatre à six semaines, pendant des années. Le problème n'est pas de la convaincre une fois, mais de ne pas la perdre entre deux rendez-vous.",
      "Nous construisons des sites d'institut qui facilitent la première réservation et automatisent le retour — sans que vous ayez à relancer chaque cliente à la main.",
    ],
    enjeux: [
      {
        titre: 'Présenter les soins sans jargon',
        text: "Une cliente qui ne comprend pas la différence entre deux protocoles ne réserve ni l'un ni l'autre. Chaque soin présenté avec sa durée, son prix, son déroulé et son résultat attendu lève l'hésitation.",
      },
      {
        titre: 'Réserver par créneaux réels',
        text: "Les durées varient fortement d'un soin à l'autre. Le module de réservation calcule le créneau nécessaire selon la prestation choisie, ce qui évite les chevauchements et les trous dans votre journée.",
      },
      {
        titre: 'Automatiser le retour',
        text: "Un soin se renouvelle à intervalle régulier. Une relance envoyée automatiquement au bon moment — quelques semaines après la séance — ramène des clientes qui seraient simplement passées à autre chose.",
      },
      {
        titre: 'Vendre des cartes cadeaux',
        text: "Les cartes cadeaux représentent une part importante du chiffre d'affaires en fin d'année. Vendues en ligne, elles s'achètent le soir, en quelques clics, et amènent de nouvelles clientes dans l'institut.",
      },
    ],
    livrables: [
      'Catalogue de soins avec durées et tarifs',
      'Réservation par créneaux adaptés à chaque prestation',
      'Cartes cadeaux vendues en ligne',
      'Relances automatiques entre deux séances',
      'Galerie et avis clientes',
      'Référencement local',
    ],
    faq: [
      {
        q: 'Les relances automatiques, comment ça marche concrètement ?',
        r: "Vous définissez un délai par type de soin. Une fois la séance passée, le message part tout seul au bon moment, personnalisé au prénom et à la prestation. Vous ne faites rien, et vous pouvez interrompre l'envoi à tout moment.",
      },
      {
        q: 'Puis-je vendre mes produits sur le site ?',
        r: "Oui. Nous pouvons ajouter une boutique en ligne pour vos produits de soin, avec retrait à l'institut ou expédition. C'est prévu dans la formule sur-mesure.",
      },
    ],
  },

  {
    slug: 'organisme-de-formation',
    icon: 'formation',
    nom: 'Organismes de formation',
    singulier: 'organisme de formation',
    text: "Catalogue de sessions, inscription en ligne, informations de financement et suivi des candidatures.",
    besoins: ['Catalogue', 'Inscription', 'Financement'],
    metaTitle: 'Création de site internet pour organisme de formation | Madaria',
    metaDesc: `Site internet pour organisme de formation : catalogue de sessions, inscription en ligne et informations de financement. Périmètre et calendrier sur devis.`,
    h1: 'Création de site internet pour organisme de formation',
    intro: [
      "Un candidat en formation compare, hésite, et surtout se demande comment financer. Si votre site ne répond pas clairement à cette question, il ira chercher un organisme qui le fait — même si votre programme est meilleur.",
      "Nous construisons des sites de formation qui présentent votre offre avec la rigueur attendue et transforment les visiteurs en candidatures qualifiées.",
    ],
    enjeux: [
      {
        titre: 'Un catalogue structuré',
        text: "Objectifs, prérequis, programme détaillé, durée, modalités, tarif : ces informations sont attendues, et souvent exigées par les référentiels qualité. Les présenter proprement sert autant vos candidats que vos audits.",
      },
      {
        titre: 'Répondre à la question du financement',
        text: "CPF, OPCO, France Travail, financement personnel : chaque situation appelle une réponse différente. Une page claire, avec un simulateur simple ou un formulaire d'orientation, débloque les candidatures qui hésitaient.",
      },
      {
        titre: 'Gérer les sessions et les places',
        text: "Vos dates changent, les places se remplissent. Un catalogue relié à un calendrier montre les sessions ouvertes, affiche les places restantes et bascule automatiquement en liste d'attente.",
      },
      {
        titre: 'Suivre les candidatures',
        text: "Une candidature qui reste sans réponse trois jours est perdue. Les dossiers arrivent structurés, l'accusé de réception part automatiquement, et vous gardez la trace de chaque échange.",
      },
    ],
    livrables: [
      'Catalogue de formations avec programme détaillé',
      'Calendrier des sessions et places disponibles',
      'Inscription et dépôt de candidature en ligne',
      'Page dédiée aux dispositifs de financement',
      'Accusés de réception automatiques',
      'Indicateurs de résultats exigés par la réglementation',
    ],
    faq: [
      {
        q: 'Le site peut-il afficher nos indicateurs Qualiopi ?',
        r: "Oui. Taux de réussite, de satisfaction, d'insertion : nous prévoyons un emplacement dédié, facile à mettre à jour, puisque ces indicateurs doivent être publiés et actualisés régulièrement.",
      },
      {
        q: 'Peut-on connecter le site à notre outil de gestion ?',
        r: "Oui, via les API de la plupart des logiciels de gestion de formation. Les inscriptions remontent directement dans votre outil, sans ressaisie. C'est le périmètre de la formule sur-mesure.",
      },
    ],
  },

  {
    slug: 'btp-artisan',
    icon: 'btp',
    nom: 'BTP & artisans',
    singulier: 'artisan du bâtiment',
    text: "Vos chantiers en photos, demande de devis structurée et référencement local pour être trouvé dans votre zone.",
    besoins: ['Réalisations', 'Devis en ligne', 'SEO local'],
    metaTitle: 'Création de site internet pour artisan et BTP à Lyon | Madaria',
    metaDesc: `Site internet pour artisan du bâtiment : galerie de chantiers, demande de devis et référencement local. Vitrine dès ${prixEntree}, options sur devis.`,
    h1: 'Création de site internet pour artisan et entreprise du bâtiment',
    intro: [
      "Dans le bâtiment, la confiance se gagne avant le premier rendez-vous. Un particulier qui cherche un artisan compare trois entreprises, regarde les chantiers réalisés, vérifie les assurances, et appelle celle qui inspire le plus de sérieux.",
      "Nous construisons des sites d'artisan qui montrent votre travail, prouvent votre sérieux et amènent des demandes de devis exploitables plutôt que des appels sans suite.",
    ],
    enjeux: [
      {
        titre: 'Prouver par le chantier',
        text: "Une photo avant-après vaut tous les arguments. Une galerie organisée par type de travaux, que vous alimentez depuis le chantier avec votre téléphone, construit votre crédibilité en continu.",
      },
      {
        titre: 'Des demandes de devis exploitables',
        text: "Un formulaire structuré — type de travaux, surface, délai souhaité, photos de l'existant — vous permet de qualifier la demande avant de vous déplacer, et d'éliminer les curieux qui font faire cinq devis pour rien.",
      },
      {
        titre: 'Être trouvé dans votre zone',
        text: "« Plombier Lyon 7 », « couvreur près de moi » : ces recherches ont une intention immédiate. Le référencement local est le levier le plus rentable de votre métier, et il repose sur la cohérence entre votre site et votre fiche Google.",
      },
      {
        titre: 'Rassurer sur les garanties',
        text: "Décennale, RGE, qualifications professionnelles : afficher ces éléments élimine un doute qui, sinon, se transforme en appel chez un concurrent qui les a mis en avant.",
      },
    ],
    livrables: [
      'Galerie de chantiers avant-après',
      'Formulaire de devis avec envoi de photos',
      'Présentation des garanties et qualifications',
      'Zones d’intervention détaillées',
      'Fiche Google optimisée et reliée au site',
      'Référencement local sur vos métiers',
    ],
    faq: [
      {
        q: 'Je n’ai pas de belles photos de chantier, c’est bloquant ?',
        r: "Non. Nous vous indiquons quoi photographier et comment, avec un simple téléphone — le cadrage avant-après compte davantage que le matériel. Vous alimentez ensuite la galerie chantier après chantier.",
      },
      {
        q: 'Le site peut-il couvrir plusieurs zones d’intervention ?',
        r: "Oui. Nous présentons vos zones d’intervention et créons des pages locales lorsqu’elles apportent des informations spécifiques : prestations, chantiers ou contraintes locales. Nous évitons de dupliquer le même contenu pour chaque commune.",
      },
    ],
  },
];

export const parSlug = (slug: string) => secteurs.find((s) => s.slug === slug);

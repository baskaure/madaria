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
      "Nous concevons des sites de coiffeur qui libèrent votre temps au lieu d'en consommer, pensés pour être mis à jour en deux minutes, depuis votre téléphone, entre deux clients.",
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
        r: "Oui. Vous recevez une interface simplifiée (modifier un tarif ou ajouter une photo se fait comme sur une application de téléphone) et une formation enregistrée que vous pouvez revoir autant de fois que nécessaire.",
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
        text: "Vos photos méritent mieux qu'une compression de réseau social. Nous les affichons en haute définition, organisées par style, avec un chargement rapide : c'est ce qui fait que le visiteur reste et fait défiler.",
      },
      {
        titre: 'Filtrer les demandes en amont',
        text: "Un formulaire de projet structuré (emplacement, taille, style, budget, photos de référence, disponibilités) vous évite dix allers-retours par message. Vous recevez des demandes exploitables et vous répondez une seule fois.",
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
      "Le piercing se décide vite mais se renseigne longuement : quelle pose, quel bijou, quelle cicatrisation, quel prix, quelles conditions pour les mineurs. Chaque question sans réponse sur votre site devient un appel, ou un client qui va voir ailleurs.",
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
      "Nous construisons des sites de restaurant qui reprennent la main sur la réservation et la vente à emporter, et qui gardent la carte à jour sans que vous ayez à appeler qui que ce soit.",
    ],
    enjeux: [
      {
        titre: 'Une carte toujours juste',
        text: "Une carte périmée en PDF fait fuir. Vous modifiez un plat, un prix ou une suggestion du jour depuis votre téléphone, et la carte est à jour partout en quelques secondes, y compris sur votre fiche Google.",
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
      "Nous construisons des sites d'institut qui facilitent la première réservation et automatisent le retour, sans que vous ayez à relancer chaque cliente à la main.",
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
        text: "Un soin se renouvelle à intervalle régulier. Une relance envoyée automatiquement au bon moment, quelques semaines après la séance, ramène des clientes qui seraient simplement passées à autre chose.",
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
      "Un candidat en formation compare, hésite, et surtout se demande comment financer. Si votre site ne répond pas clairement à cette question, il ira chercher un organisme qui le fait, même si votre programme est meilleur.",
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
        text: "Un formulaire structuré (type de travaux, surface, délai souhaité, photos de l'existant) vous permet de qualifier la demande avant de vous déplacer, et d'éliminer les curieux qui font faire cinq devis pour rien.",
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
        r: "Non. Nous vous indiquons quoi photographier et comment, avec un simple téléphone : le cadrage avant-après compte davantage que le matériel. Vous alimentez ensuite la galerie chantier après chantier.",
      },
      {
        q: 'Le site peut-il couvrir plusieurs zones d’intervention ?',
        r: "Oui. Nous présentons vos zones d’intervention et créons des pages locales lorsqu’elles apportent des informations spécifiques : prestations, chantiers ou contraintes locales. Nous évitons de dupliquer le même contenu pour chaque commune.",
      },
    ],
  },

  {
    slug: 'plombier',
    icon: 'plombier',
    nom: 'Plombiers',
    singulier: 'plombier',
    text: "Être appelé en premier quand une fuite tombe : zone d'intervention claire, numéro en un geste, devis demandé en ligne.",
    besoins: ['Appel direct', 'Zone desservie', 'Devis en ligne'],
    metaTitle: 'Création de site internet pour plombier | Madaria',
    metaDesc: `Site internet pour plombier : appel en un geste, zone d'intervention, demande de devis en ligne. Vitrine dès ${prixEntree}, référencement local inclus en formule Visibilité.`,
    h1: 'Création de site internet pour plombier',
    intro: [
      "Personne ne cherche un plombier par plaisir. On le cherche avec de l'eau sous l'évier, souvent le soir, sur son téléphone, et on appelle le premier qui inspire confiance et répond. Ce premier, c'est rarement le meilleur artisan du secteur : c'est celui que Google affiche et dont le numéro se trouve en un geste.",
      "Nous construisons des sites de plombier pensés pour ces moments-là : vous trouver dans votre zone, vous appeler sans chercher, et vous envoyer une demande de devis complète pour les chantiers qui peuvent attendre.",
    ],
    enjeux: [
      {
        titre: 'Sortir dans votre zone, pas à 50 km',
        text: "Les recherches se font avec le nom de la commune ou « près de moi ». Une page claire sur votre zone d'intervention, reliée à votre fiche Google, vous fait apparaître là où vous travaillez vraiment, sans attirer des appels hors secteur.",
      },
      {
        titre: 'Un appel en un geste',
        text: "Sur téléphone, le numéro doit être visible tout de suite et cliquable. Chaque seconde passée à le chercher, c'est un client qui revient aux résultats et appelle le suivant.",
      },
      {
        titre: 'Trier l’urgence et le chantier',
        text: "Une fuite se règle au téléphone, une salle de bain se prépare. Un formulaire de devis bien pensé (type de travaux, photos, adresse) vous fait gagner un déplacement de repérage sur les demandes simples.",
      },
      {
        titre: 'Rassurer avant d’entrer chez quelqu’un',
        text: "Le client vous ouvre sa porte. Vos assurances, vos certifications si vous en avez (RGE, Qualibat…), des photos de chantiers et des avis réels font la différence avec l'inconnu du résultat d'à côté.",
      },
    ],
    livrables: [
      'Numéro cliquable visible sur chaque page',
      "Page zone d'intervention avec vos communes",
      'Formulaire de devis avec envoi de photos',
      'Présentation de vos prestations, du dépannage à la rénovation',
      'Fiche Google optimisée et reliée au site',
      'Affichage impeccable sur mobile',
    ],
    faq: [
      {
        q: 'Mon site peut-il afficher que je fais du dépannage d’urgence ?',
        r: "Oui, si vous le proposez vraiment. On met en avant vos horaires de dépannage et votre numéro, et on évite les promesses que vous ne pourriez pas tenir, comme une intervention en trente minutes partout.",
      },
      {
        q: 'Je travaille sur plusieurs communes, comment apparaître dans chacune ?',
        r: "Une page claire sur votre zone d'intervention, des réalisations situées dans ces communes et une fiche Google bien réglée font l'essentiel. Créer une page vide par ville ne marche pas, et Google la pénalise.",
      },
      {
        q: 'Puis-je recevoir les demandes de devis directement par e-mail ?',
        r: "Oui. Chaque demande arrive dans votre boîte mail avec les photos jointes. Si vous utilisez un logiciel de devis, on regarde au cadrage s'il peut les recevoir directement.",
      },
    ],
  },

  {
    slug: 'electricien',
    icon: 'electricien',
    nom: 'Électriciens',
    singulier: 'électricien',
    text: "Des demandes de devis qualifiées pour la rénovation, la mise aux normes ou la borne de recharge, et un appel facile pour le dépannage.",
    besoins: ['Devis en ligne', 'Certifications', 'Zone desservie'],
    metaTitle: 'Création de site internet pour électricien | Madaria',
    metaDesc: `Site internet pour électricien : demandes de devis qualifiées, certifications mises en avant, zone d'intervention. Vitrine dès ${prixEntree}, référencement local en formule Visibilité.`,
    h1: 'Création de site internet pour électricien',
    intro: [
      "Un électricien vit de deux types d'appels : le dépannage, où le client veut quelqu'un vite, et les projets (rénovation, mise aux normes, borne de recharge, domotique) où il compare trois devis avant de choisir. Les deux passent aujourd'hui par une recherche sur téléphone.",
      "Nous construisons des sites d'électricien qui répondent aux deux : un numéro accessible en un geste pour l'urgence, et des pages par prestation qui font venir des demandes de devis précises pour les chantiers.",
    ],
    enjeux: [
      {
        titre: 'Une page par prestation',
        text: "« Mise aux normes tableau électrique », « installation borne de recharge », « rénovation électrique maison » : chaque prestation a sa recherche. Une page dédiée à chacune vous fait apparaître sur des demandes précises, qui deviennent des chantiers.",
      },
      {
        titre: 'Montrer vos qualifications',
        text: "Pour certains travaux, le client cherche une qualification précise : l'installation d'une borne de recharge au-delà de 3,7 kW demande par exemple la qualification IRVE. Vos certifications bien visibles rassurent et filtrent les demandes que vous ne pouvez pas prendre.",
      },
      {
        titre: 'Des devis complets du premier coup',
        text: "Type de logement, travaux envisagés, photos du tableau : un formulaire bien construit vous donne de quoi chiffrer, ou au moins de quoi savoir si le déplacement vaut le coup.",
      },
      {
        titre: 'Être trouvé dans votre secteur',
        text: "Votre zone d'intervention, vos réalisations dans le coin et une fiche Google reliée au site : c'est ce qui vous fait sortir quand un particulier cherche un électricien près de chez lui.",
      },
    ],
    livrables: [
      'Une page par prestation (rénovation, normes, borne, dépannage)',
      'Certifications et assurances mises en avant',
      'Formulaire de devis avec photos',
      "Zone d'intervention claire",
      'Fiche Google optimisée et reliée au site',
      'Numéro cliquable sur chaque page',
    ],
    faq: [
      {
        q: 'Faut-il vraiment une page par prestation ?',
        r: "Pour les prestations qui comptent pour vous, oui. Une page bien écrite sur l'installation de bornes de recharge se classe sur cette recherche ; une simple ligne dans une liste, beaucoup moins.",
      },
      {
        q: 'Je veux surtout des chantiers, pas du dépannage. Comment orienter le site ?',
        r: "On met en avant vos prestations de projet et la demande de devis, et on garde le numéro visible sans en faire le cœur de la page. Le site s'adapte au type de clients que vous voulez attirer.",
      },
      {
        q: 'Pouvez-vous ajouter mes réalisations au fil du temps ?',
        r: "Oui. En abonnement, les modifications mensuelles comprennent l'ajout de photos de chantiers. Chaque réalisation située dans une commune renforce aussi votre présence locale.",
      },
    ],
  },

  {
    slug: 'photographe',
    icon: 'photographe',
    nom: 'Photographes',
    singulier: 'photographe',
    text: "Un portfolio qui charge vite malgré les photos en grand, des demandes de devis claires pour les mariages et les séances.",
    besoins: ['Portfolio', 'Devis mariage', 'Galerie client'],
    metaTitle: 'Création de site internet pour photographe | Madaria',
    metaDesc: `Site internet pour photographe : portfolio rapide en grand format, demandes de devis pour mariages et séances, galeries clients. Vitrine dès ${prixEntree}.`,
    h1: 'Création de site internet pour photographe',
    intro: [
      "Un photographe se choisit sur ses images. Encore faut-il qu'elles s'affichent : un portfolio qui met cinq secondes à charger sur téléphone perd le visiteur avant la troisième photo. Et Instagram, s'il montre votre travail, ne dit ni vos tarifs, ni vos disponibilités, ni comment réserver.",
      "Nous construisons des sites de photographe où vos images sont en grand et chargent vite, où chaque type de prestation a sa page, et où les futurs mariés vous envoient une demande complète plutôt qu'un message privé sans date.",
    ],
    enjeux: [
      {
        titre: 'Des photos en grand, qui chargent vite',
        text: "Chaque image est préparée en plusieurs tailles et servie au format le plus léger que le navigateur accepte. Vos photos restent nettes sur un grand écran sans ralentir l'affichage sur un téléphone en 4G.",
      },
      {
        titre: 'Une page par type de séance',
        text: "Mariage, portrait, famille, entreprise : chaque prestation attire une recherche différente et un client différent. Une page dédiée avec vos images et vos formules vous fait trouver sur chacune.",
      },
      {
        titre: 'Des demandes de devis exploitables',
        text: "Date, lieu, nombre d'invités, type de prestation : le formulaire pose les bonnes questions pour que vous puissiez répondre avec un devis, pas avec trois messages de relance.",
      },
      {
        titre: 'Livrer les photos proprement',
        text: "Une galerie privée, protégée par mot de passe, pour que chaque client récupère ses images sans passer par un service de transfert. C'est une fonction à cadrer au devis selon votre volume.",
      },
    ],
    livrables: [
      'Portfolio en grand format optimisé pour le mobile',
      'Une page par type de prestation',
      'Formulaire de devis adapté (date, lieu, formule)',
      'Galeries privées pour vos clients (sur devis)',
      'Tarifs et formules faciles à mettre à jour',
      'Référencement sur votre ville et vos prestations',
    ],
    faq: [
      {
        q: 'Mes photos vont-elles perdre en qualité ?',
        r: "Non. Elles sont redimensionnées pour chaque taille d'écran et compressées sans perte visible. Vos originaux ne sont jamais modifiés.",
      },
      {
        q: 'Puis-je garder Instagram comme vitrine principale ?',
        r: "Instagram reste utile pour être découvert, et on peut afficher vos dernières publications sur le site. Mais le site vous appartient, il se classe sur Google et il recueille les demandes de devis, ce qu'Instagram fait mal.",
      },
      {
        q: 'Je suis aussi vidéaste, le site peut-il montrer des vidéos ?',
        r: "Oui. Les vidéos sont intégrées sans alourdir la page : elles ne se chargent que lorsqu'on les lance. Le site de Tom Carvalho, vidéaste, en est un exemple.",
      },
    ],
  },

  {
    slug: 'garage-automobile',
    icon: 'garage',
    nom: 'Garages automobiles',
    singulier: 'garage',
    text: "Des rendez-vous pris en ligne pour l'entretien, des tarifs clairs pour les forfaits courants, et un garage trouvé dans son quartier.",
    besoins: ['Prise de RDV', 'Forfaits', 'Google Maps'],
    metaTitle: 'Création de site internet pour garage automobile | Madaria',
    metaDesc: `Site internet pour garage automobile : prise de rendez-vous en ligne, forfaits affichés, référencement local. Vitrine dès ${prixEntree}, réservation intégrée sur devis.`,
    h1: 'Création de site internet pour garage automobile',
    intro: [
      "Vidange, pneus, freins, climatisation : l'automobiliste cherche un garage proche, avec un prix à peu près connu et un créneau rapide. S'il doit appeler pendant vos heures d'atelier pour savoir combien coûte une vidange, il appelle aussi le concurrent, et c'est souvent le premier qui décroche qui gagne.",
      "Nous construisons des sites de garage qui répondent à ces questions avant l'appel : vos forfaits, vos horaires, la prise de rendez-vous en ligne et votre place sur Google Maps dans votre quartier.",
    ],
    enjeux: [
      {
        titre: 'Afficher les forfaits courants',
        text: "Les prix des prestations courantes (vidange, plaquettes, recharge de clim, géométrie) sont parmi les informations les plus recherchées. Les afficher, même « à partir de », rassure et évite les appels qui ne servent qu'à demander un prix.",
      },
      {
        titre: 'Prendre les rendez-vous sans décrocher',
        text: "Un module de prise de rendez-vous remplit l'agenda de l'atelier le soir et le week-end, sans interrompre le travail en cours. On l'adapte à votre organisation : créneaux, durées par prestation, confirmation.",
      },
      {
        titre: 'Être le garage du quartier sur Google',
        text: "« Garage près de moi » : la recherche est locale et souvent faite depuis la voiture. Une fiche Google bien réglée, reliée à un site rapide, vous place dans ces résultats.",
      },
      {
        titre: 'Mettre en avant vos spécialités',
        text: "Climatisation, diagnostic électronique, véhicules hybrides : une page par spécialité vous fait trouver par les clients qui cherchent exactement ce que vous savez faire. C'est ce qu'on a fait pour Recharge Clim Auto à Montpellier.",
      },
    ],
    livrables: [
      'Prise de rendez-vous en ligne (sur devis)',
      'Forfaits et tarifs faciles à mettre à jour',
      'Une page par spécialité',
      'Horaires, accès et numéro cliquable',
      'Fiche Google optimisée et reliée au site',
      'Affichage impeccable sur mobile',
    ],
    faq: [
      {
        q: 'Dois-je afficher tous mes prix ?',
        r: "Non, seulement ceux des prestations courantes, et souvent en « à partir de ». Le reste se fait sur devis. Ce qui compte, c'est que le client ne vous appelle pas uniquement pour connaître le prix d'une vidange.",
      },
      {
        q: 'Je suis spécialisé, le site peut-il se concentrer sur une seule prestation ?',
        r: "Oui, et c'est souvent plus efficace. Un site centré sur une spécialité se classe mieux sur cette recherche qu'un site généraliste. Le site de Recharge Clim Auto, centré sur la climatisation, en est un exemple.",
      },
      {
        q: 'Le module de rendez-vous est-il compris ?',
        r: "La prise de rendez-vous dépend de votre outil actuel et de votre organisation. Son périmètre, son coût et son délai sont précisés au devis.",
      },
    ],
  },

  {
    slug: 'fleuriste',
    icon: 'fleuriste',
    nom: 'Fleuristes',
    singulier: 'fleuriste',
    text: "Des commandes en ligne pour le retrait ou la livraison, les grandes fêtes anticipées, et une boutique trouvée dans son quartier.",
    besoins: ['Commande en ligne', 'Livraison', 'Événements'],
    metaTitle: 'Création de site internet pour fleuriste | Madaria',
    metaDesc: `Site internet pour fleuriste : commande en ligne avec retrait ou livraison, pages mariage et deuil, référencement local. Vitrine dès ${prixEntree}, boutique sur devis.`,
    h1: 'Création de site internet pour fleuriste',
    intro: [
      "Un bouquet se commande souvent à la dernière minute, et souvent à distance : l'anniversaire oublié, le collègue hospitalisé, des obsèques dans une autre ville. Le client cherche un fleuriste près du destinataire, pas près de chez lui. S'il ne peut pas commander en ligne, il passe par une plateforme qui prend sa commission sur votre travail.",
      "Nous construisons des sites de fleuriste qui prennent ces commandes en direct : retrait en boutique ou livraison dans votre zone, pages dédiées aux mariages et au deuil, et une boutique trouvée sur Google dans votre quartier.",
    ],
    enjeux: [
      {
        titre: 'Commander en direct, sans commission',
        text: "Les réseaux de transmission florale apportent des commandes, mais ils se rémunèrent sur chacune. Une commande prise sur votre propre site vous laisse la marge entière, et les coordonnées du client.",
      },
      {
        titre: 'Préparer les grandes dates',
        text: "Saint-Valentin, fête des mères, Toussaint : les commandes se concentrent sur quelques jours. Ouvrir les précommandes en ligne quelques semaines avant vous aide à prévoir vos achats et à lisser la charge.",
      },
      {
        titre: 'Mariage et deuil, deux pages à part',
        text: "Ce sont deux demandes très différentes, qui se préparent avec soin et se recherchent avec des mots précis. Une page dédiée à chacune, avec vos réalisations et un formulaire adapté, transforme la recherche en rendez-vous.",
      },
      {
        titre: 'Votre zone de livraison claire',
        text: "Le client veut savoir tout de suite si vous livrez la commune du destinataire et à quel prix. Une zone affichée clairement évite les commandes impossibles et rassure ceux qui commandent de loin.",
      },
    ],
    livrables: [
      'Commande en ligne avec retrait ou livraison (sur devis)',
      'Zone et tarifs de livraison clairs',
      'Pages mariage et deuil avec formulaire dédié',
      'Précommandes pour les grandes fêtes',
      'Fiche Google optimisée et reliée au site',
      'Créations et bouquets faciles à mettre à jour',
    ],
    faq: [
      {
        q: 'Un site de vente en ligne n’est-il pas trop compliqué pour une boutique de fleurs ?',
        r: "Pas besoin d'une grande boutique : quelques bouquets types, un choix de taille, la date et l'adresse de livraison suffisent souvent. Le périmètre est défini avec vous au cadrage et chiffré au devis.",
      },
      {
        q: 'Puis-je continuer à travailler avec un réseau de transmission florale ?',
        r: "Oui. Le site ne remplace pas le réseau du jour au lendemain : il vous permet de récupérer en direct les clients qui vous connaissent déjà, là où votre marge est entière.",
      },
      {
        q: 'Mes créations changent toutes les semaines, comment tenir le site à jour ?',
        r: "Vous pouvez mettre à jour vos bouquets depuis votre téléphone, ou nous envoyer les photos : en abonnement, les modifications mensuelles comprennent ce genre de mise à jour.",
      },
    ],
  },

  {
    slug: 'osteopathe',
    icon: 'osteopathe',
    nom: 'Ostéopathes',
    singulier: 'ostéopathe',
    text: "Un site sobre et informatif : votre formation, le déroulé d'une consultation, vos tarifs et l'accès à votre agenda en ligne.",
    besoins: ['Informations', 'Diplôme', 'Rendez-vous'],
    metaTitle: 'Création de site internet pour ostéopathe | Madaria',
    metaDesc: `Site internet pour ostéopathe : site informatif respectueux de votre déontologie, diplôme affiché, tarifs et lien vers votre agenda. Vitrine dès ${prixEntree}.`,
    h1: 'Création de site internet pour ostéopathe',
    intro: [
      "Avant un premier rendez-vous chez un ostéopathe, un patient cherche des réponses simples : où se trouve le cabinet, comment se passe une consultation, combien elle coûte, quand il reste de la place. Ces informations sont souvent dispersées entre un annuaire, une fiche Google et un agenda en ligne, et pas toujours à jour.",
      "Nous construisons des sites d'ostéopathe qui les rassemblent sur quelques pages sobres, dans le cadre de votre profession : les codes de déontologie des ostéopathes interdisent les procédés publicitaires, Internet compris. Le site informe, puis laisse le patient décider.",
    ],
    enjeux: [
      {
        titre: 'Informer sans faire de publicité',
        text: "Les codes de déontologie de la profession proscrivent les procédés de publicité directs ou indirects, quel que soit le support, et la Cour de cassation s'est appuyée sur cette règle en 2019 pour annuler un contrat publicitaire passé par un ostéopathe. Nous écrivons donc un site factuel : pas de slogan, pas de promesse de résultat, pas de témoignages de patients.",
      },
      {
        titre: 'Votre diplôme bien en vue',
        text: "Le décret n° 2007-435 demande aux ostéopathes d'indiquer leur diplôme sur leur plaque et sur tout document, ainsi que leurs diplômes d'État s'ils sont aussi professionnels de santé en exercice. Le site les présente clairement, avec votre parcours de formation.",
      },
      {
        titre: 'Expliquer une consultation',
        text: "Durée, déroulé, tenue à prévoir, tarif, moyens de paiement : ce sont les questions d'un patient qui n'a jamais consulté. Si vous recevez des nourrissons, la page peut aussi rappeler qu'avant six mois, les manipulations du crâne, de la face et du rachis demandent un diagnostic médical attestant l'absence de contre-indication, comme le prévoit le décret de 2007.",
      },
      {
        titre: 'Un accès direct à votre agenda',
        text: "Si vous utilisez déjà un agenda en ligne, Doctolib par exemple, qui référence des ostéopathes, le site y renvoie depuis chaque page. Le patient lit les informations pratiques, puis réserve sur l'outil que vous avez choisi.",
      },
    ],
    livrables: [
      'Présentation de votre formation, de votre diplôme et de votre parcours',
      'Page sur le déroulé d’une consultation, sa durée et son tarif',
      'Lien vers votre agenda en ligne sur chaque page',
      'Adresse, accès et horaires du cabinet',
      'Fiche Google à jour et cohérente avec le site',
      'Textes sobres et informatifs, sans ton publicitaire',
    ],
    faq: [
      {
        q: 'Un site internet est-il compatible avec l’interdiction de publicité ?',
        r: "Les codes de déontologie de la profession visent les procédés publicitaires et demandent que les mentions, y compris sur Internet, aient un objet informatif. Un site qui présente votre formation, votre cabinet, le déroulé des séances et vos tarifs reste dans ce cadre. En cas de doute sur une formulation, votre syndicat ou votre association professionnelle peut relire les textes avant la mise en ligne.",
      },
      {
        q: 'Puis-je afficher les avis de mes patients ?',
        r: "Nous ne le proposons pas sur un site d'ostéopathe. Mettre en avant des témoignages de patients nous paraît trop proche d'un procédé publicitaire, que les codes de déontologie de la profession interdisent. Le site s'en tient à des informations vérifiables.",
      },
      {
        q: 'Je suis aussi kinésithérapeute, comment le présenter ?',
        r: "Le décret de 2007 prévoit justement que les ostéopathes qui exercent aussi une profession de santé indiquent leurs diplômes d'État. Le site présente vos deux formations, chacune avec son diplôme, sans les mélanger.",
      },
    ],
  },

  {
    slug: 'coach-sportif',
    icon: 'coach',
    nom: 'Coachs sportifs',
    singulier: 'coach sportif',
    text: "Vos formules et vos tarifs lisibles, des demandes de séance d'essai bien renseignées et vos qualifications affichées.",
    besoins: ['Formules', 'Séance d’essai', 'Qualifications'],
    metaTitle: 'Création de site internet pour coach sportif | Madaria',
    metaDesc: `Site internet pour coach sportif : formules et tarifs clairs, demande de séance d'essai, carte professionnelle mise en avant. Vitrine dès ${prixEntree}.`,
    h1: 'Création de site internet pour coach sportif',
    intro: [
      "On choisit un coach sportif pour un objectif précis : reprendre après une grossesse, préparer un premier trail, se remettre au sport après dix ans d'arrêt, garder la forme à soixante ans. Le futur client cherche quelqu'un qui travaille ce sujet, près de chez lui ou à domicile, et il veut savoir combien coûte une séance avant d'écrire.",
      "Nous construisons des sites de coach qui présentent vos spécialités, vos formules et vos lieux d'intervention, et qui font venir des demandes de séance d'essai assez complètes pour que vous sachiez à qui vous parlez.",
    ],
    enjeux: [
      {
        titre: 'Une page par objectif',
        text: "« Coach sportif à domicile », « préparation physique trail », « remise en forme senior » : chaque objectif a sa recherche et son client. Une page dédiée, qui explique votre façon de travailler et le format des séances, vous fait trouver par les personnes qui cherchent exactement cela.",
      },
      {
        titre: 'Des formules lisibles',
        text: "Séance à l'unité, carnet de dix, abonnement mensuel, petit groupe en extérieur, cours en visio : un tableau clair évite les messages qui ne servent qu'à demander un prix, et laisse le client se projeter avant de vous contacter.",
      },
      {
        titre: 'Montrer vos qualifications',
        text: "Encadrer une activité sportive contre rémunération demande un diplôme reconnu et une carte professionnelle d'éducateur sportif, à renouveler tous les cinq ans. Afficher votre diplôme et votre carte rassure, et le client peut vérifier vos qualifications sur le site public du ministère des Sports.",
      },
      {
        titre: 'Une séance d’essai bien préparée',
        text: "Objectif, niveau actuel, blessures ou contre-indications éventuelles, disponibilités, lieu souhaité : le formulaire pose ces questions en amont. Vous arrivez à la première séance en connaissant la personne, ou vous l'orientez ailleurs si sa demande ne correspond pas à votre pratique.",
      },
    ],
    livrables: [
      'Une page par spécialité ou par public',
      'Formules et tarifs modifiables en deux clics',
      "Formulaire de demande de séance d'essai",
      'Diplôme et carte professionnelle mis en avant',
      "Zone d'intervention à domicile ou en extérieur",
      'Réservation et paiement des séances en ligne (sur devis)',
    ],
    faq: [
      {
        q: 'Je coache surtout à domicile, comment apparaître dans les recherches locales ?',
        r: "Une page qui liste vos communes d'intervention, une fiche Google réglée sur une zone desservie plutôt que sur une adresse, et des pages par objectif suffisent dans la plupart des cas. Votre adresse personnelle n'a pas à apparaître.",
      },
      {
        q: 'Puis-je vendre des carnets de séances en ligne ?',
        r: "Oui. Le paiement en ligne de carnets ou d'abonnements se cadre au devis, selon l'outil que vous utilisez déjà pour vos réservations. Si vous préférez commencer simplement, le site recueille d'abord les demandes, et le paiement s'ajoute plus tard.",
      },
      {
        q: 'Je donne aussi des cours en visio, le site peut-il les présenter ?',
        r: "Oui, avec une page dédiée qui explique le déroulé, le matériel à prévoir et les horaires. Ces cours ne dépendent pas de votre ville : la page vise donc des recherches plus larges que votre secteur.",
      },
    ],
  },

  {
    slug: 'boulangerie',
    icon: 'boulangerie',
    nom: 'Boulangeries',
    singulier: 'boulangerie',
    text: "Des horaires et des fermetures toujours justes, les commandes de gâteaux prises en ligne, et une boutique trouvée dans son quartier.",
    besoins: ['Horaires', 'Commandes', 'Google Maps'],
    metaTitle: 'Création de site internet pour boulangerie | Madaria',
    metaDesc: `Site internet pour boulangerie : horaires à jour, commandes de gâteaux et pièces montées, allergènes affichés. Vitrine dès ${prixEntree}, paiement sur devis.`,
    h1: 'Création de site internet pour boulangerie',
    intro: [
      "On connaît la boulangerie de sa rue. Le site sert aux autres moments : le dimanche, quand on cherche celle qui est ouverte ; en déplacement, dans un quartier qu'on ne connaît pas ; ou trois semaines avant un anniversaire, quand il faut commander un entremets pour vingt personnes.",
      "Nous construisons des sites de boulangerie pour ces moments-là : des horaires et des fermetures qui ne trompent personne, des commandes de gâteaux prises sans le téléphone aux heures de pointe, et une fiche Google qui dit la même chose que le site.",
    ],
    enjeux: [
      {
        titre: 'Des horaires qui ne trompent pas',
        text: "Jour de fermeture, congés d'été, horaires des jours fériés : un client qui trouve porte close à cause d'un horaire faux hésitera à revenir. Vous modifiez vos horaires depuis votre téléphone, et nous vous montrons comment faire la même chose sur votre fiche Google.",
      },
      {
        titre: 'Les commandes de gâteaux sans le téléphone',
        text: "Entremets d'anniversaire, pièce montée, plateaux pour une réception : ces commandes se préparent à l'avance et se prennent mal au comptoir quand la file attend. Un formulaire avec la date de retrait, le nombre de parts et le parfum vous arrive complet, et vous confirmez quand vous avez le temps.",
      },
      {
        titre: 'Les allergènes consultables',
        text: "La présence d'allergènes dans vos produits doit être portée à la connaissance du client, comme le prévoit le décret n° 2015-447. Sur le site, une fiche par gâteau ou par produit phare répond à la question avant même qu'on vous la pose.",
      },
      {
        titre: 'Les temps forts de l’année',
        text: "Galette des rois en janvier, bûches à Noël, chocolats à Pâques : une page de saison, ouverte quelques semaines avant, présente vos créations et prend les précommandes, pour que vous puissiez prévoir la production.",
      },
    ],
    livrables: [
      'Horaires et fermetures modifiables depuis votre téléphone',
      'Formulaire de commande de gâteaux et pièces montées',
      'Allergènes indiqués pour chaque produit présenté',
      'Pages de saison pour les précommandes',
      'Commande payée en ligne et retrait en boutique (sur devis)',
      'Fiche Google optimisée et reliée au site',
    ],
    faq: [
      {
        q: 'Un site sert-il vraiment à une boulangerie de quartier ?',
        r: "Vos habitués n'en ont pas besoin. Il sert aux nouveaux habitants, aux gens de passage et à ceux qui préparent une fête : ils cherchent sur leur téléphone, regardent vos horaires et vos créations, puis commandent. Il vous évite aussi les appels pour savoir si vous ouvrez un jour férié.",
      },
      {
        q: 'Puis-je prendre des commandes avec paiement en ligne ?',
        r: "Oui. Le paiement à la commande, avec retrait à une date et une heure choisies, se cadre et se chiffre au devis. Pour démarrer, un formulaire sans paiement suffit souvent : vous confirmez la commande par téléphone ou par e-mail.",
      },
      {
        q: 'Ma vitrine change avec les saisons, qui met le site à jour ?',
        r: "Vous pouvez le faire vous-même depuis votre téléphone, ou nous envoyer les photos et les textes : en abonnement, les modifications mensuelles comprennent ce type de mise à jour.",
      },
    ],
  },

  {
    slug: 'auto-ecole',
    icon: 'autoecole',
    nom: 'Auto-écoles',
    singulier: 'auto-école',
    text: "Chaque formation expliquée, des tarifs lisibles pour les élèves et les parents, et des demandes d'inscription reçues en ligne.",
    besoins: ['Formations', 'Tarifs', 'Inscription'],
    metaTitle: 'Création de site internet pour auto-école | Madaria',
    metaDesc: `Site internet pour auto-école : permis B, conduite accompagnée et supervisée expliqués, tarifs clairs. Vitrine dès ${prixEntree}, inscription en ligne sur devis.`,
    h1: 'Création de site internet pour auto-école',
    intro: [
      "Le choix d'une auto-école se fait souvent à deux : l'élève, qui cherche sur son téléphone, et le parent, qui compare les prix et veut savoir ce qu'inclut le forfait. Les deux posent les mêmes questions : quelle formule, combien d'heures, à partir de quel âge, comment s'inscrire.",
      "Nous construisons des sites d'auto-école qui répondent à ces questions avant le premier passage au bureau, et qui amènent des demandes d'inscription ou d'évaluation de départ plutôt que des appels pour connaître un prix.",
    ],
    enjeux: [
      {
        titre: 'Expliquer chaque filière',
        text: "Permis B classique, apprentissage anticipé de la conduite dès 15 ans, conduite supervisée à partir de 18 ans, boîte automatique : vues de l'extérieur, ces formules se ressemblent. Une page par filière, avec ses conditions et son déroulé, aide chacun à choisir la sienne.",
      },
      {
        titre: 'Des tarifs lisibles',
        text: "Forfait de départ, heures de conduite supplémentaires, formation au code : des prix détaillés et à jour évitent les comparaisons faussées et les appels qui ne servent qu'à demander un chiffre.",
      },
      {
        titre: 'Préparer l’inscription en ligne',
        text: "Le code de la route prévoit que le contrat d'enseignement de la conduite peut être conclu dans l'établissement ou à distance, après une évaluation préalable du candidat. Le site recueille les premières informations et la demande de rendez-vous d'évaluation ; un parcours d'inscription complet en ligne se cadre au devis.",
      },
      {
        titre: 'Être trouvé près de chez l’élève',
        text: "« Auto-école » suivi du nom de la ville ou du quartier : la recherche est locale, et l'élève cherche une agence proche de chez lui, de son lycée ou de son travail. Une fiche Google bien réglée, reliée à un site rapide, vous place dans ces résultats.",
      },
    ],
    livrables: [
      'Une page par formation (B, AAC, supervisée, boîte automatique)',
      'Tarifs et forfaits faciles à mettre à jour',
      "Demande de rendez-vous pour l'évaluation de départ",
      'Horaires du bureau et des séances de code',
      'Fiche Google optimisée et reliée au site',
      'Inscription et paiement en ligne (sur devis)',
    ],
    faq: [
      {
        q: 'Puis-je faire signer le contrat en ligne ?',
        r: "Le code de la route permet de conclure le contrat à distance, après l'évaluation préalable du candidat. La signature et le paiement en ligne dépendent de votre logiciel de gestion : nous regardons au cadrage ce qu'il permet, et le périmètre est chiffré au devis.",
      },
      {
        q: 'J’ai plusieurs agences, comment les présenter ?',
        r: "Une page par agence, avec son adresse, ses horaires de bureau, ses séances de code et sa propre fiche Google. Chacune peut ainsi apparaître dans les recherches de son quartier.",
      },
      {
        q: 'Le site peut-il parler des aides au financement du permis ?',
        r: "Oui. Nous présentons les dispositifs que vous acceptez et renvoyons vers les pages officielles pour les conditions détaillées, qui peuvent évoluer. Le site reste juste sans que vous ayez à le réécrire à chaque changement de règle.",
      },
    ],
  },

  {
    slug: 'paysagiste',
    icon: 'paysagiste',
    nom: 'Paysagistes',
    singulier: 'paysagiste',
    text: "Vos jardins en photos avant et après, des demandes de devis avec photos du terrain, et l'entretien présenté à part de la création.",
    besoins: ['Réalisations', 'Devis en ligne', 'Entretien'],
    metaTitle: 'Création de site internet pour paysagiste | Madaria',
    metaDesc: `Site internet pour paysagiste : réalisations avant-après, devis avec photos du terrain, création et entretien présentés à part. Vitrine dès ${prixEntree}.`,
    h1: 'Création de site internet pour paysagiste',
    intro: [
      "Un jardin se confie à quelqu'un dont on a vu le travail. Le particulier qui veut refaire sa terrasse ou planter une haie regarde d'abord des réalisations, puis compare deux ou trois paysagistes de son secteur. Pour l'entretien, les questions changent : qui passe chez moi, à quel rythme, et ai-je droit au crédit d'impôt ?",
      "Nous construisons des sites de paysagiste qui séparent ces deux activités : la création, avec vos chantiers en photos et une demande de devis détaillée, et l'entretien, avec vos formules, votre zone et le crédit d'impôt quand vos prestations y ouvrent droit.",
    ],
    enjeux: [
      {
        titre: 'Montrer les jardins avant et après',
        text: "Une terrasse, un massif, un aménagement complet se jugent sur photo. Une galerie classée par type de travaux, que vous complétez depuis le chantier avec votre téléphone, montre ce que vous savez faire mieux qu'une liste de prestations.",
      },
      {
        titre: 'Séparer création et entretien',
        text: "Ce sont deux clients, deux budgets et deux recherches : « aménagement de jardin » d'un côté, « entretien de jardin » ou « taille de haie » de l'autre. Une page pour chacun vous fait trouver sur les deux, et évite de mélanger devis de chantier et contrats à l'année.",
      },
      {
        titre: 'Expliquer le crédit d’impôt',
        text: "Les petits travaux de jardinage chez un particulier ouvrent droit à un crédit d'impôt de 50 %, dans la limite de 5 000 € de dépenses par an et par foyer, quand l'entreprise est déclarée en services à la personne. Si c'est votre cas, l'indiquer sur la page entretien change la façon dont le client lit votre tarif.",
      },
      {
        titre: 'Des demandes de devis complètes',
        text: "Surface, type de travaux, photos du terrain, accès pour les engins, période souhaitée : le formulaire pose ces questions pour que vous sachiez, avant de vous déplacer, si le projet correspond à votre activité.",
      },
    ],
    livrables: [
      'Galerie de réalisations avant-après',
      'Pages séparées pour la création et l’entretien',
      'Formulaire de devis avec photos du terrain',
      "Zone d'intervention claire",
      "Crédit d'impôt expliqué si vous y ouvrez droit",
      'Fiche Google optimisée et reliée au site',
    ],
    faq: [
      {
        q: 'Mon activité est saisonnière, le site peut-il suivre ?',
        r: "Oui. Vous mettez en avant la taille et la tonte au printemps, les plantations à l'automne, et la page d'accueil change avec la saison. En abonnement, ces mises à jour entrent dans les modifications mensuelles.",
      },
      {
        q: 'Comment présenter le crédit d’impôt sans me tromper ?',
        r: "Nous reprenons les conditions publiées sur service-public.fr et renvoyons vers la page officielle, plutôt que d'écrire des règles de mémoire. Seuls les petits travaux de jardinage y ouvrent droit : vous nous indiquez quelles prestations votre déclaration couvre, et la page le précise.",
      },
      {
        q: 'Je travaille aussi pour des professionnels, le site peut-il s’adresser à eux ?',
        r: "Oui, avec une page dédiée aux copropriétés, aux entreprises ou aux collectivités, qui parle de contrats d'entretien et de références plutôt que de jardins privés. Le formulaire de contact s'adapte au type de demande.",
      },
    ],
  },
];

export const parSlug = (slug: string) => secteurs.find((s) => s.slug === slug);

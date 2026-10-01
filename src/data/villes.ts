import { prixEntree } from './offres';

/**
 * Pages ville (/creation-site-internet/<slug>/). Volontairement peu
 * nombreuses : une ville n'a sa page que si Madaria y a un ancrage réel
 * (le siège, ou des clients livrés sur place). Une page par ville sans rien
 * de propre à dire serait une page satellite, que Google pénalise.
 */
export type Ville = {
  slug: string;
  nom: string;
  /** « à Lyon », « à Capbreton et sur la côte landaise » */
  a: string;
  metaTitle: string;
  metaDesc: string;
  intro: string[];
  /** ce qui rend la ville légitime : siège, clients sur place */
  ancrage: { titre: string; texte: string[] };
  /** réalisations livrées sur place (ids de realisations.ts) */
  projets: string[];
  /** communes et quartiers couverts, affichés tels quels */
  zone: string[];
  enjeux: { titre: string; text: string }[];
  /** métiers mis en avant (slugs de secteurs.ts) */
  metiers: string[];
  faq: { q: string; r: string }[];
};

export const villes: Ville[] = [
  {
    slug: 'lyon',
    nom: 'Lyon',
    a: 'à Lyon',
    metaTitle: 'Création de site internet à Lyon | Madaria',
    metaDesc: `Agence web à Lyon : sites vitrines sur-mesure dès ${prixEntree}, création incluse, en ligne en 7 jours. Un interlocuteur direct, rendez-vous possible sur place.`,
    intro: [
      "Madaria est née à Lyon, et c'est d'ici que je conçois et code chaque site. Pour un commerce, un artisan ou un indépendant de la métropole, ça veut dire un interlocuteur que vous pouvez rencontrer, qui connaît la ville, et qui répond au téléphone.",
      "Un site vitrine est en ligne en sept jours une fois les contenus réunis, avec une maquette validée avant le développement. Tout se fait à distance si vous préférez, ou autour d'un café si vous êtes dans le coin.",
    ],
    ancrage: {
      titre: 'Basé à Lyon, joignable en direct.',
      texte: [
        "Pas de commercial, pas de chef de projet : vous parlez à la personne qui dessine et code votre site. Le premier échange se fait par téléphone ou en visio, et un rendez-vous sur place reste possible partout dans la métropole.",
        "Je travaille aussi à distance avec des clients à Paris, Montpellier, Capbreton ou en Vendée. Être lyonnais n'est donc pas une condition, mais si vous l'êtes, on peut se voir.",
      ],
    },
    projets: [],
    zone: ['Lyon et ses 9 arrondissements', 'Villeurbanne', 'Vénissieux', 'Caluire-et-Cuire', 'Bron', 'Écully', 'Oullins-Pierre-Bénite', 'Tassin-la-Demi-Lune', "toute la métropole et le Rhône"],
    enjeux: [
      {
        titre: 'Sortir dans votre quartier',
        text: "À Lyon, on cherche « coiffeur Croix-Rousse » ou « plombier Villeurbanne », pas seulement « coiffeur Lyon ». Un site qui nomme votre quartier et votre zone, relié à une fiche Google bien réglée, vous place sur ces recherches de proximité.",
      },
      {
        titre: 'Se démarquer dans une ville très concurrentielle',
        text: "Une grande métropole compte des dizaines d'établissements par métier et par quartier. Un design sur-mesure, des photos réelles et des pages claires par prestation font la différence avec les sites montés à la chaîne sur le même modèle.",
      },
      {
        titre: 'Un site rapide sur téléphone',
        text: "La plupart des recherches locales se font sur mobile, souvent en déplacement. Un site léger qui s'affiche tout de suite garde le visiteur, là où un site lent le renvoie vers le concurrent suivant.",
      },
    ],
    metiers: ['barbier', 'coiffeur', 'restaurant', 'institut-de-beaute', 'plombier', 'electricien'],
    faq: [
      {
        q: 'Peut-on se rencontrer à Lyon ?',
        r: "Oui. Le premier échange se fait souvent par téléphone ou en visio pour aller vite, mais un rendez-vous sur place est possible dans toute la métropole lyonnaise, chez vous ou autour d'un café.",
      },
      {
        q: 'Travaillez-vous avec des entreprises hors de Lyon ?',
        r: "Oui, la plupart des projets se font à distance, partout en France. La préproduction est accessible en continu : vous suivez l'avancement de votre site sans avoir à vous déplacer.",
      },
      {
        q: 'Mon site peut-il cibler plusieurs quartiers ou communes de la métropole ?',
        r: "Oui, en restant honnête : une page sur votre zone d'intervention, vos réalisations situées dans ces communes et une fiche Google bien réglée font l'essentiel. Créer une page vide par commune ne marche pas, et Google la pénalise.",
      },
    ],
  },
  {
    slug: 'montpellier',
    nom: 'Montpellier',
    a: 'à Montpellier',
    metaTitle: 'Création de site internet à Montpellier | Madaria',
    metaDesc: `Création de site internet à Montpellier : studio de piercing, agence de publicité, climatisation auto. Vitrine sur-mesure dès ${prixEntree}, en ligne en 7 jours.`,
    intro: [
      "Montpellier est la ville où Madaria compte le plus de clients après Lyon : un studio de piercing, une agence de publicité en ligne et un spécialiste de la climatisation automobile y ont leur site signé Madaria.",
      "Je travaille avec eux à distance, et ça marche très bien : appel de cadrage, maquette à valider, préproduction ouverte en continu, puis mise en ligne. Votre site est prêt en sept jours pour une vitrine, une fois les contenus réunis.",
    ],
    ancrage: {
      titre: 'Des sites déjà en ligne à Montpellier.',
      texte: [
        "Chaque projet montpelliérain a sa propre identité : un univers sombre et soigné pour un studio de piercing, un site d'agence orienté génération de contacts, un site centré sur une seule spécialité pour un artisan de la climatisation automobile.",
        "Vous pouvez voir ces réalisations ci-dessous, avec leurs captures et ce qui a été mis en place pour chacune.",
      ],
    },
    projets: ['aurore-piercing', 'recharge-clim', 'kingdomads-social'],
    zone: ['Montpellier', 'Lattes', 'Castelnau-le-Lez', 'Pérols', 'Saint-Jean-de-Védas', 'Juvignac', 'toute la métropole et l’Hérault'],
    enjeux: [
      {
        titre: 'Être trouvé par spécialité',
        text: "Un site centré sur ce que vous faites le mieux se classe mieux sur cette recherche qu'un site qui liste tout. C'est le choix fait pour Recharge Clim Auto, entièrement tourné vers la climatisation automobile.",
      },
      {
        titre: 'Une identité qui vous ressemble',
        text: "Studio de piercing, agence, artisan : trois clients montpelliérains, trois univers graphiques. Aucun modèle partagé, chaque design part de l'activité et de la clientèle visée.",
      },
      {
        titre: 'Recevoir des demandes, pas seulement des visites',
        text: "Formulaire adapté à votre métier, numéro cliquable, prise de rendez-vous : le site est construit pour que le visiteur vous contacte, avec les informations dont vous avez besoin pour répondre.",
      },
    ],
    metiers: ['perceur', 'tatoueur', 'garage-automobile', 'restaurant', 'coiffeur', 'btp-artisan'],
    faq: [
      {
        q: 'Vous êtes à Lyon : comment ça se passe pour un client à Montpellier ?',
        r: "Tout se fait à distance : appel de cadrage, visio pour la maquette, préproduction accessible en ligne pour suivre l'avancement. C'est ainsi que les sites de nos clients montpelliérains ont été réalisés.",
      },
      {
        q: 'Puis-je voir des sites que vous avez faits à Montpellier ?',
        r: "Oui, ils sont présentés sur cette page : Aurore Piercing, KingdomAds et Recharge Clim Auto. Chaque projet a sa page détaillée avec les captures du site.",
      },
      {
        q: 'Combien coûte un site à Montpellier ?',
        r: `Les tarifs sont les mêmes partout en France : un site vitrine démarre à ${prixEntree}, création incluse, ou en achat en une fois. Le devis est envoyé sous 24 heures.`,
      },
    ],
  },
  {
    slug: 'capbreton',
    nom: 'Capbreton',
    a: 'à Capbreton et sur la côte landaise',
    metaTitle: 'Création de site internet à Capbreton et dans les Landes | Madaria',
    metaDesc: `Création de site internet à Capbreton et sur la côte landaise : restaurants, commerces, saisonniers. Vitrine sur-mesure dès ${prixEntree}, en ligne en 7 jours.`,
    intro: [
      "À Capbreton, deux restaurants ont leur site signé Madaria : Kami, cuisine de partage, et Munda-Kfé, restaurant de plage face à l'océan. Deux adresses voisines, deux identités qui n'ont rien à voir.",
      "Sur la côte, la saison décide de tout. Un site doit être prêt avant l'arrivée des vacanciers, à jour quand la carte change, et facile à trouver depuis un téléphone sur la plage. C'est exactement pour ça qu'on le construit.",
    ],
    ancrage: {
      titre: 'Deux restaurants déjà en ligne à Capbreton.',
      texte: [
        "Kami présente sa cuisine de partage avec une identité colorée et chaleureuse. Munda-Kfé joue la carte de la plage, des rayures et de l'océan. Les deux sites sont pensés pour le téléphone, là où leurs clients les cherchent.",
        "Les deux projets se sont faits à distance depuis Lyon, avec la même méthode que pour tous nos clients.",
      ],
    },
    projets: ['kami', 'munda-kfe'],
    zone: ['Capbreton', 'Hossegor', 'Seignosse', 'Labenne', 'Ondres', 'Tarnos', 'toute la côte landaise et le Pays basque voisin'],
    enjeux: [
      {
        titre: 'Être prêt avant la saison',
        text: "Les vacanciers cherchent où manger et que faire avant même d'arriver. Un site en ligne quelques semaines avant l'été, avec la carte, les horaires et l'accès, vous fait trouver au moment où ils préparent leur séjour.",
      },
      {
        titre: 'Une carte et des horaires toujours justes',
        text: "Horaires d'été, fermeture hebdomadaire, plats de saison : ce qui change souvent doit se mettre à jour en deux minutes. En abonnement, les modifications mensuelles comprennent ce genre de mise à jour.",
      },
      {
        titre: 'Capter les touristes qui cherchent sur place',
        text: "« Restaurant Capbreton », « restaurant bord de mer Hossegor » : ces recherches se font sur téléphone, souvent le jour même. Une fiche Google bien réglée et un site rapide vous placent dans ces résultats.",
      },
    ],
    metiers: ['restaurant', 'fleuriste', 'institut-de-beaute', 'photographe', 'coiffeur', 'btp-artisan'],
    faq: [
      {
        q: 'Mon établissement est saisonnier, un abonnement a-t-il du sens ?',
        r: `L'abonnement engage sur 12 mois, puis il est résiliable. Si vous préférez, l'achat en une fois est possible, avec des modifications facturées à l'heure. On choisit ensemble la formule qui colle à votre activité.`,
      },
      {
        q: 'Le site peut-il afficher des horaires différents l’été et l’hiver ?',
        r: "Oui. Les horaires saisonniers et les fermetures exceptionnelles se mettent à jour facilement, et on veille à ce qu'ils correspondent à ceux de votre fiche Google.",
      },
      {
        q: 'Travaillez-vous aussi à Hossegor ou Seignosse ?',
        r: "Oui, comme partout sur la côte : tout se fait à distance, et les deux restaurants de Capbreton ont été réalisés de cette façon.",
      },
    ],
  },
];

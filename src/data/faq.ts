import { offres, prixEntree, achatEntree, ENGAGEMENT_MOIS, TAUX_HORAIRE } from './offres';
export type Question = { q: string; r: string };

export const questions: Question[] = [
  {
    q: "Combien coûte la création d'un site internet ?",
    r: `Un site vitrine sur-mesure démarre à ${prixEntree}, création incluse, et un site complet avec référencement à ${offres[1].prix} ${offres[1].unite}. Rien à payer au départ, engagement ${ENGAGEMENT_MOIS} mois. Vous pouvez aussi payer en une fois : ${achatEntree} pour la vitrine, ${offres[1].achat} € HT pour le site complet. Le devis est chiffré sous 24 heures, maquette incluse, options précisées avant engagement.`,
  },
  {
    q: `Pourquoi ${ENGAGEMENT_MOIS} mois d'engagement ?`,
    r: `La création du site est comprise dans l'abonnement : vous ne payez rien au départ. Les ${ENGAGEMENT_MOIS} mois couvrent ce travail. Ensuite, vous arrêtez quand vous voulez et le nom de domaine reste à vous. Vous préférez ne pas vous engager ? Le site s'achète aussi en une fois, à partir de ${achatEntree}.`,
  },
  {
    q: "J'ai déjà Facebook et Instagram, ça ne suffit pas ?",
    r: "Quand quelqu'un cherche « plombier Villeurbanne » ou « tatoueur Lyon » sur Google, ce sont des sites qui sortent. Une page Facebook ou Instagram y apparaît rarement. Votre site et vos réseaux se complètent : on relie l'un à l'autre.",
  },
  {
    q: "Je n'ai pas le temps de m'en occuper.",
    r: "Il vous faut 15 minutes au téléphone et quelques photos. On écrit les textes, on met le site en ligne, et en abonnement on fait les modifications chaque mois.",
  },
  {
    q: 'Combien de temps pour un site ?',
    r: "Sept jours pour un site vitrine après validation du périmètre et réception des contenus et accès nécessaires, avec vos retours aux dates convenues. Pour un e-commerce ou une application métier, le calendrier dépend des fonctionnalités et des intégrations : il est fixé au devis.",
  },
  {
    q: "Et si j'arrête l'abonnement ?",
    r: `Après les ${ENGAGEMENT_MOIS} premiers mois, vous arrêtez quand vous voulez, sans frais. Le nom de domaine est à votre nom : il vous reste. Le site est dépublié, ou ses fichiers vous sont cédés si vous souhaitez le garder, au prix indiqué au devis.`,
  },
  {
    q: 'Je peux modifier mon site moi-même ?',
    r: "Les contenus que vous souhaitez modifier sont définis au cadrage. Nous précisons au devis l’interface d’édition et la formation prévues. Un back-office métier avec comptes clients ou base de données relève d’un périmètre sur-mesure.",
  },
  {
    q: "Concrètement, qu'est-ce qu'une automatisation ?",
    r: "Un formulaire rempli qui crée la fiche client, envoie le devis, programme la relance et met à jour votre tableau de bord, sans intervention humaine. Nous identifions avec vous les tâches à automatiser et mesurons le temps économisé une fois le flux en place.",
  },
  {
    q: 'À qui appartient le site une fois livré ?',
    r: "Le nom de domaine et vos contenus sont à vous dès le premier jour. Acheté en une fois, le site est entièrement à vous : code et hébergement compris. En abonnement, si vous arrêtez, vous gardez le domaine et pouvez racheter les fichiers du site au prix indiqué au devis.",
  },
  {
    q: 'Et après la mise en ligne ?',
    r: `En abonnement, rien à prévoir : hébergement, mises à jour, sauvegardes et modifications mensuelles sont compris. Si vous avez acheté le site en une fois, une panne qui vient de notre travail est réparée gratuitement, et les modifications sont facturées à l'heure (${TAUX_HORAIRE} € HT).`,
  },
  {
    q: 'Travaillez-vous uniquement à Lyon ?',
    r: "Nous sommes basés à Lyon, mais nous travaillons à 100 % à distance et accompagnons des clients partout en France. Les échanges se font en visioconférence, la préproduction est accessible en continu et vous suivez l'avancement de votre site internet au jour le jour. Si vous êtes dans la région lyonnaise, un rendez-vous sur place reste évidemment possible.",
  },
  {
    q: 'Comment pouvez-vous être moins cher que les autres ?',
    r: "Pas de bureaux, pas de commerciaux, pas de chef de projet entre vous et la personne qui code. Un process rodé et des outils modernes qui suppriment les semaines de mise en place. Vous payez le travail, pas la structure autour.",
  },
];

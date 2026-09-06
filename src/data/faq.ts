import { offres, prixEntree } from './offres';
export type Question = { q: string; r: string };

export const questions: Question[] = [
  {
    q: 'Combien de temps pour un site ?',
    r: "Sept jours pour un site vitrine après validation du périmètre et réception des contenus et accès nécessaires, avec vos retours aux dates convenues. Pour un e-commerce ou une application métier, le calendrier dépend des fonctionnalités et des intégrations : il est fixé au devis.",
  },
  {
    q: 'Je peux modifier mon site moi-même ?',
    r: "Les contenus que vous souhaitez modifier sont définis au cadrage. Nous précisons au devis l’interface d’édition et la formation prévues. Un back-office métier avec comptes clients ou base de données relève d’un périmètre sur-mesure.",
  },
  {
    q: "Concrètement, qu'est-ce qu'une automatisation ?",
    r: "Un formulaire rempli qui crée la fiche client, envoie le devis, programme la relance et met à jour votre tableau de bord — sans intervention humaine. Nous identifions avec vous les tâches à automatiser et mesurons le temps économisé une fois le flux en place.",
  },
  {
    q: 'À qui appartient le site une fois livré ?',
    r: "À vous, intégralement : code, noms de domaine, comptes d'hébergement, contenus. Aucun verrouillage, aucune dépendance imposée.",
  },
  {
    q: 'Et après la mise en ligne ?',
    r: 'Vous choisissez : autonomie complète, ou contrat de maintenance mensuel (mises à jour, sauvegardes, sécurité, évolutions et rapport de performance).',
  },
  {
    q: "Combien coûte la création d'un site internet ?",
    r: `Chez nous, un site vitrine sur-mesure démarre à ${prixEntree} € HT et un site complet avec référencement à ${offres[1].prix} € HT. Le devis est chiffré sous 24 heures et le prix annoncé est celui que vous payez : la maquette est incluse et les options ainsi que les éventuels frais récurrents sont précisés avant engagement.`,
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

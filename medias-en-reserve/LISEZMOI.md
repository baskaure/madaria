# Médias convertis, non publiés

Hors de `public/` pour ne pas alourdir le déploiement. Déplacer dans
`public/realisations/` et référencer dans `src/data/realisations.ts` si besoin.

- `klientmap-vitrine-source.mp4` — enregistrement d'écran d'origine de la
  vitrine du hero (écran complet 1920 × 1080 à 60 i/s, avec barre de menus,
  onglets, barre d'adresse et barre de défilement). Les versions publiées
  (`public/realisations/klientmap-vitrine.{webm,mp4,webp}`) en sont tirées :
  recadrage sur la page seule (`crop=1900:938:0:142`), 1264 × 624, 30 i/s,
  sans piste audio. La commande est dans `src/data/realisations.ts`.
- `la-pignatta.*` — trattoria à Saint-Raphaël, sortie de la grille le 02/09/2026
  pour laisser la place à la seconde carte KingdomAds. Réservation TheFork et
  carte en ligne.

## anciens-apercus/ (03/09/2026)

Les aperçus animés (MP4) et leurs posters (WebP 1280 × 625) de l'ancienne
grille de réalisations. Remplacés par les captures fixes de
`public/realisations/shots/` (4 fichiers par projet, voir
`scripts/captures.cjs`). Conservés au cas où.

- `appat-vitrine.webp` — ancienne image fixe du hero, remplacée le 06/09/2026
  par la vidéo KlientMap.

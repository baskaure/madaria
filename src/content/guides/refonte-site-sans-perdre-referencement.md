---
titre: "Refaire son site sans perdre son référencement Google"
title: "Refonte de site : garder son référencement | Madaria"
description: "Inventaire des pages, redirections 301, contenus à garder, changement de domaine : la méthode pour refaire votre site sans perdre vos positions sur Google."
chapo: "Un nouveau site peut effacer en une soirée des années de visibilité sur Google. Presque toujours pour la même raison : des adresses de pages qui changent sans que personne ne prévienne Google."
categorie: Référencement
publie: 2026-10-02
metiers: [restaurant, plombier, electricien, photographe, institut-de-beaute, btp-artisan]
---

Votre site a cinq ou dix ans, il rame sur téléphone et ne ressemble plus à votre activité. Vous voulez le refaire. Il reste pourtant un point à régler avant de tout jeter : ce vieux site vous amène peut-être des clients depuis Google, parfois sur des recherches précises (« dépannage chauffe-eau Villeurbanne », « photographe mariage Beaujolais ») que vous avez mis des années à obtenir.

Une refonte mal préparée peut faire perdre ces positions. Le scénario classique : les anciennes pages disparaissent, les nouvelles ont d'autres adresses, et Google tombe sur des pages introuvables pendant que vos clients tombent sur une erreur.

La bonne nouvelle, c'est que Google documente précisément la marche à suivre. Ce guide reprend ce que dit sa documentation officielle, Google Search Central, et le traduit en étapes concrètes pour un site d'indépendant ou de TPE.

## Avant de toucher à quoi que ce soit : l'inventaire

### La liste de toutes vos pages

Commencez par lister toutes les adresses (URL) de votre site actuel. Sur un petit site, vous pouvez le faire à la main en parcourant les menus. Plus simple : ouvrez le fichier `votresite.fr/sitemap.xml`, qui contient en général la liste des pages. N'oubliez pas les pages qui ne figurent dans aucun menu : anciennes promotions, articles de blog, pages de prestations ajoutées au fil des ans.

### Les pages qui vous amènent du monde

Toutes les pages ne se valent pas. Pour savoir lesquelles comptent, ouvrez Google Search Console, l'outil gratuit de Google pour suivre la présence d'un site dans ses résultats. Dans le rapport « Performances », triez les pages par nombre de clics sur les derniers mois. Notez aussi les requêtes qui amènent ces clics.

Si vous n'avez jamais installé Search Console, faites-le dès maintenant, avant la refonte. Il vous faudra quelques semaines de données pour avoir une photographie de départ, et cette photographie vous servira à comparer après la mise en ligne.

### Les liens qui pointent vers vous

Dans le même outil, le rapport « Liens » montre les sites qui parlent de vous : un annuaire professionnel, un article de presse locale, le site d'un fournisseur. Ces liens visent des adresses précises de votre site. Si ces adresses disparaissent, les liens mènent dans le vide.

## Garder ses adresses ou les rediriger

C'est le cœur du sujet. Pour chaque ancienne adresse, il n'y a que deux bonnes réponses.

**Garder la même adresse.** Si votre page « /tarifs » devient une nouvelle page « /tarifs », rien à faire : Google retrouve la page au même endroit. Quand c'est possible, c'est la solution la plus simple.

**Rediriger vers la page équivalente.** Si l'adresse change (par exemple `/nos-tarifs.html` devient `/tarifs/`), il faut une redirection permanente, appelée 301, de l'ancienne adresse vers la nouvelle. Le visiteur qui arrive par l'ancienne adresse est envoyé automatiquement sur la nouvelle, et Google comprend que la page a déménagé.

### Ce que dit Google des redirections 301

La documentation de Google est claire sur le type de redirection à utiliser. Elle recommande une redirection permanente côté serveur « chaque fois que possible », en précisant que c'est la meilleure façon de diriger Google et les visiteurs vers la bonne page. Avec une redirection permanente (301 ou 308), Google utilise la redirection comme un signal que la nouvelle adresse doit devenir l'adresse de référence. Avec une redirection temporaire (302), il suit la redirection mais ne tire pas cette conclusion.

Les redirections faites en JavaScript sont à éviter si vous avez le choix : Google indique qu'il ne faut y recourir qu'en dernier ressort, parce que l'affichage de la page peut échouer de son côté.

### Page par page, pas tout vers l'accueil

La tentation est forte de rediriger toutes les anciennes pages vers la page d'accueil du nouveau site. Google le déconseille explicitement : rediriger beaucoup d'anciennes adresses vers une seule page sans rapport, comme l'accueil, peut perturber les visiteurs et risque d'être traité comme une « soft 404 », c'est-à-dire comme une page introuvable déguisée.

La règle à suivre : chaque ancienne page pointe vers la nouvelle page qui traite du même sujet. Si vous avez regroupé trois anciennes pages de prestations en une seule, vous pouvez rediriger les trois vers cette page commune, Google l'admet. Et si une page n'a vraiment plus d'équivalent (une offre arrêtée depuis longtemps, par exemple), la laisser renvoyer une erreur 404 n'a rien d'anormal. L'aide de Search Console précise qu'une 404 n'est pas forcément un problème quand une page a été supprimée sans remplacement.

### Le tableau de correspondance

Tout cela se prépare dans un simple tableur, avant la mise en ligne. Une ligne par ancienne adresse :

| Ancienne adresse | Nouvelle adresse | Action |
|---|---|---|
| `/tarifs` | `/tarifs/` | Adresse conservée, rien à faire |
| `/nos-prestations/coupe-homme.html` | `/prestations/coupe-homme/` | Redirection 301 |
| `/soin-visage.html` et `/soin-anti-age.html` | `/soins-du-visage/` | Deux redirections 301 vers la page qui regroupe |
| `/promo-noel-2021.html` | aucune | Laissée en 404, la page n'a plus de raison d'être |
| `/contact.php` | `/contact/` | Redirection 301 |

Google recommande aussi d'éviter les chaînes de redirections (A renvoie vers B, qui renvoie vers C). Son robot peut en suivre jusqu'à dix, mais la documentation conseille d'en rester idéalement à trois au maximum. Si une adresse avait déjà été redirigée lors d'une ancienne refonte, faites pointer la redirection directement vers la destination finale.

Combien de temps garder les redirections ? Google répond : aussi longtemps que possible, en général au moins un an, pour lui laisser le temps de transférer tous les signaux vers les nouvelles adresses.

## Garder ce qui se classe déjà

Une page qui sort bien sur Google le doit en grande partie à son contenu. Si vous remplacez un texte détaillé de 600 mots sur le débouchage de canalisations par deux phrases et une belle photo, la redirection ne sauvera pas grand-chose : la nouvelle page répond moins bien à la recherche.

Reprenez donc la liste des pages qui vous amènent des clics. Pour chacune, gardez le fond du texte, quitte à le réécrire, le mettre à jour ou le rendre plus lisible. Les informations précises (prestations, zones d'intervention, questions fréquentes) sont souvent ce qui fait la différence pour Google. Un nouveau design peut tout à fait accueillir l'ancien contenu.

### Titres et descriptions

Chaque page a un titre (la ligne bleue cliquable dans les résultats de Google) et une description (le petit texte en dessous). Si vos pages actuelles ont des titres qui fonctionnent, ne les remplacez pas tous par « Accueil » ou par le nom de votre entreprise. Reprenez-les, améliorez-les si besoin, mais gardez les mots que vos clients tapent. Notez aussi que Google peut choisir d'afficher un autre texte que celui que vous avez écrit : vous proposez, il dispose.

### Les liens internes

Dans le nouveau site, les liens d'une page à l'autre doivent pointer directement vers les nouvelles adresses, pas vers les anciennes qui redirigent. Google le mentionne dans sa liste de préparation : mettre à jour les liens internes selon votre tableau de correspondance.

## Changer de nom de domaine : le cas à part

Changer de domaine (passer de `plomberie-durand.com` à `durand-plombier.fr`, par exemple) ajoute une couche de risque. Toutes les adresses changent en même temps, sans exception. Si vous pouvez garder votre domaine actuel, gardez-le. Si le changement est nécessaire (nouveau nom commercial, domaine enregistré au nom d'un ancien prestataire), voici ce que prévoit Google :

- des redirections 301 de chaque page de l'ancien domaine vers la page correspondante du nouveau, comme expliqué plus haut ;
- les deux domaines vérifiés dans Search Console, puis l'outil de changement d'adresse utilisé depuis la propriété de l'ancien domaine ;
- l'ancien domaine conservé : l'aide de Search Console recommande de continuer à le payer pendant au moins un an, pour que les redirections fonctionnent et que personne d'autre ne le rachète.

D'après l'aide de Search Console, cet outil sert uniquement quand on passe d'un domaine ou d'un sous-domaine à un autre. Il ne sert pas pour passer de `http` à `https`, ni pour passer de `www.votresite.fr` à `votresite.fr`. Son effet dure 180 jours à partir du début de la migration, et Google demande de garder les redirections au moins aussi longtemps, voire plus.

Pensez aussi à tout ce qui affiche votre ancienne adresse : la [fiche Google Business](/guides/fiche-google-business/), vos réseaux sociaux, les annuaires, vos signatures d'e-mail. Google suggère même de contacter les sites qui vous citent pour leur demander de mettre le lien à jour.

## Les vérifications le jour de la mise en ligne

Le nouveau site est en ligne. Avant de fêter ça, passez une heure sur ces contrôles.

### Tester les redirections

Reprenez votre tableau et collez chaque ancienne adresse dans votre navigateur. Vous devez arriver sur la bonne nouvelle page, en un seul saut. L'outil d'inspection d'URL de Search Console permet aussi de vérifier une adresse précise.

### Vérifier que Google a le droit d'entrer

Pendant le développement, un site en préparation est souvent bloqué aux moteurs de recherche (balise `noindex`, fichier `robots.txt` restrictif). C'est normal tant qu'il est en chantier. Ça devient un désastre si on oublie de lever le blocage à la mise en ligne. Google le rappelle dans sa documentation : retirez ces règles une fois les redirections actives, et vérifiez que les balises canoniques désignent bien les nouvelles adresses.

### Envoyer le nouveau sitemap

Dans Search Console, rubrique « Sitemaps », soumettez le fichier sitemap du nouveau site. Google indique que cela l'aide à découvrir les nouvelles adresses.

### Surveiller les erreurs 404

Dans les jours qui suivent, ouvrez le rapport « Pages » de Search Console. Les adresses introuvables y apparaissent. Si une ancienne page qui avait du trafic y figure, c'est qu'une redirection manque : ajoutez-la.

> - Search Console est installé et vous avez noté les pages qui amènent des clics.
> - Chaque ancienne adresse a une ligne dans le tableau de correspondance.
> - Les redirections sont permanentes (301), page par page, sans chaîne.
> - Les contenus des pages qui se classaient bien sont repris.
> - Les titres et descriptions des pages importantes sont conservés ou améliorés.
> - Les liens internes pointent vers les nouvelles adresses.
> - Aucun `noindex` ni blocage `robots.txt` n'est resté en place.
> - Le nouveau sitemap est envoyé dans Search Console.
> - En cas de changement de domaine, l'outil de changement d'adresse est lancé et l'ancien domaine renouvelé.
> - La fiche Google et les réseaux sociaux affichent la bonne adresse.

## À quoi s'attendre les semaines suivantes

Même avec une migration propre, Google prévient qu'il peut y avoir des fluctuations de classement pendant qu'il explore et indexe de nouveau le site.

Sur la durée, Google reste prudent : pour un petit ou moyen site, il parle de quelques semaines pour que la plupart des pages soient prises en compte, et davantage pour les gros sites. Personne ne peut vous garantir un délai plus précis, ni le maintien exact de vos positions. Ce que vous pouvez faire, c'est suivre l'évolution dans le rapport « Performances » de Search Console, comparer avec votre photographie de départ, et corriger vite ce qui cloche.

Une baisse qui dure plusieurs semaines sur une page précise mérite d'être examinée : une redirection manquante, un contenu trop amputé, un titre changé sans raison ou un `noindex` oublié sur une page. C'est là que le travail d'inventaire fait gagner du temps, parce que vous savez exactement à quoi comparer.

## En pratique

Une refonte qui protège le référencement se joue surtout avant la mise en ligne, dans l'inventaire et le tableau de correspondance. Comptez ce travail dans le budget, au même titre que le design. Notre guide sur le [prix d'un site internet](/guides/prix-site-internet/) détaille ce qu'un devis devrait inclure.

Chez Madaria, une [refonte](/services/creation-site-internet/) commence par le recensement des pages existantes et des contenus à conserver, et le périmètre peut inclure la reprise des adresses et les redirections. Si votre site actuel vous amène des clients et que vous voulez le refaire sans repartir de zéro sur Google, décrivez-nous votre projet : vous recevez un devis détaillé, avec ce qui est prévu pour la migration.

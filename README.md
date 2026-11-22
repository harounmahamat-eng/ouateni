# LOUATENI — لوطني

**Un pays avant tout. / وطن واحد قبل كل شيء. / بلد واحد قبل كل شي.**

Site d'un **atelier d'idées sur le Tchad** : une note à la fois, avec des chiffres, des sources, trois options et un arbitrage assumé. **Ce n'est pas un parti politique**, et le site ne présente aucune candidature.

- En ligne : **https://louateni.vercel.app** — le dépôt est la source : chaque `git push` sur `main` redéploie la production en ~30 secondes
- Contact : _comptes non encore ouverts — ils seront annoncés ici, pas inventés_

## Ce que le site est

- **Sans dépendance** : pas de framework, pas de build, pas de CDN. Il s'ouvre en double-cliquant sur `index.html` et il marche sans réseau.
- **Trois langues** : français, **دارجة** (arabe tchadien parlé), arabe standard. Le bouton de langue fait le cycle `دارجة → العربية → FR` ; les deux langues arabes passent en RTL.
- **Installable** (PWA) et **lisible hors ligne** dès qu'il est servi en HTTPS — au Tchad, c'est la vraie fonctionnalité : on lit dans un bus, pas dans un bureau fibre.
- **Aucune collecte** : le formulaire de proposition d'analyse enregistre sur **l'appareil du visiteur** et prépare un message que la personne envoie elle-même. Rien ne sort du navigateur. Pas de cookie, pas de pixel, pas d'analyseur, pas de base de données.
- **Honnête par construction** : les compteurs publics affichent les notes *publiées*, les brouillons sont comptés à part et étiquetés « brouillon — chiffres non encore vérifiés ». Une case de donnée non vérifiée reste vide et visible.

## Structure

| Fichier | Rôle |
|---|---|
| `brand.js` | le nom, les slogans, les handles, les compteurs — **un seul fichier pour la marque** |
| `i18n.js` | tous les textes d'interface en français et en arabe standard |
| `darija.js` | les mêmes clés en arabe tchadien parlé (repli automatique sur l'arabe standard) |
| `content.js` | les analyses (1 note = 1 bloc) |
| `app.js` | langues, thème, recherche, filtres, lecteur, formulaire, PWA |
| `sw.js` | cache hors ligne (même origine uniquement) |
| `manifest.webmanifest`, `assets/icon.svg` | l'app installable |

## Publier une note

Ajouter un bloc dans `content.js` en suivant `NOTE_TEMPLATE`, avec `status: "draft"` tant qu'une seule case de donnée n'est pas sourcée. Passage à `status: "published"` **et** incrément de `brand.js → stats.notes` uniquement quand chaque chiffre a sa source et sa date de relevé.

## Mise en ligne

Le site est servi par **Vercel** depuis ce dépôt (préset « Other », aucune commande de build, aucun `npm install` : les fichiers sont servis tels quels, en HTTPS, avec le service worker à la racine). N'importe quel hébergeur statique ferait la même chose — Netlify ou Cloudflare Pages acceptent le dossier tel quel.

Deux règles de mise à jour :

1. après toute modification de `sw.js`, incrémenter `VERSION` dans `sw.js` (actuellement `louateni-v1`) pour que les téléphones re-téléchargent la coquille ;
2. vérifier avant de pousser : aucun fichier privé du projet ne doit entrer dans ce dépôt — la racine du dépôt est le site, point final.

## À savoir (limites assumées)

1. La **دارجة** du site est une première passe : elle est intelligible, pas encore validée par un locuteur natif de N'Djamena. Le corps du manifeste reste en arabe standard jusqu'à cette relecture.
2. Le **nom LOUATENI** n'a pas encore fait l'objet d'une recherche d'antériorité (plateformes, registre des partis, domaines `.td`/`.com`).
3. Les chiffres du pays ne sont **pas** encore relevés : c'est le travail éditorial, pas un défaut d'affichage.

## Licence

Non tranchée à ce jour. Recommandation de l'auteur du dépôt : **CC BY-SA 4.0 pour les textes** (les analyses doivent pouvoir être citées et corrigées) et **MIT pour le code**. Le choix sera publié ici même.

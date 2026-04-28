# 🚗 TeslaGuide — Le guide Tesla en français

> Un site indépendant, non affilié à Tesla Inc., dédié aux futurs et actuels propriétaires de Tesla en France.

🌐 **Site en ligne** : [mikefri.github.io/TeslaGuide](https://mikefri.github.io/TeslaGuide/)

---

## À propos

**TeslaGuide** est un blog personnel conçu pour aider les francophones à mieux comprendre l'univers Tesla avant et après l'achat. Face à la masse d'informations disponibles en anglais, l'objectif est simple : proposer des guides clairs, honnêtes et pratiques, rédigés en français.

Le site couvre :

- 📋 **Comparatifs** — Quel modèle Tesla choisir selon son usage et son budget ?
- ⚡ **Motorisations** — Comprendre RWD, AWD, Performance et Plaid
- 🔋 **Recharge** — Superchargeur, borne à domicile, coûts réels
- 💰 **Coûts et finances** — Prix d'achat, aides de l'État, coût au kilomètre
- 🎁 **Parrainage** — Lien de parrainage pour économiser sur votre commande

---

## Stack technique

Ce site est construit avec :

- [Jekyll](https://jekyllrb.com/) — Générateur de sites statiques
- [GitHub Pages](https://pages.github.com/) — Hébergement gratuit
- CSS custom — Design fait maison (Bebas Neue + Barlow)
- Plugins : `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`

---

## Structure du projet

```
TeslaGuide/
├── _layouts/
│   └── default.html       # Template principal (nav, footer, SEO)
├── _includes/
│   └── structured-data.html  # JSON-LD pour Google
├── _posts/
│   └── YYYY-MM-DD-titre.md   # Articles du blog
├── assets/
│   └── css/
│       └── main.css       # Feuille de style principale
├── _config.yml            # Configuration Jekyll
├── index.html             # Page d'accueil
├── blog.html              # Liste des articles
├── sitemap.xml            # Sitemap pour Google
├── robots.txt             # Instructions pour les crawlers
└── Gemfile                # Dépendances Ruby
```

---

## Lancer le site en local

```bash
# Installer les dépendances
bundle install

# Lancer le serveur de développement
bundle exec jekyll serve

# Ouvrir dans le navigateur
http://localhost:4000/TeslaGuide/
```

---

## Publier un nouvel article

Créez un fichier dans `_posts/` avec ce format de nom : `YYYY-MM-DD-titre-de-larticle.md`

Avec ce front matter en en-tête :

```yaml
---
layout: post
title: "Titre de l'article"
description: "Description SEO de 150-160 caractères max."
date: YYYY-MM-DD
category: Catégorie
author: Michael
image: "/assets/css/images/nom-image.jpg"
excerpt: "Court résumé affiché dans la liste des articles."
---
```

---

## Parrainage Tesla

En commandant une Tesla via le lien ci-dessous, vous bénéficiez d'avantages exclusifs (kilomètres Supercharger offerts, réductions sur accessoires) :

**👉 [https://ts.la/michael618693](https://ts.la/michael618693)**

---

## Mentions légales

Ce site est **indépendant et non affilié à Tesla, Inc.**
Les informations publiées sont données à titre indicatif. Pour toute décision d'achat, consultez le [configurateur officiel Tesla](https://www.tesla.com/fr_fr/).

---

*Fait avec ❤️ par Michael — Propriétaire Tesla & passionné de mobilité électrique*

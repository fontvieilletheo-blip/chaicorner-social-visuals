# Agni — suivi nutrition Chaï Corner

App web une page : diagnostic, repères (calories, macros, micronutriments), journal des repas, suivi hebdo, lecture ayurvédique et saisonnalité.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Le site, généré. Ne pas modifier à la main. |
| `ciqual.json` | Table Ciqual 2025 de l'Anses (3 303 aliments, 36 nutriments pour 100 g), générée. |
| `functions/api/claude.js` | Relais serveur vers l'API Claude (estimation par photo ou texte, idées de repas). |
| `src/app.html` | Source de l'app (HTML, CSS, JS). |
| `tools/aliases.txt` | Mots du quotidien → ligne Ciqual exacte et portion par défaut. |
| `tools/search.js` | Recherche dans la table. |
| `tools/build.py` | Assemble `index.html` et `dist/artifact.html`. |
| `tools/build_ciqual.py` | Convertit le fichier Ciqual de l'Anses en `ciqual.json`. |

## Reconstruire

```sh
python3 tools/build.py
# seulement si la table Ciqual change :
python3 tools/build_ciqual.py CIQUAL2025_FR_2025_11_03.csv ciqual.json
```

## Mettre en ligne sur un sous-domaine de chaicorner.fr

Le site est statique, plus une fonction serveur pour Claude. Le montage prévu est Cloudflare Pages.

1. Cloudflare > Workers & Pages > Create > Pages > Connect to Git, choisir ce dépôt.
2. Root directory : `nutrition`. Build command : vide. Output directory : `/`.
3. Settings > Environment variables, en secrets :
   - `ANTHROPIC_API_KEY` : clé de l'API Claude ;
   - `APP_CODE` : code d'accès à donner aux testeurs (ils le saisissent dans Profil) ;
   - `CLAUDE_MODEL` (facultatif).
4. Custom domains > ajouter le sous-domaine (par exemple `agni.chaicorner.fr`), puis créer chez le gestionnaire DNS du domaine l'enregistrement CNAME indiqué par Cloudflare.

Sans `ANTHROPIC_API_KEY`, tout fonctionne sauf les trois boutons Claude, qui restent masqués.

Tout autre hébergeur statique convient (Netlify, Vercel, GitHub Pages) ; il faut alors réécrire le relais `api/claude` au format de l'hébergeur, ou s'en passer.

## Données

- Aliments : table Ciqual 2025, Anses, licence ouverte.
- Produits emballés : Open Food Facts, interrogé en direct depuis le navigateur.
- Repères en micronutriments : références nutritionnelles pour la population adulte, Anses 2021, saisies dans `refs()` de `src/app.html`. À faire relire par un professionnel avant une diffusion large.
- Sur le site, le profil et le journal restent dans le navigateur de chaque personne (sauvegarde et restauration par fichier dans Profil).

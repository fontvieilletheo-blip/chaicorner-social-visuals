# Agni : sources et méthodes

Ce document liste chaque calcul de l'app, sa formule et sa source. Les choix propres à l'app sont signalés comme tels. Les valeurs de référence ont été saisies d'après les documents cités, sans relecture par un professionnel de santé : merci de signaler toute valeur à corriger.

La même information est consultable dans l'app : Plan > Sources et méthodes.

## Dépense énergétique

| Calcul | Formule | Source |
|---|---|---|
| Métabolisme de base | 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge, +5 (homme) ou −161 (femme). Si la masse grasse est connue : 370 + 21,6 × masse maigre (kg). | Mifflin MD et al., Am J Clin Nutr 1990 ; Katch-McArdle (McArdle, Katch et Katch, *Exercise Physiology*) |
| Travail et vie quotidienne | Métabolisme × 1,2 (assis), 1,35 (mixte), 1,5 (physique) | Facteurs usuels inspirés des niveaux d'activité FAO/OMS/UNU 2004. Choix de l'app ; sport et trajets comptés à part |
| Sport | (MET − 1) × poids × heures par semaine ÷ 7 | Compendium of Physical Activities (Ainsworth et al. 2011 ; Herrmann et al. 2024), valeurs arrondies |
| Trajets à pied ou à vélo | 2,5 kcal × poids × heures | Équivaut à 3,5 MET, marche modérée (Compendium) |
| Déficit ou surplus | Perte −12 % ou −20 % de la dépense, jamais sous le métabolisme de base ; prise +7 % ou +12 % | Choix de l'app |
| Vitesse de perte | 1 kg de masse grasse ≈ 7 700 kcal | Wishnofsky 1958. Surestime la perte dans la durée (Hall KD et al., Lancet 2011), d'où le recalcul sur les pesées |
| Dépense réelle | Apport moyen noté − (variation de poids × 7 700 ÷ jours), dès 10 jours et 7 jours de repas notés | Bilan énergétique observé |

## Macronutriments

| Repère | Valeur dans l'app | Source |
|---|---|---|
| Protéines | 1,0 g/kg (maintien), 1,2 (perte), 1,4 (prise de muscle) ; +0,1 dès 2 h de sport par semaine, +0,2 dès 4 h ; plafond 1,6 g/kg. Appliqué au poids de référence : celui d'un IMC de 25 si l'IMC dépasse 25. La valeur fixée par un ou une nutritionniste remplace le calcul. | Repère adulte 0,83 g/kg (EFSA 2012, Anses) ; 1,2 à 1,6 g/kg en perte de poids (Leidy HJ et al., Am J Clin Nutr 2015) ; 1,4 à 2,0 g/kg chez les sportifs (ISSN, Jäger R et al. 2017). Coefficients exacts : choix de l'app |
| Lipides | 35 % de l'énergie | Anses 2011 : 35 à 40 % |
| Glucides | Reste des calories (environ 40 à 50 %) | Anses 2016 : 40 à 55 % |
| Fibres | 30 g/j | Anses 2016 |
| Acides gras saturés | ≤ 12 % de l'énergie | Anses 2011 |
| Oméga-3 ALA | 1 % de l'énergie | Anses 2011 |
| Oméga-3 EPA + DHA | 500 mg/j | Anses 2011 (250 + 250 mg) |
| Sucres | ≤ 100 g/j hors lactose et galactose | Anses 2016 |
| Sel | < 5 g/j | OMS 2012 |
| Alcool | ≤ 20 g/j (2 verres standard), pas tous les jours | Santé publique France et INCa 2017 |
| Eau (boissons) | 1,6 L (femme), 2 L (homme) | EFSA 2010 (2 et 2,5 L d'eau au total, dont environ 20 % par les aliments) |

## Micronutriments (adulte)

Valeurs nutritionnelles de référence de l'EFSA (2013-2017), reprises pour l'essentiel par l'Anses en 2021. PRI : apport qui couvre les besoins de presque toute la population. AI : apport jugé suffisant quand les données ne permettent pas de fixer une PRI.

| Nutriment | Homme | Femme | Type |
|---|---|---|---|
| Calcium | 950 mg (1 000 de 18 à 24 ans) | idem | PRI, EFSA 2015 |
| Fer | 11 mg | 16 mg réglée, 11 mg après la ménopause | PRI, EFSA 2015 |
| Magnésium | 350 mg | 300 mg | AI, EFSA 2015 |
| Potassium | 3 500 mg | 3 500 mg | AI, EFSA 2016 |
| Zinc | 11 mg | 8,9 mg | PRI, EFSA 2014 (phytates 600 mg/j) |
| Phosphore | 550 mg | 550 mg | AI, EFSA 2015 |
| Iode | 150 µg | 150 µg | AI, EFSA 2014 |
| Sélénium | 70 µg | 70 µg | AI, EFSA 2014 |
| Cuivre | 1,6 mg | 1,3 mg | AI, EFSA 2015 |
| Manganèse | 3 mg | 3 mg | AI, EFSA 2013 |
| Vitamine A | 750 µg | 650 µg | PRI, EFSA 2015 |
| Vitamine D | 15 µg | 15 µg | AI, EFSA 2016 |
| Vitamine E | 13 mg | 11 mg | AI, EFSA 2015 |
| Vitamine K1 | 70 µg | 70 µg | AI, EFSA 2017 |
| Vitamine C | 110 mg | 95 mg | PRI, EFSA 2013 |
| Vitamine B1 | 0,1 mg/MJ | 0,1 mg/MJ | PRI, EFSA 2016 |
| Vitamine B2 | 1,6 mg | 1,6 mg | PRI, EFSA 2017 |
| Vitamine B3 | 1,6 mg/MJ | 1,6 mg/MJ | PRI, EFSA 2014 |
| Vitamine B5 | 5 mg | 5 mg | AI, EFSA 2014 |
| Vitamine B6 | 1,7 mg | 1,6 mg | PRI, EFSA 2016 |
| Vitamine B9 | 330 µg DFE | 330 µg DFE | PRI, EFSA 2014 |
| Vitamine B12 | 4 µg | 4 µg | AI, EFSA 2015 |

Limites connues : la grossesse, l'allaitement et les pathologies ne sont pas couverts. La vitamine B3 de la table Ciqual est la niacine seule, sans l'apport du tryptophane.

## Composition des aliments

- **Table Ciqual 2025** (Anses, licence ouverte) : 3 303 aliments, 36 nutriments pour 100 g. Valeur multipliée par les grammes saisis. Une valeur absente de la table compte pour zéro : les totaux en micronutriments sont donc des minimums.
- **Produits emballés** (site uniquement) : Open Food Facts, valeurs de l'étiquette.
- **Estimation par photo ou par texte** : Claude décompose le plat ; chaque aliment est rapproché de la table Ciqual quand l'écart de calories est inférieur à 40 %, sinon l'estimation de Claude est gardée (calories et macros seules).

## Grammages

### Mesures ménagères

Utilisées quand une quantité est écrite sans grammes. Valeurs usuelles, choisies pour l'app.

| Mesure | Grammes |
|---|---|
| Cuillère à soupe d'huile ou de beurre | 12 g |
| Cuillère à soupe (autres aliments) | 15 g |
| Cuillère à café | 5 g |
| Bol, assiette | 300 g |
| Verre | 200 ml ; vin 125 ml (verre standard de 10 g d'alcool) |
| Tasse | 200 ml ; expresso 50 ml |
| Poignée | 30 g |
| Carré de chocolat | 10 g |
| Boule de glace | 60 g |
| Tranche | portion de l'aliment, 40 g au plus |
| Canette, pinte | 330 ml, 500 ml |
| Aliment sans quantité | portion par défaut ci-dessous, sinon 150 g |

### Portions par défaut

Portions moyennes estimées pour l'app, pas des mesures. À comparer avec les portions observées par l'Anses (étude INCA 3, 2017) ou le manuel photo de l'étude SU.VI.MAX. Le mot saisi renvoie à la ligne de la table Ciqual indiquée.

| Mot saisi | Portion | Aliment Ciqual |
|---|---|---|
| abricot | 45 g | Abricot, dénoyauté, cru |
| amandes | 30 g | Amande, avec peau, sans sel ajouté |
| ananas | 150 g | Ananas, chair sans peau, cru |
| aubergine | 200 g | Aubergine, cuite |
| avocat | 140 g | Avocat, chair sans peau, sans noyau, cru |
| banane | 120 g | Banane, chair sans peau, crue |
| betterave | 120 g | Betterave rouge, cuite |
| beurre | 10 g | Beurre à 80% MG minimum, doux |
| beurre de cacahuete | 15 g | Beurre de cacahuète ou pâte d'arachide |
| biere | 250 g | Bière "coeur de marché" (4-5° alcool) |
| biscuits | 15 g | Biscuit sec, sans précision |
| boulgour | 180 g | Boulgour de blé, cuit, sans sel ajouté |
| brocoli | 200 g | Brocoli, cuit (aliment moyen) |
| burger | 220 g | Hamburger, de restauration rapide |
| cabillaud | 140 g | Cabillaud, cuit, sans précision (aliment moyen) |
| cacahuetes | 30 g | Cacahuète, grillée, sans sel ajouté |
| cafe | 50 g | Café expresso, non instantané, sans sucres ajoutés, prêt à boire |
| camembert | 30 g | Camembert, sans précision sur le type de lait (pasteurisé ou cru) |
| carotte | 120 g | Carotte, cuite (aliment moyen) |
| carottes rapees | 100 g | Carotte, crue |
| cerises | 100 g | Ceriser, chair et peau, sans noyau, crue |
| champignons | 150 g | Champignon de Paris ou champignon de couche, sauté/poêlé, sans matière grasse |
| cheeseburger | 150 g | Cheeseburger, de restauration rapide |
| chevre | 30 g | Fromage de chèvre bûche |
| chips | 30 g | Chips de pommes de terre nature ou aromatisées |
| chocolat | 20 g | Chocolat noir 40% de cacao et plus, à pâtisser, tablette |
| chocolat au lait | 20 g | Chocolat au lait, tablette |
| chou | 150 g | Chou vert, cuit |
| chou fleur | 200 g | Chou-fleur, bouilli/cuit à l'eau |
| clementine | 60 g | Clémentine ou mandarine, chair sans peau, sans pépins, crue |
| compote | 100 g | Compote de pomme, sans précision sur la teneur en sucres ni sur le rayon (aliment moyen) |
| comte | 30 g | Comté |
| concombre | 150 g | Concombre, chair et peau, cru |
| confiture | 20 g | Confiture ou marmelade, tout type de fruits, sans précision sur la teneur en sucres (aliment moyen) |
| cote de porc | 150 g | Porc, côte grillée/poêlée |
| courge | 200 g | Potiron, cuit |
| courgette | 200 g | Courgette, chair et peau, cuite |
| creme | 30 g | Crème 30% MG, épaisse, rayon frais |
| crepe | 50 g | Crêpe, nature, préemballée, rayon frais |
| crevettes | 100 g | Crevette, cuite |
| croissant | 60 g | Croissant, sans précision (aliment moyen) |
| cuisse de poulet | 150 g | Poulet, cuisse, viande rôtie/cuite au four |
| dattes | 10 g | Datte, chair et peau, sans noyau, sèche |
| dinde | 130 g | Dinde, escalope grillée/poêlée |
| emmental | 30 g | Emmental ou emmenthal |
| endive | 150 g | Endive, crue |
| epinards | 200 g | Épinard, cuit |
| fenouil | 150 g | Fenouil, cuit (aliment moyen) |
| feta | 40 g | Feta, au lait de brebis 70% minimum et lait de chèvre 30% maximum |
| figue | 45 g | Figue, crue |
| flocons d avoine | 50 g | Flocons d'avoine |
| fraises | 150 g | Fraise, crue |
| framboises | 100 g | Framboise, crue |
| frites | 150 g | Frites de pommes de terre, surgelées, cuites en friteuse |
| fromage blanc | 150 g | Fromage blanc, nature, 2-3% MG |
| fromage blanc 0 | 150 g | Fromage blanc, nature, 0% MG |
| galette de sarrasin | 60 g | Galette de sarrasin, nature, souple (à garnir) préemballée |
| ghee | 10 g | Huile de beurre ou beurre concentré |
| graines de chia | 15 g | Chia, graine, séchée |
| graines de courge | 15 g | Courge, graine, séchée |
| graines de lin | 15 g | Lin, graine |
| graines de tournesol | 15 g | Tournesol, graine |
| haricots blancs | 150 g | Haricot blanc, bouilli/cuit à l'eau |
| haricots rouges | 150 g | Haricot rouge, bouilli/cuit à l'eau |
| haricots verts | 200 g | Haricot vert, cuit |
| houmous | 40 g | Houmous, préemballé |
| huile d olive | 10 g | Huile d'olive vierge extra |
| huile de coco | 10 g | Huile ou graisse de coco, sans précision |
| huile de colza | 10 g | Huile de colza |
| jambon | 40 g | Jambon cuit, supérieur |
| jambon cru | 15 g | Jambon sec |
| jus d orange | 200 g | Jus d'orange, pur jus |
| kaki | 150 g | Kaki, chair et peau, cru |
| kebab | 350 g | Sandwich grec ou kebab, pita, crudités |
| kiwi | 80 g | Kiwi, chair sans peau, avec pépins, cru |
| lait | 250 g | Lait demi-écrémé (aliment moyen) |
| lait d amande | 250 g | Boisson à l'amande, préemballée (aliment moyen) |
| lait d avoine | 250 g | Boisson à l'avoine, nature, sans sucres ajoutés, non enrichie, préemballée |
| lait de soja | 250 g | Boisson au soja, préemballée (aliment moyen) |
| lait entier | 250 g | Lait entier (aliment moyen) |
| lardons | 50 g | Lardon nature, cuit |
| legumes | 200 g | Légumes pour couscous, cuits |
| lentilles | 180 g | Lentille, bouillie/cuite à l'eau (aliment moyen) |
| lentilles corail | 180 g | Lentille corail, bouillie/cuite à l'eau |
| mais | 100 g | Maïs doux, appertisé, égoutté |
| mangue | 150 g | Mangue, chair sans peau, sans noyau, crue |
| maquereau | 100 g | Maquereau, rôti/cuit au four |
| melon | 200 g | Melon cantaloup (par ex.: Charentais), chair sans peau, sans pépins, cru |
| miel | 10 g | Miel |
| mozzarella | 60 g | Mozzarella au lait de vache |
| muesli | 50 g | Muesli (aliment moyen) |
| mung dal | 50 g | Haricot mungo, sec |
| myrtilles | 100 g | Myrtille, crue |
| navet | 150 g | Navet, cuit |
| noisettes | 30 g | Noisette, sans sel ajouté |
| noix | 30 g | Noix, cerneau, séchée |
| noix de cajou | 30 g | Noix de cajou, grillée, sans sel ajouté |
| oeuf | 55 g | Oeuf dur |
| oeuf au plat | 55 g | Oeuf au plat, sans matière grasse |
| oignon | 60 g | Oignon, cuit |
| olives | 30 g | Olive (aliment moyen) |
| omelette | 120 g | Omelette nature, faite maison |
| orange | 150 g | Orange, chair sans peau, sans pépins, crue |
| pain | 40 g | Pain blanc (par ex. : baguette, boule…) |
| pain au chocolat | 70 g | Pain au chocolat, artisanal |
| pain complet | 40 g | Pain complet ou intégral (à la farine T150) |
| pain de mie | 28 g | Pain de mie blanc, préemballé |
| parmesan | 10 g | Parmesan |
| pasteque | 250 g | Pastèque, chair sans peau, sans pépins, crue |
| patate douce | 200 g | Patate douce, cuite |
| pate a tartiner | 15 g | Pâte à tartiner chocolat et noisette |
| pates | 200 g | Pâtes sèches, standard, cuites, sans sel ajouté |
| pates completes | 200 g | Pâtes sèches, au blé complet, cuites, sans sel ajouté |
| pates crues | 80 g | Pâtes sèches, standard, crues |
| peche | 130 g | Pêche, chair sans peau, sans noyau, crue (aliment moyen) |
| petits pois | 150 g | Petits pois, cuits |
| pizza | 300 g | Pizza (aliment moyen) |
| poire | 150 g | Poire, chair et peau, crue |
| poireau | 200 g | Poireau, bouilli/cuit à l'eau |
| pois chiches | 150 g | Pois chiche, bouilli/cuit à l'eau |
| poivron | 120 g | Poivron, vert, jaune ou rouge, cuit (aliment moyen) |
| pomme | 150 g | Pomme, chair et peau, crue |
| pomme de terre | 200 g | Pomme de terre, bouillie/cuite à l'eau |
| porc | 130 g | Porc, filet mignon cuit |
| porridge | 250 g | Flocons d'avoine bouillis/cuits à l'eau |
| potimarron | 200 g | Potimarron, chair sans peau, cuit (aliment moyen) |
| poulet | 130 g | Poulet, filet sans peau grillé/poêlé |
| prune | 40 g | Prune, sans noyau, crue |
| puree | 200 g | Purée de pomme de terre (aliment moyen) |
| quiche | 150 g | Quiche lorraine, préemballée |
| quinoa | 180 g | Quinoa, bouilli/cuit à l'eau, sans sel ajouté |
| radis | 80 g | Radis rouge, cru |
| raisin | 120 g | Raisin cru (aliment moyen) |
| raisins secs | 30 g | Raisin sec |
| ratatouille | 250 g | Ratatouille cuisinée, préemballée |
| riz | 180 g | Riz blanc, cuit, sans sel ajouté |
| riz basmati | 180 g | Riz basmati, cuit, sans sel ajouté |
| riz complet | 180 g | Riz complet, cuit, sans sel ajouté |
| riz cru | 60 g | Riz thaï ou basmati, cru |
| salade | 60 g | Laitue, crue |
| sardines | 80 g | Sardine, à l'huile, appertisée, égouttée |
| sauce tomate | 100 g | Tomate, coulis, appertisé (purée de tomates mi-réduite à 11%) |
| saucisse | 100 g | Chipolata cuite |
| saucisson | 30 g | Saucisson sec |
| saumon | 130 g | Saumon, cuit, sans précision (aliment moyen) |
| saumon fume | 35 g | Saumon fumé |
| seitan | 100 g | Seitan, préemballé |
| semoule | 180 g | Semoule ou graine de couscous, cuite, sans sel ajouté |
| skyr | 150 g | Spécialité laitière riche en protéines, nature |
| soda | 330 g | Cola, sucré |
| soupe | 300 g | Soupe aux légumes variés, préemballée à réchauffer |
| steak | 150 g | Boeuf, steak ou bifteck grillé/poêlé |
| steak hache | 125 g | Boeuf, steak haché, cuit (aliment moyen) |
| steak hache 5 | 125 g | Boeuf, steak haché 5% MG cuit |
| sucre | 5 g | Sucre blanc |
| sushi | 30 g | Sushi ou maki aux produits de la mer |
| tahini | 15 g | Tahin ou purée de sésame |
| tempeh | 100 g | Tempeh |
| the | 250 g | Thé infusé, sans sucres ajoutés |
| thon | 100 g | Thon, au naturel, appertisé, égoutté |
| tofu | 100 g | Tofu nature, préemballé |
| tomate | 120 g | Tomate sans précision, crue (aliment moyen) |
| vin | 125 g | Vin rouge |
| vin blanc | 125 g | Vin blanc sec |
| vinaigrette | 15 g | Sauce vinaigrette à l'huile d'olive (50 à 75% d'huile), préemballée |
| yaourt | 125 g | Yaourt ou lait fermenté, nature |
| yaourt grec | 150 g | Yaourt à la grecque nature |

## Ayurveda

Saisons (ritucharya), constitution (doshas), kichari et jeûne viennent de la tradition ayurvédique (Charaka Samhita, Ashtanga Hridaya). Ce n'est pas une source scientifique : ces conseils ne sont pas validés par des études cliniques et n'ont pas été relus par un praticien. Le questionnaire de 6 questions est une simplification.

Le calendrier des fruits et légumes de saison suit les calendriers publics pour la France métropolitaine (type mangerbouger.fr) ; il a été saisi de mémoire et reste à vérifier.

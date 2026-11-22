#!/usr/bin/env python3
"""Convertit la table Ciqual 2025 (Anses, fichier TSV FR) en ciqual.json compact pour l'app.
Usage : python3 tools/build_ciqual.py CIQUAL2025_FR_2025_11_03.csv ciqual.json
Source : https://ciqual.anses.fr (licence ouverte Etalab)."""
import csv, json, sys

# clé app -> index de colonne Ciqual (valeurs pour 100 g)
COLS = [("kcal",10),("p",14),("c",16),("l",17),("f",26),("su",18),("sat",31),("mono",32),("poly",33),
        ("ala",44),("epa",46),("dha",47),("alc",29),("sel",49),
        ("ca",50),("fe",53),("mg",55),("k",58),("zn",61),("ph",57),("i",54),("se",59),("cu",52),("mn",56),
        ("va",62),("vd",65),("ve",69),("vk",70),("vc",72),("b1",73),("b2",74),("b3",75),("b5",76),("b6",77),("b9",79),("b12",82)]
FALLBACK = {"kcal":12, "p":15, "ve":68, "b9":78}
SKIP_GROUPS = {"aliments infantiles"}

def num(s):
    s = (s or "").strip().replace(",", ".")
    if s in ("", "-"): return None            # valeur manquante
    if s.lower().startswith("traces"): return 0
    if s.startswith("<"): return 0            # sous le seuil de détection
    try: return float(s)
    except ValueError: return None

def r3(v):
    if v is None: return None
    if v == 0: return 0
    out = float(f"{v:.3g}")
    return int(out) if out == int(out) else out

src, dst = sys.argv[1], sys.argv[2]
rows = list(csv.reader(open(src, encoding="utf-8-sig", newline=""), delimiter="\t"))[1:]
groups, foods = [], []
for r in rows:
    g = r[3].strip()
    if not g or g in SKIP_GROUPS: continue
    vals = []
    for key, i in COLS:
        v = num(r[i])
        if v is None and key in FALLBACK: v = num(r[FALLBACK[key]])
        vals.append(r3(v))
    if vals[0] is None: continue              # pas d'énergie : inutilisable
    if g not in groups: groups.append(g)
    foods.append([r[7].strip(), groups.index(g), vals])
foods.sort(key=lambda f: f[0].lower())
with open(dst, "w", encoding="utf-8") as out:
    out.write("[" + json.dumps({"source":"Ciqual 2025 (Anses)", "keys":[k for k,_ in COLS], "groups":groups}, ensure_ascii=False))
    for f in foods: out.write(",\n" + json.dumps(f, ensure_ascii=False, separators=(",",":")))
    out.write("\n]\n")
print(len(foods), "aliments,", len(groups), "groupes")

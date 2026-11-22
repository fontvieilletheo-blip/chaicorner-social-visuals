#!/usr/bin/env python3
"""Assemble l'app : src/app.html + tools/aliases.txt + tools/search.js
   -> index.html (site autonome) et dist/artifact.html (fragment pour l'artefact Claude)."""
import os, re
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd = lambda p: open(os.path.join(root, p), encoding="utf-8").read()
app = rd("src/app.html")
search = re.sub(r"\nif \(typeof module.*\n?", "\n", rd("tools/search.js"))
aliases = rd("tools/aliases.txt").strip()
assert "`" not in aliases and "${" not in aliases
app = app.replace("/*@ALIASES@*/", aliases).replace("/*@SEARCH@*/", search)
os.makedirs(os.path.join(root, "dist"), exist_ok=True)
open(os.path.join(root, "dist/artifact.html"), "w", encoding="utf-8").write(app)
head = ('<!doctype html><html lang="fr"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        '<meta name="theme-color" content="#224147"><meta name="apple-mobile-web-app-capable" content="yes">'
        '<meta name="apple-mobile-web-app-title" content="Agni"><meta name="robots" content="noindex">'
        '<meta name="description" content="Agni, le suivi nutrition de Chaï Corner : diagnostic, repères, journal des repas, micronutrition et lecture ayurvédique.">'
        '<link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icon.svg">'
        '<style>:root{padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>'
        '</head><body>')
open(os.path.join(root, "index.html"), "w", encoding="utf-8").write(head + app + "</body></html>\n")
print("ok", len(app))

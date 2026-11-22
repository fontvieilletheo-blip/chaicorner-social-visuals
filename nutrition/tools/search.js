// Recherche d'aliments dans la table Ciqual — partagé entre l'app (copié dans src/app.html) et les tests.
const STOP = new Set(["de","du","des","la","le","les","d","l","a","au","aux","un","une","avec","en","et","ou","sans","mon","ma","mes","petit","petite","grand","grande","gros","grosse","bio","frais","fraiche","type","tout","pour","sur"]);
const norm = s => (s||"").toLowerCase().replace(/œ/g,"oe").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’']/g," ").replace(/[^a-z0-9% ]/g," ").replace(/\s+/g," ").trim();
const stem = t => t.length>3 ? t.replace(/(es|s|x|e)$/,"") : t;
const toks = s => norm(s).split(" ").filter(t => t && !STOP.has(t)).map(stem);
function indexFoods(foods){ return foods.map((f,i)=>{ const n=norm(f[0]); return {i, name:f[0], g:f[1], t:toks(f[0]), head:toks(f[0].split(",")[0]),
  raw:/\bcrue?s?\b/.test(n), cooked:/\b(cuit|bouilli|grille|roti|poele|vapeur)/.test(n), avg:/aliment moyen/.test(n),
  proc:/\b(sech|sec|seche|poudre|deshydrat|appertis|surgel|sirop|puree|nectar|farine|confit|preemball|enrichi|allege)/.test(n) }; }); }
// Renvoie les meilleures lignes Ciqual pour une requête ; e.full = tous les mots de la requête sont dans le nom.
function searchFoods(IDX, q, limit=8, GROUPS){
  const qt=toks(q); if(!qt.length) return [];
  const nq=norm(q), wantsRaw=/\bcru/.test(nq), wantsProc=/\b(sec|sech|poudre|surgel|sirop|puree|conserve|boite)/.test(nq), out=[];
  for(const e of IDX){
    let m=0, mh=0;
    for(const t of qt){ if(e.t.some(k=>k===t||(t.length>3&&k.startsWith(t)))) m++; if(e.head.some(k=>k===t||(t.length>3&&k.startsWith(t)))) mh++; }
    const full=m===qt.length;
    if(!full && !(qt.length>2 && m>=qt.length-1)) continue;
    let s = m/qt.length*10 + mh/Math.max(1,e.head.length)*6 - e.t.length*0.25;
    if(e.head[0]===qt[0]) s+=3;
    if(e.avg) s+=2.5;
    const produce = GROUPS ? /fruits|l.gumes/.test(GROUPS[e.g]||"") : false;
    if(!wantsRaw && !produce){ if(e.raw) s-=2; if(e.cooked) s+=1; }
    if(wantsRaw && e.raw) s+=2;
    if(e.proc && !wantsProc) s-=1.5;
    out.push([s,e,full]);
  }
  return out.sort((a,b)=>b[0]-a[0]).slice(0,limit).map(x=>Object.assign({full:x[2]},x[1]));
}
if (typeof module!=="undefined") module.exports={norm,toks,indexFoods,searchFoods,STOP};

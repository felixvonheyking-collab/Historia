// Dark History: Bereich ist dunkel, Akten und Geheimbuende oeffnen sich,
// umgezogene Querschnitte und Mysterien sind nur noch dort zu finden,
// alte Sprungziele (#thema=gift) landen am neuen Ort.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView|Not implemented/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",{runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document, W=dom.window;
W.HTMLElement.prototype.scrollIntoView=function(){}; W.scrollTo=function(){};
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
W.localStorage.clear();
W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const pruefe=(bed,text)=>{ if(!bed) fehler.push(text); };
const klick=(el)=>el.dispatchEvent(new W.MouseEvent("click",{bubbles:true}));
const root=()=>d.getElementById("historia-root");
(async()=>{
  await warte(300);
  pruefe(!root().className.includes("dunkel"),"Startseite ist schon dunkel");
  W.eval('SPRINGE("akten",null,null)'); await warte(250);
  pruefe(root().className.includes("dunkel"),"Dark History nicht dunkel");
  const n=W.eval("AKTEN.length");
  const karten=d.querySelectorAll("button[data-anker]");
  pruefe(karten.length===n,"Aktenliste zeigt "+karten.length+" statt "+n);
  klick([...karten].find(b=>b.getAttribute("data-anker")==="jack-the-ripper")); await warte(250);
  const akte=d.querySelector('[data-akte="jack-the-ripper"]');
  pruefe(!!akte,"Akte öffnet nicht");
  if(akte){ ["Zeit und Ort","Die Tat","Die Opfer","Die Ermittlung","Legende und Wirklichkeit","Chronologie","Quellen"].forEach(t=>pruefe(akte.textContent.includes(t),"Abschnitt fehlt: "+t));
    pruefe(!!akte.querySelector("[data-stempel]"),"Kein Stempel"); pruefe(akte.querySelectorAll("img").length>=1,"Akte ohne Bild"); }
  W.eval('SPRINGE("geheimbuende","protokolle-der-weisen-von-zion",null)'); await warte(250);
  const bund=d.querySelector('[data-bund="protokolle-der-weisen-von-zion"]');
  pruefe(bund && bund.textContent.includes("Mythos und Wirklichkeit"),"Geheimbund öffnet nicht");
  // Umzug: Querschnitt "gift" und Mysterium "somerton"
  W.eval('SPRINGE("themen","gift",null)'); await warte(250);
  pruefe(root().className.includes("dunkel") && d.getElementById("app").textContent.includes("Gift & Giftmischerinnen"),"#thema=gift landet nicht in Dark History");
  W.eval('SPRINGE("themen",null,null)'); await warte(250);
  pruefe(!d.getElementById("app").textContent.includes("Gift & Giftmischerinnen"),"Gift steht noch unter den normalen Querschnitten");
  W.eval('SPRINGE("mysterien",null,null)'); await warte(250);
  pruefe(!d.getElementById("app").textContent.includes("Der Mann von Somerton"),"Somerton steht noch unter den normalen Mysterien");
  W.eval('SPRINGE("darkmysterien",null,null)'); await warte(250);
  pruefe(d.getElementById("app").textContent.includes("Der Mann von Somerton"),"Somerton fehlt in den dunklen Mysterien");
  // Rubriken: je Liste alle Dossiers, ein Dossier oeffnet mit Abschnitten
  for(const r of ["spionage","attentate","hexen","piraten","horror"]){
    const ids=W.eval('DOSSIERS.filter(x=>x.rubrik==="'+r+'").map(x=>x.id)');
    pruefe(ids.length>=12,"Rubrik "+r+" hat nur "+ids.length+" Dossiers");
    W.eval('SPRINGE("'+r+'",null,null)'); await warte(250);
    pruefe(root().className.includes("dunkel"),"Rubrik "+r+" nicht dunkel");
    const ks=[...d.querySelectorAll("button[data-anker]")].map(b=>b.getAttribute("data-anker"));
    pruefe(ids.every(i=>ks.includes(i)),"Rubrik "+r+" zeigt nicht alle Dossiers");
    W.eval('SPRINGE("'+r+'","'+ids[0]+'",null)'); await warte(250);
    const ds=d.querySelector('[data-dossier="'+ids[0]+'"]');
    pruefe(!!ds,"Dossier "+ids[0]+" öffnet nicht");
    if(ds){ pruefe(ds.textContent.includes("Quellen"),"Dossier ohne Quellen: "+ids[0]);
      pruefe(ds.querySelectorAll("img").length>=1,"Dossier ohne Bild: "+ids[0]); }
  }
  // Gruselmaerchen: Liste, Regionenfilter, Detail mit Geschichte
  const gn=W.eval("GRUSELMAERCHEN.length"), ga=W.eval('GRUSELMAERCHEN.filter(g=>g.region==="asien").length');
  pruefe(gn>=30,"Zu wenige Gruselmärchen: "+gn);
  W.eval('SPRINGE("grusel",null,null)'); await warte(250);
  pruefe(root().className.includes("dunkel"),"Gruselmärchen nicht dunkel");
  pruefe(d.querySelectorAll("button[data-anker]").length===gn,"Gruselliste unvollständig");
  klick(d.querySelector('[data-region="asien"]')); await warte(150);
  pruefe(d.querySelectorAll("button[data-anker]").length===ga,"Regionenfilter Asien greift nicht");
  klick(d.querySelector('button[data-anker="yuki-onna"]')); await warte(250);
  const gd=d.querySelector('[data-grusel="yuki-onna"]');
  pruefe(gd && gd.querySelector("[data-geschichte]") && gd.querySelector("[data-geschichte]").textContent.length>900,"Gruselmärchen ohne Geschichte");
  pruefe(gd && gd.textContent.includes("Herkunft"),"Gruselmärchen ohne Herkunft-Abschnitt");
  const gk=W.eval('baueKarten().filter(k=>k.id.startsWith("grusel:")).length');
  pruefe(gk>=gn*0.7,"Zu wenige Quizfragen zu Gruselmärchen: "+gk);
  console.log("Akten: "+n+" · Geheimbünde: "+W.eval("GEHEIMBUENDE.length")+" · Dossiers: "+W.eval("DOSSIERS.length")+" · Gruselmärchen: "+W.eval("GRUSELMAERCHEN.length"));
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

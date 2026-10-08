// Dark History wird nachgeladen: Die App startet ohne data-dark.js, zeigt im
// Bereich einen Platzhalter, und sobald die Datei da ist, erscheinen Akten,
// Uebersicht, Suche und Quizfragen. Die Einstiegsseite zeigt alle Kacheln.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView|Not implemented|Could not load script/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",{runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document, W=dom.window;
W.HTMLElement.prototype.scrollIntoView=function(){}; W.scrollTo=function(){};
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
const skripte=[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]);
const pruefe=(b,t)=>{ if(!b) fehler.push(t); };
pruefe(!skripte.includes("data-dark.js"),"index.html lädt data-dark.js noch beim Start");
skripte.forEach(lade);
W.localStorage.clear();
W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const klick=(el)=>el.dispatchEvent(new W.MouseEvent("click",{bubbles:true}));
const app=()=>d.getElementById("app");
(async()=>{
  await warte(300);
  pruefe(app().textContent.length>200,"Startseite ohne Dark History leer");
  pruefe(W.eval("typeof AKTEN")==="undefined","AKTEN schon beim Start geladen");
  const kartenVorher=W.eval("baueKarten().length");
  W.eval('SPRINGE("akten",null,null)'); await warte(200);
  pruefe(!!d.querySelector("[data-dark-laedt]"),"Kein Platzhalter, solange Dark History fehlt");
  pruefe(!!d.querySelector('script[src^="data-dark.js"]'),"App fordert data-dark.js nicht an");
  // Datei "kommt an": Inhalt ausfuehren und das Ereignis des Nachladers ausloesen
  lade("data-dark.js"); W.eval('DARK_STAND++; window.dispatchEvent(new Event("historia-dark"))'); await warte(300);
  pruefe(!d.querySelector("[data-dark-laedt]"),"Platzhalter bleibt nach dem Laden stehen");
  pruefe(d.querySelectorAll("button[data-anker]").length===W.eval("AKTEN.length"),"Aktenliste nach dem Laden unvollständig");
  pruefe(W.eval("baueKarten().length")>kartenVorher,"Quiz bekommt nach dem Laden keine Dark-History-Karten");
  pruefe(W.eval('sucheIndex().some(e=>e.reiter==="akten")'),"Suche kennt nach dem Laden keine Akten");
  // Einstiegsseite
  W.eval('SPRINGE("darkstart",null,null)'); await warte(200);
  const kacheln=d.querySelectorAll("[data-kachel]");
  pruefe(kacheln.length===W.eval("DARK_KACHELN.length"),"Übersicht zeigt "+kacheln.length+" Kacheln");
  pruefe([...kacheln].every(k=>/\d/.test(k.textContent)),"Kachel ohne Anzahl");
  klick(d.querySelector('[data-kachel="grusel"]')); await warte(200);
  pruefe(!!d.querySelector("[data-gruseltab]"),"Kachel Gruselmärchen führt nicht dorthin");
  W.eval('SPRINGE("darkstart",null,null)'); await warte(200);
  klick(d.querySelector("[data-zufall]")); await warte(250);
  pruefe(!!d.querySelector("[data-akte],[data-dossier],[data-bund],[data-grusel]"),"Zufälliger Fall öffnet nichts");
  pruefe(app().textContent.includes("Zurück zu Übersicht"),"Vom Zufallsfall kein Weg zurück zur Übersicht");
  console.log("Kacheln: "+kacheln.length+" · Karten vorher/nachher: "+kartenVorher+"/"+W.eval("baueKarten().length"));
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

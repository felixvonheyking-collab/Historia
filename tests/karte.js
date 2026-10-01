// Karte: alle Orte als Punkte vorhanden, und der Weg
// Schlacht -> "Auf der Karte zeigen" -> "Zum Eintrag" -> "Zurueck zu Karte"
// landet jedes Mal am richtigen Ort mit der richtigen Auswahl.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
  {runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document, W=dom.window;
W.HTMLElement.prototype.scrollIntoView=function(){};
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
W.localStorage.clear();
W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const knopf=(t)=>[...d.querySelectorAll("button")].find(b=>b.textContent.trim()===t);
const knopfMit=(t)=>[...d.querySelectorAll("button")].find(b=>b.textContent.includes(t));
const pruefe=(bed,text)=>{ if(!bed) fehler.push(text); };

(async()=>{
  await warte(300);
  // 1. Alle Orte als Punkte
  knopf("Zeit & Raum").click(); await warte(150);
  knopf("Karte").click(); await warte(250);
  const n=W.eval("KARTE.orte.length");
  pruefe(d.querySelectorAll("[data-ort]").length===n, "Punkte: "+d.querySelectorAll("[data-ort]").length+" statt "+n);

  // 2. Von der Schlacht auf die Karte
  knopf("Momente").click(); await warte(150);
  knopf("Schlachten").click(); await warte(250);
  const karte=[...d.querySelectorAll("button[aria-expanded]")].find(b=>b.textContent.includes("Schlacht bei Waterloo"));
  pruefe(!!karte,"Waterloo-Karte fehlt"); if(karte){ karte.click(); await warte(150); }
  const auf=knopf("Auf der Karte zeigen"); pruefe(!!auf,"Knopf 'Auf der Karte zeigen' fehlt");
  if(auf){ auf.click(); await warte(300); }
  const auswahl=()=>{ const a=d.querySelector("[data-auswahl]"); return a?a.textContent:""; };
  pruefe(auswahl().includes("Schlacht bei Waterloo"),"Nach dem Sprung ist Waterloo nicht gewaehlt");

  // 3. Zum Eintrag und zurueck
  const zum=knopfMit("Zum Eintrag"); pruefe(!!zum,"'Zum Eintrag' fehlt");
  if(zum){ zum.click(); await warte(300); }
  pruefe(!!d.querySelector('[data-anker="schlacht-bei-waterloo"]'),"Nicht in den Schlachten gelandet");
  const zur=knopfMit("Zurück zu Karte"); pruefe(!!zur,"Kein Rueckweg zur Karte");
  if(zur){ zur.click(); await warte(300); }
  pruefe(auswahl().includes("Schlacht bei Waterloo"),"Nach dem Rueckweg ist die Auswahl weg");

  // 4. Mysterium und Stadt haben ebenfalls den Knopf
  knopf("Mythen & Rätsel").click(); await warte(150); knopf("Mysterien").click(); await warte(200);
  const nazca=knopfMit("Die Nazca-Linien"); if(nazca){ nazca.click(); await warte(200); }
  pruefe(!!knopf("Auf der Karte zeigen"),"Mysterium Nazca ohne Kartenknopf");

  console.log("Punkte: "+d.querySelectorAll("[data-ort]").length);
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

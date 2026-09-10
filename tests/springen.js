// Prueft das reparierte Verhalten: Scroll beim Wechsel und Sprungziele.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView/.test(e.message)) fehler.push(e.message); });
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
  {runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document, W=dom.window;
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
["vendor/react.production.min.js","vendor/react-dom.production.min.js"].forEach(f=>{ if(fs.existsSync(path.join(dir,f))) lade(f); });
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
// jsdom kennt scrollIntoView nicht - hier mitschreiben, statt zu meckern.
const gerollt=[];
W.Element.prototype.scrollIntoView=function(){ gerollt.push(this.getAttribute("data-anker")); };
let obenGescrollt=0;
W.scrollTo=(x,y)=>{ if(y===0) obenGescrollt++; };
W.localStorage.clear();
const root=W.ReactDOM.createRoot(d.getElementById("app"));
root.render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const kn=()=>[...d.querySelectorAll("button")];
const nach=(t)=>kn().find(b=>b.textContent.trim()===t);
(async()=>{
  await warte(300);
  // 1) Bereichswechsel scrollt nach oben
  nach("Momente").click(); await warte(200);
  const vor=obenGescrollt;
  nach("Mythen & Rätsel").click(); await warte(250);
  if(obenGescrollt<=vor) fehler.push("Bereichswechsel scrollt nicht nach oben");
  const vor2=obenGescrollt;
  nach("Verblüffende Fakten").click(); await warte(250);
  if(obenGescrollt<=vor2) fehler.push("Unterreiterwechsel scrollt nicht nach oben");
  // 2) Sprung aus der Suche in die fuenf Sammlungen
  const proben=[["schluessel","Momente","Schlüsselmomente"],["schlachten","Momente","Schlachten"],
                ["zitate","Momente","Zitate"],["mythen","Mythen & Rätsel","Mythen & Fun Facts"],
                ["verblueffend","Mythen & Rätsel","Verblüffende Fakten"]];
  const idx=W.eval("sucheIndex()");
  for(const [reiter,bereich,unter] of proben){
    const e=idx.find(x=>x.reiter===reiter && x.ziel);
    if(!e){ fehler.push("Kein Suchtreffer mit Ziel für "+reiter); continue; }
    gerollt.length=0;
    W.eval("SPRINGE")(reiter, e.ziel);
    await warte(400);
    const gefunden=d.querySelector('[data-anker="'+e.ziel.replace(/"/g,'\\"')+'"]');
    if(!gefunden) fehler.push("Anker fehlt in "+reiter+": "+e.ziel);
    else if(!gerollt.includes(e.ziel)) fehler.push("Kein Rollen zum Ziel in "+reiter);
    else if(gefunden.getAttribute("data-hervor")!=="1") fehler.push("Keine Hervorhebung in "+reiter);
  }
  console.log("nach oben gescrollt: "+obenGescrollt+" mal");
  console.log("Fehler: "+fehler.length);
  fehler.forEach(f=>console.log("  · "+f));
})();

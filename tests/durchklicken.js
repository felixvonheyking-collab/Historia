// Zweiter Durchgang: Zurück-Knöpfe erkennen nach Pfeil-Symbol statt Text,
// dazu Zustandsprüfung nach dem Zurückgehen.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[]; const notiz=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
  {runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document;
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
["vendor/react.production.min.js","vendor/react-dom.production.min.js"].forEach(f=>{ if(fs.existsSync(path.join(dir,f))) lade(f); });
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
const W=dom.window, R=W.React;
W.localStorage.clear();
const root=W.ReactDOM.createRoot(d.getElementById("app"));
root.render(R.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const knoepfe=()=>[...d.querySelectorAll("button")];
const nachText=(t)=>knoepfe().find(b=>b.textContent.trim()===t);
const zurueckKnopf=()=>knoepfe().find(x=>x.querySelector("svg")&&/^(Zurück|Alle |\s*Zurück)/.test(x.textContent.trim()));
const B=W.eval("BEREICHE.map(b=>({label:b.label,unter:b.unter.map(u=>u.label)}))");

(async()=>{
  await warte(300);
  for(const b of B){
    const bk=nachText(b.label); if(!bk){ fehler.push('Bereichsknopf fehlt: '+b.label+' | Knöpfe: '+knoepfe().slice(0,6).map(x=>x.textContent.trim().slice(0,14)).join('/')+' | Textlänge: '+d.body.textContent.length); continue; } bk.click(); await warte(200);
    for(const u of (b.unter.length?b.unter:[null])){
      if(u){ const uk=nachText(u); if(!uk){ fehler.push('Unterreiter fehlt: '+b.label+' / '+u); continue; } uk.click(); await warte(220); }
      const wo=b.label+(u?" / "+u:"");
      const karten=knoepfe().filter(x=>x.textContent.trim().length>40);
      notiz.push(wo.padEnd(34)+" Karten: "+String(karten.length).padStart(4)+
                 " | Suchfeld: "+(d.querySelector("input[placeholder]")?"ja":"nein")+
                 " | Filterknöpfe: "+knoepfe().filter(x=>x.textContent.trim().length<22&&x.textContent.trim().length>1).length);
      if(karten.length){
        karten[0].click(); await warte(240);
        const z=zurueckKnopf();
        const klappt=karten[0].getAttribute("aria-expanded")!==null;
        if(!z && !klappt) fehler.push("Kein Zurück-Knopf und kein Aufklappen in: "+wo);
        else if (z) { z.click(); await warte(200);
          if(!knoepfe().filter(x=>x.textContent.trim().length>40).length) fehler.push("Nach Zurück keine Liste: "+wo); }
      }
    }
  }
  console.log(notiz.join("\n"));
  console.log("\nFehler: "+fehler.length);
  fehler.forEach(f=>console.log("  · "+f));
})();

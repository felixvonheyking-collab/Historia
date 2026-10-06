// Quiz: Runde starten, jede Frage beantworten, Erklaerung bleibt stehen bis
// "Weiter", am Ende ein Ergebnis mit Fehlerliste, "Fehler wiederholen" baut
// eine Runde aus genau diesen Fragen. Dazu Datenpruefungen: Kein Hinweis
// verraet die gesuchte Jahreszahl, jede Personenfrage verschweigt den Namen.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView|Not implemented/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
  {runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document, W=dom.window;
W.HTMLElement.prototype.scrollIntoView=function(){}; W.scrollTo=function(){};
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
W.localStorage.clear();
W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const pruefe=(bed,text)=>{ if(!bed) fehler.push(text); };
const klick=(el)=>el.dispatchEvent(new W.MouseEvent("click",{bubbles:true}));

(async()=>{
  await warte(300);
  // --- Daten ---
  const karten=W.eval("baueKarten()");
  const jahr=karten.filter(k=>k.art==="Jahreszahl");
  const verraten=jahr.filter(k=>k.hinweis && Math.abs(k.jahr)>=100 && new RegExp("(?<![\\d.,])"+Math.abs(k.jahr)+"(?![\\d])").test(k.hinweis));
  pruefe(verraten.length===0,"Hinweis verrät die Jahreszahl: "+verraten.slice(0,3).map(k=>k.frage).join("; "));
  const imTitel=jahr.filter(k=>new RegExp("(?<![\\d.,])"+Math.abs(k.jahr)+"(?![\\d])").test(k.frage));
  pruefe(imTitel.length===0,"Frage nennt ihr eigenes Jahr: "+imTitel.slice(0,3).map(k=>k.frage).join("; "));
  pruefe(jahr.filter(k=>!k.hinweis).length<jahr.length*0.02,"Zu viele Jahreszahl-Fragen ohne Hinweis: "+jahr.filter(k=>!k.hinweis).length);
  const personen=karten.filter(k=>k.art==="Person");
  pruefe(personen.length>150,"Zu wenige Personenfragen: "+personen.length);
  const nameDrin=personen.filter(k=>k.richtig.split(/[\s,]+/).filter(w=>w.length>3).some(w=>k.frage.includes(w)));
  pruefe(nameDrin.length===0,"Name steht in der Personenfrage: "+nameDrin.slice(0,3).map(k=>k.richtig).join(", "));
  const wo=karten.filter(k=>k.art==="Wo");
  pruefe(wo.length===W.eval("KARTE.orte.length"),"Nicht jeder Kartenort ist eine Wo-Frage");
  for(let i=0;i<30;i++){ const o=W.eval("woOptionen(KARTE.orte["+(i*5)+"])"); pruefe(o.length===4,"Wo-Frage ohne vier Optionen"); }
  for(let i=0;i<30;i++){ const r=W.eval("reihenfolgeAus(baueKarten())"); pruefe(r && new Set(r.map(e=>e.jahr)).size===4,"Reihenfolge nicht eindeutig"); }

  // --- Bedienung ---
  W.eval('SPRINGE("lernen",null,null)'); await warte(250);
  const start=d.querySelector("[data-rundenstart]"); pruefe(!!start,"Kein Startknopf");
  if(start){ klick(start); await warte(200); }
  let fragen=0, karteifragen=0, typen=new Set();
  for(let q=0;q<25 && d.querySelector("[data-quizfrage]");q++){
    const box=d.querySelector("[data-quizfrage]"); const typ=box.getAttribute("data-quizfrage"); typen.add(typ); if(typ!=="Reihenfolge") karteifragen++;
    if(typ==="Reihenfolge"){ for(let i=0;i<4;i++){ const b=[...box.querySelectorAll("button")].find(x=>!x.disabled && /^\s*·/.test(x.textContent)); if(b){ klick(b); await warte(40);} } }
    else { const b=[...box.querySelectorAll("button")].find(x=>!x.disabled); klick(b); }
    await warte(1700);   // frueher sprang die App nach 1,4 s weiter
    pruefe(!!d.querySelector("[data-aufloesung]"),"Auflösung fehlt oder verschwindet ("+typ+")");
    const w=d.querySelector("[data-weiter]"); pruefe(!!w,"Kein Weiter-Knopf"); if(!w) break;
    klick(w); await warte(120); fragen++;
  }
  pruefe(fragen===10,"Runde hatte "+fragen+" statt 10 Fragen");
  pruefe(typen.size>=3,"Gemischte Runde zu einseitig: "+[...typen].join(","));
  const erg=d.querySelector("[data-ergebnis]"); pruefe(!!erg,"Kein Ergebnis am Ende");
  const stand=JSON.parse(W.localStorage.getItem("historia.lernen.stand")||"{}");
  // Reihenfolge-Fragen werden bewusst nicht im Karteikasten gespeichert
  pruefe(Object.keys(stand).length>=karteifragen,"Lernstand nicht gespeichert ("+Object.keys(stand).length+" statt "+karteifragen+")");
  const fw=[...d.querySelectorAll("button")].find(b=>b.textContent.includes("Fehler wiederholen"));
  if(fw){ const n=+fw.textContent.match(/\((\d+)\)/)[1]; klick(fw); await warte(200);
    pruefe((d.querySelector("[data-fortschritt]")||{}).textContent==="Frage 1 von "+n,"Fehlerrunde hat falsche Länge"); }

  console.log("Fragen: "+fragen+" · Typen: "+[...typen].join(", ")+" · Karten: "+karten.length);
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

// Kriege und Neu-Markierung: Startseite zeigt die Neuerungen, Schlacht und
// Krieg verweisen aufeinander, "als gelesen markieren" nimmt das "neu" weg -
// je Krieg, je Station und fuer einen ganzen Querschnitt.
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
const knopfMit=(t,wurzel)=>[...(wurzel||d).querySelectorAll("button")].find(b=>b.textContent.includes(t));
const pruefe=(bed,text)=>{ if(!bed) fehler.push(text); };
const gelesen=()=>JSON.parse(W.localStorage.getItem("historia.neu.gelesen")||"[]");

(async()=>{
  await warte(300);
  // 1. Startseite
  const n=W.eval("alleNeuerungen().length");
  const kasten=d.querySelector("[data-neukasten]");
  pruefe(kasten && kasten.textContent.includes(n+" Neuerungen"), "Startseite zeigt die Neuerungen nicht ("+n+")");

  // 2. Schlacht -> Krieg
  knopf("Momente").click(); await warte(150); knopf("Schlachten").click(); await warte(250);
  const wat=[...d.querySelectorAll("button[aria-expanded]")].find(b=>b.textContent.includes("Schlacht bei Waterloo"));
  wat.click(); await warte(150);
  const zumKrieg=knopfMit("Krieg: "); pruefe(!!zumKrieg,"Schlacht ohne Kriegsverweis");
  if(zumKrieg){ zumKrieg.click(); await warte(350); }
  const offen=[...d.querySelectorAll("[data-anker]")].find(e=>e.querySelector("button[aria-expanded='true']"));
  pruefe(offen && offen.textContent.includes("Waterloo"),"Krieg nicht geöffnet oder ohne Waterloo");

  // 3. Krieg als gelesen markieren
  if(offen){
    const id=offen.getAttribute("data-anker");
    pruefe(!!offen.querySelector("[data-neu]"),"Krieg trägt kein 'neu'");
    const g=knopfMit("Als gelesen markieren",offen); if(g){ g.click(); await warte(200); }
    const nachher=d.querySelector('[data-anker="'+id+'"]');
    pruefe(!nachher.querySelector("[data-neu]"),"'neu' bleibt nach dem Markieren");
    pruefe(gelesen().includes("krieg:"+id),"Gelesen-Schlüssel nicht gespeichert");
  }

  // 4. Querschnitt als Ganzes
  knopf("Vertiefungen").click(); await warte(150); knopf("Querschnitte").click(); await warte(250);
  const kat=[...d.querySelectorAll("button")].find(b=>b.textContent.includes("Katastrophen"));
  pruefe(kat && kat.querySelector("[data-neu]"),"Katastrophen-Karte ohne 'neu'");
  if(kat){ kat.click(); await warte(250); }
  pruefe(d.querySelectorAll("[data-neu]").length>10,"Stationen ohne 'neu'");
  const alle=knopfMit("alles als gelesen markieren"); if(alle){ alle.click(); await warte(250); }
  pruefe(d.querySelectorAll("[data-neu]").length===0,"Nach 'alles gelesen' noch "+d.querySelectorAll("[data-neu]").length+" Marken");

  console.log("Neuerungen: "+n+" · gelesen gespeichert: "+gelesen().length);
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

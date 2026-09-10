// Prueft, dass die Grafiken tatsaechlich als SVG-Elemente im Baum landen.
const fs=require("fs"), path=require("path"), {JSDOM}=require("jsdom");
const dir=process.cwd();
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
  {runScripts:"dangerously", url:"https://x.test/"});
const d=dom.window.document;
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
["vendor/react.production.min.js","vendor/react-dom.production.min.js"].forEach(f=>{if(fs.existsSync(path.join(dir,f))) lade(f);});
const html=fs.readFileSync(path.join(dir,"index.html"),"utf8");
[...html.matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
const W=dom.window, R=W.React;
const root=W.ReactDOM.createRoot(d.getElementById("app"));
// const im klassischen Skript landet nicht auf window, ist aber im
// globalen lexikalischen Bereich - deshalb ueber eval im Fenster.
const ids=W.eval("Object.keys(GRAFIKEN)");
let i=0, fehler=[];
function naechste(){
  if(i>=ids.length){
    if(fehler.length){ console.error("FEHLER:\n"+fehler.join("\n")); process.exit(1); }
    console.log("Alle "+ids.length+" Grafiken gerendert, SVG-Elemente vorhanden."); return;
  }
  const id=ids[i++];
  const eintrag=W.eval("VERTIEFUNGEN.find(v=>v.id==='"+id+"')");
  root.render(R.createElement(W.eval("VertiefungDetail"),{eintrag, onBack:()=>{}, gelesen:false, toggleGelesen:()=>{}}));
  setTimeout(()=>{
    const svgs=[...d.querySelectorAll("svg")];
    const gross=svgs.filter(s=>s.querySelectorAll("*").length>5);
    if(!gross.length) fehler.push(id+": kein SVG mit Inhalt");
    else {
      const g=gross[gross.length-1];
      if(!g.getAttribute("viewBox")) fehler.push(id+": viewBox fehlt");
      if(!g.getAttribute("aria-label")) fehler.push(id+": aria-label fehlt");
      const t=d.body.textContent;
      if(!t.includes("Grundlage:")) fehler.push(id+": Quellenangabe der Grafik fehlt");
    }
    naechste();
  },60);
}
naechste();

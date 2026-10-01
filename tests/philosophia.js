// Bruecke zu Philosophia: Denker-Kasten in Vertiefung, Krieg und Querschnitt,
// Links mit #denker=, und Sprung per Adresse (#krieg=..., #vertiefung=...).
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const pruefe=(bed,text)=>{ if(!bed) fehler.push(text); };
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
async function starte(hash){
  const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
    {runScripts:"dangerously", url:"https://x.test/"+(hash||""), virtualConsole:vc});
  const d=dom.window.document, W=dom.window;
  W.HTMLElement.prototype.scrollIntoView=function(){};
  [...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(f=>{
    const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);});
  W.localStorage.clear();
  W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
  await warte(400); return {d,W};
}
(async()=>{
  const {W}=await starte("");
  const V=W.eval("VERKNUEPFUNGEN");
  const ziele={vertiefung:V.find(v=>v.art==="vertiefung"),krieg:V.find(v=>v.art==="krieg"),thema:V.find(v=>v.art==="thema")};
  for(const [art,v] of Object.entries(ziele)){
    const {d}=await starte("#"+art+"="+v.id); await warte(300);
    const k=d.querySelector("[data-denker]");
    pruefe(!!k,"Sprung #"+art+"="+v.id+" zeigt keinen Denker-Kasten");
    if(k){ const a=[...k.querySelectorAll("a")].find(x=>x.getAttribute("href").endsWith("#denker="+v.philosoph));
      pruefe(!!a,"Link zu "+v.philosoph+" fehlt in "+art+":"+v.id); }
  }
  console.log("Geprüft: Sprung und Denker-Kasten für Vertiefung, Krieg, Querschnitt");
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

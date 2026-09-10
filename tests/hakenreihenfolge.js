const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd();
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView/.test(e.message)) console.log("!! "+e.message.split("\n")[0]); });
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",{runScripts:"dangerously",url:"https://x.test/",virtualConsole:vc});
const d=dom.window.document, W=dom.window;
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
["vendor/react.production.min.js","vendor/react-dom.production.min.js"].forEach(f=>{if(fs.existsSync(path.join(dir,f)))lade(f);});
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).forEach(lade);
W.Element.prototype.scrollIntoView=function(){};
W.localStorage.clear();
W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const kn=()=>[...d.querySelectorAll("#app button")];
const nach=(t)=>kn().find(b=>b.textContent.trim()===t);
const leer=()=>d.getElementById("app").textContent.length<200;
(async()=>{
  await warte(300);
  const B=W.eval("BEREICHE.map(b=>({label:b.label,unter:b.unter.map(u=>u.label)}))");
  for(const b of B){
    const k=nach(b.label); if(!k){ console.log("ABBRUCH bei Bereich "+b.label+", App leer: "+leer()); break; }
    k.click(); await warte(200);
    for(const u of (b.unter.length?b.unter:[null])){
      if(u){ const uk=nach(u); if(!uk){ console.log("ABBRUCH bei "+b.label+"/"+u); break; } uk.click(); await warte(220); }
      const karten=kn().filter(x=>x.textContent.trim().length>40);
      if(karten.length){ karten[0].click(); await warte(300);
        if(leer()){ console.log("APP LEER nach Klick in "+b.label+(u?"/"+u:"")+" auf: "+karten[0].textContent.trim().slice(0,50)); return; }
        const z=kn().find(x=>x.querySelector("svg")&&/^Zurück/.test(x.textContent.trim()));
        if(z){ z.click(); await warte(200); }
      }
    }
  }
  console.log("durchgelaufen, App leer:", leer());
})();

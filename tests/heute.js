// Startseite: Kachel "Heute" ist da, startet eine Runde mit 5 Fragen,
// danach zaehlt die Lernserie; "Heute vor ..." nennt nur runde Abstaende.
const fs=require("fs"), path=require("path"), {JSDOM,VirtualConsole}=require("jsdom");
const dir=process.cwd(); const fehler=[];
const vc=new VirtualConsole().on("jsdomError",e=>{ if(!/scrollTo|scrollIntoView|Not implemented/.test(e.message)) fehler.push("jsdomError: "+e.message); })
  .on("error",(...a)=>fehler.push("console.error: "+a.join(" ")));
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",{runScripts:"dangerously", url:"https://x.test/", virtualConsole:vc});
const d=dom.window.document, W=dom.window;
W.HTMLElement.prototype.scrollIntoView=function(){}; W.scrollTo=function(){};
const lade=(f)=>{const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);};
[...fs.readFileSync(path.join(dir,"index.html"),"utf8").matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]).flatMap(f=>f==="app.js"?["data-dark.js",f]:[f]).forEach(lade);
W.localStorage.clear();
W.ReactDOM.createRoot(d.getElementById("app")).render(W.React.createElement(W.Historia));
const warte=(ms)=>new Promise(r=>setTimeout(r,ms));
const pruefe=(bed,text)=>{ if(!bed) fehler.push(text); };
const klick=(el)=>el.dispatchEvent(new W.MouseEvent("click",{bubbles:true}));
(async()=>{
  await warte(400);
  pruefe(!!d.querySelector("[data-heute]"),"Keine Heute-Kachel");
  const jahr=new Date().getFullYear(), runde=W.eval("JAHRESTAGE");
  d.querySelectorAll("[data-jubilaeum]").forEach(b=>{ const m=b.textContent.match(/([\d.]+) Jahren/); pruefe(m && runde.includes(+m[1].replace(/\./g,"")),"Kein runder Abstand: "+b.textContent); });
  klick(d.querySelector("[data-heute-runde]")); await warte(300);
  pruefe(((d.querySelector("[data-fortschritt]")||{}).textContent||"")==="Frage 1 von 5","Heute-Runde startet nicht mit 5 Fragen");
  const box=d.querySelector("[data-quizfrage]");
  if(box){ if(box.getAttribute("data-quizfrage")==="Reihenfolge"){ for(let i=0;i<4;i++){ const b=[...box.querySelectorAll("button")].find(x=>!x.disabled&&/^\s*·/.test(x.textContent)); if(b){klick(b);await warte(30);} } } else klick([...box.querySelectorAll("button")].find(x=>!x.disabled)); }
  await warte(200);
  const tage=JSON.parse(W.localStorage.getItem("historia.lernen.tage")||"[]");
  pruefe(tage.includes(W.eval("heuteTag()")),"Lerntag nicht gespeichert");
  pruefe(W.eval("lernserie([heuteTag()-2,heuteTag()-1,heuteTag()],heuteTag())")===3,"Lernserie falsch gezählt");
  pruefe(W.eval("lernserie([heuteTag()-2,heuteTag()-1],heuteTag())")===2,"Serie von gestern zählt nicht");
  console.log("Jubiläen: "+d.querySelectorAll("[data-jubilaeum]").length);
  console.log("Fehler: "+fehler.length); fehler.forEach(f=>console.log("  · "+f));
  process.exit(fehler.length?1:0);
})();

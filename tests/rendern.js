const fs=require("fs"), path=require("path"), {JSDOM}=require("jsdom");
const dir=process.cwd();
const dom=new JSDOM("<!doctype html><html><body><div id='app'></div></body></html>",
  {runScripts:"dangerously", url:"https://x.test/"});
const d=dom.window.document;
function lade(f){const s=d.createElement("script"); s.textContent=fs.readFileSync(path.join(dir,f),"utf8"); d.body.appendChild(s);}
["vendor/react.production.min.js","vendor/react-dom.production.min.js"].forEach(f=>{
  if(fs.existsSync(path.join(dir,f))) lade(f);
});
const html=fs.readFileSync(path.join(dir,"index.html"),"utf8");
const skripte=[...html.matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]);
skripte.forEach(lade);
const W=dom.window;
if(!W.Historia) throw new Error("Historia fehlt");
const tabs=[];
W.localStorage.clear();
const root=W.ReactDOM.createRoot(d.getElementById("app"));
W.ReactDOM.flushSync?0:0;
const R=W.React;
function render(){ root.render(R.createElement(W.Historia)); }
render();
setTimeout(()=>{
  const btns=[...d.querySelectorAll("button")].length;
  console.log("gerendert, Buttons:", btns);
  const txt=d.body.textContent;
  if(txt.length<200) throw new Error("kaum Inhalt");
  console.log("OK, Textlaenge", txt.length);
},300);

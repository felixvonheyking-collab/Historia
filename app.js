const { useState, useMemo, useEffect } = React;
function Icon({ size = 16, className = "", children }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className
    },
    children
  );
}
const Clock = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 6v6l4 2" }));
const Users = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "8", r: "3.2" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 21c0-4.2 2.9-6.5 6.5-6.5s6.5 2.3 6.5 6.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "17.5", cy: "9.5", r: "2.6" }), /* @__PURE__ */ React.createElement("path", { d: "M22.5 21c0-3.2-2-5.3-5-5.3" }));
const Crown = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 18h18l-1.6-8.5-4.4 4-3-7.5-3 7.5-4.4-4L3 18z" }), /* @__PURE__ */ React.createElement("path", { d: "M3 21h18" }));
const BookOpen = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M2 5.5c2.8-2 6.6-2 9.5 0v14c-2.9-2-6.7-2-9.5 0v-14z" }), /* @__PURE__ */ React.createElement("path", { d: "M22 5.5c-2.8-2-6.6-2-9.5 0v14c2.9-2 6.7-2 9.5 0v-14z" }));
const Sparkles = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 2.5l1.8 5.7 5.7 1.8-5.7 1.8L12 17.5l-1.8-5.7-5.7-1.8 5.7-1.8L12 2.5z" }));
const Zap = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M13 2 3 14h7l-1 8 10-12h-7l1-8z" }));
const Globe = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M2 12h20" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2c2.8 2.8 4.2 6.3 4.2 10S14.8 19.2 12 22c-2.8-2.8-4.2-6.3-4.2-10S9.2 4.8 12 2z" }));
const ChevronRight = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 18l6-6-6-6" }));
const HelpCircle = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M9.2 9a3 3 0 1 1 4.4 3c-.9.6-1.6 1.1-1.6 2.2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17.5h.01" }));
const Search = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7.5" }), /* @__PURE__ */ React.createElement("path", { d: "M21 21l-4.4-4.4" }));
const Check = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M20 6L9 17l-5-5" }));
const RotateCcw = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3.5 9a8.5 8.5 0 1 1 1.8 9.2" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 4v5h5" }));
const ArrowLeft = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M19 12H5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 19l-7-7 7-7" }));
const FACTS = EPOCHS.flatMap(
  (ep) => ep.events.map((e) => ({ year: e.year, title: e.title, epoch: ep.name, color: ep.color }))
);


/* =========================================================
   SPEICHER

   Historia hat bisher nichts gespeichert: Quizfortschritt und
   Lesestand gingen bei jedem Neuladen verloren. Alles liegt im
   localStorage dieses Browsers, unter dem Präfix "historia.".
   ========================================================= */

const SPEICHER_PRAEFIX = "historia.";

function speicherLesen(schluessel, ersatz) {
  try {
    const roh = localStorage.getItem(SPEICHER_PRAEFIX + schluessel);
    if (roh === null) return ersatz;
    const wert = JSON.parse(roh);
    // Form prüfen: beschädigte Daten dürfen die App nicht umwerfen
    if (Array.isArray(ersatz) && !Array.isArray(wert)) return ersatz;
    if (ersatz && typeof ersatz === "object" && !Array.isArray(ersatz) && (typeof wert !== "object" || wert === null || Array.isArray(wert))) return ersatz;
    return wert;
  } catch (e) {
    return ersatz;
  }
}

function speicherSchreiben(schluessel, wert) {
  try {
    localStorage.setItem(SPEICHER_PRAEFIX + schluessel, JSON.stringify(wert));
    return true;
  } catch (e) {
    return false;
  }
}

// Zustand, der zwischen Sitzungen erhalten bleibt
function useGespeichert(schluessel, anfangswert) {
  const [wert, setWert] = useState(() => speicherLesen(schluessel, anfangswert));
  const setzen = (neu) => {
    const ergebnis = typeof neu === "function" ? neu(wert) : neu;
    setWert(ergebnis);
    speicherSchreiben(schluessel, ergebnis);
  };
  return [wert, setzen];
}

/* =========================================================
   VERTIEFUNGEN
   ========================================================= */

const Layers = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 2.5 8 12 13l9.5-5L12 3z" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 16 12 21l9.5-5" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 12 12 17l9.5-5" }));

function VertiefungAbschnitt({ titel, text }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mb-5" },
    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, titel),
    /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, text)
  );
}

function VertiefungDetail({ eintrag, onBack, gelesen, toggleGelesen }) {
  const epoche = EPOCHS.find((e) => e.id === eintrag.epoche);
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("button", {
      onClick: onBack,
      className: "flex items-center gap-1.5 text-[#c9a877] hover:text-[#f0d878] mb-4 text-sm"
    }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu allen Vertiefungen"),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" },
      /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, eintrag.zeitraum),
      epoche && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, epoche.name),
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, eintrag.region)
    ),
    /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-2xl md:text-3xl text-[#f0d878] mb-3" }, eintrag.titel),
    /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] italic leading-relaxed border-l-2 border-[#d4af37] pl-4 mb-6" }, eintrag.leitsatz),

    eintrag.zahlen && eintrag.zahlen.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2 mb-6" },
      eintrag.zahlen.map((z, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2" },
        /* @__PURE__ */ React.createElement("div", { className: "font-mono text-sm text-[#f0d878]" }, z.wert),
        /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#b8905a] leading-snug" }, z.was)
      ))
    ),

    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Vorgeschichte", text: eintrag.vorgeschichte }),
    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Verlauf", text: eintrag.verlauf }),
    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Folgen", text: eintrag.folgen }),

    /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, "Was strittig ist"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, eintrag.strittig)
    ),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#b8905a] leading-relaxed" },
        eintrag.quellen.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", q))
      )
    ),

    /* @__PURE__ */ React.createElement("button", {
      onClick: () => toggleGelesen(eintrag.id),
      className: `mt-5 flex items-center gap-2 px-3 py-2 rounded text-sm border ${gelesen ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]"}`
    }, /* @__PURE__ */ React.createElement(Check, { size: 15 }), gelesen ? "Gelesen" : "Als gelesen merken")
  );
}

function VertiefungenTab({ ziel }) {
  const [offen, setOffen] = useState(null);
  React.useEffect(() => { if (ziel) setOffen(ziel); }, [ziel]);
  const [epochenFilter, setEpochenFilter] = useState("Alle");
  const [suche, setSuche] = useState("");
  const [gelesen, setGelesen] = useGespeichert("vertiefungen.gelesen", []);

  const toggleGelesen = (id) => setGelesen((bisher) => bisher.includes(id) ? bisher.filter((x) => x !== id) : [...bisher, id]);

  if (offen) {
    const eintrag = VERTIEFUNGEN.find((v) => v.id === offen);
    if (eintrag) {
      return /* @__PURE__ */ React.createElement(VertiefungDetail, {
        eintrag,
        onBack: () => setOffen(null),
        gelesen: gelesen.includes(eintrag.id),
        toggleGelesen
      });
    }
  }

  const q = suche.trim().toLowerCase();
  const gefiltert = VERTIEFUNGEN.filter((v) => {
    const passtEpoche = epochenFilter === "Alle" || v.epoche === epochenFilter;
    const passtSuche = !q || (v.titel + " " + v.leitsatz + " " + v.region + " " + v.zeitraum).toLowerCase().includes(q);
    return passtEpoche && passtSuche;
  });

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      VERTIEFUNGEN.length, " ausführliche Darstellungen großer Wendepunkte — mit Vorgeschichte, Verlauf, Folgen und dem, was die Forschung offen lässt."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-4 max-w-2xl" },
      "Jeder Artikel nennt seine Quellen. Wo Zahlen Schätzungen sind, steht das dabei."),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-1.5 max-w-md" },
      /* @__PURE__ */ React.createElement(Search, { size: 15, className: "text-[#8a6238]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: suche,
        onChange: (e) => setSuche(e.target.value),
        placeholder: "Suchen …",
        className: "bg-transparent text-sm text-[#e8d5b0] placeholder-[#8a6238] focus:outline-none flex-1"
      })
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      ["Alle", ...EPOCHS.map((e) => e.id)].map((id) => /* @__PURE__ */ React.createElement("button", {
        key: id,
        onClick: () => setEpochenFilter(id),
        className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${epochenFilter === id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
      }, id === "Alle" ? "Alle" : (EPOCHS.find((e) => e.id === id) || {}).name))
    ),

    gefiltert.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#b8905a] text-sm" }, "Nichts gefunden."),

    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      gefiltert.map((v) => {
        const epoche = EPOCHS.find((e) => e.id === v.epoche);
        const istGelesen = gelesen.includes(v.id);
        return /* @__PURE__ */ React.createElement("button", {
          key: v.id,
          onClick: () => setOffen(v.id),
          className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors"
        },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, v.zeitraum),
            epoche && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, epoche.name),
            istGelesen && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#f0d878] border border-[#d4af37] rounded px-1.5 py-0.5" }, "gelesen")
          ),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, v.titel),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, v.leitsatz),
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#8a6238]" }, "Lesen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
        );
      })
    ),

    gelesen.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "mt-6 text-xs text-[#8a6238]" },
      gelesen.length, " von ", VERTIEFUNGEN.length, " gelesen. Der Stand bleibt in diesem Browser gespeichert.")
  );
}


/* =========================================================
   THEMENGESCHICHTE

   Querschnitte statt Chronologie: eine Sache über alle Epochen
   hinweg verfolgt. Aufbau wie bei den Vertiefungen — mit dem,
   was strittig ist, und mit Quellen.
   ========================================================= */

function ThemaDetail({ eintrag, onBack, gelesen, toggleGelesen }) {
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("button", {
      onClick: onBack,
      className: "flex items-center gap-1.5 text-[#c9a877] hover:text-[#f0d878] mb-4 text-sm"
    }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu allen Themen"),

    /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-2xl md:text-3xl text-[#f0d878] mb-2" }, eintrag.titel),
    /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] italic leading-relaxed border-l-2 border-[#d4af37] pl-4 mb-5" }, eintrag.kurz),
    /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed mb-7 max-w-3xl" }, eintrag.einleitung),

    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-3" },
      eintrag.stationen.length, " Stationen"),

    /* @__PURE__ */ React.createElement("div", { className: "relative pl-5 border-l border-[#5c2018]" },
      eintrag.stationen.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "relative mb-5" },
        /* @__PURE__ */ React.createElement("span", { className: "absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-[#d4af37]" }),
        /* @__PURE__ */ React.createElement("div", { className: "font-mono text-xs text-[#d4af37] mb-0.5" }, formatYear(s.jahr)),
        /* @__PURE__ */ React.createElement("div", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, s.titel),
        /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, s.text)
      ))
    ),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 mb-5 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, "Was strittig ist"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, eintrag.strittig)
    ),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#b8905a] leading-relaxed" },
        eintrag.quellen.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", q))
      )
    ),

    /* @__PURE__ */ React.createElement("button", {
      onClick: () => toggleGelesen(eintrag.id),
      className: `mt-5 flex items-center gap-2 px-3 py-2 rounded text-sm border ${gelesen ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]"}`
    }, /* @__PURE__ */ React.createElement(Check, { size: 15 }), gelesen ? "Gelesen" : "Als gelesen merken")
  );
}

function ThemenTab({ ziel }) {
  const [offen, setOffen] = useState(null);
  React.useEffect(() => { if (ziel) setOffen(ziel); }, [ziel]);
  const [gelesen, setGelesen] = useGespeichert("themen.gelesen", []);
  const toggleGelesen = (id) => setGelesen((bisher) => bisher.includes(id) ? bisher.filter((x) => x !== id) : [...bisher, id]);

  if (offen) {
    const eintrag = THEMEN.find((t) => t.id === offen);
    if (eintrag) {
      return /* @__PURE__ */ React.createElement(ThemaDetail, {
        eintrag,
        onBack: () => setOffen(null),
        gelesen: gelesen.includes(eintrag.id),
        toggleGelesen
      });
    }
  }

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Geschichte quer gelesen: eine Sache von den Anfängen bis heute verfolgt, statt Epoche für Epoche."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-6 max-w-2xl" },
      "Bisher ", THEMEN.length, " Themen. Aufbau wie bei den Vertiefungen — mit Quellen und einem Abschnitt zu dem, was die Forschung offen lässt."),

    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      THEMEN.map((t) => {
        const istGelesen = gelesen.includes(t.id);
        return /* @__PURE__ */ React.createElement("button", {
          key: t.id,
          onClick: () => setOffen(t.id),
          className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors"
        },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, t.stationen.length, " Stationen"),
            /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" },
              formatYear(t.stationen[0].jahr), " – ", formatYear(t.stationen[t.stationen.length - 1].jahr)),
            istGelesen && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#f0d878] border border-[#d4af37] rounded px-1.5 py-0.5" }, "gelesen")
          ),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, t.titel),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, t.kurz),
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#8a6238]" }, "Lesen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
        );
      })
    )
  );
}

/* =========================================================
   FORSCHUNGSFRAGEN

   Historia kann nicht recherchieren – die App liegt als Datei auf einem
   Webspace. Was sie kann: Fragen sammeln, damit sie nicht verlorengehen.
   Fragenliste sichern, in raw/inbox/ des Second Brain legen, Claude
   beantwortet sie mit Quellen, Antwortdatei hier wieder einlesen.
   ========================================================= */

const FRAGEN_KENNUNG = "historia-fragen";
const ANTWORTEN_KENNUNG = "historia-antworten";

function heuteISO() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function fragenKennung() {
  return "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function baueFragendatei(fragen) {
  const offen = fragen.filter((f) => f.status !== "beantwortet");
  return {
    kennung: FRAGEN_KENNUNG,
    version: 1,
    app: "Historia",
    erstellt: new Date().toISOString(),
    hinweis: "Diese Datei in raw/inbox/ des Second Brain legen. Claude beantwortet die Fragen mit Quellenangabe und legt eine Antwortdatei zurück.",
    fragen: offen.map((f) => ({ id: f.id, frage: f.frage, kontext: f.kontext || "", gestellt: f.gestellt }))
  };
}

function pruefeAntwortdatei(objekt) {
  const fehler = [];
  if (!objekt || typeof objekt !== "object" || Array.isArray(objekt)) {
    return { gueltig: false, fehler: ["Die Datei enthält keine lesbaren Daten."] };
  }
  if (objekt.kennung !== ANTWORTEN_KENNUNG) fehler.push("Das ist keine Antwortdatei für Historia.");
  if (!Array.isArray(objekt.antworten) || objekt.antworten.length === 0) {
    fehler.push("In der Datei stehen keine Antworten.");
  } else {
    objekt.antworten.forEach((a, i) => {
      if (!a || typeof a.id !== "string") fehler.push("Antwort " + (i + 1) + " hat keine Zuordnung.");
      else if (typeof a.antwort !== "string" || !a.antwort.trim()) fehler.push("Antwort zu „" + a.id + "“ ist leer.");
    });
  }
  return { gueltig: fehler.length === 0, fehler };
}

function spieleAntwortenEin(fragen, datei) {
  const nachId = new Map(datei.antworten.map((a) => [a.id, a]));
  let zugeordnet = 0;
  const neu = fragen.map((f) => {
    const a = nachId.get(f.id);
    if (!a) return f;
    zugeordnet++;
    return {
      ...f,
      status: "beantwortet",
      antwort: String(a.antwort),
      quellen: Array.isArray(a.quellen) ? a.quellen.filter((q) => typeof q === "string") : [],
      beantwortet: typeof a.beantwortet === "string" ? a.beantwortet : heuteISO()
    };
  });
  return { fragen: neu, zugeordnet, ohneZuordnung: datei.antworten.length - zugeordnet };
}

function dateiHerunterladen(inhalt, name, typ) {
  const blob = new Blob([inhalt], { type: typ });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}

function FragenTab() {
  const [fragen, setFragen] = useGespeichert("fragen", []);
  const [frage, setFrage] = useState("");
  const [kontext, setKontext] = useState("");
  const [meldung, setMeldung] = useState(null);
  const [fehler, setFehler] = useState([]);
  const [aufgeklappt, setAufgeklappt] = useState({});

  const offene = fragen.filter((f) => f.status !== "beantwortet");
  const beantwortete = fragen.filter((f) => f.status === "beantwortet");

  const hinzufuegen = () => {
    const t = frage.trim();
    if (!t) return;
    setFragen([{ id: fragenKennung(), frage: t, kontext: kontext.trim(), gestellt: heuteISO(), status: "offen" }, ...fragen]);
    setFrage(""); setKontext("");
    setMeldung({ gut: true, text: "Notiert." });
  };

  const exportieren = () => {
    const datei = baueFragendatei(fragen);
    if (datei.fragen.length === 0) { setMeldung({ gut: false, text: "Es sind keine offenen Fragen da." }); return; }
    dateiHerunterladen(JSON.stringify(datei, null, 2), "fragen-historia-" + heuteISO() + ".json", "application/json");
    setMeldung({ gut: true, text: datei.fragen.length + (datei.fragen.length === 1 ? " offene Frage" : " offene Fragen") + " gesichert. Leg die Datei in raw/inbox/ deines Second Brain." });
  };

  const antwortenGewaehlt = (ereignis) => {
    const datei = ereignis.target.files && ereignis.target.files[0];
    ereignis.target.value = "";
    if (!datei) return;
    setMeldung(null); setFehler([]);
    const leser = new FileReader();
    leser.onerror = () => setFehler(["Die Datei ließ sich nicht lesen."]);
    leser.onload = () => {
      let objekt;
      try { objekt = JSON.parse(String(leser.result)); }
      catch (e) { setFehler(["Das ist keine gültige JSON-Datei."]); return; }
      const pruefung = pruefeAntwortdatei(objekt);
      if (!pruefung.gueltig) { setFehler(pruefung.fehler); return; }
      const ergebnis = spieleAntwortenEin(fragen, objekt);
      setFragen(ergebnis.fragen);
      setMeldung({ gut: true, text: ergebnis.zugeordnet + (ergebnis.zugeordnet === 1 ? " Antwort" : " Antworten") + " eingelesen." + (ergebnis.ohneZuordnung > 0 ? " " + ergebnis.ohneZuordnung + " ließ sich keiner Frage zuordnen." : "") });
    };
    leser.readAsText(datei);
  };

  const knopf = "px-3 py-2 rounded text-sm border border-[#5c2018] text-[#e0b84a] hover:border-[#d4af37] disabled:opacity-40";
  const feld = "w-full rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2 text-sm text-[#e8d5b0] placeholder-[#8a6238] focus:outline-none focus:border-[#d4af37]";

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Fragen, die beim Lesen entstehen und über das hinausgehen, was hier steht."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Die App recherchiert nicht selbst — sie sammelt. Sicher die Liste als Datei, leg sie in den Eingangskorb deines Second Brain, und Claude arbeitet sie mit Quellen ab. Die Antwortdatei liest du hier wieder ein; danach steht alles offline zur Verfügung."),

    meldung && /* @__PURE__ */ React.createElement("p", { className: "mb-4 text-sm " + (meldung.gut ? "text-[#9ad5b0]" : "text-[#e0b84a]") }, meldung.text),
    fehler.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mb-4 rounded border border-[#7a3020] bg-[#5c1a1e] p-3" },
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#e4a6a6] mb-1" }, "Nicht eingelesen:"),
      fehler.map((f, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-xs text-[#e4a6a6]" }, "· " + f))),

    /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 mb-5 max-w-2xl" },
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" }, "Neue Frage"),
      /* @__PURE__ */ React.createElement("textarea", {
        value: frage, onChange: (e) => setFrage(e.target.value), rows: 2,
        placeholder: "z. B.: Warum brach das Weströmische Reich zusammen, das Oströmische aber nicht?",
        className: feld + " mb-2 resize-y"
      }),
      /* @__PURE__ */ React.createElement("input", {
        value: kontext, onChange: (e) => setKontext(e.target.value), type: "text",
        placeholder: "Woher kommt die Frage? (freiwillig)", className: feld + " mb-3"
      }),
      /* @__PURE__ */ React.createElement("button", { onClick: hinzufuegen, disabled: !frage.trim(), className: knopf }, "Frage notieren")
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mb-6" },
      /* @__PURE__ */ React.createElement("button", { onClick: exportieren, disabled: offene.length === 0, className: knopf },
        "↓ Offene Fragen sichern" + (offene.length ? " (" + offene.length + ")" : "")),
      /* @__PURE__ */ React.createElement("label", { className: knopf + " cursor-pointer inline-block" },
        "↑ Antwortdatei einlesen",
        /* @__PURE__ */ React.createElement("input", { type: "file", accept: "application/json,.json", onChange: antwortenGewaehlt, className: "hidden" }))
    ),

    offene.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mb-8" },
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-2" }, "Offen (" + offene.length + ")"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" },
        offene.map((f) => /* @__PURE__ */ React.createElement("div", { key: f.id, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" },
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug" }, f.frage),
          f.kontext && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#b8905a] italic mt-1" }, f.kontext),
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mt-2" },
            /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-[#8a6238]" }, "notiert am " + f.gestellt),
            /* @__PURE__ */ React.createElement("button", { onClick: () => setFragen(fragen.filter((x) => x.id !== f.id)), className: "text-[11px] text-[#b8905a] underline hover:text-[#e0b84a]" }, "Löschen"))
        )))),

    beantwortete.length > 0 && /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-2" }, "Beantwortet (" + beantwortete.length + ")"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" },
        beantwortete.map((f) => {
          const auf = !!aufgeklappt[f.id];
          return /* @__PURE__ */ React.createElement("div", { key: f.id, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" },
            /* @__PURE__ */ React.createElement("button", {
              onClick: () => setAufgeklappt({ ...aufgeklappt, [f.id]: !auf }),
              className: "text-left w-full font-serif text-lg text-[#e0b84a] leading-snug"
            }, (auf ? "▾ " : "▸ ") + f.frage),
            auf && /* @__PURE__ */ React.createElement("div", { className: "mt-3 pt-3 border-t border-[#5c2018]" },
              /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed whitespace-pre-wrap" }, f.antwort),
              f.quellen && f.quellen.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-3" },
                /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-widest text-[#8a6238] mb-1" }, "Quellen"),
                f.quellen.map((q, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-xs text-[#b8905a]" }, "· " + q))),
              /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#8a6238] mt-3" }, "beantwortet am " + (f.beantwortet || "—")))
          );
        }))),

    fragen.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#b8905a] max-w-2xl leading-relaxed" },
      "Noch keine Frage notiert. Was beim Lesen offenbleibt oder was du genauer wissen willst, kommt hierher — und geht nicht verloren.")
  );
}


/* =========================================================
   ZEITSCHNITT — was geschah gleichzeitig?

   Ersetzt den früheren Zahlenstrahl. Der scheiterte an vier Dingen:
   245 Punkte auf einer Linie überlappten sich, die Beschriftung erschien
   nur beim Überfahren mit der Maus (auf dem Handy also nie), es gab keine
   Möglichkeit hineinzuzoomen, und auf einer logarithmischen Skala über
   2,6 Millionen Jahre bedeuten Abstände nichts mehr.

   Diese Ansicht beantwortet stattdessen eine Frage, die eine gewöhnliche
   Zeitleiste nie beantwortet: Was geschah anderswo, während hier etwas
   geschah? Genau das fehlt in den meisten Geschichtsdarstellungen.
   ========================================================= */

const ZEITSCHNITT_SPRUENGE = [
  { jahr: -3000, label: "3000 v. Chr." },
  { jahr: -1200, label: "1200 v. Chr." },
  { jahr: -500, label: "500 v. Chr." },
  { jahr: 1, label: "Zeitenwende" },
  { jahr: 500, label: "500" },
  { jahr: 1000, label: "1000" },
  { jahr: 1500, label: "1500" },
  { jahr: 1800, label: "1800" },
  { jahr: 1914, label: "1914" },
  { jahr: 1969, label: "1969" },
  { jahr: 2000, label: "2000" }
];

function jahrText(j) {
  if (j < 0) return Math.abs(j).toLocaleString("de-DE") + " v. Chr.";
  return String(j);
}

function abstandText(differenz) {
  const a = Math.abs(differenz);
  if (a === 0) return "im selben Jahr";
  if (a === 1) return differenz < 0 ? "1 Jahr davor" : "1 Jahr danach";
  return a.toLocaleString("de-DE") + (differenz < 0 ? " Jahre davor" : " Jahre danach");
}

function ZeitschnittTab() {
  const [jahr, setJahr] = useGespeichert("zeitschnitt.jahr", 1500);
  const [eingabe, setEingabe] = useState(String(1500));

  const setzeJahr = (j) => {
    const z = Math.max(-3000, Math.min(2026, Math.round(j)));
    setJahr(z);
    setEingabe(String(z));
  };

  const epoche = useMemo(() => EPOCHS.find((e) => jahr >= e.startYear && jahr <= e.endYear) || null, [jahr]);

  // Je Land das Ereignis, das dem gewählten Jahr am nächsten liegt
  const laender = useMemo(() => Object.entries(COUNTRY_TIMELINES).map(([name, daten]) => {
    let naechstes = null;
    let abstand = Infinity;
    daten.events.forEach((e) => {
      const d = Math.abs(e.year - jahr);
      if (d < abstand) { abstand = d; naechstes = e; }
    });
    return { name, farbe: daten.color, ereignis: naechstes, differenz: naechstes ? naechstes.year - jahr : null };
  }).filter((l) => l.ereignis).sort((a, b) => Math.abs(a.differenz) - Math.abs(b.differenz)), [jahr]);

  // Ereignisse aus den Epochen im Umkreis
  const fenster = Math.max(25, Math.round(Math.abs(jahr) * 0.02));
  const nahe = useMemo(() => EPOCHS.flatMap((ep) => ep.events.map((e) => ({ ...e, epoche: ep.name, farbe: ep.color })))
    .filter((e) => Math.abs(e.year - jahr) <= fenster)
    .sort((a, b) => a.year - b.year), [jahr, fenster]);

  const vertiefungen = useMemo(() => VERTIEFUNGEN
    .filter((v) => Math.abs(v.jahr - jahr) <= Math.max(60, fenster))
    .sort((a, b) => Math.abs(a.jahr - jahr) - Math.abs(b.jahr - jahr)), [jahr, fenster]);

  // Position des Jahres im Epochenband (proportional, nicht logarithmisch —
  // die Steinzeit bleibt bewusst außen vor, sonst verschwindet alles andere)
  const bandVon = -3000;
  const bandBis = 2026;
  const anteil = ((jahr - bandVon) / (bandBis - bandVon)) * 100;

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Wähle ein Jahr und sieh, was zur selben Zeit anderswo geschah."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Geschichte wird meist der Länge nach erzählt — ein Land, eine Epoche, von vorn nach hinten. Was dabei verlorengeht, ist die Gleichzeitigkeit: dass die Chinesische Mauer entstand, während Rom die Punischen Kriege führte, oder dass Timbuktu blühte, als in Europa die Pest wütete."),

    // ---------- Jahresauswahl ----------
    /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 mb-6" },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-3 mb-3 flex-wrap" },
        /* @__PURE__ */ React.createElement("span", { className: "font-serif text-3xl text-[#f0d878]" }, jahrText(jahr)),
        epoche && /* @__PURE__ */ React.createElement("span", { className: "text-xs uppercase tracking-wide px-2 py-0.5 rounded border", style: { borderColor: epoche.color, color: epoche.accent } }, epoche.name)
      ),

      /* @__PURE__ */ React.createElement("input", {
        type: "range", min: -3000, max: 2026, step: 1, value: jahr,
        onChange: (e) => setzeJahr(Number(e.target.value)),
        "aria-label": "Jahr wählen",
        className: "w-full accent-[#d4af37] mb-1"
      }),

      // Epochenband unter dem Regler, proportional
      /* @__PURE__ */ React.createElement("div", { className: "relative h-3 rounded overflow-hidden mb-3 flex" },
        EPOCHS.filter((e) => e.endYear > bandVon).map((e) => {
          const von = Math.max(e.startYear, bandVon);
          const bis = Math.min(e.endYear, bandBis);
          const breite = ((bis - von) / (bandBis - bandVon)) * 100;
          return /* @__PURE__ */ React.createElement("div", {
            key: e.id, title: e.name,
            style: { width: breite + "%", backgroundColor: e.color, opacity: 0.55 }
          });
        }),
        /* @__PURE__ */ React.createElement("div", {
          className: "absolute top-0 bottom-0 w-0.5 bg-[#f0d878]",
          style: { left: Math.max(0, Math.min(100, anteil)) + "%" }
        })
      ),

      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-3" },
        ZEITSCHNITT_SPRUENGE.map((s) => /* @__PURE__ */ React.createElement("button", {
          key: s.jahr, onClick: () => setzeJahr(s.jahr),
          className: `px-2 py-0.5 rounded text-[11px] font-mono border ${jahr === s.jahr ? "bg-[#7a3020] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]"}`
        }, s.label))
      ),

      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap" },
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr - 100), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]" }, "−100"),
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr - 10), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]" }, "−10"),
        /* @__PURE__ */ React.createElement("input", {
          type: "text", value: eingabe, inputMode: "numeric",
          onChange: (e) => setEingabe(e.target.value),
          onBlur: () => { const n = parseInt(eingabe, 10); if (!isNaN(n)) setzeJahr(n); else setEingabe(String(jahr)); },
          onKeyDown: (e) => { if (e.key === "Enter") { const n = parseInt(eingabe, 10); if (!isNaN(n)) setzeJahr(n); } },
          "aria-label": "Jahr eingeben",
          className: "w-24 rounded border border-[#5c2018] bg-[#4a1015] px-2 py-1 text-sm text-[#e8d5b0] focus:outline-none focus:border-[#d4af37]"
        }),
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr + 10), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]" }, "+10"),
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr + 100), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]" }, "+100"),
        /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-[#8a6238]" }, "negative Zahlen = vor Christus")
      )
    ),

    // ---------- Gleichzeitig in der Welt ----------
    /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" }, "Gleichzeitig in der Welt"),
    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2 mb-7" },
      laender.map((l) => /* @__PURE__ */ React.createElement("div", {
        key: l.name,
        className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-3"
      },
        /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline justify-between gap-2 mb-1 flex-wrap" },
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs uppercase tracking-wide", style: { color: l.farbe } }, l.name),
          /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-[#8a6238]" }, jahrText(l.ereignis.year) + " · " + abstandText(l.differenz))
        ),
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[15px] text-[#e0b84a] leading-snug" }, l.ereignis.title),
        /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#c2a06a] leading-relaxed mt-1" }, l.ereignis.text)
      ))
    ),

    // ---------- Im Umkreis ----------
    nahe.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mb-7" },
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" },
        "Im Umkreis von " + fenster.toLocaleString("de-DE") + " Jahren (" + nahe.length + ")"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" },
        nahe.map((e, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-3" },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 mb-0.5 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, jahrText(e.year)),
            /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238]" }, e.epoche)),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[15px] text-[#e0b84a] leading-snug" }, e.title),
          /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#c2a06a] leading-relaxed mt-1" }, e.text)
        )))
    ),

    nahe.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#b8905a] mb-7" },
      "Aus diesem Zeitraum ist in den Epochen kein Ereignis verzeichnet. Die Länder oben zeigen trotzdem, was zeitlich am nächsten liegt."),

    vertiefungen.length > 0 && /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" }, "Dazu gibt es Vertiefungen"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" },
        vertiefungen.map((v) => /* @__PURE__ */ React.createElement("span", {
          key: v.id,
          className: "px-2.5 py-1 rounded text-xs border border-[#5c2018] text-[#c2a06a]"
        }, v.titel)))
    )
  );
}



/* =========================================================
   MYSTERIEN DER GESCHICHTE

   Ungeklärte Geschehnisse — aber nicht als Gruselkabinett. Jeder Eintrag
   trennt sauber: was gesichert ist, was offen bleibt, welche Erklärungen
   ernsthaft vertreten werden (mit dem, was dafür und dagegen spricht),
   wo die Forschung gerade steht, und wovon das Rätsel abzugrenzen ist.

   Bewusst sind auch gelöste Fälle dabei. Sie zeigen, dass Rätsel selten
   unlösbar sind — meist fehlt nur die Methode, und irgendwann kommt sie.
   ========================================================= */

const MYSTERIEN_STATUS = {
  ungeklaert: { label: "ungeklärt", farbe: "#d4af37" },
  teilweise: { label: "teilweise geklärt", farbe: "#c2a06a" },
  geloest: { label: "gelöst", farbe: "#7fb08a" }
};

function MysterienDetail({ eintrag, onBack }) {
  const st = MYSTERIEN_STATUS[eintrag.status] || MYSTERIEN_STATUS.ungeklaert;
  const Abschnitt = ({ titel, text }) => /* @__PURE__ */ React.createElement("div", { className: "mb-5" },
    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, titel),
    /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, text));

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("button", {
      onClick: onBack,
      className: "flex items-center gap-1.5 text-[#c9a877] hover:text-[#f0d878] mb-4 text-sm"
    }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu allen Mysterien"),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" },
      /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, eintrag.zeitraum),
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, eintrag.region),
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide rounded px-1.5 py-0.5 border", style: { color: st.farbe, borderColor: st.farbe } }, st.label)
    ),
    /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-2xl md:text-3xl text-[#f0d878] mb-4" }, eintrag.titel),

    /* @__PURE__ */ React.createElement(Abschnitt, { titel: "Was gesichert ist", text: eintrag.gesichert }),
    /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, eintrag.status === "geloest" ? "Was lange offen war" : "Was offen ist"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, eintrag.raetsel)),

    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" },
      eintrag.status === "geloest" ? "Wie es gelöst wurde" : "Welche Erklärungen vertreten werden"),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-3 mb-5" },
      eintrag.erklaerungen.map((e, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" },
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-2 leading-snug" }, e.these),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mb-1.5" },
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-[#8a6238] mr-2" }, "dafür"), e.dafuer),
        e.dagegen && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" },
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-[#8a6238] mr-2" }, "dagegen"), e.dagegen)
      ))),

    /* @__PURE__ */ React.createElement(Abschnitt, { titel: "Stand der Forschung", text: eintrag.forschungsstand }),

    /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-lg border border-[#5c2018] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-1.5" }, "Abzugrenzen davon"),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, eintrag.abgrenzung)),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#b8905a] leading-relaxed" },
        eintrag.quellen.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", q))))
  );
}

function MysterienTab({ ziel }) {
  const [offen, setOffen] = useState(null);
  React.useEffect(() => { if (ziel) setOffen(ziel); }, [ziel]);
  const [filter, setFilter] = useState("alle");

  if (offen) {
    const e = MYSTERIEN.find((m) => m.id === offen);
    if (e) return /* @__PURE__ */ React.createElement(MysterienDetail, { eintrag: e, onBack: () => setOffen(null) });
  }

  const gefiltert = MYSTERIEN.filter((m) => filter === "alle" || m.status === filter);
  const zaehler = { ungeklaert: 0, teilweise: 0, geloest: 0 };
  MYSTERIEN.forEach((m) => { zaehler[m.status] = (zaehler[m.status] || 0) + 1; });

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      MYSTERIEN.length, " Fälle, in denen die Geschichte eine Lücke hat — und einige, in denen sie geschlossen wurde."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Jeder Eintrag trennt, was gesichert ist, von dem, was offen bleibt, und nennt zu jeder Erklärung auch das, was dagegen spricht. Die gelösten Fälle stehen bewusst daneben: Rätsel sind selten unlösbar — meist fehlt nur die Methode, und irgendwann kommt sie."),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      [["alle", "Alle (" + MYSTERIEN.length + ")"], ["ungeklaert", "Ungeklärt (" + zaehler.ungeklaert + ")"], ["teilweise", "Teilweise (" + zaehler.teilweise + ")"], ["geloest", "Gelöst (" + zaehler.geloest + ")"]]
        .map(([id, label]) => /* @__PURE__ */ React.createElement("button", {
          key: id, onClick: () => setFilter(id),
          className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${filter === id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
        }, label))),

    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      gefiltert.map((m) => {
        const st = MYSTERIEN_STATUS[m.status] || MYSTERIEN_STATUS.ungeklaert;
        return /* @__PURE__ */ React.createElement("button", {
          key: m.id, onClick: () => setOffen(m.id),
          className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors"
        },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, m.zeitraum),
            /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide rounded px-1.5 py-0.5 border", style: { color: st.farbe, borderColor: st.farbe } }, st.label)),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, m.titel),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, m.raetsel),
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#8a6238]" }, "Ansehen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
        );
      }))
  );
}


/* =========================================================
   SUCHE

   Historia ist auch ein Nachschlagewerk. Bisher hatte jeder
   Reiter seine eigene Suche oder gar keine — wer nicht wusste,
   wo etwas steht, fand es nicht. Dieser Reiter durchsucht alle
   Sammlungen gemeinsam und springt zum Fundort.
   ========================================================= */

// Wird von Historia gesetzt, damit Trefferkarten den Reiter wechseln koennen.
let SPRINGE = null;

function sucheIndex() {
  const eintraege = [];
  const rein = (o) => eintraege.push(o);

  EPOCHS.forEach((ep) => {
    rein({ art: "Epoche", titel: ep.name, text: ep.description, kontext: ep.span, reiter: "epochen", ziel: ep.id });
    ep.events.forEach((e) => rein({
      art: "Ereignis", titel: e.title, text: e.text,
      kontext: formatYear(e.year) + " · " + ep.name, jahr: e.year, reiter: "epochen", ziel: ep.id
    }));
    ep.figures.forEach((f) => rein({
      art: "Persönlichkeit", titel: f.name, text: f.text,
      kontext: f.years + " · " + ep.name, reiter: "epochen", ziel: ep.id
    }));
    ep.nations.forEach((n) => rein({
      art: "Reich", titel: n.name, text: n.text, kontext: ep.name, reiter: "epochen", ziel: ep.id
    }));
  });

  Object.entries(COUNTRY_TIMELINES).forEach(([land, d]) => {
    d.events.forEach((e) => rein({
      art: "Zeitleiste", titel: e.title, text: e.text,
      kontext: land + " · " + formatYear(e.year), jahr: e.year, reiter: "laender", ziel: land
    }));
  });

  VERTIEFUNGEN.forEach((v) => rein({
    art: "Vertiefung", titel: v.titel, text: v.leitsatz + " " + v.vorgeschichte + " " + v.verlauf + " " + v.folgen,
    kontext: v.zeitraum + " · " + v.region, reiter: "vertiefungen", ziel: v.id
  }));

  THEMEN.forEach((t) => {
    rein({ art: "Themengeschichte", titel: t.titel, text: t.kurz + " " + t.einleitung, kontext: t.stationen.length + " Stationen", reiter: "themen", ziel: t.id });
    t.stationen.forEach((s) => rein({
      art: "Themen-Station", titel: s.titel, text: s.text,
      kontext: t.titel + " · " + formatYear(s.jahr), jahr: s.jahr, reiter: "themen", ziel: t.id
    }));
  });

  SCHLUESSELMOMENTE.forEach((s) => rein({
    art: "Schlüsselmoment", titel: s.title, text: s.text,
    kontext: formatYear(s.year) + " · " + s.category, jahr: s.year, reiter: "schluessel", ziel: null
  }));

  BATTLES.forEach((b) => rein({
    art: "Schlacht", titel: b.name, text: b.text,
    kontext: formatYear(b.year) + " · " + b.war, jahr: b.year, reiter: "schlachten", ziel: null
  }));

  QUOTES.forEach((q) => rein({
    art: "Zitat", titel: q.text, text: (q.note || "") + " " + q.author,
    kontext: q.author + (q.year ? " · " + q.year : "") + " · " + q.status, reiter: "zitate", ziel: null
  }));

  MYTHEN.forEach((m) => rein({
    art: m.type === "Mythos" ? "Mythos" : m.type, titel: m.title, text: m.text + " " + (m.quelle || ""),
    kontext: m.category, reiter: "mythen", ziel: null
  }));

  MYSTERIEN.forEach((m) => rein({
    art: "Mysterium", titel: m.titel, text: JSON.stringify(m).slice(0, 2000),
    kontext: m.zeitraum || "", reiter: "mysterien", ziel: m.id
  }));

  SURPRISING_FACTS.forEach((f) => rein({
    art: "Verblüffender Fakt", titel: f, text: "", kontext: "", reiter: "verblueffend", ziel: null
  }));

  return eintraege;
}

const ART_FARBE = {
  "Epoche": "#8c6a2e", "Ereignis": "#a01f1f", "Persönlichkeit": "#2a5b8a", "Reich": "#7d5b1f",
  "Zeitleiste": "#1f8a7d", "Vertiefung": "#d4af37", "Themengeschichte": "#6b4f9a", "Themen-Station": "#6b4f9a",
  "Schlüsselmoment": "#c9701c", "Schlacht": "#8a3020", "Zitat": "#3f7d3f", "Mythos": "#a03a20",
  "Nuance": "#8a6238", "Kuriosum": "#c2a06a", "Mysterium": "#5b7d1f", "Verblüffender Fakt": "#8a5b7d"
};

function SucheTab() {
  const [frage, setFrage] = useState("");
  const [artFilter, setArtFilter] = useState("Alle");
  const index = useMemo(sucheIndex, []);

  const q = frage.trim().toLowerCase();
  const woerter = q.split(/\s+/).filter(Boolean);

  const treffer = useMemo(() => {
    if (woerter.length === 0) return [];
    const bewertet = [];
    for (const e of index) {
      const titel = (e.titel || "").toLowerCase();
      const rest = ((e.text || "") + " " + (e.kontext || "")).toLowerCase();
      let punkte = 0, alleDa = true;
      for (const w of woerter) {
        if (titel.includes(w)) punkte += titel.startsWith(w) ? 12 : 8;
        else if (rest.includes(w)) punkte += 2;
        else { alleDa = false; break; }
      }
      if (alleDa) bewertet.push({ e, punkte });
    }
    bewertet.sort((a, b) => b.punkte - a.punkte || a.e.titel.length - b.e.titel.length);
    return bewertet.map((x) => x.e);
  }, [q, index]);

  const arten = [];
  treffer.forEach((t) => { if (!arten.includes(t.art)) arten.push(t.art); });
  const gefiltert = artFilter === "Alle" ? treffer : treffer.filter((t) => t.art === artFilter);
  const gezeigt = gefiltert.slice(0, 120);

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Durchsucht alle ", index.length, " Einträge der App auf einmal — Ereignisse, Personen, Reiche, Zeitleisten, Vertiefungen, Themen, Schlachten, Zitate, Mythen und Mysterien."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-4 max-w-2xl" },
      "Mehrere Wörter grenzen ein: Alle müssen vorkommen. Ein Klick auf einen Treffer springt zum Fundort."),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-2 max-w-xl" },
      /* @__PURE__ */ React.createElement(Search, { size: 16, className: "text-[#8a6238]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: frage,
        onChange: (e) => { setFrage(e.target.value); setArtFilter("Alle"); },
        placeholder: "Suchbegriff, z. B. Pest, Seidenstraße, Verfassung …",
        className: "bg-transparent text-[15px] text-[#e8d5b0] placeholder-[#8a6238] focus:outline-none flex-1"
      }),
      frage && /* @__PURE__ */ React.createElement("button", {
        onClick: () => { setFrage(""); setArtFilter("Alle"); },
        className: "text-xs text-[#8a6238] hover:text-[#e0b84a]"
      }, "löschen")
    ),

    q && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] font-mono mb-3" },
      treffer.length === 0 ? "Keine Treffer." : treffer.length + " Treffer" + (gefiltert.length > 120 ? ", die ersten 120 werden gezeigt" : "")),

    arten.length > 1 && /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-5" },
      ["Alle", ...arten].map((a) => /* @__PURE__ */ React.createElement("button", {
        key: a,
        onClick: () => setArtFilter(a),
        className: `px-2.5 py-1 rounded text-xs border ${artFilter === a ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
      }, a, a === "Alle" ? "" : ` (${treffer.filter((t) => t.art === a).length})`))
    ),

    !q && /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 max-w-2xl" },
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mb-2" }, "Beispiele:"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" },
        ["Pest", "Seidenstraße", "Verfassung", "Sklaverei", "Buchdruck", "Mongolen", "Frauen", "Bewässerung"].map((b) =>
          /* @__PURE__ */ React.createElement("button", {
            key: b,
            onClick: () => setFrage(b),
            className: "px-2.5 py-1 rounded text-xs border border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a] hover:border-[#d4af37]"
          }, b))
      )
    ),

    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      gezeigt.map((t, i) => /* @__PURE__ */ React.createElement("button", {
        key: i,
        onClick: () => { if (SPRINGE) SPRINGE(t.reiter, t.ziel); },
        className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors"
      },
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1.5 flex-wrap" },
          /* @__PURE__ */ React.createElement("span", {
            className: "text-[10px] uppercase tracking-wide border rounded px-1.5 py-0.5",
            style: { color: ART_FARBE[t.art] || "#b8905a", borderColor: ART_FARBE[t.art] || "#5c2018" }
          }, t.art),
          t.kontext && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238]" }, t.kontext)
        ),
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[17px] text-[#e0b84a] leading-snug mb-1" }, t.titel),
        t.text && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" },
          t.text.length > 200 ? t.text.slice(0, 200) + " …" : t.text),
        /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#8a6238]" },
          t.ziel ? "Öffnen " : "Zum Bereich ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
      ))
    )
  );
}

const NAV = [
  { id: "suche", label: "Suche", icon: Search },
  { id: "epochen", label: "Epochen", icon: BookOpen },
  { id: "vertiefungen", label: "Vertiefungen", icon: Layers },
  { id: "themen", label: "Themengeschichte", icon: Layers },
  { id: "schluessel", label: "Schl\xFCsselmomente", icon: Zap },
  { id: "laender", label: "L\xE4nder-Zeitleisten", icon: Globe },
  { id: "schlachten", label: "Ber\xFChmte Schlachten", icon: Crown },
  { id: "zitate", label: "Zitate", icon: BookOpen },
  { id: "mythen", label: "Fun Facts & Mythen", icon: Sparkles },
  { id: "mysterien", label: "Mysterien der Geschichte", icon: Search },
  { id: "zeitschnitt", label: "Zeitschnitt", icon: Clock },
  { id: "personen", label: "Pers\xF6nlichkeiten", icon: Users },
  { id: "nationen", label: "Nationen & Reiche", icon: Crown },
  { id: "lernen", label: "Fakten & Jahreszahlen", icon: Sparkles },
  { id: "fragen", label: "Forschungsfragen", icon: HelpCircle },
  { id: "verblueffend", label: "Verbl\xFCffende Fakten", icon: Sparkles }
];
function formatYear(y) {
  if (y < 0) return `${Math.abs(y).toLocaleString("de-DE")} v. Chr.`;
  return `${y} n. Chr.`;
}
function Header({ tab, setTab }) {
  return /* @__PURE__ */ React.createElement("header", { className: "border-b border-[#5c2018] bg-[#4a1015]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 pt-5 pb-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-3" }, /* @__PURE__ */ React.createElement("h1", { className: "font-serif text-2xl md:text-3xl text-[#e0b84a] tracking-tight" }, "Historia"), /* @__PURE__ */ React.createElement("span", { className: "text-[#b8905a] text-xs md:text-sm font-mono uppercase tracking-widest" }, "Steinzeit \u2014 Gegenwart"))), /* @__PURE__ */ React.createElement("nav", { className: "max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto no-scrollbar pb-2" }, NAV.map((n) => {
    const Icon2 = n.icon;
    const active = tab === n.id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: n.id,
        onClick: () => setTab(n.id),
        className: `flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-t-md text-sm font-medium transition-colors border-b-2 ${active ? "text-[#e0b84a] border-[#d4af37]" : "text-[#b8905a] border-transparent hover:text-[#d8c690]"}`
      },
      /* @__PURE__ */ React.createElement(Icon2, { size: 15 }),
      n.label
    );
  })));
}
function EpochCard({ ep, onOpen }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onOpen(ep.id),
      className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] hover:bg-[#6b2024] transition-colors p-5 group",
      style: { borderLeft: `4px solid ${ep.color}` }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-1" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-xl text-[#e0b84a]" }, ep.name), /* @__PURE__ */ React.createElement(ChevronRight, { size: 18, className: "text-[#b8905a] group-hover:translate-x-1 transition-transform" })),
    /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-wider mb-2", style: { color: ep.accent } }, ep.span),
    /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c9a877] leading-relaxed" }, ep.lead),
    /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 mt-3 text-xs text-[#b8905a]" }, /* @__PURE__ */ React.createElement("span", null, ep.events.length, " Ereignisse"), /* @__PURE__ */ React.createElement("span", null, ep.figures.length, " Pers\xF6nlichkeiten"), /* @__PURE__ */ React.createElement("span", null, ep.nations.length, " Nationen"))
  );
}
function EpochDetail({ ep, onBack }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: onBack, className: "flex items-center gap-1.5 text-sm text-[#b8905a] hover:text-[#d8c690] mb-4" }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), " Zur\xFCck zur \xDCbersicht"), /* @__PURE__ */ React.createElement("div", { className: "mb-6", style: { borderLeft: `4px solid ${ep.color}`, paddingLeft: 16 } }, /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-3xl text-[#e0b84a]" }, ep.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-wider mb-3", style: { color: ep.accent } }, ep.span), /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] leading-relaxed max-w-3xl" }, ep.description)), /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Wichtigste Ereignisse (", ep.events.length, ")"), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l border-[#5c2018] ml-2 mb-8" }, ep.events.map((e, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-6 ml-5" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#4a1015]",
      style: { backgroundColor: ep.color }
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: ep.accent } }, formatYear(e.year)), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, e.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, e.text), e.quelle && /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-[11px] text-[#8a6238] leading-snug" }, "Beleg: ", e.quelle)))), ep.figures.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Pers\xF6nlichkeiten (", ep.figures.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-8" }, ep.figures.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, f.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs mb-1", style: { color: ep.accent } }, f.years), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, f.text))))), ep.nations.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Nationen & Reiche (", ep.nations.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-8" }, ep.nations.map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, n.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, n.text))))), ep.dynastyGroups && ep.dynastyGroups.map((group, gi) => /* @__PURE__ */ React.createElement("div", { key: gi, className: "mb-8" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, group.title), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, group.items.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${ep.accent}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, it.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, it.text)))))), ep.literatur && ep.literatur.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-2 pt-4 border-t border-[#5c2018]" }, /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-1.5" }, "Literaturgrundlage dieser Epoche"), /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#b8905a] leading-relaxed mb-2" }, ep.literatur.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "\xB7 ", q))), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#8a6238] leading-snug max-w-2xl" }, "Die Ereignisse dieser Epoche folgen dieser Literatur. Einzelne Ereignisse mit strittiger oder gesch\xE4tzter Zahlenangabe tragen zus\xE4tzlich einen eigenen Beleg.")));
}
function EpochenTab({ ziel }) {
  const [openId, setOpenId] = useState(null);
  React.useEffect(() => { if (ziel) setOpenId(ziel); }, [ziel]);
  const ep = EPOCHS.find((e) => e.id === openId);
  if (ep) return /* @__PURE__ */ React.createElement(EpochDetail, { ep, onBack: () => setOpenId(null) });
  const totalEvents = EPOCHS.reduce((s, e) => s + e.events.length, 0);
  const totalFigures = EPOCHS.reduce((s, e) => s + e.figures.length, 0);
  const totalNations = EPOCHS.reduce((s, e) => s + e.nations.length, 0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" }, "Sieben Epochen, von der Steinzeit bis zur Gegenwart. W\xE4hle eine Epoche f\xFCr Ereignisse, Pers\xF6nlichkeiten und Nationen im Detail."), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-5 font-mono" }, totalEvents, " Ereignisse \xB7 ", totalFigures, " Pers\xF6nlichkeiten \xB7 ", totalNations, " Nationen & Reiche"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-4" }, EPOCHS.map((ep2) => /* @__PURE__ */ React.createElement(EpochCard, { key: ep2.id, ep: ep2, onOpen: setOpenId }))));
}
function SchluesselmomenteTab() {
  const [cat, setCat] = useState("Alle");
  const categories = ["Alle", ...Array.from(new Set(SCHLUESSELMOMENTE.map((m) => m.category)))];
  const filtered = SCHLUESSELMOMENTE.filter((m) => cat === "Alle" || m.category === cat).sort((a, b) => a.year - b.year);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" }, SCHLUESSELMOMENTE.length, " kuratierte Wendepunkte, die den Lauf der Geschichte grundlegend ver\xE4nderten \u2014 Momente, ohne die die Welt heute anders auss\xE4he."), /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-4 max-w-2xl" }, "Wo es eine ausf\xFChrliche Darstellung oder einen passenden Querschnitt gibt, f\xFChrt darunter ein Verweis dorthin."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCat(c),
      className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${cat === c ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    c
  ))), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l-2 border-[#5c2018] ml-2" }, filtered.map((m, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-8 ml-6" }, /* @__PURE__ */ React.createElement("span", { className: "absolute -left-[9px] w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#4a1015] flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Zap, { size: 9, className: "text-[#4a1015]" })), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-[#d4af37]" }, formatYear(m.year)), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, m.category)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, m.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, m.text), (m.vertiefung || m.thema) && /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mt-3" }, m.vertiefung && /* @__PURE__ */ React.createElement("button", { onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", m.vertiefung); }, className: "inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-[#5c2018] text-[#c9a877] hover:text-[#f0d878] hover:border-[#d4af37]" }, "Vertiefung: ", (VERTIEFUNGEN.find((v) => v.id === m.vertiefung) || {}).titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 })), m.thema && /* @__PURE__ */ React.createElement("button", { onClick: () => { if (SPRINGE) SPRINGE("themen", m.thema); }, className: "inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-[#5c2018] text-[#c9a877] hover:text-[#f0d878] hover:border-[#d4af37]" }, "Thema: ", (THEMEN.find((t) => t.id === m.thema) || {}).titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }))))))));
}
function SchlachtenTab() {
  const sorted = [...BATTLES].sort((a, b) => a.year - b.year);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-5 max-w-2xl" }, BATTLES.length, " Schlachten, die den Ausgang von Kriegen und damit oft den Lauf der Geschichte entschieden haben."), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, sorted.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-[#d4af37] mb-1" }, formatYear(b.year)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a]" }, b.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, b.war), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, b.text)))));
}
function ZitateTab() {
  const [statusFilter, setStatusFilter] = useState("Alle");
  const reihenfolge = ["belegt", "sinngem\xE4\xDF", "zugeschrieben", "falsch zitiert", "falsch zugeschrieben", "Sprichwort"];
  const vorhanden = reihenfolge.filter((s) => QUOTES.some((q) => q.status === s));
  const stil = (s) => {
    if (s === "belegt") return { backgroundColor: "#1f3a24", color: "#9fd8ac", borderColor: "#3f6b4a" };
    if (s === "falsch zugeschrieben" || s === "falsch zitiert") return { backgroundColor: "#6b2024", color: "#f0a878", borderColor: "#a03a20" };
    if (s === "sinngem\xE4\xDF") return { backgroundColor: "#3a2a0a", color: "#f0c869", borderColor: "#8a6238" };
    return { backgroundColor: "#3a1218", color: "#d8c690", borderColor: "#5c2018" };
  };
  const gefiltert = statusFilter === "Alle" ? QUOTES : QUOTES.filter((q) => q.status === statusFilter);
  const falsche = QUOTES.filter((q) => q.status === "falsch zugeschrieben" || q.status === "falsch zitiert").length;
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" }, QUOTES.length, " historische Zitate \u2014 jedes mit einer Angabe dazu, wie gut es belegt ist."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-4 max-w-2xl" }, "Bei ", falsche, " davon stimmt die \xFCbliche Zuschreibung nachweislich nicht. Sie stehen trotzdem hier \u2013 mit Richtigstellung, denn genau das sind die, die man sonst weitererz\xE4hlt."),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      ["Alle", ...vorhanden].map((s) => /* @__PURE__ */ React.createElement("button", {
        key: s,
        onClick: () => setStatusFilter(s),
        className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${statusFilter === s ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
      }, s, s === "Alle" ? "" : ` (${QUOTES.filter((q) => q.status === s).length})`))
    ),
    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      gefiltert.map((q, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" },
        /* @__PURE__ */ React.createElement("span", { className: "inline-block text-[10px] uppercase tracking-wide border rounded px-1.5 py-0.5 mb-2", style: stil(q.status) }, q.status),
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug mb-2" }, "\u201E", q.text, '"'),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#d4af37] font-medium" }, q.author),
        (q.year || q.note) && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mt-0.5 leading-snug" }, [q.year, q.note].filter(Boolean).join(" \xB7 "))
      ))
    )
  );
}
function LaenderTab({ ziel }) {
  const countries = Object.keys(COUNTRY_TIMELINES);
  const [country, setCountry] = useState(countries[0]);
  React.useEffect(() => { if (ziel && COUNTRY_TIMELINES[ziel]) setCountry(ziel); }, [ziel]);
  const data = COUNTRY_TIMELINES[country];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-5 max-w-2xl" }, "Eigene chronologische Zeitleisten f\xFCr ausgew\xE4hlte L\xE4nder \u2014 quer durch alle Epochen hinweg."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, countries.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCountry(c),
      className: "px-3 py-1.5 rounded text-sm font-medium border",
      style: country === c ? { backgroundColor: "#5c1a1e", color: "#f0d878", borderColor: COUNTRY_TIMELINES[c].color } : { borderColor: "#5c2018", color: "#b8905a" }
    },
    c
  ))), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l border-[#5c2018] ml-2" }, data.events.map((e, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-6 ml-5" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#4a1015]",
      style: { backgroundColor: data.color }
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: data.color } }, formatYear(e.year)), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, e.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, e.text)))));
}
function MythenTab() {
  const [cat, setCat] = useState("Alle");
  const [typeFilter, setTypeFilter] = useState("Alle");
  const categories = ["Alle", ...Array.from(new Set(MYTHEN.map((m) => m.category)))];
  const types = ["Alle", ...Array.from(new Set(MYTHEN.map((m) => m.type)))];
  const filtered = MYTHEN.filter(
    (m) => (cat === "Alle" || m.category === cat) && (typeFilter === "Alle" || m.type === typeFilter)
  );
  const typeStyle = (t) => {
    if (t === "Mythos") return { backgroundColor: "#6b2024", color: "#e2a45c", borderColor: "#8a3020" };
    if (t === "Kuriosum") return { backgroundColor: "#3a2a0a", color: "#f0c869", borderColor: "#8a6238" };
    return { backgroundColor: "#3a1218", color: "#d8c690", borderColor: "#5c2018" };
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" }, MYTHEN.length, " entlarvte Mythen, \xFCberraschende Kuriosit\xE4ten und richtiggestellte Legenden der Geschichte \u2014 von der Antike bis in die Moderne."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-2" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCat(c),
      className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${cat === c ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    c
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, types.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      onClick: () => setTypeFilter(t),
      className: `px-2.5 py-1 rounded text-xs font-medium border ${typeFilter === t ? "bg-[#5c1a1e] text-[#f0d878] border-[#e0b84a]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    t
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, filtered.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide border rounded px-1.5 py-0.5", style: typeStyle(m.type) }, m.type), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238]" }, m.category)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1 leading-snug" }, m.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, m.text), m.quelle && /* @__PURE__ */ React.createElement("p", { className: "mt-2 pt-2 border-t border-[#5c2018] text-[11px] text-[#8a6238] leading-snug" }, "Beleg: ", m.quelle))), filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#b8905a] text-sm" }, "Keine Treffer.")));
}
function PersonenTab() {
  const [query, setQuery] = useState("");
  const all = useMemo(
    () => EPOCHS.flatMap((ep) => ep.figures.map((f) => ({ ...f, epochName: ep.name, color: ep.color }))),
    []
  );
  const filtered = all.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative mb-2 max-w-sm" }, /* @__PURE__ */ React.createElement(Search, { size: 15, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8a6238]" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: query,
      onChange: (e) => setQuery(e.target.value),
      placeholder: "Person suchen\u2026",
      className: "w-full pl-9 pr-3 py-2 rounded-md bg-[#5c1a1e] border border-[#5c2018] text-[#e0b84a] text-sm placeholder-[#8a6238] focus:outline-none focus:border-[#d4af37]"
    }
  )), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-4 font-mono" }, all.length, " Pers\xF6nlichkeiten insgesamt"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, filtered.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${f.color}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, f.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs mb-1", style: { color: f.color } }, f.years), /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, f.epochName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, f.text))), filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#b8905a] text-sm" }, "Keine Treffer.")));
}
function NationenTab() {
  const all = EPOCHS.flatMap((ep) => ep.nations.map((n) => ({ ...n, epochName: ep.name, color: ep.color })));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-4 font-mono" }, all.length, " Nationen & Reiche"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, all.map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${n.color}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, n.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, n.epochName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, n.text)))));
}
function LernenTab() {
  const [mode, setMode] = useState("karten");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizYear, setQuizYear] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  // Sitzungsstand oben, Gesamtbilanz dauerhaft im Browser
  const [bilanz, setBilanz] = useGespeichert("lernen.bilanz", { richtig: 0, gesamt: 0 });
  const shuffled = useMemo(() => [...FACTS].sort(() => Math.random() - 0.5), []);
  const current = shuffled[idx % shuffled.length];
  function newQuizQuestion(i) {
    const fact = shuffled[i % shuffled.length];
    const distractors = [...FACTS].filter((f) => f.title !== fact.title).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [fact, ...distractors].sort(() => Math.random() - 0.5);
    setOptions(opts);
    setQuizYear(fact);
    setSelected(null);
  }
  React.useEffect(() => {
    if (mode === "quiz") newQuizQuestion(idx);
  }, [mode]);
  function nextCard() {
    setFlipped(false);
    setIdx((i) => i + 1);
  }
  function nextQuiz(correct) {
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    setBilanz({ richtig: bilanz.richtig + (correct ? 1 : 0), gesamt: bilanz.gesamt + 1 });
    setTimeout(() => {
      const next = idx + 1;
      setIdx(next);
      newQuizQuestion(next);
    }, 700);
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-4 font-mono" }, FACTS.length, " Jahreszahlen in der Datenbank"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mb-6" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setMode("karten"),
      className: `px-3 py-1.5 rounded-md text-sm font-medium border ${mode === "karten" ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    "Karteikarten"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setMode("quiz"),
      className: `px-3 py-1.5 rounded-md text-sm font-medium border ${mode === "quiz" ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    "Jahreszahlen-Quiz"
  )), mode === "karten" && /* @__PURE__ */ React.createElement("div", { className: "max-w-md" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: () => setFlipped((f) => !f),
      className: "cursor-pointer rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-8 h-56 flex flex-col items-center justify-center text-center select-none",
      style: { borderLeft: `4px solid ${current.color}` }
    },
    !flipped ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-3" }, current.epoch), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-xl text-[#e0b84a]" }, current.title), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mt-4" }, "Tippen zum Umdrehen")) : /* @__PURE__ */ React.createElement("p", { className: "font-mono text-3xl", style: { color: current.color } }, formatYear(current.year))
  ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mt-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238]" }, "Karte ", idx % shuffled.length + 1, " / ", shuffled.length), /* @__PURE__ */ React.createElement("button", { onClick: nextCard, className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#5c1a1e] text-[#f0d878] border border-[#d4af37] text-sm font-medium" }, "N\xE4chste ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 15 })))), mode === "quiz" && quizYear && /* @__PURE__ */ React.createElement("div", { className: "max-w-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3 mb-2 flex-wrap" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238]" }, "Diese Runde: ", score.correct, " / ", score.total, bilanz.gesamt > 0 ? " · insgesamt " + bilanz.richtig + " / " + bilanz.gesamt + " (" + Math.round(bilanz.richtig / bilanz.gesamt * 100) + " %)" : ""), bilanz.gesamt > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => setBilanz({ richtig: 0, gesamt: 0 }), className: "text-xs text-[#8a6238] underline hover:text-[#e0b84a]" }, "Bilanz zurücksetzen")), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-6 mb-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, "In welchem Jahr geschah\u2026"), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a]" }, quizYear.title)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, options.map((o, i) => {
    const isCorrect = o.year === quizYear.year;
    const isSelected = selected !== null && o.year === selected;
    let cls = "border-[#5c2018] text-[#d8c690]";
    if (selected !== null) {
      if (isCorrect) cls = "border-green-600 bg-green-950 text-green-300";
      else if (isSelected) cls = "border-red-700 bg-red-950 text-red-300";
    }
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        disabled: selected !== null,
        onClick: () => {
          setSelected(o.year);
          nextQuiz(o.year === quizYear.year);
        },
        className: `px-3 py-3 rounded-md border font-mono text-sm flex items-center justify-center gap-1.5 ${cls}`
      },
      selected !== null && isCorrect && /* @__PURE__ */ React.createElement(Check, { size: 14 }),
      formatYear(o.year)
    );
  }))));
}
function VerblueffendTab() {
  const [shown, setShown] = useState(SURPRISING_FACTS.map((_, i) => i).sort(() => Math.random() - 0.5));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-5 gap-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] max-w-xl" }, SURPRISING_FACTS.length, " kuriose, \xFCberraschende und wenig bekannte historische Zusammenh\xE4nge."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShown([...shown].sort(() => Math.random() - 0.5)),
      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#5c2018] text-[#b8905a] text-sm hover:text-[#d8c690] shrink-0"
    },
    /* @__PURE__ */ React.createElement(RotateCcw, { size: 14 }),
    " Mischen"
  )), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, shown.map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4 flex gap-3" }, /* @__PURE__ */ React.createElement(Sparkles, { size: 16, className: "text-[#d4af37] shrink-0 mt-0.5" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#d8c690] leading-relaxed" }, SURPRISING_FACTS[i])))));
}
function Historia() {
  // Der zuletzt geoeffnete Bereich bleibt ueber Sitzungen hinweg erhalten.
  const [tab, setTab] = useGespeichert("reiter", "epochen");
  const [ziel, setZiel] = useState(null);
  SPRINGE = (reiter, eintrag) => { setZiel(eintrag ? { reiter, eintrag, n: Date.now() } : null); setTab(reiter); };
  const zielFuer = (reiter) => (ziel && ziel.reiter === reiter ? ziel.eintrag : null);
  React.useEffect(() => {
    document.documentElement.style.colorScheme = "dark";
    let meta = document.querySelector('meta[name="color-scheme"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "color-scheme";
      document.head.appendChild(meta);
    }
    meta.content = "dark";
  }, []);
  return /* @__PURE__ */ React.createElement("div", { id: "historia-root", className: "min-h-screen bg-[#4a1015] font-sans", style: { fontFamily: "'Source Sans 3', ui-sans-serif, system-ui" } }, /* @__PURE__ */ React.createElement("style", null, `
        @font-face { font-family: 'Source Sans 3'; font-style: normal; font-weight: 400 600; font-display: swap; src: url('./font-sourcesans3.woff2') format('woff2'); }
        @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 500 600; font-display: swap; src: url('./font-fraunces.woff2') format('woff2'); }
        @font-face { font-family: 'JetBrains Mono'; font-style: normal; font-weight: 400 500; font-display: swap; src: url('./font-jetbrains.woff2') format('woff2'); }
        html, body { background-color: #4a1015; color-scheme: dark; color: #f0e6c8; }
        #historia-root, #historia-root * { color-scheme: dark; }
        .font-serif { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `), /* @__PURE__ */ React.createElement(Header, { tab, setTab }), /* @__PURE__ */ React.createElement("main", { className: "max-w-6xl mx-auto px-4 py-6" }, tab === "suche" && /* @__PURE__ */ React.createElement(SucheTab, null), tab === "epochen" && /* @__PURE__ */ React.createElement(EpochenTab, { ziel: zielFuer("epochen"), key: "ep" + (ziel ? ziel.n : 0) }), tab === "vertiefungen" && /* @__PURE__ */ React.createElement(VertiefungenTab, { ziel: zielFuer("vertiefungen"), key: "vt" + (ziel ? ziel.n : 0) }), tab === "themen" && /* @__PURE__ */ React.createElement(ThemenTab, { ziel: zielFuer("themen"), key: "th" + (ziel ? ziel.n : 0) }), tab === "schluessel" && /* @__PURE__ */ React.createElement(SchluesselmomenteTab, null), tab === "laender" && /* @__PURE__ */ React.createElement(LaenderTab, { ziel: zielFuer("laender"), key: "la" + (ziel ? ziel.n : 0) }), tab === "schlachten" && /* @__PURE__ */ React.createElement(SchlachtenTab, null), tab === "zitate" && /* @__PURE__ */ React.createElement(ZitateTab, null), tab === "mythen" && /* @__PURE__ */ React.createElement(MythenTab, null), tab === "mysterien" && /* @__PURE__ */ React.createElement(MysterienTab, { ziel: zielFuer("mysterien"), key: "my" + (ziel ? ziel.n : 0) }), tab === "zeitschnitt" && /* @__PURE__ */ React.createElement(ZeitschnittTab, null), tab === "personen" && /* @__PURE__ */ React.createElement(PersonenTab, null), tab === "nationen" && /* @__PURE__ */ React.createElement(NationenTab, null), tab === "lernen" && /* @__PURE__ */ React.createElement(LernenTab, null), tab === "fragen" && /* @__PURE__ */ React.createElement(FragenTab, null), tab === "verblueffend" && /* @__PURE__ */ React.createElement(VerblueffendTab, null)));
}

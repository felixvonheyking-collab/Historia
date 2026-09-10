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

/* ----------------------------------------------------- Listenbausteine

   Gemessen bei 375 Pixel Fensterbreite: Die Schlachten waren 81.900
   Pixel lang, also etwa hundert Bildschirmhoehen, die Mythen 52.800.
   Neun von dreizehn Listen hatten kein Suchfeld. Diese drei Bausteine
   sind die Antwort darauf und werden von allen Listen benutzt, damit
   Aussehen und Verhalten ueberall gleich sind.

   Aufklappen lohnt nur, wo eine Karte hoch ist - bei den Schlachten mit
   ihren Strukturdaten. Wo der Text selbst die Pointe ist, etwa bei
   Mythen und Fakten, waere Einklappen sinnlos; dort helfen Spalten und
   ein Suchfeld. Die Wahl faellt deshalb je Liste, nicht pauschal. */

// Suchfeld im Stil der App. Eine Stelle, damit es nicht in jeder Liste
// anders aussieht.
function Suchfeld({ wert, setWert, platzhalter, anzahl, gefunden }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mb-4" },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-2 max-w-xl" },
      /* @__PURE__ */ React.createElement(Search, { size: 15, className: "text-[#bd9563] shrink-0" }),
      /* @__PURE__ */ React.createElement("input", {
        value: wert,
        onChange: (e) => setWert(e.target.value),
        placeholder: platzhalter,
        className: "bg-transparent text-[15px] text-[#e8d5b0] placeholder-[#bd9563] focus:outline-none flex-1"
      }),
      wert && /* @__PURE__ */ React.createElement("button", {
        onClick: () => setWert(""),
        className: "text-xs text-[#bd9563] hover:text-[#e0b84a]"
      }, "löschen")
    ),
    wert && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#bd9563] font-mono mt-1.5" },
      gefunden === 0 ? "Keine Treffer." : gefunden + " von " + anzahl)
  );
}

// Findet ein Wort in beliebigen Feldern eines Eintrags.
function passt(eintrag, felder, suche) {
  if (!suche) return true;
  const q = suche.trim().toLowerCase();
  if (!q) return true;
  const heu = felder.map((f) => String(eintrag[f] === undefined ? "" : eintrag[f])).join(" ").toLowerCase();
  return q.split(/\s+/).every((w) => heu.includes(w));
}

/* Aufklappbare Karte. Zugeklappt stehen Jahr, Titel und eine Zeile
   Zusammenfassung, offen der ganze Inhalt. Der Kopf ist ein Knopf,
   damit Tastatur und Vorleseprogramm damit umgehen koennen. */
function AufklappKarte({ jahr, titel, zeile, marken, akzent, anker, kinder, offenVorgabe }) {
  const [offen, setOffen] = useState(!!offenVorgabe);
  return /* @__PURE__ */ React.createElement("div", {
    "data-anker": anker,
    className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] overflow-hidden"
  },
    /* @__PURE__ */ React.createElement("button", {
      onClick: () => setOffen(!offen),
      "aria-expanded": offen ? "true" : "false",
      className: "w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-[#6b2024] transition-colors"
    },
      /* @__PURE__ */ React.createElement("div", { className: "flex-1" },
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap mb-0.5" },
          jahr && /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs", style: { color: akzent || "#d4af37" } }, jahr),
          (marken || []).map((m, i) => /* @__PURE__ */ React.createElement("span", {
            key: i,
            className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5"
          }, m))
        ),
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[17px] text-[#e0b84a] leading-snug" }, titel),
        zeile && !offen && /* @__PURE__ */ React.createElement("p", {
          className: "text-sm text-[#c2a06a] leading-snug mt-1",
          // Auf zwei Zeilen beschneiden. Ohne das steht der ganze Text in
          // der Zusammenfassung, und die Karte ist zugeklappt so hoch wie
          // offen - genau das hatte die Messung gezeigt.
          style: { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }
        }, zeile)
      ),
      /* @__PURE__ */ React.createElement(ChevronRight, {
        size: 18,
        className: "text-[#bd9563] shrink-0 mt-1 transition-transform",
        style: offen ? { transform: "rotate(90deg)" } : undefined
      })
    ),
    offen && /* @__PURE__ */ React.createElement("div", { className: "px-4 pb-4 pt-1 border-t border-[#5c2018]" }, kinder)
  );
}

/* Nachladen in Haeppchen. Auf einem Telefon bleibt jede Liste
   einspaltig; die zusaetzlichen Spalten greifen erst ab 1024 Pixel und
   halfen dort gar nichts. Was hilft, ist weniger auf einmal: 30
   Eintraege, dann auf Wunsch mehr. Wer sucht oder filtert, faengt wieder
   bei 30 an - sonst muesste man sich durch alte Nachladungen scrollen. */
function useNachladen(anzahl, schritt, alleZeigen) {
  const [grenze, setGrenze] = useState(schritt || 30);
  React.useEffect(() => { setGrenze(schritt || 30); }, [anzahl]);
  // Ein Sprung aus der Suche zeigt auf einen bestimmten Eintrag. Waere
  // der noch nicht geladen, fehlte der Anker und der Sprung ginge ins
  // Leere - gemessen genau so beim ersten Versuch.
  if (alleZeigen) return [anzahl, null];
  const mehr = /* @__PURE__ */ React.createElement("div", null,
    anzahl > grenze && /* @__PURE__ */ React.createElement("button", {
      onClick: () => setGrenze(grenze + (schritt || 30)),
      className: "mt-4 w-full rounded-md border border-[#5c2018] bg-[#5c1a1e] py-2.5 text-sm text-[#c9a877] hover:text-[#f0d878] hover:border-[#d4af37]"
    }, "Weitere ", Math.min(schritt || 30, anzahl - grenze), " von ", anzahl - grenze, " zeigen")
  );
  return [grenze, mehr];
}

/* Sprungziele in langen Listen.

   Die Suche kann auf einen einzelnen Eintrag zeigen, der in einer Liste
   von 80.000 Pixeln Laenge steht. Ohne Hilfe landet man oben und sucht
   von Hand - gemessen lag ein Treffer 9.797 Pixel unter dem Seitenanfang.
   Deshalb tragen die Eintraege dieser Listen ein data-anker-Merkmal, und
   dieser Haken rollt es in den Blick und hebt es kurz hervor.

   Warum mit Timer statt requestAnimationFrame: rAF laeuft in einem
   Browsertab im Hintergrund nicht, und genau dort wird die App oft
   geoeffnet. Derselbe Grund wie bei der Zurueck-Navigation. */
function useSprungziel(ziel) {
  React.useEffect(() => {
    if (!ziel || typeof document === "undefined") return;
    let versuche = 0;
    const suchen = () => {
      const el = document.querySelector('[data-anker="' + String(ziel).replace(/"/g, '\\"') + '"]');
      if (el) {
        el.scrollIntoView({ block: "center" });
        el.setAttribute("data-hervor", "1");
        setTimeout(() => el.removeAttribute("data-hervor"), 2800);
        return;
      }
      // Der Eintrag kann noch nicht gerendert sein, deshalb nachfassen.
      if (++versuche < 25) setTimeout(suchen, 40);
    };
    setTimeout(suchen, 0);
  }, [ziel]);
}

// Aus einem Titel einen Ankernamen machen. Muss in der Suche und in der
// Liste dasselbe ergeben, sonst findet der Sprung nichts.
function ankerName(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

function VertiefungAbschnitt({ titel, text }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mb-5" },
    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, titel),
    /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, text)
  );
}

/* Buchempfehlungen: gemeinsam genutzt von Vertiefungen und Themen.
   Absichtlich getrennt von den Quellen - Quellen belegen, Empfehlungen
   fuehren weiter. Jeder Eintrag sagt, warum er dasteht. */
function Buchempfehlungen({ liste }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mt-6 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2.5" }, "Zum Weiterlesen"),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px" } },
      liste.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i },
        /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 flex-wrap" },
          /* @__PURE__ */ React.createElement("span", { className: "font-serif text-[15px] text-[#e0b84a]" }, b.titel),
          b.jahr && /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#bd9563]" }, b.jahr)),
        /* @__PURE__ */ React.createElement("div", { className: "text-sm text-[#c9a877]" }, b.autor),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mt-0.5" }, b.warum)
      ))
    )
  );
}

/* Grafiken: eigene Vektorzeichnungen, nach Vertiefungs-Id in
   data-grafiken.js abgelegt statt im Vertiefungseintrag selbst - so bleibt
   die grosse Datendatei unberuehrt und Grafiken lassen sich unabhaengig
   nachliefern.

   Zwei bewusste Festlegungen:
   - Die Geometrie steht als SVG-Quelltext in den Daten und wird mit
     dangerouslySetInnerHTML eingesetzt. Das ist hier vertretbar, weil der
     Inhalt ausschliesslich aus dieser Datei stammt; es gelangt keine
     Eingabe von aussen hinein.
   - Farben und Maße stehen im SVG selbst, nicht in Tailwind-Klassen. Das
     vorgebaute tailwind.css kennt neu erfundene Klassen nicht, und ein
     Fehler dort waere unsichtbar - dieselbe Falle wie beim Zeitstrahl. */
function Grafik({ bild }) {
  return /* @__PURE__ */ React.createElement("figure", { className: "mb-5 rounded-lg border border-[#5c2018] bg-[#4a1418] p-3" },
    /* @__PURE__ */ React.createElement("div", {
      style: { width: "100%", overflowX: "auto" },
      dangerouslySetInnerHTML: {
        __html: '<svg viewBox="' + bild.viewBox + '" role="img" aria-label="' +
          bild.titel.replace(/"/g, "&quot;") + '" ' +
          'style="width:100%;height:auto;display:block;min-width:' + (bild.mindestbreite || 320) + 'px">' +
          bild.svg + "</svg>"
      }
    }),
    /* @__PURE__ */ React.createElement("figcaption", { className: "mt-2" },
      /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37]" }, bild.titel),
      bild.beschriftung && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mt-1" }, bild.beschriftung),
      bild.quelle && /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#bd9563] leading-snug mt-1" }, "Grundlage: ", bild.quelle)
    )
  );
}

function grafikenFuer(id) {
  return (typeof GRAFIKEN !== "undefined" && GRAFIKEN[id]) || [];
}

/* Fotos und Abbildungen. Anders als die Grafiken sind das fremde Werke,
   deshalb steht unter jedem Bild die Herkunft: Urheber, Lizenz und ein
   Verweis auf die Quellenseite. Bei CC-BY und CC-BY-SA ist das Bedingung
   der Lizenz, bei gemeinfreien Werken eine Frage des Anstands.

   loading="lazy" und die festen Maße sind kein Beiwerk: Ohne sie laedt
   das Handy Bilder, die niemand ansieht, und die Seite springt beim
   Nachladen. */
function Abbildung({ bild }) {
  return /* @__PURE__ */ React.createElement("figure", { className: "mb-5 rounded-lg border border-[#5c2018] bg-[#4a1418] p-3" },
    /* @__PURE__ */ React.createElement("img", {
      src: bild.datei,
      alt: bild.zeigt,
      width: bild.breite,
      height: bild.hoehe,
      loading: "lazy",
      decoding: "async",
      style: { width: "100%", height: "auto", display: "block", borderRadius: "4px" }
    }),
    /* @__PURE__ */ React.createElement("figcaption", { className: "mt-2" },
      /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37]" }, bild.zeigt),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mt-1" }, bild.bildunterschrift),
      /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#bd9563] leading-snug mt-1" },
        bild.urheber, " · ", bild.lizenz, " · ",
        /* @__PURE__ */ React.createElement("a", {
          href: bild.herkunft, target: "_blank", rel: "noopener noreferrer",
          className: "underline hover:text-[#d4af37]"
        }, "Quelle")
      )
    )
  );
}

function bildFuer(id) {
  return typeof BILDER !== "undefined" ? BILDER.find((b) => b.id === id) : undefined;
}

function VertiefungDetail({ eintrag, onBack, gelesen, toggleGelesen }) {
  const epoche = EPOCHS.find((e) => e.id === eintrag.epoche);
  const bilder = grafikenFuer(eintrag.id);
  const foto = bildFuer(eintrag.id);
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("button", {
      onClick: onBack,
      className: "flex items-center gap-1.5 text-[#c9a877] hover:text-[#f0d878] mb-4 text-sm"
    }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu allen Vertiefungen"),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" },
      /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, eintrag.zeitraum),
      epoche && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5" }, epoche.name),
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5" }, eintrag.region),
      // Wer zehn Minuten Zeit hat, soll vorher sehen, dass es dreissig werden.
      eintrag.tiefe && /* @__PURE__ */ React.createElement("span", {
        className: "text-[10px] uppercase tracking-wide text-[#f0d878] border border-[#d4af37] rounded px-1.5 py-0.5"
      }, "Ausführlich")
    ),
    /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-2xl md:text-3xl text-[#f0d878] mb-3" }, eintrag.titel),
    /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] italic leading-relaxed border-l-2 border-[#d4af37] pl-4 mb-6" }, eintrag.leitsatz),

    // Das Foto steht oben, die erklaerende Grafik weiter unten nach dem
    // Verlauf. Ein Bild zeigt, worum es geht; eine Grafik ordnet, was
    // man gelesen hat.
    foto && /* @__PURE__ */ React.createElement(Abbildung, { bild: foto }),

    eintrag.zahlen && eintrag.zahlen.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2 mb-6" },
      eintrag.zahlen.map((z, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2" },
        /* @__PURE__ */ React.createElement("div", { className: "font-mono text-sm text-[#f0d878]" }, z.wert),
        /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#c2a06a] leading-snug" }, z.was)
      ))
    ),

    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Vorgeschichte", text: eintrag.vorgeschichte }),
    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Verlauf", text: eintrag.verlauf }),

    // Die Grafik steht nach dem Verlauf: Sie soll das Gelesene ordnen,
    // nicht vorwegnehmen.
    bilder.map((b, i) => /* @__PURE__ */ React.createElement(Grafik, { key: "g" + i, bild: b })),

    // Nur bei den grossen Wendepunkten: zusaetzliche Abschnitte mit eigener
    // Ueberschrift, zwischen Verlauf und Folgen.
    (eintrag.tiefe || []).map((a, i) => /* @__PURE__ */ React.createElement(VertiefungAbschnitt, {
      key: "t" + i, titel: a.titel, text: a.text
    })),
    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Folgen", text: eintrag.folgen }),

    /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, "Was strittig ist"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, eintrag.strittig)
    ),

    eintrag.literatur && /* @__PURE__ */ React.createElement(Buchempfehlungen, { liste: eintrag.literatur }),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#c2a06a] leading-relaxed" },
        eintrag.quellen.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", q))
      )
    ),

    /* @__PURE__ */ React.createElement("button", {
      onClick: () => toggleGelesen(eintrag.id),
      className: `mt-5 flex items-center gap-2 px-3 py-2 rounded text-sm border ${gelesen ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]"}`
    }, /* @__PURE__ */ React.createElement(Check, { size: 15 }), gelesen ? "Gelesen" : "Als gelesen merken")
  );
}

function VertiefungenTab({ ziel }) {
  const [offen, setOffen] = useState(null);
  const [, setZuletzt] = useGespeichert("zuletzt.gelesen", null);
  React.useEffect(() => { if (ziel) setOffen(ziel); }, [ziel]);
  // Fuer "Weiterlesen" auf der Startseite
  React.useEffect(() => { if (offen) setZuletzt(offen); }, [offen]);
  const [epochenFilter, setEpochenFilter] = useState("Alle");
  const [suche, setSuche] = useState("");
  const [gelesen, setGelesen] = useGespeichert("vertiefungen.gelesen", []);

  const toggleGelesen = (id) => setGelesen((bisher) => bisher.includes(id) ? bisher.filter((x) => x !== id) : [...bisher, id]);

  const q = suche.trim().toLowerCase();
  const gefiltert = VERTIEFUNGEN.filter((v) => {
    const passtEpoche = epochenFilter === "Alle" || v.epoche === epochenFilter;
    const passtSuche = !q || (v.titel + " " + v.leitsatz + " " + v.region + " " + v.zeitraum).toLowerCase().includes(q);
    return passtEpoche && passtSuche;
  });
  // Der Haken muss vor jeder Verzweigung stehen: Haken laufen bei jedem
  // Durchlauf in derselben Reihenfolge, sonst bricht React ab. Genau das
  // war Fehler 300, den der Klicktest gefunden hat.
  const [grenze, mehr] = useNachladen(gefiltert.length, 40, !!ziel);

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

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      VERTIEFUNGEN.length, " ausführliche Darstellungen großer Wendepunkte — mit Vorgeschichte, Verlauf, Folgen und dem, was die Forschung offen lässt."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-4 max-w-2xl" },
      "Jeder Artikel nennt seine Quellen. Wo Zahlen Schätzungen sind, steht das dabei."),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-1.5 max-w-md" },
      /* @__PURE__ */ React.createElement(Search, { size: 15, className: "text-[#bd9563]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: suche,
        onChange: (e) => setSuche(e.target.value),
        placeholder: "Suchen …",
        className: "bg-transparent text-sm text-[#e8d5b0] placeholder-[#bd9563] focus:outline-none flex-1"
      })
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      ["Alle", ...EPOCHS.map((e) => e.id)].map((id) => /* @__PURE__ */ React.createElement("button", {
        key: id,
        onClick: () => setEpochenFilter(id),
        className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${epochenFilter === id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, id === "Alle" ? "Alle" : (EPOCHS.find((e) => e.id === id) || {}).name))
    ),

    gefiltert.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Nichts gefunden."),

    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      gefiltert.slice(0, grenze).map((v) => {
        const epoche = EPOCHS.find((e) => e.id === v.epoche);
        const istGelesen = gelesen.includes(v.id);
        return /* @__PURE__ */ React.createElement("button", {
          key: v.id,
          onClick: () => setOffen(v.id),
          className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors"
        },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, v.zeitraum),
            epoche && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5" }, epoche.name),
            istGelesen && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#f0d878] border border-[#d4af37] rounded px-1.5 py-0.5" }, "gelesen")
          ),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, v.titel),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, v.leitsatz),
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#bd9563]" }, "Lesen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
        );
      })
    ),
    mehr,

    gelesen.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "mt-6 text-xs text-[#bd9563]" },
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

    // Manche Themen haben Abschnitte - bei einer Stadtgeschichte etwa die
    // Reihe der Herrschaften. Sie stehen vorweg als Ueberblick, damit der
    // rote Faden sichtbar ist, bevor die Einzelheiten kommen.
    eintrag.abschnitte && /* @__PURE__ */ React.createElement("div", { className: "mb-7" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" }, "Im Überblick"),
      /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2" },
        eintrag.abschnitte.map((a, i) => /* @__PURE__ */ React.createElement("div", {
          key: i,
          className: "rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2"
        },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-serif text-[15px] text-[#e0b84a]" }, a.name),
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#d4af37]" }, a.zeitraum)),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mt-0.5" }, a.kurz)
        )))),

    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-3" },
      eintrag.stationen.length, " Stationen"),

    /* @__PURE__ */ React.createElement("div", { className: "relative pl-5 border-l border-[#5c2018]" },
      eintrag.stationen.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "relative mb-5" },
        /* @__PURE__ */ React.createElement("span", { className: "absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-[#d4af37]" }),
        /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 flex-wrap mb-0.5" },
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, formatYear(s.jahr)),
          s.herrschaft && /* @__PURE__ */ React.createElement("span", {
            className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5"
          }, s.herrschaft)),
        /* @__PURE__ */ React.createElement("div", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, s.titel),
        /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, s.text),
        (() => {
          const v = s.vertiefung ? VERTIEFUNGEN.find((x) => x.id === s.vertiefung) : null;
          return v && /* @__PURE__ */ React.createElement("button", {
            onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", v.id, { reiter: "themen", eintrag: eintrag.id, label: eintrag.titel }); },
            className: "mt-1.5 inline-flex items-center gap-1 text-xs text-[#c9a877] hover:text-[#f0d878]"
          }, "Vertiefung: ", v.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }));
        })()
      ))
    ),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 mb-5 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, "Was strittig ist"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, eintrag.strittig)
    ),

    eintrag.literatur && /* @__PURE__ */ React.createElement(Buchempfehlungen, { liste: eintrag.literatur }),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#c2a06a] leading-relaxed" },
        eintrag.quellen.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", q))
      )
    ),

    /* @__PURE__ */ React.createElement("button", {
      onClick: () => toggleGelesen(eintrag.id),
      className: `mt-5 flex items-center gap-2 px-3 py-2 rounded text-sm border ${gelesen ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]"}`
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
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-6 max-w-2xl" },
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
            /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5" },
              formatYear(t.stationen[0].jahr), " – ", formatYear(t.stationen[t.stationen.length - 1].jahr)),
            istGelesen && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#f0d878] border border-[#d4af37] rounded px-1.5 py-0.5" }, "gelesen")
          ),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, t.titel),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, t.kurz),
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#bd9563]" }, "Lesen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
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
  const feld = "w-full rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2 text-sm text-[#e8d5b0] placeholder-[#bd9563] focus:outline-none focus:border-[#d4af37]";

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Fragen, die beim Lesen entstehen und über das hinausgehen, was hier steht."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-5 max-w-2xl leading-relaxed" },
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
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-2" }, "Offen (" + offene.length + ")"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" },
        offene.map((f) => /* @__PURE__ */ React.createElement("div", { key: f.id, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" },
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug" }, f.frage),
          f.kontext && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#c2a06a] italic mt-1" }, f.kontext),
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mt-2" },
            /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-[#bd9563]" }, "notiert am " + f.gestellt),
            /* @__PURE__ */ React.createElement("button", { onClick: () => setFragen(fragen.filter((x) => x.id !== f.id)), className: "text-[11px] text-[#c2a06a] underline hover:text-[#e0b84a]" }, "Löschen"))
        )))),

    beantwortete.length > 0 && /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-2" }, "Beantwortet (" + beantwortete.length + ")"),
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
                /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-widest text-[#bd9563] mb-1" }, "Quellen"),
                f.quellen.map((q, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-xs text-[#c2a06a]" }, "· " + q))),
              /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#bd9563] mt-3" }, "beantwortet am " + (f.beantwortet || "—")))
          );
        }))),

    fragen.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] max-w-2xl leading-relaxed" },
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

/* =========================================================
   ZEITSTRAHL

   Alle Weltregionen als parallele Baender uebereinander. Der
   Zeitschnitt zeigt einen Moment, der Zeitstrahl zeigt Verlaeufe:
   wo viel passiert, wo Luecken klaffen, was gleichzeitig laeuft.

   Bewusst linear und nicht logarithmisch. Eine logarithmische
   Achse wuerde die Steinzeit sichtbar machen, aber die letzten
   zweitausend Jahre zu einem Strich zusammenquetschen. Statt
   dessen gibt es Zeitfenster zur Auswahl - und der Hinweis, dass
   Eintraege ausserhalb des Fensters nicht verschwinden, sondern
   nur gerade nicht gezeigt werden.
   ========================================================= */

const ZEITFENSTER = [
  { id: "alles", label: "3000 v. Chr. – heute", von: -3000, bis: 2026 },
  { id: "antike", label: "Antike", von: -800, bis: 500 },
  { id: "mittelalter", label: "Mittelalter", von: 500, bis: 1500 },
  { id: "neuzeit", label: "Neuzeit", von: 1500, bis: 1900 },
  { id: "modern", label: "20./21. Jahrhundert", von: 1900, bis: 2026 }
];

function ZeitstrahlTab() {
  const [fensterId, setFensterId] = useGespeichert("zeitstrahl.fenster", "alles");
  const [gewaehlt, setGewaehlt] = useState(null);
  const fenster = ZEITFENSTER.find((f) => f.id === fensterId) || ZEITFENSTER[0];
  const spanne = fenster.bis - fenster.von;

  const regionen = useMemo(() => Object.entries(COUNTRY_TIMELINES).map(([name, d]) => ({
    name,
    farbe: d.color,
    sichtbar: d.events.filter((e) => e.year >= fenster.von && e.year <= fenster.bis),
    gesamt: d.events.length
  })).sort((a, b) => b.sichtbar.length - a.sichtbar.length), [fensterId]);

  const ausserhalb = regionen.reduce((a, r) => a + (r.gesamt - r.sichtbar.length), 0);

  // Beschriftung der Achse: vier Marken in Kurzform. Die lange Form
  // ("1500 n. Chr.") stiess auf schmalen Bildschirmen aneinander.
  const kurzesJahr = (j) => (j < 0 ? Math.abs(j) + " v." : String(j));
  const marken = [0, 1, 2, 3].map((i) => fenster.von + Math.round(spanne * i / 3));

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Alle Weltregionen nebeneinander — jeder Punkt ein Ereignis."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Die Lücken sind so aussagekräftig wie die Häufungen. Manche stehen für Zeiten, aus denen wenig überliefert ist — andere dafür, dass diese Zeitleiste noch nicht fertig ist."),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-5" },
      ZEITFENSTER.map((f) => /* @__PURE__ */ React.createElement("button", {
        key: f.id,
        onClick: () => { setFensterId(f.id); setGewaehlt(null); },
        className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${
          f.id === fensterId ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, f.label))),

    // Achse
    /* @__PURE__ */ React.createElement("div", { className: "relative mb-1 border-b border-[#5c2018]",
      style: { height: "20px", marginLeft: "136px", marginRight: "36px" } },
      marken.map((m, i) => /* @__PURE__ */ React.createElement("span", {
        key: i,
        className: "absolute font-mono text-[10px] text-[#bd9563]",
        style: {
          left: (i / 3) * 100 + "%",
          transform: i === 0 ? "none" : (i === 3 ? "translateX(-100%)" : "translateX(-50%)"),
          whiteSpace: "nowrap"
        }
      }, kurzesJahr(m)))),

    // Baender
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "3px" } },
      regionen.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.name, className: "flex items-center gap-2" },
        /* @__PURE__ */ React.createElement("button", {
          onClick: () => { if (SPRINGE) SPRINGE("laender", r.name); },
          className: "text-right text-[11px] text-[#c2a06a] hover:text-[#f0d878]",
          style: { width: "128px", flexShrink: 0, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
          title: r.name + " — Zeitleiste öffnen"
        }, r.name),
        /* @__PURE__ */ React.createElement("div", {
          className: "relative rounded",
          style: { backgroundColor: "#4a1015", flex: "1 1 0%", height: "22px", minWidth: 0 }
        },
          /* @__PURE__ */ React.createElement("div", {
            style: { position: "absolute", left: 0, right: 0, top: "50%", height: "1px", backgroundColor: r.farbe, opacity: 0.25 }
          }),
          r.sichtbar.map((e, i) => /* @__PURE__ */ React.createElement("button", {
            key: i,
            onClick: () => setGewaehlt({ region: r.name, farbe: r.farbe, ereignis: e }),
            title: formatYear(e.year) + " — " + e.title,
            className: "rounded-full",
            style: {
              position: "absolute",
              top: "50%",
              left: ((e.year - fenster.von) / spanne) * 100 + "%",
              width: "9px",
              height: "9px",
              marginTop: "-4.5px",
              marginLeft: "-4.5px",
              backgroundColor: r.farbe,
              border: gewaehlt && gewaehlt.ereignis === e ? "2px solid #f0d878" : "none",
              cursor: "pointer"
            }
          }))
        ),
        /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] text-[#bd9563] text-right",
          style: { width: "28px", flexShrink: 0 } }, r.sichtbar.length)
      ))),

    ausserhalb > 0 && /* @__PURE__ */ React.createElement("p", { className: "mt-3 font-mono text-[11px] text-[#bd9563]" },
      ausserhalb, " Einträge liegen außerhalb dieses Zeitfensters"),

    // Ausgewaehltes Ereignis
    gewaehlt && /* @__PURE__ */ React.createElement("div", {
      className: "mt-5 rounded-lg border bg-[#5c1a1e] p-4 max-w-3xl",
      style: { borderColor: gewaehlt.farbe }
    },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 flex-wrap mb-1" },
        /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs", style: { color: gewaehlt.farbe } }, formatYear(gewaehlt.ereignis.year)),
        /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#bd9563] uppercase tracking-wide" }, gewaehlt.region)),
      /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#f0d878] mb-1" }, gewaehlt.ereignis.title),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, gewaehlt.ereignis.text),
      (() => {
        const v = gewaehlt.ereignis.vertiefung
          ? VERTIEFUNGEN.find((x) => x.id === gewaehlt.ereignis.vertiefung) : null;
        return v && /* @__PURE__ */ React.createElement("button", {
          onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", v.id); },
          className: "mt-2 inline-flex items-center gap-1 text-xs text-[#c9a877] hover:text-[#f0d878]"
        }, "Vertiefung: ", v.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }));
      })()
    )
  );
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
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-5 max-w-2xl leading-relaxed" },
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
          className: `px-2 py-0.5 rounded text-[11px] font-mono border ${jahr === s.jahr ? "bg-[#7a3020] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]"}`
        }, s.label))
      ),

      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap" },
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr - 100), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]" }, "−100"),
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr - 10), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]" }, "−10"),
        /* @__PURE__ */ React.createElement("input", {
          type: "text", value: eingabe, inputMode: "numeric",
          onChange: (e) => setEingabe(e.target.value),
          onBlur: () => { const n = parseInt(eingabe, 10); if (!isNaN(n)) setzeJahr(n); else setEingabe(String(jahr)); },
          onKeyDown: (e) => { if (e.key === "Enter") { const n = parseInt(eingabe, 10); if (!isNaN(n)) setzeJahr(n); } },
          "aria-label": "Jahr eingeben",
          className: "w-24 rounded border border-[#5c2018] bg-[#4a1015] px-2 py-1 text-sm text-[#e8d5b0] focus:outline-none focus:border-[#d4af37]"
        }),
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr + 10), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]" }, "+10"),
        /* @__PURE__ */ React.createElement("button", { onClick: () => setzeJahr(jahr + 100), className: "px-2 py-1 rounded text-xs border border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a]" }, "+100"),
        /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-[#bd9563]" }, "negative Zahlen = vor Christus")
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
          /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-[#bd9563]" }, jahrText(l.ereignis.year) + " · " + abstandText(l.differenz))
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
            /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563]" }, e.epoche)),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[15px] text-[#e0b84a] leading-snug" }, e.title),
          /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#c2a06a] leading-relaxed mt-1" }, e.text)
        )))
    ),

    nahe.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] mb-7" },
      "Aus diesem Zeitraum ist in den Epochen kein Ereignis verzeichnet. Die Länder oben zeigen trotzdem, was zeitlich am nächsten liegt."),

    vertiefungen.length > 0 && /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" }, "Dazu gibt es Vertiefungen"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" },
        vertiefungen.map((v) => /* @__PURE__ */ React.createElement("span", {
          key: v.id,
          className: "px-2.5 py-1.5 rounded text-xs border border-[#5c2018] text-[#c2a06a]"
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
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563] border border-[#5c2018] rounded px-1.5 py-0.5" }, eintrag.region),
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
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-[#bd9563] mr-2" }, "dafür"), e.dafuer),
        e.dagegen && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" },
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-[#bd9563] mr-2" }, "dagegen"), e.dagegen)
      ))),

    /* @__PURE__ */ React.createElement(Abschnitt, { titel: "Stand der Forschung", text: eintrag.forschungsstand }),

    /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-lg border border-[#5c2018] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-1.5" }, "Abzugrenzen davon"),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, eintrag.abgrenzung)),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#c2a06a] leading-relaxed" },
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
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Jeder Eintrag trennt, was gesichert ist, von dem, was offen bleibt, und nennt zu jeder Erklärung auch das, was dagegen spricht. Die gelösten Fälle stehen bewusst daneben: Rätsel sind selten unlösbar — meist fehlt nur die Methode, und irgendwann kommt sie."),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      [["alle", "Alle (" + MYSTERIEN.length + ")"], ["ungeklaert", "Ungeklärt (" + zaehler.ungeklaert + ")"], ["teilweise", "Teilweise (" + zaehler.teilweise + ")"], ["geloest", "Gelöst (" + zaehler.geloest + ")"]]
        .map(([id, label]) => /* @__PURE__ */ React.createElement("button", {
          key: id, onClick: () => setFilter(id),
          className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${filter === id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
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
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#bd9563]" }, "Ansehen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
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

  DYNASTIEN.forEach((r) => r.perioden.forEach((p) => p.dynastien.forEach((d) => {
    rein({ art: "Dynastie", titel: d.name + " (" + r.reich + ")", text: d.kurz,
           kontext: d.zeitraum + " \xB7 " + p.name, reiter: "dynastien", ziel: r.id });
    d.herrscher.forEach((h) => rein({
      art: "Herrscher", titel: h.name, text: h.kurz,
      kontext: h.regierung + " \xB7 " + d.name + " \xB7 " + r.reich,
      reiter: h.vertiefung ? "vertiefungen" : "dynastien",
      ziel: h.vertiefung || r.id
    }));
  })));

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
    kontext: formatYear(s.year) + " · " + s.category, jahr: s.year, reiter: "schluessel", ziel: ankerName(s.title)
  }));

  BATTLES.forEach((b) => rein({
    art: "Schlacht", titel: b.name, text: b.text,
    kontext: formatYear(b.year) + " · " + b.war, jahr: b.year, reiter: "schlachten", ziel: ankerName(b.name)
  }));

  QUOTES.forEach((q) => rein({
    art: "Zitat", titel: q.text, text: (q.note || "") + " " + q.author,
    kontext: q.author + (q.year ? " · " + q.year : "") + " · " + q.status, reiter: "zitate", ziel: ankerName(q.text)
  }));

  MYTHEN.forEach((m) => rein({
    art: m.type === "Mythos" ? "Mythos" : m.type, titel: m.title, text: m.text + " " + (m.quelle || ""),
    kontext: m.category, reiter: "mythen", ziel: ankerName(m.title)
  }));

  MYSTERIEN.forEach((m) => rein({
    art: "Mysterium", titel: m.titel, text: JSON.stringify(m).slice(0, 2000),
    kontext: m.zeitraum || "", reiter: "mysterien", ziel: m.id
  }));

  SURPRISING_FACTS.forEach((f) => rein({
    art: "Verblüffender Fakt", titel: f, text: "", kontext: "", reiter: "verblueffend", ziel: ankerName(f)
  }));

  return eintraege;
}

const ART_FARBE = {
  "Epoche": "#8c6a2e", "Ereignis": "#a01f1f", "Persönlichkeit": "#2a5b8a", "Reich": "#7d5b1f",
  "Zeitleiste": "#1f8a7d", "Vertiefung": "#d4af37", "Themengeschichte": "#6b4f9a", "Themen-Station": "#6b4f9a",
  "Herrscher": "#c9a05a", "Dynastie": "#8c6a2e",
  "Schlüsselmoment": "#c9701c", "Schlacht": "#8a3020", "Zitat": "#3f7d3f", "Mythos": "#a03a20",
  "Nuance": "#bd9563", "Kuriosum": "#c2a06a", "Mysterium": "#5b7d1f", "Verblüffender Fakt": "#8a5b7d"
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
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-4 max-w-2xl" },
      "Mehrere Wörter grenzen ein: Alle müssen vorkommen. Ein Klick auf einen Treffer springt zum Fundort."),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-2 max-w-xl" },
      /* @__PURE__ */ React.createElement(Search, { size: 16, className: "text-[#bd9563]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: frage,
        onChange: (e) => { setFrage(e.target.value); setArtFilter("Alle"); },
        placeholder: "Suchbegriff, z. B. Pest, Seidenstraße, Verfassung …",
        className: "bg-transparent text-[15px] text-[#e8d5b0] placeholder-[#bd9563] focus:outline-none flex-1"
      }),
      frage && /* @__PURE__ */ React.createElement("button", {
        onClick: () => { setFrage(""); setArtFilter("Alle"); },
        className: "text-xs text-[#bd9563] hover:text-[#e0b84a]"
      }, "löschen")
    ),

    q && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#bd9563] font-mono mb-3" },
      treffer.length === 0 ? "Keine Treffer." : treffer.length + " Treffer" + (gefiltert.length > 120 ? ", die ersten 120 werden gezeigt" : "")),

    arten.length > 1 && /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-5" },
      ["Alle", ...arten].map((a) => /* @__PURE__ */ React.createElement("button", {
        key: a,
        onClick: () => setArtFilter(a),
        className: `px-2.5 py-1.5 rounded text-xs border ${artFilter === a ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, a, a === "Alle" ? "" : ` (${treffer.filter((t) => t.art === a).length})`))
    ),

    !q && /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 max-w-2xl" },
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mb-2" }, "Beispiele:"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" },
        ["Pest", "Seidenstraße", "Verfassung", "Sklaverei", "Buchdruck", "Mongolen", "Frauen", "Bewässerung"].map((b) =>
          /* @__PURE__ */ React.createElement("button", {
            key: b,
            onClick: () => setFrage(b),
            className: "px-2.5 py-1.5 rounded text-xs border border-[#5c2018] text-[#c2a06a] hover:text-[#e0b84a] hover:border-[#d4af37]"
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
            style: { color: ART_FARBE[t.art] || "#c2a06a", borderColor: ART_FARBE[t.art] || "#5c2018" }
          }, t.art),
          t.kontext && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563]" }, t.kontext)
        ),
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[17px] text-[#e0b84a] leading-snug mb-1" }, t.titel),
        t.text && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" },
          t.text.length > 200 ? t.text.slice(0, 200) + " …" : t.text),
        /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#bd9563]" },
          t.ziel ? "Öffnen " : "Zum Bereich ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
      ))
    )
  );
}


/* =========================================================
   START

   Die App begann bisher mitten in einer Liste. Diese Seite ist
   der Einstieg: was es gibt, wo man weiterlesen kann, und ein
   Fund, den man nicht gesucht hat.
   ========================================================= */

function zufall(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

function StartTab() {
  const [wurf, setWurf] = useState(0);
  const [zuletzt] = useGespeichert("zuletzt.gelesen", null);

  const fund = useMemo(() => {
    const quellen = [
      () => {
        const f = zufall(SURPRISING_FACTS);
        return { art: "Verblüffender Fakt", titel: null, text: f, reiter: "verblueffend", ziel: ankerName(f) };
      },
      () => {
        const m = zufall(MYTHEN.filter((x) => x.type === "Mythos"));
        return { art: "Mythos", titel: m.title, text: m.text, kontext: m.category, reiter: "mythen", ziel: ankerName(m.title) };
      },
      () => {
        const q = zufall(QUOTES);
        return { art: "Zitat", titel: "„" + q.text + "\"", text: q.note || "", kontext: q.author + " · " + q.status, reiter: "zitate", ziel: ankerName(q.text) };
      },
      () => {
        const v = zufall(VERTIEFUNGEN);
        return { art: "Vertiefung", titel: v.titel, text: v.leitsatz, kontext: v.zeitraum + " · " + v.region, reiter: "vertiefungen", ziel: v.id };
      },
      () => {
        const s = zufall(SCHLUESSELMOMENTE);
        return { art: "Schlüsselmoment", titel: s.title, text: s.text, kontext: formatYear(s.year), reiter: "schluessel", ziel: ankerName(s.title) };
      }
    ];
    return zufall(quellen)();
  }, [wurf]);

  const weiter = zuletzt && VERTIEFUNGEN.find((v) => v.id === zuletzt);

  const zahlen = [
    { wert: EPOCHS.reduce((a, e) => a + e.events.length, 0), was: "Ereignisse", reiter: "epochen" },
    { wert: VERTIEFUNGEN.length, was: "Vertiefungen", reiter: "vertiefungen" },
    { wert: THEMEN.length, was: "Querschnitte", reiter: "themen" },
    { wert: Object.keys(COUNTRY_TIMELINES).length, was: "Weltregionen", reiter: "laender" },
    { wert: EPOCHS.reduce((a, e) => a + e.figures.length, 0), was: "Persönlichkeiten", reiter: "personen" },
    { wert: MYTHEN.length, was: "Mythen", reiter: "mythen" },
    { wert: SURPRISING_FACTS.length, was: "Fakten", reiter: "verblueffend" },
    { wert: MYSTERIEN.length, was: "Mysterien", reiter: "mysterien" }
  ];

  const springe = (reiter, ziel) => { if (SPRINGE) SPRINGE(reiter, ziel); };

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "font-serif text-xl text-[#e0b84a] mb-1" }, "Von der Steinzeit bis zur Gegenwart."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-6 max-w-2xl" },
      "Zum Nachschlagen, zum Vertiefen und zum Behalten. Wo etwas strittig ist, steht es dabei."),

    weiter && /* @__PURE__ */ React.createElement("button", {
      onClick: () => springe("vertiefungen", weiter.id),
      className: "w-full text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 mb-3 hover:border-[#d4af37] transition-colors"
    },
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563]" }, "Weiterlesen"),
      /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mt-1" }, weiter.titel),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, weiter.leitsatz)
    ),

    /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4 mb-6" },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 mb-2" },
        /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-widest text-[#d4af37]" }, "Zufallsfund · ", fund.art),
        /* @__PURE__ */ React.createElement("button", {
          onClick: () => setWurf((w) => w + 1),
          className: "inline-flex items-center gap-1 text-xs text-[#c2a06a] hover:text-[#f0d878]"
        }, /* @__PURE__ */ React.createElement(RotateCcw, { size: 12 }), "Noch einer")
      ),
      fund.kontext && /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] text-[#bd9563] mb-1" }, fund.kontext),
      fund.titel && /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug mb-1" }, fund.titel),
      fund.text && /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, fund.text),
      /* @__PURE__ */ React.createElement("button", {
        onClick: () => springe(fund.reiter, fund.ziel),
        className: "mt-3 inline-flex items-center gap-1 text-xs text-[#c9a877] hover:text-[#f0d878]"
      }, fund.ziel ? "Öffnen" : "Zum Bereich", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
    ),

    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-2" }, "Was drin ist"),
    /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6" },
      zahlen.map((z) => /* @__PURE__ */ React.createElement("button", {
        key: z.was,
        onClick: () => springe(z.reiter, null),
        className: "rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2 text-left hover:border-[#d4af37] transition-colors"
      },
        /* @__PURE__ */ React.createElement("div", { className: "font-mono text-lg text-[#f0d878]" }, z.wert),
        /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-[#c2a06a]" }, z.was)
      ))
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" },
      /* @__PURE__ */ React.createElement("button", {
        onClick: () => springe("suche", null),
        className: "inline-flex items-center gap-1.5 px-3 py-2 rounded border border-[#d4af37] text-[#f0d878] text-sm"
      }, /* @__PURE__ */ React.createElement(Search, { size: 14 }), "Etwas nachschlagen"),
      /* @__PURE__ */ React.createElement("button", {
        onClick: () => springe("lernen", null),
        className: "inline-flex items-center gap-1.5 px-3 py-2 rounded border border-[#5c2018] text-[#c9a877] text-sm hover:border-[#d4af37]"
      }, /* @__PURE__ */ React.createElement(Zap, { size: 14 }), "Etwas lernen")
    )
  );
}


/* =========================================================
   SICHERUNG

   Alles, was du in Historia tust – Lernstand, gelesene
   Vertiefungen, Lesezeichen, Forschungsfragen – liegt im
   Speicher genau dieses Browsers. Verlauf löschen, Gerät
   wechseln, und es ist weg. Zur Startseite hinzugefügt als
   App-Symbol hat die App sogar einen eigenen Speicher,
   getrennt von Safari.

   Deshalb: alles in eine Datei schreiben und wieder einlesen.
   ========================================================= */

const SICHERUNG_KENNUNG = "historia-sicherung";

function alleGespeichertenDaten() {
  const daten = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const schluessel = localStorage.key(i);
      if (!schluessel || schluessel.indexOf(SPEICHER_PRAEFIX) !== 0) continue;
      daten[schluessel.slice(SPEICHER_PRAEFIX.length)] = localStorage.getItem(schluessel);
    }
  } catch (e) {
    // Speicher nicht verfügbar (privates Fenster, gesperrte Website-Daten)
  }
  return daten;
}

function baueSicherung() {
  return JSON.stringify({
    kennung: SICHERUNG_KENNUNG,
    fassung: 1,
    erstellt: new Date().toISOString(),
    daten: alleGespeichertenDaten()
  }, null, 2);
}

function pruefeSicherung(objekt) {
  const fehler = [];
  if (!objekt || typeof objekt !== "object") fehler.push("Die Datei enthält keine Sicherung.");
  else {
    if (objekt.kennung !== SICHERUNG_KENNUNG) fehler.push("Das ist keine Historia-Sicherung.");
    if (!objekt.daten || typeof objekt.daten !== "object") fehler.push("Der Datenteil fehlt.");
  }
  return fehler;
}

function LesbarerName(schluessel) {
  const namen = {
    "bereich": "zuletzt geöffneter Bereich",
    "unterreiter": "zuletzt geöffneter Unterreiter",
    "vertiefungen.gelesen": "gelesene Vertiefungen",
    "themen.gelesen": "gelesene Themen",
    "zuletzt.gelesen": "Weiterlesen-Merker",
    "lernen.bilanz": "Lernbilanz",
    "fragen": "Forschungsfragen"
  };
  return namen[schluessel] || schluessel;
}

function SicherungTab() {
  const [meldung, setMeldung] = useState(null);
  const [fehler, setFehler] = useState([]);
  const [stand, setStand] = useState(0);

  const daten = useMemo(alleGespeichertenDaten, [stand]);
  const eintraege = Object.keys(daten).sort();

  const groesse = eintraege.reduce((s, k) => s + (daten[k] || "").length, 0);

  function anzahlIn(wert) {
    try {
      const x = JSON.parse(wert);
      if (Array.isArray(x)) return x.length + " Einträge";
      if (x && typeof x === "object") return Object.keys(x).length + " Werte";
      return String(x).slice(0, 40);
    } catch (e) { return ""; }
  }

  function sichern() {
    dateiHerunterladen(baueSicherung(), "historia-sicherung-" + heuteISO() + ".json", "application/json");
    setFehler([]);
    setMeldung("Sicherung heruntergeladen. Leg sie irgendwohin, wo du sie wiederfindest.");
  }

  function einlesen(datei) {
    const leser = new FileReader();
    leser.onload = () => {
      let objekt = null;
      try { objekt = JSON.parse(String(leser.result)); }
      catch (e) { setMeldung(null); setFehler(["Die Datei ist nicht lesbar: " + e.message]); return; }
      const probleme = pruefeSicherung(objekt);
      if (probleme.length) { setMeldung(null); setFehler(probleme); return; }
      let uebernommen = 0;
      Object.entries(objekt.daten).forEach(([schluessel, wert]) => {
        try { localStorage.setItem(SPEICHER_PRAEFIX + schluessel, wert); uebernommen++; }
        catch (e) { /* Speicher voll oder gesperrt */ }
      });
      setFehler([]);
      setStand((s) => s + 1);
      setMeldung(uebernommen + " Einträge eingespielt. Die Seite lädt gleich neu, damit alles greift.");
      setTimeout(() => location.reload(), 1200);
    };
    leser.readAsText(datei);
  }

  function alleslLoeschen() {
    if (!confirm("Wirklich alle gespeicherten Daten dieses Browsers löschen? Lernstand, gelesene Vertiefungen und Forschungsfragen sind dann weg.")) return;
    Object.keys(daten).forEach((k) => {
      try { localStorage.removeItem(SPEICHER_PRAEFIX + k); } catch (e) {}
    });
    setStand((s) => s + 1);
    setMeldung("Alles gelöscht.");
  }

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Alles, was du hier tust, liegt im Speicher dieses Browsers – nicht auf einem Server."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-5 max-w-2xl" },
      "Verlauf löschen, Gerät wechseln oder die App vom Startbildschirm entfernen, und es ist weg. ",
      "Zum Startbildschirm hinzugefügt hat Historia sogar einen eigenen Speicher, getrennt von Safari. ",
      "Eine Sicherung dauert einen Klick."),

    /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 mb-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" },
        "Was gespeichert ist"),
      eintraege.length === 0
        ? /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a]" }, "Noch nichts.")
        : /* @__PURE__ */ React.createElement("ul", { className: "text-sm text-[#c2a06a] leading-relaxed" },
            eintraege.map((k) => /* @__PURE__ */ React.createElement("li", { key: k, className: "flex justify-between gap-3" },
              /* @__PURE__ */ React.createElement("span", null, "· ", LesbarerName(k)),
              /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#bd9563] whitespace-nowrap" }, anzahlIn(daten[k]))
            ))
          ),
      eintraege.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "mt-2 font-mono text-[11px] text-[#bd9563]" },
        "zusammen etwa ", Math.max(1, Math.round(groesse / 1024)), " KB")
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" },
      /* @__PURE__ */ React.createElement("button", {
        onClick: sichern,
        className: "px-3 py-2 rounded border border-[#d4af37] text-[#f0d878] text-sm"
      }, "Sicherung herunterladen"),
      /* @__PURE__ */ React.createElement("label", {
        className: "px-3 py-2 rounded border border-[#5c2018] text-[#c9a877] text-sm cursor-pointer hover:border-[#d4af37]"
      }, "Sicherung einlesen",
        /* @__PURE__ */ React.createElement("input", {
          type: "file", accept: "application/json,.json", className: "hidden",
          onChange: (e) => { const d = e.target.files && e.target.files[0]; if (d) einlesen(d); e.target.value = ""; }
        })
      ),
      /* @__PURE__ */ React.createElement("button", {
        onClick: alleslLoeschen,
        className: "px-3 py-2 rounded border border-[#7a3020] text-[#c2a06a] text-sm hover:text-[#f0a878]"
      }, "Alles löschen")
    ),

    meldung && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#9fd8ac] mb-2" }, meldung),
    fehler.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "rounded border border-[#a03a20] bg-[#6b2024] p-3 mb-2" },
      fehler.map((f, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-sm text-[#f0a878]" }, f))),

    /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#bd9563] leading-snug max-w-2xl mt-4" },
      "Beim Einlesen werden vorhandene Werte überschrieben, nicht zusammengeführt. ",
      "Wer auf zwei Geräten arbeitet, sollte also wissen, welche Sicherung die neuere ist – ",
      "das Erstellungsdatum steht in der Datei.")
  );
}


/* =========================================================
   DYNASTIEN

   Herrscherlisten in drei Ebenen: Reich, Periode, Dynastie.
   Wo ein Herrscher einen ausführlichen Artikel hat, führt ein
   Verweis dorthin.

   Absichtlich steht bei jedem Reich ein Hinweis zur Chronologie:
   Jahreszahlen sind hier Konventionen, keine Messwerte, und für
   manche Zeitabschnitte ist nicht einmal die Reihenfolge sicher.
   Eine Liste ohne diesen Hinweis würde Genauigkeit vortäuschen.
   ========================================================= */

function DynastienTab({ ziel }) {
  const [offen, setOffen] = useState(DYNASTIEN.length === 1 ? DYNASTIEN[0].id : null);
  const [suche, setSuche] = useState("");
  React.useEffect(() => { if (ziel) setOffen(ziel); }, [ziel]);

  const reich = DYNASTIEN.find((r) => r.id === offen);
  const q = suche.trim().toLowerCase();

  function herrscherKarte(h, farbe) {
    const vert = h.vertiefung ? VERTIEFUNGEN.find((v) => v.id === h.vertiefung) : null;
    return /* @__PURE__ */ React.createElement("div", {
      key: h.name,
      className: "rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2",
      style: vert ? { borderLeft: "3px solid " + farbe } : null
    },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 flex-wrap" },
        /* @__PURE__ */ React.createElement("span", { className: "font-serif text-[15px] text-[#e0b84a]" }, h.name),
        /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#bd9563]" }, h.regierung)
      ),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mt-0.5" }, h.kurz),
      vert && /* @__PURE__ */ React.createElement("button", {
        onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", vert.id, { reiter: "dynastien", eintrag: reich.id, label: reich.reich }); },
        className: "mt-1.5 inline-flex items-center gap-1 text-xs text-[#c9a877] hover:text-[#f0d878]"
      }, "Vertiefung: ", vert.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }))
    );
  }

  // --- Übersicht der Reiche ---
  if (!reich) {
    return /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" },
        "Herrscherlisten großer Reiche, gegliedert nach Perioden und Dynastien."),
      /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
        DYNASTIEN.map((r) => {
          const anzahl = r.perioden.reduce((s, p) => s + p.dynastien.reduce((t, d) => t + d.herrscher.length, 0), 0);
          return /* @__PURE__ */ React.createElement("button", {
            key: r.id,
            onClick: () => setOffen(r.id),
            className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors",
            style: { borderLeft: "4px solid " + r.farbe }
          },
            /* @__PURE__ */ React.createElement("p", { className: "font-serif text-xl text-[#e0b84a]" }, r.reich),
            /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-[#d4af37] mb-1" }, r.zeitraum),
            /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, r.untertitel),
            /* @__PURE__ */ React.createElement("p", { className: "mt-2 font-mono text-[11px] text-[#bd9563]" },
              r.perioden.length, " Perioden · ", anzahl, " Einträge")
          );
        })
      )
    );
  }

  // --- ein Reich ---
  const perioden = reich.perioden
    .map((p) => ({
      ...p,
      dynastien: p.dynastien
        .map((d) => ({
          ...d,
          herrscher: q
            ? d.herrscher.filter((h) => (h.name + " " + h.kurz).toLowerCase().includes(q))
            : d.herrscher
        }))
        .filter((d) => !q || d.herrscher.length || (d.name + " " + d.kurz).toLowerCase().includes(q))
    }))
    .filter((p) => p.dynastien.length);

  const treffer = perioden.reduce((s, p) => s + p.dynastien.reduce((t, d) => t + d.herrscher.length, 0), 0);

  return /* @__PURE__ */ React.createElement("div", null,
    DYNASTIEN.length > 1 && /* @__PURE__ */ React.createElement("button", {
      onClick: () => { setOffen(null); setSuche(""); },
      className: "flex items-center gap-1.5 text-[#c9a877] hover:text-[#f0d878] mb-4 text-sm"
    }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu allen Reichen"),

    /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-2xl md:text-3xl text-[#f0d878]" }, reich.reich),
    /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-[#d4af37] mb-3" }, reich.zeitraum),
    /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed max-w-3xl mb-3" }, reich.einleitung),

    /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4 mb-5 max-w-3xl" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, "Zur Chronologie"),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#e8d5b0] leading-relaxed" }, reich.hinweis)
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-5 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-1.5 max-w-md" },
      /* @__PURE__ */ React.createElement(Search, { size: 15, className: "text-[#bd9563]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: suche,
        onChange: (e) => setSuche(e.target.value),
        placeholder: "Herrscher oder Dynastie suchen …",
        className: "bg-transparent text-sm text-[#e8d5b0] placeholder-[#bd9563] focus:outline-none flex-1"
      }),
      q && /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#bd9563]" }, treffer)
    ),

    perioden.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Nichts gefunden."),

    perioden.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.name, className: "mb-8" },
      /* @__PURE__ */ React.createElement("div", { className: "border-l-2 pl-3 mb-3", style: { borderColor: reich.farbe } },
        /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-xl text-[#e0b84a]" }, p.name),
        /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] text-[#bd9563]" }, p.zeitraum)
      ),
      p.dynastien.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.name, className: "mb-5 ml-1" },
        /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-2 flex-wrap mb-1" },
          /* @__PURE__ */ React.createElement("h4", { className: "font-serif text-lg text-[#f0d878]" }, d.name),
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#d4af37]" }, d.zeitraum),
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#bd9563]" }, d.herrscher.length, " Einträge")
        ),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mb-2 max-w-3xl" }, d.kurz),
        /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2" },
          d.herrscher.map((h) => herrscherKarte(h, reich.farbe))
        ),
        // Kurzlebige und wenig folgenreiche Regenten stehen gesammelt am Ende,
        // damit die Liste vollstaendig bleibt, ohne das Wichtige zu ersticken.
        d.weitere && !q && /* @__PURE__ */ React.createElement("p", {
          className: "mt-2 text-xs text-[#bd9563] leading-relaxed max-w-3xl"
        }, /* @__PURE__ */ React.createElement("span", { className: "uppercase tracking-wide" }, "Weitere: "), d.weitere)
      ))
    )),

    /* @__PURE__ */ React.createElement("div", { className: "mt-2 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#c2a06a] leading-relaxed" },
        reich.quellen.map((x, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", x))
      )
    )
  );
}

const BEREICHE = [
  { id: "start", label: "Start", icon: Sparkles, akzent: "#e8c14a", unter: [] },
  { id: "suche", label: "Suche", icon: Search, akzent: "#7aa8cc", unter: [] },
  { id: "epochen", label: "Epochen", icon: BookOpen, akzent: "#e2884a", unter: [
      { id: "epochen", label: "\xDCbersicht" },
      { id: "personen", label: "Pers\xF6nlichkeiten" },
      { id: "nationen", label: "Nationen & Reiche" },
      { id: "dynastien", label: "Dynastien" }
  ] },
  { id: "vertiefungen", label: "Vertiefungen", icon: Layers, akzent: "#74b58c", unter: [
      { id: "vertiefungen", label: "Wendepunkte" },
      { id: "themen", label: "Querschnitte" }
  ] },
  { id: "zeit", label: "Zeit & Raum", icon: Clock, akzent: "#b878b0", unter: [
      { id: "laender", label: "Weltregionen" },
      { id: "zeitstrahl", label: "Zeitstrahl" },
      { id: "zeitschnitt", label: "Zeitschnitt" }
  ] },
  { id: "momente", label: "Momente", icon: Zap, akzent: "#e8706a", unter: [
      { id: "schluessel", label: "Schl\xFCsselmomente" },
      { id: "schlachten", label: "Schlachten" },
      { id: "zitate", label: "Zitate" }
  ] },
  { id: "raetsel", label: "Mythen & R\xE4tsel", icon: HelpCircle, akzent: "#d9b56a", unter: [
      { id: "mythen", label: "Mythen & Fun Facts" },
      { id: "verblueffend", label: "Verbl\xFCffende Fakten" },
      { id: "mysterien", label: "Mysterien" }
  ] },
  { id: "lernen", label: "Lernen", icon: Crown, akzent: "#8fb9d6", unter: [
      { id: "lernen", label: "Karteikarten & Quiz" },
      { id: "fragen", label: "Forschungsfragen" },
      { id: "sicherung", label: "Sicherung" }
  ] }
];

// Ordnet einen einzelnen Reiter seinem Bereich zu. Die Suche und alle
// Querverweise arbeiten weiterhin mit den alten Reiternamen; hier werden
// sie in Bereich und Unterreiter uebersetzt.
function bereichFuer(reiter) {
  for (const b of BEREICHE) {
    if (b.id === reiter && b.unter.length === 0) return { bereich: b.id, unter: null };
    const u = b.unter.find((x) => x.id === reiter);
    if (u) return { bereich: b.id, unter: u.id };
  }
  return { bereich: "start", unter: null };
}

// Anzeigename eines einzelnen Reiters, fuer die Zurueck-Leiste.
function reiterLabel(reiter) {
  for (const b of BEREICHE) {
    if (b.id === reiter && b.unter.length === 0) return b.label;
    const u = b.unter.find((x) => x.id === reiter);
    if (u) return u.label;
  }
  return "Übersicht";
}
function formatYear(y) {
  if (y < 0) return `${Math.abs(y).toLocaleString("de-DE")} v. Chr.`;
  return `${y} n. Chr.`;
}
function Header({ bereich, setBereich, unter, setUnter }) {
  const aktuell = BEREICHE.find((b) => b.id === bereich) || BEREICHE[0];
  return /* @__PURE__ */ React.createElement("header", { className: "border-b border-[#5c2018] bg-[#4a1015]" },
    /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 pt-5 pb-3" },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-3" },
        /* @__PURE__ */ React.createElement("h1", {
          className: "font-serif text-2xl md:text-3xl text-[#e0b84a] tracking-tight cursor-pointer",
          onClick: () => { setBereich("start"); setUnter(null); }
        }, "Historia"),
        /* @__PURE__ */ React.createElement("span", { className: "text-[#c2a06a] font-mono text-[11px] uppercase tracking-widest" }, "Steinzeit \u2014 Gegenwart")
      )
    ),
    /* @__PURE__ */ React.createElement("div", { className: "relative" },
      /* @__PURE__ */ React.createElement("nav", { className: "max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto no-scrollbar", "data-leiste": "bereiche" },
      BEREICHE.map((b) => {
        const Icon2 = b.icon;
        const aktiv = bereich === b.id;
        return /* @__PURE__ */ React.createElement("button", {
          key: b.id,
          onClick: () => { setBereich(b.id); setUnter(b.unter.length ? b.unter[0].id : null); },
          className: `flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-t-md text-sm font-medium transition-colors border-b-2 ${aktiv ? "" : "text-[#c2a06a] border-transparent hover:text-[#d8c690]"}`,
          style: aktiv ? { color: b.akzent, borderBottomColor: b.akzent } : undefined
        }, /* @__PURE__ */ React.createElement(Icon2, { size: 15 }), b.label);
      })
      ),
      /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", className: "verlauf-rechts" })
    ),
    aktuell.unter.length > 1 && /* @__PURE__ */ React.createElement("div", { className: "border-t border-[#5c2018] bg-[#5c1a1e]" },
      /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-1.5 flex gap-1 overflow-x-auto no-scrollbar" },
        aktuell.unter.map((u) => /* @__PURE__ */ React.createElement("button", {
          key: u.id,
          onClick: () => setUnter(u.id),
          className: `whitespace-nowrap px-2.5 py-1.5 rounded text-xs border ${unter === u.id ? "bg-[#4a1015]" : "border-transparent text-[#c2a06a] hover:text-[#e0b84a]"}`,
          style: unter === u.id ? { color: aktuell.akzent, borderColor: aktuell.akzent } : undefined
        }, u.label))
      )
    )
  );
}
function EpochCard({ ep, onOpen }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onOpen(ep.id),
      className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] hover:bg-[#6b2024] transition-colors p-5 group",
      style: { borderLeft: `4px solid ${ep.color}` }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-1" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-xl text-[#e0b84a]" }, ep.name), /* @__PURE__ */ React.createElement(ChevronRight, { size: 18, className: "text-[#c2a06a] group-hover:translate-x-1 transition-transform" })),
    /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-wider mb-2", style: { color: ep.accent } }, ep.span),
    /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c9a877] leading-relaxed" }, ep.lead),
    /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 mt-3 text-xs text-[#c2a06a]" }, /* @__PURE__ */ React.createElement("span", null, ep.events.length, " Ereignisse"), /* @__PURE__ */ React.createElement("span", null, ep.figures.length, " Pers\xF6nlichkeiten"), /* @__PURE__ */ React.createElement("span", null, ep.nations.length, " Nationen"))
  );
}
function EpochDetail({ ep, onBack }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: onBack, className: "flex items-center gap-1.5 text-sm text-[#c2a06a] hover:text-[#d8c690] mb-4" }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zur Übersicht"), /* @__PURE__ */ React.createElement("div", { className: "mb-6", style: { borderLeft: `4px solid ${ep.color}`, paddingLeft: 16 } }, /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-3xl text-[#e0b84a]" }, ep.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-wider mb-3", style: { color: ep.accent } }, ep.span), /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] leading-relaxed max-w-3xl" }, ep.description)), /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Wichtigste Ereignisse (", ep.events.length, ")"), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l border-[#5c2018] ml-2 mb-8" }, ep.events.map((e, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-6 ml-5" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#4a1015]",
      style: { backgroundColor: ep.color }
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: ep.accent } }, formatYear(e.year)), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, e.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, e.text), e.quelle && /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-[11px] text-[#bd9563] leading-snug" }, "Beleg: ", e.quelle)))), ep.figures.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Pers\xF6nlichkeiten (", ep.figures.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-8" }, ep.figures.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, f.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs mb-1", style: { color: ep.accent } }, f.years), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, f.text))))), ep.nations.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Nationen & Reiche (", ep.nations.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-8" }, ep.nations.map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, n.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, n.text))))), ep.dynastyGroups && ep.dynastyGroups.map((group, gi) => /* @__PURE__ */ React.createElement("div", { key: gi, className: "mb-8" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, group.title), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, group.items.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${ep.accent}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, it.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, it.text)))))), ep.literatur && ep.literatur.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-2 pt-4 border-t border-[#5c2018]" }, /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#bd9563] mb-1.5" }, "Literaturgrundlage dieser Epoche"), /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#c2a06a] leading-relaxed mb-2" }, ep.literatur.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "\xB7 ", q))), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#bd9563] leading-snug max-w-2xl" }, "Die Ereignisse dieser Epoche folgen dieser Literatur. Einzelne Ereignisse mit strittiger oder gesch\xE4tzter Zahlenangabe tragen zus\xE4tzlich einen eigenen Beleg.")));
}
function EpochenTab({ ziel }) {
  const [openId, setOpenId] = useState(null);
  React.useEffect(() => { if (ziel) setOpenId(ziel); }, [ziel]);
  const ep = EPOCHS.find((e) => e.id === openId);
  if (ep) return /* @__PURE__ */ React.createElement(EpochDetail, { ep, onBack: () => setOpenId(null) });
  const totalEvents = EPOCHS.reduce((s, e) => s + e.events.length, 0);
  const totalFigures = EPOCHS.reduce((s, e) => s + e.figures.length, 0);
  const totalNations = EPOCHS.reduce((s, e) => s + e.nations.length, 0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" }, "Sieben Epochen, von der Steinzeit bis zur Gegenwart. W\xE4hle eine Epoche f\xFCr Ereignisse, Pers\xF6nlichkeiten und Nationen im Detail."), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#bd9563] mb-5 font-mono" }, totalEvents, " Ereignisse \xB7 ", totalFigures, " Pers\xF6nlichkeiten \xB7 ", totalNations, " Nationen & Reiche"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-4" }, EPOCHS.map((ep2) => /* @__PURE__ */ React.createElement(EpochCard, { key: ep2.id, ep: ep2, onOpen: setOpenId }))));
}
function SchluesselmomenteTab({ ziel }) {
  const [cat, setCat] = useState("Alle");
  const [suche, setSuche] = useState("");
  useSprungziel(ziel);
  const categories = ["Alle", ...Array.from(new Set(SCHLUESSELMOMENTE.map((m) => m.category)))];
  const filtered = SCHLUESSELMOMENTE
    .filter((m) => (cat === "Alle" || m.category === cat) && passt(m, ["title", "text", "category"], suche))
    .sort((a, b) => a.year - b.year);

  const verweise = (m) => {
    const v = m.vertiefung ? VERTIEFUNGEN.find((x) => x.id === m.vertiefung) : null;
    const t = m.thema ? THEMEN.find((x) => x.id === m.thema) : null;
    if (!v && !t) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mt-3" },
      v && /* @__PURE__ */ React.createElement("button", {
        onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", v.id, { reiter: "schluessel", label: "Schlüsselmomente" }); },
        className: "inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-[#5c2018] text-[#c9a877] hover:text-[#f0d878] hover:border-[#d4af37]"
      }, "Vertiefung: ", v.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 })),
      t && /* @__PURE__ */ React.createElement("button", {
        onClick: () => { if (SPRINGE) SPRINGE("themen", t.id, { reiter: "schluessel", label: "Schlüsselmomente" }); },
        className: "inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-[#5c2018] text-[#c9a877] hover:text-[#f0d878] hover:border-[#d4af37]"
      }, "Thema: ", t.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }))
    );
  };

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      SCHLUESSELMOMENTE.length, " kuratierte Wendepunkte, die den Lauf der Geschichte grundlegend veränderten — Momente, ohne die die Welt heute anders aussähe."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-4 max-w-2xl" },
      "Ein Klick auf eine Karte öffnet sie. Wo es eine ausführliche Darstellung oder einen passenden Querschnitt gibt, führt darin ein Verweis dorthin."),
    /* @__PURE__ */ React.createElement(Suchfeld, {
      wert: suche, setWert: setSuche, platzhalter: "Wendepunkt suchen …",
      anzahl: SCHLUESSELMOMENTE.length, gefunden: filtered.length
    }),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      categories.map((c) => /* @__PURE__ */ React.createElement("button", {
        key: c,
        onClick: () => setCat(c),
        className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${cat === c ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, c))
    ),
    /* @__PURE__ */ React.createElement("ol", { className: "relative border-l-2 border-[#5c2018] ml-2" },
      filtered.map((m, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-3 ml-6" },
        /* @__PURE__ */ React.createElement("span", { className: "absolute -left-[9px] w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#4a1015] flex items-center justify-center" },
          /* @__PURE__ */ React.createElement(Zap, { size: 9, className: "text-[#4a1015]" })),
        /* @__PURE__ */ React.createElement(AufklappKarte, {
          anker: ankerName(m.title),
          jahr: formatYear(m.year),
          titel: m.title,
          marken: [m.category],
          zeile: m.text,
          offenVorgabe: filtered.length === 1,
          kinder: /* @__PURE__ */ React.createElement("div", null,
            /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, m.text),
            verweise(m))
        })
      ))
    ),
    filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Nichts gefunden.")
  );
}
/* =========================================================
   SCHLACHTEN

   Jede Schlacht mit beiden Seiten nebeneinander: Anfuehrer,
   Truppenstaerke, Verluste, Ausgang und Folgen.

   Zu den Zahlen: Fuer die Antike und das Mittelalter stammen sie
   fast immer von einer Seite und sind haeufig uebertrieben - die
   Sieger hatten Grund, den Gegner gross zu rechnen. Wo die
   Forschung deutlich von der Ueberlieferung abweicht, steht das
   im Feld 'hinweis' statt in einer glatten Zahl.
   ========================================================= */

const SCHLACHT_ZEITRAEUME = [
  { id: "Alle", von: -9999, bis: 9999 },
  { id: "Antike", von: -9999, bis: 500 },
  { id: "Mittelalter", von: 500, bis: 1500 },
  { id: "Neuzeit", von: 1500, bis: 1800 },
  { id: "19. Jh.", von: 1800, bis: 1900 },
  { id: "20./21. Jh.", von: 1900, bis: 9999 }
];

function SchlachtenTab({ ziel }) {
  useSprungziel(ziel);
  const [suche, setSuche] = useState("");
  const [zeit, setZeit] = useState("Alle");

  const q = suche.trim().toLowerCase();
  const spanne = SCHLACHT_ZEITRAEUME.find((z) => z.id === zeit) || SCHLACHT_ZEITRAEUME[0];

  const gefiltert = [...BATTLES]
    .sort((a, b) => a.year - b.year)
    .filter((b) => b.year >= spanne.von && b.year < spanne.bis)
    .filter((b) => {
      if (!q) return true;
      const heu = [b.name, b.war, b.text, b.ort, b.ausgang, b.folgen]
        .concat((b.parteien || []).map((p) => p.name + " " + (p.fuehrer || "")))
        .join(" ").toLowerCase();
      return heu.includes(q);
    });

  function partei(p, i) {
    return /* @__PURE__ */ React.createElement("div", {
      key: i,
      className: "rounded border border-[#5c2018] bg-[#4a1015] p-3"
    },
      /* @__PURE__ */ React.createElement("p", { className: "font-serif text-[15px] text-[#e0b84a] leading-snug" }, p.name),
      p.fuehrer && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] mt-0.5" }, p.fuehrer),
      /* @__PURE__ */ React.createElement("dl", { className: "mt-2 text-xs" },
        p.staerke && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" },
          /* @__PURE__ */ React.createElement("dt", { className: "text-[#bd9563]", style: { width: "58px", flexShrink: 0 } }, "Stärke"),
          /* @__PURE__ */ React.createElement("dd", { className: "text-[#d8c690]" }, p.staerke)),
        p.verluste && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mt-0.5" },
          /* @__PURE__ */ React.createElement("dt", { className: "text-[#bd9563]", style: { width: "58px", flexShrink: 0 } }, "Verluste"),
          /* @__PURE__ */ React.createElement("dd", { className: "text-[#d8c690]" }, p.verluste))
      )
    );
  }

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      BATTLES.length, " Schlachten mit beiden Seiten, Anführern, Stärke und Verlusten — und dem, was jeweils gewonnen und verloren wurde."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Truppenzahlen der Antike und des Mittelalters stammen fast immer von einer Seite und sind oft übertrieben. Wo die Forschung deutlich von der Überlieferung abweicht, steht das dabei."),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-3" },
      SCHLACHT_ZEITRAEUME.map((z) => /* @__PURE__ */ React.createElement("button", {
        key: z.id,
        onClick: () => setZeit(z.id),
        className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${
          zeit === z.id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, z.id))),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-5 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-1.5 max-w-md" },
      /* @__PURE__ */ React.createElement(Search, { size: 15, className: "text-[#bd9563]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: suche,
        onChange: (e) => setSuche(e.target.value),
        placeholder: "Schlacht, Krieg oder Feldherr suchen …",
        className: "bg-transparent text-sm text-[#e8d5b0] placeholder-[#bd9563] focus:outline-none flex-1"
      }),
      /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[11px] text-[#bd9563]" }, gefiltert.length)),

    gefiltert.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Nichts gefunden."),

    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
      gefiltert.map((b, i) => /* @__PURE__ */ React.createElement(AufklappKarte, {
        key: i,
        anker: ankerName(b.name),
        jahr: formatYear(b.year),
        titel: b.name,
        marken: [b.war, b.ort].filter(Boolean),
        zeile: b.text,
        // Bei einem einzelnen Treffer gleich offen - wer gesucht hat,
        // will nicht noch einmal klicken.
        offenVorgabe: gefiltert.length === 1,
        kinder: /* @__PURE__ */ React.createElement("div", null,
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mb-3" }, b.text),

        b.parteien && /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2 mb-3" },
          b.parteien.map(partei)),

        b.ausgang && /* @__PURE__ */ React.createElement("div", { className: "mb-1.5" },
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-[#d4af37]" }, "Ausgang "),
          /* @__PURE__ */ React.createElement("span", { className: "text-sm text-[#e8d5b0] leading-relaxed" }, b.ausgang)),

        b.folgen && /* @__PURE__ */ React.createElement("div", null,
          /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-[#bd9563]" }, "Folgen "),
          /* @__PURE__ */ React.createElement("span", { className: "text-sm text-[#c2a06a] leading-relaxed" }, b.folgen)),

        b.hinweis && /* @__PURE__ */ React.createElement("p", { className: "mt-2 pt-2 border-t border-[#5c2018] text-[11px] text-[#bd9563] leading-relaxed" },
          "Zu den Zahlen: ", b.hinweis),

        (() => {
          const v = b.vertiefung ? VERTIEFUNGEN.find((x) => x.id === b.vertiefung) : null;
          return v && /* @__PURE__ */ React.createElement("button", {
            onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", v.id, { reiter: "schlachten", label: "Schlachten" }); },
            className: "mt-2 inline-flex items-center gap-1 text-xs text-[#c9a877] hover:text-[#f0d878]"
          }, "Vertiefung: ", v.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }));
        })()
        )
      }))
    )
  );
}
function ZitateTab({ ziel }) {
  const [statusFilter, setStatusFilter] = useState("Alle");
  const [suche, setSuche] = useState("");
  useSprungziel(ziel);
  const reihenfolge = ["belegt", "sinngem\xE4\xDF", "zugeschrieben", "falsch zitiert", "falsch zugeschrieben", "Sprichwort"];
  const vorhanden = reihenfolge.filter((s) => QUOTES.some((q) => q.status === s));
  const stil = (s) => {
    if (s === "belegt") return { backgroundColor: "#1f3a24", color: "#9fd8ac", borderColor: "#3f6b4a" };
    if (s === "falsch zugeschrieben" || s === "falsch zitiert") return { backgroundColor: "#6b2024", color: "#f0a878", borderColor: "#a03a20" };
    if (s === "sinngem\xE4\xDF") return { backgroundColor: "#3a2a0a", color: "#f0c869", borderColor: "#bd9563" };
    return { backgroundColor: "#3a1218", color: "#d8c690", borderColor: "#5c2018" };
  };
  const gefiltert = QUOTES.filter((q) => (statusFilter === "Alle" || q.status === statusFilter)
    && passt(q, ["text", "author", "note", "status"], suche));
  const [grenze, mehr] = useNachladen(gefiltert.length, 30, !!ziel);
  const falsche = QUOTES.filter((q) => q.status === "falsch zugeschrieben" || q.status === "falsch zitiert").length;
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" }, QUOTES.length, " historische Zitate \u2014 jedes mit einer Angabe dazu, wie gut es belegt ist."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-4 max-w-2xl" }, "Bei ", falsche, " davon stimmt die \xFCbliche Zuschreibung nachweislich nicht. Sie stehen trotzdem hier \u2013 mit Richtigstellung, denn genau das sind die, die man sonst weitererz\xE4hlt."),
    /* @__PURE__ */ React.createElement(Suchfeld, { wert: suche, setWert: setSuche, platzhalter: "Zitat oder Person suchen \u2026", anzahl: QUOTES.length, gefunden: gefiltert.length }),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      ["Alle", ...vorhanden].map((s) => /* @__PURE__ */ React.createElement("button", {
        key: s,
        onClick: () => setStatusFilter(s),
        className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${statusFilter === s ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, s, s === "Alle" ? "" : ` (${QUOTES.filter((q) => q.status === s).length})`))
    ),
    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
      gefiltert.slice(0, grenze).map((q, i) => /* @__PURE__ */ React.createElement("div", { key: i, "data-anker": ankerName(q.text), className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" },
        /* @__PURE__ */ React.createElement("span", { className: "inline-block text-[10px] uppercase tracking-wide border rounded px-1.5 py-0.5 mb-2", style: stil(q.status) }, q.status),
        /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug mb-2" }, "\u201E", q.text, '"'),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#d4af37] font-medium" }, q.author),
        (q.year || q.note) && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#bd9563] mt-0.5 leading-snug" }, [q.year, q.note].filter(Boolean).join(" \xB7 "))
      ))
    )
  );
}
/* =========================================================
   LAENDER

   Chronologische Zeitleisten je Region. Wo ein Ereignis einen
   ausfuehrlichen Artikel hat, fuehrt ein Verweis dorthin - so
   bleibt die Zeitleiste knapp und der Ausbau trotzdem erreichbar.
   ========================================================= */

function LaenderTab({ ziel }) {
  const countries = Object.keys(COUNTRY_TIMELINES);
  const [country, setCountry] = useState(countries[0]);
  React.useEffect(() => { if (ziel && COUNTRY_TIMELINES[ziel]) setCountry(ziel); }, [ziel]);
  const data = COUNTRY_TIMELINES[country];
  const mitVertiefung = data.events.filter((e) => e.vertiefung).length;

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-5 max-w-2xl" },
      "Eigene chronologische Zeitleisten für ausgewählte Länder — quer durch alle Epochen hinweg."),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-4" },
      countries.map((c) => /* @__PURE__ */ React.createElement("button", {
        key: c,
        onClick: () => setCountry(c),
        className: "px-3 py-1.5 rounded text-sm font-medium border",
        style: country === c
          ? { backgroundColor: "#5c1a1e", color: "#f0d878", borderColor: COUNTRY_TIMELINES[c].color }
          : { borderColor: "#5c2018", color: "#c2a06a" }
      }, c))),

    /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] text-[#bd9563] mb-5" },
      data.events.length, " Einträge",
      mitVertiefung ? " · " + mitVertiefung + " mit Vertiefung" : ""),

    /* @__PURE__ */ React.createElement("ol", { className: "relative border-l border-[#5c2018] ml-2" },
      data.events.map((e, i) => {
        const vert = e.vertiefung ? VERTIEFUNGEN.find((v) => v.id === e.vertiefung) : null;
        return /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-6 ml-5" },
          /* @__PURE__ */ React.createElement("span", {
            className: "absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#4a1015]",
            style: { backgroundColor: data.color }
          }),
          /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: data.color } }, formatYear(e.year)),
          /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, e.title),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, e.text),
          vert && /* @__PURE__ */ React.createElement("button", {
            onClick: () => { if (SPRINGE) SPRINGE("vertiefungen", vert.id, { reiter: "laender", eintrag: country, label: country }); },
            className: "mt-1.5 inline-flex items-center gap-1 text-xs text-[#c9a877] hover:text-[#f0d878]"
          }, "Vertiefung: ", vert.titel, /* @__PURE__ */ React.createElement(ChevronRight, { size: 11 }))
        );
      })
    )
  );
}
function MythenTab({ ziel }) {
  const [cat, setCat] = useState("Alle");
  const [suche, setSuche] = useState("");
  useSprungziel(ziel);
  const [typeFilter, setTypeFilter] = useState("Alle");
  const categories = ["Alle", ...Array.from(new Set(MYTHEN.map((m) => m.category)))];
  const types = ["Alle", ...Array.from(new Set(MYTHEN.map((m) => m.type)))];
  const filtered = MYTHEN.filter(
    (m) => (cat === "Alle" || m.category === cat) && (typeFilter === "Alle" || m.type === typeFilter)
      && passt(m, ["title", "text", "category", "type", "quelle"], suche)
  );
  const [grenze, mehr] = useNachladen(filtered.length, 30, !!ziel);
  const typeStyle = (t) => {
    if (t === "Mythos") return { backgroundColor: "#6b2024", color: "#e2a45c", borderColor: "#8a3020" };
    if (t === "Kuriosum") return { backgroundColor: "#3a2a0a", color: "#f0c869", borderColor: "#bd9563" };
    return { backgroundColor: "#3a1218", color: "#d8c690", borderColor: "#5c2018" };
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" }, MYTHEN.length, " entlarvte Mythen, \xFCberraschende Kuriosit\xE4ten und richtiggestellte Legenden der Geschichte \u2014 von der Antike bis in die Moderne."), /* @__PURE__ */ React.createElement(Suchfeld, { wert: suche, setWert: setSuche, platzhalter: "Mythos oder Stichwort suchen \u2026", anzahl: MYTHEN.length, gefunden: filtered.length }), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-2" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCat(c),
      className: `px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border ${cat === c ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
    },
    c
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, types.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      onClick: () => setTypeFilter(t),
      className: `px-2.5 py-1.5 rounded text-xs font-medium border ${typeFilter === t ? "bg-[#5c1a1e] text-[#f0d878] border-[#e0b84a]" : "border-[#5c2018] text-[#c2a06a]"}`
    },
    t
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, filtered.slice(0, grenze).map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, "data-anker": ankerName(m.title), className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide border rounded px-1.5 py-0.5", style: typeStyle(m.type) }, m.type), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563]" }, m.category)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1 leading-snug" }, m.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, m.text), m.quelle && /* @__PURE__ */ React.createElement("p", { className: "mt-2 pt-2 border-t border-[#5c2018] text-[11px] text-[#bd9563] leading-snug" }, "Beleg: ", m.quelle))), filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Keine Treffer.")), mehr);
}
function PersonenTab() {
  const [query, setQuery] = useState("");
  const all = useMemo(
    () => EPOCHS.flatMap((ep) => ep.figures.map((f) => ({ ...f, epochName: ep.name, akzent: ep.accent }))),
    []
  );
  // Suche jetzt auch im Text und in der Epoche, nicht nur im Namen -
  // "Feldherr" oder "Antike" fand vorher nichts.
  const filtered = all.filter((f) => passt(f, ["name", "years", "text", "epochName"], query));
  const [grenze, mehr] = useNachladen(filtered.length, 30);
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement(Suchfeld, {
      wert: query, setWert: setQuery, platzhalter: "Person, Jahr oder Stichwort suchen …",
      anzahl: all.length, gefunden: filtered.length
    }),
    !query && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#bd9563] mb-4 font-mono" },
      all.length, " Persönlichkeiten insgesamt · die Farbe am Rand nennt die Epoche"),
    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
      filtered.slice(0, grenze).map((f, i) => /* @__PURE__ */ React.createElement("div", {
        key: i,
        className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4",
        style: { borderLeft: "3px solid " + f.akzent }
      },
        /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, f.name),
        /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs mb-1", style: { color: f.akzent } }, f.years),
        /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#bd9563] mb-2" }, f.epochName),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, f.text)
      ))
    ),
    mehr,
    filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Keine Treffer.")
  );
}
function NationenTab() {
  const [suche, setSuche] = useState("");
  // Die Reiche stehen in den Epochen; hier flach zusammengezogen, damit
  // man ueber alle suchen kann statt Epoche fuer Epoche zu blaettern.
  const alle = EPOCHS.flatMap((ep) => ep.nations.map((n) => ({ ...n, epoche: ep.name, akzent: ep.accent })));
  const gefiltert = alle.filter((n) => passt(n, ["name", "text", "epoche"], suche));
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      alle.length, " Reiche, Staaten und Herrschaftsverbände aus allen Epochen."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-4 max-w-2xl" },
      "Die Farbe am Rand nennt die Epoche."),
    /* @__PURE__ */ React.createElement(Suchfeld, {
      wert: suche, setWert: setSuche, platzhalter: "Reich oder Stichwort suchen …",
      anzahl: alle.length, gefunden: gefiltert.length
    }),
    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
      gefiltert.map((n, i) => /* @__PURE__ */ React.createElement("div", {
        key: i,
        className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4",
        style: { borderLeft: "3px solid " + n.akzent }
      },
        /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, n.name),
        /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-wide text-[#bd9563] mb-1" }, n.epoche),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, n.text)
      ))
    ),
    gefiltert.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Nichts gefunden.")
  );
}
/* =========================================================
   LERNEN

   Vorher: zufälliges Mischen der 301 Jahreszahlen. Was man
   sicher konnte, kam genauso oft wie das, was man nie traf.

   Jetzt ein Karteikasten nach dem Leitner-Prinzip: Jede Karte
   sitzt in einem von fünf Fächern. Richtig beantwortet wandert
   sie ein Fach höher und kommt später wieder, falsch beantwortet
   fällt sie zurück auf Fach eins. So sieht man das Schwere oft
   und das Sichere selten.

   Gefragt wird aus allen Sammlungen, nicht nur aus den Jahreszahlen.
   ========================================================= */

// Tage bis zur Wiedervorlage je Fach
const FAECHER = [0, 1, 3, 7, 21, 60];

function heuteTag() {
  return Math.floor(Date.now() / 86400000);
}

function mischen(liste) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const h = a[i]; a[i] = a[j]; a[j] = h;
  }
  return a;
}

// --- Kartenbestand aus allen Sammlungen ----------------------------------

function baueKarten() {
  const karten = [];
  const gesehen = new Set();
  const rein = (k) => { if (!gesehen.has(k.id)) { gesehen.add(k.id); karten.push(k); } };

  EPOCHS.forEach((ep) => ep.events.forEach((e) => rein({
    id: "jahr:" + e.title, art: "Jahreszahl", frage: e.title, jahr: e.year,
    antwort: formatYear(e.year), kontext: ep.name, erklaerung: e.text
  })));
  SCHLUESSELMOMENTE.forEach((s) => rein({
    id: "jahr:" + s.title, art: "Jahreszahl", frage: s.title, jahr: s.year,
    antwort: formatYear(s.year), kontext: "Schlüsselmoment · " + s.category, erklaerung: s.text
  }));
  BATTLES.forEach((b) => rein({
    id: "jahr:" + b.name, art: "Jahreszahl", frage: b.name, jahr: b.year,
    antwort: formatYear(b.year), kontext: b.war, erklaerung: b.text
  }));
  VERTIEFUNGEN.forEach((v) => rein({
    id: "jahr:" + v.titel, art: "Jahreszahl", frage: v.titel, jahr: v.jahr,
    // Die Antwort muss zur Frage passen: gefragt ist ein Jahr, nicht ein Zeitraum.
    antwort: formatYear(v.jahr), kontext: v.region,
    erklaerung: (v.zeitraum ? "Zeitraum: " + v.zeitraum + ". " : "") + v.leitsatz
  }));

  // Zuschreibung von Zitaten – nur die eindeutigen Fälle
  QUOTES.forEach((q, i) => {
    const echt = q.status === "belegt";
    const falsch = q.status === "falsch zugeschrieben" || q.status === "falsch zitiert";
    if (!echt && !falsch) return;
    rein({
      id: "zitat:" + i, art: "Zuschreibung",
      frage: "„" + q.text + "\"",
      kontext: "zugeschrieben: " + q.author,
      stimmt: echt,
      antwort: echt ? "Die Zuschreibung stimmt." : "Die Zuschreibung stimmt nicht.",
      erklaerung: q.note || ""
    });
  });

  // Wahr oder falsch: Mythen sind falsch, verblüffende Fakten sind wahr
  MYTHEN.filter((m) => m.type === "Mythos").forEach((m) => rein({
    id: "aussage:m:" + m.title, art: "Aussage", frage: m.title, kontext: m.category,
    stimmt: false, antwort: "Stimmt nicht.", erklaerung: m.text + (m.quelle ? "  (" + m.quelle + ")" : "")
  }));
  SURPRISING_FACTS.forEach((f, i) => rein({
    id: "aussage:f:" + i, art: "Aussage", frage: f, kontext: "",
    stimmt: true, antwort: "Stimmt.", erklaerung: ""
  }));

  return karten;
}

// --- Lernstand ------------------------------------------------------------

function faelligkeit(stand, id) {
  const s = stand[id];
  if (!s) return -1;              // noch nie gesehen
  return s.faellig;
}

function LernenTab() {
  const [stand, setStand] = useGespeichert("lernen.stand", {});
  const [art, setArt] = useState("Alle");
  const [modus, setModus] = useState("quiz");
  const [karte, setKarte] = useState(null);
  const [optionen, setOptionen] = useState([]);
  const [gewaehlt, setGewaehlt] = useState(null);
  const [umgedreht, setUmgedreht] = useState(false);
  const [sitzung, setSitzung] = useState({ richtig: 0, gesamt: 0 });

  const alle = useMemo(baueKarten, []);
  const heute = heuteTag();

  const arten = ["Alle", "Jahreszahl", "Zuschreibung", "Aussage"];
  const auswahl = useMemo(
    () => (art === "Alle" ? alle : alle.filter((k) => k.art === art)),
    [art, alle]
  );

  const faellig = auswahl.filter((k) => faelligkeit(stand, k.id) <= heute);
  const neu = auswahl.filter((k) => !stand[k.id]).length;
  const verteilung = [1, 2, 3, 4, 5].map(
    (f) => auswahl.filter((k) => stand[k.id] && stand[k.id].fach === f).length
  );

  function optionenFuer(k) {
    if (k.art !== "Jahreszahl") return [];
    // Ablenker aus der zeitlichen Nachbarschaft: Ein Vorschlag, der tausend Jahre
    // danebenliegt, macht die Frage wertlos. Der Abstand waechst mit dem Alter,
    // weil "1848 oder 1849" eine andere Frage ist als "3200 oder 3210 v. Chr.".
    const spanne = Math.min(120, Math.max(25, Math.abs(k.jahr) * 0.04));
    const nah = alle.filter((x) => x.art === "Jahreszahl" && x.jahr !== k.jahr &&
      Math.abs(x.jahr - k.jahr) <= spanne);
    const quelle = nah.length >= 3 ? nah : alle.filter((x) => x.art === "Jahreszahl" && x.jahr !== k.jahr);
    const andere = [];
    for (const x of mischen(quelle)) {
      if (andere.indexOf(x.jahr) === -1) andere.push(x.jahr);
      if (andere.length === 3) break;
    }
    return mischen([k.jahr, ...andere]);
  }

  function naechste() {
    const kandidaten = auswahl.filter((k) => faelligkeit(stand, k.id) <= heute);
    const quelle = kandidaten.length ? kandidaten : auswahl;
    // Erst das Fälligste, dann Neues, sonst zufällig
    const sortiert = mischen(quelle).sort((a, b) => faelligkeit(stand, a.id) - faelligkeit(stand, b.id));
    const k = sortiert[0];
    setKarte(k);
    setOptionen(k ? optionenFuer(k) : []);
    setGewaehlt(null);
    setUmgedreht(false);
  }

  React.useEffect(() => { naechste(); }, [art, modus]);

  function werten(richtig) {
    if (!karte) return;
    const bisher = stand[karte.id] || { fach: 1, r: 0, f: 0 };
    const fach = richtig ? Math.min(5, bisher.fach + 1) : 1;
    setStand({
      ...stand,
      [karte.id]: {
        fach,
        faellig: heute + FAECHER[fach],
        r: bisher.r + (richtig ? 1 : 0),
        f: bisher.f + (richtig ? 0 : 1)
      }
    });
    setSitzung((s) => ({ richtig: s.richtig + (richtig ? 1 : 0), gesamt: s.gesamt + 1 }));
  }

  function antworten(wert) {
    setGewaehlt(wert);
    const richtig = karte.art === "Jahreszahl" ? wert === karte.jahr : wert === karte.stimmt;
    werten(richtig);
    setTimeout(naechste, 1400);
  }

  const knopf = "px-2.5 py-1.5 rounded text-xs font-mono uppercase tracking-wide border";

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      alle.length, " Karten aus allen Sammlungen — Jahreszahlen, Zitat-Zuschreibungen und Aussagen, die stimmen oder nicht."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#bd9563] text-sm mb-4 max-w-2xl" },
      "Karteikasten mit fünf Fächern: Richtig beantwortet wandert eine Karte ein Fach höher und kommt später wieder, falsch fällt sie zurück. Der Stand bleibt in diesem Browser — sichern lässt er sich unter Sicherung."),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-2" },
      arten.map((a) => /* @__PURE__ */ React.createElement("button", {
        key: a, onClick: () => setArt(a),
        className: `${knopf} ${art === a ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
      }, a, a === "Alle" ? "" : " (" + alle.filter((k) => k.art === a).length + ")"))
    ),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-5" },
      [["quiz", "Quiz"], ["karten", "Karteikarten"]].map(([id, label]) =>
        /* @__PURE__ */ React.createElement("button", {
          key: id, onClick: () => setModus(id),
          className: `${knopf} ${modus === id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#c2a06a]"}`
        }, label))
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3 mb-5 text-xs font-mono text-[#bd9563]" },
      /* @__PURE__ */ React.createElement("span", null, faellig.length, " fällig"),
      /* @__PURE__ */ React.createElement("span", null, neu, " noch nie gesehen"),
      verteilung.map((n, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: n ? "text-[#c9a877]" : "" },
        "Fach ", i + 1, ": ", n)),
      sitzung.gesamt > 0 && /* @__PURE__ */ React.createElement("span", { className: "text-[#f0d878]" },
        "diese Sitzung: ", sitzung.richtig, "/", sitzung.gesamt)
    ),

    !karte && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Keine Karten in dieser Auswahl."),

    karte && /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-5 max-w-2xl" },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 flex-wrap" },
        /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide border border-[#5c2018] rounded px-1.5 py-0.5 text-[#d4af37]" }, karte.art),
        karte.kontext && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563]" }, karte.kontext),
        stand[karte.id] && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#bd9563]" },
          "Fach ", stand[karte.id].fach)
      ),

      /* @__PURE__ */ React.createElement("p", { className: "font-serif text-xl text-[#f0d878] leading-snug mb-4" },
        karte.art === "Jahreszahl" ? "Wann?" : karte.art === "Zuschreibung" ? "Stimmt die Zuschreibung?" : "Stimmt diese Aussage?"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[17px] text-[#e8d5b0] leading-relaxed mb-5" }, karte.frage),

      // --- Quiz: automatisch bewertet ---
      modus === "quiz" && karte.art === "Jahreszahl" && /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2" },
        optionen.map((j) => {
          const gewaehltDies = gewaehlt === j;
          const istRichtig = j === karte.jahr;
          const zeigen = gewaehlt !== null;
          return /* @__PURE__ */ React.createElement("button", {
            key: j,
            disabled: zeigen,
            onClick: () => antworten(j),
            className: `px-3 py-2 rounded border text-left font-mono text-sm ${
              zeigen && istRichtig ? "border-[#3f6b4a] bg-[#1f3a24] text-[#9fd8ac]"
              : zeigen && gewaehltDies ? "border-[#a03a20] bg-[#6b2024] text-[#f0a878]"
              : "border-[#5c2018] text-[#e0b84a] hover:border-[#d4af37]"}`
          }, formatYear(j));
        })
      ),

      modus === "quiz" && karte.art !== "Jahreszahl" && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" },
        [[true, "Stimmt"], [false, "Stimmt nicht"]].map(([wert, label]) => {
          const zeigen = gewaehlt !== null;
          const istRichtig = wert === karte.stimmt;
          return /* @__PURE__ */ React.createElement("button", {
            key: label,
            disabled: zeigen,
            onClick: () => antworten(wert),
            className: `px-4 py-2 rounded border text-sm ${
              zeigen && istRichtig ? "border-[#3f6b4a] bg-[#1f3a24] text-[#9fd8ac]"
              : zeigen && gewaehlt === wert ? "border-[#a03a20] bg-[#6b2024] text-[#f0a878]"
              : "border-[#5c2018] text-[#e0b84a] hover:border-[#d4af37]"}`
          }, label);
        })
      ),

      // --- Karteikarten: selbst bewerten ---
      modus === "karten" && !umgedreht && /* @__PURE__ */ React.createElement("button", {
        onClick: () => setUmgedreht(true),
        className: "px-4 py-2 rounded border border-[#d4af37] text-[#f0d878] text-sm"
      }, "Umdrehen"),

      modus === "karten" && umgedreht && /* @__PURE__ */ React.createElement("div", null,
        /* @__PURE__ */ React.createElement("p", { className: "font-mono text-lg text-[#f0d878] mb-2" }, karte.antwort),
        karte.erklaerung && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed mb-4" }, karte.erklaerung),
        /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" },
          /* @__PURE__ */ React.createElement("button", {
            onClick: () => { werten(true); naechste(); },
            className: "px-4 py-2 rounded border border-[#3f6b4a] text-[#9fd8ac] text-sm"
          }, "Gewusst"),
          /* @__PURE__ */ React.createElement("button", {
            onClick: () => { werten(false); naechste(); },
            className: "px-4 py-2 rounded border border-[#a03a20] text-[#f0a878] text-sm"
          }, "Nicht gewusst")
        )
      ),

      // Auflösung im Quiz
      modus === "quiz" && gewaehlt !== null && /* @__PURE__ */ React.createElement("div", { className: "mt-4 pt-3 border-t border-[#5c2018]" },
        /* @__PURE__ */ React.createElement("p", { className: "font-mono text-sm text-[#f0d878] mb-1" }, karte.antwort),
        karte.erklaerung && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, karte.erklaerung)
      )
    ),

    /* @__PURE__ */ React.createElement("button", {
      onClick: naechste,
      className: "mt-4 inline-flex items-center gap-1.5 text-xs text-[#bd9563] hover:text-[#e0b84a]"
    }, /* @__PURE__ */ React.createElement(RotateCcw, { size: 12 }), "Andere Karte")
  );
}
function VerblueffendTab({ ziel }) {
  useSprungziel(ziel);
  const [suche, setSuche] = useState("");
  const [shown, setShown] = useState(SURPRISING_FACTS.map((_, i) => i).sort(() => Math.random() - 0.5));
  const sichtbar = shown.filter((i) => passt({ t: SURPRISING_FACTS[i] }, ["t"], suche));
  const [grenze, mehr] = useNachladen(sichtbar.length, 30, !!ziel);
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-3 gap-3" },
      /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] max-w-xl" },
        SURPRISING_FACTS.length, " kuriose, überraschende und wenig bekannte historische Zusammenhänge."),
      /* @__PURE__ */ React.createElement("button", {
        onClick: () => setShown([...shown].sort(() => Math.random() - 0.5)),
        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#5c2018] text-[#c2a06a] text-sm hover:text-[#d8c690] shrink-0"
      }, /* @__PURE__ */ React.createElement(RotateCcw, { size: 14 }), " Mischen")
    ),
    /* @__PURE__ */ React.createElement(Suchfeld, {
      wert: suche, setWert: setSuche, platzhalter: "Stichwort suchen …",
      anzahl: SURPRISING_FACTS.length, gefunden: sichtbar.length
    }),
    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
      sichtbar.slice(0, grenze).map((i) => /* @__PURE__ */ React.createElement("div", {
        key: i,
        "data-anker": ankerName(SURPRISING_FACTS[i]),
        className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4 flex gap-3"
      },
        /* @__PURE__ */ React.createElement(Sparkles, { size: 16, className: "text-[#d4af37] shrink-0 mt-0.5" }),
        /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#d8c690] leading-relaxed" }, SURPRISING_FACTS[i])
      ))
    ),
    mehr,
    sichtbar.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#c2a06a] text-sm" }, "Nichts gefunden.")
  );
}
function Historia() {
  // Der zuletzt geoeffnete Bereich bleibt ueber Sitzungen hinweg erhalten.
  const [bereich, setBereich] = useGespeichert("bereich", "start");
  const [unter, setUnter] = useGespeichert("unterreiter", null);
  const [ziel, setZiel] = useState(null);
  // Woher kam der letzte Sprung? Ohne das landet ein Rueckweg auf der
  // Uebersicht des Ausgangsbereichs, und man muss sich erneut durchscrollen.
  const [herkunft, setHerkunft] = useState(null);

  // Suche und Querverweise arbeiten mit einzelnen Reiternamen; hier wird
  // daraus der passende Bereich samt Unterreiter gesetzt.
  // 'quelle' beschreibt den Ausgangspunkt: { reiter, eintrag, label }.
  // Wer sie mitgibt, ermoeglicht eine genaue Rueckkehr; ohne sie wird nur
  // der Reiter gemerkt.
  SPRINGE = (reiter, eintrag, quelle) => {
    const b = bereichFuer(reiter);
    const vorher = quelle || { reiter: tab, eintrag: null };
    setHerkunft({
      reiter: vorher.reiter,
      eintrag: vorher.eintrag || null,
      label: vorher.label || reiterLabel(vorher.reiter),
      scrollY: typeof window !== "undefined" ? window.scrollY : 0
    });
    setZiel(eintrag ? { reiter, eintrag, n: Date.now() } : null);
    setBereich(b.bereich);
    setUnter(b.unter);
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  };

  const geheZurueck = () => {
    if (!herkunft) return;
    const h = herkunft;
    const b = bereichFuer(h.reiter);
    setHerkunft(null);
    setZiel(h.eintrag ? { reiter: h.reiter, eintrag: h.eintrag, n: Date.now() } : null);
    setBereich(b.bereich);
    setUnter(b.unter);
    // Erst scrollen, wenn die Seite wieder lang genug ist: Die Zielansicht
    // baut sich in mehreren Schritten auf, und ein zu frueher Sprung landet
    // oben statt an der alten Stelle. Deshalb wird eine halbe Sekunde lang
    // nachgefasst, bis die Position sitzt.
    //
    // Bewusst mit Timern statt requestAnimationFrame: In einem Tab im
    // Hintergrund laeuft rAF gar nicht. Genau daran ist die erste Fassung
    // gescheitert - der Reiter wechselte, die Position blieb oben.
    const zielHoehe = h.scrollY || 0;
    if (typeof window !== "undefined" && zielHoehe > 0) {
      let versuche = 0;
      const scrollen = () => {
        window.scrollTo(0, zielHoehe);
        versuche++;
        if (Math.abs(window.scrollY - zielHoehe) > 4 && versuche < 25) setTimeout(scrollen, 20);
      };
      setTimeout(scrollen, 0);
    }
  };

  // Wer selbst im Menue umschaltet, verlaesst den Sprungweg - die alte
  // Zurueck-Marke waere dann irrefuehrend.
  //
  // Und: an den Anfang scrollen. Ohne das landet man beim Wechsel dort,
  // wo man in der vorigen Liste stand - bei Listen von mehreren
  // zehntausend Pixeln Laenge mitten im Nichts, ohne Einleitung und
  // ohne die Filterknoepfe gesehen zu haben.
  const nachOben = () => { if (typeof window !== "undefined") window.scrollTo(0, 0); };
  const wechsleBereich = (id) => { setHerkunft(null); setZiel(null); setBereich(id); nachOben(); };
  const wechsleUnter = (id) => { setHerkunft(null); setZiel(null); setUnter(id); nachOben(); };

  const zielFuer = (reiter) => (ziel && ziel.reiter === reiter ? ziel.eintrag : null);
  // Welcher einzelne Reiter ist gerade sichtbar?
  const aktuellerBereich = BEREICHE.find((b) => b.id === bereich) || BEREICHE[0];
  const tab = aktuellerBereich.unter.length
    ? (aktuellerBereich.unter.some((u) => u.id === unter) ? unter : aktuellerBereich.unter[0].id)
    : aktuellerBereich.id;
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
        /* Sprungziel aus der Suche: kurz hervorheben, damit der Eintrag
           in einer langen Liste zu finden ist. */
        [data-hervor] { outline: 2px solid #d4af37; outline-offset: 3px; border-radius: 8px; }
        /* Hinweis, dass die Bereichsleiste seitlich weitergeht. Nur dann
           sichtbar, wenn tatsaechlich etwas ausserhalb liegt. */
        .verlauf-rechts { position: absolute; top: 0; right: 0; bottom: 0; width: 28px;
          pointer-events: none; background: linear-gradient(to right, rgba(74,16,21,0), #4a1015); }
        @media (min-width: 780px) { .verlauf-rechts { display: none; } }
      `), /* @__PURE__ */ React.createElement(Header, { bereich, setBereich: wechsleBereich, unter, setUnter: wechsleUnter }), /* @__PURE__ */ React.createElement("main", { className: "max-w-6xl mx-auto px-4 py-6" }, herkunft && /* @__PURE__ */ React.createElement("button", {
        onClick: geheZurueck,
        className: "inline-flex items-center gap-1.5 mb-4 text-sm text-[#c9a877] hover:text-[#f0d878]"
      }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu ", herkunft.label), tab === "start" && /* @__PURE__ */ React.createElement(StartTab, { key: "st" + (ziel ? ziel.n : 0) }), tab === "suche" && /* @__PURE__ */ React.createElement(SucheTab, null), tab === "epochen" && /* @__PURE__ */ React.createElement(EpochenTab, { ziel: zielFuer("epochen"), key: "ep" + (ziel ? ziel.n : 0) }), tab === "vertiefungen" && /* @__PURE__ */ React.createElement(VertiefungenTab, { ziel: zielFuer("vertiefungen"), key: "vt" + (ziel ? ziel.n : 0) }), tab === "themen" && /* @__PURE__ */ React.createElement(ThemenTab, { ziel: zielFuer("themen"), key: "th" + (ziel ? ziel.n : 0) }), tab === "schluessel" && /* @__PURE__ */ React.createElement(SchluesselmomenteTab, { ziel: zielFuer("schluessel"), key: "sm" + (ziel ? ziel.n : 0) }), tab === "laender" && /* @__PURE__ */ React.createElement(LaenderTab, { ziel: zielFuer("laender"), key: "la" + (ziel ? ziel.n : 0) }), tab === "schlachten" && /* @__PURE__ */ React.createElement(SchlachtenTab, { ziel: zielFuer("schlachten"), key: "sl" + (ziel ? ziel.n : 0) }), tab === "zitate" && /* @__PURE__ */ React.createElement(ZitateTab, { ziel: zielFuer("zitate"), key: "zi" + (ziel ? ziel.n : 0) }), tab === "mythen" && /* @__PURE__ */ React.createElement(MythenTab, { ziel: zielFuer("mythen"), key: "mt" + (ziel ? ziel.n : 0) }), tab === "mysterien" && /* @__PURE__ */ React.createElement(MysterienTab, { ziel: zielFuer("mysterien"), key: "my" + (ziel ? ziel.n : 0) }), tab === "zeitstrahl" && /* @__PURE__ */ React.createElement(ZeitstrahlTab, null), tab === "zeitschnitt" && /* @__PURE__ */ React.createElement(ZeitschnittTab, null), tab === "personen" && /* @__PURE__ */ React.createElement(PersonenTab, null), tab === "nationen" && /* @__PURE__ */ React.createElement(NationenTab, null), tab === "dynastien" && /* @__PURE__ */ React.createElement(DynastienTab, { ziel: zielFuer("dynastien"), key: "dy" + (ziel ? ziel.n : 0) }), tab === "lernen" && /* @__PURE__ */ React.createElement(LernenTab, null), tab === "fragen" && /* @__PURE__ */ React.createElement(FragenTab, null), tab === "sicherung" && /* @__PURE__ */ React.createElement(SicherungTab, null), tab === "verblueffend" && /* @__PURE__ */ React.createElement(VerblueffendTab, { ziel: zielFuer("verblueffend"), key: "vf" + (ziel ? ziel.n : 0) })));
}

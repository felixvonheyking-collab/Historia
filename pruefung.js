/*
 * Historia – Prüfskript
 *
 * Aufruf:  node pruefung.js
 *
 * Prüft die Inhalte und den Aufbau der App, ohne Fremdbibliotheken.
 * Gedacht als Netz gegen genau die Fehler, die beim Wachsen der App
 * immer wieder aufgetreten sind: doppelte Einträge, widersprüchliche
 * Jahreszahlen, fehlende Pflichtfelder – und ein Startfehler, wenn
 * index.html und sw.js unterschiedliche Versionsmarken tragen.
 *
 * Rückgabewert: 0 wenn alles in Ordnung ist, sonst 1.
 * Hinweise (nicht kritisch) werden getrennt ausgegeben.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const WURZEL = __dirname;
const fehler = [];
const hinweise = [];
const meldeFehler = (t) => fehler.push(t);
const meldeHinweis = (t) => hinweise.push(t);

const DATEN = [
  "data-epochen.js",
  "data-sammlungen.js",
  "data-laender.js",
  "data-mythen.js",
  "data-vertiefungen.js",
  "data-themen.js",
  "data-mysterien.js",
  "data-dynastien.js"
];

/* ---------------------------------------------------------------- Einlesen */

function lade() {
  const kontext = { console };
  vm.createContext(kontext);
  for (const datei of DATEN) {
    const pfad = path.join(WURZEL, datei);
    if (!fs.existsSync(pfad)) {
      meldeFehler("Datei fehlt: " + datei);
      continue;
    }
    try {
      vm.runInContext(fs.readFileSync(pfad, "utf8"), kontext, { filename: datei });
    } catch (e) {
      meldeFehler("Syntaxfehler in " + datei + ": " + e.message);
    }
  }
  try {
    return vm.runInContext(
      "({ EPOCHS, SCHLUESSELMOMENTE, SURPRISING_FACTS, QUOTES, BATTLES," +
      "   COUNTRY_TIMELINES, MYTHEN, VERTIEFUNGEN, THEMEN, MYSTERIEN, DYNASTIEN })",
      kontext
    );
  } catch (e) {
    meldeFehler("Eine Datensammlung fehlt oder heißt anders: " + e.message);
    return null;
  }
}

/* ------------------------------------------------------------ Hilfsprüfer */

const woerter = (s) =>
  new Set(String(s).toLowerCase().replace(/[^a-zäöüß0-9 ]/g, " ").split(/\s+/).filter((w) => w.length > 3));

function aehnlich(a, b) {
  const A = woerter(a), B = woerter(b);
  if (!A.size || !B.size) return 0;
  const schnitt = [...A].filter((x) => B.has(x)).length;
  return schnitt / Math.min(A.size, B.size);
}

function pruefeDubletten(name, liste, schluessel) {
  const werte = liste.map((x) => (schluessel ? x[schluessel] : x));
  const doppelt = [...new Set(werte.filter((w, i) => werte.indexOf(w) !== i))];
  doppelt.forEach((d) => meldeFehler(name + ": doppelter Eintrag – " + String(d).slice(0, 90)));
}

function pruefeAehnliche(name, liste, schluessel, schwelle) {
  const werte = liste.map((x) => (schluessel ? x[schluessel] : x));
  for (let i = 0; i < werte.length; i++) {
    for (let j = i + 1; j < werte.length; j++) {
      if (aehnlich(werte[i], werte[j]) >= schwelle) {
        meldeHinweis(
          name + ": sehr ähnlich –\n      A: " + String(werte[i]).slice(0, 85) +
          "\n      B: " + String(werte[j]).slice(0, 85)
        );
      }
    }
  }
}

function pruefeFelder(name, liste, pflicht, bezeichner) {
  liste.forEach((x, i) => {
    const wer = bezeichner && x[bezeichner] ? String(x[bezeichner]).slice(0, 60) : "Eintrag " + i;
    pflicht.forEach((f) => {
      const wert = x[f];
      const leer = wert === undefined || wert === null || wert === "" ||
                   (Array.isArray(wert) && wert.length === 0);
      if (leer) meldeFehler(name + " – " + wer + ": Feld '" + f + "' fehlt oder ist leer");
    });
  });
}

// Nur fuer kuratierte Ereignislisten gedacht, nicht fuer Schlachten:
// Verdun und die Somme liegen im selben Jahr und aehneln sich sprachlich,
// sind aber zwei verschiedene Schlachten.
// Kurze Titel wie "Papier in China" und "Erfindung des Papiers" haben kaum
// gemeinsame Wörter und rutschen durch jede Ähnlichkeitsprüfung. Zwei Einträge
// zum selben Jahr, deren Texte sich überschneiden, sind aber fast immer dasselbe
// Ereignis in zwei Formulierungen.
function pruefeGleichesEreignis(name, liste, jahrFeld, titelFeld, textFeld) {
  for (let i = 0; i < liste.length; i++) {
    for (let j = i + 1; j < liste.length; j++) {
      const a = liste[i], b = liste[j];
      if (Math.abs(a[jahrFeld] - b[jahrFeld]) > 3) continue;
      const q = Math.max(
        aehnlich(a[titelFeld], b[titelFeld]),
        aehnlich(a[textFeld], b[textFeld]),
        aehnlich(a[titelFeld] + " " + a[textFeld], b[titelFeld] + " " + b[textFeld])
      );
      if (q >= 0.3) {
        meldeFehler(
          name + ": zwei Einträge zum selben Ereignis (" + a[jahrFeld] + " / " + b[jahrFeld] + ") –\n      A: " +
          a[titelFeld] + "\n      B: " + b[titelFeld]
        );
      }
    }
  }
}

function pruefeChronologie(name, liste, jahrFeld) {
  for (let i = 1; i < liste.length; i++) {
    if (liste[i - 1][jahrFeld] > liste[i][jahrFeld]) {
      meldeFehler(
        name + ": nicht chronologisch – " + liste[i - 1][jahrFeld] +
        " steht vor " + liste[i][jahrFeld]
      );
      return;
    }
  }
}

/* ----------------------------------------------------- Aufbau der Dateien */

function pruefeVersionen() {
  const html = fs.readFileSync(path.join(WURZEL, "index.html"), "utf8");
  const sw = fs.readFileSync(path.join(WURZEL, "sw.js"), "utf8");

  const swVersion = (sw.match(/const VERSION = '([^']+)'/) || [])[1];
  if (!swVersion) { meldeFehler("sw.js: VERSION nicht gefunden"); return; }

  const geladen = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))(?:\?v=([^"]*))?"/g)]
    .map((m) => ({ datei: m[1], version: m[2] || null }));

  const swListe = ((sw.match(/const VERSIONIERT = \[([\s\S]*?)\]/) || [])[1] || "")
    .split(",").map((x) => x.trim().replace(/['"]/g, "")).filter((x) => x.startsWith("./"))
    .map((x) => x.slice(2));

  geladen.forEach((g) => {
    if (g.version && g.version !== swVersion) {
      meldeFehler("Versionsmarke weicht ab: index.html lädt " + g.datei + "?v=" + g.version +
                  ", sw.js führt " + swVersion);
    }
    if (g.version && !swListe.includes(g.datei)) {
      meldeFehler(g.datei + ": von index.html versioniert geladen, fehlt aber in der Vorratsliste von sw.js");
    }
    if (!g.version && swListe.includes(g.datei)) {
      meldeFehler(g.datei + ": sw.js erwartet eine Versionsmarke, index.html lädt ohne");
    }
    if (!fs.existsSync(path.join(WURZEL, g.datei))) {
      meldeFehler(g.datei + ": wird von index.html geladen, existiert aber nicht");
    }
  });

  swListe.forEach((d) => {
    if (!geladen.some((g) => g.datei === d)) {
      meldeFehler(d + ": in sw.js gelistet, wird von index.html aber nicht geladen");
    }
  });

  // Alle Datendateien müssen vor app.js stehen, sonst fehlen beim Start die Daten.
  const reihenfolge = geladen.map((g) => g.datei);
  const appIndex = reihenfolge.indexOf("app.js");
  DATEN.forEach((d) => {
    const i = reihenfolge.indexOf(d);
    if (i === -1) meldeFehler(d + ": wird von index.html gar nicht geladen");
    else if (appIndex !== -1 && i > appIndex) meldeFehler(d + ": wird nach app.js geladen – app.js braucht die Daten aber beim Start");
  });

  console.log("  Versionsmarke: " + swVersion + " (" + geladen.length + " Dateien, Reihenfolge geprüft)");
}

function pruefeAppSyntax() {
  for (const datei of ["app.js", "sw.js"]) {
    const pfad = path.join(WURZEL, datei);
    if (!fs.existsSync(pfad)) { meldeFehler("Datei fehlt: " + datei); continue; }
    try {
      new vm.Script(fs.readFileSync(pfad, "utf8"), { filename: datei });
    } catch (e) {
      meldeFehler("Syntaxfehler in " + datei + ": " + e.message);
    }
  }
}


/* ------------------------------------------- Widersprueche zwischen Sammlungen

   Dasselbe Ereignis steht oft in mehreren Sammlungen. Stehen dort
   verschiedene Jahre, ist das entweder ein Fehler – oder gewollt, weil
   Beginn und Ende, Beschluss und Inkrafttreten gemeint sind. Letzteres
   muss hier begruendet eingetragen werden, sonst meldet die Pruefung es.
   ========================================================================= */

const ERLAUBTE_ABWEICHUNGEN = [
  ["Beginn der Kreuzzüge", "Die Kreuzzüge", "1095 Aufruf von Clermont, 1096 Aufbruch"],
  ["Berliner Kongo-Konferenz", "Die Berliner Konferenz endet", "1884 Beginn, 1885 Schlussakte"],
  ["Berliner Konferenz", "Die Berliner Konferenz endet", "1884 Beginn, 1885 Schlussakte"],
  ["Russisch-Japanischer Krieg", "Russisch-Japanischer Krieg endet", "1904 Beginn, 1905 Ende"],
  ["Abschaffung der Sklaverei im Britischen Empire", "Abschaffung der Sklaverei im Britischen Reich", "1833 Gesetz, 1834 Inkrafttreten"],
  ["Abschaffung der Sklaverei im Britischen Empire", "Abschaffung im Britischen Reich", "1833 Gesetz, 1834 Inkrafttreten"],
  ["Ende der Apartheid", "Das Ende der Apartheid", "Vertiefung beginnt 1990 mit Mandelas Freilassung, Wahlen 1994"],
  ["Mongolensturm", "Der Mongolensturm", "Regional unterschiedliche Jahre desselben Feldzugs"],
  ["Mongolische Eroberung", "Mongolische Invasionen", "1231 erster Angriff auf Korea, 1237 Feldzug gegen die Rus"],
  ["Japanische Besetzung", "Japanische Truppen im Land", "8. Dezember 1941 Thailand, 1942 die übrige Region"],
  ["Osmanische Herrschaft", "Osmanische Herrschaft beginnt", "1516 Levante, 1517 Ägypten"],
  ["Der Schwarze Tod erreicht Europa", "Der Schwarze Tod erreicht Italien", "Oktober 1347 Sizilien, 1348 Festland"],
  ["Der Schwarze Tod", "Der Schwarze Tod erreicht Italien", "Oktober 1347 Sizilien, 1348 Festland"],
  ["Der Schwarze Tod", "Der Schwarze Tod erreicht Frankreich", "Oktober 1347 Sizilien, 1348 Frankreich"],
  ["Der Schwarze Tod", "Der Schwarze Tod erreicht England", "Oktober 1347 Sizilien, 1348 England"],
  ["Mendel stellt seine Vererbungsregeln vor", "Mendels Regeln erscheinen im Druck", "1865 Vortrag, 1866 Veröffentlichung"],
  ["Codex Justinianus", "Die Digesten des Corpus Iuris Civilis", "529 Codex, 533 Digesten"],
  ["Der Buchdruck", "Die Gutenberg-Bibel erscheint", "um 1450 die Presse, 1455 die Bibel"],
  ["Gutenbergs Druckpresse", "Die Gutenberg-Bibel erscheint", "um 1450 die Presse, 1455 die Bibel"]
];

// Woerter, die kein Ereignis kennzeichnen und deshalb keine Verwandtschaft stiften
const ALLERWELT = new Set(["gründung", "ende", "beginn", "erste", "ersten", "erster", "aufstand",
  "krieg", "kriegs", "kriege", "bürgerkrieg", "revolution", "schlacht", "vertrag", "frieden",
  "unabhängig", "unabhängigkeit", "reich", "reiches", "referendum", "machtübernahme", "erfindung",
  "entdeckung", "große", "großen", "großer", "neue", "neuen", "zweite", "zweiten", "dritte",
  "jahre", "jahren", "besetzung", "eroberung", "verfassung", "beitritt", "demokratie", "dynastie",
  "republik", "weltkrieg", "weltkriegs", "weltkriege", "sklaverei", "seeschlacht", "kaiser",
  "königreich", "ausbruch", "gruendung", "abschaffung", "zerstörung", "einführung",
  "besetzt", "erobert", "gegründet", "unabhängige", "staaten", "vereinigten"]);

function kernwoerter(s) {
  return new Set(String(s).toLowerCase().replace(/[^a-zäöüß0-9 ]/g, " ").split(/\s+/)
    .filter((w) => w.length >= 5 && !ALLERWELT.has(w)));
}

function istErlaubt(a, b) {
  return ERLAUBTE_ABWEICHUNGEN.some(([x, y]) =>
    (a === x && b === y) || (a === y && b === x));
}

function pruefeWiderspruecheZwischenSammlungen(D) {
  const alle = [];
  D.EPOCHS.forEach((e) => e.events.forEach((x) =>
    alle.push({ jahr: x.year, titel: x.title, quelle: "Epoche " + e.name })));
  D.SCHLUESSELMOMENTE.forEach((x) => alle.push({ jahr: x.year, titel: x.title, quelle: "Schlüsselmoment" }));
  D.BATTLES.forEach((x) => alle.push({ jahr: x.year, titel: x.name, quelle: "Schlacht" }));
  Object.entries(D.COUNTRY_TIMELINES).forEach(([l, d]) => d.events.forEach((x) =>
    alle.push({ jahr: x.year, titel: x.title, quelle: "Zeitleiste " + l })));
  D.VERTIEFUNGEN.forEach((x) => alle.push({ jahr: x.jahr, titel: x.titel, quelle: "Vertiefung" }));
  D.THEMEN.forEach((t) => t.stationen.forEach((x) =>
    alle.push({ jahr: x.jahr, titel: x.titel, quelle: "Thema " + t.titel })));

  const gemeldet = new Set();
  for (let i = 0; i < alle.length; i++) {
    for (let j = i + 1; j < alle.length; j++) {
      const a = alle[i], b = alle[j];
      if (a.quelle === b.quelle) continue;
      const abstand = Math.abs(a.jahr - b.jahr);
      if (abstand === 0 || abstand > 6) continue;
      const A = kernwoerter(a.titel), B = kernwoerter(b.titel);
      if (!A.size || !B.size) continue;
      const gemeinsam = [...A].filter((x) => B.has(x));
      // Entscheidend ist der Anteil, nicht die Anzahl: Ein geteilter Eigenname
      // wie "Alexander" verbindet zwei ganz verschiedene Ereignisse, ein
      // nahezu identischer Titel dagegen meint fast sicher dasselbe.
      const anteil = gemeinsam.length / Math.min(A.size, B.size);
      const verwandt = anteil >= 0.7 &&
        (Math.min(A.size, B.size) >= 2 || gemeinsam.some((w) => w.length >= 8));
      if (!verwandt) continue;
      if (istErlaubt(a.titel, b.titel)) continue;
      const marke = [a.titel, b.titel].sort().join("|");
      if (gemeldet.has(marke)) continue;
      gemeldet.add(marke);
      meldeFehler(
        "Verschiedene Jahre fuer dasselbe Ereignis (" + abstand + " Jahre Abstand) –\n      " +
        a.jahr + "  " + a.titel + "  [" + a.quelle + "]\n      " +
        b.jahr + "  " + b.titel + "  [" + b.quelle + "]\n" +
        "      Wenn beide Jahre stimmen: in ERLAUBTE_ABWEICHUNGEN eintragen, mit Begruendung."
      );
    }
  }
}

/* --------------------------------------------------------------- Inhalte */

function pruefeInhalte(D) {
  const epochenIds = D.EPOCHS.map((e) => e.id);

  // Epochen
  pruefeDubletten("Epochen", D.EPOCHS, "id");
  pruefeFelder("Epochen", D.EPOCHS, ["id", "name", "span", "description", "literatur"], "name");
  D.EPOCHS.forEach((ep) => {
    pruefeFelder("Ereignisse in " + ep.name, ep.events, ["year", "title", "text"], "title");
    pruefeFelder("Personen in " + ep.name, ep.figures, ["name", "years", "text"], "name");
    pruefeFelder("Reiche in " + ep.name, ep.nations, ["name", "text"], "name");
  });
  const allePersonen = D.EPOCHS.flatMap((e) => e.figures);
  pruefeDubletten("Persönlichkeiten", allePersonen, "name");
  // Reiche dürfen in mehreren Epochen vorkommen – das Osmanische Reich bestand
  // über sechs Jahrhunderte. Doppelt innerhalb einer Epoche ist dagegen ein Fehler.
  D.EPOCHS.forEach((ep) => pruefeDubletten("Reiche in " + ep.name, ep.nations, "name"));
  const reichNamen = D.EPOCHS.flatMap((e) => e.nations.map((n) => n.name));
  [...new Set(reichNamen.filter((n, i) => reichNamen.indexOf(n) !== i))].forEach((n) =>
    meldeHinweis("Reich '" + n + "' steht in mehreren Epochen – bei langlebigen Reichen gewollt"));

  // Vertiefungen
  pruefeDubletten("Vertiefungen", D.VERTIEFUNGEN, "id");
  pruefeDubletten("Vertiefungen", D.VERTIEFUNGEN, "titel");
  pruefeFelder("Vertiefungen", D.VERTIEFUNGEN,
    ["id", "titel", "epoche", "zeitraum", "region", "leitsatz", "vorgeschichte",
     "verlauf", "folgen", "strittig", "zahlen", "quellen"], "titel");
  D.VERTIEFUNGEN.forEach((v) => {
    if (!epochenIds.includes(v.epoche)) meldeFehler("Vertiefung '" + v.titel + "': unbekannte Epoche '" + v.epoche + "'");
    if (v.vertiefungVon) meldeHinweis("Vertiefung '" + v.titel + "': unbekanntes Feld vertiefungVon");
  });

  // Themen
  pruefeDubletten("Themen", D.THEMEN, "id");
  pruefeFelder("Themen", D.THEMEN, ["id", "titel", "kurz", "einleitung", "stationen", "strittig", "quellen"], "titel");
  D.THEMEN.forEach((t) => {
    pruefeFelder("Stationen in '" + t.titel + "'", t.stationen, ["jahr", "titel", "text"], "titel");
    pruefeChronologie("Thema '" + t.titel + "'", t.stationen, "jahr");
  });

  // Mysterien
  pruefeDubletten("Mysterien", D.MYSTERIEN, "id");
  pruefeFelder("Mysterien", D.MYSTERIEN,
    ["id", "titel", "kategorie", "status", "gesichert", "raetsel",
     "erklaerungen", "forschungsstand", "abgrenzung", "quellen"], "titel");
  D.MYSTERIEN.forEach((m) => {
    if (!["ungeklaert", "teilweise", "geloest"].includes(m.status)) {
      meldeFehler("Mysterium '" + m.titel + "': unbekannter Status '" + m.status + "'");
    }
    (m.erklaerungen || []).forEach((e, i) => {
      ["these", "dafuer", "dagegen"].forEach((f) => {
        if (!e[f]) meldeFehler("Mysterium '" + m.titel + "', These " + (i + 1) + ": '" + f + "' fehlt");
      });
    });
  });

  // Dynastien
  pruefeDubletten("Dynastien", D.DYNASTIEN, "id");
  pruefeFelder("Dynastien", D.DYNASTIEN,
    ["id", "reich", "untertitel", "zeitraum", "farbe", "einleitung", "hinweis", "quellen", "perioden"], "reich");
  const vertIds = new Set(D.VERTIEFUNGEN.map((v) => v.id));
  D.DYNASTIEN.forEach((r) => {
    const gesehen = new Set();
    r.perioden.forEach((p) => {
      pruefeFelder("Perioden in '" + r.reich + "'", p.dynastien, ["name", "zeitraum", "kurz", "herrscher"], "name");
      p.dynastien.forEach((d) => {
        pruefeFelder("Dynastie '" + d.name + "'", d.herrscher, ["name", "regierung", "kurz"], "name");
        d.herrscher.forEach((h) => {
          // Ein Name kann in einem Reich nur einmal vorkommen; sonst ist ein
          // Herrscher versehentlich zweimal eingetragen.
          if (gesehen.has(h.name)) meldeFehler("Dynastien '" + r.reich + "': '" + h.name + "' steht doppelt");
          gesehen.add(h.name);
          if (h.vertiefung && !vertIds.has(h.vertiefung)) {
            meldeFehler("Dynastien '" + r.reich + "': '" + h.name + "' verweist auf fehlende Vertiefung '" + h.vertiefung + "'");
          }
        });
      });
    });
  });

  // Länder
  Object.entries(D.COUNTRY_TIMELINES).forEach(([land, d]) => {
    if (!d.color) meldeFehler("Zeitleiste '" + land + "': keine Farbe");
    pruefeFelder("Zeitleiste '" + land + "'", d.events, ["year", "title", "text"], "title");
    pruefeChronologie("Zeitleiste '" + land + "'", d.events, "year");
    pruefeDubletten("Zeitleiste '" + land + "'", d.events, "title");
    d.events.forEach((e) => {
      if (e.vertiefung && !vertIds.has(e.vertiefung)) {
        meldeFehler("Zeitleiste '" + land + "': '" + e.title + "' verweist auf fehlende Vertiefung '" + e.vertiefung + "'");
      }
    });
  });

  // Sammlungen
  pruefeDubletten("Schlüsselmomente", D.SCHLUESSELMOMENTE, "title");
  pruefeGleichesEreignis("Schlüsselmomente", D.SCHLUESSELMOMENTE, "year", "title", "text");
  pruefeFelder("Schlüsselmomente", D.SCHLUESSELMOMENTE, ["year", "title", "category", "text"], "title");
  const vertiefungsIds = D.VERTIEFUNGEN.map((v) => v.id);
  D.SCHLUESSELMOMENTE.forEach((s) => {
    if (s.vertiefung && !vertiefungsIds.includes(s.vertiefung)) {
      meldeFehler("Schlüsselmoment '" + s.title + "': verweist auf unbekannte Vertiefung '" + s.vertiefung + "'");
    }
  });

  pruefeDubletten("Schlachten", D.BATTLES, "name");
  pruefeFelder("Schlachten", D.BATTLES, ["year", "name", "war", "text"], "name");

  pruefeDubletten("Mythen", D.MYTHEN, "title");
  pruefeFelder("Mythen", D.MYTHEN, ["category", "type", "title", "text"], "title");
  D.MYTHEN.filter((m) => m.type === "Mythos" && !m.quelle)
    .forEach((m) => meldeFehler("Mythos '" + m.title + "': ohne Beleg – gerade Richtigstellungen brauchen einen"));

  pruefeDubletten("Zitate", D.QUOTES, "text");
  pruefeFelder("Zitate", D.QUOTES, ["text", "author", "status"], "author");
  const erlaubt = ["belegt", "sinngemäß", "zugeschrieben", "falsch zitiert", "falsch zugeschrieben", "Sprichwort"];
  D.QUOTES.forEach((q) => {
    if (!erlaubt.includes(q.status)) meldeFehler("Zitat von " + q.author + ": unbekannter Belegstatus '" + q.status + "'");
  });

  pruefeDubletten("Verblüffende Fakten", D.SURPRISING_FACTS, null);

  // Weiche Prüfungen
  pruefeAehnliche("Verblüffende Fakten", D.SURPRISING_FACTS, null, 0.6);
  pruefeAehnliche("Schlüsselmomente", D.SCHLUESSELMOMENTE, "title", 0.7);
  pruefeAehnliche("Mythen", D.MYTHEN, "title", 0.7);

  D.SURPRISING_FACTS.forEach((f) => {
    D.MYTHEN.forEach((m) => {
      if (aehnlich(f, m.title) >= 0.65) {
        meldeHinweis("Fakt doppelt einen Mythos –\n      Fakt:   " + f.slice(0, 85) +
                     "\n      Mythos: " + m.title);
      }
    });
  });

  console.log("  Epochen " + D.EPOCHS.length +
    " · Ereignisse " + D.EPOCHS.reduce((a, e) => a + e.events.length, 0) +
    " · Personen " + allePersonen.length +
    " · Reiche " + D.EPOCHS.reduce((a, e) => a + e.nations.length, 0));
  console.log("  Vertiefungen " + D.VERTIEFUNGEN.length +
    " · Themen " + D.THEMEN.length +
    " · Mysterien " + D.MYSTERIEN.length +
    " · Regionen " + Object.keys(D.COUNTRY_TIMELINES).length);
  console.log("  Schlüsselmomente " + D.SCHLUESSELMOMENTE.length +
    " · Schlachten " + D.BATTLES.length +
    " · Zitate " + D.QUOTES.length +
    " · Mythen " + D.MYTHEN.length +
    " · Fakten " + D.SURPRISING_FACTS.length);
  console.log("  Dynastien: " + D.DYNASTIEN.length + " Reiche · " +
    D.DYNASTIEN.reduce((a, r) => a + r.perioden.reduce((b, p) => b + p.dynastien.length, 0), 0) + " Dynastien · " +
    D.DYNASTIEN.reduce((a, r) => a + r.perioden.reduce((b, p) =>
      b + p.dynastien.reduce((c, d) => c + d.herrscher.length, 0), 0), 0) + " Herrscher");
  pruefeWiderspruecheZwischenSammlungen(D);

  const verknuepft = D.SCHLUESSELMOMENTE.filter((s) => s.vertiefung).length;
  const laenderVerweise = Object.values(D.COUNTRY_TIMELINES)
    .reduce((a, d) => a + d.events.filter((e) => e.vertiefung).length, 0);
  console.log("  Zeitleisten-Einträge mit Verweis auf eine Vertiefung: " + laenderVerweise);
  console.log("  Schlüsselmomente mit Verweis auf eine Vertiefung: " + verknuepft);
}

/* ------------------------------------------------------------------ Lauf */

console.log("Historia – Prüfung\n");
console.log("Aufbau:");
pruefeAppSyntax();
pruefeVersionen();

const D = lade();
if (D) {
  console.log("\nInhalte:");
  pruefeInhalte(D);
}

console.log("");
if (hinweise.length) {
  console.log("Hinweise (" + hinweise.length + ") – kein Fehler, aber ansehen:");
  hinweise.forEach((h) => console.log("  · " + h));
  console.log("");
}
if (fehler.length) {
  console.log("FEHLER (" + fehler.length + "):");
  fehler.forEach((f) => console.log("  ✗ " + f));
  console.log("\nPrüfung fehlgeschlagen.");
  process.exit(1);
}
console.log("Alles in Ordnung.");
process.exit(0);

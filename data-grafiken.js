/* =========================================================
   HISTORIA — DATEN: Grafiken zu den Vertiefungen

   Eigene Vektorzeichnungen, nach Vertiefungs-Id abgelegt. Bewusst keine
   fremden Bilder: keine Lizenzfrage, wenige Kilobyte, auf jedem Display
   scharf, offline verfuegbar.

   Aufbau je Grafik:
     titel          Ueberschrift unter der Zeichnung
     viewBox        SVG-Koordinatenraum, in der Regel "0 0 800 H"
     mindestbreite  ab dieser Pixelbreite wird waagerecht gescrollt
     svg            der Inhalt (ohne aeusseres <svg>-Element)
     beschriftung   erklaerender Satz darunter
     quelle         woher die dargestellten Zahlen oder Formen stammen

   Regeln fuer neue Grafiken:
   - Farben und Maße gehoeren ins SVG, nicht in Tailwind-Klassen. Das
     vorgebaute tailwind.css kennt neu erfundene Klassen nicht, und der
     Fehler waere unsichtbar.
   - Keine externen Schriften. font-family bleibt bei den generischen
     Familien, sonst weicht die Darstellung je Geraet ab.
   - Schriftgroeßen nicht unter 13 Einheiten, sonst ist es auf dem Handy
     nach der Skalierung unlesbar.
   - Nichts zeichnen, was die Quellen nicht hergeben. Wo eine Form
     rekonstruiert ist, sagt es die Beschriftung.
   ========================================================= */

const G_FARBEN = {
  linie: "#8a6238",
  text: "#c9a877",
  hell: "#e8d5b0",
  gold: "#d4af37",
  rot: "#a8402a",
  blau: "#6f93bd",
  gruen: "#6b9a76",
  grund: "#5c1a1e",
  dunkel: "#3e1014"
};

const GRAFIKEN = {

/* ----------------------------------------------------------- Cannae */
"karthago": [{
  titel: "Cannae, 216 v. Chr. — die Doppelumfassung in drei Zügen",
  viewBox: "0 0 800 300",
  mindestbreite: 620,
  beschriftung: "Hannibal stellte sein Zentrum bewusst schwach und nach vorn gebogen auf. Als die römische Übermacht dort durchdrückte, gab die Mitte nach, und die Flügel schlossen sich hinter dem Gegner. Die Römer waren zahlenmäßig deutlich überlegen und konnten sich am Ende nicht mehr bewegen.",
  quelle: "Polybios, Historien III; Livius XXII. Die Aufstellung ist rekonstruiert — die Quellen nennen Anordnung und Ablauf, keine Maße.",
  svg: `
    <defs>
      <marker id="pf" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 z" fill="${G_FARBEN.gold}"/>
      </marker>
    </defs>
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${[0, 1, 2].map((i) => {
        const x = 20 + i * 262;
        const titel = ["1 — Aufstellung", "2 — Die Mitte gibt nach", "3 — Der Ring schließt sich"][i];
        // Roemer als geschlossener Block, Karthager als Bogen. Die Kurve
        // wird je Zug staerker nach innen gezogen.
        const bogen = [40, -10, -55][i];
        return `
        <text x="${x}" y="18" fill="${G_FARBEN.gold}" font-size="14">${titel}</text>
        <rect x="${x}" y="30" width="230" height="250" fill="none" stroke="${G_FARBEN.linie}" stroke-width="1" opacity="0.35" rx="4"/>
        <path d="M${x + 30},${100} Q${x + 115},${100 + bogen} ${x + 200},${100}"
              fill="none" stroke="${G_FARBEN.rot}" stroke-width="9" stroke-linecap="round"/>
        <rect x="${x + 40}" y="${168 + (i === 0 ? 0 : i === 1 ? -14 : -26)}" width="150" height="${i === 0 ? 46 : i === 1 ? 54 : 40}"
              fill="${G_FARBEN.blau}" opacity="0.75" rx="3"/>
        <rect x="${x + 26}" y="82" width="14" height="120" fill="${G_FARBEN.rot}" rx="3"/>
        <rect x="${x + 190}" y="82" width="14" height="120" fill="${G_FARBEN.rot}" rx="3"/>
        ${i > 0 ? `<path d="M${x + 33},205 Q${x + 60},245 ${x + 105},240" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf)"/>
                   <path d="M${x + 197},205 Q${x + 170},245 ${x + 125},240" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf)"/>` : ""}
        ${i === 2 ? `<path d="M${x + 40},${146} Q${x + 115},${120} ${x + 190},${146}" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2" stroke-dasharray="4 3"/>` : ""}
        <text x="${x + 115}" y="272" text-anchor="middle" font-size="13">${["Karthager im Bogen, Römer massiert", "Römer stoßen durch", "Umfassung vollendet"][i]}</text>`;
      }).join("")}
      <g transform="translate(20,292)">
        <rect x="0" y="-9" width="12" height="9" fill="${G_FARBEN.rot}" rx="2"/>
        <text x="18" y="-1">Karthago (rund 50.000)</text>
        <rect x="200" y="-9" width="12" height="9" fill="${G_FARBEN.blau}" rx="2"/>
        <text x="218" y="-1">Rom (rund 80.000, Angaben schwanken)</text>
      </g>
    </g>`
}],

/* ------------------------------------------------- Cheopspyramide */
"pyramiden-bau": [{
  titel: "Die Cheopspyramide im Schnitt",
  viewBox: "0 0 800 420",
  mindestbreite: 520,
  beschriftung: "Der Bau enthält drei Grabkammern, von denen zwei nie benutzt wurden, und eine 47 Meter lange Große Galerie mit auskragendem Kraggewölbe. Die beiden Schächte von der Königskammer nach außen sind bekannt, ihre Funktion nicht geklärt.",
  quelle: "Miroslav Verner: Die Pyramiden; Mark Lehner: The Complete Pyramids. Maßstabsgetreu in den Hauptmaßen, Kammergrößen leicht überzeichnet.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      <line x1="60" y1="360" x2="760" y2="360" stroke="${G_FARBEN.linie}" stroke-width="1.5"/>
      <text x="60" y="378" font-size="13">Grundfläche 230 m</text>
      <polygon points="400,60 730,360 70,360" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="2"/>
      <polygon points="400,72 715,355 85,355" fill="none" stroke="${G_FARBEN.linie}" stroke-width="0.8" opacity="0.5"/>
      <line x1="400" y1="40" x2="400" y2="360" stroke="${G_FARBEN.linie}" stroke-dasharray="4 4" opacity="0.6"/>
      <text x="408" y="52" fill="${G_FARBEN.gold}">146,6 m ursprüngliche Höhe</text>

      <!-- Unvollendete Kammer im Fels -->
      <rect x="368" y="392" width="64" height="20" fill="${G_FARBEN.dunkel}" stroke="${G_FARBEN.linie}"/>
      <text x="446" y="407">Unvollendete Kammer, im Felsen</text>
      <line x1="400" y1="360" x2="400" y2="392" stroke="${G_FARBEN.linie}" stroke-width="2"/>

      <!-- Absteigender und aufsteigender Gang -->
      <line x1="360" y1="300" x2="400" y2="360" stroke="${G_FARBEN.linie}" stroke-width="2"/>
      <line x1="360" y1="300" x2="330" y2="255" stroke="${G_FARBEN.linie}" stroke-width="2"/>
      <text x="150" y="250" text-anchor="start">Ursprünglicher Eingang</text>
      <line x1="258" y1="255" x2="330" y2="255" stroke="${G_FARBEN.linie}" stroke-width="0.8" stroke-dasharray="3 3"/>
      <line x1="360" y1="300" x2="430" y2="272" stroke="${G_FARBEN.gold}" stroke-width="2.5"/>

      <!-- Koeniginnenkammer -->
      <rect x="382" y="262" width="46" height="22" fill="${G_FARBEN.dunkel}" stroke="${G_FARBEN.linie}"/>
      <text x="270" y="300">Sogenannte Königinnenkammer</text>
      <line x1="378" y1="284" x2="382" y2="273" stroke="${G_FARBEN.linie}" stroke-width="0.8"/>

      <!-- Grosse Galerie -->
      <path d="M430,272 L500,215 L512,228 L442,285 z" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.gold}" stroke-width="2"/>
      <text x="524" y="232" fill="${G_FARBEN.gold}">Große Galerie, 47 m lang, 8,6 m hoch</text>

      <!-- Koenigskammer mit Entlastungskammern -->
      <rect x="470" y="180" width="72" height="30" fill="${G_FARBEN.dunkel}" stroke="${G_FARBEN.gold}" stroke-width="2"/>
      <text x="556" y="196" fill="${G_FARBEN.hell}">Königskammer, Granit</text>
      ${[0, 1, 2, 3, 4].map((i) => `<rect x="${472 + i}" y="${172 - i * 9}" width="${68 - i * 2}" height="6" fill="none" stroke="${G_FARBEN.linie}" stroke-width="0.9"/>`).join("")}
      <text x="556" y="138">Fünf Entlastungskammern über der Decke</text>
      <line x1="542" y1="188" x2="612" y2="120" stroke="${G_FARBEN.linie}" stroke-width="1.2"/>
      <line x1="470" y1="196" x2="392" y2="120" stroke="${G_FARBEN.linie}" stroke-width="1.2"/>
      <text x="150" y="116">Zwei Schächte nach außen, Zweck ungeklärt</text>
    </g>`
}],

/* ---------------------------------------------- Paketvermittlung */
"internet": [{
  titel: "Leitungsvermittlung und Paketvermittlung",
  viewBox: "0 0 800 300",
  mindestbreite: 560,
  beschriftung: "Im Telefonnetz wird für ein Gespräch ein Weg geschaltet, der belegt bleibt und beim Ausfall eines Knotens abreißt. Im Internet wird die Nachricht zerlegt; jedes Stück sucht sich seinen Weg und wird am Ziel wieder zusammengesetzt. Deshalb kann das Netz nichts garantieren — und deshalb kann jeder eine neue Anwendung darauf bauen, ohne zu fragen.",
  quelle: "Paul Baran, RAND (1964): On Distributed Communications; Vint Cerf und Robert Kahn (1974): A Protocol for Packet Network Intercommunication.",
  svg: `
    <defs>
      <marker id="pf2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 z" fill="${G_FARBEN.gold}"/>
      </marker>
    </defs>
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      <text x="20" y="20" fill="${G_FARBEN.gold}" font-size="14">Leitungsvermittlung — ein fester Weg</text>
      <text x="420" y="20" fill="${G_FARBEN.gold}" font-size="14">Paketvermittlung — viele Wege</text>
      <line x1="400" y1="10" x2="400" y2="285" stroke="${G_FARBEN.linie}" opacity="0.4"/>

      ${/* linke Seite: Kette */""}
      ${[0, 1, 2, 3, 4].map((i) => `<circle cx="${50 + i * 70}" cy="120" r="13" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="1.5"/>`).join("")}
      ${[0, 1, 2, 3].map((i) => `<line x1="${63 + i * 70}" y1="120" x2="${107 + i * 70}" y2="120" stroke="${G_FARBEN.rot}" stroke-width="4"/>`).join("")}
      <text x="50" y="152" text-anchor="middle">A</text>
      <text x="330" y="152" text-anchor="middle">B</text>
      <path d="M190,120 l-14,-14 m0,28 l14,-14" stroke="${G_FARBEN.hell}" stroke-width="2.5" fill="none"/>
      <text x="20" y="200">Fällt ein Knoten aus, ist die Verbindung weg.</text>
      <text x="20" y="222">Der Weg bleibt belegt, auch wenn niemand spricht.</text>
      <text x="20" y="244">Neue Dienste muss der Netzbetreiber einbauen.</text>

      ${/* rechte Seite: Gitter */""}
      ${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) =>
        `<circle cx="${450 + c * 90}" cy="${70 + r * 55}" r="11" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="1.3"/>`).join("")).join("")}
      ${[0, 1, 2].map((r) => [0, 1, 2].map((c) =>
        `<line x1="${461 + c * 90}" y1="${70 + r * 55}" x2="${529 + c * 90}" y2="${70 + r * 55}" stroke="${G_FARBEN.linie}" stroke-width="0.9" opacity="0.55"/>`).join("")).join("")}
      ${[0, 1].map((r) => [0, 1, 2, 3].map((c) =>
        `<line x1="${450 + c * 90}" y1="${81 + r * 55}" x2="${450 + c * 90}" y2="${114 + r * 55}" stroke="${G_FARBEN.linie}" stroke-width="0.9" opacity="0.55"/>`).join("")).join("")}
      <path d="M450,70 L540,70 L630,125 L720,125" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2.5" marker-end="url(#pf2)"/>
      <path d="M450,70 L450,125 L540,180 L630,180 L720,125" fill="none" stroke="${G_FARBEN.gruen}" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#pf2)"/>
      <text x="440" y="52" text-anchor="middle">A</text>
      <text x="726" y="112">B</text>
      <text x="420" y="222">Drei Pakete derselben Nachricht,</text>
      <text x="420" y="244">drei verschiedene Wege, am Ziel wieder sortiert.</text>
      <text x="420" y="266">Das Netz kennt den Inhalt nicht — und braucht ihn nicht.</text>
    </g>`
}],

/* -------------------------------------------------- Ringimpfung */
"pockenimpfung": [{
  titel: "Ringimpfung statt Flächenimpfung",
  viewBox: "0 0 800 280",
  mindestbreite: 560,
  beschriftung: "Der ursprüngliche Plan, überall achtzig Prozent der Menschen zu impfen, war nicht erreichbar. Stattdessen wurde jeder Ausbruch gesucht und nur die Umgebung geimpft. Das nutzt eine Eigenschaft der Pocken: Sie übertragen sich erst, wenn der Ausschlag sichtbar ist — wer ansteckend ist, ist auffindbar.",
  quelle: "WHO: The Global Eradication of Smallpox, Abschlussbericht 1980; Donald A. Henderson: Smallpox – The Death of a Disease.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      <text x="20" y="20" fill="${G_FARBEN.gold}" font-size="14">Flächenimpfung — viel Impfstoff, Lücken bleiben</text>
      <text x="430" y="20" fill="${G_FARBEN.gold}" font-size="14">Ringimpfung — wenig Impfstoff, kein Weiterkommen</text>
      <line x1="410" y1="10" x2="410" y2="265" stroke="${G_FARBEN.linie}" opacity="0.4"/>

      ${/* links: Raster mit Luecken, Ausbruch breitet sich aus */""}
      ${(() => {
        let s = "";
        const luecken = [7, 8, 13, 19, 26, 27, 33, 40];
        for (let r = 0; r < 6; r++) for (let c = 0; c < 7; c++) {
          const n = r * 7 + c, geimpft = luecken.indexOf(n) < 0;
          s += `<circle cx="${45 + c * 48}" cy="${55 + r * 33}" r="8" fill="${geimpft ? G_FARBEN.gruen : G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="1" opacity="${geimpft ? 0.8 : 1}"/>`;
        }
        // Ausbruch in einer Luecke, mit Ausbreitung in die naechste
        s += `<circle cx="${45 + 0 * 48}" cy="${55 + 1 * 33}" r="8" fill="${G_FARBEN.rot}" stroke="${G_FARBEN.hell}" stroke-width="1.5"/>`;
        s += `<circle cx="${45 + 1 * 48}" cy="${55 + 1 * 33}" r="8" fill="${G_FARBEN.rot}" stroke="${G_FARBEN.hell}" stroke-width="1.5"/>`;
        s += `<circle cx="${45 + 5 * 48}" cy="${55 + 3 * 33}" r="8" fill="${G_FARBEN.rot}" stroke="${G_FARBEN.hell}" stroke-width="1.5"/>`;
        return s;
      })()}
      <text x="20" y="262">Ungeimpfte Reste tragen den Ausbruch weiter.</text>

      ${/* rechts: ein Fall, Ring darum */""}
      <circle cx="600" cy="140" r="86" fill="none" stroke="${G_FARBEN.gold}" stroke-width="1" stroke-dasharray="5 5" opacity="0.8"/>
      <circle cx="600" cy="140" r="52" fill="none" stroke="${G_FARBEN.gold}" stroke-width="1" opacity="0.5"/>
      <circle cx="600" cy="140" r="10" fill="${G_FARBEN.rot}" stroke="${G_FARBEN.hell}" stroke-width="1.5"/>
      ${(() => {
        let s = "";
        for (let i = 0; i < 8; i++) {
          const w = (i / 8) * 2 * Math.PI;
          s += `<circle cx="${(600 + Math.cos(w) * 52).toFixed(1)}" cy="${(140 + Math.sin(w) * 52).toFixed(1)}" r="8" fill="${G_FARBEN.gruen}" stroke="${G_FARBEN.linie}"/>`;
        }
        for (let i = 0; i < 14; i++) {
          const w = (i / 14) * 2 * Math.PI + 0.2;
          s += `<circle cx="${(600 + Math.cos(w) * 86).toFixed(1)}" cy="${(140 + Math.sin(w) * 86).toFixed(1)}" r="7" fill="${G_FARBEN.gruen}" stroke="${G_FARBEN.linie}" opacity="0.75"/>`;
        }
        return s;
      })()}
      <text x="430" y="240">Kranker gemeldet, Kontakte und deren Umgebung geimpft.</text>
      <text x="430" y="262">Der Ausbruch erlischt, auch bei niedriger Impfquote.</text>

      <g transform="translate(20,278)">
        <circle cx="6" cy="-5" r="6" fill="${G_FARBEN.gruen}"/><text x="18" y="-1">geimpft</text>
        <circle cx="106" cy="-5" r="6" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}"/><text x="118" y="-1">ungeimpft</text>
        <circle cx="216" cy="-5" r="6" fill="${G_FARBEN.rot}"/><text x="228" y="-1">erkrankt</text>
      </g>
    </g>`
}],

/* ------------------------------------------ Todesarten der Kaiser */
"kaisertod": [{
  titel: "Wie römische Kaiser starben",
  viewBox: "0 0 800 330",
  mindestbreite: 520,
  beschriftung: "Von den etwa achtzig allgemein anerkannten Kaisern zwischen Augustus und dem Ende des Westreichs starben rund zwei Drittel gewaltsam. Die häufigste Gefahr war nicht der äußere Feind, sondern die eigene Garde. Die Anteile sind Näherungen: Bei mehreren Kaisern stehen Gift, Krankheit und Kampf gegeneinander.",
  quelle: "Karl Christ: Geschichte der römischen Kaiserzeit; Cambridge Ancient History, Bände 10–13. Zählweise: nur allgemein anerkannte Kaiser, ohne Usurpatoren.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        const zeilen = [
          ["Ermordet — Garde, Hof, Offiziere", 30, G_FARBEN.rot],
          ["Im Kampf oder in Gefangenschaft gefallen", 12, G_FARBEN.rot],
          ["Zum Selbstmord gedrängt oder hingerichtet", 9, G_FARBEN.rot],
          ["Krankheit oder Alter", 24, G_FARBEN.gruen],
          ["Umstände ungeklärt", 5, G_FARBEN.linie]
        ];
        const max = 30, x0 = 330, breite = 420;
        return zeilen.map(([label, wert, farbe], i) => {
          const y = 50 + i * 52;
          return `
          <text x="${x0 - 12}" y="${y + 15}" text-anchor="end" font-size="13">${label}</text>
          <rect x="${x0}" y="${y}" width="${(wert / max * breite).toFixed(1)}" height="22" fill="${farbe}" rx="3" opacity="0.85"/>
          <text x="${x0 + (wert / max * breite) + 10}" y="${y + 17}" fill="${G_FARBEN.hell}" font-size="13">${wert}</text>`;
        }).join("");
      })()}
      <line x1="330" y1="40" x2="330" y2="300" stroke="${G_FARBEN.linie}" stroke-width="1.2"/>
      <text x="330" y="24" fill="${G_FARBEN.gold}" font-size="14">Anzahl der Kaiser (Näherung, ca. 80 insgesamt)</text>
      <text x="330" y="322" font-size="13" fill="${G_FARBEN.gold}">Rot: gewaltsames Ende — zusammen rund zwei Drittel.</text>
    </g>`
}],

/* ------------------------------------- Beweislogik der Folter */
"hexenverfolgung-ende": [{
  titel: "Der Kreis, aus dem es keinen Ausweg gab",
  viewBox: "0 0 800 340",
  mindestbreite: 560,
  beschriftung: "Friedrich Spee bestritt 1631 nicht die Existenz von Hexen, sondern zeigte, dass dieses Verfahren jeden Beliebigen überführen konnte — und damit niemanden. Es misst die Belastbarkeit des Körpers, nicht die Schuld, und erzeugt aus jedem Geständnis die Anzeigen des nächsten Prozesses.",
  quelle: "Friedrich Spee: Cautio Criminalis, 1631; Wolfgang Behringer: Hexen und Hexenprozesse in Deutschland.",
  svg: `
    <defs>
      <marker id="pf3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" fill="${G_FARBEN.gold}"/>
      </marker>
    </defs>
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        const kasten = [
          [40, 30, "Anzeige genügt", "Bei einem geheimen Verbrechen\nkann man keine Zeugen erwarten."],
          [300, 30, "Verhaftung", "Wer verhaftet ist, gilt als verdächtig —\ndie Obrigkeit irrt nicht."],
          [560, 30, "Folter", "Wer leugnet, ist hartnäckig\nund wird weiter befragt."],
          [560, 190, "Geständnis", "Unter Schmerz gesteht jeder.\nEin Geständnis überführt."],
          [300, 190, "Namen von Mitschuldigen", "Ohne Namen gilt das Geständnis\nals unvollständig."],
          [40, 190, "Neue Anzeigen", "Die Namen sind die Anzeigen\ndes nächsten Verfahrens."]
        ];
        return kasten.map(([x, y, titel, text]) => `
          <rect x="${x}" y="${y}" width="200" height="100" rx="6" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="1.4"/>
          <text x="${x + 14}" y="${y + 26}" fill="${G_FARBEN.gold}" font-size="14">${titel}</text>
          ${text.split("\n").map((z, k) => `<text x="${x + 14}" y="${y + 50 + k * 19}" font-size="13">${z}</text>`).join("")}`).join("");
      })()}
      <line x1="240" y1="80" x2="294" y2="80" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf3)"/>
      <line x1="500" y1="80" x2="554" y2="80" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf3)"/>
      <line x1="660" y1="130" x2="660" y2="184" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf3)"/>
      <line x1="560" y1="240" x2="506" y2="240" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf3)"/>
      <line x1="300" y1="240" x2="246" y2="240" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf3)"/>
      <path d="M140,190 L140,160 L140,130" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2" marker-end="url(#pf3)"/>
      <text x="40" y="322" fill="${G_FARBEN.gold}" font-size="14">Wer die Folter aushält, gilt als vom Teufel gestärkt — und ist ebenfalls überführt.</text>
    </g>`
}],

/* ------------------------------------------ Alter der Erde */
"entdeckung-tiefenzeit": [{
  titel: "Die Schätzungen zum Alter der Erde, 1650 bis 1956",
  viewBox: "0 0 800 320",
  mindestbreite: 560,
  beschriftung: "Die Achse ist logarithmisch: Jeder Schritt nach oben bedeutet den Faktor zehn. Innerhalb von drei Jahrhunderten wuchs das angenommene Alter der Erde um sechs Größenordnungen — erst durch die Geologie, dann gebremst durch einen physikalischen Einwand, schließlich gelöst durch die Radioaktivität, die zugleich Wärmequelle und Uhr ist.",
  quelle: "Martin J. S. Rudwick: Bursting the Limits of Time; Clair Patterson, Geochimica et Cosmochimica Acta 1956.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        const x0 = 90, x1 = 760, y0 = 250, y1 = 45;
        // Logarithmische Achse von 10^3 bis 10^10 Jahren
        const lo = 3, hi = 10;
        const yv = (jahre) => y0 - (Math.log10(jahre) - lo) / (hi - lo) * (y0 - y1);
        const xv = (jahr) => x0 + (jahr - 1640) / (1970 - 1640) * (x1 - x0);
        let s = `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${G_FARBEN.linie}" stroke-width="1.3"/>
                 <line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1 - 10}" stroke="${G_FARBEN.linie}" stroke-width="1.3"/>`;
        for (let e = lo; e <= hi; e++) {
          const y = yv(Math.pow(10, e));
          s += `<line x1="${x0}" y1="${y.toFixed(1)}" x2="${x1}" y2="${y.toFixed(1)}" stroke="${G_FARBEN.linie}" stroke-width="0.6" opacity="0.28"/>
                <text x="${x0 - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="13">10^${e}</text>`;
        }
        [1650, 1700, 1750, 1800, 1850, 1900, 1950].forEach((j) => {
          s += `<text x="${xv(j).toFixed(1)}" y="${y0 + 20}" text-anchor="middle" font-size="13">${j}</text>`;
        });
        const punkte = [
          [1650, 6000, "Ussher: 4004 v. Chr.", 1],
          [1779, 75000, "Buffon: Abkühlversuche", 1],
          [1788, 1e9, "Hutton: kein erkennbarer Anfang", -1],
          [1830, 1e9, "Lyell: gleichförmige Kräfte", 1],
          [1862, 1e8, "Kelvin: 20–100 Mio.", -1],
          [1907, 2.2e9, "Boltwood: Uran-Blei", 1],
          [1956, 4.55e9, "Patterson: 4,55 Mrd.", -1]
        ];
        s += `<path d="${punkte.map((p, i) => (i ? "L" : "M") + xv(p[0]).toFixed(1) + "," + yv(p[1]).toFixed(1)).join(" ")}"
                fill="none" stroke="${G_FARBEN.gold}" stroke-width="2" opacity="0.55"/>`;
        punkte.forEach(([j, alter, label, oben]) => {
          const x = xv(j), y = yv(alter);
          s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.5" fill="${G_FARBEN.gold}"/>
                <text x="${(x + (j > 1900 ? -8 : 8)).toFixed(1)}" y="${(y + (oben > 0 ? -12 : 22)).toFixed(1)}"
                      text-anchor="${j > 1900 ? "end" : "start"}" fill="${G_FARBEN.hell}" font-size="13">${label}</text>`;
        });
        s += `<text x="${x0}" y="${y1 - 22}" fill="${G_FARBEN.gold}" font-size="14">Angenommenes Alter der Erde in Jahren (logarithmisch)</text>`;
        s += `<text x="${x0}" y="${y0 + 50}" font-size="13">Kelvins Einwand von 1862 senkte den Wert wieder — er kannte die Erdwärme aus Radioaktivität nicht.</text>`;
        return s;
      })()}
    </g>`
}],

/* -------------------------------- Einwanderungswellen nach Europa */
"dna-alte": [{
  titel: "Zwei Wanderungswellen, die Europa heute ausmachen",
  viewBox: "0 0 800 340",
  mindestbreite: 560,
  beschriftung: "Alte DNA hat eine Streitfrage von hundert Jahren entschieden: Wanderten Menschen ein, oder übernahmen ansässige Gruppen nur neue Moden? Es war Wanderung. Die Anteile schwanken stark nach Region — in Mitteleuropa stellt die Steppenkomponente heute den größten Teil, in Sardinien fast keinen.",
  quelle: "Johannes Krause und Thomas Trappe: Die Reise unserer Gene; David Reich: Who We Are and How We Got Here. Schematische Darstellung, keine maßstäbliche Karte.",
  svg: `
    <defs>
      <marker id="pf4" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill="${G_FARBEN.gold}"/>
      </marker>
      <marker id="pf5" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill="${G_FARBEN.blau}"/>
      </marker>
    </defs>
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      <rect x="30" y="30" width="530" height="230" rx="8" fill="${G_FARBEN.dunkel}" stroke="${G_FARBEN.linie}" opacity="0.9"/>
      <text x="46" y="52" font-size="13" opacity="0.8">schematisch: Europa, Anatolien, pontische Steppe</text>
      <text x="120" y="110" fill="${G_FARBEN.hell}">Mitteleuropa</text>
      <text x="300" y="230" fill="${G_FARBEN.hell}">Anatolien</text>
      <text x="440" y="80" fill="${G_FARBEN.hell}">Pontische Steppe</text>
      <path d="M320,215 Q240,170 165,125" fill="none" stroke="${G_FARBEN.gold}" stroke-width="3" marker-end="url(#pf4)"/>
      <text x="196" y="196" fill="${G_FARBEN.gold}">ab ca. 6500 v. Chr. — Bauern</text>
      <path d="M470,95 Q320,95 180,140" fill="none" stroke="${G_FARBEN.blau}" stroke-width="3" stroke-dasharray="7 4" marker-end="url(#pf5)"/>
      <text x="300" y="134" fill="${G_FARBEN.blau}">ab ca. 2800 v. Chr. — Steppenhirten</text>

      <g transform="translate(596,44)">
        <text x="0" y="0" fill="${G_FARBEN.gold}" font-size="14">Herkunftsanteile</text>
        <text x="0" y="20" font-size="13">Mitteleuropa heute, gerundet</text>
        ${(() => {
          const teile = [["Steppenhirten", 50, G_FARBEN.blau], ["Anatolische Bauern", 30, G_FARBEN.gold], ["Westliche Jäger und Sammler", 20, G_FARBEN.gruen]];
          let y = 42, s = "";
          teile.forEach(([label, anteil, farbe]) => {
            s += `<rect x="0" y="${y}" width="${anteil * 1.6}" height="18" fill="${farbe}" rx="3" opacity="0.85"/>
                  <text x="0" y="${y + 34}" font-size="13">${label} ${anteil} %</text>`;
            y += 58;
          });
          return s;
        })()}
        <text x="0" y="216" font-size="13" opacity="0.85">Regional sehr</text>
        <text x="0" y="234" font-size="13" opacity="0.85">unterschiedlich.</text>
      </g>
      <text x="30" y="290" font-size="13">Ein Abstammungsanteil sagt, von wem jemand abstammt.</text>
      <text x="30" y="312" font-size="13">Er sagt nichts über Sprache, Kultur oder Zugehörigkeit.</text>
    </g>`
}],

/* ------------------------------------------------ Spartacus-Zug */
"spartacus": [{
  titel: "Der Zug des Sklavenheeres, 73 bis 71 v. Chr.",
  viewBox: "0 0 800 330",
  mindestbreite: 460,
  beschriftung: "Nach dem Ausbruch in Capua wuchs das Heer am Vesuv, zog 72 v. Chr. bis nach Oberitalien und kehrte dort um — warum, weiß niemand. Crassus riegelte den Süden mit einem Wall ab; die Entscheidung fiel 71 v. Chr. am Silarus.",
  quelle: "Plutarch: Crassus; Appian: Bürgerkriege I; Barry Strauss: The Spartacus War. Die Route ist die in der Forschung übliche Rekonstruktion, nicht durch Fundstellen belegt.",
  svg: `
    <defs>
      <marker id="pf6" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" fill="${G_FARBEN.gold}"/>
      </marker>
    </defs>
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      <!-- Stark vereinfachter Umriss der italischen Halbinsel -->
      <path d="M250,30 L330,30 L360,70 L400,120 L430,180 L470,235 L500,275 L470,295 L430,270 L390,215 L350,165 L305,120 L262,90 Z"
            fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="1.5" opacity="0.85"/>
      <path d="M470,295 L520,300 L545,285 L515,268 Z" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.linie}" stroke-width="1.2" opacity="0.7"/>
      <text x="556" y="290" font-size="13" opacity="0.85">Sizilien</text>
      <text x="250" y="22" font-size="13" opacity="0.85">Poebene</text>

      <path d="M372,168 L352,148 L330,120 L305,92 L288,66" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2.5" marker-end="url(#pf6)"/>
      <path d="M288,66 L312,96 L344,132 L378,176 L410,214" fill="none" stroke="${G_FARBEN.gold}" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#pf6)"/>
      <path d="M410,214 L438,246" fill="none" stroke="${G_FARBEN.rot}" stroke-width="2.5" marker-end="url(#pf6)"/>

      ${(() => {
        const orte = [
          [372, 168, "Capua — Ausbruch 73", 1],
          [382, 182, "Vesuv — erstes Lager", -1],
          [288, 66, "Mutina — Sieg 72, dann Umkehr", 1],
          [410, 214, "Silarus — Entscheidung 71", -1],
          [452, 262, "Crassus' Wall über die Landzunge", -1]
        ];
        return orte.map(([x, y, label, oben]) => `
          <circle cx="${x}" cy="${y}" r="5" fill="${G_FARBEN.hell}"/>
          <text x="${x - 14}" y="${y + (oben > 0 ? -10 : 18)}" text-anchor="end" fill="${G_FARBEN.hell}" font-size="13">${label}</text>`).join("");
      })()}
      <line x1="438" y1="250" x2="470" y2="272" stroke="${G_FARBEN.rot}" stroke-width="3" stroke-dasharray="3 3"/>

      <g transform="translate(30,300)">
        <line x1="0" y1="-5" x2="30" y2="-5" stroke="${G_FARBEN.gold}" stroke-width="2.5"/>
        <text x="38" y="-1">Zug nach Norden, 73–72</text>
        <line x1="230" y1="-5" x2="260" y2="-5" stroke="${G_FARBEN.gold}" stroke-width="2.5" stroke-dasharray="6 4"/>
        <text x="268" y="-1">Rückkehr nach Süden</text>
        <line x1="450" y1="-5" x2="480" y2="-5" stroke="${G_FARBEN.rot}" stroke-width="2.5"/>
        <text x="488" y="-1">letzte Wochen 71</text>
      </g>
      <text x="30" y="326" font-size="13">Rund 6.000 Gefangene wurden anschließend entlang der Via Appia gekreuzigt.</text>
    </g>`
}],

/* --------------------------------------- Entstehung von Resistenz */
"antibiotika": [{
  titel: "Warum Resistenz entsteht — und was sie beschleunigt",
  viewBox: "0 0 800 300",
  mindestbreite: 560,
  beschriftung: "Ein Antibiotikum tötet die empfindlichen Erreger. Übrig bleiben die zufällig widerstandsfähigen, und sie haben nun das Feld für sich. Fleming beschrieb diesen Vorgang 1945 in seiner Nobelpreisrede und benannte auch die beiden Beschleuniger: zu kurze Einnahme und Anwendung ohne Grund.",
  quelle: "Alexander Fleming: Nobelvortrag, 11. Dezember 1945; WHO: Global antimicrobial resistance surveillance, laufende Berichte.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        const stufen = [
          ["Vorher", 22, 1, "Wenige widerstandsfähige Erreger, ohne Vorteil."],
          ["Unter Behandlung", 8, 1, "Die empfindlichen sterben ab."],
          ["Zu früh abgesetzt", 6, 5, "Die Widerstandsfähigen vermehren sich frei."],
          ["Danach", 3, 19, "Die Bevölkerung ist ausgetauscht."]
        ];
        return stufen.map(([titel, weich, hart, text], i) => {
          const x = 20 + i * 195;
          let s = `<rect x="${x}" y="30" width="170" height="150" rx="6" fill="${G_FARBEN.dunkel}" stroke="${G_FARBEN.linie}" stroke-width="1.2"/>
                   <text x="${x + 12}" y="${22}" fill="${G_FARBEN.gold}" font-size="14">${i + 1}. ${titel}</text>`;
          let n = 0;
          for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) {
            const idx = r * 6 + c;
            if (idx >= weich + hart) continue;
            const istHart = idx >= weich;
            s += `<circle cx="${x + 22 + c * 26}" cy="${52 + r * 27}" r="8"
                    fill="${istHart ? G_FARBEN.rot : G_FARBEN.gruen}"
                    stroke="${istHart ? G_FARBEN.hell : G_FARBEN.linie}" stroke-width="${istHart ? 1.5 : 1}" opacity="0.9"/>`;
            n++;
          }
          s += text.split(" ").reduce((akk, w) => {
            const letzte = akk[akk.length - 1];
            if ((letzte + " " + w).length > 26) akk.push(w); else akk[akk.length - 1] = letzte + " " + w;
            return akk;
          }, [""]).map((z, k) => `<text x="${x}" y="${202 + k * 19}" font-size="13">${z.trim()}</text>`).join("");
          return s;
        }).join("");
      })()}
      <g transform="translate(20,290)">
        <circle cx="6" cy="-5" r="6" fill="${G_FARBEN.gruen}"/><text x="18" y="-1">empfindlich</text>
        <circle cx="126" cy="-5" r="6" fill="${G_FARBEN.rot}"/><text x="138" y="-1">widerstandsfähig</text>
        <text x="300" y="-1" fill="${G_FARBEN.gold}">Rund zwei Drittel aller Antibiotika weltweit gehen in die Tiermast.</text>
      </g>
    </g>`
}],

/* --------------------------------- Frauenwahlrecht in der Zeit */
"frauenwahlrecht": [{
  titel: "Wann Frauen wählen durften",
  viewBox: "0 0 800 320",
  mindestbreite: 520,
  beschriftung: "Von der ersten beschlossenen Forderung in Seneca Falls bis zur letzten Einlösung in Europa vergingen 142 Jahre. Der Erste Weltkrieg gilt oft als Auslöser — Neuseeland, Australien und Finnland hatten das Recht jedoch vorher. Und das formale Recht galt nicht überall gleich: Schwarze Frauen in den amerikanischen Südstaaten konnten nach 1920 jahrzehntelang nicht wählen.",
  quelle: "Encyclopaedia Britannica: woman suffrage; Interparlamentarische Union: Women in Parliament.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        const x0 = 60, x1 = 750, y = 150;
        const xv = (j) => x0 + (j - 1840) / (2000 - 1840) * (x1 - x0);
        let s = `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${G_FARBEN.linie}" stroke-width="1.6"/>`;
        [1840, 1880, 1920, 1960, 2000].forEach((j) => {
          s += `<line x1="${xv(j).toFixed(1)}" y1="${y - 6}" x2="${xv(j).toFixed(1)}" y2="${y + 6}" stroke="${G_FARBEN.linie}" stroke-width="1.4"/>
                <text x="${xv(j).toFixed(1)}" y="${y + 26}" text-anchor="middle" font-size="13">${j}</text>`;
        });
        const marken = [
          [1848, "Seneca Falls — die Forderung", 1, 96],
          [1893, "Neuseeland", -1, 52],
          [1906, "Finnland", 1, 52],
          [1918, "Deutschland, Österreich", -1, 86],
          [1920, "USA", 1, 24],
          [1944, "Frankreich", -1, 52],
          [1952, "Griechenland", 1, 52],
          [1971, "Schweiz, Bundesebene", -1, 86],
          [1990, "Appenzell Innerrhoden", 1, 118]
        ];
        marken.forEach(([j, label, oben, hoehe]) => {
          const x = xv(j);
          s += `<line x1="${x.toFixed(1)}" y1="${y}" x2="${x.toFixed(1)}" y2="${(y - oben * hoehe).toFixed(1)}" stroke="${G_FARBEN.gold}" stroke-width="1.3" opacity="0.8"/>
                <circle cx="${x.toFixed(1)}" cy="${(y - oben * hoehe).toFixed(1)}" r="4.5" fill="${G_FARBEN.gold}"/>
                <text x="${(x + 8).toFixed(1)}" y="${(y - oben * hoehe + (oben > 0 ? -8 : 18)).toFixed(1)}"
                      fill="${G_FARBEN.hell}" font-size="13" text-anchor="${j > 1960 ? "end" : "start"}">${label}</text>`;
        });
        s += `<text x="${x0}" y="290" fill="${G_FARBEN.gold}" font-size="14">1990 entschied das Schweizer Bundesgericht — der letzte Kanton hatte sich bis dahin geweigert.</text>`;
        s += `<text x="${x0}" y="312" font-size="13">Finnland gab 1906 zugleich das passive Wahlrecht: 1907 zogen 19 Frauen ins Parlament ein, die ersten der Welt.</text>`;
        return s;
      })()}
    </g>`
}],

/* ---------------------------------------------- Saturn V / Apollo */
"mondlandung-technik": [{
  titel: "Warum die Rakete so groß war",
  viewBox: "0 0 800 380",
  mindestbreite: 560,
  beschriftung: "Von 2.900 Tonnen Startmasse kehrten 5,5 Tonnen zur Erde zurück — alles andere war Treibstoff, Struktur und Stufen, die abgeworfen wurden. Der gewählte Weg mit Trennung im Mondorbit war der riskanteste der drei Vorschläge und wurde genommen, weil er am wenigsten Masse brauchte.",
  quelle: "NASA: Apollo Program Summary Report; David Mindell: Digital Apollo.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        // Massenbalken: Anteile der Startmasse
        const teile = [
          ["Erste Stufe mit Treibstoff", 2280, G_FARBEN.rot],
          ["Zweite Stufe", 480, G_FARBEN.gold],
          ["Dritte Stufe", 120, G_FARBEN.gruen],
          ["Mondfähre", 15, G_FARBEN.blau],
          ["Raumschiff und Rückkehrkapsel", 30, G_FARBEN.hell]
        ];
        const gesamt = 2925, x0 = 40, breite = 520;
        let x = x0, s = `<text x="${x0}" y="24" fill="${G_FARBEN.gold}" font-size="14">Startmasse 2.900 t — wovon</text>`;
        teile.forEach(([label, t, farbe], i) => {
          const w = Math.max(t / gesamt * breite, 5);
          s += `<rect x="${x.toFixed(1)}" y="40" width="${w.toFixed(1)}" height="34" fill="${farbe}" rx="2" opacity="0.9"/>`;
          s += `<circle cx="${(x + w / 2).toFixed(1)}" cy="92" r="3" fill="${farbe}"/>
                <line x1="${(x + w / 2).toFixed(1)}" y1="95" x2="${600}" y2="${112 + i * 26}" stroke="${farbe}" stroke-width="1" opacity="0.6"/>
                <text x="606" y="${116 + i * 26}" font-size="13" fill="${G_FARBEN.hell}">${label} — ${t} t</text>`;
          x += w;
        });
        // Ablauf der Mission
        const schritte = [
          "Start", "Stufen abwerfen", "Kurs zum Mond", "Mondorbit",
          "Fähre trennt sich", "Landung", "Aufstieg, Ankopplung", "Rückkehr, 5,5 t landen"
        ];
        s += `<text x="${x0}" y="248" fill="${G_FARBEN.gold}" font-size="14">Der Weg mit Trennung im Mondorbit</text>`;
        schritte.forEach((t, i) => {
          const cx = x0 + 22 + i * 94, cy = 288;
          s += `<circle cx="${cx}" cy="${cy}" r="15" fill="${G_FARBEN.grund}" stroke="${G_FARBEN.gold}" stroke-width="1.4"/>
                <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="${G_FARBEN.gold}" font-size="13">${i + 1}</text>`;
          t.split(" ").reduce((akk, w) => {
            const l = akk[akk.length - 1];
            if ((l + " " + w).length > 13) akk.push(w); else akk[akk.length - 1] = l + " " + w;
            return akk;
          }, [""]).forEach((z, k) => {
            s += `<text x="${cx}" y="${cy + 32 + k * 17}" text-anchor="middle" font-size="13">${z.trim()}</text>`;
          });
          if (i < schritte.length - 1) {
            s += `<line x1="${cx + 16}" y1="${cy}" x2="${cx + 76}" y2="${cy}" stroke="${G_FARBEN.linie}" stroke-width="1.2" opacity="0.7"/>`;
          }
        });
        return s;
      })()}
    </g>`
}],

/* ------------------------------------------- Dogenwahl in Venedig */
"venedig": [{
  titel: "Die Dogenwahl — ein Verfahren gegen Absprachen",
  viewBox: "0 0 800 300",
  mindestbreite: 560,
  beschriftung: "Zehn Stufen aus Losentscheid und Wahl, von 1268 bis 1797 fast unverändert. Der Zweck war nicht, den besten Kandidaten zu finden, sondern zu verhindern, dass eine Familie das Ergebnis vorher absprechen kann: Wer nicht weiß, wer am Ende abstimmt, kann niemanden kaufen.",
  quelle: "Frederic C. Lane: Venice – A Maritime Republic; Encyclopaedia Britannica: doge.",
  svg: `
    <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="13" fill="${G_FARBEN.text}">
      ${(() => {
        const stufen = [
          ["Großer Rat", "bis 2.000", "L"],
          ["Los", "30", "L"],
          ["Los", "9", "L"],
          ["Wahl", "40", "W"],
          ["Los", "12", "L"],
          ["Wahl", "25", "W"],
          ["Los", "9", "L"],
          ["Wahl", "45", "W"],
          ["Los", "11", "L"],
          ["Wahl", "41", "W"]
        ];
        const x0 = 30, y = 90;
        let s = "";
        stufen.forEach(([art, zahl, typ], i) => {
          const x = x0 + i * 76;
          const farbe = typ === "L" ? G_FARBEN.blau : G_FARBEN.gold;
          s += `<rect x="${x}" y="${y}" width="58" height="58" rx="6" fill="${G_FARBEN.grund}" stroke="${farbe}" stroke-width="1.8"/>
                <text x="${x + 29}" y="${y + 26}" text-anchor="middle" fill="${farbe}" font-size="13">${art}</text>
                <text x="${x + 29}" y="${y + 46}" text-anchor="middle" fill="${G_FARBEN.hell}" font-size="14">${zahl}</text>`;
          if (i < stufen.length - 1) {
            s += `<line x1="${x + 58}" y1="${y + 29}" x2="${x + 76}" y2="${y + 29}" stroke="${G_FARBEN.linie}" stroke-width="1.3"/>`;
          }
        });
        s += `<text x="${x0}" y="${y - 26}" fill="${G_FARBEN.gold}" font-size="14">Zehn Stufen — Losentscheid und Wahl wechseln sich ab</text>`;
        s += `<text x="${x0}" y="${y + 96}" font-size="13">Die letzten 41 wählen den Dogen; nötig sind 25 Stimmen.</text>`;
        s += `<text x="${x0}" y="${y + 122}" font-size="13">Danach beschnitt die Republik seine Befugnisse über Jahrhunderte weiter: kein Ämterhäufen für die Familie,</text>`;
        s += `<text x="${x0}" y="${y + 144}" font-size="13">keine eigene Außenpolitik, keine Geschenke annehmen — und eine Prüfung des Nachlasses nach dem Tod.</text>`;
        s += `<g transform="translate(${x0},${y + 176})">
                <rect x="0" y="-11" width="14" height="14" rx="3" fill="none" stroke="${G_FARBEN.blau}" stroke-width="1.8"/>
                <text x="22" y="0">Los — nicht vorhersehbar</text>
                <rect x="220" y="-11" width="14" height="14" rx="3" fill="none" stroke="${G_FARBEN.gold}" stroke-width="1.8"/>
                <text x="242" y="0">Wahl — nicht vorbereitbar, weil die Wähler eben ausgelost wurden</text>
              </g>`;
        return s;
      })()}
    </g>`
}]

};

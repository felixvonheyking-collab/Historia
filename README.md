# Historia

Eine Geschichts-App von der Steinzeit bis zur Gegenwart – zum Nachschlagen und Vertiefen.
Läuft als Website und als installierbare App, vollständig offline, ohne fremde Server.

**Live:** https://felixvonheyking-collab.github.io/Historia/

## Was drin ist

| Bereich | Umfang |
|---|---|
| Suche | über alle rund 1.950 Einträge gleichzeitig |
| Epochen | 7, mit 301 Ereignissen, 217 Persönlichkeiten, 109 Reichen |
| Vertiefungen | 59 Langtexte mit Vorgeschichte, Verlauf, Folgen, Zahlen und Quellen |
| Themengeschichte | 9 Querschnitte durch alle Epochen, 143 Stationen |
| Länder-Zeitleisten | 30 Weltregionen |
| Mysterien | 20 ungeklärte und gelöste Fälle |
| Schlüsselmomente | 101 |
| Schlachten | 75 |
| Zitate | 104, jedes mit Belegstatus |
| Mythen & Fun Facts | 165, alle Richtigstellungen mit Beleg |
| Verblüffende Fakten | 143 |

## Grundsätze für die Inhalte

- **Jede Richtigstellung braucht einen Beleg.** Wo die App etwas korrigiert, steht die Quelle dabei.
- **Zahlen bekommen Spannen, keine Scheingenauigkeit.** Opferzahlen historischer Ereignisse sind fast immer Schätzungen; das steht dann auch da.
- **Was strittig ist, wird als strittig ausgewiesen.** Vertiefungen und Themen haben dafür einen eigenen Abschnitt.
- **Zitate tragen einen Belegstatus.** 19 von 104 sind nachweislich falsch zugeschrieben – sie bleiben trotzdem drin, richtiggestellt, denn genau die werden weitererzählt.

## Aufbau

Kein Build-Schritt, keine Abhängigkeiten. Die Dateien lassen sich direkt ausliefern.

```
index.html            Einstieg, lädt alle Skripte in fester Reihenfolge
app.js                nur Code, keine Inhalte
data-*.js             nur Inhalte, kein Code
sw.js                 Service Worker für den Offline-Betrieb
pruefung.js           Prüfskript (siehe unten)
react.js, react-dom.js, tailwind.css, Schriften, Symbole
```

Die Datendateien müssen **vor** `app.js` geladen werden – `app.js` greift beim Start auf sie zu.
Das Prüfskript kontrolliert das.

## Prüfen

```
node pruefung.js
```

Läuft ohne Installation, nur mit Node. Geprüft werden:

- Syntax von `app.js` und `sw.js`
- Versionsmarken: `index.html` und `sw.js` müssen dieselbe führen, und die Dateilisten müssen übereinstimmen
- Ladereihenfolge der Datendateien
- doppelte Einträge in allen Sammlungen, exakt und sinngemäß
- chronologische Sortierung der Zeitleisten und Themen-Stationen
- Pflichtfelder je Eintragsart
- Verweise ins Leere (etwa ein Schlüsselmoment, der auf eine nicht existierende Vertiefung zeigt)
- Belegpflicht: jeder Eintrag vom Typ *Mythos* braucht eine Quelle
- gültige Belegstatus bei Zitaten und Status bei Mysterien

Fehler führen zum Rückgabewert 1. Hinweise sind kein Fehler, lohnen aber einen Blick.
Dieselbe Prüfung läuft über GitHub Actions bei jedem Push.

## Ändern und veröffentlichen

1. Inhalte in der passenden `data-*.js` bearbeiten.
2. **Versionsmarke erhöhen** – an zwei Stellen, sie müssen gleich bleiben:
   - `sw.js`: `const VERSION = '...'`
   - `index.html`: alle `?v=...` hinter den Skript- und CSS-Verweisen
3. `node pruefung.js` ausführen.
4. Committen und pushen. GitHub Pages veröffentlicht automatisch.

Ohne Schritt 2 sehen Nutzer die alte Fassung – oder schlimmer: eine neue `index.html`
mit alten Skripten, wodurch die App gar nicht startet. Genau dafür gibt es die Prüfung.

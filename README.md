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
| Themengeschichte | 32 Querschnitte mit je mindestens 42 Stationen, darunter Kalter Krieg, Katastrophen, Künstler und Erfinder |
| Länder-Zeitleisten | 30 Weltregionen |
| Karte | 189 Orte: Schlachten, Stadtgeschichten, Mysterien, 69 Schlüsselmomente – Koordinaten aus Wikidata bzw. Wikipedia, Küsten aus Natural Earth; Kriege hervorheben; 7 Routen (Alexanderzug, Hannibal, Kolumbus 1492, Magellan/Elcano, Russlandfeldzug 1812, Langer Marsch, Ibn Battuta) |
| Lernen | rund 2.850 Karteikarten und Quizfragen, auch zu Kriegen, Querschnitt-Stationen und "Welcher Krieg gehört zu dieser Schlacht?"; Filter für Neues, Kriege und einzelne Querschnitte |
| Mysterien | 31 ungeklärte und gelöste Fälle |
| Schlüsselmomente | 169 |
| Schlachten | 101, jede einem Krieg zugeordnet |
| Kriege | 158, von der Bronzezeit bis heute, mit Parteien, Ursachen, Verlauf, Folgen und Opferspannen; 144 mit Bild (eigenes oder über die Vertiefung), nur frei lizenzierte Aufnahmen |
| Zitate | 104, jedes mit Belegstatus |
| Mythen & Fun Facts | 269, alle Richtigstellungen mit Beleg |
| Verblüffende Fakten | 143 |

## Grundsätze für die Inhalte

- **Jede Richtigstellung braucht einen Beleg.** Wo die App etwas korrigiert, steht die Quelle dabei.
- **Zahlen bekommen Spannen, keine Scheingenauigkeit.** Opferzahlen historischer Ereignisse sind fast immer Schätzungen; das steht dann auch da.
- **Was strittig ist, wird als strittig ausgewiesen.** Vertiefungen und Themen haben dafür einen eigenen Abschnitt.
- **Zitate tragen einen Belegstatus.** 19 von 104 sind nachweislich falsch zugeschrieben – sie bleiben trotzdem drin, richtiggestellt, denn genau die werden weitererzählt.

## Verbindung zu Philosophia

`data-verknuepfungen.js` verknüpft Vertiefungen, Kriege und Querschnitte mit Denkern aus Philosophia (146 Verknüpfungen, 99 Denker). Historia verlinkt mit `Philosophia/#denker=<id>`, Philosophia zurück mit `Historia/#vertiefung=<id>`, `#krieg=<id>`, `#thema=<id>` oder `#mysterium=<id>`. Dieselbe Liste liegt als `wissensnetz.json` für Mentorium bereit. Quelle der Wahrheit ist `data-verknuepfungen.js`; Philosophias `daten-geschichte.js` wird daraus erzeugt.

## Neu-Markierung

Neue oder ausgebaute Einträge tragen in den Daten `seit: "JJJJ-MM-TT"`. Die App zeigt sie als „neu“, bis sie als gelesen markiert sind (gespeichert unter `historia.neu.gelesen`, in der Sicherung enthalten). Bei jedem künftigen Ausbau das Feld setzen – mehr ist nicht nötig.

## Aufbau

Kein Build-Schritt, keine Abhängigkeiten. Die Dateien lassen sich direkt ausliefern.

```
index.html            Einstieg, lädt alle Skripte in fester Reihenfolge
app.js                nur Code, keine Inhalte
data-*.js             nur Inhalte, kein Code (data-karte.js: Küsten, Orte und Routen der Karte, data-kriege.js: Kriege)
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
- **Widersprüche zwischen Sammlungen**: dasselbe Ereignis mit verschiedenen Jahren in Epochen, Zeitleisten, Vertiefungen oder Themen. Wo zwei Jahre zu Recht auseinandergehen – Beginn und Ende, Beschluss und Inkrafttreten –, gehört das mit Begründung in die Liste `ERLAUBTE_ABWEICHUNGEN` in `pruefung.js`
- Belegpflicht: jeder Eintrag vom Typ *Mythos* braucht eine Quelle
- gültige Belegstatus bei Zitaten und Status bei Mysterien

Fehler führen zum Rückgabewert 1. Hinweise sind kein Fehler, lohnen aber einen Blick.
Dieselbe Prüfung läuft über GitHub Actions bei jedem Push.

## Eigene Daten sichern

Lernstand, gelesene Vertiefungen und Forschungsfragen liegen im Speicher **genau des Browsers**,
in dem du sie angelegt hast – nicht auf einem Server. Verlauf löschen, Gerät wechseln oder die
App vom Startbildschirm entfernen, und sie sind weg. Zum Startbildschirm hinzugefügt hat die
App unter iOS sogar einen eigenen Speicher, getrennt von Safari.

Unter **Lernen → Sicherung** lässt sich alles als Datei herunterladen und wieder einspielen.
Beim Einspielen werden vorhandene Werte überschrieben, nicht zusammengeführt.

## Ändern und veröffentlichen

1. Inhalte in der passenden `data-*.js` bearbeiten.
2. **Versionsmarke erhöhen** – an zwei Stellen, sie müssen gleich bleiben:
   - `sw.js`: `const VERSION = '...'`
   - `index.html`: alle `?v=...` hinter den Skript- und CSS-Verweisen
3. `node pruefung.js` ausführen.
4. Committen und pushen. GitHub Pages veröffentlicht automatisch.

Ohne Schritt 2 sehen Nutzer die alte Fassung – oder schlimmer: eine neue `index.html`
mit alten Skripten, wodurch die App gar nicht startet. Genau dafür gibt es die Prüfung.

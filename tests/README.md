# Tests

Sieben Prüfungen, die `node pruefung.js` ergänzen. Das Prüfskript sieht die
Daten, diese Tests sehen die laufende App.

    npm install jsdom          # einmalig, irgendwo im Pfad
    NODE_PATH=<pfad>/node_modules node tests/rendern.js

- `rendern.js` — startet die App und prüft, dass etwas herauskommt.
- `durchklicken.js` — öffnet jeden Bereich, jeden Unterreiter und die
  erste Karte darin; meldet leere Ansichten und fehlende Rückwege.
- `springen.js` — prüft, dass ein Bereichswechsel nach oben scrollt und
  dass Suchsprünge ihren Anker finden und hervorheben.
- `grafiken.js` — prüft, dass alle SVG-Grafiken als Elemente ankommen.
- `karte.js` — prüft, dass jeder Ort der Karte als Punkt erscheint und dass
  der Weg Schlacht → Karte → Eintrag → zurück zur Karte die Auswahl hält.
- `kriege-neu.js` — Startseite zeigt die Neuerungen, Schlacht und Krieg verweisen
  aufeinander, „als gelesen markieren“ nimmt das „neu“ weg (je Krieg, Station, Querschnitt).
- `hakenreihenfolge.js` — klickt sich durch und meldet, wenn die App
  dabei leer wird. Findet React-Fehler 300: ein Haken, der nach einem
  vorzeitigen `return` steht und deshalb nicht bei jedem Durchlauf
  ausgeführt wird. Genau so ist der Fehler vom 2026-09-11 aufgefallen.

Warum jsdom und nicht der Browser: Die Tests sollen ohne Veröffentlichung
laufen. Was jsdom nicht kann — Layout, Seitenlängen, Farben —, wird im
Browser gemessen; das steht in `konzepte/app-qualitaetssicherung.md` im
Second Brain.

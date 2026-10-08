/* =========================================================
   HISTORIA — DATEN: Dark History, Kern

   Wird beim Start geladen. Die großen Sammlungen (AKTEN, GEHEIMBUENDE,
   DOSSIERS, GRUSELMAERCHEN) stehen in data-dark.js und werden von app.js
   erst nach dem ersten Bildaufbau im Hintergrund nachgeladen, damit die
   App schneller startet.
   ========================================================= */

const DARK_RUBRIKEN = [
 {
  "id": "spionage",
  "titel": "Spionage & Geheimdienste",
  "kurz": "Agenten, Codeknacker und Täuschungen – von Walsinghams Chiffren bis zum Verrat im Kalten Krieg."
 },
 {
  "id": "attentate",
  "titel": "Attentate",
  "kurz": "Morde an Mächtigen und gescheiterte Anschläge – wer, warum, und was danach geschah."
 },
 {
  "id": "hexen",
  "titel": "Hexenverfolgung & Inquisition",
  "kurz": "Wie Verfahren Schuldige erzeugten, wer sich dagegenstellte und wie viele Opfer es wirklich waren."
 },
 {
  "id": "piraten",
  "titel": "Piraten, Fälscher & Ausbrüche",
  "kurz": "Seeräuber zwischen Mythos und Galgen, Fälschungen, die Jahrhunderte hielten, und Fluchten aus dem Unentrinnbaren."
 },
 {
  "id": "horror",
  "titel": "Wahre Horrorgeschichten",
  "kurz": "Echte, belegte Ereignisse, die wie Horror klingen – Bestien, Massenhysterien, Seuchen, Spukschwindel und rätselhafte Funde, und was die Forschung darüber weiß."
 }
];

const DARK_THEMEN = ["verbrechen", "gift", "folter", "kulte"];

const DARK_MYSTERIEN = ["somerton", "franklin-expedition", "mary-celeste", "roanoke", "djatlow-pass", "kaspar-hauser", "wallenberg", "prinzen-im-tower", "db-cooper", "amber-room"];

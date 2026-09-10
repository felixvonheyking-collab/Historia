/* =========================================================
   HISTORIA — DATEN: Fotos und Abbildungen zu den Vertiefungen

   Ausschliesslich gemeinfreie Werke und Aufnahmen unter freier Lizenz.
   Jeder Eintrag nennt Urheber, Lizenz und die Herkunftsseite - bei
   CC-BY und CC-BY-SA ist die Namensnennung Bedingung der Lizenz, bei
   gemeinfreien Werken steht sie aus Anstand dabei.

   Die Dateien liegen in bilder/ und werden nicht in den Vorrat des
   Service Workers aufgenommen: Sie sind zusammen ein Vielfaches des
   uebrigen Programms und werden erst geladen, wenn ein Artikel offen
   ist (loading="lazy").

   Regel fuer neue Bilder: erst `bild_holen.py --nur-pruefen` laufen
   lassen. Was die Lizenzpruefung nicht passiert, kommt nicht herein -
   auch nicht "nur zum Ansehen".
   ========================================================= */

const BILDER = [
 {
  "id": "kaiser-tiberius",
  "datei": "bilder/kaiser-tiberius.jpg",
  "breite": 1200,
  "hoehe": 900,
  "zeigt": "Porträtkopf des Tiberius",
  "bildunterschrift": "Ein Bildnis, das den zurückgezogenen Verwalter zeigt, nicht den Mann der Gerüchte. Römische Kaiserporträts waren Staatskunst und nach Vorlagen gearbeitet; sie sagen, wie ein Kaiser gesehen werden wollte.",
  "urheber": "Carole Raddato from FRANKFURT, Germany",
  "lizenz": "CC BY-SA 2.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Tiberius,_Romisch-Germanisches_Museum,_Cologne_(8115606671).jpg"
 },
 {
  "id": "kaiser-caligula",
  "datei": "bilder/kaiser-caligula.jpg",
  "breite": 1200,
  "hoehe": 1599,
  "zeigt": "Bronzebüste Caligulas, Metropolitan Museum",
  "bildunterschrift": "Ein gewöhnliches Gesicht. Nach seinem Tod wurden seine Bildnisse beseitigt oder in andere Kaiser umgearbeitet — was erhalten ist, sehen wir durch die Augen derer, die ihn wegräumen wollten.",
  "urheber": "unbekannt",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Bronze_portrait_bust_of_the_emperor_Gaius_(Caligula)_MET_DP337505.jpg"
 },
 {
  "id": "kaiser-claudius",
  "datei": "bilder/kaiser-claudius.jpg",
  "breite": 1200,
  "hoehe": 1600,
  "zeigt": "Porträt des Kaisers Claudius",
  "bildunterschrift": "Claudius hinkte und sprach undeutlich; die offiziellen Bildnisse zeigen davon nichts. Die Darstellung folgt dem Bild eines tüchtigen Herrschers, nicht dem Körper.",
  "urheber": "Unknown artistUnknown artist",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Claudius_Pio-Clementino_Inv243_cropped_2.jpg"
 },
 {
  "id": "kaiser-commodus",
  "datei": "bilder/kaiser-commodus.jpg",
  "breite": 1200,
  "hoehe": 1800,
  "zeigt": "Commodus als Herkules, Kapitolinische Museen",
  "bildunterschrift": "Löwenfell über dem Kopf, Keule in der Hand, Äpfel der Hesperiden: Commodus ließ sich als wiedergeborener Herkules darstellen. Die Büste ist der stärkste Beleg dafür, dass die Selbstdarstellung kein Gerücht ist.",
  "urheber": "unbekannt",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Commodus_Musei_Capitolini_MC1120.jpg"
 },
 {
  "id": "kaiser-elagabal",
  "datei": "bilder/kaiser-elagabal.jpg",
  "breite": 1200,
  "hoehe": 1879,
  "zeigt": "Porträt Elagabals, Kapitolinische Museen",
  "bildunterschrift": "Achtzehn Jahre alt bei seinem Tod. Gesichert sind der Kult des Sonnengottes, ein Tempel auf dem Palatin und die Ermordung — fast alles Übrige stammt aus der Historia Augusta und ist Literatur.",
  "urheber": "José Luiz",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Bust_of_Elagabalus_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"
 },
 {
  "id": "hammurapi",
  "datei": "bilder/hammurapi.jpg",
  "breite": 1200,
  "hoehe": 1975,
  "zeigt": "Die Stele mit dem Kodex Hammurapi, Louvre",
  "bildunterschrift": "Über zwei Meter schwarzer Diorit. Oben steht der König vor dem Sonnengott Schamasch, darunter folgen 282 Rechtssätze in Keilschrift. Der eigentliche Fortschritt war, dass der Text öffentlich stand und nachlesbar war.",
  "urheber": "Mbzt",
  "lizenz": "CC BY 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
 },
 {
  "id": "venedig",
  "datei": "bilder/venedig.jpg",
  "breite": 1200,
  "hoehe": 728,
  "zeigt": "Canaletto: Das Becken von San Marco, um 1738",
  "bildunterschrift": "Venedig auf dem Höhepunkt seiner Selbstdarstellung — und wenige Jahrzehnte vor dem Ende. 1797 marschierte Napoleon ein, und die Republik gab kampflos auf.",
  "urheber": "Canaletto",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Boston,_Museum_of_Fine_Art_-_Il_bacino_di_San_Marco_c.1738_-_Canaletto.jpg"
 },
 {
  "id": "hexenverfolgung-ende",
  "datei": "bilder/hexenverfolgung-ende.jpg",
  "breite": 1200,
  "hoehe": 1769,
  "zeigt": "Friedrich Spee von Langenfeld (1591–1635)",
  "bildunterschrift": "Der Jesuit, der Verurteilte als Beichtvater begleitet hatte und 1631 anonym die Cautio Criminalis veröffentlichte. Er bestritt nicht die Existenz von Hexen, sondern zeigte, dass das Verfahren jeden überführen konnte.",
  "urheber": "Unknown artistUnknown artist",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Friedrich_Spee.jpg"
 },
 {
  "id": "internet",
  "datei": "bilder/internet.jpg",
  "breite": 1000,
  "hoehe": 716,
  "zeigt": "Logische Karte des ARPANET, März 1977",
  "bildunterschrift": "Das ganze Netz auf einem Blatt. Jeder Kasten ist ein Rechner, jede Linie eine Leitung — und jeder Knoten kannte nur seine Nachbarn. Genau diese Einfachheit machte alles Weitere möglich.",
  "urheber": "ARPANET",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Arpanet_logical_map,_march_1977.png"
 },
 {
  "id": "mondlandung-technik",
  "datei": "bilder/mondlandung-technik.jpg",
  "breite": 1200,
  "hoehe": 1500,
  "zeigt": "Start von Apollo 11 am 16. Juli 1969",
  "bildunterschrift": "2.900 Tonnen Startmasse, davon über 90 Prozent Treibstoff. Zurück zur Erde kamen 5,5 Tonnen.",
  "urheber": "NASA",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Apollo_11_Launch_-_GPN-2000-000630.jpg"
 },
 {
  "id": "pockenimpfung",
  "datei": "bilder/pockenimpfung.jpg",
  "breite": 1200,
  "hoehe": 898,
  "zeigt": "Gaston Mélingue: Jenner impft James Phipps, 1879 gemalt",
  "bildunterschrift": "Das Gemälde entstand 1879 und stellt die erste Impfung von 1796 nach: Jenner überträgt Kuhpockenmaterial auf einen Achtjährigen. Eine spätere Verklärung der Szene — aber das Verfahren stimmt, und das Wort Vakzine stammt von vacca, der Kuh.",
  "urheber": "Gaston Mélingue",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Edward_Jenner_by_Gaston_Melingue.jpg"
 },
 {
  "id": "antibiotika",
  "datei": "bilder/antibiotika.jpg",
  "breite": 1200,
  "hoehe": 929,
  "zeigt": "Alexander Fleming in seinem Labor am St Mary's Hospital, London",
  "bildunterschrift": "Die Aufnahme entstand während des Zweiten Weltkriegs. 1945 erhielt Fleming den Nobelpreis — und warnte in seiner Rede genau vor dem, was heute geschieht: Wer zu niedrig dosiert oder ohne Grund einnimmt, züchtet widerstandsfähige Erreger.",
  "urheber": "Ministry of Information Photo Division Photographer",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Professor_Alexander_Fleming_at_work_in_his_laboratory_at_St_Mary%27s_Hospital,_London,_during_the_Second_World_War._D17801_(cropped).jpg"
 },
 {
  "id": "entdeckung-tiefenzeit",
  "datei": "bilder/entdeckung-tiefenzeit.jpg",
  "breite": 1200,
  "hoehe": 900,
  "zeigt": "Siccar Point in Schottland",
  "bildunterschrift": "Hier sah James Hutton 1788, dass steil stehende Schichten von waagerechten überlagert werden: abgelagert, gekippt, abgetragen, neu abgelagert. Für diese Folge reichen keine sechstausend Jahre.",
  "urheber": "dave souza",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Siccar_Point_red_capstone_closeup.jpg"
 },
 {
  "id": "karthago",
  "datei": "bilder/karthago.jpg",
  "breite": 1200,
  "hoehe": 750,
  "zeigt": "Punische Ausgrabungen im heutigen Karthago",
  "bildunterschrift": "Was von der Stadt übrig ist, die Rom 146 v. Chr. niederbrannte. Die Bibliotheken verbrannten mit, und unser Bild Karthagos stammt fast vollständig von seinen Feinden.",
  "urheber": "3coma14",
  "lizenz": "CC BY 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Templo_de_eshmun_cartago.jpg"
 },
 {
  "id": "pyramiden-bau",
  "datei": "bilder/pyramiden-bau.jpg",
  "breite": 1200,
  "hoehe": 800,
  "zeigt": "Die Cheopspyramide von Gizeh",
  "bildunterschrift": "Rund 2,3 Millionen Steinblöcke, ursprünglich 146,6 Meter hoch. Die Arbeitersiedlungen südlich davon zeigen Bäckereien, Brauereien und Arbeiterfriedhöfe — keine Sklavenlager.",
  "urheber": "kallerna",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Pyramid_of_Cheops_-_side.jpg"
 },
 {
  "id": "beccaria",
  "datei": "bilder/beccaria.jpg",
  "breite": 1200,
  "hoehe": 1757,
  "zeigt": "Cesare Beccaria (1738–1794)",
  "bildunterschrift": "Mit sechsundzwanzig veröffentlichte er anonym hundert Seiten gegen Folter und Todesstrafe. Zwanzig Jahre später schaffte die Toskana als erster Staat der Welt die Todesstrafe ab.",
  "urheber": "Jean François Bozio",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Portrait_of_Cesare_Bonesana,_Marchese_di_Beccaria_MET_DP805366.jpg"
 },
 {
  "id": "frauenwahlrecht",
  "datei": "bilder/frauenwahlrecht.jpg",
  "breite": 1200,
  "hoehe": 897,
  "zeigt": "Emmeline Pankhurst spricht zu einer Menge",
  "bildunterschrift": "Die britischen Suffragetten gingen ab 1905 zu Sachbeschädigung, Brandstiftung und Hungerstreiks über; der Staat antwortete mit Zwangsernährung. Ob das den Erfolg beschleunigte oder verzögerte, ist unter Historikern bis heute umstritten.",
  "urheber": "Unknown authorUnknown author",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Emmeline_Pankhurst_and_other_suffragette_leaders_1908.jpg"
 },
 {
  "id": "dna-alte",
  "datei": "bilder/dna-alte.jpg",
  "breite": 1200,
  "hoehe": 800,
  "zeigt": "Schädel eines Neandertalers",
  "bildunterschrift": "Seit 2010 ist das Neandertaler-Genom entschlüsselt: Menschen außerhalb Afrikas tragen ein bis zwei Prozent neandertalerisches Erbgut. Am besten bewahrt DNA das Felsenbein — der dichteste Knochen des Körpers.",
  "urheber": "Gary Todd",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Le_Moustier_Neanderthal_Skull_Neues_Museum_Berlin.jpg"
 },
 {
  "id": "assassinen",
  "datei": "bilder/assassinen.jpg",
  "breite": 1200,
  "hoehe": 800,
  "zeigt": "Der Burgberg von Alamut im Elburs-Gebirge",
  "bildunterschrift": "Von hier aus hielten die Nizariten 166 Jahre einem Vielfachen an Gegnern stand. 1256 zerstörten die Mongolen die Festung, und die Bibliothek verbrannte — deshalb kennen wir die Gemeinschaft fast nur durch ihre Feinde.",
  "urheber": "Skot",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:View_from_Alamut_Castle,_Iran.jpg"
 }
];

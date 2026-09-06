/* =========================================================
   HISTORIA — DATEN: Mysterien der Geschichte

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const MYSTERIEN = [
  {
    id: "voynich", titel: "Das Voynich-Manuskript", zeitraum: "frühes 15. Jahrhundert", region: "Mitteleuropa (vermutet)",
    kategorie: "Schrift & Sprache", status: "ungeklaert",
    gesichert: "Ein Buch aus rund 240 Pergamentseiten, beschrieben in einer unbekannten Schrift und bebildert mit Pflanzen, astronomischen Figuren und badenden Frauen. Das Pergament ist auf das frühe 15. Jahrhundert datiert, das Material stammt von Kalbshaut. Seit 1969 liegt es in der Beinecke Library in Yale.",
    raetsel: "Niemand kann den Text lesen. Trotz jahrzehntelanger Versuche von Kryptologen – darunter Fachleute, die im Krieg Codes gebrochen haben – ist keine Entzifferung anerkannt.",
    erklaerungen: [
      { these: "Eine verschlüsselte europäische Sprache", dafuer: "Die Buchstabenhäufigkeiten und Wortlängen verhalten sich statistisch ähnlich wie in natürlichen Sprachen.", dagegen: "Keines der bekannten Verschlüsselungsverfahren des 15. Jahrhunderts erzeugt ein solches Muster." },
      { these: "Eine erfundene Sprache oder ein Geheimidiom einer Gemeinschaft", dafuer: "Eine Untersuchung kam zu dem Ergebnis, dass fünf verschiedene Schreiberhände beteiligt waren – möglich wäre eine abgeschlossene Gemeinschaft mit eigener Sprache.", dagegen: "Warum sollte eine solche Gemeinschaft ein einziges, aufwendiges Buch hinterlassen und sonst nichts?" },
      { these: "Eine sinnlose Fälschung, um einen Käufer zu täuschen", dafuer: "Solche Fälschungen gab es; ein prächtiges unlesbares Buch ließ sich gut verkaufen.", dagegen: "Der Text zeigt sprachähnliche Regelmäßigkeiten, die ein Fälscher mit dem Wissen seiner Zeit kaum hätte erzeugen können." }
    ],
    forschungsstand: "2022 bildete sich eine Voynich Research Group aus Fachleuten verschiedener Disziplinen, die es unter anderem mit maschinellen Verfahren versucht. Bislang ohne anerkanntes Ergebnis.",
    abgrenzung: "Immer wieder werden Entzifferungen verkündet, meist mit großem Medienecho. Bisher hat keine einer fachlichen Prüfung standgehalten. Das Manuskript ist ein Rätsel – kein Beleg für Außerirdische, Alchemie-Geheimnisse oder verschollene Zivilisationen.",
    quellen: ["Yale University, Beinecke Rare Book and Manuscript Library: The Voynich Manuscript", "Encyclopaedia Britannica: Voynich manuscript", "Yale Library: Alumna joins the long search to unlock an enigmatic 15th-century manuscript"]
  },
  {
    id: "indus-schrift", titel: "Die Indus-Schrift", zeitraum: "ca. 2600–1900 v. Chr.", region: "Nordwestlicher Subkontinent",
    kategorie: "Schrift & Sprache", status: "ungeklaert",
    gesichert: "Die Indus-Kultur betrieb Städte mit Kanalisation, genormten Ziegeln und Fernhandel. Auf Siegeln, Tafeln und Keramik finden sich kurze Zeichenfolgen – meist nur fünf Zeichen lang, selten mehr als zwanzig.",
    raetsel: "Die Zeichen sind nicht entziffert. Anders als bei Hieroglyphen oder Keilschrift fehlt ein zweisprachiger Text als Schlüssel – kein Stein von Rosetta.",
    erklaerungen: [
      { these: "Eine echte Schrift für eine bekannte Sprachfamilie, etwa eine frühe dravidische Sprache", dafuer: "Die Zeichenfolgen zeigen Regelmäßigkeiten in Reihenfolge und Häufigkeit.", dagegen: "Ohne bilinguen Text bleibt jede Zuordnung eine Hypothese." },
      { these: "Kein Schriftsystem, sondern Symbole für Besitz, Herkunft oder Rituale", dafuer: "Die Texte sind extrem kurz; längere Inschriften fehlen völlig.", dagegen: "Auch kurze Verwaltungsnotizen können Schrift sein – Uruk begann ebenso." }
    ],
    forschungsstand: "Die Zahl bekannter Inschriften wächst langsam, aber das Grundproblem bleibt: zu kurze Texte, kein Schlüssel. Ohne einen zweisprachigen Fund gilt eine Entzifferung als unwahrscheinlich.",
    abgrenzung: "Die Frage ist politisch aufgeladen, weil an der Sprachzuordnung Fragen indischer Identität hängen. Wissenschaftlich ist sie offen – Entzifferungsansprüche von jeder Seite sind mit Vorsicht zu lesen.",
    quellen: ["Encyclopaedia Britannica: Indus civilization; Indus script", "The Metropolitan Museum of Art: Indus Valley Civilization"]
  },
  {
    id: "phaistos", titel: "Der Diskos von Phaistos", zeitraum: "ca. 17. Jahrhundert v. Chr.", region: "Kreta",
    kategorie: "Schrift & Sprache", status: "ungeklaert",
    gesichert: "Eine gebrannte Tonscheibe von etwa 16 Zentimetern Durchmesser, 1908 im minoischen Palast von Phaistos gefunden. Beide Seiten tragen spiralförmig angeordnete Zeichen, die mit Stempeln eingedrückt wurden – die früheste bekannte Anwendung beweglicher Typen überhaupt.",
    raetsel: "241 Zeichenabdrücke, 45 verschiedene Zeichen, keine Entzifferung. Es gibt keinen zweiten Text in derselben Schrift.",
    erklaerungen: [
      { these: "Ein religiöser oder ritueller Text", dafuer: "Der Fundort im Palastbereich und die aufwendige Herstellung sprechen für etwas Besonderes.", dagegen: "Reine Vermutung – aus dem Fundort folgt keine Textgattung." },
      { these: "Eine Fälschung des frühen 20. Jahrhunderts", dafuer: "Die Einzigartigkeit ist auffällig; vergleichbare Objekte fehlen.", dagegen: "Die Fundumstände sind dokumentiert, und thermolumineszente Datierung stützt das Alter." }
    ],
    forschungsstand: "Mit einem einzigen Text von 241 Zeichen ist eine Entzifferung nach heutigem Stand der Kryptologie praktisch ausgeschlossen. Es fehlt schlicht Material.",
    abgrenzung: "Der Diskos wird gern als Beleg für alles Mögliche herangezogen, von Atlantis bis Astronomie. Fachlich gilt: Wir wissen nicht, was dort steht, und werden es ohne weitere Funde nicht erfahren.",
    quellen: ["Encyclopaedia Britannica: Phaistos Disk; Minoan civilization"]
  },
  {
    id: "goebekli-tepe", titel: "Wozu diente Göbekli Tepe?", zeitraum: "ca. 9500–8000 v. Chr.", region: "Südostanatolien",
    kategorie: "Frühgeschichte", status: "teilweise",
    gesichert: "Eine Anlage aus mehreren Steinkreisen mit bis zu fünf Meter hohen T-förmigen Pfeilern, geschmückt mit Tierreliefs. Errichtet von Menschen, die noch nicht ackerbauten: Die Tierknochen stammen ausnahmslos von Wildtieren.",
    raetsel: "Wer baut so etwas – und warum, bevor es Landwirtschaft, Vorratshaltung und Städte gibt? Die Anlage stellt die alte Reihenfolge auf den Kopf, nach der erst der Überschuss kommt und dann die Kultur.",
    erklaerungen: [
      { these: "Ein Heiligtum, 'der älteste Tempel der Welt'", dafuer: "So deutete es der Ausgräber Klaus Schmidt, der ab 1995 bis zu seinem Tod 2014 dort forschte.", dagegen: "Neuere Grabungen zeigen, dass am Ort auch gewohnt wurde – die scharfe Trennung zwischen Heiligtum und Siedlung lässt sich nicht halten." },
      { these: "Ein Versammlungsort, an dem der Bedarf die Landwirtschaft erzwang", dafuer: "Wer viele Menschen über Wochen versammelt, muss sie ernähren – möglicherweise begann der Getreideanbau, um Bauleute zu versorgen.", dagegen: "Die zeitliche Abfolge lässt sich noch nicht fein genug auflösen, um Ursache und Wirkung zu trennen." }
    ],
    forschungsstand: "Das Deutsche Archäologische Institut arbeitet weiter am Ort; im Umfeld wurden inzwischen weitere Anlagen entdeckt (Taş Tepeler). Die Forschung revidiert die frühere Tempel-Deutung, die das populäre Bild bis heute prägt. Ein Fund mit bearbeiteten Menschenschädeln deutet auf einen bislang unbekannten neolithischen Schädelkult.",
    abgrenzung: "Göbekli Tepe wird häufig für Behauptungen über untergegangene Hochkulturen in Anspruch genommen. Nichts am Befund erfordert eine solche Annahme: Die Erbauer waren Jäger und Sammler, deren Können man lange unterschätzt hat.",
    quellen: ["Deutsches Archäologisches Institut: Göbekli Tepe; Taş Tepeler", "Science Advances: Modified human crania from Göbekli Tepe (2017)", "Encyclopaedia Britannica: Göbekli Tepe"]
  },
  {
    id: "dschingis-grab", titel: "Das Grab des Dschingis Khan", zeitraum: "1227", region: "Mongolei",
    kategorie: "Verschollen", status: "ungeklaert",
    gesichert: "Dschingis Khan starb im August 1227. Die Überlieferung berichtet, das Grab sei bewusst verborgen worden.",
    raetsel: "Der Ort ist bis heute unbekannt – trotz Satellitenaufnahmen, Geländeprospektion und internationaler Suchprojekte.",
    erklaerungen: [
      { these: "Absichtliche Verschleierung", dafuer: "Berichte nennen Reiter, die das Grab einebneten, und die Tötung der Beteiligten. Verborgene Herrschergräber sind aus mehreren Kulturen belegt.", dagegen: "Die Berichte stammen aus späterer Zeit und sind selbst Teil der Legendenbildung." },
      { these: "Es liegt in der Sperrzone am Burchan Chaldun", dafuer: "Die Region gilt als heilig und war lange unzugänglich, was eine unbemerkte Erhaltung erklären würde.", dagegen: "Bisherige Untersuchungen dort haben nichts Eindeutiges ergeben." }
    ],
    forschungsstand: "Die Suche ist heikel: Viele Menschen in der Mongolei lehnen eine Störung der Ruhestätte ab. Moderne Projekte arbeiten daher vor allem mit zerstörungsfreien Verfahren.",
    abgrenzung: "Das Rätsel ist echt, die begleitenden Erzählungen von Flüchen und Schatzmengen sind es nicht.",
    quellen: ["Encyclopaedia Britannica: Genghis Khan", "The Metropolitan Museum of Art: The Legacy of Genghis Khan"]
  },
  {
    id: "roanoke", titel: "Die verschwundene Kolonie Roanoke", zeitraum: "1587–1590", region: "Nordamerika, heutiges North Carolina",
    kategorie: "Verschollen", status: "ungeklaert",
    gesichert: "1587 ließen sich rund 115 englische Siedler auf Roanoke Island nieder. Gouverneur John White segelte nach England, um Nachschub zu holen; der Krieg mit Spanien verzögerte seine Rückkehr um drei Jahre. 1590 fand er die Siedlung verlassen vor. In einen Pfosten war das Wort CROATOAN geschnitzt.",
    raetsel: "Was mit den Siedlern geschah, ist ungeklärt. Es gab keine Kampfspuren und keine Gräber.",
    erklaerungen: [
      { these: "Sie zogen zu den Croatan auf der heutigen Insel Hatteras", dafuer: "Die Schnitzerei nennt genau diesen Namen; White selbst hielt das für die wahrscheinlichste Erklärung.", dagegen: "Ein Sturm verhinderte, dass er dort nachsah – bestätigt wurde es nie eindeutig." },
      { these: "Sie gingen an Hunger, Krankheit oder in Konflikten zugrunde", dafuer: "Die Lage war prekär, das Verhältnis zu benachbarten Gruppen angespannt.", dagegen: "Es fehlen die Spuren, die man dann erwarten würde." }
    ],
    forschungsstand: "Grabungen auf Hatteras und im Landesinneren haben europäische Gegenstände in indigenen Zusammenhängen zutage gefördert. Das lässt sich als Hinweis auf eine Eingliederung lesen – beweist sie aber nicht, weil solche Gegenstände auch gehandelt wurden.",
    abgrenzung: "Populäre Erzählungen machen aus Roanoke eine Geistergeschichte. Der wahrscheinlichste Verlauf ist unspektakulär: Menschen schlossen sich anderen Menschen an.",
    quellen: ["Encyclopaedia Britannica: Roanoke Island; Lost Colony; John White"]
  },
  {
    id: "bernsteinzimmer", titel: "Das Bernsteinzimmer", zeitraum: "verschollen seit 1945", region: "Königsberg / Ostpreußen",
    kategorie: "Verschollen", status: "ungeklaert",
    gesichert: "Ein vollständig mit Bernsteinpaneelen ausgekleideter Raum, 1716 von Preußen an Russland geschenkt und im Katharinenpalast bei Sankt Petersburg eingebaut. 1941 von deutschen Truppen abgebaut und nach Königsberg gebracht, dort im Schloss ausgestellt. Ab 1944 verliert sich die Spur.",
    raetsel: "Ob das Zimmer bei der Zerstörung Königsbergs verbrannte oder ausgelagert wurde, ist ungeklärt.",
    erklaerungen: [
      { these: "Es verbrannte 1944/45 in Königsberg", dafuer: "Bernstein ist leicht entzündlich; das Schloss brannte aus. Dies gilt vielen Fachleuten als die nüchternste Erklärung.", dagegen: "Eindeutige Reste wurden nie zugeordnet." },
      { these: "Es wurde ausgelagert und liegt bis heute verborgen", dafuer: "Andere Kunstgüter wurden nachweislich in Bergwerke und Bunker gebracht.", dagegen: "Jahrzehntelange Suchen an zahllosen Orten blieben ergebnislos." }
    ],
    forschungsstand: "Eine Rekonstruktion wurde 2003 im Katharinenpalast eingeweiht. Die Suche nach dem Original gilt vielen als aussichtslos, wird aber immer wieder aufgenommen.",
    abgrenzung: "Kaum ein Thema zieht so viele unbelegte Fundmeldungen an. Jede Meldung sollte man daran messen, ob geprüfte Belege vorliegen – bislang lag noch nie einer vor.",
    quellen: ["Encyclopaedia Britannica: Amber Room"]
  },
  {
    id: "nazca", titel: "Die Nazca-Linien", zeitraum: "ca. 500 v. Chr. – 500 n. Chr.", region: "Südperu",
    kategorie: "Frühgeschichte", status: "teilweise",
    gesichert: "Hunderte von Geoglyphen in der Wüste südlich von Lima: gerade Linien, geometrische Flächen und Tierfiguren, angelegt durch das Entfernen der dunklen Deckschicht. Sie blieben erhalten, weil dort kaum Regen und Wind wirken.",
    raetsel: "Wozu sie dienten, ist nicht abschließend geklärt. Viele Figuren sind vom Boden aus kaum als Ganzes zu erkennen.",
    erklaerungen: [
      { these: "Rituelle Wege, oft mit Wasser verbunden", dafuer: "Viele Linien führen zu Orten, die mit Wasser und Fruchtbarkeit zu tun haben; Wasser war in dieser Wüste die entscheidende Ressource.", dagegen: "Nicht alle Linien lassen sich so erklären." },
      { these: "Ein astronomischer Kalender", dafuer: "Einzelne Linien zeigen auf Auf- und Untergangspunkte von Gestirnen.", dagegen: "Statistische Prüfungen fanden nicht mehr Übereinstimmungen, als der Zufall erwarten ließe." }
    ],
    forschungsstand: "Seit 2019 werden mit Luftbildauswertung und maschinellem Lernen laufend weitere, bislang unbekannte Figuren entdeckt. Die Deutung bleibt offen, die Herstellung ist dagegen gut verstanden: Sie erfordert nur Schnüre, Pflöcke und Geduld.",
    abgrenzung: "Die Behauptung, es handle sich um Landebahnen für Raumschiffe, stammt aus der Unterhaltungsliteratur der 1960er Jahre und hat keinerlei Grundlage. Sie unterstellt zudem, die Erbauer hätten so etwas nicht selbst gekonnt.",
    quellen: ["Encyclopaedia Britannica: Nazca Lines; Nazca culture", "The Metropolitan Museum of Art: Nasca"]
  },
  {
    id: "neunte-legion", titel: "Das Ende der Neunten Legion", zeitraum: "2. Jahrhundert", region: "Britannien",
    kategorie: "Verschollen", status: "ungeklaert",
    gesichert: "Die Legio IX Hispana ist zuletzt um 108 n. Chr. in York durch eine Bauinschrift belegt. Danach verschwindet sie aus den Quellen, ohne dass ihre Auflösung oder Vernichtung berichtet würde.",
    raetsel: "Ob die Legion in Britannien unterging oder verlegt wurde, ist nicht entschieden.",
    erklaerungen: [
      { these: "Vernichtung bei Kämpfen in Nordbritannien", dafuer: "Es gab dort Aufstände, und der Hadrianswall entstand kurz darauf.", dagegen: "Kein antiker Autor berichtet von einer solchen Katastrophe – bei einer ganzen Legion wäre das ungewöhnlich." },
      { these: "Verlegung an eine andere Grenze und späterer Untergang dort", dafuer: "Ziegelstempel der Legion wurden am Niederrhein gefunden, was auf eine Verlegung deutet.", dagegen: "Die Datierung dieser Funde ist umstritten." }
    ],
    forschungsstand: "Die Mehrheit der heutigen Forschung neigt zur Verlegung, nicht zum dramatischen Untergang in Britannien. Sicher ist es nicht.",
    abgrenzung: "Die Vorstellung der im Nebel Schottlands verschwundenen Legion stammt wesentlich aus einem Roman von 1954 und aus Verfilmungen. Sie ist Literatur, nicht Überlieferung.",
    quellen: ["Encyclopaedia Britannica: Roman Britain; Hadrian's Wall; legion"]
  },
  {
    id: "minoischer-untergang", titel: "Der Niedergang der minoischen Kultur", zeitraum: "ca. 1600–1400 v. Chr.", region: "Kreta und Ägäis",
    kategorie: "Untergänge", status: "teilweise",
    gesichert: "Die minoische Kultur auf Kreta beherrschte Handel und Seewege der Ägäis. Auf der Insel Thera (Santorin) brach im 2. Jahrtausend v. Chr. ein Vulkan mit gewaltiger Wucht aus und verschüttete die Stadt Akrotiri. Später gerieten die kretischen Paläste unter mykenische Kontrolle.",
    raetsel: "Wie eng Ausbruch und Niedergang zusammenhängen, ist umstritten – auch weil die Datierung des Ausbruchs schwankt.",
    erklaerungen: [
      { these: "Der Vulkanausbruch zerstörte die Grundlage der Seemacht", dafuer: "Tsunami und Ascheregen hätten Flotte, Häfen und Ernten treffen müssen.", dagegen: "Zwischen Ausbruch und mykenischer Übernahme liegen nach mehreren Datierungen Jahrzehnte bis über ein Jahrhundert." },
      { these: "Eine Verkettung: geschwächt durch die Katastrophe, unterworfen durch die Mykener", dafuer: "Erklärt den zeitlichen Abstand.", dagegen: "Auch das bleibt eine Rekonstruktion – die Quellenlage besteht aus Grabungsbefunden, nicht aus Texten." }
    ],
    forschungsstand: "Radiokarbondaten und archäologische Chronologien liefern seit Jahrzehnten unterschiedliche Zeitansätze für den Ausbruch. Diese Diskrepanz ist der Kern des Problems.",
    abgrenzung: "Die Gleichsetzung von Thera mit Platons Atlantis ist eine moderne Vermutung. Platon schrieb einen philosophischen Text, keinen Grabungsbericht.",
    quellen: ["Encyclopaedia Britannica: Minoan civilization; Thera; Aegean civilizations"]
  },
  {
    id: "somerton", titel: "Der Mann von Somerton", zeitraum: "1948, aufgeklärt 2022", region: "Adelaide, Australien",
    kategorie: "Gelöst", status: "geloest",
    gesichert: "Am 1. Dezember 1948 wurde am Somerton Beach ein toter Mann gefunden, ohne Papiere, mit entfernten Etiketten in der Kleidung. In einer verborgenen Tasche steckte ein Papierschnipsel mit den Worten „Tamam Shud“ – dem Schlussvers aus den Rubaiyat des Omar Chayyam.",
    raetsel: "74 Jahre lang war seine Identität unbekannt. Der Fall galt als eines der bekanntesten ungelösten Rätsel Australiens und zog Spionagetheorien an.",
    erklaerungen: [
      { these: "Genetische Genealogie führt zur Identität", dafuer: "Derek Abbott (Universität Adelaide) und die Genealogin Colleen Fitzpatrick gewannen DNA aus Haaren, die in einer Gipsbüste des Toten steckten, und suchten in offenen Ahnendatenbanken nach Verwandten.", dagegen: "Die formale Bestätigung durch den Coroner stand zunächst noch aus." }
    ],
    forschungsstand: "Über eine sehr entfernte Cousine in Victoria bauten sie einen Stammbaum von rund 4.000 Personen auf. Im Juli 2022 gaben sie den Namen bekannt: Carl „Charles“ Webb, ein 43-jähriger Ingenieur und Instrumentenbauer aus Melbourne. Abbott gab seine Sicherheit mit 99,9 Prozent an; im November 2022 tauchten Familienfotos auf, die zum Toten passen.",
    abgrenzung: "Dieser Fall steht hier als Gegenbeispiel: Rätsel bleiben nicht ungelöst, weil sie unlösbar wären, sondern weil die Methode fehlt. Hier kam sie – siebzig Jahre später.",
    quellen: ["ABC News (Australien): Somerton Man identified as Melbourne electrical engineer (26.07.2022); Somerton Man Charles Webb's true identity revealed (21.11.2022)"]
  },
  {
    id: "richard-iii", titel: "Ein König unter dem Parkplatz", zeitraum: "1485, gefunden 2012", region: "Leicester, England",
    kategorie: "Gelöst", status: "geloest",
    gesichert: "Richard III. fiel 1485 in der Schlacht von Bosworth. Sein Grab im Kloster der Grauen Brüder ging nach der Auflösung der Klöster verloren; über Jahrhunderte hielt sich die Erzählung, seine Gebeine seien in einen Fluss geworfen worden.",
    raetsel: "Wo lag der letzte englische König aus dem Haus Plantagenet begraben?",
    erklaerungen: [
      { these: "Das Kloster lag unter dem heutigen Stadtgebiet – gezielte Suche statt Zufall", dafuer: "Historische Karten und Quellenarbeit engten den Bereich auf einen Parkplatz ein. Am 5. September 2012 wurde dort ein männliches Skelett mit Wirbelsäulenverkrümmung und Kampfverletzungen freigelegt.", dagegen: "Vor der DNA-Prüfung blieb es eine begründete Vermutung." }
    ],
    forschungsstand: "Am 4. Februar 2013 erklärte die Universität Leicester, es handle sich über jeden vernünftigen Zweifel hinaus um Richard III. Ausschlaggebend war unter anderem eine vollständige Übereinstimmung der mitochondrialen DNA mit einem lebenden Nachkommen der weiblichen Linie. 2015 wurde er in der Kathedrale von Leicester bestattet – 530 Jahre nach seinem Tod.",
    abgrenzung: "Auch hier: kein Zufallsfund, sondern Archivarbeit plus Naturwissenschaft. Die Grabung wusste vorher, wo sie graben musste.",
    quellen: ["University of Leicester: Richard III – Discovery and identification; DNA results", "Nature Communications: Identification of the remains of King Richard III (2014)"]
  },
  {
    id: "pest-erreger", titel: "Woran starben die Menschen 1348?", zeitraum: "1348/49, geklärt 2011", region: "London",
    kategorie: "Gelöst", status: "geloest",
    gesichert: "Der Schwarze Tod tötete zwischen 1347 und 1351 schätzungsweise 25 Millionen Menschen in Europa.",
    raetsel: "Lange war umstritten, ob wirklich das Pestbakterium Yersinia pestis die Ursache war – manche Forscher hielten Milzbrand oder ein unbekanntes Virus für wahrscheinlicher, weil die Ausbreitung untypisch schnell erschien.",
    erklaerungen: [
      { these: "Alte DNA aus den Zähnen der Opfer entscheidet die Frage", dafuer: "Auf dem Gelände der Royal Mint in East Smithfield in London liegt ein Pestfriedhof mit über 2.000 Bestattungen aus den Jahren 1348 und 1349 – ein datierter Fundzusammenhang.", dagegen: "Alte DNA ist fragmentiert und leicht durch heutige Keime verunreinigt; die Methode musste erst reifen." }
    ],
    forschungsstand: "2011 gelang es einem Team, aus den Überresten von vier Bestatteten das Genom von Yersinia pestis zu rekonstruieren – die erste Genomsequenz eines antiken bakteriellen Krankheitserregers überhaupt (Nature, Bd. 478). Das Ergebnis enthielt zugleich eine Enttäuschung: Der mittelalterliche Stamm unterscheidet sich kaum von heutigen. Warum die Seuche damals so viel tödlicher verlief, bleibt offen – die Antwort liegt vermutlich weniger im Erreger als in den Lebensumständen.",
    abgrenzung: "Ein Rätsel wurde geklärt und ein neues sichtbar. Das ist der Normalfall in der Forschung, nicht die Ausnahme.",
    quellen: ["Nature 478 (2011): A draft genome of Yersinia pestis from victims of the Black Death", "Encyclopaedia Britannica: Black Death"]
  },
  {
    id: "linear-b", titel: "Die Entzifferung von Linear B", zeitraum: "gefunden ab 1900, entziffert 1952", region: "Kreta und griechisches Festland",
    kategorie: "Gelöst", status: "geloest",
    gesichert: "Bei Ausgrabungen in Knossos kamen Tontafeln mit einer unbekannten Silbenschrift zutage. Ihr Ausgräber Arthur Evans hielt die Sprache dahinter zeitlebens für nicht-griechisch.",
    raetsel: "Über fünfzig Jahre lang blieb die Schrift unlesbar.",
    erklaerungen: [
      { these: "Die Sprache ist eine frühe Form des Griechischen", dafuer: "Der Architekt Michael Ventris kam 1952 zu diesem Ergebnis – gegen seine eigene ursprüngliche Annahme. Die Zeichenverteilung ließ sich mit griechischen Wortformen widerspruchsfrei erklären.", dagegen: "Die Fachwelt war zunächst skeptisch, weil es Evans' Autorität widersprach." }
    ],
    forschungsstand: "Die Entzifferung setzte sich durch, als neue Tafeln aus Pylos exakt jene Wortformen zeigten, die Ventris' Lesung vorhersagte – eine echte Prüfung mit unabhängigen Daten. Die Tafeln enthalten übrigens keine Literatur, sondern Inventarlisten: Schafe, Öl, Räder, Personal.",
    abgrenzung: "Linear A, die ältere Schrift derselben Region, ist bis heute nicht entziffert. Ein Erfolg überträgt sich nicht automatisch auf den nächsten Fall.",
    quellen: ["Encyclopaedia Britannica: Linear B; Michael Ventris; Aegean civilizations; Linear A"]
  }
];

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
  },
  {
    id: "antikythera",
    titel: "Der Mechanismus von Antikythera",
    zeitraum: "ca. 150–100 v. Chr.",
    region: "Griechenland",
    kategorie: "Technik",
    status: "teilweise",
    gesichert: "1901 barg man aus einem Schiffswrack vor der Insel Antikythera einen korrodierten Bronzeklumpen. Er enthält über dreißig ineinandergreifende Zahnräder. Computertomografie zeigte ab 2006 Inschriften und Zahnradzahlen: Das Gerät bildete Sonnen- und Mondlauf, den Kalender und die Termine der Olympischen Spiele ab.",
    raetsel: "Es gibt kein vergleichbares Objekt aus der Antike – und kein technisch ähnliches wieder für über tausend Jahre. Wie eine so verzahnte Feinmechanik entstehen und dann spurlos verschwinden konnte, ist offen.",
    erklaerungen: [
      { these: "Ein Einzelstück eines außergewöhnlichen Werkstattmilieus", dafuer: "Antike Autoren erwähnen Planetarien des Archimedes und des Poseidonios.", dagegen: "Die Verarbeitung wirkt eingespielt, nicht wie ein erster Versuch." },
      { these: "Ein verbreiteter Gerätetyp, von dem nichts erhalten blieb", dafuer: "Bronze wurde über Jahrhunderte eingeschmolzen; nur der Meeresgrund bewahrte dieses Stück.", dagegen: "Es fehlen jede Werkstattspur und jede zweite Fundstelle." }
    ],
    forschungsstand: "Die Funktion gilt heute weitgehend als geklärt; 2021 legte ein Team des University College London ein Modell auch des Planetenteils vor. Ungeklärt bleiben Hersteller, Auftraggeber und Verbreitung.",
    abgrenzung: "Kein Beweis für verlorene Hochtechnologie: Das Gerät nutzt bekannte Mechanik und bekanntes astronomisches Wissen – bemerkenswert ist die Präzision der Ausführung, nicht ein unbekanntes Prinzip.",
    quellen: [
      "Nature (2006): Freeth u. a., Decoding the ancient Greek astronomical calculator",
      "Scientific Reports (2021): UCL-Modell des Planetariums",
      "Encyclopaedia Britannica: Antikythera mechanism"
    ]
  },
  {
    id: "seevoelker",
    titel: "Wer waren die Seevölker?",
    zeitraum: "ca. 1200–1150 v. Chr.",
    region: "Östliches Mittelmeer",
    kategorie: "Völker & Wanderungen",
    status: "ungeklaert",
    gesichert: "Ägyptische Inschriften aus der Zeit Ramses' III. berichten von Angreifern zu Wasser und zu Lande, mit Namen wie Peleset, Schekelesch und Scherden. Im selben Zeitraum brechen im östlichen Mittelmeer Paläste, Schrift und Fernhandel zusammen.",
    raetsel: "Woher diese Gruppen kamen, ob sie überhaupt ein Bündnis bildeten und ob sie Ursache oder Symptom des Zusammenbruchs waren, ist ungeklärt.",
    erklaerungen: [
      { these: "Wandernde Kriegerverbände aus dem ägäischen Raum", dafuer: "Materielle Ähnlichkeiten zwischen philistäischer und mykenischer Keramik.", dagegen: "Die Namenszuordnung zu Herkunftsräumen beruht auf schwacher sprachlicher Grundlage." },
      { these: "Folge und nicht Ursache: Dürre, Hunger und Systemzusammenbruch setzten Menschen in Bewegung", dafuer: "Pollenprofile und Isotopendaten belegen eine mehrjährige Trockenphase um 1200 v. Chr.", dagegen: "Klimadaten erklären Wanderung, aber nicht die konkrete militärische Wucht der Angriffe." },
      { these: "Ein ägyptisches Erzählmuster, das viele Gegner zu einem Feind bündelt", dafuer: "Die Inschriften sind Siegespropaganda in stark formelhafter Sprache.", dagegen: "Die Zerstörungshorizonte in Ugarit und anderswo sind archäologisch real." }
    ],
    forschungsstand: "Die neuere Forschung sieht den Zusammenbruch der Bronzezeit als Zusammenwirken mehrerer Ursachen und misst den Seevölkern eine geringere Rolle bei als die ältere Literatur.",
    abgrenzung: "Nicht zu verwechseln mit einer einzelnen Invasion: Der Begriff Seevölker ist eine moderne Sammelbezeichnung des 19. Jahrhunderts, keine Selbstbezeichnung.",
    quellen: [
      "Eric H. Cline: 1177 v. Chr. Der erste Untergang der Zivilisation",
      "Encyclopaedia Britannica: Sea Peoples",
      "PLoS ONE (2013): Pollenanalysen zur Dürre in der südlichen Levante"
    ]
  },
  {
    id: "indus-untergang",
    titel: "Warum endete die Indus-Kultur?",
    zeitraum: "ca. 1900–1300 v. Chr.",
    region: "Pakistan, Nordwestindien",
    kategorie: "Untergang von Kulturen",
    status: "teilweise",
    gesichert: "Die Städte der Indus-Kultur zählten zu den größten der Bronzezeit, mit rechtwinkligem Straßennetz, Abwasserleitungen und genormten Ziegeln. Ab etwa 1900 v. Chr. wurden die großen Zentren aufgegeben, die Schrift verschwand, die Bevölkerung verlagerte sich nach Osten.",
    raetsel: "Es gibt keine Zerstörungsschicht, keine Massengräber, keine Hinweise auf Eroberung. Eine Hochkultur verschwindet, ohne dass etwas Sichtbares geschieht.",
    erklaerungen: [
      { these: "Klimawandel und schwächere Monsune", dafuer: "Sedimentbohrungen zeigen eine über Jahrhunderte zunehmende Trockenheit.", dagegen: "Der Prozess verlief langsam; unklar bleibt, warum keine Anpassung gelang." },
      { these: "Verlagerung und Versiegen von Flussläufen", dafuer: "Geologische Untersuchungen belegen Änderungen im Flusssystem der Region.", dagegen: "Zeitliche Zuordnung und Ausmaß sind umstritten." },
      { these: "Einwanderung indoarischer Gruppen", dafuer: "Sprachgeschichtlich ist eine Zuwanderung gut begründbar, genetische Studien stützen Bewegungen aus der Steppe.", dagegen: "Die ältere Vorstellung einer gewaltsamen Eroberung ist archäologisch nicht haltbar und gilt als überholt." }
    ],
    forschungsstand: "Die Mehrheit sieht heute ein Zusammenwirken von Klima- und Flussveränderungen mit gesellschaftlicher Umschichtung, nicht ein einzelnes Ereignis.",
    abgrenzung: "Die Frage ist unabhängig davon zu behandeln, dass die Indus-Schrift bis heute nicht gelesen werden kann – beides zusammen macht die Kultur aber besonders schwer zugänglich.",
    quellen: [
      "Encyclopaedia Britannica: Indus civilization",
      "Nature Communications (2012/2018): Studien zu Monsun und Flusssystemen im Indusraum",
      "Cell (2019): Genomstudie zur Bevölkerungsgeschichte Südasiens"
    ]
  },
  {
    id: "hoehlenkunst",
    titel: "Wozu die Höhlenbilder?",
    zeitraum: "ca. 40.000–12.000 v. Chr.",
    region: "Europa, weltweit",
    kategorie: "Kunst & Religion",
    status: "ungeklaert",
    gesichert: "In Chauvet, Lascaux, Altamira und hunderten weiteren Höhlen finden sich Tierdarstellungen von hoher Beobachtungsschärfe, oft tief im Berg, an Stellen ohne Tageslicht und ohne Siedlungsspuren. Auf Sulawesi wurden Bilder auf über 45.000 Jahre datiert – die Praxis ist nicht europäisch.",
    raetsel: "Warum malten Menschen an Orte, die kaum jemand sehen konnte, und warum fast nur Tiere und fast nie Landschaft?",
    erklaerungen: [
      { these: "Jagdmagie", dafuer: "Häufig sind Beutetiere dargestellt, manche mit Speerzeichen.", dagegen: "Die dargestellten Arten stimmen oft nicht mit den Knochenfunden der Siedlungen überein – gemalt wurde anderes, als gegessen wurde." },
      { these: "Schamanische Praxis in veränderten Bewusstseinszuständen", dafuer: "Geometrische Muster ähneln Wahrnehmungsmustern, die auch sonst unter bestimmten Bedingungen auftreten.", dagegen: "Die Übertragung heutiger ethnografischer Beobachtungen auf die Eiszeit ist methodisch angreifbar." },
      { these: "Wissensweitergabe und Initiation", dafuer: "Kinderhandabdrücke und Fußspuren zeigen, dass auch Junge die Höhlen betraten.", dagegen: "Bleibt Deutung; direkte Belege für Unterricht fehlen." }
    ],
    forschungsstand: "Eine einheitliche Erklärung gilt inzwischen als unwahrscheinlich: Die Bilder entstanden über 25.000 Jahre hinweg – ein Zeitraum, der länger ist als die gesamte Geschichte seit der Erfindung der Schrift.",
    abgrenzung: "Nicht zu verwechseln mit der Frage nach dem Ursprung von Kunst überhaupt; Schmuck und Ockerverwendung sind deutlich älter.",
    quellen: [
      "Encyclopaedia Britannica: Cave art; Lascaux",
      "Nature (2019/2021): Datierungen der Höhlenmalereien auf Sulawesi",
      "Jean Clottes: Höhlenkunst. Die Anfänge der Kunst"
    ]
  },
  {
    id: "franklin-expedition",
    titel: "Das Ende der Franklin-Expedition",
    zeitraum: "1845–1848",
    region: "Kanadische Arktis",
    kategorie: "Verschollene Expeditionen",
    status: "geloest",
    gesichert: "1845 brach John Franklin mit zwei Schiffen und 129 Mann auf, um die Nordwestpassage zu finden. Niemand kehrte zurück. Über Jahrzehnte suchten mehr als dreißig Expeditionen. Inuit berichteten früh von verhungernden Männern und von Kannibalismus – die britische Öffentlichkeit wies das empört zurück.",
    raetsel: "Lange war unklar, wo die Schiffe lagen und warum eine gut ausgerüstete Expedition vollständig unterging.",
    erklaerungen: [
      { these: "Kälte, Eis und Hunger", dafuer: "Die Schiffe saßen über Jahre im Eis fest; Vorräte waren auf drei Jahre bemessen.", dagegen: "Erklärt nicht die auffällige Schwäche der Mannschaft schon im ersten Winter." },
      { these: "Bleivergiftung aus Konservendosen", dafuer: "Erhöhte Bleiwerte in Knochen und Haaren der Toten.", dagegen: "Neuere Studien halten die Werte für nicht ungewöhnlich für Briten jener Zeit." },
      { these: "Zusammenwirken mehrerer Ursachen, darunter Skorbut und Tuberkulose", dafuer: "Skelettbefunde zeigen entsprechende Spuren.", dagegen: "Die genaue Abfolge bleibt unbekannt." }
    ],
    forschungsstand: "2014 und 2016 wurden beide Schiffe gefunden – die Erebus und die Terror, geortet auch dank Inuit-Überlieferungen, die man 150 Jahre lang ignoriert hatte. Schnittspuren an Knochen bestätigten den Kannibalismus.",
    abgrenzung: "Der Fall zeigt weniger ein historisches Rätsel als ein Erkenntnisproblem: Die entscheidenden Auskünfte lagen von Anfang an vor, wurden aber wegen ihrer Herkunft nicht ernst genommen.",
    quellen: [
      "Parks Canada: Wrecks of HMS Erebus and HMS Terror, Fundberichte 2014 und 2016",
      "Journal of Archaeological Science (1997/2015): Untersuchungen zu Schnittspuren und Bleiwerten",
      "Encyclopaedia Britannica: John Franklin"
    ]
  },
  {
    id: "mary-celeste",
    titel: "Die verlassene Mary Celeste",
    zeitraum: "1872",
    region: "Atlantik",
    kategorie: "Verschollene Menschen",
    status: "ungeklaert",
    gesichert: "Am 4. Dezember 1872 wurde die Brigantine Mary Celeste zwischen den Azoren und Portugal treibend gefunden – seetüchtig, mit Vorräten für Monate, aber ohne Menschen. Das Rettungsboot fehlte, die Ladung Rohalkohol war bis auf neun beschädigte Fässer intakt.",
    raetsel: "Warum verließ eine erfahrene Besatzung ein intaktes Schiff auf offener See?",
    erklaerungen: [
      { these: "Panik wegen austretender Alkoholdämpfe", dafuer: "Neun Fässer waren leck; verdampfender Alkohol kann eine Explosionsangst auslösen.", dagegen: "Es fanden sich keine Brand- oder Explosionsspuren." },
      { these: "Fehleinschätzung eines Wassereinbruchs", dafuer: "Die Pumpe war zerlegt, das Lot zeigte Wasser im Rumpf – die Lage konnte bedrohlicher wirken, als sie war.", dagegen: "Warum das Beiboot dann nicht am Schiff vertäut blieb, bleibt offen." },
      { these: "Seebeben oder Wasserhose", dafuer: "Erklärt eine plötzliche Räumung.", dagegen: "Keinerlei Beleg, reine Möglichkeit." }
    ],
    forschungsstand: "Die Alkoholdampf-These gilt als plausibelste, ist aber unbewiesen. Die Besatzung wurde nie gefunden.",
    abgrenzung: "Der größte Teil des populären Bildes stammt aus einer Erzählung, die Arthur Conan Doyle 1884 veröffentlichte und die frei erfundene Details wie noch warme Mahlzeiten hinzufügte – sie stehen in keinem Protokoll.",
    quellen: [
      "Encyclopaedia Britannica: Mary Celeste",
      "Protokolle des Vizeadmiralitätsgerichts Gibraltar, 1873",
      "Smithsonian Magazine: Abandoned Ship. The Mary Celeste"
    ]
  }
];

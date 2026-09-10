/* =========================================================
   HISTORIA — DATEN: Mysterien der Geschichte

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const MYSTERIEN = [
 {
  "id": "voynich",
  "titel": "Das Voynich-Manuskript",
  "zeitraum": "frühes 15. Jahrhundert",
  "region": "Mitteleuropa (vermutet)",
  "kategorie": "Schrift & Sprache",
  "status": "ungeklaert",
  "gesichert": "Ein Buch aus rund 240 Pergamentseiten, beschrieben in einer unbekannten Schrift und bebildert mit Pflanzen, astronomischen Figuren und badenden Frauen. Das Pergament ist auf das frühe 15. Jahrhundert datiert, das Material stammt von Kalbshaut. Seit 1969 liegt es in der Beinecke Library in Yale.",
  "raetsel": "Niemand kann den Text lesen. Trotz jahrzehntelanger Versuche von Kryptologen – darunter Fachleute, die im Krieg Codes gebrochen haben – ist keine Entzifferung anerkannt.",
  "erklaerungen": [
   {
    "these": "Eine verschlüsselte europäische Sprache",
    "dafuer": "Die Buchstabenhäufigkeiten und Wortlängen verhalten sich statistisch ähnlich wie in natürlichen Sprachen.",
    "dagegen": "Keines der bekannten Verschlüsselungsverfahren des 15. Jahrhunderts erzeugt ein solches Muster."
   },
   {
    "these": "Eine erfundene Sprache oder ein Geheimidiom einer Gemeinschaft",
    "dafuer": "Eine Untersuchung kam zu dem Ergebnis, dass fünf verschiedene Schreiberhände beteiligt waren – möglich wäre eine abgeschlossene Gemeinschaft mit eigener Sprache.",
    "dagegen": "Warum sollte eine solche Gemeinschaft ein einziges, aufwendiges Buch hinterlassen und sonst nichts?"
   },
   {
    "these": "Eine sinnlose Fälschung, um einen Käufer zu täuschen",
    "dafuer": "Solche Fälschungen gab es; ein prächtiges unlesbares Buch ließ sich gut verkaufen.",
    "dagegen": "Der Text zeigt sprachähnliche Regelmäßigkeiten, die ein Fälscher mit dem Wissen seiner Zeit kaum hätte erzeugen können."
   }
  ],
  "forschungsstand": "2022 bildete sich eine Voynich Research Group aus Fachleuten verschiedener Disziplinen, die es unter anderem mit maschinellen Verfahren versucht. Bislang ohne anerkanntes Ergebnis.",
  "abgrenzung": "Immer wieder werden Entzifferungen verkündet, meist mit großem Medienecho. Bisher hat keine einer fachlichen Prüfung standgehalten. Das Manuskript ist ein Rätsel – kein Beleg für Außerirdische, Alchemie-Geheimnisse oder verschollene Zivilisationen.",
  "quellen": [
   "Yale University, Beinecke Rare Book and Manuscript Library: The Voynich Manuscript",
   "Encyclopaedia Britannica: Voynich manuscript",
   "Yale Library: Alumna joins the long search to unlock an enigmatic 15th-century manuscript"
  ]
 },
 {
  "id": "indus-schrift",
  "titel": "Die Indus-Schrift",
  "zeitraum": "ca. 2600–1900 v. Chr.",
  "region": "Nordwestlicher Subkontinent",
  "kategorie": "Schrift & Sprache",
  "status": "ungeklaert",
  "gesichert": "Die Indus-Kultur betrieb Städte mit Kanalisation, genormten Ziegeln und Fernhandel. Auf Siegeln, Tafeln und Keramik finden sich kurze Zeichenfolgen – meist nur fünf Zeichen lang, selten mehr als zwanzig.",
  "raetsel": "Die Zeichen sind nicht entziffert. Anders als bei Hieroglyphen oder Keilschrift fehlt ein zweisprachiger Text als Schlüssel – kein Stein von Rosetta.",
  "erklaerungen": [
   {
    "these": "Eine echte Schrift für eine bekannte Sprachfamilie, etwa eine frühe dravidische Sprache",
    "dafuer": "Die Zeichenfolgen zeigen Regelmäßigkeiten in Reihenfolge und Häufigkeit.",
    "dagegen": "Ohne bilinguen Text bleibt jede Zuordnung eine Hypothese."
   },
   {
    "these": "Kein Schriftsystem, sondern Symbole für Besitz, Herkunft oder Rituale",
    "dafuer": "Die Texte sind extrem kurz; längere Inschriften fehlen völlig.",
    "dagegen": "Auch kurze Verwaltungsnotizen können Schrift sein – Uruk begann ebenso."
   }
  ],
  "forschungsstand": "Die Zahl bekannter Inschriften wächst langsam, aber das Grundproblem bleibt: zu kurze Texte, kein Schlüssel. Ohne einen zweisprachigen Fund gilt eine Entzifferung als unwahrscheinlich.",
  "abgrenzung": "Die Frage ist politisch aufgeladen, weil an der Sprachzuordnung Fragen indischer Identität hängen. Wissenschaftlich ist sie offen – Entzifferungsansprüche von jeder Seite sind mit Vorsicht zu lesen.",
  "quellen": [
   "Encyclopaedia Britannica: Indus civilization; Indus script",
   "The Metropolitan Museum of Art: Indus Valley Civilization"
  ]
 },
 {
  "id": "phaistos",
  "titel": "Der Diskos von Phaistos",
  "zeitraum": "ca. 17. Jahrhundert v. Chr.",
  "region": "Kreta",
  "kategorie": "Schrift & Sprache",
  "status": "ungeklaert",
  "gesichert": "Eine gebrannte Tonscheibe von etwa 16 Zentimetern Durchmesser, 1908 im minoischen Palast von Phaistos gefunden. Beide Seiten tragen spiralförmig angeordnete Zeichen, die mit Stempeln eingedrückt wurden – die früheste bekannte Anwendung beweglicher Typen überhaupt.",
  "raetsel": "241 Zeichenabdrücke, 45 verschiedene Zeichen, keine Entzifferung. Es gibt keinen zweiten Text in derselben Schrift.",
  "erklaerungen": [
   {
    "these": "Ein religiöser oder ritueller Text",
    "dafuer": "Der Fundort im Palastbereich und die aufwendige Herstellung sprechen für etwas Besonderes.",
    "dagegen": "Reine Vermutung – aus dem Fundort folgt keine Textgattung."
   },
   {
    "these": "Eine Fälschung des frühen 20. Jahrhunderts",
    "dafuer": "Die Einzigartigkeit ist auffällig; vergleichbare Objekte fehlen.",
    "dagegen": "Die Fundumstände sind dokumentiert, und thermolumineszente Datierung stützt das Alter."
   }
  ],
  "forschungsstand": "Mit einem einzigen Text von 241 Zeichen ist eine Entzifferung nach heutigem Stand der Kryptologie praktisch ausgeschlossen. Es fehlt schlicht Material.",
  "abgrenzung": "Der Diskos wird gern als Beleg für alles Mögliche herangezogen, von Atlantis bis Astronomie. Fachlich gilt: Wir wissen nicht, was dort steht, und werden es ohne weitere Funde nicht erfahren.",
  "quellen": [
   "Encyclopaedia Britannica: Phaistos Disk; Minoan civilization"
  ]
 },
 {
  "id": "goebekli-tepe",
  "titel": "Wozu diente Göbekli Tepe?",
  "zeitraum": "ca. 9500–8000 v. Chr.",
  "region": "Südostanatolien",
  "kategorie": "Frühgeschichte",
  "status": "teilweise",
  "gesichert": "Eine Anlage aus mehreren Steinkreisen mit bis zu fünf Meter hohen T-förmigen Pfeilern, geschmückt mit Tierreliefs. Errichtet von Menschen, die noch nicht ackerbauten: Die Tierknochen stammen ausnahmslos von Wildtieren.",
  "raetsel": "Wer baut so etwas – und warum, bevor es Landwirtschaft, Vorratshaltung und Städte gibt? Die Anlage stellt die alte Reihenfolge auf den Kopf, nach der erst der Überschuss kommt und dann die Kultur.",
  "erklaerungen": [
   {
    "these": "Ein Heiligtum, 'der älteste Tempel der Welt'",
    "dafuer": "So deutete es der Ausgräber Klaus Schmidt, der ab 1995 bis zu seinem Tod 2014 dort forschte.",
    "dagegen": "Neuere Grabungen zeigen, dass am Ort auch gewohnt wurde – die scharfe Trennung zwischen Heiligtum und Siedlung lässt sich nicht halten."
   },
   {
    "these": "Ein Versammlungsort, an dem der Bedarf die Landwirtschaft erzwang",
    "dafuer": "Wer viele Menschen über Wochen versammelt, muss sie ernähren – möglicherweise begann der Getreideanbau, um Bauleute zu versorgen.",
    "dagegen": "Die zeitliche Abfolge lässt sich noch nicht fein genug auflösen, um Ursache und Wirkung zu trennen."
   }
  ],
  "forschungsstand": "Das Deutsche Archäologische Institut arbeitet weiter am Ort; im Umfeld wurden inzwischen weitere Anlagen entdeckt (Taş Tepeler). Die Forschung revidiert die frühere Tempel-Deutung, die das populäre Bild bis heute prägt. Ein Fund mit bearbeiteten Menschenschädeln deutet auf einen bislang unbekannten neolithischen Schädelkult.",
  "abgrenzung": "Göbekli Tepe wird häufig für Behauptungen über untergegangene Hochkulturen in Anspruch genommen. Nichts am Befund erfordert eine solche Annahme: Die Erbauer waren Jäger und Sammler, deren Können man lange unterschätzt hat.",
  "quellen": [
   "Deutsches Archäologisches Institut: Göbekli Tepe; Taş Tepeler",
   "Science Advances: Modified human crania from Göbekli Tepe (2017)",
   "Encyclopaedia Britannica: Göbekli Tepe"
  ]
 },
 {
  "id": "dschingis-grab",
  "titel": "Das Grab des Dschingis Khan",
  "zeitraum": "1227",
  "region": "Mongolei",
  "kategorie": "Verschollen",
  "status": "ungeklaert",
  "gesichert": "Dschingis Khan starb im August 1227. Die Überlieferung berichtet, das Grab sei bewusst verborgen worden.",
  "raetsel": "Der Ort ist bis heute unbekannt – trotz Satellitenaufnahmen, Geländeprospektion und internationaler Suchprojekte.",
  "erklaerungen": [
   {
    "these": "Absichtliche Verschleierung",
    "dafuer": "Berichte nennen Reiter, die das Grab einebneten, und die Tötung der Beteiligten. Verborgene Herrschergräber sind aus mehreren Kulturen belegt.",
    "dagegen": "Die Berichte stammen aus späterer Zeit und sind selbst Teil der Legendenbildung."
   },
   {
    "these": "Es liegt in der Sperrzone am Burchan Chaldun",
    "dafuer": "Die Region gilt als heilig und war lange unzugänglich, was eine unbemerkte Erhaltung erklären würde.",
    "dagegen": "Bisherige Untersuchungen dort haben nichts Eindeutiges ergeben."
   }
  ],
  "forschungsstand": "Die Suche ist heikel: Viele Menschen in der Mongolei lehnen eine Störung der Ruhestätte ab. Moderne Projekte arbeiten daher vor allem mit zerstörungsfreien Verfahren.",
  "abgrenzung": "Das Rätsel ist echt, die begleitenden Erzählungen von Flüchen und Schatzmengen sind es nicht.",
  "quellen": [
   "Encyclopaedia Britannica: Genghis Khan",
   "The Metropolitan Museum of Art: The Legacy of Genghis Khan"
  ]
 },
 {
  "id": "bernsteinzimmer",
  "titel": "Das Bernsteinzimmer",
  "zeitraum": "verschollen seit 1945",
  "region": "Königsberg / Ostpreußen",
  "kategorie": "Verschollen",
  "status": "ungeklaert",
  "gesichert": "Ein vollständig mit Bernsteinpaneelen ausgekleideter Raum, 1716 von Preußen an Russland geschenkt und im Katharinenpalast bei Sankt Petersburg eingebaut. 1941 von deutschen Truppen abgebaut und nach Königsberg gebracht, dort im Schloss ausgestellt. Ab 1944 verliert sich die Spur.",
  "raetsel": "Ob das Zimmer bei der Zerstörung Königsbergs verbrannte oder ausgelagert wurde, ist ungeklärt.",
  "erklaerungen": [
   {
    "these": "Es verbrannte 1944/45 in Königsberg",
    "dafuer": "Bernstein ist leicht entzündlich; das Schloss brannte aus. Dies gilt vielen Fachleuten als die nüchternste Erklärung.",
    "dagegen": "Eindeutige Reste wurden nie zugeordnet."
   },
   {
    "these": "Es wurde ausgelagert und liegt bis heute verborgen",
    "dafuer": "Andere Kunstgüter wurden nachweislich in Bergwerke und Bunker gebracht.",
    "dagegen": "Jahrzehntelange Suchen an zahllosen Orten blieben ergebnislos."
   }
  ],
  "forschungsstand": "Eine Rekonstruktion wurde 2003 im Katharinenpalast eingeweiht. Die Suche nach dem Original gilt vielen als aussichtslos, wird aber immer wieder aufgenommen.",
  "abgrenzung": "Kaum ein Thema zieht so viele unbelegte Fundmeldungen an. Jede Meldung sollte man daran messen, ob geprüfte Belege vorliegen – bislang lag noch nie einer vor.",
  "quellen": [
   "Encyclopaedia Britannica: Amber Room"
  ]
 },
 {
  "id": "neunte-legion",
  "titel": "Das Ende der Neunten Legion",
  "zeitraum": "2. Jahrhundert",
  "region": "Britannien",
  "kategorie": "Verschollen",
  "status": "ungeklaert",
  "gesichert": "Die Legio IX Hispana ist zuletzt um 108 n. Chr. in York durch eine Bauinschrift belegt. Danach verschwindet sie aus den Quellen, ohne dass ihre Auflösung oder Vernichtung berichtet würde.",
  "raetsel": "Ob die Legion in Britannien unterging oder verlegt wurde, ist nicht entschieden.",
  "erklaerungen": [
   {
    "these": "Vernichtung bei Kämpfen in Nordbritannien",
    "dafuer": "Es gab dort Aufstände, und der Hadrianswall entstand kurz darauf.",
    "dagegen": "Kein antiker Autor berichtet von einer solchen Katastrophe – bei einer ganzen Legion wäre das ungewöhnlich."
   },
   {
    "these": "Verlegung an eine andere Grenze und späterer Untergang dort",
    "dafuer": "Ziegelstempel der Legion wurden am Niederrhein gefunden, was auf eine Verlegung deutet.",
    "dagegen": "Die Datierung dieser Funde ist umstritten."
   }
  ],
  "forschungsstand": "Die Mehrheit der heutigen Forschung neigt zur Verlegung, nicht zum dramatischen Untergang in Britannien. Sicher ist es nicht.",
  "abgrenzung": "Die Vorstellung der im Nebel Schottlands verschwundenen Legion stammt wesentlich aus einem Roman von 1954 und aus Verfilmungen. Sie ist Literatur, nicht Überlieferung.",
  "quellen": [
   "Encyclopaedia Britannica: Roman Britain; Hadrian's Wall; legion"
  ]
 },
 {
  "id": "minoischer-untergang",
  "titel": "Der Niedergang der minoischen Kultur",
  "zeitraum": "ca. 1600–1400 v. Chr.",
  "region": "Kreta und Ägäis",
  "kategorie": "Untergänge",
  "status": "teilweise",
  "gesichert": "Die minoische Kultur auf Kreta beherrschte Handel und Seewege der Ägäis. Auf der Insel Thera (Santorin) brach im 2. Jahrtausend v. Chr. ein Vulkan mit gewaltiger Wucht aus und verschüttete die Stadt Akrotiri. Später gerieten die kretischen Paläste unter mykenische Kontrolle.",
  "raetsel": "Wie eng Ausbruch und Niedergang zusammenhängen, ist umstritten – auch weil die Datierung des Ausbruchs schwankt.",
  "erklaerungen": [
   {
    "these": "Der Vulkanausbruch zerstörte die Grundlage der Seemacht",
    "dafuer": "Tsunami und Ascheregen hätten Flotte, Häfen und Ernten treffen müssen.",
    "dagegen": "Zwischen Ausbruch und mykenischer Übernahme liegen nach mehreren Datierungen Jahrzehnte bis über ein Jahrhundert."
   },
   {
    "these": "Eine Verkettung: geschwächt durch die Katastrophe, unterworfen durch die Mykener",
    "dafuer": "Erklärt den zeitlichen Abstand.",
    "dagegen": "Auch das bleibt eine Rekonstruktion – die Quellenlage besteht aus Grabungsbefunden, nicht aus Texten."
   }
  ],
  "forschungsstand": "Radiokarbondaten und archäologische Chronologien liefern seit Jahrzehnten unterschiedliche Zeitansätze für den Ausbruch. Diese Diskrepanz ist der Kern des Problems.",
  "abgrenzung": "Die Gleichsetzung von Thera mit Platons Atlantis ist eine moderne Vermutung. Platon schrieb einen philosophischen Text, keinen Grabungsbericht.",
  "quellen": [
   "Encyclopaedia Britannica: Minoan civilization; Thera; Aegean civilizations"
  ]
 },
 {
  "id": "somerton",
  "titel": "Der Mann von Somerton",
  "zeitraum": "1948, aufgeklärt 2022",
  "region": "Adelaide, Australien",
  "kategorie": "Gelöst",
  "status": "geloest",
  "gesichert": "Am 1. Dezember 1948 wurde am Somerton Beach ein toter Mann gefunden, ohne Papiere, mit entfernten Etiketten in der Kleidung. In einer verborgenen Tasche steckte ein Papierschnipsel mit den Worten „Tamam Shud“ – dem Schlussvers aus den Rubaiyat des Omar Chayyam.",
  "raetsel": "74 Jahre lang war seine Identität unbekannt. Der Fall galt als eines der bekanntesten ungelösten Rätsel Australiens und zog Spionagetheorien an.",
  "erklaerungen": [
   {
    "these": "Genetische Genealogie führt zur Identität",
    "dafuer": "Derek Abbott (Universität Adelaide) und die Genealogin Colleen Fitzpatrick gewannen DNA aus Haaren, die in einer Gipsbüste des Toten steckten, und suchten in offenen Ahnendatenbanken nach Verwandten.",
    "dagegen": "Die formale Bestätigung durch den Coroner stand zunächst noch aus."
   }
  ],
  "forschungsstand": "Über eine sehr entfernte Cousine in Victoria bauten sie einen Stammbaum von rund 4.000 Personen auf. Im Juli 2022 gaben sie den Namen bekannt: Carl „Charles“ Webb, ein 43-jähriger Ingenieur und Instrumentenbauer aus Melbourne. Abbott gab seine Sicherheit mit 99,9 Prozent an; im November 2022 tauchten Familienfotos auf, die zum Toten passen.",
  "abgrenzung": "Dieser Fall steht hier als Gegenbeispiel: Rätsel bleiben nicht ungelöst, weil sie unlösbar wären, sondern weil die Methode fehlt. Hier kam sie – siebzig Jahre später.",
  "quellen": [
   "ABC News (Australien): Somerton Man identified as Melbourne electrical engineer (26.07.2022); Somerton Man Charles Webb's true identity revealed (21.11.2022)"
  ]
 },
 {
  "id": "richard-iii",
  "titel": "Ein König unter dem Parkplatz",
  "zeitraum": "1485, gefunden 2012",
  "region": "Leicester, England",
  "kategorie": "Gelöst",
  "status": "geloest",
  "gesichert": "Richard III. fiel 1485 in der Schlacht von Bosworth. Sein Grab im Kloster der Grauen Brüder ging nach der Auflösung der Klöster verloren; über Jahrhunderte hielt sich die Erzählung, seine Gebeine seien in einen Fluss geworfen worden.",
  "raetsel": "Wo lag der letzte englische König aus dem Haus Plantagenet begraben?",
  "erklaerungen": [
   {
    "these": "Das Kloster lag unter dem heutigen Stadtgebiet – gezielte Suche statt Zufall",
    "dafuer": "Historische Karten und Quellenarbeit engten den Bereich auf einen Parkplatz ein. Am 5. September 2012 wurde dort ein männliches Skelett mit Wirbelsäulenverkrümmung und Kampfverletzungen freigelegt.",
    "dagegen": "Vor der DNA-Prüfung blieb es eine begründete Vermutung."
   }
  ],
  "forschungsstand": "Am 4. Februar 2013 erklärte die Universität Leicester, es handle sich über jeden vernünftigen Zweifel hinaus um Richard III. Ausschlaggebend war unter anderem eine vollständige Übereinstimmung der mitochondrialen DNA mit einem lebenden Nachkommen der weiblichen Linie. 2015 wurde er in der Kathedrale von Leicester bestattet – 530 Jahre nach seinem Tod.",
  "abgrenzung": "Auch hier: kein Zufallsfund, sondern Archivarbeit plus Naturwissenschaft. Die Grabung wusste vorher, wo sie graben musste.",
  "quellen": [
   "University of Leicester: Richard III – Discovery and identification; DNA results",
   "Nature Communications: Identification of the remains of King Richard III (2014)"
  ]
 },
 {
  "id": "pest-erreger",
  "titel": "Woran starben die Menschen 1348?",
  "zeitraum": "1348/49, geklärt 2011",
  "region": "London",
  "kategorie": "Gelöst",
  "status": "geloest",
  "gesichert": "Der Schwarze Tod tötete zwischen 1347 und 1351 schätzungsweise 25 Millionen Menschen in Europa.",
  "raetsel": "Lange war umstritten, ob wirklich das Pestbakterium Yersinia pestis die Ursache war – manche Forscher hielten Milzbrand oder ein unbekanntes Virus für wahrscheinlicher, weil die Ausbreitung untypisch schnell erschien.",
  "erklaerungen": [
   {
    "these": "Alte DNA aus den Zähnen der Opfer entscheidet die Frage",
    "dafuer": "Auf dem Gelände der Royal Mint in East Smithfield in London liegt ein Pestfriedhof mit über 2.000 Bestattungen aus den Jahren 1348 und 1349 – ein datierter Fundzusammenhang.",
    "dagegen": "Alte DNA ist fragmentiert und leicht durch heutige Keime verunreinigt; die Methode musste erst reifen."
   }
  ],
  "forschungsstand": "2011 gelang es einem Team, aus den Überresten von vier Bestatteten das Genom von Yersinia pestis zu rekonstruieren – die erste Genomsequenz eines antiken bakteriellen Krankheitserregers überhaupt (Nature, Bd. 478). Das Ergebnis enthielt zugleich eine Enttäuschung: Der mittelalterliche Stamm unterscheidet sich kaum von heutigen. Warum die Seuche damals so viel tödlicher verlief, bleibt offen – die Antwort liegt vermutlich weniger im Erreger als in den Lebensumständen.",
  "abgrenzung": "Ein Rätsel wurde geklärt und ein neues sichtbar. Das ist der Normalfall in der Forschung, nicht die Ausnahme.",
  "quellen": [
   "Nature 478 (2011): A draft genome of Yersinia pestis from victims of the Black Death",
   "Encyclopaedia Britannica: Black Death"
  ]
 },
 {
  "id": "linear-b",
  "titel": "Die Entzifferung von Linear B",
  "zeitraum": "gefunden ab 1900, entziffert 1952",
  "region": "Kreta und griechisches Festland",
  "kategorie": "Gelöst",
  "status": "geloest",
  "gesichert": "Bei Ausgrabungen in Knossos kamen Tontafeln mit einer unbekannten Silbenschrift zutage. Ihr Ausgräber Arthur Evans hielt die Sprache dahinter zeitlebens für nicht-griechisch.",
  "raetsel": "Über fünfzig Jahre lang blieb die Schrift unlesbar.",
  "erklaerungen": [
   {
    "these": "Die Sprache ist eine frühe Form des Griechischen",
    "dafuer": "Der Architekt Michael Ventris kam 1952 zu diesem Ergebnis – gegen seine eigene ursprüngliche Annahme. Die Zeichenverteilung ließ sich mit griechischen Wortformen widerspruchsfrei erklären.",
    "dagegen": "Die Fachwelt war zunächst skeptisch, weil es Evans' Autorität widersprach."
   }
  ],
  "forschungsstand": "Die Entzifferung setzte sich durch, als neue Tafeln aus Pylos exakt jene Wortformen zeigten, die Ventris' Lesung vorhersagte – eine echte Prüfung mit unabhängigen Daten. Die Tafeln enthalten übrigens keine Literatur, sondern Inventarlisten: Schafe, Öl, Räder, Personal.",
  "abgrenzung": "Linear A, die ältere Schrift derselben Region, ist bis heute nicht entziffert. Ein Erfolg überträgt sich nicht automatisch auf den nächsten Fall.",
  "quellen": [
   "Encyclopaedia Britannica: Linear B; Michael Ventris; Aegean civilizations; Linear A"
  ]
 },
 {
  "id": "antikythera",
  "titel": "Der Mechanismus von Antikythera",
  "zeitraum": "ca. 150–100 v. Chr.",
  "region": "Griechenland",
  "kategorie": "Technik",
  "status": "teilweise",
  "gesichert": "1901 barg man aus einem Schiffswrack vor der Insel Antikythera einen korrodierten Bronzeklumpen. Er enthält über dreißig ineinandergreifende Zahnräder. Computertomografie zeigte ab 2006 Inschriften und Zahnradzahlen: Das Gerät bildete Sonnen- und Mondlauf, den Kalender und die Termine der Olympischen Spiele ab.",
  "raetsel": "Es gibt kein vergleichbares Objekt aus der Antike – und kein technisch ähnliches wieder für über tausend Jahre. Wie eine so verzahnte Feinmechanik entstehen und dann spurlos verschwinden konnte, ist offen.",
  "erklaerungen": [
   {
    "these": "Ein Einzelstück eines außergewöhnlichen Werkstattmilieus",
    "dafuer": "Antike Autoren erwähnen Planetarien des Archimedes und des Poseidonios.",
    "dagegen": "Die Verarbeitung wirkt eingespielt, nicht wie ein erster Versuch."
   },
   {
    "these": "Ein verbreiteter Gerätetyp, von dem nichts erhalten blieb",
    "dafuer": "Bronze wurde über Jahrhunderte eingeschmolzen; nur der Meeresgrund bewahrte dieses Stück.",
    "dagegen": "Es fehlen jede Werkstattspur und jede zweite Fundstelle."
   }
  ],
  "forschungsstand": "Die Funktion gilt heute weitgehend als geklärt; 2021 legte ein Team des University College London ein Modell auch des Planetenteils vor. Ungeklärt bleiben Hersteller, Auftraggeber und Verbreitung.",
  "abgrenzung": "Kein Beweis für verlorene Hochtechnologie: Das Gerät nutzt bekannte Mechanik und bekanntes astronomisches Wissen – bemerkenswert ist die Präzision der Ausführung, nicht ein unbekanntes Prinzip.",
  "quellen": [
   "Nature (2006): Freeth u. a., Decoding the ancient Greek astronomical calculator",
   "Scientific Reports (2021): UCL-Modell des Planetariums",
   "Encyclopaedia Britannica: Antikythera mechanism"
  ]
 },
 {
  "id": "seevoelker",
  "titel": "Wer waren die Seevölker?",
  "zeitraum": "ca. 1200–1150 v. Chr.",
  "region": "Östliches Mittelmeer",
  "kategorie": "Völker & Wanderungen",
  "status": "ungeklaert",
  "gesichert": "Ägyptische Inschriften aus der Zeit Ramses' III. berichten von Angreifern zu Wasser und zu Lande, mit Namen wie Peleset, Schekelesch und Scherden. Im selben Zeitraum brechen im östlichen Mittelmeer Paläste, Schrift und Fernhandel zusammen.",
  "raetsel": "Woher diese Gruppen kamen, ob sie überhaupt ein Bündnis bildeten und ob sie Ursache oder Symptom des Zusammenbruchs waren, ist ungeklärt.",
  "erklaerungen": [
   {
    "these": "Wandernde Kriegerverbände aus dem ägäischen Raum",
    "dafuer": "Materielle Ähnlichkeiten zwischen philistäischer und mykenischer Keramik.",
    "dagegen": "Die Namenszuordnung zu Herkunftsräumen beruht auf schwacher sprachlicher Grundlage."
   },
   {
    "these": "Folge und nicht Ursache: Dürre, Hunger und Systemzusammenbruch setzten Menschen in Bewegung",
    "dafuer": "Pollenprofile und Isotopendaten belegen eine mehrjährige Trockenphase um 1200 v. Chr.",
    "dagegen": "Klimadaten erklären Wanderung, aber nicht die konkrete militärische Wucht der Angriffe."
   },
   {
    "these": "Ein ägyptisches Erzählmuster, das viele Gegner zu einem Feind bündelt",
    "dafuer": "Die Inschriften sind Siegespropaganda in stark formelhafter Sprache.",
    "dagegen": "Die Zerstörungshorizonte in Ugarit und anderswo sind archäologisch real."
   }
  ],
  "forschungsstand": "Die neuere Forschung sieht den Zusammenbruch der Bronzezeit als Zusammenwirken mehrerer Ursachen und misst den Seevölkern eine geringere Rolle bei als die ältere Literatur.",
  "abgrenzung": "Nicht zu verwechseln mit einer einzelnen Invasion: Der Begriff Seevölker ist eine moderne Sammelbezeichnung des 19. Jahrhunderts, keine Selbstbezeichnung.",
  "quellen": [
   "Eric H. Cline: 1177 v. Chr. Der erste Untergang der Zivilisation",
   "Encyclopaedia Britannica: Sea Peoples",
   "PLoS ONE (2013): Pollenanalysen zur Dürre in der südlichen Levante"
  ]
 },
 {
  "id": "indus-untergang",
  "titel": "Warum endete die Indus-Kultur?",
  "zeitraum": "ca. 1900–1300 v. Chr.",
  "region": "Pakistan, Nordwestindien",
  "kategorie": "Untergang von Kulturen",
  "status": "teilweise",
  "gesichert": "Die Städte der Indus-Kultur zählten zu den größten der Bronzezeit, mit rechtwinkligem Straßennetz, Abwasserleitungen und genormten Ziegeln. Ab etwa 1900 v. Chr. wurden die großen Zentren aufgegeben, die Schrift verschwand, die Bevölkerung verlagerte sich nach Osten.",
  "raetsel": "Es gibt keine Zerstörungsschicht, keine Massengräber, keine Hinweise auf Eroberung. Eine Hochkultur verschwindet, ohne dass etwas Sichtbares geschieht.",
  "erklaerungen": [
   {
    "these": "Klimawandel und schwächere Monsune",
    "dafuer": "Sedimentbohrungen zeigen eine über Jahrhunderte zunehmende Trockenheit.",
    "dagegen": "Der Prozess verlief langsam; unklar bleibt, warum keine Anpassung gelang."
   },
   {
    "these": "Verlagerung und Versiegen von Flussläufen",
    "dafuer": "Geologische Untersuchungen belegen Änderungen im Flusssystem der Region.",
    "dagegen": "Zeitliche Zuordnung und Ausmaß sind umstritten."
   },
   {
    "these": "Einwanderung indoarischer Gruppen",
    "dafuer": "Sprachgeschichtlich ist eine Zuwanderung gut begründbar, genetische Studien stützen Bewegungen aus der Steppe.",
    "dagegen": "Die ältere Vorstellung einer gewaltsamen Eroberung ist archäologisch nicht haltbar und gilt als überholt."
   }
  ],
  "forschungsstand": "Die Mehrheit sieht heute ein Zusammenwirken von Klima- und Flussveränderungen mit gesellschaftlicher Umschichtung, nicht ein einzelnes Ereignis.",
  "abgrenzung": "Die Frage ist unabhängig davon zu behandeln, dass die Indus-Schrift bis heute nicht gelesen werden kann – beides zusammen macht die Kultur aber besonders schwer zugänglich.",
  "quellen": [
   "Encyclopaedia Britannica: Indus civilization",
   "Nature Communications (2012/2018): Studien zu Monsun und Flusssystemen im Indusraum",
   "Cell (2019): Genomstudie zur Bevölkerungsgeschichte Südasiens"
  ]
 },
 {
  "id": "hoehlenkunst",
  "titel": "Wozu die Höhlenbilder?",
  "zeitraum": "ca. 40.000–12.000 v. Chr.",
  "region": "Europa, weltweit",
  "kategorie": "Kunst & Religion",
  "status": "ungeklaert",
  "gesichert": "In Chauvet, Lascaux, Altamira und hunderten weiteren Höhlen finden sich Tierdarstellungen von hoher Beobachtungsschärfe, oft tief im Berg, an Stellen ohne Tageslicht und ohne Siedlungsspuren. Auf Sulawesi wurden Bilder auf über 45.000 Jahre datiert – die Praxis ist nicht europäisch.",
  "raetsel": "Warum malten Menschen an Orte, die kaum jemand sehen konnte, und warum fast nur Tiere und fast nie Landschaft?",
  "erklaerungen": [
   {
    "these": "Jagdmagie",
    "dafuer": "Häufig sind Beutetiere dargestellt, manche mit Speerzeichen.",
    "dagegen": "Die dargestellten Arten stimmen oft nicht mit den Knochenfunden der Siedlungen überein – gemalt wurde anderes, als gegessen wurde."
   },
   {
    "these": "Schamanische Praxis in veränderten Bewusstseinszuständen",
    "dafuer": "Geometrische Muster ähneln Wahrnehmungsmustern, die auch sonst unter bestimmten Bedingungen auftreten.",
    "dagegen": "Die Übertragung heutiger ethnografischer Beobachtungen auf die Eiszeit ist methodisch angreifbar."
   },
   {
    "these": "Wissensweitergabe und Initiation",
    "dafuer": "Kinderhandabdrücke und Fußspuren zeigen, dass auch Junge die Höhlen betraten.",
    "dagegen": "Bleibt Deutung; direkte Belege für Unterricht fehlen."
   }
  ],
  "forschungsstand": "Eine einheitliche Erklärung gilt inzwischen als unwahrscheinlich: Die Bilder entstanden über 25.000 Jahre hinweg – ein Zeitraum, der länger ist als die gesamte Geschichte seit der Erfindung der Schrift.",
  "abgrenzung": "Nicht zu verwechseln mit der Frage nach dem Ursprung von Kunst überhaupt; Schmuck und Ockerverwendung sind deutlich älter.",
  "quellen": [
   "Encyclopaedia Britannica: Cave art; Lascaux",
   "Nature (2019/2021): Datierungen der Höhlenmalereien auf Sulawesi",
   "Jean Clottes: Höhlenkunst. Die Anfänge der Kunst"
  ]
 },
 {
  "id": "franklin-expedition",
  "titel": "Das Ende der Franklin-Expedition",
  "zeitraum": "1845–1848",
  "region": "Kanadische Arktis",
  "kategorie": "Verschollene Expeditionen",
  "status": "geloest",
  "gesichert": "1845 brach John Franklin mit zwei Schiffen und 129 Mann auf, um die Nordwestpassage zu finden. Niemand kehrte zurück. Über Jahrzehnte suchten mehr als dreißig Expeditionen. Inuit berichteten früh von verhungernden Männern und von Kannibalismus – die britische Öffentlichkeit wies das empört zurück.",
  "raetsel": "Lange war unklar, wo die Schiffe lagen und warum eine gut ausgerüstete Expedition vollständig unterging.",
  "erklaerungen": [
   {
    "these": "Kälte, Eis und Hunger",
    "dafuer": "Die Schiffe saßen über Jahre im Eis fest; Vorräte waren auf drei Jahre bemessen.",
    "dagegen": "Erklärt nicht die auffällige Schwäche der Mannschaft schon im ersten Winter."
   },
   {
    "these": "Bleivergiftung aus Konservendosen",
    "dafuer": "Erhöhte Bleiwerte in Knochen und Haaren der Toten.",
    "dagegen": "Neuere Studien halten die Werte für nicht ungewöhnlich für Briten jener Zeit."
   },
   {
    "these": "Zusammenwirken mehrerer Ursachen, darunter Skorbut und Tuberkulose",
    "dafuer": "Skelettbefunde zeigen entsprechende Spuren.",
    "dagegen": "Die genaue Abfolge bleibt unbekannt."
   }
  ],
  "forschungsstand": "2014 und 2016 wurden beide Schiffe gefunden – die Erebus und die Terror, geortet auch dank Inuit-Überlieferungen, die man 150 Jahre lang ignoriert hatte. Schnittspuren an Knochen bestätigten den Kannibalismus.",
  "abgrenzung": "Der Fall zeigt weniger ein historisches Rätsel als ein Erkenntnisproblem: Die entscheidenden Auskünfte lagen von Anfang an vor, wurden aber wegen ihrer Herkunft nicht ernst genommen.",
  "quellen": [
   "Parks Canada: Wrecks of HMS Erebus and HMS Terror, Fundberichte 2014 und 2016",
   "Journal of Archaeological Science (1997/2015): Untersuchungen zu Schnittspuren und Bleiwerten",
   "Encyclopaedia Britannica: John Franklin"
  ]
 },
 {
  "id": "mary-celeste",
  "titel": "Die verlassene Mary Celeste",
  "zeitraum": "1872",
  "region": "Atlantik",
  "kategorie": "Verschollene Menschen",
  "status": "ungeklaert",
  "gesichert": "Am 4. Dezember 1872 wurde die Brigantine Mary Celeste zwischen den Azoren und Portugal treibend gefunden – seetüchtig, mit Vorräten für Monate, aber ohne Menschen. Das Rettungsboot fehlte, die Ladung Rohalkohol war bis auf neun beschädigte Fässer intakt.",
  "raetsel": "Warum verließ eine erfahrene Besatzung ein intaktes Schiff auf offener See?",
  "erklaerungen": [
   {
    "these": "Panik wegen austretender Alkoholdämpfe",
    "dafuer": "Neun Fässer waren leck; verdampfender Alkohol kann eine Explosionsangst auslösen.",
    "dagegen": "Es fanden sich keine Brand- oder Explosionsspuren."
   },
   {
    "these": "Fehleinschätzung eines Wassereinbruchs",
    "dafuer": "Die Pumpe war zerlegt, das Lot zeigte Wasser im Rumpf – die Lage konnte bedrohlicher wirken, als sie war.",
    "dagegen": "Warum das Beiboot dann nicht am Schiff vertäut blieb, bleibt offen."
   },
   {
    "these": "Seebeben oder Wasserhose",
    "dafuer": "Erklärt eine plötzliche Räumung.",
    "dagegen": "Keinerlei Beleg, reine Möglichkeit."
   }
  ],
  "forschungsstand": "Die Alkoholdampf-These gilt als plausibelste, ist aber unbewiesen. Die Besatzung wurde nie gefunden.",
  "abgrenzung": "Der größte Teil des populären Bildes stammt aus einer Erzählung, die Arthur Conan Doyle 1884 veröffentlichte und die frei erfundene Details wie noch warme Mahlzeiten hinzufügte – sie stehen in keinem Protokoll.",
  "quellen": [
   "Encyclopaedia Britannica: Mary Celeste",
   "Protokolle des Vizeadmiralitätsgerichts Gibraltar, 1873",
   "Smithsonian Magazine: Abandoned Ship. The Mary Celeste"
  ]
 },
 {
  "id": "amber-room",
  "titel": "Das Bernsteinzimmer",
  "zeitraum": "1701–1945",
  "region": "Preußen und Russland",
  "kategorie": "Verschollen",
  "status": "ungeklaert",
  "gesichert": "Ein vollständig mit Bernsteinmosaiken verkleideter Raum, ab 1701 in Preußen gefertigt und 1716 von Friedrich Wilhelm I. an Peter den Großen geschenkt, später im Katharinenpalast bei Sankt Petersburg erweitert. 1941 wurde er von deutschen Truppen abgebaut und nach Königsberg gebracht, wo er im Schloss ausgestellt und 1944 verpackt wurde. Nach der Zerstörung Königsbergs 1945 verliert sich die Spur. Zwei Einzelteile tauchten 1997 in Deutschland auf: ein Mosaikbild und eine Kommode, beide 2000 an Russland übergeben.",
  "raetsel": "Wo die etwa sechs Tonnen Bernsteintafeln geblieben sind, ist unbekannt. Der Raum war das bekannteste Beutestück des Krieges, wurde von mehreren Staaten gesucht und ist nie gefunden worden.",
  "erklaerungen": [
   {
    "these": "Verbrannt beim Untergang Königsbergs",
    "dafuer": "Das Schloss brannte im August 1944 und wurde 1945 zerstört; Bernstein ist brennbar. Ein Bericht des Museumsleiters Alfred Rohde nennt Kisten im Schloss. Die russische Untersuchungskommission hielt diese Möglichkeit früh für wahrscheinlich.",
    "dagegen": "Bei Bränden von Bernstein bleiben Rückstände und Metallteile der Rahmen; in den Trümmern wurden keine eindeutigen Reste identifiziert. Zeugen berichteten von einem Abtransport."
   },
   {
    "these": "In einem Bergwerk oder Bunker eingelagert und noch vorhanden",
    "dafuer": "Deutsche Behörden lagerten Kunstgut großflächig in Salzstöcken und Stollen aus; Transportlisten sind teils erhalten. Mehrere Suchgrabungen — im Erzgebirge, in Thüringen, in Polen — gingen auf Zeugenangaben zurück.",
    "dagegen": "Keine der über zwei Dutzend Suchaktionen seit 1945 hat etwas gefunden. Zeugenangaben widersprechen sich in Ort und Zeitpunkt."
   },
   {
    "these": "Auf einem versenkten Schiff",
    "dafuer": "Die Flucht über die Ostsee war der Hauptweg aus Ostpreußen; die Wilhelm Gustloff und die Goya sanken mit Ladung. Taucher haben mehrfach danach gesucht.",
    "dagegen": "Für keine der Frachtlisten dieser Schiffe ist das Bernsteinzimmer belegt. Die Transporte erfolgten unter Zeitdruck und wurden dokumentiert."
   }
  ],
  "forschungsstand": "Eine deutsch-russische Kommission arbeitete in den 1990er Jahren die Aktenlage auf, ohne Ergebnis. Im Katharinenpalast steht seit 2003 eine vollständige Rekonstruktion, für die russische und deutsche Restauratoren 24 Jahre brauchten; sie wurde teils von deutschen Unternehmen finanziert. Suchmeldungen erscheinen weiterhin regelmäßig und haben bislang nie zu einem Fund geführt.",
  "abgrenzung": "Das Bernsteinzimmer ist ein Fall von Kriegsverlust, nicht von Verschwörung. Es ist auch kein Einzelfall: Nach Schätzungen sind über eine Million Kunstgegenstände aus dem Zweiten Weltkrieg unauffindbar, darunter Raphaels Porträt eines jungen Mannes aus Krakau. Das Zimmer ist nur der bekannteste davon.",
  "quellen": [
   "Encyclopaedia Britannica: Amber Room",
   "Staatliches Museum Zarskoje Selo: Geschichte und Rekonstruktion des Bernsteinzimmers",
   "Deutsches Historisches Museum: Kriegsverluste und Beutekunst, Dokumentation",
   "Adrian Levy und Cathy Scott-Clark: The Amber Room, 2004"
  ]
 },
 {
  "id": "nazca",
  "titel": "Die Nazca-Linien",
  "zeitraum": "ca. 500 v. Chr. – 500 n. Chr.",
  "region": "Südperu",
  "kategorie": "Kunst & Religion",
  "status": "teilweise",
  "gesichert": "In der Wüste südlich von Lima sind über tausend Geoglyphen angelegt: gerade Linien bis zu 20 Kilometer Länge, Trapeze, Spiralen und rund siebzig Tier- und Pflanzenfiguren. Sie entstanden, indem die dunkle, oxidierte Deckschicht des Bodens beiseitegeräumt wurde, sodass der hellere Untergrund erscheint. Erhalten sind sie, weil es dort fast nie regnet und kaum Wind am Boden weht. Die Technik ist rekonstruiert: mit Pflöcken, Schnüren und einfachen Rastermethoden lassen sich die Figuren auch ohne Blick von oben exakt anlegen — Versuche haben das mehrfach gezeigt.",
  "raetsel": "Wozu sie dienten, ist nicht abschließend geklärt. Sie sind vom Boden aus nur in Teilen zu erkennen, und es gibt keine Schriftquellen der Nazca-Kultur.",
  "erklaerungen": [
   {
    "these": "Wege für Prozessionen zu Wasserstellen und Kultplätzen",
    "dafuer": "Viele Linien führen zu Fundstellen mit zerbrochener Keramik und zu Quellen; die Nazca lebten in einer der trockensten Gegenden der Welt, und Wasser stand im Zentrum ihres Kults. Auf mehreren Linien sind Trittspuren nachgewiesen. Diese Deutung, von Johan Reinhard und anderen vertreten, gilt heute als die tragfähigste.",
    "dagegen": "Sie erklärt die Tierfiguren weniger gut als die geraden Linien, und nicht alle Linien enden an Wasserstellen."
   },
   {
    "these": "Ein astronomischer Kalender",
    "dafuer": "Maria Reiche, die vierzig Jahre vor Ort arbeitete, ordnete einzelnen Linien Sonnenwenden und Sternaufgänge zu.",
    "dagegen": "Eine statistische Überprüfung durch Gerald Hawkins in den 1960er Jahren fand nicht mehr Übereinstimmungen als bei zufällig gezogenen Linien. Die Deutung gilt heute als überwiegend widerlegt."
   },
   {
    "these": "Zeichen für übermenschliche Betrachter aus der Luft",
    "dafuer": "Die Figuren sind aus der Luft am besten erkennbar, was Erich von Däniken ab 1968 populär machte.",
    "dagegen": "Die Nazca hatten Berge und Hügel in Reichweite, von denen viele Figuren einsehbar sind, und die Anlagetechnik verlangt keinen Blick von oben. Vor allem: Die Deutung erklärt nichts, was die anderen nicht besser erklären, und setzt Voraussetzungen ohne jeden Befund."
   }
  ],
  "forschungsstand": "Seit 2019 finden japanische Forschungsgruppen der Universität Yamagata mit KI-gestützter Auswertung von Luft- und Satellitenbildern immer weitere, kleinere Figuren — 2024 wurden auf einen Schlag über 300 neue gemeldet. Die neuen Funde stützen die Prozessionsdeutung, weil viele kleine Figuren an Pfaden liegen und aus der Nähe sichtbar sind.",
  "abgrenzung": "Die Linien sind kein Rätsel der Machbarkeit — wie sie angelegt wurden, ist bekannt und nachgestellt. Offen ist allein die Bedeutung. Die Erzählung von Landebahnen ist zudem in einem Punkt selbstwidersprüchlich: Der Boden ist weich, ein landendes Fahrzeug würde einsinken.",
  "quellen": [
   "Encyclopaedia Britannica: Nazca Lines",
   "UNESCO-Welterbe: Lines and Geoglyphs of Nasca and Palpa",
   "Universität Yamagata, Nasca Institute: Fundmeldungen 2019–2024",
   "Johan Reinhard: The Nazca Lines – A New Perspective on their Origin and Meaning"
  ]
 },
 {
  "id": "tunguska",
  "titel": "Das Tunguska-Ereignis",
  "zeitraum": "30. Juni 1908",
  "region": "Sibirien",
  "kategorie": "Untergänge",
  "status": "teilweise",
  "gesichert": "Am Morgen des 30. Juni 1908 zerstörte eine Explosion über der sibirischen Taiga rund 2.000 Quadratkilometer Wald; etwa 80 Millionen Bäume wurden umgeworfen, radial vom Zentrum weg. Druckwellen wurden auf Barographen in ganz Europa aufgezeichnet, in den Nächten danach war der Himmel über Eurasien ungewöhnlich hell. Die Energie wird auf 10 bis 15 Megatonnen TNT geschätzt. Die Gegend war fast unbewohnt; es gab keine belegten Todesopfer. Erste wissenschaftliche Expeditionen kamen erst 1927 unter Leonid Kulik hin.",
  "raetsel": "Ein Einschlagkrater fehlt, und es wurden keine größeren Meteoritenbruchstücke gefunden. Was genau explodierte, ist deshalb nicht endgültig bestimmt.",
  "erklaerungen": [
   {
    "these": "Ein Steinasteroid, der in der Luft zerbrach",
    "dafuer": "Die heute vorherrschende Erklärung. Ein Körper von 50 bis 60 Metern zerfällt bei hoher Geschwindigkeit in mehreren Kilometern Höhe vollständig, was Druckwelle ohne Krater erzeugt. Mikroskopische Silikat- und Magnetitkügelchen im Torf der Region stützen sie, und das Ereignis von Tscheljabinsk 2013 verlief nach demselben Muster, nur kleiner.",
    "dagegen": "Größere Bruchstücke wurden nie gefunden, was bei einem Steinkörper erwartbar wäre; die Suche war allerdings durch Sumpf und Abgeschiedenheit erschwert."
   },
   {
    "these": "Ein Kometenkern aus Eis und Staub",
    "dafuer": "Erklärt das Fehlen von Bruchstücken zwanglos und passt zu den hellen Nachthimmeln, die auf Staub in großer Höhe hindeuten. Lange die Standarderklärung.",
    "dagegen": "Die Bahnrekonstruktionen aus Zeugenberichten passen besser zu einem Asteroiden aus dem Asteroidengürtel als zu einem Kometen."
   },
   {
    "these": "Ein streifender Durchgang ohne Aufprall",
    "dafuer": "Eine Arbeit von 2020 rechnet vor, dass ein Eisenkörper die Atmosphäre streifen und wieder verlassen könnte, was das völlige Fehlen von Material erklären würde.",
    "dagegen": "Die Deutung ist eine Minderheitsposition und erklärt die Verteilung des umgeworfenen Waldes weniger gut als eine Explosion in der Höhe."
   }
  ],
  "forschungsstand": "Der Sachstand hat sich durch Tscheljabinsk 2013 deutlich verbessert: Dort wurde ein vergleichbarer, kleinerer Vorgang erstmals mit modernen Instrumenten und hunderten Videoaufnahmen erfasst und bestätigte die Modelle des Luftzerfalls. Tunguska gilt seither überwiegend als großer Fall derselben Klasse. Das Ereignis ist der Anlass, dass Raumfahrtbehörden erdnahe Objekte systematisch suchen; der 30. Juni ist seit 2016 der internationale Asteroidentag.",
  "abgrenzung": "Für ein Raumschiff, ein Antimaterieteilchen, ein Schwarzes Loch oder ein Experiment Nikola Teslas gibt es keinerlei Befund; alle diese Vorschläge stammen aus populären Veröffentlichungen und nicht aus der Fachliteratur. Das Rätsel besteht in der genauen Art des Körpers, nicht in der Frage, ob es ein natürliches Ereignis war.",
  "quellen": [
   "Encyclopaedia Britannica: Tunguska event",
   "NASA: Planetary Defense, Tunguska und Chelyabinsk im Vergleich",
   "Icarus (2013): The Chelyabinsk airburst",
   "Monthly Notices of the Royal Astronomical Society (2020): Tunguska as a grazing encounter (Minderheitsposition)"
  ]
 },
 {
  "id": "linear-a",
  "titel": "Linear A — die ungelesene Schrift Kretas",
  "zeitraum": "ca. 1800–1450 v. Chr.",
  "region": "Kreta und Ägäis",
  "kategorie": "Schrift & Sprache",
  "status": "ungeklaert",
  "gesichert": "Auf Kreta sind rund 1.400 Texte in einer Silbenschrift erhalten, überwiegend kurze Verwaltungsnotizen auf Tontafeln, dazu Inschriften auf Gefäßen und Kultgegenständen. Die Schrift ist eng verwandt mit Linear B, das 1952 von Michael Ventris als frühes Griechisch entschlüsselt wurde und rund 80 Prozent der Zeichen mit Linear A teilt. Man kann Linear A deshalb laut vorlesen — die Lautwerte sind mit einiger Sicherheit bekannt. Nur versteht niemand, was dabei gesagt wird.",
  "raetsel": "Die Sprache hinter der Schrift ist unbekannt und mit keiner bekannten Sprachfamilie sicher verwandt. Die Zahlen und Warenzeichen sind lesbar, sodass sich Bilanzen und Mengen verstehen lassen, die Wörter aber nicht.",
  "erklaerungen": [
   {
    "these": "Eine eigene, sonst nicht bezeugte Sprache (Minoisch)",
    "dafuer": "Die Mehrheitsposition. Die Wortformen passen zu keiner bekannten Familie; es gab in der Ägäis vor der griechischen Einwanderung mehrere Sprachen, von denen keine überliefert ist.",
    "dagegen": "Als Erklärung ist es zugleich ein Eingeständnis: Ohne Verwandte und ohne zweisprachigen Text ist eine Entzifferung kaum möglich."
   },
   {
    "these": "Eine semitische Sprache",
    "dafuer": "Einzelne Autoren haben Wortgleichungen mit phönizischen oder ugaritischen Begriffen vorgeschlagen, gestützt auf die engen Handelsbeziehungen Kretas mit der Levante.",
    "dagegen": "Die vorgeschlagenen Gleichungen betreffen wenige Wörter, meist Handelswaren, und lassen sich als Lehnwörter erklären. Die Grammatik passt nicht."
   },
   {
    "these": "Eine anatolische oder indoeuropäische Sprache",
    "dafuer": "Kreta lag im Einflussbereich Anatoliens; einige Endungen wurden mit luwischen Formen verglichen.",
    "dagegen": "Die Vergleiche sind statistisch nicht belastbar; bei einem Textkorpus dieser Größe lassen sich zu vielen Sprachen zufällige Ähnlichkeiten finden."
   }
  ],
  "forschungsstand": "Das Hauptproblem ist die Menge: Alle bekannten Linear-A-Texte zusammen enthalten schätzungsweise rund 7.000 Zeichen — für Linear B standen zehnmal mehr zur Verfügung, und Ventris hatte zusätzlich die begründete Vermutung, dass Griechisch dahintersteht. Maschinelle Verfahren wurden mehrfach angewandt und liefern Häufigkeitsverteilungen, aber keine Bedeutung. Ohne einen zweisprachigen Fund — ein Stein von Rosette der Ägäis — gilt eine Entzifferung als unwahrscheinlich.",
  "abgrenzung": "Linear A ist nicht geheimnisvoll, sondern schlicht zu wenig. Es ist auch nicht die Schrift des Diskos von Phaistos, der eine weitere, noch kürzere und vermutlich unlösbare Inschrift trägt. Und die regelmäßig gemeldeten Entzifferungen — meist von Einzelpersonen — haben bislang keiner Prüfung standgehalten.",
  "quellen": [
   "Encyclopaedia Britannica: Linear A; Linear B",
   "John Chadwick: The Decipherment of Linear B",
   "Ester Salgarella: Aegean Linear Script(s) – Rethinking the Relationship between Linear A and Linear B, 2020",
   "SigLA: The Signs of Linear A – Datenbank der Universität Cambridge"
  ]
 },
 {
  "id": "dancing-plague",
  "titel": "Die Tanzwut von Straßburg",
  "zeitraum": "Juli bis September 1518",
  "region": "Elsass",
  "kategorie": "Frühgeschichte",
  "status": "ungeklaert",
  "gesichert": "Im Juli 1518 begann in Straßburg eine Frau, auf der Straße zu tanzen, und tanzte tagelang. Innerhalb von Wochen taten es ihr nach Ratsprotokollen, Chroniken und ärztlichen Berichten dutzende bis mehrere hundert Menschen nach, ohne aufzuhören, bis zur Erschöpfung. Der Rat reagierte nicht mit Strafen, sondern räumte Zunfthäuser als Tanzsäle und stellte Musiker bereit, weil die Ärzte — nach der Säftelehre — Tanzen als Heilung durch Austanzen empfahlen. Später wurden die Betroffenen zu einer Kapelle des heiligen Vitus gebracht. Bis September klang das Geschehen ab. Vergleichbare Episoden sind aus Aachen 1374 und mehreren Orten am Rhein überliefert.",
  "raetsel": "Die Ursache ist unbekannt. Zeitgenössische Quellen berichten von Todesfällen durch Erschöpfung; wie viele, ist nicht gesichert.",
  "erklaerungen": [
   {
    "these": "Eine Massenerkrankung psychischer Art unter extremer Not",
    "dafuer": "Die heute verbreitetste Erklärung, ausführlich von John Waller vertreten: Das Jahr 1518 folgte auf Missernten, Teuerung, Syphilisausbrüche und Pest im Elsass. Verzweiflung, der verbreitete Glaube an einen Tanzfluch des heiligen Vitus und die öffentliche Bühne, die der Rat mit den Tanzsälen schuf, erklären sowohl Beginn als auch Ausbreitung und Ende.",
    "dagegen": "Die Erklärung ist nicht falsifizierbar und beruht auf Analogien zu modernen Fällen kollektiver Symptombildung, deren Vergleichbarkeit mit dem 16. Jahrhundert diskutiert wird."
   },
   {
    "these": "Vergiftung durch Mutterkorn im Roggen",
    "dafuer": "Der Pilz Claviceps purpurea enthält Alkaloide mit LSD-ähnlicher Wirkung und war in feuchten Jahren häufig; Mutterkornvergiftung ist als Antoniusfeuer gut belegt.",
    "dagegen": "Mutterkorn verursacht Krämpfe, Durchblutungsstörungen und Halluzinationen, aber keine koordinierte, tagelange Bewegung. Und es hätte ganze Haushalte betroffen, nicht überwiegend Erwachsene im öffentlichen Raum."
   },
   {
    "these": "Ein religiöses Ritual, das entgleiste",
    "dafuer": "Der Vitus-Kult war im Elsass verbreitet, und Tanz gehörte zu Bußpraktiken; die Wallfahrt zur Vitus-Kapelle war Teil der amtlichen Reaktion.",
    "dagegen": "Die Quellen beschreiben unfreiwilliges, quälendes Tanzen und ratlose Behörden, nicht ein geordnetes Ritual."
   }
  ],
  "forschungsstand": "Die Straßburger Ratsprotokolle und die Chronik des Stadtschreibers sind erhalten und gut untersucht; damit ist der Fall besser dokumentiert als jede andere Episode dieser Art. Die Forschung ordnet ihn heute überwiegend in die Reihe kollektiver Erkrankungen ohne organische Ursache ein, wie sie auch im 20. Jahrhundert dokumentiert sind — etwa die Lachepidemie in Tanganjika 1962. Eine gesicherte Erklärung gibt es nicht.",
  "abgrenzung": "Die Zahl der Toten wird in populären Darstellungen oft mit fünfzehn pro Tag angegeben; diese Angabe stammt aus einer einzigen späteren Quelle und ist nicht bestätigt. Und das Ereignis ist kein Beleg für Hexerei, Besessenheit oder Massensuggestion durch einzelne Anstifter — es ist ein Fall, in dem eine Gesellschaft unter großem Druck ein Verhalten hervorbrachte, das sie mit ihren Mitteln zu behandeln versuchte.",
  "quellen": [
   "Encyclopaedia Britannica: dancing mania",
   "John Waller: A Time to Dance, a Time to Die – The Extraordinary Story of the Dancing Plague of 1518",
   "Archives municipales de Strasbourg: Ratsprotokolle 1518",
   "The Lancet (2009): In a spin – the mysterious dancing epidemic of 1518"
  ]
 },
 {
  "id": "roanoke",
  "titel": "Die verlorene Kolonie von Roanoke",
  "zeitraum": "1587–1590",
  "region": "Nordamerika, heutiges North Carolina",
  "kategorie": "Verschollen",
  "status": "teilweise",
  "gesichert": "1587 setzte eine englische Expedition rund 115 Siedler auf der Insel Roanoke ab, darunter Frauen und Kinder; Virginia Dare war das erste englische Kind, das in Amerika geboren wurde. Der Statthalter John White segelte nach England, um Vorräte zu holen, und wurde durch den Krieg mit der spanischen Armada drei Jahre aufgehalten. Als er 1590 zurückkehrte, war die Siedlung verlassen, aufgeräumt und ohne Zeichen von Kampf. In einen Pfosten war das Wort CROATOAN geschnitzt, in einen Baum die Buchstaben CRO. Ein vereinbartes Notzeichen — ein Kreuz — fehlte. Ein Sturm zwang White zur Rückkehr, ohne dass er Croatoan aufsuchen konnte.",
  "raetsel": "Was aus den Siedlern wurde, ist nicht abschließend geklärt.",
  "erklaerungen": [
   {
    "these": "Umzug zu den Croatan auf Hatteras Island und Aufnahme in deren Gemeinschaft",
    "dafuer": "Die wahrscheinlichste Deutung und die, die die Siedler selbst hinterlassen haben: Croatoan war der Name der Insel und des dort lebenden Volkes, mit dem die Engländer gute Beziehungen hatten. Ausgrabungen auf Hatteras Island erbrachten englische Gegenstände des späten 16. Jahrhunderts in indigenen Siedlungsschichten. Spätere Berichte erwähnen Menschen mit hellen Haaren und europäischer Bauweise in der Region.",
    "dagegen": "Die Funde könnten auch aus Handel oder von Schiffbrüchen stammen; ein direkter Nachweis fehlt."
   },
   {
    "these": "Aufteilung und Aufnahme in mehrere Gruppen im Binnenland",
    "dafuer": "Grabungen an der Site X am Albemarle Sound erbrachten ebenfalls englische Keramik dieser Zeit. Eine Gruppe von 115 Menschen konnte kaum bei einem Dorf unterkommen; eine Aufteilung wäre naheliegend. Auf einer Karte Whites wurde 2012 unter einem aufgeklebten Flicken ein eingezeichnetes Fort im Binnenland entdeckt.",
    "dagegen": "Auch hier lassen sich die Funde durch Handelskontakte erklären; welche Gruppe wohin ging, ist unbekannt."
   },
   {
    "these": "Getötet oder verhungert",
    "dafuer": "Die Jahre 1587 bis 1589 waren nach Jahresringuntersuchungen die trockensten der Region seit Jahrhunderten; die Kolonie war schlecht ausgerüstet und in Konflikte verwickelt. Spätere englische Berichte aus Jamestown behaupteten, Powhatan habe Überlebende töten lassen.",
    "dagegen": "Es fanden sich keine Gräber, keine Kampfspuren und keine zurückgelassenen Wertsachen; die Siedlung war geordnet geräumt. Die Jamestown-Berichte sind Hörensagen und politisch interessiert."
   }
  ],
  "forschungsstand": "Zwei Grabungsprojekte arbeiten weiter: das Croatoan Archaeological Society auf Hatteras Island und die First Colony Foundation an der Site X. Beide finden englisches Material in indigenen Zusammenhängen, ohne dass eine Zuordnung zu den Siedlern von 1587 gesichert wäre. DNA-Studien an Nachkommen regionaler Gemeinschaften haben bislang kein belastbares Ergebnis erbracht.",
  "abgrenzung": "Roanoke ist kein Rätsel des Verschwindens, sondern eines der Zuordnung: Die Siedler hinterließen einen Hinweis, wohin sie gingen, und niemand fuhr hin. Die Erzählung von einer unerklärlich verschwundenen Kolonie entstand im 19. Jahrhundert, als Virginia Dare zur literarischen Figur wurde. Für Entführung, ein Massaker ohne Spuren oder übernatürliche Ursachen gibt es keinen Befund.",
  "quellen": [
   "Encyclopaedia Britannica: Roanoke Island; Lost Colony",
   "National Park Service: Fort Raleigh National Historic Site, Forschungsübersicht",
   "First Colony Foundation: Site X excavation reports",
   "British Museum: John White, Virginea Pars map, mit dem 2012 entdeckten Flicken"
  ]
 }
];

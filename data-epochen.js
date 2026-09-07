/* =========================================================
   HISTORIA — DATEN: Epochen

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const EPOCHS = [
 {
  "id": "steinzeit",
  "name": "Steinzeit",
  "span": "ca. 2,6 Mio. – 2200 v. Chr.",
  "startYear": -2600000,
  "endYear": -2200,
  "color": "#8c6a2e",
  "accent": "#d9b56a",
  "lead": "Der lange Anfang: Werkzeuge, Feuer, Sesshaftwerdung.",
  "description": "Die Steinzeit umfasst den bei weitem längsten Abschnitt der Menschheitsgeschichte. Sie beginnt mit den ersten Steinwerkzeugen früher Hominiden und endet mit der Erfindung der Metallverarbeitung. Entscheidend war die 'Neolithische Revolution': der Übergang vom Jäger-und-Sammler-Dasein zu Ackerbau und Viehzucht, der feste Siedlungen, Vorratshaltung und erste soziale Hierarchien ermöglichte.",
  "literatur": [
   "Hermann Parzinger: Die Kinder des Prometheus. Eine Geschichte der Menschheit vor der Erfindung der Schrift",
   "Encyclopaedia Britannica: Stone Age; Neolithic; Human evolution",
   "Laufende Berichte zur Paläogenetik in Nature und Science (u. a. MPI für evolutionäre Anthropologie)"
  ],
  "events": [
   {
    "year": -3400000,
    "title": "Älteste bekannte Steinwerkzeuge",
    "text": "Funde bei Lomekwi (Kenia) gelten als älteste bekannte Werkzeuge – älter als die Gattung Homo selbst."
   },
   {
    "year": -2600000,
    "title": "Beginn der Oldowan-Kultur",
    "text": "Homo habilis stellt in Ostafrika systematisch einfache Geröllgeräte zum Schneiden und Zerkleinern her."
   },
   {
    "year": -1800000,
    "title": "Homo erectus verlässt Afrika",
    "text": "Erste Ausbreitung eines Frühmenschen über Afrika hinaus nach Asien und später Europa."
   },
   {
    "year": -1000000,
    "title": "Kontrolle des Feuers",
    "text": "Frühmenschen beginnen, Feuer gezielt zu nutzen und zu erhalten – ein Wendepunkt für Ernährung, Schutz und Sozialleben."
   },
   {
    "year": -400000,
    "title": "Speerbau in Schöningen",
    "text": "In Niedersachsen gefundene Holzspeere belegen ausgefeilte Jagdtechnik früher Menschenformen."
   },
   {
    "year": -300000,
    "title": "Homo sapiens entsteht",
    "text": "Der anatomisch moderne Mensch entwickelt sich in Afrika; Funde in Jebel Irhoud (Marokko) stützen diese Datierung."
   },
   {
    "year": -200000,
    "title": "Erste Bekleidung aus Fellen",
    "text": "Genetische Studien zur Kleiderlaus deuten darauf, dass Menschen um diese Zeit begannen, Kleidung zu tragen."
   },
   {
    "year": -100000,
    "title": "Neandertaler und Homo sapiens koexistieren",
    "text": "Beide Menschenformen leben zeitweise nebeneinander in Eurasien und vermischen sich genetisch nachweisbar."
   },
   {
    "year": -70000,
    "title": "Auszug aus Afrika",
    "text": "Homo sapiens breitet sich in mehreren Wellen über Arabien nach Asien, Europa und später Australien aus."
   },
   {
    "year": -50000,
    "title": "Besiedlung Australiens",
    "text": "Menschen erreichen über Wasserwege den australischen Kontinent – früheste bekannte Seefahrt der Menschheit."
   },
   {
    "year": -45000,
    "title": "Höhlenmalereien auf Sulawesi",
    "text": "Auf der indonesischen Insel finden sich Jagddarstellungen, die zu den ältesten bekannten Bildern der Menschheit zählen – älter als die europäischen Höhlenkunstwerke."
   },
   {
    "year": -40000,
    "title": "Höhlenmalerei und Kunst",
    "text": "In Höhlen wie Chauvet und später Lascaux entstehen kunstvolle Tiermalereien – früher Beleg symbolischen Denkens."
   },
   {
    "year": -40000,
    "title": "Älteste Musikinstrumente",
    "text": "Flöten aus Vogelknochen und Mammutelfenbein von der Schwäbischen Alb belegen, dass Musik so alt ist wie die Kunst."
   },
   {
    "year": -35000,
    "title": "Venus vom Hohle Fels",
    "text": "Eine der ältesten bekannten figürlichen Kunstwerke der Menschheit entsteht in der Schwäbischen Alb."
   },
   {
    "year": -30000,
    "title": "Aussterben der Neandertaler",
    "text": "Die letzten Neandertaler-Populationen in Europa verschwinden – Ursachen (Klima, Konkurrenz) werden weiter erforscht."
   },
   {
    "year": -20000,
    "title": "Höhepunkt der letzten Eiszeit",
    "text": "Riesige Eisschilde bedecken Nordeuropa und Nordamerika; der Meeresspiegel liegt rund 120 Meter tiefer als heute."
   },
   {
    "year": -15000,
    "title": "Domestizierung des Hundes",
    "text": "Aus dem Wolf wird der erste Begleiter des Menschen – Tausende Jahre vor jedem Nutztier."
   },
   {
    "year": -14000,
    "title": "Besiedlung Amerikas",
    "text": "Über die Beringlandbrücke gelangen Menschen von Asien nach Amerika und breiten sich rasch über den Kontinent aus."
   },
   {
    "year": -12000,
    "title": "Ende der letzten Eiszeit",
    "text": "Das Klima erwärmt sich, Gletscher ziehen sich zurück, neue Lebensräume entstehen – Grundlage für die folgende Sesshaftwerdung."
   },
   {
    "year": -10000,
    "title": "Neolithische Revolution beginnt",
    "text": "Im 'Fruchtbaren Halbmond' (Nahost) beginnen Menschen erstmals gezielt Pflanzen anzubauen und Tiere zu domestizieren."
   },
   {
    "year": -9600,
    "title": "Errichtung von Göbekli Tepe",
    "text": "In Anatolien bauen Jäger und Sammler monumentale Steinkreise mit bis zu fünf Meter hohen T-Pfeilern. Der Befund kehrt eine alte Annahme um: Nicht der Ackerbau ermöglichte Monumentalbauten – möglicherweise war es umgekehrt."
   },
   {
    "year": -8000,
    "title": "Domestikation von Schaf und Ziege",
    "text": "Im Nahen Osten werden erstmals Nutztiere planmäßig gehalten und gezüchtet."
   },
   {
    "year": -7000,
    "title": "Erste Städte: Çatalhöyük",
    "text": "Eine der frühesten großen Siedlungen entsteht in Anatolien mit dicht gedrängten Lehmhäusern ohne Straßen."
   },
   {
    "year": -6500,
    "title": "Verbreitung der Töpferei im Nahen Osten",
    "text": "Keramikgefäße verbreiten sich in der Region und revolutionieren Vorratshaltung und Kochen; deutlich ältere Töpferfunde in Ostasien (u.a. China, Japan) zeigen, dass diese Technik andernorts bereits Jahrtausende früher entstand."
   },
   {
    "year": -6500,
    "title": "Milchverträglichkeit entsteht",
    "text": "Die Fähigkeit, als Erwachsener Milchzucker zu verdauen, breitet sich aus – eine der schnellsten bekannten Anpassungen des Menschen an eine selbstgeschaffene Lebensweise."
   },
   {
    "year": -5000,
    "title": "Kupferverarbeitung beginnt",
    "text": "Erste Kupferwerkzeuge markieren den fließenden Übergang zur Kupfer- bzw. Bronzezeit."
   },
   {
    "year": -3900,
    "title": "Ausbruch der Kupferzeit in Europa",
    "text": "In Südosteuropa wird Kupfer verhüttet; die Gräber von Warna enthalten mehr Gold als alle anderen Fundstellen dieser Zeit zusammen."
   },
   {
    "year": -3500,
    "title": "Erfindung des Rades",
    "text": "In Mesopotamien entstehen die ersten Räder – zunächst für Töpferscheiben, bald darauf für Transportwagen."
   },
   {
    "year": -2200,
    "title": "Domestikation des modernen Hauspferdes",
    "text": "Genetische Studien (2021) verorten den Ursprung der modernen Hauspferde-Linie in der Wolga-Don-Steppe; die ältere Annahme einer Domestikation bei der Botai-Kultur (ca. 3500 v. Chr.) betraf laut neueren Erkenntnissen einen anderen, nicht direkt verwandten Wildpferd-Zweig."
   }
  ],
  "figures": [
   {
    "name": "Lucy (Australopithecus afarensis)",
    "years": "vor ca. 3,2 Mio. Jahren",
    "text": "Berühmtes Fossil eines Vormenschen aus Äthiopien, zeigt frühen aufrechten Gang – Meilenstein der Paläoanthropologie."
   },
   {
    "name": "Ötzi (der Mann aus dem Eis)",
    "years": "ca. 3300 v. Chr.",
    "text": "Gut erhaltene Gletschermumie aus den Ötztaler Alpen, liefert einzigartige Einblicke in Ausrüstung, Ernährung und Gesundheit der Kupfersteinzeit."
   },
   {
    "name": "Der Neandertaler von La Chapelle",
    "years": "vor ca. 60.000 Jahren",
    "text": "Eines der ersten vollständig geborgenen Neandertaler-Skelette, prägte lange (teils falsche) Vorstellungen vom 'Höhlenmenschen'."
   },
   {
    "name": "Das Kind von Taung",
    "years": "entdeckt 1924",
    "text": "Der Schädel eines Australopithecus-Kindes aus Südafrika. Raymond Darts Deutung, der Mensch stamme aus Afrika, wurde zwei Jahrzehnte lang abgelehnt."
   },
   {
    "name": "Turkana Boy",
    "years": "ca. 1,6 Mio. Jahre",
    "text": "Das vollständigste Skelett eines Homo erectus. Der schmale Brustkorb und die langen Beine zeigen einen Körperbau, der auf Ausdauerlauf angelegt war."
   },
   {
    "name": "Der Löwenmensch vom Hohlenstein-Stadel",
    "years": "ca. 40.000 Jahre",
    "text": "Eine Elfenbeinfigur mit Menschenkörper und Löwenkopf – die älteste bekannte Darstellung eines Wesens, das es nicht gibt. Der früheste Beleg für Vorstellungskraft."
   },
   {
    "name": "Die Frau von Denisova",
    "years": "ca. 90.000 Jahre",
    "text": "Ein Knochensplitter aus einer sibirischen Höhle erwies sich als Kind einer Neandertalerin und eines Denisova-Mannes – der erste bekannte Mensch mit Eltern zweier Menschenformen."
   },
   {
    "name": "Cheddar Man",
    "years": "ca. 10.000 Jahre",
    "text": "Das älteste vollständige Skelett Großbritanniens. Die Genanalyse ergab dunkle Haut und helle Augen – ein Befund, der verbreitete Annahmen zur Einwanderungsgeschichte Europas korrigierte."
   }
  ],
  "nations": [
   {
    "name": "Fruchtbarer Halbmond",
    "text": "Region zwischen Nil, Euphrat und Tigris, in der Ackerbau, Viehzucht und die ersten Städte entstanden."
   },
   {
    "name": "Jericho",
    "text": "Eine der ältesten durchgehend besiedelten Siedlungen der Welt, bereits vor rund 10.000 Jahren ummauert."
   },
   {
    "name": "Cucuteni-Trypillia-Kultur",
    "text": "Große neolithische Siedlungsgemeinschaft in Osteuropa mit teils mehreren tausend Einwohnern pro Ort."
   },
   {
    "name": "Göbekli Tepe",
    "text": "Monumentale Steinkreise in Anatolien, errichtet von Jägern und Sammlern rund 6000 Jahre vor Stonehenge – vor dem Ackerbau, nicht danach."
   },
   {
    "name": "Çatalhöyük",
    "text": "Eine der ältesten Großsiedlungen, betreten über die Dächer, ohne Straßen und ohne erkennbare Paläste oder Tempel."
   },
   {
    "name": "Die Trichterbecherkultur",
    "text": "Erbauer der Megalithgräber Nordeuropas – Grabanlagen aus Steinen von vielen Tonnen Gewicht, bewegt ohne Metall und ohne Rad."
   },
   {
    "name": "Doggerland",
    "text": "Ein bewohntes Land zwischen England und dem Festland, das mit dem Anstieg des Meeresspiegels versank. Fischer bergen dort bis heute Werkzeuge vom Meeresgrund."
   }
  ]
 },
 {
  "id": "fruehe-hochkulturen",
  "name": "Frühe Hochkulturen & Bronzezeit",
  "span": "ca. 3300 – 800 v. Chr.",
  "startYear": -3300,
  "endYear": -800,
  "color": "#b8860b",
  "accent": "#f0c869",
  "lead": "Schrift, Staat und Stadt: die ersten Hochkulturen entstehen.",
  "description": "An großen Flüssen – Nil, Euphrat/Tigris, Indus und Gelber Fluss – entwickeln sich die ersten Hochkulturen mit Bewässerungswirtschaft, Arbeitsteilung, Schrift und zentralisierter Herrschaft. Bronze als Werkstoff ermöglicht bessere Werkzeuge und Waffen und treibt Handel über weite Strecken an.",
  "literatur": [
   "Marc Van De Mieroop: A History of the Ancient Near East",
   "Eric H. Cline: 1177 v. Chr. Der erste Untergang der Zivilisation",
   "Cambridge Ancient History, Bände 1 und 2",
   "Encyclopaedia Britannica: Mesopotamia; Ancient Egypt; Bronze Age"
  ],
  "events": [
   {
    "year": -3300,
    "title": "Beginn der Bronzezeit",
    "text": "Die Legierung von Kupfer und Zinn zu Bronze verbreitet sich im Nahen Osten und verändert Waffen- und Werkzeugbau."
   },
   {
    "year": -3200,
    "title": "Erfindung der Schrift",
    "text": "In Mesopotamien entsteht die Keilschrift, in Ägypten die Hieroglyphenschrift – Grundlage für Verwaltung, Recht und Überlieferung."
   },
   {
    "year": -3200,
    "title": "Erfindung der Keilschrift",
    "text": "In Uruk entsteht Schrift – zunächst nicht für Dichtung oder Recht, sondern für Buchhaltung über Getreide und Vieh."
   },
   {
    "year": -3100,
    "title": "Reichseinigung Ägyptens",
    "text": "Menes (Narmer) vereinigt Ober- und Unterägypten und begründet die Pharaonenherrschaft."
   },
   {
    "year": -3000,
    "title": "Bau von Stonehenge beginnt",
    "text": "In England entsteht über Jahrhunderte die berühmte Steinkreis-Anlage – Zweck bis heute nicht abschließend geklärt."
   },
   {
    "year": -2900,
    "title": "Frühdynastische Zeit Sumers",
    "text": "Stadtstaaten wie Uruk, Ur und Lagasch konkurrieren um Vormacht im südlichen Mesopotamien."
   },
   {
    "year": -2600,
    "title": "Königsgräber von Ur",
    "text": "Die Bestattungen enthalten Gefolgschaftsopfer: Dutzende Menschen wurden mit dem Herrscher beigesetzt. Ob sie freiwillig gingen, betäubt oder getötet wurden, ist bis heute offen.",
    "quelle": "Britisches Museum und Penn Museum, Grabungsbefunde Woolley; neuere CT-Untersuchungen der Schädel"
   },
   {
    "year": -2560,
    "title": "Bau der Cheops-Pyramide",
    "text": "Die größte Pyramide von Gizeh entsteht als Grabmal – Symbol pharaonischer Macht und organisatorischer Leistungsfähigkeit."
   },
   {
    "year": -2500,
    "title": "Bau der Großen Sphinx von Gizeh",
    "text": "Das monumentale Löwen-Mensch-Bauwerk entsteht vermutlich unter Pharao Chephren als Wächterfigur der Pyramiden-Nekropole."
   },
   {
    "year": -2334,
    "title": "Sargon von Akkad gründet ein Weltreich",
    "text": "Sargon eint erstmals Mesopotamien zu einem der ersten bekannten Großreiche der Geschichte."
   },
   {
    "year": -2200,
    "title": "Dürreperiode und Reichszusammenbrüche",
    "text": "Eine mehrhundertjährige Trockenphase fällt mit dem Ende des Akkad-Reiches und des ägyptischen Alten Reiches zusammen."
   },
   {
    "year": -2100,
    "title": "Codex Ur-Nammu",
    "text": "Die vermutlich älteste erhaltene Gesetzessammlung der Welt entsteht im sumerischen Ur."
   },
   {
    "year": -1900,
    "title": "Blütezeit der Indus-Kultur",
    "text": "Städte wie Mohenjo-Daro und Harappa erreichen bemerkenswerte Stadtplanung mit Kanalisation und einheitlichen Maßen."
   },
   {
    "year": -1792,
    "title": "Codex Hammurapi",
    "text": "König Hammurapi von Babylon lässt eine der ältesten überlieferten Rechtssammlungen in Stein meißeln."
   },
   {
    "year": -1754,
    "title": "Kodex Hammurapi",
    "text": "Auf einer Stele werden knapp 300 Rechtssätze veröffentlicht – nicht das erste Gesetzeswerk, aber das bekannteste und vollständigste."
   },
   {
    "year": -1700,
    "title": "Minoische Kultur auf Kreta blüht",
    "text": "Die minoische Palastkultur entwickelt Schrift (Linear A), Fresken und weitreichenden Seehandel."
   },
   {
    "year": -1650,
    "title": "Herrschaft der Hyksos in Ägypten",
    "text": "Fremde Herrscher aus der Levante übernehmen zeitweise Unterägypten – bringen aber auch neue Technik wie den Streitwagen mit."
   },
   {
    "year": -1600,
    "title": "Beginn der Shang-Dynastie",
    "text": "In China entsteht mit der Shang-Dynastie eine frühe zentralisierte Herrschaft mit Bronzegusskunst und Orakelknochenschrift."
   },
   {
    "year": -1600,
    "title": "Hethiterreich in Anatolien",
    "text": "Die Hethiter entwickeln als eines der ersten Völker die Eisenverarbeitung und werden zur Großmacht Kleinasiens."
   },
   {
    "year": -1600,
    "title": "Ausbruch von Thera",
    "text": "Die Explosion der Insel Santorin verwüstet die Ägäis. Der Zusammenhang mit dem Niedergang der minoischen Kultur wird bis heute diskutiert."
   },
   {
    "year": -1550,
    "title": "Neues Reich Ägyptens beginnt",
    "text": "Ägypten erlebt seine machtpolitische und kulturelle Blütezeit mit Expansion nach Nubien und in die Levante."
   },
   {
    "year": -1500,
    "title": "Vedische Kultur in Indien",
    "text": "Einwandernde indoarische Gruppen prägen mit den Veden die religiöse und soziale Grundlage Indiens."
   },
   {
    "year": -1400,
    "title": "Bau des Karnak-Tempels",
    "text": "Über Jahrhunderte erweiterter größter religiöser Tempelkomplex der Antike entsteht bei Theben zu Ehren des Gottes Amun."
   },
   {
    "year": -1350,
    "title": "Echnatons Reform",
    "text": "Pharao Echnaton führt kurzzeitig den Monotheismus (Aton-Kult) in Ägypten ein – ein religiöser Sonderweg der Antike."
   },
   {
    "year": -1274,
    "title": "Schlacht bei Kadesch",
    "text": "Ägypter unter Ramses II. und Hethiter liefern sich eine der größten Streitwagenschlachten der Geschichte; es folgt der älteste erhaltene Friedensvertrag."
   },
   {
    "year": -1274,
    "title": "Schlacht von Kadesch",
    "text": "Ägypter und Hethiter kämpfen unentschieden; sechzehn Jahre später schließen sie den ältesten erhaltenen Friedensvertrag der Geschichte."
   },
   {
    "year": -1200,
    "title": "Bronzezeitlicher Kollaps",
    "text": "Mehrere Hochkulturen im östlichen Mittelmeerraum (Hethiter, Mykene) brechen binnen weniger Jahrzehnte zusammen – Ursachen bis heute diskutiert."
   },
   {
    "year": -1200,
    "title": "Der spätbronzezeitliche Kollaps",
    "text": "Binnen weniger Jahrzehnte gehen Hethiterreich, mykenische Paläste und viele Handelsstädte unter. Seevölker, Dürre, Erdbeben und Systemabhängigkeiten werden als Ursachen diskutiert."
   },
   {
    "year": -1100,
    "title": "Ausbreitung des phönizischen Alphabets",
    "text": "Die Phönizier verbreiten über den Seehandel ein Konsonantenalphabet, das Grundlage vieler späterer Schriften wird."
   },
   {
    "year": -1046,
    "title": "Zhou-Dynastie in China",
    "text": "Die Zhou lösen die Shang ab und prägen das Konzept des 'Mandats des Himmels' als Herrschaftslegitimation."
   },
   {
    "year": -1046,
    "title": "Zhou stürzen die Shang",
    "text": "Mit dem Dynastiewechsel wird das Himmelsmandat begründet: Herrschaft ist an sittliche Bewährung gebunden und kann entzogen werden."
   },
   {
    "year": -1000,
    "title": "Königreich Israel und Juda",
    "text": "Nach biblischer Überlieferung entsteht unter David und Salomo ein vereintes israelitisches Königreich."
   },
   {
    "year": -900,
    "title": "Aufstieg des Neuassyrischen Reiches",
    "text": "Assyrien baut durch effiziente Militärorganisation und Verwaltung ein Großreich im Nahen Osten auf."
   },
   {
    "year": -814,
    "title": "Gründung Karthagos",
    "text": "Phönizische Siedler gründen Karthago in Nordafrika, das später zur Großmacht im westlichen Mittelmeer wird."
   },
   {
    "year": -800,
    "title": "Ausbreitung des Alphabets",
    "text": "Die Griechen übernehmen die phönizische Zeichenschrift und fügen Vokale hinzu – die erste Schrift, die jeder Sprachlaut abbildet."
   }
  ],
  "figures": [
   {
    "name": "Sargon von Akkad",
    "years": "ca. 2334–2279 v. Chr.",
    "text": "Begründer eines der ersten bekannten Großreiche der Geschichte, gilt als Archetyp des 'Weltherrschers'."
   },
   {
    "name": "Hammurapi",
    "years": "reg. ca. 1792–1750 v. Chr.",
    "text": "Babylonischer König, bekannt für seinen Gesetzeskodex nach dem Prinzip 'Auge um Auge'."
   },
   {
    "name": "Hatschepsut",
    "years": "ca. 1507–1458 v. Chr.",
    "text": "Eine der wenigen weiblichen Pharaonen Ägyptens, initiierte umfangreiche Handelsexpeditionen und Bauprojekte."
   },
   {
    "name": "Echnaton",
    "years": "ca. 1351–1334 v. Chr.",
    "text": "Ägyptischer Pharao, versuchte eine monotheistische Reform durchzusetzen; nach seinem Tod rückgängig gemacht."
   },
   {
    "name": "Nofretete",
    "years": "ca. 1370–1330 v. Chr.",
    "text": "Große königliche Gemahlin Echnatons, berühmt durch ihre ikonische Büste – Symbol altägyptischer Schönheitsideale."
   },
   {
    "name": "Ramses II.",
    "years": "ca. 1303–1213 v. Chr.",
    "text": "Einer der mächtigsten Pharaonen, bekannt für Bauprojekte (Abu Simbel) und den Frieden von Kadesch mit den Hethitern."
   },
   {
    "name": "Tutanchamun",
    "years": "ca. 1341–1323 v. Chr.",
    "text": "Jung verstorbener Pharao, weltberühmt durch die 1922 nahezu unversehrt entdeckte Grabkammer."
   },
   {
    "name": "Enheduanna",
    "years": "ca. 2285–2250 v. Chr.",
    "text": "Hohepriesterin in Ur und Tochter Sargons – die erste namentlich bekannte Autorin der Weltliteratur, deren Hymnen überliefert sind."
   },
   {
    "name": "Gilgamesch",
    "years": "ca. 2700 v. Chr. (Legende)",
    "text": "Vermutlich ein historischer König von Uruk, um den sich das älteste erhaltene Großepos der Menschheit rankt."
   },
   {
    "name": "Cheops",
    "years": "reg. ca. 2620–2580 v. Chr.",
    "text": "Bauherr der Großen Pyramide von Gizeh. Die Arbeiter waren, anders als lange angenommen, keine Sklaven, sondern versorgte Fachkräfte und Fronarbeiter."
   },
   {
    "name": "Naram-Sin",
    "years": "reg. ca. 2254–2218 v. Chr.",
    "text": "Enkel Sargons und erster Herrscher Mesopotamiens, der sich selbst zum Gott erklärte."
   },
   {
    "name": "Suppiluliuma I.",
    "years": "reg. ca. 1350–1322 v. Chr.",
    "text": "Baute das Hethiterreich zur Großmacht aus. Eine ägyptische Königinwitwe bat ihn um einen Sohn als Gemahl – der Prinz wurde auf dem Weg ermordet."
   },
   {
    "name": "Assurbanipal",
    "years": "reg. 668–627 v. Chr.",
    "text": "Assyrischer König, der in Ninive eine systematische Bibliothek anlegte. Ihr verdanken wir das Gilgamesch-Epos."
   },
   {
    "name": "Nebukadnezar II.",
    "years": "reg. 605–562 v. Chr.",
    "text": "Babylonischer König, unter dem Jerusalem zerstört und die judäische Oberschicht deportiert wurde – das Babylonische Exil."
   },
   {
    "name": "Zarathustra",
    "years": "Datierung umstritten, ca. 1200–600 v. Chr.",
    "text": "Stifter einer der ältesten Offenbarungsreligionen, in der Welt und Geschichte als Kampf zwischen Wahrheit und Lüge gedeutet werden."
   },
   {
    "name": "Wu Ding",
    "years": "reg. ca. 1250–1192 v. Chr.",
    "text": "Shang-König, aus dessen Zeit Zehntausende Orakelknochen stammen – die ältesten Zeugnisse der chinesischen Schrift."
   },
   {
    "name": "Fu Hao",
    "years": "gest. ca. 1200 v. Chr.",
    "text": "Gemahlin Wu Dings, Priesterin und Heerführerin. Ihr ungeplündertes Grab enthielt Waffen, Bronzen und die Bestattungen von Gefolgsleuten."
   },
   {
    "name": "Piye",
    "years": "ca. 750–715 v. Chr.",
    "text": "Kuschitischer König aus dem heutigen Sudan, der Ägypten eroberte und als Pharao regierte. Die 25. Dynastie war nubisch – Ägypten wurde von Süden her beherrscht, nicht nur von Norden bedroht."
   },
   {
    "name": "Laozi",
    "years": "6. Jahrhundert v. Chr. (überliefert)",
    "text": "Dem Daodejing zugeschriebener Denker. Ob er als Person existierte, ist offen; der Text prägte chinesisches Denken über Herrschaft und Nichthandeln über zwei Jahrtausende."
   }
  ],
  "nations": [
   {
    "name": "Altägypten",
    "text": "Hochkultur am Nil mit über 3000 Jahren Kontinuität, Pharaonentum und monumentaler Architektur."
   },
   {
    "name": "Mesopotamien (Sumer, Babylon, Assyrien)",
    "text": "Stadtstaaten und Reiche zwischen Euphrat und Tigris, Wiege von Schrift, Recht und Astronomie."
   },
   {
    "name": "Indus-Kultur",
    "text": "Hochentwickelte Städte wie Mohenjo-Daro mit erstaunlich fortschrittlicher Stadtplanung und Wasserversorgung."
   },
   {
    "name": "Hethiterreich",
    "text": "Anatolische Großmacht, Rivale Ägyptens, Pionier der Eisenverarbeitung."
   },
   {
    "name": "Minoische & Mykenische Kultur",
    "text": "Frühe griechische Hochkulturen auf Kreta und dem Peloponnes, Vorläufer der klassischen griechischen Welt."
   },
   {
    "name": "Shang- und Zhou-China",
    "text": "Frühe chinesische Dynastien mit Bronzegusskunst, Orakelknochenschrift und dem Konzept des 'Mandats des Himmels'."
   },
   {
    "name": "Reich von Elam",
    "text": "Im heutigen Iran, jahrtausendelang Rivale Mesopotamiens, mit eigener, bis heute nur teilweise entzifferter Schrift."
   },
   {
    "name": "Nubien und Kusch",
    "text": "Südlich Ägyptens gelegen, zeitweise dessen Beherrscher: Die kuschitischen Könige stellten die 25. Dynastie Ägyptens."
   },
   {
    "name": "Die Phönizier",
    "text": "Händler und Seefahrer der Levante, deren Alphabet über die Griechen zur Grundlage nahezu aller europäischen Schriften wurde."
   },
   {
    "name": "Königreich Israel und Juda",
    "text": "Kleine Reiche zwischen den Großmächten, deren Schriften über Judentum, Christentum und Islam bis heute wirken."
   },
   {
    "name": "Die Olmeken",
    "text": "Älteste bekannte Hochkultur Mesoamerikas, berühmt für kolossale Steinköpfe, deren Basalt über hundert Kilometer weit transportiert wurde."
   }
  ]
 },
 {
  "id": "antike",
  "name": "Antike",
  "span": "ca. 800 v. Chr. – 500 n. Chr.",
  "startYear": -800,
  "endYear": 500,
  "color": "#9c1c1c",
  "accent": "#e2a45c",
  "lead": "Griechenland, Rom und die Grundlagen der westlichen Kultur.",
  "description": "Die Antike prägt Philosophie, Demokratie, Recht und Architektur bis heute. Griechische Stadtstaaten entwickeln Demokratie und Wissenschaft, Alexander der Große verbreitet hellenistische Kultur bis nach Asien, und Rom baut ein Weltreich, das schließlich in West- und Ostrom zerfällt.",
  "literatur": [
   "Mary Beard: SPQR. Die tausendjährige Geschichte Roms",
   "Christian Meier: Die Entstehung des Politischen bei den Griechen",
   "Cambridge Ancient History, Bände 5 bis 14",
   "Encyclopaedia Britannica: Ancient Greek civilization; Ancient Rome"
  ],
  "events": [
   {
    "year": -776,
    "title": "Erste Olympische Spiele",
    "text": "In Olympia finden die ersten überlieferten panhellenischen Spiele statt – religiöses und sportliches Großereignis."
   },
   {
    "year": -753,
    "title": "Gründung Roms (Legende)",
    "text": "Der Überlieferung nach gründet Romulus die Stadt Rom am Tiber."
   },
   {
    "year": -594,
    "title": "Solonische Reformen in Athen",
    "text": "Solon entschärft soziale Spannungen und legt Grundsteine für spätere demokratische Entwicklungen."
   },
   {
    "year": -563,
    "title": "Geburt Buddhas",
    "text": "Siddhartha Gautama wird in Nordindien geboren; seine Lehren begründen den Buddhismus."
   },
   {
    "year": -551,
    "title": "Geburt des Konfuzius",
    "text": "Der chinesische Philosoph prägt mit seiner Ethik- und Staatslehre die ostasiatische Kultur bis heute."
   },
   {
    "year": -509,
    "title": "Gründung der Römischen Republik",
    "text": "Rom vertreibt seinen letzten König und wird zur aristokratischen Republik mit gewählten Konsuln."
   },
   {
    "year": -508,
    "title": "Demokratie in Athen",
    "text": "Kleisthenes reformiert die athenische Verfassung und legt den Grundstein für die erste Demokratie der Geschichte."
   },
   {
    "year": -490,
    "title": "Schlacht bei Marathon",
    "text": "Athen wehrt einen persischen Invasionsversuch ab – prägendes Ereignis des griechischen Selbstverständnisses."
   },
   {
    "year": -490,
    "title": "Marathon",
    "text": "Athen schlägt ein persisches Landungsheer. Die Geschichte vom Läufer, der die Nachricht überbrachte und starb, entstand erst Jahrhunderte später."
   },
   {
    "year": -480,
    "title": "Schlachten bei Thermopylae und Salamis",
    "text": "Griechische Stadtstaaten stoppen die zweite persische Invasion zu Land und zur See."
   },
   {
    "year": -431,
    "title": "Peloponnesischer Krieg beginnt",
    "text": "Athen und Sparta führen einen jahrzehntelangen Krieg, der Griechenland nachhaltig schwächt."
   },
   {
    "year": -399,
    "title": "Tod des Sokrates",
    "text": "Der athenische Philosoph wird wegen 'Gottlosigkeit' zum Tode verurteilt und trinkt den Schierlingsbecher."
   },
   {
    "year": -399,
    "title": "Prozess gegen Sokrates",
    "text": "Athen verurteilt einen Bürger zum Tode wegen seiner Fragen – der Gründungskonflikt zwischen Philosophie und Gemeinwesen."
   },
   {
    "year": -336,
    "title": "Alexander der Große wird König",
    "text": "Alexander besteigt den makedonischen Thron und erobert binnen weniger Jahre ein Reich bis nach Indien."
   },
   {
    "year": -323,
    "title": "Tod Alexanders und Reichsteilung",
    "text": "Nach Alexanders Tod zerfällt sein Reich unter seinen Nachfolgern (Diadochen) in mehrere hellenistische Königreiche."
   },
   {
    "year": -264,
    "title": "Beginn der Punischen Kriege",
    "text": "Rom und Karthago liefern sich über ein Jahrhundert Kriege um die Vorherrschaft im westlichen Mittelmeer."
   },
   {
    "year": -221,
    "title": "Einigung Chinas unter Qin",
    "text": "Nach 250 Jahren Krieg entsteht ein Zentralstaat mit einheitlicher Schrift, Währung und Achsbreite für Wagen."
   },
   {
    "year": -218,
    "title": "Hannibal überquert die Alpen",
    "text": "Der karthagische Feldherr fällt mit Kriegselefanten in Italien ein und bedroht Rom existenziell."
   },
   {
    "year": -146,
    "title": "Zerstörung Karthagos",
    "text": "Rom zerstört Karthago vollständig und wird zur unangefochtenen Macht im westlichen Mittelmeerraum."
   },
   {
    "year": -73,
    "title": "Spartacus-Aufstand",
    "text": "Ein Sklavenaufstand unter dem Gladiator Spartacus erschüttert für zwei Jahre die römische Ordnung."
   },
   {
    "year": -58,
    "title": "Caesars Gallischer Krieg",
    "text": "Julius Caesar erobert Gallien und legt damit den Grundstein für sein politisches Machtwachstum."
   },
   {
    "year": -44,
    "title": "Ermordung Caesars",
    "text": "Julius Caesar wird an den Iden des März von Senatoren ermordet – Auslöser des endgültigen Untergangs der Republik."
   },
   {
    "year": -31,
    "title": "Schlacht bei Actium",
    "text": "Octavian besiegt Marcus Antonius und Kleopatra – Ägypten wird römische Provinz."
   },
   {
    "year": -31,
    "title": "Actium",
    "text": "Octavians Sieg über Antonius und Kleopatra beendet die römischen Bürgerkriege und leitet die Kaiserzeit ein."
   },
   {
    "year": -27,
    "title": "Beginn des Prinzipats",
    "text": "Octavian (Augustus) wird erster römischer Kaiser und beendet die Bürgerkriege der späten Republik."
   },
   {
    "year": 9,
    "title": "Varusschlacht",
    "text": "Germanische Stämme unter Arminius vernichten drei römische Legionen im Teutoburger Wald – stoppt römische Expansion nach Germanien."
   },
   {
    "year": 33,
    "title": "Kreuzigung Jesu von Nazareth",
    "text": "Ausgangspunkt des Christentums, das sich in den folgenden Jahrhunderten im Römischen Reich ausbreitet."
   },
   {
    "year": 70,
    "title": "Zerstörung des Zweiten Tempels",
    "text": "Rom zerschlägt einen jüdischen Aufstand und zerstört den Tempel in Jerusalem – prägend für die jüdische Diaspora."
   },
   {
    "year": 79,
    "title": "Ausbruch des Vesuv",
    "text": "Pompeji und Herculaneum werden unter Asche begraben – einzigartig konservierter Einblick in römisches Alltagsleben."
   },
   {
    "year": 117,
    "title": "Größte Ausdehnung des Römischen Reiches",
    "text": "Unter Kaiser Trajan erreicht das Imperium Romanum seine maximale territoriale Ausdehnung."
   },
   {
    "year": 165,
    "title": "Antoninische Pest",
    "text": "Eine Seuche tötet über Jahre Millionen im Römischen Reich und schwächt Heer und Wirtschaft dauerhaft. Dass es Pocken waren, ist eine plausible Vermutung – ein Erregernachweis fehlt.",
    "quelle": "Encyclopaedia Britannica: Antonine Plague; zur Erregerfrage fehlt bislang aussagekräftige alte DNA"
   },
   {
    "year": 220,
    "title": "Ende der Han-Dynastie",
    "text": "China zerfällt in die Zeit der Drei Reiche – Beginn einer langen Phase politischer Zersplitterung."
   },
   {
    "year": 285,
    "title": "Reichsteilung unter Diokletian",
    "text": "Kaiser Diokletian teilt das Römische Reich verwaltungstechnisch, um es besser regierbar zu machen."
   },
   {
    "year": 312,
    "title": "Milvische Brücke",
    "text": "Konstantins Sieg unter christlichem Zeichen leitet den Aufstieg des Christentums zur Reichsreligion ein."
   },
   {
    "year": 313,
    "title": "Toleranzedikt von Mailand",
    "text": "Kaiser Konstantin gewährt dem Christentum Religionsfreiheit im Römischen Reich."
   },
   {
    "year": 325,
    "title": "Konzil von Nicäa",
    "text": "Das erste ökumenische Konzil formuliert zentrale Glaubensgrundsätze des Christentums (Nizänisches Glaubensbekenntnis)."
   },
   {
    "year": 330,
    "title": "Gründung Konstantinopels",
    "text": "Kaiser Konstantin macht die griechische Stadt Byzantion zur neuen Reichshauptstadt – künftiges Zentrum von Byzanz."
   },
   {
    "year": 375,
    "title": "Beginn der Völkerwanderung",
    "text": "Der Einfall der Hunnen setzt eine Kettenreaktion germanischer Wanderbewegungen in Gang, die Westrom destabilisiert."
   },
   {
    "year": 395,
    "title": "Teilung des Römischen Reiches",
    "text": "Das Reich wird endgültig in West- und Ostrom (Byzanz) geteilt."
   },
   {
    "year": 410,
    "title": "Plünderung Roms durch die Westgoten",
    "text": "Erstmals seit 800 Jahren wird Rom von einer fremden Streitmacht eingenommen – Schockwirkung im ganzen Reich."
   },
   {
    "year": 451,
    "title": "Schlacht auf den Katalaunischen Feldern",
    "text": "Ein römisch-germanisches Bündnisheer stoppt Attilas Hunnen in Gallien."
   },
   {
    "year": 476,
    "title": "Untergang Westroms",
    "text": "Der germanische Heerführer Odoaker setzt den letzten weströmischen Kaiser Romulus Augustulus ab."
   }
  ],
  "figures": [
   {
    "name": "Konfuzius",
    "years": "551–479 v. Chr.",
    "text": "Chinesischer Philosoph, dessen Ethik- und Staatslehre die ostasiatische Kultur bis heute prägt."
   },
   {
    "name": "Buddha (Siddhartha Gautama)",
    "years": "ca. 563–483 v. Chr.",
    "text": "Begründer des Buddhismus, lehrte den 'Mittleren Weg' zur Überwindung des Leidens."
   },
   {
    "name": "Sokrates",
    "years": "469–399 v. Chr.",
    "text": "Athenischer Philosoph, Begründer der westlichen Ethik durch das dialogische Hinterfragen vermeintlicher Gewissheiten."
   },
   {
    "name": "Perikles",
    "years": "ca. 495–429 v. Chr.",
    "text": "Athenischer Staatsmann, prägte das 'Goldene Zeitalter' Athens mit Demokratieausbau und der Errichtung der Akropolis."
   },
   {
    "name": "Platon",
    "years": "ca. 428–348 v. Chr.",
    "text": "Schüler des Sokrates, Begründer der Akademie in Athen, prägte mit seiner Ideenlehre die abendländische Philosophie."
   },
   {
    "name": "Aristoteles",
    "years": "384–322 v. Chr.",
    "text": "Universalgelehrter, Lehrer Alexanders des Großen, legte Grundlagen für Logik, Naturwissenschaft und Politiktheorie."
   },
   {
    "name": "Alexander der Große",
    "years": "356–323 v. Chr.",
    "text": "Makedonischer König, eroberte ein Weltreich von Griechenland bis Indien und verbreitete hellenistische Kultur."
   },
   {
    "name": "Hannibal",
    "years": "247–183 v. Chr.",
    "text": "Karthagischer Feldherr, überquerte mit einem Heer die Alpen und brachte Rom im Zweiten Punischen Krieg an den Rand der Niederlage."
   },
   {
    "name": "Julius Caesar",
    "years": "100–44 v. Chr.",
    "text": "Römischer Feldherr und Politiker, eroberte Gallien, wurde Alleinherrscher und wurde von Senatoren ermordet."
   },
   {
    "name": "Cicero",
    "years": "106–43 v. Chr.",
    "text": "Römischer Redner, Politiker und Philosoph, prägte die lateinische Prosa und republikanisches Denken nachhaltig."
   },
   {
    "name": "Augustus",
    "years": "63 v. Chr.–14 n. Chr.",
    "text": "Erster römischer Kaiser, begründete den über 200 Jahre währenden 'Pax Romana'."
   },
   {
    "name": "Kleopatra VII.",
    "years": "69–30 v. Chr.",
    "text": "Letzte Pharaonin Ägyptens, bekannt für ihre politischen Bündnisse mit Caesar und Marcus Antonius."
   },
   {
    "name": "Jesus von Nazareth",
    "years": "ca. 4 v. Chr.–33 n. Chr.",
    "text": "Jüdischer Wanderprediger, dessen Lehren die Grundlage des Christentums bilden."
   },
   {
    "name": "Konstantin der Große",
    "years": "ca. 272–337 n. Chr.",
    "text": "Römischer Kaiser, förderte das Christentum und gründete Konstantinopel als neue Hauptstadt."
   },
   {
    "name": "Attila",
    "years": "ca. 406–453 n. Chr.",
    "text": "Herrscher der Hunnen, als 'Geißel Gottes' gefürchtet, brachte weite Teile Europas in Bedrängnis."
   },
   {
    "name": "Augustinus von Hippo",
    "years": "354–430 n. Chr.",
    "text": "Kirchenvater und Philosoph, dessen Werke ('Bekenntnisse', 'De civitate Dei') die christliche Theologie prägten."
   },
   {
    "name": "Trajan",
    "years": "53–117 n. Chr.",
    "text": "Römischer Kaiser, unter dem das Reich seine größte territoriale Ausdehnung erreichte; gilt als vorbildlicher Verwalter."
   },
   {
    "name": "Hadrian",
    "years": "76–138 n. Chr.",
    "text": "Römischer Kaiser, bereiste das gesamte Reich und ließ u.a. den Hadrianswall in Britannien errichten."
   },
   {
    "name": "Marc Aurel",
    "years": "121–180 n. Chr.",
    "text": "Kaiser und Stoiker, verfasste die 'Selbstbetrachtungen' – eines der einflussreichsten philosophischen Werke der Antike."
   },
   {
    "name": "Diokletian",
    "years": "ca. 244–311 n. Chr.",
    "text": "Reformierte das Römische Reich grundlegend (Tetrarchie, Verwaltungs- und Wirtschaftsreformen) und beendete die Reichskrise des 3. Jahrhunderts."
   },
   {
    "name": "Gaius Marius",
    "years": "157–86 v. Chr.",
    "text": "Römischer Feldherr und Politiker, reformierte das Heerwesen grundlegend und öffnete es für besitzlose Bürger."
   },
   {
    "name": "Spartacus",
    "years": "gest. 71 v. Chr.",
    "text": "Entlaufener Gladiator, führte den größten Sklavenaufstand der römischen Geschichte an."
   },
   {
    "name": "Imhotep",
    "years": "ca. 27. Jh. v. Chr.",
    "text": "Architekt der Stufenpyramide von Sakkara und erster namentlich bekannter Baumeister und Gelehrter der Geschichte, später als Gott verehrt."
   },
   {
    "name": "Sesostris III.",
    "years": "ca. 1878–1839 v. Chr.",
    "text": "Bedeutendster Pharao des Mittleren Reiches, expandierte nach Nubien und reformierte die Verwaltung."
   },
   {
    "name": "Thutmosis III.",
    "years": "ca. 1479–1425 v. Chr.",
    "text": "'Napoleon Ägyptens', führte zahlreiche erfolgreiche Feldzüge und brachte das Neue Reich zu seiner größten Ausdehnung."
   },
   {
    "name": "Amenhotep III.",
    "years": "ca. 1388–1351 v. Chr.",
    "text": "Regierte während einer Blütezeit des Friedens und Wohlstands, errichtete zahlreiche Monumentalbauten."
   },
   {
    "name": "Scipio Africanus",
    "years": "236–183 v. Chr.",
    "text": "Römischer Feldherr, besiegte Hannibal bei Zama und beendete damit Karthagos Großmachtstellung."
   },
   {
    "name": "Sulla",
    "years": "138–78 v. Chr.",
    "text": "Römischer Feldherr und Diktator, dessen brutale Proskriptionen und Verfassungsreformen die späte Republik destabilisierten."
   },
   {
    "name": "Pompeius",
    "years": "106–48 v. Chr.",
    "text": "Römischer Feldherr und Rivale Caesars im Bürgerkrieg, zunächst gefeierter Eroberer des Ostens."
   },
   {
    "name": "Crassus",
    "years": "ca. 115–53 v. Chr.",
    "text": "Reichster Mann Roms, Mitglied des Ersten Triumvirats mit Caesar und Pompeius, fiel im Krieg gegen die Parther."
   },
   {
    "name": "Herodot",
    "years": "ca. 484–425 v. Chr.",
    "text": "Verfasser der ersten erhaltenen Geschichtsschreibung; er trennte Bericht und Gerücht und nannte seine Quellen – auch wenn er ihnen selbst nicht glaubte."
   },
   {
    "name": "Thukydides",
    "years": "ca. 460–400 v. Chr.",
    "text": "Beschrieb den Peloponnesischen Krieg ohne göttliche Ursachen, allein aus Interessen und Furcht – der Beginn nüchterner Geschichtsanalyse."
   },
   {
    "name": "Archimedes",
    "years": "ca. 287–212 v. Chr.",
    "text": "Mathematiker und Ingenieur aus Syrakus. Bei der Eroberung der Stadt wurde er von einem römischen Soldaten getötet, während er über eine Zeichnung gebeugt war."
   },
   {
    "name": "Ashoka",
    "years": "reg. ca. 268–232 v. Chr.",
    "text": "Maurya-Herrscher, der nach einem verlustreichen Feldzug zum Buddhismus fand und seine Reue in Felsedikten im ganzen Reich veröffentlichen ließ."
   },
   {
    "name": "Qin Shihuangdi",
    "years": "259–210 v. Chr.",
    "text": "Erster Kaiser Chinas, der Maße, Gewichte und Schrift vereinheitlichte – und sich mit einer Terrakotta-Armee von Tausenden Figuren bestatten ließ."
   },
   {
    "name": "Sima Qian",
    "years": "ca. 145–86 v. Chr.",
    "text": "Chinas erster großer Historiker. Er wählte die Kastration statt des Selbstmords, um sein Geschichtswerk vollenden zu können."
   },
   {
    "name": "Boudicca",
    "years": "gest. 60/61 n. Chr.",
    "text": "Königin der Icener, die nach Misshandlung ihrer Familie einen Aufstand führte und drei römische Städte in Britannien zerstörte."
   },
   {
    "name": "Zenobia",
    "years": "ca. 240–274",
    "text": "Herrscherin von Palmyra, die Ägypten und Teile Kleinasiens eroberte, bevor Aurelian sie besiegte und in Rom im Triumphzug führte."
   },
   {
    "name": "Chandragupta Maurya",
    "years": "ca. 340–297 v. Chr.",
    "text": "Begründer des ersten indischen Großreichs, das fast den gesamten Subkontinent umfasste. Der Überlieferung nach dankte er ab und starb als jainistischer Asket durch freiwilliges Fasten."
   },
   {
    "name": "Kautilya",
    "years": "ca. 350–275 v. Chr.",
    "text": "Ihm wird das Arthashastra zugeschrieben, ein Handbuch der Staatskunst, das nüchtern über Spionage, Steuern und Machterhalt schreibt – rund 1.800 Jahre vor Machiavelli."
   },
   {
    "name": "Ban Zhao",
    "years": "ca. 45–116 n. Chr.",
    "text": "Vollendete das Buch der Han, die Reichsgeschichte ihrer Zeit, und unterrichtete am Kaiserhof. Eine der ersten namentlich bekannten Historikerinnen der Welt."
   },
   {
    "name": "Zhang Qian",
    "years": "gestorben 114 v. Chr.",
    "text": "Han-Gesandter, der nach dreizehn Jahren – darunter Jahre in Gefangenschaft – aus Zentralasien zurückkehrte. Seine Berichte öffneten China den Blick nach Westen."
   },
   {
    "name": "Cai Lun",
    "years": "ca. 50–121 n. Chr.",
    "text": "Ihm wird die Verbesserung der Papierherstellung zugeschrieben. Ältere Papierfunde sind bekannt; entscheidend war, dass das Verfahren am Hof durchgesetzt wurde."
   },
   {
    "name": "Aspelta",
    "years": "ca. 600–580 v. Chr.",
    "text": "Herrscher von Kusch mit Zentrum in Napata. Das Reich von Meroë entwickelte eine eigene Schrift, die bis heute nur teilweise gelesen werden kann."
   }
  ],
  "nations": [
   {
    "name": "Griechische Stadtstaaten (Poleis)",
    "text": "Athen, Sparta und weitere Poleis prägten Philosophie, Theater, Demokratie und Kriegskunst."
   },
   {
    "name": "Perserreich (Achämeniden)",
    "text": "Größtes Reich seiner Zeit, bekannt für Verwaltungseffizienz, Straßenbau und religiöse Toleranz."
   },
   {
    "name": "Karthago",
    "text": "Phönizische Handelsmacht in Nordafrika, unterlag Rom nach drei Punischen Kriegen und wurde vollständig zerstört."
   },
   {
    "name": "Römisches Reich",
    "text": "Von einer Stadtstaat-Republik zum Weltreich mit Recht, Infrastruktur und Militärmacht, das Europa bis heute prägt."
   },
   {
    "name": "Han-Dynastie (China)",
    "text": "Chinesisches Kaiserreich zeitgleich zu Rom, förderte Seidenstraßenhandel, Konfuzianismus und Verwaltung."
   },
   {
    "name": "Maurya-Reich (Indien)",
    "text": "Erstes großes indisches Großreich, unter Kaiser Ashoka Förderung des Buddhismus und relativ friedlicher Herrschaft."
   },
   {
    "name": "Hunnenreich",
    "text": "Nomadisches Steppenreich unter Attila, dessen Druck maßgeblich zur Völkerwanderung und zum Fall Westroms beitrug."
   },
   {
    "name": "Etrusker",
    "text": "Vor Rom die führende Macht Mittelitaliens; ihre Sprache ist bis heute nur teilweise verstanden."
   },
   {
    "name": "Ptolemäisches Ägypten",
    "text": "Griechisch regiertes Ägypten mit Alexandria als Zentrum der Gelehrsamkeit, gegründet von einem General Alexanders."
   },
   {
    "name": "Partherreich",
    "text": "Jahrhundertelanger Gegenspieler Roms im Osten; die Niederlage bei Carrhae 53 v. Chr. war eine der schwersten der römischen Geschichte."
   },
   {
    "name": "Kuschana-Reich",
    "text": "An der Seidenstraße gelegen, verband es Indien, Persien und China und vermittelte den Buddhismus nach Ostasien."
   },
   {
    "name": "Königreich Aksum",
    "text": "Am Roten Meer gelegene Handelsmacht mit eigener Schrift und Münzprägung; früh christianisiert."
   },
   {
    "name": "Sassanidenreich",
    "text": "Ab 224 die zweite große persische Großmacht, die Rom und Byzanz über vier Jahrhunderte forderte."
   },
   {
    "name": "Nok-Kultur (Westafrika)",
    "text": "Zwischen etwa 1500 v. Chr. und 500 n. Chr. entstehen im heutigen Nigeria Terrakotten von hoher Qualität und früher Eisenverhüttung – ohne dass ein zugehöriger Staat nachweisbar wäre."
   },
   {
    "name": "Zapoteken und Monte Albán",
    "text": "Auf einem abgetragenen Bergrücken in Oaxaca entsteht eine Stadt mit einem der ältesten Schriftsysteme Amerikas."
   },
   {
    "name": "Xiongnu",
    "text": "Ein Steppenreich nördlich Chinas, das die Han-Dynastie zu Tributzahlungen zwang. Die Große Mauer entstand als Antwort auf diese Macht."
   },
   {
    "name": "Anuradhapura (Sri Lanka)",
    "text": "Ein buddhistisches Königreich mit Bewässerungsanlagen, deren Stauseen teilweise bis heute genutzt werden."
   }
  ],
  "dynastyGroups": [
   {
    "title": "Dynastien Altägyptens",
    "items": [
     {
      "name": "Frühdynastische Zeit (ca. 3100–2700 v. Chr.)",
      "text": "Beginnend mit Menes/Narmer, Vereinigung von Ober- und Unterägypten, erste Hauptstadt Memphis."
     },
     {
      "name": "Altes Reich (ca. 2700–2200 v. Chr.)",
      "text": "Zeitalter der großen Pyramiden unter Djoser, Snofru, Cheops, Chephren und Mykerinos; straff zentralisierte Gottkönigsherrschaft."
     },
     {
      "name": "Mittleres Reich (ca. 2000–1700 v. Chr.)",
      "text": "Wiedervereinigung nach einer Zwischenzeit des Zerfalls, Expansion nach Nubien, kulturelle Blüte unter Herrschern wie Sesostris III."
     },
     {
      "name": "Neues Reich (ca. 1550–1070 v. Chr.)",
      "text": "Machtpolitischer Höhepunkt Ägyptens unter Thutmosis III., Hatschepsut, Echnaton, Tutanchamun und Ramses II.; größte territoriale Ausdehnung bis nach Nubien und in die Levante."
     },
     {
      "name": "Dritte Zwischenzeit & Spätzeit (ca. 1070–332 v. Chr.)",
      "text": "Zunehmende Fremdherrschaften durch Libyer, Kuschiten und Perser schwächen die Zentralmacht der Pharaonen."
     },
     {
      "name": "Ptolemäer-Dynastie (332–30 v. Chr.)",
      "text": "Nach Alexanders Eroberung griechisch-makedonische Herrscherfamilie mit Zentrum Alexandria; endet mit Kleopatra VII. und der römischen Annexion."
     }
    ]
   },
   {
    "title": "Römische Kaiserdynastien",
    "items": [
     {
      "name": "Julisch-Claudische Dynastie (27 v. Chr. – 68 n. Chr.)",
      "text": "Augustus, Tiberius, Caligula, Claudius, Nero – die erste Kaiserdynastie, endet mit Neros Sturz und Selbstmord."
     },
     {
      "name": "Vierkaiserjahr & Flavische Dynastie (69–96)",
      "text": "Nach dem Bürgerkriegsjahr 69 stabilisieren Vespasian, Titus und Domitian das Reich; Bau des Kolosseums."
     },
     {
      "name": "Adoptivkaiser – 'Fünf gute Kaiser' (96–180)",
      "text": "Nerva, Trajan, Hadrian, Antoninus Pius und Marc Aurel gelten als Höhepunkt stabiler, gut verwalteter Herrschaft und größter territorialer Ausdehnung unter Trajan."
     },
     {
      "name": "Severer-Dynastie (193–235)",
      "text": "Septimius Severus und Nachfolger stützen sich zunehmend auf das Militär als Machtbasis."
     },
     {
      "name": "Reichskrise des 3. Jahrhunderts (235–284)",
      "text": "Über 20 sogenannte Soldatenkaiser in 50 Jahren, meist durch Putsche eingesetzt und gestürzt – tiefe Staats-, Wirtschafts- und Grenzkrise."
     },
     {
      "name": "Spätantike & Tetrarchie (284–395)",
      "text": "Diokletian reformiert das Reich grundlegend (Tetrarchie), Konstantin der Große fördert das Christentum; Theodosius I. ist letzter Alleinherrscher vor der endgültigen Reichsteilung."
     }
    ]
   }
  ]
 },
 {
  "id": "mittelalter",
  "name": "Mittelalter",
  "span": "ca. 500 – 1500",
  "startYear": 500,
  "endYear": 1500,
  "color": "#7a2a3a",
  "accent": "#c98a5c",
  "lead": "Zwischen Glaube, Feudalismus und aufblühenden Städten.",
  "description": "Nach dem Untergang Westroms entstehen neue Reiche in Europa, geprägt von Christentum, Feudalismus und wechselnden Machtzentren. Gleichzeitig blühen im islamischen Kalifat, in Byzanz und in Ostasien hochentwickelte Kulturen. Kreuzzüge, Pest und die beginnende Stadtkultur prägen das Spätmittelalter.",
  "literatur": [
   "Chris Wickham: Das Mittelalter. Europa von 500 bis 1500",
   "Peter Frankopan: Licht aus dem Osten. Eine neue Geschichte der Welt",
   "New Cambridge Medieval History",
   "Encyclopaedia Britannica: Middle Ages; Byzantine Empire; Caliphate"
  ],
  "events": [
   {
    "year": 529,
    "title": "Codex Justinianus",
    "text": "Kaiser Justinian lässt das römische Recht systematisch zusammenfassen – Grundlage vieler europäischer Rechtssysteme bis heute."
   },
   {
    "year": 541,
    "title": "Justinianische Pest",
    "text": "Die erste dokumentierte Pestpandemie erfasst das Mittelmeer und schwächt Justinians Versuch, das Römische Reich wiederherzustellen."
   },
   {
    "year": 570,
    "title": "Geburt Mohammeds",
    "text": "Der spätere Religionsstifter des Islam wird in Mekka geboren."
   },
   {
    "year": 610,
    "title": "Erste Offenbarungen an Mohammed",
    "text": "Nach islamischer Überlieferung beginnt Mohammed, die Offenbarungen des Koran zu empfangen."
   },
   {
    "year": 622,
    "title": "Hidschra – Beginn der islamischen Zeitrechnung",
    "text": "Mohammed wandert von Mekka nach Medina aus; Ausgangspunkt der raschen Ausbreitung des Islam."
   },
   {
    "year": 632,
    "title": "Tod Mohammeds und Beginn der Expansion",
    "text": "Nach Mohammeds Tod breitet sich der Islam binnen weniger Jahrzehnte über den Nahen Osten und Nordafrika aus."
   },
   {
    "year": 711,
    "title": "Islamische Eroberung Spaniens",
    "text": "Muslimische Truppen erobern weite Teile der Iberischen Halbinsel – Beginn von Al-Andalus."
   },
   {
    "year": 732,
    "title": "Schlacht bei Tours und Poitiers",
    "text": "Karl Martell stoppt die arabische Expansion nach Mitteleuropa."
   },
   {
    "year": 750,
    "title": "Abbasidenkalifat löst Umayyaden ab",
    "text": "Bagdad wird Zentrum eines islamischen 'Goldenen Zeitalters' der Wissenschaft und Philosophie."
   },
   {
    "year": 751,
    "title": "Schlacht am Talas",
    "text": "Araber besiegen ein chinesisches Heer. Über Kriegsgefangene gelangt die Papierherstellung in die islamische Welt und von dort nach Europa."
   },
   {
    "year": 793,
    "title": "Wikingerüberfall auf Lindisfarne",
    "text": "Der Überfall auf ein englisches Kloster markiert traditionell den Beginn der Wikingerzeit."
   },
   {
    "year": 800,
    "title": "Kaiserkrönung Karls des Großen",
    "text": "Karl der Große wird in Rom zum Kaiser gekrönt – Versuch der Erneuerung des weströmischen Kaisertums."
   },
   {
    "year": 843,
    "title": "Vertrag von Verdun",
    "text": "Das Frankenreich wird unter Karls Enkeln geteilt – Grundlage der späteren Staaten Frankreich, Deutschland und Italien."
   },
   {
    "year": 862,
    "title": "Gründung der Kiewer Rus",
    "text": "Waräger (Wikinger) gründen ein Fürstentum, das zum Ursprung Russlands, der Ukraine und Weißrusslands wird."
   },
   {
    "year": 962,
    "title": "Gründung des Heiligen Römischen Reiches",
    "text": "Otto I. wird zum Kaiser gekrönt – Beginn des Heiligen Römischen Reiches als loser Verbund deutscher Territorien."
   },
   {
    "year": 1054,
    "title": "Morgenländisches Schisma",
    "text": "Rom und Konstantinopel exkommunizieren einander. Die Trennung war eher ein langer Prozess als ein Ereignis dieses Jahres."
   },
   {
    "year": 1066,
    "title": "Schlacht bei Hastings",
    "text": "Wilhelm der Eroberer besiegt die Angelsachsen und normannisiert England grundlegend."
   },
   {
    "year": 1077,
    "title": "Gang nach Canossa",
    "text": "Kaiser Heinrich IV. unterwirft sich im Investiturstreit öffentlich Papst Gregor VII. – Höhepunkt des Machtkampfs zwischen Kaiser und Papst."
   },
   {
    "year": 1096,
    "title": "Beginn der Kreuzzüge",
    "text": "Nach dem Aufruf Papst Urbans II. ziehen Kreuzfahrerheere Richtung Jerusalem – Beginn von zwei Jahrhunderten Kreuzzügen."
   },
   {
    "year": 1099,
    "title": "Eroberung Jerusalems",
    "text": "Kreuzfahrer erobern Jerusalem und errichten mehrere Kreuzfahrerstaaten in der Levante."
   },
   {
    "year": 1147,
    "title": "Zweiter Kreuzzug",
    "text": "Ein europäisches Großheer scheitert bei dem Versuch, die Kreuzfahrerstaaten zu stärken."
   },
   {
    "year": 1187,
    "title": "Saladin erobert Jerusalem zurück",
    "text": "Der ayyubidische Sultan Saladin besiegt die Kreuzfahrer entscheidend bei Hattin und nimmt Jerusalem ein."
   },
   {
    "year": 1191,
    "title": "Dritter Kreuzzug",
    "text": "Richard Löwenherz, Philipp II. von Frankreich und Friedrich Barbarossa versuchen erfolglos, Jerusalem zurückzuerobern; ein Waffenstillstand mit Saladin sichert aber Pilgerzugang."
   },
   {
    "year": 1204,
    "title": "Plünderung Konstantinopels (Vierter Kreuzzug)",
    "text": "Kreuzfahrer richten sich gegen die christliche Schwesterstadt Byzanz statt gegen Muslime – schwächt Byzanz dauerhaft und vertieft die Kluft zwischen West- und Ostkirche."
   },
   {
    "year": 1206,
    "title": "Dschingis Khan wird Großkhan",
    "text": "Die mongolischen Stämme werden geeint; Beginn der größten Landeroberung der Geschichte."
   },
   {
    "year": 1206,
    "title": "Temüdschin wird Dschingis Khan",
    "text": "Die Einigung der Steppenvölker begründet das größte zusammenhängende Landreich der Geschichte."
   },
   {
    "year": 1212,
    "title": "Kinderkreuzzug",
    "text": "Tausende jugendliche Kreuzfahrer ohne militärische Ausbildung brechen Richtung Heiliges Land auf – die meisten sterben oder werden versklavt."
   },
   {
    "year": 1215,
    "title": "Magna Carta",
    "text": "Englische Adlige zwingen König Johann Ohneland zur Anerkennung von Rechten – früher Meilenstein des Rechtsstaats."
   },
   {
    "year": 1228,
    "title": "Kreuzzug Friedrichs II.",
    "text": "Kaiser Friedrich II. erreicht durch Diplomatie statt Krieg die vorübergehende Rückgabe Jerusalems – einzigartig unter den Kreuzzügen."
   },
   {
    "year": 1241,
    "title": "Mongolensturm erreicht Europa",
    "text": "Mongolische Heere besiegen polnische und ungarische Ritterheere, ziehen sich aber nach dem Tod des Großkhans zurück."
   },
   {
    "year": 1248,
    "title": "Siebter Kreuzzug Ludwigs IX.",
    "text": "Der französische König greift Ägypten an, gerät aber in Gefangenschaft und muss sich freikaufen."
   },
   {
    "year": 1258,
    "title": "Mongolische Eroberung Bagdads",
    "text": "Die Zerstörung Bagdads beendet das Abbasidenkalifat und gilt als Ende des islamischen 'Goldenen Zeitalters'."
   },
   {
    "year": 1258,
    "title": "Zerstörung Bagdads",
    "text": "Die Mongolen nehmen die Stadt ein und vernichten das Haus der Weisheit – ein Einschnitt für die Gelehrsamkeit der islamischen Welt."
   },
   {
    "year": 1270,
    "title": "Achter Kreuzzug und Tod Ludwigs IX.",
    "text": "Der französische König stirbt bei einem letzten Kreuzzugsversuch vor Tunis an einer Seuche – praktisches Ende der großen Kreuzzugsbewegung."
   },
   {
    "year": 1271,
    "title": "Marco Polo bricht nach China auf",
    "text": "Der venezianische Kaufmann reist an den Hof des Mongolenherrschers Kublai Khan und prägt europäische Asienvorstellungen."
   },
   {
    "year": 1291,
    "title": "Ende der Kreuzfahrerstaaten",
    "text": "Mit dem Fall von Akkon verlieren die Kreuzfahrer ihre letzte Bastion im Heiligen Land."
   },
   {
    "year": 1315,
    "title": "Große Hungersnot in Europa",
    "text": "Jahrelange Regenfälle lassen Ernten ausfallen; bis 1317 stirbt ein erheblicher Teil der nordeuropäischen Bevölkerung – sieben Jahrzehnte vor der Pest."
   },
   {
    "year": 1324,
    "title": "Pilgerreise des Mansa Musa",
    "text": "Der Herrscher des westafrikanischen Malireichs reist mit enormem Goldreichtum nach Mekka und wird international bekannt."
   },
   {
    "year": 1337,
    "title": "Beginn des Hundertjährigen Krieges",
    "text": "England und Frankreich beginnen einen jahrzehntelangen Konflikt um die französische Krone."
   },
   {
    "year": 1347,
    "title": "Der Schwarze Tod erreicht Europa",
    "text": "Die Pest tötet innerhalb weniger Jahre einen großen Teil der europäischen Bevölkerung. Die Schätzungen reichen von rund 30 bis über 60 Prozent und gehen weit auseinander, weil die Überlieferung lückenhaft ist.",
    "quelle": "Britannica: Black Death; Aberth und Benedictow (2021) am oberen, vorsichtige Schätzungen am unteren Rand"
   },
   {
    "year": 1356,
    "title": "Goldene Bulle",
    "text": "Kaiser Karl IV. regelt die Königswahl im Heiligen Römischen Reich und stärkt die Kurfürsten."
   },
   {
    "year": 1368,
    "title": "Ming-Dynastie in China",
    "text": "Die Ming lösen die mongolische Yuan-Dynastie ab und leiten eine Blütezeit chinesischer Kultur ein."
   },
   {
    "year": 1381,
    "title": "Englischer Bauernaufstand",
    "text": "Hohe Steuern und Pestfolgen lösen einen der größten mittelalterlichen Volksaufstände Englands aus."
   },
   {
    "year": 1420,
    "title": "Beginn der Hussitenkriege",
    "text": "Anhänger Jan Hus' kämpfen gegen Kaiser und Kirche – früher Ausdruck religiöser Reformbewegungen."
   },
   {
    "year": 1429,
    "title": "Jeanne d'Arc befreit Orléans",
    "text": "Die junge Bauerntochter wendet im Hundertjährigen Krieg das Blatt zugunsten Frankreichs."
   },
   {
    "year": 1453,
    "title": "Fall Konstantinopels",
    "text": "Die Osmanen erobern Konstantinopel und beenden das Byzantinische Reich endgültig."
   },
   {
    "year": 1453,
    "title": "Ende des Hundertjährigen Krieges",
    "text": "Frankreich vertreibt die Engländer weitgehend vom Kontinent – Grundstein eines gestärkten französischen Nationalgefühls."
   },
   {
    "year": 1455,
    "title": "Die Gutenberg-Bibel erscheint",
    "text": "Johannes Gutenberg druckt mit beweglichen Lettern die erste vollständige Bibel – Medienrevolution mit Fernwirkung."
   },
   {
    "year": 1492,
    "title": "Fall von Granada / Ende der Reconquista",
    "text": "Die letzten islamischen Herrscher werden aus Spanien vertrieben – im selben Jahr sticht Kolumbus in See."
   },
   {
    "year": 1492,
    "title": "Kolumbus erreicht Amerika",
    "text": "Christoph Kolumbus landet in der Karibik und leitet die europäische Kolonisierung Amerikas ein."
   },
   {
    "year": 1492,
    "title": "Fall Granadas",
    "text": "Die letzte muslimische Herrschaft Iberiens endet; im selben Jahr werden die Juden Spaniens vertrieben und Kolumbus bricht auf."
   }
  ],
  "figures": [
   {
    "name": "Justinian I.",
    "years": "ca. 482–565",
    "text": "Oströmischer Kaiser, ließ das römische Recht kodifizieren und die Hagia Sophia erbauen."
   },
   {
    "name": "Mohammed",
    "years": "ca. 570–632",
    "text": "Religionsstifter des Islam, dessen Lehren binnen weniger Jahrhunderte von Spanien bis Zentralasien verbreitet wurden."
   },
   {
    "name": "Karl der Große",
    "years": "747–814",
    "text": "Fränkischer König und Kaiser, einte weite Teile West- und Mitteleuropas und förderte Bildung ('Karolingische Renaissance')."
   },
   {
    "name": "Alfred der Große",
    "years": "849–899",
    "text": "Angelsächsischer König, verteidigte England erfolgreich gegen die Wikinger und förderte Bildung und Recht."
   },
   {
    "name": "Otto I.",
    "years": "912–973",
    "text": "Erster Kaiser des Heiligen Römischen Reiches, sicherte die Ostgrenze und stärkte die Kirche als Machtstütze."
   },
   {
    "name": "Wilhelm der Eroberer",
    "years": "1028–1087",
    "text": "Normannischer Herzog, eroberte 1066 England und veränderte dessen Sprache, Recht und Adel grundlegend."
   },
   {
    "name": "Dschingis Khan",
    "years": "ca. 1162–1227",
    "text": "Begründer des Mongolenreichs, das zum größten zusammenhängenden Landreich der Geschichte wurde."
   },
   {
    "name": "Saladin",
    "years": "1137–1193",
    "text": "Kurdisch-muslimischer Sultan, eroberte Jerusalem von den Kreuzfahrern zurück und galt als ritterlicher Gegner."
   },
   {
    "name": "Mansa Musa",
    "years": "ca. 1280–1337",
    "text": "Herrscher des westafrikanischen Malireichs, gilt aufgrund seines Goldreichtums als möglicherweise reichster Mensch der Geschichte."
   },
   {
    "name": "Thomas von Aquin",
    "years": "1225–1274",
    "text": "Mittelalterlicher Theologe und Philosoph, verband christliche Lehre mit aristotelischer Philosophie."
   },
   {
    "name": "Jeanne d'Arc",
    "years": "1412–1431",
    "text": "Französische Nationalheldin, führte im Hundertjährigen Krieg französische Truppen an, wurde später als Ketzerin verbrannt."
   },
   {
    "name": "Marco Polo",
    "years": "1254–1324",
    "text": "Venezianischer Händler und Reisender, dessen Berichte über China Europas Asienbild jahrhundertelang prägten."
   },
   {
    "name": "Johannes Gutenberg",
    "years": "ca. 1400–1468",
    "text": "Erfinder des Buchdrucks mit beweglichen Lettern, ermöglichte massenhafte Verbreitung von Wissen."
   },
   {
    "name": "Basileios II.",
    "years": "958–1025",
    "text": "Byzantinischer Kaiser, genannt 'Bulgarentöter', führte das Reich zu seiner größten mittelalterlichen Machtentfaltung."
   },
   {
    "name": "Alexios I. Komnenos",
    "years": "1048–1118",
    "text": "Byzantinischer Kaiser, dessen Hilferuf an den Westen den Ersten Kreuzzug mit auslöste."
   },
   {
    "name": "Gottfried von Bouillon",
    "years": "ca. 1060–1100",
    "text": "Anführer des Ersten Kreuzzugs, erster Herrscher des Königreichs Jerusalem."
   },
   {
    "name": "Balduin I. von Jerusalem",
    "years": "ca. 1058–1118",
    "text": "Bruder Gottfrieds von Bouillon, erster König von Jerusalem, festigte die junge Kreuzfahrerherrschaft in der Levante."
   },
   {
    "name": "Friedrich I. Barbarossa",
    "years": "ca. 1122–1190",
    "text": "Kaiser des Heiligen Römischen Reiches, ertrank auf dem Weg zum Dritten Kreuzzug in Kleinasien."
   },
   {
    "name": "Richard Löwenherz",
    "years": "1157–1199",
    "text": "Englischer König, prominenter Anführer des Dritten Kreuzzugs, kämpfte gegen Saladin um Jerusalem."
   },
   {
    "name": "Ludwig IX. der Heilige",
    "years": "1214–1270",
    "text": "Französischer König, führte zwei Kreuzzüge an und starb bei der Belagerung von Tunis; später heiliggesprochen."
   },
   {
    "name": "Baibars",
    "years": "ca. 1223–1277",
    "text": "Mamlukensultan, stoppte die Mongolen bei Ain Dschalut und eroberte zahlreiche Kreuzfahrerfestungen zurück."
   },
   {
    "name": "Theodora",
    "years": "ca. 500–548",
    "text": "Ehemalige Schauspielerin und Kaiserin an der Seite Justinians. Beim Nika-Aufstand bewog sie ihn zum Bleiben, als er fliehen wollte."
   },
   {
    "name": "Harun ar-Raschid",
    "years": "reg. 786–809",
    "text": "Abbasidischer Kalif, unter dem Bagdad zur größten Stadt der Welt wurde – und die Figur, um die sich die Erzählungen aus Tausendundeiner Nacht ranken."
   },
   {
    "name": "Hildegard von Bingen",
    "years": "1098–1179",
    "text": "Äbtissin, Verfasserin von Visionsschriften, Heilkunde und Musik – und eine der wenigen Frauen, deren Werk aus dem Mittelalter vollständig überliefert ist."
   },
   {
    "name": "Averroes",
    "years": "1126–1198",
    "text": "Andalusischer Richter und Aristoteles-Kommentator; im lateinischen Europa hieß er schlicht der Kommentator."
   },
   {
    "name": "Ibn Battuta",
    "years": "1304–1368/69",
    "text": "Reiste in dreißig Jahren rund 120.000 Kilometer von Marokko bis China – weiter als Marco Polo, im Westen aber lange unbekannt."
   },
   {
    "name": "Zheng He",
    "years": "1371–1433",
    "text": "Chinesischer Admiral, dessen Flotten bis Ostafrika fuhren. Sein größtes Schiff war ein Vielfaches der Santa Maria. Danach stellte China die Fahrten ein."
   },
   {
    "name": "Timur",
    "years": "1336–1405",
    "text": "Eroberer aus Zentralasien, dessen Feldzüge Millionen Opfer forderten und der Samarkand zu einer prächtigen Hauptstadt ausbaute."
   },
   {
    "name": "Mehmed II.",
    "years": "1432–1481",
    "text": "Eroberte mit 21 Jahren Konstantinopel und ließ Schiffe über Land in das Goldene Horn ziehen."
   },
   {
    "name": "Anna Komnene",
    "years": "1083–1153",
    "text": "Byzantinische Prinzessin und Verfasserin der Alexias – eine der wenigen mittelalterlichen Geschichtsschreiberinnen und Hauptquelle zum Ersten Kreuzzug."
   },
   {
    "name": "Wilhelm von Ockham",
    "years": "ca. 1288–1347",
    "text": "Franziskaner, der aus Avignon zum Kaiser floh und dessen Sparsamkeitsprinzip bis heute wissenschaftliche Methodik prägt."
   },
   {
    "name": "Jan Hus",
    "years": "ca. 1370–1415",
    "text": "Böhmischer Reformator, der trotz kaiserlichen Geleits in Konstanz verbrannt wurde – ein Wortbruch mit jahrzehntelangen Kriegsfolgen."
   },
   {
    "name": "Al-Chwarizmi",
    "years": "ca. 780–850",
    "text": "Sein Buch über das Rechnen gab der Algebra ihren Namen, sein latinisierter Name dem Algorithmus. Beides steckt heute in jeder Zeile Software."
   },
   {
    "name": "Ibn Sina (Avicenna)",
    "years": "980–1037",
    "text": "Arzt und Philosoph aus Buchara. Sein Kanon der Medizin war bis ins 17. Jahrhundert auch an europäischen Universitäten Lehrbuch."
   },
   {
    "name": "Al-Biruni",
    "years": "973–1048",
    "text": "Berechnete den Erdumfang mit wenigen Prozent Abweichung und schrieb eine für seine Zeit erstaunlich unvoreingenommene Beschreibung Indiens – er lernte dafür Sanskrit."
   },
   {
    "name": "Murasaki Shikibu",
    "years": "ca. 978–1014",
    "text": "Hofdame in Heian-Japan, Verfasserin der Geschichte vom Prinzen Genji. Das Werk gilt vielen als der erste Roman der Weltliteratur – geschrieben von einer Frau, in einer Frauenschrift."
   },
   {
    "name": "Sejong",
    "years": "1397–1450",
    "text": "Der koreanische König ließ eine Schrift entwerfen, die jeder in wenigen Tagen lernen kann. Die Gelehrtenelite wehrte sich – genau deshalb setzte er sie durch."
   },
   {
    "name": "Sundiata Keita",
    "years": "ca. 1217–1255",
    "text": "Gründer des Mali-Reichs. Die mit ihm verbundene Kouroukan Fouga ist eine mündlich überlieferte Verfassung mit Rechten und Pflichten der beteiligten Gruppen."
   },
   {
    "name": "K'inich Janaab' Pakal",
    "years": "603–683",
    "text": "Herrscher von Palenque, dessen Grabplatte zu den bekanntesten Zeugnissen der Maya-Kunst zählt. Seine Inschriften erlaubten die Entzifferung der Maya-Schrift."
   },
   {
    "name": "Wu Zetian",
    "years": "624–705",
    "text": "Die einzige Frau, die in China als Kaiserin aus eigenem Recht regierte. Ihre Verwaltung förderte Beamtenprüfungen über Herkunft – die spätere Geschichtsschreibung verteufelte sie umso gründlicher."
   },
   {
    "name": "Rabban Bar Sauma",
    "years": "ca. 1220–1294",
    "text": "Ein in China geborener Mönch reiste als mongolischer Gesandter bis nach Rom, Paris und Bordeaux. Der Bericht spiegelt Europa aus asiatischer Sicht – der umgekehrte Marco Polo."
   }
  ],
  "nations": [
   {
    "name": "Byzantinisches Reich",
    "text": "Oströmisches Reich mit Hauptstadt Konstantinopel, bewahrte über 1000 Jahre antikes Wissen und orthodoxes Christentum."
   },
   {
    "name": "Fränkisches Reich / Heiliges Römisches Reich",
    "text": "Zentrale Macht in West- und Mitteleuropa, Vorläufer moderner europäischer Staaten."
   },
   {
    "name": "Kalifat (Umayyaden, Abbasiden)",
    "text": "Islamische Großreiche mit Blütezeiten in Wissenschaft, Mathematik und Medizin, Zentrum u.a. Bagdad."
   },
   {
    "name": "Mongolenreich",
    "text": "Größtes zusammenhängendes Landreich der Geschichte unter Dschingis Khan und seinen Nachfolgern."
   },
   {
    "name": "Song- und Ming-Dynastie (China)",
    "text": "Chinesische Kaiserreiche mit technologischen Innovationen wie Papiergeld, Schießpulver, Kompass und Porzellankunst."
   },
   {
    "name": "Malireich",
    "text": "Westafrikanisches Großreich mit enormem Goldreichtum, geprägt durch den Herrscher Mansa Musa und Handel über die Sahara."
   },
   {
    "name": "Kiewer Rus",
    "text": "Frühes ostslawisches Reich, Ursprung von Russland, der Ukraine und Weißrussland."
   },
   {
    "name": "Aztekenreich",
    "text": "Mesoamerikanisches Reich mit Hauptstadt Tenochtitlan, geprägt durch Kriegertum, Tributsystem und monumentale Tempelanlagen."
   },
   {
    "name": "Al-Andalus",
    "text": "Muslimisches Iberien mit Córdoba als einer der größten Städte Europas – ein Ort intensiven Austauschs und ebenso realer Konflikte."
   },
   {
    "name": "Republik Venedig",
    "text": "Über tausend Jahre bestehende Seemacht, deren Arsenal Schiffe fast in Serienfertigung baute."
   },
   {
    "name": "Hanse",
    "text": "Ein Bund von Handelsstädten ohne Hauptstadt, Heer oder Verfassung, der jahrhundertelang den Nord- und Ostseehandel beherrschte."
   },
   {
    "name": "Khmer-Reich",
    "text": "Beherrschte das südostasiatische Festland; Angkor war zeitweise die flächengrößte Stadt der vorindustriellen Welt."
   },
   {
    "name": "Inkareich",
    "text": "Ein Großreich mit über 30.000 Kilometern Straßen und Verwaltung ohne Alphabetschrift, gestützt auf Knotenschnüre."
   },
   {
    "name": "Königreich Simbabwe",
    "text": "Im südlichen Afrika entstand eine Steinstadt ohne Mörtel, deren Mauern bis zu elf Meter hoch aufragen."
   },
   {
    "name": "Reich von Ghana",
    "text": "Zwischen Senegal und Niger kontrolliert es den Transsaharahandel mit Gold und Salz – mit dem heutigen Staat Ghana nicht identisch."
   },
   {
    "name": "Srivijaya",
    "text": "Ein Seehandelsreich auf Sumatra, das die Meerenge von Malakka beherrschte und ein Zentrum buddhistischer Gelehrsamkeit war."
   },
   {
    "name": "Delhi-Sultanat",
    "text": "Über drei Jahrhunderte muslimische Herrschaft in Nordindien, aus deren Verwaltungs- und Sprachformen später das Mogulreich schöpfte."
   },
   {
    "name": "Goryeo (Korea)",
    "text": "Von seinem Namen leitet sich das westliche Wort Korea ab. Hier wurde mit Metalllettern gedruckt, zwei Jahrhunderte vor Gutenberg."
   },
   {
    "name": "Heian-Japan",
    "text": "Eine Hofkultur, in der Literatur, Kalligrafie und Zeremoniell wichtiger waren als Militär – und in der Frauen die bedeutendsten Werke schrieben."
   },
   {
    "name": "Kanem-Bornu",
    "text": "Ein Reich am Tschadsee, das in wechselnder Gestalt fast ein Jahrtausend bestand – eine der längsten Staatskontinuitäten Afrikas."
   }
  ],
  "dynastyGroups": [
   {
    "title": "Byzantinische Kaiserdynastien",
    "items": [
     {
      "name": "Justinianische Dynastie (518–602)",
      "text": "Justinian I. lässt das römische Recht kodifizieren, die Hagia Sophia errichten und erobert zeitweise Italien und Nordafrika zurück."
     },
     {
      "name": "Herakleische Dynastie (610–711)",
      "text": "Herakleios wehrt die Perser ab, verliert aber weite Teile des Reiches an die rasch expandierenden arabischen Heere."
     },
     {
      "name": "Makedonische Dynastie (867–1056)",
      "text": "Unter Basileios II. erlebt Byzanz seine größte mittelalterliche Machtentfaltung, u.a. Sieg über das Bulgarenreich."
     },
     {
      "name": "Komnenen-Dynastie (1081–1185)",
      "text": "Nach der schweren Niederlage von Manzikert (1071) stabilisiert Alexios I. das Reich und bittet den Westen um Hilfe – Auslöser der Kreuzzüge."
     },
     {
      "name": "Palaiologen-Dynastie (1259–1453)",
      "text": "Letzte byzantinische Dynastie, zunehmend geschwächtes Restreich, endet mit dem Fall Konstantinopels 1453."
     }
    ]
   },
   {
    "title": "Outremer – die Kreuzfahrerstaaten",
    "items": [
     {
      "name": "Königreich Jerusalem (1099–1291)",
      "text": "Zentraler und mächtigster Kreuzfahrerstaat, gegründet von Gottfried von Bouillon nach der Eroberung Jerusalems 1099; endet mit dem Fall Akkons."
     },
     {
      "name": "Grafschaft Edessa (1098–1150)",
      "text": "Nördlichster und erster gegründeter Kreuzfahrerstaat; sein Fall 1144 löst den Zweiten Kreuzzug aus."
     },
     {
      "name": "Fürstentum Antiochia (1098–1268)",
      "text": "Wichtiger Handels- und Machtknotenpunkt an der nordsyrischen Küste, lange umkämpft zwischen Kreuzfahrern, Byzantinern und muslimischen Nachbarn."
     },
     {
      "name": "Grafschaft Tripolis (1102–1289)",
      "text": "Letzter neu gegründeter Kreuzfahrerstaat, fiel als vorletzter an die ägyptischen Mamluken."
     }
    ]
   },
   {
    "title": "Islamische Kalifate",
    "items": [
     {
      "name": "Rechtgeleitete Kalifen (632–661)",
      "text": "Die ersten vier Nachfolger Mohammeds (u.a. Abu Bakr, Umar, Uthman, Ali) leiten die rasche islamische Expansion über den Nahen Osten und Nordafrika."
     },
     {
      "name": "Umayyaden-Kalifat (661–750)",
      "text": "Mit Hauptstadt Damaskus erreicht das Kalifat seine größte Ausdehnung – von Spanien bis an die Grenzen Indiens."
     },
     {
      "name": "Abbasiden-Kalifat (750–1258)",
      "text": "Bagdad wird zum Zentrum eines 'Goldenen Zeitalters' der Wissenschaft, Philosophie und Medizin; endet mit der mongolischen Eroberung Bagdads."
     },
     {
      "name": "Fatimiden-Kalifat (909–1171)",
      "text": "Schiitisches Gegenkalifat mit Zentrum in Nordafrika und Ägypten, gründete Kairo als neue Hauptstadt."
     }
    ]
   }
  ]
 },
 {
  "id": "fruehe-neuzeit",
  "name": "Frühe Neuzeit",
  "span": "ca. 1500 – 1789",
  "startYear": 1500,
  "endYear": 1789,
  "color": "#8a3020",
  "accent": "#d4a24a",
  "lead": "Reformation, Kolonialismus und die Wissenschaftliche Revolution.",
  "description": "Die Frühe Neuzeit bringt weitreichende Umbrüche: Die Reformation spaltet die Kirche, europäische Mächte errichten Kolonialreiche, und die Wissenschaftliche Revolution verändert das Weltbild grundlegend. Absolutistische Monarchien konzentrieren Macht, während Aufklärung und Bürgertum die Grundlagen für Umwälzungen legen.",
  "literatur": [
   "Jürgen Osterhammel und Niels P. Petersson: Geschichte der Globalisierung",
   "Alfred W. Crosby: The Columbian Exchange",
   "Cambridge History of Early Modern Europe",
   "Encyclopaedia Britannica: Reformation; Age of Discovery; Thirty Years' War"
  ],
  "events": [
   {
    "year": 1498,
    "title": "Vasco da Gama erreicht Indien",
    "text": "Der Portugiese findet den Seeweg um Afrika nach Indien – Grundlage des europäischen Gewürzhandels."
   },
   {
    "year": 1517,
    "title": "Luthers 95 Thesen",
    "text": "Martin Luther veröffentlicht seine Thesen gegen den Ablasshandel – Beginn der Reformation und Kirchenspaltung."
   },
   {
    "year": 1517,
    "title": "Luthers Thesen",
    "text": "Ob sie angeschlagen wurden, ist unsicher – sicher ist, dass der Buchdruck sie binnen Wochen in ganz Deutschland verbreitete."
   },
   {
    "year": 1519,
    "title": "Beginn der Eroberung Mexikos",
    "text": "Hernán Cortés beginnt den Feldzug gegen das Aztekenreich, das binnen zwei Jahren fällt."
   },
   {
    "year": 1521,
    "title": "Reichstag zu Worms",
    "text": "Luther widerruft vor Kaiser Karl V. nicht und wird geächtet – Höhepunkt des frühen Reformationskonflikts."
   },
   {
    "year": 1521,
    "title": "Fall von Tenochtitlán",
    "text": "Cortés siegt mit indigenen Verbündeten und mit Hilfe der Pocken, die die Stadt vorher entvölkert hatten."
   },
   {
    "year": 1522,
    "title": "Vollendung der ersten Weltumsegelung",
    "text": "Magellan selbst stirbt bereits 1521 auf den Philippinen; sein Kapitän Juan Sebastián Elcano vollendet mit den letzten Überlebenden 1522 die erste Erdumsegelung und beweist praktisch die Kugelgestalt der Erde."
   },
   {
    "year": 1524,
    "title": "Deutscher Bauernkrieg",
    "text": "Bäuerliche Aufstände fordern soziale und religiöse Reformen – blutig niedergeschlagener größter Volksaufstand vor der Neuzeit."
   },
   {
    "year": 1533,
    "title": "Eroberung des Inkareichs",
    "text": "Francisco Pizarro erobert mit einer kleinen Truppe das riesige Inkareich in Südamerika."
   },
   {
    "year": 1543,
    "title": "Kopernikanische Wende",
    "text": "Nikolaus Kopernikus veröffentlicht sein heliozentrisches Weltbild – Grundstein der modernen Astronomie."
   },
   {
    "year": 1543,
    "title": "Kopernikus und Vesalius",
    "text": "Im selben Jahr erscheinen das heliozentrische Weltbild und die erste genaue Anatomie des Menschen – zwei Angriffe auf antike Autorität."
   },
   {
    "year": 1545,
    "title": "Konzil von Trient beginnt",
    "text": "Die katholische Kirche reagiert mit Reformen auf die Reformation ('Gegenreformation')."
   },
   {
    "year": 1555,
    "title": "Augsburger Religionsfriede",
    "text": "Der Landesherr bestimmt die Konfession seiner Untertanen. Ein Kompromiss, der Frieden schafft und Gewissensfreiheit ausschließt."
   },
   {
    "year": 1571,
    "title": "Lepanto",
    "text": "Die letzte große Galeerenschlacht der Geschichte stoppt die osmanische Ausdehnung im Mittelmeer – ohne die Machtverhältnisse dauerhaft zu ändern."
   },
   {
    "year": 1588,
    "title": "Untergang der Spanischen Armada",
    "text": "England besiegt die spanische Flotte und etabliert sich als aufstrebende Seemacht."
   },
   {
    "year": 1600,
    "title": "Gründung der britischen Ostindien-Kompanie",
    "text": "Eine private Handelsgesellschaft erhält weitreichende Vollmachten und wird später faktischer Herrscher über weite Teile Indiens."
   },
   {
    "year": 1600,
    "title": "Gründung der Englischen Ostindien-Kompanie",
    "text": "Ein Handelsunternehmen erhält Hoheitsrechte und wird über zwei Jahrhunderte zum faktischen Herrscher Indiens."
   },
   {
    "year": 1602,
    "title": "Gründung der ersten Börse der Welt",
    "text": "Mit der Amsterdamer Börse und den handelbaren Aktien der Niederländischen Ostindien-Kompanie (VOC) entsteht der erste moderne Aktienmarkt der Geschichte."
   },
   {
    "year": 1618,
    "title": "Beginn des Dreißigjährigen Kriegs",
    "text": "Der Prager Fenstersturz löst einen der verheerendsten Kriege der europäischen Geschichte aus."
   },
   {
    "year": 1618,
    "title": "Prager Fenstersturz",
    "text": "Der Auslöser des Dreißigjährigen Krieges, der Mitteleuropa verwüstet und in manchen Regionen ein Drittel der Bevölkerung kostet."
   },
   {
    "year": 1637,
    "title": "Tulpenmanie",
    "text": "In den Niederlanden lösen spekulative Tulpenzwiebel-Preise einen der frühesten dokumentierten Finanzblasen-Crashs der Geschichte aus."
   },
   {
    "year": 1642,
    "title": "Englischer Bürgerkrieg",
    "text": "König und Parlament ringen gewaltsam um die Macht; endet mit der Hinrichtung Karls I."
   },
   {
    "year": 1648,
    "title": "Westfälischer Friede",
    "text": "Der Dreißigjährige Krieg endet; das Prinzip staatlicher Souveränität wird völkerrechtlich verankert."
   },
   {
    "year": 1665,
    "title": "Große Pest von London",
    "text": "Eine der letzten großen Pestepidemien Europas fordert in London zehntausende Todesopfer.",
    "quelle": "Encyclopaedia Britannica: Great Plague of London; zeitgenössische Bills of Mortality mit bekannter Untererfassung"
   },
   {
    "year": 1687,
    "title": "Newtons Principia Mathematica",
    "text": "Isaac Newton formuliert die Gravitationsgesetze und legt die Grundlage der klassischen Physik."
   },
   {
    "year": 1687,
    "title": "Newtons Principia",
    "text": "Ein einziges Gesetz erklärt fallende Äpfel und kreisende Planeten. Die Vorstellung einer berechenbaren Natur setzt sich durch."
   },
   {
    "year": 1688,
    "title": "Glorreiche Revolution",
    "text": "Das englische Parlament setzt König Jakob II. ab und stärkt dauerhaft die parlamentarische Macht."
   },
   {
    "year": 1689,
    "title": "Bill of Rights in England",
    "text": "Die englische Krone wird dauerhaft an das Parlament gebunden – Meilenstein konstitutioneller Monarchie."
   },
   {
    "year": 1701,
    "title": "Krönung des ersten Königs in Preußen",
    "text": "Brandenburg-Preußen wird formal zum Königreich – Aufstieg zur europäischen Militärmacht beginnt."
   },
   {
    "year": 1721,
    "title": "Zar Peter der Große krönt sich zum Kaiser",
    "text": "Russland wird formal zum Kaiserreich und orientiert sich stärker an westeuropäischen Vorbildern."
   },
   {
    "year": 1740,
    "title": "Beginn der Österreichischen Erbfolgekriege",
    "text": "Preußen unter Friedrich II. erobert Schlesien und stellt sich als neue Großmacht gegen Habsburg."
   },
   {
    "year": 1751,
    "title": "Erste Encyclopédie erscheint",
    "text": "Diderot und d'Alembert veröffentlichen ein Kompendium aufklärerischen Wissens – zentrales Werk der Aufklärung."
   },
   {
    "year": 1755,
    "title": "Erdbeben von Lissabon",
    "text": "Zehntausende sterben an Allerheiligen in den Kirchen. Die Katastrophe erschüttert den Glauben an eine gütige Weltordnung und beschäftigt Voltaire, Rousseau und Kant."
   },
   {
    "year": 1756,
    "title": "Beginn des Siebenjährigen Kriegs",
    "text": "Ein globaler Konflikt zwischen den europäischen Großmächten wird teils als 'erster Weltkrieg' bezeichnet."
   },
   {
    "year": 1756,
    "title": "Siebenjähriger Krieg",
    "text": "Auf vier Kontinenten geführt und deshalb oft als erster Weltkrieg bezeichnet; er entscheidet über Nordamerika und Indien."
   },
   {
    "year": 1762,
    "title": "Rousseaus 'Gesellschaftsvertrag'",
    "text": "Jean-Jacques Rousseau entwirft ein einflussreiches Konzept von Volkssouveränität und Gesellschaftsvertrag."
   },
   {
    "year": 1769,
    "title": "James Watts verbesserte Dampfmaschine",
    "text": "Die entscheidend verbesserte Dampfmaschine legt die technische Grundlage der bevorstehenden Industriellen Revolution."
   },
   {
    "year": 1776,
    "title": "US-Unabhängigkeitserklärung",
    "text": "Die 13 amerikanischen Kolonien erklären ihre Unabhängigkeit von Großbritannien."
   },
   {
    "year": 1776,
    "title": "Amerikanische Unabhängigkeitserklärung",
    "text": "Erstmals wird ein Staat auf abstrakte Rechte gegründet – von Männern, von denen viele selbst Sklaven hielten."
   },
   {
    "year": 1783,
    "title": "Erster bemannter Ballonflug",
    "text": "In Paris steigen Menschen zum ersten Mal in die Luft; Benjamin Franklin gehörte zu den Zuschauern."
   },
   {
    "year": 1787,
    "title": "Verfassung der Vereinigten Staaten",
    "text": "Die älteste noch geltende geschriebene Staatsverfassung der Welt, gebaut auf Gewaltenteilung nach Montesquieu."
   },
   {
    "year": 1789,
    "title": "Beginn der Französischen Revolution",
    "text": "Der Sturm auf die Bastille markiert den Beginn eines Umbruchs, der die politische Ordnung Europas verändert."
   }
  ],
  "figures": [
   {
    "name": "Martin Luther",
    "years": "1483–1546",
    "text": "Deutscher Theologe, Auslöser der Reformation, übersetzte die Bibel ins Deutsche und prägte damit die Sprache."
   },
   {
    "name": "Nikolaus Kopernikus",
    "years": "1473–1543",
    "text": "Astronom, begründete das heliozentrische Weltbild gegen die vorherrschende geozentrische Lehre."
   },
   {
    "name": "Hernán Cortés",
    "years": "1485–1547",
    "text": "Spanischer Konquistador, eroberte mit wenigen hundert Männern das Aztekenreich."
   },
   {
    "name": "Galileo Galilei",
    "years": "1564–1642",
    "text": "Physiker und Astronom, verteidigte das kopernikanische Weltbild und geriet in Konflikt mit der Kirche."
   },
   {
    "name": "Elisabeth I.",
    "years": "1533–1603",
    "text": "Englische Königin, führte England zur Seemacht und förderte eine kulturelle Blütezeit (Shakespeare)."
   },
   {
    "name": "Isaac Newton",
    "years": "1643–1727",
    "text": "Physiker und Mathematiker, formulierte die Gravitationsgesetze und die klassische Mechanik."
   },
   {
    "name": "Ludwig XIV.",
    "years": "1638–1715",
    "text": "'Sonnenkönig', Inbegriff des Absolutismus, erbaute Versailles als Machtzentrum Frankreichs."
   },
   {
    "name": "Peter der Große",
    "years": "1672–1725",
    "text": "Russischer Zar, modernisierte Russland nach westeuropäischem Vorbild und gründete St. Petersburg."
   },
   {
    "name": "Friedrich der Große",
    "years": "1712–1786",
    "text": "Preußischer König, machte Preußen durch Kriege und Verwaltungsreformen zur europäischen Großmacht."
   },
   {
    "name": "Maria Theresia",
    "years": "1717–1780",
    "text": "Habsburgische Herrscherin, modernisierte Verwaltung, Bildung und Militär des Habsburgerreichs."
   },
   {
    "name": "Katharina die Große",
    "years": "1729–1796",
    "text": "Russische Zarin, erweiterte das Reich erheblich und förderte Kunst und Aufklärung am Hof."
   },
   {
    "name": "Voltaire",
    "years": "1694–1778",
    "text": "Französischer Aufklärer, Verfechter von Meinungsfreiheit und Kirchenkritik."
   },
   {
    "name": "Adam Smith",
    "years": "1723–1790",
    "text": "Schottischer Ökonom, Begründer der modernen Nationalökonomie mit 'Der Wohlstand der Nationen'."
   },
   {
    "name": "Süleyman der Prächtige",
    "years": "1494–1566",
    "text": "Osmanischer Sultan, führte das Reich zu seiner größten territorialen und kulturellen Blüte."
   },
   {
    "name": "Akbar der Große",
    "years": "1542–1605",
    "text": "Mogulherrscher Indiens, bekannt für religiöse Toleranzpolitik und Verwaltungsreformen in einem riesigen Vielvölkerreich."
   },
   {
    "name": "Oliver Cromwell",
    "years": "1599–1658",
    "text": "Englischer General und Staatsmann, führte den Sturz der Monarchie an und regierte als 'Lordprotektor'."
   },
   {
    "name": "Leonardo da Vinci",
    "years": "1452–1519",
    "text": "Maler, Anatom und Ingenieur, dessen Notizbücher in Spiegelschrift Entwürfe enthalten, die Jahrhunderte voraus waren – und die zu Lebzeiten fast niemand sah."
   },
   {
    "name": "Michelangelo",
    "years": "1475–1564",
    "text": "Bildhauer, Maler und Architekt; er hielt sich zeitlebens für einen Bildhauer, auch während der vier Jahre an der Decke der Sixtinischen Kapelle."
   },
   {
    "name": "Erasmus von Rotterdam",
    "years": "1466–1536",
    "text": "Humanist, der eine kritische Ausgabe des griechischen Neuen Testaments schuf und sich weigerte, sich einer Konfession anzuschließen."
   },
   {
    "name": "Ferdinand Magellan",
    "years": "ca. 1480–1521",
    "text": "Leitete die erste Weltumsegelung, kam auf den Philippinen um; von 270 Mann kehrten 18 zurück."
   },
   {
    "name": "Bartolomé de las Casas",
    "years": "1484–1566",
    "text": "Dominikaner, der die Vernichtung der indigenen Bevölkerung anklagte – und zunächst afrikanische Sklaven als Ersatz vorschlug, was er später bereute."
   },
   {
    "name": "Johannes Kepler",
    "years": "1571–1630",
    "text": "Fand die elliptischen Planetenbahnen; nebenbei verteidigte er seine Mutter erfolgreich in einem Hexenprozess."
   },
   {
    "name": "René Descartes",
    "years": "1596–1650",
    "text": "Begründete den methodischen Zweifel und starb in Stockholm, weil Königin Christine Unterricht um fünf Uhr morgens verlangte."
   },
   {
    "name": "Rembrandt",
    "years": "1606–1669",
    "text": "Malte über vierzig Jahre Selbstporträts – eine Bildautobiografie vom selbstbewussten Jungen bis zum verarmten Alten."
   },
   {
    "name": "Aurangzeb",
    "years": "1618–1707",
    "text": "Dehnte das Mogulreich auf seine größte Ausdehnung aus und überdehnte es zugleich; seine Religionspolitik ist bis heute umstritten."
   },
   {
    "name": "Tokugawa Ieyasu",
    "years": "1543–1616",
    "text": "Begründete das Shogunat, das Japan über 250 Jahre Frieden und weitgehende Abschottung brachte."
   },
   {
    "name": "Anne Bonny",
    "years": "ca. 1697–?",
    "text": "Eine der wenigen namentlich bekannten Piratinnen der Karibik; ihr Prozessausgang ist ungeklärt – sie entging der Hinrichtung durch Schwangerschaft."
   },
   {
    "name": "Olaudah Equiano",
    "years": "ca. 1745–1797",
    "text": "Als Kind verschleppt, kaufte sich frei und schrieb eine Autobiografie, die zur Waffe der britischen Abolitionsbewegung wurde."
   },
   {
    "name": "Nzinga von Ndongo und Matamba",
    "years": "1583–1663",
    "text": "Königin im heutigen Angola, die Portugal jahrzehntelang militärisch und diplomatisch widerstand und dabei zwischen den europäischen Mächten lavierte."
   },
   {
    "name": "Yi Sun-sin",
    "years": "1545–1598",
    "text": "Koreanischer Admiral, der die japanische Invasionsflotte mehrfach schlug. Er wurde zwischenzeitlich degradiert und gefoltert – und übernahm danach erneut das Kommando."
   },
   {
    "name": "Kangxi",
    "years": "1654–1722",
    "text": "Einer der am längsten regierenden Herrscher der Weltgeschichte. Er ließ ein Wörterbuch mit über 47.000 Zeichen erstellen und beschäftigte jesuitische Astronomen am Hof."
   },
   {
    "name": "Abbas I.",
    "years": "1571–1629",
    "text": "Der safawidische Schah machte Isfahan zu einer der prächtigsten Städte der Welt und öffnete Persien dem europäischen Handel – bei gleichzeitiger harter Zentralisierung."
   },
   {
    "name": "Sor Juana Inés de la Cruz",
    "years": "1648–1695",
    "text": "Nonne und Dichterin in Neuspanien, die das Recht von Frauen auf Bildung verteidigte. Kirchlicher Druck zwang sie am Ende zum Schweigen."
   },
   {
    "name": "Guamán Poma de Ayala",
    "years": "ca. 1535–1616",
    "text": "Sein bebildertes Schreiben an den spanischen König dokumentiert die Kolonialherrschaft aus indigener Sicht. Es erreichte den Adressaten nie und wurde erst 1908 in Kopenhagen wiederentdeckt."
   }
  ],
  "nations": [
   {
    "name": "Spanisches Kolonialreich",
    "text": "Erste globale Kolonialmacht, kontrollierte weite Teile Amerikas nach dem Fall der Azteken- und Inkareiche."
   },
   {
    "name": "Osmanisches Reich",
    "text": "Islamisches Großreich, das bis vor Wien vorstieß und weite Teile Südosteuropas, Nordafrikas und des Nahen Ostens beherrschte."
   },
   {
    "name": "Vereinigte Niederlande",
    "text": "Handelsmacht des 'Goldenen Zeitalters' mit globalem Handelsnetz (VOC) und kultureller Blüte."
   },
   {
    "name": "Königreich Preußen",
    "text": "Aufstrebende deutsche Militärmacht, die im 18. Jahrhundert zur europäischen Großmacht aufstieg."
   },
   {
    "name": "Mogulreich (Indien)",
    "text": "Islamisches Großreich in Indien, bekannt für kulturelle Blüte (Taj Mahal) und religiöse Vielfalt."
   },
   {
    "name": "Habsburgerreich",
    "text": "Vielvölkerstaat in Mitteleuropa unter der Dynastie Habsburg, lange prägende Kraft im Heiligen Römischen Reich."
   },
   {
    "name": "Tokugawa-Shogunat (Japan)",
    "text": "Japanisches Herrschaftssystem mit über 250 Jahren weitgehender Isolation und innerer Stabilität ('Edo-Zeit')."
   },
   {
    "name": "Republik Venedig",
    "text": "Noch immer Seemacht, aber im Rückzug – der Handel verlagert sich an den Atlantik."
   },
   {
    "name": "Polen-Litauen",
    "text": "Zeitweise das flächengrößte Land Europas, mit gewähltem König und einem Vetorecht jedes Adligen, das den Staat schließlich lähmte."
   },
   {
    "name": "Safawidenreich",
    "text": "Machte den Zwölferschiismus zur Staatsreligion Persiens – eine Weichenstellung, die bis in die Gegenwart wirkt."
   },
   {
    "name": "Ming- und Qing-China",
    "text": "Das bevölkerungsreichste und lange wirtschaftlich stärkste Reich der Welt, das den Seehandel bewusst begrenzte."
   },
   {
    "name": "Songhai-Reich",
    "text": "Westafrikanische Großmacht mit Timbuktu als Zentrum der Gelehrsamkeit, 1591 durch marokkanische Feuerwaffen zerschlagen."
   },
   {
    "name": "Schwedisches Reich",
    "text": "Vom Dreißigjährigen Krieg bis Poltawa eine europäische Großmacht mit Ostseeherrschaft."
   },
   {
    "name": "Königreich Kongo",
    "text": "Ein zentralafrikanisches Reich, das mit Portugal diplomatische Beziehungen auf Augenhöhe aufnahm – bis der Sklavenhandel das Verhältnis zerstörte."
   },
   {
    "name": "Königreich Benin",
    "text": "Bekannt für seine Bronzegüsse und eine befestigte Hauptstadt, die europäische Besucher mit Amsterdam verglichen. 1897 von britischen Truppen zerstört."
   },
   {
    "name": "Ashanti-Reich",
    "text": "Ein westafrikanisches Reich mit eigener Verwaltung und dem Goldenen Stuhl als Herrschaftssymbol, das den Briten mehrere Kriege lieferte."
   },
   {
    "name": "Joseon (Korea)",
    "text": "Fünf Jahrhunderte konfuzianisch geprägter Herrschaft – eine der langlebigsten Dynastien der Weltgeschichte."
   },
   {
    "name": "Ayutthaya (Siam)",
    "text": "Eine Handelsmetropole, in der portugiesische, japanische, persische und niederländische Viertel nebeneinander bestanden."
   },
   {
    "name": "Oman und Sansibar",
    "text": "Ein Seereich, das die Portugiesen aus Ostafrika vertrieb und seine Hauptstadt später von Arabien nach Afrika verlegte."
   }
  ],
  "dynastyGroups": [
   {
    "title": "Herrscherhäuser der Frühen Neuzeit",
    "items": [
     {
      "name": "Habsburger (Spanien & Österreich)",
      "text": "Karl V. vereinigt kurzzeitig Spanien, Österreich und weite Teile Amerikas unter einer Krone ('Reich, in dem die Sonne nie unterging'); spätere Trennung in eine spanische und österreichische Linie."
     },
     {
      "name": "Bourbonen (Frankreich)",
      "text": "Ab Heinrich IV. (1589) regierende Dynastie, Höhepunkt unter dem 'Sonnenkönig' Ludwig XIV.; endet mit der Hinrichtung Ludwigs XVI. 1793."
     },
     {
      "name": "Osmanische Sultane",
      "text": "Von Süleyman dem Prächtigen (16. Jh.) bis zum allmählichen Niedergang beherrschen die Osmanen Südosteuropa, Nordafrika und den Nahen Osten."
     },
     {
      "name": "Romanov-Zaren (Russland)",
      "text": "Ab 1613 regierende Dynastie; unter Peter dem Großen und Katharina der Großen Aufstieg Russlands zur europäischen Großmacht."
     },
     {
      "name": "Ming- und frühe Qing-Dynastie (China)",
      "text": "Die Ming (bis 1644) fördern Handel und Kultur; die aus der Mandschurei stammenden Qing lösen sie ab und errichten das letzte chinesische Kaiserreich."
     }
    ]
   }
  ]
 },
 {
  "id": "industrialisierung",
  "name": "Revolution & Industrialisierung",
  "span": "1789 – 1914",
  "startYear": 1789,
  "endYear": 1914,
  "color": "#6b1f1f",
  "accent": "#d4af37",
  "lead": "Bürgerliche Revolutionen, Dampfmaschinen und Nationalstaaten.",
  "description": "Das 'lange 19. Jahrhundert' beginnt mit der Französischen Revolution und endet mit dem Ersten Weltkrieg. Die Industrielle Revolution verändert Wirtschaft und Gesellschaft radikal, Nationalstaaten entstehen oder einigen sich (Deutschland, Italien), und europäische Mächte teilen weite Teile der Welt kolonial unter sich auf.",
  "literatur": [
   "Jürgen Osterhammel: Die Verwandlung der Welt. Eine Geschichte des 19. Jahrhunderts",
   "Eric Hobsbawm: Das Zeitalter der Revolution und Das Zeitalter des Kapitals",
   "Christopher A. Bayly: Die Geburt der modernen Welt",
   "Encyclopaedia Britannica: Industrial Revolution; French Revolution"
  ],
  "events": [
   {
    "year": 1789,
    "title": "Französische Revolution",
    "text": "Sturz der absoluten Monarchie in Frankreich, Erklärung der Menschen- und Bürgerrechte."
   },
   {
    "year": 1793,
    "title": "Hinrichtung Ludwigs XVI.",
    "text": "Der französische König wird öffentlich hingerichtet – radikaler Bruch mit der monarchischen Ordnung Europas."
   },
   {
    "year": 1799,
    "title": "Napoleon wird Erster Konsul",
    "text": "Napoleon Bonaparte übernimmt durch Staatsstreich die Macht in Frankreich."
   },
   {
    "year": 1804,
    "title": "Napoleon krönt sich zum Kaiser",
    "text": "Frankreich wird zum Kaiserreich; Napoleon beginnt seine europäischen Eroberungsfeldzüge."
   },
   {
    "year": 1804,
    "title": "Unabhängigkeit Haitis",
    "text": "Nach einem erfolgreichen Sklavenaufstand entsteht die erste unabhängige Schwarze Republik der Welt."
   },
   {
    "year": 1806,
    "title": "Ende des Heiligen Römischen Reiches",
    "text": "Unter napoleonischem Druck legt Kaiser Franz II. die Reichskrone nieder – Ende eines über 800-jährigen Staatsgebildes."
   },
   {
    "year": 1812,
    "title": "Napoleons Russlandfeldzug scheitert",
    "text": "Die 'Grande Armée' wird durch Winter, Logistikprobleme und russischen Widerstand nahezu vernichtet."
   },
   {
    "year": 1815,
    "title": "Schlacht bei Waterloo",
    "text": "Napoleons endgültige Niederlage beendet die napoleonische Ära; der Wiener Kongress ordnet Europa neu."
   },
   {
    "year": 1815,
    "title": "Wiener Kongress",
    "text": "Europas Grenzen werden neu gezogen und für ein Jahrhundert weitgehend stabilisiert – auf Kosten nationaler und liberaler Bewegungen."
   },
   {
    "year": 1830,
    "title": "Erste Eisenbahnlinie",
    "text": "Die Strecke Liverpool–Manchester eröffnet das Zeitalter der Eisenbahn und beschleunigt die Industrialisierung."
   },
   {
    "year": 1833,
    "title": "Abschaffung der Sklaverei im Britischen Empire",
    "text": "Großbritannien verbietet die Sklaverei in seinen Kolonien – wichtiger Schritt der internationalen Abolitionsbewegung."
   },
   {
    "year": 1839,
    "title": "Erster Opiumkrieg",
    "text": "Großbritannien erzwingt den Drogenhandel mit China. Für China beginnt das Jahrhundert der Demütigung."
   },
   {
    "year": 1848,
    "title": "Europäische Revolutionen",
    "text": "In vielen europäischen Staaten fordern Bürger Verfassungen und nationale Einheit – der 'Völkerfrühling' scheitert größtenteils kurzfristig."
   },
   {
    "year": 1848,
    "title": "Kommunistisches Manifest",
    "text": "Marx und Engels veröffentlichen ihre einflussreiche Streitschrift, die spätere sozialistische Bewegungen prägt."
   },
   {
    "year": 1848,
    "title": "Revolutionen in Europa",
    "text": "Von Palermo bis Berlin fordern Bewegungen Verfassungen und Nationalstaaten. Fast alle scheitern – die Ideen setzen sich trotzdem durch."
   },
   {
    "year": 1853,
    "title": "Beginn des Krimkriegs",
    "text": "Ein Konflikt zwischen Russland und einer europäischen Koalition zeigt früh moderne, verlustreiche Kriegsführung."
   },
   {
    "year": 1859,
    "title": "Darwins 'Entstehung der Arten'",
    "text": "Charles Darwins Evolutionstheorie verändert das biologische und philosophische Weltbild grundlegend."
   },
   {
    "year": 1859,
    "title": "Darwins Über die Entstehung der Arten",
    "text": "Die erste Auflage war am Erscheinungstag ausverkauft. Der Mensch verliert seine Sonderstellung in der Natur."
   },
   {
    "year": 1861,
    "title": "Italienische Einigung",
    "text": "Unter Führung Garibaldis und Cavours entsteht ein geeinter italienischer Nationalstaat."
   },
   {
    "year": 1861,
    "title": "Beginn des Amerikanischen Bürgerkriegs",
    "text": "Der Konflikt um Sklaverei und Staatenrechte zwischen Nord- und Südstaaten beginnt."
   },
   {
    "year": 1863,
    "title": "Sklaverei-Emanzipationserklärung (USA)",
    "text": "Abraham Lincoln erklärt die Sklaven in den Konföderierten Staaten für frei."
   },
   {
    "year": 1868,
    "title": "Meiji-Restauration in Japan",
    "text": "Japan modernisiert sich binnen weniger Jahrzehnte radikal nach westlichem Vorbild und wird zur asiatischen Großmacht."
   },
   {
    "year": 1869,
    "title": "Eröffnung des Suezkanals",
    "text": "Die Verbindung zwischen Mittelmeer und Rotem Meer verkürzt den Seeweg nach Asien erheblich."
   },
   {
    "year": 1870,
    "title": "Deutsch-Französischer Krieg",
    "text": "Preußen besiegt Frankreich entscheidend und ebnet den Weg zur deutschen Reichsgründung."
   },
   {
    "year": 1871,
    "title": "Deutsche Reichsgründung",
    "text": "Nach dem Sieg über Frankreich wird das Deutsche Kaiserreich im Spiegelsaal von Versailles ausgerufen."
   },
   {
    "year": 1876,
    "title": "Erfindung des Telefons",
    "text": "Alexander Graham Bell meldet das Telefon zum Patent an – Beginn der modernen Telekommunikation."
   },
   {
    "year": 1879,
    "title": "Erfindung der Glühlampe",
    "text": "Thomas Edison entwickelt eine praxistaugliche Glühlampe und treibt die Elektrifizierung voran."
   },
   {
    "year": 1884,
    "title": "Berliner Kongo-Konferenz",
    "text": "Europäische Mächte teilen Afrika weitgehend ohne Beteiligung der Betroffenen unter sich auf."
   },
   {
    "year": 1886,
    "title": "Haymarket und der 1. Mai",
    "text": "Nach der Eskalation einer Kundgebung für den Achtstundentag in Chicago wird der 1. Mai zum internationalen Tag der Arbeit."
   },
   {
    "year": 1893,
    "title": "Neuseeland führt Frauenwahlrecht ein",
    "text": "Als erstes Land der Welt gewährt Neuseeland Frauen das aktive Wahlrecht."
   },
   {
    "year": 1896,
    "title": "Adwa",
    "text": "Äthiopien schlägt Italien und bleibt als einziger afrikanischer Staat unkolonisiert – ein Ereignis mit weltweiter Signalwirkung."
   },
   {
    "year": 1903,
    "title": "Erster motorisierter Flug",
    "text": "Die Gebrüder Wright gelingt in Kitty Hawk der erste kontrollierte Motorflug."
   },
   {
    "year": 1904,
    "title": "Russisch-Japanischer Krieg",
    "text": "Japan besiegt erstmals eine europäische Großmacht – Schock für das europäische Selbstverständnis."
   },
   {
    "year": 1905,
    "title": "Einsteins Relativitätstheorie",
    "text": "Albert Einstein veröffentlicht seine spezielle Relativitätstheorie und verändert das physikalische Weltbild."
   },
   {
    "year": 1905,
    "title": "Russische Revolution von 1905",
    "text": "Massenproteste erzwingen von Zar Nikolaus II. erste Zugeständnisse – Vorbote der Revolution von 1917."
   },
   {
    "year": 1908,
    "title": "Fließbandproduktion bei Ford",
    "text": "Henry Ford revolutioniert mit der Massenfertigung des Model T die industrielle Produktion."
   },
   {
    "year": 1912,
    "title": "Untergang der Titanic",
    "text": "Der als unsinkbar geltende Ozeandampfer sinkt auf seiner Jungfernfahrt – über 1500 Menschen sterben."
   }
  ],
  "figures": [
   {
    "name": "Napoleon Bonaparte",
    "years": "1769–1821",
    "text": "Französischer Feldherr und Kaiser, prägte Europa militärisch und rechtlich (Code Civil) nachhaltig."
   },
   {
    "name": "Simón Bolívar",
    "years": "1783–1830",
    "text": "'Der Befreier' Südamerikas, führte mehrere Staaten in die Unabhängigkeit von Spanien."
   },
   {
    "name": "Otto von Bismarck",
    "years": "1815–1898",
    "text": "Preußischer Staatsmann, 'Reichsgründer' Deutschlands durch geschickte Diplomatie und drei Kriege."
   },
   {
    "name": "Abraham Lincoln",
    "years": "1809–1865",
    "text": "US-Präsident während des Bürgerkriegs, beendete die Sklaverei, wurde kurz nach Kriegsende ermordet."
   },
   {
    "name": "Königin Victoria",
    "years": "1819–1901",
    "text": "Britische Monarchin, unter deren langer Herrschaft das britische Weltreich seine größte Ausdehnung erreichte."
   },
   {
    "name": "Giuseppe Garibaldi",
    "years": "1807–1882",
    "text": "Italienischer Freiheitskämpfer, Schlüsselfigur der italienischen Einigung."
   },
   {
    "name": "Charles Darwin",
    "years": "1809–1882",
    "text": "Naturforscher, begründete mit der Evolutionstheorie ein neues biologisches Weltbild."
   },
   {
    "name": "Karl Marx",
    "years": "1818–1883",
    "text": "Philosoph und Ökonom, prägte mit dem 'Kapital' die Kapitalismuskritik und sozialistische Bewegungen."
   },
   {
    "name": "Thomas Edison",
    "years": "1847–1931",
    "text": "US-Erfinder, meldete über 1000 Patente an, darunter die praxistaugliche Glühlampe."
   },
   {
    "name": "Louis Pasteur",
    "years": "1822–1895",
    "text": "Französischer Chemiker und Mikrobiologe, begründete die moderne Bakteriologie und Impfstoffentwicklung."
   },
   {
    "name": "Marie Curie",
    "years": "1867–1934",
    "text": "Physikerin und Chemikerin, erforschte Radioaktivität und erhielt als einzige Frau bislang Nobelpreise in zwei Naturwissenschaften."
   },
   {
    "name": "Florence Nightingale",
    "years": "1820–1910",
    "text": "Britische Krankenpflegerin, begründete durch ihre Arbeit im Krimkrieg die moderne, hygieneorientierte Krankenpflege."
   },
   {
    "name": "Sun Yat-sen",
    "years": "1866–1925",
    "text": "Chinesischer Revolutionär, führend an der Xinhai-Revolution beteiligt, gilt als 'Vater' der Republik China."
   },
   {
    "name": "James Watt",
    "years": "1736–1819",
    "text": "Verbesserte die Dampfmaschine entscheidend durch den getrennten Kondensator – der Motor der Industrialisierung."
   },
   {
    "name": "Ada Lovelace",
    "years": "1815–1852",
    "text": "Erkannte, dass eine Rechenmaschine mehr könnte als rechnen, und schrieb das, was als erstes Computerprogramm gilt – hundert Jahre vor der ersten Maschine."
   },
   {
    "name": "Michael Faraday",
    "years": "1791–1867",
    "text": "Buchbinderlehrling ohne Schulbildung in Mathematik, der die elektromagnetische Induktion entdeckte und damit das Stromzeitalter ermöglichte."
   },
   {
    "name": "Toussaint Louverture",
    "years": "ca. 1743–1803",
    "text": "Führte den einzigen erfolgreichen Sklavenaufstand der Geschichte in Haiti; er starb in französischer Gefangenschaft im Jura."
   },
   {
    "name": "Frederick Douglass",
    "years": "1818–1895",
    "text": "Aus der Sklaverei geflohen, wurde er der wirkungsvollste Redner der Abolitionsbewegung und Berater Lincolns."
   },
   {
    "name": "Harriet Tubman",
    "years": "ca. 1822–1913",
    "text": "Führte auf der Underground Railroad wiederholt Versklavte in die Freiheit und diente im Bürgerkrieg als Spähern und Kundschafterin."
   },
   {
    "name": "Alexander von Humboldt",
    "years": "1769–1859",
    "text": "Beschrieb die Natur als vernetztes Ganzes und warnte früh vor menschengemachten Klimaveränderungen durch Abholzung."
   },
   {
    "name": "Gregor Mendel",
    "years": "1822–1884",
    "text": "Augustinermönch, dessen Erbsenversuche die Vererbungsregeln offenlegten – und die 35 Jahre lang niemand zur Kenntnis nahm."
   },
   {
    "name": "Ignaz Semmelweis",
    "years": "1818–1865",
    "text": "Senkte die Sterblichkeit im Kindbett durch Händedesinfektion drastisch, wurde von der Fachwelt abgelehnt und starb in einer Anstalt."
   },
   {
    "name": "Cixi",
    "years": "1835–1908",
    "text": "Beherrschte China fast fünfzig Jahre als Kaiserinwitwe; ihre Rolle beim Scheitern der Reformen ist umstritten."
   },
   {
    "name": "Meiji-Tenno",
    "years": "1852–1912",
    "text": "Unter seiner Regierung verwandelte sich Japan binnen einer Generation vom Feudalstaat zur Industriemacht."
   },
   {
    "name": "Kate Sheppard",
    "years": "1848–1934",
    "text": "Führende Stimme der neuseeländischen Frauenwahlrechtsbewegung. 1893 führte Neuseeland als erstes Land das allgemeine Frauenwahlrecht ein."
   },
   {
    "name": "Ida B. Wells",
    "years": "1862–1931",
    "text": "Journalistin, die Lynchmorde in den Südstaaten systematisch dokumentierte und damit die Rechtfertigungslegenden widerlegte."
   },
   {
    "name": "Shaka",
    "years": "ca. 1787–1828",
    "text": "Begründer des Zulu-Reichs, dem tiefgreifende militärische Neuerungen zugeschrieben werden. Wie viel davon auf ihn zurückgeht und wie viel spätere Zuschreibung ist, ist umstritten."
   },
   {
    "name": "Usman dan Fodio",
    "years": "1754–1817",
    "text": "Gelehrter und Reformer, dessen Bewegung das Sokoto-Kalifat begründete – einen der größten afrikanischen Staaten des 19. Jahrhunderts."
   },
   {
    "name": "Menelik II.",
    "years": "1844–1913",
    "text": "Der äthiopische Kaiser schlug 1896 bei Adwa eine italienische Invasionsarmee. Äthiopien blieb als einziger afrikanischer Staat unkolonisiert."
   },
   {
    "name": "Samory Touré",
    "years": "ca. 1830–1900",
    "text": "Baute in Westafrika ein Reich auf und leistete Frankreich fast zwei Jahrzehnte militärischen Widerstand, unter anderem mit selbst hergestellten Gewehren."
   },
   {
    "name": "José Rizal",
    "years": "1861–1896",
    "text": "Arzt und Schriftsteller, dessen Romane die spanische Kolonialherrschaft auf den Philippinen bloßstellten. Seine Hinrichtung machte ihn zur Leitfigur der Unabhängigkeitsbewegung."
   },
   {
    "name": "Rammohan Roy",
    "years": "1772–1833",
    "text": "Reformer in Bengalen, der gegen die Witwenverbrennung und für Bildung eintrat – und dabei sowohl hinduistische Tradition als auch britische Bevormundung kritisierte."
   },
   {
    "name": "Yaa Asantewaa",
    "years": "ca. 1840–1921",
    "text": "Führte 1900 den Aufstand der Aschanti gegen die Briten an, nachdem die männlichen Führer zögerten. Sie starb in der Verbannung auf den Seychellen."
   }
  ],
  "nations": [
   {
    "name": "Britisches Weltreich",
    "text": "Größtes Kolonialreich der Geschichte, über das 'die Sonne nie unterging', Vorreiter der Industrialisierung."
   },
   {
    "name": "Deutsches Kaiserreich",
    "text": "1871 gegründeter Nationalstaat, wurde binnen weniger Jahrzehnte zur führenden Industrie- und Militärmacht Europas."
   },
   {
    "name": "USA (werdende Weltmacht)",
    "text": "Wuchs durch Westexpansion, Industrialisierung und Einwanderung zur wirtschaftlichen Großmacht heran."
   },
   {
    "name": "Meiji-Japan",
    "text": "Modernisierte sich nach 1868 rasant nach westlichem Vorbild und besiegte 1905 als erste asiatische Macht ein europäisches Reich."
   },
   {
    "name": "Österreich-Ungarn",
    "text": "Vielvölkerstaat in Mitteleuropa, dessen innere Spannungen maßgeblich zum Ersten Weltkrieg beitrugen."
   },
   {
    "name": "Zarenreich Russland",
    "text": "Riesiges, agrarisch geprägtes Kaiserreich mit wachsenden sozialen Spannungen vor der Revolution von 1917."
   },
   {
    "name": "Französisches Kolonialreich",
    "text": "Nach dem Verlust Nordamerikas neu aufgebaut in Afrika und Indochina – nach Großbritannien das zweitgrößte."
   },
   {
    "name": "Königreich Italien",
    "text": "1861 vereinigt, aber innerlich gespalten zwischen industrialisiertem Norden und agrarischem Süden."
   },
   {
    "name": "Osmanisches Reich",
    "text": "Der kranke Mann am Bosporus – Reformversuche und Gebietsverluste prägen das Jahrhundert."
   },
   {
    "name": "Qing-China",
    "text": "Von Opiumkriegen, Aufständen und ungleichen Verträgen zerrieben; der Taiping-Aufstand kostete Millionen Menschenleben."
   },
   {
    "name": "Lateinamerikanische Republiken",
    "text": "Nach der Unabhängigkeit zwischen Caudillo-Herrschaft, Bürgerkriegen und wirtschaftlicher Abhängigkeit."
   },
   {
    "name": "Kongo-Freistaat",
    "text": "Privatbesitz König Leopolds II., dessen Kautschukwirtschaft Millionen Opfer forderte und den ersten internationalen Menschenrechtsskandal auslöste."
   },
   {
    "name": "Zulu-Reich",
    "text": "Ein zentralisierter Militärstaat im südlichen Afrika, der 1879 einer britischen Kolonne eine vernichtende Niederlage beibrachte."
   },
   {
    "name": "Sokoto-Kalifat",
    "text": "Aus einer Reformbewegung hervorgegangen, war es einer der größten und am dichtesten verwalteten Staaten Afrikas im 19. Jahrhundert."
   },
   {
    "name": "Kaiserreich Äthiopien",
    "text": "Der einzige afrikanische Staat, der die europäische Aufteilung des Kontinents unbesiegt überstand."
   },
   {
    "name": "Königreich Hawaii",
    "text": "Ein international anerkannter Staat mit Verträgen und Gesandtschaften – 1893 durch einen von amerikanischen Geschäftsleuten getragenen Umsturz beendet."
   },
   {
    "name": "Königreich Siam",
    "text": "Das einzige Land Südostasiens, das formal unabhängig blieb, indem es zwischen britischen und französischen Interessen manövrierte."
   }
  ],
  "dynastyGroups": [
   {
    "title": "Deutsches Kaiserreich – Kaiser & Kanzler",
    "items": [
     {
      "name": "Wilhelm I. & Otto von Bismarck (1871–1888/1890)",
      "text": "Erster deutscher Kaiser und sein 'Eiserner Kanzler' prägen Reichsgründung, Sozialgesetzgebung und ein komplexes Bündnissystem zur Kriegsvermeidung."
     },
     {
      "name": "Wilhelm II. (1888–1918)",
      "text": "Letzter deutscher Kaiser, entließ Bismarck, verfolgte aggressive Flotten- und Weltpolitik und dankte 1918 nach der Niederlage ab."
     }
    ]
   },
   {
    "title": "Frankreich – Wechselnde Regime",
    "items": [
     {
      "name": "Zweites Kaiserreich (1852–1870)",
      "text": "Napoleon III. (Neffe Napoleons I.) regiert autoritär, modernisiert Paris grundlegend, scheitert militärisch gegen Preußen 1870."
     },
     {
      "name": "Dritte Republik (1870–1940)",
      "text": "Nach Napoleons III. Sturz entsteht eine langlebige parlamentarische Republik, die Frankreich durch den Ersten Weltkrieg führt."
     }
    ]
   },
   {
    "title": "Späte Qing-Dynastie (China)",
    "items": [
     {
      "name": "Kaiserinwitwe Cixi (Regentschaft 1861–1908)",
      "text": "De-facto-Herrscherin Chinas in einer Phase wachsenden westlichen Drucks, gescheiterter Reformversuche und innerer Aufstände (u.a. Boxeraufstand 1900)."
     },
     {
      "name": "Ende des chinesischen Kaisertums (1912)",
      "text": "Nach über 2000 Jahren Kaiserherrschaft wird China nach der Xinhai-Revolution Republik – der letzte Kaiser Puyi dankt als Kind ab."
     }
    ]
   },
   {
    "title": "Meiji-Japan",
    "items": [
     {
      "name": "Kaiser Meiji (1867–1912)",
      "text": "Unter seiner Herrschaft modernisiert sich Japan in wenigen Jahrzehnten von einem isolierten Feudalstaat zur asiatischen Industrie- und Militärmacht."
     }
    ]
   }
  ]
 },
 {
  "id": "moderne",
  "name": "20./21. Jahrhundert",
  "span": "1914 – heute",
  "startYear": 1914,
  "endYear": 2026,
  "color": "#a01f1f",
  "accent": "#e8c14a",
  "lead": "Weltkriege, Digitalisierung und eine vernetzte Welt.",
  "description": "Kein Jahrhundert veränderte die Welt so schnell wie das 20. Jahrhundert: zwei Weltkriege, der Kalte Krieg, Dekolonisierung, technologische Revolutionen von der Raumfahrt bis zum Internet. Das 21. Jahrhundert ist geprägt von Globalisierung, Digitalisierung und neuen geopolitischen Verschiebungen.",
  "literatur": [
   "Ian Kershaw: Höllensturz. Europa 1914 bis 1949, und Achterbahn. Europa 1950 bis heute",
   "Eric Hobsbawm: Das Zeitalter der Extreme",
   "Tony Judt: Postwar. Eine Geschichte Europas seit 1945",
   "Encyclopaedia Britannica: World War I; World War II; Cold War"
  ],
  "events": [
   {
    "year": 1914,
    "title": "Beginn des Ersten Weltkriegs",
    "text": "Das Attentat von Sarajevo löst eine Kette von Bündnisfällen aus, die in einen globalen Krieg mündet."
   },
   {
    "year": 1914,
    "title": "Der Schlieffenplan scheitert",
    "text": "Deutschlands Plan eines schnellen Zangenangriffs gegen Frankreich über Belgien soll einen Zweifrontenkrieg vermeiden – gerät aber ins Stocken und mündet in einen langwierigen Stellungskrieg."
   },
   {
    "year": 1914,
    "title": "Erste Marneschlacht",
    "text": "Französische und britische Truppen stoppen den deutschen Vormarsch vor Paris – das Scheitern des Schlieffenplans wird endgültig besiegelt."
   },
   {
    "year": 1915,
    "title": "Gallipoli-Kampagne",
    "text": "Ein alliierter Angriff auf die Dardanellen gegen das Osmanische Reich scheitert verlustreich; wichtiger Karrierestart für den späteren australischen und türkischen Nationalstolz (Atatürk)."
   },
   {
    "year": 1916,
    "title": "Schlacht um Verdun",
    "text": "Eine der verlustreichsten Schlachten der Geschichte symbolisiert das Grauen des Stellungskriegs. Die Angaben zu den Verlusten beider Seiten reichen von rund 700.000 bis über 900.000 Tote und Verwundete.",
    "quelle": "Encyclopaedia Britannica: Battle of Verdun; die Spannweite ergibt sich aus unterschiedlicher Zählweise beider Armeen"
   },
   {
    "year": 1916,
    "title": "Schlacht an der Somme",
    "text": "Mit über einer Million Opfern eine der blutigsten Schlachten der Menschheitsgeschichte; erster Panzereinsatz der Kriegsgeschichte.",
    "quelle": "Encyclopaedia Britannica: Battle of the Somme; Imperial War Museum zum ersten Panzereinsatz im September 1916"
   },
   {
    "year": 1916,
    "title": "Seeschlacht am Skagerrak (Jutland)",
    "text": "Größte Seeschlacht des Ersten Weltkriegs zwischen deutscher und britischer Flotte, taktisch unentschieden, strategisch bleibt Großbritannien Seemacht Nr. 1."
   },
   {
    "year": 1917,
    "title": "Russische Oktoberrevolution",
    "text": "Die Bolschewiki unter Lenin übernehmen die Macht – Beginn der Sowjetunion."
   },
   {
    "year": 1918,
    "title": "Friede von Brest-Litowsk",
    "text": "Sowjetrussland scheidet unter harten Bedingungen aus dem Krieg aus – Deutschland kann Truppen an die Westfront verlegen."
   },
   {
    "year": 1918,
    "title": "Ende des Ersten Weltkriegs",
    "text": "Waffenstillstand von Compiègne beendet den Krieg; Millionen Tote und der Zusammenbruch mehrerer Reiche prägen die Folgen.",
    "quelle": "Encyclopaedia Britannica: World War I, Abschnitt Killed, wounded, and missing"
   },
   {
    "year": 1918,
    "title": "Spanische Grippe",
    "text": "Die Pandemie tötet mehr Menschen als der Erste Weltkrieg; die Schätzungen reichen von 25 bis über 50 Millionen. Ihr Name täuscht: Spanien zensierte nur nicht.",
    "quelle": "Encyclopaedia Britannica: Influenza pandemic of 1918–19; die Spanne spiegelt fehlende Erfassung außerhalb Europas und Nordamerikas"
   },
   {
    "year": 1919,
    "title": "Vertrag von Versailles",
    "text": "Deutschland wird zu hohen Reparationen und Gebietsabtretungen verpflichtet – belastet die Weimarer Republik schwer."
   },
   {
    "year": 1922,
    "title": "Gründung der Sowjetunion",
    "text": "Aus dem russischen Bürgerkrieg geht die UdSSR als kommunistischer Vielvölkerstaat hervor."
   },
   {
    "year": 1929,
    "title": "Weltwirtschaftskrise",
    "text": "Der Börsencrash an der Wall Street löst eine globale Wirtschaftskrise mit Massenarbeitslosigkeit aus."
   },
   {
    "year": 1933,
    "title": "Machtübernahme der Nationalsozialisten",
    "text": "Adolf Hitler wird deutscher Reichskanzler – Beginn der NS-Diktatur."
   },
   {
    "year": 1936,
    "title": "Spanischer Bürgerkrieg beginnt",
    "text": "Ein blutiger Konflikt zwischen Republikanern und Franco-Anhängern wird zum Vorspiel des Zweiten Weltkriegs."
   },
   {
    "year": 1939,
    "title": "Beginn des Zweiten Weltkriegs",
    "text": "Der deutsche Überfall auf Polen löst den bislang verheerendsten Krieg der Geschichte aus."
   },
   {
    "year": 1940,
    "title": "Westfeldzug und Fall Frankreichs",
    "text": "Mit einer schnellen 'Blitzkrieg'-Strategie besiegt die Wehrmacht Frankreich binnen sechs Wochen; britische Truppen entkommen bei Dünkirchen."
   },
   {
    "year": 1940,
    "title": "Luftschlacht um England",
    "text": "Die deutsche Luftwaffe scheitert an der Royal Air Force – erste große Niederlage NS-Deutschlands verhindert eine geplante Invasion Großbritanniens."
   },
   {
    "year": 1941,
    "title": "Unternehmen Barbarossa",
    "text": "Deutschland überfällt die Sowjetunion mit der größten Invasionsstreitmacht der Geschichte – Bruch des Hitler-Stalin-Pakts und Beginn des Vernichtungskriegs im Osten."
   },
   {
    "year": 1941,
    "title": "Angriff auf Pearl Harbor",
    "text": "Japans Überraschungsangriff bringt die USA in den Zweiten Weltkrieg."
   },
   {
    "year": 1942,
    "title": "Wannseekonferenz",
    "text": "NS-Funktionäre planen die systematische Ermordung der europäischen Juden – organisatorischer Kern des Holocaust."
   },
   {
    "year": 1942,
    "title": "Schlacht von Midway",
    "text": "Die US-Marine besiegt die japanische Flotte entscheidend im Pazifik – Wendepunkt des Krieges gegen Japan."
   },
   {
    "year": 1942,
    "title": "Zweite Schlacht von El Alamein",
    "text": "Die Alliierten unter Montgomery besiegen das deutsch-italienische Afrikakorps unter Rommel entscheidend in Nordafrika."
   },
   {
    "year": 1943,
    "title": "Schlacht von Stalingrad endet",
    "text": "Die Kapitulation der eingekesselten deutschen 6. Armee gilt als entscheidender Wendepunkt des Krieges an der Ostfront."
   },
   {
    "year": 1944,
    "title": "Landung in der Normandie (D-Day)",
    "text": "Alliierte Truppen eröffnen die Westfront gegen NS-Deutschland – Wendepunkt des Kriegs in Europa."
   },
   {
    "year": 1945,
    "title": "Ende des Zweiten Weltkriegs / Atombombenabwürfe",
    "text": "Nach den Atombombenabwürfen auf Hiroshima und Nagasaki kapituliert Japan. Der Krieg fordert weltweit schätzungsweise 60 bis 80 Millionen Tote, die Mehrzahl davon Zivilisten.",
    "quelle": "Encyclopaedia Britannica: World War II, Abschnitt Costs of the war"
   },
   {
    "year": 1945,
    "title": "Gründung der Vereinten Nationen",
    "text": "Als Lehre aus zwei Weltkriegen entsteht eine internationale Organisation zur Sicherung von Frieden und Zusammenarbeit."
   },
   {
    "year": 1947,
    "title": "Unabhängigkeit Indiens",
    "text": "Nach jahrzehntelangem gewaltfreiem Widerstand wird Indien unabhängig. Die Teilung löst zugleich die größte Fluchtbewegung der Geschichte aus: rund 15 Millionen Menschen verlieren ihre Heimat, die Schätzungen der Toten reichen von 200.000 bis zwei Millionen.",
    "quelle": "Encyclopaedia Britannica: Partition of India; die weite Spanne der Opferzahlen ist in der Forschung unstrittig ungeklärt"
   },
   {
    "year": 1948,
    "title": "Gründung des Staates Israel",
    "text": "Nach dem UN-Teilungsplan wird der Staat Israel ausgerufen – Beginn anhaltender Nahostkonflikte."
   },
   {
    "year": 1948,
    "title": "Allgemeine Erklärung der Menschenrechte",
    "text": "Von der UN-Vollversammlung verabschiedet, ohne Gegenstimme, mit acht Enthaltungen – rechtlich nicht bindend, politisch folgenreich."
   },
   {
    "year": 1949,
    "title": "Gründung von BRD und DDR",
    "text": "Deutschland wird in zwei Staaten geteilt – Ausdruck des beginnenden Kalten Krieges."
   },
   {
    "year": 1949,
    "title": "Gründung der Volksrepublik China",
    "text": "Mao Zedong ruft nach dem Sieg im Bürgerkrieg die Volksrepublik aus."
   },
   {
    "year": 1950,
    "title": "Beginn des Koreakriegs",
    "text": "Der Konflikt zwischen Nord- und Südkorea wird zum ersten großen 'Stellvertreterkrieg' des Kalten Krieges."
   },
   {
    "year": 1955,
    "title": "Rosa Parks' Widerstand",
    "text": "Ihre Weigerung, ihren Bussitzplatz zu räumen, wird zum Fanal der US-Bürgerrechtsbewegung."
   },
   {
    "year": 1957,
    "title": "Sputnik",
    "text": "Der erste Satellit löst im Westen einen Schock aus und startet das Wettrennen ins All."
   },
   {
    "year": 1961,
    "title": "Bau der Berliner Mauer",
    "text": "Die DDR riegelt West-Berlin ab – Symbol der deutschen und europäischen Teilung."
   },
   {
    "year": 1961,
    "title": "Erster Mensch im Weltraum",
    "text": "Der Sowjetkosmonaut Juri Gagarin umkreist als erster Mensch die Erde."
   },
   {
    "year": 1962,
    "title": "Kubakrise",
    "text": "Die Welt steht am Rand eines Atomkriegs zwischen den USA und der Sowjetunion – wird diplomatisch entschärft."
   },
   {
    "year": 1963,
    "title": "'I Have a Dream'-Rede",
    "text": "Martin Luther King hält seine berühmte Rede beim Marsch auf Washington für Bürgerrechte."
   },
   {
    "year": 1969,
    "title": "Erste Mondlandung",
    "text": "Neil Armstrong und Buzz Aldrin betreten als erste Menschen den Mond – Höhepunkt des Wettlaufs ins All."
   },
   {
    "year": 1972,
    "title": "Die Grenzen des Wachstums",
    "text": "Der Bericht des Club of Rome bringt erstmals einer breiten Öffentlichkeit nahe, dass unbegrenztes Wachstum auf einem endlichen Planeten nicht geht."
   },
   {
    "year": 1973,
    "title": "Ölkrise",
    "text": "Ein Öl-Embargo arabischer Staaten löst weltweit wirtschaftliche Schockwellen aus."
   },
   {
    "year": 1975,
    "title": "Ende des Vietnamkriegs",
    "text": "Der Fall Saigons beendet einen der prägendsten und umstrittensten Kriege des Kalten Krieges."
   },
   {
    "year": 1986,
    "title": "Reaktorkatastrophe von Tschernobyl",
    "text": "Die schwerste Atomkatastrophe der Geschichte kontaminiert weite Teile der Ukraine und Belarus."
   },
   {
    "year": 1986,
    "title": "Tschernobyl",
    "text": "Der Reaktorunfall verstrahlt weite Teile Europas und beschädigt das Vertrauen in die sowjetische Führung nachhaltig."
   },
   {
    "year": 1989,
    "title": "Fall der Berliner Mauer",
    "text": "Friedliche Proteste führen zur Maueröffnung – Symbol des Endes des Kalten Krieges."
   },
   {
    "year": 1989,
    "title": "Proteste auf dem Tiananmen-Platz",
    "text": "Die chinesische Regierung schlägt Demokratieproteste in Peking gewaltsam nieder."
   },
   {
    "year": 1990,
    "title": "Deutsche Wiedervereinigung",
    "text": "BRD und DDR vereinigen sich zu einem gemeinsamen Staat."
   },
   {
    "year": 1991,
    "title": "Auflösung der Sowjetunion",
    "text": "Die UdSSR zerfällt in unabhängige Staaten – Ende des Kalten Krieges."
   },
   {
    "year": 1991,
    "title": "Erstes World Wide Web geht online",
    "text": "Tim Berners-Lee veröffentlicht die erste Webseite – Grundstein des heutigen Internets."
   },
   {
    "year": 1994,
    "title": "Ende der Apartheid",
    "text": "Nelson Mandela wird nach den ersten freien Wahlen erster schwarzer Präsident Südafrikas."
   },
   {
    "year": 1994,
    "title": "Völkermord in Ruanda",
    "text": "In gut hundert Tagen werden schätzungsweise 500.000 bis 800.000 Menschen getötet, überwiegend Tutsi, während die internationale Gemeinschaft ihre Truppen abzieht.",
    "quelle": "Vereinte Nationen: Outreach Programme on the 1994 Genocide against the Tutsi in Rwanda"
   },
   {
    "year": 2001,
    "title": "Terroranschläge vom 11. September",
    "text": "Anschläge auf das World Trade Center verändern globale Sicherheitspolitik nachhaltig."
   },
   {
    "year": 2001,
    "title": "Anschläge des 11. September",
    "text": "Der Angriff auf New York und Washington leitet zwei Jahrzehnte Kriege, Überwachungsausbau und veränderte Sicherheitspolitik ein."
   },
   {
    "year": 2002,
    "title": "Einführung des Euro-Bargelds",
    "text": "Zwölf europäische Staaten führen eine gemeinsame Währung ein – bislang größtes Geldumstellungsprojekt der Geschichte."
   },
   {
    "year": 2008,
    "title": "Globale Finanzkrise",
    "text": "Die Immobilienkrise in den USA löst eine weltweite Banken- und Wirtschaftskrise aus."
   },
   {
    "year": 2008,
    "title": "Weltfinanzkrise",
    "text": "Der Zusammenbruch von Lehman Brothers löst die schwerste Wirtschaftskrise seit 1929 aus und verändert das Vertrauen in Finanzmärkte."
   },
   {
    "year": 2011,
    "title": "Arabischer Frühling",
    "text": "Massenproteste stürzen mehrere autoritäre Regierungen in Nordafrika und dem Nahen Osten."
   },
   {
    "year": 2015,
    "title": "Pariser Klimaabkommen",
    "text": "195 Staaten einigen sich erstmals auf ein gemeinsames Ziel zur Begrenzung der Erderwärmung – ohne verbindliche Sanktionen."
   },
   {
    "year": 2016,
    "title": "Brexit-Referendum",
    "text": "Das Vereinigte Königreich stimmt für den Austritt aus der Europäischen Union."
   },
   {
    "year": 2020,
    "title": "COVID-19-Pandemie",
    "text": "Eine globale Pandemie führt zu Lockdowns, wirtschaftlichen Einbrüchen und beschleunigter Digitalisierung weltweit."
   },
   {
    "year": 2022,
    "title": "Russischer Überfall auf die Ukraine",
    "text": "Russland beginnt einen großangelegten Angriffskrieg – größter zwischenstaatlicher Krieg in Europa seit 1945."
   },
   {
    "year": 2022,
    "title": "Öffentlicher Durchbruch generativer KI",
    "text": "Chatbots wie ChatGPT machen große Sprachmodelle einem Massenpublikum zugänglich und lösen weltweite Debatten über KI aus."
   }
  ],
  "figures": [
   {
    "name": "Winston Churchill",
    "years": "1874–1965",
    "text": "Britischer Premierminister, führte Großbritannien durch den Zweiten Weltkrieg gegen NS-Deutschland."
   },
   {
    "name": "Adolf Hitler",
    "years": "1889–1945",
    "text": "Diktator des nationalsozialistischen Deutschlands, verantwortlich für den Zweiten Weltkrieg und den Holocaust."
   },
   {
    "name": "Franklin D. Roosevelt",
    "years": "1882–1945",
    "text": "US-Präsident, führte die USA durch die Weltwirtschaftskrise ('New Deal') und den Zweiten Weltkrieg."
   },
   {
    "name": "Mahatma Gandhi",
    "years": "1869–1948",
    "text": "Führte die indische Unabhängigkeitsbewegung durch gewaltfreien Widerstand gegen die britische Kolonialherrschaft."
   },
   {
    "name": "Mao Zedong",
    "years": "1893–1976",
    "text": "Gründer der Volksrepublik China, prägte das Land durch kommunistische Herrschaft und tiefgreifende Umbrüche."
   },
   {
    "name": "Nelson Mandela",
    "years": "1918–2013",
    "text": "Südafrikanischer Freiheitskämpfer und späterer Präsident, überwand friedlich das Apartheidsystem."
   },
   {
    "name": "Martin Luther King Jr.",
    "years": "1929–1968",
    "text": "Führende Figur der US-Bürgerrechtsbewegung, setzte sich gewaltfrei für Gleichberechtigung ein."
   },
   {
    "name": "John F. Kennedy",
    "years": "1917–1963",
    "text": "US-Präsident, meisterte die Kubakrise und initiierte das Mondlandeprogramm; wurde 1963 ermordet."
   },
   {
    "name": "Mikhail Gorbatschow",
    "years": "1931–2022",
    "text": "Letzter Staatschef der UdSSR, ermöglichte durch Glasnost und Perestroika das Ende des Kalten Krieges."
   },
   {
    "name": "Margaret Thatcher",
    "years": "1925–2013",
    "text": "Britische Premierministerin, prägte mit marktwirtschaftlichen Reformen die Politik der 1980er-Jahre."
   },
   {
    "name": "Deng Xiaoping",
    "years": "1904–1997",
    "text": "Chinesischer Reformpolitiker, öffnete China wirtschaftlich und leitete dessen rasanten Aufstieg ein."
   },
   {
    "name": "Albert Einstein",
    "years": "1879–1955",
    "text": "Physiker, dessen Relativitätstheorie das moderne physikalische Weltbild begründete."
   },
   {
    "name": "Ho Chi Minh",
    "years": "1890–1969",
    "text": "Vietnamesischer Revolutionär und Staatsgründer, führte den Unabhängigkeitskampf gegen Frankreich und später die USA an."
   },
   {
    "name": "Golda Meir",
    "years": "1898–1978",
    "text": "Israelische Premierministerin, prägende Figur der frühen Staatsgeschichte Israels."
   },
   {
    "name": "Anwar as-Sadat",
    "years": "1918–1981",
    "text": "Ägyptischer Präsident, schloss 1979 den ersten Friedensvertrag eines arabischen Staates mit Israel und wurde dafür später ermordet."
   },
   {
    "name": "Rosa Luxemburg",
    "years": "1871–1919",
    "text": "Sozialistin, die Krieg und Diktatur gleichermaßen ablehnte; ihr Satz über die Freiheit der Andersdenkenden wird bis heute quer durch die Lager zitiert."
   },
   {
    "name": "Hannah Arendt",
    "years": "1906–1975",
    "text": "Analysierte den Totalitarismus als neue Herrschaftsform und prägte mit der Banalität des Bösen einen bis heute umstrittenen Begriff."
   },
   {
    "name": "Alan Turing",
    "years": "1912–1954",
    "text": "Half, den deutschen Funkverkehr zu entschlüsseln, legte die Grundlagen der Informatik – und wurde wegen seiner Homosexualität verurteilt."
   },
   {
    "name": "Rosa Parks",
    "years": "1913–2005",
    "text": "Ihre Weigerung, den Sitzplatz zu räumen, war kein Zufall, sondern eine geplante Aktion einer erfahrenen Bürgerrechtsaktivistin."
   },
   {
    "name": "Simone de Beauvoir",
    "years": "1908–1986",
    "text": "Ihr Satz, man werde nicht als Frau geboren, sondern dazu gemacht, wurde zur Grundlage der zweiten Frauenbewegung."
   },
   {
    "name": "Wassili Archipow",
    "years": "1926–1998",
    "text": "Verweigerte 1962 auf einem sowjetischen U-Boot in der Kubakrise die Zustimmung zum Abschuss eines Atomtorpedos – und verhinderte vermutlich einen Atomkrieg."
   },
   {
    "name": "Norman Borlaug",
    "years": "1914–2009",
    "text": "Züchtete ertragreiche Weizensorten; die Grüne Revolution wird mit der Rettung von hunderten Millionen Menschen vor dem Hungertod verbunden."
   },
   {
    "name": "Neil Armstrong",
    "years": "1930–2012",
    "text": "Erster Mensch auf dem Mond. Die Landefähre hatte beim Aufsetzen Treibstoff für weniger als eine Minute."
   },
   {
    "name": "Wangari Maathai",
    "years": "1940–2011",
    "text": "Kenianische Biologin, deren Green Belt Movement Millionen Bäume pflanzte; erste afrikanische Frau mit dem Friedensnobelpreis."
   },
   {
    "name": "Václav Havel",
    "years": "1936–2011",
    "text": "Dramatiker und Dissident, der vom Gefängnis auf die Prager Burg wechselte – Symbol der Samtenen Revolution."
   },
   {
    "name": "Tim Berners-Lee",
    "years": "*1955",
    "text": "Entwarf am CERN das World Wide Web und verzichtete bewusst auf Patente – die Bedingung dafür, dass es sich frei ausbreiten konnte."
   },
   {
    "name": "Katalin Karikó",
    "years": "*1955",
    "text": "Forschte jahrzehntelang unter schwierigen Bedingungen an mRNA; ihre Arbeit ermöglichte die schnellen Impfstoffe von 2020."
   },
   {
    "name": "Sophie Scholl",
    "years": "1921–1943",
    "text": "Mitglied der Weißen Rose, mit 21 Jahren hingerichtet – Sinnbild des zivilen Widerstands im Nationalsozialismus."
   },
   {
    "name": "Sukarno",
    "years": "1901–1970",
    "text": "Erster Präsident Indonesiens und Mitbegründer der Blockfreienbewegung. Seine Konferenz von Bandung 1955 gab dem globalen Süden erstmals eine gemeinsame Stimme."
   },
   {
    "name": "Kwame Nkrumah",
    "years": "1909–1972",
    "text": "Führte Ghana als erste Kolonie südlich der Sahara in die Unabhängigkeit und wurde zur Leitfigur des Panafrikanismus – bis ihn 1966 ein Putsch stürzte."
   },
   {
    "name": "Patrice Lumumba",
    "years": "1925–1961",
    "text": "Erster Ministerpräsident des unabhängigen Kongo, nach wenigen Monaten mit belgischer und amerikanischer Beteiligung ermordet. Sein Tod steht für die Grenzen der Dekolonisation."
   },
   {
    "name": "Frantz Fanon",
    "years": "1925–1961",
    "text": "Psychiater aus Martinique, dessen Analysen von Kolonialismus und Gewalt Befreiungsbewegungen weltweit prägten – und bis heute kontrovers diskutiert werden."
   },
   {
    "name": "Mustafa Kemal Atatürk",
    "years": "1881–1938",
    "text": "Gründer der türkischen Republik. Sein Umbau von Schrift, Recht und Kleidung war radikale Modernisierung von oben – mit bis heute umstrittenen Folgen."
   },
   {
    "name": "Zhou Enlai",
    "years": "1898–1976",
    "text": "Über Jahrzehnte Chinas Ministerpräsident und Außengesicht. Seine Rolle zwischen Mäßigung und Mitverantwortung in der Kulturrevolution wird unterschiedlich beurteilt."
   },
   {
    "name": "Ruhollah Chomeini",
    "years": "1902–1989",
    "text": "Führte 1979 die iranische Revolution an und begründete eine Staatsform, in der religiöse Gelehrte die letzte Instanz sind – ein Modell ohne historisches Vorbild."
   },
   {
    "name": "Salvador Allende",
    "years": "1908–1973",
    "text": "Erster demokratisch gewählter marxistischer Präsident Lateinamerikas. Sein Sturz 1973 machte Chile zum Versuchsfeld radikaler Wirtschaftsreformen."
   },
   {
    "name": "Rigoberta Menchú",
    "years": "geboren 1959",
    "text": "Maya-Aktivistin aus Guatemala, Friedensnobelpreis 1992. Die Debatte um Genauigkeiten in ihrem Zeugnisbericht wurde zugleich zu einer über die Beweislast, die Betroffenen auferlegt wird."
   },
   {
    "name": "Fatima Jinnah",
    "years": "1893–1967",
    "text": "Zahnärztin und Mitgestalterin der pakistanischen Staatsgründung, später Oppositionskandidatin gegen einen Militärherrscher."
   }
  ],
  "nations": [
   {
    "name": "USA (Supermacht)",
    "text": "Wurde nach 1945 zur führenden Wirtschafts- und Militärmacht der westlichen Welt."
   },
   {
    "name": "Sowjetunion",
    "text": "Kommunistischer Vielvölkerstaat und Gegenspieler der USA im Kalten Krieg, existierte 1922–1991."
   },
   {
    "name": "Europäische Union",
    "text": "Aus der Montanunion hervorgegangenes Bündnis, das europäische Staaten wirtschaftlich und politisch integriert."
   },
   {
    "name": "Volksrepublik China",
    "text": "Seit 1949 kommunistisch regiert, seit den 1980er-Jahren wirtschaftlich zur Weltmacht aufgestiegen."
   },
   {
    "name": "Indien (unabhängig)",
    "text": "Größte Demokratie der Welt seit 1947, heute bevölkerungsreichstes Land und aufstrebende Wirtschaftsmacht."
   },
   {
    "name": "Bundesrepublik Deutschland",
    "text": "Aus der Teilung hervorgegangen und 1990 wiedervereinigt; heute größte Volkswirtschaft Europas."
   },
   {
    "name": "Japan",
    "text": "Nach der Zerstörung von 1945 binnen einer Generation zur zweitgrößten Volkswirtschaft der Welt aufgestiegen."
   },
   {
    "name": "Brasilien",
    "text": "Größtes Land Südamerikas, zwischen Militärdiktatur, Demokratisierung und der Frage nach dem Amazonas."
   },
   {
    "name": "Südafrika",
    "text": "Von der Apartheid zur Verfassung von 1996 – ein Übergang ohne Bürgerkrieg, dessen soziale Aufgaben unerledigt blieben."
   },
   {
    "name": "Nigeria",
    "text": "Bevölkerungsreichster Staat Afrikas, geprägt von Ölwirtschaft, Bürgerkrieg und einer der größten Filmindustrien der Welt."
   },
   {
    "name": "Israel und die palästinensischen Gebiete",
    "text": "Seit 1948 Zentrum eines Konflikts, der die Weltpolitik durchgehend beschäftigt."
   },
   {
    "name": "Vereinte Nationen",
    "text": "1945 gegründet, um Kriege zu verhindern – mit einem Sicherheitsrat, dessen Vetorecht sie zugleich blockiert."
   },
   {
    "name": "Indonesien",
    "text": "Der viertbevölkerungsreichste Staat der Erde, aus über 17.000 Inseln und hunderten Sprachen zu einer Nation zusammengeführt."
   },
   {
    "name": "Ägypten",
    "text": "Führungsmacht des arabischen Nationalismus unter Nasser, später erster arabischer Staat mit einem Friedensvertrag mit Israel."
   },
   {
    "name": "Iran",
    "text": "Nach 1979 eine Staatsform, in der gewählte Institutionen und religiöse Aufsicht nebeneinanderstehen – ohne Vorbild in der Geschichte."
   },
   {
    "name": "Südkorea",
    "text": "Vom ärmsten Drittel der Welt in zwei Generationen zur Industrienation und Demokratie – der schnellste dokumentierte Aufstieg dieser Art."
   },
   {
    "name": "Vietnam",
    "text": "Besiegte nacheinander Frankreich, die USA und einen chinesischen Angriff – und öffnete sich ab 1986 wirtschaftlich."
   },
   {
    "name": "Mexiko",
    "text": "Die Revolution von 1910 prägte Verfassung und Selbstbild; sieben Jahrzehnte regierte anschließend eine einzige Partei."
   }
  ]
 }
];

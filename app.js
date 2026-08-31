const { useState, useMemo, useEffect } = React;
function Icon({ size = 16, className = "", children }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className
    },
    children
  );
}
const Clock = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 6v6l4 2" }));
const Users = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "8", r: "3.2" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 21c0-4.2 2.9-6.5 6.5-6.5s6.5 2.3 6.5 6.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "17.5", cy: "9.5", r: "2.6" }), /* @__PURE__ */ React.createElement("path", { d: "M22.5 21c0-3.2-2-5.3-5-5.3" }));
const Crown = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 18h18l-1.6-8.5-4.4 4-3-7.5-3 7.5-4.4-4L3 18z" }), /* @__PURE__ */ React.createElement("path", { d: "M3 21h18" }));
const BookOpen = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M2 5.5c2.8-2 6.6-2 9.5 0v14c-2.9-2-6.7-2-9.5 0v-14z" }), /* @__PURE__ */ React.createElement("path", { d: "M22 5.5c-2.8-2-6.6-2-9.5 0v14c2.9-2 6.7-2 9.5 0v-14z" }));
const Sparkles = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 2.5l1.8 5.7 5.7 1.8-5.7 1.8L12 17.5l-1.8-5.7-5.7-1.8 5.7-1.8L12 2.5z" }));
const Zap = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M13 2 3 14h7l-1 8 10-12h-7l1-8z" }));
const Globe = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M2 12h20" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2c2.8 2.8 4.2 6.3 4.2 10S14.8 19.2 12 22c-2.8-2.8-4.2-6.3-4.2-10S9.2 4.8 12 2z" }));
const ChevronRight = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 18l6-6-6-6" }));
const HelpCircle = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M9.2 9a3 3 0 1 1 4.4 3c-.9.6-1.6 1.1-1.6 2.2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17.5h.01" }));
const Search = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7.5" }), /* @__PURE__ */ React.createElement("path", { d: "M21 21l-4.4-4.4" }));
const Check = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M20 6L9 17l-5-5" }));
const RotateCcw = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3.5 9a8.5 8.5 0 1 1 1.8 9.2" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 4v5h5" }));
const ArrowLeft = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M19 12H5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 19l-7-7 7-7" }));
const EPOCHS = [
  {
    id: "steinzeit",
    name: "Steinzeit",
    span: "ca. 2,6 Mio. \u2013 2200 v. Chr.",
    startYear: -26e5,
    endYear: -2200,
    color: "#8c6a2e",
    accent: "#d9b56a",
    lead: "Der lange Anfang: Werkzeuge, Feuer, Sesshaftwerdung.",
    description: "Die Steinzeit umfasst den bei weitem l\xE4ngsten Abschnitt der Menschheitsgeschichte. Sie beginnt mit den ersten Steinwerkzeugen fr\xFCher Hominiden und endet mit der Erfindung der Metallverarbeitung. Entscheidend war die 'Neolithische Revolution': der \xDCbergang vom J\xE4ger-und-Sammler-Dasein zu Ackerbau und Viehzucht, der feste Siedlungen, Vorratshaltung und erste soziale Hierarchien erm\xF6glichte.",
    events: [
      { year: -34e5, title: "\xC4lteste bekannte Steinwerkzeuge", text: "Funde bei Lomekwi (Kenia) gelten als \xE4lteste bekannte Werkzeuge \u2013 \xE4lter als die Gattung Homo selbst." },
      { year: -26e5, title: "Beginn der Oldowan-Kultur", text: "Homo habilis stellt in Ostafrika systematisch einfache Ger\xF6llger\xE4te zum Schneiden und Zerkleinern her." },
      { year: -18e5, title: "Homo erectus verl\xE4sst Afrika", text: "Erste Ausbreitung eines Fr\xFChmenschen \xFCber Afrika hinaus nach Asien und sp\xE4ter Europa." },
      { year: -1e6, title: "Kontrolle des Feuers", text: "Fr\xFChmenschen beginnen, Feuer gezielt zu nutzen und zu erhalten \u2013 ein Wendepunkt f\xFCr Ern\xE4hrung, Schutz und Sozialleben." },
      { year: -4e5, title: "Speerbau in Sch\xF6ningen", text: "In Niedersachsen gefundene Holzspeere belegen ausgefeilte Jagdtechnik fr\xFCher Menschenformen." },
      { year: -3e5, title: "Homo sapiens entsteht", text: "Der anatomisch moderne Mensch entwickelt sich in Afrika; Funde in Jebel Irhoud (Marokko) st\xFCtzen diese Datierung." },
      { year: -2e5, title: "Erste Bekleidung aus Fellen", text: "Genetische Studien zur Kleiderlaus deuten darauf, dass Menschen um diese Zeit begannen, Kleidung zu tragen." },
      { year: -1e5, title: "Neandertaler und Homo sapiens koexistieren", text: "Beide Menschenformen leben zeitweise nebeneinander in Eurasien und vermischen sich genetisch nachweisbar." },
      { year: -7e4, title: "Auszug aus Afrika", text: "Homo sapiens breitet sich in mehreren Wellen \xFCber Arabien nach Asien, Europa und sp\xE4ter Australien aus." },
      { year: -5e4, title: "Besiedlung Australiens", text: "Menschen erreichen \xFCber Wasserwege den australischen Kontinent \u2013 fr\xFCheste bekannte Seefahrt der Menschheit." },
      { year: -4e4, title: "H\xF6hlenmalerei und Kunst", text: "In H\xF6hlen wie Chauvet und sp\xE4ter Lascaux entstehen kunstvolle Tiermalereien \u2013 fr\xFCher Beleg symbolischen Denkens." },
      { year: -35e3, title: "Venus vom Hohle Fels", text: "Eine der \xE4ltesten bekannten fig\xFCrlichen Kunstwerke der Menschheit entsteht in der Schw\xE4bischen Alb." },
      { year: -3e4, title: "Aussterben der Neandertaler", text: "Die letzten Neandertaler-Populationen in Europa verschwinden \u2013 Ursachen (Klima, Konkurrenz) werden weiter erforscht." },
      { year: -2e4, title: "H\xF6hepunkt der letzten Eiszeit", text: "Riesige Eisschilde bedecken Nordeuropa und Nordamerika; der Meeresspiegel liegt rund 120 Meter tiefer als heute." },
      { year: -14e3, title: "Besiedlung Amerikas", text: "\xDCber die Beringlandbr\xFCcke gelangen Menschen von Asien nach Amerika und breiten sich rasch \xFCber den Kontinent aus." },
      { year: -12e3, title: "Ende der letzten Eiszeit", text: "Das Klima erw\xE4rmt sich, Gletscher ziehen sich zur\xFCck, neue Lebensr\xE4ume entstehen \u2013 Grundlage f\xFCr die folgende Sesshaftwerdung." },
      { year: -1e4, title: "Neolithische Revolution beginnt", text: "Im 'Fruchtbaren Halbmond' (Nahost) beginnen Menschen erstmals gezielt Pflanzen anzubauen und Tiere zu domestizieren." },
      { year: -9500, title: "G\xF6bekli Tepe", text: "In Anatolien entsteht die vermutlich \xE4lteste monumentale Kultst\xE4tte der Welt \u2013 errichtet von J\xE4gern und Sammlern, nicht von Bauern." },
      { year: -8e3, title: "Domestikation von Schaf und Ziege", text: "Im Nahen Osten werden erstmals Nutztiere planm\xE4\xDFig gehalten und gez\xFCchtet." },
      { year: -7e3, title: "Erste St\xE4dte: \xC7atalh\xF6y\xFCk", text: "Eine der fr\xFChesten gro\xDFen Siedlungen entsteht in Anatolien mit dicht gedr\xE4ngten Lehmh\xE4usern ohne Stra\xDFen." },
      { year: -6500, title: "Verbreitung der T\xF6pferei im Nahen Osten", text: "Keramikgef\xE4\xDFe verbreiten sich in der Region und revolutionieren Vorratshaltung und Kochen; deutlich \xE4ltere T\xF6pferfunde in Ostasien (u.a. China, Japan) zeigen, dass diese Technik andernorts bereits Jahrtausende fr\xFCher entstand." },
      { year: -5e3, title: "Kupferverarbeitung beginnt", text: "Erste Kupferwerkzeuge markieren den flie\xDFenden \xDCbergang zur Kupfer- bzw. Bronzezeit." },
      { year: -2200, title: "Domestikation des modernen Hauspferdes", text: "Genetische Studien (2021) verorten den Ursprung der modernen Hauspferde-Linie in der Wolga-Don-Steppe; die \xE4ltere Annahme einer Domestikation bei der Botai-Kultur (ca. 3500 v. Chr.) betraf laut neueren Erkenntnissen einen anderen, nicht direkt verwandten Wildpferd-Zweig." },
      { year: -3500, title: "Erfindung des Rades", text: "In Mesopotamien entstehen die ersten R\xE4der \u2013 zun\xE4chst f\xFCr T\xF6pferscheiben, bald darauf f\xFCr Transportwagen." }
    ],
    figures: [
      { name: "Lucy (Australopithecus afarensis)", years: "vor ca. 3,2 Mio. Jahren", text: "Ber\xFChmtes Fossil eines Vormenschen aus \xC4thiopien, zeigt fr\xFChen aufrechten Gang \u2013 Meilenstein der Pal\xE4oanthropologie." },
      { name: "\xD6tzi (der Mann aus dem Eis)", years: "ca. 3300 v. Chr.", text: "Gut erhaltene Gletschermumie aus den \xD6tztaler Alpen, liefert einzigartige Einblicke in Ausr\xFCstung, Ern\xE4hrung und Gesundheit der Kupfersteinzeit." },
      { name: "Der Neandertaler von La Chapelle", years: "vor ca. 60.000 Jahren", text: "Eines der ersten vollst\xE4ndig geborgenen Neandertaler-Skelette, pr\xE4gte lange (teils falsche) Vorstellungen vom 'H\xF6hlenmenschen'." }
    ],
    nations: [
      { name: "Fruchtbarer Halbmond", text: "Region zwischen Nil, Euphrat und Tigris, in der Ackerbau, Viehzucht und die ersten St\xE4dte entstanden." },
      { name: "Jericho", text: "Eine der \xE4ltesten durchgehend besiedelten Siedlungen der Welt, bereits vor rund 10.000 Jahren ummauert." },
      { name: "Cucuteni-Trypillia-Kultur", text: "Gro\xDFe neolithische Siedlungsgemeinschaft in Osteuropa mit teils mehreren tausend Einwohnern pro Ort." }
    ]
  },
  {
    id: "fruehe-hochkulturen",
    name: "Fr\xFChe Hochkulturen & Bronzezeit",
    span: "ca. 3300 \u2013 800 v. Chr.",
    startYear: -3300,
    endYear: -800,
    color: "#b8860b",
    accent: "#f0c869",
    lead: "Schrift, Staat und Stadt: die ersten Hochkulturen entstehen.",
    description: "An gro\xDFen Fl\xFCssen \u2013 Nil, Euphrat/Tigris, Indus und Gelber Fluss \u2013 entwickeln sich die ersten Hochkulturen mit Bew\xE4sserungswirtschaft, Arbeitsteilung, Schrift und zentralisierter Herrschaft. Bronze als Werkstoff erm\xF6glicht bessere Werkzeuge und Waffen und treibt Handel \xFCber weite Strecken an.",
    events: [
      { year: -3300, title: "Beginn der Bronzezeit", text: "Die Legierung von Kupfer und Zinn zu Bronze verbreitet sich im Nahen Osten und ver\xE4ndert Waffen- und Werkzeugbau." },
      { year: -3200, title: "Erfindung der Schrift", text: "In Mesopotamien entsteht die Keilschrift, in \xC4gypten die Hieroglyphenschrift \u2013 Grundlage f\xFCr Verwaltung, Recht und \xDCberlieferung." },
      { year: -3100, title: "Reichseinigung \xC4gyptens", text: "Menes (Narmer) vereinigt Ober- und Unter\xE4gypten und begr\xFCndet die Pharaonenherrschaft." },
      { year: -3e3, title: "Bau von Stonehenge beginnt", text: "In England entsteht \xFCber Jahrhunderte die ber\xFChmte Steinkreis-Anlage \u2013 Zweck bis heute nicht abschlie\xDFend gekl\xE4rt." },
      { year: -2900, title: "Fr\xFChdynastische Zeit Sumers", text: "Stadtstaaten wie Uruk, Ur und Lagasch konkurrieren um Vormacht im s\xFCdlichen Mesopotamien." },
      { year: -2560, title: "Bau der Cheops-Pyramide", text: "Die gr\xF6\xDFte Pyramide von Gizeh entsteht als Grabmal \u2013 Symbol pharaonischer Macht und organisatorischer Leistungsf\xE4higkeit." },
      { year: -2334, title: "Sargon von Akkad gr\xFCndet ein Weltreich", text: "Sargon eint erstmals Mesopotamien zu einem der ersten bekannten Gro\xDFreiche der Geschichte." },
      { year: -2100, title: "Codex Ur-Nammu", text: "Die vermutlich \xE4lteste erhaltene Gesetzessammlung der Welt entsteht im sumerischen Ur." },
      { year: -1900, title: "Bl\xFCtezeit der Indus-Kultur", text: "St\xE4dte wie Mohenjo-Daro und Harappa erreichen bemerkenswerte Stadtplanung mit Kanalisation und einheitlichen Ma\xDFen." },
      { year: -1792, title: "Codex Hammurapi", text: "K\xF6nig Hammurapi von Babylon l\xE4sst eine der \xE4ltesten \xFCberlieferten Rechtssammlungen in Stein mei\xDFeln." },
      { year: -1700, title: "Minoische Kultur auf Kreta bl\xFCht", text: "Die minoische Palastkultur entwickelt Schrift (Linear A), Fresken und weitreichenden Seehandel." },
      { year: -1600, title: "Beginn der Shang-Dynastie", text: "In China entsteht mit der Shang-Dynastie eine fr\xFChe zentralisierte Herrschaft mit Bronzegusskunst und Orakelknochenschrift." },
      { year: -1600, title: "Hethiterreich in Anatolien", text: "Die Hethiter entwickeln als eines der ersten V\xF6lker die Eisenverarbeitung und werden zur Gro\xDFmacht Kleinasiens." },
      { year: -1550, title: "Neues Reich \xC4gyptens beginnt", text: "\xC4gypten erlebt seine machtpolitische und kulturelle Bl\xFCtezeit mit Expansion nach Nubien und in die Levante." },
      { year: -1500, title: "Vedische Kultur in Indien", text: "Einwandernde indoarische Gruppen pr\xE4gen mit den Veden die religi\xF6se und soziale Grundlage Indiens." },
      { year: -1350, title: "Echnatons Reform", text: "Pharao Echnaton f\xFChrt kurzzeitig den Monotheismus (Aton-Kult) in \xC4gypten ein \u2013 ein religi\xF6ser Sonderweg der Antike." },
      { year: -1274, title: "Schlacht bei Kadesch", text: "\xC4gypter unter Ramses II. und Hethiter liefern sich eine der gr\xF6\xDFten Streitwagenschlachten der Geschichte; es folgt der \xE4lteste erhaltene Friedensvertrag." },
      { year: -1200, title: "Bronzezeitlicher Kollaps", text: "Mehrere Hochkulturen im \xF6stlichen Mittelmeerraum (Hethiter, Mykene) brechen binnen weniger Jahrzehnte zusammen \u2013 Ursachen bis heute diskutiert." },
      { year: -1100, title: "Ausbreitung des ph\xF6nizischen Alphabets", text: "Die Ph\xF6nizier verbreiten \xFCber den Seehandel ein Konsonantenalphabet, das Grundlage vieler sp\xE4terer Schriften wird." },
      { year: -1046, title: "Zhou-Dynastie in China", text: "Die Zhou l\xF6sen die Shang ab und pr\xE4gen das Konzept des 'Mandats des Himmels' als Herrschaftslegitimation." },
      { year: -1e3, title: "K\xF6nigreich Israel und Juda", text: "Nach biblischer \xDCberlieferung entsteht unter David und Salomo ein vereintes israelitisches K\xF6nigreich." },
      { year: -900, title: "Aufstieg des Neuassyrischen Reiches", text: "Assyrien baut durch effiziente Milit\xE4rorganisation und Verwaltung ein Gro\xDFreich im Nahen Osten auf." },
      { year: -2500, title: "Bau der Gro\xDFen Sphinx von Gizeh", text: "Das monumentale L\xF6wen-Mensch-Bauwerk entsteht vermutlich unter Pharao Chephren als W\xE4chterfigur der Pyramiden-Nekropole." },
      { year: -1650, title: "Herrschaft der Hyksos in \xC4gypten", text: "Fremde Herrscher aus der Levante \xFCbernehmen zeitweise Unter\xE4gypten \u2013 bringen aber auch neue Technik wie den Streitwagen mit." },
      { year: -1400, title: "Bau des Karnak-Tempels", text: "\xDCber Jahrhunderte erweiterter gr\xF6\xDFter religi\xF6ser Tempelkomplex der Antike entsteht bei Theben zu Ehren des Gottes Amun." },
      { year: -814, title: "Gr\xFCndung Karthagos", text: "Ph\xF6nizische Siedler gr\xFCnden Karthago in Nordafrika, das sp\xE4ter zur Gro\xDFmacht im westlichen Mittelmeer wird." }
    ],
    figures: [
      { name: "Sargon von Akkad", years: "ca. 2334\u20132279 v. Chr.", text: "Begr\xFCnder eines der ersten bekannten Gro\xDFreiche der Geschichte, gilt als Archetyp des 'Weltherrschers'." },
      { name: "Hammurapi", years: "reg. ca. 1792\u20131750 v. Chr.", text: "Babylonischer K\xF6nig, bekannt f\xFCr seinen Gesetzeskodex nach dem Prinzip 'Auge um Auge'." },
      { name: "Hatschepsut", years: "ca. 1507\u20131458 v. Chr.", text: "Eine der wenigen weiblichen Pharaonen \xC4gyptens, initiierte umfangreiche Handelsexpeditionen und Bauprojekte." },
      { name: "Echnaton", years: "ca. 1351\u20131334 v. Chr.", text: "\xC4gyptischer Pharao, versuchte eine monotheistische Reform durchzusetzen; nach seinem Tod r\xFCckg\xE4ngig gemacht." },
      { name: "Nofretete", years: "ca. 1370\u20131330 v. Chr.", text: "Gro\xDFe k\xF6nigliche Gemahlin Echnatons, ber\xFChmt durch ihre ikonische B\xFCste \u2013 Symbol alt\xE4gyptischer Sch\xF6nheitsideale." },
      { name: "Ramses II.", years: "ca. 1303\u20131213 v. Chr.", text: "Einer der m\xE4chtigsten Pharaonen, bekannt f\xFCr Bauprojekte (Abu Simbel) und den Frieden von Kadesch mit den Hethitern." },
      { name: "Tutanchamun", years: "ca. 1341\u20131323 v. Chr.", text: "Jung verstorbener Pharao, weltber\xFChmt durch die 1922 nahezu unversehrt entdeckte Grabkammer." }
    ],
    nations: [
      { name: "Alt\xE4gypten", text: "Hochkultur am Nil mit \xFCber 3000 Jahren Kontinuit\xE4t, Pharaonentum und monumentaler Architektur." },
      { name: "Mesopotamien (Sumer, Babylon, Assyrien)", text: "Stadtstaaten und Reiche zwischen Euphrat und Tigris, Wiege von Schrift, Recht und Astronomie." },
      { name: "Indus-Kultur", text: "Hochentwickelte St\xE4dte wie Mohenjo-Daro mit erstaunlich fortschrittlicher Stadtplanung und Wasserversorgung." },
      { name: "Hethiterreich", text: "Anatolische Gro\xDFmacht, Rivale \xC4gyptens, Pionier der Eisenverarbeitung." },
      { name: "Minoische & Mykenische Kultur", text: "Fr\xFChe griechische Hochkulturen auf Kreta und dem Peloponnes, Vorl\xE4ufer der klassischen griechischen Welt." },
      { name: "Shang- und Zhou-China", text: "Fr\xFChe chinesische Dynastien mit Bronzegusskunst, Orakelknochenschrift und dem Konzept des 'Mandats des Himmels'." }
    ]
  },
  {
    id: "antike",
    name: "Antike",
    span: "ca. 800 v. Chr. \u2013 500 n. Chr.",
    startYear: -800,
    endYear: 500,
    color: "#9c1c1c",
    accent: "#e2a45c",
    lead: "Griechenland, Rom und die Grundlagen der westlichen Kultur.",
    description: "Die Antike pr\xE4gt Philosophie, Demokratie, Recht und Architektur bis heute. Griechische Stadtstaaten entwickeln Demokratie und Wissenschaft, Alexander der Gro\xDFe verbreitet hellenistische Kultur bis nach Asien, und Rom baut ein Weltreich, das schlie\xDFlich in West- und Ostrom zerf\xE4llt.",
    events: [
      { year: -776, title: "Erste Olympische Spiele", text: "In Olympia finden die ersten \xFCberlieferten panhellenischen Spiele statt \u2013 religi\xF6ses und sportliches Gro\xDFereignis." },
      { year: -753, title: "Gr\xFCndung Roms (Legende)", text: "Der \xDCberlieferung nach gr\xFCndet Romulus die Stadt Rom am Tiber." },
      { year: -594, title: "Solonische Reformen in Athen", text: "Solon entsch\xE4rft soziale Spannungen und legt Grundsteine f\xFCr sp\xE4tere demokratische Entwicklungen." },
      { year: -563, title: "Geburt Buddhas", text: "Siddhartha Gautama wird in Nordindien geboren; seine Lehren begr\xFCnden den Buddhismus." },
      { year: -551, title: "Geburt des Konfuzius", text: "Der chinesische Philosoph pr\xE4gt mit seiner Ethik- und Staatslehre die ostasiatische Kultur bis heute." },
      { year: -509, title: "Gr\xFCndung der R\xF6mischen Republik", text: "Rom vertreibt seinen letzten K\xF6nig und wird zur aristokratischen Republik mit gew\xE4hlten Konsuln." },
      { year: -508, title: "Demokratie in Athen", text: "Kleisthenes reformiert die athenische Verfassung und legt den Grundstein f\xFCr die erste Demokratie der Geschichte." },
      { year: -490, title: "Schlacht bei Marathon", text: "Athen wehrt einen persischen Invasionsversuch ab \u2013 pr\xE4gendes Ereignis des griechischen Selbstverst\xE4ndnisses." },
      { year: -480, title: "Schlachten bei Thermopylae und Salamis", text: "Griechische Stadtstaaten stoppen die zweite persische Invasion zu Land und zur See." },
      { year: -431, title: "Peloponnesischer Krieg beginnt", text: "Athen und Sparta f\xFChren einen jahrzehntelangen Krieg, der Griechenland nachhaltig schw\xE4cht." },
      { year: -399, title: "Tod des Sokrates", text: "Der athenische Philosoph wird wegen 'Gottlosigkeit' zum Tode verurteilt und trinkt den Schierlingsbecher." },
      { year: -336, title: "Alexander der Gro\xDFe wird K\xF6nig", text: "Alexander besteigt den makedonischen Thron und erobert binnen weniger Jahre ein Reich bis nach Indien." },
      { year: -323, title: "Tod Alexanders und Reichsteilung", text: "Nach Alexanders Tod zerf\xE4llt sein Reich unter seinen Nachfolgern (Diadochen) in mehrere hellenistische K\xF6nigreiche." },
      { year: -264, title: "Beginn der Punischen Kriege", text: "Rom und Karthago liefern sich \xFCber ein Jahrhundert Kriege um die Vorherrschaft im westlichen Mittelmeer." },
      { year: -218, title: "Hannibal \xFCberquert die Alpen", text: "Der karthagische Feldherr f\xE4llt mit Kriegselefanten in Italien ein und bedroht Rom existenziell." },
      { year: -146, title: "Zerst\xF6rung Karthagos", text: "Rom zerst\xF6rt Karthago vollst\xE4ndig und wird zur unangefochtenen Macht im westlichen Mittelmeerraum." },
      { year: -73, title: "Spartacus-Aufstand", text: "Ein Sklavenaufstand unter dem Gladiator Spartacus ersch\xFCttert f\xFCr zwei Jahre die r\xF6mische Ordnung." },
      { year: -58, title: "Caesars Gallischer Krieg", text: "Julius Caesar erobert Gallien und legt damit den Grundstein f\xFCr sein politisches Machtwachstum." },
      { year: -44, title: "Ermordung Caesars", text: "Julius Caesar wird an den Iden des M\xE4rz von Senatoren ermordet \u2013 Ausl\xF6ser des endg\xFCltigen Untergangs der Republik." },
      { year: -31, title: "Schlacht bei Actium", text: "Octavian besiegt Marcus Antonius und Kleopatra \u2013 \xC4gypten wird r\xF6mische Provinz." },
      { year: -27, title: "Beginn des Prinzipats", text: "Octavian (Augustus) wird erster r\xF6mischer Kaiser und beendet die B\xFCrgerkriege der sp\xE4ten Republik." },
      { year: 9, title: "Varusschlacht", text: "Germanische St\xE4mme unter Arminius vernichten drei r\xF6mische Legionen im Teutoburger Wald \u2013 stoppt r\xF6mische Expansion nach Germanien." },
      { year: 33, title: "Kreuzigung Jesu von Nazareth", text: "Ausgangspunkt des Christentums, das sich in den folgenden Jahrhunderten im R\xF6mischen Reich ausbreitet." },
      { year: 70, title: "Zerst\xF6rung des Zweiten Tempels", text: "Rom zerschl\xE4gt einen j\xFCdischen Aufstand und zerst\xF6rt den Tempel in Jerusalem \u2013 pr\xE4gend f\xFCr die j\xFCdische Diaspora." },
      { year: 79, title: "Ausbruch des Vesuv", text: "Pompeji und Herculaneum werden unter Asche begraben \u2013 einzigartig konservierter Einblick in r\xF6misches Alltagsleben." },
      { year: 117, title: "Gr\xF6\xDFte Ausdehnung des R\xF6mischen Reiches", text: "Unter Kaiser Trajan erreicht das Imperium Romanum seine maximale territoriale Ausdehnung." },
      { year: 220, title: "Ende der Han-Dynastie", text: "China zerf\xE4llt in die Zeit der Drei Reiche \u2013 Beginn einer langen Phase politischer Zersplitterung." },
      { year: 285, title: "Reichsteilung unter Diokletian", text: "Kaiser Diokletian teilt das R\xF6mische Reich verwaltungstechnisch, um es besser regierbar zu machen." },
      { year: 313, title: "Toleranzedikt von Mailand", text: "Kaiser Konstantin gew\xE4hrt dem Christentum Religionsfreiheit im R\xF6mischen Reich." },
      { year: 325, title: "Konzil von Nic\xE4a", text: "Das erste \xF6kumenische Konzil formuliert zentrale Glaubensgrunds\xE4tze des Christentums (Niz\xE4nisches Glaubensbekenntnis)." },
      { year: 330, title: "Gr\xFCndung Konstantinopels", text: "Kaiser Konstantin macht die griechische Stadt Byzantion zur neuen Reichshauptstadt \u2013 k\xFCnftiges Zentrum von Byzanz." },
      { year: 375, title: "Beginn der V\xF6lkerwanderung", text: "Der Einfall der Hunnen setzt eine Kettenreaktion germanischer Wanderbewegungen in Gang, die Westrom destabilisiert." },
      { year: 395, title: "Teilung des R\xF6mischen Reiches", text: "Das Reich wird endg\xFCltig in West- und Ostrom (Byzanz) geteilt." },
      { year: 410, title: "Pl\xFCnderung Roms durch die Westgoten", text: "Erstmals seit 800 Jahren wird Rom von einer fremden Streitmacht eingenommen \u2013 Schockwirkung im ganzen Reich." },
      { year: 451, title: "Schlacht auf den Katalaunischen Feldern", text: "Ein r\xF6misch-germanisches B\xFCndnisheer stoppt Attilas Hunnen in Gallien." },
      { year: 476, title: "Untergang Westroms", text: "Der germanische Heerf\xFChrer Odoaker setzt den letzten westr\xF6mischen Kaiser Romulus Augustulus ab." }
    ],
    figures: [
      { name: "Konfuzius", years: "551\u2013479 v. Chr.", text: "Chinesischer Philosoph, dessen Ethik- und Staatslehre die ostasiatische Kultur bis heute pr\xE4gt." },
      { name: "Buddha (Siddhartha Gautama)", years: "ca. 563\u2013483 v. Chr.", text: "Begr\xFCnder des Buddhismus, lehrte den 'Mittleren Weg' zur \xDCberwindung des Leidens." },
      { name: "Sokrates", years: "469\u2013399 v. Chr.", text: "Athenischer Philosoph, Begr\xFCnder der westlichen Ethik durch das dialogische Hinterfragen vermeintlicher Gewissheiten." },
      { name: "Perikles", years: "ca. 495\u2013429 v. Chr.", text: "Athenischer Staatsmann, pr\xE4gte das 'Goldene Zeitalter' Athens mit Demokratieausbau und der Errichtung der Akropolis." },
      { name: "Platon", years: "ca. 428\u2013348 v. Chr.", text: "Sch\xFCler des Sokrates, Begr\xFCnder der Akademie in Athen, pr\xE4gte mit seiner Ideenlehre die abendl\xE4ndische Philosophie." },
      { name: "Aristoteles", years: "384\u2013322 v. Chr.", text: "Universalgelehrter, Lehrer Alexanders des Gro\xDFen, legte Grundlagen f\xFCr Logik, Naturwissenschaft und Politiktheorie." },
      { name: "Alexander der Gro\xDFe", years: "356\u2013323 v. Chr.", text: "Makedonischer K\xF6nig, eroberte ein Weltreich von Griechenland bis Indien und verbreitete hellenistische Kultur." },
      { name: "Hannibal", years: "247\u2013183 v. Chr.", text: "Karthagischer Feldherr, \xFCberquerte mit einem Heer die Alpen und brachte Rom im Zweiten Punischen Krieg an den Rand der Niederlage." },
      { name: "Julius Caesar", years: "100\u201344 v. Chr.", text: "R\xF6mischer Feldherr und Politiker, eroberte Gallien, wurde Alleinherrscher und wurde von Senatoren ermordet." },
      { name: "Cicero", years: "106\u201343 v. Chr.", text: "R\xF6mischer Redner, Politiker und Philosoph, pr\xE4gte die lateinische Prosa und republikanisches Denken nachhaltig." },
      { name: "Augustus", years: "63 v. Chr.\u201314 n. Chr.", text: "Erster r\xF6mischer Kaiser, begr\xFCndete den \xFCber 200 Jahre w\xE4hrenden 'Pax Romana'." },
      { name: "Kleopatra VII.", years: "69\u201330 v. Chr.", text: "Letzte Pharaonin \xC4gyptens, bekannt f\xFCr ihre politischen B\xFCndnisse mit Caesar und Marcus Antonius." },
      { name: "Jesus von Nazareth", years: "ca. 4 v. Chr.\u201333 n. Chr.", text: "J\xFCdischer Wanderprediger, dessen Lehren die Grundlage des Christentums bilden." },
      { name: "Konstantin der Gro\xDFe", years: "ca. 272\u2013337 n. Chr.", text: "R\xF6mischer Kaiser, f\xF6rderte das Christentum und gr\xFCndete Konstantinopel als neue Hauptstadt." },
      { name: "Attila", years: "ca. 406\u2013453 n. Chr.", text: "Herrscher der Hunnen, als 'Gei\xDFel Gottes' gef\xFCrchtet, brachte weite Teile Europas in Bedr\xE4ngnis." },
      { name: "Augustinus von Hippo", years: "354\u2013430 n. Chr.", text: "Kirchenvater und Philosoph, dessen Werke ('Bekenntnisse', 'De civitate Dei') die christliche Theologie pr\xE4gten." },
      { name: "Trajan", years: "53\u2013117 n. Chr.", text: "R\xF6mischer Kaiser, unter dem das Reich seine gr\xF6\xDFte territoriale Ausdehnung erreichte; gilt als vorbildlicher Verwalter." },
      { name: "Hadrian", years: "76\u2013138 n. Chr.", text: "R\xF6mischer Kaiser, bereiste das gesamte Reich und lie\xDF u.a. den Hadrianswall in Britannien errichten." },
      { name: "Marc Aurel", years: "121\u2013180 n. Chr.", text: "Kaiser und Stoiker, verfasste die 'Selbstbetrachtungen' \u2013 eines der einflussreichsten philosophischen Werke der Antike." },
      { name: "Diokletian", years: "ca. 244\u2013311 n. Chr.", text: "Reformierte das R\xF6mische Reich grundlegend (Tetrarchie, Verwaltungs- und Wirtschaftsreformen) und beendete die Reichskrise des 3. Jahrhunderts." },
      { name: "Gaius Marius", years: "157\u201386 v. Chr.", text: "R\xF6mischer Feldherr und Politiker, reformierte das Heerwesen grundlegend und \xF6ffnete es f\xFCr besitzlose B\xFCrger." },
      { name: "Spartacus", years: "gest. 71 v. Chr.", text: "Entlaufener Gladiator, f\xFChrte den gr\xF6\xDFten Sklavenaufstand der r\xF6mischen Geschichte an." },
      { name: "Imhotep", years: "ca. 27. Jh. v. Chr.", text: "Architekt der Stufenpyramide von Sakkara und erster namentlich bekannter Baumeister und Gelehrter der Geschichte, sp\xE4ter als Gott verehrt." },
      { name: "Sesostris III.", years: "ca. 1878\u20131839 v. Chr.", text: "Bedeutendster Pharao des Mittleren Reiches, expandierte nach Nubien und reformierte die Verwaltung." },
      { name: "Thutmosis III.", years: "ca. 1479\u20131425 v. Chr.", text: "'Napoleon \xC4gyptens', f\xFChrte zahlreiche erfolgreiche Feldz\xFCge und brachte das Neue Reich zu seiner gr\xF6\xDFten Ausdehnung." },
      { name: "Amenhotep III.", years: "ca. 1388\u20131351 v. Chr.", text: "Regierte w\xE4hrend einer Bl\xFCtezeit des Friedens und Wohlstands, errichtete zahlreiche Monumentalbauten." },
      { name: "Scipio Africanus", years: "236\u2013183 v. Chr.", text: "R\xF6mischer Feldherr, besiegte Hannibal bei Zama und beendete damit Karthagos Gro\xDFmachtstellung." },
      { name: "Sulla", years: "138\u201378 v. Chr.", text: "R\xF6mischer Feldherr und Diktator, dessen brutale Proskriptionen und Verfassungsreformen die sp\xE4te Republik destabilisierten." },
      { name: "Pompeius", years: "106\u201348 v. Chr.", text: "R\xF6mischer Feldherr und Rivale Caesars im B\xFCrgerkrieg, zun\xE4chst gefeierter Eroberer des Ostens." },
      { name: "Crassus", years: "ca. 115\u201353 v. Chr.", text: "Reichster Mann Roms, Mitglied des Ersten Triumvirats mit Caesar und Pompeius, fiel im Krieg gegen die Parther." }
    ],
    nations: [
      { name: "Griechische Stadtstaaten (Poleis)", text: "Athen, Sparta und weitere Poleis pr\xE4gten Philosophie, Theater, Demokratie und Kriegskunst." },
      { name: "Perserreich (Ach\xE4meniden)", text: "Gr\xF6\xDFtes Reich seiner Zeit, bekannt f\xFCr Verwaltungseffizienz, Stra\xDFenbau und religi\xF6se Toleranz." },
      { name: "Karthago", text: "Ph\xF6nizische Handelsmacht in Nordafrika, unterlag Rom nach drei Punischen Kriegen und wurde vollst\xE4ndig zerst\xF6rt." },
      { name: "R\xF6misches Reich", text: "Von einer Stadtstaat-Republik zum Weltreich mit Recht, Infrastruktur und Milit\xE4rmacht, das Europa bis heute pr\xE4gt." },
      { name: "Han-Dynastie (China)", text: "Chinesisches Kaiserreich zeitgleich zu Rom, f\xF6rderte Seidenstra\xDFenhandel, Konfuzianismus und Verwaltung." },
      { name: "Maurya-Reich (Indien)", text: "Erstes gro\xDFes indisches Gro\xDFreich, unter Kaiser Ashoka F\xF6rderung des Buddhismus und relativ friedlicher Herrschaft." },
      { name: "Hunnenreich", text: "Nomadisches Steppenreich unter Attila, dessen Druck ma\xDFgeblich zur V\xF6lkerwanderung und zum Fall Westroms beitrug." }
    ],
    dynastyGroups: [
      {
        title: "Dynastien Alt\xE4gyptens",
        items: [
          { name: "Fr\xFChdynastische Zeit (ca. 3100\u20132700 v. Chr.)", text: "Beginnend mit Menes/Narmer, Vereinigung von Ober- und Unter\xE4gypten, erste Hauptstadt Memphis." },
          { name: "Altes Reich (ca. 2700\u20132200 v. Chr.)", text: "Zeitalter der gro\xDFen Pyramiden unter Djoser, Snofru, Cheops, Chephren und Mykerinos; straff zentralisierte Gottk\xF6nigsherrschaft." },
          { name: "Mittleres Reich (ca. 2000\u20131700 v. Chr.)", text: "Wiedervereinigung nach einer Zwischenzeit des Zerfalls, Expansion nach Nubien, kulturelle Bl\xFCte unter Herrschern wie Sesostris III." },
          { name: "Neues Reich (ca. 1550\u20131070 v. Chr.)", text: "Machtpolitischer H\xF6hepunkt \xC4gyptens unter Thutmosis III., Hatschepsut, Echnaton, Tutanchamun und Ramses II.; gr\xF6\xDFte territoriale Ausdehnung bis nach Nubien und in die Levante." },
          { name: "Dritte Zwischenzeit & Sp\xE4tzeit (ca. 1070\u2013332 v. Chr.)", text: "Zunehmende Fremdherrschaften durch Libyer, Kuschiten und Perser schw\xE4chen die Zentralmacht der Pharaonen." },
          { name: "Ptolem\xE4er-Dynastie (332\u201330 v. Chr.)", text: "Nach Alexanders Eroberung griechisch-makedonische Herrscherfamilie mit Zentrum Alexandria; endet mit Kleopatra VII. und der r\xF6mischen Annexion." }
        ]
      },
      {
        title: "R\xF6mische Kaiserdynastien",
        items: [
          { name: "Julisch-Claudische Dynastie (27 v. Chr. \u2013 68 n. Chr.)", text: "Augustus, Tiberius, Caligula, Claudius, Nero \u2013 die erste Kaiserdynastie, endet mit Neros Sturz und Selbstmord." },
          { name: "Vierkaiserjahr & Flavische Dynastie (69\u201396)", text: "Nach dem B\xFCrgerkriegsjahr 69 stabilisieren Vespasian, Titus und Domitian das Reich; Bau des Kolosseums." },
          { name: "Adoptivkaiser \u2013 'F\xFCnf gute Kaiser' (96\u2013180)", text: "Nerva, Trajan, Hadrian, Antoninus Pius und Marc Aurel gelten als H\xF6hepunkt stabiler, gut verwalteter Herrschaft und gr\xF6\xDFter territorialer Ausdehnung unter Trajan." },
          { name: "Severer-Dynastie (193\u2013235)", text: "Septimius Severus und Nachfolger st\xFCtzen sich zunehmend auf das Milit\xE4r als Machtbasis." },
          { name: "Reichskrise des 3. Jahrhunderts (235\u2013284)", text: "\xDCber 20 sogenannte Soldatenkaiser in 50 Jahren, meist durch Putsche eingesetzt und gest\xFCrzt \u2013 tiefe Staats-, Wirtschafts- und Grenzkrise." },
          { name: "Sp\xE4tantike & Tetrarchie (284\u2013395)", text: "Diokletian reformiert das Reich grundlegend (Tetrarchie), Konstantin der Gro\xDFe f\xF6rdert das Christentum; Theodosius I. ist letzter Alleinherrscher vor der endg\xFCltigen Reichsteilung." }
        ]
      }
    ]
  },
  {
    id: "mittelalter",
    name: "Mittelalter",
    span: "ca. 500 \u2013 1500",
    startYear: 500,
    endYear: 1500,
    color: "#7a2a3a",
    accent: "#c98a5c",
    lead: "Zwischen Glaube, Feudalismus und aufbl\xFChenden St\xE4dten.",
    description: "Nach dem Untergang Westroms entstehen neue Reiche in Europa, gepr\xE4gt von Christentum, Feudalismus und wechselnden Machtzentren. Gleichzeitig bl\xFChen im islamischen Kalifat, in Byzanz und in Ostasien hochentwickelte Kulturen. Kreuzz\xFCge, Pest und die beginnende Stadtkultur pr\xE4gen das Sp\xE4tmittelalter.",
    events: [
      { year: 529, title: "Corpus Iuris Civilis", text: "Kaiser Justinian l\xE4sst das r\xF6mische Recht systematisch zusammenfassen \u2013 Grundlage vieler europ\xE4ischer Rechtssysteme bis heute." },
      { year: 570, title: "Geburt Mohammeds", text: "Der sp\xE4tere Religionsstifter des Islam wird in Mekka geboren." },
      { year: 610, title: "Erste Offenbarungen an Mohammed", text: "Nach islamischer \xDCberlieferung beginnt Mohammed, die Offenbarungen des Koran zu empfangen." },
      { year: 622, title: "Hidschra \u2013 Beginn der islamischen Zeitrechnung", text: "Mohammed wandert von Mekka nach Medina aus; Ausgangspunkt der raschen Ausbreitung des Islam." },
      { year: 632, title: "Tod Mohammeds und Beginn der Expansion", text: "Nach Mohammeds Tod breitet sich der Islam binnen weniger Jahrzehnte \xFCber den Nahen Osten und Nordafrika aus." },
      { year: 711, title: "Islamische Eroberung Spaniens", text: "Muslimische Truppen erobern weite Teile der Iberischen Halbinsel \u2013 Beginn von Al-Andalus." },
      { year: 732, title: "Schlacht bei Tours und Poitiers", text: "Karl Martell stoppt die arabische Expansion nach Mitteleuropa." },
      { year: 750, title: "Abbasidenkalifat l\xF6st Umayyaden ab", text: "Bagdad wird Zentrum eines islamischen 'Goldenen Zeitalters' der Wissenschaft und Philosophie." },
      { year: 793, title: "Wikinger\xFCberfall auf Lindisfarne", text: "Der \xDCberfall auf ein englisches Kloster markiert traditionell den Beginn der Wikingerzeit." },
      { year: 800, title: "Kaiserkr\xF6nung Karls des Gro\xDFen", text: "Karl der Gro\xDFe wird in Rom zum Kaiser gekr\xF6nt \u2013 Versuch der Erneuerung des westr\xF6mischen Kaisertums." },
      { year: 843, title: "Vertrag von Verdun", text: "Das Frankenreich wird unter Karls Enkeln geteilt \u2013 Grundlage der sp\xE4teren Staaten Frankreich, Deutschland und Italien." },
      { year: 862, title: "Gr\xFCndung der Kiewer Rus", text: "War\xE4ger (Wikinger) gr\xFCnden ein F\xFCrstentum, das zum Ursprung Russlands, der Ukraine und Wei\xDFrusslands wird." },
      { year: 962, title: "Gr\xFCndung des Heiligen R\xF6mischen Reiches", text: "Otto I. wird zum Kaiser gekr\xF6nt \u2013 Beginn des Heiligen R\xF6mischen Reiches als loser Verbund deutscher Territorien." },
      { year: 1066, title: "Schlacht bei Hastings", text: "Wilhelm der Eroberer besiegt die Angelsachsen und normannisiert England grundlegend." },
      { year: 1077, title: "Gang nach Canossa", text: "Kaiser Heinrich IV. unterwirft sich im Investiturstreit \xF6ffentlich Papst Gregor VII. \u2013 H\xF6hepunkt des Machtkampfs zwischen Kaiser und Papst." },
      { year: 1096, title: "Beginn der Kreuzz\xFCge", text: "Nach dem Aufruf Papst Urbans II. ziehen Kreuzfahrerheere Richtung Jerusalem \u2013 Beginn von zwei Jahrhunderten Kreuzz\xFCgen." },
      { year: 1099, title: "Eroberung Jerusalems", text: "Kreuzfahrer erobern Jerusalem und errichten mehrere Kreuzfahrerstaaten in der Levante." },
      { year: 1147, title: "Zweiter Kreuzzug", text: "Ein europ\xE4isches Gro\xDFheer scheitert bei dem Versuch, die Kreuzfahrerstaaten zu st\xE4rken." },
      { year: 1187, title: "Saladin erobert Jerusalem zur\xFCck", text: "Der ayyubidische Sultan Saladin besiegt die Kreuzfahrer entscheidend bei Hattin und nimmt Jerusalem ein." },
      { year: 1191, title: "Dritter Kreuzzug", text: "Richard L\xF6wenherz, Philipp II. von Frankreich und Friedrich Barbarossa versuchen erfolglos, Jerusalem zur\xFCckzuerobern; ein Waffenstillstand mit Saladin sichert aber Pilgerzugang." },
      { year: 1204, title: "Pl\xFCnderung Konstantinopels (Vierter Kreuzzug)", text: "Kreuzfahrer richten sich gegen die christliche Schwesterstadt Byzanz statt gegen Muslime \u2013 schw\xE4cht Byzanz dauerhaft und vertieft die Kluft zwischen West- und Ostkirche." },
      { year: 1206, title: "Dschingis Khan wird Gro\xDFkhan", text: "Die mongolischen St\xE4mme werden geeint; Beginn der gr\xF6\xDFten Landeroberung der Geschichte." },
      { year: 1212, title: "Kinderkreuzzug", text: "Tausende jugendliche Kreuzfahrer ohne milit\xE4rische Ausbildung brechen Richtung Heiliges Land auf \u2013 die meisten sterben oder werden versklavt." },
      { year: 1215, title: "Magna Carta", text: "Englische Adlige zwingen K\xF6nig Johann Ohneland zur Anerkennung von Rechten \u2013 fr\xFCher Meilenstein des Rechtsstaats." },
      { year: 1228, title: "Kreuzzug Friedrichs II.", text: "Kaiser Friedrich II. erreicht durch Diplomatie statt Krieg die vor\xFCbergehende R\xFCckgabe Jerusalems \u2013 einzigartig unter den Kreuzz\xFCgen." },
      { year: 1241, title: "Mongolensturm erreicht Europa", text: "Mongolische Heere besiegen polnische und ungarische Ritterheere, ziehen sich aber nach dem Tod des Gro\xDFkhans zur\xFCck." },
      { year: 1248, title: "Siebter Kreuzzug Ludwigs IX.", text: "Der franz\xF6sische K\xF6nig greift \xC4gypten an, ger\xE4t aber in Gefangenschaft und muss sich freikaufen." },
      { year: 1258, title: "Mongolische Eroberung Bagdads", text: "Die Zerst\xF6rung Bagdads beendet das Abbasidenkalifat und gilt als Ende des islamischen 'Goldenen Zeitalters'." },
      { year: 1270, title: "Achter Kreuzzug und Tod Ludwigs IX.", text: "Der franz\xF6sische K\xF6nig stirbt bei einem letzten Kreuzzugsversuch vor Tunis an einer Seuche \u2013 praktisches Ende der gro\xDFen Kreuzzugsbewegung." },
      { year: 1271, title: "Marco Polo bricht nach China auf", text: "Der venezianische Kaufmann reist an den Hof des Mongolenherrschers Kublai Khan und pr\xE4gt europ\xE4ische Asienvorstellungen." },
      { year: 1291, title: "Ende der Kreuzfahrerstaaten", text: "Mit dem Fall von Akkon verlieren die Kreuzfahrer ihre letzte Bastion im Heiligen Land." },
      { year: 1324, title: "Pilgerreise des Mansa Musa", text: "Der Herrscher des westafrikanischen Malireichs reist mit enormem Goldreichtum nach Mekka und wird international bekannt." },
      { year: 1337, title: "Beginn des Hundertj\xE4hrigen Krieges", text: "England und Frankreich beginnen einen jahrzehntelangen Konflikt um die franz\xF6sische Krone." },
      { year: 1347, title: "Der Schwarze Tod erreicht Europa", text: "Die Pest t\xF6tet innerhalb weniger Jahre sch\xE4tzungsweise ein Drittel der europ\xE4ischen Bev\xF6lkerung." },
      { year: 1358, title: "Goldene Bulle", text: "Kaiser Karl IV. regelt die K\xF6nigswahl im Heiligen R\xF6mischen Reich und st\xE4rkt die Kurf\xFCrsten." },
      { year: 1368, title: "Ming-Dynastie in China", text: "Die Ming l\xF6sen die mongolische Yuan-Dynastie ab und leiten eine Bl\xFCtezeit chinesischer Kultur ein." },
      { year: 1381, title: "Englischer Bauernaufstand", text: "Hohe Steuern und Pestfolgen l\xF6sen einen der gr\xF6\xDFten mittelalterlichen Volksaufst\xE4nde Englands aus." },
      { year: 1420, title: "Beginn der Hussitenkriege", text: "Anh\xE4nger Jan Hus' k\xE4mpfen gegen Kaiser und Kirche \u2013 fr\xFCher Ausdruck religi\xF6ser Reformbewegungen." },
      { year: 1429, title: "Jeanne d'Arc befreit Orl\xE9ans", text: "Die junge Bauerntochter wendet im Hundertj\xE4hrigen Krieg das Blatt zugunsten Frankreichs." },
      { year: 1453, title: "Fall Konstantinopels", text: "Die Osmanen erobern Konstantinopel und beenden das Byzantinische Reich endg\xFCltig." },
      { year: 1453, title: "Ende des Hundertj\xE4hrigen Krieges", text: "Frankreich vertreibt die Engl\xE4nder weitgehend vom Kontinent \u2013 Grundstein eines gest\xE4rkten franz\xF6sischen Nationalgef\xFChls." },
      { year: 1455, title: "Gutenbergs Buchdruck", text: "Johannes Gutenberg druckt mit beweglichen Lettern die erste vollst\xE4ndige Bibel \u2013 Medienrevolution mit Fernwirkung." },
      { year: 1492, title: "Fall von Granada / Ende der Reconquista", text: "Die letzten islamischen Herrscher werden aus Spanien vertrieben \u2013 im selben Jahr sticht Kolumbus in See." },
      { year: 1492, title: "Kolumbus erreicht Amerika", text: "Christoph Kolumbus landet in der Karibik und leitet die europ\xE4ische Kolonisierung Amerikas ein." }
    ],
    figures: [
      { name: "Justinian I.", years: "ca. 482\u2013565", text: "Ostr\xF6mischer Kaiser, lie\xDF das r\xF6mische Recht kodifizieren und die Hagia Sophia erbauen." },
      { name: "Mohammed", years: "ca. 570\u2013632", text: "Religionsstifter des Islam, dessen Lehren binnen weniger Jahrhunderte von Spanien bis Zentralasien verbreitet wurden." },
      { name: "Karl der Gro\xDFe", years: "747\u2013814", text: "Fr\xE4nkischer K\xF6nig und Kaiser, einte weite Teile West- und Mitteleuropas und f\xF6rderte Bildung ('Karolingische Renaissance')." },
      { name: "Alfred der Gro\xDFe", years: "849\u2013899", text: "Angels\xE4chsischer K\xF6nig, verteidigte England erfolgreich gegen die Wikinger und f\xF6rderte Bildung und Recht." },
      { name: "Otto I.", years: "912\u2013973", text: "Erster Kaiser des Heiligen R\xF6mischen Reiches, sicherte die Ostgrenze und st\xE4rkte die Kirche als Machtst\xFCtze." },
      { name: "Wilhelm der Eroberer", years: "1028\u20131087", text: "Normannischer Herzog, eroberte 1066 England und ver\xE4nderte dessen Sprache, Recht und Adel grundlegend." },
      { name: "Dschingis Khan", years: "ca. 1162\u20131227", text: "Begr\xFCnder des Mongolenreichs, das zum gr\xF6\xDFten zusammenh\xE4ngenden Landreich der Geschichte wurde." },
      { name: "Saladin", years: "1137\u20131193", text: "Kurdisch-muslimischer Sultan, eroberte Jerusalem von den Kreuzfahrern zur\xFCck und galt als ritterlicher Gegner." },
      { name: "Mansa Musa", years: "ca. 1280\u20131337", text: "Herrscher des westafrikanischen Malireichs, gilt aufgrund seines Goldreichtums als m\xF6glicherweise reichster Mensch der Geschichte." },
      { name: "Thomas von Aquin", years: "1225\u20131274", text: "Mittelalterlicher Theologe und Philosoph, verband christliche Lehre mit aristotelischer Philosophie." },
      { name: "Jeanne d'Arc", years: "1412\u20131431", text: "Franz\xF6sische Nationalheldin, f\xFChrte im Hundertj\xE4hrigen Krieg franz\xF6sische Truppen an, wurde sp\xE4ter als Ketzerin verbrannt." },
      { name: "Marco Polo", years: "1254\u20131324", text: "Venezianischer H\xE4ndler und Reisender, dessen Berichte \xFCber China Europas Asienbild jahrhundertelang pr\xE4gten." },
      { name: "Johannes Gutenberg", years: "ca. 1400\u20131468", text: "Erfinder des Buchdrucks mit beweglichen Lettern, erm\xF6glichte massenhafte Verbreitung von Wissen." },
      { name: "Basileios II.", years: "958\u20131025", text: "Byzantinischer Kaiser, genannt 'Bulgarent\xF6ter', f\xFChrte das Reich zu seiner gr\xF6\xDFten mittelalterlichen Machtentfaltung." },
      { name: "Alexios I. Komnenos", years: "1048\u20131118", text: "Byzantinischer Kaiser, dessen Hilferuf an den Westen den Ersten Kreuzzug mit ausl\xF6ste." },
      { name: "Gottfried von Bouillon", years: "ca. 1060\u20131100", text: "Anf\xFChrer des Ersten Kreuzzugs, erster Herrscher des K\xF6nigreichs Jerusalem." },
      { name: "Balduin I. von Jerusalem", years: "ca. 1058\u20131118", text: "Bruder Gottfrieds von Bouillon, erster K\xF6nig von Jerusalem, festigte die junge Kreuzfahrerherrschaft in der Levante." },
      { name: "Friedrich I. Barbarossa", years: "ca. 1122\u20131190", text: "Kaiser des Heiligen R\xF6mischen Reiches, ertrank auf dem Weg zum Dritten Kreuzzug in Kleinasien." },
      { name: "Richard L\xF6wenherz", years: "1157\u20131199", text: "Englischer K\xF6nig, prominenter Anf\xFChrer des Dritten Kreuzzugs, k\xE4mpfte gegen Saladin um Jerusalem." },
      { name: "Ludwig IX. der Heilige", years: "1214\u20131270", text: "Franz\xF6sischer K\xF6nig, f\xFChrte zwei Kreuzz\xFCge an und starb bei der Belagerung von Tunis; sp\xE4ter heiliggesprochen." },
      { name: "Baibars", years: "ca. 1223\u20131277", text: "Mamlukensultan, stoppte die Mongolen bei Ain Dschalut und eroberte zahlreiche Kreuzfahrerfestungen zur\xFCck." }
    ],
    nations: [
      { name: "Byzantinisches Reich", text: "Ostr\xF6misches Reich mit Hauptstadt Konstantinopel, bewahrte \xFCber 1000 Jahre antikes Wissen und orthodoxes Christentum." },
      { name: "Fr\xE4nkisches Reich / Heiliges R\xF6misches Reich", text: "Zentrale Macht in West- und Mitteleuropa, Vorl\xE4ufer moderner europ\xE4ischer Staaten." },
      { name: "Kalifat (Umayyaden, Abbasiden)", text: "Islamische Gro\xDFreiche mit Bl\xFCtezeiten in Wissenschaft, Mathematik und Medizin, Zentrum u.a. Bagdad." },
      { name: "Mongolenreich", text: "Gr\xF6\xDFtes zusammenh\xE4ngendes Landreich der Geschichte unter Dschingis Khan und seinen Nachfolgern." },
      { name: "Song- und Ming-Dynastie (China)", text: "Chinesische Kaiserreiche mit technologischen Innovationen wie Papiergeld, Schie\xDFpulver, Kompass und Porzellankunst." },
      { name: "Malireich", text: "Westafrikanisches Gro\xDFreich mit enormem Goldreichtum, gepr\xE4gt durch den Herrscher Mansa Musa und Handel \xFCber die Sahara." },
      { name: "Kiewer Rus", text: "Fr\xFChes ostslawisches Reich, Ursprung von Russland, der Ukraine und Wei\xDFrussland." },
      { name: "Aztekenreich", text: "Mesoamerikanisches Reich mit Hauptstadt Tenochtitlan, gepr\xE4gt durch Kriegertum, Tributsystem und monumentale Tempelanlagen." }
    ],
    dynastyGroups: [
      {
        title: "Byzantinische Kaiserdynastien",
        items: [
          { name: "Justinianische Dynastie (518\u2013602)", text: "Justinian I. l\xE4sst das r\xF6mische Recht kodifizieren, die Hagia Sophia errichten und erobert zeitweise Italien und Nordafrika zur\xFCck." },
          { name: "Herakleische Dynastie (610\u2013711)", text: "Herakleios wehrt die Perser ab, verliert aber weite Teile des Reiches an die rasch expandierenden arabischen Heere." },
          { name: "Makedonische Dynastie (867\u20131056)", text: "Unter Basileios II. erlebt Byzanz seine gr\xF6\xDFte mittelalterliche Machtentfaltung, u.a. Sieg \xFCber das Bulgarenreich." },
          { name: "Komnenen-Dynastie (1081\u20131185)", text: "Nach der schweren Niederlage von Manzikert (1071) stabilisiert Alexios I. das Reich und bittet den Westen um Hilfe \u2013 Ausl\xF6ser der Kreuzz\xFCge." },
          { name: "Palaiologen-Dynastie (1259\u20131453)", text: "Letzte byzantinische Dynastie, zunehmend geschw\xE4chtes Restreich, endet mit dem Fall Konstantinopels 1453." }
        ]
      },
      {
        title: "Outremer \u2013 die Kreuzfahrerstaaten",
        items: [
          { name: "K\xF6nigreich Jerusalem (1099\u20131291)", text: "Zentraler und m\xE4chtigster Kreuzfahrerstaat, gegr\xFCndet von Gottfried von Bouillon nach der Eroberung Jerusalems 1099; endet mit dem Fall Akkons." },
          { name: "Grafschaft Edessa (1098\u20131150)", text: "N\xF6rdlichster und erster gegr\xFCndeter Kreuzfahrerstaat; sein Fall 1144 l\xF6st den Zweiten Kreuzzug aus." },
          { name: "F\xFCrstentum Antiochia (1098\u20131268)", text: "Wichtiger Handels- und Machtknotenpunkt an der nordsyrischen K\xFCste, lange umk\xE4mpft zwischen Kreuzfahrern, Byzantinern und muslimischen Nachbarn." },
          { name: "Grafschaft Tripolis (1102\u20131289)", text: "Letzter neu gegr\xFCndeter Kreuzfahrerstaat, fiel als vorletzter an die \xE4gyptischen Mamluken." }
        ]
      },
      {
        title: "Islamische Kalifate",
        items: [
          { name: "Rechtgeleitete Kalifen (632\u2013661)", text: "Die ersten vier Nachfolger Mohammeds (u.a. Abu Bakr, Umar, Uthman, Ali) leiten die rasche islamische Expansion \xFCber den Nahen Osten und Nordafrika." },
          { name: "Umayyaden-Kalifat (661\u2013750)", text: "Mit Hauptstadt Damaskus erreicht das Kalifat seine gr\xF6\xDFte Ausdehnung \u2013 von Spanien bis an die Grenzen Indiens." },
          { name: "Abbasiden-Kalifat (750\u20131258)", text: "Bagdad wird zum Zentrum eines 'Goldenen Zeitalters' der Wissenschaft, Philosophie und Medizin; endet mit der mongolischen Eroberung Bagdads." },
          { name: "Fatimiden-Kalifat (909\u20131171)", text: "Schiitisches Gegenkalifat mit Zentrum in Nordafrika und \xC4gypten, gr\xFCndete Kairo als neue Hauptstadt." }
        ]
      }
    ]
  },
  {
    id: "fruehe-neuzeit",
    name: "Fr\xFChe Neuzeit",
    span: "ca. 1500 \u2013 1789",
    startYear: 1500,
    endYear: 1789,
    color: "#8a3020",
    accent: "#d4a24a",
    lead: "Reformation, Kolonialismus und die Wissenschaftliche Revolution.",
    description: "Die Fr\xFChe Neuzeit bringt weitreichende Umbr\xFCche: Die Reformation spaltet die Kirche, europ\xE4ische M\xE4chte errichten Kolonialreiche, und die Wissenschaftliche Revolution ver\xE4ndert das Weltbild grundlegend. Absolutistische Monarchien konzentrieren Macht, w\xE4hrend Aufkl\xE4rung und B\xFCrgertum die Grundlagen f\xFCr Umw\xE4lzungen legen.",
    events: [
      { year: 1498, title: "Vasco da Gama erreicht Indien", text: "Der Portugiese findet den Seeweg um Afrika nach Indien \u2013 Grundlage des europ\xE4ischen Gew\xFCrzhandels." },
      { year: 1517, title: "Luthers 95 Thesen", text: "Martin Luther ver\xF6ffentlicht seine Thesen gegen den Ablasshandel \u2013 Beginn der Reformation und Kirchenspaltung." },
      { year: 1519, title: "Beginn der Eroberung Mexikos", text: "Hern\xE1n Cort\xE9s beginnt den Feldzug gegen das Aztekenreich, das binnen zwei Jahren f\xE4llt." },
      { year: 1521, title: "Reichstag zu Worms", text: "Luther widerruft vor Kaiser Karl V. nicht und wird ge\xE4chtet \u2013 H\xF6hepunkt des fr\xFChen Reformationskonflikts." },
      { year: 1522, title: "Vollendung der ersten Weltumsegelung", text: "Magellan selbst stirbt bereits 1521 auf den Philippinen; sein Kapit\xE4n Juan Sebasti\xE1n Elcano vollendet mit den letzten \xDCberlebenden 1522 die erste Erdumsegelung und beweist praktisch die Kugelgestalt der Erde." },
      { year: 1524, title: "Deutscher Bauernkrieg", text: "B\xE4uerliche Aufst\xE4nde fordern soziale und religi\xF6se Reformen \u2013 blutig niedergeschlagener gr\xF6\xDFter Volksaufstand vor der Neuzeit." },
      { year: 1533, title: "Eroberung des Inkareichs", text: "Francisco Pizarro erobert mit einer kleinen Truppe das riesige Inkareich in S\xFCdamerika." },
      { year: 1543, title: "Kopernikanische Wende", text: "Nikolaus Kopernikus ver\xF6ffentlicht sein heliozentrisches Weltbild \u2013 Grundstein der modernen Astronomie." },
      { year: 1545, title: "Konzil von Trient beginnt", text: "Die katholische Kirche reagiert mit Reformen auf die Reformation ('Gegenreformation')." },
      { year: 1588, title: "Untergang der Spanischen Armada", text: "England besiegt die spanische Flotte und etabliert sich als aufstrebende Seemacht." },
      { year: 1600, title: "Gr\xFCndung der britischen Ostindien-Kompanie", text: "Eine private Handelsgesellschaft erh\xE4lt weitreichende Vollmachten und wird sp\xE4ter faktischer Herrscher \xFCber weite Teile Indiens." },
      { year: 1602, title: "Gr\xFCndung der ersten B\xF6rse der Welt", text: "Mit der Amsterdamer B\xF6rse und den handelbaren Aktien der Niederl\xE4ndischen Ostindien-Kompanie (VOC) entsteht der erste moderne Aktienmarkt der Geschichte." },
      { year: 1637, title: "Tulpenmanie", text: "In den Niederlanden l\xF6sen spekulative Tulpenzwiebel-Preise einen der fr\xFChesten dokumentierten Finanzblasen-Crashs der Geschichte aus." },
      { year: 1618, title: "Beginn des Drei\xDFigj\xE4hrigen Kriegs", text: "Der Prager Fenstersturz l\xF6st einen der verheerendsten Kriege der europ\xE4ischen Geschichte aus." },
      { year: 1642, title: "Englischer B\xFCrgerkrieg", text: "K\xF6nig und Parlament ringen gewaltsam um die Macht; endet mit der Hinrichtung Karls I." },
      { year: 1648, title: "Westf\xE4lischer Friede", text: "Der Drei\xDFigj\xE4hrige Krieg endet; das Prinzip staatlicher Souver\xE4nit\xE4t wird v\xF6lkerrechtlich verankert." },
      { year: 1665, title: "Gro\xDFe Pest von London", text: "Eine der letzten gro\xDFen Pestepidemien Europas fordert in London zehntausende Todesopfer." },
      { year: 1687, title: "Newtons Principia Mathematica", text: "Isaac Newton formuliert die Gravitationsgesetze und legt die Grundlage der klassischen Physik." },
      { year: 1688, title: "Glorreiche Revolution", text: "Das englische Parlament setzt K\xF6nig Jakob II. ab und st\xE4rkt dauerhaft die parlamentarische Macht." },
      { year: 1689, title: "Bill of Rights in England", text: "Die englische Krone wird dauerhaft an das Parlament gebunden \u2013 Meilenstein konstitutioneller Monarchie." },
      { year: 1701, title: "Kr\xF6nung des ersten K\xF6nigs in Preu\xDFen", text: "Brandenburg-Preu\xDFen wird formal zum K\xF6nigreich \u2013 Aufstieg zur europ\xE4ischen Milit\xE4rmacht beginnt." },
      { year: 1721, title: "Zar Peter der Gro\xDFe kr\xF6nt sich zum Kaiser", text: "Russland wird formal zum Kaiserreich und orientiert sich st\xE4rker an westeurop\xE4ischen Vorbildern." },
      { year: 1740, title: "Beginn der \xD6sterreichischen Erbfolgekriege", text: "Preu\xDFen unter Friedrich II. erobert Schlesien und stellt sich als neue Gro\xDFmacht gegen Habsburg." },
      { year: 1751, title: "Erste Encyclop\xE9die erscheint", text: "Diderot und d'Alembert ver\xF6ffentlichen ein Kompendium aufkl\xE4rerischen Wissens \u2013 zentrales Werk der Aufkl\xE4rung." },
      { year: 1756, title: "Beginn des Siebenj\xE4hrigen Kriegs", text: "Ein globaler Konflikt zwischen den europ\xE4ischen Gro\xDFm\xE4chten wird teils als 'erster Weltkrieg' bezeichnet." },
      { year: 1762, title: "Rousseaus 'Gesellschaftsvertrag'", text: "Jean-Jacques Rousseau entwirft ein einflussreiches Konzept von Volkssouver\xE4nit\xE4t und Gesellschaftsvertrag." },
      { year: 1769, title: "James Watts verbesserte Dampfmaschine", text: "Die entscheidend verbesserte Dampfmaschine legt die technische Grundlage der bevorstehenden Industriellen Revolution." },
      { year: 1776, title: "US-Unabh\xE4ngigkeitserkl\xE4rung", text: "Die 13 amerikanischen Kolonien erkl\xE4ren ihre Unabh\xE4ngigkeit von Gro\xDFbritannien." },
      { year: 1789, title: "Beginn der Franz\xF6sischen Revolution", text: "Der Sturm auf die Bastille markiert den Beginn eines Umbruchs, der die politische Ordnung Europas ver\xE4ndert." }
    ],
    figures: [
      { name: "Martin Luther", years: "1483\u20131546", text: "Deutscher Theologe, Ausl\xF6ser der Reformation, \xFCbersetzte die Bibel ins Deutsche und pr\xE4gte damit die Sprache." },
      { name: "Nikolaus Kopernikus", years: "1473\u20131543", text: "Astronom, begr\xFCndete das heliozentrische Weltbild gegen die vorherrschende geozentrische Lehre." },
      { name: "Hern\xE1n Cort\xE9s", years: "1485\u20131547", text: "Spanischer Konquistador, eroberte mit wenigen hundert M\xE4nnern das Aztekenreich." },
      { name: "Galileo Galilei", years: "1564\u20131642", text: "Physiker und Astronom, verteidigte das kopernikanische Weltbild und geriet in Konflikt mit der Kirche." },
      { name: "Elisabeth I.", years: "1533\u20131603", text: "Englische K\xF6nigin, f\xFChrte England zur Seemacht und f\xF6rderte eine kulturelle Bl\xFCtezeit (Shakespeare)." },
      { name: "Isaac Newton", years: "1643\u20131727", text: "Physiker und Mathematiker, formulierte die Gravitationsgesetze und die klassische Mechanik." },
      { name: "Ludwig XIV.", years: "1638\u20131715", text: "'Sonnenk\xF6nig', Inbegriff des Absolutismus, erbaute Versailles als Machtzentrum Frankreichs." },
      { name: "Peter der Gro\xDFe", years: "1672\u20131725", text: "Russischer Zar, modernisierte Russland nach westeurop\xE4ischem Vorbild und gr\xFCndete St. Petersburg." },
      { name: "Friedrich der Gro\xDFe", years: "1712\u20131786", text: "Preu\xDFischer K\xF6nig, machte Preu\xDFen durch Kriege und Verwaltungsreformen zur europ\xE4ischen Gro\xDFmacht." },
      { name: "Maria Theresia", years: "1717\u20131780", text: "Habsburgische Herrscherin, modernisierte Verwaltung, Bildung und Milit\xE4r des Habsburgerreichs." },
      { name: "Katharina die Gro\xDFe", years: "1729\u20131796", text: "Russische Zarin, erweiterte das Reich erheblich und f\xF6rderte Kunst und Aufkl\xE4rung am Hof." },
      { name: "Voltaire", years: "1694\u20131778", text: "Franz\xF6sischer Aufkl\xE4rer, Verfechter von Meinungsfreiheit und Kirchenkritik." },
      { name: "Adam Smith", years: "1723\u20131790", text: "Schottischer \xD6konom, Begr\xFCnder der modernen National\xF6konomie mit 'Der Wohlstand der Nationen'." },
      { name: "S\xFCleyman der Pr\xE4chtige", years: "1494\u20131566", text: "Osmanischer Sultan, f\xFChrte das Reich zu seiner gr\xF6\xDFten territorialen und kulturellen Bl\xFCte." },
      { name: "Akbar der Gro\xDFe", years: "1542\u20131605", text: "Mogulherrscher Indiens, bekannt f\xFCr religi\xF6se Toleranzpolitik und Verwaltungsreformen in einem riesigen Vielv\xF6lkerreich." },
      { name: "Oliver Cromwell", years: "1599\u20131658", text: "Englischer General und Staatsmann, f\xFChrte den Sturz der Monarchie an und regierte als 'Lordprotektor'." }
    ],
    nations: [
      { name: "Spanisches Kolonialreich", text: "Erste globale Kolonialmacht, kontrollierte weite Teile Amerikas nach dem Fall der Azteken- und Inkareiche." },
      { name: "Osmanisches Reich", text: "Islamisches Gro\xDFreich, das bis vor Wien vorstie\xDF und weite Teile S\xFCdosteuropas, Nordafrikas und des Nahen Ostens beherrschte." },
      { name: "Vereinigte Niederlande", text: "Handelsmacht des 'Goldenen Zeitalters' mit globalem Handelsnetz (VOC) und kultureller Bl\xFCte." },
      { name: "K\xF6nigreich Preu\xDFen", text: "Aufstrebende deutsche Milit\xE4rmacht, die im 18. Jahrhundert zur europ\xE4ischen Gro\xDFmacht aufstieg." },
      { name: "Mogulreich (Indien)", text: "Islamisches Gro\xDFreich in Indien, bekannt f\xFCr kulturelle Bl\xFCte (Taj Mahal) und religi\xF6se Vielfalt." },
      { name: "Habsburgerreich", text: "Vielv\xF6lkerstaat in Mitteleuropa unter der Dynastie Habsburg, lange pr\xE4gende Kraft im Heiligen R\xF6mischen Reich." },
      { name: "Tokugawa-Shogunat (Japan)", text: "Japanisches Herrschaftssystem mit \xFCber 250 Jahren weitgehender Isolation und innerer Stabilit\xE4t ('Edo-Zeit')." }
    ],
    dynastyGroups: [
      {
        title: "Herrscherh\xE4user der Fr\xFChen Neuzeit",
        items: [
          { name: "Habsburger (Spanien & \xD6sterreich)", text: "Karl V. vereinigt kurzzeitig Spanien, \xD6sterreich und weite Teile Amerikas unter einer Krone ('Reich, in dem die Sonne nie unterging'); sp\xE4tere Trennung in eine spanische und \xF6sterreichische Linie." },
          { name: "Bourbonen (Frankreich)", text: "Ab Heinrich IV. (1589) regierende Dynastie, H\xF6hepunkt unter dem 'Sonnenk\xF6nig' Ludwig XIV.; endet mit der Hinrichtung Ludwigs XVI. 1793." },
          { name: "Osmanische Sultane", text: "Von S\xFCleyman dem Pr\xE4chtigen (16. Jh.) bis zum allm\xE4hlichen Niedergang beherrschen die Osmanen S\xFCdosteuropa, Nordafrika und den Nahen Osten." },
          { name: "Romanov-Zaren (Russland)", text: "Ab 1613 regierende Dynastie; unter Peter dem Gro\xDFen und Katharina der Gro\xDFen Aufstieg Russlands zur europ\xE4ischen Gro\xDFmacht." },
          { name: "Ming- und fr\xFChe Qing-Dynastie (China)", text: "Die Ming (bis 1644) f\xF6rdern Handel und Kultur; die aus der Mandschurei stammenden Qing l\xF6sen sie ab und errichten das letzte chinesische Kaiserreich." }
        ]
      }
    ]
  },
  {
    id: "industrialisierung",
    name: "Revolution & Industrialisierung",
    span: "1789 \u2013 1914",
    startYear: 1789,
    endYear: 1914,
    color: "#6b1f1f",
    accent: "#d4af37",
    lead: "B\xFCrgerliche Revolutionen, Dampfmaschinen und Nationalstaaten.",
    description: "Das 'lange 19. Jahrhundert' beginnt mit der Franz\xF6sischen Revolution und endet mit dem Ersten Weltkrieg. Die Industrielle Revolution ver\xE4ndert Wirtschaft und Gesellschaft radikal, Nationalstaaten entstehen oder einigen sich (Deutschland, Italien), und europ\xE4ische M\xE4chte teilen weite Teile der Welt kolonial unter sich auf.",
    events: [
      { year: 1789, title: "Franz\xF6sische Revolution", text: "Sturz der absoluten Monarchie in Frankreich, Erkl\xE4rung der Menschen- und B\xFCrgerrechte." },
      { year: 1793, title: "Hinrichtung Ludwigs XVI.", text: "Der franz\xF6sische K\xF6nig wird \xF6ffentlich hingerichtet \u2013 radikaler Bruch mit der monarchischen Ordnung Europas." },
      { year: 1799, title: "Napoleon wird Erster Konsul", text: "Napoleon Bonaparte \xFCbernimmt durch Staatsstreich die Macht in Frankreich." },
      { year: 1804, title: "Napoleon kr\xF6nt sich zum Kaiser", text: "Frankreich wird zum Kaiserreich; Napoleon beginnt seine europ\xE4ischen Eroberungsfeldz\xFCge." },
      { year: 1804, title: "Unabh\xE4ngigkeit Haitis", text: "Nach einem erfolgreichen Sklavenaufstand entsteht die erste unabh\xE4ngige Schwarze Republik der Welt." },
      { year: 1806, title: "Ende des Heiligen R\xF6mischen Reiches", text: "Unter napoleonischem Druck legt Kaiser Franz II. die Reichskrone nieder \u2013 Ende eines \xFCber 800-j\xE4hrigen Staatsgebildes." },
      { year: 1812, title: "Napoleons Russlandfeldzug scheitert", text: "Die 'Grande Arm\xE9e' wird durch Winter, Logistikprobleme und russischen Widerstand nahezu vernichtet." },
      { year: 1815, title: "Schlacht bei Waterloo", text: "Napoleons endg\xFCltige Niederlage beendet die napoleonische \xC4ra; der Wiener Kongress ordnet Europa neu." },
      { year: 1830, title: "Erste Eisenbahnlinie", text: "Die Strecke Liverpool\u2013Manchester er\xF6ffnet das Zeitalter der Eisenbahn und beschleunigt die Industrialisierung." },
      { year: 1833, title: "Abschaffung der Sklaverei im Britischen Empire", text: "Gro\xDFbritannien verbietet die Sklaverei in seinen Kolonien \u2013 wichtiger Schritt der internationalen Abolitionsbewegung." },
      { year: 1848, title: "Europ\xE4ische Revolutionen", text: "In vielen europ\xE4ischen Staaten fordern B\xFCrger Verfassungen und nationale Einheit \u2013 der 'V\xF6lkerfr\xFChling' scheitert gr\xF6\xDFtenteils kurzfristig." },
      { year: 1848, title: "Kommunistisches Manifest", text: "Marx und Engels ver\xF6ffentlichen ihre einflussreiche Streitschrift, die sp\xE4tere sozialistische Bewegungen pr\xE4gt." },
      { year: 1853, title: "Beginn des Krimkriegs", text: "Ein Konflikt zwischen Russland und einer europ\xE4ischen Koalition zeigt fr\xFCh moderne, verlustreiche Kriegsf\xFChrung." },
      { year: 1859, title: "Darwins 'Entstehung der Arten'", text: "Charles Darwins Evolutionstheorie ver\xE4ndert das biologische und philosophische Weltbild grundlegend." },
      { year: 1861, title: "Italienische Einigung", text: "Unter F\xFChrung Garibaldis und Cavours entsteht ein geeinter italienischer Nationalstaat." },
      { year: 1861, title: "Beginn des Amerikanischen B\xFCrgerkriegs", text: "Der Konflikt um Sklaverei und Staatenrechte zwischen Nord- und S\xFCdstaaten beginnt." },
      { year: 1863, title: "Sklaverei-Emanzipationserkl\xE4rung (USA)", text: "Abraham Lincoln erkl\xE4rt die Sklaven in den Konf\xF6derierten Staaten f\xFCr frei." },
      { year: 1868, title: "Meiji-Restauration in Japan", text: "Japan modernisiert sich binnen weniger Jahrzehnte radikal nach westlichem Vorbild und wird zur asiatischen Gro\xDFmacht." },
      { year: 1869, title: "Er\xF6ffnung des Suezkanals", text: "Die Verbindung zwischen Mittelmeer und Rotem Meer verk\xFCrzt den Seeweg nach Asien erheblich." },
      { year: 1870, title: "Deutsch-Franz\xF6sischer Krieg", text: "Preu\xDFen besiegt Frankreich entscheidend und ebnet den Weg zur deutschen Reichsgr\xFCndung." },
      { year: 1871, title: "Deutsche Reichsgr\xFCndung", text: "Nach dem Sieg \xFCber Frankreich wird das Deutsche Kaiserreich im Spiegelsaal von Versailles ausgerufen." },
      { year: 1876, title: "Erfindung des Telefons", text: "Alexander Graham Bell meldet das Telefon zum Patent an \u2013 Beginn der modernen Telekommunikation." },
      { year: 1879, title: "Erfindung der Gl\xFChlampe", text: "Thomas Edison entwickelt eine praxistaugliche Gl\xFChlampe und treibt die Elektrifizierung voran." },
      { year: 1884, title: "Berliner Kongo-Konferenz", text: "Europ\xE4ische M\xE4chte teilen Afrika weitgehend ohne Beteiligung der Betroffenen unter sich auf." },
      { year: 1893, title: "Neuseeland f\xFChrt Frauenwahlrecht ein", text: "Als erstes Land der Welt gew\xE4hrt Neuseeland Frauen das aktive Wahlrecht." },
      { year: 1903, title: "Erster motorisierter Flug", text: "Die Gebr\xFCder Wright gelingt in Kitty Hawk der erste kontrollierte Motorflug." },
      { year: 1904, title: "Russisch-Japanischer Krieg", text: "Japan besiegt erstmals eine europ\xE4ische Gro\xDFmacht \u2013 Schock f\xFCr das europ\xE4ische Selbstverst\xE4ndnis." },
      { year: 1905, title: "Einsteins Relativit\xE4tstheorie", text: "Albert Einstein ver\xF6ffentlicht seine spezielle Relativit\xE4tstheorie und ver\xE4ndert das physikalische Weltbild." },
      { year: 1905, title: "Russische Revolution von 1905", text: "Massenproteste erzwingen von Zar Nikolaus II. erste Zugest\xE4ndnisse \u2013 Vorbote der Revolution von 1917." },
      { year: 1908, title: "Flie\xDFbandproduktion bei Ford", text: "Henry Ford revolutioniert mit der Massenfertigung des Model T die industrielle Produktion." },
      { year: 1912, title: "Untergang der Titanic", text: "Der als unsinkbar geltende Ozeandampfer sinkt auf seiner Jungfernfahrt \u2013 \xFCber 1500 Menschen sterben." }
    ],
    figures: [
      { name: "Napoleon Bonaparte", years: "1769\u20131821", text: "Franz\xF6sischer Feldherr und Kaiser, pr\xE4gte Europa milit\xE4risch und rechtlich (Code Civil) nachhaltig." },
      { name: "Sim\xF3n Bol\xEDvar", years: "1783\u20131830", text: "'Der Befreier' S\xFCdamerikas, f\xFChrte mehrere Staaten in die Unabh\xE4ngigkeit von Spanien." },
      { name: "Otto von Bismarck", years: "1815\u20131898", text: "Preu\xDFischer Staatsmann, 'Reichsgr\xFCnder' Deutschlands durch geschickte Diplomatie und drei Kriege." },
      { name: "Abraham Lincoln", years: "1809\u20131865", text: "US-Pr\xE4sident w\xE4hrend des B\xFCrgerkriegs, beendete die Sklaverei, wurde kurz nach Kriegsende ermordet." },
      { name: "K\xF6nigin Victoria", years: "1819\u20131901", text: "Britische Monarchin, unter deren langer Herrschaft das britische Weltreich seine gr\xF6\xDFte Ausdehnung erreichte." },
      { name: "Giuseppe Garibaldi", years: "1807\u20131882", text: "Italienischer Freiheitsk\xE4mpfer, Schl\xFCsselfigur der italienischen Einigung." },
      { name: "Charles Darwin", years: "1809\u20131882", text: "Naturforscher, begr\xFCndete mit der Evolutionstheorie ein neues biologisches Weltbild." },
      { name: "Karl Marx", years: "1818\u20131883", text: "Philosoph und \xD6konom, pr\xE4gte mit dem 'Kapital' die Kapitalismuskritik und sozialistische Bewegungen." },
      { name: "Thomas Edison", years: "1847\u20131931", text: "US-Erfinder, meldete \xFCber 1000 Patente an, darunter die praxistaugliche Gl\xFChlampe." },
      { name: "Louis Pasteur", years: "1822\u20131895", text: "Franz\xF6sischer Chemiker und Mikrobiologe, begr\xFCndete die moderne Bakteriologie und Impfstoffentwicklung." },
      { name: "Marie Curie", years: "1867\u20131934", text: "Physikerin und Chemikerin, erforschte Radioaktivit\xE4t und erhielt als einzige Frau bislang Nobelpreise in zwei Naturwissenschaften." },
      { name: "Florence Nightingale", years: "1820\u20131910", text: "Britische Krankenpflegerin, begr\xFCndete durch ihre Arbeit im Krimkrieg die moderne, hygieneorientierte Krankenpflege." },
      { name: "Sun Yat-sen", years: "1866\u20131925", text: "Chinesischer Revolution\xE4r, f\xFChrend an der Xinhai-Revolution beteiligt, gilt als 'Vater' der Republik China." }
    ],
    nations: [
      { name: "Britisches Weltreich", text: "Gr\xF6\xDFtes Kolonialreich der Geschichte, \xFCber das 'die Sonne nie unterging', Vorreiter der Industrialisierung." },
      { name: "Deutsches Kaiserreich", text: "1871 gegr\xFCndeter Nationalstaat, wurde binnen weniger Jahrzehnte zur f\xFChrenden Industrie- und Milit\xE4rmacht Europas." },
      { name: "USA (werdende Weltmacht)", text: "Wuchs durch Westexpansion, Industrialisierung und Einwanderung zur wirtschaftlichen Gro\xDFmacht heran." },
      { name: "Meiji-Japan", text: "Modernisierte sich nach 1868 rasant nach westlichem Vorbild und besiegte 1905 als erste asiatische Macht ein europ\xE4isches Reich." },
      { name: "\xD6sterreich-Ungarn", text: "Vielv\xF6lkerstaat in Mitteleuropa, dessen innere Spannungen ma\xDFgeblich zum Ersten Weltkrieg beitrugen." },
      { name: "Zarenreich Russland", text: "Riesiges, agrarisch gepr\xE4gtes Kaiserreich mit wachsenden sozialen Spannungen vor der Revolution von 1917." }
    ],
    dynastyGroups: [
      {
        title: "Deutsches Kaiserreich \u2013 Kaiser & Kanzler",
        items: [
          { name: "Wilhelm I. & Otto von Bismarck (1871\u20131888/1890)", text: "Erster deutscher Kaiser und sein 'Eiserner Kanzler' pr\xE4gen Reichsgr\xFCndung, Sozialgesetzgebung und ein komplexes B\xFCndnissystem zur Kriegsvermeidung." },
          { name: "Wilhelm II. (1888\u20131918)", text: "Letzter deutscher Kaiser, entlie\xDF Bismarck, verfolgte aggressive Flotten- und Weltpolitik und dankte 1918 nach der Niederlage ab." }
        ]
      },
      {
        title: "Frankreich \u2013 Wechselnde Regime",
        items: [
          { name: "Zweites Kaiserreich (1852\u20131870)", text: "Napoleon III. (Neffe Napoleons I.) regiert autorit\xE4r, modernisiert Paris grundlegend, scheitert milit\xE4risch gegen Preu\xDFen 1870." },
          { name: "Dritte Republik (1870\u20131940)", text: "Nach Napoleons III. Sturz entsteht eine langlebige parlamentarische Republik, die Frankreich durch den Ersten Weltkrieg f\xFChrt." }
        ]
      },
      {
        title: "Sp\xE4te Qing-Dynastie (China)",
        items: [
          { name: "Kaiserinwitwe Cixi (Regentschaft 1861\u20131908)", text: "De-facto-Herrscherin Chinas in einer Phase wachsenden westlichen Drucks, gescheiterter Reformversuche und innerer Aufst\xE4nde (u.a. Boxeraufstand 1900)." },
          { name: "Ende des chinesischen Kaisertums (1912)", text: "Nach \xFCber 2000 Jahren Kaiserherrschaft wird China nach der Xinhai-Revolution Republik \u2013 der letzte Kaiser Puyi dankt als Kind ab." }
        ]
      },
      {
        title: "Meiji-Japan",
        items: [
          { name: "Kaiser Meiji (1867\u20131912)", text: "Unter seiner Herrschaft modernisiert sich Japan in wenigen Jahrzehnten von einem isolierten Feudalstaat zur asiatischen Industrie- und Milit\xE4rmacht." }
        ]
      }
    ]
  },
  {
    id: "moderne",
    name: "20./21. Jahrhundert",
    span: "1914 \u2013 heute",
    startYear: 1914,
    endYear: 2026,
    color: "#a01f1f",
    accent: "#e8c14a",
    lead: "Weltkriege, Digitalisierung und eine vernetzte Welt.",
    description: "Kein Jahrhundert ver\xE4nderte die Welt so schnell wie das 20. Jahrhundert: zwei Weltkriege, der Kalte Krieg, Dekolonisierung, technologische Revolutionen von der Raumfahrt bis zum Internet. Das 21. Jahrhundert ist gepr\xE4gt von Globalisierung, Digitalisierung und neuen geopolitischen Verschiebungen.",
    events: [
      { year: 1914, title: "Beginn des Ersten Weltkriegs", text: "Das Attentat von Sarajevo l\xF6st eine Kette von B\xFCndnisf\xE4llen aus, die in einen globalen Krieg m\xFCndet." },
      { year: 1914, title: "Der Schlieffenplan scheitert", text: "Deutschlands Plan eines schnellen Zangenangriffs gegen Frankreich \xFCber Belgien soll einen Zweifrontenkrieg vermeiden \u2013 ger\xE4t aber ins Stocken und m\xFCndet in einen langwierigen Stellungskrieg." },
      { year: 1914, title: "Erste Marneschlacht", text: "Franz\xF6sische und britische Truppen stoppen den deutschen Vormarsch vor Paris \u2013 das Scheitern des Schlieffenplans wird endg\xFCltig besiegelt." },
      { year: 1915, title: "Gallipoli-Kampagne", text: "Ein alliierter Angriff auf die Dardanellen gegen das Osmanische Reich scheitert verlustreich; wichtiger Karrierestart f\xFCr den sp\xE4teren australischen und t\xFCrkischen Nationalstolz (Atat\xFCrk)." },
      { year: 1916, title: "Schlacht um Verdun", text: "Eine der verlustreichsten Schlachten der Geschichte symbolisiert das Grauen des Stellungskriegs \u2013 \xFCber 700.000 Tote und Verwundete." },
      { year: 1916, title: "Schlacht an der Somme", text: "Mit \xFCber einer Million Opfern eine der blutigsten Schlachten der Menschheitsgeschichte; erster Panzereinsatz der Kriegsgeschichte." },
      { year: 1916, title: "Seeschlacht am Skagerrak (Jutland)", text: "Gr\xF6\xDFte Seeschlacht des Ersten Weltkriegs zwischen deutscher und britischer Flotte, taktisch unentschieden, strategisch bleibt Gro\xDFbritannien Seemacht Nr. 1." },
      { year: 1917, title: "Russische Oktoberrevolution", text: "Die Bolschewiki unter Lenin \xFCbernehmen die Macht \u2013 Beginn der Sowjetunion." },
      { year: 1918, title: "Friede von Brest-Litowsk", text: "Sowjetrussland scheidet unter harten Bedingungen aus dem Krieg aus \u2013 Deutschland kann Truppen an die Westfront verlegen." },
      { year: 1918, title: "Ende des Ersten Weltkriegs", text: "Waffenstillstand von Compi\xE8gne beendet den Krieg; Millionen Tote und der Zusammenbruch mehrerer Reiche pr\xE4gen die Folgen." },
      { year: 1919, title: "Vertrag von Versailles", text: "Deutschland wird zu hohen Reparationen und Gebietsabtretungen verpflichtet \u2013 belastet die Weimarer Republik schwer." },
      { year: 1922, title: "Gr\xFCndung der Sowjetunion", text: "Aus dem russischen B\xFCrgerkrieg geht die UdSSR als kommunistischer Vielv\xF6lkerstaat hervor." },
      { year: 1929, title: "Weltwirtschaftskrise", text: "Der B\xF6rsencrash an der Wall Street l\xF6st eine globale Wirtschaftskrise mit Massenarbeitslosigkeit aus." },
      { year: 1933, title: "Macht\xFCbernahme der Nationalsozialisten", text: "Adolf Hitler wird deutscher Reichskanzler \u2013 Beginn der NS-Diktatur." },
      { year: 1936, title: "Spanischer B\xFCrgerkrieg beginnt", text: "Ein blutiger Konflikt zwischen Republikanern und Franco-Anh\xE4ngern wird zum Vorspiel des Zweiten Weltkriegs." },
      { year: 1939, title: "Beginn des Zweiten Weltkriegs", text: "Der deutsche \xDCberfall auf Polen l\xF6st den bislang verheerendsten Krieg der Geschichte aus." },
      { year: 1940, title: "Westfeldzug und Fall Frankreichs", text: "Mit einer schnellen 'Blitzkrieg'-Strategie besiegt die Wehrmacht Frankreich binnen sechs Wochen; britische Truppen entkommen bei D\xFCnkirchen." },
      { year: 1940, title: "Luftschlacht um England", text: "Die deutsche Luftwaffe scheitert an der Royal Air Force \u2013 erste gro\xDFe Niederlage NS-Deutschlands verhindert eine geplante Invasion Gro\xDFbritanniens." },
      { year: 1941, title: "Unternehmen Barbarossa", text: "Deutschland \xFCberf\xE4llt die Sowjetunion mit der gr\xF6\xDFten Invasionsstreitmacht der Geschichte \u2013 Bruch des Hitler-Stalin-Pakts und Beginn des Vernichtungskriegs im Osten." },
      { year: 1941, title: "Angriff auf Pearl Harbor", text: "Japans \xDCberraschungsangriff bringt die USA in den Zweiten Weltkrieg." },
      { year: 1941, title: "Wannseekonferenz", text: "NS-Funktion\xE4re planen die systematische Ermordung der europ\xE4ischen Juden \u2013 organisatorischer Kern des Holocaust." },
      { year: 1942, title: "Schlacht von Midway", text: "Die US-Marine besiegt die japanische Flotte entscheidend im Pazifik \u2013 Wendepunkt des Krieges gegen Japan." },
      { year: 1942, title: "Zweite Schlacht von El Alamein", text: "Die Alliierten unter Montgomery besiegen das deutsch-italienische Afrikakorps unter Rommel entscheidend in Nordafrika." },
      { year: 1943, title: "Schlacht von Stalingrad endet", text: "Die Kapitulation der eingekesselten deutschen 6. Armee gilt als entscheidender Wendepunkt des Krieges an der Ostfront." },
      { year: 1944, title: "Landung in der Normandie (D-Day)", text: "Alliierte Truppen er\xF6ffnen die Westfront gegen NS-Deutschland \u2013 Wendepunkt des Kriegs in Europa." },
      { year: 1945, title: "Ende des Zweiten Weltkriegs / Atombombenabw\xFCrfe", text: "Nach den Atombombenabw\xFCrfen auf Hiroshima und Nagasaki kapituliert Japan; der Krieg fordert weltweit \xFCber 60 Millionen Tote." },
      { year: 1945, title: "Gr\xFCndung der Vereinten Nationen", text: "Als Lehre aus zwei Weltkriegen entsteht eine internationale Organisation zur Sicherung von Frieden und Zusammenarbeit." },
      { year: 1947, title: "Unabh\xE4ngigkeit Indiens", text: "Nach jahrzehntelangem gewaltfreiem Widerstand wird Indien unabh\xE4ngig; die Teilung in Indien und Pakistan fordert zugleich enorme Opfer." },
      { year: 1948, title: "Gr\xFCndung des Staates Israel", text: "Nach dem UN-Teilungsplan wird der Staat Israel ausgerufen \u2013 Beginn anhaltender Nahostkonflikte." },
      { year: 1949, title: "Gr\xFCndung von BRD und DDR", text: "Deutschland wird in zwei Staaten geteilt \u2013 Ausdruck des beginnenden Kalten Krieges." },
      { year: 1949, title: "Gr\xFCndung der Volksrepublik China", text: "Mao Zedong ruft nach dem Sieg im B\xFCrgerkrieg die Volksrepublik aus." },
      { year: 1950, title: "Beginn des Koreakriegs", text: "Der Konflikt zwischen Nord- und S\xFCdkorea wird zum ersten gro\xDFen 'Stellvertreterkrieg' des Kalten Krieges." },
      { year: 1955, title: "Rosa Parks' Widerstand", text: "Ihre Weigerung, ihren Bussitzplatz zu r\xE4umen, wird zum Fanal der US-B\xFCrgerrechtsbewegung." },
      { year: 1961, title: "Bau der Berliner Mauer", text: "Die DDR riegelt West-Berlin ab \u2013 Symbol der deutschen und europ\xE4ischen Teilung." },
      { year: 1961, title: "Erster Mensch im Weltraum", text: "Der Sowjetkosmonaut Juri Gagarin umkreist als erster Mensch die Erde." },
      { year: 1962, title: "Kubakrise", text: "Die Welt steht am Rand eines Atomkriegs zwischen den USA und der Sowjetunion \u2013 wird diplomatisch entsch\xE4rft." },
      { year: 1963, title: "'I Have a Dream'-Rede", text: "Martin Luther King h\xE4lt seine ber\xFChmte Rede beim Marsch auf Washington f\xFCr B\xFCrgerrechte." },
      { year: 1969, title: "Erste Mondlandung", text: "Neil Armstrong und Buzz Aldrin betreten als erste Menschen den Mond \u2013 H\xF6hepunkt des Wettlaufs ins All." },
      { year: 1973, title: "\xD6lkrise", text: "Ein \xD6l-Embargo arabischer Staaten l\xF6st weltweit wirtschaftliche Schockwellen aus." },
      { year: 1975, title: "Ende des Vietnamkriegs", text: "Der Fall Saigons beendet einen der pr\xE4gendsten und umstrittensten Kriege des Kalten Krieges." },
      { year: 1986, title: "Reaktorkatastrophe von Tschernobyl", text: "Die schwerste Atomkatastrophe der Geschichte kontaminiert weite Teile der Ukraine und Belarus." },
      { year: 1989, title: "Fall der Berliner Mauer", text: "Friedliche Proteste f\xFChren zur Mauer\xF6ffnung \u2013 Symbol des Endes des Kalten Krieges." },
      { year: 1989, title: "Proteste auf dem Tiananmen-Platz", text: "Die chinesische Regierung schl\xE4gt Demokratieproteste in Peking gewaltsam nieder." },
      { year: 1990, title: "Deutsche Wiedervereinigung", text: "BRD und DDR vereinigen sich zu einem gemeinsamen Staat." },
      { year: 1991, title: "Aufl\xF6sung der Sowjetunion", text: "Die UdSSR zerf\xE4llt in unabh\xE4ngige Staaten \u2013 Ende des Kalten Krieges." },
      { year: 1991, title: "Erstes World Wide Web geht online", text: "Tim Berners-Lee ver\xF6ffentlicht die erste Webseite \u2013 Grundstein des heutigen Internets." },
      { year: 1994, title: "Ende der Apartheid", text: "Nelson Mandela wird nach den ersten freien Wahlen erster schwarzer Pr\xE4sident S\xFCdafrikas." },
      { year: 2001, title: "Terroranschl\xE4ge vom 11. September", text: "Anschl\xE4ge auf das World Trade Center ver\xE4ndern globale Sicherheitspolitik nachhaltig." },
      { year: 2002, title: "Einf\xFChrung des Euro-Bargelds", text: "Zw\xF6lf europ\xE4ische Staaten f\xFChren eine gemeinsame W\xE4hrung ein \u2013 bislang gr\xF6\xDFtes Geldumstellungsprojekt der Geschichte." },
      { year: 2008, title: "Globale Finanzkrise", text: "Die Immobilienkrise in den USA l\xF6st eine weltweite Banken- und Wirtschaftskrise aus." },
      { year: 2011, title: "Arabischer Fr\xFChling", text: "Massenproteste st\xFCrzen mehrere autorit\xE4re Regierungen in Nordafrika und dem Nahen Osten." },
      { year: 2016, title: "Brexit-Referendum", text: "Das Vereinigte K\xF6nigreich stimmt f\xFCr den Austritt aus der Europ\xE4ischen Union." },
      { year: 2020, title: "COVID-19-Pandemie", text: "Eine globale Pandemie f\xFChrt zu Lockdowns, wirtschaftlichen Einbr\xFCchen und beschleunigter Digitalisierung weltweit." },
      { year: 2022, title: "Russischer \xDCberfall auf die Ukraine", text: "Russland beginnt einen gro\xDFangelegten Angriffskrieg \u2013 gr\xF6\xDFter zwischenstaatlicher Krieg in Europa seit 1945." },
      { year: 2022, title: "\xD6ffentlicher Durchbruch generativer KI", text: "Chatbots wie ChatGPT machen gro\xDFe Sprachmodelle einem Massenpublikum zug\xE4nglich und l\xF6sen weltweite Debatten \xFCber KI aus." }
    ],
    figures: [
      { name: "Winston Churchill", years: "1874\u20131965", text: "Britischer Premierminister, f\xFChrte Gro\xDFbritannien durch den Zweiten Weltkrieg gegen NS-Deutschland." },
      { name: "Adolf Hitler", years: "1889\u20131945", text: "Diktator des nationalsozialistischen Deutschlands, verantwortlich f\xFCr den Zweiten Weltkrieg und den Holocaust." },
      { name: "Franklin D. Roosevelt", years: "1882\u20131945", text: "US-Pr\xE4sident, f\xFChrte die USA durch die Weltwirtschaftskrise ('New Deal') und den Zweiten Weltkrieg." },
      { name: "Mahatma Gandhi", years: "1869\u20131948", text: "F\xFChrte die indische Unabh\xE4ngigkeitsbewegung durch gewaltfreien Widerstand gegen die britische Kolonialherrschaft." },
      { name: "Mao Zedong", years: "1893\u20131976", text: "Gr\xFCnder der Volksrepublik China, pr\xE4gte das Land durch kommunistische Herrschaft und tiefgreifende Umbr\xFCche." },
      { name: "Nelson Mandela", years: "1918\u20132013", text: "S\xFCdafrikanischer Freiheitsk\xE4mpfer und sp\xE4terer Pr\xE4sident, \xFCberwand friedlich das Apartheidsystem." },
      { name: "Martin Luther King Jr.", years: "1929\u20131968", text: "F\xFChrende Figur der US-B\xFCrgerrechtsbewegung, setzte sich gewaltfrei f\xFCr Gleichberechtigung ein." },
      { name: "John F. Kennedy", years: "1917\u20131963", text: "US-Pr\xE4sident, meisterte die Kubakrise und initiierte das Mondlandeprogramm; wurde 1963 ermordet." },
      { name: "Mikhail Gorbatschow", years: "1931\u20132022", text: "Letzter Staatschef der UdSSR, erm\xF6glichte durch Glasnost und Perestroika das Ende des Kalten Krieges." },
      { name: "Margaret Thatcher", years: "1925\u20132013", text: "Britische Premierministerin, pr\xE4gte mit marktwirtschaftlichen Reformen die Politik der 1980er-Jahre." },
      { name: "Deng Xiaoping", years: "1904\u20131997", text: "Chinesischer Reformpolitiker, \xF6ffnete China wirtschaftlich und leitete dessen rasanten Aufstieg ein." },
      { name: "Albert Einstein", years: "1879\u20131955", text: "Physiker, dessen Relativit\xE4tstheorie das moderne physikalische Weltbild begr\xFCndete." },
      { name: "Ho Chi Minh", years: "1890\u20131969", text: "Vietnamesischer Revolution\xE4r und Staatsgr\xFCnder, f\xFChrte den Unabh\xE4ngigkeitskampf gegen Frankreich und sp\xE4ter die USA an." },
      { name: "Golda Meir", years: "1898\u20131978", text: "Israelische Premierministerin, pr\xE4gende Figur der fr\xFChen Staatsgeschichte Israels." },
      { name: "Anwar as-Sadat", years: "1918\u20131981", text: "\xC4gyptischer Pr\xE4sident, schloss 1979 den ersten Friedensvertrag eines arabischen Staates mit Israel und wurde daf\xFCr sp\xE4ter ermordet." }
    ],
    nations: [
      { name: "USA (Supermacht)", text: "Wurde nach 1945 zur f\xFChrenden Wirtschafts- und Milit\xE4rmacht der westlichen Welt." },
      { name: "Sowjetunion", text: "Kommunistischer Vielv\xF6lkerstaat und Gegenspieler der USA im Kalten Krieg, existierte 1922\u20131991." },
      { name: "Europ\xE4ische Union", text: "Aus der Montanunion hervorgegangenes B\xFCndnis, das europ\xE4ische Staaten wirtschaftlich und politisch integriert." },
      { name: "Volksrepublik China", text: "Seit 1949 kommunistisch regiert, seit den 1980er-Jahren wirtschaftlich zur Weltmacht aufgestiegen." },
      { name: "Indien (unabh\xE4ngig)", text: "Gr\xF6\xDFte Demokratie der Welt seit 1947, heute bev\xF6lkerungsreichstes Land und aufstrebende Wirtschaftsmacht." }
    ]
  }
];
const SCHLUESSELMOMENTE = [
  {"year":-3200,"title":"Erfindung der Schrift","category":"Erfindung","text":"Mit der Keilschrift und den Hieroglyphen wird Wissen erstmals dauerhaft speicher- und übertragbar – die Voraussetzung für Verwaltung, Recht, Wissenschaft und Geschichtsschreibung selbst."},
  {"year":-508,"title":"Geburt der Demokratie in Athen","category":"Politischer Umbruch","text":"Kleisthenes' Reformen schaffen erstmals ein politisches System, in dem Bürger direkt über ihr Gemeinwesen entscheiden – ein Ideal, das über zwei Jahrtausende später weltweit wirkt."},
  {"year":-218,"title":"Hannibal überquert die Alpen","category":"Wendepunkt im Krieg","text":"Der scheinbar unmögliche Alpenübergang mit Kriegselefanten bringt Rom an den Rand der Vernichtung – hätte Hannibal Rom eingenommen, wäre die Weltgeschichte grundlegend anders verlaufen."},
  {"year":33,"title":"Entstehung des Christentums","category":"Religion","text":"Aus einer kleinen jüdischen Reformbewegung wird binnen dreier Jahrhunderte die Staatsreligion Roms – und später die prägende religiöse Kraft des Abendlandes."},
  {"year":476,"title":"Untergang Westroms","category":"Politischer Umbruch","text":"Das Ende der antiken Ordnung in Westeuropa leitet Jahrhunderte politischer Zersplitterung ein, aus denen die heutigen europäischen Nationen langsam hervorgehen."},
  {"year":622,"title":"Hidschra und Aufstieg des Islam","category":"Religion","text":"Binnen eines Jahrhunderts nach Mohammeds Auswanderung entsteht ein Reich von Spanien bis Zentralasien – eine der schnellsten kulturellen Expansionen der Geschichte."},
  {"year":1347,"title":"Der Schwarze Tod","category":"Katastrophe","text":"Ein Drittel der europäischen Bevölkerung stirbt innerhalb weniger Jahre – der dadurch entstehende Arbeitskräftemangel verschiebt langfristig die Machtverhältnisse zwischen Adel und einfachem Volk."},
  {"year":1453,"title":"Fall Konstantinopels","category":"Wendepunkt im Krieg","text":"Mit dem Ende des Byzantinischen Reiches verschiebt sich die Machtbalance zwischen Orient und Okzident endgültig – zugleich fliehen griechische Gelehrte nach Westeuropa und befeuern die Renaissance."},
  {"year":1455,"title":"Gutenbergs Buchdruck","category":"Erfindung","text":"Innerhalb weniger Jahrzehnte vervielfacht sich die Menge verfügbarer Bücher in Europa – ohne den Buchdruck wären Reformation und Wissenschaftliche Revolution kaum denkbar gewesen."},
  {"year":1492,"title":"Kolumbus erreicht Amerika","category":"Wendepunkt","text":"Zwei bis dahin getrennte Weltteile treten in dauerhaften Kontakt – mit enormen Folgen für Handel, Migration, Krankheiten und Machtverhältnisse, aber auch verheerenden Folgen für indigene Bevölkerungen."},
  {"year":1517,"title":"Beginn der Reformation","category":"Religion","text":"Luthers Thesen spalten die westliche Christenheit dauerhaft und lösen jahrhundertelange religiöse und politische Konflikte in Europa aus."},
  {"year":1776,"title":"US-Unabhängigkeitserklärung","category":"Politischer Umbruch","text":"Erstmals gründet sich ein moderner Staat explizit auf den Prinzipien von Volkssouveränität und unveräußerlichen Menschenrechten."},
  {"year":1789,"title":"Französische Revolution","category":"Politischer Umbruch","text":"Der Sturz der absoluten Monarchie und die Erklärung der Menschenrechte erschüttern die politische Ordnung ganz Europas und wirken bis in die Gegenwart nach."},
  {"year":1859,"title":"Darwins Evolutionstheorie","category":"Wissenschaft","text":"Die Idee der natürlichen Auslese verändert nicht nur die Biologie, sondern auch das philosophische und religiöse Selbstverständnis des Menschen."},
  {"year":1869,"title":"Eröffnung des Suezkanals","category":"Erfindung","text":"Die künstliche Verbindung zweier Meere verkürzt den Seeweg zwischen Europa und Asien um tausende Kilometer und beschleunigt die Globalisierung des 19. Jahrhunderts."},
  {"year":1914,"title":"Ausbruch des Ersten Weltkriegs","category":"Wendepunkt im Krieg","text":"Ein regionales Attentat löst durch ein Bündnisgeflecht einen globalen Krieg aus, der vier Großreiche zerstört und die politische Landkarte des 20. Jahrhunderts neu zeichnet."},
  {"year":1917,"title":"Russische Revolution","category":"Politischer Umbruch","text":"Erstmals übernimmt eine kommunistische Bewegung dauerhaft die Staatsmacht – prägt Weltpolitik und Ideologiekonflikte für das gesamte 20. Jahrhundert."},
  {"year":1929,"title":"Weltwirtschaftskrise","category":"Katastrophe","text":"Der Crash an der Wall Street löst eine globale Depression aus, die politische Radikalisierung begünstigt und den Weg für den Zweiten Weltkrieg mit ebnet."},
  {"year":1945,"title":"Erster Einsatz von Atomwaffen","category":"Wendepunkt im Krieg","text":"Die Abwürfe auf Hiroshima und Nagasaki beenden den Zweiten Weltkrieg und eröffnen zugleich das nukleare Zeitalter mit permanenter Auslöschungsgefahr."},
  {"year":1969,"title":"Erste Mondlandung","category":"Erfindung","text":"Der erste Schritt eines Menschen auf einem anderen Himmelskörper markiert den technologischen und symbolischen Höhepunkt des Kalten-Kriegs-Wettlaufs ins All."},
  {"year":1989,"title":"Fall der Berliner Mauer","category":"Politischer Umbruch","text":"Friedliche Massenproteste beenden die deutsche und europäische Teilung und läuten das Ende des Kalten Krieges ein."},
  {"year":1991,"title":"Erfindung des World Wide Web","category":"Erfindung","text":"Tim Berners-Lees Konzept macht das Internet einem Massenpublikum zugänglich und legt den Grundstein der digitalen Vernetzung der Welt."},
  {"year":2022,"title":"Durchbruch generativer KI","category":"Erfindung","text":"Große Sprachmodelle werden erstmals massentauglich – mit potenziell ähnlich weitreichenden Folgen für Arbeit und Wissen wie einst der Buchdruck."},
  {"year":-3100,"title":"Vereinigung Ober- und Unterägyptens","category":"Politischer Umbruch","text":"Menes/Narmer eint zwei Königreiche zu einem der ersten Territorialstaaten der Geschichte – Grundlage für 3000 Jahre pharaonische Kontinuität."},
  {"year":-1274,"title":"Schlacht bei Kadesch & erster Friedensvertrag","category":"Wendepunkt im Krieg","text":"Nach der größten Streitwagenschlacht der Geschichte schließen Ägypter und Hethiter den ältesten erhaltenen zwischenstaatlichen Friedensvertrag der Menschheit."},
  {"year":-776,"title":"Erste Olympische Spiele","category":"Kultur","text":"Ein religiös-sportliches Fest wird zum verbindenden Element der zerstrittenen griechischen Stadtstaaten und zur Blaupause für Wettkampfkultur bis heute."},
  {"year":-221,"title":"Erste Reichseinigung Chinas","category":"Politischer Umbruch","text":"Qin Shi Huang vereinigt die zerstrittenen chinesischen Reiche gewaltsam und schafft mit einheitlicher Schrift und Verwaltung die Grundlage des chinesischen Staates bis heute."},
  {"year":1204,"title":"Plünderung Konstantinopels durch Kreuzfahrer","category":"Wendepunkt im Krieg","text":"Der Vierte Kreuzzug richtet sich gegen die christliche Schwesterstadt Byzanz statt gegen Muslime – ein Verrat, der Byzanz dauerhaft schwächt und den Fall an die Osmanen 1453 vorbereitet."},
  {"year":1258,"title":"Mongolische Zerstörung Bagdads","category":"Katastrophe","text":"Die Vernichtung der abbasidischen Hauptstadt beendet abrupt das islamische 'Goldene Zeitalter' der Wissenschaft und gilt als eine der größten kulturellen Katastrophen der Geschichte."},
  {"year":1492,"title":"Fall von Granada","category":"Politischer Umbruch","text":"Das Ende von 800 Jahren islamischer Präsenz in Spanien fällt zufällig mit dem Beginn der europäischen Expansion nach Amerika zusammen."},
  {"year":1602,"title":"Gründung der ersten Börse der Welt","category":"Erfindung","text":"Mit handelbaren VOC-Aktien in Amsterdam entsteht ein völlig neues Finanzinstrument, das die Grundlage moderner Kapitalmärkte legt."},
  {"year":1648,"title":"Westfälischer Friede","category":"Politischer Umbruch","text":"Das Prinzip staatlicher Souveränität wird erstmals völkerrechtlich verankert – Grundstein des bis heute gültigen internationalen Staatensystems."},
  {"year":1839,"title":"Erster Opiumkrieg","category":"Wendepunkt im Krieg","text":"Großbritanniens militärische Erzwingung des Opiumhandels leitet Chinas 'Jahrhundert der Demütigung' ein und verschiebt die globale Machtbalance zugunsten Europas."},
  {"year":1871,"title":"Deutsche Reichsgründung","category":"Politischer Umbruch","text":"Die Einigung unter preußischer Führung schafft eine neue Großmacht im Zentrum Europas und verändert das europäische Kräftegleichgewicht dauerhaft."},
  {"year":1905,"title":"Russisch-Japanischer Krieg endet","category":"Wendepunkt im Krieg","text":"Erstmals besiegt eine asiatische Macht eine europäische Großmacht – erschüttert den europäischen Überlegenheitsglauben und inspiriert Unabhängigkeitsbewegungen in ganz Asien."},
  {"year":1917,"title":"Balfour-Deklaration","category":"Politischer Umbruch","text":"Großbritannien unterstützt erstmals offiziell eine 'nationale Heimstätte' für das jüdische Volk in Palästina – Ausgangspunkt späterer Nahostkonflikte."},
  {"year":1947,"title":"Teilung Indiens","category":"Katastrophe","text":"Die überstürzte Teilung in Indien und Pakistan löst eine der größten Zwangsmigrationen der Geschichte mit hunderttausenden Toten aus."},
  {"year":105,"title":"Erfindung des Papiers","category":"Erfindung","text":"Der chinesische Hofbeamte Cai Lun verfeinert die Papierherstellung entscheidend – über Jahrhunderte breitet sich diese Beschreibstoff-Revolution allmählich bis nach Europa aus."},
  {"year":868,"title":"Ältestes datiertes gedrucktes Buch","category":"Erfindung","text":"Das chinesische Diamant-Sutra entsteht im Holzdruckverfahren – Jahrhunderte vor Gutenberg, wenn auch ohne bewegliche Lettern."},
  {"year":1044,"title":"Erfindung des Schießpulvers","category":"Erfindung","text":"Chinesische Alchemisten entdecken die explosive Mischung zunächst für medizinische Zwecke – ihre militärische Nutzung verändert binnen Jahrhunderten die Kriegsführung weltweit grundlegend."},
  {"year":1088,"title":"Gründung der ersten europäischen Universität","category":"Kultur","text":"Die Universität von Bologna entsteht als älteste durchgehend bestehende Universität Europas – Grundstein institutionalisierter höherer Bildung."},
  {"year":1494,"title":"Vertrag von Tordesillas","category":"Politischer Umbruch","text":"Spanien und Portugal teilen mit päpstlichem Segen die außereuropäische Welt entlang einer imaginären Linie unter sich auf – ohne jede Rücksicht auf die dort lebenden Bevölkerungen."},
  {"year":1500,"title":"Der Kolumbianische Austausch","category":"Wendepunkt","text":"Pflanzen, Tiere, Menschen und Krankheiten zirkulieren erstmals massenhaft zwischen der Alten und der Neuen Welt – mit enormen, teils verheerenden ökologischen und demografischen Folgen."},
  {"year":1555,"title":"Augsburger Religionsfrieden","category":"Religion","text":"Das Prinzip 'Cuius regio, eius religio' erlaubt Landesherren erstmals, die Konfession ihres Territoriums selbst zu bestimmen – ein früher Schritt hin zu religiöser Koexistenz in Europa."},
  {"year":1796,"title":"Erfindung der Pockenimpfung","category":"Wissenschaft","text":"Edward Jenner entwickelt die erste wissenschaftlich fundierte Impfung der Geschichte – Grundstein der modernen Immunologie und späteren Ausrottung der Pocken."},
  {"year":1815,"title":"Wiener Kongress","category":"Politischer Umbruch","text":"Die europäischen Großmächte etablieren ein Mächtegleichgewicht-System, das Europa fast ein Jahrhundert lang vor einem erneuten Großkrieg bewahrt."},
  {"year":1865,"title":"Verfassungsrechtliches Ende der Sklaverei in den USA","category":"Politischer Umbruch","text":"Nach der Emanzipationserklärung von 1863, die zunächst nur Sklaven in den Konföderierten Staaten betraf, beendet der 13. Verfassungszusatz 1865 die Sklaverei landesweit rechtlich endgültig – tatsächliche gesellschaftliche Gleichstellung blieb dennoch ein langer Weg."},
  {"year":1916,"title":"Sykes-Picot-Abkommen","category":"Politischer Umbruch","text":"Großbritannien und Frankreich ziehen im Geheimen willkürliche Grenzen durch den Nahen Osten – mit Konfliktfolgen, die bis heute spürbar sind."},
  {"year":1945,"title":"Gründung der Vereinten Nationen","category":"Politischer Umbruch","text":"Als institutionelle Lehre aus zwei Weltkriegen entsteht erstmals eine globale Organisation zur Sicherung von Frieden und internationaler Zusammenarbeit."},
  {"year":1960,"title":"'Afrikanisches Jahr'","category":"Politischer Umbruch","text":"Binnen eines einzigen Jahres erlangen 17 afrikanische Staaten ihre Unabhängigkeit von europäischen Kolonialmächten – Höhepunkt der weltweiten Dekolonisierungswelle."},
  {"year":1969,"title":"Geburtsstunde des Internets (ARPANET)","category":"Erfindung","text":"Die erste Datenverbindung zwischen zwei Universitätscomputern legt den technischen Grundstein für das spätere globale Internet."},
  {"year":2003,"title":"Entschlüsselung des menschlichen Genoms","category":"Wissenschaft","text":"Ein internationales Forschungsprojekt kartiert erstmals vollständig die genetische Bauanleitung des Menschen – mit weitreichenden Folgen für Medizin und Biotechnologie."},
  {"year":-3000,"category":"Erfindung","text":"Das Rad taucht zunächst nicht im Verkehr auf, sondern als Töpferscheibe. Erst später wird daraus das Wagenrad – eine Erfindung, die den Transport von Lasten und damit Handel und Krieg grundlegend verändert.","title":"Rad und Töpferscheibe"},
  {"year":-1754,"category":"Politischer Umbruch","title":"Kodex Hammurapi","text":"Der babylonische König lässt Rechtssätze in Stein hauen und öffentlich aufstellen. Entscheidend ist weniger der Inhalt als das Prinzip: Recht wird nachprüfbar, weil es geschrieben und sichtbar ist."},
  {"year":-600,"category":"Erfindung","title":"Erfindung der Münze","text":"In Lydien entstehen erste geprägte Münzen aus Elektron. Geld als genormtes, staatlich garantiertes Tauschmittel macht Handel über Vertrauensgrenzen hinweg möglich."},
  {"year":-221,"category":"Politischer Umbruch","title":"Einigung Chinas","text":"Qin Shihuangdi vereint die Streitenden Reiche, vereinheitlicht Schrift, Maße, Gewichte und Achsenbreiten. Der administrative Rahmen überdauert die Dynastie um zwei Jahrtausende."},
  {"year":105,"category":"Erfindung","title":"Papier in China","text":"Dem Hofbeamten Cai Lun wird die Verbesserung der Papierherstellung zugeschrieben. Über die islamische Welt erreicht das Verfahren erst rund tausend Jahre später Europa."},
  {"year":476,"category":"Wendepunkt","title":"Absetzung des letzten Westkaisers","text":"Odoaker setzt Romulus Augustulus ab. Zeitgenossen sahen darin kaum einen Einschnitt – das Datum wurde erst von späteren Historikern zur Epochengrenze erhoben."},
  {"year":622,"category":"Religion","title":"Hidschra","text":"Mohammeds Auswanderung von Mekka nach Medina markiert den Beginn der islamischen Zeitrechnung – ein Kalender, der von einem politischen Neuanfang aus zählt, nicht von einer Geburt."},
  {"year":800,"category":"Politischer Umbruch","title":"Kaiserkrönung Karls des Großen","text":"Mit der Krönung an Weihnachten 800 wird der Anspruch erneuert, das weströmische Kaisertum fortzusetzen – gegen den Widerspruch von Byzanz."},
  {"year":1088,"category":"Kultur","title":"Erste europäische Universität","text":"In Bologna entsteht eine Gemeinschaft von Studenten und Lehrenden mit eigenen Rechten. Aus solchen Korporationen wird die Universität als eigenständige Institution."},
  {"year":1215,"category":"Politischer Umbruch","title":"Magna Carta","text":"König Johann muss zugestehen, dass auch der Herrscher an Recht gebunden ist – ein Satz, der über Jahrhunderte weiterwirkt, obwohl das Dokument zunächst Adelsinteressen sicherte."},
  {"year":1440,"category":"Wissenschaft","title":"Der Buchdruck","text":"Gutenbergs bewegliche Lettern senken den Buchpreis binnen weniger Jahrzehnte um zwei Drittel. Wissen wird erstmals in großer Zahl vergleichbar – und damit überprüfbar."},
  {"year":1543,"category":"Wissenschaft","title":"Kopernikus stellt die Erde beiseite","text":"In 'De revolutionibus' rückt Kopernikus die Sonne ins Zentrum. Der Bruch liegt weniger in der Astronomie als im Selbstbild: Der Mensch wohnt nicht mehr im Mittelpunkt."},
  {"year":1687,"category":"Wissenschaft","title":"Newtons Principia","text":"Newton zeigt, dass fallende Äpfel und kreisende Planeten denselben Gesetzen folgen. Die Vorstellung, die Natur sei mathematisch beschreibbar, wird zur Grundlage der modernen Wissenschaft."},
  {"year":1755,"category":"Katastrophe","title":"Erdbeben von Lissabon","text":"Das Beben an Allerheiligen zerstört eine europäische Hauptstadt und erschüttert das theologische Weltbild: Wie lässt sich ein solches Unglück mit einer guten Weltordnung vereinbaren? Die Frage prägt die Aufklärung."},
  {"year":1796,"category":"Wissenschaft","title":"Erste Pockenimpfung","text":"Edward Jenner nutzt Kuhpocken zum Schutz vor Pocken. Die Pocken bleiben die einzige menschliche Infektionskrankheit, die je vollständig ausgerottet wurde – 1980 erklärt."},
  {"year":1804,"category":"Politischer Umbruch","title":"Unabhängigkeit Haitis","text":"Aus dem einzigen erfolgreichen Sklavenaufstand der Geschichte geht ein unabhängiger Staat hervor. Die europäischen Mächte und die USA reagieren mit Isolation statt Anerkennung."},
  {"year":1848,"category":"Politischer Umbruch","title":"Revolutionen von 1848","text":"In fast ganz Europa fordern Bewegungen Verfassungen, Pressefreiheit und nationale Einheit. Fast überall scheitern sie kurzfristig – und setzen langfristig den Rahmen."},
  {"year":1859,"category":"Wissenschaft","title":"Darwins Entstehung der Arten","text":"Die Idee gemeinsamer Abstammung durch natürliche Auslese stellt den Menschen in die Naturgeschichte statt über sie."},
  {"year":1865,"category":"Wissenschaft","title":"Mendels Vererbungsregeln","text":"Der Augustinermönch Gregor Mendel beschreibt an Erbsen die Regeln der Vererbung. Seine Arbeit bleibt 35 Jahre unbeachtet, bis sie um 1900 wiederentdeckt wird."},
  {"year":1867,"category":"Wissenschaft","title":"Antiseptische Chirurgie","text":"Joseph Lister führt Antiseptik in den Operationssaal ein. Zuvor starben Patienten häufiger an der Infektion als am Eingriff."},
  {"year":1893,"category":"Politischer Umbruch","title":"Erstes Frauenwahlrecht","text":"Am 19. September 1893 unterzeichnet der Gouverneur den Electoral Act: Neuseeland ist der erste selbstverwaltete Staat, in dem alle Frauen bei Parlamentswahlen wählen dürfen. Einzelne Territorien hatten Frauen schon früher zugelassen. Zehn Wochen später gingen rund 90.000 Neuseeländerinnen zur Wahl – eine Beteiligung von 82 Prozent und damit höher als bei den Männern."},
  {"year":1903,"category":"Erfindung","title":"Erster Motorflug","text":"Die Brüder Wright halten sich mit einem motorisierten Flugzeug in der Luft. Keine sechs Jahrzehnte später fliegen Menschen zum Mond."},
  {"year":1928,"category":"Wissenschaft","title":"Entdeckung des Penicillins","text":"Alexander Fleming bemerkt, dass ein Schimmelpilz Bakterien abtötet. Erst der Massenproduktion im Zweiten Weltkrieg verdankt das Antibiotikum seine Wirkung auf die Sterblichkeit."},
  {"year":1945,"category":"Katastrophe","title":"Hiroshima und Nagasaki","text":"Zum ersten und bisher einzigen Mal werden Kernwaffen im Krieg eingesetzt. Seither prägt die Möglichkeit der Selbstauslöschung die internationale Politik."},
  {"year":1948,"category":"Politischer Umbruch","title":"Allgemeine Erklärung der Menschenrechte","text":"Die UN-Generalversammlung verabschiedet einen Text, der Rechte nicht an Staatsangehörigkeit knüpft, sondern an das Menschsein – rechtlich zunächst unverbindlich, politisch wirkmächtig."},
  {"year":1953,"category":"Wissenschaft","title":"Struktur der DNA","text":"Watson und Crick beschreiben die Doppelhelix – wesentlich gestützt auf Röntgenaufnahmen von Rosalind Franklin, deren Beitrag lange nicht angemessen gewürdigt wurde."},
  {"year":1972,"category":"Wendepunkt","title":"Die Grenzen des Wachstums","text":"Der Bericht an den Club of Rome bringt die Frage, ob unbegrenztes Wachstum auf einem begrenzten Planeten möglich ist, erstmals in die breite Öffentlichkeit."},
  {"year":1980,"category":"Wissenschaft","title":"Pocken ausgerottet","text":"Die WHO erklärt die Pocken für ausgerottet – der bislang einzige derartige Erfolg bei einer menschlichen Infektionskrankheit."},
  {"year":1989,"category":"Erfindung","title":"Das World Wide Web","text":"Tim Berners-Lee entwirft am CERN ein System zum Austausch von Forschungsdaten. 1993 gibt das CERN die Software gemeinfrei – die Entscheidung, die seine Ausbreitung ermöglichte."},
  {"year":1994,"category":"Politischer Umbruch","title":"Ende der Apartheid","text":"Nach den ersten allgemeinen Wahlen Südafrikas wird Nelson Mandela Präsident. Die Wahrheits- und Versöhnungskommission versucht anschließend einen Umgang mit der Vergangenheit ohne Bürgerkrieg."}
];
const FACTS = EPOCHS.flatMap(
  (ep) => ep.events.map((e) => ({ year: e.year, title: e.title, epoch: ep.name, color: ep.color }))
);
const SURPRISING_FACTS = [
  "Kleopatra lebte zeitlich n\xE4her an der Mondlandung als an dem Bau der Cheops-Pyramide.",
  "Die Wikinger erreichten Nordamerika rund 500 Jahre vor Kolumbus.",
  "Oxford University ist \xE4lter als das Aztekenreich.",
  "Der Erste Weltkrieg endete offiziell erst 1919 mit dem Vertrag von Versailles \u2013 der Waffenstillstand war schon 1918.",
  "Napoleon war f\xFCr einen Franzosen seiner Zeit nicht ungew\xF6hnlich klein \u2013 der Mythos entstand durch britische Propaganda und Ma\xDFeinheiten-Verwechslung.",
  "Die Berliner Mauer fiel eher durch ein Missverst\xE4ndnis auf einer Pressekonferenz als durch einen geplanten Beschluss.",
  "Julius Caesar wurde als junger Mann von Piraten entf\xFChrt \u2013 und drohte ihnen scherzhaft, sie sp\xE4ter hinrichten zu lassen. Das tat er nach seiner Freilassung tats\xE4chlich.",
  "Die Gro\xDFe Chinesische Mauer ist vom Weltraum aus mit blo\xDFem Auge nicht erkennbar \u2013 ein hartn\xE4ckiger Mythos.",
  "Isaac Newton entwickelte wichtige Teile seiner Physik, w\xE4hrend Universit\xE4ten wegen der Pest geschlossen waren.",
  "Das Osmanische Reich existierte \xFCber 600 Jahre \u2013 von 1299 bis 1922.",
  "Der Buchdruck verbreitete sich so schnell, dass bereits 1500 \u2013 nur 45 Jahre nach Gutenbergs Bibel \u2013 \xFCber 20 Millionen B\xFCcher in Europa gedruckt worden waren.",
  "Albert Einstein wurde 1952 das Pr\xE4sidentenamt Israels angeboten \u2013 er lehnte ab.",
  "Die Magna Carta von 1215 enthielt urspr\xFCnglich keine Vorstellung von 'Demokratie', wie wir sie heute kennen \u2013 sie sch\xFCtzte vor allem die Rechte des Adels.",
  "Der Vesuv-Ausbruch, der Pompeji zerst\xF6rte, fand vermutlich im Oktober statt, nicht wie lange angenommen im August.",
  "Dschingis Khan verbot Folter und garantierte im Mongolenreich religi\xF6se Toleranz \u2013 ungew\xF6hnlich f\xFCr seine Zeit.",
  "Der Zweite Weltkrieg forderte sch\xE4tzungsweise mehr Menschenleben als jeder andere Krieg der Geschichte: \xFCber 60 Millionen Tote.",
  "Als die Titanic 1912 sank, war der Erste Weltkrieg noch zwei Jahre entfernt.",
  "Wilhelm der Eroberer lie\xDF nach der Eroberung Englands 1086 ein Grundbuch erstellen, das 'Domesday Book' \u2013 eine der fr\xFChesten Volksz\xE4hlungen Europas.",
  "Die Sowjetunion und die USA arbeiteten w\xE4hrend des Zweiten Weltkriegs als Verb\xFCndete zusammen, bevor sie zu Rivalen im Kalten Krieg wurden.",
  "\xD6tzi, die Gletschermumie, trug bei seinem Tod eine Pfeilspitze in der Schulter \u2013 vermutlich Opfer eines Gewaltverbrechens vor \xFCber 5000 Jahren.",
  "Mansa Musa von Mali soll bei seiner Pilgerreise nach Mekka 1324 so viel Gold verteilt haben, dass der Goldpreis in Kairo f\xFCr Jahre einbrach.",
  "Die Pyramiden von Gizeh waren bereits \xE4lter als das R\xF6mische Reich, als Kleopatra lebte.",
  "Sokrates hat selbst nie etwas Schriftliches hinterlassen \u2013 alles, was wir \xFCber ihn wissen, stammt von Sch\xFClern wie Platon.",
  "Der Hundertj\xE4hrige Krieg dauerte tats\xE4chlich 116 Jahre.",
  "Katharina die Gro\xDFe war geb\xFCrtige Deutsche und kam erst durch Heirat an den russischen Zarenhof.",
  "Der erste Weltraumflug eines Menschen (Juri Gagarin, 1961) dauerte nur 108 Minuten.",
  "Napoleons Feldzug nach Russland begann mit \xFCber 600.000 Soldaten \u2013 nur ein Bruchteil kehrte zur\xFCck.",
  "Die Berliner Mauer war zum Zeitpunkt ihres Falls fast genauso lange Symbol der Teilung wie sie heute schon wieder Geschichte ist.",
  "Marie Curie ist bis heute die einzige Person, die Nobelpreise in zwei verschiedenen Naturwissenschaften erhielt (Physik und Chemie).",
  "Rom wurde der Legende nach 753 v. Chr. gegr\xFCndet \u2013 das R\xF6mische Reich bestand damit (inklusive Byzanz) \xFCber 2200 Jahre."
];
const QUOTES = [
  {"text":"Ich weiß, dass ich nichts weiß.","author":"Sokrates","year":"5. Jh. v. Chr.","note":"sinngemäß überliefert durch Platon"},
  {"text":"Veni, vidi, vici. (Ich kam, sah, siegte.)","author":"Julius Caesar","year":"47 v. Chr.","note":"überliefert durch Sueton"},
  {"text":"Der Würfel ist gefallen.","author":"Julius Caesar","year":"49 v. Chr.","note":"beim Überschreiten des Rubikon"},
  {"text":"Du hast Macht über deinen Geist, nicht über äußere Ereignisse.","author":"Marc Aurel","year":"2. Jh. n. Chr.","note":"aus den 'Selbstbetrachtungen'"},
  {"text":"Der Weg ist das Ziel.","author":"Konfuzius","year":"zugeschrieben","note":"exakte Quelle unklar"},
  {"text":"Hier stehe ich, ich kann nicht anders.","author":"Martin Luther","year":"1521","note":"zugeschrieben, Reichstag zu Worms"},
  {"text":"Ich weiß, ich habe den Körper einer schwachen Frau, aber das Herz und den Mut eines Königs.","author":"Elisabeth I.","year":"1588","note":"Rede von Tilbury"},
  {"text":"Der Staat bin ich.","author":"Ludwig XIV.","year":"zugeschrieben","note":"Sinnbild des Absolutismus"},
  {"text":"Und sie bewegt sich doch!","author":"Galileo Galilei","year":"1633","note":"apokryph, nach seinem Widerruf"},
  {"text":"Ich missbilige, was du sagst, doch ich würde mein Leben dafür geben, dass du es sagen darfst.","author":"Voltaire (zugeschrieben)","year":"18. Jh.","note":"tatsächlich Formulierung von E. B. Hall"},
  {"text":"Government of the people, by the people, for the people.","author":"Abraham Lincoln","year":"1863","note":"Gettysburg Address"},
  {"text":"Blut und Eisen.","author":"Otto von Bismarck","year":"1862","note":"Rede vor dem preußischen Abgeordnetenhaus"},
  {"text":"Proletarier aller Länder, vereinigt euch!","author":"Karl Marx & Friedrich Engels","year":"1848","note":"Schlusssatz des Kommunistischen Manifests"},
  {"text":"Blut, Schweiß und Tränen.","author":"Winston Churchill","year":"1940","note":"Antrittsrede als Premierminister"},
  {"text":"Das Einzige, wovor wir uns fürchten müssen, ist die Furcht selbst.","author":"Franklin D. Roosevelt","year":"1933","note":"Antrittsrede"},
  {"text":"Frage nicht, was dein Land für dich tun kann – frage, was du für dein Land tun kannst.","author":"John F. Kennedy","year":"1961","note":"Antrittsrede"},
  {"text":"I have a dream.","author":"Martin Luther King Jr.","year":"1963","note":"Rede beim Marsch auf Washington"},
  {"text":"Ein kleiner Schritt für einen Menschen, ein großer Sprung für die Menschheit.","author":"Neil Armstrong","year":"1969","note":"erste Mondlandung"},
  {"text":"Es scheint immer unmöglich, bis es vollbracht ist.","author":"Nelson Mandela","year":"zugeschrieben","note":""},
  {"text":"Sei du selbst die Veränderung, die du dir wünschst für diese Welt.","author":"Mahatma Gandhi (zugeschrieben)","year":"","note":"Authentizität des genauen Wortlauts umstritten"},
  {"text":"Es gibt nichts Unmögliches für den, der es versucht.","author":"Alexander der Große (zugeschrieben)","year":"","note":""},
  {"text":"Wir werden entweder einen Weg finden oder einen bauen.","author":"Hannibal (zugeschrieben)","year":"vor der Alpenüberquerung","note":"218 v. Chr."},
  {"text":"Eureka!","author":"Archimedes (zugeschrieben)","year":"3. Jh. v. Chr.","note":"beim Auffinden des Auftriebsprinzips"},
  {"text":"Wir nennen unsere Stadt die Schule von Hellas.","author":"Perikles","year":"5. Jh. v. Chr.","note":"sinngemäß, Thukydides' Grabrede"},
  {"text":"Der Mensch ist von Natur aus ein politisches Wesen.","author":"Aristoteles","year":"4. Jh. v. Chr.","note":"aus der 'Politik'"},
  {"text":"Geh mir aus der Sonne.","author":"Diogenes","year":"4. Jh. v. Chr.","note":"zu Alexander dem Großen gesagt"},
  {"text":"Das Leben ist kurz, die Kunst lang.","author":"Hippokrates","year":"5./4. Jh. v. Chr.","note":""},
  {"text":"Im Krieg ist die Wahrheit das erste Opfer.","author":"Aischylos (zugeschrieben)","year":"5. Jh. v. Chr.","note":"Ursprung umstritten"},
  {"text":"Carpe diem – nutze den Tag.","author":"Horaz","year":"1. Jh. v. Chr.","note":"aus den Oden"},
  {"text":"Ich sehe das Bessere und billige es, doch ich folge dem Schlechteren.","author":"Ovid","year":"1. Jh. v./n. Chr.","note":"aus den Metamorphosen"},
  {"text":"Sie schaffen eine Wüste und nennen es Frieden.","author":"Tacitus (Rede eines Britanniers)","year":"1./2. Jh. n. Chr.","note":"aus 'Agricola'"},
  {"text":"Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.","author":"Laozi","year":"zugeschrieben","note":"sinngemäß aus dem Daodejing"},
  {"text":"Kenne deinen Feind und kenne dich selbst.","author":"Sunzi","year":"zugeschrieben","note":"aus der 'Kunst des Krieges'"},
  {"text":"Gott will es!","author":"Papst Urban II. (überliefert)","year":"1095","note":"Aufruf zum Ersten Kreuzzug"},
  {"text":"Ich fürchte, wenn ich einmal tot bin, wird kein Erbe wie ich sein.","author":"Saladin (zugeschrieben)","year":"12. Jh.","note":""},
  {"text":"Ich habe nicht einmal die Hälfte dessen erzählt, was ich gesehen habe.","author":"Marco Polo (zugeschrieben)","year":"auf dem Sterbebett","note":""},
  {"text":"Ich fürchte nichts, denn Gott ist mit mir.","author":"Jeanne d'Arc","year":"1431","note":"aus den Prozessprotokollen"},
  {"text":"Lasst, die ihr eintretet, alle Hoffnung fahren.","author":"Dante Alighieri","year":"14. Jh.","note":"aus dem 'Inferno'"},
  {"text":"Ich sterbe als des Königs guter Diener, aber zuerst Gottes.","author":"Thomas Morus","year":"1535","note":"vor seiner Hinrichtung überliefert"},
  {"text":"Es ist besser, gefürchtet als geliebt zu werden, wenn man nicht beides haben kann.","author":"Niccolò Machiavelli","year":"1532","note":"sinngemäß, aus 'Der Fürst'"},
  {"text":"Wissen ist Macht.","author":"Francis Bacon (zugeschrieben)","year":"17. Jh.","note":"Scientia potentia est"},
  {"text":"Ich denke, also bin ich.","author":"René Descartes","year":"1637","note":"Cogito ergo sum"},
  {"text":"Das Herz hat seine Gründe, die die Vernunft nicht kennt.","author":"Blaise Pascal","year":"17. Jh.","note":"aus den 'Pensées'"},
  {"text":"Nichts ist sicher außer dem Tod und den Steuern.","author":"Benjamin Franklin (zugeschrieben)","year":"1789","note":""},
  {"text":"Jeder soll nach seiner Façon selig werden.","author":"Friedrich der Große","year":"1740","note":"Randnotiz zur Religionsfreiheit"},
  {"text":"Ich werde herrschen oder sterben.","author":"Katharina die Große (zugeschrieben)","year":"18. Jh.","note":""},
  {"text":"Alle Menschen sind gleich geschaffen.","author":"Thomas Jefferson","year":"1776","note":"aus der US-Unabhängigkeitserklärung"},
  {"text":"Kühnheit, immer wieder Kühnheit!","author":"Georges Danton (zugeschrieben)","year":"1792","note":"Rede vor dem Nationalkonvent"},
  {"text":"Der Schrecken ist nichts anderes als die Gerechtigkeit, schnell, streng, unbeugsam.","author":"Maximilien Robespierre","year":"1794","note":"sinngemäß"},
  {"text":"Verzeihung, mein Herr, ich wollte es nicht.","author":"Marie Antoinette","year":"1793","note":"letzte überlieferte Worte, zu ihrem Henker"},
  {"text":"Ein Führer ist ein Händler der Hoffnung.","author":"Napoleon Bonaparte (zugeschrieben)","year":"","note":""},
  {"text":"Die Geschichte ist eine Ansammlung von Lügen, auf die man sich geeinigt hat.","author":"Napoleon Bonaparte (zugeschrieben)","year":"","note":""},
  {"text":"Die Politik ist die Lehre vom Möglichen.","author":"Otto von Bismarck","year":"1867","note":""},
  {"text":"Man kann alles mit Bajonetten machen, nur nicht auf ihnen sitzen.","author":"Otto von Bismarck (zugeschrieben)","year":"","note":""},
  {"text":"Man kann nicht alle Menschen für immer täuschen.","author":"Abraham Lincoln (zugeschrieben)","year":"","note":"Echtheit umstritten"},
  {"text":"Mit Bosheit gegen niemanden, mit Nächstenliebe für alle.","author":"Abraham Lincoln","year":"1865","note":"zweite Antrittsrede"},
  {"text":"Die Philosophen haben die Welt nur verschieden interpretiert; es kommt aber darauf an, sie zu verändern.","author":"Karl Marx","year":"1845","note":"aus den Feuerbach-Thesen"},
  {"text":"Wir sind nicht amüsiert.","author":"Königin Victoria (zugeschrieben)","year":"19. Jh.","note":"Echtheit unbelegt"},
  {"text":"Ich biete weder Sold noch Quartier, ich biete Hunger, Durst, Gewaltmärsche, Schlachten und Tod.","author":"Giuseppe Garibaldi (zugeschrieben)","year":"1849","note":""},
  {"text":"Es gibt keine wirkliche Freiheit ohne wirtschaftliche Unabhängigkeit.","author":"Susan B. Anthony","year":"19. Jh.","note":""},
  {"text":"Vertrauen ist gut, Kontrolle ist besser.","author":"Wladimir Lenin (zugeschrieben)","year":"","note":""},
  {"text":"Du magst dich nicht für den Krieg interessieren, aber der Krieg interessiert sich für dich.","author":"Leo Trotzki (zugeschrieben)","year":"","note":""},
  {"text":"Ein Auge um Auge macht am Ende die ganze Welt blind.","author":"Mahatma Gandhi (zugeschrieben)","year":"","note":""},
  {"text":"Phantasie ist wichtiger als Wissen.","author":"Albert Einstein","year":"1929","note":"aus einem Interview"},
  {"text":"Zwei Dinge sind unendlich: das Universum und die menschliche Dummheit.","author":"Albert Einstein (zugeschrieben)","year":"","note":""},
  {"text":"Wir werden niemals aufgeben.","author":"Winston Churchill","year":"1940","note":"Rede vor dem Unterhaus"},
  {"text":"Ein Pessimist sieht die Schwierigkeit in jeder Gelegenheit, ein Optimist die Gelegenheit in jeder Schwierigkeit.","author":"Winston Churchill (zugeschrieben)","year":"","note":"Zuschreibung umstritten"},
  {"text":"Ein Datum, das in Schande weiterleben wird.","author":"Franklin D. Roosevelt","year":"1941","note":"Rede zum Kriegseintritt"},
  {"text":"Politische Macht kommt aus den Gewehrläufen.","author":"Mao Zedong","year":"1938","note":"sinngemäß"},
  {"text":"Nichts ist kostbarer als Unabhängigkeit und Freiheit.","author":"Ho Chi Minh (zugeschrieben)","year":"","note":""},
  {"text":"Wir müssen hart sein, ohne unsere Zärtlichkeit je zu verlieren.","author":"Che Guevara (zugeschrieben)","year":"","note":""},
  {"text":"Bildung ist die mächtigste Waffe, um die Welt zu verändern.","author":"Nelson Mandela","year":"","note":""},
  {"text":"Ich bin bereit zu sterben.","author":"Nelson Mandela","year":"1964","note":"aus seiner Verteidigungsrede im Rivonia-Prozess"},
  {"text":"Ich bin ein Berliner.","author":"John F. Kennedy","year":"1963","note":"Rede vor dem Rathaus Schöneberg"},
  {"text":"Ungerechtigkeit irgendwo ist eine Bedrohung für Gerechtigkeit überall.","author":"Martin Luther King Jr.","year":"1963","note":"Brief aus dem Gefängnis von Birmingham"},
  {"text":"Bildung ist der Reisepass in die Zukunft.","author":"Malcolm X (zugeschrieben)","year":"","note":""},
  {"text":"Wir können den Arabern vergeben, unsere Kinder zu töten. Wir können ihnen nicht vergeben, uns zu zwingen, ihre Kinder zu töten.","author":"Golda Meir (zugeschrieben)","year":"","note":""},
  {"text":"Vergebung ist eine Tugend der Tapferen.","author":"Indira Gandhi (zugeschrieben)","year":"","note":""},
  {"text":"Die Dame ist nicht zum Wenden bereit.","author":"Margaret Thatcher","year":"1980","note":"Parteitagsrede"},
  {"text":"Herr Gorbatschow, reißen Sie diese Mauer nieder!","author":"Ronald Reagan","year":"1987","note":"Rede am Brandenburger Tor"},
  {"text":"Wer zu spät kommt, den bestraft das Leben.","author":"Michail Gorbatschow (zugeschrieben)","year":"1989","note":""},
  {"text":"Intelligenz ist die Fähigkeit, sich an Veränderungen anzupassen.","author":"Stephen Hawking (zugeschrieben)","year":"","note":""},
  {"text":"Wähle einen Beruf, den du liebst, und du wirst nie wieder in deinem Leben arbeiten müssen.","author":"Konfuzius (oft zugeschrieben)","year":"","note":"Zuschreibung umstritten"},
  {"text":"Wer andere kennt, ist klug. Wer sich selbst kennt, ist erleuchtet.","author":"Laozi (zugeschrieben)","year":"","note":"sinngemäß aus dem Daodejing"},
  {"text":"Der Edle ist gerecht, der Kleine denkt nur an Vorteil.","author":"Konfuzius","year":"","note":"sinngemäß, aus den Analekten"},
  {"text":"Sage mir, mit wem du umgehst, und ich sage dir, wer du bist.","author":"Sprichwort (oft antiken Autoren zugeschrieben)","year":"","note":"Herkunft unsicher"},
  {"text":"Rom wurde nicht an einem Tag erbaut.","author":"Mittelalterliches Sprichwort","year":"12. Jh.","note":"französischen Ursprungs"},
  {"text":"Der Zweck heiligt die Mittel.","author":"Oft Machiavelli zugeschrieben","year":"","note":"so wörtlich nicht in seinen Schriften belegt"},
  {"text":"Einigkeit macht stark.","author":"Äsop (zugeschrieben)","year":"Antike","note":"aus der Fabel vom Bündel Stäbe"},
  {"text":"Wer den Krieg nicht kennt, kennt den Frieden nicht.","author":"Sunzi (sinngemäß)","year":"","note":""},
  {"text":"Ein Reich, das gegen sich selbst gespalten ist, kann nicht bestehen.","author":"Abraham Lincoln","year":"1858","note":"'House Divided'-Rede, in Anlehnung an ein Bibelzitat"},
  {"text":"Die Zukunft gehört denen, die an die Schönheit ihrer Träume glauben.","author":"Eleanor Roosevelt (zugeschrieben)","year":"","note":"Zuschreibung umstritten"},
  {"text":"Wo man Bücher verbrennt, verbrennt man am Ende auch Menschen.","author":"Heinrich Heine","year":"1821","note":"aus 'Almansor', prophetisch mit Blick auf spätere NS-Bücherverbrennungen zitiert"},
  {"text":"Der Mensch ist zur Freiheit verurteilt.","author":"Jean-Paul Sartre","year":"20. Jh.","note":"sinngemäß, existenzialistische Kernthese"},
  {"text":"Wissen ohne Gewissen ist nur ein Ruin der Seele.","author":"François Rabelais (zugeschrieben)","year":"16. Jh.","note":""},
  {"text":"Der Mutige stirbt nur einmal, der Feige stirbt tausend Tode.","author":"Sprichwort, teils William Shakespeare zugeschrieben","year":"","note":"sinngemäß aus 'Julius Caesar'"},
  {"text":"Sein oder Nichtsein, das ist hier die Frage.","author":"William Shakespeare","year":"ca. 1600","note":"aus 'Hamlet'"},
  {"text":"Panem et circenses – Brot und Spiele.","author":"Juvenal","year":"1./2. Jh. n. Chr.","note":"römische Gesellschaftskritik"},
  {"text":"Alea iacta est kannte schon Menander vor mir.","author":"Sprichwörtliche Redewendung","year":"Antike","note":"Caesar zitierte laut Sueton einen griechischen Dichter"},
  {"text":"Wer die Vergangenheit nicht kennt, kann die Gegenwart nicht verstehen.","author":"Sprichwort, oft Historikern zugeschrieben","year":"","note":"sinngemäße Redewendung"},
  {"text":"Nicht zu wissen, was vor deiner Geburt geschah, heißt, immer ein Kind zu bleiben.","author":"Marcus Tullius Cicero","year":"46 v. Chr.","note":"aus 'Orator'"},
  {"text":"Ich habe keinen besonderen Zeitpunkt gewählt. Ich wurde gewählt.","author":"Rosa Parks","year":"1955","note":"sinngemäß, zu ihrer Weigerung, den Sitzplatz zu räumen"},
  {"text":"Der Mensch ist frei geboren, und überall liegt er in Ketten.","author":"Jean-Jacques Rousseau","year":"1762","note":"Eröffnungssatz des 'Gesellschaftsvertrags'"},
  {"text":"Habe Mut, dich deines eigenen Verstandes zu bedienen.","author":"Immanuel Kant","year":"1784","note":"Wahlspruch der Aufklärung, nach Horaz' sapere aude"},
  {"text":"Ein kleiner Schritt für einen Menschen, ein riesiger Sprung für die Menschheit.","author":"Neil Armstrong","year":"1969","note":"Armstrong sagte, er habe 'a man' gesagt; auf der Aufnahme ist das 'a' nicht zu hören"},
  {"text":"Wir wollen ein Volk von Brüdern sein.","author":"Friedrich Schiller","year":"1804","note":"aus 'Wilhelm Tell'"}
];
const BATTLES = [
  {"year":-490,"name":"Schlacht bei Marathon","war":"Perserkriege","text":"Athenische Hopliten schlagen ein zahlenmäßig überlegenes persisches Heer – prägt bis heute den Begriff 'Marathon'."},
  {"year":-480,"name":"Schlacht bei den Thermopylen","war":"Perserkriege","text":"Eine kleine griechische Streitmacht unter dem Spartanerkönig Leonidas hält ein riesiges Perserheer tagelang auf, bevor sie aufgerieben wird."},
  {"year":-331,"name":"Schlacht bei Gaugamela","war":"Alexanderzüge","text":"Alexander der Große besiegt das zahlenmäßig weit überlegene Perserheer unter Darius III. entscheidend und besiegelt den Untergang des Perserreichs."},
  {"year":-216,"name":"Schlacht bei Cannae","war":"Zweiter Punischer Krieg","text":"Hannibal vernichtet ein römisches Heer nahezu vollständig durch eine geniale Doppelumfassung – bis heute militärhistorisches Lehrbeispiel."},
  {"year":-52,"name":"Schlacht von Alesia","war":"Gallischer Krieg","text":"Caesar besiegt den gallischen Anführer Vercingetorix durch eine doppelte Belagerungsmauer – entscheidet den Gallischen Krieg zugunsten Roms."},
  {"year":-31,"name":"Schlacht bei Actium","war":"Römischer Bürgerkrieg","text":"Octavian besiegt Marcus Antonius und Kleopatra zur See – ebnet den Weg zum römischen Kaisertum."},
  {"year":9,"name":"Varusschlacht (Teutoburger Wald)","war":"Römisch-Germanische Kriege","text":"Germanische Stämme unter Arminius vernichten drei römische Legionen und stoppen die römische Expansion nach Germanien dauerhaft."},
  {"year":732,"name":"Schlacht bei Tours und Poitiers","war":"Islamische Expansion","text":"Karl Martell stoppt den arabischen Vormarsch nach Mitteleuropa."},
  {"year":1066,"name":"Schlacht bei Hastings","war":"Normannische Eroberung","text":"Wilhelm der Eroberer besiegt die Angelsachsen und verändert England grundlegend in Sprache, Adel und Recht."},
  {"year":1214,"name":"Schlacht bei Bouvines","war":"Französisch-Englischer Konflikt","text":"Frankreichs Sieg stärkt die königliche Zentralmacht und schwächt englische Ansprüche auf dem Kontinent."},
  {"year":1415,"name":"Schlacht von Azincourt","war":"Hundertjähriger Krieg","text":"Englische Langbogenschützen unter Heinrich V. vernichten ein zahlenmäßig weit überlegenes französisches Ritterheer."},
  {"year":1453,"name":"Belagerung Konstantinopels","war":"Osmanische Expansion","text":"Erstmals entscheiden Kanonen eine Belagerung – das Byzantinische Reich geht endgültig unter."},
  {"year":1588,"name":"Untergang der Spanischen Armada","war":"Anglo-Spanischer Krieg","text":"England wehrt die spanische Invasionsflotte ab und etabliert sich als aufstrebende Seemacht."},
  {"year":1704,"name":"Schlacht bei Höchstädt (Blenheim)","war":"Spanischer Erbfolgekrieg","text":"Ein englisch-österreichisches Heer stoppt entscheidend den französischen Vormarsch in Süddeutschland."},
  {"year":1815,"name":"Schlacht bei Waterloo","war":"Napoleonische Kriege","text":"Die endgültige Niederlage Napoleons gegen eine britisch-preußische Allianz beendet die napoleonische Ära in Europa."},
  {"year":1870,"name":"Schlacht bei Sedan","war":"Deutsch-Französischer Krieg","text":"Preußens entscheidender Sieg führt zur Gefangennahme Napoleons III. und ebnet den Weg zur deutschen Reichsgründung."},
  {"year":1914,"name":"Erste Marneschlacht","war":"Erster Weltkrieg","text":"Stoppt den deutschen Vormarsch auf Paris und lässt den Krieg im Westen zum jahrelangen Stellungskrieg erstarren."},
  {"year":1916,"name":"Schlacht um Verdun","war":"Erster Weltkrieg","text":"Symbol des industrialisierten Massensterbens im Stellungskrieg mit über 700.000 Opfern."},
  {"year":1916,"name":"Schlacht an der Somme","war":"Erster Weltkrieg","text":"Über eine Million Tote und Verwundete bei minimalem Geländegewinn – erster Panzereinsatz der Geschichte."},
  {"year":1942,"name":"Schlacht von Midway","war":"Zweiter Weltkrieg (Pazifik)","text":"Entscheidender US-Sieg über die japanische Flotte, Wendepunkt des Pazifikkriegs."},
  {"year":1942,"name":"Zweite Schlacht von El Alamein","war":"Zweiter Weltkrieg (Nordafrika)","text":"Alliierter Sieg über Rommels Afrikakorps, Wendepunkt im nordafrikanischen Feldzug."},
  {"year":1943,"name":"Schlacht von Stalingrad","war":"Zweiter Weltkrieg (Ostfront)","text":"Kapitulation der eingekesselten deutschen 6. Armee – psychologischer und militärischer Wendepunkt an der Ostfront."},
  {"year":1944,"name":"Landung in der Normandie (D-Day)","war":"Zweiter Weltkrieg (Westfront)","text":"Größte amphibische Invasion der Geschichte eröffnet die Westfront gegen NS-Deutschland."},
  {"year":-1457,"name":"Schlacht bei Megiddo","war":"Ägyptische Expansion","text":"Thutmosis III. besiegt ein kanaanitisches Bündnis – eine der ältesten in Detail überlieferten Schlachten der Geschichte."},
  {"year":-202,"name":"Schlacht bei Zama","war":"Zweiter Punischer Krieg","text":"Scipio besiegt Hannibal entscheidend in Nordafrika und beendet Karthagos Großmachtstellung endgültig."},
  {"year":378,"name":"Schlacht von Adrianopel","war":"Völkerwanderung","text":"Westgoten vernichten ein römisches Heer und töten Kaiser Valens – Symbol der beginnenden militärischen Schwäche Roms."},
  {"year":1071,"name":"Schlacht von Manzikert","war":"Byzantinisch-Seldschukische Kriege","text":"Die vernichtende Niederlage von Byzanz gegen die Seldschuken öffnet Anatolien türkischer Besiedlung und schwächt Byzanz dauerhaft."},
  {"year":1097,"name":"Schlacht von Dorylaeum","war":"Erster Kreuzzug","text":"Frühe Kreuzfahrer besiegen ein seldschukisches Heer und sichern den Weg nach Jerusalem."},
  {"year":1191,"name":"Schlacht von Arsuf","war":"Dritter Kreuzzug","text":"Richard Löwenherz besiegt Saladin taktisch geschickt, kann Jerusalem aber letztlich nicht zurückerobern."},
  {"year":1260,"name":"Schlacht bei Ain Dschalut","war":"Mongolische Expansion","text":"Die ägyptischen Mamluken stoppen erstmals einen mongolischen Vormarsch und retten damit den Nahen Osten vor weiterer mongolischer Eroberung."},
  {"year":1302,"name":"Sporenschlacht von Kortrijk","war":"Französisch-Flämischer Krieg","text":"Flämische Bürgermilizen besiegen überraschend das französische Ritterheer – früher Beleg für die abnehmende Dominanz schwerer Reiterei."},
  {"year":1346,"name":"Schlacht von Crécy","war":"Hundertjähriger Krieg","text":"Englische Langbogenschützen vernichten die Blüte des französischen Adels – Wendepunkt in der Kriegstechnik weg von Ritterheeren."},
  {"year":1529,"name":"Erste Belagerung Wiens","war":"Osmanische Expansion","text":"Die Habsburger wehren den osmanischen Vormarsch nach Mitteleuropa knapp ab."},
  {"year":1683,"name":"Schlacht am Kahlenberg (Entsatz Wiens)","war":"Große Türkenkriege","text":"Ein europäisches Entsatzheer unter Jan Sobieski beendet die letzte große osmanische Belagerung Wiens endgültig."},
  {"year":1709,"name":"Schlacht bei Poltawa","war":"Großer Nordischer Krieg","text":"Peter der Große besiegt Schweden entscheidend – Russland löst Schweden als nordeuropäische Großmacht ab."},
  {"year":1805,"name":"Schlacht bei Trafalgar","war":"Napoleonische Kriege","text":"Admiral Nelson vernichtet die französisch-spanische Flotte und sichert Großbritannien die Seeherrschaft für ein Jahrhundert."},
  {"year":1805,"name":"Schlacht bei Austerlitz","war":"Napoleonische Kriege","text":"Napoleons taktisches Meisterstück gegen eine österreichisch-russische Übermacht gilt als seine glänzendste Schlacht."},
  {"year":1813,"name":"Völkerschlacht bei Leipzig","war":"Napoleonische Kriege","text":"Die größte Schlacht Europas vor dem 20. Jahrhundert besiegelt Napoleons Niederlage in Deutschland."},
  {"year":1836,"name":"Schlacht von The Alamo","war":"Texanischer Unabhängigkeitskrieg","text":"Die Niederlage einer kleinen texanischen Verteidigergruppe wird zum identitätsstiftenden Mythos im Kampf um die Unabhängigkeit von Mexiko."},
  {"year":1866,"name":"Schlacht von Königgrätz","war":"Deutscher Krieg","text":"Preußens Sieg über Österreich entscheidet die Vorherrschaft im künftigen deutschen Nationalstaat."},
  {"year":1905,"name":"Seeschlacht bei Tsushima","war":"Russisch-Japanischer Krieg","text":"Japan vernichtet die russische Ostseeflotte – erster Sieg einer asiatischen über eine europäische Großmacht zur See."},
  {"year":1914,"name":"Schlacht bei Tannenberg","war":"Erster Weltkrieg","text":"Deutschland fügt Russland eine schwere Niederlage an der Ostfront zu – begründet den Mythos um Paul von Hindenburg."},
  {"year":1943,"name":"Schlacht bei Kursk","war":"Zweiter Weltkrieg (Ostfront)","text":"Größte Panzerschlacht der Geschichte, endet mit sowjetischem Sieg und dauerhafter strategischer Initiative gegen NS-Deutschland."},
  {"year":-1274,"name":"Schlacht bei Kadesch","war":"Ägyptisch-Hethitische Kriege","text":"Ramses II. und der Hethiterkönig Muwatalli II. kämpfen unentschieden – und schließen darauf den ersten überlieferten schriftlichen Friedensvertrag der Geschichte."},
  {"year":-260,"name":"Schlacht bei Mylae","war":"Erster Punischer Krieg","text":"Rom, bis dahin keine Seemacht, besiegt Karthago zur See – mit Enterbrücken, die den Seekampf in einen Nahkampf verwandeln."},
  {"year":-53,"name":"Schlacht bei Carrhae","war":"Römisch-Parthische Kriege","text":"Die schwerste römische Niederlage im Osten. Berittene Bogenschützen zeigen die Grenzen der Legion in offenem Gelände."},
  {"year":260,"name":"Schlacht bei Edessa","war":"Römisch-Sasanidische Kriege","text":"Kaiser Valerian gerät in persische Gefangenschaft – ein Schock für das römische Selbstverständnis."},
  {"year":751,"name":"Schlacht am Talas","war":"Arabisch-Chinesische Auseinandersetzung","text":"Abbasidische und Tang-Truppen treffen in Zentralasien aufeinander. Der Überlieferung nach gelangte durch chinesische Gefangene das Wissen um die Papierherstellung nach Westen."},
  {"year":1187,"name":"Schlacht bei Hattin","war":"Kreuzzüge","text":"Saladin schlägt das Kreuzfahrerheer und nimmt kurz darauf Jerusalem ein – Auslöser des Dritten Kreuzzugs."},
  {"year":1281,"name":"Gescheiterte Mongolen-Invasion Japans","war":"Mongolische Expansion","text":"Ein Taifun zerstört die Invasionsflotte. Die Japaner nennen ihn kamikaze, 'Götterwind' – der Begriff prägt sechs Jahrhunderte später eine ganz andere Bedeutung."},
  {"year":1571,"name":"Seeschlacht von Lepanto","war":"Osmanisch-Venezianische Kriege","text":"Die letzte große Schlacht von Ruderflotten. Der Sieg der Heiligen Liga bremst die osmanische Seemacht, ändert aber die Kräfteverhältnisse weniger als oft dargestellt."},
  {"year":1683,"name":"Zweite Wiener Türkenbelagerung","war":"Osmanische Expansion","text":"Das Scheitern vor Wien markiert die Wende der osmanischen Ausdehnung in Europa."},
  {"year":1757,"name":"Schlacht bei Plassey","war":"Britische Expansion in Indien","text":"Ein vergleichsweise kleines Gefecht mit gewaltigen Folgen: Die Ostindien-Kompanie wird zur Territorialmacht in Bengalen."},
  {"year":1781,"name":"Belagerung von Yorktown","war":"Amerikanischer Unabhängigkeitskrieg","text":"Die Kapitulation der Briten entscheidet den Krieg – ermöglicht durch die französische Flotte, ohne die der Sieg nicht denkbar gewesen wäre."},
  {"year":1863,"name":"Schlacht von Gettysburg","war":"Amerikanischer Bürgerkrieg","text":"Die verlustreichste Schlacht des Krieges beendet den Vorstoß der Konföderierten nach Norden."},
  {"year":1904,"name":"Schlacht von Tsushima","war":"Russisch-Japanischer Krieg","text":"Erstmals in der Neuzeit besiegt eine asiatische Macht eine europäische Großmacht zur See – mit Signalwirkung für antikoloniale Bewegungen weltweit."},
  {"year":1916,"name":"Schlacht von Verdun","war":"Erster Weltkrieg","text":"Über zehn Monate Materialschlacht ohne nennenswerte Geländegewinne – Sinnbild der Sinnlosigkeit des Stellungskriegs."},
  {"year":1916,"name":"Skagerrakschlacht","war":"Erster Weltkrieg","text":"Die größte Seeschlacht des Krieges endet taktisch unentschieden, strategisch zugunsten Großbritanniens: Die deutsche Hochseeflotte bleibt danach weitgehend im Hafen."},
  {"year":1940,"name":"Luftschlacht um England","war":"Zweiter Weltkrieg","text":"Die erste allein in der Luft entschiedene Schlacht der Geschichte verhindert eine deutsche Invasion."},
  {"year":1942,"name":"Schlacht um Midway","war":"Zweiter Weltkrieg","text":"Der Verlust von vier Flugzeugträgern kehrt das Kräfteverhältnis im Pazifik binnen weniger Tage um."},
  {"year":1954,"name":"Dien Bien Phu","war":"Indochinakrieg","text":"Die Niederlage beendet die französische Kolonialherrschaft in Indochina – und zeigt, dass gut organisierte Unabhängigkeitsbewegungen europäische Armeen schlagen können."}
];
const COUNTRY_TIMELINES = {
  Deutschland: {
    color: "#a01f1f",
    events: [
      { year: 9, title: "Varusschlacht", text: "Germanische St\xE4mme unter Arminius vernichten drei r\xF6mische Legionen und stoppen die r\xF6mische Expansion nach Germanien." },
      { year: 843, title: "Vertrag von Verdun", text: "Das Ostfrankenreich entsteht als Vorl\xE4ufer des sp\xE4teren deutschen Reiches." },
      { year: 962, title: "Gr\xFCndung des Heiligen R\xF6mischen Reiches", text: "Otto I. wird Kaiser \u2013 Beginn eines \xFCber 800 Jahre bestehenden, lose organisierten Reichsverbands." },
      { year: 1077, title: "Gang nach Canossa", text: "H\xF6hepunkt des Investiturstreits zwischen Kaiser und Papst um die Vormachtstellung." },
      { year: 1517, title: "Beginn der Reformation", text: "Martin Luthers Thesen spalten die Kirche und pr\xE4gen die deutsche Geschichte nachhaltig." },
      { year: 1618, title: "Drei\xDFigj\xE4hriger Krieg beginnt", text: "Einer der verheerendsten Kriege der deutschen Geschichte verw\xFCstet weite Teile des Reiches." },
      { year: 1701, title: "K\xF6nigreich Preu\xDFen entsteht", text: "Brandenburg-Preu\xDFen steigt zur europ\xE4ischen Milit\xE4rmacht auf." },
      { year: 1806, title: "Ende des Heiligen R\xF6mischen Reiches", text: "Unter napoleonischem Druck legt Kaiser Franz II. die Reichskrone nieder." },
      { year: 1848, title: "Deutsche Revolution", text: "B\xFCrgerliche Kr\xE4fte fordern in der Frankfurter Paulskirche erstmals nationale Einheit und Verfassung \u2013 scheitert zun\xE4chst." },
      { year: 1871, title: "Deutsche Reichsgr\xFCndung", text: "Unter preu\xDFischer F\xFChrung entsteht das Deutsche Kaiserreich." },
      { year: 1918, title: "Novemberrevolution", text: "Kaiser Wilhelm II. dankt ab, die Weimarer Republik wird ausgerufen." },
      { year: 1933, title: "NS-Macht\xFCbernahme", text: "Adolf Hitler wird Reichskanzler \u2013 Beginn der Diktatur und des Zivilisationsbruchs des Holocaust." },
      { year: 1945, title: "Bedingungslose Kapitulation", text: "Das Deutsche Reich kapituliert nach dem Zweiten Weltkrieg vollst\xE4ndig; Besatzungszonen der Alliierten entstehen." },
      { year: 1949, title: "Gr\xFCndung von BRD und DDR", text: "Deutschland wird f\xFCr \xFCber 40 Jahre in zwei Staaten geteilt." },
      { year: 1990, title: "Deutsche Wiedervereinigung", text: "BRD und DDR vereinigen sich zu einem gemeinsamen demokratischen Staat." }
    ]
  },
  China: {
    color: "#b8860b",
    events: [
      { year: -1600, title: "Shang-Dynastie", text: "Fr\xFChe zentralisierte Herrschaft mit Bronzegusskunst und Orakelknochenschrift." },
      { year: -1046, title: "Zhou-Dynastie", text: "Pr\xE4gt das Konzept des 'Mandats des Himmels' als Herrschaftslegitimation." },
      { year: -221, title: "Erste Reichseinigung durch Qin Shi Huang", text: "Der erste Kaiser Chinas vereinigt die zerstrittenen Reiche, standardisiert Schrift und Ma\xDFe und beginnt den Bau der Gro\xDFen Mauer." },
      { year: -206, title: "Han-Dynastie beginnt", text: "Eine der pr\xE4gendsten chinesischen Dynastien f\xF6rdert Konfuzianismus, Verwaltung und Seidenstra\xDFenhandel." },
      { year: 220, title: "Ende der Han-Dynastie", text: "China zerf\xE4llt in die Zeit der Drei Reiche \u2013 Beginn einer langen Phase politischer Zersplitterung." },
      { year: 618, title: "Tang-Dynastie beginnt", text: "Gilt als eines der 'goldenen Zeitalter' Chinas mit kultureller Bl\xFCte, Handel und territorialer Ausdehnung." },
      { year: 960, title: "Song-Dynastie beginnt", text: "Technologische Innovationen wie Papiergeld, Kompass und Schie\xDFpulver verbreiten sich." },
      { year: 1271, title: "Yuan-Dynastie (Mongolenherrschaft)", text: "Kublai Khan begr\xFCndet eine mongolische Fremdherrschaft \xFCber China; Marco Polo besucht seinen Hof." },
      { year: 1368, title: "Ming-Dynastie beginnt", text: "Chinesische Restauration nach der Mongolenherrschaft, Bau der Verbotenen Stadt, gro\xDFe Seefahrtsexpeditionen." },
      { year: 1644, title: "Qing-Dynastie beginnt", text: "Die aus der Mandschurei stammenden Qing errichten das letzte chinesische Kaiserreich." },
      { year: 1839, title: "Erster Opiumkrieg", text: "Gro\xDFbritannien zwingt China milit\xE4risch zur \xD6ffnung seiner M\xE4rkte \u2013 Beginn des 'Jahrhunderts der Dem\xFCtigung'." },
      { year: 1900, title: "Boxeraufstand", text: "Eine antiwestliche Bewegung wird von einer internationalen Allianz niedergeschlagen." },
      { year: 1912, title: "Ende des chinesischen Kaisertums", text: "Nach \xFCber 2000 Jahren Kaiserherrschaft wird China Republik." },
      { year: 1949, title: "Gr\xFCndung der Volksrepublik China", text: "Mao Zedong ruft nach dem Sieg im B\xFCrgerkrieg die Volksrepublik aus." },
      { year: 1966, title: "Beginn der Kulturrevolution", text: "Maos radikale Massenbewegung st\xFCrzt China f\xFCr ein Jahrzehnt in Chaos und Verfolgung." },
      { year: 1978, title: "Wirtschaftsreformen unter Deng Xiaoping", text: "Marktwirtschaftliche \xD6ffnung leitet Chinas rasanten wirtschaftlichen Aufstieg ein." },
      { year: 1989, title: "Proteste auf dem Tiananmen-Platz", text: "Demokratieproteste in Peking werden gewaltsam niedergeschlagen." }
    ]
  },
  Japan: {
    color: "#7a2a3a",
    events: [
      { year: 538, title: "Einf\xFChrung des Buddhismus", text: "\xDCber Korea gelangt der Buddhismus nach Japan und pr\xE4gt Kultur und Kunst nachhaltig." },
      { year: 794, title: "Beginn der Heian-Zeit", text: "Kulturelle Bl\xFCtezeit am Kaiserhof in Kyoto, Entstehung klassischer japanischer Literatur." },
      { year: 1185, title: "Kamakura-Shogunat", text: "Erstmals \xFCbernehmen Milit\xE4rherrscher (Shogune) die faktische Macht, der Kaiser bleibt symbolisches Oberhaupt." },
      { year: 1274, title: "Mongolische Invasionsversuche", text: "Taifune ('Kamikaze', 'G\xF6tterwind') zerst\xF6ren zweimal mongolische Invasionsflotten und retten Japan vor der Eroberung." },
      { year: 1467, title: "Beginn der Sengoku-Zeit", text: "\xDCber ein Jahrhundert innerer B\xFCrgerkriege zwischen rivalisierenden F\xFCrsten (Daimyo)." },
      { year: 1603, title: "Tokugawa-Shogunat beginnt", text: "Nach der Einigung Japans beginnt eine \xFCber 250-j\xE4hrige Periode innerer Stabilit\xE4t und Isolation." },
      { year: 1639, title: "Isolationspolitik (Sakoku)", text: "Japan schottet sich fast vollst\xE4ndig vom Ausland ab \u2013 nur begrenzter Handel mit den Niederlanden bleibt erlaubt." },
      { year: 1853, title: "Commodore Perry \xF6ffnet Japan", text: "US-Kriegsschiffe zwingen Japan zur \xD6ffnung seiner H\xE4fen f\xFCr den Welthandel." },
      { year: 1868, title: "Meiji-Restauration", text: "Japan modernisiert sich binnen weniger Jahrzehnte radikal nach westlichem Vorbild." },
      { year: 1904, title: "Russisch-Japanischer Krieg", text: "Japan besiegt erstmals eine europ\xE4ische Gro\xDFmacht \u2013 Schock f\xFCr das europ\xE4ische Selbstverst\xE4ndnis." },
      { year: 1931, title: "Invasion der Mandschurei", text: "Beginn der japanischen Expansion in China, Vorspiel des Pazifikkriegs." },
      { year: 1941, title: "Angriff auf Pearl Harbor", text: "Japans \xDCberraschungsangriff bringt die USA in den Zweiten Weltkrieg." },
      { year: 1945, title: "Atombombenabw\xFCrfe und Kapitulation", text: "Nach Hiroshima und Nagasaki kapituliert Japan; das Land erh\xE4lt 1947 eine neue pazifistische Verfassung." },
      { year: 1960, title: "Beginn des Wirtschaftswunders", text: "Japan steigt binnen weniger Jahrzehnte zur zweitgr\xF6\xDFten Volkswirtschaft der Welt auf." }
    ]
  },
  Frankreich: {
    color: "#8a3020",
    events: [
      { year: -52, title: "Schlacht von Alesia", text: "Caesar besiegt Vercingetorix und unterwirft Gallien endg\xFCltig der r\xF6mischen Herrschaft." },
      { year: 486, title: "Chlodwig gr\xFCndet das Frankenreich", text: "Der Frankenk\xF6nig eint weite Teile Galliens und l\xE4sst sich sp\xE4ter taufen \u2013 Grundstein des sp\xE4teren Frankreichs." },
      { year: 800, title: "Kaiserkr\xF6nung Karls des Gro\xDFen", text: "Der fr\xE4nkische K\xF6nig wird in Rom zum Kaiser gekr\xF6nt." },
      { year: 843, title: "Vertrag von Verdun", text: "Das Westfrankenreich entsteht als direkter Vorl\xE4ufer des modernen Frankreichs." },
      { year: 1337, title: "Beginn des Hundertj\xE4hrigen Krieges", text: "Jahrzehntelanger Konflikt mit England um die franz\xF6sische Krone." },
      { year: 1429, title: "Jeanne d'Arc befreit Orl\xE9ans", text: "Die Nationalheldin wendet das Kriegsgl\xFCck zugunsten Frankreichs." },
      { year: 1589, title: "Heinrich IV. begr\xFCndet die Bourbonen-Dynastie", text: "Beendet die Religionskriege und erl\xE4sst das Edikt von Nantes zur religi\xF6sen Toleranz." },
      { year: 1643, title: "Regierungsbeginn Ludwigs XIV.", text: "Der 'Sonnenk\xF6nig' macht Frankreich zur f\xFChrenden Macht Europas und Versailles zum Symbol des Absolutismus." },
      { year: 1789, title: "Franz\xF6sische Revolution", text: "Sturz der absoluten Monarchie, Erkl\xE4rung der Menschen- und B\xFCrgerrechte." },
      { year: 1804, title: "Napoleon kr\xF6nt sich zum Kaiser", text: "Beginn der napoleonischen \xC4ra und der Neuordnung Europas durch Eroberung." },
      { year: 1815, title: "Niederlage bei Waterloo", text: "Napoleons endg\xFCltiges Ende beendet die franz\xF6sische Vormachtstellung in Europa." },
      { year: 1870, title: "Niederlage im Deutsch-Franz\xF6sischen Krieg", text: "Frankreich verliert Elsass-Lothringen; die Dritte Republik entsteht." },
      { year: 1940, title: "Fall Frankreichs", text: "Die Wehrmacht besiegt Frankreich binnen sechs Wochen; ein Vichy-Regime kollaboriert mit NS-Deutschland." },
      { year: 1944, title: "Befreiung von Paris", text: "Alliierte und franz\xF6sische Widerstandskr\xE4fte befreien die Hauptstadt von der deutschen Besatzung." },
      { year: 1958, title: "Gr\xFCndung der F\xFCnften Republik", text: "Charles de Gaulle begr\xFCndet das bis heute bestehende pr\xE4sidiale Regierungssystem Frankreichs." }
    ]
  },
  Russland: {
    color: "#6b1f1f",
    events: [
      { year: 862, title: "Gr\xFCndung der Kiewer Rus", text: "War\xE4ger (Wikinger) gr\xFCnden ein F\xFCrstentum \u2013 Ursprung Russlands, der Ukraine und Wei\xDFrusslands." },
      { year: 988, title: "Christianisierung der Rus", text: "F\xFCrst Wladimir I. l\xE4sst sich taufen und macht das orthodoxe Christentum zur Staatsreligion." },
      { year: 1237, title: "Mongolische Eroberung", text: "Die Rus geraten f\xFCr rund 240 Jahre unter die Oberherrschaft der Goldenen Horde." },
      { year: 1547, title: "Iwan der Schreckliche wird erster Zar", text: "Moskau festigt seine Vormachtstellung unter den russischen F\xFCrstent\xFCmern." },
      { year: 1613, title: "Beginn der Romanov-Dynastie", text: "Die Romanovs regieren bis zur Revolution 1917 \xFCber Russland." },
      { year: 1721, title: "Peter der Gro\xDFe kr\xF6nt sich zum Kaiser", text: "Russland modernisiert sich nach westeurop\xE4ischem Vorbild und wird zum Kaiserreich." },
      { year: 1812, title: "Napoleons Russlandfeldzug scheitert", text: "Winter, Logistikprobleme und russischer Widerstand vernichten die 'Grande Arm\xE9e' nahezu vollst\xE4ndig." },
      { year: 1861, title: "Aufhebung der Leibeigenschaft", text: "Zar Alexander II. befreit die russischen Bauern aus jahrhundertelanger Leibeigenschaft." },
      { year: 1905, title: "Russische Revolution von 1905", text: "Massenproteste erzwingen erste Zugest\xE4ndnisse des Zaren \u2013 Vorbote der Revolution von 1917." },
      { year: 1917, title: "Oktoberrevolution", text: "Die Bolschewiki unter Lenin \xFCbernehmen die Macht \u2013 Beginn der Sowjetunion." },
      { year: 1922, title: "Gr\xFCndung der Sowjetunion", text: "Aus dem B\xFCrgerkrieg geht die UdSSR als kommunistischer Vielv\xF6lkerstaat hervor." },
      { year: 1941, title: "Unternehmen Barbarossa", text: "NS-Deutschland \xFCberf\xE4llt die Sowjetunion \u2013 Beginn eines der verlustreichsten Kriege der Geschichte." },
      { year: 1943, title: "Sieg bei Stalingrad", text: "Wendepunkt des Krieges an der Ostfront zugunsten der Sowjetunion." },
      { year: 1961, title: "Erster Mensch im Weltraum", text: "Juri Gagarin umkreist als erster Mensch die Erde \u2013 H\xF6hepunkt des sowjetischen Raumfahrtprogramms." },
      { year: 1991, title: "Aufl\xF6sung der Sowjetunion", text: "Die UdSSR zerf\xE4llt in unabh\xE4ngige Staaten \u2013 Ende des Kalten Krieges." },
      { year: 2022, title: "\xDCberfall auf die Ukraine", text: "Russland beginnt einen gro\xDFangelegten Angriffskrieg \u2013 gr\xF6\xDFter zwischenstaatlicher Krieg in Europa seit 1945." }
    ]
  },
  USA: {
    color: "#9c1c1c",
    events: [
      { year: 1607, title: "Gr\xFCndung von Jamestown", text: "Erste dauerhafte englische Kolonie in Nordamerika entsteht in Virginia." },
      { year: 1620, title: "Ankunft der Mayflower", text: "Puritanische Siedler gr\xFCnden die Plymouth-Kolonie in Neuengland." },
      { year: 1776, title: "Unabh\xE4ngigkeitserkl\xE4rung", text: "Die 13 Kolonien erkl\xE4ren ihre Unabh\xE4ngigkeit von Gro\xDFbritannien." },
      { year: 1787, title: "Verabschiedung der US-Verfassung", text: "Eine der \xE4ltesten noch g\xFCltigen geschriebenen Verfassungen der Welt tritt in Kraft." },
      { year: 1803, title: "Louisiana Purchase", text: "Die USA erwerben von Frankreich ein riesiges Territorium und verdoppeln damit ihre Fl\xE4che." },
      { year: 1861, title: "Beginn des B\xFCrgerkriegs", text: "Konflikt um Sklaverei und Staatenrechte zwischen Nord- und S\xFCdstaaten." },
      { year: 1863, title: "Emanzipationserkl\xE4rung", text: "Abraham Lincoln erkl\xE4rt die Sklaven in den S\xFCdstaaten f\xFCr frei." },
      { year: 1898, title: "Spanisch-Amerikanischer Krieg", text: "Die USA treten erstmals als Kolonialmacht au\xDFerhalb des eigenen Kontinents auf (Kuba, Philippinen)." },
      { year: 1929, title: "Weltwirtschaftskrise", text: "Der B\xF6rsencrash an der Wall Street l\xF6st eine globale Depression aus." },
      { year: 1941, title: "Kriegseintritt nach Pearl Harbor", text: "Der japanische Angriff bringt die USA in den Zweiten Weltkrieg." },
      { year: 1945, title: "Erster Einsatz von Atomwaffen", text: "Die USA werfen Atombomben auf Hiroshima und Nagasaki ab und beenden den Zweiten Weltkrieg." },
      { year: 1963, title: "'I Have a Dream'-Rede", text: "Martin Luther King pr\xE4gt die B\xFCrgerrechtsbewegung mit seiner ber\xFChmten Rede in Washington." },
      { year: 1969, title: "Erste Mondlandung", text: "Neil Armstrong und Buzz Aldrin betreten als erste Menschen den Mond." },
      { year: 1991, title: "Ende des Kalten Krieges", text: "Mit dem Zerfall der Sowjetunion werden die USA zur alleinigen Supermacht." },
      { year: 2001, title: "Terroranschl\xE4ge vom 11. September", text: "Anschl\xE4ge auf das World Trade Center ver\xE4ndern die US-Au\xDFen- und Sicherheitspolitik nachhaltig." }
    ]
  },
  "Osmanisches Reich": {
    color: "#b8860b",
    events: [
      { year: 1299, title: "Gr\xFCndung des Osmanischen Reiches", text: "Osman I. begr\xFCndet ein kleines anatolisches F\xFCrstentum, aus dem eines der langlebigsten Weltreiche hervorgeht." },
      { year: 1389, title: "Schlacht auf dem Amselfeld", text: "Die Osmanen besiegen ein serbisch gef\xFChrtes B\xFCndnis und festigen ihre Vormacht auf dem Balkan." },
      { year: 1453, title: "Eroberung Konstantinopels", text: "Sultan Mehmed II. erobert die byzantinische Hauptstadt \u2013 Ende des Byzantinischen Reiches, Beginn der Bl\xFCtezeit der Osmanen." },
      { year: 1520, title: "Regierungsbeginn S\xFCleymans des Pr\xE4chtigen", text: "H\xF6hepunkt osmanischer Macht, Kultur und Rechtsreformen; das Reich erreicht seine gr\xF6\xDFte Ausdehnung." },
      { year: 1529, title: "Erste Belagerung Wiens", text: "Die Osmanen scheitern erstmals daran, das habsburgische Wien einzunehmen." },
      { year: 1571, title: "Seeschlacht von Lepanto", text: "Eine christliche Flottenallianz besiegt die osmanische Flotte entscheidend zur See." },
      { year: 1683, title: "Zweite Belagerung Wiens", text: "Ein entsatzheer unter Jan Sobieski wendet die letzte gro\xDFe osmanische Belagerung Wiens ab \u2013 Beginn des osmanischen R\xFCckzugs aus Mitteleuropa." },
      { year: 1699, title: "Frieden von Karlowitz", text: "Das Osmanische Reich tritt erstmals gro\xDFe Gebiete an \xD6sterreich ab \u2013 Beginn des langsamen Niedergangs." },
      { year: 1839, title: "Beginn der Tanzimat-Reformen", text: "Umfassende Modernisierungsreformen sollen das Reich nach westlichem Vorbild stabilisieren." },
      { year: 1908, title: "Jungt\xFCrkische Revolution", text: "Reformorientierte Milit\xE4rs erzwingen eine Verfassung und schw\xE4chen die Sultansmacht weiter." },
      { year: 1915, title: "Gallipoli-Kampagne", text: "Die Osmanen wehren erfolgreich eine alliierte Invasion an den Dardanellen ab." },
      { year: 1918, title: "Niederlage im Ersten Weltkrieg", text: "Das Reich verliert seine arabischen Provinzen und steht kurz vor der vollst\xE4ndigen Aufteilung." },
      { year: 1922, title: "Abschaffung des Sultanats", text: "Mustafa Kemal Atat\xFCrk beendet das \xFCber 600 Jahre alte Sultanat." },
      { year: 1923, title: "Gr\xFCndung der Republik T\xFCrkei", text: "Aus den Resten des Osmanischen Reiches entsteht der moderne t\xFCrkische Nationalstaat." }
    ]
  },
  "Indien": {
    "color": "#c17817",
    "events": [
      {
        "year": -2600,
        "title": "Indus-Kultur",
        "text": "Eine hochentwickelte Stadtkultur beherrscht von etwa 2600 bis 2000 v. Chr. den Nordwesten des Subkontinents – mit Kanalisation, genormten Ziegeln und einer bis heute nicht entzifferten Schrift."
      },
      {
        "year": -1500,
        "title": "Vedische Zeit beginnt",
        "text": "Die ältesten Sanskrittexte, die Veden, entstehen mündlich. Sie bilden die Grundlage der späteren hinduistischen Traditionen."
      },
      {
        "year": -500,
        "title": "Buddha und Mahavira",
        "text": "In Nordindien entstehen mit Buddhismus und Jainismus zwei Lehren, die die brahmanische Opferreligion grundsätzlich infrage stellen."
      },
      {
        "year": -321,
        "title": "Maurya-Reich",
        "text": "Chandragupta Maurya begründet das erste Großreich des Subkontinents."
      },
      {
        "year": -250,
        "title": "Ashokas Edikte",
        "text": "Kaiser Ashoka lässt seine Erlasse in Stein hauen – die frühesten datierbaren Schriftzeugnisse Indiens und ein früher Fall staatlich verkündeter Gewaltlosigkeit."
      },
      {
        "year": 380,
        "title": "Gupta-Zeit",
        "text": "Vom späten 4. bis ins späte 5. Jahrhundert erlebt Nordindien unter den Gupta eine Blüte in Mathematik, Astronomie und Literatur; das Dezimalsystem mit Null entsteht in diesem Umfeld."
      },
      {
        "year": 1206,
        "title": "Sultanat von Delhi",
        "text": "Nach muslimischen Eroberungen ab etwa 1000 entsteht 1206 das lange bestehende Sultanat von Delhi."
      },
      {
        "year": 1526,
        "title": "Mogulreich",
        "text": "Babur begründet die Mogul-Dynastie, unter der Nordindien wirtschaftlich und kulturell zu einer der reichsten Regionen der Welt wird."
      },
      {
        "year": 1556,
        "title": "Akbar",
        "text": "Unter Akbar erreicht das Mogulreich seine größte innere Festigkeit; er sucht den Ausgleich zwischen den Religionen seines Reiches."
      },
      {
        "year": 1632,
        "title": "Bau des Taj Mahal",
        "text": "Shah Jahan lässt für seine verstorbene Frau Mumtaz Mahal das Grabmal errichten, das zum Sinnbild der Mogulkunst wird."
      },
      {
        "year": 1757,
        "title": "Schlacht bei Plassey",
        "text": "Mit dem Sieg bei Plassey wird die Britische Ostindien-Kompanie von einer Handels- zu einer Militärmacht in Bengalen."
      },
      {
        "year": 1857,
        "title": "Aufstand von 1857",
        "text": "Ein breiter Aufstand gegen die britische Herrschaft wird bis Ende 1858 niedergeschlagen; die Krone übernimmt die Herrschaft direkt."
      },
      {
        "year": 1930,
        "title": "Salzmarsch",
        "text": "Gandhis Marsch ans Meer gegen das britische Salzmonopol macht den gewaltfreien Widerstand weltweit bekannt."
      },
      {
        "year": 1947,
        "title": "Unabhängigkeit und Teilung",
        "text": "Am 14./15. August 1947 endet die britische Herrschaft. Die Teilung in Indien und Pakistan löst eine der größten Fluchtbewegungen der Geschichte aus."
      },
      {
        "year": 1950,
        "title": "Verfassung tritt in Kraft",
        "text": "Die von B. R. Ambedkar maßgeblich gestaltete Verfassung macht Indien zur Republik und verbietet die Unberührbarkeit."
      },
      {
        "year": 1991,
        "title": "Wirtschaftliche Öffnung",
        "text": "Eine Zahlungsbilanzkrise führt zur Abkehr von der staatlich gelenkten Wirtschaft und leitet Jahrzehnte starken Wachstums ein."
      }
    ]
  },
  "Großbritannien": {
    "color": "#8a2b3a",
    "events": [
      {
        "year": 43,
        "title": "Römische Eroberung Britanniens",
        "text": "Unter Kaiser Claudius beginnt die römische Herrschaft, die rund vier Jahrhunderte dauert."
      },
      {
        "year": 1066,
        "title": "Normannische Eroberung",
        "text": "Wilhelm von der Normandie nimmt England ein – Sprache, Adel und Recht der Insel verändern sich grundlegend."
      },
      {
        "year": 1215,
        "title": "Magna Carta",
        "text": "Am 15. Juni 1215 gewährt König Johann unter Bürgerkriegsdrohung die Magna Carta. Indem sie den Herrscher dem Recht unterstellt und Freiheiten der 'freien Männer' festhält, wird sie zur Grundlage individueller Rechte im angelsächsischen Rechtsraum."
      },
      {
        "year": 1534,
        "title": "Bruch mit Rom",
        "text": "Heinrich VIII. macht sich zum Oberhaupt der englischen Kirche – aus dynastischen, nicht aus theologischen Gründen."
      },
      {
        "year": 1588,
        "title": "Sieg über die Armada",
        "text": "Die Abwehr der spanischen Invasionsflotte markiert den Aufstieg Englands zur Seemacht."
      },
      {
        "year": 1649,
        "title": "Hinrichtung Karls I.",
        "text": "Nach dem Bürgerkrieg wird ein König durch ein Gericht seines eigenen Landes hingerichtet – in Europa ohne Vorbild."
      },
      {
        "year": 1688,
        "title": "Glorreiche Revolution",
        "text": "Der Machtwechsel führt zur Bill of Rights und zur dauerhaften Bindung der Krone an das Parlament."
      },
      {
        "year": 1707,
        "title": "Union mit Schottland",
        "text": "England und Schottland stimmen dem Act of Union zu; das Königreich Großbritannien entsteht."
      },
      {
        "year": 1801,
        "title": "Union mit Irland",
        "text": "Die Vereinigung mit Irland schafft das Vereinigte Königreich von Großbritannien und Irland."
      },
      {
        "year": 1807,
        "title": "Verbot des Sklavenhandels",
        "text": "Großbritannien verbietet den Sklavenhandel mit seinen Kolonien; 1833 folgt die Abschaffung der Sklaverei im Empire."
      },
      {
        "year": 1832,
        "title": "Reform Act",
        "text": "Wahlkreise werden neu zugeschnitten und das Wahlrecht erweitert – die Wählerschaft wächst um 57 Prozent auf 217.000. Handwerker, Arbeiter und große Teile der unteren Mittelschicht bleiben weiterhin ausgeschlossen."
      },
      {
        "year": 1928,
        "title": "Gleiches Wahlrecht für Frauen",
        "text": "Nach dem Teilwahlrecht von 1918 erhalten Frauen dieselben Bedingungen wie Männer."
      },
      {
        "year": 1947,
        "title": "Rückzug aus Indien",
        "text": "Die Unabhängigkeit Indiens leitet das Ende des Empire ein."
      },
      {
        "year": 1948,
        "title": "Gründung des NHS",
        "text": "Der National Health Service macht medizinische Versorgung für alle unabhängig vom Einkommen zugänglich."
      },
      {
        "year": 1973,
        "title": "Beitritt zur EWG",
        "text": "Großbritannien tritt der Europäischen Wirtschaftsgemeinschaft bei, einer Vorläuferin der Europäischen Union."
      },
      {
        "year": 2020,
        "title": "Austritt aus der EU",
        "text": "Nach dem Referendum von 2016 verlässt das Vereinigte Königreich die Europäische Union."
      }
    ]
  },
  "Spanien": {
    "color": "#a8571c",
    "events": [
      {
        "year": -218,
        "title": "Rom erobert Hispanien",
        "text": "Im Zweiten Punischen Krieg beginnt die römische Herrschaft über die Halbinsel, die Sprache und Recht dauerhaft prägt."
      },
      {
        "year": 711,
        "title": "Muslimische Eroberung",
        "text": "Im April oder Mai 711 setzt ein Amazigh-Heer unter Tariq ibn Ziyad über die Straße von Gibraltar; im Juli schlägt es König Roderich entscheidend."
      },
      {
        "year": 718,
        "title": "Beginn der Reconquista",
        "text": "Mit der Schlacht von Covadonga um 718 beginnt die christliche Rückeroberung, die erst 1492 endet."
      },
      {
        "year": 756,
        "title": "Emirat von Córdoba",
        "text": "Al-Andalus wird zum eigenständigen Zentrum von Wissenschaft, Medizin und Philosophie – über Jahrhunderte eine Brücke antiken Wissens nach Europa."
      },
      {
        "year": 1492,
        "title": "Granada, Kolumbus, Vertreibung",
        "text": "Die Katholischen Könige erobern Granada, Kolumbus erreicht Amerika – und im selben Jahr werden die Juden aus Spanien vertrieben."
      },
      {
        "year": 1516,
        "title": "Habsburger auf dem Thron",
        "text": "Die Herrschaft der Habsburger beginnt und endet 1700, als Philipp V. als erster Bourbone König wird."
      },
      {
        "year": 1521,
        "title": "Eroberung Tenochtitlans",
        "text": "Mit dem Fall der Aztekenhauptstadt beginnt die spanische Herrschaft über weite Teile Amerikas."
      },
      {
        "year": 1588,
        "title": "Untergang der Armada",
        "text": "Die Niederlage der Invasionsflotte gegen England markiert den Wendepunkt der spanischen Seemacht."
      },
      {
        "year": 1808,
        "title": "Napoleon setzt seinen Bruder ein",
        "text": "Joseph Bonaparte wird auf den Thron gesetzt; im Unabhängigkeitskrieg 1808–1814 befreit sich Spanien mit britischer und portugiesischer Hilfe."
      },
      {
        "year": 1812,
        "title": "Verfassung von Cádiz",
        "text": "Eine der ersten liberalen Verfassungen Europas entsteht mitten im Krieg – und wird zum Vorbild weit über Spanien hinaus."
      },
      {
        "year": 1898,
        "title": "Verlust der letzten Kolonien",
        "text": "Im Krieg gegen die USA verliert Spanien Kuba, Puerto Rico und die Philippinen – das Ende des überseeischen Reiches."
      },
      {
        "year": 1936,
        "title": "Bürgerkrieg",
        "text": "Der Spanische Bürgerkrieg 1936–1939 endet mit dem Sieg der Nationalisten unter General Franco, der bis zu seinem Tod 1975 als Diktator herrscht."
      },
      {
        "year": 1975,
        "title": "Übergang zur Demokratie",
        "text": "Nach Francos Tod stellt Juan Carlos I. die Monarchie wieder her und leitet den Übergang ein."
      },
      {
        "year": 1978,
        "title": "Neue Verfassung",
        "text": "Die Verfassung von 1978 begründet eine konstitutionelle Monarchie mit weitreichender Selbstverwaltung der Regionen."
      },
      {
        "year": 1986,
        "title": "Beitritt zur EG",
        "text": "Der Beitritt zur Europäischen Gemeinschaft besiegelt die Rückkehr Spaniens nach Westeuropa."
      }
    ]
  },
  "Iran / Persien": {
    "color": "#7d5ba6",
    "events": [
      {
        "year": -550,
        "title": "Kyros II. gründet das Achämenidenreich",
        "text": "Kyros der Große (590–529 v. Chr.) begründet ein Reich, das von der Ägäis bis zum Indus reicht – das größte, das die Welt bis dahin gesehen hatte. Die Dynastie hält von 559 bis 330 v. Chr."
      },
      {
        "year": -539,
        "title": "Eroberung Babylons",
        "text": "Kyros erlaubt den nach Babylon verschleppten Judäern die Rückkehr – ein früher Fall bewusst gemäßigter Herrschaftspraxis gegenüber Unterworfenen."
      },
      {
        "year": -486,
        "title": "Dareios und Xerxes gegen Griechenland",
        "text": "Die Perserkriege prägen bis heute das europäische Selbstbild – erzählt allerdings fast ausschließlich aus griechischer Sicht."
      },
      {
        "year": -330,
        "title": "Alexander zerstört Persepolis",
        "text": "Das Achämenidenreich fällt an Alexander; die Verwaltungsstrukturen überdauern jedoch unter seinen Nachfolgern."
      },
      {
        "year": -247,
        "title": "Partherreich",
        "text": "Von 247 v. Chr. bis 224 n. Chr. beherrschen die Parther das iranische Hochland und Mesopotamien – jahrhundertelang Roms ebenbürtiger Gegner im Osten."
      },
      {
        "year": 224,
        "title": "Sasaniden",
        "text": "Die Sasaniden (224–651) stürzen die Parther und erneuern das iranische Selbstbewusstsein; der Zoroastrismus wird Staatsreligion."
      },
      {
        "year": 651,
        "title": "Arabische Eroberung",
        "text": "Das Sasanidenreich fällt; der Islam wird über Jahrhunderte zur prägenden Religion, die persische Sprache und Kultur bleiben bestehen."
      },
      {
        "year": 1010,
        "title": "Firdausis Schahname",
        "text": "Das persische Nationalepos bewahrt die vorislamische Überlieferung und rettet zugleich die persische Sprache."
      },
      {
        "year": 1219,
        "title": "Mongolensturm",
        "text": "Die mongolische Eroberung zerstört Städte und Bewässerungssysteme; die Folgen wirken über Generationen."
      },
      {
        "year": 1501,
        "title": "Safawiden",
        "text": "Ismail I. begründet die Safawiden-Dynastie (1501–1736) und macht die Zwölferschia zur Staatsreligion – die Grundlage einer eigenständigen iranischen Identität."
      },
      {
        "year": 1796,
        "title": "Kadscharen",
        "text": "Unter den Kadscharen gerät das Land im 19. Jahrhundert wirtschaftlich unter die Kontrolle des russischen und des britischen Empire."
      },
      {
        "year": 1906,
        "title": "Konstitutionelle Revolution",
        "text": "Eine Verfassungsbewegung erzwingt ein Parlament – früher als in vielen europäischen Staaten."
      },
      {
        "year": 1953,
        "title": "Sturz Mossadeghs",
        "text": "Der Sturz des Ministerpräsidenten nach der Verstaatlichung der Ölindustrie, unterstützt von britischen und US-amerikanischen Diensten, belastet das Verhältnis zum Westen bis heute."
      },
      {
        "year": 1979,
        "title": "Islamische Revolution",
        "text": "Mohammad Reza Schah Pahlavi wird gestürzt; Ruhollah Chomeini errichtet eine Islamische Republik, westlicher Einfluss wird zurückgedrängt."
      }
    ]
  },
  "Ägypten": {
    "color": "#b8860b",
    "events": [
      {
        "year": -3100,
        "title": "Reichseinigung",
        "text": "Um 3100 v. Chr. wird der Beginn der 1. Dynastie angesetzt; Ober- und Unterägypten werden unter einem Herrscher vereint – häufig Menes/Narmer zugeschrieben."
      },
      {
        "year": -2543,
        "title": "Die großen Pyramiden",
        "text": "Die Pyramiden der 4. Dynastie entstehen zwischen etwa 2543 und 2436 v. Chr. – bis ins Mittelalter die höchsten Bauwerke der Menschheit."
      },
      {
        "year": -1479,
        "title": "Hatschepsut",
        "text": "Eine der wenigen Frauen auf dem Thron regiert über zwei Jahrzehnte; ihre Nachfolger versuchen später, ihre Spuren zu tilgen."
      },
      {
        "year": -1353,
        "title": "Echnaton",
        "text": "Der Pharao stellt den Kult auf den Sonnengott Aton um – ein früher Versuch, viele Götter durch einen zu ersetzen, der nach seinem Tod rückgängig gemacht wird."
      },
      {
        "year": -1274,
        "title": "Schlacht bei Kadesch",
        "text": "Die Schlacht gegen die Hethiter mündet in den ersten überlieferten Friedensvertrag der Geschichte."
      },
      {
        "year": -332,
        "title": "Alexander und die Ptolemäer",
        "text": "Alexander gründet Alexandria; unter den griechischen Ptolemäern wird die Stadt zum Zentrum von Bibliothek und Wissenschaft."
      },
      {
        "year": -30,
        "title": "Römische Provinz",
        "text": "Mit dem Tod Kleopatras VII. wird Ägypten 30 v. Chr. von Rom erobert und zur Kornkammer des Reiches."
      },
      {
        "year": 639,
        "title": "Arabische Eroberung",
        "text": "Zwischen 639 und 642 erobern arabisch-muslimische Heere das bis dahin byzantinische Ägypten; Arabisch verdrängt allmählich das Koptische."
      },
      {
        "year": 969,
        "title": "Gründung Kairos",
        "text": "Die Fatimiden gründen Kairo; mit der al-Azhar entsteht eine der ältesten durchgehend bestehenden Hochschulen der Welt."
      },
      {
        "year": 1250,
        "title": "Mamluken",
        "text": "Ehemalige Militärsklaven übernehmen die Herrschaft und stoppen 1260 bei Ain Dschalut den mongolischen Vormarsch."
      },
      {
        "year": 1517,
        "title": "Osmanische Herrschaft",
        "text": "Ägypten wird osmanische Provinz und bleibt es formal bis ins 19. Jahrhundert."
      },
      {
        "year": 1798,
        "title": "Napoleons Feldzug",
        "text": "Der französische Feldzug bringt Wissenschaftler mit – der Fund des Steins von Rosetta ermöglicht später die Entzifferung der Hieroglyphen."
      },
      {
        "year": 1869,
        "title": "Eröffnung des Suezkanals",
        "text": "Der Kanal verbindet Mittelmeer und Rotes Meer und macht Ägypten zum strategischen Schlüsselraum – mit erdrückenden Schulden als Kehrseite."
      },
      {
        "year": 1952,
        "title": "Revolution der Freien Offiziere",
        "text": "Die Monarchie wird gestürzt; Nasser prägt den arabischen Nationalismus einer Generation."
      },
      {
        "year": 1956,
        "title": "Suezkrise",
        "text": "Die Verstaatlichung des Kanals führt zum Krieg mit Großbritannien, Frankreich und Israel – und macht sichtbar, dass die alten Kolonialmächte ihre Macht verloren haben."
      }
    ]
  },
  "Mexiko & Mesoamerika": {
    "color": "#2f7d5b",
    "events": [
      {
        "year": -1200,
        "title": "Olmeken",
        "text": "Die olmekische Kultur (1200–400 v. Chr.) gilt als erste hochentwickelte Zivilisation Mesoamerikas und legt Muster fest, die Maya und Azteken übernehmen."
      },
      {
        "year": -400,
        "title": "Frühe Maya-Städte",
        "text": "Im Tiefland entstehen erste größere Zentren mit Monumentalbauten und Schrift."
      },
      {
        "year": 100,
        "title": "Teotihuacán",
        "text": "Im Tal von Mexiko wird Teotihuacán zur Hauptstadt eines politischen und wirtschaftlichen Einflussraums, der weite Teile Mesoamerikas umfasst."
      },
      {
        "year": 250,
        "title": "Klassische Maya-Zeit",
        "text": "Die Maya bringen Astronomie, Mathematik, Kalenderrechnung und Hieroglyphenschrift zur höchsten Entfaltung der vorkolumbischen Welt."
      },
      {
        "year": 900,
        "title": "Ende der klassischen Zeit",
        "text": "Bis etwa 700–900 enden die klassischen Zentren; über die Ursachen – Dürre, Krieg, Übernutzung – wird bis heute geforscht."
      },
      {
        "year": 1325,
        "title": "Gründung Tenochtitlans",
        "text": "Die Mexica gründen ihre Hauptstadt auf einer Insel im Texcoco-See – ein Standort, der Verteidigung und Handel zugleich begünstigt."
      },
      {
        "year": 1428,
        "title": "Aufstieg der Azteken",
        "text": "Mit dem Sieg über die rivalisierende Stadt Azcapotzalco werden die Azteken zur beherrschenden Macht Zentralmexikos."
      },
      {
        "year": 1519,
        "title": "Ankunft der Spanier",
        "text": "Hernán Cortés landet an der Küste; entscheidend für seinen Erfolg werden Bündnisse mit unterworfenen Völkern und eingeschleppte Seuchen."
      },
      {
        "year": 1521,
        "title": "Fall Tenochtitlans",
        "text": "Die Hauptstadt fällt; auf ihren Ruinen entsteht Mexiko-Stadt, und die spanische Kolonialherrschaft beginnt."
      },
      {
        "year": 1531,
        "title": "Guadalupe",
        "text": "Die Marienerscheinung von Guadalupe wird zum Bindeglied zwischen indigener und katholischer Frömmigkeit und später zum nationalen Symbol."
      },
      {
        "year": 1810,
        "title": "Ruf von Dolores",
        "text": "Der Priester Miguel Hidalgo ruft zum Aufstand gegen die spanische Herrschaft – Beginn des Unabhängigkeitskriegs."
      },
      {
        "year": 1821,
        "title": "Unabhängigkeit",
        "text": "Mexiko wird unabhängig; die sozialen Verhältnisse der Kolonialzeit bleiben zunächst weitgehend bestehen."
      },
      {
        "year": 1848,
        "title": "Verlust der Nordgebiete",
        "text": "Im Vertrag von Guadalupe Hidalgo verliert Mexiko rund die Hälfte seines Staatsgebiets an die USA."
      },
      {
        "year": 1910,
        "title": "Mexikanische Revolution",
        "text": "Der Aufstand gegen die Diktatur Porfirio Díaz' zieht sich über ein Jahrzehnt und mündet in die Verfassung von 1917 mit Landreform und Arbeitsrechten."
      },
      {
        "year": 1968,
        "title": "Massaker von Tlatelolco",
        "text": "Kurz vor den Olympischen Spielen lässt die Regierung eine Studentendemonstration niederschießen – ein Bruch im Selbstverständnis des Landes."
      }
    ]
  }
};
const MYTHEN = [
  {"category":"Antike","type":"Nuance","title":"Der Trojanische Krieg war reine Erfindung","text":"Homers 'Ilias' ist literarisch stark überhöht, doch Ausgrabungen in Hisarlik (Türkei) durch Heinrich Schliemann belegen eine reale, mehrfach zerstörte Stadt namens Troja. Ob ein 'Trojanisches Pferd' tatsächlich existierte, bleibt jedoch unbewiesen."},
  {"category":"Antike","type":"Nuance","title":"Bei den Thermopylen kämpften nur 300 Spartaner","text":"Tatsächlich standen mehrere tausend griechische Verbündete mit den Spartanern gemeinsam gegen die Perser. Die '300' waren nur die Kerntruppe, die als letzte in einem aussichtslosen Nachhutgefecht standhielt."},
  {"category":"Antike","type":"Mythos","title":"Nero spielte Geige, während Rom brannte","text":"Die Geige wurde erst rund 1500 Jahre später erfunden. Manche antiken Quellen berichten sogar, Nero sei bei Brandausbruch gar nicht in Rom gewesen und habe später den Wiederaufbau organisiert."},
  {"category":"Antike","type":"Nuance","title":"Caligula ernannte sein Pferd zum Senator","text":"Der römische Historiker Sueton berichtet dies als Beleg für Caligulas Wahnsinn. Moderne Historiker vermuten eher bitteren Spott gegenüber dem Senat als eine tatsächlich vollzogene Ernennung."},
  {"category":"Antike","type":"Nuance","title":"Kleopatra war eine ägyptische Schönheitsikone","text":"Kleopatra VII. entstammte der griechisch-makedonischen Ptolemäer-Dynastie, war also keine ethnische Ägypterin. Antike Quellen betonen zudem eher ihre Intelligenz, Bildung und Stimme als klassische Schönheit."},
  {"category":"Antike","type":"Nuance","title":"Alexander der Große wurde vergiftet","text":"Seine Todesursache ist bis heute ungeklärt. Historiker diskutieren neben Vergiftung auch Malaria, Typhus oder übermäßigen Alkoholkonsum – eine endgültige Antwort gibt es nicht."},
  {"category":"Antike","type":"Mythos","title":"Atlantis war eine reale versunkene Hochkultur","text":"Atlantis wird erstmals von Platon als philosophisches Gedankenexperiment über einen idealen und einen dekadenten Staat erwähnt. Es gibt keinerlei archäologischen Beleg für seine tatsächliche Existenz."},
  {"category":"Antike","type":"Nuance","title":"Der Läufer Pheidippides rannte 42 km und starb","text":"Herodot berichtet nur von einem Botenlauf nach Sparta, nicht von einem tödlichen Lauf über die Marathon-Distanz. Die moderne Marathondistanz von 42,195 km wurde erst 1908 bei den Olympischen Spielen in London festgelegt."},
  {"category":"Antike","type":"Nuance","title":"Gladiatoren kämpften immer bis zum Tod","text":"Gladiatoren waren teure Investitionen ihrer Besitzer. Die meisten Kämpfe endeten ohne tödlichen Ausgang, und die genaue Bedeutung der berühmten Daumengeste ist unter Historikern bis heute umstritten."},
  {"category":"Mittelalter","type":"Mythos","title":"Im Mittelalter glaubte man an eine flache Erde","text":"Gebildete Menschen wussten seit der griechischen Antike um die Kugelform der Erde. Auch mittelalterliche Gelehrte lehrten dies an Universitäten – der Mythos der 'flachen Erde' entstand erst im 19. Jahrhundert."},
  {"category":"Mittelalter","type":"Mythos","title":"Ritter mussten mit einem Kran aufs Pferd gehoben werden","text":"Vollrüstungen wogen meist nur 20–25 kg und waren gut über den Körper verteilt. Ritter konnten sich damit frei bewegen, kämpfen und sogar Purzelbäume schlagen, wie Experimente moderner Rüstungshistoriker zeigen."},
  {"category":"Mittelalter","type":"Mythos","title":"Menschen im Mittelalter wuschen sich nie","text":"Öffentliche Badehäuser waren im Mittelalter weit verbreitet und beliebt. Erst im Zuge der Pestepidemien ab dem 14. Jahrhundert geriet Baden aus Angst vor Ansteckung zunehmend in Verruf."},
  {"category":"Mittelalter","type":"Mythos","title":"Hexenverbrennungen waren typisch für das 'finstere' Mittelalter","text":"Die überwältigende Mehrheit der europäischen Hexenprozesse und -verbrennungen fand tatsächlich erst in der Frühen Neuzeit statt, besonders im 16. und 17. Jahrhundert – nicht im Mittelalter."},
  {"category":"Mittelalter","type":"Mythos","title":"Mittelalterliche Karten warnten mit 'Hier seien Drachen'","text":"Die berühmte lateinische Formulierung 'hic sunt dracones' ist tatsächlich nur auf einem einzigen erhaltenen Objekt belegt, dem Hunt-Lenox-Globus von ca. 1510 – nicht auf typischen mittelalterlichen Karten."},
  {"category":"Mittelalter","type":"Mythos","title":"Die Wikinger trugen gehörnte Helme","text":"Es gibt keinerlei archäologische Belege für Hörnerhelme bei echten Wikingern. Das Bild wurde im 19. Jahrhundert von Kostümbildnern der Oper (u.a. für Wagners Ring des Nibelungen) erfunden."},
  {"category":"Mittelalter","type":"Mythos","title":"Kolumbus bewies, dass die Erde rund ist","text":"Dies war bereits seit der Antike bekanntes Allgemeinwissen unter Gelehrten. Kolumbus' eigentlicher Streitpunkt mit Experten war die (falsch geschätzte, zu kleine) Größe der Erde, nicht ihre Form."},
  {"category":"Mittelalter","type":"Nuance","title":"Vlad der Pfähler war ein Vampir","text":"Der reale walachische Fürst Vlad III. war berüchtigt für extrem brutale Bestrafungsmethoden, aber keine übernatürliche Gestalt. Die Vampirlegende geht auf Bram Stokers Roman 'Dracula' (1897) zurück, der seinen Namen nur lose verwendete."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"Marie Antoinette sagte 'Sollen sie doch Kuchen essen'","text":"Dieses Zitat lässt sich bereits vor Marie Antoinettes Zeit nachweisen und wurde ursprünglich anderen Adligen zugeschrieben. Es gibt keinen historischen Beleg, dass sie diesen Satz je gesagt hat."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"In Salem wurden Hexen auf dem Scheiterhaufen verbrannt","text":"Bei den berühmten Hexenprozessen von Salem (1692/93) wurden alle Verurteilten gehängt – niemand wurde verbrannt, anders als es die Popkultur oft darstellt."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"George Washington fällte als Kind einen Kirschbaum und log nie","text":"Diese moralisierende Anekdote wurde erst nach Washingtons Tod von seinem Biografen Parson Weems erfunden, um ihn als Vorbild ehrlichen Charakters darzustellen."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"Napoleon war außergewöhnlich klein","text":"Napoleon war mit ca. 1,68 m für seine Zeit durchschnittlich groß. Der Mythos entstand durch eine Verwechslung französischer und englischer Zoll-Maßeinheiten sowie britische Kriegspropaganda."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Marco Polo erfand seine China-Reise komplett","text":"Manche Historiker bezweifeln einzelne Details seines Berichts (er erwähnt etwa nie die Chinesische Mauer), doch die Reise als solche und viele seiner Beschreibungen gelten heute als historisch belegt."},
  {"category":"Frühe Neuzeit","type":"Kuriosum","title":"Piraten trugen Augenklappen wegen Verletzungen","text":"Eine populäre Theorie besagt, Augenklappen dienten manchen Seeleuten dazu, ein Auge stets an Dunkelheit gewöhnt zu halten, um beim schnellen Wechsel zwischen Deck und dunklem Unterdeck sofort sehen zu können."},
  {"category":"Moderne","type":"Mythos","title":"Einstein ist in der Schule durchgefallen","text":"Albert Einstein war tatsächlich ein exzellenter Schüler, besonders in Mathematik und Physik. Der Mythos entstand vermutlich durch eine Verwechslung unterschiedlicher Schweizer Notenskalen."},
  {"category":"Moderne","type":"Mythos","title":"Der Fluch des Tutanchamun tötete die Ausgräber","text":"Nach dem Tod von Lord Carnarvon 1923 verbreitete die Boulevardpresse die Legende eines Grabfluchs. Statistisch starben die meisten an der Ausgrabung Beteiligten aber erst Jahrzehnte später eines natürlichen Todes."},
  {"category":"Moderne","type":"Kuriosum","title":"Der Piltdown-Mensch war ein Sensationsfund","text":"1912 als bedeutendes 'fehlendes Bindeglied' der Evolution präsentiert, entpuppte sich der Fund 1953 als Fälschung aus einem Menschenschädel und einem Orang-Utan-Kiefer – einer der berühmtesten Wissenschaftsbetrugsfälle der Geschichte."},
  {"category":"Moderne","type":"Mythos","title":"Anastasia Romanov überlebte die Erschießung ihrer Familie","text":"Jahrzehntelang befeuerten Hochstaplerinnen wie Anna Anderson diesen Mythos. DNA-Analysen der geborgenen Gebeine bestätigten 2007 zweifelsfrei den Tod aller Familienmitglieder der Zarenfamilie."},
  {"category":"Moderne","type":"Nuance","title":"Rasputin war fast unmöglich zu töten","text":"Die dramatische Legende von Vergiftung, Erschießung und Ertränken stammt vor allem aus den unzuverlässigen Memoiren seines Mörders Felix Jussupow. Historiker bezweifeln heute viele Details dieser Version."},
  {"category":"Moderne","type":"Kuriosum","title":"Der Fall der Berliner Mauer war minutiös geplant","text":"Tatsächlich war die Maueröffnung 1989 vor allem die Folge eines Kommunikationsfehlers: SED-Funktionär Günter Schabowski verkündete auf einer Pressekonferenz versehentlich sofortige Reisefreiheit."},
  {"category":"Moderne","type":"Mythos","title":"Ninjas trugen stets komplett schwarze Kleidung","text":"Dieses Bild stammt aus Konventionen des japanischen Kabuki-Theaters, wo schwarz gekleidete Bühnenhelfer als 'unsichtbar' galten. Reale Ninja trugen meist unauffällige Alltagskleidung zur Tarnung."},
  {"category":"Moderne","type":"Mythos","title":"Die Chinesische Mauer ist vom Weltall aus mit bloßem Auge sichtbar","text":"Astronauten, darunter mehrere chinesische Taikonauten, haben diesen hartnäckigen Mythos wiederholt dementiert. Die Mauer ist schlicht zu schmal, um ohne Hilfsmittel aus dem All erkennbar zu sein."},
  {"category":"Legenden","type":"Mythos","title":"Das Bermuda-Dreieck verschluckt überdurchschnittlich viele Schiffe","text":"Statistische Analysen von Versicherungsdaten zeigen keine erhöhte Vermisstenrate gegenüber anderen stark befahrenen Seegebieten vergleichbarer Größe."},
  {"category":"Legenden","type":"Mythos","title":"Nostradamus sagte konkrete historische Ereignisse voraus","text":"Seine Verse sind bewusst vage, mehrdeutig und metaphernreich formuliert. Vermeintliche 'Treffer' entstehen fast immer durch rückwirkende Deutung nach bereits eingetretenen Ereignissen."},
  {"category":"Legenden","type":"Mythos","title":"Kolumbus war der erste Europäer in Amerika","text":"Wikinger unter Leif Eriksson erreichten Neufundland (das sogenannte 'Vinland') bereits um das Jahr 1000 – rund 500 Jahre vor Kolumbus, wie die Ausgrabungen von L'Anse aux Meadows belegen."},
  {"category":"Legenden","type":"Kuriosum","title":"Napoleon wurde von einer Hasen-Horde angegriffen","text":"Bei einer eigens organisierten Hasenjagd 1807 wandten sich hunderte zuvor gezüchtete, zahme Hasen nicht zur Flucht, sondern liefen auf Napoleon und seine Gesellschaft zu – die Jagdgesellschaft musste sich regelrecht zurückziehen."},
  {"category":"Legenden","type":"Kuriosum","title":"Bei den ersten Olympischen Spielen traten Athleten nackt an","text":"Der griechische Begriff 'gymnos' (nackt) ist die Wurzel des Wortes 'Gymnasium'. Athleten traten in Olympia tatsächlich unbekleidet an – laut Überlieferung auch, um Frauen (denen die Teilnahme als Zuschauerinnen untersagt war) fernzuhalten."},
  {"category":"Legenden","type":"Kuriosum","title":"Ein römischer Kaiser bot einen Preis für die beste Grimasse","text":"Bei manchen römischen Festen gab es tatsächlich Wettbewerbe im Grimassenschneiden ('gymnastiké') als derbe Unterhaltung – ein früher Vorläufer heutiger Grimassen-Wettbewerbe."},
  {"category":"Antike","type":"Nuance","title":"Spartaner warfen alle schwachen Babys von einem Felsen","text":"Diese Praxis wird nur von einem einzigen, Jahrhunderte späteren Autor (Plutarch) erwähnt. Ausgrabungen der vermeintlichen Stätte fanden keine Babyskelette, sondern nur Knochen erwachsener Männer – vermutlich hingerichteter Verbrecher."},
  {"category":"Antike","type":"Mythos","title":"Julius Caesars Name stammt vom Kaiserschnitt","text":"Seine Mutter Aurelia lebte nachweislich noch Jahrzehnte nach seiner Geburt weiter – ein Kaiserschnitt war zu dieser Zeit für die Mutter praktisch immer tödlich. Die tatsächliche Namensherkunft ist unklar."},
  {"category":"Antike","type":"Nuance","title":"Caesars letzte Worte waren 'Auch du, mein Sohn Brutus?'","text":"Der Historiker Sueton überliefert diese Version nur als Gerücht. Ob Caesar überhaupt letzte Worte sprach, ist historisch nicht gesichert."},
  {"category":"Antike","type":"Mythos","title":"Die Pyramiden wurden von Sklaven erbaut","text":"Ausgrabungen von Arbeitersiedlungen bei Gizeh zeigen, dass die Pyramiden überwiegend von bezahlten, gut versorgten Facharbeitern und Bauern während der Nilüberschwemmungszeit errichtet wurden."},
  {"category":"Antike","type":"Nuance","title":"Kleopatra starb an einem einzigen Schlangenbiss","text":"Schon antike Quellen waren sich uneinig; moderne Toxikologen bezweifeln, dass eine einzelne Schlange einen so kontrollierten, schmerzfreien Tod verursacht haben könnte."},
  {"category":"Antike","type":"Mythos","title":"Napoleons Truppen schossen der Sphinx die Nase ab","text":"Zeichnungen aus dem 18. Jahrhundert – vor Napoleons Ägyptenfeldzug – zeigen die Sphinx bereits ohne Nase. Die Beschädigung geschah vermutlich Jahrhunderte früher."},
  {"category":"Antike","type":"Nuance","title":"Sokrates wurde allein wegen echter Gottlosigkeit hingerichtet","text":"Historiker sehen den Prozess auch stark politisch motiviert – als Abrechnung mit seinen Verbindungen zu unbeliebten aristokratischen Schülern nach dem Sturz der 'Dreißig Tyrannen'."},
  {"category":"Antike","type":"Nuance","title":"Hannibal verlor alle seine Kriegselefanten in den Alpen","text":"Die meisten Tiere starben tatsächlich an Kälte und Erschöpfung, doch mindestens ein Elefant überlebte Berichten zufolge bis nach Italien."},
  {"category":"Antike","type":"Nuance","title":"Archimedes rief 'Heureka' beim Baden aus","text":"Die Anekdote stammt vom römischen Autor Vitruv, rund 200 Jahre nach Archimedes' Tod – zeitgenössisch ist sie nicht belegt."},
  {"category":"Antike","type":"Mythos","title":"Der Koloss von Rhodos stand rittlings über dem Hafeneingang","text":"Diese berühmte Darstellung stammt erst aus mittelalterlichen und Renaissance-Illustrationen; antike Ingenieure hätten eine solche Statue technisch kaum errichten können."},
  {"category":"Antike","type":"Kuriosum","title":"Die Terrakotta-Armee wurde zufällig entdeckt","text":"1974 stießen Bauern beim Brunnenbohren in der chinesischen Provinz Shaanxi zufällig auf die über 8.000 lebensgroßen Tonkrieger des ersten chinesischen Kaisers."},
  {"category":"Antike","type":"Nuance","title":"Bei den Olympischen Spielen herrschte reine Sportlichkeit ohne Politik","text":"Während der Spiele galt zwar ein 'heiliger Frieden' (Ekecheiria), dieser wurde jedoch häufig auch für diplomatische Zwecke der Stadtstaaten instrumentalisiert."},
  {"category":"Antike","type":"Kuriosum","title":"Mönchtum entstand nur einmal in der Geschichte","text":"Buddhistische und christliche Klostertraditionen entwickelten unabhängig voneinander erstaunlich ähnliche Konzepte von Askese, Zölibat und Gemeinschaftsleben."},
  {"category":"Antike","type":"Nuance","title":"Buddha war von Geburt an ein Bettelmönch","text":"Der Überlieferung nach wurde Siddhartha Gautama als wohlhabender Prinz geboren und wandte sich erst als junger Erwachsener bewusst von Reichtum und Palastleben ab."},
  {"category":"Mittelalter","type":"Mythos","title":"Das 'Recht der ersten Nacht' war weitverbreitete feudale Praxis","text":"Historiker finden kaum verlässliche zeitgenössische Belege für eine systematische Ausübung dieses angeblichen Rechts; es dürfte größtenteils spätere literarische Erfindung sein."},
  {"category":"Mittelalter","type":"Mythos","title":"Wikinger waren reine Plünderer ohne Handelskultur","text":"Wikinger betrieben ausgedehnte Handelsnetzwerke bis nach Byzanz und Bagdad und gründeten zahlreiche bis heute bestehende Städte, darunter Dublin."},
  {"category":"Mittelalter","type":"Nuance","title":"Kreuzritter kämpften ausschließlich aus religiösem Eifer","text":"Viele Teilnehmer verband mit dem religiösen Motiv auch die Aussicht auf Landbesitz, Beute, Handelsvorteile und gesellschaftliches Ansehen."},
  {"category":"Mittelalter","type":"Nuance","title":"Der Begriff 'Vandalismus' beweist besondere Zerstörungswut der Vandalen","text":"Der Begriff wurde erst über 1000 Jahre später im 18. Jahrhundert geprägt; die historischen Vandalen plünderten Rom 455 zwar, richteten aber wohl keine ungewöhnlich systematische Zerstörung an."},
  {"category":"Mittelalter","type":"Nuance","title":"Attila der Hunne war nur ein ungebildeter Wilder","text":"Zeitgenössische Quellen wie der oströmische Gesandte Priskos beschreiben ihn auch als überraschend genügsam, diplomatisch geschickt und an römischer Kultur interessiert."},
  {"category":"Mittelalter","type":"Nuance","title":"Die Lebenserwartung im Mittelalter betrug generell nur 30 Jahre","text":"Diese Zahl wird stark durch hohe Kindersterblichkeit verzerrt; wer das Erwachsenenalter erreichte, hatte durchaus realistische Chancen auf 60 bis 70 Lebensjahre."},
  {"category":"Mittelalter","type":"Mythos","title":"Marco Polo brachte Nudeln aus China nach Italien","text":"Es gibt Belege für Nudelgerichte im Mittelmeerraum bereits vor Marco Polos Reise; die populäre Legende entstand vermutlich erst im 20. Jahrhundert durch eine amerikanische Werbekampagne."},
  {"category":"Mittelalter","type":"Nuance","title":"Die Magna Carta garantierte allen Engländern Freiheit","text":"Ursprünglich schützte sie fast ausschließlich die Rechte des Adels gegenüber der Krone; erst spätere Interpretationen im 17. Jahrhundert weiteten ihre Bedeutung auf allgemeine Bürgerrechte aus."},
  {"category":"Mittelalter","type":"Mythos","title":"Die Assassinen waren durch Haschisch berauschte Auftragsmörder","text":"Der Name geht vermutlich auf eine abwertende arabische Fremdbezeichnung zurück; historische Belege für systematischen Drogenkonsum der Sekte gelten heute als unzuverlässig."},
  {"category":"Mittelalter","type":"Mythos","title":"Im Mittelalter herrschte durchgehender wissenschaftlicher Stillstand","text":"Die Epoche brachte bedeutende Innovationen wie die Brille, mechanische Uhren, den Buchdruck, das Dreifelder-System in der Landwirtschaft und gotische Kathedralbaukunst."},
  {"category":"Mittelalter","type":"Nuance","title":"Die Templerritter wurden wegen erwiesener Häresie vernichtet","text":"Historiker gehen heute überwiegend davon aus, dass der hoch verschuldete französische König Philipp IV. die Anklagen 1307 vor allem konstruierte, um sich des Vermögens des Ordens zu bemächtigen."},
  {"category":"Mittelalter","type":"Nuance","title":"Der Investiturstreit drehte sich nur um religiöse Fragen","text":"Im Kern ging es vor allem um handfeste Macht- und Besitzfragen: wer Bischöfe – und damit große Ländereien – einsetzen durfte, Kaiser oder Papst."},
  {"category":"Mittelalter","type":"Nuance","title":"Die Hanse war ein fest organisierter Staat","text":"Tatsächlich war die Hanse ein loses, informelles Netzwerk von Kaufleuten und Städten ohne zentrale Verfassung, gemeinsame Kasse oder feste Mitgliederliste."},
  {"category":"Mittelalter","type":"Mythos","title":"Chinesische Schiffe der Ming-Zeit waren primitive Boote","text":"Admiral Zheng Hes Flotte im frühen 15. Jahrhundert umfasste Schiffe von bis zu 120 Metern Länge – deutlich größer als alle europäischen Schiffe dieser Zeit."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"Galileo Galilei wurde wegen seiner Thesen gefoltert","text":"Er wurde 1633 zu Hausarrest verurteilt, jedoch nicht gefoltert. Die Androhung von Folter war zu dieser Zeit ein übliches, meist nicht vollzogenes Verhörinstrument der Inquisition."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Die Pilgerväter suchten Religionsfreiheit für alle","text":"Die Puritaner an Bord der Mayflower suchten vor allem Freiheit für die eigene Glaubensgemeinschaft und praktizierten später selbst erhebliche religiöse Intoleranz gegenüber Andersdenkenden."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Hexenprozesse waren primär von der katholischen Kirche getragen","text":"Tatsächlich fanden besonders viele Hexenverfolgungen in protestantischen Gebieten Mitteleuropas statt – beide Konfessionen beteiligten sich intensiv."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"Die Pest traf vor allem unhygienische arme Bevölkerungsschichten","text":"Die Übertragung erfolgte primär durch Flöhe auf Ratten unabhängig vom persönlichen Reinlichkeitsgrad; auch wohlhabende Haushalte und Klöster waren stark betroffen."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Elisabeth I. blieb aus reiner Prinzipientreue unverheiratet","text":"Ihre Ehelosigkeit war wohl auch eine bewusste politische Strategie, um die eigene Machtposition nicht durch eine Heiratsallianz zu gefährden."},
  {"category":"Frühe Neuzeit","type":"Kuriosum","title":"Peter der Große führte eine Bartsteuer zur reinen Geldbeschaffung ein","text":"Die 1698 eingeführte Steuer diente auch der symbolischen Modernisierung: Wer den traditionellen Bart behalten wollte, musste zahlen und erhielt eine Bart-Münzmarke als Nachweis."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Die Azteken hielten die Spanier für zurückkehrende Götter","text":"Diese oft erzählte Legende stammt vor allem aus spanischen Quellen nach der Eroberung und wird von vielen Historikern heute als nachträgliche Rechtfertigungserzählung angezweifelt."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Guy Fawkes handelte aus persönlichem Hass allein","text":"Der 'Gunpowder Plot' von 1605 war eine koordinierte katholische Verschwörung gegen die protestantische Verfolgungspolitik, nicht die Tat eines Einzelnen."},
  {"category":"Frühe Neuzeit","type":"Kuriosum","title":"Ludwig XIV. badete regelmäßig","text":"Der Sonnenkönig soll kaum gebadet haben und stattdessen parfümierte Puder sowie häufigen Hemdenwechsel zur Körperpflege bevorzugt haben – zeittypisch für den europäischen Hochadel."},
  {"category":"Frühe Neuzeit","type":"Mythos","title":"Kolumbus wusste, dass er einen neuen Kontinent entdeckt hatte","text":"Kolumbus glaubte bis zu seinem Tod, ostasiatische Inseln erreicht zu haben; der Kontinentcharakter Amerikas wurde erst durch spätere Entdecker wie Amerigo Vespucci erkannt."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Magellan vollendete persönlich die erste Weltumsegelung","text":"Magellan starb 1521 auf den Philippinen; nur sein Kapitän Juan Sebastián Elcano und eine Handvoll Überlebender vollendeten tatsächlich die vollständige Weltumsegelung."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Die Boston Tea Party war spontaner Protest wütender Bürger","text":"Die Aktion von 1773 war eine sorgfältig organisierte politische Demonstration der 'Sons of Liberty', bei der sich Teilnehmer bewusst als Native Americans verkleideten."},
  {"category":"Moderne","type":"Nuance","title":"Marie Curie starb direkt an ihrer Radioaktivitätsforschung","text":"Sie starb 1934 an aplastischer Anämie, vermutlich durch jahrelange Strahlenbelastung – ihre Laborhefte sind bis heute radioaktiv kontaminiert und werden in bleiausgekleideten Behältern aufbewahrt."},
  {"category":"Moderne","type":"Nuance","title":"Die Titanic wurde offiziell als 'unsinkbar' beworben","text":"Der Begriff 'unsinkbar' wurde vor allem nachträglich durch die Presse verbreitet; die White Star Line selbst hatte das Schiff nie offiziell so beworben."},
  {"category":"Moderne","type":"Nuance","title":"Einstein war Mitentwickler der Atombombe","text":"Einstein unterschrieb 1939 lediglich einen warnenden Brief an Präsident Roosevelt zur Möglichkeit einer deutschen Atombombe, war selbst aber nie am Manhattan-Projekt beteiligt."},
  {"category":"Moderne","type":"Mythos","title":"Die Spanische Grippe stammte ursprünglich aus Spanien","text":"Frühe Fälle sind vermutlich in den USA oder Frankreich dokumentiert; Spanien erhielt den Namen nur, weil es als neutrales Land im Ersten Weltkrieg offen über die Pandemie berichten durfte."},
  {"category":"Moderne","type":"Nuance","title":"Rosa Parks war einfach nur eine müde Näherin","text":"Parks war eine langjährige, geschulte Bürgerrechtsaktivistin der NAACP; ihre Weigerung war eine bewusste, vorbereitete Form des zivilen Ungehorsams."},
  {"category":"Moderne","type":"Nuance","title":"Churchill war während des gesamten Krieges unangefochten beliebt","text":"Trotz seines Kriegsruhms verlor seine konservative Partei die Wahlen 1945 deutlich – viele Briten wollten nach dem Krieg vor allem soziale Reformen statt weiterer Kriegsführerpolitik."},
  {"category":"Moderne","type":"Mythos","title":"Die Mondlandung 1969 wurde in einem Studio gefälscht","text":"Diese Verschwörungstheorie ist durch überwältigende physikalische Belege widerlegt – etwa von Astronauten hinterlassene Spiegel auf dem Mond, die bis heute per Laser vermessbar sind."},
  {"category":"Moderne","type":"Mythos","title":"Stalin war der Geburtsname des sowjetischen Diktators","text":"Er wurde als Josef Wissarionowitsch Dschugaschwili geboren; 'Stalin' ('der Stählerne') war ein später angenommener Kampfname."},
  {"category":"Moderne","type":"Nuance","title":"Der Kalte Krieg war ein völlig gewaltfreier Konflikt","text":"Auch wenn die Supermächte nie direkt gegeneinander kämpften, verursachten zahlreiche 'Stellvertreterkriege' in Korea, Vietnam und Afghanistan Millionen Tote weltweit."},
  {"category":"Moderne","type":"Kuriosum","title":"Weltweite Zeitzonen gab es schon immer","text":"Erst mit dem Ausbau der Eisenbahn im 19. Jahrhundert wurden standardisierte Zeitzonen notwendig; zuvor hatte praktisch jede Stadt ihre eigene lokale Sonnenzeit."},
  {"category":"Moderne","type":"Nuance","title":"Nelson Mandela galt während seiner gesamten Haftzeit international als Held","text":"Erst ab den 1980er-Jahren wuchs der internationale Druck gegen die Apartheid deutlich; zuvor stand er in manchen westlichen Regierungen sogar noch auf Terrorlisten."},
  {"category":"Moderne","type":"Kuriosum","title":"Die Berliner Luftbrücke galt von Anfang an als sicherer Erfolg","text":"Anfangs hielten viele Militärexperten eine dauerhafte Luftversorgung von rund zwei Millionen Berlinern für technisch kaum durchführbar – die logistische Leistung übertraf am Ende alle Erwartungen."},
  {"category":"Moderne","type":"Nuance","title":"Anne Franks Tagebuch wurde völlig unverändert veröffentlicht","text":"Ihr Vater Otto Frank redigierte nach dem Krieg das Originaltagebuch für die erste Veröffentlichung leicht, wobei einige persönliche Passagen zunächst gekürzt wurden."},
  {"category":"Moderne","type":"Kuriosum","title":"Der erste Computer-'Bug' war rein metaphorisch gemeint","text":"1947 fanden Techniker tatsächlich eine echte Motte in einem Relais eines frühen Harvard-Computers und klebten sie als Kuriosum ins Logbuch – Ursprung des bis heute gebräuchlichen Begriffs."},
  {"category":"Moderne","type":"Kuriosum","title":"Die erste E-Mail der Geschichte enthielt eine bedeutungsvolle Botschaft","text":"Die erste jemals versendete E-Mail 1971 durch Ray Tomlinson enthielt nach eigener späterer Aussage lediglich eine bedeutungslose Testzeichenfolge wie 'QWERTYUIOP'."},
  {"category":"Legenden","type":"Nuance","title":"König Artus und die Ritter der Tafelrunde sind historisch verbürgt","text":"Es gibt keine zeitgenössischen Belege für einen historischen König Artus; die Legende verschmilzt vermutlich mehrere frühmittelalterliche britannische Kriegsherren mit späterer literarischer Ausschmückung."},
  {"category":"Legenden","type":"Nuance","title":"Robin Hood war eine reale historische Einzelperson","text":"Historiker vermuten eher ein literarisches Sammelbild aus mehreren realen mittelalterlichen Gesetzlosen des 13./14. Jahrhunderts als eine einzelne verbürgte Figur."},
  {"category":"Legenden","type":"Mythos","title":"Der Heilige Gral ist ein real existierendes Artefakt","text":"Der Gral taucht erstmals in mittelalterlichen Artus-Romanen des 12. Jahrhunderts als literarisches Symbol auf, nicht als historisch belegtes Objekt."},
  {"category":"Legenden","type":"Mythos","title":"El Dorado war eine reale goldene Stadt in Südamerika","text":"Die Legende geht vermutlich auf ein reales Ritual eines Muisca-Stammesführers zurück und wurde von europäischen Eroberern zur Legende einer sagenhaften Goldstadt aufgebauscht, die nie gefunden wurde."},
  {"category":"Legenden","type":"Mythos","title":"Die Osterinsel-Statuen wurden von Außerirdischen errichtet","text":"Archäologische Untersuchungen zeigen, dass die Rapa-Nui-Bevölkerung die Statuen mit ausgeklügelten, rein menschlichen Techniken schuf und mutmaßlich mittels Seilen 'gehend' transportierte."},
  {"category":"Legenden","type":"Mythos","title":"Prester John, der legendäre christliche König im Osten, war real","text":"Ab dem 12. Jahrhundert kursierten in Europa Briefe eines angeblichen mächtigen christlichen Priesterkönigs in Asien oder Afrika – eine bis heute nie verifizierte Legende."},
  {"category":"Legenden","type":"Kuriosum","title":"Auf Oak Island wurde ein realer Piratenschatz gefunden","text":"Trotz jahrzehntelanger, kostspieliger Suchexpeditionen auf der kanadischen Insel wurde nie ein definitiver historischer Beleg für einen vergrabenen Schatz gefunden."},
  {"category":"Legenden","type":"Mythos","title":"Area 51 bewahrt Beweise für außerirdische Besuche auf","text":"Nach jahrzehntelanger Geheimhaltung bestätigten US-Behörden, dass die Anlage der geheimen Entwicklung und Erprobung von Aufklärungsflugzeugen wie der U-2 und SR-71 diente."},
  {"category":"Legenden","type":"Mythos","title":"Die Illuminaten kontrollieren bis heute im Verborgenen die Weltpolitik","text":"Der historische Illuminatenorden wurde 1776 in Bayern gegründet und bereits 1785 von der bayerischen Regierung verboten und faktisch zerschlagen."},
  {"category":"Legenden","type":"Mythos","title":"Yeti und Bigfoot sind wissenschaftlich nachgewiesene Wesen","text":"Trotz zahlreicher angeblicher Sichtungen und Fußspuren-Funde konnte bislang kein einziger wissenschaftlich verifizierter Beweis für die Existenz dieser Kryptiden erbracht werden."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Thomas Edison erfand die Glühbirne komplett allein","text":"Mehrere Erfinder, darunter Joseph Swan in England, entwickelten parallel funktionsfähige Glühlampen; Edisons Leistung lag vor allem in der praxistauglichen Weiterentwicklung und Vermarktung."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Alexander Graham Bell war der unbestrittene alleinige Erfinder des Telefons","text":"Der italienische Erfinder Antonio Meucci entwickelte bereits Jahre zuvor ein ähnliches Gerät; 2002 erkannte der US-Kongress symbolisch Meuccis frühen Beitrag an."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Marconi erfand das Radio als Erster und Einziger","text":"Der Erfinder Nikola Tesla hatte zuvor patentierte Grundlagentechnologien entwickelt; 1943 erkannte der US Supreme Court nachträglich Teslas vorrangige Patentansprüche an."},
  {"category":"Wissenschaft & Erfindungen","type":"Kuriosum","title":"Die Dampfmaschine war eine Erfindung des 18. Jahrhunderts","text":"Bereits der antike griechische Erfinder Heron von Alexandria konstruierte im 1. Jahrhundert n. Chr. ein funktionierendes, wenn auch praktisch ungenutztes Dampfturbinen-Spielzeug (Aeolipile)."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Penicillin war die erste erfolgreiche antimikrobielle Behandlung","text":"Bereits Jahrtausende zuvor nutzten Ägypter und andere Kulturen empirisch schimmelhaltige Substanzen zur Wundbehandlung, ohne den zugrunde liegenden Wirkmechanismus zu kennen."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Einstein entwickelte die Relativitätstheorie völlig isoliert","text":"Er baute wesentlich auf mathematischen Vorarbeiten von Hendrik Lorentz und Henri Poincaré auf, integrierte diese aber zu einem revolutionär neuen physikalischen Gesamtkonzept."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Darwin war der Erste, der die Evolutionsidee formulierte","text":"Der Naturforscher Alfred Russel Wallace entwickelte unabhängig zur gleichen Zeit eine sehr ähnliche Theorie der natürlichen Auslese; beide Konzepte wurden 1858 gemeinsam vorgestellt."},
  {"category":"Wissenschaft & Erfindungen","type":"Kuriosum","title":"Computerprogrammierung ist eine Erfindung des 20. Jahrhunderts","text":"Ada Lovelace verfasste bereits 1843 das erste theoretische Computerprogramm für Charles Babbages nie fertiggestellte 'Analytical Engine'."},
  {"category":"Wissenschaft & Erfindungen","type":"Kuriosum","title":"Marie Curie war der einzige Nobelpreisträger ihrer Familie","text":"Insgesamt erhielten fünf Mitglieder der Familie Curie/Joliot-Curie über zwei Generationen hinweg Nobelpreise in Physik oder Chemie."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Louis Pasteur entdeckte als Erster Mikroorganismen","text":"Der niederländische Naturforscher Antonie van Leeuwenhoek beobachtete bereits im 17. Jahrhundert erstmals Mikroorganismen; Pasteurs Pionierleistung war der Nachweis ihrer Rolle bei Krankheiten und Gärung."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Der erste Motorflug der Gebrüder Wright wurde sofort weltweit gefeiert","text":"Der Flug 1903 wurde von der zeitgenössischen Presse zunächst kaum beachtet; erst spätere, öffentlich vorgeführte Flüge etablierten den historischen Ruhm der Brüder."},
  {"category":"Wissenschaft & Erfindungen","type":"Kuriosum","title":"Die erste Computermaus war aus Kunststoff","text":"Der Prototyp von Douglas Engelbart 1964 bestand tatsächlich aus einem einfachen Holzgehäuse mit zwei Metallrädern – lange vor den heute bekannten Kunststoffmäusen."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Röntgenstrahlen wurden gezielt erforscht und entdeckt","text":"Wilhelm Conrad Röntgen entdeckte die nach ihm benannte Strahlung 1895 eher zufällig bei Experimenten mit Kathodenstrahlröhren und untersuchte das Phänomen erst danach systematisch."},
  {"category":"Wissenschaft & Erfindungen","type":"Kuriosum","title":"Der erste Kunststoff wurde für die Industrie entwickelt","text":"Das erste vollsynthetische Kunststoff Bakelit wurde 1907 ursprünglich als Ersatzstoff für das knapper werdende Naturmaterial Schellack entwickelt."},
  {"category":"Entdeckungen & Weltreiche","type":"Nuance","title":"Vasco da Gama entdeckte als Erster den Seeweg nach Indien","text":"Arabische und ostafrikanische Seefahrer nutzten bereits Jahrhunderte zuvor etablierte Handelsrouten im Indischen Ozean; da Gamas Neuerung war die erste direkte europäische Seeverbindung."},
  {"category":"Entdeckungen & Weltreiche","type":"Nuance","title":"Amerigo Vespucci entdeckte den amerikanischen Kontinent","text":"Vespucci erkannte als einer der Ersten, dass es sich um einen eigenständigen Kontinent handelte – nach ihm wurde er benannt, entdeckt hatte ihn aber zuvor bereits Kolumbus und noch früher die Wikinger."},
  {"category":"Entdeckungen & Weltreiche","type":"Nuance","title":"James Cook entdeckte ein unbewohntes Australien","text":"Aborigines besiedelten den Kontinent bereits seit mindestens 50.000 Jahren; das Konzept 'terra nullius' (niemandes Land), mit dem die britische Krone die Inbesitznahme rechtfertigte, ignorierte diese Realität bewusst."},
  {"category":"Entdeckungen & Weltreiche","type":"Kuriosum","title":"Grönland heißt zufällig 'grünes Land'","text":"Der Sage nach gab der Wikinger Erik der Rote der eisigen Insel diesen positiv klingenden Namen bewusst als Marketingtrick, um mehr Siedler zur Kolonisierung zu gewinnen."},
  {"category":"Entdeckungen & Weltreiche","type":"Mythos","title":"Das Römische Reich fiel an einem einzigen historischen Datum","text":"Der 'Untergang' 476 n. Chr. markiert nur die Absetzung des letzten weströmischen Kaisers; das oströmische Reich (Byzanz) bestand als direkte Fortsetzung noch fast 1000 Jahre weiter bis 1453."},
  {"category":"Entdeckungen & Weltreiche","type":"Nuance","title":"Das britische Weltreich war das erste, in dem 'die Sonne nie unterging'","text":"Diese Formulierung wurde bereits im 16./17. Jahrhundert für das spanische Kolonialreich Karls V. verwendet, das sich ebenfalls über alle bekannten Erdteile erstreckte."},
  {"category":"Entdeckungen & Weltreiche","type":"Nuance","title":"Die Mongolen hinterließen nur Zerstörung ohne kulturellen Beitrag","text":"Das Mongolenreich förderte unter der 'Pax Mongolica' erheblich den Ost-West-Handel entlang der Seidenstraße sowie den Austausch von Technologien, Ideen und religiöser Toleranz."},
  {"category":"Entdeckungen & Weltreiche","type":"Kuriosum","title":"Der Panama-Kanal wurde ohne größere menschliche Kosten gebaut","text":"Beim Bau, insbesondere während der gescheiterten ersten französischen Bauphase, starben schätzungsweise über 20.000 Arbeiter vor allem an Malaria und Gelbfieber."},
  {"category":"Entdeckungen & Weltreiche","type":"Mythos","title":"Die Seidenstraße war eine einzelne, feste Route","text":"Tatsächlich handelte es sich um ein weitverzweigtes Netzwerk verschiedenster Land- und Seehandelsrouten zwischen Asien, dem Nahen Osten und Europa, die sich über Jahrhunderte veränderten."},
  {"category":"Entdeckungen & Weltreiche","type":"Kuriosum","title":"Kolonialreiche wurden von der gesamten Bevölkerung des Mutterlandes einhellig unterstützt","text":"In vielen europäischen Ländern gab es zeitgenössisch durchaus kritische Stimmen und Debatten gegen koloniale Expansion, auch wenn diese oft eine gesellschaftliche Minderheitsposition blieben."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Die Azteken praktizierten nur in geringem Umfang Menschenopfer","text":"Historiker sind sich über das genaue Ausmaß uneinig; spanische Chronisten übertrieben vermutlich zur moralischen Rechtfertigung der eigenen Eroberung, dennoch belegen Funde zehntausende Opfer über die Reichsgeschichte."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Die Inka kannten kein Schriftsystem","text":"Sie nutzten ein komplexes Knotenschriftsystem aus gefärbten Schnüren (Quipu) zur Verwaltung von Zahlen und vermutlich auch narrativen Informationen, dessen vollständige Entschlüsselung bis heute nicht gelungen ist."},
  {"category":"Asien & Amerika","type":"Mythos","title":"Die Maya-Zivilisation verschwand plötzlich über Nacht","text":"Der Niedergang der klassischen Maya-Städte im 9. Jahrhundert vollzog sich über Jahrzehnte durch Dürre, Kriege und Ressourcenknappheit; zahlreiche Maya-Gemeinschaften bestehen bis heute fort."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Japan war während der Sakoku-Zeit vollständig isoliert","text":"Über den künstlichen Hafen Dejima unterhielt Japan durchgehend begrenzten, aber bedeutsamen Handel mit niederländischen und chinesischen Kaufleuten."},
  {"category":"Asien & Amerika","type":"Mythos","title":"Dschingis Khans Grab wurde bereits gefunden","text":"Der genaue Bestattungsort des mongolischen Herrschers wurde der Überlieferung nach bewusst geheim gehalten; trotz jahrzehntelanger archäologischer Suche wurde sein Grab bis heute nicht identifiziert."},
  {"category":"Asien & Amerika","type":"Mythos","title":"Die Chinesische Mauer ist ein einziges durchgehendes Bauwerk","text":"Tatsächlich besteht sie aus zahlreichen, über mehr als 2000 Jahre von verschiedenen Dynastien errichteten und oft nicht direkt verbundenen Mauerabschnitten."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Samurai folgten stets einem strengen, jahrhundertealten Ehrenkodex","text":"Der als 'Bushido' bekannte, stark idealisierte Verhaltenskodex wurde in seiner heute bekannten Form überwiegend erst in der Edo-Zeit und besonders im frühen 20. Jahrhundert systematisiert."},
  {"category":"Asien & Amerika","type":"Kuriosum","title":"Die Terrakotta-Armee zeigt lauter identische Soldatenfiguren","text":"Jede der über 8.000 Tonfiguren weist individuell unterschiedliche Gesichtszüge, Frisuren und Ausrüstungsdetails auf – vermutlich nach realen Vorbildern der kaiserlichen Armee gestaltet."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Konfuzius war zu Lebzeiten ein hochgeehrter, einflussreicher Berater","text":"Zu Lebzeiten hatte er nur mäßigen politischen Erfolg und wechselnde Anstellungsverhältnisse; sein enormer Einfluss entfaltete sich vor allem postum über Jahrhunderte durch seine Schüler."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Indien war vor der britischen Kolonialherrschaft stets politisch geeint","text":"Der Subkontinent bestand über weite Teile seiner Geschichte aus zahlreichen unabhängigen Königreichen; größere reichsweite Einigungen wie Maurya oder Mogulreich waren eher die Ausnahme."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Gandhi war von Anfang an ein überzeugter Verfechter gewaltfreien Widerstands","text":"Seine Philosophie des gewaltfreien Widerstands (Satyagraha) entwickelte sich erst schrittweise während seiner Zeit als Anwalt in Südafrika, wo er zunächst für eine loyale Einbindung ins britische Empire eintrat."},
  {"category":"Asien & Amerika","type":"Kuriosum","title":"Die Kamikaze-Taifune gegen die Mongolen waren einmaliger Zufall","text":"Bemerkenswerterweise zerstörten gleich zwei separate schwere Taifune 1274 und erneut 1281 jeweils die mongolischen Invasionsflotten kurz nach deren Ankunft vor Japan."},
  {"category":"Asien & Amerika","type":"Mythos","title":"Die Opiumkriege wurden von China begonnen","text":"Die Kriege 1839–1860 gingen von militärischen Interventionen Großbritanniens und später Frankreichs aus, nachdem chinesische Behörden versucht hatten, den illegalen britischen Opiumhandel zu unterbinden."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Mansa Musa war nur ein regionaler Fürst von geringer Bedeutung","text":"Zeitgenössische arabische und europäische Quellen beschreiben ihn als einen der reichsten Menschen der damals bekannten Welt; sein Goldreichtum soll 1324 kurzzeitig den Goldpreis in Kairo destabilisiert haben."},
  {"category":"Asien & Amerika","type":"Kuriosum","title":"Äthiopien wurde nie von einer europäischen Kolonialmacht erobert","text":"Äthiopien besiegte 1896 in der Schlacht von Adua eine italienische Invasionsarmee entscheidend und blieb damit neben Liberia die einzige afrikanische Nation, die ihre Unabhängigkeit dauerhaft bewahrte."},
  {"category":"Legenden","type":"Mythos","title":"Wilhelm Tell war eine historisch verbürgte reale Person","text":"Es gibt keine zeitgenössischen Quellen für Wilhelm Tell aus dem angeblichen 14. Jahrhundert; die Geschichte des Apfelschusses erscheint erstmals rund 200 Jahre später in Schweizer Chroniken."},
  {"category":"Legenden","type":"Kuriosum","title":"Die Curse of the Hope-Diamant brachte allen Besitzern Unglück","text":"Der berühmte blaue Diamant wird mit zahlreichen Unglücksgeschichten seiner früheren Besitzer in Verbindung gebracht – die meisten dieser Anekdoten lassen sich historisch nicht eindeutig belegen."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Kartoffeln waren in Europa von Anfang an ein beliebtes Grundnahrungsmittel","text":"Nach ihrer Einführung aus Amerika im 16. Jahrhundert wurden Kartoffeln in weiten Teilen Europas zunächst misstrauisch beäugt und teils sogar als giftig oder unrein abgelehnt."},
  {"category":"Entdeckungen & Weltreiche","type":"Kuriosum","title":"Die Wikinger nutzten nur die berühmten Runensteine zur schriftlichen Kommunikation","text":"Neben monumentalen Runensteinen nutzten Wikinger auch Alltagsritzungen auf Holz und Knochen für private Nachrichten, von denen durch Fundorte wie Bergen zahlreiche Beispiele erhalten sind."},
  {"category":"Moderne","type":"Kuriosum","title":"Die Internationale Raumstation ist das teuerste je gebaute Bauwerk","text":"Mit geschätzten Baukosten von über 150 Milliarden US-Dollar gilt die ISS gemeinhin als teuerstes von Menschen je errichtetes einzelnes Bauwerk der Geschichte."},
  {"category":"Antike","type":"Kuriosum","title":"Das antike Rom hatte bereits ein ausgeklügeltes Fast-Food-System","text":"Sogenannte 'Thermopolien' – Straßenimbisse mit eingelassenen Vorratsgefäßen – waren in römischen Städten wie Pompeji weitverbreitet, da viele einfache Wohnungen über keine eigene Küche verfügten."},
  {"category":"Frühe Neuzeit","type":"Kuriosum","title":"Schachspiel und Politik waren in der Frühen Neuzeit strikt getrennte Welten","text":"Am Hof Ludwigs XIV. und anderer Monarchen dienten öffentliche Schachpartien häufig als subtile diplomatische Machtdemonstrationen zwischen rivalisierenden Gesandtschaften."},
  {"category":"Moderne","type":"Nuance","title":"Der Eiffelturm war von Anfang an bei den Parisern beliebt","text":"Beim Bau 1889 protestierten zahlreiche prominente Pariser Künstler und Intellektuelle in einem offenen Brief gegen den Turm als angebliche 'nutzlose und monströse' Verschandelung der Stadt."},
  {"category":"Antike","type":"Mythos","title":"Die Bibliothek von Alexandria wurde an einem Tag verbrannt","text":"Es gab kein einzelnes Feuer, das die Bibliothek vernichtete. Wahrscheinlicher ist ein Verfall über Jahrhunderte: Brände, Bürgerkriege, ausbleibende Finanzierung und der Wegzug von Gelehrten. Bibliotheken sterben meist an Vernachlässigung, nicht an Flammen."},
  {"category":"Antike","type":"Nuance","title":"Griechische Statuen waren strahlend weiß","text":"Sie waren bunt bemalt. Farbreste lassen sich mit ultraviolettem Licht und Spektroskopie nachweisen. Das Ideal des weißen Marmors entstand erst, als die Farbe längst verwittert war – und prägte dann rückwirkend das Bild der Antike."},
  {"category":"Antike","type":"Kuriosum","title":"Römischer Beton wird im Meerwasser fester","text":"Römischer Beton mit Vulkanasche bildet im Kontakt mit Meerwasser Minerale, die Risse schließen. Manche Hafenanlagen stehen nach zweitausend Jahren noch – moderner Portlandbeton hält im Meer selten hundert."},
  {"category":"Antike","type":"Nuance","title":"Gladiatorenkämpfe endeten fast immer tödlich","text":"Ausgebildete Gladiatoren waren teuer. Die Ausbildung dauerte Jahre, und ein toter Kämpfer bedeutete einen Totalverlust. Viele Kämpfe endeten daher vor dem Tod – was die Grausamkeit der Institution nicht mildert."},
  {"category":"Mittelalter","type":"Mythos","title":"Im Mittelalter hielt man die Erde für eine Scheibe","text":"Die Kugelgestalt war seit der Antike bekannt und im mittelalterlichen Europa gelehrte Überzeugung. Der Reichsapfel als Herrschaftszeichen bildet eine Kugel ab. Die Scheiben-Erzählung entstand größtenteils im 19. Jahrhundert."},
  {"category":"Mittelalter","type":"Nuance","title":"Das Mittelalter war finster und stillstehend","text":"In diesen Jahrhunderten entstanden Universitäten, Buchhaltung, Brille, mechanische Uhr, Windmühle und Hochofen. Der Begriff 'finsteres Mittelalter' stammt von Humanisten, die sich selbst als Wiedererwecker der Antike darstellen wollten."},
  {"category":"Mittelalter","type":"Mythos","title":"Der Keuschheitsgürtel stammt aus dem Mittelalter","text":"Die erhaltenen Exemplare in Museen stammen fast durchweg aus dem 18. und 19. Jahrhundert. Mehrere große Museen haben ihre Stücke inzwischen aus der Ausstellung genommen oder neu datiert."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Kolumbus wollte beweisen, dass die Erde rund ist","text":"Das war unstrittig. Der Streit ging um den Erdumfang: Die Gelehrten am spanischen Hof rechneten richtig und hielten die Strecke nach Asien für zu weit. Kolumbus rechnete falsch – und stieß auf einen Kontinent, mit dem niemand gerechnet hatte."},
  {"category":"Frühe Neuzeit","type":"Nuance","title":"Hexenverfolgung war ein Phänomen des Mittelalters","text":"Ihr Höhepunkt lag zwischen 1560 und 1630 – mitten in der Frühen Neuzeit, zeitgleich mit der wissenschaftlichen Revolution. Aufklärung und Verfolgung schließen sich historisch weniger aus, als man annehmen möchte."},
  {"category":"Frühe Neuzeit","type":"Kuriosum","title":"Die Tulpenmanie ruinierte die Niederlande","text":"Die Preise für Tulpenzwiebeln stiegen 1636/37 tatsächlich stark und brachen ein. Der wirtschaftliche Schaden blieb jedoch begrenzt und betraf vor allem einen kleinen Kreis von Händlern – die Erzählung vom nationalen Ruin stammt aus einem populären Buch des 19. Jahrhunderts."},
  {"category":"Wissenschaft & Erfindungen","type":"Mythos","title":"Ein Apfel fiel Newton auf den Kopf","text":"Newton selbst erzählte von einem fallenden Apfel als Anlass zum Nachdenken über die Schwerkraft – nicht davon, getroffen worden zu sein. Die Geschichte stammt aus Gesprächen seiner letzten Lebensjahre."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Edison erfand die Glühbirne","text":"Vor ihm arbeiteten mehrere Erfinder an Glühlampen. Edisons Leistung lag in einer brauchbaren Kohlefaser, im systematischen Testen tausender Materialien und vor allem im Aufbau eines ganzen Stromversorgungssystems – ohne das die Lampe nutzlos gewesen wäre."},
  {"category":"Wissenschaft & Erfindungen","type":"Kuriosum","title":"Rosalind Franklin und die Doppelhelix","text":"Die entscheidende Röntgenaufnahme 'Photo 51' stammte aus Franklins Labor und wurde Watson ohne ihr Wissen gezeigt. Der Nobelpreis 1962 ging an Watson, Crick und Wilkins; Franklin war 1958 gestorben und wurde nicht posthum berücksichtigt."},
  {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Semmelweis wurde für das Händewaschen gefeiert","text":"Ignaz Semmelweis senkte die Sterblichkeit bei Wöchnerinnen drastisch, indem er Händedesinfektion anordnete. Seine Kollegen lehnten ihn ab; er starb 1865 in einer Anstalt. Die Keimtheorie, die ihn bestätigt hätte, setzte sich erst danach durch."},
  {"category":"Moderne","type":"Nuance","title":"Die Titanic galt als unsinkbar","text":"Die Werft warb nie mit diesem Wort. Die Formulierung stammt aus Fachzeitschriften und wurde vor allem nach dem Untergang zur festen Wendung – ein Fall, in dem die Nachwelt einen Superlativ erfindet, um die Ironie zu vergrößern."},
  {"category":"Moderne","type":"Mythos","title":"Einstein war schlecht in Mathematik","text":"Er war ein sehr guter Schüler in Mathematik und Physik. Der Irrtum entstand vermutlich durch ein Schweizer Notensystem, in dem die 6 die beste Note ist – gelesen mit deutschem Maßstab wird aus einer Bestnote ein Ungenügend."},
  {"category":"Moderne","type":"Nuance","title":"Der Erste Weltkrieg begann wegen eines Attentats","text":"Das Attentat von Sarajevo war der Auslöser, nicht die Ursache. Ohne Bündnissysteme, Aufrüstung, imperiale Rivalität und die Erwartung eines kurzen Krieges wäre daraus kaum ein Weltkrieg geworden."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Die Chinesische Mauer ist aus dem All zu sehen","text":"Mit bloßem Auge aus der Erdumlaufbahn ist sie praktisch nicht zu erkennen – sie ist schmal und farblich kaum von der Umgebung abgesetzt. Mehrere Raumfahrer haben das ausdrücklich bestätigt."},
  {"category":"Asien & Amerika","type":"Nuance","title":"Die Azteken hielten Cortés für einen Gott","text":"Die Erzählung stammt weitgehend aus spanischen Quellen, die Jahrzehnte später entstanden, und aus indigenen Berichten unter spanischer Herrschaft. Ob Moctezuma so dachte, ist in der Forschung höchst umstritten."},
  {"category":"Asien & Amerika","type":"Kuriosum","title":"Das Inkareich kannte keine Schrift – aber eine Buchhaltung","text":"Mit Quipus, geknoteten Schnüren, verwalteten die Inka Steuern, Vorräte und Bevölkerungszahlen über ein Reich von tausenden Kilometern. Wie viel darüber hinaus in ihnen gespeichert war, ist bis heute nicht vollständig entschlüsselt."},
  {"category":"Legenden","type":"Mythos","title":"Wikinger trugen Hörnerhelme","text":"Kein einziger archäologischer Fund belegt sie. Das Bild stammt aus der Ausstattung von Wagner-Aufführungen im 19. Jahrhundert und aus der Romantik."},
  {"category":"Legenden","type":"Nuance","title":"Marie-Antoinette sagte 'Sollen sie doch Kuchen essen'","text":"Der Satz taucht bei Rousseau auf, als sie ein Kind war und noch nicht in Frankreich lebte. Zugeschrieben wurde er ihr erst später – ein Beispiel dafür, wie politische Propaganda Zitate wandern lässt."},
  {"category":"Legenden","type":"Mythos","title":"Napoleon war auffallend klein","text":"Drei französische Quellen – sein Kammerdiener, General Gourgaud und sein Leibarzt – nennen gut 5 Fuß 2 Zoll. Der französische Zoll maß damals 2,7 cm, der englische 2,54 cm. Umgerechnet ergibt das etwa 1,67 bis 1,70 Meter und damit für einen Franzosen seiner Zeit eher leicht über dem Durchschnitt. Der Irrtum entstand durch die Verwechslung der Maßsysteme, verstärkt durch britische Karikaturen."},
  {"category":"Legenden","type":"Kuriosum","title":"Der kürzeste Krieg der Geschichte","text":"Der britisch-sansibarische Krieg begann am 27. August 1896 um 9 Uhr und war vor 9:45 Uhr entschieden – je nach Zählung zwischen 38 und 45 Minuten. Auf sansibarischer Seite gab es rund 500 Opfer; die Kürze des Krieges sagt nichts über seine Härte."}
];
const VERTIEFUNGEN = [
  {
    "id": "neolithische-revolution",
    "titel": "Die Neolithische Revolution",
    "epoche": "steinzeit",
    "jahr": -9500,
    "zeitraum": "ab ca. 9500 v. Chr.",
    "region": "Fruchtbarer Halbmond",
    "leitsatz": "Der folgenreichste Umbruch der Menschheitsgeschichte war kein Krieg und keine Erfindung, sondern eine veränderte Art, an Nahrung zu kommen.",
    "vorgeschichte": "Über Hunderttausende von Jahren lebten Menschen als Jäger und Sammler in kleinen, beweglichen Gruppen. Am Ende der letzten Eiszeit wurde das Klima wärmer und beständiger. Im Fruchtbaren Halbmond sammelten die Natufier bereits intensiv Wildpflanzen und besaßen steinerne Sicheln – sie ernteten, bevor sie säten.",
    "verlauf": "Etwa ab 9500 v. Chr. gingen Menschen im Nahen Osten dazu über, Wildpflanzen gezielt anzubauen und Wildtiere zu halten. Um 12.000 bis 11.000 Jahre vor heute lagen domestizierte Pflanzenformen vor, um 10.000 Jahre vor heute domestizierte Tiere. Im östlichen Fruchtbaren Halbmond begannen Menschen, Ziegen und Schafe zu halten – Gazellen dagegen nicht, obwohl sie zuvor die Hauptbeute gewesen waren. Bis 7000 v. Chr. war eine dörfliche, bäuerliche Lebensweise im Zweistromland und in der Levante fest etabliert.",
    "folgen": "Sesshaftigkeit erlaubte Vorratshaltung, und Vorräte erlaubten Ungleichheit: Wer speichern kann, kann besitzen, verteilen und beherrschen. Feste Siedlungen, größere Bevölkerungen und komplexere Sozialordnungen folgten. Der Ackerbau entstand später unabhängig auch in China, Mesoamerika, den Anden und Neuguinea – es war kein einmaliger Geistesblitz, sondern eine mehrfach gefundene Antwort.",
    "strittig": "Lange galt: Ackerbau ernährte mehr Menschen, also wuchs die Bevölkerung. Die Forschung des späten 20. Jahrhunderts kehrte das teilweise um – die Bevölkerung stieg deutlich erst, nachdem die Nahrungsproduktion etabliert war. Ob Ackerbau das Leben zunächst überhaupt verbesserte, ist umstritten: Skelettfunde deuten auf einseitigere Ernährung, mehr Krankheiten und härtere Arbeit als bei Jägern und Sammlern.",
    "zahlen": [
      {
        "wert": "ca. 9500 v. Chr.",
        "was": "Beginn der Domestikation im Nahen Osten"
      },
      {
        "wert": "7000 v. Chr.",
        "was": "Bäuerliche Dörfer in Mesopotamien und der Levante fest etabliert"
      },
      {
        "wert": "mind. 5",
        "was": "unabhängige Entstehungsherde des Ackerbaus weltweit"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Origins of agriculture; Neolithic",
      "Scientific Reports (Nature): Natufian Epipalaeolithic and Pre-Pottery Neolithic"
    ]
  },
  {
    "id": "erfindung-schrift",
    "titel": "Die Erfindung der Schrift",
    "epoche": "fruehe-hochkulturen",
    "jahr": -3300,
    "zeitraum": "ca. 3300–3200 v. Chr.",
    "region": "Uruk, Südmesopotamien",
    "leitsatz": "Die Schrift wurde nicht erfunden, um Gedichte festzuhalten, sondern um Gerste zu zählen.",
    "vorgeschichte": "Im vierten Jahrtausend v. Chr. wuchsen in Südmesopotamien Städte mit gemischter Bevölkerung rasch an. Zur Verwaltung dienten zunächst Tonmarken, mit denen Warenmengen abgebildet wurden. Je größer die Verwaltung, desto weniger reichte dieses System.",
    "verlauf": "Um 3300 v. Chr. entstanden die ersten Tontafeln, die wirtschaftliche Angaben mit Bildzeichen und Zahlen festhielten. Ton war überall verfügbar, billig und haltbar. Aus den Bildzeichen wurden keilförmige Eindrücke, erzeugt mit einem Griffel aus Schilfrohr – daher der moderne Name Keilschrift, nach dem lateinischen cuneus für Keil. Erfunden wurde sie mit großer Wahrscheinlichkeit von sumerischsprachigen Menschen im Stadtgebiet von Uruk, und zwar für Verwaltungszwecke.",
    "folgen": "Erst mit der Schrift wird Wissen über die Lebensspanne eines Menschen hinaus speicherbar. Verwaltung, Recht, Vertrag, Kalender, Literatur und schließlich Geschichtsschreibung selbst setzen sie voraus. Die Grenze zwischen Vorgeschichte und Geschichte ist nichts anderes als die Grenze zwischen ungeschriebener und geschriebener Überlieferung.",
    "strittig": "Die frühesten Tafeln lassen sich nur eingeschränkt lesen, weil viele Zeichen noch nicht eindeutig einer Sprache zuzuordnen sind. Ob die Uruk-Archive den tatsächlichen Anfang zeigen oder bereits eine spätere Phase, in der die Schrift sich durchsetzte, ist offen.",
    "zahlen": [
      {
        "wert": "ca. 3300 v. Chr.",
        "was": "früheste bekannte beschriftete Tontafeln"
      },
      {
        "wert": "über 250",
        "was": "europäische Städte mit Druckerpresse 1500 – zum Vergleich, wie lange Schriftverbreitung dauerte"
      }
    ],
    "quellen": [
      "The Metropolitan Museum of Art: The Origins of Writing",
      "Encyclopaedia Britannica: Cuneiform"
    ]
  },
  {
    "id": "bronzezeitkollaps",
    "titel": "Der Zusammenbruch der Bronzezeit",
    "epoche": "fruehe-hochkulturen",
    "jahr": -1200,
    "zeitraum": "um 1200 v. Chr.",
    "region": "Östliches Mittelmeer und Vorderasien",
    "leitsatz": "Eine vernetzte Welt aus Königreichen brach binnen weniger Jahrzehnte zusammen – und die bekannteste Erklärung ist vermutlich die schwächste.",
    "vorgeschichte": "Um 1300 v. Chr. war das östliche Mittelmeer ein dicht verflochtenes System: mykenische Paläste, das Hethiterreich, Ägypten, die syrisch-levantinischen Städte. Bronze verlangte Zinn und Kupfer aus weit entfernten Quellen – der Wohlstand hing an funktionierendem Fernhandel.",
    "verlauf": "Innerhalb weniger Jahrzehnte um 1200 v. Chr. endeten die mykenischen Paläste, fiel das Hethiterreich, wurden Handelsstädte zerstört. Ägyptische Reliefs und Texte machen dafür die 'Seevölker' verantwortlich. Baumringdaten und Isotopenmessungen zeigen jedoch eine mehrjährige schwere Dürre um 1198–1196 v. Chr., zeitgleich mit dem hethitischen Zusammenbruch, eingebettet in eine rund 300 Jahre andauernde Verschiebung zu trockenerem, kühlerem Klima.",
    "folgen": "Schrift ging in Teilen des Raums verloren – die mykenische Linear-B-Schrift verschwand. Es folgten Jahrhunderte, die als 'dunkle' gelten, weil kaum Quellen überliefert sind. Aus den Trümmern gingen später die griechischen Stadtstaaten, das phönizische Alphabet und Israel hervor.",
    "strittig": "Die Rolle der Seevölker ist umstritten. Die neuere Forschung liest den Zusammenbruch als Systemversagen: Dürre und Missernten führten zu Hunger, Hunger zu Wanderung und Krieg, Krieg zum Abriss der Handelsketten – und jedes Glied verstärkte das nächste. Wer eine einzelne Ursache sucht, wird der Quellenlage nicht gerecht.",
    "zahlen": [
      {
        "wert": "1198–1196 v. Chr.",
        "was": "belegte mehrjährige Dürre, zeitgleich mit dem Ende des Hethiterreichs"
      },
      {
        "wert": "ca. 300 Jahre",
        "was": "Dauer der klimatischen Verschiebung zu trockeneren Bedingungen"
      }
    ],
    "quellen": [
      "Nature: Severe multi-year drought coincident with Hittite collapse around 1198–1196 BC",
      "Encyclopaedia Britannica: Sea People",
      "Antiquity (Cambridge): Getting closer to the Late Bronze Age collapse"
    ]
  },
  {
    "id": "alexanderzug",
    "titel": "Alexanderzug und Hellenismus",
    "epoche": "antike",
    "jahr": -334,
    "zeitraum": "334–323 v. Chr.",
    "region": "Von Makedonien bis zum Indus",
    "leitsatz": "Ein Feldzug von elf Jahren verschob die Grenze griechischer Kultur um mehrere tausend Kilometer nach Osten – und die Folgen überdauerten den Eroberer um Jahrhunderte.",
    "vorgeschichte": "Das Achämenidenreich war das größte Reich seiner Zeit und hatte die griechischen Stadtstaaten zweimal angegriffen. Alexanders Vater Philipp II. hatte Makedonien zur Militärmacht gemacht und Griechenland unterworfen.",
    "verlauf": "334 v. Chr. setzte Alexander nach Asien über. Am Granikos und bei Issos schlug er die Truppen des Großkönigs Dareios III. 332 nahm er Syrien, Phönizien, Tyros und Ägypten, wo er Alexandria gründete. Bis 330 hatte er das gesamte Achämenidenreich erobert, und er zog weiter bis an den Indus. Am 13. Juni 323 starb er mit 33 Jahren in Babylon.",
    "folgen": "Aus dem Zerfall seines Reiches gingen die hellenistischen Königreiche hervor – das makedonische, das seleukidische, das ptolemäische. In ihnen verband sich Griechisches mit Persischem, Semitischem und Ägyptischem. Griechisch wurde für Jahrhunderte die Verkehrssprache des östlichen Mittelmeers; das Neue Testament ist auf Griechisch geschrieben. Bis nach Baktrien und Indien reichten hellenistische Einflüsse.",
    "strittig": "Ob Alexander eine 'Verschmelzung der Völker' anstrebte oder pragmatisch Herrschaft sicherte, ist eine alte Streitfrage. Er förderte Mischehen und griechische Kultur, behielt aber große Teile der achämenidischen Verwaltung bei und übernahm östliche Hofformen – was bei seinen makedonischen Offizieren auf Widerstand stieß.",
    "zahlen": [
      {
        "wert": "334–330 v. Chr.",
        "was": "Eroberung des gesamten Achämenidenreichs"
      },
      {
        "wert": "33",
        "was": "Lebensjahre Alexanders"
      },
      {
        "wert": "13. Juni 323 v. Chr.",
        "was": "Tod in Babylon"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Alexander the Great; Hellenistic Age"
    ]
  },
  {
    "id": "seidenstrasse",
    "titel": "Wie die Seidenstraße entstand",
    "epoche": "antike",
    "jahr": -138,
    "zeitraum": "ab 138 v. Chr.",
    "region": "China und Zentralasien",
    "leitsatz": "Die berühmteste Handelsroute der Geschichte begann als gescheiterte diplomatische Mission.",
    "vorgeschichte": "Die Han-Dynastie stand unter Druck der Xiongnu, eines nomadischen Reitervolks im Norden. Kaiser Wudi suchte Verbündete gegen sie und richtete den Blick nach Westen.",
    "verlauf": "138 v. Chr. schickte Wudi den Gesandten Zhang Qian zu den Yuezhi in Zentralasien. Zhang Qian geriet in Gefangenschaft der Xiongnu und blieb dort zehn Jahre. Er erreichte sein Ziel dennoch und kehrte nach dreizehn Jahren zurück – ohne das Bündnis, aber mit umfassenden Kenntnissen über Parthien, Indien und die Staaten Zentralasiens. Sein Bericht brachte China erstmals in Kontakt mit den hellenistischen Außenposten, die Alexander hinterlassen hatte. Ab etwa 112 v. Chr. konnte China Expeditionen nach Zentralasien entsenden; Reisende waren bis zur Wüste Taklamakan geschützt. In dieser Zeit entstanden die Routen, die später gemeinsam Seidenstraße genannt wurden.",
    "folgen": "Nach China kamen bessere Pferde, Weintrauben und Luzerne; nach Westen ging Seide. Wichtiger als die Waren war der Austausch von Techniken, Religionen und Krankheitserregern. Der Buddhismus erreichte China über diese Wege.",
    "strittig": "Der Begriff 'Seidenstraße' stammt erst aus dem 19. Jahrhundert und suggeriert eine einzelne Route – tatsächlich handelte es sich um ein wechselndes Netz von Wegen, auf denen Waren meist in vielen kurzen Etappen weitergereicht wurden, nicht in einer Karawane von China nach Rom.",
    "zahlen": [
      {
        "wert": "13 Jahre",
        "was": "Dauer von Zhang Qians Mission, davon 10 in Gefangenschaft"
      },
      {
        "wert": "ab 112 v. Chr.",
        "was": "regelmäßige Han-Expeditionen nach Zentralasien"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Zhang Qian; Silk Road; History of China – The Han dynasty"
    ]
  },
  {
    "id": "roemische-republik",
    "titel": "Das Ende der Römischen Republik",
    "epoche": "antike",
    "jahr": -27,
    "zeitraum": "49–27 v. Chr.",
    "region": "Rom und Mittelmeerraum",
    "leitsatz": "Die Republik endete nicht mit ihrer Abschaffung, sondern damit, dass jemand sie dem Namen nach bewahrte.",
    "vorgeschichte": "Im 1. Jahrhundert v. Chr. war Rom Herr des Mittelmeers, wurde aber von einer Adelsschicht regiert, deren Misswirtschaft offen zutage lag. Die eigentliche Frage war, ob diese Herrschaft fortbestehen oder durch eine Alleinherrschaft ersetzt würde – beide Wege führten durch Bürgerkrieg.",
    "verlauf": "Caesar errichtete eine Diktatur und begann politische und soziale Reformen; 44 v. Chr. wurde er ermordet. Octavian verbündete sich mit Marcus Antonius und Lepidus zum zweiten Triumvirat, das rasch zerfiel. 31 v. Chr. besiegte Octavian Antonius und Kleopatra bei Actium, 30 v. Chr. war der Krieg entschieden. 27 v. Chr. wurde Octavian zum princeps, zum 'ersten Bürger'.",
    "folgen": "Der Prinzipat verband monarchische Macht mit republikanischen Formen. Octavian – nun Augustus – wusste, dass die politische Klasse ihn nur als Beender der Bürgerkriege akzeptieren würde, wenn er seine Alleinherrschaft hinter Rückgriffen auf die Tradition verbarg. Senat, Ämter und Wahlen blieben bestehen; die Entscheidungen fielen anderswo.",
    "strittig": "Ob 27 v. Chr. ein sinnvolles Enddatum ist, wird bestritten. Manche setzen das Ende der Republik schon bei Caesars Diktatur oder gar bei den Gracchen an; andere betonen, dass republikanische Institutionen noch lange real wirkten.",
    "zahlen": [
      {
        "wert": "44 v. Chr.",
        "was": "Ermordung Caesars"
      },
      {
        "wert": "31 v. Chr.",
        "was": "Seeschlacht bei Actium"
      },
      {
        "wert": "27 v. Chr.",
        "was": "Octavian wird princeps – traditionelles Ende der Republik"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Roman Republic; Augustus; Roman Empire"
    ]
  },
  {
    "id": "ende-westrom",
    "titel": "476 – das Ende, das keines war",
    "epoche": "antike",
    "jahr": 476,
    "zeitraum": "5. Jahrhundert",
    "region": "Westliches Mittelmeer",
    "leitsatz": "Das berühmteste Datum der Weltgeschichte markiert eine Absetzung, die Zeitgenossen kaum bemerkten.",
    "vorgeschichte": "Im 5. Jahrhundert stand das Weströmische Reich unter dem Druck von Wanderungsbewegungen und Einfällen. Hinzu kamen innere Ursachen: Korruption, Machtmissbrauch, schlecht ausgerüstete und undisziplinierte Truppen und die Abwendung der städtischen Eliten vom öffentlichen Dienst.",
    "verlauf": "Der römische Heermeister Orestes stürzte Kaiser Julius Nepos und setzte seinen Sohn Romulus Augustulus ein. Als Orestes sein Versprechen brach, den Anführern seiner Truppen Land in Italien zu geben, erhob sich Odoaker gegen ihn und setzte 476 Romulus Augustulus ab. Odoaker beanspruchte keinen Kaisertitel, sondern regierte Italien und erkannte formal die Oberhoheit des oströmischen Kaisers Zenon an.",
    "folgen": "Im Osten bestand das Römische Reich noch fast tausend Jahre weiter. Im Westen bestanden römisches Recht, Latein, Verwaltungsformen und die Kirche fort – die Nachfolgereiche verstanden sich vielfach als Fortsetzer, nicht als Zerstörer.",
    "strittig": "Ob 476 überhaupt ein Bruch war, ist die zentrale Debatte. Ob Odoaker eher Befehlshaber eines römischen Heeres oder Anführer eines germanischen Verbands war, ließ sich schon damals nicht mehr klar sagen. Die Forschung streitet, ob man von 'Untergang' oder von 'Transformation' sprechen sollte – das Datum stammt aus späterer Geschichtsschreibung, nicht aus dem Bewusstsein der Zeitgenossen.",
    "zahlen": [
      {
        "wert": "476",
        "was": "Absetzung des Romulus Augustulus"
      },
      {
        "wert": "1453",
        "was": "Ende des oströmischen Reiches – fast tausend Jahre später"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Odoacer; Why did the Roman Empire fall?; Barbarian invasions"
    ]
  },
  {
    "id": "islamische-expansion",
    "titel": "Die frühislamische Expansion",
    "epoche": "mittelalter",
    "jahr": 632,
    "zeitraum": "632–750",
    "region": "Von Spanien bis Zentralasien",
    "leitsatz": "In gut hundert Jahren entstand ein Reich, das von der Iberischen Halbinsel bis an die Grenzen Chinas reichte.",
    "vorgeschichte": "Das Byzantinische und das Sasanidische Reich hatten sich in jahrzehntelangen Kriegen gegenseitig erschöpft. Auf der Arabischen Halbinsel entstand mit dem Islam eine neue politische und religiöse Ordnung.",
    "verlauf": "Nach dem Tod Mohammeds 632 begann eine rasche Ausdehnung. Zwischen 634 und 870 wandelte sich der Islam vom Kennzeichen einer kleinen arabischen Herrschaftsschicht zur bestimmenden Religion eines Reiches, das vom westlichen Mittelmeer bis nach Zentralasien reichte. Die Umayyaden (661–750) mit Zentrum in Damaskus setzten die Ausdehnung fort und begründeten eine dynastische Herrschaft, die innerislamisch auf Widerstand stieß. 732 schlug Karl Martell bei Tours ein umayyadisches Heer.",
    "folgen": "Über Jahrhunderte wurde die islamische Welt zum Vermittler und Weiterentwickler antiken Wissens – Mathematik, Astronomie, Medizin und Philosophie erreichten das lateinische Europa vielfach über arabische Übersetzungen und Kommentare. Al-Andalus blieb bis 1492 muslimisch geprägt.",
    "strittig": "Die Bedeutung der Schlacht von Tours 732 wird in der älteren Literatur stark überhöht. Sie gilt als Wendepunkt, weil sie die umayyadische Ausdehnung nach Norden stoppte – der Rückzug hatte aber auch Ursachen weit im Süden: Ein großer Amazigh-Aufstand in Nordafrika hatte massive Rückwirkungen auf Al-Andalus.",
    "zahlen": [
      {
        "wert": "632",
        "was": "Tod Mohammeds, Beginn der Expansion"
      },
      {
        "wert": "661–750",
        "was": "Umayyaden-Kalifat mit Zentrum Damaskus"
      },
      {
        "wert": "732",
        "was": "Schlacht von Tours"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Islamic world – Conversion and crystallization 634–870; Caliphate; Battle of Tours; Spain – Muslim Spain"
    ]
  },
  {
    "id": "mongolisches-reich",
    "titel": "Das Mongolische Weltreich",
    "epoche": "mittelalter",
    "jahr": 1206,
    "zeitraum": "1206–14. Jahrhundert",
    "region": "Von Ostasien bis Osteuropa",
    "leitsatz": "Das größte zusammenhängende Landreich der Geschichte machte Eurasien für ein Jahrhundert durchlässig – für Waren, Wissen und für die Pest.",
    "vorgeschichte": "Die mongolischen Stämme waren zerstritten. Temüdschin einte sie und wurde 1206 als Dschingis Khan zum Herrscher ausgerufen.",
    "verlauf": "Von 1206 an dehnte sich das Reich in alle Richtungen aus. Auf seinem Höhepunkt umfasste es etwa 9 Millionen Quadratmeilen – vom Pazifik bis an die Donau und den Persischen Golf. Chinesische, islamische, iranische, zentralasiatische und nomadische Kulturen standen erstmals unter einer Herrschaft. Dschingis Khan starb 1227.",
    "folgen": "Unter der Pax Mongolica wurden Handelswege geschützt, Zölle vereinheitlicht und Passierscheine (paiza) ausgegeben. Papierherstellung, Druck, Schwarzpulver und Kompass wanderten nach Westen; islamische Astronomie, Medizin, Mathematik und Kartografie nach Osten. Dieselben Wege trugen im 14. Jahrhundert die Pest quer über Eurasien – und untergruben damit die mongolische Herrschaft selbst.",
    "strittig": "Die Bilanz ist zwiespältig und wird es bleiben: Die Eroberungen waren außerordentlich gewaltsam, ganze Städte wurden ausgelöscht. Zugleich ermöglichte dasselbe Reich einen Austausch von bis dahin unerreichter Sicherheit und Reichweite. Beide Befunde stehen nebeneinander, ohne sich aufzuheben.",
    "zahlen": [
      {
        "wert": "1206",
        "was": "Dschingis Khan einigt die mongolischen Stämme"
      },
      {
        "wert": "ca. 9 Mio. Quadratmeilen",
        "was": "größte Ausdehnung – größtes zusammenhängendes Landreich der Geschichte"
      },
      {
        "wert": "1227",
        "was": "Tod Dschingis Khans"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Mongol empire; Genghis Khan; Pax Mongolica",
      "The Metropolitan Museum of Art: The Legacy of Genghis Khan"
    ]
  },
  {
    "id": "schwarzer-tod",
    "titel": "Der Schwarze Tod",
    "epoche": "mittelalter",
    "jahr": 1347,
    "zeitraum": "1347–1351",
    "region": "Europa, Nordafrika, Vorderasien",
    "leitsatz": "Die größte Katastrophe der europäischen Geschichte verbesserte die Lage der Überlebenden – ein Befund, der schwer auszuhalten ist.",
    "vorgeschichte": "Die Handelswege der Pax Mongolica verbanden Ostasien und das Mittelmeer. Europa war um 1300 dicht besiedelt, die Böden ausgelaugt; Hungersnöte hatten die Bevölkerung geschwächt.",
    "verlauf": "Zwischen 1347 und 1351 starben schätzungsweise 25 Millionen Menschen in Europa. Die Sterblichkeit schwankte stark nach Region – Schätzungen reichen von 25 bis 70 Prozent, insgesamt etwa 30 bis 60 Prozent der Bevölkerung Europas. In Paris starb rund die Hälfte der 100.000 Einwohner. Städte traf es härter als das Land, weil die Ansteckungsgefahr größer war; unter den Klostergemeinschaften waren die Opferzahlen am höchsten.",
    "folgen": "Der massive Bevölkerungsverlust erzeugte einen drastischen Arbeitskräftemangel. Lohnarbeiter forderten höhere Löhne, und bis in die 1370er Jahre stiegen die Löhne stark. Bauern verlangten bessere Pachtbedingungen. Nach der Epidemie verbesserten sich die Lebensbedingungen, insbesondere die Ernährungsqualität – und zwar über alle sozialen Schichten hinweg.",
    "strittig": "Wie stark die Pest die Auflösung der Leibeigenschaft in Westeuropa vorantrieb, ist umstritten; in Osteuropa verstärkte sich die Abhängigkeit der Bauern im selben Zeitraum sogar. Auch die Gesamtzahl der Opfer beruht auf Schätzungen mit erheblicher Unsicherheit.",
    "zahlen": [
      {
        "wert": "ca. 25 Mio.",
        "was": "geschätzte Tote in Europa 1347–1351"
      },
      {
        "wert": "30–60 %",
        "was": "Anteil der europäischen Bevölkerung"
      },
      {
        "wert": "1370er",
        "was": "Jahrzehnt der stärksten Lohnsteigerungen"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Black Death; Black Death – Causes and Effects",
      "Science (AAAS): From Black Death to fatal flu"
    ]
  },
  {
    "id": "zheng-he",
    "titel": "Zheng He und die abgebrochene Seemacht",
    "epoche": "fruehe-neuzeit",
    "jahr": 1405,
    "zeitraum": "1405–1433",
    "region": "Indischer Ozean, Ostafrika",
    "leitsatz": "Bevor Europa aufbrach, hatte China die größte Flotte der Welt – und stellte die Fahrten ein.",
    "vorgeschichte": "Der Yongle-Kaiser der Ming-Dynastie wollte Chinas Macht und Kultur nach außen sichtbar machen und fremde Kostbarkeiten an den Hof holen. Mit Zheng He, einem muslimischen Eunuchen am Kaiserhof, stand ein Befehlshaber bereit.",
    "verlauf": "1405 lief die erste Fahrt aus: rund 27.800 Mann auf 317 Schiffen, darunter 62 sogenannte Schatzschiffe voller Geschenke für Staatsoberhäupter. Zwischen 1405 und 1433 führte Zheng He sieben Fahrten durch Südostasien und über den Indischen Ozean – bis an die Küste Indiens, in den Persischen Golf, ans Rote Meer und an die Ostküste Afrikas. Die siebte und letzte Fahrt verließ China im Winter 1431. Zheng He starb im Frühjahr 1433 in Calicut; die Flotte kehrte im Sommer zurück.",
    "folgen": "Nach dem Tod des Yongle-Kaisers 1424 setzte sein Nachfolger, der Hongxi-Kaiser, die Seeexpeditionen aus. Zheng He wurde Garnisonskommandant in Nanjing mit der Aufgabe, seine Truppen aufzulösen. China zog sich vom Fernseehandel als Staatsunternehmen zurück – wenige Jahrzehnte, bevor portugiesische Karavellen in denselben Gewässern erschienen.",
    "strittig": "Warum China abbrach, wird bis heute diskutiert: Kosten, Hofintrigen zwischen Eunuchen und Beamtenschaft, die Verlagerung der Aufmerksamkeit auf die Nordgrenze. Die populäre Deutung, China habe sich damit die Weltherrschaft entgehen lassen, ist eine Rückprojektion – die Fahrten dienten der Repräsentation und dem Tributsystem, nicht der Kolonisierung.",
    "zahlen": [
      {
        "wert": "317",
        "was": "Schiffe der ersten Fahrt, davon 62 Schatzschiffe"
      },
      {
        "wert": "ca. 27.800",
        "was": "Mann Besatzung der ersten Fahrt"
      },
      {
        "wert": "7",
        "was": "Fahrten zwischen 1405 und 1433"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Zheng He; Zheng He's Achievements"
    ]
  },
  {
    "id": "buchdruck",
    "titel": "Der Buchdruck",
    "epoche": "fruehe-neuzeit",
    "jahr": 1450,
    "zeitraum": "ab ca. 1450",
    "region": "Mainz und ganz Europa",
    "leitsatz": "In fünfzig Jahren stieg die Zahl der Bücher in Europa von einigen Tausend auf rund neun Millionen.",
    "vorgeschichte": "Bücher wurden von Hand abgeschrieben. Ihre Zahl in Europa ließ sich in Tausenden zählen, ihr Preis war für die meisten unerschwinglich. Beweglichen Druck kannte man in Ostasien bereits, ohne dass er sich dort in gleicher Weise durchsetzte.",
    "verlauf": "Um 1450 entwickelte Johannes Gutenberg in Mainz ein Verfahren, Text von beweglichen Metalllettern zu drucken. Sein wichtigster Beitrag war vermutlich das verstellbare Gießinstrument, mit dem sich Lettern verschiedener Größe genau und in großer Zahl herstellen ließen. 1455 druckte er die nach ihm benannte Bibel. Bis zum Jahr 1500 gab es in über 250 europäischen Städten Druckerpressen.",
    "folgen": "Bis 1500 waren rund 9 Millionen Bücher in etwa 40.000 Titeln entstanden. In weniger als vierzig Jahren fiel der Buchpreis um zwei Drittel. Lesen wurde erschwinglich, Wissen vergleichbar, Irrtum überprüfbar – und Widerspruch verbreitbar. Bücher aus der Zeit zwischen 1455 und 1501 heißen Inkunabeln, 'Wiegendrucke'.",
    "strittig": "Ob der Druck Ursache oder Verstärker der folgenden Umbrüche war, wird diskutiert. Unstrittig ist, dass ohne ihn weder die Reformation noch die wissenschaftliche Revolution die Geschwindigkeit erreicht hätten, die sie erreichten.",
    "zahlen": [
      {
        "wert": "ca. 9.000.000",
        "was": "Bücher in Europa im Jahr 1500, nach 50 Jahren Druck"
      },
      {
        "wert": "ca. 40.000",
        "was": "verschiedene Titel bis 1500"
      },
      {
        "wert": "über 250",
        "was": "Städte mit Druckerpresse bis 1500"
      },
      {
        "wert": "−2/3",
        "was": "Rückgang des Buchpreises in unter 40 Jahren"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Johannes Gutenberg; History of publishing – The age of early printing 1450–1550; Incunabula",
      "Library of Congress: Incunabula"
    ]
  },
  {
    "id": "fall-konstantinopel",
    "titel": "Der Fall Konstantinopels",
    "epoche": "mittelalter",
    "jahr": 1453,
    "zeitraum": "29. Mai 1453",
    "region": "Bosporus",
    "leitsatz": "Mauern, die tausend Jahre gehalten hatten, fielen in 55 Tagen – weil sich die Technik geändert hatte.",
    "vorgeschichte": "Das Byzantinische Reich war auf die Stadt und wenig Umland zusammengeschrumpft. Mehmed II. ließ am Bosporus die Festung Rumelihisarı errichten und schnitt die Stadt von der Seeversorgung aus dem Schwarzen Meer ab.",
    "verlauf": "Mehmed beauftragte den ungarischen Büchsenmacher Urban mit dem Bau von Geschützen, die stark genug waren, die Landmauer zu brechen. Bis März 1453 standen sie vor der Stadt. Die Belagerung zu Land und zu Wasser dauerte 55 Tage; am 29. Mai 1453 fiel die Stadt.",
    "folgen": "Mit Konstantinopel verlor das christliche Europa einen Schutzwall; die osmanische Ausdehnung nach Südosteuropa lief fortan ungehindert. Zahlreiche Gelehrte flohen nach Italien und brachten Handschriften und die Tradition griechischer Gelehrsamkeit mit – ein erheblicher Schub für den Humanismus. Mehmed verlegte seine Hauptstadt von Edirne nach Konstantinopel und machte sie zur vielsprachigen Metropole eines vielsprachigen Reiches.",
    "strittig": "Die verbreitete Erzählung, der Fall der Stadt habe die Handelswege nach Asien abgeschnitten und dadurch die Entdeckungsfahrten ausgelöst, ist stark vereinfacht: Venedig und Genua handelten weiter, und die portugiesischen Fahrten hatten schon vorher begonnen.",
    "zahlen": [
      {
        "wert": "55 Tage",
        "was": "Dauer der Belagerung"
      },
      {
        "wert": "29. Mai 1453",
        "was": "Fall der Stadt"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Fall of Constantinople 1453; Mehmed II; Ottoman Empire – Mehmed II",
      "The Metropolitan Museum of Art: Constantinople after 1261"
    ]
  },
  {
    "id": "columbian-exchange",
    "titel": "Der Kolumbianische Austausch",
    "epoche": "fruehe-neuzeit",
    "jahr": 1492,
    "zeitraum": "ab 1492",
    "region": "Atlantik, Amerika, Eurasien, Afrika",
    "leitsatz": "Die Verbindung zweier bis dahin getrennter Welten war zugleich die größte Bevölkerungskatastrophe der bekannten Geschichte und die Grundlage des modernen Bevölkerungswachstums.",
    "vorgeschichte": "Amerika und Eurasien waren biologisch seit Jahrtausenden getrennt. Krankheitserreger, Nutzpflanzen und Haustiere hatten sich unabhängig voneinander entwickelt.",
    "verlauf": "Ab 1492 gelangten eurasische und afrikanische Krankheiten nach Amerika – Pocken, Masern, Grippe. Die indigene Bevölkerung besaß keinerlei Immunität. Zugleich kamen Pferde, Rinder und Schweine nach Amerika, und amerikanische Nutzpflanzen nach Eurasien und Afrika: Mais, Kartoffel, Maniok, Süßkartoffel.",
    "folgen": "Die Bevölkerungsverluste in Amerika werden auf 50 bis 95 Prozent geschätzt; auf den meisten Inseln war die indigene Bevölkerung bis 1600 um mehr als 99 Prozent zurückgegangen. Seuchen wirkten zusammen mit Hunger, Gewalt, Zwangsumsiedlung und Versklavung. In die Gegenrichtung veränderten Kartoffel und Mais die Ernährung Eurasiens und Afrikas grundlegend und trugen dort zu erheblichem Bevölkerungswachstum bei.",
    "strittig": "Die Höhe der vorkolonialen Bevölkerung Amerikas und damit das Ausmaß des Verlusts sind Gegenstand anhaltender Forschung; die Schätzungen gehen weit auseinander. Unstrittig ist die Größenordnung der Katastrophe.",
    "zahlen": [
      {
        "wert": "50–95 %",
        "was": "geschätzter Bevölkerungsrückgang indigener Gesellschaften"
      },
      {
        "wert": "über 99 %",
        "was": "Rückgang auf den meisten Karibikinseln bis 1600"
      },
      {
        "wert": "Mais, Kartoffel, Maniok",
        "was": "amerikanische Grundnahrungspflanzen, die nach Eurasien und Afrika gelangten"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Columbian exchange; Why did European diseases cause such a massive decline in Indigenous populations",
      "Nature Ecology & Evolution: Ecological consequences of post-Columbian indigenous depopulation"
    ]
  },
  {
    "id": "reformation",
    "titel": "Die Reformation",
    "epoche": "fruehe-neuzeit",
    "jahr": 1517,
    "zeitraum": "ab 31. Oktober 1517",
    "region": "Heiliges Römisches Reich, dann ganz Europa",
    "leitsatz": "Eine akademische Streitschrift über Ablässe wurde zur Spaltung der westlichen Christenheit – weil sie gedruckt werden konnte.",
    "vorgeschichte": "Der Ablasshandel finanzierte kirchliche Bauvorhaben und war vielerorts zum Geschäft geworden. Kritik daran gab es seit Langem; sie blieb folgenlos, weil sie sich nicht verbreiten ließ.",
    "verlauf": "Am 31. Oktober 1517 veröffentlichte Martin Luther seine 95 Thesen in Wittenberg – 95 Sätze zur akademischen Disputation über Ablässe, die deren Missbrauch kritisierten und die päpstliche Praxis infrage stellten. Innerhalb weniger Monate hatten sie große Teile des Heiligen Römischen Reiches erreicht, darunter Nürnberg und Augsburg. Die Druckerpresse mit beweglichen Lettern, wenige Jahrzehnte zuvor entwickelt, machte aus einem Gelehrtenstreit eine öffentliche Auseinandersetzung.",
    "folgen": "Luther wurde exkommuniziert; aus der Auseinandersetzung ging der Protestantismus hervor. Der Augsburger Religionsfrieden von 1555 zwang Karl V., jedem Landesherrn im Reich die Wahl zwischen römischem Katholizismus und Luthertum zuzugestehen – die Entscheidung über den Glauben fiel damit beim Fürsten, nicht beim Einzelnen.",
    "strittig": "Ob Luther die Thesen tatsächlich an die Tür der Schlosskirche schlug, ist historisch nicht gesichert – die Erzählung stammt aus späterer Zeit. Unbestritten ist, dass er sie am 31. Oktober 1517 in Umlauf brachte.",
    "zahlen": [
      {
        "wert": "95",
        "was": "Thesen"
      },
      {
        "wert": "wenige Monate",
        "was": "bis zur reichsweiten Verbreitung"
      },
      {
        "wert": "1555",
        "was": "Augsburger Religionsfrieden"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Reformation; Ninety-five Theses; Lutheranism – History"
    ]
  },
  {
    "id": "sklavenhandel",
    "titel": "Transatlantischer Sklavenhandel und Abolition",
    "epoche": "fruehe-neuzeit",
    "jahr": 1600,
    "zeitraum": "16. bis 19. Jahrhundert",
    "region": "Atlantik: Afrika, Amerika, Europa",
    "leitsatz": "Zwischen 10 und 12 Millionen Menschen wurden verschleppt – und die Abschaffung zog sich über acht Jahrzehnte hin.",
    "vorgeschichte": "Die Plantagenwirtschaft in Amerika – Zucker, Tabak, Baumwolle – verlangte Arbeitskräfte in einem Ausmaß, das die indigene Bevölkerung nach dem Zusammenbruch durch Seuchen nicht mehr decken konnte.",
    "verlauf": "Vom 16. bis ins 19. Jahrhundert wurden zwischen 10 und 12 Millionen versklavte Afrikanerinnen und Afrikaner über den Atlantik nach Amerika verschleppt. Der Handel bildete die Grundlage der Plantagenökonomien und war fest in europäische Handels- und Finanzsysteme eingebunden.",
    "folgen": "Großbritannien verbot 1807 den Sklavenhandel mit seinen Kolonien. 1833 verabschiedete es den Slavery Abolition Act, der 1834 in Kraft trat und in den meisten britischen Kolonien mehr als 800.000 Menschen aus der Sklaverei entließ. In den Vereinigten Staaten schaffte erst der 13. Verfassungszusatz 1865 die Sklaverei ab. Brasilien verbot den Handel 1850, beendete die Sklaverei aber erst 1888.",
    "strittig": "Die Zahlen beruhen auf der Auswertung von Schiffsregistern und sind für die überlebende Ankunft in Amerika besser belegt als für die Zahl der Verschleppten insgesamt – die Sterblichkeit auf der Überfahrt ist in vielen Fällen nur schätzbar.",
    "zahlen": [
      {
        "wert": "10–12 Mio.",
        "was": "verschleppte Menschen"
      },
      {
        "wert": "1807",
        "was": "britisches Verbot des Sklavenhandels"
      },
      {
        "wert": "über 800.000",
        "was": "Befreite im britischen Empire ab 1834"
      },
      {
        "wert": "1888",
        "was": "Brasilien – letzte Abschaffung in Amerika"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Transatlantic slave trade – Key Facts; Abolitionism; Transatlantic Slave Trade Timeline",
      "UNESCO: Slave voyages"
    ]
  },
  {
    "id": "westfaelischer-friede",
    "titel": "Der Westfälische Friede",
    "epoche": "fruehe-neuzeit",
    "jahr": 1648,
    "zeitraum": "1648, nach 30 Jahren Krieg",
    "region": "Münster und Osnabrück",
    "leitsatz": "Aus dem verheerendsten Krieg der deutschen Geschichte ging die Grundidee des modernen Staates hervor: dass innerhalb der Grenzen niemand von außen mitregiert.",
    "vorgeschichte": "Der 1618 begonnene Krieg hatte sich von einem Konfessionskonflikt im Reich zu einem europäischen Machtkampf ausgeweitet, in dem Frankreich, Schweden, Spanien und die Habsburger um Vorherrschaft rangen – ausgetragen überwiegend auf deutschem Boden.",
    "verlauf": "Ab 1644 wurde in den westfälischen Städten Münster und Osnabrück verhandelt – zwischen Kaiser Ferdinand III., den Reichsständen, Frankreich und Schweden. Die Verträge von 1648 beendeten zugleich den Achtzigjährigen Krieg zwischen Spanien und den Niederlanden.",
    "folgen": "Schweden, Frankreich und ihre Verbündeten erhielten Gebiete. Die Unabhängigkeit der Niederlande und der Schweizerischen Eidgenossenschaft wurde bestätigt. Der Friede erkannte die Souveränität der Reichsstände an und gab ihnen das Recht, Bündnisse zu schließen – was Kaiser und Reichstag schwächte und den letzten Versuch beendete, das Reich zu zentralisieren. Die religiöse Duldung wurde auf Lutheraner und Reformierte ausgedehnt.",
    "strittig": "Ob 1648 wirklich die Geburtsstunde des Systems souveräner Staaten war, ist umstritten. Ein Teil der Forschung schreibt den Verträgen diese Rolle zu; andere sehen darin eine Rückprojektion des 19. und 20. Jahrhunderts auf ein Vertragswerk, das in erster Linie Reichsrecht ordnete. Die Bevölkerung Deutschlands wurde durch die vielen dort ausgetragenen Schlachten etwa halbiert.",
    "zahlen": [
      {
        "wert": "30",
        "was": "Kriegsjahre, 1618–1648"
      },
      {
        "wert": "ca. 50 %",
        "was": "Bevölkerungsverlust in Deutschland"
      },
      {
        "wert": "4 Jahre",
        "was": "Verhandlungsdauer ab 1644"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Peace of Westphalia; Thirty Years' War; Germany – The Thirty Years War and the Peace of Westphalia"
    ]
  },
  {
    "id": "industrielle-revolution",
    "titel": "Die Industrielle Revolution",
    "epoche": "industrialisierung",
    "jahr": 1780,
    "zeitraum": "spätes 18. bis 19. Jahrhundert",
    "region": "Großbritannien, dann Europa und Nordamerika",
    "leitsatz": "Zum ersten Mal seit der Sesshaftwerdung wuchs die Produktion schneller als die Bevölkerung – dauerhaft.",
    "vorgeschichte": "Großbritannien verfügte über Kohle, Kapital, koloniale Absatzmärkte und eine Rechtsordnung, die Investitionen begünstigte. Wasserkraft trieb die frühen Fabriken an und war fast überall reichlich vorhanden – außer im Großraum Manchester, dem Zentrum der Baumwollproduktion.",
    "verlauf": "Gerade dort, wo Wasserkraft knapp wurde – durch dichte Fabrikbesiedlung an den Wasserläufen und ein trockeneres Klima im 19. Jahrhundert –, wurde die kohlebetriebene Dampfmaschine zur Lösung. 1840 erzeugten britische Dampfmaschinen 620.000 der insgesamt 860.000 Pferdestärken Europas. Eisenbahnen, ursprünglich zum Kohletransport aus Bergwerken entwickelt, wurden ab den 1820er Jahren für den Verkehr zwischen Städten ausgebaut; 1830 eröffnete die erste kommerzielle Strecke zwischen Liverpool und Manchester.",
    "folgen": "Fabrikorte wie Manchester wuchsen binnen weniger Jahrzehnte von Dörfern zu Städten mit Hunderttausenden Einwohnern. Die Fabrik verdrängte die vorindustrielle Werkstatt. Damit entstanden zugleich eine neue Klasse von Lohnarbeitern, Kinderarbeit im großen Maßstab, Elendsviertel – und die politischen Bewegungen, die darauf antworteten.",
    "strittig": "Warum die Industrialisierung in Großbritannien begann und nicht in China oder den Niederlanden, ist eine der meistdiskutierten Fragen der Wirtschaftsgeschichte. Kohle, Kolonien, Institutionen, Löhne, Wissenschaft – jede Erklärung hat Anhänger und Kritiker.",
    "zahlen": [
      {
        "wert": "620.000 von 860.000 PS",
        "was": "britischer Anteil an Europas Dampfkraft 1840"
      },
      {
        "wert": "1830",
        "was": "erste kommerzielle Eisenbahnstrecke Liverpool–Manchester"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: History of Europe – The Industrial Revolution; City – Industrialization and the modern world",
      "PNAS: Limited waterpower contributed to rise of steam power in British Cottonopolis"
    ]
  },
  {
    "id": "franzoesische-revolution",
    "titel": "Die Französische Revolution",
    "epoche": "industrialisierung",
    "jahr": 1789,
    "zeitraum": "1789–1799",
    "region": "Frankreich und Europa",
    "leitsatz": "Am Anfang stand kein Aufstand der Ideen, sondern ein Staatshaushalt, der nicht mehr aufging.",
    "vorgeschichte": "Frankreichs Beteiligung am amerikanischen Unabhängigkeitskrieg verschärfte eine ohnehin angespannte Finanzlage. Der Finanzkontrolleur Calonne berief im Februar 1787 eine Notabelnversammlung ein, um Reformen vorzuschlagen, die das Defizit über eine Besteuerung der privilegierten Stände beseitigen sollten. Dazu kamen der Vertrauensverlust der Bauern in die Feudalordnung, eine wachsende, von politischer Macht ausgeschlossene Bürgerschicht und die Wirkung der Aufklärungsschriften. Die Monate vor der Einberufung der Generalstände fielen mit der schwersten Versorgungskrise seit Jahren zusammen: Auf eine Frühjahrsdürre folgte im Juli 1788 ein Hagelunwetter, das die Ernte vernichtete.",
    "verlauf": "Ludwig XVI. berief 1789 die Generalstände aus Klerus, Adel und drittem Stand ein. Am 20. Juni versammelten sich die Abgeordneten in einem Ballhaus und schworen, so lange zusammenzubleiben, bis Frankreich eine Verfassung habe. Am 26. August verabschiedete die Nationalversammlung die Erklärung der Menschen- und Bürgerrechte: Freiheit, Gleichheit, Unverletzlichkeit des Eigentums und das Recht auf Widerstand gegen Unterdrückung.",
    "folgen": "Die Ereignisse beunruhigten die europäischen Monarchien und führten zum Krieg Frankreichs gegen Österreich, Preußen und Großbritannien. Die Erklärung der Menschen- und Bürgerrechte wurde zum Bezugstext moderner Verfassungen – auch dort, wo die Revolution selbst als Schreckbild galt.",
    "strittig": "Ob die Revolution notwendig in den Terror führen musste oder ob es Weggabelungen gab, ist die vielleicht am längsten geführte Debatte der Geschichtswissenschaft. Sie ist nicht entschieden und wird es kaum werden.",
    "zahlen": [
      {
        "wert": "Juli 1788",
        "was": "Hagelunwetter vernichtet die Ernte"
      },
      {
        "wert": "20. Juni 1789",
        "was": "Ballhausschwur"
      },
      {
        "wert": "26. August 1789",
        "was": "Erklärung der Menschen- und Bürgerrechte"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: French Revolution; French Revolution – Causes and Effects; Events of 1789; France – The causes of the French Revolution"
    ]
  },
  {
    "id": "lateinamerika-unabhaengigkeit",
    "titel": "Lateinamerikas Unabhängigkeit",
    "epoche": "industrialisierung",
    "jahr": 1810,
    "zeitraum": "1808–1826",
    "region": "Spanisches und portugiesisches Amerika",
    "leitsatz": "Der Anstoß kam nicht aus Amerika, sondern aus Europa: Napoleon nahm den spanischen König gefangen – und in Amerika stellte sich die Frage, wer nun regiert.",
    "vorgeschichte": "Die kreolischen Eliten – in Amerika geborene Nachkommen der Spanier – waren wohlhabend, aber von den höchsten Ämtern ausgeschlossen. Die bourbonischen Reformen bedrohten ihren Status. Aufklärungsschriften ließen die Frage nach der Legitimität überlieferter Herrschaft zu.",
    "verlauf": "Als Napoleon den spanischen König gefangen setzte, entstand eine Legitimitätslücke; kreolische Eliten bildeten eigene Regierungsjuntas. Aus dem Norden kam die Bewegung um Simón Bolívar, aus dem Süden die um José de San Martín. Zwischen 1819 und 1822 befreite Bolívar Neugranada (Kolumbien und Panama), Venezuela und Quito (Ecuador). Mit San Martíns Hilfe folgten Peru 1824 und Bolivien 1825.",
    "folgen": "Aus dem spanischen Kolonialreich gingen zahlreiche Republiken hervor. Das Ende der spanischen Herrschaft löste jedoch die politischen, sozialen und wirtschaftlichen Probleme nicht: Der Übergang von der Kolonie zum modernen Staat erwies sich als schwierig, und in vielen Ländern folgten Jahrzehnte der Instabilität und der Herrschaft lokaler Machthaber.",
    "strittig": "Ob es sich um Revolutionen oder um einen Elitenwechsel handelte, ist umstritten: Die soziale Ordnung – Großgrundbesitz, die Stellung der indigenen Bevölkerung, in mehreren Ländern die Sklaverei – überdauerte die Unabhängigkeit vielfach unverändert.",
    "zahlen": [
      {
        "wert": "1808–1826",
        "was": "Zeitraum der Unabhängigkeitskriege"
      },
      {
        "wert": "1819–1822",
        "was": "Bolívar befreit drei Territorien"
      },
      {
        "wert": "1824/1825",
        "was": "Peru und Bolivien"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: History of Latin America – The independence of Latin America; Simón Bolívar; José de San Martín"
    ]
  },
  {
    "id": "meiji",
    "titel": "Die Meiji-Restauration",
    "epoche": "industrialisierung",
    "jahr": 1868,
    "zeitraum": "ab 3. Januar 1868",
    "region": "Japan",
    "leitsatz": "Ein Land, das sich zwei Jahrhunderte abgeschottet hatte, wurde in einer Generation zur Industriemacht – ausgelöst durch vier fremde Kriegsschiffe.",
    "vorgeschichte": "Im Juli 1853 lief ein Geschwader US-amerikanischer Kriegsschiffe unter Matthew C. Perry in die Bucht von Uraga ein. Der überlegenen Seemacht gegenüber musste das Shogunat zwei Jahrhunderte der Abschließung (sakoku) beenden und ungleiche Verträge unterzeichnen, die fremden Mächten weitreichende juristische und wirtschaftliche Vorrechte einräumten. Die Unfähigkeit der Tokugawa-Regierung, dem etwas entgegenzusetzen, galt weithin als Zeichen der Schwäche.",
    "verlauf": "Aus der innenpolitischen Krise erwuchs eine Bewegung zum Sturz des Regimes. Am 3. Januar 1868 setzte ein Staatsstreich in Kyōto den letzten Shogun Tokugawa Yoshinobu ab und rief den jungen Meiji-Kaiser zum Herrscher Japans aus.",
    "folgen": "Leitziel wurde fukoku-kyōhei – 'Reichtum mehren, Militär stärken'. Der Staat trieb Schlüsselindustrien, Verkehr und Nachrichtenwesen voran. 1872 fuhr die erste Eisenbahn; 1890 verfügte Japan über mehr als 2.250 Kilometer Schienen. Bis 1880 verbanden Telegrafenlinien alle größeren Städte. Kern des Umbruchs war die Zerschlagung der feudalen Sozialordnung und der Aufbau eines Rahmens, in dem kapitalistische Industrialisierung möglich wurde.",
    "strittig": "Der Begriff 'Restauration' verdeckt, wie radikal der Bruch war: Formal wurde die Kaiserherrschaft wiederhergestellt, tatsächlich entstand ein völlig neuer Staat. Ob die Modernisierung zwangsläufig in Imperialismus münden musste, wird bis heute diskutiert.",
    "zahlen": [
      {
        "wert": "Juli 1853",
        "was": "Perrys Geschwader in der Bucht von Uraga"
      },
      {
        "wert": "3. Januar 1868",
        "was": "Staatsstreich in Kyōto"
      },
      {
        "wert": "über 2.250 km",
        "was": "Eisenbahnnetz bis 1890, ab 1872"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Meiji Restoration; Japan – The opening of Japan; Empire of Japan – The emergence of modern Japan"
    ]
  },
  {
    "id": "reichsgruendung",
    "titel": "Die deutsche Reichsgründung",
    "epoche": "industrialisierung",
    "jahr": 1871,
    "zeitraum": "1864–1871",
    "region": "Mitteleuropa",
    "leitsatz": "Deutschland wurde nicht durch Reden und Beschlüsse geeint, sondern durch drei geplante Kriege in sieben Jahren.",
    "vorgeschichte": "Nach dem Scheitern der Revolution von 1848/49 blieb die deutsche Frage offen: Einheit unter preußischer oder unter österreichischer Führung, mit oder ohne Österreich. Die süddeutschen Staaten hielten Abstand zu Preußen.",
    "verlauf": "Unter Bismarcks Führung gewann Preußen 1864 den Krieg gegen Dänemark, 1866 den Deutschen Krieg gegen Österreich und 1870/71 den Krieg gegen Frankreich. Bismarcks Kalkül, ein Krieg gegen eine scheinbare französische Aggression werde den Partikularismus südlich des Mains überwinden, ging auf: Die Südstaaten traten an die Seite des Nordens, und der gemeinsame Waffengang erzeugte ein Gefühl der Einheit, das der Siegesrausch verstärkte. Am 18. Januar 1871 wurde König Wilhelm I. von Preußen in Versailles zum Deutschen Kaiser proklamiert – im Schloss der französischen Könige.",
    "folgen": "Frankreich trat das Elsass und den größten Teil Lothringens samt Metz ab und musste fünf Milliarden Franc zahlen; deutsche Truppen blieben bis zur Zahlung im Land. Die französische Vormachtstellung auf dem Kontinent war beendet. Da Napoleon III. den Kirchenstaat nicht mehr schützen konnte, annektierte Italien ihn am 20. September 1870 und vollendete damit seine eigene Einigung. Der Sieg festigte in Deutschland den Glauben an den preußischen Militarismus, der bis 1945 eine bestimmende Kraft blieb.",
    "strittig": "Ob Bismarck die drei Kriege von langer Hand plante oder Gelegenheiten nutzte, die sich boten, ist eine klassische Streitfrage. Unstrittig ist, dass die Art der Gründung – von oben, militärisch, unter Ausschluss der demokratischen Bewegung – die politische Kultur des Kaiserreichs prägte.",
    "zahlen": [
      {
        "wert": "1864, 1866, 1870/71",
        "was": "die drei Einigungskriege"
      },
      {
        "wert": "18. Januar 1871",
        "was": "Kaiserproklamation in Versailles"
      },
      {
        "wert": "5 Mrd. Franc",
        "was": "französische Reparationszahlung"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Germany – Franco-German conflict and the new German Reich; Otto von Bismarck; Franco-German War; Treaty of Frankfurt"
    ]
  },
  {
    "id": "julikrise",
    "titel": "Die Julikrise 1914",
    "epoche": "moderne",
    "jahr": 1914,
    "zeitraum": "28. Juni – 4. August 1914",
    "region": "Europa",
    "leitsatz": "Fünf Wochen zwischen einem Attentat und dem Weltkrieg – ein Lehrstück darüber, wie Bündnisse aus einem lokalen Konflikt einen globalen machen.",
    "vorgeschichte": "Europa war in zwei Bündnissysteme geteilt, den Dreibund und die Triple Entente. Sidney B. Fay nannte als tiefere Ursachen die Bündnissysteme, Militarismus, Imperialismus, Nationalismus und die Presse. Die Polarisierung machte eine Kettenreaktion aus einem örtlichen Konflikt nahezu vorhersehbar.",
    "verlauf": "Am 28. Juni 1914 erschoss der bosnische Serbe Gavrilo Princip in Sarajevo den österreichisch-ungarischen Thronfolger Franz Ferdinand und dessen Frau Sophie. Die deutsche Führung musste entscheiden, ob sie Österreich-Ungarn fallen ließe oder für dessen Sache gegen die anderen Großmächte eintrat; sie entschied sich, an Österreich-Ungarn festzuhalten – ohne zunächst zu begreifen, dass dies eine Entscheidung für den Krieg war. Am 28. Juli 1914 erklärte Österreich-Ungarn Serbien den Krieg. Binnen einer Woche befand sich fast ganz Europa im Krieg.",
    "folgen": "Vier Jahre Krieg, der Zusammenbruch von vier Imperien – des deutschen, österreichisch-ungarischen, russischen und osmanischen –, die Russische Revolution und eine Nachkriegsordnung, aus der die Konflikte des folgenden Jahrzehnts erwuchsen.",
    "strittig": "Die Kriegsschuldfrage ist die am längsten und schärfsten geführte Debatte der neueren Geschichtswissenschaft. Ob Deutschland den Krieg planvoll herbeiführte, ob alle Mächte hineinschlitterten oder ob die Verantwortung ungleich verteilt war – die Positionen haben sich mehrfach verschoben und stehen weiterhin nebeneinander.",
    "zahlen": [
      {
        "wert": "28. Juni 1914",
        "was": "Attentat von Sarajevo"
      },
      {
        "wert": "28. Juli 1914",
        "was": "Kriegserklärung an Serbien"
      },
      {
        "wert": "5 Wochen",
        "was": "vom Attentat zum europäischen Krieg"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: World War I; World War I – Causes and Effects; 20th-century international relations – The war guilt question; German Empire – The outbreak of World War I"
    ]
  },
  {
    "id": "russische-revolution",
    "titel": "Die Russische Revolution 1917",
    "epoche": "moderne",
    "jahr": 1917,
    "zeitraum": "Februar und Oktober 1917",
    "region": "Russisches Reich",
    "leitsatz": "Zwei Revolutionen in einem Jahr: Die erste stürzte den Zaren, die zweite entschied, wer an seine Stelle trat.",
    "vorgeschichte": "Die Verwaltung war von Korruption durchzogen, Lebensmittel waren knapp, und der Weltkrieg hatte die russische Wirtschaft ebenso zerrüttet wie den Ruf des Landes als Militärmacht.",
    "verlauf": "Als sich im Februar (nach altem Kalender) große Teile Petrograds aus Protest gegen die Lebensmittelknappheit erhoben, weigerte sich die Armee, auf die Demonstrierenden zu schießen. Zar Nikolaus II. musste abdanken; eine Provisorische Regierung trat an seine Stelle. Im Oktober alten Stils – November nach westlichem Kalender – übernahmen die Bolschewiki unter Lenin die Regierung, und zwar mit sehr geringem Blutvergießen.",
    "folgen": "Es folgte der Russische Bürgerkrieg zwischen Bolschewiki und ihren Gegnern, den Weißen. Ausgelöst wurde er durch Russlands schlechtes Abschneiden im Weltkrieg und den Vertrag von Brest-Litowsk, der Gebiete an Deutschland abtrat. Schätzungsweise 10 Millionen Menschen kamen ums Leben, überwiegend Zivilisten, überwiegend durch Krankheit und Hunger. Nach zwei Jahren Kampf setzten sich die Bolschewiki durch.",
    "strittig": "Ob der Oktober eine Revolution oder ein Staatsstreich war, ist eine Frage der Deutung, nicht der Fakten – die Bolschewiki waren gut organisiert, aber keine Mehrheit. Ebenso umstritten ist, ob die Diktatur in der Ausgangslage angelegt war oder aus dem Bürgerkrieg erwuchs.",
    "zahlen": [
      {
        "wert": "8.–12. März 1917",
        "was": "Februarrevolution (24.–28. Februar alten Stils)"
      },
      {
        "wert": "November 1917",
        "was": "Oktoberrevolution nach altem Kalender"
      },
      {
        "wert": "ca. 10 Mio.",
        "was": "Tote im Bürgerkrieg 1917–1922, meist Zivilisten"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Russian Revolution; February Revolution; Russian Civil War; Russia – The Civil War and War Communism 1918–21"
    ]
  },
  {
    "id": "weltwirtschaftskrise",
    "titel": "Die Weltwirtschaftskrise",
    "epoche": "moderne",
    "jahr": 1929,
    "zeitraum": "1929–1939",
    "region": "weltweit",
    "leitsatz": "Aus einer gewöhnlichen Rezession wurde die schwerste Wirtschaftskrise der Moderne – und wer den Goldstandard zuerst verließ, erholte sich zuerst.",
    "vorgeschichte": "In den 1920er Jahren trieb der Ansturm auf Aktien die Kurse weit über den tatsächlichen Wert der Papiere hinaus. Der Goldstandard band die Währungen aneinander und begrenzte den Spielraum der Notenbanken.",
    "verlauf": "Was im Sommer 1929 in den USA als gewöhnliche Rezession begann, verschärfte sich Ende 1929 dramatisch und dauerte bis Anfang 1933. Als die Kurse im September 1929 fielen, setzte ein Verkaufsansturm ein, und der Aktienmarkt brach ein. Zwischen 1929 und 1933 sank die Industrieproduktion in den USA um fast 47 Prozent, das Bruttoinlandsprodukt um 30 Prozent, die Arbeitslosigkeit stieg auf über 20 Prozent. In den Industrieländern fand Anfang der 1930er Jahre bis zu ein Viertel der Erwerbsbevölkerung keine Arbeit.",
    "folgen": "Der Goldstandard trug die Krise von den USA in die Welt: Goldabflüsse in die USA drohten die Währungen anderer Länder zu entwerten, deren Notenbanken mit Zinserhöhungen gegensteuerten – was Produktion und Preise weiter drückte und die Arbeitslosigkeit erhöhte. Die Erholung setzte im Wesentlichen mit der Aufgabe des Goldstandards und der folgenden Geldmengenausweitung ein. Großbritannien, das im September 1931 dazu gezwungen wurde, erholte sich früh; die USA, die erst 1933 abwerteten, deutlich später.",
    "strittig": "Über das Gewicht der einzelnen Ursachen – Börsenkrach, Bankenkrisen, Geldpolitik, Goldstandard, Protektionismus – wird bis heute gestritten. Die Rolle des Goldstandards bei der weltweiten Ausbreitung gilt jedoch als gut belegt.",
    "zahlen": [
      {
        "wert": "−47 %",
        "was": "US-Industrieproduktion 1929–1933"
      },
      {
        "wert": "über 20 %",
        "was": "US-Arbeitslosenquote"
      },
      {
        "wert": "bis zu 25 %",
        "was": "Erwerbslose in Industrieländern Anfang der 1930er"
      },
      {
        "wert": "1931 / 1933",
        "was": "Aufgabe des Goldstandards in Großbritannien / Abwertung in den USA"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Great Depression; Causes of the Great Depression; Great Depression – Sources of recovery; Economic impact"
    ]
  },
  {
    "id": "dekolonisation",
    "titel": "Die Dekolonisation",
    "epoche": "moderne",
    "jahr": 1947,
    "zeitraum": "1945 bis in die 1980er Jahre",
    "region": "Asien, Afrika, Karibik, Pazifik",
    "leitsatz": "Innerhalb weniger Jahrzehnte verdreifachte sich die Zahl der Staaten der Erde – und allein 1960 wurden 17 afrikanische Länder unabhängig.",
    "vorgeschichte": "Der Zweite Weltkrieg hatte die Kolonialmächte geschwächt und ihre moralischen Ansprüche untergraben. In den Kolonien hatten sich seit Langem Unabhängigkeitsbewegungen formiert; viele Kolonialsoldaten kehrten mit veränderten Erwartungen zurück.",
    "verlauf": "Indien wurde am 14./15. August 1947 unabhängig – zugleich wurde der Subkontinent in Indien und Pakistan geteilt. Großbritannien verließ Palästina 1948 und Ägypten 1956, zog sich in den 1950er und 1960er Jahren aus Afrika zurück, in den 1970er und 1980er Jahren aus Inselprotektoraten und 1997 aus Hongkong. Allein im Jahr 1960 entstanden 17 unabhängige Staaten aus afrikanischen Kolonien; im selben Jahr verabschiedete die UN-Generalversammlung ihre Erklärung über die Gewährung der Unabhängigkeit an koloniale Länder und Völker. Bis Ende 1980 war der größte Teil Afrikas unabhängig.",
    "folgen": "Die politische Weltkarte wurde neu gezeichnet. Die von Kolonialmächten gezogenen Grenzen blieben jedoch meist bestehen und durchschnitten Sprach- und Siedlungsräume. Wirtschaftliche Abhängigkeiten überdauerten die politische Unabhängigkeit vielfach.",
    "strittig": "Ob die Kolonialmächte 'gewährten' oder ob ihnen die Unabhängigkeit abgerungen wurde, hängt stark vom Einzelfall ab – zwischen dem weitgehend verhandelten indischen Weg und den Kriegen in Algerien, Kenia oder Angola liegen Welten.",
    "zahlen": [
      {
        "wert": "14./15. August 1947",
        "was": "Unabhängigkeit Indiens und Teilung"
      },
      {
        "wert": "17",
        "was": "afrikanische Staaten allein im Jahr 1960"
      },
      {
        "wert": "1960",
        "was": "UN-Erklärung zur Gewährung der Unabhängigkeit"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Decolonization; Decolonization of Africa; Partition of India; Western colonialism – Decolonization from 1945",
      "United Nations: Decolonization"
    ]
  },
  {
    "id": "kubakrise",
    "titel": "Die Kubakrise",
    "epoche": "moderne",
    "jahr": 1962,
    "zeitraum": "16.–28. Oktober 1962",
    "region": "Karibik, USA, Sowjetunion",
    "leitsatz": "Dreizehn Tage, in denen die Welt einem Atomkrieg so nahe war wie nie – und gelöst wurde die Krise auch durch ein Zugeständnis, das 25 Jahre geheim blieb.",
    "vorgeschichte": "Nach der gescheiterten Invasion in der Schweinebucht suchte Kuba sowjetischen Schutz. Die USA hatten Mittelstreckenraketen vom Typ Jupiter in der Türkei stationiert – in Reichweite der Sowjetunion.",
    "verlauf": "Im Oktober 1962 fotografierte ein amerikanisches U-2-Aufklärungsflugzeug den Bau sowjetischer Raketenstellungen auf Kuba. Kennedy entschied sich für eine Seeblockade – von ihm 'Quarantäne' genannt –, um weitere sowjetische Militärlieferungen zu verhindern. Die Krise dauerte vom 16. bis zum 28. Oktober.",
    "folgen": "Öffentlich einigten sich beide Seiten darauf, dass die Sowjetunion die Stellungen abbaut und die USA im Gegenzug zusagen, Kuba nicht anzugreifen. In einer gesonderten Abmachung, die über 25 Jahre geheim blieb, sagten die USA zu, ihre Atomraketen aus der Türkei abzuziehen. Nach der Krise wurde ein direkter Draht zwischen Washington und Moskau eingerichtet.",
    "strittig": "Wie nahe die Welt tatsächlich am Krieg stand, wird bis heute neu bewertet – erst durch später freigegebene Dokumente wurde bekannt, dass sowjetische U-Boot-Kommandanten vor Ort über nukleare Torpedos verfügten. Die öffentliche Darstellung eines rein amerikanischen Verhandlungserfolgs beruhte auf der Geheimhaltung des Türkei-Zugeständnisses.",
    "zahlen": [
      {
        "wert": "13 Tage",
        "was": "Dauer der Krise, 16.–28. Oktober 1962"
      },
      {
        "wert": "über 25 Jahre",
        "was": "Geheimhaltung der Türkei-Abmachung"
      }
    ],
    "quellen": [
      "John F. Kennedy Presidential Library: Cuban Missile Crisis",
      "Encyclopaedia Britannica: Cuban missile crisis",
      "US National Archives: Forty Years Ago – The Cuban Missile Crisis"
    ]
  },
  {
    "id": "mauerfall",
    "titel": "Der Mauerfall",
    "epoche": "moderne",
    "jahr": 1989,
    "zeitraum": "9. November 1989",
    "region": "Berlin, DDR",
    "leitsatz": "Die Grenze öffnete sich, weil ein Funktionär eine Vorlage vorlas, die er nicht kannte – und auf eine Nachfrage antwortete, ohne die Antwort zu wissen.",
    "vorgeschichte": "Im Herbst 1989 verließen immer mehr DDR-Bürger das Land über andere Staaten, etwa die Tschechoslowakei. Die Führung wollte diesen Exodus mit neuen Reiseregelungen eindämmen; Massendemonstrationen forderten Reformen.",
    "verlauf": "Am Abend des 9. November 1989 verlas Günter Schabowski auf einer Pressekonferenz eine Mitteilung, die das Zentralkomitee der SED in seiner Abwesenheit vorbereitet hatte. Gemeint war, dass DDR-Bürger Ausreisevisa zu üblichen Dienstzeiten beantragen sollten. Schabowski schien selbst überrascht; auf die Frage eines Journalisten, ab wann das gelte, antwortete er: soweit ihm bekannt, sofort. Menschenmengen sammelten sich an den Übergängen und verlangten Durchlass. Die Grenzsoldaten waren nicht vorbereitet und ließen sie gehen.",
    "folgen": "Die Öffnung der Mauer erwies sich als tödlich für die DDR. Immer größere Demonstrationen forderten Mitbestimmung; Egon Krenz wurde durch den reformbereiten Hans Modrow ersetzt, der freie Wahlen versprach. Der Einigungsvertrag wurde im September 1990 von Bundestag und Volkskammer ratifiziert und trat am 3. Oktober 1990 in Kraft: Die DDR trat als fünf neue Länder der Bundesrepublik bei.",
    "strittig": "Ob Schabowskis Auftritt ein Versehen war oder eine bewusst offen gelassene Formulierung, wird weiterhin diskutiert. Unstrittig ist, dass die Öffnung an diesem Abend nicht geplant war – und dass die Massenbewegung der Wochen zuvor sie erst möglich machte.",
    "zahlen": [
      {
        "wert": "9. November 1989",
        "was": "Öffnung der Grenzübergänge"
      },
      {
        "wert": "3. Oktober 1990",
        "was": "Inkrafttreten des Einigungsvertrags"
      }
    ],
    "quellen": [
      "Encyclopaedia Britannica: Berlin Wall; Germany – The reunification of Germany; German reunification; Egon Krenz"
    ]
  },
  {
    "id": "world-wide-web",
    "titel": "Das World Wide Web",
    "epoche": "moderne",
    "jahr": 1989,
    "zeitraum": "1989–1993",
    "region": "CERN, Genf – dann die Welt",
    "leitsatz": "Die vielleicht folgenreichste Technik der Gegenwart entstand als Werkzeug zum Austausch von Forschungsdaten – und wurde verschenkt.",
    "vorgeschichte": "Am CERN arbeiteten Forschende aus vielen Ländern mit unterschiedlichen Rechnern und Formaten. Der Bedarf an automatisiertem Informationsaustausch zwischen Universitäten und Instituten war der eigentliche Anlass.",
    "verlauf": "Im März 1989 schrieb Tim Berners-Lee den ersten Entwurf für das World Wide Web. Die Grundidee war, Rechner, Datennetze und Hypertext zu einem einfach benutzbaren globalen Informationssystem zu verbinden. Bis Weihnachten desselben Jahres hatte er die Kernbausteine umgesetzt: HTML, HTTP und URL – dazu den ersten Webserver, den ersten Browser und den ersten Editor. Im März 1991 stand die Software CERN-Kollegen zur Verfügung, im August 1991 kündigte er sie in Internet-Newsgroups an.",
    "folgen": "Am 30. April 1993 stellte das CERN die Web-Software gemeinfrei. Später folgte eine Freigabe unter einer offenen Lizenz, um die Verbreitung sicherer zu maximieren. Diese Entscheidung – die Offenheit als Grundhaltung des Labors – gilt als entscheidender Schritt für die Ausbreitung des Webs.",
    "strittig": "Web und Internet werden häufig verwechselt. Das Internet als Netzverbund ist deutlich älter; das Web ist ein Dienst darauf. Ob eine kommerzielle Verwertung die Entwicklung gebremst hätte, lässt sich nicht beweisen – dass die Freigabe sie beschleunigte, gilt als unstrittig.",
    "zahlen": [
      {
        "wert": "März 1989",
        "was": "erster Entwurf von Tim Berners-Lee"
      },
      {
        "wert": "Weihnachten 1989",
        "was": "HTML, HTTP, URL, Server, Browser und Editor umgesetzt"
      },
      {
        "wert": "30. April 1993",
        "was": "CERN stellt die Software gemeinfrei"
      }
    ],
    "quellen": [
      "CERN: A short history of the Web; Web@30",
      "W3C: The original proposal of the WWW",
      "Encyclopaedia Britannica: Tim Berners-Lee"
    ]
  },
{
  "id": "ashoka",
  "titel": "Ashoka und die Umkehr nach Kalinga",
  "epoche": "antike",
  "jahr": -260,
  "zeitraum": "ca. 265–238 v. Chr.",
  "region": "Indischer Subkontinent",
  "leitsatz": "Ein Herrscher gewinnt einen Krieg und zieht daraus den Schluss, dass Eroberung durch Gewalt falsch ist – und lässt diesen Schluss in Stein hauen.",
  "vorgeschichte": "Das Maurya-Reich war das erste Großreich des Subkontinents. Ashokas Regierungszeit wird auf etwa 265–238 v. Chr. datiert, in anderer Zählung auf 273–232 v. Chr.",
  "verlauf": "Das erste große Ereignis seiner Herrschaft war der Feldzug gegen Kalinga 260 v. Chr., den er selbst in einem Edikt beschreibt. Das Leid, das daraus folgte, brachte ihn dazu, den Gedanken der Eroberung durch Gewalt neu zu bewerten; nach und nach wandte er sich dem Buddhismus zu. Etwa zwölf Jahre nach seinem Regierungsantritt begann er, in regelmäßigen Abständen Edikte zu erlassen – mündlich verkündet und in Felsen und Säulen graviert, damit sie erreichbar blieben.",
  "folgen": "Ashoka bestimmte die Grundsätze seines dhamma als Gewaltlosigkeit, Duldung aller Richtungen und Meinungen, Achtung vor den Eltern, Respekt vor religiösen Lehrern, Freigebigkeit gegenüber Freunden, menschliche Behandlung von Dienenden und Großzügigkeit gegenüber allen. Seine Förderung des Buddhismus trug wesentlich zu dessen Ausbreitung über Indien hinaus bei. Die Edikte sind zugleich die frühesten datierbaren Schriftzeugnisse Indiens.",
  "strittig": "Wie tief die Umkehr ging, ist umstritten: Ashoka gab die Eroberungen nicht zurück und behielt Heer und Todesstrafe. Der Begriff dhamma selbst entzieht sich der einfachen Übersetzung – er kann Weltordnung, Sozialordnung, Frömmigkeit oder Rechtschaffenheit meinen, und Buddhisten verstanden darunter die Lehre des Buddha.",
  "zahlen": [
    {
      "wert": "260 v. Chr.",
      "was": "Feldzug gegen Kalinga"
    },
    {
      "wert": "ca. 265–238 v. Chr.",
      "was": "Regierungszeit, in anderer Zählung 273–232"
    },
    {
      "wert": "ca. 12 Jahre",
      "was": "nach Regierungsantritt beginnen die Edikte"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: Ashoka; India – Ashoka's edicts; Kalinga; Mauryan empire"
  ]
},
{
  "id": "qin-einigung",
  "titel": "Die Einigung Chinas",
  "epoche": "antike",
  "jahr": -221,
  "zeitraum": "221–207 v. Chr.",
  "region": "China",
  "leitsatz": "Eine Dynastie hielt fünfzehn Jahre – der Verwaltungsrahmen, den sie schuf, über zweitausend.",
  "vorgeschichte": "Jahrhundertelang hatten sich die Streitenden Reiche bekriegt. Der Staat Qin setzte auf den Legalismus, eine Lehre vom starken Zentralstaat und von harten Strafen für Ungehorsam.",
  "verlauf": "221 v. Chr. einte der Herrscher von Qin ganz China unter sich als Qin Shihuangdi, 'Erster erhabener Kaiser von Qin'. Unter ihm wurden Schrift, Maße, Gewichte und sogar die Spurbreite der Wagen vereinheitlicht; die Normierung der Schriftzeichen betrieb der Staatsmann Li Si. Mehrere hunderttausend Menschen wurden eingesetzt, um die im Norden bestehenden Schutzwälle zu verbinden – daraus entstand, was heute die Chinesische Mauer heißt.",
  "folgen": "Die Qin-Dynastie hielt nur bis 207 v. Chr. Ihre Einrichtungen aber – ein zentral verwalteter Beamtenstaat, eine einheitliche Schrift über Dialektgrenzen hinweg, genormte Maße – überdauerten sie um Jahrtausende und prägen den chinesischen Staat bis heute.",
  "strittig": "Die Überlieferung stammt weitgehend von der nachfolgenden Han-Dynastie, die ein Interesse daran hatte, den Vorgänger als grausam darzustellen. Wie viel an den Berichten über Bücherverbrennung und Gelehrtenmord historisch ist, wird bis heute diskutiert.",
  "zahlen": [
    {
      "wert": "221 v. Chr.",
      "was": "Einigung Chinas"
    },
    {
      "wert": "221–207 v. Chr.",
      "was": "Dauer der Qin-Dynastie – 15 Jahre"
    },
    {
      "wert": "mehrere hunderttausend",
      "was": "Arbeitskräfte für die Verbindung der Schutzwälle"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: Qin dynasty; Qin Shi Huang; China – The Qin empire 221–207 bce; Li Si; Chinese languages – Qin dynasty standardization"
  ]
},
{
  "id": "kreuzzuege",
  "titel": "Die Kreuzzüge",
  "epoche": "mittelalter",
  "jahr": 1095,
  "zeitraum": "1095–13. Jahrhundert",
  "region": "Europa, Levante, Byzanz",
  "leitsatz": "Der vierte Kreuzzug eroberte keine muslimische Stadt, sondern plünderte die größte christliche.",
  "vorgeschichte": "Papst Urban II. rief 1095 auf dem Konzil von Clermont die französischen Ritter auf, den Christen im Osten gegen die muslimischen Türken beizustehen und das Heilige Land zurückzugewinnen.",
  "verlauf": "Der Erste Kreuzzug dauerte von 1096 bis 1099 und endete mit der Einnahme Jerusalems; es entstanden christliche Staaten in Palästina und Syrien. Der wachsende Druck islamischer Staaten machte diese Gewinne später wieder zunichte. Der Vierte Kreuzzug, von Papst Innozenz III. angestoßen, begann 1202 und sollte Jerusalem zurückgewinnen – er wurde nach Konstantinopel umgeleitet. Im April 1204 eroberten und plünderten die Kreuzfahrer die Stadt.",
  "folgen": "Die Plünderung von 1204 gilt weithin als ein von Habgier getriebener Verrat; sie schwächte das Byzantinische Reich erheblich und zersplitterte die christlichen Kräfte. Bereits der Erste Kreuzzug hatte 1096 zu Massakern an Juden in mehreren rheinischen Städten geführt – ein Wendepunkt in der Geschichte des Antisemitismus.",
  "strittig": "Ob die Kreuzzüge vor allem religiös, ökonomisch oder machtpolitisch motiviert waren, wird seit Langem diskutiert. Ebenso, wie stark sie den Austausch zwischen Europa und der islamischen Welt förderten – dieser lief zu großen Teilen über Sizilien und Spanien, nicht über die Kreuzfahrerstaaten.",
  "zahlen": [
    {
      "wert": "1095",
      "was": "Aufruf Urbans II. in Clermont"
    },
    {
      "wert": "1099",
      "was": "Einnahme Jerusalems"
    },
    {
      "wert": "April 1204",
      "was": "Plünderung Konstantinopels im Vierten Kreuzzug"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: Crusades; First Crusade; Fourth Crusade; Urban II"
  ]
},
{
  "id": "mali-reich",
  "titel": "Das Reich von Mali",
  "epoche": "mittelalter",
  "jahr": 1324,
  "zeitraum": "13.–15. Jahrhundert",
  "region": "Westafrika",
  "leitsatz": "Eine einzige Pilgerreise machte Europa und Nordafrika schlagartig bewusst, wo das Gold herkam.",
  "vorgeschichte": "Das Reich von Mali kontrollierte große Gold- und Kupferregionen sowie Salzminen und beherrschte die transsaharischen Handelswege – jene Routen, über die westafrikanisches Gold seit dem 7. Jahrhundert nach Norden gelangte.",
  "verlauf": "1324 pilgerte Mansa Musa nach Mekka. Die Überlieferung berichtet von einer Karawane mit 60.000 Mann und 80 Kamelen, jedes mit rund 300 Pfund Gold beladen. In Kairo soll seine Ankunft mit einer Tonne Gold den dortigen Goldmarkt zum Einbrechen gebracht haben – was zugleich zeigt, wie klein das übliche Angebot war.",
  "folgen": "Die Reise war ein Akt der Zugehörigkeit zur islamischen Welt und machte den Reichtum Malis international bekannt. Mansa Musa ließ in Timbuktu die Große Moschee (Djinguereber) und eine königliche Residenz errichten. Im 14. Jahrhundert blühte die Stadt als Umschlagplatz des transsaharischen Gold- und Salzhandels und wurde ein Zentrum islamischer Gelehrsamkeit.",
  "strittig": "Die überlieferten Zahlen zur Karawane stammen aus späteren arabischen Berichten und sind wahrscheinlich überhöht. Die moderne Rede vom 'reichsten Menschen aller Zeiten' beruht auf Umrechnungen, die Fachleute für nicht seriös halten.",
  "zahlen": [
    {
      "wert": "1324",
      "was": "Pilgerreise Mansa Musas nach Mekka"
    },
    {
      "wert": "60.000 Mann, 80 Kamele",
      "was": "überlieferte Größe der Karawane"
    },
    {
      "wert": "Djinguereber",
      "was": "Große Moschee von Timbuktu, nach der Rückkehr errichtet"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: Mūsā I of Mali; Mali empire; Timbuktu",
    "The Metropolitan Museum of Art: The Trans-Saharan Gold Trade (7th–14th Century)"
  ]
},
{
  "id": "renaissance",
  "titel": "Die Renaissance",
  "epoche": "fruehe-neuzeit",
  "jahr": 1400,
  "zeitraum": "14.–16. Jahrhundert",
  "region": "Italien, dann Europa",
  "leitsatz": "Nicht die Antike war neu, sondern der Blick auf sie – und das Geld, das ihn finanzierte.",
  "vorgeschichte": "Im 15. Jahrhundert war die italienische Halbinsel in unabhängige Stadtstaaten geteilt, teils Republiken, teils von einer Familie beherrschte signorie. Der wirtschaftliche Reichtum und die frühkapitalistische Entwicklung Mittel- und Norditaliens ermöglichten Mäzenatentum, höhere Lesefähigkeit – und eine neue Art, die Welt anzusehen.",
  "verlauf": "Zuerst zeigte sich der neue Geist im Humanismus, einer Bewegung, die nicht von gelehrten Klerikern ausging, sondern von weltlichen Literaten. Ihre Grundsätze: Der Mensch ist der erste Gegenstand des Studiums, alle Philosophien und Theologien haben eine gemeinsame Grundlage, und jedem Menschen kommt eine eigene Würde zu. Die Kaufmannsförderung der Künste ermöglichte die Hochrenaissance in Malerei, Bildhauerei und Architektur.",
  "folgen": "Die Druckerpresse ließ antikes und neues Wissen rasch durch Europa wandern; der Humanismus verbreitete sich nach Norden. Der Buchdruck war es auch, der aus einem Gelehrtenstreit wenig später die Reformation machte.",
  "strittig": "Der Begriff selbst stammt aus dem 19. Jahrhundert und trägt eine Wertung: Er unterstellt, das Mittelalter sei eine Unterbrechung gewesen. Die Forschung betont heute die Kontinuitäten – Universitäten, Rechtswissenschaft und antike Überlieferung waren nie verschwunden, vieles kam über die islamische Welt zurück.",
  "zahlen": [
    {
      "wert": "15. Jhd.",
      "was": "Höhepunkt in den italienischen Stadtstaaten"
    },
    {
      "wert": "3 Grundsätze",
      "was": "des Humanismus: Mensch als Gegenstand, Einheit der Lehren, Würde des Einzelnen"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: Renaissance; Renaissance – Causes and Effects; History of Europe – The Italian Renaissance; Italy – The early Italian Renaissance"
  ]
},
{
  "id": "aufklaerung",
  "titel": "Die Aufklärung",
  "epoche": "industrialisierung",
  "jahr": 1750,
  "zeitraum": "17. und 18. Jahrhundert",
  "region": "Europa und Nordamerika",
  "leitsatz": "Der entscheidende Satz war nicht, dass die Vernunft alles erklärt – sondern dass sich alles der Prüfung stellen muss, auch sie selbst.",
  "vorgeschichte": "Die wissenschaftliche Revolution hatte gezeigt, dass sich Naturvorgänge mathematisch beschreiben lassen. Zugleich hatten Konfessionskriege den Anspruch geistlicher Autoritäten beschädigt.",
  "verlauf": "Die Bewegung gewann im 17. und 18. Jahrhundert die Mehrheit der europäischen Denker – Thomas Paine nannte die Zeit das Zeitalter der Vernunft. Kant sah das Wesentliche der Aufklärung in der Befreiung von Aberglaube und Unwissenheit und formulierte in der Kritik: Unser Zeitalter sei das Zeitalter der Kritik, der sich alles unterwerfen müsse. Die große französische Encyclopédie, herausgegeben von Diderot und d'Alembert, fasste die wissenschaftlichen und humanistischen Leistungen des Jahrhunderts nahezu vollständig zusammen.",
  "folgen": "Wenn jeder selbst herausfinden kann, was gilt, wozu braucht es dann politische oder religiöse Autoritäten, die es vorschreiben? Diese Frage untergrub die absolute Macht von Monarchen und Kirche und wirkte auf die amerikanische wie die französische Revolution.",
  "strittig": "Noch zu Kants Lebzeiten wurde der Geist der Aufklärung von romantischen Idealisten zurückgewiesen, ihr Vertrauen in das menschliche Gespür für Recht und Gut vom revolutionären Terror verspottet und ihr Rationalismus als selbstzufrieden oder unmenschlich gescholten. Diese Kritik begleitet die Aufklärung seither – und stammt teils von ihren eigenen Erben.",
  "zahlen": [
    {
      "wert": "17./18. Jhd.",
      "was": "Zeitraum der Bewegung"
    },
    {
      "wert": "Encyclopédie",
      "was": "Diderot und d'Alembert – Kompendium des Jahrhunderts"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: The Enlightenment – Causes and Effects; History of Europe – The Enlightenment",
    "Stanford Encyclopedia of Philosophy: Immanuel Kant"
  ]
},
{
  "id": "zweiter-weltkrieg",
  "titel": "Der Zweite Weltkrieg",
  "epoche": "moderne",
  "jahr": 1939,
  "zeitraum": "1939–1945",
  "region": "weltweit",
  "leitsatz": "Der tödlichste Krieg der Geschichte – und in ihm starben mehr Zivilisten als Soldaten.",
  "vorgeschichte": "Politische und wirtschaftliche Instabilität in Deutschland, verbunden mit der Verbitterung über die Niederlage von 1918 und die Bedingungen des Versailler Vertrags, ermöglichten Hitler und der NSDAP den Aufstieg zur Macht. Ab Mitte der 1930er Jahre rüstete Hitler das Land heimlich und vertragswidrig auf. Großbritannien und Frankreich ließen Hitler und Mussolini gewähren, in der Hoffnung, diese Politik des Appeasement werde einen weiteren Krieg verhindern.",
  "verlauf": "Der Krieg zog fast alle Weltregionen hinein und wurde in Europa, Nordafrika, Asien und dem Pazifik geführt. Die Schätzungen der Gesamttoten reichen von 35 bis 60 Millionen; verbreitet sind Angaben von 40 bis 50 Millionen. Für Europa allein werden 15 bis 20 Millionen genannt – mehr als doppelt so viele wie im Ersten Weltkrieg.",
  "folgen": "Die zivilen Todesfälle durch Landkämpfe, Bombardierung, politische und rassistische Morde, kriegsbedingte Krankheit und Hunger sowie versenkte Schiffe übertrafen die Gefechtsverluste wahrscheinlich. Die schwersten anteiligen Verluste trafen Osteuropa: Polen verlor vielleicht 20 Prozent seiner Vorkriegsbevölkerung, Jugoslawien und die Sowjetunion je rund 10 Prozent.",
  "strittig": "Für die Sowjetunion und China, die beiden Länder mit den zweifellos höchsten Verlusten, gibt es keine verlässlichen Zahlen. Die weite Spanne der Gesamtschätzungen ist kein Streit über die Größenordnung, sondern Ausdruck fehlender Erhebungen in genau den Regionen, die am schwersten getroffen wurden.",
  "zahlen": [
    {
      "wert": "35–60 Mio.",
      "was": "Spanne der Schätzungen für die Gesamtzahl der Toten"
    },
    {
      "wert": "15–20 Mio.",
      "was": "Tote allein in Europa"
    },
    {
      "wert": "ca. 20 %",
      "was": "Bevölkerungsverlust Polens"
    }
  ],
  "quellen": [
    "Encyclopaedia Britannica: World War II; Casualties of World War II; World War II – Costs of the war; History of Europe – The blast of World War II"
  ]
},
{
  "id": "holocaust",
  "titel": "Der Holocaust",
  "epoche": "moderne",
  "jahr": 1941,
  "zeitraum": "1933–1945, systematischer Mord ab 1941",
  "region": "Deutschland und das besetzte Europa",
  "leitsatz": "Der bestdokumentierte Völkermord der Geschichte – dokumentiert von den Tätern selbst.",
  "vorgeschichte": "Nach 1933 entrechtete das NS-Regime die jüdische Bevölkerung Schritt für Schritt: Berufsverbote, Nürnberger Gesetze, Enteignung, Pogrome. Die Ausgrenzung war Jahre vor dem Mord staatliche Politik und öffentlich sichtbar.",
  "verlauf": "Der Holocaust war die systematische, bürokratisch organisierte, staatlich betriebene Verfolgung und Ermordung von sechs Millionen Jüdinnen und Juden durch das NS-Regime und seine Helfer – zwei Dritteln der jüdischen Bevölkerung Europas. Im September 1941 wurde in Auschwitz erstmals mit dem Giftgas Zyklon B gemordet. Am 20. Januar 1942 versammelten sich fünfzehn hohe Partei- und Regierungsvertreter in einer Villa am Berliner Wannsee, um die Umsetzung dessen zu besprechen, was sie 'Endlösung der Judenfrage' nannten: die planmäßige Ermordung aller elf Millionen als jüdisch geltenden Menschen Europas. Danach begann die systematische Deportation aus ganz Europa in sechs Vernichtungslager auf besetztem polnischem Gebiet – Chelmno, Belzec, Sobibor, Treblinka, Auschwitz-Birkenau und Majdanek.",
  "folgen": "Ermordet wurde durch Vergasung, Erschießung, willkürliche Gewalt, Krankheit und Hunger. Neben Jüdinnen und Juden wurden Sinti und Roma, Menschen mit Behinderungen, politische Gegner, Homosexuelle, Zeugen Jehovas und sowjetische Kriegsgefangene verfolgt und ermordet.",
  "strittig": "Hier ist nichts strittig, was die Tat betrifft. Der Holocaust ist der am besten dokumentierte Fall eines Völkermords; die Belege stammen zu großen Teilen aus deutschen Akten. Nur eine umfassende statistische Untersuchung im Auftrag Himmlers überstand den Krieg, eine Kopie wurde 1945 von der US-Armee erbeutet. Was Forschung diskutiert, sind Fragen der Entscheidungswege und der Datierung einzelner Schritte – nicht das Geschehen selbst.",
  "zahlen": [
    {
      "wert": "6.000.000",
      "was": "ermordete Jüdinnen und Juden – zwei Drittel der jüdischen Bevölkerung Europas"
    },
    {
      "wert": "20. Januar 1942",
      "was": "Wannsee-Konferenz"
    },
    {
      "wert": "11 Mio.",
      "was": "Zahl der dort für die Ermordung erfassten Menschen"
    },
    {
      "wert": "6",
      "was": "Vernichtungslager auf besetztem polnischem Gebiet"
    }
  ],
  "quellen": [
    "United States Holocaust Memorial Museum: The Final Solution; Documenting Numbers of Victims; Evidence and Documentation of the Holocaust",
    "Yad Vashem: The Wannsee Conference",
    "Encyclopaedia Britannica: Holocaust; Final Solution"
  ]
}
];


/* =========================================================
   SPEICHER

   Historia hat bisher nichts gespeichert: Quizfortschritt und
   Lesestand gingen bei jedem Neuladen verloren. Alles liegt im
   localStorage dieses Browsers, unter dem Präfix "historia.".
   ========================================================= */

const SPEICHER_PRAEFIX = "historia.";

function speicherLesen(schluessel, ersatz) {
  try {
    const roh = localStorage.getItem(SPEICHER_PRAEFIX + schluessel);
    if (roh === null) return ersatz;
    const wert = JSON.parse(roh);
    // Form prüfen: beschädigte Daten dürfen die App nicht umwerfen
    if (Array.isArray(ersatz) && !Array.isArray(wert)) return ersatz;
    if (ersatz && typeof ersatz === "object" && !Array.isArray(ersatz) && (typeof wert !== "object" || wert === null || Array.isArray(wert))) return ersatz;
    return wert;
  } catch (e) {
    return ersatz;
  }
}

function speicherSchreiben(schluessel, wert) {
  try {
    localStorage.setItem(SPEICHER_PRAEFIX + schluessel, JSON.stringify(wert));
    return true;
  } catch (e) {
    return false;
  }
}

// Zustand, der zwischen Sitzungen erhalten bleibt
function useGespeichert(schluessel, anfangswert) {
  const [wert, setWert] = useState(() => speicherLesen(schluessel, anfangswert));
  const setzen = (neu) => {
    const ergebnis = typeof neu === "function" ? neu(wert) : neu;
    setWert(ergebnis);
    speicherSchreiben(schluessel, ergebnis);
  };
  return [wert, setzen];
}

/* =========================================================
   VERTIEFUNGEN
   ========================================================= */

const Layers = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 2.5 8 12 13l9.5-5L12 3z" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 16 12 21l9.5-5" }), /* @__PURE__ */ React.createElement("path", { d: "M2.5 12 12 17l9.5-5" }));

function VertiefungAbschnitt({ titel, text }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mb-5" },
    /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, titel),
    /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, text)
  );
}

function VertiefungDetail({ eintrag, onBack, gelesen, toggleGelesen }) {
  const epoche = EPOCHS.find((e) => e.id === eintrag.epoche);
  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("button", {
      onClick: onBack,
      className: "flex items-center gap-1.5 text-[#c9a877] hover:text-[#f0d878] mb-4 text-sm"
    }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), "Zurück zu allen Vertiefungen"),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" },
      /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, eintrag.zeitraum),
      epoche && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, epoche.name),
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, eintrag.region)
    ),
    /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-2xl md:text-3xl text-[#f0d878] mb-3" }, eintrag.titel),
    /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] italic leading-relaxed border-l-2 border-[#d4af37] pl-4 mb-6" }, eintrag.leitsatz),

    eintrag.zahlen && eintrag.zahlen.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-2 mb-6" },
      eintrag.zahlen.map((z, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2" },
        /* @__PURE__ */ React.createElement("div", { className: "font-mono text-sm text-[#f0d878]" }, z.wert),
        /* @__PURE__ */ React.createElement("div", { className: "text-xs text-[#b8905a] leading-snug" }, z.was)
      ))
    ),

    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Vorgeschichte", text: eintrag.vorgeschichte }),
    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Verlauf", text: eintrag.verlauf }),
    /* @__PURE__ */ React.createElement(VertiefungAbschnitt, { titel: "Folgen", text: eintrag.folgen }),

    /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-lg border border-[#7a3020] bg-[#5c1a1e] p-4" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-1.5" }, "Was strittig ist"),
      /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed" }, eintrag.strittig)
    ),

    /* @__PURE__ */ React.createElement("div", { className: "mt-6 pt-4 border-t border-[#5c2018]" },
      /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-1.5" }, "Quellen"),
      /* @__PURE__ */ React.createElement("ul", { className: "text-xs text-[#b8905a] leading-relaxed" },
        eintrag.quellen.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, "· ", q))
      )
    ),

    /* @__PURE__ */ React.createElement("button", {
      onClick: () => toggleGelesen(eintrag.id),
      className: `mt-5 flex items-center gap-2 px-3 py-2 rounded text-sm border ${gelesen ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a] hover:text-[#e0b84a]"}`
    }, /* @__PURE__ */ React.createElement(Check, { size: 15 }), gelesen ? "Gelesen" : "Als gelesen merken")
  );
}

function VertiefungenTab() {
  const [offen, setOffen] = useState(null);
  const [epochenFilter, setEpochenFilter] = useState("Alle");
  const [suche, setSuche] = useState("");
  const [gelesen, setGelesen] = useGespeichert("vertiefungen.gelesen", []);

  const toggleGelesen = (id) => setGelesen((bisher) => bisher.includes(id) ? bisher.filter((x) => x !== id) : [...bisher, id]);

  if (offen) {
    const eintrag = VERTIEFUNGEN.find((v) => v.id === offen);
    if (eintrag) {
      return /* @__PURE__ */ React.createElement(VertiefungDetail, {
        eintrag,
        onBack: () => setOffen(null),
        gelesen: gelesen.includes(eintrag.id),
        toggleGelesen
      });
    }
  }

  const q = suche.trim().toLowerCase();
  const gefiltert = VERTIEFUNGEN.filter((v) => {
    const passtEpoche = epochenFilter === "Alle" || v.epoche === epochenFilter;
    const passtSuche = !q || (v.titel + " " + v.leitsatz + " " + v.region + " " + v.zeitraum).toLowerCase().includes(q);
    return passtEpoche && passtSuche;
  });

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      VERTIEFUNGEN.length, " ausführliche Darstellungen großer Wendepunkte — mit Vorgeschichte, Verlauf, Folgen und dem, was die Forschung offen lässt."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-4 max-w-2xl" },
      "Jeder Artikel nennt seine Quellen. Wo Zahlen Schätzungen sind, steht das dabei."),

    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3 rounded border border-[#5c2018] bg-[#5c1a1e] px-2.5 py-1.5 max-w-md" },
      /* @__PURE__ */ React.createElement(Search, { size: 15, className: "text-[#8a6238]" }),
      /* @__PURE__ */ React.createElement("input", {
        value: suche,
        onChange: (e) => setSuche(e.target.value),
        placeholder: "Suchen …",
        className: "bg-transparent text-sm text-[#e8d5b0] placeholder-[#8a6238] focus:outline-none flex-1"
      })
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" },
      ["Alle", ...EPOCHS.map((e) => e.id)].map((id) => /* @__PURE__ */ React.createElement("button", {
        key: id,
        onClick: () => setEpochenFilter(id),
        className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${epochenFilter === id ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
      }, id === "Alle" ? "Alle" : (EPOCHS.find((e) => e.id === id) || {}).name))
    ),

    gefiltert.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#b8905a] text-sm" }, "Nichts gefunden."),

    /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" },
      gefiltert.map((v) => {
        const epoche = EPOCHS.find((e) => e.id === v.epoche);
        const istGelesen = gelesen.includes(v.id);
        return /* @__PURE__ */ React.createElement("button", {
          key: v.id,
          onClick: () => setOffen(v.id),
          className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 hover:border-[#d4af37] transition-colors"
        },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" },
            /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-[#d4af37]" }, v.zeitraum),
            epoche && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, epoche.name),
            istGelesen && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#f0d878] border border-[#d4af37] rounded px-1.5 py-0.5" }, "gelesen")
          ),
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, v.titel),
          /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, v.leitsatz),
          /* @__PURE__ */ React.createElement("span", { className: "mt-2 inline-flex items-center gap-1 text-xs text-[#8a6238]" }, "Lesen ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 12 }))
        );
      })
    ),

    gelesen.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "mt-6 text-xs text-[#8a6238]" },
      gelesen.length, " von ", VERTIEFUNGEN.length, " gelesen. Der Stand bleibt in diesem Browser gespeichert.")
  );
}


/* =========================================================
   FORSCHUNGSFRAGEN

   Historia kann nicht recherchieren – die App liegt als Datei auf einem
   Webspace. Was sie kann: Fragen sammeln, damit sie nicht verlorengehen.
   Fragenliste sichern, in raw/inbox/ des Second Brain legen, Claude
   beantwortet sie mit Quellen, Antwortdatei hier wieder einlesen.
   ========================================================= */

const FRAGEN_KENNUNG = "historia-fragen";
const ANTWORTEN_KENNUNG = "historia-antworten";

function heuteISO() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function fragenKennung() {
  return "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function baueFragendatei(fragen) {
  const offen = fragen.filter((f) => f.status !== "beantwortet");
  return {
    kennung: FRAGEN_KENNUNG,
    version: 1,
    app: "Historia",
    erstellt: new Date().toISOString(),
    hinweis: "Diese Datei in raw/inbox/ des Second Brain legen. Claude beantwortet die Fragen mit Quellenangabe und legt eine Antwortdatei zurück.",
    fragen: offen.map((f) => ({ id: f.id, frage: f.frage, kontext: f.kontext || "", gestellt: f.gestellt }))
  };
}

function pruefeAntwortdatei(objekt) {
  const fehler = [];
  if (!objekt || typeof objekt !== "object" || Array.isArray(objekt)) {
    return { gueltig: false, fehler: ["Die Datei enthält keine lesbaren Daten."] };
  }
  if (objekt.kennung !== ANTWORTEN_KENNUNG) fehler.push("Das ist keine Antwortdatei für Historia.");
  if (!Array.isArray(objekt.antworten) || objekt.antworten.length === 0) {
    fehler.push("In der Datei stehen keine Antworten.");
  } else {
    objekt.antworten.forEach((a, i) => {
      if (!a || typeof a.id !== "string") fehler.push("Antwort " + (i + 1) + " hat keine Zuordnung.");
      else if (typeof a.antwort !== "string" || !a.antwort.trim()) fehler.push("Antwort zu „" + a.id + "“ ist leer.");
    });
  }
  return { gueltig: fehler.length === 0, fehler };
}

function spieleAntwortenEin(fragen, datei) {
  const nachId = new Map(datei.antworten.map((a) => [a.id, a]));
  let zugeordnet = 0;
  const neu = fragen.map((f) => {
    const a = nachId.get(f.id);
    if (!a) return f;
    zugeordnet++;
    return {
      ...f,
      status: "beantwortet",
      antwort: String(a.antwort),
      quellen: Array.isArray(a.quellen) ? a.quellen.filter((q) => typeof q === "string") : [],
      beantwortet: typeof a.beantwortet === "string" ? a.beantwortet : heuteISO()
    };
  });
  return { fragen: neu, zugeordnet, ohneZuordnung: datei.antworten.length - zugeordnet };
}

function dateiHerunterladen(inhalt, name, typ) {
  const blob = new Blob([inhalt], { type: typ });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}

function FragenTab() {
  const [fragen, setFragen] = useGespeichert("fragen", []);
  const [frage, setFrage] = useState("");
  const [kontext, setKontext] = useState("");
  const [meldung, setMeldung] = useState(null);
  const [fehler, setFehler] = useState([]);
  const [aufgeklappt, setAufgeklappt] = useState({});

  const offene = fragen.filter((f) => f.status !== "beantwortet");
  const beantwortete = fragen.filter((f) => f.status === "beantwortet");

  const hinzufuegen = () => {
    const t = frage.trim();
    if (!t) return;
    setFragen([{ id: fragenKennung(), frage: t, kontext: kontext.trim(), gestellt: heuteISO(), status: "offen" }, ...fragen]);
    setFrage(""); setKontext("");
    setMeldung({ gut: true, text: "Notiert." });
  };

  const exportieren = () => {
    const datei = baueFragendatei(fragen);
    if (datei.fragen.length === 0) { setMeldung({ gut: false, text: "Es sind keine offenen Fragen da." }); return; }
    dateiHerunterladen(JSON.stringify(datei, null, 2), "fragen-historia-" + heuteISO() + ".json", "application/json");
    setMeldung({ gut: true, text: datei.fragen.length + (datei.fragen.length === 1 ? " offene Frage" : " offene Fragen") + " gesichert. Leg die Datei in raw/inbox/ deines Second Brain." });
  };

  const antwortenGewaehlt = (ereignis) => {
    const datei = ereignis.target.files && ereignis.target.files[0];
    ereignis.target.value = "";
    if (!datei) return;
    setMeldung(null); setFehler([]);
    const leser = new FileReader();
    leser.onerror = () => setFehler(["Die Datei ließ sich nicht lesen."]);
    leser.onload = () => {
      let objekt;
      try { objekt = JSON.parse(String(leser.result)); }
      catch (e) { setFehler(["Das ist keine gültige JSON-Datei."]); return; }
      const pruefung = pruefeAntwortdatei(objekt);
      if (!pruefung.gueltig) { setFehler(pruefung.fehler); return; }
      const ergebnis = spieleAntwortenEin(fragen, objekt);
      setFragen(ergebnis.fragen);
      setMeldung({ gut: true, text: ergebnis.zugeordnet + (ergebnis.zugeordnet === 1 ? " Antwort" : " Antworten") + " eingelesen." + (ergebnis.ohneZuordnung > 0 ? " " + ergebnis.ohneZuordnung + " ließ sich keiner Frage zuordnen." : "") });
    };
    leser.readAsText(datei);
  };

  const knopf = "px-3 py-2 rounded text-sm border border-[#5c2018] text-[#e0b84a] hover:border-[#d4af37] disabled:opacity-40";
  const feld = "w-full rounded border border-[#5c2018] bg-[#5c1a1e] px-3 py-2 text-sm text-[#e8d5b0] placeholder-[#8a6238] focus:outline-none focus:border-[#d4af37]";

  return /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" },
      "Fragen, die beim Lesen entstehen und über das hinausgehen, was hier steht."),
    /* @__PURE__ */ React.createElement("p", { className: "text-[#8a6238] text-sm mb-5 max-w-2xl leading-relaxed" },
      "Die App recherchiert nicht selbst — sie sammelt. Sicher die Liste als Datei, leg sie in den Eingangskorb deines Second Brain, und Claude arbeitet sie mit Quellen ab. Die Antwortdatei liest du hier wieder ein; danach steht alles offline zur Verfügung."),

    meldung && /* @__PURE__ */ React.createElement("p", { className: "mb-4 text-sm " + (meldung.gut ? "text-[#9ad5b0]" : "text-[#e0b84a]") }, meldung.text),
    fehler.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mb-4 rounded border border-[#7a3020] bg-[#5c1a1e] p-3" },
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#e4a6a6] mb-1" }, "Nicht eingelesen:"),
      fehler.map((f, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-xs text-[#e4a6a6]" }, "· " + f))),

    /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4 mb-5 max-w-2xl" },
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-2" }, "Neue Frage"),
      /* @__PURE__ */ React.createElement("textarea", {
        value: frage, onChange: (e) => setFrage(e.target.value), rows: 2,
        placeholder: "z. B.: Warum brach das Weströmische Reich zusammen, das Oströmische aber nicht?",
        className: feld + " mb-2 resize-y"
      }),
      /* @__PURE__ */ React.createElement("input", {
        value: kontext, onChange: (e) => setKontext(e.target.value), type: "text",
        placeholder: "Woher kommt die Frage? (freiwillig)", className: feld + " mb-3"
      }),
      /* @__PURE__ */ React.createElement("button", { onClick: hinzufuegen, disabled: !frage.trim(), className: knopf }, "Frage notieren")
    ),

    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mb-6" },
      /* @__PURE__ */ React.createElement("button", { onClick: exportieren, disabled: offene.length === 0, className: knopf },
        "↓ Offene Fragen sichern" + (offene.length ? " (" + offene.length + ")" : "")),
      /* @__PURE__ */ React.createElement("label", { className: knopf + " cursor-pointer inline-block" },
        "↑ Antwortdatei einlesen",
        /* @__PURE__ */ React.createElement("input", { type: "file", accept: "application/json,.json", onChange: antwortenGewaehlt, className: "hidden" }))
    ),

    offene.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mb-8" },
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-2" }, "Offen (" + offene.length + ")"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" },
        offene.map((f) => /* @__PURE__ */ React.createElement("div", { key: f.id, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" },
          /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug" }, f.frage),
          f.kontext && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#b8905a] italic mt-1" }, f.kontext),
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mt-2" },
            /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-[#8a6238]" }, "notiert am " + f.gestellt),
            /* @__PURE__ */ React.createElement("button", { onClick: () => setFragen(fragen.filter((x) => x.id !== f.id)), className: "text-[11px] text-[#b8905a] underline hover:text-[#e0b84a]" }, "Löschen"))
        )))),

    beantwortete.length > 0 && /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[11px] uppercase tracking-widest text-[#8a6238] mb-2" }, "Beantwortet (" + beantwortete.length + ")"),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" },
        beantwortete.map((f) => {
          const auf = !!aufgeklappt[f.id];
          return /* @__PURE__ */ React.createElement("div", { key: f.id, className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" },
            /* @__PURE__ */ React.createElement("button", {
              onClick: () => setAufgeklappt({ ...aufgeklappt, [f.id]: !auf }),
              className: "text-left w-full font-serif text-lg text-[#e0b84a] leading-snug"
            }, (auf ? "▾ " : "▸ ") + f.frage),
            auf && /* @__PURE__ */ React.createElement("div", { className: "mt-3 pt-3 border-t border-[#5c2018]" },
              /* @__PURE__ */ React.createElement("p", { className: "text-[15px] text-[#e8d5b0] leading-relaxed whitespace-pre-wrap" }, f.antwort),
              f.quellen && f.quellen.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-3" },
                /* @__PURE__ */ React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-widest text-[#8a6238] mb-1" }, "Quellen"),
                f.quellen.map((q, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-xs text-[#b8905a]" }, "· " + q))),
              /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-[#8a6238] mt-3" }, "beantwortet am " + (f.beantwortet || "—")))
          );
        }))),

    fragen.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#b8905a] max-w-2xl leading-relaxed" },
      "Noch keine Frage notiert. Was beim Lesen offenbleibt oder was du genauer wissen willst, kommt hierher — und geht nicht verloren.")
  );
}

const NAV = [
  { id: "epochen", label: "Epochen", icon: BookOpen },
  { id: "vertiefungen", label: "Vertiefungen", icon: Layers },
  { id: "schluessel", label: "Schl\xFCsselmomente", icon: Zap },
  { id: "laender", label: "L\xE4nder-Zeitleisten", icon: Globe },
  { id: "schlachten", label: "Ber\xFChmte Schlachten", icon: Crown },
  { id: "zitate", label: "Zitate", icon: BookOpen },
  { id: "mythen", label: "Fun Facts & Mythen", icon: Sparkles },
  { id: "zahlenstrahl", label: "Zahlenstrahl", icon: Clock },
  { id: "personen", label: "Pers\xF6nlichkeiten", icon: Users },
  { id: "nationen", label: "Nationen & Reiche", icon: Crown },
  { id: "lernen", label: "Fakten & Jahreszahlen", icon: Sparkles },
  { id: "fragen", label: "Forschungsfragen", icon: HelpCircle },
  { id: "verblueffend", label: "Verbl\xFCffende Fakten", icon: Sparkles }
];
function formatYear(y) {
  if (y < 0) return `${Math.abs(y).toLocaleString("de-DE")} v. Chr.`;
  return `${y} n. Chr.`;
}
function Header({ tab, setTab }) {
  return /* @__PURE__ */ React.createElement("header", { className: "border-b border-[#5c2018] bg-[#4a1015]" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 pt-5 pb-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-3" }, /* @__PURE__ */ React.createElement("h1", { className: "font-serif text-2xl md:text-3xl text-[#e0b84a] tracking-tight" }, "Historia"), /* @__PURE__ */ React.createElement("span", { className: "text-[#b8905a] text-xs md:text-sm font-mono uppercase tracking-widest" }, "Steinzeit \u2014 Gegenwart"))), /* @__PURE__ */ React.createElement("nav", { className: "max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto no-scrollbar pb-2" }, NAV.map((n) => {
    const Icon2 = n.icon;
    const active = tab === n.id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: n.id,
        onClick: () => setTab(n.id),
        className: `flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-t-md text-sm font-medium transition-colors border-b-2 ${active ? "text-[#e0b84a] border-[#d4af37]" : "text-[#b8905a] border-transparent hover:text-[#d8c690]"}`
      },
      /* @__PURE__ */ React.createElement(Icon2, { size: 15 }),
      n.label
    );
  })));
}
function EpochCard({ ep, onOpen }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onOpen(ep.id),
      className: "text-left rounded-lg border border-[#5c2018] bg-[#5c1a1e] hover:bg-[#6b2024] transition-colors p-5 group",
      style: { borderLeft: `4px solid ${ep.color}` }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-1" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-xl text-[#e0b84a]" }, ep.name), /* @__PURE__ */ React.createElement(ChevronRight, { size: 18, className: "text-[#b8905a] group-hover:translate-x-1 transition-transform" })),
    /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-wider mb-2", style: { color: ep.accent } }, ep.span),
    /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c9a877] leading-relaxed" }, ep.lead),
    /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 mt-3 text-xs text-[#b8905a]" }, /* @__PURE__ */ React.createElement("span", null, ep.events.length, " Ereignisse"), /* @__PURE__ */ React.createElement("span", null, ep.figures.length, " Pers\xF6nlichkeiten"), /* @__PURE__ */ React.createElement("span", null, ep.nations.length, " Nationen"))
  );
}
function EpochDetail({ ep, onBack }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: onBack, className: "flex items-center gap-1.5 text-sm text-[#b8905a] hover:text-[#d8c690] mb-4" }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), " Zur\xFCck zur \xDCbersicht"), /* @__PURE__ */ React.createElement("div", { className: "mb-6", style: { borderLeft: `4px solid ${ep.color}`, paddingLeft: 16 } }, /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-3xl text-[#e0b84a]" }, ep.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs uppercase tracking-wider mb-3", style: { color: ep.accent } }, ep.span), /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] leading-relaxed max-w-3xl" }, ep.description)), /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Wichtigste Ereignisse (", ep.events.length, ")"), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l border-[#5c2018] ml-2 mb-8" }, ep.events.map((e, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-6 ml-5" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#4a1015]",
      style: { backgroundColor: ep.color }
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: ep.accent } }, formatYear(e.year)), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, e.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, e.text)))), ep.figures.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Pers\xF6nlichkeiten (", ep.figures.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-8" }, ep.figures.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, f.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs mb-1", style: { color: ep.accent } }, f.years), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, f.text))))), ep.nations.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, "Nationen & Reiche (", ep.nations.length, ")"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-8" }, ep.nations.map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, n.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, n.text))))), ep.dynastyGroups && ep.dynastyGroups.map((group, gi) => /* @__PURE__ */ React.createElement("div", { key: gi, className: "mb-8" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif text-lg text-[#e0b84a] mb-3" }, group.title), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, group.items.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${ep.accent}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, it.name), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, it.text)))))));
}
function EpochenTab() {
  const [openId, setOpenId] = useState(null);
  const ep = EPOCHS.find((e) => e.id === openId);
  if (ep) return /* @__PURE__ */ React.createElement(EpochDetail, { ep, onBack: () => setOpenId(null) });
  const totalEvents = EPOCHS.reduce((s, e) => s + e.events.length, 0);
  const totalFigures = EPOCHS.reduce((s, e) => s + e.figures.length, 0);
  const totalNations = EPOCHS.reduce((s, e) => s + e.nations.length, 0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-1 max-w-2xl" }, "Sieben Epochen, von der Steinzeit bis zur Gegenwart. W\xE4hle eine Epoche f\xFCr Ereignisse, Pers\xF6nlichkeiten und Nationen im Detail."), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-5 font-mono" }, totalEvents, " Ereignisse \xB7 ", totalFigures, " Pers\xF6nlichkeiten \xB7 ", totalNations, " Nationen & Reiche"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-4" }, EPOCHS.map((ep2) => /* @__PURE__ */ React.createElement(EpochCard, { key: ep2.id, ep: ep2, onOpen: setOpenId }))));
}
function SchluesselmomenteTab() {
  const [cat, setCat] = useState("Alle");
  const categories = ["Alle", ...Array.from(new Set(SCHLUESSELMOMENTE.map((m) => m.category)))];
  const filtered = SCHLUESSELMOMENTE.filter((m) => cat === "Alle" || m.category === cat).sort((a, b) => a.year - b.year);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" }, SCHLUESSELMOMENTE.length, " kuratierte Wendepunkte, die den Lauf der Geschichte grundlegend ver\xE4nderten \u2014 Momente, ohne die die Welt heute anders auss\xE4he."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCat(c),
      className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${cat === c ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    c
  ))), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l-2 border-[#5c2018] ml-2" }, filtered.map((m, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-8 ml-6" }, /* @__PURE__ */ React.createElement("span", { className: "absolute -left-[9px] w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#4a1015] flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Zap, { size: 9, className: "text-[#4a1015]" })), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-1 flex-wrap" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-[#d4af37]" }, formatYear(m.year)), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238] border border-[#5c2018] rounded px-1.5 py-0.5" }, m.category)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1" }, m.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, m.text))))));
}
function SchlachtenTab() {
  const sorted = [...BATTLES].sort((a, b) => a.year - b.year);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-5 max-w-2xl" }, BATTLES.length, " Schlachten, die den Ausgang von Kriegen und damit oft den Lauf der Geschichte entschieden haben."), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, sorted.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-[#d4af37] mb-1" }, formatYear(b.year)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a]" }, b.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, b.war), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, b.text)))));
}
function ZitateTab() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-5 max-w-2xl" }, QUOTES.length, " ber\xFChmte historische Zitate. Bei unsicherer oder legend\xE4rer \xDCberlieferung ist dies vermerkt."), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, QUOTES.map((q, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] leading-snug mb-2" }, "\u201E", q.text, '"'), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#d4af37] font-medium" }, q.author), (q.year || q.note) && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mt-0.5" }, [q.year, q.note].filter(Boolean).join(" \xB7 "))))));
}
function LaenderTab() {
  const countries = Object.keys(COUNTRY_TIMELINES);
  const [country, setCountry] = useState(countries[0]);
  const data = COUNTRY_TIMELINES[country];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-5 max-w-2xl" }, "Eigene chronologische Zeitleisten f\xFCr ausgew\xE4hlte L\xE4nder \u2014 quer durch alle Epochen hinweg."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, countries.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCountry(c),
      className: "px-3 py-1.5 rounded text-sm font-medium border",
      style: country === c ? { backgroundColor: "#5c1a1e", color: "#f0d878", borderColor: COUNTRY_TIMELINES[c].color } : { borderColor: "#5c2018", color: "#b8905a" }
    },
    c
  ))), /* @__PURE__ */ React.createElement("ol", { className: "relative border-l border-[#5c2018] ml-2" }, data.events.map((e, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mb-6 ml-5" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[#4a1015]",
      style: { backgroundColor: data.color }
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: data.color } }, formatYear(e.year)), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, e.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, e.text)))));
}
function MythenTab() {
  const [cat, setCat] = useState("Alle");
  const [typeFilter, setTypeFilter] = useState("Alle");
  const categories = ["Alle", ...Array.from(new Set(MYTHEN.map((m) => m.category)))];
  const types = ["Alle", ...Array.from(new Set(MYTHEN.map((m) => m.type)))];
  const filtered = MYTHEN.filter(
    (m) => (cat === "Alle" || m.category === cat) && (typeFilter === "Alle" || m.type === typeFilter)
  );
  const typeStyle = (t) => {
    if (t === "Mythos") return { backgroundColor: "#6b2024", color: "#e2a45c", borderColor: "#8a3020" };
    if (t === "Kuriosum") return { backgroundColor: "#3a2a0a", color: "#f0c869", borderColor: "#8a6238" };
    return { backgroundColor: "#3a1218", color: "#d8c690", borderColor: "#5c2018" };
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" }, MYTHEN.length, " entlarvte Mythen, \xFCberraschende Kuriosit\xE4ten und richtiggestellte Legenden der Geschichte \u2014 von der Antike bis in die Moderne."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-2" }, categories.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      onClick: () => setCat(c),
      className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${cat === c ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    c
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, types.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      onClick: () => setTypeFilter(t),
      className: `px-2.5 py-1 rounded text-xs font-medium border ${typeFilter === t ? "bg-[#5c1a1e] text-[#f0d878] border-[#e0b84a]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    t
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, filtered.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide border rounded px-1.5 py-0.5", style: typeStyle(m.type) }, m.type), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] uppercase tracking-wide text-[#8a6238]" }, m.category)), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a] mb-1 leading-snug" }, m.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, m.text))), filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#b8905a] text-sm" }, "Keine Treffer.")));
}
function scaleYear(y, min, max) {
  const clamp = (v) => Math.max(min, Math.min(max, v));
  y = clamp(y);
  const shift = -min + 1;
  const t = Math.log10(y + shift) / Math.log10(max + shift);
  return t * 100;
}
function ZahlenstrahlTab() {
  const [hover, setHover] = useState(null);
  const [epFilter, setEpFilter] = useState("alle");
  const minY = -26e5;
  const maxY = 2026;
  const allEvents = useMemo(
    () => EPOCHS.flatMap((ep) => ep.events.map((e) => ({ ...e, epochName: ep.name, color: ep.color }))).filter(
      (e) => epFilter === "alle" || e.epochName === epFilter
    ),
    [epFilter]
  );
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] mb-4 max-w-2xl" }, "Ein Zahlenstrahl \xFCber die gesamte Menschheitsgeschichte mit ", allEvents.length, " Ereignispunkten. Da die Steinzeit \xFCber 2,5 Millionen Jahre umfasst, ist die Skala logarithmisch \u2014 so bleiben auch die letzten Jahrhunderte gut lesbar."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-6" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setEpFilter("alle"),
      className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border ${epFilter === "alle" ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    "Alle"
  ), EPOCHS.map((ep) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: ep.id,
      onClick: () => setEpFilter(ep.name),
      className: `px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wide border`,
      style: epFilter === ep.name ? { backgroundColor: "#5c1a1e", color: "#f0d878", borderColor: ep.color } : { borderColor: "#5c2018", color: "#b8905a" }
    },
    ep.name
  ))), /* @__PURE__ */ React.createElement("div", { className: "relative h-[420px] md:h-[480px] mb-4 rounded-lg border border-[#5c2018] bg-[#4a1015] overflow-hidden" }, EPOCHS.map((ep) => {
    const left = scaleYear(ep.startYear, minY, maxY);
    const right = scaleYear(ep.endYear, minY, maxY);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: ep.id,
        className: "absolute top-0 bottom-8 opacity-20",
        style: { left: `${left}%`, width: `${right - left}%`, backgroundColor: ep.color }
      }
    );
  }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-8 left-0 right-0 h-px bg-[#7a3020]" }), allEvents.map((e, i) => {
    const left = scaleYear(e.year, minY, maxY);
    const isHover = hover === i;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: i,
        className: "absolute bottom-8 -translate-x-1/2 cursor-pointer",
        style: { left: `${left}%` },
        onMouseEnter: () => setHover(i),
        onMouseLeave: () => setHover(null),
        onClick: () => setHover(isHover ? null : i)
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "w-2.5 h-2.5 rounded-full border border-[#4a1015] hover:scale-150 transition-transform",
          style: { backgroundColor: e.color }
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 h-6 w-px bg-[#7a3020]" }),
      isHover && /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-56 bg-[#6b2024] border border-[#5c2018] rounded-md p-3 shadow-xl z-20" }, /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs", style: { color: e.color } }, formatYear(e.year)), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a] text-sm" }, e.title), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#c2a06a] mt-1 leading-relaxed" }, e.text))
    );
  }), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-1 left-0 right-0 flex justify-between px-2 text-[10px] font-mono text-[#8a6238]" }, /* @__PURE__ */ React.createElement("span", null, "2,6 Mio. v. Chr."), /* @__PURE__ */ React.createElement("span", null, "10.000 v. Chr."), /* @__PURE__ */ React.createElement("span", null, "0"), /* @__PURE__ */ React.createElement("span", null, "1500"), /* @__PURE__ */ React.createElement("span", null, "Heute"))), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238]" }, "Tippe auf einen Punkt f\xFCr Details."));
}
function PersonenTab() {
  const [query, setQuery] = useState("");
  const all = useMemo(
    () => EPOCHS.flatMap((ep) => ep.figures.map((f) => ({ ...f, epochName: ep.name, color: ep.color }))),
    []
  );
  const filtered = all.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "relative mb-2 max-w-sm" }, /* @__PURE__ */ React.createElement(Search, { size: 15, className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8a6238]" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: query,
      onChange: (e) => setQuery(e.target.value),
      placeholder: "Person suchen\u2026",
      className: "w-full pl-9 pr-3 py-2 rounded-md bg-[#5c1a1e] border border-[#5c2018] text-[#e0b84a] text-sm placeholder-[#8a6238] focus:outline-none focus:border-[#d4af37]"
    }
  )), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-4 font-mono" }, all.length, " Pers\xF6nlichkeiten insgesamt"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, filtered.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${f.color}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, f.name), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs mb-1", style: { color: f.color } }, f.years), /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, f.epochName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, f.text))), filtered.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[#b8905a] text-sm" }, "Keine Treffer.")));
}
function NationenTab() {
  const all = EPOCHS.flatMap((ep) => ep.nations.map((n) => ({ ...n, epochName: ep.name, color: ep.color })));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-4 font-mono" }, all.length, " Nationen & Reiche"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, all.map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4", style: { borderLeft: `3px solid ${n.color}` } }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[#e0b84a]" }, n.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, n.epochName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#c2a06a] leading-relaxed" }, n.text)))));
}
function LernenTab() {
  const [mode, setMode] = useState("karten");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizYear, setQuizYear] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  // Sitzungsstand oben, Gesamtbilanz dauerhaft im Browser
  const [bilanz, setBilanz] = useGespeichert("lernen.bilanz", { richtig: 0, gesamt: 0 });
  const shuffled = useMemo(() => [...FACTS].sort(() => Math.random() - 0.5), []);
  const current = shuffled[idx % shuffled.length];
  function newQuizQuestion(i) {
    const fact = shuffled[i % shuffled.length];
    const distractors = [...FACTS].filter((f) => f.title !== fact.title).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [fact, ...distractors].sort(() => Math.random() - 0.5);
    setOptions(opts);
    setQuizYear(fact);
    setSelected(null);
  }
  React.useEffect(() => {
    if (mode === "quiz") newQuizQuestion(idx);
  }, [mode]);
  function nextCard() {
    setFlipped(false);
    setIdx((i) => i + 1);
  }
  function nextQuiz(correct) {
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    setBilanz({ richtig: bilanz.richtig + (correct ? 1 : 0), gesamt: bilanz.gesamt + 1 });
    setTimeout(() => {
      const next = idx + 1;
      setIdx(next);
      newQuizQuestion(next);
    }, 700);
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mb-4 font-mono" }, FACTS.length, " Jahreszahlen in der Datenbank"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 mb-6" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setMode("karten"),
      className: `px-3 py-1.5 rounded-md text-sm font-medium border ${mode === "karten" ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    "Karteikarten"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setMode("quiz"),
      className: `px-3 py-1.5 rounded-md text-sm font-medium border ${mode === "quiz" ? "bg-[#5c1a1e] text-[#f0d878] border-[#d4af37]" : "border-[#5c2018] text-[#b8905a]"}`
    },
    "Jahreszahlen-Quiz"
  )), mode === "karten" && /* @__PURE__ */ React.createElement("div", { className: "max-w-md" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: () => setFlipped((f) => !f),
      className: "cursor-pointer rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-8 h-56 flex flex-col items-center justify-center text-center select-none",
      style: { borderLeft: `4px solid ${current.color}` }
    },
    !flipped ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-3" }, current.epoch), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-xl text-[#e0b84a]" }, current.title), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238] mt-4" }, "Tippen zum Umdrehen")) : /* @__PURE__ */ React.createElement("p", { className: "font-mono text-3xl", style: { color: current.color } }, formatYear(current.year))
  ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mt-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238]" }, "Karte ", idx % shuffled.length + 1, " / ", shuffled.length), /* @__PURE__ */ React.createElement("button", { onClick: nextCard, className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#5c1a1e] text-[#f0d878] border border-[#d4af37] text-sm font-medium" }, "N\xE4chste ", /* @__PURE__ */ React.createElement(ChevronRight, { size: 15 })))), mode === "quiz" && quizYear && /* @__PURE__ */ React.createElement("div", { className: "max-w-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3 mb-2 flex-wrap" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[#8a6238]" }, "Diese Runde: ", score.correct, " / ", score.total, bilanz.gesamt > 0 ? " · insgesamt " + bilanz.richtig + " / " + bilanz.gesamt + " (" + Math.round(bilanz.richtig / bilanz.gesamt * 100) + " %)" : ""), bilanz.gesamt > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => setBilanz({ richtig: 0, gesamt: 0 }), className: "text-xs text-[#8a6238] underline hover:text-[#e0b84a]" }, "Bilanz zurücksetzen")), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-[#5c2018] bg-[#5c1a1e] p-6 mb-4" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs uppercase tracking-wide text-[#8a6238] mb-2" }, "In welchem Jahr geschah\u2026"), /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-[#e0b84a]" }, quizYear.title)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, options.map((o, i) => {
    const isCorrect = o.year === quizYear.year;
    const isSelected = selected !== null && o.year === selected;
    let cls = "border-[#5c2018] text-[#d8c690]";
    if (selected !== null) {
      if (isCorrect) cls = "border-green-600 bg-green-950 text-green-300";
      else if (isSelected) cls = "border-red-700 bg-red-950 text-red-300";
    }
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        disabled: selected !== null,
        onClick: () => {
          setSelected(o.year);
          nextQuiz(o.year === quizYear.year);
        },
        className: `px-3 py-3 rounded-md border font-mono text-sm flex items-center justify-center gap-1.5 ${cls}`
      },
      selected !== null && isCorrect && /* @__PURE__ */ React.createElement(Check, { size: 14 }),
      formatYear(o.year)
    );
  }))));
}
function VerblueffendTab() {
  const [shown, setShown] = useState(SURPRISING_FACTS.map((_, i) => i).sort(() => Math.random() - 0.5));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-5 gap-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-[#c9a877] max-w-xl" }, SURPRISING_FACTS.length, " kuriose, \xFCberraschende und wenig bekannte historische Zusammenh\xE4nge."), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShown([...shown].sort(() => Math.random() - 0.5)),
      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#5c2018] text-[#b8905a] text-sm hover:text-[#d8c690] shrink-0"
    },
    /* @__PURE__ */ React.createElement(RotateCcw, { size: 14 }),
    " Mischen"
  )), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-3" }, shown.map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "rounded-md border border-[#5c2018] bg-[#5c1a1e] p-4 flex gap-3" }, /* @__PURE__ */ React.createElement(Sparkles, { size: 16, className: "text-[#d4af37] shrink-0 mt-0.5" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[#d8c690] leading-relaxed" }, SURPRISING_FACTS[i])))));
}
function Historia() {
  // Der zuletzt geoeffnete Bereich bleibt ueber Sitzungen hinweg erhalten.
  const [tab, setTab] = useGespeichert("reiter", "epochen");
  React.useEffect(() => {
    document.documentElement.style.colorScheme = "dark";
    let meta = document.querySelector('meta[name="color-scheme"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "color-scheme";
      document.head.appendChild(meta);
    }
    meta.content = "dark";
  }, []);
  return /* @__PURE__ */ React.createElement("div", { id: "historia-root", className: "min-h-screen bg-[#4a1015] font-sans", style: { fontFamily: "'Source Sans 3', ui-sans-serif, system-ui" } }, /* @__PURE__ */ React.createElement("style", null, `
        @font-face { font-family: 'Source Sans 3'; font-style: normal; font-weight: 400 600; font-display: swap; src: url('./font-sourcesans3.woff2') format('woff2'); }
        @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 500 600; font-display: swap; src: url('./font-fraunces.woff2') format('woff2'); }
        @font-face { font-family: 'JetBrains Mono'; font-style: normal; font-weight: 400 500; font-display: swap; src: url('./font-jetbrains.woff2') format('woff2'); }
        html, body { background-color: #4a1015; color-scheme: dark; color: #f0e6c8; }
        #historia-root, #historia-root * { color-scheme: dark; }
        .font-serif { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `), /* @__PURE__ */ React.createElement(Header, { tab, setTab }), /* @__PURE__ */ React.createElement("main", { className: "max-w-6xl mx-auto px-4 py-6" }, tab === "epochen" && /* @__PURE__ */ React.createElement(EpochenTab, null), tab === "vertiefungen" && /* @__PURE__ */ React.createElement(VertiefungenTab, null), tab === "schluessel" && /* @__PURE__ */ React.createElement(SchluesselmomenteTab, null), tab === "laender" && /* @__PURE__ */ React.createElement(LaenderTab, null), tab === "schlachten" && /* @__PURE__ */ React.createElement(SchlachtenTab, null), tab === "zitate" && /* @__PURE__ */ React.createElement(ZitateTab, null), tab === "mythen" && /* @__PURE__ */ React.createElement(MythenTab, null), tab === "zahlenstrahl" && /* @__PURE__ */ React.createElement(ZahlenstrahlTab, null), tab === "personen" && /* @__PURE__ */ React.createElement(PersonenTab, null), tab === "nationen" && /* @__PURE__ */ React.createElement(NationenTab, null), tab === "lernen" && /* @__PURE__ */ React.createElement(LernenTab, null), tab === "fragen" && /* @__PURE__ */ React.createElement(FragenTab, null), tab === "verblueffend" && /* @__PURE__ */ React.createElement(VerblueffendTab, null)));
}

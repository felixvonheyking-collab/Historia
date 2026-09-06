/* =========================================================
   HISTORIA — DATEN: Laender- und Regionen-Zeitleisten

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

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
,
"Italien":{"color":"#2f6b4f","events":[{"year":-753,"title":"Sagenhafte Gründung Roms","text":"Die Überlieferung nennt dieses Jahr; archäologisch ist eine dauerhafte Siedlung auf dem Palatin bereits im 10. Jahrhundert v. Chr. nachweisbar."},{"year":-509,"title":"Vertreibung der Könige","text":"Rom wird Republik. Die Verfassung mit Konsuln, Senat und Volksversammlungen prägt europäisches Staatsdenken bis in die Neuzeit."},{"year":-146,"title":"Zerstörung Karthagos","text":"Nach drei Punischen Kriegen ist Rom unbestrittene Macht des westlichen Mittelmeers."},{"year":476,"title":"Absetzung des letzten weströmischen Kaisers","text":"Odoaker setzt Romulus Augustulus ab. Zeitgenossen empfanden das kaum als Epochenbruch – die Verwaltung lief weiter."},{"year":1077,"title":"Canossa","text":"Heinrich IV. tut vor Papst Gregor VII. in der Burg der Markgräfin Mathilde Buße – ein Höhepunkt des Investiturstreits auf italienischem Boden."},{"year":1204,"title":"Venedig lenkt den Kreuzzug um","text":"Die Republik bringt das Kreuzfahrerheer dazu, Konstantinopel zu plündern, und sichert sich das Handelsmonopol im östlichen Mittelmeer."},{"year":1348,"title":"Der Schwarze Tod erreicht Italien","text":"Über genuesische Schiffe kommt die Pest nach Europa. Boccaccios Decamerone entsteht als literarische Antwort auf die Katastrophe."},{"year":1401,"title":"Wettbewerb um die Bronzetüren von Florenz","text":"Ghiberti setzt sich gegen Brunelleschi durch – der Streit gilt als symbolischer Auftakt der Renaissance."},{"year":1494,"title":"Beginn der Italienischen Kriege","text":"Karl VIII. von Frankreich marschiert ein. Über sechzig Jahre wird Italien Schlachtfeld fremder Mächte – der Hintergrund von Machiavellis Denken."},{"year":1633,"title":"Prozess gegen Galilei","text":"Der Inquisitionsprozess endet mit Widerruf und Hausarrest. Erst 1992 erklärte die Kirche das Urteil offiziell für einen Fehler."},{"year":1861,"title":"Königreich Italien ausgerufen","text":"Nach Garibaldis Zug der Tausend und Cavours Diplomatie entsteht ein Nationalstaat. Rom kommt erst 1870 hinzu."},{"year":1922,"title":"Marsch auf Rom","text":"Mussolini wird zum Regierungschef ernannt – die erste faschistische Machtübernahme Europas, Vorbild für spätere Bewegungen."},{"year":1943,"title":"Sturz Mussolinis und Kriegswende","text":"Italien wechselt die Seiten, das Land wird zum Kriegsschauplatz und zerfällt bis 1945 in zwei Teile."},{"year":1946,"title":"Referendum: Republik statt Monarchie","text":"Mit knapper Mehrheit endet das Haus Savoyen. Frauen stimmen erstmals landesweit mit ab."},{"year":1957,"title":"Römische Verträge","text":"In Rom wird die Europäische Wirtschaftsgemeinschaft gegründet – der Grundstein der heutigen EU."},{"year":1992,"title":"Ermittlungen „Saubere Hände\"","text":"Ein Korruptionsskandal legt das gesamte Parteiensystem der Nachkriegszeit lahm und lässt es binnen zwei Jahren zerfallen."}]},"Griechenland":{"color":"#2a5b8a","events":[{"year":-1600,"title":"Blüte der mykenischen Paläste","text":"Befestigte Zentren wie Mykene und Tiryns beherrschen die Ägäis. Ihre Schrift Linear B wurde erst 1952 entziffert."},{"year":-1200,"title":"Zusammenbruch der Palastkultur","text":"Innerhalb weniger Jahrzehnte verschwinden Schrift, Fernhandel und Paläste. Die Ursachen sind bis heute umstritten."},{"year":-776,"title":"Erste überlieferte Olympische Spiele","text":"Die Siegerlisten setzen ein – für die Griechen der Beginn gemeinsamer Zeitrechnung."},{"year":-508,"title":"Reformen des Kleisthenes","text":"Athen ordnet die Bürgerschaft nach Wohnbezirken statt nach Sippen. Damit beginnt die Demokratie im engeren Sinn."},{"year":-480,"title":"Salamis","text":"Die griechische Flotte schlägt die persische in der Meerenge bei Salamis – der Wendepunkt der Perserkriege."},{"year":-404,"title":"Niederlage Athens im Peloponnesischen Krieg","text":"Nach 27 Jahren Krieg gegen Sparta endet die athenische Vormacht. Thukydides schrieb die Geschichte dieses Krieges mit."},{"year":-338,"title":"Chaironeia","text":"Philipp II. von Makedonien besiegt Athen und Theben. Die Zeit der unabhängigen Stadtstaaten ist vorbei."},{"year":-146,"title":"Zerstörung Korinths","text":"Rom macht Griechenland zur Provinz. Kulturell aber erobert der Besiegte den Sieger – römische Bildung wird griechisch."},{"year":1453,"title":"Fall Konstantinopels","text":"Das byzantinische Reich, griechischsprachig und orthodox, endet. Gelehrte fliehen nach Italien und beleben dort die Antikenkenntnis."},{"year":1821,"title":"Beginn des Unabhängigkeitskriegs","text":"Der Aufstand gegen das Osmanische Reich begeistert halb Europa; Lord Byron stirbt 1824 in Missolonghi."},{"year":1832,"title":"Königreich Griechenland","text":"Die Großmächte setzen den bayerischen Prinzen Otto als König ein – ein von außen entworfener Staat."},{"year":1922,"title":"Kleinasiatische Katastrophe","text":"Die Niederlage gegen die Türkei beendet die griechische Präsenz in Anatolien; über eine Million Menschen werden umgesiedelt."},{"year":1941,"title":"Deutsche Besetzung","text":"Nach dem Scheitern des italienischen Angriffs greift die Wehrmacht ein. Die Besatzung fordert durch Hungersnot und Repressalien Hunderttausende Opfer."},{"year":1946,"title":"Bürgerkrieg","text":"Bis 1949 kämpfen Regierung und kommunistische Partisanen. Der Konflikt gilt als erster heißer Krieg des Kalten Krieges."},{"year":1967,"title":"Militärputsch der Obristen","text":"Sieben Jahre Diktatur, die 1974 nach dem Zypern-Abenteuer zusammenbricht."},{"year":1981,"title":"Beitritt zur Europäischen Gemeinschaft","text":"Griechenland wird zehntes Mitglied – ein bewusst politisches Signal zur Sicherung der jungen Demokratie."}]},"Skandinavien":{"color":"#1f6b7d","events":[{"year":793,"title":"Überfall auf Lindisfarne","text":"Der Angriff auf das Inselkloster gilt als Beginn der Wikingerzeit – vor allem, weil erstmals jemand darüber schrieb."},{"year":874,"title":"Besiedlung Islands","text":"Norweger lassen sich auf der bis dahin nahezu unbewohnten Insel nieder; die Sagas berichten davon Jahrhunderte später."},{"year":930,"title":"Das Althing auf Island","text":"Die jährliche Versammlung freier Bauern gilt als eines der ältesten fortbestehenden Parlamente der Welt."},{"year":1000,"title":"Leif Eriksson erreicht Vinland","text":"Rund fünfhundert Jahre vor Kolumbus landen Nordleute in Nordamerika. Die Siedlungsspuren in L'Anse aux Meadows bestätigen es."},{"year":1066,"title":"Stamford Bridge","text":"Der Tod Harald Hardradas in England markiert das Ende der großen Wikingerzüge – drei Wochen vor Hastings."},{"year":1397,"title":"Kalmarer Union","text":"Dänemark, Norwegen und Schweden unter einer Krone – eine Personalunion, die über hundert Jahre hält."},{"year":1520,"title":"Stockholmer Blutbad","text":"Die Hinrichtung schwedischer Adliger löst den Aufstand aus, der 1523 zur Unabhängigkeit unter Gustav Wasa führt."},{"year":1630,"title":"Schweden greift in den Dreißigjährigen Krieg ein","text":"Gustav II. Adolf landet in Pommern und wird zur Schutzmacht der Protestanten; er fällt 1632 bei Lützen."},{"year":1709,"title":"Poltawa","text":"Karl XII. unterliegt Peter dem Großen. Schwedens Zeit als Großmacht endet, Russlands beginnt."},{"year":1814,"title":"Norwegische Verfassung von Eidsvoll","text":"Norwegen gibt sich eine der freiheitlichsten Verfassungen Europas – und wird trotzdem an Schweden abgetreten."},{"year":1905,"title":"Norwegen wird unabhängig","text":"Die Union mit Schweden wird friedlich aufgelöst – bemerkenswert in einem Jahrhundert der Nationalkriege."},{"year":1917,"title":"Finnland erklärt seine Unabhängigkeit","text":"Nach der russischen Revolution löst sich das Großfürstentum; es folgt ein blutiger Bürgerkrieg."},{"year":1939,"title":"Winterkrieg","text":"Finnland leistet der sowjetischen Übermacht monatelang Widerstand und verliert Karelien, bleibt aber unbesetzt."},{"year":1940,"title":"Besetzung Dänemarks und Norwegens","text":"Schweden bleibt neutral – eine bis heute umstrittene Neutralität, die Erztransporte nach Deutschland einschloss."},{"year":1943,"title":"Rettung der dänischen Juden","text":"In wenigen Nächten werden über 7.000 Menschen nach Schweden gebracht – die erfolgreichste Rettungsaktion im besetzten Europa."},{"year":1969,"title":"Erdölfund in der Nordsee","text":"Das Ekofisk-Feld macht Norwegen binnen einer Generation zu einem der reichsten Länder der Welt."},{"year":2024,"title":"Schweden tritt der NATO bei","text":"Nach über zweihundert Jahren Bündnisfreiheit – eine Folge des russischen Angriffs auf die Ukraine. Finnland war 2023 vorausgegangen."}]},"Korea":{"color":"#5b7d1f","events":[{"year":-108,"title":"Han-China richtet Kommandanturen ein","text":"Nach dem Ende von Gojoseon kontrolliert China Teile der Halbinsel – der Beginn einer jahrhundertelangen Wechselbeziehung."},{"year":372,"title":"Buddhismus erreicht Goguryeo","text":"Über China kommt der Buddhismus, wird Staatsreligion und prägt Kunst, Schrift und Denken – auch Japans, das ihn von Korea empfängt."},{"year":676,"title":"Silla einigt die Halbinsel","text":"Mit chinesischer Hilfe und anschließend gegen sie setzt sich Silla durch – die erste Einigung Koreas."},{"year":918,"title":"Gründung von Goryeo","text":"Von diesem Reichsnamen leitet sich das westliche Wort Korea ab."},{"year":1234,"title":"Druck mit beweglichen Metalllettern","text":"Koreanische Drucker verwenden Metalltypen – rund zwei Jahrhunderte vor Gutenberg. Die Technik verbreitete sich jedoch nicht nach Westen."},{"year":1392,"title":"Beginn der Joseon-Dynastie","text":"Fünf Jahrhunderte konfuzianisch geprägter Herrschaft beginnen – eine der langlebigsten Dynastien der Weltgeschichte."},{"year":1446,"title":"Verkündung des Hangul","text":"König Sejong lässt eine eigene Schrift entwerfen, die jeder in wenigen Tagen erlernen kann. Die Gelehrtenelite wehrte sich dagegen."},{"year":1592,"title":"Japanische Invasion","text":"Admiral Yi Sun-sin schlägt die japanische Flotte mit seinen gepanzerten Schildkrötenschiffen und rettet das Land."},{"year":1866,"title":"Abschottungspolitik","text":"Korea weist westliche Kontaktversuche ab und erhält den Beinamen Einsiedlerkönigreich."},{"year":1910,"title":"Annexion durch Japan","text":"35 Jahre Kolonialherrschaft mit Unterdrückung der Sprache, Zwangsarbeit und dem System der sogenannten Trostfrauen – bis heute eine Belastung der Beziehungen."},{"year":1919,"title":"Bewegung des 1. März","text":"Landesweite gewaltlose Unabhängigkeitsdemonstrationen werden blutig niedergeschlagen; sie prägen das nationale Selbstverständnis."},{"year":1945,"title":"Teilung am 38. Breitengrad","text":"Zwei amerikanische Offiziere ziehen in einer Nacht eine Linie auf der Landkarte. Sie besteht bis heute."},{"year":1950,"title":"Koreakrieg","text":"Drei Jahre Krieg mit Millionen Toten enden 1953 mit einem Waffenstillstand – ein Friedensvertrag wurde nie geschlossen."},{"year":1980,"title":"Aufstand von Gwangju","text":"Die Niederschlagung durch das Militär kostet Hunderte das Leben und wird zum Wendepunkt der südkoreanischen Demokratiebewegung."},{"year":1987,"title":"Demokratisierung Südkoreas","text":"Massenproteste erzwingen freie Präsidentschaftswahlen und das Ende der Militärherrschaft."},{"year":1988,"title":"Olympische Spiele in Seoul","text":"Der internationale Auftritt eines Landes, das eine Generation zuvor zu den ärmsten der Welt gehörte."}]},"Westafrika":{"color":"#c9701c","events":[{"year":300,"title":"Aufstieg des Reiches Ghana","text":"Zwischen Senegal und Niger entsteht ein Reich, das den Handel mit Gold und Salz über die Sahara kontrolliert. Mit dem heutigen Staat Ghana ist es geografisch nicht identisch."},{"year":800,"title":"Blüte von Djenné-Djenno","text":"Eine der ältesten Städte Afrikas südlich der Sahara – gewachsen ohne königlichen Palast und ohne Stadtmauer, was gängige Staatsmodelle in Frage stellt."},{"year":1235,"title":"Gründung des Mali-Reiches","text":"Sundiata Keïta besiegt seine Gegner und begründet ein Großreich. Die Kouroukan Fouga, eine mündlich überlieferte Verfassung, regelt Rechte und Pflichten."},{"year":1324,"title":"Pilgerfahrt des Mansa Musa","text":"Der Herrscher Malis reist mit einem riesigen Gefolge nach Mekka und verschenkt in Kairo so viel Gold, dass dessen Wert dort jahrelang gedrückt bleibt."},{"year":1375,"title":"Mali auf der Katalanischen Weltkarte","text":"Europäische Kartografen zeichnen Mansa Musa mit Goldklumpen – Westafrika ist im europäischen Weltbild angekommen."},{"year":1468,"title":"Songhai erobert Timbuktu","text":"Unter Sonni Ali löst Songhai Mali als Vormacht ab. Timbuktu wird zum Zentrum von Handel und Gelehrsamkeit."},{"year":1500,"title":"Universität Sankoré","text":"In Timbuktu lehren und schreiben Gelehrte; die Handschriftensammlungen der Stadt umfassen bis heute Zehntausende Bände zu Recht, Astronomie und Medizin."},{"year":1591,"title":"Schlacht von Tondibi","text":"Eine marokkanische Armee mit Feuerwaffen zerschlägt das Songhai-Reich – ein früher Fall, in dem Schusswaffen ein Großreich entscheiden."},{"year":1600,"title":"Ausweitung des atlantischen Sklavenhandels","text":"Über drei Jahrhunderte werden schätzungsweise mehr als zwölf Millionen Menschen verschleppt; Westafrika ist die Hauptregion der Verschiffung."},{"year":1804,"title":"Sokoto-Kalifat","text":"Usman dan Fodios Reformbewegung begründet einen der größten afrikanischen Staaten des 19. Jahrhunderts."},{"year":1884,"title":"Berliner Konferenz","text":"Europäische Mächte teilen Afrika unter sich auf, ohne dass ein einziger Afrikaner am Tisch sitzt. Die gezogenen Grenzen bestehen weitgehend fort."},{"year":1897,"title":"Britische Strafexpedition gegen Benin","text":"Die Stadt wird zerstört und geplündert; die Benin-Bronzen gelangen in europäische Museen. Ihre Rückgabe wird seit den 2010er Jahren umgesetzt."},{"year":1957,"title":"Ghana wird unabhängig","text":"Als erste Kolonie südlich der Sahara – Kwame Nkrumah wird zur Leitfigur des Panafrikanismus."},{"year":1960,"title":"Das Afrikanische Jahr","text":"Siebzehn afrikanische Staaten erlangen die Unabhängigkeit, darunter Nigeria, Senegal, Mali und die Elfenbeinküste."},{"year":1967,"title":"Biafra-Krieg","text":"Der Sezessionskrieg in Nigeria fordert bis 1970 durch Kampfhandlungen und Hungerblockade über eine Million Opfer und prägt das Bild humanitärer Hilfe."},{"year":2012,"title":"Bedrohung der Handschriften von Timbuktu","text":"Bibliothekare bringen Zehntausende Manuskripte heimlich aus der Stadt, um sie vor Zerstörung zu bewahren."}]},"Äthiopien":{"color":"#3f7d3f","events":[{"year":100,"title":"Aufstieg des Reiches Aksum","text":"Ein Handelsreich am Roten Meer mit eigener Schrift und eigener Münzprägung – eine der wenigen Mächte der Antike, die eigenes Geld schlug."},{"year":330,"title":"Christianisierung","text":"König Ezana nimmt das Christentum an – Äthiopien gehört damit zu den ältesten christlichen Staaten der Welt."},{"year":615,"title":"Aufnahme der ersten Muslime","text":"Verfolgte Anhänger Mohammeds finden am aksumitischen Hof Zuflucht. Die Episode gilt als früher Fall religiöser Duldung."},{"year":1200,"title":"Felsenkirchen von Lalibela","text":"Elf Kirchen werden aus dem anstehenden Fels herausgemeißelt, von oben nach unten – ein Bauverfahren ohne Parallele."},{"year":1270,"title":"Salomonische Dynastie","text":"Die Herrscher leiten ihre Abstammung von Salomo und der Königin von Saba ab. Die Legende wird im Kebra Nagast festgehalten."},{"year":1541,"title":"Portugiesische Hilfstruppen","text":"Im Krieg gegen das Sultanat Adal erhält Äthiopien portugiesische Unterstützung – ein früher Fall europäischer Militärintervention in Afrika."},{"year":1636,"title":"Gondar wird Hauptstadt","text":"Erstmals seit Jahrhunderten hat der Hof einen festen Sitz; es entsteht eine Schloss- und Kirchenlandschaft."},{"year":1855,"title":"Reichseinigung unter Tewodros II.","text":"Nach der Zeit der Fürsten wird das zersplitterte Reich wieder zusammengeführt."},{"year":1896,"title":"Schlacht von Adwa","text":"Menelik II. schlägt die italienische Invasionsarmee vernichtend. Äthiopien bleibt als einziger afrikanischer Staat unkolonisiert – ein Symbol für die gesamte Bewegung gegen die Kolonialherrschaft."},{"year":1930,"title":"Krönung Haile Selassies","text":"Der Kaiser wird zur Symbolfigur weit über Afrika hinaus; in Jamaika entsteht in seinem Namen die Rastafari-Bewegung."},{"year":1935,"title":"Italienischer Überfall","text":"Mussolini lässt mit Giftgas angreifen. Der Völkerbund reagiert wirkungslos – ein Vorzeichen seines Scheiterns."},{"year":1941,"title":"Befreiung","text":"Nach fünf Jahren Besatzung kehrt Haile Selassie zurück; äthiopische Widerstandskämpfer und britische Truppen vertreiben die Italiener."},{"year":1963,"title":"Gründung der OAU in Addis Abeba","text":"Die Organisation für Afrikanische Einheit wird gegründet; die Stadt bleibt bis heute Sitz der Afrikanischen Union."},{"year":1974,"title":"Sturz des Kaisers","text":"Der Derg übernimmt die Macht; es folgen Terror, Zwangsumsiedlungen und die Hungersnot von 1984."},{"year":1991,"title":"Ende des Derg-Regimes","text":"Rebellenverbände nehmen Addis Abeba ein; Eritrea wird 1993 nach einem Referendum unabhängig."},{"year":2020,"title":"Krieg in Tigray","text":"Ein zweijähriger Konflikt mit hunderttausenden Toten; 2022 folgt ein Waffenstillstandsabkommen."}]},"Südostasien":{"color":"#1f7d6b","events":[{"year":802,"title":"Gründung des Khmer-Reiches","text":"Jayavarman II. lässt sich zum Weltenherrscher weihen – Beginn eines Reiches, das ein halbes Jahrtausend das Festland beherrscht."},{"year":825,"title":"Borobudur auf Java","text":"Die größte buddhistische Tempelanlage der Welt entsteht; sie wurde später aufgegeben und erst im 19. Jahrhundert wieder freigelegt."},{"year":1113,"title":"Bau von Angkor Wat","text":"Zunächst ein Vishnu-Tempel, später buddhistisch genutzt – die größte religiöse Anlage der Welt, umgeben von einem Bewässerungssystem für womöglich Hunderttausende Menschen."},{"year":1292,"title":"Marco Polo besucht Sumatra","text":"Er berichtet von islamisch geprägten Hafenstädten – der Islam breitet sich über den Handel aus, nicht durch Eroberung."},{"year":1400,"title":"Aufstieg von Malakka","text":"Der Hafen wird zur Drehscheibe zwischen Indischem Ozean und Südchinesischem Meer und zum Ausgangspunkt der Islamisierung der Inselwelt."},{"year":1511,"title":"Portugal erobert Malakka","text":"Der erste europäische Stützpunkt in der Region – der Beginn eines Jahrhunderte währenden Kampfes um die Gewürzrouten."},{"year":1602,"title":"Gründung der Niederländischen Ostindien-Kompanie","text":"Die erste Aktiengesellschaft der Welt mit eigenem Militär und dem Recht, Krieg zu führen und Verträge zu schließen."},{"year":1782,"title":"Beginn der Chakri-Dynastie in Siam","text":"Bangkok wird Hauptstadt. Siam bleibt als einziges Land der Region formal unabhängig – durch geschickte Diplomatie zwischen Briten und Franzosen."},{"year":1815,"title":"Ausbruch des Tambora","text":"Der stärkste Vulkanausbruch der Neuzeit auf Sumbawa führt weltweit zum Jahr ohne Sommer, mit Missernten bis nach Europa und Nordamerika."},{"year":1887,"title":"Französisch-Indochina","text":"Vietnam, Kambodscha und später Laos werden zu einer Kolonialverwaltung zusammengefasst."},{"year":1942,"title":"Japanische Besetzung","text":"Binnen Monaten fallen die europäischen Kolonien. Der Mythos europäischer Unbesiegbarkeit zerbricht und beschleunigt die Unabhängigkeitsbewegungen."},{"year":1945,"title":"Indonesien erklärt seine Unabhängigkeit","text":"Sukarno ruft die Republik aus; erst nach vier Jahren Krieg erkennen die Niederlande sie an."},{"year":1954,"title":"Dien Bien Phu","text":"Die Niederlage beendet die französische Kolonialherrschaft in Indochina und teilt Vietnam."},{"year":1965,"title":"Massaker in Indonesien","text":"Nach einem gescheiterten Putsch werden Hunderttausende als angebliche Kommunisten getötet; die Aufarbeitung steht bis heute aus."},{"year":1975,"title":"Machtübernahme der Roten Khmer","text":"Bis 1979 sterben in Kambodscha schätzungsweise 1,5 bis 2 Millionen Menschen – ein Viertel der Bevölkerung."},{"year":1997,"title":"Asienkrise","text":"Der Zusammenbruch des thailändischen Baht löst eine regionale Finanzkrise aus und stürzt in Indonesien das Suharto-Regime."}]},"Brasilien & Südamerika":{"color":"#7d5b1f","events":[{"year":-1200,"title":"Chavín de Huántar","text":"In den peruanischen Anden entsteht ein Kultzentrum, das über Jahrhunderte eine gemeinsame Bildsprache in weiten Teilen der Region prägt."},{"year":100,"title":"Nazca-Linien","text":"Riesige Scharrbilder in der Wüste Südperus, die vom Boden aus kaum erkennbar sind. Ihre Funktion – Wasserkult, Prozessionswege, Astronomie – bleibt umstritten."},{"year":1438,"title":"Beginn der Inka-Expansion","text":"Unter Pachacútec wächst ein Reich mit über 30.000 Kilometern Straßen, Terrassenfeldern und Knotenschnüren als Verwaltungsmedium – ohne Rad, Geld und Alphabetschrift."},{"year":1500,"title":"Landung von Cabral in Brasilien","text":"Die Portugiesen erreichen die Küste. Der Vertrag von Tordesillas hatte das Gebiet bereits 1494 zugesprochen."},{"year":1532,"title":"Cajamarca","text":"Pizarro nimmt Atahualpa mit weniger als zweihundert Mann gefangen. Entscheidend waren Bürgerkrieg im Reich, Verbündete und vor allem eingeschleppte Seuchen."},{"year":1630,"title":"Quilombo dos Palmares","text":"Entflohene Versklavte gründen im Nordosten Brasiliens ein Gemeinwesen, das fast ein Jahrhundert besteht, bevor es 1694 zerschlagen wird."},{"year":1780,"title":"Aufstand des Túpac Amaru II.","text":"Die größte indigene Erhebung gegen die spanische Herrschaft wird niedergeschlagen; sein Name wird zum Symbol späterer Bewegungen."},{"year":1808,"title":"Der portugiesische Hof flieht nach Rio","text":"Vor Napoleon setzt der Königshof über den Atlantik – der einzige Fall, in dem eine europäische Monarchie ihre Kolonie zum Regierungssitz macht."},{"year":1819,"title":"Boyacá","text":"Simón Bolívars Sieg nach dem Marsch über die Anden entscheidet die Unabhängigkeit Kolumbiens und leitet die Befreiung des Nordens ein."},{"year":1822,"title":"Unabhängigkeit Brasiliens","text":"Dom Pedro erklärt die Loslösung – ohne Krieg, als Kaiserreich, was Brasilien einen anderen Weg als seine Nachbarn nimmt."},{"year":1864,"title":"Tripel-Allianz-Krieg","text":"Paraguay verliert im Krieg gegen Brasilien, Argentinien und Uruguay einen großen Teil seiner männlichen Bevölkerung – der verlustreichste Krieg Südamerikas."},{"year":1888,"title":"Abschaffung der Sklaverei in Brasilien","text":"Als letztes Land der westlichen Welt. Ein Jahr später fällt die Monarchie – die Grundbesitzer entzogen ihr die Unterstützung."},{"year":1930,"title":"Vargas kommt an die Macht","text":"Fünfzehn Jahre autoritäre Modernisierung prägen Brasiliens Wirtschaft, Arbeitsrecht und Selbstbild."},{"year":1960,"title":"Brasília wird Hauptstadt","text":"Eine am Reißbrett entworfene Stadt im Landesinneren, gebaut in gut drei Jahren – Symbol des Fortschrittsglaubens der Moderne."},{"year":1973,"title":"Putsch in Chile","text":"Der Sturz Allendes leitet siebzehn Jahre Diktatur ein und macht Chile zum Versuchsfeld radikaler Wirtschaftsreformen."},{"year":1985,"title":"Rückkehr zur Demokratie in Brasilien","text":"Nach 21 Jahren endet die Militärherrschaft; 1988 folgt eine neue Verfassung, die Land- und indigene Rechte festschreibt."}]},"Australien & Ozeanien":{"color":"#8a5b7d","events":[{"year":-50000,"title":"Besiedlung Australiens","text":"Menschen erreichen den Kontinent über Wasserwege – eine der frühesten bekannten Seefahrten der Menschheit. Die Aboriginal-Kulturen zählen damit zu den ältesten fortbestehenden der Welt."},{"year":-3000,"title":"Aufbruch der Lapita-Kultur","text":"Von Melanesien aus besiedeln Seefahrer über Jahrtausende den Pazifik – navigiert wird nach Sternen, Dünung und Vogelflug."},{"year":1000,"title":"Besiedlung Aotearoas","text":"Polynesische Seefahrer erreichen Neuseeland, die letzte große bewohnbare Landmasse der Erde. Aus ihnen werden die Maori."},{"year":1250,"title":"Errichtung der Moai","text":"Auf der Osterinsel entstehen die Steinfiguren. Die These vom selbstverschuldeten ökologischen Kollaps gilt heute als überzogen – Sklavenraub und eingeschleppte Krankheiten wogen schwerer."},{"year":1606,"title":"Erste dokumentierte europäische Landung","text":"Willem Janszoon erreicht die Kap-York-Halbinsel. Die Niederländer nennen den Kontinent Neuholland und finden ihn wirtschaftlich uninteressant."},{"year":1770,"title":"James Cook an der Ostküste","text":"Cook erklärt das Land für die britische Krone – unter der Rechtsfiktion terra nullius, niemandes Land, obwohl es besiedelt war."},{"year":1788,"title":"Die First Fleet in Botany Bay","text":"Britannien richtet eine Sträflingskolonie ein. Für die indigene Bevölkerung beginnt eine Katastrophe aus Krankheiten, Vertreibung und Gewalt."},{"year":1840,"title":"Vertrag von Waitangi","text":"Britische Krone und Maori-Häuptlinge schließen einen Vertrag – dessen englische und Maori-Fassung Entscheidendes unterschiedlich sagen. Der Streit darüber prägt Neuseeland bis heute."},{"year":1851,"title":"Goldrausch in Victoria","text":"Die Bevölkerung Australiens verdreifacht sich binnen eines Jahrzehnts; Einwanderer aus China stoßen auf offene Diskriminierung."},{"year":1901,"title":"Australischer Bund","text":"Die Kolonien schließen sich zusammen. Eines der ersten Gesetze begründet die White Australia Policy, die bis in die 1970er Jahre gilt."},{"year":1915,"title":"Gallipoli","text":"Australische und neuseeländische Truppen erleiden schwere Verluste. Der ANZAC Day ist bis heute der wichtigste Gedenktag beider Länder."},{"year":1942,"title":"Bombardierung von Darwin","text":"Japanische Angriffe auf australischen Boden lösen die außenpolitische Neuausrichtung von Großbritannien zu den USA aus."},{"year":1946,"title":"Atomtests im Pazifik","text":"Über Jahrzehnte testen USA, Großbritannien und Frankreich Kernwaffen; Bewohner von Bikini, Maralinga und Mururoa tragen die Folgen."},{"year":1967,"title":"Referendum über Aboriginal-Rechte","text":"Über 90 Prozent stimmen dafür, indigene Australier in die Volkszählung aufzunehmen und Bundesgesetze auf sie anzuwenden."},{"year":1992,"title":"Mabo-Urteil","text":"Der High Court verwirft die Fiktion terra nullius und erkennt indigene Landrechte an – die folgenreichste Gerichtsentscheidung der australischen Geschichte."},{"year":2008,"title":"Entschuldigung an die Gestohlenen Generationen","text":"Premierminister Rudd entschuldigt sich für die jahrzehntelange Wegnahme indigener Kinder von ihren Familien."}]},
  "Zentralasien & Seidenstraße": {
    color: "#6b4f9a",
    events: [
      { year: -800, title: "Die Reitervölker der Steppe", text: "Saken und Skythen entwickeln eine Lebensweise, die auf berittenem Bogenschützentum beruht. Die Kombination aus Pferd, Reflexbogen und Beweglichkeit prägt die Kriegsführung Eurasiens für über zweitausend Jahre – bis Feuerwaffen sie entwerten." },
      { year: -329, title: "Alexander in Baktrien und Sogdien", text: "Der Widerstand hier kostet Alexander fast drei Jahre – länger als die Eroberung des gesamten Perserreichs zuvor. Aus den zurückgelassenen Garnisonen entsteht das Griechisch-Baktrische Reich, dessen Münzen zu den kunstvollsten der Antike zählen." },
      { year: -130, title: "Zhang Qians Berichte erreichen China", text: "Der Gesandte kehrt nach über einem Jahrzehnt zurück und beschreibt dem Han-Hof die Reiche des Westens. Das Wort Seidenstraße stammt allerdings erst von dem Geografen Ferdinand von Richthofen aus dem Jahr 1877 – die Zeitgenossen kannten kein solches Netz, sondern viele Teilstrecken." },
      { year: 50, title: "Das Kuschan-Reich", text: "Zwischen Rom, Indien und China gelegen, wird es zur Drehscheibe des Fernhandels. In der Kunst von Gandhara wird der Buddha erstmals in menschlicher Gestalt dargestellt – vorher stand er nur für Symbole wie Fußspuren oder ein leerer Thron." },
      { year: 552, title: "Das Erste Türk-Kaganat", text: "Erstmals trägt ein Reich den Namen Türk. Es reicht zeitweise von der Mandschurei bis ans Schwarze Meer. Die Orchon-Inschriften des 8. Jahrhunderts sind die ältesten bekannten Texte in einer Türksprache – und lesen sich als Warnung an die eigenen Nachkommen vor chinesischem Einfluss." },
      { year: 751, title: "Schlacht am Talas", text: "Abbasidische und Tang-chinesische Truppen treffen aufeinander; China zieht sich dauerhaft aus Westturkestan zurück. Die verbreitete Erzählung, hier sei die Papierherstellung nach Westen gelangt, stützt sich auf eine späte Quelle und gilt in der Forschung als unsicher." },
      { year: 819, title: "Die Samaniden in Buchara", text: "Unter persischsprachiger Herrschaft wird Buchara zum Bildungszentrum. Hier entsteht die neupersische Literatursprache – der Beweis, dass die islamische Expansion die eroberten Kulturen nicht auslöschte, sondern sich mit ihnen verband." },
      { year: 1020, title: "Ibn Sina und al-Biruni", text: "Der Kanon der Medizin bleibt bis ins 17. Jahrhundert auch an europäischen Universitäten Lehrbuch. Al-Biruni berechnet den Erdumfang mit wenigen Prozent Abweichung und schreibt eine erstaunlich unvoreingenommene Beschreibung Indiens." },
      { year: 1220, title: "Der Mongolensturm", text: "Buchara, Samarkand und Urgentsch werden erobert, die Bewässerungssysteme Chorezms zerstört. Die überlieferten Opferzahlen sind Propaganda beider Seiten und archäologisch nicht zu halten – der Einschnitt war dennoch tief und wirkte über Generationen." },
      { year: 1370, title: "Timur macht Samarkand zur Hauptstadt", text: "Timur führt Feldzüge von Delhi bis Ankara und lässt Schädelpyramiden errichten; zugleich zieht er Handwerker aus aller Welt in seine Hauptstadt. Beides gehört zusammen und lässt sich nicht gegeneinander aufrechnen." },
      { year: 1428, title: "Die Sternwarte des Ulug Beg", text: "Der Herrscher ist selbst Astronom. Sein Sternkatalog verzeichnet über tausend Sterne genauer als alles seit Ptolemäus. 1449 wird er auf Betreiben religiöser Gegner ermordet, die Sternwarte zerstört – sie wurde erst 1908 wiederentdeckt." },
      { year: 1500, title: "Die Usbeken übernehmen Transoxanien", text: "Die Schaibaniden verdrängen die Timuriden. Einer der Vertriebenen, Babur, weicht nach Süden aus und begründet 1526 in Indien das Mogulreich – ein Reich, das aus einer zentralasiatischen Niederlage hervorgeht." },
      { year: 1600, title: "Verlagerung der Handelswege", text: "Mit den europäischen Seerouten verliert der Karawanenhandel an Gewicht. Die ältere These vom abrupten Verfall gilt heute als überzeichnet: Regionaler Handel und die Verbindungen nach Russland und Indien blieben lange bedeutend." },
      { year: 1865, title: "Russland nimmt Taschkent", text: "Binnen zwanzig Jahren fällt die gesamte Region an das Zarenreich. Zwischen Russland und Britisch-Indien beginnt das Great Game – ein Ringen um Einfluss, das die Grenzen Afghanistans bis heute bestimmt." },
      { year: 1916, title: "Aufstand in Turkestan", text: "Die Einziehung zu Arbeitsdiensten im Ersten Weltkrieg löst eine Erhebung aus. Die Niederschlagung und die Flucht Zehntausender Kirgisen über die Berge nach China gelten in der heutigen Kirgisischen Republik als nationale Katastrophe." },
      { year: 1924, title: "Die sowjetische Grenzziehung", text: "Moskau teilt die Region in nationale Republiken. Ethnische Kategorien, die vorher fließend waren, werden zu festen Nationalitäten mit Territorium und Schriftsprache – die heutigen Staaten und ihre Grenzkonflikte gehen darauf zurück." },
      { year: 1960, title: "Der Aralsee beginnt zu schrumpfen", text: "Die Umleitung von Amudarja und Syrdarja für den Baumwollanbau lässt einen der größten Binnenseen der Erde weitgehend verschwinden. Es ist eine der am besten dokumentierten menschengemachten Umweltkatastrophen überhaupt." },
      { year: 1991, title: "Unabhängigkeit der fünf Republiken", text: "Kasachstan, Usbekistan, Turkmenistan, Kirgisistan und Tadschikistan werden souverän – überwiegend ohne dass es dafür Unabhängigkeitsbewegungen gegeben hätte. In Tadschikistan folgt ein Bürgerkrieg mit über 50.000 Toten." },
      { year: 2013, title: "Ankündigung der Neuen Seidenstraße", text: "China stellt in Astana ein Infrastrukturprogramm vor, das die Region wieder zum Transitraum zwischen Ost und West machen soll. Der Rückgriff auf das Bild der Seidenstraße ist dabei bewusste Geschichtspolitik." }
    ]
  }
};

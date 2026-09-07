/* =========================================================
   HISTORIA — DATEN: Laender- und Regionen-Zeitleisten

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const COUNTRY_TIMELINES = {
 "Deutschland": {
  "color": "#a01f1f",
  "events": [
   {
    "year": 9,
    "title": "Varusschlacht",
    "text": "Germanische Stämme unter Arminius vernichten drei römische Legionen und stoppen die römische Expansion nach Germanien."
   },
   {
    "year": 843,
    "title": "Vertrag von Verdun",
    "text": "Das Ostfrankenreich entsteht als Vorläufer des späteren deutschen Reiches."
   },
   {
    "year": 962,
    "title": "Gründung des Heiligen Römischen Reiches",
    "text": "Otto I. wird Kaiser – Beginn eines über 800 Jahre bestehenden, lose organisierten Reichsverbands."
   },
   {
    "year": 1077,
    "title": "Gang nach Canossa",
    "text": "Höhepunkt des Investiturstreits zwischen Kaiser und Papst um die Vormachtstellung."
   },
   {
    "year": 1517,
    "title": "Beginn der Reformation",
    "text": "Martin Luthers Thesen spalten die Kirche und prägen die deutsche Geschichte nachhaltig."
   },
   {
    "year": 1618,
    "title": "Dreißigjähriger Krieg beginnt",
    "text": "Einer der verheerendsten Kriege der deutschen Geschichte verwüstet weite Teile des Reiches."
   },
   {
    "year": 1701,
    "title": "Königreich Preußen entsteht",
    "text": "Brandenburg-Preußen steigt zur europäischen Militärmacht auf."
   },
   {
    "year": 1806,
    "title": "Ende des Heiligen Römischen Reiches",
    "text": "Unter napoleonischem Druck legt Kaiser Franz II. die Reichskrone nieder."
   },
   {
    "year": 1848,
    "title": "Deutsche Revolution",
    "text": "Bürgerliche Kräfte fordern in der Frankfurter Paulskirche erstmals nationale Einheit und Verfassung – scheitert zunächst."
   },
   {
    "year": 1871,
    "title": "Deutsche Reichsgründung",
    "text": "Unter preußischer Führung entsteht das Deutsche Kaiserreich."
   },
   {
    "year": 1918,
    "title": "Novemberrevolution",
    "text": "Kaiser Wilhelm II. dankt ab, die Weimarer Republik wird ausgerufen."
   },
   {
    "year": 1933,
    "title": "NS-Machtübernahme",
    "text": "Adolf Hitler wird Reichskanzler – Beginn der Diktatur und des Zivilisationsbruchs des Holocaust."
   },
   {
    "year": 1945,
    "title": "Bedingungslose Kapitulation",
    "text": "Das Deutsche Reich kapituliert nach dem Zweiten Weltkrieg vollständig; Besatzungszonen der Alliierten entstehen."
   },
   {
    "year": 1949,
    "title": "Gründung von BRD und DDR",
    "text": "Deutschland wird für über 40 Jahre in zwei Staaten geteilt."
   },
   {
    "year": 1990,
    "title": "Deutsche Wiedervereinigung",
    "text": "BRD und DDR vereinigen sich zu einem gemeinsamen demokratischen Staat."
   }
  ]
 },
 "China": {
  "color": "#b8860b",
  "events": [
   {
    "year": -1600,
    "title": "Shang-Dynastie",
    "text": "Frühe zentralisierte Herrschaft mit Bronzegusskunst und Orakelknochenschrift."
   },
   {
    "year": -1046,
    "title": "Zhou-Dynastie",
    "text": "Prägt das Konzept des 'Mandats des Himmels' als Herrschaftslegitimation."
   },
   {
    "year": -221,
    "title": "Erste Reichseinigung durch Qin Shi Huang",
    "text": "Der erste Kaiser Chinas vereinigt die zerstrittenen Reiche, standardisiert Schrift und Maße und beginnt den Bau der Großen Mauer."
   },
   {
    "year": -206,
    "title": "Han-Dynastie beginnt",
    "text": "Eine der prägendsten chinesischen Dynastien fördert Konfuzianismus, Verwaltung und Seidenstraßenhandel."
   },
   {
    "year": 220,
    "title": "Ende der Han-Dynastie",
    "text": "China zerfällt in die Zeit der Drei Reiche – Beginn einer langen Phase politischer Zersplitterung."
   },
   {
    "year": 618,
    "title": "Tang-Dynastie beginnt",
    "text": "Gilt als eines der 'goldenen Zeitalter' Chinas mit kultureller Blüte, Handel und territorialer Ausdehnung."
   },
   {
    "year": 960,
    "title": "Song-Dynastie beginnt",
    "text": "Technologische Innovationen wie Papiergeld, Kompass und Schießpulver verbreiten sich."
   },
   {
    "year": 1271,
    "title": "Yuan-Dynastie (Mongolenherrschaft)",
    "text": "Kublai Khan begründet eine mongolische Fremdherrschaft über China; Marco Polo besucht seinen Hof."
   },
   {
    "year": 1368,
    "title": "Ming-Dynastie beginnt",
    "text": "Chinesische Restauration nach der Mongolenherrschaft, Bau der Verbotenen Stadt, große Seefahrtsexpeditionen."
   },
   {
    "year": 1644,
    "title": "Qing-Dynastie beginnt",
    "text": "Die aus der Mandschurei stammenden Qing errichten das letzte chinesische Kaiserreich."
   },
   {
    "year": 1839,
    "title": "Erster Opiumkrieg",
    "text": "Großbritannien zwingt China militärisch zur Öffnung seiner Märkte – Beginn des 'Jahrhunderts der Demütigung'."
   },
   {
    "year": 1900,
    "title": "Boxeraufstand",
    "text": "Eine antiwestliche Bewegung wird von einer internationalen Allianz niedergeschlagen."
   },
   {
    "year": 1912,
    "title": "Ende des chinesischen Kaisertums",
    "text": "Nach über 2000 Jahren Kaiserherrschaft wird China Republik."
   },
   {
    "year": 1949,
    "title": "Gründung der Volksrepublik China",
    "text": "Mao Zedong ruft nach dem Sieg im Bürgerkrieg die Volksrepublik aus."
   },
   {
    "year": 1966,
    "title": "Beginn der Kulturrevolution",
    "text": "Maos radikale Massenbewegung stürzt China für ein Jahrzehnt in Chaos und Verfolgung."
   },
   {
    "year": 1978,
    "title": "Wirtschaftsreformen unter Deng Xiaoping",
    "text": "Marktwirtschaftliche Öffnung leitet Chinas rasanten wirtschaftlichen Aufstieg ein."
   },
   {
    "year": 1989,
    "title": "Proteste auf dem Tiananmen-Platz",
    "text": "Demokratieproteste in Peking werden gewaltsam niedergeschlagen."
   }
  ]
 },
 "Japan": {
  "color": "#7a2a3a",
  "events": [
   {
    "year": 538,
    "title": "Einführung des Buddhismus",
    "text": "Über Korea gelangt der Buddhismus nach Japan und prägt Kultur und Kunst nachhaltig."
   },
   {
    "year": 794,
    "title": "Beginn der Heian-Zeit",
    "text": "Kulturelle Blütezeit am Kaiserhof in Kyoto, Entstehung klassischer japanischer Literatur."
   },
   {
    "year": 1185,
    "title": "Kamakura-Shogunat",
    "text": "Erstmals übernehmen Militärherrscher (Shogune) die faktische Macht, der Kaiser bleibt symbolisches Oberhaupt."
   },
   {
    "year": 1274,
    "title": "Mongolische Invasionsversuche",
    "text": "Taifune ('Kamikaze', 'Götterwind') zerstören zweimal mongolische Invasionsflotten und retten Japan vor der Eroberung."
   },
   {
    "year": 1467,
    "title": "Beginn der Sengoku-Zeit",
    "text": "Über ein Jahrhundert innerer Bürgerkriege zwischen rivalisierenden Fürsten (Daimyo)."
   },
   {
    "year": 1603,
    "title": "Tokugawa-Shogunat beginnt",
    "text": "Nach der Einigung Japans beginnt eine über 250-jährige Periode innerer Stabilität und Isolation."
   },
   {
    "year": 1639,
    "title": "Isolationspolitik (Sakoku)",
    "text": "Japan schottet sich fast vollständig vom Ausland ab – nur begrenzter Handel mit den Niederlanden bleibt erlaubt."
   },
   {
    "year": 1853,
    "title": "Commodore Perry öffnet Japan",
    "text": "US-Kriegsschiffe zwingen Japan zur Öffnung seiner Häfen für den Welthandel."
   },
   {
    "year": 1868,
    "title": "Meiji-Restauration",
    "text": "Japan modernisiert sich binnen weniger Jahrzehnte radikal nach westlichem Vorbild."
   },
   {
    "year": 1904,
    "title": "Russisch-Japanischer Krieg",
    "text": "Japan besiegt erstmals eine europäische Großmacht – Schock für das europäische Selbstverständnis."
   },
   {
    "year": 1931,
    "title": "Invasion der Mandschurei",
    "text": "Beginn der japanischen Expansion in China, Vorspiel des Pazifikkriegs."
   },
   {
    "year": 1941,
    "title": "Angriff auf Pearl Harbor",
    "text": "Japans Überraschungsangriff bringt die USA in den Zweiten Weltkrieg."
   },
   {
    "year": 1945,
    "title": "Atombombenabwürfe und Kapitulation",
    "text": "Nach Hiroshima und Nagasaki kapituliert Japan; das Land erhält 1947 eine neue pazifistische Verfassung."
   },
   {
    "year": 1960,
    "title": "Beginn des Wirtschaftswunders",
    "text": "Japan steigt binnen weniger Jahrzehnte zur zweitgrößten Volkswirtschaft der Welt auf."
   }
  ]
 },
 "Frankreich": {
  "color": "#8a3020",
  "events": [
   {
    "year": -52,
    "title": "Schlacht von Alesia",
    "text": "Caesar besiegt Vercingetorix und unterwirft Gallien endgültig der römischen Herrschaft."
   },
   {
    "year": 486,
    "title": "Chlodwig gründet das Frankenreich",
    "text": "Der Frankenkönig eint weite Teile Galliens und lässt sich später taufen – Grundstein des späteren Frankreichs."
   },
   {
    "year": 800,
    "title": "Kaiserkrönung Karls des Großen",
    "text": "Der fränkische König wird in Rom zum Kaiser gekrönt."
   },
   {
    "year": 843,
    "title": "Vertrag von Verdun",
    "text": "Das Westfrankenreich entsteht als direkter Vorläufer des modernen Frankreichs."
   },
   {
    "year": 1337,
    "title": "Beginn des Hundertjährigen Krieges",
    "text": "Jahrzehntelanger Konflikt mit England um die französische Krone."
   },
   {
    "year": 1429,
    "title": "Jeanne d'Arc befreit Orléans",
    "text": "Die Nationalheldin wendet das Kriegsglück zugunsten Frankreichs."
   },
   {
    "year": 1589,
    "title": "Heinrich IV. begründet die Bourbonen-Dynastie",
    "text": "Beendet die Religionskriege und erlässt das Edikt von Nantes zur religiösen Toleranz."
   },
   {
    "year": 1643,
    "title": "Regierungsbeginn Ludwigs XIV.",
    "text": "Der 'Sonnenkönig' macht Frankreich zur führenden Macht Europas und Versailles zum Symbol des Absolutismus."
   },
   {
    "year": 1789,
    "title": "Französische Revolution",
    "text": "Sturz der absoluten Monarchie, Erklärung der Menschen- und Bürgerrechte."
   },
   {
    "year": 1804,
    "title": "Napoleon krönt sich zum Kaiser",
    "text": "Beginn der napoleonischen Ära und der Neuordnung Europas durch Eroberung."
   },
   {
    "year": 1815,
    "title": "Niederlage bei Waterloo",
    "text": "Napoleons endgültiges Ende beendet die französische Vormachtstellung in Europa."
   },
   {
    "year": 1870,
    "title": "Niederlage im Deutsch-Französischen Krieg",
    "text": "Frankreich verliert Elsass-Lothringen; die Dritte Republik entsteht."
   },
   {
    "year": 1940,
    "title": "Fall Frankreichs",
    "text": "Die Wehrmacht besiegt Frankreich binnen sechs Wochen; ein Vichy-Regime kollaboriert mit NS-Deutschland."
   },
   {
    "year": 1944,
    "title": "Befreiung von Paris",
    "text": "Alliierte und französische Widerstandskräfte befreien die Hauptstadt von der deutschen Besatzung."
   },
   {
    "year": 1958,
    "title": "Gründung der Fünften Republik",
    "text": "Charles de Gaulle begründet das bis heute bestehende präsidiale Regierungssystem Frankreichs."
   }
  ]
 },
 "Russland": {
  "color": "#6b1f1f",
  "events": [
   {
    "year": 862,
    "title": "Gründung der Kiewer Rus",
    "text": "Waräger (Wikinger) gründen ein Fürstentum – Ursprung Russlands, der Ukraine und Weißrusslands."
   },
   {
    "year": 988,
    "title": "Christianisierung der Rus",
    "text": "Fürst Wladimir I. lässt sich taufen und macht das orthodoxe Christentum zur Staatsreligion."
   },
   {
    "year": 1237,
    "title": "Mongolische Eroberung",
    "text": "Die Rus geraten für rund 240 Jahre unter die Oberherrschaft der Goldenen Horde."
   },
   {
    "year": 1547,
    "title": "Iwan der Schreckliche wird erster Zar",
    "text": "Moskau festigt seine Vormachtstellung unter den russischen Fürstentümern."
   },
   {
    "year": 1613,
    "title": "Beginn der Romanov-Dynastie",
    "text": "Die Romanovs regieren bis zur Revolution 1917 über Russland."
   },
   {
    "year": 1721,
    "title": "Peter der Große krönt sich zum Kaiser",
    "text": "Russland modernisiert sich nach westeuropäischem Vorbild und wird zum Kaiserreich."
   },
   {
    "year": 1812,
    "title": "Napoleons Russlandfeldzug scheitert",
    "text": "Winter, Logistikprobleme und russischer Widerstand vernichten die 'Grande Armée' nahezu vollständig."
   },
   {
    "year": 1861,
    "title": "Aufhebung der Leibeigenschaft",
    "text": "Zar Alexander II. befreit die russischen Bauern aus jahrhundertelanger Leibeigenschaft."
   },
   {
    "year": 1905,
    "title": "Russische Revolution von 1905",
    "text": "Massenproteste erzwingen erste Zugeständnisse des Zaren – Vorbote der Revolution von 1917."
   },
   {
    "year": 1917,
    "title": "Oktoberrevolution",
    "text": "Die Bolschewiki unter Lenin übernehmen die Macht – Beginn der Sowjetunion."
   },
   {
    "year": 1922,
    "title": "Gründung der Sowjetunion",
    "text": "Aus dem Bürgerkrieg geht die UdSSR als kommunistischer Vielvölkerstaat hervor."
   },
   {
    "year": 1941,
    "title": "Unternehmen Barbarossa",
    "text": "NS-Deutschland überfällt die Sowjetunion – Beginn eines der verlustreichsten Kriege der Geschichte."
   },
   {
    "year": 1943,
    "title": "Sieg bei Stalingrad",
    "text": "Wendepunkt des Krieges an der Ostfront zugunsten der Sowjetunion."
   },
   {
    "year": 1961,
    "title": "Erster Mensch im Weltraum",
    "text": "Juri Gagarin umkreist als erster Mensch die Erde – Höhepunkt des sowjetischen Raumfahrtprogramms."
   },
   {
    "year": 1991,
    "title": "Auflösung der Sowjetunion",
    "text": "Die UdSSR zerfällt in unabhängige Staaten – Ende des Kalten Krieges."
   },
   {
    "year": 2022,
    "title": "Überfall auf die Ukraine",
    "text": "Russland beginnt einen großangelegten Angriffskrieg – größter zwischenstaatlicher Krieg in Europa seit 1945."
   }
  ]
 },
 "USA": {
  "color": "#9c1c1c",
  "events": [
   {
    "year": 1607,
    "title": "Gründung von Jamestown",
    "text": "Erste dauerhafte englische Kolonie in Nordamerika entsteht in Virginia."
   },
   {
    "year": 1620,
    "title": "Ankunft der Mayflower",
    "text": "Puritanische Siedler gründen die Plymouth-Kolonie in Neuengland."
   },
   {
    "year": 1776,
    "title": "Unabhängigkeitserklärung",
    "text": "Die 13 Kolonien erklären ihre Unabhängigkeit von Großbritannien."
   },
   {
    "year": 1787,
    "title": "Verabschiedung der US-Verfassung",
    "text": "Eine der ältesten noch gültigen geschriebenen Verfassungen der Welt tritt in Kraft."
   },
   {
    "year": 1803,
    "title": "Louisiana Purchase",
    "text": "Die USA erwerben von Frankreich ein riesiges Territorium und verdoppeln damit ihre Fläche."
   },
   {
    "year": 1861,
    "title": "Beginn des Bürgerkriegs",
    "text": "Konflikt um Sklaverei und Staatenrechte zwischen Nord- und Südstaaten."
   },
   {
    "year": 1863,
    "title": "Emanzipationserklärung",
    "text": "Abraham Lincoln erklärt die Sklaven in den Südstaaten für frei."
   },
   {
    "year": 1898,
    "title": "Spanisch-Amerikanischer Krieg",
    "text": "Die USA treten erstmals als Kolonialmacht außerhalb des eigenen Kontinents auf (Kuba, Philippinen)."
   },
   {
    "year": 1929,
    "title": "Weltwirtschaftskrise",
    "text": "Der Börsencrash an der Wall Street löst eine globale Depression aus."
   },
   {
    "year": 1941,
    "title": "Kriegseintritt nach Pearl Harbor",
    "text": "Der japanische Angriff bringt die USA in den Zweiten Weltkrieg."
   },
   {
    "year": 1945,
    "title": "Erster Einsatz von Atomwaffen",
    "text": "Die USA werfen Atombomben auf Hiroshima und Nagasaki ab und beenden den Zweiten Weltkrieg."
   },
   {
    "year": 1963,
    "title": "'I Have a Dream'-Rede",
    "text": "Martin Luther King prägt die Bürgerrechtsbewegung mit seiner berühmten Rede in Washington."
   },
   {
    "year": 1969,
    "title": "Erste Mondlandung",
    "text": "Neil Armstrong und Buzz Aldrin betreten als erste Menschen den Mond."
   },
   {
    "year": 1991,
    "title": "Ende des Kalten Krieges",
    "text": "Mit dem Zerfall der Sowjetunion werden die USA zur alleinigen Supermacht."
   },
   {
    "year": 2001,
    "title": "Terroranschläge vom 11. September",
    "text": "Anschläge auf das World Trade Center verändern die US-Außen- und Sicherheitspolitik nachhaltig."
   }
  ]
 },
 "Osmanisches Reich": {
  "color": "#b8860b",
  "events": [
   {
    "year": 1299,
    "title": "Gründung des Osmanischen Reiches",
    "text": "Osman I. begründet ein kleines anatolisches Fürstentum, aus dem eines der langlebigsten Weltreiche hervorgeht."
   },
   {
    "year": 1389,
    "title": "Schlacht auf dem Amselfeld",
    "text": "Die Osmanen besiegen ein serbisch geführtes Bündnis und festigen ihre Vormacht auf dem Balkan."
   },
   {
    "year": 1453,
    "title": "Eroberung Konstantinopels",
    "text": "Sultan Mehmed II. erobert die byzantinische Hauptstadt – Ende des Byzantinischen Reiches, Beginn der Blütezeit der Osmanen."
   },
   {
    "year": 1520,
    "title": "Regierungsbeginn Süleymans des Prächtigen",
    "text": "Höhepunkt osmanischer Macht, Kultur und Rechtsreformen; das Reich erreicht seine größte Ausdehnung."
   },
   {
    "year": 1529,
    "title": "Erste Belagerung Wiens",
    "text": "Die Osmanen scheitern erstmals daran, das habsburgische Wien einzunehmen."
   },
   {
    "year": 1571,
    "title": "Seeschlacht von Lepanto",
    "text": "Eine christliche Flottenallianz besiegt die osmanische Flotte entscheidend zur See."
   },
   {
    "year": 1683,
    "title": "Zweite Belagerung Wiens",
    "text": "Ein entsatzheer unter Jan Sobieski wendet die letzte große osmanische Belagerung Wiens ab – Beginn des osmanischen Rückzugs aus Mitteleuropa."
   },
   {
    "year": 1699,
    "title": "Frieden von Karlowitz",
    "text": "Das Osmanische Reich tritt erstmals große Gebiete an Österreich ab – Beginn des langsamen Niedergangs."
   },
   {
    "year": 1839,
    "title": "Beginn der Tanzimat-Reformen",
    "text": "Umfassende Modernisierungsreformen sollen das Reich nach westlichem Vorbild stabilisieren."
   },
   {
    "year": 1908,
    "title": "Jungtürkische Revolution",
    "text": "Reformorientierte Militärs erzwingen eine Verfassung und schwächen die Sultansmacht weiter."
   },
   {
    "year": 1915,
    "title": "Gallipoli-Kampagne",
    "text": "Die Osmanen wehren erfolgreich eine alliierte Invasion an den Dardanellen ab."
   },
   {
    "year": 1918,
    "title": "Niederlage im Ersten Weltkrieg",
    "text": "Das Reich verliert seine arabischen Provinzen und steht kurz vor der vollständigen Aufteilung."
   },
   {
    "year": 1922,
    "title": "Abschaffung des Sultanats",
    "text": "Mustafa Kemal Atatürk beendet das über 600 Jahre alte Sultanat."
   },
   {
    "year": 1923,
    "title": "Gründung der Republik Türkei",
    "text": "Aus den Resten des Osmanischen Reiches entsteht der moderne türkische Nationalstaat."
   }
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
    "year": -1473,
    "title": "Hatschepsut wird Pharao",
    "text": "Eine der wenigen Frauen auf dem Thron regiert über zwei Jahrzehnte; ihre Nachfolger versuchen später, ihre Spuren zu tilgen."
   },
   {
    "year": -1352,
    "title": "Echnatons Religionsumbruch",
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
 },
 "Italien": {
  "color": "#2f6b4f",
  "events": [
   {
    "year": -753,
    "title": "Sagenhafte Gründung Roms",
    "text": "Die Überlieferung nennt dieses Jahr; archäologisch ist eine dauerhafte Siedlung auf dem Palatin bereits im 10. Jahrhundert v. Chr. nachweisbar."
   },
   {
    "year": -509,
    "title": "Vertreibung der Könige",
    "text": "Rom wird Republik. Die Verfassung mit Konsuln, Senat und Volksversammlungen prägt europäisches Staatsdenken bis in die Neuzeit."
   },
   {
    "year": -146,
    "title": "Zerstörung Karthagos",
    "text": "Nach drei Punischen Kriegen ist Rom unbestrittene Macht des westlichen Mittelmeers."
   },
   {
    "year": 476,
    "title": "Absetzung des letzten weströmischen Kaisers",
    "text": "Odoaker setzt Romulus Augustulus ab. Zeitgenossen empfanden das kaum als Epochenbruch – die Verwaltung lief weiter."
   },
   {
    "year": 1077,
    "title": "Canossa",
    "text": "Heinrich IV. tut vor Papst Gregor VII. in der Burg der Markgräfin Mathilde Buße – ein Höhepunkt des Investiturstreits auf italienischem Boden."
   },
   {
    "year": 1204,
    "title": "Venedig lenkt den Kreuzzug um",
    "text": "Die Republik bringt das Kreuzfahrerheer dazu, Konstantinopel zu plündern, und sichert sich das Handelsmonopol im östlichen Mittelmeer."
   },
   {
    "year": 1348,
    "title": "Der Schwarze Tod erreicht Italien",
    "text": "Über genuesische Schiffe kommt die Pest nach Europa. Boccaccios Decamerone entsteht als literarische Antwort auf die Katastrophe."
   },
   {
    "year": 1401,
    "title": "Wettbewerb um die Bronzetüren von Florenz",
    "text": "Ghiberti setzt sich gegen Brunelleschi durch – der Streit gilt als symbolischer Auftakt der Renaissance."
   },
   {
    "year": 1494,
    "title": "Beginn der Italienischen Kriege",
    "text": "Karl VIII. von Frankreich marschiert ein. Über sechzig Jahre wird Italien Schlachtfeld fremder Mächte – der Hintergrund von Machiavellis Denken."
   },
   {
    "year": 1633,
    "title": "Prozess gegen Galilei",
    "text": "Der Inquisitionsprozess endet mit Widerruf und Hausarrest. Erst 1992 erklärte die Kirche das Urteil offiziell für einen Fehler."
   },
   {
    "year": 1861,
    "title": "Königreich Italien ausgerufen",
    "text": "Nach Garibaldis Zug der Tausend und Cavours Diplomatie entsteht ein Nationalstaat. Rom kommt erst 1870 hinzu."
   },
   {
    "year": 1922,
    "title": "Marsch auf Rom",
    "text": "Mussolini wird zum Regierungschef ernannt – die erste faschistische Machtübernahme Europas, Vorbild für spätere Bewegungen."
   },
   {
    "year": 1943,
    "title": "Sturz Mussolinis und Kriegswende",
    "text": "Italien wechselt die Seiten, das Land wird zum Kriegsschauplatz und zerfällt bis 1945 in zwei Teile."
   },
   {
    "year": 1946,
    "title": "Referendum: Republik statt Monarchie",
    "text": "Mit knapper Mehrheit endet das Haus Savoyen. Frauen stimmen erstmals landesweit mit ab."
   },
   {
    "year": 1957,
    "title": "Römische Verträge",
    "text": "In Rom wird die Europäische Wirtschaftsgemeinschaft gegründet – der Grundstein der heutigen EU."
   },
   {
    "year": 1992,
    "title": "Ermittlungen „Saubere Hände\"",
    "text": "Ein Korruptionsskandal legt das gesamte Parteiensystem der Nachkriegszeit lahm und lässt es binnen zwei Jahren zerfallen."
   }
  ]
 },
 "Griechenland": {
  "color": "#2a5b8a",
  "events": [
   {
    "year": -1600,
    "title": "Blüte der mykenischen Paläste",
    "text": "Befestigte Zentren wie Mykene und Tiryns beherrschen die Ägäis. Ihre Schrift Linear B wurde erst 1952 entziffert."
   },
   {
    "year": -1200,
    "title": "Zusammenbruch der Palastkultur",
    "text": "Innerhalb weniger Jahrzehnte verschwinden Schrift, Fernhandel und Paläste. Die Ursachen sind bis heute umstritten."
   },
   {
    "year": -776,
    "title": "Erste überlieferte Olympische Spiele",
    "text": "Die Siegerlisten setzen ein – für die Griechen der Beginn gemeinsamer Zeitrechnung."
   },
   {
    "year": -508,
    "title": "Reformen des Kleisthenes",
    "text": "Athen ordnet die Bürgerschaft nach Wohnbezirken statt nach Sippen. Damit beginnt die Demokratie im engeren Sinn."
   },
   {
    "year": -480,
    "title": "Salamis",
    "text": "Die griechische Flotte schlägt die persische in der Meerenge bei Salamis – der Wendepunkt der Perserkriege."
   },
   {
    "year": -404,
    "title": "Niederlage Athens im Peloponnesischen Krieg",
    "text": "Nach 27 Jahren Krieg gegen Sparta endet die athenische Vormacht. Thukydides schrieb die Geschichte dieses Krieges mit."
   },
   {
    "year": -338,
    "title": "Chaironeia",
    "text": "Philipp II. von Makedonien besiegt Athen und Theben. Die Zeit der unabhängigen Stadtstaaten ist vorbei."
   },
   {
    "year": -146,
    "title": "Zerstörung Korinths",
    "text": "Rom macht Griechenland zur Provinz. Kulturell aber erobert der Besiegte den Sieger – römische Bildung wird griechisch."
   },
   {
    "year": 1453,
    "title": "Fall Konstantinopels",
    "text": "Das byzantinische Reich, griechischsprachig und orthodox, endet. Gelehrte fliehen nach Italien und beleben dort die Antikenkenntnis."
   },
   {
    "year": 1821,
    "title": "Beginn des Unabhängigkeitskriegs",
    "text": "Der Aufstand gegen das Osmanische Reich begeistert halb Europa; Lord Byron stirbt 1824 in Missolonghi."
   },
   {
    "year": 1832,
    "title": "Königreich Griechenland",
    "text": "Die Großmächte setzen den bayerischen Prinzen Otto als König ein – ein von außen entworfener Staat."
   },
   {
    "year": 1922,
    "title": "Kleinasiatische Katastrophe",
    "text": "Die Niederlage gegen die Türkei beendet die griechische Präsenz in Anatolien; über eine Million Menschen werden umgesiedelt."
   },
   {
    "year": 1941,
    "title": "Deutsche Besetzung",
    "text": "Nach dem Scheitern des italienischen Angriffs greift die Wehrmacht ein. Die Besatzung fordert durch Hungersnot und Repressalien Hunderttausende Opfer."
   },
   {
    "year": 1946,
    "title": "Bürgerkrieg",
    "text": "Bis 1949 kämpfen Regierung und kommunistische Partisanen. Der Konflikt gilt als erster heißer Krieg des Kalten Krieges."
   },
   {
    "year": 1967,
    "title": "Militärputsch der Obristen",
    "text": "Sieben Jahre Diktatur, die 1974 nach dem Zypern-Abenteuer zusammenbricht."
   },
   {
    "year": 1981,
    "title": "Beitritt zur Europäischen Gemeinschaft",
    "text": "Griechenland wird zehntes Mitglied – ein bewusst politisches Signal zur Sicherung der jungen Demokratie."
   }
  ]
 },
 "Skandinavien": {
  "color": "#1f6b7d",
  "events": [
   {
    "year": 793,
    "title": "Überfall auf Lindisfarne",
    "text": "Der Angriff auf das Inselkloster gilt als Beginn der Wikingerzeit – vor allem, weil erstmals jemand darüber schrieb."
   },
   {
    "year": 874,
    "title": "Besiedlung Islands",
    "text": "Norweger lassen sich auf der bis dahin nahezu unbewohnten Insel nieder; die Sagas berichten davon Jahrhunderte später."
   },
   {
    "year": 930,
    "title": "Das Althing auf Island",
    "text": "Die jährliche Versammlung freier Bauern gilt als eines der ältesten fortbestehenden Parlamente der Welt."
   },
   {
    "year": 1000,
    "title": "Leif Eriksson erreicht Vinland",
    "text": "Rund fünfhundert Jahre vor Kolumbus landen Nordleute in Nordamerika. Die Siedlungsspuren in L'Anse aux Meadows bestätigen es."
   },
   {
    "year": 1066,
    "title": "Stamford Bridge",
    "text": "Der Tod Harald Hardradas in England markiert das Ende der großen Wikingerzüge – drei Wochen vor Hastings."
   },
   {
    "year": 1397,
    "title": "Kalmarer Union",
    "text": "Dänemark, Norwegen und Schweden unter einer Krone – eine Personalunion, die über hundert Jahre hält."
   },
   {
    "year": 1520,
    "title": "Stockholmer Blutbad",
    "text": "Die Hinrichtung schwedischer Adliger löst den Aufstand aus, der 1523 zur Unabhängigkeit unter Gustav Wasa führt."
   },
   {
    "year": 1630,
    "title": "Schweden greift in den Dreißigjährigen Krieg ein",
    "text": "Gustav II. Adolf landet in Pommern und wird zur Schutzmacht der Protestanten; er fällt 1632 bei Lützen."
   },
   {
    "year": 1709,
    "title": "Poltawa",
    "text": "Karl XII. unterliegt Peter dem Großen. Schwedens Zeit als Großmacht endet, Russlands beginnt."
   },
   {
    "year": 1814,
    "title": "Norwegische Verfassung von Eidsvoll",
    "text": "Norwegen gibt sich eine der freiheitlichsten Verfassungen Europas – und wird trotzdem an Schweden abgetreten."
   },
   {
    "year": 1905,
    "title": "Norwegen wird unabhängig",
    "text": "Die Union mit Schweden wird friedlich aufgelöst – bemerkenswert in einem Jahrhundert der Nationalkriege."
   },
   {
    "year": 1917,
    "title": "Finnland erklärt seine Unabhängigkeit",
    "text": "Nach der russischen Revolution löst sich das Großfürstentum; es folgt ein blutiger Bürgerkrieg."
   },
   {
    "year": 1939,
    "title": "Winterkrieg",
    "text": "Finnland leistet der sowjetischen Übermacht monatelang Widerstand und verliert Karelien, bleibt aber unbesetzt."
   },
   {
    "year": 1940,
    "title": "Besetzung Dänemarks und Norwegens",
    "text": "Schweden bleibt neutral – eine bis heute umstrittene Neutralität, die Erztransporte nach Deutschland einschloss."
   },
   {
    "year": 1943,
    "title": "Rettung der dänischen Juden",
    "text": "In wenigen Nächten werden über 7.000 Menschen nach Schweden gebracht – die erfolgreichste Rettungsaktion im besetzten Europa."
   },
   {
    "year": 1969,
    "title": "Erdölfund in der Nordsee",
    "text": "Das Ekofisk-Feld macht Norwegen binnen einer Generation zu einem der reichsten Länder der Welt."
   },
   {
    "year": 2024,
    "title": "Schweden tritt der NATO bei",
    "text": "Nach über zweihundert Jahren Bündnisfreiheit – eine Folge des russischen Angriffs auf die Ukraine. Finnland war 2023 vorausgegangen."
   }
  ]
 },
 "Korea": {
  "color": "#5b7d1f",
  "events": [
   {
    "year": -108,
    "title": "Han-China richtet Kommandanturen ein",
    "text": "Nach dem Ende von Gojoseon kontrolliert China Teile der Halbinsel – der Beginn einer jahrhundertelangen Wechselbeziehung."
   },
   {
    "year": 372,
    "title": "Buddhismus erreicht Goguryeo",
    "text": "Über China kommt der Buddhismus, wird Staatsreligion und prägt Kunst, Schrift und Denken – auch Japans, das ihn von Korea empfängt."
   },
   {
    "year": 676,
    "title": "Silla einigt die Halbinsel",
    "text": "Mit chinesischer Hilfe und anschließend gegen sie setzt sich Silla durch – die erste Einigung Koreas."
   },
   {
    "year": 918,
    "title": "Gründung von Goryeo",
    "text": "Von diesem Reichsnamen leitet sich das westliche Wort Korea ab."
   },
   {
    "year": 1234,
    "title": "Druck mit beweglichen Metalllettern",
    "text": "Koreanische Drucker verwenden Metalltypen – rund zwei Jahrhunderte vor Gutenberg. Die Technik verbreitete sich jedoch nicht nach Westen."
   },
   {
    "year": 1392,
    "title": "Beginn der Joseon-Dynastie",
    "text": "Fünf Jahrhunderte konfuzianisch geprägter Herrschaft beginnen – eine der langlebigsten Dynastien der Weltgeschichte."
   },
   {
    "year": 1446,
    "title": "Verkündung des Hangul",
    "text": "König Sejong lässt eine eigene Schrift entwerfen, die jeder in wenigen Tagen erlernen kann. Die Gelehrtenelite wehrte sich dagegen."
   },
   {
    "year": 1592,
    "title": "Japanische Invasion",
    "text": "Admiral Yi Sun-sin schlägt die japanische Flotte mit seinen gepanzerten Schildkrötenschiffen und rettet das Land."
   },
   {
    "year": 1866,
    "title": "Abschottungspolitik",
    "text": "Korea weist westliche Kontaktversuche ab und erhält den Beinamen Einsiedlerkönigreich."
   },
   {
    "year": 1910,
    "title": "Annexion durch Japan",
    "text": "35 Jahre Kolonialherrschaft mit Unterdrückung der Sprache, Zwangsarbeit und dem System der sogenannten Trostfrauen – bis heute eine Belastung der Beziehungen."
   },
   {
    "year": 1919,
    "title": "Bewegung des 1. März",
    "text": "Landesweite gewaltlose Unabhängigkeitsdemonstrationen werden blutig niedergeschlagen; sie prägen das nationale Selbstverständnis."
   },
   {
    "year": 1945,
    "title": "Teilung am 38. Breitengrad",
    "text": "Zwei amerikanische Offiziere ziehen in einer Nacht eine Linie auf der Landkarte. Sie besteht bis heute."
   },
   {
    "year": 1950,
    "title": "Koreakrieg",
    "text": "Drei Jahre Krieg mit Millionen Toten enden 1953 mit einem Waffenstillstand – ein Friedensvertrag wurde nie geschlossen."
   },
   {
    "year": 1980,
    "title": "Aufstand von Gwangju",
    "text": "Die Niederschlagung durch das Militär kostet Hunderte das Leben und wird zum Wendepunkt der südkoreanischen Demokratiebewegung."
   },
   {
    "year": 1987,
    "title": "Demokratisierung Südkoreas",
    "text": "Massenproteste erzwingen freie Präsidentschaftswahlen und das Ende der Militärherrschaft."
   },
   {
    "year": 1988,
    "title": "Olympische Spiele in Seoul",
    "text": "Der internationale Auftritt eines Landes, das eine Generation zuvor zu den ärmsten der Welt gehörte."
   }
  ]
 },
 "Westafrika": {
  "color": "#c9701c",
  "events": [
   {
    "year": 300,
    "title": "Aufstieg des Reiches Ghana",
    "text": "Zwischen Senegal und Niger entsteht ein Reich, das den Handel mit Gold und Salz über die Sahara kontrolliert. Mit dem heutigen Staat Ghana ist es geografisch nicht identisch."
   },
   {
    "year": 800,
    "title": "Blüte von Djenné-Djenno",
    "text": "Eine der ältesten Städte Afrikas südlich der Sahara – gewachsen ohne königlichen Palast und ohne Stadtmauer, was gängige Staatsmodelle in Frage stellt."
   },
   {
    "year": 1235,
    "title": "Gründung des Mali-Reiches",
    "text": "Sundiata Keïta besiegt seine Gegner und begründet ein Großreich. Die Kouroukan Fouga, eine mündlich überlieferte Verfassung, regelt Rechte und Pflichten."
   },
   {
    "year": 1324,
    "title": "Pilgerfahrt des Mansa Musa",
    "text": "Der Herrscher Malis reist mit einem riesigen Gefolge nach Mekka und verschenkt in Kairo so viel Gold, dass dessen Wert dort jahrelang gedrückt bleibt."
   },
   {
    "year": 1375,
    "title": "Mali auf der Katalanischen Weltkarte",
    "text": "Europäische Kartografen zeichnen Mansa Musa mit Goldklumpen – Westafrika ist im europäischen Weltbild angekommen."
   },
   {
    "year": 1468,
    "title": "Songhai erobert Timbuktu",
    "text": "Unter Sonni Ali löst Songhai Mali als Vormacht ab. Timbuktu wird zum Zentrum von Handel und Gelehrsamkeit."
   },
   {
    "year": 1500,
    "title": "Universität Sankoré",
    "text": "In Timbuktu lehren und schreiben Gelehrte; die Handschriftensammlungen der Stadt umfassen bis heute Zehntausende Bände zu Recht, Astronomie und Medizin."
   },
   {
    "year": 1591,
    "title": "Schlacht von Tondibi",
    "text": "Eine marokkanische Armee mit Feuerwaffen zerschlägt das Songhai-Reich – ein früher Fall, in dem Schusswaffen ein Großreich entscheiden."
   },
   {
    "year": 1600,
    "title": "Ausweitung des atlantischen Sklavenhandels",
    "text": "Über drei Jahrhunderte werden schätzungsweise mehr als zwölf Millionen Menschen verschleppt; Westafrika ist die Hauptregion der Verschiffung."
   },
   {
    "year": 1804,
    "title": "Sokoto-Kalifat",
    "text": "Usman dan Fodios Reformbewegung begründet einen der größten afrikanischen Staaten des 19. Jahrhunderts."
   },
   {
    "year": 1884,
    "title": "Berliner Konferenz",
    "text": "Europäische Mächte teilen Afrika unter sich auf, ohne dass ein einziger Afrikaner am Tisch sitzt. Die gezogenen Grenzen bestehen weitgehend fort."
   },
   {
    "year": 1897,
    "title": "Britische Strafexpedition gegen Benin",
    "text": "Die Stadt wird zerstört und geplündert; die Benin-Bronzen gelangen in europäische Museen. Ihre Rückgabe wird seit den 2010er Jahren umgesetzt."
   },
   {
    "year": 1957,
    "title": "Ghana wird unabhängig",
    "text": "Als erste Kolonie südlich der Sahara – Kwame Nkrumah wird zur Leitfigur des Panafrikanismus."
   },
   {
    "year": 1960,
    "title": "Das Afrikanische Jahr",
    "text": "Siebzehn afrikanische Staaten erlangen die Unabhängigkeit, darunter Nigeria, Senegal, Mali und die Elfenbeinküste."
   },
   {
    "year": 1967,
    "title": "Biafra-Krieg",
    "text": "Der Sezessionskrieg in Nigeria fordert bis 1970 durch Kampfhandlungen und Hungerblockade über eine Million Opfer und prägt das Bild humanitärer Hilfe."
   },
   {
    "year": 2012,
    "title": "Bedrohung der Handschriften von Timbuktu",
    "text": "Bibliothekare bringen Zehntausende Manuskripte heimlich aus der Stadt, um sie vor Zerstörung zu bewahren."
   }
  ]
 },
 "Äthiopien": {
  "color": "#3f7d3f",
  "events": [
   {
    "year": 100,
    "title": "Aufstieg des Reiches Aksum",
    "text": "Ein Handelsreich am Roten Meer mit eigener Schrift und eigener Münzprägung – eine der wenigen Mächte der Antike, die eigenes Geld schlug."
   },
   {
    "year": 330,
    "title": "Christianisierung",
    "text": "König Ezana nimmt das Christentum an – Äthiopien gehört damit zu den ältesten christlichen Staaten der Welt."
   },
   {
    "year": 615,
    "title": "Aufnahme der ersten Muslime",
    "text": "Verfolgte Anhänger Mohammeds finden am aksumitischen Hof Zuflucht. Die Episode gilt als früher Fall religiöser Duldung."
   },
   {
    "year": 1200,
    "title": "Felsenkirchen von Lalibela",
    "text": "Elf Kirchen werden aus dem anstehenden Fels herausgemeißelt, von oben nach unten – ein Bauverfahren ohne Parallele."
   },
   {
    "year": 1270,
    "title": "Salomonische Dynastie",
    "text": "Die Herrscher leiten ihre Abstammung von Salomo und der Königin von Saba ab. Die Legende wird im Kebra Nagast festgehalten."
   },
   {
    "year": 1541,
    "title": "Portugiesische Hilfstruppen",
    "text": "Im Krieg gegen das Sultanat Adal erhält Äthiopien portugiesische Unterstützung – ein früher Fall europäischer Militärintervention in Afrika."
   },
   {
    "year": 1636,
    "title": "Gondar wird Hauptstadt",
    "text": "Erstmals seit Jahrhunderten hat der Hof einen festen Sitz; es entsteht eine Schloss- und Kirchenlandschaft."
   },
   {
    "year": 1855,
    "title": "Reichseinigung unter Tewodros II.",
    "text": "Nach der Zeit der Fürsten wird das zersplitterte Reich wieder zusammengeführt."
   },
   {
    "year": 1896,
    "title": "Schlacht von Adwa",
    "text": "Menelik II. schlägt die italienische Invasionsarmee vernichtend. Äthiopien bleibt als einziger afrikanischer Staat unkolonisiert – ein Symbol für die gesamte Bewegung gegen die Kolonialherrschaft."
   },
   {
    "year": 1930,
    "title": "Krönung Haile Selassies",
    "text": "Der Kaiser wird zur Symbolfigur weit über Afrika hinaus; in Jamaika entsteht in seinem Namen die Rastafari-Bewegung."
   },
   {
    "year": 1935,
    "title": "Italienischer Überfall",
    "text": "Mussolini lässt mit Giftgas angreifen. Der Völkerbund reagiert wirkungslos – ein Vorzeichen seines Scheiterns."
   },
   {
    "year": 1941,
    "title": "Befreiung von der italienischen Besatzung",
    "text": "Nach fünf Jahren Besatzung kehrt Haile Selassie zurück; äthiopische Widerstandskämpfer und britische Truppen vertreiben die Italiener."
   },
   {
    "year": 1963,
    "title": "Gründung der OAU in Addis Abeba",
    "text": "Die Organisation für Afrikanische Einheit wird gegründet; die Stadt bleibt bis heute Sitz der Afrikanischen Union."
   },
   {
    "year": 1974,
    "title": "Sturz des Kaisers",
    "text": "Der Derg übernimmt die Macht; es folgen Terror, Zwangsumsiedlungen und die Hungersnot von 1984."
   },
   {
    "year": 1991,
    "title": "Ende des Derg-Regimes",
    "text": "Rebellenverbände nehmen Addis Abeba ein; Eritrea wird 1993 nach einem Referendum unabhängig."
   },
   {
    "year": 2020,
    "title": "Krieg in Tigray",
    "text": "Ein zweijähriger Konflikt mit hunderttausenden Toten; 2022 folgt ein Waffenstillstandsabkommen."
   }
  ]
 },
 "Südostasien": {
  "color": "#1f7d6b",
  "events": [
   {
    "year": 802,
    "title": "Gründung des Khmer-Reiches",
    "text": "Jayavarman II. lässt sich zum Weltenherrscher weihen – Beginn eines Reiches, das ein halbes Jahrtausend das Festland beherrscht."
   },
   {
    "year": 825,
    "title": "Borobudur auf Java",
    "text": "Die größte buddhistische Tempelanlage der Welt entsteht; sie wurde später aufgegeben und erst im 19. Jahrhundert wieder freigelegt."
   },
   {
    "year": 1113,
    "title": "Bau von Angkor Wat",
    "text": "Zunächst ein Vishnu-Tempel, später buddhistisch genutzt – die größte religiöse Anlage der Welt, umgeben von einem Bewässerungssystem für womöglich Hunderttausende Menschen."
   },
   {
    "year": 1292,
    "title": "Marco Polo besucht Sumatra",
    "text": "Er berichtet von islamisch geprägten Hafenstädten – der Islam breitet sich über den Handel aus, nicht durch Eroberung."
   },
   {
    "year": 1400,
    "title": "Aufstieg von Malakka",
    "text": "Der Hafen wird zur Drehscheibe zwischen Indischem Ozean und Südchinesischem Meer und zum Ausgangspunkt der Islamisierung der Inselwelt."
   },
   {
    "year": 1511,
    "title": "Portugal erobert Malakka",
    "text": "Der erste europäische Stützpunkt in der Region – der Beginn eines Jahrhunderte währenden Kampfes um die Gewürzrouten."
   },
   {
    "year": 1602,
    "title": "Gründung der Niederländischen Ostindien-Kompanie",
    "text": "Die erste Aktiengesellschaft der Welt mit eigenem Militär und dem Recht, Krieg zu führen und Verträge zu schließen."
   },
   {
    "year": 1782,
    "title": "Beginn der Chakri-Dynastie in Siam",
    "text": "Bangkok wird Hauptstadt. Siam bleibt als einziges Land der Region formal unabhängig – durch geschickte Diplomatie zwischen Briten und Franzosen."
   },
   {
    "year": 1815,
    "title": "Ausbruch des Tambora",
    "text": "Der stärkste Vulkanausbruch der Neuzeit auf Sumbawa führt weltweit zum Jahr ohne Sommer, mit Missernten bis nach Europa und Nordamerika."
   },
   {
    "year": 1887,
    "title": "Französisch-Indochina",
    "text": "Vietnam, Kambodscha und später Laos werden zu einer Kolonialverwaltung zusammengefasst."
   },
   {
    "year": 1942,
    "title": "Japanische Besetzung",
    "text": "Binnen Monaten fallen die europäischen Kolonien. Der Mythos europäischer Unbesiegbarkeit zerbricht und beschleunigt die Unabhängigkeitsbewegungen."
   },
   {
    "year": 1945,
    "title": "Indonesien erklärt seine Unabhängigkeit",
    "text": "Sukarno ruft die Republik aus; erst nach vier Jahren Krieg erkennen die Niederlande sie an."
   },
   {
    "year": 1954,
    "title": "Dien Bien Phu",
    "text": "Die Niederlage beendet die französische Kolonialherrschaft in Indochina und teilt Vietnam."
   },
   {
    "year": 1965,
    "title": "Massaker in Indonesien",
    "text": "Nach einem gescheiterten Putsch werden Hunderttausende als angebliche Kommunisten getötet; die Aufarbeitung steht bis heute aus."
   },
   {
    "year": 1975,
    "title": "Machtübernahme der Roten Khmer",
    "text": "Bis 1979 sterben in Kambodscha schätzungsweise 1,5 bis 2 Millionen Menschen – ein Viertel der Bevölkerung."
   },
   {
    "year": 1997,
    "title": "Asienkrise",
    "text": "Der Zusammenbruch des thailändischen Baht löst eine regionale Finanzkrise aus und stürzt in Indonesien das Suharto-Regime."
   }
  ]
 },
 "Brasilien & Südamerika": {
  "color": "#7d5b1f",
  "events": [
   {
    "year": -1200,
    "title": "Chavín de Huántar",
    "text": "In den peruanischen Anden entsteht ein Kultzentrum, das über Jahrhunderte eine gemeinsame Bildsprache in weiten Teilen der Region prägt."
   },
   {
    "year": 100,
    "title": "Nazca-Linien",
    "text": "Riesige Scharrbilder in der Wüste Südperus, die vom Boden aus kaum erkennbar sind. Ihre Funktion – Wasserkult, Prozessionswege, Astronomie – bleibt umstritten."
   },
   {
    "year": 1438,
    "title": "Beginn der Inka-Expansion",
    "text": "Unter Pachacútec wächst ein Reich mit über 30.000 Kilometern Straßen, Terrassenfeldern und Knotenschnüren als Verwaltungsmedium – ohne Rad, Geld und Alphabetschrift."
   },
   {
    "year": 1500,
    "title": "Landung von Cabral in Brasilien",
    "text": "Die Portugiesen erreichen die Küste. Der Vertrag von Tordesillas hatte das Gebiet bereits 1494 zugesprochen."
   },
   {
    "year": 1532,
    "title": "Cajamarca",
    "text": "Pizarro nimmt Atahualpa mit weniger als zweihundert Mann gefangen. Entscheidend waren Bürgerkrieg im Reich, Verbündete und vor allem eingeschleppte Seuchen."
   },
   {
    "year": 1630,
    "title": "Quilombo dos Palmares",
    "text": "Entflohene Versklavte gründen im Nordosten Brasiliens ein Gemeinwesen, das fast ein Jahrhundert besteht, bevor es 1694 zerschlagen wird."
   },
   {
    "year": 1780,
    "title": "Aufstand des Túpac Amaru II.",
    "text": "Die größte indigene Erhebung gegen die spanische Herrschaft wird niedergeschlagen; sein Name wird zum Symbol späterer Bewegungen."
   },
   {
    "year": 1808,
    "title": "Der portugiesische Hof flieht nach Rio",
    "text": "Vor Napoleon setzt der Königshof über den Atlantik – der einzige Fall, in dem eine europäische Monarchie ihre Kolonie zum Regierungssitz macht."
   },
   {
    "year": 1819,
    "title": "Boyacá",
    "text": "Simón Bolívars Sieg nach dem Marsch über die Anden entscheidet die Unabhängigkeit Kolumbiens und leitet die Befreiung des Nordens ein."
   },
   {
    "year": 1822,
    "title": "Unabhängigkeit Brasiliens",
    "text": "Dom Pedro erklärt die Loslösung – ohne Krieg, als Kaiserreich, was Brasilien einen anderen Weg als seine Nachbarn nimmt."
   },
   {
    "year": 1864,
    "title": "Tripel-Allianz-Krieg",
    "text": "Paraguay verliert im Krieg gegen Brasilien, Argentinien und Uruguay einen großen Teil seiner männlichen Bevölkerung – der verlustreichste Krieg Südamerikas."
   },
   {
    "year": 1888,
    "title": "Abschaffung der Sklaverei in Brasilien",
    "text": "Als letztes Land der westlichen Welt. Ein Jahr später fällt die Monarchie – die Grundbesitzer entzogen ihr die Unterstützung."
   },
   {
    "year": 1930,
    "title": "Vargas kommt an die Macht",
    "text": "Fünfzehn Jahre autoritäre Modernisierung prägen Brasiliens Wirtschaft, Arbeitsrecht und Selbstbild."
   },
   {
    "year": 1960,
    "title": "Brasília wird Hauptstadt",
    "text": "Eine am Reißbrett entworfene Stadt im Landesinneren, gebaut in gut drei Jahren – Symbol des Fortschrittsglaubens der Moderne."
   },
   {
    "year": 1973,
    "title": "Putsch in Chile",
    "text": "Der Sturz Allendes leitet siebzehn Jahre Diktatur ein und macht Chile zum Versuchsfeld radikaler Wirtschaftsreformen."
   },
   {
    "year": 1985,
    "title": "Rückkehr zur Demokratie in Brasilien",
    "text": "Nach 21 Jahren endet die Militärherrschaft; 1988 folgt eine neue Verfassung, die Land- und indigene Rechte festschreibt."
   }
  ]
 },
 "Australien & Ozeanien": {
  "color": "#8a5b7d",
  "events": [
   {
    "year": -50000,
    "title": "Besiedlung Australiens",
    "text": "Menschen erreichen den Kontinent über Wasserwege – eine der frühesten bekannten Seefahrten der Menschheit. Die Aboriginal-Kulturen zählen damit zu den ältesten fortbestehenden der Welt."
   },
   {
    "year": -3000,
    "title": "Aufbruch der Lapita-Kultur",
    "text": "Von Melanesien aus besiedeln Seefahrer über Jahrtausende den Pazifik – navigiert wird nach Sternen, Dünung und Vogelflug."
   },
   {
    "year": 1000,
    "title": "Besiedlung Aotearoas",
    "text": "Polynesische Seefahrer erreichen Neuseeland, die letzte große bewohnbare Landmasse der Erde. Aus ihnen werden die Maori."
   },
   {
    "year": 1250,
    "title": "Errichtung der Moai",
    "text": "Auf der Osterinsel entstehen die Steinfiguren. Die These vom selbstverschuldeten ökologischen Kollaps gilt heute als überzogen – Sklavenraub und eingeschleppte Krankheiten wogen schwerer."
   },
   {
    "year": 1606,
    "title": "Erste dokumentierte europäische Landung",
    "text": "Willem Janszoon erreicht die Kap-York-Halbinsel. Die Niederländer nennen den Kontinent Neuholland und finden ihn wirtschaftlich uninteressant."
   },
   {
    "year": 1770,
    "title": "James Cook an der Ostküste",
    "text": "Cook erklärt das Land für die britische Krone – unter der Rechtsfiktion terra nullius, niemandes Land, obwohl es besiedelt war."
   },
   {
    "year": 1788,
    "title": "Die First Fleet in Botany Bay",
    "text": "Britannien richtet eine Sträflingskolonie ein. Für die indigene Bevölkerung beginnt eine Katastrophe aus Krankheiten, Vertreibung und Gewalt."
   },
   {
    "year": 1840,
    "title": "Vertrag von Waitangi",
    "text": "Britische Krone und Maori-Häuptlinge schließen einen Vertrag – dessen englische und Maori-Fassung Entscheidendes unterschiedlich sagen. Der Streit darüber prägt Neuseeland bis heute."
   },
   {
    "year": 1851,
    "title": "Goldrausch in Victoria",
    "text": "Die Bevölkerung Australiens verdreifacht sich binnen eines Jahrzehnts; Einwanderer aus China stoßen auf offene Diskriminierung."
   },
   {
    "year": 1901,
    "title": "Australischer Bund",
    "text": "Die Kolonien schließen sich zusammen. Eines der ersten Gesetze begründet die White Australia Policy, die bis in die 1970er Jahre gilt."
   },
   {
    "year": 1915,
    "title": "Gallipoli",
    "text": "Australische und neuseeländische Truppen erleiden schwere Verluste. Der ANZAC Day ist bis heute der wichtigste Gedenktag beider Länder."
   },
   {
    "year": 1942,
    "title": "Bombardierung von Darwin",
    "text": "Japanische Angriffe auf australischen Boden lösen die außenpolitische Neuausrichtung von Großbritannien zu den USA aus."
   },
   {
    "year": 1946,
    "title": "Atomtests im Pazifik",
    "text": "Über Jahrzehnte testen USA, Großbritannien und Frankreich Kernwaffen; Bewohner von Bikini, Maralinga und Mururoa tragen die Folgen."
   },
   {
    "year": 1967,
    "title": "Referendum über Aboriginal-Rechte",
    "text": "Über 90 Prozent stimmen dafür, indigene Australier in die Volkszählung aufzunehmen und Bundesgesetze auf sie anzuwenden."
   },
   {
    "year": 1992,
    "title": "Mabo-Urteil",
    "text": "Der High Court verwirft die Fiktion terra nullius und erkennt indigene Landrechte an – die folgenreichste Gerichtsentscheidung der australischen Geschichte."
   },
   {
    "year": 2008,
    "title": "Entschuldigung an die Gestohlenen Generationen",
    "text": "Premierminister Rudd entschuldigt sich für die jahrzehntelange Wegnahme indigener Kinder von ihren Familien."
   }
  ]
 },
 "Zentralasien & Seidenstraße": {
  "color": "#6b4f9a",
  "events": [
   {
    "year": -800,
    "title": "Die Reitervölker der Steppe",
    "text": "Saken und Skythen entwickeln eine Lebensweise, die auf berittenem Bogenschützentum beruht. Die Kombination aus Pferd, Reflexbogen und Beweglichkeit prägt die Kriegsführung Eurasiens für über zweitausend Jahre – bis Feuerwaffen sie entwerten."
   },
   {
    "year": -329,
    "title": "Alexander in Baktrien und Sogdien",
    "text": "Der Widerstand hier kostet Alexander fast drei Jahre – länger als die Eroberung des gesamten Perserreichs zuvor. Aus den zurückgelassenen Garnisonen entsteht das Griechisch-Baktrische Reich, dessen Münzen zu den kunstvollsten der Antike zählen."
   },
   {
    "year": -130,
    "title": "Zhang Qians Berichte erreichen China",
    "text": "Der Gesandte kehrt nach über einem Jahrzehnt zurück und beschreibt dem Han-Hof die Reiche des Westens. Das Wort Seidenstraße stammt allerdings erst von dem Geografen Ferdinand von Richthofen aus dem Jahr 1877 – die Zeitgenossen kannten kein solches Netz, sondern viele Teilstrecken."
   },
   {
    "year": 50,
    "title": "Das Kuschan-Reich",
    "text": "Zwischen Rom, Indien und China gelegen, wird es zur Drehscheibe des Fernhandels. In der Kunst von Gandhara wird der Buddha erstmals in menschlicher Gestalt dargestellt – vorher stand er nur für Symbole wie Fußspuren oder ein leerer Thron."
   },
   {
    "year": 552,
    "title": "Das Erste Türk-Kaganat",
    "text": "Erstmals trägt ein Reich den Namen Türk. Es reicht zeitweise von der Mandschurei bis ans Schwarze Meer. Die Orchon-Inschriften des 8. Jahrhunderts sind die ältesten bekannten Texte in einer Türksprache – und lesen sich als Warnung an die eigenen Nachkommen vor chinesischem Einfluss."
   },
   {
    "year": 751,
    "title": "Schlacht am Talas",
    "text": "Abbasidische und Tang-chinesische Truppen treffen aufeinander; China zieht sich dauerhaft aus Westturkestan zurück. Die verbreitete Erzählung, hier sei die Papierherstellung nach Westen gelangt, stützt sich auf eine späte Quelle und gilt in der Forschung als unsicher."
   },
   {
    "year": 819,
    "title": "Die Samaniden in Buchara",
    "text": "Unter persischsprachiger Herrschaft wird Buchara zum Bildungszentrum. Hier entsteht die neupersische Literatursprache – der Beweis, dass die islamische Expansion die eroberten Kulturen nicht auslöschte, sondern sich mit ihnen verband."
   },
   {
    "year": 1020,
    "title": "Ibn Sina und al-Biruni",
    "text": "Der Kanon der Medizin bleibt bis ins 17. Jahrhundert auch an europäischen Universitäten Lehrbuch. Al-Biruni berechnet den Erdumfang mit wenigen Prozent Abweichung und schreibt eine erstaunlich unvoreingenommene Beschreibung Indiens."
   },
   {
    "year": 1220,
    "title": "Der Mongolensturm",
    "text": "Buchara, Samarkand und Urgentsch werden erobert, die Bewässerungssysteme Chorezms zerstört. Die überlieferten Opferzahlen sind Propaganda beider Seiten und archäologisch nicht zu halten – der Einschnitt war dennoch tief und wirkte über Generationen."
   },
   {
    "year": 1370,
    "title": "Timur macht Samarkand zur Hauptstadt",
    "text": "Timur führt Feldzüge von Delhi bis Ankara und lässt Schädelpyramiden errichten; zugleich zieht er Handwerker aus aller Welt in seine Hauptstadt. Beides gehört zusammen und lässt sich nicht gegeneinander aufrechnen."
   },
   {
    "year": 1428,
    "title": "Die Sternwarte des Ulug Beg",
    "text": "Der Herrscher ist selbst Astronom. Sein Sternkatalog verzeichnet über tausend Sterne genauer als alles seit Ptolemäus. 1449 wird er auf Betreiben religiöser Gegner ermordet, die Sternwarte zerstört – sie wurde erst 1908 wiederentdeckt."
   },
   {
    "year": 1500,
    "title": "Die Usbeken übernehmen Transoxanien",
    "text": "Die Schaibaniden verdrängen die Timuriden. Einer der Vertriebenen, Babur, weicht nach Süden aus und begründet 1526 in Indien das Mogulreich – ein Reich, das aus einer zentralasiatischen Niederlage hervorgeht."
   },
   {
    "year": 1600,
    "title": "Verlagerung der Handelswege",
    "text": "Mit den europäischen Seerouten verliert der Karawanenhandel an Gewicht. Die ältere These vom abrupten Verfall gilt heute als überzeichnet: Regionaler Handel und die Verbindungen nach Russland und Indien blieben lange bedeutend."
   },
   {
    "year": 1865,
    "title": "Russland nimmt Taschkent",
    "text": "Binnen zwanzig Jahren fällt die gesamte Region an das Zarenreich. Zwischen Russland und Britisch-Indien beginnt das Great Game – ein Ringen um Einfluss, das die Grenzen Afghanistans bis heute bestimmt."
   },
   {
    "year": 1916,
    "title": "Aufstand in Turkestan",
    "text": "Die Einziehung zu Arbeitsdiensten im Ersten Weltkrieg löst eine Erhebung aus. Die Niederschlagung und die Flucht Zehntausender Kirgisen über die Berge nach China gelten in der heutigen Kirgisischen Republik als nationale Katastrophe."
   },
   {
    "year": 1924,
    "title": "Die sowjetische Grenzziehung",
    "text": "Moskau teilt die Region in nationale Republiken. Ethnische Kategorien, die vorher fließend waren, werden zu festen Nationalitäten mit Territorium und Schriftsprache – die heutigen Staaten und ihre Grenzkonflikte gehen darauf zurück."
   },
   {
    "year": 1960,
    "title": "Der Aralsee beginnt zu schrumpfen",
    "text": "Die Umleitung von Amudarja und Syrdarja für den Baumwollanbau lässt einen der größten Binnenseen der Erde weitgehend verschwinden. Es ist eine der am besten dokumentierten menschengemachten Umweltkatastrophen überhaupt."
   },
   {
    "year": 1991,
    "title": "Unabhängigkeit der fünf Republiken",
    "text": "Kasachstan, Usbekistan, Turkmenistan, Kirgisistan und Tadschikistan werden souverän – überwiegend ohne dass es dafür Unabhängigkeitsbewegungen gegeben hätte. In Tadschikistan folgt ein Bürgerkrieg mit über 50.000 Toten."
   },
   {
    "year": 2013,
    "title": "Ankündigung der Neuen Seidenstraße",
    "text": "China stellt in Astana ein Infrastrukturprogramm vor, das die Region wieder zum Transitraum zwischen Ost und West machen soll. Der Rückgriff auf das Bild der Seidenstraße ist dabei bewusste Geschichtspolitik."
   }
  ]
 },
 "Kanada": {
  "color": "#b02a2a",
  "events": [
   {
    "year": 1000,
    "title": "Nordleute in L'Anse aux Meadows",
    "text": "Auf Neufundland entsteht die einzige gesicherte Wikingersiedlung Amerikas. Sie hielt nur wenige Jahre – ein Kontakt ohne Folgen, fünfhundert Jahre vor Kolumbus."
   },
   {
    "year": 1497,
    "title": "John Cabot erreicht die Ostküste",
    "text": "Im englischen Auftrag landet er irgendwo zwischen Neufundland und Kap Breton; wo genau, ist bis heute strittig. Entscheidend war weniger das Land als der Fischreichtum davor."
   },
   {
    "year": 1534,
    "title": "Cartier nimmt Gaspé für Frankreich in Besitz",
    "text": "Er errichtet ein Kreuz und verschleppt zwei Söhne des Irokesen-Häuptlings Donnacona nach Frankreich. Das Muster aus Inbesitznahme und Übergriff steht am Anfang."
   },
   {
    "year": 1608,
    "title": "Champlain gründet Québec",
    "text": "Der Pelzhandel braucht feste Stützpunkte und indigene Partner. Neufrankreich entsteht als Handelsnetz, nicht als Siedlungskolonie – ein Grund, warum es dünn besiedelt blieb."
   },
   {
    "year": 1670,
    "title": "Charta der Hudson's Bay Company",
    "text": "Ein Handelsunternehmen erhält Hoheitsrechte über ein Gebiet, das ein Drittel des heutigen Kanada umfasst – ohne dass jemals ein Europäer den größten Teil davon gesehen hätte."
   },
   {
    "year": 1701,
    "title": "Der Große Friede von Montreal",
    "text": "1.300 Vertreter von rund vierzig indigenen Nationen verhandeln einen Monat lang mit Frankreich und beenden die Biberkriege. Ein Beleg dafür, dass indigene Mächte Vertragspartner auf Augenhöhe waren, nicht bloß Betroffene."
   },
   {
    "year": 1759,
    "title": "Schlacht auf der Abraham-Ebene",
    "text": "Québec fällt an Britannien; beide Befehlshaber sterben. Der Krieg um Nordamerika war Teil eines Weltkriegs, der von Indien bis Schlesien geführt wurde."
   },
   {
    "year": 1763,
    "title": "Königliche Proklamation",
    "text": "Nach dem Frieden von Paris erkennt die britische Krone indigenes Landrecht westlich der Appalachen an. Das Dokument ist bis heute Grundlage kanadischer Verfahren über Landansprüche."
   },
   {
    "year": 1774,
    "title": "Quebec Act",
    "text": "Britannien garantiert französisches Zivilrecht und die katholische Religion. Das sichert die Loyalität Québecs – und treibt die englischen Kolonien im Süden weiter in Richtung Revolution."
   },
   {
    "year": 1783,
    "title": "Ankunft der Loyalisten",
    "text": "Zehntausende verlassen die neuen Vereinigten Staaten, darunter mehrere tausend Schwarze Loyalisten, denen Freiheit versprochen worden war. Aus dieser Migration entsteht das englischsprachige Kanada."
   },
   {
    "year": 1812,
    "title": "Krieg gegen die Vereinigten Staaten",
    "text": "Amerikanische Invasionsversuche scheitern, auch am Widerstand indigener Verbündeter unter Tecumseh. In Kanada gilt der Krieg als Gründungserzählung, in den USA ist er weitgehend vergessen."
   },
   {
    "year": 1867,
    "title": "Die Konföderation",
    "text": "Der British North America Act vereinigt vier Provinzen zu einem Dominion. Anders als bei den Nachbarn im Süden geschieht die Staatsgründung ohne Krieg und ohne Bruch mit London."
   },
   {
    "year": 1876,
    "title": "Indian Act",
    "text": "Ein Gesetz regelt fast jeden Lebensbereich indigener Menschen, von der Landnutzung bis zur Frage, wer überhaupt als indigen gilt. Es ist in geänderter Form bis heute in Kraft."
   },
   {
    "year": 1885,
    "title": "Nordwest-Aufstand und Fertigstellung der Eisenbahn",
    "text": "Der Métis-Führer Louis Riel wird hingerichtet, im selben Jahr wird die Pazifikbahn vollendet. Gebaut haben sie zu einem großen Teil chinesische Arbeiter – die anschließend mit einer Kopfsteuer belegt wurden."
   },
   {
    "year": 1917,
    "title": "Vimy Ridge",
    "text": "Vier kanadische Divisionen kämpfen erstmals gemeinsam und nehmen den Höhenzug. Der Sieg wird zum nationalen Symbol – erkauft mit 10.602 Verlusten in vier Tagen, darunter 3.598 Tote."
   },
   {
    "year": 1931,
    "title": "Statut von Westminster",
    "text": "Kanada wird außenpolitisch souverän. Die Verfassung blieb allerdings bis 1982 ein britisches Gesetz, das nur London ändern konnte."
   },
   {
    "year": 1982,
    "title": "Verfassung und Charta der Rechte",
    "text": "Kanada holt seine Verfassung heim und gibt sich einen Grundrechtekatalog. Québec hat dem Text bis heute nicht zugestimmt."
   },
   {
    "year": 1995,
    "title": "Referendum in Québec",
    "text": "Die Unabhängigkeit wird mit 50,58 zu 49,42 Prozent abgelehnt – rund 54.000 Stimmen Unterschied bei einer Beteiligung von über 93 Prozent."
   },
   {
    "year": 1999,
    "title": "Gründung von Nunavut",
    "text": "Aus den Nordwest-Territorien wird ein eigenes Territorium mit Inuit-Mehrheit ausgegliedert – die erste größere Grenzänderung Kanadas seit 1949."
   },
   {
    "year": 2015,
    "title": "Bericht der Wahrheits- und Versöhnungskommission",
    "text": "Die Kommission bezeichnet das System der Residential Schools, in dem über ein Jahrhundert lang indigene Kinder ihren Familien entzogen wurden, als kulturellen Völkermord."
   }
  ]
 },
 "Karibik": {
  "color": "#1f8a7d",
  "events": [
   {
    "year": -500,
    "title": "Besiedlung von Südamerika aus",
    "text": "Über Jahrhunderte ziehen Gruppen vom Orinoco die Inselkette hinauf. Aus ihnen gehen die Kulturen hervor, die Kolumbus vorfindet – keine unberührte Inselwelt, sondern ein dicht vernetzter Raum."
   },
   {
    "year": 1492,
    "title": "Kolumbus landet auf den Bahamas",
    "text": "Er hält die Inseln für vorgelagertes Asien und nennt ihre Bewohner deshalb Indios. Der Irrtum steckt bis heute in der Bezeichnung Westindien."
   },
   {
    "year": 1494,
    "title": "Zuckerrohr kommt in die Karibik",
    "text": "Auf der zweiten Reise eingeführt, wird es zur Pflanze, die die Geschichte der Region bestimmt: Zucker verlangt viele Arbeitskräfte auf engem Raum – und liefert die Begründung für die Sklaverei."
   },
   {
    "year": 1518,
    "title": "Erste direkte Sklaventransporte aus Afrika",
    "text": "Die indigene Bevölkerung ist durch Zwangsarbeit und eingeschleppte Krankheiten weitgehend zusammengebrochen. Die Lücke wird über den Atlantik gefüllt."
   },
   {
    "year": 1655,
    "title": "England nimmt Jamaika",
    "text": "Ein eigentlich gescheitertes Unternehmen gegen Hispaniola endet mit der Eroberung Jamaikas. Die Insel wird zum Zentrum britischer Zuckerproduktion und der Freibeuterei von Port Royal."
   },
   {
    "year": 1697,
    "title": "Frankreich erhält Saint-Domingue",
    "text": "Der westliche Teil Hispaniolas wird französisch und binnen achtzig Jahren zur reichsten Kolonie der Welt – und zu der mit der höchsten Sterblichkeit unter den Versklavten."
   },
   {
    "year": 1739,
    "title": "Vertrag mit den Maroons von Jamaika",
    "text": "Nach jahrzehntelangem Krieg schließt Britannien Frieden mit entflohenen Versklavten und erkennt ihr Land an. Der Preis: Sie mussten künftige Flüchtlinge ausliefern."
   },
   {
    "year": 1791,
    "title": "Aufstand in Saint-Domingue",
    "text": "Der größte Sklavenaufstand der Geschichte beginnt. Unter Toussaint Louverture wird daraus ein Krieg gegen Frankreich, Spanien und England zugleich."
   },
   {
    "year": 1804,
    "title": "Haiti wird unabhängig",
    "text": "Der einzige Staat, der aus einem erfolgreichen Sklavenaufstand hervorging. Die Sklavenhaltermächte reagierten mit diplomatischer Isolierung – die USA erkannten Haiti erst 1862 an."
   },
   {
    "year": 1825,
    "title": "Frankreich erzwingt eine Entschädigung",
    "text": "Unter Androhung von Krieg verpflichtet sich Haiti zu 150 Millionen Francs für die enteigneten Sklavenhalter; 1838 auf 90 Millionen gesenkt. Mit Zinsen zahlte das Land bis 1947."
   },
   {
    "year": 1834,
    "title": "Abschaffung der Sklaverei im Britischen Reich",
    "text": "Sie gilt zunächst nur eingeschränkt: Bis 1838 mussten die Befreiten unbezahlt weiterarbeiten. Entschädigt wurden nicht sie, sondern ihre früheren Eigentümer."
   },
   {
    "year": 1845,
    "title": "Kontraktarbeiter aus Indien",
    "text": "Nach dem Ende der Sklaverei werden Hunderttausende aus Indien angeworben, vor allem nach Trinidad und Guyana. Ihre Nachkommen prägen die Bevölkerung dieser Länder bis heute."
   },
   {
    "year": 1886,
    "title": "Kuba schafft die Sklaverei ab",
    "text": "Als vorletztes Land Amerikas, zwei Jahre vor Brasilien. Der Zuckerboom hatte das System hier am längsten profitabel gehalten."
   },
   {
    "year": 1898,
    "title": "Der Spanisch-Amerikanische Krieg",
    "text": "Spanien verliert seine letzten Kolonien. Kuba wird formal unabhängig, Puerto Rico wird amerikanisch – und ist es bis heute, ohne volle Rechte im Bund."
   },
   {
    "year": 1915,
    "title": "Beginn der US-Besatzung Haitis",
    "text": "Neunzehn Jahre lang kontrollieren die USA Verwaltung und Finanzen. Sie hinterlassen Straßen, eine Armee und eine Zentralisierung, die spätere Diktaturen erleichterte."
   },
   {
    "year": 1959,
    "title": "Die Kubanische Revolution",
    "text": "Castro stürzt Batista. Die Insel wird für dreißig Jahre Verbündeter Moskaus und Schauplatz der gefährlichsten Konfrontation des Kalten Krieges."
   },
   {
    "year": 1962,
    "title": "Jamaika und Trinidad werden unabhängig",
    "text": "Der Versuch einer gemeinsamen Westindischen Föderation war kurz zuvor gescheitert. Die Kleinstaatlichkeit der Region ist damit besiegelt."
   },
   {
    "year": 1983,
    "title": "US-Invasion in Grenada",
    "text": "Nach einem Putsch marschieren amerikanische Truppen ein. Die Vereinten Nationen verurteilen den Einsatz – folgenlos."
   },
   {
    "year": 2010,
    "title": "Erdbeben in Haiti",
    "text": "Über 200.000 Tote; die Zahl bleibt umstritten, weil eine belastbare Erfassung fehlte. Die milliardenschwere Hilfe gilt als Lehrstück darüber, wie Nothilfe an Strukturen scheitern kann."
   }
  ]
 },
 "Südliches Afrika": {
  "color": "#8a7d1f",
  "events": [
   {
    "year": -2000,
    "title": "Jäger, Sammler und die ersten Hirten",
    "text": "Die San und später die Khoikhoi prägen die Region über Jahrtausende. Ihre Felsmalereien gehören zu den ältesten fortlaufenden Bildtraditionen der Welt."
   },
   {
    "year": 1220,
    "title": "Das Königreich Mapungubwe",
    "text": "Am Limpopo entsteht der erste bekannte Staat des südlichen Afrika, mit räumlich abgesetzter Elite und Handel bis Indien und China. Das goldene Nashorn aus seinen Gräbern ist heute ein Nationalsymbol."
   },
   {
    "year": 1300,
    "title": "Groß-Simbabwe",
    "text": "Die fugenlos gesetzten Steinmauern entstehen ohne Mörtel. Koloniale Autoren schrieben den Bau jahrzehntelang Fremden zu – die Archäologie hat das längst widerlegt."
   },
   {
    "year": 1652,
    "title": "Die Niederländer am Kap",
    "text": "Jan van Riebeeck errichtet eine Versorgungsstation für Schiffe nach Asien. Aus dem Zwischenstopp wird binnen einer Generation eine Siedlungskolonie mit versklavter Arbeit."
   },
   {
    "year": 1795,
    "title": "Britannien besetzt das Kap",
    "text": "Zunächst vorübergehend, ab 1806 dauerhaft. Der Wechsel der Kolonialmacht legt den Grundkonflikt zwischen Briten und Buren an."
   },
   {
    "year": 1818,
    "title": "Aufstieg Shakas und das Mfecane",
    "text": "Das Zulu-Reich entsteht, begleitet von großflächigen Umwälzungen im Binnenland. Wie viel davon auf Shaka zurückgeht und wie viel auf Dürre, Sklavenraub und Landhunger der Siedler, ist bis heute umstritten."
   },
   {
    "year": 1836,
    "title": "Der Große Treck",
    "text": "Buren ziehen ins Landesinnere, auch aus Protest gegen die britische Abschaffung der Sklaverei. Aus dem Zug entstehen die Burenrepubliken – und ein Gründungsmythos."
   },
   {
    "year": 1867,
    "title": "Diamanten bei Kimberley",
    "text": "Der Fund verwandelt eine Agrarkolonie in einen Industriestandort und zieht Arbeitsmigranten aus dem ganzen südlichen Afrika an. Das Wanderarbeitersystem beginnt hier."
   },
   {
    "year": 1879,
    "title": "Isandlwana und Ulundi",
    "text": "Die Zulu vernichten eine britische Kolonne, verlieren aber den Krieg innerhalb eines halben Jahres. Der Schock beschleunigte die britische Eroberung, statt sie aufzuhalten."
   },
   {
    "year": 1886,
    "title": "Gold am Witwatersrand",
    "text": "Das größte Goldvorkommen der Welt macht die Burenrepublik Transvaal reich – und für Britannien zum Ziel. Johannesburg entsteht aus dem Nichts."
   },
   {
    "year": 1899,
    "title": "Zweiter Burenkrieg",
    "text": "Britannien setzt gegen den Guerillakrieg der Buren verbrannte Erde und Lager ein, in denen Zehntausende Frauen, Kinder und schwarze Landarbeiter sterben. Das Wort Konzentrationslager wird hier geprägt."
   },
   {
    "year": 1910,
    "title": "Die Südafrikanische Union",
    "text": "Briten und Buren einigen sich – auf Kosten der schwarzen Mehrheit, die vom Wahlrecht praktisch ausgeschlossen bleibt. Die Versöhnung der Weißen ist die Grundlage des späteren Apartheidstaats."
   },
   {
    "year": 1912,
    "title": "Gründung des späteren ANC",
    "text": "Der South African Native National Congress entsteht als Reaktion auf den Ausschluss aus der Union. Er wird die älteste Befreiungsbewegung des Kontinents."
   },
   {
    "year": 1913,
    "title": "Natives Land Act",
    "text": "Etwa sieben Prozent der Landesfläche werden der schwarzen Bevölkerungsmehrheit zugewiesen, Landkauf außerhalb verboten. 1936 wird der Anteil auf gut dreizehn Prozent erhöht. Die Folgen dieser Verteilung wirken bis heute."
   },
   {
    "year": 1948,
    "title": "Apartheid wird Regierungsprogramm",
    "text": "Die Nationale Partei gewinnt die Wahl und gießt bestehende Trennung in ein lückenloses Gesetzeswerk. Neu war nicht die Diskriminierung, sondern ihre Systematik."
   },
   {
    "year": 1960,
    "title": "Sharpeville",
    "text": "Polizisten erschießen 69 Demonstranten gegen die Passgesetze, viele von hinten. Danach werden ANC und PAC verboten – und wenden sich dem bewaffneten Kampf zu."
   },
   {
    "year": 1964,
    "title": "Rivonia-Prozess",
    "text": "Mandela und Mitangeklagte werden zu lebenslanger Haft verurteilt. Seine Verteidigungsrede über eine Gesellschaft, für die er zu sterben bereit sei, wird weltweit gelesen."
   },
   {
    "year": 1976,
    "title": "Aufstand in Soweto",
    "text": "Schüler protestieren gegen Afrikaans als Unterrichtssprache; die Polizei schießt. Die Bilder beenden international die letzte Nachsicht mit dem Regime."
   },
   {
    "year": 1990,
    "title": "Freilassung Mandelas",
    "text": "De Klerk hebt das Verbot des ANC auf. Vier Jahre Verhandlungen unter fortgesetzter Gewalt folgen, bevor der Übergang gelingt."
   },
   {
    "year": 1994,
    "title": "Erste allgemeine Wahlen",
    "text": "Zum ersten Mal wählen alle Südafrikaner. Die anschließende Wahrheits- und Versöhnungskommission tauscht Aufklärung gegen Amnestie – ein weltweit kopiertes und bis heute umstrittenes Modell."
   }
  ]
 },
 "Ostafrika & Swahiliküste": {
  "color": "#1f6b3f",
  "events": [
   {
    "year": 50,
    "title": "Der Periplus des Erythräischen Meeres",
    "text": "Ein griechischer Handelsführer beschreibt Häfen an der ostafrikanischen Küste und den Warenverkehr mit Arabien und Indien. Die Region ist von Anfang an Teil des Indischen Ozeans, nicht Hinterland."
   },
   {
    "year": 800,
    "title": "Die Swahili-Städte entstehen",
    "text": "Aus dem Zusammentreffen von Bantu-Bevölkerung, Islam und Seehandel entwickelt sich eine eigene Stadtkultur mit eigener Sprache – Kiswahili ist eine Bantusprache mit arabischem Wortschatz, keine arabische Kolonialsprache."
   },
   {
    "year": 1000,
    "title": "Aufstieg Kilwas",
    "text": "Die Stadt kontrolliert den Goldexport aus dem Hinterland Simbabwes und prägt eigene Münzen. Ihre Große Moschee ist einer der ältesten erhaltenen Sakralbauten südlich der Sahara."
   },
   {
    "year": 1331,
    "title": "Ibn Battuta besucht Kilwa",
    "text": "Der marokkanische Reisende nennt sie eine der schönsten Städte der Welt. Sein Bericht ist eine der wenigen ausführlichen Außenbeschreibungen der Küste vor der europäischen Zeit."
   },
   {
    "year": 1417,
    "title": "Eine Giraffe für den Kaiser von China",
    "text": "Gesandte aus Malindi bringen mit Zheng Hes Flotte eine Giraffe nach Peking, wo sie als Glückstier gedeutet wird. Ostafrika und China standen in direktem diplomatischem Kontakt."
   },
   {
    "year": 1498,
    "title": "Vasco da Gama an der Küste",
    "text": "In Malindi findet er einen Lotsen, der ihn nach Indien bringt. Die Portugiesen treten in ein bestehendes Handelsnetz ein – sie erschließen es nicht, sie übernehmen es gewaltsam."
   },
   {
    "year": 1505,
    "title": "Portugal plündert Kilwa und Mombasa",
    "text": "Innerhalb weniger Jahre bricht die alte Städtekultur zusammen. Der Handel verlagert sich, viele Orte erholen sich nie."
   },
   {
    "year": 1698,
    "title": "Oman vertreibt die Portugiesen",
    "text": "Nach fast dreijähriger Belagerung fällt Fort Jesus in Mombasa. Die Vorherrschaft im westlichen Indischen Ozean wechselt zurück an eine regionale Macht."
   },
   {
    "year": 1840,
    "title": "Sansibar wird Residenz des Sultans von Oman",
    "text": "Said bin Sultan verlegt seinen Sitz nach Afrika. Die Insel wird Zentrum des Gewürznelkenanbaus – und des ostafrikanischen Sklavenhandels."
   },
   {
    "year": 1873,
    "title": "Schließung des Sklavenmarkts von Sansibar",
    "text": "Unter britischem Druck; der Handel verlagert sich zunächst in den Untergrund. Der ostafrikanische Sklavenhandel wird in Europa bis heute weit weniger erinnert als der atlantische."
   },
   {
    "year": 1885,
    "title": "Deutsch-Ostafrika entsteht",
    "text": "Nach der Berliner Konferenz sichert sich das Deutsche Reich das Gebiet des heutigen Tansania, Ruanda und Burundi – erworben durch Verträge, deren Inhalt die Unterzeichner meist nicht kannten."
   },
   {
    "year": 1896,
    "title": "Der Anglo-Sansibar-Krieg",
    "text": "Er dauert achtunddreißig Minuten und gilt als kürzester Krieg der Geschichte. Auf sansibarischer Seite gab es rund fünfhundert Tote und Verwundete, auf britischer einen Verletzten – das Missverhältnis ist die eigentliche Aussage."
   },
   {
    "year": 1905,
    "title": "Der Maji-Maji-Krieg",
    "text": "Der Aufstand gegen die deutsche Kolonialherrschaft wird mit verbrannter Erde beantwortet. Die Schätzungen der Toten reichen von 75.000, wie die Kolonialverwaltung angab, bis zu 300.000; die meisten starben an der herbeigeführten Hungersnot."
   },
   {
    "year": 1952,
    "title": "Der Mau-Mau-Aufstand",
    "text": "Britannien internierte in Kenia Zehntausende in Lagern; Folter war verbreitet. Erst 2013 zahlte London 19,9 Millionen Pfund an 5.228 Überlebende – verbunden mit dem Ausdruck von Bedauern, ausdrücklich nicht mit einer Entschuldigung."
   },
   {
    "year": 1961,
    "title": "Tanganjika wird unabhängig",
    "text": "Nyerere führt das Land ohne Krieg in die Unabhängigkeit. Kenia folgt 1963, Uganda 1962."
   },
   {
    "year": 1964,
    "title": "Revolution und Union",
    "text": "Nach dem Sturz des Sultans von Sansibar schließt sich die Insel mit Tanganjika zu Tansania zusammen. Die Union besteht bis heute, mit anhaltenden Spannungen."
   },
   {
    "year": 1994,
    "title": "Der Völkermord in Ruanda",
    "text": "In gut hundert Tagen werden schätzungsweise 800.000 Menschen getötet, überwiegend Tutsi. Die internationale Gemeinschaft zog Truppen ab, statt einzugreifen – das Versagen ist bis heute Bezugspunkt jeder Debatte über Schutzverantwortung."
   },
   {
    "year": 2007,
    "title": "M-Pesa in Kenia",
    "text": "Geldüberweisung per einfachem Mobiltelefon, ohne Bankkonto. Ostafrika übersprang eine Entwicklungsstufe, die Europa noch mit sich herumträgt – ein seltener Fall, in dem der Norden vom Süden lernt."
   }
  ]
 },
 "Ostmitteleuropa": {
  "color": "#8a3f6b",
  "events": [
   {
    "year": 966,
    "title": "Die Taufe Mieszkos I.",
    "text": "Der Piastenherrscher nimmt das Christentum an – über Böhmen, nicht über das Ostfrankenreich. Die Entscheidung sichert Polen die Eigenständigkeit gegenüber dem westlichen Nachbarn."
   },
   {
    "year": 1000,
    "title": "Das Treffen von Gnesen",
    "text": "Kaiser Otto III. besucht das Grab des Adalbert und erkennt Polen als gleichrangig an. Sein Entwurf eines Europas mehrerer gleichberechtigter Königreiche zerfiel nach seinem frühen Tod."
   },
   {
    "year": 1241,
    "title": "Der Mongolensturm",
    "text": "Bei Liegnitz wird ein polnisch-deutsches Heer vernichtend geschlagen, Ungarn wird verwüstet. Der Rückzug der Mongolen nach dem Tod des Großkhans rettete die Region, nicht ihr Widerstand."
   },
   {
    "year": 1348,
    "title": "Gründung der Universität Prag",
    "text": "Die erste Universität nördlich der Alpen und östlich von Paris. Karl IV. macht Prag zum Zentrum des Reiches – ein Vorsprung, den die Region später verliert."
   },
   {
    "year": 1385,
    "title": "Die Union von Krewo",
    "text": "Polen und Litauen verbinden sich dynastisch. Es entsteht der flächengrößte Staat Europas – und der letzte heidnische Herrscher des Kontinents lässt sich taufen."
   },
   {
    "year": 1410,
    "title": "Schlacht bei Tannenberg",
    "text": "Das polnisch-litauische Heer schlägt den Deutschen Orden. Der Ort bekam im 20. Jahrhundert eine zweite, ganz andere Bedeutung – die deutsche Erinnerung an 1914 überschrieb bewusst die Niederlage von 1410."
   },
   {
    "year": 1505,
    "title": "Nihil novi",
    "text": "Der König darf nichts ohne Zustimmung des Adelsparlaments beschließen. Polen-Litauen wird zur Adelsrepublik mit gewähltem König – ungewöhnlich für Europa und langfristig lähmend."
   },
   {
    "year": 1569,
    "title": "Die Union von Lublin",
    "text": "Aus der Personalunion wird ein gemeinsamer Staat mit gemeinsamem Parlament. Die Warschauer Konföderation garantiert 1573 Religionsfrieden – zur selben Zeit, als Westeuropa Konfessionskriege führt."
   },
   {
    "year": 1652,
    "title": "Das erste Liberum veto",
    "text": "Ein einzelner Abgeordneter kann den Reichstag auflösen. Was als Schutz der Freiheit gedacht war, macht den Staat über ein Jahrhundert regierungsunfähig."
   },
   {
    "year": 1683,
    "title": "Entsatz Wiens",
    "text": "Jan III. Sobieski führt das Entsatzheer. Der letzte große außenpolitische Erfolg der Adelsrepublik – die zugleich innerlich längst blockiert war."
   },
   {
    "year": 1772,
    "title": "Erste Teilung Polens",
    "text": "Russland, Preußen und Österreich nehmen sich Gebiete, ohne Krieg und mit Zustimmung des eingeschüchterten Reichstags."
   },
   {
    "year": 1791,
    "title": "Die Verfassung vom 3. Mai",
    "text": "Sie schafft das Liberum veto ab und gilt als erste moderne Verfassung Europas – wie eng man den Begriff modern fasst, ist Definitionssache. Vier Jahre später existiert Polen nicht mehr."
   },
   {
    "year": 1795,
    "title": "Dritte Teilung",
    "text": "Polen verschwindet für 123 Jahre von der Landkarte. Die Nation überlebt in Sprache, Literatur und Kirche – ein Beispiel dafür, dass Staat und Nation zweierlei sind."
   },
   {
    "year": 1867,
    "title": "Der Ausgleich mit Ungarn",
    "text": "Österreich-Ungarn entsteht. Ungarn erhält weitgehende Eigenständigkeit; die slawischen Völker der Monarchie gehen leer aus, was die Doppelmonarchie dauerhaft belastet."
   },
   {
    "year": 1918,
    "title": "Staatsgründungen nach dem Weltkrieg",
    "text": "Polen, die Tschechoslowakei und Ungarn entstehen oder erstehen neu. Die Grenzen folgen kaum je klaren Sprachgrenzen – überall bleiben große Minderheiten zurück."
   },
   {
    "year": 1939,
    "title": "Überfall auf Polen",
    "text": "Deutschland greift am 1. September an, die Sowjetunion am 17. – beides vereinbart im Hitler-Stalin-Pakt. Polen wird zum Hauptschauplatz der deutschen Vernichtungspolitik."
   },
   {
    "year": 1943,
    "title": "Aufstand im Warschauer Ghetto",
    "text": "Wenige hundert schlecht bewaffnete Kämpfer halten fast einen Monat stand. Es ist der erste größere städtische Aufstand im besetzten Europa."
   },
   {
    "year": 1944,
    "title": "Der Warschauer Aufstand",
    "text": "63 Tage Kampf; Schätzungen sprechen von 150.000 bis 200.000 Toten, überwiegend Zivilisten. Die Rote Armee blieb jenseits der Weichsel stehen – aus militärischen oder politischen Gründen, darüber wird bis heute gestritten."
   },
   {
    "year": 1956,
    "title": "Ungarischer Volksaufstand",
    "text": "Die sowjetische Intervention kostet Tausende das Leben; 200.000 Menschen fliehen. Der Westen greift nicht ein – eine Lehre, die den Ostblock für Jahrzehnte prägt."
   },
   {
    "year": 1968,
    "title": "Der Prager Frühling",
    "text": "Der Versuch eines Sozialismus mit menschlichem Antlitz endet mit dem Einmarsch der Warschauer-Pakt-Staaten. Danach glaubt kaum noch jemand an eine Reform des Systems von innen."
   },
   {
    "year": 1980,
    "title": "Gründung der Solidarność",
    "text": "Auf der Danziger Werft entsteht die erste unabhängige Gewerkschaft im Ostblock. Binnen eines Jahres hat sie fast zehn Millionen Mitglieder."
   },
   {
    "year": 1989,
    "title": "Das Jahr der Umbrüche",
    "text": "Halbfreie Wahlen in Polen im Juni, das Loch im Eisernen Vorhang in Ungarn im Sommer, die Samtene Revolution in Prag im November. Der Mauerfall ist Teil einer Kette, nicht ihr Anfang."
   }
  ]
 },
 "Levante": {
  "color": "#a06a2e",
  "events": [
   {
    "year": -9000,
    "title": "Jericho",
    "text": "Mauer und Turm der frühen Siedlung entstehen Jahrtausende vor jeder Schrift. Wozu sie dienten – Verteidigung, Hochwasserschutz, Repräsentation – ist bis heute offen."
   },
   {
    "year": -1400,
    "title": "Ugarit und das Alphabet",
    "text": "In der Hafenstadt an der syrischen Küste wird eine Keilschrift mit rund dreißig Zeichen benutzt. Der Schritt von hunderten Zeichen zu wenigen macht Schrift lernbar für Nichtspezialisten."
   },
   {
    "year": -1000,
    "title": "Phönizische Städte und israelitische Königreiche",
    "text": "Tyros und Sidon gründen Handelsniederlassungen bis Spanien. Über Ausdehnung und Macht der israelitischen Königreiche wird zwischen Bibelwissenschaft und Archäologie bis heute gestritten."
   },
   {
    "year": -586,
    "title": "Zerstörung Jerusalems und Babylonisches Exil",
    "text": "Der Tempel wird zerstört, die Oberschicht verschleppt. Im Exil entsteht ein Großteil dessen, was später die hebräische Bibel bildet – eine Religion überlebt den Verlust ihres Zentrums."
   },
   {
    "year": -333,
    "title": "Alexander und die hellenistische Zeit",
    "text": "Griechische Sprache und Stadtkultur überlagern die Region. Der Konflikt zwischen Anpassung und Bewahrung führt 167 v. Chr. zum Makkabäeraufstand."
   },
   {
    "year": 70,
    "title": "Zerstörung des Zweiten Tempels",
    "text": "Rom schlägt den jüdischen Aufstand nieder. Aus der Tempelreligion wird das rabbinische Judentum – Lehrhaus und Text ersetzen den Opferkult."
   },
   {
    "year": 135,
    "title": "Bar-Kochba-Aufstand niedergeschlagen",
    "text": "Rom benennt die Provinz in Syria Palaestina um und verbietet Juden Jerusalem. Der Name Palästina in seiner heutigen Verwendung geht auf diesen Verwaltungsakt zurück."
   },
   {
    "year": 636,
    "title": "Schlacht am Jarmuk",
    "text": "Die muslimischen Heere besiegen Byzanz; die Levante wird binnen weniger Jahre islamisch beherrscht. Christliche und jüdische Gemeinden bleiben, unter eigenem Recht und mit Sondersteuer."
   },
   {
    "year": 691,
    "title": "Der Felsendom",
    "text": "Der älteste erhaltene islamische Monumentalbau entsteht auf dem Tempelberg. Der Ort ist damit für drei Religionen zentral – die Grundlage eines Konflikts, der bis in die Gegenwart reicht."
   },
   {
    "year": 1099,
    "title": "Die Kreuzfahrer nehmen Jerusalem",
    "text": "Die Eroberung geht mit einem Massaker an Muslimen und Juden einher. Für die islamische Welt war der Vorgang zunächst ein Randereignis; zum Symbol wurde er erst später."
   },
   {
    "year": 1187,
    "title": "Saladin gewinnt Jerusalem zurück",
    "text": "Nach dem Sieg bei Hattin nimmt er die Stadt weitgehend ohne Blutvergießen ein. Der Kontrast zu 1099 prägte seinen Ruf auch in Europa."
   },
   {
    "year": 1291,
    "title": "Fall von Akkon",
    "text": "Der letzte Kreuzfahrerstützpunkt fällt. Zwei Jahrhunderte lateinische Herrschaft enden – hinterlassen aber dauerhafte Handelsbeziehungen zwischen Europa und dem Osten."
   },
   {
    "year": 1516,
    "title": "Osmanische Herrschaft beginnt",
    "text": "Vier Jahrhunderte lang gehört die Levante zum Osmanischen Reich. Das Millet-System gewährt Religionsgemeinschaften eigene Rechtsprechung – Ordnung durch Trennung, nicht durch Gleichheit."
   },
   {
    "year": 1860,
    "title": "Bürgerkrieg im Libanongebirge",
    "text": "Kämpfe zwischen Drusen und Maroniten führen zu europäischer Intervention und einer autonomen Provinz. Die konfessionelle Aufteilung politischer Ämter im Libanon hat hier ihren Ursprung."
   },
   {
    "year": 1916,
    "title": "Das Sykes-Picot-Abkommen",
    "text": "Britannien und Frankreich teilen die Region geheim in Einflusszonen – während sie den Arabern zugleich einen eigenen Staat in Aussicht stellen. Die Doppelzüngigkeit belastet das Verhältnis bis heute."
   },
   {
    "year": 1917,
    "title": "Die Balfour-Erklärung",
    "text": "Britannien befürwortet eine nationale Heimstätte für das jüdische Volk in Palästina und will zugleich die Rechte der bestehenden Bevölkerung wahren. Beide Zusagen ließen sich nicht gleichzeitig einlösen."
   },
   {
    "year": 1920,
    "title": "Völkerbundmandate",
    "text": "Frankreich erhält Syrien und Libanon, Britannien Palästina und Transjordanien. Die heutigen Staatsgrenzen der Region stammen im Kern aus dieser Zeit."
   },
   {
    "year": 1936,
    "title": "Der Arabische Aufstand in Palästina",
    "text": "Drei Jahre Erhebung gegen die Mandatsmacht und die jüdische Einwanderung. Die Niederschlagung schwächt die palästinensische Führung nachhaltig."
   },
   {
    "year": 1947,
    "title": "Der UN-Teilungsplan",
    "text": "Die Vollversammlung empfiehlt zwei Staaten. Die jüdische Seite stimmt zu, die arabische lehnt ab – für sie war die Aufteilung eines mehrheitlich arabisch bewohnten Landes nicht hinnehmbar."
   },
   {
    "year": 1948,
    "title": "Staatsgründung Israels und Nakba",
    "text": "Israel erklärt seine Unabhängigkeit, benachbarte Staaten greifen an. Im Krieg fliehen oder werden vertrieben nach UN-Erhebungen von 1949 und 1950 zwischen 711.000 und 726.000 Palästinenser. Dasselbe Jahr ist für die eine Seite Gründung, für die andere Katastrophe."
   },
   {
    "year": 1967,
    "title": "Der Sechstagekrieg",
    "text": "Israel besetzt Westjordanland, Gaza, Golan und Sinai. Aus einem zwischenstaatlichen Konflikt wird zusätzlich einer über Besatzung – die Kernfrage der folgenden Jahrzehnte."
   },
   {
    "year": 1975,
    "title": "Bürgerkrieg im Libanon",
    "text": "Fünfzehn Jahre Krieg mit über 100.000 Toten, ausländischen Interventionen und Massakern auf mehreren Seiten. Der Staat erholt sich davon bis heute nicht vollständig."
   },
   {
    "year": 1979,
    "title": "Frieden zwischen Ägypten und Israel",
    "text": "Der erste Friedensvertrag Israels mit einem arabischen Staat. Sadat bezahlt ihn 1981 mit dem Leben."
   },
   {
    "year": 1993,
    "title": "Die Oslo-Abkommen",
    "text": "Gegenseitige Anerkennung und Selbstverwaltung als Zwischenschritt. Die Kernfragen – Grenzen, Jerusalem, Flüchtlinge, Siedlungen – wurden vertagt und blieben ungelöst."
   },
   {
    "year": 2011,
    "title": "Aufstand und Krieg in Syrien",
    "text": "Aus Protesten wird ein Krieg mit hunderttausenden Toten und Millionen Vertriebenen – die größte Fluchtbewegung seit dem Zweiten Weltkrieg."
   }
  ]
 },
 "Arabische Halbinsel": {
  "color": "#6b6b2e",
  "events": [
   {
    "year": -800,
    "title": "Die Weihrauchstraße",
    "text": "Saba und andere südarabische Reiche leben vom Handel mit Weihrauch und Myrrhe. Ihre Bewässerungsanlagen, darunter der Damm von Marib, gehören zu den größten Bauwerken der Antike."
   },
   {
    "year": 570,
    "title": "Mekka als Handels- und Kultort",
    "text": "Die Stadt liegt an der Karawanenroute und beherbergt ein überregionales Heiligtum. Die Verbindung von Handel und Pilgerwesen bestand vor dem Islam und wurde von ihm übernommen."
   },
   {
    "year": 622,
    "title": "Die Hidschra",
    "text": "Mohammeds Auswanderung nach Medina ist der Beginn der islamischen Zeitrechnung – gezählt wird nicht ab seiner Geburt oder Berufung, sondern ab der Gründung eines Gemeinwesens."
   },
   {
    "year": 632,
    "title": "Tod Mohammeds",
    "text": "Binnen weniger Jahre ist die Halbinsel geeint. Der Streit um die Nachfolge führt zur bis heute wirksamen Trennung zwischen Sunniten und Schiiten."
   },
   {
    "year": 661,
    "title": "Die Umayyaden verlegen die Hauptstadt nach Damaskus",
    "text": "Das Zentrum der islamischen Welt wandert nach Norden. Die Halbinsel wird für tausend Jahre religiöses Herz und politische Peripherie zugleich."
   },
   {
    "year": 1517,
    "title": "Die Osmanen übernehmen den Hedschas",
    "text": "Der Sultan wird Schutzherr von Mekka und Medina – ein Titel, der seine Autorität in der gesamten islamischen Welt begründet."
   },
   {
    "year": 1744,
    "title": "Das Bündnis von Diriyya",
    "text": "Der Fürst Muhammad ibn Saud und der Rechtsgelehrte Muhammad ibn Abd al-Wahhab verbinden Herrschaft und Lehre. Die Verbindung von Dynastie und religiöser Reformbewegung trägt bis heute."
   },
   {
    "year": 1818,
    "title": "Zerstörung des ersten saudischen Staates",
    "text": "Osmanisch-ägyptische Truppen schleifen Diriyya. Die Bewegung überlebt und formiert sich im Landesinneren neu."
   },
   {
    "year": 1902,
    "title": "Ibn Saud nimmt Riad",
    "text": "Mit einer kleinen Schar erobert er die Stadt zurück. Es folgen dreißig Jahre Feldzüge, an deren Ende ein Staat steht."
   },
   {
    "year": 1916,
    "title": "Die Arabische Revolte",
    "text": "Der Scherif von Mekka erhebt sich mit britischer Unterstützung gegen die Osmanen. Die zugesagte arabische Einheit kam nie – stattdessen kamen die Mandatsgrenzen."
   },
   {
    "year": 1932,
    "title": "Gründung des Königreichs Saudi-Arabien",
    "text": "Der Staat trägt den Namen seiner Herrscherfamilie – weltweit fast einzigartig. Er ist zu diesem Zeitpunkt bitterarm und lebt von Pilgerabgaben."
   },
   {
    "year": 1938,
    "title": "Erdölfund bei Dammam",
    "text": "Nach Jahren erfolgloser Bohrungen wird man fündig. Binnen einer Generation verwandelt sich die Wirtschaftsgrundlage der gesamten Region."
   },
   {
    "year": 1945,
    "title": "Das Treffen auf der USS Quincy",
    "text": "Roosevelt und Ibn Saud vereinbaren Öl gegen Sicherheit. Diese Grundformel prägt die amerikanische Nahostpolitik bis heute."
   },
   {
    "year": 1948,
    "title": "Entdeckung des Ghawar-Feldes",
    "text": "Das größte konventionelle Ölfeld der Erde. Wie viel noch darin steckt, war jahrzehntelang Staatsgeheimnis – belastbare Zahlen gibt es erst seit 2019."
   },
   {
    "year": 1960,
    "title": "Gründung der OPEC",
    "text": "Fünf Förderstaaten schließen sich zusammen, um Preise und Fördermengen selbst zu bestimmen. 1973 zeigt sich, welche Macht darin liegt."
   },
   {
    "year": 1971,
    "title": "Unabhängigkeit der Golfstaaten",
    "text": "Britannien zieht sich östlich von Suez zurück. Die Vereinigten Arabischen Emirate, Katar und Bahrain entstehen als eigenständige Staaten."
   },
   {
    "year": 1979,
    "title": "Besetzung der Großen Moschee in Mekka",
    "text": "Bewaffnete Aufständische halten das Heiligtum zwei Wochen. Die saudische Führung antwortet mit weitreichenden Zugeständnissen an die religiösen Gelehrten – ein Wendepunkt hin zu größerer Strenge."
   },
   {
    "year": 1990,
    "title": "Irak besetzt Kuwait",
    "text": "Die anschließende internationale Militäraktion bringt amerikanische Truppen dauerhaft auf die Halbinsel – ein Umstand, den islamistische Bewegungen zur Rechtfertigung ihres Terrors heranzogen."
   },
   {
    "year": 2015,
    "title": "Krieg im Jemen",
    "text": "Eine von Saudi-Arabien geführte Koalition greift ein. Die Vereinten Nationen sprechen jahrelang von einer der schwersten humanitären Krisen der Welt."
   },
   {
    "year": 2016,
    "title": "Vision 2030",
    "text": "Saudi-Arabien kündigt den Umbau weg vom Öl an. Ob eine Rentenökonomie sich aus eigener Kraft in eine andere Wirtschaftsform verwandeln kann, ist historisch weitgehend unerprobt."
   }
  ]
 }
};

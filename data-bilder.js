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
  "id": "1492",
  "datei": "bilder/1492.jpg",
  "breite": 1000,
  "hoehe": 1398,
  "zeigt": "Der Löwenhof der Alhambra",
  "bildunterschrift": "1492 fiel Granada, wurden die Juden Spaniens vertrieben und segelte Kolumbus. Drei Ereignisse eines Jahres, die zusammenhängen: Dieselbe Krone finanzierte alle drei.",
  "urheber": "Jebulon",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Pavillon_Cour_des_Lions_Alhambra_Granada_Spain.jpg"
 },
 {
  "id": "alexanderzug",
  "datei": "bilder/alexanderzug.jpg",
  "breite": 1000,
  "hoehe": 708,
  "zeigt": "Das Alexandermosaik aus Pompeji",
  "bildunterschrift": "Alexander gegen Dareios bei Issos, um 100 v. Chr. in Millionen Steinchen gelegt nach einem verlorenen Gemälde. Der Feldzug verschob eine Kulturgrenze um mehrere tausend Kilometer.",
  "urheber": "Unknown creatorUnknown creator",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Alexander_and_Bucephalus_-_Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_BW.jpg"
 },
 {
  "id": "amerikanische-revolution",
  "datei": "bilder/amerikanische-revolution.jpg",
  "breite": 1000,
  "hoehe": 536,
  "zeigt": "Die Unabhängigkeitserklärung",
  "bildunterschrift": "Alle Menschen sind gleich geschaffen — geschrieben von einem Sklavenhalter. Der Widerspruch stand von Anfang an im Text und wurde zur Triebfeder der folgenden zwei Jahrhunderte.",
  "urheber": "Frederick Girsch at the American Bank Note Company, for the Bureau of Engraving and Printing",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:BEP-GIRSCH-Declaration_of_Independence_(Trumbull).jpg"
 },
 {
  "id": "amerikanischer-buergerkrieg",
  "datei": "bilder/amerikanischer-buergerkrieg.jpg",
  "breite": 1000,
  "hoehe": 1280,
  "zeigt": "Das Schlachtfeld von Gettysburg, 1863 aufgezeichnet",
  "bildunterschrift": "Gettysburg war die Wende. Es war zugleich der erste Krieg, dessen Tote fotografiert wurden — die Bilder veränderten, was Menschen in der Heimat über Krieg wussten.",
  "urheber": "Unknown authorUnknown author",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Sketch_of_the_battlefield_of_Gettysburg,_July_1st_and_2nd,_1863._LOC_2005625069.jpg"
 },
 {
  "id": "angkor",
  "datei": "bilder/angkor.jpg",
  "breite": 1000,
  "hoehe": 504,
  "zeigt": "Angkor Wat",
  "bildunterschrift": "Der größte religiöse Bau der Welt, Mittelpunkt einer Stadt, die zu ihrer Zeit vielleicht die größte der Erde war. Getragen wurde sie von einem Wassersystem, dessen Versagen zum Ende gehörte.",
  "urheber": "Satdeep Gill",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Angkor_Wat_with_its_reflection_(cropped).jpg"
 },
 {
  "id": "antibiotika",
  "datei": "bilder/antibiotika.jpg",
  "breite": 1000,
  "hoehe": 774,
  "zeigt": "Alexander Fleming in seinem Labor am St Mary's Hospital, London",
  "bildunterschrift": "Die Aufnahme entstand während des Zweiten Weltkriegs. 1945 erhielt Fleming den Nobelpreis — und warnte in seiner Rede genau vor dem, was heute geschieht: Wer zu niedrig dosiert oder ohne Grund einnimmt, züchtet widerstandsfähige Erreger.",
  "urheber": "Ministry of Information Photo Division Photographer",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Professor_Alexander_Fleming_at_work_in_his_laboratory_at_St_Mary%27s_Hospital,_London,_during_the_Second_World_War._D17801_(cropped).jpg"
 },
 {
  "id": "armada",
  "datei": "bilder/armada.jpg",
  "breite": 1000,
  "hoehe": 575,
  "zeigt": "Die Armada, zeitgenössische Darstellung",
  "bildunterschrift": "Die Niederlage von 1588 war weniger englischen Waffen als Stürmen und Organisationsfehlern zu verdanken. Der Mythos daraus trug Englands Selbstbild über Jahrhunderte.",
  "urheber": "anonymous",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Spanish_Armada_fireships.jpg"
 },
 {
  "id": "assassinen",
  "datei": "bilder/assassinen.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Der Burgberg von Alamut im Elburs-Gebirge",
  "bildunterschrift": "Von hier aus hielten die Nizariten 166 Jahre einem Vielfachen an Gegnern stand. 1256 zerstörten die Mongolen die Festung, und die Bibliothek verbrannte — deshalb kennen wir die Gemeinschaft fast nur durch ihre Feinde.",
  "urheber": "Skot",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:View_from_Alamut_Castle,_Iran.jpg"
 },
 {
  "id": "athener-demokratie",
  "datei": "bilder/athener-demokratie.jpg",
  "breite": 1000,
  "hoehe": 625,
  "zeigt": "Die Akropolis von Athen",
  "bildunterschrift": "Die Demokratie, die hier entstand, schloss Frauen, Sklaven und Zugewanderte aus — also die Mehrheit. Neu war trotzdem, dass Amtsinhaber ausgelost und zur Rechenschaft gezogen wurden.",
  "urheber": "A.Savin",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg"
 },
 {
  "id": "aufklaerung",
  "datei": "bilder/aufklaerung.jpg",
  "breite": 1000,
  "hoehe": 1324,
  "zeigt": "Aus Diderots Encyclopédie",
  "bildunterschrift": "28 Bände, 71.000 Artikel, 3.000 Kupferstiche — und ausdrücklich auch Handwerk und Technik. Wissen sollte nachprüfbar und für jeden zugänglich sein.",
  "urheber": "Robert de Vaugondy, Didier, 1723-1786 Diderot, Denis",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:(Title_page_to)_Recueil_de_planches,_pour_la_nouvelle_%C3%A9dition_de_dictionnaire_raisonn%C3%A9_des_sciences,_des_arts_et_des_m%C3%A9tiers_(IA_dr_title-page-to-recueil-de-planches-pour-la-nouvelle-dition-de-dictionnai-10402003).jpg"
 },
 {
  "id": "beccaria",
  "datei": "bilder/beccaria.jpg",
  "breite": 1000,
  "hoehe": 1464,
  "zeigt": "Cesare Beccaria (1738–1794)",
  "bildunterschrift": "Mit sechsundzwanzig veröffentlichte er anonym hundert Seiten gegen Folter und Todesstrafe. Zwanzig Jahre später schaffte die Toskana als erster Staat der Welt die Todesstrafe ab.",
  "urheber": "Jean François Bozio",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Portrait_of_Cesare_Bonesana,_Marchese_di_Beccaria_MET_DP805366.jpg"
 },
 {
  "id": "buchdruck",
  "datei": "bilder/buchdruck.jpg",
  "breite": 1000,
  "hoehe": 1406,
  "zeigt": "Eine Seite der Gutenberg-Bibel",
  "bildunterschrift": "Der Satzspiegel ahmt die Handschrift nach, weil gedruckte Bücher zunächst wie geschriebene aussehen sollten. Innerhalb von fünfzig Jahren gab es in Europa Millionen Bücher.",
  "urheber": "Original by Johannes Gutenberg (printer), Scan by Jossi",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Gutenberg_Bible_B42_Genesis.JPG"
 },
 {
  "id": "cordoba",
  "datei": "bilder/cordoba.jpg",
  "breite": 1000,
  "hoehe": 750,
  "zeigt": "Die Bogenhallen der Mezquita von Córdoba",
  "bildunterschrift": "Doppelbögen aus rotem Ziegel und weißem Kalkstein, getragen von wiederverwendeten römischen Säulen. Córdoba war um 1000 die größte Stadt Westeuropas.",
  "urheber": "Alvaro.vinuela.carnicero",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Mezquita_cordoba_arco_interior.jpg"
 },
 {
  "id": "dna-alte",
  "datei": "bilder/dna-alte.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Schädel eines Neandertalers",
  "bildunterschrift": "Seit 2010 ist das Neandertaler-Genom entschlüsselt: Menschen außerhalb Afrikas tragen ein bis zwei Prozent neandertalerisches Erbgut. Am besten bewahrt DNA das Felsenbein — der dichteste Knochen des Körpers.",
  "urheber": "Gary Todd",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Le_Moustier_Neanderthal_Skull_Neues_Museum_Berlin.jpg"
 },
 {
  "id": "doppelhelix",
  "datei": "bilder/doppelhelix.jpg",
  "breite": 1000,
  "hoehe": 1000,
  "zeigt": "Modell der Doppelhelix",
  "bildunterschrift": "Die Struktur wurde 1953 veröffentlicht, gestützt auf Röntgenbilder von Rosalind Franklin, deren Beitrag erst Jahrzehnte später angemessen genannt wurde.",
  "urheber": "Flocci Nivis",
  "lizenz": "CC BY 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:20251019_Replica_DNA_double_helix_model_Berlin_03.jpg"
 },
 {
  "id": "dreissigjaehriger-krieg",
  "datei": "bilder/dreissigjaehriger-krieg.jpg",
  "breite": 1000,
  "hoehe": 437,
  "zeigt": "Jacques Callot: Die Schrecken des Krieges",
  "bildunterschrift": "Callots Radierungen von 1633 zeigen, was Söldnerheere in einem Land anrichten, das sie ernähren muss. In Teilen Mitteleuropas starb ein Drittel der Bevölkerung.",
  "urheber": "Jacques Callot",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Hanging_from_The_Miseries_and_Misfortunes_of_War_by_Jacques_Callot.jpg"
 },
 {
  "id": "eisenbahn",
  "datei": "bilder/eisenbahn.jpg",
  "breite": 1000,
  "hoehe": 750,
  "zeigt": "Stephensons Rocket",
  "bildunterschrift": "1829 gewann diese Lokomotive das Rennen von Rainhill und entschied damit die Bauform für ein Jahrhundert. Mit der Eisenbahn kamen Fahrpläne, Zeitzonen und die Massenreise.",
  "urheber": "Malcolmxl5",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Stephenson_Rocket_at_the_National_Railway_Museum_York_Oct25_06.jpg"
 },
 {
  "id": "ende-apartheid",
  "datei": "bilder/ende-apartheid.jpg",
  "breite": 1000,
  "hoehe": 742,
  "zeigt": "Die Wahl von 1994 in Südafrika",
  "bildunterschrift": "Mandela kam 1990 nach 27 Jahren Haft frei. Vier Jahre später fanden die ersten Wahlen statt, an denen alle Südafrikaner teilnehmen durften.",
  "urheber": "Suzi-k",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Port_Elizabeth_Donkin_reserve_voting_line.JPG"
 },
 {
  "id": "entdeckung-tiefenzeit",
  "datei": "bilder/entdeckung-tiefenzeit.jpg",
  "breite": 1000,
  "hoehe": 750,
  "zeigt": "Siccar Point in Schottland",
  "bildunterschrift": "Hier sah James Hutton 1788, dass steil stehende Schichten von waagerechten überlagert werden: abgelagert, gekippt, abgetragen, neu abgelagert. Für diese Folge reichen keine sechstausend Jahre.",
  "urheber": "dave souza",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Siccar_Point_red_capstone_closeup.jpg"
 },
 {
  "id": "erfindung-schrift",
  "datei": "bilder/erfindung-schrift.jpg",
  "breite": 980,
  "hoehe": 735,
  "zeigt": "Verwaltungstafel in Keilschrift",
  "bildunterschrift": "Die frühesten Texte der Menschheit sind Buchhaltung: Mengen von Gerste, Bier, Vieh und Arbeitskräften. Geschrieben wurde nicht, um Gedanken festzuhalten, sondern um nachzuhalten, wer wieviel bekommen hat.",
  "urheber": "Original: Daderot Derivative work : Zunkir",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Proto_cuneiform_tablet_OIM_A12259.jpg"
 },
 {
  "id": "evolutionstheorie",
  "datei": "bilder/evolutionstheorie.jpg",
  "breite": 1000,
  "hoehe": 1242,
  "zeigt": "Charles Darwin",
  "bildunterschrift": "Er sammelte zwanzig Jahre Belege, bevor er veröffentlichte, und rechnete mit dem Widerstand. Der Ausdruck Überleben des Stärkeren stammt nicht von ihm, sondern von Herbert Spencer.",
  "urheber": "Julia Margaret Cameron / Adam Cuerden",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Charles_Darwin_by_Julia_Margaret_Cameron,_c._1868.jpg"
 },
 {
  "id": "fall-konstantinopel",
  "datei": "bilder/fall-konstantinopel.jpg",
  "breite": 1000,
  "hoehe": 750,
  "zeigt": "Die Theodosianischen Mauern",
  "bildunterschrift": "Tausend Jahre hatten sie die Stadt gehalten. 1453 hielten sie sechs Wochen — gegen Kanonen, die Mauern in einer Weise trafen, für die sie nicht gebaut waren.",
  "urheber": "GuardianH",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Constantinople_Greek_Script_Theodosian_Walls.jpg"
 },
 {
  "id": "franzoesische-revolution",
  "datei": "bilder/franzoesische-revolution.jpg",
  "breite": 1000,
  "hoehe": 760,
  "zeigt": "Der Sturm auf die Bastille",
  "bildunterschrift": "Im Gefängnis saßen sieben Gefangene. Genommen wurde es wegen des Schießpulvers im Gebäude — Symbol wurde es danach.",
  "urheber": "Jean-Pierre Houël",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Prise_de_la_Bastille_clean.jpg"
 },
 {
  "id": "frauenwahlrecht",
  "datei": "bilder/frauenwahlrecht.jpg",
  "breite": 1000,
  "hoehe": 748,
  "zeigt": "Emmeline Pankhurst spricht zu einer Menge",
  "bildunterschrift": "Die britischen Suffragetten gingen ab 1905 zu Sachbeschädigung, Brandstiftung und Hungerstreiks über; der Staat antwortete mit Zwangsernährung. Ob das den Erfolg beschleunigte oder verzögerte, ist unter Historikern bis heute umstritten.",
  "urheber": "Unknown authorUnknown author",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Emmeline_Pankhurst_and_other_suffragette_leaders_1908.jpg"
 },
 {
  "id": "hammurapi",
  "datei": "bilder/hammurapi.jpg",
  "breite": 1000,
  "hoehe": 1646,
  "zeigt": "Die Stele mit dem Kodex Hammurapi, Louvre",
  "bildunterschrift": "Über zwei Meter schwarzer Diorit. Oben steht der König vor dem Sonnengott Schamasch, darunter folgen 282 Rechtssätze in Keilschrift. Der eigentliche Fortschritt war, dass der Text öffentlich stand und nachlesbar war.",
  "urheber": "Mbzt",
  "lizenz": "CC BY 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
 },
 {
  "id": "hanse",
  "datei": "bilder/hanse.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Das Holstentor in Lübeck",
  "bildunterschrift": "Die Hanse war kein Staat, sondern ein Verbund von Kaufleuten und Städten ohne Verfassung und ohne Heer. Sie beherrschte dennoch drei Jahrhunderte den Nord- und Ostseehandel.",
  "urheber": "Christian Wolf (www.c-w-design.de)",
  "lizenz": "CC BY-SA 3.0 de",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Holstentor_in_L%C3%BCbeck_2015.jpg"
 },
 {
  "id": "haus-der-weisheit",
  "datei": "bilder/haus-der-weisheit.jpg",
  "breite": 1000,
  "hoehe": 916,
  "zeigt": "Ein Astrolab aus der islamischen Welt",
  "bildunterschrift": "In Bagdad wurde ab dem 8. Jahrhundert griechisches, persisches und indisches Wissen ins Arabische übersetzt — und weitergedacht. Ohne diese Bewegung wäre viel antike Wissenschaft verloren.",
  "urheber": "Andrew Dunn",
  "lizenz": "CC BY-SA 2.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Astrolabe-Persian-18C.jpg"
 },
 {
  "id": "hexenverfolgung-ende",
  "datei": "bilder/hexenverfolgung-ende.jpg",
  "breite": 1000,
  "hoehe": 1474,
  "zeigt": "Friedrich Spee von Langenfeld (1591–1635)",
  "bildunterschrift": "Der Jesuit, der Verurteilte als Beichtvater begleitet hatte und 1631 anonym die Cautio Criminalis veröffentlichte. Er bestritt nicht die Existenz von Hexen, sondern zeigte, dass das Verfahren jeden überführen konnte.",
  "urheber": "Unknown artistUnknown artist",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Friedrich_Spee.jpg"
 },
 {
  "id": "hieroglyphen",
  "datei": "bilder/hieroglyphen.jpg",
  "breite": 1000,
  "hoehe": 1170,
  "zeigt": "Der Stein von Rosetta",
  "bildunterschrift": "Derselbe Text in Hieroglyphen, Demotisch und Griechisch. Weil das Griechische lesbar war, ließ sich alles andere erschließen — Champollion gelang das 1822.",
  "urheber": "Hans Hillewaert",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Rosetta_Stone.JPG"
 },
 {
  "id": "holocaust",
  "datei": "bilder/holocaust.jpg",
  "breite": 937,
  "hoehe": 1303,
  "zeigt": "Auschwitz-Birkenau",
  "bildunterschrift": "Der größte der Vernichtungslager. Die Ermordung war ein bürokratisch organisierter Vorgang mit Akten, Fahrplänen und Zuständigkeiten — das ist das Verstörende daran.",
  "urheber": "SS",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Birkenau,_Poland,_1941,_The_entrance_gate_to_the_camp.jpg"
 },
 {
  "id": "industrielle-revolution",
  "datei": "bilder/industrielle-revolution.jpg",
  "breite": 1000,
  "hoehe": 516,
  "zeigt": "Die Eiserne Brücke von Coalbrookdale",
  "bildunterschrift": "1779 die erste Brücke aus Gusseisen. Sie wurde wie eine Holzkonstruktion gezimmert, weil niemand wusste, wie man mit Eisen baut — der Beginn einer neuen Bauweise.",
  "urheber": "Colin",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Ironbridge_2014.jpg"
 },
 {
  "id": "inka",
  "datei": "bilder/inka.jpg",
  "breite": 1000,
  "hoehe": 400,
  "zeigt": "Machu Picchu",
  "bildunterschrift": "Ein Reich von 4.000 Kilometern Länge, verwaltet ohne Schrift, ohne Rad und ohne Geld — mit Knotenschnüren, Straßen und Arbeitsverpflichtung.",
  "urheber": "LBM1948",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Machu_Picchu_1981,_panor%C3%A1mica_08.jpg"
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
  "id": "islamische-expansion",
  "datei": "bilder/islamische-expansion.jpg",
  "breite": 1000,
  "hoehe": 751,
  "zeigt": "Die Große Moschee von Kairuan",
  "bildunterschrift": "Innerhalb eines Jahrhunderts nach 632 reichte islamische Herrschaft von Spanien bis zum Indus. Kairuan in Tunesien war ein Stützpunkt dieser Ausbreitung.",
  "urheber": "damian entwistle",
  "lizenz": "CC BY-SA 2.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Kairouan_courtyard_and_portico.jpg"
 },
 {
  "id": "kaiser-augustus",
  "datei": "bilder/kaiser-augustus.jpg",
  "breite": 1000,
  "hoehe": 1500,
  "zeigt": "Augustus von Primaporta",
  "bildunterschrift": "Der Feldherr im Panzer, barfuß wie ein Gott, mit ewig jungem Gesicht. Augustus nannte sich Erster Bürger und ließ sich so darstellen — Bildpolitik als Regierungsprogramm.",
  "urheber": "Till Niermann",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Statue-Augustus.jpg"
 },
 {
  "id": "kaiser-caligula",
  "datei": "bilder/kaiser-caligula.jpg",
  "breite": 1000,
  "hoehe": 1332,
  "zeigt": "Bronzebüste Caligulas, Metropolitan Museum",
  "bildunterschrift": "Ein gewöhnliches Gesicht. Nach seinem Tod wurden seine Bildnisse beseitigt oder in andere Kaiser umgearbeitet — was erhalten ist, sehen wir durch die Augen derer, die ihn wegräumen wollten.",
  "urheber": "unbekannt",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Bronze_portrait_bust_of_the_emperor_Gaius_(Caligula)_MET_DP337505.jpg"
 },
 {
  "id": "kaiser-claudius",
  "datei": "bilder/kaiser-claudius.jpg",
  "breite": 1000,
  "hoehe": 1333,
  "zeigt": "Porträt des Kaisers Claudius",
  "bildunterschrift": "Claudius hinkte und sprach undeutlich; die offiziellen Bildnisse zeigen davon nichts. Die Darstellung folgt dem Bild eines tüchtigen Herrschers, nicht dem Körper.",
  "urheber": "Unknown artistUnknown artist",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Claudius_Pio-Clementino_Inv243_cropped_2.jpg"
 },
 {
  "id": "kaiser-commodus",
  "datei": "bilder/kaiser-commodus.jpg",
  "breite": 1000,
  "hoehe": 1500,
  "zeigt": "Commodus als Herkules, Kapitolinische Museen",
  "bildunterschrift": "Löwenfell über dem Kopf, Keule in der Hand, Äpfel der Hesperiden: Commodus ließ sich als wiedergeborener Herkules darstellen. Die Büste ist der stärkste Beleg dafür, dass die Selbstdarstellung kein Gerücht ist.",
  "urheber": "unbekannt",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Commodus_Musei_Capitolini_MC1120.jpg"
 },
 {
  "id": "kaiser-diokletian",
  "datei": "bilder/kaiser-diokletian.jpg",
  "breite": 1000,
  "hoehe": 1333,
  "zeigt": "Der Palast Diokletians in Split",
  "bildunterschrift": "Der Kaiser, der freiwillig zurücktrat, baute sich diesen Alterssitz. Die heutige Altstadt von Split steckt in seinen Mauern.",
  "urheber": "Matti Blume",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Old_Town,_Split_(P1080956).jpg"
 },
 {
  "id": "kaiser-elagabal",
  "datei": "bilder/kaiser-elagabal.jpg",
  "breite": 1000,
  "hoehe": 1566,
  "zeigt": "Porträt Elagabals, Kapitolinische Museen",
  "bildunterschrift": "Achtzehn Jahre alt bei seinem Tod. Gesichert sind der Kult des Sonnengottes, ein Tempel auf dem Palatin und die Ermordung — fast alles Übrige stammt aus der Historia Augusta und ist Literatur.",
  "urheber": "José Luiz",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Bust_of_Elagabalus_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"
 },
 {
  "id": "kaiser-konstantin",
  "datei": "bilder/kaiser-konstantin.jpg",
  "breite": 1000,
  "hoehe": 668,
  "zeigt": "Die Hagia Sophia in Istanbul",
  "bildunterschrift": "Konstantin verlegte die Hauptstadt an den Bosporus; Justinian ließ zwei Jahrhunderte später diese Kirche bauen. 916 Jahre Kirche, 481 Jahre Moschee, 86 Jahre Museum, seit 2020 wieder Moschee.",
  "urheber": "Arild Vågen",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg"
 },
 {
  "id": "kaiser-markaurel",
  "datei": "bilder/kaiser-markaurel.jpg",
  "breite": 1000,
  "hoehe": 1405,
  "zeigt": "Reiterstandbild Mark Aurels",
  "bildunterschrift": "Das einzige erhaltene antike Reiterstandbild eines römischen Kaisers — erhalten, weil man es im Mittelalter für Konstantin hielt und deshalb nicht einschmolz.",
  "urheber": "Alvesgaspar",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Marcus_Aurelius_Capitoline_Hill_September_2015-1.jpg"
 },
 {
  "id": "kaiser-nero",
  "datei": "bilder/kaiser-nero.jpg",
  "breite": 1000,
  "hoehe": 592,
  "zeigt": "Das Kolosseum",
  "bildunterschrift": "Gebaut unter den Flaviern auf dem Gelände von Neros Palastsee — ein bewusster Akt: Was der verhasste Vorgänger für sich genommen hatte, gab die neue Dynastie dem Volk zurück.",
  "urheber": "Wilfredor",
  "lizenz": "CC0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Colosseum_of_Rome_and_Roman_forum.jpg"
 },
 {
  "id": "kaiser-tiberius",
  "datei": "bilder/kaiser-tiberius.jpg",
  "breite": 1000,
  "hoehe": 750,
  "zeigt": "Porträtkopf des Tiberius",
  "bildunterschrift": "Ein Bildnis, das den zurückgezogenen Verwalter zeigt, nicht den Mann der Gerüchte. Römische Kaiserporträts waren Staatskunst und nach Vorlagen gearbeitet; sie sagen, wie ein Kaiser gesehen werden wollte.",
  "urheber": "Carole Raddato from FRANKFURT, Germany",
  "lizenz": "CC BY-SA 2.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Tiberius,_Romisch-Germanisches_Museum,_Cologne_(8115606671).jpg"
 },
 {
  "id": "kaiser-trajan",
  "datei": "bilder/kaiser-trajan.jpg",
  "breite": 1000,
  "hoehe": 599,
  "zeigt": "Die Trajanssäule in Rom",
  "bildunterschrift": "Ein Bildbericht des Dakerkriegs auf 200 Metern spiralförmigem Relief — und die wichtigste Quelle für Ausrüstung und Arbeitsweise der römischen Armee.",
  "urheber": "Unknown authorUnknown author",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Dacian_ambassadors_ask_Traianus_for_mercy_(Detail_from_Trajan%27s_Column_in_Rome).jpg"
 },
 {
  "id": "karthago",
  "datei": "bilder/karthago.jpg",
  "breite": 1000,
  "hoehe": 625,
  "zeigt": "Punische Ausgrabungen im heutigen Karthago",
  "bildunterschrift": "Was von der Stadt übrig ist, die Rom 146 v. Chr. niederbrannte. Die Bibliotheken verbrannten mit, und unser Bild Karthagos stammt fast vollständig von seinen Feinden.",
  "urheber": "3coma14",
  "lizenz": "CC BY 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Templo_de_eshmun_cartago.jpg"
 },
 {
  "id": "klimaforschung",
  "datei": "bilder/klimaforschung.jpg",
  "breite": 1000,
  "hoehe": 580,
  "zeigt": "Charles David Keeling am Observatorium auf dem Mauna Loa",
  "bildunterschrift": "Seit 1958 wird hier der CO2-Gehalt der Luft gemessen. Die Keeling-Kurve ist die längste zusammenhängende Messreihe dieser Art und zeigt Jahresatem und Anstieg gleichzeitig.",
  "urheber": "John Miller (NOAA)",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Charles_David_Keeling_and_John_Chin_at_Mauna_Loa_Observatory_in_1997.jpg"
 },
 {
  "id": "kreuzzuege",
  "datei": "bilder/kreuzzuege.jpg",
  "breite": 1000,
  "hoehe": 545,
  "zeigt": "Krak des Chevaliers in Syrien",
  "bildunterschrift": "Die besterhaltene Kreuzfahrerburg. Zwei Jahrhunderte lang bestanden hier lateinische Staaten, deren Alltag mehr Nachbarschaft als Krieg war — und die trotzdem im Krieg endeten.",
  "urheber": "Krak_des_Chevaliers_landscape.jpg: (Ergo) derivative work: Nev1 (talk)",
  "lizenz": "CC BY 2.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Krak_des_Chevaliers_landscape_(cropped).jpg"
 },
 {
  "id": "kubakrise",
  "datei": "bilder/kubakrise.jpg",
  "breite": 1000,
  "hoehe": 788,
  "zeigt": "Aufklärungsfoto aus Kuba, 1962",
  "bildunterschrift": "Diese Bilder lösten die Krise aus. Dreizehn Tage später war sie beigelegt — durch einen Handel, dessen zweiter Teil, der Abzug amerikanischer Raketen aus der Türkei, jahrzehntelang geheim blieb.",
  "urheber": "unbekannt",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Cuban_missiles_alt.jpg"
 },
 {
  "id": "ludwig14",
  "datei": "bilder/ludwig14.jpg",
  "breite": 1000,
  "hoehe": 664,
  "zeigt": "Der Spiegelsaal von Versailles",
  "bildunterschrift": "Der Hof als Regierungsinstrument: Wer Rang wollte, musste anwesend sein, und wer anwesend war, konnte nicht in der Provinz Politik machen.",
  "urheber": "Myrabella",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Chateau_Versailles_Galerie_des_Glaces.jpg"
 },
 {
  "id": "mauerbau",
  "datei": "bilder/mauerbau.jpg",
  "breite": 1000,
  "hoehe": 693,
  "zeigt": "Der Bau der Berliner Mauer, 1961",
  "bildunterschrift": "In der Nacht zum 13. August 1961 wurde die Stadt geteilt. Die Mauer stand 10.315 Tage.",
  "urheber": "National Archives",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Berlin_Wall_1961-11-20.jpg"
 },
 {
  "id": "mauerfall",
  "datei": "bilder/mauerfall.jpg",
  "breite": 1000,
  "hoehe": 664,
  "zeigt": "Ein erhaltenes Stück der Berliner Mauer am Potsdamer Platz",
  "bildunterschrift": "Die Öffnung 1989 war nicht beschlossen, sondern das Ergebnis einer missverständlichen Pressekonferenz und der Entscheidung eines Grenzoffiziers, nicht zu schießen.",
  "urheber": "Jorge Láscar from Australia",
  "lizenz": "CC BY 2.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Lascar_Short_section_of_the_Berlin_Wall_-_Potsdamer_Platz_(4472165454).jpg"
 },
 {
  "id": "moctezuma2",
  "datei": "bilder/moctezuma2.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Die Ausgrabung des Templo Mayor in Mexiko-Stadt",
  "bildunterschrift": "Der Haupttempel Tenochtitlans lag unter der Kathedrale und wurde erst 1978 bei Bauarbeiten wiedergefunden — die spanische Stadt war bewusst darüber gebaut worden.",
  "urheber": "Photograph by Mike Peel (www.mikepeel.net).",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Templo_Mayor_2015_177.jpg"
 },
 {
  "id": "mondlandung",
  "datei": "bilder/mondlandung.jpg",
  "breite": 1000,
  "hoehe": 1000,
  "zeigt": "Apollo 11 auf dem Mond",
  "bildunterschrift": "Sechs Landungen bis 1972, zwölf Menschen auf dem Mond, 382 Kilogramm Gestein zurück. Danach verlor das Programm seinen politischen Zweck.",
  "urheber": "Neil A. Armstrong",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Aldrin_Apollo_11.jpg"
 },
 {
  "id": "mondlandung-technik",
  "datei": "bilder/mondlandung-technik.jpg",
  "breite": 1000,
  "hoehe": 1250,
  "zeigt": "Start von Apollo 11 am 16. Juli 1969",
  "bildunterschrift": "2.900 Tonnen Startmasse, davon über 90 Prozent Treibstoff. Zurück zur Erde kamen 5,5 Tonnen.",
  "urheber": "NASA",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Apollo_11_Launch_-_GPN-2000-000630.jpg"
 },
 {
  "id": "mongolisches-reich",
  "datei": "bilder/mongolisches-reich.jpg",
  "breite": 1000,
  "hoehe": 666,
  "zeigt": "Reiter beim Naadam-Fest in der Mongolei — eine heutige Aufnahme",
  "bildunterschrift": "Das größte zusammenhängende Landreich der Geschichte entstand aus der Beweglichkeit von Reiterverbänden — und aus einer Postorganisation, die Nachrichten schneller trug als jedes andere Reich.",
  "urheber": "Marcin Konsek",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Festiwal_Naadam_na_stepie_na_obrze%C5%BCach_U%C5%82an_Bator_20.JPG"
 },
 {
  "id": "perspektive",
  "datei": "bilder/perspektive.jpg",
  "breite": 1000,
  "hoehe": 1613,
  "zeigt": "Masaccios Dreifaltigkeit",
  "bildunterschrift": "Die gemalte Architektur ist so konstruiert, dass sie vom Standpunkt des Betrachters aus stimmt. Damit wird das Bild zum Fenster mit einem einzigen richtigen Standort.",
  "urheber": "Masaccio",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Masaccio,_Holy_Trinity,_1425-28,_Santa_Maria_Novella,_Florence.jpg"
 },
 {
  "id": "peter-der-grosse",
  "datei": "bilder/peter-der-grosse.jpg",
  "breite": 1000,
  "hoehe": 662,
  "zeigt": "Sankt Petersburg, Peter-und-Paul-Festung",
  "bildunterschrift": "Eine Hauptstadt auf Sumpfland, gebaut mit Zwangsarbeit und gegen jede geografische Vernunft — weil Russland einen Hafen nach Westen brauchte.",
  "urheber": "Florstein (Telegram:WikiPhoto.Space)",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Peter_%26_Paul_fortress_in_SPB_03.jpg"
 },
 {
  "id": "pharao-echnaton",
  "datei": "bilder/pharao-echnaton.jpg",
  "breite": 1000,
  "hoehe": 1464,
  "zeigt": "Die Büste der Nefertiti",
  "bildunterschrift": "Gefunden 1912 in Amarna, der Stadt, die Echnaton für seinen einen Gott aus dem Boden stampfen ließ. Nach seinem Tod wurde sie verlassen und sein Name getilgt.",
  "urheber": "Philip Pikart",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Nofretete_Neues_Museum.jpg"
 },
 {
  "id": "pharao-hatschepsut",
  "datei": "bilder/pharao-hatschepsut.jpg",
  "breite": 1000,
  "hoehe": 638,
  "zeigt": "Der Totentempel Hatschepsuts in Deir el-Bahari",
  "bildunterschrift": "Sie regierte zwei Jahrzehnte als König, mit Bart und männlichen Titeln in den Inschriften. Ihr Nachfolger ließ ihre Bildnisse später entfernen.",
  "urheber": "Diego Delso",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Templo_funerario_de_Hatshepsut,_Valle_de_las_Reyes,_Luxor,_Egipto,_2022-04-03,_DD_118.jpg"
 },
 {
  "id": "pharao-ramses2",
  "datei": "bilder/pharao-ramses2.jpg",
  "breite": 1000,
  "hoehe": 657,
  "zeigt": "Der Tempel von Abu Simbel",
  "bildunterschrift": "Ramses II. ließ hier zwei Tempel in den Fels schlagen, den größeren für sich mit vier Kolossalstatuen von 20 Metern Höhe. In den 1960er Jahren wurde die ganze Anlage zersägt und höher wieder aufgebaut, weil der Assuan-Staudamm sie überflutet hätte.",
  "urheber": "Diego Delso",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Templo_de_Nefertari,_Abu_Simbel,_Egipto,_2022-04-02,_DD_153.jpg"
 },
 {
  "id": "pharao-tutanchamun",
  "datei": "bilder/pharao-tutanchamun.jpg",
  "breite": 1000,
  "hoehe": 1332,
  "zeigt": "Die Goldmaske Tutanchamuns",
  "bildunterschrift": "Der bekannteste Pharao war ein unbedeutender: Er starb mit etwa achtzehn Jahren. Berühmt wurde er, weil sein Grab 1922 fast unberührt gefunden wurde.",
  "urheber": "Thomas Clouet",
  "lizenz": "CC BY 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Gold_Death_Mask_of_Tutankhamun.jpg"
 },
 {
  "id": "pockenimpfung",
  "datei": "bilder/pockenimpfung.jpg",
  "breite": 1000,
  "hoehe": 748,
  "zeigt": "Gaston Mélingue: Jenner impft James Phipps, 1879 gemalt",
  "bildunterschrift": "Das Gemälde entstand 1879 und stellt die erste Impfung von 1796 nach: Jenner überträgt Kuhpockenmaterial auf einen Achtjährigen. Eine spätere Verklärung der Szene — aber das Verfahren stimmt, und das Wort Vakzine stammt von vacca, der Kuh.",
  "urheber": "Gaston Mélingue",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Edward_Jenner_by_Gaston_Melingue.jpg"
 },
 {
  "id": "pyramiden-bau",
  "datei": "bilder/pyramiden-bau.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Die Cheopspyramide von Gizeh",
  "bildunterschrift": "Rund 2,3 Millionen Steinblöcke, ursprünglich 146,6 Meter hoch. Die Arbeitersiedlungen südlich davon zeigen Bäckereien, Brauereien und Arbeiterfriedhöfe — keine Sklavenlager.",
  "urheber": "kallerna",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Pyramid_of_Cheops_-_side.jpg"
 },
 {
  "id": "pyramiden-giza",
  "datei": "bilder/pyramiden-giza.jpg",
  "breite": 1000,
  "hoehe": 733,
  "zeigt": "Die Pyramiden von Gizeh",
  "bildunterschrift": "Drei Pyramiden in rund 85 Jahren, unter Cheops, Chephren und Mykerinos. Die Bauweise davor lässt sich als Lernkurve besichtigen: Stufenpyramide, Meidum, Knickpyramide.",
  "urheber": "Eduard Spelterini",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Spelterini_Pyramids.jpg"
 },
 {
  "id": "reformation",
  "datei": "bilder/reformation.jpg",
  "breite": 1000,
  "hoehe": 1582,
  "zeigt": "Martin Luther, gemalt von Lucas Cranach",
  "bildunterschrift": "Cranachs Werkstatt lieferte Luthers Bild in Serie — mit dem Buchdruck war Reformation auch eine Frage der Bildverbreitung.",
  "urheber": "Lucas Cranach the Elder",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d.%C3%84._-_Martin_Luther,_1528_(Veste_Coburg).jpg"
 },
 {
  "id": "renaissance",
  "datei": "bilder/renaissance.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Brunelleschis Kuppel in Florenz",
  "bildunterschrift": "Die größte Ziegelkuppel der Welt, gebaut ohne Lehrgerüst, weil niemand wusste, wie man eines dieser Größe baut. Brunelleschi löste das mit einer doppelten Schale und einem Fischgrätverband.",
  "urheber": "Vyacheslav Argenberg",
  "lizenz": "CC BY 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Florence,_Italy,_Brunelleschi%27s_Dome_of_Florence_Cathedral.jpg"
 },
 {
  "id": "roemische-republik",
  "datei": "bilder/roemische-republik.jpg",
  "breite": 1000,
  "hoehe": 312,
  "zeigt": "Das Forum Romanum",
  "bildunterschrift": "Hier stand die Republik: Senat, Volksversammlung, Gericht. Sie endete nicht mit ihrer Abschaffung, sondern damit, dass jemand alle Ämter in einer Person vereinigte und die Formen beibehielt.",
  "urheber": "VasuVR",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:IT3_01_02_Entrance_Forum_Romanum-Rome_Ruins_small.jpg"
 },
 {
  "id": "russische-revolution",
  "datei": "bilder/russische-revolution.jpg",
  "breite": 1000,
  "hoehe": 650,
  "zeigt": "Petrograd im Revolutionsjahr 1917",
  "bildunterschrift": "Zwei Revolutionen in einem Jahr: Im Februar stürzte der Zar, im Oktober übernahmen die Bolschewiki. Nach heutigem Kalender fand die Oktoberrevolution im November statt.",
  "urheber": "Viktor Bulla",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:19170704_Riot_on_Nevsky_prosp_Petrograd.jpg"
 },
 {
  "id": "schwarzer-tod",
  "datei": "bilder/schwarzer-tod.jpg",
  "breite": 1000,
  "hoehe": 546,
  "zeigt": "Totentanz, mittelalterliche Wandmalerei",
  "bildunterschrift": "Der Schwarze Tod tötete in wenigen Jahren geschätzt ein Drittel bis die Hälfte der Bevölkerung Europas. Das Bildmotiv des Totentanzes entstand in seinem Gefolge.",
  "urheber": "Ninaras",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Dance_of_Death,_Mural_in_Inkoo_Church,_Finland_02.jpg"
 },
 {
  "id": "seidenstrasse",
  "datei": "bilder/seidenstrasse.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Karawanserei an der Seidenstraße in Usbekistan",
  "bildunterschrift": "Es war keine Straße, sondern ein Netz von Etappen. Waren wechselten dutzende Male den Besitzer; kaum jemand reiste die ganze Strecke — und mit den Waren reisten Religionen und Krankheiten.",
  "urheber": "Angshuman Chatterjee",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Early_Morning_Bukhara_(246492803).jpeg"
 },
 {
  "id": "stellungskrieg",
  "datei": "bilder/stellungskrieg.jpg",
  "breite": 1000,
  "hoehe": 1161,
  "zeigt": "Grabensystem bei Loos, Luftaufnahme 1917",
  "bildunterschrift": "Vier Jahre lang bewegte sich die Front kaum. Maschinengewehr und Artillerie machten den Angriff aussichtslos, ohne die Verteidigung zu beenden — daraus entstand diese Landschaft.",
  "urheber": "Unknown authorUnknown author",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Aerial_view_Loos-Hulluch_trench_system_July_1917.jpg"
 },
 {
  "id": "tschernobyl",
  "datei": "bilder/tschernobyl.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Der Reaktor von Tschernobyl unter seiner Hülle",
  "bildunterschrift": "Die Sperrzone ist heute eines der artenreichsten Gebiete Europas: Wölfe, Elche, Wisente. Die Strahlung schädigt einzelne Tiere messbar — das Ausbleiben von Menschen wirkt stärker.",
  "urheber": "ArticCynda",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Chernobyl_Sarcophagus_model.jpg"
 },
 {
  "id": "universitaet",
  "datei": "bilder/universitaet.jpg",
  "breite": 1000,
  "hoehe": 1427,
  "zeigt": "Der Archiginnasio, das alte Hauptgebäude der Universität Bologna",
  "bildunterschrift": "Gegründet 1088 als Zusammenschluss von Studenten, die gemeinsam Lehrer anstellten. Die Rechtsform der Körperschaft, die daraus entstand, hat fast alle Staaten überlebt.",
  "urheber": "Ввласенко",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Coats_of_arms_of_alumnus_on_the_walls_of_the_Archiginnasio._Bologna,_Italy.jpg"
 },
 {
  "id": "uruk",
  "datei": "bilder/uruk.jpg",
  "breite": 1000,
  "hoehe": 936,
  "zeigt": "Die Warka-Vase aus Uruk, um 3000 v. Chr.",
  "bildunterschrift": "Das oberste Band zeigt die Abgabe von Gaben an eine Gottheit oder Priesterin — eine Darstellung von Verwaltung. In Uruk lebten damals schätzungsweise 40.000 bis 50.000 Menschen.",
  "urheber": "Osama Shukir Muhammed Amin FRCP(Glasg)",
  "lizenz": "CC BY-SA 4.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Top_register,_Warka_Vase,_Uruk._C._3000_BCE,_Iraq_Museum.jpg"
 },
 {
  "id": "venedig",
  "datei": "bilder/venedig.jpg",
  "breite": 1000,
  "hoehe": 607,
  "zeigt": "Canaletto: Das Becken von San Marco, um 1738",
  "bildunterschrift": "Venedig auf dem Höhepunkt seiner Selbstdarstellung — und wenige Jahrzehnte vor dem Ende. 1797 marschierte Napoleon ein, und die Republik gab kampflos auf.",
  "urheber": "Canaletto",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Boston,_Museum_of_Fine_Art_-_Il_bacino_di_San_Marco_c.1738_-_Canaletto.jpg"
 },
 {
  "id": "versailles",
  "datei": "bilder/versailles.jpg",
  "breite": 1000,
  "hoehe": 793,
  "zeigt": "Der Spiegelsaal von Versailles, 1919",
  "bildunterschrift": "Derselbe Spiegelsaal, in dem 1871 das Deutsche Reich ausgerufen worden war. Die Wahl des Ortes war Absicht und wurde in Deutschland als solche verstanden.",
  "urheber": "Herbert Arnould Olivier",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Sketch_of_the_Table_in_the_Hall_of_Mirrors,_at_which_the_Treaty_of_Versailles_was_Signed_Art.IWMART4213.jpg"
 },
 {
  "id": "vesuv",
  "datei": "bilder/vesuv.jpg",
  "breite": 1000,
  "hoehe": 667,
  "zeigt": "Pompeji mit dem Vesuv",
  "bildunterschrift": "Die Stadt wurde 79 unter Asche begraben und dadurch bewahrt. Fast alles, was wir über den römischen Alltag wissen, stammt von diesem einen Tag.",
  "urheber": "Gary Todd from Xinzheng, China",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Pompeii_Ruins_%26_Mt._Vesuvius_(48442337717).jpg"
 },
 {
  "id": "victoria",
  "datei": "bilder/victoria.jpg",
  "breite": 1000,
  "hoehe": 541,
  "zeigt": "Der Kristallpalast von 1851",
  "bildunterschrift": "Aus Gusseisen und Glas in wenigen Monaten errichtet, für die erste Weltausstellung. Sechs Millionen Menschen kamen — bei einer Bevölkerung von 21 Millionen.",
  "urheber": "Dickinson Brothers",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Crystal_Palace_from_the_northeast_from_Dickinson%27s_Comprehensive_Pictures_of_the_Great_Exhibition_of_1851._1854.jpg"
 },
 {
  "id": "weltwirtschaftskrise",
  "datei": "bilder/weltwirtschaftskrise.jpg",
  "breite": 1000,
  "hoehe": 1300,
  "zeigt": "Dorothea Lange: Migrant Mother, 1936",
  "bildunterschrift": "Eine der wirkungsvollsten Fotografien der Geschichte, aufgenommen für eine Regierungsbehörde. Sie zeigt eine Wanderarbeiterin in Kalifornien — und stand für Millionen.",
  "urheber": "Dorothea Lange",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg"
 },
 {
  "id": "westfaelischer-friede",
  "datei": "bilder/westfaelischer-friede.jpg",
  "breite": 1000,
  "hoehe": 775,
  "zeigt": "Die Beschwörung des Friedens von Münster",
  "bildunterschrift": "Gerard ter Borch war 1648 anwesend und malte die Szene. Aus diesem Frieden stammt die Ordnung souveräner Staaten, die einander nicht in die inneren Angelegenheiten fallen.",
  "urheber": "Gerard ter Borch",
  "lizenz": "Public domain",
  "herkunft": "https://commons.wikimedia.org/wiki/File:Westfaelischer_Friede_in_Muenster_(Gerard_Terborch_1648).jpg"
 },
 {
  "id": "world-wide-web",
  "datei": "bilder/world-wide-web.jpg",
  "breite": 1000,
  "hoehe": 750,
  "zeigt": "Der erste Webserver am CERN",
  "bildunterschrift": "Ein NeXT-Rechner mit einem handgeschriebenen Zettel: Diese Maschine ist ein Server, nicht ausschalten. 1993 gab das CERN die Technik gebührenfrei frei.",
  "urheber": "User:Coolcaesar at en.wikipedia",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg"
 },
 {
  "id": "zweiter-weltkrieg",
  "datei": "bilder/zweiter-weltkrieg.jpg",
  "breite": 1000,
  "hoehe": 670,
  "zeigt": "Stalingrad, 1943",
  "bildunterschrift": "Die Wende des Krieges im Osten. Von rund 110.000 deutschen Kriegsgefangenen kehrten etwa 6.000 zurück.",
  "urheber": "Zelma / Георгий Зельма",
  "lizenz": "CC BY-SA 3.0",
  "herkunft": "https://commons.wikimedia.org/wiki/File:RIAN_archive_2383_The_ruins_of_Stalingrad.jpg"
 }
];

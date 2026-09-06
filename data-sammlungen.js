/* =========================================================
   HISTORIA — DATEN: Schluesselmomente, verblueffende Fakten, Zitate, Schlachten

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const SCHLUESSELMOMENTE = [
 {
  "year": -3200,
  "title": "Erfindung der Schrift",
  "category": "Erfindung",
  "text": "Mit der Keilschrift und den Hieroglyphen wird Wissen erstmals dauerhaft speicher- und übertragbar – die Voraussetzung für Verwaltung, Recht, Wissenschaft und Geschichtsschreibung selbst.",
  "vertiefung": "erfindung-schrift",
  "thema": "kommunikation"
 },
 {
  "year": -508,
  "title": "Geburt der Demokratie in Athen",
  "category": "Politischer Umbruch",
  "text": "Kleisthenes' Reformen schaffen erstmals ein politisches System, in dem Bürger direkt über ihr Gemeinwesen entscheiden – ein Ideal, das über zwei Jahrtausende später weltweit wirkt.",
  "vertiefung": "athener-demokratie",
  "thema": "recht"
 },
 {
  "year": -218,
  "title": "Hannibal überquert die Alpen",
  "category": "Wendepunkt im Krieg",
  "text": "Der scheinbar unmögliche Alpenübergang mit Kriegselefanten bringt Rom an den Rand der Vernichtung – hätte Hannibal Rom eingenommen, wäre die Weltgeschichte grundlegend anders verlaufen."
 },
 {
  "year": 33,
  "title": "Entstehung des Christentums",
  "category": "Religion",
  "text": "Aus einer kleinen jüdischen Reformbewegung wird binnen dreier Jahrhunderte die Staatsreligion Roms – und später die prägende religiöse Kraft des Abendlandes."
 },
 {
  "year": 476,
  "title": "Untergang Westroms",
  "category": "Politischer Umbruch",
  "text": "Das Ende der antiken Ordnung in Westeuropa leitet Jahrhunderte politischer Zersplitterung ein, aus denen die heutigen europäischen Nationen langsam hervorgehen.",
  "vertiefung": "ende-westrom"
 },
 {
  "year": 1347,
  "title": "Der Schwarze Tod",
  "category": "Katastrophe",
  "text": "Ein Drittel der europäischen Bevölkerung stirbt innerhalb weniger Jahre – der dadurch entstehende Arbeitskräftemangel verschiebt langfristig die Machtverhältnisse zwischen Adel und einfachem Volk.",
  "vertiefung": "schwarzer-tod",
  "thema": "medizin"
 },
 {
  "year": 1453,
  "title": "Fall Konstantinopels",
  "category": "Wendepunkt im Krieg",
  "text": "Mit dem Ende des Byzantinischen Reiches verschiebt sich die Machtbalance zwischen Orient und Okzident endgültig – zugleich fliehen griechische Gelehrte nach Westeuropa und befeuern die Renaissance.",
  "vertiefung": "fall-konstantinopel"
 },
 {
  "year": 1492,
  "title": "Kolumbus erreicht Amerika",
  "category": "Wendepunkt",
  "text": "Zwei bis dahin getrennte Weltteile treten in dauerhaften Kontakt – mit enormen Folgen für Handel, Migration, Krankheiten und Machtverhältnisse, aber auch verheerenden Folgen für indigene Bevölkerungen.",
  "vertiefung": "columbian-exchange"
 },
 {
  "year": 1517,
  "title": "Beginn der Reformation",
  "category": "Religion",
  "text": "Luthers Thesen spalten die westliche Christenheit dauerhaft und lösen jahrhundertelange religiöse und politische Konflikte in Europa aus.",
  "vertiefung": "reformation",
  "thema": "kommunikation"
 },
 {
  "year": 1776,
  "title": "US-Unabhängigkeitserklärung",
  "category": "Politischer Umbruch",
  "text": "Erstmals gründet sich ein moderner Staat explizit auf den Prinzipien von Volkssouveränität und unveräußerlichen Menschenrechten."
 },
 {
  "year": 1789,
  "title": "Französische Revolution",
  "category": "Politischer Umbruch",
  "text": "Neu war nicht der Sturz eines Königs – neu war die Begründung. Herrschaft galt fortan als etwas, das sich vor den Regierten rechtfertigen muss. Dieser Gedanke ließ sich nicht mehr einfangen: Er wanderte über Napoleons Heere nach Europa, über Haiti in die Karibik und über die Erklärung der Menschen- und Bürgerrechte in fast jede spätere Verfassung.",
  "vertiefung": "franzoesische-revolution",
  "thema": "recht"
 },
 {
  "year": 1859,
  "title": "Darwins Evolutionstheorie",
  "category": "Wissenschaft",
  "text": "Die Idee der natürlichen Auslese verändert nicht nur die Biologie, sondern auch das philosophische und religiöse Selbstverständnis des Menschen."
 },
 {
  "year": 1869,
  "title": "Eröffnung des Suezkanals",
  "category": "Erfindung",
  "text": "Der Kanal veränderte die Landkarte der Macht: Wer ihn kontrollierte, kontrollierte den Weg nach Indien. 1875 zwang die Schuldenlast den Khediven Ismail, seine 176.602 Anteile zu verkaufen; auf Betreiben Disraelis kaufte sie die britische Regierung. Ägypten blieb danach bis 1949 ohne Sitz im Verwaltungsrat – am eigenen Kanal."
 },
 {
  "year": 1914,
  "title": "Ausbruch des Ersten Weltkriegs",
  "category": "Wendepunkt im Krieg",
  "text": "Ein regionales Attentat löst durch ein Bündnisgeflecht einen globalen Krieg aus, der vier Großreiche zerstört und die politische Landkarte des 20. Jahrhunderts neu zeichnet.",
  "vertiefung": "julikrise"
 },
 {
  "year": 1917,
  "title": "Russische Revolution",
  "category": "Politischer Umbruch",
  "text": "Erstmals übernimmt eine kommunistische Bewegung dauerhaft die Staatsmacht – prägt Weltpolitik und Ideologiekonflikte für das gesamte 20. Jahrhundert.",
  "vertiefung": "russische-revolution"
 },
 {
  "year": 1929,
  "title": "Weltwirtschaftskrise",
  "category": "Katastrophe",
  "text": "Entscheidend war nicht der Kurssturz, sondern seine Übertragung: Der Goldstandard band die Währungen aneinander, sodass Notenbanken mit Zinserhöhungen gegensteuern mussten und die Krise damit vertieften. Wer den Goldstandard zuerst verließ, erholte sich zuerst – Großbritannien ab 1931, die USA erst ab 1933.",
  "vertiefung": "weltwirtschaftskrise",
  "thema": "geld"
 },
 {
  "year": 1945,
  "title": "Erster Einsatz von Atomwaffen",
  "category": "Wendepunkt im Krieg",
  "text": "Die Abwürfe auf Hiroshima und Nagasaki beenden den Zweiten Weltkrieg und eröffnen zugleich das nukleare Zeitalter mit permanenter Auslöschungsgefahr.",
  "vertiefung": "zweiter-weltkrieg",
  "thema": "energie"
 },
 {
  "year": 1969,
  "title": "Erste Mondlandung",
  "category": "Erfindung",
  "text": "Der erste Schritt eines Menschen auf einem anderen Himmelskörper markiert den technologischen und symbolischen Höhepunkt des Kalten-Kriegs-Wettlaufs ins All."
 },
 {
  "year": 1989,
  "title": "Fall der Berliner Mauer",
  "category": "Politischer Umbruch",
  "text": "Friedliche Massenproteste beenden die deutsche und europäische Teilung und läuten das Ende des Kalten Krieges ein.",
  "vertiefung": "mauerfall"
 },
 {
  "year": 2022,
  "title": "Durchbruch generativer KI",
  "category": "Erfindung",
  "text": "Große Sprachmodelle werden erstmals massentauglich – mit potenziell ähnlich weitreichenden Folgen für Arbeit und Wissen wie einst der Buchdruck."
 },
 {
  "year": -3100,
  "title": "Vereinigung Ober- und Unterägyptens",
  "category": "Politischer Umbruch",
  "text": "Menes/Narmer eint zwei Königreiche zu einem der ersten Territorialstaaten der Geschichte – Grundlage für 3000 Jahre pharaonische Kontinuität."
 },
 {
  "year": -1274,
  "title": "Schlacht bei Kadesch & erster Friedensvertrag",
  "category": "Wendepunkt im Krieg",
  "text": "Nach der größten Streitwagenschlacht der Geschichte schließen Ägypter und Hethiter den ältesten erhaltenen zwischenstaatlichen Friedensvertrag der Menschheit."
 },
 {
  "year": -776,
  "title": "Erste Olympische Spiele",
  "category": "Kultur",
  "text": "Ein religiös-sportliches Fest wird zum verbindenden Element der zerstrittenen griechischen Stadtstaaten und zur Blaupause für Wettkampfkultur bis heute."
 },
 {
  "year": -221,
  "title": "Erste Reichseinigung Chinas",
  "category": "Politischer Umbruch",
  "text": "Qin Shi Huang vereinigt die zerstrittenen chinesischen Reiche gewaltsam und schafft mit einheitlicher Schrift und Verwaltung die Grundlage des chinesischen Staates bis heute.",
  "vertiefung": "qin-einigung"
 },
 {
  "year": 1204,
  "title": "Plünderung Konstantinopels durch Kreuzfahrer",
  "category": "Wendepunkt im Krieg",
  "text": "Der Vierte Kreuzzug richtet sich gegen die christliche Schwesterstadt Byzanz statt gegen Muslime – ein Verrat, der Byzanz dauerhaft schwächt und den Fall an die Osmanen 1453 vorbereitet.",
  "vertiefung": "kreuzzuege"
 },
 {
  "year": 1258,
  "title": "Mongolische Zerstörung Bagdads",
  "category": "Katastrophe",
  "text": "Die Vernichtung der abbasidischen Hauptstadt beendet abrupt das islamische 'Goldene Zeitalter' der Wissenschaft und gilt als eine der größten kulturellen Katastrophen der Geschichte.",
  "vertiefung": "mongolisches-reich"
 },
 {
  "year": 1492,
  "title": "Fall von Granada",
  "category": "Politischer Umbruch",
  "text": "Das Ende von 800 Jahren islamischer Präsenz in Spanien fällt zufällig mit dem Beginn der europäischen Expansion nach Amerika zusammen."
 },
 {
  "year": 1602,
  "title": "Gründung der ersten Börse der Welt",
  "category": "Erfindung",
  "text": "Mit handelbaren VOC-Aktien in Amsterdam entsteht ein völlig neues Finanzinstrument, das die Grundlage moderner Kapitalmärkte legt.",
  "thema": "geld"
 },
 {
  "year": 1648,
  "title": "Westfälischer Friede",
  "category": "Politischer Umbruch",
  "text": "Der Friede beendete den Versuch, Europa religiös zu vereinheitlichen. Weil kein Lager den anderen besiegen konnte, wurde aus der Frage nach der wahren Konfession eine Frage der Zuständigkeit – ein Verfahren statt einer Wahrheit. Ob damit schon das moderne Staatensystem begann, ist umstritten.",
  "vertiefung": "westfaelischer-friede",
  "thema": "recht"
 },
 {
  "year": 1839,
  "title": "Erster Opiumkrieg",
  "category": "Wendepunkt im Krieg",
  "text": "Großbritanniens militärische Erzwingung des Opiumhandels leitet Chinas 'Jahrhundert der Demütigung' ein und verschiebt die globale Machtbalance zugunsten Europas."
 },
 {
  "year": 1871,
  "title": "Deutsche Reichsgründung",
  "category": "Politischer Umbruch",
  "text": "Die Einigung unter preußischer Führung schafft eine neue Großmacht im Zentrum Europas und verändert das europäische Kräftegleichgewicht dauerhaft.",
  "vertiefung": "reichsgruendung"
 },
 {
  "year": 1905,
  "title": "Russisch-Japanischer Krieg endet",
  "category": "Wendepunkt im Krieg",
  "text": "Erstmals besiegt eine asiatische Macht eine europäische Großmacht – erschüttert den europäischen Überlegenheitsglauben und inspiriert Unabhängigkeitsbewegungen in ganz Asien."
 },
 {
  "year": 1917,
  "title": "Balfour-Deklaration",
  "category": "Politischer Umbruch",
  "text": "Großbritannien unterstützt erstmals offiziell eine 'nationale Heimstätte' für das jüdische Volk in Palästina – Ausgangspunkt späterer Nahostkonflikte."
 },
 {
  "year": 1947,
  "title": "Teilung Indiens",
  "category": "Katastrophe",
  "text": "Die überstürzte Teilung in Indien und Pakistan löst eine der größten Zwangsmigrationen der Geschichte mit hunderttausenden Toten aus.",
  "vertiefung": "teilung-indiens",
  "thema": "migration"
 },
 {
  "year": 105,
  "title": "Erfindung des Papiers",
  "category": "Erfindung",
  "text": "Der chinesische Hofbeamte Cai Lun verfeinert die Papierherstellung entscheidend – über Jahrhunderte breitet sich diese Beschreibstoff-Revolution allmählich bis nach Europa aus.",
  "thema": "kommunikation"
 },
 {
  "year": 868,
  "title": "Ältestes datiertes gedrucktes Buch",
  "category": "Erfindung",
  "text": "Das chinesische Diamant-Sutra entsteht im Holzdruckverfahren – Jahrhunderte vor Gutenberg, wenn auch ohne bewegliche Lettern.",
  "thema": "kommunikation"
 },
 {
  "year": 1044,
  "title": "Erfindung des Schießpulvers",
  "category": "Erfindung",
  "text": "Chinesische Alchemisten entdecken die explosive Mischung zunächst für medizinische Zwecke – ihre militärische Nutzung verändert binnen Jahrhunderten die Kriegsführung weltweit grundlegend."
 },
 {
  "year": 1088,
  "title": "Gründung der ersten europäischen Universität",
  "category": "Kultur",
  "text": "Die Universität von Bologna entsteht als älteste durchgehend bestehende Universität Europas – Grundstein institutionalisierter höherer Bildung.",
  "thema": "kommunikation"
 },
 {
  "year": 1494,
  "title": "Vertrag von Tordesillas",
  "category": "Politischer Umbruch",
  "text": "Spanien und Portugal teilen mit päpstlichem Segen die außereuropäische Welt entlang einer imaginären Linie unter sich auf – ohne jede Rücksicht auf die dort lebenden Bevölkerungen."
 },
 {
  "year": 1500,
  "title": "Der Kolumbianische Austausch",
  "category": "Wendepunkt",
  "text": "Pflanzen, Tiere, Menschen und Krankheiten zirkulieren erstmals massenhaft zwischen der Alten und der Neuen Welt – mit enormen, teils verheerenden ökologischen und demografischen Folgen.",
  "vertiefung": "columbian-exchange",
  "thema": "ernaehrung"
 },
 {
  "year": 1555,
  "title": "Augsburger Religionsfrieden",
  "category": "Religion",
  "text": "Das Prinzip 'Cuius regio, eius religio' erlaubt Landesherren erstmals, die Konfession ihres Territoriums selbst zu bestimmen – ein früher Schritt hin zu religiöser Koexistenz in Europa."
 },
 {
  "year": 1796,
  "title": "Erfindung der Pockenimpfung",
  "category": "Wissenschaft",
  "text": "Edward Jenner entwickelt die erste wissenschaftlich fundierte Impfung der Geschichte – Grundstein der modernen Immunologie und späteren Ausrottung der Pocken.",
  "thema": "medizin"
 },
 {
  "year": 1815,
  "title": "Wiener Kongress",
  "category": "Politischer Umbruch",
  "text": "Die europäischen Großmächte etablieren ein Mächtegleichgewicht-System, das Europa fast ein Jahrhundert lang vor einem erneuten Großkrieg bewahrt."
 },
 {
  "year": 1865,
  "title": "Verfassungsrechtliches Ende der Sklaverei in den USA",
  "category": "Politischer Umbruch",
  "text": "Nach der Emanzipationserklärung von 1863, die zunächst nur Sklaven in den Konföderierten Staaten betraf, beendet der 13. Verfassungszusatz 1865 die Sklaverei landesweit rechtlich endgültig – tatsächliche gesellschaftliche Gleichstellung blieb dennoch ein langer Weg.",
  "vertiefung": "sklavenhandel",
  "thema": "zwangsarbeit"
 },
 {
  "year": 1916,
  "title": "Sykes-Picot-Abkommen",
  "category": "Politischer Umbruch",
  "text": "Großbritannien und Frankreich ziehen im Geheimen willkürliche Grenzen durch den Nahen Osten – mit Konfliktfolgen, die bis heute spürbar sind."
 },
 {
  "year": 1945,
  "title": "Gründung der Vereinten Nationen",
  "category": "Politischer Umbruch",
  "text": "Der entscheidende Unterschied zum gescheiterten Völkerbund liegt im Sicherheitsrat: Die fünf Siegermächte erhielten ein Vetorecht und blieben damit dauerhaft an Bord – um den Preis, dass die Organisation gegen eines ihrer eigenen Mitglieder kaum handlungsfähig ist. Diese Bauweise war Bedingung dafür, dass es sie überhaupt gab."
 },
 {
  "year": 1960,
  "title": "'Afrikanisches Jahr'",
  "category": "Politischer Umbruch",
  "text": "Binnen eines einzigen Jahres erlangen 17 afrikanische Staaten ihre Unabhängigkeit von europäischen Kolonialmächten – Höhepunkt der weltweiten Dekolonisierungswelle.",
  "vertiefung": "dekolonisation"
 },
 {
  "year": 1969,
  "title": "Geburtsstunde des Internets (ARPANET)",
  "category": "Erfindung",
  "text": "Die erste Datenverbindung zwischen zwei Universitätscomputern legt den technischen Grundstein für das spätere globale Internet.",
  "thema": "kommunikation"
 },
 {
  "year": 2003,
  "title": "Entschlüsselung des menschlichen Genoms",
  "category": "Wissenschaft",
  "text": "Ein internationales Forschungsprojekt kartiert erstmals vollständig die genetische Bauanleitung des Menschen – mit weitreichenden Folgen für Medizin und Biotechnologie.",
  "vertiefung": "doppelhelix",
  "thema": "medizin"
 },
 {
  "year": -3000,
  "category": "Erfindung",
  "text": "Das Rad taucht zunächst nicht im Verkehr auf, sondern als Töpferscheibe. Erst später wird daraus das Wagenrad – eine Erfindung, die den Transport von Lasten und damit Handel und Krieg grundlegend verändert.",
  "title": "Rad und Töpferscheibe",
  "thema": "energie"
 },
 {
  "year": -1754,
  "category": "Politischer Umbruch",
  "title": "Kodex Hammurapi",
  "text": "Der babylonische König lässt Rechtssätze in Stein hauen und öffentlich aufstellen. Entscheidend ist weniger der Inhalt als das Prinzip: Recht wird nachprüfbar, weil es geschrieben und sichtbar ist.",
  "thema": "recht"
 },
 {
  "year": -600,
  "category": "Erfindung",
  "title": "Erfindung der Münze",
  "text": "In Lydien entstehen erste geprägte Münzen aus Elektron. Geld als genormtes, staatlich garantiertes Tauschmittel macht Handel über Vertrauensgrenzen hinweg möglich.",
  "thema": "geld"
 },
 {
  "year": 105,
  "category": "Erfindung",
  "title": "Papier in China",
  "text": "Dem Hofbeamten Cai Lun wird die Verbesserung der Papierherstellung zugeschrieben. Über die islamische Welt erreicht das Verfahren erst rund tausend Jahre später Europa.",
  "thema": "kommunikation"
 },
 {
  "year": 476,
  "category": "Wendepunkt",
  "title": "Absetzung des letzten Westkaisers",
  "text": "Odoaker setzt Romulus Augustulus ab. Zeitgenossen sahen darin kaum einen Einschnitt – das Datum wurde erst von späteren Historikern zur Epochengrenze erhoben.",
  "vertiefung": "ende-westrom"
 },
 {
  "year": 622,
  "category": "Religion",
  "title": "Hidschra",
  "text": "Mohammeds Auswanderung von Mekka nach Medina markiert den Beginn der islamischen Zeitrechnung – ein Kalender, der von einem politischen Neuanfang aus zählt, nicht von einer Geburt.",
  "vertiefung": "islamische-expansion"
 },
 {
  "year": 800,
  "category": "Politischer Umbruch",
  "title": "Kaiserkrönung Karls des Großen",
  "text": "Mit der Krönung an Weihnachten 800 wird der Anspruch erneuert, das weströmische Kaisertum fortzusetzen – gegen den Widerspruch von Byzanz."
 },
 {
  "year": 1215,
  "category": "Politischer Umbruch",
  "title": "Magna Carta",
  "text": "König Johann muss zugestehen, dass auch der Herrscher an Recht gebunden ist – ein Satz, der über Jahrhunderte weiterwirkt, obwohl das Dokument zunächst Adelsinteressen sicherte.",
  "thema": "recht"
 },
 {
  "year": 1450,
  "category": "Wissenschaft",
  "title": "Der Buchdruck",
  "text": "Gutenbergs bewegliche Lettern senken den Buchpreis binnen weniger Jahrzehnte um zwei Drittel. Wissen wird erstmals in großer Zahl vergleichbar – und damit überprüfbar.",
  "vertiefung": "buchdruck",
  "thema": "kommunikation"
 },
 {
  "year": 1543,
  "category": "Wissenschaft",
  "title": "Kopernikus stellt die Erde beiseite",
  "text": "In 'De revolutionibus' rückt Kopernikus die Sonne ins Zentrum. Der Bruch liegt weniger in der Astronomie als im Selbstbild: Der Mensch wohnt nicht mehr im Mittelpunkt."
 },
 {
  "year": 1687,
  "category": "Wissenschaft",
  "title": "Newtons Principia",
  "text": "Newton zeigt, dass fallende Äpfel und kreisende Planeten denselben Gesetzen folgen. Die Vorstellung, die Natur sei mathematisch beschreibbar, wird zur Grundlage der modernen Wissenschaft."
 },
 {
  "year": 1755,
  "category": "Katastrophe",
  "title": "Erdbeben von Lissabon",
  "text": "Das Beben an Allerheiligen zerstört eine europäische Hauptstadt und erschüttert das theologische Weltbild: Wie lässt sich ein solches Unglück mit einer guten Weltordnung vereinbaren? Die Frage prägt die Aufklärung.",
  "vertiefung": "aufklaerung"
 },
 {
  "year": 1804,
  "category": "Politischer Umbruch",
  "title": "Unabhängigkeit Haitis",
  "text": "Aus dem einzigen erfolgreichen Sklavenaufstand der Geschichte geht ein unabhängiger Staat hervor. Die europäischen Mächte und die USA reagieren mit Isolation statt Anerkennung.",
  "vertiefung": "sklavenhandel",
  "thema": "zwangsarbeit"
 },
 {
  "year": 1848,
  "category": "Politischer Umbruch",
  "title": "Revolutionen von 1848",
  "text": "In fast ganz Europa fordern Bewegungen Verfassungen, Pressefreiheit und nationale Einheit. Fast überall scheitern sie kurzfristig – und setzen langfristig den Rahmen."
 },
 {
  "year": 1865,
  "category": "Wissenschaft",
  "title": "Mendel stellt seine Vererbungsregeln vor",
  "text": "Der Augustinermönch Gregor Mendel beschreibt an Erbsen die Regeln der Vererbung. Seine Arbeit bleibt 35 Jahre unbeachtet, bis sie um 1900 wiederentdeckt wird.",
  "thema": "ernaehrung"
 },
 {
  "year": 1867,
  "category": "Wissenschaft",
  "title": "Antiseptische Chirurgie",
  "text": "Joseph Lister führt Antiseptik in den Operationssaal ein. Zuvor starben Patienten häufiger an der Infektion als am Eingriff.",
  "thema": "medizin"
 },
 {
  "year": 1893,
  "category": "Politischer Umbruch",
  "title": "Erstes Frauenwahlrecht",
  "text": "Am 19. September 1893 unterzeichnet der Gouverneur den Electoral Act: Neuseeland ist der erste selbstverwaltete Staat, in dem alle Frauen bei Parlamentswahlen wählen dürfen. Einzelne Territorien hatten Frauen schon früher zugelassen. Zehn Wochen später gingen rund 90.000 Neuseeländerinnen zur Wahl – eine Beteiligung von 82 Prozent und damit höher als bei den Männern.",
  "thema": "recht"
 },
 {
  "year": 1903,
  "category": "Erfindung",
  "title": "Erster Motorflug",
  "text": "Die Brüder Wright halten sich mit einem motorisierten Flugzeug in der Luft. Keine sechs Jahrzehnte später fliegen Menschen zum Mond."
 },
 {
  "year": 1928,
  "category": "Wissenschaft",
  "title": "Entdeckung des Penicillins",
  "text": "Alexander Fleming bemerkt, dass ein Schimmelpilz Bakterien abtötet. Erst der Massenproduktion im Zweiten Weltkrieg verdankt das Antibiotikum seine Wirkung auf die Sterblichkeit.",
  "thema": "medizin"
 },
 {
  "year": 1945,
  "category": "Katastrophe",
  "title": "Hiroshima und Nagasaki",
  "text": "Zum ersten und bisher einzigen Mal werden Kernwaffen im Krieg eingesetzt. Seither prägt die Möglichkeit der Selbstauslöschung die internationale Politik.",
  "vertiefung": "zweiter-weltkrieg",
  "thema": "energie"
 },
 {
  "year": 1948,
  "category": "Politischer Umbruch",
  "title": "Allgemeine Erklärung der Menschenrechte",
  "text": "Die UN-Generalversammlung verabschiedet einen Text, der Rechte nicht an Staatsangehörigkeit knüpft, sondern an das Menschsein – rechtlich zunächst unverbindlich, politisch wirkmächtig.",
  "thema": "recht"
 },
 {
  "year": 1953,
  "category": "Wissenschaft",
  "title": "Struktur der DNA",
  "text": "Watson und Crick beschreiben die Doppelhelix – wesentlich gestützt auf Röntgenaufnahmen von Rosalind Franklin, deren Beitrag lange nicht angemessen gewürdigt wurde.",
  "vertiefung": "doppelhelix",
  "thema": "medizin"
 },
 {
  "year": 1972,
  "category": "Wendepunkt",
  "title": "Die Grenzen des Wachstums",
  "text": "Der Bericht an den Club of Rome bringt die Frage, ob unbegrenztes Wachstum auf einem begrenzten Planeten möglich ist, erstmals in die breite Öffentlichkeit.",
  "thema": "energie"
 },
 {
  "year": 1980,
  "category": "Wissenschaft",
  "title": "Pocken ausgerottet",
  "text": "Die WHO erklärt die Pocken für ausgerottet – der bislang einzige derartige Erfolg bei einer menschlichen Infektionskrankheit.",
  "thema": "medizin"
 },
 {
  "year": 1989,
  "category": "Erfindung",
  "title": "Das World Wide Web",
  "text": "Tim Berners-Lee entwirft am CERN ein System zum Austausch von Forschungsdaten. 1993 gibt das CERN die Software gemeinfrei – die Entscheidung, die seine Ausbreitung ermöglichte.",
  "vertiefung": "world-wide-web",
  "thema": "kommunikation"
 },
 {
  "year": 1994,
  "category": "Politischer Umbruch",
  "title": "Ende der Apartheid",
  "text": "Bemerkenswert ist weniger der Machtwechsel als sein Ausbleiben von Rache: Die Wahrheits- und Versöhnungskommission bot Tätern Straffreiheit im Tausch gegen vollständige Aussagen. Ein Verfahren, das seither weltweit nachgeahmt und ebenso lange kritisiert wird – weil Wahrheit an die Stelle von Strafe trat.",
  "vertiefung": "ende-apartheid"
 },
 {
  "year": -3300,
  "title": "Ötzi stirbt am Tisenjoch",
  "category": "Kultur",
  "text": "Der Fund von 1991 liefert die dichteste Momentaufnahme eines Menschenlebens der Kupferzeit – bis hin zu seiner letzten Mahlzeit und dem Pfeil in seiner Schulter."
 },
 {
  "year": -1754,
  "title": "Der Codex Hammurabi",
  "category": "Recht",
  "text": "Die umfangreichste erhaltene Gesetzessammlung der Bronzezeit wird auf eine Stele gemeißelt und öffentlich aufgestellt: Recht wird nachlesbar.",
  "thema": "recht"
 },
 {
  "year": -539,
  "title": "Kyros nimmt Babylon",
  "category": "Herrschaft",
  "text": "Der Kyros-Zylinder verkündet die Rückkehr verschleppter Gruppen – oft als erste Menschenrechtserklärung bezeichnet, tatsächlich ein Text persischer Herrschaftslegitimation."
 },
 {
  "year": -44,
  "title": "Ermordung Caesars",
  "category": "Herrschaft",
  "text": "Der Versuch, die Republik zu retten, beschleunigt ihr Ende: Vierzehn Jahre später ist Rom eine Monarchie."
 },
 {
  "year": 751,
  "title": "Schlacht am Talas",
  "category": "Konflikt",
  "text": "Der Vormarsch der Tang nach Westen endet. China zieht sich für ein Jahrtausend aus Zentralasien zurück.",
  "vertiefung": "seidenstrasse"
 },
 {
  "year": 868,
  "title": "Das älteste datierte gedruckte Buch",
  "category": "Erfindung",
  "text": "Das chinesische Diamant-Sutra trägt ein Datum und den Vermerk, es sei zur freien Verteilung bestimmt – Druck und Wissensfreiheit treten gemeinsam auf.",
  "thema": "kommunikation"
 },
 {
  "year": 1206,
  "title": "Dschingis Khan wird ausgerufen",
  "category": "Herrschaft",
  "text": "Aus rivalisierenden Steppenverbänden wird ein Staat. Innerhalb einer Generation entsteht das größte zusammenhängende Landreich der Geschichte.",
  "vertiefung": "mongolisches-reich"
 },
 {
  "year": 1324,
  "title": "Mansa Musas Pilgerfahrt",
  "category": "Wirtschaft",
  "text": "Der Herrscher Malis verschenkt in Kairo so viel Gold, dass dessen Wert dort über Jahre gedrückt bleibt – Westafrika tritt ins europäische Weltbild.",
  "vertiefung": "mali-reich",
  "thema": "geld"
 },
 {
  "year": 1492,
  "title": "Ende von Al-Andalus",
  "category": "Herrschaft",
  "text": "Mit dem Fall Granadas endet fast achthundert Jahre islamische Herrschaft in Spanien. Im selben Jahr werden Juden vertrieben und Kolumbus segelt los."
 },
 {
  "year": 1804,
  "title": "Haiti wird unabhängig",
  "category": "Herrschaft",
  "text": "Der einzige Staat, der aus einem erfolgreichen Sklavenaufstand hervorgeht – und dafür jahrzehntelang isoliert und mit Reparationen belastet wird.",
  "vertiefung": "sklavenhandel",
  "thema": "zwangsarbeit"
 },
 {
  "year": 1885,
  "title": "Die Berliner Konferenz endet",
  "category": "Herrschaft",
  "text": "Europäische Mächte teilen Afrika unter sich auf, ohne dass ein Afrikaner am Tisch sitzt. Die gezogenen Grenzen bestehen weitgehend fort.",
  "vertiefung": "dekolonisation"
 },
 {
  "year": 1896,
  "title": "Adwa",
  "category": "Konflikt",
  "text": "Äthiopien schlägt eine europäische Invasionsarmee und bleibt unkolonisiert – ein Bezugspunkt antikolonialer Bewegungen weltweit."
 },
 {
  "year": 1955,
  "title": "Die Konferenz von Bandung",
  "category": "Herrschaft",
  "text": "29 Staaten Asiens und Afrikas verständigen sich ohne europäische Beteiligung – die Geburtsstunde des globalen Südens als politischer Größe.",
  "vertiefung": "bandung"
 },
 {
  "year": 1957,
  "title": "Ghana wird unabhängig",
  "category": "Herrschaft",
  "text": "Als erste Kolonie südlich der Sahara. Drei Jahre später folgen siebzehn weitere Staaten.",
  "vertiefung": "dekolonisation"
 },
 {
  "year": 1972,
  "title": "Der Blick zurück",
  "category": "Kultur",
  "text": "Die Apollo-17-Besatzung fotografiert die Erde als vollständige Kugel. Das Bild wird zum Sinnbild der Umweltbewegung."
 },
 {
  "year": 1994,
  "title": "Erste allgemeine Wahlen in Südafrika",
  "category": "Herrschaft",
  "text": "Ein Regime, dessen Ende fast alle für nur gewaltsam möglich hielten, endet am Wahltag.",
  "vertiefung": "ende-apartheid"
 },
 {
  "year": 2001,
  "title": "Das menschliche Genom",
  "category": "Wissenschaft",
  "text": "Die erste Rohfassung wird veröffentlicht. Sie zeigt weniger Gene als erwartet – und dass genetische Unterschiede zwischen Menschengruppen geringer sind als innerhalb von ihnen.",
  "vertiefung": "doppelhelix",
  "thema": "medizin"
 }
];
const SURPRISING_FACTS = [
  "Kleopatra lebte zeitlich näher an der Mondlandung als an dem Bau der Cheops-Pyramide.",
  "Der Erste Weltkrieg endete offiziell erst 1919 mit dem Vertrag von Versailles – der Waffenstillstand war schon 1918.",
  "Die Berliner Mauer fiel eher durch ein Missverständnis auf einer Pressekonferenz als durch einen geplanten Beschluss.",
  "Julius Caesar wurde als junger Mann von Piraten entführt – und drohte ihnen scherzhaft, sie später hinrichten zu lassen. Das tat er nach seiner Freilassung tatsächlich.",
  "Isaac Newton entwickelte wichtige Teile seiner Physik, während Universitäten wegen der Pest geschlossen waren.",
  "Das Osmanische Reich existierte über 600 Jahre – von 1299 bis 1922.",
  "Der Buchdruck verbreitete sich so schnell, dass bereits 1500 – nur 45 Jahre nach Gutenbergs Bibel – über 20 Millionen Bücher in Europa gedruckt worden waren.",
  "Albert Einstein wurde 1952 das Präsidentenamt Israels angeboten – er lehnte ab.",
  "Die Magna Carta von 1215 enthielt ursprünglich keine Vorstellung von 'Demokratie', wie wir sie heute kennen – sie schützte vor allem die Rechte des Adels.",
  "Der Vesuv-Ausbruch, der Pompeji zerstörte, fand vermutlich im Oktober statt, nicht wie lange angenommen im August.",
  "Dschingis Khan verbot Folter und garantierte im Mongolenreich religiöse Toleranz – ungewöhnlich für seine Zeit.",
  "Der Zweite Weltkrieg forderte schätzungsweise mehr Menschenleben als jeder andere Krieg der Geschichte: über 60 Millionen Tote.",
  "Als die Titanic 1912 sank, war der Erste Weltkrieg noch zwei Jahre entfernt.",
  "Wilhelm der Eroberer ließ nach der Eroberung Englands 1086 ein Grundbuch erstellen, das 'Domesday Book' – eine der frühesten Volkszählungen Europas.",
  "Ötzi, die Gletschermumie, trug bei seinem Tod eine Pfeilspitze in der Schulter – vermutlich Opfer eines Gewaltverbrechens vor über 5000 Jahren.",
  "Mansa Musa von Mali soll bei seiner Pilgerreise nach Mekka 1324 so viel Gold verteilt haben, dass der Goldpreis in Kairo für Jahre einbrach.",
  "Die Pyramiden von Gizeh waren bereits älter als das Römische Reich, als Kleopatra lebte.",
  "Sokrates hat selbst nie etwas Schriftliches hinterlassen – alles, was wir über ihn wissen, stammt von Schülern wie Platon.",
  "Der Hundertjährige Krieg dauerte tatsächlich 116 Jahre.",
  "Katharina die Große war gebürtige Deutsche und kam erst durch Heirat an den russischen Zarenhof.",
  "Der erste Weltraumflug eines Menschen (Juri Gagarin, 1961) dauerte nur 108 Minuten.",
  "Napoleons Feldzug nach Russland begann mit über 600.000 Soldaten – nur ein Bruchteil kehrte zurück.",
  "Die Berliner Mauer war zum Zeitpunkt ihres Falls fast genauso lange Symbol der Teilung wie sie heute schon wieder Geschichte ist.",
  "Marie Curie ist bis heute die einzige Person, die Nobelpreise in zwei verschiedenen Naturwissenschaften erhielt (Physik und Chemie).",
  "Rom wurde der Legende nach 753 v. Chr. gegründet – das Römische Reich bestand damit (inklusive Byzanz) über 2200 Jahre.",
  "Die Universität al-Qarawiyyin in Fes wurde 859 von einer Frau, Fatima al-Fihri, gegründet und gilt als älteste durchgehend betriebene Hochschule der Welt.",
  "Als in Ägypten die letzten Pyramiden längst gebaut waren, lebten in Sibirien noch Mammuts – die letzte Population auf der Wrangelinsel starb erst um 1650 v. Chr. aus.",
  "Der Buchdruck mit beweglichen Metalllettern wurde in Korea rund zwei Jahrhunderte vor Gutenberg verwendet, setzte sich dort aber nicht durch: Bei tausenden Schriftzeichen lohnt sich der Vorteil kaum.",
  "Das Osmanische Reich und die Niederlande unterhielten über 400 Jahre ununterbrochen diplomatische Beziehungen – begonnen 1612, überstanden haben sie beide Weltkriege.",
  "Oxford lehrte bereits, als das Aztekenreich noch nicht gegründet war: Die Universität nahm im 11. Jahrhundert den Betrieb auf, Tenochtitlán entstand 1325.",
  "Der letzte bekannte Veteran des Amerikanischen Bürgerkriegs starb 1956 – im selben Jahr, in dem der Suezkrieg begann und der erste Transatlantik-Telefonkabelbetrieb aufgenommen wurde.",
  "Nofretetes berühmte Büste blieb dreitausend Jahre unvollendet: Das linke Auge wurde nie eingesetzt – vermutlich diente sie als Bildhauermodell.",
  "In der Antike war die Bibliothek von Pergamon so bedeutend, dass Ägypten laut Überlieferung den Papyrusexport stoppte. Pergamon wich auf Tierhaut aus – daher der Name Pergament.",
  "Die Wikinger reichten weiter als gedacht: In einer schwedischen Wikingerbestattung fand sich eine Buddha-Figur aus Nordindien, und in Konstantinopel diente eine Garde aus Nordleuten dem byzantinischen Kaiser.",
  "Als der Eiffelturm 1889 eröffnet wurde, war er das höchste Bauwerk der Welt – und sollte nach zwanzig Jahren wieder abgerissen werden. Gerettet hat ihn seine Brauchbarkeit als Funkantenne.",
  "Die kürzeste bekannte Regierungszeit eines Monarchen dauerte nach französischen Angaben etwa zwanzig Minuten: Ludwig XIX. dankte 1830 unmittelbar nach der Abdankung seines Vaters ebenfalls ab.",
  "Der Wechsel zum gregorianischen Kalender ließ Tage verschwinden: Wer 1582 in Rom am 4. Oktober zu Bett ging, wachte am 15. Oktober auf. England zog erst 1752 nach, Russland 1918.",
  "Die Sowjetunion und die USA waren im Zweiten Weltkrieg Verbündete – amerikanische Lieferungen umfassten unter anderem über 400.000 Fahrzeuge, ohne die die Rote Armee deutlich langsamer vorgerückt wäre.",
  "Der erste dokumentierte Streik der Geschichte fand um 1157 v. Chr. im alten Ägypten statt: Arbeiter am Grabbau in Deir el-Medina legten die Arbeit nieder, weil ihre Getreiderationen ausblieben.",
  "Kaffeehäuser galten im 17. Jahrhundert als politisch gefährlich. Karl II. versuchte 1675, die Londoner Kaffeehäuser zu schließen – und nahm den Erlass nach elf Tagen zurück.",
  "Als Kaiser Wilhelm II. 1941 in den Niederlanden starb, war er seit über zwanzig Jahren im Exil – und wurde von der Wehrmacht bewacht, die das Land besetzt hatte.",
  "Die Verfassung von San Marino stützt sich auf Statuten von 1600 und gilt damit als das älteste noch geltende Verfassungswerk der Welt.",
  "Die Cheops-Pyramide blieb rund 3.800 Jahre lang das höchste Bauwerk der Welt – abgelöst erst um 1311 vom Turm der Kathedrale von Lincoln.",
  "Die älteste bekannte Kundenbeschwerde ist rund 3.750 Jahre alt: Ein Babylonier namens Nanni beklagt auf einer Tontafel minderwertiges Kupfer. Die Tafel liegt im British Museum.",
  "Beim Pyramidenbau half Wasser: Versuche von 2014 zeigten, dass angefeuchteter Sand den Zugwiderstand eines Schlittens etwa halbiert – auf ägyptischen Wandbildern gießt tatsächlich jemand Wasser vor den Schlitten.",
  "Der Stein von Rosetta ist kein Kunstwerk, sondern Verwaltungsprosa: ein Priesterdekret von 196 v. Chr., dreisprachig ausgehängt wie eine Bekanntmachung.",
  "Der olympische Waffenstillstand galt nicht dem Frieden, sondern der Anreise: Er sicherte Teilnehmern freies Geleit, während die Kriege weiterliefen.",
  "Sparta hatte keine Stadtmauer. Die überlieferte Begründung lautete, die Männer seien die Mauer.",
  "Die athenische Demokratie besetzte die meisten Ämter per Los. Wahlen galten als aristokratisch, weil sie die Bekannten und Wohlhabenden bevorzugen.",
  "Die Marathonstrecke von 42,195 Kilometern ist eine Erfindung von 1908: In London wurde der Lauf verlängert, damit er vor der königlichen Loge endete.",
  "Crassus, einer der reichsten Römer, unterhielt eine Feuerwehr, die erst löschte, nachdem er das brennende Haus billig gekauft hatte.",
  "Römischer Beton härtet auch unter Wasser. Studien führen seine Haltbarkeit auf eingeschlossene Kalkklumpen zurück, die Risse selbsttätig wieder verschließen.",
  "Ein römischer Legionär trug rund 30 Kilogramm Gepäck. Die Soldaten nannten sich selbst die Maultiere des Marius.",
  "Die Römer wuschen Stoffe mit Urin und Kaiser Vespasian besteuerte ihn. Auf den Einwand seines Sohnes soll er geantwortet haben, Geld stinke nicht.",
  "Der römische Kalender hatte ursprünglich zehn Monate. September bis Dezember tragen bis heute die Zahlwörter sieben bis zehn im Namen – obwohl sie längst an neunter bis zwölfter Stelle stehen.",
  "Das längste Jahr der Geschichte hatte 445 Tage: Caesar schob 46 v. Chr. Tage ein, um den Kalender wieder mit den Jahreszeiten in Einklang zu bringen.",
  "Sumerisch ist mit keiner bekannten Sprache der Welt verwandt. Es steht sprachlich völlig allein – und wurde trotzdem über Jahrtausende geschrieben.",
  "Das älteste bekannte Rezept für Bier steht auf einer sumerischen Tontafel und ist zugleich ein Loblied auf die Biergöttin Ninkasi.",
  "Die Seidenraupenzucht war in China Staatsgeheimnis. Der Überlieferung nach schmuggelten zwei Mönche um 550 Eier in hohlen Bambusstäben nach Byzanz.",
  "Papier diente in China bereits im 6. Jahrhundert als Toilettenpapier – zu einer Zeit, als Europa noch mühsam auf Pergament schrieb.",
  "Kaiser, Zar und Kaiserin gehen alle auf einen Familiennamen zurück: den von Gaius Julius Caesar.",
  "Island hält seit 930 eine Volksversammlung ab. Das Althing gilt als eines der ältesten fortbestehenden Parlamente der Welt.",
  "Grönland heißt so aus Werbegründen: Erik der Rote wählte den Namen, um Siedler anzulocken.",
  "Um 800 war Bagdad vermutlich die größte Stadt der Welt. Aachen, die Hauptstadt Karls des Großen, hatte einige tausend Einwohner.",
  "Karl der Große konnte lesen, aber nie richtig schreiben. Sein Biograf Einhard berichtet, er habe Wachstafeln unter dem Kopfkissen gehabt, um nachts zu üben.",
  "Die Pest kam womöglich über eine Belagerung nach Europa: Bei Kaffa auf der Krim sollen Angreifer 1346 Leichen über die Stadtmauern geschleudert haben.",
  "Nach dem Schwarzen Tod stiegen die Löhne der Überlebenden so stark, dass England 1351 ein Gesetz erließ, das Lohnerhöhungen schlicht verbot.",
  "Die Universität Cambridge entstand 1209 als Abspaltung: Gelehrte verließen Oxford nach einem Streit mit der Stadt und ließen sich anderswo nieder.",
  "Die Hanse hatte keine Verfassung, keine Armee, keine feste Mitgliederliste und keine Hauptstadt – und beherrschte drei Jahrhunderte den Handel im Norden.",
  "Der Schiefe Turm von Pisa neigte sich schon während des Baus. Gerettet hat ihn die fast zweihundertjährige Bauzeit: Der Untergrund konnte sich zwischendurch setzen.",
  "Timbuktu hatte im 16. Jahrhundert einen florierenden Buchmarkt. Handschriften waren dort Handelsware wie Salz und Gold.",
  "Der Kompass war in China zunächst kein Navigationsgerät, sondern diente der richtigen Ausrichtung von Gebäuden und Gräbern.",
  "Die Dame war im Schach ursprünglich ein Berater und die schwächste Figur. Erst im 15. Jahrhundert wurde sie zur stärksten – zeitgleich mit mehreren mächtigen Königinnen in Europa.",
  "Der Vierte Kreuzzug eroberte 1204 nicht Jerusalem, sondern Konstantinopel – die größte christliche Stadt der Welt.",
  "Das älteste bekannte durchgehend geführte Unternehmen war die japanische Tempelbaufirma Kongō Gumi: gegründet 578, selbstständig bis 2006 – fast 1.450 Jahre.",
  "Die Kathedrale von Köln stand über 300 Jahre als Bauruine mit einem Kran auf dem Turmstumpf. Vollendet wurde sie erst 1880.",
  "Kolumbus starb in dem Glauben, Asien erreicht zu haben. Amerika trägt den Namen Amerigo Vespuccis, weil ein Kartograf ihn 1507 so auf seine Karte schrieb.",
  "Der Vertrag von Tordesillas teilte 1494 die Welt entlang eines Meridians zwischen Spanien und Portugal auf. Deshalb spricht Brasilien heute Portugiesisch.",
  "Venedig erließ 1474 das erste allgemeine Patentgesetz der Welt – rund 300 Jahre vor dem modernen Patentrecht.",
  "Die Kartoffel galt in Europa lange als ungenießbar. Die Anekdote, Friedrich der Große habe Felder bewachen lassen, um sie durch Diebstahl begehrt zu machen, ist allerdings nicht zeitgenössisch belegt.",
  "Kaffee, Tee, Schokolade und Zucker kamen in Europa fast gleichzeitig im 17. Jahrhundert in Mode. Alle vier beruhten auf kolonialer Zwangsarbeit.",
  "Der Große Brand von London zerstörte 1666 über 13.000 Häuser, forderte nach offizieller Zählung aber nur wenige Todesopfer. Die Dunkelziffer gilt als hoch, weil Arme nicht erfasst wurden.",
  "Zar Peter der Große reiste 1697 unter falschem Namen durch Westeuropa und arbeitete auf einer niederländischen Werft als Zimmermann.",
  "Isaac Newton leitete über zwanzig Jahre die königliche Münze und verfolgte Falschmünzer persönlich. Mindestens einer wurde auf sein Betreiben hingerichtet.",
  "Die Versicherungsbörse Lloyd's entstand in einem Londoner Kaffeehaus. Wer Schiffe versichern wollte, traf sich dort bei Edward Lloyd.",
  "Die Bank von Amsterdam nahm im 17. Jahrhundert Münzen aus dutzenden Prägungen an und rechnete sie in einer eigenen Einheit ab – ein früher Vorläufer stabiler Wechselkurse.",
  "Vor dem Kunstdünger importierte Europa Vogelkot: Peru verdiente im 19. Jahrhundert jahrzehntelang mehr an Guano als an jedem anderen Ausfuhrgut.",
  "Der Wiener Kongress wurde für seine Feste bekannt. Der Spott, der Kongress tanze, komme aber nicht voran, stammt der Überlieferung nach von einem Teilnehmer, dem Fürsten de Ligne.",
  "Der Ausbruch des Tambora 1815 führte zum Jahr ohne Sommer: Missernten in Europa und Nordamerika – und in einem verregneten Urlaub am Genfersee entstand Mary Shelleys Frankenstein.",
  "Das Fahrrad ist eine Folge derselben Klimakatastrophe: Nach dem Hafermangel 1816 baute Karl Drais eine Laufmaschine als Ersatz für das Pferd.",
  "Vor der Eisenbahn hatte jede Stadt ihre eigene Uhrzeit. Erst der Fahrplan erzwang eine einheitliche Zeit über ganze Länder hinweg.",
  "Napoleon III. ließ Paris auch deshalb mit breiten Boulevards umbauen, weil sie sich schlechter verbarrikadieren ließen als enge Gassen.",
  "Die Freiheitsstatue war ein Geschenk Frankreichs und kam in Einzelteilen über den Atlantik. Ihr Sockel wurde durch eine Zeitungskampagne mit Kleinspenden finanziert.",
  "Der Suezkanal gehörte bei der Eröffnung 1869 mehrheitlich Ägypten und Frankreich. Britannien kaufte sich 1875 ein, als Ägypten zahlungsunfähig wurde.",
  "Rund ein Drittel der afrikanischen Staatsgrenzen verläuft schnurgerade entlang von Längen- und Breitengraden – gezogen von Europäern, die die Gegend nie gesehen hatten.",
  "Die Nachricht von Lincolns Ermordung brauchte 1865 noch zwölf Tage nach Europa. Ein funktionierendes Transatlantikkabel gab es erst ab 1866.",
  "Als 1884 in Washington die Nullmeridiane verhandelt wurden, stimmte Frankreich gegen Greenwich – und rechnete noch bis 1911 offiziell nach Pariser Zeit.",
  "Alaska verlor beim Verkauf an die USA einen Tag: Auf den 6. Oktober 1867 folgte unmittelbar der 18. Oktober – Kalenderwechsel und Datumsgrenze zugleich.",
  "Das Wort Boykott geht auf einen Menschen zurück: Charles Boycott, einen Gutsverwalter in Irland, den 1880 niemand mehr bediente.",
  "Die Guillotine ist nach einem Arzt benannt, der die Todesstrafe abschaffen wollte. Durchsetzen konnte er nur ihre schnellste Form.",
  "Neuseeland führte 1893 als erstes Land ein allgemeines Frauenwahlrecht bei nationalen Wahlen ein.",
  "Im Amerikanischen Bürgerkrieg starben etwa doppelt so viele Soldaten an Krankheiten wie im Gefecht.",
  "Der Erste Weltkrieg begann mit einer Fehlfahrt: Der Wagen des österreichischen Thronfolgers bog falsch ab und hielt zufällig genau vor dem Attentäter.",
  "Der Weihnachtsfrieden 1914 fand nicht an einem Ort statt, sondern an vielen Abschnitten der Westfront. Beide Führungen verboten anschließend jede Wiederholung.",
  "Die Titanic hatte mehr Rettungsboote an Bord, als das Gesetz verlangte. Die Vorschriften stammten aus einer Zeit erheblich kleinerer Schiffe.",
  "Die Spanische Grippe traf auffällig viele junge, gesunde Erwachsene. Eine Erklärung ist, dass gerade ein starkes Immunsystem überschießend reagierte.",
  "Der Völkerbund hatte die USA nie als Mitglied, obwohl ein amerikanischer Präsident ihn maßgeblich entworfen hatte. Der Senat lehnte den Beitritt ab.",
  "Die Weimarer Republik hatte in vierzehn Jahren rund zwanzig Regierungen – im Schnitt hielt ein Kabinett etwa acht Monate.",
  "Die Olympischen Spiele fielen dreimal wegen Krieges aus: 1916, 1940 und 1944.",
  "Auf der Wannseekonferenz 1942 wurde der Völkermord nicht beschlossen, sondern organisiert. Das Morden hatte Monate zuvor begonnen.",
  "Der Zweite Weltkrieg endete in Europa zweimal: Die Kapitulation wurde am 7. Mai in Reims unterzeichnet und auf sowjetischen Wunsch am 8. Mai in Berlin wiederholt. Wegen der Zeitverschiebung feiert Russland am 9. Mai.",
  "Die Enigma galt als unknackbar. Entscheidend war weniger die Maschine als die Nachlässigkeit im Funkverkehr – etwa täglich gleich formulierte Wetterberichte.",
  "Der britische Entschlüsselungsrechner Colossus blieb bis in die 1970er Jahre geheim. Deshalb galt jahrzehntelang der amerikanische ENIAC als erster elektronischer Computer.",
  "Die Alliierten täuschten die Landung in der Normandie unter anderem mit aufblasbaren Panzern und erfundenen Funksprüchen einer Armee, die es nicht gab.",
  "Der Feldzug gegen Japan endete für einen Soldaten erst 1974: Hiroo Onoda hielt auf den Philippinen fast dreißig Jahre lang seinen Posten, bis sein früherer Vorgesetzter ihn persönlich vom Befehl entband.",
  "Die Vereinten Nationen begannen 1945 mit 51 Mitgliedern. Heute sind es 193 – der Zuwachs ist fast vollständig die Geschichte der Entkolonialisierung.",
  "Der Marshallplan wurde auch der Sowjetunion und Osteuropa angeboten. Moskau lehnte ab und untersagte den Satellitenstaaten die Teilnahme.",
  "Auf dem Höhepunkt der Berliner Luftbrücke landete etwa alle 90 Sekunden ein Flugzeug.",
  "Der Koreakrieg ist völkerrechtlich nie beendet worden. Seit 1953 gilt lediglich ein Waffenstillstand.",
  "Der heiße Draht zwischen Washington und Moskau war nie ein rotes Telefon, sondern zunächst ein Fernschreiber – gerade weil Schriftliches weniger Missverständnisse erlaubt.",
  "Die erste Frau flog 1963 ins All, zwanzig Jahre vor der ersten Amerikanerin.",
  "Der Bordcomputer der Mondlandefähre hatte weniger Speicher als heutige einfache Geräte und meldete kurz vor der Landung Überlastungsalarm. Er war so gebaut, dass er Unwichtiges verwarf und weiterrechnete.",
  "Die Software der Apollo-Missionen leitete Margaret Hamilton. Auf sie geht auch der Begriff Software Engineering zurück.",
  "Vietnam war der erste Krieg, den Menschen abends im Wohnzimmer mitverfolgen konnten. Das veränderte die Politik mehr als jede einzelne Schlacht.",
  "Die Ölkrise brachte 1973 in Deutschland vier autofreie Sonntage – Bilder leerer Autobahnen, die bis heute zitiert werden.",
  "Der Reaktorunfall von Tschernobyl fiel im Westen zuerst in Schweden auf, als ein Kraftwerksmitarbeiter erhöhte Werte an den eigenen Schuhen maß.",
  "Beim Zerfall der Sowjetunion wurde Kasachstan über Nacht zur viertgrößten Atommacht der Welt – und gab sämtliche Waffen ab.",
  "Am 1. Januar 1983 stellte das Vorläufernetz des Internets auf das heutige Protokoll um. Manche nennen diesen Tag den Geburtstag des Internets.",
  "Die erste Website ging 1991 online und ist bis heute erreichbar. Sie erklärt, was das World Wide Web sein soll.",
  "Der Euro existierte drei Jahre als reines Buchgeld, bevor 2002 Münzen und Scheine kamen.",
  "Das Jahr-2000-Problem gilt vielen als übertrieben, weil kaum etwas passierte. Fachleute halten dagegen: Es passierte kaum etwas, weil vorher sehr viel getan wurde.",
  "Die Antarktis ist der einzige Kontinent ohne dauerhafte Wohnbevölkerung. Ein Vertrag von 1959 verbietet dort militärische Nutzung und friert alle Gebietsansprüche ein.",
  "Die Schweiz führte das Frauenwahlrecht auf Bundesebene erst 1971 ein. Im Kanton Appenzell Innerrhoden erst 1990 – nach einem Gerichtsurteil.",
  "Die Rongorongo-Schrift der Osterinsel ist bis heute nicht entziffert. Es sind nur zwei Dutzend beschriftete Objekte erhalten.",
  "Die Sahara war vor einigen Jahrtausenden grün. Felsbilder zeigen Rinderherden – und an einer Stelle Menschen, die zu schwimmen scheinen.",
  "Der sogenannte 335-jährige Krieg zwischen den Niederlanden und den Scilly-Inseln wurde 1986 formal beendet. Ein Schuss fiel nie – ob es den Kriegszustand je gab, ist umstritten.",
  "Der Nordpol war nie Land. Alle Expeditionen dorthin führten über treibendes Meereis.",
  "Zwischen der Uraufführung des ersten Tonfilms und der Mondlandung liegen 42 Jahre – zwischen der Mondlandung und heute deutlich mehr.",
  "Als Nelson Mandela ins Gefängnis kam, gab es weder Farbfernsehen in Südafrika noch das Internet. Als er herauskam, war beides selbstverständlich.",
  "Auf See war die Sanduhr bis ins 18. Jahrhundert das verlässlichste Zeitmessgerät. Erst eine Uhr, die den Seegang aushielt, machte die Längengradbestimmung möglich – John Harrison brauchte dafür über dreißig Jahre.",
  "Das Wort Ingenieur stammt vom Kriegsgerät: Ein ingeniator war im Mittelalter, wer Belagerungsmaschinen entwarf.",
  "Die frühen Streichhölzer entzündeten sich so leicht, dass sie in der Tasche Feuer fingen. Die Arbeiterinnen der Zündholzfabriken erkrankten zudem an Phosphornekrose; der Londoner Streik von 1888 machte das öffentlich.",
  "Bis ins 19. Jahrhundert war zweigeteilter Schlaf verbreitet: Quellen erwähnen einen ersten und einen zweiten Schlaf mit einer wachen Stunde dazwischen, in der gelesen, gebetet oder geredet wurde."
];
const QUOTES = [
  {"text":"Ich weiß, dass ich nichts weiß.","author":"Sokrates","year":"5. Jh. v. Chr.","note":"sinngemäß überliefert durch Platon","status":"sinngemäß"},
  {"text":"Veni, vidi, vici. (Ich kam, sah, siegte.)","author":"Julius Caesar","year":"47 v. Chr.","note":"überliefert durch Sueton","status":"belegt"},
  {"text":"Der Würfel ist gefallen.","author":"Julius Caesar","year":"49 v. Chr.","note":"beim Überschreiten des Rubikon","status":"belegt"},
  {"text":"Du hast Macht über deinen Geist, nicht über äußere Ereignisse.","author":"Marc Aurel","year":"2. Jh. n. Chr.","note":"aus den 'Selbstbetrachtungen'","status":"belegt"},
  {"text":"Der Weg ist das Ziel.","author":"Konfuzius (fälschlich)","year":"","note":"In keinem konfuzianischen Text belegt. Die Wendung ist im deutschen Sprachraum entstanden und wurde Konfuzius nachträglich untergeschoben.","status":"falsch zugeschrieben"},
  {"text":"Hier stehe ich, ich kann nicht anders.","author":"Martin Luther","year":"1521","note":"Die Worte fehlen in den frühesten Mitschriften des Reichstags zu Worms und erscheinen erst im späteren Druck.","status":"zugeschrieben"},
  {"text":"Ich weiß, ich habe den Körper einer schwachen Frau, aber das Herz und den Mut eines Königs.","author":"Elisabeth I.","year":"1588","note":"Rede von Tilbury","status":"belegt"},
  {"text":"Der Staat bin ich.","author":"Ludwig XIV.","year":"","note":"Apokryph, erst lange nach seinem Tod überliefert. Bezeugt ist eher das Gegenteil: Auf dem Sterbebett soll er gesagt haben, er gehe – der Staat bleibe.","status":"zugeschrieben"},
  {"text":"Und sie bewegt sich doch!","author":"Galileo Galilei","year":"1633","note":"Erstmals 1757 überliefert, 124 Jahre nach dem Prozess. Vor Zeugen hätte der Satz Galilei das Leben kosten können.","status":"zugeschrieben"},
  {"text":"Ich missbillige, was du sagst, doch ich würde mein Leben dafür geben, dass du es sagen darfst.","author":"Evelyn Beatrice Hall über Voltaire","year":"1906","note":"Nicht von Voltaire, sondern 1906 von seiner Biografin Evelyn Beatrice Hall als Zusammenfassung seiner Haltung formuliert – und seither ihm in den Mund gelegt.","status":"falsch zugeschrieben"},
  {"text":"Government of the people, by the people, for the people.","author":"Abraham Lincoln","year":"1863","note":"Gettysburg Address","status":"belegt"},
  {"text":"Blut und Eisen.","author":"Otto von Bismarck","year":"1862","note":"Rede vor dem preußischen Abgeordnetenhaus","status":"belegt"},
  {"text":"Proletarier aller Länder, vereinigt euch!","author":"Karl Marx & Friedrich Engels","year":"1848","note":"Schlusssatz des Kommunistischen Manifests","status":"belegt"},
  {"text":"Blut, Schweiß und Tränen.","author":"Winston Churchill","year":"1940","note":"Churchill sagte am 13. Mai 1940 'Blut, Mühsal, Tränen und Schweiß'. Die verkürzte Fassung setzte sich durch, weil ein Verlag 1941 eine Redensammlung so betitelte.","status":"falsch zitiert"},
  {"text":"Das Einzige, wovor wir uns fürchten müssen, ist die Furcht selbst.","author":"Franklin D. Roosevelt","year":"1933","note":"Antrittsrede","status":"belegt"},
  {"text":"Frage nicht, was dein Land für dich tun kann – frage, was du für dein Land tun kannst.","author":"John F. Kennedy","year":"1961","note":"Antrittsrede","status":"belegt"},
  {"text":"I have a dream.","author":"Martin Luther King Jr.","year":"1963","note":"Rede beim Marsch auf Washington","status":"belegt"},
  {"text":"Es scheint immer unmöglich, bis es vollbracht ist.","author":"Nelson Mandela","year":"","note":"","status":"belegt"},
  {"text":"Sei du selbst die Veränderung, die du dir wünschst für diese Welt.","author":"Mahatma Gandhi (zugeschrieben)","year":"","note":"Gandhi schrieb Ähnliches, aber deutlich umständlicher. Der griffige Wortlaut stammt aus späteren amerikanischen Zusammenfassungen.","status":"falsch zitiert"},
  {"text":"Es gibt nichts Unmögliches für den, der es versucht.","author":"Alexander der Große (fälschlich)","year":"","note":"","note":"In keiner antiken Quelle belegt. Der Satz stammt aus moderner Motivationsliteratur.","status":"falsch zugeschrieben"},
  {"text":"Wir werden entweder einen Weg finden oder einen bauen.","author":"Hannibal (fälschlich)","year":"vor der Alpenüberquerung","note":"Weder bei Polybios noch bei Livius belegt. Der Satz taucht erst im 19. Jahrhundert auf.","status":"falsch zugeschrieben"},
  {"text":"Eureka!","author":"Archimedes (zugeschrieben)","year":"3. Jh. v. Chr.","note":"Erst von Vitruv rund zwei Jahrhunderte später erzählt. Archimedes selbst erwähnt die Szene nirgends.","status":"zugeschrieben"},
  {"text":"Wir nennen unsere Stadt die Schule von Hellas.","author":"Perikles","year":"5. Jh. v. Chr.","note":"sinngemäß, Thukydides' Grabrede","status":"sinngemäß"},
  {"text":"Der Mensch ist von Natur aus ein politisches Wesen.","author":"Aristoteles","year":"4. Jh. v. Chr.","note":"aus der 'Politik'","status":"belegt"},
  {"text":"Geh mir aus der Sonne.","author":"Diogenes","year":"4. Jh. v. Chr.","note":"zu Alexander dem Großen gesagt","status":"belegt"},
  {"text":"Das Leben ist kurz, die Kunst lang.","author":"Hippokrates","year":"5./4. Jh. v. Chr.","note":"","status":"belegt"},
  {"text":"Im Krieg ist die Wahrheit das erste Opfer.","author":"Unbekannt (oft Aischylos zugeschrieben)","year":"5. Jh. v. Chr.","note":"Bei Aischylos nicht belegt. Nachweisbar ist der Gedanke erst im 20. Jahrhundert, oft dem US-Senator Hiram Johnson zugeschrieben – auch das ungesichert.","status":"falsch zugeschrieben"},
  {"text":"Carpe diem – nutze den Tag.","author":"Horaz","year":"1. Jh. v. Chr.","note":"aus den Oden","status":"belegt"},
  {"text":"Ich sehe das Bessere und billige es, doch ich folge dem Schlechteren.","author":"Ovid","year":"1. Jh. v./n. Chr.","note":"aus den Metamorphosen","status":"belegt"},
  {"text":"Sie schaffen eine Wüste und nennen es Frieden.","author":"Tacitus (Rede eines Britanniers)","year":"1./2. Jh. n. Chr.","note":"aus 'Agricola'","status":"belegt"},
  {"text":"Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.","author":"Laozi","year":"","note":"sinngemäß aus dem Daodejing","status":"sinngemäß"},
  {"text":"Kenne deinen Feind und kenne dich selbst.","author":"Sunzi","year":"","note":"aus der 'Kunst des Krieges'","status":"belegt"},
  {"text":"Gott will es!","author":"Papst Urban II. (überliefert)","year":"1095","note":"Aufruf zum Ersten Kreuzzug","status":"belegt"},
  {"text":"Ich fürchte, wenn ich einmal tot bin, wird kein Erbe wie ich sein.","author":"Saladin (zugeschrieben)","year":"12. Jh.","note":"","status":"zugeschrieben"},
  {"text":"Ich habe nicht einmal die Hälfte dessen erzählt, was ich gesehen habe.","author":"Marco Polo (zugeschrieben)","year":"auf dem Sterbebett","note":"","status":"zugeschrieben"},
  {"text":"Ich fürchte nichts, denn Gott ist mit mir.","author":"Jeanne d'Arc","year":"1431","note":"aus den Prozessprotokollen","status":"belegt"},
  {"text":"Lasst, die ihr eintretet, alle Hoffnung fahren.","author":"Dante Alighieri","year":"14. Jh.","note":"aus dem 'Inferno'","status":"belegt"},
  {"text":"Ich sterbe als des Königs guter Diener, aber zuerst Gottes.","author":"Thomas Morus","year":"1535","note":"vor seiner Hinrichtung überliefert","status":"belegt"},
  {"text":"Es ist besser, gefürchtet als geliebt zu werden, wenn man nicht beides haben kann.","author":"Niccolò Machiavelli","year":"1532","note":"sinngemäß, aus 'Der Fürst'","status":"sinngemäß"},
  {"text":"Wissen ist Macht.","author":"Francis Bacon (zugeschrieben)","year":"17. Jh.","note":"Bacon schrieb 1597 'ipsa scientia potestas est'. Die geläufige Kurzform 'scientia potentia est' steht erst 1668 bei Thomas Hobbes, der als junger Mann Bacons Sekretär war.","status":"falsch zitiert"},
  {"text":"Ich denke, also bin ich.","author":"René Descartes","year":"1637","note":"Cogito ergo sum","status":"belegt"},
  {"text":"Das Herz hat seine Gründe, die die Vernunft nicht kennt.","author":"Blaise Pascal","year":"17. Jh.","note":"aus den 'Pensées'","status":"belegt"},
  {"text":"Nichts ist sicher außer dem Tod und den Steuern.","author":"Benjamin Franklin (zugeschrieben)","year":"1789","note":"","status":"zugeschrieben"},
  {"text":"Jeder soll nach seiner Façon selig werden.","author":"Friedrich der Große","year":"1740","note":"Randnotiz zur Religionsfreiheit","status":"belegt"},
  {"text":"Ich werde herrschen oder sterben.","author":"Katharina die Große (zugeschrieben)","year":"18. Jh.","note":"","status":"zugeschrieben"},
  {"text":"Alle Menschen sind gleich geschaffen.","author":"Thomas Jefferson","year":"1776","note":"aus der US-Unabhängigkeitserklärung","status":"belegt"},
  {"text":"Kühnheit, immer wieder Kühnheit!","author":"Georges Danton (zugeschrieben)","year":"1792","note":"Rede vor dem Nationalkonvent","status":"zugeschrieben"},
  {"text":"Der Schrecken ist nichts anderes als die Gerechtigkeit, schnell, streng, unbeugsam.","author":"Maximilien Robespierre","year":"1794","note":"sinngemäß","status":"sinngemäß"},
  {"text":"Verzeihung, mein Herr, ich wollte es nicht.","author":"Marie Antoinette","year":"1793","note":"letzte überlieferte Worte, zu ihrem Henker","status":"belegt"},
  {"text":"Ein Führer ist ein Händler der Hoffnung.","author":"Napoleon Bonaparte (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Die Geschichte ist eine Ansammlung von Lügen, auf die man sich geeinigt hat.","author":"Napoleon Bonaparte (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Die Politik ist die Lehre vom Möglichen.","author":"Otto von Bismarck","year":"1867","note":"","status":"belegt"},
  {"text":"Man kann alles mit Bajonetten machen, nur nicht auf ihnen sitzen.","author":"Otto von Bismarck (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Man kann nicht alle Menschen für immer täuschen.","author":"Abraham Lincoln (zugeschrieben)","year":"","note":"Erstmals um 1905 belegt, vierzig Jahre nach Lincolns Tod. Kein zeitgenössischer Nachweis.","status":"zugeschrieben"},
  {"text":"Mit Bosheit gegen niemanden, mit Nächstenliebe für alle.","author":"Abraham Lincoln","year":"1865","note":"zweite Antrittsrede","status":"belegt"},
  {"text":"Die Philosophen haben die Welt nur verschieden interpretiert; es kommt aber darauf an, sie zu verändern.","author":"Karl Marx","year":"1845","note":"aus den Feuerbach-Thesen","status":"belegt"},
  {"text":"Wir sind nicht amüsiert.","author":"Königin Victoria (fälschlich)","year":"19. Jh.","note":"Zeitgenössisch nicht belegt. Ihre Urenkelin bestritt die Geschichte ausdrücklich.","status":"falsch zugeschrieben"},
  {"text":"Ich biete weder Sold noch Quartier, ich biete Hunger, Durst, Gewaltmärsche, Schlachten und Tod.","author":"Giuseppe Garibaldi (zugeschrieben)","year":"1849","note":"","status":"zugeschrieben"},
  {"text":"Es gibt keine wirkliche Freiheit ohne wirtschaftliche Unabhängigkeit.","author":"Susan B. Anthony","year":"19. Jh.","note":"","status":"belegt"},
  {"text":"Vertrauen ist gut, Kontrolle ist besser.","author":"Wladimir Lenin (fälschlich)","year":"","note":"","note":"In Lenins Werken nicht auffindbar. Er benutzte das russische Sprichwort 'Vertraue, aber prüfe nach' – die deutsche Zuspitzung stammt nicht von ihm.","status":"falsch zugeschrieben"},
  {"text":"Du magst dich nicht für den Krieg interessieren, aber der Krieg interessiert sich für dich.","author":"Leo Trotzki (fälschlich)","year":"","note":"","note":"In Trotzkis Schriften nicht nachweisbar.","status":"falsch zugeschrieben"},
  {"text":"Ein Auge um Auge macht am Ende die ganze Welt blind.","author":"Mahatma Gandhi (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Phantasie ist wichtiger als Wissen.","author":"Albert Einstein","year":"1929","note":"aus einem Interview","status":"belegt"},
  {"text":"Zwei Dinge sind unendlich: das Universum und die menschliche Dummheit.","author":"Albert Einstein (fälschlich)","year":"","note":"","note":"In Einsteins Schriften, Briefen und Interviews nicht belegt. Eine der meistverbreiteten Falschzuschreibungen überhaupt.","status":"falsch zugeschrieben"},
  {"text":"Wir werden niemals aufgeben.","author":"Winston Churchill","year":"1940","note":"Rede vor dem Unterhaus","status":"belegt"},
  {"text":"Ein Pessimist sieht die Schwierigkeit in jeder Gelegenheit, ein Optimist die Gelegenheit in jeder Schwierigkeit.","author":"Winston Churchill (fälschlich)","year":"","note":"Zu Churchills Lebzeiten nicht belegt.","status":"falsch zugeschrieben"},
  {"text":"Ein Datum, das in Schande weiterleben wird.","author":"Franklin D. Roosevelt","year":"1941","note":"Rede zum Kriegseintritt","status":"belegt"},
  {"text":"Politische Macht kommt aus den Gewehrläufen.","author":"Mao Zedong","year":"1938","note":"sinngemäß","status":"sinngemäß"},
  {"text":"Nichts ist kostbarer als Unabhängigkeit und Freiheit.","author":"Ho Chi Minh (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Wir müssen hart sein, ohne unsere Zärtlichkeit je zu verlieren.","author":"Che Guevara (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Bildung ist die mächtigste Waffe, um die Welt zu verändern.","author":"Nelson Mandela","year":"","note":"","status":"belegt"},
  {"text":"Ich bin bereit zu sterben.","author":"Nelson Mandela","year":"1964","note":"aus seiner Verteidigungsrede im Rivonia-Prozess","status":"belegt"},
  {"text":"Ich bin ein Berliner.","author":"John F. Kennedy","year":"1963","note":"Rede vor dem Rathaus Schöneberg","status":"belegt"},
  {"text":"Ungerechtigkeit irgendwo ist eine Bedrohung für Gerechtigkeit überall.","author":"Martin Luther King Jr.","year":"1963","note":"Brief aus dem Gefängnis von Birmingham","status":"belegt"},
  {"text":"Bildung ist der Reisepass in die Zukunft.","author":"Malcolm X (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Wir können den Arabern vergeben, unsere Kinder zu töten. Wir können ihnen nicht vergeben, uns zu zwingen, ihre Kinder zu töten.","author":"Golda Meir (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Vergebung ist eine Tugend der Tapferen.","author":"Indira Gandhi (zugeschrieben)","year":"","note":"","status":"zugeschrieben"},
  {"text":"Die Dame ist nicht zum Wenden bereit.","author":"Margaret Thatcher","year":"1980","note":"Parteitagsrede","status":"belegt"},
  {"text":"Herr Gorbatschow, reißen Sie diese Mauer nieder!","author":"Ronald Reagan","year":"1987","note":"Rede am Brandenburger Tor","status":"belegt"},
  {"text":"Wer zu spät kommt, den bestraft das Leben.","author":"Michail Gorbatschow (zugeschrieben)","year":"1989","note":"","note":"Gorbatschow sagte in Berlin sinngemäß, Gefahren warteten nur auf jene, die nicht auf das Leben reagieren. Die griffige Fassung formulierten deutsche Agenturjournalisten – Gorbatschow übernahm sie später selbst in seine Memoiren.","status":"falsch zitiert"},
  {"text":"Intelligenz ist die Fähigkeit, sich an Veränderungen anzupassen.","author":"Stephen Hawking (fälschlich)","year":"","note":"","note":"In Hawkings Büchern und Vorträgen nicht belegt.","status":"falsch zugeschrieben"},
  {"text":"Wähle einen Beruf, den du liebst, und du wirst nie wieder in deinem Leben arbeiten müssen.","author":"Konfuzius (fälschlich)","year":"","note":"In den Analekten nicht enthalten. Der Satz ist modern und amerikanischen Ursprungs.","status":"falsch zugeschrieben"},
  {"text":"Wer andere kennt, ist klug. Wer sich selbst kennt, ist erleuchtet.","author":"Laozi (zugeschrieben)","year":"","note":"sinngemäß aus dem Daodejing","status":"zugeschrieben"},
  {"text":"Der Edle ist gerecht, der Kleine denkt nur an Vorteil.","author":"Konfuzius","year":"","note":"sinngemäß, aus den Analekten","status":"sinngemäß"},
  {"text":"Sage mir, mit wem du umgehst, und ich sage dir, wer du bist.","author":"Sprichwort (oft antiken Autoren zugeschrieben)","year":"","note":"Herkunft unsicher","status":"Sprichwort"},
  {"text":"Rom wurde nicht an einem Tag erbaut.","author":"Mittelalterliches Sprichwort","year":"12. Jh.","note":"französischen Ursprungs","status":"Sprichwort"},
  {"text":"Der Zweck heiligt die Mittel.","author":"Unbekannt (oft Machiavelli zugeschrieben)","year":"","note":"So wörtlich in keiner Schrift Machiavellis. Er argumentiert differenzierter, als die Formel nahelegt.","status":"falsch zugeschrieben"},
  {"text":"Einigkeit macht stark.","author":"Äsop (zugeschrieben)","year":"Antike","note":"aus der Fabel vom Bündel Stäbe","status":"zugeschrieben"},
  {"text":"Wer den Krieg nicht kennt, kennt den Frieden nicht.","author":"Sunzi (fälschlich)","year":"","note":"","note":"In der 'Kunst des Krieges' nicht enthalten.","status":"falsch zugeschrieben"},
  {"text":"Ein Reich, das gegen sich selbst gespalten ist, kann nicht bestehen.","author":"Abraham Lincoln","year":"1858","note":"'House Divided'-Rede, in Anlehnung an ein Bibelzitat","status":"belegt"},
  {"text":"Die Zukunft gehört denen, die an die Schönheit ihrer Träume glauben.","author":"Eleanor Roosevelt (fälschlich)","year":"","note":"Zu Eleanor Roosevelts Lebzeiten nicht belegt.","status":"falsch zugeschrieben"},
  {"text":"Wo man Bücher verbrennt, verbrennt man am Ende auch Menschen.","author":"Heinrich Heine","year":"1821","note":"aus 'Almansor', prophetisch mit Blick auf spätere NS-Bücherverbrennungen zitiert","status":"belegt"},
  {"text":"Der Mensch ist zur Freiheit verurteilt.","author":"Jean-Paul Sartre","year":"20. Jh.","note":"sinngemäß, existenzialistische Kernthese","status":"sinngemäß"},
  {"text":"Wissen ohne Gewissen ist nur ein Ruin der Seele.","author":"François Rabelais (zugeschrieben)","year":"16. Jh.","note":"","status":"zugeschrieben"},
  {"text":"Der Mutige stirbt nur einmal, der Feige stirbt tausend Tode.","author":"Sprichwort, teils William Shakespeare zugeschrieben","year":"","note":"sinngemäß aus 'Julius Caesar'","status":"Sprichwort"},
  {"text":"Sein oder Nichtsein, das ist hier die Frage.","author":"William Shakespeare","year":"ca. 1600","note":"aus 'Hamlet'","status":"belegt"},
  {"text":"Panem et circenses – Brot und Spiele.","author":"Juvenal","year":"1./2. Jh. n. Chr.","note":"römische Gesellschaftskritik","status":"belegt"},
  {"text":"Wer die Vergangenheit nicht kennt, kann die Gegenwart nicht verstehen.","author":"Sprichwort, oft Historikern zugeschrieben","year":"","note":"sinngemäße Redewendung","status":"Sprichwort"},
  {"text":"Nicht zu wissen, was vor deiner Geburt geschah, heißt, immer ein Kind zu bleiben.","author":"Marcus Tullius Cicero","year":"46 v. Chr.","note":"aus 'Orator'","status":"belegt"},
  {"text":"Ich habe keinen besonderen Zeitpunkt gewählt. Ich wurde gewählt.","author":"Rosa Parks","year":"1955","note":"sinngemäß, zu ihrer Weigerung, den Sitzplatz zu räumen","status":"sinngemäß"},
  {"text":"Der Mensch ist frei geboren, und überall liegt er in Ketten.","author":"Jean-Jacques Rousseau","year":"1762","note":"Eröffnungssatz des 'Gesellschaftsvertrags'","status":"belegt"},
  {"text":"Habe Mut, dich deines eigenen Verstandes zu bedienen.","author":"Immanuel Kant","year":"1784","note":"Wahlspruch der Aufklärung, nach Horaz' sapere aude","status":"belegt"},
  {"text":"Ein kleiner Schritt für einen Menschen, ein riesiger Sprung für die Menschheit.","author":"Neil Armstrong","year":"1969","note":"Armstrong sagte, er habe 'a man' gesagt; auf der Aufnahme ist das 'a' nicht zu hören","status":"belegt"},
  {"text":"Wir wollen ein Volk von Brüdern sein.","author":"Friedrich Schiller","year":"1804","note":"aus 'Wilhelm Tell'","status":"belegt"}
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
  {"year":1757,"name":"Schlacht bei Plassey","war":"Britische Expansion in Indien","text":"Ein vergleichsweise kleines Gefecht mit gewaltigen Folgen: Die Ostindien-Kompanie wird zur Territorialmacht in Bengalen."},
  {"year":1781,"name":"Belagerung von Yorktown","war":"Amerikanischer Unabhängigkeitskrieg","text":"Die Kapitulation der Briten entscheidet den Krieg – ermöglicht durch die französische Flotte, ohne die der Sieg nicht denkbar gewesen wäre."},
  {"year":1863,"name":"Schlacht von Gettysburg","war":"Amerikanischer Bürgerkrieg","text":"Die verlustreichste Schlacht des Krieges beendet den Vorstoß der Konföderierten nach Norden."},
  {"year":1916,"name":"Skagerrakschlacht","war":"Erster Weltkrieg","text":"Die größte Seeschlacht des Krieges endet taktisch unentschieden, strategisch zugunsten Großbritanniens: Die deutsche Hochseeflotte bleibt danach weitgehend im Hafen."},
  {"year":1940,"name":"Luftschlacht um England","war":"Zweiter Weltkrieg","text":"Die erste allein in der Luft entschiedene Schlacht der Geschichte verhindert eine deutsche Invasion."},
  {"year":1954,"name":"Dien Bien Phu","war":"Indochinakrieg","text":"Die Niederlage beendet die französische Kolonialherrschaft in Indochina – und zeigt, dass gut organisierte Unabhängigkeitsbewegungen europäische Armeen schlagen können."},
  {"year":-1046,"name":"Schlacht bei Muye","war":"Sturz der Shang-Dynastie","text":"Die Zhou besiegen die Shang und begründen ihre Herrschaft mit dem Mandat des Himmels: Wer schlecht regiert, verliert das Recht darauf. Diese Formel legitimiert und begrenzt chinesische Herrschaft für die nächsten drei Jahrtausende."},
  {"year":-371,"name":"Schlacht bei Leuktra","war":"Böotischer Krieg","text":"Epaminondas verstärkt bewusst einen Flügel statt gleichmäßig aufzustellen – die erste überlieferte Schwerpunktbildung. Spartas Ruf der Unbesiegbarkeit endet an einem Nachmittag."},
  {"year":1192,"name":"Zweite Schlacht bei Tarain","war":"Ghuridische Eroberung Nordindiens","text":"Muhammad von Ghur besiegt Prithviraj Chauhan. Damit beginnt eine mehrere Jahrhunderte währende muslimische Herrschaft in Nordindien, aus der das Sultanat von Delhi hervorgeht."},
  {"year":1526,"name":"Erste Schlacht bei Panipat","war":"Gründung des Mogulreichs","text":"Babur schlägt ein weit überlegenes Heer, weil er Feldartillerie und Handfeuerwaffen einsetzt und seine Wagenburg die Elefanten scheuen lässt. Aus dem Sieg entsteht das Mogulreich."},
  {"year":1592,"name":"Seeschlacht bei Hansando","war":"Imjin-Krieg","text":"Admiral Yi Sun-sin lockt die japanische Flotte in eine Kranichformation und vernichtet sie. Weil Japans Nachschub übers Meer lief, entschied die See den Landkrieg."},
  {"year":1600,"name":"Schlacht von Sekigahara","war":"Japanische Reichseinigung","text":"Der Seitenwechsel eines einzigen Fürsten entscheidet die Schlacht. Tokugawa Ieyasu begründet ein Shogunat, das Japan 250 Jahre lang Frieden und Abschottung bringt."},
  {"year":1879,"name":"Schlacht bei Isandlwana","war":"Zulukrieg","text":"Eine Zulu-Armee vernichtet eine britische Kolonne mit Gewehren. Der Schock im viktorianischen England war groß – und führte zu einer umso härteren Kriegführung in den Monaten danach."},
  {"year":1896,"name":"Schlacht von Adwa","war":"Italienisch-Äthiopischer Krieg","text":"Menelik II. schlägt die italienische Invasionsarmee vernichtend. Äthiopien bleibt als einziger afrikanischer Staat unkolonisiert; der Sieg wird weltweit zum Bezugspunkt antikolonialer Bewegungen."},
  {"year":1898,"name":"Schlacht von Omdurman","war":"Mahdi-Aufstand im Sudan","text":"Maxim-Maschinengewehre und Artillerie töten Tausende, während die britischen Verluste im niedrigen dreistelligen Bereich bleiben. Kein anderes Gefecht zeigt das technische Gefälle der Hochphase des Imperialismus so deutlich."},
  {"year":1920,"name":"Schlacht bei Warschau","war":"Polnisch-Sowjetischer Krieg","text":"Eine polnische Flankenoperation stoppt den sowjetischen Vormarsch nach Westen. Lenins Plan, die Revolution nach Deutschland zu tragen, scheitert hier."},
  {"year":1937,"name":"Schlacht um Shanghai","war":"Zweiter Japanisch-Chinesischer Krieg","text":"Drei Monate Häuserkampf mit Hunderttausenden Opfern. Chinas Widerstand zerstört die japanische Erwartung eines kurzen Feldzugs – und band bis 1945 den Großteil der japanischen Landstreitkräfte."},
  {"year":1939,"name":"Schlacht am Chalchyn Gol","war":"Japanisch-Sowjetischer Grenzkonflikt","text":"Schukow schlägt die japanische Armee in der Mongolei. Die Niederlage ist ein Grund, warum Japan 1941 nach Süden gegen die USA zog statt nach Norden gegen die Sowjetunion – mit Folgen für den gesamten Kriegsverlauf."},
  {"year":1941,"name":"Schlacht um Moskau","war":"Zweiter Weltkrieg","text":"Der erste Halt der Wehrmacht und das Ende des Blitzkriegskonzepts. Sowjetische Reserven aus Sibirien konnten verlegt werden, weil ein Spionagebericht meldete, dass Japan nicht angreifen würde."},
  {"year":1944,"name":"Imphal und Kohima","war":"Burmafeldzug","text":"Die japanische Offensive nach Indien bricht am Nachschub zusammen; ein großer Teil der Verluste geht auf Hunger und Krankheit zurück. Der Feldzug gilt in Britannien als vergessene Front, obwohl indische Truppen ihn entschieden."},
  {"year":1945,"name":"Schlacht um Okinawa","war":"Zweiter Weltkrieg","text":"Fast drei Monate Kampf mit über 100.000 toten Zivilisten. Die Verlustzahlen flossen unmittelbar in die amerikanische Abwägung über den Einsatz der Atombombe ein."},
  {"year":1950,"name":"Landung bei Incheon","war":"Koreakrieg","text":"MacArthurs riskante Landung im Rücken der nordkoreanischen Armee dreht den Krieg binnen Tagen – und führt zu einer Überdehnung, die kurz darauf Chinas Eingreifen provoziert."},
  {"year":1968,"name":"Tet-Offensive","war":"Vietnamkrieg","text":"Militärisch eine Niederlage für Nordvietnam, politisch der Wendepunkt: Die Bilder widerlegen die amerikanische Darstellung, der Krieg sei so gut wie gewonnen. Ein Lehrstück darüber, dass Kriege auch zu Hause entschieden werden."},
  {"year":1973,"name":"Panzerschlachten auf dem Sinai","war":"Jom-Kippur-Krieg","text":"Der ägyptische Überraschungsangriff über den Suezkanal gelingt zunächst; israelische Panzer erleiden schwere Verluste durch Lenkraketen. Die Schlacht zeigte erstmals, wie sehr Präzisionswaffen das Gefecht verändern."}
];

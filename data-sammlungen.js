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
 {
  "year": -1457,
  "name": "Schlacht bei Megiddo",
  "war": "Ägyptische Expansion",
  "text": "Thutmosis III. besiegt ein kanaanitisches Bündnis – eine der ältesten in Detail überlieferten Schlachten der Geschichte.",
  "ort": "Megiddo, Kanaan",
  "parteien": [
   {
    "name": "Ägypten",
    "fuehrer": "Thutmosis III.",
    "staerke": "ca. 10.000–20.000",
    "verluste": "gering, keine Zahlen überliefert"
   },
   {
    "name": "Koalition kanaanäischer Stadtstaaten",
    "fuehrer": "Der Fürst von Kadesch",
    "staerke": "ca. 10.000–15.000",
    "verluste": "83 Tote, 340 Gefangene laut ägyptischer Zählung"
   }
  ],
  "ausgang": "Ägyptischer Sieg im Feld. Weil die Truppen sofort zu plündern begannen, entkam die Koalition in die Stadt – es folgte eine siebenmonatige Belagerung.",
  "folgen": "Ägypten beherrschte Kanaan für Jahrhunderte. Beute laut Annalen: 924 Streitwagen, 2.238 Pferde, über 200 Rüstungen.",
  "hinweis": "Die Angaben stammen aus den in Karnak eingemeißelten Annalen des Feldschreibers Tjaneni – die erste Schlacht der Geschichte, für die ein detaillierter Bericht existiert. Er ist Siegespropaganda, aber ungewöhnlich nüchtern in den Zahlen."
 },
 {
  "year": -1274,
  "name": "Schlacht bei Kadesch",
  "war": "Ägyptisch-Hethitische Kriege",
  "text": "Ramses II. und der Hethiterkönig Muwatalli II. kämpfen unentschieden – und schließen darauf den ersten überlieferten schriftlichen Friedensvertrag der Geschichte.",
  "ort": "am Orontes, heutiges Syrien",
  "parteien": [
   {
    "name": "Ägypten",
    "fuehrer": "Ramses II.",
    "staerke": "ca. 20.000 Mann, 2.000 Streitwagen",
    "verluste": "nicht überliefert"
   },
   {
    "name": "Hethiterreich",
    "fuehrer": "Muwatalli II.",
    "staerke": "ca. 23.000–40.000 Mann, 2.500–3.700 Streitwagen",
    "verluste": "nicht überliefert"
   }
  ],
  "ausgang": "Unentschieden. Ramses geriet durch falsche Aufklärung in einen Hinterhalt und entkam knapp; keine Seite konnte die andere schlagen.",
  "folgen": "Die größte Streitwagenschlacht der Geschichte endete ergebnislos. Sechzehn Jahre später schlossen beide Reiche den ältesten erhaltenen Friedensvertrag der Welt – eine Abschrift hängt heute im UN-Hauptquartier.",
  "hinweis": "Ramses ließ die Schlacht an mindestens fünf Tempeln als überwältigenden Sieg darstellen. Erst die 1906 gefundenen hethitischen Tontafeln zeigten, dass Kadesch hethitisch blieb.",
  "vertiefung": "pharao-ramses2"
 },
 {
  "year": -1046,
  "name": "Schlacht bei Muye",
  "war": "Sturz der Shang-Dynastie",
  "text": "Die Zhou besiegen die Shang und begründen ihre Herrschaft mit dem Mandat des Himmels: Wer schlecht regiert, verliert das Recht darauf. Diese Formel legitimiert und begrenzt chinesische Herrschaft für die nächsten drei Jahrtausende.",
  "ort": "bei Muye, nördlich von Zhaoge",
  "parteien": [
   {
    "name": "Zhou und verbündete Stämme",
    "fuehrer": "König Wu von Zhou",
    "staerke": "45.000 laut Überlieferung",
    "verluste": "gering"
   },
   {
    "name": "Shang-Dynastie",
    "fuehrer": "König Di Xin",
    "staerke": "700.000 laut Überlieferung",
    "verluste": "hoch; große Teile liefen über"
   }
  ],
  "ausgang": "Vollständiger Sieg der Zhou. Di Xin verbrannte sich in seinem Palast.",
  "folgen": "Ende der Shang nach über 500 Jahren. Die Zhou begründeten das Himmelsmandat – die Lehre, dass Herrschaft an gerechtes Regieren gebunden ist und verwirkt werden kann. Dieser Gedanke rechtfertigte in China jeden Dynastiewechsel bis 1911.",
  "hinweis": "Die 700.000 Shang-Soldaten sind sicher erfunden; die Quellen entstanden Jahrhunderte später und dienten der Rechtfertigung des Umsturzes. Selbst das Jahr ist umstritten – Vorschläge reichen von 1122 bis 1027 v. Chr."
 },
 {
  "year": -490,
  "name": "Schlacht bei Marathon",
  "war": "Perserkriege",
  "text": "Athenische Hopliten schlagen ein zahlenmäßig überlegenes persisches Heer – prägt bis heute den Begriff 'Marathon'.",
  "ort": "Ebene von Marathon, Attika",
  "parteien": [
   {
    "name": "Athen und Plataiai",
    "fuehrer": "Miltiades",
    "staerke": "ca. 10.000 Hopliten",
    "verluste": "192 Athener, 11 Plataier"
   },
   {
    "name": "Perserreich",
    "fuehrer": "Datis und Artaphernes",
    "staerke": "ca. 25.000, Herodot deutlich mehr",
    "verluste": "6.400 laut Herodot"
   }
  ],
  "ausgang": "Athenischer Sieg. Miltiades verstärkte die Flügel und ließ die Mitte bewusst dünn – die Perser brachen dort durch und wurden von beiden Seiten eingeschlossen.",
  "folgen": "Der erste persische Feldzug gegen Griechenland scheiterte. Athen gewann ein Selbstbewusstsein, das die folgenden fünfzig Jahre trug – Marathon wurde zum Gründungsmythos der Demokratie.",
  "hinweis": "Das Verhältnis 192 zu 6.400 stammt von Herodot und ist auffällig günstig. Der Läufer, der die Nachricht nach Athen brachte und starb, taucht erst 500 Jahre später bei Plutarch auf; Herodot kennt ihn nicht."
 },
 {
  "year": -480,
  "name": "Schlacht bei den Thermopylen",
  "war": "Perserkriege",
  "text": "Eine kleine griechische Streitmacht unter dem Spartanerkönig Leonidas hält ein riesiges Perserheer tagelang auf, bevor sie aufgerieben wird.",
  "ort": "Engpass der Thermopylen, Mittelgriechenland",
  "parteien": [
   {
    "name": "Griechischer Bund",
    "fuehrer": "Leonidas I. von Sparta",
    "staerke": "ca. 7.000, am letzten Tag noch ca. 1.500",
    "verluste": "ca. 4.000, darunter 300 Spartiaten"
   },
   {
    "name": "Perserreich",
    "fuehrer": "Xerxes I.",
    "staerke": "moderne Schätzung 70.000–300.000",
    "verluste": "ca. 20.000 laut Herodot"
   }
  ],
  "ausgang": "Persischer Sieg. Ein Einheimischer namens Ephialtes zeigte den Persern einen Bergpfad; Leonidas blieb mit einer Nachhut zurück und fiel.",
  "folgen": "Der Weg nach Athen war frei, die Stadt wurde geräumt und niedergebrannt. Der Aufschub verschaffte den Griechen jedoch Zeit – wenige Wochen später entschied die Seeschlacht von Salamis den Feldzug.",
  "hinweis": "Herodots 2,6 Millionen Perser sind logistisch unmöglich; moderne Schätzungen liegen ein bis zwei Größenordnungen darunter. Die 300 Spartaner kämpften nicht allein: Thespier und Thebaner blieben ebenfalls."
 },
 {
  "year": -480,
  "name": "Seeschlacht von Salamis",
  "war": "Perserkriege",
  "ort": "Meerenge von Salamis bei Athen",
  "text": "Die entscheidende Schlacht der Perserkriege. Themistokles lockte die überlegene persische Flotte in eine Meerenge, in der ihre Zahl zum Nachteil wurde.",
  "parteien": [
   {
    "name": "Griechischer Bund",
    "fuehrer": "Themistokles und Eurybiades",
    "staerke": "ca. 370 Trieren",
    "verluste": "ca. 40 Schiffe"
   },
   {
    "name": "Perserreich",
    "fuehrer": "Xerxes I., Flotte unter Ariabignes",
    "staerke": "ca. 600–800 Trieren",
    "verluste": "ca. 200–300 Schiffe"
   }
  ],
  "ausgang": "Griechischer Sieg. In der engen Meerenge konnte die persische Flotte ihre Zahl nicht entfalten; die schwereren griechischen Schiffe rammten die dicht gedrängten Gegner.",
  "folgen": "Xerxes zog mit dem Großteil des Heeres ab; ein Jahr später endete der Feldzug bei Plataiai endgültig. Athen wurde zur Seemacht und Vormacht eines Bündnisses, aus dem sein Reich entstand – und mit ihm die Blütezeit von Demokratie, Tragödie und Philosophie.",
  "hinweis": "Themistokles soll Xerxes durch einen falschen Überläufer zur Schlacht in der Meerenge verleitet haben. Die Geschichte stammt von Herodot und ist nicht unabhängig belegt.",
  "vertiefung": "athener-demokratie"
 },
 {
  "year": -479,
  "name": "Schlacht bei Plataiai",
  "war": "Perserkriege",
  "ort": "bei Plataiai in Böotien",
  "text": "Die größte Landschlacht der Perserkriege beendete den persischen Versuch, Griechenland zu unterwerfen.",
  "parteien": [
   {
    "name": "Griechischer Bund unter Sparta",
    "fuehrer": "Pausanias",
    "staerke": "ca. 40.000 Hopliten",
    "verluste": "ca. 1.500 laut griechischen Angaben"
   },
   {
    "name": "Perserreich und griechische Verbündete",
    "fuehrer": "Mardonios",
    "staerke": "ca. 70.000–120.000",
    "verluste": "sehr hoch; der Feldherr fiel"
   }
  ],
  "ausgang": "Griechischer Sieg. Ein missverstandener nächtlicher Stellungswechsel sah wie Flucht aus; Mardonios griff an und traf auf geschlossene spartanische Phalangen.",
  "folgen": "Die persische Landmacht verließ Griechenland endgültig. Am selben Tag soll die griechische Flotte bei Mykale gesiegt haben. Athen und Sparta waren fortan die beiden Pole der griechischen Welt – ihre Rivalität führte fünfzig Jahre später in den Peloponnesischen Krieg.",
  "hinweis": "Herodots Zahlen für die persische Seite gelten als überhöht; die Forschung rechnet mit etwa 70.000."
 },
 {
  "year": -405,
  "name": "Schlacht bei Aigospotamoi",
  "war": "Peloponnesischer Krieg",
  "ort": "am Hellespont, heutige Dardanellen",
  "text": "Ein einziger Überraschungsangriff auf eine an Land gezogene Flotte entschied einen 27 Jahre langen Krieg.",
  "parteien": [
   {
    "name": "Sparta",
    "fuehrer": "Lysander",
    "staerke": "ca. 170 Schiffe",
    "verluste": "gering"
   },
   {
    "name": "Athen",
    "fuehrer": "Konon und weitere Strategen",
    "staerke": "ca. 180 Schiffe",
    "verluste": "fast die gesamte Flotte; 3.000 Gefangene wurden hingerichtet"
   }
  ],
  "ausgang": "Spartanischer Sieg. Lysander griff an, während die athenischen Besatzungen zum Proviantholen an Land waren – Alkibiades hatte vor genau dieser Nachlässigkeit gewarnt und war abgewiesen worden.",
  "folgen": "Ohne Flotte konnte Athen seine Getreidezufuhr aus dem Schwarzmeerraum nicht mehr sichern. Nach einer Hungerblockade kapitulierte die Stadt 404 v. Chr.: Mauern geschleift, Flotte abgegeben, Demokratie vorübergehend beseitigt. Die Vormacht Athens war zu Ende.",
  "hinweis": "Xenophon, die Hauptquelle, war Zeitgenosse und Spartafreund; die Zahl der hingerichteten Gefangenen stammt von ihm.",
  "vertiefung": "peloponnesischer-krieg"
 },
 {
  "year": -371,
  "name": "Schlacht bei Leuktra",
  "war": "Böotischer Krieg",
  "text": "Epaminondas verstärkt bewusst einen Flügel statt gleichmäßig aufzustellen – die erste überlieferte Schwerpunktbildung. Spartas Ruf der Unbesiegbarkeit endet an einem Nachmittag.",
  "ort": "Leuktra in Böotien",
  "parteien": [
   {
    "name": "Theben und Böotischer Bund",
    "fuehrer": "Epaminondas",
    "staerke": "ca. 7.000",
    "verluste": "ca. 300"
   },
   {
    "name": "Sparta und Peloponnesischer Bund",
    "fuehrer": "König Kleombrotos I.",
    "staerke": "ca. 10.000–11.000",
    "verluste": "ca. 1.000, darunter 400 von 700 Spartiaten und der König"
   }
  ],
  "ausgang": "Thebanischer Sieg. Epaminondas stellte den linken Flügel 50 Glieder tief statt der üblichen 8 und traf damit genau auf die spartanische Elite.",
  "folgen": "Das Ende der spartanischen Vormacht in Griechenland. Sparta verlor Messenien und damit die Heloten, auf deren Arbeit sein gesamtes Kriegersystem beruhte – es erholte sich nie wieder.",
  "hinweis": "Die 400 gefallenen Spartiaten wiegen schwerer als die Zahl vermuten lässt: Vollbürger gab es zu diesem Zeitpunkt nur noch etwa 1.500."
 },
 {
  "year": -331,
  "name": "Schlacht bei Gaugamela",
  "war": "Alexanderzüge",
  "text": "Alexander der Große besiegt das zahlenmäßig weit überlegene Perserheer unter Darius III. entscheidend und besiegelt den Untergang des Perserreichs.",
  "ort": "bei Gaugamela, heutiges Nordirak",
  "parteien": [
   {
    "name": "Makedonien und Griechenland",
    "fuehrer": "Alexander der Große",
    "staerke": "ca. 47.000",
    "verluste": "ca. 1.000–4.000"
   },
   {
    "name": "Perserreich",
    "fuehrer": "Dareios III.",
    "staerke": "moderne Schätzung 50.000–120.000",
    "verluste": "sehr hoch, Zahlen unsicher"
   }
  ],
  "ausgang": "Makedonischer Sieg. Alexander zog die persische Linie durch einen Ritt nach rechts auseinander und stieß in die entstandene Lücke auf Dareios zu, der floh.",
  "folgen": "Babylon, Susa und Persepolis fielen binnen Monaten. Dareios wurde ein Jahr später von einem eigenen Satrapen ermordet – das Achämenidenreich war nach 220 Jahren zu Ende.",
  "hinweis": "Antike Quellen nennen bis zu einer Million Perser. Das Gelände hätte solche Massen nicht fassen können; die Forschung rechnet mit einem Verhältnis von etwa 1:2.",
  "vertiefung": "alexanderzug"
 },
 {
  "year": -260,
  "name": "Schlacht bei Mylae",
  "war": "Erster Punischer Krieg",
  "text": "Rom, bis dahin keine Seemacht, besiegt Karthago zur See – mit Enterbrücken, die den Seekampf in einen Nahkampf verwandeln.",
  "ort": "vor Mylae, Nordküste Siziliens",
  "parteien": [
   {
    "name": "Römische Republik",
    "fuehrer": "Gaius Duilius",
    "staerke": "ca. 145 Schiffe",
    "verluste": "gering"
   },
   {
    "name": "Karthago",
    "fuehrer": "Hannibal Gisko",
    "staerke": "ca. 130 Schiffe",
    "verluste": "ca. 50 Schiffe verloren, davon 31 gekapert"
   }
  ],
  "ausgang": "Erster römischer Seesieg überhaupt. Rom glich die eigene Unerfahrenheit mit dem Corvus aus – einer Enterbrücke, die das Seegefecht in einen Nahkampf verwandelte.",
  "folgen": "Rom bewies, dass es zur See bestehen konnte, und baute die Flotte weiter aus. Duilius erhielt die erste Ehrensäule Roms für einen Seesieg. Der Corvus machte die Schiffe allerdings kopflastig; in Stürmen gingen später ganze Flotten verloren.",
  "hinweis": "Die Schiffszahlen stammen von Polybios, der rund hundert Jahre später schrieb, aber gute Quellen hatte."
 },
 {
  "year": -218,
  "name": "Alpenübergang und Schlacht an der Trebia",
  "war": "Zweiter Punischer Krieg",
  "ort": "Westalpen und Trebia in Norditalien",
  "text": "Hannibal führte ein Heer samt Kriegselefanten im Winter über die Alpen und schlug wenige Wochen später das erste römische Heer.",
  "parteien": [
   {
    "name": "Karthago und keltische Verbündete",
    "fuehrer": "Hannibal",
    "staerke": "ca. 26.000 nach dem Alpenübergang, 37 Elefanten beim Aufbruch",
    "verluste": "über die Hälfte des Heeres beim Übergang"
   },
   {
    "name": "Römische Republik",
    "fuehrer": "Tiberius Sempronius Longus",
    "staerke": "ca. 40.000",
    "verluste": "ca. 20.000–30.000"
   }
  ],
  "ausgang": "Karthagischer Sieg. Hannibal lockte die Römer bei Kälte durch den eiskalten Fluss und ließ dann eine verborgene Abteilung in ihren Rücken stoßen.",
  "folgen": "Norditalien fiel weitgehend an Hannibal, keltische Stämme schlossen sich ihm an. Es folgten der Trasimenische See und Cannae – drei Siege in achtzehn Monaten. Rom stand am Rand der Niederlage und hielt trotzdem durch.",
  "hinweis": "Welchen Alpenpass Hannibal nahm, ist bis heute ungeklärt; mindestens ein halbes Dutzend Routen werden vertreten. Von den 37 Elefanten überlebte nach kurzer Zeit nur einer."
 },
 {
  "year": -216,
  "name": "Schlacht bei Cannae",
  "war": "Zweiter Punischer Krieg",
  "text": "Hannibal vernichtet ein römisches Heer nahezu vollständig durch eine geniale Doppelumfassung – bis heute militärhistorisches Lehrbeispiel.",
  "ort": "bei Cannae, Apulien",
  "parteien": [
   {
    "name": "Karthago und Verbündete",
    "fuehrer": "Hannibal",
    "staerke": "ca. 50.000",
    "verluste": "ca. 6.000–8.000"
   },
   {
    "name": "Römische Republik",
    "fuehrer": "Gaius Terentius Varro und Lucius Aemilius Paullus",
    "staerke": "ca. 80.000–86.000",
    "verluste": "50.000–70.000 Tote, ca. 10.000 Gefangene"
   }
  ],
  "ausgang": "Vernichtender karthagischer Sieg. Hannibal ließ die Mitte bewusst zurückweichen und schloss die vorstoßenden Römer mit den Flügeln und der Reiterei vollständig ein.",
  "folgen": "Der schwerste Verlust der römischen Geschichte an einem einzigen Tag. Ein Konsul, achtzig Senatoren und ein großer Teil der politischen Führung fielen. Rom lehnte trotzdem jede Verhandlung ab, mied fortan die offene Feldschlacht und zermürbte Hannibal über Jahre.",
  "hinweis": "Polybios nennt 70.000 Tote, Livius 55.000. Selbst die niedrigere Zahl bedeutet, dass an einem Nachmittag mehr Menschen starben als an jedem Tag des Ersten Weltkriegs."
 },
 {
  "year": -202,
  "name": "Schlacht bei Zama",
  "war": "Zweiter Punischer Krieg",
  "text": "Scipio besiegt Hannibal entscheidend in Nordafrika und beendet Karthagos Großmachtstellung endgültig.",
  "ort": "bei Zama, heutiges Tunesien",
  "parteien": [
   {
    "name": "Römische Republik und Numidien",
    "fuehrer": "Publius Cornelius Scipio und Massinissa",
    "staerke": "ca. 30.000 Fußvolk, 6.000 Reiter",
    "verluste": "ca. 1.500–2.500"
   },
   {
    "name": "Karthago",
    "fuehrer": "Hannibal",
    "staerke": "ca. 36.000 Fußvolk, 4.000 Reiter, 80 Elefanten",
    "verluste": "ca. 20.000 Tote, 20.000 Gefangene"
   }
  ],
  "ausgang": "Römischer Sieg. Scipio ließ Gassen in seiner Aufstellung öffnen, durch die die Elefanten wirkungslos hindurchliefen; die numidische Reiterei entschied die Schlacht in Hannibals Rücken.",
  "folgen": "Ende des Zweiten Punischen Krieges. Karthago verlor alle überseeischen Gebiete, die Flotte und das Recht, ohne römische Erlaubnis Krieg zu führen. Rom war unbestrittene Macht des westlichen Mittelmeers.",
  "hinweis": "Zama ist die einzige Schlacht, die Hannibal verlor. Entscheidend war, dass Massinissas Reiterei diesmal auf römischer Seite stand – bei Cannae hatte die überlegene Reiterei Hannibal den Sieg gebracht."
 },
 {
  "year": -53,
  "name": "Schlacht bei Carrhae",
  "war": "Römisch-Parthische Kriege",
  "text": "Die schwerste römische Niederlage im Osten. Berittene Bogenschützen zeigen die Grenzen der Legion in offenem Gelände.",
  "ort": "bei Carrhae, heutiges Harran in der Türkei",
  "parteien": [
   {
    "name": "Römische Republik",
    "fuehrer": "Marcus Licinius Crassus",
    "staerke": "ca. 40.000, davon 4.000 Reiter",
    "verluste": "ca. 20.000 Tote, 10.000 Gefangene"
   },
   {
    "name": "Partherreich",
    "fuehrer": "Surena",
    "staerke": "ca. 10.000, fast nur Reiterei",
    "verluste": "gering"
   }
  ],
  "ausgang": "Katastrophale römische Niederlage. Berittene Bogenschützen umkreisten die schweren Legionen, die sie nicht stellen konnten; ein Kamelzug versorgte sie laufend mit Pfeilen nach.",
  "folgen": "Crassus fiel, mit ihm sein Sohn und sieben Legionsadler. Das Triumvirat mit Caesar und Pompeius zerbrach – der Weg in den Bürgerkrieg war frei. Die Rückgabe der Feldzeichen 20 v. Chr. feierte Augustus als großen diplomatischen Erfolg.",
  "hinweis": "Der parthische Rückwärtsschuss aus dem Sattel, der Parthian shot, ging als Redewendung ins Englische ein."
 },
 {
  "year": -52,
  "name": "Schlacht von Alesia",
  "war": "Gallischer Krieg",
  "text": "Caesar besiegt den gallischen Anführer Vercingetorix durch eine doppelte Belagerungsmauer – entscheidet den Gallischen Krieg zugunsten Roms.",
  "ort": "Alesia, heutiges Burgund",
  "parteien": [
   {
    "name": "Römische Republik",
    "fuehrer": "Gaius Iulius Caesar",
    "staerke": "ca. 60.000–70.000",
    "verluste": "nicht zuverlässig überliefert"
   },
   {
    "name": "Gallischer Stämmebund",
    "fuehrer": "Vercingetorix",
    "staerke": "ca. 80.000 in der Festung, dazu ein Entsatzheer",
    "verluste": "sehr hoch, Zahlen unsicher"
   }
  ],
  "ausgang": "Römischer Sieg. Caesar baute zwei Befestigungsringe – einen nach innen gegen die Belagerten, einen nach außen gegen das Entsatzheer – und hielt beide Angriffe zugleich aus. Vercingetorix ergab sich.",
  "folgen": "Der gallische Widerstand brach zusammen; Gallien wurde römische Provinz und blieb es fünf Jahrhunderte. Caesars Ruhm aus diesem Feldzug trug seinen Griff nach der Macht in Rom. Vercingetorix wurde sechs Jahre später im Triumphzug mitgeführt und hingerichtet.",
  "hinweis": "Caesar beziffert das Entsatzheer in seinem eigenen Bericht auf 250.000 Mann. Die Forschung hält 80.000 bis 100.000 für realistischer – er schrieb für ein römisches Publikum, das seine Leistung würdigen sollte."
 },
 {
  "year": -31,
  "name": "Schlacht bei Actium",
  "war": "Römischer Bürgerkrieg",
  "text": "Octavian besiegt Marcus Antonius und Kleopatra zur See – ebnet den Weg zum römischen Kaisertum.",
  "ort": "vor Actium, Westgriechenland",
  "parteien": [
   {
    "name": "Octavian",
    "fuehrer": "Marcus Vipsanius Agrippa",
    "staerke": "ca. 250 Schiffe, 80.000 Mann",
    "verluste": "ca. 2.500"
   },
   {
    "name": "Marcus Antonius und Kleopatra VII.",
    "fuehrer": "Marcus Antonius",
    "staerke": "ca. 290 Schiffe, 120.000 Mann",
    "verluste": "ca. 5.000, dazu der Verlust fast der gesamten Flotte"
   }
  ],
  "ausgang": "Sieg Octavians. Antonius' Flotte war durch Blockade und Krankheit geschwächt; mitten im Gefecht durchbrach Kleopatras Geschwader die Linie und segelte nach Ägypten, Antonius folgte.",
  "folgen": "Ein Jahr später nahmen sich beide in Alexandria das Leben. Ägypten wurde römische Provinz, die letzte hellenistische Monarchie endete. Octavian stand ohne Rivalen da und wurde vier Jahre später Augustus.",
  "hinweis": "Ob Kleopatras Abzug Flucht oder abgesprochener Plan war, ist seit der Antike umstritten. Die Berichte stammen von der Siegerseite.",
  "vertiefung": "pharao-kleopatra"
 },
 {
  "year": 9,
  "name": "Varusschlacht (Teutoburger Wald)",
  "war": "Römisch-Germanische Kriege",
  "text": "Germanische Stämme unter Arminius vernichten drei römische Legionen und stoppen die römische Expansion nach Germanien dauerhaft.",
  "ort": "vermutlich Kalkriese bei Osnabrück",
  "parteien": [
   {
    "name": "Germanische Stämme",
    "fuehrer": "Arminius",
    "staerke": "unbekannt, geschätzt 15.000–20.000",
    "verluste": "unbekannt"
   },
   {
    "name": "Römisches Reich",
    "fuehrer": "Publius Quinctilius Varus",
    "staerke": "3 Legionen mit Tross, ca. 15.000–20.000",
    "verluste": "nahezu alle; Varus nahm sich das Leben"
   }
  ],
  "ausgang": "Vollständige germanische Vernichtung. Arminius hatte als römischer Offizier gedient und Varus' Vertrauen; er lockte den Zug in unwegsames Gelände und griff über mehrere Tage aus dem Hinterhalt an.",
  "folgen": "Rom gab die Provinz Germanien auf und machte den Rhein zur Grenze. Die Legionsnummern XVII, XVIII und XIX wurden nie wieder vergeben. Die kulturelle Trennung zwischen romanisiertem und nicht romanisiertem Europa geht auf diese Entscheidung zurück.",
  "hinweis": "Der Ort war jahrhundertelang unbekannt. Erst ab 1987 machten Münz- und Waffenfunde bei Kalkriese die Zuordnung wahrscheinlich – endgültig bewiesen ist sie nicht."
 },
 {
  "year": 260,
  "name": "Schlacht bei Edessa",
  "war": "Römisch-Sasanidische Kriege",
  "text": "Kaiser Valerian gerät in persische Gefangenschaft – ein Schock für das römische Selbstverständnis.",
  "ort": "bei Edessa, heutiges Şanlıurfa",
  "parteien": [
   {
    "name": "Sasanidenreich",
    "fuehrer": "Schapur I.",
    "staerke": "unbekannt",
    "verluste": "unbekannt"
   },
   {
    "name": "Römisches Reich",
    "fuehrer": "Kaiser Valerian",
    "staerke": "ca. 70.000 laut Schapurs Inschrift",
    "verluste": "Heer aufgerieben, der Kaiser gefangen"
   }
  ],
  "ausgang": "Sasanidischer Sieg. Valerian geriet in Gefangenschaft – der einzige römische Kaiser, dem das je geschah.",
  "folgen": "Höhepunkt der Reichskrise des 3. Jahrhunderts. Schapur ließ den Triumph an Felswänden in Naqsch-e Rostam darstellen. Das Reich zerfiel vorübergehend in drei Teile und wurde erst unter Aurelian und Diokletian wieder zusammengeführt.",
  "hinweis": "Die Truppenzahl stammt aus Schapurs eigener Inschrift und ist entsprechend zu lesen. Was mit Valerian in Gefangenschaft geschah, berichten nur christliche Autoren, die in seinem Ende die Strafe für seine Christenverfolgung sahen.",
  "vertiefung": "schapur1"
 },
 {
  "year": 378,
  "name": "Schlacht von Adrianopel",
  "war": "Völkerwanderung",
  "text": "Westgoten vernichten ein römisches Heer und töten Kaiser Valens – Symbol der beginnenden militärischen Schwäche Roms.",
  "ort": "bei Adrianopel, heutiges Edirne",
  "parteien": [
   {
    "name": "Westgoten und Verbündete",
    "fuehrer": "Fritigern",
    "staerke": "ca. 12.000–20.000",
    "verluste": "unbekannt"
   },
   {
    "name": "Oströmisches Reich",
    "fuehrer": "Kaiser Valens",
    "staerke": "ca. 15.000–30.000",
    "verluste": "etwa zwei Drittel des Heeres, der Kaiser fiel"
   }
  ],
  "ausgang": "Gotischer Sieg. Valens griff an, ohne die Verstärkung seines Neffen abzuwarten; die gotische Reiterei kehrte während des Gefechts zurück und fiel den Römern in die Flanke.",
  "folgen": "Der schwerste römische Verlust seit Cannae. Rom musste die Goten erstmals als geschlossenen Verband auf Reichsgebiet siedeln lassen – ein Vorbild für alle folgenden Ansiedlungen und ein Schritt auf dem Weg zur Auflösung des Westreichs.",
  "hinweis": "Ammianus Marcellinus, die Hauptquelle, war Offizier und schrieb kurz danach – für die Spätantike ungewöhnlich gut. Die Truppenzahlen nennt er trotzdem nicht."
 },
 {
  "year": 451,
  "name": "Schlacht auf den Katalaunischen Feldern",
  "war": "Hunneneinfälle",
  "ort": "in der Champagne, Nordostfrankreich",
  "text": "Römer und Westgoten gemeinsam gegen Attila – eines der letzten Male, dass Rom im Westen ein großes Heer ins Feld führte.",
  "parteien": [
   {
    "name": "Weströmisches Reich, Westgoten, Franken, Burgunder",
    "fuehrer": "Flavius Aëtius und Theoderich I.",
    "staerke": "ca. 50.000",
    "verluste": "hoch; der Gotenkönig fiel"
   },
   {
    "name": "Hunnen und verbündete Verbände",
    "fuehrer": "Attila",
    "staerke": "ca. 50.000",
    "verluste": "hoch"
   }
  ],
  "ausgang": "Unentschieden mit strategischem Vorteil für die Verteidiger. Attila zog sich in sein Lager zurück und trat den Rückzug an; Aëtius verfolgte ihn nicht.",
  "folgen": "Attilas Vorstoß nach Gallien endete. Im Jahr darauf zog er nach Italien und brach den Feldzug nach einem Treffen mit Papst Leo I. ab; 453 starb er, sein Reich zerfiel binnen Jahren. Rom hatte sich nur mit germanischen Verbündeten behaupten können – ein Vorzeichen des kommenden Jahrzehnts.",
  "hinweis": "Die überlieferten 165.000 oder gar 300.000 Toten bei Jordanes sind unglaubwürdig. Warum Aëtius nicht verfolgte, ist umstritten: Vermutlich brauchte er die Hunnen als Gegengewicht zu den Goten."
 },
 {
  "year": 636,
  "name": "Schlacht am Jarmuk",
  "war": "Islamische Expansion",
  "ort": "am Fluss Jarmuk, heutige Grenze Syrien/Jordanien",
  "text": "Sechs Tage Kampf, die Syrien und Palästina für ein Jahrtausend aus byzantinischer Hand nahmen.",
  "parteien": [
   {
    "name": "Raschidun-Kalifat",
    "fuehrer": "Chalid ibn al-Walid",
    "staerke": "ca. 25.000–40.000",
    "verluste": "ca. 4.000"
   },
   {
    "name": "Byzantinisches Reich und Verbündete",
    "fuehrer": "Vahan, Oberbefehl Kaiser Herakleios",
    "staerke": "ca. 40.000–100.000",
    "verluste": "sehr hoch; das Heer wurde aufgerieben"
   }
  ],
  "ausgang": "Vollständiger Sieg der Araber. Chalid nutzte seine bewegliche Reiterei, um die schwerfälligere byzantinische Aufstellung immer wieder an wechselnden Stellen zu treffen; ein Sandsturm im Rücken der Angreifer half am letzten Tag.",
  "folgen": "Byzanz verlor Syrien, Palästina und bald Ägypten – die reichsten Provinzen. Herakleios, der die Gebiete kurz zuvor von den Persern zurückerobert hatte, verabschiedete sich der Überlieferung nach mit den Worten Leb wohl, Syrien. Innerhalb eines Jahrhunderts reichte das Kalifat von Spanien bis zum Indus.",
  "hinweis": "Die byzantinischen Truppenzahlen schwanken in den Quellen zwischen 40.000 und 200.000. Beide Reiche waren nach zwanzig Jahren Krieg gegeneinander erschöpft – das erklärt den arabischen Erfolg mehr als jede Einzelschlacht.",
  "vertiefung": "kaiser-herakleios"
 },
 {
  "year": 732,
  "name": "Schlacht bei Tours und Poitiers",
  "war": "Islamische Expansion",
  "text": "Karl Martell stoppt den arabischen Vormarsch nach Mitteleuropa.",
  "ort": "zwischen Tours und Poitiers, Westfrankreich",
  "parteien": [
   {
    "name": "Fränkisches Reich und Aquitanien",
    "fuehrer": "Karl Martell",
    "staerke": "ca. 15.000–30.000, überwiegend Fußvolk",
    "verluste": "gering"
   },
   {
    "name": "Umayyaden-Kalifat",
    "fuehrer": "Abd ar-Rahman al-Ghafiqi",
    "staerke": "ca. 20.000–30.000, überwiegend Reiterei",
    "verluste": "hoch; der Feldherr fiel"
   }
  ],
  "ausgang": "Fränkischer Sieg. Martells Fußvolk hielt in geschlossener Formation den Reiterangriffen stand; nach dem Tod des Befehlshabers zogen sich die Umayyaden in der Nacht zurück.",
  "folgen": "Der arabische Vorstoß nach Norden endete. Martells Ansehen trug seine Familie auf den Thron – sein Enkel war Karl der Große. Die Kirche hatte den Feldzug mitfinanziert, was die Bindung von Krone und Klerus festigte.",
  "hinweis": "Die spätere Deutung als Rettung des Abendlands stammt aus dem 18. und 19. Jahrhundert. Zeitgenössische arabische Quellen behandeln das Gefecht als Rückschlag eines Raubzugs, nicht als Wende. Die Truppenzahlen sind reine Schätzung; ältere Angaben von 80.000 Mann gelten als unhaltbar.",
  "vertiefung": "islamische-expansion"
 },
 {
  "year": 751,
  "name": "Schlacht am Talas",
  "war": "Arabisch-Chinesische Auseinandersetzung",
  "text": "Abbasidische und Tang-Truppen treffen in Zentralasien aufeinander. Der Überlieferung nach gelangte durch chinesische Gefangene das Wissen um die Papierherstellung nach Westen.",
  "ort": "am Talas-Fluss, heutiges Kirgisistan",
  "parteien": [
   {
    "name": "Abbasiden-Kalifat und Verbündete",
    "fuehrer": "Ziyad ibn Salih",
    "staerke": "ca. 30.000–40.000",
    "verluste": "unbekannt"
   },
   {
    "name": "Tang-China und Karluken",
    "fuehrer": "Gao Xianzhi",
    "staerke": "ca. 30.000, davon viele Hilfstruppen",
    "verluste": "hoch; das Heer wurde aufgerieben"
   }
  ],
  "ausgang": "Sieg der Abbasiden. Entscheidend war der Seitenwechsel der karluk-türkischen Hilfstruppen mitten in der Schlacht.",
  "folgen": "China gab die Expansion nach Westen auf; Zentralasien wurde islamisch geprägt. Der Überlieferung nach gerieten chinesische Papiermacher in Gefangenschaft und brachten ihr Handwerk nach Samarkand – von dort erreichte das Papier Bagdad und später Europa.",
  "hinweis": "Die Geschichte der gefangenen Papiermacher stammt aus einer arabischen Quelle des 11. Jahrhunderts und ist nicht unabhängig belegt. Papier war in Zentralasien vermutlich schon vorher bekannt; die Schlacht beschleunigte die Verbreitung, erklärt sie aber nicht allein."
 },
 {
  "year": 955,
  "name": "Schlacht auf dem Lechfeld",
  "war": "Ungarneinfälle",
  "ort": "bei Augsburg",
  "text": "Das Ende der ungarischen Raubzüge nach Westeuropa – und der Beginn des ottonischen Kaisertums.",
  "parteien": [
   {
    "name": "Ostfränkisch-deutsches Reich",
    "fuehrer": "Otto I.",
    "staerke": "ca. 8.000–10.000 Panzerreiter",
    "verluste": "unbekannt, aber erheblich"
   },
   {
    "name": "Ungarn",
    "fuehrer": "Bulcsú, Lehel und Súr",
    "staerke": "ca. 8.000–10.000 berittene Bogenschützen",
    "verluste": "sehr hoch; die Anführer wurden hingerichtet"
   }
  ],
  "ausgang": "Deutscher Sieg. Die Ungarn plünderten während der Schlacht den Tross und wurden dabei von der schweren Reiterei gestellt; auf der Flucht ertranken viele im Hochwasser des Lech.",
  "folgen": "Die Raubzüge endeten. Ungarn wurde sesshaft, nahm um 1000 das Christentum an und wurde Königreich. Otto wurde von seinen Truppen auf dem Feld zum Kaiser ausgerufen und 962 in Rom gekrönt – der Beginn des Heiligen Römischen Reiches.",
  "hinweis": "Die Zahl von 100.000 Ungarn in älteren Darstellungen ist unhaltbar. Entscheidend war nicht die Menge, sondern dass Otto erstmals die Reichskontingente unter einem Kommando zusammenbrachte."
 },
 {
  "year": 1066,
  "name": "Schlacht bei Hastings",
  "war": "Normannische Eroberung",
  "text": "Wilhelm der Eroberer besiegt die Angelsachsen und verändert England grundlegend in Sprache, Adel und Recht.",
  "ort": "bei Hastings, Südengland",
  "parteien": [
   {
    "name": "Normandie",
    "fuehrer": "Wilhelm der Eroberer",
    "staerke": "ca. 7.000–10.000, davon 2.000 Reiter",
    "verluste": "ca. 2.000"
   },
   {
    "name": "England",
    "fuehrer": "Harold Godwinson",
    "staerke": "ca. 7.000–8.000, fast nur Fußvolk",
    "verluste": "ca. 4.000; der König fiel"
   }
  ],
  "ausgang": "Normannischer Sieg nach einem ganzen Tag Kampf. Die englische Schildmauer hielt lange stand und löste sich erst auf, als Teile der Normannen scheinbar flohen und die Engländer nachsetzten.",
  "folgen": "England erhielt binnen zwanzig Jahren eine völlig neue Oberschicht – 1086 war fast der gesamte Großgrundbesitz in normannischer Hand. Sprache, Recht und die Bindung ans Festland veränderten sich dauerhaft.",
  "hinweis": "Harold hatte drei Wochen zuvor bei Stamford Bridge eine norwegische Invasion geschlagen und war in Eilmärschen nach Süden gezogen – seine Truppen waren erschöpft. Ob er wirklich durch einen Pfeil ins Auge starb, lässt der Teppich von Bayeux offen.",
  "vertiefung": "normannische-eroberung"
 },
 {
  "year": 1071,
  "name": "Schlacht von Manzikert",
  "war": "Byzantinisch-Seldschukische Kriege",
  "text": "Die vernichtende Niederlage von Byzanz gegen die Seldschuken öffnet Anatolien türkischer Besiedlung und schwächt Byzanz dauerhaft.",
  "ort": "bei Manzikert, Ostanatolien",
  "parteien": [
   {
    "name": "Seldschuken",
    "fuehrer": "Alp Arslan",
    "staerke": "ca. 20.000–30.000, überwiegend berittene Bogenschützen",
    "verluste": "unbekannt"
   },
   {
    "name": "Byzantinisches Reich",
    "fuehrer": "Kaiser Romanos IV. Diogenes",
    "staerke": "ca. 40.000, viele Söldner",
    "verluste": "hoch; der Kaiser geriet in Gefangenschaft"
   }
  ],
  "ausgang": "Seldschukischer Sieg. Ein Teil des byzantinischen Heeres unter Andronikos Dukas verließ das Feld, ohne zu kämpfen – Hofpolitik entschied die Schlacht mit.",
  "folgen": "Anatolien, das Kernland byzantinischer Rekrutierung, ging über die folgenden Jahrzehnte weitgehend verloren. Der Hilferuf Konstantinopels an den Westen führte 1095 zum Aufruf zum Ersten Kreuzzug. Die Türkisierung Kleinasiens begann hier.",
  "hinweis": "Alp Arslan behandelte den gefangenen Kaiser nachsichtig und ließ ihn gegen Tribut frei. In Konstantinopel wurde Romanos abgesetzt, geblendet und starb an den Folgen – die Niederlage kostete ihn mehr als der Sieger."
 },
 {
  "year": 1097,
  "name": "Schlacht von Dorylaeum",
  "war": "Erster Kreuzzug",
  "text": "Frühe Kreuzfahrer besiegen ein seldschukisches Heer und sichern den Weg nach Jerusalem.",
  "ort": "bei Dorylaeum, Westanatolien",
  "parteien": [
   {
    "name": "Kreuzfahrerheer",
    "fuehrer": "Bohemund von Tarent und Gottfried von Bouillon",
    "staerke": "ca. 30.000–50.000 mit Tross",
    "verluste": "ca. 4.000"
   },
   {
    "name": "Rum-Seldschuken",
    "fuehrer": "Kilic Arslan I.",
    "staerke": "ca. 10.000–30.000",
    "verluste": "ca. 3.000"
   }
  ],
  "ausgang": "Sieg der Kreuzfahrer. Bohemunds Vorhut hielt einem Reiterangriff stand, bis der zweite Heeresteil in die Flanke des Gegners stieß.",
  "folgen": "Der Weg nach Syrien war offen; zwei Jahre später fiel Jerusalem. Für die Seldschuken bedeutete die Niederlage den Verlust Westanatoliens an Byzanz.",
  "hinweis": "Die Zahlen der Kreuzfahrerheere sind besonders unsicher, weil Pilger und Tross oft mitgezählt wurden. Kampffähig war vermutlich nur ein Bruchteil.",
  "vertiefung": "kreuzzuege"
 },
 {
  "year": 1099,
  "name": "Belagerung und Eroberung Jerusalems",
  "war": "Erster Kreuzzug",
  "ort": "Jerusalem",
  "text": "Nach fünf Wochen Belagerung nahmen die Kreuzfahrer Jerusalem – und richteten ein Blutbad an, das die Beziehungen zwischen den Religionen für Jahrhunderte belastete.",
  "parteien": [
   {
    "name": "Kreuzfahrerheer",
    "fuehrer": "Gottfried von Bouillon und Raimund von Toulouse",
    "staerke": "ca. 12.000–15.000, davon 1.300 Ritter",
    "verluste": "unbekannt"
   },
   {
    "name": "Fatimiden-Garnison",
    "fuehrer": "Iftikhar ad-Daula",
    "staerke": "ca. 1.000 Soldaten, dazu die Stadtbevölkerung",
    "verluste": "Garnison und ein großer Teil der Bevölkerung getötet"
   }
  ],
  "ausgang": "Eroberung am 15. Juli 1099 über Belagerungstürme an der Nordmauer. Der Statthalter durfte gegen Lösegeld abziehen; die übrige Bevölkerung – Muslime, Juden und einheimische Christen – wurde weitgehend niedergemacht.",
  "folgen": "Das Königreich Jerusalem entstand und bestand bis 1187. Die Erinnerung an das Massaker prägte das muslimische Bild der Kreuzzüge dauerhaft. Die Fatimiden hatten die Stadt erst ein Jahr zuvor von den Seldschuken übernommen.",
  "hinweis": "Zeitgenössische Berichte sprechen von Blut, das den Reitern bis an die Knie reichte – ein biblisches Bild aus der Offenbarung, keine Beobachtung. Die Opferzahlen schwanken zwischen 3.000 und 70.000; die Forschung hält die niedrigeren für plausibler.",
  "vertiefung": "kreuzfahrerstaaten"
 },
 {
  "year": 1183,
  "name": "Schlacht bei Kurikara",
  "war": "Genpei-Krieg",
  "ort": "Kurikara-Pass, Zentraljapan",
  "text": "Eine Kriegslist mit brennenden Ochsen entschied eine Schlacht im japanischen Bürgerkrieg – und leitete den Untergang des Taira-Klans ein.",
  "parteien": [
   {
    "name": "Minamoto-Klan",
    "fuehrer": "Minamoto no Yoshinaka",
    "staerke": "ca. 30.000–40.000",
    "verluste": "gering"
   },
   {
    "name": "Taira-Klan",
    "fuehrer": "Taira no Koremori",
    "staerke": "ca. 40.000–100.000 laut Chroniken",
    "verluste": "sehr hoch; große Teile stürzten in die Schlucht"
   }
  ],
  "ausgang": "Sieg der Minamoto. Yoshinaka band den Gegner tagsüber durch Scheinverhandlungen und griff nachts von mehreren Seiten an; der Überlieferung nach trieb er Ochsen mit brennenden Fackeln an den Hörnern in die Taira-Reihen.",
  "folgen": "Die Taira räumten die Hauptstadt Kyōto. Zwei Jahre später endete der Krieg in der Seeschlacht von Dan-no-ura, in der der kindliche Kaiser Antoku ertrank. Minamoto no Yoritomo begründete das erste Shogunat – der Beginn von 680 Jahren Kriegerherrschaft in Japan.",
  "hinweis": "Die Hauptquelle, das Heike Monogatari, ist eine Vers-Erzählung, die von wandernden Sängern vorgetragen wurde. Die brennenden Ochsen gehören eher in die Literatur als in die Militärgeschichte.",
  "vertiefung": "japan-kanmu"
 },
 {
  "year": 1187,
  "name": "Schlacht bei Hattin",
  "war": "Kreuzzüge",
  "text": "Saladin schlägt das Kreuzfahrerheer und nimmt kurz darauf Jerusalem ein – Auslöser des Dritten Kreuzzugs.",
  "ort": "Hörner von Hattin bei Tiberias, Galiläa",
  "parteien": [
   {
    "name": "Ayyubiden",
    "fuehrer": "Saladin",
    "staerke": "ca. 30.000, davon 12.000 Reiter",
    "verluste": "gering"
   },
   {
    "name": "Königreich Jerusalem und Ritterorden",
    "fuehrer": "Guido von Lusignan",
    "staerke": "ca. 20.000, davon 1.200 Ritter",
    "verluste": "nahezu vernichtet; der König gefangen"
   }
  ],
  "ausgang": "Vollständiger Sieg Saladins. Er lockte das Kreuzfahrerheer bei größter Hitze über wasserloses Gelände, ließ Gras anzünden und schnitt es vom See ab. Die Kreuzfahrer kämpften ausgedörrt.",
  "folgen": "Innerhalb von drei Monaten fielen Akkon, Sidon, Beirut und Jerusalem. Das Königreich Jerusalem war als Landmacht erledigt. Die Nachricht löste in Europa den Dritten Kreuzzug aus. Die Ordensritter ließ Saladin hinrichten, den König verschonte er.",
  "hinweis": "Das Wahre Kreuz, die wichtigste Reliquie der Kreuzfahrer, ging in dieser Schlacht verloren und blieb verschollen.",
  "vertiefung": "jerusalem-saladin"
 },
 {
  "year": 1191,
  "name": "Schlacht von Arsuf",
  "war": "Dritter Kreuzzug",
  "text": "Richard Löwenherz besiegt Saladin taktisch geschickt, kann Jerusalem aber letztlich nicht zurückerobern.",
  "ort": "bei Arsuf an der Küste Palästinas",
  "parteien": [
   {
    "name": "Kreuzfahrerheer",
    "fuehrer": "Richard Löwenherz",
    "staerke": "ca. 20.000",
    "verluste": "ca. 700"
   },
   {
    "name": "Ayyubiden",
    "fuehrer": "Saladin",
    "staerke": "ca. 25.000",
    "verluste": "ca. 7.000"
   }
  ],
  "ausgang": "Sieg der Kreuzfahrer. Richard hielt sein Heer trotz stundenlangem Pfeilbeschuss in strenger Marschordnung; als die Johanniter vorzeitig ausbrachen, ließ er den Angriff geschlossen nachstoßen.",
  "folgen": "Saladins Ruf der Unbesiegbarkeit war beschädigt, die Küste blieb in Kreuzfahrerhand. Jerusalem eroberte Richard jedoch nie: Der Vertrag von 1192 sicherte Christen nur freien Zugang als Pilger.",
  "hinweis": "Die Verlustzahlen stammen aus christlichen Quellen und sind entsprechend günstig gerechnet."
 },
 {
  "year": 1192,
  "name": "Zweite Schlacht bei Tarain",
  "war": "Ghuridische Eroberung Nordindiens",
  "text": "Muhammad von Ghur besiegt Prithviraj Chauhan. Damit beginnt eine mehrere Jahrhunderte währende muslimische Herrschaft in Nordindien, aus der das Sultanat von Delhi hervorgeht.",
  "ort": "bei Tarain, heutiges Haryana in Indien",
  "parteien": [
   {
    "name": "Ghuriden",
    "fuehrer": "Muhammad von Ghur",
    "staerke": "ca. 120.000 laut Quellen, davon 10.000 berittene Bogenschützen",
    "verluste": "unbekannt"
   },
   {
    "name": "Chauhan-Reich",
    "fuehrer": "Prithviraj Chauhan",
    "staerke": "ca. 300.000 laut Quellen, mit Kriegselefanten",
    "verluste": "hoch; der Herrscher wurde gefangen und getötet"
   }
  ],
  "ausgang": "Ghuridischer Sieg. Ein Jahr zuvor hatte Prithviraj an derselben Stelle gewonnen; diesmal zermürbten berittene Bogenschützen die schwerfälligen indischen Verbände, bevor die Reserve angriff.",
  "folgen": "Nordindien fiel unter muslimische Herrschaft. 1206 entstand das Sultanat von Delhi, das bis 1526 bestand – der Beginn von über sechs Jahrhunderten muslimischer Dynastien in Nordindien.",
  "hinweis": "Die überlieferten Truppenzahlen sind mit Sicherheit weit überhöht; persische Chroniken rechneten großzügig. Sicher ist nur das Kräfteverhältnis: bewegliche Reiterei gegen ein zahlenmäßig überlegenes, aber schwerfälliges Heer."
 },
 {
  "year": 1212,
  "name": "Schlacht bei Las Navas de Tolosa",
  "war": "Reconquista",
  "ort": "in der Sierra Morena, Andalusien",
  "text": "Ein Bündnis christlicher Königreiche brach die Macht der Almohaden – danach blieb muslimische Herrschaft in Spanien auf Granada beschränkt.",
  "parteien": [
   {
    "name": "Kastilien, Aragón, Navarra und Kreuzfahrer",
    "fuehrer": "Alfons VIII. von Kastilien",
    "staerke": "ca. 12.000–20.000",
    "verluste": "vergleichsweise gering"
   },
   {
    "name": "Almohaden-Kalifat",
    "fuehrer": "Muhammad an-Nasir",
    "staerke": "ca. 22.000–30.000",
    "verluste": "sehr hoch; das Heer löste sich auf"
   }
  ],
  "ausgang": "Christlicher Sieg. Ein Hirte zeigte den Christen einen unbewachten Pass, über den sie die almohadische Stellung umgingen.",
  "folgen": "Córdoba fiel 1236, Sevilla 1248. Das almohadische Reich zerfiel auch in Nordafrika. Übrig blieb das Emirat von Granada, das noch 260 Jahre bestand – bis 1492.",
  "hinweis": "Die Kettenglieder um das Zelt des Kalifen wurden zur Beute und finden sich bis heute im Wappen Navarras."
 },
 {
  "year": 1214,
  "name": "Schlacht bei Bouvines",
  "war": "Französisch-Englischer Konflikt",
  "text": "Frankreichs Sieg stärkt die königliche Zentralmacht und schwächt englische Ansprüche auf dem Kontinent.",
  "ort": "bei Bouvines, Nordfrankreich",
  "parteien": [
   {
    "name": "Frankreich",
    "fuehrer": "Philipp II. August",
    "staerke": "ca. 7.000–9.000",
    "verluste": "gering"
   },
   {
    "name": "Koalition aus Kaiser, England und Flandern",
    "fuehrer": "Kaiser Otto IV. und Ferrand von Flandern",
    "staerke": "ca. 9.000–12.000",
    "verluste": "ca. 1.000 Tote, 1.000 Gefangene, darunter zwei Grafen"
   }
  ],
  "ausgang": "Französischer Sieg. Otto entkam, seine Verbündeten gerieten in Gefangenschaft.",
  "folgen": "Die Königsmacht in Frankreich war gefestigt; England verlor seine Festlandsansprüche nördlich der Loire endgültig. Der englische König Johann Ohneland stand so geschwächt da, dass ihm die Barone ein Jahr später die Magna Carta abtrotzten. Otto IV. verlor die Kaiserkrone an Friedrich II.",
  "hinweis": "Bouvines gilt als eine der wenigen mittelalterlichen Schlachten, deren politische Folgen sich in drei Ländern gleichzeitig nachweisen lassen.",
  "vertiefung": "magna-carta"
 },
 {
  "year": 1241,
  "name": "Schlacht bei Liegnitz und am Sajó",
  "war": "Mongolensturm",
  "ort": "Liegnitz in Schlesien und Muhi an der Theiß",
  "text": "Innerhalb von zwei Tagen vernichteten mongolische Heere ein polnisch-deutsches und ein ungarisches Heer – Mitteleuropa lag offen.",
  "parteien": [
   {
    "name": "Mongolisches Reich",
    "fuehrer": "Baidar und Kadan im Norden, Batu Khan und Subutai in Ungarn",
    "staerke": "ca. 20.000 im Norden, ca. 70.000 in Ungarn",
    "verluste": "unbekannt"
   },
   {
    "name": "Polen, Deutscher Orden, Ungarn",
    "fuehrer": "Herzog Heinrich II. von Schlesien und König Béla IV.",
    "staerke": "ca. 8.000 bei Liegnitz, ca. 60.000 am Sajó",
    "verluste": "beide Heere aufgerieben; Heinrich fiel"
   }
  ],
  "ausgang": "Zwei mongolische Siege binnen zweier Tage, 500 Kilometer voneinander entfernt – ein Beleg für die Koordinationsfähigkeit der mongolischen Führung.",
  "folgen": "Ungarn wurde verwüstet, ein erheblicher Teil der Bevölkerung starb. Der Vorstoß nach Westen endete trotzdem: Als Nachricht vom Tod des Großkhans Ögedei eintraf, zogen die Heere zur Wahl nach Osten ab. Béla IV. ließ danach Steinburgen bauen – die Grundlage der ungarischen Verteidigung im Jahrhundert darauf.",
  "hinweis": "Ob der Abzug wirklich nur an der Khanwahl lag, ist umstritten. Ungarn bot der riesigen Reiterei zudem zu wenig Weideland für einen dauerhaften Aufenthalt.",
  "vertiefung": "mongolisches-reich"
 },
 {
  "year": 1260,
  "name": "Schlacht bei Ain Dschalut",
  "war": "Mongolische Expansion",
  "text": "Die ägyptischen Mamluken stoppen erstmals einen mongolischen Vormarsch und retten damit den Nahen Osten vor weiterer mongolischer Eroberung.",
  "ort": "Ain Dschalut in Galiläa",
  "parteien": [
   {
    "name": "Mamlukensultanat",
    "fuehrer": "Qutuz und Baibars",
    "staerke": "ca. 20.000",
    "verluste": "unbekannt"
   },
   {
    "name": "Mongolisches Reich",
    "fuehrer": "Kitbuqa",
    "staerke": "ca. 10.000–20.000",
    "verluste": "Heer aufgerieben; der Feldherr fiel"
   }
  ],
  "ausgang": "Mamlukischer Sieg. Baibars täuschte einen Rückzug vor und zog die Mongolen in einen Hinterhalt – dieselbe Taktik, mit der die Mongolen sonst selbst siegten.",
  "folgen": "Der mongolische Vormarsch nach Westen endete hier. Der Mythos der Unbesiegbarkeit war gebrochen. Die Mamluken wurden zur führenden Macht des Nahen Ostens und blieben es 250 Jahre.",
  "hinweis": "Die mongolische Hauptmacht war zuvor abgezogen, weil der Großkhan gestorben war und die Nachfolge geregelt werden musste. Kitbuqa führte nur einen Teil des Heeres.",
  "vertiefung": "mongolisches-reich"
 },
 {
  "year": 1281,
  "name": "Gescheiterte Mongolen-Invasion Japans",
  "war": "Mongolische Expansion",
  "text": "Ein Taifun zerstört die Invasionsflotte. Die Japaner nennen ihn kamikaze, 'Götterwind' – der Begriff prägt sechs Jahrhunderte später eine ganz andere Bedeutung.",
  "ort": "Bucht von Hakata, Kyushu",
  "parteien": [
   {
    "name": "Japan",
    "fuehrer": "Hōjō Tokimune",
    "staerke": "ca. 40.000 Samurai und Hilfstruppen",
    "verluste": "unbekannt"
   },
   {
    "name": "Yuan-China, Korea und unterworfene Verbände",
    "fuehrer": "Kublai Khan (Oberbefehl)",
    "staerke": "ca. 140.000 Mann auf über 4.000 Schiffen",
    "verluste": "geschätzt über die Hälfte ertrunken oder gefallen"
   }
  ],
  "ausgang": "Japanischer Sieg. Die Verteidiger hielten die Landung an einer eigens gebauten Steinmauer wochenlang auf; dann zerstörte ein schwerer Taifun die vor Anker liegende Flotte.",
  "folgen": "Japan blieb unbesetzt – bis 1945 die einzige ernsthafte Invasion des Landes. Der Sturm ging als kamikaze, Götterwind, in die Überlieferung ein und wurde 1944 zur Namensgebung der Selbstmordflieger benutzt. Das Shogunat geriet in eine Krise, weil es die Krieger nicht belohnen konnte: Es gab kein erobertes Land zu verteilen.",
  "hinweis": "Unterwasserarchäologie vor Takashima hat seit den 1980er Jahren Wrackteile gefunden. Sie zeigen, dass viele Schiffe für Flussfahrt gebaute Frachter waren – der Sturm traf eine Flotte, die für offene See kaum taugte.",
  "vertiefung": "japan-godaigo"
 },
 {
  "year": 1302,
  "name": "Sporenschlacht von Kortrijk",
  "war": "Französisch-Flämischer Krieg",
  "text": "Flämische Bürgermilizen besiegen überraschend das französische Ritterheer – früher Beleg für die abnehmende Dominanz schwerer Reiterei.",
  "ort": "bei Kortrijk, Flandern",
  "parteien": [
   {
    "name": "Flämische Städtemilizen",
    "fuehrer": "Wilhelm von Jülich und Guido von Namur",
    "staerke": "ca. 9.000 Fußvolk, Handwerker und Bürger",
    "verluste": "gering"
   },
   {
    "name": "Königreich Frankreich",
    "fuehrer": "Robert II. von Artois",
    "staerke": "ca. 8.000, darunter 2.500 Ritter",
    "verluste": "ca. 1.000 Ritter gefallen"
   }
  ],
  "ausgang": "Flämischer Sieg. Die Milizen kämpften mit dem Goedendag – einer Stange mit Eisenspitze – hinter Gräben in sumpfigem Gelände, in dem die schwere Reiterei steckenblieb.",
  "folgen": "Erstmals schlug städtisches Fußvolk ein Ritterheer vernichtend. Die Sieger hängten 500 vergoldete Rittersporen in einer Kirche auf – daher der Name. Die militärische Vormacht des Adels war nicht mehr selbstverständlich; Crécy und Azincourt folgten demselben Muster.",
  "hinweis": "Der 11. Juli ist bis heute Feiertag der Flämischen Gemeinschaft in Belgien – ein Beispiel dafür, wie eine mittelalterliche Schlacht zur nationalen Erinnerung wird."
 },
 {
  "year": 1346,
  "name": "Schlacht von Crécy",
  "war": "Hundertjähriger Krieg",
  "text": "Englische Langbogenschützen vernichten die Blüte des französischen Adels – Wendepunkt in der Kriegstechnik weg von Ritterheeren.",
  "ort": "bei Crécy-en-Ponthieu, Nordfrankreich",
  "parteien": [
   {
    "name": "England",
    "fuehrer": "Eduard III. und der Schwarze Prinz",
    "staerke": "ca. 12.000, darunter 5.000–7.000 Langbogenschützen",
    "verluste": "ca. 300"
   },
   {
    "name": "Frankreich und Verbündete",
    "fuehrer": "Philipp VI.",
    "staerke": "ca. 20.000–30.000, darunter 12.000 Ritter",
    "verluste": "ca. 4.000–10.000, darunter viele Adlige"
   }
  ],
  "ausgang": "Englischer Sieg. Die Langbogenschützen standen erhöht hinter Erdlöchern; die französische Reiterei griff in ungeordneten Wellen an und blieb in den eigenen Toten stecken.",
  "folgen": "England gewann die Oberhand für die nächste Phase des Hundertjährigen Krieges und nahm ein Jahr später Calais, das 211 Jahre englisch blieb. Der französische Hochadel verlor eine ganze Generation.",
  "hinweis": "Ob der Langbogen wirklich das Entscheidende war, wird diskutiert – neuere Arbeiten betonen Gelände, Disziplin und die Unordnung auf französischer Seite stärker als die Waffe.",
  "vertiefung": "hundertjaehriger-krieg"
 },
 {
  "year": 1410,
  "name": "Schlacht bei Tannenberg (Grunwald)",
  "war": "Litauisch-Polnisch-Deutscher Krieg",
  "ort": "bei Grunwald/Tannenberg, Ostpreußen",
  "text": "Die größte Ritterschlacht des Mittelalters beendete die Vormacht des Deutschen Ordens im Ostseeraum.",
  "parteien": [
   {
    "name": "Polen-Litauen und Verbündete",
    "fuehrer": "Władysław II. Jagiełło und Vytautas",
    "staerke": "ca. 30.000–39.000",
    "verluste": "ca. 5.000"
   },
   {
    "name": "Deutscher Orden",
    "fuehrer": "Ulrich von Jungingen",
    "staerke": "ca. 20.000–27.000",
    "verluste": "ca. 8.000 Tote und 14.000 Gefangene; der Hochmeister fiel"
   }
  ],
  "ausgang": "Sieg Polen-Litauens. Ein vorgetäuschter Rückzug der litauischen Verbände zog einen Teil der Ordensritter aus der Aufstellung; danach wurde der Rest umfasst.",
  "folgen": "Der Orden verlor die militärische Vorherrschaft und geriet in dauerhafte finanzielle Not; 1466 wurde er polnischer Lehnsmann. Polen-Litauen stieg zur Großmacht auf. Die Schlacht ist bis heute polnischer und litauischer Nationalmythos – und war 1914 der Grund, die Schlacht in Ostpreußen ausgerechnet Tannenberg zu nennen.",
  "hinweis": "Der Ort heißt polnisch Grunwald, litauisch Žalgiris und deutsch Tannenberg – drei Namen für dieselbe Erinnerung, mit drei verschiedenen Bedeutungen."
 },
 {
  "year": 1415,
  "name": "Schlacht von Azincourt",
  "war": "Hundertjähriger Krieg",
  "text": "Englische Langbogenschützen unter Heinrich V. vernichten ein zahlenmäßig weit überlegenes französisches Ritterheer.",
  "ort": "bei Azincourt, Nordfrankreich",
  "parteien": [
   {
    "name": "England",
    "fuehrer": "Heinrich V.",
    "staerke": "ca. 6.000–9.000, davon 5.000 Bogenschützen",
    "verluste": "ca. 100–600"
   },
   {
    "name": "Frankreich",
    "fuehrer": "Charles d'Albret und Jean Boucicaut",
    "staerke": "ca. 12.000–25.000",
    "verluste": "ca. 6.000 Tote, darunter drei Herzöge; über 1.000 Gefangene"
   }
  ],
  "ausgang": "Englischer Sieg gegen große Übermacht. Ein aufgeweichter Acker zwischen zwei Waldstücken zwang die Franzosen in eine enge Front; wer stürzte, kam in der Rüstung nicht mehr hoch.",
  "folgen": "Frankreich verlor erneut große Teile des Hochadels. 1420 erkannte es einen englischen Thronerben an. Erst Jeanne d'Arc drehte die Lage ab 1429.",
  "hinweis": "Heinrich ließ während der Schlacht einen großen Teil der Gefangenen töten, weil er einen Angriff im Rücken fürchtete. Das galt schon Zeitgenossen als Bruch der Regeln und wird bis heute diskutiert."
 },
 {
  "year": 1453,
  "name": "Belagerung Konstantinopels",
  "war": "Osmanische Expansion",
  "text": "Erstmals entscheiden Kanonen eine Belagerung – das Byzantinische Reich geht endgültig unter.",
  "ort": "Konstantinopel",
  "parteien": [
   {
    "name": "Osmanisches Reich",
    "fuehrer": "Mehmed II.",
    "staerke": "ca. 80.000, dazu eine Flotte und schwere Belagerungsgeschütze",
    "verluste": "unbekannt, vermutlich hoch"
   },
   {
    "name": "Byzantinisches Reich und italienische Verbündete",
    "fuehrer": "Konstantin XI. Palaiologos und Giovanni Giustiniani",
    "staerke": "ca. 7.000–8.000",
    "verluste": "Stadt gefallen; der Kaiser fiel im Kampf"
   }
  ],
  "ausgang": "Osmanischer Sieg nach 53 Tagen. Die Kanone des ungarischen Büchsenmeisters Urban brach die theodosianische Mauer, die tausend Jahre gehalten hatte. Osmanische Schiffe wurden über Land in das Goldene Horn geschleppt.",
  "folgen": "Ende des Byzantinischen Reiches nach 1.058 Jahren. Konstantinopel wurde osmanische Hauptstadt. Gelehrte flohen mit Handschriften nach Italien und trugen zur Renaissance bei; die Suche nach Seewegen nach Asien gewann an Dringlichkeit.",
  "hinweis": "Die Zahl 80.000 ist eine mittlere Schätzung; zeitgenössische Angaben reichen von 60.000 bis 300.000. Sicher ist das Verhältnis von etwa zehn zu eins.",
  "vertiefung": "fall-konstantinopel"
 },
 {
  "year": 1521,
  "name": "Belagerung von Tenochtitlan",
  "war": "Spanische Eroberung Mexikos",
  "ort": "Tenochtitlan, heutiges Mexiko-Stadt",
  "text": "Eine der größten Städte der Welt fiel nach 93 Tagen Belagerung – entschieden nicht allein durch Waffen, sondern durch Bündnisse und Pocken.",
  "parteien": [
   {
    "name": "Spanien und indigene Verbündete",
    "fuehrer": "Hernán Cortés, dazu Tlaxcalteken unter Xicohtencatl",
    "staerke": "ca. 900 Spanier, ca. 80.000–200.000 indigene Verbündete, 13 Brigantinen",
    "verluste": "einige hundert Spanier, hohe indigene Verluste"
   },
   {
    "name": "Aztekisches Reich",
    "fuehrer": "Cuauhtémoc",
    "staerke": "ca. 100.000 Verteidiger",
    "verluste": "über 100.000 Tote, ein großer Teil durch Hunger und Pocken"
   }
  ],
  "ausgang": "Spanischer Sieg. Cortés ließ Schiffe auf dem See bauen, schnitt Wasser- und Lebensmittelzufuhr ab und kämpfte sich über die Dammwege vor. Eine Pockenepidemie hatte die Verteidiger zuvor dezimiert.",
  "folgen": "Das Aztekenreich endete. Auf den Trümmern entstand Mexiko-Stadt als Hauptstadt Neuspaniens. Amerikanisches Silber finanzierte für zwei Jahrhunderte die spanische Macht. Die Bevölkerung Mexikos sank innerhalb eines Jahrhunderts durch eingeschleppte Krankheiten um schätzungsweise 90 Prozent.",
  "hinweis": "Ohne die Zehntausenden indigenen Verbündeten, die das aztekische Tributsystem abschütteln wollten, wäre die Eroberung unmöglich gewesen. Die Erzählung von wenigen hundert Spaniern gegen ein Reich blendet sie aus.",
  "vertiefung": "columbian-exchange"
 },
 {
  "year": 1526,
  "name": "Erste Schlacht bei Panipat",
  "war": "Gründung des Mogulreichs",
  "text": "Babur schlägt ein weit überlegenes Heer, weil er Feldartillerie und Handfeuerwaffen einsetzt und seine Wagenburg die Elefanten scheuen lässt. Aus dem Sieg entsteht das Mogulreich.",
  "ort": "bei Panipat, nördlich von Delhi",
  "parteien": [
   {
    "name": "Timuriden aus Kabul",
    "fuehrer": "Babur",
    "staerke": "ca. 12.000–15.000, mit Feldartillerie und Musketen",
    "verluste": "gering"
   },
   {
    "name": "Sultanat von Delhi",
    "fuehrer": "Ibrahim Lodi",
    "staerke": "ca. 100.000 und 1.000 Kriegselefanten laut Baburs Bericht",
    "verluste": "ca. 20.000; der Sultan fiel"
   }
  ],
  "ausgang": "Sieg Baburs. Er verband Wagenburg und Artillerie nach osmanischem Vorbild mit umfassenden Reiterangriffen; der Kanonendonner brachte zudem die Elefanten außer Kontrolle.",
  "folgen": "Gründung des Mogulreichs, das Indien bis ins 18. Jahrhundert beherrschte und dessen Bauten – vom Taj Mahal bis zum Roten Fort – bis heute das Bild des Landes prägen.",
  "hinweis": "Die Zahlen stammen aus Baburs eigenem Tagebuch, dem Baburnama. Es ist eine bemerkenswert offene Quelle, aber der Verfasser hatte kein Interesse daran, den Gegner klein zu rechnen."
 },
 {
  "year": 1529,
  "name": "Erste Belagerung Wiens",
  "war": "Osmanische Expansion",
  "text": "Die Habsburger wehren den osmanischen Vormarsch nach Mitteleuropa knapp ab.",
  "ort": "Wien",
  "parteien": [
   {
    "name": "Osmanisches Reich",
    "fuehrer": "Süleyman I. und Ibrahim Pascha",
    "staerke": "ca. 120.000, schwere Artillerie blieb im Schlamm zurück",
    "verluste": "hoch durch Kämpfe, Kälte und Krankheit"
   },
   {
    "name": "Habsburgische Verteidiger",
    "fuehrer": "Niklas Graf Salm",
    "staerke": "ca. 17.000–21.000",
    "verluste": "ca. 1.500"
   }
  ],
  "ausgang": "Die Osmanen brachen die Belagerung nach knapp drei Wochen ab. Ein verregneter Sommer hatte den Vormarsch verzögert; ohne schwere Geschütze und mit einbrechendem Winter war die Stadt nicht zu nehmen.",
  "folgen": "Die osmanische Expansion nach Mitteleuropa erreichte ihre Grenze. Ungarn blieb über anderthalb Jahrhunderte geteilt. In Europa verfestigte sich das Bild der Türkengefahr, das die Politik bis ins 18. Jahrhundert prägte.",
  "hinweis": "Die Legende, das Croissant sei als Spottgebäck aus dieser Belagerung entstanden, ist nicht belegt – ebenso wenig die Kaffee-Geschichte, die sich auf 1683 bezieht."
 },
 {
  "year": 1571,
  "name": "Seeschlacht von Lepanto",
  "war": "Osmanisch-Venezianische Kriege",
  "text": "Die letzte große Schlacht von Ruderflotten. Der Sieg der Heiligen Liga bremst die osmanische Seemacht, ändert aber die Kräfteverhältnisse weniger als oft dargestellt.",
  "ort": "im Golf von Patras, Westgriechenland",
  "parteien": [
   {
    "name": "Heilige Liga: Spanien, Venedig, Papst, Genua",
    "fuehrer": "Don Juan de Austria",
    "staerke": "ca. 210 Galeeren, 6 Galeassen, ca. 70.000 Mann",
    "verluste": "ca. 7.500 Tote, 17 Schiffe"
   },
   {
    "name": "Osmanisches Reich",
    "fuehrer": "Müezzinzade Ali Pascha",
    "staerke": "ca. 250 Galeeren, ca. 80.000 Mann",
    "verluste": "ca. 20.000 Tote, über 130 Schiffe gekapert; 12.000 christliche Rudersklaven befreit"
   }
  ],
  "ausgang": "Sieg der Liga. Die venezianischen Galeassen – schwimmende Geschützplattformen – zerrissen die osmanische Linie, bevor der Nahkampf begann.",
  "folgen": "Die letzte große Galeerenschlacht der Geschichte. Militärisch änderte sie wenig: Die Osmanen hatten die Flotte binnen eines Jahres ersetzt und behielten Zypern. Symbolisch beendete sie den Ruf osmanischer Unbesiegbarkeit zur See. Miguel de Cervantes verlor hier den Gebrauch seiner linken Hand.",
  "hinweis": "Beide Seiten setzten Zehntausende Rudersklaven ein. In den Verlustzahlen tauchen sie kaum auf."
 },
 {
  "year": 1588,
  "name": "Untergang der Spanischen Armada",
  "war": "Anglo-Spanischer Krieg",
  "text": "England wehrt die spanische Invasionsflotte ab und etabliert sich als aufstrebende Seemacht.",
  "ort": "Ärmelkanal, Gravelines und die Nordroute um Schottland",
  "parteien": [
   {
    "name": "England",
    "fuehrer": "Lord Howard of Effingham und Francis Drake",
    "staerke": "ca. 200 Schiffe, davon 34 Kriegsschiffe",
    "verluste": "kein Schiff verloren; tausende Tote später durch Seuchen"
   },
   {
    "name": "Spanien",
    "fuehrer": "Herzog von Medina Sidonia",
    "staerke": "130 Schiffe, ca. 30.000 Mann",
    "verluste": "ca. 60 Schiffe, ca. 15.000 Mann"
   }
  ],
  "ausgang": "Englischer Sieg. Brander sprengten die spanische Formation vor Calais, bei Gravelines entschied die höhere Feuerfolge der englischen Geschütze. Auf dem Rückweg um Schottland und Irland zerstörten Stürme viele Schiffe.",
  "folgen": "Die Invasion Englands unterblieb. Spanien blieb dennoch Seemacht und schlug englische Gegenunternehmungen ab; der Krieg dauerte bis 1604. Für England entstand ein Gründungsmythos, der die spätere Seeherrschaft begleitete.",
  "hinweis": "Der protestantische Wind, den Gedenkmünzen feierten, wirkte erst nach der Entscheidung. Die Ursachen lagen im Plan selbst und in der Artillerietaktik.",
  "vertiefung": "armada"
 },
 {
  "year": 1592,
  "name": "Seeschlacht bei Hansando",
  "war": "Imjin-Krieg",
  "text": "Admiral Yi Sun-sin lockt die japanische Flotte in eine Kranichformation und vernichtet sie. Weil Japans Nachschub übers Meer lief, entschied die See den Landkrieg.",
  "ort": "vor der Insel Hansan, Südkorea",
  "parteien": [
   {
    "name": "Joseon-Korea",
    "fuehrer": "Yi Sun-sin",
    "staerke": "56 Schiffe, darunter Panokseon und Schildkrötenschiffe",
    "verluste": "keine Schiffsverluste"
   },
   {
    "name": "Japan",
    "fuehrer": "Wakisaka Yasuharu",
    "staerke": "ca. 73 Schiffe",
    "verluste": "ca. 47 versenkt, 12 gekapert"
   }
  ],
  "ausgang": "Vollständiger koreanischer Sieg. Yi lockte die japanische Flotte mit einem vorgetäuschten Rückzug in offenes Wasser und schloss sie in einer halbmondförmigen Aufstellung ein, in der seine überlegenen Schiffsgeschütze wirken konnten.",
  "folgen": "Die japanische Nachschublinie über See war unterbrochen; der Vormarsch auf dem Festland kam ins Stocken. Ohne diese Seesiege wäre Korea 1592 vermutlich vollständig besetzt worden.",
  "hinweis": "Ob die Schildkrötenschiffe wirklich mit Eisen gepanzert waren, ist unter Fachleuten umstritten – die Quellen sind uneindeutig, ein Wrack wurde nie gefunden.",
  "vertiefung": "imjin-krieg"
 },
 {
  "year": 1600,
  "name": "Schlacht von Sekigahara",
  "war": "Japanische Reichseinigung",
  "text": "Der Seitenwechsel eines einzigen Fürsten entscheidet die Schlacht. Tokugawa Ieyasu begründet ein Shogunat, das Japan 250 Jahre lang Frieden und Abschottung bringt.",
  "ort": "Sekigahara, Zentraljapan",
  "parteien": [
   {
    "name": "Ost-Armee",
    "fuehrer": "Tokugawa Ieyasu",
    "staerke": "ca. 75.000",
    "verluste": "ca. 4.000–8.000"
   },
   {
    "name": "West-Armee",
    "fuehrer": "Ishida Mitsunari",
    "staerke": "ca. 80.000",
    "verluste": "ca. 8.000–32.000; die Führung wurde hingerichtet"
   }
  ],
  "ausgang": "Sieg Ieyasus binnen weniger Stunden. Entscheidend war der Seitenwechsel Kobayakawa Hideakis mit 15.000 Mann mitten in der Schlacht – abgesprochen, aber lange gezögert.",
  "folgen": "Ieyasu wurde 1603 Shogun. Das Tokugawa-Shogunat hielt 265 Jahre und brachte Japan eine der längsten Friedensperioden der Weltgeschichte – bei weitgehender Abschottung nach außen.",
  "hinweis": "Von den 160.000 Beteiligten kämpfte ein erheblicher Teil gar nicht: Mehrere Fürsten warteten ab, wohin sich das Blatt neigte.",
  "vertiefung": "japan-ieyasu"
 },
 {
  "year": 1620,
  "name": "Schlacht am Weißen Berg",
  "war": "Dreißigjähriger Krieg",
  "ort": "bei Prag",
  "text": "Zwei Stunden Kampf entschieden über die Konfession Böhmens für die nächsten drei Jahrhunderte.",
  "parteien": [
   {
    "name": "Kaiserliche und Katholische Liga",
    "fuehrer": "Johann t'Serclaes von Tilly und Karl Bonaventura von Buquoy",
    "staerke": "ca. 25.000",
    "verluste": "ca. 700"
   },
   {
    "name": "Böhmische Stände und Pfalz",
    "fuehrer": "Christian von Anhalt",
    "staerke": "ca. 21.000",
    "verluste": "ca. 4.000; das Heer löste sich auf"
   }
  ],
  "ausgang": "Kaiserlicher Sieg nach etwa zwei Stunden. Das schlecht bezahlte Ständeheer hielt dem Angriff nicht stand.",
  "folgen": "Der Winterkönig Friedrich V. floh; 27 Anführer wurden 1621 auf dem Prager Altstädter Ring hingerichtet. Böhmen wurde rekatholisiert, protestantischer Adel enteignet, ein Drittel der Bevölkerung wanderte aus oder starb in den Folgejahren. Der Krieg, der hier hätte enden können, dauerte noch 28 Jahre.",
  "hinweis": "Die tschechische Erinnerung sieht in der Schlacht den Beginn der temno, der dunklen Zeit unter habsburgischer Herrschaft.",
  "vertiefung": "dreissigjaehriger-krieg"
 },
 {
  "year": 1631,
  "name": "Schlacht bei Breitenfeld",
  "war": "Dreißigjähriger Krieg",
  "ort": "bei Breitenfeld nördlich von Leipzig",
  "text": "Der erste große protestantische Sieg des Krieges – und die Geburtsstunde einer neuen Art, Heere aufzustellen.",
  "parteien": [
   {
    "name": "Schweden und Sachsen",
    "fuehrer": "Gustav II. Adolf",
    "staerke": "ca. 42.000",
    "verluste": "ca. 5.000, überwiegend Sachsen"
   },
   {
    "name": "Katholische Liga und Kaiserliche",
    "fuehrer": "Johann t'Serclaes von Tilly",
    "staerke": "ca. 35.000",
    "verluste": "ca. 7.600 Tote, 6.000 Gefangene"
   }
  ],
  "ausgang": "Schwedischer Sieg. Als die sächsischen Verbündeten flohen, schwenkte die bewegliche schwedische Aufstellung – kleine Einheiten mit eigener leichter Artillerie – in die entstandene Lücke ein und rollte die schwerfälligen Tercios auf.",
  "folgen": "Der Krieg wendete sich zugunsten der protestantischen Seite; Schweden wurde europäische Großmacht. Gustav Adolfs Militärreform – leichtere Geschütze, gemischte Verbände, salvenweises Feuer – wurde in ganz Europa nachgeahmt.",
  "hinweis": "Ein Jahr später fiel Gustav Adolf bei Lützen. Der schwedische Vormarsch verlor damit seine Führungsfigur, der Krieg aber ging weitere sechzehn Jahre."
 },
 {
  "year": 1683,
  "name": "Schlacht am Kahlenberg (Entsatz Wiens)",
  "war": "Große Türkenkriege",
  "text": "Ein europäisches Entsatzheer unter Jan Sobieski beendet die letzte große osmanische Belagerung Wiens endgültig.",
  "ort": "vor Wien, am Kahlenberg",
  "parteien": [
   {
    "name": "Polen, Kaiserliche und Reichstruppen",
    "fuehrer": "Jan III. Sobieski",
    "staerke": "ca. 70.000–80.000",
    "verluste": "ca. 3.500"
   },
   {
    "name": "Osmanisches Reich",
    "fuehrer": "Großwesir Kara Mustafa Pascha",
    "staerke": "ca. 90.000–150.000",
    "verluste": "ca. 15.000–20.000; das Lager fiel vollständig"
   }
  ],
  "ausgang": "Sieg der Entsatzarmee. Nach zwei Monaten Belagerung stand die Stadt kurz vor dem Fall; der Angriff vom Kahlenberg herab endete mit dem vermutlich größten Reiterangriff der Geschichte – etwa 18.000 Reiter, darunter die polischen Flügelhusaren.",
  "folgen": "Die osmanische Expansion in Mitteleuropa endete endgültig. In den folgenden Jahren fiel Ungarn an die Habsburger. Kara Mustafa wurde auf Befehl des Sultans erdrosselt.",
  "hinweis": "Die Geschichte vom Wiener Kaffeehaus aus erbeuteten osmanischen Kaffeesäcken ist Legende; Kaffee war in Wien schon vorher bekannt."
 },
 {
  "year": 1704,
  "name": "Schlacht bei Höchstädt (Blenheim)",
  "war": "Spanischer Erbfolgekrieg",
  "text": "Ein englisch-österreichisches Heer stoppt entscheidend den französischen Vormarsch in Süddeutschland.",
  "ort": "bei Höchstädt an der Donau, Bayern",
  "parteien": [
   {
    "name": "England, Habsburg und Verbündete",
    "fuehrer": "Marlborough und Prinz Eugen von Savoyen",
    "staerke": "ca. 52.000",
    "verluste": "ca. 12.000"
   },
   {
    "name": "Frankreich und Bayern",
    "fuehrer": "Marschall Tallard und Kurfürst Max Emanuel",
    "staerke": "ca. 56.000",
    "verluste": "ca. 20.000 Tote und Verwundete, 14.000 Gefangene, darunter der Marschall"
   }
  ],
  "ausgang": "Sieg der Verbündeten. Marlborough band die Flügel und stieß mit der Reiterei durch die geschwächte Mitte.",
  "folgen": "Die erste schwere Niederlage Ludwigs XIV. im Feld. Wien war gerettet, Bayern besetzt, der Nimbus der französischen Unbesiegbarkeit dahin. Marlborough erhielt vom Parlament Blenheim Palace – dort wurde 170 Jahre später Winston Churchill geboren.",
  "hinweis": "Der deutsche und der englische Name bezeichnen dieselbe Schlacht: Blenheim ist die englische Form von Blindheim, dem Nachbarort."
 },
 {
  "year": 1709,
  "name": "Schlacht bei Poltawa",
  "war": "Großer Nordischer Krieg",
  "text": "Peter der Große besiegt Schweden entscheidend – Russland löst Schweden als nordeuropäische Großmacht ab.",
  "ort": "bei Poltawa, heutige Ukraine",
  "parteien": [
   {
    "name": "Russland",
    "fuehrer": "Zar Peter I.",
    "staerke": "ca. 45.000 mit 100 Geschützen",
    "verluste": "ca. 4.500"
   },
   {
    "name": "Schweden und Kosaken",
    "fuehrer": "Karl XII. und Iwan Masepa",
    "staerke": "ca. 20.000 mit 4 Geschützen",
    "verluste": "ca. 7.000 Tote, ca. 2.800 Gefangene; wenige Tage später kapitulierten weitere 20.000"
   }
  ],
  "ausgang": "Russischer Sieg. Karl XII. war zuvor verwundet worden und konnte nicht selbst führen; das schwedische Heer war nach einem harten Winter im Feindesland ausgezehrt und der russischen Artillerie hoffnungslos unterlegen.",
  "folgen": "Schweden verlor seine Stellung als Großmacht, Russland trat an seine Stelle. Peters Reformen erhielten ihre militärische Bestätigung. Karl floh ins Osmanische Reich und kehrte erst nach fünf Jahren zurück.",
  "hinweis": "Die Kapitulation bei Perewolotschna drei Tage später kostete Schweden mehr Soldaten als die Schlacht selbst.",
  "vertiefung": "peter-der-grosse"
 },
 {
  "year": 1757,
  "name": "Schlacht bei Plassey",
  "war": "Britische Expansion in Indien",
  "text": "Ein vergleichsweise kleines Gefecht mit gewaltigen Folgen: Die Ostindien-Kompanie wird zur Territorialmacht in Bengalen.",
  "ort": "bei Palashi, Bengalen",
  "parteien": [
   {
    "name": "Britische Ostindien-Kompanie",
    "fuehrer": "Robert Clive",
    "staerke": "ca. 3.000, davon 800 Europäer",
    "verluste": "ca. 70"
   },
   {
    "name": "Nawab von Bengalen und französische Hilfstruppen",
    "fuehrer": "Siraj ud-Daula",
    "staerke": "ca. 50.000 mit Artillerie und Elefanten",
    "verluste": "ca. 500"
   }
  ],
  "ausgang": "Sieg der Kompanie – erkauft, nicht erkämpft. Clive hatte den Heerführer Mir Jafar vorab bestochen; dessen Truppen, der größte Teil des Heeres, griffen nicht ein. Ein Regenschauer machte zudem das Pulver der bengalischen Geschütze unbrauchbar, das der Briten war abgedeckt.",
  "folgen": "Bengalen fiel unter die Kontrolle eines Handelsunternehmens. Aus den Steuereinnahmen der reichsten Provinz Indiens finanzierte die Kompanie ihre weitere Ausdehnung – der Beginn der britischen Herrschaft über Indien. Clive selbst nahm ein Vermögen mit nach England und musste sich später im Parlament rechtfertigen.",
  "hinweis": "Mit 70 Toten auf der Siegerseite ist Plassey kaum eine Schlacht im militärischen Sinn. Ihre Folgen gehören trotzdem zu den weitreichendsten der Neuzeit."
 },
 {
  "year": 1781,
  "name": "Belagerung von Yorktown",
  "war": "Amerikanischer Unabhängigkeitskrieg",
  "text": "Die Kapitulation der Briten entscheidet den Krieg – ermöglicht durch die französische Flotte, ohne die der Sieg nicht denkbar gewesen wäre.",
  "ort": "Yorktown, Virginia",
  "parteien": [
   {
    "name": "USA und Frankreich",
    "fuehrer": "George Washington und Rochambeau; zur See de Grasse",
    "staerke": "ca. 8.800 Amerikaner, 7.800 Franzosen, 29 Linienschiffe",
    "verluste": "ca. 400"
   },
   {
    "name": "Großbritannien",
    "fuehrer": "Charles Cornwallis",
    "staerke": "ca. 8.000",
    "verluste": "ca. 550 Tote und Verwundete; das ganze Heer geriet in Gefangenschaft"
   }
  ],
  "ausgang": "Kapitulation der Briten nach drei Wochen. Entscheidend war die französische Flotte: Sie schlug die britische bei der Chesapeake Bay ab und schnitt Cornwallis von jeder Rettung über See ab.",
  "folgen": "Die letzte große Schlacht des Unabhängigkeitskrieges. Zwei Jahre später erkannte Großbritannien im Frieden von Paris die Unabhängigkeit der USA an. Frankreichs Beteiligung trieb die eigenen Staatsfinanzen in die Krise, die 1789 in die Revolution mündete.",
  "hinweis": "Ohne die französische Flotte wäre Yorktown nicht gefallen. In der amerikanischen Erinnerung tritt dieser Anteil oft zurück.",
  "vertiefung": "amerikanische-revolution"
 },
 {
  "year": 1798,
  "name": "Seeschlacht bei Abukir",
  "war": "Napoleonische Kriege",
  "ort": "Bucht von Abukir, Ägypten",
  "text": "Nelson vernichtete die französische Flotte vor Ägypten und schnitt Napoleons Heer von der Heimat ab.",
  "parteien": [
   {
    "name": "Großbritannien",
    "fuehrer": "Horatio Nelson",
    "staerke": "14 Linienschiffe",
    "verluste": "218 Tote, kein Schiff verloren"
   },
   {
    "name": "Frankreich",
    "fuehrer": "François-Paul Brueys d'Aigalliers",
    "staerke": "13 Linienschiffe, 4 Fregatten",
    "verluste": "11 Schiffe erobert oder zerstört, ca. 1.700 Tote; der Admiral fiel"
   }
  ],
  "ausgang": "Britischer Sieg. Nelson ließ einen Teil seiner Schiffe zwischen die französische Linie und die Küste segeln – die dortigen Geschütze waren nicht einmal bemannt. Das Flaggschiff L'Orient explodierte.",
  "folgen": "Napoleons Ägyptenfeldzug war strategisch gescheitert; er selbst kehrte 1799 heimlich nach Frankreich zurück und ergriff dort die Macht. Der wissenschaftliche Teil der Expedition wirkte länger als der militärische: Ein Jahr zuvor war der Stein von Rosetta gefunden worden, der später die Hieroglyphen erschloss.",
  "hinweis": "Der französische Name Bataille d'Aboukir kann auch die Landschlacht von 1799 meinen; im Englischen heißt die Seeschlacht Battle of the Nile.",
  "vertiefung": "hieroglyphen"
 },
 {
  "year": 1805,
  "name": "Schlacht bei Trafalgar",
  "war": "Napoleonische Kriege",
  "text": "Admiral Nelson vernichtet die französisch-spanische Flotte und sichert Großbritannien die Seeherrschaft für ein Jahrhundert.",
  "ort": "vor Kap Trafalgar, Südspanien",
  "parteien": [
   {
    "name": "Großbritannien",
    "fuehrer": "Horatio Nelson",
    "staerke": "27 Linienschiffe",
    "verluste": "ca. 450 Tote, kein Schiff verloren; Nelson fiel"
   },
   {
    "name": "Frankreich und Spanien",
    "fuehrer": "Pierre de Villeneuve",
    "staerke": "33 Linienschiffe",
    "verluste": "ca. 4.400 Tote, 22 Schiffe verloren"
   }
  ],
  "ausgang": "Britischer Sieg. Nelson durchbrach die gegnerische Linie in zwei Kolonnen quer statt parallel zu segeln – riskant beim Anlauf, vernichtend danach, weil die eigenen Breitseiten die Gegner der Länge nach trafen.",
  "folgen": "Napoleons Invasionspläne gegen England waren erledigt; Großbritannien beherrschte für ein Jahrhundert die Meere. Nelson wurde von einem Scharfschützen getroffen und starb, als der Sieg feststand.",
  "hinweis": "Trafalgar entschied den Krieg nicht – Napoleon siegte sechs Wochen später bei Austerlitz. Es entschied aber, dass er zur See nichts mehr ausrichten konnte."
 },
 {
  "year": 1805,
  "name": "Schlacht bei Austerlitz",
  "war": "Napoleonische Kriege",
  "text": "Napoleons taktisches Meisterstück gegen eine österreichisch-russische Übermacht gilt als seine glänzendste Schlacht.",
  "ort": "bei Austerlitz, heutiges Tschechien",
  "parteien": [
   {
    "name": "Frankreich",
    "fuehrer": "Napoleon Bonaparte",
    "staerke": "ca. 68.000",
    "verluste": "ca. 1.300 Tote, 7.000 Verwundete"
   },
   {
    "name": "Russland und Österreich",
    "fuehrer": "Zar Alexander I. und Kaiser Franz II.",
    "staerke": "ca. 85.000",
    "verluste": "ca. 16.000 Tote und Verwundete, 12.000 Gefangene, 180 Geschütze"
   }
  ],
  "ausgang": "Napoleons überzeugendster Sieg. Er gab seinen rechten Flügel absichtlich schwach, lockte die Verbündeten dorthin und stieß dann in die geräumte Mitte auf den Pratzenberg.",
  "folgen": "Österreich schied aus dem Krieg aus, das Heilige Römische Reich wurde ein Jahr später aufgelöst. Der Rheinbund entstand unter französischem Schutz. Die Schlacht der drei Kaiser gilt bis heute als Musterbeispiel operativer Führung.",
  "hinweis": "Die Erzählung, hunderte Russen seien beim Rückzug im Eis eingebrochen und ertrunken, geht auf Napoleons Bulletin zurück. Beim Abfischen der Teiche fand man wenige Leichen."
 },
 {
  "year": 1813,
  "name": "Völkerschlacht bei Leipzig",
  "war": "Napoleonische Kriege",
  "text": "Die größte Schlacht Europas vor dem 20. Jahrhundert besiegelt Napoleons Niederlage in Deutschland.",
  "ort": "bei Leipzig",
  "parteien": [
   {
    "name": "Russland, Preußen, Österreich, Schweden",
    "fuehrer": "Fürst Schwarzenberg, Blücher, Bernadotte",
    "staerke": "ca. 380.000 mit 1.500 Geschützen",
    "verluste": "ca. 54.000"
   },
   {
    "name": "Frankreich und Rheinbund",
    "fuehrer": "Napoleon Bonaparte",
    "staerke": "ca. 200.000 mit 700 Geschützen",
    "verluste": "ca. 38.000 Tote und Verwundete, 30.000 Gefangene"
   }
  ],
  "ausgang": "Sieg der Verbündeten nach vier Tagen. Sächsische Truppen liefen während der Schlacht über. Beim Rückzug wurde die einzige Elsterbrücke zu früh gesprengt – tausende Franzosen blieben zurück.",
  "folgen": "Die größte Schlacht Europas vor dem Ersten Weltkrieg. Napoleons Herrschaft über Deutschland endete, der Rheinbund zerfiel, ein halbes Jahr später war Paris besetzt.",
  "hinweis": "Rund 600.000 Soldaten aus mehr als einem Dutzend Ländern kämpften – daher der Name. Erst Verdun übertraf diese Größenordnung wieder."
 },
 {
  "year": 1815,
  "name": "Schlacht bei Waterloo",
  "war": "Napoleonische Kriege",
  "text": "Die endgültige Niederlage Napoleons gegen eine britisch-preußische Allianz beendet die napoleonische Ära in Europa.",
  "ort": "bei Waterloo, südlich von Brüssel",
  "parteien": [
   {
    "name": "Großbritannien, Niederlande, Preußen",
    "fuehrer": "Herzog von Wellington und Gebhard Leberecht von Blücher",
    "staerke": "ca. 68.000 unter Wellington, ca. 50.000 Preußen",
    "verluste": "ca. 22.000 zusammen"
   },
   {
    "name": "Frankreich",
    "fuehrer": "Napoleon Bonaparte",
    "staerke": "ca. 73.000",
    "verluste": "ca. 25.000 Tote und Verwundete, 8.000 Gefangene"
   }
  ],
  "ausgang": "Sieg der Verbündeten. Wellington hielt den ganzen Tag in Verteidigung aus; am Abend traf Blücher mit den Preußen in Napoleons rechter Flanke ein und entschied die Schlacht.",
  "folgen": "Ende der Herrschaft der Hundert Tage. Napoleon dankte ab und starb 1821 auf St. Helena. Die auf dem Wiener Kongress ausgehandelte Ordnung hielt in Grundzügen bis 1914.",
  "hinweis": "Ohne das preußische Eintreffen wäre Wellington vermutlich unterlegen. In der britischen Erinnerung tritt Blüchers Anteil oft zurück, in der deutschen Wellingtons."
 },
 {
  "year": 1836,
  "name": "Schlacht von The Alamo",
  "war": "Texanischer Unabhängigkeitskrieg",
  "text": "Die Niederlage einer kleinen texanischen Verteidigergruppe wird zum identitätsstiftenden Mythos im Kampf um die Unabhängigkeit von Mexiko.",
  "ort": "San Antonio, Texas",
  "parteien": [
   {
    "name": "Texanische Aufständische",
    "fuehrer": "William B. Travis, James Bowie, Davy Crockett",
    "staerke": "ca. 180–260",
    "verluste": "nahezu alle Verteidiger gefallen"
   },
   {
    "name": "Mexiko",
    "fuehrer": "Antonio López de Santa Anna",
    "staerke": "ca. 1.800–6.000",
    "verluste": "ca. 400–600"
   }
  ],
  "ausgang": "Mexikanischer Sieg nach 13 Tagen Belagerung. Die Verteidiger wurden bis auf wenige Frauen, Kinder und Bedienstete getötet.",
  "folgen": "Remember the Alamo wurde zum Schlachtruf. Sechs Wochen später schlug Sam Houston bei San Jacinto in achtzehn Minuten das mexikanische Heer und nahm Santa Anna gefangen – Texas wurde unabhängig und 1845 Teil der USA.",
  "hinweis": "Die Zahlen schwanken erheblich. Zur Rolle der Sklaverei wird in der US-Erinnerung selten erwähnt, dass Mexiko sie 1829 abgeschafft hatte und die texanischen Siedler an ihr festhalten wollten."
 },
 {
  "year": 1836,
  "name": "Schlacht von San Jacinto",
  "war": "Texanischer Unabhängigkeitskrieg",
  "ort": "bei San Jacinto, Texas",
  "text": "Achtzehn Minuten Kampf entschieden über die Zukunft eines Gebiets von der Größe Frankreichs.",
  "parteien": [
   {
    "name": "Texanische Aufständische",
    "fuehrer": "Sam Houston",
    "staerke": "ca. 900",
    "verluste": "9 Tote, 30 Verwundete"
   },
   {
    "name": "Mexiko",
    "fuehrer": "Antonio López de Santa Anna",
    "staerke": "ca. 1.400",
    "verluste": "ca. 650 Tote, 300 Verwundete, 700 Gefangene, darunter der Präsident"
   }
  ],
  "ausgang": "Vollständiger texanischer Sieg. Houston griff am Nachmittag an, während das mexikanische Lager Siesta hielt; die Wachen waren abgezogen.",
  "folgen": "Santa Anna erkannte in Gefangenschaft die Unabhängigkeit an. Texas wurde 1845 Teil der USA, was zum Krieg mit Mexiko führte – an dessen Ende Mexiko ein Drittel seines Staatsgebiets verlor, darunter Kalifornien.",
  "hinweis": "Die Schlacht dauerte achtzehn Minuten, das anschließende Töten von Fliehenden mehrere Stunden. Der Schlachtruf lautete Remember the Alamo."
 },
 {
  "year": 1863,
  "name": "Schlacht von Gettysburg",
  "war": "Amerikanischer Bürgerkrieg",
  "text": "Die verlustreichste Schlacht des Krieges beendet den Vorstoß der Konföderierten nach Norden.",
  "ort": "Gettysburg, Pennsylvania",
  "parteien": [
   {
    "name": "Union",
    "fuehrer": "George G. Meade",
    "staerke": "ca. 94.000",
    "verluste": "ca. 23.000 Tote, Verwundete und Vermisste"
   },
   {
    "name": "Konföderation",
    "fuehrer": "Robert E. Lee",
    "staerke": "ca. 71.000",
    "verluste": "ca. 28.000 Tote, Verwundete und Vermisste"
   }
  ],
  "ausgang": "Sieg der Union nach drei Tagen. Am dritten Tag ließ Lee 12.500 Mann über einen offenen Kilometer gegen befestigte Höhen angehen – Pickett's Charge; über die Hälfte kam nicht zurück.",
  "folgen": "Lees letzter Vorstoß in den Norden war gescheitert; am Tag darauf fiel Vicksburg im Westen. Die Konföderation kam nie wieder in die Offensive. Vier Monate später hielt Lincoln bei der Einweihung des Soldatenfriedhofs eine Rede von zwei Minuten, die zu den bekanntesten der Weltgeschichte wurde.",
  "hinweis": "Mit über 50.000 Ausgefallenen in drei Tagen die verlustreichste Schlacht, die je auf amerikanischem Boden geschlagen wurde.",
  "vertiefung": "amerikanischer-buergerkrieg"
 },
 {
  "year": 1863,
  "name": "Belagerung von Vicksburg",
  "war": "Amerikanischer Bürgerkrieg",
  "ort": "Vicksburg am Mississippi",
  "text": "Die Kapitulation am Tag nach Gettysburg zerschnitt die Konföderation entlang des Mississippi.",
  "parteien": [
   {
    "name": "Union",
    "fuehrer": "Ulysses S. Grant",
    "staerke": "ca. 77.000",
    "verluste": "ca. 10.000"
   },
   {
    "name": "Konföderation",
    "fuehrer": "John C. Pemberton",
    "staerke": "ca. 33.000",
    "verluste": "ca. 3.200 Gefallene und Verwundete; 29.500 gerieten in Gefangenschaft"
   }
  ],
  "ausgang": "Kapitulation der Konföderierten am 4. Juli nach 47 Tagen Belagerung. Grant hatte seine Nachschublinie bewusst aufgegeben und die Stadt von Süden her umfasst.",
  "folgen": "Die Union kontrollierte den gesamten Mississippi; die Konföderation war in zwei Teile geschnitten. Zusammen mit Gettysburg am Vortag gilt der Juli 1863 als Wendepunkt des Krieges. Grant wurde zum Oberbefehlshaber – und später Präsident.",
  "hinweis": "Vicksburg feierte den 4. Juli danach achtzig Jahre lang nicht mehr."
 },
 {
  "year": 1866,
  "name": "Schlacht von Königgrätz",
  "war": "Deutscher Krieg",
  "text": "Preußens Sieg über Österreich entscheidet die Vorherrschaft im künftigen deutschen Nationalstaat.",
  "ort": "bei Königgrätz, heutiges Hradec Králové",
  "parteien": [
   {
    "name": "Preußen",
    "fuehrer": "Helmuth von Moltke und König Wilhelm I.",
    "staerke": "ca. 221.000",
    "verluste": "ca. 9.000"
   },
   {
    "name": "Österreich und Sachsen",
    "fuehrer": "Ludwig von Benedek",
    "staerke": "ca. 215.000",
    "verluste": "ca. 24.000 Tote und Verwundete, 20.000 Gefangene"
   }
  ],
  "ausgang": "Preußischer Sieg. Moltke ließ drei Armeen getrennt marschieren und erst auf dem Schlachtfeld zusammentreffen – möglich durch Eisenbahn und Telegraf. Das preußische Zündnadelgewehr erlaubte das Laden im Liegen und feuerte fünfmal so schnell wie die österreichischen Vorderlader.",
  "folgen": "Österreich schied aus Deutschland aus; Preußen führte den Norddeutschen Bund und damit den Weg zur Reichsgründung 1871. Bismarck setzte gegen den König einen milden Frieden durch, um Österreich als späteren Partner nicht zu verlieren.",
  "hinweis": "Königgrätz gilt als erste Schlacht, in der Eisenbahn und Telegraf den Ausgang mitentschieden – Logistik wurde zur Waffe.",
  "vertiefung": "reichsgruendung"
 },
 {
  "year": 1870,
  "name": "Schlacht bei Sedan",
  "war": "Deutsch-Französischer Krieg",
  "text": "Preußens entscheidender Sieg führt zur Gefangennahme Napoleons III. und ebnet den Weg zur deutschen Reichsgründung.",
  "ort": "bei Sedan, Nordostfrankreich",
  "parteien": [
   {
    "name": "Norddeutscher Bund und süddeutsche Staaten",
    "fuehrer": "Helmuth von Moltke",
    "staerke": "ca. 200.000 mit überlegener Artillerie",
    "verluste": "ca. 9.000"
   },
   {
    "name": "Frankreich",
    "fuehrer": "Kaiser Napoleon III. und Marschall MacMahon",
    "staerke": "ca. 120.000",
    "verluste": "ca. 17.000 Tote und Verwundete; 104.000 Gefangene, darunter der Kaiser"
   }
  ],
  "ausgang": "Deutscher Sieg. Die französische Armee wurde in einem Talkessel eingeschlossen und von gezogenen Stahlgeschützen aus der Höhe zusammengeschossen. Napoleon III. kapitulierte persönlich.",
  "folgen": "Das Zweite Kaiserreich brach zusammen, in Paris wurde die Republik ausgerufen. Der Krieg ging trotzdem weiter bis Januar 1871 – mit der Belagerung von Paris und der Kaiserproklamation in Versailles. Elsass-Lothringen ging an das neue Deutsche Reich und belastete das Verhältnis beider Länder bis 1945.",
  "hinweis": "Der Sedantag wurde im Kaiserreich zum nationalen Feiertag. In Frankreich hieß dieselbe Erinnerung revanche."
 },
 {
  "year": 1879,
  "name": "Schlacht bei Isandlwana",
  "war": "Zulukrieg",
  "text": "Eine Zulu-Armee vernichtet eine britische Kolonne mit Gewehren. Der Schock im viktorianischen England war groß – und führte zu einer umso härteren Kriegführung in den Monaten danach.",
  "ort": "Isandlwana, Zululand",
  "parteien": [
   {
    "name": "Zulu-Reich",
    "fuehrer": "Ntshingwayo kaMahole",
    "staerke": "ca. 20.000",
    "verluste": "ca. 1.000–3.000"
   },
   {
    "name": "Großbritannien und Hilfstruppen",
    "fuehrer": "Anthony Durnford und Henry Pulleine",
    "staerke": "ca. 1.800",
    "verluste": "ca. 1.300 gefallen"
   }
  ],
  "ausgang": "Vernichtender Zulu-Sieg. Die Zulu griffen in der Formation der Büffelhörner an – Mitte bindet, Hörner umfassen. Das britische Lager war nicht verschanzt, die Munitionsausgabe stockte.",
  "folgen": "Die schwerste Niederlage der britischen Armee gegen eine technisch unterlegene Streitmacht. London reagierte mit massiver Verstärkung; noch im selben Jahr fiel das Zulu-Reich. Am Abend desselben Tages hielten 150 Briten in Rorke's Drift gegen 3.000 Zulu stand – diese Episode wurde gezielt in den Vordergrund gerückt, um die Katastrophe zu überdecken.",
  "hinweis": "Elf Victoria-Kreuze für Rorke's Drift, die höchste Zahl für ein einzelnes Gefecht: eine Auszeichnungspolitik mit Nachrichtenwirkung."
 },
 {
  "year": 1896,
  "name": "Schlacht von Adwa",
  "war": "Italienisch-Äthiopischer Krieg",
  "text": "Menelik II. schlägt die italienische Invasionsarmee vernichtend. Äthiopien bleibt als einziger afrikanischer Staat unkolonisiert; der Sieg wird weltweit zum Bezugspunkt antikolonialer Bewegungen.",
  "ort": "bei Adwa, Nordäthiopien",
  "parteien": [
   {
    "name": "Äthiopisches Kaiserreich",
    "fuehrer": "Menelik II. und Kaiserin Taytu Betul",
    "staerke": "ca. 100.000, davon ein großer Teil mit modernen Gewehren",
    "verluste": "ca. 4.000–7.000"
   },
   {
    "name": "Königreich Italien und Askari-Truppen",
    "fuehrer": "Oreste Baratieri",
    "staerke": "ca. 17.000",
    "verluste": "ca. 7.000 Tote, 3.000 Gefangene"
   }
  ],
  "ausgang": "Vollständiger äthiopischer Sieg. Die italienischen Kolonnen marschierten nachts nach fehlerhaften Karten und trafen einzeln und getrennt auf ein weit überlegenes, gut bewaffnetes Heer.",
  "folgen": "Äthiopien blieb als einziger afrikanischer Staat unkolonisiert. Italien musste die Unabhängigkeit im Vertrag von Addis Abeba anerkennen. Der Sieg wurde weltweit zum Bezugspunkt antikolonialer Bewegungen und später des Panafrikanismus.",
  "hinweis": "Menelik hatte über Jahre systematisch moderne Gewehre eingekauft – auch von Italien selbst. Der Sieg war keine Überraschung der Technik, sondern das Ergebnis vorausschauender Rüstung."
 },
 {
  "year": 1898,
  "name": "Schlacht von Omdurman",
  "war": "Mahdi-Aufstand im Sudan",
  "text": "Maxim-Maschinengewehre und Artillerie töten Tausende, während die britischen Verluste im niedrigen dreistelligen Bereich bleiben. Kein anderes Gefecht zeigt das technische Gefälle der Hochphase des Imperialismus so deutlich.",
  "ort": "bei Omdurman am Nil, Sudan",
  "parteien": [
   {
    "name": "Großbritannien und Ägypten",
    "fuehrer": "Herbert Kitchener",
    "staerke": "ca. 25.000 mit Maxim-Maschinengewehren und Kanonenbooten",
    "verluste": "ca. 50 Tote"
   },
   {
    "name": "Mahdisten",
    "fuehrer": "Abdallahi ibn Muhammad",
    "staerke": "ca. 50.000",
    "verluste": "ca. 10.000 Tote, 13.000 Verwundete, 5.000 Gefangene"
   }
  ],
  "ausgang": "Britischer Sieg in wenigen Stunden. Angreifende Reihen wurden auf offener Ebene von Maschinengewehren und Schnellfeuerartillerie niedergemäht, bevor sie in Nahkampfreichweite kamen.",
  "folgen": "Der Sudan wurde britisch-ägyptisches Kondominium. Der junge Winston Churchill nahm als Offizier und Korrespondent teil und beschrieb die Schlacht später kritisch. Omdurman gilt als Sinnbild dafür, wie industrielle Feuerkraft koloniale Eroberungen ermöglichte.",
  "hinweis": "50 gegen 10.000 Tote ist kein Kräftemessen mehr. Sechzehn Jahre später traf dieselbe Feuerkraft an der Somme auf europäische Soldaten."
 },
 {
  "year": 1904,
  "name": "Belagerung von Port Arthur",
  "war": "Russisch-Japanischer Krieg",
  "ort": "Port Arthur, heutiges Lüshunkou in China",
  "text": "Elf Monate Grabenkrieg mit Maschinengewehren, Stacheldraht und schwerer Artillerie – eine Vorwegnahme des Ersten Weltkriegs, die kaum jemand auswertete.",
  "parteien": [
   {
    "name": "Japan",
    "fuehrer": "Nogi Maresuke",
    "staerke": "ca. 90.000–150.000",
    "verluste": "ca. 58.000, darunter beide Söhne des Befehlshabers"
   },
   {
    "name": "Russland",
    "fuehrer": "Anatoli Stessel",
    "staerke": "ca. 40.000",
    "verluste": "ca. 31.000; der Rest geriet in Gefangenschaft"
   }
  ],
  "ausgang": "Japanischer Sieg nach elf Monaten. Frontalangriffe gegen befestigte Höhen kosteten zehntausende Leben, bis der 203-Meter-Hügel fiel und die Artillerie den Hafen beschießen konnte.",
  "folgen": "Die russische Pazifikflotte wurde im Hafen versenkt; deshalb musste die Ostseeflotte um die halbe Welt fahren – und wurde bei Tsushima vernichtet. Militärbeobachter aus ganz Europa sahen zu, wie Maschinengewehre Angriffe zerschlugen, und zogen daraus zehn Jahre später kaum Konsequenzen.",
  "hinweis": "Port Arthur zeigte alle Merkmale des späteren Stellungskriegs. Die europäischen Generalstäbe deuteten es überwiegend als asiatische Besonderheit."
 },
 {
  "year": 1905,
  "name": "Seeschlacht bei Tsushima",
  "war": "Russisch-Japanischer Krieg",
  "text": "Japan vernichtet die russische Ostseeflotte – erster Sieg einer asiatischen über eine europäische Großmacht zur See.",
  "ort": "Meerenge von Tsushima zwischen Korea und Japan",
  "parteien": [
   {
    "name": "Japan",
    "fuehrer": "Tōgō Heihachirō",
    "staerke": "4 Schlachtschiffe, 27 Kreuzer, zahlreiche Torpedoboote",
    "verluste": "3 Torpedoboote, 117 Tote"
   },
   {
    "name": "Russland",
    "fuehrer": "Sinowi Roschestwenski",
    "staerke": "11 Schlachtschiffe und weitere Einheiten nach 33.000 km Anfahrt",
    "verluste": "21 Schiffe versenkt, 7 gekapert, ca. 5.000 Tote, 6.000 Gefangene"
   }
  ],
  "ausgang": "Nahezu vollständige japanische Vernichtung der russischen Flotte in zwei Tagen. Tōgō kreuzte den russischen Kurs und brachte alle Breitseiten zur Wirkung; die russischen Schiffe waren nach sieben Monaten Fahrt bewuchert und langsam.",
  "folgen": "Erster Sieg einer asiatischen Macht über eine europäische Großmacht in einer modernen Seeschlacht. Russland musste Frieden schließen; die Niederlage löste die Revolution von 1905 aus. In Asien wirkte sie als Signal, dass europäische Überlegenheit kein Naturgesetz war.",
  "hinweis": "Die russische Flotte war von der Ostsee um Afrika gefahren, weil Großbritannien den Suezkanal sperrte – 33.000 Kilometer ohne eigene Stützpunkte."
 },
 {
  "year": 1914,
  "name": "Erste Marneschlacht",
  "war": "Erster Weltkrieg",
  "text": "Stoppt den deutschen Vormarsch auf Paris und lässt den Krieg im Westen zum jahrelangen Stellungskrieg erstarren.",
  "ort": "an der Marne, östlich von Paris",
  "parteien": [
   {
    "name": "Frankreich und Großbritannien",
    "fuehrer": "Joseph Joffre und John French",
    "staerke": "ca. 1.070.000",
    "verluste": "ca. 263.000, davon 81.000 Tote"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Helmuth von Moltke der Jüngere",
    "staerke": "ca. 1.485.000",
    "verluste": "ca. 250.000"
   }
  ],
  "ausgang": "Sieg der Alliierten. Eine Lücke zwischen der 1. und 2. deutschen Armee wurde ausgenutzt; die deutsche Führung ordnete den Rückzug hinter die Aisne an. Pariser Taxis brachten Teile der Verstärkung an die Front.",
  "folgen": "Der Schlieffen-Plan war gescheitert – ein schneller Sieg im Westen nicht mehr möglich. Beide Seiten gruben sich ein; die Front erstarrte für vier Jahre auf fast derselben Linie. Der Krieg, der bis Weihnachten dauern sollte, dauerte 51 Monate.",
  "hinweis": "Die Marne ist die Schlacht mit den meisten Beteiligten der Geschichte bis dahin. Die Taxis von Paris brachten etwa 5.000 Soldaten – militärisch wenig, symbolisch enorm.",
  "vertiefung": "stellungskrieg"
 },
 {
  "year": 1914,
  "name": "Schlacht bei Tannenberg",
  "war": "Erster Weltkrieg",
  "text": "Deutschland fügt Russland eine schwere Niederlage an der Ostfront zu – begründet den Mythos um Paul von Hindenburg.",
  "ort": "bei Allenstein in Ostpreußen",
  "parteien": [
   {
    "name": "Deutsches Reich",
    "fuehrer": "Paul von Hindenburg und Erich Ludendorff, Planung Max Hoffmann",
    "staerke": "ca. 150.000",
    "verluste": "ca. 12.000"
   },
   {
    "name": "Russisches Reich",
    "fuehrer": "Alexander Samsonow",
    "staerke": "ca. 230.000",
    "verluste": "ca. 50.000 Tote und Verwundete, 92.000 Gefangene; der Befehlshaber nahm sich das Leben"
   }
  ],
  "ausgang": "Deutscher Sieg durch Umfassung. Die Russen funkten unverschlüsselt; die deutsche Führung wusste, wo die Lücke zwischen den beiden russischen Armeen lag, und schlug sie einzeln.",
  "folgen": "Ostpreußen war gesichert. Hindenburg und Ludendorff wurden zu Nationalhelden und übernahmen 1916 faktisch die Führung des Reiches – mit Folgen weit über den Krieg hinaus. Der Name wurde bewusst gewählt: als Revanche für die Niederlage des Deutschen Ordens 1410.",
  "hinweis": "Die Schlacht fand nicht bei Tannenberg statt. Die Umbenennung war ein politischer Akt."
 },
 {
  "year": 1915,
  "name": "Landung bei Gallipoli",
  "war": "Erster Weltkrieg",
  "ort": "Halbinsel Gallipoli, Dardanellen",
  "text": "Der Versuch, das Osmanische Reich aus dem Krieg zu werfen, endete nach acht Monaten in einer verlustreichen Räumung.",
  "parteien": [
   {
    "name": "Großbritannien, Frankreich, Australien, Neuseeland, Indien",
    "fuehrer": "Ian Hamilton",
    "staerke": "ca. 490.000",
    "verluste": "ca. 44.000 Tote, 97.000 Verwundete"
   },
   {
    "name": "Osmanisches Reich und Deutschland",
    "fuehrer": "Otto Liman von Sanders und Mustafa Kemal",
    "staerke": "ca. 315.000",
    "verluste": "ca. 87.000 Tote, 165.000 Verwundete"
   }
  ],
  "ausgang": "Osmanischer Abwehrerfolg. Die Landungstruppen kamen nie über die Küstenstreifen hinaus; die Räumung im Winter war die einzige gelungene Operation des ganzen Unternehmens.",
  "folgen": "Winston Churchill, der Urheber des Plans, musste als Marineminister zurücktreten. Mustafa Kemal wurde durch seine Rolle bekannt und wurde später als Atatürk Staatsgründer der Türkei. In Australien und Neuseeland gilt der 25. April – Anzac Day – bis heute als nationaler Gedenktag und Geburtsstunde eines eigenen Selbstverständnisses.",
  "hinweis": "Eine Schlacht, die drei Nationen ihre Gründungserzählung gab: Türkei, Australien und Neuseeland.",
  "vertiefung": "stellungskrieg"
 },
 {
  "year": 1916,
  "name": "Schlacht um Verdun",
  "war": "Erster Weltkrieg",
  "text": "Symbol des industrialisierten Massensterbens im Stellungskrieg mit über 700.000 Opfern.",
  "ort": "Verdun an der Maas",
  "parteien": [
   {
    "name": "Frankreich",
    "fuehrer": "Philippe Pétain und Robert Nivelle",
    "staerke": "ca. 1.140.000 im Wechsel",
    "verluste": "ca. 377.000, davon ca. 163.000 Tote"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Erich von Falkenhayn und Kronprinz Wilhelm",
    "staerke": "ca. 1.250.000 im Wechsel",
    "verluste": "ca. 337.000, davon ca. 143.000 Tote"
   }
  ],
  "ausgang": "Ohne Entscheidung nach zehn Monaten. Die Front lag am Ende fast dort, wo sie begonnen hatte.",
  "folgen": "Verdun wurde zum Sinnbild der Materialschlacht. Die französische Führung ließ die Divisionen im Wechsel durchlaufen, sodass fast die gesamte Armee dort im Einsatz war – daher die tiefe Verankerung in der Erinnerung. Neun Dörfer wurden nie wieder aufgebaut; das Gelände ist bis heute munitionsverseucht.",
  "hinweis": "Falkenhayns Absicht, Frankreich ausbluten zu lassen, kennen wir nur aus seinen Erinnerungen nach dem Krieg. Ein zeitgenössisches Dokument dazu ist nie gefunden worden.",
  "vertiefung": "stellungskrieg"
 },
 {
  "year": 1916,
  "name": "Schlacht an der Somme",
  "war": "Erster Weltkrieg",
  "text": "Über eine Million Tote und Verwundete bei minimalem Geländegewinn – erster Panzereinsatz der Geschichte.",
  "ort": "an der Somme, Nordfrankreich",
  "parteien": [
   {
    "name": "Großbritannien und Frankreich",
    "fuehrer": "Douglas Haig und Ferdinand Foch",
    "staerke": "ca. 51 britische und 48 französische Divisionen",
    "verluste": "ca. 620.000, davon 19.240 britische Tote allein am ersten Tag"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Fritz von Below",
    "staerke": "ca. 50 Divisionen",
    "verluste": "ca. 465.000"
   }
  ],
  "ausgang": "Geringer Geländegewinn von etwa zehn Kilometern in viereinhalb Monaten, keine Entscheidung.",
  "folgen": "Der verlustreichste Tag der britischen Militärgeschichte war der 1. Juli 1916. Hier setzten die Briten erstmals Panzer ein – zunächst wirkungslos, aber der Beginn einer neuen Waffengattung. Der Glaube an die alte Gesellschaftsordnung überlebte die Somme in Großbritannien nicht.",
  "hinweis": "Die 19.240 Toten des ersten Tages sind belegt, nicht geschätzt: Die britische Armee führte genaue Listen.",
  "vertiefung": "stellungskrieg"
 },
 {
  "year": 1916,
  "name": "Skagerrakschlacht",
  "war": "Erster Weltkrieg",
  "text": "Die größte Seeschlacht des Krieges endet taktisch unentschieden, strategisch zugunsten Großbritanniens: Die deutsche Hochseeflotte bleibt danach weitgehend im Hafen.",
  "ort": "Nordsee vor Jütland",
  "parteien": [
   {
    "name": "Großbritannien",
    "fuehrer": "John Jellicoe und David Beatty",
    "staerke": "151 Schiffe, davon 28 Großkampfschiffe",
    "verluste": "14 Schiffe, 6.094 Tote"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Reinhard Scheer und Franz von Hipper",
    "staerke": "99 Schiffe, davon 16 Großkampfschiffe",
    "verluste": "11 Schiffe, 2.551 Tote"
   }
  ],
  "ausgang": "Taktisch ein deutscher Erfolg, strategisch ein britischer. Die deutsche Flotte versenkte mehr Tonnage, entkam aber und blieb den Rest des Krieges weitgehend im Hafen.",
  "folgen": "Die britische Seeblockade blieb bestehen und wirkte sich bis in die deutsche Zivilversorgung aus. Deutschland setzte stattdessen auf den U-Boot-Krieg – der 1917 die USA in den Krieg brachte. Die einzige große Flottenschlacht des Ersten Weltkriegs entschied nichts und alles zugleich.",
  "hinweis": "Drei britische Schlachtkreuzer explodierten durch Munitionsdurchschläge. Die Ursache – zu offen gelagerte Kartuschen zugunsten höherer Feuergeschwindigkeit – wurde erst nach dem Krieg eingeräumt."
 },
 {
  "year": 1920,
  "name": "Schlacht bei Warschau",
  "war": "Polnisch-Sowjetischer Krieg",
  "text": "Eine polnische Flankenoperation stoppt den sowjetischen Vormarsch nach Westen. Lenins Plan, die Revolution nach Deutschland zu tragen, scheitert hier.",
  "ort": "an der Weichsel bei Warschau",
  "parteien": [
   {
    "name": "Polen",
    "fuehrer": "Józef Piłsudski",
    "staerke": "ca. 113.000–200.000",
    "verluste": "ca. 4.500 Tote, 22.000 Verwundete"
   },
   {
    "name": "Sowjetrussland",
    "fuehrer": "Michail Tuchatschewski",
    "staerke": "ca. 100.000–140.000",
    "verluste": "ca. 25.000 Tote und Verwundete, 65.000 Gefangene, 30.000 nach Ostpreußen abgedrängt"
   }
  ],
  "ausgang": "Polnischer Sieg. Piłsudski zog heimlich Truppen ab und stieß in die ungeschützte Flanke der vorgestoßenen Roten Armee. Polnische Funkaufklärung hatte den sowjetischen Code gebrochen.",
  "folgen": "Der sowjetische Vorstoß nach Westen endete. Die Hoffnung, die Revolution nach Deutschland zu tragen, war zunächst begraben. Polen blieb unabhängig bis 1939. In Polen heißt die Schlacht Wunder an der Weichsel.",
  "hinweis": "Der Codebruch wurde erst in den 2000er Jahren aus Archiven belegt – vorher galt der Sieg als militärisches Rätsel oder Wunder."
 },
 {
  "year": 1937,
  "name": "Schlacht um Shanghai",
  "war": "Zweiter Japanisch-Chinesischer Krieg",
  "text": "Drei Monate Häuserkampf mit Hunderttausenden Opfern. Chinas Widerstand zerstört die japanische Erwartung eines kurzen Feldzugs – und band bis 1945 den Großteil der japanischen Landstreitkräfte.",
  "ort": "Shanghai",
  "parteien": [
   {
    "name": "Republik China",
    "fuehrer": "Chiang Kai-shek",
    "staerke": "ca. 700.000, darunter die deutsch ausgebildeten Elitedivisionen",
    "verluste": "ca. 250.000–300.000"
   },
   {
    "name": "Japanisches Kaiserreich",
    "fuehrer": "Iwane Matsui",
    "staerke": "ca. 300.000 mit Luft- und Seeüberlegenheit",
    "verluste": "ca. 40.000–70.000"
   }
  ],
  "ausgang": "Japanischer Sieg nach drei Monaten Häuserkampf.",
  "folgen": "Chiang verlor seine besten Verbände und konnte sie nie ersetzen. Japans Erwartung, China binnen drei Monaten zu unterwerfen, war widerlegt – der Krieg dauerte acht Jahre. Auf den Fall Shanghais folgte das Massaker von Nanking.",
  "hinweis": "Der Zweite Japanisch-Chinesische Krieg begann 1937 und damit vor dem europäischen Kriegsbeginn. In westlichen Darstellungen erscheint er oft nur als Nebenschauplatz."
 },
 {
  "year": 1939,
  "name": "Schlacht am Chalchyn Gol",
  "war": "Japanisch-Sowjetischer Grenzkonflikt",
  "text": "Schukow schlägt die japanische Armee in der Mongolei. Die Niederlage ist ein Grund, warum Japan 1941 nach Süden gegen die USA zog statt nach Norden gegen die Sowjetunion – mit Folgen für den gesamten Kriegsverlauf.",
  "ort": "am Fluss Chalchyn Gol, Grenze Mongolei/Mandschukuo",
  "parteien": [
   {
    "name": "Sowjetunion und Mongolei",
    "fuehrer": "Georgi Schukow",
    "staerke": "ca. 57.000 mit 500 Panzern",
    "verluste": "ca. 9.700"
   },
   {
    "name": "Japan und Mandschukuo",
    "fuehrer": "Michitarō Komatsubara",
    "staerke": "ca. 75.000",
    "verluste": "ca. 20.000"
   }
  ],
  "ausgang": "Sowjetischer Sieg. Schukow setzte erstmals massiert Panzerverbände zur Umfassung ein – dieselbe Methode, die er später bei Stalingrad und Berlin anwandte.",
  "folgen": "Japan entschied sich daraufhin gegen einen Angriff nach Norden und für die Expansion nach Süden – mit Pearl Harbor als Folge. Der Nichtangriffspakt mit der Sowjetunion von 1941 erlaubte Stalin, sibirische Divisionen nach Moskau zu verlegen, wo sie die Wende brachten.",
  "hinweis": "Ein wenig bekannter Grenzkonflikt mit weltgeschichtlicher Wirkung: Er lenkte die japanische Expansion von Sibirien in den Pazifik um."
 },
 {
  "year": 1940,
  "name": "Luftschlacht um England",
  "war": "Zweiter Weltkrieg",
  "text": "Die erste allein in der Luft entschiedene Schlacht der Geschichte verhindert eine deutsche Invasion.",
  "ort": "über Südengland und dem Ärmelkanal",
  "parteien": [
   {
    "name": "Großbritannien",
    "fuehrer": "Hugh Dowding",
    "staerke": "ca. 1.960 Flugzeuge, davon 750 Jäger",
    "verluste": "1.542 Flugzeuge, 544 Flugzeugführer"
   },
   {
    "name": "Deutsches Reich und Italien",
    "fuehrer": "Hermann Göring",
    "staerke": "ca. 2.550 Flugzeuge",
    "verluste": "1.977 Flugzeuge, ca. 2.600 Besatzungsmitglieder"
   }
  ],
  "ausgang": "Britischer Abwehrerfolg. Die geplante Invasion wurde im September verschoben und nie ausgeführt.",
  "folgen": "Die erste rein in der Luft entschiedene Schlacht der Geschichte. Deutschland verlor erstmals einen Feldzug. Entscheidend waren weniger die Flugzeuge als das Dowding-System: eine Kette von Radarstationen, Beobachtern und Leitzentralen, die Jäger gezielt dorthin schickte, wo sie gebraucht wurden.",
  "hinweis": "Die deutsche Verlagerung von Flugplätzen auf Städte im September verschaffte der Royal Air Force Zeit zur Erholung – eine Entscheidung, die den Ausgang mitbestimmte."
 },
 {
  "year": 1941,
  "name": "Schlacht um Moskau",
  "war": "Zweiter Weltkrieg",
  "text": "Der erste Halt der Wehrmacht und das Ende des Blitzkriegskonzepts. Sowjetische Reserven aus Sibirien konnten verlegt werden, weil ein Spionagebericht meldete, dass Japan nicht angreifen würde.",
  "ort": "vor Moskau",
  "parteien": [
   {
    "name": "Sowjetunion",
    "fuehrer": "Georgi Schukow",
    "staerke": "ca. 1.250.000",
    "verluste": "ca. 650.000–1.280.000"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Fedor von Bock",
    "staerke": "ca. 1.000.000",
    "verluste": "ca. 250.000–400.000"
   }
  ],
  "ausgang": "Sowjetischer Abwehrerfolg und Gegenangriff. Die deutsche Spitze kam bis auf 25 Kilometer an Moskau heran und wurde dann durch frische sibirische Divisionen, Kälte und Nachschubprobleme zurückgeworfen.",
  "folgen": "Der erste größere deutsche Rückschlag des Krieges. Das Konzept des Blitzkriegs war an der Weite und den Reserven der Sowjetunion gescheitert; aus dem geplanten kurzen Feldzug wurde ein Abnutzungskrieg, den Deutschland nicht gewinnen konnte.",
  "hinweis": "Die Kälte wird häufig als Hauptgrund genannt. Sie traf beide Seiten – der Unterschied lag in Ausrüstung, Nachschub und den Reserven, die Stalin aus dem Osten heranführen konnte, nachdem Spionageberichte einen japanischen Angriff ausgeschlossen hatten."
 },
 {
  "year": 1942,
  "name": "Schlacht von Midway",
  "war": "Zweiter Weltkrieg (Pazifik)",
  "text": "Entscheidender US-Sieg über die japanische Flotte, Wendepunkt des Pazifikkriegs.",
  "ort": "bei Midway im zentralen Pazifik",
  "parteien": [
   {
    "name": "USA",
    "fuehrer": "Chester Nimitz, Raymond Spruance, Frank Fletcher",
    "staerke": "3 Flugzeugträger, ca. 230 Trägerflugzeuge",
    "verluste": "1 Flugzeugträger, 1 Zerstörer, 145 Flugzeuge, 307 Tote"
   },
   {
    "name": "Japan",
    "fuehrer": "Isoroku Yamamoto und Chūichi Nagumo",
    "staerke": "4 Flugzeugträger, ca. 250 Flugzeuge",
    "verluste": "4 Flugzeugträger, 1 Kreuzer, 248 Flugzeuge, ca. 3.000 Tote"
   }
  ],
  "ausgang": "Amerikanischer Sieg innerhalb weniger Minuten am Vormittag des 4. Juni. Die US-Marine hatte den japanischen Funkcode teilweise entschlüsselt und wusste, wohin der Angriff zielte. Sturzkampfbomber trafen drei Träger, während deren Decks mit umgerüsteten Maschinen voll waren.",
  "folgen": "Japan verlor vier Träger und einen großen Teil seiner erfahrenen Flugzeugführer – beides nicht ersetzbar. Die Initiative im Pazifik wechselte endgültig zu den USA.",
  "hinweis": "Das Codeknacken wurde erst nach dem Krieg bekannt. Ohne diesen Vorteil hätte die zahlenmäßig unterlegene US-Flotte die japanische Flotte kaum stellen können."
 },
 {
  "year": 1942,
  "name": "Zweite Schlacht von El Alamein",
  "war": "Zweiter Weltkrieg (Nordafrika)",
  "text": "Alliierter Sieg über Rommels Afrikakorps, Wendepunkt im nordafrikanischen Feldzug.",
  "ort": "El Alamein, Nordägypten",
  "parteien": [
   {
    "name": "Großbritannien und Commonwealth",
    "fuehrer": "Bernard Montgomery",
    "staerke": "ca. 195.000 Mann, 1.000 Panzer",
    "verluste": "ca. 13.500"
   },
   {
    "name": "Deutschland und Italien",
    "fuehrer": "Erwin Rommel",
    "staerke": "ca. 116.000 Mann, 550 Panzer",
    "verluste": "ca. 30.000 Tote, Verwundete und Gefangene"
   }
  ],
  "ausgang": "Sieg der Alliierten nach zwölf Tagen. Montgomery hatte klare Material- und Nachschubüberlegenheit; Rommels Treibstoff reichte nicht für eine bewegliche Verteidigung.",
  "folgen": "Der Vormarsch auf Suez und die Ölfelder des Nahen Ostens war beendet. Zusammen mit der Landung in Marokko und Algerien begann die Räumung Nordafrikas; im Mai 1943 kapitulierten dort 250.000 Achsensoldaten. Churchill: nicht das Ende, aber vielleicht das Ende des Anfangs.",
  "hinweis": "Der britische Vorteil beruhte auch auf entschlüsselten Funksprüchen, aus denen die Alliierten Rommels Nachschubkonvois kannten und versenkten."
 },
 {
  "year": 1942,
  "name": "Schlacht im Korallenmeer",
  "war": "Zweiter Weltkrieg (Pazifik)",
  "ort": "Korallenmeer nordöstlich von Australien",
  "text": "Die erste Seeschlacht der Geschichte, in der sich die gegnerischen Flotten nie sahen – alles entschieden Trägerflugzeuge.",
  "parteien": [
   {
    "name": "USA und Australien",
    "fuehrer": "Frank Fletcher",
    "staerke": "2 Flugzeugträger, 9 Kreuzer",
    "verluste": "1 Träger versenkt, 1 schwer beschädigt, 656 Tote"
   },
   {
    "name": "Japan",
    "fuehrer": "Takeo Takagi und Shigeyoshi Inoue",
    "staerke": "3 Flugzeugträger, 9 Kreuzer",
    "verluste": "1 Leichtträger versenkt, 1 Träger beschädigt, 966 Tote"
   }
  ],
  "ausgang": "Taktisch japanischer Vorteil, strategisch amerikanischer: Die geplante japanische Landung in Port Moresby wurde abgebrochen.",
  "folgen": "Australien blieb außer Reichweite. Zwei japanische Träger fielen wegen Schäden und Flugzeugverlusten für Midway aus – ein Monat später fehlten sie dort entscheidend. Die Schlacht markierte das Ende der Ära, in der Schlachtschiffe den Seekrieg bestimmten.",
  "hinweis": "Erste Trägerschlacht der Geschichte: Kein Schiff kam in Sichtweite eines gegnerischen Schiffs."
 },
 {
  "year": 1943,
  "name": "Schlacht von Stalingrad",
  "war": "Zweiter Weltkrieg (Ostfront)",
  "text": "Kapitulation der eingekesselten deutschen 6. Armee – psychologischer und militärischer Wendepunkt an der Ostfront.",
  "ort": "Stalingrad an der Wolga, heute Wolgograd",
  "parteien": [
   {
    "name": "Sowjetunion",
    "fuehrer": "Wassili Tschuikow, Operationsleitung Georgi Schukow und Alexander Wassilewski",
    "staerke": "ca. 1.100.000 bei der Gegenoffensive",
    "verluste": "ca. 480.000 Tote, insgesamt über 1.100.000 Ausfälle"
   },
   {
    "name": "Deutschland, Rumänien, Italien, Ungarn",
    "fuehrer": "Friedrich Paulus",
    "staerke": "ca. 1.000.000 im Abschnitt, 6. Armee ca. 280.000",
    "verluste": "ca. 300.000 Tote; 91.000 Gefangene, von denen ca. 6.000 zurückkehrten"
   }
  ],
  "ausgang": "Vollständige sowjetische Vernichtung der 6. Armee. Die Operation Uranus durchbrach die schwach besetzten rumänischen Flanken und schloss den Kessel; Hitler verbot den Ausbruch.",
  "folgen": "Der Wendepunkt des Krieges in Europa. Die deutsche Sommeroffensive 1942 war gescheitert, die Initiative ging endgültig an die Sowjetunion über. Erstmals ordnete das Reich Staatstrauer an.",
  "hinweis": "Die Verlustzahlen beider Seiten sind bis heute Gegenstand der Forschung. Sicher ist, dass Stalingrad zu den verlustreichsten Schlachten der Geschichte zählt – die zivilen Opfer der Stadt eingerechnet.",
  "vertiefung": "wende-1942"
 },
 {
  "year": 1943,
  "name": "Schlacht bei Kursk",
  "war": "Zweiter Weltkrieg (Ostfront)",
  "text": "Größte Panzerschlacht der Geschichte, endet mit sowjetischem Sieg und dauerhafter strategischer Initiative gegen NS-Deutschland.",
  "ort": "Frontbogen bei Kursk",
  "parteien": [
   {
    "name": "Sowjetunion",
    "fuehrer": "Konstantin Rokossowski, Nikolai Watutin, Schukow",
    "staerke": "ca. 1.900.000 Mann, 5.000 Panzer",
    "verluste": "ca. 178.000 Tote und Vermisste, über 6.000 Panzer"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Erich von Manstein und Walter Model",
    "staerke": "ca. 780.000 Mann, 2.900 Panzer",
    "verluste": "ca. 55.000 Tote, ca. 750 Panzer"
   }
  ],
  "ausgang": "Sowjetischer Abwehrerfolg. Die Rote Armee kannte den Angriffsplan über die Aufklärung, baute acht gestaffelte Verteidigungsgürtel und ließ den Angriff sich festlaufen. Am 12. Juli trafen bei Prochorowka große Panzerverbände aufeinander.",
  "folgen": "Die letzte deutsche Großoffensive im Osten scheiterte. Von hier an lag die Initiative bis Kriegsende bei der Roten Armee. Die deutschen Panzerverluste waren zwar geringer, aber im Gegensatz zu den sowjetischen nicht ersetzbar.",
  "hinweis": "Prochorowka galt lange als größte Panzerschlacht der Geschichte mit angeblich 1.500 Panzern. Neuere Archivauswertungen kommen auf deutlich kleinere Zahlen und einen weniger dramatischen Verlauf."
 },
 {
  "year": 1943,
  "name": "Aufstand im Warschauer Ghetto",
  "war": "Zweiter Weltkrieg",
  "ort": "Warschauer Ghetto",
  "text": "Der größte jüdische Aufstand während des Holocaust – militärisch aussichtslos, geführt mit dem erklärten Ziel, nicht wehrlos zu sterben.",
  "parteien": [
   {
    "name": "Jüdische Kampforganisationen ŻOB und ŻZW",
    "fuehrer": "Mordechaj Anielewicz und Paweł Frenkiel",
    "staerke": "ca. 700–1.000 Kämpfer, kaum Waffen",
    "verluste": "fast alle gefallen; ca. 13.000 Menschen getötet, 50.000 deportiert"
   },
   {
    "name": "SS und Polizei",
    "fuehrer": "Jürgen Stroop",
    "staerke": "ca. 2.000–3.000 mit Artillerie und Panzern",
    "verluste": "nach eigenen Angaben 17 Tote, tatsächlich vermutlich mehr"
   }
  ],
  "ausgang": "Niederschlagung nach vier Wochen. Die SS brannte das Ghetto Haus für Haus nieder, weil sie den Untergrundkampf anders nicht bewältigte.",
  "folgen": "Das Ghetto wurde zerstört, die Große Synagoge gesprengt. Der Aufstand wurde zum Symbol des jüdischen Widerstands. Der Bericht des SS-Kommandeurs Stroop, angelegt als Prachtalbum für Himmler, wurde in Nürnberg zum Beweismittel gegen ihn – er wurde 1952 in Warschau hingerichtet.",
  "hinweis": "Militärisch war der Ausgang nie offen. Die Kämpfenden wussten das; der Aufstand richtete sich gegen die Art des Sterbens, nicht gegen seine Unvermeidbarkeit.",
  "vertiefung": "holocaust"
 },
 {
  "year": 1944,
  "name": "Landung in der Normandie (D-Day)",
  "war": "Zweiter Weltkrieg (Westfront)",
  "text": "Größte amphibische Invasion der Geschichte eröffnet die Westfront gegen NS-Deutschland.",
  "ort": "Küste der Normandie",
  "parteien": [
   {
    "name": "USA, Großbritannien, Kanada und Verbündete",
    "fuehrer": "Dwight D. Eisenhower, Bernard Montgomery",
    "staerke": "156.000 Mann am ersten Tag, 5.000 Schiffe, 11.000 Flugzeuge",
    "verluste": "ca. 10.000 am ersten Tag, davon ca. 4.400 Tote"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Erwin Rommel und Gerd von Rundstedt",
    "staerke": "ca. 50.000 im Küstenabschnitt",
    "verluste": "ca. 4.000–9.000 am ersten Tag"
   }
  ],
  "ausgang": "Die Landung gelang an allen fünf Abschnitten; am blutigsten war Omaha Beach. Bis Ende Juni waren 850.000 Mann angelandet.",
  "folgen": "Die zweite Front im Westen war eröffnet. Paris wurde im August befreit. Die deutsche Führung hatte den Hauptangriff bei Calais erwartet – eine groß angelegte Täuschung mit Scheinarmeen und gefälschtem Funkverkehr hatte gewirkt und band Reserven noch wochenlang.",
  "hinweis": "Der 6. Juni war ein Kompromiss aus Gezeiten, Mondlicht und Wetter. Eine Verschiebung hätte zwei Wochen gekostet – in denen ein schwerer Sturm die Kanalküste traf.",
  "vertiefung": "zweiter-weltkrieg"
 },
 {
  "year": 1944,
  "name": "Imphal und Kohima",
  "war": "Burmafeldzug",
  "text": "Die japanische Offensive nach Indien bricht am Nachschub zusammen; ein großer Teil der Verluste geht auf Hunger und Krankheit zurück. Der Feldzug gilt in Britannien als vergessene Front, obwohl indische Truppen ihn entschieden.",
  "ort": "Imphal und Kohima, Nordostindien",
  "parteien": [
   {
    "name": "Großbritannien, Britisch-Indien und Verbündete",
    "fuehrer": "William Slim",
    "staerke": "ca. 150.000",
    "verluste": "ca. 17.500"
   },
   {
    "name": "Japan und Indische Nationalarmee",
    "fuehrer": "Renya Mutaguchi",
    "staerke": "ca. 85.000–100.000",
    "verluste": "ca. 55.000, davon über 30.000 an Hunger und Krankheit"
   }
  ],
  "ausgang": "Britisch-indischer Sieg. Die japanische Offensive nach Indien rechnete mit erbeuteten Vorräten, die ausblieben; Luftversorgung hielt die eingeschlossenen Verteidiger am Leben, während die Angreifer verhungerten.",
  "folgen": "Die größte Niederlage der japanischen Landstreitkräfte im Krieg. Der Weg zur Rückeroberung Burmas war frei. Ein Großteil der Verluste ging nicht auf Kämpfe zurück, sondern auf Nachschubmangel und Krankheit.",
  "hinweis": "2013 wählte das britische National Army Museum Imphal/Kohima zur größten Schlacht der britischen Militärgeschichte – bekannter sind Waterloo und die Somme."
 },
 {
  "year": 1945,
  "name": "Schlacht um Okinawa",
  "war": "Zweiter Weltkrieg",
  "text": "Fast drei Monate Kampf mit über 100.000 toten Zivilisten. Die Verlustzahlen flossen unmittelbar in die amerikanische Abwägung über den Einsatz der Atombombe ein.",
  "ort": "Okinawa",
  "parteien": [
   {
    "name": "USA und Verbündete",
    "fuehrer": "Simon Bolivar Buckner Jr.",
    "staerke": "ca. 540.000 Mann, 1.300 Schiffe",
    "verluste": "ca. 12.500 Tote, 50.000 Verwundete, 36 Schiffe versenkt"
   },
   {
    "name": "Japan",
    "fuehrer": "Mitsuru Ushijima",
    "staerke": "ca. 100.000 Soldaten",
    "verluste": "ca. 95.000 Tote; dazu 40.000–150.000 tote Zivilisten"
   }
  ],
  "ausgang": "Amerikanischer Sieg nach 82 Tagen. Die japanische Verteidigung setzte auf tief gestaffelte Höhlenstellungen im Inneren statt auf Abwehr am Strand; rund 1.900 Kamikaze-Angriffe trafen die Flotte.",
  "folgen": "Die letzte große Schlacht des Pazifikkriegs. Die Verlustzahlen flossen unmittelbar in die amerikanische Abwägung über eine Invasion des japanischen Hauptlands – und damit über den Einsatz der Atombombe. Ein Viertel bis ein Drittel der Zivilbevölkerung Okinawas starb.",
  "hinweis": "Zu den zivilen Opfern zählen auch Massenselbsttötungen, zu denen japanische Soldaten die Bevölkerung gedrängt hatten. Die Aufarbeitung ist in Japan bis heute umstritten."
 },
 {
  "year": 1945,
  "name": "Schlacht um Berlin",
  "war": "Zweiter Weltkrieg (Ostfront)",
  "ort": "Berlin und Oderfront",
  "text": "Die letzte Großoffensive in Europa: zwei Wochen Kampf um eine Stadt, deren Verteidigung längst aussichtslos war.",
  "parteien": [
   {
    "name": "Sowjetunion und Polen",
    "fuehrer": "Georgi Schukow, Iwan Konew, Konstantin Rokossowski",
    "staerke": "ca. 2.500.000 Mann, 6.250 Panzer, 41.600 Geschütze",
    "verluste": "ca. 81.000 Tote, 280.000 Verwundete"
   },
   {
    "name": "Deutsches Reich",
    "fuehrer": "Gotthard Heinrici, in der Stadt Helmuth Weidling",
    "staerke": "ca. 1.000.000, darunter Volkssturm und Hitlerjugend",
    "verluste": "ca. 92.000–100.000 Tote, ca. 480.000 Gefangene"
   }
  ],
  "ausgang": "Sowjetischer Sieg. Hitler nahm sich am 30. April das Leben, die Stadtkommandantur kapitulierte am 2. Mai, das Reich am 8. Mai.",
  "folgen": "Ende des Krieges in Europa. Berlin lag zu großen Teilen in Trümmern; die Stadt wurde in vier Sektoren geteilt – der Ausgangspunkt der deutschen Teilung. Zehntausende Frauen wurden Opfer von Vergewaltigungen durch sowjetische Soldaten, ein lange verschwiegenes Kapitel.",
  "hinweis": "Die deutschen Verluste enthalten viele Volkssturmmänner und Jugendliche, die kaum ausgebildet waren. Ein Waffenstillstand hätte den größten Teil dieser Toten vermieden."
 },
 {
  "year": 1950,
  "name": "Landung bei Incheon",
  "war": "Koreakrieg",
  "text": "MacArthurs riskante Landung im Rücken der nordkoreanischen Armee dreht den Krieg binnen Tagen – und führt zu einer Überdehnung, die kurz darauf Chinas Eingreifen provoziert.",
  "ort": "Incheon, Westküste Koreas",
  "parteien": [
   {
    "name": "UN-Truppen unter US-Führung",
    "fuehrer": "Douglas MacArthur",
    "staerke": "ca. 40.000 in der ersten Welle, 260 Schiffe",
    "verluste": "ca. 570"
   },
   {
    "name": "Nordkorea",
    "fuehrer": "Choi Yong-kun",
    "staerke": "ca. 6.500 in der Stadt",
    "verluste": "über 1.300 Tote, viele Gefangene"
   }
  ],
  "ausgang": "Vollständiger Erfolg der Landung. Incheon galt wegen extremer Tidenhübe und Schlickwatt als ungeeignet – genau deshalb war es kaum verteidigt. Das Zeitfenster für die Landung betrug wenige Stunden.",
  "folgen": "Die nordkoreanische Armee im Süden war abgeschnitten und brach zusammen; Seoul wurde binnen zwei Wochen zurückerobert. Der anschließende Vorstoß bis zur chinesischen Grenze führte allerdings zum Eingreifen Chinas und zu zweieinhalb weiteren Kriegsjahren.",
  "hinweis": "Fast der gesamte Stab hatte MacArthur von Incheon abgeraten. Der Erfolg festigte sein Ansehen so sehr, dass ihm ein halbes Jahr später der Blick für die chinesische Warnung fehlte.",
  "vertiefung": "koreakrieg"
 },
 {
  "year": 1954,
  "name": "Dien Bien Phu",
  "war": "Indochinakrieg",
  "text": "Die Niederlage beendet die französische Kolonialherrschaft in Indochina – und zeigt, dass gut organisierte Unabhängigkeitsbewegungen europäische Armeen schlagen können.",
  "ort": "Talkessel von Điện Biên Phủ, Nordvietnam",
  "parteien": [
   {
    "name": "Việt Minh",
    "fuehrer": "Võ Nguyên Giáp",
    "staerke": "ca. 50.000 Kampftruppen, dazu über 200.000 Träger",
    "verluste": "ca. 8.000 Tote, 15.000 Verwundete"
   },
   {
    "name": "Frankreich und Verbündete",
    "fuehrer": "Christian de Castries",
    "staerke": "ca. 13.000",
    "verluste": "ca. 2.300 Tote, 11.000 Gefangene, von denen weniger als die Hälfte zurückkehrte"
   }
  ],
  "ausgang": "Vollständiger Sieg der Việt Minh nach 57 Tagen. Frankreich hatte den Kessel als Falle für den Gegner gedacht; Giáp ließ Artillerie in Einzelteilen über die Berge tragen und beschoss die Landebahn, worauf die Versorgung nur noch per Fallschirm möglich war und schließlich ausblieb.",
  "folgen": "Frankreich gab Indochina auf. Die Genfer Konferenz teilte Vietnam am 17. Breitengrad – aus der vorläufigen Linie wurde eine Grenze, an der zwanzig Jahre später der amerikanische Krieg geführt wurde.",
  "hinweis": "Die Träger – überwiegend Zivilisten mit umgebauten Fahrrädern – waren militärisch entscheidend. In den meisten Truppenzahlen tauchen sie nicht auf."
 },
 {
  "year": 1968,
  "name": "Tet-Offensive",
  "war": "Vietnamkrieg",
  "text": "Militärisch eine Niederlage für Nordvietnam, politisch der Wendepunkt: Die Bilder widerlegen die amerikanische Darstellung, der Krieg sei so gut wie gewonnen. Ein Lehrstück darüber, dass Kriege auch zu Hause entschieden werden.",
  "ort": "über 100 Städte in Südvietnam",
  "parteien": [
   {
    "name": "Nordvietnam und FNL",
    "fuehrer": "Võ Nguyên Giáp und Văn Tiến Dũng",
    "staerke": "ca. 85.000",
    "verluste": "ca. 45.000; die FNL verlor einen Großteil ihrer Kader"
   },
   {
    "name": "Südvietnam und USA",
    "fuehrer": "William Westmoreland",
    "staerke": "ca. 1.000.000 zusammen",
    "verluste": "ca. 9.000 Tote, dazu ca. 14.000 tote Zivilisten"
   }
  ],
  "ausgang": "Militärisch eine schwere Niederlage für den Norden: Der erhoffte Volksaufstand blieb aus, alle eroberten Positionen gingen verloren. Politisch der Wendepunkt.",
  "folgen": "Die Bilder aus Saigon und Huế widerlegten die amerikanische Darstellung, der Krieg sei so gut wie gewonnen. Präsident Johnson verzichtete auf eine erneute Kandidatur, Westmoreland wurde abgelöst, Verhandlungen begannen. Der Krieg dauerte noch sieben Jahre.",
  "hinweis": "Ein Lehrstück darüber, dass Kriege nicht nur an der Front entschieden werden – und dass die FNL nach Tet militärisch so geschwächt war, dass Nordvietnam die Führung übernahm."
 },
 {
  "year": 1968,
  "name": "Belagerung von Khe Sanh",
  "war": "Vietnamkrieg",
  "ort": "Khe Sanh, Nordwesten Südvietnams",
  "text": "77 Tage Belagerung, die die amerikanische Aufmerksamkeit band – während anderswo die Tet-Offensive begann.",
  "parteien": [
   {
    "name": "USA und Südvietnam",
    "fuehrer": "David Lownds",
    "staerke": "ca. 6.000 Marines",
    "verluste": "ca. 730 Tote"
   },
   {
    "name": "Nordvietnam",
    "fuehrer": "Trần Quý Hai",
    "staerke": "ca. 20.000–30.000",
    "verluste": "geschätzt 10.000–15.000, Zahlen unsicher"
   }
  ],
  "ausgang": "Die Basis hielt. Massive Luftunterstützung – rund 100.000 Tonnen Bomben – hielt die Belagerer auf Abstand. Wenige Monate später gaben die USA den Stützpunkt freiwillig auf.",
  "folgen": "Ob Khe Sanh ein Ablenkungsmanöver für Tet war oder ein ernst gemeinter Versuch, ein zweites Dien Bien Phu zu schaffen, ist bis heute umstritten. Die Aufgabe des mit so vielen Toten gehaltenen Stützpunkts wirkte in der amerikanischen Öffentlichkeit verheerend.",
  "hinweis": "Die nordvietnamesischen Verluste beruhen auf amerikanischen Schätzungen aus Bombenwirkungsberechnungen – eine notorisch unzuverlässige Methode."
 },
 {
  "year": 1971,
  "name": "Krieg um Bangladesch",
  "war": "Dritter Indisch-Pakistanischer Krieg",
  "ort": "Ostpakistan, heutiges Bangladesch",
  "text": "Dreizehn Tage Krieg beendeten einen Völkermord und schufen einen neuen Staat.",
  "parteien": [
   {
    "name": "Indien und Mukti Bahini",
    "fuehrer": "Sam Manekshaw und Jagjit Singh Aurora",
    "staerke": "ca. 250.000 indische Soldaten, dazu ca. 100.000 bengalische Freiwillige",
    "verluste": "ca. 3.900 Tote"
   },
   {
    "name": "Pakistan",
    "fuehrer": "Amir Abdullah Khan Niazi",
    "staerke": "ca. 365.000 insgesamt, ca. 90.000 im Osten",
    "verluste": "ca. 9.000 Tote; 93.000 gerieten in Gefangenschaft"
   }
  ],
  "ausgang": "Indischer Sieg nach dreizehn Tagen. Die pakistanische Kapitulation in Dhaka am 16. Dezember war die größte Waffenstreckung seit dem Zweiten Weltkrieg.",
  "folgen": "Bangladesch wurde unabhängig. Vorausgegangen war eine Militäraktion der pakistanischen Armee mit hunderttausenden Toten und rund zehn Millionen Flüchtlingen nach Indien – der Auslöser des Krieges. Pakistan verlor über die Hälfte seiner Bevölkerung.",
  "hinweis": "Die Opferzahlen der vorangegangenen Gewalt sind politisch hoch umstritten: Bangladesch nennt drei Millionen, unabhängige Schätzungen liegen deutlich darunter, pakistanische Angaben noch tiefer. Dass es sich um systematische Massengewalt handelte, ist nicht strittig."
 },
 {
  "year": 1973,
  "name": "Panzerschlachten auf dem Sinai",
  "war": "Jom-Kippur-Krieg",
  "text": "Der ägyptische Überraschungsangriff über den Suezkanal gelingt zunächst; israelische Panzer erleiden schwere Verluste durch Lenkraketen. Die Schlacht zeigte erstmals, wie sehr Präzisionswaffen das Gefecht verändern.",
  "ort": "Sinai-Halbinsel und Suezkanal",
  "parteien": [
   {
    "name": "Ägypten",
    "fuehrer": "Saad el-Shazly und Ahmad Ismail Ali",
    "staerke": "ca. 800.000 Mann, 2.400 Panzer",
    "verluste": "ca. 5.000–15.000 Tote, ca. 1.000 Panzer"
   },
   {
    "name": "Israel",
    "fuehrer": "Ariel Scharon, Avraham Adan; Generalstab David Elazar",
    "staerke": "ca. 375.000 Mann, 1.700 Panzer",
    "verluste": "ca. 2.500 Tote, ca. 400 Panzer"
   }
  ],
  "ausgang": "Der ägyptische Überraschungsangriff über den Kanal gelang, die Bar-Lew-Linie fiel binnen Stunden. Israelische Gegenangriffe scheiterten zunächst an sowjetischen Panzerabwehrraketen; nach zwei Wochen durchbrach Scharon bei der Chinesischen Farm und schloss die 3. Armee ein.",
  "folgen": "Militärisch endete der Krieg mit israelischem Vorteil, politisch mit ägyptischem: Der Anfangserfolg machte Sadat innenpolitisch stark genug, 1977 nach Jerusalem zu reisen und 1979 Frieden zu schließen. Israel gab den Sinai zurück. Der begleitende Ölboykott löste die erste Ölkrise aus.",
  "hinweis": "Die Schlacht zeigte erstmals, wie stark Präzisionslenkwaffen Panzer und Flugzeuge gefährden – eine Lehre, die alle Armeen der Welt auswerteten."
 },
 {
  "year": 1994,
  "name": "Erste Schlacht um Grosny",
  "war": "Erster Tschetschenienkrieg",
  "ort": "Grosny, Tschetschenien",
  "text": "Ein Sturmangriff auf eine Großstadt zum Jahreswechsel, der zur schwersten Niederlage der russischen Armee seit Afghanistan wurde.",
  "parteien": [
   {
    "name": "Russland",
    "fuehrer": "Pawel Gratschow",
    "staerke": "ca. 38.000 mit Panzern und Artillerie",
    "verluste": "ca. 2.000 Tote in den ersten Wochen; eine Brigade verlor fast alle Fahrzeuge"
   },
   {
    "name": "Tschetschenische Verbände",
    "fuehrer": "Aslan Maschadow und Schamil Bassajew",
    "staerke": "ca. 12.000–15.000",
    "verluste": "unbekannt; dazu ca. 25.000 tote Zivilisten in der Stadt"
   }
  ],
  "ausgang": "Russland nahm die Stadt nach zwei Monaten – nach einem katastrophalen Fehlstart, bei dem Panzerkolonnen ohne begleitende Infanterie in enge Straßen fuhren und von oben und unten mit Panzerfäusten beschossen wurden.",
  "folgen": "Der Krieg endete 1996 mit dem faktischen russischen Rückzug. Die Erfahrung veränderte die Doktrin für Kämpfe in Städten weltweit. 1999 begann der zweite Krieg, an dessen Ende Grosny fast vollständig zerstört war.",
  "hinweis": "Die zivilen Opferzahlen sind Schätzungen von Menschenrechtsorganisationen; amtliche Angaben lagen weit darunter."
 }
];

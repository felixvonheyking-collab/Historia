/* =========================================================
   HISTORIA — DATEN: Mythen und Fun Facts

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const MYTHEN = [
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Der Trojanische Krieg war reine Erfindung",
  "text": "Homers 'Ilias' ist literarisch stark überhöht, doch Ausgrabungen in Hisarlik (Türkei) durch Heinrich Schliemann belegen eine reale, mehrfach zerstörte Stadt namens Troja. Ob ein 'Trojanisches Pferd' tatsächlich existierte, bleibt jedoch unbewiesen."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Bei den Thermopylen kämpften nur 300 Spartaner",
  "text": "Tatsächlich standen mehrere tausend griechische Verbündete mit den Spartanern gemeinsam gegen die Perser. Die '300' waren nur die Kerntruppe, die als letzte in einem aussichtslosen Nachhutgefecht standhielt."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Nero spielte Geige, während Rom brannte",
  "text": "Die Geige wurde erst rund 1500 Jahre später erfunden. Manche antiken Quellen berichten sogar, Nero sei bei Brandausbruch gar nicht in Rom gewesen und habe später den Wiederaufbau organisiert.",
  "quelle": "Tacitus, Annalen XV; Encyclopaedia Britannica: Nero — zur Streichinstrument-Legende und zu Neros Aufenthalt in Antium"
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Caligula ernannte sein Pferd zum Senator",
  "text": "Der römische Historiker Sueton berichtet dies als Beleg für Caligulas Wahnsinn. Moderne Historiker vermuten eher bitteren Spott gegenüber dem Senat als eine tatsächlich vollzogene Ernennung."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Kleopatra war eine ägyptische Schönheitsikone",
  "text": "Kleopatra VII. entstammte der griechisch-makedonischen Ptolemäer-Dynastie, war also keine ethnische Ägypterin. Antike Quellen betonen zudem eher ihre Intelligenz, Bildung und Stimme als klassische Schönheit."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Alexander der Große wurde vergiftet",
  "text": "Seine Todesursache ist bis heute ungeklärt. Historiker diskutieren neben Vergiftung auch Malaria, Typhus oder übermäßigen Alkoholkonsum – eine endgültige Antwort gibt es nicht."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Atlantis war eine reale versunkene Hochkultur",
  "text": "Atlantis wird erstmals von Platon als philosophisches Gedankenexperiment über einen idealen und einen dekadenten Staat erwähnt. Es gibt keinerlei archäologischen Beleg für seine tatsächliche Existenz.",
  "quelle": "Platon, Timaios und Kritias als einzige Quellen; Encyclopaedia Britannica: Atlantis"
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Der Läufer Pheidippides rannte 42 km und starb",
  "text": "Herodot berichtet nur von einem Botenlauf nach Sparta, nicht von einem tödlichen Lauf über die Marathon-Distanz. Die moderne Marathondistanz von 42,195 km wurde erst 1908 bei den Olympischen Spielen in London festgelegt."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Gladiatoren kämpften immer bis zum Tod",
  "text": "Gladiatoren waren teure Investitionen ihrer Besitzer. Die meisten Kämpfe endeten ohne tödlichen Ausgang, und die genaue Bedeutung der berühmten Daumengeste ist unter Historikern bis heute umstritten."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Ritter mussten mit einem Kran aufs Pferd gehoben werden",
  "text": "Vollrüstungen wogen meist nur 20–25 kg und waren gut über den Körper verteilt. Ritter konnten sich damit frei bewegen, kämpfen und sogar Purzelbäume schlagen, wie Experimente moderner Rüstungshistoriker zeigen.",
  "quelle": "Royal Armouries Leeds, Bewegungsversuche mit originalgetreuen Harnischen; Encyclopaedia Britannica: Armour"
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Menschen im Mittelalter wuschen sich nie",
  "text": "Öffentliche Badehäuser waren im Mittelalter weit verbreitet und beliebt. Erst im Zuge der Pestepidemien ab dem 14. Jahrhundert geriet Baden aus Angst vor Ansteckung zunehmend in Verruf.",
  "quelle": "Georges Vigarello: Wasser und Seife, Puder und Parfüm. Geschichte der Körperhygiene"
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Hexenverbrennungen waren typisch für das 'finstere' Mittelalter",
  "text": "Die überwältigende Mehrheit der europäischen Hexenprozesse und -verbrennungen fand tatsächlich erst in der Frühen Neuzeit statt, besonders im 16. und 17. Jahrhundert – nicht im Mittelalter.",
  "quelle": "Wolfgang Behringer: Hexen. Glaube, Verfolgung, Vermarktung — Schwerpunkt der Verfolgungen zwischen 1560 und 1630"
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Mittelalterliche Karten warnten mit 'Hier seien Drachen'",
  "text": "Die berühmte lateinische Formulierung 'hic sunt dracones' ist tatsächlich nur auf einem einzigen erhaltenen Objekt belegt, dem Hunt-Lenox-Globus von ca. 1510 – nicht auf typischen mittelalterlichen Karten.",
  "quelle": "Lenox-Globus, New York Public Library — der einzige bekannte Kartenbeleg der Formel HC SVNT DRACONES"
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Vlad der Pfähler war ein Vampir",
  "text": "Der reale walachische Fürst Vlad III. war berüchtigt für extrem brutale Bestrafungsmethoden, aber keine übernatürliche Gestalt. Die Vampirlegende geht auf Bram Stokers Roman 'Dracula' (1897) zurück, der seinen Namen nur lose verwendete."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "In Salem wurden Hexen auf dem Scheiterhaufen verbrannt",
  "text": "Bei den berühmten Hexenprozessen von Salem (1692/93) wurden alle Verurteilten gehängt – niemand wurde verbrannt, anders als es die Popkultur oft darstellt.",
  "quelle": "Encyclopaedia Britannica: Salem witch trials — Hinrichtung durch Erhängen nach englischem Recht"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "George Washington fällte als Kind einen Kirschbaum und log nie",
  "text": "Diese moralisierende Anekdote wurde erst nach Washingtons Tod von seinem Biografen Parson Weems erfunden, um ihn als Vorbild ehrlichen Charakters darzustellen.",
  "quelle": "Mason Locke Weems: The Life of Washington (1806); Mount Vernon Ladies' Association zur Entstehung der Anekdote"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Marco Polo erfand seine China-Reise komplett",
  "text": "Manche Historiker bezweifeln einzelne Details seines Berichts (er erwähnt etwa nie die Chinesische Mauer), doch die Reise als solche und viele seiner Beschreibungen gelten heute als historisch belegt."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Piraten trugen Augenklappen wegen Verletzungen",
  "text": "Eine populäre Theorie besagt, Augenklappen dienten manchen Seeleuten dazu, ein Auge stets an Dunkelheit gewöhnt zu halten, um beim schnellen Wechsel zwischen Deck und dunklem Unterdeck sofort sehen zu können."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Einstein ist in der Schule durchgefallen",
  "text": "Albert Einstein war tatsächlich ein exzellenter Schüler, besonders in Mathematik und Physik. Der Mythos entstand vermutlich durch eine Verwechslung unterschiedlicher Schweizer Notenskalen.",
  "quelle": "Albert Einstein Archives, Hebräische Universität Jerusalem; Encyclopaedia Britannica: Albert Einstein"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Der Fluch des Tutanchamun tötete die Ausgräber",
  "text": "Nach dem Tod von Lord Carnarvon 1923 verbreitete die Boulevardpresse die Legende eines Grabfluchs. Statistisch starben die meisten an der Ausgrabung Beteiligten aber erst Jahrzehnte später eines natürlichen Todes.",
  "quelle": "British Medical Journal (2002): The mummy's curse — historische Kohortenstudie zur Sterblichkeit der Beteiligten"
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Der Piltdown-Mensch war ein Sensationsfund",
  "text": "1912 als bedeutendes 'fehlendes Bindeglied' der Evolution präsentiert, entpuppte sich der Fund 1953 als Fälschung aus einem Menschenschädel und einem Orang-Utan-Kiefer – einer der berühmtesten Wissenschaftsbetrugsfälle der Geschichte."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Anastasia Romanov überlebte die Erschießung ihrer Familie",
  "text": "Jahrzehntelang befeuerten Hochstaplerinnen wie Anna Anderson diesen Mythos. DNA-Analysen der geborgenen Gebeine bestätigten 2007 zweifelsfrei den Tod aller Familienmitglieder der Zarenfamilie.",
  "quelle": "PLoS ONE (2009): DNA-Identifizierung der Romanow-Familie einschließlich aller Kinder"
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Rasputin war fast unmöglich zu töten",
  "text": "Die dramatische Legende von Vergiftung, Erschießung und Ertränken stammt vor allem aus den unzuverlässigen Memoiren seines Mörders Felix Jussupow. Historiker bezweifeln heute viele Details dieser Version."
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Der Fall der Berliner Mauer war minutiös geplant",
  "text": "Tatsächlich war die Maueröffnung 1989 vor allem die Folge eines Kommunikationsfehlers: SED-Funktionär Günter Schabowski verkündete auf einer Pressekonferenz versehentlich sofortige Reisefreiheit."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Ninjas trugen stets komplett schwarze Kleidung",
  "text": "Dieses Bild stammt aus Konventionen des japanischen Kabuki-Theaters, wo schwarz gekleidete Bühnenhelfer als 'unsichtbar' galten. Reale Ninja trugen meist unauffällige Alltagskleidung zur Tarnung.",
  "quelle": "Stephen Turnbull: Ninja. Unmasking the Myth"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Das Bermuda-Dreieck verschluckt überdurchschnittlich viele Schiffe",
  "text": "Statistische Analysen von Versicherungsdaten zeigen keine erhöhte Vermisstenrate gegenüber anderen stark befahrenen Seegebieten vergleichbarer Größe.",
  "quelle": "US Coast Guard und Lloyd's of London: keine erhöhte Verlustrate; Larry Kusche: The Bermuda Triangle Mystery Solved"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Nostradamus sagte konkrete historische Ereignisse voraus",
  "text": "Seine Verse sind bewusst vage, mehrdeutig und metaphernreich formuliert. Vermeintliche 'Treffer' entstehen fast immer durch rückwirkende Deutung nach bereits eingetretenen Ereignissen.",
  "quelle": "Encyclopaedia Britannica: Nostradamus — zur nachträglichen Deutung der bewusst mehrdeutigen Vierzeiler"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Kolumbus war der erste Europäer in Amerika",
  "text": "Wikinger unter Leif Eriksson erreichten Neufundland (das sogenannte 'Vinland') bereits um das Jahr 1000 – rund 500 Jahre vor Kolumbus, wie die Ausgrabungen von L'Anse aux Meadows belegen.",
  "quelle": "Parks Canada und UNESCO-Welterbe L'Anse aux Meadows, Grabungsbefunde zur nordischen Siedlung um 1000"
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Napoleon wurde von einer Hasen-Horde angegriffen",
  "text": "Bei einer eigens organisierten Hasenjagd 1807 wandten sich hunderte zuvor gezüchtete, zahme Hasen nicht zur Flucht, sondern liefen auf Napoleon und seine Gesellschaft zu – die Jagdgesellschaft musste sich regelrecht zurückziehen."
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Bei den ersten Olympischen Spielen traten Athleten nackt an",
  "text": "Der griechische Begriff 'gymnos' (nackt) ist die Wurzel des Wortes 'Gymnasium'. Athleten traten in Olympia tatsächlich unbekleidet an – laut Überlieferung auch, um Frauen (denen die Teilnahme als Zuschauerinnen untersagt war) fernzuhalten."
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Ein römischer Kaiser bot einen Preis für die beste Grimasse",
  "text": "Bei manchen römischen Festen gab es tatsächlich Wettbewerbe im Grimassenschneiden ('gymnastiké') als derbe Unterhaltung – ein früher Vorläufer heutiger Grimassen-Wettbewerbe."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Spartaner warfen alle schwachen Babys von einem Felsen",
  "text": "Diese Praxis wird nur von einem einzigen, Jahrhunderte späteren Autor (Plutarch) erwähnt. Ausgrabungen der vermeintlichen Stätte fanden keine Babyskelette, sondern nur Knochen erwachsener Männer – vermutlich hingerichteter Verbrecher."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Julius Caesars Name stammt vom Kaiserschnitt",
  "text": "Seine Mutter Aurelia lebte nachweislich noch Jahrzehnte nach seiner Geburt weiter – ein Kaiserschnitt war zu dieser Zeit für die Mutter praktisch immer tödlich. Die tatsächliche Namensherkunft ist unklar.",
  "quelle": "Plinius der Ältere, Naturalis historia VII; Caesars Mutter Aurelia überlebte seine Geburt um Jahrzehnte"
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Caesars letzte Worte waren 'Auch du, mein Sohn Brutus?'",
  "text": "Der Historiker Sueton überliefert diese Version nur als Gerücht. Ob Caesar überhaupt letzte Worte sprach, ist historisch nicht gesichert."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Die Pyramiden wurden von Sklaven erbaut",
  "text": "Ausgrabungen von Arbeitersiedlungen bei Gizeh zeigen, dass die Pyramiden überwiegend von bezahlten, gut versorgten Facharbeitern und Bauern während der Nilüberschwemmungszeit errichtet wurden.",
  "quelle": "Mark Lehner und Zahi Hawass: Grabungen der Arbeitersiedlung von Gizeh; Encyclopaedia Britannica: Pyramids of Giza"
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Kleopatra starb an einem einzigen Schlangenbiss",
  "text": "Schon antike Quellen waren sich uneinig; moderne Toxikologen bezweifeln, dass eine einzelne Schlange einen so kontrollierten, schmerzfreien Tod verursacht haben könnte."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Napoleons Truppen schossen der Sphinx die Nase ab",
  "text": "Zeichnungen aus dem 18. Jahrhundert – vor Napoleons Ägyptenfeldzug – zeigen die Sphinx bereits ohne Nase. Die Beschädigung geschah vermutlich Jahrhunderte früher.",
  "quelle": "Zeichnungen von Frederik Ludvig Norden, veröffentlicht 1755 und damit vor Napoleons Ägyptenfeldzug"
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Sokrates wurde allein wegen echter Gottlosigkeit hingerichtet",
  "text": "Historiker sehen den Prozess auch stark politisch motiviert – als Abrechnung mit seinen Verbindungen zu unbeliebten aristokratischen Schülern nach dem Sturz der 'Dreißig Tyrannen'."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Hannibal verlor alle seine Kriegselefanten in den Alpen",
  "text": "Die meisten Tiere starben tatsächlich an Kälte und Erschöpfung, doch mindestens ein Elefant überlebte Berichten zufolge bis nach Italien."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Archimedes rief 'Heureka' beim Baden aus",
  "text": "Die Anekdote stammt vom römischen Autor Vitruv, rund 200 Jahre nach Archimedes' Tod – zeitgenössisch ist sie nicht belegt."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Der Koloss von Rhodos stand rittlings über dem Hafeneingang",
  "text": "Diese berühmte Darstellung stammt erst aus mittelalterlichen und Renaissance-Illustrationen; antike Ingenieure hätten eine solche Statue technisch kaum errichten können.",
  "quelle": "Encyclopaedia Britannica: Colossus of Rhodes — die Spreizstellung ist statisch nicht möglich und in keiner antiken Quelle belegt"
 },
 {
  "category": "Antike",
  "type": "Kuriosum",
  "title": "Die Terrakotta-Armee wurde zufällig entdeckt",
  "text": "1974 stießen Bauern beim Brunnenbohren in der chinesischen Provinz Shaanxi zufällig auf die über 8.000 lebensgroßen Tonkrieger des ersten chinesischen Kaisers."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Bei den Olympischen Spielen herrschte reine Sportlichkeit ohne Politik",
  "text": "Während der Spiele galt zwar ein 'heiliger Frieden' (Ekecheiria), dieser wurde jedoch häufig auch für diplomatische Zwecke der Stadtstaaten instrumentalisiert."
 },
 {
  "category": "Antike",
  "type": "Kuriosum",
  "title": "Mönchtum entstand nur einmal in der Geschichte",
  "text": "Buddhistische und christliche Klostertraditionen entwickelten unabhängig voneinander erstaunlich ähnliche Konzepte von Askese, Zölibat und Gemeinschaftsleben."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Buddha war von Geburt an ein Bettelmönch",
  "text": "Der Überlieferung nach wurde Siddhartha Gautama als wohlhabender Prinz geboren und wandte sich erst als junger Erwachsener bewusst von Reichtum und Palastleben ab."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Das 'Recht der ersten Nacht' war weitverbreitete feudale Praxis",
  "text": "Historiker finden kaum verlässliche zeitgenössische Belege für eine systematische Ausübung dieses angeblichen Rechts; es dürfte größtenteils spätere literarische Erfindung sein.",
  "quelle": "Alain Boureau: Das Recht der ersten Nacht. Zur Geschichte einer Fiktion"
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Wikinger waren reine Plünderer ohne Handelskultur",
  "text": "Wikinger betrieben ausgedehnte Handelsnetzwerke bis nach Byzanz und Bagdad und gründeten zahlreiche bis heute bestehende Städte, darunter Dublin.",
  "quelle": "Neil Price: Die wahre Geschichte der Wikinger; Handelsbefunde aus Haithabu und Birka"
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Kreuzritter kämpften ausschließlich aus religiösem Eifer",
  "text": "Viele Teilnehmer verband mit dem religiösen Motiv auch die Aussicht auf Landbesitz, Beute, Handelsvorteile und gesellschaftliches Ansehen."
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Der Begriff 'Vandalismus' beweist besondere Zerstörungswut der Vandalen",
  "text": "Der Begriff wurde erst über 1000 Jahre später im 18. Jahrhundert geprägt; die historischen Vandalen plünderten Rom 455 zwar, richteten aber wohl keine ungewöhnlich systematische Zerstörung an."
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Attila der Hunne war nur ein ungebildeter Wilder",
  "text": "Zeitgenössische Quellen wie der oströmische Gesandte Priskos beschreiben ihn auch als überraschend genügsam, diplomatisch geschickt und an römischer Kultur interessiert."
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Die Lebenserwartung im Mittelalter betrug generell nur 30 Jahre",
  "text": "Diese Zahl wird stark durch hohe Kindersterblichkeit verzerrt; wer das Erwachsenenalter erreichte, hatte durchaus realistische Chancen auf 60 bis 70 Lebensjahre."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Marco Polo brachte Nudeln aus China nach Italien",
  "text": "Es gibt Belege für Nudelgerichte im Mittelmeerraum bereits vor Marco Polos Reise; die populäre Legende entstand vermutlich erst im 20. Jahrhundert durch eine amerikanische Werbekampagne.",
  "quelle": "Encyclopaedia Britannica: Pasta — italienische Nudelbelege aus der Zeit vor Polos Rückkehr 1295"
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Die Magna Carta garantierte allen Engländern Freiheit",
  "text": "Ursprünglich schützte sie fast ausschließlich die Rechte des Adels gegenüber der Krone; erst spätere Interpretationen im 17. Jahrhundert weiteten ihre Bedeutung auf allgemeine Bürgerrechte aus."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Die Assassinen waren durch Haschisch berauschte Auftragsmörder",
  "text": "Der Name geht vermutlich auf eine abwertende arabische Fremdbezeichnung zurück; historische Belege für systematischen Drogenkonsum der Sekte gelten heute als unzuverlässig.",
  "quelle": "Farhad Daftary: The Assassin Legends. Myths of the Isma'ilis"
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Im Mittelalter herrschte durchgehender wissenschaftlicher Stillstand",
  "text": "Die Epoche brachte bedeutende Innovationen wie die Brille, mechanische Uhren, den Buchdruck, das Dreifelder-System in der Landwirtschaft und gotische Kathedralbaukunst.",
  "quelle": "Edward Grant: The Foundations of Modern Science in the Middle Ages; Lynn White: Medieval Technology and Social Change"
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Die Templerritter wurden wegen erwiesener Häresie vernichtet",
  "text": "Historiker gehen heute überwiegend davon aus, dass der hoch verschuldete französische König Philipp IV. die Anklagen 1307 vor allem konstruierte, um sich des Vermögens des Ordens zu bemächtigen."
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Der Investiturstreit drehte sich nur um religiöse Fragen",
  "text": "Im Kern ging es vor allem um handfeste Macht- und Besitzfragen: wer Bischöfe – und damit große Ländereien – einsetzen durfte, Kaiser oder Papst."
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Die Hanse war ein fest organisierter Staat",
  "text": "Tatsächlich war die Hanse ein loses, informelles Netzwerk von Kaufleuten und Städten ohne zentrale Verfassung, gemeinsame Kasse oder feste Mitgliederliste."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Chinesische Schiffe der Ming-Zeit waren primitive Boote",
  "text": "Admiral Zheng Hes Flotte im frühen 15. Jahrhundert umfasste Schiffe von bis zu 120 Metern Länge – deutlich größer als alle europäischen Schiffe dieser Zeit.",
  "quelle": "Louise Levathes: When China Ruled the Seas; Encyclopaedia Britannica: Zheng He"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "Galileo Galilei wurde wegen seiner Thesen gefoltert",
  "text": "Er wurde 1633 zu Hausarrest verurteilt, jedoch nicht gefoltert. Die Androhung von Folter war zu dieser Zeit ein übliches, meist nicht vollzogenes Verhörinstrument der Inquisition.",
  "quelle": "Akten des Inquisitionsprozesses von 1633, Vatikanisches Apostolisches Archiv; Encyclopaedia Britannica: Galileo"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Die Pilgerväter suchten Religionsfreiheit für alle",
  "text": "Die Puritaner an Bord der Mayflower suchten vor allem Freiheit für die eigene Glaubensgemeinschaft und praktizierten später selbst erhebliche religiöse Intoleranz gegenüber Andersdenkenden."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Hexenprozesse waren primär von der katholischen Kirche getragen",
  "text": "Tatsächlich fanden besonders viele Hexenverfolgungen in protestantischen Gebieten Mitteleuropas statt – beide Konfessionen beteiligten sich intensiv."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "Die Pest traf vor allem unhygienische arme Bevölkerungsschichten",
  "text": "Die Übertragung erfolgte primär durch Flöhe auf Ratten unabhängig vom persönlichen Reinlichkeitsgrad; auch wohlhabende Haushalte und Klöster waren stark betroffen.",
  "quelle": "Ole J. Benedictow: The Black Death — Sterblichkeit quer durch alle Stände, einschließlich Klerus und Adel"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Elisabeth I. blieb aus reiner Prinzipientreue unverheiratet",
  "text": "Ihre Ehelosigkeit war wohl auch eine bewusste politische Strategie, um die eigene Machtposition nicht durch eine Heiratsallianz zu gefährden."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Peter der Große führte eine Bartsteuer zur reinen Geldbeschaffung ein",
  "text": "Die 1698 eingeführte Steuer diente auch der symbolischen Modernisierung: Wer den traditionellen Bart behalten wollte, musste zahlen und erhielt eine Bart-Münzmarke als Nachweis."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Die Azteken hielten die Spanier für zurückkehrende Götter",
  "text": "Diese oft erzählte Legende stammt vor allem aus spanischen Quellen nach der Eroberung und wird von vielen Historikern heute als nachträgliche Rechtfertigungserzählung angezweifelt."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Guy Fawkes handelte aus persönlichem Hass allein",
  "text": "Der 'Gunpowder Plot' von 1605 war eine koordinierte katholische Verschwörung gegen die protestantische Verfolgungspolitik, nicht die Tat eines Einzelnen."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Ludwig XIV. badete regelmäßig",
  "text": "Der Sonnenkönig soll kaum gebadet haben und stattdessen parfümierte Puder sowie häufigen Hemdenwechsel zur Körperpflege bevorzugt haben – zeittypisch für den europäischen Hochadel."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "Kolumbus wusste, dass er einen neuen Kontinent entdeckt hatte",
  "text": "Kolumbus glaubte bis zu seinem Tod, ostasiatische Inseln erreicht zu haben; der Kontinentcharakter Amerikas wurde erst durch spätere Entdecker wie Amerigo Vespucci erkannt.",
  "quelle": "Kolumbus' eigene Bordbücher und Briefe; Encyclopaedia Britannica: Christopher Columbus"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Magellan vollendete persönlich die erste Weltumsegelung",
  "text": "Magellan starb 1521 auf den Philippinen; nur sein Kapitän Juan Sebastián Elcano und eine Handvoll Überlebender vollendeten tatsächlich die vollständige Weltumsegelung."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Die Boston Tea Party war spontaner Protest wütender Bürger",
  "text": "Die Aktion von 1773 war eine sorgfältig organisierte politische Demonstration der 'Sons of Liberty', bei der sich Teilnehmer bewusst als Native Americans verkleideten."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Marie Curie starb direkt an ihrer Radioaktivitätsforschung",
  "text": "Sie starb 1934 an aplastischer Anämie, vermutlich durch jahrelange Strahlenbelastung – ihre Laborhefte sind bis heute radioaktiv kontaminiert und werden in bleiausgekleideten Behältern aufbewahrt."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Einstein war Mitentwickler der Atombombe",
  "text": "Einstein unterschrieb 1939 lediglich einen warnenden Brief an Präsident Roosevelt zur Möglichkeit einer deutschen Atombombe, war selbst aber nie am Manhattan-Projekt beteiligt."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Die Spanische Grippe stammte ursprünglich aus Spanien",
  "text": "Frühe Fälle sind vermutlich in den USA oder Frankreich dokumentiert; Spanien erhielt den Namen nur, weil es als neutrales Land im Ersten Weltkrieg offen über die Pandemie berichten durfte.",
  "quelle": "Encyclopaedia Britannica: Influenza pandemic of 1918–19 — zur Ursprungsdebatte und zur fehlenden Pressezensur im neutralen Spanien"
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Rosa Parks war einfach nur eine müde Näherin",
  "text": "Parks war eine langjährige, geschulte Bürgerrechtsaktivistin der NAACP; ihre Weigerung war eine bewusste, vorbereitete Form des zivilen Ungehorsams."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Churchill war während des gesamten Krieges unangefochten beliebt",
  "text": "Trotz seines Kriegsruhms verlor seine konservative Partei die Wahlen 1945 deutlich – viele Briten wollten nach dem Krieg vor allem soziale Reformen statt weiterer Kriegsführerpolitik."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Die Mondlandung 1969 wurde in einem Studio gefälscht",
  "text": "Diese Verschwörungstheorie ist durch überwältigende physikalische Belege widerlegt – etwa von Astronauten hinterlassene Spiegel auf dem Mond, die bis heute per Laser vermessbar sind.",
  "quelle": "NASA Lunar Reconnaissance Orbiter: Aufnahmen der Landestellen; die Laserreflektoren der Apollo-Missionen sind bis heute von der Erde aus messbar"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Stalin war der Geburtsname des sowjetischen Diktators",
  "text": "Er wurde als Josef Wissarionowitsch Dschugaschwili geboren; 'Stalin' ('der Stählerne') war ein später angenommener Kampfname.",
  "quelle": "Encyclopaedia Britannica: Joseph Stalin — geboren als Ioseb Dschugaschwili"
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Der Kalte Krieg war ein völlig gewaltfreier Konflikt",
  "text": "Auch wenn die Supermächte nie direkt gegeneinander kämpften, verursachten zahlreiche 'Stellvertreterkriege' in Korea, Vietnam und Afghanistan Millionen Tote weltweit."
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Weltweite Zeitzonen gab es schon immer",
  "text": "Erst mit dem Ausbau der Eisenbahn im 19. Jahrhundert wurden standardisierte Zeitzonen notwendig; zuvor hatte praktisch jede Stadt ihre eigene lokale Sonnenzeit."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Nelson Mandela galt während seiner gesamten Haftzeit international als Held",
  "text": "Erst ab den 1980er-Jahren wuchs der internationale Druck gegen die Apartheid deutlich; zuvor stand er in manchen westlichen Regierungen sogar noch auf Terrorlisten."
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Die Berliner Luftbrücke galt von Anfang an als sicherer Erfolg",
  "text": "Anfangs hielten viele Militärexperten eine dauerhafte Luftversorgung von rund zwei Millionen Berlinern für technisch kaum durchführbar – die logistische Leistung übertraf am Ende alle Erwartungen."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Anne Franks Tagebuch wurde völlig unverändert veröffentlicht",
  "text": "Ihr Vater Otto Frank redigierte nach dem Krieg das Originaltagebuch für die erste Veröffentlichung leicht, wobei einige persönliche Passagen zunächst gekürzt wurden."
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Der erste Computer-'Bug' war rein metaphorisch gemeint",
  "text": "1947 fanden Techniker tatsächlich eine echte Motte in einem Relais eines frühen Harvard-Computers und klebten sie als Kuriosum ins Logbuch – Ursprung des bis heute gebräuchlichen Begriffs."
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Die erste E-Mail der Geschichte enthielt eine bedeutungsvolle Botschaft",
  "text": "Die erste jemals versendete E-Mail 1971 durch Ray Tomlinson enthielt nach eigener späterer Aussage lediglich eine bedeutungslose Testzeichenfolge wie 'QWERTYUIOP'."
 },
 {
  "category": "Legenden",
  "type": "Nuance",
  "title": "König Artus und die Ritter der Tafelrunde sind historisch verbürgt",
  "text": "Es gibt keine zeitgenössischen Belege für einen historischen König Artus; die Legende verschmilzt vermutlich mehrere frühmittelalterliche britannische Kriegsherren mit späterer literarischer Ausschmückung."
 },
 {
  "category": "Legenden",
  "type": "Nuance",
  "title": "Robin Hood war eine reale historische Einzelperson",
  "text": "Historiker vermuten eher ein literarisches Sammelbild aus mehreren realen mittelalterlichen Gesetzlosen des 13./14. Jahrhunderts als eine einzelne verbürgte Figur."
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Der Heilige Gral ist ein real existierendes Artefakt",
  "text": "Der Gral taucht erstmals in mittelalterlichen Artus-Romanen des 12. Jahrhunderts als literarisches Symbol auf, nicht als historisch belegtes Objekt.",
  "quelle": "Richard Barber: The Holy Grail. Imagination and Belief — der Gral erscheint erstmals um 1180 bei Chrétien de Troyes"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "El Dorado war eine reale goldene Stadt in Südamerika",
  "text": "Die Legende geht vermutlich auf ein reales Ritual eines Muisca-Stammesführers zurück und wurde von europäischen Eroberern zur Legende einer sagenhaften Goldstadt aufgebauscht, die nie gefunden wurde.",
  "quelle": "Encyclopaedia Britannica: El Dorado — Ursprung im Einweihungsritual am Guatavita-See, nicht in einer Stadt"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Die Osterinsel-Statuen wurden von Außerirdischen errichtet",
  "text": "Archäologische Untersuchungen zeigen, dass die Rapa-Nui-Bevölkerung die Statuen mit ausgeklügelten, rein menschlichen Techniken schuf und mutmaßlich mittels Seilen 'gehend' transportierte.",
  "quelle": "Jo Anne Van Tilburg, Easter Island Statue Project; experimentelle Nachweise zum Transport der Moai durch Menschen"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Prester John, der legendäre christliche König im Osten, war real",
  "text": "Ab dem 12. Jahrhundert kursierten in Europa Briefe eines angeblichen mächtigen christlichen Priesterkönigs in Asien oder Afrika – eine bis heute nie verifizierte Legende.",
  "quelle": "Encyclopaedia Britannica: Prester John — Ursprung in einem gefälschten Brief des 12. Jahrhunderts"
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Auf Oak Island wurde ein realer Piratenschatz gefunden",
  "text": "Trotz jahrzehntelanger, kostspieliger Suchexpeditionen auf der kanadischen Insel wurde nie ein definitiver historischer Beleg für einen vergrabenen Schatz gefunden."
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Area 51 bewahrt Beweise für außerirdische Besuche auf",
  "text": "Nach jahrzehntelanger Geheimhaltung bestätigten US-Behörden, dass die Anlage der geheimen Entwicklung und Erprobung von Aufklärungsflugzeugen wie der U-2 und SR-71 diente.",
  "quelle": "CIA, 2013 freigegebene Dokumentation zum U-2- und OXCART-Programm; US National Archives"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Die Illuminaten kontrollieren bis heute im Verborgenen die Weltpolitik",
  "text": "Der historische Illuminatenorden wurde 1776 in Bayern gegründet und bereits 1785 von der bayerischen Regierung verboten und faktisch zerschlagen.",
  "quelle": "Encyclopaedia Britannica: Illuminati — der Orden wurde 1785 in Bayern verboten und löste sich auf"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Yeti und Bigfoot sind wissenschaftlich nachgewiesene Wesen",
  "text": "Trotz zahlreicher angeblicher Sichtungen und Fußspuren-Funde konnte bislang kein einziger wissenschaftlich verifizierter Beweis für die Existenz dieser Kryptiden erbracht werden.",
  "quelle": "Proceedings of the Royal Society B (2014): DNA-Analyse angeblicher Yeti-Proben durch Bryan Sykes — sämtlich bekannte Tierarten"
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Alexander Graham Bell war der unbestrittene alleinige Erfinder des Telefons",
  "text": "Der italienische Erfinder Antonio Meucci entwickelte bereits Jahre zuvor ein ähnliches Gerät; 2002 erkannte der US-Kongress symbolisch Meuccis frühen Beitrag an."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Marconi erfand das Radio als Erster und Einziger",
  "text": "Der Erfinder Nikola Tesla hatte zuvor patentierte Grundlagentechnologien entwickelt; 1943 erkannte der US Supreme Court nachträglich Teslas vorrangige Patentansprüche an."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Die Dampfmaschine war eine Erfindung des 18. Jahrhunderts",
  "text": "Bereits der antike griechische Erfinder Heron von Alexandria konstruierte im 1. Jahrhundert n. Chr. ein funktionierendes, wenn auch praktisch ungenutztes Dampfturbinen-Spielzeug (Aeolipile)."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Penicillin war die erste erfolgreiche antimikrobielle Behandlung",
  "text": "Bereits Jahrtausende zuvor nutzten Ägypter und andere Kulturen empirisch schimmelhaltige Substanzen zur Wundbehandlung, ohne den zugrunde liegenden Wirkmechanismus zu kennen."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Einstein entwickelte die Relativitätstheorie völlig isoliert",
  "text": "Er baute wesentlich auf mathematischen Vorarbeiten von Hendrik Lorentz und Henri Poincaré auf, integrierte diese aber zu einem revolutionär neuen physikalischen Gesamtkonzept."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Darwin war der Erste, der die Evolutionsidee formulierte",
  "text": "Der Naturforscher Alfred Russel Wallace entwickelte unabhängig zur gleichen Zeit eine sehr ähnliche Theorie der natürlichen Auslese; beide Konzepte wurden 1858 gemeinsam vorgestellt."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Computerprogrammierung ist eine Erfindung des 20. Jahrhunderts",
  "text": "Ada Lovelace verfasste bereits 1843 das erste theoretische Computerprogramm für Charles Babbages nie fertiggestellte 'Analytical Engine'."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Marie Curie war der einzige Nobelpreisträger ihrer Familie",
  "text": "Insgesamt erhielten fünf Mitglieder der Familie Curie/Joliot-Curie über zwei Generationen hinweg Nobelpreise in Physik oder Chemie."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Louis Pasteur entdeckte als Erster Mikroorganismen",
  "text": "Der niederländische Naturforscher Antonie van Leeuwenhoek beobachtete bereits im 17. Jahrhundert erstmals Mikroorganismen; Pasteurs Pionierleistung war der Nachweis ihrer Rolle bei Krankheiten und Gärung."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Der erste Motorflug der Gebrüder Wright wurde sofort weltweit gefeiert",
  "text": "Der Flug 1903 wurde von der zeitgenössischen Presse zunächst kaum beachtet; erst spätere, öffentlich vorgeführte Flüge etablierten den historischen Ruhm der Brüder."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Die erste Computermaus war aus Kunststoff",
  "text": "Der Prototyp von Douglas Engelbart 1964 bestand tatsächlich aus einem einfachen Holzgehäuse mit zwei Metallrädern – lange vor den heute bekannten Kunststoffmäusen."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Röntgenstrahlen wurden gezielt erforscht und entdeckt",
  "text": "Wilhelm Conrad Röntgen entdeckte die nach ihm benannte Strahlung 1895 eher zufällig bei Experimenten mit Kathodenstrahlröhren und untersuchte das Phänomen erst danach systematisch."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Der erste Kunststoff wurde für die Industrie entwickelt",
  "text": "Das erste vollsynthetische Kunststoff Bakelit wurde 1907 ursprünglich als Ersatzstoff für das knapper werdende Naturmaterial Schellack entwickelt."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Nuance",
  "title": "Vasco da Gama entdeckte als Erster den Seeweg nach Indien",
  "text": "Arabische und ostafrikanische Seefahrer nutzten bereits Jahrhunderte zuvor etablierte Handelsrouten im Indischen Ozean; da Gamas Neuerung war die erste direkte europäische Seeverbindung."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Nuance",
  "title": "Amerigo Vespucci entdeckte den amerikanischen Kontinent",
  "text": "Vespucci erkannte als einer der Ersten, dass es sich um einen eigenständigen Kontinent handelte – nach ihm wurde er benannt, entdeckt hatte ihn aber zuvor bereits Kolumbus und noch früher die Wikinger."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Nuance",
  "title": "James Cook entdeckte ein unbewohntes Australien",
  "text": "Aborigines besiedelten den Kontinent bereits seit mindestens 50.000 Jahren; das Konzept 'terra nullius' (niemandes Land), mit dem die britische Krone die Inbesitznahme rechtfertigte, ignorierte diese Realität bewusst."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Kuriosum",
  "title": "Grönland heißt zufällig 'grünes Land'",
  "text": "Der Sage nach gab der Wikinger Erik der Rote der eisigen Insel diesen positiv klingenden Namen bewusst als Marketingtrick, um mehr Siedler zur Kolonisierung zu gewinnen."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Mythos",
  "title": "Das Römische Reich fiel an einem einzigen historischen Datum",
  "text": "Der 'Untergang' 476 n. Chr. markiert nur die Absetzung des letzten weströmischen Kaisers; das oströmische Reich (Byzanz) bestand als direkte Fortsetzung noch fast 1000 Jahre weiter bis 1453.",
  "quelle": "Peter Heather: Der Untergang des Römischen Weltreichs; Encyclopaedia Britannica: Fall of Rome"
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Nuance",
  "title": "Das britische Weltreich war das erste, in dem 'die Sonne nie unterging'",
  "text": "Diese Formulierung wurde bereits im 16./17. Jahrhundert für das spanische Kolonialreich Karls V. verwendet, das sich ebenfalls über alle bekannten Erdteile erstreckte."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Nuance",
  "title": "Die Mongolen hinterließen nur Zerstörung ohne kulturellen Beitrag",
  "text": "Das Mongolenreich förderte unter der 'Pax Mongolica' erheblich den Ost-West-Handel entlang der Seidenstraße sowie den Austausch von Technologien, Ideen und religiöser Toleranz."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Kuriosum",
  "title": "Der Panama-Kanal wurde ohne größere menschliche Kosten gebaut",
  "text": "Beim Bau, insbesondere während der gescheiterten ersten französischen Bauphase, starben schätzungsweise über 20.000 Arbeiter vor allem an Malaria und Gelbfieber."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Mythos",
  "title": "Die Seidenstraße war eine einzelne, feste Route",
  "text": "Tatsächlich handelte es sich um ein weitverzweigtes Netzwerk verschiedenster Land- und Seehandelsrouten zwischen Asien, dem Nahen Osten und Europa, die sich über Jahrhunderte veränderten.",
  "quelle": "Peter Frankopan: Licht aus dem Osten; der Begriff selbst stammt von Ferdinand von Richthofen (1877)"
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Kuriosum",
  "title": "Kolonialreiche wurden von der gesamten Bevölkerung des Mutterlandes einhellig unterstützt",
  "text": "In vielen europäischen Ländern gab es zeitgenössisch durchaus kritische Stimmen und Debatten gegen koloniale Expansion, auch wenn diese oft eine gesellschaftliche Minderheitsposition blieben."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Die Azteken praktizierten nur in geringem Umfang Menschenopfer",
  "text": "Historiker sind sich über das genaue Ausmaß uneinig; spanische Chronisten übertrieben vermutlich zur moralischen Rechtfertigung der eigenen Eroberung, dennoch belegen Funde zehntausende Opfer über die Reichsgeschichte."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Die Inka kannten kein Schriftsystem",
  "text": "Sie nutzten ein komplexes Knotenschriftsystem aus gefärbten Schnüren (Quipu) zur Verwaltung von Zahlen und vermutlich auch narrativen Informationen, dessen vollständige Entschlüsselung bis heute nicht gelungen ist."
 },
 {
  "category": "Asien & Amerika",
  "type": "Mythos",
  "title": "Die Maya-Zivilisation verschwand plötzlich über Nacht",
  "text": "Der Niedergang der klassischen Maya-Städte im 9. Jahrhundert vollzog sich über Jahrzehnte durch Dürre, Kriege und Ressourcenknappheit; zahlreiche Maya-Gemeinschaften bestehen bis heute fort.",
  "quelle": "Encyclopaedia Britannica: Maya — Aufgabe der Tieflandzentren über rund 150 Jahre, Fortbestand von Sprache und Bevölkerung bis heute"
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Japan war während der Sakoku-Zeit vollständig isoliert",
  "text": "Über den künstlichen Hafen Dejima unterhielt Japan durchgehend begrenzten, aber bedeutsamen Handel mit niederländischen und chinesischen Kaufleuten."
 },
 {
  "category": "Asien & Amerika",
  "type": "Mythos",
  "title": "Dschingis Khans Grab wurde bereits gefunden",
  "text": "Der genaue Bestattungsort des mongolischen Herrschers wurde der Überlieferung nach bewusst geheim gehalten; trotz jahrzehntelanger archäologischer Suche wurde sein Grab bis heute nicht identifiziert.",
  "quelle": "National Geographic, Valley of the Khans Project — bis heute kein bestätigter Fund"
 },
 {
  "category": "Asien & Amerika",
  "type": "Mythos",
  "title": "Die Chinesische Mauer ist ein einziges durchgehendes Bauwerk",
  "text": "Tatsächlich besteht sie aus zahlreichen, über mehr als 2000 Jahre von verschiedenen Dynastien errichteten und oft nicht direkt verbundenen Mauerabschnitten.",
  "quelle": "Chinesische Denkmalbehörde, Gesamtvermessung 2012; Encyclopaedia Britannica: Great Wall of China"
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Samurai folgten stets einem strengen, jahrhundertealten Ehrenkodex",
  "text": "Der als 'Bushido' bekannte, stark idealisierte Verhaltenskodex wurde in seiner heute bekannten Form überwiegend erst in der Edo-Zeit und besonders im frühen 20. Jahrhundert systematisiert."
 },
 {
  "category": "Asien & Amerika",
  "type": "Kuriosum",
  "title": "Die Terrakotta-Armee zeigt lauter identische Soldatenfiguren",
  "text": "Jede der über 8.000 Tonfiguren weist individuell unterschiedliche Gesichtszüge, Frisuren und Ausrüstungsdetails auf – vermutlich nach realen Vorbildern der kaiserlichen Armee gestaltet."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Konfuzius war zu Lebzeiten ein hochgeehrter, einflussreicher Berater",
  "text": "Zu Lebzeiten hatte er nur mäßigen politischen Erfolg und wechselnde Anstellungsverhältnisse; sein enormer Einfluss entfaltete sich vor allem postum über Jahrhunderte durch seine Schüler."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Indien war vor der britischen Kolonialherrschaft stets politisch geeint",
  "text": "Der Subkontinent bestand über weite Teile seiner Geschichte aus zahlreichen unabhängigen Königreichen; größere reichsweite Einigungen wie Maurya oder Mogulreich waren eher die Ausnahme."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Gandhi war von Anfang an ein überzeugter Verfechter gewaltfreien Widerstands",
  "text": "Seine Philosophie des gewaltfreien Widerstands (Satyagraha) entwickelte sich erst schrittweise während seiner Zeit als Anwalt in Südafrika, wo er zunächst für eine loyale Einbindung ins britische Empire eintrat."
 },
 {
  "category": "Asien & Amerika",
  "type": "Kuriosum",
  "title": "Die Kamikaze-Taifune gegen die Mongolen waren einmaliger Zufall",
  "text": "Bemerkenswerterweise zerstörten gleich zwei separate schwere Taifune 1274 und erneut 1281 jeweils die mongolischen Invasionsflotten kurz nach deren Ankunft vor Japan."
 },
 {
  "category": "Asien & Amerika",
  "type": "Mythos",
  "title": "Die Opiumkriege wurden von China begonnen",
  "text": "Die Kriege 1839–1860 gingen von militärischen Interventionen Großbritanniens und später Frankreichs aus, nachdem chinesische Behörden versucht hatten, den illegalen britischen Opiumhandel zu unterbinden.",
  "quelle": "Julia Lovell: The Opium War; Encyclopaedia Britannica: Opium Wars"
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Mansa Musa war nur ein regionaler Fürst von geringer Bedeutung",
  "text": "Zeitgenössische arabische und europäische Quellen beschreiben ihn als einen der reichsten Menschen der damals bekannten Welt; sein Goldreichtum soll 1324 kurzzeitig den Goldpreis in Kairo destabilisiert haben."
 },
 {
  "category": "Asien & Amerika",
  "type": "Kuriosum",
  "title": "Äthiopien wurde nie von einer europäischen Kolonialmacht erobert",
  "text": "Äthiopien besiegte 1896 in der Schlacht von Adua eine italienische Invasionsarmee entscheidend und blieb damit neben Liberia die einzige afrikanische Nation, die ihre Unabhängigkeit dauerhaft bewahrte."
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Wilhelm Tell war eine historisch verbürgte reale Person",
  "text": "Es gibt keine zeitgenössischen Quellen für Wilhelm Tell aus dem angeblichen 14. Jahrhundert; die Geschichte des Apfelschusses erscheint erstmals rund 200 Jahre später in Schweizer Chroniken.",
  "quelle": "Encyclopaedia Britannica: William Tell; älteste ausführliche Fassung bei Aegidius Tschudi im 16. Jahrhundert"
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Die Curse of the Hope-Diamant brachte allen Besitzern Unglück",
  "text": "Der berühmte blaue Diamant wird mit zahlreichen Unglücksgeschichten seiner früheren Besitzer in Verbindung gebracht – die meisten dieser Anekdoten lassen sich historisch nicht eindeutig belegen."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Kartoffeln waren in Europa von Anfang an ein beliebtes Grundnahrungsmittel",
  "text": "Nach ihrer Einführung aus Amerika im 16. Jahrhundert wurden Kartoffeln in weiten Teilen Europas zunächst misstrauisch beäugt und teils sogar als giftig oder unrein abgelehnt."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Kuriosum",
  "title": "Die Wikinger nutzten nur die berühmten Runensteine zur schriftlichen Kommunikation",
  "text": "Neben monumentalen Runensteinen nutzten Wikinger auch Alltagsritzungen auf Holz und Knochen für private Nachrichten, von denen durch Fundorte wie Bergen zahlreiche Beispiele erhalten sind."
 },
 {
  "category": "Moderne",
  "type": "Kuriosum",
  "title": "Die Internationale Raumstation ist das teuerste je gebaute Bauwerk",
  "text": "Mit geschätzten Baukosten von über 150 Milliarden US-Dollar gilt die ISS gemeinhin als teuerstes von Menschen je errichtetes einzelnes Bauwerk der Geschichte."
 },
 {
  "category": "Antike",
  "type": "Kuriosum",
  "title": "Das antike Rom hatte bereits ein ausgeklügeltes Fast-Food-System",
  "text": "Sogenannte 'Thermopolien' – Straßenimbisse mit eingelassenen Vorratsgefäßen – waren in römischen Städten wie Pompeji weitverbreitet, da viele einfache Wohnungen über keine eigene Küche verfügten."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Schachspiel und Politik waren in der Frühen Neuzeit strikt getrennte Welten",
  "text": "Am Hof Ludwigs XIV. und anderer Monarchen dienten öffentliche Schachpartien häufig als subtile diplomatische Machtdemonstrationen zwischen rivalisierenden Gesandtschaften."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Der Eiffelturm war von Anfang an bei den Parisern beliebt",
  "text": "Beim Bau 1889 protestierten zahlreiche prominente Pariser Künstler und Intellektuelle in einem offenen Brief gegen den Turm als angebliche 'nutzlose und monströse' Verschandelung der Stadt."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Die Bibliothek von Alexandria wurde an einem Tag verbrannt",
  "text": "Es gab kein einzelnes Feuer, das die Bibliothek vernichtete. Wahrscheinlicher ist ein Verfall über Jahrhunderte: Brände, Bürgerkriege, ausbleibende Finanzierung und der Wegzug von Gelehrten. Bibliotheken sterben meist an Vernachlässigung, nicht an Flammen.",
  "quelle": "Roger S. Bagnall zur Überlieferungslage; Encyclopaedia Britannica: Library of Alexandria"
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Griechische Statuen waren strahlend weiß",
  "text": "Sie waren bunt bemalt. Farbreste lassen sich mit ultraviolettem Licht und Spektroskopie nachweisen. Das Ideal des weißen Marmors entstand erst, als die Farbe längst verwittert war – und prägte dann rückwirkend das Bild der Antike."
 },
 {
  "category": "Antike",
  "type": "Kuriosum",
  "title": "Römischer Beton wird im Meerwasser fester",
  "text": "Römischer Beton mit Vulkanasche bildet im Kontakt mit Meerwasser Minerale, die Risse schließen. Manche Hafenanlagen stehen nach zweitausend Jahren noch – moderner Portlandbeton hält im Meer selten hundert."
 },
 {
  "category": "Antike",
  "type": "Nuance",
  "title": "Gladiatorenkämpfe endeten fast immer tödlich",
  "text": "Ausgebildete Gladiatoren waren teuer. Die Ausbildung dauerte Jahre, und ein toter Kämpfer bedeutete einen Totalverlust. Viele Kämpfe endeten daher vor dem Tod – was die Grausamkeit der Institution nicht mildert."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Im Mittelalter hielt man die Erde für eine Scheibe",
  "text": "Die Kugelgestalt war seit der Antike bekannt und im mittelalterlichen Europa gelehrte Überzeugung. Der Reichsapfel als Herrschaftszeichen bildet eine Kugel ab. Die Scheiben-Erzählung entstand größtenteils im 19. Jahrhundert.",
  "quelle": "Jeffrey Burton Russell: Inventing the Flat Earth — zur Entstehung der Erzählung im 19. Jahrhundert"
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Das Mittelalter war finster und stillstehend",
  "text": "In diesen Jahrhunderten entstanden Universitäten, Buchhaltung, Brille, mechanische Uhr, Windmühle und Hochofen. Der Begriff 'finsteres Mittelalter' stammt von Humanisten, die sich selbst als Wiedererwecker der Antike darstellen wollten."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Der Keuschheitsgürtel stammt aus dem Mittelalter",
  "text": "Die erhaltenen Exemplare in Museen stammen fast durchweg aus dem 18. und 19. Jahrhundert. Mehrere große Museen haben ihre Stücke inzwischen aus der Ausstellung genommen oder neu datiert.",
  "quelle": "Albrecht Classen: The Medieval Chastity Belt. A Myth-Making Process"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Kolumbus wollte beweisen, dass die Erde rund ist",
  "text": "Das war unstrittig. Der Streit ging um den Erdumfang: Die Gelehrten am spanischen Hof rechneten richtig und hielten die Strecke nach Asien für zu weit. Kolumbus rechnete falsch – und stieß auf einen Kontinent, mit dem niemand gerechnet hatte."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Hexenverfolgung war ein Phänomen des Mittelalters",
  "text": "Ihr Höhepunkt lag zwischen 1560 und 1630 – mitten in der Frühen Neuzeit, zeitgleich mit der wissenschaftlichen Revolution. Aufklärung und Verfolgung schließen sich historisch weniger aus, als man annehmen möchte."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Die Tulpenmanie ruinierte die Niederlande",
  "text": "Die Preise für Tulpenzwiebeln stiegen 1636/37 tatsächlich stark und brachen ein. Der wirtschaftliche Schaden blieb jedoch begrenzt und betraf vor allem einen kleinen Kreis von Händlern – die Erzählung vom nationalen Ruin stammt aus einem populären Buch des 19. Jahrhunderts."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Mythos",
  "title": "Ein Apfel fiel Newton auf den Kopf",
  "text": "Newton selbst erzählte von einem fallenden Apfel als Anlass zum Nachdenken über die Schwerkraft – nicht davon, getroffen worden zu sein. Die Geschichte stammt aus Gesprächen seiner letzten Lebensjahre.",
  "quelle": "William Stukeley: Memoirs of Sir Isaac Newton's Life (1752), Royal Society — Newton sah den Apfel fallen, getroffen wurde er nicht"
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Edison erfand die Glühbirne",
  "text": "Vor ihm arbeiteten mehrere Erfinder an Glühlampen. Edisons Leistung lag in einer brauchbaren Kohlefaser, im systematischen Testen tausender Materialien und vor allem im Aufbau eines ganzen Stromversorgungssystems – ohne das die Lampe nutzlos gewesen wäre."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Rosalind Franklin und die Doppelhelix",
  "text": "Die entscheidende Röntgenaufnahme 'Photo 51' stammte aus Franklins Labor und wurde Watson ohne ihr Wissen gezeigt. Der Nobelpreis 1962 ging an Watson, Crick und Wilkins; Franklin war 1958 gestorben und wurde nicht posthum berücksichtigt."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Semmelweis wurde für das Händewaschen gefeiert",
  "text": "Ignaz Semmelweis senkte die Sterblichkeit bei Wöchnerinnen drastisch, indem er Händedesinfektion anordnete. Seine Kollegen lehnten ihn ab; er starb 1865 in einer Anstalt. Die Keimtheorie, die ihn bestätigt hätte, setzte sich erst danach durch."
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Die Titanic galt als unsinkbar",
  "text": "Die Werft warb nie mit diesem Wort. Die Formulierung stammt aus Fachzeitschriften und wurde vor allem nach dem Untergang zur festen Wendung – ein Fall, in dem die Nachwelt einen Superlativ erfindet, um die Ironie zu vergrößern."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Einstein war schlecht in Mathematik",
  "text": "Er war ein sehr guter Schüler in Mathematik und Physik. Der Irrtum entstand vermutlich durch ein Schweizer Notensystem, in dem die 6 die beste Note ist – gelesen mit deutschem Maßstab wird aus einer Bestnote ein Ungenügend.",
  "quelle": "Albert Einstein Archives; Abschlusszeugnis der Kantonsschule Aarau von 1896 mit Bestnoten in Mathematik und Physik"
 },
 {
  "category": "Moderne",
  "type": "Nuance",
  "title": "Der Erste Weltkrieg begann wegen eines Attentats",
  "text": "Das Attentat von Sarajevo war der Auslöser, nicht die Ursache. Ohne Bündnissysteme, Aufrüstung, imperiale Rivalität und die Erwartung eines kurzen Krieges wäre daraus kaum ein Weltkrieg geworden."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Die Chinesische Mauer ist aus dem All zu sehen",
  "text": "Mit bloßem Auge aus der Erdumlaufbahn ist sie praktisch nicht zu erkennen – sie ist schmal und farblich kaum von der Umgebung abgesetzt. Mehrere Raumfahrer haben das ausdrücklich bestätigt."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Die Azteken hielten Cortés für einen Gott",
  "text": "Die Erzählung stammt weitgehend aus spanischen Quellen, die Jahrzehnte später entstanden, und aus indigenen Berichten unter spanischer Herrschaft. Ob Moctezuma so dachte, ist in der Forschung höchst umstritten."
 },
 {
  "category": "Asien & Amerika",
  "type": "Kuriosum",
  "title": "Das Inkareich kannte keine Schrift – aber eine Buchhaltung",
  "text": "Mit Quipus, geknoteten Schnüren, verwalteten die Inka Steuern, Vorräte und Bevölkerungszahlen über ein Reich von tausenden Kilometern. Wie viel darüber hinaus in ihnen gespeichert war, ist bis heute nicht vollständig entschlüsselt."
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Wikinger trugen Hörnerhelme",
  "text": "Kein einziger archäologischer Fund belegt sie. Das Bild stammt aus der Ausstattung von Wagner-Aufführungen im 19. Jahrhundert und aus der Romantik.",
  "quelle": "Nationalmuseet Kopenhagen; Kostümentwürfe von Carl Emil Doepler für die Bayreuther Festspiele 1876"
 },
 {
  "category": "Legenden",
  "type": "Nuance",
  "title": "Marie-Antoinette sagte 'Sollen sie doch Kuchen essen'",
  "text": "Der Satz taucht bei Rousseau auf, als sie ein Kind war und noch nicht in Frankreich lebte. Zugeschrieben wurde er ihr erst später – ein Beispiel dafür, wie politische Propaganda Zitate wandern lässt."
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Napoleon war auffallend klein",
  "text": "Drei französische Quellen – sein Kammerdiener, General Gourgaud und sein Leibarzt – nennen gut 5 Fuß 2 Zoll. Der französische Zoll maß damals 2,7 cm, der englische 2,54 cm. Umgerechnet ergibt das etwa 1,67 bis 1,70 Meter und damit für einen Franzosen seiner Zeit eher leicht über dem Durchschnitt. Der Irrtum entstand durch die Verwechslung der Maßsysteme, verstärkt durch britische Karikaturen.",
  "quelle": "Encyclopaedia Britannica: Napoleon I; Obduktionsbericht von Francesco Antommarchi, St. Helena 1821"
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Der kürzeste Krieg der Geschichte",
  "text": "Der britisch-sansibarische Krieg begann am 27. August 1896 um 9 Uhr und war vor 9:45 Uhr entschieden – je nach Zählung zwischen 38 und 45 Minuten. Auf sansibarischer Seite gab es rund 500 Opfer; die Kürze des Krieges sagt nichts über seine Härte."
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Römische Kaiser hoben oder senkten den Daumen über Leben und Tod",
  "text": "Die überlieferte Wendung lautet pollice verso, gedrehter Daumen — in welche Richtung, sagt keine antike Quelle. Der gesenkte Daumen für den Tod stammt aus dem Gemälde Pollice Verso von Jean-Léon Gérôme (1872), das die Vorstellung weltweit prägte. Möglich ist auch das Gegenteil: der gestreckte Daumen als Zeichen für das Schwert.",
  "quelle": "Encyclopaedia Britannica: gladiator; Gérôme, Pollice Verso, 1872 (Phoenix Art Museum)"
 },
 {
  "category": "Antike",
  "type": "Mythos",
  "title": "Die Gladiatoren kämpften immer bis zum Tod",
  "text": "Gladiatoren waren teuer ausgebildet, und ihre Besitzer verliehen sie. Grabinschriften nennen Kämpfer mit dutzenden Auftritten; Schätzungen aus Inschriften gehen davon aus, dass etwa jeder achte bis zehnte Kampf tödlich endete. Ein Hinauswerfen des Lebens hätte die Schulen ruiniert.",
  "quelle": "Encyclopaedia Britannica: gladiator; Marcus Junkelmann: Das Spiel mit dem Tod"
 },
 {
  "category": "Antike",
  "type": "Kuriosum",
  "title": "Der Marathonlauf ist keine antike Disziplin",
  "text": "In der Antike gab es keinen Marathon. Der Lauf wurde 1896 für die ersten modernen Spiele erfunden, nach der Legende vom Boten von Marathon, die Plutarch erst 600 Jahre nach der Schlacht erzählt. Die heutige Distanz von 42,195 Kilometern entstand 1908 in London, weil die Strecke bis vor die königliche Loge reichen sollte."
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Im Mittelalter glaubten alle, die Erde sei flach",
  "text": "Die Kugelgestalt war seit der Antike bekannt und im Mittelalter Schulwissen: Bede, Isidor und die Universitäten lehrten sie, Sacroboscos Traktat über die Sphäre war Standardlehrbuch. Kolumbus stritt nicht über die Form, sondern über den Umfang — und lag falsch. Die Legende vom flachen Mittelalter verbreitete sich im 19. Jahrhundert, wesentlich durch Washington Irving.",
  "quelle": "Encyclopaedia Britannica: flat Earth; Jeffrey Burton Russell: Inventing the Flat Earth"
 },
 {
  "category": "Mittelalter",
  "type": "Mythos",
  "title": "Der Zehnte war die Hauptlast der Bauern",
  "text": "Der kirchliche Zehnte war eine Abgabe von vielen. Dazu kamen Grundzins, Frondienste, Zehnte an den Grundherrn, Zwangsabgaben bei Erbfall und Heirat, Mühlen- und Backhauszwang. Die Gesamtbelastung lag regional bei einem Drittel bis der Hälfte des Ertrags — der Zehnte war der berechenbarste Teil davon.",
  "quelle": "Encyclopaedia Britannica: tithe; manorialism; Werner Rösener: Bauern im Mittelalter"
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Das Mittelalter war eine Zeit ohne Fortschritt",
  "text": "In diesen Jahrhunderten entstanden Wassermühle in großer Zahl, Windmühle, Schwerpflug, Kummet, Dreifelderwirtschaft, Brille, mechanische Uhr, Kompassnutzung in Europa, Papierherstellung, doppelte Buchführung, Universität und Gotik. Der Begriff dunkles Zeitalter stammt von Petrarca und war eine literarische Wertung, keine Beschreibung."
 },
 {
  "category": "Mittelalter",
  "type": "Kuriosum",
  "title": "Das Recht der ersten Nacht ist nicht belegt",
  "text": "Für ein Recht des Grundherrn auf die Braut seines Untertanen gibt es keinen einzigen mittelalterlichen Rechtstext und keinen Prozess. Die Vorstellung entstand im 16. bis 18. Jahrhundert in antifeudaler Polemik und wurde durch Voltaire und Beaumarchais berühmt. Belegt sind Abgaben bei Heirat außerhalb der Herrschaft, die manche Autoren später so deuteten."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "Die Hexenverfolgung war ein mittelalterliches Phänomen",
  "text": "Ihre Hochphase liegt zwischen 1580 und 1630 — in der Zeit von Kepler, Galilei und Descartes. Das Mittelalter war dem Hexenglauben gegenüber überwiegend skeptisch; der Canon Episcopi erklärte den Flug zum Hexensabbat für Einbildung. Die letzten Hinrichtungen fanden 1749 in Würzburg und 1782 in Glarus statt.",
  "quelle": "Encyclopaedia Britannica: witchcraft; Wolfgang Behringer: Hexen"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "Neun Millionen Frauen wurden als Hexen verbrannt",
  "text": "Die Zahl geht auf eine Hochrechnung von Gottfried Christian Voigt (1784) zurück, der Zahlen eines einzigen Ortes auf ganz Europa und Jahrhunderte übertrug. Die heutige Forschung schätzt 40.000 bis 60.000 Hinrichtungen, davon rund drei Viertel Frauen; in Island und Estland waren die meisten Hingerichteten Männer.",
  "quelle": "Encyclopaedia Britannica: witch hunt; Wolfgang Behringer: Hexen und Hexenprozesse in Deutschland"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Mythos",
  "title": "Galilei wurde gefoltert und rief 'Und sie bewegt sich doch'",
  "text": "Die Prozessakten belegen Haft und Verhöre, aber keine Folter; das Urteil lautete auf Hausarrest, den er in Villen und schließlich im eigenen Haus in Arcetri verbrachte. Der Satz Eppur si muove erscheint erstmals 1757 in einer Anekdotensammlung, über hundert Jahre nach dem Prozess.",
  "quelle": "Encyclopaedia Britannica: Galileo; Vatikanische Prozessakten 1633"
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Nuance",
  "title": "Die Kartoffel wurde in Europa sofort angenommen",
  "text": "Sie brauchte in Mitteleuropa rund zwei Jahrhunderte. Sie galt als Schweinefutter und als verdächtig, weil sie unter der Erde wächst und in der Bibel nicht vorkommt. Durchgesetzt hat sie sich durch Hungerkrisen und staatlichen Zwang — Friedrich II. erließ ab 1756 Anbaubefehle. Die Geschichte, er habe die Knollen bewachen lassen, damit sie begehrt erscheinen, ist unbelegt."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Der Kolumbus-Streit ging nicht um die Erdform",
  "text": "Die Gelehrtenkommission in Salamanca hielt Kolumbus' Berechnung des Erdumfangs für zu klein — und hatte recht. Nach Eratosthenes' Wert wäre Asien für seine Schiffe unerreichbar weit entfernt gewesen. Dass er überlebte, verdankt er der zufälligen Existenz eines Kontinents, mit dem er nicht rechnete."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Die Bastille war ein überfülltes Gefängnis",
  "text": "Am 14. Juli 1789 saßen sieben Gefangene darin: vier Fälscher, zwei Geisteskranke und ein Adliger, den seine Familie hatte einsperren lassen. Der Sturm hatte einen praktischen Grund — im Gebäude lagerte Schießpulver. Die Bastille war ein Symbol der Willkürhaft, nicht ihr Hauptort.",
  "quelle": "Encyclopaedia Britannica: Bastille"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Napoleon war ungewöhnlich klein",
  "text": "Er war nach der Autopsie 5 Fuß 2 Zoll groß — in französischen Maßeinheiten, also etwa 1,68 Meter und damit im Durchschnitt seiner Zeit. Die Verwechslung mit englischen Zoll ergab 1,57 Meter. Verstärkt wurde das Bild durch britische Karikaturen, vor allem von James Gillray, und dadurch, dass seine Gardesoldaten besonders groß gewählt wurden.",
  "quelle": "Encyclopaedia Britannica: Napoleon I; Autopsiebericht 1821"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Der Reichstagsbrand ist geklärt",
  "text": "Nicht abschließend. Gesichert ist, dass Marinus van der Lubbe im Gebäude war, gestand und hingerichtet wurde. Ob er allein handelte, ist seit den 1960er Jahren Gegenstand einer bis heute offenen Fachdebatte; die Alleintäterthese hat gute Argumente, die technischen Einwände sind nicht vollständig ausgeräumt. Politisch entscheidend war ohnehin, was folgte: die Notverordnung am nächsten Tag.",
  "quelle": "Encyclopaedia Britannica: Reichstag fire; Bundesarchiv: Reichstagsbrand, Forschungsstand"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Einstein war ein schlechter Schüler",
  "text": "Seine Zeugnisse aus Aarau sind erhalten und zeigen sehr gute Noten, besonders in Mathematik und Physik. Die Legende entstand, weil die Schweizer Notenskala 1 bis 6 umgekehrt zur deutschen läuft: Seine Sechsen waren Bestnoten. Er scheiterte 1895 an einer Aufnahmeprüfung — im sprachlichen und botanischen Teil, mit sechzehn Jahren und zwei Jahre zu früh.",
  "quelle": "Encyclopaedia Britannica: Albert Einstein; ETH-Bibliothek Zürich: Matura-Zeugnis 1896"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Mussolini brachte die Züge zum Fahren",
  "text": "Der Ausbau des italienischen Netzes fiel überwiegend in die Zeit vor 1922. Zeitgenössische Reiseberichte und Fahrplanauswertungen zeigen keine besondere Pünktlichkeit; das Bild entstand durch Propaganda und wurde von ausländischen Besuchern weitergetragen. Es ist das Musterbeispiel eines Arguments, das eine Diktatur mit einer Dienstleistung rechtfertigt.",
  "quelle": "Encyclopaedia Britannica: Benito Mussolini; Christopher Duggan: Fascist Voices"
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Mythos",
  "title": "Edison erfand die Glühlampe",
  "text": "Mindestens zwanzig Erfinder arbeiteten vorher daran; Joseph Swan hatte in England eine funktionierende Lampe und gewann einen Patentstreit, worauf Edison mit ihm eine gemeinsame Firma gründete. Edisons Leistung war die haltbare Kohlefaser und vor allem das ganze System: Kraftwerk, Leitungen, Zähler, Fassungen.",
  "quelle": "Encyclopaedia Britannica: Thomas Edison; incandescent lamp"
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Mythos",
  "title": "Darwin sprach vom Überleben des Stärkeren",
  "text": "Der Ausdruck survival of the fittest stammt von Herbert Spencer und bedeutet den am besten Angepassten, nicht den Stärksten; Darwin übernahm ihn erst in der fünften Auflage. Angepasstheit kann Kooperation, Tarnung, Fruchtbarkeit oder Kleinheit bedeuten. Die Deutung als Recht des Stärkeren war die Grundlage des Sozialdarwinismus und ist ein Missverständnis.",
  "quelle": "Encyclopaedia Britannica: natural selection; Charles Darwin: On the Origin of Species, 5. Auflage 1869"
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Fleming entdeckte das Penicillin und heilte damit",
  "text": "Fleming beobachtete 1928 den Effekt, konnte den Wirkstoff aber nicht isolieren und legte die Sache beiseite. Erst Howard Florey und Ernst Boris Chain gelang das ab 1939, und die Massenproduktion begann in den USA im Krieg. Alle drei erhielten 1945 gemeinsam den Nobelpreis — in der Erinnerung blieb einer."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Kuriosum",
  "title": "Die erste Programmiererin arbeitete an einer Maschine, die nie gebaut wurde",
  "text": "Ada Lovelace veröffentlichte 1843 in ihren Anmerkungen zu Babbages Analytical Engine ein Verfahren zur Berechnung der Bernoulli-Zahlen samt Ablaufplan. Die Maschine wurde zu ihren Lebzeiten nie fertiggestellt. Sie notierte außerdem, dass eine solche Maschine Musik komponieren könnte, aber nichts erschaffe, was ihr nicht eingegeben wurde."
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Die Erfindung des Buchdrucks war Gutenbergs Idee allein",
  "text": "Bewegliche Metallletternen wurden in Korea bereits 1234 gegossen, Holztafeldruck gab es in China seit dem 7. Jahrhundert. Gutenbergs Leistung war die Verbindung mehrerer Techniken zu einem Verfahren: Handgießinstrument, Bleilegierung, ölhaltige Druckfarbe, umgebaute Weinpresse — dazu die Kalkulation, die den Massendruck rentabel machte."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Mythos",
  "title": "Magellan umsegelte als erster die Welt",
  "text": "Er starb 1521 auf den Philippinen. Die Fahrt vollendete Juan Sebastián Elcano mit 18 von ursprünglich rund 270 Mann. Der Sklave Enrique de Malaca, den Magellan in Malakka gekauft hatte, kehrte möglicherweise vor allen anderen in seine Heimatregion zurück und hätte damit als erster Mensch die Erde umrundet — die Quellenlage lässt es offen.",
  "quelle": "Encyclopaedia Britannica: Ferdinand Magellan; Juan Sebastián de Elcano"
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Nuance",
  "title": "Die Aufteilung Afrikas geschah auf der Berliner Konferenz",
  "text": "Auf der Konferenz 1884/85 wurden Regeln für Ansprüche und die freie Schifffahrt festgelegt; die Grenzen selbst entstanden in den folgenden zwei Jahrzehnten durch bilaterale Verträge und militärische Besetzung. Kein afrikanischer Vertreter war anwesend — das ist der Kern, und er stimmt."
 },
 {
  "category": "Entdeckungen & Weltreiche",
  "type": "Kuriosum",
  "title": "Das Britische Empire war nicht das größte, das je bestand — es war es doch",
  "text": "Nach Fläche ja: rund 35 Millionen Quadratkilometer um 1920, etwa ein Viertel der Landfläche. Nach zusammenhängender Fläche lag das Mongolenreich vorn, nach Bevölkerungsanteil vermutlich die Qing-Dynastie. Größenvergleiche von Reichen hängen vollständig davon ab, was gemessen wird."
 },
 {
  "category": "Asien & Amerika",
  "type": "Nuance",
  "title": "Amerika war ein weitgehend leerer Kontinent",
  "text": "Die Schätzungen für 1492 reichen von 8 bis über 100 Millionen Menschen, mit Tenochtitlan als einer der größten Städte der Welt. Innerhalb eines Jahrhunderts starben nach den meisten Schätzungen 80 bis 95 Prozent, überwiegend an eingeschleppten Krankheiten. Die Vorstellung der Wildnis entstand, weil Europäer eine Landschaft nach dem Massensterben betraten."
 },
 {
  "category": "Asien & Amerika",
  "type": "Kuriosum",
  "title": "Samurai kämpften vor allem mit dem Bogen",
  "text": "Bis ins 16. Jahrhundert war der Weg des Pferdes und des Bogens die Selbstbeschreibung des Kriegerstandes; das Schwert war Nebenwaffe und Statuszeichen. Die Zentralstellung des Katana entstand in der Friedenszeit der Tokugawa und wurde im 19. und 20. Jahrhundert zum nationalen Symbol ausgebaut."
 },
 {
  "category": "Asien & Amerika",
  "type": "Mythos",
  "title": "Die Große Mauer ist ein durchgehendes Bauwerk aus einer Zeit",
  "text": "Sie besteht aus Abschnitten verschiedener Jahrhunderte, oft parallel verlaufend, teils aus gestampfter Erde. Was Touristen sehen, ist überwiegend Ming-Zeit, 15. bis 17. Jahrhundert. Die Gesamtvermessung von 2012 kam auf 21.196 Kilometer aller Abschnitte — nicht auf eine Linie.",
  "quelle": "Encyclopaedia Britannica: Great Wall of China; State Administration of Cultural Heritage, Vermessung 2012"
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Die Wikinger nannten Amerika Vinland — und niemand glaubte es",
  "text": "Die Sagas berichten von Vinland, und seit den Ausgrabungen in L'Anse aux Meadows 1960 ist eine nordische Siedlung auf Neufundland archäologisch gesichert; 2021 wurden die Bauten über ein Sonnensturmsignal in Jahresringen auf 1021 datiert. Die sogenannte Vinland-Karte in Yale ist dagegen eine Fälschung — die Tinte enthält ein Titanpigment des 20. Jahrhunderts.",
  "quelle": "Encyclopaedia Britannica: L'Anse aux Meadows; Nature (2021): Evidence for European presence in the Americas in AD 1021; Yale University 2021: Vinland Map ist eine Fälschung"
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Der Kalender sprang 1582 um zehn Tage",
  "text": "Auf den 4. Oktober 1582 folgte in katholischen Ländern der 15. Oktober. Protestantische Gebiete zogen erst 1700 nach, Großbritannien 1752, Russland 1918, Griechenland 1923. Deshalb starben Shakespeare und Cervantes am selben Datum, aber nicht am selben Tag."
 },
 {
  "category": "Legenden",
  "type": "Mythos",
  "title": "Der Geigerzähler wurde für Tschernobyl gebaut, und die Sperrzone ist tot",
  "text": "Die Sperrzone ist heute eines der artenreichsten Gebiete Europas: Wölfe, Elche, Wisente, Przewalski-Pferde und über 200 Vogelarten leben dort. Die Strahlung schädigt einzelne Tiere messbar, doch das Ausbleiben von Menschen wirkt stärker. Was das über Naturschutz sagt, ist unter Biologen umstritten — dass die Zone bewohnt ist, nicht.",
  "quelle": "Encyclopaedia Britannica: Chernobyl disaster; Current Biology (2015): Long-term census data reveal abundant wildlife populations at Chernobyl"
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Kolumbus entdeckte, dass man Amerika erreichen kann — und starb im Wissen darum",
  "text": "Kolumbus hielt bis zu seinem Tod 1506 daran fest, Asien erreicht zu haben; in einem Dokument von 1494 ließ er seine Mannschaft schwören, Kuba sei das Festland Asiens. Den Namen erhielt der Kontinent 1507 nach Amerigo Vespucci, der als erster in Umlauf brachte, es handele sich um eine unbekannte Landmasse.",
  "quelle": "Encyclopaedia Britannica: Christopher Columbus; Amerigo Vespucci"
 },
 {
  "category": "Wissenschaft & Erfindungen",
  "type": "Nuance",
  "title": "Der Blitzableiter war sofort willkommen",
  "text": "Er wurde jahrzehntelang als Eingriff in Gottes Strafgewalt bekämpft; Kirchtürme, die als höchste Gebäude am häufigsten getroffen wurden, blieben oft ungeschützt. In Brescia explodierte 1769 ein Kirchenpulvermagazin nach Blitzschlag mit tausenden Toten — danach ging es schneller."
 },
 {
  "category": "Antike",
  "type": "Kuriosum",
  "title": "Die olympischen Spiele wurden nicht wegen des Sports abgeschafft",
  "text": "Sie liefen fast 1200 Jahre und endeten wahrscheinlich um 393, weil Theodosius I. heidnische Kulte verbot — die Spiele waren ein Fest für Zeus. Wettkampf und Religion waren nicht zu trennen, deshalb traf das Verbot beides."
 },
 {
  "category": "Frühe Neuzeit",
  "type": "Kuriosum",
  "title": "Der Dreißigjährige Krieg begann mit einem Fenstersturz, der niemanden tötete",
  "text": "Am 23. Mai 1618 wurden in Prag zwei kaiserliche Statthalter und ein Schreiber aus dem Fenster der Burg geworfen — rund 17 Meter tief. Alle drei überlebten; sie fielen in einen Abfallhaufen im Graben. Katholische Berichte sahen darin ein Wunder, protestantische den Misthaufen."
 },
 {
  "category": "Mittelalter",
  "type": "Nuance",
  "title": "Die Pest kam durch Ratten",
  "text": "Der Erreger Yersinia pestis ist durch alte DNA aus Zähnen gesichert, der Übertragungsweg nicht vollständig. Modellrechnungen von 2018 sprechen dafür, dass in Europa Menschenläuse und -flöhe die Ausbreitungsgeschwindigkeit besser erklären als Rattenflöhe. Die Rattenerzählung stammt aus Beobachtungen der dritten Pandemie in Asien um 1900."
 },
 {
  "category": "Moderne",
  "type": "Mythos",
  "title": "Die Erfindung des Fließbands stammt von Ford",
  "text": "Ford führte 1913 das bewegliche Montageband für Automobile ein und senkte die Fertigungszeit drastisch. Das Prinzip selbst war älter: Schlachthöfe in Cincinnati und Chicago arbeiteten seit den 1860er Jahren mit hängenden Bahnen und Arbeitsteilung, die Ford ausdrücklich als Vorbild nannte. Auch Venedigs Arsenal fertigte im 16. Jahrhundert nach Stationen.",
  "quelle": "Encyclopaedia Britannica: assembly line; Henry Ford: My Life and Work, 1922"
 },
 {
  "category": "Legenden",
  "type": "Kuriosum",
  "title": "Der berühmteste Satz der Mondlandung enthält vermutlich einen Fehler",
  "text": "Armstrong wollte sagen: ein kleiner Schritt für einen Menschen. In der Aufnahme fehlt das a, wodurch der Satz wörtlich lautet: ein kleiner Schritt für den Menschen — was den Gegensatz zur Menschheit aufhebt. Armstrong meinte, er habe es gesagt; akustische Untersuchungen kommen zu unterschiedlichen Ergebnissen."
 },
 {"category":"Moderne","type":"Mythos","title":"Polnische Kavallerie griff 1939 deutsche Panzer mit Lanzen an","text":"Am Abend des 1. September 1939 attackierten bei Krojanty rund 250 Reiter des 18. Pommerschen Ulanenregiments ein deutsches Infanteriebataillon und zersprengten es. Erst danach tauchten Panzerspähwagen auf und schossen die Reiter zusammen. Italienische Kriegsberichterstatter sahen die toten Pferde, die deutsche Propaganda machte daraus das Bild rückständiger Polen, die mit Säbeln gegen Panzer ritten. Die Attacke verschaffte tatsächlich dem Rückzug der eigenen Truppen Zeit.","quelle":"Steven J. Zaloga: Poland 1939, Osprey 2002; Encyclopaedia Britannica: Invasion of Poland","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Die Wehrmacht war eine durchmotorisierte Blitzkriegsarmee","text":"Panzer und Stukas prägen das Bild, doch die Masse der Wehrmacht marschierte zu Fuß, Nachschub und Artillerie zogen Pferde. Im Lauf des Krieges setzte das deutsche Heer schätzungsweise 2,75 Millionen Pferde ein. Auch die Blitzkrieg-Doktrin ist eher eine Legende: Der Militärhistoriker Karl-Heinz Frieser zeigte, dass der Westfeldzug 1940 aus einem improvisierten Operationsplan entstand, nicht aus einem lange ausgearbeiteten Konzept.","quelle":"Karl-Heinz Frieser: Blitzkrieg-Legende. Der Westfeldzug 1940, München 1995 (Militärgeschichtliches Forschungsamt); R. L. DiNardo: Mechanized Juggernaut or Military Anachronism?, 1991","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Kennedy sagte in Berlin: Ich bin ein Pfannkuchen","text":"Die Behauptung, „Ich bin ein Berliner“ sei grammatisch falsch und habe das Publikum zum Lachen gebracht, tauchte erst rund zwanzig Jahre nach der Rede von 1963 auf, vor allem in englischsprachigen Medien. Der Satz ist korrekt: Im übertragenen Sinn steht im Deutschen der Artikel. Zudem heißt das Gebäck in Berlin Pfannkuchen, nicht Berliner. Die Menge jubelte, gelacht wurde nur über den holprigen Übersetzungswitz, den Kennedy selbst machte.","quelle":"Jürgen Eichhoff: „Ich bin ein Berliner“: A History and a Linguistic Clarification, Monatshefte 85 (1993); JFK Presidential Library: Remarks at the Rudolph Wilde Platz, 26. Juni 1963","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Hitler wurde vom Volk an die Macht gewählt","text":"Bei keiner freien Reichstagswahl erreichte die NSDAP eine Mehrheit; ihr bestes Ergebnis waren 37,3 Prozent im Juli 1932, im November fiel sie auf 33,1 Prozent. Hitler wurde am 30. Januar 1933 von Reichspräsident Hindenburg zum Kanzler ernannt, nachdem konservative Kreise um Franz von Papen ihn einbinden wollten. Selbst bei der Wahl im März 1933, schon unter Terror gegen die Linke, kam die NSDAP nur auf 43,9 Prozent und brauchte die Deutschnationalen. Stärkste Partei war sie allerdings seit Juli 1932, Millionen hatten sie bewusst gewählt.","quelle":"Bundeszentrale für politische Bildung: Die Machtergreifung; Deutsches Historisches Museum, LeMO: Reichstagswahlen 1930–1933","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Die Autobahn war Hitlers Idee und beseitigte die Arbeitslosigkeit","text":"Pläne für kreuzungsfreie Autostraßen gab es seit den 1920er Jahren; der Verein HaFraBa warb ab 1926 für eine Strecke Hamburg–Frankfurt–Basel. Die kreuzungsfreie Kraftwagenstraße Köln–Bonn eröffnete 1932, gefördert von Kölns Oberbürgermeister Konrad Adenauer. Die NS-Propaganda machte die Reichsautobahn zum Symbol des Aufschwungs, doch selbst auf dem Höhepunkt 1936 arbeiteten nur rund 125.000 Menschen direkt auf den Baustellen, etwa ebenso viele in Zulieferbetrieben. Den Rückgang der Arbeitslosigkeit trugen vor allem Konjunktur und Aufrüstung.","quelle":"Deutsches Historisches Museum, LeMO: Reichsautobahn; Erhard Schütz, Eckhard Gruber: Mythos Reichsautobahn, Berlin 1996","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Die Hyperinflation brachte Hitler an die Macht","text":"Die Geldentwertung erreichte im November 1923 ihren Höhepunkt und wurde mit der Rentenmark beendet. Hitlers Putschversuch im selben Monat scheiterte kläglich, und 1928 kam die NSDAP auf gerade 2,6 Prozent. Ihr Aufstieg begann erst mit der Weltwirtschaftskrise ab 1929 – in einer Phase sinkender Preise, Massenarbeitslosigkeit und harter Sparpolitik unter Kanzler Brüning. Die Erinnerung an 1923 wirkte als Trauma nach, die direkte Ursache war sie nicht.","quelle":"Deutsche Bundesbank: Die Inflation 1914–1923; Encyclopaedia Britannica: Weimar Republic","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Vor allem Arbeitslose wählten die NSDAP","text":"Wahlanalysen des Politikwissenschaftlers Jürgen Falter zeigen ein anderes Bild: Arbeitslose wandten sich überdurchschnittlich der KPD zu. Die NSDAP war eine Protestpartei mit breiter Basis, besonders stark bei Protestanten, auf dem Land, und im selbständigen Mittelstand. Arbeiter stellten zwar einen beträchtlichen Teil ihrer Wähler, waren dort aber unterrepräsentiert. Katholische Regionen blieben lange weitgehend beim Zentrum.","quelle":"Jürgen W. Falter: Hitlers Wähler, München 1991; Jürgen W. Falter: Hitlers Wähler. Die Anhänger der NSDAP 1924–1933, Frankfurt 2020","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Hitler war Anstreicher","text":"Die Bezeichnung stammt aus der Polemik seiner Gegner, etwa aus Gedichten Bertolt Brechts. In Wien lebte Hitler von 1910 bis 1913 im Männerwohnheim und verdiente Geld, indem er Ansichtskarten und kleine Aquarelle mit Stadtmotiven malte, die Mitbewohner oder Händler verkauften. Seine eigene Angabe in „Mein Kampf“, er habe als Hilfsarbeiter auf dem Bau gearbeitet, ist nicht belegt, als Malergehilfe schon gar nicht. Zweimal hatte ihn die Wiener Kunstakademie abgelehnt.","quelle":"Ian Kershaw: Hitler 1889–1936, Stuttgart 1998; Brigitte Hamann: Hitlers Wien, München 1996","seit":"2026-10-01"},
 {"category":"Moderne","type":"Kuriosum","title":"Hitler war sieben Jahre lang staatenlos","text":"1925 gab Hitler die österreichische Staatsbürgerschaft auf, um einer möglichen Abschiebung aus Bayern zu entgehen. Deutscher war er damit nicht. Erst im Februar 1932 ernannte ihn die von der NSDAP mitregierte Landesregierung Braunschweig zum Regierungsrat; mit der Beamtung erhielt er die deutsche Staatsangehörigkeit. Nur so konnte er wenige Wochen später bei der Reichspräsidentenwahl gegen Hindenburg antreten.","quelle":"Deutsches Historisches Museum, LeMO: Adolf Hitler; Ian Kershaw: Hitler 1889–1936, Stuttgart 1998","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Die Deutschen wussten nichts vom Holocaust","text":"Die Einzelheiten der Vernichtungslager kannten wenige, doch dass Juden massenhaft ermordet wurden, war ein offenes Geheimnis. Soldaten berichteten auf Heimaturlaub von Massenerschießungen im Osten, Deportationen fanden vor aller Augen statt, Hausrat der Deportierten wurde öffentlich versteigert. Die NS-Propaganda sprach selbst offen von der Vernichtung des Judentums. Historiker wie Peter Longerich, Frank Bajohr und Dieter Pohl haben dieses verbreitete Wissen anhand von Stimmungsberichten, Tagebüchern und Briefen nachgewiesen.","quelle":"Peter Longerich: „Davon haben wir nichts gewusst!“, München 2006; Frank Bajohr, Dieter Pohl: Der Holocaust als offenes Geheimnis, München 2006","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Die Wehrmacht blieb von den NS-Verbrechen sauber","text":"Nach 1945 verbreiteten ehemalige Generäle das Bild einer Armee, die nur gekämpft habe, während SS und Polizei mordeten. Die Akten zeigen anderes: Die Wehrmachtführung erließ den Kommissarbefehl, Einheiten beteiligten sich an Massenerschießungen und Geiselmorden, und von schätzungsweise 5,7 Millionen sowjetischen Kriegsgefangenen starben mehr als drei Millionen in deutschem Gewahrsam, nach Christian Streit rund 3,3 Millionen. Die Ausstellungen des Hamburger Instituts für Sozialforschung machten dies ab 1995 breit bekannt.","quelle":"Hamburger Institut für Sozialforschung: Verbrechen der Wehrmacht. Dimensionen des Vernichtungskrieges 1941–1944, Ausstellungskatalog 2002; Christian Streit: Keine Kameraden, 1978","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Stalin wurde vom deutschen Angriff 1941 völlig überrascht","text":"Überrascht wurde die Rote Armee, nicht aber der Kreml mangels Warnungen. Der Spion Richard Sorge in Tokio, Agenten in Berlin, die britische Regierung und Überläufer meldeten den Aufmarsch, teils mit nahezu richtigem Datum. Stalin hielt die Hinweise für britische Provokationen, die ihn in einen Krieg treiben sollten, und verbot Maßnahmen, die Deutschland reizen konnten. Die Folge waren katastrophale Verluste in den ersten Kriegswochen.","quelle":"David E. Murphy: What Stalin Knew. The Enigma of Barbarossa, Yale University Press 2005; Encyclopaedia Britannica: Operation Barbarossa","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Die Atombomben allein zwangen Japan zur Kapitulation","text":"Nach Hiroshima am 6. August 1945 erklärte die Sowjetunion Japan am 8. August den Krieg und marschierte in der Nacht zum 9. August in die Mandschurei ein; am selben Tag folgte Nagasaki. Damit platzte auch Tokios Hoffnung, Moskau als Vermittler zu nutzen. Der Historiker Tsuyoshi Hasegawa hält den sowjetischen Kriegseintritt für mindestens ebenso entscheidend wie die Bomben. Andere Forscher gewichten die Bomben stärker. Strittig ist die Gewichtung, nicht, dass beides zusammenwirkte.","quelle":"Tsuyoshi Hasegawa: Racing the Enemy. Stalin, Truman, and the Surrender of Japan, Harvard University Press 2005; Encyclopaedia Britannica: Atomic bombings of Hiroshima and Nagasaki","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Die Versenkung der Lusitania brachte die USA in den Ersten Weltkrieg","text":"Ein deutsches U-Boot versenkte den britischen Liner am 7. Mai 1915; fast 1.200 Menschen starben, darunter rund 128 US-Bürger. Die Empörung war groß, doch Präsident Wilson blieb bei der Neutralität und gewann 1916 die Wiederwahl mit dem Slogan, er habe Amerika aus dem Krieg herausgehalten. Den Ausschlag gaben erst 1917 der uneingeschränkte U-Boot-Krieg und das Zimmermann-Telegramm. Die Kriegserklärung folgte im April 1917, fast zwei Jahre nach der Lusitania.","quelle":"Encyclopaedia Britannica: Lusitania; U.S. National Archives: The Zimmermann Telegram","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Im August 1914 zogen alle Deutschen begeistert in den Krieg","text":"Die Bilder jubelnder Menschenmengen stammen überwiegend aus Großstädten und aus dem Bürgertum, vor allem von Studenten. Regionalstudien und Polizeiberichte zeigen auf dem Land und in Arbeitervierteln eher Sorge, Beklommenheit und Hamsterkäufe. Der Historiker Jeffrey Verhey sprach deshalb vom Mythos des Augusterlebnisses, den Propaganda und Erinnerungskultur später ausbauten. Begeisterung gab es, aber sie war weder allgemein noch dauerhaft.","quelle":"Jeffrey Verhey: Der „Geist von 1914“ und die Erfindung der Volksgemeinschaft, Hamburg 2000; Ulrich Herbert: Geschichte Deutschlands im 20. Jahrhundert, München 2014","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Beim Weihnachtsfrieden 1914 spielten Briten und Deutsche ein Fußballspiel","text":"Der inoffizielle Waffenstillstand an Teilen der Westfront ist gut belegt: Soldaten trafen sich im Niemandsland, tauschten Zigaretten, begruben gemeinsam Tote. Ein geordnetes Länderspiel gab es aber nicht. Briefe erwähnen vereinzelt Kicks mit improvisierten Bällen, teils zwischen den Fronten, oft aber innerhalb einer Truppe. Der zerwühlte Boden ließ kaum mehr zu. Die Heeresleitungen beider Seiten verboten solche Verbrüderungen danach.","quelle":"Imperial War Museums: The Real Story of the Christmas Truce; Malcolm Brown, Shirley Seaton: Christmas Truce, London 1984","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Im Kalten Krieg telefonierten Washington und Moskau über ein rotes Telefon","text":"Die heiße Leitung wurde 1963 als Lehre aus der Kubakrise eingerichtet, als Botschaften zwischen den Regierungen stundenlang unterwegs waren. Sie war nie eine Telefonleitung: Anfangs liefen Fernschreiber, ab 1986 Faxgeräte, seit 2008 eine gesicherte Computerverbindung. Gesprochen wurde nicht, damit es keine Missverständnisse durch spontane Worte gab und Übersetzer Zeit hatten. Das rote Telefon stammt aus Filmen und Romanen.","quelle":"Encyclopaedia Britannica: hotline; U.S. Department of State: Memorandum of Understanding Regarding the Establishment of a Direct Communications Link, 20. Juni 1963","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"In der Kubakrise gab Chruschtschow einfach nach","text":"Öffentlich sah es 1962 so aus, als hätte Kennedy die Sowjets zum Rückzug ihrer Raketen gezwungen und nur zugesagt, Kuba nicht anzugreifen. Geheim versprach Robert Kennedy dem sowjetischen Botschafter Dobrynin am 27. Oktober aber auch den Abzug der amerikanischen Jupiter-Raketen aus der Türkei, der 1963 folgte. Dieser Teil des Handels blieb über Jahrzehnte verborgen und wurde erst durch Erinnerungen Beteiligter und Aktenfreigaben bekannt.","quelle":"John F. Kennedy Presidential Library: Cuban Missile Crisis; National Security Archive (George Washington University): The Cuban Missile Crisis, 1962","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Einen Schießbefehl an der DDR-Grenze hat es nie gegeben","text":"Egon Krenz und andere frühere Funktionäre bestritten das bis zuletzt. Die Akten belegen das Gegenteil: Erich Honecker forderte 1974 im Nationalen Verteidigungsrat, bei Grenzdurchbrüchen von der Schusswaffe rücksichtslos Gebrauch zu machen, und Grenzsoldaten wurden vor Dienstbeginn vergattert, Grenzverletzer festzunehmen oder zu vernichten. An der Berliner Mauer starben nach heutigem Forschungsstand rund 140 Menschen. Krenz wurde 1997 wegen der Todesschüsse verurteilt.","quelle":"Bundesstiftung zur Aufarbeitung der SED-Diktatur; Stasi-Unterlagen-Archiv (Bundesarchiv); Hans-Hermann Hertle, Maria Nooke (Hg.): Die Todesopfer an der Berliner Mauer 1961–1989, Berlin 2009","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"Beim Luftangriff auf Dresden starben 200.000 Menschen oder mehr","text":"Die Zahl 200.000 streute das Propagandaministerium von Goebbels schon im Februar 1945 über die neutrale schwedische Presse; gestützt wurde sie durch eine gefälschte Fassung des Polizeiberichts Tagesbefehl 47 mit einer angehängten Null. Rechtsextreme verbreiten bis heute noch höhere Zahlen. Eine von der Stadt Dresden eingesetzte Historikerkommission kam 2010 nach Auswertung von Friedhofs-, Standesamts- und Vermisstenakten auf 22.700 bis höchstens 25.000 Tote. Die Angriffe waren verheerend, die Opferzahl aber ist gut eingegrenzt.","quelle":"Abschlussbericht der Historikerkommission zu den Luftangriffen auf Dresden zwischen dem 13. und 15. Februar 1945, Landeshauptstadt Dresden 2010","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Die Trümmerfrauen räumten Deutschland nach dem Krieg auf","text":"Die Historikerin Leonie Treber zeigte, dass das Bild vor allem für die Westzonen nicht stimmt: Dort räumten überwiegend Baufirmen mit Maschinen und Männern, dazu zwangsverpflichtete frühere NSDAP-Mitglieder; Frauen arbeiteten nur in geringer Zahl. In Berlin und der sowjetischen Zone war ihr Anteil deutlich höher, oft per Arbeitspflicht und für bessere Lebensmittelkarten. Ihr Bild wurde später in beiden deutschen Staaten zum Mythos ausgebaut.","quelle":"Leonie Treber: Mythos Trümmerfrauen. Von der Trümmerbeseitigung in der Kriegs- und Nachkriegszeit und der Entstehung eines deutschen Erinnerungsortes, Essen 2014","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Der Marshallplan schuf das deutsche Wirtschaftswunder","text":"Die Hilfe ab 1948 war wichtig, vor allem politisch und als Devisenquelle für Rohstoffe und Lebensmittel. Wirtschaftshistoriker wie Werner Abelshauser betonen aber, dass Westdeutschland mit rund 1,4 Milliarden Dollar weniger erhielt als Großbritannien oder Frankreich. Der Aufschwung hatte mehr Ursachen: erhaltene Industrieanlagen, gut ausgebildete Arbeitskräfte, darunter Millionen Vertriebene, die Währungsreform 1948 und der Boom im Koreakrieg.","quelle":"Werner Abelshauser: Deutsche Wirtschaftsgeschichte. Von 1945 bis zur Gegenwart, München 2011; George C. Marshall Foundation: The Marshall Plan","seit":"2026-10-01"},
 {"category":"Moderne","type":"Mythos","title":"In der Oktoberrevolution stürmten Massen den Winterpalast","text":"Im Oktober 1917 (nach westlichem Kalender November) besetzten die Bolschewiki Petrograd weitgehend kampflos. Den Winterpalast, wo die Provisorische Regierung saß, verteidigten zuletzt nur Offiziersschüler und ein Frauenbataillon; er wurde in der Nacht fast ohne Blutvergießen eingenommen. Das Bild der stürmenden Massen prägten eine Massenaufführung von 1920 vor rund 100.000 Zuschauern und Sergej Eisensteins Film Oktober von 1927.","quelle":"Encyclopaedia Britannica: Russian Revolution of 1917; Orlando Figes: Die Tragödie eines Volkes, Berlin 1998","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Hitler verweigerte Jesse Owens 1936 den Handschlag","text":"Am ersten Wettkampftag gratulierte Hitler deutschen und finnischen Siegern. Daraufhin verlangte IOC-Präsident Henri de Baillet-Latour, er solle allen Siegern gratulieren oder keinem, und Hitler gratulierte danach öffentlich niemandem mehr. Owens gewann seine vier Goldmedaillen erst danach. Er selbst sagte 1936, nicht Hitler habe ihn brüskiert, sondern Präsident Roosevelt, der ihn nie ins Weiße Haus einlud. Rassistisch blieb das Regime trotzdem: Laut Albert Speer äußerte sich Hitler intern abfällig über Owens’ Siege.","quelle":"Encyclopaedia Britannica: Jesse Owens; United States Holocaust Memorial Museum: The Nazi Olympics Berlin 1936; Albert Speer: Erinnerungen, Berlin 1969","seit":"2026-10-01"},
 {"category":"Moderne","type":"Nuance","title":"Joseph-Ignace Guillotin erfand die Guillotine und starb durch sie","text":"Der Arzt und Abgeordnete schlug 1789 vor, Todesstrafen für alle Stände gleich und möglichst schmerzlos zu vollstrecken. Konstruiert wurde das Fallbeil nach Plänen des Chirurgen Antoine Louis, gebaut vom Klavierbauer Tobias Schmidt; erstmals eingesetzt wurde es im April 1792. Ähnliche Geräte gab es schon früher, etwa in Halifax und Schottland. Guillotin selbst lehnte den Namen ab und starb 1814 eines natürlichen Todes.","quelle":"Encyclopaedia Britannica: guillotine; Encyclopaedia Britannica: Joseph-Ignace Guillotin","seit":"2026-10-01"},
 {"category":"Wissenschaft & Erfindungen","type":"Mythos","title":"Die NASA entwickelte für Millionen einen Weltraumkuli, die Russen nahmen Bleistifte","text":"Den druckbeaufschlagten Kugelschreiber entwickelte der Unternehmer Paul Fisher auf eigene Kosten; die NASA kaufte ihn ab 1967 für wenige Dollar das Stück, später auch die Sowjetunion. Bleistifte waren keine gute Lösung: Abgebrochene Minen und Graphitstaub können in der Schwerelosigkeit Elektronik beschädigen, und Holz brennt. Nach dem Kabinenbrand von Apollo 1 achtete die NASA besonders auf brennbare Materialien.","quelle":"Scientific American: Fact or Fiction?: NASA Spent Millions to Develop a Pen that Would Write in Space, 2006; NASA History Office","seit":"2026-10-01"},
 {"category":"Wissenschaft & Erfindungen","type":"Mythos","title":"Teflon, Klettverschluss und Tang stammen aus der Raumfahrt","text":"Teflon entdeckte der Chemiker Roy Plunkett 1938 bei DuPont zufällig, lange vor jeder Raumfahrt. Den Klettverschluss erfand der Schweizer Ingenieur George de Mestral nach einem Spaziergang mit seinem Hund, an dem Kletten hingen; das Patent stammt aus den 1950er Jahren. Das Getränkepulver Tang kam 1959 von General Foods auf den Markt. Die NASA nutzte all das, erfunden hat sie es nicht. Echte Ableger der Raumfahrt sind etwa bestimmte Bildsensoren und Ohrthermometer.","quelle":"NASA Spinoff: Frequently Asked Questions (Tang, Velcro and Teflon were not developed by NASA); Encyclopaedia Britannica: Teflon; Science History Institute: Roy J. Plunkett","seit":"2026-10-01"},
 {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Alan Turing knackte die Enigma","text":"Den ersten Einbruch schafften polnische Mathematiker: Marian Rejewski rekonstruierte im Dezember 1932 mithilfe der Permutationstheorie die Verdrahtung der Enigma, mit Jerzy Różycki und Henryk Zygalski entwickelte er Verfahren und Maschinen zur Schlüsselsuche. Im Juli 1939 übergaben sie ihr Wissen Briten und Franzosen. In Bletchley Park bauten Turing, Gordon Welchman und Tausende Mitarbeiter darauf auf, als die Deutschen das Verfahren verschärften.","quelle":"GCHQ: The Polish codebreakers who helped break Enigma; Bletchley Park Trust; David Kahn: Seizing the Enigma, 1991","seit":"2026-10-01"},
 {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Der ENIAC war der erste Computer","text":"Der ENIAC, 1945 in Philadelphia fertiggestellt, war der erste elektronische, frei programmierbare Universalrechner und wurde entsprechend gefeiert. Doch schon im Mai 1941 lief in Berlin Konrad Zuses Z3, ein programmgesteuerter Rechner aus Relais. In Großbritannien entschlüsselten ab 1944 die elektronischen Colossus-Maschinen deutsche Fernschreiben, blieben aber jahrzehntelang geheim. Wer der erste war, hängt davon ab, was man Computer nennt.","quelle":"Encyclopaedia Britannica: ENIAC; Deutsches Museum: Zuse Z3; The National Museum of Computing (Bletchley Park): Colossus","seit":"2026-10-01"},
 {"category":"Wissenschaft & Erfindungen","type":"Mythos","title":"Das Internet wurde gebaut, um einen Atomkrieg zu überstehen","text":"Der Vorläufer ARPANET entstand ab 1969, damit Forschungseinrichtungen teure Großrechner gemeinsam nutzen konnten. Die Legende rührt von Paul Barans Studien bei der RAND Corporation in den frühen 1960er Jahren her, die robuste, paketvermittelte Netze für den Kriegsfall untersuchten. Die Gründer des Internets, darunter Vint Cerf und Robert Kahn, betonen, dass dieses Ziel für das ARPANET selbst keine Rolle spielte, auch wenn die Technik später so beschrieben wurde.","quelle":"Barry M. Leiner u. a.: A Brief History of the Internet, Internet Society 1997; Encyclopaedia Britannica: ARPANET","seit":"2026-10-01"},
 {"category":"Wissenschaft & Erfindungen","type":"Nuance","title":"Galilei erfand das Fernrohr","text":"Das erste dokumentierte Fernrohr stammt aus den Niederlanden: 1608 beantragte der Brillenmacher Hans Lipperhey in Den Haag ein Patent, fast gleichzeitig meldeten sich andere Erfinder. Galilei hörte 1609 davon, baute eigene Geräte und verbesserte die Vergrößerung deutlich. Sein Verdienst war, das Instrument systematisch an den Himmel zu richten: Er beschrieb Mondgebirge, Jupitermonde und unzählige Sterne der Milchstraße.","quelle":"Encyclopaedia Britannica: telescope; Encyclopaedia Britannica: Galileo; Albert Van Helden: The Invention of the Telescope, 1977","seit":"2026-10-01"},
 {"category":"Legenden","type":"Mythos","title":"Lemminge stürzen sich in Massenselbstmorden von Klippen","text":"Lemmingbestände schwanken stark, und bei Wanderungen ertrinken Tiere oder kommen um, doch einen absichtlichen Massenselbstmord gibt es nicht. Populär wurde die Vorstellung durch den Disney-Dokumentarfilm White Wilderness von 1958: Für die Szenen wurden Lemminge von den Filmleuten über eine Kante ins Wasser getrieben. Der Film erhielt einen Oscar, die Legende hält sich bis heute als Sinnbild für blinden Herdentrieb.","quelle":"Encyclopaedia Britannica: lemming; Alaska Department of Fish and Game: Lemmings","seit":"2026-10-01"},
 {"category":"Antike","type":"Mythos","title":"Stonehenge wurde von Druiden gebaut","text":"Die Bauarbeiten in Stonehenge begannen um 3000 v. Chr., die großen Sarsensteine wurden um 2500 v. Chr. aufgestellt. Druiden sind erst über zwei Jahrtausende später belegt, in römischen Berichten wie denen Caesars. Die Verbindung zogen im 17. und 18. Jahrhundert die Altertumsforscher John Aubrey und William Stukeley. Gebaut haben die Anlage jungsteinzeitliche Gemeinschaften, deren Glauben wir nur aus den Funden erschließen können.","quelle":"English Heritage: History of Stonehenge; Encyclopaedia Britannica: Stonehenge","seit":"2026-10-01"},
 {"category":"Antike","type":"Nuance","title":"Die Varusschlacht fand im Teutoburger Wald statt","text":"Tacitus spricht vom saltus Teutoburgiensis, wo im Jahr 9 drei römische Legionen untergingen. Das heutige Mittelgebirge bei Detmold erhielt den Namen aber erst im 17. Jahrhundert, als Gelehrte es mit Tacitus gleichsetzten; vorher hieß es Osning. Seit 1987 werden bei Kalkriese nördlich von Osnabrück Tausende römische Militärfunde ausgegraben. Viele Forscher sehen dort einen Schauplatz der Kämpfe, ob es der Hauptort war, ist umstritten.","quelle":"Museum und Park Kalkriese: Die Varusschlacht; Tacitus, Annalen I 60; Encyclopaedia Britannica: Battle of the Teutoburg Forest","seit":"2026-10-01"},
 {"category":"Antike","type":"Mythos","title":"Kaiser Konstantin machte das Christentum zur Staatsreligion","text":"Konstantin förderte die Kirche und ließ sich auf dem Sterbebett taufen. Die Mailänder Vereinbarung von 313 brachte jedoch Religionsfreiheit für alle, nicht den Vorrang einer Religion; heidnische Kulte bestanden fort. Zur verbindlichen Reichsreligion erklärte erst Theodosius I. im Jahr 380 das nicänische Christentum, und erst in den 390er Jahren wurden heidnische Opfer verboten.","quelle":"Encyclopaedia Britannica: Constantine I; Encyclopaedia Britannica: Theodosius I; Codex Theodosianus XVI 1,2","seit":"2026-10-01"},
 {"category":"Antike","type":"Mythos","title":"Das Konzil von Nicäa legte fest, welche Bücher in die Bibel kamen","text":"Romane wie Sakrileg haben die Idee populär gemacht. Das Konzil von 325 befasste sich mit der Lehre des Arius über das Verhältnis von Gott Vater und Sohn, mit dem Ostertermin und mit Fragen der Kirchenordnung. Über den Umfang der Bibel wurde dort nicht entschieden. Der Kanon des Neuen Testaments bildete sich über Jahrhunderte heraus; die heute übliche Liste der 27 Schriften findet sich zuerst 367 in einem Osterbrief des Athanasius.","quelle":"Encyclopaedia Britannica: Council of Nicaea; Encyclopaedia Britannica: biblical literature – The New Testament canon; Bart D. Ehrman: Truth and Fiction in The Da Vinci Code, 2004","seit":"2026-10-01"},
 {"category":"Antike","type":"Nuance","title":"Jesus wurde im Jahr 1 unserer Zeitrechnung geboren","text":"Die Zählung nach Christi Geburt geht auf den Mönch Dionysius Exiguus zurück, der 525 Ostertafeln berechnete. Nach den Evangelien wurde Jesus unter König Herodes geboren, der nach Flavius Josephus aber schon um 4 v. Chr. starb. Die Forschung setzt die Geburt daher meist zwischen etwa 7 und 4 v. Chr. an. Ein Jahr null gibt es in der Zählung nicht, und auch der 25. Dezember ist erst ab dem 4. Jahrhundert als Festtag belegt.","quelle":"Encyclopaedia Britannica: Dionysius Exiguus; Encyclopaedia Britannica: Jesus – Date of birth; Encyclopaedia Britannica: Christmas","seit":"2026-10-01"},
 {"category":"Antike","type":"Mythos","title":"Römer übergaben sich bei Gelagen in einem Vomitorium","text":"Das Wort leitet sich von lateinisch vomere ab, ausspeien – gemeint war aber das Ausströmen von Menschen. Ein Vomitorium war ein Durchgang in Amphitheatern und Theatern, durch den die Zuschauer schnell hinein und hinaus gelangten; der spätantike Autor Macrobius verwendet das Wort in diesem Sinn. Die Vorstellung eines Brechraums für übersatte Gäste entstand erst in der Neuzeit, als man das Wort nicht mehr verstand.","quelle":"Macrobius, Saturnalia VI 4,3; Encyclopaedia Britannica: vomitorium","seit":"2026-10-01"},
 {"category":"Antike","type":"Nuance","title":"Gladiatoren grüßten den Kaiser stets mit Morituri te salutant","text":"Der berühmte Gruß ist nur ein einziges Mal überliefert, bei Sueton und Cassius Dio. Er fiel im Jahr 52 bei einer inszenierten Seeschlacht auf dem Fuciner See, gesprochen von verurteilten Gefangenen, nicht von Berufsgladiatoren. Kaiser Claudius antwortete mehrdeutig, worauf die Männer sich weigerten zu kämpfen, weil sie sich begnadigt glaubten. Dass dies ein üblicher Arenagruß war, belegt keine Quelle.","quelle":"Sueton, Claudius 21,6; Cassius Dio, Römische Geschichte LX 33; Encyclopaedia Britannica: gladiator","seit":"2026-10-01"},
 {"category":"Antike","type":"Kuriosum","title":"Kleopatra lebte der Mondlandung näher als dem Bau der Cheops-Pyramide","text":"Die Cheops-Pyramide entstand um 2560 v. Chr., Kleopatra VII. starb 30 v. Chr. – rund 2.500 Jahre später. Bis zur Mondlandung 1969 vergingen nach ihrem Tod knapp 2.000 Jahre. Für Kleopatra war die Pyramide also älter, als ihre eigene Zeit es für uns ist. Das ägyptische Pharaonenreich dauerte so lange, dass schon seine Bewohner die Bauten der Frühzeit als uralte Denkmäler bestaunten und teils restaurierten.","quelle":"Encyclopaedia Britannica: Pyramids of Giza; Encyclopaedia Britannica: Cleopatra","seit":"2026-10-01"},
 {"category":"Mittelalter","type":"Kuriosum","title":"Die Byzantiner wussten nicht, dass sie Byzantiner waren","text":"Die Bewohner des Oströmischen Reichs nannten sich bis 1453 Rhomaioi, Römer, und ihren Staat das Reich der Römer. Den Begriff Byzantinisches Reich, nach dem alten Namen von Konstantinopel, prägte der deutsche Humanist Hieronymus Wolf 1557 mit seiner Quellensammlung Corpus Historiae Byzantinae. Durchgesetzt hat er sich erst lange nach dem Untergang des Reiches – auch weil westliche Herrscher den Titel römischer Kaiser für sich beanspruchten.","quelle":"Encyclopaedia Britannica: Byzantine Empire; Averil Cameron: The Byzantines, Oxford 2006","seit":"2026-10-01"},
 {"category":"Mittelalter","type":"Nuance","title":"Das Reich hieß schon immer Heiliges Römisches Reich Deutscher Nation","text":"Der Name wuchs über Jahrhunderte. Unter Friedrich Barbarossa taucht 1157 erstmals sacrum imperium auf; die Verbindung Sacrum Romanum Imperium setzte sich ab 1254, im Interregnum, durch. Der Zusatz Deutscher Nation kam erst im späten 15. Jahrhundert auf, als das Reich faktisch auf den deutschsprachigen Raum geschrumpft war; in einem Reichsgesetz steht er erstmals 1486, im Kölner Reichsabschied von 1512 dann in der vollen Form. Voltaire spottete, es sei weder heilig noch römisch noch ein Reich.","quelle":"Peter H. Wilson: Das Heilige Römische Reich. Die Geschichte einer tausendjährigen Herrschaft, Darmstadt 2016; Encyclopaedia Britannica: Holy Roman Empire","seit":"2026-10-01"},
 {"category":"Mittelalter","type":"Nuance","title":"Karl der Große konnte weder lesen noch schreiben","text":"Sein Biograf Einhard berichtet, Karl habe sich spät noch im Schreiben geübt und dafür Täfelchen unter dem Kopfkissen gehabt, doch der Erfolg sei gering gewesen. Lesen konnte er nach allgemeiner Annahme, und er sprach Latein, verstand Griechisch und ließ sich bei Tisch vorlesen. Vor allem förderte er Bildung gezielt: Schulen an Klöstern und Bischofssitzen, Gelehrte wie Alkuin und eine neue, gut lesbare Schrift, die karolingische Minuskel.","quelle":"Einhard: Vita Karoli Magni, Kap. 25; Encyclopaedia Britannica: Charlemagne","seit":"2026-10-01"},
 {"category":"Mittelalter","type":"Mythos","title":"Die Eiserne Jungfrau war ein mittelalterliches Folterinstrument","text":"Aus dem Mittelalter ist keine Eiserne Jungfrau belegt. Die Geschichten von ihr tauchen erst um 1800 auf, das bekannteste Exemplar in Nürnberg wurde im 19. Jahrhundert aus verschiedenen Teilen zusammengesetzt, vermutlich unter Verwendung eines Schandmantels, der ohne Stacheln der öffentlichen Bloßstellung diente. Solche Objekte waren Ausstellungsstücke für ein Publikum, das sich das Mittelalter als finster vorstellte. Das Nürnberger Stück ging 1945 im Bombenkrieg verloren.","quelle":"Wolfgang Schild: Die eiserne Jungfrau. Dichtung und Wahrheit, Rothenburg o. d. T. 2000 (Schriftenreihe des Mittelalterlichen Kriminalmuseums); Encyclopaedia Britannica: iron maiden","seit":"2026-10-01"},
 {"category":"Legenden","type":"Nuance","title":"Der Rattenfänger von Hameln befreite die Stadt von einer Rattenplage","text":"Hinter der Sage steht ein reales, aber rätselhaftes Ereignis: Nach einer Handschrift aus der Mitte des 15. Jahrhunderts verließen 1284 in Hameln 130 Kinder die Stadt mit einem Pfeifer; ein Kirchenfenster aus der Zeit um 1300 erinnerte daran. Ratten kommen in den frühen Berichten nicht vor, sie wurden erst um die Mitte des 16. Jahrhunderts hinzugefügt. Viele Historiker denken an eine Abwanderung junger Leute in die Ostsiedlung, gesichert ist das nicht.","quelle":"Encyclopaedia Britannica: Pied Piper of Hamelin; Hans Dobbertin: Quellensammlung zur Hamelner Rattenfängersage, Göttingen 1970","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Mythos","title":"Pestärzte mit Schnabelmasken gehörten zum Schwarzen Tod","text":"Während der großen Pest 1347 bis 1353 trug kein Arzt eine Schnabelmaske. Die Schutzkleidung mit langem Mantel und einer mit Kräutern gefüllten Schnabelmaske ist erst im 17. Jahrhundert belegt, zugeschrieben dem französischen Leibarzt Charles de Lorme, und auch dann vor allem in Italien und Frankreich. Abbildungen wie der Kupferstich vom Doktor Schnabel von Rom aus dem Jahr 1656 machten sie bekannt. Ins Mittelalter verlegt wurde die Figur erst später.","quelle":"Thomas Bartholin: Historiarum anatomicarum rariorum centuria IV, 1661; Jean-Jacques Manget: Traité de la peste, Genf 1721","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Nuance","title":"Die Spanische Inquisition ließ Hunderttausende verbrennen","text":"Die Spanische Inquisition verfolgte vor allem zwangsgetaufte Juden und Muslime, später Protestanten und Abweichler, und verbreitete durch Folter, Denunziation und Vermögenseinzug Angst. Die Zahl der Hinrichtungen lag nach Auswertung der Prozessakten durch Historiker wie Henry Kamen und Gustav Henningsen aber schätzungsweise bei 3.000 bis 5.000 über rund 350 Jahre, die meisten in den ersten Jahrzehnten nach 1480. Die Hexenverfolgung in Mitteleuropa forderte weit mehr Opfer.","quelle":"Henry Kamen: The Spanish Inquisition. A Historical Revision, Yale University Press 1997; Encyclopaedia Britannica: Inquisition","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Nuance","title":"Luther nagelte seine 95 Thesen an die Schlosskirche","text":"Sicher ist, dass Luther am 31. Oktober 1517 seine Thesen an Erzbischof Albrecht von Mainz schickte. Den Anschlag an der Tür erwähnt Luther selbst nie; Melanchthon, der erst 1518 nach Wittenberg kam, berichtete erst nach Luthers Tod 1546 davon. Der Kirchenhistoriker Erwin Iserloh bezweifelte das Ereignis deshalb 1961. Eine 2006 entdeckte Notiz von Luthers Sekretär Georg Rörer spricht von einem Anschlag an mehreren Kirchentüren. Ob mit Hammer und Nägeln, bleibt offen.","quelle":"Volker Leppin: Die fremde Reformation, München 2016; Erwin Iserloh: Luthers Thesenanschlag. Tatsache oder Legende?, 1962; Encyclopaedia Britannica: Ninety-five Theses","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Nuance","title":"Luther sagte in Worms: Hier stehe ich, ich kann nicht anders","text":"Vor dem Reichstag in Worms weigerte sich Luther am 18. April 1521, seine Schriften zu widerrufen. Die Mitschriften der Verhandlung überliefern als Schluss nur: Gott helfe mir, Amen. Der berühmte Satz erscheint zuerst in einem Wittenberger Druck seiner Rede, der kurz darauf erschien. Ob Luther ihn tatsächlich sprach oder ob er beim Bearbeiten ergänzt wurde, lässt sich nicht klären. Inhaltlich trifft er seine Haltung genau.","quelle":"Deutsche Reichstagsakten, Jüngere Reihe, Bd. 2 (Worms 1521); Encyclopaedia Britannica: Diet of Worms","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Mythos","title":"Luther wollte noch heute ein Apfelbäumchen pflanzen","text":"Der Satz, auch wenn die Welt morgen unterginge, würde er heute noch ein Apfelbäumchen pflanzen, findet sich in keiner Schrift Luthers. Der früheste Beleg ist ein Rundbrief der Bekennenden Kirche in Hessen vom Oktober 1944, der das Wort schon als bekannt voraussetzt. Nach dem Krieg wurde es zur Losung des Wiederaufbaus. Der Theologe Martin Schloemann hat die Entstehung untersucht und gezeigt, dass das Wort kein Luther-Zitat ist, sondern ein Kind der deutschen Nachkriegsstimmung.","quelle":"Martin Schloemann: Luthers Apfelbäumchen? Ein Kapitel deutscher Mentalitätsgeschichte seit dem Zweiten Weltkrieg, Göttingen 1994","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Mythos","title":"Ludwig XIV. sagte: Der Staat bin ich","text":"Der Satz L'État, c'est moi ist in keiner zeitgenössischen Quelle belegt und taucht erst lange nach dem angeblichen Anlass auf, einer Sitzung des Pariser Parlaments 1655. Er fasst das Bild des absolutistischen Königs griffig zusammen. Ludwig selbst schrieb in seinen Memoiren für den Thronfolger eher von der Pflicht des Königs gegenüber dem Staat, und auf dem Sterbebett soll er gesagt haben: Ich gehe, aber der Staat wird immer bleiben.","quelle":"Encyclopaedia Britannica: Louis XIV; Peter Burke: Ludwig XIV. Die Inszenierung des Sonnenkönigs, Berlin 1993","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Nuance","title":"Englands Flotte vernichtete 1588 die Spanische Armada","text":"Im Ärmelkanal und vor Gravelines verlor die Armada nur wenige Schiffe; die Engländer trieben sie mit Brandern auseinander und verhinderten so die Landung in England. Die meisten Verluste folgten danach: Auf dem Rückweg um Schottland und Irland zerschellten zahlreiche Schiffe in schweren Herbststürmen, Tausende Seeleute ertranken oder wurden an Land getötet. Von rund 130 Schiffen kehrte nur etwa die Hälfte nach Spanien zurück.","quelle":"Encyclopaedia Britannica: Spanish Armada; Colin Martin, Geoffrey Parker: The Spanish Armada, Manchester 1999","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Nuance","title":"Giordano Bruno starb als Märtyrer des kopernikanischen Weltbilds","text":"Bruno wurde 1600 in Rom verbrannt. Er vertrat tatsächlich ein unendliches Universum mit unzähligen Welten, das weit über Kopernikus hinausging. Das Urteil ist nicht erhalten; die überlieferten Anklagepunkte betrafen aber überwiegend theologische Lehren: Er zweifelte an der Dreifaltigkeit, der Göttlichkeit Christi und der Wandlung im Abendmahl. Die Vielzahl der Welten war nur einer der Vorwürfe. Zum Wissenschaftsmärtyrer machten ihn erst Freidenker im 19. Jahrhundert.","quelle":"Encyclopaedia Britannica: Giordano Bruno; Luigi Firpo: Il processo di Giordano Bruno, Rom 1993","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Mythos","title":"Salieri vergiftete Mozart","text":"Mozart starb im Dezember 1791 nach kurzer Krankheit mit Fieber und Schwellungen; die Symptome passen nach heutigem Wissen zu einer Infektion, nicht zu einer Vergiftung. Gerüchte über einen Giftmord kamen erst Jahrzehnte später auf, als der alte, verwirrte Salieri angeblich davon sprach. Puschkins Drama Mozart und Salieri von 1830 und der Film Amadeus von 1984 machten die Rivalität berühmt. Tatsächlich respektierten sich die beiden und arbeiteten sogar gemeinsam an einer Kantate.","quelle":"Encyclopaedia Britannica: Antonio Salieri; Encyclopaedia Britannica: Wolfgang Amadeus Mozart – Death","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Kuriosum","title":"Früher schliefen die Menschen in zwei Etappen","text":"Der Historiker Roger Ekirch fand in Hunderten Quellen von der Antike bis ins 19. Jahrhundert Hinweise auf einen ersten und einen zweiten Schlaf. Man ging bald nach Einbruch der Dunkelheit zu Bett, wachte gegen Mitternacht für eine Stunde oder länger auf, betete, las, besuchte Nachbarn oder grübelte über Träume nach und schlief dann weiter. Mit künstlicher Beleuchtung und späteren Schlafenszeiten verschwand diese Gewohnheit im Industriezeitalter weitgehend.","quelle":"A. Roger Ekirch: At Day's Close. Night in Times Past, New York 2005","seit":"2026-10-01"},
 {"category":"Frühe Neuzeit","type":"Mythos","title":"Pocahontas und John Smith waren ein Liebespaar","text":"Als der englische Kolonist John Smith 1607 nach Virginia kam, war Pocahontas etwa zehn oder elf Jahre alt. Die Geschichte, sie habe ihn vor der Hinrichtung gerettet, erzählte Smith erst 1624, Jahre nach ihrem Tod; Historiker sind uneins, ob sie stimmt oder ein missverstandenes Ritual beschreibt. Pocahontas wurde 1613 von Engländern entführt, ließ sich taufen und heiratete 1614 den Tabakpflanzer John Rolfe. Sie starb 1617 in England.","quelle":"Encyclopaedia Britannica: Pocahontas; Smithsonian Magazine: The True Story of Pocahontas, 2017; Camilla Townsend: Pocahontas and the Powhatan Dilemma, 2004","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Nuance","title":"Manhattan wurde für 24 Dollar gekauft","text":"Der einzige zeitgenössische Beleg ist ein Brief des Kaufmanns Peter Schaghen von 1626: Die Niederländer hätten die Insel für Waren im Wert von 60 Gulden erworben. Die Umrechnung in 24 Dollar stammt aus dem 19. Jahrhundert und berücksichtigt weder Kaufkraft noch Kontext. Zudem verstanden die Lenape einen solchen Handel vermutlich als Nutzungsrecht, nicht als dauerhafte Abtretung von Land. Ein Kaufvertrag ist nicht erhalten.","quelle":"Brief Peter Schaghens an die Generalstaaten, 5. November 1626, Nationaal Archief Den Haag; Encyclopaedia Britannica: Peter Minuit","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Nuance","title":"Die Unabhängigkeitserklärung wurde am 4. Juli 1776 unterzeichnet","text":"Für die Unabhängigkeit stimmte der Kontinentalkongress schon am 2. Juli 1776; John Adams hielt diesen Tag für den künftigen Feiertag. Am 4. Juli wurde der Text der Erklärung angenommen. Die berühmte Reinschrift auf Pergament unterschrieben die meisten Delegierten erst am 2. August, einige noch später. Gefeiert wird der 4. Juli, weil dieses Datum über dem gedruckten Text stand.","quelle":"U.S. National Archives: The Declaration of Independence: A History","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Nuance","title":"Lincolns Emanzipationsproklamation befreite alle Sklaven","text":"Die Proklamation vom 1. Januar 1863 erklärte nur die Sklaven in den aufständischen Gebieten der Konföderation für frei, also gerade dort, wo die Union ihre Macht noch nicht durchsetzen konnte. In loyalen Sklavenstaaten wie Kentucky oder Maryland galt sie nicht. Dennoch machte sie den Krieg zu einem Krieg gegen die Sklaverei und erlaubte Schwarzen den Dienst in der Unionsarmee. Abgeschafft wurde die Sklaverei in allen Staaten erst mit dem 13. Verfassungszusatz im Dezember 1865.","quelle":"U.S. National Archives: The Emancipation Proclamation; Encyclopaedia Britannica: Emancipation Proclamation","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Mythos","title":"Im Amerikanischen Bürgerkrieg ging es nicht um Sklaverei","text":"Nach dem Krieg verbreiteten Südstaatler die Lesart der Lost Cause: Man habe allein für die Rechte der Einzelstaaten gekämpft. Die Quellen von 1860/61 sagen es deutlich anders. Mississippi erklärte in seiner Austrittserklärung, seine Position sei vollständig mit der Institution der Sklaverei verbunden, und der Vizepräsident der Konföderation, Alexander Stephens, nannte die Sklaverei im März 1861 den Eckstein des neuen Staates.","quelle":"Austrittserklärungen von Mississippi, South Carolina, Georgia und Texas 1860/61 (Avalon Project, Yale Law School); Alexander H. Stephens: Cornerstone Speech, 21. März 1861; American Battlefield Trust","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Nuance","title":"Im Wilden Westen gab es täglich Schießereien","text":"Westernfilme zeigen Revolverduelle auf der Hauptstraße. Der Historiker Robert Dykstra zählte für die fünf großen Viehhandelsstädte Kansas', darunter Dodge City und Abilene, zwischen 1870 und 1885 insgesamt 45 Tötungen. Viele Städte verboten das Tragen von Waffen; die Schießerei am O.K. Corral 1881 entzündete sich auch an einem solchen Verbot. Andere Forscher weisen darauf hin, dass die Mordraten bezogen auf die kleine Bevölkerung trotzdem hoch waren.","quelle":"Robert R. Dykstra: The Cattle Towns, New York 1968; Randolph Roth: American Homicide, Harvard University Press 2009","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Kuriosum","title":"Bis zu einem Viertel der Cowboys war Schwarz","text":"Nach Schätzungen von Historikern waren von den Männern, die nach dem Bürgerkrieg Rinderherden von Texas zu den Bahnstationen in Kansas trieben, bis zu ein Viertel Afroamerikaner, viele davon ehemalige Sklaven, dazu zahlreiche Mexikaner. Westernfilme des 20. Jahrhunderts zeigten fast nur weiße Cowboys. Bekannte Ausnahmen in den Quellen sind etwa der Reiter Nat Love, der seine Erinnerungen veröffentlichte, oder Bass Reeves, einer der ersten schwarzen Deputy Marshals.","quelle":"Smithsonian National Museum of African American History and Culture: Black Cowboys; William Loren Katz: The Black West, 1971","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Mythos","title":"Die Chinesen nutzten Schießpulver nur für Feuerwerk","text":"Das Schießpulver entstand in China, und das Militär setzte es früh ein. Das Kriegshandbuch Wujing Zongyao von 1044 nennt die ältesten bekannten Rezepte für Brandsätze und Bomben. Im 12. und 13. Jahrhundert kämpften Song- und Jin-Truppen mit Feuerlanzen, Sprengbomben und Raketen; die ältesten erhaltenen Metallkanonen stammen aus dem späten 13. Jahrhundert. Die Vorstellung, China habe die Erfindung nur spielerisch genutzt, entstand in Europa.","quelle":"Joseph Needham: Science and Civilisation in China, Bd. 5/7: The Gunpowder Epic, Cambridge 1986; Encyclopaedia Britannica: gunpowder","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Mythos","title":"Die Maya sagten den Weltuntergang für 2012 voraus","text":"Am 21. Dezember 2012 endete in der Langen Zählung des Maya-Kalenders ein großer Zyklus von 13 Baktun, rund 5.125 Jahre. Für die Maya war das ein Abschnitt wie ein Jahrtausendwechsel, kein Ende der Zeit; Inschriften erwähnen sogar Daten weit danach. Die einzige Inschrift, die das Datum nennt, das Monument 6 von Tortuguero, spricht von der Herabkunft eines Gottes. Die Untergangsprophezeiung entstand in Esoterikbüchern ab den 1970er Jahren.","quelle":"NASA: Beyond 2012: Why the World Didn't End, 2012; David Stuart: The Order of Days, New York 2011; Encyclopaedia Britannica: Maya calendar","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Kuriosum","title":"Mao ließ Spatzen ausrotten – und half damit Heuschrecken","text":"Ab 1958 rief die Kampagne gegen die vier Plagen die Bevölkerung auf, Ratten, Fliegen, Mücken und Spatzen zu vernichten. Millionen Menschen schlugen auf Töpfe, bis erschöpfte Vögel tot vom Himmel fielen, und zerstörten Nester. Da Spatzen auch Insekten fressen, vermehrten sich Schädlinge wie Heuschrecken. Das verschärfte die Hungersnot des Großen Sprungs nach vorn, an der je nach Schätzung 15 bis 45 Millionen Menschen starben. 1960 wurden die Spatzen durch Bettwanzen ersetzt.","quelle":"Frank Dikötter: Mao's Great Famine, London 2010; Encyclopaedia Britannica: Great Leap Forward","seit":"2026-10-01"},
 {"category":"Asien & Amerika","type":"Kuriosum","title":"Ein japanischer Soldat kämpfte bis 1974 weiter","text":"Leutnant Hiroo Onoda wurde Ende 1944 auf die philippinische Insel Lubang geschickt, mit dem Befehl, sich niemals zu ergeben. Flugblätter über das Kriegsende hielt er für Feindpropaganda und führte fast drei Jahrzehnte einen Guerillakrieg, bei dem auch Einheimische getötet wurden. Erst als sein früherer Vorgesetzter Yoshimi Taniguchi im März 1974 anreiste und ihn offiziell entließ, legte er die Waffen nieder.","quelle":"Encyclopaedia Britannica: Hiroo Onoda; BBC News: Japanese WWII soldier Hiroo Onoda dies aged 91, 17. Januar 2014","seit":"2026-10-01"}
];

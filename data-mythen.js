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
 }
];

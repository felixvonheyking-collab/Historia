/* =========================================================
   HISTORIA — DATEN: Themengeschichte

   Querschnitte durch alle Epochen. Nicht "was geschah wann",
   sondern "wie hat sich eine Sache über Jahrtausende entwickelt".

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const THEMEN = [
 {
  "id": "medizin",
  "titel": "Medizin & Seuchen",
  "kurz": "Vom Säftedenken zur Keimtheorie — und wie Epidemien Gesellschaften umgebaut haben.",
  "einleitung": "Über den längsten Teil der Geschichte konnte Medizin trösten, aber selten heilen. Der Bruch kommt erst im 19. Jahrhundert, als sichtbar wird, dass Krankheiten von Erregern verursacht werden. Seuchen wiederum haben Kriege entschieden, Herrschaft gestürzt und Verwaltung erfunden – die Quarantäne ist eine Erfindung der Pestzeit.",
  "stationen": [
   {
    "jahr": -2600,
    "titel": "Imhotep und die ägyptische Heilkunst",
    "text": "Der Baumeister der Stufenpyramide galt Jahrhunderte später als Gott der Heilkunst. Ägyptische Ärzte waren spezialisiert – es gab Augenärzte, Zahnärzte und Ärzte für innere Beschwerden. Rezepte mischten wirksame Stoffe wie Honig, der antibakteriell wirkt, mit reiner Magie."
   },
   {
    "jahr": -1600,
    "titel": "Papyrus Edwin Smith",
    "text": "Ein ägyptischer Text beschreibt 48 Verletzungsfälle mit Befund, Behandlung und Prognose – teils ohne jede Anrufung von Göttern. Erstmals ist die reine Beobachtung erkennbar."
   },
   {
    "jahr": -600,
    "titel": "Sushruta und die frühe Chirurgie Indiens",
    "text": "Die Sushruta Samhita beschreibt über 300 Eingriffe und 120 Instrumente, darunter die Nasenrekonstruktion aus Stirnhaut – eine Technik, die europäische Chirurgen erst im 18. Jahrhundert übernahmen und die bis heute als indische Methode gilt."
   },
   {
    "jahr": -420,
    "titel": "Die hippokratischen Schriften",
    "text": "Krankheit wird als natürlicher Vorgang gedeutet, nicht als Strafe. Die zugrundeliegende Säftelehre war falsch, die Methode – beobachten, dokumentieren, vergleichen – blieb."
   },
   {
    "jahr": -300,
    "titel": "Sektion in Alexandria",
    "text": "Herophilos und Erasistratos durften in Alexandria menschliche Leichen öffnen – für kurze Zeit und unter Bedingungen, die spätere Autoren als grausam kritisierten. Danach blieb die Sektion im Mittelmeerraum tausend Jahre verboten; die Anatomie beruhte bis Vesalius auf Tieren."
   },
   {
    "jahr": 165,
    "titel": "Die Antoninische Pest",
    "text": "Eine reichsweite Epidemie kostet nach Schätzungen Millionen Menschen das Leben. Ob es sich um Pocken handelte, ist mangels Erregernachweis bis heute nicht gesichert.",
    "vertiefung": "kaiser-markaurel"
   },
   {
    "jahr": 170,
    "titel": "Galen bestimmt die Medizin für 1.400 Jahre",
    "text": "Der Arzt der Gladiatoren und des Kaisers Mark Aurel verband Beobachtung mit der Lehre von den vier Säften. Weil er nur Tiere sezieren durfte, enthielt sein Menschenbild Fehler, die kritiklos weitergegeben wurden. Wer Galen widersprach, galt bis ins 16. Jahrhundert als unwissend."
   },
   {
    "jahr": 541,
    "titel": "Die Justinianische Pest",
    "text": "Die erste sicher belegte Pestpandemie. Dass es tatsächlich Yersinia pestis war, wurde erst 2013 durch DNA aus bayerischen Gräbern bewiesen – vorher war es eine gut begründete Vermutung.",
    "vertiefung": "justinian-pest"
   },
   {
    "jahr": 900,
    "titel": "ar-Razi trennt Pocken von Masern",
    "text": "Der persische Arzt beschreibt erstmals zwei Krankheiten, die vorher als eine galten, und stützt sich dabei auf systematisch geführte Krankengeschichten. Sein Hospitalwesen in Bagdad kannte bereits Stationen für verschiedene Leiden."
   },
   {
    "jahr": 1025,
    "titel": "Der Kanon der Medizin",
    "text": "Ibn Sinas Werk ordnet das gesamte antike und arabische Wissen und bleibt bis ins 17. Jahrhundert auch in Europa Standardlehrbuch."
   },
   {
    "jahr": 1284,
    "titel": "Das erste Krankenhaus nach heutigem Muster",
    "text": "Das Bimaristan al-Mansuri in Kairo behandelte unabhängig von Herkunft und Vermögen, hatte getrennte Abteilungen, eine Apotheke, eine Bibliothek und bezahlte Ärzte. Europäische Reisende berichteten fassungslos davon."
   },
   {
    "jahr": 1348,
    "titel": "Die Pest und die Grenzen der Medizin",
    "text": "Gegen den Schwarzen Tod half nichts, was die Ärzte kannten. Die wirksamsten Maßnahmen waren Verwaltungsakte: Quarantäne, Absperrung, Gesundheitsämter. Der Ansehensverlust der galenischen Medizin begann hier.",
    "vertiefung": "schwarzer-tod"
   },
   {
    "jahr": 1377,
    "titel": "Die erste Quarantäne",
    "text": "Ragusa, das heutige Dubrovnik, verpflichtet Ankömmlinge zu dreißig Tagen Isolation; später sind es vierzig – quaranta. Öffentliche Gesundheitsverwaltung entsteht aus der Angst vor der Pest.",
    "vertiefung": "schwarzer-tod"
   },
   {
    "jahr": 1543,
    "titel": "Vesalius seziert selbst",
    "text": "Bis dahin las der Professor aus Galen vor, während ein Gehilfe schnitt. Vesalius vertauscht die Rollen, findet über zweihundert Fehler bei Galen – und zeigt, dass Autorität kein Beweis ist."
   },
   {
    "jahr": 1546,
    "titel": "Fracastoro vermutet Ansteckung durch Samen",
    "text": "Der Veroneser Arzt beschreibt Krankheitsübertragung durch winzige Keime, die sich vermehren – dreihundert Jahre vor dem Nachweis. Die These blieb ohne Wirkung, weil es kein Mittel gab, sie zu prüfen."
   },
   {
    "jahr": 1628,
    "titel": "Harvey beschreibt den Blutkreislauf",
    "text": "Durch Messung: Das Herz pumpt mehr Blut pro Stunde, als der Körper wiegt. Also muss dasselbe Blut zirkulieren. Ein früher Fall, in dem eine Rechnung eine Lehrmeinung stürzt."
   },
   {
    "jahr": 1721,
    "titel": "Variolation erreicht England",
    "text": "Lady Mary Wortley Montagu bringt aus Konstantinopel das Verfahren mit, Menschen gezielt leicht mit Pocken zu infizieren. Die Methode war in Anatolien, China und Westafrika längst bekannt – Europa lernte hier von anderen."
   },
   {
    "jahr": 1747,
    "titel": "Der erste kontrollierte Versuch",
    "text": "Der Schiffsarzt James Lind teilt zwölf Skorbutkranke in sechs Gruppen und gibt jeder eine andere Behandlung. Die mit Zitrusfrüchten genesen. Es dauerte weitere vierzig Jahre, bis die Marine daraus Vorschriften machte – und über hundert Jahre, bis das Prinzip der Vergleichsgruppe Standard wurde."
   },
   {
    "jahr": 1796,
    "titel": "Jenners Kuhpockenimpfung",
    "text": "Weniger riskant als die Variolation und der Beginn der Impfung im heutigen Sinn. Der Name Vakzine kommt von vacca, der Kuh.",
    "vertiefung": "pockenimpfung"
   },
   {
    "jahr": 1816,
    "titel": "Das Stethoskop",
    "text": "René Laënnec rollt ein Blatt Papier zusammen, weil ihm das direkte Ohr an der Brust einer Patientin unangenehm ist. Aus der Verlegenheit entsteht das erste Instrument, mit dem man ins Innere eines lebenden Körpers hineinhören kann."
   },
   {
    "jahr": 1846,
    "titel": "Narkose",
    "text": "Die erste öffentliche Äthernarkose in Boston macht Operationen möglich, die vorher an Schmerz und Schock scheiterten. Vorher galt Schnelligkeit als wichtigste Eigenschaft eines Chirurgen – manche amputierten in unter einer Minute."
   },
   {
    "jahr": 1847,
    "titel": "Semmelweis und das Händewaschen",
    "text": "In der Wiener Geburtsklinik sinkt die Sterblichkeit dramatisch, als Ärzte ihre Hände desinfizieren. Semmelweis konnte nicht erklären, warum – ohne Keimtheorie fehlte ihm das Argument, und er wurde abgelehnt."
   },
   {
    "jahr": 1854,
    "titel": "John Snow und die Broad Street",
    "text": "Snow trägt Cholerafälle in einen Stadtplan ein und findet eine verseuchte Wasserpumpe. Aus dieser Karte entsteht die moderne Epidemiologie – Jahre bevor der Erreger bekannt ist.",
    "vertiefung": "kanalisation-london"
   },
   {
    "jahr": 1867,
    "titel": "Antisepsis in der Chirurgie",
    "text": "Lister überträgt Pasteurs Keimtheorie auf den Operationssaal. Operationen hören auf, ein Todesurteil auf Raten zu sein."
   },
   {
    "jahr": 1882,
    "titel": "Koch findet den Tuberkelbazillus",
    "text": "Mit den Kochschen Postulaten wird erstmals methodisch festgelegt, wann ein Erreger als Ursache einer Krankheit gilt."
   },
   {
    "jahr": 1895,
    "titel": "Röntgenstrahlen",
    "text": "Wilhelm Conrad Röntgen fotografiert die Hand seiner Frau und veröffentlicht den Befund binnen Wochen; ein Patent lehnt er ab. Erstmals lässt sich in einen lebenden Körper hineinsehen, ohne ihn zu öffnen. Die Gefahren der Strahlung erkannte man erst nach vielen Erkrankungen bei den frühen Anwendern.",
    "vertiefung": "physik-1900"
   },
   {
    "jahr": 1900,
    "titel": "Blutgruppen",
    "text": "Karl Landsteiner entdeckt, warum manche Bluttransfusionen tödlich enden und andere nicht. Erst damit wird die Transfusion ein Verfahren statt eines Glücksspiels – und die Chirurgie des 20. Jahrhunderts überhaupt möglich."
   },
   {
    "jahr": 1918,
    "titel": "Die Influenzapandemie",
    "text": "Schätzungen reichen von 25 bis über 50 Millionen Toten; die Spanne zeigt, wie lückenhaft die Erfassung war. Spanische Grippe heißt sie nur, weil das neutrale Spanien als einziges Land offen berichten durfte.",
    "vertiefung": "grippe-1918"
   },
   {
    "jahr": 1921,
    "titel": "Insulin",
    "text": "Banting und Best isolieren in Toronto den Wirkstoff; das Patent verkaufen sie für einen Dollar, damit es niemandem gehört. Diabetes vom Typ 1, bis dahin ein Todesurteil innerhalb von Monaten, wird behandelbar."
   },
   {
    "jahr": 1928,
    "titel": "Fleming entdeckt das Penicillin",
    "text": "Die Entdeckung blieb dreizehn Jahre folgenlos. Erst Florey und Chain machten daraus 1941 ein anwendbares Medikament – Entdeckung und Nutzen fallen in der Wissenschaft oft weit auseinander.",
    "vertiefung": "antibiotika"
   },
   {
    "jahr": 1932,
    "titel": "Die Tuskegee-Studie beginnt",
    "text": "In Alabama beobachten Ärzte 400 schwarze Syphilispatienten vierzig Jahre lang, ohne sie zu behandeln – auch nachdem Penicillin verfügbar war, und ohne sie aufzuklären. Als der Fall 1972 bekannt wurde, führte er in den USA zu verbindlichen Regeln für Forschung am Menschen."
   },
   {
    "jahr": 1947,
    "titel": "Der Nürnberger Kodex",
    "text": "Aus dem Prozess gegen NS-Ärzte entsteht die erste internationale Regel für Versuche am Menschen. Zentral: die freiwillige Zustimmung nach Aufklärung. Die Deklaration von Helsinki baute 1964 darauf auf."
   },
   {
    "jahr": 1953,
    "titel": "Die Doppelhelix",
    "text": "Die Struktur der DNA erklärt, wie Erbinformation gespeichert und weitergegeben wird. Rosalind Franklins Röntgenaufnahme war entscheidend; ihr Anteil wurde jahrzehntelang kaum genannt.",
    "vertiefung": "doppelhelix"
   },
   {
    "jahr": 1955,
    "titel": "Der Polio-Impfstoff",
    "text": "Salks Impfstoff beendet in wenigen Jahren die Angst vor einer Krankheit, die vor allem Kinder traf. Die Ausrottung weltweit steht bis heute aus."
   },
   {
    "jahr": 1967,
    "titel": "Die erste Herztransplantation",
    "text": "Christiaan Barnard verpflanzt in Kapstadt ein Herz; der Patient lebt 18 Tage und stirbt an einer Lungenentzündung, weil die Abstoßung mit hohen Dosen unterdrückt wurde. Das Verfahren wurde erst mit besseren Medikamenten ab 1980 zur Routine."
   },
   {
    "jahr": 1978,
    "titel": "Das erste Kind aus künstlicher Befruchtung",
    "text": "Louise Brown wird in England geboren. Der Vorgang löste heftige ethische Debatten aus; heute sind weltweit über zwölf Millionen Menschen so entstanden."
   },
   {
    "jahr": 1980,
    "titel": "Die Pocken sind ausgerottet",
    "text": "Die WHO erklärt als einzige menschliche Infektionskrankheit überhaupt eine für besiegt. Möglich war das nur durch Zusammenarbeit über den Eisernen Vorhang hinweg.",
    "vertiefung": "pockenimpfung"
   },
   {
    "jahr": 1981,
    "titel": "Die ersten AIDS-Fälle",
    "text": "Eine neue Seuche trifft zuerst gesellschaftlich ausgegrenzte Gruppen – und wird deshalb jahrelang nicht ernst genommen. Ein Muster, das sich in der Seuchengeschichte wiederholt."
   },
   {
    "jahr": 2001,
    "titel": "Das menschliche Genom",
    "text": "Die erste Fassung der vollständigen Sequenz erscheint. Die Erwartung, damit ließen sich Krankheiten unmittelbar erklären, erfüllte sich nicht – die Zahl der Gene lag deutlich unter den Schätzungen, und ihr Zusammenspiel erwies sich als komplexer als gedacht.",
    "vertiefung": "doppelhelix"
   },
   {
    "jahr": 2020,
    "titel": "COVID-19 und die mRNA-Impfstoffe",
    "text": "Vom Erregergenom bis zum zugelassenen Impfstoff vergehen weniger als zwölf Monate. Die Technik beruht auf Grundlagenforschung, die jahrzehntelang als aussichtslos galt und kaum Förderung fand."
   }
  ],
  "strittig": "Historische Opferzahlen von Epidemien sind fast immer Hochrechnungen aus wenigen lokalen Quellen; die üblichen Angaben zur Antoninischen Pest oder zum Schwarzen Tod schwanken um den Faktor zwei bis drei. Auch die Erregerbestimmung antiker Seuchen gelingt nur dort, wo alte DNA erhalten ist. Die verbreitete Erzählung vom verkannten Einzelgänger Semmelweis vereinfacht: Sein Zahlenmaterial war stark, seine Darstellung aber schwer nachvollziehbar, und die Widerstände waren nicht nur Sturheit, sondern auch das Fehlen einer Theorie, die den Befund erklären konnte.",
  "quellen": [
   "Roy Porter: The Greatest Benefit to Mankind. A Medical History of Humanity",
   "Nature (2013): Yersinia pestis DNA aus dem Gräberfeld Aschheim, Justinianische Pest",
   "WHO: Smallpox eradication programme, Abschlussbericht 1980",
   "Encyclopaedia Britannica: History of medicine; Influenza pandemic of 1918–19"
  ],
  "literatur": [
   {
    "titel": "Die Geschichte der Medizin",
    "autor": "Roy Porter",
    "jahr": "2000",
    "warum": "Weltweit angelegt, von der Antike bis zur Gentechnik, und dabei durchgehend skeptisch gegenüber Fortschrittserzählungen. Das Standardwerk."
   },
   {
    "titel": "Der Kaiser aller Krankheiten",
    "autor": "Siddhartha Mukherjee",
    "jahr": "2010",
    "warum": "Die Geschichte des Krebses und ihrer Behandlung, erzählt von einem Onkologen. Preisgekrönt und ungewöhnlich gut geschrieben."
   },
   {
    "titel": "Seuchen",
    "autor": "Malte Thießen",
    "jahr": "2021",
    "warum": "Wie Gesellschaften auf Epidemien reagieren – und wie ähnlich diese Reaktionen über Jahrhunderte bleiben."
   }
  ]
 },
 {
  "id": "energie",
  "titel": "Energie & Technik",
  "kurz": "Muskelkraft, Wasser, Kohle, Öl, Atom, Sonne — wovon Gesellschaften leben konnten.",
  "einleitung": "Fast die gesamte Geschichte über war die verfügbare Energie an Muskeln, Wind und Wasser gebunden – und damit begrenzt. Wer mehr leisten wollte, brauchte mehr Menschen oder Tiere. Erst fossile Brennstoffe lösen diese Grenze auf, und mit ihr fällt die Obergrenze für Bevölkerung, Produktion und Geschwindigkeit. Die Folgen dieser Entkopplung bestimmen die Gegenwart.",
  "stationen": [
   {
    "jahr": -400000,
    "titel": "Regelmäßige Nutzung des Feuers",
    "text": "Feuerstellen sind ab etwa diesem Zeitraum sicher belegt. Ältere Funde bis 1,5 Millionen Jahre werden diskutiert, sind aber schwer von natürlichen Bränden zu unterscheiden. Feuer macht Nahrung besser verwertbar und verlängert den nutzbaren Tag."
   },
   {
    "jahr": -4000,
    "titel": "Segel auf dem Nil",
    "text": "Das Segel ist die erste Maschine, die Naturkraft ohne Muskelkraft nutzt. Auf dem Nil fährt man mit dem Strom nach Norden und mit dem Wind nach Süden – ein Glücksfall der Geographie, der Ägyptens Zusammenhalt mit ermöglichte."
   },
   {
    "jahr": -3500,
    "titel": "Rad und Zugtier",
    "text": "Ochse und Wagen vervielfachen, was ein Mensch bewegen kann. Entscheidend ist weniger das Rad selbst als die Achse – und ein Wegenetz, auf dem sie sich lohnt."
   },
   {
    "jahr": -200,
    "titel": "Das Wasserrad",
    "text": "Im Mittelmeerraum treibt fließendes Wasser Mühlen an. Erstmals arbeitet eine Maschine ohne Muskeln – aber ortsgebunden, dort wo das Wasser ist."
   },
   {
    "jahr": -100,
    "titel": "Kohle in China und Rom",
    "text": "Steinkohle wird in beiden Reichen abgebaut und verfeuert, bleibt aber Nebensache – Holz und Holzkohle sind überall verfügbar. Kohle wird erst wichtig, wo Holz knapp wird."
   },
   {
    "jahr": 1100,
    "titel": "Windmühlen in Europa",
    "text": "Wo Gefälle fehlt, tritt Wind an die Stelle des Wassers. In den Niederlanden wird daraus Landgewinnung: Mühlen pumpen ganze Landstriche trocken."
   },
   {
    "jahr": 1450,
    "titel": "Der Hochofen",
    "text": "Mit stärkerem Gebläse und höheren Temperaturen wird flüssiges Roheisen möglich. Wasserkraft treibt die Blasebälge; der Eisenpreis fällt. Der Holzverbrauch der Hütten entwaldet ganze Landstriche – ein früher Fall von Ressourcengrenze."
   },
   {
    "jahr": 1709,
    "titel": "Koks statt Holzkohle",
    "text": "Abraham Darby verhüttet Eisen mit Koks. Damit ist die Eisenerzeugung nicht mehr an Wälder gebunden, sondern an Kohlereviere – die Landkarte der Industrie verschiebt sich für zweihundert Jahre."
   },
   {
    "jahr": 1712,
    "titel": "Newcomens Dampfmaschine",
    "text": "Gebaut, um Wasser aus Kohlebergwerken zu pumpen – Kohle liefert also zuerst die Energie, um mehr Kohle zu fördern. Der Wirkungsgrad lag unter einem Prozent.",
    "vertiefung": "dampfmaschine"
   },
   {
    "jahr": 1769,
    "titel": "Watts separater Kondensator",
    "text": "Eine scheinbar kleine Änderung vervierfacht die Effizienz und macht die Dampfmaschine außerhalb von Bergwerken einsetzbar. Erst damit wird sie zur Universalmaschine.",
    "vertiefung": "dampfmaschine"
   },
   {
    "jahr": 1800,
    "titel": "Die Batterie",
    "text": "Alessandro Volta baut die erste Quelle für dauerhaften elektrischen Strom. Vorher gab es nur Entladungen; jetzt lässt sich Strom als Fluss untersuchen, was die gesamte Elektrochemie erst möglich macht."
   },
   {
    "jahr": 1830,
    "titel": "Liverpool–Manchester",
    "text": "Die erste Eisenbahn mit fahrplanmäßigem Personen- und Güterverkehr. Reisezeiten schrumpfen von Tagen auf Stunden – und erzwingen später eine einheitliche Uhrzeit."
   },
   {
    "jahr": 1831,
    "titel": "Induktion",
    "text": "Michael Faraday zeigt, dass Bewegung im Magnetfeld Strom erzeugt. Auf die Frage nach dem Nutzen soll er geantwortet haben, man wisse ja auch nicht, was aus einem neugeborenen Kind werde. Jeder Generator der Welt beruht auf diesem Versuch."
   },
   {
    "jahr": 1859,
    "titel": "Erste Ölbohrung in Titusville",
    "text": "Gesucht wurde ein Ersatz für Walöl als Lampenbrennstoff. Dass daraus der Treibstoff des 20. Jahrhunderts würde, ahnte niemand.",
    "vertiefung": "erdoel"
   },
   {
    "jahr": 1876,
    "titel": "Der Ottomotor",
    "text": "Nicolaus Otto baut den ersten brauchbaren Viertaktmotor. Er ist klein, beweglich und braucht keinen Kessel – die Voraussetzung für Auto und Flugzeug, und der Beginn der Ölwirtschaft."
   },
   {
    "jahr": 1882,
    "titel": "Die ersten Kraftwerke",
    "text": "Edison versorgt einen Bezirk in Manhattan mit Gleichstrom. Im folgenden Stromkrieg setzt sich Wechselstrom durch, weil er sich über große Entfernungen transportieren lässt – Energie wird vom Ort ihrer Erzeugung gelöst.",
    "vertiefung": "elektrifizierung"
   },
   {
    "jahr": 1886,
    "titel": "Wechselstrom setzt sich durch",
    "text": "Der Streit zwischen Edison und Westinghouse endet zugunsten des Wechselstroms, weil er sich hochspannen und damit über weite Strecken übertragen lässt. Erst damit muss ein Kraftwerk nicht mehr im selben Stadtviertel stehen wie seine Kunden.",
    "vertiefung": "elektrifizierung"
   },
   {
    "jahr": 1909,
    "titel": "Das Haber-Bosch-Verfahren",
    "text": "Stickstoff aus der Luft wird zu Dünger. Schätzungen zufolge hängt die Ernährung von etwa der Hälfte der heutigen Menschheit daran. Dasselbe Verfahren lieferte Deutschland im Ersten Weltkrieg den Sprengstoff.",
    "vertiefung": "haber-bosch"
   },
   {
    "jahr": 1911,
    "titel": "Öl für die Flotte",
    "text": "Die britische Marine stellt von Kohle auf Öl um: schnellere Schiffe, kürzere Betankung, weniger Heizer. Damit wird Erdöl erstmals zur strategischen Ressource – und der Nahe Osten zum Gegenstand von Großmachtpolitik.",
    "vertiefung": "erdoel"
   },
   {
    "jahr": 1938,
    "titel": "Die Kernspaltung wird entdeckt",
    "text": "Otto Hahn und Fritz Straßmann finden Barium nach dem Beschuss von Uran; Lise Meitner und Otto Frisch deuten den Befund im Exil richtig als Spaltung. Meitner wurde bei der Nobelpreisvergabe übergangen.",
    "vertiefung": "kernspaltung"
   },
   {
    "jahr": 1942,
    "titel": "Die erste kontrollierte Kettenreaktion",
    "text": "Unter der Tribüne eines Sportstadions in Chicago läuft der erste Kernreaktor. Er war Teil des Waffenprogramms – die zivile Nutzung kam danach, nicht davor.",
    "vertiefung": "kernspaltung"
   },
   {
    "jahr": 1954,
    "titel": "Solarzelle mit brauchbarem Wirkungsgrad",
    "text": "In den Bell Labs entsteht die erste Siliziumzelle mit etwa sechs Prozent Wirkungsgrad. Sie war zunächst so teuer, dass sie nur in der Raumfahrt eingesetzt wurde; bis 2020 fiel der Preis je Watt um mehr als das Zehntausendfache."
   },
   {
    "jahr": 1956,
    "titel": "Erstes kommerzielles Kernkraftwerk",
    "text": "Calder Hall in England speist ins Netz ein und produziert zugleich Plutonium für Waffen. Die Doppelnutzung prägt die Kernenergie bis heute."
   },
   {
    "jahr": 1956,
    "titel": "Hubberts Peak-Oil-These",
    "text": "Ein Geologe sagt das Fördermaximum der USA für etwa 1970 voraus – und trifft es zunächst. Fracking widerlegte die Vorhersage später; die Grundfrage nach endlichen Vorräten blieb."
   },
   {
    "jahr": 1973,
    "titel": "Die Ölkrise",
    "text": "Das Ölembargo führt vor, wie verwundbar Industriestaaten geworden sind. Autofreie Sonntage, Tempolimits und die ersten Energiesparprogramme sind die Folge."
   },
   {
    "jahr": 1979,
    "titel": "Three Mile Island",
    "text": "Eine Teilkernschmelze in Pennsylvania setzt wenig Radioaktivität frei, beendet aber den Ausbau der Kernkraft in den USA für Jahrzehnte. Nicht der Schaden entschied, sondern das Vertrauen."
   },
   {
    "jahr": 1986,
    "titel": "Tschernobyl",
    "text": "Der Reaktorunfall verändert die Energiepolitik ganzer Länder und beschleunigt die Auflösung der Sowjetunion, weil die Vertuschung öffentlich wurde.",
    "vertiefung": "tschernobyl"
   },
   {
    "jahr": 1988,
    "titel": "Gründung des Weltklimarats",
    "text": "Der Zusammenhang von Verbrennung und Erderwärmung ist seit dem 19. Jahrhundert bekannt; ab jetzt wird er institutionell bewertet und politisch verhandelbar."
   },
   {
    "jahr": 1997,
    "titel": "Das Kyoto-Protokoll",
    "text": "Erstmals verpflichten sich Industriestaaten zu verbindlichen Minderungszielen. Die USA ratifizierten nicht, Schwellenländer waren ausgenommen – der Vertrag zeigte zugleich das Prinzip und seine politische Grenze."
   },
   {
    "jahr": 2011,
    "titel": "Fukushima",
    "text": "Ein Seebeben und eine Flutwelle führen zu drei Kernschmelzen. Deutschland beschließt den Ausstieg binnen Wochen, Japan schaltet zeitweise alle Reaktoren ab. Die Ereignisse veränderten die Energiepolitik mehrerer Länder stärker als jede Energiedebatte davor."
   },
   {
    "jahr": 2015,
    "titel": "Das Pariser Abkommen",
    "text": "Erstmals verpflichten sich fast alle Staaten auf ein gemeinsames Temperaturziel – allerdings mit selbst gewählten Beiträgen und ohne Sanktionen."
   },
   {
    "jahr": 2020,
    "titel": "Solarstrom wird die billigste Option",
    "text": "Die Internationale Energieagentur bezeichnet Photovoltaik in vielen Märkten als kostengünstigste Stromquelle der Geschichte. Der Preisverfall um über neunzig Prozent seit 2010 wurde von fast allen Prognosen verfehlt."
   }
  ],
  "strittig": "Wann Menschen Feuer beherrschten statt nur nutzten, ist offen – die Belege werden mit zunehmendem Alter mehrdeutig. Umstritten bleibt auch, warum die Industrialisierung in England begann: Kohlevorkommen, politische Institutionen, hohe Löhne, koloniale Rohstoffe und Absatzmärkte werden als Erklärungen angeführt, und die Forschung gewichtet sie unterschiedlich. Monokausale Antworten sind hier eher ein Warnzeichen als ein Ergebnis.",
  "quellen": [
   "Vaclav Smil: Energy and Civilization. A History",
   "Encyclopaedia Britannica: History of technology; Industrial Revolution",
   "IEA: World Energy Outlook 2020, Kapitel zu Photovoltaik-Kosten",
   "Nature (2011/2012): Debatte zu frühen Feuerbelegen, Wonderwerk Cave und Gesher Benot Ya'aqov"
  ],
  "literatur": [
   {
    "titel": "Energie und Zivilisation",
    "autor": "Vaclav Smil",
    "jahr": "2017",
    "warum": "Die Geschichte der Menschheit als Geschichte der nutzbaren Energie, mit belastbaren Zahlen statt Schlagworten. Anspruchsvoll und erhellend."
   },
   {
    "titel": "Fossiles Kapital",
    "autor": "Andreas Malm",
    "jahr": "2016",
    "warum": "Warum Dampf sich gegen Wasserkraft durchsetzte – und dass die Entscheidung nicht technisch, sondern machtpolitisch war."
   },
   {
    "titel": "Die Kohleverbrennung",
    "autor": "Barbara Freese",
    "jahr": "2003",
    "warum": "Kohle als Stoff, der Politik, Krieg und Klima geprägt hat. Zugänglich und mit gutem Blick fürs Detail."
   }
  ]
 },
 {
  "id": "recht",
  "titel": "Recht & Verfassung",
  "kurz": "Vom Willen des Herrschers zur Regel, die auch für ihn gilt.",
  "einleitung": "Die entscheidende Frage der Rechtsgeschichte ist nicht, ob es Regeln gab – die gab es immer –, sondern ob sie auch den binden, der sie erlässt. Fast alle großen Rechtsdokumente entstanden nicht aus Einsicht, sondern aus Machtverlust: Ein Herrscher musste nachgeben. Und fast alle galten zunächst nur für eine kleine Gruppe; ihre Ausweitung auf alle dauerte Jahrhunderte.",
  "stationen": [
   {
    "jahr": -2100,
    "titel": "Die Gesetze von Ur-Nammu",
    "text": "Rund 300 Jahre älter als Hammurabi und im Ton anders: Statt Auge um Auge stehen hier Geldbußen. Der Wechsel zum Vergeltungsprinzip war also kein Fortschritt von der Rache zum Recht, sondern eine Bewegung in die andere Richtung."
   },
   {
    "jahr": -1754,
    "titel": "Der Codex Hammurabi",
    "text": "Nicht die erste Gesetzessammlung – der Codex Ur-Nammu ist rund drei Jahrhunderte älter –, aber die umfangreichste erhaltene. Die Strafen sind nach Stand gestaffelt: Wessen Auge zerstört wird, entscheidet über das Strafmaß.",
    "vertiefung": "hammurapi"
   },
   {
    "jahr": -1300,
    "titel": "Der Codex der Hethiter",
    "text": "Auch hier treten Bußzahlungen an die Stelle von Körperstrafen. Das Nebeneinander verschiedener Rechtstraditionen im selben Raum zeigt, dass es keinen geraden Weg von hart zu milde gab."
   },
   {
    "jahr": -594,
    "titel": "Solons Reformen in Athen",
    "text": "Die Schuldknechtschaft wird abgeschafft: Wer seine Schulden nicht zahlen kann, verliert nicht mehr seine Freiheit. Damit wird zum ersten Mal eine Grenze gezogen, die Vermögen nicht überschreiten darf.",
    "vertiefung": "athener-demokratie"
   },
   {
    "jahr": -450,
    "titel": "Das Zwölftafelgesetz",
    "text": "Rom schreibt sein Recht auf öffentliche Tafeln. Der Fortschritt liegt nicht im Inhalt, sondern in der Sichtbarkeit – wer die Regel kennt, kann sich auf sie berufen.",
    "vertiefung": "roemische-republik"
   },
   {
    "jahr": -300,
    "titel": "Das Arthaschastra",
    "text": "Das indische Handbuch der Staatskunst behandelt Verwaltung, Steuern, Spionage und Strafrecht mit kühler Sachlichkeit. Es wurde erst 1905 wiederentdeckt und veränderte das Bild vom antiken Indien grundlegend."
   },
   {
    "jahr": -221,
    "titel": "Legalismus in China",
    "text": "Die Qin setzen auf geschriebene, für alle gleiche Gesetze mit harten Strafen – gegen die konfuzianische Vorstellung, Herrschaft beruhe auf Vorbild und Sitte. Der Streit zwischen beiden Auffassungen zieht sich durch die gesamte chinesische Geschichte."
   },
   {
    "jahr": 212,
    "titel": "Das Bürgerrecht für alle Freien",
    "text": "Caracalla verleiht allen freien Bewohnern des Reiches das römische Bürgerrecht. Der Anlass war vermutlich fiskalisch, die Wirkung grundlegend: Ein einziges Recht galt von Britannien bis Ägypten.",
    "vertiefung": "roemisches-buergerrecht"
   },
   {
    "jahr": 533,
    "titel": "Die Digesten des Corpus Iuris Civilis",
    "text": "Justinian lässt das römische Recht ordnen. Im 11. Jahrhundert in Italien wiederentdeckt, wird es zur Grundlage der Rechtswissenschaft in weiten Teilen Europas – ein Text überlebt sein Reich um anderthalb Jahrtausende.",
    "vertiefung": "kaiser-justinian"
   },
   {
    "jahr": 653,
    "titel": "Das Tang-Gesetzbuch",
    "text": "Der Tang-Kodex ordnet Strafmaße nach Tat und Stellung und wurde zum Vorbild für Japan, Korea und Vietnam. Er ist der älteste vollständig erhaltene Gesetzeskodex Ostasiens."
   },
   {
    "jahr": 1075,
    "titel": "Wiederentdeckung des römischen Rechts",
    "text": "In Bologna beginnt das Studium der Digesten. Aus der Auslegung eines tausend Jahre alten Textes entsteht die erste Universität Europas – und die Berufsgruppe der Juristen."
   },
   {
    "jahr": 1215,
    "titel": "Die Magna Carta",
    "text": "Englische Barone zwingen dem König Zugeständnisse ab. Es war ein Adelsprivileg, kein Freiheitsdokument; zu einem solchen wurde es erst im 17. Jahrhundert umgedeutet, als man es gegen die Krone brauchte.",
    "vertiefung": "magna-carta"
   },
   {
    "jahr": 1230,
    "titel": "Der Sachsenspiegel",
    "text": "Eike von Repgow schreibt geltendes Gewohnheitsrecht auf Deutsch nieder. Er stellt fest, dass Unfreiheit auf Unrecht beruhe – ein früher Satz, dessen Tragweite erst viel später eingelöst wurde."
   },
   {
    "jahr": 1532,
    "titel": "Die Carolina",
    "text": "Die peinliche Halsgerichtsordnung Karls V. vereinheitlicht das Strafverfahren im Reich. Sie regelt auch die Folter – nicht als Willkür, sondern mit Bedingungen und Grenzen. Das war gemessen an der Praxis ein Fortschritt und bleibt aus heutiger Sicht schwer erträglich.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1625,
    "titel": "Grotius begründet das Völkerrecht",
    "text": "Mitten im Dreißigjährigen Krieg schreibt Hugo Grotius über Recht im Krieg und Frieden und leitet es aus der Vernunft statt aus der Religion ab. Damit lässt es sich auch zwischen Staaten verschiedener Konfession anwenden."
   },
   {
    "jahr": 1689,
    "titel": "Die englische Bill of Rights",
    "text": "Nach der Vertreibung Jakobs II. wird festgeschrieben, was der König nicht darf. Die konstitutionelle Monarchie entsteht nicht aus Theorie, sondern aus dem Ergebnis eines Machtkampfs."
   },
   {
    "jahr": 1748,
    "titel": "Montesquieu über die Gewaltenteilung",
    "text": "Er beschreibt die Trennung von Gesetzgebung, Verwaltung und Rechtsprechung – teils als Fehlinterpretation der englischen Verhältnisse. Die Idee wirkte trotzdem, oder gerade deshalb."
   },
   {
    "jahr": 1764,
    "titel": "Beccaria gegen Folter und Todesstrafe",
    "text": "Ein 26-Jähriger veröffentlicht anonym eine Schrift, die binnen Jahren in ganz Europa gelesen wird. Seine Argumente – Sicherheit der Strafe wirkt stärker als ihre Härte – führten in mehreren Staaten zur Abschaffung der Folter.",
    "vertiefung": "beccaria"
   },
   {
    "jahr": 1789,
    "titel": "Die Erklärung der Menschen- und Bürgerrechte",
    "text": "Frankreich erklärt Rechte für allgemein und angeboren. Zwei Jahre später fordert Olympe de Gouges dieselben Rechte für Frauen ein – 1793 wird sie hingerichtet.",
    "vertiefung": "franzoesische-revolution"
   },
   {
    "jahr": 1791,
    "titel": "Die amerikanische Bill of Rights",
    "text": "Zehn Zusatzartikel binden den Staat. Zugleich blieb die Sklaverei bestehen: Der Widerspruch zwischen erklärtem und geltendem Recht war den Zeitgenossen bewusst und wurde ausgehalten."
   },
   {
    "jahr": 1804,
    "titel": "Der Code civil",
    "text": "Napoleon lässt das Privatrecht vereinheitlichen: klar gegliedert, für Laien lesbar. Er wurde in halb Europa und Lateinamerika übernommen – und schrieb die Unterordnung der Ehefrau fest."
   },
   {
    "jahr": 1863,
    "titel": "Der Lieber Code",
    "text": "Mitten im amerikanischen Bürgerkrieg werden Regeln für die eigene Armee erlassen. Die Vorstellung, dass auch der Krieg Recht kennt, wird von hier aus international."
   },
   {
    "jahr": 1865,
    "titel": "Der 13. Zusatzartikel",
    "text": "Die US-Verfassung verbietet Sklaverei – mit einer Ausnahme für Strafgefangene. Diese Klausel wurde unmittelbar danach genutzt, um schwarze Amerikaner massenhaft zu verurteilen und ihre Arbeitskraft zu verpachten.",
    "vertiefung": "amerikanischer-buergerkrieg"
   },
   {
    "jahr": 1899,
    "titel": "Die Haager Konventionen",
    "text": "Erstmals einigen sich Staaten in Friedenszeiten auf Regeln für die Kriegführung und richten einen Schiedshof ein. Fünfzehn Jahre später zeigte der Weltkrieg, wie begrenzt solche Regeln ohne Durchsetzung bleiben."
   },
   {
    "jahr": 1919,
    "titel": "Die Weimarer Reichsverfassung",
    "text": "Sie führt das Frauenwahlrecht und soziale Grundrechte ein – und enthält mit dem Notverordnungsrecht ein Instrument, das ihre Zerstörung erleichterte. Verfassungen scheitern selten am Text allein."
   },
   {
    "jahr": 1945,
    "titel": "Nürnberg",
    "text": "Erstmals stehen Staatsführer vor einem internationalen Gericht. Der Einwand, hier werde rückwirkend Recht geschaffen, wurde damals erhoben und wird bis heute diskutiert. Die Kategorie Verbrechen gegen die Menschlichkeit stammt von hier.",
    "vertiefung": "holocaust"
   },
   {
    "jahr": 1948,
    "titel": "Die Allgemeine Erklärung der Menschenrechte",
    "text": "Als Antwort auf den Zivilisationsbruch verabschiedet, rechtlich aber nicht bindend. Ihre Wirkung entfaltete sie über Jahrzehnte, indem Gerichte und Bewegungen sich auf sie beriefen."
   },
   {
    "jahr": 1949,
    "titel": "Die Genfer Konventionen",
    "text": "Schutz von Verwundeten, Kriegsgefangenen und Zivilisten wird völkerrechtlich verankert. Die Regeln werden gebrochen – dass es sie gibt, macht den Bruch überhaupt erst benennbar."
   },
   {
    "jahr": 1966,
    "titel": "Die beiden UN-Menschenrechtspakte",
    "text": "Die Allgemeine Erklärung von 1948 war nicht bindend. Erst die Pakte über bürgerliche und über soziale Rechte machen daraus Völkerrecht – aufgeteilt in zwei Verträge, weil Ost und West sich nicht einigen konnten, welche Rechte zuerst kommen."
   },
   {
    "jahr": 1998,
    "titel": "Das Römische Statut",
    "text": "120 Staaten beschließen einen ständigen Internationalen Strafgerichtshof. Die USA, China, Russland und Indien traten nicht bei. Der Gerichtshof kann nur handeln, wenn nationale Justiz versagt – und nur, wo Staaten mitwirken."
   },
   {
    "jahr": 2002,
    "titel": "Der Internationale Strafgerichtshof",
    "text": "Erstmals gibt es ein ständiges Gericht für Völkermord und Kriegsverbrechen. Wichtige Staaten haben das Statut nicht ratifiziert, darunter die USA, Russland, China und Indien – die Reichweite bleibt begrenzt."
   }
  ],
  "strittig": "Ob die Magna Carta am Anfang der modernen Freiheitsrechte steht oder ob diese Linie eine spätere Rückprojektion ist, wird in der Rechtsgeschichte unterschiedlich beurteilt. Umstritten ist auch, wie viel Montesquieus Gewaltenteilung mit den tatsächlichen englischen Verhältnissen seiner Zeit zu tun hatte. Und die Frage, ob Menschenrechte universal gelten oder kulturell geprägt sind, ist keine historische, sondern eine offene politische Auseinandersetzung – wer sie als geklärt darstellt, verkürzt.",
  "quellen": [
   "Uwe Wesel: Geschichte des Rechts. Von den Frühformen bis zur Gegenwart",
   "Encyclopaedia Britannica: Code of Hammurabi; Magna Carta; Corpus Juris Civilis",
   "Vereinte Nationen: Allgemeine Erklärung der Menschenrechte, Text und Entstehungsgeschichte",
   "Internationaler Strafgerichtshof: Rom-Statut, Stand der Ratifizierungen"
  ],
  "literatur": [
   {
    "titel": "Rechtsgeschichte",
    "autor": "Uwe Wesel",
    "jahr": "2014",
    "warum": "Von den ersten Gesetzestexten bis zur Gegenwart, in einem Band. Der beste deutsche Überblick, mit Sinn für die politischen Hintergründe."
   },
   {
    "titel": "Die Erfindung der Menschenrechte",
    "autor": "Lynn Hunt",
    "jahr": "2009",
    "warum": "Wie eine Idee entstand, die vorher nicht denkbar war – und was Romane und Briefe damit zu tun hatten."
   },
   {
    "titel": "Über Verbrechen und Strafen",
    "autor": "Cesare Beccaria",
    "jahr": "1764",
    "warum": "Der Text, der die Folter aus dem europäischen Strafrecht argumentierte. Schmal, gut lesbar und in seiner Wirkung kaum zu überschätzen."
   }
  ]
 },
 {
  "id": "ernaehrung",
  "titel": "Ernährung & Landwirtschaft",
  "kurz": "Wie viele Menschen ein Stück Land tragen kann — und wer davon satt wird.",
  "einleitung": "Über den größten Teil der Geschichte war die Bevölkerungszahl an den Ertrag der Felder gebunden: Missernte bedeutete Hunger, guter Boden bedeutete Macht. Jede Steigerung des Ertrags wurde von wachsender Bevölkerung aufgezehrt, bis Kunstdünger und Züchtung diesen Kreis im 20. Jahrhundert durchbrachen. Seither ist Hunger kein Produktions-, sondern ein Verteilungsproblem – eine der wenigen wirklich neuen Tatsachen der Menschheitsgeschichte.",
  "stationen": [
   {
    "jahr": -9000,
    "titel": "Domestikation von Pflanzen und Tieren",
    "text": "Im Fruchtbaren Halbmond, unabhängig davon auch in China, Mesoamerika, den Anden und Neuguinea. Die Ernährung wurde dabei zunächst einseitiger und die Menschen kleiner – Ackerbau war kein Fortschritt für den Einzelnen, sondern für die Zahl."
   },
   {
    "jahr": -6000,
    "titel": "Bier und Brot",
    "text": "Getreide wurde vermutlich ebenso früh vergoren wie gebacken. Vergorene Getränke waren keimarm, haltbar und kalorienreich – über Jahrtausende Grundnahrung, nicht Genussmittel. Manche Forscher halten Bier sogar für einen Beweggrund des Getreideanbaus."
   },
   {
    "jahr": -3000,
    "titel": "Bewässerung in Mesopotamien",
    "text": "Kanäle vervielfachen den Ertrag und erfordern Verwaltung. Sie versalzen aber langfristig den Boden: Aus Weizenanbau wird Gerste, dann nichts – die erste bekannte menschengemachte Bodendegradation."
   },
   {
    "jahr": -2000,
    "titel": "Salz konserviert",
    "text": "Pökeln und Trocknen lösen Nahrung von der Jahreszeit. Salz wird dadurch zu einem der wichtigsten Handelsgüter überhaupt – Salzstraßen, Salzsteuern und Salzmonopole prägen Staaten von China bis Frankreich."
   },
   {
    "jahr": -100,
    "titel": "Getreide für Rom",
    "text": "Die Hauptstadt ernährt sich aus Ägypten und Nordafrika; hunderttausende Bürger erhalten kostenlose Zuteilungen. Die Versorgung einer Millionenstadt über See war eine Verwaltungsleistung, die Europa danach anderthalb Jahrtausende nicht wiederholte."
   },
   {
    "jahr": 800,
    "titel": "Dreifelderwirtschaft und Kummet",
    "text": "Ein Feld ruht, statt zwei; das Pferd kann ziehen, ohne sich zu würgen. Beides zusammen erhöht die Ertragskraft Nordeuropas deutlich und trägt das Bevölkerungswachstum des Hochmittelalters."
   },
   {
    "jahr": 900,
    "titel": "Reis verändert China",
    "text": "Schnell reifende Reissorten aus Champa erlauben zwei Ernten im Jahr. Die Bevölkerung Chinas verdoppelt sich innerhalb weniger Jahrhunderte – eine der folgenreichsten Pflanzenverbreitungen der Geschichte."
   },
   {
    "jahr": 1500,
    "titel": "Der Kolumbianische Austausch",
    "text": "Kartoffel, Mais und Tomate kommen nach Europa, Afrika und Asien; Weizen, Rind und Zuckerrohr nach Amerika. Die Kartoffel allein hat das Bevölkerungswachstum Europas maßgeblich getragen – und Irland in eine gefährliche Abhängigkeit geführt.",
    "vertiefung": "columbian-exchange"
   },
   {
    "jahr": 1500,
    "titel": "Zucker und Sklaverei",
    "text": "Zuckerrohr wächst nur in den Tropen und verlangt enorm viel Arbeit. Die Nachfrage Europas nach einem Süßungsmittel ist einer der Hauptgründe für den transatlantischen Sklavenhandel – Ernährungsgeschichte und Gewaltgeschichte sind hier nicht zu trennen."
   },
   {
    "jahr": 1620,
    "titel": "Die Kartoffel kommt nach Europa",
    "text": "Zunächst misstrauisch beäugt, setzt sie sich im 18. Jahrhundert durch: Sie liefert auf gleicher Fläche mehr Kalorien als Getreide und übersteht Kriege, weil sie im Boden bleibt. Sie ermöglichte Bevölkerungswachstum – und machte Irland von einer einzigen Pflanze abhängig."
   },
   {
    "jahr": 1730,
    "titel": "Die Norfolk-Fruchtfolge",
    "text": "Klee und Rüben ersetzen die Brache und binden Stickstoff. Der Ertrag steigt ohne neue Fläche – die landwirtschaftliche Voraussetzung der Industrialisierung."
   },
   {
    "jahr": 1798,
    "titel": "Malthus über Bevölkerung und Nahrung",
    "text": "Er sagt voraus, dass die Bevölkerung schneller wächst als die Nahrungsmenge. Für die gesamte vorindustrielle Geschichte war das zutreffend; für die folgenden zwei Jahrhunderte lag er falsch – aus Gründen, die er nicht kennen konnte."
   },
   {
    "jahr": 1809,
    "titel": "Die Konservendose",
    "text": "Nicolas Appert gewinnt einen von Napoleon ausgesetzten Preis für ein Verfahren, Lebensmittel haltbar zu machen. Warum Erhitzen wirkt, wusste damals niemand; Pasteur erklärte es erst fünfzig Jahre später. Der Dosenöffner wurde übrigens erst 1858 erfunden."
   },
   {
    "jahr": 1845,
    "titel": "Die Große Hungersnot in Irland",
    "text": "Eine Kartoffelfäule zerstört die Ernten. Rund eine Million Menschen sterben, mindestens 1,3 Millionen wandern aus – während Getreide und Vieh weiter nach Britannien exportiert werden. Der Hunger war eine Folge der Marktordnung, nicht nur des Pilzes.",
    "vertiefung": "irische-hungersnot"
   },
   {
    "jahr": 1866,
    "titel": "Mendels Regeln erscheinen im Druck",
    "text": "Die Arbeit bleibt fast vierzig Jahre unbeachtet. Ihre Wiederentdeckung um 1900 macht Pflanzenzüchtung erstmals planbar statt zufällig."
   },
   {
    "jahr": 1876,
    "titel": "Kühlschiffe",
    "text": "Erstmals gelangt gefrorenes Fleisch aus Argentinien nach Europa. Damit lösen sich Erzeugung und Verbrauch geographisch voneinander – der Beginn des globalen Nahrungshandels."
   },
   {
    "jahr": 1909,
    "titel": "Das Haber-Bosch-Verfahren",
    "text": "Stickstoffdünger aus der Luft hebt die natürliche Ertragsgrenze auf. Schätzungen zufolge beruht die Ernährung etwa der Hälfte der heutigen Menschheit darauf – bei erheblichen Folgen für Gewässer und Klima.",
    "vertiefung": "haber-bosch"
   },
   {
    "jahr": 1912,
    "titel": "Vitamine",
    "text": "Casimir Funk prägt den Begriff für Stoffe, die in winzigen Mengen unentbehrlich sind. Krankheiten wie Skorbut, Beriberi und Rachitis erweisen sich als Mangel- statt als Infektionskrankheiten – ein völlig neuer Blick auf Ernährung."
   },
   {
    "jahr": 1930,
    "titel": "Der Dust Bowl",
    "text": "Pflügen der Prärie und Dürre verwandeln Ackerland in Staubstürme. Hunderttausende verlieren ihre Existenz – die erste große Erfahrung, dass moderne Landwirtschaft ihre Grundlage zerstören kann.",
    "vertiefung": "dust-bowl"
   },
   {
    "jahr": 1932,
    "titel": "Die Hungersnot in der Sowjetunion",
    "text": "Zwangskollektivierung und Getreideabgaben führen zu Millionen Toten, besonders in der Ukraine. Politisch verursachter Hunger ist im 20. Jahrhundert die Regel, nicht die Ausnahme."
   },
   {
    "jahr": 1943,
    "titel": "Die Hungersnot in Bengalen",
    "text": "Bis zu drei Millionen Menschen sterben – nicht wegen einer Missernte allein, sondern wegen Preisexplosion, Beschlagnahmungen und Kriegsprioritäten. Amartya Sen zeigte später, dass Hungersnöte selten an fehlender Nahrung liegen, sondern am fehlenden Zugang zu ihr."
   },
   {
    "jahr": 1956,
    "titel": "Der Container",
    "text": "Nicht die Landwirtschaft, aber ihr Transport verändert sich grundlegend. Zusammen mit der Kühlkette entkoppelt er Verzehr und Jahreszeit – und macht Ernährung zu einem globalen Markt."
   },
   {
    "jahr": 1961,
    "titel": "Die Grüne Revolution",
    "text": "Kurzhalmige Hochertragssorten, Dünger und Bewässerung verdoppeln die Weizenernten in Indien und Pakistan zwischen 1965 und 1970. Der Preis: Abhängigkeit von Betriebsmitteln, sinkende Grundwasserspiegel und Vorteile vor allem für größere Betriebe.",
    "vertiefung": "gruene-revolution"
   },
   {
    "jahr": 1962,
    "titel": "Der stumme Frühling",
    "text": "Rachel Carsons Buch über die Folgen von DDT löst die moderne Umweltbewegung aus. Die chemische Industrie bekämpfte es massiv; zehn Jahre später wurde DDT in den USA verboten."
   },
   {
    "jahr": 1963,
    "titel": "Der Codex Alimentarius",
    "text": "FAO und WHO richten ein Gremium ein, das Standards für Lebensmittel festlegt: Höchstwerte für Rückstände, Hygieneregeln, Kennzeichnung. Die Normen sind rechtlich nicht bindend, werden aber in Handelsstreitigkeiten als Maßstab herangezogen und damit faktisch verbindlich. Wer die Norm setzt, entscheidet mit, wessen Ware exportfähig ist."
   },
   {
    "jahr": 1970,
    "titel": "Industrielle Tierhaltung",
    "text": "Soja aus Südamerika ermöglicht Fleisch in bisher unbekannter Menge und zu bisher unbekanntem Preis. Flächenverbrauch, Antibiotikaeinsatz und Klimawirkung sind die Kehrseite."
   },
   {
    "jahr": 1974,
    "titel": "Die Welternährungskonferenz",
    "text": "In Rom erklärt die erste Welternährungskonferenz das Ziel, Hunger innerhalb eines Jahrzehnts zu beseitigen. Erreicht wurde das nicht; entstanden ist aber die Einsicht, die die Forschung seither bestätigt: Große Hungersnöte des 20. Jahrhunderts beruhten selten auf fehlender Nahrungsmenge, sondern auf Kaufkraft, Transport und politischen Entscheidungen. Amartya Sen hat das 1981 an mehreren Fällen belegt."
   },
   {
    "jahr": 1996,
    "titel": "Gentechnik auf dem Feld",
    "text": "Die erste gentechnisch veränderte Sojabohne kommt in den Handel. Die Debatte verläuft in Europa und Amerika seither völlig verschieden – bei weitgehend gleicher Studienlage, aber unterschiedlichem Vertrauen in Behörden und Konzerne."
   },
   {
    "jahr": 2008,
    "titel": "Die Nahrungsmittelpreiskrise",
    "text": "Ernteausfälle, Biosprit und Spekulation lassen Preise sprunghaft steigen; in über dreißig Ländern kommt es zu Unruhen. Verfügbarkeit und Bezahlbarkeit sind zweierlei."
   },
   {
    "jahr": 2013,
    "titel": "Ein Drittel geht verloren",
    "text": "Die FAO schätzt, dass etwa ein Drittel aller erzeugten Lebensmittel verdirbt oder weggeworfen wird – in armen Ländern überwiegend auf dem Weg zum Markt, in reichen überwiegend im Handel und im Haushalt."
   },
   {
    "jahr": 2020,
    "titel": "Genug für alle, und trotzdem Hunger",
    "text": "Weltweit wird mehr produziert, als rechnerisch nötig wäre; hungern müssen dennoch Hunderte Millionen. Die Ursachen sind Krieg, Armut und Verteilung – nicht die Ertragskraft der Böden."
   }
  ],
  "strittig": "Warum Menschen sesshaft wurden, obwohl sich Gesundheit und Arbeitsbelastung zunächst verschlechterten, ist ungeklärt; Klimawandel, Bevölkerungsdruck und soziale Gründe konkurrieren als Erklärungen. Bei der Irischen Hungersnot wird bis heute gestritten, ob die britische Politik als Versagen oder als bewusste Vernachlässigung einzustufen ist. Und die Bewertung der Grünen Revolution fällt je nach Maßstab entgegengesetzt aus: Gemessen an vermiedenen Hungertoten war sie ein Erfolg, gemessen an ökologischen und sozialen Folgekosten eine Hypothek.",
  "quellen": [
   "Encyclopaedia Britannica: Great Famine (Irish history); Green Revolution; Origins of agriculture",
   "FAO: The State of Food Security and Nutrition in the World, laufende Ausgaben",
   "Nobelprize.org: Norman Borlaug, Friedensnobelpreis 1970",
   "James C. Scott: Against the Grain. Eine tiefe Geschichte der frühesten Staaten"
  ],
  "literatur": [
   {
    "titel": "Salz – Der Stoff, der die Welt veränderte",
    "autor": "Mark Kurlansky",
    "jahr": "2002",
    "warum": "Ein einziges Handelsgut als Faden durch die Weltgeschichte. Das Muster hat viele Nachahmer gefunden, das Original ist das beste."
   },
   {
    "titel": "Hungersnöte",
    "autor": "Cormac Ó Gráda",
    "jahr": "2009",
    "warum": "Vergleichende Untersuchung von Hungersnöten über Jahrhunderte und Kontinente – mit dem zentralen Befund, dass sie selten an fehlender Nahrung liegen."
   },
   {
    "titel": "Die Ernährungsfalle",
    "autor": "Michael Pollan",
    "jahr": "2006",
    "warum": "Wie industrielle Nahrungsmittelproduktion funktioniert und was sie mit dem Essen macht. Streitbar und wirkungsvoll."
   }
  ]
 },
 {
  "id": "geld",
  "titel": "Geld & Handel",
  "kurz": "Von der Schuld zur Münze zum Buchungssatz — und warum Vertrauen die eigentliche Währung ist.",
  "einleitung": "Geld ist keine Sache, sondern eine Übereinkunft: Es funktioniert, solange genug Menschen glauben, dass es funktioniert. Deshalb ist die Geschichte des Geldes vor allem eine Geschichte von Vertrauen und seinem Zusammenbruch. Und sie verläuft nicht, wie oft erzählt, vom Tauschhandel über die Münze zum Papier – Schulden und Verrechnung sind älter als jede Münze.",
  "stationen": [
   {
    "jahr": -3000,
    "titel": "Rechnen ohne Münzen",
    "text": "In Mesopotamien werden Schulden in Gerste und Silber verbucht, lange bevor es Geldstücke gibt. Der Tauschhandel als Vorstufe des Geldes ist eine Erzählung des 18. Jahrhunderts, für die die Ethnologie kaum Belege gefunden hat."
   },
   {
    "jahr": -1800,
    "titel": "Zins und Schuldenerlass",
    "text": "Mesopotamische Verträge kennen Zinsen von 20 Prozent auf Silber und 33 Prozent auf Getreide. Weil sich Schulden dadurch aufschaukelten, erließen Könige regelmäßig alle Schulden – ein Reset, der die Gesellschaft vor dem Zerfall in Gläubiger und Schuldknechte bewahren sollte.",
    "vertiefung": "erste-muenzen"
   },
   {
    "jahr": -600,
    "titel": "Die ersten Münzen in Lydien",
    "text": "Geprägtes Elektron macht Wert prüfbar, ohne zu wiegen. Die Erfindung breitet sich in griechischen Städten rasend schnell aus – und ermöglicht Söldnerheere, Steuern und Märkte in neuer Form.",
    "vertiefung": "erste-muenzen"
   },
   {
    "jahr": -350,
    "titel": "Aristoteles über das Geld",
    "text": "Er unterscheidet den Erwerb zum Lebensunterhalt vom Erwerb um seiner selbst willen und verurteilt den Zins, weil Geld nichts hervorbringe. Dieses Argument prägte das kirchliche Zinsverbot des Mittelalters – und die Umwege, mit denen es umgangen wurde."
   },
   {
    "jahr": -118,
    "titel": "Kaurischnecken als Weltwährung",
    "text": "Von den Malediven aus dienten Kaurischnecken über Jahrhunderte in Afrika, Indien und China als Zahlungsmittel. Sie waren fälschungssicher, haltbar und teilbar – und wurden später gezielt von europäischen Händlern eingeführt, um Sklaven zu kaufen."
   },
   {
    "jahr": -100,
    "titel": "Handelsnetze über Kontinente",
    "text": "Seide, Weihrauch und Gewürze bewegen sich über Zwischenhändler zwischen China, Indien, Arabien und Rom. Kaum jemand legt die ganze Strecke zurück – Fernhandel funktioniert als Kette, nicht als Reise."
   },
   {
    "jahr": 1024,
    "titel": "Papiergeld in China",
    "text": "Unter der Song-Dynastie wird staatlich gedecktes Papiergeld ausgegeben. Übermäßige Ausgabe führt später zu Entwertung – die erste dokumentierte Inflation durch Notendruck.",
    "vertiefung": "papiergeld"
   },
   {
    "jahr": 1150,
    "titel": "Die Champagnemessen",
    "text": "Sechs Messen im Jahr machen die Champagne zum Umschlagplatz Europas. Wichtiger als die Waren war die Erfindung, die dort entstand: Verrechnung von Forderungen ohne Bargeld, unter Aufsicht der Messegerichte."
   },
   {
    "jahr": 1250,
    "titel": "Wechsel und italienische Bankiers",
    "text": "Ein Papier in Florenz wird in Brügge ausgezahlt. Der Wechsel umgeht den Transport von Bargeld und, wenn nötig, das kirchliche Zinsverbot."
   },
   {
    "jahr": 1397,
    "titel": "Die Medici-Bank",
    "text": "Filialen in mehreren Städten, doppelte Buchführung und Wechselgeschäfte statt verbotener Zinsen. Die Bank machte die Familie so mächtig, dass sie Florenz regierte und vier Päpste stellte – und ging am Ende an schlechten Krediten an Fürsten zugrunde.",
    "vertiefung": "doppelte-buchfuehrung"
   },
   {
    "jahr": 1494,
    "titel": "Pacioli beschreibt die doppelte Buchführung",
    "text": "Jede Buchung erscheint zweimal, Fehler fallen auf. Die Technik ist älter, aber erst ihre Veröffentlichung macht sie zum Standard – und Unternehmen erstmals nachprüfbar.",
    "vertiefung": "doppelte-buchfuehrung"
   },
   {
    "jahr": 1545,
    "titel": "Silber aus Potosí",
    "text": "Der Berg in den Anden liefert jahrzehntelang das meiste Silber der Welt. Es floss über Spanien nach Europa und weiter nach China, das Silber als Steuerwährung verlangte. Der erste wirklich weltumspannende Geldkreislauf – bezahlt mit der Zwangsarbeit der Mita.",
    "vertiefung": "potosi"
   },
   {
    "jahr": 1602,
    "titel": "Die Niederländische Ostindien-Kompanie",
    "text": "Die erste Aktiengesellschaft mit handelbaren Anteilen und börsenmäßigem Handel. Sie führt zugleich Krieg, schließt Verträge und unterwirft Gebiete – ein Unternehmen mit Staatsgewalt."
   },
   {
    "jahr": 1637,
    "titel": "Die Tulpenmanie",
    "text": "Das gängige Bild eines volkswirtschaftlichen Zusammenbruchs ist stark übertrieben; betroffen war ein kleiner Kreis von Händlern. Als Lehrstück taugt sie trotzdem – über die Entstehung von Erzählungen ebenso wie über Spekulation."
   },
   {
    "jahr": 1668,
    "titel": "Die erste Zentralbank",
    "text": "Die schwedische Reichsbank entsteht, nachdem eine private Bank mit Papiergeld gescheitert war. Sie ist bis heute die älteste noch bestehende Zentralbank der Welt."
   },
   {
    "jahr": 1694,
    "titel": "Gründung der Bank of England",
    "text": "Ursprünglich zur Kriegsfinanzierung. Aus der Staatsschuld entsteht ein handelbarer Markt – und damit die Fähigkeit moderner Staaten, weit über ihre laufenden Einnahmen hinaus zu handeln."
   },
   {
    "jahr": 1720,
    "titel": "Südsee- und Mississippi-Blase",
    "text": "Zwei Spekulationswellen platzen im selben Jahr in London und Paris. Frankreich blieb dem Papiergeld danach jahrzehntelang misstrauisch – eine Finanzkrise prägt die Wirtschaftskultur eines Landes über Generationen."
   },
   {
    "jahr": 1816,
    "titel": "Der Goldstandard",
    "text": "Britannien bindet das Pfund gesetzlich an Gold; andere folgen. Stabile Wechselkurse fördern den Welthandel und nehmen den Staaten zugleich jeden Spielraum in der Krise."
   },
   {
    "jahr": 1873,
    "titel": "Das Ende des Silbers",
    "text": "Innerhalb weniger Jahre stellen die meisten Staaten auf reinen Goldstandard um. Silberproduzenten und Schuldner leiden, Gläubiger profitieren – der Streit darüber prägte die amerikanische Politik der 1890er Jahre."
   },
   {
    "jahr": 1913,
    "titel": "Die Federal Reserve",
    "text": "Nach mehreren Bankenpaniken schaffen die USA widerwillig eine Zentralbank. Sie ist bewusst als System aus zwölf regionalen Banken gebaut, weil eine einzige Institution politisch nicht durchsetzbar war."
   },
   {
    "jahr": 1923,
    "titel": "Die deutsche Hyperinflation",
    "text": "Preise verdoppeln sich zeitweise im Tagesrhythmus. Die Erfahrung prägt die deutsche Wirtschaftspolitik bis heute stärker als die Deflation von 1930, die politisch weit folgenreicher war."
   },
   {
    "jahr": 1929,
    "titel": "Der Börsenkrach",
    "text": "Nach Jahren des Kaufs auf Kredit bricht der Markt ein. Der Krach war nicht die Ursache der Weltwirtschaftskrise, aber ihr Auslöser – entscheidend war, dass Notenbanken und Regierungen anschließend falsch reagierten."
   },
   {
    "jahr": 1944,
    "titel": "Bretton Woods",
    "text": "Feste Wechselkurse gegenüber dem an Gold gebundenen Dollar; Weltbank und Währungsfonds entstehen. Die USA werden zum Anker des Systems – und damit zur Ordnungsmacht der Weltwirtschaft.",
    "vertiefung": "bretton-woods"
   },
   {
    "jahr": 1950,
    "titel": "Die Kreditkarte",
    "text": "Diners Club beginnt mit 200 Kunden und 27 Restaurants in New York. Bezahlen wird von Bargeld gelöst; gleichzeitig entsteht ein System, das Kaufverhalten erfassbar macht."
   },
   {
    "jahr": 1971,
    "titel": "Das Ende der Goldbindung",
    "text": "Nixon hebt die Einlösepflicht auf. Seither ist alles Geld reines Vertrauensgeld, gedeckt allein durch die Erwartung, dass es angenommen wird.",
    "vertiefung": "bretton-woods"
   },
   {
    "jahr": 1973,
    "titel": "Ölpreis und Petrodollar",
    "text": "Die Vervierfachung des Ölpreises lenkt gewaltige Summen in die Förderstaaten und von dort zurück auf westliche Finanzmärkte. Die Verschuldung vieler Entwicklungsländer der 1980er Jahre beginnt hier."
   },
   {
    "jahr": 1999,
    "titel": "Der Euro",
    "text": "Elf Staaten geben ihre Währungshoheit ab. Eine gemeinsame Geldpolitik ohne gemeinsame Finanzpolitik war von Anfang an ein Konstruktionsproblem – die Eurokrise ab 2010 legte es offen."
   },
   {
    "jahr": 2008,
    "titel": "Die Finanzkrise",
    "text": "Verbriefte Hypotheken verteilen Risiken, bis niemand mehr weiß, wer sie trägt. Die Rettung der Banken durch Staaten wird zur Staatsschuldenkrise – und untergräbt das Vertrauen in beide."
   },
   {
    "jahr": 2009,
    "titel": "Bitcoin",
    "text": "Ein Zahlungssystem ohne zentrale Instanz. Als Währung im Alltag hat es sich kaum durchgesetzt; als Vermögensanlage und als Beweis, dass Geld ohne Staat technisch möglich ist, wirkt es fort."
   },
   {
    "jahr": 2010,
    "titel": "Die Eurokrise",
    "text": "Griechenland kann sich nicht mehr am Markt finanzieren; es folgen Rettungspakete, Sparauflagen und der Satz der EZB, alles Nötige zu tun. Er beruhigte die Märkte mehr als jede Summe zuvor."
   },
   {
    "jahr": 2014,
    "titel": "Bezahlen mit dem Telefon",
    "text": "In Kenia hatte M-Pesa schon 2007 gezeigt, dass Geldverkehr ohne Bankkonto funktioniert. In China wird das Telefon binnen weniger Jahre zum Hauptzahlungsmittel – Länder ohne alte Bankeninfrastruktur übersprangen eine ganze Entwicklungsstufe."
   }
  ],
  "strittig": "Ob Geld aus dem Tauschhandel entstand oder aus Schuldverhältnissen, ist zwischen Ökonomie und Ethnologie umstritten; die ältere Lehrbuchversion gilt heute als schlecht belegt. Auch die Ursachen der Weltwirtschaftskrise nach 1929 werden unterschiedlich gewichtet – Geldpolitik, Goldstandard, Protektionismus und Ungleichheit stehen nebeneinander. Bei der Krise von 2008 ist strittig, ob es sich um ein Regulierungsversagen, ein Modellversagen oder ein Anreizproblem handelte; die Antwort entscheidet darüber, welche Konsequenzen man zieht.",
  "quellen": [
   "David Graeber: Schulden. Die ersten 5000 Jahre (mit der in der Fachdebatte umstrittenen Ursprungsthese)",
   "Encyclopaedia Britannica: Money; Gold standard; Tulip mania",
   "Anne Goldgar: Tulipmania. Money, Honor, and Knowledge in the Dutch Golden Age",
   "Bank for International Settlements: Annual Economic Report, Kapitel zu Zahlungssystemen"
  ],
  "literatur": [
   {
    "titel": "Schulden – Die ersten 5.000 Jahre",
    "autor": "David Graeber",
    "jahr": "2011",
    "warum": "Stellt die gängige Erzählung von Tauschwirtschaft zu Geld auf den Kopf: Kredit war zuerst. Streitbar, in Einzelheiten kritisiert, insgesamt anregend wie kaum ein anderes Buch zum Thema."
   },
   {
    "titel": "Der Aufstieg des Geldes",
    "autor": "Niall Ferguson",
    "jahr": "2008",
    "warum": "Die Geschichte der Finanzmärkte von den italienischen Bankiers bis zur Krise 2008. Zugänglich, mit klarer wirtschaftsliberaler Perspektive."
   },
   {
    "titel": "Diesmal ist alles anders",
    "autor": "Carmen Reinhart und Kenneth Rogoff",
    "jahr": "2009",
    "warum": "Acht Jahrhunderte Finanzkrisen im Vergleich – und die Regelmäßigkeiten, die dabei sichtbar werden."
   }
  ]
 },
 {
  "id": "kommunikation",
  "titel": "Kommunikation & Wissen",
  "kurz": "Wie Wissen haltbar, kopierbar und schließlich augenblicklich wurde.",
  "einleitung": "Drei Schwellen bestimmen diese Geschichte: Wissen wird haltbar, als man es aufschreiben kann. Es wird vervielfältigbar, als man es drucken kann. Und es wird augenblicklich, als es sich von seinem Träger löst und als Signal reist. Jede dieser Schwellen hat weniger den Zugang zum Wissen verändert als die Frage, wer entscheidet, was verbreitet wird.",
  "stationen": [
   {
    "jahr": -3200,
    "titel": "Die Keilschrift",
    "text": "Die ersten Texte sind Lieferscheine und Ratiolisten, keine Dichtung. Schrift entsteht aus Verwaltung – Literatur kommt Jahrhunderte später dazu."
   },
   {
    "jahr": -2600,
    "titel": "Hieroglyphen und die Macht der Schreiber",
    "text": "Wer schreiben konnte, gehörte zu einer winzigen Elite. In Ägypten war die Schreiberlaufbahn der sicherste Weg nach oben – ein Lehrtext preist sie ausdrücklich damit an, dass Schreiber keine körperliche Arbeit leisten müssen."
   },
   {
    "jahr": -1400,
    "titel": "Das Alphabet",
    "text": "Etwa dreißig Zeichen statt hunderter Symbole. Schreiben hört auf, das Handwerk einer Spezialistenkaste zu sein – die folgenreichste Vereinfachung der Kulturgeschichte."
   },
   {
    "jahr": -500,
    "titel": "Der persische Botenkurs",
    "text": "Stationen entlang der Königsstraße erlaubten den Nachrichtenwechsel von Sardes nach Susa in etwa einer Woche statt in drei Monaten. Herodots Beschreibung dieser Boten steht heute über dem Eingang des New Yorker Hauptpostamts."
   },
   {
    "jahr": -280,
    "titel": "Die Bibliothek von Alexandria",
    "text": "Ein Versuch, alles Wissen an einem Ort zu sammeln. Sie ging nicht in einem Brand unter, sondern über Jahrhunderte an Kriegen, Sparzwang und Bedeutungsverlust zugrunde – der unspektakuläre Normalfall des Vergessens."
   },
   {
    "jahr": -200,
    "titel": "Pergament",
    "text": "In Pergamon entsteht die Alternative zum Papyrus, weil Ägypten die Ausfuhr beschränkte. Pergament lässt sich beidseitig beschreiben und binden – die Voraussetzung für den Codex, das Buch in Blattform, das die Schriftrolle ablöste."
   },
   {
    "jahr": 105,
    "titel": "Papier in China",
    "text": "Cai Lun wird die Erfindung zugeschrieben, ältere Funde sind bekannt. Papier ist billiger als Papyrus und Pergament – die Voraussetzung dafür, dass Schrift Massenware werden kann.",
    "vertiefung": "china-erfindungen"
   },
   {
    "jahr": 868,
    "titel": "Das Diamant-Sutra",
    "text": "Das älteste erhaltene gedruckte Buch mit Datum, aus China, im Blockdruck. Der Schlusssatz nennt es zur freien Verteilung bestimmt – eine frühe Idee von Wissensfreiheit."
   },
   {
    "jahr": 1041,
    "titel": "Bewegliche Lettern aus Ton",
    "text": "Bi Sheng entwickelt in China bewegliche Lettern, vierhundert Jahre vor Gutenberg. Sie setzten sich nicht durch: Bei zehntausenden Schriftzeichen war der Holztafeldruck praktischer. Die Technik allein entscheidet nichts – es kommt darauf an, worauf sie trifft."
   },
   {
    "jahr": 1234,
    "titel": "Metalllettern in Korea",
    "text": "Bewegliche Metalltypen kommen zwei Jahrhunderte vor Gutenberg zum Einsatz. Sie setzen sich nicht durch – ein Schriftsystem mit tausenden Zeichen macht den Vorteil zunichte."
   },
   {
    "jahr": 1450,
    "titel": "Gutenbergs Druckpresse",
    "text": "Nicht die beweglichen Lettern allein, sondern ihr Zusammenspiel mit Presse, Legierung und Ölfarbe macht den Unterschied. Innerhalb von fünfzig Jahren entstehen Millionen Bücher – und die Reformation wird organisierbar.",
    "vertiefung": "buchdruck"
   },
   {
    "jahr": 1517,
    "titel": "Flugschriften und die Reformation",
    "text": "Luthers Schriften erreichen binnen Wochen den gesamten deutschen Sprachraum. Zwischen 1518 und 1525 erscheinen schätzungsweise sechs Millionen Exemplare reformatorischer Flugschriften – die erste Medienkampagne der Geschichte.",
    "vertiefung": "reformation"
   },
   {
    "jahr": 1605,
    "titel": "Die erste Zeitung",
    "text": "In Straßburg erscheint die Relation als regelmäßig gedrucktes Nachrichtenblatt. Neuigkeit wird zur Ware mit Erscheinungstermin."
   },
   {
    "jahr": 1665,
    "titel": "Die erste wissenschaftliche Zeitschrift",
    "text": "Die Philosophical Transactions führen ein, dass Erkenntnis veröffentlicht, datiert und von anderen geprüft wird. Wissenschaft wird ein Verfahren, nicht nur eine Tätigkeit."
   },
   {
    "jahr": 1690,
    "titel": "Zensur und Buchmarkt",
    "text": "Wo gedruckt wurde, wurde kontrolliert: Der Index der verbotenen Bücher bestand von 1559 bis 1966. Amsterdam und Genf lebten davon, zu drucken, was anderswo verboten war – Freiheit entstand aus Konkurrenz zwischen Obrigkeiten, nicht aus Einsicht."
   },
   {
    "jahr": 1793,
    "titel": "Der optische Telegraf",
    "text": "Claude Chappes Signalmasten übertragen Nachrichten quer durch Frankreich in Stunden statt Tagen. Das Netz umfasste bald über 500 Stationen – und diente ausschließlich dem Staat."
   },
   {
    "jahr": 1844,
    "titel": "Der elektrische Telegraf",
    "text": "Erstmals ist Nachricht schneller als Bote. Information löst sich vom Transport – und Zeitzonen werden nötig, weil lokale Uhrzeiten nicht mehr funktionieren."
   },
   {
    "jahr": 1851,
    "titel": "Nachrichtenagenturen",
    "text": "Reuter beginnt mit Brieftauben zwischen Aachen und Brüssel, wo das Telegrafennetz eine Lücke hatte. Aus solchen Lückenfüllern entstanden Agenturen, die bis heute bestimmen, welche Nachrichten die Welt erreichen."
   },
   {
    "jahr": 1866,
    "titel": "Das Transatlantikkabel",
    "text": "Nach mehreren gescheiterten Versuchen hält die Verbindung. Was zuvor zehn Tage brauchte, dauert nun Minuten; Börsen und Diplomatie ändern ihre Arbeitsweise grundlegend."
   },
   {
    "jahr": 1876,
    "titel": "Das Telefon",
    "text": "Erstmals wird die Stimme selbst übertragen, nicht ein Code. Die frühe Vermarktung zielte auf Geschäftsleute – dass es ein Medium privater Nähe würde, sah kaum jemand voraus."
   },
   {
    "jahr": 1895,
    "titel": "Drahtlose Übertragung",
    "text": "Marconi macht Funk praktisch nutzbar. Aus der Punkt-zu-Punkt-Verbindung wird ab den 1920er Jahren der Rundfunk – ein Sender, unbegrenzt viele Empfänger, und damit ein Instrument, das Diktaturen sofort erkannten."
   },
   {
    "jahr": 1920,
    "titel": "Der Rundfunk",
    "text": "Erste regelmäßige Sendungen erreichen Menschen gleichzeitig und ohne Umweg über Schrift. Politisch war das neu: Eine Stimme konnte Millionen unmittelbar ansprechen – genutzt für Aufklärung ebenso wie für Propaganda."
   },
   {
    "jahr": 1936,
    "titel": "Fernsehen",
    "text": "Die Olympischen Spiele in Berlin werden erstmals live übertragen, wenn auch nur in wenige Fernsehstuben. Nach dem Krieg wurde das Fernsehen binnen zwanzig Jahren zum Leitmedium und blieb es bis ins 21. Jahrhundert."
   },
   {
    "jahr": 1948,
    "titel": "Informationstheorie",
    "text": "Claude Shannon zeigt, dass sich jede Nachricht in Bits messen lässt, unabhängig von ihrem Inhalt. Ohne diese Arbeit gäbe es weder Datenkompression noch Fehlerkorrektur – und damit weder Mobilfunk noch Internet."
   },
   {
    "jahr": 1963,
    "titel": "Der Satellit",
    "text": "Telstar überträgt erstmals Fernsehbilder über den Atlantik. Live-Bilder vom anderen Ende der Welt verändern, was als Gegenwart erlebt wird – die Mondlandung sahen 1969 schätzungsweise 600 Millionen Menschen gleichzeitig."
   },
   {
    "jahr": 1969,
    "titel": "Das ARPANET",
    "text": "Vier Rechner werden verbunden. Entscheidend ist nicht die Zahl, sondern das Prinzip: ein Netz ohne Zentrum, in dem Daten sich ihren Weg suchen.",
    "vertiefung": "internet"
   },
   {
    "jahr": 1991,
    "titel": "Das World Wide Web",
    "text": "Tim Berners-Lee gibt die Technik ohne Patent frei. Diese Entscheidung – nicht die Erfindung selbst – ist der Grund, warum das Web allen offensteht.",
    "vertiefung": "internet"
   },
   {
    "jahr": 2004,
    "titel": "Soziale Netzwerke",
    "text": "Die Veröffentlichung wird von Verlagen und Sendern gelöst: Jeder kann senden. Die Folgen – Reichweite ohne Redaktion, Empfehlungsalgorithmen, das Geschäftsmodell Aufmerksamkeit – werden bis heute erst nach und nach verstanden."
   },
   {
    "jahr": 2007,
    "titel": "Das Smartphone",
    "text": "Das Netz löst sich vom Schreibtisch. In vielen Weltregionen ist es der erste und einzige Internetzugang – ganze Länder überspringen die Verkabelung."
   },
   {
    "jahr": 2022,
    "titel": "Sprachmodelle in der Breite",
    "text": "Erstmals erzeugen Maschinen flüssigen Text in großem Umfang. Ob das den Zugang zu Wissen erweitert oder die Unterscheidung von Wissen und Behauptung erschwert, ist offen – und wird gerade entschieden."
   }
  ],
  "strittig": "Wie stark der Buchdruck die Reformation verursachte oder nur beschleunigte, wird unterschiedlich beurteilt; die These vom Druck als Auslöser gilt vielen als zu technikzentriert. Zur Bibliothek von Alexandria kursieren mehrere Zerstörungsgeschichten – Caesar, christliche Menge, arabische Eroberung –, von denen keine den Befund allein trägt. Und ob die Digitalisierung die öffentliche Debatte informierter oder brüchiger gemacht hat, lässt sich derzeit nicht abschließend beantworten; wer es behauptet, argumentiert politisch, nicht empirisch.",
  "quellen": [
   "Elizabeth Eisenstein: The Printing Press as an Agent of Change (mit der bis heute diskutierten Wirkungsthese)",
   "Encyclopaedia Britannica: History of publishing; Telegraph; Library of Alexandria",
   "British Library: Diamond Sutra, Beschreibung des Exemplars von 868",
   "CERN: The birth of the web, Freigabe der Web-Technologie 1993"
  ],
  "literatur": [
   {
    "titel": "Die Informationsgeschichte",
    "autor": "James Gleick",
    "jahr": "2011",
    "warum": "Von der Trommelsprache bis Shannon: wie aus Nachricht Information wurde. Das anregendste Buch zum Thema."
   },
   {
    "titel": "Die Druckerpresse",
    "autor": "Elizabeth L. Eisenstein",
    "jahr": "1997",
    "warum": "Der Klassiker über die Folgen des Buchdrucks für das Denken."
   },
   {
    "titel": "Die Erfindung der Nachricht",
    "autor": "Andrew Pettegree",
    "jahr": "2016",
    "warum": "Wie Nachrichten vor der Zeitung zirkulierten – und wie oft sie falsch waren."
   }
  ]
 },
 {
  "id": "migration",
  "titel": "Migration & Flucht",
  "kurz": "Der Normalfall der Menschheitsgeschichte — und wie er zum Ausnahmezustand erklärt wurde.",
  "einleitung": "Sesshaftigkeit ist die Ausnahme, nicht die Regel: Über den größten Teil ihrer Geschichte waren Menschen in Bewegung. Erst der moderne Staat mit Grenzen, Pässen und Statistik hat Wanderung zu einem Vorgang gemacht, der genehmigt werden muss. Fast jede Kultur, die sich für alteingesessen hält, ist das Ergebnis früherer Zuwanderung.",
  "stationen": [
   {
    "jahr": -70000,
    "titel": "Auszug aus Afrika",
    "text": "Der moderne Mensch breitet sich über Eurasien aus und trifft dabei auf Neandertaler und Denisovaner. Nichtafrikanische Genome tragen bis heute Anteile dieser Begegnungen."
   },
   {
    "jahr": -3000,
    "titel": "Die indoeuropäische Ausbreitung",
    "text": "Aus der pontisch-kaspischen Steppe verbreiten sich Sprachen, die heute von Irland bis Indien gesprochen werden. Genomstudien belegen dazu erhebliche Bevölkerungsbewegungen."
   },
   {
    "jahr": -1200,
    "titel": "Die Seevölker",
    "text": "Ein Verband wandernder Gruppen erschüttert den östlichen Mittelmeerraum. Ob es sich um Eroberer, Flüchtlinge oder beides handelte, ist ungeklärt – die Bewegung fällt mit dem Zusammenbruch mehrerer Hochkulturen zusammen."
   },
   {
    "jahr": -600,
    "titel": "Griechische Koloniegründungen",
    "text": "Von Spanien bis zum Schwarzen Meer entstehen hunderte Tochterstädte, meist wegen Landmangel. Marseille, Neapel und Istanbul gehen darauf zurück. Griechisch wurde dadurch zur Verkehrssprache des Mittelmeers."
   },
   {
    "jahr": 100,
    "titel": "Die Diaspora",
    "text": "Jüdische Gemeinden bestehen lange vor 70 n. Chr. in Babylonien, Ägypten und Kleinasien. Die Vorstellung, die Zerstreuung habe erst mit der Tempelzerstörung begonnen, ist eine Vereinfachung."
   },
   {
    "jahr": 375,
    "titel": "Die Völkerwanderung",
    "text": "Der Begriff täuscht Geschlossenheit vor. Tatsächlich handelte es sich um wandernde Verbände wechselnder Zusammensetzung, die sich oft erst unterwegs als Volk formierten."
   },
   {
    "jahr": 622,
    "titel": "Die Hidschra",
    "text": "Die Auswanderung Mohammeds und seiner Anhänger von Mekka nach Medina wird zum Ausgangspunkt des islamischen Kalenders – eine Zeitrechnung, die nicht mit einer Geburt oder einem Sieg beginnt, sondern mit einer Flucht. Aus der Gemeinde von Auswanderern und Ortsansässigen entsteht die erste islamische Gemeinschaft. Der Begriff bezeichnet später allgemein den Fortzug aus einem Gebiet, in dem man den Glauben nicht leben kann."
   },
   {
    "jahr": 750,
    "titel": "Die Bantu-Ausbreitung",
    "text": "Über etwa zweitausend Jahre breiten sich Bantu-sprechende Gruppen von Westafrika über den halben Kontinent aus, mit Ackerbau und Eisenverarbeitung. Es ist eine der größten Sprachausbreitungen der Weltgeschichte – und sie ist überwiegend nur sprachlich und archäologisch fassbar."
   },
   {
    "jahr": 1085,
    "titel": "Umsiedlung nach der Reconquista",
    "text": "Mit jeder Eroberung folgten Bevölkerungsverschiebungen: Christen zogen nach Süden, Muslime und Juden nach Granada oder Nordafrika. Herrschaftswechsel bedeutete in Iberien fast immer auch Wanderung."
   },
   {
    "jahr": 1492,
    "titel": "Vertreibung aus Spanien",
    "text": "Nach der Eroberung Granadas werden Juden und später Muslime zur Konversion oder zum Verlassen des Landes gezwungen – der Beginn europäischer Vertreibungspolitik im großen Maßstab.",
    "vertiefung": "1492"
   },
   {
    "jahr": 1620,
    "titel": "Auswanderung aus Glaubensgründen",
    "text": "Verfolgte Gruppen verlassen Europa Richtung Amerika. Religiöse Freiheit wurde dort für die eigene Gruppe beansprucht, nicht immer für die anderen."
   },
   {
    "jahr": 1685,
    "titel": "Die Hugenotten",
    "text": "Nach dem Widerruf des Edikts von Nantes verlassen Hunderttausende Frankreich. Brandenburg-Preußen warb sie gezielt an; in Berlin stellten sie zeitweise ein Fünftel der Bevölkerung. Ein früher Fall von Zuwanderung als Wirtschaftspolitik."
   },
   {
    "jahr": 1755,
    "titel": "Die Vertreibung der Akadier",
    "text": "Britische Truppen deportieren die französischsprachige Bevölkerung Neuschottlands, rund zehntausend Menschen, auf Schiffe und verteilen sie über die Kolonien, Frankreich und England; ein großer Teil stirbt unterwegs. Ein Teil der Überlebenden gelangt nach Louisiana, wo aus Acadiens die Cajuns werden. Es ist eine der ersten von einer Regierung geplanten Massendeportationen einer ganzen Bevölkerungsgruppe in der Neuzeit."
   },
   {
    "jahr": 1788,
    "titel": "Verschickung nach Australien",
    "text": "Großbritannien deportiert über achtzig Jahre rund 160.000 Sträflinge nach Australien – oft für kleine Eigentumsdelikte. Zwangswanderung war ein reguläres Mittel europäischer Staaten, nicht die Ausnahme."
   },
   {
    "jahr": 1830,
    "titel": "Der Pfad der Tränen",
    "text": "Der Indian Removal Act ermöglicht die Zwangsumsiedlung ganzer Nationen westlich des Mississippi. Vertreibung im Inneren eines Staates, gestützt auf ein Gesetz und gegen ein Urteil des Obersten Gerichtshofs.",
    "vertiefung": "trail-of-tears"
   },
   {
    "jahr": 1845,
    "titel": "Die irische Auswanderung",
    "text": "Die Hungersnot treibt über eine Million Menschen außer Landes. Irland hat bis heute weniger Einwohner als vor 1845 – ein in Europa einmaliger Fall.",
    "vertiefung": "irische-hungersnot"
   },
   {
    "jahr": 1860,
    "titel": "Kulis und Kontraktarbeit",
    "text": "Nach dem Ende der Sklaverei ersetzen Millionen Vertragsarbeiter aus Indien und China die Zwangsarbeit auf Plantagen – von Trinidad über Mauritius bis Fidschi. Formal freiwillig, praktisch oft kaum unterscheidbar. Die Bevölkerungszusammensetzung ganzer Länder geht darauf zurück."
   },
   {
    "jahr": 1880,
    "titel": "Die große Transatlantik-Wanderung",
    "text": "Zwischen 1880 und 1914 verlassen über 20 Millionen Menschen Europa. Für viele Regionen war Auswanderung damals das, was heute als Zuwanderung debattiert wird."
   },
   {
    "jahr": 1915,
    "titel": "Flucht und Vertreibung im Ersten Weltkrieg",
    "text": "Mit dem Krieg entstehen Massenflucht, Internierungslager und der moderne Pass. Reisefreiheit endet als Selbstverständlichkeit."
   },
   {
    "jahr": 1923,
    "titel": "Bevölkerungsaustausch",
    "text": "Griechenland und die Türkei tauschen über 1,5 Millionen Menschen nach Religionszugehörigkeit aus – vertraglich vereinbart und vom Völkerbund begleitet. Es war die erste zwischenstaatlich organisierte Zwangsumsiedlung und wurde später mehrfach als Vorbild genannt."
   },
   {
    "jahr": 1933,
    "titel": "Flucht vor dem Nationalsozialismus",
    "text": "Rund 500.000 Menschen verlassen Deutschland und Österreich. Die Konferenz von Évian 1938 zeigte, dass fast kein Land bereit war, sie in größerer Zahl aufzunehmen – ein Befund, der die Entstehung des Flüchtlingsrechts nach 1945 prägte."
   },
   {
    "jahr": 1947,
    "titel": "Die größte Fluchtbewegung der Geschichte",
    "text": "Die Teilung Indiens setzt rund 15 Millionen Menschen in Bewegung – mehr als jede andere Migration in so kurzer Zeit.",
    "vertiefung": "teilung-indiens"
   },
   {
    "jahr": 1948,
    "titel": "Nach dem Zweiten Weltkrieg",
    "text": "In Europa sind Millionen auf der Flucht; zugleich entstehen mit der Genfer Flüchtlingskonvention von 1951 erstmals völkerrechtliche Schutzrechte."
   },
   {
    "jahr": 1951,
    "titel": "Die Genfer Flüchtlingskonvention",
    "text": "Aus der Erfahrung der abgewiesenen Flüchtlinge entsteht ein völkerrechtlicher Schutz mit dem Kern des Nichtzurückweisungsgebots. Ursprünglich galt sie nur für Europa und nur für Ereignisse vor 1951; erst das Protokoll von 1967 machte sie allgemein."
   },
   {
    "jahr": 1955,
    "titel": "Arbeitsmigration nach Europa",
    "text": "Anwerbeabkommen holen Arbeitskräfte nach Westeuropa. Gedacht war an Rotation, geblieben sind Menschen – der Satz, man habe Arbeitskräfte gerufen und es kamen Menschen, beschreibt genau diese Fehlannahme."
   },
   {
    "jahr": 1961,
    "titel": "Anwerbeabkommen und ihre Folgen",
    "text": "Deutschland schließt Abkommen mit der Türkei, später mit weiteren Staaten. Erwartet wurde eine befristete Rotation, tatsächlich entstand Einwanderung. Der Satz, man habe Arbeitskräfte gerufen und es kamen Menschen, stammt von Max Frisch."
   },
   {
    "jahr": 1972,
    "titel": "Ausweisung aus Uganda",
    "text": "Idi Amin setzt der südasiatischen Minderheit Ugandas eine Frist von neunzig Tagen zur Ausreise; rund fünfzigtausend Menschen verlieren Geschäfte, Häuser und Staatsangehörigkeit. Die meisten waren in Uganda geboren. Großbritannien nahm einen großen Teil auf, nach politischem Streit; die ugandische Wirtschaft brach in den folgenden Jahren ein."
   },
   {
    "jahr": 1975,
    "titel": "Flucht über das Südchinesische Meer",
    "text": "Nach dem Ende des Vietnamkriegs verlassen über eine Million Menschen das Land, viele auf überladenen Booten; die Schätzungen der Todesopfer auf See reichen von zweihunderttausend bis vierhunderttausend. Ein internationales Umsiedlungsprogramm verteilte die Geflüchteten auf Dutzende Länder. Der Begriff boat people stammt aus dieser Zeit und ist seither auf jede Fluchtbewegung über Wasser übertragen worden."
   },
   {
    "jahr": 1989,
    "titel": "Nach dem Kalten Krieg",
    "text": "Der Fall der Blöcke setzt Bewegungen frei, die vier Jahrzehnte unterdrückt waren – und lässt zugleich neue Grenzregime entstehen.",
    "vertiefung": "ende-kalter-krieg"
   },
   {
    "jahr": 2000,
    "titel": "Klima als Wanderungsgrund",
    "text": "Dürren, Meeresspiegelanstieg und Extremwetter treiben Menschen aus ihren Regionen. Rechtlich sind sie keine Flüchtlinge – die Konvention kennt Verfolgung als Grund, nicht Umweltveränderung. Diese Lücke ist eine der großen offenen Fragen des Völkerrechts."
   },
   {
    "jahr": 2015,
    "titel": "Fluchtbewegungen der Gegenwart",
    "text": "Kriege in Syrien, Afghanistan und anderswo führen zu den höchsten weltweiten Vertreibungszahlen seit 1945. Der weit überwiegende Teil der Geflüchteten bleibt dabei in Nachbarländern des Herkunftsstaats."
   }
  ],
  "strittig": "Wie stark Wanderungsbewegungen der Vor- und Frühgeschichte tatsächliche Bevölkerungsverschiebungen waren und wie stark bloße Übernahme von Kultur und Sprache, war lange umstritten; Genomdaten haben die Debatte seit etwa 2015 stark verschoben, ohne sie zu beenden. Umstritten sind auch die wirtschaftlichen Effekte heutiger Migration: Studien kommen je nach Zeitraum, Land und untersuchter Gruppe zu unterschiedlichen Ergebnissen, weshalb sich beide Seiten der politischen Debatte auf Zahlen berufen können.",
  "quellen": [
   "Encyclopaedia Britannica: Human migration; Migration Period",
   "David Reich: Who We Are and How We Got Here",
   "UNHCR: Global Trends, jährliche Berichte zu Flucht und Vertreibung",
   "Klaus J. Bade: Europa in Bewegung. Migration vom späten 18. Jahrhundert bis zur Gegenwart"
  ],
  "literatur": [
   {
    "titel": "Die Geschichte der Migration",
    "autor": "Klaus J. Bade",
    "jahr": "2002",
    "warum": "Europa als Wanderungsraum, von der Frühen Neuzeit bis heute. Der deutsche Standardüberblick."
   },
   {
    "titel": "Die Ausgewanderten",
    "autor": "Isabel Wilkerson",
    "jahr": "2010",
    "warum": "Die Große Migration der Schwarzen aus dem amerikanischen Süden, erzählt über drei Lebensläufe. Preisgekrönt und eindringlich."
   },
   {
    "titel": "Exodus",
    "autor": "Paul Collier",
    "jahr": "2013",
    "warum": "Migration wirtschaftswissenschaftlich betrachtet, mit Schlussfolgerungen, die in beide politische Richtungen unbequem sind."
   }
  ]
 },
 {
  "id": "stadt",
  "titel": "Stadt & Zusammenleben",
  "kurz": "Wie Menschen lernten, mit Fremden auf engem Raum auszukommen.",
  "einleitung": "Eine Stadt ist der Ort, an dem man täglich mit Menschen zu tun hat, die man nicht kennt. Das verlangt Regeln, Verwaltung, Wasser, Müllabfuhr – und erzeugt zugleich das, was Städte attraktiv macht: Arbeitsteilung, Anonymität und Ideenaustausch. Bis ins 20. Jahrhundert waren Städte dabei tödlich: Sie wuchsen nur durch Zuzug, weil mehr Menschen starben als geboren wurden.",
  "stationen": [
   {
    "jahr": -9000,
    "titel": "Jericho und Çatalhöyük",
    "text": "Die frühesten dauerhaften Siedlungen entstehen vor jeder Schrift und jedem Staat. Çatalhöyük hatte keine Straßen – man ging über die Dächer."
   },
   {
    "jahr": -3000,
    "titel": "Uruk",
    "text": "Mit vielleicht 40.000 Einwohnern die größte Stadt ihrer Zeit. Verwaltung, Schrift und Tempelwirtschaft entstehen hier gemeinsam, nicht nacheinander.",
    "vertiefung": "uruk"
   },
   {
    "jahr": -2600,
    "titel": "Mohenjo-Daro",
    "text": "Die Städte der Indus-Kultur haben rechtwinklige Straßenraster, genormte Ziegel und Abwasserkanäle in fast jedem Haus – Standards, die Europa erst im 19. Jahrhundert wieder erreichte. Paläste oder Tempel fehlen; wer dort herrschte, ist unbekannt."
   },
   {
    "jahr": -450,
    "titel": "Hippodamos erfindet den Stadtplan",
    "text": "Der Grieche aus Milet entwirft Städte als Raster mit getrennten Bereichen für Wohnen, Handel und Kult. Erstmals wird eine Stadt geplant, statt zu wachsen."
   },
   {
    "jahr": -300,
    "titel": "Alexandria",
    "text": "Eine Gründung auf dem Reißbrett wird zur größten Stadt der Mittelmeerwelt: Leuchtturm, Bibliothek, Museion. Sie zeigte, dass eine Stadt durch bewusste Ansiedlung von Gelehrten zum Wissenszentrum werden kann."
   },
   {
    "jahr": -100,
    "titel": "Rom als Millionenstadt",
    "text": "Rom erreicht als erste Stadt der Welt vermutlich eine Million Einwohner – ermöglicht durch Getreideflotten aus Ägypten und Aquädukte. Nach dem Reichsende schrumpft es auf ein Zwanzigstel."
   },
   {
    "jahr": 600,
    "titel": "Teotihuacán und die Städte Amerikas",
    "text": "Mit vielleicht 125.000 Einwohnern war Teotihuacán größer als jede europäische Stadt seiner Zeit, mit Wohnkomplexen für ganze Verbände. Wer es erbaute und warum es aufgegeben wurde, ist bis heute offen."
   },
   {
    "jahr": 800,
    "titel": "Chang'an und Bagdad",
    "text": "Beide Städte übertreffen alles Europäische ihrer Zeit an Größe und Ordnung. Chang'an war rechtwinklig geplant, Bagdad kreisrund angelegt.",
    "vertiefung": "haus-der-weisheit"
   },
   {
    "jahr": 1000,
    "titel": "Córdoba und Kaifeng",
    "text": "Die größten Städte der Welt um 1000 lagen in Andalusien und China – mit Straßenbeleuchtung, Wasserleitungen, Bibliotheken und Nachtmärkten. Europa nördlich der Alpen hatte zu dieser Zeit kaum Städte über 20.000 Einwohner."
   },
   {
    "jahr": 1200,
    "titel": "Die europäische Stadtwerdung",
    "text": "Stadtluft macht frei: Wer ein Jahr und einen Tag in der Stadt lebte, entkam der Leibeigenschaft. Städte werden zu Rechtsräumen eigener Art."
   },
   {
    "jahr": 1348,
    "titel": "Die Pest trifft die Städte am härtesten",
    "text": "Enge und Handel machten Städte zu Brutstätten. Danach entstanden die ersten Gesundheitsbehörden, Quarantänevorschriften und Bauordnungen – Seuchenschutz wurde zur städtischen Aufgabe."
   },
   {
    "jahr": 1500,
    "titel": "Tenochtitlán",
    "text": "Die Hauptstadt der Azteken liegt auf einer Insel im Texcoco-See, verbunden durch Dämme, versorgt durch eine doppelte Trinkwasserleitung und ernährt von schwimmenden Feldern; die Schätzungen der Einwohnerzahl reichen von hundertfünfzigtausend bis über zweihunderttausend. Die spanischen Berichte beschreiben eine Stadt, die größer und sauberer war als jede, die die Verfasser kannten. Zwei Jahre nach der Belagerung von 1521 wurde sie überbaut – Mexiko-Stadt steht auf ihren Fundamenten und sinkt seither in den trockengelegten Seeboden."
   },
   {
    "jahr": 1600,
    "titel": "Edo",
    "text": "Die japanische Hauptstadt wird zur vermutlich größten Stadt der Welt – mit einem Recyclingsystem für Abfälle und Fäkalien, das sie erstaunlich sauber hielt."
   },
   {
    "jahr": 1666,
    "titel": "Der Brand von London",
    "text": "Vier Tage Feuer zerstören 13.000 Häuser. Die Neubauordnung schreibt Stein statt Holz und breitere Straßen vor; zugleich entsteht das Feuerversicherungswesen, weil die Verluste privat nicht tragbar waren."
   },
   {
    "jahr": 1811,
    "titel": "Das Raster von Manhattan",
    "text": "Eine Kommission legt für die noch unbebaute Insel ein Netz aus zwölf Avenues und 155 Straßen fest – ohne Rücksicht auf Hügel, Bäche und bestehende Wege, und fast ohne Plätze. Der Plan war ein Verkaufsinstrument: Rechteckige Parzellen lassen sich handeln, unregelmäßige nicht. Erst vierzig Jahre später wird der Central Park nachträglich hineingeschnitten, weil der Plan keinen Freiraum vorsah."
   },
   {
    "jahr": 1853,
    "titel": "Haussmann baut Paris um",
    "text": "Boulevards, einheitliche Fassaden, Kanalisation, Parks – und breite Achsen, die auch das Errichten von Barrikaden erschwerten. Rund 20.000 Häuser wurden abgerissen; hunderttausende Menschen verloren ihre Wohnung. Stadtplanung war von Anfang an auch Machtpolitik.",
    "vertiefung": "haussmann"
   },
   {
    "jahr": 1854,
    "titel": "Cholera und Kanalisation",
    "text": "John Snows Karte und der große Gestank von 1858 führen in London zum Bau der modernen Kanalisation. Städte hören auf, ihre Bewohner regelmäßig umzubringen.",
    "vertiefung": "kanalisation-london"
   },
   {
    "jahr": 1863,
    "titel": "Die erste U-Bahn",
    "text": "London eröffnet eine unterirdische Bahn – anfangs mit Dampfloks, was den Aufenthalt in den Tunneln unangenehm machte. Die Stadt konnte sich damit in die Fläche ausdehnen, ohne dass die Wege unzumutbar wurden."
   },
   {
    "jahr": 1885,
    "titel": "Das Hochhaus",
    "text": "In Chicago erlauben Stahlskelett und Aufzug erstmals Gebäude, deren Höhe nicht von der Mauerdicke begrenzt ist. Der Bodenpreis wird zum Motor der Vertikalen.",
    "vertiefung": "hochhaus"
   },
   {
    "jahr": 1889,
    "titel": "Der Stadtplaner als Beruf",
    "text": "Camillo Sitte und andere machen aus dem Städtebau eine Disziplin. Gleichzeitig entstehen Ringstraßen, Boulevards – und mit ihnen die Verdrängung armer Viertel."
   },
   {
    "jahr": 1898,
    "titel": "Die Gartenstadt",
    "text": "Ebenezer Howard entwirft Städte begrenzter Größe im Grünen, mit gemeinschaftlichem Bodeneigentum. Umgesetzt wurde meist nur die Optik, selten das Eigentumsmodell – Letchworth und Hellerau blieben Ausnahmen."
   },
   {
    "jahr": 1925,
    "titel": "Die autogerechte Stadt",
    "text": "Verkehrsplanung stellt das Auto in den Mittelpunkt. Was als Fortschritt gilt, zerschneidet über Jahrzehnte gewachsene Nachbarschaften."
   },
   {
    "jahr": 1927,
    "titel": "Wohnungsbau als soziale Frage",
    "text": "Von Wien bis Frankfurt entstehen kommunale Wohnanlagen mit Bad, Licht und Grün für Arbeiterfamilien. Der Wiener Gemeindebau ist bis heute das größte kommunale Wohnungsvermögen Europas – und hält Mieten dort spürbar niedriger."
   },
   {
    "jahr": 1950,
    "titel": "Die informelle Stadt",
    "text": "Ein wachsender Teil der Weltbevölkerung wohnt in selbstgebauten Siedlungen ohne Rechtstitel. Heute betrifft das über eine Milliarde Menschen. Entscheidend für ihre Lage ist selten die Bausubstanz, sondern die Frage, ob Wasser, Strom und Rechtssicherheit dazukommen."
   },
   {
    "jahr": 1960,
    "titel": "Brasília",
    "text": "Innerhalb von vier Jahren entsteht im Landesinneren eine Hauptstadt nach einem einzigen Entwurf, mit getrennten Zonen für Wohnen, Verwaltung und Verkehr und ohne Straßenkreuzungen im Zentrum. Die Trennung funktioniert für Autos und schlecht für alles andere; die Arbeiter, die sie bauten, durften nicht im Plangebiet wohnen und errichteten Satellitenstädte, in denen heute die Mehrheit der Bevölkerung lebt. Brasília ist das größte gebaute Beispiel dafür, was ein Plan nicht vorsehen kann."
   },
   {
    "jahr": 1961,
    "titel": "Der Widerspruch",
    "text": "Jane Jacobs zeigt, dass lebendige Viertel Dichte, Mischung und Fußgänger brauchen – und stellt sich erfolgreich gegen Abrisspläne in New York."
   },
   {
    "jahr": 1970,
    "titel": "Die Straße zurückholen",
    "text": "Europäische Städte richten Fußgängerzonen ein, zunächst als Handelsmaßnahme gegen die Einkaufszentren am Rand. In Kopenhagen wird die Strøget schrittweise erweitert und über Jahrzehnte gezählt, was daraufhin geschieht – der Aufenthalt im öffentlichen Raum nimmt zu, ohne dass der Umsatz einbricht. Damit beginnt die Umkehrung der autogerechten Stadt, jetzt mit Messwerten statt mit Leitbildern."
   },
   {
    "jahr": 1990,
    "titel": "Schrumpfende Städte",
    "text": "Nicht alle Städte wachsen: Deindustrialisierung und Abwanderung leeren Detroit, Leipzig oder Ostrava. Planung für Schrumpfung ist ein junges Fach – Rückbau ist ungleich schwerer zu gestalten als Wachstum."
   },
   {
    "jahr": 2008,
    "titel": "Mehrheitlich städtisch",
    "text": "Erstmals lebt mehr als die Hälfte der Menschheit in Städten. Der weitere Zuwachs findet fast vollständig in Asien und Afrika statt."
   },
   {
    "jahr": 2020,
    "titel": "Die Stadt in der Pandemie",
    "text": "Dichte gilt kurzzeitig als Gefahr. Die Erfahrung befeuert Debatten über Grünflächen, Homeoffice und darüber, wem die Straße gehört."
   }
  ],
  "strittig": "Ob Städte durch Handel, durch Religion oder durch Verwaltung entstanden, ist ungeklärt und variiert regional; Çatalhöyük etwa hatte weder Tempel noch erkennbare Herrschaft. Umstritten sind auch die Einwohnerzahlen der Antike: Angaben zur Millionenstadt Rom beruhen auf Hochrechnungen aus Getreidelieferungen und Wohnfläche und schwanken erheblich.",
  "quellen": [
   "Encyclopaedia Britannica: Urban planning; Uruk",
   "Jane Jacobs: Tod und Leben großer amerikanischer Städte",
   "UN-Habitat: World Cities Report",
   "Peter Clark (Hrsg.): The Oxford Handbook of Cities in World History"
  ],
  "literatur": [
   {
    "titel": "Die Stadt in der Geschichte",
    "autor": "Lewis Mumford",
    "jahr": "1961",
    "warum": "Der Klassiker: die Stadt als Form des Zusammenlebens, von Uruk bis zur Vorstadt. Mit deutlichen Urteilen, die man nicht teilen muss."
   },
   {
    "titel": "Tod und Leben großer amerikanischer Städte",
    "autor": "Jane Jacobs",
    "jahr": "1961",
    "warum": "Der Einspruch gegen die Planung von oben, geschrieben aus der Beobachtung einer Straße. Hat die Stadtplanung dauerhaft verändert."
   },
   {
    "titel": "Planet der Slums",
    "autor": "Mike Davis",
    "jahr": "2006",
    "warum": "Über die informelle Stadt, in der inzwischen über eine Milliarde Menschen lebt. Düster und faktenreich."
   }
  ]
 },
 {
  "id": "zwangsarbeit",
  "titel": "Sklaverei & Zwangsarbeit",
  "kurz": "Keine Ausnahme der Geschichte, sondern eine ihrer verbreitetsten Institutionen — und der lange Weg, sie zu ächten.",
  "einleitung": "Fast jede größere Gesellschaft der Geschichte hat Menschen unfrei gehalten. Was sich änderte, war die Begründung: mal Kriegsgefangenschaft, mal Schulden, mal Geburt, im atlantischen System schließlich Hautfarbe. Die Abschaffung ist historisch jung, kam nie allein durch Einsicht zustande – und ist bis heute nicht abgeschlossen.",
  "stationen": [
   {
    "jahr": -2000,
    "titel": "Arbeit für den Tempel",
    "text": "In Mesopotamien und Ägypten arbeiteten große Teile der Bevölkerung zeitweise für Tempel und Staat – nicht als Sklaven, sondern in Abgabe- und Dienstpflicht. Die Grenze zwischen Steuer, Frondienst und Zwang war fließend."
   },
   {
    "jahr": -1754,
    "titel": "Schuldknechtschaft im Codex Hammurabi",
    "text": "Wer Schulden nicht zahlen konnte, verlor die Freiheit – aber begrenzt auf drei Jahre. Schon früh gibt es also Regeln, die Unfreiheit einhegen, statt sie zu beseitigen."
   },
   {
    "jahr": -594,
    "titel": "Solon löst die Schuldknechte aus",
    "text": "In Athen wird Schuldknechtschaft abgeschafft. Sklaverei bleibt – sie trifft nun vor allem Nichtathener."
   },
   {
    "jahr": -450,
    "titel": "Sklaverei als Grundlage Athens",
    "text": "In der Blütezeit war vermutlich ein Viertel bis ein Drittel der Bevölkerung Attikas unfrei. In den Silberminen von Laurion arbeiteten tausende unter Bedingungen, die kaum jemand lange überlebte – finanziert wurde damit auch die Flotte von Salamis."
   },
   {
    "jahr": -200,
    "titel": "Die Sklavenwirtschaft Roms",
    "text": "Nach den Eroberungszügen strömten Kriegsgefangene in solcher Zahl nach Italien, dass ganze Wirtschaftszweige darauf umgestellt wurden. Als die Eroberungen endeten, versiegte der Nachschub – und die Lage der Unfreien veränderte sich langsam."
   },
   {
    "jahr": -73,
    "titel": "Der Aufstand des Spartacus",
    "text": "Zwei Jahre lang schlägt ein Sklavenheer römische Armeen. Rom antwortet mit 6.000 Kreuzigungen entlang der Via Appia.",
    "vertiefung": "spartacus"
   },
   {
    "jahr": 900,
    "titel": "Der Zandsch-Aufstand",
    "text": "Ostafrikanische Zwangsarbeiter in den Salzsümpfen des Irak erheben sich und halten fünfzehn Jahre lang ein eigenes Gebiet. Der Aufstand erschütterte das Abbasidenkalifat und führte dazu, dass Massenzwangsarbeit dort weitgehend aufgegeben wurde."
   },
   {
    "jahr": 1000,
    "titel": "Unfreiheit in Europa",
    "text": "Die antike Sklaverei geht in Leibeigenschaft über – rechtlich milder, faktisch für viele kaum. Der Sklavenhandel verlagert sich an die Ränder Europas."
   },
   {
    "jahr": 1444,
    "titel": "Beginn des atlantischen Systems",
    "text": "Portugal verschleppt erstmals Menschen aus Westafrika nach Europa. Aus einer alten Institution wird ein transkontinentales Wirtschaftssystem."
   },
   {
    "jahr": 1500,
    "titel": "Die Mita in den Anden",
    "text": "Spanien übernahm die inkaische Arbeitspflicht und richtete sie auf die Silberminen von Potosí aus. Ganze Dörfer mussten jährlich Männer stellen; viele kehrten nicht zurück. Regionen, die zum Einzugsgebiet gehörten, sind statistisch bis heute ärmer.",
    "vertiefung": "potosi"
   },
   {
    "jahr": 1550,
    "titel": "Die Debatte von Valladolid",
    "text": "Las Casas streitet mit Sepúlveda darüber, ob Indigene Menschen mit Rechten seien. Er gewinnt – und schlug zeitweise selbst vor, stattdessen Afrikaner zu versklaven, was er später bereute."
   },
   {
    "jahr": 1619,
    "titel": "Die ersten Verschleppten in Nordamerika",
    "text": "Ein Schiff bringt rund zwanzig Afrikaner nach Virginia. Ihr Status war zunächst unklar; erst im Lauf des Jahrhunderts entstand in den Gesetzen der Kolonien die erbliche Sklaverei nach Hautfarbe."
   },
   {
    "jahr": 1781,
    "titel": "Der Fall des Sklavenschiffs Zong",
    "text": "Die Besatzung wirft über 130 Menschen über Bord, um Versicherungsgeld zu kassieren. Der Prozess drehte sich nicht um Mord, sondern um Sachschaden. Der Fall wurde zum wirksamsten Argument der britischen Abolitionisten.",
    "vertiefung": "zong"
   },
   {
    "jahr": 1791,
    "titel": "Der Aufstand in Saint-Domingue",
    "text": "Versklavte erkämpfen sich selbst die Freiheit und gründen 1804 Haiti. Kein Argument gegen Sklaverei war so wirksam wie dieser Beweis."
   },
   {
    "jahr": 1804,
    "titel": "Haiti",
    "text": "Aus dem Aufstand von Saint-Domingue geht der erste Staat hervor, der aus einer erfolgreichen Erhebung Versklavter entstand. Frankreich erzwang 1825 eine Entschädigungszahlung für die verlorenen Sklaven, an der Haiti über hundert Jahre trug."
   },
   {
    "jahr": 1807,
    "titel": "Verbot des Sklavenhandels",
    "text": "Britannien verbietet den Handel, nicht die Sklaverei. Die Royal Navy patrouilliert danach vor Westafrika – dieselbe Macht, die zuvor am meisten verschifft hatte."
   },
   {
    "jahr": 1834,
    "titel": "Abschaffung im Britischen Reich",
    "text": "Entschädigt werden die Eigentümer, nicht die Befreiten. Die dafür aufgenommene Staatsschuld wurde in Großbritannien erst 2015 vollständig getilgt."
   },
   {
    "jahr": 1863,
    "titel": "Die Emanzipationserklärung",
    "text": "Lincolns Proklamation befreit Versklavte in den aufständischen Gebieten – dort, wo die Union gerade keine Gewalt hatte. Rechtlich wirksam wurde die Abschaffung erst mit dem 13. Zusatzartikel von 1865."
   },
   {
    "jahr": 1865,
    "titel": "Das Ende in den USA",
    "text": "Der 13. Verfassungszusatz verbietet Sklaverei – mit einer Ausnahme für Strafgefangene, die bis heute wirkt."
   },
   {
    "jahr": 1885,
    "titel": "Der Kongo-Freistaat",
    "text": "Leopold II. lässt Kautschuk mit Geiselnahme, Verstümmelung und Mord erzwingen. Schätzungen der Todesopfer gehen weit auseinander, liegen aber im Millionenbereich. Der internationale Druck führte 1908 zur Übernahme durch den belgischen Staat.",
    "vertiefung": "kongo-freistaat"
   },
   {
    "jahr": 1888,
    "titel": "Brasilien als letztes Land Amerikas",
    "text": "Ein Jahr später fällt die Monarchie, weil die Grundbesitzer ihr die Unterstützung entziehen."
   },
   {
    "jahr": 1900,
    "titel": "Schuldknechtschaft nach der Abschaffung",
    "text": "In den US-Südstaaten wird nach 1865 die Verpachtung von Strafgefangenen an Plantagen, Bergwerke und Eisenbahnen zum Geschäftsmodell; Landstreicherei und Vertragsbruch werden strafbar gemacht, damit Arbeitskräfte verfügbar bleiben. Die Sterblichkeit in einzelnen Lagern war höher als in der Sklaverei, weil der Pächter kein Eigentum verlor. Das System endete formal erst 1941, in einer Weisung des US-Justizministeriums nach Kriegseintritt."
   },
   {
    "jahr": 1926,
    "titel": "Das Sklavereiabkommen des Völkerbunds",
    "text": "Erstmals völkerrechtlich verboten. Zwangsarbeit blieb dennoch verbreitet, auch in Kolonien der Unterzeichnerstaaten."
   },
   {
    "jahr": 1930,
    "titel": "Der Gulag",
    "text": "Das sowjetische Lagersystem verband Strafe mit Wirtschaftsplanung: Kanäle, Bergwerke und Eisenbahnen wurden von Häftlingen gebaut. Millionen durchliefen die Lager; die Zahl der Toten ist bis heute Gegenstand der Archivforschung."
   },
   {
    "jahr": 1932,
    "titel": "Das Zwangsarbeitsübereinkommen",
    "text": "Die Internationale Arbeitsorganisation verbietet Zwangsarbeit – mit Ausnahmen für Strafvollzug und Kolonialverwaltung, die einige Unterzeichner noch jahrzehntelang nutzten."
   },
   {
    "jahr": 1942,
    "titel": "Zwangsarbeit im Nationalsozialismus",
    "text": "Millionen Menschen aus besetzten Gebieten werden zur Arbeit in die deutsche Kriegswirtschaft verschleppt – der größte Zwangsarbeitseinsatz der neueren Geschichte."
   },
   {
    "jahr": 1944,
    "titel": "Zwangsarbeit in der Kriegswirtschaft",
    "text": "Über 13 Millionen Menschen arbeiteten im Deutschen Reich unter Zwang, in Fabriken, Landwirtschaft und Privathaushalten – sichtbar für alle. Entschädigungszahlungen an Überlebende begannen erst im Jahr 2000, als die meisten bereits gestorben waren."
   },
   {
    "jahr": 1962,
    "titel": "Das letzte gesetzliche Ende",
    "text": "Saudi-Arabien und der Jemen schaffen die Sklaverei ab, Mauretanien folgt 1981 und stellt sie erst 2007 unter Strafe. Damit ist die Sklaverei überall auf der Welt gesetzlich verboten. Die Verbote sind der Schlusspunkt der Rechtsgeschichte und nicht der Praxis – Schätzungen zur heutigen Zahl betroffener Menschen sind laufend zu prüfen und nicht als feste Zahl haltbar."
   },
   {
    "jahr": 2000,
    "titel": "Sklaverei heute",
    "text": "Schätzungen internationaler Organisationen gehen von zweistelligen Millionenzahlen in Schuldknechtschaft, Zwangsarbeit und Zwangsheirat aus. Die Institution ist geächtet, aber nicht verschwunden."
   },
   {
    "jahr": 2016,
    "titel": "Zwangsarbeit in Lieferketten",
    "text": "Die ILO schätzt, dass weltweit Millionen Menschen in Zwangsarbeit stehen, überwiegend in der Privatwirtschaft. Lieferkettengesetze in mehreren Ländern versuchen seit den 2020er Jahren, Unternehmen dafür haftbar zu machen. Stand der Schätzungen: laufende ILO-Berichte."
   }
  ],
  "strittig": "Warum die Abschaffung kam, ist eine der großen Kontroversen der Wirtschaftsgeschichte: Eric Williams führte sie auf die sinkende Rentabilität des Systems zurück, andere betonen die Wirkung der Abolitionsbewegung und den Widerstand der Versklavten selbst. Die Belege sprechen heute eher für ein Zusammenwirken – wobei die Rolle der Aufstände lange systematisch unterschätzt wurde. Umstritten sind auch die heutigen Schätzzahlen, weil Definitionen und Erhebungsmethoden stark voneinander abweichen.",
  "quellen": [
   "Encyclopaedia Britannica: Slavery; Abolitionism",
   "Eric Williams: Capitalism and Slavery (mit der bis heute diskutierten Rentabilitätsthese)",
   "Trans-Atlantic Slave Trade Database, Emory University",
   "Internationale Arbeitsorganisation: Global Estimates of Modern Slavery"
  ],
  "literatur": [
   {
    "titel": "Die Geschichte der Sklaverei",
    "autor": "Michael Zeuske",
    "jahr": "2013",
    "warum": "Weltweit und über alle Epochen, nicht nur atlantisch. Der gründlichste deutsche Überblick."
   },
   {
    "titel": "Die Hälfte, die nie erzählt wurde",
    "autor": "Edward E. Baptist",
    "jahr": "2014",
    "warum": "Wie die Sklaverei die amerikanische Wirtschaft aufbaute. Umstritten in einzelnen Rechnungen, wirkungsvoll in der Gesamtaussage."
   },
   {
    "titel": "König Leopolds Geist",
    "autor": "Adam Hochschild",
    "jahr": "1998",
    "warum": "Der Kongo-Freistaat und die erste internationale Menschenrechtskampagne. Erschütternd und hervorragend erzählt."
   }
  ]
 },
 {
  "id": "kunst",
  "titel": "Kunst & Bild",
  "kurz": "Wer Bilder in Auftrag gibt, bestimmt, was zu sehen ist — und was nicht.",
  "einleitung": "Kunstgeschichte wird oft als Folge von Stilen erzählt. Aufschlussreicher ist die Frage, wer bezahlte und wozu: Tempel, Fürsten, Kirche, Bürgertum, Markt, Staat. Fast jeder Bruch in der Bildsprache folgt einem Wechsel des Auftraggebers oder einer neuen Technik. Und mehrmals in der Geschichte wurde Kunst nicht nur gemacht, sondern gezielt zerstört.",
  "stationen": [
   {
    "jahr": -40000,
    "titel": "Die ältesten Bilder",
    "text": "Höhlenmalereien in Sulawesi, Chauvet und El Castillo zeigen Tiere, Handabdrücke und Zeichen. Was sie bedeuteten, ist unbekannt; jede Deutung als Jagdzauber oder Schamanismus ist Vermutung, nicht Befund.",
    "vertiefung": "hoehlenmalerei"
   },
   {
    "jahr": -2600,
    "titel": "Der ägyptische Kanon",
    "text": "Ägyptische Kunst folgt über drei Jahrtausende festen Proportionsregeln und Ansichtsvorschriften. Nicht Unvermögen, sondern Absicht: Dargestellt wird nicht, wie etwas aussieht, sondern was es ist."
   },
   {
    "jahr": -1350,
    "titel": "Der Bruch von Amarna",
    "text": "Unter Echnaton wird der jahrtausendealte ägyptische Kanon für eine Generation aufgegeben: lange Schädel, schwere Hüften, Familienszenen, in denen der König seine Töchter küsst. Nach seinem Tod kehrt die Kunst zur alten Regel zurück und seine Bauten werden abgetragen. Der Vorgang zeigt, dass ein Stil eine politische Entscheidung sein kann – und dass er mit ihr fällt."
   },
   {
    "jahr": -480,
    "titel": "Der griechische Umbruch",
    "text": "Innerhalb weniger Jahrzehnte lösen sich starre Standfiguren in bewegte Körper auf. Der Kontrapost verlagert das Gewicht auf ein Bein – der Beginn einer Kunst, die Körper als Organismen darstellt."
   },
   {
    "jahr": -210,
    "titel": "Die Terrakotta-Armee",
    "text": "Für das Grab des ersten Kaisers von China werden mehrere Tausend lebensgroße Figuren gefertigt, aus Modulen für Beine, Rumpf, Arme und Kopf, mit individuell nachgearbeiteten Gesichtern. Es ist Serienproduktion mit dem Anspruch der Einmaligkeit – ein Verfahren, das erst wieder in der Industrie auftaucht. Ursprünglich waren die Figuren bemalt; die Farbe hielt der Luft nach der Ausgrabung nicht stand."
   },
   {
    "jahr": -30,
    "titel": "Das römische Porträt",
    "text": "Römische Bildnisse zeigen Falten, Warzen und Alter. Wo Griechen idealisierten, war in Rom das gelebte Leben ein Ausweis von Würde und Verdienst."
   },
   {
    "jahr": 100,
    "titel": "Der erste Buddha",
    "text": "In Gandhara im heutigen Pakistan entstehen die frühesten menschlichen Buddha-Darstellungen, in Faltengewändern, die griechischer Skulptur entstammen. Vorher wurde der Buddha durch Zeichen angedeutet: Fußspuren, ein leerer Thron, ein Rad. Die Bilder gehen mit dem Buddhismus nach Zentralasien, China und Japan – eine der weitreichendsten Wirkungen des Kulturkontakts nach Alexander."
   },
   {
    "jahr": 550,
    "titel": "Die Ikone",
    "text": "In der Ostkirche entsteht ein Bildtyp, der nicht abbilden, sondern vergegenwärtigen will. Bildregeln werden theologisch begründet und bleiben über Jahrhunderte gültig."
   },
   {
    "jahr": 700,
    "titel": "Die Höhlen von Dunhuang",
    "text": "An der Seidenstraße entsteht über Jahrhunderte ein Komplex von fast fünfhundert bemalten Höhlen, gestiftet von Kaufleuten, Mönchen und Familien. Die Malereien zeigen, wie indische, chinesische und zentralasiatische Formen ineinander übergehen, und sie sind datierbar, weil die Stifter genannt werden. In einer zugemauerten Kammer fand sich 1900 zudem eine Bibliothek von zehntausenden Handschriften."
   },
   {
    "jahr": 726,
    "titel": "Der Bilderstreit",
    "text": "Byzanz verbietet religiöse Bilder und zerstört sie; über hundert Jahre wird gestritten, ob das Bild Gotteslästerung oder Zeugnis der Menschwerdung ist. Der Ausgang zugunsten der Bilder prägte die europäische Kunst.",
    "vertiefung": "bilderstreit"
   },
   {
    "jahr": 1250,
    "titel": "Die Köpfe von Ife",
    "text": "In Ife im heutigen Nigeria entstehen Bronze- und Terrakottaköpfe von einer Naturtreue, die europäische Betrachter des frühen 20. Jahrhunderts für unmöglich hielten – der deutsche Ausgräber Leo Frobenius erklärte sie mit einer versunkenen Kolonie aus dem Mittelmeer. Die Zuschreibung war falsch und rassistisch motiviert; die Werke sind vollständig lokaler Herkunft, hergestellt im Wachsausschmelzverfahren. Der Fall gehört zur Geschichte der Kunst wie zur Geschichte ihrer Deutung."
   },
   {
    "jahr": 1305,
    "titel": "Giotto und der Raum",
    "text": "In Padua malt Giotto Figuren, die Gewicht haben und im Raum stehen. Die Loslösung von der Goldgrundfläche ist der Beginn dessen, was später Renaissance heißen wird."
   },
   {
    "jahr": 1425,
    "titel": "Die Perspektive wird berechenbar",
    "text": "Brunelleschi zeigt die Zentralperspektive im Experiment, Alberti beschreibt sie 1435 als Regel. Bild wird zur Konstruktion – Mathematik betritt das Atelier.",
    "vertiefung": "perspektive"
   },
   {
    "jahr": 1434,
    "titel": "Öl statt Tempera",
    "text": "Die niederländische Ölmalerei erlaubt Lasuren, Übergänge und Details, die vorher unmöglich waren. Jan van Eycks Oberflächen wirken auf Zeitgenossen wie Zauberei."
   },
   {
    "jahr": 1495,
    "titel": "Die leere Fläche",
    "text": "Der japanische Mönch Sesshū Tōyō malt Landschaften, in denen der unbemalte Grund zum Bildmittel wird: Nebel, Wasser und Ferne entstehen dort, wo keine Tusche ist. Die Technik ist aus China übernommen und in Japan radikalisiert worden. Sie ist der genaue Gegenentwurf zur gleichzeitig in Italien entstehenden Vorstellung vom Bild als Fenster, das ganz gefüllt sein muss."
   },
   {
    "jahr": 1508,
    "titel": "Die Sixtinische Decke",
    "text": "Michelangelo arbeitet vier Jahre auf einem Gerüst. Der Auftrag kommt von einem Papst, der Kunst als politisches Mittel einsetzt – Kunst und Macht sind hier nicht zu trennen."
   },
   {
    "jahr": 1566,
    "titel": "Der Bildersturm",
    "text": "In den Niederlanden zerstören Reformierte Altäre und Figuren. Die protestantischen Gebiete entwickeln daraufhin Landschaft, Stillleben und Porträt – Bildgattungen ohne Heilige."
   },
   {
    "jahr": 1590,
    "titel": "Die Werkstatt des Großmoguls",
    "text": "Akbar unterhält in Fatehpur Sikri eine Malschule mit über hundert Künstlern, in der persische Technik, indische Farbigkeit und europäische Perspektive – aus mitgebrachten Stichen – zusammenkommen. Die Bilder sind signiert, oft von zwei Händen: einer für die Komposition, einer für die Gesichter. Der Kaiser ließ sich Chroniken bebildern; Malerei war hier ein Regierungsmittel."
   },
   {
    "jahr": 1656,
    "titel": "Das Bild denkt über sich selbst nach",
    "text": "Velázquez malt in Las Meninas den Maler, das Modell und den Betrachter in ein unauflösbares Verhältnis. Das Bild wird zum Gegenstand seiner eigenen Frage."
   },
   {
    "jahr": 1765,
    "titel": "Der Farbholzschnitt in Japan",
    "text": "Mit dem Mehrplattendruck wird das farbige Bild in Edo zur Massenware: Schauspieler, Kurtisanen, Landschaften, für den Preis einer Portion Nudeln. Verleger, Zeichner, Formschneider und Drucker arbeiten getrennt – das Werk hat keinen einzelnen Urheber. Als diese Blätter im 19. Jahrhundert als Packpapier nach Europa gelangen, verändern sie die Malerei von Manet bis van Gogh."
   },
   {
    "jahr": 1785,
    "titel": "Kunst als politisches Programm",
    "text": "Der Klassizismus greift auf römische Vorbilder zurück, um bürgerliche Tugend zu predigen. Davids Bilder werden zur Bildsprache der Französischen Revolution."
   },
   {
    "jahr": 1793,
    "titel": "Der Louvre wird öffentlich",
    "text": "Die französische Republik öffnet die königlichen Sammlungen als Museum für alle. Damit wechselt der Ort der Kunst: aus Palast, Kirche und Kabinett in einen Raum, in dem Werke aus verschiedenen Jahrhunderten nebeneinander hängen und verglichen werden. Die Kunstgeschichte als Fach ist eine Folge dieser Anordnung – und die napoleonischen Raubzüge füllten sie."
   },
   {
    "jahr": 1839,
    "titel": "Die Fotografie entlastet die Malerei",
    "text": "Als eine Maschine das Abbilden übernimmt, verliert die Malerei ihre älteste Aufgabe. Was folgt – Impressionismus, Expressionismus, Abstraktion – ist auch eine Antwort darauf."
   },
   {
    "jahr": 1863,
    "titel": "Der Salon der Zurückgewiesenen",
    "text": "Nachdem die Jury des Pariser Salons über zweitausend Werke abgelehnt hat, lässt Napoleon III. sie in einer eigenen Ausstellung zeigen – zur Blamage der Künstler, wie er meinte. Das Publikum lachte über Manets Frühstück im Grünen, aber die Ausstellung machte sichtbar, dass es eine Kunst außerhalb der Institution gibt. Von hier aus organisieren sich die Impressionisten elf Jahre später selbst."
   },
   {
    "jahr": 1907,
    "titel": "Der Bruch mit der Perspektive",
    "text": "Der Kubismus zeigt Gegenstände aus mehreren Blickwinkeln zugleich und beendet die fünfhundertjährige Herrschaft des einen Standpunkts. Anregungen kamen unter anderem aus afrikanischer Plastik – lange ohne Nennung der Herkunft."
   },
   {
    "jahr": 1917,
    "titel": "Der Gegenstand als Kunstwerk",
    "text": "Duchamp reicht ein Urinal als Skulptur ein. Die Frage verschiebt sich vom Können zur Zuschreibung: Kunst ist, was als Kunst ausgestellt und anerkannt wird."
   },
   {
    "jahr": 1937,
    "titel": "Entartete Kunst",
    "text": "Die NS-Diktatur beschlagnahmt über 20.000 Werke, verkauft einen Teil ins Ausland und verfemt die Moderne. Viele Künstler emigrieren – das Zentrum der Kunstwelt verschiebt sich nach New York.",
    "vertiefung": "entartete-kunst"
   },
   {
    "jahr": 1948,
    "titel": "Der Markt zieht nach New York",
    "text": "Nach dem Krieg verlagert sich der Handel mit zeitgenössischer Kunst nach New York; Galerien, Sammler und Museen dort setzen die Preise, und das amerikanische Außenministerium fördert Ausstellungen abstrakter Malerei im Ausland. Wie viel dieser Förderung Wirkung hatte, ist umstritten – dass sie stattfand, ist belegt. Der Fall zeigt, dass Kunstgeschichte auch eine Geschichte von Budgets ist."
   },
   {
    "jahr": 1962,
    "titel": "Kunst und Massenware",
    "text": "Die Pop Art übernimmt Werbebild, Comic und Serienproduktion. Die Grenze zwischen hoher Kunst und Alltagsbild wird bewusst durchlässig gemacht."
   },
   {
    "jahr": 1989,
    "titel": "Magiciens de la terre",
    "text": "Eine Pariser Ausstellung zeigt fünfzig westliche und fünfzig nichtwestliche Künstler in gleicher Größe und gleichem Raum. Die Kritik war heftig: zu beliebig, zu exotisierend, zu wenig Kontext. Sie gilt trotzdem als Wendepunkt, weil danach keine große Ausstellung zeitgenössischer Kunst mehr allein europäisch-amerikanisch besetzt werden konnte, ohne dass es begründet werden musste."
   },
   {
    "jahr": 1998,
    "titel": "Die Rückgabefrage",
    "text": "Die Washingtoner Erklärung verpflichtet Museen zur Suche nach NS-Raubkunst. Parallel wächst der Druck, koloniale Sammlungen zurückzugeben – seit 2022 gehen die Benin-Bronzen an Nigeria."
   },
   {
    "jahr": 2018,
    "titel": "Bilder ohne Hand",
    "text": "Erstmals versteigert ein großes Auktionshaus ein maschinell erzeugtes Bild. Die alte Frage nach Urheberschaft und Werk stellt sich neu – rechtlich ist sie bis heute nicht geklärt."
   }
  ],
  "strittig": "Kunstgeschichte ist bis heute stark europäisch erzählt. Techniken und Formen aus China, Persien, Indien, Westafrika und Mesoamerika erscheinen oft nur als Einfluss auf europäische Kunst statt als eigene Entwicklungslinien. Auch die Zuschreibung einzelner Werke ist unsicherer, als Museumsschilder vermuten lassen.",
  "quellen": [
   "Encyclopaedia Britannica: art history, Einzelartikel",
   "Ernst Gombrich: Die Geschichte der Kunst",
   "Horst Bredekamp: Der Bildakt",
   "Washingtoner Erklärung 1998, Originaltext"
  ],
  "literatur": [
   {
    "titel": "Die Geschichte der Kunst",
    "autor": "Ernst H. Gombrich",
    "jahr": "1950",
    "warum": "Seit siebzig Jahren der Einstieg: klar, ohne Fachjargon, mit einem Blick fürs Wesentliche. Der europäische Zuschnitt ist die bekannte Grenze."
   },
   {
    "titel": "Sehen, Denken, Wissen",
    "autor": "Horst Bredekamp",
    "jahr": "2010",
    "warum": "Was Bilder tun, statt was sie darstellen. Der wichtigste deutschsprachige Beitrag der letzten Jahrzehnte."
   },
   {
    "titel": "Weltgeschichte der Kunst",
    "autor": "Hugh Honour und John Fleming",
    "jahr": "1982",
    "warum": "Der Gegenentwurf zu Gombrich: alle Kontinente gleichgewichtig, entsprechend umfangreich."
   }
  ]
 },
 {
  "id": "musik",
  "titel": "Musik & Klang",
  "kurz": "Von der Knochenflöte zur Streaming-Liste — jede Aufzeichnungstechnik verändert, was Musik ist.",
  "einleitung": "Musik ist die älteste Kunst, von der Werkzeuge erhalten sind, und die jüngste, die sich speichern ließ. Bis 1877 existierte Musik nur im Moment ihres Erklingens; alles davor kennen wir nur über Notenschriften, Instrumente und Beschreibungen. Jede neue Technik – Notation, Druck, Aufnahme, Rundfunk, Datei – hat verändert, wer Musik machen, verbreiten und besitzen konnte.",
  "stationen": [
   {
    "jahr": -40000,
    "titel": "Flöten aus Knochen und Elfenbein",
    "text": "Funde von der Schwäbischen Alb belegen Instrumente mit Grifflöchern – gebaut, nicht gefunden. Musik ist mindestens so alt wie die figürliche Kunst."
   },
   {
    "jahr": -2500,
    "titel": "Die Leiern von Ur",
    "text": "In den Königsgräbern von Ur finden sich Leiern mit Stierkopf, Einlegearbeit und elf Saiten, dazu die Skelette der Musikerinnen, die mit bestattet wurden. Die Instrumente belegen ein ausgebildetes Musikwesen am Hof: mehrere Saiten bedeuten mehrere Töne, und mehrere Töne bedeuten eine Ordnung. Eine der Leiern wurde 2003 im Irakmuseum zerstört und aus Fotografien rekonstruiert."
   },
   {
    "jahr": -1400,
    "titel": "Die älteste notierte Melodie",
    "text": "Auf Tontafeln aus Ugarit steht ein hurritischer Hymnus mit Angaben zu Saiten und Intervallen. Die Übertragung in heutige Töne bleibt umstritten – mehrere Rekonstruktionen klingen völlig verschieden."
   },
   {
    "jahr": -530,
    "titel": "Zahlenverhältnisse im Klang",
    "text": "Der pythagoreischen Schule wird die Entdeckung zugeschrieben, dass wohlklingende Intervalle einfachen Längenverhältnissen entsprechen. Musik gilt seither als Teil der Mathematik – im mittelalterlichen Studium steht sie neben Arithmetik und Astronomie."
   },
   {
    "jahr": -433,
    "titel": "Die Glocken des Markgrafen Yi",
    "text": "Aus einem chinesischen Fürstengrab wird ein Satz von 65 Bronzeglocken gehoben, jede mit zwei verschiedenen Tönen je nach Anschlagstelle, dazu Inschriften über Tonhöhen und Stimmungen. Der Satz umfasst fünf Oktaven und ist chromatisch spielbar. Er beweist, dass in China eine ausgearbeitete Tonlehre existierte, lange bevor die europäischen Quellen einsetzen."
   },
   {
    "jahr": 200,
    "titel": "Der Raga",
    "text": "Das indische Natyashastra beschreibt Tonarten, Rhythmen und ihre Wirkung auf die Stimmung und bindet Musik an Theater und Tanz. Aus dieser Tradition entwickelt sich der Raga: nicht ein Stück, sondern ein Tonvorrat mit Regeln, aus dem in jeder Aufführung neu gestaltet wird. Europäische Musik notiert das Werk und lässt die Aufführung offen; hier ist es umgekehrt."
   },
   {
    "jahr": 600,
    "titel": "Der gregorianische Gesang",
    "text": "Die römische Kirche vereinheitlicht die Liturgiegesänge. Die Zuschreibung an Papst Gregor I. ist Legende; die Sammlung entsteht über Jahrhunderte."
   },
   {
    "jahr": 822,
    "titel": "Ziryab in Córdoba",
    "text": "Der aus Bagdad geflohene Musiker Ziryab richtet am Hof von Córdoba eine Musikschule ein, fügt der Laute eine fünfte Saite hinzu und ordnet Stücke zu festen Folgen – dem Vorbild der andalusischen Nuba. Vieles über ihn stammt aus späteren Sammlungen und ist ausgeschmückt. Belegt ist die Wirkung: Von al-Andalus geht der Weg der Laute, der Rhythmusmodelle und der Theorie nach Europa."
   },
   {
    "jahr": 1025,
    "titel": "Guido von Arezzo erfindet die Linien",
    "text": "Töne werden auf Notenlinien festgelegt und mit Silben benannt. Erstmals kann jemand ein Stück singen, das er nie gehört hat – Musik wird übertragbar.",
    "vertiefung": "notenschrift"
   },
   {
    "jahr": 1150,
    "titel": "Hildegard von Bingen",
    "text": "Die Äbtissin hinterlässt siebenundsiebzig geistliche Gesänge samt Melodien – das größte namentlich zugeschriebene Repertoire des 12. Jahrhunderts. Ihre Melodien überschreiten den üblichen Umfang weit und folgen der Sprache mehr als dem Modell. Dass wir sie überhaupt haben, liegt daran, dass ihr Kloster sie in prächtigen Handschriften sammelte, was für Werke von Frauen die Ausnahme war."
   },
   {
    "jahr": 1320,
    "titel": "Mehrstimmigkeit wird komponierbar",
    "text": "Die Ars nova bringt genaue Rhythmusnotation. Musik ist nicht mehr nur Aufführung, sondern Komposition: ein Werk, das ein Einzelner entwirft und das andere ausführen."
   },
   {
    "jahr": 1361,
    "titel": "Die Orgel wird eine Maschine",
    "text": "Die Orgel im Dom von Halberstadt hat drei Manuale, Pedal und über tausend Pfeifen; ein Bericht von 1361 beschreibt sie mit einer Tastatur, die der heutigen entspricht. Sie ist damit das komplizierteste Gerät ihrer Zeit außerhalb der Uhrmacherei. Mit ihr entsteht ein Instrument, das mehrere Stimmen gleichzeitig unter der Kontrolle eines Einzelnen hält – Voraussetzung für alles, was später am Klavier gedacht wird."
   },
   {
    "jahr": 1501,
    "titel": "Musikdruck",
    "text": "Petrucci druckt in Venedig mehrstimmige Musik mit beweglichen Lettern. Noten werden Ware, Komponisten werden über ihre Region hinaus bekannt."
   },
   {
    "jahr": 1567,
    "titel": "Das Konzil greift in die Musik ein",
    "text": "Das Konzil von Trient verlangt, dass der Text der Messe verständlich bleibt und weltliche Melodien aus der Kirche verschwinden. Palestrina liefert mit der Missa Papae Marcelli das Muster: Mehrstimmigkeit, in der jedes Wort hörbar bleibt. Die Erzählung, er habe damit die Kirchenmusik gerettet, stammt aus dem 17. Jahrhundert – die Reform war breiter, aber sein Satzmodell wurde jahrhundertelang gelehrt."
   },
   {
    "jahr": 1607,
    "titel": "Die Oper entsteht",
    "text": "Monteverdis Orfeo verbindet Text, Musik und Bühne zu einer neuen Gattung. Aus einem Experiment florentinischer Gelehrter, die die antike Tragödie nachbilden wollten, wird die aufwendigste Kunstform Europas."
   },
   {
    "jahr": 1700,
    "titel": "Cremona",
    "text": "In den Werkstätten von Stradivari und Guarneri entstehen Geigen, die bis heute als Maßstab gelten; die Erklärungen reichen von Holzdichte nach der kleinen Eiszeit über Lackrezepte bis zu chemischer Behandlung. Blindtests mit professionellen Solisten fanden mehrfach keine verlässliche Bevorzugung alter Instrumente gegenüber neuen. Was messbar bleibt, ist nicht der Klang, sondern der Preis."
   },
   {
    "jahr": 1722,
    "titel": "Die wohltemperierte Stimmung",
    "text": "Bachs Sammlung nutzt eine Stimmung, in der alle Tonarten brauchbar klingen. Der Preis: Kein Intervall außer der Oktave ist mehr rein – ein Kompromiss, auf dem die westliche Musik bis heute beruht.",
    "vertiefung": "wohltemperiert"
   },
   {
    "jahr": 1781,
    "titel": "Das öffentliche Konzert",
    "text": "In Leipzig zieht das Gewandhausorchester in einen eigenen Saal – Musik gegen Eintritt, für ein Publikum, das nicht eingeladen, sondern zahlend erscheint. Vorher spielte man für Hof, Kirche oder Gesellschaft. Mit dem Konzertsaal entstehen Programm, Applausordnung, Kritik und schließlich das Repertoire: Stücke, die nicht für einen Anlass, sondern für die Wiederholung geschrieben sind."
   },
   {
    "jahr": 1824,
    "titel": "Musik als Bekenntnis",
    "text": "Beethovens Neunte stellt am Ende einer Sinfonie einen Chor mit einem Text über Menschenverbrüderung. Die Sinfonie wird zur weltanschaulichen Aussage – seit 1985 ist der Satz Europahymne."
   },
   {
    "jahr": 1859,
    "titel": "Wie hoch ist ein A?",
    "text": "Frankreich legt das Kammerton-A gesetzlich auf 435 Hertz fest, weil die Stimmung von Ort zu Ort um einen Halbton und mehr abwich und Sänger unter der steigenden Höhe litten. Die internationale Einigung auf 440 Hertz folgt erst 1939. Ohne diese Festlegung wäre keine Orchesterreise und keine Schallplatte möglich – Standardisierung ist eine Voraussetzung der Musikindustrie."
   },
   {
    "jahr": 1877,
    "titel": "Klang wird speicherbar",
    "text": "Edisons Phonograph zeichnet Schall auf und gibt ihn wieder. Zum ersten Mal überdauert Musik den Moment ihrer Aufführung – die gesamte spätere Musikgeschichte hängt daran.",
    "vertiefung": "tonaufnahme"
   },
   {
    "jahr": 1889,
    "titel": "Fremde Klänge in Paris",
    "text": "Auf der Weltausstellung hört Debussy javanische Gamelan-Musik. Die Begegnung verändert die europäische Harmonik – zugleich waren die Musiker Teil einer kolonialen Zurschaustellung."
   },
   {
    "jahr": 1913,
    "titel": "Der Skandal als Methode",
    "text": "Die Uraufführung von Strawinskys Sacre du printemps endet im Tumult. Rhythmus und Klangfarbe treten an die Stelle der Melodie als tragendes Element."
   },
   {
    "jahr": 1917,
    "titel": "Der Jazz auf Platte",
    "text": "Die erste Jazzaufnahme macht eine aus afroamerikanischer Tradition entstandene Musik weltweit hörbar. Die Erfinder profitierten am wenigsten – die erste Platte spielte eine weiße Band ein."
   },
   {
    "jahr": 1927,
    "titel": "Der Tonfilm",
    "text": "Mit dem Jazz Singer wird Musik Teil eines Massenmediums, das sie überall gleich klingen lässt. Für die Musiker ist es ein Bruch: Zehntausende Kinomusiker, die zum Stummfilm gespielt hatten, verlieren innerhalb weniger Jahre ihre Arbeit. Gleichzeitig entsteht der erste Beruf, der Musik für Bilder schreibt."
   },
   {
    "jahr": 1948,
    "titel": "Die Langspielplatte",
    "text": "Die LP fasst über zwanzig Minuten pro Seite. Musik wird in Alben gedacht, nicht in Einzelstücken – eine Form, die bis ins Streaming-Zeitalter nachwirkt.",
    "vertiefung": "tonaufnahme"
   },
   {
    "jahr": 1951,
    "titel": "Musik ohne Absicht",
    "text": "John Cages 4'33'' besteht aus Stille; zu hören ist, was ohnehin im Raum geschieht. Die Frage, was überhaupt Musik ist, wird zur künstlerischen Aufgabe."
   },
   {
    "jahr": 1953,
    "titel": "Das Studio in Köln",
    "text": "Im Studio für elektronische Musik des WDR wird Klang erstmals nicht aufgenommen, sondern aus Sinustönen erzeugt und auf Band montiert. Was zählt, ist nicht mehr die Spielbarkeit, sondern die Bearbeitbarkeit. Von hier führt eine gerade Linie zum Synthesizer, zur Studioproduktion als eigentlichem Werk und zu der Frage, was eine Aufführung noch sein soll."
   },
   {
    "jahr": 1963,
    "titel": "Der Synthesizer",
    "text": "Elektronisch erzeugte Klänge lösen die Bindung an schwingende Körper. Popmusik, Filmmusik und später ganze Genres beruhen auf Klängen, die kein Instrument erzeugen kann."
   },
   {
    "jahr": 1979,
    "titel": "Musik wird tragbar",
    "text": "Der Walkman macht das Hören privat und ortsunabhängig. Musik begleitet erstmals den Alltag, statt einen eigenen Anlass zu verlangen."
   },
   {
    "jahr": 1983,
    "titel": "MIDI",
    "text": "Konkurrierende Hersteller vereinbaren einen gemeinsamen Standard, mit dem Instrumente einander Tonhöhe, Anschlagstärke und Zeit übermitteln können. MIDI überträgt keinen Klang, sondern Anweisungen – deshalb ist eine Aufnahme nachträglich in Tempo, Tonart und Instrument veränderbar. Der Standard ist über vierzig Jahre nahezu unverändert in Gebrauch und der Grund, warum Musikproduktion am Computer möglich wurde."
   },
   {
    "jahr": 1999,
    "titel": "Die Datei",
    "text": "Tauschbörsen lösen Musik vom Tonträger. Die Branche bricht ein und erfindet sich mit Streaming neu – die Bezahlung der Musiker bleibt bis heute Streitpunkt."
   },
   {
    "jahr": 2020,
    "titel": "Der lange Schwanz der Vergangenheit",
    "text": "Auf Streamingdiensten entfallen mehr Abrufe auf ältere als auf neue Aufnahmen. Erstmals konkurriert neue Musik dauerhaft mit der gesamten aufgezeichneten Vergangenheit."
   }
  ],
  "strittig": "Wie Musik vor der Notation klang, ist nicht rekonstruierbar. Übertragungen antiker und mittelalterlicher Stücke beruhen auf Annahmen über Stimmung, Tempo und Verzierung, die sich nicht prüfen lassen. Auch die Ursprungsgeschichten von Blues und Jazz sind lückenhaft, weil die frühen Beteiligten kaum aufgezeichnet und selten befragt wurden.",
  "quellen": [
   "Encyclopaedia Britannica: music, history of Western music",
   "Richard Taruskin: The Oxford History of Western Music",
   "Nicholas Conard u. a., Nature 2009: Palaeolithic flutes",
   "Anne Kilmer: The Hurrian Hymn, Rekonstruktionen und Kritik"
  ],
  "literatur": [
   {
    "titel": "The Oxford History of Western Music",
    "autor": "Richard Taruskin",
    "jahr": "2005",
    "warum": "Das gründlichste Werk zur westlichen Musikgeschichte, mit einem eigenwilligen, streitbaren Blick. Fünf Bände – zum Nachschlagen."
   },
   {
    "titel": "The Rest Is Noise",
    "autor": "Alex Ross",
    "jahr": "2007",
    "warum": "Die Musik des 20. Jahrhunderts im politischen Zusammenhang, brillant geschrieben. Auch für Menschen ohne Notenkenntnis."
   },
   {
    "titel": "Musik und Gesellschaft",
    "autor": "Christian Kaden",
    "jahr": "2004",
    "warum": "Warum Musik in verschiedenen Gesellschaften Verschiedenes ist. Theoretisch, aber lohnend."
   }
  ]
 },
 {
  "id": "alltag",
  "titel": "Alltag & Wohnen",
  "kurz": "Wie Menschen schliefen, aßen, wuschen und Zeit maßen — die Geschichte, die selten aufgeschrieben wurde.",
  "einleitung": "Über Schlachten und Könige gibt es Akten, über den Alltag fast keine. Was wir wissen, stammt aus Abfallgruben, Steuerlisten, Gerichtsprotokollen und Zufallsfunden wie Pompeji. Gerade deshalb ist dieser Bereich voller überraschender Befunde: Vieles, was uns natürlich vorkommt – acht Stunden Schlaf am Stück, drei Mahlzeiten, Privatsphäre im Schlafzimmer – ist historisch jung.",
  "stationen": [
   {
    "jahr": -7000,
    "titel": "Wohnen ohne Türen",
    "text": "In Çatalhöyük betritt man die Häuser über das Dach; es gibt keine Straßen. Unter den Fußböden liegen die Toten – Wohnen und Bestatten sind nicht getrennt."
   },
   {
    "jahr": -1750,
    "titel": "Bier als Lohn",
    "text": "Mesopotamische Texte belegen Bierrationen als Teil der Bezahlung. Vergorene Getränke waren keimarm und kalorienreich – über Jahrtausende ein Grundnahrungsmittel, kein Genussmittel."
   },
   {
    "jahr": -1500,
    "titel": "Kopfstütze statt Kissen",
    "text": "Ägyptische Gräber enthalten Bettgestelle mit geflochtener Liegefläche und hölzerne Kopfstützen – Möbel, die auf Hitze und Insekten antworten, nicht auf Weichheit. Wer kein Bett hatte, schlief auf einer Matte, in Kleidern, mit der Familie im selben Raum. Das eigene Bett für die eigene Person ist eine der jüngsten Erfindungen des Wohnens."
   },
   {
    "jahr": -100,
    "titel": "Wohnen in der Mietskaserne",
    "text": "In Rom leben die meisten Menschen in mehrstöckigen Insulae ohne Küche und Wasseranschluss. Gekocht wird auswärts; Einsturz und Brand sind ständige Gefahren."
   },
   {
    "jahr": 79,
    "titel": "Alltag unter Asche",
    "text": "Pompeji bewahrt Wandkritzeleien, Wahlwerbung, Garküchen und Latrinen. Erst dieser Fund zeigt, wie römischer Alltag aussah – die Literatur der Zeit schweigt darüber weitgehend."
   },
   {
    "jahr": 100,
    "titel": "Die Latrine ohne Wände",
    "text": "Römische Städte haben öffentliche Bedürfnisanstalten mit bis zu sechzig Sitzen an einer durchlaufenden Rinne, ohne Trennwände, mit Wasserspülung. Was heute als Zumutung gilt, war ein Ort des Gesprächs. Parasitenfunde in Kloaken zeigen zugleich, dass die Kanalisation die Krankheitslast weniger senkte, als lange angenommen wurde – gespült wurde, aber nicht getrennt."
   },
   {
    "jahr": 216,
    "titel": "Die Thermen",
    "text": "Die Caracalla-Thermen in Rom können mehr als tausend Badegäste gleichzeitig aufnehmen und enthalten Bibliothek, Sportplatz und Läden; der Eintritt war billig oder frei. Baden war weniger Hygiene als Tagesablauf – man kam nach der Arbeit und blieb Stunden. Mit dem Ende der römischen Wasserleitungen verschwindet diese Form des öffentlichen Alltags in Europa für über tausend Jahre."
   },
   {
    "jahr": 600,
    "titel": "Die Stundenordnung des Klosters",
    "text": "Klösterliche Gebetszeiten gliedern den Tag in feste Abschnitte. Zeitdisziplin entsteht als religiöse Übung, lange bevor sie wirtschaftlich verlangt wird."
   },
   {
    "jahr": 1200,
    "titel": "Das Mittelalter wusch sich",
    "text": "Städtische Badestuben sind im Hochmittelalter verbreitet, mit Badeknechten, festen Öffnungstagen und Zunftordnungen; Seife wird in Marseille, Venedig und Aleppo gewerblich hergestellt. Die Vorstellung vom durchweg schmutzigen Mittelalter stammt aus dem 19. Jahrhundert. Zurückgedrängt wird das Badehaus erst in der frühen Neuzeit – wegen Holzmangels, Syphilis und Sittenstrenge."
   },
   {
    "jahr": 1300,
    "titel": "Die öffentliche Uhr",
    "text": "Räderuhren an Kirch- und Rathaustürmen geben allen dieselbe Zeit. Der Tag wird in gleich lange Stunden geteilt statt in Tageslicht, das im Winter kürzer ist.",
    "vertiefung": "uhr-arbeitstag"
   },
   {
    "jahr": 1350,
    "titel": "Nach der Pest steigen die Löhne",
    "text": "Der Arbeitskräftemangel verbessert die Lage der Überlebenden spürbar: mehr Fleisch, bessere Kleidung, mehr Freizügigkeit. Obrigkeiten reagieren mit Lohnobergrenzen und Kleiderordnungen."
   },
   {
    "jahr": 1450,
    "titel": "Der Kamin und das eigene Zimmer",
    "text": "Wandkamine mit Schornstein ersetzen die offene Feuerstelle in der Mitte. Häuser können in beheizbare Einzelräume geteilt werden – die Voraussetzung dafür, allein zu sein."
   },
   {
    "jahr": 1550,
    "titel": "Glas im Fenster",
    "text": "Fensterglas wird für bürgerliche Häuser erschwinglich; vorher waren Öffnungen mit Holzläden, Tuch oder geöltem Pergament verschlossen – Licht oder Wärme, nicht beides. Mit dem Glasfenster wird der Innenraum am Tag benutzbar, ohne offene Wand. Lesen, Nähen und Feinarbeit im Haus setzen dieses Fenster voraus."
   },
   {
    "jahr": 1560,
    "titel": "Die Gabel",
    "text": "Aus Byzanz über Venedig kommt die Tischgabel nach Italien und wird dort zuerst für Süßfrüchte, dann allgemein benutzt; in Frankreich und England gilt sie über hundert Jahre als weibisch oder lächerlich. Geistliche Kritiker hielten es für Hochmut, die Finger nicht zu benutzen, die Gott gegeben hatte. Erst im 18. Jahrhundert ist das Gedeck mit Messer, Gabel und eigenem Teller Standard."
   },
   {
    "jahr": 1600,
    "titel": "Der geteilte Schlaf",
    "text": "Quellen aus ganz Europa beschreiben zwei Schlafphasen mit einer wachen Stunde dazwischen, in der gebetet, geredet oder gearbeitet wurde. Der durchgehende Achtstundenschlaf setzt sich erst mit künstlichem Licht durch.",
    "vertiefung": "geteilter-schlaf"
   },
   {
    "jahr": 1650,
    "titel": "Das Kaffeehaus",
    "text": "Kaffee kommt über das Osmanische Reich nach Europa. Die Kaffeehäuser werden Orte für Nachrichten, Geschäfte und Politik – aus einem Londoner entsteht die Versicherungsbörse Lloyd's.",
    "vertiefung": "kaffeehaus"
   },
   {
    "jahr": 1750,
    "titel": "Die Kindheit wird entdeckt",
    "text": "Kinder werden zunehmend als eigene Lebensphase wahrgenommen, mit eigener Kleidung, Büchern und Spielzeug. Zugleich arbeiten Kinder in den frühen Fabriken unter härteren Bedingungen als je zuvor."
   },
   {
    "jahr": 1800,
    "titel": "Der Arbeitstag nach der Uhr",
    "text": "In der Fabrik ersetzt die Uhrzeit die Aufgabe als Maß der Arbeit. Wer zu spät kommt, wird bestraft – ein Zeitverständnis, das erst gelernt werden musste.",
    "vertiefung": "uhr-arbeitstag"
   },
   {
    "jahr": 1830,
    "titel": "Feuer auf Verlangen",
    "text": "Das Reibstreichholz macht Feuer in Sekunden verfügbar; vorher musste im Haus eine Glut gehütet oder beim Nachbarn geholt werden, und Feuerschlagen mit Stahl und Zunder dauerte Minuten. Die frühen Hölzer enthielten weißen Phosphor und verursachten bei den Arbeiterinnen der Fabriken Knochennekrosen im Gesicht. Der Stoff wurde erst 1906 international verboten."
   },
   {
    "jahr": 1854,
    "titel": "Sauberes Wasser",
    "text": "John Snow weist in London eine Choleraquelle im Brunnen nach. Es folgen Kanalisation und Wasserwerke – die Maßnahme, die die Lebenserwartung in Städten am stärksten erhöhte.",
    "vertiefung": "kanalisation-london"
   },
   {
    "jahr": 1860,
    "titel": "Die Nähmaschine",
    "text": "Mit der Nähmaschine sinkt die Zeit für ein Hemd von vierzehn Stunden auf etwa eine. Kleidung wird zur Ware, die man kauft statt herstellt, Konfektionsgrößen werden nötig, und die Heimarbeiterin wird zur Figur der Städte. Der Zusammenhang gilt in beide Richtungen: Dasselbe Gerät, das Hausarbeit verkürzte, machte Lohnarbeit im Wohnzimmer möglich."
   },
   {
    "jahr": 1880,
    "titel": "Licht in der Nacht",
    "text": "Gas- und dann elektrisches Licht verlängern den nutzbaren Tag. Nachtarbeit, Abendunterhaltung und späteres Zubettgehen werden möglich – und üblich."
   },
   {
    "jahr": 1885,
    "titel": "Das Fahrrad",
    "text": "Mit dem Niederrad und dem Luftreifen entsteht das erste bezahlbare persönliche Verkehrsmittel. Es erweitert den Aktionsradius eines Arbeiters von wenigen Kilometern auf zwanzig – Heiratskreise, Arbeitsplätze und Vereine verändern sich messbar. Für Frauen war es außerdem ein Kleidungsstreit: Ohne Reformkleid ließ sich nicht fahren."
   },
   {
    "jahr": 1900,
    "titel": "Das Badezimmer",
    "text": "Fließend warmes Wasser und eigene Bäder verbreiten sich in bürgerlichen Wohnungen. Was heute Mindeststandard ist, war zwei Generationen zuvor Luxus."
   },
   {
    "jahr": 1913,
    "titel": "Konserve, Kühlschrank, Vorrat",
    "text": "Industrielle Konservierung und später der Haushaltskühlschrank lösen die Ernährung von der Jahreszeit. Der Speiseplan wird gleichförmiger und sicherer zugleich."
   },
   {
    "jahr": 1920,
    "titel": "Das Radio im Wohnzimmer",
    "text": "Der Rundfunk bringt zum ersten Mal denselben Klang zur selben Zeit in Millionen Wohnungen. Der Abend bekommt ein Programm, das Möbel werden um das Gerät herum gestellt, und ein Ereignis kann national gleichzeitig erlebt werden. Damit entsteht auch das Werkzeug, mit dem die Diktaturen der folgenden zwei Jahrzehnte in die Wohnungen sprechen."
   },
   {
    "jahr": 1950,
    "titel": "Die Hausarbeit wird technisiert",
    "text": "Waschmaschine und Staubsauger verkürzen einzelne Arbeitsgänge drastisch. Die Gesamtzeit für Hausarbeit sinkt aber kaum – die Ansprüche an Sauberkeit steigen mit."
   },
   {
    "jahr": 1957,
    "titel": "Der Supermarkt",
    "text": "Selbstbedienung ersetzt den Verkäufer hinter der Theke: Der Kunde geht am Regal vorbei, greift selbst und entscheidet ohne Gespräch. Damit ändert sich die Verpackung – sie muss jetzt bewerben, nicht nur schützen –, und der Wochenkauf ersetzt den täglichen Gang. Voraussetzung sind Kühlschrank und Auto; ohne beides funktioniert der Großeinkauf nicht."
   },
   {
    "jahr": 1970,
    "titel": "Fernsehen als Taktgeber",
    "text": "Der Fernsehabend synchronisiert Millionen Haushalte. Erstmals verbringt ein Großteil einer Gesellschaft die Freizeit gleichzeitig mit demselben Inhalt."
   },
   {
    "jahr": 1980,
    "titel": "Was übrig bleibt",
    "text": "Mit Einwegverpackungen wird der Hausmüll pro Kopf innerhalb einer Generation zum Mehrfachen; Trennung, Tonnen und Sammelsysteme werden Teil des Wohnens. Der Aufwand verschiebt sich damit von der Entsorgung zum Haushalt – Sortieren ist unbezahlte Arbeit. Wie viel davon tatsächlich stofflich wiederverwertet wird, ist von Material und Land abhängig; die Quoten sind fortlaufend zu prüfen und nicht als feste Zahl haltbar."
   },
   {
    "jahr": 2007,
    "titel": "Das Gerät in der Tasche",
    "text": "Das Smartphone verbindet Uhr, Post, Karte, Kamera und Zeitung. Erreichbarkeit wird zum Normalzustand – die Trennung von Arbeit und Freizeit verliert ihren äußeren Halt."
   },
   {
    "jahr": 2020,
    "titel": "Zuhause als Arbeitsplatz",
    "text": "Die Pandemie verlagert Büroarbeit millionenfach in die Wohnung. Was als Notlösung begann, verändert Wohnungsgrundrisse, Pendelwege und Innenstädte dauerhaft."
   }
  ],
  "strittig": "Alltagsgeschichte beruht oft auf wenigen Fundorten, die stellvertretend für ganze Epochen gelesen werden. Der zweigeteilte Schlaf ist gut belegt, aber wie verbreitet er war, ist offen. Auch die Frage, ob technische Geräte den Haushalt tatsächlich entlasteten, wird in der Forschung unterschiedlich beantwortet.",
  "quellen": [
   "Encyclopaedia Britannica: daily life, Einzelartikel",
   "A. Roger Ekirch: At Day's Close – Night in Times Past",
   "Ruth Schwartz Cowan: More Work for Mother",
   "Parco Archeologico di Pompei, Grabungsberichte"
  ],
  "literatur": [
   {
    "titel": "At Day's Close – Night in Times Past",
    "autor": "A. Roger Ekirch",
    "jahr": "2005",
    "warum": "Die Nacht als eigener Lebensraum vor dem künstlichen Licht, samt dem zweigeteilten Schlaf. Ein Buch, das den Blick auf den eigenen Alltag verändert."
   },
   {
    "titel": "More Work for Mother",
    "autor": "Ruth Schwartz Cowan",
    "jahr": "1983",
    "warum": "Warum Haushaltstechnik die Arbeit nicht verringerte. Der Klassiker zur Technikgeschichte des Alltags."
   },
   {
    "titel": "Eine kurze Geschichte der Alltagsdinge",
    "autor": "Bill Bryson",
    "jahr": "2010",
    "warum": "Ein Rundgang durch ein Haus, bei dem jeder Raum in die Geschichte führt. Unterhaltsam und sorgfältiger belegt, als es wirkt."
   }
  ]
 },
 {
  "id": "vor-der-schrift",
  "titel": "Vor der Schrift",
  "kurz": "Zwei Millionen Jahre Menschheit ohne ein einziges geschriebenes Wort — was wir trotzdem wissen.",
  "einleitung": "Über 99 Prozent der menschlichen Vergangenheit liegen vor der Schrift. Alles, was wir darüber wissen, stammt aus Knochen, Steinen, Pollen, Zähnen und seit wenigen Jahrzehnten aus alter DNA. Diese Quellen schweigen über Namen, Sprachen und Gedanken – dafür reichen sie viel weiter zurück als jeder Text. Und sie werden ständig neu gelesen: Kaum ein Bereich der Geschichte hat sich in den letzten dreißig Jahren so stark verändert.",
  "stationen": [
   {
    "jahr": -3300000,
    "titel": "Die ersten Werkzeuge",
    "text": "Bearbeitete Steine aus Lomekwi in Kenia sind älter als die Gattung Homo. Werkzeuggebrauch ist damit keine Erfindung des Menschen, sondern älter als er."
   },
   {
    "jahr": -2000000,
    "titel": "Fleisch und Mark",
    "text": "Aufgeschlagene Knochen mit Schnittspuren zeigen, dass frühe Menschen Kadaver zerlegten und an das Knochenmark kamen – eine sehr energiereiche Nahrung, an die kein anderes Tier ohne Werkzeug gelangt. Der Zugang zu dieser Kalorienquelle gilt als eine Voraussetzung für das Wachstum des Gehirns, das viel Energie verbraucht. Ob gejagt oder von Rissen abgetragen wurde, ist im Einzelfall meist nicht entscheidbar."
   },
   {
    "jahr": -1800000,
    "titel": "Der Auszug aus Afrika",
    "text": "Homo erectus erreicht Georgien und später Ostasien – die erste weite Ausbreitung einer Menschenform. Sie gelingt ohne Nadel, Boot oder Vorratshaltung."
   },
   {
    "jahr": -1700000,
    "titel": "Der Faustkeil",
    "text": "Mit dem Acheuléen entsteht ein Werkzeug, das nicht nur brauchbar, sondern symmetrisch ist – beidseitig bearbeitet, oft sorgfältiger als nötig. Die Form bleibt über eine Million Jahre und über drei Kontinente nahezu gleich. Diese Beständigkeit ist so ungewöhnlich, dass sie weniger nach Erfindung als nach Weitergabe aussieht: Werkzeugmachen wurde gelernt, nicht jedes Mal neu gefunden."
   },
   {
    "jahr": -1000000,
    "titel": "Feuer",
    "text": "Verbrannte Knochen und Asche in der Wonderwerk-Höhle gelten als früher Beleg für kontrolliertes Feuer. Gekochte Nahrung liefert mehr verwertbare Energie – eine Voraussetzung für größere Gehirne."
   },
   {
    "jahr": -800000,
    "titel": "Die ersten Europäer",
    "text": "Funde in Atapuerca in Spanien und Fußspuren an der englischen Küste bei Happisburgh belegen Menschen in Europa lange vor dem Neandertaler. Sie lebten in einem Klima mit kalten Wintern, ohne dass Feuerstellen in dieser Zeit sicher nachgewiesen sind. Wie sie das überstanden, ist offen – eine der wichtigsten unbeantworteten Fragen der frühen Besiedlung."
   },
   {
    "jahr": -400000,
    "titel": "Die Speere von Schöningen",
    "text": "Acht sorgfältig gearbeitete Wurfspeere aus Fichtenholz belegen planvolle Jagd auf Großwild und Handwerk mit Kenntnis von Material und Schwerpunkt."
   },
   {
    "jahr": -300000,
    "titel": "Homo sapiens",
    "text": "Funde aus Jebel Irhoud in Marokko verschieben die Entstehung unserer Art um über hunderttausend Jahre nach hinten – und weg von Ostafrika als einzigem Ursprungsort."
   },
   {
    "jahr": -250000,
    "titel": "Werkzeug nach Plan",
    "text": "Die Levallois-Technik bearbeitet einen Steinkern so vor, dass sich am Ende Klingen mit vorherbestimmter Form abschlagen lassen. Das setzt voraus, dass mehrere Schritte im Voraus gedacht werden, bevor der erste Schlag fällt. Archäologen sehen darin einen der greifbarsten Hinweise auf planendes Denken, weil sich das Ergebnis nicht durch Ausprobieren erreichen lässt."
   },
   {
    "jahr": -176000,
    "titel": "Bauwerk im Dunkeln",
    "text": "In der Höhle von Bruniquel in Frankreich stehen dreihundert Meter vom Eingang entfernt kreisförmige Strukturen aus abgebrochenen Stalagmiten mit Brandspuren, datiert auf etwa 176.000 Jahre. In dieser Tiefe ist Licht zwingend, es gibt keinen Tag. Erbaut haben sie Neandertaler – der Fund gehört zu den Gründen, warum das Bild des kulturlosen Neandertalers nicht mehr zu halten ist."
   },
   {
    "jahr": -100000,
    "titel": "Bestattung und Farbe",
    "text": "Gräber mit Beigaben und Ockerverwendung deuten auf Vorstellungen, die über das Sichtbare hinausgehen. Was genau gedacht wurde, sagen die Funde nicht."
   },
   {
    "jahr": -75000,
    "titel": "Die Perlen von Blombos",
    "text": "In der Blombos-Höhle in Südafrika finden sich durchbohrte Schneckenschalen mit Abnutzungsspuren von Schnüren und Ockerstücke mit eingeritzten Rautenmustern. Perlen sind nur sinnvoll, wenn jemand sie sieht und deutet – Schmuck ist damit ein Beleg für Zeichen, nicht nur für Geschick. Die Funde sind rund vierzigtausend Jahre älter als die europäischen Höhlenbilder."
   },
   {
    "jahr": -70000,
    "titel": "Die große Ausbreitung",
    "text": "Homo sapiens verlässt Afrika in einer Welle, aus der alle heute außerhalb Afrikas lebenden Menschen hervorgehen. Frühere Vorstöße scheiterten oder blieben ohne Nachkommen."
   },
   {
    "jahr": -50000,
    "titel": "Über das offene Meer",
    "text": "Die Besiedlung Australiens setzt Wasserfahrzeuge voraus – Sichtweite reicht nicht aus. Boote sind nicht erhalten, die Ankunft ist der Beweis."
   },
   {
    "jahr": -45000,
    "titel": "Bilder an Höhlenwänden",
    "text": "Jagddarstellungen auf Sulawesi gehören zu den ältesten bekannten Bildern. Höhlenkunst ist keine europäische Erfindung – dort wurde nur früher gegraben.",
    "vertiefung": "hoehlenmalerei"
   },
   {
    "jahr": -40000,
    "titel": "Nadel, Flöte, Figur",
    "text": "Nähnadeln, Knochenflöten und Elfenbeinfiguren treten fast gleichzeitig auf. Kleidung, Musik und Bildwerk erscheinen als Bündel, nicht nacheinander."
   },
   {
    "jahr": -30000,
    "titel": "Das Ende der Neandertaler",
    "text": "Die letzten Neandertaler sterben aus. Ihre Gene leben weiter: Menschen außerhalb Afrikas tragen ein bis zwei Prozent neandertalerisches Erbgut.",
    "vertiefung": "dna-alte"
   },
   {
    "jahr": -26000,
    "titel": "Der erste Stoff",
    "text": "In Dolní Věstonice in Mähren zeigen gebrannte Lehmklumpen Abdrücke von gewebtem Textil, geknoteten Netzen und gedrehten Schnüren. Gewebe selbst verrottet, deshalb sind solche Abdrücke oft der einzige Nachweis. Sie verschieben die Textilherstellung um Zehntausende Jahre nach hinten – Fadendrehen ist älter als Ackerbau, Töpferei und Metall."
   },
   {
    "jahr": -20000,
    "titel": "Die Eiszeit auf dem Höhepunkt",
    "text": "Eisschilde binden so viel Wasser, dass der Meeresspiegel etwa 120 Meter tiefer liegt. Landbrücken verbinden Sibirien mit Alaska und die britischen Inseln mit dem Festland."
   },
   {
    "jahr": -18000,
    "titel": "Der Topf vor dem Ackerbau",
    "text": "Die ältesten bekannten Keramikgefäße kommen aus Südchina und Japan und sind rund achttausend Jahre älter als die Landwirtschaft. Sie wurden zum Kochen benutzt – Rußspuren und Fischfettreste belegen es. Damit fällt eine alte Ordnung der Vorgeschichte: Töpfe sind keine Folge der Sesshaftigkeit, sondern eine Technik von Jägern und Fischern."
   },
   {
    "jahr": -15000,
    "titel": "Der Hund",
    "text": "Wölfe werden zum ersten domestizierten Tier – vor dem Ackerbau, vor jeder Nutztierhaltung. Ort und Zeitpunkt sind umstritten, die Priorität nicht.",
    "vertiefung": "hund"
   },
   {
    "jahr": -12000,
    "titel": "Das Ende der Eiszeit",
    "text": "Innerhalb weniger Jahrzehnte steigen die Temperaturen stark an. Küsten verschwinden, Wälder wandern nordwärts, ganze Lebensweisen werden hinfällig."
   },
   {
    "jahr": -11500,
    "titel": "Göbekli Tepe",
    "text": "Jäger und Sammler errichten in Anatolien monumentale Steinkreise. Der Befund kehrt eine alte Annahme um: Möglicherweise stand der gemeinsame Bau am Anfang, nicht der Ackerbau.",
    "vertiefung": "goebekli-tepe"
   },
   {
    "jahr": -10500,
    "titel": "Pfeil und Bogen",
    "text": "In Stellmoor bei Hamburg liegen über hundert Kiefernschäfte mit Nocken und Spitzenansatz – die ältesten sicher als Pfeile bestimmbaren Funde. Der Bogen speichert Muskelkraft und gibt sie schnell frei; damit wird auf Distanz jagbar, was vorher nur im Nahkampf erreichbar war. Er ist außerdem die erste Waffe, mit der ein Mensch einen anderen töten kann, ohne ihn zu berühren."
   },
   {
    "jahr": -9500,
    "titel": "Sesshaftigkeit",
    "text": "In der Levante beginnen Getreideanbau und Tierhaltung. Der Preis ist hoch: einseitigere Ernährung, kleinere Körper, mehr Krankheiten und mehr Arbeitszeit als bei Jägern und Sammlern."
   },
   {
    "jahr": -7000,
    "titel": "Çatalhöyük",
    "text": "Bis zu 8.000 Menschen leben in einer dicht gebauten Siedlung ohne erkennbare Paläste, Tempel oder Herrschaftszeichen. Große Siedlungen setzen nicht zwingend Herrschaft voraus."
   },
   {
    "jahr": -6500,
    "titel": "Milch für Erwachsene",
    "text": "Eine Genmutation macht Milchzucker im Erwachsenenalter verdaulich. Sie breitet sich dort aus, wo Vieh gehalten wird – Kultur verändert messbar die Biologie."
   },
   {
    "jahr": -6000,
    "titel": "Wein",
    "text": "Tongefäße aus Georgien enthalten Weinsäurereste und Traubenpollen – der früheste Nachweis systematischen Weinbaus. Alkohol war vermutlich schon vorher aus vergorenen Früchten bekannt; neu ist die absichtliche Herstellung in Menge und Lagerung. Beides setzt Vorratsdenken voraus und gehört zu den frühesten Belegen für Feste, an denen mehr Menschen teilnehmen als eine Familie."
   },
   {
    "jahr": -5500,
    "titel": "Salz von Provadia",
    "text": "In Bulgarien wird an einer Salzquelle eine befestigte Siedlung betrieben, die Salz durch Sieden gewinnt und in Blöcken handelt. Salz ist das erste Gut, das nicht am Ort verbraucht, sondern zum Tausch produziert wird und über weite Strecken wandert. Die Gräber der Umgebung enthalten das älteste bekannte verarbeitete Gold – Reichtum und Salzhandel treten gemeinsam auf."
   },
   {
    "jahr": -5000,
    "titel": "Kupfer",
    "text": "Metallverarbeitung beginnt mit gediegenem und dann verhüttetem Kupfer. Ötzi trägt um 3300 v. Chr. ein Kupferbeil – ein Wertgegenstand, kein Alltagswerkzeug."
   },
   {
    "jahr": -4000,
    "titel": "Der Pflug",
    "text": "Ritzzeichnungen und Pflugspuren unter späteren Erdwerken belegen den Hakenpflug, der von Rindern gezogen wird. Damit bearbeitet ein Bauer ein Mehrfaches der Fläche, die mit Hacke und Grabstock möglich war, und Überschuss wird planbar. Weil Zugtiere Besitz sind, verstärkt derselbe Schritt die Unterschiede zwischen Haushalten."
   },
   {
    "jahr": -3500,
    "titel": "Rad und Wagen",
    "text": "Radfunde in Mesopotamien, im Alpenraum und in der Steppe erscheinen fast gleichzeitig. Ob eine Erfindung sich ausbreitete oder mehrere unabhängig entstanden, ist ungeklärt."
   },
   {
    "jahr": -3300,
    "titel": "Ein Mann aus dem Eis",
    "text": "Die Gletschermumie aus dem Ötztal ist der besterforschte einzelne Mensch der Vorgeschichte: Wir kennen seine letzten Mahlzeiten, seine Gelenkabnutzung, seine Tätowierungen, seine Kupferaxt und die Pfeilspitze in seiner Schulter, die ihn tötete. An diesem einen Fund hängt mehr Wissen über Alltag, Ausrüstung und Ernährung als an ganzen Fundplätzen. Er zeigt auch, wie viel wir sonst nicht wissen – weil sich Leichen normalerweise nicht erhalten."
   }
  ],
  "strittig": "Fast jede Zahl in diesem Bereich ist eine Spanne mit Fehlerbalken. Datierungen werden regelmäßig korrigiert, wenn neue Verfahren oder Funde hinzukommen – etwa bei den Fußspuren von White Sands, die die Besiedlung Amerikas um Jahrtausende vorverlegen könnten und intensiv diskutiert werden. Alte DNA hat das Fach seit den 2010er Jahren umgewälzt; manche Schlussfolgerung von heute wird in zehn Jahren überholt sein. Wer hier feste Jahreszahlen liest, sollte sie als besten derzeitigen Stand verstehen, nicht als Befund.",
  "quellen": [
   "Encyclopaedia Britannica: Stone Age; human evolution",
   "David Reich: Who We Are and How We Got Here",
   "Sonia Harmand u. a., Nature 2015: 3.3-million-year-old stone tools from Lomekwi",
   "Jean-Jacques Hublin u. a., Nature 2017: Jebel Irhoud",
   "Klaus Schmidt: Sie bauten die ersten Tempel"
  ],
  "literatur": [
   {
    "titel": "Die Reise unserer Gene",
    "autor": "Johannes Krause und Thomas Trappe",
    "jahr": "2019",
    "warum": "Was alte DNA über die Besiedlung Europas verrät, von einem der führenden Forscher verständlich erklärt. Der beste Einstieg in das neue Bild."
   },
   {
    "titel": "Who We Are and How We Got Here",
    "autor": "David Reich",
    "jahr": "2018",
    "warum": "Ausführlicher und weltweit angelegt, vom Begründer des Fachs. Auf Englisch."
   },
   {
    "titel": "Sie bauen die ersten Tempel",
    "autor": "Klaus Schmidt",
    "jahr": "2006",
    "warum": "Göbekli Tepe vom Ausgräber selbst. Die Deutungen sind teils überholt, der Bericht bleibt lesenswert."
   }
  ]
 },
 {
  "id": "jerusalem",
  "titel": "Jerusalem",
  "kurz": "Eine Stadt, die in 3.000 Jahren mindestens vierzigmal den Herrn wechselte — und dreimal heilig wurde.",
  "einleitung": "Jerusalem hat keine Rohstoffe, liegt an keinem Fluss, an keiner Küste und an keiner wichtigen Handelsstraße. Es liegt auf einem Bergrücken über einer Quelle, weit genug abseits, dass es nie von selbst groß geworden wäre. Trotzdem ist es die vielleicht am häufigsten belagerte Stadt der Welt: mindestens zwanzig erfolgreiche Eroberungen, zweimal vollständig zerstört, mehrfach entvölkert und wieder besiedelt. Der Grund ist kein geographischer, sondern ein erzählerischer — was hier geschah, wurde aufgeschrieben, und was aufgeschrieben wurde, machte den Ort für die nächste Generation unverzichtbar. Diese Geschichte folgt der Reihe der Herrschaften von der ersten ägyptischen Erwähnung bis heute.",
  "abschnitte": [
   {
    "name": "Kanaanäisch und jebusitisch",
    "zeitraum": "ca. 1800–1000 v. Chr.",
    "kurz": "Eine Bergsiedlung an einer Quelle, erwähnt in ägyptischen Texten. Klein, aber schwer einzunehmen."
   },
   {
    "name": "Israelitisch und judäisch",
    "zeitraum": "ca. 1000–586 v. Chr.",
    "kurz": "Hauptstadt des Königreichs Juda. Der Erste Tempel wird zum religiösen Mittelpunkt."
   },
   {
    "name": "Babylonisch und persisch",
    "zeitraum": "586–332 v. Chr.",
    "kurz": "Zerstörung, Exil, Rückkehr. Unter persischer Oberhoheit entsteht der Zweite Tempel."
   },
   {
    "name": "Hellenistisch",
    "zeitraum": "332–141 v. Chr.",
    "kurz": "Alexander, dann Ptolemäer und Seleukiden. Der Streit um die Hellenisierung führt zum Makkabäeraufstand."
   },
   {
    "name": "Hasmonäisch",
    "zeitraum": "141–63 v. Chr.",
    "kurz": "Erstmals seit 450 Jahren wieder ein eigener jüdischer Staat – geführt von Priesterkönigen."
   },
   {
    "name": "Römisch",
    "zeitraum": "63 v. Chr. – 324 n. Chr.",
    "kurz": "Herodes baut den Tempel um, Titus zerstört ihn. Hadrian gründet an derselben Stelle eine römische Kolonie."
   },
   {
    "name": "Byzantinisch",
    "zeitraum": "324–638",
    "kurz": "Christliche Stadt mit Grabeskirche und Pilgerbetrieb, unterbrochen von 15 Jahren persischer Herrschaft."
   },
   {
    "name": "Frühislamisch",
    "zeitraum": "638–1099",
    "kurz": "Umayyaden, Abbasiden, Fatimiden. Felsendom und al-Aqsa entstehen; die Stadt wird zur drittheiligsten des Islam."
   },
   {
    "name": "Kreuzfahrer",
    "zeitraum": "1099–1187 und 1229–1244",
    "kurz": "Königreich Jerusalem, zweimal begründet und zweimal verloren – beim zweiten Mal durch Vertrag statt Krieg."
   },
   {
    "name": "Ayyubidisch und mamlukisch",
    "zeitraum": "1187–1517",
    "kurz": "Saladin und seine Nachfolger. Eine fromme Provinzstadt mit Schulen und Stiftungen, ohne politisches Gewicht."
   },
   {
    "name": "Osmanisch",
    "zeitraum": "1517–1917",
    "kurz": "Vier Jahrhunderte Ruhe. Süleyman baut die Mauern, die heute die Altstadt umschließen."
   },
   {
    "name": "Britisches Mandat",
    "zeitraum": "1917–1948",
    "kurz": "Verwaltung unter Völkerbundsmandat, wachsende Spannungen zwischen den Bevölkerungsgruppen."
   },
   {
    "name": "Geteilt",
    "zeitraum": "1948–1967",
    "kurz": "Westen israelisch, Osten jordanisch. Stacheldraht durch die Stadt; die heiligen Stätten für die jeweils andere Seite unerreichbar."
   },
   {
    "name": "Seit 1967",
    "zeitraum": "ab 1967",
    "kurz": "Israel kontrolliert die ganze Stadt; die Annexion Ost-Jerusalems ist international nicht anerkannt. Der Status ist bis heute ungeklärt."
   }
  ],
  "stationen": [
   {
    "jahr": -1800,
    "titel": "Erste Erwähnung in ägyptischen Texten",
    "text": "Ägyptische Ächtungstexte nennen einen Ort namens Rushalimum – die älteste bekannte Nennung Jerusalems. Ächtungstexte waren Schalen mit Namen feindlicher Fürsten, die zerschlagen wurden, um sie magisch zu schwächen. Die Stadt lag auf einem schmalen Bergrücken über der Gihonquelle, der einzigen verlässlichen Wasserquelle der Gegend.",
    "herrschaft": "Kanaanäisch"
   },
   {
    "jahr": -1350,
    "titel": "Abdi-Heba schreibt nach Ägypten",
    "text": "In den Amarna-Briefen, dem diplomatischen Archiv des ägyptischen Hofes, bittet ein Stadtfürst namens Abdi-Heba den Pharao mehrfach um Truppen. Die Briefe zeigen Jerusalem als kleinen, aber befestigten Vasallenstaat im ägyptischen Einflussbereich – rund 350 Jahre vor David.",
    "herrschaft": "Ägyptische Oberhoheit"
   },
   {
    "jahr": -1000,
    "titel": "David nimmt die Jebusiterstadt",
    "text": "Nach der biblischen Erzählung erobert David die Stadt der Jebusiter und macht sie zur Hauptstadt seines Reiches – ein Ort, der zuvor keinem der Stämme gehörte und deshalb keinen bevorzugte. Er bringt die Bundeslade dorthin und verbindet damit erstmals politische und religiöse Mitte. Archäologisch ist dieser Vorgang nicht belegt; die Frage, wie groß Davids Reich war, ist eine der umstrittensten der Bibelwissenschaft.",
    "herrschaft": "Israelitisch",
    "vertiefung": "jerusalem-david"
   },
   {
    "jahr": -960,
    "titel": "Salomo baut den Ersten Tempel",
    "text": "Die Bibel schildert einen aufwendigen Tempelbau mit Zedernholz aus Tyros und phönizischen Handwerkern. Vom Bau selbst ist nichts erhalten – der Tempelberg ist bis heute nicht archäologisch untersucht, weil er als muslimisches Heiligtum unantastbar ist. Der Tempel begründete die Vorstellung eines einzigen legitimen Opferortes, aus der später der Monotheismus in seiner strengen Form erwuchs.",
    "herrschaft": "Israelitisch",
    "vertiefung": "jerusalem-tempel"
   },
   {
    "jahr": -925,
    "titel": "Der Feldzug des Pharao Schoschenk",
    "text": "Nach dem Tod Salomos zerfällt das Reich in Israel im Norden und Juda im Süden. Ein Feldzug des Pharao Schoschenk I. – in der Bibel Schischak – trifft die Region; seine Siegesliste in Karnak nennt zahlreiche Orte, Jerusalem selbst allerdings nicht. Die Bibel berichtet, der Tempelschatz sei als Tribut abgegeben worden.",
    "herrschaft": "Judäisch"
   },
   {
    "jahr": -701,
    "titel": "Hiskias Tunnel und die assyrische Belagerung",
    "text": "König Hiskia lässt einen 533 Meter langen Tunnel durch den Fels treiben, um das Wasser der Gihonquelle in die Stadt zu leiten – zwei Trupps graben von beiden Seiten und treffen sich in der Mitte. Eine Inschrift an der Fundstelle beschreibt den Moment der Begegnung. Als Sanherib von Assyrien die Stadt belagert, hält sie stand. Warum, sagen die Quellen unterschiedlich: Die Bibel spricht von einem Engel, Sanheribs Annalen von einem hohen Tribut.",
    "herrschaft": "Judäisch"
   },
   {
    "jahr": -586,
    "titel": "Nebukadnezar zerstört Tempel und Stadt",
    "text": "Nach einer Belagerung von anderthalb Jahren fällt Jerusalem. Die babylonischen Truppen brennen Tempel und Palast nieder, reißen die Mauern ein und verschleppen die Oberschicht nach Babylonien. Der König wird geblendet, nachdem man vor seinen Augen seine Söhne getötet hat. Der Staat Juda hört auf zu existieren.",
    "herrschaft": "Babylonisch",
    "vertiefung": "jerusalem-586"
   },
   {
    "jahr": -539,
    "titel": "Kyros erlaubt die Rückkehr",
    "text": "Nach der Einnahme Babylons durch Kyros II. dürfen die Verschleppten heimkehren. Der Kyros-Zylinder verkündet diese Politik in babylonischer Form; die Bibel nennt Kyros ausdrücklich einen Gesalbten Gottes – der einzige Nichtjude, dem dieser Titel zukommt. Nicht alle kehren zurück: In Babylonien bleibt eine jüdische Gemeinde, die über tausend Jahre bestehen wird.",
    "herrschaft": "Persisch",
    "vertiefung": "kyros2"
   },
   {
    "jahr": -515,
    "titel": "Der Zweite Tempel wird eingeweiht",
    "text": "Der Neubau ist bescheidener als der erste; die Bibel berichtet, Ältere hätten beim Anblick geweint. Die Bundeslade ist verschwunden und bleibt es. Das Allerheiligste ist von nun an ein leerer Raum – eine Vorstellung, die im antiken Vorderen Orient ohne Parallele war.",
    "herrschaft": "Persisch",
    "vertiefung": "jerusalem-tempel"
   },
   {
    "jahr": -445,
    "titel": "Nehemia baut die Mauern wieder auf",
    "text": "Ein jüdischer Beamter am persischen Hof erhält Urlaub und Vollmachten, um Jerusalem zu befestigen. Sein Bericht schildert die Arbeit unter dem Spott und den Drohungen der Nachbarn – die Bauleute arbeiteten mit der Waffe an der Seite. Mit Esra beginnt zugleich die Verschriftlichung und öffentliche Verlesung des Gesetzes.",
    "herrschaft": "Persisch"
   },
   {
    "jahr": -332,
    "titel": "Alexander zieht durch",
    "text": "Das Perserreich fällt an Alexander; Jerusalem geht ohne Kampf über. Eine Legende bei Flavius Josephus lässt den Hohepriester ihm entgegengehen und Alexander sich vor dem Gottesnamen verneigen – historisch nicht belegbar. Griechische Sprache, Gymnasion und Handel verändern die Stadt in den folgenden Generationen tiefgreifend.",
    "herrschaft": "Hellenistisch",
    "vertiefung": "alexanderzug"
   },
   {
    "jahr": -250,
    "titel": "Die Septuaginta entsteht",
    "text": "In Alexandria wird die hebräische Bibel ins Griechische übersetzt – der erste große Übersetzungsvorgang der Weltgeschichte. Für die griechischsprachige jüdische Diaspora wird sie zur Bibel; später übernimmt die frühe Kirche sie und liest ihre eigene Botschaft in sie hinein.",
    "herrschaft": "Hellenistisch"
   },
   {
    "jahr": -198,
    "titel": "Von den Ptolemäern zu den Seleukiden",
    "text": "Nach der Schlacht von Panion wechselt Judäa vom ägyptischen zum syrischen Herrscherhaus. Antiochos III. bestätigt zunächst das Recht, nach den eigenen Gesetzen zu leben – ein üblicher hellenistischer Umgang mit Tempelstädten.",
    "herrschaft": "Hellenistisch"
   },
   {
    "jahr": -167,
    "titel": "Antiochos IV. verbietet den jüdischen Kult",
    "text": "Der Seleukidenkönig lässt im Tempel einen fremden Altar errichten, verbietet Beschneidung und Sabbat und macht das Halten der Tora zum Kapitalverbrechen. Der Anlass war zugleich ein innerjüdischer Streit: Ein Teil der Oberschicht wollte die Hellenisierung, ein anderer nicht. Der Eingriff löst den ersten Religionskrieg der Geschichte aus, von dem wir wissen.",
    "herrschaft": "Hellenistisch",
    "vertiefung": "jerusalem-makkabaeer"
   },
   {
    "jahr": -164,
    "titel": "Die Makkabäer weihen den Tempel neu",
    "text": "Ein Aufstand unter Judas Makkabäus und seinen Brüdern erobert Jerusalem zurück. Die Tempelweihe im Dezember 164 v. Chr. wird als Chanukka bis heute begangen. Die Erzählung vom Öl, das acht Tage reichte, taucht erst Jahrhunderte später im Talmud auf; die Makkabäerbücher kennen sie nicht.",
    "herrschaft": "Hasmonäisch",
    "vertiefung": "jerusalem-makkabaeer"
   },
   {
    "jahr": -141,
    "titel": "Ein eigener jüdischer Staat",
    "text": "Simon Makkabäus erreicht die Anerkennung der Unabhängigkeit. Die Hasmonäer vereinen Hohepriesteramt und weltliche Herrschaft – eine Verbindung, die fromme Kreise von Anfang an ablehnten. Aus diesem Streit entstehen die Gruppen, die später als Pharisäer, Sadduzäer und Essener auftreten.",
    "herrschaft": "Hasmonäisch"
   },
   {
    "jahr": -63,
    "titel": "Pompeius nimmt Jerusalem",
    "text": "Ein Streit zweier hasmonäischer Brüder um den Thron führt dazu, dass beide Rom um Schiedsspruch bitten. Pompeius nutzt die Gelegenheit, belagert die Stadt drei Monate und betritt danach das Allerheiligste – er findet es leer und rührt den Tempelschatz nicht an. Judäa wird tributpflichtig; die Unabhängigkeit ist nach 78 Jahren beendet.",
    "herrschaft": "Römisch"
   },
   {
    "jahr": -37,
    "titel": "Herodes wird König von Roms Gnaden",
    "text": "Herodes, ein Idumäer und damit für viele kein vollwertiger Jude, regiert als Klientelkönig 33 Jahre. Er lässt den Tempel in einer Größenordnung umbauen, die alles Frühere übertrifft: eine Plattform von 14 Hektar, gestützt von Mauern aus bis zu 500 Tonnen schweren Steinen. Die Westmauer dieser Plattform ist die heutige Klagemauer – sie gehörte nie zum Tempel selbst, sondern zu seinem Unterbau.",
    "herrschaft": "Römisch"
   },
   {
    "jahr": 6,
    "titel": "Judäa wird römische Provinz",
    "text": "Nach der Absetzung von Herodes' Sohn Archelaos übernehmen römische Präfekten die direkte Verwaltung. Sie residieren in Caesarea am Meer und kommen nur zu den Festen nach Jerusalem, wenn die Stadt mit Pilgern überfüllt und die Lage angespannt ist. Der bekannteste von ihnen ist Pontius Pilatus, dessen Name 1961 auf einer Inschrift in Caesarea gefunden wurde.",
    "herrschaft": "Römisch"
   },
   {
    "jahr": 30,
    "titel": "Die Hinrichtung Jesu",
    "text": "Ein galiläischer Wanderprediger wird während eines Passahfestes in Jerusalem verhaftet und von Pilatus gekreuzigt – eine Strafe, die Rom für Aufrührer und Sklaven vorsah. Das genaue Jahr ist unsicher, 30 und 33 gelten als wahrscheinlichste Möglichkeiten. Aus der Bewegung um ihn entsteht in derselben Stadt die erste christliche Gemeinde.",
    "herrschaft": "Römisch"
   },
   {
    "jahr": 70,
    "titel": "Titus zerstört den Zweiten Tempel",
    "text": "Nach vier Jahren Aufstand und fünf Monaten Belagerung fällt Jerusalem. Der Tempel brennt; ob auf Befehl oder gegen ihn, berichten die Quellen unterschiedlich. Der Titusbogen in Rom zeigt bis heute die Menora im Triumphzug. Der Opferkult endet für immer – das Judentum wird zu einer Religion des Studiums und des Gebets.",
    "herrschaft": "Römisch",
    "vertiefung": "jerusalem-70"
   },
   {
    "jahr": 132,
    "titel": "Bar Kochba und das Ende jüdischen Jerusalems",
    "text": "Hadrian lässt an der Stelle der Stadt eine römische Kolonie namens Aelia Capitolina gründen, mit einem Jupitertempel auf dem Tempelberg. Der Aufstand unter Simon bar Kochba dauert drei Jahre und endet in einer Katastrophe: Judäa wird in Syria Palaestina umbenannt, Juden ist das Betreten der Stadt verboten – eine Regelung, die Jahrhunderte gilt.",
    "herrschaft": "Römisch"
   },
   {
    "jahr": 326,
    "titel": "Helena, Konstantin und die Grabeskirche",
    "text": "Nach der Wende zum Christentum lässt Kaiser Konstantin über der Stelle, die als Grab Jesu gilt, eine Kirche errichten. Seine Mutter Helena reist selbst in die Stadt; die Überlieferung schreibt ihr die Auffindung des Kreuzes zu. Jerusalem wird zum Pilgerziel und binnen weniger Generationen zu einer überwiegend christlichen Stadt.",
    "herrschaft": "Byzantinisch"
   },
   {
    "jahr": 614,
    "titel": "Die Perser nehmen die Stadt",
    "text": "Sasanidische Truppen unter Chosrau II. erobern Jerusalem, plündern die Grabeskirche und nehmen das Kreuzesreliquiar mit nach Persien. Fünfzehn Jahre später bringt Kaiser Herakleios es persönlich zurück – ein Triumph, der nur neun Jahre hält.",
    "herrschaft": "Byzantinisch",
    "vertiefung": "kaiser-herakleios"
   },
   {
    "jahr": 638,
    "titel": "Kalif Umar übernimmt Jerusalem",
    "text": "Nach der Niederlage von Byzanz am Jarmuk ergibt sich die Stadt vertraglich. Der Überlieferung nach lehnte Umar es ab, in der Grabeskirche zu beten, damit sie nicht später in eine Moschee umgewandelt würde. Christen und Juden erhalten den Status von Schutzbefohlenen: eigene Gerichtsbarkeit und Religionsausübung gegen Sonderabgabe und rechtliche Nachrangigkeit. Juden dürfen sich erstmals seit 500 Jahren wieder in der Stadt niederlassen.",
    "herrschaft": "Frühislamisch",
    "vertiefung": "jerusalem-638"
   },
   {
    "jahr": 691,
    "titel": "Der Felsendom entsteht",
    "text": "Abd al-Malik lässt auf dem seit 70 leerstehenden Tempelberg einen Kuppelbau errichten – eines der ältesten erhaltenen Bauwerke des Islam. Die Inschriften im Inneren wenden sich ausdrücklich gegen die christliche Lehre von der Dreieinigkeit. Wenige Jahre später folgt die al-Aqsa-Moschee am Südrand des Platzes.",
    "herrschaft": "Frühislamisch",
    "vertiefung": "jerusalem-638"
   },
   {
    "jahr": 1009,
    "titel": "Al-Hakim lässt die Grabeskirche zerstören",
    "text": "Der fatimidische Kalif, dessen Regierung auch von Zeitgenossen als unberechenbar beschrieben wird, ordnet die Zerstörung der Kirche an. Der Wiederaufbau beginnt erst Jahrzehnte später mit byzantinischer Unterstützung. In Europa wirkt die Nachricht lange nach und fließt später in die Kreuzzugspropaganda ein.",
    "herrschaft": "Frühislamisch"
   },
   {
    "jahr": 1073,
    "titel": "Seldschuken statt Fatimiden",
    "text": "Türkische Verbände nehmen die Stadt; die Bedingungen für Pilger verschlechtern sich. 1098 erobern die Fatimiden Jerusalem zurück – ein Jahr, bevor die Kreuzfahrer eintreffen.",
    "herrschaft": "Frühislamisch"
   },
   {
    "jahr": 1099,
    "titel": "Die Kreuzfahrer erobern Jerusalem",
    "text": "Nach fünf Wochen Belagerung fällt die Stadt am 15. Juli. Es folgt ein Massaker an Muslimen, Juden und einheimischen Christen, dessen Ausmaß umstritten, dessen Tatsache aber unbestritten ist. Das Königreich Jerusalem entsteht; die al-Aqsa-Moschee wird Sitz der Templer, der Felsendom eine Kirche.",
    "herrschaft": "Kreuzfahrer",
    "vertiefung": "kreuzfahrerstaaten"
   },
   {
    "jahr": 1187,
    "titel": "Saladin nimmt die Stadt zurück",
    "text": "Nach dem Sieg bei Hattin ergibt sich Jerusalem gegen Lösegeld. Saladin verzichtet auf Vergeltung für 1099 – ein Verhalten, das ihm schon bei europäischen Zeitgenossen Achtung eintrug. Die Grabeskirche bleibt christlich, der Tempelberg wird wieder muslimisch, Juden dürfen zurückkehren.",
    "herrschaft": "Ayyubidisch",
    "vertiefung": "jerusalem-saladin"
   },
   {
    "jahr": 1229,
    "titel": "Ein Kaiser bekommt Jerusalem per Vertrag",
    "text": "Friedrich II. erhält die Stadt in einem Zehnjahresvertrag mit Sultan al-Kamil, ohne dass gekämpft wird. Der Tempelberg bleibt muslimisch. Beide Seiten sind entsetzt: Der Kaiser ist zu diesem Zeitpunkt exkommuniziert, und der Sultan gilt vielen als Verräter. Der Vertrag hält, bis er ausläuft.",
    "herrschaft": "Kreuzfahrer"
   },
   {
    "jahr": 1244,
    "titel": "Choresmische Reiter beenden die christliche Herrschaft",
    "text": "Vor den Mongolen fliehende Verbände plündern Jerusalem und zerstören die Grabeskirche. Die Stadt bleibt bis 1917 unter muslimischer Herrschaft. Für die Kreuzfahrerstaaten ist es das Ende jeder Aussicht auf Jerusalem.",
    "herrschaft": "Ayyubidisch"
   },
   {
    "jahr": 1260,
    "titel": "Die Mamluken übernehmen",
    "text": "Nach dem Sieg über die Mongolen bei Ain Dschalut regieren die Mamluken von Kairo aus. Jerusalem verliert politisch an Bedeutung und wird zur frommen Provinzstadt: Es entstehen Koranschulen, Sufi-Konvente und Stiftungen, deren Bauten das Bild der Altstadt bis heute prägen.",
    "herrschaft": "Mamlukisch"
   },
   {
    "jahr": 1517,
    "titel": "Selim I. nimmt die Stadt kampflos",
    "text": "Nach dem Sieg über die Mamluken geht Jerusalem an das Osmanische Reich über. Es bleibt vier Jahrhunderte dort – die längste ununterbrochene Herrschaft einer einzigen Macht in der Geschichte der Stadt.",
    "herrschaft": "Osmanisch"
   },
   {
    "jahr": 1537,
    "titel": "Süleyman baut die heutigen Mauern",
    "text": "In vier Jahren entsteht die Stadtmauer, die die Altstadt bis heute umschließt: vier Kilometer lang, sieben offene Tore. Süleyman lässt auch die Wasserversorgung erneuern. Danach geschieht dreihundert Jahre lang wenig – Jerusalem ist eine kleine Stadt am Rand des Reiches.",
    "herrschaft": "Osmanisch"
   },
   {
    "jahr": 1700,
    "titel": "Eine arme Provinzstadt",
    "text": "Um 1800 leben schätzungsweise 8.000 bis 10.000 Menschen in Jerusalem, überwiegend Muslime, dazu christliche und jüdische Gemeinden. Die Stadt lebt von Pilgern und Stiftungsgeldern. Reisende beschreiben verfallene Häuser und ungepflasterte Gassen.",
    "herrschaft": "Osmanisch"
   },
   {
    "jahr": 1831,
    "titel": "Neun Jahre unter Muhammad Ali",
    "text": "Der ägyptische Statthalter besetzt Syrien und Palästina und öffnet die Region europäischem Einfluss: Konsulate werden zugelassen, Christen und Juden erhalten mehr Rechte. Nach dem Rückzug 1840 bleiben diese Öffnungen bestehen – der Beginn der europäischen Präsenz in Jerusalem.",
    "herrschaft": "Ägyptisch"
   },
   {
    "jahr": 1852,
    "titel": "Der Status quo der heiligen Stätten",
    "text": "Ein osmanischer Erlass regelt nach jahrzehntelangem Streit, welche Konfession welchen Teil der Grabeskirche und anderer Stätten nutzen darf. Die Regelung gilt bis heute. Ihre bekannteste Folge: Eine Leiter am Fenster der Grabeskirche steht seit dem 18. Jahrhundert unverändert dort, weil keine Seite sie allein bewegen darf.",
    "herrschaft": "Osmanisch"
   },
   {
    "jahr": 1860,
    "titel": "Die erste Siedlung außerhalb der Mauern",
    "text": "Mit Mischkenot Scha'ananim entsteht der erste jüdische Wohnbau außerhalb der Altstadt, finanziert von Moses Montefiore. Anfangs wollte niemand dort übernachten, weil es nachts vor den Toren als unsicher galt. In den folgenden Jahrzehnten wächst die Neustadt schnell.",
    "herrschaft": "Osmanisch"
   },
   {
    "jahr": 1892,
    "titel": "Die Eisenbahn erreicht Jerusalem",
    "text": "Die Strecke von Jaffa verkürzt die Reise von drei Tagen auf wenige Stunden. Pilgerzahlen und Handel steigen; die Stadt wächst erstmals seit Jahrhunderten wieder deutlich.",
    "herrschaft": "Osmanisch"
   },
   {
    "jahr": 1917,
    "titel": "Allenby zieht ein, Balfour verspricht",
    "text": "Am 11. Dezember betritt General Allenby die Stadt zu Fuß durch das Jaffator – eine bewusst bescheidene Geste. Wenige Wochen zuvor hatte die britische Regierung in der Balfour-Erklärung die Errichtung einer nationalen Heimstätte für das jüdische Volk in Palästina zugesagt, mit dem Zusatz, die Rechte der bestehenden nichtjüdischen Gemeinschaften dürften nicht beeinträchtigt werden. Beide Zusagen zugleich einzulösen, erwies sich als unmöglich.",
    "herrschaft": "Britisch"
   },
   {
    "jahr": 1929,
    "titel": "Gewalt um die Klagemauer",
    "text": "Ein Streit um Gebetsrechte an der Westmauer eskaliert zu Unruhen in ganz Palästina mit 249 Toten auf beiden Seiten. Die jüdische Gemeinde von Hebron, die dort seit Jahrhunderten lebte, wird ausgelöscht oder vertrieben. Die britische Untersuchungskommission empfiehlt erstmals, die Einwanderung zu begrenzen.",
    "herrschaft": "Britisch"
   },
   {
    "jahr": 1947,
    "titel": "Der Teilungsplan macht Jerusalem international",
    "text": "Die UN-Vollversammlung beschließt die Teilung Palästinas in einen jüdischen und einen arabischen Staat. Jerusalem soll als corpus separatum unter internationale Verwaltung gestellt werden – wegen seiner Bedeutung für drei Religionen. Die jüdische Seite nimmt den Plan an, die arabischen Staaten und die palästinensische Führung lehnen ihn ab. Umgesetzt wird er nie.",
    "herrschaft": "Britisch"
   },
   {
    "jahr": 1948,
    "titel": "Krieg und Teilung der Stadt",
    "text": "Im Krieg nach der israelischen Staatsgründung nimmt die jordanische Legion die Altstadt ein; das jüdische Viertel wird zerstört, seine Bewohner vertrieben. Israel hält den Westen. Eine Waffenstillstandslinie – die Grüne Linie – zerschneidet die Stadt mit Stacheldraht und Minenfeldern. Zehntausende Palästinenser verlieren ihre Häuser im Westteil.",
    "herrschaft": "Geteilt",
    "vertiefung": "jerusalem-1948"
   },
   {
    "jahr": 1949,
    "titel": "Zwei Hauptstädte, kein Zugang",
    "text": "Israel erklärt West-Jerusalem zur Hauptstadt, Jordanien annektiert den Osten – international kaum anerkannt. Der im Waffenstillstand zugesagte Zugang von Juden zur Klagemauer wird nicht gewährt; auf der anderen Seite bleiben Muslimen und Christen aus Israel die Stätten im Osten weitgehend verschlossen. Neunzehn Jahre lang lebt die Stadt geteilt.",
    "herrschaft": "Geteilt"
   },
   {
    "jahr": 1967,
    "titel": "Der Sechstagekrieg verändert alles",
    "text": "Am dritten Kriegstag nehmen israelische Fallschirmjäger die Altstadt ein. Israel gibt die Verwaltung des Tempelbergs unmittelbar danach an die islamische Stiftung Waqf zurück und erlaubt Juden das Betreten, nicht aber das Beten – eine Regelung, die bis heute gilt und regelmäßig zu Konflikten führt. Das maghrebinische Viertel vor der Westmauer wird binnen Tagen abgerissen, um den heutigen Platz zu schaffen; über hundert Familien verlieren ihre Wohnungen.",
    "herrschaft": "Seit 1967",
    "vertiefung": "jerusalem-1967"
   },
   {
    "jahr": 1980,
    "titel": "Das Jerusalemgesetz",
    "text": "Die Knesset erklärt Jerusalem in seiner Gesamtheit zur ewigen Hauptstadt Israels. Der UN-Sicherheitsrat erklärt das Gesetz für null und nichtig; die verbliebenen Botschaften verlassen die Stadt. Völkerrechtlich gilt Ost-Jerusalem seither überwiegend als besetztes Gebiet – eine Einordnung, die Israel bestreitet.",
    "herrschaft": "Seit 1967"
   },
   {
    "jahr": 2000,
    "titel": "Camp David scheitert an Jerusalem",
    "text": "Bei den Verhandlungen zwischen Barak und Arafat unter Vermittlung Clintons erweist sich die Frage der Souveränität über den Tempelberg als unlösbar. Wenige Wochen später löst ein Besuch Ariel Scharons auf dem Platz die Zweite Intifada aus, die über fünf Jahre und mehrere tausend Tote fordert.",
    "herrschaft": "Seit 1967"
   },
   {
    "jahr": 2017,
    "titel": "Die USA verlegen ihre Botschaft",
    "text": "Präsident Trump erkennt Jerusalem als Hauptstadt Israels an; 2018 zieht die Botschaft von Tel Aviv um. Die UN-Vollversammlung verurteilt den Schritt mit großer Mehrheit. Einige wenige Staaten folgen, die meisten nicht.",
    "herrschaft": "Seit 1967"
   },
   {
    "jahr": 2026,
    "titel": "Eine Stadt ohne geklärten Status",
    "text": "In Jerusalem leben heute etwa eine Million Menschen, rund 60 Prozent jüdisch, rund 38 Prozent arabisch. Die meisten arabischen Einwohner Ost-Jerusalems haben einen dauerhaften Aufenthaltsstatus, aber keine israelische Staatsbürgerschaft. Beide Seiten beanspruchen die Stadt als Hauptstadt; eine Lösung ist nach über hundert Jahren Konflikt nicht in Sicht. Stand der Angaben: 2026 – Bevölkerungszahlen ändern sich laufend, aktuelle Werte veröffentlicht das israelische Zentralbüro für Statistik.",
    "herrschaft": "Seit 1967",
    "vertiefung": "jerusalem-status"
   }
  ],
  "strittig": "Bei Jerusalem ist mehr strittig als bei fast jedem anderen Ort. Drei Ebenen sollte man auseinanderhalten. Erstens die Archäologie: Für David und Salomo gibt es keinen zeitgenössischen Beleg außerhalb der Bibel; die Tel-Dan-Stele aus dem 9. Jahrhundert v. Chr. nennt ein Haus Davids, sagt aber nichts über die Größe seines Reiches. Ob Jerusalem um 1000 v. Chr. eine Hauptstadt oder ein Bergdorf war, trennt in der Fachwelt zwei Lager, und die Grabungsbefunde lassen beide Lesarten zu. Der Tempelberg selbst ist nie archäologisch untersucht worden. Zweitens die Zahlen: Opferzahlen von Belagerungen — 1099 ebenso wie 70 — schwanken in den Quellen um den Faktor zehn und stammen fast immer von Siegern oder von Autoren mit theologischer Absicht. Drittens die Gegenwart: Der völkerrechtliche Status Ost-Jerusalems, die Frage der Souveränität über den Tempelberg beziehungsweise das Haram asch-Scharif und die Bezeichnungen selbst sind Gegenstand eines aktiven politischen Konflikts. Diese Darstellung nennt die belegten Vorgänge und benennt, wo Deutungen auseinandergehen; sie entscheidet den Streit nicht.",
  "quellen": [
   "Encyclopaedia Britannica: Jerusalem, history",
   "Simon Sebag Montefiore: Jerusalem – Die Biographie",
   "Karen Armstrong: Jerusalem – One City, Three Faiths",
   "Israel Finkelstein und Neil Asher Silberman: Keine Posaunen vor Jericho (zur Archäologie der Königszeit)",
   "Amnon Ben-Tor (Hrsg.): The Archaeology of Ancient Israel",
   "UN-Sicherheitsratsresolutionen 242 (1967), 478 (1980) und 2334 (2016)",
   "Israelisches Zentralbüro für Statistik: Bevölkerungsdaten Jerusalem"
  ],
  "literatur": [
   {
    "titel": "Jerusalem – Die Biographie",
    "autor": "Simon Sebag Montefiore",
    "jahr": "2011",
    "warum": "Dreitausend Jahre in einem Band, erzählend und mit Gespür für die Menschen. Der beste Einstieg."
   },
   {
    "titel": "Jerusalem – One City, Three Faiths",
    "autor": "Karen Armstrong",
    "jahr": "1996",
    "warum": "Die Stadt als religiöses Problem: was sie für Juden, Christen und Muslime bedeutet und warum das nicht auflösbar ist."
   },
   {
    "titel": "Der Hundertjährige Krieg um Palästina",
    "autor": "Rashid Khalidi",
    "jahr": "2020",
    "warum": "Die palästinensische Perspektive von einem Historiker, dessen Familie in Jerusalem lebte. Als Gegenlektüre zu israelischen Darstellungen zu lesen, nicht als Ersatz."
   }
  ]
 },
 {
  "id": "frauen",
  "titel": "Frauen in der Geschichte",
  "kurz": "Nicht eine Geschichte des Fehlens, sondern eine des Überlieferns — und der Rechte, die erst in den letzten hundert Jahren kamen.",
  "einleitung": "Frauen sind in historischen Quellen unterrepräsentiert, nicht weil sie weniger taten, sondern weil das, was sie taten, seltener aufgeschrieben wurde: Haushalt, Textilherstellung, Pflege, Kindererziehung und Landarbeit hinterlassen kaum Akten. Wo Frauen dennoch aktenkundig werden, geschieht es meist an drei Stellen — im Recht, im Kloster und am Hof. Dieser Querschnitt folgt beiden Linien: den einzelnen Frauen, die überliefert sind, und der Frage, welche Rechte wann galten. Auffällig ist dabei, wie jung fast alles ist: Die meisten rechtlichen Gleichstellungen sind keine hundert Jahre alt, manche keine fünfzig.",
  "stationen": [
   {
    "jahr": -2285,
    "titel": "Enheduanna, die erste namentlich bekannte Autorin",
    "text": "Die Tochter Sargons von Akkad war Hohepriesterin in Ur und verfasste Tempelhymnen, die sie ausdrücklich sich selbst zuschrieb. Damit ist sie die früheste Person der Weltliteratur, deren Name mit einem Werk verbunden ist – rund 1.500 Jahre vor Homer."
   },
   {
    "jahr": -1479,
    "titel": "Hatschepsut regiert als König",
    "text": "Sie übernahm die Herrschaft für ihren minderjährigen Stiefsohn und behielt sie zwei Jahrzehnte. In Bildwerken erscheint sie mit Königsbart – nicht als Verkleidung, sondern weil das Amt eine männlich definierte Ikonographie hatte. Nach ihrem Tod wurden ihre Namen an vielen Denkmälern getilgt.",
    "vertiefung": "pharao-hatschepsut"
   },
   {
    "jahr": -1200,
    "titel": "Frauenarbeit ist unsichtbar überliefert",
    "text": "Textilherstellung war über Jahrtausende die zeitaufwendigste Produktion nach der Landwirtschaft und lag fast überall in Frauenhand. In den Quellen taucht sie kaum auf, weil sie im Haushalt stattfand – ein Muster, das sich durch die gesamte Wirtschaftsgeschichte zieht."
   },
   {
    "jahr": -600,
    "titel": "Sappho",
    "text": "Ihre Lyrik galt in der Antike als so bedeutend, dass Platon sie die zehnte Muse nannte. Erhalten sind fast nur Bruchstücke, die meisten aus Zitaten anderer und aus Papyrusfunden ägyptischer Müllhalden."
   },
   {
    "jahr": -500,
    "titel": "Athen: Demokratie ohne Frauen",
    "text": "In der Stadt, die als Wiege der Demokratie gilt, waren Frauen von der Volksversammlung ausgeschlossen, rechtlich lebenslang unter Vormundschaft und im Alltag weitgehend auf das Haus beschränkt. In Sparta hatten Frauen mehr Rechte, Grundbesitz und Bewegungsfreiheit – ein Umstand, über den athenische Autoren sich empörten.",
    "vertiefung": "athener-demokratie"
   },
   {
    "jahr": -100,
    "titel": "Rechtsstellung in Rom",
    "text": "Römerinnen konnten erben, Eigentum besitzen und Geschäfte führen; unter Augustus entfiel für Mütter mehrerer Kinder die Vormundschaft. Politische Ämter blieben verschlossen, doch der Einfluss über Familiennetzwerke war real – Livia, Agrippina und Iulia Domna sind belegte Beispiele."
   },
   {
    "jahr": 400,
    "titel": "Hypatia",
    "text": "Die Mathematikerin und Philosophin lehrte in Alexandria und wurde 415 von einem Mob getötet. Ihr Tod wurde später zur Chiffre für den Untergang antiker Gelehrsamkeit gemacht; die Hintergründe waren vor allem lokale Machtkämpfe. Das ihr zugeschriebene Zitat über das Recht zu denken stammt aus dem 19. Jahrhundert."
   },
   {
    "jahr": 600,
    "titel": "Klöster als Bildungsraum",
    "text": "Für Frauen, die nicht heiraten wollten oder sollten, war das Kloster über tausend Jahre der einzige Ort mit Bibliothek, Schreibstube und eigener Leitung. Äbtissinnen verwalteten Grundbesitz und führten Prozesse – eine Machtstellung, die es sonst nirgends gab."
   },
   {
    "jahr": 1000,
    "titel": "Murasaki Shikibu schreibt den ersten Roman",
    "text": "Am japanischen Hof entsteht das Genji Monogatari, oft als erster psychologischer Roman der Weltliteratur bezeichnet. Frauen schrieben in der Hofsprache Japanisch, Männer schrieben Chinesisch – gerade der Ausschluss von der Gelehrtensprache schuf eine eigene Literatur."
   },
   {
    "jahr": 1150,
    "titel": "Hildegard von Bingen",
    "text": "Äbtissin, Naturkundlerin, Komponistin und Beraterin von Fürsten und Päpsten. Sie berief sich auf Visionen, um überhaupt öffentlich sprechen zu dürfen – eine Legitimation, die Frauen zugänglich war, wo das Amt es nicht war."
   },
   {
    "jahr": 1405,
    "titel": "Christine de Pizan lebt vom Schreiben",
    "text": "Als Witwe ohne Versorgung wurde sie Berufsschriftstellerin – die erste in Europa, die ihren Unterhalt damit bestritt. In der Stadt der Frauen widerlegte sie systematisch die frauenfeindlichen Argumente ihrer Zeit."
   },
   {
    "jahr": 1560,
    "titel": "Die Hexenverfolgung",
    "text": "Zwischen 1450 und 1750 wurden in Europa schätzungsweise 40.000 bis 60.000 Menschen als Hexen hingerichtet, rund drei Viertel davon Frauen. Die Verfolgung war kein mittelalterliches, sondern ein frühneuzeitliches Phänomen und ging oft von weltlichen Gerichten aus.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1678,
    "titel": "Die erste Doktorandin",
    "text": "Elena Cornaro Piscopia promoviert in Padua in Philosophie – gegen den Widerstand der theologischen Fakultät, die einen Abschluss in Theologie verhinderte. Es dauerte weitere zweihundert Jahre, bis Frauen regulär studieren durften."
   },
   {
    "jahr": 1791,
    "titel": "Olympe de Gouges antwortet der Revolution",
    "text": "Auf die Erklärung der Menschen- und Bürgerrechte, die Frauen nicht einschloss, antwortete sie mit einer Erklärung der Rechte der Frau und Bürgerin. Zwei Jahre später wurde sie guillotiniert – unter anderem mit der Begründung, sie habe die Tugenden ihres Geschlechts vergessen.",
    "vertiefung": "franzoesische-revolution"
   },
   {
    "jahr": 1792,
    "titel": "Mary Wollstonecraft begründet die Debatte",
    "text": "Ihre Verteidigung der Rechte der Frau argumentiert nicht mit Gleichheit der Natur, sondern mit Bildung: Frauen erschienen schwächer, weil man sie schwach erzog. Das Buch wurde breit gelesen und nach Bekanntwerden ihres Privatlebens jahrzehntelang gemieden."
   },
   {
    "jahr": 1848,
    "titel": "Seneca Falls",
    "text": "Die erste Frauenrechtskonvention der USA formuliert eine Erklärung nach dem Vorbild der Unabhängigkeitserklärung und fordert das Wahlrecht – der umstrittenste Punkt, der nur knapp angenommen wurde. Bis zur Einlösung vergingen 72 Jahre."
   },
   {
    "jahr": 1851,
    "titel": "Sojourner Truth in Akron",
    "text": "Die ehemalige Sklavin hält eine Rede, die den Widerspruch offenlegt: Die Schutzbedürftigkeit, mit der man Frauen Rechte verweigerte, hatte für schwarze Frauen nie gegolten. Die berühmte Fassung mit dem wiederholten Ain't I a Woman stammt aus einer zwölf Jahre späteren Wiedergabe und ist sprachlich verändert."
   },
   {
    "jahr": 1869,
    "titel": "Das erste Frauenwahlrecht",
    "text": "Das Territorium Wyoming führt das Wahlrecht für Frauen ein – teils aus Überzeugung, teils um Siedlerinnen anzulocken. 1893 folgt Neuseeland als erster selbstverwalteter Staat landesweit.",
    "vertiefung": "frauenwahlrecht"
   },
   {
    "jahr": 1889,
    "titel": "Die Sozialarbeit als Beruf",
    "text": "Jane Addams gründet in Chicago das Hull House, eine Nachbarschaftseinrichtung für Einwandererfamilien. Aus dieser Arbeit entstanden Sozialarbeit und empirische Stadtforschung als Fächer – und 1931 der Friedensnobelpreis für Addams."
   },
   {
    "jahr": 1903,
    "titel": "Marie Curie erhält den Nobelpreis",
    "text": "Zunächst war nur ihr Mann für den Physikpreis vorgeschlagen; erst auf dessen Einspruch wurde sie aufgenommen. 1911 erhielt sie einen zweiten Preis, für Chemie – sie ist bis heute die einzige Person mit Nobelpreisen in zwei Naturwissenschaften."
   },
   {
    "jahr": 1918,
    "titel": "Frauenwahlrecht in Deutschland",
    "text": "Mit der Novemberrevolution erhalten Frauen das aktive und passive Wahlrecht; bei der Wahl zur Nationalversammlung 1919 liegt die Wahlbeteiligung der Frauen bei 82 Prozent. 37 Frauen ziehen ins Parlament ein. In der Schweiz dauerte es bis 1971, im Kanton Appenzell Innerrhoden bis 1990.",
    "vertiefung": "frauenwahlrecht"
   },
   {
    "jahr": 1928,
    "titel": "Gleiches Wahlrecht in Großbritannien",
    "text": "Seit 1918 durften Frauen über 30 mit Eigentum wählen; erst 1928 gilt dasselbe Alter wie für Männer. Der Weg dorthin führte über Massenproteste, Hungerstreiks und Zwangsernährung inhaftierter Suffragetten.",
    "vertiefung": "frauenwahlrecht"
   },
   {
    "jahr": 1949,
    "titel": "Simone de Beauvoir",
    "text": "Das andere Geschlecht unterscheidet zwischen biologischem und gesellschaftlich zugewiesenem Geschlecht – der Satz, man komme nicht als Frau zur Welt, man werde es, prägte die Debatte des ganzen Jahrhunderts. Das Buch stand bis 1966 auf dem kirchlichen Index."
   },
   {
    "jahr": 1960,
    "titel": "Die Pille",
    "text": "Erstmals lässt sich Empfängnis zuverlässig und unabhängig vom Partner verhüten. Die Folgen für Bildungs- und Berufsverläufe von Frauen sind ökonomisch messbar: Studien zeigen einen deutlichen Anstieg von Studienabschlüssen und späterer Heirat dort, wo der Zugang früher möglich war."
   },
   {
    "jahr": 1963,
    "titel": "Der Weiblichkeitswahn",
    "text": "Betty Friedans Buch beschreibt das Unbehagen von Hausfrauen der amerikanischen Vorstädte und löst die zweite Welle der Frauenbewegung aus. Kritisiert wurde später zu Recht, dass es die Lage von Arbeiterinnen und schwarzen Frauen kaum berührte."
   },
   {
    "jahr": 1975,
    "titel": "Der Frauenstreik in Island",
    "text": "90 Prozent der isländischen Frauen legen für einen Tag jede Arbeit nieder – bezahlte wie unbezahlte. Das Land steht still. Fünf Jahre später wird Vigdís Finnbogadóttir als erste Frau der Welt direkt zur Staatspräsidentin gewählt."
   },
   {
    "jahr": 1977,
    "titel": "Ehemann darf nicht mehr entscheiden",
    "text": "In der Bundesrepublik entfällt der Paragraf, nach dem die Frau nur berufstätig sein durfte, soweit es mit ihren Pflichten in Ehe und Familie vereinbar war. Bis 1958 hatte der Mann sogar das Recht, das Arbeitsverhältnis seiner Frau zu kündigen."
   },
   {
    "jahr": 1979,
    "titel": "Die UN-Frauenrechtskonvention",
    "text": "CEDAW verpflichtet die Vertragsstaaten, Diskriminierung in Recht und Praxis zu beseitigen. Sie gehört zu den am häufigsten mit Vorbehalten unterzeichneten Menschenrechtsverträgen – ein Hinweis darauf, wie umstritten der Gegenstand blieb."
   },
   {
    "jahr": 1997,
    "titel": "Vergewaltigung in der Ehe wird strafbar",
    "text": "In Deutschland fällt die Straflosigkeit erst 1997, nach jahrzehntelanger Debatte und gegen erheblichen Widerstand. In vielen Ländern ist sie bis heute nicht oder nur eingeschränkt strafbar."
   },
   {
    "jahr": 2013,
    "titel": "Malala Yousafzai vor den Vereinten Nationen",
    "text": "Ein Jahr nach dem Attentat der Taliban spricht die Sechzehnjährige über das Recht auf Bildung. Weltweit gehen mehr Mädchen zur Schule als je zuvor – zugleich sind es in Krisenregionen die ersten, die wieder herausgenommen werden."
   },
   {
    "jahr": 2020,
    "titel": "Was noch offen ist",
    "text": "Frauen leisten weltweit den überwiegenden Teil unbezahlter Sorgearbeit; in Parlamenten liegt ihr Anteil bei etwa einem Viertel bis einem Drittel; in Vorständen großer Unternehmen deutlich darunter. Der Abstand bei Löhnen besteht in allen Industrieländern fort, wenn auch in unterschiedlicher Höhe. Stand der Angaben: 2026 – laufende Zahlen bei UN Women und der Interparlamentarischen Union."
   }
  ],
  "strittig": "Zwei Fallen sind verbreitet. Die erste ist die Verklärung: Aus wenigen überlieferten Herrscherinnen und Gelehrten lässt sich keine allgemein bessere Lage ableiten — Hatschepsut und Hildegard waren Ausnahmen, und gerade weil sie Ausnahmen waren, wurden sie überliefert. Die zweite ist die Verallgemeinerung: Die Lage von Frauen unterschied sich zu jeder Zeit stärker nach Stand, Region und Vermögen als nach Jahrhundert. Eine Bäuerin des 13. Jahrhunderts und eine Äbtissin derselben Zeit lebten in verschiedenen Welten. Umstritten ist außerdem, wie stark die Hexenverfolgung geschlechtsspezifisch zu deuten ist: Der Frauenanteil lag bei etwa drei Vierteln, regional aber sehr unterschiedlich — in Island und Estland waren die meisten Hingerichteten Männer. Und viele bekannte Zitate — Hypatia, Sojourner Truth — sind in der umlaufenden Form nicht zeitgenössisch belegt.",
  "quellen": [
   "Encyclopaedia Britannica: women's rights movement; Einzelartikel",
   "Merry Wiesner-Hanks: Gender in History – Global Perspectives",
   "Bonnie S. Anderson und Judith P. Zinsser: A History of Their Own",
   "Wolfgang Behringer: Hexen – Glaube, Verfolgung, Vermarktung",
   "UN Women und Interparlamentarische Union: laufende Statistiken",
   "Nobelprize.org: Preisträgerinnen"
  ],
  "literatur": [
   {
    "titel": "Gender in History – Global Perspectives",
    "autor": "Merry Wiesner-Hanks",
    "jahr": "2011",
    "warum": "Der beste weltweite Überblick: was sich wo und wann tatsächlich unterschied, statt einer einzigen Erzählung."
   },
   {
    "titel": "Frauen und Macht",
    "autor": "Mary Beard",
    "jahr": "2018",
    "warum": "Ein schmaler Essay darüber, wie tief die Muster reichen, mit denen Frauen von öffentlicher Rede ausgeschlossen wurden. Beginnt bei Homer."
   },
   {
    "titel": "Das andere Geschlecht",
    "autor": "Simone de Beauvoir",
    "jahr": "1949",
    "warum": "Der Text, der die Debatte des 20. Jahrhunderts prägte. Umfangreich, in Teilen zeitgebunden, in der Grundfrage unverändert aktuell."
   }
  ]
 },
 {
  "id": "verbrechen",
  "titel": "Verbrechen & Strafe",
  "kurz": "Wer bestrafte wen, wofür — und wer entschied, was überhaupt ein Verbrechen ist.",
  "einleitung": "Strafrecht ist die Geschichte davon, wer als Person zählt. Über Jahrtausende richtete sich die Strafe nach dem Stand des Opfers und des Täters, nicht nach der Tat: Dieselbe Verletzung kostete einen Adligen ein Bußgeld und einen Unfreien die Hand. Der Gedanke, dass Strafe der Person und nicht dem Rang gilt, dass sie verhältnismäßig sein soll und dass ein Zweifel dem Angeklagten zugutekommt, ist jünger als die Dampfmaschine. Dieser Querschnitt verfolgt beides — die Taten und die Verfahren, mit denen man sie beantwortete.",
  "stationen": [
   {
    "jahr": -2100,
    "titel": "Der Kodex Ur-Nammu",
    "text": "Die älteste erhaltene Gesetzessammlung ist dreihundert Jahre älter als der Kodex Hammurapi und arbeitet anders: Für Körperverletzung stehen Geldbußen, nicht Vergeltung. Erst bei Mord, Raub und Ehebruch droht der Tod. Die Reihenfolge der Rechtsgeschichte ist damit nicht die vom Rohen zum Milden – Buße stand am Anfang, das Spiegelstrafrecht kam später."
   },
   {
    "jahr": -1754,
    "titel": "Der Kodex Hammurapi",
    "text": "Auf einer Stele in Susa gefunden, 282 Rechtssätze. Berühmt für Auge um Auge — tatsächlich gilt das nur zwischen Gleichgestellten. Verletzt ein Freier einen Sklaven, zahlt er dem Eigentümer; verletzt ein Sklave einen Freien, verliert er ein Körperteil. Der Kodex ist damit weniger ein Zeugnis der Härte als der Ungleichheit vor dem Recht.",
    "vertiefung": "hammurapi"
   },
   {
    "jahr": -621,
    "titel": "Drakons Gesetze in Athen",
    "text": "Athens erste schriftliche Gesetzessammlung, so streng, dass drakonisch bis heute ein Wort ist. Ihr eigentlicher Fortschritt: Sie stand geschrieben und war nachlesbar. Vorher entschieden Adelsfamilien nach ungeschriebener Überlieferung, und niemand konnte prüfen, ob sie sich daran hielten."
   },
   {
    "jahr": -450,
    "titel": "Die Zwölftafeln",
    "text": "Rom schreibt sein Recht auf und stellt es öffentlich aus, nachdem die Plebejer es erzwungen hatten. Auch hier ist die Veröffentlichung wichtiger als der Inhalt: Recht, das man kennt, lässt sich einfordern."
   },
   {
    "jahr": 71,
    "titel": "Kreuzigung als Machtmittel",
    "text": "Nach dem Spartacusaufstand ließ Rom rund 6.000 Gefangene entlang der Via Appia kreuzigen. Die Kreuzigung war keine gewöhnliche Strafe, sondern eine für Sklaven, Aufrührer und Provinziale — nie für römische Bürger. Ihre Wirkung lag im öffentlichen Sterben über Tage, sichtbar an der Hauptstraße.",
    "vertiefung": "spartacus"
   },
   {
    "jahr": 533,
    "titel": "Das Corpus Iuris Civilis",
    "text": "Justinian lässt tausend Jahre römischer Rechtsprechung ordnen. Darin steht der Satz, dass niemand wegen eines Gedankens gestraft werden soll, und die Beweisregel, dass die Last beim Ankläger liegt. Beides ging Jahrhunderte verloren und kehrte über die mittelalterlichen Rechtsschulen zurück.",
    "vertiefung": "kaiser-justinian"
   },
   {
    "jahr": 653,
    "titel": "Der Tang-Kodex",
    "text": "China erhält ein Strafgesetzbuch mit fünfhundert Artikeln, fünf abgestuften Strafarten und dem Grundsatz, dass keine Strafe ohne Vorschrift verhängt werden darf; Beamte haften für Fehlurteile. Der Kodex bleibt über tausend Jahre die Grundlage des chinesischen Rechts und wird in Japan, Korea und Vietnam übernommen. Er ist damit das langlebigste Strafrecht der Geschichte."
   },
   {
    "jahr": 800,
    "titel": "Das Wergeld",
    "text": "In den germanischen Volksrechten hat jeder Mensch einen Preis: Für die Tötung eines Freien ist eine festgesetzte Summe an die Sippe zu zahlen, gestaffelt nach Rang, Alter und Geschlecht. Das ist kein Ersatz für Strafe, sondern ein Ersatz für die Fehde – der Staat ist zu schwach zum Strafen, aber stark genug zum Vermitteln. Die Vorstellung, dass die Tat gegen die Gemeinschaft und nicht gegen die Familie gerichtet ist, kommt erst mit dem Hochmittelalter."
   },
   {
    "jahr": 1215,
    "titel": "Habeas Corpus im Ansatz",
    "text": "Die Magna Carta enthält den Satz, dass kein freier Mann verhaftet werden darf außer nach rechtmäßigem Urteil seiner Standesgenossen. Gemeint waren die Barone, nicht das Volk — aber der Satz wurde über Jahrhunderte immer weiter gelesen und ist die Wurzel des Verbots willkürlicher Haft.",
    "vertiefung": "magna-carta"
   },
   {
    "jahr": 1215,
    "titel": "Das Ende des Gottesurteils",
    "text": "Das Vierte Laterankonzil verbietet Priestern die Mitwirkung an Feuer- und Wasserproben. Damit bricht das bisherige Beweisverfahren zusammen: Wenn Gott nicht mehr urteilt, muss ein Gericht ermitteln. In England führte das zur Jury, auf dem Kontinent zum Inquisitionsverfahren mit Geständnis als Königsbeweis — und damit zur Folter.",
    "vertiefung": "hexenverfolgung"
   },
   {
    "jahr": 1231,
    "titel": "Die Konstitutionen von Melfi",
    "text": "Friedrich II. erlässt für Sizilien ein Gesetzbuch, das die Fehde verbietet, das Gottesurteil abschafft und die Verfolgung von Verbrechen dem königlichen Richter überträgt. Damit wird Strafe zur Sache des Staates, nicht der Verletzten. Das Reich, für das es galt, hielt nicht lange – das Prinzip schon."
   },
   {
    "jahr": 1252,
    "titel": "Folter wird für die Ketzerverfolgung erlaubt",
    "text": "Papst Innozenz IV. gestattet mit der Bulle Ad extirpanda die Folter in Ketzerprozessen, mit Einschränkungen, die in der Praxis umgangen wurden. Das römische Recht hatte Folter gekannt, das frühe Mittelalter kaum — hier kehrt sie als Ermittlungsmittel zurück.",
    "vertiefung": "hexenverfolgung"
   },
   {
    "jahr": 1532,
    "titel": "Die Constitutio Criminalis Carolina",
    "text": "Karls V. Halsgerichtsordnung, das erste reichsweite Strafrecht im deutschsprachigen Raum. Sie ist hart — Todesstrafe für Mord, Raub, Brandstiftung, Hexerei — und gleichzeitig ein Fortschritt: Sie regelt genau, wann gefoltert werden darf, verlangt Indizien vorher und verbietet Verurteilung ohne Geständnis oder zwei Zeugen.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1596,
    "titel": "Das Amsterdamer Zuchthaus",
    "text": "Im Rasphuis müssen Verurteilte Brasilholz zu Farbpulver raspeln; das Ziel ist nicht Vergeltung, sondern Erziehung durch Arbeit. Die Einrichtung wird in ganz Nordeuropa nachgeahmt und ist der Anfang der Freiheitsstrafe als Regelstrafe – bis dahin war Gefängnis vor allem Untersuchungshaft. Die Arbeit war so hart, dass die Sterblichkeit hoch blieb; die Erziehungsabsicht und die Praxis lagen von Anfang an weit auseinander."
   },
   {
    "jahr": 1670,
    "titel": "Die Galeeren als Strafe",
    "text": "Frankreichs Ordonnance criminelle macht die Verurteilung zur Galeere zur Standardstrafe für Hunderte Delikte. Die Ruderer waren angekettet, die Sterblichkeit hoch; Strafe wird hier zum Wirtschaftsfaktor, weil der Staat Arbeitskraft braucht. Dasselbe Muster wiederholt sich bei Zuchthäusern, Deportation und Straflagern."
   },
   {
    "jahr": 1723,
    "titel": "Der blutige Kodex",
    "text": "Der englische Black Act stellt das maskierte Erscheinen im Wald unter Todesstrafe und ist Teil einer Entwicklung, in der die Zahl der todeswürdigen Delikte auf über zweihundert steigt – meist zum Schutz von Eigentum. Weil die Strafe so unverhältnismäßig war, sprachen Geschworene häufig frei oder bewerteten den Wert der Beute herunter. Härte erzeugte Nachsicht: ein Grundproblem, das die Reformer des folgenden Jahrhunderts aufgreifen."
   },
   {
    "jahr": 1764,
    "titel": "Beccaria gegen Folter und Todesstrafe",
    "text": "Cesare Beccaria veröffentlicht anonym Über Verbrechen und Strafen: Strafe soll abschrecken, nicht rächen, sie muss verhältnismäßig, schnell und sicher sein, Folter ist ein Beweismittel, das nur Schmerzresistenz messe, und die Todesstrafe sei unnötig. Das Buch wirkte in wenigen Jahren — Toskana schaffte die Todesstrafe 1786 als erster Staat ab.",
    "vertiefung": "beccaria"
   },
   {
    "jahr": 1787,
    "titel": "Deportation nach Australien",
    "text": "Die First Fleet bringt 750 Verurteilte nach Botany Bay. Bis 1868 werden rund 162.000 Menschen nach Australien deportiert, viele für Eigentumsdelikte. Deportation galt als milde Alternative zum Galgen — und war zugleich Kolonialpolitik mit Zwangsarbeitern."
   },
   {
    "jahr": 1791,
    "titel": "Benthams Panoptikum",
    "text": "Jeremy Bentham entwirft ein Gefängnis, in dem ein einzelner Wächter von einem Turm aus in alle Zellen sehen kann, ohne selbst gesehen zu werden. Gebaut wurde es kaum, gedacht wurde es viel: Michel Foucault machte daraus 1975 das Bild moderner Kontrolle — Disziplin wirkt am besten, wenn man nicht weiß, ob gerade hingesehen wird."
   },
   {
    "jahr": 1810,
    "titel": "Der Code pénal",
    "text": "Napoleons Strafgesetzbuch macht drei Dinge verbindlich: Keine Strafe ohne Gesetz, gleiche Strafe für alle Stände, ein festes Strafmaß je Tat. Die Milde ist begrenzt – Brandmarken und Zwangsarbeit bleiben zunächst –, aber die Willkür des Richters ist eingeschränkt. Der Kodex wird in halb Europa übernommen und ist die Grundlage, auf der die Kodifikationen des 19. Jahrhunderts aufbauen."
   },
   {
    "jahr": 1829,
    "titel": "Die erste moderne Polizei",
    "text": "Robert Peel gründet die Metropolitan Police in London — uniformiert, unbewaffnet, ohne militärischen Rang, mit dem Grundsatz, dass die Polizei die Öffentlichkeit ist und die Öffentlichkeit die Polizei. Vorher gab es Nachtwächter und private Kopfgeldjäger. Erst mit einer ermittelnden Polizei entsteht überhaupt die Möglichkeit, Serientaten als Serie zu erkennen."
   },
   {
    "jahr": 1876,
    "titel": "Der geborene Verbrecher",
    "text": "Cesare Lombroso behauptet, Kriminalität sei an Schädelform, Ohren und Tätowierungen erkennbar, und stützt das auf Messungen an Gefangenen. Der englische Arzt Charles Goring widerlegte die Befunde 1913 durch einen Vergleich mit Nichtgefangenen – Lombroso hatte keine Kontrollgruppe. Die Lehre war methodisch von Anfang an haltlos und hat trotzdem Rassenkunde, Sicherungsverwahrung und Zwangssterilisation mit Argumenten versorgt."
   },
   {
    "jahr": 1879,
    "titel": "Bertillon vermisst Verbrecher",
    "text": "Alphonse Bertillon führt in Paris die Anthropometrie ein: elf Körpermaße pro Person, in Karteikarten geordnet. Erstmals lässt sich eine festgenommene Person mit früheren Akten abgleichen. Die Methode war fehleranfällig und wurde von den Fingerabdrücken verdrängt — aber sie begründete die Idee der kriminalistischen Registratur."
   },
   {
    "jahr": 1892,
    "titel": "Fingerabdrücke werden Beweismittel",
    "text": "Juan Vucetich in Argentinien und Francis Galton in England machen Fingerabdrücke systematisch verwendbar; 1892 führt ein Abdruck in Argentinien erstmals zur Überführung einer Mörderin. Damit verschiebt sich die Beweislast vom Geständnis zur Spur — der wichtigste Schritt gegen Folter, den keine moralische Debatte, sondern eine Technik bewirkte."
   },
   {
    "jahr": 1899,
    "titel": "Das erste Jugendgericht",
    "text": "In Chicago wird ein Gericht eingerichtet, das Minderjährige nicht bestraft, sondern erzieht: kein öffentliches Verfahren, kein Strafmaß, sondern Auflagen und Fürsorge. Die Idee verbreitet sich innerhalb von zwanzig Jahren über Europa und Amerika. Die Kehrseite zeigte sich erst später: Ohne Verfahren gab es auch keine Verteidigung – dieser Widerspruch wurde in den USA erst 1967 gerichtlich korrigiert."
   },
   {
    "jahr": 1901,
    "titel": "Blutgruppen und die Spur am Tatort",
    "text": "Karl Landsteiner beschreibt die Blutgruppen; ab 1915 lassen sich Blutspuren Gruppen zuordnen. Was vorher nur Blut war, wird zum Ausschlusskriterium. Die Linie führt weiter zum genetischen Fingerabdruck, den Alec Jeffreys 1984 entdeckt und der 1986 in England erstmals einen Verdächtigen entlastete, bevor er einen anderen überführte."
   },
   {
    "jahr": 1920,
    "titel": "Die Prohibition erfindet ein Geschäftsmodell",
    "text": "Das Alkoholverbot in den USA verbietet einen Massenkonsum, ohne die Nachfrage zu ändern. Die Folge ist eine Branche mit Import, Verteilung, Bestechung und Gewaltmonopol – organisierte Kriminalität in der Form, die sie behält, nachdem das Verbot 1933 fällt. Das Beispiel ist das häufigste Argument in Debatten über Verbote von Drogen und anderen Gütern: Ein Verbot verlagert einen Markt, es beseitigt ihn nicht."
   },
   {
    "jahr": 1948,
    "titel": "Recht auf ein faires Verfahren",
    "text": "Die Allgemeine Erklärung der Menschenrechte schreibt Unschuldsvermutung, Verbot der Folter und das Recht auf Verteidigung als weltweiten Anspruch fest. Rechtlich ist sie nicht bindend, praktisch ist sie die Grundlage aller späteren Konventionen — und der Maßstab, an dem sich Staaten messen lassen müssen."
   },
   {
    "jahr": 1963,
    "titel": "Wer keinen Anwalt bezahlen kann",
    "text": "Der US-Oberste Gerichtshof entscheidet in Gideon v. Wainwright, dass jedem Angeklagten ein Verteidiger gestellt werden muss. Clarence Gideon hatte seine Beschwerde mit Bleistift aus dem Gefängnis geschrieben. Der Fall zeigt, wie spät die Selbstverständlichkeiten des Strafverfahrens entstanden sind."
   },
   {
    "jahr": 1966,
    "titel": "Die Belehrung",
    "text": "Der Oberste Gerichtshof der USA entscheidet, dass eine Aussage nur verwertbar ist, wenn der Beschuldigte vorher über Schweigerecht und Anwalt aufgeklärt wurde. Ernesto Miranda selbst wurde im zweiten Verfahren erneut verurteilt. Die Entscheidung verlegt den Schutz vom Gerichtssaal in den Verhörraum – dorthin, wo die meisten Verfahren tatsächlich entschieden werden."
   },
   {
    "jahr": 1989,
    "titel": "DNA befreit Unschuldige",
    "text": "In den USA beginnt mit Gary Dotson die Reihe der Freilassungen durch DNA-Analyse; das Innocence Project zählt seither hunderte Fälle. Auffällig ist, was die Wiederaufnahmen gemeinsam haben: falsche Zeugenidentifizierung, fehlerhafte Gutachten und erzwungene Geständnisse. Es sind dieselben Fehlerquellen, die Beccaria 1764 benannte.",
    "vertiefung": "dna-alte"
   },
   {
    "jahr": 2016,
    "titel": "Der Algorithmus im Urteil",
    "text": "US-Gerichte nutzen Risikoprognosen aus Software, um über Haft und Bewährung zu entscheiden; eine Untersuchung von ProPublica zeigt, dass die Fehler ungleich verteilt sind – schwarze Angeklagte werden häufiger falsch als gefährlich eingestuft. Der Hersteller widersprach mit einer anderen Definition von Fairness, und mathematisch lassen sich beide Ansprüche nicht gleichzeitig erfüllen. Der Streit ist offen und betrifft jedes Prognoseverfahren, auch das des Gutachters aus Fleisch und Blut."
   }
  ],
  "strittig": "Kriminalitätsstatistiken sind für die Zeit vor dem 19. Jahrhundert kaum vergleichbar: Sie zählen Anzeigen und Verfahren, nicht Taten, und beides hängt daran, wie dicht Verwaltung und Polizei sind. Die verbreitete Aussage, Gewalt sei über die Jahrhunderte stark zurückgegangen — von Steven Pinker prominent vertreten — stützt sich auf lokale Gerichtsakten und Skelettbefunde und ist in ihrer Größenordnung umstritten. Ebenso strittig ist die Wirkung der Todesstrafe: Vergleichsstudien zwischen Staaten mit und ohne finden überwiegend keinen abschreckenden Effekt, die Methodik solcher Vergleiche wird aber angegriffen.",
  "quellen": [
   "Encyclopaedia Britannica: criminal law; punishment; police",
   "Cesare Beccaria: Dei delitti e delle pene, 1764",
   "Constitutio Criminalis Carolina, 1532",
   "Allgemeine Erklärung der Menschenrechte, 1948, Artikel 5 und 11",
   "Innocence Project: Fallstatistiken, laufend aktualisiert"
  ],
  "literatur": [
   {
    "titel": "Überwachen und Strafen",
    "autor": "Michel Foucault",
    "jahr": "1975",
    "warum": "Die einflussreichste Deutung des Übergangs von der Körperstrafe zum Gefängnis. Anspruchsvoll, teils überspitzt — aber man liest Strafrecht danach anders."
   },
   {
    "titel": "Über Verbrechen und Strafen",
    "autor": "Cesare Beccaria",
    "jahr": "1764",
    "warum": "Schmal, klar und in wenigen Jahren wirksamer als jede spätere Reformschrift. Immer noch lesbar."
   },
   {
    "titel": "Die Geschichte der Strafe",
    "autor": "Wolfgang Schild",
    "jahr": "1997",
    "warum": "Deutschsprachiger Überblick mit den Verfahren, Gerichten und Hinrichtungsarten im Detail."
   }
  ]
 },
 {
  "id": "gift",
  "titel": "Gift & Giftmischerinnen",
  "kurz": "Die Waffe der Ohnmächtigen — und der Grund, warum die Chemie ins Gerichtssaal kam.",
  "einleitung": "Gift hatte über Jahrhunderte einen besonderen Schrecken, weil es nicht nachweisbar war: Wer vergiftet wurde, starb wie an einer Krankheit, und wer vergiftete, brauchte keine Kraft, keine Waffe und keine Gelegenheit zum Zweikampf. Deshalb galt Gift als Waffe von Frauen, Sklaven und Höflingen — und deshalb wurde der Vorwurf so oft erhoben, wo nichts zu beweisen war. Die Geschichte des Giftes ist zur Hälfte eine Geschichte der Verdächtigungen und erst ab dem 19. Jahrhundert eine der Nachweise.",
  "stationen": [
   {
    "jahr": -1550,
    "titel": "Der Papyrus Ebers kennt die Wirkstoffe",
    "text": "Die ägyptische Sammlung nennt Bleisalze, Opium, Bilsenkraut und Schierling mit Dosierungen. Heilmittel und Gift sind darin dieselben Stoffe in verschiedener Menge — eine Unterscheidung, die erst Paracelsus im 16. Jahrhundert auf den Satz brachte, allein die Dosis mache das Gift."
   },
   {
    "jahr": -800,
    "titel": "Vergiftete Pfeile bei Homer",
    "text": "In der Odyssee reist Odysseus nach Ephyra, um ein Gift für seine Pfeilspitzen zu erhalten – und wird abgewiesen, weil der Gastgeber die Götter fürchtet. Die Stelle ist die früheste griechische Erwähnung des Pfeilgifts und zeigt schon die Bewertung, die dem Gift bis heute anhaftet: als Waffe, die man führt, ohne sich zu zeigen. Das griechische Wort für Gift, tóxikon, kommt vom Bogen."
   },
   {
    "jahr": -399,
    "titel": "Sokrates trinkt den Schierling",
    "text": "Athen vollstreckt Todesurteile mit gefleckten Schierling. Platons Schilderung — aufsteigende Lähmung von den Füßen, klarer Kopf bis zuletzt — passt pharmakologisch zum Wirkstoff Coniin und gilt als medizinisch glaubwürdig, auch wenn Platon literarisch gestaltet."
   },
   {
    "jahr": -331,
    "titel": "Roms erster Giftprozess",
    "text": "Livius berichtet von einer Häufung plötzlicher Todesfälle in Rom, die auf Gift zurückgeführt wurden; nach seiner Darstellung wurden über hundert Frauen verurteilt. Die Erzählung folgt einem Muster, das in der römischen Überlieferung immer wiederkehrt: Eine Epidemie ohne erkennbare Ursache wird als Verbrechen erklärt, und die Beschuldigten sind Frauen. Ob überhaupt vergiftet wurde, lässt sich aus dem Text nicht entscheiden."
   },
   {
    "jahr": -330,
    "titel": "Theophrast beschreibt die Wirkung",
    "text": "In seiner Pflanzenkunde beschreibt Theophrast Schierling, Eisenhut und Mohn samt Wirkung, Dosis und Zubereitung – nicht als Zauber, sondern als Eigenschaft der Pflanze. Damit steht am Anfang der Giftkunde derselbe Text, der am Anfang der Botanik steht. Die Trennung zwischen Heilmittel und Gift ist in dieser Tradition von vornherein eine Frage der Menge."
   },
   {
    "jahr": -63,
    "titel": "Mithridates und das Gegengift",
    "text": "Der König von Pontos soll sich über Jahre an Gifte gewöhnt haben und ein Universalgegenmittel besessen haben, das Mithridatikum. Als er sich nach der Niederlage vergiften wollte, wirkte kein Gift mehr, und er ließ sich erstechen. Die Anekdote ist wohl Legende, das Rezept aber blieb: Mithridat wurde bis ins 18. Jahrhundert in Apotheken verkauft."
   },
   {
    "jahr": 54,
    "titel": "Locusta, Roms Giftmischerin von Staat",
    "text": "Tacitus und Sueton berichten, Agrippina habe Claudius mit vergifteten Pilzen töten lassen und Nero anschließend die Giftmischerin Locusta beschäftigt, um den Thronrivalen Britannicus zu beseitigen. Sie wurde nach Neros Sturz hingerichtet. Ob die Vergiftungen stattfanden, ist nicht beweisbar — bezeugt ist, dass am Kaiserhof mit dieser Möglichkeit gerechnet wurde.",
    "vertiefung": "kaiser-nero"
   },
   {
    "jahr": 77,
    "titel": "Plinius und die Gegenmittel",
    "text": "Plinius der Ältere sammelt in seiner Naturkunde hunderte angebliche Gegengifte, vom Rautenblatt bis zum Nashorn-Horn. Fast nichts davon wirkt. Der Wert der Sammlung liegt darin, dass sie zeigt, wie groß die Angst vor Gift in der römischen Oberschicht war – Vorkoster und Gegengifte gehören zum Haushalt wie Wachen."
   },
   {
    "jahr": 175,
    "titel": "Der Theriak",
    "text": "Galen stellt für Marc Aurel ein Vielstoffgemisch aus über sechzig Bestandteilen her, das gegen alle Gifte und Bisse schützen soll. Der Theriak wird zum bekanntesten Arzneimittel der nächsten anderthalb Jahrtausende, in Venedig noch im 18. Jahrhundert öffentlich gerührt. Wirksam war er nicht, aber er bindet die Giftkunde an die Apotheke statt an den Zauber."
   },
   {
    "jahr": 1140,
    "titel": "Der erste Gesetzesversuch",
    "text": "Roger II. von Sizilien verbietet den Verkauf von Arzneien ohne Prüfung — der Anfang der Apothekenaufsicht. Sie entstand nicht aus Sorge um Qualität, sondern weil derselbe Laden Gift und Medizin führte."
   },
   {
    "jahr": 1198,
    "titel": "Maimonides schreibt eine Anleitung",
    "text": "Der Arzt und Gelehrte Moses Maimonides verfasst im Auftrag eines Wesirs eine Abhandlung über Gifte und ihre Behandlung. Sie empfiehlt Erbrechen, Aussaugen der Wunde und Abbinden – Maßnahmen, die bei Schlangenbiss teilweise sinnvoll sind. Bemerkenswert ist die Form: eine praktische Handreichung für Laien, weil ein Arzt selten rechtzeitig da ist."
   },
   {
    "jahr": 1419,
    "titel": "Der Rat der Zehn führt Buch",
    "text": "Venedigs Sicherheitsrat unterhielt nachweislich Akten über Giftaufträge, mit Namen der Zielpersonen und Honorarangeboten — überliefert sind Beschlüsse, in denen über Angebote von Giftmischern beraten wird. Gift war hier kein Verbrechen aus Leidenschaft, sondern ein Instrument der Außenpolitik.",
    "vertiefung": "venedig"
   },
   {
    "jahr": 1503,
    "titel": "Die Borgia und die Cantarella",
    "text": "Cesare und Lucrezia Borgia gelten als berühmteste Giftmörder der Geschichte, und die Belege sind dünn. Das Gift Cantarella wird erst Jahrzehnte später beschrieben, in Formeln, die chemisch nicht funktionieren. Alexander VI. und Cesare erkrankten 1503 gleichzeitig schwer; heute gilt Malaria als wahrscheinlichste Ursache. Lucrezias Ruf stammt weitgehend aus der Propaganda gegner Familien und aus der Romantik des 19. Jahrhunderts.",
    "vertiefung": "renaissance"
   },
   {
    "jahr": 1531,
    "titel": "Sieden als Strafe für Gift",
    "text": "Englands Act of Poisoning erklärt Giftmord zum Hochverrat und schreibt das Sieden im Kessel vor. Die Härte hat einen Grund: Gift zerstörte das Vertrauen im Haushalt — Köchin, Diener, Ehefrau. Genau deshalb wurde es als Angriff auf die Ordnung selbst behandelt, nicht als Mord unter Gleichen."
   },
   {
    "jahr": 1538,
    "titel": "Paracelsus und die Dosis",
    "text": "Paracelsus formuliert in einer Verteidigungsschrift den Satz, alle Dinge seien Gift, und es komme allein auf die Menge an. Damit ist die Grundregel der Toxikologie ausgesprochen, zweihundert Jahre bevor sie messbar wird. Paracelsus selbst verabreichte Quecksilber und Arsen als Arznei – die Regel war für ihn eine Erlaubnis, nicht eine Warnung."
   },
   {
    "jahr": 1633,
    "titel": "Aqua Tofana",
    "text": "Um eine Neapolitanerin namens Giulia Tofana entsteht die Erzählung eines geschmacklosen Arsenpräparats, das Ehefrauen kaufen konnten. Belegt sind Prozesse gegen eine Gruppe von Giftverkäuferinnen in Rom in den 1650er Jahren; alles Weitere – die Zahl von sechshundert Opfern, das Fläschchen mit dem Heiligenbild – stammt aus späteren Erzählungen. Der Fall ist ein Beispiel dafür, wie ein knapper Aktenbestand eine große Legende tragen kann."
   },
   {
    "jahr": 1659,
    "titel": "Die Affaire des poisons",
    "text": "In Paris beginnt mit der Marquise de Brinvilliers, die Vater und Brüder mit Arsen tötete, die größte Giftaffäre Europas. Die Ermittlungen führen zu einem Netz von Wahrsagerinnen und Giftlieferantinnen um La Voisin und reichen bis an den Hof Ludwigs XIV. — die Mätresse Madame de Montespan wurde verdächtigt. 36 Menschen wurden hingerichtet, die Akten teils vom König verbrannt.",
    "vertiefung": "affaire-des-poisons"
   },
   {
    "jahr": 1775,
    "titel": "Arsen wird nachweisbar",
    "text": "Carl Wilhelm Scheele findet eine Reaktion, mit der Arsen chemisch angezeigt werden kann. Zum ersten Mal gibt es eine Antwort, die nicht auf Aussagen beruht. Bis dahin war das Erbschaftspulver — Arsenik, geschmacklos, in kleinen Mengen wie eine Magenerkrankung wirkend — praktisch straflos zu verwenden.",
    "vertiefung": "affaire-des-poisons"
   },
   {
    "jahr": 1814,
    "titel": "Orfila begründet ein Fach",
    "text": "Mathieu Orfila veröffentlicht in Paris seine Toxikologie und stellt sie auf Tierversuche: Wirkung, Symptom und Nachweis werden systematisch zusammengeführt. Aus der Sammlung von Rezepten und Anekdoten wird ein Fach, das vor Gericht auftreten kann. Orfila wird der erste Sachverständige, dessen Gutachten Urteile trägt – und dessen Irrtümer damit auch Urteile tragen."
   },
   {
    "jahr": 1836,
    "titel": "Der Marshsche Nachweis",
    "text": "James Marsh entwickelt einen Test, der noch winzige Arsenmengen in Gewebe sichtbar macht, ausgelöst durch einen Prozess, in dem er als Gutachter nichts beweisen konnte und der Angeklagte freikam. 1840 überführt der Test im Fall Lafarge in Frankreich erstmals eine Angeklagte. Die Toxikologie wird damit zum Fach — und Arsenmorde gehen messbar zurück.",
    "vertiefung": "affaire-des-poisons"
   },
   {
    "jahr": 1840,
    "titel": "Der Prozess Lafarge",
    "text": "Marie Lafarge wird in Frankreich wegen Arsenmordes an ihrem Mann verurteilt – im ersten großen Prozess, in dem der Marshsche Nachweis vor Gericht vorgeführt wird. Die Gutachter widersprachen sich: Der örtliche Apotheker fand Arsen, Orfila fand es in einer anderen Probe, ein Gegengutachter nicht. Der Fall machte die Chemie im Gerichtssaal berühmt und zeigte gleichzeitig, wie stark das Ergebnis von der Probe abhängt."
   },
   {
    "jahr": 1851,
    "titel": "Gift wird reglementiert",
    "text": "Der britische Arsenic Act verlangt Färbung von Arsenpulver, Registrierung des Verkaufs und Zeugen beim Kauf. Es ist die erste Regelung, die einen Stoff nicht verbietet, sondern seine Wege dokumentiert — dieselbe Logik, nach der heute Grundstoffe kontrolliert werden."
   },
   {
    "jahr": 1857,
    "titel": "Nicht bewiesen",
    "text": "In Glasgow endet der Prozess gegen Madeleine Smith mit dem schottischen Urteil not proven: Arsen im Körper des Toten war nachweisbar, Arsenkäufe der Angeklagten belegt, ein Zusammenhang nicht. Der Fall wird zum Musterbeispiel dafür, dass der chemische Nachweis eines Stoffes und der Nachweis einer Tat zwei verschiedene Dinge sind."
   },
   {
    "jahr": 1858,
    "titel": "Die Bonbons von Bradford",
    "text": "Ein Süßwarenhersteller streckt Pfefferminzbonbons mit einem billigen weißen Pulver, das der Gehilfe des Apothekers versehentlich als Arsentrioxid ausgibt; über zwanzig Menschen sterben, mehr als zweihundert werden krank. Der Vorfall war kein Mord, sondern eine Folge davon, dass Gifte und Lebensmittelzusätze im gleichen Regal standen. Er führte in Großbritannien zu den ersten Vorschriften über Abgabe und Kennzeichnung von Arzneistoffen."
   },
   {
    "jahr": 1889,
    "titel": "Tödliche Tapeten",
    "text": "Schweinfurter Grün, ein arsenhaltiges Pigment, färbte Tapeten, Kleider und Spielzeug. Ärzte berichteten über Jahrzehnte von Erkrankungen in grün tapezierten Zimmern; die Debatte endete erst mit dem Verzicht der Hersteller. Der bekannteste Verdacht betrifft Napoleons Tod auf St. Helena — in seinen Haaren wurde Arsen gefunden, doch der Wert liegt im Bereich der damaligen Umweltbelastung, und die Autopsie beschreibt Magenkrebs."
   },
   {
    "jahr": 1910,
    "titel": "Der Fall Crippen",
    "text": "In London werden in einem Keller menschliche Überreste gefunden; der Toxikologe William Willcox weist darin Hyoscin nach, ein Alkaloid, das der Verdächtige nachweislich gekauft hatte. Die Verurteilung Hawley Crippens gilt als erster Fall, in dem ein Alkaloid – nicht ein Metall – den Ausschlag gab. Eine DNA-Untersuchung der aufbewahrten Gewebeprobe stellte 2007 die Identität des Opfers in Frage; die Debatte darüber ist nicht abgeschlossen."
   },
   {
    "jahr": 1934,
    "titel": "Der Fall Nozière und die Grenzen des Gutachters",
    "text": "Violette Nozière vergiftete in Paris ihre Eltern; der Fall wurde zum Prozess über Glaubwürdigkeit, weil sie schweren Missbrauch durch den Vater angab. Die Toxikologie konnte die Tat beweisen, über das Motiv sagte sie nichts — die Grenze jeder forensischen Methode."
   },
   {
    "jahr": 1937,
    "titel": "Das Elixier, das nicht geprüft war",
    "text": "Ein US-Hersteller löst das Sulfonamid Sulfanilamid in Diethylenglykol, weil es sich darin gut löst und süß schmeckt; das Lösungsmittel ist nierentoxisch. Über hundert Menschen sterben, viele davon Kinder. Ein Jahr später verpflichtet ein neues Gesetz Hersteller erstmals, die Sicherheit eines Mittels vor dem Verkauf nachzuweisen – die moderne Arzneimittelzulassung beginnt mit einem Vergiftungsfall."
   },
   {
    "jahr": 1978,
    "titel": "Der Regenschirm auf der Waterloo Bridge",
    "text": "Der bulgarische Exilschriftsteller Georgi Markow stirbt in London, nachdem ihm eine winzige, mit Rizin gefüllte Metallkugel ins Bein geschossen wurde. Die Kugel wurde in der Autopsie gefunden. Der Fall zeigt die neue Form: Gift nicht mehr im Haushalt, sondern als Werkzeug von Staaten."
   },
   {
    "jahr": 2004,
    "titel": "Dioxin im Wahlkampf",
    "text": "Der ukrainische Präsidentschaftskandidat Wiktor Juschtschenko erkrankt mitten im Wahlkampf schwer; Wiener Ärzte weisen eine extrem hohe Dioxinkonzentration in seinem Blut nach, das Gesicht bleibt monatelang entstellt. Der medizinische Befund ist unstrittig, die Täterschaft nie geklärt und strafrechtlich nicht aufgearbeitet. Der Fall zeigt, was moderne Analytik kann und wo sie endet: Sie identifiziert den Stoff, nicht die Hand."
   },
   {
    "jahr": 2006,
    "titel": "Polonium und die Grenze des Nachweisbaren",
    "text": "Alexander Litwinenko stirbt in London an Polonium-210, einem Alphastrahler, der in gewöhnlichen Untersuchungen unsichtbar bleibt; erst ein Zufallsverdacht führte zur richtigen Messung. Die britische Untersuchungskommission kam 2016 zu dem Ergebnis, die Tat sei wahrscheinlich vom russischen Staat gebilligt worden; Russland bestreitet das."
   },
   {
    "jahr": 2018,
    "titel": "Nowitschok in Salisbury",
    "text": "Sergej und Julia Skripal werden mit einem Nervenkampfstoff angegriffen und überleben; eine unbeteiligte Frau stirbt später an einem weggeworfenen Behälter. Die OVCW bestätigte den Stoff. Die Episode führte zur Ausweitung der Chemiewaffenkonvention auf diese Stoffgruppe — das Recht folgt dem Nachweis, wie schon 1836."
   }
  ],
  "strittig": "Bei kaum einem Deliktfeld sind die berühmten Fälle so unsicher wie hier. Die Borgia-Gifte, Locustas Aufträge, Napoleons Arsen und die Beteiligung der Madame de Montespan sind alle bestritten; bei mehreren wurden die Akten vernichtet. Ebenfalls umstritten ist die verbreitete Aussage, Gift sei überwiegend eine Frauenwaffe: Statistisch stimmt es, dass Frauen unter überführten Giftmördern häufiger vertreten sind als bei anderen Tötungsdelikten, doch die absolute Zahl ist klein, und historische Aufklärungsquoten sind zu niedrig, um daraus ein Muster zu belegen. Der Vorwurf der Giftmischerei wurde außerdem nachweislich als Mittel gegen unbequeme Frauen benutzt.",
  "quellen": [
   "Encyclopaedia Britannica: poison; toxicology; Affair of the Poisons",
   "James Marsh, Edinburgh New Philosophical Journal 1836: Account of a method of separating small quantities of arsenic",
   "The Litvinenko Inquiry, Report of Sir Robert Owen, 2016",
   "OPCW: Report on the Salisbury incident, 2018",
   "Tacitus: Annalen, Bücher 12 und 13"
  ],
  "literatur": [
   {
    "titel": "Das Handbuch der Giftmörder",
    "autor": "Neil Bradbury",
    "jahr": "2022",
    "warum": "Elf Gifte, elf Fälle, und jeweils die Chemie dahinter verständlich erklärt. Der beste Einstieg."
   },
   {
    "titel": "Das Jahrhundert des Giftes",
    "autor": "Deborah Blum",
    "jahr": "2010",
    "warum": "Wie die Gerichtstoxikologie in New York entstand — spannend erzählt und methodisch genau."
   },
   {
    "titel": "Die Affäre der Gifte",
    "autor": "Anne Somerset",
    "jahr": "2003",
    "warum": "Der Pariser Skandal in ganzer Länge, mit dem, was die Akten hergeben und was nicht."
   }
  ]
 },
 {
  "id": "folter",
  "titel": "Folter & Hinrichtung",
  "kurz": "Nicht Ausnahme, sondern Verfahren — und warum es abgeschafft wurde, lange bevor es verschwand.",
  "einleitung": "Folter war über Jahrhunderte kein Verbrechen, sondern ein geregelter Verfahrensschritt: Sie stand in Gesetzbüchern, hatte Zuständigkeiten, Protokolle und Höchstgrenzen. Genau das macht sie erklärungsbedürftig — nicht die Grausamkeit einzelner, sondern die Logik eines Beweisrechts, das ohne Geständnis nicht verurteilen konnte. Und die Hinrichtung war bis ins 19. Jahrhundert ein öffentliches Ereignis mit Publikum, Ritual und Predigt. Die Abschaffung beider begann nicht mit Mitleid, sondern mit Zweifeln an ihrem Nutzen. Warnung: Dieser Abschnitt beschreibt Gewalt sachlich, aber ohne Ausschmückung.",
  "stationen": [
   {
    "jahr": -1754,
    "titel": "Die Wasserprobe im Kodex Hammurapi",
    "text": "Der Kodex sieht vor, dass ein Beschuldigter, gegen den kein Zeuge auftritt, in den Fluss geworfen wird: Geht er unter, gilt er als schuldig. Das ist keine Folter zur Erlangung eines Geständnisses, sondern ein Gottesurteil – die Entscheidung wird an eine Instanz abgegeben, die nicht irren kann. Wo das Verfahren fehlt, tritt das Ordal an seine Stelle; das bleibt drei Jahrtausende so."
   },
   {
    "jahr": -519,
    "titel": "Dareios lässt es in Stein schreiben",
    "text": "Die Inschrift von Behistun zählt auf, was mit den Aufständischen geschah: Nasen, Ohren und Zunge abgeschnitten, ein Auge ausgestochen, danach zur Schau gestellt und gepfählt. Der Text ist keine Anklage, sondern die Selbstdarstellung des Königs. Grausamkeit ist hier kein Ermittlungsmittel, sondern eine Botschaft an alle, die lesen oder zuhören können."
   },
   {
    "jahr": -450,
    "titel": "Folter nur gegen Unfreie",
    "text": "In Athen und später in Rom durfte an Sklaven gefoltert werden, an Bürgern nicht. Die Aussage eines Sklaven galt erst unter Folter als verwertbar — man traute ihr sonst nicht. Der Rang entschied also, ob ein Mensch als Zeuge oder als Erkenntnisquelle behandelt wurde."
   },
   {
    "jahr": 33,
    "titel": "Kreuzigung",
    "text": "Die römische Hinrichtungsart für Sklaven und Aufrührer, angelegt auf langes öffentliches Sterben. Cicero nannte sie die grausamste und schändlichste Strafe und forderte, das Wort in Anwesenheit römischer Bürger nicht auszusprechen. Konstantin schaffte sie im 4. Jahrhundert ab — ein Beispiel dafür, wie Religion eine Strafform beendete, weil sie zum eigenen Symbol geworden war.",
    "vertiefung": "kaiser-nero"
   },
   {
    "jahr": 438,
    "titel": "Der Kodex regelt die Peinigung",
    "text": "Der Codex Theodosianus enthält Vorschriften, in welchen Fällen und wie lange gefoltert werden darf und wer davon ausgenommen ist — Kinder, Schwangere, hohe Beamte. Aus heutiger Sicht ein Widerspruch, aus damaliger eine Begrenzung."
   },
   {
    "jahr": 866,
    "titel": "Ein Papst verbietet das Foltergeständnis",
    "text": "In einem Antwortschreiben an die Bulgaren erklärt Nikolaus I., ein unter Folter erzwungenes Geständnis sei wertlos: Wer die Schmerzen nicht erträgt, sagt, was der Peiniger hören will, und wer sie erträgt, bleibt ungestraft. Das Argument ist genau dasselbe, mit dem die Folter neunhundert Jahre später abgeschafft wird. Es war also nicht unbekannt – es war nur nicht durchsetzbar."
   },
   {
    "jahr": 1215,
    "titel": "Warum die Folter zurückkam",
    "text": "Mit dem Verbot der Gottesurteile brauchte das kontinentale Verfahren einen neuen Königsbeweis. Es wurde das Geständnis. Damit war die Folter nicht Ausdruck von Rohheit, sondern die logische Folge einer Beweisregel: Wo ohne Geständnis nicht verurteilt werden konnte, musste das Geständnis beschafft werden.",
    "vertiefung": "hexenverfolgung"
   },
   {
    "jahr": 1252,
    "titel": "Ad extirpanda",
    "text": "Innozenz IV. erlaubt die Folter in Ketzerprozessen. Formal galten Einschränkungen: keine Verstümmelung, kein Todesrisiko, nur einmalige Anwendung. In der Praxis wurde die Einmaligkeit umgangen, indem man die Sitzung als Fortsetzung derselben Anwendung führte.",
    "vertiefung": "hexenverfolgung"
   },
   {
    "jahr": 1310,
    "titel": "Die Templer widerrufen",
    "text": "Vor der päpstlichen Kommission in Paris nehmen dutzende Templer ihre Geständnisse zurück und geben an, sie seien gefoltert worden. Kurz darauf werden vierundfünfzig von ihnen als Rückfällige verbrannt – der Widerruf selbst wurde zum Beweis. Der Vorgang zeigt die Falle des Verfahrens: Innerhalb seiner Logik gab es keine Aussage, die entlasten konnte."
   },
   {
    "jahr": 1478,
    "titel": "Die spanische Inquisition — und was sie nicht war",
    "text": "Die Behörde verfolgte vor allem getaufte Juden und Muslime, die des Rückfalls verdächtigt wurden. Ihr Ruf als schlimmste Institution Europas geht auf niederländische und englische Kriegspropaganda des 16. Jahrhunderts zurück. Die Aktenauswertung durch Henry Kamen ergibt: Folter war in einem Bruchteil der Verfahren belegt, Todesurteile in rund zwei Prozent — grausam genug, aber ein anderes Bild als die Legende. Umgekehrt war die Behörde in einem Punkt fortgeschritten: Sie protokollierte alles, weshalb wir es überhaupt wissen."
   },
   {
    "jahr": 1487,
    "titel": "Der Hexenhammer als Handbuch",
    "text": "Heinrich Kramers Malleus Maleficarum enthält nicht nur eine Dämonenlehre, sondern eine Verfahrensanleitung: wie zu befragen, wie zu drohen, wie ein Widerruf zu behandeln sei. Das Buch hatte nie amtliche Geltung und wurde von Theologen kritisiert, verbreitete sich aber im Druck massenhaft. Seine Wirkung liegt weniger im Glauben als in der Technik."
   },
   {
    "jahr": 1532,
    "titel": "Regeln für die peinliche Befragung",
    "text": "Die Carolina schreibt vor, dass ohne hinreichende Anzeigen nicht gefoltert werden darf, dass das Geständnis anschließend außerhalb der Folter wiederholt und durch Tatdetails bestätigt werden muss. Die Vorschriften wurden vielfach missachtet — aber sie zeigen, dass die Unzuverlässigkeit erzwungener Aussagen bekannt war.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1563,
    "titel": "Weyer bestreitet die Grundlage",
    "text": "Der Arzt Johann Weyer argumentiert, die angeklagten Frauen seien nicht Hexen, sondern krank, verwirrt oder eingebildet – und ihre Geständnisse Produkte der Folter. Er hält am Teufel fest, entzieht aber den Prozessen ihren Tatbestand. Weyer wird heftig angegriffen, unter anderem von Jean Bodin, und bleibt lange in der Minderheit."
   },
   {
    "jahr": 1600,
    "titel": "Der Scharfrichter als Handwerk",
    "text": "Hinrichtungen wurden von Berufsleuten vollstreckt, die zugleich Wunden behandelten, Abfälle entsorgten und als unehrlich galten — ihre Kinder durften keine Zunft betreten. Die Aufzeichnungen des Nürnberger Scharfrichters Franz Schmidt aus 45 Dienstjahren sind erhalten und die genaueste Quelle über die Praxis: 361 Hinrichtungen, mit Namen, Tat und Verfahren."
   },
   {
    "jahr": 1631,
    "titel": "Spee widerlegt das Verfahren",
    "text": "Friedrich Spee zeigt in der Cautio Criminalis, dass ein Verfahren, das jeden überführen kann, niemanden überführt: Unter Folter gesteht jeder, und aus dem Geständnis folgen die nächsten Namen. Er greift nicht die Moral an, sondern die Beweislogik — deshalb wirkte er.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1689,
    "titel": "Grausame und ungewöhnliche Strafen",
    "text": "Die englische Bill of Rights verbietet cruel and unusual punishments. Der Satz richtet sich zunächst gegen willkürlich überhöhte Strafen einzelner Richter, nicht gegen die Folter, die in England ohnehin nur mit königlicher Sondervollmacht angewandt wurde. Über den Umweg der amerikanischen Verfassung wird daraus die Formel, mit der Gerichte bis heute Strafen für unzulässig erklären."
   },
   {
    "jahr": 1740,
    "titel": "Preußen schafft die Folter ab",
    "text": "Friedrich II. beendet mit einem Erlass die Folter in Preußen fast vollständig; endgültig 1754. Es folgen Sachsen, Österreich 1776, Frankreich 1780. Die Begründung ist selten Mitleid, meist Nutzlosigkeit — die Geständnisse taugten nicht.",
    "vertiefung": "beccaria"
   },
   {
    "jahr": 1757,
    "titel": "Die letzte öffentliche Marter in Frankreich",
    "text": "Die Vierteilung Robert-François Damiens' nach seinem Attentat auf Ludwig XV. wurde vor großem Publikum vollzogen und dauerte Stunden. Foucault beginnt sein Buch mit dieser Szene, um den Bruch zu zeigen: Vierzig Jahre später richtete derselbe Staat mit einer Maschine in Sekunden.",
    "vertiefung": "beccaria"
   },
   {
    "jahr": 1766,
    "titel": "Der Fall Calas",
    "text": "Der protestantische Kaufmann Jean Calas wird in Toulouse gerädert, nachdem man ihm den Mord an seinem Sohn zur Last gelegt hatte; Voltaire treibt eine dreijährige Kampagne, bis das Urteil aufgehoben wird. Es ist einer der ersten Fälle, in denen öffentliche Meinung ein Gerichtsurteil kassiert. Voltaire ging es nicht nur um Calas, sondern um den Zusammenhang von Religionshass und Justizirrtum."
   },
   {
    "jahr": 1772,
    "titel": "Pressen bis zum Geständnis endet",
    "text": "England kannte keine Folter zur Wahrheitsfindung, aber die peine forte et dure: Wer sich weigerte, sich schuldig oder nicht schuldig zu erklären, wurde unter Gewichten gepresst, bis er es tat oder starb. Weil bei einem Urteil das Vermögen einzog, war das Schweigen bis zum Tod manchmal die bessere Wahl für die Familie. 1772 wird das Pressen abgeschafft und Schweigen als Nicht-schuldig gewertet."
   },
   {
    "jahr": 1789,
    "titel": "Die Guillotine als Gleichheitsforderung",
    "text": "Joseph-Ignace Guillotin schlug ein mechanisches Verfahren vor, damit alle Verurteilten gleich und schnell starben — vorher wurden Adlige enthauptet und Bürgerliche gehängt oder gerädert. Das Gerät war als humanitärer Fortschritt gedacht und wurde zum Symbol des Terrors: Zwischen 1793 und 1794 wurden allein in Paris rund 2.600 Menschen damit hingerichtet.",
    "vertiefung": "franzoesische-revolution"
   },
   {
    "jahr": 1793,
    "titel": "Hinrichtung als Massenverfahren",
    "text": "In der Schreckensherrschaft wird die Todesstrafe zum Verwaltungsvorgang mit Quoten und beschleunigten Verfahren; das Gesetz vom Juni 1794 strich die Verteidigung. Das Muster kehrt im 20. Jahrhundert wieder, wo Massentötung nicht mehr öffentlich, sondern bürokratisch organisiert wird.",
    "vertiefung": "franzoesische-revolution"
   },
   {
    "jahr": 1832,
    "titel": "Das Ende des öffentlichen Rades",
    "text": "In Europa verschwinden Rädern, Vierteilen und Verbrennen aus den Gesetzbüchern; Hinrichtungen werden zunehmend hinter Mauern verlegt — England 1868, Preußen 1851. Der Grund war nicht nur Milde: Die Behörden fürchteten die Menge, die zu Hinrichtungen kam, und den Spott, den missglückte Vollstreckungen auslösten."
   },
   {
    "jahr": 1874,
    "titel": "Die eiserne Jungfrau ist eine Fälschung",
    "text": "Das berühmte Folterinstrument mit Innenstacheln wurde erstmals 1793 beschrieben und in Nürnberg im 19. Jahrhundert für Schaustellungen zusammengebaut, teils aus alten Einzelteilen. Kein mittelalterlicher Beleg existiert. Dasselbe gilt für einen Großteil der Instrumente in Folterkammer-Museen — eine Erfindung der Schauergeschichte, nicht des Mittelalters.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1929,
    "titel": "Genfer Regeln für Gefangene",
    "text": "Das Genfer Abkommen verbietet Zwang zur Aussage bei Kriegsgefangenen; sie müssen nur Name, Rang und Nummer angeben. Es ist der erste völkerrechtliche Schritt, dem 1949 die vier Abkommen und 1984 die Antifolterkonvention folgen."
   },
   {
    "jahr": 1948,
    "titel": "Artikel 5",
    "text": "Die Allgemeine Erklärung der Menschenrechte verbietet Folter und grausame, unmenschliche oder erniedrigende Behandlung – ohne Ausnahme, ohne Notstandsklausel. Die Erklärung ist rechtlich nicht bindend, aber ihr Wortlaut geht fast unverändert in die Europäische Menschenrechtskonvention, den UN-Zivilpakt und die Antifolterkonvention ein."
   },
   {
    "jahr": 1961,
    "titel": "Warum Menschen quälen",
    "text": "Stanley Milgram lässt Versuchspersonen unter Anweisung eines Versuchsleiters angebliche Stromschläge verabreichen; ein großer Teil geht bis zur höchsten Stufe. Die Deutung ist umstritten – der Versuchsleiter drängte stärker als berichtet, und die Teilnehmenden zweifelten teilweise am Aufbau. Was der Versuch belegt, ist schwächer als die berühmte Behauptung, aber nicht harmlos: Gehorsam gegenüber einer als legitim erlebten Instanz senkt die Schwelle deutlich."
   },
   {
    "jahr": 1978,
    "titel": "Die fünf Techniken vor Gericht",
    "text": "Der Europäische Gerichtshof für Menschenrechte verurteilt das Vereinigte Königreich wegen der Behandlung nordirischer Gefangener: Wandstehen, Kapuze, Lärm, Schlaf- und Nahrungsentzug. Das Gericht nennt es unmenschliche Behandlung, nicht Folter – eine Unterscheidung, die später zur Rechtfertigung ähnlicher Methoden herangezogen wurde. Der irische Antrag auf Revision dieses Punkts wurde 2018 abgelehnt."
   },
   {
    "jahr": 1984,
    "titel": "Die Antifolterkonvention",
    "text": "Die UN-Konvention verbietet Folter ausnahmslos — auch im Krieg, auch im Notstand, auch auf Befehl. Sie ist eines der wenigen Verbote des Völkerrechts, das keine Abwägung zulässt. Über 170 Staaten sind beigetreten."
   },
   {
    "jahr": 1999,
    "titel": "Ein Höchstgericht verbietet die Ausnahme",
    "text": "Israels Oberster Gerichtshof erklärt körperliche Druckmittel bei Verhören des Inlandsgeheimdienstes für unzulässig und stellt fest, dass der Dienst dazu keine gesetzliche Grundlage habe. Das Urteil lässt offen, ob der Gesetzgeber eine schaffen könnte, und bezieht sich im Einzelfall auf den strafrechtlichen Notstand. Es gilt als Beispiel dafür, wie ein Gericht mitten in einer Sicherheitslage entscheidet – und als Beispiel dafür, wie schmal die dabei gelassene Tür ist."
   },
   {
    "jahr": 2004,
    "titel": "Warum das Verbot ausnahmslos ist",
    "text": "Die Bilder aus Abu Ghraib und die Debatte über verschärfte Verhörmethoden lösten die Frage neu aus, ob Folter in Ausnahmefällen zulässig sei. Der Bericht des US-Senats von 2014 kam zu dem Ergebnis, dass die Methoden keine verwertbaren Erkenntnisse brachten, die nicht anders zu erlangen waren — dasselbe Ergebnis, das Spee 1631 und die preußischen Juristen 1740 notierten."
   },
   {
    "jahr": 2014,
    "titel": "Ein Parlament prüft den eigenen Geheimdienst",
    "text": "Der Geheimdienstausschuss des US-Senats veröffentlicht die Zusammenfassung eines mehrtausendseitigen Berichts über die Verhörmethoden der CIA nach 2001. Kernbefund: Die Methoden waren härter als dargestellt, die Aufsicht mangelhaft und die behaupteten Erkenntnisgewinne nicht belegt. Der Bericht selbst bleibt größtenteils geheim; die Zusammenfassung ist die ausführlichste amtliche Aufarbeitung eines Folterprogramms durch das eigene Parlament."
   }
  ],
  "strittig": "Die Zahl der Hinrichtungen in Europa vor 1800 lässt sich nur regional schätzen; überregionale Summen in populären Darstellungen sind Hochrechnungen. Die Wirkung der Todesstrafe auf Kriminalität ist empirisch umstritten, wobei die Mehrzahl der Vergleichsstudien keinen Abschreckungseffekt findet. Bei der spanischen Inquisition stehen Kamens Aktenauswertung und ältere, deutlich höhere Zahlen nebeneinander; die Größenordnung der Todesurteile gilt heute als geklärt, die Häufigkeit der Folter weniger. Und die Frage, ob Folter je verlässliche Erkenntnisse erbringt, wird von Nachrichtendiensten teils anders beantwortet als vom Senatsbericht 2014 — die Beleglage stützt den Bericht.",
  "quellen": [
   "Encyclopaedia Britannica: torture; capital punishment; Spanish Inquisition",
   "UN-Konvention gegen Folter, 1984, Artikel 2",
   "Constitutio Criminalis Carolina, 1532, Artikel 20 und 58",
   "Henry Kamen: The Spanish Inquisition – A Historical Revision",
   "Senate Select Committee on Intelligence: Study of the CIA's Detention and Interrogation Program, 2014"
  ],
  "literatur": [
   {
    "titel": "Der Scharfrichter",
    "autor": "Joel F. Harrington",
    "jahr": "2013",
    "warum": "Rekonstruiert das Leben des Nürnberger Scharfrichters Franz Schmidt aus seinem eigenen Tagebuch. Menschlich und ohne Sensationslust."
   },
   {
    "titel": "Überwachen und Strafen",
    "autor": "Michel Foucault",
    "jahr": "1975",
    "warum": "Beginnt mit der Hinrichtung Damiens' und fragt, warum die Körperstrafe verschwand. Die einflussreichste Antwort, wenn auch nicht die einzige."
   },
   {
    "titel": "Torture and the Law of Proof",
    "autor": "John H. Langbein",
    "jahr": "1977",
    "warum": "Der Nachweis, dass Folter aus einer Beweisregel folgte und mit deren Änderung verschwand. Schmal und zwingend."
   }
  ]
 },
 {
  "id": "kulte",
  "titel": "Kulte & Sekten",
  "kurz": "Wie geschlossene Gruppen entstehen, was sie zusammenhält — und wann der Vorwurf selbst zur Waffe wird.",
  "einleitung": "Der Vorwurf, eine Gruppe sei ein gefährlicher Geheimkult, ist älter als jeder Kult: Rom erhob ihn gegen Bacchusanhänger und später gegen Christen, das Christentum gegen Ketzer, Kolonialverwaltungen gegen einheimische Bünde. Deshalb braucht dieser Querschnitt zwei Blicke gleichzeitig — auf die Gruppen, in denen Menschen tatsächlich zu Schaden kamen, und auf die Verfahren, mit denen Behörden Minderheiten zu Verschwörern machten. Beides steht hier nebeneinander, und es ist jeweils vermerkt, worauf sich unser Wissen stützt.",
  "stationen": [
   {
    "jahr": -450,
    "titel": "Die Mysterien von Eleusis",
    "text": "Der Kult der Demeter in Eleusis nahm über Jahrhunderte tausende Eingeweihte auf – Bürger, Frauen und Sklaven – und verpflichtete alle zur Verschwiegenheit über das, was im Inneren geschah. Diese Schweigepflicht wurde so gut gehalten, dass wir bis heute nicht wissen, was gezeigt wurde. Der Kult war nicht verboten, sondern staatlich getragen: Geheimhaltung allein macht eine Gruppe nicht verdächtig."
   },
   {
    "jahr": -415,
    "titel": "Der Mysterienskandal in Athen",
    "text": "Kurz vor der Sizilienexpedition werden in Athen nachts Hermenstatuen beschädigt; im Zuge der Ermittlungen wird auch angezeigt, jemand habe die eleusinischen Mysterien in einem Privathaus nachgespielt. Alkibiades wird angeklagt, flieht und wechselt zum Feind. Der Vorgang zeigt früh, wie leicht ein Vorwurf religiöser Abweichung politisch verwendbar ist."
   },
   {
    "jahr": -186,
    "titel": "Rom verbietet die Bacchanalien",
    "text": "Der Senat verbietet den Bacchuskult in Italien; ein erhaltener Bronzeerlass regelt die Einzelheiten. Livius schildert nächtliche Verbrechen, Vergiftungen und Verschwörung — die Vorwürfe folgen dem Muster, das später gegen Christen, Juden und Ketzer wiederkehrt. Was tatsächlich stattfand, wissen wir nicht; belegt ist nur die Repression, mit tausenden Verurteilungen.",
    "vertiefung": "roemische-republik"
   },
   {
    "jahr": 64,
    "titel": "Die Christen als Sekte",
    "text": "Nach dem Brand Roms wurden Christen als Brandstifter hingerichtet. Tacitus nennt ihren Glauben einen verderblichen Aberglauben und berichtet gleichzeitig, sie seien nicht des Brandes, sondern des Hasses gegen das Menschengeschlecht überführt worden. Die Vorwürfe gegen sie — Kindermord, Kannibalismus, Inzest — sind dieselben, die Christen später gegen andere erhoben.",
    "vertiefung": "kaiser-nero"
   },
   {
    "jahr": 170,
    "titel": "Die neue Prophetie",
    "text": "In Phrygien treten Montanus und zwei Prophetinnen mit unmittelbaren Offenbarungen auf, fordern strenge Askese und erwarten das nahe Ende. Die entstehende Kirche reagiert nicht auf die Lehre, sondern auf die Struktur: Wer direkt von Gott hört, braucht keinen Bischof. Die Auseinandersetzung mit dem Montanismus ist einer der Vorgänge, in denen sich Amt gegen Charisma durchsetzt."
   },
   {
    "jahr": 250,
    "titel": "Mani und eine Weltreligion, die verschwand",
    "text": "Mani verkündet im Sassanidenreich eine Lehre, die Elemente aus Christentum, Zoroastrismus und Buddhismus verbindet, und schreibt seine Schriften selbst – gegen die Verfälschung durch Schüler. Der Manichäismus breitet sich von Nordafrika bis China aus und wird über Jahrhunderte verfolgt, bis er erlischt. Lange kannte man ihn fast nur aus den Schriften seiner Gegner; erst Handschriftenfunde des 20. Jahrhunderts geben die eigene Stimme zurück."
   },
   {
    "jahr": 385,
    "titel": "Die erste Hinrichtung wegen Ketzerei",
    "text": "Der spanische Asket Priscillian wird in Trier auf Betreiben von Amtsbrüdern und mit weltlichem Urteil hingerichtet – wegen Zauberei, nachdem der Vorwurf der Häresie allein nicht ausreichte. Ambrosius und Martin von Tours protestieren gegen das Verfahren. Der Fall markiert die Verbindung, die für die nächsten anderthalb Jahrtausende bestimmend wird: Der Vorwurf kommt von der Kirche, die Vollstreckung vom Staat."
   },
   {
    "jahr": 950,
    "titel": "Die Bogomilen",
    "text": "In Bulgarien entsteht eine Bewegung, die die sichtbare Welt als Werk eines bösen Schöpfers deutet und Kirche, Sakramente und Herrschaft ablehnt. Sie breitet sich über den Balkan bis nach Italien und Südfrankreich aus. Fast alles, was wir über die Lehre wissen, stammt aus Widerlegungsschriften – ein wiederkehrendes Problem: Die Quellen zu abweichenden Gruppen sind meist von denen geschrieben, die sie beseitigen wollten."
   },
   {
    "jahr": 1022,
    "titel": "Orléans",
    "text": "In Orléans lässt König Robert II. eine Gruppe von Klerikern verbrennen, die abweichende Lehren vertreten haben soll – der erste bekannte Ketzerbrand des lateinischen Mittelalters. Die Berichte widersprechen sich in fast allem: in der Lehre, in der Zahl, im Anlass. Deutlich ist nur, dass hier ein Vorgehen erfunden wird, das später Routine wird."
   },
   {
    "jahr": 1090,
    "titel": "Die Nizariten und das Wort Assassine",
    "text": "Hasan-i Sabbah gründete in der Bergfestung Alamut eine schiitische Gemeinschaft, die politische Morde als Mittel gegen weit stärkere Gegner einsetzte — Täter handelten öffentlich und rechneten mit dem eigenen Tod. Die Geschichten von Haschischrauschen und einem vorgetäuschten Paradiesgarten stammen von Marco Polo und späteren Autoren, nicht aus nizaritischen Quellen; Alamuts Bibliothek wurde 1256 von den Mongolen verbrannt. Das Wort Assassine geht auf eine abwertende Fremdbezeichnung zurück.",
    "vertiefung": "assassinen"
   },
   {
    "jahr": 1209,
    "titel": "Der Albigenserkreuzzug",
    "text": "Gegen die Katharer in Südfrankreich wird ein Kreuzzug innerhalb der Christenheit geführt, mit Massakern wie in Béziers. Die Katharer werden fast ausschließlich durch die Akten ihrer Verfolger überliefert — ein Teil der neueren Forschung bestreitet inzwischen, dass sie eine organisierte Gegenkirche mit einheitlicher Lehre waren, und sieht darin eine Konstruktion der Inquisitoren.",
    "vertiefung": "kreuzzuege"
   },
   {
    "jahr": 1260,
    "titel": "Die Geißler",
    "text": "Von Perugia aus zieht eine Bewegung durch Italien, deren Anhänger sich öffentlich geißeln, um eine erwartete Katastrophe abzuwenden. Während der Pest 1349 kehrt sie in größerem Umfang zurück, jetzt mit eigenen Liedern, eigener Ordnung und ohne Priester – und vielerorts mit Gewalt gegen Juden. Papst und Obrigkeiten verbieten die Züge, weil eine Buße ohne Kirche gefährlicher schien als keine Buße."
   },
   {
    "jahr": 1307,
    "titel": "Die Templer",
    "text": "Philipp IV. von Frankreich lässt die Templer an einem Tag verhaften und der Ketzerei, Sodomie und Götzenverehrung anklagen. Die Geständnisse entstanden unter Folter und wurden widerrufen, sobald die Folter aussetzte. Das 2007 veröffentlichte Chinon-Pergament zeigt, dass Papst Clemens V. die Führung 1308 insgeheim absolvierte. Der König hatte Schulden beim Orden; das Vermögen fiel an die Krone.",
    "vertiefung": "kreuzfahrerstaaten"
   },
   {
    "jahr": 1420,
    "titel": "Der Berg Tabor",
    "text": "Radikale Hussiten gründen in Böhmen die Stadt Tábor, schaffen Abgaben und Privateigentum weitgehend ab und erwarten die Wiederkunft Christi. Als sie ausbleibt, wird die Gemeinschaft zur militärischen Macht und schlägt mehrere Kreuzzugsheere. Der Fall zeigt beides: wie eine Endzeiterwartung eine Gesellschaft neu ordnen kann, und wie sie nach dem ausgebliebenen Termin weiterläuft."
   },
   {
    "jahr": 1534,
    "titel": "Das Täuferreich in Münster",
    "text": "Radikale Täufer übernehmen die Stadt, führen Gütergemeinschaft und Vielehe ein, und Jan van Leiden lässt sich zum König ausrufen. Nach 16 Monaten Belagerung wird die Stadt gestürmt, die Anführer hingerichtet und ihre Körper in Käfigen am Lambertikirchturm aufgehängt — die Käfige hängen dort bis heute. Der Fall wurde jahrhundertelang als Warnung gegen religiöse Schwärmerei erzählt und gegen alle Täufer verwendet, obwohl die Mehrheit von ihnen Gewaltlosigkeit lehrte.",
    "vertiefung": "reformation"
   },
   {
    "jahr": 1666,
    "titel": "Sabbatai Zwi",
    "text": "Ein Gelehrter aus Smyrna wird von einem großen Teil der jüdischen Gemeinden vom Jemen bis Amsterdam als Messias anerkannt; Handel und Alltag geraten in Erwartung des Endes durcheinander. Nach seiner Vorführung beim Sultan tritt er zum Islam über. Ein Teil seiner Anhänger deutet daraufhin den Abfall selbst als Teil der Erlösung – ein Lehrbuchfall dafür, wie Bewegungen eine widerlegte Prophetie verarbeiten."
   },
   {
    "jahr": 1776,
    "titel": "Die Illuminaten",
    "text": "Adam Weishaupt gründet in Ingolstadt einen Geheimbund aufklärerischer Beamter und Gelehrter; 1785 wird er in Bayern verboten und löst sich auf. Die Akten sind gut erhalten, der Bund hatte wenige hundert Mitglieder und keine erkennbare Wirkung. Seine zweite, viel größere Karriere führt er als Erklärung für alles Weitere – die Illuminaten sind das Muster der modernen Verschwörungserzählung."
   },
   {
    "jahr": 1830,
    "titel": "Der Thuggee-Vorwurf",
    "text": "Die britische Kolonialverwaltung erklärte Reiseüberfälle in Indien zum Werk eines geheimen Würgerkults im Dienst der Göttin Kali und schuf eine eigene Behörde, die tausende Menschen verurteilte — Geständnisse stammten meist von Kronzeugen, die dadurch selbst freikamen. Dass Straßenräuberbanden existierten, ist unbestritten; die neuere Forschung, etwa bei Kim Wagner, hält den religiösen Kult für eine Konstruktion, die Massenverhaftungen rechtfertigte."
   },
   {
    "jahr": 1875,
    "titel": "Die Theosophie",
    "text": "Helena Blavatsky gründet in New York die Theosophische Gesellschaft und beruft sich auf verborgene Meister in Tibet, von denen sie Botschaften empfängt. Eine Untersuchung der Society for Psychical Research erklärte die Botschaften 1885 für gefälscht; die Bewegung wuchs trotzdem weiter. Aus ihrem Umfeld stammen Vorstellungen, die im 20. Jahrhundert weit über sie hinaus wirken – von der Anthroposophie bis zu esoterischen Rassenlehren."
   },
   {
    "jahr": 1890,
    "titel": "Der Geistertanz und Wounded Knee",
    "text": "Die Ghost-Dance-Bewegung versprach den Lakota die Wiederkehr der Büffel und das Ende der Fremdherrschaft — eine friedliche religiöse Erneuerung. US-Behörden lasen sie als Aufstandsvorbereitung, verboten sie und töteten am 29. Dezember 1890 bei Wounded Knee rund 250 bis 300 Menschen, überwiegend Unbewaffnete. Ein Lehrstück darüber, was passiert, wenn eine Behörde eine Religion für eine Verschwörung hält."
   },
   {
    "jahr": 1935,
    "titel": "Der völkische Okkultismus und seine Legende",
    "text": "Aus Vorkriegszirkeln wie der Ariosophie und der Thule-Gesellschaft stammen Motive, die einzelne NS-Funktionäre aufnahmen; Himmlers Ahnenerbe finanzierte pseudowissenschaftliche Forschung, und die SS pflegte eine eigene Symbolik. Die populäre Vorstellung eines okkult gesteuerten Dritten Reichs geht dagegen auf Nachkriegsbücher zurück und ist von der Forschung als Legende zurückgewiesen. Der Unterschied ist wichtig, weil die Legende die Verbrechen ins Mysteriöse verschiebt, statt sie zu erklären."
   },
   {
    "jahr": 1954,
    "titel": "Die Prophezeiung, die nicht eintrat",
    "text": "Eine kleine Gruppe um eine Hausfrau in Chicago erwartet eine Flut und die Rettung durch ein Raumschiff; drei Sozialpsychologen schließen sich verdeckt an und beobachten, was nach dem verstrichenen Termin geschieht. Die Anhänger geben den Glauben nicht auf, sondern deuten ihn um und werben erstmals öffentlich. Aus dieser Studie stammt der Begriff der kognitiven Dissonanz – und die Einsicht, dass Widerlegung eine Gruppe festigen kann."
   },
   {
    "jahr": 1955,
    "titel": "Die Untersuchung geschlossener Gruppen beginnt",
    "text": "Leon Festinger und Kollegen begleiteten verdeckt eine Gruppe, die den Weltuntergang für einen bestimmten Tag erwartete, und beobachteten, was nach dem Ausbleiben geschah: Die Überzeugung wurde nicht aufgegeben, sondern verstärkt, und die Gruppe begann zu werben. Daraus entstand die Theorie der kognitiven Dissonanz — eine der folgenreichsten Erklärungen dafür, warum widerlegte Überzeugungen zäher werden."
   },
   {
    "jahr": 1969,
    "titel": "Die Manson-Gruppe",
    "text": "Eine kleine Kommune um Charles Manson begeht in Kalifornien mehrere Morde, angeblich um einen Rassenkrieg auszulösen. Der Prozess prägte den Begriff cult im amerikanischen Sprachgebrauch und die Vorstellung von willenloser Beeinflussung — eine Vorstellung, die die Forschung für zu einfach hält, weil sie die freiwilligen Schritte auf dem Weg hinein unsichtbar macht."
   },
   {
    "jahr": 1978,
    "titel": "Jonestown",
    "text": "In der Siedlung des Peoples Temple in Guyana sterben am 18. November 1978 über 900 Menschen, darunter rund 300 Kinder, an Zyanid in Getränken. Aufnahmen der letzten Stunden sind erhalten und zeigen, dass es kein einheitlicher freier Entschluss war: Es gab Widerspruch, Bewaffnete am Rand und Kindern wurde das Gift verabreicht. Der Ausdruck von einem Kool-Aid trinken stammt hierher und verharmlost, was geschah."
   },
   {
    "jahr": 1984,
    "titel": "Der Anschlag von The Dalles",
    "text": "Mitglieder der Rajneesh-Kommune in Oregon bringen Salmonellen an Salatbars von Restaurants aus, um eine Kommunalwahl zu beeinflussen; über siebenhundert Menschen erkranken. Es ist der größte bioterroristische Anschlag in der Geschichte der USA und wurde erst Jahre später aufgeklärt, weil niemand mit einer solchen Ursache rechnete. Führende Mitglieder wurden verurteilt, der Guru des Ordens verließ das Land."
   },
   {
    "jahr": 1993,
    "titel": "Waco",
    "text": "Nach 51 Tagen Belagerung der Branch-Davidians-Siedlung endet der Zugriff des FBI mit einem Brand, in dem 76 Menschen sterben, darunter Kinder. Die Ursache des Feuers ist bis heute strittig; eine Sonderuntersuchung von 2000 kam zum Ergebnis, dass es aus dem Inneren gelegt wurde. Der Fall wirkte doppelt: Er wurde zum Argument gegen Sekten und zum Gründungsmythos amerikanischer Milizen — Timothy McVeigh nannte ihn 1995 als Motiv."
   },
   {
    "jahr": 1994,
    "titel": "Der Sonnentempel",
    "text": "In der Schweiz und in Kanada sterben in mehreren Wellen 74 Mitglieder des Ordre du Temple Solaire, teils durch Selbsttötung, teils erschossen. Die Untersuchungen zeigten, dass Führungsfiguren Vermögen der Mitglieder abgezogen hatten — ein Muster, das sich in vielen Fällen wiederholt: Der wirtschaftliche Vorteil einzelner steht am Anfang, die Lehre folgt."
   },
   {
    "jahr": 1995,
    "titel": "Der Giftgasanschlag in Tokio",
    "text": "Aum Shinrikyo versprüht Sarin in der Tokioter U-Bahn: 13 Tote, tausende Verletzte. Die Gruppe hatte Chemiker in eigenen Laboren und war Behörden bekannt, ohne dass eingegriffen wurde. Es ist der erste Fall, in dem eine private Gruppe einen Kampfstoff selbst herstellte und einsetzte, und er veränderte weltweit die Bewertung solcher Gruppen als Sicherheitsrisiko."
   },
   {
    "jahr": 1997,
    "titel": "Heaven's Gate",
    "text": "In Kalifornien nehmen sich neununddreißig Mitglieder einer Gruppe das Leben, die den Körper als Fahrzeug betrachtete und den Kometen Hale-Bopp als Abholung deutete. Die Gruppe existierte über zwanzig Jahre, war klein und nach außen unauffällig. Ihre Selbstdarstellung im frühen Web hat den Fall zu einem der ersten gemacht, in denen die Quellen einer Gruppe vollständig online nachlesbar sind."
   },
   {
    "jahr": 2000,
    "titel": "Kanungu",
    "text": "In Uganda sterben mehrere hundert Mitglieder der Bewegung zur Wiederherstellung der Zehn Gebote in einer verschlossenen und in Brand gesetzten Kirche; weitere Leichen werden auf Grundstücken der Gruppe gefunden. Die Zahl von etwa siebenhundertachtzig Toten macht es zu einem der größten Fälle dieser Art, und einer der am wenigsten aufgeklärten – die Führung blieb verschwunden. Ausgelöst hatte die Zuspitzung ein verstrichenes Weltende zur Jahrtausendwende."
   },
   {
    "jahr": 2004,
    "titel": "Wie Menschen hineingeraten",
    "text": "Die Forschung, etwa bei Eileen Barker und Janja Lalich, zeichnet ein anderes Bild als die Vorstellung von Gehirnwäsche: Menschen treten meist über bestehende Beziehungen ein, in Lebensphasen mit Umbruch, und die Bindung entsteht durch schrittweise Verpflichtungen, Abschneiden von Außenkontakten, gemeinsame Sprache und die Umdeutung von Zweifeln als eigenes Versagen. Zwang steht am Ende dieses Wegs, nicht am Anfang — was auch erklärt, warum Aussteigen so schwer ist."
   },
   {
    "jahr": 2018,
    "titel": "Zwang ohne Religion",
    "text": "Der Prozess gegen NXIVM in den USA zeigt eine Gruppe, die sich als Seminaranbieter für Selbstoptimierung darstellte und in deren Kern Frauen mit erpressbaren Unterlagen gebunden und gebrandmarkt wurden. Der Fall ist wichtig, weil er ohne Religion und ohne Weltuntergang auskommt: Die Mechanik geschlossener Gruppen funktioniert auch mit Karriereversprechen."
   }
  ],
  "strittig": "Der Begriff Sekte oder Kult hat keine wissenschaftliche Definition und wird in der Religionssoziologie überwiegend vermieden, weil er wertet statt zu beschreiben; gebräuchlich sind neue religiöse Bewegung und, für die problematischen Fälle, Beschreibungen der Kontrollmechanismen. Die Vorstellung einer Gehirnwäsche, die Menschen den Willen nimmt, wird von der Mehrheit der Forschung abgelehnt, ist in Gerichtsverfahren aber verwendet worden. Bei mehreren historischen Fällen — Bacchanalien, Katharer, Templer, Thuggee — ist bis heute offen, wie viel von der beschriebenen Gruppe überhaupt existierte und wie viel die Verfolger konstruierten. Und über Waco gibt es zwei Untersuchungsergebnisse mit unterschiedlicher Gewichtung der Verantwortung, die hier beide genannt sind.",
  "quellen": [
   "Encyclopaedia Britannica: cult; new religious movement; Aum Shinrikyo; Jonestown",
   "Senatus consultum de Bacchanalibus, 186 v. Chr. (Bronzetafel, Wien)",
   "Chinon-Pergament, Vatikanisches Geheimarchiv, veröffentlicht 2007",
   "Leon Festinger u. a.: When Prophecy Fails, 1956",
   "Report to the Deputy Attorney General on the Events at Waco (Danforth-Untersuchung), 2000"
  ],
  "literatur": [
   {
    "titel": "Bounded Choice",
    "autor": "Janja Lalich",
    "jahr": "2004",
    "warum": "Wie geschlossene Gruppen Entscheidungen einengen, ohne den Willen zu brechen — die überzeugendste Erklärung, die ich kenne."
   },
   {
    "titel": "Die Assassinen",
    "autor": "Bernard Lewis",
    "jahr": "1967",
    "warum": "Trennt die Nizariten von der Legende. Älter, aber immer noch die klarste Darstellung."
   },
   {
    "titel": "Thuggee – Banditry and the British in Early Nineteenth-Century India",
    "autor": "Kim A. Wagner",
    "jahr": "2007",
    "warum": "Zeigt, wie aus Straßenraub ein Kult wurde — ein Musterfall dafür, wie Verwaltungen Feindbilder erzeugen."
   }
  ]
 },
 {
  "id": "moerder",
  "titel": "Mörder vor der Kriminalistik",
  "kurz": "Fälle, in denen niemand die Serie erkennen konnte — und die Legenden, die daraus wurden.",
  "einleitung": "Bevor es Polizeiakten, Fotografien, Fingerabdrücke und Telegrafen gab, war eine Serie von Taten kaum als Serie erkennbar: Jede Ortschaft ermittelte für sich, Verdächtige zogen weiter, Vermisste galten als abgereist. Deshalb sagen die berühmten Fälle des 15. bis 19. Jahrhunderts weniger über die Täter aus als über die Verfahren, mit denen man sie behandelte — und über die Zeitungen, die aus ihnen Ungeheuer machten. Dieser Abschnitt behandelt ausschließlich historisch abgeschlossene Fälle und verzichtet auf Tatschilderungen; wo die überlieferten Zahlen unglaubwürdig sind, steht es dabei.",
  "stationen": [
   {
    "jahr": 1440,
    "titel": "Gilles de Rais",
    "text": "Der Marschall von Frankreich und Waffengefährte Jeanne d'Arcs wird der Ermordung von Kindern angeklagt, gesteht und wird hingerichtet. Der Prozess wurde von Herzog Johann V. geführt, der bei ihm hoch verschuldet war und dessen Güter erhielt; das Geständnis erfolgte unter Androhung der Folter und der Exkommunikation. Ein Teil der Forschung hält die Taten für erwiesen, ein anderer den Prozess für konstruiert — die Akten erlauben beides."
   },
   {
    "jahr": 1560,
    "titel": "Der Mord in der Flugschrift",
    "text": "Mit dem billigen Einblattdruck entsteht ein eigenes Genre: die Neue Zeitung über eine schreckliche Mordtat, mit Holzschnitt, Reimen und moralischer Nutzanwendung. Diese Blätter sind oft die einzige Überlieferung eines Falls – und sie sind keine Berichte, sondern Ware. Ort, Zahl und Ablauf wurden dem Effekt angepasst; nachprüfbar ist meist nur, dass ein Verfahren stattfand."
   },
   {
    "jahr": 1580,
    "titel": "Peter Stumpp und der Werwolfprozess",
    "text": "In Bedburg bei Köln wird ein Bauer hingerichtet, nachdem er unter Folter gestanden hatte, als Werwolf sechzehn Menschen getötet zu haben. Der Fall ist ein Beispiel dafür, wie Tötungsdelikte im Rahmen des damaligen Weltbilds erklärt wurden: nicht als Verbrechen eines Menschen, sondern als Wirken des Teufels. Was tatsächlich geschah, ist aus einem Foltergeständnis nicht zu erschließen.",
    "vertiefung": "hexenverfolgung"
   },
   {
    "jahr": 1611,
    "titel": "Erzsébet Báthory und die Zahl 650",
    "text": "Die ungarische Adlige wird auf ihrer Burg eingemauert, nachdem eine Untersuchung im Auftrag des Palatins Thurzó Zeugen befragt hatte. Ihre Bediensteten wurden gefoltert und hingerichtet, sie selbst nie vor Gericht gestellt — was ungewöhnlich ist und mit ihrem Rang und ihrem Vermögen zu tun hat, das die Krone schuldete. Die Zahl von 650 Opfern stammt aus einer einzigen Zeugenaussage über ein angebliches Verzeichnis, das nie gefunden wurde. Das Blutbad zur Verjüngung erscheint erst 1729 bei einem Jesuiten, hundert Jahre nach ihrem Tod.",
    "vertiefung": "hexenverfolgung"
   },
   {
    "jahr": 1700,
    "titel": "Sawney Bean, eine Erfindung",
    "text": "Die Geschichte einer schottischen Höhlenfamilie, die über Jahrzehnte Reisende getötet und gegessen haben soll, steht in populären Verbrechenssammlungen des 18. Jahrhunderts. Es gibt dazu keine Gerichtsakte, keinen Zeitungsbericht, keine zeitgenössische Erwähnung. Der Fall gehört in diesen Abschnitt, weil er zeigt, was ohne Akten passiert: Der Schrecken wächst weiter, solange ihn niemand prüfen kann."
   },
   {
    "jahr": 1751,
    "titel": "Zeitungen entdecken das Verbrechen",
    "text": "Mit billigen Druckschriften und Flugblättern entsteht ein Markt für Hinrichtungsberichte, Geständnisse und Moritaten — oft mit erfundenen Details. Diese Broschüren sind für viele frühe Fälle unsere Hauptquelle, und sie waren nie zur Aufklärung, sondern zum Verkauf geschrieben. Wer historische Kriminalfälle liest, liest fast immer diese Schicht mit."
   },
   {
    "jahr": 1811,
    "titel": "Die Morde an der Ratcliffe Highway",
    "text": "Zwei Überfälle mit sieben Toten versetzen London in Panik; die Aufklärung liegt bei mehreren nebeneinander arbeitenden Wachinstanzen ohne gemeinsame Akte. Ein Verdächtiger erhängt sich in Haft, der Fall gilt damit als erledigt, ohne verhandelt zu werden. Die Empörung über das Durcheinander ist ein Argument in der Debatte, die achtzehn Jahre später zur Metropolitan Police führt."
   },
   {
    "jahr": 1828,
    "titel": "Burke und Hare",
    "text": "In Edinburgh töten zwei Männer sechzehn Menschen und verkaufen die Leichen an die Anatomie, die für den Unterricht auf Nachschub angewiesen war und nicht nach Herkunft fragte. Hare wurde Kronzeuge und kam frei, Burke wurde gehängt und öffentlich seziert; sein Skelett ist noch heute in Edinburgh ausgestellt. Der Fall führte 1832 zum Anatomy Act, der die legale Versorgung regelte — Kriminalität als Folge einer Marktlücke."
   },
   {
    "jahr": 1835,
    "titel": "Die Kugel und die Gussform",
    "text": "Der Londoner Ermittler Henry Goddard vergleicht eine Kugel aus einem Tatort mit der Gussform des Verdächtigen und findet denselben Materialfehler in beiden. Es ist einer der ersten Fälle, in denen ein physischer Spurenvergleich ein Geständnis erzwingt. Die Schussspurenkunde als Fach entsteht erst neunzig Jahre später – hier ist es die Beobachtung eines Einzelnen."
   },
   {
    "jahr": 1841,
    "titel": "Mary Rogers und die Zeitung als Ermittler",
    "text": "Der Tod einer New Yorker Verkäuferin wird von konkurrierenden Blättern über Monate ausgebreitet, mit eigenen Theorien, erfundenen Zeugen und Belohnungsaufrufen. Edgar Allan Poe verarbeitet den Fall in einer Erzählung und beansprucht, ihn gelöst zu haben. Aufgeklärt wurde er nie; was bleibt, ist das Muster der Presseermittlung, das bis heute funktioniert."
   },
   {
    "jahr": 1849,
    "titel": "Die Post macht Fahndung möglich",
    "text": "Der Mörder John Tawell wird 1845 gefasst, weil seine Beschreibung dem Zug per Telegraf vorauseilte — der erste Fall dieser Art. Mit Telegraf, Eisenbahn und Fotografie entsteht die technische Grundlage überörtlicher Fahndung. Davor war Weiterziehen die zuverlässigste Verteidigung."
   },
   {
    "jahr": 1860,
    "titel": "Road Hill House",
    "text": "Nach dem Mord an einem Kind in einem Landhaus schickt Scotland Yard den Inspektor Jonathan Whicher, der die Familie selbst verdächtigt – und dafür öffentlich zerrissen wird. Fünf Jahre später gesteht die Halbschwester des Kindes. Der Fall macht den Detektiv zur öffentlichen Figur und liefert das Muster für den Kriminalroman: geschlossenes Haus, begrenzter Personenkreis, ein Fachmann von außen."
   },
   {
    "jahr": 1888,
    "titel": "Whitechapel",
    "text": "Im Londoner Osten werden fünf Frauen getötet, deren Fälle heute als eine Reihe gelten. Der Name Jack the Ripper stammt aus einem Brief, den die Polizei damals für eine Fälschung eines Journalisten hielt. Der Fall wurde bedeutsam, weil erstmals die Presse landesweit mitfahndete, weil erstmals Tatortfotografie und Profilerstellung versucht wurden — der Polizeiarzt Thomas Bond schrieb 1888 eine Täterbeschreibung, die als frühestes Profil gilt — und weil die Berichte die Lebensverhältnisse in Whitechapel öffentlich machten.",
    "vertiefung": "industrielle-revolution"
   },
   {
    "jahr": 1890,
    "titel": "Der Tatort wird fotografiert",
    "text": "Alphonse Bertillon führt in Paris die metrische Tatortfotografie ein: festgelegte Kamerahöhe, Maßstab im Bild, Aufnahme von oben. Damit wird ein Tatort nachträglich vermessbar, auch wenn er längst geräumt ist. Zuvor gab es Skizzen und Erinnerungen – ab jetzt kann ein Gericht sich das ansehen, was der Ermittler gesehen hat."
   },
   {
    "jahr": 1893,
    "titel": "Das Mordschloss, das es nicht gab",
    "text": "H. H. Holmes wurde in Chicago für einen Mord hingerichtet und gestand nach wechselnden Angaben 27 weitere, von denen mehrere Personen betrafen, die nachweislich lebten. Das berühmte Hotel mit Gaskammern, Rutschen und Verbrennungsofen stammt aus Zeitungsberichten von 1895 und aus einem Bestseller von 2003; bauliche Belege dafür fehlen. Nachweisbar ist ein Versicherungsbetrüger, der mindestens vier Menschen tötete — schlimm genug, aber eine andere Geschichte."
   },
   {
    "jahr": 1893,
    "titel": "Das erste Handbuch der Kriminalistik",
    "text": "Der Grazer Untersuchungsrichter Hans Gross veröffentlicht ein Handbuch, das Spurensicherung, Vernehmung, Sachverständige und Aktenführung zusammen behandelt und den Begriff Kriminalistik prägt. Seine Grundregel: Der Ermittler soll nicht vom Verdacht ausgehen und Spuren suchen, sondern von den Spuren ausgehen. Das Buch wird in ganz Europa übersetzt und ist der Grund, dass die Verfahren der folgenden Jahrzehnte einander so ähnlich sehen."
   },
   {
    "jahr": 1896,
    "titel": "Jane Toppan und der Beruf als Zugang",
    "text": "Die amerikanische Krankenpflegerin gestand 31 Tötungen mit Morphin und Atropin. Der Fall gehört zu den ersten, in denen erkannt wurde, dass Pflegeberufe Zugang und Gelegenheit bieten und dass Sterbefälle dort selten hinterfragt werden. Die Konsequenzen — Dokumentationspflichten, Kontrolle von Betäubungsmitteln, Meldewege bei Häufungen — wurden erst im 20. Jahrhundert gezogen."
   },
   {
    "jahr": 1905,
    "titel": "Ein Fingerabdruck trägt ein Todesurteil",
    "text": "Im Londoner Stadtteil Deptford werden zwei Brüder wegen eines Doppelmordes verurteilt, im Wesentlichen aufgrund eines Daumenabdrucks auf einer Geldkassette. Die Verteidigung ließ einen Sachverständigen aufbieten, der das Verfahren für unzuverlässig hielt; die Jury folgte ihm nicht. Es ist der erste Mordprozess, in dem ein Fingerabdruck den Ausschlag gibt – und der Anfang der Debatte, wie viel ein einzelner Abdruck beweist."
   },
   {
    "jahr": 1908,
    "titel": "Belle Gunness und die Leiche ohne Kopf",
    "text": "Auf einer Farm in Indiana werden nach einem Brand die Überreste mehrerer Männer gefunden, die über Heiratsanzeigen dorthin gekommen waren; eine kopflose Frauenleiche im Haus wurde als die Farmbesitzerin identifiziert, war aber kleiner und leichter als sie. Ob Belle Gunness starb oder verschwand, ist bis heute offen; eine DNA-Untersuchung 2008 brachte kein eindeutiges Ergebnis. Der Fall zeigt, wie sehr die Identifizierung von Leichen bis zur Zahnmedizin und Genetik Glaubenssache blieb."
   },
   {
    "jahr": 1910,
    "titel": "Locard und die Spur",
    "text": "Edmond Locard richtet in Lyon ein polizeiliches Labor ein und formuliert den Grundsatz, der später seinen Namen trägt: Jeder Kontakt hinterlässt eine Spur in beide Richtungen. Aus dieser Annahme folgt die Praxis, Staub, Fasern und Erde zu sammeln, statt nur Zeugen zu befragen. Der Satz ist eine Arbeitshypothese, kein Naturgesetz – aber er hat die Ermittlungsarbeit umgebaut."
   },
   {
    "jahr": 1913,
    "titel": "Die Mordkommission entsteht",
    "text": "In Berlin und anderen Großstädten werden feste Kommissionen für Tötungsdelikte eingerichtet, mit Tatortsicherung, Fotografie, Spurenkunde und Aktenvergleich. Erst damit wird sichtbar, was vorher unsichtbar war: Ähnlichkeiten zwischen Fällen an verschiedenen Orten."
   },
   {
    "jahr": 1924,
    "titel": "Der Gutachter im Gerichtssaal",
    "text": "Im Chicagoer Prozess gegen Nathan Leopold und Richard Loeb, die ein Kind ohne Motiv getötet hatten, lässt der Verteidiger Clarence Darrow psychiatrische Sachverständige über die Herkunft der Tat aussagen und erreicht damit lebenslange Haft statt Todesstrafe. Der Prozess ist ein Wendepunkt für die Rolle des Gutachters: Nicht mehr nur die Frage der Zurechnungsfähigkeit, sondern die Erklärung der Person wird verhandelt. Ob das Gericht dafür der richtige Ort ist, wird seit damals gestritten."
   },
   {
    "jahr": 1925,
    "titel": "Fritz Haarmann und die Grenzen der Akte",
    "text": "In Hannover wird Haarmann für die Tötung von 24 jungen Männern verurteilt; er war der Polizei als Spitzel bekannt und mehrfach aufgefallen. Der Fall wurde in Deutschland zum Anlass, Vermisstenmeldungen zentral zu erfassen — die Opfer waren überwiegend Obdachlose und Ausreißer, deren Verschwinden niemand meldete. Die soziale Unsichtbarkeit der Opfer ist bei fast allen diesen Fällen der eigentliche Ermittlungshemmnis."
   },
   {
    "jahr": 1930,
    "titel": "Peter Kürten und die Anfänge der Fallanalyse",
    "text": "Der Düsseldorfer Fall führte zu einer der ersten systematischen Auswertungen von Tatmerkmalen über mehrere Fälle hinweg und zu einer Massenfahndung mit über einer Million überprüften Hinweisen. Die Ermittlungen scheiterten lange an fehlendem Abgleich zwischen Behörden — dieselbe Lücke, die später bei anderen Fällen wiederkehrte."
   },
   {
    "jahr": 1935,
    "titel": "Der Fall Ruxton",
    "text": "In Schottland werden verstreute Leichenteile gefunden, denen Finger, Zähne und Gesichtszüge entfernt worden waren, um eine Identifizierung zu verhindern. Anatomen der Universitäten Edinburgh und Glasgow rekonstruieren die Körper und legen Fotografien der Vermissten über die Schädel. Die Verurteilung Buck Ruxtons gilt als Geburt der forensischen Anthropologie in Europa – ausgerechnet in einem Fall, der auf Unidentifizierbarkeit angelegt war."
   },
   {
    "jahr": 1948,
    "titel": "Zweiundvierzigtausend Abdrücke",
    "text": "Nach dem Mord an einem Kind im Krankenhaus von Blackburn nimmt die Polizei die Fingerabdrücke praktisch aller erwachsenen Männer der Stadt und findet nach Monaten eine Übereinstimmung. Es ist die erste Massenerfassung dieser Art und der Vorläufer der späteren DNA-Reihenuntersuchungen. Die Abdrücke wurden nach dem Verfahren vernichtet – eine Zusage, die für die Akzeptanz entscheidend war und bei heutigen Datenbanken so nicht mehr gilt."
   },
   {
    "jahr": 1966,
    "titel": "Der Freispruch nach der Hinrichtung",
    "text": "Timothy Evans wurde 1950 wegen des Mordes an Frau und Kind gehängt; im Haus lebte John Christie, der drei Jahre später als vielfacher Mörder überführt wurde und dessen Aussage Evans belastet hatte. 1966 wird Evans posthum begnadigt. Der Fall ist das wichtigste einzelne Argument in der britischen Debatte, die 1965 zur Abschaffung der Todesstrafe führte."
   },
   {
    "jahr": 1972,
    "titel": "Vom Profil zur Methode",
    "text": "Das FBI beginnt, Täterprofile systematisch zu erstellen, später auf Grundlage von Interviews mit verurteilten Tätern. Die Wirksamkeit ist begrenzt: Überprüfungen zeigen, dass Profile bei der Eingrenzung helfen, aber selten zur Identifizierung führen, und dass ihre Trefferquote überschätzt wird. Sie sind ein Hilfsmittel, kein Beweismittel."
   },
   {
    "jahr": 1986,
    "titel": "Der genetische Fingerabdruck im Ermittlungsverfahren",
    "text": "In Leicestershire werden erstmals Massentests mit DNA durchgeführt; über 5.000 Männer geben Proben ab. Das Verfahren entlastete zuerst einen Verdächtigen, der bereits gestanden hatte — ein falsches Geständnis — und überführte dann den Täter. Beides gehört zusammen: Die Technik, die überführt, ist dieselbe, die falsche Geständnisse aufdeckt.",
    "vertiefung": "dna-alte"
   },
   {
    "jahr": 1995,
    "titel": "Warum wir uns diese Fälle erzählen",
    "text": "Die Forschung zur Faszination am Verbrechen — etwa bei Scott Bonn — nennt mehrere Gründe: das kontrollierte Erschrecken, das Bedürfnis, Gefahr verstehen und dadurch vermeiden zu können, und die moralische Klarheit, die solche Geschichten anbieten. Gleichzeitig warnt sie vor der Verzerrung: Schwere Gewaltverbrechen sind selten, während ihre Erzähldichte sie häufig erscheinen lässt, und die Opfer verschwinden hinter den Tätern, deren Namen bleiben. Historische Fälle lassen sich untersuchen, ohne das zu wiederholen — jüngere kaum."
   }
  ],
  "strittig": "Fast jede überlieferte Opferzahl in diesem Feld ist unsicher. Bei Báthory (650) und Holmes (27 bis 200) sind die hohen Zahlen nachweislich nicht belegbar; bei Gilles de Rais steht die Echtheit des Verfahrens selbst infrage. Geständnisse aus Folter oder aus dem Wunsch nach Aufmerksamkeit sind in mehreren Fällen die einzige Grundlage. Ebenfalls umstritten ist, ob Serientaten zugenommen haben oder ob nur ihre Erkennbarkeit gestiegen ist: Die dokumentierten Fallzahlen steigen ab dem späten 19. Jahrhundert genau dort, wo Polizeiverwaltung und Meldewesen entstehen — was Ursache und was Wirkung ist, lässt sich nicht trennen.",
  "quellen": [
   "Encyclopaedia Britannica: Jack the Ripper; H. H. Holmes; Elizabeth Báthory",
   "Thomas Bond, Bericht an Scotland Yard, 10. November 1888",
   "Anatomy Act 1832, Vereinigtes Königreich",
   "Alec Jeffreys u. a., Nature 1985: Individual-specific fingerprints of human DNA",
   "Kimberly Craft: Infamous Lady – The True Story of Countess Erzsébet Báthory (Quellenedition der Prozessaussagen)"
  ],
  "literatur": [
   {
    "titel": "Die Fünf",
    "autor": "Hallie Rubenhold",
    "jahr": "2019",
    "warum": "Erzählt die Whitechapel-Morde von den fünf getöteten Frauen aus, nicht vom Täter. Verändert den Blick auf das ganze Feld."
   },
   {
    "titel": "The Italian Boy",
    "autor": "Sarah Wise",
    "jahr": "2004",
    "warum": "Der Londoner Leichenhandel um 1830 und die Welt, in der Burke und Hare möglich waren. Vorzügliche Sozialgeschichte."
   },
   {
    "titel": "Why We Love Serial Killers",
    "autor": "Scott Bonn",
    "jahr": "2014",
    "warum": "Über die Faszination selbst und darüber, wie Medien Täter groß und Opfer klein machen."
   }
  ]
 }
];

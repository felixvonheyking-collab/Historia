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
    "text": "Der um 1600 v. Chr. geschriebene ägyptische Papyrus, eine Abschrift wohl älterer Vorlagen, beschreibt 48 Verletzungsfälle von Kopf, Hals und Oberkörper, jeweils mit Befund, Behandlung und Prognose. Jeder Fall endet mit einem von drei Urteilen: behandelbar, vielleicht behandelbar, nicht zu behandeln. Bis auf zwei Stellen verzichten die Fälle auf Magie; Zaubersprüche folgen erst auf der Rückseite. Erstmals wird eine Medizin erkennbar, die auf Beobachtung und Erfahrung beruht. Benannt ist der Text nach dem Sammler, der ihn 1862 in Luxor kaufte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -600,
    "titel": "Sushruta und die frühe Chirurgie Indiens",
    "text": "Die Sushruta Samhita beschreibt über 300 Eingriffe und 120 Instrumente, darunter die Nasenrekonstruktion aus Stirnhaut – eine Technik, die europäische Chirurgen erst im 18. Jahrhundert übernahmen und die bis heute als indische Methode gilt."
   },
   {
    "jahr": -420,
    "titel": "Die hippokratischen Schriften",
    "text": "Unter dem Namen des Hippokrates von Kos sind rund sechzig Schriften überliefert, die im 5. und 4. Jahrhundert v. Chr. von verschiedenen Autoren verfasst wurden. Krankheit wird darin als natürlicher Vorgang gedeutet, nicht als Strafe der Götter; selbst die Epilepsie, die heilige Krankheit, habe natürliche Ursachen. Die zugrundeliegende Säftelehre war falsch, die Methode – beobachten, dokumentieren, Verläufe vergleichen – blieb. Der berühmte Eid stammt aus dieser Sammlung, wurde aber erst viel später zum Standard.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -300,
    "titel": "Sektion in Alexandria",
    "text": "Herophilos und Erasistratos durften in Alexandria menschliche Leichen öffnen – für kurze Zeit und unter Bedingungen, die spätere Autoren als grausam kritisierten. Danach blieb die Sektion im Mittelmeerraum tausend Jahre verboten; die Anatomie beruhte bis Vesalius auf Tieren."
   },
   {
    "jahr": -100,
    "titel": "Der Innere Klassiker des Gelben Kaisers",
    "text": "Das Huangdi Neijing, in der Han-Zeit etwa im 2. und 1. Jahrhundert v. Chr. aus älteren Texten zusammengestellt, wird zum Grundtext der chinesischen Medizin. Es erklärt Krankheit als Störung im Gleichgewicht von Yin und Yang, der fünf Wandlungsphasen und des Qi, das in Leitbahnen durch den Körper fließt, und beschreibt Pulsdiagnose und Akupunktur. Wie die Säftelehre in Europa war das ein geschlossenes Erklärungssystem ohne Kenntnis von Erregern – und blieb über zweitausend Jahre die Grundlage der Ausbildung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 165,
    "titel": "Die Antoninische Pest",
    "text": "Ab 165 breitet sich eine Seuche im Römischen Reich aus, nach antiken Berichten eingeschleppt von Truppen, die aus dem Krieg gegen die Parther zurückkehrten. Der Arzt Galen beschreibt Fieber und einen schwarzen Ausschlag. Schätzungen der Toten reichen von wenigen Prozent bis über ein Zehntel der Bevölkerung, nach manchen Forschern noch mehr; die Angaben beruhen auf spärlichen Quellen. Ob es sich um Pocken handelte, ist mangels Erregernachweis nicht gesichert. Die Seuche schwächte Heer und Steuerkraft über Jahre.",
    "vertiefung": "kaiser-markaurel",
    "seit": "2026-10-01"
   },
   {
    "jahr": 170,
    "titel": "Galen bestimmt die Medizin für 1.400 Jahre",
    "text": "Der Arzt der Gladiatoren und des Kaisers Mark Aurel verband Beobachtung mit der Lehre von den vier Säften. Weil er nur Tiere sezieren durfte, enthielt sein Menschenbild Fehler, die kritiklos weitergegeben wurden. Wer Galen widersprach, galt bis ins 16. Jahrhundert als unwissend."
   },
   {
    "jahr": 541,
    "titel": "Die Justinianische Pest",
    "text": "541 erreicht eine Seuche Ägypten, 542 Konstantinopel, wo Prokop täglich Tausende Tote beschreibt; in Wellen kehrte sie bis ins 8. Jahrhundert zurück. Dass es tatsächlich die Pest war, wurde erst 2013 und 2014 durch Erbgut von Yersinia pestis aus Gräbern im bayerischen Aschheim nachgewiesen – vorher war es eine gut begründete Vermutung. Wie viele Menschen starben, ist strittig: Ältere Darstellungen nennen bis zur Hälfte der Bevölkerung, neuere Studien halten die Folgen für regional sehr unterschiedlich.",
    "vertiefung": "justinian-pest",
    "seit": "2026-10-01"
   },
   {
    "jahr": 900,
    "titel": "ar-Razi trennt Pocken von Masern",
    "text": "Der persische Arzt beschreibt erstmals zwei Krankheiten, die vorher als eine galten, und stützt sich dabei auf systematisch geführte Krankengeschichten. Sein Hospitalwesen in Bagdad kannte bereits Stationen für verschiedene Leiden."
   },
   {
    "jahr": 1025,
    "titel": "Der Kanon der Medizin",
    "text": "Der persische Arzt und Philosoph Ibn Sina, im Westen Avicenna, vollendet um 1025 sein fünfbändiges Werk, das antike, persische und arabische Medizin systematisch ordnet: Anatomie, Krankheiten, Heilmittel, Ansteckung durch Luft und Wasser, Regeln zur Prüfung von Arzneien. Im 12. Jahrhundert ins Lateinische übersetzt, wurde es zu einem der meistgedruckten Bücher der frühen Neuzeit und blieb an europäischen Universitäten bis ins 17. Jahrhundert Lehrbuch. Gerade seine Geschlossenheit machte es später schwer, Galen zu widersprechen.",
    "seit": "2026-10-01"
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
    "text": "Die Handelsstadt Ragusa, das heutige Dubrovnik, verpflichtet 1377 Ankömmlinge aus Pestgebieten zu dreißig Tagen Absonderung außerhalb der Stadt. Venedig richtete 1423 auf einer Insel ein Pesthaus ein, und die Frist wurde vielerorts auf vierzig Tage verlängert – quaranta giorni. Die Medizin wusste nicht, wie die Pest übertragen wurde, die Verwaltung handelte trotzdem nach Erfahrung. So entsteht öffentliche Gesundheitsverwaltung aus der Angst vor der Pest, samt Gesundheitspässen und Sperren, die den Handel belasteten.",
    "vertiefung": "schwarzer-tod",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1520,
    "titel": "Die Pocken in Tenochtitlan",
    "text": "1520 erreichen die Pocken mit der spanischen Truppe des Pánfilo de Narváez Mexiko und breiten sich bis Tenochtitlan aus. Die Bevölkerung hatte keine Abwehr gegen den unbekannten Erreger; unter den Toten war Cuitláhuac, der Nachfolger Motecuhzomas. Als Cortés und seine indigenen Verbündeten die Stadt 1521 belagerten, war sie bereits geschwächt. In den folgenden Jahrzehnten trafen Pocken, Masern und weitere Seuchen ganz Amerika; die Bevölkerungsverluste werden auf einen sehr großen Teil der Bevölkerung geschätzt.",
    "vertiefung": "moctezuma2",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1543,
    "titel": "Vesalius seziert selbst",
    "text": "Bis dahin las der Professor aus Galen vor, während ein Gehilfe schnitt. Andreas Vesalius seziert in Padua selbst und veröffentlicht 1543 in Basel De humani corporis fabrica, mit großformatigen Holzschnitten, die den Körper Schicht für Schicht zeigen. Er weist nach, dass viele Angaben Galens auf Tieren beruhten und für den Menschen falsch waren, etwa zum Unterkiefer und zur Leber. Er zeigt damit, dass Autorität kein Beweis ist. Galens Anhänger griffen ihn heftig an; seine Methode setzte sich dennoch durch.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1546,
    "titel": "Fracastoro vermutet Ansteckung durch Samen",
    "text": "Der Veroneser Arzt Girolamo Fracastoro, der schon der Syphilis ihren Namen gegeben hatte, beschreibt 1546 Ansteckung durch winzige, unsichtbare Keime, die sich vermehren und durch direkten Kontakt, über Gegenstände oder durch die Luft übertragen werden. Das ist dreihundert Jahre vor dem Nachweis von Bakterien erstaunlich nah an der späteren Lehre. Die These blieb ohne Wirkung, weil es kein Mittel gab, sie zu prüfen – erst Mikroskope und die Arbeiten von Pasteur und Koch machten Erreger sichtbar.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1628,
    "titel": "Harvey beschreibt den Blutkreislauf",
    "text": "William Harvey veröffentlicht 1628 seine Schrift über die Bewegung des Herzens und des Blutes. Sein entscheidendes Argument ist eine Rechnung: Das Herz pumpt in einer Stunde mehr Blut, als der ganze Körper wiegt; die Leber kann es unmöglich neu bilden, wie Galen gelehrt hatte. Also muss dasselbe Blut zirkulieren. Ein früher Fall, in dem eine Messung eine Lehrmeinung stürzt. Die Verbindung zwischen Arterien und Venen konnte Harvey nicht zeigen; die Kapillaren sah erst Marcello Malpighi 1661 unter dem Mikroskop.",
    "seit": "2026-10-01"
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
    "text": "Der englische Landarzt Edward Jenner hatte gehört, dass Melkerinnen nach Kuhpocken nicht an Pocken erkrankten. 1796 überträgt er Kuhpockenmaterial auf einen achtjährigen Jungen und infiziert ihn später mit echten Pocken, ohne dass dieser erkrankt – ein Versuch, der heute undenkbar wäre. Die Methode war weit weniger riskant als die Variolation und verbreitete sich binnen weniger Jahre in Europa und Amerika. Sie ist der Beginn der Impfung im heutigen Sinn; der Name Vakzine kommt von vacca, der Kuh.",
    "vertiefung": "pockenimpfung",
    "seit": "2026-10-01"
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
    "text": "Als 1854 im Londoner Stadtteil Soho Hunderte Menschen in wenigen Tagen an Cholera sterben, trägt der Arzt John Snow die Todesfälle in einen Stadtplan ein. Sie häufen sich um eine Wasserpumpe in der Broad Street; auf sein Drängen wird ihr Schwengel entfernt. Gegen die herrschende Lehre, Cholera entstehe durch üble Dünste, argumentierte er für eine Übertragung durch Wasser. Aus Karte und Vergleich der Wasserversorger entsteht die moderne Epidemiologie – Jahrzehnte bevor Koch 1883 den Erreger nachwies.",
    "vertiefung": "kanalisation-london",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1867,
    "titel": "Antisepsis in der Chirurgie",
    "text": "Der Chirurg Joseph Lister in Glasgow überträgt Pasteurs Erkenntnis, dass Fäulnis von Mikroorganismen ausgeht, auf den Operationssaal und behandelt ab 1865 Wunden und Verbände mit Karbolsäure; 1867 veröffentlicht er seine Ergebnisse. Die Sterblichkeit nach Amputationen sinkt auf seiner Station deutlich. Vorher galt eitrige Wundinfektion als normaler Teil der Heilung, und Operationen endeten häufig mit dem Tod. Aus der Desinfektion entwickelte sich später die Asepsis: keimfreie Instrumente und Kleidung von vornherein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1882,
    "titel": "Koch findet den Tuberkelbazillus",
    "text": "Am 24. März 1882 stellt Robert Koch in Berlin den Erreger der Tuberkulose vor, an der damals etwa jeder siebte Mensch in Europa starb. Mit Färbemethoden und Reinkulturen begründet er ein Verfahren, nach dem ein Erreger erst dann als Ursache gilt, wenn er regelmäßig gefunden, isoliert und übertragen werden kann – später als Kochsche Postulate zusammengefasst. Ein Heilmittel folgte daraus nicht: Sein Tuberkulin von 1890 versagte als Therapie. Wirksame Medikamente kamen erst mit Streptomycin 1944.",
    "seit": "2026-10-01"
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
    "text": "1928 bemerkt Alexander Fleming in London, dass ein Schimmelpilz in einer liegengebliebenen Bakterienkultur die Keime um sich herum abtötet. Er beschreibt den Effekt, verfolgt ihn aber kaum weiter, weil sich der Stoff nicht stabil gewinnen ließ. Erst Howard Florey und Ernst Chain in Oxford machten daraus ab 1940 ein Medikament, 1941 wurde der erste Patient behandelt; im Zweiten Weltkrieg begann die Massenproduktion. Entdeckung und Nutzen fallen in der Wissenschaft oft weit auseinander.",
    "vertiefung": "antibiotika",
    "seit": "2026-10-01"
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
    "text": "1953 veröffentlichen James Watson und Francis Crick das Modell der DNA als Doppelhelix, deren gepaarte Basen erklären, wie Erbinformation gespeichert und bei der Zellteilung kopiert wird. Entscheidend war eine Röntgenaufnahme aus dem Labor von Rosalind Franklin, die Watson ohne ihr Wissen gezeigt wurde. Den Nobelpreis erhielten 1962 Watson, Crick und Maurice Wilkins; Franklin war 1958 gestorben, und ihr Anteil wurde jahrzehntelang kaum genannt. Aus dem Modell erwuchs die Molekularbiologie.",
    "vertiefung": "doppelhelix",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1955,
    "titel": "Der Polio-Impfstoff",
    "text": "Kinderlähmung trat in der ersten Hälfte des 20. Jahrhunderts in den Industrieländern in großen Sommerepidemien auf und hinterließ viele Gelähmte. Jonas Salks Totimpfstoff wurde 1954 in einem der größten Feldversuche der Geschichte an Schulkindern getestet und im April 1955 für wirksam erklärt; Albert Sabins Schluckimpfung folgte. In wenigen Jahren verschwanden die Epidemien. Die weltweite Ausrottung, seit 1988 erklärtes Ziel der WHO, ist trotz eines Rückgangs der Fälle um über 99 Prozent noch nicht erreicht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1967,
    "titel": "Die erste Herztransplantation",
    "text": "Christiaan Barnard verpflanzt in Kapstadt ein Herz; der Patient lebt 18 Tage und stirbt an einer Lungenentzündung, weil die Abstoßung mit hohen Dosen unterdrückt wurde. Das Verfahren wurde erst mit besseren Medikamenten ab 1980 zur Routine."
   },
   {
    "jahr": 1972,
    "titel": "Artemisinin gegen Malaria",
    "text": "In einem geheimen Forschungsprogramm, das China ab 1967 auch zur Unterstützung Nordvietnams betrieb, durchsuchte die Pharmakologin Tu Youyou alte Rezeptsammlungen nach Mitteln gegen Malaria. Ein Hinweis aus einem Text des 4. Jahrhunderts, Einjährigen Beifuß kalt auszuziehen statt zu kochen, führte 1972 zur Isolierung von Artemisinin. Der Wirkstoff wurde zur Grundlage der heutigen Standardtherapie gegen Malaria, gegen die ältere Mittel zunehmend versagten. 2015 erhielt Tu den Nobelpreis für Medizin.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1978,
    "titel": "Das erste Kind aus künstlicher Befruchtung",
    "text": "Am 25. Juli 1978 wird in Oldham in England Louise Brown geboren, das erste Kind, das außerhalb des Körpers gezeugt wurde. Der Physiologe Robert Edwards und der Gynäkologe Patrick Steptoe hatten über ein Jahrzehnt an dem Verfahren gearbeitet, gegen Kritik aus Kirchen und Wissenschaft. Die Debatten über Embryonenschutz, die folgten, prägen das Recht vieler Länder bis heute. Edwards erhielt 2010 den Nobelpreis; weltweit sind nach Schätzungen über zwölf Millionen Menschen so entstanden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1980,
    "titel": "Die Pocken sind ausgerottet",
    "text": "Am 8. Mai 1980 erklärt die WHO die Pocken für ausgerottet – die bislang einzige menschliche Infektionskrankheit, bei der das gelang. Der letzte natürliche Fall war 1977 in Somalia aufgetreten. Entscheidend war ab 1967 eine Strategie, die nicht mehr alle impfte, sondern Fälle aufspürte und deren Umfeld gezielt impfte. Möglich war das nur durch Zusammenarbeit über den Eisernen Vorhang hinweg: Die Sowjetunion hatte das Programm angestoßen und lieferte Impfstoff, die USA Geld und Personal.",
    "vertiefung": "pockenimpfung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1981,
    "titel": "Die ersten AIDS-Fälle",
    "text": "Im Juni 1981 berichtet die US-Seuchenbehörde über seltene Lungenentzündungen bei jungen homosexuellen Männern in Los Angeles. 1983 wird in Paris das Virus isoliert, das später HIV genannt wird. Weil die Krankheit zuerst ausgegrenzte Gruppen traf, wurde sie jahrelang nicht ernst genommen – ein Muster, das sich in der Seuchengeschichte wiederholt. Seit 1996 machen Kombinationstherapien HIV zu einer behandelbaren chronischen Infektion; nach Schätzungen von UNAIDS sind dennoch über 40 Millionen Menschen gestorben.",
    "seit": "2026-10-01"
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
    "text": "Im Januar 2020 wird das Genom des neuen Coronavirus veröffentlicht; im Dezember 2020 werden die ersten mRNA-Impfstoffe zugelassen – vom Erregergenom bis zur Zulassung vergehen weniger als zwölf Monate. Die Technik beruht auf Grundlagenforschung, die jahrzehntelang als aussichtslos galt und kaum Förderung fand; Katalin Karikó und Drew Weissman, die das Problem der Immunreaktion gegen die mRNA lösten, erhielten 2023 den Nobelpreis. Die Pandemie zeigte zugleich die ungleiche Verteilung von Impfstoffen weltweit.",
    "seit": "2026-10-01"
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
    "jahr": -5000,
    "titel": "Kupfer aus dem Feuer",
    "text": "Die ältesten sicheren Belege für das Ausschmelzen von Kupfer aus Erz stammen vom Balkan, um 5000 v. Chr. Dafür braucht es Temperaturen von über tausend Grad – erreichbar nur mit Holzkohle und künstlicher Luftzufuhr. Damit beginnt eine Verbindung, die bis in die Neuzeit bestimmend bleibt: Metall kostet Wald. Bronze und später Eisen machten Werkzeuge und Waffen besser, ihre Erzeugung aber band jede Hütte an große Holzvorräte und machte Brennstoff zum Engpass der Produktion.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -4000,
    "titel": "Segel auf dem Nil",
    "text": "Das Segel ist die erste Maschine, die Naturkraft ohne Muskelkraft nutzt. Auf dem Nil fährt man mit dem Strom nach Norden und mit dem Wind nach Süden – ein Glücksfall der Geographie, der Ägyptens Zusammenhalt mit ermöglichte."
   },
   {
    "jahr": -3500,
    "titel": "Rad und Zugtier",
    "text": "Ochse und Wagen vervielfachen, was ein Mensch bewegen kann. Die ältesten Belege für Räder stammen aus der Zeit um 3500 bis 3000 v. Chr. und tauchen in Mesopotamien, im nördlichen Schwarzmeerraum und in Mitteleuropa fast gleichzeitig auf – wo das Rad zuerst erfunden wurde, ist offen. Entscheidend ist weniger das Rad selbst als die Achse und ein Wegenetz, auf dem sie sich lohnt. Schon zuvor zogen Rinder den Pflug; ihre Muskelkraft blieb für Jahrtausende die stärkste verfügbare Antriebsquelle.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -200,
    "titel": "Das Wasserrad",
    "text": "Im Mittelmeerraum treibt fließendes Wasser Mühlen an; die ältesten Beschreibungen stammen aus dem 3. Jahrhundert v. Chr. Erstmals arbeitet eine Maschine ohne Muskeln – aber ortsgebunden, dort, wo das Wasser ist. In der römischen Kaiserzeit entstanden große Anlagen wie die Mühlenkaskade von Barbegal bei Arles mit sechzehn Rädern. Im Mittelalter verbreitete sich die Wassermühle in ganz Europa: Das englische Domesday Book von 1086 verzeichnet rund 5.600 Mühlen. Sie mahlten Getreide, walkten Tuch und trieben später Hämmer und Blasebälge.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -100,
    "titel": "Kohle in China und Rom",
    "text": "Steinkohle wird in beiden Reichen abgebaut und verfeuert, im römischen Britannien etwa in Schmieden und zum Heizen, in China in Haushalten und Werkstätten. Sie bleibt aber Nebensache, denn Holz und Holzkohle sind fast überall verfügbar, leichter zu handhaben und rauchen weniger. Kohle wird erst wichtig, wo Holz knapp wird: im China der Song-Zeit, als die Wälder um die Eisenzentren abgeholzt waren, und im England des 16. und 17. Jahrhunderts, als die Holzpreise stiegen und Kohle in die Haushalte einzog.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 60,
    "titel": "Herons Dampfball",
    "text": "Heron von Alexandria beschreibt im 1. Jahrhundert eine Kugel, die sich durch ausströmenden Dampf dreht – im Prinzip eine Dampfturbine. Daraus wurde keine Maschine, sondern ein Schauobjekt. Warum, ist eine alte Streitfrage: Manche verweisen auf billige Sklavenarbeit, andere darauf, dass es an präziser Metallbearbeitung, an Kohle am richtigen Ort und an einer Aufgabe fehlte, für die sich der Aufwand gelohnt hätte. Eine Erfindung allein verändert nichts, solange niemand sie braucht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 900,
    "titel": "Windmühlen in Persien",
    "text": "In Ostiran und dem heutigen Afghanistan, besonders in der windreichen Region Sistan, entstehen die ersten belegten Windmühlen; arabische und persische Geographen des 10. Jahrhunderts beschreiben sie. Ihre Flügel drehen sich um eine senkrechte Achse in einem Mauerschacht, der den Wind lenkt. Sie mahlten Getreide und hoben Wasser. Ob die europäische Windmühle des 12. Jahrhunderts von ihnen abstammt oder unabhängig entstand, ist ungeklärt – die Bauweise mit waagerechter Achse ist grundverschieden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1078,
    "titel": "Eisen und Kohle im China der Song",
    "text": "Nach Hochrechnungen des Historikers Robert Hartwell aus Steuerakten erzeugte China um 1078 jährlich rund 125.000 Tonnen Eisen – eine Menge, die England erst gegen Ende des 18. Jahrhunderts erreichte; die Zahl ist allerdings nicht unumstritten. Weil die Wälder um die Hüttenzentren im Norden abgeholzt waren, gingen Hütten und Haushalte zur Steinkohle über. Warum daraus keine Industrialisierung wurde, ist eine der großen offenen Fragen der Wirtschaftsgeschichte.",
    "vertiefung": "song-dynastie",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1180,
    "titel": "Windmühlen in Europa",
    "text": "Wo Gefälle fehlt, tritt Wind an die Stelle des Wassers. Die ältesten sicheren Belege für Windmühlen in Europa stammen aus dem späten 12. Jahrhundert, aus Nordfrankreich, Ostengland und Flandern; anders als die älteren persischen Mühlen drehen sich ihre Flügel um eine waagerechte Achse. In den Niederlanden wird daraus Landgewinnung: Ab dem 15. Jahrhundert pumpen Mühlen ganze Landstriche trocken, die Polder. Wind kostet nichts, ist aber unzuverlässig – bei Flaute standen die Mühlen still.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1450,
    "titel": "Der Hochofen",
    "text": "Mit stärkerem Gebläse und höheren Temperaturen wird flüssiges Roheisen möglich. Wasserkraft treibt die Blasebälge; der Eisenpreis fällt. Der Holzverbrauch der Hütten entwaldet ganze Landstriche – ein früher Fall von Ressourcengrenze."
   },
   {
    "jahr": 1709,
    "titel": "Koks statt Holzkohle",
    "text": "Abraham Darby verhüttet in Coalbrookdale Eisen mit Koks, also entgaster Steinkohle. Damit ist die Eisenerzeugung nicht mehr an Wälder gebunden, sondern an Kohlereviere – die Landkarte der Industrie verschiebt sich für zweihundert Jahre. Der Durchbruch kam allerdings langsam: Koksroheisen eignete sich zunächst vor allem für Guss, und erst ab der Mitte des 18. Jahrhunderts setzte sich das Verfahren in Britannien auf breiter Front durch. Auf dem Kontinent dauerte es noch Jahrzehnte länger.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1712,
    "titel": "Newcomens Dampfmaschine",
    "text": "Gebaut, um Wasser aus Kohlebergwerken zu pumpen – Kohle liefert also zuerst die Energie, um mehr Kohle zu fördern. Thomas Newcomens erste Maschine lief 1712 bei Dudley in den englischen Midlands. Sie nutzte den Unterdruck von kondensierendem Dampf, den Kolben drückte der Luftdruck. Der Wirkungsgrad lag unter einem Prozent, was dort kaum störte, wo der Brennstoff neben der Grube lag. Abseits der Kohle war sie zu teuer – deshalb blieb sie über fünfzig Jahre vor allem eine Bergwerksmaschine.",
    "vertiefung": "dampfmaschine",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1713,
    "titel": "Holznot und Nachhaltigkeit",
    "text": "Der sächsische Oberberghauptmann Hans Carl von Carlowitz veröffentlicht die Sylvicultura oeconomica. Der Bergbau im Erzgebirge verschlang Holz für Gruben und Hütten, die Wälder schwanden. Carlowitz fordert, nur so viel Holz zu schlagen, wie nachwächst, und spricht von nachhaltender Nutzung – der Ursprung des heutigen Begriffs Nachhaltigkeit. Wie allgemein die Holznot war, ist in der Forschung umstritten; regional knappes Holz trieb aber den Übergang zur Kohle. Fossile Energie löste ein Flächenproblem, weil sie den Wald unter der Erde erschloss.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1769,
    "titel": "Watts separater Kondensator",
    "text": "James Watt erhält 1769 ein Patent auf einen vom Zylinder getrennten Kondensator: Der Zylinder muss nicht mehr bei jedem Hub abgekühlt und wieder aufgeheizt werden. Diese scheinbar kleine Änderung senkt den Kohleverbrauch gegenüber Newcomens Maschine auf etwa ein Viertel und macht die Dampfmaschine außerhalb von Bergwerken einsetzbar. Mit der Drehbewegung, die Watt und sein Partner Matthew Boulton in den 1780er Jahren hinzufügten, trieb sie Spinnereien, Mühlen und Hütten an – erst damit wird sie zur Universalmaschine.",
    "vertiefung": "dampfmaschine",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1800,
    "titel": "Die Batterie",
    "text": "Alessandro Volta baut die erste Quelle für dauerhaften elektrischen Strom. Vorher gab es nur Entladungen; jetzt lässt sich Strom als Fluss untersuchen, was die gesamte Elektrochemie erst möglich macht."
   },
   {
    "jahr": 1812,
    "titel": "Gaslicht in London",
    "text": "In London erhält die Gas Light and Coke Company 1812 eine königliche Charta; bald darauf brennen in Westminster die ersten öffentlichen Gaslaternen. Das Gas wurde aus Kohle gewonnen und durch Rohre verteilt – das erste städtische Leitungsnetz für Energie. Fabriken konnten nun auch nachts arbeiten, Straßen wurden sicherer, der Abend länger. Das Prinzip, Energie zentral zu erzeugen und über ein Netz an viele Abnehmer zu liefern, übernahm später die Elektrizität.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1830,
    "titel": "Liverpool–Manchester",
    "text": "Die erste Eisenbahn mit fahrplanmäßigem Personen- und Güterverkehr, durchgehend mit Dampflokomotiven betrieben. Den Zuschlag hatte 1829 bei den Wettfahrten von Rainhill die Rocket von George und Robert Stephenson erhalten. Reisezeiten schrumpfen von Tagen auf Stunden. Schon am Eröffnungstag starb der Abgeordnete William Huskisson unter einer Lokomotive. Bald erzwang die Bahn eine einheitliche Uhrzeit: Britische Bahngesellschaften gingen in den 1840er Jahren zur Londoner Zeit über, weil Fahrpläne mit Ortszeiten nicht funktionierten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1831,
    "titel": "Induktion",
    "text": "Michael Faraday zeigt, dass Bewegung im Magnetfeld Strom erzeugt. Auf die Frage nach dem Nutzen soll er geantwortet haben, man wisse ja auch nicht, was aus einem neugeborenen Kind werde. Jeder Generator der Welt beruht auf diesem Versuch."
   },
   {
    "jahr": 1859,
    "titel": "Erste Ölbohrung in Titusville",
    "text": "Edwin Drake stößt in Pennsylvania in rund 21 Metern Tiefe auf Öl. Gesucht wurde ein Ersatz für Walöl als Lampenbrennstoff: Aus Rohöl destilliertes Kerosin war billiger und brannte heller. Binnen weniger Jahre entstand ein Ölboom mit Spekulation, Überproduktion und Preisstürzen, aus dem John D. Rockefellers Standard Oil als beherrschender Konzern hervorging. Dass daraus der Treibstoff des 20. Jahrhunderts würde, ahnte niemand – Benzin galt zunächst als lästiges Nebenprodukt.",
    "vertiefung": "erdoel",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1876,
    "titel": "Der Ottomotor",
    "text": "Nicolaus Otto baut in Deutz bei Köln den ersten brauchbaren Viertaktmotor; er lief zunächst mit Leuchtgas. Er ist kleiner und beweglicher als die Dampfmaschine und braucht keinen Kessel. Gottlieb Daimler, Wilhelm Maybach und Carl Benz übertrugen das Prinzip auf leichte Benzinmotoren; Benz fuhr 1886 mit seinem Motorwagen. Damit war die Voraussetzung für Auto und Flugzeug geschaffen – und für den Aufstieg des Erdöls vom Lampenbrennstoff zum wichtigsten Energieträger der Welt.",
    "seit": "2026-10-01"
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
    "jahr": 1920,
    "titel": "Der GOELRO-Plan",
    "text": "Die Sowjetregierung beschließt einen Plan zur Elektrifizierung Russlands: ein Netz von dreißig regionalen Kraftwerken, darunter zehn Wasserkraftwerke, in zehn bis fünfzehn Jahren. Lenin fasst das Programm in dem Satz zusammen, Kommunismus sei Sowjetmacht plus Elektrifizierung des ganzen Landes. Der Plan wurde zum Vorbild der späteren Fünfjahrpläne. Strom galt nun als Mittel, ein Agrarland in einen Industriestaat zu verwandeln – eine Vorstellung, die Planer in Ost und West teilten.",
    "seit": "2026-10-01"
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
    "text": "Am 2. Dezember 1942 läuft unter der Tribüne eines Sportstadions der Universität Chicago der erste Kernreaktor, gebaut von einem Team um Enrico Fermi aus Graphitblöcken und Uran. Er lieferte nur eine winzige Leistung, bewies aber, dass sich eine Kettenreaktion starten und steuern lässt. Er war Teil des amerikanischen Waffenprogramms, des Manhattan-Projekts – die zivile Nutzung kam danach, nicht davor. Alle späteren Leistungsreaktoren beruhen auf diesem Nachweis.",
    "vertiefung": "kernspaltung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1954,
    "titel": "Solarzelle mit brauchbarem Wirkungsgrad",
    "text": "In den Bell Labs entsteht die erste Siliziumzelle mit etwa sechs Prozent Wirkungsgrad. Sie war zunächst so teuer, dass sie nur in der Raumfahrt eingesetzt wurde; bis 2020 fiel der Preis je Watt um mehr als das Zehntausendfache."
   },
   {
    "jahr": 1956,
    "titel": "Erstes kommerzielles Kernkraftwerk",
    "text": "Calder Hall in Nordwestengland wird im Oktober 1956 eröffnet; sein Hauptzweck ist Plutonium für britische Kernwaffen, Strom ein Nebenprodukt. Ob es das erste Kernkraftwerk war, hängt von der Zählung ab: Schon 1954 lieferte ein kleiner Reaktor im sowjetischen Obninsk Strom; Calder Hall gilt als erstes Kraftwerk im industriellen Maßstab. Die Doppelnutzung für Strom und Bombe prägt die Kernenergie bis heute – sie erklärt, warum zivile Atomprogramme international überwacht werden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1956,
    "titel": "Hubberts Peak-Oil-These",
    "text": "Der Geologe M. King Hubbert sagt 1956 voraus, dass die Ölförderung der USA um 1970 ihr Maximum erreichen und danach sinken werde – und trifft es zunächst: 1970 lag die Förderung so hoch wie danach jahrzehntelang nicht mehr. Erst Fracking und Horizontalbohrungen hoben sie 2018 wieder darüber hinaus; nicht die Geologie hatte sich geändert, sondern Technik und Preise. Die Grundfrage nach endlichen Vorräten blieb. Heute wird eher diskutiert, ob die Nachfrage ihren Höhepunkt erreicht, bevor das Angebot es tut.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Die Gründung der OPEC",
    "text": "Im September 1960 gründen Iran, Irak, Kuwait, Saudi-Arabien und Venezuela in Bagdad die Organisation erdölexportierender Länder. Anlass war, dass die großen westlichen Ölkonzerne die Preise einseitig gesenkt hatten – und damit die Staatseinnahmen der Förderländer. Zunächst blieb die OPEC wenig wirksam. In den 1970er Jahren aber übernahmen viele Mitgliedstaaten die Kontrolle über ihre Ölfelder, und die Macht über den Ölpreis wanderte von den Konzernen zu den Förderstaaten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1973,
    "titel": "Die Ölkrise",
    "text": "Im Oktober 1973, während des Jom-Kippur-Kriegs, drosseln arabische Förderstaaten die Produktion und verhängen ein Embargo gegen die USA und die Niederlande, die Israel unterstützten. Der Ölpreis vervierfacht sich binnen Monaten. Das führt vor, wie verwundbar Industriestaaten geworden sind: In der Bundesrepublik gab es autofreie Sonntage und Tempolimits, weltweit die ersten Energiesparprogramme. Langfristig folgten Nordseeöl, Kernkraftausbau, Effizienznormen und 1974 die Internationale Energieagentur.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1979,
    "titel": "Three Mile Island",
    "text": "Im März 1979 kommt es in einem Reaktor bei Harrisburg in Pennsylvania zu einer Teilkernschmelze. Es wurde wenig Radioaktivität freigesetzt; die meisten Untersuchungen fanden keine messbaren Gesundheitsfolgen in der Umgebung. Dennoch beendete der Unfall den Ausbau der Kernkraft in den USA für Jahrzehnte – zumal kurz zuvor ein Kinofilm über einen vertuschten Reaktorunfall angelaufen war. Steigende Baukosten und strengere Auflagen taten ein Übriges. Nicht der Schaden entschied, sondern das Vertrauen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1986,
    "titel": "Tschernobyl",
    "text": "Am 26. April 1986 explodiert bei einem Test Block 4 des Kraftwerks Tschernobyl in der Ukraine; radioaktive Wolken ziehen über Europa. Die sowjetische Führung schwieg zunächst – erst als in Schweden erhöhte Strahlung gemessen wurde, räumte Moskau den Unfall ein. Die Zahl der langfristigen Todesopfer ist umstritten. Der Unfall veränderte die Energiepolitik ganzer Länder; dass die Vertuschung öffentlich wurde, untergrub nach verbreiteter Einschätzung – auch Gorbatschows – das Vertrauen in die sowjetische Führung.",
    "vertiefung": "tschernobyl",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1988,
    "titel": "Gründung des Weltklimarats",
    "text": "Dass Verbrennung die Erde erwärmen kann, ist seit dem 19. Jahrhundert bekannt; Svante Arrhenius rechnete es 1896 erstmals durch. 1988 gründen die Weltorganisation für Meteorologie und das UN-Umweltprogramm den Weltklimarat IPCC. Er forscht nicht selbst, sondern bewertet den Stand der Forschung; die Zusammenfassungen seiner Berichte werden von Regierungen Satz für Satz mitbeschlossen. Damit wird die Erwärmung institutionell bewertet und politisch verhandelbar – die Berichte wurden zur Grundlage aller späteren Klimaverträge.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1997,
    "titel": "Das Kyoto-Protokoll",
    "text": "Erstmals verpflichten sich Industriestaaten zu verbindlichen Minderungszielen. Die USA ratifizierten nicht, Schwellenländer waren ausgenommen – der Vertrag zeigte zugleich das Prinzip und seine politische Grenze."
   },
   {
    "jahr": 2000,
    "titel": "Das Erneuerbare-Energien-Gesetz",
    "text": "Der Bundestag beschließt das Erneuerbare-Energien-Gesetz; ein Vorläufer, das Stromeinspeisungsgesetz, galt seit 1991. Es garantiert Betreibern von Wind- und Solaranlagen für zwanzig Jahre feste Vergütungen und den Vorrang ihres Stroms im Netz, die Mehrkosten zahlten die Stromkunden über eine Umlage. Das Modell wurde in Dutzenden Ländern nachgeahmt. Die entstehende Massennachfrage trug wesentlich dazu bei, dass Solarmodule billig wurden – die Fertigung wanderte allerdings großenteils nach China.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2011,
    "titel": "Fukushima",
    "text": "Ein Seebeben und eine Flutwelle führen zu drei Kernschmelzen. Deutschland beschließt den Ausstieg binnen Wochen, Japan schaltet zeitweise alle Reaktoren ab. Die Ereignisse veränderten die Energiepolitik mehrerer Länder stärker als jede Energiedebatte davor."
   },
   {
    "jahr": 2012,
    "titel": "Der Drei-Schluchten-Damm",
    "text": "Am Jangtse geht der Drei-Schluchten-Damm vollständig in Betrieb, mit rund 22.500 Megawatt das leistungsstärkste Kraftwerk der Welt. Der Damm sollte zugleich Hochwasser bändigen und die Schifffahrt verbessern. Für den Stausee wurden nach verschiedenen Schätzungen 1,1 bis 1,4 Millionen Menschen umgesiedelt, Städte und archäologische Stätten versanken. Der Bau zeigt beide Seiten großer Wasserkraft: viel Strom ohne Verbrennung, aber mit tiefen Eingriffen in Landschaft und Leben.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2015,
    "titel": "Das Pariser Abkommen",
    "text": "Auf der Klimakonferenz von Paris verpflichten sich im Dezember 2015 fast alle Staaten, die Erwärmung deutlich unter zwei Grad zu halten und Anstrengungen für 1,5 Grad zu unternehmen. Anders als in Kyoto gilt das Ziel für Industrie- wie Entwicklungsländer – allerdings mit selbst gewählten Beiträgen und ohne Sanktionen. Das Abkommen setzt auf Transparenz und regelmäßige Nachbesserung. Die USA erklärten unter Präsident Trump zweimal den Austritt; die zugesagten Beiträge reichen nach Berechnungen der UN bislang nicht für das Ziel.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Solarstrom wird die billigste Option",
    "text": "Die Internationale Energieagentur bezeichnet Photovoltaik in vielen Märkten als kostengünstigste Stromquelle der Geschichte. Der Preisverfall um über neunzig Prozent seit 2010 wurde von fast allen Prognosen verfehlt."
   },
   {
    "jahr": 2022,
    "titel": "Die europäische Gaskrise",
    "text": "Nach dem russischen Angriff auf die Ukraine drosselt Russland seine Gaslieferungen nach Europa; im September 2022 beschädigen Explosionen die Ostseepipelines Nord Stream. Gas- und Strompreise erreichen Rekordhöhen. Deutschland, das gut die Hälfte seines Erdgases aus Russland bezogen hatte, baut binnen Monaten Flüssiggasterminals. 2026 klagte die Bundesanwaltschaft einen Ukrainer an; ob staatliche Stellen beteiligt waren, ist gerichtlich offen (Stand: Oktober 2026). Wie schon 1973 zeigte sich: Energieversorgung ist Außenpolitik.",
    "seit": "2026-10-01"
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
    "text": "Die hethitischen Gesetze, überliefert auf Tontafeln aus der Hauptstadt Hattuscha in Anatolien, entstanden teils schon früher und wurden über Generationen überarbeitet. Bemerkenswert ist, dass spätere Fassungen ausdrücklich vermerken, eine Strafe sei früher härter gewesen und nun gemildert: Bußzahlungen treten an die Stelle von Körperstrafen. Das Nebeneinander verschiedener Rechtstraditionen im selben Raum zeigt, dass es keinen geraden Weg von hart zu milde gab – und dass Recht schon damals bewusst geändert wurde.",
    "seit": "2026-10-01"
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
    "text": "Um 450 v. Chr. schreibt Rom sein Recht auf öffentlich aufgestellte Tafeln. Nach der Überlieferung hatten die Plebejer das erzwungen, weil patrizische Priester und Beamte das ungeschriebene Gewohnheitsrecht nach Belieben auslegten. Der Fortschritt liegt nicht im Inhalt – Schuldknechtschaft und harte Strafen blieben erlaubt –, sondern in der Sichtbarkeit: Wer die Regel kennt, kann sich auf sie berufen. Der Text selbst ist verloren und nur aus Zitaten rekonstruiert; Schüler lernten ihn noch zu Ciceros Zeit auswendig.",
    "vertiefung": "roemische-republik",
    "seit": "2026-10-01"
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
    "text": "Mit der Constitutio Antoniniana verleiht Caracalla allen freien Bewohnern des Reiches das römische Bürgerrecht. Der Anlass war vermutlich fiskalisch, denn Bürger zahlten Erbschaftssteuer; so deutete es schon der Zeitgenosse Cassius Dio. Die Wirkung war grundlegend: Ein einziges Recht galt nun von Britannien bis Ägypten, lokale Rechtsordnungen traten allmählich zurück. Zugleich verlor das Bürgerrecht seinen Wert als Privileg – an seine Stelle trat die Unterscheidung zwischen Vornehmen und einfachen Leuten vor Gericht.",
    "vertiefung": "roemisches-buergerrecht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 438,
    "titel": "Der Codex Theodosianus",
    "text": "Kaiser Theodosius II. lässt die kaiserlichen Gesetze seit Konstantin sammeln; zwei Kommissionen arbeiten daran ab 429 rund neun Jahre. Der Codex wird 438 veröffentlicht und gilt ab 439 im Ost- wie im Westreich. Er ordnete eine Masse teils widersprüchlicher Erlasse, die selbst Richter nicht mehr überblickten. Weil das Westreich bald zerfiel, wirkte er vor allem dort weiter: Germanische Könige übernahmen ihn in Auszügen für ihre römischen Untertanen, etwa im westgotischen Breviarium von 506.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 533,
    "titel": "Die Digesten des Corpus Iuris Civilis",
    "text": "Justinian lässt das römische Recht ordnen. Im 11. Jahrhundert in Italien wiederentdeckt, wird es zur Grundlage der Rechtswissenschaft in weiten Teilen Europas – ein Text überlebt sein Reich um anderthalb Jahrtausende.",
    "vertiefung": "kaiser-justinian"
   },
   {
    "jahr": 604,
    "titel": "Die Siebzehn-Artikel-Verfassung",
    "text": "Dem japanischen Regenten Shōtoku wird eine Sammlung von siebzehn Grundsätzen für Hof und Beamte zugeschrieben, nach konfuzianischem und buddhistischem Vorbild: Eintracht sei zu ehren, Befehle des Herrschers seien zu befolgen, wichtige Dinge nicht allein zu entscheiden. Ein Gesetzbuch ist sie nicht, und ob der Text wirklich von 604 stammt oder später verfasst wurde, ist umstritten. Sie steht am Anfang der Übernahme chinesischer Staats- und Rechtsformen, die im 8. Jahrhundert zu den Ritsuryō-Gesetzbüchern führte.",
    "vertiefung": "japan-suiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 653,
    "titel": "Das Tang-Gesetzbuch",
    "text": "Der Tang-Kodex, 653 mit einem amtlichen Kommentar veröffentlicht, ordnet Strafmaße nach Tat und nach Stellung von Täter und Opfer: Wer einen Älteren oder Höhergestellten verletzte, wurde härter bestraft als umgekehrt. Die konfuzianische Familien- und Rangordnung wurde so zu Strafrecht. Der Kodex ist der älteste vollständig erhaltene Gesetzeskodex Ostasiens und wurde zum Vorbild für Japan, Korea und Vietnam. Seine Grundzüge lebten in den chinesischen Gesetzbüchern bis zum Ende des Kaiserreichs 1912 fort.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 820,
    "titel": "Asch-Schafii und das islamische Recht",
    "text": "Mit dem Gelehrten asch-Schafii, der 820 in Ägypten starb, liegt eine Methode vor, die das sunnitische Recht über Jahrhunderte ordnet: Recht wird aus dem Koran, der Überlieferung des Propheten, dem Konsens der Gelehrten und dem Analogieschluss abgeleitet. Das islamische Recht entstand damit nicht als Gesetzbuch eines Herrschers, sondern als Gelehrtenrecht mehrerer Rechtsschulen, die einander anerkannten. Herrscher konnten Verwaltungsrecht setzen; die Auslegung des göttlichen Rechts aber lag bei den Gelehrten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1075,
    "titel": "Wiederentdeckung des römischen Rechts",
    "text": "In Bologna beginnt gegen Ende des 11. Jahrhunderts das systematische Studium der Digesten Justinians, die im Westen lange kaum bekannt gewesen waren; als frühester Lehrer gilt Irnerius. Aus der Auslegung eines über fünfhundert Jahre alten Textes, der seinerseits noch ältere Juristenschriften bündelte, entsteht die erste Universität Europas – und die Berufsgruppe der Juristen. Kirche, Städte und Fürsten brauchten solche Fachleute für ihre Verwaltung. So verbreitete sich das gelehrte römische Recht über ganz Kontinentaleuropa.",
    "seit": "2026-10-01"
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
    "text": "Eike von Repgow schreibt um 1220 bis 1235 geltendes sächsisches Gewohnheitsrecht nieder, zuerst auf Latein, dann auf Deutsch – eines der ersten großen Prosawerke in deutscher Sprache. Der Sachsenspiegel war kein Gesetz, sondern eine private Aufzeichnung, wurde aber von Gerichten wie ein Gesetzbuch benutzt, in Teilen Deutschlands bis ins 19. Jahrhundert. Eike hält fest, dass Unfreiheit auf Zwang und Unrecht beruhe, nicht auf Gottes Ordnung – ein früher Satz, dessen Tragweite erst viel später eingelöst wurde.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1236,
    "titel": "Die Charta von Kurukan Fuga",
    "text": "Nach mündlicher Überlieferung verkündete Sundiata Keita, der Gründer des Mali-Reichs, auf einer Versammlung in Kurukan Fuga eine Ordnung für das Zusammenleben der Clans: Rechte und Pflichten der Stände, Regeln für Ehe und Erbe, Schutz von Fremden. Griots gaben den Inhalt über Jahrhunderte weiter; schriftlich rekonstruiert wurde er erst 1998 auf einer Tagung in Guinea. Die UNESCO nahm die Manden-Charta 2009 ins immaterielle Kulturerbe auf. Wie viel davon ins 13. Jahrhundert zurückreicht, lässt sich nicht klären.",
    "seit": "2026-10-01"
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
    "jahr": 1649,
    "titel": "Das russische Gesetzbuch von 1649",
    "text": "Eine Ständeversammlung beschließt unter Zar Alexei das Sobornoje Uloschenije. Es hebt die Frist auf, innerhalb derer entlaufene Bauern zurückgefordert werden konnten, und bindet sie damit dauerhaft und erblich an ihre Grundherren; zudem verbietet es Reisen zwischen Städten ohne Erlaubnis. Der Adel erhielt das alleinige Recht auf leibeigene Bauern und leistete dafür Kriegsdienst. Während die Leibeigenschaft in Westeuropa zurückging, wurde sie in Russland erst zum Gesetz – sie galt bis 1861.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1679,
    "titel": "Der Habeas Corpus Act",
    "text": "Das englische Parlament verabschiedet ein Gesetz, nach dem jeder Verhaftete verlangen kann, binnen kurzer Frist einem Richter vorgeführt zu werden, der die Rechtmäßigkeit der Haft prüft. Das Rechtsmittel selbst war älter; neu war, dass Fristen und Strafen für säumige Beamte es durchsetzbar machten. Der Schutz vor willkürlicher Haft wurde zum Kern jedes Rechtsstaats. Zugleich zeigt die Geschichte des Gesetzes seine Grenze: In Krisenzeiten setzte das Parlament es wiederholt aus.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1689,
    "titel": "Die englische Bill of Rights",
    "text": "Nach der Vertreibung Jakobs II. in der Glorreichen Revolution wird festgeschrieben, was der König nicht darf: ohne Parlament Steuern erheben, Gesetze aussetzen oder in Friedenszeiten ein stehendes Heer halten. Wilhelm III. und Maria II. nahmen die Krone unter diesen Bedingungen an. Die Bill sichert freie Parlamentswahlen und Redefreiheit im Parlament und verbietet grausame und ungewöhnliche Strafen. Die konstitutionelle Monarchie entsteht nicht aus Theorie, sondern aus dem Ergebnis eines Machtkampfs.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1748,
    "titel": "Montesquieu über die Gewaltenteilung",
    "text": "In seinem Werk Vom Geist der Gesetze beschreibt Montesquieu die Trennung von Gesetzgebung, ausführender Gewalt und Rechtsprechung: Freiheit gebe es nur, wo Macht die Macht begrenze. Als Vorbild nannte er England – teils als Fehlinterpretation, denn dort waren Krone, Regierung und Parlament längst eng verflochten. Die Idee wirkte trotzdem, oder gerade deshalb: Die amerikanische Verfassung von 1787 setzte sie konsequent um, und sie gehört seither zum Grundbestand fast jeder Verfassung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1764,
    "titel": "Beccaria gegen Folter und Todesstrafe",
    "text": "Ein 26-Jähriger veröffentlicht anonym eine Schrift, die binnen Jahren in ganz Europa gelesen wird. Seine Argumente – Sicherheit der Strafe wirkt stärker als ihre Härte – führten in mehreren Staaten zur Abschaffung der Folter.",
    "vertiefung": "beccaria"
   },
   {
    "jahr": 1787,
    "titel": "Die Verfassung der Vereinigten Staaten",
    "text": "In Philadelphia entwirft ein Konvent die Verfassung der USA, die älteste noch geltende geschriebene Staatsverfassung. Sie verbindet Montesquieus Gewaltenteilung mit einem Bundesstaat und einem auf Zeit gewählten Präsidenten. Ihre Kompromisse waren teuer: Für die Sitzverteilung zählten Sklaven zu drei Fünfteln, und der Sklavenhandel durfte bis 1808 nicht verboten werden. Die Verfassung ist kurz und schwer zu ändern – nur 27 Zusatzartikel kamen hinzu –, weshalb Gerichte über ihre Auslegung so viel Macht haben.",
    "vertiefung": "amerikanische-revolution",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1789,
    "titel": "Die Erklärung der Menschen- und Bürgerrechte",
    "text": "Am 26. August 1789 verabschiedet die französische Nationalversammlung die Erklärung der Menschen- und Bürgerrechte. Sie erklärt Freiheit, Eigentum, Sicherheit und Widerstand gegen Unterdrückung für angeboren und allgemein. Wer gemeint war, blieb umkämpft: Olympe de Gouges forderte 1791 dieselben Rechte für Frauen ein und wurde 1793 hingerichtet; die Sklaverei in den Kolonien wurde 1794 abgeschafft und 1802 unter Napoleon wieder eingeführt. Der Text wurde dennoch zum Bezugspunkt aller späteren Menschenrechtserklärungen.",
    "vertiefung": "franzoesische-revolution",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1791,
    "titel": "Die amerikanische Bill of Rights",
    "text": "Zehn Zusatzartikel, ratifiziert im Dezember 1791, binden die amerikanische Bundesregierung: Rede-, Presse- und Religionsfreiheit, Schutz vor willkürlicher Durchsuchung, Recht auf Geschworenengerichte. Die Befürworter einer starken Zentralregierung hatten sie zunächst für überflüssig gehalten; ihre Gegner machten sie zur Bedingung für die Ratifizierung der Verfassung. Zugleich blieb die Sklaverei bestehen: Der Widerspruch zwischen erklärtem und geltendem Recht war den Zeitgenossen bewusst und wurde ausgehalten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1804,
    "titel": "Der Code civil",
    "text": "Napoleon lässt das französische Privatrecht in einem Gesetzbuch mit über 2.000 Artikeln vereinheitlichen: klar gegliedert, für Laien lesbar, ohne Standesprivilegien. Eigentum und Vertragsfreiheit stehen im Mittelpunkt. Durch Eroberung und später freiwillig wurde der Code in halb Europa und Lateinamerika übernommen; im Rheinland galt er bis 1900. Zugleich schrieb er die Unterordnung der Ehefrau fest: Sie schuldete dem Mann Gehorsam und konnte ohne seine Zustimmung kaum Verträge schließen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1863,
    "titel": "Der Lieber Code",
    "text": "Mitten im amerikanischen Bürgerkrieg erlässt Präsident Lincoln 1863 Regeln für die Unionsarmee, ausgearbeitet von dem aus Deutschland stammenden Juristen Franz Lieber. Sie regeln den Umgang mit Gefangenen, Zivilisten und Spionen, verbieten Folter und grundlose Zerstörung – erlauben aber vieles, was die militärische Notwendigkeit verlange. Die Vorstellung, dass auch der Krieg Recht kennt, wird von hier aus international: Die Haager Abkommen von 1899 und 1907 griffen auf den Lieber Code zurück.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1865,
    "titel": "Der 13. Zusatzartikel",
    "text": "Die US-Verfassung verbietet Sklaverei – mit einer Ausnahme für Strafgefangene. Diese Klausel wurde unmittelbar danach genutzt, um schwarze Amerikaner massenhaft zu verurteilen und ihre Arbeitskraft zu verpachten.",
    "vertiefung": "amerikanischer-buergerkrieg"
   },
   {
    "jahr": 1889,
    "titel": "Die Meiji-Verfassung",
    "text": "Japan erhält als erstes Land Asiens eine geschriebene Verfassung nach europäischem Muster. Sie orientierte sich, beraten von deutschen Juristen, am preußischen Vorbild und galt als Geschenk des Kaisers an sein Volk. Ein gewähltes Unterhaus kam hinzu, doch wählen durfte zunächst nur gut ein Prozent der Bevölkerung, und Heer und Marine unterstanden direkt dem Kaiser. Diese Lücke in der zivilen Kontrolle nutzten die Militärs in den 1930er Jahren. 1947 trat unter amerikanischer Besatzung eine neue Verfassung an ihre Stelle.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1899,
    "titel": "Die Haager Konventionen",
    "text": "Erstmals einigen sich Staaten in Friedenszeiten auf Regeln für die Kriegführung und richten einen Schiedshof ein. Fünfzehn Jahre später zeigte der Weltkrieg, wie begrenzt solche Regeln ohne Durchsetzung bleiben."
   },
   {
    "jahr": 1900,
    "titel": "Das Bürgerliche Gesetzbuch",
    "text": "Am 1. Januar 1900 tritt das BGB in Kraft und ersetzt im Deutschen Reich ein Nebeneinander aus gemeinem römischem Recht, preußischem Landrecht, Code civil und regionalen Rechten. Über zwei Jahrzehnte hatten Kommissionen daran gearbeitet. Kritiker wie der Jurist Otto von Gierke bemängelten, es sei auf Eigentum und Vertrag zugeschnitten und vernachlässige soziale Fragen. Das BGB beeinflusste Gesetzbücher von Japan bis Griechenland und gilt in Deutschland bis heute, vielfach geändert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1919,
    "titel": "Die Weimarer Reichsverfassung",
    "text": "Die in Weimar beschlossene Verfassung macht Deutschland zur parlamentarischen Demokratie. Sie hebt das Frauenwahlrecht in Verfassungsrang und führt soziale Grundrechte ein; für ihre Zeit war sie eine der fortschrittlichsten. Zugleich enthält sie mit Artikel 48 ein Notverordnungsrecht des Reichspräsidenten, das ab 1930 Regieren am Parlament vorbei ermöglichte und die Zerstörung der Republik erleichterte. Die Verfasser des Grundgesetzes zogen daraus 1949 ihre Lehren. Verfassungen scheitern selten am Text allein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1935,
    "titel": "Die Nürnberger Gesetze",
    "text": "Auf dem Reichsparteitag in Nürnberg beschließt der Reichstag das Reichsbürgergesetz und das Gesetz zum Schutz des deutschen Blutes und der deutschen Ehre. Juden werden zu Staatsangehörigen minderen Rechts herabgestuft, Ehen und Beziehungen zwischen Juden und Nichtjuden verboten. Das Beispiel zeigt, dass Unrecht in der Form des Rechts auftreten kann: Die Gesetze wurden ordnungsgemäß verkündet, von Gerichten angewandt und von Juristen kommentiert. Die Entrechtung bereitete den späteren Massenmord vor.",
    "vertiefung": "holocaust",
    "seit": "2026-10-01"
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
    "text": "Am 10. Dezember 1948 verabschiedet die UN-Generalversammlung in Paris die Allgemeine Erklärung der Menschenrechte ohne Gegenstimme; acht Staaten, darunter die Sowjetunion, Saudi-Arabien und Südafrika, enthielten sich. An der Ausarbeitung wirkten unter anderem Eleanor Roosevelt, René Cassin, Charles Malik und Zhang Pengchun mit. Als Antwort auf den Zivilisationsbruch verabschiedet, ist sie rechtlich nicht bindend. Ihre Wirkung entfaltete sie über Jahrzehnte, indem Verfassungen, Gerichte und Bewegungen sich auf sie beriefen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1949,
    "titel": "Die Genfer Konventionen",
    "text": "Nach dem Zweiten Weltkrieg werden die Genfer Abkommen neu gefasst und erweitert: Schutz von Verwundeten an Land und auf See, von Kriegsgefangenen – und erstmals ausführlich von Zivilisten unter Besatzung, eine direkte Lehre aus den Verbrechen des Krieges. Heute haben alle Staaten der Welt sie ratifiziert; Zusatzprotokolle von 1977 dehnten den Schutz auf Bürgerkriege aus. Die Regeln werden gebrochen – dass es sie gibt, macht den Bruch überhaupt erst benennbar und vor Gericht verhandelbar.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1949,
    "titel": "Das Grundgesetz",
    "text": "Am 23. Mai 1949 wird das Grundgesetz verkündet, ausdrücklich als Provisorium bis zur Wiedervereinigung. Es zieht Lehren aus Weimar: Die Menschenwürde steht in Artikel 1, die Grundrechte binden alle Staatsgewalt unmittelbar, der Kern der Verfassung ist unabänderlich, und ein Kanzler kann nur gestürzt werden, wenn zugleich ein Nachfolger gewählt wird. Das Bundesverfassungsgericht, ab 1951 tätig, wurde zu einem der einflussreichsten Gerichte der Welt. 1990 blieb das Grundgesetz für das vereinte Deutschland in Kraft.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "Die Verfassung Indiens",
    "text": "Am 26. Januar 1950 tritt die Verfassung Indiens in Kraft, mit fast 400 Artikeln eine der längsten der Welt. Den Vorsitz im Redaktionsausschuss hatte B. R. Ambedkar, der selbst einer als unberührbar diskriminierten Gruppe entstammte. Die Verfassung schafft die Unberührbarkeit ab, garantiert gleiche Rechte und erlaubt zugleich Quoten in Bildung und Staatsdienst für benachteiligte Gruppen. Sie führte von Anfang an das allgemeine Wahlrecht für alle Erwachsenen ein – in einem Land, in dem die meisten nicht lesen konnten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1966,
    "titel": "Die beiden UN-Menschenrechtspakte",
    "text": "Die Allgemeine Erklärung von 1948 war nicht bindend. Erst die Pakte über bürgerliche und über soziale Rechte machen daraus Völkerrecht – aufgeteilt in zwei Verträge, weil Ost und West sich nicht einigen konnten, welche Rechte zuerst kommen."
   },
   {
    "jahr": 1996,
    "titel": "Die Verfassung Südafrikas",
    "text": "Nach dem Ende der Apartheid beschließt ein gewähltes Parlament als Verfassunggebende Versammlung eine neue Verfassung; das Verfassungsgericht prüfte sie auf die 1993 ausgehandelten Grundsätze und verlangte Nachbesserungen. Sie verbietet Diskriminierung auch wegen der sexuellen Orientierung und enthält soziale Rechte auf Wohnung, Gesundheit und Wasser, die vor Gericht einklagbar sind. Die Todesstrafe hatte das Gericht schon 1995 verworfen. Die Kluft zwischen garantierten Rechten und sozialer Wirklichkeit bleibt groß.",
    "seit": "2026-10-01"
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
    "jahr": -7000,
    "titel": "Mais aus einem Wildgras",
    "text": "Im Tal des Balsas-Flusses im heutigen Mexiko beginnen Menschen, das Wildgras Teosinte zu züchten; genetische und archäologische Befunde datieren die Anfänge auf rund 9.000 Jahre vor heute. Bis aus den winzigen, harten Ähren ein Maiskolben wurde, vergingen Jahrtausende der Auslese. Erst das Kochen mit Kalk, die Nixtamalisation, machte das Niacin im Mais verfügbar. Wo Mais später ohne diese Technik zum Hauptnahrungsmittel wurde, etwa in Südeuropa, breitete sich die Mangelkrankheit Pellagra aus.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -6000,
    "titel": "Bier und Brot",
    "text": "Getreide wurde vermutlich ebenso früh vergoren wie gebacken. Vergorene Getränke waren keimarm, haltbar und kalorienreich – über Jahrtausende Grundnahrung, nicht Genussmittel. Manche Forscher halten Bier sogar für einen Beweggrund des Getreideanbaus."
   },
   {
    "jahr": -3000,
    "titel": "Bewässerung in Mesopotamien",
    "text": "Im Süden Mesopotamiens, wo es kaum regnet, vervielfachen Kanäle aus Euphrat und Tigris den Ertrag. Sie erfordern Planung, Arbeitseinsatz und Streitschlichtung – Bewässerung und Verwaltung wachsen gemeinsam. Langfristig versalzen sie aber den Boden, weil verdunstendes Wasser Salze zurücklässt. Keilschrifttexte deuten darauf hin, dass sich der Anbau deshalb vom empfindlichen Weizen zur salztoleranteren Gerste verschob; manche Felder wurden aufgegeben. Ein früher Fall menschengemachter Bodenschädigung, dessen Ausmaß die Forschung diskutiert.",
    "seit": "2026-10-01"
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
    "jahr": 760,
    "titel": "Das Buch vom Tee",
    "text": "Der Gelehrte Lu Yu verfasst in China um 760 das Buch vom Tee, die erste bekannte Schrift über Anbau, Zubereitung und Kultur des Getränks. Unter den Tang wird Tee vom Heilmittel zum Alltagsgetränk und vom Staat besteuert; im Grenzhandel tauschte China Tee gegen Pferde aus Tibet und Zentralasien. Als Tee im 17. und 18. Jahrhundert Europa erreichte, wurde er zum Massengut – und weil Britannien dafür Silber nach China zahlen musste, wurde der Opiumhandel zum Mittel, die Bilanz umzudrehen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 800,
    "titel": "Dreifelderwirtschaft und Kummet",
    "text": "Statt der Hälfte ruht nur noch ein Drittel des Ackers: Ein Feld trägt Wintergetreide, eines Sommergetreide oder Hülsenfrüchte, eines liegt brach. Erste Belege stammen aus karolingischer Zeit, durchgesetzt hat sich das System in Nordeuropa über Jahrhunderte. Dazu kommt das Kummet, ein gepolsterter Halsring, mit dem das Pferd ziehen kann, ohne sich zu würgen. Beides zusammen erhöht die Ertragskraft Nordeuropas deutlich und trägt das Bevölkerungswachstum des Hochmittelalters; wie viel jede Neuerung beitrug, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 900,
    "titel": "Reis verändert China",
    "text": "Schnell reifende Reissorten aus Champa erlauben zwei Ernten im Jahr. Die Bevölkerung Chinas verdoppelt sich innerhalb weniger Jahrhunderte – eine der folgenreichsten Pflanzenverbreitungen der Geschichte."
   },
   {
    "jahr": 1315,
    "titel": "Die Große Hungersnot in Europa",
    "text": "Ab 1315 vernichten mehrere verregnete Sommer die Ernten in Nordeuropa; die Hungersnot dauert bis 1317, Viehseuchen verlängern die Not. Städte wie Ypern und Brügge verloren nach Schätzungen fünf bis zehn Prozent ihrer Einwohner. Europa war nach zwei Jahrhunderten Bevölkerungswachstum an die Grenze dessen gestoßen, was seine Felder hergaben. Eine Generation später traf die Pest eine Bevölkerung, deren Kindheit vom Hunger geprägt war; ob das ihre Anfälligkeit erhöhte, wird in der Forschung diskutiert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1430,
    "titel": "Die Chinampas von Tenochtitlan",
    "text": "Rund um Tenochtitlan im Hochtal von Mexiko bewirtschaften die Bewohner im seichten See aufgeschüttete Beete, die Chinampas: schmale Felder aus Schlamm und Pflanzenresten, getrennt durch Kanäle, die zugleich Wasserweg und Bewässerung sind. Die Technik ist älter als die Azteken, wurde aber im 15. Jahrhundert stark ausgebaut. Mehrere Ernten im Jahr halfen, eine der größten Städte ihrer Zeit zu ernähren. In Xochimilco werden Reste davon bis heute bewirtschaftet; sie gehören zum Welterbe.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1492,
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
    "text": "In der englischen Grafschaft Norfolk setzt sich eine vierjährige Fruchtfolge aus Weizen, Rüben, Gerste und Klee durch; Grundbesitzer wie Charles Townshend machten sie bekannt. Klee und Rüben ersetzen die Brache: Klee bindet Stickstoff, Rüben liefern Winterfutter, sodass mehr Vieh überwintert und mehr Mist auf die Felder kommt. Der Ertrag steigt ohne neue Fläche – die landwirtschaftliche Voraussetzung der Industrialisierung, weil weniger Bauern mehr Menschen ernähren. Wie schnell diese Agrarrevolution verlief, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1747,
    "titel": "Lind und der Skorbut",
    "text": "Der Schiffsarzt James Lind teilt im Mai 1747 an Bord der HMS Salisbury zwölf an Skorbut erkrankte Seeleute in Gruppen und gibt ihnen unterschiedliche Zusätze; nur die beiden, die Orangen und Zitronen bekommen, erholen sich rasch. Der Versuch gilt als einer der ersten kontrollierten Vergleiche der Medizingeschichte. Die Konsequenz zog man erst Jahrzehnte später: Die Royal Navy führte 1795 Zitronensaft ein. Warum Zitrusfrüchte wirkten, verstand Lind nicht; erst das 20. Jahrhundert erklärte es mit Vitamin C.",
    "seit": "2026-10-01"
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
    "jahr": 1840,
    "titel": "Liebig und der Mineraldünger",
    "text": "Justus von Liebig veröffentlicht 1840 sein Buch über die organische Chemie in ihrer Anwendung auf Landwirtschaft. Pflanzen ernähren sich nicht von Humus, sondern von mineralischen Nährstoffen wie Stickstoff, Phosphor und Kalium – und der knappste begrenzt den Ertrag. Daraus folgte die Idee, Böden gezielt zu düngen. Den Stickstoff lieferten zunächst Guano von Inseln vor Peru und Salpeter aus Chile, um die Kriege geführt wurden, bis das Haber-Bosch-Verfahren diese Abhängigkeit beendete.",
    "seit": "2026-10-01"
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
    "text": "Der Augustinermönch Gregor Mendel veröffentlicht in Brünn die Ergebnisse seiner Kreuzungsversuche mit Zehntausenden Erbsenpflanzen: Merkmale werden nach festen Zahlenverhältnissen vererbt, nicht vermischt. Die Arbeit bleibt fast vierzig Jahre unbeachtet. Ihre Wiederentdeckung um 1900 durch mehrere Botaniker macht Pflanzenzüchtung erstmals planbar statt zufällig. Auf dieser Grundlage entstanden im 20. Jahrhundert ertragreiche Hybridsorten, etwa beim Mais in den USA, und später die Hochertragssorten der Grünen Revolution.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1869,
    "titel": "Die Margarine",
    "text": "Kaiser Napoleon III. setzt einen Preis für einen billigen, haltbaren Butterersatz aus – für Armee und ärmere Bevölkerung. Der Chemiker Hippolyte Mège-Mouriès entwickelt 1869 aus Rindertalg ein Streichfett, die Margarine; später ersetzten gehärtete Pflanzenöle den Talg. Die Milchwirtschaft wehrte sich heftig: In mehreren US-Bundesstaaten durfte Margarine zeitweise nicht gelb gefärbt verkauft werden. Sie ist ein frühes Beispiel für ein industriell erfundenes Lebensmittel – und für den politischen Streit, den solche Produkte auslösen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1876,
    "titel": "Kühlschiffe",
    "text": "Das französische Kühlschiff Frigorifique erreicht 1876 mit gekühltem Fleisch Buenos Aires; kurz darauf gelangt mit der Paraguay erstmals gefrorenes Fleisch aus Argentinien nach Europa, 1882 folgt ein Transport aus Neuseeland nach London. Damit lösen sich Erzeugung und Verbrauch geographisch voneinander: Argentinien, Uruguay, Australien und Neuseeland werden zu Fleischlieferanten Europas. Für europäische Bauern bedeutete das Konkurrenz, für städtische Arbeiter billigeres Fleisch – der Beginn des globalen Nahrungshandels.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1906,
    "titel": "Das erste Lebensmittelgesetz der USA",
    "text": "Upton Sinclairs Roman Der Dschungel schildert die Zustände in den Schlachthöfen Chicagos. Die Empörung führt 1906 zum Pure Food and Drug Act und zum Fleischbeschaugesetz: Lebensmittel dürfen nicht verfälscht oder falsch etikettiert werden, Fleisch wird staatlich kontrolliert. Sinclair, dem es um die Arbeiter gegangen war, kommentierte, er habe auf das Herz der Öffentlichkeit gezielt und aus Versehen ihren Magen getroffen. Aus der zuständigen Behörde ging die heutige US-Lebensmittel- und Arzneimittelbehörde FDA hervor.",
    "seit": "2026-10-01"
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
    "jahr": 1916,
    "titel": "Hungerblockade und Steckrübenwinter",
    "text": "Die britische Seeblockade schneidet Deutschland im Ersten Weltkrieg von Lebensmittel- und Düngerimporten ab; Missernten und Fehlplanung verschärfen den Mangel. Im Steckrübenwinter 1916/17 ersetzen Rüben Kartoffeln und Brot. Ein deutscher Regierungsbericht bezifferte die Opfer von Hunger und Krankheit im Dezember 1918 auf 763.000; eine Studie von 1928 kam auf rund 424.000, spätere Forscher auf ähnliche oder niedrigere Werte. Weil die Blockade bis Juli 1919 andauerte, prägte sie in Deutschland das Bild eines ungerechten Friedens.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1932,
    "titel": "Die Hungersnot in der Sowjetunion",
    "text": "Zwangskollektivierung, überhöhte Getreideabgaben und Strafmaßnahmen gegen Dörfer führen 1932/33 zu einer Hungersnot mit Millionen Toten, besonders in der Ukraine und in Kasachstan; für die Ukraine liegen die Schätzungen meist zwischen 3,5 und 5 Millionen. Während Menschen verhungerten, exportierte die Sowjetunion Getreide und sperrte Bauern in den Hungergebieten ein. Ob der Holodomor als Völkermord einzustufen ist, wird in der Forschung unterschiedlich beurteilt; mehrere Staaten, darunter Deutschland, haben ihn so anerkannt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1935,
    "titel": "Der Dust Bowl",
    "text": "In den 1930er Jahren verwandeln Dürre und die Folgen jahrzehntelangen Pflügens die südlichen Great Plains der USA in Staubstürme. Hohe Weizenpreise und Traktoren hatten den Umbruch der Grasprärie beschleunigt; ohne die tief wurzelnden Gräser trug der Wind den Boden davon. Hunderttausende verlieren ihre Existenz, viele ziehen nach Kalifornien. Die Regierung reagierte mit einem Bodenschutzdienst, Windschutzstreifen und neuen Pflugmethoden – die erste große Erfahrung, dass moderne Landwirtschaft ihre eigene Grundlage zerstören kann.",
    "vertiefung": "dust-bowl",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1943,
    "titel": "Die Hungersnot in Bengalen",
    "text": "Bis zu drei Millionen Menschen sterben – nicht wegen einer Missernte allein, sondern wegen Preisexplosion, Beschlagnahmungen und Kriegsprioritäten. Amartya Sen zeigte später, dass Hungersnöte selten an fehlender Nahrung liegen, sondern am fehlenden Zugang zu ihr."
   },
   {
    "jahr": 1956,
    "titel": "Der Container",
    "text": "Malcom McLean schickt 1956 ein Schiff mit 58 genormten Behältern von New Jersey nach Houston. Der Container verkürzt das Umladen von Tagen auf Stunden und senkt die Transportkosten drastisch. Nicht die Landwirtschaft, aber ihr Transport verändert sich grundlegend: Zusammen mit Kühlcontainern, die sich in den folgenden Jahrzehnten verbreiten, entkoppelt er Verzehr und Jahreszeit. Bananen, Avocados und Trauben gibt es seither ganzjährig im Supermarkt, und Ernährung wird zu einem globalen Markt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1959,
    "titel": "Die Hungersnot des Großen Sprungs",
    "text": "Unter dem Großen Sprung nach vorn sollen Volkskommunen und Massenkampagnen Ernten und Stahlproduktion Chinas vervielfachen. Funktionäre melden erfundene Rekordernten, der Staat zieht danach Abgaben ein und exportiert weiter Getreide. In der Hungersnot von 1959 bis 1961, der größten der Geschichte, sterben nach Schätzungen zwischen 15 und 55 Millionen Menschen; viele Studien nennen 30 Millionen oder mehr. Lange sprach die Parteiführung von Naturkatastrophen; die Forschung in China bleibt eingeschränkt.",
    "seit": "2026-10-01"
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
    "text": "Rachel Carson beschreibt in Der stumme Frühling, wie das Insektizid DDT sich in Nahrungsketten anreichert und Vogelbestände schädigt. Das Buch löst die moderne Umweltbewegung aus. Die chemische Industrie bekämpfte es massiv und stellte Carson als Panikmacherin dar; ein Beratergremium von Präsident Kennedy bestätigte 1963 jedoch ihre Kernaussagen. Zehn Jahre später wurde DDT in den USA für die Landwirtschaft verboten. Zur Malariabekämpfung ist es international in engen Grenzen weiter zugelassen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1963,
    "titel": "Der Codex Alimentarius",
    "text": "FAO und WHO richten ein Gremium ein, das Standards für Lebensmittel festlegt: Höchstwerte für Rückstände, Hygieneregeln, Kennzeichnung. Die Normen sind rechtlich nicht bindend, werden aber in Handelsstreitigkeiten als Maßstab herangezogen und damit faktisch verbindlich. Wer die Norm setzt, entscheidet mit, wessen Ware exportfähig ist."
   },
   {
    "jahr": 1970,
    "titel": "Industrielle Tierhaltung",
    "text": "Ab der Mitte des 20. Jahrhunderts wird Tierhaltung zur Massenproduktion: Hühner, Schweine und Rinder in großen Ställen, gefüttert mit Kraftfutter. Soja aus Nord- und später Südamerika liefert das Eiweiß und ermöglicht Fleisch in bisher unbekannter Menge und zu bisher unbekanntem Preis; die weltweite Fleischerzeugung hat sich seit 1961 mehr als vervierfacht. Flächenverbrauch und Abholzung, Antibiotikaeinsatz mit der Folge resistenter Keime und die Klimawirkung sind die Kehrseite.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1974,
    "titel": "Die Welternährungskonferenz",
    "text": "In Rom erklärt die erste Welternährungskonferenz das Ziel, Hunger innerhalb eines Jahrzehnts zu beseitigen. Erreicht wurde das nicht; entstanden ist aber die Einsicht, die die Forschung seither bestätigt: Große Hungersnöte des 20. Jahrhunderts beruhten selten auf fehlender Nahrungsmenge, sondern auf Kaufkraft, Transport und politischen Entscheidungen. Amartya Sen hat das 1981 an mehreren Fällen belegt."
   },
   {
    "jahr": 1984,
    "titel": "Die Hungersnot in Äthiopien",
    "text": "Dürre trifft 1983 bis 1985 den Norden Äthiopiens, wo zugleich Bürgerkrieg herrscht. Die Militärregierung unter Mengistu behinderte Hilfe für Rebellengebiete und siedelte Hunderttausende zwangsweise um; Human Rights Watch schreibt einen großen Teil der Toten diesen Maßnahmen zu. Die Schätzungen reichen von 300.000 bis über eine Million Tote. Fernsehbilder lösten 1985 das Konzert Live Aid und eine Welle von Spenden aus. Die Hungersnot wurde zum Lehrstück dafür, dass Hilfe ohne Blick auf die Politik missbraucht werden kann.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1996,
    "titel": "Gentechnik auf dem Feld",
    "text": "Die erste gentechnisch veränderte Sojabohne kommt in den Handel. Die Debatte verläuft in Europa und Amerika seither völlig verschieden – bei weitgehend gleicher Studienlage, aber unterschiedlichem Vertrauen in Behörden und Konzerne."
   },
   {
    "jahr": 2008,
    "titel": "Die Nahrungsmittelpreiskrise",
    "text": "Zwischen 2006 und 2008 verdoppeln sich die Weltmarktpreise für Getreide nahezu. Ernteausfälle, teures Öl, die Umlenkung von Mais in Biosprit, niedrige Lagerbestände, Exportverbote einzelner Länder und Spekulation wirkten zusammen; wie stark die einzelnen Faktoren wogen, ist umstritten. In über dreißig Ländern kommt es zu Unruhen, etwa in Haiti und Ägypten. Verfügbarkeit und Bezahlbarkeit sind zweierlei: Wer einen großen Teil seines Einkommens für Essen ausgibt, den trifft jeder Preissprung direkt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2013,
    "titel": "Ein Drittel geht verloren",
    "text": "Die FAO schätzt, dass etwa ein Drittel aller erzeugten Lebensmittel verdirbt oder weggeworfen wird – in armen Ländern überwiegend auf dem Weg zum Markt, in reichen überwiegend im Handel und im Haushalt."
   },
   {
    "jahr": 2020,
    "titel": "Genug für alle, und trotzdem Hunger",
    "text": "Weltweit wird mehr produziert, als rechnerisch nötig wäre; hungern müssen dennoch Hunderte Millionen. Nach Schätzungen der UN-Ernährungsorganisation FAO litten 2020 etwa 720 bis 810 Millionen Menschen chronischen Hunger, deutlich mehr als vor der Corona-Pandemie. Die Ursachen sind Krieg, Armut und Verteilung – nicht die Ertragskraft der Böden. Am schwersten betroffen sind Regionen mit bewaffneten Konflikten. Das UN-Ziel, den Hunger bis 2030 zu beenden, gilt als kaum noch erreichbar.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2022,
    "titel": "Das Schwarzmeer-Getreideabkommen",
    "text": "Nach dem russischen Angriff sind die ukrainischen Häfen blockiert – und die Ukraine gehört zu den größten Exporteuren von Weizen, Mais und Sonnenblumenöl. Die Preise steigen weltweit, besonders betroffen sind Importländer in Nordafrika und Nahost. Im Juli 2022 vermitteln die Vereinten Nationen und die Türkei ein Abkommen; bis Juli 2023 verlassen fast 33 Millionen Tonnen Lebensmittel die Häfen. Dann lässt Russland das Abkommen auslaufen. Ernährungssicherheit erwies sich erneut als Frage von Krieg und Diplomatie.",
    "seit": "2026-10-01"
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
    "text": "Im westlichen Kleinasien werden um 600 v. Chr. die ersten Münzen geprägt, aus Elektron, einer natürlichen Legierung aus Gold und Silber. Der Stempel garantiert Gewicht und Wert, sodass man nicht mehr wiegen und prüfen muss. Die Erfindung breitet sich in griechischen Städten rasend schnell aus und ermöglicht Söldnerheere, Steuern und Märkte in neuer Form. Dem lydischen König Kroisos werden die ersten getrennten Gold- und Silbermünzen zugeschrieben. Unabhängig davon entstanden in China und Indien eigene Formen von Metallgeld.",
    "vertiefung": "erste-muenzen",
    "seit": "2026-10-01"
   },
   {
    "jahr": -350,
    "titel": "Aristoteles über das Geld",
    "text": "Er unterscheidet den Erwerb zum Lebensunterhalt vom Erwerb um seiner selbst willen und verurteilt den Zins, weil Geld nichts hervorbringe. Dieses Argument prägte das kirchliche Zinsverbot des Mittelalters – und die Umwege, mit denen es umgangen wurde."
   },
   {
    "jahr": -221,
    "titel": "Eine Münze für ganz China",
    "text": "Nach der Einigung Chinas lässt der Erste Kaiser die regionalen Geldformen, darunter Messer- und Spatengeld, durch die Bronzemünze seines Stammstaates Qin ersetzen: rund, mit quadratischem Loch, beschriftet mit ihrem Gewicht, das Banliang. Durch das Loch ließen sich die Münzen auf Schnüre fädeln. Wichtiger als die Form war die Idee dahinter: Der Staat bestimmt allein, was als Geld gilt. Die runde Münze mit eckigem Loch blieb über zwei Jahrtausende bis ins 20. Jahrhundert die Grundform des chinesischen Geldes.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -118,
    "titel": "Kaurischnecken als Weltwährung",
    "text": "Von den Malediven aus dienten Kaurischnecken über Jahrhunderte in Afrika, Indien und China als Zahlungsmittel. Sie waren fälschungssicher, haltbar und teilbar – und wurden später gezielt von europäischen Händlern eingeführt, um Sklaven zu kaufen."
   },
   {
    "jahr": -100,
    "titel": "Handelsnetze über Kontinente",
    "text": "Seide, Weihrauch, Pfeffer und Glas bewegen sich über Zwischenhändler zwischen China, Indien, Arabien und Rom. Kaum jemand legt die ganze Strecke zurück – Fernhandel funktioniert als Kette, nicht als Reise. Neben den Landwegen durch Zentralasien wird der Seeweg wichtig: Seeleute nutzen die Monsunwinde, um von Ägypten nach Indien und zurück zu segeln. In Südindien wurden römische Münzen in großer Zahl gefunden, und Plinius der Ältere klagte, der Luxushandel mit dem Osten koste das Reich jährlich Unsummen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 301,
    "titel": "Diokletians Höchstpreisedikt",
    "text": "Im 3. Jahrhundert finanzierten die Kaiser ihre Heere, indem sie den Silbergehalt der Münzen immer weiter senkten; am Ende enthielten Silbermünzen nur noch wenige Prozent Silber, und die Preise stiegen. Diokletian reagiert 301 mit einem Edikt, das für über tausend Waren und Dienstleistungen Höchstpreise festlegt und Verstöße mit dem Tod bedroht. Es scheiterte: Waren verschwanden vom Markt. Der Versuch gilt als klassisches Beispiel dafür, dass Preisbefehle eine Inflation nicht beheben, deren Ursache im Geld selbst liegt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 312,
    "titel": "Der Solidus",
    "text": "Konstantin führt eine Goldmünze in großem Umfang ein, den Solidus: 72 Stück aus einem römischen Pfund Gold. Während die Kleinmünzen weiter an Wert verloren, blieb der Solidus über sieben Jahrhunderte nahezu unverändert im Feingehalt; erst im 11. Jahrhundert wurde er in Byzanz verschlechtert. Er war im ganzen Mittelmeerraum und weit darüber hinaus begehrt und wurde in Funden von Skandinavien bis Indien entdeckt. Das Wort lebt im Sold, im Soldaten und im italienischen soldi fort.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 696,
    "titel": "Der Dinar des Abd al-Malik",
    "text": "Der Umayyadenkalif Abd al-Malik lässt ab 696/697 eigene Goldmünzen prägen. Zuvor hatte man byzantinische und persische Vorbilder mit Herrscherbildern nachgeahmt; die neuen Dinare tragen nur noch Schrift, Koranverse und Bekenntnisformeln auf Arabisch. Münzen wurden damit zum Medium der Botschaft eines eigenständigen Reiches. Dinar und Silberdirham wurden zur Leitwährung eines Handelsraums von Spanien bis Zentralasien; arabische Dirham fanden sich zu Zehntausenden in Schatzfunden der Wikingerzeit in Skandinavien.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 794,
    "titel": "Pfund, Schilling und Pfennig",
    "text": "Karl der Große ordnet um 793/794 das fränkische Münzwesen neu: Aus einem Pfund Silber werden 240 Pfennige geprägt, zwölf Pfennige ergeben einen Schilling. Geprägt wurde nur der Silberpfennig, Pfund und Schilling waren reine Rechengrößen. Das System verbreitete sich über weite Teile Europas. In Großbritannien galt die Einteilung von Pfund, Shilling und Penny bis zur Umstellung auf das Dezimalsystem 1971 – eine Verwaltungsentscheidung, die fast zwölf Jahrhunderte überdauerte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1024,
    "titel": "Papiergeld in China",
    "text": "In Sichuan, wo schwere Eisenmünzen umliefen, hatten Kaufleute Depositenscheine ausgegeben. 1024 übernimmt der Song-Staat die Ausgabe dieser Jiaozi und macht sie zu staatlichem Papiergeld, befristet und anfangs teilweise durch Münzreserven gedeckt. Als die Regierung zur Finanzierung von Kriegen immer mehr Scheine druckte, verloren sie an Wert. Unter den Mongolen und den frühen Ming wiederholte sich das in größerem Maßstab, bis die Ming im 15. Jahrhundert zum Silber übergingen – eine der ersten dokumentierten Inflationen durch Notendruck.",
    "vertiefung": "papiergeld",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1150,
    "titel": "Die Champagnemessen",
    "text": "Sechs Messen im Jahr machen die Champagne zum Umschlagplatz Europas. Wichtiger als die Waren war die Erfindung, die dort entstand: Verrechnung von Forderungen ohne Bargeld, unter Aufsicht der Messegerichte."
   },
   {
    "jahr": 1250,
    "titel": "Wechsel und italienische Bankiers",
    "text": "Ein Papier in Florenz wird in Brügge in anderer Währung ausgezahlt. Der Wechsel, von italienischen Kaufleuten im 13. Jahrhundert entwickelt, umgeht den gefährlichen Transport von Bargeld. Weil der Umrechnungskurs zwischen den Währungen einen Preis für die Zeit enthalten konnte, umging er, wenn nötig, auch das kirchliche Zinsverbot, ohne dass ein Zins ausgewiesen wurde. Aus dem Wechselgeschäft gingen Handelsbanken hervor, deren Netz von Filialen und Korrespondenten Europa verband – eine Grundlage des späteren Bankwesens.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1324,
    "titel": "Mansa Musa in Kairo",
    "text": "Mansa Musa, Herrscher des Reiches Mali, zieht auf Pilgerfahrt nach Mekka und gibt unterwegs so viel Gold aus, dass in Kairo nach dem Bericht des Gelehrten al-Umari der Goldwert noch zwölf Jahre später gedrückt war. Hinter dem Reichtum stand Westafrikas Rolle als wichtigster Goldlieferant der Mittelmeerwelt: Karawanen brachten das Metall durch die Sahara nach Nordafrika und weiter nach Europa. Auf der Katalanischen Weltkarte von 1375 ist Mansa Musa mit einem Goldklumpen in der Hand abgebildet.",
    "vertiefung": "mali-reich",
    "seit": "2026-10-01"
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
    "text": "Der Franziskaner und Mathematiker Luca Pacioli beschreibt in seiner gedruckten Summa de arithmetica die venezianische Methode der Buchhaltung. Jede Buchung erscheint zweimal, als Soll und als Haben; weil beide Seiten übereinstimmen müssen, fallen Fehler auf. Die Technik war in italienischen Handelsstädten schon rund zweihundert Jahre in Gebrauch, aber erst ihre Veröffentlichung macht sie zum Standard. Sie erlaubt es, Gewinn und Vermögen eines Unternehmens zu berechnen – und macht Unternehmen erstmals nachprüfbar.",
    "vertiefung": "doppelte-buchfuehrung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1519,
    "titel": "Die Fugger kaufen eine Kaiserwahl",
    "text": "Bei der Wahl zum römisch-deutschen König bringt der Augsburger Kaufmann Jakob Fugger über eine halbe Million Gulden auf, den größten Teil der Summe, mit der die Kurfürsten für den Habsburger Karl gewonnen wurden. Gesichert war das Geld durch Bergbaurechte an Silber und Kupfer in Tirol und Ungarn. Als die Rückzahlung stockte, erinnerte Fugger den Kaiser 1523 brieflich daran, dass er ohne ihn die Krone nicht erlangt hätte. Die Abhängigkeit der Habsburger von Krediten wurde später zum Risiko für ihre Gläubiger.",
    "vertiefung": "karl5",
    "seit": "2026-10-01"
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
    "text": "Die Generalstaaten verleihen der Vereinigten Ostindischen Kompanie das niederländische Handelsmonopol für Asien. Sie ist die erste Aktiengesellschaft mit dauerhaftem Kapital und Anteilen, die an der Amsterdamer Börse gehandelt werden. Zugleich darf sie Krieg führen, Festungen bauen und Verträge schließen: Sie unterwarf die Banda-Inseln mit Massakern, um das Muskatmonopol zu sichern, und beherrschte Teile Indonesiens – ein Unternehmen mit Staatsgewalt. 1799 wurde die hoch verschuldete Kompanie aufgelöst.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1637,
    "titel": "Die Tulpenmanie",
    "text": "Das gängige Bild eines volkswirtschaftlichen Zusammenbruchs ist stark übertrieben; betroffen war ein kleiner Kreis von Händlern. Als Lehrstück taugt sie trotzdem – über die Entstehung von Erzählungen ebenso wie über Spekulation."
   },
   {
    "jahr": 1668,
    "titel": "Die erste Zentralbank",
    "text": "1661 gibt die private Stockholms Banco die ersten Banknoten Europas aus, auch weil das schwedische Kupfergeld so schwer war, dass große Zahlungen mit Karren transportiert wurden. Die Bank gab zu viele Noten aus und brach zusammen. 1668 entsteht unter Aufsicht der Ständeversammlung die schwedische Reichsbank, bis heute die älteste noch bestehende Zentralbank der Welt. Der Fall zeigt früh das Grundproblem jedes Papiergeldes: Es funktioniert nur, solange seine Menge begrenzt bleibt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1694,
    "titel": "Gründung der Bank of England",
    "text": "Die Bank of England wird gegründet, um Wilhelm III. den Krieg gegen Frankreich zu finanzieren: Sie leiht dem Staat 1,2 Millionen Pfund und erhält dafür Privilegien. Aus der Staatsschuld entsteht ein handelbarer Markt, abgesichert durch Steuern, die das Parlament bewilligte. Weil Gläubiger einem Parlament mehr trauten als einem König, konnte Britannien sich günstiger verschulden als Frankreich – ein Vorteil in den Kriegen des 18. Jahrhunderts. So entsteht die Fähigkeit moderner Staaten, weit über ihre laufenden Einnahmen hinaus zu handeln.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1720,
    "titel": "Südsee- und Mississippi-Blase",
    "text": "Zwei Spekulationswellen platzen im selben Jahr in London und Paris. Frankreich blieb dem Papiergeld danach jahrzehntelang misstrauisch – eine Finanzkrise prägt die Wirtschaftskultur eines Landes über Generationen."
   },
   {
    "jahr": 1776,
    "titel": "Der Wohlstand der Nationen",
    "text": "Adam Smith argumentiert gegen den Merkantilismus: Reichtum bestehe nicht im angehäuften Gold eines Landes, sondern in der Produktivität seiner Arbeit, und Arbeitsteilung sowie freier Handel steigerten sie. Das berühmte Bild der unsichtbaren Hand kommt im Buch nur einmal vor. Smith warnte zugleich vor Absprachen der Kaufleute und vor Monopolen wie der Ostindien-Kompanie. Das Buch begründete die Volkswirtschaftslehre als eigenes Fach – und wird bis heute selektiver zitiert als gelesen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1816,
    "titel": "Der Goldstandard",
    "text": "Britannien bindet das Pfund nach den Napoleonischen Kriegen gesetzlich an Gold; ab 1821 können Banknoten wieder in Gold eingelöst werden. Andere Staaten folgen vor allem ab den 1870er Jahren, darunter das neu gegründete Deutsche Reich. Feste Wechselkurse fördern Welthandel und Kapitalverkehr des 19. Jahrhunderts. Zugleich nehmen sie den Staaten den Spielraum in der Krise: Wer Gold verlor, musste die Zinsen erhöhen und die Wirtschaft bremsen, auch bei Massenarbeitslosigkeit. In der Weltwirtschaftskrise wurde das zur Falle.",
    "seit": "2026-10-01"
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
    "text": "Das Reich hatte den Krieg auf Pump finanziert und deckte auch danach Defizite mit der Notenpresse; Reparationen und die Besetzung des Ruhrgebiets 1923 trieben das auf die Spitze. Im Herbst 1923 verdoppeln sich die Preise zeitweise alle paar Tage, im November kostet ein Dollar 4,2 Billionen Mark. Ersparnisse wurden ausgelöscht, Schuldner und Besitzer von Sachwerten profitierten. Die Erfahrung prägt die deutsche Wirtschaftspolitik bis heute stärker als die Deflation ab 1930, die politisch weit folgenreicher war.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1929,
    "titel": "Der Börsenkrach",
    "text": "Nach Jahren des Kaufs auf Kredit bricht der Markt ein. Der Krach war nicht die Ursache der Weltwirtschaftskrise, aber ihr Auslöser – entscheidend war, dass Notenbanken und Regierungen anschließend falsch reagierten."
   },
   {
    "jahr": 1931,
    "titel": "Abschied vom Gold",
    "text": "Im September 1931 muss Großbritannien nach massiven Goldabflüssen die Einlösung des Pfunds in Gold aufgeben. Was als Niederlage galt, erwies sich als Befreiung: Die Bank of England konnte die Zinsen senken, und Länder, die den Goldstandard früh verließen, erholten sich deutlich schneller als jene, die wie Frankreich bis 1936 festhielten. Die USA gaben die Goldeinlösung 1933 auf. Zugleich folgten Abwertungswettläufe und Zollschranken, die den Welthandel weiter schrumpfen ließen – eine Erfahrung, aus der Bretton Woods entstand.",
    "vertiefung": "weltwirtschaftskrise",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1944,
    "titel": "Bretton Woods",
    "text": "Im Juli 1944 beschließen 44 Staaten in Bretton Woods eine neue Währungsordnung: feste, aber anpassbare Wechselkurse gegenüber dem Dollar, der seinerseits zu 35 Dollar je Unze an Gold gebunden ist. Weltbank und Internationaler Währungsfonds entstehen. Die britische Delegation unter John Maynard Keynes wollte eine eigene Weltwährung, setzte sich aber gegen die USA nicht durch. Die USA werden zum Anker des Systems – und damit zur Ordnungsmacht der Weltwirtschaft. Die Sowjetunion war vertreten, trat aber nicht bei.",
    "vertiefung": "bretton-woods",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1947,
    "titel": "Das GATT",
    "text": "In Genf unterzeichnen 23 Staaten das Allgemeine Zoll- und Handelsabkommen. Eine geplante Welthandelsorganisation scheiterte am US-Kongress; das als Provisorium gedachte Abkommen blieb fast fünfzig Jahre bestehen. In acht Verhandlungsrunden sanken die Zölle auf Industriegüter drastisch, und jeder Vorteil, den ein Mitglied einem anderen gewährte, galt für alle. 1995 ging daraus die Welthandelsorganisation WTO mit einem Streitschlichtungsverfahren hervor. Die Landwirtschaft blieb lange ausgenommen – zum Nachteil vieler Entwicklungsländer.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "Die Kreditkarte",
    "text": "Diners Club beginnt 1950 in New York mit einer Karte aus Pappe, rund 200 Kunden und 27 Restaurants; nach einer später verbreiteten Werbelegende hatte der Gründer Frank McNamara beim Essen sein Portemonnaie vergessen. Neu war, dass ein Dritter zahlt und später abrechnet. Bezahlen wird von Bargeld gelöst; mit der BankAmericard, dem späteren Visa, kam ab 1958 der laufende Kredit hinzu. Gleichzeitig entsteht ein System, das Kaufverhalten erfassbar macht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1971,
    "titel": "Das Ende der Goldbindung",
    "text": "Im August 1971 hebt Präsident Nixon die Pflicht auf, ausländischen Notenbanken Dollar in Gold einzulösen. Die USA hatten mehr Dollar ausgegeben, als ihre Goldreserven deckten – auch wegen Vietnamkrieg und Sozialprogrammen –, und Frankreich hatte bereits Gold zurückverlangt. Nach Übergangslösungen gingen die großen Währungen 1973 zu frei schwankenden Kursen über. Seither ist alles Geld reines Vertrauensgeld, gedeckt allein durch die Erwartung, dass es angenommen wird, und durch die Glaubwürdigkeit der Notenbanken.",
    "vertiefung": "bretton-woods",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1973,
    "titel": "Ölpreis und Petrodollar",
    "text": "Die Vervierfachung des Ölpreises lenkt gewaltige Summen in die Förderstaaten. Weil diese die Einnahmen nicht alle im eigenen Land anlegen konnten, flossen sie als Einlagen zurück zu westlichen Banken, die sie als Kredite an Staaten in Lateinamerika, Afrika und Osteuropa weiterreichten. Dass Öl weltweit in Dollar gehandelt wird, stärkte zugleich die Stellung der amerikanischen Währung nach dem Ende der Goldbindung. Die Verschuldungskrise vieler Entwicklungsländer der 1980er Jahre beginnt hier.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1982,
    "titel": "Die Schuldenkrise Lateinamerikas",
    "text": "Im August 1982 erklärt Mexiko, seine Auslandsschulden nicht mehr bedienen zu können. Die US-Notenbank hatte die Zinsen zur Inflationsbekämpfung drastisch erhöht, und die in den 1970er Jahren aufgenommenen Kredite wurden unbezahlbar. Bald steckten Dutzende Länder in der Krise, vor allem in Lateinamerika. Umschuldungen waren an Auflagen des Währungsfonds gebunden: Sparprogramme, Privatisierung, Marktöffnung. Die 1980er gelten dort als verlorenes Jahrzehnt; ob die Auflagen die Erholung förderten oder bremsten, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1997,
    "titel": "Die Asienkrise",
    "text": "Am 2. Juli 1997 muss Thailand die Bindung des Baht an den Dollar aufgeben; die Währung stürzt ab. Ausländisches Kapital, das zuvor in Immobilien und Banken geflossen war, zieht binnen Monaten aus Indonesien, Südkorea, Malaysia und anderen Ländern ab. Der Währungsfonds knüpfte Hilfskredite an harte Auflagen, die bald auch Ökonomen als zu streng kritisierten. In Indonesien trug die Krise 1998 zum Sturz Suhartos bei. Viele asiatische Staaten häuften danach große Devisenreserven an, um nie wieder auf den Fonds angewiesen zu sein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1999,
    "titel": "Der Euro",
    "text": "Am 1. Januar 1999 übertragen elf Staaten ihre Geldpolitik der Europäischen Zentralbank; Münzen und Scheine folgen 2002. Nach verbreiteter Deutung war der Euro auch eine Antwort auf die deutsche Einheit: Frankreich wollte die Vormacht der Bundesbank brechen, Deutschland setzte dafür eine unabhängige Zentralbank nach eigenem Vorbild durch. Eine gemeinsame Geldpolitik ohne gemeinsame Finanzpolitik war von Anfang an ein Konstruktionsproblem – die Eurokrise ab 2010 legte es offen. Inzwischen zahlen über zwanzig Staaten mit dem Euro.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2008,
    "titel": "Die Finanzkrise",
    "text": "In den USA waren Hypotheken an Kreditnehmer vergeben worden, die sie kaum bedienen konnten, und als Wertpapiere gebündelt weltweit verkauft. Verbriefte Hypotheken verteilen Risiken, bis niemand mehr weiß, wer sie trägt. Als die Hauspreise fielen, misstrauten Banken einander; mit dem Zusammenbruch von Lehman Brothers im September 2008 erstarrte das Finanzsystem. Die Rettung der Banken durch Staaten wird zur Staatsschuldenkrise – und untergräbt das Vertrauen in beide. Es folgte die schwerste Rezession seit den 1930er Jahren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2009,
    "titel": "Bitcoin",
    "text": "Ein Unbekannter unter dem Namen Satoshi Nakamoto veröffentlicht 2008 ein Konzept, im Januar 2009 läuft das Netz an: ein Zahlungssystem ohne zentrale Instanz, in dem eine öffentliche Kette von Datenblöcken, die Blockchain, doppelte Ausgaben verhindert. Die Menge ist auf 21 Millionen Einheiten begrenzt. Als Währung im Alltag hat es sich kaum durchgesetzt, und der Betrieb verbraucht viel Strom; als Anlage mit starken Kursschwankungen und als Beweis, dass Geld ohne Staat technisch möglich ist, wirkt es fort.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2010,
    "titel": "Die Eurokrise",
    "text": "Ende 2009 wird bekannt, dass Griechenland sein Haushaltsdefizit weit zu niedrig ausgewiesen hatte; 2010 kann es sich nicht mehr am Markt finanzieren. Es folgen Rettungspakete der Euro-Staaten und des Währungsfonds, harte Sparauflagen und Krisen in Irland, Portugal, Spanien und Zypern; die griechische Wirtschaftsleistung schrumpfte um rund ein Viertel. Im Juli 2012 erklärt EZB-Präsident Mario Draghi, man werde alles Nötige tun, um den Euro zu erhalten. Der Satz beruhigte die Märkte mehr als jede Summe zuvor.",
    "seit": "2026-10-01"
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
    "text": "In Uruk in Südmesopotamien entstehen um 3200 v. Chr. die ältesten bekannten Schriftzeugnisse, in Ton gedrückt. Die ersten Texte sind Lieferscheine und Ratiolisten, keine Dichtung: Sie halten Mengen von Gerste, Bier und Vieh fest und wer was schuldet. Schrift entsteht aus Verwaltung – Literatur kommt Jahrhunderte später dazu. Aus Bildzeichen wurden mit der Zeit abstrakte Keile, die auch Silben wiedergaben. Die Keilschrift diente vielen Sprachen des Alten Orients und wurde rund dreitausend Jahre lang geschrieben, bis ins 1. Jahrhundert n. Chr.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -2600,
    "titel": "Hieroglyphen und die Macht der Schreiber",
    "text": "Wer schreiben konnte, gehörte zu einer winzigen Elite. In Ägypten war die Schreiberlaufbahn der sicherste Weg nach oben – ein Lehrtext preist sie ausdrücklich damit an, dass Schreiber keine körperliche Arbeit leisten müssen."
   },
   {
    "jahr": -1400,
    "titel": "Das Alphabet",
    "text": "In der Levante und auf dem Sinai entwickeln Schreiber semitischer Sprachen im 2. Jahrtausend v. Chr. eine Schrift, in der jedes Zeichen einen Laut wiedergibt. Die Phönizier verbreiteten sie über ihre Handelsnetze; die Griechen übernahmen sie und fügten Zeichen für Vokale hinzu. Rund dreißig Zeichen statt hunderter Symbole: Schreiben hört auf, das Handwerk einer Spezialistenkaste zu sein. Die meisten Alphabete der Welt, vom lateinischen bis zum arabischen, gehen auf diesen Ursprung zurück – die folgenreichste Vereinfachung der Kulturgeschichte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1250,
    "titel": "Die Orakelknochen der Shang",
    "text": "In Anyang, der späten Hauptstadt der Shang-Dynastie, ritzen Wahrsager Fragen an die Ahnen in Rinderschulterblätter und Schildkrötenpanzer: Wird die Ernte gut, siegt das Heer, wird die Königin gesund? Diese Orakelinschriften sind die ältesten sicher belegten chinesischen Schriftzeugnisse. Gelehrte wurden erst um 1899 auf sie aufmerksam, als beschriftete Knochen als Arznei gehandelt wurden. Die chinesische Schrift ist seither über drei Jahrtausende in ununterbrochener Linie in Gebrauch.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -500,
    "titel": "Der persische Botenkurs",
    "text": "Stationen entlang der Königsstraße erlaubten den Nachrichtenwechsel von Sardes nach Susa in etwa einer Woche statt in drei Monaten. Herodots Beschreibung dieser Boten steht heute über dem Eingang des New Yorker Hauptpostamts."
   },
   {
    "jahr": -300,
    "titel": "Die Maya-Schrift",
    "text": "In San Bartolo im heutigen Guatemala fanden Archäologen Inschriften aus dem 3. Jahrhundert v. Chr. – die ältesten bisher bekannten Zeugnisse der Maya-Schrift. Sie ist das am besten verstandene voll entwickelte Schriftsystem des vorkolumbischen Amerika, mit Wort- und Silbenzeichen. Schreiber hielten Herrscherdaten, Kriege und Kalender auf Stelen und in Faltbüchern fest. Spanische Missionare verbrannten im 16. Jahrhundert die meisten Bücher; nur vier sind erhalten. Entziffert wurde die Schrift erst ab den 1950er Jahren.",
    "vertiefung": "maya-koenige",
    "seit": "2026-10-01"
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
    "text": "Der Hofbeamte Cai Lun soll dem Kaiser 105 ein Verfahren vorgelegt haben, Papier aus Rinde, Hanf, Lumpen und alten Fischernetzen herzustellen. Ältere Funde zeigen, dass es Papier schon vorher gab; Cai Lun hat es wohl verbessert und amtlich gemacht. Papier ist billiger als Seide, Papyrus oder Pergament und fast überall herstellbar – die Voraussetzung dafür, dass Schrift Massenware werden kann. Die Technik blieb Jahrhunderte auf Ostasien beschränkt; über Zentralasien und die islamische Welt erreichte sie im 12. Jahrhundert Europa.",
    "vertiefung": "china-erfindungen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 794,
    "titel": "Papier in Bagdad",
    "text": "In Bagdad entsteht um 794/795 eine Papierherstellung, gefördert von der Wesirsfamilie der Barmakiden. Die verbreitete Erzählung, chinesische Kriegsgefangene hätten das Wissen nach der Schlacht am Talas 751 nach Samarkand gebracht, stammt aus späteren Quellen und gilt als zweifelhaft; Papier war in Zentralasien wohl schon früher bekannt. Für die Verwaltung des Kalifats wurde es unentbehrlich, und es machte Bücher bezahlbar – die Voraussetzung der Bagdader Übersetzungsbewegung. Über Nordafrika und Spanien gelangte es nach Europa.",
    "vertiefung": "china-erfindungen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 868,
    "titel": "Das Diamant-Sutra",
    "text": "Das älteste erhaltene gedruckte Buch mit Datum: eine gut fünf Meter lange Schriftrolle mit einem buddhistischen Text aus China, im Holztafeldruck hergestellt und auf das Jahr 868 datiert. Sie wurde in einer zugemauerten Höhle bei Dunhuang gefunden und liegt heute in der British Library. Der Druck ist technisch ausgereift, die Technik muss also älter sein. Der Schlusssatz nennt einen Stifter, der das Werk zur freien Verteilung anfertigen ließ – buddhistische Verdienstlehre machte das Vervielfältigen heiliger Texte zum frommen Werk.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1041,
    "titel": "Bewegliche Lettern aus Ton",
    "text": "Bi Sheng entwickelt in China bewegliche Lettern, vierhundert Jahre vor Gutenberg. Sie setzten sich nicht durch: Bei zehntausenden Schriftzeichen war der Holztafeldruck praktischer. Die Technik allein entscheidet nichts – es kommt darauf an, worauf sie trifft."
   },
   {
    "jahr": 1234,
    "titel": "Metalllettern in Korea",
    "text": "In Korea werden bewegliche Metalltypen zwei Jahrhunderte vor Gutenberg eingesetzt; eine Quelle erwähnt ihren Gebrauch um 1234. Das älteste erhaltene Buch aus Metalllettern, das Jikji, wurde 1377 gedruckt und liegt heute in der französischen Nationalbibliothek. Die Technik setzt sich nicht durch: Ein Schriftsystem mit tausenden chinesischen Zeichen macht den Vorteil zunichte, und gedruckt wurde für Hof und Klöster in kleinen Auflagen, nicht für einen Markt. Gut zwei Jahrhunderte später schuf Korea mit Hangul eine Antwort auf das Zeichenproblem.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1446,
    "titel": "Hangul",
    "text": "König Sejong verkündet in Korea eine neue Schrift mit damals 28 Buchstaben, deren Formen teils die Stellung der Sprechorgane nachbilden. Bis dahin schrieb die Elite in chinesischen Zeichen, die Jahre des Lernens erforderten; Sejong begründete die Schrift ausdrücklich damit, dass einfache Leute ihre Anliegen nicht aufschreiben konnten. Konfuzianische Beamte lehnten sie als gemein ab, und das Chinesische blieb über Jahrhunderte die Sprache der Gelehrten. Erst im 20. Jahrhundert setzte sich Hangul allgemein durch.",
    "vertiefung": "hangul",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1450,
    "titel": "Gutenbergs Druckpresse",
    "text": "Nicht die beweglichen Lettern allein, sondern ihr Zusammenspiel mit Presse, Legierung und Ölfarbe macht den Unterschied. Innerhalb von fünfzig Jahren entstehen Millionen Bücher – und die Reformation wird organisierbar.",
    "vertiefung": "buchdruck"
   },
   {
    "jahr": 1470,
    "titel": "Die Quipus der Inka",
    "text": "Das Inkareich, das größte Reich des vorkolumbischen Amerika, kommt ohne Schrift im üblichen Sinn aus. Seine Verwaltung nutzt Quipus: Schnüre mit Knoten, deren Lage, Art und Farbe Zahlen festhalten, etwa für Abgaben, Vorräte und Volkszählungen. Spezialisten konnten sie lesen, Staffelläufer trugen Nachrichten über das Straßennetz. Ob Quipus über Zahlen hinaus auch Erzählungen oder Namen speicherten, ist eine offene Forschungsfrage. Nach der Eroberung ließen spanische Behörden viele vernichten.",
    "vertiefung": "inka",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1490,
    "titel": "Die Post der Taxis",
    "text": "Maximilian I. lässt durch die aus Oberitalien stammende Familie Taxis eine reitende Postverbindung zwischen Innsbruck und den Niederlanden einrichten. An festen Stationen wechseln Reiter und Pferde, sodass Briefe Tag und Nacht unterwegs sind. Ursprünglich für den Hof gedacht, wurde die Post bald auch für Kaufleute und Private geöffnet und zum Geschäft. Die Familie, später Thurn und Taxis, betrieb die Reichspost bis ins 19. Jahrhundert. Verlässliche Laufzeiten machten regelmäßige Zeitungen und den Briefverkehr der Neuzeit erst möglich.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1517,
    "titel": "Flugschriften und die Reformation",
    "text": "Luthers Schriften erreichen binnen Wochen den gesamten deutschen Sprachraum. Zwischen 1518 und 1525 erscheinen schätzungsweise sechs Millionen Exemplare reformatorischer Flugschriften – die erste Medienkampagne der Geschichte.",
    "vertiefung": "reformation"
   },
   {
    "jahr": 1550,
    "titel": "Die Handschriften von Timbuktu",
    "text": "Unter dem Songhai-Reich ist Timbuktu ein Zentrum islamischer Gelehrsamkeit. Handschriften zu Recht, Theologie, Astronomie, Medizin und Dichtung werden kopiert, gehandelt und in Familienbibliotheken über Generationen bewahrt; der Buchhandel gehörte zu den einträglichsten Gewerben der Stadt. Als bewaffnete Islamisten 2012 Timbuktu besetzten, wurden rund 4.000 Handschriften verbrannt oder gestohlen; schätzungsweise 350.000 brachten Bibliothekare und Familien heimlich nach Bamako. Die Bestände widerlegen das Bild eines schriftlosen Afrika.",
    "vertiefung": "songhai-reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1605,
    "titel": "Die erste Zeitung",
    "text": "In Straßburg bittet der Drucker Johann Carolus 1605 den Stadtrat um Schutz für seine Relation, ein wöchentlich gedrucktes Nachrichtenblatt; zuvor hatte er Nachrichten handschriftlich vervielfältigt. Der Weltverband der Zeitungen erkennt sie als erste Zeitung der Welt an. Neuigkeit wird zur Ware mit Erscheinungstermin. Binnen weniger Jahrzehnte erschienen Wochenzeitungen in vielen Handelsstädten, 1650 in Leipzig die erste Tageszeitung. Politik wurde als fortlaufende Geschichte erlebbar, die man Woche für Woche verfolgen konnte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1665,
    "titel": "Die erste wissenschaftliche Zeitschrift",
    "text": "Die Royal Society in London gibt ab 1665 die Philosophical Transactions heraus, nur wenige Wochen nach dem französischen Journal des sçavans. Ihr Herausgeber Henry Oldenburg führt ein, dass Erkenntnis veröffentlicht, datiert und von anderen geprüft wird; wer zuerst veröffentlichte, konnte die Entdeckung für sich beanspruchen. Wissenschaft wird ein Verfahren, nicht nur eine Tätigkeit. Die Zeitschrift erscheint bis heute; ein förmliches Gutachterverfahren setzte sich allerdings erst im 20. Jahrhundert allgemein durch.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1690,
    "titel": "Zensur und Buchmarkt",
    "text": "Wo gedruckt wurde, wurde kontrolliert: Der Index der verbotenen Bücher bestand von 1559 bis 1966. Amsterdam und Genf lebten davon, zu drucken, was anderswo verboten war – Freiheit entstand aus Konkurrenz zwischen Obrigkeiten, nicht aus Einsicht."
   },
   {
    "jahr": 1751,
    "titel": "Die Encyclopédie",
    "text": "Denis Diderot und Jean-Baptiste d'Alembert geben ab 1751 die Encyclopédie heraus; bis 1772 entstehen 28 Bände mit Text und Bildtafeln, über 140 Autoren schrieben mit. Neu war, dass Handwerk und Technik ebenso ernst genommen wurden wie Theologie und Philosophie, und dass Querverweise kritische Gedanken an unverdächtigen Stellen unterbrachten. 1759 wurde das Werk verboten und trotzdem weitergeführt. Es machte Wissen zu etwas, das man ordnen, prüfen und öffentlich zugänglich machen konnte – gegen kirchliche Autorität.",
    "vertiefung": "aufklaerung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1793,
    "titel": "Der optische Telegraf",
    "text": "Claude Chappes Signalmasten mit beweglichen Armen, deren Stellungen Zeichen codierten, werden 1793 vom Nationalkonvent genehmigt; 1794 verbindet die erste Linie Paris und Lille. Beobachter mit Fernrohren gaben die Zeichen von Turm zu Turm weiter. Nachrichten durchqueren Frankreich in Stunden statt Tagen. Das Netz umfasste bald über 500 Stationen – und diente ausschließlich dem Staat, private Nutzung war verboten. Nebel und Dunkelheit legten es lahm; ab der Mitte des 19. Jahrhunderts löste es der elektrische Telegraf ab.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1839,
    "titel": "Die Fotografie",
    "text": "Im August 1839 wird in Paris das Verfahren Louis Daguerres vorgestellt; der französische Staat kauft die Rechte und gibt es frei – nur in England ließ Daguerre ein Patent anmelden. Fast gleichzeitig entwickelt William Henry Fox Talbot ein Negativverfahren, mit dem sich Bilder beliebig vervielfältigen ließen. Erstmals entstehen Bilder ohne die Hand eines Zeichners, die als Beleg gelten konnten. Daraus folgten das Porträt für das Bürgertum, die Kriegsfotografie und die Fotografie als Werkzeug von Polizei und Wissenschaft.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1840,
    "titel": "Penny Post und Briefmarke",
    "text": "Auf Vorschlag von Rowland Hill führt Großbritannien 1840 ein einheitliches Porto ein: ein Penny für einen Brief im ganzen Land, vorab bezahlt mit einer aufgeklebten Marke, der Penny Black. Zuvor richtete sich das Porto nach der Entfernung und zahlte meist der Empfänger, was Briefe für viele unerschwinglich machte. Schon im ersten Jahr stieg die Zahl der Briefe auf mehr als das Doppelte. Die Briefmarke verbreitete sich binnen Jahrzehnten weltweit; 1874 regelte der Weltpostverein den Verkehr über Grenzen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1844,
    "titel": "Der elektrische Telegraf",
    "text": "Samuel Morse sendet 1844 über eine Versuchsleitung von Washington nach Baltimore die Nachricht: Was hat Gott gewirkt. In Britannien hatten Cooke und Wheatstone schon 1837 einen elektrischen Telegrafen patentiert. Der Strom ist schneller als jedes Pferd und jeder Signalturm und arbeitet auch bei Nacht und Nebel. Information löst sich vom Transport. Bahnen steuerten damit ihre Züge, Börsen verglichen Kurse – und weil Zeitsignale weite Strecken in Sekunden überbrückten, wurde eine einheitliche Uhrzeit möglich und nötig.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1851,
    "titel": "Nachrichtenagenturen",
    "text": "Reuter beginnt mit Brieftauben zwischen Aachen und Brüssel, wo das Telegrafennetz eine Lücke hatte. Aus solchen Lückenfüllern entstanden Agenturen, die bis heute bestimmen, welche Nachrichten die Welt erreichen."
   },
   {
    "jahr": 1866,
    "titel": "Das Transatlantikkabel",
    "text": "Ein erstes Kabel von 1858 versagte nach wenigen Wochen. Erst 1866 legt die Great Eastern, das größte Schiff ihrer Zeit, eine dauerhafte Verbindung zwischen Irland und Neufundland. Was zuvor zehn Tage per Dampfer brauchte, dauert nun Minuten. Börsen und Diplomatie ändern ihre Arbeitsweise grundlegend; Regierungen konnten ihren Botschaftern nun direkt Weisungen erteilen. Bis 1900 umspannten überwiegend britische Seekabel die Welt – ein Netz, das im Ersten Weltkrieg zur Waffe wurde, als Britannien die deutschen Kabel kappte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1876,
    "titel": "Das Telefon",
    "text": "Alexander Graham Bell erhält 1876 das Patent auf das Telefon; Elisha Gray hatte am selben Tag eine ähnliche Erfindung angemeldet, und der Prioritätsstreit beschäftigte die Gerichte über Jahre. Erstmals wird die Stimme selbst übertragen, nicht ein Code. Die frühe Vermarktung zielte auf Geschäftsleute, und lange liefen Gespräche über Vermittlungsstellen, in denen vor allem Frauen arbeiteten. Dass es ein Medium privater Nähe würde, sah kaum jemand voraus. In Europa blieb ein Hausanschluss bis weit ins 20. Jahrhundert ein Privileg.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1877,
    "titel": "Der Phonograph",
    "text": "Thomas Edison stellt 1877 den Phonographen vor: Eine Nadel prägt Schallschwingungen in eine Zinnfolie und gibt sie beim Abtasten wieder. Edison dachte an Diktate, Hörbücher für Blinde und sprechende Puppen, nicht an Musik. Mit Emile Berliners Schallplatte von 1887, die sich in großen Mengen pressen ließ, wurde Musik zur Ware. Zum ersten Mal ließ sich eine Stimme über den Tod des Sprechers hinaus hören, und Musik musste nicht mehr selbst gespielt werden – das veränderte, was Menschen hörten und wie oft.",
    "vertiefung": "tonaufnahme",
    "seit": "2026-10-01"
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
    "text": "Im Oktober 1969 tauschen Rechner der Universität von Kalifornien in Los Angeles und des Stanford Research Institute die erste Nachricht aus; bis Jahresende sind vier Rechner verbunden. Finanziert wurde das Netz vom US-Verteidigungsministerium, genutzt zunächst, um knappe Rechenleistung zwischen Forschungseinrichtungen zu teilen. Entscheidend ist nicht die Zahl, sondern das Prinzip: Daten werden in Pakete zerlegt, die sich ihren Weg durch ein Netz ohne Zentrum suchen. Mit den Protokollen TCP/IP, eingeführt 1983, wurde daraus das Internet.",
    "vertiefung": "internet",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1973,
    "titel": "Das erste Handygespräch",
    "text": "Martin Cooper von der Firma Motorola telefoniert am 3. April 1973 auf einer Straße in Manhattan mit einem tragbaren Mobiltelefon – angerufen hat er einen Konkurrenten bei den Bell Labs. Das Gerät wog über ein Kilogramm. Bis zum Verkaufsstart 1983 vergingen zehn Jahre, weil erst ein Netz aus Funkzellen aufgebaut werden musste. Mit digitalen Netzen nach dem GSM-Standard und der SMS wurde das Mobiltelefon in den 1990er Jahren zum Massenprodukt und überholte bald darauf weltweit das Festnetz.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1991,
    "titel": "Das World Wide Web geht online",
    "text": "Tim Berners-Lee entwickelt am Forschungszentrum CERN bei Genf ein System verknüpfter Dokumente, die über Links verbunden und mit einem Browser abrufbar sind; im August 1991 macht er es öffentlich zugänglich. 1993 gibt das CERN die Technik ausdrücklich ohne Lizenzgebühren frei. Diese Entscheidung – nicht die Erfindung selbst – ist der Grund, warum das Web allen offensteht und sich gegen konkurrierende Systeme durchsetzte. Mit grafischen Browsern wie Mosaic wurde das Internet ab 1993 auch für Laien nutzbar.",
    "vertiefung": "internet",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2001,
    "titel": "Wikipedia",
    "text": "Jimmy Wales und Larry Sanger starten im Januar 2001 eine Online-Enzyklopädie, die jeder bearbeiten kann. Viele hielten das für aussichtslos; tatsächlich wurde Wikipedia binnen eines Jahrzehnts zum meistgenutzten Nachschlagewerk der Welt, getragen von Freiwilligen und Spenden, ohne Werbung, in über 300 Sprachen. Das Verfahren ersetzt die Autorität des Fachautors durch Belegpflicht und offene Korrektur. Bekannte Schwächen sind ungleiche Qualität, Lücken bei Themen außerhalb Europas und Nordamerikas und Bearbeitungskonflikte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2004,
    "titel": "Soziale Netzwerke",
    "text": "Die Veröffentlichung wird von Verlagen und Sendern gelöst: Jeder kann senden. Die Folgen – Reichweite ohne Redaktion, Empfehlungsalgorithmen, das Geschäftsmodell Aufmerksamkeit – werden bis heute erst nach und nach verstanden."
   },
   {
    "jahr": 2007,
    "titel": "Das Smartphone",
    "text": "Mit dem iPhone stellt Apple 2007 ein Telefon vor, das im Kern ein Taschencomputer mit Touchscreen ist; bald folgen Googles Android und App-Läden. Das Netz löst sich vom Schreibtisch. In vielen Weltregionen ist es der erste und einzige Internetzugang – ganze Länder überspringen die Festnetzverkabelung. Kamera, Karte, Bank und Zeitung wandern in ein einziges Gerät. Zugleich entsteht eine Dauererreichbarkeit, deren soziale Folgen, etwa für Kinder und Jugendliche, kontrovers erforscht werden.",
    "seit": "2026-10-01"
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
    "text": "Der moderne Mensch breitet sich von Afrika aus über Eurasien aus und trifft dabei auf Neandertaler und Denisovaner. Nichtafrikanische Genome tragen bis heute Anteile dieser Begegnungen, meist im Bereich weniger Prozent. Die Datierung ist umstritten: Es gab offenbar frühere Vorstöße, die keine heutigen Nachfahren hinterließen, die Hauptausbreitung wird meist auf etwa 70.000 bis 50.000 Jahre vor heute gesetzt. Damit beginnt Weltgeschichte als Migrationsgeschichte – jede Bevölkerung außerhalb Afrikas stammt von dieser Wanderung ab.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -16000,
    "titel": "Die Besiedlung Amerikas",
    "text": "Über die Landbrücke Beringia zwischen Sibirien und Alaska, die in der letzten Eiszeit trocken lag, erreichen Menschen Amerika. Wann, ist umstritten: Die lange gültige Annahme, die Clovis-Kultur vor rund 13.000 Jahren sei die erste gewesen, ist durch ältere Fundstellen wie Monte Verde in Chile widerlegt. Die meisten Forscher setzen die Einwanderung heute auf 15.000 bis 20.000 Jahre vor heute an, einzelne Funde deuten auf noch frühere Daten. Ob die Wanderung entlang der Küste oder durch einen eisfreien Korridor verlief, ist offen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -3000,
    "titel": "Die indoeuropäische Ausbreitung",
    "text": "Aus der pontisch-kaspischen Steppe verbreiten sich Sprachen, die heute von Irland bis Indien gesprochen werden. Genomstudien belegen dazu erhebliche Bevölkerungsbewegungen: Um 3000 v. Chr. erreichen Hirten der Jamnaja-Kultur Mitteleuropa, ihr Erbgut macht dort heute einen großen Anteil aus. Ob sie die indoeuropäischen Sprachen mitbrachten oder ob deren Ursprung in Anatolien liegt, war lange die Kernfrage des Fachs; die Steppenhypothese überwiegt heute, ist aber nicht unbestritten. Wie der Wandel ablief, ist offen.",
    "seit": "2026-10-01"
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
    "text": "Jüdische Gemeinden bestehen lange vor 70 n. Chr. in Babylonien, Ägypten und Kleinasien; nach dem babylonischen Exil des 6. Jahrhunderts v. Chr. waren viele Verbannte nicht zurückgekehrt, und Alexandria hatte in hellenistischer Zeit eine der größten jüdischen Gemeinden überhaupt. Die Vorstellung, die Zerstreuung habe erst mit der Tempelzerstörung begonnen, ist eine Vereinfachung. Folgenreich wurde die Diaspora, weil sie Formen hervorbrachte, die ohne Land und Tempel auskommen: Synagoge, Schriftauslegung, Gemeinderecht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 375,
    "titel": "Die Völkerwanderung",
    "text": "Der Begriff täuscht Geschlossenheit vor. Tatsächlich handelte es sich um wandernde Verbände wechselnder Zusammensetzung, die sich oft erst unterwegs als Volk formierten. Als Auslöser gilt traditionell das Vordringen der Hunnen um 375, das gotische Gruppen über die Donau ins Römische Reich trieb; 378 schlugen sie bei Adrianopel ein römisches Heer. Viele dieser Gruppen wollten Rom nicht zerstören, sondern in seine Ordnung aufgenommen werden – als Föderaten mit Land und Sold. Ob Invasion oder Transformation, ist eine Grundsatzfrage der Forschung.",
    "seit": "2026-10-01"
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
    "jahr": 870,
    "titel": "Die Landnahme auf Island",
    "text": "Ab etwa 870 besiedeln Norweger das bis dahin fast menschenleere Island; das Landnahmebuch nennt rund vierhundert Siedler, verfasst erst Jahrhunderte später. Genetische Studien zeigen, dass ein großer Teil der Frauen unter den ersten Siedlern aus Irland und Schottland stammte – viele vermutlich als Unfreie mitgebracht. Ohne König gründeten die Siedler um 930 mit dem Althing eine Versammlung, die Recht sprach. Island zeigt, wie Auswanderung eine neue Gesellschaftsordnung hervorbringen kann – und wie sehr sie auf Zwang beruhen konnte.",
    "vertiefung": "wikinger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1085,
    "titel": "Umsiedlung nach der Reconquista",
    "text": "Mit jeder Eroberung folgten Bevölkerungsverschiebungen: Christen zogen nach Süden, Muslime und Juden nach Granada oder Nordafrika. Nach der Einnahme Toledos 1085 blieben zunächst viele Muslime als Mudéjares unter christlicher Herrschaft, doch die Krone warb gezielt Siedler aus dem Norden an und vergab Land und Stadtrechte an Neuankömmlinge – die sogenannte Repoblación. Herrschaftswechsel bedeutete in Iberien fast immer auch Wanderung, und Wiederbesiedlung war ebenso Machtpolitik wie das Schwert: Wer das Land bewohnte, sicherte die Grenze.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1150,
    "titel": "Die Ostsiedlung",
    "text": "Vom 12. bis 14. Jahrhundert ziehen Bauern, Handwerker und Kaufleute aus Flandern, Holland und Westfalen in die Gebiete östlich von Elbe und Saale, nach Schlesien, Böhmen, Polen und ins Baltikum. Oft riefen slawische Fürsten und Bischöfe sie selbst ins Land, weil Siedler höhere Abgaben versprachen. Es entstanden Hunderte Dörfer und Städte nach deutschem Recht, das auch einheimische Siedlungen übernahmen. Der Nationalismus des 19. und 20. Jahrhunderts deutete den Vorgang als Drang nach Osten um – eine Lesart, die die Forschung verworfen hat.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1250,
    "titel": "Die Besiedlung Aotearoas",
    "text": "Polynesische Seefahrer erreichen Neuseeland, die letzte große Landmasse, die Menschen besiedelten; Radiokarbondaten weisen auf die Zeit um 1250 bis 1300. Damit enden Jahrtausende von Fahrten, mit denen austronesischsprachige Gruppen von Taiwan und Südostasien aus Ozeane erschlossen hatten – von Madagaskar bis zur Osterinsel. Lange hielten Europäer planvolle Fahrten über solche Distanzen für unmöglich; Rekonstruktionsfahrten seit den 1970er Jahren zeigten, dass Navigation nach Sternen, Dünung und Vögeln ohne Instrumente gelingt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1492,
    "titel": "Vertreibung aus Spanien",
    "text": "Nach der Eroberung Granadas verfügen die Katholischen Könige 1492 im Alhambra-Edikt, dass Juden sich taufen lassen oder das Land verlassen müssen. Die Schätzungen, wie viele gingen, reichen von einigen Zehntausend bis rund zweihunderttausend. Viele zogen nach Portugal, Nordafrika und ins Osmanische Reich, etwa nach Saloniki. Muslime wurden ab 1502 zur Konversion gezwungen, ihre Nachfahren, die Morisken, 1609 bis 1614 ausgewiesen. England und Frankreich hatten Juden schon früher vertrieben; hier traf es eine der größten Gemeinden Europas.",
    "vertiefung": "1492",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1620,
    "titel": "Auswanderung aus Glaubensgründen",
    "text": "Verfolgte Gruppen verlassen Europa Richtung Amerika. 1620 landen die Pilgerväter mit der Mayflower in Plymouth, ab 1630 folgen rund zwanzigtausend Puritaner nach Massachusetts, später Quäker nach Pennsylvania und Pietisten aus Deutschland. Religiöse Freiheit wurde dort für die eigene Gruppe beansprucht, nicht immer für die anderen: Massachusetts verbannte Andersdenkende wie Roger Williams und ließ Quäker hinrichten. Aus der Spannung zwischen Glaubensgemeinschaft und Toleranz entstand später die amerikanische Trennung von Kirche und Staat.",
    "seit": "2026-10-01"
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
    "text": "Die Hungersnot treibt bis Mitte der 1850er Jahre rund eine Million Menschen außer Landes, ungefähr ebenso viele sterben. Die Auswanderung reißt danach nicht ab: Bis 1911 sinkt die Bevölkerung der Insel von 8,2 auf 4,4 Millionen. Viele überquerten den Atlantik auf überfüllten Schiffen, deren Sterblichkeit ihnen den Namen Sargschiffe eintrug; andere gingen nach Liverpool und Glasgow. Irland hat bis heute weniger Einwohner als vor 1845 – ein in Europa einmaliger Fall –, und die irische Diaspora prägte Politik und Kirche in Amerika.",
    "vertiefung": "irische-hungersnot",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1860,
    "titel": "Kulis und Kontraktarbeit",
    "text": "Nach dem Ende der Sklaverei ersetzen Millionen Vertragsarbeiter aus Indien und China die Zwangsarbeit auf Plantagen – von Trinidad über Mauritius bis Fidschi. Formal freiwillig, praktisch oft kaum unterscheidbar. Die Bevölkerungszusammensetzung ganzer Länder geht darauf zurück."
   },
   {
    "jahr": 1880,
    "titel": "Die große Transatlantik-Wanderung",
    "text": "Zwischen 1880 und 1914 verlassen über 20 Millionen Menschen Europa, nun vor allem aus Italien, Österreich-Ungarn, dem Russischen Reich und Skandinavien. Möglich machten das Dampfschiffe, die die Überfahrt von Wochen auf rund zehn Tage verkürzten, und Eisenbahnen zu Häfen wie Bremen, Hamburg und Neapel. Viele kehrten zurück, bei den Italienern ein erheblicher Teil. Ziel waren die USA, aber auch Argentinien, Brasilien und Kanada. Für viele Regionen war Auswanderung damals das, was heute als Zuwanderung debattiert wird.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1882,
    "titel": "Der Chinese Exclusion Act",
    "text": "Die USA verbieten Arbeitern aus China die Einwanderung, zunächst für zehn Jahre – das erste Bundesgesetz, das eine Gruppe ausdrücklich wegen ihrer Herkunft ausschloss. Chinesen hatten Eisenbahnen gebaut; in Wirtschaftskrisen wurden sie zum Ziel von Hetze und Gewalt. Das Gesetz wurde 1892 verlängert, 1902 unbefristet gemacht und erst 1943 aufgehoben, als China Verbündeter im Krieg war – mit einer Quote von 105 Personen im Jahr. Mit ihm beginnt die Kontrolle von Einwanderung als Bundesaufgabe, mit Papieren und Abschiebung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1915,
    "titel": "Flucht und Vertreibung im Ersten Weltkrieg",
    "text": "Mit dem Krieg entstehen Massenflucht, Internierungslager und der moderne Pass. Allein im Russischen Reich flohen schätzungsweise mehrere Millionen Menschen vor der Front ins Landesinnere, darunter viele Juden, die die Armee als angeblich unzuverlässig deportieren ließ. Staaten internierten feindliche Ausländer, und Grenzen, die vorher oft ohne Papiere passierbar waren, wurden kontrolliert. Nach dem Krieg blieben die Kontrollen bestehen. Reisefreiheit endet als Selbstverständlichkeit – der Pass wird zur Voraussetzung jeder Reise.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1916,
    "titel": "Die Great Migration",
    "text": "Ab etwa 1910, verstärkt durch den Arbeitskräftemangel im Ersten Weltkrieg, verlassen Afroamerikaner den Süden der USA und ziehen in die Industriestädte des Nordens und Westens: Chicago, Detroit, New York. Bis 1970 sind es rund sechs Millionen Menschen. Sie flohen vor Rassentrennung, Lynchgewalt und der Armut der Pachtwirtschaft und fanden im Norden Arbeit, aber auch Diskriminierung bei Wohnung und Lohn. Die Wanderung veränderte Städte, Musik und Politik: Harlem, der Chicago-Blues und die Bürgerrechtsbewegung sind ohne sie nicht denkbar.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1922,
    "titel": "Der Nansen-Pass",
    "text": "Nach Revolution und Bürgerkrieg in Russland leben über eine Million Geflüchtete ohne gültige Papiere; die Sowjetregierung hatte vielen von ihnen die Staatsangehörigkeit entzogen. Der Hochkommissar des Völkerbunds, Fridtjof Nansen, setzt 1922 einen Ausweis für Staatenlose durch, der Reisen und Arbeitssuche erlaubt. 1924 wird er auf Armenier ausgedehnt, später auf weitere Gruppen; 1942 erkennen ihn 52 Staaten an. Es ist der erste internationale Flüchtlingsausweis und der Anfang davon, dass Flüchtlinge als eigene Rechtskategorie gelten.",
    "seit": "2026-10-01"
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
    "jahr": 1945,
    "titel": "Flucht und Vertreibung der Deutschen",
    "text": "Gegen Kriegsende fliehen Millionen Deutsche vor der Roten Armee; nach der Kapitulation werden Deutsche aus Polen, der Tschechoslowakei und Ungarn ausgewiesen, was das Potsdamer Abkommen als geordnete Überführung vorsah. Betroffen waren schätzungsweise zwölf bis vierzehn Millionen Menschen. Die Schätzungen der Todesopfer reichen von rund einer halben bis über zwei Millionen. Die Vertreibung folgte auf die deutsche Besatzungs- und Vernichtungspolitik und war von Gewalt begleitet. Die Eingliederung der Vertriebenen prägte beide deutsche Staaten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1947,
    "titel": "Die größte Fluchtbewegung der Geschichte",
    "text": "Die Teilung Indiens setzt rund 15 Millionen Menschen in Bewegung – die Schätzungen reichen von zehn bis zwanzig Millionen: Hindus und Sikhs nach Indien, Muslime nach Pakistan. Die Grenzlinie wurde erst nach der Unabhängigkeit veröffentlicht, sodass viele erst danach erfuhren, auf welcher Seite sie lebten. Die Gewalt in Punjab und Bengalen kostete nach Schätzungen zwischen zweihunderttausend und zwei Millionen Menschen das Leben. Keine Migration erfasste so viele in so kurzer Zeit; ihre Folgen bestimmen das Verhältnis beider Staaten bis heute.",
    "vertiefung": "teilung-indiens",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Nach dem Zweiten Weltkrieg",
    "text": "Bei Kriegsende sind in Europa Millionen Menschen fern der Heimat: befreite Zwangsarbeiter, KZ-Überlebende, Kriegsgefangene, Flüchtlinge. Die Alliierten nannten sie Displaced Persons; die meisten wurden 1945 rasch zurückgeführt, doch rund eine Million weigerte sich, etwa in die Sowjetunion zurückzukehren. Für sie entstand die Internationale Flüchtlingsorganisation, die bis 1952 Hunderttausende nach Übersee umsiedelte. Aus dieser Erfahrung ging die Genfer Flüchtlingskonvention von 1951 hervor.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Die palästinensische Flucht",
    "text": "Im Krieg von 1948 fliehen oder werden über 700.000 palästinensische Araber vertrieben, etwa die Hälfte der arabischen Bevölkerung des Mandatsgebiets; auf Arabisch die Nakba, die Katastrophe. Über die Ursachen wird gestritten; die meisten Forschungen seit Öffnung israelischer Archive in den 1980er Jahren sehen Vertreibungen, Gewalt und Furcht davor als zentral. Eine Rückkehr ließ Israel nicht zu. In den Jahrzehnten danach verließen Hunderttausende Juden die arabischen Staaten, meist nach Israel. Die Flüchtlingsfrage ist bis heute ungelöst.",
    "seit": "2026-10-01"
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
    "text": "Der Fall der Blöcke setzt Bewegungen frei, die vier Jahrzehnte unterdrückt waren. Schon im Sommer 1989 fliehen Tausende DDR-Bürger über Ungarn in den Westen; in den folgenden Jahren kommen Spätaussiedler aus der Sowjetunion und Bürgerkriegsflüchtlinge aus Jugoslawien nach Deutschland, das 1993 sein Asylrecht verschärft. Zugleich entstehen neue Grenzregime: Schengen öffnet die Binnengrenzen und verlagert die Kontrollen an die Außengrenze. Freizügigkeit nach innen und Abschottung nach außen sind seitdem zwei Seiten derselben Ordnung.",
    "vertiefung": "ende-kalter-krieg",
    "seit": "2026-10-01"
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
   },
   {
    "jahr": 2017,
    "titel": "Die Flucht der Rohingya",
    "text": "Nach Angriffen einer Rohingya-Miliz auf Grenzposten beginnt das Militär Myanmars im August 2017 sogenannte Räumungsoperationen im Rakhine-Staat; die Regierung sprach von Terrorbekämpfung. Nach Angaben des UNHCR fliehen binnen Monaten über 700.000 Rohingya nach Bangladesch, wo bei Cox's Bazar riesige Lager entstehen. Eine UN-Untersuchungsmission empfahl 2018, die Militärführung wegen Völkermords zu verfolgen; Gambia klagte 2019 vor dem Internationalen Gerichtshof. Die Staatsbürgerschaft war den meisten Rohingya schon seit 1982 verwehrt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2022,
    "titel": "Flucht aus der Ukraine",
    "text": "Nach dem russischen Angriff im Februar 2022 fliehen binnen Wochen Millionen Menschen, überwiegend Frauen, Kinder und Ältere, da wehrfähige Männer nicht ausreisen durften. Die EU wendet erstmals ihre Richtlinie über vorübergehenden Schutz an: Geflüchtete erhalten ohne Asylverfahren Aufenthalt und Arbeitserlaubnis. Nach UNHCR-Angaben waren zeitweise über sechs Millionen Geflüchtete aus der Ukraine in Europa registriert, dazu Millionen Binnenvertriebene. Es ist die größte Fluchtbewegung in Europa seit 1945; die Zahlen ändern sich laufend.",
    "seit": "2026-10-01"
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
    "text": "Die frühesten dauerhaften Siedlungen entstehen vor jeder Schrift und jedem Staat. Jericho besaß schon vor 8000 v. Chr. eine Mauer und einen steinernen Turm, deren Zweck – Schutz vor Feinden oder vor Hochwasser – umstritten ist. Çatalhöyük in Anatolien hatte um 7000 v. Chr. mehrere tausend Einwohner, aber keine Straßen: Die Häuser standen Wand an Wand, man ging über die Dächer und stieg durch Luken hinein. Paläste, Tempel oder Spuren einer Oberschicht fehlen. Ob man solche Orte schon Städte nennen soll, ist eine Frage der Definition.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -3000,
    "titel": "Uruk",
    "text": "Mit schätzungsweise 40.000 bis 50.000 Einwohnern die größte Stadt ihrer Zeit, umgeben von einer neun Kilometer langen Mauer, die die Überlieferung später Gilgamesch zuschrieb. Verwaltung, Schrift und Tempelwirtschaft entstehen hier gemeinsam, nicht nacheinander: Die ältesten Tontafeln sind überwiegend Abrechnungen über Getreide, Bier, Vieh und Arbeitskräfte. Sie lebte von ihrem Umland und von Fernhandel. Uruk zeigt, dass die Stadt mit der Buchhaltung beginnt – wer viele Fremde versorgen muss, braucht Zahlen.",
    "vertiefung": "uruk",
    "seit": "2026-10-01"
   },
   {
    "jahr": -2600,
    "titel": "Mohenjo-Daro",
    "text": "Die Städte der Indus-Kultur haben rechtwinklige Straßenraster, genormte Ziegel und Abwasserkanäle in fast jedem Haus – Standards, die Europa erst im 19. Jahrhundert wieder erreichte. Paläste oder Tempel fehlen; wer dort herrschte, ist unbekannt."
   },
   {
    "jahr": -600,
    "titel": "Babylon unter Nebukadnezar",
    "text": "Unter Nebukadnezar II. wird Babylon zur prächtigsten Stadt des Alten Orients: doppelte Mauern, eine Prozessionsstraße, das mit glasierten Ziegeln verkleidete Ischtar-Tor und der Stufentempel Etemenanki, der vermutlich hinter der biblischen Erzählung vom Turmbau steht. Die Stadt war Sitz des Reiches, Ort der Verbannten aus Juda und Ziel von Händlern aus dem ganzen Orient. Herodots spätere Beschreibung übertreibt die Maße erheblich, und ob es die Hängenden Gärten in Babylon gab, ist umstritten. Das Ischtar-Tor steht heute rekonstruiert in Berlin.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -450,
    "titel": "Hippodamos erfindet den Stadtplan",
    "text": "Hippodamos aus Milet gilt seit Aristoteles als Erfinder der Stadtplanung: Städte als Raster mit getrennten Bereichen für Wohnen, Handel und Kult. Tatsächlich gab es rechtwinklige Anlagen schon früher, auch in griechischen Kolonien; Hippodamos machte aus der Praxis eine Theorie und plante den Hafen Piräus. Das Raster setzte sich durch, weil es gleich große, verteilbare Parzellen schuf – ein politisches Argument in Demokratie und Koloniegründung. Von hier führt eine Linie über römische Lagerstädte bis zum Plan von Manhattan.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -331,
    "titel": "Alexandria",
    "text": "Eine Gründung auf dem Reißbrett wird zur größten Stadt der Mittelmeerwelt: Leuchtturm, Bibliothek, Museion. Sie zeigte, dass eine Stadt durch bewusste Ansiedlung von Gelehrten zum Wissenszentrum werden kann."
   },
   {
    "jahr": -100,
    "titel": "Rom als Millionenstadt",
    "text": "Rom erreicht vermutlich um die Zeitenwende als erste Stadt der Welt eine Million Einwohner; manche Forscher halten einige hunderttausend für plausibler. Möglich machten das Getreideflotten aus Ägypten und Nordafrika, eine staatliche Getreideverteilung an rund 200.000 Bürger und Aquädukte. Die meisten wohnten in mehrstöckigen Mietshäusern, den insulae, die oft einstürzten. Nach dem Ende des Westreichs schrumpft die Stadt auf einen Bruchteil, vielleicht ein Zwanzigstel – ohne Reich keine Versorgung, ohne Versorgung keine Großstadt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 330,
    "titel": "Konstantinopel",
    "text": "Konstantin weiht 330 das alte Byzantion als neue Hauptstadt. Um sie zu füllen, übertrug er ihr Privilegien Roms, darunter eine kostenlose Getreideverteilung, versorgt aus Ägypten. Unter Theodosius II. entstand bis 413 die Landmauer, die über tausend Jahre fast jedem Angriff standhielt; Zisternen sicherten das Wasser auch bei Belagerung. Im 6. Jahrhundert lebten dort schätzungsweise mehrere hunderttausend Menschen. Mauern und Versorgung ließen die Stadt das Westreich um fast ein Jahrtausend überdauern.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 600,
    "titel": "Teotihuacán und die Städte Amerikas",
    "text": "Mit vielleicht 125.000 Einwohnern war Teotihuacán größer als jede europäische Stadt seiner Zeit, mit Wohnkomplexen für ganze Verbände. Wer es erbaute und warum es aufgegeben wurde, ist bis heute offen."
   },
   {
    "jahr": 800,
    "titel": "Chang'an und Bagdad",
    "text": "Beide Städte übertreffen alles Europäische ihrer Zeit an Größe und Ordnung. Chang'an, Hauptstadt der Tang, war ein Rechteck von fast zehn mal neun Kilometern mit über hundert ummauerten Wohnvierteln, die nachts verschlossen wurden; die Einwohnerzahl wird auf bis zu eine Million geschätzt. Bagdad ließ der Kalif al-Mansur ab 762 kreisrund mit dem Palast im Zentrum anlegen. Beide Pläne waren Herrschaftsbilder: Ordnung des Raums als Ordnung der Welt. Bagdad wuchs bald über den Kreis hinaus und wurde Zentrum der Übersetzungsbewegung.",
    "vertiefung": "haus-der-weisheit",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1000,
    "titel": "Córdoba und Kaifeng",
    "text": "Die größten Städte der Welt um 1000 lagen in Andalusien und China – mit Straßenbeleuchtung, Wasserleitungen, Bibliotheken und Nachtmärkten. Europa nördlich der Alpen hatte zu dieser Zeit kaum Städte über 20.000 Einwohner."
   },
   {
    "jahr": 1100,
    "titel": "Cahokia",
    "text": "Am Mississippi, nahe dem heutigen St. Louis, entsteht um 1050 die größte Siedlung nördlich von Mexiko vor der europäischen Ankunft. Auf rund 16 Quadratkilometern standen etwa 120 Erdhügel; der größte, Monks Mound, ist rund dreißig Meter hoch. Die Einwohnerzahl um 1100 wird auf 10.000 bis 20.000 geschätzt. Um 1350 war die Stadt verlassen; diskutiert werden Überschwemmungen, Dürren, Holzmangel und politische Konflikte. Europäische Siedler schrieben die Hügel lange einem verschwundenen fremden Volk zu.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1113,
    "titel": "Angkor",
    "text": "Unter Suryavarman II. entsteht Angkor Wat, Zentrum einer Stadtlandschaft, die sich nach Satelliten- und Laserscans über mindestens tausend Quadratkilometer erstreckte. Angkor war keine dichte Stadt hinter Mauern, sondern ein Netz aus Reisfeldern, Wohnhügeln, Kanälen und riesigen Wasserbecken. Wie viele Menschen dort lebten, ist umstritten; Schätzungen reichen bis zu einer Dreiviertelmillion und mehr. Als das Wassersystem im 14. und 15. Jahrhundert durch Dürren und Starkregen überfordert wurde, verlor die Stadt ihre Grundlage.",
    "vertiefung": "angkor",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1159,
    "titel": "Lübeck und das exportierte Stadtrecht",
    "text": "Heinrich der Löwe gründet Lübeck 1159 neu, nachdem die erste Siedlung abgebrannt war, und stattet sie mit Rechten aus, die Kaufleute anziehen. Das Lübische Recht wird zum Exportgut: Rund hundert Städte an der Ostsee übernehmen es, von Wismar und Rostock bis Reval, und Lübecks Rat dient bei Streitfragen als Oberhof. So entsteht ein Städtenetz, das Recht, Maße und Handelsregeln teilt, ohne einen gemeinsamen Herrscher zu haben. Aus ihm erwächst die Hanse, die 1370 im Frieden von Stralsund sogar dem dänischen König Bedingungen diktiert.",
    "vertiefung": "hanse",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1200,
    "titel": "Die europäische Stadtwerdung",
    "text": "Zwischen 1100 und 1300 entstehen in Europa Tausende Städte, viele als Gründungen von Fürsten, die sich Markt, Zoll und Steuern versprachen. Stadtluft macht frei: Wer ein Jahr und einen Tag in der Stadt lebte, ohne vom Herrn zurückgefordert zu werden, entkam der Leibeigenschaft. Das Sprichwort selbst ist eine Zuspitzung von Rechtshistorikern des 19. Jahrhunderts, gibt aber die Praxis vieler Stadtrechte wieder. Städte werden zu Rechtsräumen eigener Art, mit Rat, Gericht und Bürgereid – eine politische Ordnung neben Adel und Kirche.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1330,
    "titel": "Timbuktu",
    "text": "Nach seiner Pilgerfahrt lässt Mansa Musa von Mali in Timbuktu die Große Moschee Djinguereber errichten. Die Stadt am Rand der Sahara, wo Kamelkarawanen auf den Niger trafen, wird zum Umschlagplatz für Gold, Salz und Bücher. Unter den Songhai lehren im 16. Jahrhundert Hunderte Gelehrte an den Moscheen, Familien sammeln Handschriften über Recht und Astronomie. Die Lehmbauten müssen nach der Regenzeit gemeinschaftlich neu verputzt werden – Instandhaltung als städtisches Ritual. Nach der marokkanischen Eroberung 1591 sank seine Bedeutung.",
    "vertiefung": "songhai-reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1348,
    "titel": "Die Pest trifft die Städte am härtesten",
    "text": "Enge und Handel machten Städte zu Brutstätten: In Florenz, Siena oder Paris starb ab 1348 vermutlich zwischen einem Drittel und der Hälfte der Bevölkerung. Danach entstanden die ersten Gesundheitsbehörden, etwa in Venedig und Florenz, Quarantänevorschriften – Ragusa, das heutige Dubrovnik, verlangte 1377 erstmals eine Isolierung Ankommender – und Bauordnungen. Seuchenschutz wurde zur städtischen Aufgabe, lange bevor man die Ursache kannte. Die Pest kehrte bis ins 18. Jahrhundert wieder, und mit jeder Welle wuchs die Verwaltung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1500,
    "titel": "Tenochtitlán",
    "text": "Die Hauptstadt der Azteken liegt auf einer Insel im Texcoco-See, verbunden durch Dämme, versorgt durch eine doppelte Trinkwasserleitung und ernährt von schwimmenden Feldern; die Schätzungen der Einwohnerzahl reichen von hundertfünfzigtausend bis über zweihunderttausend. Die spanischen Berichte beschreiben eine Stadt, die größer und sauberer war als jede, die die Verfasser kannten. Zwei Jahre nach der Belagerung von 1521 wurde sie überbaut – Mexiko-Stadt steht auf ihren Fundamenten und sinkt seither in den trockengelegten Seeboden."
   },
   {
    "jahr": 1545,
    "titel": "Potosí",
    "text": "Nach der Entdeckung von Silber am Cerro Rico entsteht auf rund 4.000 Metern Höhe in den Anden eine Stadt ohne Landwirtschaft im Umland: Nahrung, Holz und Arbeitskräfte mussten herangeschafft werden, Letztere über die Zwangsarbeit der Mita. Um 1600 hatte Potosí geschätzt 100.000 bis 160.000 Einwohner und gehörte damit zu den größten Städten der Welt. Das Silber floss über Spanien bis nach China. Als die Erzadern ärmer wurden, schrumpfte die Stadt; sie zeigt, wie eine Stadt allein aus einer Ressource entstehen und mit ihr verfallen kann.",
    "vertiefung": "potosi",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1600,
    "titel": "Edo",
    "text": "Nachdem Tokugawa Ieyasu Edo zum Sitz seiner Regierung gemacht hat, wächst die Stadt rasant: Die Fürsten mussten abwechselnd dort residieren und ihre Familien ständig dort lassen, was Gefolgsleute, Händler und Handwerker in großer Zahl anzog. Im 18. Jahrhundert war Edo mit vermutlich rund einer Million Einwohnern eine der größten Städte der Welt. Ein Recyclingsystem für Abfälle und Fäkalien, die als Dünger an Bauern gingen, hielt sie erstaunlich sauber. Häufige Großbrände, etwa 1657, erzwangen Brandschneisen und organisierte Feuerwehren.",
    "seit": "2026-10-01"
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
    "jahr": 1845,
    "titel": "Manchester und die soziale Trennung",
    "text": "Manchester wird zum Inbegriff der Industriestadt: Baumwollspinnereien ziehen Zehntausende Arbeitskräfte an, die Bevölkerung vervielfacht sich, Wohnraum, Wasser und Abwasser halten nicht Schritt. Der Fabrikantensohn Friedrich Engels beschreibt 1845 in der Lage der arbeitenden Klasse in England die Kellerquartiere – und beobachtet, dass die Ausfallstraßen von Läden gesäumt waren, hinter denen wohlhabende Pendler das Elend nicht sahen. Es ist eine der ersten Analysen sozialer Trennung in der Stadt; 1848 folgte ein erstes Gesundheitsgesetz.",
    "seit": "2026-10-01"
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
    "text": "1854 trägt der Arzt John Snow die Cholera-Toten in Soho in einen Stadtplan ein und findet eine einzelne Wasserpumpe in der Broad Street als Zentrum; die Fachwelt hielt dennoch an der Theorie schlechter Luft fest. Erst der große Gestank von 1858, als die Themse im Sommer so roch, dass das Parlament kaum tagen konnte, brachte das Geld: Joseph Bazalgette baute bis 1875 ein Netz von Abfangkanälen, die das Abwasser stromabwärts leiteten. Städte hören damit auf, ihre Bewohner regelmäßig umzubringen; das Modell wurde weltweit kopiert.",
    "vertiefung": "kanalisation-london",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1863,
    "titel": "Die erste U-Bahn",
    "text": "London eröffnet eine unterirdische Bahn – anfangs mit Dampfloks, was den Aufenthalt in den Tunneln unangenehm machte. Die Stadt konnte sich damit in die Fläche ausdehnen, ohne dass die Wege unzumutbar wurden."
   },
   {
    "jahr": 1885,
    "titel": "Das Hochhaus",
    "text": "In Chicago erlauben Stahlskelett und Aufzug erstmals Gebäude, deren Höhe nicht von der Mauerdicke begrenzt ist; als erstes gilt meist das Home Insurance Building von 1885, wobei die Zuschreibung strittig ist. Der Wiederaufbau nach dem Brand von 1871 und hohe Bodenpreise im Geschäftszentrum machten Chicago zum Versuchsfeld; den sicheren Personenaufzug hatte Elisha Otis schon 1857 in New York eingebaut. Der Bodenpreis wird zum Motor der Vertikalen – und New York antwortet 1916 mit dem ersten umfassenden Zonenplan, der Höhe und Abstände regelt.",
    "vertiefung": "hochhaus",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1889,
    "titel": "Der Stadtplaner als Beruf",
    "text": "1889 erscheint Camillo Sittes Buch über den Städtebau nach künstlerischen Grundsätzen, eine Kritik an den geometrischen Stadterweiterungen seiner Zeit. Zur selben Zeit wird der Städtebau in Deutschland und Österreich zur Disziplin mit eigenen Lehrbüchern, Wettbewerben und bald Lehrstühlen; Bebauungspläne regeln Straßenbreiten und Bauhöhen. Ringstraßen und Boulevards, in Wien ab 1857, ersetzen die alten Befestigungen. Mit der Planung kam die Verdrängung: Sanierte Viertel wurden für die bisherigen Bewohner zu teuer.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1898,
    "titel": "Die Gartenstadt",
    "text": "Ebenezer Howard entwirft Städte begrenzter Größe im Grünen, mit gemeinschaftlichem Bodeneigentum. Umgesetzt wurde meist nur die Optik, selten das Eigentumsmodell – Letchworth und Hellerau blieben Ausnahmen."
   },
   {
    "jahr": 1925,
    "titel": "Die autogerechte Stadt",
    "text": "Verkehrsplanung stellt das Auto in den Mittelpunkt. Le Corbusier entwirft 1925 mit dem Plan Voisin den Abriss eines Teils der Pariser Innenstadt zugunsten von Hochhäusern und Schnellstraßen; in den USA zerschneiden Stadtautobahnen nach dem Bundesgesetz von 1956 ganze Viertel, besonders häufig afroamerikanische. In Deutschland wird 1959 Hans Bernhard Reichows Buch Die autogerechte Stadt zum Schlagwort. Was als Fortschritt gilt, zerschneidet über Jahrzehnte gewachsene Nachbarschaften und verlagert das Wohnen in die Vororte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1927,
    "titel": "Wohnungsbau als soziale Frage",
    "text": "Von Wien bis Frankfurt entstehen kommunale Wohnanlagen mit Bad, Licht und Grün für Arbeiterfamilien. Der Wiener Gemeindebau ist bis heute das größte kommunale Wohnungsvermögen Europas – und hält Mieten dort spürbar niedriger."
   },
   {
    "jahr": 1933,
    "titel": "Die Charta von Athen",
    "text": "Auf einer Schiffsreise nach Athen beraten die Architekten des Internationalen Kongresses für Neues Bauen über die funktionale Stadt. Ihr Ergebnis, während des Zweiten Weltkriegs von Le Corbusier als Charta von Athen veröffentlicht, fordert die Trennung von Wohnen, Arbeiten, Erholung und Verkehr, Licht und Luft statt enger Altstädte. Nach 1945 prägte das Programm Wiederaufbau und Großsiedlungen in vielen Ländern. Die Funktionstrennung erzeugte jedoch Schlafstädte, Pendlerverkehr und leere Zentren; hier setzten Kritiker wie Jane Jacobs an.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "Die informelle Stadt",
    "text": "Ein wachsender Teil der Weltbevölkerung wohnt in selbstgebauten Siedlungen ohne Rechtstitel. Heute betrifft das über eine Milliarde Menschen. Entscheidend für ihre Lage ist selten die Bausubstanz, sondern die Frage, ob Wasser, Strom und Rechtssicherheit dazukommen."
   },
   {
    "jahr": 1950,
    "titel": "Die getrennte Stadt der Apartheid",
    "text": "Das Apartheidregime Südafrikas teilt mit dem Group Areas Act die Städte nach Hautfarbe auf: Jeder nach Rasse klassifizierten Bevölkerungsgruppe wurden Wohngebiete zugewiesen, wer im falschen wohnte, musste weichen. In Kapstadt wurde der gemischte Stadtteil District Six 1966 zum Weißengebiet erklärt; über 60.000 Bewohner wurden in die Cape Flats verdrängt, ihre Häuser abgerissen. Ähnlich traf es Sophiatown in Johannesburg. Das Gesetz wurde 1991 aufgehoben, doch die Trennung wirkt fort, weil Townships fern der Arbeitsplätze liegen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Brasília",
    "text": "Innerhalb von vier Jahren entsteht im Landesinneren eine Hauptstadt nach einem einzigen Entwurf, mit getrennten Zonen für Wohnen, Verwaltung und Verkehr und ohne Straßenkreuzungen im Zentrum. Die Trennung funktioniert für Autos und schlecht für alles andere; die Arbeiter, die sie bauten, durften nicht im Plangebiet wohnen und errichteten Satellitenstädte, in denen heute die Mehrheit der Bevölkerung lebt. Brasília ist das größte gebaute Beispiel dafür, was ein Plan nicht vorsehen kann."
   },
   {
    "jahr": 1960,
    "titel": "Singapur baut für alle",
    "text": "Singapur gründet das Housing and Development Board, um Slums und überfüllte Kampongs zu ersetzen. Innerhalb weniger Jahrzehnte baut der Staat Hochhaussiedlungen mit Läden und Schulen, verkauft die Wohnungen auf Erbpacht an die Bewohner und lässt sie ab 1968 mit Pflichtersparnissen aus der Sozialversicherung bezahlen. Heute lebt rund vier Fünftel der Bevölkerung in solchen Wohnungen; Quoten nach ethnischer Zugehörigkeit sollen Abschottung verhindern. Das Modell beruht auf seltenen Bedingungen: Der Staat besitzt den größten Teil des Bodens.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1961,
    "titel": "Der Widerspruch",
    "text": "1961 erscheint Jane Jacobs' Buch Tod und Leben großer amerikanischer Städte. Die Journalistin zeigt an Vierteln wie ihrem eigenen, Greenwich Village, dass lebendige Straßen Dichte, gemischte Nutzungen, kurze Blöcke und Menschen auf dem Gehweg brauchen – die Augen auf der Straße. Mit Nachbarn kämpft sie gegen Abrisspläne, darunter Robert Moses' Schnellstraße durch Lower Manhattan, die 1969 aufgegeben und 1971 formell gestrichen wurde. Ihr Buch wurde zur Grundlage einer Planung, die vom Bestand ausgeht statt vom Abriss.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1970,
    "titel": "Die Straße zurückholen",
    "text": "Europäische Städte richten Fußgängerzonen ein, zunächst als Handelsmaßnahme gegen die Einkaufszentren am Rand. In Kopenhagen wird die Strøget schrittweise erweitert und über Jahrzehnte gezählt, was daraufhin geschieht – der Aufenthalt im öffentlichen Raum nimmt zu, ohne dass der Umsatz einbricht. Damit beginnt die Umkehrung der autogerechten Stadt, jetzt mit Messwerten statt mit Leitbildern."
   },
   {
    "jahr": 1980,
    "titel": "Shenzhen",
    "text": "China erklärt das Grenzgebiet zu Hongkong zu einer seiner ersten vier Sonderwirtschaftszonen. Investoren erhalten Steuervorteile und Bauland, Arbeitskräfte aus dem ganzen Land ziehen zu, oft ohne städtisches Wohnrecht nach dem Hukou-System. Die Erzählung vom kleinen Fischerdorf ist verkürzt – der Kreis Bao'an hatte bereits Hunderttausende Einwohner –, doch das Wachstum ist beispiellos: Die Volkszählung 2020 ergab über 17 Millionen. Shenzhen wurde zum Vorbild der Urbanisierung Chinas und zur Werkstatt der Elektronikindustrie.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1990,
    "titel": "Schrumpfende Städte",
    "text": "Nicht alle Städte wachsen: Deindustrialisierung und Abwanderung leeren Detroit, Leipzig oder Ostrava. Planung für Schrumpfung ist ein junges Fach – Rückbau ist ungleich schwerer zu gestalten als Wachstum."
   },
   {
    "jahr": 2008,
    "titel": "Mehrheitlich städtisch",
    "text": "Nach Berechnungen der Vereinten Nationen lebt um 2007/2008 erstmals mehr als die Hälfte der Menschheit in Städten; 1950 war es knapp ein Drittel. Der weitere Zuwachs findet fast vollständig in Asien und Afrika statt, wo Städte wie Lagos, Dhaka oder Kinshasa in wenigen Jahrzehnten auf viele Millionen anwuchsen. Die Zahl ist mit Vorsicht zu lesen, weil jedes Land selbst definiert, was als Stadt gilt – die Schwellen reichen von wenigen hundert bis zu Zehntausenden Einwohnern. Einheitliche Maßstäbe ergeben teils deutlich höhere Anteile.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Die Stadt in der Pandemie",
    "text": "Dichte gilt kurzzeitig als Gefahr: Lockdowns leeren die Innenstädte, Büros stehen leer, wer kann, arbeitet von zu Hause. Untersuchungen fanden allerdings, dass weniger die Dichte an sich als beengtes Wohnen, Armut und Arbeit ohne Möglichkeit zum Homeoffice das Ansteckungsrisiko erhöhten. Städte wie Paris, Mailand oder Bogotá richteten in Wochen provisorische Radwege ein und gaben Straßenraum an Fußgänger und Gastronomie. Die Erfahrung befeuert Debatten über Grünflächen, Homeoffice und darüber, wem die Straße gehört.",
    "seit": "2026-10-01"
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
    "text": "Wer Schulden nicht zahlen konnte, verlor die Freiheit oder musste Frau, Sohn oder Tochter in Schuldknechtschaft geben – aber begrenzt auf drei Jahre, im vierten waren sie freizulassen. Daneben kennt der Kodex Sklaven als Eigentum, mit festen Preisen und harten Strafen für Fluchthilfe. Babylonische Könige verkündeten zudem gelegentlich Schuldenerlasse, die Schuldknechte freikommen ließen. Schon früh gibt es also Regeln, die Unfreiheit einhegen, statt sie zu beseitigen – und die Unterscheidung zwischen befristeter und dauerhafter Unfreiheit.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -700,
    "titel": "Die Heloten Spartas",
    "text": "Sparta unterwirft im 8. und 7. Jahrhundert v. Chr. Messenien und macht dessen Bevölkerung zu Heloten: an das Land gebundene Unfreie, die einen Teil der Ernte an spartanische Bürger abliefern mussten und als Gemeinbesitz des Staates galten. Weil die Heloten die Spartaner weit überzahlten, lebte Sparta in ständiger Furcht vor Aufständen; nach antiken Berichten erklärten die Ephoren ihnen jährlich den Krieg, damit ihre Tötung nicht als Befleckung galt. Spartas militärische Lebensweise ist auch eine Folge dieses Zwangsverhältnisses.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -594,
    "titel": "Solon löst die Schuldknechte aus",
    "text": "In Athen waren verschuldete Bauern zu Abhängigen geworden oder als Sklaven ins Ausland verkauft worden; es drohte Bürgerkrieg. Solon erlässt mit der Seisachtheia, der Lastenabschüttelung, die Schulden und verbietet Darlehen, für die man mit der eigenen Person haftet. Verkaufte Athener ließ er nach eigenen Worten zurückholen. Die Schuldknechtschaft ist damit für Bürger abgeschafft, die Sklaverei bleibt – sie trifft nun vor allem Nichtathener. Die Freiheit des Bürgers und die Unfreiheit der Fremden entstehen in Athen gleichzeitig.",
    "seit": "2026-10-01"
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
    "text": "Aus einer Gladiatorenschule in Capua brechen rund siebzig Männer aus, unter ihnen der Thraker Spartacus. Ihr Heer wächst durch entlaufene Sklaven auf Zehntausende und schlägt zwei Jahre lang römische Armeen. Ein Programm zur Abschaffung der Sklaverei ist nicht überliefert; offenbar wollten viele Italien verlassen, andere plündern. Crassus besiegt sie 71 v. Chr.; Rom antwortet mit 6.000 Kreuzigungen entlang der Via Appia. Seit dem 18. Jahrhundert wurde Spartacus zum Symbol von Revolutionären – was mehr über diese als über ihn sagt.",
    "vertiefung": "spartacus",
    "seit": "2026-10-01"
   },
   {
    "jahr": 332,
    "titel": "Der Kolonat",
    "text": "Ein Gesetz Konstantins bestimmt, dass Kolonen – Pächter auf großen Gütern –, die ihr Land verlassen, wie Sklaven in Ketten zurückgebracht werden dürfen. Der Staat wollte so Steuern sichern, die nach Kopf und Boden erhoben wurden. Im Lauf des 4. und 5. Jahrhunderts wurden Kolonen an ihre Scholle gebunden, ihr Status wurde erblich. Ob darin eine direkte Vorstufe der mittelalterlichen Hörigkeit liegt, ist in der Forschung umstritten. Sichtbar wird, dass Unfreiheit auch aus Steuerverwaltung entstehen kann, nicht nur aus Krieg oder Schulden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 869,
    "titel": "Der Zandsch-Aufstand",
    "text": "Ostafrikanische Zwangsarbeiter in den Salzsümpfen des Irak erheben sich und halten vierzehn Jahre lang ein eigenes Gebiet. Der Aufstand erschütterte das Abbasidenkalifat und führte dazu, dass Massenzwangsarbeit dort weitgehend aufgegeben wurde."
   },
   {
    "jahr": 1000,
    "titel": "Unfreiheit in Europa",
    "text": "Die antike Sklaverei geht über Jahrhunderte in Leibeigenschaft über – rechtlich milder, faktisch für viele kaum: Hörige waren an Land und Herrn gebunden, durften aber Familie und Besitz haben. Noch das englische Domesday Book von 1086 verzeichnet rund ein Zehntel der Erfassten als Sklaven. Der Sklavenhandel verlagert sich an die Ränder Europas: Wikinger und Händler aus Verdun oder Prag verkauften gefangene Heiden ins muslimische Spanien und nach Osten. Weil viele Verschleppte Slawen waren, leitet sich das Wort Sklave von ihnen ab.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1250,
    "titel": "Die Mamluken",
    "text": "In Ägypten übernehmen die Mamluken die Macht – Militärsklaven, als Jungen gekauft, zum Islam bekehrt, ausgebildet und freigelassen; anfangs kamen sie meist als Kiptschak-Türken aus der Steppe nördlich des Schwarzen Meeres, ab dem späten 14. Jahrhundert vor allem als Tscherkessen aus dem Kaukasus. Ihr Sultanat besiegte 1260 bei Ain Dschalut die Mongolen und herrschte bis 1517. Die Elite ergänzte sich meist durch neu gekaufte Sklaven statt durch Söhne. Sklaverei konnte so ein Weg zu höchster Macht sein – was den Zwang des Kaufs nicht aufhebt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1380,
    "titel": "Die Knabenlese",
    "text": "Das Osmanische Reich beginnt im späten 14. Jahrhundert, christliche Jungen vor allem auf dem Balkan auszuheben, zum Islam zu bekehren und als Sklaven des Sultans auszubilden. Die Devşirme füllte das Janitscharenkorps und die Palastverwaltung; Ausgehobene stiegen bis zum Großwesir auf. Für die Familien war sie ein gewaltsamer Verlust, manche sahen darin auch eine Aufstiegschance. Die Einrichtung beruhte auf persönlicher Abhängigkeit vom Herrscher, nicht auf Arbeitskraft. Im frühen 18. Jahrhundert endete sie.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1444,
    "titel": "Beginn des atlantischen Systems",
    "text": "Im August 1444 werden im portugiesischen Lagos über zweihundert verschleppte Westafrikaner an Land gebracht und öffentlich aufgeteilt; der Chronist Zurara beschreibt sie mitleidig und rechtfertigt sie mit der Bekehrung. Päpstliche Bullen erlaubten Portugal wenig später die Unterwerfung Ungläubiger. Bald kauften die Portugiesen Gefangene von afrikanischen Herrschern, statt sie zu rauben, und brachten sie auf Zuckerinseln wie São Tomé. Aus einer alten Institution wird ein transkontinentales Wirtschaftssystem, gestützt auf die Plantage.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1500,
    "titel": "Die Mita in den Anden",
    "text": "Spanien übernahm die inkaische Arbeitspflicht und richtete sie auf die Silberminen von Potosí aus. Ganze Dörfer mussten jährlich Männer stellen; viele kehrten nicht zurück. Regionen, die zum Einzugsgebiet gehörten, sind statistisch bis heute ärmer.",
    "vertiefung": "potosi"
   },
   {
    "jahr": 1542,
    "titel": "Die Neuen Gesetze",
    "text": "Karl V. erlässt nach Berichten über Ausbeutung die Neuen Gesetze: Indigene dürfen nicht mehr versklavt werden, und die Encomienda – das Recht spanischer Siedler auf Tribut und Arbeit einer zugewiesenen Bevölkerung – soll nicht mehr vererbt werden und auslaufen. In Peru erhoben sich die Encomenderos unter Gonzalo Pizarro; der Vizekönig wurde 1546 getötet, und die Krone nahm die Erbfolgeregel zurück. Ein Muster: Schutzgesetze aus der Ferne scheitern am Widerstand derer, die vor Ort vom Zwang leben, und der Zwang wandert in neue Formen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1550,
    "titel": "Die Debatte von Valladolid",
    "text": "Vor einer Kommission Karls V. streiten 1550 und 1551 der Dominikaner Bartolomé de Las Casas und der Gelehrte Juan Ginés de Sepúlveda darüber, ob die Unterwerfung der Indigenen gerecht sei. Sepúlveda berief sich auf Aristoteles und die Lehre von den Sklaven von Natur, Las Casas auf Vernunft und Menschenwürde aller Völker. Ein förmliches Urteil fiel nie – die verbreitete Darstellung, Las Casas habe gewonnen, ist eine Vereinfachung. Er hatte zeitweise selbst vorgeschlagen, stattdessen Afrikaner zu versklaven, was er später ausdrücklich bereute.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1600,
    "titel": "Gefangene der Korsaren",
    "text": "Korsaren aus Algier, Tunis und Tripolis kapern Schiffe, überfallen Küsten bis Island und verkaufen Gefangene als Sklaven oder gegen Lösegeld. Robert Davis schätzte die Zahl der zwischen 1530 und 1780 verschleppten Europäer auf eine bis eineinviertel Millionen; andere halten das für zu hoch, weil er aus wenigen Jahrzehnten hochrechnete. Umgekehrt versklavten auch christliche Staaten und der Malteserorden Muslime, als Galeerenruderer. Orden und Kassen kauften Gefangene frei. Das Mittelmeer war ein Raum gegenseitiger Menschenjagd.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1619,
    "titel": "Die ersten Verschleppten in Nordamerika",
    "text": "Im August 1619 bringt ein englisches Kaperschiff rund zwanzig Afrikaner nach Point Comfort in Virginia, erbeutet von einem portugiesischen Sklavenschiff aus Angola. Ihr Status war zunächst unklar: Manche Afrikaner kamen wie europäische Schuldknechte nach Jahren frei, und es gab früh freie schwarze Grundbesitzer. Erst im Lauf des Jahrhunderts entstand in den Gesetzen der Kolonien die erbliche Sklaverei nach Hautfarbe – 1662 bestimmte Virginia, dass Kinder den Status der Mutter erben. Rassensklaverei wurde gemacht, nicht vorgefunden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1649,
    "titel": "Die Leibeigenschaft wird Gesetz",
    "text": "Das russische Gesetzbuch von 1649, das Sobornoje Uloschenije, hebt die Fristen auf, innerhalb derer entlaufene Bauern zurückgefordert werden konnten, und bindet sie damit dauerhaft und erblich an Land und Gutsherrn. Der Adel erhielt das alleinige Recht, Leibeigene zu besitzen, und diente dafür dem Zaren im Heer. Im 18. Jahrhundert wurden Leibeigene faktisch verkäuflich, auch ohne Land. Während die Leibeigenschaft in Westeuropa schwand, verfestigte sie sich in Russland und Teilen Ostmitteleuropas – auch weil der Staat den Adel brauchte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1750,
    "titel": "Die Mittelpassage",
    "text": "Im 18. Jahrhundert erreicht der Sklavenhandel seinen Höhepunkt. Insgesamt wurden nach der Schiffsdatenbank Slave Voyages rund 12,5 Millionen Menschen in Afrika eingeschifft, etwa 10,7 Millionen erreichten Amerika. Die Überfahrt, die Mittelpassage, dauerte Wochen bis Monate in qualvoller Enge. Die meisten Verschleppten kamen nach Brasilien und in die Karibik, nur ein kleiner Teil nach Nordamerika. Liverpool, Nantes und Bristol wuchsen mit dem Handel; afrikanische Staaten wie Dahomey zogen Gewinn aus dem Verkauf von Gefangenen.",
    "vertiefung": "sklavenhandel",
    "seit": "2026-10-01"
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
    "text": "In der Nacht zum 23. August 1791 erheben sich Versklavte in der Nordebene von Saint-Domingue, der profitabelsten Zuckerkolonie der Welt mit rund einer halben Million Versklavter. Im folgenden Krieg stieg Toussaint Louverture zum führenden Kommandanten auf. Unter dem Druck der Ereignisse schaffte das revolutionäre Frankreich 1794 die Sklaverei in seinen Kolonien ab. 1804 gründen die Aufständischen Haiti. Kein Argument gegen die Sklaverei war so wirksam wie der Beweis, dass Versklavte sich selbst befreien konnten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1804,
    "titel": "Haiti",
    "text": "Aus dem Aufstand von Saint-Domingue geht der erste Staat hervor, der aus einer erfolgreichen Erhebung Versklavter entstand. Frankreich erzwang 1825 eine Entschädigungszahlung für die verlorenen Sklaven, an der Haiti über hundert Jahre trug."
   },
   {
    "jahr": 1807,
    "titel": "Verbot des Sklavenhandels",
    "text": "Britannien verbietet 1807 den Handel, nicht die Sklaverei; die USA folgen 1808 mit einem Einfuhrverbot. Vorausgegangen waren zwanzig Jahre Kampagne mit Petitionen, Zuckerboykott und den Berichten ehemaliger Versklavter wie Olaudah Equiano. Die Royal Navy patrouilliert danach vor Westafrika – dieselbe Macht, die zuvor am meisten verschifft hatte – und befreite bis in die 1860er Jahre nach Schätzungen weit über hunderttausend Menschen von abgefangenen Schiffen. Der Handel ging dennoch weiter, nun illegal und vor allem nach Brasilien und Kuba.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1834,
    "titel": "Abschaffung im Britischen Reich",
    "text": "Am 1. August 1834 tritt das Gesetz zur Abschaffung der Sklaverei in den britischen Kolonien in Kraft; rund 800.000 Menschen sind betroffen. Frei wurden sie zunächst nicht: Ein Lehrlingssystem verpflichtete sie zu weiterer unbezahlter Arbeit, bis es 1838 nach Protesten endete. Entschädigt wurden die Eigentümer, nicht die Befreiten – mit 20 Millionen Pfund, rund vierzig Prozent eines Staatshaushalts. Die dafür aufgenommene Staatsschuld wurde in Großbritannien erst 2015 vollständig getilgt. Die Gebiete der Ostindien-Kompanie waren ausgenommen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1861,
    "titel": "Die Bauernbefreiung in Russland",
    "text": "Alexander II. hebt die Leibeigenschaft auf; über 23 Millionen Menschen auf privaten Gütern werden persönlich frei, die Staatsbauern folgen 1866. Anstoß gab auch die Niederlage im Krimkrieg. Das Land aber blieb großenteils beim Adel oder musste über Jahrzehnte mit Ablösezahlungen erworben werden, für die die Dorfgemeinde haftete. Viele Bauern erhielten weniger Land, als sie zuvor bestellt hatten. Die Befreiung, zwei Jahre vor Lincolns Emanzipationserklärung, zeigt, wie das Ende der Unfreiheit neue Abhängigkeiten begründen kann.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1863,
    "titel": "Die Emanzipationserklärung",
    "text": "Lincolns Proklamation befreit Versklavte in den aufständischen Gebieten – dort, wo die Union gerade keine Gewalt hatte. Rechtlich wirksam wurde die Abschaffung erst mit dem 13. Zusatzartikel von 1865."
   },
   {
    "jahr": 1865,
    "titel": "Das Ende in den USA",
    "text": "Im Dezember 1865 tritt der 13. Verfassungszusatz in Kraft und verbietet Sklaverei und unfreiwillige Knechtschaft in den gesamten USA; rund vier Millionen Menschen sind damit endgültig frei. Der Zusatz enthält eine Ausnahme: als Strafe für ein Verbrechen, für das jemand ordnungsgemäß verurteilt wurde. Südstaaten nutzten sie sofort, indem sie mit den Black Codes etwa Landstreicherei schwarzer Bürger unter Strafe stellten und Verurteilte zur Arbeit verpachteten. Die Ausnahme wirkt bis heute in der Gefängnisarbeit fort.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1873,
    "titel": "Der Sklavenmarkt von Sansibar",
    "text": "Unter britischem Druck muss der Sultan von Sansibar 1873 die Sklaveneinfuhr vom Festland verbieten und den großen Sklavenmarkt schließen; an seiner Stelle errichtete die anglikanische Mission eine Kathedrale. Sansibar war das Zentrum des ostafrikanischen Sklavenhandels, der Menschen auf die Nelkenplantagen der Inseln, nach Arabien und an den Golf brachte. Die Sklaverei selbst wurde erst 1897 rechtlich aufgehoben und endete vollständig 1909. Der Kampf gegen den Handel diente Großbritannien auch als Rechtfertigung kolonialer Expansion.",
    "seit": "2026-10-01"
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
    "text": "Am 13. Mai 1888 unterzeichnet Prinzessin Isabel das Goldene Gesetz, das die Sklaverei in Brasilien ohne Entschädigung aufhebt – als letztes Land Amerikas. Brasilien hatte rund 40 Prozent aller über den Atlantik Verschleppten aufgenommen. Vorausgegangen waren das Ende des Handels 1850, das Gesetz über den freien Leib von 1871, Massenfluchten und eine breite Abolitionsbewegung. Ein Jahr später stürzt das Militär die Monarchie, der enttäuschte Pflanzer die Treue aufgekündigt hatten. Land oder Bildung für die Befreiten folgten nicht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1900,
    "titel": "Schuldknechtschaft nach der Abschaffung",
    "text": "In den US-Südstaaten wird nach 1865 die Verpachtung von Strafgefangenen an Plantagen, Bergwerke und Eisenbahnen zum Geschäftsmodell; Landstreicherei und Vertragsbruch werden strafbar gemacht, damit Arbeitskräfte verfügbar bleiben. Die Sterblichkeit in einzelnen Lagern war höher als in der Sklaverei, weil der Pächter kein Eigentum verlor. Das System endete formal erst 1941, in einer Weisung des US-Justizministeriums nach Kriegseintritt."
   },
   {
    "jahr": 1921,
    "titel": "Die Kongo-Ozean-Eisenbahn",
    "text": "Für den Bau der Eisenbahn von Brazzaville an die Atlantikküste lässt die französische Kolonialverwaltung von 1921 bis 1934 Zwangsarbeiter rekrutieren; nach Schätzungen starben über 17.000 von ihnen an Unfällen, Hunger und Krankheiten. Berichte wie der von André Gide machten die Zustände in Frankreich bekannt. Abgeschafft wurde die Zwangsarbeit in den französischen Kolonien erst 1946 durch ein Gesetz, das der ivorische Abgeordnete Félix Houphouët-Boigny einbrachte. Es machte ihn zu einer Leitfigur der späteren Unabhängigkeitsbewegung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1926,
    "titel": "Das Sklavereiabkommen des Völkerbunds",
    "text": "Die Sklavereikonvention des Völkerbunds von 1926 verpflichtet die Unterzeichner, Sklaverei und Sklavenhandel in allen Formen zu unterbinden, und definiert Sklaverei erstmals völkerrechtlich als Zustand, in dem Eigentumsrechte über einen Menschen ausgeübt werden. Anlass waren Berichte über Sklaverei unter anderem in Äthiopien und auf der Arabischen Halbinsel. Zwangsarbeit blieb dennoch verbreitet, auch in Kolonien der Unterzeichnerstaaten, die sie für öffentliche Zwecke ausdrücklich zuließ. Die Definition wird bis heute herangezogen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1930,
    "titel": "Der Gulag",
    "text": "Das sowjetische Lagersystem verband Strafe mit Wirtschaftsplanung: Kanäle, Bergwerke und Eisenbahnen wurden von Häftlingen gebaut. Millionen durchliefen die Lager; die Zahl der Toten ist bis heute Gegenstand der Archivforschung."
   },
   {
    "jahr": 1932,
    "titel": "Das Zwangsarbeitsübereinkommen",
    "text": "Das 1930 verabschiedete Übereinkommen Nr. 29 der Internationalen Arbeitsorganisation tritt 1932 in Kraft. Es definiert Zwangsarbeit als jede Arbeit, die unter Androhung einer Strafe verlangt wird und für die sich jemand nicht freiwillig gemeldet hat, und verpflichtet zur Abschaffung. Ausnahmen gelten für Wehrdienst, Strafvollzug und Notfälle; für Kolonialverwaltungen sah es Übergangsregeln vor, die einige Unterzeichner jahrzehntelang nutzten. Es zählt zu den meistratifizierten ILO-Übereinkommen und wurde 2014 durch ein Protokoll ergänzt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1942,
    "titel": "Zwangsarbeit im Nationalsozialismus",
    "text": "Im März 1942 ernennt Hitler Fritz Sauckel zum Generalbevollmächtigten für den Arbeitseinsatz; aus der Anwerbung in den besetzten Gebieten wird endgültig Verschleppung. Die Behandlung folgte einer rassistischen Rangordnung: Westeuropäer erhielten mehr Lohn und Bewegungsfreiheit, Polen und Sowjetbürger, die sogenannten Ostarbeiter, mussten Kennzeichen tragen, lebten in Lagern und wurden für Kontakte mit Deutschen hart bestraft. KZ-Häftlinge standen ganz unten. Es war der größte Zwangsarbeitseinsatz der neueren Geschichte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1943,
    "titel": "Die Thailand-Burma-Eisenbahn",
    "text": "Japan lässt 1942 und 1943 eine Eisenbahn von Thailand nach Burma bauen, um seine Truppen ohne Seeweg zu versorgen. Arbeiten mussten rund 60.000 alliierte Kriegsgefangene und nach Schätzungen 180.000 bis über 250.000 zwangsrekrutierte Arbeiter aus Südostasien, die sogenannten Romusha. Etwa 12.000 Gefangene und nach Schätzungen über 90.000 asiatische Arbeiter starben an Cholera, Hunger und Misshandlung. In der westlichen Erinnerung stehen die Gefangenen im Vordergrund, obwohl die asiatischen Opfer weit zahlreicher waren.",
    "seit": "2026-10-01"
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
    "jahr": 1975,
    "titel": "Das Arbeitslager Kambodscha",
    "text": "Nach der Einnahme Phnom Penhs im April 1975 räumen die Roten Khmer die Städte und treiben die gesamte Bevölkerung Kambodschas in landwirtschaftliche Kooperativen. Gearbeitet wurde ohne Lohn, ohne Ruhetage und unter Drohung mit Hinrichtung; Geld, Märkte und Privateigentum wurden abgeschafft. Bis 1979 starben durch Hinrichtungen, Hunger, Erschöpfung und Krankheiten schätzungsweise 1,5 bis 2 Millionen Menschen, rund ein Viertel der Bevölkerung. Es ist einer der radikalsten Fälle staatlicher Zwangsarbeit im 20. Jahrhundert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2000,
    "titel": "Sklaverei heute",
    "text": "2000 verabschieden die Vereinten Nationen das Palermo-Protokoll gegen Menschenhandel, das erstmals eine international anerkannte Definition liefert und zu Strafverfolgung und Opferschutz verpflichtet. Schätzungen internationaler Organisationen gehen von zweistelligen Millionenzahlen in Schuldknechtschaft, Zwangsarbeit und Zwangsheirat aus; die Methoden sind umstritten. Typisch ist heute nicht rechtliches Eigentum an Menschen, sondern Kontrolle über Schulden, Papiere und Drohungen. Die Institution ist geächtet, aber nicht verschwunden.",
    "seit": "2026-10-01"
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
    "text": "Ägyptische Kunst folgt über fast drei Jahrtausende festen Proportionsregeln, gestützt auf ein Raster an der Wand. Der Kopf erscheint im Profil, das Auge von vorn, die Schultern in voller Breite, die Beine wieder seitlich – jedes Glied in seiner erkennbarsten Ansicht. Nicht Unvermögen, sondern Absicht: Dargestellt wird nicht, wie etwas aussieht, sondern was es ist, denn Grabbilder sollten für den Toten im Jenseits wirksam sein. Kunst galt als Handwerk im Dienst von König und Tempel; die Werkstätten blieben meist anonym.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1350,
    "titel": "Der Bruch von Amarna",
    "text": "Unter Echnaton wird der jahrtausendealte ägyptische Kanon für eine Generation aufgegeben: lange Schädel, schwere Hüften, Familienszenen, in denen der König seine Töchter küsst. Nach seinem Tod kehrt die Kunst zur alten Regel zurück und seine Bauten werden abgetragen. Der Vorgang zeigt, dass ein Stil eine politische Entscheidung sein kann – und dass er mit ihr fällt."
   },
   {
    "jahr": -1200,
    "titel": "Die Köpfe der Olmeken",
    "text": "Bildhauer der Olmeken an der Golfküste Mexikos meißeln Köpfe aus Basaltblöcken von bis zu mehreren Dutzend Tonnen aus den Tuxtla-Bergen. Siebzehn sind von vier Fundorten bekannt, die ältesten und meisten aus San Lorenzo. Sie gelten als Bildnisse von Herrschern mit individuellen Zügen und helmartigen Kopfbedeckungen; zwei wurden aus älteren Thronen umgearbeitet. Ohne Metallwerkzeug und Zugtiere brauchte es dafür große Arbeitsgruppen. Die Behauptung, die Gesichtszüge bewiesen afrikanische Seefahrer, weist die Forschung zurück.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -480,
    "titel": "Der griechische Umbruch",
    "text": "Innerhalb weniger Jahrzehnte lösen sich die starren Standfiguren der Archaik, die Kouroi, in bewegte Körper auf. Der um 480 v. Chr. datierte Kritios-Knabe gilt als frühes Beispiel für den Kontrapost: Das Gewicht ruht auf einem Bein, Hüfte und Schultern neigen sich gegenläufig. Wenig später schreibt Polyklet einen Kanon idealer Proportionen. Die Statuen, die heute weiß in Museen stehen, waren ursprünglich farbig bemalt. Es ist der Beginn einer Kunst, die Körper als Organismen darstellt – und die über römische Kopien bis in die Renaissance wirkt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -210,
    "titel": "Die Terrakotta-Armee",
    "text": "Für das Grab des ersten Kaisers von China werden mehrere Tausend lebensgroße Figuren gefertigt, aus Modulen für Beine, Rumpf, Arme und Kopf, mit individuell nachgearbeiteten Gesichtern. Es ist Serienproduktion mit dem Anspruch der Einmaligkeit – ein Verfahren, das erst wieder in der Industrie auftaucht. Ursprünglich waren die Figuren bemalt; die Farbe hielt der Luft nach der Ausgrabung nicht stand."
   },
   {
    "jahr": -30,
    "titel": "Das römische Porträt",
    "text": "Römische Bildnisse der späten Republik zeigen Falten, Warzen und Alter. Wo Griechen idealisierten, war in Rom das gelebte Leben ein Ausweis von Würde und Verdienst; dahinter steht wohl auch der Brauch der Oberschicht, Wachsmasken der Ahnen im Haus aufzubewahren und bei Begräbnissen mitzuführen. Mit Augustus kehrt das Ideal zurück: Seine Porträts zeigen ihn bis ins hohe Alter jugendlich und wurden in großer Zahl im ganzen Reich verbreitet. Der Wechsel zeigt, dass auch Realismus ein Stil mit Botschaft ist und keine bloße Abbildung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 100,
    "titel": "Der erste Buddha",
    "text": "In Gandhara im heutigen Pakistan entstehen die frühesten menschlichen Buddha-Darstellungen, in Faltengewändern, die griechischer Skulptur entstammen. Vorher wurde der Buddha durch Zeichen angedeutet: Fußspuren, ein leerer Thron, ein Rad. Die Bilder gehen mit dem Buddhismus nach Zentralasien, China und Japan – eine der weitreichendsten Wirkungen des Kulturkontakts nach Alexander."
   },
   {
    "jahr": 550,
    "titel": "Die Ikone",
    "text": "In der Ostkirche entsteht ein Bildtyp, der nicht abbilden, sondern vergegenwärtigen will: Die frühesten erhaltenen Ikonen, bewahrt im Katharinenkloster am Sinai, stammen aus dem 6. Jahrhundert und sind in Wachsfarben gemalt. Der Gläubige verehrt durch das Bild die dargestellte Person. Nach dem Bilderstreit werden die Regeln theologisch begründet: Weil Gott in Christus sichtbar Mensch wurde, darf er dargestellt werden. Bildtypen, Farben und Gesten bleiben über Jahrhunderte gültig, von Byzanz bis zu Andrei Rubljow in Russland.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 691,
    "titel": "Der Felsendom und die Schrift",
    "text": "Der Kalif Abd al-Malik lässt in Jerusalem auf dem Tempelberg den Felsendom errichten, das älteste erhaltene Großbauwerk des Islam. Seine Mosaiken stammen von Handwerkern byzantinischer Schulung, zeigen aber keine Menschen und Tiere, sondern Pflanzen, Gefäße und Kronen; dazu kommt ein langes Inschriftband mit Koranversen, das sich an Christen wendet. Die Schrift tritt an die Stelle des Bildes. In der religiösen Kunst des Islam wird die Kalligrafie zur höchsten Bildform, während figürliche Malerei vor allem in Palästen und Büchern lebt.",
    "seit": "2026-10-01"
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
    "jahr": 1000,
    "titel": "Die Landschaft wird Weltbild",
    "text": "Im China der Song malt Fan Kuan Reisende vor Bergen und Strömen: Ein gewaltiger Gipfel füllt fast das ganze Hängerollbild, am unteren Rand zieht eine winzige Karawane vorbei. Die Landschaft wird zur höchsten Gattung der chinesischen Malerei, Ausdruck einer Ordnung der Natur, in der der Mensch klein ist. Im 11. Jahrhundert formulieren Gelehrte wie Su Shi das Ideal der Literatenmalerei: Nicht Ähnlichkeit zählt, sondern der Geist des Malers, der in Pinselstrich und Kalligrafie sichtbar wird. Das Bild ist heute in Taipeh.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1250,
    "titel": "Die Köpfe von Ife",
    "text": "In Ife im heutigen Nigeria entstehen Bronze- und Terrakottaköpfe von einer Naturtreue, die europäische Betrachter des frühen 20. Jahrhunderts für unmöglich hielten – der deutsche Ausgräber Leo Frobenius erklärte sie mit einer versunkenen Kolonie aus dem Mittelmeer. Die Zuschreibung war falsch und rassistisch motiviert; die Werke sind vollständig lokaler Herkunft, hergestellt im Wachsausschmelzverfahren. Der Fall gehört zur Geschichte der Kunst wie zur Geschichte ihrer Deutung."
   },
   {
    "jahr": 1305,
    "titel": "Giotto und der Raum",
    "text": "In der Arenakapelle in Padua malt Giotto um 1305 Szenen aus dem Leben Marias und Christi mit Figuren, die Gewicht haben, im Raum stehen und Gefühle zeigen – Trauer, Zweifel, Zärtlichkeit. Auftraggeber war Enrico Scrovegni, dessen Familie mit Geldverleih reich geworden war. Die Loslösung vom flachen Goldgrund ist der Beginn dessen, was später Renaissance heißen wird. Schon Dante bemerkte, Giotto habe Cimabue in den Schatten gestellt – eines der frühesten Zeugnisse dafür, dass ein Maler als Person berühmt wurde.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1425,
    "titel": "Die Perspektive wird berechenbar",
    "text": "Um 1413 zeigt Brunelleschi in Florenz in einem Experiment mit Spiegel und Guckloch, dass sich ein Gebäude nach festen Regeln auf eine Fläche übertragen lässt. Masaccio wendet die Zentralperspektive um 1425 im Fresko der Dreifaltigkeit an; Alberti beschreibt sie 1435 als Regel, mit Fluchtpunkt und Horizont. Bild wird zur Konstruktion – Mathematik betritt das Atelier. Damit wird der Betrachter an einen festen Standpunkt gebunden, eine Konvention, die als natürlich galt, bis Fotografie und Kubismus sie in Frage stellten.",
    "vertiefung": "perspektive",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1434,
    "titel": "Öl statt Tempera",
    "text": "Ölfarbe war schon bekannt, doch die niederländischen Maler um Jan van Eyck entwickeln sie zu einer Technik dünner, durchscheinender Schichten, den Lasuren. Damit werden Übergänge, Glanz und Details möglich, die mit rasch trocknender Eitempera kaum gelangen. Im Arnolfini-Bildnis von 1434 gibt ein Wandspiegel die Szene noch einmal wieder. Van Eycks Oberflächen wirkten auf Zeitgenossen wie Zauberei; Vasari schrieb ihm später fälschlich die Erfindung der Ölmalerei zu. Bis 1500 setzte sie sich auch in Italien durch.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1488,
    "titel": "Behzad und die persische Buchmalerei",
    "text": "In Herat am Hof der Timuriden leitet Kamal ud-Din Behzad ab 1486 die königliche Malwerkstatt. Seine Buchmalereien, etwa zu Saadis Bustan von 1488, zeigen Architektur, Alltag und Menschen mit eigenen Zügen und Gesten in klar gebauten Kompositionen. Nach dem Fall Herats arbeitet er in Tabriz für die Safawiden. Persische Buchmalerei war Teamarbeit von Kalligrafen, Malern und Vergoldern, und Behzads Stil wurde von Istanbul bis zu den Moguln in Indien nachgeahmt. Sein Name wurde zum Gütesiegel; viele Zuschreibungen sind unsicher.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1495,
    "titel": "Die leere Fläche",
    "text": "Der japanische Mönch Sesshū Tōyō malt Landschaften, in denen der unbemalte Grund zum Bildmittel wird: Nebel, Wasser und Ferne entstehen dort, wo keine Tusche ist. Die Technik ist aus China übernommen und in Japan radikalisiert worden. Sie ist der genaue Gegenentwurf zur gleichzeitig in Italien entstehenden Vorstellung vom Bild als Fenster, das ganz gefüllt sein muss."
   },
   {
    "jahr": 1508,
    "titel": "Die Sixtinische Decke",
    "text": "Papst Julius II. beauftragt Michelangelo, der sich vor allem als Bildhauer verstand, mit der Ausmalung der Decke der Sixtinischen Kapelle. Von 1508 bis 1512 arbeitet er auf einem eigens entworfenen Gerüst, mit Gehilfen und nicht in der oft erzählten Rückenlage. Es entstehen die Schöpfungsgeschichte, Propheten und Sibyllen mit über dreihundert Figuren. Der Papst setzte Kunst gezielt als Machtmittel ein: Zur selben Zeit ließ er Raffael seine Gemächer ausmalen und den Neubau von St. Peter beginnen. Kunst und Macht sind hier nicht zu trennen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1566,
    "titel": "Der Bildersturm",
    "text": "Im August 1566 zerstören reformierte Gruppen in Flandern und Brabant innerhalb weniger Wochen Altäre, Figuren und Glasfenster in Hunderten Kirchen, auch in Antwerpen. Für sie waren Bilder Götzendienst; für Spanien war der Bildersturm Rebellion, auf die Philipp II. mit der Entsendung Albas antwortete – ein Schritt auf dem Weg in den Achtzigjährigen Krieg. Die protestantischen Gebiete entwickeln daraufhin Landschaft, Stillleben, Genrebild und Porträt, Bildgattungen ohne Heilige, verkauft auf einem Markt an Bürger statt an Kirchen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1590,
    "titel": "Die Werkstatt des Großmoguls",
    "text": "Akbar unterhält in Fatehpur Sikri eine Malschule mit über hundert Künstlern, in der persische Technik, indische Farbigkeit und europäische Perspektive – aus mitgebrachten Stichen – zusammenkommen. Die Bilder sind signiert, oft von zwei Händen: einer für die Komposition, einer für die Gesichter. Der Kaiser ließ sich Chroniken bebildern; Malerei war hier ein Regierungsmittel."
   },
   {
    "jahr": 1656,
    "titel": "Das Bild denkt über sich selbst nach",
    "text": "Velázquez, Hofmaler Philipps IV., malt in Las Meninas die Infantin Margarita mit Hofdamen, Zwergen und Hund – und sich selbst an der Staffelei. Im Spiegel an der Rückwand erscheinen König und Königin, offenbar am Platz des Betrachters. Wen der Maler gerade malt, bleibt offen. Maler, Modell und Betrachter geraten in ein unauflösbares Verhältnis; das Bild wird zum Gegenstand seiner eigenen Frage. Es zeigt auch den Ehrgeiz eines Malers, der in den Adel strebte: Das Kreuz des Santiago-Ordens auf seiner Brust wurde nachträglich ergänzt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1765,
    "titel": "Der Farbholzschnitt in Japan",
    "text": "Mit dem Mehrplattendruck wird das farbige Bild in Edo zur Massenware: Schauspieler, Kurtisanen, Landschaften, für den Preis einer Portion Nudeln. Verleger, Zeichner, Formschneider und Drucker arbeiten getrennt – das Werk hat keinen einzelnen Urheber. Als diese Blätter im 19. Jahrhundert als Packpapier nach Europa gelangen, verändern sie die Malerei von Manet bis van Gogh."
   },
   {
    "jahr": 1785,
    "titel": "Kunst als politisches Programm",
    "text": "1785 stellt Jacques-Louis David im Pariser Salon den Schwur der Horatier aus: drei Brüder, die sich verpflichten, für Rom zu sterben, in strenger Komposition statt in der Eleganz des Rokoko. Der Klassizismus greift auf römische Vorbilder zurück, um bürgerliche Tugend und Opferbereitschaft zu predigen. Bestellt hatte das Bild die königliche Verwaltung; in der Revolution wird David Abgeordneter, Regisseur von Festen und Maler des ermordeten Marat, später dient er Napoleon. Seine Bilder werden zur Bildsprache der Revolution.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1793,
    "titel": "Der Louvre wird öffentlich",
    "text": "Die französische Republik öffnet die königlichen Sammlungen als Museum für alle. Damit wechselt der Ort der Kunst: aus Palast, Kirche und Kabinett in einen Raum, in dem Werke aus verschiedenen Jahrhunderten nebeneinander hängen und verglichen werden. Die Kunstgeschichte als Fach ist eine Folge dieser Anordnung – und die napoleonischen Raubzüge füllten sie."
   },
   {
    "jahr": 1839,
    "titel": "Die Fotografie entlastet die Malerei",
    "text": "1839 macht die französische Regierung das Verfahren Daguerres öffentlich; fast gleichzeitig stellt William Henry Fox Talbot in England sein Negativ-Positiv-Verfahren vor, das Vervielfältigung erlaubt. Als eine Maschine das Abbilden übernimmt, verliert die Malerei ihre älteste Aufgabe; zugleich nutzen Maler Fotografien als Vorlagen. Was folgt – Impressionismus, Expressionismus, Abstraktion – ist auch eine Antwort darauf: Malerei sucht, was die Kamera nicht kann. Ob Fotografie selbst Kunst sei, blieb lange umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1863,
    "titel": "Der Salon der Zurückgewiesenen",
    "text": "Nachdem die Jury des Pariser Salons über zweitausend Werke abgelehnt hat, lässt Napoleon III. sie in einer eigenen Ausstellung zeigen – zur Blamage der Künstler, wie er meinte. Das Publikum lachte über Manets Frühstück im Grünen, aber die Ausstellung machte sichtbar, dass es eine Kunst außerhalb der Institution gibt. Von hier aus organisieren sich die Impressionisten elf Jahre später selbst."
   },
   {
    "jahr": 1897,
    "titel": "Die Plünderung von Benin",
    "text": "Im Februar 1897 erobert eine britische Strafexpedition die Hauptstadt des Königreichs Benin im heutigen Nigeria, nachdem eine britische Delegation getötet worden war. Die Soldaten plündern den Palast; Tausende Bronzetafeln, Köpfe und Elfenbeinarbeiten, über Jahrhunderte für den Hof des Oba gefertigt, werden versteigert, um die Kosten zu decken, und gelangen in Museen von London bis Berlin. In Europa erschütterten sie das Vorurteil, Afrika habe keine bedeutende Kunst. Nigeria forderte ihre Rückgabe seit den Jahren nach der Unabhängigkeit.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1907,
    "titel": "Der Bruch mit der Perspektive",
    "text": "Der Kubismus zeigt Gegenstände aus mehreren Blickwinkeln zugleich und beendet die fünfhundertjährige Herrschaft des einen Standpunkts. Anregungen kamen unter anderem aus afrikanischer Plastik – lange ohne Nennung der Herkunft."
   },
   {
    "jahr": 1915,
    "titel": "Das Schwarze Quadrat",
    "text": "Auf der Ausstellung 0,10 in Petrograd zeigt Kasimir Malewitsch im Dezember 1915 ein schwarzes Quadrat auf weißem Grund und hängt es oben in eine Raumecke – dorthin, wo in russischen Häusern die Ikone hängt. Er nennt das Suprematismus: Vorrang der reinen Empfindung vor dem Gegenstand. Kandinsky, Mondrian und andere finden eigene Wege in die Abstraktion; die Schwedin Hilma af Klint hatte schon ab 1906 abstrakt gemalt, ohne es zu zeigen. In der Sowjetunion verbannt der Staat ab den 1930er Jahren die Abstraktion.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1917,
    "titel": "Der Gegenstand als Kunstwerk",
    "text": "Marcel Duchamp reicht 1917 unter dem Namen R. Mutt ein handelsübliches Urinal mit dem Titel Fountain bei einer New Yorker Ausstellung ein, die jedem Einsender offenstehen sollte; gezeigt wurde es nicht. Das Original ist verschollen, erhalten sind ein Foto von Alfred Stieglitz und spätere Repliken. Die Frage verschiebt sich vom Können zur Zuschreibung: Kunst ist, was als Kunst ausgestellt und anerkannt wird. Ob die Idee ganz von Duchamp stammte oder von der Künstlerin Elsa von Freytag-Loringhoven, wird seit einigen Jahren diskutiert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1919,
    "titel": "Das Bauhaus",
    "text": "Walter Gropius gründet in Weimar das Bauhaus, eine Schule, die Kunst und Handwerk vereinen und Gegenstände für die industrielle Fertigung entwerfen will. Lehrer waren unter anderen Kandinsky, Klee und Moholy-Nagy; in den Werkstätten entstanden Lampen, Möbel, Stoffe und Typografie. Politisch bedrängt zog die Schule 1925 nach Dessau und 1932 nach Berlin, wo sie sich 1933 unter NS-Druck auflöste. Emigranten trugen die Ideen in die USA und nach Palästina – Tel Avivs Weiße Stadt ist eine Folge. Das Bauhaus machte Gestaltung zur eigenen Kunst.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1922,
    "titel": "Die Wandbilder Mexikos",
    "text": "Nach der Revolution beauftragt der mexikanische Bildungsminister José Vasconcelos Künstler, öffentliche Gebäude mit Wandbildern auszumalen. Diego Rivera, José Clemente Orozco und David Alfaro Siqueiros erzählen die Geschichte des Landes aus Sicht der indigenen und bäuerlichen Bevölkerung. Als Rivera 1933 im New Yorker Rockefeller Center ein Lenin-Porträt in sein Wandbild malt, wird es verhängt und 1934 zerstört. Der Muralismo regte öffentliche Kunstprogramme in den USA und Wandmalerei in ganz Lateinamerika an.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1937,
    "titel": "Entartete Kunst",
    "text": "1937 beschlagnahmt die NS-Diktatur in deutschen Museen über 20.000 Werke der Moderne und zeigt eine Auswahl in München in der Femeausstellung Entartete Kunst, die mehr Besucher anzog als die gleichzeitige Große Deutsche Kunstausstellung. Ein Teil der Werke wird 1939 in Luzern versteigert, um Devisen zu beschaffen, andere werden verbrannt; Künstler erhalten Berufs- und Ausstellungsverbote. Viele emigrieren – das Zentrum der Kunstwelt verschiebt sich nach New York. Die Lücken in deutschen Sammlungen sind bis heute sichtbar.",
    "vertiefung": "entartete-kunst",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Der Markt zieht nach New York",
    "text": "Nach dem Krieg verlagert sich der Handel mit zeitgenössischer Kunst nach New York; Galerien, Sammler und Museen dort setzen die Preise, und das amerikanische Außenministerium fördert Ausstellungen abstrakter Malerei im Ausland. Wie viel dieser Förderung Wirkung hatte, ist umstritten – dass sie stattfand, ist belegt. Der Fall zeigt, dass Kunstgeschichte auch eine Geschichte von Budgets ist."
   },
   {
    "jahr": 1954,
    "titel": "Gutai",
    "text": "In Ashiya bei Osaka gründet der Maler Jirō Yoshihara die Künstlergruppe Gutai, auf Deutsch konkret, mit der Losung, etwas zu tun, das noch nie getan wurde. Ihre Mitglieder malen mit den Füßen, durchbrechen Papierwände mit dem Körper, stellen Werke im Freien und auf der Bühne aus. Im Japan nach der Niederlage suchten sie eine Kunst ohne Vorbild, weder in der Tradition noch im Westen. Ihre Aktionen nahmen Happening und Performance vorweg, blieben im Westen aber lange übersehen. Die Gruppe löste sich 1972 nach Yoshiharas Tod auf.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1962,
    "titel": "Kunst und Massenware",
    "text": "1962 stellt Andy Warhol in Los Angeles 32 Bilder von Campbell-Suppendosen aus, Roy Lichtenstein vergrößert Comicbilder samt Rasterpunkten. Die Pop Art, in England schon in den 1950er Jahren vorbereitet, übernimmt Werbebild, Comic und Serienproduktion; Warhols Atelier hieß The Factory und arbeitete mit Siebdruck. Die Grenze zwischen hoher Kunst und Alltagsbild wird bewusst durchlässig gemacht. Ob als Kritik an der Konsumgesellschaft oder als ihre Feier, war schon damals strittig – der Kunstmarkt nahm die Bilder jedenfalls bereitwillig auf.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1971,
    "titel": "Papunya Tula",
    "text": "In der Siedlung Papunya in Zentralaustralien, in die der Staat mehrere Aborigine-Gruppen umgesiedelt hatte, regt der Lehrer Geoffrey Bardon 1971 ein Wandbild an der Schule an; ältere Männer übernehmen es und wählen die Honigameisen-Geschichte des Ortes. Bald übertragen sie Motive aus Sand- und Körpermalerei mit Acrylfarbe auf Holz und Leinwand und gründen 1972 die Genossenschaft Papunya Tula. Nach verbreiteter Deutung verdecken die typischen Punkte auch heiliges Wissen, das Außenstehenden nicht zusteht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "Magiciens de la terre",
    "text": "Eine Pariser Ausstellung zeigt fünfzig westliche und fünfzig nichtwestliche Künstler in gleicher Größe und gleichem Raum. Die Kritik war heftig: zu beliebig, zu exotisierend, zu wenig Kontext. Sie gilt trotzdem als Wendepunkt, weil danach keine große Ausstellung zeitgenössischer Kunst mehr allein europäisch-amerikanisch besetzt werden konnte, ohne dass es begründet werden musste."
   },
   {
    "jahr": 1998,
    "titel": "Die Rückgabefrage",
    "text": "1998 verpflichten sich 44 Staaten in den Washingtoner Prinzipien, NS-Raubkunst in öffentlichen Sammlungen zu suchen und mit den Erben gerechte und faire Lösungen zu finden; rechtlich bindend sind sie nicht. Parallel wächst der Druck, koloniale Sammlungen zurückzugeben: 2017 kündigt Frankreichs Präsident Rückgaben nach Afrika an, und seit 2022 gehen die Benin-Bronzen aus deutschen Museen an Nigeria. Strittig bleiben Fragen der Herkunft, des Eigentums und der Bedingungen. Das Museum, einst Ort des Bewahrens, wird zum Ort der Provenienzforschung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2001,
    "titel": "Die Sprengung von Bamiyan",
    "text": "Im März 2001 sprengen die Taliban in Afghanistan die beiden monumentalen Buddha-Statuen von Bamiyan, im 6. und frühen 7. Jahrhundert aus einer Felswand gehauen und über fünfzig beziehungsweise über dreißig Meter hoch. Internationale Proteste, auch aus islamischen Staaten, blieben ohne Wirkung. Die Zerstörung wurde gefilmt und verbreitet – Bildersturm als Medienereignis. 2016 verurteilte der Internationale Strafgerichtshof erstmals einen Angeklagten allein wegen der Zerstörung von Kulturerbe, der Mausoleen von Timbuktu.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2018,
    "titel": "Bilder ohne Hand",
    "text": "Im Oktober 2018 versteigert Christie's in New York das von einem neuronalen Netz erzeugte Bild Edmond de Belamy für über 400.000 Dollar; das Pariser Kollektiv Obvious hatte dafür frei verfügbaren Programmcode anderer genutzt, was Streit auslöste. Seit 2022 erzeugen Bildgeneratoren auf Texteingabe Bilder in Sekunden, trainiert mit Millionen Werken ohne Zustimmung ihrer Urheber. Die alte Frage nach Urheberschaft und Werk stellt sich neu; Gerichte in mehreren Ländern verhandeln, ob das Training rechtmäßig ist.",
    "seit": "2026-10-01"
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
    "text": "In Höhlen der Schwäbischen Alb, etwa im Hohle Fels und in der Geißenklösterle-Höhle, wurden Flöten aus Vogelknochen und Mammutelfenbein gefunden, rund 35.000 bis 40.000 Jahre alt. Sie haben sorgfältig gebohrte Grifflöcher – gebaut, nicht gefunden; eine Elfenbeinflöte musste aus zwei ausgehöhlten Hälften zusammengesetzt und abgedichtet werden. Welche Musik darauf erklang, wissen wir nicht. Die Funde zeigen, dass Musik mindestens so alt ist wie die figürliche Kunst, die an denselben Orten entstand.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -2500,
    "titel": "Die Leiern von Ur",
    "text": "In den Königsgräbern von Ur finden sich Leiern mit Stierkopf, Einlegearbeit und elf Saiten, dazu die Skelette der Musikerinnen, die mit bestattet wurden. Die Instrumente belegen ein ausgebildetes Musikwesen am Hof: mehrere Saiten bedeuten mehrere Töne, und mehrere Töne bedeuten eine Ordnung. Eine der Leiern wurde 2003 im Irakmuseum zerstört und aus Fotografien rekonstruiert."
   },
   {
    "jahr": -1400,
    "titel": "Die älteste notierte Melodie",
    "text": "Auf Tontafeln aus Ugarit an der syrischen Küste, um 1400 v. Chr. beschrieben, steht ein hurritischer Hymnus an die Göttin Nikkal mit Liedtext und Angaben zu Saiten und Intervallen, vermutlich für eine Leier. Es ist die älteste weitgehend erhaltene notierte Melodie. Die Übertragung in heutige Töne bleibt umstritten – mehrere Rekonstruktionen klingen völlig verschieden, je nachdem, ob man die Zeichen als Melodie oder als Zusammenklänge liest. Der Fund zeigt, dass schon in der Bronzezeit Musik nach einem theoretischen System aufgeschrieben wurde.",
    "seit": "2026-10-01"
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
    "text": "Die römische Kirche vereinheitlicht ihre Liturgiegesänge, einstimmig und lateinisch. Die Zuschreibung an Papst Gregor I., der um 600 regierte, ist Legende; die Sammlung entstand über Jahrhunderte und erhielt ihre Gestalt wohl erst im Frankenreich, als die Karolinger im 8. und 9. Jahrhundert den römischen Ritus im ganzen Reich durchsetzen wollten. Um die Gesänge einheitlich zu halten, entstanden die ersten Neumen, Zeichen über dem Text, die den Melodieverlauf andeuteten. So erwächst aus dem Wunsch nach Einheit die europäische Notenschrift.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 701,
    "titel": "Gagaku",
    "text": "Der japanische Hof richtet mit dem Taihō-Kodex ein Musikamt ein, das Musiker für die höfischen Zeremonien ausbildet. Das Repertoire, Gagaku genannt, verbindet einheimische Gesänge mit Musik, die aus China, Korea und über die Seidenstraße gekommen war. Während diese Musik auf dem Festland verschwand, wurde sie in Japan in Familien von Hofmusikern bis heute weitergegeben. Gagaku gilt daher als die älteste ununterbrochen gespielte Orchestermusik der Welt. Instrumente aus dem 8. Jahrhundert bewahrt das Shōsōin in Nara.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 822,
    "titel": "Ziryab in Córdoba",
    "text": "Der aus Bagdad geflohene Musiker Ziryab richtet am Hof von Córdoba eine Musikschule ein, fügt der Laute eine fünfte Saite hinzu und ordnet Stücke zu festen Folgen – dem Vorbild der andalusischen Nuba. Vieles über ihn stammt aus späteren Sammlungen und ist ausgeschmückt. Belegt ist die Wirkung: Von al-Andalus geht der Weg der Laute, der Rhythmusmodelle und der Theorie nach Europa."
   },
   {
    "jahr": 1025,
    "titel": "Guido von Arezzo erfindet die Linien",
    "text": "Der Mönch Guido von Arezzo ordnet die Töne auf Notenlinien im Terzabstand und benennt sie mit den Silben ut, re, mi, fa, sol, la, den Anfangssilben eines Johannes-Hymnus. Zuvor lernten Sänger die Gesänge über Jahre auswendig, Neumen waren nur Gedächtnisstütze; Guido behauptete, seine Methode verkürze die Ausbildung von zehn Jahren auf eines. Erstmals kann jemand ein Stück singen, das er nie gehört hat – Musik wird übertragbar. Die Silben leben in der Solmisation fort und dienen im Französischen und Italienischen bis heute als Tonnamen.",
    "vertiefung": "notenschrift",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1150,
    "titel": "Hildegard von Bingen",
    "text": "Die Äbtissin hinterlässt siebenundsiebzig geistliche Gesänge samt Melodien – das größte namentlich zugeschriebene Repertoire des 12. Jahrhunderts. Ihre Melodien überschreiten den üblichen Umfang weit und folgen der Sprache mehr als dem Modell. Dass wir sie überhaupt haben, liegt daran, dass ihr Kloster sie in prächtigen Handschriften sammelte, was für Werke von Frauen die Ausnahme war."
   },
   {
    "jahr": 1235,
    "titel": "Die Griots und das Epos von Sunjata",
    "text": "Die Überlieferung datiert den Sieg Sunjata Keitas, des Gründers des Reiches von Mali, in die Zeit um 1235; erzählt wird sein Epos bis heute von Griots, in der Mande-Sprache jeliw. Sie sind erbliche Musiker, Genealogen und Berater, die Geschichte, Abstammung und Rechtsansprüche singend bewahren, begleitet von Kora, Balafon oder Ngoni. In einer Gesellschaft, die ihre Geschichte mündlich weitergab, war Musik das Archiv. Die Fassungen weichen ab und sind keine Chronik. Kora und Griot-Gesang prägen bis heute die Popmusik Westafrikas.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1320,
    "titel": "Mehrstimmigkeit wird komponierbar",
    "text": "Um 1320 beschreibt ein Philippe de Vitry zugeschriebener Traktat eine neue Notation, die Ars nova: Notenwerte können nun zwei- oder dreiteilig unterteilt werden, Rhythmen lassen sich genau festhalten. Papst Johannes XXII. verurteilte sie um 1324 als Zerstückelung der Melodie. Guillaume de Machaut schrieb wenig später mit der Messe de Nostre Dame die erste vollständige Messvertonung eines namentlich bekannten Komponisten. Musik ist nicht mehr nur Aufführung, sondern Komposition: ein Werk, das ein Einzelner entwirft und andere ausführen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1361,
    "titel": "Die Orgel wird eine Maschine",
    "text": "Die Orgel im Dom von Halberstadt hat drei Manuale, Pedal und über tausend Pfeifen; ein Bericht von 1361 beschreibt sie mit einer Tastatur, die der heutigen entspricht. Sie ist damit das komplizierteste Gerät ihrer Zeit außerhalb der Uhrmacherei. Mit ihr entsteht ein Instrument, das mehrere Stimmen gleichzeitig unter der Kontrolle eines Einzelnen hält – Voraussetzung für alles, was später am Klavier gedacht wird."
   },
   {
    "jahr": 1501,
    "titel": "Musikdruck",
    "text": "Ottaviano Petrucci veröffentlicht 1501 in Venedig das Odhecaton, eine Sammlung mehrstimmiger Lieder im Druck mit beweglichen Lettern, in mehreren Durchgängen; Venedig hatte ihm dafür ein Privileg erteilt. Noten werden Ware, Komponisten wie Josquin des Prez über ihre Region hinaus bekannt, und mehrstimmige Musik gelangt in Stimmbüchern ins Bürgerhaus. Billiger wurde der Notendruck erst mit dem Einfachdruck, den Pierre Attaingnant in Paris um 1528 einführte. Mit dem Druck beginnt auch der Streit um Rechte an Musik.",
    "seit": "2026-10-01"
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
    "text": "Ältere Stimmungen machten einige Tonarten wohlklingend und andere unbrauchbar. Bachs Wohltemperiertes Klavier von 1722 mit 24 Präludien und Fugen durch alle Dur- und Molltonarten zeigt, dass eine Stimmung, in der alle Tonarten brauchbar klingen, musikalisch trägt. Welche Stimmung Bach genau verwendete, ist umstritten; die heute übliche gleichstufige Stimmung setzte sich erst im 19. Jahrhundert durch. Der Preis: Kein Intervall außer der Oktave ist mehr rein – ein Kompromiss, auf dem die westliche Musik bis heute beruht.",
    "vertiefung": "wohltemperiert",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1781,
    "titel": "Das öffentliche Konzert",
    "text": "In Leipzig zieht das Gewandhausorchester in einen eigenen Saal – Musik gegen Eintritt, für ein Publikum, das nicht eingeladen, sondern zahlend erscheint. Vorher spielte man für Hof, Kirche oder Gesellschaft. Mit dem Konzertsaal entstehen Programm, Applausordnung, Kritik und schließlich das Repertoire: Stücke, die nicht für einen Anlass, sondern für die Wiederholung geschrieben sind."
   },
   {
    "jahr": 1824,
    "titel": "Musik als Bekenntnis",
    "text": "1824 wird in Wien Beethovens Neunte uraufgeführt; der fast taube Komponist stand mit auf der Bühne. Erstmals hat eine Sinfonie im Schlusssatz Solisten und Chor mit Schillers Ode an die Freude, einem Text über Menschenverbrüderung. Die Sinfonie wird zur weltanschaulichen Aussage, die jede Seite für sich beanspruchte: Sie erklang zu Hitlers Geburtstag ebenso wie Weihnachten 1989 in Berlin, wo Leonard Bernstein Freude durch Freiheit ersetzte. Seit 1972 dient die Melodie dem Europarat, seit 1985 der Europäischen Gemeinschaft als Hymne.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1859,
    "titel": "Wie hoch ist ein A?",
    "text": "Frankreich legt das Kammerton-A gesetzlich auf 435 Hertz fest, weil die Stimmung von Ort zu Ort um einen Halbton und mehr abwich und Sänger unter der steigenden Höhe litten. Die internationale Einigung auf 440 Hertz folgt erst 1939. Ohne diese Festlegung wäre keine Orchesterreise und keine Schallplatte möglich – Standardisierung ist eine Voraussetzung der Musikindustrie."
   },
   {
    "jahr": 1877,
    "titel": "Klang wird speicherbar",
    "text": "Thomas Edison zeichnet 1877 Schall auf einer mit Stanniol bespannten Walze auf und gibt ihn wieder; gedacht war das Gerät zunächst als Diktiermaschine. Emil Berliner entwickelt ab 1887 das Grammophon mit flachen Platten, die sich von einer Vorlage in großer Zahl pressen ließen – damit wird Musik vervielfältigbar. Zum ersten Mal überdauert Musik den Moment ihrer Aufführung: Interpretationen werden vergleichbar, Stimmen Verstorbener hörbar, Musik wird Ware im Laden. Die gesamte spätere Musikgeschichte hängt daran.",
    "vertiefung": "tonaufnahme",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1880,
    "titel": "Der Tango",
    "text": "In den Hafenvierteln von Buenos Aires und Montevideo entsteht im späten 19. Jahrhundert der Tango, aus Habanera, Milonga, afroargentinischem Candombe und den Liedern europäischer Einwanderer. Das Bandoneon, ein in Deutschland entwickeltes Instrument, wird sein Klang. Lange galt der Tango der eigenen Oberschicht als anrüchig; erst die Begeisterung in Paris um 1913 machte ihn auch in Argentinien gesellschaftsfähig. Carlos Gardel trug ihn mit Schallplatte und Tonfilm in die Welt. 2009 wurde er immaterielles Kulturerbe der UNESCO.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1889,
    "titel": "Fremde Klänge in Paris",
    "text": "Auf der Pariser Weltausstellung 1889 hört Claude Debussy ein javanisches Gamelan-Ensemble: Gongs, Metallophone und Trommeln, die in verflochtenen Schichten spielen, in einer Stimmung, die nicht der europäischen entspricht. Er schrieb später, gegen diese Musik sei Palestrinas Kontrapunkt ein Kinderspiel; Stücke wie seine Pagodes zeigen den Einfluss. Die Begegnung verändert die europäische Harmonik – zugleich waren die Musiker Teil einer kolonialen Zurschaustellung in einem nachgebauten Dorf; ihre Musik galt lange als exotische Kulisse.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1913,
    "titel": "Der Skandal als Methode",
    "text": "Am 29. Mai 1913 endet die Uraufführung von Strawinskys Ballett Le Sacre du printemps in Paris im Tumult: Teile des Publikums lachten, pfiffen und stritten, sodass die Tänzer die Musik kaum hörten. Ob vor allem die Musik oder Nijinskys stampfende Choreografie den Skandal auslöste, ist umstritten. Rhythmus und Klangfarbe treten an die Stelle der Melodie als tragendes Element, mit wechselnden Takten und harten Akzenten. Ein Jahr später wurde das Werk im Konzertsaal gefeiert – der Skandal wurde zur Methode der Avantgarde.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1917,
    "titel": "Der Jazz auf Platte",
    "text": "Im Februar 1917 nimmt die Original Dixieland Jass Band in New York die erste Jazzplatte auf, die sich rasch in großer Zahl verkauft. Der Jazz war um 1900 in New Orleans aus Blues, Ragtime, Blasmusik und afroamerikanischen Kirchenliedern entstanden. Die Erfinder profitierten am wenigsten – die erste Platte spielte eine weiße Band ein; schwarze Musiker wie King Oliver und Louis Armstrong kamen erst ab 1923 auf Platte. Die Schallplatte machte den Jazz dennoch weltweit hörbar und trug ihn binnen weniger Jahre bis nach Europa und Asien.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1920,
    "titel": "Der Rundfunk",
    "text": "Am 2. November 1920 sendet die Station KDKA in Pittsburgh die Ergebnisse der US-Präsidentenwahl; sie gilt vielen Historikern als erster kommerziell lizenzierter Sender. In Deutschland beginnt der Rundfunk 1923. Bald stehen Empfänger in Millionen Haushalten. Musik wird gleichzeitig an alle gesendet, live aus Sälen, später von Platte; es entstehen Rundfunkorchester. Diktaturen erkannten das Radio rasch als Mittel der Lenkung, auch über Musik. Der Rundfunk machte Schlager, Jazz und Klassik zur gemeinsamen Erfahrung ganzer Nationen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1923,
    "titel": "Zwölf gleichberechtigte Töne",
    "text": "Arnold Schönberg erläutert 1923 seinen Schülern eine Methode der Komposition mit zwölf nur aufeinander bezogenen Tönen: Alle zwölf Halbtöne bilden eine Reihe, aus der das Stück gebaut wird, ohne herrschenden Grundton. Er wollte der freien Atonalität, die er seit 1908 erkundete, eine Ordnung geben. Alban Berg und Anton Webern setzten die Methode fort; nach 1945 weitete die serielle Musik sie auf Dauer und Lautstärke aus. Beim Publikum fand sie wenig Widerhall; die Kluft zwischen Neuer Musik und Konzertsaal stammt aus dieser Zeit.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1927,
    "titel": "Der Tonfilm",
    "text": "Mit dem Jazz Singer wird Musik Teil eines Massenmediums, das sie überall gleich klingen lässt. Für die Musiker ist es ein Bruch: Zehntausende Kinomusiker, die zum Stummfilm gespielt hatten, verlieren innerhalb weniger Jahre ihre Arbeit. Gleichzeitig entsteht der erste Beruf, der Musik für Bilder schreibt."
   },
   {
    "jahr": 1932,
    "titel": "Der Kongress von Kairo",
    "text": "König Fuad I. lädt nach Kairo zum ersten Kongress für arabische Musik: Musiker und Gelehrte aus Ägypten, dem Maghreb, Syrien, dem Irak und der Türkei treffen auf europäische Forscher und Komponisten wie Béla Bartók und Paul Hindemith. Gestritten wurde über Tonsysteme, Notation und die Frage, ob etwa das Klavier in die arabische Musik gehört. Aufnahmen traditioneller Ensembles sind heute wertvolle Quellen. Der Kongress zeigt die Spannung zwischen Modernisierung und Bewahrung, die die Musik der Region im 20. Jahrhundert prägte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1936,
    "titel": "Chaos statt Musik",
    "text": "Am 28. Januar 1936, kurz nachdem Stalin eine Aufführung besucht hatte, greift die Prawda in dem unsignierten Artikel Chaos statt Musik Schostakowitschs Oper Lady Macbeth von Mzensk an. Die zuvor erfolgreiche Oper verschwand von den Bühnen, der Komponist zog seine vierte Sinfonie vor der Uraufführung zurück. Es war eine Warnung zu Beginn des Großen Terrors: Musik hatte verständlich und volksnah zu sein. Wie viel verborgene Kritik Schostakowitschs spätere Werke enthalten, ist unter Musikwissenschaftlern bis heute umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Die Langspielplatte",
    "text": "Columbia stellt 1948 die Langspielplatte aus Vinyl vor, die mit 33 Umdrehungen pro Minute über zwanzig Minuten pro Seite fasst; die alten Schellackplatten spielten nur wenige Minuten. Ein Jahr später antwortet RCA mit der kleinen Single mit 45 Umdrehungen. Damit teilt sich der Markt: Single für den Hit, LP für Klassik und später für das Album als Gesamtwerk. Musik wird in Alben gedacht, nicht in Einzelstücken – eine Form, die mit den Konzeptalben der 1960er Jahre ihren Höhepunkt erreicht und bis ins Streaming-Zeitalter nachwirkt.",
    "vertiefung": "tonaufnahme",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1952,
    "titel": "Musik ohne Absicht",
    "text": "John Cages 4'33'', 1952 von dem Pianisten David Tudor uraufgeführt, besteht aus drei Sätzen, in denen kein Ton gespielt wird; zu hören ist, was ohnehin im Raum geschieht – Husten, Wind, Regen auf dem Dach. Angeregt war Cage durch den Zen-Buddhismus und durch den Besuch eines schalltoten Raums 1951, in dem er dennoch Geräusche hörte: Stille gibt es nicht. Die Frage, was überhaupt Musik ist, wird zur künstlerischen Aufgabe. Viele hielten das Stück für einen Scherz; es wurde zum Bezugspunkt für Fluxus, Minimal Music und Klangkunst.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1953,
    "titel": "Das Studio in Köln",
    "text": "Im Studio für elektronische Musik des WDR wird Klang erstmals nicht aufgenommen, sondern aus Sinustönen erzeugt und auf Band montiert. Was zählt, ist nicht mehr die Spielbarkeit, sondern die Bearbeitbarkeit. Von hier führt eine gerade Linie zum Synthesizer, zur Studioproduktion als eigentlichem Werk und zu der Frage, was eine Aufführung noch sein soll."
   },
   {
    "jahr": 1958,
    "titel": "Bossa Nova",
    "text": "João Gilberto nimmt 1958 Chega de Saudade von Antônio Carlos Jobim und Vinícius de Moraes auf: mit leiser, fast gesprochener Stimme und einem Gitarrenrhythmus, der den Samba verdichtet. Die Bossa Nova verbindet afrobrasilianische Rhythmik mit der Harmonik des Jazz und wird zum Klang der Mittelschicht Rios. Mit The Girl from Ipanema erreicht sie 1964 die internationalen Hitparaden. Damit veränderte Musik aus Brasilien den Jazz in den USA – eine Umkehr der üblichen Einflussrichtung. Nach dem Putsch von 1964 wurden viele Musiker politischer.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1963,
    "titel": "Der Synthesizer",
    "text": "Robert Moog entwickelt ab 1963/64 spannungsgesteuerte Module, die zu Synthesizern verbunden werden; fast gleichzeitig arbeitet Don Buchla in Kalifornien an einem ähnlichen System. Elektronisch erzeugte Klänge lösen die Bindung an schwingende Körper. 1968 macht Wendy Carlos' Album Switched-On Bach den Moog bekannt, in den 1970er Jahren tragen kompakte Geräte wie der Minimoog ihn in die Popmusik. Filmmusik und später ganze Genres wie Synthiepop und Techno beruhen auf Klängen, die kein herkömmliches Instrument erzeugen kann.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1973,
    "titel": "Hip-Hop",
    "text": "Am 11. August 1973 legt der in Jamaika geborene DJ Kool Herc auf einer Party in einem Wohnblock der Bronx auf und verlängert die Trommelpausen von Funkplatten, indem er zwei Exemplare abwechselnd spielt. Aus diesen Breaks entstehen Breakdance und der Sprechgesang der MCs; Graffiti gehört bald dazu. Die Bronx war damals von Armut und Bränden gezeichnet. Ab den 1980er Jahren bauten Sampler aus Plattenausschnitten neue Musik, was Urheberrechtsstreit auslöste. In den USA löste Hip-Hop 2017 den Rock als meistgehörtes Genre ab.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1979,
    "titel": "Musik wird tragbar",
    "text": "Sony bringt 1979 den Walkman auf den Markt, einen Kassettenspieler ohne Lautsprecher, mit leichten Kopfhörern. Das Hören wird privat und ortsunabhängig: Musik begleitet erstmals den Alltag auf der Straße, im Bus, beim Sport, statt einen eigenen Anlass zu verlangen. Kritiker sahen darin Abschottung, Nutzer eine Möglichkeit, sich die Stadt mit eigenem Klang anzueignen. Die Kassette erlaubte zudem, Musik zu überspielen und eigene Zusammenstellungen zu machen. Sony verkaufte Hunderte Millionen Geräte; iPod und Smartphone setzen das Prinzip fort.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1983,
    "titel": "MIDI",
    "text": "Konkurrierende Hersteller vereinbaren einen gemeinsamen Standard, mit dem Instrumente einander Tonhöhe, Anschlagstärke und Zeit übermitteln können. MIDI überträgt keinen Klang, sondern Anweisungen – deshalb ist eine Aufnahme nachträglich in Tempo, Tonart und Instrument veränderbar. Der Standard ist über vierzig Jahre nahezu unverändert in Gebrauch und der Grund, warum Musikproduktion am Computer möglich wurde."
   },
   {
    "jahr": 1999,
    "titel": "Die Datei",
    "text": "Mit Napster können Nutzer ab 1999 Musikdateien im MP3-Format direkt untereinander tauschen; das Format, maßgeblich am Fraunhofer-Institut in Erlangen entwickelt, verkleinert Aufnahmen auf etwa ein Zehntel. Musik löst sich vom Tonträger. Nach Klagen der Musikindustrie musste Napster 2001 schließen, doch andere Tauschbörsen folgten. Die Umsätze der Branche brachen über ein Jahrzehnt ein; erst der iTunes Store ab 2003 und Streamingdienste wie Spotify ab 2008 erschlossen neue Einnahmen. Die Bezahlung der Musiker bleibt bis heute Streitpunkt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2012,
    "titel": "Gangnam Style",
    "text": "Das Video zu Gangnam Style des südkoreanischen Sängers Psy erreicht am 21. Dezember 2012 als erstes auf YouTube eine Milliarde Abrufe. Es steht für eine Verschiebung: Nicht mehr Radio und Plattenfirmen, sondern Plattformen und Algorithmen entscheiden über weltweite Verbreitung, unabhängig von der Sprache. Die koreanische Popindustrie hatte dies gezielt vorbereitet, mit Agenturen, die Künstler jahrelang ausbilden, und staatlicher Kulturförderung. Die Vorherrschaft englischsprachiger Popmusik ist seitdem nicht mehr selbstverständlich.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Der lange Schwanz der Vergangenheit",
    "text": "Auf Streamingdiensten entfallen in den USA nach Branchenauswertungen inzwischen mehr Abrufe auf ältere Aufnahmen als auf neue; als Grenze gilt meist ein Alter von achtzehn Monaten. Erstmals konkurriert neue Musik dauerhaft mit der gesamten aufgezeichneten Vergangenheit. Empfehlungsalgorithmen bestimmen mit, was gehört wird, und belohnen Stücke, die in den ersten Sekunden fesseln; täglich kommen rund hunderttausend neue Titel hinzu. Für Musiker bedeutet das Sichtbarkeit ohne Plattenfirma, aber Erlöse von Bruchteilen eines Cents pro Abruf.",
    "seit": "2026-10-01"
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
    "text": "In Çatalhöyük in Anatolien, besiedelt etwa zwischen 7100 und 6000 v. Chr., betritt man die Häuser über eine Leiter durch das Dach; Gassen gibt es kaum, die Häuser stehen Wand an Wand, und das Leben findet zum Teil auf den Dächern statt. Unter den Lehmbänken im Haus liegen die Toten – Wohnen und Bestatten sind nicht getrennt. Die Wände wurden immer wieder neu verputzt und bemalt. Ein Haus war damit nicht nur Unterkunft, sondern auch Ort der Erinnerung an die Vorfahren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -3100,
    "titel": "Möbel aus Stein in Skara Brae",
    "text": "Auf Orkney ist zwischen etwa 3180 und 2500 v. Chr. ein Dorf bewohnt, dessen Einrichtung erhalten blieb, weil es auf der baumlosen Insel aus Steinplatten gebaut wurde: In jedem Haus eine Feuerstelle in der Mitte, rechts und links ein Bett, gegenüber der Tür ein Regal. Die Häuser sind fast identisch eingerichtet und in Abfallhaufen eingebettet, die isolieren. Gerade die Gleichförmigkeit zeigt, dass es feste Vorstellungen davon gab, wie ein Haus auszusehen hatte – lange vor jeder Schrift auf den Inseln.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -2500,
    "titel": "Abwasser in Mohenjo-daro",
    "text": "Die Indusstadt Mohenjo-daro, um 2500 v. Chr. erbaut und um 1700 v. Chr. verlassen, hat Hunderte Brunnen, Badeplätze in den Häusern und abgedeckte Kanäle entlang der Straßen, in die das Abwasser der Häuser floss. Eine solche Ordnung setzt Absprachen voraus, die über den einzelnen Haushalt hinausgingen. Wer sie traf, ist unbekannt: Die Schrift der Induskultur ist nicht entziffert, Paläste sind nicht sicher nachgewiesen. Dass viele Häuser an ein Kanalnetz angeschlossen waren, wurde in Europas Städten erst im 19. Jahrhundert wieder üblich.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1750,
    "titel": "Bier als Lohn",
    "text": "Mesopotamische Verwaltungstexte belegen Bierrationen als festen Teil der Bezahlung, neben Gerste, Öl und Wolle; auch die Arbeiter an den Pyramiden von Giza erhielten Brot und Bier. Der Kodex Hammurapi regelt bereits den Ausschank in Schenken. Bier war kalorienreich und lange ein Grundnahrungsmittel, kein Genussmittel. Ob es vor allem getrunken wurde, weil Wasser verunreinigt war, wie oft behauptet wird, ist in der Forschung umstritten – sicher ist sein Wert als Nahrung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1500,
    "titel": "Kopfstütze statt Kissen",
    "text": "Ägyptische Gräber enthalten Bettgestelle mit geflochtener Liegefläche und hölzerne Kopfstützen – Möbel, die auf Hitze und Insekten antworten, nicht auf Weichheit. Wer kein Bett hatte, schlief auf einer Matte, in Kleidern, mit der Familie im selben Raum. Das eigene Bett für die eigene Person ist eine der jüngsten Erfindungen des Wohnens."
   },
   {
    "jahr": -1250,
    "titel": "Fehltage in Deir el-Medina",
    "text": "Die Handwerker, die die Königsgräber im Tal der Könige ausstatteten, lebten mit ihren Familien in einem eigenen Dorf. Tausende beschriftete Scherben aus dem Ort sind erhalten: Einkaufslisten, Briefe, Gerichtsfälle und Anwesenheitslisten, in denen Gründe für Fehltage stehen – Krankheit, ein Skorpionstich, Bierbrauen, ein Fest. Selten erlaubt eine Quelle der Antike einen so dichten Blick auf Lohnarbeiter. Als unter Ramses III. die Getreidelieferungen ausblieben, legten dieselben Männer die Arbeit nieder.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -100,
    "titel": "Wohnen in der Mietskaserne",
    "text": "In Rom leben die meisten Menschen in mehrstöckigen Mietshäusern, den Insulae, meist ohne Küche, Wasseranschluss und Abort; gekocht und gegessen wird oft in Garküchen. Unten liegen Läden, oben werden die Wohnungen kleiner und billiger. Einsturz und Brand sind ständige Gefahren, über die Dichter wie Juvenal klagen. Augustus begrenzte deshalb die Bauhöhe auf etwa siebzig Fuß, gut zwanzig Meter. Die Häuser brachten den Eigentümern hohe Mieten – Bauvorschriften wurden oft umgangen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 79,
    "titel": "Alltag unter Asche",
    "text": "Der Vesuvausbruch von 79 konservierte Pompeji und Herculaneum mit Wandkritzeleien, Wahlwerbung, Garküchen mit eingemauerten Töpfen, Bäckereien und Latrinen. Erst diese Funde, ausgegraben seit dem 18. Jahrhundert, zeigen, wie römischer Alltag aussah – die Literatur der Zeit schweigt darüber weitgehend, weil sie von der Oberschicht für die Oberschicht geschrieben wurde. Selbst das Datum ist strittig: Überliefert ist der 24. August, eine 2018 gefundene Inschrift spricht für Oktober.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 100,
    "titel": "Die Latrine ohne Wände",
    "text": "Römische Städte haben öffentliche Bedürfnisanstalten mit bis zu sechzig Sitzen an einer durchlaufenden Rinne, ohne Trennwände, mit Wasserspülung. Was heute als Zumutung gilt, war ein Ort des Gesprächs. Parasitenfunde in Kloaken zeigen zugleich, dass die Kanalisation die Krankheitslast weniger senkte, als lange angenommen wurde – gespült wurde, aber nicht getrennt."
   },
   {
    "jahr": 200,
    "titel": "Mensch und Vieh unter einem Dach",
    "text": "Auf der Wurt Feddersen Wierde nahe der Wesermündung, bewohnt vom 1. Jahrhundert v. Chr. bis ins 5. Jahrhundert, standen Wohnstallhäuser von etwa zwanzig Metern Länge: An einem Ende lebten die Menschen, am anderen standen die Rinder in Boxen. Das Vieh wärmte das Haus, und der Besitz war immer im Blick. Im 3. Jahrhundert lebten dort rund 300 Menschen auf 26 Höfen. Die Bauform hielt sich in Norddeutschland bis ins 20. Jahrhundert – das Niederdeutsche Hallenhaus ist ihr Nachfahre.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 216,
    "titel": "Die Thermen",
    "text": "Die Caracalla-Thermen in Rom können mehr als tausend Badegäste gleichzeitig aufnehmen und enthalten Bibliothek, Sportplatz und Läden; der Eintritt war billig oder frei. Baden war weniger Hygiene als Tagesablauf – man kam nach der Arbeit und blieb Stunden. Mit dem Ende der römischen Wasserleitungen verschwindet diese Form des öffentlichen Alltags in Europa für über tausend Jahre."
   },
   {
    "jahr": 600,
    "titel": "Die Stundenordnung des Klosters",
    "text": "Die Benediktsregel aus dem 6. Jahrhundert legt für Mönche feste Gebetszeiten bei Tag und Nacht fest, dazu Zeiten für Arbeit, Lesen, Essen und Schlaf. Glocken rufen zu den Horen, und wer zu spät kommt, wird ermahnt. Gemessen wird noch nach Sonnenstand, die Stunden sind im Winter kürzer als im Sommer. Zeitdisziplin entsteht so als religiöse Übung, Jahrhunderte bevor sie wirtschaftlich verlangt wird – und die Klöster wurden später zu den frühen Nutzern mechanischer Uhren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 760,
    "titel": "Tee wird zur Kultur",
    "text": "Um 760 schreibt Lu Yu in China das Buch vom Tee, die erste bekannte Schrift, die sich nur diesem Getränk widmet: Anbau, Werkzeuge, Wasser, Zubereitung und die richtige Art zu trinken. Damit wird aus einem Heilmittel und Alltagsgetränk eine Praxis mit Regeln und Geschmacksurteilen. Tee wurde in der Tang-Zeit so wichtig, dass der Staat ihn besteuerte. Über Mönche gelangte die Kultur nach Japan; nach Europa kam Tee erst im 17. Jahrhundert, etwa gleichzeitig mit dem Kaffee.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1147,
    "titel": "Essen gehen in Kaifeng",
    "text": "Meng Yuanlao, der 1127 vor den Jurchen aus der Song-Hauptstadt Kaifeng geflohen war, schrieb seine Erinnerungen an die Stadt nieder; das Vorwort ist auf 1147 datiert. Er beschreibt Restaurants, Teehäuser, Garküchen und Nachtmärkte, die bis tief in die Nacht offen hatten, dazu Straßenkünstler mit Namen. In Europa gab es zur selben Zeit Gasthäuser für Reisende, aber kaum ein Restaurant im heutigen Sinn. Der Text zeigt, wie früh in China eine städtische Kultur des Auswärtsessens entstand.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1200,
    "titel": "Das Mittelalter wusch sich",
    "text": "Städtische Badestuben sind im Hochmittelalter verbreitet, mit Badeknechten, festen Öffnungstagen und Zunftordnungen; Seife wird in Marseille, Venedig und Aleppo gewerblich hergestellt. Die Vorstellung vom durchweg schmutzigen Mittelalter stammt aus dem 19. Jahrhundert. Zurückgedrängt wird das Badehaus erst in der frühen Neuzeit – wegen Holzmangels, Syphilis und Sittenstrenge."
   },
   {
    "jahr": 1300,
    "titel": "Die öffentliche Uhr",
    "text": "Ende des 13. Jahrhunderts entstehen in Europa mechanische Räderuhren; in den 1330er Jahren schlägt in Mailand eine Turmuhr die Stunden, bald folgen viele Städte. Kirch- und Rathausuhren geben allen dieselbe Zeit, und der Tag wird in gleich lange Stunden geteilt statt nach dem Tageslicht, das im Winter kürzer ist. Die Städte ließen sich die Uhren viel kosten, denn sie regelten Markt, Ratssitzung und Arbeitsbeginn. Damit beginnt ein Zeitverständnis, das sich erst in der Fabrik ganz durchsetzt.",
    "vertiefung": "uhr-arbeitstag",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1350,
    "titel": "Nach der Pest steigen die Löhne",
    "text": "Der Schwarze Tod tötete ab 1347 vermutlich ein Drittel bis die Hälfte der Bevölkerung Europas. Der Arbeitskräftemangel verbesserte die Lage der Überlebenden spürbar: höhere Löhne, mehr Fleisch, bessere Kleidung, mehr Freizügigkeit. Obrigkeiten reagierten mit Lohnobergrenzen, in England 1349 und 1351, und mit Kleiderordnungen, die festlegten, wer welchen Stoff tragen durfte. Der Versuch, die alte Ordnung festzuschreiben, trug zu Aufständen wie dem englischen Bauernaufstand von 1381 bei.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1450,
    "titel": "Der Kamin und das eigene Zimmer",
    "text": "Im späten Mittelalter ersetzen Wandkamine mit Schornstein in wohlhabenden Häusern Nordwesteuropas die offene Feuerstelle in der Mitte der Halle, deren Rauch durch das Dach abzog. Erst jetzt lassen sich Häuser in mehrere beheizbare Räume und Stockwerke teilen – die Voraussetzung dafür, allein zu sein. In England bemerkte William Harrison 1577, alte Leute erinnerten sich an Dörfer mit kaum einem Schornstein. Die Verbreitung zog sich über zwei Jahrhunderte und folgte dem Wohlstand.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1519,
    "titel": "Der Markt von Tlatelolco",
    "text": "Als die Spanier 1519 in das Becken von Mexiko kamen, staunten sie über den Markt von Tlatelolco, der Schwesterstadt Tenochtitlans. Bernal Díaz beschreibt nach Waren geordnete Gassen und Marktrichter, die Streit schlichteten und Maße prüften; Cortés behauptete, täglich kämen sechzigtausend Menschen, was als übertrieben gilt. Kakaobohnen dienten als Kleingeld. Für den Alltag der Stadt war der Markt die Versorgung schlechthin – kein Haushalt produzierte alles, was er brauchte.",
    "seit": "2026-10-01"
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
    "text": "Tagebücher, Gerichtsakten und medizinische Ratgeber aus ganz Europa sprechen vom ersten und zweiten Schlaf, getrennt von einer wachen Stunde, in der gebetet, geredet, gearbeitet oder der Nachbar besucht wurde. Der Historiker Roger Ekirch hat das ab 2001 zusammengetragen. Der durchgehende Achtstundenschlaf setzt sich nach seiner Deutung erst mit künstlichem Licht und späterem Zubettgehen durch. Wie allgemein das Muster war, ist strittig; Studien bei Völkern ohne Elektrizität fanden es nicht überall.",
    "vertiefung": "geteilter-schlaf",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1650,
    "titel": "Das Kaffeehaus",
    "text": "Kaffeehäuser gab es in Istanbul seit der Mitte des 16. Jahrhunderts; um 1650 entstehen die ersten in England, bald in ganz Europa. Anders als die Schenke ist das Kaffeehaus ein Ort, an dem man nüchtern bleibt, Zeitungen liest und mit Fremden redet. Händler, Schiffseigner und Versicherer trafen sich an festen Tischen; aus Edward Lloyds Londoner Kaffeehaus entstand die Versicherungsbörse Lloyd's. Obrigkeiten misstrauten den Häusern als Orten politischer Gerüchte – Karl II. versuchte 1675 vergeblich, sie zu verbieten.",
    "vertiefung": "kaffeehaus",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1750,
    "titel": "Die Kindheit wird entdeckt",
    "text": "Im 18. Jahrhundert werden Kinder zunehmend als eigene Lebensphase wahrgenommen: Es gibt eigene Kleidung, Kinderbücher, Spielzeug, und Rousseaus Émile von 1762 macht die Erziehung zum Thema der gebildeten Welt. Zugleich arbeiten Kinder in den frühen Fabriken unter härteren Bedingungen als je zuvor. Die These des Historikers Philippe Ariès, das Mittelalter habe Kindheit gar nicht gekannt, gilt heute als überzogen – Quellen zeigen auch dort Trauer um Kinder und besondere Fürsorge.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1775,
    "titel": "Das Wasserklosett",
    "text": "Der schottische Uhrmacher Alexander Cumming lässt 1775 ein Spülklosett patentieren, dessen gebogenes Abflussrohr stets etwas Wasser hält und so den Geruch aus der Leitung im Rohr zurückhält. Ein Spülklosett hatte John Harington schon 1596 entworfen, doch erst der Geruchsverschluss machte die Toilette im Haus erträglich. Verbreiten konnte sie sich aber erst mit Wasserleitung und Kanalisation im 19. Jahrhundert; vorher führte sie oft nur in eine Sickergrube, die das Grundwasser verdarb.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1800,
    "titel": "Der Arbeitstag nach der Uhr",
    "text": "In der Fabrik ersetzt die Uhrzeit die Aufgabe als Maß der Arbeit: Bezahlt wird für Stunden, nicht für ein fertiges Stück. Fabrikordnungen schreiben Glocken, Stechuhren und Strafgelder für Verspätung vor. Der Historiker E. P. Thompson hat gezeigt, dass dieses Zeitverständnis erst gelernt und durchgesetzt werden musste – Bauern und Handwerker arbeiteten nach Saison und Auftrag, mit Phasen großer Anstrengung und langen Pausen. Aus der Stundenzählung erwuchs bald der Kampf um die Länge des Arbeitstags.",
    "vertiefung": "uhr-arbeitstag",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1830,
    "titel": "Feuer auf Verlangen",
    "text": "Das Reibstreichholz macht Feuer in Sekunden verfügbar; vorher musste im Haus eine Glut gehütet oder beim Nachbarn geholt werden, und Feuerschlagen mit Stahl und Zunder dauerte Minuten. Die frühen Hölzer enthielten weißen Phosphor und verursachten bei den Arbeiterinnen der Fabriken Knochennekrosen im Gesicht. Der Stoff wurde erst 1906 international verboten."
   },
   {
    "jahr": 1854,
    "titel": "Sauberes Wasser",
    "text": "John Snow weist 1854 in London nach, dass eine Choleraepidemie von einem verseuchten Brunnen ausging. Es folgen Kanalisation, Wasserwerke und Sandfilter – die Maßnahmen, die die Lebenserwartung in den Städten des 19. Jahrhunderts am stärksten erhöhten. Wie groß der Unterschied war, zeigte 1892 Hamburg: Die Stadt trank ungefiltertes Elbwasser und verlor an der Cholera rund 8.600 Menschen, das benachbarte Altona mit Filteranlage blieb weitgehend verschont. Danach baute auch Hamburg eine Filtration.",
    "vertiefung": "kanalisation-london",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1860,
    "titel": "Die Nähmaschine",
    "text": "Mit der Nähmaschine sinkt die Zeit für ein Hemd von vierzehn Stunden auf etwa eine. Kleidung wird zur Ware, die man kauft statt herstellt, Konfektionsgrößen werden nötig, und die Heimarbeiterin wird zur Figur der Städte. Der Zusammenhang gilt in beide Richtungen: Dasselbe Gerät, das Hausarbeit verkürzte, machte Lohnarbeit im Wohnzimmer möglich."
   },
   {
    "jahr": 1880,
    "titel": "Licht in der Nacht",
    "text": "Ab dem frühen 19. Jahrhundert erhellen Gaslaternen die Straßen großer Städte, ab den 1880er Jahren elektrisches Licht, nachdem Edison 1882 in New York ein erstes Kraftwerk für die Beleuchtung eröffnet hat. Vorher endete der Tag für die meisten mit der Dämmerung, weil Kerzen teuer waren. Nachtarbeit im Schichtbetrieb, Abendunterhaltung und späteres Zubettgehen werden möglich und üblich. Damit verschiebt sich auch der Schlaf: Er wird kürzer und zusammenhängender.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1885,
    "titel": "Das Fahrrad",
    "text": "Mit dem Niederrad und dem Luftreifen entsteht das erste bezahlbare persönliche Verkehrsmittel. Es erweitert den Aktionsradius eines Arbeiters von wenigen Kilometern auf zwanzig – Heiratskreise, Arbeitsplätze und Vereine verändern sich messbar. Für Frauen war es außerdem ein Kleidungsstreit: Ohne Reformkleid ließ sich nicht fahren."
   },
   {
    "jahr": 1900,
    "titel": "Das Badezimmer",
    "text": "Um 1900 verbreiten sich fließendes warmes Wasser, Badewanne und Spülklosett in einem eigenen Raum in bürgerlichen Neubauwohnungen. Arbeiterfamilien teilten sich noch lange Toiletten im Treppenhaus oder auf dem Hof und gingen in öffentliche Volksbäder, die viele Städte gerade deshalb bauten. Was heute Mindeststandard ist, war zwei Generationen zuvor Luxus. In Deutschland hatten bis weit in die Nachkriegszeit viele Altbauwohnungen kein eigenes Bad – Sanierung hieß oft zuerst: ein Bad einbauen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1913,
    "titel": "Konserve, Kühlschrank, Vorrat",
    "text": "Seit dem frühen 19. Jahrhundert lassen sich Lebensmittel in Gläsern und Blechdosen haltbar machen; 1913 kommt in den USA ein erster elektrischer Haushaltskühlschrank auf den Markt, verbreitet wird das Gerät in den USA ab den späten 1920er Jahren, in Westeuropa erst in den 1950er und 1960er Jahren. Industrielle Konservierung und Kühlung lösen die Ernährung von der Jahreszeit und vom täglichen Einkauf. Der Speiseplan wird gleichförmiger und zugleich sicherer, weil verdorbene Lebensmittel seltener werden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1920,
    "titel": "Das Radio im Wohnzimmer",
    "text": "Der Rundfunk bringt zum ersten Mal denselben Klang zur selben Zeit in Millionen Wohnungen. Der Abend bekommt ein Programm, das Möbel werden um das Gerät herum gestellt, und ein Ereignis kann national gleichzeitig erlebt werden. Damit entsteht auch das Werkzeug, mit dem die Diktaturen der folgenden zwei Jahrzehnte in die Wohnungen sprechen."
   },
   {
    "jahr": 1926,
    "titel": "Die Frankfurter Küche",
    "text": "Für den Wohnungsbau des Neuen Frankfurt entwirft die Wiener Architektin Margarete Schütte-Lihotzky 1926 eine kleine Einbauküche, deren Wege nach dem Vorbild der Fabrikorganisation kurz gehalten sind: Arbeitsplatte unter dem Fenster, Schütten für Vorräte, Herd und Spüle in Griffweite. Rund 10.000 Exemplare werden in Frankfurter Wohnungen eingebaut. Die Küche spart Zeit und Baukosten, trennt aber auch die Kochende vom Rest der Familie – beides wurde schon damals diskutiert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1936,
    "titel": "Bezahlter Urlaub",
    "text": "Nach dem Wahlsieg der Volksfront und einer Streikwelle schreibt in Frankreich ein Gesetz vom 20. Juni 1936 zwei Wochen bezahlten Urlaub für alle Arbeitnehmer vor; ermäßigte Bahnfahrkarten ermöglichten vielen erstmals eine Reise ans Meer. Vorher war Urlaub ein Privileg von Beamten und Angestellten. Freizeit wurde damit zu einer festen, planbaren Zeit im Jahr, aus der später der Massentourismus entstand. In Frankreich wurde der Anspruch bis 1982 auf fünf Wochen erweitert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "Die Hausarbeit wird technisiert",
    "text": "Waschmaschine, Staubsauger und Kühlschrank verbreiten sich in den Haushalten der Industrieländer in den 1950er und 1960er Jahren und verkürzen einzelne Arbeitsgänge drastisch – der Waschtag mit Kochen, Rubbeln und Wringen verschwindet. Die Gesamtzeit für Hausarbeit sank nach Zeitbudget-Studien aber weniger als erwartet: Die Ansprüche an Sauberkeit stiegen, Wäsche wurde häufiger gewechselt, Dienstboten fielen weg. Die Historikerin Ruth Schwartz Cowan hat das 1983 als mehr Arbeit für die Mutter beschrieben.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1957,
    "titel": "Der Supermarkt",
    "text": "Selbstbedienung ersetzt den Verkäufer hinter der Theke: Der Kunde geht am Regal vorbei, greift selbst und entscheidet ohne Gespräch. Damit ändert sich die Verpackung – sie muss jetzt bewerben, nicht nur schützen –, und der Wochenkauf ersetzt den täglichen Gang. Voraussetzung sind Kühlschrank und Auto; ohne beides funktioniert der Großeinkauf nicht."
   },
   {
    "jahr": 1970,
    "titel": "Fernsehen als Taktgeber",
    "text": "Mit wenigen Programmen und festen Sendezeiten synchronisiert der Fernsehabend Millionen Haushalte: Die Nachrichtensendung um acht, die Samstagsshow, der Straßenfeger, bei dem die Straßen leer sind. Erstmals verbringt ein Großteil einer Gesellschaft die Freizeit gleichzeitig mit demselben Inhalt, und am nächsten Morgen reden alle darüber. Die Wohnzimmer werden auf das Gerät hin eingerichtet. Mit dem Privatfernsehen und später dem Abruf im Netz löst sich diese Gleichzeitigkeit wieder auf.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1980,
    "titel": "Was übrig bleibt",
    "text": "Mit Einwegverpackungen wird der Hausmüll pro Kopf innerhalb einer Generation zum Mehrfachen; Trennung, Tonnen und Sammelsysteme werden Teil des Wohnens. Der Aufwand verschiebt sich damit von der Entsorgung zum Haushalt – Sortieren ist unbezahlte Arbeit. Wie viel davon tatsächlich stofflich wiederverwertet wird, ist von Material und Land abhängig; die Quoten sind fortlaufend zu prüfen und nicht als feste Zahl haltbar."
   },
   {
    "jahr": 2007,
    "titel": "Das Gerät in der Tasche",
    "text": "2007 stellt Apple das iPhone vor, wenig später folgen Geräte mit Android; innerhalb eines Jahrzehnts besitzt der Großteil der Erwachsenen in den Industrieländern ein Smartphone. Es verbindet Uhr, Post, Telefon, Karte, Kamera, Zeitung und Bezahlen in einem Gerät. Erreichbarkeit wird zum Normalzustand, und die Trennung von Arbeit und Freizeit verliert ihren äußeren Halt. Welche Folgen die ständige Nutzung etwa für Schlaf und Aufmerksamkeit hat, wird in der Forschung kontrovers diskutiert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Zuhause als Arbeitsplatz",
    "text": "Die Coronapandemie verlagert ab März 2020 Büroarbeit millionenfach in die Wohnung; was vorher als Ausnahme galt, wird binnen Wochen eingerichtet. Damit kehrt die Arbeit an einen Ort zurück, den die Industrialisierung von ihr getrennt hatte. Viele Unternehmen behielten Mischformen bei, Pendelwege, Wohnungsgrundrisse und die Nachfrage nach Büros in Innenstädten veränderten sich. Wie dauerhaft der Wandel ist, ist offen; der Anteil der Heimarbeit ging nach der Pandemie teilweise wieder zurück.",
    "seit": "2026-10-01"
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
    "jahr": -3660000,
    "titel": "Fußspuren in der Asche",
    "text": "In Laetoli in Tansania entdeckte das Team von Mary Leakey 1976 und 1978 Fußspuren in vulkanischer Asche, die auf rund 3,6 bis 3,7 Millionen Jahre datiert sind. Sie stammen vermutlich von Australopithecus afarensis und zeigen einen aufrechten Gang mit Ferse und nach vorn gerichteter großer Zehe. Der Befund ordnet die Reihenfolge der Menschwerdung: Der aufrechte Gang war lange vor dem großen Gehirn und vor den ältesten bekannten Steinwerkzeugen da.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -3300000,
    "titel": "Die ersten Werkzeuge",
    "text": "Bearbeitete Steine aus Lomekwi am Turkana-See in Kenia, 2015 veröffentlicht, sind auf etwa 3,3 Millionen Jahre datiert und damit älter als die ältesten bekannten Funde der Gattung Homo, die um 2,8 Millionen Jahre alt sind. Es handelt sich um grobe Abschläge von großen Steinblöcken. Wer sie herstellte, ist unbekannt; infrage kommen Australopithecinen oder verwandte Formen. Werkzeuggebrauch ist damit keine Erfindung des Menschen, sondern älter als er. Einzelne Fachleute bezweifeln die Zuordnung der Funde zur Fundschicht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -2000000,
    "titel": "Fleisch und Mark",
    "text": "Aufgeschlagene Knochen mit Schnittspuren zeigen, dass frühe Menschen Kadaver zerlegten und an das Knochenmark kamen – eine sehr energiereiche Nahrung, an die kein anderes Tier ohne Werkzeug gelangt. Der Zugang zu dieser Kalorienquelle gilt als eine Voraussetzung für das Wachstum des Gehirns, das viel Energie verbraucht. Ob gejagt oder von Rissen abgetragen wurde, ist im Einzelfall meist nicht entscheidbar."
   },
   {
    "jahr": -1800000,
    "titel": "Der Auszug aus Afrika",
    "text": "Mit Homo erectus verlässt erstmals eine Menschenform Afrika: Die Schädel aus Dmanisi in Georgien sind rund 1,8 Millionen Jahre alt, bald darauf sind Menschen auf Java und in China belegt; Steinwerkzeuge in China werden sogar auf über zwei Millionen Jahre datiert. Die Ausbreitung gelingt ohne Nadel, Boot oder Vorratshaltung. Die Dmanisi-Funde sind auffallend klein und variabel, was die Frage aufwarf, ob mehrere frühe Arten oder eine sehr vielgestaltige Art unterwegs waren. Die Debatte ist offen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1700000,
    "titel": "Der Faustkeil",
    "text": "Mit dem Acheuléen entsteht ein Werkzeug, das nicht nur brauchbar, sondern symmetrisch ist – beidseitig bearbeitet, oft sorgfältiger als nötig. Die Form bleibt über eine Million Jahre und über drei Kontinente nahezu gleich. Diese Beständigkeit ist so ungewöhnlich, dass sie weniger nach Erfindung als nach Weitergabe aussieht: Werkzeugmachen wurde gelernt, nicht jedes Mal neu gefunden."
   },
   {
    "jahr": -1000000,
    "titel": "Feuer",
    "text": "Verbrannte Knochen und Pflanzenasche in der Wonderwerk-Höhle in Südafrika, rund eine Million Jahre alt, gelten als einer der frühesten sicheren Belege für Feuer, das Menschen nutzten. Ältere Spuren aus Ostafrika sind umstritten, weil Brände auch natürlich entstehen. Regelmäßige Feuerstellen werden erst ab etwa 400.000 Jahren häufig. Gekochte Nahrung ist leichter verdaulich und liefert mehr Energie – nach einer verbreiteten These eine Voraussetzung für größere Gehirne. Feuer schützte außerdem vor Raubtieren und verlängerte den Abend.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -800000,
    "titel": "Die ersten Europäer",
    "text": "Funde in Atapuerca in Spanien und Fußspuren an der englischen Küste bei Happisburgh belegen Menschen in Europa lange vor dem Neandertaler. Sie lebten in einem Klima mit kalten Wintern, ohne dass Feuerstellen in dieser Zeit sicher nachgewiesen sind. Wie sie das überstanden, ist offen – eine der wichtigsten unbeantworteten Fragen der frühen Besiedlung."
   },
   {
    "jahr": -300000,
    "titel": "Homo sapiens",
    "text": "Funde aus Jebel Irhoud in Marokko, 2017 neu datiert auf etwa 315.000 Jahre mit einer Spanne von rund 350.000 bis 280.000, verschieben die Entstehung unserer Art um über hunderttausend Jahre nach hinten – und weg von Ostafrika als einzigem Ursprungsort. Die Gesichter wirken modern, die Schädelform ist noch länglicher als heute. Viele Forscher deuten das so, dass Homo sapiens in vernetzten Gruppen über ganz Afrika entstand, nicht an einem Ort. Wie eng diese Gruppen verbunden waren, ist offen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -250000,
    "titel": "Werkzeug nach Plan",
    "text": "Die Levallois-Technik bearbeitet einen Steinkern so vor, dass sich am Ende Klingen mit vorherbestimmter Form abschlagen lassen. Das setzt voraus, dass mehrere Schritte im Voraus gedacht werden, bevor der erste Schlag fällt. Archäologen sehen darin einen der greifbarsten Hinweise auf planendes Denken, weil sich das Ergebnis nicht durch Ausprobieren erreichen lässt."
   },
   {
    "jahr": -200000,
    "titel": "Die Speere von Schöningen",
    "text": "Im Braunkohletagebau von Schöningen in Niedersachsen wurden zwischen 1994 und 1999 rund zehn hölzerne Waffen geborgen, darunter bis über zwei Meter lange Speere, meist aus Fichte, mit dem Schwerpunkt im vorderen Drittel wie bei modernen Wettkampfspeeren, dazu Pferdeknochen mit Schnittspuren. Ihr Alter ist umstritten: Lange galten rund 300.000 Jahre. Eine Studie von 2025 datiert die Fundschicht auf etwa 200.000 Jahre und sieht Neandertaler als Hersteller; das Niedersächsische Landesamt für Denkmalpflege hält an rund 300.000 Jahren fest.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -176000,
    "titel": "Bauwerk im Dunkeln",
    "text": "In der Höhle von Bruniquel in Frankreich stehen dreihundert Meter vom Eingang entfernt kreisförmige Strukturen aus abgebrochenen Stalagmiten mit Brandspuren, datiert auf etwa 176.000 Jahre. In dieser Tiefe ist Licht zwingend, es gibt keinen Tag. Erbaut haben sie Neandertaler – der Fund gehört zu den Gründen, warum das Bild des kulturlosen Neandertalers nicht mehr zu halten ist."
   },
   {
    "jahr": -100000,
    "titel": "Bestattung und Farbe",
    "text": "In den Höhlen von Qafzeh und Skhul in Israel wurden vor etwa 120.000 bis 90.000 Jahren Tote absichtlich begraben, einer mit einem Hirschgeweih auf der Brust; dazu kommt Ocker, der über weite Strecken herangeschafft wurde. Auch Neandertaler bestatteten ihre Toten. Aus Kenia stammt das Grab eines etwa dreijährigen Kindes, das vor rund 78.000 Jahren in Hockerstellung beigesetzt wurde. Solche Gräber deuten auf Vorstellungen, die über das Sichtbare hinausgehen. Was genau gedacht wurde, sagen die Funde nicht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -80000,
    "titel": "Die kleinen Menschen von Flores",
    "text": "In der Höhle Liang Bua auf der indonesischen Insel Flores wurde 2003 das Skelett einer etwa 1,10 Meter großen Menschenform gefunden, Homo floresiensis. Die Knochen sind auf etwa 100.000 bis 60.000 Jahre datiert, Steinwerkzeuge der Fundschicht auf 190.000 bis 50.000 Jahre; ältere Funde auf der Insel reichen rund 700.000 Jahre zurück. Der Fund zeigt, dass noch vor kurzer Zeit mehrere Menschenformen gleichzeitig lebten – und dass Inselisolation auch Menschen verändern kann.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -75000,
    "titel": "Die Perlen von Blombos",
    "text": "In der Blombos-Höhle in Südafrika finden sich durchbohrte Schneckenschalen mit Abnutzungsspuren von Schnüren und Ockerstücke mit eingeritzten Rautenmustern. Perlen sind nur sinnvoll, wenn jemand sie sieht und deutet – Schmuck ist damit ein Beleg für Zeichen, nicht nur für Geschick. Die Funde sind rund vierzigtausend Jahre älter als die europäischen Höhlenbilder."
   },
   {
    "jahr": -70000,
    "titel": "Die große Ausbreitung",
    "text": "Zwischen etwa 70.000 und 50.000 Jahren verlässt Homo sapiens Afrika in einer Bewegung, aus der alle heute außerhalb Afrikas lebenden Menschen hervorgehen; alte DNA datiert die Vermischung mit Neandertalern auf etwa 47.000 Jahre. Frühere Vorstöße, etwa in die Levante vor über 100.000 Jahren, scheiterten oder blieben ohne heutige Nachkommen. Die Ausbreitung führte in wenigen zehntausend Jahren bis Australien und Europa. Wie schnell und auf welchen Routen sie verlief, wird mit jedem neuen Fund neu verhandelt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -50000,
    "titel": "Über das offene Meer",
    "text": "Australien und Neuguinea waren auch bei tiefstem Meeresspiegel durch Meeresstraßen von Asien getrennt; mindestens eine Überfahrt war länger als die Sichtweite. Spätestens vor rund 50.000 Jahren waren Menschen dort, die Fundstelle Madjedbebe wird sogar auf etwa 65.000 Jahre datiert, was umstritten ist. Boote sind nicht erhalten, die Ankunft selbst ist der Beweis. Da eine dauerhafte Besiedlung eine ausreichend große Gruppe verlangt, gehen viele Forscher von geplanten Fahrten aus, nicht von zufällig abgetriebenen Flößen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -45000,
    "titel": "Bilder an Höhlenwänden",
    "text": "In Höhlen auf Sulawesi in Indonesien wurden Malereien von Warzenschweinen und Menschengestalten mit Uran-Datierungen der Kalkkrusten auf mindestens 45.500 Jahre bestimmt, eine Szene in Leang Karampuang 2024 sogar auf mindestens 51.200 Jahre. Sie gehören damit zu den ältesten bekannten Bildern. Höhlenkunst ist keine europäische Erfindung – in Europa wurde nur früher und intensiver gesucht. Die Datierungen geben Mindestalter an; wie viel älter die Bilder sind, lässt die Methode offen.",
    "vertiefung": "hoehlenmalerei",
    "seit": "2026-10-01"
   },
   {
    "jahr": -40000,
    "titel": "Nadel, Flöte, Figur",
    "text": "In Höhlen der Schwäbischen Alb finden sich vor etwa 43.000 bis 35.000 Jahren Flöten aus Vogelknochen und Mammutelfenbein, der Löwenmensch aus dem Hohlenstein-Stadel und die Venus vom Hohle Fels – seit 2017 Weltkulturerbe. Musik und Bildwerk erscheinen hier gemeinsam und gleich in ausgereifter Form. Nadeln mit Öhr, Voraussetzung für passgenaue Kleidung, kommen in derselben Großepoche auf, in Westeuropa allerdings später. Ob das Bündel auf eine neue Denkweise oder auf bessere Erhaltung zurückgeht, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -40000,
    "titel": "Das Ende der Neandertaler",
    "text": "Neuere Radiokarbondatierungen zeigen, dass die Neandertaler in Europa vor etwa 41.000 bis 39.000 Jahren verschwanden, früher als lange angenommen; Angaben von 30.000 Jahren beruhten oft auf verunreinigten Proben und werden heute nur noch für Einzelfälle diskutiert. Über Jahrtausende lebten sie in Europa neben Homo sapiens. Warum sie ausstarben – Konkurrenz, Klima, kleine Bevölkerung –, ist offen. Ihre Gene leben weiter: Menschen außerhalb Afrikas tragen ein bis zwei Prozent neandertalerisches Erbgut.",
    "vertiefung": "dna-alte",
    "seit": "2026-10-01"
   },
   {
    "jahr": -26000,
    "titel": "Der erste Stoff",
    "text": "In Dolní Věstonice in Mähren zeigen gebrannte Lehmklumpen Abdrücke von gewebtem Textil, geknoteten Netzen und gedrehten Schnüren. Gewebe selbst verrottet, deshalb sind solche Abdrücke oft der einzige Nachweis. Sie verschieben die Textilherstellung um Zehntausende Jahre nach hinten – Fadendrehen ist älter als Ackerbau, Töpferei und Metall."
   },
   {
    "jahr": -20000,
    "titel": "Die Eiszeit auf dem Höhepunkt",
    "text": "Im letzten Kältemaximum, etwa vor 26.000 bis 19.000 Jahren, binden Eisschilde so viel Wasser, dass der Meeresspiegel rund 120 Meter tiefer liegt. Landbrücken verbinden Sibirien mit Alaska und Großbritannien mit dem Festland; wo heute die Nordsee liegt, war bewohnbares Land. Nordeuropa war unter Eis oder Tundra, die Menschen zogen sich in südlichere Rückzugsgebiete zurück. Viele Spuren dieser Zeit liegen heute unter Wasser, was die Küstenarchäologie zu einer der großen offenen Quellen macht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -18000,
    "titel": "Der Topf vor dem Ackerbau",
    "text": "Die ältesten bekannten Keramikgefäße kommen aus Südchina und Japan und sind rund achttausend Jahre älter als die Landwirtschaft. Sie wurden zum Kochen benutzt – Rußspuren und Fischfettreste belegen es. Damit fällt eine alte Ordnung der Vorgeschichte: Töpfe sind keine Folge der Sesshaftigkeit, sondern eine Technik von Jägern und Fischern."
   },
   {
    "jahr": -15000,
    "titel": "Der Hund",
    "text": "Wölfe werden zum ersten domestizierten Tier – vor dem Ackerbau und vor jeder Nutztierhaltung. Ein frühes sicheres Zeugnis ist das Doppelgrab von Bonn-Oberkassel, rund 14.000 Jahre alt: Ein Mann und eine Frau wurden mit einem jungen Hund bestattet, der eine schwere Krankheit nur mit menschlicher Pflege überlebt haben kann. Genetische Schätzungen setzen die Trennung von Wolf und Hund deutlich früher an. Ort und Zeitpunkt der Domestikation sind umstritten, die Priorität vor allen anderen Tieren nicht.",
    "vertiefung": "hund",
    "seit": "2026-10-01"
   },
   {
    "jahr": -12000,
    "titel": "Das Ende der Eiszeit",
    "text": "Nach einer Erwärmung ab etwa 14.700 Jahren fällt das Klima in der Jüngeren Dryaszeit noch einmal in Kälte zurück. Um 9700 v. Chr. steigen die Temperaturen dann nach grönländischen Eisbohrkernen innerhalb weniger Jahrzehnte um mehrere Grad. Küsten verschwinden, Wälder wandern nordwärts, Großtiere wie Mammut und Wollnashorn verschwinden aus weiten Gebieten. Ganze Lebensweisen werden hinfällig – und das stabilere, wärmere Klima des Holozäns schafft die Bedingungen, unter denen Ackerbau erst möglich wird.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -11000,
    "titel": "Die ersten Amerikaner",
    "text": "Lange galt die Clovis-Kultur, benannt nach Funden bei Clovis in New Mexico und datiert auf etwa 13.050 bis 12.750 Jahre vor heute, als erste Besiedlung Amerikas. Diese Annahme gilt heute als widerlegt: Fundplätze wie Paisley Caves in Oregon und Cooper's Ferry in Idaho sind mehr als tausend Jahre älter. Monte Verde in Chile, lange der wichtigste Beleg, ist seit einer Studie von 2026, die das Lager für viel jünger hält, wieder umstritten; die Ausgräber widersprechen. Wie früh genau Menschen kamen und auf welchem Weg, ist offen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -10500,
    "titel": "Pfeil und Bogen",
    "text": "In Stellmoor bei Hamburg liegen über hundert Kiefernschäfte mit Nocken und Spitzenansatz – die ältesten sicher als Pfeile bestimmbaren Funde. Der Bogen speichert Muskelkraft und gibt sie schnell frei; damit wird auf Distanz jagbar, was vorher nur im Nahkampf erreichbar war. Er ist außerdem die erste Waffe, mit der ein Mensch einen anderen töten kann, ohne ihn zu berühren."
   },
   {
    "jahr": -9500,
    "titel": "Göbekli Tepe",
    "text": "Auf einem Hügel in Südostanatolien errichten Menschen etwa zwischen 9500 und 8000 v. Chr. Kreisanlagen aus bis zu mehrere Meter hohen T-förmigen Pfeilern mit Reliefs von Füchsen, Schlangen und Geiern. Die Erbauer lebten noch nicht vom Ackerbau. Der Ausgräber Klaus Schmidt deutete den Ort als Heiligtum, zu dem Gruppen von weither kamen. Neuere Grabungen fanden Häuser und Zisternen, sodass heute auch eine Siedlung angenommen wird. Sicher ist: Großer gemeinsamer Bau stand hier vor dem Ackerbau, nicht danach.",
    "vertiefung": "goebekli-tepe",
    "seit": "2026-10-01"
   },
   {
    "jahr": -9500,
    "titel": "Sesshaftigkeit",
    "text": "Im Fruchtbaren Halbmond beginnen ab etwa 9500 v. Chr. Getreideanbau und Tierhaltung; vorher lebten die Natufier schon in festen Dörfern und ernteten Wildgetreide. Der Preis war hoch: Skelette früher Bauern zeigen einseitigere Ernährung, kleinere Körper, schlechtere Zähne, mehr Infektionen und Gelenkverschleiß als bei Jägern und Sammlern. Dafür ernährt dieselbe Fläche mehr Menschen. Der Übergang war deshalb kein Fortschritt für den Einzelnen, sondern ein Gewinn an Zahl – und kaum umkehrbar.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -9000,
    "titel": "Das Lager am See von Star Carr",
    "text": "Am Ufer eines verlandeten Sees in Yorkshire lebten zwischen etwa 9300 und 8500 v. Chr. Jäger, Sammler und Fischer. Im Torf blieben Holz und Geweih erhalten: eine Plattform aus bearbeiteten Hölzern, Reste eines Hauses – des ältesten bekannten Großbritanniens – und 21 Hirschschädel mit Geweih, die möglicherweise als Kopfschmuck getragen wurden. Der Platz widerlegt das Bild ständig umherziehender Mittelsteinzeitmenschen: Er wurde über Jahrhunderte immer wieder aufgesucht und ausgebaut.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -7500,
    "titel": "Die grüne Sahara",
    "text": "In Gobero im heutigen Niger lag im frühen Holozän ein Süßwassersee. Fischer und Jäger der Kiffian-Kultur lebten dort etwa zwischen 7700 und 6200 v. Chr., nach einer Trockenphase folgten von etwa 5200 v. Chr. an die Tenerer, die auch Rinder hielten; Reste von Welsen, Nilbarsch, Flusspferden und Krokodilen liegen in den Abfallhaufen. Die zahlreichen Gräber des Fundplatzes zeigen, dass die Sahara feucht und bewohnt war – und dass ihr Austrocknen ganze Lebensweisen vertrieb.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -7000,
    "titel": "Çatalhöyük",
    "text": "In Anatolien leben etwa zwischen 7100 und 5950 v. Chr. schätzungsweise 3.500 bis 8.000 Menschen in einer dicht gebauten Siedlung, deren Häuser Wand an Wand stehen und über das Dach betreten werden. Paläste, Tempel oder Herrschaftszeichen sind nicht erkennbar, die Häuser ähneln sich in Größe und Ausstattung, und Untersuchungen von Knochen deuten auf ähnliche Ernährung von Männern und Frauen. Große Siedlungen setzen also nicht zwingend Herrschaft voraus – ein Befund, der viele Theorien über Städte infrage stellt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -7000,
    "titel": "Mais aus einem Gras",
    "text": "Mais stammt von Teosinte, einem buschigen Wildgras Südmexikos mit wenigen harten Körnern. Genetische Daten und Stärkereste aus dem Balsas-Tal sprechen für eine Domestikation vor etwa 9.000 Jahren; die ältesten erhaltenen Kolben aus der Höhle Guilá Naquitz in Oaxaca sind rund 6.250 Jahre alt und tragen nur wenige Kornreihen. Aus diesem Gras wurde über Jahrtausende die Pflanze, die die Städte Mesoamerikas ernährte – ein unabhängiger Weg zum Ackerbau ohne Verbindung zur Alten Welt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -6500,
    "titel": "Milch für Erwachsene",
    "text": "Milchreste in Keramik zeigen, dass in Anatolien und Südosteuropa schon ab etwa 7000 v. Chr. Milch verarbeitet wurde, oft zu Käse und Joghurt, die wenig Milchzucker enthalten. Die Genvariante, die Erwachsenen die Verdauung von Milchzucker erlaubt, war damals aber selten; alte DNA zeigt, dass sie in Europa erst in der Bronzezeit häufig wurde. Warum sie sich dann ausbreitete, ist umstritten – Hungersnöte und Seuchen werden diskutiert. Sicher ist: Kultur hat hier messbar die Biologie verändert.",
    "seit": "2026-10-01"
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
    "text": "Gediegenes Kupfer wurde schon früher gehämmert, um 5000 v. Chr. belegen Funde wie Belovode in Serbien das Ausschmelzen aus Erz – eine Technik, die Hitze von über tausend Grad verlangt. In Varna an der bulgarischen Küste liegen um 4500 v. Chr. Gräber mit Kupfer und Gold, ungleich verteilt auf wenige Tote. Metall wird zum Zeichen von Rang. Ötzi trägt um 3300 v. Chr. ein Beil aus fast reinem Kupfer – ein Wertgegenstand, kein Alltagswerkzeug. Werkzeuge blieben noch lange aus Stein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -5000,
    "titel": "Das Massaker von Talheim",
    "text": "1983 stieß ein Weinbauer in Talheim bei Heilbronn auf eine Grube mit den Skeletten von 34 Menschen, darunter 16 Kinder und Jugendliche, datiert auf etwa 5100 bis 5000 v. Chr., die Spätzeit der Linearbandkeramik. Die meisten hatten unverheilte Schädelverletzungen, viele am Hinterkopf, verursacht von Steinbeilen und Pfeilen. Wahrscheinlich wurde eine ganze Gemeinschaft überfallen. Der Fund widerlegt die Vorstellung friedlicher früher Bauerngesellschaften; ähnliche Befunde aus derselben Zeit stützen das.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -4800,
    "titel": "Reis am Jangtse",
    "text": "Am Unterlauf des Jangtse lebten die Menschen der Hemudu-Kultur, etwa 5500 bis 3300 v. Chr., in langen Pfahlbauten und bauten Reis an; Hacken aus Schulterblättern von Rindern und gelackte Holzschalen sind erhalten. Funde im nahen Tianluoshan zeigen, dass die Domestikation langsam verlief: Über Jahrhunderte stieg der Anteil der Ähren, die ihre Körner nicht mehr von selbst abwarfen. Ackerbau war hier wie anderswo kein Einfall, sondern ein Prozess über viele Generationen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -4000,
    "titel": "Der Pflug",
    "text": "Ritzzeichnungen und Pflugspuren unter späteren Erdwerken belegen den Hakenpflug, der von Rindern gezogen wird. Damit bearbeitet ein Bauer ein Mehrfaches der Fläche, die mit Hacke und Grabstock möglich war, und Überschuss wird planbar. Weil Zugtiere Besitz sind, verstärkt derselbe Schritt die Unterschiede zwischen Haushalten."
   },
   {
    "jahr": -3500,
    "titel": "Rad und Wagen",
    "text": "Zwischen etwa 3500 und 3000 v. Chr. erscheinen Belege für Rad und Wagen in Mesopotamien, in der Steppe und in Mitteleuropa fast gleichzeitig: ein Gefäß aus Bronocice in Polen mit Wagendarstellung, ein Holzrad mit Achse aus dem Laibacher Moor, um 3150 v. Chr., Wagengräber im Steppenraum. Ob eine Erfindung sich rasch ausbreitete oder mehrere Gruppen sie unabhängig machten, ist ungeklärt. Der Wagen setzte Zugtiere voraus und machte schwere Lasten über Land transportierbar.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -3300,
    "titel": "Ein Mann aus dem Eis",
    "text": "Die Gletschermumie aus dem Ötztal ist der besterforschte einzelne Mensch der Vorgeschichte: Wir kennen seine letzten Mahlzeiten, seine Gelenkabnutzung, seine Tätowierungen, seine Kupferaxt und die Pfeilspitze in seiner Schulter, die ihn tötete. An diesem einen Fund hängt mehr Wissen über Alltag, Ausrüstung und Ernährung als an ganzen Fundplätzen. Er zeigt auch, wie viel wir sonst nicht wissen – weil sich Leichen normalerweise nicht erhalten."
   },
   {
    "jahr": -2800,
    "titel": "Hirten aus der Steppe",
    "text": "Die Jamnaja-Kultur in den Steppen nördlich des Schwarzen Meeres, etwa 3300 bis 2600 v. Chr., begrub ihre Toten unter Grabhügeln und nutzte Wagen und Viehherden für ein bewegliches Leben. Studien alter DNA seit 2015 zeigen, dass Menschen mit Steppenherkunft im 3. Jahrtausend v. Chr. in großer Zahl nach Mitteleuropa kamen: Die Träger der Schnurkeramik leiteten einen großen Teil ihres Erbguts von ihnen ab. Viele Forscher nehmen an, dass sie dabei auch indoeuropäische Sprachen verbreiteten; beweisen lässt sich das ohne Schrift nicht.",
    "vertiefung": "dna-alte",
    "seit": "2026-10-01"
   },
   {
    "jahr": -2500,
    "titel": "Stonehenge",
    "text": "Das Monument wurde in Phasen gebaut: Wall und Graben um 3000 v. Chr., der Kreis der großen Sarsensteine mit Decksteinen zwischen etwa 2600 und 2400 v. Chr., letzte Umbauten bis um 1600 v. Chr. Die kleineren Blausteine kamen aus den Preseli-Bergen in Wales, rund 240 Kilometer entfernt; den Altarstein ordnete eine Studie 2024 Nordostschottland zu. Die Achse zeigt auf Sonnenaufgang zur Sommer- und Sonnenuntergang zur Wintersonnenwende. Der Ort diente lange auch als Bestattungsplatz; seine genaue Bedeutung ist offen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1300,
    "titel": "Lapita und der Weg in den Pazifik",
    "text": "Im Bismarck-Archipel nördlich von Neuguinea erscheint im späten 2. Jahrtausend v. Chr. eine Keramik mit gestempelten Mustern, benannt nach dem Fundort Lapita. Ihre Hersteller besiedelten innerhalb weniger Jahrhunderte Inseln, die noch kein Mensch betreten hatte – bis Fidschi, Tonga und Samoa, die um 1000 bis 800 v. Chr. erreicht wurden. Das setzt seetüchtige Auslegerboote und gezielte Navigation über Hunderte Kilometer offenes Meer voraus. Von hier begann später die Besiedlung Polynesiens.",
    "seit": "2026-10-01"
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
    "text": "Türkische Verbände unter dem Heerführer Atsiz nehmen Jerusalem den ägyptischen Fatimiden ab – die Quellen nennen 1071 oder 1073; 1077 schlagen sie einen Aufstand der Stadtbevölkerung blutig nieder. Die Herrschaftswechsel und die unsicheren Wege durch Kleinasien erschwerten die Reise, und die Bedingungen für Pilger verschlechterten sich – wie stark, ist in der Forschung strittig; im Westen wurde es später zur Begründung des Kreuzzugs. 1098 erobern die Fatimiden Jerusalem zurück, ein Jahr bevor die Kreuzfahrer eintreffen.",
    "herrschaft": "Frühislamisch",
    "seit": "2026-10-01"
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
    "text": "Die Strecke von Jaffa, gebaut von einer französischen Gesellschaft auf eine Konzession des Jerusalemer Unternehmers Joseph Navon hin, wird im September 1892 eröffnet. Der Zug brauchte anfangs dreieinhalb bis sechs Stunden und war damit anfangs kaum schneller als die Kutsche auf der Fahrstraße. Um den Bahnhof südwestlich der Altstadt entstehen neue Viertel. Pilgerzahlen und Handel steigen; die Stadt wächst erstmals seit Jahrhunderten deutlich, vor allem vor den Mauern. Es ist die erste Bahn im späteren Palästina.",
    "herrschaft": "Osmanisch",
    "seit": "2026-10-01"
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
  "id": "rom-stadt",
  "titel": "Rom",
  "kurz": "Von der Hüttensiedlung zur Millionenstadt, von 30.000 Einwohnern im Mittelalter zurück zur Hauptstadt — dieselbe Stadt in drei Aggregatzuständen.",
  "einleitung": "Keine andere Stadt hat einen so tiefen Absturz und eine so vollständige Rückkehr hinter sich. Um 100 n. Chr. lebten hier rund eine Million Menschen, mehr als in jeder europäischen Stadt vor dem 19. Jahrhundert; um 1400 waren es etwa zwanzigtausend, die zwischen Ruinen Vieh weideten. Was Rom über die Jahrhunderte trug, war nicht Wirtschaftskraft, sondern zweimal dasselbe Prinzip: Es war der Ort, von dem aus regiert wurde – erst weltlich, dann geistlich. Diese Geschichte folgt der Stadt selbst, nicht dem Reich: ihrem Wasser, ihren Mauern, ihren Bränden und ihren Einwohnerzahlen.",
  "stationen": [
   {
    "jahr": -1000,
    "titel": "Hütten auf dem Palatin",
    "text": "Grabungen auf dem Palatin haben Pfostenlöcher von Hütten und zugehörige Gräber freigelegt, datiert auf das 10. Jahrhundert v. Chr. Die Lage ist gut gewählt: Hügel über der Tiberfurt, wo eine Insel den Fluss teilt und die Salzstraße von der Küste ins Bergland kreuzt. Rom entsteht nicht an einem heiligen Ort, sondern an einer Kreuzung.",
    "herrschaft": "Latinische Siedlungen"
   },
   {
    "jahr": -753,
    "titel": "Der Gründungsmythos",
    "text": "Die römische Überlieferung datiert die Gründung durch Romulus auf dieses Jahr und rechnet ihre Geschichte danach: ab urbe condita. Die Zwillinge, die Wölfin, der Brudermord und der Raub der Sabinerinnen sind Erzählungen, die erst Jahrhunderte später aufgeschrieben wurden. Bemerkenswert ist, was die Römer sich selbst erzählten: Ihre Stadt begann mit einem Mord und einer Bande von Flüchtigen.",
    "herrschaft": "Königszeit (Überlieferung)"
   },
   {
    "jahr": -600,
    "titel": "Die Etrusker legen den Sumpf trocken",
    "text": "Unter den letzten, etruskischen Königen wird das sumpfige Tal zwischen den Hügeln entwässert – die Cloaca Maxima leitet das Wasser in den Tiber. Erst dadurch entsteht ein trockener, befestigter Platz in der Mitte: das Forum. Die Kanalisation ist damit älter als die Republik und die erste bauliche Voraussetzung dafür, dass aus Dörfern auf Hügeln eine Stadt wird.",
    "herrschaft": "Etruskische Könige"
   },
   {
    "jahr": -509,
    "titel": "Die Vertreibung der Könige",
    "text": "Nach der Überlieferung wird der letzte König vertrieben und eine Republik eingerichtet, in der zwei jährlich gewählte Konsuln an der Spitze stehen. Die Abneigung gegen die Alleinherrschaft wird zum Kern des römischen Selbstbildes und begleitet die Stadt fünfhundert Jahre. Sie ist auch der Grund, warum Augustus später jede monarchische Bezeichnung vermied.",
    "herrschaft": "Römische Republik",
    "vertiefung": "roemische-republik"
   },
   {
    "jahr": -390,
    "titel": "Die Kelten nehmen die Stadt",
    "text": "Ein keltisches Heer schlägt die römische Armee an der Allia und besetzt Rom; nur das Kapitol hält. Die Römer zahlen Lösegeld – die Erzählung von den Gänsen, die die Verteidiger weckten, und vom Schwert in der Waagschale gehört zur späteren Ausschmückung. Die Folge ist die erste große Stadtmauer, die sogenannte Servianische Mauer, deren Reste bis heute stehen.",
    "herrschaft": "Römische Republik"
   },
   {
    "jahr": -312,
    "titel": "Wasser und Straße",
    "text": "Im selben Jahr beginnen die Via Appia nach Süden und die Aqua Appia, die erste Wasserleitung der Stadt. Beides geht auf denselben Zensor zurück und beschreibt das römische Verfahren: Erst wird die Versorgung gebaut, dann wächst die Bevölkerung. Bis zur Kaiserzeit kommen zehn weitere Leitungen hinzu, die täglich mehrere Hunderttausend Kubikmeter in die Stadt bringen.",
    "herrschaft": "Römische Republik"
   },
   {
    "jahr": -123,
    "titel": "Getreide für die Hauptstadt",
    "text": "Ein Gesetz sichert den Bürgern Rom Getreide zu festem Preis zu, später kostenlos. Die Stadt ernährt sich schon damals nicht aus ihrem Umland, sondern aus Sizilien, Nordafrika und Ägypten – ein Versorgungssystem mit Häfen, Speichern und Flottenverträgen. Wer Rom regieren wollte, musste die Getreideflotte kontrollieren; wer sie unterbrach, brachte die Stadt binnen Wochen in Aufruhr.",
    "herrschaft": "Römische Republik"
   },
   {
    "jahr": -55,
    "titel": "Das erste steinerne Theater",
    "text": "Bis in die späte Republik durften in Rom keine dauerhaften Theater stehen; Bühnen wurden für jedes Fest aus Holz errichtet und wieder abgebaut, weil konservative Senatoren darin eine Gefahr sahen. Pompeius umging das Verbot, indem er auf dem Marsfeld außerhalb der heiligen Stadtgrenze baute und über die Ränge einen Venustempel setzte. Die Weihe wird meist auf 55 v. Chr. datiert, eine Quelle nennt 52. In der zugehörigen Kurie wurde 44 v. Chr. Caesar ermordet; der Bogen der Zuschauerränge steckt in den Häusern beim Campo de' Fiori.",
    "herrschaft": "Römische Republik",
    "seit": "2026-10-01"
   },
   {
    "jahr": -46,
    "titel": "Caesar baut um",
    "text": "Caesar legt ein eigenes Forum an, plant die Verlegung des Tiberbetts, gründet Kolonien für die Armen der Stadt und reformiert den Kalender. Rom ist zu diesem Zeitpunkt eine Großstadt ohne Stadtplanung: enge Gassen, Holzobergeschosse, keine Feuerwehr, keine Bauaufsicht. Die Bauprogramme der folgenden Jahrhunderte sind auch Antworten auf dieses Chaos.",
    "herrschaft": "Diktatur Caesars",
    "vertiefung": "caesar-gallien-rubikon"
   },
   {
    "jahr": -7,
    "titel": "Augustus ordnet die Stadt",
    "text": "Augustus teilt Rom in vierzehn Regionen mit Unterbezirken, richtet eine Feuerwehr aus siebentausend Mann ein, setzt einen Verwalter für die Wasserleitungen ein und lässt Getreideversorgung und Tiberufer beaufsichtigen. Er selbst rühmte sich, eine Stadt aus Ziegeln in eine aus Marmor verwandelt zu haben. Die eigentliche Leistung war unsichtbar: eine Stadtverwaltung für eine Million Menschen.",
    "herrschaft": "Prinzipat",
    "vertiefung": "kaiser-augustus"
   },
   {
    "jahr": 64,
    "titel": "Der große Brand",
    "text": "Ein Feuer zerstört große Teile der Stadt; von vierzehn Regionen bleiben drei unversehrt. Nero erließ danach eine Bauordnung mit Höhenbegrenzung, Steinvorschriften, Abstandsflächen und Wasservorräten in den Häusern – die erste bekannte Brandschutzverordnung. Die Erzählung, er habe selbst gelegt und dabei gesungen, stammt von Autoren, die Jahrzehnte später und aus senatorischer Sicht schrieben.",
    "herrschaft": "Prinzipat",
    "vertiefung": "kaiser-nero"
   },
   {
    "jahr": 80,
    "titel": "Das Kolosseum",
    "text": "Auf dem trockengelegten See von Neros Palastanlage entsteht ein Amphitheater für geschätzt fünfzigtausend Zuschauer, mit numerierten Eingängen, Sitzplätzen nach Stand und einem unterirdischen System aus Aufzügen. Der Bau war ein politisches Zeichen: Der neue Kaiser gab dem Volk zurück, was der letzte für sich genommen hatte. Finanziert wurde er aus der Beute des Jüdischen Krieges.",
    "herrschaft": "Prinzipat"
   },
   {
    "jahr": 110,
    "titel": "Wohnen in der Insula",
    "text": "Die Mehrheit der Römer lebt in mehrgeschossigen Mietshäusern ohne Wasseranschluss, ohne Küche und ohne Abort; gekocht und gegessen wird in Garküchen, geholt wird das Wasser am Brunnen. Ein Baugesetz begrenzte die Höhe auf etwa zwanzig Meter, weil Einstürze häufig waren. Das monumentale Rom der Bildbände und das Rom der Mehrheit sind zwei verschiedene Städte am selben Ort.",
    "herrschaft": "Prinzipat"
   },
   {
    "jahr": 166,
    "titel": "Die Antoninische Pest in Rom",
    "text": "Heimkehrende Truppen aus dem Partherkrieg bringen eine Seuche mit, die über zwei Jahrzehnte in Wellen durch das Reich zieht; der Arzt Galen, der sie in Rom erlebte, beschreibt Fieber, Ausschlag und Durchfall. Welche Krankheit es war, ist strittig, meist werden Pocken vermutet. In einer Stadt mit eng belegten Mietshäusern, die laufend Zuwanderer brauchte, um ihre Einwohnerzahl zu halten, traf sie besonders hart. Schätzungen zur Sterblichkeit im ganzen Reich reichen von wenigen Prozent bis zu einem Viertel der Bevölkerung.",
    "herrschaft": "Prinzipat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 216,
    "titel": "Die Thermen des Caracalla",
    "text": "Die Anlage bedeckt rund elf Hektar und ist für über tausend Badegäste gleichzeitig ausgelegt, mit beheizten Böden, Bibliothek, Sportplatz und eigener Wasserleitung. Bäder waren keine Luxuseinrichtungen, sondern öffentliche Infrastruktur mit geringem oder keinem Eintritt. Rom hatte zu dieser Zeit über tausend Badeanstalten unterschiedlicher Größe.",
    "herrschaft": "Prinzipat"
   },
   {
    "jahr": 271,
    "titel": "Die Aurelianische Mauer",
    "text": "Nach fast dreihundert Jahren ohne Stadtmauer lässt Aurelian eine neue bauen: neunzehn Kilometer, achtzehn Tore, in wenigen Jahren errichtet und dabei bestehende Gebäude einfach einbezogen. Der Bau ist das deutlichste Zeichen dafür, dass die Grenzen des Reiches nicht mehr sicher sind. Die Mauer blieb bis 1870 die militärische Umgrenzung Roms.",
    "herrschaft": "Kaiserzeit"
   },
   {
    "jahr": 313,
    "titel": "Die Kirche zieht ein",
    "text": "Nach der Duldung des Christentums schenkt Konstantin dem Bischof von Rom den Lateranpalast und lässt große Kirchen bauen – nicht im Zentrum, sondern am Rand, bei den Gräbern der Märtyrer außerhalb der Mauern. Damit entsteht die räumliche Ordnung, die Rom bis heute prägt: das antike Zentrum und ein Ring von Basiliken. Die wichtigste steht über einem Grab im vatikanischen Zirkusgelände.",
    "herrschaft": "Kaiserzeit",
    "vertiefung": "kaiser-konstantin"
   },
   {
    "jahr": 410,
    "titel": "Alarich in Rom",
    "text": "Westgotische Truppen nehmen die Stadt nach achthundert Jahren wieder ein und plündern drei Tage. Materiell war der Schaden begrenzt, die Wirkung im Reich enorm – Augustinus begann daraufhin sein Werk über den Gottesstaat, um zu erklären, warum der Fall Roms nicht der Fall der Welt sei. Der Kaiser residierte längst in Ravenna; Rom war nicht mehr Hauptstadt, sondern Symbol.",
    "herrschaft": "Weströmisches Reich",
    "vertiefung": "ende-westrom"
   },
   {
    "jahr": 455,
    "titel": "Die Vandalen",
    "text": "Ein vandalisches Heer aus Nordafrika plündert Rom zwei Wochen lang, systematischer als Alarich, und nimmt Kupferdächer, Statuen und Geiseln mit. Die Getreidezufuhr aus Afrika, von der die Stadt lebte, war schon zuvor abgeschnitten. Die Einwohnerzahl sinkt in diesem Jahrhundert von mehreren Hunderttausend auf schätzungsweise unter hunderttausend.",
    "herrschaft": "Weströmisches Reich"
   },
   {
    "jahr": 537,
    "titel": "Die Aquädukte werden zerschnitten",
    "text": "Im Gotenkrieg zwischen Ostrom und den Ostgoten wird Rom mehrfach belagert und wechselt fünfmal den Herrn; die Belagerer kappen die Wasserleitungen. Damit endet die antike Stadt endgültig: Ohne Aquädukte sind die Höhenlagen unbewohnbar, und die Bevölkerung zieht in die Tiberniederung, wo Brunnen und Fluss erreichbar sind. Der Krieg richtete mehr Schaden an als alle Plünderungen zusammen.",
    "herrschaft": "Ostgoten und Ostrom",
    "vertiefung": "kaiser-justinian"
   },
   {
    "jahr": 590,
    "titel": "Der Bischof übernimmt die Verwaltung",
    "text": "Gregor der Große findet eine Stadt ohne funktionierende weltliche Obrigkeit vor: Pest, Hochwasser, Flüchtlinge, keine Getreidezufuhr. Er organisiert Versorgung, verhandelt mit den Langobarden und verwaltet die Kirchengüter wie einen Staat. Damit tritt der Papst an die Stelle, die vorher der Kaiser hatte – nicht durch einen Rechtsakt, sondern weil sonst niemand da war.",
    "herrschaft": "Papst und Ostrom"
   },
   {
    "jahr": 800,
    "titel": "Eine Kaiserkrönung in Sankt Peter",
    "text": "Karl der Große wird am Weihnachtstag in der Peterskirche zum Kaiser gekrönt. Für Rom bedeutet es Schutz und einen mächtigen Verbündeten, für das Papsttum den Anspruch, Kaiser zu machen – ein Anspruch, der die nächsten fünfhundert Jahre Streit erzeugt. Die Stadt selbst hat zu diesem Zeitpunkt vielleicht dreißigtausend Einwohner.",
    "herrschaft": "Papst, Frankenreich als Schutzmacht"
   },
   {
    "jahr": 846,
    "titel": "Die Leostadt",
    "text": "Muslimische Angreifer landen an der Tibermündung und plündern die Peterskirche und Sankt Paul, die beide außerhalb der antiken Stadtmauer lagen. Papst Leo IV. lässt daraufhin von 848 bis 852 eine rund drei Kilometer lange Mauer um den Vatikanhügel ziehen – die einzige Erweiterung des römischen Mauerrings seit Aurelian. Aus dem befestigten Bezirk um das Apostelgrab, der Leostadt, wird der Kern des späteren Vatikans. Damit hat Rom zwei Zentren: das alte innerhalb der Mauern und das kirchliche jenseits des Tibers.",
    "herrschaft": "Papst, Frankenreich als Schutzmacht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1084,
    "titel": "Rom im Investiturstreit",
    "text": "Im Kampf zwischen Kaiser und Papst wird Rom belagert und eingenommen; die zur Hilfe gerufenen Normannen plündern die Stadt schwerer als jeder Germaneneinfall und verheeren ganze Viertel. Der Papst muss ins Exil. Rom ist in diesen Jahrhunderten weniger Hauptstadt als Schlachtfeld zwischen Adelsfamilien, Kaiser und Kurie.",
    "herrschaft": "Papst und Stadtadel",
    "vertiefung": "investiturstreit"
   },
   {
    "jahr": 1143,
    "titel": "Ein Senat auf dem Kapitol",
    "text": "Im Herbst 1143 erheben sich römische Bürger gegen den Papst und setzen auf dem Kapitol wieder einen Senat ein – nach dem Vorbild der oberitalienischen Stadtkommunen und beflügelt von der Kirchenkritik Arnolds von Brescia. Die Erneuerung des Senats gilt als Gründungsakt der Kommune, die Gericht, Finanzen und Umland selbst verwalten will. Nach Jahrzehnten des Streits einigen sich Papst und Kommune vertraglich. Seitdem ist das Kapitol der Sitz der Stadtregierung und der Petersbezirk der der Kirche – eine Doppelung, die bis heute gilt.",
    "herrschaft": "Kommune Rom",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1309,
    "titel": "Die Päpste gehen nach Avignon",
    "text": "Für fast siebzig Jahre residiert das Papsttum in Südfrankreich. Rom verliert damit seine einzige Einnahmequelle – Pilger, Kurie und die Verwaltung der Kirche – und schrumpft auf geschätzt zwanzigtausend Einwohner. Auf dem Forum weidet Vieh; der Ortsname Campo Vaccino, Kuhfeld, hält sich bis ins 19. Jahrhundert.",
    "herrschaft": "Stadtadel, Papst in Avignon"
   },
   {
    "jahr": 1347,
    "titel": "Cola di Rienzo",
    "text": "Der Notar Cola di Rienzo ruft in Rom eine Republik nach antikem Vorbild aus, lässt sich Volkstribun nennen und beruft sich auf eine wiedergefundene Inschrift über die Übertragung der Macht an Vespasian. Nach sieben Monaten wird er gestürzt, kehrt 1354 zurück und wird von einer Menge erschlagen. Der Versuch ist der erste einer Reihe von Wiederbelebungen der römischen Antike als politisches Programm.",
    "herrschaft": "Kurzlebige Stadtrepublik"
   },
   {
    "jahr": 1420,
    "titel": "Die Rückkehr und der Wiederaufbau",
    "text": "Mit dem Ende des Kirchenschismas wird Rom wieder Residenz. Die Päpste des 15. Jahrhunderts betreiben Stadtpolitik: Straßen werden geöffnet, Brücken repariert, die erste Wasserleitung seit der Antike wieder in Betrieb genommen, eine Bibliothek gegründet. Die Antike wird dabei als Steinbruch benutzt und gleichzeitig zum ersten Mal geschützt – ein Widerspruch, der die Denkmalpflege begründet.",
    "herrschaft": "Kirchenstaat",
    "vertiefung": "renaissance"
   },
   {
    "jahr": 1506,
    "titel": "Der Neubau von Sankt Peter",
    "text": "Julius II. lässt die konstantinische Basilika abreißen und durch einen Neubau ersetzen, der 120 Jahre dauert und an dem Bramante, Raffael, Michelangelo und Bernini arbeiten. Die Finanzierung über Ablässe löst den Streit aus, aus dem die Reformation wird. Selten hängt ein weltgeschichtlicher Bruch so direkt an einer Baustelle.",
    "herrschaft": "Kirchenstaat"
   },
   {
    "jahr": 1527,
    "titel": "Sacco di Roma",
    "text": "Meuternde Truppen Karls V., unbezahlt und zu einem Teil lutherisch, nehmen Rom und plündern es monatelang; die Bevölkerung sinkt von etwa fünfundfünfzigtausend auf unter dreißigtausend. Für die Künstler und Gelehrten der Stadt ist es das Ende einer Epoche – viele gehen und verbreiten die römische Formensprache in ganz Europa. Der Papst musste im Kastell Sant'Angelo ausharren und kapitulieren.",
    "herrschaft": "Kirchenstaat",
    "vertiefung": "karl5"
   },
   {
    "jahr": 1555,
    "titel": "Das Ghetto",
    "text": "Mit der Bulle Cum nimis absurdum zwingt Paul IV. die jüdische Gemeinde, damals etwa zweitausend Menschen und eine der ältesten Europas, in ein ummauertes Viertel am Tiberufer. Die Tore wurden nachts geschlossen, Grundbesitz und die meisten Berufe waren verboten. Das Viertel lag in der Niederung, die bei jedem Tiberhochwasser überflutet wurde, und war bald völlig überfüllt. Erst mit dem Ende des Kirchenstaats 1870 fiel der Zwang; die Häuser wurden 1888 weitgehend abgerissen, auf einem Teil der Fläche steht heute die Große Synagoge.",
    "herrschaft": "Kirchenstaat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1585,
    "titel": "Sixtus V. legt die Achsen an",
    "text": "In einem fünfjährigen Pontifikat wird Rom neu erschlossen: gerade Straßen zwischen den großen Pilgerkirchen, Obelisken als Blickpunkte an den Kreuzungen, eine neue Wasserleitung für die Höhenlagen. Damit ist die Stadt zum ersten Mal seit der Antike planmäßig geordnet – nicht nach Wirtschaft, sondern nach Prozessionswegen. Diese Achsen bestimmen die Innenstadt bis heute.",
    "herrschaft": "Kirchenstaat"
   },
   {
    "jahr": 1656,
    "titel": "Die letzte große Pest",
    "text": "Eine Pestwelle erreicht Rom aus Neapel; die Verwaltung reagiert mit Absperrung ganzer Viertel, Lazaretten auf dem Tiberufer und Gesundheitspässen, und die Stadt verliert mit etwa zehntausend Toten deutlich weniger als Neapel. Die Maßnahmen gelten als früher Erfolg organisierter Seuchenpolitik. Gleichzeitig entsteht die barocke Stadt der Brunnen und Plätze, die Rom im Bild der Welt bis heute ist.",
    "herrschaft": "Kirchenstaat"
   },
   {
    "jahr": 1762,
    "titel": "Der Trevi-Brunnen",
    "text": "Der berühmteste Brunnen Roms ist das Schaubild einer Wasserleitung: Er markiert den Endpunkt der Acqua Vergine, der antiken Aqua Virgo von 19 v. Chr., die die Päpste seit dem 15. Jahrhundert wieder in Betrieb genommen hatten. Clemens XII. schrieb 1730 einen Wettbewerb aus, Nicola Salvi baute ab 1732, vollendet wurde die Anlage 1762. Solche Schaubrunnen zeigten, wer die Stadt versorgte: Jeder Papst, der eine Leitung erneuerte, setzte an ihr Ende ein Denkmal mit seinem Wappen. Das barocke Rom präsentierte sein Wasser als Bühne.",
    "herrschaft": "Kirchenstaat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1798,
    "titel": "Die Römische Republik",
    "text": "Französische Truppen besetzen Rom, der Papst wird abgesetzt und stirbt in französischer Gefangenschaft; eine Republik nach französischem Muster hält knapp zwanzig Monate. Kunstwerke werden nach Paris abtransportiert, ein Teil kehrt nach 1815 zurück. Die Episode zeigt, wie sehr die Stadt inzwischen von einer einzigen Institution lebte: Mit dem Papst verschwand ihre Verwaltung.",
    "herrschaft": "Französische Besetzung"
   },
   {
    "jahr": 1849,
    "titel": "Der zweite republikanische Versuch",
    "text": "Im Revolutionsjahr flieht der Papst, eine Römische Republik wird ausgerufen und von Mazzini geführt, Garibaldi verteidigt sie militärisch. Französische Truppen stellen nach mehrmonatiger Belagerung den Kirchenstaat wieder her. Die Verteidigung wird zum Gründungsmythos des italienischen Nationalstaats, der einundzwanzig Jahre später hier seine Hauptstadt einrichtet.",
    "herrschaft": "Kirchenstaat, wiederhergestellt"
   },
   {
    "jahr": 1870,
    "titel": "Rom wird Hauptstadt Italiens",
    "text": "Italienische Truppen schießen bei der Porta Pia eine Bresche in die Aurelianische Mauer und nehmen die Stadt; ein Plebiszit bestätigt den Anschluss, der Papst zieht sich in den Vatikan zurück und erklärt sich zum Gefangenen. Rom hat rund zweihundertzwanzigtausend Einwohner und keine Verwaltung für eine Hauptstadt. In den folgenden dreißig Jahren entstehen Ministerien, Kasernen, Tiberdämme und ganze Neubauviertel.",
    "herrschaft": "Königreich Italien",
    "vertiefung": "risorgimento"
   },
   {
    "jahr": 1911,
    "titel": "Der Vittoriano",
    "text": "Zum fünfzigsten Jahrestag der Einigung wird das Nationaldenkmal für Viktor Emanuel II. eingeweiht, ein Marmorbau von 135 Metern Breite am Nordhang des Kapitols; fertig wird er erst 1935. Für den Bau, begonnen 1885, wurden mittelalterliche Häuser und Teile des Klosters von Santa Maria in Aracoeli abgerissen, und der weiße Marmor aus der Gegend von Brescia hebt sich von Travertin und Ziegel der Umgebung ab. Der neue Staat setzte sich damit sichtbar vor das antike und das päpstliche Rom. Seit 1921 liegt hier das Grab des Unbekannten Soldaten.",
    "herrschaft": "Königreich Italien",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1929,
    "titel": "Lateranverträge und Freilegungen",
    "text": "Der Vertrag zwischen Italien und dem Papst schafft den Vatikanstaat und beendet den Konflikt von 1870. Gleichzeitig lässt Mussolini das Zentrum umbauen: Für die Via dei Fori Imperiali und die Achse zum Petersplatz werden dichte Wohnviertel abgerissen und Zehntausende umgesiedelt. Die freigelegten Kaiserforen sind ein archäologischer Gewinn und ein städtebaulicher Eingriff, der bis heute diskutiert wird.",
    "herrschaft": "Faschistisches Italien",
    "vertiefung": "faschismus-italien"
   },
   {
    "jahr": 1943,
    "titel": "Besetzung, Razzia, Befreiung",
    "text": "Nach dem Sturz Mussolinis besetzen deutsche Truppen Rom. Im Oktober werden über tausend Juden aus dem alten Ghetto deportiert, im März 1944 als Vergeltung dreihundertfünfunddreißig Menschen in den Ardeatinischen Höhlen erschossen. Im Juni 1944 wird die Stadt eingenommen, weitgehend ohne Zerstörung – sie war als offene Stadt erklärt worden, was nur teilweise eingehalten wurde.",
    "herrschaft": "Deutsche Besetzung, dann Alliierte"
   },
   {
    "jahr": 1960,
    "titel": "Olympia und die Peripherie",
    "text": "Die Olympischen Spiele bringen Sportbauten, eine Schnellstraße und die erste Metrolinie; gleichzeitig wächst Rom durch Zuwanderung aus dem Süden auf über zwei Millionen Einwohner. Der Zuwachs landet in ungeplanten Siedlungen am Stadtrand, den borgate, teils ohne Wasser und Kanalisation. Die Filme dieser Jahre – von Fellini bis Pasolini – handeln von genau diesem Abstand zwischen Zentrum und Rand.",
    "herrschaft": "Republik Italien"
   },
   {
    "jahr": 2000,
    "titel": "Das Heilige Jahr und der Massentourismus",
    "text": "Zum Jubeljahr kommen geschätzt fünfundzwanzig Millionen Besucher; die Stadt baut Untergrundparkplätze, Fußgängerzonen und Museen um. Seither ist Tourismus der wichtigste Wirtschaftszweig – mit denselben Folgen wie in Venedig: steigende Mieten, verdrängte Bewohner, Innenstadtwohnungen als Ferienwohnungen. Die Zahlen dazu ändern sich jährlich und sind bei der Stadtverwaltung nachzuschauen, nicht als feste Größe zu merken.",
    "herrschaft": "Republik Italien"
   }
  ],
  "strittig": "Bei Rom ist vor allem die Frühzeit strittig. Die Königsliste, die Gründung 753 v. Chr. und die Vertreibung des letzten Königs 509 v. Chr. stammen aus Darstellungen, die vierhundert Jahre später geschrieben wurden; die Archäologie belegt Siedlung und Stadtwerdung, nicht die Personen. Zweiter Streitpunkt sind die Einwohnerzahlen: Die verbreitete Million für die Kaiserzeit ist eine Schätzung aus Getreidemengen, Wasserverbrauch und bebauter Fläche, und seriöse Rechnungen reichen von 600.000 bis über eine Million. Drittens die Spätantike: Ob der Bevölkerungsverlust vor allem auf Plünderungen, auf die abgeschnittene Getreideversorgung oder auf den Gotenkrieg von 535 bis 554 zurückgeht, wird unterschiedlich gewichtet – die Zerstörung der Aquädukte gilt heute als der schwerere Einschnitt als die Plünderungen von 410 und 455. Viertens der faschistische Umbau: Über den Wert der Freilegungen gegenüber dem Abriss ganzer Wohnviertel wird in der italienischen Denkmalpflege bis heute gestritten.",
  "quellen": [
   "Encyclopaedia Britannica: Rome, history; Aurelian Walls; Sack of Rome",
   "Christopher Hibbert: Rom – Biographie einer Stadt",
   "Robert Hughes: Rom – Eine Kulturgeschichte",
   "Filippo Coarelli: Rom – Ein archäologischer Führer",
   "Neil Christie: From Constantine to Charlemagne (zur spätantiken Stadt)",
   "Roma Capitale, Statistikamt: Bevölkerungs- und Tourismusdaten (laufend aktualisiert)"
  ]
 },
 {
  "id": "konstantinopel",
  "titel": "Konstantinopel / Istanbul",
  "kurz": "Die Stadt, die 1.100 Jahre nicht erobert wurde, dann zweimal — und die als Hauptstadt zweier Weltreiche und heute keines mehr steht.",
  "einleitung": "Es gibt in der Welt vielleicht keinen besseren Stadtplatz: eine Halbinsel zwischen zwei Meeren, mit einem tiefen Naturhafen, an der einzigen Stelle, an der Europa und Asien einander berühren, und von drei Seiten durch Wasser geschützt. Wer diesen Ort hält, kontrolliert den Weg vom Mittelmeer ins Schwarze Meer und den Landweg zwischen den Kontinenten. Genau deshalb ist die Geschichte dieser Stadt eine Geschichte von Mauern, Belagerungen und Umbenennungen: Byzantion, Konstantinopel, Istanbul – dreimal dieselbe Halbinsel, dreimal ein anderes Zentrum der Welt.",
  "stationen": [
   {
    "jahr": -660,
    "titel": "Byzantion",
    "text": "Siedler aus Megara gründen an der Spitze der Halbinsel eine Kolonie. Nach der Überlieferung hatte ein Orakel geraten, gegenüber der Stadt der Blinden zu bauen – gemeint sei Chalkedon auf der asiatischen Seite, dessen Gründer den besseren Platz übersehen hätten. Die Anekdote beschreibt genau das, was folgt: Der Naturhafen des Goldenen Horns entscheidet über tausend Jahre Geschichte.",
    "herrschaft": "Griechische Kolonie"
   },
   {
    "jahr": -340,
    "titel": "Philipp II. vor Byzantion",
    "text": "Philipp II. von Makedonien belagert die Stadt 340/339 v. Chr., weil sie den Getreideweg vom Schwarzen Meer nach Athen kontrolliert; mit Hilfe athenischer und anderer Flotten hält Byzantion stand. Eine spätere Legende erzählt, eine plötzlich hell scheinende Mondsichel habe einen nächtlichen Angriff verraten, und leitet daraus ein Stadtsymbol ab – belegt ist das nicht. Die Belagerung zeigt früh die Grundregel des Ortes: Wer die Meerenge sperren kann, wird zum Ziel jeder aufsteigenden Großmacht.",
    "herrschaft": "Griechische Kolonie",
    "seit": "2026-10-01"
   },
   {
    "jahr": 196,
    "titel": "Severus zerstört und baut wieder",
    "text": "Byzantion hatte im römischen Bürgerkrieg auf den Verlierer gesetzt und wird nach dreijähriger Belagerung von Septimius Severus geschleift. Derselbe Kaiser lässt es kurz darauf wieder aufbauen, mit Hippodrom und Thermen – die Lage war zu wichtig, um sie leer zu lassen. Diese Anlagen stehen bereit, als Konstantin gut hundert Jahre später eine Hauptstadt sucht.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 330,
    "titel": "Konstantins Neugründung",
    "text": "Konstantin weiht die Stadt als neue Hauptstadt ein, mit Senat, Getreideversorgung aus Ägypten, Foren und aus dem ganzen Reich zusammengetragenen Kunstwerken. Die Gründe sind nüchtern: nähere Lage zu den bedrohten Donau- und Ostgrenzen, gute Verteidigung, ein Ort ohne alteingesessene senatorische Familien. Rom bleibt Symbol, hier fallen die Entscheidungen.",
    "herrschaft": "Römisches Reich",
    "vertiefung": "kaiser-konstantin"
   },
   {
    "jahr": 373,
    "titel": "Die Wasserleitung des Valens",
    "text": "Die Halbinsel hat kaum eigene Quellen; die wachsende Hauptstadt muss ihr Wasser aus den Hügeln Thrakiens holen. Unter Kaiser Valens wird zwischen 368 und 373 der Bogen fertiggestellt, der das Tal zwischen zwei Stadthügeln überspannt und heute noch auf über neunhundert Metern steht. Er ist nur das sichtbare Ende eines Kanalsystems, das in seiner späteren Ausdehnung über 250 Kilometer erreichte, das längste der Antike. Gespeichert wurde in offenen Becken und Zisternen – entscheidend für eine Stadt, die mit Belagerungen rechnen musste.",
    "herrschaft": "Römisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 413,
    "titel": "Die Theodosianische Mauer",
    "text": "Unter Theodosius II. entsteht ein Verteidigungssystem, das in dieser Form einmalig ist: ein Graben, eine Vormauer, eine Hauptmauer von zwölf Metern Höhe mit sechsundneunzig Türmen, über fünf Kilometer quer über die Halbinsel. Die Mauer hält gegen Awaren, Perser, Araber, Rus, Bulgaren und Osmanen – rund tausend Jahre. Sie ist der wichtigste einzelne Grund dafür, dass das oströmische Reich das weströmische um ein Jahrtausend überlebte.",
    "herrschaft": "Oströmisches Reich",
    "vertiefung": "kaiser-theodosius"
   },
   {
    "jahr": 532,
    "titel": "Der Nika-Aufstand",
    "text": "Aus einem Streit der Wagenrennparteien im Hippodrom wird ein Aufstand, der große Teile der Stadt in Brand setzt und Justinian fast den Thron kostet; er wollte fliehen, blieb nach der Überlieferung auf das Zureden der Kaiserin Theodora. Der Aufstand wird im Hippodrom niedergeschlagen, nach Prokop mit dreißigtausend Toten – eine Zahl aus einer einzigen, parteiischen Quelle. Der Brand schafft den Platz für den folgenden Neubau.",
    "herrschaft": "Oströmisches Reich",
    "vertiefung": "kaiser-justinian"
   },
   {
    "jahr": 532,
    "titel": "Die Basilikazisterne",
    "text": "Unter Justinian entsteht unter einer Säulenhalle eine Zisterne von rund 9.800 Quadratmetern; 336 Säulen, viele aus älteren Bauten wiederverwendet, tragen die Decke, gefasst werden rund 80.000 Kubikmeter Wasser. Sie war eine von vielen Zisternen, mit denen die Stadt Dürre und Belagerung überstand. Nach 1453 geriet sie in Vergessenheit, obwohl Anwohner durch Schächte in ihren Kellern weiter Wasser schöpften; der französische Gelehrte Petrus Gyllius beschrieb um 1550, wie er zwischen den Säulen hindurchgerudert wurde.",
    "herrschaft": "Oströmisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 537,
    "titel": "Die Hagia Sophia",
    "text": "In knapp sechs Jahren entsteht eine Kirche mit einer Kuppel von zweiunddreißig Metern Durchmesser, die auf Pendentifs über einem quadratischen Raum sitzt – eine statische Lösung, die es vorher nicht gab. Die erste Kuppel stürzte 558 nach Erdbeben ein und wurde steiler wieder aufgebaut. Fast tausend Jahre bleibt es das größte umschlossene Raumvolumen der Welt.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 542,
    "titel": "Die Pest erreicht die Hauptstadt",
    "text": "Die justinianische Pest kommt mit Getreideschiffen aus Ägypten und tötet nach den Berichten über Monate täglich Tausende; Prokop beschreibt, dass die Bestattung zusammenbrach. Die Bevölkerung der Stadt sinkt drastisch, die Steuereinnahmen und die Rekrutierung ebenso. Justinians Rückeroberungspläne im Westen scheitern nicht an Feldherren, sondern an dieser Epidemie.",
    "herrschaft": "Oströmisches Reich",
    "vertiefung": "justinian-pest"
   },
   {
    "jahr": 626,
    "titel": "Awaren und Perser vor den Mauern",
    "text": "Während der Kaiser im Osten kämpft, belagern Awaren von Land und Perser von der asiatischen Seite die Stadt gleichzeitig – der gefährlichste Angriff vor 1204. Die Verteidigung hält, weil die byzantinische Flotte verhindert, dass sich die beiden Heere vereinigen. Der Sieg wird der Gottesmutter zugeschrieben; der Hymnus, der daran erinnert, wird bis heute gesungen.",
    "herrschaft": "Oströmisches Reich",
    "vertiefung": "kaiser-herakleios"
   },
   {
    "jahr": 678,
    "titel": "Das griechische Feuer",
    "text": "Gegen eine arabische Flotte wird erstmals eine brennbare Flüssigkeit eingesetzt, die aus Rohren auf Schiffe geschleudert wird und auf Wasser weiterbrennt. Die Zusammensetzung war Staatsgeheimnis und ist bis heute unbekannt; vermutet werden Erdöl, Harze und Kalk. Es ist die einzige antike Waffentechnik, deren Rezept vollständig verloren ging, weil sie zu gut gehütet wurde.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 717,
    "titel": "Die große arabische Belagerung",
    "text": "Ein umayyadisches Heer mit Flottenunterstützung belagert die Stadt ein Jahr lang und scheitert an Mauern, Winter, Seuchen und dem griechischen Feuer. Die Belagerung gilt als eine der Entscheidungen der europäischen Geschichte: Wäre die Stadt gefallen, hätte dem Kalifat der Landweg auf den Balkan offengestanden. Danach bleibt die Grenze für dreihundert Jahre in Anatolien.",
    "herrschaft": "Oströmisches Reich",
    "vertiefung": "islamische-expansion"
   },
   {
    "jahr": 860,
    "titel": "Die Rus vor der Stadt",
    "text": "Eine Flotte aus dem Norden erscheint überraschend vor Konstantinopel, plündert die Vorstädte und zieht wieder ab. Aus dem Schrecken wird über zwei Jahrhunderte eine Beziehung: Handelsverträge, eine Leibgarde aus Skandinaviern und Rus, und schließlich die Übernahme des orthodoxen Christentums in Kiew. Die kulturelle Prägung Russlands beginnt an diesen Mauern.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 1054,
    "titel": "Das Schisma",
    "text": "Ein päpstlicher Gesandter legt in der Hagia Sophia die Bannbulle gegen den Patriarchen auf den Altar, der Bann wird erwidert. Der Bruch war das Ergebnis jahrhundertelanger Entfremdung in Sprache, Liturgie und Vorrangfragen; die Bullen von 1054 wurden erst 1965 gegenseitig zurückgenommen. Für die Stadt bedeutet die Spaltung, dass Hilfe aus dem Westen künftig einen Preis hat.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 1082,
    "titel": "Die Venezianer bekommen den Handel",
    "text": "Gegen Flottenhilfe erhält Venedig Zollfreiheit und eigene Quartiere am Goldenen Horn. Die Regelung wird für die italienischen Seestädte immer günstiger; ein wachsender Teil des Handels der Hauptstadt liegt in fremder Hand, mit Steuerausfällen und wiederholten Ausschreitungen gegen die Kaufleute. Die Abhängigkeit von Venedig ist eine der Vorbedingungen für 1204.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 1204,
    "titel": "Der Vierte Kreuzzug nimmt die Stadt",
    "text": "Ein Kreuzzugsheer, das nach Ägypten ziehen sollte, greift auf venetianisches Drängen und wegen eines Thronstreits Konstantinopel an, nimmt es und plündert drei Tage. Reliquien, Bronzen und Bibliotheken werden abtransportiert – die vier Pferde von San Marco stammen von hier. Zum ersten Mal seit der Gründung fällt die Stadt, und zwar an Christen.",
    "herrschaft": "Lateinisches Kaiserreich",
    "vertiefung": "kreuzzuege"
   },
   {
    "jahr": 1261,
    "titel": "Die Rückeroberung",
    "text": "Byzantinische Truppen nehmen die Stadt beinahe ohne Kampf zurück, weil die lateinische Garnison ausgerückt war. Was zurückkehrt, ist ein Rumpfstaat: Die Bevölkerung ist auf einen Bruchteil geschrumpft, ganze Viertel liegen brach, die Staatskasse ist leer, die Flotte verpfändet. Konstantinopel bleibt formal Hauptstadt eines Reiches, das nur noch aus Fragmenten besteht.",
    "herrschaft": "Oströmisches Reich, wiederhergestellt"
   },
   {
    "jahr": 1347,
    "titel": "Der Schwarze Tod trifft ein",
    "text": "Über die genuesische Handelsstation Kaffa auf der Krim erreicht die Pest Konstantinopel und von dort das Mittelmeer. Die Stadt, ohnehin geschwächt, verliert nach den Berichten einen großen Teil ihrer Einwohner; der Sohn des Kaisers stirbt. Konstantinopel ist an dieser Stelle nicht Ziel, sondern Verteiler – der Umschlagplatz, über den die Seuche nach Europa gelangt.",
    "herrschaft": "Oströmisches Reich",
    "vertiefung": "schwarzer-tod"
   },
   {
    "jahr": 1394,
    "titel": "Die lange Blockade",
    "text": "Die Osmanen halten die Stadt jahrelang eingeschlossen, ohne sie zu nehmen; der Kaiser reist selbst durch Europa und bittet um Hilfe. Vorübergehend gerettet wird Konstantinopel durch Timur, der 1402 das osmanische Heer in Anatolien schlägt. Die Stadt gewinnt fünfzig Jahre und schrumpft in ihnen weiter – Schätzungen für die Zeit vor der Eroberung liegen bei fünfzigtausend Einwohnern.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 1453,
    "titel": "Die Eroberung",
    "text": "Mehmed II. belagert die Stadt siebenundfünfzig Tage, mit Artillerie, die Mauern erstmals brechen kann, und einer Flotte, die er über Land um die Kette des Goldenen Horns bringt. Am 29. Mai fällt die Stadt, der letzte Kaiser stirbt im Kampf. Die Hagia Sophia wird Moschee, und die neue Hauptstadt des Osmanischen Reiches entsteht am selben Ort.",
    "herrschaft": "Osmanisches Reich",
    "vertiefung": "fall-konstantinopel"
   },
   {
    "jahr": 1459,
    "titel": "Mehmed baut eine Hauptstadt",
    "text": "Die halbleere Stadt wird planmäßig wiederbesiedelt: Kaufleute und Handwerker werden aus dem ganzen Reich hierher versetzt, teils gegen ihren Willen, teils mit Steuerfreiheit gelockt. Es entstehen der Große Basar, der Topkapı-Palast, Stiftungskomplexe mit Moschee, Schule, Küche und Bad. Innerhalb von fünfzig Jahren hat Istanbul mehr Einwohner als je unter den letzten Kaisern.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1478,
    "titel": "Eine Stadt mit vielen Gemeinden",
    "text": "Eine Zählung zeigt eine Bevölkerung aus Muslimen, orthodoxen Christen, Armeniern und Juden – letztere verstärkt nach 1492 durch Vertriebene aus Spanien, die der Sultan ausdrücklich aufnahm. Die Gemeinden regeln Personenstand, Schule und Recht in eigener Zuständigkeit und zahlen dafür eine Sondersteuer. Das ist keine Gleichberechtigung, aber eine funktionierende Ordnung für eine vielsprachige Metropole.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1509,
    "titel": "Der kleine Jüngste Tag",
    "text": "Am 10. September erschüttert ein Erdbeben unter dem Marmarameer die Stadt; die Zeitgenossen nannten es den kleinen Jüngsten Tag. Moscheen, Häuser und Abschnitte der Landmauer stürzen ein, eine Flutwelle trifft die Ufer, die Nachbeben dauern sechs Wochen. Die Schätzungen der Toten reichen von etwa tausend bis über zehntausend. Bayezid II. lässt danach Arbeitskräfte aus dem ganzen Reich zusammenziehen, um Mauern und Bauten rasch wiederherzustellen. Die Verwerfung unter dem Marmarameer ist bis heute die größte Naturgefahr für Istanbul.",
    "herrschaft": "Osmanisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1550,
    "titel": "Sinan baut die Silhouette",
    "text": "Der Hofarchitekt Sinan errichtet in fünfzig Jahren mehrere Hundert Bauwerke, darunter die Süleymaniye mit einer Kuppel, die sich ausdrücklich an der Hagia Sophia misst. Dazu kommt eine Infrastruktur, die selten erwähnt wird: Wasserleitungen, Aquädukte und Brücken. Die Ansicht Istanbuls vom Wasser, wie sie heute auf jedem Bild erscheint, ist im Wesentlichen das Werk dieser Jahrzehnte.",
    "herrschaft": "Osmanisches Reich",
    "vertiefung": "sueleyman"
   },
   {
    "jahr": 1660,
    "titel": "Feuer als Dauerzustand",
    "text": "Ein Brand vernichtet rund zwei Drittel der Wohnbebauung; die Stadt bestand überwiegend aus Holzhäusern, und Großbrände wiederholen sich bis ins 20. Jahrhundert. Nach jedem Brand wurde schneller und wieder aus Holz gebaut, weil Erdbeben Steinbauten gefährlich machten und Holz billiger war. Die osmanische Feuerwehr, gebildet aus Janitscharen, war eine eigene, einflussreiche Institution.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1730,
    "titel": "Der Aufstand des Patrona Halil",
    "text": "Ein Aufstand von Handwerkern und Janitscharen stürzt Sultan Ahmed III. und beendet eine Phase der Öffnung nach Europa. Die Hauptstadt ist damit nicht nur Sitz der Herrschaft, sondern deren Risiko: Wer die Janitscharen und die Zünfte der Stadt gegen sich hat, verliert den Thron. Erst 1826 wird das Janitscharenkorps aufgelöst – mit Kanonen, in der Stadt.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1839,
    "titel": "Tanzimat",
    "text": "Ein kaiserlicher Erlass verspricht Rechtsgleichheit unabhängig von der Religion, geordnete Steuern und Schutz von Leben und Eigentum. Für Istanbul bedeutet die Reformzeit europäische Bauformen, Botschaftsviertel, Zeitungen, ein Stadtparlament für einen Bezirk und die erste moderne Stadtverwaltung. Sie bedeutet auch eine hohe Staatsschuld gegenüber europäischen Banken, die 1875 im Staatsbankrott endet.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1854,
    "titel": "Das Lazarett von Skutari",
    "text": "Im Krimkrieg kämpfen Briten und Franzosen an der Seite der Osmanen gegen Russland; die Verwundeten werden über das Schwarze Meer nach Istanbul gebracht. In der Selimiye-Kaserne in Üsküdar richtet die britische Armee ein Lazarett ein, in dem anfangs weit mehr Soldaten an Seuchen als an Wunden sterben. Florence Nightingale trifft im November 1854 ein; deutlich sinkt die Sterblichkeit aber erst, als eine Kommission Abwasser und Belüftung verbessern lässt. Aus dieser Erfahrung macht Nightingale ihr Argument für Krankenhaushygiene.",
    "herrschaft": "Osmanisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1870,
    "titel": "Pera brennt",
    "text": "Am 5. Juni zerstört ein Großbrand weite Teile von Pera, dem Viertel der Botschaften, Banken und christlichen Kaufleute nördlich des Goldenen Horns. Nach den Großbränden der 1860er und 1870er Jahre legte die Verwaltung breitere Straßen als Brandschneisen an und erließ neue Bauvorgaben; viele Steinfassaden an der heutigen İstiklal-Straße, etwa die Cité de Péra von 1876, stammen aus den Jahrzehnten danach. Der Brand beschleunigte den Umbau zu einer Stadt aus Stein.",
    "herrschaft": "Osmanisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1875,
    "titel": "Der Tünel",
    "text": "Zwischen Karaköy am Hafen und Beyoğlu auf dem Hügel wird eine unterirdische Standseilbahn eröffnet – nach London die zweitälteste U-Bahn der Welt und noch heute in Betrieb. Sie überwindet sechzig Höhenmeter auf gut fünfhundert Metern. Solche Bauten zeigen die Doppelnatur der Stadt im 19. Jahrhundert: technisch auf europäischem Stand, finanziert mit fremdem Geld.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1889,
    "titel": "Der Orient-Express",
    "text": "Mit dem durchgehenden Zug aus Paris ist Istanbul in gut drei Tagen erreichbar. Die Stadt wird zum Ziel eines westlichen Publikums und zum Schauplatz einer Literatur, die mehr über die Erwartungen der Reisenden aussagt als über den Ort. Gleichzeitig bindet die Bahn das Reich an europäische Kapitalgeber, die die Strecken bauen und betreiben.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1908,
    "titel": "Die jungtürkische Revolution",
    "text": "Eine Offiziersbewegung erzwingt die Wiedereinsetzung der Verfassung von 1876; in Istanbul feiern Menschen unterschiedlicher Gemeinden gemeinsam auf den Straßen. Die Hoffnung auf ein gleichberechtigtes Vielvölkerreich hält nicht: Es folgen Gegenputsch, Balkankriege und im Ersten Weltkrieg der Völkermord an den Armeniern. Die Hauptstadt bleibt bis 1918 Sitz einer Regierung, die das Reich verliert.",
    "herrschaft": "Osmanisches Reich",
    "vertiefung": "voelkermord-armenier"
   },
   {
    "jahr": 1918,
    "titel": "Die Besetzung",
    "text": "Nach der Niederlage besetzen alliierte Truppen Istanbul; britische, französische und italienische Zonen teilen die Stadt, im Hafen liegt eine fremde Flotte. Es ist die erste Besetzung seit 1204. Der Widerstand organisiert sich nicht hier, sondern in Anatolien – ein Umstand, der die Zukunft der Stadt entscheidet.",
    "herrschaft": "Alliierte Besetzung",
    "vertiefung": "osmanen-ende"
   },
   {
    "jahr": 1923,
    "titel": "Die Hauptstadt zieht nach Ankara",
    "text": "Die neue Republik macht Ankara zur Hauptstadt: sicherer im Landesinneren, unbelastet von Sultan, Kalifat und Botschaften, und ein Zeichen für den Bruch mit dem Reich. Istanbul verliert Regierung, Hof und Verwaltung und damit Jahrzehnte lang Bevölkerung und Bedeutung. Nach fast sechzehnhundert Jahren ist es keine Hauptstadt mehr.",
    "herrschaft": "Republik Türkei"
   },
   {
    "jahr": 1942,
    "titel": "Die Vermögensteuer",
    "text": "Im November beschließt das Parlament eine einmalige Vermögensabgabe, offiziell für die Landesverteidigung im Weltkrieg. Die Beträge legten Kommissionen fest, und sie trafen Griechen, Armenier und Juden um ein Vielfaches härter als Muslime; wer nicht zahlen konnte, verlor Geschäft und Haus oder wurde zur Zwangsarbeit nach Ostanatolien gebracht. Weil die Minderheiten vor allem in Istanbul lebten und Handel trieben, wirkte die Abgabe als Enteignung der städtischen Kaufmannschaft. Sie gehört zur Vorgeschichte der Ereignisse von 1955.",
    "herrschaft": "Republik Türkei",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1955,
    "titel": "Die Nacht des 6. September",
    "text": "Nach einer Falschmeldung über einen Anschlag greifen organisierte Menschenmengen griechische, armenische und jüdische Geschäfte, Kirchen und Wohnungen an; es gibt Tote, tausende Läden werden zerstört. Ein Militärgericht stellte später eine Beteiligung staatlicher Stellen an der Organisation fest. In den folgenden Jahren verlässt die Mehrheit der griechischen Gemeinde die Stadt – das Ende einer Bevölkerungsgruppe, die seit der Gründung dort lebte.",
    "herrschaft": "Republik Türkei"
   },
   {
    "jahr": 1973,
    "titel": "Die Brücke über den Bosporus",
    "text": "Zum fünfzigsten Jahrestag der Republik wird die erste Hängebrücke zwischen Europa und Asien eröffnet. Sie beschleunigt ein Wachstum, das ohnehin läuft: Istanbul wächst durch Zuwanderung aus Anatolien von etwa 1,5 Millionen 1960 auf über 15 Millionen heute, ein großer Teil zunächst in selbstgebauten Siedlungen. Die aktuellen Zahlen sind beim türkischen Statistikinstitut nachzuschauen und ändern sich laufend.",
    "herrschaft": "Republik Türkei"
   },
   {
    "jahr": 1999,
    "titel": "Das Erdbeben von İzmit",
    "text": "Am 17. August erschüttert ein Beben der Stärke 7,6 die Region östlich von Istanbul; insgesamt sterben über siebzehntausend Menschen, in Istanbul vor allem im Stadtteil Avcılar, wo Wohnblocks auf weichem Grund einstürzen. Die Katastrophe machte sichtbar, wie viel in den Jahrzehnten des schnellen Wachstums ohne Genehmigung oder an den Vorschriften vorbei gebaut worden war. Danach wurden eine Pflichtversicherung gegen Erdbeben eingeführt und Programme zum Ersatz gefährdeter Häuser begonnen. Fachleute erwarten ein weiteres großes Beben.",
    "herrschaft": "Republik Türkei",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2013,
    "titel": "Der Gezi-Park",
    "text": "Der geplante Umbau eines kleinen Parks am Taksim-Platz löst die größten Proteste der türkischen Geschichte aus, die sich schnell auf Fragen von Stadtentwicklung, Pressefreiheit und Regierungsstil ausweiten. Der Streit um wenige Bäume steht für einen größeren: wer über den öffentlichen Raum einer Stadt entscheidet, in der jährlich Milliarden verbaut werden.",
    "herrschaft": "Republik Türkei"
   },
   {
    "jahr": 2013,
    "titel": "Ein Hafen unter der Baustelle",
    "text": "Am 29. Oktober wird der Marmaray-Tunnel eröffnet, der die Bahnnetze beider Kontinente unter dem Bosporus verbindet. Der Bau hatte sich um Jahre verzögert, weil man ab 2004 an der Station Yenikapı auf den Hafen des Theodosius aus dem späten 4. Jahrhundert stieß: Mauern, Kaianlagen und Dutzende Schiffswracks, darunter die ersten bekannten byzantinischen Galeeren, dazu Spuren einer jungsteinzeitlichen Siedlung. Die Grabung ist eine der größten der Stadtgeschichte und zeigt, wie weit das byzantinische Ufer im heutigen Festland liegt.",
    "herrschaft": "Republik Türkei",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Die Hagia Sophia wird wieder Moschee",
    "text": "Ein Gerichtsurteil hebt den Museumsstatus von 1934 auf; das Gebäude wird wieder als Moschee genutzt und bleibt für Besucher zugänglich. Als Kirche gebaut, 1453 Moschee, 1934 Museum, 2020 wieder Moschee – der Bau hat in fünfzehnhundert Jahren viermal die Funktion gewechselt und dabei jedes Mal dieselbe Rolle gespielt: Er zeigt an, wem die Stadt gehört.",
    "herrschaft": "Republik Türkei"
   }
  ],
  "strittig": "Die Überlieferung zu Konstantinopel ist reich, aber einseitig: Fast alle byzantinischen Quellen stammen aus dem Umfeld des Hofes oder der Kirche. Prokops Zahlen – dreißigtausend Tote beim Nika-Aufstand, die Pesttoten von 542 – sind die einzigen Angaben, die wir haben, und derselbe Autor hat in seiner Geheimgeschichte eine gegenteilige Wertung derselben Personen geliefert; man kann ihm die Vorgänge glauben und die Größenordnungen nicht. Strittig sind ferner die Einwohnerzahlen aller Epochen: Für die Zeit Justinians werden zwischen 350.000 und 500.000 genannt, für 1453 zwischen 30.000 und 50.000 – jeweils Schätzungen aus Fläche, Getreidelieferungen und Häuserzahlen. Umstritten ist außerdem die Rolle des Vierten Kreuzzugs: Ob 1204 der eigentliche Untergang des Reiches war oder nur der Beschleuniger eines längeren Verfalls, trennt die Forschung. Für die Ereignisse des 20. Jahrhunderts ist die Aktenlage in der Türkei teils eingeschränkt; der Pogrom von 1955 ist durch Militärgerichtsakten und Untersuchungen gut belegt, andere Vorgänge weniger.",
  "quellen": [
   "Encyclopaedia Britannica: Istanbul; Constantinople; Fall of Constantinople; Hagia Sophia",
   "Philip Mansel: Konstantinopel – Stadt der Sehnsucht",
   "Judith Herrin: Byzanz – Das erstaunliche Leben eines mittelalterlichen Weltreichs",
   "Roger Crowley: 1453 – Der Fall von Konstantinopel",
   "Speros Vryonis: The Mechanism of Catastrophe (zum Pogrom von 1955)",
   "Türkisches Statistikinstitut TÜIK: Bevölkerungsdaten Istanbul (laufend aktualisiert)"
  ]
 },
 {
  "id": "bagdad",
  "titel": "Bagdad",
  "kurz": "In 150 Jahren von der Planstadt zur größten Stadt der Welt — und danach ein Dauerzustand aus Eroberungen, aus dem die Stadt bis heute nicht heraus ist.",
  "einleitung": "Bagdad ist die einzige der großen Weltstädte, die als Verwaltungsprojekt am Reißbrett entstand: 762 auf freiem Feld gegründet, kreisrund angelegt, mit dem Palast des Kalifen in der Mitte. Der Ort war gut gewählt, dort, wo Tigris und Euphrat einander am nächsten kommen und Kanäle beide verbinden – Getreide aus dem Süden, Holz aus dem Norden, Seewege bis Indien und China. Innerhalb von zwei Generationen war Bagdad wahrscheinlich die größte Stadt der Erde und für zweihundert Jahre ihr wichtigster Ort für Mathematik, Medizin und Übersetzung. Danach ist seine Geschichte eine Reihe von Belagerungen: Buyiden, Seldschuken, Mongolen, Timur, Safawiden, Osmanen, Briten, und zuletzt zwei Kriege innerhalb von zwölf Jahren.",
  "strittig": "Die Einwohnerzahlen des 9. Jahrhunderts – oft mit über einer Million angegeben – beruhen auf mittelalterlichen Angaben über Bäder, Moscheen und Brote und sind nicht überprüfbar; die Größenordnung einer Stadt in der Spitzengruppe der Welt gilt als sicher, die Zahl nicht. Ebenso strittig sind die Opferzahlen der mongolischen Eroberung von 1258: Die Quellen nennen zwischen achtzigtausend und zwei Millionen, und die niedrigeren Zahlen gelten als plausibler. Ob die Bibliotheken 1258 vollständig zerstört wurden, ist offen – Teile der Bestände sind nachweislich vorher oder danach anderswo aufgetaucht. Für die Verluste des Nationalmuseums 2003 gibt es eine belegte Zahl gestohlener Objekte und eine laufend fortgeschriebene Zahl zurückgegebener; sie ist beim Museum nachzuschauen und nicht als feste Größe zu merken.",
  "quellen": [
   "Encyclopaedia Britannica: Baghdad; Abbasid dynasty; House of Wisdom",
   "Justin Marozzi: Baghdad – City of Peace, City of Blood",
   "Hugh Kennedy: When Baghdad Ruled the Muslim World",
   "Jim Al-Khalili: Im Haus der Weisheit",
   "Charles Tripp: A History of Iraq",
   "Irakisches Nationalmuseum / UNESCO: Berichte zu Verlusten und Rückgaben seit 2003"
  ],
  "stationen": [
   {
    "jahr": 637,
    "titel": "Ktesiphon, die Stadt davor",
    "text": "Gut dreißig Kilometer südöstlich des späteren Bagdad lag Ktesiphon, über Jahrhunderte Hauptstadt der Parther und Sasaniden; vom Thronsaal mit dem großen Ziegelbogen stehen bis heute Reste. Arabische Truppen nehmen die Stadt um 637 nach der Schlacht von Kadesia ein. Unter den Kalifen verliert sie ihre Funktion, regiert wird zunächst aus Medina, Kufa und Damaskus. Als al-Mansur über ein Jahrhundert später eine Residenz sucht, knüpft er an eine alte Lage an: die Engstelle zwischen Tigris und Euphrat, die schon die Perser genutzt hatten.",
    "herrschaft": "Arabisches Kalifat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 762,
    "titel": "Die Runde Stadt",
    "text": "Der Kalif al-Mansur lässt auf freiem Feld am Tigris eine kreisrunde Residenz anlegen: doppelter Mauerring, vier Tore in die vier Himmelsrichtungen, in der Mitte Palast und Moschee. Astrologen bestimmten den Zeitpunkt des ersten Steins. Die Anlage ist reine Herrschaftsarchitektur – Handel und Wohnen wachsen außerhalb der Mauern, und innerhalb weniger Jahrzehnte ist die Stadt vielfach größer als der Kreis.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 773,
    "titel": "Die Märkte ziehen nach Karch",
    "text": "Um 773/774, gut zehn Jahre nach der Gründung, lässt al-Mansur die Märkte aus der Runden Stadt verlegen – nach der Überlieferung aus Sorge, dass Fremde und Händler Unruhe und Spione in den Herrschaftsbezirk brächten. Sie entstehen im südlich gelegenen Karch, das zum dichtesten Handels- und Wohnviertel wird. Damit trennt sich früh, was Bagdad lange prägt: ein abgeschlossener Bezirk der Macht und daneben die eigentliche Stadt der Kaufleute, Handwerker und Kanäle. Karch ist bis heute der Name des Stadtteils am Westufer.",
    "herrschaft": "Abbasidisches Kalifat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 786,
    "titel": "Harun ar-Raschid",
    "text": "Unter Harun ar-Raschid gilt Bagdad als reichste Stadt der bekannten Welt; Gesandtschaften kommen aus China und vom Frankenreich. Die Erzählungen aus Tausendundeiner Nacht spielen in dieser Zeit, sind aber Jahrhunderte später gesammelt und beschreiben eine Erinnerung, nicht die Stadt. Belegt sind Papierherstellung, ein Postsystem, Krankenhäuser und ein Kanalnetz, das die Vorstädte versorgte.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 795,
    "titel": "Papier statt Papyrus",
    "text": "Nach chinesischem Vorbild – die Technik war über Samarkand gekommen – entsteht in Bagdad eine Papierherstellung. Papier ist billiger als Papyrus, haltbarer als Wachstafeln und fälschungssicherer als Pergament, weil sich Geschriebenes nicht abschaben lässt; die Verwaltung schreibt es deshalb für Urkunden vor. Ohne diese Umstellung wäre die Übersetzungsbewegung der folgenden Jahrzehnte in diesem Umfang nicht möglich gewesen.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 813,
    "titel": "Der erste Bürgerkrieg um die Stadt",
    "text": "Der Streit zweier Kalifensöhne endet mit einer einjährigen Belagerung Bagdads durch das eigene Heer; Katapulte beschießen die Viertel, ganze Bezirke brennen. Es ist der erste Fall, in dem die Stadt Kriegsschauplatz einer innerdynastischen Auseinandersetzung wird. Die Sieger bauen wieder auf, aber die runde Stadt al-Mansurs verliert damit ihre Bedeutung.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 830,
    "titel": "Das Haus der Weisheit",
    "text": "Unter al-Ma'mun wird die Übersetzung griechischer, persischer und indischer Werke ins Arabische zu einem staatlich finanzierten Vorhaben; Bagdad wird der Ort, an dem Ptolemäus, Euklid und Galen bearbeitet und weitergedacht werden. Al-Chwarizmi schreibt hier über das Rechnen mit indischen Ziffern und über die Algebra, deren Name aus seinem Buchtitel stammt. Ohne diese zweihundert Jahre wäre ein Teil der antiken Wissenschaft verloren – Europa kennt Aristoteles zuerst in Übersetzungen aus dem Arabischen.",
    "herrschaft": "Abbasidisches Kalifat",
    "vertiefung": "haus-der-weisheit"
   },
   {
    "jahr": 836,
    "titel": "Der Kalif zieht weg",
    "text": "Wegen Spannungen zwischen der Stadtbevölkerung und der türkischen Garde verlegt al-Mu'tasim die Residenz nach Samarra, hundert Kilometer nördlich, und baut dort eine neue Palaststadt. Für fünfundfünfzig Jahre ist Bagdad Großstadt ohne Hof. Der Vorgang zeigt eine dauerhafte Schwäche des Kalifats: Die Herrscher misstrauten dem Militär, auf das sie sich stützten.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 869,
    "titel": "Der Zandsch-Aufstand",
    "text": "Versklavte Landarbeiter, die in den Salzsümpfen Südmesopotamiens Böden urbar machen sollten, erheben sich und halten sich vierzehn Jahre gegen die Kalifentruppen; zeitweise stehen sie siebzig Kilometer vor Bagdad. Es ist einer der größten Sklavenaufstände der Geschichte, und er wird nur mit dem Aufgebot des gesamten Reichsheeres beendet. Danach verzichten die Abbasiden auf große Plantagen mit Zwangsarbeit im Umland der Hauptstadt.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 892,
    "titel": "Die Rückkehr des Hofes",
    "text": "Der Kalif kehrt nach Bagdad zurück, das inzwischen auf beiden Tigrisufern gewachsen ist und durch Schiffbrücken verbunden wird. Es folgt die Zeit der großen Gelehrten der Stadt: der Arzt ar-Razi, der Historiker at-Tabari, der Mathematiker al-Battani. Politisch dagegen schrumpft das Kalifat: Ägypten, Nordafrika und Teile Persiens sind faktisch eigenständig.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 917,
    "titel": "Gesandte aus Byzanz",
    "text": "Eine byzantinische Gesandtschaft wird durch die Paläste des Kalifen al-Muqtadir geführt. Ein Bericht, den Historiker des 11. Jahrhunderts überliefern, beschreibt Tausende Vorhänge, Elefanten, Truppen im Spalier und einen Baum aus Silber mit mechanischen Vögeln. Die Zahlen sind kaum wörtlich zu nehmen, der Zweck ist klar: Die Inszenierung sollte Größe zeigen in einer Zeit, in der das Kalifat Provinzen verlor und in Geldnot war. Bagdad war Bühne eines Reiches, dessen Macht schon kleiner war als seine Hauptstadt.",
    "herrschaft": "Abbasidisches Kalifat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 945,
    "titel": "Die Buyiden übernehmen die Macht",
    "text": "Eine schiitische Dynastie aus Persien nimmt Bagdad ein und lässt den Kalifen im Amt, aber ohne Macht – er wird zur religiösen Instanz, während weltlich ein Emir regiert. Diese Trennung bleibt für die restlichen dreihundert Jahre des Kalifats bestehen. Die Buyiden bauen Krankenhäuser und Bibliotheken; gleichzeitig beginnen die Straßenkämpfe zwischen sunnitischen und schiitischen Vierteln, die die Stadt jahrzehntelang prägen.",
    "herrschaft": "Buyiden"
   },
   {
    "jahr": 1055,
    "titel": "Die Seldschuken",
    "text": "Türkische Seldschuken ziehen in Bagdad ein, beenden die buyidische Herrschaft und lassen sich vom Kalifen als Sultane bestätigen – eine Formel, die Macht und Legitimität ausdrücklich trennt. Der Hof zieht nach Isfahan, Bagdad bleibt geistliches Zentrum. Zwanzig Jahre später gründet der Wesir Nizam al-Mulk hier die Nizamiyya, eine der ersten staatlich finanzierten Hochschulen, an der al-Ghazali lehrt.",
    "herrschaft": "Seldschuken"
   },
   {
    "jahr": 1067,
    "titel": "Die Nizamiyya",
    "text": "Der seldschukische Wesir Nizam al-Mulk gründet eine Hochschule mit festen Stiftungseinkünften, angestellten Lehrern, Stipendien und Wohnheim – ein Modell, das im ganzen islamischen Raum nachgeahmt wird. Al-Ghazali lehrt hier, bricht seine Karriere ab und schreibt danach das Werk, das Theologie und Mystik miteinander versöhnt. Die Madrasa mit dauerhafter Finanzierung ist eine der einflussreichsten Institutionen, die aus Bagdad kommen.",
    "herrschaft": "Seldschuken",
    "vertiefung": "universitaet"
   },
   {
    "jahr": 1157,
    "titel": "Die Kalifen holen sich die Stadt zurück",
    "text": "Nach dem Zerfall der seldschukischen Macht regieren die Kalifen in Bagdad und Umgebung wieder selbst und halten eine Belagerung durch einen Sultan aus. Für gut hundert Jahre ist Bagdad noch einmal Hauptstadt eines kleinen, aber eigenständigen Staates. Diese letzte Phase endet 1258 – ausgerechnet, weil der Kalif sich diplomatisch als eigenständige Macht verhielt und die Unterwerfung verweigerte.",
    "herrschaft": "Abbasidisches Kalifat"
   },
   {
    "jahr": 1233,
    "titel": "Die Mustansiriyya",
    "text": "Kalif al-Mustansir lässt ab 1227 am Tigrisufer eine Hochschule bauen, die 1233 mit einem großen Fest eröffnet wird. Erstmals werden hier alle vier sunnitischen Rechtsschulen unter einem Dach gelehrt, dazu Medizin, Mathematik, Grammatik und Literatur. Die Stiftung ist ein Versuch des späten Kalifats, über Bildung Einheit und Ansehen zu gewinnen. Der Ziegelbau übersteht die Eroberung von 1258 und gehört heute zu den ältesten erhaltenen Gebäuden Bagdads – einer Stadt, in der von der abbasidischen Zeit sonst wenig steht.",
    "herrschaft": "Abbasidisches Kalifat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1258,
    "titel": "Die Mongolen",
    "text": "Hülegü belagert Bagdad zwölf Tage, nimmt es ein und lässt plündern; der letzte Kalif wird getötet, die Kanäle und Deiche des Umlands beschädigt. Die Opferzahlen der Quellen schwanken um mehr als den Faktor zwanzig. Der schwerere und dauerhaftere Verlust war die Bewässerung: Ein Kanalsystem, das seit Jahrtausenden gepflegt worden war, wurde nicht wieder vollständig hergestellt, und mit ihm ging die Grundlage der Landwirtschaft.",
    "herrschaft": "Ilchanat (Mongolen)",
    "vertiefung": "mongolisches-reich"
   },
   {
    "jahr": 1327,
    "titel": "Ein Reisender beschreibt die Reste",
    "text": "Ibn Battuta besucht Bagdad und findet eine Stadt, in der die meisten Viertel verlassen sind, aber Bäder, Brücken und einzelne Märkte funktionieren. Sein Bericht ist eine der wenigen Beschreibungen des Zustands zwischen den Katastrophen. Bagdad ist jetzt Provinzstadt eines mongolischen Nachfolgestaats, nicht mehr Hauptstadt.",
    "herrschaft": "Ilchanat, dann Dschalairiden"
   },
   {
    "jahr": 1401,
    "titel": "Timur",
    "text": "Timur nimmt die Stadt nach einer Belagerung ein und lässt sie schwerer verheeren als die Mongolen 1258; Zeitgenossen berichten von Türmen aus Schädeln. Danach ist Bagdad für Jahrhunderte eine mittelgroße Stadt an der Grenze zwischen zwei Reichen. Die Rolle des Handelsknotens übernehmen andere Städte, vor allem Tabris, Aleppo und später Basra.",
    "herrschaft": "Timuridenreich"
   },
   {
    "jahr": 1534,
    "titel": "Süleyman nimmt Bagdad",
    "text": "Das Osmanische Reich erobert die Stadt von den persischen Safawiden und macht sie zum Sitz eines Wilajets an der umstrittenen Ostgrenze. Süleyman lässt das Grab Abu Hanifas wiederherstellen – ein Zeichen an die sunnitische Bevölkerung. In den folgenden hundert Jahren wechselt Bagdad mehrfach zwischen Osmanen und Safawiden; die Bevölkerung zahlt jedes Mal.",
    "herrschaft": "Osmanisches Reich",
    "vertiefung": "sueleyman"
   },
   {
    "jahr": 1623,
    "titel": "Die Safawiden nehmen Bagdad",
    "text": "Persische Truppen erobern die Stadt und halten sie fünfzehn Jahre; Berichte über Übergriffe gegen die sunnitische Bevölkerung sind Teil der osmanischen Begründung für die Rückeroberung. In diesen Jahrzehnten wird Bagdad zum Grenzfall zwischen zwei Reichen, die sich religiös voneinander abgrenzen. Die Schreine in Nadschaf, Kerbela und Samarra bleiben durch alle Herrschaftswechsel Pilgerziele.",
    "herrschaft": "Safawidenreich"
   },
   {
    "jahr": 1638,
    "titel": "Murad IV. erobert zurück",
    "text": "Nach fünfzehn Jahren persischer Herrschaft nimmt Sultan Murad IV. Bagdad in einer der verlustreichsten Belagerungen des 17. Jahrhunderts. Der anschließende Vertrag von Zuhab legt die Grenze zwischen dem Osmanischen und dem Persischen Reich fest – im Wesentlichen die heutige Grenze zwischen Irak und Iran. Die Stadt bleibt bis 1917 osmanisch.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1704,
    "titel": "Die Mamluken-Paschas",
    "text": "Mit Hasan Pascha beginnt eine Reihe von Statthaltern, die Bagdad über ein Jahrhundert weitgehend selbstständig regieren. Sie stützen sich auf Mamluken, gekaufte und ausgebildete Militärsklaven meist georgischer, auch tscherkessischer Herkunft, die ab 1749 mit Sulaiman Abu Laila selbst die Paschas stellen. Istanbul erhält Abgaben und Treuebekundungen, die Stadt eigene Hofhaltung und Schutz der Handelswege. Für Bagdad ist es eine Zeit relativer Stabilität; sie endet erst, als die Osmanen 1831 die direkte Verwaltung durchsetzen.",
    "herrschaft": "Osmanisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1831,
    "titel": "Pest, Flut und ein Neuanfang der Verwaltung",
    "text": "Eine Pestwelle und ein Tigrishochwasser töten in wenigen Monaten einen großen Teil der Bevölkerung und zerstören ganze Viertel. Die Osmanen nutzen die Gelegenheit, die halbautonome Herrschaft der georgischen Mamluken-Statthalter zu beenden und direkte Verwaltung einzuführen. Bagdad hat zu diesem Zeitpunkt schätzungsweise fünfzigtausend Einwohner – weniger als tausend Jahre zuvor.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1869,
    "titel": "Midhat Pascha reformiert",
    "text": "Der neue Gouverneur baut in drei Jahren Straßen, eine Druckerei, ein Krankenhaus, eine Schule und eine Dampfschifflinie auf dem Tigris und führt ein Grundbuch ein. Die Reform bringt Verwaltung und Infrastruktur, aber auch Landtitel, mit denen Stammesland in Privatbesitz übergeht – eine Ursache späterer Konflikte. Bagdad wird wieder eine Stadt mit regionaler Anziehungskraft.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1914,
    "titel": "Die Bagdadbahn",
    "text": "Seit 1903 baut eine von der Deutschen Bank finanzierte Gesellschaft an einer Bahn von Konya nach Bagdad und weiter zum Golf. Das Teilstück von Bagdad nach Samarra wird 1914 eröffnet, doch Tunnel im Taurus und Lücken im Norden verhindern bis zum Krieg eine durchgehende Verbindung. Britische Regierungen sahen in dem Projekt deutsche Ansprüche auf den Weg nach Indien, die Bahn wurde selbst zu einem Teil der Vorkriegsspannungen. Durchgehend befahrbar war die Strecke von Istanbul nach Bagdad erst 1940.",
    "herrschaft": "Osmanisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1917,
    "titel": "Britische Truppen ziehen ein",
    "text": "Im Ersten Weltkrieg nehmen britisch-indische Truppen Bagdad; der Kommandeur erklärt, man komme als Befreier, nicht als Eroberer. Drei Jahre später führt die Mandatsverwaltung zu einem landesweiten Aufstand, der mit Luftangriffen niedergeschlagen wird. Der Irak entsteht als Staat aus drei osmanischen Provinzen, deren Grenzen in London und Paris gezogen wurden.",
    "herrschaft": "Britische Besetzung"
   },
   {
    "jahr": 1921,
    "titel": "Hauptstadt eines neuen Königreichs",
    "text": "Faisal I. wird König des Irak, Bagdad wird Hauptstadt. Es entstehen Ministerien, eine Universität, ein Radiosender und ein modernes Stadtviertel; die Bevölkerung wächst bis 1947 auf über fünfhunderttausend. Zum ersten Mal seit 1258 ist Bagdad wieder Regierungssitz und nicht Provinzstadt.",
    "herrschaft": "Königreich Irak (britisches Mandat)"
   },
   {
    "jahr": 1932,
    "titel": "Unabhängigkeit",
    "text": "Der Irak wird als erster arabischer Mandatsstaat Mitglied des Völkerbunds. Die Unabhängigkeit bleibt eingeschränkt: Ein Bündnisvertrag sichert Großbritannien Militärbasen und Einfluss auf die Ölförderung. Bagdad wird in den 1930er Jahren zum Zentrum arabischer Presse, Musik und Literatur – eine kurze Phase, in der die Stadt kulturell wieder ausstrahlt.",
    "herrschaft": "Königreich Irak"
   },
   {
    "jahr": 1941,
    "titel": "Der Farhud",
    "text": "Nach dem Zusammenbruch einer nationalistischen Putschregierung kommt es in Bagdad zu einem zweitägigen Pogrom gegen die jüdische Gemeinde mit über hundertfünfzig Toten und massenhaften Plünderungen. Die Gemeinde war eine der ältesten der Welt und stellte zu Beginn des 20. Jahrhunderts etwa ein Viertel der Stadtbevölkerung. Bis 1952 verlassen fast alle irakischen Juden das Land.",
    "herrschaft": "Königreich Irak"
   },
   {
    "jahr": 1954,
    "titel": "Das große Hochwasser",
    "text": "Im Frühjahr steigt der Tigris so hoch, dass Bagdad nur durch das tagelange Erhöhen der Deiche einer Überflutung entgeht; weite Teile des Umlands stehen unter Wasser. Hochwasser hatte die Stadt seit ihrer Gründung immer wieder getroffen. Die Regierung, durch Öleinnahmen gestärkt, vollendet daraufhin das Wadi-Tharthar-Projekt: Ein Wehr bei Samarra leitet Spitzenhochwasser in eine Senke nordwestlich der Stadt, die zum See wird. Die Gefahr hat sich seitdem umgekehrt – heute leidet Bagdad eher unter zu wenig Wasser im Tigris.",
    "herrschaft": "Königreich Irak",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1957,
    "titel": "Pläne der Weltarchitekten",
    "text": "Die aus Öleinnahmen finanzierte Entwicklungsbehörde lädt bekannte Architekten ein: Frank Lloyd Wright entwirft ein Kulturzentrum mit Oper auf einer Tigrisinsel, Walter Gropius eine Universität, Le Corbusier eine Sportanlage. Nach dem Umsturz von 1958 bleiben die meisten Pläne liegen; Wrights Oper wird nie gebaut, die Universität nur verändert, und Le Corbusiers Sporthalle wird erst 1980 fertig. Die Episode zeigt, wie Bagdad sich als moderne Hauptstadt erfinden wollte – mit berühmten Namen aus dem Ausland und dem Geld aus dem eigenen Öl.",
    "herrschaft": "Königreich Irak",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1958,
    "titel": "Das Ende der Monarchie",
    "text": "Offiziere stürzen die Monarchie; der König und die Regierungsspitze werden getötet, der Irak wird Republik. Es beginnt eine Phase von Umsturz und Gegenumsturz, die 1968 mit der Machtübernahme der Baath-Partei endet. Bagdad wächst in diesen Jahrzehnten stark durch Zuwanderung aus dem Süden; die Siedlung, aus der später Sadr-City wird, entsteht 1959 für diese Zuwanderer.",
    "herrschaft": "Republik Irak"
   },
   {
    "jahr": 1972,
    "titel": "Das Öl wird verstaatlicht",
    "text": "Die Verstaatlichung der Iraq Petroleum Company und der Preisanstieg nach 1973 bringen dem Staat innerhalb weniger Jahre ein Vielfaches seiner Einnahmen. In Bagdad entstehen Universitäten, Krankenhäuser, Schnellstraßen und Wohnsiedlungen; die Alphabetisierung steigt stark, auch bei Frauen. Dieselben Einnahmen finanzieren den Ausbau des Sicherheitsapparats und ab 1980 den Krieg – die Blüte und ihr Ende haben dieselbe Quelle.",
    "herrschaft": "Republik Irak",
    "vertiefung": "erdoel"
   },
   {
    "jahr": 1980,
    "titel": "Acht Jahre Krieg",
    "text": "Der Krieg gegen Iran dauert bis 1988, kostet nach Schätzungen hunderttausende Menschenleben auf beiden Seiten und wird ab 1985 auch mit Raketen gegen die Städte geführt. Bagdad wird mehrfach beschossen. Die Ölerlöse der 1970er Jahre, die zunächst in Universitäten, Kliniken und Wohnungsbau flossen, gehen in Rüstung und Schulden.",
    "herrschaft": "Republik Irak"
   },
   {
    "jahr": 1983,
    "titel": "Denkmäler des Krieges",
    "text": "Während des Krieges gegen Iran entstehen die großen Monumente der Diktatur: 1983 das Märtyrerdenkmal, eine gespaltene türkisfarbene Kuppel über einem Museum, 1989 die Siegesbögen aus gekreuzten Schwertern, deren Hände Abgüssen von Saddam Husseins Unterarmen nachgebildet sein sollen. Die Bauten machten die Stadt zur Kulisse einer Kriegserzählung, in der jeder Gefallene Märtyrer und jeder Waffenstillstand Sieg war. Nach 2003 wurde über ihren Abriss gestritten; beide stehen noch und gehören heute zur Silhouette Bagdads.",
    "herrschaft": "Republik Irak",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1991,
    "titel": "Die Bombardierung",
    "text": "Im Golfkrieg nach dem Überfall auf Kuwait werden Kraftwerke, Wasserwerke, Brücken und Telefonnetz getroffen; die Stadt ist wochenlang ohne Strom und sauberes Wasser. Der Wiederaufbau erfolgt unter Sanktionen, die bis 2003 gelten und die Versorgung mit Medikamenten, Ersatzteilen und Chlor stark einschränken. Fachleute streiten über die Zahl der zivilen Todesopfer dieser Jahre; unstrittig ist der Zusammenbruch von Gesundheitswesen und Schulen.",
    "herrschaft": "Republik Irak"
   },
   {
    "jahr": 2003,
    "titel": "Einnahme und Plünderung",
    "text": "Im April 2003 nehmen amerikanische Truppen Bagdad ein. In den Tagen danach werden Ministerien, die Nationalbibliothek und das Nationalmuseum geplündert; tausende Objekte aus fünftausend Jahren mesopotamischer Geschichte verschwinden, ein Teil kehrt später zurück. Die Stadt verliert für Monate Polizei, Verwaltung und Stromversorgung.",
    "herrschaft": "Besatzungsverwaltung, dann Republik Irak"
   },
   {
    "jahr": 2007,
    "titel": "Die Stadt der Mauern",
    "text": "Im Bürgerkrieg zwischen sunnitischen und schiitischen Milizen werden ganze Viertel ethnisch-konfessionell entmischt; die Besatzungstruppen ziehen Betonmauern zwischen den Bezirken und richten Kontrollpunkte ein. Ein Teil dieser Mauern steht bis heute. Aus einer gemischten Millionenstadt wird ein Mosaik getrennter Gebiete – der tiefste soziale Umbau in Bagdads neuerer Geschichte.",
    "herrschaft": "Republik Irak"
   },
   {
    "jahr": 2007,
    "titel": "Die Straße der Buchhändler",
    "text": "Die al-Mutanabbi-Straße nahe dem alten Zentrum ist seit Generationen das Viertel der Buchhändler und Drucker; freitags trafen sich hier Schriftsteller und Leser. Im März 2007 tötet eine Autobombe dort mehr als zwanzig Menschen und zerstört Läden und das traditionsreiche Schahbandar-Café. Die Straße wurde wiederaufgebaut, 2008 neu eröffnet und gilt seitdem als Zeichen dafür, dass das kulturelle Leben der Stadt die Gewalt überdauert. Schriftsteller in vielen Ländern haben in Lesungen und Gedichtbänden an den Anschlag erinnert.",
    "herrschaft": "Republik Irak",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2019,
    "titel": "Der Tahrir-Platz",
    "text": "Monatelange Proteste vor allem junger Menschen richten sich gegen Korruption, konfessionelle Ämterverteilung und fehlende Arbeit; hunderte Demonstrierende werden getötet, die Regierung tritt zurück. Die Bewegung stellt eine Frage, die die Stadtgeschichte seit 1258 begleitet: wer für Wasser, Strom und Ordnung zuständig ist. Bagdad hat heute mehr als sieben Millionen Einwohner; die aktuellen Zahlen sind beim irakischen Statistikamt nachzuschauen.",
    "herrschaft": "Republik Irak"
   },
   {
    "jahr": 2021,
    "titel": "Feuer in der Covid-Station",
    "text": "In der Nacht zum 25. April explodieren im Ibn-al-Chatib-Krankenhaus Sauerstoffflaschen auf einer Station für Covid-19-Kranke; die Angaben zu den Toten liegen bei über achtzig, spätere Zählungen über neunzig. Brandmelder und Löschanlagen fehlten, brennbare Deckenverkleidungen beschleunigten das Feuer. Der Gesundheitsminister wurde suspendiert und trat zurück. Der Brand bündelte, was die Proteste von 2019 angeprangert hatten: ein Gesundheitswesen, das nach Jahrzehnten von Krieg, Sanktionen und Korruption einfache Sicherheit nicht gewährleistet.",
    "herrschaft": "Republik Irak",
    "seit": "2026-10-01"
   }
  ]
 },
 {
  "id": "alexandria",
  "titel": "Alexandria",
  "kurz": "Eine Stadt, die als Forschungsstätte gegründet wurde, tausend Jahre die Hauptstadt Ägyptens war und dann für tausend Jahre fast verschwand.",
  "einleitung": "Alexandria ist der erfolgreichste Städtebau der Antike: an einem Ort ohne Vorgeschichte gegründet, mit rechtwinkligem Raster, zwei Häfen, einem Leuchtturm als Wahrzeichen und einer staatlich bezahlten Forschungseinrichtung im Palastbezirk. Sie war Hauptstadt der Ptolemäer, dann die zweitgrößte Stadt des Römischen Reiches, das Getreidelager Roms und Konstantinopels, ein Zentrum des Christentums und der Ort, an dem der Erdumfang zum ersten Mal berechnet wurde. Nach der arabischen Eroberung verlagerte sich die Herrschaft ins Landesinnere, und Alexandria schrumpfte über ein Jahrtausend zu einem Fischerort mit antiken Trümmern – bis das 19. Jahrhundert es als Hafen wiederentdeckte.",
  "strittig": "Über den berühmtesten Teil der Stadtgeschichte wissen wir am wenigsten. Die Bibliothek ist in ihrer Größe, ihrem Standort und ihrem Ende ungeklärt: Die Angaben zur Zahl der Buchrollen schwanken zwischen vierzigtausend und siebenhunderttausend, und für den Untergang gibt es vier konkurrierende Erzählungen – Caesars Hafenbrand 48 v. Chr., die Zerstörung des Serapeums 391, die arabische Eroberung 642 und ein langsamer Verfall durch Geldmangel. Die Forschung hält den langsamen Verfall für das Wahrscheinlichste, weil die Bibliothek in römischer Zeit nicht mehr als arbeitende Einrichtung erscheint. Auch der Tod Hypatias 415 wird unterschiedlich gedeutet: als Religionskonflikt oder als Machtkampf zwischen Patriarch und Statthalter, in dem sie die Verbündete der falschen Seite war. Vom antiken Stadtkern liegt ein großer Teil unter Wasser oder unter der heutigen Stadt und ist nicht ausgrabbar.",
  "quellen": [
   "Encyclopaedia Britannica: Alexandria; Library of Alexandria; Pharos of Alexandria; Hypatia",
   "Judith McKenzie: The Architecture of Alexandria and Egypt",
   "Roger Bagnall: Alexandria – Library of Dreams (zur Quellenlage der Bibliothek)",
   "Michael Haag: Alexandria – City of Memory (19. und 20. Jahrhundert)",
   "Franck Goddio / Europäisches Institut für Unterwasserarchäologie: Berichte zur versunkenen Stadt",
   "Bibliotheca Alexandrina: Angaben zur heutigen Einrichtung"
  ],
  "stationen": [
   {
    "jahr": -331,
    "titel": "Die Gründung",
    "text": "Alexander lässt an der Westspitze des Nildeltas eine Stadt anlegen, an einer Stelle mit Süßwassersee im Rücken, einer schützenden Insel vor der Küste und ohne Nilschlamm, der den Hafen versanden würde. Der Plan folgt dem Raster des Hippodamos: gerade Hauptachsen, gleichmäßige Blöcke. Alexander sah die Stadt nie fertig; sein Leichnam wurde später hierher gebracht und war jahrhundertelang zu sehen.",
    "herrschaft": "Makedonisch",
    "vertiefung": "alexanderzug"
   },
   {
    "jahr": -300,
    "titel": "Euklid",
    "text": "Um 300 v. Chr. lehrt in Alexandria Euklid, über dessen Leben fast nichts bekannt ist. Seine Elemente ordnen das geometrische Wissen der Griechen in eine Kette aus Definitionen, Axiomen und Beweisen – ein Aufbau, der zwei Jahrtausende lang Lehrbuchstandard bleibt. Dass dieses Werk hier entsteht, ist kein Zufall: Die Ptolemäer bezahlen Gelehrte, sammeln Bücher und machen ihre junge Hauptstadt zu dem Ort, an dem Wissen aus der ganzen griechischen Welt zusammengetragen und geordnet wird.",
    "herrschaft": "Ptolemäer",
    "seit": "2026-10-01"
   },
   {
    "jahr": -297,
    "titel": "Museion und Bibliothek",
    "text": "Die Ptolemäer richten im Palastbezirk eine Forschungseinrichtung ein: freie Kost, Gehalt und Bibliothek für Gelehrte, die keine Lehrpflicht haben. Das ist die erste bekannte staatlich finanzierte Grundlagenforschung. Bücher wurden systematisch beschafft – nach den Berichten wurden Schiffsladungen im Hafen beschlagnahmt, kopiert und die Kopie zurückgegeben.",
    "herrschaft": "Ptolemäer"
   },
   {
    "jahr": -280,
    "titel": "Der Pharos",
    "text": "Auf der Insel Pharos entsteht ein Leuchtturm von geschätzt hundert Metern Höhe, sichtbar über Dutzende Kilometer, mit Feuer und einem Spiegel. Er zählt zu den Sieben Weltwundern und ist das einzige, das einen praktischen Zweck hatte. Sein Name wurde in vielen Sprachen zum Wort für Leuchtturm – im Französischen phare, im Italienischen faro.",
    "herrschaft": "Ptolemäer"
   },
   {
    "jahr": -250,
    "titel": "Die Septuaginta",
    "text": "In Alexandria entsteht die griechische Übersetzung der hebräischen Bibel, weil die große jüdische Gemeinde der Stadt griechisch sprach und las. Die Legende von zweiundsiebzig Übersetzern, die getrennt arbeiteten und wörtlich übereinstimmten, stammt aus einem späteren Schreiben und ist Werbung für die Autorität des Textes. Diese Übersetzung ist die Bibel, die das frühe Christentum benutzt – die neutestamentlichen Zitate folgen ihr, nicht dem hebräischen Wortlaut.",
    "herrschaft": "Ptolemäer"
   },
   {
    "jahr": -240,
    "titel": "Eratosthenes berechnet die Erde",
    "text": "Der Bibliotheksleiter Eratosthenes vergleicht den Sonnenstand am Mittag in Alexandria und in Syene und schließt aus dem Winkelunterschied auf den Erdumfang. Sein Ergebnis liegt je nach Umrechnung des verwendeten Längenmaßes zwischen einem und sechzehn Prozent vom heutigen Wert entfernt. Wichtiger als die Genauigkeit ist die Methode: eine Messung, die mit zwei Stöcken und einer Wegstrecke auskommt.",
    "herrschaft": "Ptolemäer"
   },
   {
    "jahr": -196,
    "titel": "Der Stein von Rosette",
    "text": "Priester beschließen ein Ehrendekret für Ptolemaios V. und lassen es dreifach in Stein schlagen: in Hieroglyphen, in Demotisch und auf Griechisch. Es ist eine Verwaltungsroutine des ptolemäischen Ägypten, in dem griechische Herrscher und ägyptische Priesterschaft aufeinander angewiesen waren. Zweitausend Jahre später wird gerade dieser Stein zum Schlüssel für die Entzifferung der Hieroglyphen.",
    "herrschaft": "Ptolemäer",
    "vertiefung": "hieroglyphen"
   },
   {
    "jahr": -48,
    "titel": "Caesar im Hafen",
    "text": "Im ptolemäischen Thronstreit wird Caesar in Alexandria eingeschlossen und lässt die feindliche Flotte im Hafen verbrennen; das Feuer greift auf Lagerhäuser über. Spätere Autoren machen daraus die Zerstörung der Bibliothek – Caesar selbst erwähnt sie nicht, und Gelehrte arbeiteten danach nachweislich weiter in der Stadt. Aus diesem Aufenthalt stammt auch die Verbindung mit Kleopatra.",
    "herrschaft": "Ptolemäer"
   },
   {
    "jahr": -30,
    "titel": "Ägypten wird römische Provinz",
    "text": "Nach dem Tod von Antonius und Kleopatra fällt Ägypten an Rom, und zwar als Sondergebiet unter kaiserlicher Verwaltung: Senatoren durften es nicht ohne Erlaubnis betreten. Der Grund ist das Getreide – wer Ägypten hielt, konnte Rom aushungern. Alexandria bleibt die zweitgrößte Stadt des Reiches, verliert aber den Hof.",
    "herrschaft": "Römisches Reich",
    "vertiefung": "antonius-kleopatra"
   },
   {
    "jahr": 38,
    "titel": "Gewalt gegen die jüdische Gemeinde",
    "text": "Alexandria hatte eine der größten jüdischen Gemeinden der Antike mit eigener Verwaltung und griechischsprachiger Bibelübersetzung. 38 n. Chr. kommt es zu schweren Ausschreitungen; Philon von Alexandria reist als Gesandter zum Kaiser. Die Konflikte um Bürgerrechte zwischen Griechen, Juden und Ägyptern durchziehen die römische Zeit der Stadt und eskalieren 115 in einem Aufstand.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 116,
    "titel": "Der Diasporaaufstand",
    "text": "Zwischen 115 und 117 erheben sich jüdische Gemeinden in Kyrene, Ägypten und auf Zypern gegen Rom und ihre griechischen Nachbarn; in Alexandria kommt es zu schweren Kämpfen, nach späterer Überlieferung wird die große Synagoge zerstört. Rom schlägt den Aufstand nieder. Die jüdische Gemeinde, über drei Jahrhunderte eine der größten der Stadt – hier entstand die Septuaginta, hier schrieb Philon –, ist danach weitgehend vernichtet. Die Ursachen sind strittig; die Quellen sind spärlich und stammen meist von einer Seite.",
    "herrschaft": "Römisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 150,
    "titel": "Ptolemäus ordnet Himmel und Erde",
    "text": "Claudius Ptolemäus schreibt in Alexandria zwei Werke, die je vierzehnhundert Jahre maßgeblich bleiben: eine mathematische Astronomie mit der Erde im Zentrum und eine Geographie mit Koordinaten für achttausend Orte. Beide sind falsch in ihren Grundannahmen und beide außerordentlich brauchbar – die Planetenpositionen ließen sich damit vorausberechnen. Kolumbus segelte mit einer Erde, die nach ptolemäischen Angaben zu klein war.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 215,
    "titel": "Caracallas Strafaktion",
    "text": "Nach Spottreden über den Kaiser lässt Caracalla nach den Berichten Cassius Dios in Alexandria ein Blutbad anrichten und Versammlungen verbieten. Die Zahlen sind unbelegt, das Muster nicht: Die Stadt hatte den Ruf, aufsässig und spottlustig zu sein, und wurde dafür mehrfach bestraft. Ihre Getreidebedeutung schützte sie vor Schlimmerem.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 250,
    "titel": "Die Katechetenschule",
    "text": "Alexandria wird zu einem Zentrum christlicher Gelehrsamkeit; Klemens und Origenes verbinden griechische Philosophie mit christlicher Theologie und begründen die allegorische Bibelauslegung. Gleichzeitig lehrt hier die neuplatonische Schule. Die Stadt ist für zwei Jahrhunderte der Ort, an dem die Grundbegriffe der christlichen Lehre erarbeitet – und heftig bestritten – werden.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 272,
    "titel": "Der Palastbezirk wird verwüstet",
    "text": "Im Krieg Kaiser Aurelians gegen das Sonderreich der Zenobia von Palmyra, das Ägypten besetzt hatte, wird das Brucheion zerstört, das alte Palastviertel der Ptolemäer, in dem auch das Museion lag. Ein Autor des 4. Jahrhunderts beschreibt den Bezirk danach als verlassen. Für die Frage, wann die große Bibliothek verschwand, gelten diese Kämpfe als einer der wahrscheinlichsten Zeitpunkte – wahrscheinlicher als der oft genannte Brand unter Caesar oder die Legende von ihrer Vernichtung durch die Araber. Endgültig klären lässt es sich nicht.",
    "herrschaft": "Römisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 298,
    "titel": "Belagerung und Säule",
    "text": "Ein Usurpator hatte sich in Ägypten zum Kaiser ausrufen lassen; Diokletian belagert Alexandria monatelang, nimmt die Stadt 298 ein und lässt den Nachfolger des Usurpators hinrichten. Einige Jahre später kehrt er zurück und richtet eine staatliche Getreideversorgung für die Einwohner ein. Zu seinen Ehren wird beim Serapeum eine Granitsäule von heute rund 27 Metern aufgestellt. Spätere Reisende hielten sie für das Grabmal des Pompeius, daher ihr Name Pompeiussäule – eines der wenigen antiken Monumente, die in Alexandria noch aufrecht stehen.",
    "herrschaft": "Römisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 365,
    "titel": "Das Erdbeben und die Flutwelle",
    "text": "Ein Erdbeben im Mittelmeer löst eine Flutwelle aus, die die Küste Alexandrias trifft; nach den Berichten wurden Schiffe auf Dächer geworfen. Der Jahrestag wurde noch Jahrzehnte später begangen. Das Beben ist einer der Gründe, warum ein Teil der antiken Stadt heute unter Wasser liegt – der Boden senkte sich hier über die Jahrhunderte um mehrere Meter.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 391,
    "titel": "Das Ende des Serapeums",
    "text": "Auf Anordnung des Kaisers und unter Führung des Patriarchen Theophilos wird das Serapeum, der größte Tempel der Stadt, zerstört. Es war zugleich ein Ort mit Buchbestand, weshalb die Zerstörung oft mit dem Untergang der Bibliothek gleichgesetzt wird; ob und wie viele Rollen dort noch lagen, ist unbekannt. Der Vorgang markiert den Wechsel: Aus der Stadt der Museion-Gelehrten wird die Stadt eines Patriarchen.",
    "herrschaft": "Römisches Reich",
    "vertiefung": "kaiser-theodosius"
   },
   {
    "jahr": 415,
    "titel": "Der Tod Hypatias",
    "text": "Die Mathematikerin und Philosophin Hypatia, angesehene Lehrerin und Beraterin des kaiserlichen Statthalters, wird von einer christlichen Menge auf der Straße getötet. Die Quellen unterscheiden sich in der Deutung: Der Kirchenhistoriker Sokrates Scholastikos sieht die Ursache im Machtkampf zwischen Patriarch Kyrill und dem Statthalter, spätere Darstellungen machen daraus einen reinen Glaubenskonflikt. Ihre Werke sind nicht erhalten; bekannt sind Titel und die Mitarbeit an Kommentaren zu Ptolemäus und Diophant.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 451,
    "titel": "Chalkedon und die Spaltung",
    "text": "Das Konzil von Chalkedon entscheidet die Frage nach den Naturen Christi gegen die alexandrinische Position; die ägyptische Kirche folgt der Entscheidung nicht. Aus dem Streit entsteht die koptische Kirche, die bis heute besteht. Die Spaltung entfremdet Ägypten von Konstantinopel – zwei Jahrhunderte später ist das ein Grund dafür, dass die arabische Eroberung wenig Widerstand findet.",
    "herrschaft": "Oströmisches Reich"
   },
   {
    "jahr": 619,
    "titel": "Die Perser nehmen Ägypten",
    "text": "Sassanidische Truppen erobern Alexandria und halten Ägypten zehn Jahre; die Getreidelieferungen nach Konstantinopel brechen ab, was die Versorgungskrise dort verschärft. Herakleios gewinnt das Land zurück, doch das Reich ist erschöpft. Die kurze Perserzeit hat die Verteidigungsfähigkeit Ägyptens dauerhaft geschwächt.",
    "herrschaft": "Sassanidenreich",
    "vertiefung": "kaiser-herakleios"
   },
   {
    "jahr": 642,
    "titel": "Die arabische Eroberung",
    "text": "Nach einer Belagerung übergibt Alexandria sich vertraglich an das arabische Heer. Die neuen Herren gründen ihre Verwaltungsstadt weiter südlich, Fustat, aus dem später Kairo wird. Damit verliert Alexandria in einem Jahrzehnt, was es tausend Jahre ausgemacht hatte: Es ist nicht mehr die Hauptstadt Ägyptens.",
    "herrschaft": "Arabisches Kalifat",
    "vertiefung": "islamische-expansion"
   },
   {
    "jahr": 750,
    "titel": "Der langsame Rückgang",
    "text": "Ohne Hof, ohne Verwaltung und mit einem Handel, der zunehmend über das Rote Meer läuft, schrumpft die Stadt. Der Süßwasserkanal, der sie versorgte, versandet immer wieder und wird nur unregelmäßig instand gehalten – das ist der eigentliche Grund für den Bevölkerungsverlust. Alexandria bleibt Bischofssitz und Hafen, aber ein Hafen unter mehreren.",
    "herrschaft": "Kalifat, später Fatimiden und Ayyubiden"
   },
   {
    "jahr": 828,
    "titel": "Venezianer holen den Markus",
    "text": "Zwei venezianische Kaufleute bringen Gebeine, die als die des Evangelisten Markus galten, aus einer Kirche in Alexandria nach Venedig – nach der Legende unter Schweinefleisch versteckt, damit muslimische Zöllner nicht nachsahen. Markus galt als Gründer der alexandrinischen Kirche; Venedig gewinnt einen Schutzpatron, der es gegenüber Rom und Aquileia aufwertet, und baut ihm San Marco. Für Alexandria zeigt die Episode, was die Stadt geworden war: ein Hafen, in dem italienische Kaufleute ein- und ausgingen.",
    "herrschaft": "Abbasidisches Kalifat",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1167,
    "titel": "Saladin hält die Stadt",
    "text": "Im Kampf um das zerfallende Fatimidenreich ziehen ein syrisches Heer und das Königreich Jerusalem nach Ägypten. Der junge Saladin verteidigt Alexandria wochenlang gegen eine Belagerung der Kreuzfahrer und ihrer ägyptischen Verbündeten, bis ein Abkommen beide Heere abziehen lässt. Es ist die erste militärische Bewährung des späteren Sultans. Zwei Jahre danach ist er Wesir in Kairo, und Alexandria gehört bald zu dem Reich, das 1187 Jerusalem zurückerobert – als dessen wichtigster Mittelmeerhafen.",
    "herrschaft": "Fatimiden",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1303,
    "titel": "Der Pharos stürzt",
    "text": "Ein starkes Erdbeben zerstört den Leuchtturm endgültig; er hatte in mehr als fünfzehnhundert Jahren mehrere Beben überstanden und war zuletzt stark beschädigt. 1477 lässt der Mamlukensultan Qaitbay aus seinen Steinen eine Festung auf derselben Landzunge bauen, die heute noch dort steht. Das Weltwunder ist damit im Fundament seines Nachfolgers verbaut.",
    "herrschaft": "Mamluken"
   },
   {
    "jahr": 1365,
    "titel": "Der Überfall aus Zypern",
    "text": "Eine Flotte des Königreichs Zypern nimmt und plündert Alexandria mehrere Tage lang. Der Angriff trifft eine Stadt, die vom Gewürzhandel mit Venedig lebte, und beschädigt das Vertrauen, auf dem dieser Handel beruhte. In der Folge verstärken die Mamluken die Befestigungen und schränken den Aufenthalt europäischer Kaufleute ein.",
    "herrschaft": "Mamluken"
   },
   {
    "jahr": 1477,
    "titel": "Die Zitadelle des Qaitbay",
    "text": "Auf den Fundamenten des 1303 eingestürzten Leuchtturms lässt Sultan Qaitbay eine Festung errichten, für die auch Steine der Ruine verbaut werden. Anlass war die wachsende Bedrohung durch die Osmanen und durch Angriffe von See; der Überfall aus Zypern von 1365 war nicht vergessen. Die Zitadelle sichert die Hafeneinfahrt und ist seitdem das Wahrzeichen der Stadt an der Stelle, wo der Pharos stand. Muhammad Ali ließ sie im 19. Jahrhundert ausbauen, 1882 wurde sie bei der britischen Beschießung schwer beschädigt und später restauriert.",
    "herrschaft": "Mamluken",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1517,
    "titel": "Osmanische Provinzstadt",
    "text": "Mit der osmanischen Eroberung Ägyptens wird Alexandria Hafenstadt eines Reiches, dessen Zentren woanders liegen. Die Umschiffung Afrikas hat den Gewürzhandel über Ägypten ohnehin entwertet. Schätzungen für das 18. Jahrhundert nennen wenige tausend Einwohner – eine Stadt, die einmal mehrere Hunderttausend hatte.",
    "herrschaft": "Osmanisches Reich"
   },
   {
    "jahr": 1798,
    "titel": "Napoleon landet",
    "text": "Die französische Ägyptenexpedition beginnt mit der Einnahme Alexandrias. Mit dem Heer kommen über hundertfünfzig Gelehrte, deren Beschreibung Ägyptens die Ägyptologie begründet; einer von ihnen findet den Stein von Rosette. Drei Jahre später vertreiben Briten und Osmanen die Franzosen, aber die Öffnung des Landes für europäische Interessen ist nicht rückgängig zu machen.",
    "herrschaft": "Französische Besetzung",
    "vertiefung": "napoleonische-kriege"
   },
   {
    "jahr": 1820,
    "titel": "Muhammad Ali baut die Stadt neu",
    "text": "Der ägyptische Vizekönig lässt einen neuen Kanal zum Nil graben, Werften, Arsenal und Zollhaus errichten und siedelt Kaufleute aus dem Mittelmeerraum an. Alexandria wird der Ausgangspunkt seiner Modernisierung Ägyptens und wächst innerhalb von vierzig Jahren von wenigen tausend auf über hunderttausend Einwohner. Damit beginnt die zweite Blüte der Stadt.",
    "herrschaft": "Ägypten unter osmanischer Oberhoheit"
   },
   {
    "jahr": 1856,
    "titel": "Die erste Eisenbahn Afrikas",
    "text": "Die von Robert Stephenson geplante Strecke von Alexandria nach Kairo ist die erste Eisenbahn in Afrika; der erste Abschnitt fährt 1854, die ganze Strecke ab 1856. Sie verbindet den Hafen mit der Hauptstadt und dem Baumwollland des Deltas und trägt zugleich die britische Post und Reisende nach Indien, die vor dem Bau des Suezkanals über Ägypten reisten. Die Bahn macht Alexandria endgültig zum Tor Ägyptens und schafft eine Voraussetzung für den Baumwollboom der folgenden Jahre.",
    "herrschaft": "Ägypten unter osmanischer Oberhoheit",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1860,
    "titel": "Baumwolle und Kosmopolis",
    "text": "Der amerikanische Bürgerkrieg lässt die Baumwollpreise steigen; Ägypten wird Exporteur, und Alexandria ist der Hafen. Griechen, Italiener, Juden, Syrer, Malteser, Briten und Franzosen bilden eine Stadt mit mehreren Sprachen, Zeitungen und Börsen. Diese Gesellschaft prägt die Literatur der Stadt – bei Kavafis, später bei Durrell –, und sie beruht auf Sonderrechten für Ausländer, die ägyptische Gerichte umgingen.",
    "herrschaft": "Chediven-Ägypten"
   },
   {
    "jahr": 1882,
    "titel": "Britische Kanonen und der Beginn der Besetzung",
    "text": "Nach Unruhen beschießt die britische Flotte Alexandria; große Teile der Innenstadt brennen. Die anschließende Landung führt zur britischen Besetzung Ägyptens, die formal bis 1922 und faktisch bis 1956 dauert. Für die Stadt bedeutet es: Der Aufstieg unter Muhammad Ali endet in fremder Kontrolle über den eigenen Hafen.",
    "herrschaft": "Britische Besetzung"
   },
   {
    "jahr": 1904,
    "titel": "Kavafis und die Stadt der Erinnerung",
    "text": "Der griechische Dichter Konstantinos Kavafis lebt als Beamter in Alexandria und schreibt Gedichte, die die hellenistische Vergangenheit der Stadt gegen ihre Gegenwart stellen. Er veröffentlichte kaum, verteilte Blätter an Freunde und wurde erst nach seinem Tod bekannt. Seine Gedichte sind heute die verbreiteteste Form, in der Alexandria als Idee weiterlebt – ein Ort, an dem man die Vergangenheit nicht loswird.",
    "herrschaft": "Ägypten unter britischer Besetzung"
   },
   {
    "jahr": 1942,
    "titel": "Die Front bei El Alamein",
    "text": "Deutsche und italienische Truppen stehen hundert Kilometer westlich; die britische Mittelmeerflotte verlässt vorsorglich den Hafen, Akten werden verbrannt. Nach der Schlacht von El Alamein ist die Gefahr vorbei. Alexandria bleibt bis Kriegsende Flottenbasis – der letzte große militärische Wert, den die Stadt hatte.",
    "herrschaft": "Königreich Ägypten unter britischem Einfluss"
   },
   {
    "jahr": 1952,
    "titel": "Der König verlässt die Stadt",
    "text": "Drei Tage nach dem Putsch der Freien Offiziere dankt König Faruk am 26. Juli in seinem Palast in Alexandria ab und verlässt Ägypten auf der königlichen Jacht. Alexandria war die Sommerhauptstadt der Monarchie: Hof, Regierung und Diplomaten verbrachten hier die heißen Monate, und mit ihnen ein Teil des politischen Lebens. Mit dem Ende des Königtums verliert die Stadt diese Rolle, Macht und Verwaltung konzentrieren sich ganz in Kairo. Die Strandpaläste des Königs werden zu Museen und Gästehäusern des neuen Staates.",
    "herrschaft": "Königreich Ägypten",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1956,
    "titel": "Suez und das Ende der kosmopolitischen Stadt",
    "text": "Nasser verkündet in Alexandria die Verstaatlichung des Suezkanals; es folgen die Suezkrise und danach Enteignungen und Ausweisungen. Innerhalb weniger Jahre verlassen die griechische, italienische, jüdische und britische Gemeinde die Stadt fast vollständig. Alexandria wird eine ägyptische Großstadt – wirtschaftlich stabil, kulturell einsprachig, und ihrer eigenen Erinnerung entfremdet.",
    "herrschaft": "Republik Ägypten",
    "vertiefung": "suezkanal"
   },
   {
    "jahr": 1994,
    "titel": "Die Stadt unter Wasser",
    "text": "Als vor der Zitadelle des Qaitbay ein Wellenbrecher aus Betonblöcken entstehen soll, beginnen Taucher eines französischen Teams um Jean-Yves Empereur 1994 Rettungsgrabungen und finden Tausende Bauteile, darunter Kolossalstatuen und Blöcke, die dem Pharos zugeschrieben werden. Ab 1996 kartiert ein weiteres Team im Osthafen versunkene Teile des Palastbezirks. Erdbeben und das Absinken der Küste haben Teile der antiken Stadt unter Wasser gesetzt – das alte Alexandria liegt zum Teil nicht unter der modernen Stadt, sondern vor ihr.",
    "herrschaft": "Republik Ägypten",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2002,
    "titel": "Die neue Bibliothek",
    "text": "Am Hafen wird die Bibliotheca Alexandrina eröffnet, ein Neubau mit Lesesaal für mehrere Tausend Plätze, Museen und Forschungszentren. Sie ist kein Wiederaufbau – von der antiken Bibliothek ist nichts erhalten, nicht einmal der Standort ist gesichert –, sondern ein bewusster Anschluss an eine Idee. Gleichzeitig laufen Unterwassergrabungen im Hafen, die Teile der ptolemäischen Stadt kartieren.",
    "herrschaft": "Republik Ägypten"
   },
   {
    "jahr": 2011,
    "titel": "Die Stadt in der Revolution",
    "text": "Alexandria ist neben Kairo ein Zentrum der Proteste, die zum Sturz Mubaraks führen; ein Auslöser war der Tod eines jungen Mannes in Polizeigewahrsam im Jahr davor. Die Stadt hat heute über fünf Millionen Einwohner und die üblichen Probleme einer Küstenmetropole – dazu eine besondere: Teile Alexandrias liegen wenig über dem Meeresspiegel und gelten als durch Anstieg und Küstenerosion gefährdet. Die aktuellen Prognosen dazu sind bei den zuständigen Forschungseinrichtungen nachzuschauen.",
    "herrschaft": "Republik Ägypten"
   },
   {
    "jahr": 2015,
    "titel": "Das Wasser kommt zurück",
    "text": "Im Herbst überfluten heftige Regenfälle Straßen und Keller; mehrere Menschen sterben, und der Gouverneur tritt zurück. Die Kanalisation war für solche Mengen nicht ausgelegt. Die langfristige Bedrohung kommt vom Meer: Die Stadt liegt flach am Rand des Deltas, die Küste senkt sich, der Meeresspiegel steigt. Forschende bringen außerdem die wachsende Zahl einstürzender Altbauten mit Salzwasser in Verbindung, das ihre Fundamente angreift. Die Stadt, die einst dem Meer ihren Aufstieg verdankte, muss sich jetzt gegen es schützen.",
    "herrschaft": "Republik Ägypten",
    "seit": "2026-10-01"
   }
  ]
 },
 {
  "id": "wien",
  "titel": "Wien",
  "kurz": "Römisches Grenzlager, zweimal osmanisches Belagerungsziel, Hauptstadt eines Vielvölkerreichs — und nach 1918 eine Millionenstadt ohne Reich.",
  "einleitung": "Wien liegt dort, wo die Donau die Ostalpen verlässt und die Ebene nach Ungarn beginnt: ein Durchgang, den man befestigen muss. Die Römer legten hier ein Legionslager an, das Mittelalter machte daraus eine Handelsstadt, die Habsburger ihre Residenz. Zwei osmanische Belagerungen, 1529 und 1683, entschieden hier über die Grenze zwischen zwei Reichen. Um 1910 war Wien mit über zwei Millionen Menschen die fünftgrößte Stadt Europas und Hauptstadt eines Reiches mit zwölf Amtssprachen; acht Jahre später war sie die überdimensionierte Hauptstadt eines Kleinstaats. Diese Geschichte folgt der Stadt durch beide Zustände.",
  "strittig": "Zwei Punkte werden regelmäßig überzeichnet. Erstens 1683: Die Erzählung von der Rettung Europas am Kahlenberg ist ein späterer Zusatz, ebenso wie Kipferl, Kaffeehaus und Bagel als Folgen der Belagerung – Kaffee war in Wien vorher bekannt, und die Legende vom Bäckerlehrling ist nicht belegt. Zweitens das Wien um 1900: Die Vorstellung einer einzigartigen Blüte von Freud bis Schönberg stammt zu einem großen Teil aus Darstellungen der 1970er Jahre und blendet aus, dass dieselbe Stadt in denselben Jahren einen organisierten politischen Antisemitismus und einen Bürgermeister hervorbrachte, der ihn als Wahlkampfmittel benutzte. Bevölkerungszahlen der Vorkriegszeit sind außerdem nur eingeschränkt vergleichbar, weil die Stadtgrenzen 1850, 1890 und 1938 stark verändert wurden.",
  "quellen": [
   "Encyclopaedia Britannica: Vienna; Siege of Vienna; Congress of Vienna",
   "Peter Csendes / Ferdinand Opll (Hrsg.): Wien – Geschichte einer Stadt",
   "Carl E. Schorske: Wien – Geist und Gesellschaft im Fin de Siècle",
   "Andrew Wheatcroft: Der Feind vor den Toren (zu 1683)",
   "Helmut Konrad / Wolfgang Maderthaner (Hrsg.): Das Rote Wien",
   "Statistik Austria und Stadt Wien: Bevölkerungsdaten (laufend aktualisiert)"
  ],
  "stationen": [
   {
    "jahr": 15,
    "titel": "Vindobona",
    "text": "Am Donauufer entsteht ein römisches Militärlager, später Standort einer Legion, mit Zivilsiedlung, Bad und Wasserleitung. Die Straßen des heutigen ersten Bezirks folgen an mehreren Stellen noch den Lagergrenzen. Es ist eine Grenzstation, nicht eine Stadt: Was hier zählt, ist der Fluss als Verteidigungslinie.",
    "herrschaft": "Römisches Reich"
   },
   {
    "jahr": 180,
    "titel": "Ein Kaiser stirbt an der Grenze",
    "text": "Marcus Aurelius stirbt während der Markomannenkriege im Feldlager an der Donau; nach einer alten Überlieferung in Vindobona, nach einer anderen in Sirmium. Die Kriege selbst sind gut belegt und zeigen, dass die Donaugrenze seit dem 2. Jahrhundert dauerhaft unter Druck stand. Die Selbstbetrachtungen, das bekannteste Buch eines römischen Kaisers, entstanden in diesen Feldzügen.",
    "herrschaft": "Römisches Reich",
    "vertiefung": "kaiser-markaurel"
   },
   {
    "jahr": 400,
    "titel": "Das Lager wird aufgegeben",
    "text": "Mit dem Rückzug der römischen Verwaltung von der Donau verliert Vindobona seine Funktion; die Siedlung besteht in kleinerem Umfang weiter, aber ohne Verwaltung, Münzen und Fernhandel. Für rund vier Jahrhunderte gibt es fast keine schriftlichen Nachrichten aus der Gegend. Was Wien in dieser Zeit war, wissen wir nur aus Bodenfunden.",
    "herrschaft": "Übergangszeit"
   },
   {
    "jahr": 881,
    "titel": "Wenia",
    "text": "Die Salzburger Annalen verzeichnen für 881 einen Kampf gegen die Ungarn ad Weniam – die erste bekannte Nennung des Namens, wobei offen ist, ob der Ort oder der Fluss Wien gemeint ist. Zwischen dem Ende des Römerlagers und dieser Notiz liegen Jahrhunderte, in denen in den Ruinen nur eine kleine Siedlung nachweisbar ist. Die Ungarneinfälle der folgenden Jahrzehnte verhinderten, dass hier eine Stadt wuchs; erst nach dem Sieg über die Ungarn 955 wurde das Gebiet wieder planmäßig besiedelt und an das Reich gebunden.",
    "herrschaft": "Ostfränkisches Reich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1137,
    "titel": "Erste Nennung als Stadt",
    "text": "In einem Tauschvertrag zwischen dem Bischof von Passau und dem Markgrafen von Österreich wird Wien als civitas bezeichnet. Kurz darauf verlegen die Babenberger ihre Residenz hierher; Stephansdom und Schottenkloster werden gegründet. Wien wird von einer Marktsiedlung zum Verwaltungsmittelpunkt eines Landes.",
    "herrschaft": "Babenberger"
   },
   {
    "jahr": 1194,
    "titel": "Lösegeld und Stadtmauer",
    "text": "Auf dem Rückweg vom Kreuzzug wird der englische König Richard I. in der Nähe Wiens gefangen genommen; das Lösegeld, ein Teil davon in Silber, finanziert nach der Überlieferung den Ausbau der Stadtmauer und die Gründung von Wiener Neustadt. Die Silbermenge ist nicht sicher belegt, der Bauschub schon. Wien wird damit zur größten befestigten Stadt im Südosten des Reiches.",
    "herrschaft": "Babenberger"
   },
   {
    "jahr": 1221,
    "titel": "Das Stadtrecht",
    "text": "Wien erhält Stadtrecht mit einem entscheidenden Zusatz: dem Stapelrecht. Fremde Kaufleute mussten ihre Waren hier anbieten, bevor sie weiterzogen. Das macht die Stadt zum Zwischenhändler zwischen Süddeutschland, Italien und Ungarn – ihr Reichtum im Mittelalter kommt aus einer rechtlichen Bestimmung, nicht aus Produktion.",
    "herrschaft": "Babenberger"
   },
   {
    "jahr": 1278,
    "titel": "Die Habsburger kommen",
    "text": "Nach dem Sieg Rudolfs von Habsburg über den böhmischen König Ottokar fallen die österreichischen Länder an die Habsburger. Sie bleiben bis 1918 – 640 Jahre in derselben Familie, eine der längsten Herrschaftsreihen Europas. Wien ist zunächst eine ihrer Residenzen unter mehreren; die Stadt wehrt sich mehrfach gegen die neuen Landesherren.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1349,
    "titel": "Der Schwarze Tod in Wien",
    "text": "Die Pest erreicht Wien im Frühjahr 1349 und wütet bis in den Herbst; Chroniken berichten von Hunderten Toten an einzelnen Tagen und von großen Gruben vor der Stadt. Die Zahlen sind nicht überprüfbar, aber die Verluste waren so groß, dass Häuser leer standen und Zuwanderer vom Land in Handwerk und Handel nachrückten. In vielen Städten des Reiches folgten Pogrome gegen Juden, denen man die Seuche anlastete; in Österreich stellte sich Herzog Albrecht II. damals noch schützend vor die Gemeinden.",
    "herrschaft": "Habsburger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1365,
    "titel": "Die Universität",
    "text": "Herzog Rudolf IV. gründet die Universität Wien, nach Prag die zweite im Reich. Sie beginnt mit einer eingeschränkten Fakultätenausstattung und wird erst nach der päpstlichen Zustimmung für Theologie vollständig. Die Universität ist der Grund, warum Wien im Spätmittelalter eine gelehrte Stadt wird – und warum die Reformation hier früh diskutiert wird.",
    "herrschaft": "Habsburger",
    "vertiefung": "universitaet"
   },
   {
    "jahr": 1421,
    "titel": "Die Wiener Gesera",
    "text": "Herzog Albrecht V. lässt die jüdischen Gemeinden seines Landes vernichten; Anlass war ein angeblicher Hostienfrevel in Enns, im Hintergrund standen die Hussitenkriege, Geldbedarf und kirchliche Agitation. Seit 1420 wurden Juden gefangen gesetzt, beraubt, zwangsgetauft oder vertrieben. Am 12. März 1421 werden die letzten Wiener Juden, nach einem zeitgenössischen Bericht 92 Männer und 120 Frauen, auf der Gänseweide in Erdberg verbrannt. Die Steine der abgerissenen Synagoge am heutigen Judenplatz wurden für die Universität verbaut.",
    "herrschaft": "Habsburger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1485,
    "titel": "Ein ungarischer König in der Hofburg",
    "text": "Matthias Corvinus von Ungarn nimmt Wien nach Belagerung ein und residiert bis zu seinem Tod 1490 hier. Es ist die einzige Zeit, in der die Stadt einer anderen Dynastie gehört. Der Vorgang erinnert daran, dass die habsburgische Macht im 15. Jahrhundert keineswegs gesichert war.",
    "herrschaft": "Königreich Ungarn"
   },
   {
    "jahr": 1529,
    "titel": "Die erste osmanische Belagerung",
    "text": "Süleymans Heer erreicht Wien im September, zu spät im Jahr für eine lange Belagerung, und ohne die schwere Artillerie, die im Schlamm zurückblieb. Nach drei Wochen und mehreren Sturmangriffen wird abgebrochen. Die Folge ist ein jahrzehntelanger Festungsbau: Wien erhält Bastionen nach italienischem Vorbild und ein freies Schussfeld vor der Mauer, das später zur Ringstraße wird.",
    "herrschaft": "Habsburger",
    "vertiefung": "sueleyman"
   },
   {
    "jahr": 1551,
    "titel": "Die Gegenreformation zieht ein",
    "text": "Ferdinand I. holt Jesuiten nach Wien; die Mehrheit der Bürgerschaft war zu diesem Zeitpunkt protestantisch. In den folgenden achtzig Jahren wird die Stadt mit Schulen, Universitätsreform, Zensur und Ausweisungen wieder katholisch gemacht. Der barocke Kirchenbau des 17. und 18. Jahrhunderts ist das sichtbare Ergebnis dieser Politik.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1679,
    "titel": "Die große Pest",
    "text": "Eine Pestwelle tötet in Wien nach Schätzungen mehrere Zehntausend Menschen; die Zahlen der Zeitgenossen sind zu hoch angesetzt. Der Kaiser verlässt die Stadt, Pestgruben werden vor den Mauern angelegt, und danach entsteht die Pestsäule am Graben. Das Lied vom lieben Augustin, der die Grube überlebte, ist erst im 19. Jahrhundert belegt.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1683,
    "titel": "Die zweite Belagerung",
    "text": "Ein osmanisches Heer belagert Wien zwei Monate und untergräbt die Bastionen mit Minen; die Garnison ist auf ein Drittel geschrumpft, als ein Entsatzheer unter dem polnischen König Johann III. Sobieski und Karl von Lothringen vom Kahlenberg angreift und die Belagerer schlägt. Es folgt der Große Türkenkrieg, an dessen Ende Ungarn habsburgisch ist. Die Stadt baut anschließend die Vorstädte neu – der Wiener Barock ist eine Nachkriegsarchitektur.",
    "herrschaft": "Habsburger",
    "vertiefung": "wien-1683"
   },
   {
    "jahr": 1700,
    "titel": "Der barocke Ausbau",
    "text": "Adelsfamilien errichten Stadtpalais und Sommerschlösser vor den Mauern: Schönbrunn, Belvedere, Karlskirche. Wien wird zur Residenzstadt im vollen Sinn – eine Stadt, deren Wirtschaft aus Hof, Verwaltung und Adelshaushalten besteht. Die Bevölkerung wächst auf etwa hunderttausend, ein großer Teil davon Dienstpersonal.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1713,
    "titel": "Eine Kirche aus einem Pestgelübde",
    "text": "Die letzte große Pestwelle in Wien kostet 1713/14 nach Schätzungen rund neuntausend Menschen das Leben, deutlich weniger als 1679, weil Sperren, Pestspitäler und Kontrollen der Einreise inzwischen eingeübt waren. Kaiser Karl VI. gelobt während der Epidemie eine Kirche für den Pestheiligen Karl Borromäus. Sie wird von 1716 bis 1737 nach Plänen Johann Bernhard Fischer von Erlachs gebaut; die beiden Säulen vor der Fassade erzählen das Leben des Heiligen. Am Anfang eines der bekanntesten Barockbauten der Stadt steht also eine Seuche.",
    "herrschaft": "Habsburger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1740,
    "titel": "Maria Theresia reformiert",
    "text": "Nach dem Verlust Schlesiens baut Maria Theresia den Staat um: Beamtenausbildung, Zentralbehörden, Volkszählung, Schulpflicht ab 1774, Reform des Strafrechts. Wien wird dadurch zur Verwaltungshauptstadt eines Reiches, das erstmals nach einheitlichen Regeln regiert wird. Die Kehrseite: strenge Zensur und eine Sittenkommission, über die sich Zeitgenossen lustig machten.",
    "herrschaft": "Habsburger",
    "vertiefung": "maria-theresia"
   },
   {
    "jahr": 1766,
    "titel": "Der Prater wird geöffnet",
    "text": "Am 7. April 1766 gibt Joseph II. als Mitregent seiner Mutter das kaiserliche Jagdgebiet in den Donauauen für alle frei; 1775 folgt der Augarten. Bald stehen dort Wirtshäuser, Kaffeehütten, Schaukeln und Kegelbahnen. Ein Erholungsgebiet für die ganze Bevölkerung statt nur für den Hof passte zum Programm der Aufklärung, in dem sich der Monarch als Diener des Gemeinwohls darstellte. Aus diesen Anfängen wird der Wurstelprater, dessen Wahrzeichen seit 1897 das Riesenrad ist.",
    "herrschaft": "Habsburger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1781,
    "titel": "Toleranzpatent und Klosteraufhebung",
    "text": "Joseph II. gewährt Protestanten und Orthodoxen die private Religionsausübung, ein Jahr später den Juden erweiterte Rechte, und löst Klöster auf, die keine sozialen Aufgaben erfüllen. Aus deren Vermögen entstehen Pfarren, Schulen und das Allgemeine Krankenhaus mit über zweitausend Betten. Wien wird in diesen Jahren zu einem Zentrum der Medizin, das es das ganze 19. Jahrhundert bleibt.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1791,
    "titel": "Die Musikstadt",
    "text": "Mozart stirbt in Wien, Haydn und später Beethoven und Schubert leben und arbeiten hier. Der Grund ist wirtschaftlich: Ein dichtes Adelsmilieu bezahlte Musiker, und mit dem aufkommenden bürgerlichen Konzert- und Verlagswesen ließ sich zum ersten Mal auch ohne festen Dienstherrn davon leben. Beethoven ist der erste große Komponist, der überwiegend von Aufführungen, Widmungen und Notenverkauf lebte.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1809,
    "titel": "Napoleon in Schönbrunn",
    "text": "Französische Truppen besetzen Wien zum zweiten Mal innerhalb von vier Jahren; Napoleon nimmt Quartier in Schönbrunn und lässt beim Abzug Teile der Stadtmauer sprengen. Der anschließende Friede kostet Österreich große Gebiete und führt in den Staatsbankrott von 1811. Aus dieser Schwächephase geht Metternich als bestimmende Figur hervor.",
    "herrschaft": "Habsburger, französische Besetzung",
    "vertiefung": "napoleonische-kriege"
   },
   {
    "jahr": 1814,
    "titel": "Der Wiener Kongress",
    "text": "Ein Dreivierteljahr verhandeln die Mächte in Wien die Ordnung Europas nach Napoleon; parallel finden Bälle, Jagden und Empfänge statt, die die Stadt Millionen kosten und ihren Ruf begründen. Das Ergebnis ist ein Gleichgewicht, das große Kriege zwischen den Großmächten für vier Jahrzehnte verhindert – und ein System der Unterdrückung nationaler und liberaler Bewegungen. Beides gehört zusammen.",
    "herrschaft": "Habsburger",
    "vertiefung": "napoleonische-kriege"
   },
   {
    "jahr": 1848,
    "titel": "Die Revolution",
    "text": "Im März erzwingen Studenten und Arbeiter Metternichs Sturz und eine Verfassung; im Oktober wird die Stadt von kaiserlichen Truppen unter Beschuss zurückerobert. Danach wird Franz Joseph Kaiser, und die Verfassung verschwindet für zwölf Jahre. Als Folge des Aufstands wird eine Kaserne im Zentrum gebaut und die Stadtbefestigung zunächst noch verstärkt – gegen die eigene Bevölkerung.",
    "herrschaft": "Habsburger",
    "vertiefung": "franz-joseph"
   },
   {
    "jahr": 1857,
    "titel": "Die Ringstraße",
    "text": "Franz Joseph verfügt den Abriss der Stadtmauer; auf dem freigewordenen Schussfeld entsteht ein Boulevard mit Oper, Parlament, Rathaus, Universität, Museen und Wohnpalais. Es ist eines der größten Stadtbauprojekte des 19. Jahrhunderts und ein Programm in Stein: Jede Institution des liberalen Bürgertums erhält ein Gebäude in einem eigenen historischen Stil. Otto Wagner und Adolf Loos formulieren um 1900 die Gegenposition dazu.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1873,
    "titel": "Weltausstellung und Börsenkrach",
    "text": "Im Mai eröffnet Wien die Weltausstellung, im Mai bricht die Börse zusammen; der Krach beendet die Gründerzeit und beginnt eine lange Depression. Zwei bleibende Werke stammen aus diesen Jahren: die Donauregulierung, die die Hochwasser beendete, und die erste Hochquellenwasserleitung, die die Stadt seit 1873 mit Trinkwasser aus den Alpen versorgt. Die Wasserleitung senkte die Sterblichkeit stärker als jede medizinische Neuerung derselben Zeit.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1881,
    "titel": "Der Ringtheaterbrand",
    "text": "Am 8. Dezember bricht vor einer Vorstellung von Hoffmanns Erzählungen im Ringtheater Feuer aus; nach amtlichen Angaben sterben 384 Menschen, andere Schätzungen liegen deutlich höher. Die Notbeleuchtung brannte nicht, und die Türen öffneten sich nur nach innen, sodass die Flüchtenden sie gegen sich selbst drückten. Noch unter dem Eindruck der Katastrophe wird die Wiener Freiwillige Rettungsgesellschaft gegründet. Die neue Theaterordnung von 1883 schreibt unter anderem vor, dass Türen in öffentlichen Gebäuden nach außen aufgehen.",
    "herrschaft": "Habsburger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1890,
    "titel": "Die Vorstädte kommen dazu",
    "text": "Mit der Einbeziehung der Vororte wächst Wien auf über eineinhalb Millionen Einwohner, ein großer Teil davon Zuwanderer aus Böhmen, Mähren, Galizien und Ungarn. Gewohnt wird in Zinshäusern mit Bassena am Gang, oft mit Bettgehern, die tagsüber arbeitende Nachbarn im Bett ablösten. Die Wohnungsnot dieser Jahre ist die Vorgeschichte des kommunalen Wohnbaus der 1920er Jahre.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1897,
    "titel": "Ein Bürgermeister und der politische Antisemitismus",
    "text": "Karl Lueger wird nach mehrfacher Weigerung des Kaisers Bürgermeister. Seine Verwaltung kommunalisiert Gas, Strom, Straßenbahn, baut Schulen und Spitäler – und sie führt Antisemitismus erstmals als organisiertes Wahlkampfmittel einer Massenpartei ein. Beides gehört zur Bilanz derselben Amtszeit, und der junge Hitler nannte Lueger später ausdrücklich als Vorbild.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1898,
    "titel": "Die Stadtbahn",
    "text": "Zwischen 1898 und 1901 wird die Wiener Stadtbahn eröffnet, ein Netz aus Hoch- und Tiefstrecken entlang des Gürtels, des Donaukanals und des Wientals. Otto Wagner entwirft Stationen, Brücken und Viadukte bis zum Geländer und macht ein Verkehrsbauwerk zum Gesamtkunstwerk; die Pavillons am Karlsplatz sind das bekannteste Beispiel. Zugleich wird der Wienfluss reguliert und streckenweise überwölbt. Anfangs mit Dampf betrieben, wurde die Stadtbahn in den 1920er Jahren elektrifiziert; auf Teilen ihrer Trassen fährt heute die U-Bahn.",
    "herrschaft": "Habsburger",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1900,
    "titel": "Wien um 1900",
    "text": "In wenigen Jahren und wenigen Quadratkilometern arbeiten Freud, Mahler, Schnitzler, Klimt, Schönberg, Loos, Wittgenstein und der Kreis um Ernst Mach. Was die Gleichzeitigkeit erklärt, ist keine Genialität der Luft, sondern eine Stadt mit dichten Netzwerken, Kaffeehäusern als Arbeitsplätzen, einem gebildeten und teilweise ausgeschlossenen jüdischen Bürgertum und einer Öffentlichkeit, in der Kunstfragen politisch verhandelt wurden. Ein großer Teil dieser Menschen wurde nach 1938 vertrieben oder ermordet.",
    "herrschaft": "Habsburger"
   },
   {
    "jahr": 1918,
    "titel": "Zu groß für den eigenen Staat",
    "text": "Mit dem Ende der Monarchie wird Wien Hauptstadt eines Staates mit sechs Millionen Einwohnern, von denen zwei Millionen in der Hauptstadt leben – ein Verhältnis, für das es kein Vorbild gibt. Hof, Armee, Diplomatie und ein Binnenmarkt von fünfzig Millionen Menschen fallen weg. Wien hat in den 1920er Jahren Hunger, Inflation und Tuberkulose, und gleichzeitig die ambitionierteste Kommunalpolitik Europas.",
    "herrschaft": "Republik Österreich",
    "vertiefung": "osmanen-ende"
   },
   {
    "jahr": 1923,
    "titel": "Das Rote Wien",
    "text": "Die sozialdemokratische Stadtverwaltung finanziert über eine Wohnbausteuer den Bau von über sechzigtausend Gemeindewohnungen, dazu Bäder, Kindergärten, Schulärzte und Fürsorgestellen. Die Wohnungen bleiben im Eigentum der Stadt – der Grund, warum Wien bis heute einen sehr großen kommunalen Wohnungsbestand hat und der Mietmarkt anders funktioniert als in vergleichbaren Städten. Politisch war das Projekt zugleich Kampfmittel gegen die bürgerliche Bundesregierung.",
    "herrschaft": "Republik Österreich"
   },
   {
    "jahr": 1934,
    "titel": "Bürgerkrieg und Ständestaat",
    "text": "Im Februar kommt es zu Kämpfen zwischen Heimwehr, Bundesheer und Schutzbund, unter anderem um Gemeindebauten; Artillerie wird gegen Wohnhäuser eingesetzt. Die Sozialdemokratie wird verboten, die Stadtverwaltung abgesetzt, und Österreich wird ein autoritärer Ständestaat. Im Juli erschießen Nationalsozialisten den Kanzler Dollfuß im Bundeskanzleramt.",
    "herrschaft": "Ständestaat"
   },
   {
    "jahr": 1938,
    "titel": "Der Anschluss",
    "text": "Nach dem Einmarsch der Wehrmacht wird Österreich Teil des Deutschen Reiches; auf dem Heldenplatz jubelt eine große Menge. Unmittelbar beginnen Entlassungen, Enteignungen und öffentliche Erniedrigungen der jüdischen Bevölkerung, im November das Pogrom, in dem fast alle Synagogen der Stadt brennen. Von rund hundertachtzigtausend Wiener Juden wurden über sechzigtausend ermordet; die meisten Überlebenden kehrten nie zurück.",
    "herrschaft": "Deutsches Reich",
    "vertiefung": "holocaust"
   },
   {
    "jahr": 1945,
    "titel": "Schlacht, Trümmer, vier Sektoren",
    "text": "Im April 1945 wird Wien nach zehntägigen Kämpfen von der Roten Armee eingenommen; der Stephansdom brennt nach Plünderungsbränden aus. Die Stadt wird in vier Besatzungssektoren geteilt, der erste Bezirk international verwaltet – ein Modell, das der Film Der dritte Mann bekannt gemacht hat. Der Wiederaufbau von Oper und Dom wird zum nationalen Symbolprojekt.",
    "herrschaft": "Alliierte Besatzung"
   },
   {
    "jahr": 1955,
    "titel": "Der Staatsvertrag",
    "text": "Im Belvedere wird der Staatsvertrag unterzeichnet, die Besatzungsmächte ziehen ab, Österreich erklärt seine Neutralität. Diese Neutralität wird zur Grundlage einer neuen Rolle Wiens: als Ort für Verhandlungen zwischen Ost und West. Gleichzeitig beginnt eine lange Phase, in der die eigene Beteiligung an den NS-Verbrechen öffentlich kaum verhandelt wird.",
    "herrschaft": "Republik Österreich"
   },
   {
    "jahr": 1972,
    "titel": "Die Donauinsel",
    "text": "Um die Stadt auch gegen sehr große Hochwasser zu schützen, wird ab 1972 parallel zur Donau ein Entlastungsgerinne gegraben, die Neue Donau; aus dem Aushub entsteht eine rund 21 Kilometer lange, schmale Insel. Das Projekt war umstritten, Kritiker fürchteten eine betonierte Rinne mitten in der Landschaft. Bis 1988 fertiggestellt, wurde die Insel als Erholungsgebiet gestaltet, mit Badestellen, Radwegen und seit 1984 dem Donauinselfest. Hochwasserschutz und Freizeitraum sind in Wien seitdem dieselbe Anlage.",
    "herrschaft": "Republik Österreich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1978,
    "titel": "Die U-Bahn",
    "text": "Im Februar 1978 fährt die erste reguläre U-Bahn-Linie zwischen Reumannplatz und Karlsplatz; Wien war damit spät dran, Pläne gab es seit dem 19. Jahrhundert. Das Netz wird in Etappen erweitert, teils auf den Trassen der alten Stadtbahn. Im Zuge des Baus wurden Kärntner Straße und Graben zu Fußgängerzonen, die Innenstadt veränderte ihren Charakter. Zusammen mit günstigen Jahreskarten gilt der Nahverkehr heute als ein Grund dafür, dass in Wien ein größerer Teil der Wege ohne Auto zurückgelegt wird als in vielen vergleichbaren Städten.",
    "herrschaft": "Republik Österreich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1979,
    "titel": "Die UNO-City",
    "text": "Wien wird nach New York und Genf dritter Amtssitz der Vereinten Nationen; die Internationale Atomenergie-Organisation, die OPEC und später die OSZE haben hier ihren Sitz. Aus der Hauptstadt ohne Reich wird eine Konferenzstadt. Der Gebäudekomplex am anderen Donauufer ist außerdem der Anfang der Stadtentwicklung nach Norden, die heute mit der Seestadt Aspern weitergeht.",
    "herrschaft": "Republik Österreich"
   },
   {
    "jahr": 2010,
    "titel": "Eine Zuwanderungsstadt",
    "text": "Wien wächst nach Jahrzehnten der Stagnation wieder und liegt heute bei rund zwei Millionen Einwohnern – etwa so viel wie 1910, jetzt aber mit anderer Herkunft: Ein großes Drittel der Bevölkerung ist im Ausland geboren, viele aus dem früheren Jugoslawien, der Türkei, Polen, Deutschland, Syrien und der Ukraine. In internationalen Lebensqualitätsvergleichen steht die Stadt regelmäßig vorn, was vor allem an Wohnungsbestand, Wasser und öffentlichem Verkehr liegt. Die aktuellen Zahlen sind bei Statistik Austria nachzuschauen.",
    "herrschaft": "Republik Österreich"
   }
  ]
 },
 {
  "id": "berlin",
  "titel": "Berlin",
  "kurz": "Die jüngste der großen europäischen Hauptstädte: 1237 ein Dorf am Sumpf, 1900 die Industriemetropole des Kontinents, danach zweimal Trümmerfeld.",
  "einleitung": "Berlin hat keinen Hafen, keine Bodenschätze und kein mildes Klima; es liegt an einer Furt durch das Spreetal, dort wo eine Handelsstraße von Magdeburg nach Posen den Fluss überquert. Bis 1600 war es eine Kleinstadt unter vielen. Was Berlin groß gemacht hat, ist zweimal eine politische Entscheidung: Die Hohenzollern machten es zur Residenz eines Staates, der über seine Verhältnisse Armee und Verwaltung aufbaute, und 1871 wurde es Hauptstadt eines neuen Reiches. Innerhalb von siebzig Jahren wuchs die Stadt von 400.000 auf über vier Millionen Menschen – und verlor danach in zwölf Jahren ihre jüdische Bevölkerung, ihre Substanz und ihre Einheit.",
  "strittig": "Umstritten ist weniger der Verlauf als die Bewertung. Erstens die Bevölkerungszahlen: Ein Sprung wie der von 1861 und 1920 beruht auf Eingemeindungen, nicht auf Zuwanderung allein – Vergleiche über die Jahrhunderte hinweg sind ohne Angabe der Stadtgrenzen wertlos. Zweitens die Zahl der Toten der Bombenangriffe und der Schlacht um Berlin: Die Angaben schwanken erheblich, weil Flüchtlinge, Kriegsgefangene und Zwangsarbeiter in den Meldedaten fehlen. Drittens die goldenen Zwanziger: Die Erzählung von der freien, kreativen Stadt trifft für Teile Berlins zu, während gleichzeitig Massenarbeitslosigkeit, Wohnungsnot und ein Straßenkampf zwischen politischen Verbänden herrschten – beides ist belegt und wird je nach Blickwinkel betont. Viertens die Deutungen der Wende- und Nachwendejahre, über die in der Stadt bis heute unterschiedlich gesprochen wird.",
  "quellen": [
   "Encyclopaedia Britannica: Berlin; Berlin blockade; Berlin Wall",
   "Alexandra Richie: Faust's Metropolis – A History of Berlin",
   "Wolfgang Ribbe (Hrsg.): Geschichte Berlins",
   "Antony Beevor: Berlin 1945 – Das Ende",
   "Gedenkstätte Berliner Mauer / Zentrum für Zeithistorische Forschung: Todesopfer an der Mauer",
   "Amt für Statistik Berlin-Brandenburg: Bevölkerungsdaten (laufend aktualisiert)"
  ],
  "stationen": [
   {
    "jahr": 1237,
    "titel": "Cölln wird erstmals genannt",
    "text": "Eine Urkunde nennt einen Geistlichen aus Cölln, der Siedlung auf der Spreeinsel; sieben Jahre später erscheint auch Berlin auf dem anderen Ufer. Beide sind Handelsorte an einer Flussquerung, in der Mark Brandenburg, die gerade erst deutsch besiedelt wird. Aus dem Datum dieser Urkunde rechnet die Stadt heute ihr Alter.",
    "herrschaft": "Mark Brandenburg (Askanier)"
   },
   {
    "jahr": 1307,
    "titel": "Zwei Städte, ein Rathaus",
    "text": "Berlin und Cölln schließen sich zu einer Verwaltungsgemeinschaft mit gemeinsamem Rat zusammen und treten der Hanse bei. Der wichtigste Handel ist Roggen und Holz nach Hamburg und Fisch nach Süden. Die Doppelstadt hat wenige Tausend Einwohner – kleiner als Stendal oder Brandenburg an der Havel.",
    "herrschaft": "Mark Brandenburg"
   },
   {
    "jahr": 1380,
    "titel": "Der große Stadtbrand",
    "text": "Zwei Jahre nach einem Großbrand in Cölln vernichtet 1380 ein Feuer große Teile Berlins, darunter das Rathaus, fast alle Kirchen und den größten Teil der städtischen Urkunden. Wie die meisten Städte der Zeit war Berlin überwiegend aus Holz und Lehm gebaut. Der Wiederaufbau ging schnell, aber die verlorenen Akten sind ein Grund dafür, dass über die frühe Stadtgeschichte so wenig bekannt ist. Brandordnungen und Löschpflichten der Bürger gehören seitdem zu den wichtigsten städtischen Regeln.",
    "herrschaft": "Mark Brandenburg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1442,
    "titel": "Der Kurfürst nimmt die Stadt an die Kette",
    "text": "Nach einem Streit mit der Bürgerschaft trennt Friedrich II. die beiden Städte wieder, hebt Privilegien auf und lässt eine Burg auf der Spreeinsel bauen. Ein Aufstand 1448, der Berliner Unwille, scheitert. Damit endet die städtische Selbstverwaltung; Berlin wird Residenz und bleibt es – die politische Entscheidung, aus der alles Weitere folgt.",
    "herrschaft": "Hohenzollern"
   },
   {
    "jahr": 1539,
    "titel": "Die Reformation in Brandenburg",
    "text": "Kurfürst Joachim II. führt die Reformation in Brandenburg ein, behutsam und mit vielen beibehaltenen Bräuchen. Kirchengut geht an den Landesherrn und finanziert Verwaltung und Schulen. Für Berlin bedeutet es eine Landesherrschaft, die auch über die Kirche verfügt – ein Merkmal des preußischen Staates bis 1918.",
    "herrschaft": "Hohenzollern",
    "vertiefung": "reformation"
   },
   {
    "jahr": 1648,
    "titel": "Nach dem Dreißigjährigen Krieg",
    "text": "Berlin hat am Ende des Krieges nach den Steuerlisten weniger als sechstausend Einwohner, ein großer Teil der Häuser ist unbewohnbar; die Mark Brandenburg hat vermutlich die Hälfte ihrer Bevölkerung verloren. Der Große Kurfürst beginnt danach ein Programm aus Festungsbau, Kanälen und Ansiedlung. Preußens spätere Politik – Zuwanderung als Wirtschaftsprogramm – hat hier ihren Ursprung.",
    "herrschaft": "Brandenburg-Preußen",
    "vertiefung": "dreissigjaehriger-krieg"
   },
   {
    "jahr": 1671,
    "titel": "Aufnahme jüdischer Familien",
    "text": "Fünfzig aus Wien vertriebene jüdische Familien erhalten Schutzbriefe für Brandenburg – der Anfang der neuzeitlichen jüdischen Gemeinde Berlins. Die Aufnahme war an Bedingungen und Sonderabgaben gebunden und wurde mehrfach eingeschränkt. Aus dieser Gemeinde geht im 18. Jahrhundert mit Moses Mendelssohn eine der Zentralfiguren der Aufklärung hervor.",
    "herrschaft": "Brandenburg-Preußen"
   },
   {
    "jahr": 1685,
    "titel": "Das Edikt von Potsdam",
    "text": "Nach der Aufhebung der Religionsfreiheit in Frankreich lädt der Große Kurfürst hugenottische Flüchtlinge ein und bietet Steuerfreiheit, Baugrund und Gewerberechte. Rund zwanzigtausend kommen nach Brandenburg, mehrere Tausend nach Berlin, wo sie zeitweise ein Fünftel der Bevölkerung bilden. Sie bringen Textilgewerbe, Handel und Französisch als Bildungssprache; die Nachnamen sind im Berliner Telefonbuch noch heute zu finden.",
    "herrschaft": "Brandenburg-Preußen"
   },
   {
    "jahr": 1701,
    "titel": "Residenz eines Königreichs",
    "text": "Mit der Selbstkrönung Friedrichs I. in Königsberg wird Brandenburg-Preußen Königreich, und Berlin die Hauptstadt eines Staates, der über seine Größe hinaus Ansprüche stellt. 1709 werden die fünf Städte auf und um die Spreeinsel zu einer Stadt vereinigt: rund sechzigtausend Einwohner. Es beginnt der planmäßige Ausbau nach Westen, aus dem Friedrichstadt und Unter den Linden werden.",
    "herrschaft": "Königreich Preußen"
   },
   {
    "jahr": 1710,
    "titel": "Ein Pesthaus vor dem Tor",
    "text": "Weil die Pest Ostpreußen entvölkert hatte, lässt Friedrich I. 1710 nördlich der Stadtbefestigung ein Pesthaus errichten, um Kranke im Ernstfall aus der Stadt zu bringen. Die Seuche verschonte Berlin, und das Haus wurde Armenkrankenhaus und Lazarett; 1727 erhielt es von Friedrich Wilhelm I. den Namen Charité. Weil hier zugleich Militärärzte ausgebildet wurden, wuchs aus der Pestvorsorge eines der großen Lehrkrankenhäuser Europas, an dem im 19. Jahrhundert unter anderem Rudolf Virchow forschte.",
    "herrschaft": "Königreich Preußen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1737,
    "titel": "Die Akzisemauer",
    "text": "Zwischen 1734 und 1737 lässt Friedrich Wilhelm I. um die gewachsene Stadt eine Mauer ziehen, die nicht der Verteidigung diente: An ihren Toren wurde die Akzise erhoben, eine Verbrauchssteuer auf Waren, und Soldaten der Garnison sollten nicht desertieren können. Die alten Festungswerke wurden damit überflüssig und später abgetragen. Die Mauer bestimmte bis in die 1860er Jahre die Grenze der Stadt; die Namen ihrer Tore – Hallesches, Frankfurter, Oranienburger Tor – leben als Ortsbezeichnungen und U-Bahnhöfe fort.",
    "herrschaft": "Königreich Preußen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1740,
    "titel": "Friedrich II.",
    "text": "Berlin wird Hauptstadt einer Militärmacht: Ein Fünftel der Einwohner sind Soldaten oder gehören zu Soldatenhaushalten, dazu kommen Manufakturen, die für die Armee produzieren. Friedrich lässt Opernhaus, Bibliothek und Akademie ausbauen und holt Gelehrte nach Berlin – und schreibt seine eigenen Werke auf Französisch, weil er Deutsch für ungeeignet hielt. Im Siebenjährigen Krieg wird die Stadt zweimal von feindlichen Truppen besetzt.",
    "herrschaft": "Königreich Preußen",
    "vertiefung": "aufklaerung"
   },
   {
    "jahr": 1791,
    "titel": "Das Brandenburger Tor",
    "text": "An der Stelle eines schlichten Tores der Akzisemauer baut Carl Gotthard Langhans von 1788 bis 1791 einen Torbau nach dem Vorbild der Propyläen in Athen; 1793 kommt Schadows Quadriga hinzu. Das Tor schloss die Prachtstraße Unter den Linden nach Westen ab und blieb zugleich Kontrollstelle. Seine Bedeutung lag später weniger im Bau als in dem, was an ihm geschah: Einzüge und Siegesparaden, Fackelzüge, von 1961 bis 1989 die Lage im Sperrgebiet der Mauer und schließlich die Feiern der Öffnung.",
    "herrschaft": "Königreich Preußen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1806,
    "titel": "Napoleon zieht durch das Brandenburger Tor",
    "text": "Nach der Niederlage bei Jena und Auerstedt besetzen französische Truppen Berlin; die Quadriga wird nach Paris abtransportiert und kehrt 1814 zurück. Die Besetzung löst die preußischen Reformen aus: Bauernbefreiung, Gewerbefreiheit, Städteordnung, Heeresreform. Berlin erhält 1808 erstmals eine gewählte Stadtverordnetenversammlung.",
    "herrschaft": "Königreich Preußen, französische Besetzung",
    "vertiefung": "napoleonische-kriege"
   },
   {
    "jahr": 1810,
    "titel": "Die Universität",
    "text": "Auf Wilhelm von Humboldts Konzept wird eine Universität gegründet, in der Forschung und Lehre verbunden sind und die Professoren selbst forschen, statt nur zu überliefern. Das Modell wird weltweit übernommen und ist bis heute die Grundlage der Forschungsuniversität. Hegel, Ranke, Virchow, Planck und Einstein lehren hier; zwischen 1933 und 1945 verliert die Universität einen großen Teil ihres Lehrkörpers durch Entlassung und Vertreibung.",
    "herrschaft": "Königreich Preußen",
    "vertiefung": "universitaet"
   },
   {
    "jahr": 1831,
    "titel": "Die Cholera",
    "text": "Im Spätsommer erreicht die Cholera aus dem Osten Berlin, trotz Grenzsperren und Quarantänen. Die Behörden sperren betroffene Häuser ab und richten eigene Cholerahospitäler ein; die Maßnahmen waren umstritten, weil sie den Handel lähmten. Unter den Toten ist im November der Philosoph Hegel, wobei die Diagnose bei ihm nicht ganz gesichert ist. Die Seuche kehrte mehrfach zurück und wurde zu einem Hauptargument für eine zentrale Wasserversorgung, die ab 1856 entstand, und für die Kanalisation, die erst ab 1873 gebaut wurde.",
    "herrschaft": "Königreich Preußen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1838,
    "titel": "Eisenbahn und Maschinenbau",
    "text": "Die Strecke nach Potsdam wird eröffnet, kurz darauf beginnt August Borsig, Lokomotiven zu bauen; bis 1858 sind es tausend. Berlin wird zum Zentrum des deutschen Maschinenbaus, weil hier Kapital, Verwaltung, Fachkräfte und ein Eisenbahnknoten zusammenkommen. Aus Borsig, Siemens und der AEG wird die Industrie, die die Stadt im Kaiserreich trägt.",
    "herrschaft": "Königreich Preußen",
    "vertiefung": "eisenbahn"
   },
   {
    "jahr": 1848,
    "titel": "Barrikaden im März",
    "text": "Nach Straßenkämpfen mit über zweihundert Toten muss der König die Truppen aus der Stadt abziehen und dem Trauerzug der Gefallenen salutieren. Die Berliner Nationalversammlung arbeitet an einer Verfassung, wird im November aufgelöst; eine oktroyierte Verfassung mit Dreiklassenwahlrecht folgt. Das Wahlrecht, das Besitz in Stimmgewicht umrechnete, prägt die preußische Politik bis 1918.",
    "herrschaft": "Königreich Preußen"
   },
   {
    "jahr": 1862,
    "titel": "Der Hobrecht-Plan",
    "text": "Ein Bebauungsplan legt für ein Vielfaches der bestehenden Stadt Straßen und Baublöcke fest, ohne die Bebauung im Inneren zu regeln. Zusammen mit der Bauordnung, die nur einen Hof von 5,34 Metern Seitenlänge verlangte – gerade genug für die Feuerspritze –, entsteht daraus die Berliner Mietskaserne mit vier bis fünf Hinterhöfen. Sie ist der Grund für Berlins berüchtigte Wohnverhältnisse und gleichzeitig für die dichte, gemischte Struktur, die heute geschätzt wird.",
    "herrschaft": "Königreich Preußen"
   },
   {
    "jahr": 1871,
    "titel": "Reichshauptstadt",
    "text": "Mit der Reichsgründung wird Berlin Hauptstadt eines Staates von 41 Millionen Menschen. Die französischen Reparationen lösen einen Bauboom aus, der 1873 im Börsenkrach endet. Die Bevölkerung wächst von 800.000 auf 1,9 Millionen im Jahr 1900 – Berlin ist damit die schnellstwachsende Großstadt Europas und um 1900 die drittgrößte der Welt.",
    "herrschaft": "Deutsches Kaiserreich",
    "vertiefung": "reichsgruendung"
   },
   {
    "jahr": 1873,
    "titel": "Die Kanalisation",
    "text": "Nach Plänen James Hobrechts und mit Unterstützung Rudolf Virchows beginnt Berlin 1873 mit dem Bau einer Schwemmkanalisation. Die Stadt wird in Radialsysteme geteilt, in denen Pumpwerke das Abwasser hinaus auf Rieselfelder im Umland drücken, wo es versickert und die Felder düngt. Bis dahin liefen Abwässer in offenen Rinnsteinen in Spree und Kanäle, Typhus war häufig. Die Sterblichkeit sank in den folgenden Jahrzehnten deutlich; die Rieselfelder prägten das Umland noch bis in die 1980er Jahre.",
    "herrschaft": "Deutsches Kaiserreich",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1884,
    "titel": "Die Kongokonferenz",
    "text": "Im Reichskanzlerpalais verhandeln vierzehn Staaten über Handel und Einflusszonen in Afrika; Vertreter afrikanischer Gesellschaften sind nicht anwesend. Die Schlussakte von 1885 regelt, unter welchen Bedingungen Gebietsansprüche anerkannt werden, und beschleunigt damit die Aufteilung des Kontinents. Der Ort war keine Nebensache: Berlin trat hier zum ersten Mal als Zentrum der Weltpolitik auf.",
    "herrschaft": "Deutsches Kaiserreich"
   },
   {
    "jahr": 1902,
    "titel": "Die Hochbahn",
    "text": "Die erste U-Bahnstrecke wird eröffnet, dazu kommen S-Bahn, Straßenbahn und ein Ringnetz – Berlin bekommt in zwanzig Jahren ein Verkehrssystem, das die Trennung von Wohnen und Arbeiten möglich macht. Mit ihm entstehen die Villenkolonien im Südwesten und die Arbeiterviertel im Norden und Osten. Der Nahverkehr formt die soziale Geographie der Stadt bis heute.",
    "herrschaft": "Deutsches Kaiserreich"
   },
   {
    "jahr": 1918,
    "titel": "Novemberrevolution",
    "text": "Am 9. November wird in Berlin zweimal die Republik ausgerufen, von Scheidemann und von Liebknecht; der Kaiser dankt ab. Im Januar 1919 werden der Januaraufstand niedergeschlagen und Rosa Luxemburg und Karl Liebknecht ermordet. Die Republik beginnt in Berlin mit einem Bürgerkrieg in den eigenen Straßen – eine Belastung, von der sie sich nie löst.",
    "herrschaft": "Weimarer Republik"
   },
   {
    "jahr": 1920,
    "titel": "Groß-Berlin",
    "text": "Ein Gesetz vereinigt die Stadt mit sieben Nachbarstädten, neunundfünfzig Landgemeinden und siebenundzwanzig Gutsbezirken; die Fläche wird dreizehnmal größer, die Bevölkerung springt auf 3,8 Millionen. Berlin ist damit nach London und New York die drittgrößte Stadt der Welt. Die zwanzig Bezirke dieser Reform sind die Grundlage der heutigen Verwaltungsgliederung.",
    "herrschaft": "Weimarer Republik"
   },
   {
    "jahr": 1926,
    "titel": "Die Zwanziger",
    "text": "Berlin wird zum Zentrum von Film, Kabarett, Zeitungswesen, moderner Architektur und Wissenschaft; die Ufa produziert in Babelsberg, Einstein und Planck arbeiten hier, die Siedlungen von Taut und Gropius entstehen. Gleichzeitig lebt ein großer Teil der Bevölkerung in überbelegten Wohnungen, und ab 1929 steigt die Arbeitslosigkeit auf ein Drittel. Die freie Stadt und die verzweifelte Stadt sind dieselbe.",
    "herrschaft": "Weimarer Republik",
    "vertiefung": "weltwirtschaftskrise"
   },
   {
    "jahr": 1933,
    "titel": "Machtübernahme und Bücherverbrennung",
    "text": "Nach dem 30. Januar werden politische Gegner verhaftet, Zeitungen verboten und die Stadtverwaltung ausgetauscht; im Mai verbrennen Studenten am Opernplatz Bücher verfemter Autoren. Berlin verliert innerhalb weniger Jahre einen großen Teil seiner Wissenschaftler, Schriftsteller, Verleger, Ärzte und Künstler – durch Entlassung, Emigration und Verfolgung. Kein anderer Vorgang hat die geistige Substanz der Stadt so schnell und dauerhaft geschwächt.",
    "herrschaft": "Nationalsozialistisches Deutschland"
   },
   {
    "jahr": 1936,
    "titel": "Olympische Spiele",
    "text": "Die Spiele werden als Werbung für das Regime organisiert: antisemitische Schilder werden vorübergehend abgehängt, ein neues Stadion und das erste Fernsehprogramm der Welt gehören dazu. Die Erzählung, Hitler habe Jesse Owens demonstrativ den Handschlag verweigert, ist so nicht belegt; Owens selbst hat später berichtet, vom amerikanischen Präsidenten nicht empfangen worden zu sein. Nach den Spielen wird die Verfolgung fortgesetzt und verschärft.",
    "herrschaft": "Nationalsozialistisches Deutschland"
   },
   {
    "jahr": 1937,
    "titel": "Germania",
    "text": "Hitler ernennt Albert Speer zum Generalbauinspektor für die Reichshauptstadt. Geplant wird ein Umbau zur Welthauptstadt mit einer kilometerlangen Nord-Süd-Achse, einer Kuppelhalle für weit über hunderttausend Menschen und einem riesigen Triumphbogen. Gebaut wurde wenig, doch die Planung hatte Folgen: Ab 1939 wurden jüdische Mieter aus ihren Wohnungen gedrängt, um Ersatz für Nichtjuden zu schaffen, deren Häuser abgerissen werden sollten. Ein Betonkörper, mit dem man die Tragfähigkeit des Bodens prüfte, steht bis heute in Tempelhof.",
    "herrschaft": "Nationalsozialistisches Deutschland",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1938,
    "titel": "Das Novemberpogrom",
    "text": "In der Nacht zum 10. November brennen in Berlin Synagogen, jüdische Geschäfte werden zerstört, tausende Männer in Konzentrationslager verschleppt. Von den rund 160.000 Berliner Juden des Jahres 1933 werden über 50.000 deportiert und ermordet; die Deportationen laufen über den Bahnhof Grunewald und den Anhalter Bahnhof. 1942 wird in einer Villa am Wannsee die Organisation des Völkermords zwischen Behörden abgestimmt.",
    "herrschaft": "Nationalsozialistisches Deutschland",
    "vertiefung": "holocaust"
   },
   {
    "jahr": 1943,
    "titel": "Der Bombenkrieg",
    "text": "Zwischen November 1943 und März 1944 greift die britische Luftwaffe Berlin in großen Angriffen an, später auch die amerikanische am Tag; ein großer Teil der Innenstadt wird zerstört. Über 1,5 Millionen Menschen werden obdachlos, Kinder und Frauen in Ostgebiete verschickt. Das Ziel, durch Angriffe auf die Hauptstadt den Krieg zu verkürzen, wurde nicht erreicht.",
    "herrschaft": "Nationalsozialistisches Deutschland"
   },
   {
    "jahr": 1945,
    "titel": "Die Schlacht um Berlin",
    "text": "Ab dem 16. April greift die Rote Armee mit über zwei Millionen Soldaten an; die Stadt wird nach zwei Wochen Straßenkampf am 2. Mai eingenommen. Hitler nimmt sich am 30. April das Leben. Berlin hat am Ende etwa 2,8 Millionen Einwohner, überwiegend Frauen, Kinder und Alte; ein Viertel des Wohnraums ist zerstört, und die Massenvergewaltigungen dieser Wochen bleiben Jahrzehnte unbesprochen.",
    "herrschaft": "Alliierte Besatzung",
    "vertiefung": "zweiter-weltkrieg"
   },
   {
    "jahr": 1948,
    "titel": "Blockade und Luftbrücke",
    "text": "Nach der Währungsreform sperrt die Sowjetunion die Land- und Wasserwege nach West-Berlin; die Westmächte versorgen die Stadt elf Monate über drei Luftkorridore mit Lebensmitteln und Kohle, bis zu tausend Flüge am Tag. Die Blockade macht aus einer besetzten Feindeshauptstadt einen westlichen Vorposten – der politische Umschlagpunkt der Nachkriegsgeschichte Berlins. 1949 entstehen zwei deutsche Staaten und zwei Stadtverwaltungen.",
    "herrschaft": "Geteiltes Berlin",
    "vertiefung": "kalter-krieg-entsteht"
   },
   {
    "jahr": 1953,
    "titel": "Der 17. Juni",
    "text": "Ein Streik von Bauarbeitern in der Stalinallee gegen erhöhte Arbeitsnormen wächst zu einem Aufstand in über fünfhundert Orten der DDR; sowjetische Panzer beenden ihn, es gibt Dutzende Tote und tausende Verhaftungen. Für die DDR-Führung ist es der Beweis, dass sie sich auf die Sowjetarmee stützen muss. In der Bundesrepublik wird der Tag Feiertag – und ein Argument dafür, dass die deutsche Frage offen bleibt.",
    "herrschaft": "Geteiltes Berlin"
   },
   {
    "jahr": 1961,
    "titel": "Der Mauerbau",
    "text": "In der Nacht zum 13. August riegelt die DDR die Sektorengrenze ab, zunächst mit Draht, dann mit einer 155 Kilometer langen Mauer um West-Berlin. Vorher waren über zweieinhalb Millionen Menschen aus der DDR abgewandert, viele über Berlin. Mindestens 140 Menschen kommen an der Berliner Mauer zu Tode; die exakte Zahl wird von Forschungsprojekten weiter geprüft.",
    "herrschaft": "Geteiltes Berlin",
    "vertiefung": "mauerbau"
   },
   {
    "jahr": 1977,
    "titel": "Marzahn",
    "text": "Im Rahmen des Wohnungsbauprogramms der DDR beginnt am östlichen Stadtrand der Bau von Marzahn, später folgen Hellersdorf und Hohenschönhausen – zusammen das größte Plattenbaugebiet des Landes. Für viele Familien bedeuteten die Neubauten mit Fernheizung, Bad und warmem Wasser einen Aufstieg gegenüber den Altbauten der Innenstadt, die man zugleich verfallen ließ. Nach 1990 verloren die Siedlungen Einwohner und wurden teils zurückgebaut, teils saniert; inzwischen sind die Wohnungen wieder gefragt.",
    "herrschaft": "Geteiltes Berlin",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1981,
    "titel": "Besetzte Häuser und behutsame Erneuerung",
    "text": "In West-Berlin stehen um 1980 Tausende Altbauwohnungen leer, weil Eigentümer und Senat ganze Kreuzberger Blöcke abreißen und neu bauen wollen. Junge Leute besetzen über hundert Häuser; Räumungen führen 1981 zu Straßenschlachten, ein Demonstrant stirbt. Die Bewegung trägt zu einem Kurswechsel bei: Die Internationale Bauausstellung der 1980er Jahre setzt auf behutsame Stadterneuerung, also Sanierung mit den Bewohnern statt Kahlschlag. Ein Teil der besetzten Häuser wurde legalisiert und ist bis heute selbstverwaltet.",
    "herrschaft": "Geteiltes Berlin",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "Der Mauerfall",
    "text": "Nach Wochen von Massendemonstrationen und der Öffnung der ungarischen Grenze erklärt ein Mitglied der SED-Führung am Abend des 9. November die Reisefreiheit für sofort gültig; Menschenmengen an den Übergängen erzwingen die Öffnung. Es war keine Entscheidung, sondern eine Panne in einer ohnehin zerfallenden Lage. Ein Jahr später ist Deutschland vereinigt.",
    "herrschaft": "Geteiltes Berlin",
    "vertiefung": "mauerfall"
   },
   {
    "jahr": 1991,
    "titel": "Der Hauptstadtbeschluss",
    "text": "Der Bundestag entscheidet mit knapper Mehrheit, Parlament und Regierungssitz von Bonn nach Berlin zu verlegen; der Umzug dauert bis 1999. Es folgen die größten Baustellen Europas: Potsdamer Platz, Regierungsviertel, Hauptbahnhof. Gleichzeitig verliert Berlin durch das Ende der Subventionen und der DDR-Industrie über hunderttausend Arbeitsplätze – die Stadt ist bis in die 2000er Jahre hoch verschuldet.",
    "herrschaft": "Bundesrepublik Deutschland",
    "vertiefung": "wiedervereinigung"
   },
   {
    "jahr": 2006,
    "titel": "Arm, aber billig",
    "text": "Berlin ist nach der Wiedervereinigung eine Hauptstadt ohne Industrie und mit niedrigen Mieten – die Grundlage für Clubs, Kunst, Start-ups und Zuwanderung aus ganz Europa. Der Bürgermeister prägt dafür den Satz, die Stadt sei arm, aber sexy. Seit etwa 2010 kehrt sich der Vorteil um: Die Mieten steigen schneller als in jeder anderen deutschen Stadt, und der Streit um Wohnraum wird zum bestimmenden Thema der Stadtpolitik.",
    "herrschaft": "Bundesrepublik Deutschland"
   },
   {
    "jahr": 2012,
    "titel": "Ein Flughafen, der nicht eröffnet",
    "text": "Wenige Wochen vor der geplanten Eröffnung im Juni 2012 wird der Start des neuen Hauptstadtflughafens abgesagt, weil die Brandschutzanlage nicht funktioniert. Es folgen Jahre mit Planungsfehlern, Umbauten und wechselnden Verantwortlichen; eröffnet wird der Flughafen erst im Oktober 2020, kurz danach schließt Tegel. Die Kosten stiegen auf ein Mehrfaches der ursprünglichen Planung. Für viele wurde der Bau zum Sinnbild einer Stadt, die Großprojekte schlecht steuert – und zum Anlass, Planung und Kontrolle öffentlicher Bauten neu zu regeln.",
    "herrschaft": "Bundesrepublik Deutschland",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Die Stadt der offenen Rechnungen",
    "text": "Berlin hat wieder rund 3,8 Millionen Einwohner, so viele wie 1920, und wächst weiter durch Zuwanderung; ein Drittel der Bevölkerung hat einen Migrationshintergrund. Die großen Streitfragen sind Wohnen, Verkehr und Verwaltung – dazu der Umgang mit der eigenen Geschichte, sichtbar an Debatten über Denkmäler, Straßennamen und Restitution. Die aktuellen Zahlen sind beim Amt für Statistik Berlin-Brandenburg nachzuschauen.",
    "herrschaft": "Bundesrepublik Deutschland"
   }
  ]
 },
 {
  "id": "changan",
  "titel": "Chang'an / Xi'an",
  "kurz": "Zweimal die größte Stadt der Welt, zweimal vollständig zerstört — das östliche Ende der Seidenstraße und die Hauptstadt von zehn Dynastien.",
  "einleitung": "In der Ebene des Wei-Flusses, geschützt durch Gebirge und Pässe, aber offen nach Westen zur Steppe, lag über zwei Jahrtausende der politische Mittelpunkt Chinas. Die Zhou, die Qin, die Han, die Sui und die Tang hatten hier ihre Hauptstadt – unter verschiedenen Namen und an leicht verschobenen Stellen. Um 750 lebten in Chang'an nach den Steuerlisten etwa eine Million Menschen innerhalb der Mauern, mehr als in jeder anderen Stadt der Erde, darunter Sogder, Perser, Araber, Japaner, Koreaner und Turkvölker. Zweimal wurde diese Stadt in Bürgerkriegen völlig verwüstet, und beim zweiten Mal kehrte die Hauptstadtfunktion nicht zurück. Was blieb, ist eine Provinzstadt mit einer kompletten Ming-Stadtmauer – und dem größten archäologischen Bestand Chinas unter den Feldern.",
  "strittig": "Die Einwohnerzahl der Tang-Hauptstadt hängt davon ab, was man zählt: Die Steuerregister der Hauptstadtregion nennen fast zwei Millionen, innerhalb der Mauern werden meist achthunderttausend bis eine Million angenommen, und beide Zahlen beruhen auf Haushaltslisten, die Soldaten, Klöster und Zugewanderte unterschiedlich erfassen. Die Verlustzahlen der An-Lushan-Rebellion – in älteren Darstellungen bis zu sechsunddreißig Millionen – gelten heute als Artefakt der Zensusüberlieferung: Nach dem Krieg brach die Erfassung zusammen, sodass der Rückgang der registrierten Bevölkerung nicht mit der Zahl der Toten gleichzusetzen ist. Auch das Erdbeben von 1556 mit angeblich 830.000 Toten ist eine amtliche Ming-Zahl, die nicht nachprüfbar, aber die höchste überlieferte Opferzahl eines Erdbebens überhaupt ist. Die Datierung einzelner Funde in der Region wird laufend präzisiert.",
  "quellen": [
   "Encyclopaedia Britannica: Xi'an; Chang'an; Tang dynasty; An Lushan Rebellion",
   "Mark Edward Lewis: China's Cosmopolitan Empire – The Tang Dynasty",
   "Valerie Hansen: Die Seidenstraße",
   "Victor Cunrui Xiong: Sui-Tang Chang'an – A Study in the Urban History of Medieval China",
   "Peter Hessler / National Geographic und Berichte des Shaanxi-Museums zu den Grabungen",
   "Chinesisches Statistikamt: Bevölkerungsdaten Xi'an (laufend aktualisiert)"
  ],
  "stationen": [
   {
    "jahr": -4500,
    "titel": "Das Dorf Banpo",
    "text": "Am Ostrand des heutigen Xi'an liegt Banpo, ein Dorf der Yangshao-Kultur, 1953 entdeckt und in das 5. Jahrtausend v. Chr. datiert. Freigelegt wurden runde und eckige Häuser, ein Schutzgraben, Töpferöfen und ein Friedhof außerhalb des Grabens; die Bewohner bauten Hirse an und hielten Schweine und Hunde. Auf bemalten Gefäßen finden sich Fische und menschliche Gesichter. Banpo zeigt, dass das Wei-Tal Jahrtausende vor jeder Hauptstadt dicht besiedelt war – fruchtbarer Löss und Wasser zogen die Menschen schon damals hierher.",
    "herrschaft": "Jungsteinzeit (Yangshao-Kultur)",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1046,
    "titel": "Die Zhou verlegen ihr Zentrum ins Wei-Tal",
    "text": "Nach dem Sturz der Shang errichten die Zhou ihre Hauptstädte Feng und Hao im Wei-Tal, wenige Kilometer vom späteren Chang'an. Der Grund ist geographisch: fruchtbarer Lössboden, ein Fluss zum Transport, und Pässe, die die Ebene nach allen Seiten verschließen. Diese Kombination macht die Region für zwei Jahrtausende zum bevorzugten Hauptstadtplatz.",
    "herrschaft": "Zhou-Dynastie"
   },
   {
    "jahr": -350,
    "titel": "Xianyang, die Hauptstadt der Qin",
    "text": "Die Qin machen Xianyang am Nordufer des Wei zu ihrer Hauptstadt und bauen von hier aus den Staat, der China einigt: Straßen, standardisierte Achsbreiten, Gewichte und Schrift. Der erste Kaiser lässt in der Umgebung seine Grabanlage errichten, deren Tonarmee 1974 gefunden wird. Nach dem Sturz der Qin wird Xianyang niedergebrannt.",
    "herrschaft": "Qin-Dynastie",
    "vertiefung": "qin-einigung"
   },
   {
    "jahr": -202,
    "titel": "Die Han gründen Chang'an",
    "text": "Der erste Han-Kaiser lässt südlich der Qin-Ruinen eine neue Hauptstadt anlegen und nennt sie Chang'an, dauerhafter Frieden. Die Stadt erhält eine Mauer aus gestampfter Erde, zwölf Tore und Paläste im Süden; die Anlage folgt nicht dem strengen Raster der späteren Städte, sondern dem Gelände. Ihre Mauerreste sind noch heute im Nordwesten Xi'ans sichtbar.",
    "herrschaft": "Han-Dynastie"
   },
   {
    "jahr": -138,
    "titel": "Zhang Qian bricht nach Westen auf",
    "text": "Kaiser Wu schickt den Gesandten Zhang Qian nach Zentralasien, um Bündnispartner gegen die Xiongnu zu finden; er wird gefangen, kehrt nach dreizehn Jahren zurück und bringt Berichte über Reiche, von denen China nichts wusste. Aus diesen Kontakten entsteht der Handel, den das 19. Jahrhundert Seidenstraße nennen wird. Chang'an ist ihr östlicher Ausgangspunkt.",
    "herrschaft": "Han-Dynastie",
    "vertiefung": "seidenstrasse"
   },
   {
    "jahr": -104,
    "titel": "Der Kalender wird Staatsaufgabe",
    "text": "Kaiser Wu lässt einen neuen Kalender einführen, berechnet vom kaiserlichen Astronomenamt in Chang'an. Die Himmelsbeobachtung ist in China nicht Wissenschaft neben der Herrschaft, sondern Teil davon: Ein Kaiser, dessen Kalender die Finsternisse verfehlt, verliert das Mandat des Himmels. Chang'an wird damit auch der Ort, an dem systematisch Beobachtungen aufgezeichnet werden – die längste durchgehende Beobachtungsreihe der Welt.",
    "herrschaft": "Han-Dynastie"
   },
   {
    "jahr": -100,
    "titel": "Zwei Märkte und neun Tempel",
    "text": "Die Han-Hauptstadt hat rund 250.000 Einwohner, zwei amtlich zugelassene Marktbezirke mit festen Öffnungszeiten und Preisaufsicht, dazu Kornspeicher, Waffenarsenale und eine Akademie für Beamtenanwärter. Wirtschaft findet nur an genehmigten Orten statt – ein Grundsatz chinesischer Hauptstadtplanung, der bis in die Tang-Zeit gilt. Wer außerhalb handelte, wurde bestraft.",
    "herrschaft": "Han-Dynastie"
   },
   {
    "jahr": 2,
    "titel": "Die erste Zählung",
    "text": "Die Han-Verwaltung führt um das Jahr 2 eine Reichszählung durch, deren Ergebnisse das Geschichtswerk der Han überliefert. Für den Kreis Chang'an werden rund 80.000 Haushalte und knapp 250.000 Menschen genannt; der Großraum mit den Kaisergräbern und ihren Satellitenstädten war erheblich größer. Es ist eine der frühesten überlieferten Einwohnerzahlen einer Großstadt. Sie zeigt auch, wie die Han ihre Hauptstadtregion füllten: Reiche Familien aus dem ganzen Land wurden in die Städte bei den Kaisergräbern umgesiedelt, oft gegen ihren Willen.",
    "herrschaft": "Han-Dynastie",
    "seit": "2026-10-01"
   },
   {
    "jahr": 9,
    "titel": "Wang Mang und ein kurzer Umbau",
    "text": "Der Regent Wang Mang setzt die Han ab, gründet eine eigene Dynastie und versucht in Chang'an eine radikale Reform: Verstaatlichung von Großgrundbesitz, staatliche Kreditvergabe, neue Münzen. Nach vierzehn Jahren wird er im Aufstand getötet und die Stadt geplündert. Der Versuch ist der erste große Fall eines chinesischen Reformprogramms, das an Verwaltung und Widerstand der Grundbesitzer scheitert.",
    "herrschaft": "Xin-Dynastie"
   },
   {
    "jahr": 25,
    "titel": "Die Hauptstadt zieht nach Luoyang",
    "text": "Die wiederhergestellten Han verlegen den Hof nach Luoyang im Osten, näher an den fruchtbaren Ebenen und leichter zu versorgen. Chang'an bleibt Nebenhauptstadt und Garnison, verliert aber Hof, Verwaltung und Einwohner. Die Versorgungsfrage – Getreide muss gegen die Strömung ins Wei-Tal geschleppt werden – ist der dauernde Nachteil dieses Standorts.",
    "herrschaft": "Östliche Han-Dynastie"
   },
   {
    "jahr": 190,
    "titel": "Zerstörung im Untergang der Han",
    "text": "Im Zusammenbruch der Han wird der Hof nach Chang'an zurückverlegt, Luoyang niedergebrannt, und wenige Jahre später verheeren Soldatenaufstände auch Chang'an; Berichte sprechen von einer weitgehend entvölkerten Stadt. Es folgen dreieinhalb Jahrhunderte Teilung. In dieser Zeit ist Chang'an mehrfach Hauptstadt kleiner nordchinesischer Reiche, ohne die alte Größe zu erreichen.",
    "herrschaft": "Zerfallszeit"
   },
   {
    "jahr": 401,
    "titel": "Kumarajiva übersetzt",
    "text": "Der Mönch Kumarajiva aus Kucha im heutigen Xinjiang kommt um 401 nach Chang'an, wohin ihn der Herrscher der Späteren Qin nach Jahren der Gefangenschaft bei einem anderen Fürsten hatte holen lassen. Mit einem großen Team übersetzt er bis zu seinem Tod 413 zahlreiche buddhistische Schriften aus dem Sanskrit, darunter das Lotos-Sutra, in einer Sprache, die bis heute gelesen wird. Chang'an, politisch nur eine von vielen Hauptstädten der Zersplitterung, wird damit zu einem Zentrum des chinesischen Buddhismus.",
    "herrschaft": "Spätere Qin (Sechzehn Reiche)",
    "seit": "2026-10-01"
   },
   {
    "jahr": 582,
    "titel": "Die Sui bauen eine Planstadt",
    "text": "Die Sui gründen südöstlich der Han-Ruinen eine völlig neue Hauptstadt, Daxing: ein Rechteck von etwa neun mal acht Kilometern, mit rechtwinkligem Straßenraster, 108 ummauerten Wohnblöcken, einer 150 Meter breiten Prachtstraße und dem Palast im Norden. Es ist die größte planmäßig angelegte Stadt der vormodernen Welt. Ihr Grundriss wird zum Vorbild für Heijō-kyō und Heian-kyō in Japan und für Gyeongju in Korea.",
    "herrschaft": "Sui-Dynastie"
   },
   {
    "jahr": 618,
    "titel": "Tang-Hauptstadt Chang'an",
    "text": "Die Tang übernehmen die Sui-Stadt, geben ihr den alten Namen zurück und erweitern die Palastanlagen nach Norden. Chang'an ist Verwaltungszentrum eines Reiches von etwa fünfzig Millionen Menschen, Prüfungsort für die Beamtenexamen und Endpunkt der Karawanenwege. Die nächsten hundertvierzig Jahre gelten als die kosmopolitischste Phase der chinesischen Geschichte.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 645,
    "titel": "Xuanzang kehrt zurück",
    "text": "Nach sechzehn Jahren in Zentralasien und Indien kommt der Mönch Xuanzang mit hunderten Sanskrit-Handschriften nach Chang'an; der Kaiser stellt ihm ein Übersetzungsbüro zur Verfügung. Sein Reisebericht ist bis heute eine Hauptquelle für die Geschichte Indiens im 7. Jahrhundert, weil indische Quellen dieser Zeit fehlen. Für die spätere Literatur wird aus seiner Reise der Roman Die Reise nach Westen.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 652,
    "titel": "Die Große Wildganspagode",
    "text": "Für die von Xuanzang mitgebrachten Schriften wird eine Pagode errichtet, die nach mehreren Erdbeben und Umbauten noch heute steht – das bekannteste erhaltene Bauwerk der Tang-Zeit in Xi'an. Buddhistische Klöster waren in Chang'an Großgrundbesitzer, Bankiers und Bildungseinrichtungen. Ihre wirtschaftliche Macht ist der Grund, warum sie zweihundert Jahre später zum Ziel des Staates werden.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 700,
    "titel": "Die Stadt der Fremden",
    "text": "In Chang'an leben zehntausende Ausländer: sogdische Karawanenhändler, persische Flüchtlinge nach dem Untergang der Sassaniden, arabische Kaufleute, japanische und koreanische Studenten, uigurische Söldner. Es gibt zoroastrische Feuertempel, manichäische und nestorianisch-christliche Gemeinden und später Moscheen. Die Beamtenprüfung war offen genug, dass Ausländer Karriere machen konnten – ein japanischer Gelehrter starb als kaiserlicher Beamter in China.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 713,
    "titel": "Der Westmarkt",
    "text": "Der westliche der beiden Märkte, näher an den Karawanenstraßen, umfasst über zweihundert Gewerbezweige in eigenen Gassen: Seide, Pferde, Sklaven, Arzneien, Metall, Geldwechsel. Hier tauchen die ersten Belege für Wechselbriefe auf – Zahlungsversprechen, die den Transport von Kupfermünzen ersparen und die Vorgeschichte des Papiergeldes sind. Der Ostmarkt versorgte den Hof und den Adel.",
    "herrschaft": "Tang-Dynastie",
    "vertiefung": "papiergeld"
   },
   {
    "jahr": 745,
    "titel": "Der Höhepunkt",
    "text": "Um die Mitte des 8. Jahrhunderts hat Chang'an nach den Registern der Hauptstadtregion beinahe zwei Millionen und innerhalb der Mauern schätzungsweise achthunderttausend bis eine Million Einwohner. Am Hof leben die Dichter Li Bai und Du Fu, im Palast wird die Musik von sechs Kulturen gespielt. Zehn Jahre später ist die Stadt in der Hand von Aufständischen.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 751,
    "titel": "Talas",
    "text": "Am Fluss Talas in Zentralasien wird ein Tang-Heer von arabischen Truppen geschlagen; die chinesische Ausdehnung nach Westen endet damit. Nach einer späteren Überlieferung gelangte durch chinesische Kriegsgefangene die Papierherstellung nach Samarkand – der Weg des Papiers nach Bagdad und später nach Europa. Der Beleg dafür ist spät und dünn, die Datierung der Papierproduktion in Samarkand passt aber.",
    "herrschaft": "Tang-Dynastie",
    "vertiefung": "seidenstrasse"
   },
   {
    "jahr": 755,
    "titel": "Die An-Lushan-Rebellion",
    "text": "Der General An Lushan erhebt sich, nimmt Chang'an ein, und der Kaiser flieht nach Sichuan; auf dem Weg wird seine Lieblingskonkubine Yang Guifei von der eigenen Eskorte zum Tod gezwungen. Der Krieg dauert acht Jahre, die Hauptstadt wechselt mehrfach den Herrn und wird geplündert. Die Tang bestehen weiter, aber mit abhängigen Provinzgouverneuren, uigurischen Hilfstruppen und einem Misstrauen gegen alles Fremde, das die kosmopolitische Phase beendet.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 781,
    "titel": "Die nestorianische Stele",
    "text": "Eine Steintafel in Chang'an dokumentiert auf Chinesisch und Syrisch die Geschichte der christlichen Gemeinde in China seit 635, mit Namen von Bischöfen und kaiserlichen Erlassen. Sie wurde 1625 wiederentdeckt und ist der wichtigste Einzelbeleg für ein Christentum in Ostasien, das dann verschwand. Jesuiten hielten sie zunächst für eine Fälschung, weil sie nicht in ihr Bild der Missionsgeschichte passte.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 845,
    "titel": "Der Schlag gegen die Klöster",
    "text": "Kaiser Wuzong lässt tausende buddhistische Klöster auflösen, Mönche und Nonnen in den Laienstand zurückversetzen und Bronzestatuen zu Münzen umschmelzen; auch Manichäer, Zoroastrier und Christen werden erfasst. Die Gründe sind vor allem fiskalisch – der Klosterbesitz war steuerfrei. Der Buddhismus erholt sich, die anderen Religionen Chang'ans verschwinden praktisch vollständig.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 881,
    "titel": "Huang Chao",
    "text": "Der Aufstand des Salzhändlers Huang Chao erreicht Chang'an; die Stadt wird eingenommen und bei der Rückeroberung der kaiserlichen Truppen schwer verwüstet. Ein Gedicht der Zeit beschreibt leere Straßen und niedergebrannte Märkte. Die Tang halten sich noch fünfundzwanzig Jahre, ohne Kontrolle über ihr eigenes Kernland.",
    "herrschaft": "Tang-Dynastie"
   },
   {
    "jahr": 904,
    "titel": "Die Stadt wird abgetragen",
    "text": "Ein Warlord lässt den Hof nach Luoyang zwangsumsiedeln und die Paläste und Häuser Chang'ans abreißen; das Bauholz wird auf dem Fluss abtransportiert. Es ist das Ende der Hauptstadt: Chang'an wird nicht wieder aufgebaut, sondern eine kleinere Verwaltungsstadt im Nordostteil des alten Rasters. Keine chinesische Dynastie danach hat hier ihre Hauptstadt.",
    "herrschaft": "Späte Tang-Zeit"
   },
   {
    "jahr": 1000,
    "titel": "Provinzstadt Jingzhaofu",
    "text": "Unter den Song ist die Stadt Verwaltungssitz einer Grenzregion; das wirtschaftliche Gewicht Chinas hat sich endgültig nach Süden und Osten verlagert, zum Yangzi und an die Küste. Der Landweg nach Zentralasien verliert gegenüber dem Seeweg. Die Stadt bleibt bedeutend als Militärstützpunkt und als Sitz einer der ältesten Moscheegemeinden Chinas.",
    "herrschaft": "Song-Dynastie",
    "vertiefung": "song-dynastie"
   },
   {
    "jahr": 1087,
    "titel": "Der Stelenwald",
    "text": "In der Tang-Zeit waren die konfuzianischen Klassiker in Stein gehauen worden, damit Prüfungskandidaten einen verbindlichen Text hatten. Nach dem Fall der Hauptstadt wurden die Tafeln mehrfach umgesetzt; 1087 werden sie an der Präfekturschule beim Konfuziustempel aufgestellt, was als Gründung des Stelenwalds gilt. Über die Jahrhunderte wächst daraus eine große Sammlung von Steininschriften, darunter Meisterwerke der Kalligraphie und die nestorianische Stele. Die einstige Hauptstadt bewahrt ihr Gedächtnis in einem Archiv aus Stein.",
    "herrschaft": "Song-Dynastie",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1370,
    "titel": "Die Ming bauen die Mauer",
    "text": "Die Ming errichten um den verkleinerten Stadtkern eine Ziegelmauer von vierzehn Kilometern Länge, zwölf Metern Höhe und bis zu achtzehn Metern Breite, mit Graben, Türmen und vier Tortürmen. Sie ist heute die vollständigste erhaltene Stadtmauer Chinas und die Ursache dafür, dass Xi'ans Innenstadt noch als Rechteck erkennbar ist. Der Name Xi'an, westlicher Frieden, stammt aus dieser Zeit.",
    "herrschaft": "Ming-Dynastie"
   },
   {
    "jahr": 1556,
    "titel": "Das Erdbeben von Shaanxi",
    "text": "Ein Erdbeben in der Region zerstört Städte und Dörfer über Hunderte Kilometer; besonders tödlich war es, weil viele Menschen in Höhlenwohnungen im Löss lebten, die einstürzten. Die amtliche Ming-Angabe nennt 830.000 Todesopfer – die höchste überlieferte Zahl eines Erdbebens überhaupt, und nicht überprüfbar. Der Gelehrte Qin Keda zog daraus die praktische Lehre, bei Beben nicht hinauszulaufen, sondern in Deckung zu gehen.",
    "herrschaft": "Ming-Dynastie"
   },
   {
    "jahr": 1582,
    "titel": "Der Glockenturm rückt in die Mitte",
    "text": "Der Glockenturm war 1384 gebaut worden, stand aber nach dem Ausbau der Ming-Stadt nicht mehr in ihrem Zentrum. 1582 wird er an die Kreuzung der vier Hauptstraßen versetzt, wo er heute noch steht. Glocke und Trommel gaben den Takt der Stadt vor: Morgens schlug die Glocke, abends die Trommel im benachbarten Trommelturm, und die Tore öffneten und schlossen sich danach. Der Umzug zeigt das Denken der Planer – eine Stadt brauchte eine Mitte, von der aus die Zeit verkündet wurde.",
    "herrschaft": "Ming-Dynastie",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1644,
    "titel": "Ein Rebell ruft eine Dynastie aus",
    "text": "Der Rebellenführer Li Zicheng nimmt Ende 1643 Xi'an ein und ruft dort zum Neujahr 1644 eine eigene Dynastie aus; die Stadt wird ihre westliche Hauptstadt. Von hier zieht er nach Peking, das er im April einnimmt, der letzte Ming-Kaiser erhängt sich. Doch nach wenigen Wochen vertreiben ihn die Mandschu im Bündnis mit einem übergelaufenen Ming-General, und Xi'an fällt 1645 an die Qing. Ein letztes Mal war die alte Hauptstadt Ausgangspunkt eines Anspruchs auf ganz China.",
    "herrschaft": "Rebellenstaat Shun",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1862,
    "titel": "Der Dunganenaufstand",
    "text": "In Shaanxi und Gansu erhebt sich die muslimische Bevölkerung; der Krieg dauert bis 1873 und endet mit Niederschlagung, Massakern auf beiden Seiten und Zwangsumsiedlungen. Xi'an selbst hält, die Umgebung wird entvölkert – die Schätzungen des Bevölkerungsverlusts der beiden Provinzen liegen im Millionenbereich und sind wegen des Zusammenbruchs der Erfassung nicht überprüfbar. Die muslimische Gemeinde innerhalb der Stadtmauern überlebte und besteht bis heute rund um die Große Moschee.",
    "herrschaft": "Qing-Dynastie"
   },
   {
    "jahr": 1900,
    "titel": "Der Hof flieht nach Xi'an",
    "text": "Nach der Niederschlagung des Boxeraufstands und der Einnahme Pekings durch ausländische Truppen zieht sich die Kaiserinwitwe Cixi mit dem Hof nach Xi'an zurück und regiert von hier gut ein Jahr. Die Stadt ist zum letzten Mal Sitz einer chinesischen Regierung. Nach der Rückkehr beginnen die späten Qing-Reformen, die die Dynastie nicht mehr retten.",
    "herrschaft": "Qing-Dynastie",
    "vertiefung": "cixi"
   },
   {
    "jahr": 1911,
    "titel": "Das Ende des Mandschu-Viertels",
    "text": "Wenige Tage nach dem Aufstand in Wuchang erheben sich am 22. Oktober Revolutionäre in Xi'an und nehmen die Stadt nach zweitägigen Kämpfen ein. Das ummauerte Mandschu-Viertel im Nordosten, seit dem 17. Jahrhundert Sitz einer Bannergarnison, wird gestürmt und angezündet; von seinen etwa zwanzigtausend Bewohnern wird nach den verbreiteten Darstellungen der größte Teil getötet, genaue Zahlen gibt es nicht. Viele Verteidiger nahmen sich das Leben. Damit endet eine Ordnung, die die Stadt mehr als zweihundert Jahre nach Herkunft getrennt hatte.",
    "herrschaft": "Qing-Dynastie, dann Republik China",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1926,
    "titel": "Sieben Monate Belagerung",
    "text": "Von April bis Ende November belagert der Kriegsherr Liu Zhenhua, von Wu Peifu entsandt, Xi'an, das die Generäle Li Huchen und Yang Hucheng halten; erst Truppen Feng Yuxiangs beenden die Blockade. Durch Kämpfe, Seuchen und vor allem Hunger kamen nach der Stadtchronik von Xi'an über vierzigtausend Soldaten und Einwohner ums Leben. Die Ming-Mauer schützte die Stadt und machte sie zugleich zur Falle. Yang Hucheng gehört zehn Jahre später zu den beiden Generälen, die beim Xi'an-Zwischenfall Chiang Kai-shek festsetzen.",
    "herrschaft": "Republik China",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1934,
    "titel": "Die Eisenbahn kommt",
    "text": "Die Longhai-Bahn, die von der Küste nach Westen gebaut wird, erreicht 1934 Xi'an und 1936 Baoji. Zum ersten Mal ist die Stadt per Bahn mit Häfen und Industriezentren verbunden. Im Krieg gegen Japan wird sie dadurch zum Ziel von Flüchtlingen und verlagerten Betrieben aus dem besetzten Osten, aber auch von Luftangriffen. Die Bahn legte die Grundlage dafür, dass Xi'an nach 1949 zu einem Industriestandort im Westen ausgebaut wurde – zum ersten Mal seit der Tang-Zeit rückte die Stadt wieder an einen großen Verkehrsweg.",
    "herrschaft": "Republik China",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1936,
    "titel": "Der Xi'an-Zwischenfall",
    "text": "Regionale Truppen nehmen Chiang Kai-shek in Xi'an gefangen und lassen ihn erst frei, nachdem er zugestimmt hat, den Bürgerkrieg gegen die Kommunisten zu unterbrechen und gemeinsam gegen Japan zu kämpfen. Die daraus entstandene Einheitsfront hält bis 1941. Historiker sehen darin einen der Vorgänge, die den Kommunisten das Überleben und langfristig den Sieg ermöglichten.",
    "herrschaft": "Republik China"
   },
   {
    "jahr": 1953,
    "titel": "Industriestadt im Landesinneren",
    "text": "Im ersten Fünfjahresplan gehört Xi'an zu den Städten, in denen mit sowjetischer Hilfe Großprojekte entstehen: Maschinenbau, Elektrotechnik, Textil- und Rüstungsindustrie; 1956 zieht die Jiaotong-Universität aus Shanghai hierher. Die Planer legen die Industriegebiete außerhalb der Ming-Mauer an und lassen die Altstadt als Verwaltungs- und Wohnkern bestehen. Die Einwohnerzahl wächst innerhalb weniger Jahre stark. Die Verlagerung ins Landesinnere war auch militärisch begründet: Fabriken fern der Küste galten als sicherer.",
    "herrschaft": "Volksrepublik China",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1974,
    "titel": "Bauern finden die Tonarmee",
    "text": "Beim Brunnenbau östlich von Xi'an stoßen Bauern auf Tonscherben; die Grabungen legen bis heute mehrere Tausend lebensgroße Figuren aus dem Grabbezirk des ersten Kaisers frei. Der Grabhügel selbst ist bislang nicht geöffnet – aus Rücksicht auf Konservierungsprobleme, nachdem die Farbe der Figuren nach dem Freilegen verlorenging. Der Fund macht Xi'an zu einem der wichtigsten Reiseziele Chinas.",
    "herrschaft": "Volksrepublik China",
    "vertiefung": "qin-einigung"
   },
   {
    "jahr": 1983,
    "titel": "Die Mauer wird wiederhergestellt",
    "text": "In den 1950er Jahren war der Abriss der Ming-Mauer erwogen worden, wie er in Peking geschah; sie blieb stehen, wurde aber stellenweise abgetragen und überbaut. Ab 1983 wird sie in einem großen Programm restauriert: Tor- und Ecktürme werden instand gesetzt, verfallene Abschnitte erneuert, der Graben wiederhergestellt. Seit 2005 ist sie rundum begehbar. Der Unterschied zu Peking, wo die Stadtmauer fast vollständig verschwand, prägt das Stadtbild: In Xi'an ist die Grenze der alten Stadt noch zu sehen.",
    "herrschaft": "Volksrepublik China",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2011,
    "titel": "Die U-Bahn unter den alten Städten",
    "text": "Am 16. September 2011 fährt die erste U-Bahn-Linie Xi'ans. Der Bau war hier besonders heikel: Unter dem Boden liegen Reste mehrerer Hauptstädte, und die Strecken führen dicht an Glockenturm und Mauer vorbei, deren Fundamente gegen Erschütterungen geschützt werden mussten. Seitdem ist das Netz sehr schnell gewachsen und zählt nach Länge zu den größten der Welt. Die Stadt der Ming-Mauer ist zu einer Metropole mit über zehn Millionen Einwohnern geworden, deren Zentrum zugleich ein Freilichtdenkmal ist.",
    "herrschaft": "Volksrepublik China",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2013,
    "titel": "Wieder ein Knotenpunkt",
    "text": "Xi'an ist heute Millionenstadt mit Luft- und Raumfahrtindustrie, Universitäten und einem Güterbahnhof, von dem Containerzüge nach Europa fahren – das erklärte Programm der neuen Landverbindungen beruft sich ausdrücklich auf die alte Seidenstraße. Unter der Stadt und den Feldern der Umgebung liegen die Reste von acht Hauptstädten. Aktuelle Einwohner- und Wirtschaftszahlen sind beim chinesischen Statistikamt nachzuschauen.",
    "herrschaft": "Volksrepublik China"
   }
  ]
 },
 {
  "id": "tenochtitlan",
  "titel": "Tenochtitlán / Mexiko-Stadt",
  "kurz": "Eine Inselstadt für 200.000 Menschen, in zwei Jahren zerstört und darüber neu gebaut — und seither dabei, im trockengelegten See zu versinken.",
  "einleitung": "Tenochtitlán wurde 1325 auf einer Insel im Texcoco-See gegründet, nach der eigenen Überlieferung an der Stelle, an der ein Adler auf einem Kaktus saß – das Bild steht heute in der mexikanischen Flagge. In knapp zweihundert Jahren wuchs daraus die größte Stadt Amerikas: Dämme, Aquädukte, schwimmende Felder, ein Markt, über den die spanischen Berichterstatter staunten, weil er größer war als alles, was sie in Europa kannten. 1521 wurde sie nach einer dreimonatigen Belagerung eingenommen und systematisch überbaut. Mexiko-Stadt steht auf ihren Fundamenten – und weil die Spanier den See ableiteten, sinkt sie seither in den trockenen Seeboden. Diese Geschichte behandelt beide Städte als eine.",
  "strittig": "Die Einwohnerzahl Tenochtitláns wird zwischen 150.000 und über 200.000 geschätzt, aus Fläche, Hausdichte und Tributlisten – gesicherte Zahlen gibt es nicht. Weit strittiger ist der Umfang der Menschenopfer: Die Angaben reichen von den zehntausenden der spanischen und aztekischen Quellen bis zu Schätzungen, die eher hunderte pro Jahr annehmen; beide Seiten hatten Interesse an hohen Zahlen – die Eroberer zur Rechtfertigung, die aztekische Selbstdarstellung zur Einschüchterung. Archäologische Funde am Templo Mayor, darunter ein Schädelturm, belegen die Praxis, nicht die Größenordnung. Der Bevölkerungsrückgang Mexikos im 16. Jahrhundert wird auf 50 bis über 90 Prozent geschätzt, überwiegend durch eingeführte Krankheiten; die Streuung ist enorm, weil die Ausgangszahlen unbekannt sind. Für die Toten des Erdbebens 1985 und des Massakers von 1968 gibt es amtliche und deutlich höhere unabhängige Angaben.",
  "quellen": [
   "Encyclopaedia Britannica: Tenochtitlán; Mexico City; Aztec; Hernán Cortés",
   "Camilla Townsend: Fifth Sun – A New History of the Aztecs (aus Nahuatl-Quellen)",
   "Matthew Restall: Als Cortés Moctezuma traf (zur Quellenkritik der Eroberung)",
   "Bernal Díaz del Castillo: Die Eroberung von Mexiko (Augenzeuge, mit klarer Interessenlage)",
   "Instituto Nacional de Antropología e Historia: Berichte zu den Grabungen am Templo Mayor",
   "INEGI (Mexikanisches Statistikinstitut): Bevölkerungs- und Senkungsdaten (laufend aktualisiert)"
  ],
  "stationen": [
   {
    "jahr": 1325,
    "titel": "Die Gründung auf der Insel",
    "text": "Die Mexica, spät zugewanderte Gruppe im Hochtal, siedeln auf einer sumpfigen Insel im Texcoco-See – dem Land, das niemand sonst wollte. Die eigene Überlieferung erklärt es mit einem göttlichen Zeichen: ein Adler auf einem Kaktus. Der praktische Vorteil war die Verteidigungslage, der praktische Nachteil das Fehlen von Süßwasser, Bauholz und Ackerland.",
    "herrschaft": "Mexica"
   },
   {
    "jahr": 1337,
    "titel": "Tlatelolco, die Schwesterstadt",
    "text": "Eine abgespaltene Gruppe der Mexica gründet nach der Überlieferung 1337 auf dem Nordteil derselben Insel eine eigene Stadt, Tlatelolco. Die beiden Städte wachsen zusammen und sind nur durch einen Kanal getrennt, bleiben aber politisch Rivalen. Tlatelolco wird zum Handelsplatz: Sein Markt, den die spanischen Eroberer als größer und geordneter beschrieben als alle, die sie kannten, versorgte die Doppelstadt mit Lebensmitteln, Stoffen, Obsidian und Sklaven. Tenochtitlan war die Stadt der Herrschaft, Tlatelolco die der Händler.",
    "herrschaft": "Mexica",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1350,
    "titel": "Die Chinampas",
    "text": "Auf dem Flachwasser werden aus Schlamm, Pfählen und Weidengeflecht rechteckige Beete angelegt, umgeben von Kanälen: Chinampas. Sie tragen mehrere Ernten im Jahr, brauchen keine Bewässerung und liefern nach heutigen Schätzungen einen erheblichen Teil der Nahrung der Stadt. Es ist eines der produktivsten Landwirtschaftssysteme der vorindustriellen Welt; Reste sind in Xochimilco noch in Betrieb.",
    "herrschaft": "Mexica"
   },
   {
    "jahr": 1428,
    "titel": "Der Dreibund",
    "text": "Tenochtitlán verbündet sich mit Texcoco und Tlacopan, stürzt die bisherige Vormacht Azcapotzalco und teilt Tribut und Beute unter sich auf. Aus diesem Bündnis entsteht das, was wir Aztekenreich nennen – kein Territorialstaat, sondern ein Netz tributpflichtiger Städte, die ihre eigenen Herrscher behielten. Genau diese Struktur macht es 1519 angreifbar.",
    "herrschaft": "Mexica (Dreibund)"
   },
   {
    "jahr": 1440,
    "titel": "Wasser aus Chapultepec",
    "text": "Unter Moctezuma I. wird eine doppelte Tonrohrleitung vom Festland auf die Insel gebaut: zwei Rohre, damit eines gereinigt werden kann, während das andere läuft. Dazu kommen ein Deich von rund sechzehn Kilometern gegen das salzige Ostwasser des Sees und drei Dammstraßen mit Zugbrücken. Die Infrastruktur ist die Voraussetzung für eine Großstadt an diesem Ort – und im Krieg ihre Schwachstelle.",
    "herrschaft": "Mexica"
   },
   {
    "jahr": 1450,
    "titel": "Die große Hungersnot",
    "text": "Mehrere Jahre Frost und Dürre führen zu einer Hungersnot, in der nach den Quellen Menschen sich in Tributgebiete verkauften, um zu überleben. Danach werden staatliche Kornspeicher angelegt und die Eroberungen nach Süden verstärkt, wo Klima und Ernten sicherer sind. Die Erinnerung an diese Jahre bleibt in den Bilderhandschriften als Wendepunkt verzeichnet.",
    "herrschaft": "Mexica"
   },
   {
    "jahr": 1473,
    "titel": "Tenochtitlan unterwirft Tlatelolco",
    "text": "Der Konflikt zwischen den Schwesterstädten endet im Krieg: Unter Axayacatl erobert Tenochtitlan 1473 Tlatelolco, dessen Herrscher Moquihuix nach der Überlieferung vom Tempel stürzt. Tlatelolco verliert seine eigene Dynastie und wird von Statthaltern regiert, muss Tribut zahlen, behält aber seinen Markt. Damit ist die Insel politisch geeint. Ausgerechnet Tlatelolco wird 1521 zum Ort der letzten Verteidigung gegen die Spanier – und 1968 zum Platz des Massakers.",
    "herrschaft": "Mexica",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1487,
    "titel": "Die Einweihung des Templo Mayor",
    "text": "Der doppelte Tempel im Zentrum, den Göttern Huitzilopochtli und Tlaloc gewidmet, wird nach einem Erweiterungsbau eingeweiht. Die Anlage wurde in sieben Bauphasen jeweils über die vorige gesetzt, weshalb die Archäologie sie heute wie eine Zwiebel abtragen kann. Die Zahl der bei der Einweihung geopferten Menschen wird in den Quellen mit zwanzigtausend angegeben – eine Zahl, die als Machtdemonstration gemeint war und nicht als Statistik.",
    "herrschaft": "Mexica"
   },
   {
    "jahr": 1500,
    "titel": "Zu viel Wasser",
    "text": "Herrscher Ahuitzotl lässt eine zweite Wasserleitung von den Quellen bei Coyoacán in die Stadt bauen. Nach der Überlieferung warnte der Herrscher von Coyoacán vor der Kraft der Quellen und wurde dafür getötet. Als die Leitung um 1500 geöffnet wird, überflutet das Wasser Teile der Stadt, Chinampas und Häuser werden beschädigt, und die Quellen müssen wieder gefasst und gedrosselt werden. Die Episode zeigt das Grundproblem der Inselstadt: Zu wenig Süßwasser war gefährlich, zu viel ebenso.",
    "herrschaft": "Mexica",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1502,
    "titel": "Moctezuma II.",
    "text": "Der neue Herrscher zentralisiert die Verwaltung, ersetzt Beamte durch Angehörige des Hochadels und verstärkt den Tributdruck. Das Reich ist auf seinem größten Umfang und gleichzeitig unbeliebt: Mehrere unterworfene Städte, darunter Tlaxcala, sind unabhängig und feindlich. Diese Unzufriedenheit wird die entscheidende Ressource der Spanier.",
    "herrschaft": "Mexica",
    "vertiefung": "moctezuma2"
   },
   {
    "jahr": 1519,
    "titel": "Cortés erreicht die Stadt",
    "text": "Eine spanische Truppe von einigen hundert Mann zieht mit tausenden tlaxkaltekischen Verbündeten über die Dammstraße nach Tenochtitlán und wird zunächst aufgenommen; Moctezuma gerät in Gefangenschaft. Was in diesen Wochen tatsächlich gesprochen wurde, ist nicht rekonstruierbar – alle Berichte sind Jahre später und von Beteiligten mit Interessen verfasst, und die Erzählung, die Azteken hätten Cortés für einen Gott gehalten, gilt heute als spätere Konstruktion.",
    "herrschaft": "Mexica"
   },
   {
    "jahr": 1520,
    "titel": "Noche Triste und die Pocken",
    "text": "Nach einem Massaker beim Fest im Tempelbezirk erhebt sich die Stadt und treibt die Spanier in einer Nacht über die Dämme hinaus; ein großer Teil von ihnen stirbt. Wenige Monate später bricht die von einem spanischen Schiff eingeschleppte Pockenepidemie aus und tötet einen erheblichen Teil der Bevölkerung, darunter den neuen Herrscher. Die Seuche hat die militärische Lage stärker verändert als jede Schlacht.",
    "herrschaft": "Mexica",
    "vertiefung": "columbian-exchange"
   },
   {
    "jahr": 1521,
    "titel": "Die Belagerung",
    "text": "Cortés kehrt mit tausenden indigenen Verbündeten und dreizehn auf dem See gebauten Brigantinen zurück, kappt die Wasserleitung und schneidet die Nachschubwege ab. Die Stadt hält dreiundneunzig Tage; Häuser werden Straße für Straße abgetragen, um die Kanäle zu füllen. Am 13. August ergibt sich der letzte Herrscher Cuauhtémoc – nach Schätzungen sind die Verluste der Verteidiger und der Zivilbevölkerung sechsstellig.",
    "herrschaft": "Spanische Eroberung"
   },
   {
    "jahr": 1524,
    "titel": "Die neue Stadt über der alten",
    "text": "Cortés lässt an derselben Stelle eine spanische Stadt anlegen, mit dem Hauptplatz über dem Tempelbezirk und der Kathedrale aus den Steinen des Templo Mayor. Die Wahl war umstritten: Der Ort war sumpfig, ungesund und schwer zu versorgen. Entschieden hat die Symbolik – wer im Zentrum der alten Macht residiert, tritt an ihre Stelle.",
    "herrschaft": "Spanien"
   },
   {
    "jahr": 1531,
    "titel": "Die Jungfrau vom Tepeyac",
    "text": "Nach der katholischen Überlieferung erscheint die Jungfrau Maria im Dezember 1531 auf dem Hügel Tepeyac nördlich der Stadt einem indigenen Mann namens Juan Diego. Die ausführliche Erzählung ist erst 1648 und 1649 gedruckt; ob Juan Diego eine historische Person war, ist strittig, die Kirche sprach ihn 2002 heilig. Unbestritten ist die Wirkung: Das Heiligtum der Jungfrau von Guadalupe wird zum meistbesuchten Wallfahrtsort Amerikas, ihr Bild zum Symbol Mexikos, das 1810 die Aufständischen als Banner trugen.",
    "herrschaft": "Spanien",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1535,
    "titel": "Hauptstadt Neuspaniens",
    "text": "Mexiko-Stadt wird Sitz des Vizekönigs und damit Verwaltungszentrum eines Gebiets von Kalifornien bis Mittelamerika und, über Manila, bis zu den Philippinen. Über den Hafen Veracruz und die Manila-Galeone läuft der Silber-, Seiden- und Porzellanhandel zwischen Amerika, Europa und Asien. Die Stadt ist für zweihundertfünfzig Jahre der reichste Ort der westlichen Hemisphäre.",
    "herrschaft": "Vizekönigreich Neuspanien",
    "vertiefung": "potosi"
   },
   {
    "jahr": 1553,
    "titel": "Die Universität",
    "text": "Die Königliche Universität von Mexiko nimmt den Lehrbetrieb auf, eine der ersten Amerikas. Kurz davor entstand das Kolleg von Tlatelolco, an dem indigene Adelssöhne Latein, Nahuatl und Spanisch lernten – aus dieser Schule kommen die Mitarbeiter, die mit Bernardino de Sahagún den Codex Florentinus zusammenstellen. Ein großer Teil dessen, was wir über die aztekische Welt wissen, verdankt sich diesem Projekt.",
    "herrschaft": "Vizekönigreich Neuspanien"
   },
   {
    "jahr": 1571,
    "titel": "Die Inquisition richtet sich ein",
    "text": "In Mexiko-Stadt wird ein Tribunal des Heiligen Offiziums eingerichtet, zuständig für ganz Neuspanien. Indigene Bevölkerung war ausdrücklich ausgenommen – als Neubekehrte galt sie als nicht zurechnungsfähig für Glaubensabweichung –, verfolgt wurden vor allem Konvertiten jüdischer Herkunft, Protestanten und später Bücherbesitz. Das Tribunal betrieb auch die Bücherzensur: Die Listen verbotener Werke sind heute eine Quelle dafür, was in der Kolonie gelesen wurde.",
    "herrschaft": "Vizekönigreich Neuspanien"
   },
   {
    "jahr": 1607,
    "titel": "Der Desagüe",
    "text": "Um die Überflutungen zu beenden, beginnt eines der größten Bauvorhaben der Kolonialzeit: ein Abflusskanal und Tunnel, der das Wasser des abflusslosen Hochtals in ein Nachbartal leitet. Gearbeitet wird über Jahrzehnte in Zwangsarbeit indigener Gemeinden, mit hoher Sterblichkeit. Das Projekt löst das Hochwasserproblem nur teilweise – und schafft ein neues, das noch heute besteht.",
    "herrschaft": "Vizekönigreich Neuspanien"
   },
   {
    "jahr": 1629,
    "titel": "Fünf Jahre unter Wasser",
    "text": "Nach anhaltenden Regenfällen steht die Stadt teilweise mehrere Jahre unter Wasser; ein großer Teil der Bevölkerung verlässt sie, eine Verlegung der Hauptstadt wird erwogen und verworfen. Die Katastrophe beschleunigt die Trockenlegung der Seen, die im 19. und 20. Jahrhundert vollendet wird. Damit verschwindet das Wassersystem, das die Inselstadt getragen hatte, endgültig.",
    "herrschaft": "Vizekönigreich Neuspanien"
   },
   {
    "jahr": 1692,
    "titel": "Der Maisaufstand",
    "text": "Nach Missernten und Getreidespekulation stürmt eine Menge den Hauptplatz, setzt den Vizekönigspalast und das Rathaus in Brand und plündert Läden. Die Behörden reagieren mit Hinrichtungen und mit dem Versuch, indigene Bevölkerung aus dem Zentrum in eigene Viertel zu verlegen. Der Aufstand zeigt, dass die reiche Kolonialstadt von einer Getreideversorgung abhing, die regelmäßig ausfiel.",
    "herrschaft": "Vizekönigreich Neuspanien"
   },
   {
    "jahr": 1785,
    "titel": "Das Hungerjahr",
    "text": "Ein Frost im August vernichtet die Maisernte im Hochland; die folgende Hungersnot und die Seuchen kosten nach Schätzungen mehrere Hunderttausend Menschen das Leben, und Zehntausende ziehen in die Hauptstadt. Die Krise ist Teil des Hintergrunds, auf dem die Unabhängigkeitsbewegung entsteht. In derselben Zeit richtet die Verwaltung Straßenbeleuchtung, Nummerierung und Müllabfuhr ein – Aufklärung und Hungersnot in einer Stadt.",
    "herrschaft": "Vizekönigreich Neuspanien"
   },
   {
    "jahr": 1790,
    "titel": "Die Götter unter dem Platz",
    "text": "Als die Plaza Mayor neu gepflastert und abgesenkt wird, stoßen Arbeiter im August auf die Statue der Göttin Coatlicue und am 17. Dezember auf den Sonnenstein, eine Basaltscheibe von rund 24 Tonnen. Die Coatlicue wird bald wieder vergraben, den Sonnenstein dagegen stellt man an der Kathedrale auf, und der Gelehrte Antonio de León y Gama veröffentlicht 1792 eine Untersuchung. Die Funde stehen am Anfang der mexikanischen Archäologie und eines Selbstbildes, das die Nation auf die Mexica zurückführt.",
    "herrschaft": "Vizekönigreich Neuspanien",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1810,
    "titel": "Der Ruf von Dolores",
    "text": "Der Priester Miguel Hidalgo ruft zum Aufstand gegen die spanische Herrschaft; sein Heer erreicht die Umgebung der Hauptstadt, kehrt aber um, ohne sie anzugreifen – eine der meistdiskutierten Entscheidungen der mexikanischen Geschichte. Der Krieg dauert elf Jahre und kostet nach Schätzungen mehrere Hunderttausend Menschen das Leben. Mexiko-Stadt bleibt bis zum Schluss in royalistischer Hand.",
    "herrschaft": "Vizekönigreich Neuspanien",
    "vertiefung": "lateinamerika-unabhaengigkeit"
   },
   {
    "jahr": 1821,
    "titel": "Unabhängigkeit",
    "text": "Die Unabhängigkeit wird nicht von den Aufständischen, sondern durch das Bündnis eines royalistischen Offiziers mit ihnen erreicht; Mexiko-Stadt wird Hauptstadt eines kurzlebigen Kaiserreichs und dann einer Republik. Es folgen fünfzig Jahre mit über dreißig Regierungswechseln, Staatsbankrotten und Bürgerkriegen. Die Stadt ist in dieser Zeit Beute jeder Erhebung.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1847,
    "titel": "Amerikanische Truppen im Zentrum",
    "text": "Im Krieg mit den USA wird Mexiko-Stadt nach den Kämpfen um Chapultepec eingenommen; die Flagge der Vereinigten Staaten weht auf dem Nationalpalast. Der Friede kostet Mexiko rund die Hälfte seines Staatsgebiets. Für die Hauptstadt beginnt damit eine dauerhafte Nachbarschaftsbeziehung, die Wirtschaft und Politik bis heute prägt.",
    "herrschaft": "Mexiko, US-Besetzung"
   },
   {
    "jahr": 1861,
    "titel": "Die Klöster fallen",
    "text": "Mit den Reformgesetzen verstaatlicht die liberale Regierung den Kirchenbesitz und hebt die Orden auf; nach dem Bürgerkrieg setzt sie das ab 1861 in der Hauptstadt durch. Klöster, die ganze Blöcke einnahmen, werden geteilt, verkauft oder abgerissen, durch ihre Gärten werden Straßen geschlagen. Die Stadt gewinnt Achsen und Bauland, verliert aber viel kolonialen Baubestand. Unterlegene Konservative warben danach in Europa für eine Monarchie in Mexiko; Anlass der französischen Intervention war aber die Aussetzung der Auslandsschulden 1861.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1864,
    "titel": "Ein Kaiser aus Wien",
    "text": "Frankreich setzt den Habsburger Maximilian als Kaiser von Mexiko ein; er lässt einen Prachtboulevard vom Schloss Chapultepec zum Zentrum anlegen, den heutigen Paseo de la Reforma. Nach dem Abzug der französischen Truppen wird er 1867 gefangen genommen und erschossen. Die Straße blieb – die wichtigste Achse der Stadt geht auf eine dreijährige Fremdherrschaft zurück.",
    "herrschaft": "Zweites Mexikanisches Kaiserreich"
   },
   {
    "jahr": 1900,
    "titel": "Der Porfiriato baut um",
    "text": "Unter Porfirio Díaz erhält die Stadt Kanalisation, elektrisches Licht, Straßenbahnen, Bahnhöfe und Repräsentationsbauten; der große Abflusskanal wird endlich fertig und legt die letzten Seen trocken. Finanziert wird das mit ausländischem Kapital, während Landbesitz konzentriert und Löhne gedrückt werden. Beide Seiten dieser Bilanz führen 1910 in die Revolution.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1910,
    "titel": "Das Jubiläum vor dem Sturz",
    "text": "Zum hundertsten Jahrestag des Unabhängigkeitsaufrufs feiert das Regime von Porfirio Díaz im September einen Monat lang: Die Säule mit dem goldenen Engel auf dem Paseo de la Reforma wird eingeweiht, dazu eine psychiatrische Klinik, Schulen und die neu gegründete Nationaluniversität. Ausländische Gesandtschaften sollten eine moderne, geordnete Hauptstadt sehen. Zwei Monate später beginnt die Revolution, die das Regime stürzt; die Feiern wurden zur letzten Selbstdarstellung einer Ordnung, deren Fortschritt die Armen der Stadt kaum erreichte.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1913,
    "titel": "Die zehn tragischen Tage",
    "text": "In der Revolution wird das Zentrum der Hauptstadt zehn Tage lang mit Artillerie beschossen; der Präsident Madero wird gestürzt und ermordet. Die Kämpfe treffen Wohnviertel, die Zahl der zivilen Toten ist unbekannt. Aus dem Bürgerkrieg der folgenden Jahre geht ein Staat hervor, der von 1929 bis 2000 von einer einzigen Partei regiert wird.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1929,
    "titel": "Die Universität wird autonom",
    "text": "Die Nationale Autonome Universität erhält Selbstverwaltung; sie wird zur größten Universität Lateinamerikas und ab 1950 in einem eigenen Campus mit Wandbildern von Rivera, Siqueiros und O'Gorman gebaut. Die Wandmalerei dieser Jahrzehnte ist Staatsauftrag und Kunstprogramm zugleich: Geschichte für ein Publikum, das nicht liest. Der Campus ist heute Weltkulturerbe.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1954,
    "titel": "Die Universitätsstadt",
    "text": "Im Süden der Stadt, auf einem Lavafeld, entsteht ab 1949 die Ciudad Universitaria, die 1954 den Lehrbetrieb aufnimmt. Dutzende Architekten und Künstler arbeiten an dem Campus; die Bibliothek trägt ein Mosaik von Juan O'Gorman, das Rektorat Wandbilder von David Alfaro Siqueiros. Der Campus verbindet die internationale Moderne mit mexikanischen Motiven und ist seit 2007 Welterbe. Mit ihm zog die Universität aus den Kolonialbauten des Zentrums aus, und das Wachstum der Stadt richtete sich stärker nach Süden.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1957,
    "titel": "Der Engel stürzt",
    "text": "Am 28. Juli trifft ein Beben aus Guerrero die Hauptstadt; die Siegesfigur stürzt von der Unabhängigkeitssäule, Gebäude brechen zusammen, die Angaben zu den Toten schwanken zwischen etwa fünfzig und über hundertfünfzig. Ingenieure stellten fest, dass der weiche Seeboden die Erschütterungen verstärkt, und die Stadt verschärfte ihre Bauvorschriften. Das Bild des gestürzten Engels prägte die Erinnerung. Wie unvollständig die Lehre aus 1957 umgesetzt wurde, zeigte sich 1985, als ein stärkeres Beben die Stadt traf.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1968,
    "titel": "Tlatelolco",
    "text": "Zehn Tage vor der Eröffnung der Olympischen Spiele schießen Militär und Sicherheitskräfte auf eine Studentenversammlung auf dem Platz der drei Kulturen; die Regierung sprach von etwa dreißig Toten, unabhängige Untersuchungen und später zugängliche Akten von mehreren Hundert. Der Ort trägt seinen Namen von den drei Schichten, die dort sichtbar sind: aztekischer Tempel, spanische Kirche, moderner Wohnblock. Das Massaker ist der Bruch, an dem die Legitimität des Einparteienstaats zu erodieren beginnt.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1969,
    "titel": "Die Metro",
    "text": "Am 4. September 1969 wird die erste Metrolinie zwischen Chapultepec und Zaragoza eröffnet, gebaut mit französischer Hilfe und mit Gummireifen wie in Paris. Beim Bau stießen die Arbeiter auf einen kleinen aztekischen Rundtempel, der heute in der Station Pino Suárez steht. Der weiche Untergrund erzwang flache Tunnel und Hochstrecken. Die Metro wuchs zu einem der größten Netze der Welt; der Einsturz einer Hochstrecke der Linie 12 im Jahr 2021 mit 26 Toten zeigte, wie sehr Bauqualität und Wartung mit diesem Wachstum Schritt halten müssen.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1978,
    "titel": "Der Templo Mayor kommt zurück",
    "text": "Elektriker stoßen im Zentrum auf eine acht Tonnen schwere Steinscheibe mit der Darstellung der Mondgöttin Coyolxauhqui; daraufhin wird ein ganzer Häuserblock abgerissen und der Tempelbezirk ausgegraben. Zum ersten Mal ist die aztekische Stadt im Zentrum der modernen sichtbar. Die Grabungen laufen bis heute und liefern regelmäßig Funde, die frühere Annahmen korrigieren.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1985,
    "titel": "Das Erdbeben",
    "text": "Ein Beben der Stärke 8,0 trifft die Stadt; besonders schwer betroffen sind die Viertel auf dem alten Seeboden, wo der weiche Untergrund die Schwingungen verstärkt und Gebäude in Resonanz geraten. Die amtliche Zahl von rund zehntausend Toten wird von unabhängigen Schätzungen auf bis zu vierzigtausend erhöht. Weil die Behörden versagten, organisierten Nachbarschaften die Rettung selbst – aus dieser Erfahrung entsteht eine Zivilgesellschaft, die die Politik der folgenden Jahrzehnte verändert.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 1989,
    "titel": "Hoy no circula",
    "text": "Mexiko-Stadt galt Ende der 1980er Jahre als eine der Städte mit der schlechtesten Luft der Welt: Das Hochtal in über 2.200 Metern Höhe, von Bergen umschlossen, hält Abgase von Millionen Autos und Fabriken fest. Ende 1989 führt die Stadt Hoy no circula ein: Je nach Endziffer des Kennzeichens bleibt ein Fünftel der Autos an einem Werktag stehen. Studien zeigten später, dass viele Haushalte sich Zweitwagen kauften; spürbar besser wurde die Luft vor allem durch bleifreies Benzin, Katalysatoren und die Schließung einer Raffinerie 1991.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2000,
    "titel": "Die sinkende Megastadt",
    "text": "Der Großraum Mexiko-Stadt hat über zwanzig Millionen Einwohner und bezieht einen großen Teil seines Trinkwassers aus dem Grundwasser unter der Stadt. Weil der Seeboden dabei entwässert wird, senkt sich der Untergrund in Teilen der Stadt um mehrere Zentimeter pro Jahr; Straßen, Leitungen und Kirchen kippen sichtbar. Es ist die direkte Spätfolge der Entscheidung von 1524, eine europäische Stadt in ein Seebecken zu bauen.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 2016,
    "titel": "Eine Stadt mit eigener Verfassung",
    "text": "Der Bundesdistrikt wird in einen Bundesstaat mit eigener Verfassung umgewandelt, die 2017 verabschiedet wird; die Stadt erhält damit mehr Selbstverwaltung als in ihrer gesamten Geschichte. Die großen offenen Fragen bleiben Wasser, Verkehr, Erdbebensicherheit und Ungleichheit. Aktuelle Bevölkerungs- und Senkungsdaten sind bei INEGI und den zuständigen Forschungsinstituten nachzuschauen.",
    "herrschaft": "Mexiko"
   },
   {
    "jahr": 2017,
    "titel": "Wieder der 19. September",
    "text": "Genau 32 Jahre nach dem großen Beben und zwei Stunden nach der jährlichen Gedenkübung erschüttert am 19. September ein Erdbeben aus Puebla die Stadt. Landesweit sterben 370 Menschen, 228 davon in Mexiko-Stadt; über vierzig Gebäude stürzen ein, darunter eine Schule. Die Schäden konzentrierten sich wieder auf die Zonen des alten Seebodens. Untersuchungen ergaben, dass manche eingestürzten Häuser entgegen den nach 1985 verschärften Vorschriften gebaut oder aufgestockt worden waren – die Regeln existierten, ihre Kontrolle versagte.",
    "herrschaft": "Mexiko",
    "seit": "2026-10-01"
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
    "jahr": -1900,
    "titel": "Die Kauffrauen von Assur",
    "text": "Aus der Handelskolonie Kanesch in Anatolien sind rund 23.000 Keilschrifttafeln assyrischer Kaufleute aus dem 20. und 19. Jahrhundert v. Chr. erhalten. Viele Briefe stammen von Frauen in Assur: Sie ließen Wollstoffe weben, schickten sie nach Anatolien, verlangten Abrechnungen und wiesen säumige Ehemänner zurecht. Einige konnten offenbar selbst lesen und schreiben. Die Tafeln zeigen, dass Frauen hier nicht nur im Haus arbeiteten, sondern als Unternehmerinnen ein Fernhandelsnetz mittrugen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -1479,
    "titel": "Hatschepsut regiert als König",
    "text": "Sie übernahm die Herrschaft für ihren minderjährigen Stiefsohn und behielt sie zwei Jahrzehnte. In Bildwerken erscheint sie mit Königsbart – nicht als Verkleidung, sondern weil das Amt eine männlich definierte Ikonographie hatte. Nach ihrem Tod wurden ihre Namen an vielen Denkmälern getilgt.",
    "vertiefung": "pharao-hatschepsut"
   },
   {
    "jahr": -1250,
    "titel": "Fu Hao, Feldherrin der Shang",
    "text": "Fu Hao war eine der Gemahlinnen des Shang-Königs Wu Ding und lebte um 1200 v. Chr. Orakelknocheninschriften nennen sie als Anführerin von Feldzügen und als Leiterin von Opferhandlungen. Ihr Grab in Anyang wurde 1976 unberaubt gefunden, mit Hunderten Bronzeobjekten, darunter Waffen und Ritualgefäße, und über 700 Jadeobjekten. Es ist eines der wenigen ungestörten Königsgräber der Shang-Zeit. Der Fund zeigt, dass Frauen der Oberschicht in der frühen chinesischen Monarchie militärische und religiöse Ämter ausüben konnten.",
    "seit": "2026-10-01"
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
    "jahr": 100,
    "titel": "Ban Zhao, Historikerin am Hof der Han",
    "text": "Ban Zhao, geboren um 45, vollendete nach dem Tod ihres Bruders Ban Gu das Han Shu, die Geschichte der früheren Han-Dynastie, und unterrichtete Kaiserin Deng und Hofdamen. Zugleich schrieb sie die Lehren für Frauen, die Bescheidenheit, Gehorsam und Fleiß fordern und über fast zwei Jahrtausende in China als Erziehungsschrift für Mädchen dienten. Dass ausgerechnet eine der gelehrtesten Frauen ihrer Zeit den Rahmen für die Unterordnung schrieb, wird bis heute unterschiedlich gedeutet.",
    "seit": "2026-10-01"
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
    "jahr": 690,
    "titel": "Wu Zetian wird Kaiserin",
    "text": "Nach Jahrzehnten der Macht hinter dem Thron ruft Wu Zetian 690 eine eigene Dynastie aus und regiert bis 705 als einzige Frau, die in der chinesischen Geschichte den Kaisertitel selbst trug. Sie förderte das Prüfungssystem für Beamte und den Buddhismus, der ihr eine Legitimation bot, die der Konfuzianismus verweigerte. Die späteren Geschichtsschreiber, durchweg Männer aus konfuzianischer Schule, zeichneten sie als grausame Usurpatorin; wie viel davon zutrifft, ist in der Forschung umstritten.",
    "vertiefung": "wu-zetian",
    "seit": "2026-10-01"
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
    "jahr": 1230,
    "titel": "Die Beginen",
    "text": "Im 13. Jahrhundert schließen sich in den Städten Flanderns, Brabants und am Rhein Frauen zu Gemeinschaften zusammen, die fromm leben, ohne ein Ordensgelübde abzulegen. Die Beginen konnten Besitz behalten und austreten, verdienten ihren Unterhalt mit Textilarbeit, Krankenpflege und Unterricht und lebten oft in eigenen Höfen innerhalb der Stadt. Kirchliche Obrigkeiten misstrauten der Lebensform ohne männliche Aufsicht; das Konzil von Vienne (1311/12) verurteilte Teile der Bewegung. Die flämischen Beginenhöfe sind heute Weltkulturerbe.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1236,
    "titel": "Raziya, Sultan von Delhi",
    "text": "Raziya, Tochter des Sultans Iltutmisch, besteigt 1236 nach dem Sturz ihres Halbbruders den Thron des Sultanats Delhi. Auf ihren Münzen nennt sie sich Sultan, nicht Sultana – das Wort hätte die Ehefrau eines Herrschers bezeichnet. Zeitgenössische Chronisten berichten, sie habe den Schleier abgelegt und sei in Männerkleidung ausgeritten. Nach weniger als vier Jahren setzte eine Gruppe türkischer Adliger sie 1240 ab. Sie blieb die einzige Frau, die das Sultanat von Delhi regierte.",
    "seit": "2026-10-01"
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
    "jahr": 1624,
    "titel": "Njinga von Ndongo und Matamba",
    "text": "Njinga übernimmt 1624 die Herrschaft im Königreich Ndongo im heutigen Angola, nachdem sie zuvor als Gesandte mit den Portugiesen verhandelt hatte. Als diese 1626 Krieg führten, wich sie aus, eroberte das Nachbarreich Matamba und verbündete sich mit den Niederländern, die 1641 Luanda besetzt hatten. Bis zu einem Frieden 1656 widerstand sie der portugiesischen Expansion. Ihr Bild als Widerstandskämpferin ist berechtigt, aber unvollständig: Auch ihr Reich beteiligte sich am Sklavenhandel.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1678,
    "titel": "Die erste Doktorandin",
    "text": "Elena Cornaro Piscopia promoviert in Padua in Philosophie – gegen den Widerstand der theologischen Fakultät, die einen Abschluss in Theologie verhinderte. Es dauerte weitere zweihundert Jahre, bis Frauen regulär studieren durften."
   },
   {
    "jahr": 1691,
    "titel": "Sor Juana verteidigt das Recht zu lernen",
    "text": "Juana Inés de la Cruz, Nonne in Mexiko-Stadt, war die bedeutendste Dichterin des spanischen Amerika und besaß eine große Bibliothek. Nachdem der Bischof von Puebla 1690 unter dem Decknamen Sor Filotea eine theologische Kritik von ihr veröffentlicht und sie zugleich ermahnt hatte, sich frommeren Dingen zu widmen, antwortete sie 1691 mit einer Verteidigung des Rechts von Frauen auf Bildung. Wenige Jahre später gab sie das Schreiben auf und trennte sich von ihren Büchern; die Umstände sind umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1732,
    "titel": "Laura Bassi lehrt in Bologna",
    "text": "Laura Bassi verteidigt 1732 in Bologna öffentlich 49 Thesen, erhält den Doktorgrad in Philosophie und wird im selben Jahr Mitglied der Akademie der Wissenschaften und erste besoldete Hochschullehrerin Europas. Vorlesungen durfte sie zunächst nur zu besonderen Anlässen halten; sie unterrichtete deshalb Experimentalphysik in ihrem eigenen Haus, mit Instrumenten, die sie mit ihrem Mann anschaffte. 1776 erhielt sie den Lehrstuhl für Experimentalphysik. Ihre Laufbahn hing von der Förderung durch den späteren Papst Benedikt XIV. ab.",
    "seit": "2026-10-01"
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
    "jahr": 1854,
    "titel": "Florence Nightingale und die Krankenpflege",
    "text": "Im Krimkrieg leitet Florence Nightingale ab 1854 ein Team von Pflegerinnen im Militärlazarett von Scutari bei Istanbul. Wichtiger als ihre Legende als Dame mit der Lampe wurde, was folgte: Mit Statistiken und neuartigen Diagrammen zeigte sie, dass die meisten Soldaten an vermeidbaren Krankheiten starben, nicht an Wunden. 1860 gründete sie in London eine Schule für Krankenpflege und machte daraus einen Ausbildungsberuf. Wie viel sie selbst zum Rückgang der Sterblichkeit in Scutari beitrug, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1869,
    "titel": "Das erste Frauenwahlrecht",
    "text": "Das Territorium Wyoming führt im Dezember 1869 das Wahlrecht für Frauen ein – teils aus Überzeugung, teils um Siedlerinnen anzulocken und Aufmerksamkeit für das dünn besiedelte Gebiet zu gewinnen. 1893 folgt Neuseeland als erster selbstverwalteter Staat landesweit, nach Petitionen, die Kate Sheppard und andere organisiert hatten; wählbar ins Parlament wurden Frauen dort allerdings erst 1919. Das Wahlrecht kam damit zuerst an den Rändern, nicht in den Zentren der Welt.",
    "vertiefung": "frauenwahlrecht",
    "seit": "2026-10-01"
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
    "jahr": 1908,
    "titel": "Frauen an deutschen Universitäten",
    "text": "Während Zürich Frauen seit den 1860er Jahren zum Studium zuließ, durften sie in Deutschland lange nur als Gasthörerinnen mit Erlaubnis des Professors in Vorlesungen sitzen. Baden ließ 1900 als erstes deutsches Land Frauen regulär zu, Preußen folgte 1908. Viele Pionierinnen hatten zuvor im Ausland promoviert. Zulassung hieß noch nicht Gleichstellung: Die Habilitation blieb Frauen in Deutschland bis 1920 verwehrt, und Professorinnen waren noch Jahrzehnte später eine kleine Minderheit.",
    "seit": "2026-10-01"
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
    "jahr": 1949,
    "titel": "Gleichberechtigt im Grundgesetz",
    "text": "Im Parlamentarischen Rat, unter dessen 65 Mitgliedern vier Frauen waren, schlug die Juristin Elisabeth Selbert den Satz vor: Männer und Frauen sind gleichberechtigt. Der Antrag scheiterte zunächst; erst nach einer Welle von Protestbriefen aus der Bevölkerung wurde er im Januar 1949 angenommen. Das Grundgesetz verpflichtete den Gesetzgeber, das widersprechende Familienrecht bis 1953 anzupassen. Er versäumte die Frist, das Gleichberechtigungsgesetz kam erst 1957 – und ließ noch vieles beim Alten.",
    "seit": "2026-10-01"
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
    "text": "In der Bundesrepublik setzte das Strafrecht für Vergewaltigung bis 1997 eine außereheliche Tat voraus; Gewalt in der Ehe galt allenfalls als Nötigung oder Körperverletzung. Erst 1997 stimmte der Bundestag nach über zwanzig Jahren Debatte und mit einer fraktionsübergreifenden Initiative von Parlamentarierinnen für die Strafbarkeit, gegen erheblichen Widerstand. In Großbritannien hatte ein Gericht 1991 die Ausnahme verworfen. In vielen Ländern ist Vergewaltigung in der Ehe bis heute nicht oder nur eingeschränkt strafbar.",
    "seit": "2026-10-01"
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
    "jahr": -242,
    "titel": "Drei Tage Aufschub",
    "text": "In seinem vierten Säulenedikt ordnet der indische König Ashoka an, dass zum Tod Verurteilte drei Tage Aufschub erhalten: Angehörige sollen um ihr Leben bitten können, und wer niemanden hat, soll sich auf das Jenseits vorbereiten. Zugleich verlangt er, dass Verfahren und Strafen im ganzen Reich einheitlich sein sollen. Die Todesstrafe schafft der buddhistisch geprägte Herrscher nicht ab – aber er behandelt die Vollstreckung als etwas, das Zeit für Prüfung und Gnade braucht.",
    "vertiefung": "ashoka",
    "seit": "2026-10-01"
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
    "jahr": 800,
    "titel": "Der Zweifel wendet die Strafe ab",
    "text": "Die im 8. und 9. Jahrhundert entstehenden islamischen Rechtsschulen kennen für wenige Taten feste Strafen, die Hadd-Strafen. Zugleich stellen die Juristen dafür so hohe Beweisanforderungen – etwa vier Augenzeugen bei Unzucht oder ein Geständnis, das widerrufen werden darf –, dass sie selten verhängt werden konnten. Eine auf einen Hadith gestützte Regel lautet, die Hadd-Strafen seien durch Zweifel abzuwenden. Ob heutige Scharia-Strafgesetze auch diese Verfahrensregeln übernehmen, prägt ihren Charakter.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1166,
    "titel": "Zwölf Männer zeigen an",
    "text": "Heinrich II. von England verpflichtet mit der Assise von Clarendon in jeder Hundertschaft zwölf rechtschaffene Männer, den reisenden Königsrichtern unter Eid zu nennen, wer des Raubes, Mordes oder Diebstahls verdächtig ist. Die Verfolgung schwerer Taten liegt damit nicht mehr allein beim Geschädigten, sondern bei Krone und Gemeinde. Aus diesen Anzeigegeschworenen geht die Grand Jury hervor, die es in den USA bis heute gibt; die urteilende Jury setzt sich erst durch, nachdem 1215 das Gottesurteil wegfiel.",
    "seit": "2026-10-01"
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
    "vertiefung": "hexenverfolgung-ende"
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
    "vertiefung": "hexenverfolgung-ende"
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
    "jahr": 1742,
    "titel": "Ein Strafbuch nur für Richter",
    "text": "Der Shōgun Tokugawa Yoshimune lässt die Strafpraxis seiner Gerichte im Kujikata Osadamegaki zusammenfassen, einem Regelwerk mit Strafmaßen und früheren Entscheidungen als Maßstab. Es war für die Richterbeamten bestimmt, nicht zur öffentlichen Verkündung – nach der konfuzianischen Maxime, das Volk solle der Obrigkeit folgen, nicht das Gesetz kennen. Das ist das Gegenteil der römischen Zwölftafeln. Es blieb bis zum Ende der Edo-Zeit Maßstab; nach 1868 folgten zunächst Strafgesetze nach chinesischem, 1880 eines nach französischem Vorbild.",
    "seit": "2026-10-01"
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
    "jahr": 1927,
    "titel": "Artikel 58",
    "text": "Das sowjetische Strafgesetzbuch erhält einen Artikel über konterrevolutionäre Verbrechen, dessen Tatbestände so weit gefasst sind, dass fast jede Äußerung darunter fallen kann – bis hin zum Nichtanzeigen eines Verdachts. Verurteilt wurde oft nicht von Gerichten, sondern von Sonderkommissionen der Geheimpolizei. Die Mehrheit der Gulag-Häftlinge waren gewöhnliche Strafgefangene, doch Artikel 58 lieferte die Rechtsform, in der politische Gegnerschaft als Verbrechen behandelt und mit Lagerhaft bestraft wurde.",
    "vertiefung": "grosser-terror",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1945,
    "titel": "Nürnberg",
    "text": "Vor dem Internationalen Militärgerichtshof stehen ab November 1945 22 führende Vertreter des NS-Staats. Neu ist der Grundsatz, dass staatliches Handeln nicht vor persönlicher Verantwortung schützt und ein Befehl nicht von Schuld befreit. Zwölf Angeklagte werden zum Tod verurteilt, drei freigesprochen. Kritiker sprachen von Siegerjustiz, auch weil sowjetische Ankläger das vom NKWD verübte Massaker von Katyn den Deutschen anlasteten; das Urteil erwähnte Katyn nicht. Die Grundsätze von Nürnberg wurden zur Basis des Völkerstrafrechts.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Recht auf ein faires Verfahren",
    "text": "Die Allgemeine Erklärung der Menschenrechte schreibt Unschuldsvermutung, Verbot der Folter und das Recht auf Verteidigung als weltweiten Anspruch fest. Rechtlich ist sie nicht bindend, praktisch ist sie die Grundlage aller späteren Konventionen — und der Maßstab, an dem sich Staaten messen lassen müssen."
   },
   {
    "jahr": 1949,
    "titel": "Die Todesstrafe ist abgeschafft",
    "text": "Der Parlamentarische Rat nimmt den Satz in das Grundgesetz auf. Den ersten Antrag hatte ein Abgeordneter der rechtsgerichteten Deutschen Partei gestellt, nach Darstellung von Historikern auch, um gegen alliierte Todesurteile für NS-Kriegsverbrecher Stimmung zu machen; die SPD griff ihn auf und begründete ihn mit der Abkehr von der NS-Justiz. Umfragen zeigten noch lange Mehrheiten für die Todesstrafe. Artikel 102 steht trotzdem unverändert – eine Reform aus gemischten Motiven kann Bestand haben.",
    "seit": "2026-10-01"
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
    "jahr": 1985,
    "titel": "Der Prozess gegen die Juntas",
    "text": "In Buenos Aires stehen die Mitglieder der ersten drei Militärjuntas vor einem zivilen Gericht, gestützt auf eine Wahrheitskommission, die 8.960 Fälle von Verschwundenen dokumentiert hatte; Menschenrechtsorganisationen schätzen die Zahl deutlich höher. Videla und Massera erhalten lebenslange Haft, vier Angeklagte werden freigesprochen. Begnadigungen 1989 und 1990 hoben die Strafen auf, Gerichte erklärten sie ab 2006 für verfassungswidrig. Nie zuvor hatte eine lateinamerikanische Demokratie ihre Diktatur so vor Gericht gestellt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "DNA befreit Unschuldige",
    "text": "In den USA beginnt mit Gary Dotson die Reihe der Freilassungen durch DNA-Analyse; das Innocence Project zählt seither hunderte Fälle. Auffällig ist, was die Wiederaufnahmen gemeinsam haben: falsche Zeugenidentifizierung, fehlerhafte Gutachten und erzwungene Geständnisse. Es sind dieselben Fehlerquellen, die Beccaria 1764 benannte.",
    "vertiefung": "dna-alte"
   },
   {
    "jahr": 2002,
    "titel": "Gacaca – Gerichte auf dem Rasen",
    "text": "Nach dem Völkermord an den Tutsi saßen in Ruanda über hunderttausend Verdächtige in Haft, reguläre Gerichte hätten Jahrzehnte gebraucht. Die Regierung baute die Gacaca, eine traditionelle Dorfschlichtung, zu Laiengerichten aus, die bis 2012 nach amtlichen Angaben über eine Million Beschuldigte verhandelten, mit Strafminderung für Geständnisse. Menschenrechtsorganisationen kritisierten fehlende Verteidigung, Druck auf Zeugen und Bestechlichkeit; Verbrechen der siegreichen RPF blieben ausgeklammert. Dennoch kamen Überlebende vor Ort zu Wort.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2002,
    "titel": "Ein ständiger Strafgerichtshof",
    "text": "Das Römische Statut tritt in Kraft und schafft in Den Haag den ersten ständigen Internationalen Strafgerichtshof für Völkermord, Verbrechen gegen die Menschlichkeit und Kriegsverbrechen. Er wird nur tätig, wenn Staaten selbst nicht verfolgen wollen oder können. Die USA, Russland, China und Indien sind nicht beigetreten, und lange richteten sich fast alle Verfahren gegen Afrikaner, was afrikanische Regierungen als einseitig kritisierten. Ohne eigene Polizei bleibt das Gericht auf Staaten angewiesen, die seine Haftbefehle vollstrecken.",
    "seit": "2026-10-01"
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
    "jahr": -30,
    "titel": "Kleopatra und die Schlange",
    "text": "Dass Kleopatra sich von einer Schlange beißen ließ, ist das bekannteste Bild ihres Todes und das am wenigsten gesicherte. Plutarch nennt die Schlange als eine Version unter mehreren und schreibt ausdrücklich, die Wahrheit kenne niemand; gefunden wurde keine. Strabo und Cassius Dio erwähnen auch eine giftige Salbe oder eine Nadel. Sicher ist nur, dass sie sich der Vorführung im Triumphzug Octavians entzog – die Malerei der Neuzeit hat aus der unsicheren Variante die einzige gemacht.",
    "vertiefung": "antonius-kleopatra",
    "seit": "2026-10-01"
   },
   {
    "jahr": -20,
    "titel": "Vitruv warnt vor Bleirohren",
    "text": "Der römische Baumeister Vitruv rät, Wasser besser in Tonröhren als in Bleirohren zu leiten, weil Blei der Gesundheit schade, und verweist auf die blasse Haut der Bleiarbeiter. Daraus wurde im 20. Jahrhundert die These, eine Bleivergiftung der Oberschicht habe Roms Untergang mitverursacht. Die Forschung hält das überwiegend für nicht haltbar: Kalkablagerungen schützten viele Leitungen, das Wasser floss ständig, und der Niedergang des Westreichs zog sich über Jahrhunderte. Belegt ist eine erhöhte Bleibelastung, kein Zusammenbruch durch sie.",
    "vertiefung": "ende-westrom",
    "seit": "2026-10-01"
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
    "jahr": 846,
    "titel": "Elixiere der Unsterblichkeit",
    "text": "Mehrere Kaiser der Tang-Dynastie starben nach Darstellung der Geschichtsschreibung an Elixieren, die ihnen ein ewiges Leben verschaffen sollten, so Wuzong 846; bei Xianzong 820 wird daneben ein Mord durch Eunuchen überliefert. Die daoistische Alchemie arbeitete mit Quecksilber-, Blei- und Arsenverbindungen. Bemerkenswert ist, dass Beamte vor den Mitteln warnten und trotzdem nicht gehört wurden. Dass schon der erste Kaiser Qin Shi Huang daran starb, ist eine verbreitete Vermutung, keine gesicherte Überlieferung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1095,
    "titel": "Das Antoniusfeuer",
    "text": "In der Dauphiné in Südostfrankreich entsteht die Bruderschaft, aus der der Antoniterorden hervorgeht; sie pflegt Menschen mit dem Antoniusfeuer, einer Krankheit mit absterbenden Gliedern und Krämpfen. Erst um 1600 wurde erkannt, dass ein Pilz im Roggen, das Mutterkorn, die Ursache war – eine Massenvergiftung durch Brot. Als ältester Beleg gilt ein Eintrag der Xantener Annalen zum Jahr 857. Die populäre These, Mutterkorn habe 1692 die Hexenprozesse von Salem ausgelöst, ist umstritten und wird von vielen Historikern zurückgewiesen.",
    "seit": "2026-10-01"
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
    "jahr": 1857,
    "titel": "Vom Pfeilgift zur Narkose",
    "text": "Indigene Gruppen im Amazonas- und Orinokogebiet stellten aus Pflanzen Pfeilgifte für die Jagd her, die Europäer unter dem Namen Curare kannten; Walter Raleigh erwähnt 1596 ein solches Gift. Claude Bernard zeigte 1857 in Paris, dass Curare die Übertragung vom Nerv auf den Muskel unterbricht, ohne Nerv oder Muskel selbst zu schädigen. Das wurde ein Grundstein der Physiologie und ab den 1940er Jahren der Narkose: Muskelentspannende Mittel nach diesem Prinzip gehören heute zu den meisten großen Operationen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1858,
    "titel": "Die Bonbons von Bradford",
    "text": "Ein Süßwarenhersteller streckt Pfefferminzbonbons mit einem billigen weißen Pulver, das der Gehilfe des Apothekers versehentlich als Arsentrioxid ausgibt; über zwanzig Menschen sterben, mehr als zweihundert werden krank. Der Vorfall war kein Mord, sondern eine Folge davon, dass Gifte und Lebensmittelzusätze im gleichen Regal standen. Er führte in Großbritannien zu den ersten Vorschriften über Abgabe und Kennzeichnung von Arzneistoffen."
   },
   {
    "jahr": 1863,
    "titel": "Die Bohne des Gottesurteils",
    "text": "Im Gebiet von Old Calabar im heutigen Nigeria mussten Beschuldigte, etwa der Hexerei Verdächtige, einen Trank aus der Calabarbohne zu sich nehmen; wer überlebte, galt als unschuldig. Die Bohne gelangte 1840 nach Großbritannien, 1863 untersuchte der Edinburgher Arzt Thomas Fraser ihre Wirkung, kurz darauf wurde der Wirkstoff Physostigmin isoliert, der später gegen grünen Star eingesetzt wurde. Das Ordal folgte derselben Logik wie Europas Wasserprobe: Über die Schuld entschied eine Wirkung, die niemand vorhersehen konnte.",
    "seit": "2026-10-01"
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
    "jahr": 1915,
    "titel": "Chlorgas bei Ypern",
    "text": "Am 22. April 1915 lassen deutsche Truppen bei Ypern Chlorgas aus Tausenden Stahlflaschen abströmen, das der Wind auf französische und algerische Stellungen trägt. Der Chemiker Fritz Haber hatte das Verfahren vorgeschlagen und überwachte den Einsatz. Gas tötete im Ersten Weltkrieg weit weniger Soldaten als die Artillerie, veränderte den Krieg aber durch Angst und Gasmasken. Das Genfer Protokoll von 1925 verbot den Einsatz, sah aber keine Kontrolle vor – weshalb Giftgas in späteren Kriegen trotzdem eingesetzt wurde.",
    "vertiefung": "stellungskrieg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1928,
    "titel": "Die Leuchtziffernmalerinnen",
    "text": "Arbeiterinnen in US-Fabriken, die Zifferblätter mit radiumhaltiger Leuchtfarbe bemalten und dabei ihre Pinsel mit den Lippen spitzten, erkrankten ab den frühen 1920er Jahren an zerfallenden Kieferknochen, Blutarmut und Knochenkrebs. Die Firma bestritt einen Zusammenhang; 1928 erreichten fünf Frauen aus New Jersey einen Vergleich. Der Fall prägte das Recht auf Entschädigung bei Berufskrankheiten und die Regeln des Strahlenschutzes. Das Gift kam hier nicht aus einer Hand, sondern aus einer Arbeitsanweisung.",
    "seit": "2026-10-01"
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
    "jahr": 1956,
    "titel": "Minamata",
    "text": "In der japanischen Küstenstadt Minamata wird 1956 amtlich eine rätselhafte Nervenkrankheit festgestellt. Ursache war Methylquecksilber im Abwasser eines Chemiewerks der Firma Chisso, das sich in Fischen anreicherte. Obwohl Forscher der Universität Kumamoto früh auf das Werk hinwiesen, erkannte die Regierung den Zusammenhang erst 1968 an; bis dahin liefen die Einleitungen weiter. Tausende wurden als Erkrankte anerkannt, weit mehr entschädigt. Das internationale Quecksilberabkommen von 2013 trägt den Namen der Stadt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1978,
    "titel": "Der Regenschirm auf der Waterloo Bridge",
    "text": "Der bulgarische Exilschriftsteller Georgi Markow stirbt in London, nachdem ihm eine winzige, mit Rizin gefüllte Metallkugel ins Bein geschossen wurde. Die Kugel wurde in der Autopsie gefunden. Der Fall zeigt die neue Form: Gift nicht mehr im Haushalt, sondern als Werkzeug von Staaten."
   },
   {
    "jahr": 1984,
    "titel": "Bhopal",
    "text": "In der Nacht zum 3. Dezember 1984 entweicht im Pestizidwerk einer Union-Carbide-Tochter in Bhopal Methylisocyanat; über eine halbe Million Menschen sind dem Gas ausgesetzt. Die Zahl der Toten ist umstritten: Amtlich zählte man zunächst gut 2.000 sofortige Tote, andere Schätzungen nennen rund 8.000 in den ersten Wochen und Tausende weitere später. 1989 zahlte der Konzern im Vergleich 470 Millionen Dollar. 2010 wurden sieben indische Manager zu zwei Jahren Haft verurteilt, Konzernchef Warren Anderson stand nie vor Gericht.",
    "seit": "2026-10-01"
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
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1252,
    "titel": "Ad extirpanda",
    "text": "Innozenz IV. erlaubt die Folter in Ketzerprozessen. Formal galten Einschränkungen: keine Verstümmelung, kein Todesrisiko, nur einmalige Anwendung. In der Praxis wurde die Einmaligkeit umgangen, indem man die Sitzung als Fortsetzung derselben Anwendung führte.",
    "vertiefung": "hexenverfolgung-ende"
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
    "jahr": 1745,
    "titel": "Russland setzt die Hinrichtungen aus",
    "text": "Kaiserin Elisabeth von Russland lässt Todesurteile nicht mehr vollstrecken; Russland erhält damit eines der ersten faktischen Moratorien Europas, das rund ein Jahrzehnt hält. Der Fortschritt war begrenzt: An die Stelle der Hinrichtung traten häufig Knute, Brandmarkung und Verbannung nach Sibirien, und schwere Prügelstrafen konnten selbst tödlich enden. Die Unterscheidung zwischen Todesstrafe und Körperstrafe war eine juristische, nicht immer eine praktische – das gilt für viele spätere Reformen ebenso.",
    "seit": "2026-10-01"
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
    "jahr": 1863,
    "titel": "Venezuela schafft die Todesstrafe ab",
    "text": "Venezuela schafft 1863 als erster Staat die Todesstrafe für alle Verbrechen ab. Bald folgen San Marino und, für zivile Straftaten, Portugal, später Costa Rica und Ecuador. In den hundert Jahren danach schlossen sich nur wenige Länder an; die große Welle kam erst nach 1945 und vor allem nach 1990. Heute hat die Mehrheit der Staaten die Todesstrafe im Gesetz oder in der Praxis abgeschafft. Der Anfang dieser Entwicklung lag nicht in Europa, sondern in Lateinamerika.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1874,
    "titel": "Die eiserne Jungfrau ist eine Fälschung",
    "text": "Das berühmte Folterinstrument mit Innenstacheln wurde erstmals 1793 beschrieben und in Nürnberg im 19. Jahrhundert für Schaustellungen zusammengebaut, teils aus alten Einzelteilen. Kein mittelalterlicher Beleg existiert. Dasselbe gilt für einen Großteil der Instrumente in Folterkammer-Museen — eine Erfindung der Schauergeschichte, nicht des Mittelalters.",
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1879,
    "titel": "Japan schafft die Folter ab",
    "text": "Das Japan der frühen Meiji-Zeit behält die Folter zunächst bei, weil eine Verurteilung ein Geständnis voraussetzt. Der französische Jurist Gustave Boissonade, Berater des Justizministeriums, drängt auf ihre Abschaffung; ein Argument war, dass die Westmächte die ungleichen Verträge kaum revidieren würden, solange Japan folterte. 1876 wird bestimmt, dass Urteile auf Beweisen beruhen, 1879 wird die Folter offiziell abgeschafft. Wie in Europa fiel sie, als das Geständnis seine Rolle als Königsbeweis verlor.",
    "vertiefung": "meiji",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1890,
    "titel": "Der elektrische Stuhl",
    "text": "In Auburn im Staat New York wird William Kemmler als erster Mensch auf dem elektrischen Stuhl hingerichtet. Die Methode war als humanere Alternative zum Hängen eingeführt worden und geriet in den Streit der Stromunternehmen: Edisons Lager warb mit ihr gegen den Wechselstrom der Konkurrenz, George Westinghouse wehrte sich gegen ihren Einsatz. Die Hinrichtung misslang beim ersten Stromstoß. Das Muster wiederholt die Guillotine: Jede neue Methode tritt als schonend auf, und jede liefert Fälle, die das widerlegen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1905,
    "titel": "China schafft das Lingchi ab",
    "text": "Das Qing-Reich schafft auf Vorschlag des Juristen Shen Jiaben das Lingchi ab, die verstümmelnde Hinrichtung für Hochverrat und Elternmord, zusammen mit dem Zurschaustellen von Köpfen. Shen stützte sich auf eine Denkschrift des Dichters Lu You aus dem 12. Jahrhundert: Die Kritik war in China fast so alt wie die Strafe. Fotografien der letzten Vollstreckungen von 1904 und 1905 kursierten in Europa als Beleg chinesischer Grausamkeit. Ob eher westlicher Druck oder die eigene Reformtradition die Abschaffung bewirkte, ist in der Forschung strittig.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1929,
    "titel": "Genfer Regeln für Gefangene",
    "text": "Das Genfer Abkommen verbietet Zwang zur Aussage bei Kriegsgefangenen; sie müssen nur Name, Rang und Nummer angeben. Es ist der erste völkerrechtliche Schritt, dem 1949 die vier Abkommen und 1984 die Antifolterkonvention folgen."
   },
   {
    "jahr": 1937,
    "titel": "Die verschärfte Vernehmung",
    "text": "Ein Erlass Reinhard Heydrichs legalisiert im Juli 1937 die verschärfte Vernehmung der Gestapo, nach Vorschrift und mit Genehmigung. Ein Folgeerlass von 1942, gezeichnet von Gestapochef Heinrich Müller, nennt Dunkelzelle, Schlafentzug, Ermüdungsübungen und Stockhiebe. Sie sollte Wissen über gegnerische Organisationen erzwingen, nicht Geständnisse eigener Taten. Die Bürokratie der Folter erinnert an die Inquisition, ihr Zweck war ein anderer. Der Publizist Andrew Sullivan wies nach 2001 auf die Nähe zum US-Ausdruck enhanced interrogation hin.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1938,
    "titel": "Geständnisse für die Schauprozesse",
    "text": "In den Moskauer Schauprozessen gestehen frühere Spitzenfunktionäre öffentlich Verbrechen, die sie nicht begangen hatten. Die Geständnisse wurden durch Dauerverhöre, Drohungen gegen Angehörige und Misshandlungen erzwungen; Chruschtschow zitierte 1956 in seiner Geheimrede ein Telegramm Stalins von 1939, wonach die Parteiführung physische Methoden seit 1937 erlaubt habe. Anders als im Inquisitionsverfahren ging es nicht um Wahrheitsfindung, sondern um Inszenierung: Das Geständnis war ein Urteil, das der Angeklagte selbst vortrug.",
    "vertiefung": "grosser-terror",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Artikel 5",
    "text": "Die Allgemeine Erklärung der Menschenrechte verbietet Folter und grausame, unmenschliche oder erniedrigende Behandlung – ohne Ausnahme, ohne Notstandsklausel. Die Erklärung ist rechtlich nicht bindend, aber ihr Wortlaut geht fast unverändert in die Europäische Menschenrechtskonvention, den UN-Zivilpakt und die Antifolterkonvention ein."
   },
   {
    "jahr": 1957,
    "titel": "Die Schlacht von Algier",
    "text": "Französische Fallschirmjäger erhalten in Algier Polizeibefugnisse und setzen Folter systematisch ein, um die Netzwerke der FLN zu zerschlagen, die mit Bombenanschlägen auch gegen Zivilisten vorging. Der Journalist Henri Alleg beschreibt seine eigene Folterung 1958 im Buch La Question, das in Frankreich verboten wird. Erst 2000 und 2001 bestätigten beteiligte Generäle wie Massu und Aussaresses die Praxis öffentlich. Der Fall zeigt, wie ein Rechtsstaat Folter im Ausnahmezustand duldet und Jahrzehnte braucht, sie einzugestehen.",
    "vertiefung": "algerienkrieg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1961,
    "titel": "Warum Menschen quälen",
    "text": "Stanley Milgram lässt Versuchspersonen unter Anweisung eines Versuchsleiters angebliche Stromschläge verabreichen; ein großer Teil geht bis zur höchsten Stufe. Die Deutung ist umstritten – der Versuchsleiter drängte stärker als berichtet, und die Teilnehmenden zweifelten teilweise am Aufbau. Was der Versuch belegt, ist schwächer als die berühmte Behauptung, aber nicht harmlos: Gehorsam gegenüber einer als legitim erlebten Instanz senkt die Schwelle deutlich."
   },
   {
    "jahr": 1977,
    "titel": "Steve Biko",
    "text": "Der Aktivist der Schwarzen Bewusstseinsbewegung stirbt in Polizeihaft an Kopfverletzungen, nachdem man ihn schwer verletzt über tausend Kilometer nach Pretoria gefahren hatte. Die Untersuchung entlastete die Polizei. Vor der Wahrheitskommission beantragten fünf Beamte Amnestie gegen Aussagen; sie wurde 1998 wegen widersprüchlicher Angaben verweigert. 2003 verzichtete die Justiz mangels Beweisen auf eine Anklage; 2025 wurde der Fall neu aufgerollt. Die Kommission tauschte Wahrheit gegen Straffreiheit – hier kam lange keines von beiden zustande.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1978,
    "titel": "Die fünf Techniken vor Gericht",
    "text": "Der Europäische Gerichtshof für Menschenrechte verurteilt das Vereinigte Königreich wegen der Behandlung nordirischer Gefangener: Wandstehen, Kapuze, Lärm, Schlaf- und Nahrungsentzug. Das Gericht nennt es unmenschliche Behandlung, nicht Folter – eine Unterscheidung, die später zur Rechtfertigung ähnlicher Methoden herangezogen wurde. Der irische Antrag auf Revision dieses Punkts wurde 2018 abgelehnt."
   },
   {
    "jahr": 1982,
    "titel": "Die Giftinjektion",
    "text": "Texas vollstreckt erstmals ein Todesurteil durch Giftinjektion. Oklahoma hatte sie 1977 als schonendere Alternative eingeführt; sie lässt die Hinrichtung wie einen medizinischen Eingriff aussehen, doch Ärzteverbände lehnen jede Mitwirkung ab. Seit Pharmahersteller ab etwa 2010 die Lieferung von Wirkstoffen verweigern, greifen Bundesstaaten zu Ersatzmitteln, und mehrere Hinrichtungen verliefen nachweislich qualvoll. Die Frage nach der schonenden Hinrichtung, die mit der Guillotine gestellt wurde, ist damit nicht beantwortet, nur verlagert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1984,
    "titel": "Die Antifolterkonvention",
    "text": "Die UN-Konvention verbietet Folter ausnahmslos — auch im Krieg, auch im Notstand, auch auf Befehl. Sie ist eines der wenigen Verbote des Völkerrechts, das keine Abwägung zulässt. Über 170 Staaten sind beigetreten."
   },
   {
    "jahr": 1985,
    "titel": "Brasil: Nunca Mais",
    "text": "In São Paulo erscheint ein Bericht über die Folter unter der Militärdiktatur seit 1964, entstanden unter dem Schutz von Kardinal Paulo Evaristo Arns und des presbyterianischen Pfarrers Jaime Wright. Seine Grundlage sind nicht Erinnerungen, sondern die Akten der Militärgerichte selbst, die ein Team über Jahre heimlich kopiert hatte; darin hatten Angeklagte ihre Misshandlung zu Protokoll gegeben. Das Buch wurde ein Bestseller. Strafverfahren verhinderte das Amnestiegesetz von 1979; erst eine Wahrheitskommission benannte 2014 Verantwortliche.",
    "seit": "2026-10-01"
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
    "jahr": 184,
    "titel": "Die Gelben Turbane",
    "text": "Der daoistische Heiler Zhang Jue sammelt in Nordchina eine Bewegung, den Weg des Großen Friedens, die Heilung durch Sündenbekenntnis und geweihtes Wasser verspricht und für das Jahr 184 den Beginn einer neuen Weltzeit ankündigt. Als der Plan verraten wird, erheben sich die Anhänger mit gelben Kopftüchern vorzeitig. Der Aufstand wurde niedergeschlagen, doch die Generäle, die das taten, wurden zu eigenständigen Mächten – ein Schritt zum Zerfall der Han-Dynastie. Chinesische Staaten behandelten religiöse Bewegungen seither als Aufstandsgefahr.",
    "seit": "2026-10-01"
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
    "jahr": 1682,
    "titel": "Die Altgläubigen und das Feuer",
    "text": "Nach der Kirchenreform des Patriarchen Nikon spalten sich in Russland die Altgläubigen ab, die an den alten Riten festhalten und den Staat als Reich des Antichrists deuten. Ihr Wortführer, der Erzpriester Awwakum, wird 1682 verbrannt. Rückten Truppen an, verbrannten sich ganze Gemeinden in ihren Holzkirchen, um nicht zur neuen Kirche gezwungen zu werden; nach Schätzungen starben so in der Generation nach 1667 rund 20.000 Menschen. Die Massenselbsttötung war hier nicht die Tat eines Anführers, sondern eine Antwort auf Verfolgung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1776,
    "titel": "Die Illuminaten",
    "text": "Adam Weishaupt gründet in Ingolstadt einen Geheimbund aufklärerischer Beamter und Gelehrter; 1785 wird er in Bayern verboten und löst sich auf. Die Akten sind gut erhalten, der Bund hatte wenige hundert Mitglieder und keine erkennbare Wirkung. Seine zweite, viel größere Karriere führt er als Erklärung für alles Weitere – die Illuminaten sind das Muster der modernen Verschwörungserzählung."
   },
   {
    "jahr": 1796,
    "titel": "Der Weiße Lotus als Etikett",
    "text": "In den Bergen zwischen Sichuan, Hubei und Shaanxi erheben sich Bauern und Siedler gegen Steuerdruck und Beamtenwillkür; der Krieg dauert bis 1804 und schwächt die Qing-Dynastie schwer. Die Regierung nannte die Aufständischen Anhänger des Weißen Lotus, einer verbotenen Sekte. Der Historiker Barend ter Haar hat gezeigt, dass Weißer Lotus vor allem eine Bezeichnung der Behörden war, die sich die Beteiligten selbst kaum gaben – ein chinesisches Gegenstück zum britischen Thuggee-Vorwurf in Indien.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1830,
    "titel": "Der Thuggee-Vorwurf",
    "text": "Die britische Kolonialverwaltung erklärte Reiseüberfälle in Indien zum Werk eines geheimen Würgerkults im Dienst der Göttin Kali und schuf eine eigene Behörde, die tausende Menschen verurteilte — Geständnisse stammten meist von Kronzeugen, die dadurch selbst freikamen. Dass Straßenräuberbanden existierten, ist unbestritten; die neuere Forschung, etwa bei Kim Wagner, hält den religiösen Kult für eine Konstruktion, die Massenverhaftungen rechtfertigte."
   },
   {
    "jahr": 1851,
    "titel": "Das Himmlische Reich der Taiping",
    "text": "Hong Xiuquan, der nach gescheiterten Beamtenprüfungen Visionen hatte und sich für den jüngeren Bruder Jesu hielt, ruft das Himmlische Reich des Großen Friedens aus. Aus einer Gruppe von Bekehrten wird ein Staat mit der Hauptstadt Nanjing, der Opium, Glücksspiel und das Füßebinden verbietet. Der Krieg gegen die Qing dauert bis 1864; die Schätzungen der Toten, die meisten durch Hunger und Seuchen, liegen überwiegend zwischen 20 und 30 Millionen. Er zeigt, was geschieht, wenn eine Endzeitlehre auf verbreitete Not trifft.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1856,
    "titel": "Das Rindertöten der Xhosa",
    "text": "Die junge Prophetin Nongqawuse verkündet, die Ahnen würden zurückkehren und die Kolonisten vertreiben, wenn die Xhosa ihr Vieh töten und ihr Getreide vernichten. Vorausgegangen waren eine eingeschleppte Lungenseuche der Rinder und Jahrzehnte des Landverlusts. Bis 1858 werden rund 400.000 Rinder getötet, schätzungsweise 40.000 Menschen verhungern. Gouverneur George Grey nutzt die Katastrophe, um Land einzuziehen und Überlebende in Arbeitsverträge zu zwingen. Der Historiker Jeff Peires deutet sie als Antwort auf eine Krise, nicht als Wahn.",
    "seit": "2026-10-01"
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
    "jahr": 1897,
    "titel": "Canudos",
    "text": "Im Hinterland Bahias gründet der Wanderprediger Antônio Conselheiro eine Siedlung, die Tausende Arme anzieht. Presse und Regierung der jungen brasilianischen Republik stellen sie als Verschwörung zur Wiederherstellung der Monarchie dar. Drei Militärexpeditionen scheitern, die vierte zerstört Canudos im Oktober 1897 fast vollständig; die Schätzungen der Toten reichen von etwa 5.000 bis 30.000. Euclides da Cunha, der als Reporter dabei war, machte daraus 1902 sein Buch Os Sertões, eine Anklage gegen die Armee des eigenen Landes.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1935,
    "titel": "Der völkische Okkultismus und seine Legende",
    "text": "Aus Vorkriegszirkeln wie der Ariosophie und der Thule-Gesellschaft stammen Motive, die einzelne NS-Funktionäre aufnahmen; Himmlers Ahnenerbe finanzierte pseudowissenschaftliche Forschung, und die SS pflegte eine eigene Symbolik. Die populäre Vorstellung eines okkult gesteuerten Dritten Reichs geht dagegen auf Nachkriegsbücher zurück und ist von der Forschung als Legende zurückgewiesen. Der Unterschied ist wichtig, weil die Legende die Verbrechen ins Mysteriöse verschiebt, statt sie zu erklären."
   },
   {
    "jahr": 1941,
    "titel": "John Frum auf Tanna",
    "text": "Auf der Insel Tanna im heutigen Vanuatu verlassen 1941 viele Bewohner die Missionskirchen und Plantagen, geben ihr Geld aus und kehren zu den von den Missionaren unterdrückten Festen zurück, weil eine Gestalt namens John Frum den Abzug der Weißen und reiche Güter verheißen hatte. Als bald darauf amerikanische Truppen mit gewaltigen Mengen Material in die Region kamen, schien sich das zu bestätigen. Ethnologen wie Lamont Lindstrom halten den Begriff Cargo-Kult für irreführend, weil er eine politische Bewegung auf ein Missverständnis verkürzt.",
    "seit": "2026-10-01"
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
    "jahr": 1987,
    "titel": "Gehirnwäsche vor Gericht",
    "text": "Seit den 1970er Jahren ließen Eltern in den USA erwachsene Kinder aus neuen religiösen Gruppen entführen und von sogenannten Deprogrammierern festhalten, bis sie abschworen; einige dieser Helfer wurden wegen Freiheitsberaubung verurteilt. Gerechtfertigt wurde das mit der These der Gehirnwäsche. 1987 lehnte ein Gremium der American Psychological Association den Bericht einer Arbeitsgruppe um Margaret Singer ab, weil ihm wissenschaftliche Strenge fehle; Gerichte ließen die These danach meist nicht mehr als Gutachten zu.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1990,
    "titel": "Die satanistische Panik",
    "text": "Ab 1983 ermitteln Behörden in Kalifornien gegen Betreiber einer Vorschule wegen angeblicher ritueller Misshandlungen; Befragungen der Kinder mit suggestiven Methoden erzeugten immer unglaubwürdigere Aussagen. Nach sieben Jahren und den teuersten Strafprozessen der US-Geschichte endet das Verfahren 1990 ohne eine Verurteilung. Ein Bericht des FBI-Ermittlers Kenneth Lanning fand 1992 keinen Beleg für organisierte satanistische Tötungszirkel. Der Vorgang folgt dem Muster von 186 v. Chr.: Der Vorwurf des Geheimkults erzeugt seine Beweise selbst.",
    "seit": "2026-10-01"
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
    "jahr": 1999,
    "titel": "Falun Gong",
    "text": "Die rasch gewachsene Meditationsbewegung Falun Gong versammelt im April 1999 rund 10.000 Anhänger vor dem Regierungssitz Zhongnanhai aus Protest gegen Festnahmen. Im Juli verbietet die Regierung sie als häretischen Kult. Menschenrechtsorganisationen dokumentieren seither Haft, Umerziehung und Folter. Vorwürfe systematischer Organentnahme sind schwer zu überprüfen; ein nichtstaatliches, von Aktivisten einberufenes Tribunal in London hielt sie 2019 für erwiesen, die Regierung bestreitet sie. Der Sektenbegriff dient hier als Rechtsinstrument.",
    "seit": "2026-10-01"
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
    "jahr": -80,
    "titel": "Wem nützt es?",
    "text": "Der junge Cicero verteidigt Sextus Roscius gegen den Vorwurf, seinen Vater ermordet zu haben. Der Tote war nachträglich auf Sullas Ächtungslisten gesetzt und sein Vermögen von einem Günstling Sullas billig ersteigert worden. Beide Seiten argumentieren mit derselben Frage: Wem nützte die Tat? Roscius wurde freigesprochen. Was wir wissen, stammt allein aus Ciceros Rede, die die Forschung für weitgehend parteiisch hält; sie zeigt einen Mordprozess, der ohne Spuren und fast ohne Zeugen nur über Motive geführt wurde.",
    "vertiefung": "cicero",
    "seit": "2026-10-01"
   },
   {
    "jahr": 700,
    "titel": "Richter Di – ein Beamter wird Romanheld",
    "text": "Di Renjie war ein hoher Beamter und zweimal Kanzler unter der Kaiserin Wu Zetian, bekannt für Unbestechlichkeit. Ein anonymer Roman der Qing-Zeit, meist ins 18., teils ins späte 19. Jahrhundert datiert, machte ihn zum Ermittler; der niederländische Diplomat Robert van Gulik übersetzte ihn 1949 und schrieb danach eigene Kriminalromane um Richter Di, die später auch ins Chinesische übersetzt wurden. Sie stützen sich auf alte chinesische Fallsammlungen, sind aber Literatur – über die Ermittlungsarbeit des historischen Di wissen wir wenig.",
    "vertiefung": "wu-zetian",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1247,
    "titel": "Ein Lehrbuch der Leichenschau",
    "text": "Der Justizbeamte Song Ci veröffentlicht eine Anleitung zur Untersuchung von Todesfällen, das Xiyuan jilu, sinngemäß Gesammelte Fälle berichtigten Unrechts. Es verlangt, dass der Untersuchende den Toten selbst ansieht, sein Protokoll eigenhändig führt und Selbsttötung, Unfall und Tötung durch andere sorgfältig unterscheidet – ausdrücklich, um Fehlurteile zu vermeiden. Das Buch blieb Jahrhunderte Handbuch chinesischer Beamter und gilt als ältestes erhaltenes Lehrbuch der Rechtsmedizin. Die Kriminalistik hat keinen einzigen Ursprung in Europa.",
    "vertiefung": "song-dynastie",
    "seit": "2026-10-01"
   },
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
    "vertiefung": "hexenverfolgung-ende"
   },
   {
    "jahr": 1611,
    "titel": "Erzsébet Báthory und die Zahl 650",
    "text": "Die ungarische Adlige wird auf ihrer Burg eingemauert, nachdem eine Untersuchung im Auftrag des Palatins Thurzó Zeugen befragt hatte. Ihre Bediensteten wurden gefoltert und hingerichtet, sie selbst nie vor Gericht gestellt — was ungewöhnlich ist und mit ihrem Rang und ihrem Vermögen zu tun hat, das die Krone schuldete. Die Zahl von 650 Opfern stammt aus einer einzigen Zeugenaussage über ein angebliches Verzeichnis, das nie gefunden wurde. Das Blutbad zur Verjüngung erscheint erst 1729 bei einem Jesuiten, hundert Jahre nach ihrem Tod.",
    "vertiefung": "hexenverfolgung-ende"
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
    "jahr": 1768,
    "titel": "Saltytschicha – eine Adlige wird verurteilt",
    "text": "Die Moskauer Gutsbesitzerin Darja Saltykowa wird nach sechsjähriger Untersuchung für schuldig befunden, 38 ihrer Leibeigenen getötet zu haben; vermutet wurden weit über hundert. Frühere Beschwerden waren abgewiesen und die Beschwerdeführer bestraft worden – erst eine Bittschrift an Katharina II. brachte das Verfahren in Gang. Saltykowa wurde an den Pranger gestellt und lebenslang in einem Kloster eingesperrt. Anders als Báthory wurde sie tatsächlich verurteilt, weil die Kaiserin ein Exempel wollte.",
    "seit": "2026-10-01"
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
    "jahr": 1831,
    "titel": "Gesche Gottfried",
    "text": "In Bremen wird Gesche Gottfried hingerichtet, die gestanden hatte, zwischen 1813 und 1827 fünfzehn Menschen aus ihrer Familie und Umgebung mit Arsen vergiftet zu haben. Sie galt als aufopfernde Pflegerin; aufgedeckt wurde die Serie erst, als ein Mann weiße Körner in seinem Essen fand und von einem Arzt prüfen ließ. Es war die letzte öffentliche Hinrichtung der Stadt. Ein Stein auf dem Domshof, auf den Passanten spucken, erinnert an sie – ein Brauch, in dem bis heute die Täterin fortlebt, nicht die Opfer.",
    "seit": "2026-10-01"
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
    "jahr": 1849,
    "titel": "Dickens bei der Hinrichtung",
    "text": "Ein Ehepaar wird in London für die Ermordung eines Bekannten gehängt, vor einer Menge, die auf Zehntausende geschätzt wurde. Charles Dickens war unter den Zuschauern und schrieb noch am selben Tag an die Times, das Verhalten des Publikums sei grauenhafter gewesen als alles, was er sich habe vorstellen können. Er forderte nicht die Abschaffung der Todesstrafe, sondern das Ende öffentlicher Hinrichtungen. Sein Brief wurde zu einem Argument der Debatte, an deren Ende England 1868 die Hinrichtungen hinter Gefängnismauern verlegte.",
    "seit": "2026-10-01"
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
    "jahr": 1892,
    "titel": "Deeming und die Ripper-Legende",
    "text": "In Melbourne wird Frederick Deeming wegen Mordes an seiner zweiten Frau verurteilt; in England fand man daraufhin die Leichen seiner ersten Frau und ihrer vier Kinder. Zwischen Fund und Hinrichtung lagen weniger als drei Monate, weil Telegraf und Zeitungen die Ermittlungen zweier Kontinente verbanden. Australische Blätter erklärten ihn zu Jack the Ripper; die Londoner Polizei schloss das aus, weil er 1888 in Haft oder in Südafrika war. Die Legende hält sich trotzdem, weil sie einen ungelösten Fall scheinbar löst.",
    "seit": "2026-10-01"
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
    "jahr": 1893,
    "titel": "Lizzie Borden",
    "text": "In Fall River in Massachusetts werden 1892 ein wohlhabender Geschäftsmann und seine Frau in ihrem Haus getötet; angeklagt wird die Tochter Lizzie Borden. Die Geschworenen sprechen sie 1893 nach kurzer Beratung frei, danach wurde niemand mehr angeklagt. Ein Kinderreim, der ihr die Tat zuschreibt und sie dabei übertreibt, hat sich trotzdem durchgesetzt. Der Fall zeigt, wie eine populäre Erzählung ein Urteil faktisch ersetzen kann: Für die Öffentlichkeit blieb Borden schuldig, vor dem Recht war sie es nie.",
    "seit": "2026-10-01"
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
    "jahr": 1921,
    "titel": "Raya und Sakina",
    "text": "In Alexandria werden zwei Schwestern, ihre Ehemänner und zwei Helfer verurteilt, 1919 und 1920 siebzehn Frauen getötet zu haben, um deren Schmuck zu verkaufen. Aufgedeckt wurde der Fall durch Vermisstenanzeigen von Angehörigen und Funde in mehreren Wohnungen. Raya und Sakina wurden im Dezember 1921 als erste Frauen im modernen Ägypten hingerichtet. In Ägypten ist der Fall durch Filme und Theaterstücke so bekannt wie Jack the Ripper in England – und wie dort blieben die Namen der Täterinnen, nicht die der Getöteten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1921,
    "titel": "Landru – verurteilt ohne Leichen",
    "text": "In Versailles wird Henri Désiré Landru wegen der Ermordung von zehn Frauen, meist Kriegswitwen aus Heiratsanzeigen, und des Sohnes einer von ihnen verurteilt. Leichen wurden nie gefunden, nur Knochenreste, die niemandem zugeordnet werden konnten. Das wichtigste Beweisstück war ein Notizbuch, in dem er Kontakte zu 283 Frauen und seine Ausgaben verzeichnet hatte; viele der Frauen wurden lebend ausfindig gemacht. Die Geschworenen urteilten mit Mehrheit. Der Fall ist ein frühes Beispiel für eine Verurteilung allein auf Indizien.",
    "seit": "2026-10-01"
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
    "jahr": 1942,
    "titel": "Goyo Cárdenas und die Resozialisierung",
    "text": "In Mexiko-Stadt gesteht der Chemiestudent Gregorio Cárdenas die Tötung von vier jungen Frauen. Der Fall erregt landesweit Aufsehen; Cárdenas verbringt über drei Jahrzehnte im Gefängnis Lecumberri, wo er Jura studiert, heiratet und Bücher schreibt. 1976 wird er begnadigt und im Kongress als Beispiel gelungener Resozialisierung gefeiert; danach arbeitet er als Anwalt. Der Fall ist die Gegenposition zur Lehre vom geborenen Verbrecher – und zugleich politische Inszenierung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Zweiundvierzigtausend Abdrücke",
    "text": "Nach dem Mord an einem Kind im Krankenhaus von Blackburn nimmt die Polizei die Fingerabdrücke praktisch aller erwachsenen Männer der Stadt und findet nach Monaten eine Übereinstimmung. Es ist die erste Massenerfassung dieser Art und der Vorläufer der späteren DNA-Reihenuntersuchungen. Die Abdrücke wurden nach dem Verfahren vernichtet – eine Zusage, die für die Akzeptanz entscheidend war und bei heutigen Datenbanken so nicht mehr gilt."
   },
   {
    "jahr": 1948,
    "titel": "Der Teigin-Fall",
    "text": "In einer Tokioter Bankfiliale gibt ein Mann, der sich als Gesundheitsbeamter ausgibt, den Anwesenden ein vorgebliches Mittel gegen die Ruhr; zwölf Menschen sterben. Verurteilt wird der Maler Sadamichi Hirasawa, der nach langen Verhören gestanden und dann widerrufen hatte – bis 1949 genügte in Japan das Geständnis als Beweis. Kein Justizminister unterschrieb das Todesurteil, Hirasawa starb 1987 nach fast vier Jahrzehnten Haft. Der Autor Seichō Matsumoto vermutete einen Täter aus dem Umfeld der Einheit 731; Wiederaufnahmeanträge scheiterten.",
    "seit": "2026-10-01"
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
 },
 {
  "id": "kalter-krieg",
  "titel": "Kalter Krieg – Blöcke, Putsche, verdeckte Operationen",
  "kurz": "Vierzig Jahre Konfrontation ohne direkten Krieg der Supermächte — und mit umso mehr Umstürzen, Interventionen und Stellvertreterkriegen anderswo.",
  "einleitung": "Kalt war der Kalte Krieg nur in Europa und nur zwischen den beiden Supermächten selbst. Dort sicherten Atomwaffen, Bündnisse und eine bewachte Grenze vier Jahrzehnte lang einen angespannten Frieden. Anderswo führten beide Seiten ihren Konflikt mit anderen Mitteln: Die Sowjetunion hielt ihr Imperium in Osteuropa mit Panzern zusammen, die USA stürzten oder stützten Regierungen in Iran, Lateinamerika, Afrika und Asien, beide finanzierten Parteien, Guerillas und Armeen. Vieles davon war jahrzehntelang geheim. Seit den 1970er Jahren haben Untersuchungsausschüsse, freigegebene amerikanische Akten und nach 1991 sowjetische und osteuropäische Archive einen großen Teil offengelegt. Dieser Querschnitt folgt beiden Linien – der großen Politik der Blöcke und den verdeckten Operationen – und nennt jeweils, worauf sich das Wissen stützt.",
  "stationen": [
   {
    "jahr": 1945,
    "titel": "Jalta: Absprachen statt Teilung",
    "text": "Im Februar 1945 treffen sich Roosevelt, Churchill und Stalin auf der Krim. Vereinbart werden die Besatzung Deutschlands, die Westverschiebung Polens, der sowjetische Kriegseintritt gegen Japan und die Gründung der Vereinten Nationen; eine Erklärung verspricht den befreiten Ländern freie Wahlen. Die verbreitete Vorstellung, in Jalta sei Europa aufgeteilt worden, ist eine Legende: Die spätere Grenze folgte im Wesentlichen den Linien, an denen die Armeen standen, und Stalin hielt sich an das Wahlversprechen nicht.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1945,
    "titel": "Potsdam und die Bombe",
    "text": "In Potsdam regeln die Siegermächte im Sommer 1945 Besatzungszonen, Reparationen und die vorläufige Oder-Neiße-Grenze. Am Rand der Konferenz deutet Truman Stalin eine neue Waffe von ungewöhnlicher Zerstörungskraft an; Stalin war durch Spionage längst informiert. Wenige Tage später fallen die Bomben auf Hiroshima und Nagasaki. Ob die USA sie auch einsetzten, um Moskau zu beeindrucken, ist eine der ältesten Streitfragen der Forschung, seit Gar Alperovitz 1965 von Atomdiplomatie sprach.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1946,
    "titel": "Langes Telegramm und Eiserner Vorhang",
    "text": "Im Februar 1946 kabelt der US-Diplomat George F. Kennan aus Moskau eine Analyse, nach der die Sowjetunion aus innerer Unsicherheit expandiere und nur durch beharrliche Gegenwehr einzudämmen sei – der Ursprung der Containment-Politik. Wenige Wochen später spricht Churchill in Fulton, Missouri, vom Eisernen Vorhang von Stettin bis Triest. Das sowjetische Gegenstück ist ein Bericht des Botschafters Nikolai Nowikow vom September 1946, der den USA Streben nach Weltherrschaft unterstellt; er wurde erst 1990 veröffentlicht.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1947,
    "titel": "Die Sowjetisierung Osteuropas",
    "text": "Zwischen 1945 und 1948 übernehmen kommunistische Parteien unter dem Schutz der Roten Armee schrittweise die Macht. In Rumänien erzwingt der sowjetische Vizeaußenminister Wyschinski 1945 eine kommunistisch geführte Regierung; in Polen werden die Wahlen vom Januar 1947 gefälscht; in Ungarn verliert die Partei der Kleinlandwirte trotz absoluter Mehrheit von 1945 Stück für Stück ihre Führung, ihr Generalsekretär Béla Kovács wird 1947 vom sowjetischen Geheimdienst verhaftet. In Bulgarien wird der Oppositionsführer Nikola Petkow im September 1947 hingerichtet.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1947,
    "titel": "Die Truman-Doktrin",
    "text": "Als Großbritannien im Februar 1947 erklärt, Griechenland und die Türkei nicht länger stützen zu können, bittet Truman den Kongress um 400 Millionen Dollar und verkündet, die USA würden freie Völker gegen Unterwerfung durch bewaffnete Minderheiten oder äußeren Druck unterstützen. In Griechenland tobte ein Bürgerkrieg, den die Kommunisten 1949 verloren. Die später geöffneten Archive zeigen, dass Stalin die griechischen Kommunisten eher bremste; ihre Hilfe kam vor allem aus Jugoslawien. Die Doktrin machte aus einer regionalen Krise einen globalen Auftrag.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1947,
    "titel": "Marshallplan und Kominform",
    "text": "Im Juni 1947 bietet Außenminister George C. Marshall Europa Wiederaufbauhilfe an; bis 1952 fließen über 13 Milliarden Dollar, gekoppelt an Zusammenarbeit der Empfänger. Molotow verlässt die Pariser Verhandlungen, die Tschechoslowakei muss ihre bereits erklärte Teilnahme auf Druck Stalins zurückziehen. Im September gründet Moskau das Kominform, dessen Sprecher Andrei Schdanow die Welt in zwei Lager teilt. Wie viel die Hilfe wirtschaftlich bewirkte, ist umstritten; politisch band sie Westeuropa an die USA.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Der Prager Februarumsturz",
    "text": "Die Tschechoslowakei war das einzige Land Ostmitteleuropas, in dem die Kommunisten 1946 in freien Wahlen stärkste Partei wurden, mit rund 38 Prozent. Im Februar 1948 treten zwölf nichtkommunistische Minister zurück, um eine Regierungskrise zu erzwingen; die Kommunisten mobilisieren Aktionskomitees, Volksmilizen und Polizei, und Präsident Beneš ernennt am 25. Februar eine von ihnen beherrschte Regierung. Zwei Wochen später liegt Außenminister Jan Masaryk tot unter seinem Fenster; ob Selbstmord oder Mord, ist bis heute nicht geklärt.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Die italienische Wahl und die erste CIA-Aktion",
    "text": "Vor der Parlamentswahl im April 1948 fürchtet Washington einen Sieg der Volksfront aus Kommunisten und Sozialisten. Der Nationale Sicherheitsrat genehmigt im Dezember 1947 verdeckte psychologische Operationen; die gerade gegründete CIA finanziert Christdemokraten und Presse, nach dem Bericht des Church Committee eine der ersten großen verdeckten Aktionen. Die Democrazia Cristiana gewinnt rund 48 Prozent. Umgekehrt finanzierte Moskau die italienischen Kommunisten über Jahrzehnte; das belegen nach 1991 zugänglich gewordene Parteiakten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Der Bruch zwischen Tito und Stalin",
    "text": "Im Juni 1948 schließt das Kominform die jugoslawischen Kommunisten aus. Tito hatte eine eigenständige Politik auf dem Balkan betrieben und sich Moskaus Kontrolle entzogen. Es ist der erste Riss im Ostblock: Stalin erwägt Gegenmaßnahmen, doch Jugoslawien überlebt und erhält ab 1949 Wirtschafts- und ab 1951 auch Militärhilfe aus dem Westen. In Osteuropa folgt eine Jagd auf angebliche Titoisten, in Jugoslawien selbst werden vermutete Stalin-Anhänger im Lager auf der Insel Goli Otok interniert.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1948,
    "titel": "Berlin-Blockade und Luftbrücke",
    "text": "Nach der Währungsreform in den Westzonen sperrt die Sowjetunion ab dem 24. Juni 1948 alle Land- und Wasserwege nach West-Berlin. Die Westmächte versorgen die Stadt aus der Luft. Im Mai 1949 hebt Moskau die Blockade nach fast elf Monaten auf, ohne sein Ziel erreicht zu haben; die Luftbrücke läuft noch bis September weiter und bringt insgesamt rund 2,3 Millionen Tonnen Güter in die Stadt. Dutzende Flieger und Helfer kommen bei Unfällen ums Leben. Die Krise beschleunigt, was sie verhindern sollte: die Gründung eines westdeutschen Staates und eines westlichen Bündnisses.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1949,
    "titel": "NATO und zwei deutsche Staaten",
    "text": "Am 4. April 1949 gründen zwölf Staaten in Washington die NATO; Artikel 5 erklärt einen Angriff auf ein Mitglied zum Angriff auf alle. Für die USA ist es das erste Militärbündnis in Friedenszeiten seit dem Ende der Allianz mit Frankreich 1800. Im Mai tritt das Grundgesetz in Kraft, im Oktober wird die DDR gegründet. Die Teilung Deutschlands, die keine der Mächte 1945 offiziell geplant hatte, ist damit staatlich festgeschrieben – zunächst von beiden Seiten als Provisorium erklärt.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1949,
    "titel": "Die sowjetische Bombe und Maos Sieg",
    "text": "Am 29. August 1949 zündet die Sowjetunion in Semipalatinsk ihre erste Atombombe, Jahre früher als in Washington erwartet. Ihre Konstruktion folgte weitgehend der amerikanischen Plutoniumbombe, deren Pläne unter anderem Klaus Fuchs verraten hatte; wie viel Zeit die Spionage tatsächlich sparte, ist umstritten. Am 1. Oktober ruft Mao Zedong die Volksrepublik China aus. Binnen Wochen hat der Westen sein Atommonopol verloren und das bevölkerungsreichste Land der Welt ist kommunistisch geworden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "McCarthy und die Angst vor dem inneren Feind",
    "text": "Im Februar 1950 behauptet Senator Joseph McCarthy, er habe eine Liste von Kommunisten im Außenministerium. Es folgen Anhörungen, Loyalitätsprüfungen und schwarze Listen, die Tausende Karrieren beenden; 1954 rügt der Senat McCarthy. Die 1995 freigegebenen Venona-Entschlüsselungen zeigen, dass es in den 1940er Jahren tatsächlich ein umfangreiches sowjetisches Spionagenetz in den USA gab, unter anderem um Julius Rosenberg. McCarthys konkrete Anschuldigungen trafen aber überwiegend Unbeteiligte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "Koreakrieg und NSC-68",
    "text": "Am 25. Juni 1950 greift Nordkorea den Süden an. Sowjetische Akten zeigen, dass Stalin dem Plan Kim Il-sungs im Frühjahr 1950 zugestimmt hatte. Die USA führen eine UN-Truppe an, nachdem die Sowjetunion den Sicherheitsrat boykottiert; im Herbst greift China ein. Das Strategiepapier NSC-68 hatte bereits eine massive Aufrüstung gefordert, nun wird sie bewilligt. Der Krieg endet 1953 mit einem Waffenstillstand nahe der Ausgangslinie. Die Encyclopaedia Britannica nennt mindestens 2,5 Millionen Tote, andere Schätzungen liegen deutlich höher; ein großer Teil davon waren Zivilisten.",
    "vertiefung": "koreakrieg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1952,
    "titel": "Schauprozesse im Ostblock",
    "text": "Nach dem Bruch mit Tito sucht Moskau Verräter in den eigenen Reihen. In Budapest wird 1949 der frühere Innenminister László Rajk nach erfolterten Geständnissen hingerichtet, in Sofia Traitscho Kostow. Im Prager Slánský-Prozess vom November 1952 werden elf von vierzehn Angeklagten zum Tod verurteilt; elf der Angeklagten waren jüdischer Herkunft, und die Anklage trug offen antisemitische Züge. Die meisten Verurteilten wurden nach Stalins Tod rehabilitiert, Rajk bereits 1956.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1953,
    "titel": "Stalins Tod und der 17. Juni",
    "text": "Stalin stirbt am 5. März 1953; die neue Führung lockert, ohne Kurs zu haben. In der DDR wird eine Erhöhung der Arbeitsnormen nicht zurückgenommen, am 16. Juni legen Bauarbeiter in Ost-Berlin die Arbeit nieder. Am 17. Juni kommt es nach Zählung der Bundeszentrale für politische Bildung in rund 700 Orten zu Streiks und Protesten. Sowjetische Panzer schlagen den Aufstand nieder; eine Studie von Edda Ahrberg, Hans-Hermann Hertle und Tobias Hollitzer (2004) zählt mindestens 55 Tote, ältere Angaben lagen deutlich höher. Der Westen greift nicht ein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1953,
    "titel": "Iran: Der Sturz Mossadeghs",
    "text": "Ministerpräsident Mohammad Mossadegh hatte 1951 die britisch beherrschte Ölindustrie verstaatlicht. Großbritannien antwortet mit einem Boykott und gewinnt die USA für einen Umsturz. Nach einem gescheiterten ersten Versuch stürzen am 19. August 1953 Militär und bezahlte Demonstranten Mossadegh, der Schah kehrt zurück. Im August 2013 veröffentlichte das National Security Archive eine interne CIA-Geschichte, die den Putsch als unter Leitung der CIA durchgeführt bezeichnet; 2017 folgte ein ergänzender FRUS-Aktenband. Strittig bleibt das Gewicht iranischer Akteure wie Geistlichkeit und Armee.",
    "vertiefung": "sturz-schah",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1954,
    "titel": "Guatemala: Operation PBSUCCESS",
    "text": "Präsident Jacobo Árbenz enteignete mit dem Dekret 900 von 1952 ungenutztes Großgrundeigentum, auch Land der United Fruit Company. Die Eisenhower-Regierung sah darin kommunistischen Einfluss und organisierte über die CIA einen Umsturz: eine kleine Exilarmee unter Carlos Castillo Armas, einen Propagandasender und Luftangriffe. Am 27. Juni 1954 tritt Árbenz zurück, weil die Armee nicht kämpft. Die CIA gab 1997 rund 1.400 Seiten dazu frei. Im späteren Bürgerkrieg wurden nach der Wahrheitskommission von 1999 über 200.000 Menschen getötet oder verschwanden, ganz überwiegend durch staatliche Kräfte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1955,
    "titel": "Warschauer Pakt",
    "text": "Am 9. Mai 1955 wird die Bundesrepublik Mitglied der NATO, am 14. Mai gründen die Sowjetunion und sieben osteuropäische Staaten in Warschau ihr Bündnis. Militärisch bestätigte es die ohnehin stationierten sowjetischen Truppen, politisch war es auch Verhandlungsmasse: Moskau bot wiederholt an, beide Blöcke aufzulösen. Einen Tag nach der Gründung wird der österreichische Staatsvertrag unterzeichnet, der Österreich gegen die Zusage der Neutralität die volle Souveränität zurückgibt.",
    "vertiefung": "kalter-krieg-entsteht",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1955,
    "titel": "Bandung und die Blockfreien",
    "text": "Im April 1955 treffen sich in Bandung Vertreter von 29 asiatischen und afrikanischen Staaten, darunter Nehru, Nasser, Sukarno und Zhou Enlai. Sie verurteilen Kolonialismus und wollen sich keinem Block unterordnen. 1961 entsteht in Belgrad die Bewegung der Blockfreien. Für beide Supermächte wird die sogenannte Dritte Welt zum eigentlichen Schauplatz der Konkurrenz: Hier wird um Regierungen geworben, hier werden sie gestürzt, und hier sterben die meisten Opfer des Kalten Krieges.",
    "vertiefung": "bandung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1956,
    "titel": "Die Geheimrede",
    "text": "Am 25. Februar 1956 rechnet Nikita Chruschtschow auf dem XX. Parteitag der KPdSU in einer geschlossenen Sitzung mit Stalins Verbrechen an Parteimitgliedern ab; die Opfer anderer Gruppen bleiben weitgehend unerwähnt. Washington beschafft den Text, nach verbreiteter Darstellung über den israelischen Geheimdienst; Anfang Juni gibt das US-Außenministerium ihn frei, und die New York Times druckt ihn ab. Die Rede erschüttert die kommunistischen Parteien weltweit. In Polen führt der Aufstand von Posen im Juni zu Dutzenden Toten und im Oktober zur Rückkehr Władysław Gomułkas.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1956,
    "titel": "Der Ungarische Volksaufstand",
    "text": "Am 23. Oktober 1956 wird eine Studentendemonstration in Budapest zum Aufstand. Imre Nagy bildet eine Regierung, erklärt am 1. November den Austritt aus dem Warschauer Pakt und die Neutralität. Die Protokolle des sowjetischen Präsidiums zeigen, dass Moskau bereits am 31. Oktober die Niederschlagung beschlossen hatte; am 4. November rücken die Truppen ein. Etwa 2.500 Ungarn und rund 700 sowjetische Soldaten sterben, etwa 200.000 Menschen fliehen. Nagy wird 1958 hingerichtet. Radio Free Europe wurde vorgeworfen, Hoffnung auf westliche Hilfe geweckt zu haben, die nie kam.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1957,
    "titel": "Sputnik",
    "text": "Am 4. Oktober 1957 bringt die Sowjetunion den ersten künstlichen Satelliten in eine Umlaufbahn. Die Rakete, die ihn trägt, ist eine Interkontinentalrakete – die USA sind erstmals direkt erreichbar. In Washington folgen Bildungsprogramme, die Gründung der NASA und die Rede von einer Raketenlücke, mit der Kennedy 1960 Wahlkampf macht. Aufklärungsflüge und Satellitenbilder zeigten bald, dass die Lücke in Wirklichkeit zugunsten der USA bestand.",
    "vertiefung": "mondlandung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Der Abschuss der U-2",
    "text": "Seit 1956 überfliegen amerikanische U-2-Spionageflugzeuge die Sowjetunion. Am 1. Mai 1960 wird eine Maschine bei Swerdlowsk abgeschossen, der Pilot Francis Gary Powers überlebt. Washington behauptet zunächst, es handle sich um ein Wetterflugzeug, und wird von Chruschtschow bloßgestellt, der Wrack und Pilot präsentiert. Der Pariser Gipfel platzt. Zuvor hatte Chruschtschow mit seinem Berlin-Ultimatum vom November 1958 den Abzug der Westmächte gefordert. Powers wird 1962 auf der Glienicker Brücke gegen den Sowjetspion Rudolf Abel ausgetauscht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Kongo: Der Mord an Lumumba",
    "text": "Der Kongo wird am 30. Juni 1960 von Belgien unabhängig, Patrice Lumumba Ministerpräsident. Katanga spaltet sich mit belgischer Unterstützung ab, Lumumba bittet die Sowjetunion um Hilfe. Nach dem Church Committee von 1975 bezeichnete CIA-Direktor Dulles seine Beseitigung als dringendes Ziel, und ein CIA-Chemiker brachte Gift in den Kongo, das nicht eingesetzt wurde. Im Januar 1961 wird Lumumba nach Katanga ausgeliefert und im Beisein belgischer Offiziere erschossen. Eine belgische Parlamentskommission stellte 2001 eine moralische Verantwortung der damaligen Regierung fest; Belgien entschuldigte sich 2002.",
    "vertiefung": "dekolonisation",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1961,
    "titel": "Die Schweinebucht",
    "text": "Am 17. April 1961 landen rund 1.400 von der CIA ausgebildete Exilkubaner in der Schweinebucht. Die Operation war unter Eisenhower geplant und unter Kennedy genehmigt worden; der erwartete Volksaufstand bleibt aus, nach drei Tagen sind über tausend Mann gefangen. Ein interner Bericht des CIA-Generalinspekteurs, 1998 freigegeben, wirft dem Dienst Selbsttäuschung und schlechte Planung vor. Es folgt die Operation Mongoose; das Church Committee dokumentierte mindestens acht Mordpläne gegen Fidel Castro zwischen 1960 und 1965, teils unter Beteiligung der Mafia.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1961,
    "titel": "Der Mauerbau",
    "text": "Seit 1949 hatten rund 2,7 Millionen Menschen die DDR verlassen, die meisten über West-Berlin. In der Nacht zum 13. August 1961 riegeln Volkspolizei und Kampfgruppen die Sektorengrenze ab, mit Zustimmung Chruschtschows. Die Westmächte protestieren, greifen aber nicht ein, weil ihre eigenen Rechte in West-Berlin unangetastet bleiben. Im Oktober stehen sich am Checkpoint Charlie amerikanische und sowjetische Panzer gegenüber. Nach Forschungen des Zentrums für Zeithistorische Forschung und der Gedenkstätte Berliner Mauer starben an der Mauer mindestens 140 Menschen.",
    "vertiefung": "mauerbau",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1962,
    "titel": "Die Kubakrise",
    "text": "Im Oktober 1962 entdecken amerikanische Aufklärungsflüge sowjetische Mittelstreckenraketen auf Kuba. Kennedy verhängt eine Seeblockade, dreizehn Tage lang steht die Welt näher am Atomkrieg als je zuvor. Die Lösung: Abzug der Raketen gegen die Zusage, Kuba nicht anzugreifen, und einen geheim gehaltenen Abzug amerikanischer Jupiter-Raketen aus der Türkei. Erst nach 1991 wurde bekannt, dass auf der Insel auch taktische Atomwaffen lagen, von denen Washington nichts wusste.",
    "vertiefung": "kubakrise",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1963,
    "titel": "Heißer Draht und Teststopp",
    "text": "Die Kubakrise hatte gezeigt, wie langsam die Kommunikation zwischen Moskau und Washington war. Im Juni 1963 vereinbaren beide eine direkte Fernschreibverbindung, den sogenannten heißen Draht. Am 5. August unterzeichnen die USA, die Sowjetunion und Großbritannien in Moskau den Vertrag über das Verbot von Kernwaffenversuchen in der Atmosphäre, im Weltraum und unter Wasser. Unterirdische Tests bleiben erlaubt, Frankreich und China treten nicht bei. 1968 folgt der Atomwaffensperrvertrag.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1964,
    "titel": "Brasilien: Der Putsch gegen Goulart",
    "text": "Ende März 1964 stürzt das Militär den linksgerichteten Präsidenten João Goulart. Der Putsch war ein brasilianisches Unternehmen, doch Washington unterstützte ihn: Freigegebene Telegramme von Botschafter Lincoln Gordon und Unterlagen der Johnson-Bibliothek belegen die Operation Brother Sam, bei der ein Flottenverband und Treibstoff für die Putschisten bereitstanden, falls es zum Bürgerkrieg käme. Sie wurde nicht gebraucht. Die Militärdiktatur dauerte bis 1985; die Nationale Wahrheitskommission zählte 2014 434 Tote und Verschwundene.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1965,
    "titel": "Vietnam wird ein amerikanischer Krieg",
    "text": "Nach der Teilung Vietnams 1954 stützen die USA den Süden gegen einen von Hanoi unterstützten Aufstand. Im August 1964 dient ein Zwischenfall im Golf von Tonkin als Begründung für eine Ermächtigung durch den Kongress; eine 2005 freigegebene Studie des NSA-Historikers Robert Hanyok zeigt, dass der zweite gemeldete Angriff nicht stattfand. Ab 1965 kommen Bodentruppen, 1969 sind es über eine halbe Million. Die Sowjetunion und China liefern dem Norden Waffen. Über 58.000 US-Soldaten sterben; die Schätzungen der vietnamesischen Toten reichen von knapp einer Million (demografische Studie um Charles Hirschman, 1995, für 1965–1975) bis über drei Millionen (Angabe der vietnamesischen Regierung von 1995, für 1955–1975).",
    "vertiefung": "tet-offensive",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1965,
    "titel": "Indonesien: Die Massenmorde",
    "text": "In der Nacht zum 1. Oktober 1965 ermorden Offiziere der Bewegung 30. September sechs Generäle. Die Armee unter Suharto macht die Kommunistische Partei verantwortlich und organisiert mit Milizen deren Vernichtung. Die meisten Schätzungen nennen 500.000 bis eine Million Tote, Hunderttausende werden ohne Prozess interniert. Freigegebene Akten, vor allem 2017 veröffentlichte Telegramme der US-Botschaft, belegen, dass Washington über die Morde unterrichtet war und die Armee politisch und materiell unterstützte; Botschaftsangehörige gaben Namenslisten von Kommunisten weiter.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1967,
    "titel": "Griechenland: Die Obristen",
    "text": "Am 21. April 1967, Wochen vor einer Wahl, putschen Obristen um Georgios Papadopoulos und nutzen dafür einen NATO-Notfallplan. Folter politischer Gefangener wurde von der Europäischen Menschenrechtskommission dokumentiert; Griechenland trat 1969 aus dem Europarat aus, um dem Ausschluss zuvorzukommen. Ob die USA den Putsch förderten, ist nicht belegt, sie arbeiteten aber mit der Junta zusammen. Diese stürzte 1974 nach dem gescheiterten Putsch auf Zypern. Präsident Clinton räumte 1999 in Athen ein, die USA hätten den Kalten Krieg über die Demokratie gestellt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1968,
    "titel": "Der Prager Frühling",
    "text": "Unter Alexander Dubček versucht die tschechoslowakische Partei 1968 einen Sozialismus mit menschlichem Antlitz: Zensur fällt, Reformen werden diskutiert. In der Nacht zum 21. August marschieren Truppen der Sowjetunion, Polens, Ungarns und Bulgariens ein; die beiden bereitgestellten Divisionen der Nationalen Volksarmee wurden, wie der Militärhistoriker Rüdiger Wenzke und Akten des Bundesarchivs zeigen, in Reserve gehalten und überschritten die Grenze nicht. Ein Einladungsbrief tschechoslowakischer Hardliner, 1992 von Russland übergeben, lieferte den Vorwand. Bis Jahresende kommen nach der Zählung der Historiker Prokop Tomek und Ivo Pejčoch (2017) 137 Tschechoslowaken durch die Besatzung ums Leben; frühere Angaben lagen bei 108. Die Breschnew-Doktrin erklärt die Souveränität sozialistischer Staaten für begrenzt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1970,
    "titel": "Chile: Track II",
    "text": "Am 4. September 1970 gewinnt Salvador Allende die Präsidentschaftswahl mit relativer Mehrheit. Elf Tage später weist Nixon CIA-Direktor Helms an, seine Amtsübernahme zu verhindern; Helms notierte, die Wirtschaft solle zum Schreien gebracht werden. Neben politischem Druck (Track I) sucht die CIA Offiziere für einen Putsch (Track II). Bei einem Entführungsversuch einer Gruppe, mit der die CIA in Kontakt stand, wird Armeechef René Schneider im Oktober tödlich verletzt. Belegt ist das durch das Church Committee 1975 und den Hinchey-Bericht der US-Geheimdienste von 2000.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1970,
    "titel": "Neue Ostpolitik",
    "text": "Die Regierung Brandt erkennt die Lage in Europa faktisch an, um sie zu verändern – Wandel durch Annäherung, wie Egon Bahr 1963 formuliert hatte. Im August 1970 folgt der Moskauer Vertrag, im Dezember der Warschauer Vertrag mit Brandts Kniefall am Ghettodenkmal, 1971 das Viermächteabkommen über Berlin, 1972 der Grundlagenvertrag mit der DDR. Brandt erhält 1971 den Friedensnobelpreis. Ob die Ostpolitik das SED-Regime stabilisierte oder seine Auflösung vorbereitete, ist bis heute umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1972,
    "titel": "Nixon in Peking, SALT in Moskau",
    "text": "Seit den Grenzkämpfen am Ussuri 1969 sind China und die Sowjetunion offen verfeindet. Nixon nutzt das: Im Februar 1972 reist er nach Peking, im Mai unterzeichnet er in Moskau mit Breschnew den ersten Vertrag zur Begrenzung strategischer Waffen und den ABM-Vertrag gegen Raketenabwehr. Die Entspannung beruht auf dem Gedanken, dass gegenseitige Verwundbarkeit stabilisiert. Sie bleibt begrenzt: Die Rivalität verlagert sich in die Dritte Welt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1973,
    "titel": "Chile: Der 11. September",
    "text": "Zwischen 1970 und 1973 gab die CIA nach dem Church Committee rund acht Millionen Dollar gegen Allende aus, unter anderem für die Zeitung El Mercurio und Oppositionsparteien. Am 11. September 1973 putscht das Militär, die Moneda wird bombardiert, Allende nimmt sich das Leben. Der Hinchey-Bericht von 2000 kommt zu dem Schluss, die CIA habe den Putsch nicht angestiftet, die Junta danach aber aktiv unterstützt. Die chilenischen Wahrheitskommissionen erkennen über 3.000 Tote und Verschwundene und rund 38.000 Opfer politischer Haft und Folter an.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1975,
    "titel": "Die Schlussakte von Helsinki",
    "text": "Am 1. August 1975 unterzeichnen 35 Staaten, darunter die USA und Kanada, die Schlussakte der Konferenz über Sicherheit und Zusammenarbeit in Europa. Moskau erhält die Anerkennung der Unverletzlichkeit der Grenzen, der Westen eine Verpflichtung auf Menschenrechte und freien Informationsaustausch. Was Breschnew für ein Papier hielt, wird zur Berufungsgrundlage: 1976 entsteht in Moskau eine Helsinki-Gruppe, 1977 in Prag die Charta 77. Viele Historiker sehen darin einen Keim des späteren Zusammenbruchs.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1975,
    "titel": "Angola und das Horn von Afrika",
    "text": "Nach dem Ende der portugiesischen Herrschaft kämpfen in Angola drei Bewegungen um die Macht. Die USA unterstützen FNLA und UNITA verdeckt, Südafrika marschiert ein; Kuba schickt ab November 1975 Tausende Soldaten für die MPLA. Die Auswertung kubanischer Akten durch Piero Gleijeses zeigt, dass Havanna aus eigenem Antrieb handelte und Moskau erst nachzog. 1977/78 helfen sowjetische Luftbrücke und kubanische Truppen Äthiopien im Krieg gegen Somalia. In Washington gilt das als Beweis, dass Moskau die Entspannung ausnutzt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1975,
    "titel": "Operation Condor",
    "text": "Im November 1975 vereinbaren auf Einladung des chilenischen Geheimdienstchefs Manuel Contreras die Dienste Chiles, Argentiniens, Uruguays, Paraguays und Boliviens eine Zusammenarbeit; Brasilien und später Peru und Ecuador schließen sich an. Oppositionelle werden über Grenzen hinweg verfolgt, entführt und ermordet, 1976 sogar in Washington der chilenische Exilpolitiker Orlando Letelier. 1992 werden in Paraguay die Archive des Terrors gefunden. Freigegebene US-Akten zeigen, dass Washington früh über Condor informiert war. 2016 verurteilte ein Gericht in Buenos Aires Beteiligte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1976,
    "titel": "Argentinien: Die Junta",
    "text": "Am 24. März 1976 übernimmt das Militär unter Jorge Videla die Macht. In geheimen Lagern wie der Marineschule ESMA werden Gefangene gefoltert und ermordet, viele aus Flugzeugen ins Meer geworfen. Die Kommission CONADEP dokumentierte 1984 knapp 9.000 Verschwundene, Menschenrechtsorganisationen schätzen bis zu 30.000. Nach einem freigegebenen Gesprächsprotokoll riet Kissinger dem argentinischen Außenminister im Oktober 1976, das Nötige schnell zu tun. Die Sowjetunion wiederum, wichtiger Getreidekäufer, schonte die Junta in UN-Menschenrechtsgremien.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1979,
    "titel": "Afghanistan",
    "text": "Nach dem kommunistischen Umsturz von 1978 bittet die Regierung in Kabul mehrfach um sowjetische Truppen; die Politbüro-Protokolle vom März 1979 zeigen, dass Moskau zunächst ablehnte. Im Dezember marschiert die Armee doch ein und lässt Staatschef Amin töten. Carter hatte bereits im Juli 1979 verdeckte Hilfe für die Mudschahedin genehmigt; daraus wird über Pakistan eines der größten CIA-Programme. Etwa 15.000 sowjetische Soldaten sterben, wie viele Afghanen starben, ist sehr unsicher: Eine Übersicht der US-amerikanischen National Academies (2001) hält für die 1980er und 1990er Jahre zwischen 200.000 und zwei Millionen kriegsbedingte zusätzliche Todesfälle für möglich. Eine direkte CIA-Förderung Osama bin Ladens ist nicht belegt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1979,
    "titel": "Der NATO-Doppelbeschluss",
    "text": "Ab 1976 stationiert die Sowjetunion neue Mittelstreckenraketen vom Typ SS-20, die Westeuropa, aber nicht die USA erreichen. Helmut Schmidt warnt 1977 vor einer Abkopplung Europas. Im Dezember 1979 beschließt die NATO, ab 1983 eigene Pershing II und Marschflugkörper aufzustellen, falls Verhandlungen scheitern. In der Bundesrepublik entsteht eine der größten Protestbewegungen ihrer Geschichte, 1981 demonstrieren in Bonn rund 300.000 Menschen. Der Bundestag stimmt im November 1983 der Stationierung zu. Dass die SED Teile der Friedensbewegung förderte, ist belegt, das Ausmaß strittig.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1980,
    "titel": "Solidarność",
    "text": "Im August 1980 streiken die Arbeiter der Danziger Leninwerft und erzwingen die Zulassung einer freien Gewerkschaft; Solidarność hat bald rund zehn Millionen Mitglieder. Am 13. Dezember 1981 verhängt General Jaruzelski das Kriegsrecht, Tausende werden interniert. Jaruzelski rechtfertigte das später mit einer drohenden sowjetischen Invasion; Protokolle des Politbüros vom Dezember 1981 zeigen jedoch, dass Moskau einen Einmarsch ablehnte. Die Reagan-Regierung unterstützte die Untergrund-Solidarność verdeckt, unter anderem mit Geld und Druckausrüstung; der Politikwissenschaftler Seth G. Jones hat das 2018 anhand freigegebener CIA-Unterlagen beschrieben.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1981,
    "titel": "Mittelamerika: Contras und Todesschwadronen",
    "text": "Im Dezember 1981 genehmigt Reagan verdeckte Hilfe für die Contras gegen die sandinistische Regierung Nicaraguas, die von Kuba und der Sowjetunion unterstützt wird. Die CIA vermint 1984 nicaraguanische Häfen; der Internationale Gerichtshof stellt 1986 fest, dass die USA damit Völkerrecht verletzt haben. In El Salvador stützen die USA die Regierung gegen die Guerilla. Die UN-Wahrheitskommission von 1993 schreibt die große Mehrheit der Gewaltverbrechen im Bürgerkrieg mit rund 75.000 Toten staatlichen Kräften und Todesschwadronen zu, darunter das Massaker von El Mozote.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1983,
    "titel": "Grenada",
    "text": "Im Oktober 1983 wird Grenadas linker Regierungschef Maurice Bishop von einer rivalisierenden Fraktion seiner eigenen Partei ermordet. Sechs Tage später landen US-Truppen, gestützt auf ein Hilfeersuchen karibischer Nachbarstaaten; sie treffen auch auf kubanische Bauarbeiter und Soldaten. Die Regierung Reagan begründet den Einsatz mit der Sicherheit amerikanischer Medizinstudenten und der kubanischen Präsenz. Die UN-Generalversammlung bedauert die Intervention mit großer Mehrheit als Verletzung des Völkerrechts, und selbst Margaret Thatcher hatte widersprochen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1983,
    "titel": "Able Archer",
    "text": "1983 ist das gefährlichste Jahr seit Kuba: Reagan nennt die Sowjetunion ein Reich des Bösen und kündigt ein Raketenabwehrprogramm an, im September wird ein koreanisches Verkehrsflugzeug abgeschossen, 269 Menschen sterben. Wenig später meldet ein sowjetisches Frühwarnsystem fälschlich Raketenstarts; Oberstleutnant Stanislaw Petrow hält es für einen Fehlalarm. Im November übt die NATO mit Able Archer die Freigabe von Atomwaffen. Ein 2015 freigegebener Bericht eines Beratergremiums des US-Präsidenten von 1990 kommt zu dem Schluss, man habe die Beziehungen womöglich unbeabsichtigt in höchste Alarmbereitschaft versetzt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1985,
    "titel": "Gorbatschow",
    "text": "Im März 1985 wird Michail Gorbatschow Generalsekretär der KPdSU. Mit Glasnost und Perestroika will er das System retten, nicht abschaffen. Die Gipfel mit Reagan in Genf 1985 und Reykjavík 1986 scheitern zunächst an der Raketenabwehr, führen aber 1987 zum INF-Vertrag, der erstmals eine ganze Waffengattung abschafft. Vor den Vereinten Nationen kündigt Gorbatschow im Dezember 1988 einseitige Truppenreduzierungen an und erkennt die freie Wahl jedes Volkes an – das stillschweigende Ende der Breschnew-Doktrin.",
    "vertiefung": "ende-kalter-krieg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1985,
    "titel": "Operation INFEKTION",
    "text": "Ab 1983 verbreitet der KGB die Behauptung, das Aids-Virus sei in einem US-Militärlabor entwickelt worden. Ausgangspunkt war ein anonymer Brief in einer indischen Zeitung, 1985 griff eine sowjetische Literaturzeitung die Geschichte auf, die Auslandsaufklärung der Stasi half bei der Verbreitung. Die Behauptung erschien in Dutzenden Ländern und ist bis heute im Umlauf. 1992 räumte der russische Auslandsgeheimdienstchef Jewgeni Primakow die Beteiligung des KGB ein. Die Kampagne ist ein gut dokumentiertes Beispiel sowjetischer aktiver Maßnahmen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1986,
    "titel": "Die Iran-Contra-Affäre",
    "text": "Ab 1985 verkauft die Reagan-Regierung trotz Embargo Waffen an Iran, zunächst über Israel, um Geiseln im Libanon freizubekommen. Mitarbeiter des Nationalen Sicherheitsrats um Oliver North leiten Erlöse an die Contras weiter, obwohl der Kongress deren Unterstützung verboten hatte. Im November 1986 macht eine libanesische Zeitschrift die Waffenlieferungen öffentlich. Tower-Kommission, Kongress und ein Sonderermittler untersuchen die Affäre; elf Beteiligte werden verurteilt, zwei Urteile im Berufungsverfahren aufgehoben, Präsident Bush begnadigt 1992 sechs Personen, zwei davon noch vor ihrem Prozess.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "Das Jahr der Revolutionen",
    "text": "In Polen führen Gespräche am Runden Tisch zu halbfreien Wahlen im Juni 1989, die Solidarność fast vollständig gewinnt; im August wird Tadeusz Mazowiecki Regierungschef. Ungarn baut ab Mai den Grenzzaun ab und öffnet im September die Grenze für DDR-Bürger. Am 9. Oktober demonstrieren in Leipzig rund 70.000 Menschen, ohne dass geschossen wird. Im November folgt die Samtene Revolution in Prag. Nur in Rumänien endet der Umsturz gewaltsam, mit über tausend Toten und der Hinrichtung Ceaușescus. Moskau greift nirgends ein.",
    "vertiefung": "ende-kalter-krieg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "Der Mauerfall",
    "text": "Am Abend des 9. November 1989 verkündet SED-Funktionär Günter Schabowski auf einer Pressekonferenz eine neue Reiseregelung und antwortet auf die Frage nach dem Inkrafttreten: sofort, unverzüglich. Tausende ziehen zu den Grenzübergängen, an der Bornholmer Straße öffnet der diensthabende Offizier gegen 23.30 Uhr die Schlagbäume. Niemand hatte die Öffnung so geplant. Die sowjetischen Truppen in der DDR bleiben in den Kasernen.",
    "vertiefung": "mauerfall",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1990,
    "titel": "Die deutsche Einheit",
    "text": "Nach der ersten freien Volkskammerwahl im März 1990 folgen Währungsunion und Einigungsvertrag. Im Zwei-plus-Vier-Vertrag vom 12. September verzichten die Siegermächte auf ihre Rechte, das vereinte Deutschland bleibt in der NATO und begrenzt die Bundeswehr auf 370.000 Mann. Am 3. Oktober tritt die DDR der Bundesrepublik bei. Ob westliche Politiker Gorbatschow mündlich zusagten, die NATO werde sich nicht nach Osten ausdehnen, ist bis heute einer der großen Streitpunkte; schriftlich festgehalten wurde eine solche Zusage nicht.",
    "vertiefung": "wiedervereinigung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1990,
    "titel": "Gladio wird bekannt",
    "text": "Im Oktober 1990 bestätigt Italiens Ministerpräsident Giulio Andreotti vor dem Parlament eine geheime Organisation namens Gladio, die seit 1956 auf Grundlage einer Absprache mit der CIA für den Fall einer sowjetischen Besetzung Waffenlager und Kämpfer bereithielt. Ähnliche Stay-behind-Netze der NATO-Staaten existierten in vielen Ländern, auch in der Bundesrepublik; Belgien und die Schweiz untersuchten sie parlamentarisch, das Europäische Parlament forderte Aufklärung. Ob Gladio-Strukturen an rechtsextremen Anschlägen beteiligt waren, ist nicht belegt und bleibt umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1990,
    "titel": "RAF-Aussteiger in der DDR",
    "text": "Im Juni 1990 nimmt die Polizei in der noch bestehenden DDR zehn ehemalige Mitglieder der Roten Armee Fraktion fest, darunter Susanne Albrecht. Die meisten von ihnen hatten seit 1980 mit Hilfe der Staatssicherheit unter neuen Identitäten in der DDR gelebt. Die Aufnahme war ein Geschäft auf Gegenseitigkeit: Die Stasi bot Schutz, die Aussteiger blieben außer Reichweite der westdeutschen Justiz. Wie weit der Einfluss der Stasi auf die RAF insgesamt reichte, ist nach Darstellung der Bundeszentrale für politische Bildung bis heute nicht umfassend geklärt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1991,
    "titel": "Das Ende der Sowjetunion",
    "text": "Im Juli 1991 löst sich der Warschauer Pakt auf. Im August versuchen Hardliner in Moskau, Gorbatschow abzusetzen; der Putsch scheitert nach drei Tagen am Widerstand um Boris Jelzin. Im Dezember stimmt die Ukraine mit großer Mehrheit für die Unabhängigkeit, die Präsidenten Russlands, der Ukraine und Belarus erklären die Sowjetunion für aufgelöst. Am 25. Dezember tritt Gorbatschow zurück, die rote Fahne wird über dem Kreml eingeholt. Der Kalte Krieg endet ohne Krieg zwischen den Supermächten – in vielen anderen Ländern hatte er Millionen Tote gefordert.",
    "vertiefung": "ende-kalter-krieg",
    "seit": "2026-10-01"
   }
  ],
  "strittig": "Wer den Kalten Krieg begann, ist die älteste Streitfrage. Die orthodoxe Schule der 1940er und 1950er Jahre sah die Ursache in sowjetischem Expansionsdrang und kommunistischer Ideologie, die USA hätten nur reagiert. Die revisionistische Schule – William Appleman Williams 1959, später Gabriel Kolko und Gar Alperovitz – kehrte das um: Das amerikanische Interesse an offenen Märkten und die Atomdiplomatie hätten Moskau in die Defensive gedrängt. Die postrevisionistische Schule um John Lewis Gaddis betonte seit den 1970er Jahren gegenseitige Fehlwahrnehmung und das Sicherheitsdilemma. Nach 1991 erlaubten sowjetische und osteuropäische Archive eine neue Bewertung: Gaddis selbst rückte Stalins Ideologie und Misstrauen wieder ins Zentrum, Vladislav Zubok beschreibt eine Mischung aus revolutionärem Anspruch und imperialem Sicherheitsdenken, Odd Arne Westad verlagert den Blick auf die Dritte Welt, in der die meisten Opfer starben. Umstritten ist auch die 1952 von Stalin angebotene Neutralisierung Deutschlands: ernstes Angebot oder Störmanöver gegen die Westbindung. Bei den verdeckten Operationen ist meist nicht mehr strittig, ob die USA beteiligt waren, sondern wie entscheidend sie waren. In Iran betonen Historiker wie Ray Takeyh die Rolle iranischer Akteure, andere sehen die CIA als treibende Kraft. In Chile kam der Hinchey-Bericht der US-Geheimdienste zu dem Ergebnis, die CIA habe den Putsch von 1973 nicht angestiftet; Kritiker wie Peter Kornbluh halten dagegen, dass die jahrelange Destabilisierung ihn erst möglich machte. Für Indonesien ist belegt, dass Washington die Armee unterstützte und Namenslisten weitergab; umstritten ist, wie weit das die Morde beeinflusste, die Forschung von John Roosa und Geoffrey Robinson sieht die Armeeführung als Planerin, und wer hinter der Bewegung 30. September stand, ist ebenfalls nicht abschließend geklärt. Auf sowjetischer Seite ist die Aktenlage lückenhafter: Viele KGB-Bestände sind bis heute gesperrt, und das Mitrokhin-Archiv, eine wichtige Quelle über Auslandsoperationen, beruht auf Abschriften eines Überläufers und lässt sich nur teilweise überprüfen. Offen sind ferner: wie nahe die Welt 1983 während Able Archer tatsächlich einem Atomkrieg kam, ob Jaruzelskis Kriegsrecht eine Invasion verhinderte, ob Zbigniew Brzezinski 1998 tatsächlich sagte, man habe Moskau bewusst in die afghanische Falle gelockt, ob Gladio mit Terroranschlägen in Italien verbunden war und ob dem Westen 1990 die NATO-Erweiterung verbindlich ausgeschlossen wurde. Schließlich das Ende: Ob Reagans Aufrüstung, Gorbatschows Entscheidungen, der wirtschaftliche Niedergang des Ostblocks oder die Bürgerbewegungen den Ausschlag gaben, wird je nach Schule unterschiedlich gewichtet.",
  "quellen": [
   "Foreign Relations of the United States (FRUS), Office of the Historian, US-Außenministerium: u. a. Iran 1951–1954 (Retrospektivband 2017), Guatemala (Retrospektivband 2003), 1964–1968 Bd. XXVI Indonesien, 1969–1976 Bd. XXI Chile",
   "US-Senat, Church Committee: Alleged Assassination Plots Involving Foreign Leaders (1975); Covert Action in Chile 1963–1973 (1975)",
   "CIA Activities in Chile (Hinchey-Bericht), vorgelegt von den US-Geheimdiensten unter dem Director of Central Intelligence, 18. September 2000",
   "CIA/National Archives: Freigabe von rund 1.400 Seiten zu Guatemala, 23. Mai 1997; Inspector General Survey of the Cuban Operation (freigegeben 1998)",
   "National Security Archive, George Washington University: Dossiers zu Iran 1953 (2013), Indonesien 1965–66 (2017), Able Archer 83 (2015), Operation Condor, Argentinien, Brasilien 1964",
   "Wilson Center, Cold War International History Project: sowjetische und osteuropäische Archivdokumente (u. a. Präsidiumsprotokolle 1956, Politbüroprotokolle zu Afghanistan 1979 und Polen 1981)",
   "Belgische Abgeordnetenkammer: Untersuchungskommission zur Ermordung Patrice Lumumbas, Abschlussbericht 2001",
   "Comisión para el Esclarecimiento Histórico: Guatemala – Memoria del Silencio, 1999",
   "CONADEP: Nunca Más, 1984; Comisión Rettig 1991 und Comisión Valech 2004/2011 (Chile); Comissão Nacional da Verdade, 2014 (Brasilien)",
   "UN-Wahrheitskommission für El Salvador: De la locura a la esperanza, 1993; Internationaler Gerichtshof, Nicaragua gegen Vereinigte Staaten, Urteil 1986",
   "Report of the President's Special Review Board (Tower-Kommission), 1987; Final Report of the Independent Counsel for Iran/Contra Matters (Walsh), 1993",
   "Bundeszentrale für politische Bildung, Zentrum für Zeithistorische Forschung Potsdam und Stiftung Berliner Mauer: Dossiers zum 17. Juni 1953, zu den Todesopfern an der Berliner Mauer und zur Verhaftung der RAF-Aussteiger 1990",
   "Encyclopaedia Britannica: Cold War; Yalta Conference; Marshall Plan; Hungarian Revolution; Cuban missile crisis; Iran-Contra Affair",
   "Piero Gleijeses: Conflicting Missions. Havana, Washington, and Africa, 1959–1976, 2002; John Roosa: Pretext for Mass Murder, 2006",
   "Thomas Boghardt: Soviet Bloc Intelligence and Its AIDS Disinformation Campaign, Studies in Intelligence 53/4, 2009",
   "Prokop Tomek, Ivo Pejčoch: Okupace 1968 a její oběti, 2017; Rüdiger Wenzke: Wo stehen unsere Truppen? NVA und Bundeswehr in der ČSSR-Krise 1968, 2018; Bundesarchiv: 21. August 1968 – Einmarsch, kein Einmarsch",
   "Charles Hirschman, Samuel Preston, Vu Manh Loi: Vietnamese Casualties During the American War, Population and Development Review 21/4, 1995; National Research Council: Forced Migration and Mortality, 2001",
   "Seth G. Jones: A Covert Action. Reagan, the CIA, and the Cold War Struggle in Poland, 2018"
  ],
  "literatur": [
   {
    "titel": "The Global Cold War",
    "autor": "Odd Arne Westad",
    "jahr": "2005",
    "warum": "Verlegt den Kalten Krieg dorthin, wo er heiß war: nach Afrika, Asien und Lateinamerika. Unverzichtbar für die Putsche und Interventionen dieses Querschnitts."
   },
   {
    "titel": "Der Kalte Krieg. Eine neue Geschichte",
    "autor": "John Lewis Gaddis",
    "jahr": "2007",
    "warum": "Knapp und gut lesbar, von einem der Begründer der postrevisionistischen Schule. Die Sicht ist amerikanisch geprägt – gerade das macht ihn als Gegenpol zu Westad nützlich."
   },
   {
    "titel": "Der Kalte Krieg 1947–1991. Geschichte eines radikalen Zeitalters",
    "autor": "Bernd Stöver",
    "jahr": "2007",
    "warum": "Die beste deutschsprachige Gesamtdarstellung, mit viel Raum für Alltag, Propaganda und die deutsche Teilung."
   },
   {
    "titel": "A Failed Empire. The Soviet Union in the Cold War from Stalin to Gorbachev",
    "autor": "Vladislav M. Zubok",
    "jahr": "2007",
    "warum": "Erklärt die sowjetische Seite aus den Moskauer Archiven heraus – ohne Rechtfertigung und ohne Dämonisierung."
   },
   {
    "titel": "Der Eiserne Vorhang. Die Unterdrückung Osteuropas 1944–1956",
    "autor": "Anne Applebaum",
    "jahr": "2013",
    "warum": "Zeigt Schritt für Schritt, wie die kommunistische Machtübernahme in Polen, Ungarn und der DDR organisiert wurde."
   },
   {
    "titel": "CIA. Die ganze Geschichte",
    "autor": "Tim Weiner",
    "jahr": "2008",
    "warum": "Erzählt die verdeckten Operationen von Italien 1948 bis Iran-Contra auf Grundlage freigegebener Akten. Journalistisch zugespitzt; Geheimdiensthistoriker kritisieren manche Wertungen, die Belege sind aber nachprüfbar angegeben."
   }
  ],
  "seit": "2026-10-01"
 },
 {
  "id": "katastrophen",
  "titel": "Katastrophen – Natur, Technik, Versagen",
  "kurz": "Vulkane, Beben, Fluten, Brände und Unglücke von Thera bis Derna — und was Menschen jeweils daraus gelernt oder versäumt haben.",
  "einleitung": "Ein Erdbeben ist ein Naturereignis, eine Katastrophe wird es erst dort, wo Menschen leben, bauen und entscheiden. Dieser Querschnitt verfolgt beides: die Ereignisse selbst, von Vulkanausbrüchen der Bronzezeit bis zu den Fluten der Gegenwart, und die Frage, warum sie so viele Opfer forderten und was danach geändert wurde. Aus Bränden entstanden Bauordnungen, aus Schiffsunglücken Seerecht, aus Tsunamis Warnsysteme, aus Industrieunfällen der Begriff der Sicherheitskultur. Oft lernte man aber erst nach der zweiten oder dritten Katastrophe. Seuchen sind hier nur am Rand Thema; sie haben einen eigenen Querschnitt.",
  "stationen": [
   {
    "jahr": -1600,
    "titel": "Der Ausbruch von Thera",
    "text": "Auf der Kykladeninsel Thera, dem heutigen Santorin, explodiert einer der größten Vulkane der Bronzezeit und begräbt die Stadt Akrotiri unter meterhoher Asche. Bemerkenswert ist, was fehlt: Die Ausgräber fanden kaum Tote und keine Wertsachen. Vorbeben hatten die Bewohner offenbar gewarnt, sie verließen die Stadt rechtzeitig. Die ältere These, der Ausbruch habe die minoische Kultur auf Kreta ausgelöscht, gilt als widerlegt – die kretischen Paläste bestanden noch Generationen weiter. Die Datierung ist eine der großen Streitfragen der Ägäis-Archäologie.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -373,
    "titel": "Helike versinkt",
    "text": "In einer Winternacht zerstört ein Erdbeben die Stadt Helike an der Nordküste der Peloponnes, anschließend überflutet das Meer die Ebene. Antike Autoren wie Strabon und Pausanias berichten, die Ruinen seien noch Jahrhunderte später unter Wasser zu sehen gewesen, und deuteten den Untergang als Strafe Poseidons. Seit 1988 suchen die Archäologin Dora Katsonopoulou und der Physiker Steven Soter die Stadt und fanden Siedlungsreste nicht im Meer, sondern unter dem Schwemmland der Küstenebene. Nach ihrer Deutung versanken die Ruinen nach dem Beben in einer Lagune, die über die Jahrhunderte verlandete.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 64,
    "titel": "Der Große Brand Roms",
    "text": "Im Juli 64 brennt Rom etwa neun Tage lang. Nach Tacitus wurden von vierzehn Stadtbezirken drei völlig zerstört und sieben schwer beschädigt. Das Bild vom singenden Nero ist ein Gerücht, das Tacitus selbst als Gerücht kennzeichnet; der Kaiser war in Antium. Belegt ist dagegen, was danach kam: Nero erließ Bauvorschriften mit breiteren Straßen, begrenzten Höhen, Bauteilen aus feuerfestem Stein, Arkaden vor den Fassaden und griffbereitem Löschgerät in jedem Hof. Es ist eine der frühesten bekannten Brandschutzordnungen einer Großstadt.",
    "vertiefung": "kaiser-nero",
    "seit": "2026-10-01"
   },
   {
    "jahr": 79,
    "titel": "Vesuv: Pompeji und Herculaneum",
    "text": "Der Vesuv begräbt Pompeji, Herculaneum, Stabiae und Oplontis. Die Menschen starben nicht in einem Lavastrom, sondern in Bimssteinregen, unter einstürzenden Dächern und vor allem in den Glutlawinen des zweiten Tages. In Pompeji wurden über tausend Opfer geborgen, in Herculaneum rund dreihundert Skelette in den Bootshäusern am Strand; die Gesamtzahl der Toten ist unbekannt. Plinius der Jüngere beschrieb den Ausbruch in zwei Briefen an Tacitus, sein Onkel, der Admiral Plinius der Ältere, kam bei einem Rettungsversuch ums Leben. Die Vulkanologie nennt diesen Ausbruchstyp bis heute plinianisch.",
    "vertiefung": "vesuv",
    "seit": "2026-10-01"
   },
   {
    "jahr": 526,
    "titel": "Das Erdbeben von Antiochia",
    "text": "Im Mai 526 trifft ein Erdbeben Antiochia, eine der größten Städte des Oströmischen Reiches, während viele Pilger zu einem Kirchenfest in der Stadt sind. Auf die Erdstöße folgen Brände, die tagelang wüten. Der Chronist Johannes Malalas nennt 250.000 Tote – eine Zahl, die die Forschung für überhöht hält, die aber das Ausmaß ahnen lässt. Auch der Patriarch Euphrasios kam ums Leben. Nach einem weiteren Beben 528 wurde die Stadt in Theoupolis umbenannt, Stadt Gottes: Die Katastrophe wurde religiös gedeutet, nicht technisch.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 536,
    "titel": "Das Jahr ohne Sonne",
    "text": "Der byzantinische Historiker Prokop schreibt, die Sonne habe ein ganzes Jahr lang ohne Glanz geschienen, wie der Mond. Chinesische und irische Quellen berichten Ähnliches. Jahrringe und Eisbohrkerne aus Grönland und der Antarktis bestätigen heute, dass Vulkanausbrüche um 536 und 539/540 die Nordhalbkugel abkühlten; Forscher sprechen von einer spätantiken kleinen Eiszeit, die mehrere Jahrzehnte anhielt. Welcher Vulkan verantwortlich war, ist offen. Ob die Kälte über Missernten die Justinianische Pest ab 541 begünstigte, wird diskutiert, ist aber nicht belegt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1342,
    "titel": "Das Magdalenenhochwasser",
    "text": "Um den Tag der heiligen Maria Magdalena im Juli 1342 treten nach tagelangen Regenfällen Rhein, Main, Mosel, Donau und viele andere Flüsse Mitteleuropas über die Ufer. In Würzburg und Frankfurt stand das Wasser höher als bei jedem späteren Hochwasser, in Köln soll man mit Booten über die Stadtmauer gefahren sein. Wie viele Menschen starben, ist nicht überliefert. Bodenkundler um Hans-Rudolf Bork haben gezeigt, dass Starkregen auf frisch gerodeten Ackerflächen damals einen erheblichen Teil des Ackerbodens abschwemmte – eine Folge der mittelalterlichen Rodung, die die Landwirtschaft für Jahrzehnte schwächte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1362,
    "titel": "Die Grote Mandrenke",
    "text": "Am 16. Januar 1362 treibt ein Sturm das Wasser der Nordsee gegen die Küsten Frieslands, Nordfrieslands und Dänemarks. Die zweite Marcellusflut, später das große Ertrinken genannt, zerreißt die Küstenlinie und versenkt den Handelsort Rungholt. Die Opferzahlen der Chroniken gehen in die Zehntausende und sind nicht überprüfbar. Rungholt galt lange als Sage; 2023 lokalisierten Forscher im Wattenmeer bei der Hallig Südfall die Reste einer Kirchwarft. Zum Untergang trug nach Ansicht der beteiligten Forscher auch bei, dass Torfabbau zur Salzgewinnung und Entwässerung das Land über Jahrzehnte abgesenkt hatten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1556,
    "titel": "Das Erdbeben von Shaanxi",
    "text": "Am 23. Januar 1556, in der Regierungszeit des Ming-Kaisers Jiajing, erschüttert ein Erdbeben die Provinzen Shaanxi und Shanxi. Die amtlichen Aufzeichnungen nennen rund 830.000 Tote – es wäre das tödlichste Erdbeben der überlieferten Geschichte, auch wenn sich die Zahl nicht prüfen lässt. Die Ursache der hohen Opferzahl lag im Boden: Viele Menschen lebten in Wohnhöhlen, die in die weichen Lösswände gegraben waren, und diese stürzten großflächig ein. Das Beben zeigt früh, dass die Bauweise über die Zahl der Toten entscheidet, nicht die Stärke allein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1666,
    "titel": "Der Große Brand von London",
    "text": "Am 2. September 1666 bricht in einer Bäckerei in der Pudding Lane Feuer aus. Vier Tage lang brennt die City, rund 13.000 Häuser, 87 Pfarrkirchen und die alte St Paul's Cathedral werden zerstört. Offiziell sind nur wenige Tote verzeichnet; Historiker halten die tatsächliche Zahl für höher, weil Arme und Unbekannte nicht erfasst wurden. Ein Franzose gestand die Brandstiftung und wurde gehängt, obwohl er nachweislich erst nach Ausbruch in London war. Das Wiederaufbaugesetz von 1667 schrieb Ziegel und Stein vor, in den folgenden Jahren entstanden die ersten Feuerversicherungen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1669,
    "titel": "Der Ätna und der erste Versuch, Lava umzulenken",
    "text": "Von März bis Juli 1669 fließt Lava aus einer Spalte am Südhang des Ätna, zerstört mehrere Dörfer und erreicht schließlich Catania, wo sie Teile der Stadtmauer überwindet. Ein Bürger namens Diego Pappalardo versuchte mit Männern in nassen Häuten, die erstarrte Flanke des Stroms aufzubrechen und die Lava abzulenken – der erste dokumentierte Versuch dieser Art. Bewaffnete aus dem Nachbarort Paternò, der nun bedroht war, vertrieben die Arbeiter. Der Konflikt, wessen Land geopfert wird, kehrt bei jeder späteren Lavaumleitung wieder.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1693,
    "titel": "Das Erdbeben im Val di Noto",
    "text": "Im Januar 1693 zerstört ein Erdbeben weite Teile Südostsiziliens, darunter Catania, Ragusa und Noto. Die Schätzungen der Toten liegen um 60.000. Bemerkenswert ist der Wiederaufbau: Noto wurde nicht an alter Stelle, sondern einige Kilometer entfernt auf einer neuen, planmäßig angelegten Fläche errichtet, andere Städte mit breiteren Straßen und Plätzen als Fluchträumen. Die spätbarocken Städte des Val di Noto, die so entstanden, gehören heute zum UNESCO-Welterbe – eine Katastrophe, die eine ganze Stadtlandschaft prägte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1755,
    "titel": "Lissabon an Allerheiligen",
    "text": "Am 1. November 1755, während die Kirchen voll sind, zerstört ein schweres Erdbeben Lissabon; ein Tsunami und tagelange Brände folgen. Schätzungen der Toten in der Stadt reichen von etwa 30.000 bis 60.000. Der leitende Minister, später Marquês de Pombal, ließ die Unterstadt nach einem Rasterplan wiederaufbauen und schrieb eine erdbebensichere Holzrahmenbauweise vor, die gaiola. Eine Umfrage an alle Pfarreien zu Dauer und Wirkung der Erdstöße gilt als Anfang der Seismologie. Voltaire stellte in einem Gedicht die Güte der Vorsehung in Frage, Rousseau widersprach ihm, Kant schrieb drei naturkundliche Abhandlungen über das Beben; der Glaube an eine gerechte Weltordnung bekam Risse.",
    "vertiefung": "aufklaerung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1783,
    "titel": "Laki und der giftige Nebel",
    "text": "Ab Juni 1783 reißt in Südisland eine über zwanzig Kilometer lange Spalte auf, aus der acht Monate lang Lava und Gase strömen. Fluorhaltige Asche vergiftet Weiden; ein großer Teil des Viehs verendet, und in der folgenden Hungersnot stirbt nach Schätzungen etwa ein Fünftel der Bevölkerung Islands. Über Europa liegt im Sommer ein trockener, schwefliger Nebel. Studien zu englischen Kirchenbüchern schätzen dort eine Übersterblichkeit von über 20.000 Menschen. Benjamin Franklin vermutete bereits damals einen Zusammenhang mit einem Vulkan.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1815,
    "titel": "Tambora und das Jahr ohne Sommer",
    "text": "Im April 1815 explodiert der Tambora auf der Insel Sumbawa, der stärkste Ausbruch der überlieferten Geschichte. Durch den Ausbruch selbst und den folgenden Hunger sterben auf Sumbawa und Lombok nach Schätzungen mindestens rund 70.000 Menschen. Im Jahr darauf bleibt in Europa und Nordamerika der Sommer aus, Ernten verfaulen, auch in Württemberg herrscht Hungersnot. König Wilhelm I. gründete daraufhin 1818 eine landwirtschaftliche Lehranstalt in Hohenheim und ein Landwirtschaftsfest auf dem Cannstatter Wasen, aus dem das Cannstatter Volksfest hervorging; Königin Katharina organisierte die Armenhilfe. Den Zusammenhang mit dem Vulkan stellte die Forschung erst viel später her.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1845,
    "titel": "Die Große Hungersnot in Irland",
    "text": "Ab 1845 vernichtet die Kartoffelfäule, ein aus Amerika eingeschleppter Erreger, mehrere Jahre hintereinander die Ernte, von der ein großer Teil der irischen Landbevölkerung lebte. Bis 1852 sterben schätzungsweise rund eine Million Menschen, über eine Million wandern aus. Die Krankheit war natürlich, das Ausmaß nicht: Die britische Regierung setzte nach anfänglichen Maisimporten auf Marktkräfte und Arbeitsprogramme, schloss die Suppenküchen nach kurzer Zeit und knüpfte Hilfe an harte Bedingungen, während Lebensmittel weiter ausgeführt wurden. Wie diese Politik zu bewerten ist, ist bis heute umstritten.",
    "vertiefung": "irische-hungersnot",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1883,
    "titel": "Krakatau",
    "text": "Am 26. und 27. August 1883 zerreißt eine Folge von Explosionen die Vulkaninsel Krakatau in der Sundastraße. Die meisten der etwa 36.000 Toten, so die Angabe der niederländischen Kolonialverwaltung, sterben nicht durch den Vulkan, sondern durch Tsunamis an den Küsten Javas und Sumatras. Der Knall war noch auf der fast 5.000 Kilometer entfernten Insel Rodrigues zu hören. Durch das Telegrafennetz war Krakatau die erste Naturkatastrophe, von der die Welt binnen Stunden erfuhr; die Royal Society sammelte danach weltweit Beobachtungen der roten Sonnenuntergänge.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1889,
    "titel": "Die Flut von Johnstown",
    "text": "Am 31. Mai 1889 bricht nach Starkregen der South-Fork-Damm in Pennsylvania. Er staute einen See für einen exklusiven Jagd- und Angelclub wohlhabender Industrieller aus Pittsburgh, war schlecht unterhalten und an der Krone abgesenkt worden. Die Flutwelle zerstört Johnstown, über 2.200 Menschen sterben. Klagen gegen den Club scheiterten, was den Zorn auf die Reichen verstärkte; der Rechtshistoriker Jed Shugerman sieht darin einen Anstoß, dass US-Gerichte danach eher eine Haftung ohne nachgewiesenes Verschulden annahmen. Das Amerikanische Rote Kreuz unter Clara Barton bewährte sich hier erstmals in großem Maßstab.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1902,
    "titel": "Saint-Pierre und die Glutwolke",
    "text": "Am 8. Mai 1902 rast eine Glutwolke vom Mont Pelée auf Martinique in die Stadt Saint-Pierre und tötet binnen Minuten schätzungsweise 28.000 Menschen. Der Vulkan war seit Wochen aktiv gewesen, doch die Stadt wurde nicht geräumt; dass dabei die für den 11. Mai angesetzte Wahl eine Rolle spielte, vertreten manche Historiker, wie groß ihr Gewicht war, ist umstritten. Zu den sehr wenigen Überlebenden gehörte ein Häftling in einer dickwandigen Zelle. Der Geologe Alfred Lacroix untersuchte den Ausbruch und beschrieb erstmals wissenschaftlich die nuée ardente, die Glutwolke, die heute als pyroklastischer Strom gilt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1906,
    "titel": "San Francisco und die gezählten Toten",
    "text": "Am Morgen des 18. April 1906 erschüttert ein Erdbeben San Francisco, die anschließenden Brände zerstören große Teile der Stadt. Die Behörden meldeten damals einige hundert Tote – auch, um Investoren nicht abzuschrecken. Spätere Nachforschungen, vor allem der Archivarin Gladys Hansen, ergaben, dass die Zahl vermutlich über 3.000 lag; Chinesen und Arme waren kaum gezählt worden. Der Geologe Harry Fielding Reid entwickelte aus den Vermessungen nach dem Beben die Theorie des elastischen Rückpralls, die bis heute erklärt, wie Erdbeben an Verwerfungen entstehen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1908,
    "titel": "Messina",
    "text": "Am frühen Morgen des 28. Dezember 1908 trifft ein Erdbeben die Straße von Messina, ein Tsunami folgt. Messina und Reggio Calabria werden weitgehend zerstört. Die Schätzungen der Toten liegen zwischen etwa 60.000 und über 100.000; es ist das tödlichste Erdbeben der europäischen Geschichte im 20. Jahrhundert. Die Häuser aus Bruchstein ohne Verbund fielen in sich zusammen. Italien erließ 1909 erstmals verbindliche Bauvorschriften für Erdbebengebiete, mit Höhenbegrenzungen und Anforderungen an die Konstruktion – ein Anfang des modernen erdbebengerechten Bauens.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1912,
    "titel": "Der Untergang der Titanic",
    "text": "In der Nacht zum 15. April 1912 rammt die Titanic auf ihrer Jungfernfahrt einen Eisberg und sinkt in weniger als drei Stunden. Rund 1.500 Menschen sterben. Die Rettungsboote reichten für etwa die Hälfte der Menschen an Bord – legal, denn die britischen Vorschriften richteten sich nach der Tonnage, nicht nach der Zahl der Passagiere. Die Folge war das erste internationale Übereinkommen zum Schutz des menschlichen Lebens auf See, SOLAS, beschlossen 1914, wegen des Krieges aber erst in späteren Fassungen wirksam: Rettungsboote für alle, ständig besetzter Funk und eine internationale Eispatrouille im Nordatlantik.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1917,
    "titel": "Die Explosion von Halifax",
    "text": "Am 6. Dezember 1917 kollidiert im Hafen von Halifax in Kanada das französische Munitionsschiff Mont-Blanc mit einem anderen Schiff und fängt Feuer. Etwa zwanzig Minuten später explodieren mehrere tausend Tonnen Sprengstoff; die Explosion galt bis zur Atombombe als die stärkste von Menschen verursachte. Rund 2.000 Menschen sterben, etwa 9.000 werden verletzt, viele davon an den Augen, weil sie hinter Fenstern dem Feuer zugesehen hatten. Der Soziologe Samuel Prince schrieb 1920 die erste wissenschaftliche Studie darüber, wie Gesellschaften auf Katastrophen reagieren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1923,
    "titel": "Das Große Kantō-Erdbeben",
    "text": "Um 11:58 Uhr am 1. September 1923 bebt die Erde unter Tokio und Yokohama. Weil zur Mittagszeit in Holzhäusern gekocht wurde, entstehen zahllose Brände; allein auf einem Platz, auf den sich Zehntausende geflüchtet hatten, sterben in einem Feuersturm etwa 38.000 Menschen. Ältere Angaben lagen bei über 140.000 Toten, eine Neuberechnung der Seismologen Moroi und Takemura (2004) kommt auf rund 105.000. Nach Gerüchten, Koreaner vergifteten Brunnen, ermordeten Bürgerwehren, teils mit Beteiligung von Polizei und Militär, zahlreiche Koreaner. Amtliche Angaben nannten damals rund 230 Opfer, viele Historiker schätzen mehrere Tausend, häufig genannt werden etwa 6.000. Japan verschärfte 1924 seine Bauvorschriften um Erdbebenlasten; der 1. September ist bis heute Tag der Katastrophenvorsorge.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1931,
    "titel": "Die Fluten in Zentralchina",
    "text": "Nach einem schneereichen Winter und außergewöhnlich starken Regenfällen treten im Sommer 1931 der Jangtse, der Huai und weitere Flüsse über die Ufer. Ein Gebiet von der Größe mehrerer europäischer Länder steht unter Wasser, Wuhan wochenlang. Die Zahl der Toten ist eine der unsichersten der Katastrophengeschichte: Eine Erhebung der Universität Nanking zählte rund 150.000 Ertrunkene, chinesische Historiker kamen aus zeitgenössischen Presseberichten auf gut 420.000 Tote, der amtliche Bericht von 1933 nannte einschließlich Hunger und Seuchen rund zwei Millionen; westliche Angaben von bis zu vier Millionen sind kaum belegbar. Vernachlässigte Deiche und der Bürgerkrieg verschärften die Lage.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1935,
    "titel": "Der Dust Bowl",
    "text": "Am 14. April 1935, dem Schwarzen Sonntag, verdunkelt ein gewaltiger Staubsturm die südlichen Great Plains der USA. Jahre der Dürre trafen auf Prärieboden, dessen Grasdecke in den Jahrzehnten zuvor für den Weizenanbau umgepflügt worden war; ohne Wurzeln trug der Wind die Krume davon. Hunderttausende verließen die Region. Noch im selben Monat schuf der Kongress den Soil Conservation Service. Windschutzstreifen, Konturpflügen und Fruchtwechsel wurden gefördert – eine Katastrophe, bei der Natur und landwirtschaftliche Praxis untrennbar zusammenwirkten.",
    "vertiefung": "dust-bowl",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1937,
    "titel": "Die Hindenburg",
    "text": "Am 6. Mai 1937 fängt das deutsche Luftschiff LZ 129 Hindenburg bei der Landung in Lakehurst bei New York Feuer und brennt in weniger als einer Minute aus. 36 Menschen sterben, 62 überleben. Das Luftschiff war mit brennbarem Wasserstoff gefüllt, weil die USA die Ausfuhr von Helium untersagten. Als wahrscheinlichste Ursache gilt eine elektrostatische Entladung, die austretenden Wasserstoff entzündete; die These, die Außenhaut selbst sei der Brandbeschleuniger gewesen, ist umstritten. Die Filmbilder und die Radioreportage beendeten das Zeitalter der Passagierluftschiffe.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1938,
    "titel": "Der Gelbe Fluss wird zur Waffe",
    "text": "Im Juni 1938 lässt die chinesische Nationalregierung bei Huayuankou die Deiche des Gelben Flusses durchstechen, um den Vormarsch der japanischen Armee auf Zhengzhou aufzuhalten. Das Wasser überflutet weite Teile von Henan, Anhui und Jiangsu, der Fluss ändert für fast ein Jahrzehnt seinen Lauf. Die Schätzungen der Toten reichen von etwa 400.000 bis rund 900.000, Millionen wurden obdachlos. Militärisch verzögerte die Flut den japanischen Angriff auf Wuhan um Monate. Die Regierung schrieb die Flut zunächst japanischen Bomben zu; erst später wurde die Verantwortung eingeräumt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1943,
    "titel": "Die Hungersnot in Bengalen",
    "text": "1943 sterben in der britisch-indischen Provinz Bengalen nach Schätzungen zwischen etwa zwei und drei Millionen Menschen an Hunger und Seuchen. Mehrere Ursachen trafen zusammen: der Ausfall der Reisimporte aus dem japanisch besetzten Birma, ein Zyklon und eine Pflanzenkrankheit 1942, die Beschlagnahme von Booten zur Abwehr einer japanischen Invasion, Kriegsinflation und Hortung. Die Provinzregierung reagierte spät, das britische Kriegskabinett lehnte umfangreiche Lieferungen lange ab. Wie stark die Ernte tatsächlich ausfiel und welches Gewicht Churchills Haltung hatte, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1953,
    "titel": "Die Hollandflut",
    "text": "In der Nacht zum 1. Februar 1953 treibt ein Sturm bei Springflut das Wasser der Nordsee gegen die Küsten. In den Niederlanden brechen Deiche an Hunderten Stellen, in Seeland und Südholland sterben 1.836 Menschen, in England über 300. Viele Opfer wurden im Schlaf überrascht, Warnungen erreichten sie nicht, weil der Rundfunk nachts nicht sendete. Die Niederlande beschlossen daraufhin den Deltaplan: ein jahrzehntelanges Bauprogramm aus Dämmen und Sturmflutwehren, das die Küstenlinie verkürzte und Schutz gegen Fluten bieten sollte, wie sie statistisch nur alle 10.000 Jahre auftreten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1959,
    "titel": "Die Große Chinesische Hungersnot",
    "text": "In den Jahren 1959 bis 1961 sterben in China infolge des Großen Sprungs nach vorn nach den meisten Schätzungen zwischen 15 und 45 Millionen Menschen; viele Demografen kommen auf rund 30 Millionen. Ursachen waren die Kollektivierung in Volkskommunen, überhöhte Ernteberichte, auf deren Grundlage der Staat Getreide eintrieb und sogar exportierte, und der Abzug von Arbeitskräften in die Stahlkampagne. Als Peng Dehuai 1959 die Politik kritisierte, wurde er gestürzt, und Kritik verstummte. Die offizielle Bezeichnung als drei Jahre der Naturkatastrophen wird von der Forschung weitgehend zurückgewiesen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Valdivia, das stärkste gemessene Beben",
    "text": "Am 22. Mai 1960 ereignet sich vor der Küste Südchiles das stärkste je instrumentell gemessene Erdbeben, mit einer Momentmagnitude von etwa 9,5. In Chile sterben je nach Schätzung zwischen etwa 1.000 und 6.000 Menschen. Der Tsunami überquerte den Pazifik und tötete Stunden später noch Menschen auf Hawaii, wo viele die Warnsirenen nicht als Räumungssignal verstanden, und in Japan. In Chile drohte ein durch Erdrutsche gestauter See, das Tal zu fluten, Arbeiter senkten den Pegel in wochenlanger Arbeit kontrolliert ab. Die Katastrophe gab den Anstoß zum Ausbau eines internationalen Tsunami-Warnsystems im Pazifik.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1962,
    "titel": "Die Hamburger Sturmflut",
    "text": "In der Nacht zum 17. Februar 1962 brechen in Hamburg an zahlreichen Stellen die Deiche, in der Stadt sterben 315 Menschen, die meisten in Wilhelmsburg in Behelfsheimen und Kleingärten, in denen nach dem Krieg Ausgebombte lebten. Polizeisenator Helmut Schmidt holte Bundeswehr und Nato-Truppen zur Hilfe, wofür das Grundgesetz damals keine klare Grundlage bot. Die Deiche wurden danach erhöht und verstärkt, und die Erfahrung floss in die Notstandsgesetzgebung von 1968 ein, die den Einsatz der Streitkräfte bei Naturkatastrophen ausdrücklich regelte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1963,
    "titel": "Vajont",
    "text": "Am Abend des 9. Oktober 1963 rutscht in den italienischen Alpen eine Bergflanke von mehr als 250 Millionen Kubikmetern in den Stausee hinter der Vajont-Staumauer. Die Flutwelle schlägt über die Mauer und zerstört im Piavetal den Ort Longarone und weitere Dörfer; fast 2.000 Menschen sterben. Die Mauer selbst blieb nahezu unbeschädigt. Die Betreibergesellschaft wusste seit Jahren von Rutschungen am Monte Toc; die Journalistin Tina Merlin hatte gewarnt und war dafür angeklagt, aber freigesprochen worden. Ein Gericht verurteilte später Verantwortliche wegen fahrlässiger Tötung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1966,
    "titel": "Aberfan",
    "text": "Am 21. Oktober 1966 rutscht in dem walisischen Bergbauort Aberfan eine Abraumhalde des Steinkohlenbergbaus nach Regenfällen ab und begräbt die Pantglas-Grundschule. 144 Menschen sterben, 116 von ihnen Kinder. Die Untersuchungskommission machte die staatliche Kohlebehörde verantwortlich, die die Halde über einer Quelle aufgeschüttet und frühere Rutschungen ignoriert hatte. Niemand wurde bestraft. Großbritannien erließ 1969 erstmals ein Gesetz zur Sicherheit solcher Halden. Dass für deren Beseitigung Geld aus dem Spendenfonds für die Opfer verwendet wurde, empörte lange; es wurde erst Jahrzehnte später erstattet.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1970,
    "titel": "Der Bhola-Zyklon",
    "text": "Am 12. und 13. November 1970 trifft ein tropischer Wirbelsturm mit meterhoher Sturmflut die flachen Küsteninseln Ostpakistans. Die Schätzungen der Toten liegen zwischen 300.000 und 500.000; es ist einer der tödlichsten Wirbelstürme der Geschichte. Die zögerliche Hilfe der Zentralregierung in Westpakistan verschärfte die Spannungen, die 1971 in den Unabhängigkeitskrieg Bangladeschs mündeten. Bangladesch baute danach ein Netz von Schutzbauten und ein Freiwilligenprogramm zur Warnung auf. Spätere Zyklonen vergleichbarer Stärke forderten deutlich weniger Opfer.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1976,
    "titel": "Tangshan",
    "text": "Am 28. Juli 1976 um 3:42 Uhr zerstört ein Erdbeben die Industriestadt Tangshan östlich von Peking fast vollständig. Die chinesische Regierung nannte später 242.769 Tote; andere Schätzungen lagen deutlich höher. China lehnte internationale Hilfe ab. Ein Jahr zuvor war in Haicheng aufgrund von Vorbeben evakuiert worden, was als erste erfolgreiche Erdbebenvorhersage gefeiert wurde; in Tangshan gab es keine solchen Vorzeichen. Der Fall gilt bis heute als Beleg dafür, dass Erdbeben sich nicht zuverlässig vorhersagen lassen und nur Bauweise und Vorsorge helfen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1976,
    "titel": "Seveso",
    "text": "Am 10. Juli 1976 überhitzt in einer Chemiefabrik bei Seveso nördlich von Mailand ein Reaktor; eine Wolke mit dem hochgiftigen Dioxin TCDD geht über die umliegenden Gemeinden nieder. Tote gab es unmittelbar nicht, aber Kinder erkrankten an Chlorakne, Tausende Tiere verendeten, und die Evakuierung begann erst mehr als zwei Wochen später, weil das Unternehmen die Stoffe nur zögernd offenlegte. Die Europäische Gemeinschaft beschloss 1982 die Seveso-Richtlinie: Betriebe mit gefährlichen Stoffen müssen Risiken melden, Notfallpläne aufstellen und die Bevölkerung informieren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1984,
    "titel": "Bhopal",
    "text": "In der Nacht zum 3. Dezember 1984 entweichen aus einem Tank der Pestizidfabrik von Union Carbide im indischen Bhopal rund 40 bis 45 Tonnen Methylisocyanat. Die Regierung des Bundesstaats nannte 3.787 Tote, andere Schätzungen gehen von 8.000 bis 10.000 Toten in den ersten Tagen und deutlich mehr in den Folgejahren aus. Kühlung, Gaswäscher und Fackel, die das Gas hätten abfangen können, waren abgeschaltet oder unzureichend. Das Unternehmen sprach von Sabotage, die Betroffenen von systematischer Vernachlässigung. Der Vergleich von 1989 über 470 Millionen Dollar gilt vielen bis heute als unzureichend.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1985,
    "titel": "Armero",
    "text": "Am 13. November 1985 schmilzt ein kleiner Ausbruch des Nevado del Ruiz in Kolumbien Teile der Gletscherkappe. Schlammströme rasen die Flusstäler hinab und begraben Stunden später die Stadt Armero; rund 23.000 Menschen sterben. Eine Gefahrenkarte, die genau dieses Szenario zeigte, lag seit Wochen vor, doch eine Evakuierung wurde nicht angeordnet. Das Bild der im Schlamm eingeklemmten Omayra Sánchez ging um die Welt. Die USA gründeten danach ein Einsatzteam für Vulkankrisen, das Gefahrenstufen und die Verständigung mit Behörden in den Mittelpunkt stellt – Wissen allein hatte nicht gereicht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1986,
    "titel": "Challenger",
    "text": "Am 28. Januar 1986 zerbricht die Raumfähre Challenger 73 Sekunden nach dem Start, alle sieben Besatzungsmitglieder sterben. Ein Dichtungsring an einer Feststoffrakete hatte in der ungewöhnlichen Kälte versagt. Ingenieure des Herstellers hatten am Vorabend vor dem Start gewarnt und waren überstimmt worden. Der Physiker Richard Feynman zeigte in der Untersuchungskommission mit einem Glas Eiswasser, wie das Material in der Kälte versteift. Die Soziologin Diane Vaughan prägte später den Begriff der Normalisierung von Abweichungen: Kleine Probleme, die gut gingen, galten irgendwann als akzeptabel.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1986,
    "titel": "Tschernobyl",
    "text": "In der Nacht zum 26. April 1986 gerät während eines Tests der Reaktor 4 des Kernkraftwerks Tschernobyl außer Kontrolle und explodiert. Zwei Arbeiter sterben in der Nacht, 28 Feuerwehrleute und Arbeiter in den folgenden Monaten an Strahlenkrankheit. Wie viele Krebstote langfristig hinzukommen, ist umstritten. Die Sowjetunion schwieg, bis in Schweden erhöhte Strahlung gemessen wurde. Die Untersuchung durch die Internationale Atomenergiebehörde machte einen Begriff bekannt, der bis heute weit über die Kerntechnik hinaus verwendet wird: Sicherheitskultur.",
    "vertiefung": "tschernobyl",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1988,
    "titel": "Piper Alpha",
    "text": "Am 6. Juli 1988 explodiert die Ölplattform Piper Alpha in der Nordsee. Eine Pumpe, deren Sicherheitsventil zur Wartung ausgebaut war, wurde in Betrieb genommen; austretendes Gas entzündete sich. Benachbarte Plattformen förderten weiter und speisten das Feuer, 167 Menschen sterben. Der Untersuchungsbericht von Lord Cullen 1990 kritisierte mangelhafte Übergaben zwischen Schichten und ein Aufsichtssystem, das nur Vorschriften abhakte. Seine Folge war das Safety-Case-System: Betreiber müssen selbst nachweisen, dass sie ihre Risiken beherrschen, statt nur Regeln zu befolgen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "Exxon Valdez",
    "text": "Am 24. März 1989 läuft der Tanker Exxon Valdez im Prince William Sound in Alaska auf ein Riff. Nach offizieller Angabe laufen rund 41.000 Kubikmeter Rohöl aus, Kritiker halten die Menge für höher; rund 2.000 Kilometer Küste werden verschmutzt, Seevögel und Meeressäuger sterben in großer Zahl. Der Kapitän hatte die Brücke verlassen, ein übermüdeter Offizier steuerte. Der Kongress verabschiedete 1990 den Oil Pollution Act, der für Tanker in US-Gewässern schrittweise eine Doppelhülle vorschrieb; die Internationale Seeschifffahrtsorganisation zog mit entsprechenden Regeln nach.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1994,
    "titel": "Der Untergang der Estonia",
    "text": "In der Nacht zum 28. September 1994 sinkt die Fähre Estonia auf dem Weg von Tallinn nach Stockholm in schwerer See; 852 Menschen sterben, nur 137 überleben. Das Bugvisier riss ab, Wasser drang auf das Autodeck, und das Schiff kenterte binnen einer Stunde. Die Stabilitätsregeln für Fähren wurden danach verschärft. Weil 2020 ein Riss im Rumpf gefilmt wurde, blühten Theorien über eine Kollision oder Explosion. Die neue Untersuchung Estlands, Schwedens und Finnlands kam im Dezember 2025 zum Ergebnis, dass der Schaden durch den Meeresgrund entstand, und stellte fest, das Schiff sei wegen unentdeckter baulicher Mängel für diese Route technisch nie sicher gewesen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2004,
    "titel": "Der Tsunami im Indischen Ozean",
    "text": "Am 26. Dezember 2004 löst ein Erdbeben der Magnitude 9,1 bis 9,3 vor Sumatra einen Tsunami aus, der Küsten von Indonesien bis Ostafrika trifft. Rund 230.000 Menschen sterben in vierzehn Ländern, die meisten in der Provinz Aceh. Im Indischen Ozean gab es kein Warnsystem; selbst Stunden nach dem Beben erreichte die Welle Sri Lanka und Indien unangekündigt. Auf der Insel Simeulue retteten sich die Bewohner dank mündlich überlieferter Erinnerung an einen früheren Tsunami fast alle. 2006 ging ein internationales Warnsystem für den Indischen Ozean in Betrieb.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2005,
    "titel": "Hurrikan Katrina",
    "text": "Am 29. August 2005 trifft Hurrikan Katrina die Golfküste der USA. In New Orleans brechen die Hochwasserschutzwände an mehreren Stellen, rund achtzig Prozent der Stadt stehen unter Wasser. Insgesamt sterben schätzungsweise 1.400 bis 1.800 Menschen. Untersuchungen ergaben, dass mehrere Wände nicht durch Überflutung versagten, sondern wegen Konstruktionsfehlern bei Wasserständen unterhalb der Auslegung. Die Katastrophenschutzbehörde FEMA reagierte schleppend, Tausende saßen tagelang ohne Versorgung fest. Der Schutzring um die Stadt wurde danach mit Milliardenaufwand neu gebaut.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2010,
    "titel": "Haiti",
    "text": "Am 12. Januar 2010 zerstört ein Erdbeben der Magnitude 7,0 große Teile von Port-au-Prince. Kaum eine Opferzahl ist so umstritten: Die haitianische Regierung nannte über 300.000 Tote, eine von der US-Entwicklungsbehörde beauftragte Studie kam auf etwa 46.000 bis 85.000. Unbewehrte Betonbauten ohne Bauaufsicht machten das Beben so tödlich. Im Oktober 2010 brach die Cholera aus, eingeschleppt durch Soldaten der UN-Friedenstruppe; Tausende starben. Die Vereinten Nationen räumten 2016 eine Mitverantwortung ein, eine rechtliche Haftung lehnten sie ab.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2011,
    "titel": "Tōhoku und Fukushima",
    "text": "Am 11. März 2011 löst ein Erdbeben der Magnitude 9,0 vor Japans Nordostküste einen Tsunami aus; rund 18.000 Menschen sterben oder bleiben vermisst. Im Kernkraftwerk Fukushima Daiichi fällt die Kühlung aus, in drei Reaktoren schmilzt der Brennstoff. Die Untersuchungskommission des japanischen Parlaments nannte den Unfall 2012 eine zutiefst menschengemachte Katastrophe: Der Betreiber hatte Berechnungen höherer Tsunamis gekannt und nicht gehandelt. Mehr als 2.000 Todesfälle in Fukushima werden auf Evakuierungsfolgen zurückgeführt. Deutschland beschloss im selben Jahr den Atomausstieg.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2013,
    "titel": "Rana Plaza",
    "text": "Am 24. April 2013 stürzt in Savar bei Dhaka das achtstöckige Gebäude Rana Plaza ein, in dem mehrere Textilfabriken für westliche Modemarken produzierten. Mehr als 1.100 Menschen sterben, etwa 2.500 werden verletzt. Am Vortag waren Risse entdeckt worden, eine Bank im Erdgeschoss schloss, die Näherinnen wurden dennoch zur Arbeit geschickt. Die oberen Etagen waren ohne Genehmigung aufgesetzt. Danach entstand ein verbindliches Abkommen über Brandschutz und Gebäudesicherheit in Bangladesch; die Debatte trug in Deutschland auch zum Lieferkettengesetz von 2021 bei.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2020,
    "titel": "Die Explosion im Hafen von Beirut",
    "text": "Am 4. August 2020 explodieren im Hafen von Beirut etwa 2.750 Tonnen Ammoniumnitrat, die seit 2014 ungesichert in einer Lagerhalle gelegen hatten. Über 220 Menschen sterben, mehr als 6.500 werden verletzt, ganze Stadtviertel werden verwüstet. Behörden und Spitzenpolitiker waren mehrfach gewarnt worden. Die Ermittlungen wurden durch Klagen gegen die Untersuchungsrichter jahrelang blockiert. Richter Tarek Bitar schloss seine Ermittlungen im März 2026 ab, im September legte die Generalstaatsanwaltschaft ihre Stellungnahme vor. Stand: Oktober 2026 steht die Anklageschrift aus; Justizminister Adel Nassar hatte sie Anfang September für Oktober angekündigt, Ende September äußerte er nur noch die Hoffnung auf eine Anklage bis zum Jahresende.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2021,
    "titel": "Die Flut im Ahrtal",
    "text": "In der Nacht zum 15. Juli 2021 steigt die Ahr nach extremem Starkregen in kürzester Zeit auf Pegelstände, die alle Messungen übertreffen. Im Ahrtal sterben 135 Menschen, in Deutschland insgesamt über 180, auch in Belgien gibt es Dutzende Tote. Warnungen lagen vor, doch der Katastrophenalarm im Landkreis Ahrweiler kam spät, viele Menschen wussten nicht, was ihnen bevorstand. Die Staatsanwaltschaft Koblenz stellte das Verfahren gegen den damaligen Landrat 2024 ein. Ähnliche Fluten hatte es 1804 und 1910 gegeben. Deutschland führte danach die Warnung per Cell Broadcast auf alle Mobiltelefone ein.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2023,
    "titel": "Das Erdbeben in der Türkei und Syrien",
    "text": "Am 6. Februar 2023 erschüttern zwei Erdbeben der Magnitude 7,8 und 7,5 im Abstand weniger Stunden den Südosten der Türkei und den Norden Syriens. In der Türkei sterben über 50.000 Menschen, in Syrien nach Angaben der Vereinten Nationen mehrere Tausend; im Bürgerkriegsgebiet ist die Zahl besonders unsicher. Viele Gebäude stürzten ein, die nach geltenden Vorschriften hätten stehen bleiben müssen; Bauamnestien hatten zuvor nicht genehmigte Bauten legalisiert. Gegen Hunderte Bauunternehmer und Verantwortliche wurde ermittelt. Die Frage, ob ein Beben tötet oder die Bauaufsicht, stellte sich hier mit großer Schärfe.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2023,
    "titel": "Derna",
    "text": "In der Nacht zum 11. September 2023 bringt Sturmtief Daniel extreme Regenmengen über den Osten Libyens. Oberhalb der Stadt Derna brechen zwei Staudämme, die seit Jahrzehnten nicht ausreichend gewartet worden waren; eine Flutwelle reißt ganze Stadtteile ins Meer. Die Vereinten Nationen nannten mindestens 4.352 Tote, frühe Angaben des Libyschen Roten Halbmonds lagen bei über 11.000, Tausende gelten als vermisst. Ein libyscher Wissenschaftler hatte 2022 vor genau diesem Szenario gewarnt. Die politische Spaltung des Landes erschwerte Wartung wie Hilfe. Im Juli 2024 verurteilte ein Gericht in Derna zwölf von sechzehn angeklagten Beamten zu Haftstrafen zwischen neun und 27 Jahren.",
    "seit": "2026-10-01"
   }
  ],
  "strittig": "Fast jede Opferzahl in diesem Querschnitt ist eine Schätzung, und viele schwanken um ein Vielfaches: Für Antiochia 526 und Shaanxi 1556 gibt es nur die Zahlen der Chronisten, für die Fluten in China 1931 liegen die Angaben zwischen etwa 400.000 und vier Millionen, für Haiti 2010 zwischen rund 46.000 und über 300.000. Zahlen wurden aus politischen Gründen klein gehalten, wie in San Francisco 1906 oder bei der lange verschwiegenen Zahl von Tangshan, oder sie wurden in der ersten Erschütterung zu hoch gegriffen. Bei Tschernobyl reichen die Schätzungen späterer Krebstote je nach Methode und betrachteter Bevölkerung von einigen Tausend bis zu Zehntausenden. Auch Datierungen sind umstritten: Der Ausbruch von Thera wird nach Radiokarbonmessungen um 1600 v. Chr. angesetzt, nach der ägyptischen Chronologie und dem archäologischen Befund eher um 1500 v. Chr. Beim Vesuv galt der 24. August 79 als gesichert, weil ihn die Handschriften der Pliniusbriefe überliefern; Herbstfrüchte, warme Kleidung der Opfer und eine 2018 gefundene Kohleinschrift, die auf Mitte Oktober datiert ist, sprechen für einen Ausbruch im Oktober oder später. Die Handschriften selbst sind nicht einheitlich. Welcher Vulkan 536 die Abkühlung auslöste, ist offen. Am grundsätzlichsten ist der Streit über den Begriff Naturkatastrophe selbst. Die Katastrophenforschung betont seit Jahrzehnten, dass Erdbeben, Stürme und Dürren Gefahren sind, die Katastrophe aber aus Verwundbarkeit entsteht – aus Armut, Bauweise, Warnung, Regierungshandeln. Bei den Hungersnöten in Irland, Bengalen und China ist das politische Gewicht so groß, dass die Bewertung selbst umkämpft ist: Für Irland lehnen die meisten Historiker den Begriff Völkermord ab, sehen aber schwere politische Versäumnisse; für Bengalen ist strittig, ob eine echte Ernteknappheit bestand und wie viel Verantwortung beim britischen Kriegskabinett und bei Churchill persönlich lag; für China weist die Forschung die offizielle Rede von Naturkatastrophen weitgehend zurück, über die Opferzahl besteht aber keine Einigkeit. Bei technischen Unglücken wie Estonia oder Hindenburg hielten sich alternative Erklärungen lange, auch nachdem Untersuchungen sie widerlegt oder für unwahrscheinlich erklärt hatten.",
  "quellen": [
   "Encyclopaedia Britannica: Thera; Pompeii; Lisbon earthquake of 1755; Tambora; Krakatoa; Johnstown Flood; Messina earthquake of 1908; Titanic; Halifax Explosion; Kanto earthquake of 1923; Bengal famine of 1943; Great Leap Forward; Chile earthquake of 1960; Vajont Dam disaster; Aberfan disaster; Bhola cyclone; Tangshan earthquake of 1976; Bhopal disaster; Chernobyl disaster; Indian Ocean tsunami of 2004; Hurricane Katrina; Haiti earthquake of 2010; Fukushima accident; Rana Plaza collapse; Beirut explosion of 2020",
   "Tacitus, Annalen 15,38–44; Plinius der Jüngere, Briefe 6,16 und 6,20; Prokop, Vandalenkriege 2,14; Johannes Malalas, Chronik 17",
   "M. Sigl u. a.: Timing and climate forcing of volcanic eruptions for the past 2,500 years, Nature 523, 2015; U. Büntgen u. a.: Cooling and societal change during the Late Antique Little Ice Age, Nature Geoscience 9, 2016",
   "Report of the Presidential Commission on the Space Shuttle Challenger Accident (Rogers-Kommission), 1986; The Public Inquiry into the Piper Alpha Disaster (Cullen-Bericht), 1990",
   "IAEA, INSAG-1 (1986) und INSAG-4 (1991); WHO/IAEA/UNDP: Chernobyl's Legacy, 2005; UNSCEAR-Berichte 2008 und 2011",
   "The National Diet of Japan Fukushima Nuclear Accident Independent Investigation Commission, Report, 2012",
   "Estonian Safety Investigation Bureau u. a.: Final Report MV Estonia, Dezember 2025; ERR News, 16.12.2025",
   "Naharnet, 7.9.2026 (Stand der Beirut-Ermittlungen); LBCI, 30.9.2026 (Justizminister Nassar zur Anklage im Beirut-Verfahren); France 24, 28.7.2024 (Urteile Derna); beck-aktuell, 18.4.2024 (Einstellung des Verfahrens Ahrweiler); Arab News, 30.3.2026; Naharnet, 14.9.2026; Yeni Şafak, 21.9.2026; Libya Herald, 28.7.2024",
   "Amartya Sen: Poverty and Famines, 1981"
  ],
  "literatur": [
   {
    "titel": "Poverty and Famines",
    "autor": "Amartya Sen",
    "jahr": "1981",
    "warum": "Zeigt am Beispiel Bengalens und anderer Fälle, dass Hungersnöte selten an fehlender Nahrung, sondern an fehlendem Zugang scheitern — der Schlüssel zur Frage, was an einer Naturkatastrophe natürlich ist."
   },
   {
    "titel": "Tambora: The Eruption That Changed the World",
    "autor": "Gillen D'Arcy Wood",
    "jahr": "2014",
    "warum": "Verfolgt die Folgen eines einzigen Ausbruchs rund um die Welt, von Hungersnöten in Yunnan bis zur Cholera in Bengalen. Vorbildlich, wie Klimadaten und Geschichte zusammengebracht werden."
   },
   {
    "titel": "The Last Day: Wrath, Ruin, and Reason in the Great Lisbon Earthquake of 1755",
    "autor": "Nicholas Shrady",
    "jahr": "2008",
    "warum": "Lissabon 1755 als Ereignis, Wiederaufbau und Denkanstoß der Aufklärung — knapp und gut lesbar."
   },
   {
    "titel": "The Challenger Launch Decision",
    "autor": "Diane Vaughan",
    "jahr": "1996",
    "warum": "Die gründlichste Studie darüber, wie Organisationen sich an Risiken gewöhnen. Wer verstehen will, warum Warnungen überhört werden, beginnt hier."
   },
   {
    "titel": "Tombstone: The Great Chinese Famine, 1958–1962",
    "autor": "Yang Jisheng",
    "jahr": "2008 (engl. 2012)",
    "warum": "Ein chinesischer Journalist, dessen Vater in der Hungersnot starb, rekonstruiert sie aus Parteiarchiven der Provinzen."
   },
   {
    "titel": "Midnight in Chernobyl",
    "autor": "Adam Higginbotham",
    "jahr": "2019",
    "warum": "Auf sowjetischen Akten und Interviews beruhende Darstellung, die Technik, Bürokratie und Vertuschung zusammen erklärt."
   }
  ],
  "seit": "2026-10-01"
 },
 {
  "id": "kuenstler",
  "titel": "Künstlerinnen und Künstler – Leben, Werk, Wirkung",
  "kurz": "Werke haben Urheber – aber wer als Künstler gilt, entscheiden Auftraggeber, Markt und Nachwelt.",
  "einleitung": "Die Querschnitte zu Kunst und Musik fragen nach Techniken, Auftraggebern und Brüchen. Dieser Querschnitt geht den umgekehrten Weg: von einzelnen Menschen aus, die ein Werk geschaffen haben, und von dem, was danach mit ihm geschah. Auffällig ist, wie oft Ruhm erst nach dem Tod entstand, durch Herausgeber, Witwen, Sammler oder Staaten; wie oft Werke verboten, beschnitten oder zerstört wurden; und wie selten Frauen in die Überlieferung gelangten, obwohl sie da waren. Die Auswahl ist eine Auswahl – jede Station steht für eine Frage, nicht für eine Rangliste.",
  "stationen": [
   {
    "jahr": -438,
    "titel": "Phidias und die Athena Parthenos",
    "text": "Für den Parthenon schafft Phidias eine fast zwölf Meter hohe Athena aus Gold und Elfenbein über einem Holzkern; 438 v. Chr. wird sie geweiht, und er leitet wohl auch den Bauschmuck des Tempels. Erhalten ist von der Statue nichts, nur verkleinerte römische Kopien. Nach Plutarch, der Jahrhunderte später schreibt, wurde Phidias der Unterschlagung angeklagt. In Olympia fand man seine Werkstatt für die Zeusstatue – mit einem Becher, auf dem steht: Ich gehöre dem Phidias.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -19,
    "titel": "Vergil und die Aeneis",
    "text": "Vergil arbeitet elf Jahre an einem Epos, das Rom eine trojanische Herkunft und Augustus eine göttliche Bestimmung gibt. Als er 19 v. Chr. stirbt, ist es unvollendet, und er soll verfügt haben, das Manuskript zu verbrennen. Augustus ließ es stattdessen herausgeben. Die Aeneis wurde Schulbuch für anderthalb Jahrtausende; Dante wählte Vergil als Führer durch die Unterwelt. Ob sie Herrscherlob ist oder die Kosten der Macht mitzeigt, wird bis heute gestritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 353,
    "titel": "Wang Xizhi und das Vorwort vom Orchideenpavillon",
    "text": "Bei einem Dichtertreffen im Jahr 353 schreibt Wang Xizhi das Vorwort zu den dort entstandenen Gedichten – ein Gelegenheitstext, der als vollkommenste Schrift Chinas gilt. Der Tang-Kaiser Taizong sammelte seine Werke und soll das Original mit ins Grab genommen haben. Erhalten sind nur Nachzeichnungen und Abriebe. Kalligraphie stand in China über der Malerei, weil die Hand des Schreibers sichtbar bleibt; an Wangs Schrift maßen sich Schreiber bis in die Gegenwart.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 380,
    "titel": "Gu Kaizhi und die Ermahnungen der Hofdame",
    "text": "Gu Kaizhi, der um 344 bis 406 lebte, gilt als einer der frühesten berühmten Maler Chinas, von dem auch Schriften über Malerei überliefert sind: Ein Bild müsse den Geist der Person einfangen, nicht nur ihre Gestalt. Die berühmte Bildrolle mit Ratschlägen für Frauen am Hof im British Museum wird ihm traditionell zugeschrieben; die Forschung datiert sie ins 5. bis 8. Jahrhundert, und ob sie ein Original von ihm kopiert, ist offen. Nach Plünderungen im Boxeraufstand 1900 kam sie nach London. Zuschreibung und Besitz sind gleichermaßen umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 757,
    "titel": "Du Fu und der Blick auf das besetzte Chang'an",
    "text": "Während des An-Lushan-Aufstands sitzt Du Fu im eroberten Chang'an fest und schreibt 757 das Gedicht vom Frühlingsblick: Das Land ist zerbrochen, Berge und Flüsse bleiben. Der Aufstand kostete die Tang-Dynastie ihre Stärke, und Du Fu machte daraus Dichtung über Krieg, Hunger und Flucht aus der Sicht der Betroffenen. Zu Lebzeiten blieb er ein erfolgloser Beamter. Erst nach seinem Tod wurde er zum Maßstab; seit der Song-Zeit nennt man ihn den Heiligen der Dichtung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1008,
    "titel": "Murasaki Shikibu: das Tagebuch einer Romanautorin",
    "text": "In ihrem Hoftagebuch notiert Murasaki Shikibu 1008, wie ein Höfling bei einem Fest nach ihr ruft, als wäre sie eine Figur aus ihrem Roman. Der Eintrag ist der früheste sichere Beleg dafür, dass das Genji Monogatari am Hof gelesen wurde; 2008 feierte Japan deshalb tausend Jahre Genji. Das Tagebuch zeigt die Autorin als genaue, oft bissige Beobachterin, die ihre Chinesischkenntnisse verbarg, weil sie für Frauen als unschicklich galten. Ihr Werk prägte Malerei, Theater und Sprache Japans.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1010,
    "titel": "Firdausi vollendet das Schahname",
    "text": "Nach über dreißig Jahren Arbeit schließt Firdausi um 1010 das Schahname ab, das Buch der Könige: die Geschichte Irans von der Schöpfung bis zum Ende der Sassaniden in rund fünfzigtausend Doppelversen, mit bewusst wenigen arabischen Lehnwörtern. Dass Sultan Mahmud von Ghazni ihn mit Silber statt Gold bezahlt habe, erzählen erst spätere Quellen. Belegt ist die Wirkung: Das Epos hielt das Neupersische als Literatursprache fest, und seine Handschriften gehören zu den prächtigsten Werken der persischen Buchmalerei.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1321,
    "titel": "Dante und die Commedia",
    "text": "Aus Florenz verbannt, schreibt Dante seine Wanderung durch Hölle, Läuterungsberg und Paradies – nicht auf Latein, sondern im toskanischen Volgare. Er vollendet sie kurz vor seinem Tod 1321 im Exil in Ravenna. Das Werk rechnet mit Päpsten und Florentiner Gegnern ab, die er namentlich in die Hölle versetzt. Weil die Commedia überall in Italien gelesen und auswendig gelernt wurde, wurde ihre Sprache zur Grundlage des Italienischen; der Zusatz Göttliche stammt erst von Boccaccio.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1432,
    "titel": "Jan van Eyck und der Genter Altar",
    "text": "Die Inschrift am Rahmen nennt 1432 als Jahr der Vollendung: Hubert van Eyck habe den Altar begonnen, sein Bruder Jan ihn vollendet. Wer welchen Teil malte, ist ungeklärt, und selbst die Echtheit der Inschrift wurde bezweifelt. Gewiss ist die Geschichte danach: Französische Revolutionstruppen brachten Teile nach Paris, wo sie unter Napoleon im Louvre hingen, im 19. Jahrhundert zerteilt und verkauft, von den Nationalsozialisten verschleppt. Die 1934 gestohlene Tafel der Gerechten Richter ist bis heute verschwunden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1498,
    "titel": "Albrecht Dürer und die Apokalypse",
    "text": "1498 bringt Dürer in Nürnberg fünfzehn großformatige Holzschnitte zur Offenbarung des Johannes heraus, als Buch auf Latein und Deutsch, im eigenen Verlag. Kaum ein Künstler vor ihm hatte so konsequent auf den Druck gesetzt: Grafik war billig, reiste durch ganz Europa und trug sein Monogramm. Sein Ruhm wurde vom Markt statt von einem Hof getragen. Nach Vasari beschwerte er sich in Venedig, als Marcantonio Raimondi seine Holzschnitte samt Monogramm kopierte – ein früher Streit um das eigene Zeichen.",
    "vertiefung": "buchdruck",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1498,
    "titel": "Leonardo da Vinci und das Abendmahl",
    "text": "Im Refektorium von Santa Maria delle Grazie in Mailand malt Leonardo bis etwa 1498 den Moment, in dem Jesus den Verrat ankündigt. Statt der bewährten Freskotechnik trägt er Farbe auf den trockenen Putz auf, um langsam arbeiten und nachbessern zu können. Das Experiment misslang: Schon Jahrzehnte später blätterte das Bild ab. Was heute zu sehen ist, ist das Ergebnis einer über zwanzigjährigen Restaurierung, die 1999 endete – ein Werk, berühmt geworden in einem Zustand, den sein Maler nie sah.",
    "vertiefung": "renaissance",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1504,
    "titel": "Michelangelo und der David",
    "text": "Aus einem Marmorblock, an dem andere gescheitert waren, schlägt Michelangelo bis 1504 einen über fünf Meter hohen David. Wo er stehen sollte, entschied ein Ausschuss, dem unter anderen Leonardo und Botticelli angehörten: vor dem Palazzo Vecchio, dem Sitz der Regierung. Damit wurde der junge Held, der den Riesen besiegt, zum Wahrzeichen der Republik Florenz gegen die Medici und andere Mächte. 1873 kam das Original ins Museum, auf dem Platz steht eine Kopie.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1574,
    "titel": "Sinan und die Selimiye in Edirne",
    "text": "Mit etwa achtzig Jahren vollendet der Hofarchitekt Sinan um 1574/75 die Selimiye-Moschee in Edirne. In seinen diktierten Erinnerungen nennt er frühere Bauten Lehrlings- und Gesellenstücke, diese Moschee sein Meisterwerk. Die Kuppel ruht auf acht Pfeilern; ihr Durchmesser entspricht etwa dem der Hagia Sophia, ein Maß, das osmanische Baumeister bis dahin nie erreicht hatten, und sie liegt etwas höher. Anders als in Istanbul liegt der Raum fast ohne Unterteilung unter einer einzigen Wölbung – eine Antwort auf Byzanz, keine Kopie.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1600,
    "titel": "Caravaggio und das Licht in San Luigi",
    "text": "Für die Contarelli-Kapelle in Rom malt Caravaggio 1599 und 1600 die Berufung des Matthäus: Ein Lichtstrahl fällt in einen dunklen Raum, Jesus zeigt auf einen Zöllner am Zähltisch. Heilige mit schmutzigen Füßen und hartes Hell-Dunkel machten ihn berühmt und umstritten; Kirchen lehnten manche Bilder ab. 1606 tötete er einen Mann und lebte fortan auf der Flucht, bis er 1610 starb. Danach weitgehend vergessen, wurde er erst im 20. Jahrhundert als Erneuerer der Malerei wiederentdeckt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1605,
    "titel": "Cervantes und Don Quijote",
    "text": "1605 erscheint der erste Teil des Don Quijote: ein verarmter Landadeliger, der so viele Ritterromane gelesen hat, dass er selbst Ritter werden will. Cervantes, einst Soldat bei Lepanto und fünf Jahre Gefangener in Algier, verspottet eine Mode und erfindet dabei den modernen Roman – mit Figuren, die sich verändern, und einem Erzähler, der sein eigenes Erzählen in Frage stellt. Als ein Unbekannter 1614 eine falsche Fortsetzung druckte, ließ Cervantes seine Helden im zweiten Teil darüber spotten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1615,
    "titel": "Guaman Poma schreibt dem König",
    "text": "Um 1615 vollendet der andine Adlige Felipe Guaman Poma de Ayala eine Chronik von über tausend Seiten an den spanischen König, mit fast vierhundert ganzseitigen Federzeichnungen. Sie zeigt die Inka-Ordnung und die Ausbeutung unter der Kolonialherrschaft: Priester, Verwalter und Grundherren, die Indigene misshandeln. Ob der König sie je sah, ist unbekannt. Die Handschrift lag spätestens seit den 1660er-Jahren in der Königlichen Bibliothek Kopenhagen, bekannt wurde sie erst 1908; heute gilt sie als zentrale indigene Quelle zur Kolonialzeit.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1616,
    "titel": "Artemisia Gentileschi wird Akademiemitglied",
    "text": "Als Artemisia Gentileschi 1616 in die Florentiner Accademia delle Arti del Disegno aufgenommen wird, ist sie die erste Frau dort. Vier Jahre zuvor hatte sie in Rom vor Gericht gegen den Maler Agostino Tassi ausgesagt, der sie vergewaltigt hatte, und war dabei mit Daumenschrauben befragt worden. Ihre Judith-Bilder zeigen Frauen als Handelnde. Ob man sie als Antwort auf die Tat lesen soll, ist umstritten – die Deutung droht ihr Werk auf ihre Biografie zu verkürzen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1623,
    "titel": "Shakespeare: die erste Folio-Ausgabe",
    "text": "Sieben Jahre nach Shakespeares Tod geben zwei Schauspieler seiner Truppe, John Heminges und Henry Condell, 1623 sechsunddreißig seiner Stücke gesammelt heraus. Achtzehn davon waren zuvor nie gedruckt, darunter Macbeth, Der Sturm und Was ihr wollt; ohne den Band wären sie vermutlich verloren. Theaterstücke galten damals als Gebrauchstexte, nicht als Literatur. Dass Shakespeare heute als Autor eines Werks gilt, ist auch das Ergebnis dieser Ausgabe.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1642,
    "titel": "Rembrandt und die Nachtwache",
    "text": "1642 liefert Rembrandt das Gruppenbild einer Amsterdamer Schützenkompanie: keine Reihe von Porträts, sondern eine Truppe in Bewegung, mit Licht auf wenigen Figuren. Den Namen Nachtwache erhielt das Bild erst später, weil der Firnis nachgedunkelt war; tatsächlich spielt die Szene bei Tag. 1715 wurde es beschnitten, um an eine Wand zu passen. Die Legende, das Bild habe seinen Abstieg ausgelöst, ist widerlegt – sein Bankrott 1656 hatte andere Gründe, vor allem Schulden.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1689,
    "titel": "Bashō und der schmale Pfad",
    "text": "1689 bricht Matsuo Bashō mit einem Begleiter zu einer Wanderung von rund fünf Monaten in den Norden Japans auf. Daraus entsteht Oku no Hosomichi, ein Reisebericht aus Prosa und Haiku, der erst nach seinem Tod 1702 erscheint. Bashō hatte das Haikai, ursprünglich ein geselliges Wortspiel, zu einer ernsten Kunst gemacht, in der ein Augenblick der Natur genügt. Viele der beschriebenen Orte suchte er auf, weil ältere Dichter dort gewesen waren – die Reise ist auch eine Reise durch Literatur.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1691,
    "titel": "Sor Juana Inés de la Cruz verteidigt das Wissen",
    "text": "Die Nonne Juana Inés de la Cruz in Mexiko-Stadt ist zu Lebzeiten die bekannteste Dichterin der spanischsprachigen Welt. Als ein Bischof unter dem Decknamen Sor Filotea sie öffentlich ermahnt, sich geistlichen Dingen zuzuwenden, antwortet sie 1691 mit einer Verteidigung des Rechts von Frauen auf Studium und Gelehrsamkeit. Kurz darauf gibt sie ihre Bibliothek ab und schreibt nicht mehr; 1695 stirbt sie bei einer Seuche. Wie weit sie dazu gezwungen wurde, ist umstritten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1705,
    "titel": "Maria Sibylla Merian und die Insekten Surinams",
    "text": "Mit über fünfzig Jahren reist die Frankfurter Malerin und Naturforscherin Maria Sibylla Merian 1699 mit ihrer Tochter nach Surinam, finanziert vor allem durch den Verkauf eigener Bilder. 1705 veröffentlicht sie die Metamorphosis insectorum Surinamensium: sechzig Tafeln, die Raupe, Puppe, Falter und Futterpflanze auf einem Blatt vereinen. Sie zeigte Verwandlung als Lebenszusammenhang statt Exemplare im Kasten. Ihre Arbeit beruhte auch auf dem Wissen versklavter und indigener Menschen, die sie im Text zum Teil nennt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1727,
    "titel": "Bach und die Matthäus-Passion",
    "text": "Am Karfreitag 1727 erklingt in der Leipziger Thomaskirche nach heutiger Annahme zum ersten Mal Bachs Matthäus-Passion – ältere Darstellungen nennen 1729, für zwei Chöre und zwei Orchester. Bach war Kantor einer Stadt, seine Musik Gebrauchsmusik für den Gottesdienst; nach seinem Tod geriet sie weitgehend außer Gebrauch. Erst 1829 führte der zwanzigjährige Felix Mendelssohn die Passion in Berlin wieder auf. Diese Aufführung gilt als Auslöser der Bach-Renaissance und förderte die Vorstellung eines Kanons älterer Musik.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1773,
    "titel": "Phillis Wheatley veröffentlicht ihre Gedichte",
    "text": "Als Kind aus Westafrika nach Boston verschleppt und versklavt, lernt Phillis Wheatley Englisch, Latein und die Dichtung ihrer Zeit. 1773 erscheint in London ihr Gedichtband – mit einer Bestätigung von achtzehn Bostoner Honoratioren, dass sie die Verse tatsächlich selbst verfasst habe. Sie gilt als erste Afroamerikanerin mit einem veröffentlichten Gedichtband. Kurz danach wurde sie freigelassen. Thomas Jefferson sprach ihren Gedichten später jeden Wert ab; ihre Gedichte wurden zum Argument im Streit über die Fähigkeiten Schwarzer.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1786,
    "titel": "Mozart und Figaros Hochzeit",
    "text": "Beaumarchais' Komödie, in der ein Diener seinen Grafen überlistet, war in Wien als Theaterstück verboten. Mozart und sein Librettist Lorenzo Da Ponte machten 1786 trotzdem eine Oper daraus, nachdem sie die politischen Spitzen entschärft hatten. Die Musik zeigt in Ensembles, wie Figuren verschiedener Stände gleichzeitig verschiedene Dinge wollen. In Wien war der Erfolg mäßig, in Prag überwältigend – worauf dort der Auftrag für Don Giovanni folgte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1804,
    "titel": "Beethoven streicht Napoleon",
    "text": "Beethoven hatte seine dritte Sinfonie Napoleon zugedacht. Nach dem Bericht seines Schülers Ferdinand Ries zerriss er 1804 das Titelblatt, als er hörte, dass Napoleon sich zum Kaiser gemacht hatte. Erhalten ist eine Abschrift, auf der der Name so heftig ausradiert ist, dass ein Loch im Papier entstand. Die Sinfonie erschien als Eroica, zur Erinnerung an einen großen Mann. Sie sprengte Länge und Ausdruck der Gattung und machte die Sinfonie zum Ort für Ideen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1813,
    "titel": "Jane Austen und Stolz und Vorurteil",
    "text": "1813 erscheint Stolz und Vorurteil, wie alle Romane Jane Austens zu ihren Lebzeiten ohne ihren Namen, nur als Werk der Verfasserin von Verstand und Gefühl. Die Rechte hatte sie für einen Pauschalbetrag an den Verleger verkauft. Austen schrieb über Heirat als wirtschaftliche Frage für Frauen, die oft vom Erbe ausgeschlossen waren und machte die freie indirekte Rede zum Mittel, Ironie und Innensicht zu verbinden. Ihr Name wurde erst nach ihrem Tod 1817 öffentlich genannt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1814,
    "titel": "Goya und der 3. Mai 1808",
    "text": "1814, nach dem Abzug der Franzosen, malt Goya die Erschießung von Madrider Aufständischen durch französische Soldaten: ein Mann in weißem Hemd mit ausgebreiteten Armen vor einem gesichtslosen Peloton. Krieg erscheint nicht als Heldentat, sondern als Hinrichtung. Parallel entstehen die Radierungen der Desastres de la guerra, die Gräuel beider Seiten zeigen. Goya veröffentlichte sie nie; gedruckt wurden sie erst 1863, Jahrzehnte nach seinem Tod.",
    "vertiefung": "napoleonische-kriege",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1831,
    "titel": "Hokusai und die große Welle",
    "text": "Um 1831 erscheint in Edo die Holzschnittfolge Sechsunddreißig Ansichten des Berges Fuji. Das bekannteste Blatt zeigt eine Welle, die Fischerboote zu verschlingen droht, mit dem Fuji winzig im Hintergrund. Hokusai war über siebzig. Das Blau stammt zum Teil aus Berliner Blau, einem europäischen Farbstoff, der damals preiswert nach Japan gelangte. So steht am Anfang des bekanntesten japanischen Bildes ein Import – und das Bild selbst wurde zum Export, der die europäische Kunst veränderte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1844,
    "titel": "Turner und die Eisenbahn",
    "text": "1844 stellt William Turner in London Regen, Dampf und Geschwindigkeit aus: Eine Lokomotive der Great Western Railway rast über eine Themsebrücke, aufgelöst in Licht, Nebel und Farbe. Kritiker sahen Pinselschmutz, andere die erste Malerei der Geschwindigkeit. Turner machte die Atmosphäre zum Gegenstand und nahm die Auflösung der Form vorweg, die später die Impressionisten verfolgten. Seinen Nachlass von Hunderten Gemälden und Tausenden Zeichnungen vermachte er der Nation.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1846,
    "titel": "Clara Schumann und das Klaviertrio",
    "text": "1846 komponiert Clara Schumann ihr Klaviertrio g-Moll, ihr umfangreichstes Kammermusikwerk. Wenige Jahre zuvor hatte sie ins Tagebuch geschrieben, ein Frauenzimmer müsse nicht komponieren wollen, es habe noch keine gekonnt. Berühmt war sie als Pianistin: Über sechzig Jahre trat sie auf, ernährte eine Familie mit acht Kindern und prägte das Konzertprogramm, in dem ernste Werke statt Virtuosenstücke stehen. Nach Robert Schumanns Tod komponierte sie kaum noch und gab sein Werk heraus.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1857,
    "titel": "Baudelaire vor Gericht",
    "text": "Wenige Wochen nach Erscheinen der Blumen des Bösen 1857 wird Charles Baudelaire wegen Verletzung der öffentlichen Moral verurteilt; sechs Gedichte müssen aus dem Band entfernt werden. Im selben Jahr stand Flaubert wegen Madame Bovary vor Gericht und wurde freigesprochen. Baudelaire schrieb über die Großstadt, Rausch und Verfall und machte das Hässliche zum Gegenstand der Lyrik. Das Urteil gegen die Gedichte wurde erst 1949 aufgehoben.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1872,
    "titel": "Monet und der Name des Impressionismus",
    "text": "1872 malt Claude Monet den Hafen von Le Havre im Morgendunst, mit schnellen Strichen und einer roten Sonne. Als er das Bild 1874 in der ersten Ausstellung einer unabhängigen Künstlergruppe zeigt, nennt er es Impression, Sonnenaufgang. Ein Kritiker machte daraus spöttisch die Impressionisten – die Gruppe übernahm den Namen. Das Malen im Freien wurde durch Farbe in Tuben möglich, eine Industrieware. Monet malte bis zu seinem Tod 1926 und endete in den großen Seerosenbildern.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1876,
    "titel": "Wagner eröffnet Bayreuth",
    "text": "1876 wird in Bayreuth erstmals der vollständige Ring des Nibelungen aufgeführt, in einem eigens nach Wagners Vorstellungen gebauten Festspielhaus mit verdecktem Orchester und verdunkeltem Saal. Wagner verstand die Oper als Gesamtkunstwerk und schuf zugleich einen Pilgerort. Sein Werk ist untrennbar von seinem Antisemitismus: Schon 1850 hatte er die Schrift Das Judentum in der Musik veröffentlicht. Die Vereinnahmung durch die Nationalsozialisten belastet Bayreuth bis heute.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1888,
    "titel": "Van Gogh in Arles",
    "text": "1888 zieht Vincent van Gogh nach Arles und malt in gut einem Jahr Hunderte Bilder, darunter die Sonnenblumen. Zu Lebzeiten verkaufte er fast nichts; sein Bruder Theo finanzierte ihn. Dass er berühmt wurde, ist wesentlich das Werk von Theos Witwe Jo van Gogh-Bonger: Sie verlieh Bilder an Ausstellungen, verkaufte gezielt und gab 1914 die Briefe heraus. Damit entstand auch die Legende vom verkannten Genie, die das Bild vom Künstler im 20. Jahrhundert prägte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1899,
    "titel": "Camille Claudel und Das reife Alter",
    "text": "1899 stellt Camille Claudel ihre über Jahre entwickelte Gruppe Das reife Alter in Gips aus: Ein alter Mann wird von einer Frau fortgezogen, während eine junge Frau kniend nach ihm greift. Viele lesen darin ihre Trennung von Rodin, dessen Schülerin, Mitarbeiterin und Geliebte sie war. Claudel war eine eigenständige Bildhauerin, wurde aber meist an ihm gemessen. 1913 ließ ihre Familie sie in eine Anstalt einweisen; sie blieb dort dreißig Jahre bis zu ihrem Tod 1943. Erst seit den 1980er-Jahren wird ihr Werk breit ausgestellt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1913,
    "titel": "Tagore erhält den Nobelpreis",
    "text": "1913 erhält Rabindranath Tagore als erster Nichteuropäer den Literaturnobelpreis, vor allem für Gitanjali, Gedichte, die er selbst aus dem Bengalischen ins Englische übertragen hatte. In Europa wurde er als Weiser aus dem Osten gefeiert – ein Bild, das sein Werk aus Romanen, Erzählungen, Dramen und über zweitausend Liedern verkürzte. Nach dem Massaker von Amritsar 1919 gab er seinen britischen Adelstitel zurück. Lieder von ihm sind die Nationalhymnen Indiens und Bangladeschs.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1918,
    "titel": "Lu Xun und das Tagebuch eines Verrückten",
    "text": "1918 veröffentlicht Lu Xun in einer Zeitschrift das Tagebuch eines Verrückten, eine der ersten Erzählungen in moderner chinesischer Umgangssprache statt im klassischen Schriftchinesisch. Ein Mann glaubt, seine Umgebung wolle ihn verspeisen, und liest in den alten Büchern zwischen den Zeilen das Wort Menschenfresserei. Die Erzählung wurde zum Manifest der Kritik an der konfuzianischen Tradition. Nach 1949 erhob die Kommunistische Partei Lu Xun zum Nationalschriftsteller.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1919,
    "titel": "Walter Gropius gründet das Bauhaus",
    "text": "1919 gründet der Architekt Walter Gropius in Weimar das Bauhaus, eine Schule, die Kunst und Handwerk vereinen soll; später heißt das Programm Kunst und Technik. Lehrer wie Klee, Kandinsky und Moholy-Nagy arbeiten hier. 1925 zieht die Schule nach Dessau in ein Gebäude mit großen Glasfassaden, 1933 wird sie unter dem Druck der Nationalsozialisten aufgelöst. Durch emigrierte Lehrer und Schüler wurde ihr Stil in den USA und Israel weitergetragen, etwa in Chicago und in der Weißen Stadt von Tel Aviv.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1924,
    "titel": "Käthe Kollwitz: Nie wieder Krieg",
    "text": "1924 zeichnet Käthe Kollwitz für einen Jugendtag in Leipzig das Plakat Nie wieder Krieg: eine Gestalt mit erhobenem Arm. Kollwitz hatte 1914 ihren Sohn Peter im Krieg verloren, nachdem sie seiner freiwilligen Meldung zugestimmt hatte. 1919 wurde sie als erste Frau Mitglied der Preußischen Akademie der Künste. 1933 musste sie austreten, weil sie einen Aufruf zur Einheit von SPD und KPD gegen die Nationalsozialisten unterschrieben hatte; danach durfte sie kaum noch ausstellen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1925,
    "titel": "Eisenstein und Panzerkreuzer Potemkin",
    "text": "Zum zwanzigsten Jahrestag der Revolution von 1905 dreht Sergej Eisenstein 1925 Panzerkreuzer Potemkin. Seine Montage – kurze, gegeneinandergesetzte Einstellungen – soll nicht erzählen, sondern Empfindung erzeugen. Die berühmte Szene auf der Treppe von Odessa, in der Soldaten Zivilisten niederschießen, hat es so, am hellen Tag und als Marsch über die Stufen, nicht gegeben; Truppen schossen aber anderswo in der Stadt auf Aufständische, wohl mit Hunderten Toten. Das erfundene Bild ersetzte für Generationen das Ereignis.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1928,
    "titel": "Louis Armstrong und West End Blues",
    "text": "Im Juni 1928 nimmt Louis Armstrong in Chicago West End Blues auf. Die Platte beginnt mit einer unbegleiteten Trompetenkadenz, die Musiker bis heute nachspielen. Armstrong machte den Jazz von einer Ensemblemusik, in der alle zugleich improvisieren, zu einer Kunst des Solisten, und prägte mit seinem Gesang die Phrasierung der Popmusik. Als Schwarzer Star in einem segregierten Land wurde er später von Teilen der Bürgerrechtsbewegung als zu angepasst kritisiert – ein Urteil, das heute vielfach revidiert wird.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1933,
    "titel": "Diego Rivera und das zerstörte Wandbild",
    "text": "Für das Rockefeller Center in New York malt Diego Rivera 1933 ein Wandbild über den Menschen am Scheideweg zwischen Kapitalismus und Sozialismus. Als er ein Porträt Lenins einfügt und sich weigert, es zu entfernen, wird er bezahlt und entlassen, das Bild verhängt und 1934 abgeschlagen. Rivera malte es danach im Palacio de Bellas Artes in Mexiko-Stadt neu. Der Fall zeigt das Dilemma der mexikanischen Wandmalerei: revolutionäres Programm mit Geld von Staaten und Millionären.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1935,
    "titel": "Leni Riefenstahl und Triumph des Willens",
    "text": "1935 kommt Leni Riefenstahls Film über den Reichsparteitag 1934 in die Kinos, gedreht mit großem Aufwand und im Auftrag Hitlers. Kamerafahrten, Untersicht und Massenornament machten ihn zum Muster der Propaganda. Für Tiefland ließ sie ab 1940 Sinti und Roma aus dem Lager Salzburg-Maxglan als Komparsen zwangsverpflichten; viele wurden später deportiert und ermordet. Im Entnazifizierungsverfahren wurde sie als Mitläuferin eingestuft und bestritt bis zu ihrem Tod 2003, politisch gewesen zu sein. Ihre Filmtechnik wirkt bis heute nach.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1936,
    "titel": "Dorothea Lange und die Migrant Mother",
    "text": "Im März 1936 fotografiert Dorothea Lange im Auftrag einer Bundesbehörde eine Erntearbeiterin mit ihren Kindern in einem Lager in Kalifornien. Das Bild wurde zum Symbol der Weltwirtschaftskrise und half, Hilfslieferungen auszulösen. Die Frau, Florence Owens Thompson, wurde erst in den 1970er-Jahren identifiziert und fühlte sich ausgenutzt; sie erhielt nie etwas dafür. Langes Fotos aus den Internierungslagern für Japanischstämmige 1942 hielt die Armee unter Verschluss.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1937,
    "titel": "Picasso und Guernica",
    "text": "Nach der Bombardierung der baskischen Stadt Guernica durch die deutsche Legion Condor im April 1937 malt Pablo Picasso für den Pavillon der Spanischen Republik auf der Pariser Weltausstellung ein riesiges Bild in Schwarz, Weiß und Grau. Es zeigt keine Flugzeuge, sondern Schreie, Tiere, Trümmer und eine tote Mutter mit Kind. Picasso bestimmte, das Bild dürfe erst nach Spanien, wenn dort die Demokratie zurückgekehrt sei. Es kam 1981, sechs Jahre nach Francos Tod.",
    "vertiefung": "spanischer-buergerkrieg",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1939,
    "titel": "Frida Kahlo im Louvre",
    "text": "1939 kauft der französische Staat nach einer Pariser Ausstellung Frida Kahlos Selbstbildnis Der Rahmen – es gilt als erstes Werk eines mexikanischen Künstlers des 20. Jahrhunderts, das ein großes internationales Museum kaufte; heute hängt es im Centre Pompidou. Im selben Jahr malt sie Die zwei Fridas. Kahlo malte vor allem sich selbst: ihren durch einen Busunfall verletzten Körper, ihre Herkunft, ihre Ehe mit Diego Rivera. Zu Lebzeiten stand sie in seinem Schatten; seit den 1980er-Jahren ist sie berühmter als er, ihr Gesicht eine Marke.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1940,
    "titel": "Chaplin und Der große Diktator",
    "text": "1940, als die USA noch neutral sind, bringt Charles Chaplin eine Satire auf Hitler ins Kino, seinen ersten Tonfilm mit durchgehendem Dialog. Er spielt einen jüdischen Friseur und den Diktator Hynkel, der mit einem Globus tanzt. Am Ende hält der Friseur eine Rede für Menschlichkeit direkt in die Kamera. In seiner Autobiografie schrieb Chaplin, er hätte den Film nicht machen können, hätte er von den Vernichtungslagern gewusst. Der Satz markiert die Grenze, an die Satire über die NS-Herrschaft stößt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1950,
    "titel": "Kurosawa und Rashomon",
    "text": "Akira Kurosawas Rashomon erzählt 1950 ein Verbrechen viermal, aus der Sicht von vier Beteiligten, und jede Fassung widerspricht den anderen. Der Film gewann 1951 den Goldenen Löwen in Venedig, wo man ihn ohne große Erwartung eingereicht hatte, und öffnete dem japanischen Kino den Weltmarkt. Rashomon-Effekt nennen Juristen und Sozialwissenschaftler seither das Phänomen, dass Zeugen dasselbe Ereignis unvereinbar schildern. Kurosawas spätere Filme wurden in Hollywood und Italien als Western neu gedreht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1955,
    "titel": "Satyajit Ray und Pather Panchali",
    "text": "Mit wenig Geld, Laiendarstellern und einem Kameramann, der noch nie einen Spielfilm gedreht hatte, dreht der Werbegrafiker Satyajit Ray über mehrere Jahre die Geschichte einer armen bengalischen Familie. Als das Geld ausging, half die Regierung von Westbengalen. Pather Panchali kam 1955 heraus und wurde 1956 in Cannes ausgezeichnet. Ray zeigte ein Indien jenseits der Musikfilme aus Bombay, mit der Ruhe des italienischen Neorealismus. Mit ihm begann das indische Autorenkino.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1958,
    "titel": "Chinua Achebe und Okonkwo",
    "text": "1958 erscheint Chinua Achebes Roman Things Fall Apart über einen Igbo-Mann, dessen Welt mit Missionaren und Kolonialverwaltung zerbricht. Achebe schrieb ausdrücklich gegen europäische Romane an, in denen Afrikaner nur Kulisse waren. Er erzählt eine Gesellschaft mit eigenen Gesetzen, Festen und Konflikten. Der Roman wurde in über fünfzig Sprachen übersetzt und zum Grundtext der afrikanischen Literatur. 1975 kritisierte Achebe Conrads Herz der Finsternis öffentlich als rassistisch und löste eine lange Debatte aus.",
    "vertiefung": "dekolonisation",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1959,
    "titel": "Nagib Machfus und die Kinder unseres Viertels",
    "text": "1959 erscheint in der Kairoer Zeitung al-Ahram als Fortsetzungsroman Nagib Machfus' Die Kinder unseres Viertels, eine Allegorie, in der die Geschichte der Offenbarungsreligionen in einer Kairoer Gasse spielt. Religiöse Gelehrte protestierten, eine Buchausgabe erschien in Ägypten jahrzehntelang nicht. 1988 erhielt Machfus als erster arabischsprachiger Autor den Literaturnobelpreis. 1994 stach ihm ein Islamist in den Hals; er überlebte, konnte aber kaum noch schreiben.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Oscar Niemeyer baut Brasília",
    "text": "Am 21. April 1960 wird Brasília als Hauptstadt eingeweiht, nach weniger als vier Jahren Bauzeit auf dem Hochland im Landesinneren. Den Stadtplan entwarf Lúcio Costa, die Regierungsbauten Oscar Niemeyer: Kongress mit zwei Schalen, Kathedrale aus geschwungenen Stützen, Paläste mit leichten Säulen. Die Stadt sollte Brasilien ins Innere und in die Moderne führen. Kritiker bemängeln die autogerechte Weite und die Satellitenstädte, in denen die Bauarbeiter blieben. Seit 1987 ist sie Welterbe.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1964,
    "titel": "Andy Warhol und die Brillo-Kiste",
    "text": "1964 stellt Andy Warhol in New York Holzkisten aus, die mit Siebdruck genau wie Kartons der Seifenmarke Brillo bemalt sind. Wodurch, fragte der Philosoph Arthur Danto im selben Jahr, unterscheidet sich ein Kunstwerk von einem gleich aussehenden Ding? Seine Antwort – durch eine Kunstwelt aus Kunsttheorie und Kenntnis der Kunstgeschichte – wurde zur einflussreichen Kunstdefinition. Warhols Werkstatt hieß Factory, seine Bilder entstanden in Serie. Den Künstler als Marke gibt es seither als Programm.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1977,
    "titel": "Fela Kuti und Zombie",
    "text": "Fela Kuti verbindet in Lagos Highlife, Jazz und Funk zum Afrobeat, mit oft viertelstündigen Stücken und Texten gegen die Militärregierung. Auf Zombie verspottet er Soldaten als willenlose Befehlsempfänger. Im Februar 1977 stürmte Militär seinen Wohnsitz, die selbst ausgerufene Kalakuta-Republik, und brannte ihn nieder; seine Mutter, die Frauenrechtlerin Funmilayo Ransome-Kuti, wurde aus einem Fenster geworfen und starb 1978 an den Folgen. Fela wurde immer wieder verhaftet und machte weiter.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1987,
    "titel": "Toni Morrison und Menschenkind",
    "text": "1987 erscheint Toni Morrisons Roman Beloved über eine geflohene Sklavin, die ihr Kind tötet, um es vor der Rückkehr in die Sklaverei zu bewahren; Vorbild war der Fall von Margaret Garner von 1856. Morrison erzählte Sklaverei von innen, als Erinnerung, die die Überlebenden heimsucht. Der Roman erhielt 1988 den Pulitzerpreis, 1993 wurde Morrison als erste Afroamerikanerin mit dem Literaturnobelpreis ausgezeichnet. In den USA gehört das Buch zugleich zu den Büchern, deren Entfernung aus Schulen am häufigsten verlangt wird.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2004,
    "titel": "Zaha Hadid und der Pritzker-Preis",
    "text": "2004 erhält Zaha Hadid als erste Frau den Pritzker-Preis, die wichtigste Auszeichnung der Architektur. Die in Bagdad geborene Architektin in London hatte jahrelang Wettbewerbe gewonnen, deren Entwürfe als unbaubar galten; ihre fließenden, schrägen Formen wurden erst mit computergestützter Planung umsetzbar. Danach baute sie weltweit Museen, Opernhäuser und Stadien. Kritik traf Projekte in autoritären Staaten und die Arbeitsbedingungen auf Baustellen am Golf. Hadid starb 2016.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2009,
    "titel": "Ai Weiwei und die Namen der Schulkinder",
    "text": "Nach dem Erdbeben in Sichuan 2008, bei dem viele Schulgebäude einstürzten, sammeln Ai Weiwei und Freiwillige die Namen getöteter Kinder, die die Behörden nicht veröffentlichten. 2009 verkleidet er die Fassade des Hauses der Kunst in München mit Tausenden Kinderrucksäcken, die den Satz einer Mutter bilden. 2011 hielten ihn die chinesischen Behörden 81 Tage ohne Anklage fest, später warfen sie ihm Steuerhinterziehung vor. Seit 2015 lebt er im Ausland. Kunst ist bei ihm Dokumentation und Protest zugleich.",
    "seit": "2026-10-01"
   }
  ],
  "strittig": "Schon die Idee des einzelnen Genies ist eine historische Erfindung: Viele Werke entstanden in Werkstätten, Kollektiven oder als Auftragsarbeit, und Zuschreibungen an große Namen sind oft unsicher, etwa bei Gu Kaizhi oder dem Genter Altar. Umstritten ist auch, wie viel Biografie in die Deutung eines Werks gehört – bei Artemisia Gentileschi, Camille Claudel oder Frida Kahlo droht das Leben das Werk zu überdecken. Bei Künstlern wie Wagner oder Riefenstahl ist offen, ob und wie sich künstlerischer Rang und moralische Verantwortung trennen lassen. Schließlich ist jede Auswahl selbst ein Kanon: Europa, Männer und Schriftkulturen sind in der Überlieferung überrepräsentiert, und Künstlerinnen und Künstler aus mündlichen Traditionen bleiben meist namenlos.",
  "quellen": [
   "Encyclopaedia Britannica: Einzelartikel zu den genannten Personen",
   "Giorgio Vasari: Le vite de' più eccellenti pittori, scultori e architettori (1550/1568)",
   "Ernst Kris und Otto Kurz: Die Legende vom Künstler (1934)",
   "Linda Nochlin: Why Have There Been No Great Women Artists? (1971)",
   "Arthur C. Danto: The Artworld, Journal of Philosophy 61 (1964)",
   "Sammlungs- und Werkangaben von British Museum, Museo Nacional del Prado, Rijksmuseum, Van Gogh Museum, Museo Reina Sofía"
  ],
  "literatur": [
   {
    "titel": "Die Legende vom Künstler",
    "autor": "Ernst Kris und Otto Kurz",
    "jahr": "1934",
    "warum": "Zeigt, dass Künstlerbiografien seit der Antike denselben Mustern folgen: das entdeckte Hirtenkind, das Wunder der Nachahmung, der verkannte Meister. Schärft den Blick für Anekdoten, die mehr Topos als Tatsache sind."
   },
   {
    "titel": "Künstler – Außenseiter der Gesellschaft",
    "autor": "Rudolf und Margot Wittkower",
    "jahr": "1965",
    "warum": "Deutsche Ausgabe von Born under Saturn (1963): Wie sich das Bild vom Künstler als Melancholiker, Exzentriker und Rebell zwischen Antike und Französischer Revolution bildete – anhand von Quellen statt Legenden."
   },
   {
    "titel": "Why Have There Been No Great Women Artists?",
    "autor": "Linda Nochlin",
    "jahr": "1971",
    "warum": "Der Aufsatz, der die Frage umdrehte: nicht fehlendes Talent, sondern Ausbildung, Akademien und Aktmodelle entschieden, wer Künstlerin werden konnte. Grundlage der feministischen Kunstgeschichte."
   },
   {
    "titel": "Women, Art, and Society",
    "autor": "Whitney Chadwick",
    "jahr": "1990",
    "warum": "Überblick über Künstlerinnen vom Mittelalter bis zur Gegenwart, der die Lücken der klassischen Kunstgeschichten füllt."
   },
   {
    "titel": "The Rest Is Noise",
    "autor": "Alex Ross",
    "jahr": "2007",
    "warum": "Musikgeschichte des 20. Jahrhunderts als Geschichte von Menschen unter Diktaturen, Märkten und Medien – gut lesbar und genau, auch zu Wagners Nachwirkung."
   }
  ],
  "seit": "2026-10-01"
 },
 {
  "id": "erfinder",
  "titel": "Erfinderinnen und Erfinder – wer es wirklich war",
  "kurz": "Von Archimedes bis CRISPR: warum fast jede große Erfindung mehrere Väter und Mütter hat – und wie aus Teamarbeit, Patenten und Legenden ein einziger berühmter Name wird.",
  "einleitung": "In Schulbüchern hat jede Erfindung einen Erfinder: Gutenberg den Buchdruck, Watt die Dampfmaschine, Edison die Glühbirne, Bell das Telefon. Fast immer ist das eine Verkürzung. Erfindungen entstehen aus Vorläufern, oft zeitgleich an mehreren Orten, und meist in Werkstätten, Laboren und Teams, deren Mitglieder im Nachruhm verschwinden. Welcher Name bleibt, entscheiden Patentämter, Gerichte, Nobelkomitees, Firmen, nationale Erinnerungskulturen und die Frage, wer zuerst veröffentlichte oder am besten erzählte. Frauen, Assistenten, Handwerker und Forscher außerhalb Europas und Nordamerikas fallen dabei besonders oft heraus. Dieser Querschnitt geht die Geschichte der Technik und Wissenschaft entlang der Personen durch und fragt jeweils: Wer hat was beigetragen, wer wurde vergessen, und welche Legende hat sich festgesetzt? Die Wirkung der Erfindungen selbst behandeln vor allem die Querschnitte zu Energie, Kommunikation und Medizin.",
  "stationen": [
   {
    "jahr": -250,
    "titel": "Archimedes und die Schraube, die er vielleicht nicht erfand",
    "text": "Archimedes von Syrakus gilt seit der Antike als Erfinder der Wasserschnecke, einer Schraube in einem Rohr, die Wasser bergauf fördert. Nach antiker Überlieferung entstand sie bei einem Aufenthalt in Ägypten; ob er sie dort erfand oder schon in Gebrauch vorfand, ist umstritten, und die Assyriologin Stephanie Dalley hält sogar assyrische Vorläufer für möglich. Gesichert ist sein eigentlicher Beitrag: Er fasste Hebelgesetz und Auftrieb mathematisch. Der berühmte Name haftet an der Maschine, die Leistung lag in der Theorie dahinter.",
    "seit": "2026-10-01"
   },
   {
    "jahr": -100,
    "titel": "Der Mechanismus von Antikythera – ein Meisterwerk ohne Namen",
    "text": "1901 bargen Schwammtaucher vor der Insel Antikythera aus einem antiken Wrack ein verkrustetes Bronzegerät, von dessen Zahnrädern rund dreißig erhalten sind. Erst Röntgenaufnahmen und Computertomografie zeigten, was es konnte: Es berechnete Mondphasen, Finsternisse und vermutlich Planetenstellungen. Wer es baute, ist unbekannt; vermutet wird ein Umfeld, das die Mondtheorie des Astronomen Hipparchos kannte. Das Gerät erinnert daran, wie viel antike Technik ganz ohne Erfindernamen überliefert ist.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 105,
    "titel": "Cai Lun – der Beamte, der das Papier meldete",
    "text": "Der Hofeunuch Cai Lun legte dem Han-Kaiser im Jahr 105 ein Verfahren vor, aus Baumrinde, Hanfresten, Lumpen und alten Fischernetzen Papier zu schöpfen; die Chronik der Han machte ihn damit zum Erfinder. Archäologen fanden jedoch deutlich ältere Papierstücke, darunter ein Fragment mit einer Landkarte aus einem Grab in Fangmatan. Cai Lun verbesserte und normierte also ein vorhandenes Handwerk und machte es am Hof bekannt. Überliefert wird, wer dem Herrscher berichtet – nicht unbedingt, wer die Sache zuerst konnte.",
    "vertiefung": "china-erfindungen",
    "seit": "2026-10-01"
   },
   {
    "jahr": 132,
    "titel": "Zhang Heng und der Erdbebenanzeiger",
    "text": "Der Hofastronom Zhang Heng baute nach der Chronik der Späteren Han ein Bronzegefäß mit acht Drachenköpfen; bei einem Erdstoß fiel aus einem Drachenmaul eine Kugel in das Maul einer Kröte und zeigte die Richtung an. Berichtet wird, das Gerät habe ein fernes Beben gemeldet, das in der Hauptstadt niemand spürte, bis Tage später ein Bote eintraf. Das Original ist verloren, die Chronik entstand rund drei Jahrhunderte später. Alle heutigen Modelle sind Rekonstruktionen, über deren Innenleben Fachleute streiten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 850,
    "titel": "Die Banu Musa – ein Erfinderteam in Bagdad",
    "text": "Um die Mitte des 9. Jahrhunderts beschrieben drei Brüder in Bagdad, Muhammad, Ahmad und al-Hasan, die Söhne des Musa ibn Schakir, im »Buch der sinnreichen Vorrichtungen« rund hundert Apparate: selbstnachfüllende Gefäße, Trickbrunnen, Ventile und frühe Regelungen. Viele knüpften an griechische Vorbilder wie Philon und Heron an, die durch die Übersetzungsbewegung zugänglich geworden waren, und gingen über sie hinaus. Hier steht schon ein Team im Titel – und die Weitergabe von Wissen über Sprachgrenzen ist selbst Teil der Erfindung.",
    "vertiefung": "haus-der-weisheit",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1088,
    "titel": "Su Songs Uhrturm in Kaifeng",
    "text": "Der Song-Beamte Su Song leitete in Kaifeng den Bau eines etwa zwölf Meter hohen, wassergetriebenen astronomischen Uhrturms; ein Holzmodell stand 1088, vollendet war das Werk in den 1090er Jahren. Die Hemmung, die das Wasserrad schrittweise vorrücken ließ, ging auf den Mönch Yi Xing und den Beamten Liang Lingzan zurück, die schon 725 ein ähnliches Prinzip nutzten. Su Song beschrieb die Maschine 1092 so genau, dass sie im 20. Jahrhundert rekonstruiert werden konnte. Nach dem Fall Kaifengs 1127 ging der Turm verloren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1206,
    "titel": "Al-Dschazari dokumentiert seine Maschinen",
    "text": "Im Dienst der Artuqiden-Fürsten in Obermesopotamien vollendete Ismail al-Dschazari 1206 sein »Buch der Kenntnis sinnreicher mechanischer Vorrichtungen«. Es beschreibt etwa fünfzig Geräte – Wasseruhren wie die Elefantenuhr, Automaten, Pumpen – mit Zeichnungen und Bauanleitungen. Er stand erkennbar in der Tradition griechischer und arabischer Mechaniker. Moderne Superlative, er habe die Kurbelwelle oder den Roboter erfunden, gehen über die Quellen hinaus; seine gesicherte Leistung ist die genaue, nachbaubare Dokumentation.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1455,
    "titel": "Gutenberg, Fust und Schöffer – und Bi Sheng",
    "text": "Am 6. November 1455 hielt ein Mainzer Notar fest, dass Johannes Gutenberg seinem Geldgeber Johann Fust über 2.000 Gulden schuldete. Fust druckte danach mit Peter Schöffer weiter; ihr Psalter von 1457 nennt Datum und Drucker – Gutenbergs Name steht in keinem seiner Drucke. Erster war er ohnehin nicht: Shen Kuo beschrieb Tonlettern eines Handwerkers Bi Sheng aus den 1040er Jahren, und in Korea entstand 1377 das älteste erhaltene Buch aus Metalllettern. Neu war in Mainz das Zusammenspiel von Gießinstrument, Presse und Farbe.",
    "vertiefung": "buchdruck",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1608,
    "titel": "Das Fernrohr: drei Anwärter, kein Patent",
    "text": "Am 2. Oktober 1608 bat der Brillenmacher Hans Lipperhey aus Middelburg die niederländischen Generalstaaten um ein Patent auf ein Gerät, das Fernes nah erscheinen lässt. Wenige Wochen später meldete Jacob Metius aus Alkmaar dasselbe an, und auch Sacharias Janssen aus Middelburg soll ein solches Rohr besessen haben. Das Patent wurde verweigert, weil die Sache offenbar schon zu vielen bekannt war. Das Fernrohr lag in der Luft: Linsen waren billig, Brillenmacher experimentierten, mehrere kamen fast gleichzeitig auf dieselbe Idee.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1610,
    "titel": "Galilei: nicht der Erfinder, aber der Erste, der veröffentlichte",
    "text": "Galileo Galilei hörte 1609 von dem holländischen Rohr und baute binnen Monaten eigene Instrumente, bald mit etwa zwanzigfacher Vergrößerung. Er hat das Fernrohr nicht erfunden, aber als Erster systematisch den Himmel beobachtet und die Ergebnisse 1610 im »Sidereus Nuncius« veröffentlicht: Mondgebirge, Jupitermonde, die Sterne der Milchstraße. Der Engländer Thomas Harriot hatte den Mond schon im Sommer 1609 durch ein Fernrohr gezeichnet, aber nichts publiziert. Ruhm folgt hier der schnellen Veröffentlichung, nicht der Priorität.",
    "vertiefung": "galilei",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1642,
    "titel": "Pascal, Schickard und Leibniz: die Rechenmaschine",
    "text": "Blaise Pascal begann 1642, noch keine zwanzig Jahre alt, eine Rechenmaschine zu bauen, die seinem Vater die Steuerabrechnungen erleichtern sollte; nach rund fünfzig Prototypen entstanden etwa zwanzig Geräte. Lange galt er als Erfinder. Erst in den 1950er Jahren wurde weithin bekannt, dass der Tübinger Professor Wilhelm Schickard schon 1623 und 1624 Kepler brieflich eine »Rechenuhr« beschrieben hatte; das bestellte Exemplar verbrannte, Schickard starb 1635 an der Pest. Leibniz ergänzte 1673 mit der Staffelwalze das Multiplizieren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1656,
    "titel": "Huygens' Pendeluhr und Galileis Entwurf",
    "text": "Christiaan Huygens konstruierte 1656 die erste Pendeluhr und ließ sie vom Haager Uhrmacher Salomon Coster bauen; sie ging um ein Vielfaches genauer als alle älteren Räderuhren. Galilei hatte schon 1641, erblindet, seinem Sohn Vincenzio eine Pendelhemmung beschrieben, die nie fertig wurde – Florentiner Anhänger erhoben deshalb später Ansprüche. Huygens' Spiralfeder für Taschenuhren von 1675 brachte ihm den nächsten Streit ein, diesmal mit Robert Hooke, der dieselbe Idee früher gehabt haben wollte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1676,
    "titel": "Leeuwenhoek sieht, was niemand sonst sieht",
    "text": "Der Delfter Tuchhändler Antoni van Leeuwenhoek schliff winzige Einzellinsen, die stärker vergrößerten als die zusammengesetzten Mikroskope seiner Zeit. 1676 beschrieb er der Royal Society »kleine Tierchen« in Wasser – Einzeller und vermutlich Bakterien. In London zweifelte man, bis Robert Hooke die Beobachtung 1677 bestätigte. Das Mikroskop hatte Leeuwenhoek nicht erfunden; Hookes »Micrographia« war schon 1665 erschienen. Aber er hielt seine Technik geheim und blieb so jahrzehntelang der Einzige, der diese Welt sah.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1684,
    "titel": "Newton gegen Leibniz",
    "text": "1684 veröffentlichte Leibniz seine Differentialrechnung. Newton hatte eine gleichwertige Methode schon um 1665/66 entwickelt, aber nicht publiziert. Daraus wurde der erbittertste Prioritätsstreit der Wissenschaftsgeschichte: 1712 erklärte ein Ausschuss der Royal Society Newton zum Erstentdecker und deutete Plagiat an – den Bericht hatte Newton, damals Präsident der Gesellschaft, weitgehend selbst verfasst. Heute gilt als gesichert, dass beide unabhängig arbeiteten. Durchgesetzt hat sich Leibniz' handlichere Schreibweise.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1698,
    "titel": "Papin, Savery, Newcomen: wer erfand die Dampfmaschine?",
    "text": "1698 erhielt Thomas Savery ein englisches Patent auf eine Maschine, die mit Dampf Wasser aus Gruben hebt. Der Franzose Denis Papin hatte schon 1690 einen Dampfkolben beschrieben. Die erste zuverlässige Maschine baute 1712 der Eisenwarenhändler Thomas Newcomen – doch Saverys Patent war so weit gefasst, dass Newcomen unter dessen Schutz arbeiten musste; per Parlamentsgesetz galt es bis 1733. Wer die Dampfmaschine erfand, hängt davon ab, ob man die Idee, das Patent oder die erste Maschine zählt, die tatsächlich lief.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1765,
    "titel": "Watt und der Teekessel",
    "text": "Die Geschichte vom jungen James Watt, der am Teekessel die Kraft des Dampfes entdeckt, ist in vielen, einander widersprechenden Fassungen überliefert und gilt als Legende. Belegt ist anderes: Watt reparierte als Instrumentenmacher der Universität Glasgow ein Modell der Newcomen-Maschine und kam 1765 auf den getrennten Kondensator. Er verbesserte eine vorhandene Maschine. Mit Matthew Boulton ließ er sein Patent von 1769 per Parlamentsgesetz bis 1800 verlängern – nach Ansicht von Kritikern ein Hemmschuh für die Hochdruckmaschinen anderer.",
    "vertiefung": "dampfmaschine",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1769,
    "titel": "Arkwright und die Männer, die vor Gericht aussagten",
    "text": "Der Perückenmacher Richard Arkwright ließ 1769 eine Spinnmaschine patentieren, die mit Wasserkraft kräftiges Garn lieferte, und baute in Cromford eine der ersten Fabriken. Ob die Erfindung von ihm stammte, war schon damals strittig: In einem Prozess 1785 sagten der Handwerker Thomas Highs und der Uhrmacher John Kay aus, Arkwright habe ihre Ideen übernommen, und das Gericht hob seine Patente auf. Seine unbestreitbare Leistung lag in der Organisation – er verband Maschine, Kapital und Fabrikdisziplin.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1791,
    "titel": "Galvani gegen Volta",
    "text": "1791 veröffentlichte der Bologneser Arzt Luigi Galvani Versuche mit Froschschenkeln, die zuckten, wenn sie zwei verschiedene Metalle berührten; er deutete das als tierische Elektrizität. Alessandro Volta in Pavia widersprach: Der Strom entstehe am Kontakt der Metalle. Um das zu beweisen, schichtete er 1800 Metallscheiben mit getränkter Pappe dazwischen zur ersten Batterie. Im Rückblick hatten beide teilweise recht – es gibt Strom aus Metallkontakten und Strom in Nerven. Der Streit trieb beide zu besseren Experimenten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1796,
    "titel": "Jenner – und der Bauer Benjamin Jesty",
    "text": "Dass Kuhpocken vor den echten Pocken schützen, wussten Landleute in England lange. Der Pächter Benjamin Jesty übertrug schon 1774 Kuhpockenmaterial auf seine Frau und zwei Söhne, in Holstein tat der Hauslehrer Peter Plett 1791 Ähnliches. Edward Jenners Leistung 1796 war nicht der Einfall, sondern der Beleg: Er setzte den geimpften James Phipps danach gezielt Pockenmaterial aus, sammelte Fälle und veröffentlichte 1798. Das Parlament belohnte Jenner 1802 mit 10.000 Pfund; Jesty ging leer aus.",
    "vertiefung": "pockenimpfung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1822,
    "titel": "Babbages Maschinen, die nie fertig wurden",
    "text": "Charles Babbage schlug 1822 eine Differenzmaschine vor, die mathematische Tafeln fehlerfrei berechnen und drucken sollte. Die Regierung zahlte rund 17.000 Pfund, der Feinmechaniker Joseph Clement baute Teile – dann zerstritten sich beide, und die Maschine blieb unvollendet. Babbage entwarf danach die Analytische Maschine mit Speicher, Rechenwerk und Lochkarten, die er nie bauen konnte. Dass seine Pläne taugten, zeigte erst das Londoner Science Museum, das 1991 seine Differenzmaschine Nr. 2 nach den Originalzeichnungen fertigstellte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1837,
    "titel": "Morse und die anderen Telegrafen",
    "text": "1837 wurden binnen Monaten mehrere elektrische Telegrafen angemeldet: in London von William Cooke und Charles Wheatstone, in den USA von dem Maler Samuel Morse. Gauß und Weber hatten in Göttingen schon 1833 eine Leitung betrieben, Carl August von Steinheil in München 1836 eine weitere. Morse stützte sich auf den Physiker Joseph Henry und den Mechaniker Alfred Vail, dessen Anteil am Morsealphabet umstritten ist. Sein Name blieb, weil sein System am einfachsten zu bedienen war: Taste, Leitung, Code.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1839,
    "titel": "Niépce, Daguerre, Talbot, Bayard: die Fotografie",
    "text": "Am 7. Januar 1839 stellte François Arago in Paris die Daguerreotypie vor. Ihre Grundlage stammte auch von Nicéphore Niépce, dem um 1826 die älteste erhaltene Fotografie gelungen war und der seit 1829 mit Louis Daguerre zusammenarbeitete; er starb 1833. Wenige Wochen später zeigte William Henry Fox Talbot in London sein Papierverfahren, aus dem das Negativ-Positiv-Prinzip wurde. Hippolyte Bayard, der übergangene Dritte, inszenierte sich 1840 aus Protest als Ertrunkener. Frankreich kaufte Daguerres Verfahren und gab es frei.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1843,
    "titel": "Ada Lovelace und die Anmerkungen",
    "text": "1843 übersetzte Ada Lovelace einen Aufsatz des Italieners Luigi Menabrea über Babbages Analytische Maschine und fügte Anmerkungen hinzu, die weit länger waren als das Original. Die letzte enthält einen Ablauf zur Berechnung der Bernoulli-Zahlen, oft das erste veröffentlichte Computerprogramm genannt. Wie viel davon von ihr und wie viel von Babbage stammt, ist unter Historikern umstritten. Unbestritten ist ihr Gedanke, eine solche Maschine könne nicht nur Zahlen, sondern beliebige Symbole verarbeiten, etwa Musik.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1861,
    "titel": "Philipp Reis und sein »Telephon«",
    "text": "Am 26. Oktober 1861 führte der Lehrer Philipp Reis im Physikalischen Verein in Frankfurt ein Gerät vor, das er Telephon nannte. Es übertrug Töne und Melodien elektrisch, Sprache aber nur bruchstückhaft; überliefert ist der Testsatz »Das Pferd frisst keinen Gurkensalat«. Reis fand wenig Unterstützung und starb 1874. Ob sein Apparat bei geeigneter Einstellung schon verständliche Sprache hätte übertragen können, ist bis heute umstritten. Sein Name für das Gerät setzte sich durch, das Patent bekam fünfzehn Jahre später ein anderer.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1861,
    "titel": "Semmelweis und seine Vorgänger",
    "text": "1861 erschien Ignaz Semmelweis' Buch über die Ursache des Kindbettfiebers, vierzehn Jahre nach seinen Wiener Beobachtungen. Er war nicht der Erste: Der schottische Arzt Alexander Gordon hatte 1795 die Übertragung durch Geburtshelfer beschrieben, Oliver Wendell Holmes in Boston 1843. Dass Semmelweis kaum Gehör fand, lag nicht nur an den Kollegen, sondern auch daran, dass er lange nicht veröffentlichte und Kritiker in offenen Briefen angriff. Er starb 1865 in einer Anstalt – im selben Jahr, in dem Joseph Lister mit der Antisepsis begann.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1867,
    "titel": "Siemens und das dynamoelektrische Prinzip",
    "text": "Im Januar 1867 stellte Werner Siemens in Berlin das dynamoelektrische Prinzip vor: Ein Generator kann sein Magnetfeld mit dem eigenen Strom aufbauen und braucht keine Dauermagnete. Fast gleichzeitig kamen Charles Wheatstone und Samuel Alfred Varley in England auf dieselbe Lösung, Varley hatte schon im Dezember 1866 ein Patent beantragt; der Ungar Ányos Jedlik soll die Idee Jahre zuvor gehabt, aber nicht veröffentlicht haben. Siemens' Vorsprung lag darin, dass er als Unternehmer daraus ein Produkt machte.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1871,
    "titel": "Margaret Knight verteidigt ihre Tütenmaschine",
    "text": "Margaret Knight baute 1868 in Springfield eine Maschine, die Papiertüten mit flachem Boden schnitt, faltete und klebte. Als sie das Patent beantragen wollte, hatte der Mechaniker Charles Annan, der ihr Modell in einer Werkstatt gesehen hatte, die Idee schon angemeldet. Knight belegte ihre Urheberschaft mit Zeichnungen, Notizbüchern und Zeugen und erhielt 1871 das Patent. Die oft erzählte Version, Annan habe erklärt, eine Frau könne so etwas nicht erfinden, ist nach Darstellung der Ingenieursgesellschaft ASME eine spätere Zuspitzung.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1876,
    "titel": "Bell, Gray und Meucci",
    "text": "Am 14. Februar 1876 reichten Alexander Graham Bell und Elisha Gray beim US-Patentamt Unterlagen zur Sprachübertragung ein, Bell einen Patentantrag, Gray eine Vorankündigung. Bells Patent wurde am 7. März erteilt; ob er Grays Idee eines Flüssigkeitsmikrofons kannte, ist bis heute umstritten. Der Italiener Antonio Meucci hatte 1871 eine Vorankündigung hinterlegt, sie aber aus Geldmangel verfallen lassen. Die Resolution des US-Repräsentantenhauses von 2002 würdigt seine Arbeit, erklärt ihn aber nicht, wie oft behauptet, zum Erfinder des Telefons.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1879,
    "titel": "Edison, Swan und die Glühbirne",
    "text": "Die Glühbirne hat nicht Thomas Edison erfunden. Glühlampen bauten viele seit den 1840er Jahren; der Engländer Joseph Swan führte Anfang 1879 in Newcastle eine Kohlefadenlampe vor. Edisons Labor in Menlo Park fand im Herbst 1879 einen haltbaren Kohlefaden – und entwarf vor allem das System aus Kraftwerk, Leitungen, Zählern und Fassungen. In England gründeten beide 1883 die gemeinsame Firma Ediswan. Die Legende vom Deutschamerikaner Heinrich Göbel als wahrem Erfinder entstand 1893 in Patentprozessen und gilt als widerlegt.",
    "vertiefung": "elektrifizierung",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1886,
    "titel": "Benz, Daimler und Maybach – zwei Automobile zugleich",
    "text": "Am 29. Januar 1886 meldete Carl Benz in Mannheim sein »Fahrzeug mit Gasmotorenbetrieb« zum Patent an; die Urkunde gilt als Geburtsurkunde des Automobils. Doch in Cannstatt bauten Gottlieb Daimler und Wilhelm Maybach unabhängig davon schnelllaufende Benzinmotoren, 1885 in einen Reitwagen, 1886 in eine Kutsche. In Österreich wird der Wiener Siegfried Marcus als früherer Erfinder genannt; Datierung und Fahrtüchtigkeit seiner Wagen sind umstritten. Benz' Vorsprung lag darin, Motor und Fahrgestell als Einheit zu bauen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1888,
    "titel": "Bertha Benz fährt nach Pforzheim",
    "text": "Anfang August 1888 fuhr Bertha Benz mit ihren Söhnen Eugen und Richard ohne Wissen ihres Mannes rund hundert Kilometer von Mannheim nach Pforzheim. Nach der Überlieferung kaufte sie unterwegs Leichtbenzin in einer Wieslocher Apotheke, reinigte eine verstopfte Leitung mit einer Hutnadel und ließ die Bremsen mit Leder beschlagen. Die Fahrt bewies, dass das Automobil alltagstauglich war, und lieferte Hinweise für Verbesserungen. Finanziert hatte die Firma zu einem guten Teil ihre Mitgift – dennoch stand sie lange im Schatten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1888,
    "titel": "Tesla und Ferraris: das Drehfeld",
    "text": "Im März 1888 stellte Galileo Ferraris in Turin einen Motor mit magnetischem Drehfeld vor, im Mai sprach Nikola Tesla in New York über dasselbe Prinzip, auf das er Patente erhielt. Beide hatten unabhängig gearbeitet. Ferraris verzichtete auf Patente, Tesla verkaufte seine an George Westinghouse, und so wurde der Wechselstrommotor zur Grundlage der Stromnetze. Teslas Ruf als verkanntes Genie wuchs vor allem nach seinem Tod; manche verbreitete Zuschreibung, etwa die Erfindung des Radios, geht über das Belegte hinaus.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1895,
    "titel": "Röntgen und der Groll Philipp Lenards",
    "text": "Als Wilhelm Conrad Röntgen im November 1895 in Würzburg die neue Strahlung entdeckte, baute er auf Kathodenstrahlversuchen auf, die Philipp Lenard vorangetrieben hatte; andere Physiker hatten geschwärzte Fotoplatten bemerkt, ohne der Ursache nachzugehen. Lenard fühlte sich zeitlebens um seinen Anteil gebracht, obwohl er 1905 selbst den Nobelpreis erhielt, und wurde später Wortführer der antisemitischen »Deutschen Physik«. Röntgen bekam 1901 den ersten Physik-Nobelpreis. Entdecken hieß hier: erkennen, was andere übersehen hatten.",
    "vertiefung": "physik-1900",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1897,
    "titel": "Marconi und die vielen Väter des Funks",
    "text": "Guglielmo Marconi erhielt 1897 ein britisches Patent auf drahtlose Telegrafie und baute daraus ein Weltunternehmen. Die Bausteine stammten großenteils von anderen: Heinrich Hertz hatte die Wellen nachgewiesen, Édouard Branly und Oliver Lodge Empfänger entwickelt, Alexander Popow 1895 in Sankt Petersburg einen Empfänger vorgeführt, den Russland als erstes Radio feiert. 1909 teilte Marconi den Nobelpreis mit Ferdinand Braun. 1943 kippte das Oberste Gericht der USA zentrale Ansprüche seines US-Patents – zum Erfinder erklärte es Tesla aber nicht.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1898,
    "titel": "Marie und Pierre Curie: Polonium und Radium",
    "text": "1898 fanden Marie und Pierre Curie in Pechblende zwei neue Elemente, Polonium und Radium, beim Radium unterstützt von Gustave Bémont. Das Wort Radioaktivität prägten die Curies, und Maries Gedanke, die Strahlung als Eigenschaft der Atome selbst zu verstehen, war der theoretische Kern. Dazu kam körperliche Schwerstarbeit: Um bis 1902 ein Zehntelgramm Radiumchlorid zu gewinnen, verarbeitete sie über Jahre rund eine Tonne Pechblende-Rückstände in einem zugigen Schuppen. Nach Pierres Unfalltod 1906 führte sie die Forschung allein weiter.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1903,
    "titel": "Die Wrights, Whitehead und ein Vertrag",
    "text": "Am 17. Dezember 1903 flogen die Brüder Wright bei Kitty Hawk mit einem motorisierten, steuerbaren Flugzeug, der erste Flug dauerte zwölf, der längste 59 Sekunden. Sie bauten auf Otto Lilienthals Gleitflügen auf, ihre Neuerung war die Steuerung um alle drei Achsen. Weil sie kaum öffentlich flogen, galt in Europa lange Alberto Santos-Dumont 1906 als Erster. Den Flyer erhielt die Smithsonian Institution 1948 nur mit einem Vertrag, kein früheres Flugzeug als erstes anzuerkennen; Gustave Whiteheads angeblicher Flug von 1901 gilt als unbewiesen.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1913,
    "titel": "Haber, Bosch – und die Vergessenen",
    "text": "Das Haber-Bosch-Verfahren trägt zwei Namen und verschweigt mehrere. Fritz Haber gelang 1909 in Karlsruhe die Ammoniaksynthese im Labor, gemeinsam mit seinem englischen Assistenten Robert Le Rossignol, der die Hochdruckapparatur baute. Bei BASF machte Carl Bosch daraus ein Industrieverfahren, Alwin Mittasch fand in Tausenden Versuchen einen billigen Eisenkatalysator. 1913 lief in Oppau die erste Anlage. Haber erhielt den Nobelpreis für 1918, Bosch 1931; Mittasch und Le Rossignol kennt kaum jemand.",
    "vertiefung": "haber-bosch",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1936,
    "titel": "Turing und Church: die Grenzen des Berechenbaren",
    "text": "1936 beschrieb der junge Alan Turing eine gedachte Maschine, die mit Band, Lesekopf und einfachen Regeln jede berechenbare Aufgabe lösen kann. Fast gleichzeitig kam Alonzo Church in Princeton mit anderen Mitteln zum selben Ergebnis über die Grenzen der Berechenbarkeit. Turings Modell wurde zum Fundament der theoretischen Informatik; gebaut hat er es nicht. Seine öffentliche Bekanntheit verdankt er vor allem Bletchley Park und seinem Schicksal: 1952 wegen Homosexualität verurteilt, starb er 1954 und wurde erst 2013 begnadigt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1940,
    "titel": "Die polnischen Wurzeln der Enigma-Entschlüsselung",
    "text": "Ende 1932 rekonstruierte der polnische Mathematiker Marian Rejewski die Verdrahtung der militärischen Enigma, ohne je ein Gerät gesehen zu haben; mit Jerzy Różycki und Henryk Zygalski entwickelte er Verfahren und 1938 eine Entschlüsselungsmaschine, die Bomba. Im Juli 1939 übergaben die Polen ihr Wissen an Briten und Franzosen. Darauf aufbauend entwarfen Alan Turing und Gordon Welchman in Bletchley Park die leistungsfähigere britische Bombe, die ab 1940 arbeitete. Populäre Darstellungen machen den polnischen Anteil oft zur Fußnote.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1941,
    "titel": "Penicillin: Florey, Chain – und Norman Heatley",
    "text": "Im Februar 1941 erhielt in Oxford der Polizist Albert Alexander als erster Patient Penicillin; er besserte sich, starb aber, als der Vorrat ausging. Dahinter stand das Team um Howard Florey und Ernst Chain, das Alexander Flemings Entdeckung von 1928 wieder aufgegriffen hatte. Der Biochemiker Norman Heatley entwickelte die Verfahren, um den Wirkstoff in brauchbarer Menge zu gewinnen, mit improvisierten Gefäßen bis hin zu Bettpfannen. Den Nobelpreis 1945 erhielten Fleming, Florey und Chain; Heatley erhielt 1990 einen Oxforder Ehrendoktor.",
    "vertiefung": "antibiotika",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1941,
    "titel": "Zuses Z3 und die Frage nach dem ersten Computer",
    "text": "Am 12. Mai 1941 führte Konrad Zuse in Berlin die Z3 vor, einen programmgesteuerten Rechner mit binärer Gleitkommarechnung aus rund 2.600 Relais; 1943 wurde sie bei einem Luftangriff zerstört. Ob sie der erste Computer war, ist eine Definitionsfrage: Sie arbeitete nicht elektronisch, und bedingte Sprünge fehlten – dass sie theoretisch universell rechnen konnte, zeigte erst 1998 der Informatiker Raúl Rojas. Weil Zuse im Krieg isoliert arbeitete, beeinflusste die Z3 die amerikanische und britische Entwicklung kaum.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1942,
    "titel": "Hedy Lamarr, George Antheil und das Frequenzspringen",
    "text": "Am 11. August 1942 erhielten die Schauspielerin Hedy Lamarr und der Komponist George Antheil ein US-Patent für eine störsichere Funksteuerung von Torpedos: Sender und Empfänger sollten, synchronisiert wie die Rolle eines mechanischen Klaviers, zwischen 88 Frequenzen springen. Die Marine nutzte die Idee im Krieg nicht. Dass WLAN und Bluetooth unmittelbar auf Lamarr zurückgehen, ist eine Verkürzung: Frequenzsprungverfahren gab es schon vorher, und die Technik wurde später unabhängig weiterentwickelt. Gewürdigt wurde sie erst in den 1990er Jahren.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1946,
    "titel": "ENIAC, Atanasoff und die Programmiererinnen",
    "text": "Im Februar 1946 präsentierte die University of Pennsylvania den ENIAC, den John Mauchly und J. Presper Eckert für die Armee gebaut hatten. Programmiert hatten ihn sechs Frauen, darunter Kathleen McNulty, Jean Jennings und Betty Snyder, die lange namenlos blieben. 1973 erklärte ein US-Bundesgericht das ENIAC-Patent für ungültig, weil Mauchly Ideen von John Atanasoff übernommen habe, der mit Clifford Berry bis 1942 einen elektronischen Rechner gebaut hatte. Der britische Colossus von 1944 blieb bis in die 1970er Jahre geheim.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1947,
    "titel": "Der Transistor: drei Nobelpreisträger und ihre Vorläufer",
    "text": "Im Dezember 1947 brachten John Bardeen und Walter Brattain in den Bell Labs einen Spitzentransistor zum Laufen. Ihr Abteilungsleiter William Shockley war nicht beteiligt, entwarf aber binnen Wochen den Flächentransistor und drängte sich in den Vordergrund; das Team zerbrach. Julius Lilienfeld hatte schon 1925 ein Patent auf einen Feldeffekttransistor angemeldet, den er nie bauen konnte, und bei Paris entwickelten Herbert Mataré und Heinrich Welker 1948 unabhängig ihr »Transistron«. Den Nobelpreis 1956 teilten sich die drei Amerikaner.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1952,
    "titel": "Grace Hopper, der Compiler und die Motte",
    "text": "1952 schrieb Grace Hopper mit A-0 eines der ersten Programme, die Anweisungen automatisch in Maschinencode übersetzen. Gegen Widerstände vertrat sie den Gedanken, Computer in einer englischähnlichen Sprache zu programmieren; daraus ging 1959 COBOL hervor. Bekannter ist eine Legende: die Motte, die 1947 im Harvard Mark II steckte und als »erster tatsächlicher Fall eines Bugs« ins Logbuch geklebt wurde. Hopper fand sie nicht selbst, und von »Bugs« sprach schon Edison 1878 – sie erzählte die Geschichte nur am besten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1952,
    "titel": "Rosalind Franklin, Raymond Gosling und Foto 51",
    "text": "Im Mai 1952 nahm Raymond Gosling, Doktorand von Rosalind Franklin am King's College London, die Röntgenaufnahme 51 einer DNA-Faser auf. Maurice Wilkins zeigte sie Anfang 1953 ohne Franklins Wissen James Watson; über einen Forschungsbericht gelangten auch ihre Messdaten nach Cambridge. Watson und Crick bauten daraus das Modell der Doppelhelix. Franklin starb 1958, den Nobelpreis 1962 erhielten die drei Männer. Neuere Funde zeigen sie weniger als bestohlenes Opfer denn als gleichrangige Mitspielerin, die selbst nahe an der Lösung war.",
    "vertiefung": "doppelhelix",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1958,
    "titel": "Kilby und Noyce: der integrierte Schaltkreis",
    "text": "Im September 1958 führte Jack Kilby bei Texas Instruments eine Schaltung vor, deren Bauteile auf einem einzigen Germaniumplättchen saßen, noch verbunden durch feine Golddrähte. Wenige Monate später beschrieb Robert Noyce bei Fairchild eine Siliziumschaltung mit aufgedampften Leiterbahnen – möglich durch das Planarverfahren seines Kollegen Jean Hoerni. Beide Firmen stritten jahrelang um Patente und einigten sich auf gegenseitige Lizenzen. Den Nobelpreis erhielt Kilby im Jahr 2000 allein; der 1990 gestorbene Noyce konnte ihn nicht mehr erhalten.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1960,
    "titel": "Der Laser und Gordon Goulds Notizbuch",
    "text": "Am 16. Mai 1960 brachte Theodore Maiman bei Hughes Research einen Rubinkristall zum Leuchten – der erste funktionierende Laser. Die Grundlagen hatten Charles Townes und Arthur Schawlow 1958 veröffentlicht und zum Patent angemeldet; Townes erhielt 1964 den Nobelpreis mit den Sowjets Nikolai Bassow und Alexander Prochorow. Der Doktorand Gordon Gould aber hatte seine Idee schon im November 1957 notariell beglaubigen lassen und den Namen Laser geprägt. In rund dreißig Jahren Rechtsstreit erhielt er ab 1977 eigene Patente und setzte sie 1987 durch.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1965,
    "titel": "Baran und Davies: Datenpakete",
    "text": "Wie bringt man Daten durch ein Netz, das teilweise ausfällt? Paul Baran bei der RAND Corporation schlug Anfang der 1960er Jahre vor, Nachrichten in Blöcke zu zerlegen, die sich einzeln ihren Weg suchen. Unabhängig davon kam Donald Davies am britischen National Physical Laboratory 1965 auf dieselbe Idee und nannte die Blöcke »packets«. Davies' Arbeit beeinflusste die Planer des ARPANET unmittelbar. Die verbreitete Vorstellung, das Internet sei als atomkriegssicheres Militärnetz entworfen worden, vermischt Barans Motiv mit den Zielen des ARPANET.",
    "vertiefung": "internet",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1971,
    "titel": "Der Mikroprozessor: vier Köpfe für einen Chip",
    "text": "Im November 1971 kam der Intel 4004 auf den Markt, der erste kommerziell verkaufte Mikroprozessor – ein vollständiges Rechenwerk auf einem Chip. Auftraggeber war die japanische Firma Busicom, die einen Tischrechner bauen wollte. Ted Hoff schlug die Architektur vor, Stanley Mazor arbeitete mit, Federico Faggin entwarf und verwirklichte den Chip, und der Busicom-Ingenieur Masatoshi Shima trug die Logik bei. Lange galt Hoff allein als Erfinder; Faggins Anteil wurde erst später allgemein anerkannt.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1972,
    "titel": "Tu Youyou und das Projekt 523",
    "text": "1967 rief die chinesische Führung im geheimen Projekt 523 Forschergruppen auf, ein Mittel gegen Malaria zu finden, die auch verbündete Truppen im Vietnamkrieg schwächte. Tu Youyou stieß in einer Rezeptsammlung von Ge Hong aus dem 4. Jahrhundert auf die Anweisung, Einjährigen Beifuß in Wasser einzuweichen und auszupressen; ihr Team gewann 1971 bei niedriger Temperatur einen Extrakt und 1972 den Reinstoff Artemisinin. Als Tu 2015 den Nobelpreis erhielt, kritisierten Beteiligte in China, die Arbeit vieler Gruppen werde einer Person zugeschrieben.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 1989,
    "titel": "Berners-Lee, Cailliau und die Vorläufer des Web",
    "text": "Im März 1989 schlug Tim Berners-Lee am CERN ein Hypertext-System vor; sein Vorgesetzter Mike Sendall notierte darauf »vage, aber aufregend«. Die Idee hatte Vorläufer: Vannevar Bush hatte 1945 eine Wissensmaschine beschrieben, Ted Nelson 1965 den Begriff Hypertext geprägt. Berners-Lee verband sie mit dem bestehenden Internet. Der belgische Ingenieur Robert Cailliau schrieb mit ihm 1990 den Förderantrag und warb im CERN für das Projekt. Am 30. April 1993 stellte das CERN die Web-Software gemeinfrei zur Verfügung.",
    "vertiefung": "world-wide-web",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2005,
    "titel": "Karikó und Weissman: veränderte mRNA",
    "text": "2005 zeigten die Biochemikerin Katalin Karikó und der Immunologe Drew Weissman in Philadelphia, wie sich künstliche mRNA so verändern lässt, dass das Immunsystem sie nicht als Fremdkörper bekämpft. Karikó war an ihrer Universität zuvor herabgestuft worden, weil ihre Forschung keine Fördergelder einbrachte; kennengelernt hatten sich beide am Kopierer. Ohne Fetthüllen für die mRNA, die andere Gruppen entwickelten, und ohne Firmen, die daraus Impfstoffe bauten, wäre die Entdeckung folgenlos geblieben. 2023 erhielten beide den Nobelpreis.",
    "seit": "2026-10-01"
   },
   {
    "jahr": 2012,
    "titel": "CRISPR: Genschere und Patentkrieg",
    "text": "Im Juni 2012 zeigten Emmanuelle Charpentier und Jennifer Doudna mit ihrem Team, dass sich das bakterielle Abwehrsystem CRISPR-Cas9 als programmierbare Genschere nutzen lässt. Ähnliche Ergebnisse des Litauers Virginijus Šikšnys hatte zuvor eine Zeitschrift abgelehnt. Feng Zhang am Broad Institute setzte die Methode Anfang 2013 in menschlichen Zellen ein. Im Patentstreit gab das US-Patentamt 2022 Broad die Priorität für höhere Zellen, 2026 nach Aufhebung durch ein Berufungsgericht erneut. Den Nobelpreis 2020 erhielten nur Charpentier und Doudna.",
    "seit": "2026-10-01"
   }
  ],
  "strittig": "Schon der Begriff Erfinder ist strittig. Der Soziologe Robert K. Merton zeigte 1961, dass Mehrfachentdeckungen in der Wissenschaft eher die Regel als die Ausnahme sind – Fernrohr, Infinitesimalrechnung, Telegraf, Telefon, Dynamo, Drehstrommotor und integrierter Schaltkreis sind Beispiele aus diesem Querschnitt. Ob man den Ideengeber, den ersten Patentinhaber, den Bauer des ersten funktionierenden Geräts oder denjenigen nennt, der die Sache zum Erfolg führte, ist eine Wertung, keine Tatsache. Im Einzelnen umstritten bleiben: ob Archimedes die Wasserschnecke erfand oder übernahm; wie Zhang Hengs Erdbebenanzeiger innen aufgebaut war; welchen Anteil Babbage an Ada Lovelaces Anmerkungen hatte; ob Bell von Elisha Grays Unterlagen wusste und ob Philipp Reis' Gerät verständliche Sprache übertragen konnte; Datierung und Fahrtüchtigkeit der Wagen von Siegfried Marcus; Alfred Vails Anteil am Morsealphabet; ob Gustave Whitehead 1901 geflogen ist (die große Mehrheit der Luftfahrthistoriker verneint es); der Anteil von Ányos Jedlik am Dynamo; die Gewichtung von Rosalind Franklins Beitrag, bei der neuere Arbeiten (Cobb und Comfort, 2023) das Bild vom Opfer relativieren; die Verteilung des Verdienstes im chinesischen Projekt 523; und die CRISPR-Patentfrage, die über 2022 hinaus vor Gericht weiterverfolgt wurde. Nationale Erinnerungskulturen verstärken die Unschärfe: Russland feiert Popow, Italien Meucci und Ferraris, Ungarn Jedlik, Österreich Marcus, Deutschland lange Göbel. Mehrere verbreitete Geschichten sind Legenden oder Zuspitzungen: Watts Teekessel, Edison als Erfinder der Glühbirne, Meucci als vom US-Kongress anerkannter Telefonerfinder, Tesla als vom Obersten Gericht bestätigter Radioerfinder, Hopper als Entdeckerin des ersten Bugs, Lamarr als direkte Urheberin von WLAN und die Behauptung, Charles Annan habe Margaret Knight das Erfinden als Frau abgesprochen.",
  "quellen": [
   "Encyclopaedia Britannica: Archimedes; Antikythera mechanism; Cai Lun; Zhang Heng; Banu Musa; Su Song; al-Jazari; Johannes Gutenberg; Bi Sheng; Hans Lipperhey; Galileo; Wilhelm Schickard; Blaise Pascal; Christiaan Huygens; Antonie van Leeuwenhoek; Thomas Savery; Thomas Newcomen; James Watt; Richard Arkwright; Luigi Galvani; Alessandro Volta; Edward Jenner; Charles Babbage; Ada Lovelace; Samuel F. B. Morse; Louis Daguerre; Nicéphore Niépce; William Henry Fox Talbot; Philipp Reis; Ignaz Semmelweis; Werner von Siemens; Alexander Graham Bell; Antonio Meucci; Joseph Swan; Thomas Edison; Karl Benz; Bertha Benz; Gottlieb Daimler; Nikola Tesla; Galileo Ferraris; Wilhelm Röntgen; Philipp Lenard; Guglielmo Marconi; Marie Curie; Wright brothers; Haber-Bosch process; Alan Turing; Marian Rejewski; Konrad Zuse; Howard Florey; Hedy Lamarr; ENIAC; transistor; Grace Hopper; Rosalind Franklin; integrated circuit; laser; packet switching; Intel 4004; Tu Youyou; Tim Berners-Lee; Katalin Karikó; CRISPR",
   "Hou Hanshu (Chronik der Späteren Han), Biografien von Cai Lun und Zhang Heng; Shen Kuo: Mengxi bitan (um 1088); Su Song: Xinyi xiangfa yao (1092); al-Dschazari: Kitab fi ma'rifat al-hiyal al-handasiyya (1206)",
   "Helmaspergersches Notariatsinstrument, Mainz, 6. November 1455",
   "A. A. Lovelace: Sketch of the Analytical Engine invented by Charles Babbage, with Notes by the Translator, Scientific Memoirs 3, 1843",
   "US-Patente 116,842 (M. E. Knight, 1871), 174,465 (A. G. Bell, 1876), 2,292,387 (H. K. Markey [Lamarr] und G. Antheil, 1942); Deutsches Reichspatent 37435 (C. Benz, 1886)",
   "Marconi Wireless Telegraph Co. of America v. United States, 320 U.S. 1 (1943); Honeywell, Inc. v. Sperry Rand Corp., 180 USPQ 673 (D. Minn. 1973)",
   "P. J. Pead: Benjamin Jesty: new light in the dawn of vaccination, The Lancet 362, 2003",
   "D. Sheppard: Robert Le Rossignol, 1884–1976: engineer of the ›Haber‹ process, Notes and Records of the Royal Society 71, 2017",
   "R. Rojas: How to make Zuse's Z3 a universal computer, IEEE Annals of the History of Computing 20, 1998",
   "M. Cobb, N. Comfort: What Rosalind Franklin truly contributed to the discovery of DNA's structure, Nature 616, 2023",
   "K. Karikó, M. Buckstein, H. Ni, D. Weissman: Suppression of RNA recognition by Toll-like receptors, Immunity 23, 2005; M. Jinek u. a.: A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity, Science 337, 2012",
   "Nobelprize.org: Preisträger und Nominierungsarchiv (Physik 1901, 1903, 1905, 1909, 1956, 1964, 2000; Chemie 1918, 1931; Medizin 1945, 1962, 2015, 2023; Chemie 2020)",
   "Robert K. Merton: Singletons and Multiples in Scientific Discovery, Proceedings of the American Philosophical Society 105, 1961"
  ],
  "literatur": [
   {
    "titel": "The Lever of Riches. Technological Creativity and Economic Progress",
    "autor": "Joel Mokyr",
    "jahr": "1990",
    "warum": "Der Klassiker zur Frage, warum Erfindungen zu bestimmten Zeiten und Orten gehäuft auftreten – von der Antike über China und den Islam bis zur Industriellen Revolution."
   },
   {
    "titel": "The Innovators. How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
    "autor": "Walter Isaacson",
    "jahr": "2014",
    "warum": "Erzählt die Computergeschichte von Lovelace bis zum Web konsequent als Teamgeschichte und gibt den Programmiererinnen des ENIAC, Hopper, Noyce und Faggin ihren Platz."
   },
   {
    "titel": "The Shock of the Old. Technology and Global History since 1900",
    "autor": "David Edgerton",
    "jahr": "2006",
    "warum": "Stellt den Kult der Erfindung infrage: Entscheidend sei, welche Technik tatsächlich genutzt wird – ein heilsames Gegengift gegen Erfindermythen."
   },
   {
    "titel": "Die Göbel-Legende. Der Kampf um die Erfindung der Glühlampe",
    "autor": "Hans-Christian Rohde",
    "jahr": "2007",
    "warum": "Musterhafte Quellenarbeit, die zeigt, wie eine Erfinderlegende in Patentprozessen entsteht und warum sie sich in Deutschland so lange hielt."
   },
   {
    "titel": "Rosalind Franklin. The Dark Lady of DNA",
    "autor": "Brenda Maddox",
    "jahr": "2002",
    "warum": "Die maßgebliche Biografie, die Franklin als eigenständige Forscherin zeigt statt nur als Fußnote zu Watson und Crick."
   },
   {
    "titel": "Where Good Ideas Come From. The Natural History of Innovation",
    "autor": "Steven Johnson",
    "jahr": "2010",
    "warum": "Gut lesbare Darstellung, warum Mehrfacherfindungen die Regel sind und Ideen eher in Netzwerken als in einsamen Köpfen entstehen."
   }
  ],
  "seit": "2026-10-01"
 }
];

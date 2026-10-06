/* =========================================================
   HISTORIA — DATEN: Dark History

   AKTEN: ausführliche Fallakten (Verbrechen, Serienmorde, Justizirrtümer,
   Raubzüge), GEHEIMBUENDE: Bünde, Orden, kriminelle Organisationen und
   eine erfundene Verschwörung. Recherchiert am 2026-10-06 in zwei Runden, danach von
   unabhängigen Prüfern gegen Quellen gegengecheckt (45 + 103 Korrekturen).
   DOSSIERS: Einträge der Rubriken Spionage, Attentate, Hexenverfolgung,
   Piraten/Fälscher/Ausbrüche (DARK_RUBRIKEN), mit frei benannten Abschnitten.

   Grundsätze: nüchtern, auf der Seite der Opfer, kein Täterkult. Nie
   verurteilte Verdächtige sind als Verdächtige gekennzeichnet. Bei
   Fällen nach 1975 nur breit öffentliche Opfernamen.

   Bilder: nur Wikimedia-Commons-Dateien mit freier Lizenz, keine Fotos
   von Toten oder Verletzten. Liegen in bilder/dark/.

   DARK_THEMEN und DARK_MYSTERIEN: Querschnitte und Mysterien, die im
   Bereich Dark History statt an ihrem alten Ort erscheinen.
   ========================================================= */

const AKTEN = [
 {
  "id": "gilles-de-rais",
  "titel": "Gilles de Rais",
  "untertitel": "Der Prozess gegen den Marschall von Frankreich, Nantes 1440",
  "jahr": 1440,
  "zeitraum": "mutmaßliche Taten etwa 1432 bis 1440, Prozess September bis Oktober 1440",
  "ort": "Machecoul, Tiffauges und Nantes",
  "land": "Frankreich (damals Herzogtum Bretagne)",
  "lat": 47.2181,
  "lon": -1.5528,
  "ortQuelle": "https://en.wikipedia.org/wiki/Nantes",
  "kategorie": "Serienmord",
  "status": "umstritten",
  "kurz": "Ein Kampfgefährte Jeanne d’Arcs wird wegen der Ermordung zahlreicher Kinder hingerichtet – und bis heute wird gestritten, wie belastbar der Prozess war, der ihn verurteilte.",
  "tat": "Gilles de Rais, einer der reichsten Adligen Westfrankreichs und seit 1429 Marschall von Frankreich, hatte sein Vermögen in den 1430er-Jahren mit maßlosem Aufwand verbraucht und Güter verkauft, unter anderem an Herzog Johann V. von der Bretagne. Er ließ Alchimisten und Beschwörer kommen, darunter den italienischen Kleriker François Prelati. Zu Pfingsten 1440 drang er bewaffnet in die Kirche von Saint-Étienne-de-Mer-Morte ein und misshandelte den Geistlichen Jean Le Ferron, der eine verkaufte Burg verwaltete. Der Übergriff gab den Anlass für Ermittlungen. Die Anklage warf ihm vor, über Jahre auf seinen Burgen Machecoul und Tiffauges sowie in Nantes Kinder, meist Jungen, entführt, missbraucht und getötet zu haben; seine Diener sollen sie angelockt und die Leichen beseitigt haben.",
  "opfer": "Die Opfer waren nach den Prozessakten überwiegend Jungen aus einfachen Verhältnissen: Kinder von Bauern und Handwerkern, Bettelkinder, Jungen, denen man eine Stelle als Page oder Diener versprochen hatte. Ihre Namen sind zum Teil nur durch die Aussagen ihrer Eltern überliefert, die im Herbst 1440 vor dem Gericht in Nantes von verschwundenen Söhnen berichteten. Die Anklage nannte „140 Kinder oder mehr“. Wie viele es tatsächlich waren, lässt sich nicht feststellen.",
  "ermittlung": "Nach dem Zwischenfall von Saint-Étienne-de-Mer-Morte ließ Jean de Malestroit, Bischof von Nantes, Aussagen über verschwundene Kinder sammeln und machte Ende Juli 1440 bekannt, dass schwere Vorwürfe gegen Gilles vorlägen. Am 15. September 1440 wurde er auf Burg Machecoul festgenommen, mit ihm Diener wie Henriet Griart und Étienne Corillaut, genannt Poitou. Zwei Gerichte verhandelten parallel: ein kirchliches unter dem Bischof und dem Inquisitor wegen Ketzerei, Teufelsbeschwörung und Sodomie, ein weltliches wegen Mordes. Die Diener sagten detailliert gegen ihren Herrn aus. Gilles bestritt zunächst alles und erkannte die Richter nicht an; erst nachdem ihm die Folter angedroht worden war, legte er ein umfassendes Geständnis ab.",
  "taeter": "Gilles de Rais (1404–1440) entstammte dem Haus Laval-Montmorency, war früh verwaist und durch Erbe und Heirat außerordentlich reich. Er kämpfte 1429 mit Jeanne d’Arc beim Entsatz von Orléans. Seine Familie erwirkte 1435 beim König ein Verbot weiterer Güterverkäufe. Die Mehrheit der Historiker hält ihn für schuldig, darunter Matei Cazacu, der sich auf die Fülle übereinstimmender Zeugenaussagen und die Geständnisse der Diener stützt. Eine Minderheit sieht in ihm das Opfer einer Intrige: Der Herzog der Bretagne und der Bischof hätten ein Interesse an seinem Sturz gehabt, weil seine Ländereien an sie fallen konnten. Mitbeschuldigte wie Gilles de Sillé entkamen.",
  "prozess": "Das kirchliche Gericht verurteilte Gilles wegen Ketzerei und exkommunizierte ihn; nach seinem Geständnis und seiner öffentlichen Reue wurde er wieder in die Kirche aufgenommen. Das weltliche Gericht unter Pierre de l’Hôpital, dem Präsidenten der Bretagne, verurteilte ihn am 25. Oktober 1440 wegen Mordes zum Tod. Am 26. Oktober wurde er bei Nantes gehängt, zusammen mit seinen Dienern Henriet und Poitou; sein Leichnam wurde teilweise verbrannt und dann der Familie zur Bestattung überlassen. Prelati kam mit einer Haftstrafe davon.",
  "legende": "Ob Gilles schuldig war, ist eine echte Forschungsfrage, keine bloße Legende. Für die Schuld sprechen die zahlreichen unabhängigen Aussagen von Eltern und die übereinstimmenden Geständnisse der Diener. Gegen die Belastbarkeit des Verfahrens sprechen die Androhung der Folter und die Interessen des Herzogs an seinen Gütern. Um 1900 erklärte der Archäologe Salomon Reinach ihn für unschuldig, unter dem Eindruck der Dreyfus-Affäre. 1992 sprach ein vom Schriftsteller Gilbert Prouteau organisiertes, selbsternanntes Schiedsgericht ihn frei; Fachhistoriker nahmen das nicht ernst. Die oft behauptete Gleichsetzung mit dem Märchen vom Blaubart ist eine spätere Zuschreibung, kein Beleg.",
  "bedeutung": "Der Fall gilt als einer der frühesten ausführlich dokumentierten Prozesse wegen Serienmordes. Die Akten beider Gerichte sind in Abschriften erhalten und wurden im 20. Jahrhundert ediert, unter anderem von Georges Bataille. Gerade weil sie so reich sind, dienen sie Historikern als Lehrstück über das Inquisitionsverfahren des Spätmittelalters: über die Macht von Gerücht und Geständnis, über Folterdrohung als Beweismittel und darüber, wie schwer sich Schuld über die Jahrhunderte hinweg sicher beurteilen lässt.",
  "zeitleiste": [
   {
    "datum": "1429",
    "jahr": 1429,
    "text": "Gilles de Rais kämpft mit Jeanne d’Arc vor Orléans und wird Marschall von Frankreich."
   },
   {
    "datum": "1435",
    "jahr": 1435,
    "text": "Seine Familie erreicht ein königliches Verbot weiterer Güterverkäufe."
   },
   {
    "datum": "Pfingsten 1440",
    "jahr": 1440,
    "text": "Bewaffneter Übergriff auf den Geistlichen Jean Le Ferron in Saint-Étienne-de-Mer-Morte."
   },
   {
    "datum": "Ende Juli 1440",
    "jahr": 1440,
    "text": "Bischof Jean de Malestroit macht die Vorwürfe über verschwundene Kinder öffentlich."
   },
   {
    "datum": "15. September 1440",
    "jahr": 1440,
    "text": "Festnahme auf Burg Machecoul."
   },
   {
    "datum": "25. Oktober 1440",
    "jahr": 1440,
    "text": "Das weltliche Gericht verurteilt ihn wegen Mordes zum Tod."
   },
   {
    "datum": "26. Oktober 1440",
    "jahr": 1440,
    "text": "Hinrichtung bei Nantes zusammen mit zwei Dienern."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Gilles de Rais",
   "Matei Cazacu: Gilles de Rais, Paris: Tallandier 2005",
   "Georges Bataille: Le procès de Gilles de Rais, Paris 1965",
   "Jacques Heers: Gilles de Rais, Paris: Perrin"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/gilles-de-rais-0.jpg",
    "breite": 900,
    "hoehe": 938,
    "zeigt": "Miniatur in einer um 1530 angefertigten Abschrift der Prozessakten (BnF, Fr. 23836): Gilles de Rais als reuiger Verurteilter vor Galgen und Scheiterhaufen",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ex%C3%A9cution_de_Gilles_de_Rais_-_armes_du_pr%C3%A9sident_Bouhier.jpg"
   },
   {
    "datei": "bilder/dark/gilles-de-rais-1.jpg",
    "breite": 718,
    "hoehe": 1100,
    "zeigt": "Idealisiertes Bildnis als Marschall von Frankreich, Gemälde von Éloi Firmin Féron, 1835, Schloss Versailles – kein zeitgenössisches Porträt",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:F%C3%A9ron_-_Gilles_de_Rais_%281405-1440%29_-_MV_962.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "martin-guerre",
  "titel": "Der Fall Martin Guerre",
  "untertitel": "Ein Betrüger lebt drei Jahre lang das Leben eines anderen, Toulouse 1560",
  "jahr": 1560,
  "zeitraum": "1556 bis 1560",
  "ort": "Artigat (Grafschaft Foix) und Toulouse",
  "land": "Frankreich",
  "lat": 43.1367,
  "lon": 1.4406,
  "ortQuelle": "https://en.wikipedia.org/wiki/Artigat",
  "kategorie": "Hochstapelei",
  "status": "aufgeklärt",
  "kurz": "Ein Fremder gab sich jahrelang als verschollener Bauer aus, wurde von dessen Frau aufgenommen und erst entlarvt, als der echte Martin Guerre vor Gericht erschien.",
  "tat": "Martin Guerre, Sohn einer aus dem Baskenland zugezogenen Bauernfamilie, heiratete 1538 sehr jung Bertrande de Rols in dem Dorf Artigat in den Pyrenäen. 1548 verließ er nach einem Streit um gestohlenes Getreide seines Vaters Frau und Sohn und verschwand. 1556 tauchte ein Mann auf, der sich als Martin ausgab. Er kannte Einzelheiten aus dem Leben des Verschwundenen, wurde von den Schwestern und schließlich von Bertrande anerkannt und lebte rund drei Jahre mit ihr als Ehemann zusammen; sie bekamen Kinder. In Wahrheit war es Arnaud du Tilh, genannt Pansette, aus dem nahen Dorf Sajas, der Martin offenbar ähnlich sah.",
  "opfer": "Geschädigt waren vor allem Bertrande de Rols und ihre Familie. Ob Bertrande getäuscht wurde oder den Betrug wissentlich mittrug, ist bis heute umstritten. Sicher ist, dass sie als Frau eines Verschollenen in einer prekären Lage lebte: weder Witwe noch verheiratet, ohne Recht auf Wiederheirat. Betroffen waren auch der Sohn Sanxi, dessen Erbe auf dem Spiel stand, und die Kinder, die Bertrande mit Arnaud bekam und deren rechtliche Stellung nach der Entlarvung offen war.",
  "ermittlung": "Misstrauisch wurde Martins Onkel Pierre Guerre, als der Heimkehrer Rechenschaft über das Familienerbe verlangte. Er brachte die Sache 1559 vor Gericht. Das Gericht in Rieux befragte Dutzende Zeugen: Einige erkannten den Mann sicher als Martin, andere ebenso sicher als Arnaud du Tilh, viele waren unsicher. Man verglich Körpermerkmale, Narben, Zähne und Schuhgröße. Das Gericht in Rieux verurteilte ihn 1560 zum Tod, er legte Berufung beim Parlement von Toulouse ein. Dort neigten die Richter offenbar schon dazu, ihm zu glauben, als ein Mann mit Holzbein erschien: der echte Martin Guerre. Gegenübergestellt, erkannten ihn die Schwestern und Bertrande.",
  "taeter": "Arnaud du Tilh war ein redegewandter Mann mit gutem Gedächtnis und offenbar einschlägiger Vergangenheit; Zeitgenossen beschrieben ihn als Trinker und Spieler. Wie er an das Wissen über Martins Leben kam, ist nicht vollständig geklärt. Er selbst gab später an, Bekannte Martins hätten ihn mit ihm verwechselt und er habe sich dann gezielt erkundigt. Martin Guerre hatte in Spanien im Dienst eines Kardinals und dann in der spanischen Armee gestanden und dabei ein Bein verloren.",
  "prozess": "Am 12. September 1560 verkündete das Parlement von Toulouse das Urteil: Tod wegen Betrugs und Ehebruchs. Arnaud du Tilh gestand nun und bat um Vergebung. Am 16. September 1560 wurde er vor dem Haus der Familie Guerre in Artigat gehängt, sein Leichnam verbrannt. Bertrande wurde nicht bestraft, weil die Richter sie als Getäuschte ansahen. Die Tochter aus der Verbindung mit Arnaud wurde als ehelich anerkannt, weil Bertrande nach Auffassung der Richter guten Glaubens gehandelt hatte.",
  "legende": "Die Grundzüge des Falls sind durch den Bericht des beteiligten Richters Jean de Coras gesichert, der 1561 als „Arrest Memorable“ erschien. Strittig ist die Rolle Bertrandes. Die Historikerin Natalie Zemon Davis vertrat 1983 die These, sie habe den Betrug erkannt und bewusst mitgetragen, weil der neue Martin ihr ein besseres Leben bot. Robert Finlay widersprach 1988, die Quellen trügen diese Deutung nicht. Romanhafte Züge stammen meist aus späteren Bearbeitungen, etwa dem Film „Die Wiederkehr des Martin Guerre“ von 1982.",
  "bedeutung": "Der Fall wurde schon im 16. Jahrhundert berühmt und ist bis heute ein Lehrstück für die Unzuverlässigkeit von Zeugen und für das Problem der Identität in einer Welt ohne Ausweise, Fotos oder Register. Michel de Montaigne nahm ihn in seinem Essay „Des boiteux“ als Beispiel für die Grenzen richterlicher Gewissheit. Natalie Zemon Davis machte ihn zum Klassiker der Mikrogeschichte, die aus Gerichtsakten das Leben gewöhnlicher Menschen rekonstruiert.",
  "zeitleiste": [
   {
    "datum": "1538",
    "jahr": 1538,
    "text": "Martin Guerre heiratet Bertrande de Rols in Artigat."
   },
   {
    "datum": "1548",
    "jahr": 1548,
    "text": "Martin verschwindet nach einem Streit mit seinem Vater."
   },
   {
    "datum": "1556",
    "jahr": 1556,
    "text": "Arnaud du Tilh kommt nach Artigat und gibt sich als Martin aus."
   },
   {
    "datum": "1559",
    "jahr": 1559,
    "text": "Pierre Guerre bringt die Sache vor Gericht."
   },
   {
    "datum": "1560",
    "jahr": 1560,
    "text": "Das Gericht in Rieux verurteilt Arnaud zum Tod; er geht in Berufung nach Toulouse."
   },
   {
    "datum": "12. September 1560",
    "jahr": 1560,
    "text": "Nach dem Auftauchen des echten Martin verkündet das Parlement von Toulouse das Todesurteil."
   },
   {
    "datum": "16. September 1560",
    "jahr": 1560,
    "text": "Hinrichtung Arnaud du Tilhs in Artigat."
   },
   {
    "datum": "1561",
    "jahr": 1561,
    "text": "Jean de Coras veröffentlicht seinen Bericht „Arrest Memorable“."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Martin Guerre",
   "Natalie Zemon Davis: The Return of Martin Guerre, Cambridge (Mass.) 1983",
   "Jean de Coras: Arrest Memorable du Parlement de Tolose, Lyon 1561",
   "Robert Finlay: The Refashioning of Martin Guerre, American Historical Review 93, 1988",
   "Princeton University Library, Manuscripts Division: Martin Guerre returns once again, 2017"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/martin-guerre-0.jpg",
    "breite": 704,
    "hoehe": 1100,
    "zeigt": "Titelblatt einer Ausgabe von Jean de Coras’ „Arrest Memorable“, des zeitgenössischen Berichts über den Prozess",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Arrest_Memmorable_title_page.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "pulververschwoerung",
  "titel": "Die Pulververschwörung",
  "untertitel": "Der geplante Anschlag auf König und Parlament, London 1605",
  "jahr": 1605,
  "zeitraum": "Mai 1604 bis Januar 1606",
  "ort": "Palace of Westminster, London",
  "land": "England",
  "lat": 51.4992,
  "lon": -0.1247,
  "ortQuelle": "https://en.wikipedia.org/wiki/Palace_of_Westminster",
  "kategorie": "Anschlag",
  "status": "aufgeklärt",
  "kurz": "Katholische Verschwörer wollten König Jakob I. und das versammelte Parlament in die Luft sprengen – ihr Scheitern wird in Großbritannien bis heute jedes Jahr am 5. November begangen.",
  "tat": "Katholiken in England wurden unter Elisabeth I. verfolgt, mit Geldstrafen belegt und vom öffentlichen Leben ausgeschlossen. Von Jakob I., seit 1603 König, erhofften sie Erleichterung, die ausblieb. Eine Gruppe um Robert Catesby beschloss 1604, den König bei der Parlamentseröffnung zu töten, zusammen mit Lords und Commons. Im März 1605 mieteten die Verschwörer einen Kellerraum direkt unter dem Sitzungssaal des Oberhauses und schafften dort rund 36 Fässer Schießpulver hin. Nach dem Anschlag sollte ein Aufstand in den Midlands folgen und die neunjährige Prinzessin Elisabeth als katholisch erzogene Königin eingesetzt werden. Der Plan wurde in der Nacht vor der Eröffnung am 5. November 1605 entdeckt.",
  "opfer": "Da der Anschlag verhindert wurde, gab es keine Opfer der Explosion. Gezielt sollten der König, seine Familie, die Lords und die Abgeordneten getötet werden; bei einer Detonation dieser Größe wären unweigerlich auch Bedienstete und Menschen in der Umgebung von Westminster gestorben. Die Folgen trafen die katholische Minderheit insgesamt: Nach 1605 wurden die Gesetze gegen Katholiken verschärft, und das Misstrauen gegen sie prägte die englische Politik noch für Generationen.",
  "ermittlung": "Am 26. Oktober 1605 erhielt Lord Monteagle, ein katholischer Peer, einen anonymen Brief, der ihn warnte, der Parlamentseröffnung fernzubleiben, denn das Parlament werde „einen schrecklichen Schlag“ erhalten. Monteagle gab den Brief an Robert Cecil, den Staatssekretär des Königs, weiter. Wer ihn schrieb, ist bis heute ungeklärt; verdächtigt wird häufig der Mitverschwörer Francis Tresham. Bei Durchsuchungen in der Nacht vom 4. auf den 5. November fand Sir Thomas Knyvet im Keller Guy Fawkes, der sich John Johnson nannte, und das Pulver. Der König erlaubte am 6. November schriftlich die Folter. Fawkes gab im Tower nach und nach die Namen seiner Mitverschwörer preis.",
  "taeter": "Kopf der Verschwörung war Robert Catesby, nicht Guy Fawkes. Insgesamt gehörten dreizehn Männer dazu, unter ihnen Thomas Percy, die Brüder John und Christopher Wright, Thomas und Robert Wintour, Ambrose Rookwood, Sir Everard Digby, John Grant, Robert Keyes, Thomas Bates und Francis Tresham. Guy Fawkes, ein Soldat aus York, der in der spanischen Armee in den Niederlanden gedient hatte, war wegen seiner Erfahrung mit Sprengstoff für die Ausführung zuständig. Die Flüchtigen wurden am 8. November auf Holbeche House in Staffordshire gestellt; Catesby, Percy und die Brüder Wright wurden dabei getötet.",
  "prozess": "Am 27. Januar 1606 wurden acht überlebende Verschwörer in Westminster Hall wegen Hochverrats verurteilt. Am 30. Januar wurden Digby, Robert Wintour, Grant und Bates im Kirchhof von St Paul’s hingerichtet, am 31. Januar Thomas Wintour, Rookwood, Keyes und Fawkes im Old Palace Yard in Westminster. Die Strafe war Hängen, Ausweiden und Vierteilen. Tresham war schon im Dezember 1605 im Tower gestorben. Der Jesuitenobere Henry Garnet, der durch eine Beichte von dem Plan erfahren hatte, wurde am 3. Mai 1606 hingerichtet.",
  "legende": "Guy Fawkes gilt oft als Anführer, war aber nur derjenige, der beim Pulver gefasst wurde. Die Behauptung, die Regierung um Robert Cecil habe die Verschwörung selbst angestiftet oder bewusst laufen lassen, wurde schon im 17. Jahrhundert erhoben; Belege dafür gibt es nicht, auch wenn Cecil den Fund geschickt politisch nutzte. Gesichert sind dagegen der Warnbrief, der heute in den National Archives liegt, und Fawkes’ Unterschriften unter seinen Geständnissen, deren zittrige Schrift nach der Folter erhalten ist. Die Guy-Fawkes-Maske der Gegenwart geht auf einen Comic der 1980er-Jahre zurück.",
  "bedeutung": "Das Parlament beschloss 1606 ein Gesetz, das jährliche Dankgottesdienste zum 5. November vorschrieb. Daraus wurde die Bonfire Night mit Feuern und Feuerwerk, die bis heute gefeiert wird. Vor jeder feierlichen Parlamentseröffnung durchsuchen Wachen bis heute zeremoniell die Keller von Westminster. Politisch verschärfte die Verschwörung die Benachteiligung der Katholiken, die erst 1829 weitgehend aufgehoben wurde.",
  "zeitleiste": [
   {
    "datum": "Mai 1604",
    "jahr": 1604,
    "text": "Erstes Treffen von Catesby, Fawkes und weiteren Verschwörern in London."
   },
   {
    "datum": "25. März 1605",
    "jahr": 1605,
    "text": "Die Verschwörer mieten den Keller unter dem Oberhaus."
   },
   {
    "datum": "26. Oktober 1605",
    "jahr": 1605,
    "text": "Lord Monteagle erhält den anonymen Warnbrief."
   },
   {
    "datum": "4./5. November 1605",
    "jahr": 1605,
    "text": "Guy Fawkes wird im Keller neben dem Pulver festgenommen."
   },
   {
    "datum": "8. November 1605",
    "jahr": 1605,
    "text": "Gefecht in Holbeche House; Catesby und Percy werden getötet."
   },
   {
    "datum": "27. Januar 1606",
    "jahr": 1606,
    "text": "Prozess gegen acht Verschwörer in Westminster Hall."
   },
   {
    "datum": "30./31. Januar 1606",
    "jahr": 1606,
    "text": "Hinrichtung der Verurteilten in London."
   },
   {
    "datum": "3. Mai 1606",
    "jahr": 1606,
    "text": "Hinrichtung des Jesuiten Henry Garnet."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Gunpowder Plot",
   "UK Parliament, Living Heritage: The Gunpowder Plot of 1605",
   "The National Archives (UK): Monteagle-Brief, SP 14/216",
   "Antonia Fraser: The Gunpowder Plot. Terror and Faith in 1605, London 1996"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/pulververschwoerung-0.jpg",
    "breite": 900,
    "hoehe": 462,
    "zeigt": "Acht der Verschwörer, zeitgenössischer Kupferstich von Crispijn van de Passe d. Ä. (National Portrait Gallery London), der die Männer vermutlich nie gesehen hat",
    "urheber": "Crispijn van de Passe the Elder",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Gunpowder_Plot_conspirators.jpg"
   },
   {
    "datei": "bilder/dark/pulververschwoerung-1.jpg",
    "breite": 891,
    "hoehe": 586,
    "zeigt": "Der anonyme Warnbrief an Lord Monteagle vom Oktober 1605 (The National Archives, SP 14/216)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Monteagle_letter.jpeg"
   },
   {
    "datei": "bilder/dark/pulververschwoerung-2.jpg",
    "breite": 316,
    "hoehe": 242,
    "zeigt": "Guy Fawkes’ Unterschriften unter seinen Geständnissen vor und nach der Folter, November 1605",
    "urheber": "Guy Fawkes",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Guy_fawkes_torture_signatures.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "elisabeth-bathory",
  "titel": "Elisabeth Báthory",
  "untertitel": "Die Untersuchung gegen die Gräfin von Čachtice, Ungarn 1610/11",
  "jahr": 1610,
  "zeitraum": "mutmaßliche Taten bis 1610, Verfahren 1610 bis 1611",
  "ort": "Burg Čachtice (ungarisch Csejte)",
  "land": "Slowakei (damals Königreich Ungarn)",
  "lat": 48.725,
  "lon": 17.7608,
  "ortQuelle": "https://en.wikipedia.org/wiki/%C4%8Cachtice_Castle",
  "kategorie": "Serienmord",
  "status": "umstritten",
  "kurz": "Hunderte Zeugen beschuldigten eine der mächtigsten Adligen Ungarns, junge Dienerinnen gequält und getötet zu haben – doch das Verfahren diente auch Interessen, die mit den Opfern nichts zu tun hatten.",
  "tat": "Elisabeth Báthory (1560–1614) stammte aus einer der einflussreichsten Familien Ungarns und heiratete 1575 den Magnaten Franz Nádasdy. Nach seinem Tod 1604 verwaltete sie als Witwe ein großes Netz von Burgen und Gütern, darunter Čachtice und Sárvár. Seit Jahren kursierten Gerüchte über junge Frauen, die in ihren Haushalten zu Tode kamen. 1610 ließ der Palatin Georg Thurzó, der höchste Amtsträger des Königreichs nach dem König, Zeugen vernehmen. Diese sagten aus, die Gräfin und einige Bedienstete hätten Dienerinnen über Jahre geschlagen, verbrannt, hungern und frieren lassen, bis viele starben. Am 29. Dezember 1610 erschien Thurzó auf Čachtice und ließ die Gräfin festsetzen.",
  "opfer": "Die Opfer waren nach den Zeugenaussagen junge Frauen und Mädchen, die als Mägde, Näherinnen oder Dienerinnen in den Haushalt kamen, zunächst vor allem aus Bauernfamilien, deren Verschwinden niemand untersuchte. Später sollen auch Töchter aus dem niederen Adel betroffen gewesen sein, die zur Erziehung in ihren Haushalt geschickt worden waren. Namen sind nur vereinzelt überliefert. Die Zahl der Getöteten ist unbekannt; die Angaben der Zeugen reichen von einigen Dutzend bis zu einer Zahl von 650, die auf bloßem Hörensagen beruht.",
  "ermittlung": "Thurzó handelte im Auftrag König Matthias’ II. Seine Notare ließen ab 1610 Zeugen in mehreren Orten befragen; bis 1611 kamen rund 300 Aussagen zusammen, viele davon allerdings vom Hörensagen. Belastend waren vor allem die Aussagen von vier Bediensteten: Ilona Jó, Dorottya Szentes, Katarína Beniczky und dem Diener János Újváry, genannt Ficzkó. Sie wurden verhört und gefoltert, was den Wert ihrer Geständnisse aus heutiger Sicht einschränkt. Die Gräfin selbst wurde nie vernommen und erhielt keine Gelegenheit, sich vor Gericht zu verteidigen. Thurzó und die Familie vermieden bewusst einen öffentlichen Prozess gegen sie.",
  "taeter": "Elisabeth Báthory wurde nie verurteilt, sondern ohne Urteil festgesetzt. Die Mehrheit der Forschung hält es für wahrscheinlich, dass in ihren Haushalten tatsächlich Dienerinnen durch Misshandlung starben; dafür sprechen die Zahl und Detailfülle der Aussagen. Andere, etwa der ungarische Historiker László Nagy 1984, deuten das Verfahren als politisch motiviert. Unstrittig ist, dass handfeste Interessen im Spiel waren: Die Krone schuldete der Familie Nádasdy große Summen, die nach der Festnahme nicht mehr eingefordert wurden, und die Familie wollte verhindern, dass bei einem öffentlichen Skandal die Güter an die Krone fielen.",
  "prozess": "Im Januar 1611 verhandelte ein Gericht in Bytča gegen die vier Bediensteten. Ilona Jó und Dorottya Szentes wurden nach Körperstrafen lebendig verbrannt, János Újváry wurde enthauptet. Katarína Beniczky erhielt eine lebenslange Haftstrafe, weil Aussagen ergaben, dass sie selbst von den anderen misshandelt worden war. König Matthias verlangte die Hinrichtung der Gräfin; Thurzó lehnte das ab. Sie blieb bis zu ihrem Tod am 21. August 1614 auf Burg Čachtice in Haft, eingeschlossen in wenigen Räumen.",
  "legende": "Gesichert ist, dass zahlreiche Zeugen schwere Misshandlungen und Todesfälle beschrieben und dass vier Bedienstete dafür hingerichtet oder verurteilt wurden. Die berühmten Blutbäder, in denen die Gräfin ihre Jugend habe erhalten wollen, sind dagegen Legende: Sie tauchen in keiner Prozessaussage auf und erscheinen erst 1729 in der Tragica Historia des Jesuiten László Turóczi. Auch die Bezeichnung „Blutgräfin“ und die Vorstellung einer Vampirin gehen auf spätere Literatur und Unterhaltungsmedien zurück. Die Zahl von 650 Opfern stammt aus der Aussage einer Zeugin, die ein angebliches Verzeichnis nie gesehen hatte.",
  "bedeutung": "Der Fall zeigt, wie eng in der frühen Neuzeit Strafverfolgung, Standesrecht und Politik verflochten waren: Die Bediensteten starben auf dem Scheiterhaufen, die Adlige blieb ohne Urteil. Er zeigt auch, wie Legenden historische Überlieferung überlagern. Die Erzählung von den Blutbädern prägte seit dem 18. Jahrhundert das Bild und machte aus den Opfern Statistinnen eines Schauermärchens. Die neuere Forschung versucht, Akten und Legende sauber zu trennen.",
  "zeitleiste": [
   {
    "datum": "1575",
    "jahr": 1575,
    "text": "Heirat mit Franz Nádasdy."
   },
   {
    "datum": "1604",
    "jahr": 1604,
    "text": "Tod Nádasdys; Elisabeth verwaltet die Güter als Witwe."
   },
   {
    "datum": "1610",
    "jahr": 1610,
    "text": "Palatin Georg Thurzó lässt Zeugen über Todesfälle unter Dienerinnen vernehmen."
   },
   {
    "datum": "29. Dezember 1610",
    "jahr": 1610,
    "text": "Thurzó lässt die Gräfin auf Burg Čachtice festsetzen."
   },
   {
    "datum": "Januar 1611",
    "jahr": 1611,
    "text": "Prozess in Bytča gegen vier Bedienstete; drei werden hingerichtet."
   },
   {
    "datum": "21. August 1614",
    "jahr": 1614,
    "text": "Elisabeth Báthory stirbt in Haft auf Čachtice."
   },
   {
    "datum": "1729",
    "jahr": 1729,
    "text": "László Turóczi bringt erstmals die Legende von den Blutbädern in Umlauf."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Elizabeth Báthory",
   "Kimberly L. Craft: Infamous Lady. The True Story of Countess Erzsébet Báthory, 2009",
   "Tony Thorne: Countess Dracula, London 1997",
   "László Nagy: A rossz hírű Báthoryak, Budapest 1984"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/elisabeth-bathory-0.jpg",
    "breite": 644,
    "hoehe": 1100,
    "zeigt": "Bildnis Elisabeth Báthorys, Kopie eines verlorenen Originals, um 1630, unbekannter Maler",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:B%C3%A1thory_Erzs%C3%A9bet_2.jpg"
   },
   {
    "datei": "bilder/dark/elisabeth-bathory-1.jpg",
    "breite": 825,
    "hoehe": 1100,
    "zeigt": "Die Ruine der Burg Čachtice, Ort der Festnahme und Haft, Aufnahme 2007",
    "urheber": "Lukáš Perný",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Cachtice_castle.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "jean-calas",
  "titel": "Der Fall Jean Calas",
  "untertitel": "Ein protestantischer Vater wird für den Tod seines Sohnes hingerichtet, Toulouse 1762",
  "jahr": 1761,
  "zeitraum": "Oktober 1761 bis März 1765",
  "ort": "Toulouse",
  "land": "Frankreich",
  "lat": 43.6045,
  "lon": 1.444,
  "ortQuelle": "https://en.wikipedia.org/wiki/Toulouse",
  "kategorie": "Justizirrtum",
  "status": "aufgeklärt",
  "kurz": "Ein Unschuldiger wird aus religiösem Vorurteil gerädert – und Voltaires Kampf um seine Rehabilitierung macht den Fall zum Symbol der Aufklärung gegen Intoleranz.",
  "tat": "Am Abend des 13. Oktober 1761 wurde Marc-Antoine, der älteste Sohn des protestantischen Tuchhändlers Jean Calas, im Laden der Familie in Toulouse tot aufgefunden, erhängt. Im Haus waren die Eltern, der Sohn Pierre, die Magd und der junge Gast Gaubert Lavaysse. Die Familie behauptete zunächst, einen Ermordeten gefunden zu haben, weil Selbstmördern damals eine entehrende Behandlung des Leichnams drohte; erst später sagte sie, er habe sich das Leben genommen. In der Menge vor dem Haus entstand das Gerücht, der Vater habe den Sohn getötet, um dessen Übertritt zum Katholizismus zu verhindern. Ein Bruder, Louis, war bereits konvertiert. Belege für die Mordthese gab es nicht.",
  "opfer": "Jean Calas, 1698 geboren, war ein angesehener Kaufmann, seit 1731 mit Anne-Rose Cabibel verheiratet und Vater von sechs Kindern. Er wurde Opfer eines Justizmords. Mit ihm traf das Verfahren seine ganze Familie: Die Witwe verlor Mann und Vermögen, die Töchter wurden in ein Kloster gebracht, Pierre wurde verbannt. Auch Marc-Antoine selbst war ein Opfer der Verhältnisse: Er hatte Jura studiert, durfte als Protestant aber nicht als Anwalt arbeiten. Sein Tod wurde von katholischen Bruderschaften als Märtyrertod gefeiert, obwohl nichts dafür sprach.",
  "ermittlung": "Die Ermittlungen leitete der Stadtrichter David de Beaudrigue, der die Familie noch am Abend festnahm, ohne den Fundort sorgfältig zu sichern. Er ging von Beginn an von Mord aus. Ein kirchlicher Aufruf forderte Katholiken auf, belastendes Wissen zu melden; gefragt wurde nur nach Hinweisen auf die Schuld. Die widersprüchlichen ersten Aussagen der Familie wurden als Lügen gewertet. Dass ein 63-jähriger Mann seinen erwachsenen Sohn ohne Gegenwehr erhängt haben sollte, ohne dass die übrigen Anwesenden mitwirkten, prüfte niemand ernsthaft. Bis heute ist nicht völlig sicher, was an jenem Abend geschah; Selbsttötung gilt als die weitaus wahrscheinlichste Erklärung.",
  "taeter": "Einen Täter im Sinne eines Mörders gab es nach heutigem Wissen nicht: Marc-Antoine nahm sich sehr wahrscheinlich selbst das Leben. Verantwortlich für den Tod von Jean Calas waren die Richter. David de Beaudrigue führte die Ermittlungen voreingenommen, das Parlement von Toulouse verurteilte Calas ohne Beweis mit knapper Mehrheit. Den Hintergrund bildete die Lage der Protestanten in Frankreich, die seit der Aufhebung des Edikts von Nantes 1685 ihre Religion nicht offen ausüben durften und in Toulouse besonderem Misstrauen ausgesetzt waren.",
  "prozess": "Das Parlement von Toulouse verurteilte Jean Calas am 9. März 1762 mit acht zu fünf Stimmen zum Tod. Am 10. März wurde er gefoltert, öffentlich gerädert, erdrosselt und verbrannt. Er beteuerte bis zuletzt seine Unschuld. Die Mitangeklagten wurden anschließend freigelassen, Pierre wurde verbannt, was dem Urteil gegen den Vater die Logik nahm. 1764 hob der königliche Rat das Urteil auf; am 9. März 1765 erklärte ein Pariser Gericht Calas einstimmig für unschuldig. Die Familie erhielt eine königliche Entschädigung.",
  "legende": "Gesichert ist, dass Calas ohne tragfähigen Beweis verurteilt und später vollständig rehabilitiert wurde. Nicht gesichert ist der genaue Ablauf des Abends; daher bleibt eine Restunsicherheit, auch wenn die Mordthese als widerlegt gilt. Voltaire war kein neutraler Beobachter: Er nutzte den Fall bewusst als Waffe gegen religiösen Fanatismus und die Kirche, zeichnete die Familie idealisiert und die Richter in den schwärzesten Farben. Das ändert nichts daran, dass seine Kampagne einem Unschuldigen die Ehre zurückgab.",
  "bedeutung": "Der Fall wurde zum Symbol der Aufklärung. Voltaire erfuhr 1762 in Ferney davon und machte ihn mit Briefen, Denkschriften und seinem „Traité sur la tolérance“ von 1763 in ganz Europa bekannt. Erstmals erzwang eine öffentliche Kampagne die Revision eines Urteils. Der Fall stärkte die Kritik an Folter und geheimen Strafverfahren und trug zum Toleranzedikt von 1787 bei, das Protestanten in Frankreich wieder bürgerliche Rechte gab.",
  "zeitleiste": [
   {
    "datum": "13. Oktober 1761",
    "jahr": 1761,
    "text": "Marc-Antoine Calas wird im Laden der Familie tot aufgefunden."
   },
   {
    "datum": "9. März 1762",
    "jahr": 1762,
    "text": "Das Parlement von Toulouse verurteilt Jean Calas mit acht zu fünf Stimmen zum Tod."
   },
   {
    "datum": "10. März 1762",
    "jahr": 1762,
    "text": "Hinrichtung von Jean Calas in Toulouse."
   },
   {
    "datum": "1763",
    "jahr": 1763,
    "text": "Voltaire veröffentlicht den „Traité sur la tolérance“."
   },
   {
    "datum": "1764",
    "jahr": 1764,
    "text": "Der königliche Rat hebt das Urteil auf."
   },
   {
    "datum": "9. März 1765",
    "jahr": 1765,
    "text": "Ein Pariser Gericht erklärt Calas einstimmig für unschuldig."
   },
   {
    "datum": "November 1787",
    "jahr": 1787,
    "text": "Das Toleranzedikt gibt den Protestanten bürgerliche Rechte zurück."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Jean Calas",
   "Catholic Encyclopedia (1908): Calas Case",
   "Voltaire: Traité sur la tolérance, 1763",
   "David D. Bien: The Calas Affair. Persecution, Toleration, and Heresy in Eighteenth-Century Toulouse, Princeton 1960"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/jean-calas-0.jpg",
    "breite": 900,
    "hoehe": 689,
    "zeigt": "„La Malheureuse famille Calas“, Zeichnung von Carmontelle, 1765 (Louvre): Witwe, Töchter, Pierre Calas, die Magd und Gaubert Lavaysse in der Conciergerie",
    "urheber": "Carmontelle",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Louis_CARROGIS_dit_Louis_de_CARMONTELLE%2C_La_Malheureuse_famille_Calas%2C_dessin%2C_1765_%28Louvre%29.jpg"
   },
   {
    "datei": "bilder/dark/jean-calas-1.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "„Les Adieux de Calas à sa famille“, Radierung von Daniel Chodowiecki, Musée Carnavalet",
    "urheber": "Chodowiecki, Daniel Nicolas (Gdańsk, 16–10–1726 - Berlin, 07–02–1801), graveur",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Les_adieux_de_Calas%2C_%C3%A0_sa_famille.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "burke-und-hare",
  "titel": "Burke und Hare",
  "untertitel": "Morde für die Anatomie, Edinburgh 1827–1828",
  "jahr": 1827,
  "zeitraum": "November 1827 bis Oktober 1828",
  "ort": "West Port, Edinburgh",
  "land": "Großbritannien",
  "lat": 55.9464,
  "lon": -3.2,
  "ortQuelle": "https://en.wikipedia.org/wiki/West_Port,_Edinburgh",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Zwei Männer töten in Edinburgh nach eigenem Geständnis sechzehn Menschen, um ihre Leichen an einen Anatomen zu verkaufen. Der Fall zwingt das Parlament, die Versorgung der Medizin mit Leichen neu zu regeln.",
  "tat": "Im November 1827 starb in der Herberge von William Hare im Edinburgher Viertel West Port ein Untermieter eines natürlichen Todes. Hare und sein Landsmann William Burke, beide Einwanderer aus Irland, verkauften den Leichnam für sieben Pfund zehn Schilling an die Anatomieschule des Arztes Robert Knox. Danach warteten sie nicht mehr auf den Tod. Über knapp ein Jahr lockten sie Menschen in die Herberge, machten sie betrunken und erstickten sie, sodass kaum Spuren blieben. Nach Burkes eigenem Geständnis waren es sechzehn Opfer. Knox nahm die Leichen an, ohne nach ihrer Herkunft zu fragen. Am 31. Oktober 1828 töteten sie Margaret Docherty; am nächsten Tag entdeckten Mitbewohner den Leichnam im Stroh und gingen zur Polizei.",
  "opfer": "Die Opfer waren Menschen, die niemand sofort vermisste: Tagelöhner, Bettler, alte Frauen, Durchreisende. Unter ihnen war Mary Paterson, eine junge Frau, die einige von Knox' Studenten auf dem Seziertisch wiedererkannt haben sollen. James Wilson, ein junger Mann mit geistiger Behinderung, den in der Altstadt jeder kannte, wurde getötet, obwohl er sich wehrte. Auch eine alte Frau und ihr Enkel gehörten dazu. Das letzte Opfer, Margaret Docherty, war eine Irin, die nach Edinburgh gekommen war, um ihren Sohn zu suchen.",
  "ermittlung": "Die Polizei hatte zunächst nur einen einzigen Leichnam, den von Margaret Docherty, der bereits bei Knox lag, und keine Augenzeugen der Tat. Ärzte konnten Erstickung nicht sicher nachweisen, weil die Methode kaum Spuren hinterließ. Um überhaupt eine Verurteilung zu erreichen, bot der oberste Ankläger Schottlands, der Lord Advocate, William Hare Straffreiheit an, wenn er gegen Burke aussagte. Hare nahm an. Damit war der Fall geklärt, aber zu einem hohen Preis: Ein Mittäter ging frei, und die übrigen Morde kamen nie vor Gericht. Robert Knox wurde nie angeklagt; ein Untersuchungsausschuss sprach ihn 1829 von Mitwisserschaft frei, rügte aber seine Nachlässigkeit beim Ankauf.",
  "taeter": "William Burke und William Hare stammten aus dem Norden Irlands und arbeiteten in Schottland als Tagelöhner. Hare betrieb die Herberge, in der die meisten Morde geschahen, Burke wohnte dort mit seiner Lebensgefährtin Helen McDougal. Auch Hares Frau Margaret war in die Geschäfte eingeweiht. Der Anatom Robert Knox war kein Mittäter im juristischen Sinn, profitierte aber von einem Markt, in dem niemand Fragen stellte. Burkes Geständnisse nach dem Urteil sind die Hauptquelle für Zahl und Ablauf der Morde.",
  "prozess": "Am 24. Dezember 1828 begann vor dem High Court of Justiciary in Edinburgh der Prozess gegen Burke und McDougal wegen des Mordes an Margaret Docherty. Er dauerte bis in den Morgen des Weihnachtstages. Burke wurde schuldig gesprochen und zum Tod verurteilt, für McDougal lautete das Urteil „not proven“, nach schottischem Recht ein Freispruch. Burke wurde am 28. Januar 1829 vor einer Menge von geschätzt 25.000 Menschen gehängt und anschließend, wie es das Urteil vorsah, öffentlich seziert. Hare kam im Februar 1829 frei; was aus ihm wurde, ist unbekannt.",
  "legende": "Burke und Hare werden oft als Grabräuber bezeichnet. Das waren sie nicht: Sie haben keinen einzigen Leichnam ausgegraben, sondern Menschen getötet, um frische Leichen zu liefern. Die Zahl von sechzehn Opfern stammt aus Burkes Geständnis und ist nicht unabhängig überprüfbar. Über Hares weiteres Leben kursieren Erzählungen, er sei geblendet worden oder als Bettler in London gestorben; belegt ist davon nichts. Gesichert ist dagegen, dass Burkes Skelett bis heute im Anatomischen Museum der Universität Edinburgh aufbewahrt wird.",
  "bedeutung": "Die Morde machten sichtbar, was alle wussten: Die Medizinschulen brauchten weit mehr Leichen, als legal zu haben waren, denn bis dahin durften nur die Körper hingerichteter Mörder seziert werden. Nach einem ähnlichen Fall in London 1831 verabschiedete das Parlament 1832 den Anatomy Act. Er erlaubte die Sektion von Toten aus Armenhäusern, Krankenhäusern und Gefängnissen, die nicht binnen 48 Stunden abgeholt wurden. Damit verschwand der Leichenhandel, doch die Last traf nun die Armen. Das englische Verb „to burke“ für Ersticken erinnert bis heute an den Fall.",
  "zeitleiste": [
   {
    "datum": "29. November 1827",
    "jahr": 1827,
    "text": "Burke und Hare verkaufen den Leichnam eines natürlichen Todes gestorbenen Untermieters an Robert Knox."
   },
   {
    "datum": "1828",
    "jahr": 1828,
    "text": "Bis zum Herbst töten die beiden nach Burkes Geständnis fünfzehn Menschen; Margaret Docherty wird das sechzehnte Opfer."
   },
   {
    "datum": "31. Oktober 1828",
    "jahr": 1828,
    "text": "Margaret Docherty wird getötet; Mitbewohner finden ihren Leichnam und gehen zur Polizei."
   },
   {
    "datum": "24./25. Dezember 1828",
    "jahr": 1828,
    "text": "Prozess in Edinburgh: Burke wird zum Tod verurteilt, Helen McDougal mit „not proven“ freigesprochen."
   },
   {
    "datum": "28. Januar 1829",
    "jahr": 1829,
    "text": "Burke wird gehängt und danach öffentlich seziert."
   },
   {
    "datum": "Februar 1829",
    "jahr": 1829,
    "text": "Hare, der als Kronzeuge Straffreiheit erhielt, wird freigelassen und verlässt Edinburgh."
   },
   {
    "datum": "1832",
    "jahr": 1832,
    "text": "Das Parlament verabschiedet den Anatomy Act und regelt die Versorgung der Anatomie mit Leichen neu."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: William Burke and William Hare",
   "UK Parliament, Living Heritage: Bodysnatching",
   "Lisa Rosner: The Anatomy Murders, 2010",
   "Owen Dudley Edwards: Burke and Hare, 1980"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/burke-und-hare-0.jpg",
    "breite": 900,
    "hoehe": 1081,
    "zeigt": "William Burke vor Gericht, zeitgenössische Zeichnung aus einer Edinburgher Schrift von 1829",
    "urheber": "George Andrew Lutenor; a portrait painter who was also one of the jurors at William Hare's trial (see Burke an",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:William_Burke.jpg"
   },
   {
    "datei": "bilder/dark/burke-und-hare-1.jpg",
    "breite": 756,
    "hoehe": 1100,
    "zeigt": "Der Anatom Robert Knox, Lithografie",
    "urheber": "unbekannt",
    "lizenz": "CC BY 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Robert_Knox._Lithograph._Wellcome_V0003249.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "yang-naiwu-und-xiaobaicai",
  "titel": "Yang Naiwu und Xiaobaicai",
  "untertitel": "Ein Justizirrtum der späten Qing-Zeit, Zhejiang 1873–1877",
  "jahr": 1873,
  "zeitraum": "November 1873 bis März 1877",
  "ort": "Yuhang bei Hangzhou, Provinz Zhejiang",
  "land": "China",
  "lat": 30.28,
  "lon": 119.93,
  "ortQuelle": "https://zh.wikipedia.org/wiki/余杭街道",
  "kategorie": "Justizirrtum",
  "status": "aufgeklärt",
  "kurz": "Ein junger Ehemann stirbt an einer Krankheit, seine Frau und ein Gelehrter werden durch Folter zu Giftmördern gemacht. Erst nach dreieinhalb Jahren und einer Exhumierung in Peking kommt die Wahrheit ans Licht.",
  "tat": "Ende November 1873 starb in der Kreisstadt Yuhang der junge Ge Pinlian nach einigen Tagen Fieber und Erbrechen. Weil sich die Leiche rasch verfärbte, verdächtigte seine Mutter die Schwiegertochter Bi Xiugu, genannt Xiaobaicai, „Kleiner Kohl“, ihn vergiftet zu haben. In der Nachbarschaft kursierte das Gerücht, Bi habe ein Verhältnis mit Yang Naiwu, in dessen Haus das Ehepaar zuvor zur Miete gewohnt hatte und der ihr Lesen beigebracht haben soll. Yang hatte im selben Jahr die Provinzprüfung bestanden und war damit ein Juren, ein Mann von Rang. Aus Krankheit, Klatsch und einer fehlerhaften Leichenschau machte die Justiz einen Giftmord mit Arsen. Ein Verbrechen hatte es nicht gegeben: Die spätere Untersuchung ergab, dass Ge eines natürlichen Todes gestorben war.",
  "opfer": "Die eigentlichen Opfer sind die beiden Angeklagten. Bi Xiugu, um 1855 geboren, war bei der Verhaftung noch keine zwanzig Jahre alt und hatte erst im Frühjahr 1872 geheiratet. Als junge Frau aus einfachen Verhältnissen hatte sie im Verfahren kaum eine Stimme; Geschichte und Volksbühne machten sie später zur verführerischen Schönheit. Yang Naiwu, in den Dreißigern, verlor seinen Gelehrtengrad und verbrachte wie sie gut drei Jahre in Haft. Auch der Apotheker Qian Tan, der zu einer falschen Aussage gedrängt wurde, und die Angehörigen auf beiden Seiten gerieten in das Räderwerk. Ge Pinlian selbst, der Verstorbene, wurde zum Beweisstück eines Verbrechens, das es nie gab.",
  "ermittlung": "Kreismagistrat Liu Xitong, erst seit kurzem im Amt, ließ die Leiche von einem Leichenbeschauer untersuchen, der Fäulniszeichen als Spuren von Gift deutete. Bi wurde gefoltert und nannte Yang als Anstifter. Weil ein Juren nicht gefoltert werden durfte, beantragte die Provinz, ihm den Grad abzuerkennen; danach wurde auch er unter der Folter verhört und gestand, Arsen in einer Apotheke im Nachbarort Cangqian gekauft zu haben. Den genannten Händler gab es nicht; der Apotheker Qian Tan wurde gedrängt, den Kauf trotzdem zu bestätigen. Präfektur, Provinzrichter und Gouverneur Yang Changjun übernahmen das Ergebnis ohne eigene Prüfung. Auch eine kaiserlich angeordnete Neuverhandlung unter dem Bildungsbeamten Hu Ruilan bestätigte 1875 das Urteil.",
  "taeter": "Einen Täter gab es nicht, denn Ge Pinlian wurde nicht ermordet. Verantwortlich für das Unrecht waren die Beamten, die Geständnisse durch Folter erzwangen und Widersprüche übergingen: an erster Stelle Magistrat Liu Xitong und der Leichenbeschauer, dann die Instanzen der Provinz bis hinauf zum Gouverneur. Ob dahinter Absicht, Korpsgeist oder bloße Nachlässigkeit stand, ist in der Forschung strittig. Der Publizist Huang Jun sah darin einen Machtkampf zwischen Hof und Provinzbeamten, eine archivgestützte Untersuchung von Niu Chuangping von 1992 kam dagegen zu dem Schluss, dass Routine und Leichtfertigkeit den Ausschlag gaben, nicht eine Verschwörung.",
  "prozess": "Die Provinz bestätigte im Winter 1873/74 die Todesurteile. Yangs Schwester reichte 1874 in Peking beim Zensorat Beschwerde ein, später folgte eine Eingabe seiner Ehefrau; Beamte aus Zhejiang in der Hauptstadt unterstützten sie. Nach der gescheiterten Neuverhandlung zog das Strafministerium den Fall 1876 an sich. Im Januar 1877 wurde die Leiche in Peking erneut untersucht: Die Knochen zeigten keine Spur von Arsen. Im Frühjahr 1877 wurden Yang und Bi vom Mordvorwurf befreit, aber wegen „unschicklichen Verhaltens“ mit Stockschlägen bestraft; Yang erhielt seinen Grad nicht zurück. Liu Xitong wurde nach Heilongjiang verbannt, Gouverneur Yang Changjun, Hu Ruilan und andere verloren ihre Ämter.",
  "legende": "Volksbühne, Romane und später Filme machten aus dem Fall eine Liebesgeschichte mit einer schönen Ehebrecherin und einem gerissenen Gelehrten. Gesichert ist davon wenig: Dass es ein Verhältnis gab, ist nicht bewiesen, und die Strafe für „unschickliches Verhalten“ beruhte auf denselben Verhören, die unter Folter entstanden waren. Yang soll 1912 eine Theateraufführung seines eigenen Falls empört verlassen haben. Ebenso vereinfachend ist die Deutung, die Kaiserinwitwe Cixi habe aus Gerechtigkeitssinn eingegriffen; das Verfahren lief über Eingaben, Ministerien und eine Exhumierung, und welche Rolle politische Motive spielten, ist umstritten. Die oft genannte Zahl der bestraften Beamten schwankt je nach Darstellung.",
  "bedeutung": "Der Fall gilt als einer der bekanntesten Justizirrtümer der Qing-Zeit und zeigt, wie das Strafverfahren funktionierte: Ein Urteil verlangte ein Geständnis, und die Folter, um es zu erlangen, war erlaubt. Zugleich zeigt er, dass Beschwerden bis in die Hauptstadt etwas bewirken konnten. Neu war die Rolle der Presse: Die 1872 gegründete Shanghaier Zeitung Shenbao berichtete über drei Jahre, druckte Eingaben ab und kritisierte die geheimen Verhöre. Der Rechtshistoriker William Alford nutzte den Fall 1984, um das Bild einer völlig willkürlichen chinesischen Strafjustiz zu differenzieren.",
  "zeitleiste": [
   {
    "datum": "Ende November 1873",
    "jahr": 1873,
    "text": "Ge Pinlian stirbt in Yuhang nach kurzer Krankheit; seine Mutter zeigt die Schwiegertochter an."
   },
   {
    "datum": "Winter 1873/74",
    "jahr": 1873,
    "text": "Unter der Folter gestehen Bi Xiugu und Yang Naiwu; die Provinz bestätigt die Todesurteile, Yang verliert seinen Gelehrtengrad."
   },
   {
    "datum": "1874",
    "jahr": 1874,
    "text": "Yangs Schwester und seine Ehefrau reichen in Peking Beschwerden ein; die Shenbao druckt eine Eingabe ab."
   },
   {
    "datum": "1875",
    "jahr": 1875,
    "text": "Eine kaiserlich angeordnete Neuverhandlung in Hangzhou bestätigt das Urteil."
   },
   {
    "datum": "1876",
    "jahr": 1876,
    "text": "Das Strafministerium zieht den Fall an sich; Angeklagte, Zeugen und der Sarg werden nach Peking gebracht."
   },
   {
    "datum": "Januar 1877",
    "jahr": 1877,
    "text": "Die erneute Leichenschau in Peking findet keine Spur von Gift."
   },
   {
    "datum": "Frühjahr 1877",
    "jahr": 1877,
    "text": "Freispruch vom Mordvorwurf; zahlreiche Beamte werden entlassen oder verbannt."
   }
  ],
  "quellen": [
   "William P. Alford: Of Arsenic and Old Laws. Looking Anew at Criminal Justice in Late Imperial China, California Law Review 72, 1984",
   "Jonathan K. Ocko: I'll Take It All the Way to Beijing. Capital Appeals in the Qing, Journal of Asian Studies 47, 1988",
   "Shenbao, Berichte und abgedruckte Eingaben 1874–1877"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/yang-naiwu-und-xiaobaicai-0.jpg",
    "breite": 900,
    "hoehe": 1072,
    "zeigt": "Entwurf der zweiten Beschwerde in Peking, wie ihn die Zeitung Shenbao im Dezember 1874 abdruckte",
    "urheber": "杨乃武",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Yang_Naiwu%27s_Second_Appeal_to_Beijing%2C_on_Shun_Pao.jpg"
   },
   {
    "datei": "bilder/dark/yang-naiwu-und-xiaobaicai-1.jpg",
    "breite": 611,
    "hoehe": 1100,
    "zeigt": "Bericht des Gouverneurs von Zhejiang mit dem Antrag, Yang Naiwu den Juren-Grad abzuerkennen, 1873",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:%E9%9D%A9%E9%99%A4%E6%9D%A8%E4%B9%83%E6%AD%A6%E4%B8%BE%E4%BA%BA%E8%BA%AB%E4%BB%BD%E5%BE%A1%E6%89%B9.jpg"
   },
   {
    "datei": "bilder/dark/yang-naiwu-und-xiaobaicai-2.jpg",
    "breite": 900,
    "hoehe": 813,
    "zeigt": "Beschwerdeschrift im Namen von Yangs Ehefrau, geb. Zhan, 1874",
    "urheber": "杨乃武",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:%E6%B5%99%E6%B1%9F%E9%A4%98%E6%9D%AD%E7%B8%A3%E6%B0%91%E5%A9%A6%E6%A5%8A%E8%A9%B9%E6%B0%8F%E5%91%88%E7%8B%80.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "ned-kelly",
  "titel": "Ned Kelly",
  "untertitel": "Der Buschräuber von Glenrowan, Victoria 1880",
  "jahr": 1880,
  "zeitraum": "Oktober 1878 bis November 1880",
  "ort": "Glenrowan, Victoria",
  "land": "Australien",
  "lat": -36.4625,
  "lon": 146.2225,
  "ortQuelle": "https://en.wikipedia.org/wiki/Glenrowan,_Victoria",
  "kategorie": "Mord",
  "status": "aufgeklärt",
  "kurz": "Ein Buschräuber in Rüstung aus Pflugscharen wird zur Nationalfigur Australiens. Darüber geraten die drei Polizisten, die seine Bande 1878 erschoss, und die Toten von Glenrowan leicht in Vergessenheit.",
  "tat": "Edward „Ned“ Kelly, geboren im Dezember 1854 in Beveridge bei Melbourne, wuchs in einer armen irischstämmigen Familie im Nordosten Victorias auf und war früh wegen Viehdiebstahls und Gewalt vorbestraft. Im April 1878 eskalierte ein Festnahmeversuch im Haus der Familie, der Polizist Alexander Fitzpatrick wurde am Handgelenk verletzt; Kellys Mutter Ellen erhielt drei Jahre Zwangsarbeit. Ned und sein Bruder Dan flohen in die Wombat Ranges. Am 26. Oktober 1878 stießen sie mit Joe Byrne und Steve Hart bei Stringybark Creek auf einen Suchtrupp und erschossen drei Polizisten. Es folgten Banküberfälle in Euroa und Jerilderie. Im Juni 1880 tötete Byrne den Polizeispitzel Aaron Sherritt, dann besetzte die Bande in Glenrowan das Gasthaus von Ann Jones, nahm rund 60 Geiseln und wollte einen Polizeizug entgleisen lassen.",
  "opfer": "Bei Stringybark Creek starben Sergeant Michael Kennedy und die Constables Thomas Lonigan und Michael Scanlan; ihr Kollege Thomas McIntyre entkam und meldete die Tat. Aaron Sherritt, ein früherer Freund Byrnes, wurde vor seinem Haus im Woolshed Valley erschossen. In Glenrowan geriet die Zivilbevölkerung zwischen die Fronten: Der 13-jährige John Jones, Sohn der Wirtin, und der Bahnarbeiter Martin Cherry wurden tödlich getroffen, wahrscheinlich durch Polizeikugeln; George Metcalf starb später an einer Verletzung, die ihm entweder Polizisten oder versehentlich Kelly selbst zugefügt hatten.",
  "ermittlung": "Nach Stringybark Creek beschloss das Parlament von Victoria den Felons Apprehension Act, der am 1. November 1878 in Kraft trat; auf dieser Grundlage wurden die vier Männer im November 1878 für vogelfrei erklärt, jeder durfte sie ohne Warnung töten. Die Belohnung stieg auf 8000 Pfund. Die Polizei suchte fast zwei Jahre vergeblich, auch mithilfe von Fährtenlesern aus Queensland, und ließ mutmaßliche Unterstützer monatelang ohne Anklage festhalten, was die Stimmung gegen sie verschärfte. In Glenrowan warnte der als Geisel festgehaltene Lehrer Thomas Curnow den Sonderzug, sodass die Entgleisung ausblieb. Die Polizei umstellte das Gasthaus am 28. Juni 1880 und schoss stundenlang in das Haus, obwohl Geiseln darin waren. Kelly trat in seiner rund 44 Kilogramm schweren Rüstung ins Freie und wurde durch Schüsse in die ungeschützten Beine gestoppt.",
  "taeter": "Ned Kelly führte die Bande; zu ihr gehörten sein Bruder Dan, Joe Byrne und Steve Hart. Für die Polizistenmorde bei Stringybark Creek ist die Täterschaft gesichert, Kelly räumte ein, alle drei Polizisten erschossen zu haben, und berief sich auf Notwehr. Byrne starb in Glenrowan im Gasthaus, Dan Kelly und Hart kamen im brennenden Haus ums Leben, die genauen Umstände sind unklar. Kellys eigene Sicht ist im „Jerilderie-Brief“ von 1879 überliefert, einer langen Anklage gegen Polizei und Grundbesitzer. Die Forschung ist gespalten: Historiker wie Ian Jones betonen Polizeiwillkür und soziale Not, andere wie Doug Morrissey oder Stuart Dawson halten das Bild des Verfolgten für geschönt und verweisen auf Kellys frühe Gewalttaten.",
  "prozess": "Kelly wurde nach einer Voruntersuchung in Beechworth im Oktober 1880 vor dem Central Criminal Court in Melbourne angeklagt, allein wegen des Mordes an Constable Lonigan. Richter war Sir Redmond Barry. Die Geschworenen sprachen ihn Ende Oktober schuldig, Barry verhängte die Todesstrafe. Eine Gnadenpetition sammelte nach zeitgenössischen Angaben über 30.000 Unterschriften, die Regierung blieb hart. Kelly wurde am 11. November 1880 im Melbourne Gaol gehängt, er war 25 Jahre alt. Barry starb zwölf Tage später.",
  "legende": "Kelly gilt vielen als australischer Robin Hood. Belegt ist, dass die Bande bei den Banküberfällen Schuldscheine von Kleinbauern verbrannte und Geiseln meist gut behandelte; Beute an Arme verteilt zu haben, ist nicht belegt. Die Behauptung, er habe eine „Republik Nordost-Victoria“ ausrufen wollen, stützt sich auf keine zeitgenössische Quelle, sondern auf spätere Überlieferung und ist in der Forschung umstritten. Seine letzten Worte „Such is life“ sind nur in Zeitungsberichten überliefert; ein anderer Bericht nennt „Ah well, I suppose it has come to this“. Der Schädel, der lange als seiner galt und 1978 gestohlen wurde, stammt nach Untersuchungen von 2011 nicht von ihm. Sein Skelett identifizierten Rechtsmediziner per DNA unter Gebeinen aus dem Pentridge-Gefängnis.",
  "bedeutung": "Die Jagd auf die Bande offenbarte Willkür und Unfähigkeit der Polizei von Victoria. Eine königliche Untersuchungskommission unter Francis Longmore tagte 1881, hörte 62 Zeugen kritisierte den bereits im Oktober 1880 ausgeschiedenen Polizeichef Frederick Standish scharf, beendete die Laufbahn mehrerer leitender Offiziere und führte zu Reformen. Kellys Rüstung liegt heute in der State Library Victoria. Seine Geschichte wurde zum Stoff unzähliger Bücher und Bilder; der Film „The Story of the Kelly Gang“ von 1906 gilt als einer der ersten abendfüllenden Spielfilme der Welt. 2013 wurden seine Gebeine in Greta beigesetzt.",
  "zeitleiste": [
   {
    "datum": "15. April 1878",
    "jahr": 1878,
    "text": "Beim Festnahmeversuch im Haus der Familie Kelly wird Constable Fitzpatrick verletzt."
   },
   {
    "datum": "26. Oktober 1878",
    "jahr": 1878,
    "text": "Bei Stringybark Creek erschießt die Bande drei Polizisten."
   },
   {
    "datum": "1. November 1878",
    "jahr": 1878,
    "text": "Der Felons Apprehension Act tritt in Kraft; im selben Monat werden die vier Männer für vogelfrei erklärt."
   },
   {
    "datum": "Dezember 1878 und Februar 1879",
    "jahr": 1879,
    "text": "Banküberfälle in Euroa und Jerilderie; Kelly diktiert den Jerilderie-Brief."
   },
   {
    "datum": "26. Juni 1880",
    "jahr": 1880,
    "text": "Joe Byrne erschießt den Polizeispitzel Aaron Sherritt."
   },
   {
    "datum": "28. Juni 1880",
    "jahr": 1880,
    "text": "Belagerung des Gasthauses in Glenrowan; Kelly wird gefasst, drei Bandenmitglieder und zwei Zivilisten sterben."
   },
   {
    "datum": "11. November 1880",
    "jahr": 1880,
    "text": "Kelly wird im Melbourne Gaol gehängt."
   },
   {
    "datum": "20. Januar 2013",
    "jahr": 2013,
    "text": "Beisetzung der per DNA identifizierten Gebeine in Greta."
   }
  ],
  "quellen": [
   "State Library Victoria: Ned Kelly (Sammlung und Online-Ausstellung)",
   "Public Record Office Victoria: Ned Kelly Collection",
   "Ian Jones: Ned Kelly. A Short Life, 1995",
   "Doug Morrissey: Ned Kelly. A Lawless Life, 2015",
   "Royal Commission on the Police Force of Victoria: Second Progress Report, 1881"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/ned-kelly-0.jpg",
    "breite": 764,
    "hoehe": 1100,
    "zeigt": "Ned Kelly am Tag vor seiner Hinrichtung, Aufnahme von Charles Nettleton, 10. November 1880",
    "urheber": "Charles Nettleton",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ned_kelly_day_before_execution_photograph.jpg"
   },
   {
    "datei": "bilder/dark/ned-kelly-1.jpg",
    "breite": 425,
    "hoehe": 343,
    "zeigt": "Belohnungsbekanntmachung über 8000 Pfund für die Ergreifung der Kelly-Bande, 1879",
    "urheber": "Australian News and Information Bureau",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Reward.jpg"
   },
   {
    "datei": "bilder/dark/ned-kelly-2.jpg",
    "breite": 900,
    "hoehe": 920,
    "zeigt": "„Kelly in the Dock“ – Holzstich nach einer Skizze aus dem Gerichtssaal, Illustrated Australian News, 1880",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ned_Kelly_in_court.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "jack-the-ripper",
  "titel": "Jack the Ripper",
  "untertitel": "Die Whitechapel-Morde, London 1888",
  "jahr": 1888,
  "zeitraum": "August bis November 1888",
  "ort": "Whitechapel, London",
  "land": "Großbritannien",
  "lat": 51.5166,
  "lon": -0.07,
  "ortQuelle": "https://en.wikipedia.org/wiki/Whitechapel",
  "kategorie": "Serienmord",
  "status": "ungeklärt",
  "kurz": "Fünf Frauen werden 1888 im Londoner East End getötet, der Täter wird nie gefunden. Der Fall prägt bis heute, wie Presse, Polizei und Öffentlichkeit mit Serienverbrechen umgehen.",
  "tat": "Zwischen dem 31. August und dem 9. November 1888 wurden in Whitechapel, Spitalfields und der angrenzenden City of London fünf Frauen getötet: Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes und Mary Jane Kelly. Vier starben nachts auf Straßen oder in Hinterhöfen, Kelly in ihrem Zimmer. Stride und Eddowes wurden in derselben Nacht getötet. Die Ähnlichkeit der Verletzungen ließ die Polizei einen einzigen Täter annehmen. Die Akten von Scotland Yard führen allerdings elf Morde zwischen April 1888 und Februar 1891 unter dem Stichwort Whitechapel; welche davon zusammengehören, ist bis heute offen. Die Fünferreihe geht auf eine interne Notiz von 1894 zurück.",
  "opfer": "Mary Ann Nichols, 43, Mutter von fünf Kindern, lebte nach ihrer Trennung in Armenhäusern. Annie Chapman, 47, hatte mit ihrem Mann, einem Kutscher, in Windsor gelebt; nach seinem Tod fiel ihr Unterhalt weg, sie verkaufte Häkelarbeiten und Blumen. Elizabeth Stride, 44, stammte aus Torslanda bei Göteborg und hatte mit ihrem Mann ein Café in Poplar betrieben. Catherine Eddowes, 46, aus Wolverhampton, war mit ihrem Partner kurz zuvor von der Hopfenernte in Kent zurückgekehrt. Über Mary Jane Kelly, etwa 25, weiß man fast nur, was sie selbst erzählte.",
  "ermittlung": "Zuständig waren die Metropolitan Police mit Kriminalbeamten von Scotland Yard, darunter Inspector Frederick Abberline, und für den Mord in Mitre Square die City of London Police. Sie befragten Hunderte, durchsuchten Herbergen und verfolgten zahllose Hinweise. Spurensicherung im heutigen Sinn gab es nicht, Fingerabdrücke wurden erst ab 1901 genutzt. Eine Kreideschrift in der Goulston Street, nahe einem Stofffetzen von Eddowes' Schürze, ließ Polizeichef Charles Warren abwischen, bevor sie fotografiert war, weil er antisemitische Ausschreitungen fürchtete. Der Polizeiarzt Thomas Bond schrieb im November eine Einschätzung des Täters, die als frühes Täterprofil gilt. Hinzu kamen Hunderte Briefe, fast alle offensichtlich Fälschungen.",
  "taeter": "Der Täter ist unbekannt. Vorgeschlagen wurden über hundert Namen, keiner ist bewiesen. Der Polizeibeamte Melville Macnaghten nannte 1894 in einer internen Notiz drei Verdächtige: den Anwalt Montague John Druitt, der im Dezember 1888 tot aus der Themse geborgen wurde, den polnisch-jüdischen Friseur Aaron Kosminski, der 1891 in eine Anstalt kam, und den Betrüger Michael Ostrog. Belege gegen sie legte er nicht vor. Spätere Thesen, etwa gegen einen Enkel Queen Victorias oder den Maler Walter Sickert, beruhen auf Spekulation. Eine 2014 vorgestellte DNA-Analyse eines Schals, die auf Kosminski weisen sollte, wird wegen ungeklärter Herkunft des Stoffes und methodischer Mängel von Fachleuten abgelehnt. Alle Genannten bleiben Verdächtige.",
  "prozess": "Einen Prozess gab es nie, weil niemand angeklagt wurde. Für jede der fünf Frauen fand eine öffentliche Leichenschau vor einem Coroner statt, ausführlich in den Zeitungen wiedergegeben. Sie endeten jeweils mit dem Befund vorsätzlicher Tötung durch eine oder mehrere unbekannte Personen. Die Ermittlungsakten wurden später teilweise vernichtet oder gingen verloren; was erhalten ist, liegt heute in den National Archives in Kew und im Archiv der City of London Police.",
  "legende": "Den Namen „Jack the Ripper“ erfand nicht der Täter, sondern ein Brief an die Nachrichtenagentur Central News, eingegangen am 27. September 1888. Leitende Polizeibeamte hielten ihn später für das Werk eines Journalisten; bewiesen ist das nicht, eine Verbindung zum Täter aber auch nicht. Der Gentleman mit Zylinder und Arztkoffer ist eine Erfindung von Bühne und Film. Eine Verschwörung des Königshauses, populär seit den 1970er-Jahren, gilt als widerlegt. Umstritten ist, ob alle fünf Frauen Prostituierte waren: Die Historikerin Hallie Rubenhold bestreitet das für drei von ihnen, andere Forscher widersprechen.",
  "bedeutung": "Die Whitechapel-Morde waren das erste Verbrechen, das die Massenpresse zum landesweiten Ereignis machte; Zeitungen druckten Briefe, Skizzen und Gerüchte und steigerten so ihre Auflagen. Die Kritik an der Polizei trug dazu bei, dass Commissioner Warren im November 1888 zurücktrat. Bonds Gutachten gilt als früher Versuch, aus Tatorten auf einen Täter zu schließen. Zugleich lenkten die Berichte den Blick auf Armut, Wohnungsnot und fehlende Beleuchtung im East End.",
  "zeitleiste": [
   {
    "datum": "31. August 1888",
    "jahr": 1888,
    "text": "Mary Ann Nichols wird in Buck's Row in Whitechapel tot aufgefunden."
   },
   {
    "datum": "8. September 1888",
    "jahr": 1888,
    "text": "Annie Chapman wird im Hinterhof eines Hauses in der Hanbury Street getötet."
   },
   {
    "datum": "27. September 1888",
    "jahr": 1888,
    "text": "Die Nachrichtenagentur Central News erhält den „Dear Boss“-Brief, der den Namen Jack the Ripper einführt."
   },
   {
    "datum": "30. September 1888",
    "jahr": 1888,
    "text": "In einer Nacht werden Elizabeth Stride in Dutfield's Yard und Catherine Eddowes in Mitre Square getötet."
   },
   {
    "datum": "16. Oktober 1888",
    "jahr": 1888,
    "text": "George Lusk, Vorsitzender einer Bürgerwehr, erhält den Brief „From Hell“ mit einem Stück Niere."
   },
   {
    "datum": "9. November 1888",
    "jahr": 1888,
    "text": "Mary Jane Kelly wird in ihrem Zimmer in Miller's Court getötet."
   },
   {
    "datum": "10. November 1888",
    "jahr": 1888,
    "text": "Polizeiarzt Thomas Bond legt seine Einschätzung des Täters vor."
   },
   {
    "datum": "Februar 1894",
    "jahr": 1894,
    "text": "Melville Macnaghten nennt in einer internen Notiz drei Verdächtige, ohne Beweise vorzulegen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Jack the Ripper",
   "The National Archives (UK), MEPO 3/142: Jack the Ripper letters",
   "Philip Sugden: The Complete History of Jack the Ripper, 2002",
   "Hallie Rubenhold: The Five. The Untold Lives of the Women Killed by Jack the Ripper, 2019",
   "Stewart P. Evans, Keith Skinner: The Ultimate Jack the Ripper Sourcebook, 2000"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/jack-the-ripper-0.jpg",
    "breite": 802,
    "hoehe": 1100,
    "zeigt": "Der „Dear Boss“-Brief vom 25. September 1888, erste Seite (National Archives, MEPO 3/142)",
    "urheber": "Verfasser unbekannt (Brief)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:DearBossletterJacktheRipper.jpg"
   },
   {
    "datei": "bilder/dark/jack-the-ripper-1.jpg",
    "breite": 708,
    "hoehe": 978,
    "zeigt": "Der „Dear Boss“-Brief, zweite Seite mit der Unterschrift „Jack the Ripper“",
    "urheber": "Verfasser unbekannt (Brief)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Dear_Boss_pt2.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "h-h-holmes",
  "titel": "H. H. Holmes",
  "untertitel": "Betrüger, Mörder und ein Mythos, Chicago und Philadelphia 1891–1896",
  "jahr": 1891,
  "zeitraum": "1891 bis 1894, Prozess 1895",
  "ort": "Englewood, Chicago",
  "land": "USA",
  "lat": 41.78005,
  "lon": -87.6404,
  "ortQuelle": "https://commons.wikimedia.org/wiki/File:H._H._Holmes_Castle.jpg",
  "kategorie": "Serienmord",
  "status": "umstritten",
  "kurz": "Ein Versicherungsbetrüger tötet seinen Komplizen und dessen Kinder. Aus dem Fall machten Zeitungen ein Mordhotel mit Hunderten Opfern, das es so nie gab.",
  "tat": "Herman Webster Mudgett, der sich H. H. Holmes nannte, ließ ab 1887 an der Ecke 63rd Street und Wallace Avenue in Chicago ein Geschäftshaus bauen und finanzierte sein Leben mit Kreditbetrug und Versicherungsschwindel. Im September 1894 tötete er in Philadelphia seinen Komplizen Benjamin Pitezel, mit dem er eine Lebensversicherung kassieren wollte. Danach reiste er mit drei von Pitezels Kindern durch den Mittleren Westen und Kanada und tötete auch sie, um Mitwisser zu beseitigen. Für mehrere Frauen aus seinem Chicagoer Umfeld, die zwischen 1891 und 1893 verschwanden, gilt er als Täter, ohne dass dies je vor Gericht kam.",
  "opfer": "Benjamin Pitezel war Zimmermann, Familienvater und seit Jahren Holmes' Helfer bei dessen Geschäften. Seine Kinder Alice, Nellie und Howard nahm Holmes unter dem Vorwand mit, sie zu ihrem Vater zu bringen; die Briefe der Kinder an ihre Mutter, die er nie abschickte, wurden später gefunden. Zu den in Chicago Verschwundenen gehören Julia Conner, die Frau eines Angestellten, und ihre kleine Tochter Pearl, Emeline Cigrand, die als Schreibkraft bei ihm arbeitete, sowie die Schwestern Minnie und Anna Williams. Sie waren keine zufälligen Besucher, sondern Menschen, denen er nahestand.",
  "ermittlung": "Ins Rollen kam der Fall durch einen Hinweis aus dem Gefängnis: Der Zugräuber Marion Hedgepeth, mit dem Holmes 1894 kurz in St. Louis einsaß, verriet den Versicherungsplan. Die Versicherung schaltete die Detektei Pinkerton ein, am 17. November 1894 wurde Holmes in Boston festgenommen. Der Detektiv Frank Geyer aus Philadelphia folgte 1895 monatelang der Reiseroute mit den Kindern, fragte Vermieter in vielen Städten ab und fand im Sommer 1895 die Überreste der Mädchen in Toronto und die des Jungen in Irvington bei Indianapolis. Parallel durchsuchte die Chicagoer Polizei das Haus an der 63rd Street, begleitet von einem Presseaufgebot, das jeden Knochenfund zur Sensation machte.",
  "taeter": "Mudgett wurde 1861 in Gilmanton, New Hampshire, geboren und studierte Medizin an der University of Michigan. Nach Chicago kam er Mitte der 1880er-Jahre, übernahm eine Apotheke in Englewood und nannte sich fortan Holmes. Er war mehrfach gleichzeitig verheiratet, lebte von Schulden, gefälschten Papieren und Versicherungsbetrug. Seine Morde dienten nach heutigem Forschungsstand meist dazu, Geld zu beschaffen oder Mitwisser loszuwerden. Verurteilt wurde er für einen einzigen Mord, den an Benjamin Pitezel.",
  "prozess": "Im Oktober 1895 begann in Philadelphia der Prozess wegen des Mordes an Benjamin Pitezel; zeitweise verteidigte Holmes sich selbst. Die Geschworenen sprachen ihn Anfang November des vorsätzlichen Mordes schuldig, das Gericht verhängte die Todesstrafe. Am 7. Mai 1896 wurde er im Moyamensing-Gefängnis gehängt. Weil sich Gerüchte hielten, er sei entkommen, wurde sein Grab 2017 geöffnet; die Untersuchung der Zähne bestätigte seine Identität.",
  "legende": "Das berühmte „Mordschloss“ mit Gaskammern, Rutschen in den Keller und Verbrennungsofen stammt aus Zeitungsberichten des Sommers 1895, nicht aus Ermittlungsakten. Das Haus enthielt Läden und Wohnungen; versteckte Räume dienten nach heutiger Forschung vor allem dazu, auf Kredit gekaufte Möbel vor Gläubigern zu verbergen. Ein Hotel für Besucher der Weltausstellung 1893 ist nicht belegt: Das 1892 aufgesetzte dritte Stockwerk kündigte er zwar als Hotel an, es wurde aber nie fertiggestellt und nie eröffnet. Holmes selbst verkaufte im April 1896 einer Zeitung ein Geständnis von 27 Morden; mehrere angebliche Opfer lebten nachweislich noch. Zahlen von 200 Opfern und mehr sind spätere Zuspitzungen. Der Historiker Adam Selzer konnte neun Opfer bestätigen, sicher belegt sind Pitezel und seine drei Kinder.",
  "bedeutung": "Der Fall zeigt, wie Massenpresse und Unterhaltung eine Geschichte umschreiben, bis sie die Akten verdrängt. Bekannt wurde Holmes außerhalb von Fachkreisen vor allem durch Erik Larsons Sachbuch „The Devil in the White City“ von 2003, das ihn neben die Weltausstellung stellt. Kriminalistisch steht dagegen Frank Geyers Suche nach den Pitezel-Kindern für sich: geduldige, grenzüberschreitende Ermittlungsarbeit, mit der Polizei, Versicherung und Privatdetektive einen Täter über Staats- und Landesgrenzen hinweg überführten.",
  "zeitleiste": [
   {
    "datum": "1887",
    "jahr": 1887,
    "text": "Holmes beginnt mit dem Bau seines Geschäftshauses an der 63rd Street in Chicago."
   },
   {
    "datum": "1891 bis 1893",
    "jahr": 1891,
    "text": "Mehrere Frauen aus seinem Umfeld verschwinden, darunter Julia und Pearl Conner und Emeline Cigrand."
   },
   {
    "datum": "September 1894",
    "jahr": 1894,
    "text": "Holmes tötet in Philadelphia seinen Komplizen Benjamin Pitezel."
   },
   {
    "datum": "17. November 1894",
    "jahr": 1894,
    "text": "Festnahme in Boston nach einem Hinweis aus dem Gefängnis."
   },
   {
    "datum": "Sommer 1895",
    "jahr": 1895,
    "text": "Detektiv Frank Geyer findet die Überreste der drei Pitezel-Kinder in Toronto und bei Indianapolis."
   },
   {
    "datum": "Oktober/November 1895",
    "jahr": 1895,
    "text": "Prozess in Philadelphia; Holmes wird des Mordes an Pitezel schuldig gesprochen."
   },
   {
    "datum": "12. April 1896",
    "jahr": 1896,
    "text": "Eine New Yorker Zeitung druckt Holmes' Geständnis von 27 Morden, das sich teils als erfunden erweist."
   },
   {
    "datum": "7. Mai 1896",
    "jahr": 1896,
    "text": "Holmes wird in Philadelphia gehängt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: H. H. Holmes",
   "Frank P. Geyer: The Holmes-Pitezel Case, 1896",
   "Adam Selzer: H. H. Holmes. The True History of the White City Devil, 2017",
   "Smithsonian Magazine: The Enduring Mystery of H. H. Holmes, 2021"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/h-h-holmes-0.jpg",
    "breite": 900,
    "hoehe": 673,
    "zeigt": "Holmes' Geschäftshaus an der 63rd Street in Chicago, Abbildung aus Frank Geyers Buch von 1896",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:H._H._Holmes_Castle.jpg"
   },
   {
    "datei": "bilder/dark/h-h-holmes-1.jpg",
    "breite": 686,
    "hoehe": 1100,
    "zeigt": "Holmes' angebliches Geständnis in The Journal, New York, 12. April 1896",
    "urheber": "The Journal (New York), April 12, 1896",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Full_confession_of_H._H._Holmes_%28page_1_crop%29.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "lizzie-borden",
  "titel": "Lizzie Borden",
  "untertitel": "Der Doppelmord von Fall River, Massachusetts 1892",
  "jahr": 1892,
  "zeitraum": "4. August 1892, Prozess Juni 1893",
  "ort": "Fall River, Massachusetts",
  "land": "USA",
  "lat": 41.69894,
  "lon": -71.1562,
  "ortQuelle": "https://en.wikipedia.org/wiki/Lizzie_Borden_House",
  "kategorie": "Mord",
  "status": "ungeklärt",
  "kurz": "Ein Ehepaar wird in seinem Haus getötet, die Tochter angeklagt und freigesprochen. Ein Kinderreim hat das Urteil der Geschworenen in der öffentlichen Erinnerung ersetzt.",
  "tat": "Am Vormittag des 4. August 1892 wurden im Haus der Familie Borden in der Second Street in Fall River zwei Menschen getötet. Abby Borden starb gegen halb zehn im Gästezimmer im Obergeschoss, ihr Mann Andrew etwa anderthalb Stunden später auf dem Sofa im Wohnzimmer, kurz nachdem er von Geschäften in der Stadt zurückgekehrt war. Beide wurden mit einem beilartigen Werkzeug erschlagen. Im Haus waren zu dieser Zeit nur die 32-jährige Tochter Lizzie und das Dienstmädchen Bridget Sullivan. Kurz nach elf Uhr rief Lizzie Borden das Dienstmädchen, ihr Vater sei tot.",
  "opfer": "Andrew Jackson Borden, 69, war einer der wohlhabenden Männer der Textilstadt Fall River, mit Immobilien, Bankbeteiligungen und Sitzen in Aufsichtsräten und galt zugleich als äußerst sparsam. Abby Durfee Gray Borden, 64, war seit 1865 seine zweite Frau und die Stiefmutter seiner Töchter Emma und Lizzie. Zeitgenössische Aussagen berichten von Spannungen in der Familie um Geld und Erbe; die Töchter sprachen von ihrer Stiefmutter als „Mrs. Borden“.",
  "ermittlung": "Die Polizei kam schnell, doch das Haus füllte sich mit Nachbarn, Ärzten und Beamten, bevor irgendetwas gesichert war. Im Keller fand man einen Beilkopf mit abgebrochenem Stiel, den die Anklage später als Tatwerkzeug präsentierte; Blutspuren ließen sich daran nicht nachweisen. Ein Apotheker gab an, Lizzie Borden habe am Vortag Blausäure kaufen wollen. Eine Freundin sah, wie sie wenige Tage nach der Tat ein Kleid verbrannte, angeblich weil es mit Farbe verschmiert war. Bei der gerichtlichen Voruntersuchung im August verwickelte sie sich ohne Anwalt in Widersprüche und wurde am 11. August 1892 festgenommen.",
  "taeter": "Angeklagt war allein Lizzie Andrew Borden, geboren 1860. Sie wurde freigesprochen und gilt rechtlich als unschuldig. Gegen sie sprachen ihre Anwesenheit im Haus, widersprüchliche Angaben und das verbrannte Kleid; für sie sprach, dass weder Blutspuren an ihr noch eine sichere Tatwaffe gefunden wurden. In der Literatur wurden auch andere Personen ins Spiel gebracht, etwa das Dienstmädchen, ein zu Besuch weilender Onkel, der ein Alibi hatte, oder ein angeblicher unehelicher Sohn Andrew Bordens. Für keine dieser Annahmen gibt es tragfähige Belege.",
  "prozess": "Der Prozess fand vom 5. bis 20. Juni 1893 in New Bedford statt. Die Verteidigung führte unter anderem George D. Robinson, ein früherer Gouverneur von Massachusetts. Das Gericht ließ Bordens Aussagen aus der Voruntersuchung nicht zu, weil sie damals ohne Rechtsbeistand und faktisch schon als Verdächtige befragt worden war; auch der Versuch, Blausäure zu kaufen, blieb ausgeschlossen. Die zwölf Geschworenen, alles Männer, sprachen sie nach etwa anderthalb Stunden Beratung frei. Danach wurde niemand mehr angeklagt.",
  "legende": "Der bekannte Reim „Lizzie Borden took an axe / And gave her mother forty whacks“ behauptet gleich dreierlei Falsches: Abby Borden war die Stiefmutter, die Zahl der Hiebe lag nach den medizinischen Befunden bei etwa 18 bis 19 für sie und 10 bis 11 für Andrew Borden, und Lizzie Borden wurde freigesprochen. Gesichert ist, dass sie nach dem Prozess mit ihrer Schwester in ein größeres Haus zog, sich Lizbeth nannte und bis zu ihrem Tod 1927 in Fall River blieb, gemieden von großen Teilen der Stadtgesellschaft. Das Tathaus ist heute ein Museum mit Übernachtungsbetrieb.",
  "bedeutung": "Der Fall war einer der ersten Prozesse, die Zeitungen im ganzen Land Tag für Tag begleiteten. Historiker sehen in ihm auch ein Lehrstück über Rollenbilder: Dass eine Frau aus gutem Haus, Sonntagsschullehrerin und Mitglied wohltätiger Vereine, eine solche Tat begehen könnte, schien vielen Zeitgenossen undenkbar. Juristisch ist der Ausschluss der Voruntersuchungsaussage bemerkenswert, weil er früh das Recht eines Verdächtigen betont, sich nicht selbst belasten zu müssen.",
  "zeitleiste": [
   {
    "datum": "4. August 1892",
    "jahr": 1892,
    "text": "Abby und Andrew Borden werden in ihrem Haus in Fall River getötet."
   },
   {
    "datum": "9. bis 11. August 1892",
    "jahr": 1892,
    "text": "Lizzie Borden sagt bei der gerichtlichen Voruntersuchung ohne Anwalt aus."
   },
   {
    "datum": "11. August 1892",
    "jahr": 1892,
    "text": "Sie wird festgenommen und des Mordes beschuldigt."
   },
   {
    "datum": "Dezember 1892",
    "jahr": 1892,
    "text": "Eine Grand Jury erhebt Anklage wegen Mordes an beiden Eheleuten."
   },
   {
    "datum": "5. Juni 1893",
    "jahr": 1893,
    "text": "Der Prozess beginnt in New Bedford."
   },
   {
    "datum": "20. Juni 1893",
    "jahr": 1893,
    "text": "Die Geschworenen sprechen Lizzie Borden frei."
   },
   {
    "datum": "1. Juni 1927",
    "jahr": 1927,
    "text": "Lizzie Borden stirbt in Fall River; der Fall bleibt ungelöst."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Lizzie Borden",
   "Cara W. Robertson: The Trial of Lizzie Borden, 2019",
   "Joseph A. Conforti: Lizzie Borden on Trial. Murder, Ethnicity, and Gender, 2015"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/lizzie-borden-0.jpg",
    "breite": 822,
    "hoehe": 1100,
    "zeigt": "Lizzie Borden mit ihrem Verteidiger George D. Robinson im Gerichtssaal, Zeichnung aus Frank Leslie's Illustrated Newspaper, 29. Juni 1893",
    "urheber": "B.W. Clinedinst",
    "lizenz": "CC BY 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Lizzie_Borden_by_B.W._Clinedinst.jpg"
   },
   {
    "datei": "bilder/dark/lizzie-borden-1.jpg",
    "breite": 900,
    "hoehe": 644,
    "zeigt": "Die Geschworenen im Borden-Prozess, Fotografie 1893",
    "urheber": "O'Neil, New Bedford, Mass",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Lizzie_Borden_Trial_Jury.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "dreyfus-affaere",
  "titel": "Die Dreyfus-Affäre",
  "untertitel": "Ein Justizskandal spaltet Frankreich, 1894–1906",
  "jahr": 1894,
  "zeitraum": "1894 bis 1906",
  "ort": "Paris",
  "land": "Frankreich",
  "lat": 48.8525,
  "lon": 2.3036,
  "ortQuelle": "https://en.wikipedia.org/wiki/École_Militaire",
  "kategorie": "Justizirrtum",
  "status": "aufgeklärt",
  "kurz": "Ein jüdischer Offizier wird wegen Landesverrats verurteilt, den ein anderer begangen hat. Zwölf Jahre Kampf um seine Rehabilitierung spalten Frankreich und machen Antisemitismus zur politischen Kraft.",
  "tat": "Im September 1894 gelangte aus der deutschen Botschaft in Paris über eine Putzfrau, die für den französischen Geheimdienst arbeitete, ein zerrissenes, unsigniertes Schreiben an die Spionageabwehr: das sogenannte Bordereau, eine Liste militärischer Unterlagen, die ihr Verfasser dem deutschen Militärattaché anbot. Die Offiziere suchten den Verräter im Generalstab und verdächtigten rasch Hauptmann Alfred Dreyfus, gestützt auf eine angebliche Ähnlichkeit der Handschrift. Er wurde am 15. Oktober 1894 verhaftet. Die antisemitische Zeitung La Libre Parole machte den Fall publik und stellte ihn als Beweis jüdischen Verrats dar. Ein Militärgericht verurteilte Dreyfus im Dezember zu lebenslanger Deportation.",
  "opfer": "Alfred Dreyfus, 1859 in Mülhausen im Elsass geboren, stammte aus einer jüdischen Familie von Textilunternehmern, die nach 1871 für Frankreich optierte. Er besuchte die École polytechnique und war Artillerieoffizier, einer der wenigen Juden im Generalstab. Mehr als vier Jahre verbrachte er auf der Teufelsinsel vor Französisch-Guayana, streng isoliert und zeitweise nachts an sein Bett gekettet. Seine Frau Lucie und sein Bruder Mathieu kämpften unermüdlich für ihn. Er selbst war ein konservativer Soldat, der an die Armee glaubte, die ihn verurteilt hatte.",
  "ermittlung": "Im März 1896 stieß Oberstleutnant Georges Picquart, neuer Chef der Spionageabwehr, auf ein abgefangenes Schreiben des deutschen Attachés an den Major Ferdinand Walsin Esterhazy. Dessen Handschrift glich der des Bordereaus. Seine Vorgesetzten wollten das Urteil nicht antasten und versetzten Picquart nach Tunesien. Stattdessen fälschte Major Hubert Henry ein Dokument, das Dreyfus belasten sollte. Schon dem Gericht von 1894 war ein geheimes Dossier vorgelegt worden, das die Verteidigung nie gesehen hatte. Erst im August 1898 fiel die Fälschung auf; Henry gestand und nahm sich am 31. August in Haft das Leben.",
  "taeter": "Der tatsächliche Verfasser des Bordereaus war Ferdinand Walsin Esterhazy, ein hoch verschuldeter Infanteriemajor, der Informationen an den deutschen Militärattaché Maximilian von Schwartzkoppen verkaufte. Nachdem er 1898 nach England geflohen war, räumte er ein, das Schreiben verfasst zu haben, und behauptete, auf Befehl gehandelt zu haben; Schwartzkoppens 1930 veröffentlichte Aufzeichnungen bestätigten ihn als Quelle. Verantwortlich für das Unrecht waren daneben Offiziere des Generalstabs, die Beweise fälschten oder zurückhielten, gedeckt vom Kriegsministerium.",
  "prozess": "Dem Militärgericht von 1894 folgte im Januar 1898 ein Verfahren gegen Esterhazy, das mit Freispruch endete. Émile Zola, der daraufhin die Verantwortlichen öffentlich anklagte, wurde wegen Verleumdung zu einem Jahr Haft verurteilt und floh nach England. 1899 hob der Kassationshof das erste Urteil auf, doch ein zweites Militärgericht in Rennes verurteilte Dreyfus erneut, nun „mit mildernden Umständen“ zu zehn Jahren. Präsident Émile Loubet begnadigte ihn. Erst am 12. Juli 1906 erklärte der Kassationshof ihn für unschuldig; er wurde wieder in die Armee aufgenommen.",
  "legende": "Oft heißt es, Zolas „J'accuse…!“ habe Dreyfus befreit. Der Artikel machte die Affäre zur nationalen Frage, brachte aber zunächst Zola selbst vor Gericht; die Wende kam erst mit der Entdeckung von Henrys Fälschung. Ebenso verbreitet ist die Erzählung, Theodor Herzl sei als Berichterstatter bei Dreyfus' Degradierung zum Zionisten geworden; das hat er später selbst so dargestellt, Historiker halten seine Entwicklung aber für vielschichtiger. Dass Dreyfus unschuldig war, ist gesichert, auch wenn nationalistische Kreise in Frankreich das noch lange bestritten.",
  "bedeutung": "Die Affäre spaltete Frankreich in Dreyfusards und Antidreyfusards, quer durch Familien, Salons und Parteien. Im Streit entstand der moderne Begriff des Intellektuellen, der sich öffentlich einmischt, 1898 wurde die Menschenrechtsliga gegründet. Zugleich formierte sich ein organisierter, politischer Antisemitismus, aus dessen Umfeld die Action française hervorging. Der Sieg der Republikaner trug dazu bei, dass 1905 Staat und Kirche getrennt wurden. Für die Militärjustiz wurde der Fall zum Lehrstück über geheime Beweise und gedeckte Fehler.",
  "zeitleiste": [
   {
    "datum": "September 1894",
    "jahr": 1894,
    "text": "Das Bordereau aus der deutschen Botschaft gelangt zur französischen Spionageabwehr."
   },
   {
    "datum": "22. Dezember 1894",
    "jahr": 1894,
    "text": "Ein Militärgericht verurteilt Alfred Dreyfus wegen Landesverrats zu lebenslanger Deportation."
   },
   {
    "datum": "5. Januar 1895",
    "jahr": 1895,
    "text": "Öffentliche Degradierung im Hof der École Militaire in Paris."
   },
   {
    "datum": "März 1896",
    "jahr": 1896,
    "text": "Georges Picquart stößt auf Esterhazy als den wahren Verfasser des Bordereaus."
   },
   {
    "datum": "13. Januar 1898",
    "jahr": 1898,
    "text": "Émile Zola veröffentlicht in L'Aurore seinen offenen Brief „J'accuse…!“."
   },
   {
    "datum": "31. August 1898",
    "jahr": 1898,
    "text": "Major Henry, der eine Fälschung gestanden hat, nimmt sich in Haft das Leben."
   },
   {
    "datum": "9. September 1899",
    "jahr": 1899,
    "text": "Das Militärgericht in Rennes verurteilt Dreyfus erneut; zehn Tage später wird er begnadigt."
   },
   {
    "datum": "12. Juli 1906",
    "jahr": 1906,
    "text": "Der Kassationshof hebt das Urteil auf; Dreyfus ist rehabilitiert."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Dreyfus affair",
   "Jean-Denis Bredin: L'Affaire, 1983",
   "Ruth Harris: The Man on Devil's Island. Alfred Dreyfus and the Affair That Divided France, 2010",
   "Vincent Duclert: L'Affaire Dreyfus, La Découverte"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/dreyfus-affaere-0.jpg",
    "breite": 900,
    "hoehe": 1022,
    "zeigt": "Die Degradierung von Alfred Dreyfus, Titelbild des Petit Journal vom 13. Januar 1895, gezeichnet von Henri Meyer",
    "urheber": "Henri Meyer",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Degradation_alfred_dreyfus.jpg"
   },
   {
    "datei": "bilder/dark/dreyfus-affaere-1.jpg",
    "breite": 858,
    "hoehe": 1100,
    "zeigt": "Titelseite von L'Aurore vom 13. Januar 1898 mit Zolas „J'accuse…!“ (Musée Carnavalet)",
    "urheber": "Zola, Emile (Paris, 02–04–1840 - Paris, 29–09–1902), auteur du texte",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:L%27aurore._Deuxi%C3%A8me_ann%C3%A9e._Num%C3%A9ro_87._Jeudi_13_janvier_1898._J%27accuse._Paris_Mus%C3%A9es_20231001210027.jpg"
   },
   {
    "datei": "bilder/dark/dreyfus-affaere-2.jpg",
    "breite": 750,
    "hoehe": 1100,
    "zeigt": "Das Bordereau, Vorderseite, von Esterhazy geschrieben",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bordereau_-_recto_-_septembre_1894.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hauptmann-von-koepenick",
  "titel": "Der Hauptmann von Köpenick",
  "untertitel": "Wilhelm Voigt und die Besetzung des Rathauses, 1906",
  "jahr": 1906,
  "zeitraum": "16. Oktober 1906",
  "ort": "Rathaus Köpenick bei Berlin",
  "land": "Deutsches Reich (Preußen)",
  "lat": 52.4457,
  "lon": 13.5748,
  "ortQuelle": "https://de.wikipedia.org/wiki/Rathaus_Köpenick",
  "kategorie": "Hochstapelei",
  "status": "aufgeklärt",
  "kurz": "Ein vorbestrafter Schuster zieht eine gebrauchte Hauptmannsuniform an, und Soldaten wie Beamte gehorchen ihm aufs Wort. Der Coup machte den preußischen Uniformgehorsam weltweit zum Gespött.",
  "tat": "Am 16. Oktober 1906 trat ein Mann in der Uniform eines preußischen Hauptmanns in Berlin auf einen kleinen Trupp Soldaten zu und stellte sie unter sein Kommando. Unterwegs ließ er weitere Soldaten antreten, nach den meisten Darstellungen waren es am Ende elf Mann. Mit ihnen fuhr er mit der Bahn nach Köpenick, damals eine selbstständige Stadt vor Berlin, besetzte das neu erbaute Rathaus und ließ die Ausgänge bewachen. Er erklärte Bürgermeister Georg Langerhans und den Stadtkassenrendanten von Wiltberg für verhaftet, ließ sich die Stadtkasse aushändigen und schickte die beiden unter Bewachung nach Berlin. Dann verschwand er. Die Angaben zur Beute schwanken: Genannt werden gut 4.000 Mark, die Neue Deutsche Biographie spricht von 3.557,54 Mark.",
  "opfer": "Verletzt wurde niemand. Geschädigt war die Stadt Köpenick, deren Kasse ausgeräumt wurde. Bürgermeister Georg Langerhans und der Kassenverwalter wurden stundenlang festgehalten und nach Berlin gebracht, ohne dass sie sich gegen einen scheinbar rechtmäßigen Befehl hätten wehren können. Für beide blieb der Tag mit Spott verbunden, denn die Öffentlichkeit lachte weniger über den Täter als über die Beamten und Soldaten, die einem Unbekannten nur wegen seiner Uniform gefolgt waren.",
  "ermittlung": "Die Polizei fahndete nach dem falschen Hauptmann. Der Täter hatte sich unter dem Namen eines Hauptmanns von Malzahn ausgegeben, die Uniform hatte er aus gebrauchten Stücken zusammengekauft. Den entscheidenden Hinweis gab nach gängiger Darstellung ein früherer Mithäftling, der von Voigts Plänen wusste. Zehn Tage nach der Tat, am 26. Oktober 1906, wurde Wilhelm Voigt in seiner Berliner Unterkunft festgenommen. Die Polizei gab die Festnahme noch am selben Tag in einer Pressemitteilung bekannt und ließ Erkennungsfotos von ihm anfertigen.",
  "taeter": "Friedrich Wilhelm Voigt, geboren am 13. Februar 1849 in Tilsit, war Schuhmacher und hatte bei der Tat schon einen großen Teil seines Lebens in Haft verbracht. Er war seit seiner Jugend wiederholt verurteilt worden, unter anderem für eine Postanweisungsfälschung und einen Einbruch in die Gerichtskasse von Wongrowitz, für die er lange Zuchthausstrafen verbüßte. Nach seiner letzten Entlassung 1906 hatten die Behörden ihn aus Berlin ausgewiesen. Nach seinen eigenen Angaben wollte er im Rathaus einen Pass erbeuten, um ein geregeltes Leben beginnen zu können; Köpenick hatte jedoch keine Passbehörde. Ob dieses Motiv die ganze Wahrheit ist, lässt sich nicht prüfen.",
  "prozess": "Am 1. Dezember 1906 verurteilte das Landgericht Berlin Voigt unter anderem wegen unbefugten Tragens einer Uniform, Freiheitsberaubung und Urkundenfälschung zu vier Jahren Gefängnis. Die öffentliche Stimmung war auf seiner Seite, viele sahen in ihm einen vom Staat zermürbten Menschen. Kaiser Wilhelm II. begnadigte ihn nach knapp zwei Jahren; im August 1908 verließ Voigt die Strafanstalt Tegel. Danach trat er mit Vorträgen und Autogrammen auf, veröffentlichte 1909 seine Erinnerungen und ließ sich in Luxemburg nieder, wo er am 3. Januar 1922 starb.",
  "legende": "Gesichert sind die Tat, die Verhaftung des Bürgermeisters und die Beschlagnahme der Kasse. Zur Legende gehört die Figur des gutmütigen Schusters, der nur einen Pass wollte: Voigt war ein vielfach verurteilter Krimineller, und die Kasse nahm er durchaus mit. Ebenso unsicher ist die oft erzählte Anekdote, der Kaiser habe über die Nachricht gelacht. Das heutige Bild prägt vor allem Carl Zuckmayers Theaterstück „Der Hauptmann von Köpenick“, 1931 uraufgeführt, und seine Verfilmungen, besonders die mit Heinz Rühmann von 1956. Zuckmayer erzählt eine Geschichte über Bürokratie und Untertanengeist, keine genaue Rekonstruktion.",
  "bedeutung": "Die „Köpenickiade“ wurde zum Wort für eine Täuschung, die allein mit dem Anschein von Amtsgewalt gelingt. Die Tat ging binnen Tagen durch die internationale Presse und wurde als Beweis gelesen, dass im wilhelminischen Preußen die Uniform mehr galt als Verstand und Gesetz. Für die Kritik am Militarismus war sie ein Geschenk. Köpenick hat den Spott längst angenommen: Vor dem Rathaus steht ein Denkmal, und die Geschichte wird dort regelmäßig nachgespielt.",
  "zeitleiste": [
   {
    "datum": "13. Februar 1849",
    "jahr": 1849,
    "text": "Friedrich Wilhelm Voigt wird in Tilsit in Ostpreußen geboren."
   },
   {
    "datum": "16. Oktober 1906",
    "jahr": 1906,
    "text": "Als falscher Hauptmann besetzt Voigt mit Soldaten das Rathaus Köpenick und nimmt die Stadtkasse mit."
   },
   {
    "datum": "26. Oktober 1906",
    "jahr": 1906,
    "text": "Voigt wird in Berlin festgenommen."
   },
   {
    "datum": "1. Dezember 1906",
    "jahr": 1906,
    "text": "Das Landgericht verurteilt ihn zu vier Jahren Gefängnis."
   },
   {
    "datum": "August 1908",
    "jahr": 1908,
    "text": "Nach der Begnadigung durch Wilhelm II. verlässt Voigt die Strafanstalt Tegel."
   },
   {
    "datum": "3. Januar 1922",
    "jahr": 1922,
    "text": "Voigt stirbt in Luxemburg."
   },
   {
    "datum": "1931",
    "jahr": 1931,
    "text": "Carl Zuckmayers Stück „Der Hauptmann von Köpenick“ wird uraufgeführt."
   }
  ],
  "quellen": [
   "Wilhelm Ruprecht Frieling: Voigt, Friedrich Wilhelm. In: Neue Deutsche Biographie 27, 2020, S. 67–68",
   "Bezirksamt Treptow-Köpenick: Pressemitteilung zum 100. Todestag von Friedrich Wilhelm Voigt, 2021",
   "Wilhelm Voigt: Wie ich Hauptmann von Köpenick wurde. Mein Lebensbild, 1909"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hauptmann-von-koepenick-0.jpg",
    "breite": 722,
    "hoehe": 1100,
    "zeigt": "Erkennungsfoto der preußischen Polizei von Wilhelm Voigt nach seiner Festnahme am 26. Oktober 1906",
    "urheber": "Preussische Polizei",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Wilhelm_Voigt_1906_10_26.jpg"
   },
   {
    "datei": "bilder/dark/hauptmann-von-koepenick-1.jpg",
    "breite": 900,
    "hoehe": 960,
    "zeigt": "Personenbeschreibung aus der Strafvollzugsakte Wilhelm Voigts, 1906",
    "urheber": "Staat Preußen",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Akte_K%C3%B6penick.png"
   },
   {
    "datei": "bilder/dark/hauptmann-von-koepenick-2.jpg",
    "breite": 900,
    "hoehe": 723,
    "zeigt": "Voigt verlässt nach der Begnadigung die Strafanstalt Tegel, August 1908 (Wiener Bilder)",
    "urheber": "Eduard Frankl († 1927), Berlin-Friedenau",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Wilhelm_Voigt_verl%C3%A4sst_die_Strafanstalt_Tegel.png"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "raub-der-mona-lisa",
  "titel": "Der Raub der Mona Lisa",
  "untertitel": "Vincenzo Peruggia und das leere Wandstück im Louvre, 1911",
  "jahr": 1911,
  "zeitraum": "21. August 1911 bis Dezember 1913",
  "ort": "Musée du Louvre, Paris",
  "land": "Frankreich",
  "lat": 48.8611,
  "lon": 2.3358,
  "ortQuelle": "https://en.wikipedia.org/wiki/Louvre",
  "kategorie": "Raub",
  "status": "aufgeklärt",
  "kurz": "Ein Handwerker trägt das berühmteste Gemälde der Welt unter seinem Kittel aus dem Louvre. Erst der Diebstahl und die zwei Jahre ohne Spur machten die Mona Lisa zur Ikone.",
  "tat": "Am Montag, dem 21. August 1911, war der Louvre wie jeden Montag für Besucher geschlossen. Am frühen Morgen nahm Vincenzo Peruggia, ein italienischer Handwerker, Leonardo da Vincis Bildnis der Lisa del Giocondo im Salon Carré von der Wand. Er kannte das Haus, weil er für eine Firma gearbeitet hatte, die Gemälde im Louvre hinter Glas setzte. Im Treppenhaus löste er die Tafel aus Schutzkasten und Rahmen, wickelte sie in seinen weißen Arbeitskittel und verließ das Museum. Ob er die Nacht zuvor im Gebäude versteckt war oder erst am Morgen hineinkam, wird unterschiedlich dargestellt. Das Bild verwahrte er rund zwei Jahre in seiner Pariser Unterkunft, in einem Koffer.",
  "opfer": "Bestohlen wurde der Louvre und mit ihm die französische Öffentlichkeit. Der Museumsdirektor verlor nach dem Diebstahl sein Amt, das Haus blieb eine Woche geschlossen. Zu den Leidtragenden gehörten auch Unschuldige: Der Dichter Guillaume Apollinaire wurde verhaftet und erst nach fünf Tagen freigelassen, weil ein Bekannter von ihm früher kleine Statuen aus dem Louvre gestohlen hatte. Auch Pablo Picasso, der solche Statuen gekauft hatte, wurde vernommen. Beide wurden zu Unrecht verdächtigt.",
  "ermittlung": "Das Fehlen fiel erst am 22. August auf, als ein Maler das Bild kopieren wollte; Gemälde wurden damals öfter zum Fotografieren abgenommen. Die Polizei befragte das Personal und suchte Grenzen und Häfen ab, ohne Ergebnis. Auf dem zurückgelassenen Glas fand sich ein Fingerabdruck. Peruggia war wegen eines früheren Delikts in der Kartei des Erkennungsdienstes von Alphonse Bertillon erfasst, wurde aber nicht mit dem Abdruck in Verbindung gebracht. Beamte suchten ihn sogar in seiner Wohnung auf und hielten ihn nicht für verdächtig. Im Dezember 1913 bot Peruggia das Bild unter falschem Namen dem Florentiner Kunsthändler Alfredo Geri an. Geri zog Giovanni Poggi, den Direktor der Uffizien, hinzu; nachdem dieser die Echtheit geprüft hatte, wurde Peruggia festgenommen.",
  "taeter": "Vincenzo Peruggia, geboren 1881 im norditalienischen Dumenza, lebte als Arbeitsmigrant in Paris. Er handelte allein; Mittäter wurden nie nachgewiesen. Vor Gericht erklärte er, er habe das Bild nach Italien zurückbringen wollen, weil Napoleon es geraubt habe. Das stimmt nicht: Leonardo hatte das Gemälde selbst nach Frankreich mitgenommen, es kam lange vor Napoleon in die königliche Sammlung. Briefe Peruggias an seine Familie deuten darauf hin, dass er auch auf Geld hoffte. Er starb 1925 in Frankreich.",
  "prozess": "Im Juni 1914 stand Peruggia in Florenz vor Gericht. Seine patriotische Begründung fand in Italien viel Sympathie, und ein psychiatrisches Gutachten wurde zu seinen Gunsten berücksichtigt. Das Gericht verurteilte ihn zu einem Jahr und fünfzehn Tagen Haft, in der Berufung wurde die Strafe verkürzt; nach rund sieben Monaten kam er frei. Die Mona Lisa war zuvor in Florenz, Rom und Mailand gezeigt worden und kehrte am 4. Januar 1914 in den Louvre zurück.",
  "legende": "Gesichert sind Täter, Ablauf und Wiederauffindung. Die bekannteste Legende stammt aus einem Artikel des Journalisten Karl Decker in der Saturday Evening Post von 1932: Ein Hochstapler namens Eduardo de Valfierno habe den Raub bestellt, um Kopien als Original an Sammler zu verkaufen. Unabhängige Belege für diese Geschichte gibt es nicht. Ebenso oft wird erzählt, Peruggias Fingerabdruck sei nur deshalb nicht gefunden worden, weil die Kartei nach Körpermaßen und nur mit dem Abdruck der rechten Hand geordnet war. Dass der Abgleich scheiterte, ist sicher; die genauen Gründe werden unterschiedlich überliefert.",
  "bedeutung": "Vor 1911 war die Mona Lisa ein geschätztes Werk unter vielen, danach war sie das berühmteste Gemälde der Welt. Zeitungen druckten wochenlang ihr Bild, und Besucher kamen in den Louvre, um die leere Stelle an der Wand zu sehen. Der Fall gilt als Ausgangspunkt des modernen Kunstraubs als Medienereignis. Er führte auch vor, wie wenig Museen damals gesichert waren und wie mühsam der Abgleich von Spuren mit Karteien noch war.",
  "zeitleiste": [
   {
    "datum": "21. August 1911",
    "jahr": 1911,
    "text": "Vincenzo Peruggia nimmt die Mona Lisa im geschlossenen Louvre von der Wand und trägt sie hinaus."
   },
   {
    "datum": "22. August 1911",
    "jahr": 1911,
    "text": "Der Diebstahl wird bemerkt, der Louvre schließt für eine Woche."
   },
   {
    "datum": "September 1911",
    "jahr": 1911,
    "text": "Guillaume Apollinaire wird festgenommen und nach fünf Tagen freigelassen, Picasso wird vernommen."
   },
   {
    "datum": "Dezember 1913",
    "jahr": 1913,
    "text": "Peruggia bietet das Bild in Florenz dem Kunsthändler Alfredo Geri an und wird verhaftet."
   },
   {
    "datum": "4. Januar 1914",
    "jahr": 1914,
    "text": "Nach Ausstellungen in Italien kehrt die Mona Lisa in den Louvre zurück."
   },
   {
    "datum": "Juni 1914",
    "jahr": 1914,
    "text": "Ein Gericht in Florenz verurteilt Peruggia; nach rund sieben Monaten ist er frei."
   }
  ],
  "quellen": [
   "Dorothy und Thomas Hoobler: The Crimes of Paris, 2009",
   "Noah Charney: The Thefts of the Mona Lisa, 2011",
   "Time: Top 10 Heists – The Mona Lisa, 1911"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/raub-der-mona-lisa-0.jpg",
    "breite": 900,
    "hoehe": 926,
    "zeigt": "Erkennungsdienstliche Aufnahme von Vincenzo Peruggia aus der Pariser Polizeikartei, 1909",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Vincenzo_Perugia.jpg"
   },
   {
    "datei": "bilder/dark/raub-der-mona-lisa-1.jpg",
    "breite": 640,
    "hoehe": 887,
    "zeigt": "Die leere Stelle der Mona Lisa im Salon Carré des Louvre, 1911",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mona_Lisa_stolen-1911.jpg"
   },
   {
    "datei": "bilder/dark/raub-der-mona-lisa-2.jpg",
    "breite": 755,
    "hoehe": 1100,
    "zeigt": "Titelseite der Zeitung L'Excelsior vom 14. Dezember 1913 zur Aufklärung des Diebstahls",
    "urheber": "Lafitte, Pierre (1872-1938). Directeur de publication",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Excelsior_-_Vincenzo_Peruggia_-_Vol_de_La_Joconde_-_Mona_Lisa.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "henri-desire-landru",
  "titel": "Henri Désiré Landru",
  "untertitel": "Heiratsanzeigen und verschwundene Frauen, Paris und Gambais 1915–1919",
  "jahr": 1915,
  "zeitraum": "Taten 1915 bis 1919, Prozess November 1921",
  "ort": "Paris, Vernouillet und Gambais",
  "land": "Frankreich",
  "lat": 48.7739,
  "lon": 1.6739,
  "ortQuelle": "https://en.wikipedia.org/wiki/Gambais",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Ein Heiratsschwindler lockt im Ersten Weltkrieg zehn Frauen und einen Jugendlichen in Landhäuser bei Paris – verurteilt wird er, obwohl nie eine Leiche gefunden wurde.",
  "tat": "Henri Désiré Landru, ein Pariser Gebrauchtwarenhändler, der vor dem Krieg mehrfach wegen Betrugs verurteilt worden war, gab ab 1914 Heiratsanzeigen in Pariser Zeitungen auf. Unter falschen Namen stellte er sich als gut situierter Witwer vor, der eine Frau in ähnlicher Lage suche. Der Krieg hatte viele Frauen allein gelassen, und Landru wählte unter den Zuschriften vor allem solche aus, die etwas Vermögen besaßen. Er versprach die Ehe, ließ sich Ersparnisse, Möbel und Wertpapiere übertragen und nahm die Frauen mit in gemietete Landhäuser, zuerst in Vernouillet, ab Ende 1915 in Gambais bei Houdan, westlich von Paris. Zehn Frauen und der Sohn einer von ihnen kehrten von dort nicht zurück. Landru verkaufte danach ihre Habe und löste ihre Wohnungen auf.",
  "opfer": "Nach dem Urteil von 1921 waren es zehn Frauen und ein Jugendlicher: Jeanne Cuchet und ihr Sohn André, Thérèse Laborde-Line, Marie-Angélique Guillin, Berthe Héon, Anne Collomb, Andrée Babelay, Célestine Buisson, Louise Jaume, Anne-Marie Pascal und Marie-Thérèse Marchadier. Die meisten waren Witwen mittleren Alters, manche mit kleinem Vermögen, andere fast mittellos; Andrée Babelay war eine junge Hausangestellte. Viele lebten allein und hatten wenig Kontakt zu ihren Familien, sodass ihr Verschwinden in den Kriegsjahren lange unbemerkt blieb. Erst die Hartnäckigkeit von Angehörigen brachte die Ermittlungen in Gang.",
  "ermittlung": "Anfang 1919 wandten sich Angehörige von Anne Collomb und Célestine Buisson unabhängig voneinander an den Bürgermeister von Gambais. Beide suchten nach einem Mann, mit dem die Frauen dorthin gefahren waren, und die Beschreibungen passten zueinander, obwohl er unter verschiedenen Namen aufgetreten war. Am 11. April 1919 wurde Landru in der Pariser Rue de Rivoli wiedererkannt und die Schwester von Célestine Buisson verständigt; am folgenden Tag nahm die Polizei ihn in seiner Wohnung in der Rue de Rochechouart fest. Bei ihm fand sich ein schwarzes Notizbuch mit den Namen von 283 Frauen, mit denen er über Anzeigen Kontakt gehabt hatte, und mit genauen Ausgabenlisten. Besonders belastend wirkten Notizen über Bahnfahrten nach Gambais: für ihn eine Hin- und Rückfahrkarte, für die Begleiterin nur eine einfache Fahrt. In der Villa fanden Ermittler Knochenreste, Asche, Kleiderreste und Gegenstände der Frauen, aber keine Leichen.",
  "taeter": "Landru, 1869 in Paris geboren, war verheiratet und Vater von vier Kindern; neben dem Familienleben führte er unter wechselnden Namen ein Doppelleben. Vor dem Krieg hatte er wegen Betrügereien mehrere Haftstrafen verbüßt. In den letzten Jahren vor seiner Festnahme lebte er mit Fernande Segret zusammen, einer jungen Frau, die ihn überlebte und später als Zeugin aussagte. Landru bestritt jede Tat, verweigerte zum Schicksal der Verschwundenen jede Auskunft und erklärte, das seien Privatangelegenheiten. Ein Geständnis hat er nie abgelegt. Seine Schuld gilt aufgrund der geschlossenen Indizienkette als gesichert; wie er die Frauen tötete, ist nicht bekannt.",
  "prozess": "Der Prozess vor dem Schwurgericht des Departements Seine-et-Oise in Versailles begann am 7. November 1921 und wurde zu einem Medienereignis, über das auch die Schriftstellerin Colette berichtete. Verteidigt wurde Landru von Vincent de Moro-Giafferi, die Anklage vertrat Generalanwalt Godefroy. Die Verteidigung baute darauf, dass ohne Leichen kein Mord bewiesen sei. Am 30. November 1921 sprachen die Geschworenen Landru des Mordes in elf Fällen schuldig, das Gericht verhängte die Todesstrafe. Staatspräsident Alexandre Millerand lehnte die Begnadigung ab. Am 25. Februar 1922 wurde Landru in Versailles mit der Guillotine hingerichtet.",
  "legende": "Landru wird bis heute oft als „Blaubart“ bezeichnet; das ist ein Pressebeiname aus der Märchenwelt, kein Befund. Die verbreitete Annahme, er habe die Leichen im Herd der Villa in Gambais verbrannt, vertrat die Anklage, und sie passt zu den Asche- und Knochenfunden, bewiesen wurde sie aber nie. Auch der berühmte Satz der Verteidigung, man möge die Leichen vorzeigen, ist in vielen Fassungen überliefert und im Wortlaut nicht gesichert. Ebenso ungesichert ist die später verbreitete Geschichte, Landru habe auf einer Zeichnung aus der Haft ein verstecktes Geständnis hinterlassen. Gesichert sind das Notizbuch, die Fahrkartennotizen, der Besitz der Opfer in seinen Händen und das spurlose Verschwinden von elf Menschen.",
  "bedeutung": "Der Fall zeigte, dass ein Mordurteil auch ohne Leiche auf eine geschlossene Indizienkette gestützt werden kann; das Notizbuch wurde zum zentralen Beweisstück. Der Prozess war eines der ersten großen Medienspektakel der Nachkriegszeit und füllte wochenlang die Zeitungen. Zugleich warf er ein Licht auf die Lage alleinstehender Frauen im Krieg, für die Heiratsanzeigen ein Weg aus Not und Einsamkeit sein sollten. Kino und Literatur griffen den Stoff mehrfach auf, etwa Charlie Chaplin in „Monsieur Verdoux“ (1947) und Claude Chabrol in „Landru“ (1963).",
  "zeitleiste": [
   {
    "datum": "Ab 1914",
    "jahr": 1914,
    "text": "Landru gibt unter falschen Namen Heiratsanzeigen in Pariser Zeitungen auf."
   },
   {
    "datum": "Januar 1915",
    "jahr": 1915,
    "text": "Jeanne Cuchet und ihr Sohn André verschwinden nach einem Aufenthalt bei Landru in Vernouillet."
   },
   {
    "datum": "Ende 1915",
    "jahr": 1915,
    "text": "Landru mietet ein Landhaus in Gambais, den späteren Hauptschauplatz."
   },
   {
    "datum": "12. April 1919",
    "jahr": 1919,
    "text": "Festnahme in Paris, nachdem er tags zuvor in der Rue de Rivoli wiedererkannt worden war."
   },
   {
    "datum": "7. November 1921",
    "jahr": 1921,
    "text": "Prozessbeginn vor dem Schwurgericht in Versailles."
   },
   {
    "datum": "30. November 1921",
    "jahr": 1921,
    "text": "Schuldspruch in elf Mordfällen und Todesurteil."
   },
   {
    "datum": "25. Februar 1922",
    "jahr": 1922,
    "text": "Hinrichtung in Versailles."
   }
  ],
  "quellen": [
   "Ministère de la Justice: Le procès Landru (justice.gouv.fr)",
   "Encyclopaedia Britannica: Henri-Désiré Landru",
   "Colette: Prozessberichte zum Fall Landru, Le Matin, November 1921"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/henri-desire-landru-0.jpg",
    "breite": 900,
    "hoehe": 616,
    "zeigt": "Erkennungsdienstliche Aufnahmen Landrus von vorn und im Profil, 17. April 1919",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Landru_-_photographies_d%27identit%C3%A9_judiciaire_%2817_avril_1919%29.jpg"
   },
   {
    "datei": "bilder/dark/henri-desire-landru-1.jpg",
    "breite": 831,
    "hoehe": 1100,
    "zeigt": "Landrus Heiratsanzeige in „L’Écho de Paris“ vom 16. März 1915: „Monsieur réfugié, 45 ans …“",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:L%27%C3%89cho_de_Paris_-_petite_annonce_de_Landru_-_16_mars_1915.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "mord-rasputin",
  "titel": "Der Mord an Rasputin",
  "untertitel": "Eine Nacht im Jussupow-Palais, Petrograd 1916",
  "jahr": 1916,
  "zeitraum": "Nacht vom 16. auf den 17. Dezember 1916 (julianisch), 29./30. Dezember (gregorianisch)",
  "ort": "Jussupow-Palais an der Moika, Petrograd",
  "land": "Russland",
  "lat": 59.9295,
  "lon": 30.2987,
  "ortQuelle": "https://en.wikipedia.org/wiki/Moika_Palace",
  "kategorie": "Mord",
  "status": "aufgeklärt",
  "kurz": "Adlige Verschwörer töten den Wunderheiler der Zarenfamilie, um die Monarchie zu retten. Die Legende vom Unverwundbaren stammt vom Mörder selbst – die Obduktion erzählt eine nüchternere Geschichte.",
  "tat": "Grigori Rasputin, ein sibirischer Bauer und Wanderprediger, hatte seit 1905 Zugang zur Zarenfamilie, weil Zarin Alexandra glaubte, er könne die Bluterkrankheit ihres Sohnes Alexei lindern. Im Weltkrieg galt er vielen als Ursache von Misswirtschaft und Skandalen. Fürst Felix Jussupow lud ihn in der Nacht auf den 17. Dezember 1916 in sein Palais an der Moika. Mit ihm verschworen waren Großfürst Dmitri Pawlowitsch, der Duma-Abgeordnete Wladimir Purischkewitsch, der Arzt Stanislaus Lasowert und der Offizier Sergei Suchotin. Rasputin wurde im Palais und im Hof erschossen. Die Täter warfen den Leichnam von der Großen Petrowski-Brücke in die Kleine Newka, wo er am 19. Dezember unter dem Eis gefunden wurde.",
  "opfer": "Grigori Jefimowitsch Rasputin wurde 1869 im Dorf Pokrowskoje in Westsibirien geboren, er konnte kaum lesen und schreiben. Als religiöser Pilger gewann er in der Petersburger Gesellschaft Anhänger, später das Vertrauen der Zarin. Sein Lebenswandel und sein Einfluss auf Personalentscheidungen wurden zum Skandal, vieles davon war Gerücht. 1914 hatte ihn bereits eine Frau in seinem Heimatdorf niedergestochen. Seine Tochter Maria veröffentlichte später Erinnerungen an ihn.",
  "ermittlung": "Die Polizei ermittelte sofort, denn ein Wachmann hatte Schüsse gehört und Purischkewitsch sich ihm gegenüber verplappert; Blutspuren führten zum Palais. Der Pathologe Dmitri Kossorotow obduzierte den Leichnam. Er stellte drei Schussverletzungen fest, darunter einen Schuss in die Stirn aus nächster Nähe, der sofort tödlich gewesen sein muss. Gift fand er nach seinen Angaben nicht, auch kein Wasser in der Lunge. Die Untersuchung wurde nach der Februarrevolution 1917 eingestellt, viele Unterlagen gingen verloren. Rasputin wurde in Zarskoje Selo begraben; im März 1917 ließ die Provisorische Regierung den Leichnam ausgraben und verbrennen.",
  "taeter": "Die Täterschaft der Verschwörer ist gesichert, Jussupow und Purischkewitsch beschrieben die Tat später selbst. Ihr Motiv war politisch: Sie wollten den Einfluss Rasputins auf den Hof brechen und die Monarchie stärken. Wer den tödlichen Schuss abgab, ist offen; Jussupow schrieb sich die ersten Schüsse zu, Purischkewitsch die im Hof. Seit einer BBC-Dokumentation von 2004 wird vertreten, der britische Geheimdienstoffizier Oswald Rayner sei beteiligt gewesen und habe den Kopfschuss abgegeben. Dafür gibt es Indizien wie die Anwesenheit britischer Agenten in Petrograd, aber keinen Beweis; Historiker wie Douglas Smith halten die These für unbelegt.",
  "prozess": "Einen Prozess gab es nicht. Nikolaus II. ließ die Verschwörer ohne Verfahren bestrafen, weil ein Prozess gegen Mitglieder der Zarenfamilie und des Hochadels politisch unmöglich schien. Großfürst Dmitri wurde an die Front nach Persien versetzt, Jussupow auf sein Gut Rakitnoje bei Kursk verbannt, Purischkewitsch blieb unbehelligt. Wenige Monate später fiel die Monarchie. Jussupow lebte danach im Exil in Paris, wo er 1967 starb.",
  "legende": "Die berühmte Geschichte, Rasputin habe mit Zyankali vergiftete Kuchen und Wein ohne Wirkung verzehrt, sei nach mehreren Schüssen wieder aufgestanden und schließlich lebend ertrunken, stammt vor allem aus Jussupows Erinnerungen von 1927 und dem Bericht Purischkewitschs. Beide schrieben mit dem Interesse, die Tat als Kampf gegen eine übernatürliche Bedrohung darzustellen. Die Obduktion nach Kossorotow fand weder Gift noch Wasser in der Lunge; der Kopfschuss war tödlich. Ob das Gift überhaupt verabreicht wurde, ist ungewiss, Lasowert soll später behauptet haben, er habe es durch harmloses Pulver ersetzt. Gesichert ist nur: Rasputin wurde erschossen.",
  "bedeutung": "Der Mord sollte die Monarchie retten und beschleunigte ihren Untergang: Er zeigte, dass selbst der Hochadel der Zarenfamilie nicht mehr vertraute, und blieb ungesühnt. Rasputins Bild als dämonischer Mönch, der er nie war, entstand aus Gerüchten, Propaganda und den Erinnerungen seiner Mörder und lebt in Filmen und Liedern fort. 1934 verklagte Jussupow das Hollywood-Studio MGM wegen der Darstellung seiner Frau im Film „Rasputin and the Empress“ und gewann; der seitdem übliche Hinweis, Ähnlichkeiten mit lebenden Personen seien zufällig, geht auch auf diesen Fall zurück.",
  "zeitleiste": [
   {
    "datum": "21. Januar 1869",
    "jahr": 1869,
    "text": "Rasputin wird in Pokrowskoje in Westsibirien geboren (gregorianisch; julianisch 9. Januar)."
   },
   {
    "datum": "1. November 1905 (julianisch)",
    "jahr": 1905,
    "text": "Erste Begegnung mit Zar Nikolaus II. und Zarin Alexandra."
   },
   {
    "datum": "29. Juni 1914 (julianisch)",
    "jahr": 1914,
    "text": "Rasputin überlebt einen Messerangriff in seinem Heimatdorf."
   },
   {
    "datum": "16./17. Dezember 1916 (julianisch)",
    "jahr": 1916,
    "text": "Rasputin wird im Jussupow-Palais erschossen und in die Kleine Newka geworfen."
   },
   {
    "datum": "19. Dezember 1916 (julianisch)",
    "jahr": 1916,
    "text": "Der Leichnam wird unter dem Eis gefunden und obduziert."
   },
   {
    "datum": "März 1917",
    "jahr": 1917,
    "text": "Nach der Februarrevolution wird der Leichnam exhumiert und verbrannt."
   },
   {
    "datum": "1927",
    "jahr": 1927,
    "text": "Jussupow veröffentlicht seine Darstellung, die die Legende prägt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Grigori Rasputin",
   "Douglas Smith: Rasputin. Faith, Power, and the Twilight of the Romanovs, 2016",
   "Edward Radzinsky: The Rasputin File, 2000",
   "Felix Jussupow: Rasputin, 1927 (Täterbericht, quellenkritisch zu lesen)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/mord-rasputin-0.jpg",
    "breite": 808,
    "hoehe": 1100,
    "zeigt": "Grigori Rasputin, Porträtaufnahme von Karl Bulla, um 1910",
    "urheber": "Karl Bulla",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Gregory_Rasputin.jpg"
   },
   {
    "datei": "bilder/dark/mord-rasputin-1.jpg",
    "breite": 900,
    "hoehe": 583,
    "zeigt": "Das Jussupow-Palais an der Moika in Sankt Petersburg, Schauplatz der Tat",
    "urheber": "Ninaras",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Yusupov_Palace_on_the_Moika_River%2C_Saint_Petersburg.JPG"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "fritz-haarmann",
  "titel": "Der Fall Haarmann",
  "untertitel": "Mordserie und Polizeiversagen in Hannover, 1918–1924",
  "jahr": 1918,
  "zeitraum": "1918 bis Juni 1924",
  "ort": "Hannover, Altstadt",
  "land": "Deutschland",
  "lat": 52.3744,
  "lon": 9.7386,
  "ortQuelle": "https://de.wikipedia.org/wiki/Hannover",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Über Jahre verschwanden in Hannover Jungen und junge Männer, während der Täter als Spitzel für die Polizei arbeitete. Der Fall zeigt, wie Behörden Hinweise übergingen, weil sie den Mann brauchten.",
  "tat": "Zwischen 1918 und 1924 tötete Fritz Haarmann in Hannover mindestens 24 Jungen und junge Männer im Alter von 10 bis 22 Jahren. Viele lernte er am Hauptbahnhof kennen, wo sich in den Nachkriegsjahren Heimatlose, Ausreißer und Arbeitssuchende sammelten. Er lockte sie in seine Wohnungen in der Altstadt, zuletzt in der Roten Reihe, und brachte sie dort um. Die Überreste warf er in die Leine, Kleidung und Habe der Opfer verkaufte er. Im Mai 1924 fanden Kinder am Ufer der Leine einen menschlichen Schädel, in den folgenden Wochen kamen weitere hinzu. Bei der Suche im Fluss wurden schließlich mehr als 500 menschliche Knochen geborgen.",
  "opfer": "Die Opfer waren Schüler, Lehrlinge, Arbeitslose und junge Durchreisende, viele aus armen Familien, manche von zu Hause fortgelaufen. Das erste nachgewiesene Opfer war der 17-jährige Friedel Rothe, der im September 1918 verschwand; seine Eltern drängten die Polizei zu suchen. Andere Familien meldeten ihre Söhne vermisst und hörten, die Jungen seien wohl ausgerissen. 1925 wurden die geborgenen Überreste in einem Gemeinschaftsgrab auf dem Friedhof Stöcken beigesetzt. Ein Gedenkstein von 1928 nennt die Namen und das Alter der Opfer.",
  "ermittlung": "Haarmann war mehrfach vorbestraft und arbeitete nach dem Ersten Weltkrieg als Spitzel für die Kriminalpolizei, der er Hinweise aus dem Milieu am Bahnhof lieferte. Diese Nähe schützte ihn. Schon im Oktober 1918 durchsuchte die Polizei auf Drängen der Eltern von Friedel Rothe seine Wohnung, fand ihn mit einem 13-jährigen Jungen, übersah aber jede Spur des Vermissten; Haarmann wurde daraufhin wegen Unzucht verurteilt. Spätere Anzeigen und Verdachtsmeldungen aus der Nachbarschaft blieben folgenlos. Erst die Schädelfunde von 1924 zwangen zum Handeln. Am 22. Juni 1924 wurde Haarmann festgenommen, nachdem ein Jugendlicher ihn angezeigt hatte. In den Verhören, bei denen er nach eigener Aussage misshandelt wurde, gestand er.",
  "taeter": "Friedrich (Fritz) Haarmann, geboren am 25. Oktober 1879 in Hannover, war wegen Diebstahl, Betrug und Sexualdelikten wiederholt in Haft und zeitweise in einer Anstalt untergebracht. Er lebte vom Handel mit Gebrauchtwaren und Kleidung. Der Psychiater Ernst Schultze aus Göttingen erklärte ihn für zurechnungsfähig. Mitangeklagt war sein jüngerer Bekannter Hans Grans, dem die Anklage Anstiftung zu Morden vorwarf. Grans wurde zunächst zum Tode verurteilt; in einem neuen Verfahren 1926 erhielt er zwölf Jahre Zuchthaus. Ob und wie weit er beteiligt war, ist bis heute umstritten.",
  "prozess": "Der Prozess vor dem Schwurgericht Hannover dauerte vom 4. bis 19. Dezember 1924, rund 190 Zeugen wurden geladen. Angeklagt war Haarmann wegen 27 Morden, verurteilt wurde er wegen 24 und dafür zum Tode. Der Philosoph Theodor Lessing berichtete kritisch über die Rolle der Polizei und wurde daraufhin vom Verfahren ausgeschlossen. Am 15. April 1925 wurde Haarmann im Gefängnis Hannover mit dem Fallbeil hingerichtet. Sein Kopf wurde für die Rechtsmedizin in Göttingen aufbewahrt und erst 2014 eingeäschert.",
  "legende": "Gesichert sind die 24 Verurteilungen, die Spitzeltätigkeit für die Polizei und das Versagen der Behörden. Die genaue Zahl der Opfer ist unbekannt und könnte höher liegen. Zum Legendenkranz gehört das Gerücht, Haarmann habe Fleisch seiner Opfer verkauft; es kursierte schon 1924 und wurde nie bewiesen. Auch das Spottlied „Warte, warte nur ein Weilchen“, das bis heute mit seinem Namen verbunden ist, und die Bezeichnung als „Werwolf“ sind Schöpfungen von Presse und Volksmund. Sie haben den Täter bekannter gemacht als die Jungen, die er getötet hat.",
  "bedeutung": "Der Fall wurde zum Sinnbild für eine Polizei, die einen Informanten deckte und die Sorgen armer Familien nicht ernst nahm. Theodor Lessings Berichte machten daraus eine Anklage gegen Justiz und Gesellschaft der Weimarer Republik. Der Prozess war eines der ersten großen Medienereignisse der Kriminalgeschichte in Deutschland. Zugleich nährte die öffentliche Darstellung des homosexuellen Täters Vorurteile gegen Homosexuelle, die damals nach Paragraf 175 verfolgt wurden.",
  "zeitleiste": [
   {
    "datum": "25. Oktober 1879",
    "jahr": 1879,
    "text": "Fritz Haarmann wird in Hannover geboren."
   },
   {
    "datum": "September 1918",
    "jahr": 1918,
    "text": "Der 17-jährige Friedel Rothe verschwindet; eine anschließende Durchsuchung bei Haarmann bringt keine Spur des Vermissten."
   },
   {
    "datum": "17. Mai 1924",
    "jahr": 1924,
    "text": "Kinder finden am Ufer der Leine einen menschlichen Schädel."
   },
   {
    "datum": "22. Juni 1924",
    "jahr": 1924,
    "text": "Haarmann wird festgenommen und gesteht in den folgenden Verhören."
   },
   {
    "datum": "19. Dezember 1924",
    "jahr": 1924,
    "text": "Das Schwurgericht Hannover verurteilt ihn wegen 24 Morden zum Tode."
   },
   {
    "datum": "15. April 1925",
    "jahr": 1925,
    "text": "Haarmann wird in Hannover hingerichtet."
   },
   {
    "datum": "April 1928",
    "jahr": 1928,
    "text": "Auf dem Friedhof Stöcken wird ein Gedenkstein mit den Namen der Opfer errichtet."
   }
  ],
  "quellen": [
   "Theodor Lessing: Haarmann. Die Geschichte eines Werwolfs, 1925",
   "Christine Pozsár, Michael Farin (Hrsg.): Die Haarmann-Protokolle, 1995",
   "Landeshauptstadt Hannover: 100 Jahre Kriminalfall Haarmann (hannover.de, 2024)",
   "beck-aktuell: Tod eines Serienmörders, 2025"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/fritz-haarmann-0.jpg",
    "breite": 900,
    "hoehe": 602,
    "zeigt": "Haarmann wird gefesselt in den Gerichtssaal geführt, Dezember 1924 (Pressefoto, Bundesarchiv)",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 3.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_102-00881%2C_Hannover%2C_Proze%C3%9F_gegen_Friedrich_Haarmann.jpg"
   },
   {
    "datei": "bilder/dark/fritz-haarmann-1.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Grab- und Gedenkstätte für die Opfer auf dem Friedhof Stöcken in Hannover",
    "urheber": "Tim Schredder",
    "lizenz": "CC BY-SA 2.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hannover_cemetery_stoecken_grave_Fritz_Haarmann_victims.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "sacco-und-vanzetti",
  "titel": "Sacco und Vanzetti",
  "untertitel": "Raubmord, Prozess und Hinrichtung in Massachusetts, 1920–1927",
  "jahr": 1920,
  "zeitraum": "15. April 1920 bis 23. August 1927",
  "ort": "South Braintree und Dedham, Massachusetts",
  "land": "USA",
  "lat": 42.206,
  "lon": -71.005,
  "ortQuelle": "https://en.wikipedia.org/wiki/Braintree,_Massachusetts",
  "kategorie": "Justizirrtum",
  "status": "umstritten",
  "kurz": "Zwei italienische Anarchisten werden für einen Raubmord hingerichtet, nach einem Prozess voller Vorurteile. Ob sie schuldig waren, ist bis heute strittig; dass ihr Verfahren unfair war, hat Massachusetts 1977 erklärt.",
  "tat": "Am 15. April 1920 wurden in South Braintree, Massachusetts, der Zahlmeister Frederick Parmenter und der Wachmann Alessandro Berardelli der Schuhfabrik Slater and Morrill auf offener Straße überfallen und erschossen. Die Täter raubten die Lohngelder, nach den meisten Angaben knapp 16.000 Dollar, und flohen in einem Auto. Am 5. Mai 1920 nahm die Polizei in einer Straßenbahn in Brockton den Schuhmacher Nicola Sacco und den Fischhändler Bartolomeo Vanzetti fest. Beide trugen geladene Waffen bei sich und machten bei der Vernehmung falsche Angaben, was die Anklage später als Schuldbewusstsein wertete. Die Verteidigung erklärte es mit ihrer Angst als Anarchisten vor Ausweisung.",
  "opfer": "Frederick Parmenter war als Zahlmeister der Fabrik mit der Lohnkasse unterwegs, Alessandro Berardelli begleitete ihn als Wachmann; Berardelli war wie die späteren Angeklagten italienischer Einwanderer. Über den Streit um die Angeklagten gerieten die zwei Ermordeten fast völlig aus dem Blick, obwohl sie die eigentlichen Opfer des Verbrechens sind. Opfer wurden in anderem Sinn auch Sacco und Vanzetti, falls sie unschuldig waren, was sich nicht mehr klären lässt.",
  "ermittlung": "Die Festnahme fiel in die Zeit des „Red Scare“, als Behörden in den USA Anarchisten und Kommunisten verfolgten und massenhaft auswiesen. Sacco und Vanzetti gehörten einer anarchistischen Gruppe um Luigi Galleani an. Die Beweise waren umstritten: Augenzeugen widersprachen einander, und die ballistische Untersuchung der tödlichen Kugel war nach damaligem Stand unsicher. Vanzetti wurde vorab in einem eigenen Verfahren wegen eines versuchten Überfalls in Bridgewater zu 12 bis 15 Jahren verurteilt. 1925 gestand der Häftling Celestino Madeiros, an dem Überfall beteiligt gewesen zu sein, und entlastete die beiden; ein neues Verfahren wurde dennoch nicht gewährt. Spätere ballistische Prüfungen 1961 und 1983 ergaben, dass die tödliche Kugel aus Saccos Pistole stammte.",
  "taeter": "Nicola Sacco, geboren 1891, und Bartolomeo Vanzetti, geboren 1888, waren 1908 aus Italien in die USA eingewandert und überzeugte Anarchisten. Ob einer oder beide an dem Überfall beteiligt waren, ist nicht abschließend geklärt. Die ballistischen Nachprüfungen belasten Sacco; manche Historiker halten ihn für schuldig und Vanzetti für unschuldig, andere bezweifeln die Beweiskette, weil die Herkunft der Kugel aus der Asservatenkammer nicht lückenlos belegt ist. Madeiros nannte die sogenannte Morelli-Bande als Täter, verurteilt wurde dafür nie jemand.",
  "prozess": "Der Prozess fand vom 31. Mai bis 14. Juli 1921 in Dedham unter Richter Webster Thayer statt und endete mit Schuldsprüchen wegen Mordes ersten Grades. Thayer wurde vorgeworfen, offen gegen die Angeklagten eingestellt zu sein. Sämtliche Anträge auf ein neues Verfahren lehnte er ab. Im April 1927 verhängte er die Todesstrafe. Gouverneur Alvan T. Fuller ließ den Fall von einem Ausschuss unter Harvard-Präsident A. Lawrence Lowell prüfen, der das Urteil bestätigte. Am 23. August 1927 wurden Sacco und Vanzetti im Staatsgefängnis Charlestown auf dem elektrischen Stuhl hingerichtet.",
  "legende": "Gesichert ist, dass das Verfahren von Vorurteilen gegen Einwanderer und Radikale geprägt war; das hat der Bundesstaat Massachusetts selbst festgestellt. Nicht gesichert ist die verbreitete Annahme, beide seien zweifelsfrei unschuldig gewesen. Häufig missverstanden wird auch die Erklärung von 1977: Gouverneur Michael Dukakis sprach keine Begnadigung aus und erklärte die beiden nicht für unschuldig. Er stellte fest, dass sie keinen fairen Prozess erhalten hatten, und erklärte, jedes Stigma solle für immer von ihren Namen genommen werden.",
  "bedeutung": "Der Fall wurde in den 1920er Jahren zu einer weltweiten Protestbewegung, mit Kundgebungen in vielen Städten Europas, Lateinamerikas und der USA. Der spätere Richter am Supreme Court Felix Frankfurter veröffentlichte 1927 eine scharfe Kritik des Verfahrens. Sacco und Vanzetti stehen bis heute für die Gefahr, dass Herkunft und Gesinnung über ein Urteil entscheiden, und sind ein Hauptargument in der Debatte über die Todesstrafe, weil ein Fehlurteil danach nicht mehr korrigierbar ist.",
  "zeitleiste": [
   {
    "datum": "15. April 1920",
    "jahr": 1920,
    "text": "Frederick Parmenter und Alessandro Berardelli werden in South Braintree bei einem Überfall erschossen."
   },
   {
    "datum": "5. Mai 1920",
    "jahr": 1920,
    "text": "Sacco und Vanzetti werden in einer Straßenbahn in Brockton festgenommen."
   },
   {
    "datum": "14. Juli 1921",
    "jahr": 1921,
    "text": "Die Geschworenen in Dedham sprechen beide des Mordes schuldig."
   },
   {
    "datum": "November 1925",
    "jahr": 1925,
    "text": "Celestino Madeiros gesteht eine Beteiligung und entlastet die Verurteilten."
   },
   {
    "datum": "9. April 1927",
    "jahr": 1927,
    "text": "Richter Webster Thayer verhängt die Todesstrafe."
   },
   {
    "datum": "23. August 1927",
    "jahr": 1927,
    "text": "Hinrichtung im Staatsgefängnis Charlestown trotz weltweiter Proteste."
   },
   {
    "datum": "19. Juli 1977",
    "jahr": 1977,
    "text": "Gouverneur Michael Dukakis erklärt in einer Proklamation den Prozess für unfair und den 23. August 1977 zum Gedenktag."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Sacco-Vanzetti case",
   "Commonwealth of Massachusetts: Sacco & Vanzetti Proclamation, 1977 (mass.gov)",
   "Felix Frankfurter: The Case of Sacco and Vanzetti, 1927",
   "Bruce Watson: Sacco and Vanzetti. The Men, the Murders, and the Judgment of Mankind, 2007"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/sacco-und-vanzetti-0.jpg",
    "breite": 900,
    "hoehe": 506,
    "zeigt": "Bartolomeo Vanzetti (links) und Nicola Sacco, aneinandergefesselt vor dem Gericht in Dedham, 1923",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Sacvan.jpg"
   },
   {
    "datei": "bilder/dark/sacco-und-vanzetti-1.jpg",
    "breite": 796,
    "hoehe": 1100,
    "zeigt": "Richter Webster Thayer, Pressefoto von 1927 (Bibliothèque nationale de France)",
    "urheber": "Agence Rol. Agence photographique (commanditaire)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Juge_Webster_Thayer%2C_affaire_Sacco-Vanzetti_%28Pacific%29_-_btv1b531785651.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hinterkaifeck",
  "titel": "Die Morde von Hinterkaifeck",
  "untertitel": "Sechs Tote auf einem Einödhof in Oberbayern, 1922",
  "jahr": 1922,
  "zeitraum": "Nacht vom 31. März auf den 1. April 1922",
  "ort": "Einödhof Hinterkaifeck bei Gröbern, nahe Schrobenhausen",
  "land": "Deutschland",
  "lat": 48.5939,
  "lon": 11.3219,
  "ortQuelle": "https://de.wikipedia.org/wiki/Hinterkaifeck",
  "kategorie": "Mord",
  "status": "ungeklärt",
  "kurz": "Drei Generationen einer Bauernfamilie und ihre neue Magd werden in einer Nacht getötet, der Täter versorgt danach offenbar noch tagelang das Vieh. Gefasst wurde nie jemand.",
  "tat": "In der Nacht vom 31. März auf den 1. April 1922 wurden auf dem Einödhof Hinterkaifeck bei Gröbern sechs Menschen getötet: das Altbauernpaar Andreas und Cäcilia Gruber, ihre verwitwete Tochter Viktoria Gabriel, deren Kinder Cäcilia und Josef sowie die Magd Maria Baumgartner, die erst am späten Nachmittag des 31. März, wenige Stunden vor der Tat, angekommen war. Vier der Toten wurden im Stadel gefunden, die Magd in ihrer Kammer, der zweijährige Josef im Schlafzimmer. Tatwaffe war nach den Ermittlungen eine Reuthaue, eine Hacke vom Hof. Tage zuvor hatte Andreas Gruber Fußspuren im Schnee bemerkt, die zum Haus führten, aber nicht wieder weg. Erst am 4. April entdeckten Nachbarn die Tat. Vieles spricht dafür, dass sich der Täter noch Tage danach auf dem Hof aufhielt und die Tiere versorgte.",
  "opfer": "Andreas Gruber und seine Frau Cäcilia hatten den Hof an ihre Tochter Viktoria Gabriel übergeben, die ihn bewirtschaftete. Ihr Mann Karl Gabriel war im Dezember 1914 in Frankreich gefallen. Viktorias Tochter Cäcilia war sieben Jahre alt und ging zur Schule; Josef war zwei. Maria Baumgartner, die neue Magd, hatte ihre frühere Stelle wegen körperlicher und geistiger Einschränkungen verloren; ihre Schwester brachte sie am 31. März zum Hof und gehörte zu den Letzten, die die Familie lebend sahen. Zur Beerdigung am 8. April 1922 kamen rund 3.000 Menschen.",
  "ermittlung": "Als die Münchner Kriminalpolizei unter Oberinspektor Georg Reingruber in der Nacht zum 5. April eintraf, hatten Schaulustige und Nachbarn den Tatort längst betreten, Leichen waren bewegt worden. Der Polizeihund fand keine Spur mehr. Wichtige Zeugen wurden zum Teil erst Jahre später vernommen. Weil im Haus viel Geld zurückgeblieben war, zweifelte man bald an einem Raubmord. Die Polizei verdächtigte vor allem Landstreicher und entflohene Häftlinge, setzte die damals wohl höchste Belohnung in Bayerns Geschichte von 100.000 Mark aus und zog sogar Hellseherinnen hinzu, denen man die Schädel der Toten vorlegte. Die Reuthaue wurde erst beim Abbruch des Hofes im Februar 1923 gefunden. Über 100 Verfahren blieben erfolglos.",
  "taeter": "Ein Täter wurde nie ermittelt, alle Genannten sind Verdächtige oder bloße Hypothesen. Die Polizei suchte jahrelang nach Joseph Bärtl, einem aus der Anstalt Günzburg entflohenen Bäcker, fand ihn aber nie. Später richtete sich Verdacht gegen den Nachbarn Lorenz Schlittenbauer, der eine Beziehung zu Viktoria Gabriel gehabt und die Vaterschaft für Josef anerkannt hatte; die damaligen Ermittler sahen bei ihm kein Motiv, er wurde nie angeklagt. Die Vermutung, der gefallene Karl Gabriel sei heimgekehrt, widerspricht der Aussage eines Kameraden, der seinen Tod bezeugte. Eine Fallanalyse eines Münchner Kriminalbeamten aus dem Jahr 2000 schließt Habgier als Motiv aus und sieht einen persönlichen Konflikt mit der Familie im Mittelpunkt.",
  "prozess": "Einen Prozess gab es nie. Die Ermittlungen liefen über Jahrzehnte immer wieder an, so in den 1950er Jahren, und wurden jedes Mal ohne Anklage eingestellt. Viele Beweisstücke sind verloren: Justizakten und die Tatwaffe verbrannten 1944 bei einem Luftangriff im Augsburger Justizgebäude, die Schädel der Opfer gelten seither als verschollen. Erhalten sind vor allem die Akten der Münchner Polizeidirektion im Staatsarchiv München.",
  "legende": "Gesichert sind die Namen der Opfer, Tatzeitraum und Fundort; dass der Täter nach der Tat noch tagelang auf dem Hof blieb, gilt als wahrscheinlich, ist aber nicht bewiesen. Vieles andere ist Überlieferung aus zweiter Hand. Theorien, die einen bestimmten Menschen zum Mörder erklären, beruhen auf Indizien und Spekulation, nicht auf Beweisen. Die Geschichte vom heimgekehrten Karl Gabriel, den ein Kriegsheimkehrer 1951 als russischen Offizier erkannt haben wollte, nahm dieser selbst als Lüge zurück. Romane, Filme und Podcasts haben den Fall bis zur Unkenntlichkeit ausgeschmückt; für die Familie Gruber und Maria Baumgartner gibt es bis heute keine Antwort.",
  "bedeutung": "Hinterkaifeck gilt als der bekannteste ungeklärte Mordfall Deutschlands und ein Lehrstück über Ermittlungsfehler: ein unberührter Tatort war von Anfang an nicht zu sichern, Zeugen wurden spät gehört, Spuren gingen verloren. Zugleich zeigt der Fall den Stand der Kriminalistik um 1922, bis hin zur Hilfe durch Hellseherinnen. Spätere Fallanalysen nutzen die erhaltenen Akten, um zu zeigen, was moderne Methoden aus alten Unterlagen noch gewinnen können und wo sie an Grenzen stoßen.",
  "zeitleiste": [
   {
    "datum": "12. Dezember 1914",
    "jahr": 1914,
    "text": "Karl Gabriel, Viktorias Ehemann, fällt in Nordfrankreich."
   },
   {
    "datum": "31. März 1922",
    "jahr": 1922,
    "text": "Die neue Magd Maria Baumgartner kommt am Abend auf den Hof; in der Nacht werden alle sechs Bewohner getötet."
   },
   {
    "datum": "4. April 1922",
    "jahr": 1922,
    "text": "Nachbarn entdecken die Toten; die Münchner Kriminalpolizei wird verständigt."
   },
   {
    "datum": "7. April 1922",
    "jahr": 1922,
    "text": "Das Innenministerium setzt eine Belohnung von 100.000 Mark aus."
   },
   {
    "datum": "Februar 1923",
    "jahr": 1923,
    "text": "Beim Abbruch des Hofes wird die mutmaßliche Tatwaffe gefunden."
   },
   {
    "datum": "25. Februar 1944",
    "jahr": 1944,
    "text": "Beim Luftangriff auf Augsburg verbrennen Akten und Tatwaffe im Justizgebäude."
   },
   {
    "datum": "21. Juli 2000",
    "jahr": 2000,
    "text": "Eine Fallanalyse der Münchner Polizei bewertet die Tat neu, ohne einen Täter zu benennen."
   }
  ],
  "quellen": [
   "Generaldirektion der Staatlichen Archive Bayerns / Elena Hiemer: Der sechsfache Mord in Hinterkaifeck. Ausstellungskatalog, Bayerisches Hauptstaatsarchiv, 2026",
   "Peter Leuschner: Der Mordfall Hinterkaifeck. Spuren eines mysteriösen Verbrechens, 2. Aufl. 1997",
   "Staatsarchiv München, Polizeidirektion München 8091b"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hinterkaifeck-0.jpg",
    "breite": 900,
    "hoehe": 702,
    "zeigt": "Der Einödhof Hinterkaifeck von Süden, Aufnahme von 1922 oder früher",
    "urheber": "Andreas Biegleder",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hinterkaifeck-Hof.jpg"
   },
   {
    "datei": "bilder/dark/hinterkaifeck-1.jpg",
    "breite": 718,
    "hoehe": 1100,
    "zeigt": "Fahndungsplakat mit 100.000 Mark Belohnung, gezeigt in einer Ausstellung des Bayerischen Hauptstaatsarchivs",
    "urheber": "Burkhard Mücke",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Plakat_mit_Belohnung_von_100_000_Mark.jpg"
   },
   {
    "datei": "bilder/dark/hinterkaifeck-2.jpg",
    "breite": 529,
    "hoehe": 1100,
    "zeigt": "Gedenkstein für die Opfer auf dem Friedhof in Waidhofen",
    "urheber": "Benutzer:Tegernbach",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hinterkaifeck.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "leopold-und-loeb",
  "titel": "Leopold und Loeb",
  "untertitel": "Der Mord an Bobby Franks und Darrows Plädoyer, Chicago 1924",
  "jahr": 1924,
  "zeitraum": "Mai bis September 1924",
  "ort": "Kenwood, Chicago",
  "land": "USA",
  "lat": 41.81,
  "lon": -87.597,
  "ortQuelle": "https://en.wikipedia.org/wiki/Kenwood,_Chicago",
  "kategorie": "Mord",
  "status": "aufgeklärt",
  "kurz": "Zwei reiche Studenten töten 1924 einen Vierzehnjährigen, um ein perfektes Verbrechen zu beweisen. Clarence Darrows Plädoyer gegen die Todesstrafe wird zu einer der bekanntesten Reden der US-Justizgeschichte.",
  "tat": "Am 21. Mai 1924 lockten Nathan Leopold, 19, und Richard Loeb, 18, beide aus wohlhabenden Familien im Chicagoer Viertel Kenwood, den vierzehnjährigen Robert Franks auf dem Heimweg von der Schule in einen gemieteten Wagen und töteten ihn. Die Leiche versteckten sie in einem Durchlass an einem Bahndamm nahe dem Wolf Lake im Südosten der Stadt. Noch am selben Abend riefen sie bei der Familie an und schickten einen mit Schreibmaschine geschriebenen Erpresserbrief, unterzeichnet mit „George Johnson“, der 10.000 Dollar forderte. Bevor das Geld übergeben werden konnte, wurde der Junge am 22. Mai gefunden. Ein Motiv im üblichen Sinn gab es nicht: Die beiden wollten nach eigener Aussage beweisen, dass sie ein Verbrechen begehen konnten, ohne gefasst zu werden.",
  "opfer": "Robert Emanuel Franks, genannt Bobby, war vierzehn Jahre alt und besuchte die private Harvard School for Boys in Kenwood. Er war der Sohn des Geschäftsmanns Jacob Franks und seiner Frau Flora und lebte nur wenige Häuser von der Familie Loeb entfernt, mit der er entfernt verwandt war. Nach den Aussagen der Täter wurde er ausgewählt, weil er zufällig vorbeikam und sie kannte; er war kein geplantes Ziel. Sein Grab liegt auf dem Rosehill Cemetery in Chicago.",
  "ermittlung": "Neben der Leiche lag eine Brille. Ihr Scharnier war ungewöhnlich, und die Polizei fand heraus, dass der Chicagoer Optiker Almer Coe nur drei Brillen dieser Art verkauft hatte, eine davon an Nathan Leopold. Leopold erklärte, er habe sie beim Beobachten von Vögeln in der Gegend verloren; er war ein in Fachkreisen bekannter Hobby-Ornithologe. Das Alibi der beiden, sie seien an jenem Abend mit zwei jungen Frauen unterwegs gewesen, brach in getrennten Verhören zusammen. Auch die Aussage des Chauffeurs der Familie Leopold, der Wagen habe den ganzen Tag in der Garage gestanden, widersprach ihnen. Am 31. Mai gestand zuerst Loeb, dann Leopold. Die Schreibmaschine des Erpresserbriefs wurde später aus einer Lagune im Jackson Park geborgen.",
  "taeter": "Nathan Leopold Jr. und Richard Loeb waren Söhne vermögender Unternehmerfamilien und galten als hochbegabt: Leopold hatte die Universität von Chicago abgeschlossen und wollte Jura studieren, Loeb war mit 17 einer der jüngsten Absolventen der University of Michigan. Die beiden verband eine enge, von Abhängigkeit geprägte Freundschaft. Leopold berief sich auf eine eigenwillige Lesart von Nietzsches Übermenschen, der über der Moral stehe. Wer von beiden die tödliche Handlung ausführte, ist bis heute ungeklärt; jeder beschuldigte den anderen. Die Tat selbst gestanden beide und wurden dafür verurteilt.",
  "prozess": "Die Familien engagierten Clarence Darrow, den bekanntesten Strafverteidiger des Landes und entschiedenen Gegner der Todesstrafe. Um eine Jury zu vermeiden, ließ er seine Mandanten am 21. Juli 1924 auf schuldig plädieren, sodass allein Richter John R. Caverly über das Strafmaß entschied. Staatsanwalt Robert Crowe forderte den Tod. Darrow ließ Psychiater aussagen und hielt im August ein Schlussplädoyer von rund zwölf Stunden über drei Tage. Am 10. September verurteilte Caverly beide zu lebenslanger Haft für Mord und 99 Jahren für Entführung. Er begründete das ausdrücklich mit ihrem jugendlichen Alter, nicht mit den Gutachten.",
  "legende": "Häufig heißt es, Darrow habe den Richter mit psychiatrischen Gutachten überzeugt. Caverly selbst stellte in seiner Urteilsbegründung fest, dass er sich auf das Alter der Angeklagten stützte; die Gutachten hätten ihn nicht entscheidend beeinflusst. Die Presse nannte den Fall „Verbrechen des Jahrhunderts“ und spekulierte ausgiebig über eine sexuelle Beziehung der beiden; was davon zutrifft, ist aus den Quellen nur teilweise belegt und wurde damals vor allem zur Skandalisierung benutzt. Patrick Hamiltons Theaterstück „Rope“ von 1929, später von Alfred Hitchcock verfilmt, gilt als von dem Fall angeregt; ein Tatsachenbericht ist es nicht.",
  "bedeutung": "Darrows Plädoyer, bald als Buch gedruckt, wurde zu einem Grundtext der amerikanischen Bewegung gegen die Todesstrafe: Er argumentierte, dass Strafe nicht Rache sein dürfe und Herkunft und Entwicklung eines Täters zu verstehen seien. Der Fall rückte erstmals in großem Stil Psychiater vor ein Strafgericht und löste die bis heute geführte Debatte aus, was solche Gutachten in einem Prozess leisten können. Loeb wurde 1936 im Gefängnis von einem Mithäftling getötet. Leopold kam 1958 auf Bewährung frei, arbeitete in Puerto Rico in einem Krankenhaus und starb 1971.",
  "zeitleiste": [
   {
    "datum": "21. Mai 1924",
    "jahr": 1924,
    "text": "Leopold und Loeb entführen und töten Robert Franks; die Familie erhält einen Erpresserbrief."
   },
   {
    "datum": "22. Mai 1924",
    "jahr": 1924,
    "text": "Die Leiche wird nahe dem Wolf Lake gefunden, daneben eine Brille."
   },
   {
    "datum": "31. Mai 1924",
    "jahr": 1924,
    "text": "Erst Loeb, dann Leopold gestehen die Tat."
   },
   {
    "datum": "21. Juli 1924",
    "jahr": 1924,
    "text": "Auf Darrows Rat bekennen sich beide schuldig; ein Richter allein entscheidet über die Strafe."
   },
   {
    "datum": "22. bis 25. August 1924",
    "jahr": 1924,
    "text": "Clarence Darrow hält sein Schlussplädoyer gegen die Todesstrafe."
   },
   {
    "datum": "10. September 1924",
    "jahr": 1924,
    "text": "Richter Caverly verhängt lebenslange Haft und 99 Jahre, mit Verweis auf das Alter der Täter."
   },
   {
    "datum": "28. Januar 1936",
    "jahr": 1936,
    "text": "Richard Loeb wird im Gefängnis Stateville von einem Mithäftling getötet."
   },
   {
    "datum": "März 1958",
    "jahr": 1958,
    "text": "Nathan Leopold wird auf Bewährung entlassen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Leopold and Loeb",
   "The Plea of Clarence Darrow in Defense of Richard Loeb and Nathan Leopold, Jr., Chicago 1924",
   "Simon Baatz: For the Thrill of It. Leopold, Loeb, and the Murder That Shocked Chicago, 2008",
   "Hal Higdon: Leopold and Loeb. The Crime of the Century, 1975"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/leopold-und-loeb-0.jpg",
    "breite": 900,
    "hoehe": 727,
    "zeigt": "Der mit Schreibmaschine geschriebene Erpresserbrief an die Familie Franks, unterzeichnet „George Johnson“, 1924 (Chicago Daily News / Chicago Historical Society)",
    "urheber": "Nathan Freudenthal Leopold, Jr.and Richard A. Loeb",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Leopold_and_Loeb%27s_ransom_note_for_Bobby_Franks.jpg"
   },
   {
    "datei": "bilder/dark/leopold-und-loeb-1.jpg",
    "breite": 900,
    "hoehe": 646,
    "zeigt": "Richard Loeb (links) und Nathan Leopold (rechts), Pressefoto vom August 1924; die Originalbeschriftung vertauscht die Namen",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 3.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_102-00652%2C_Richard_Loeb_und_Nathan_Leopold.jpg"
   },
   {
    "datei": "bilder/dark/leopold-und-loeb-2.jpg",
    "breite": 900,
    "hoehe": 1091,
    "zeigt": "Der Verteidiger Clarence Darrow, Porträt von 1922 (Library of Congress)",
    "urheber": "Herzog",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Clarence_Darrow.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "peter-kuerten",
  "titel": "Peter Kürten",
  "untertitel": "Die Düsseldorfer Mordserie 1929/30",
  "jahr": 1929,
  "zeitraum": "Februar 1929 bis Mai 1930",
  "ort": "Düsseldorf",
  "land": "Deutschland",
  "lat": 51.2333,
  "lon": 6.7833,
  "ortQuelle": "https://en.wikipedia.org/wiki/D%C3%BCsseldorf",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Eine Mordserie hielt 1929 eine Großstadt monatelang in Angst – und zeigte, wie wenig die Polizei der Weimarer Zeit mit Tausenden Hinweisen und einem Täter ohne Muster anfangen konnte.",
  "tat": "Zwischen Februar und November 1929 wurden in Düsseldorf und Umgebung Frauen, Mädchen und ein Mann überfallen, mehrere von ihnen getötet. Der Täter wechselte die Waffen – Schere, Messer, Hammer – und griff Kinder ebenso an wie Erwachsene, weshalb die Polizei lange nicht sicher war, ob es sich um einen einzigen Mann handelte. Im August 1929 starben in einer einzigen Nacht zwei Mädchen, im November ein fünfjähriges Kind. Der Täter schrieb Briefe an Polizei und Presse und gab darin den Fundort eines Opfers an. Die Stadt geriet in einen Ausnahmezustand: Eltern ließen Kinder nicht mehr allein vor die Tür, Zeitungen berichteten täglich. Erst im Mai 1930 wurde Peter Kürten gefasst; er gestand auch einen Mord an einem Kind in Köln-Mülheim im Jahr 1913.",
  "opfer": "Unter den Getöteten waren Rosa Ohliger, je nach Quelle acht oder neun Jahre alt,, Rudolf Scheer, Maria Hahn, die Schülerin Luise Lenzen und die fünfjährige Gertrud Hamacher, Ida Reuter, Elisabeth Dörrier und die fünfjährige Gertrud Albermann. Hinzu kam die neunjährige Christine Klein, die 1913 in Köln-Mülheim getötet worden war. Mehrere der erwachsenen Opfer waren junge Frauen, die als Hausangestellte arbeiteten und abends allein unterwegs waren. Mehrere Überlebende sagten später vor Gericht aus.",
  "ermittlung": "Die Düsseldorfer Kriminalpolizei bildete eine Sonderkommission; aus Berlin kam Ernst Gennat, der Leiter der dortigen Mordinspektion, zur Unterstützung. Gennat ließ die Taten systematisch vergleichen und veröffentlichte 1930 eine Analyse der Serie, die heute als frühes Beispiel für Fallanalyse gilt. Bei der Polizei gingen rund 12.000 Hinweise ein, darunter nach späteren Auswertungen auch einige, die auf Kürten zeigten, ohne dass ihnen nachgegangen wurde. Ein geistig kranker Mann, Johann Stausberg, gestand mehrere der Taten und band damit Kräfte. Den Durchbruch brachte kein Ermittlungserfolg, sondern ein fehlgeleiteter Brief: Die Überlebende Maria Budlick schilderte darin einen Überfall, der Brief erreichte die Polizei, und Budlick führte die Beamten zur Wohnung des Täters.",
  "taeter": "Peter Kürten, geboren 1883 in Mülheim am Rhein, wuchs nach eigenen Angaben und nach Aussagen der Familie in großer Armut und mit einem gewalttätigen, trinkenden Vater auf. Er war vielfach vorbestraft und hatte insgesamt viele Jahre in Gefängnissen verbracht. In Düsseldorf lebte er unauffällig, verheiratet und als Arbeiter und galt bei Nachbarn als gepflegt und höflich. Nach der Begegnung mit Maria Budlick erkannte er, dass er entdeckt werden würde, und gestand seiner Frau die Taten. Sie meldete sich bei der Polizei. Am 24. Mai 1930 wurde er festgenommen und legte ein umfassendes Geständnis ab, das er zeitweise widerrief und später erneuerte.",
  "prozess": "Der Prozess vor dem Schwurgericht Düsseldorf begann am 13. April 1931 und dauerte nur gut eine Woche. Angeklagt war Kürten wegen neun Morden und sieben Mordversuchen. Psychiatrische Gutachter hielten ihn für voll schuldfähig. Am 22. April 1931 wurde er neunmal zum Tode verurteilt. Ein Gnadengesuch lehnte die preußische Regierung ab. Am 2. Juli 1931 wurde Peter Kürten im Kölner Gefängnis Klingelpütz mit dem Fallbeil hingerichtet. Die Debatte über die Todesstrafe, die im Reichstag damals ohnehin geführt wurde, erhielt durch den Fall neuen Stoff.",
  "legende": "Der Name „Vampir von Düsseldorf“ war eine Erfindung der zeitgenössischen Presse; er sagt mehr über die Sensationsberichterstattung von 1929 als über den Täter. Oft wird behauptet, Fritz Langs Film „M – Eine Stadt sucht einen Mörder“ (1931) erzähle Kürtens Geschichte. Gesichert ist nur, dass der Film unter dem Eindruck solcher Fälle entstand; Lang selbst hat eine direkte Vorlage bestritten. Kürtens ausführliche Selbstschilderungen gegenüber dem Gerichtsmediziner Karl Berg sind eine wichtige, aber problematische Quelle, weil sie von einem Täter stammen, der sich gern darstellte. Dass er schon als Kind gemordet habe, beruht allein auf seinen eigenen Angaben.",
  "bedeutung": "Der Fall gilt als Wegmarke der deutschen Kriminalistik. Gennats Analyse der Tatserie, die systematische Auswertung von Hinweisen und das Zusammenspiel lokaler Polizei mit Berliner Spezialisten wurden zum Vorbild späterer Mordkommissionen. Karl Bergs Studie „Der Sadist“ prägte die gerichtsmedizinische und psychiatrische Forschung. Zugleich zeigte der Fall die Grenzen der Methoden: Die Flut ungeprüfter Hinweise und ein falsches Geständnis hielten die Ermittler monatelang auf.",
  "zeitleiste": [
   {
    "datum": "25. Mai 1913",
    "jahr": 1913,
    "text": "In Köln-Mülheim wird die neunjährige Christine Klein getötet; Kürten gesteht die Tat erst 1930."
   },
   {
    "datum": "9. Februar 1929",
    "jahr": 1929,
    "text": "In Düsseldorf wird die Schülerin Rosa Ohliger getötet – Beginn der Mordserie."
   },
   {
    "datum": "24. August 1929",
    "jahr": 1929,
    "text": "In einer Nacht werden in Düsseldorf zwei Mädchen getötet."
   },
   {
    "datum": "7. November 1929",
    "jahr": 1929,
    "text": "Die fünfjährige Gertrud Albermann wird getötet; der Täter schreibt danach an die Presse."
   },
   {
    "datum": "24. Mai 1930",
    "jahr": 1930,
    "text": "Nach dem Hinweis von Maria Budlick und der Aussage seiner Frau wird Peter Kürten festgenommen."
   },
   {
    "datum": "13. bis 22. April 1931",
    "jahr": 1931,
    "text": "Prozess vor dem Schwurgericht Düsseldorf, Urteil: neunmal Todesstrafe."
   },
   {
    "datum": "2. Juli 1931",
    "jahr": 1931,
    "text": "Hinrichtung im Kölner Gefängnis Klingelpütz."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Peter Kürten",
   "Karl Berg: Der Sadist. Gerichtsärztliches und Kriminalpsychologisches zu den Taten des Düsseldorfer Mörders Peter Kürten, 1931",
   "Ernst Gennat: Die Düsseldorfer Sexualverbrechen, in: Kriminalistische Monatshefte, 1930",
   "Regina Stürickow: Der Kommissar vom Alexanderplatz, 1998"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/peter-kuerten-0.jpg",
    "breite": 714,
    "hoehe": 1100,
    "zeigt": "Polizeifoto von Peter Kürten, frontal",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mugshot-K%C3%BCrten_%28front%29.jpg"
   },
   {
    "datei": "bilder/dark/peter-kuerten-1.jpg",
    "breite": 900,
    "hoehe": 637,
    "zeigt": "Pressefoto: Peter Kürten bei seinem Prozess in Düsseldorf, April 1931",
    "urheber": "Press photo, German Reich ('Weimar Republic'), 1931",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Peter_K%C3%BCrten_Trial_April_1931.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "valentinstag-massaker-capone",
  "titel": "Das Valentinstag-Massaker und Al Capone",
  "untertitel": "Bandenkrieg in Chicago 1929 und ein Steuerprozess 1931",
  "jahr": 1929,
  "zeitraum": "14. Februar 1929 bis Oktober 1931",
  "ort": "2122 North Clark Street, Chicago",
  "land": "USA",
  "lat": 41.9208,
  "lon": -87.6379,
  "ortQuelle": "https://en.wikipedia.org/wiki/Saint_Valentine%27s_Day_Massacre",
  "kategorie": "Mord",
  "status": "ungeklärt",
  "kurz": "Sieben Männer wurden in einer Garage erschossen, verurteilt wurde dafür niemand. Den mächtigsten Gangster Chicagos brachte am Ende nicht ein Mord, sondern seine Steuererklärung ins Gefängnis.",
  "tat": "Am Vormittag des 14. Februar 1929 fuhren Männer, von denen mindestens zwei Polizeiuniformen trugen, vor einer Lagergarage an der North Clark Street in Chicago vor. Drinnen warteten sieben Männer, die meisten aus dem Umfeld der Bande von George „Bugs“ Moran, der im Alkoholschmuggel mit Al Capone konkurrierte. Die Eindringlinge gaben sich als Polizei aus, ließen die Männer sich an einer Wand aufstellen und erschossen sie mit Maschinenpistolen und Schrotflinten. Dann führten die vermeintlichen Polizisten zwei der Täter wie Festgenommene hinaus und fuhren davon. Moran selbst war nicht in der Garage. Die Tat war der Höhepunkt der Bandenkriege der Prohibitionszeit und wurde allgemein Capones Organisation zugeschrieben.",
  "opfer": "Getötet wurden die Brüder Frank und Peter Gusenberg, Albert Kachellek, der auch unter dem Namen James Clark auftrat, Adam Heyer und Albert Weinshank, die alle zu Morans Umfeld gehörten. Dazu kamen John May, ein Automechaniker, der für die Bande Fahrzeuge reparierte, und Reinhardt Schwimmer, ein Optiker, der die Nähe der Gangster suchte. Frank Gusenberg lebte noch, als die echte Polizei eintraf, und starb wenige Stunden später im Krankenhaus. Auf die Frage, wer geschossen habe, gab er nach Polizeiberichten keine Namen preis.",
  "ermittlung": "Polizei und eine Leichenschaukommission des Cook County ermittelten monatelang, ohne Anklage erheben zu können. Neu war die Rolle der Waffentechnik: Der Ballistiker Calvin Goddard verglich Geschosse und Hülsen vom Tatort mit Waffen der Chicagoer Polizei und konnte so ausschließen, dass echte Beamte geschossen hatten. Im Dezember 1929 fand die Polizei in Michigan im Haus des Berufsverbrechers Fred Burke zwei Thompson-Maschinenpistolen; Goddard ordnete sie den Schüssen in der Garage zu. Wegen des Massakers wurde Burke nie angeklagt, er wurde in Michigan wegen der Tötung eines Polizisten verurteilt. Wer die Tat befahl und wer genau schoss, ist bis heute nicht gerichtlich geklärt.",
  "taeter": "Al Capone, 1899 in Brooklyn geboren, war seit Mitte der 1920er-Jahre der führende Kopf des organisierten Verbrechens in Chicago: Alkoholschmuggel, Glücksspiel, Bordelle, Schutzgelderpressung, Bestechung. Am Tattag hielt er sich in Florida auf; das FBI hält fest, dass das Massaker seiner Organisation zugeschrieben wurde, nicht ihm persönlich nachgewiesen. Als Organisator gilt in der Literatur häufig sein Vertrauter Jack McGurn, als Schütze unter anderem Fred Burke. Beides sind Verdachtsmomente, keine Urteile. Andere Theorien sehen auswärtige Banden als Täter.",
  "prozess": "Für das Massaker stand nie jemand vor Gericht. Bundesbehörden setzten an Capones Einkünften an: Ermittler des Finanzministeriums wiesen nach, dass er große Summen ausgab, ohne Einkommen zu versteuern. Am 17. Oktober 1931 sprach ihn eine Jury in Chicago in drei Fällen der Steuerhinterziehung und zwei Fällen unterlassener Steuererklärung schuldig. Richter James Wilkerson verurteilte ihn zu elf Jahren Haft; mit Geldstrafe und Kosten kamen nach Angaben der National Archives 80.000 Dollar hinzu. Capone saß in Atlanta und auf Alcatraz, kam im November 1939 schwer krank frei und starb im Januar 1947.",
  "legende": "Das populäre Bild, Eliot Ness und seine „Unbestechlichen“ hätten Capone zu Fall gebracht, geht vor allem auf Ness’ eigene Erinnerungen und spätere Fernsehserien und Filme zurück. Ness’ Einheit störte Brauereien und Schmuggel; die Verurteilung beruhte jedoch auf der Arbeit der Steuerfahnder um Frank J. Wilson. Gesichert ist, dass Capone wegen Steuerdelikten verurteilt wurde, nicht wegen Gewalttaten. Nicht gesichert ist, dass er das Massaker selbst angeordnet hat – das ist bis heute eine plausible Annahme, aber kein Beweis.",
  "bedeutung": "Das Massaker kippte die öffentliche Stimmung: Gangster galten nicht länger als bloß schillernde Figuren, Chicagoer Bürger und die Presse verlangten Konsequenzen. Calvin Goddards Untersuchungen trugen dazu bei, dass kurz darauf an der Northwestern University in Chicago ein Labor für wissenschaftliche Kriminaltechnik entstand, eines der ersten in den USA. Der Steuerprozess gegen Capone wurde zum Muster: Wo Gewalttaten nicht nachweisbar sind, verfolgen Behörden seither oft Finanzdelikte.",
  "zeitleiste": [
   {
    "datum": "14. Februar 1929",
    "jahr": 1929,
    "text": "In einer Garage an der North Clark Street werden sieben Männer erschossen."
   },
   {
    "datum": "Dezember 1929",
    "jahr": 1929,
    "text": "In Michigan werden bei Fred Burke zwei Maschinenpistolen gefunden, die Goddard der Tat zuordnet."
   },
   {
    "datum": "1931",
    "jahr": 1931,
    "text": "Eine Grand Jury erhebt Anklage gegen Capone wegen Steuerhinterziehung."
   },
   {
    "datum": "17. Oktober 1931",
    "jahr": 1931,
    "text": "Die Jury spricht Capone in fünf Anklagepunkten schuldig."
   },
   {
    "datum": "24. Oktober 1931",
    "jahr": 1931,
    "text": "Richter Wilkerson verhängt elf Jahre Haft."
   },
   {
    "datum": "16. November 1939",
    "jahr": 1939,
    "text": "Capone wird schwer krank aus der Haft entlassen."
   },
   {
    "datum": "25. Januar 1947",
    "jahr": 1947,
    "text": "Al Capone stirbt in Florida."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Saint Valentine’s Day Massacre",
   "FBI: Famous Cases – Al Capone",
   "National Archives (USA): American Originals – Al Capone Verdict",
   "Berrien County (Michigan): St. Valentine’s Day Massacre Connection"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/valentinstag-massaker-capone-0.jpg",
    "breite": 900,
    "hoehe": 522,
    "zeigt": "Polizeifoto von Al Capone, 1931",
    "urheber": "United States Bureau of Prisons",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:AlCaponemugshotCPD.jpg"
   },
   {
    "datei": "bilder/dark/valentinstag-massaker-capone-1.jpg",
    "breite": 900,
    "hoehe": 715,
    "zeigt": "Schlagzeile der New York Times vom 15. Februar 1929 zum Massaker",
    "urheber": "The New York Times newspaper (1929)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:19290215_Valentine%27s_Day_Massacre_-_Seven_Chicago_Gangsters_Slain_-_NY_Times.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "lindbergh-entfuehrung",
  "titel": "Die Lindbergh-Entführung",
  "untertitel": "Hopewell 1932 und der Prozess gegen Bruno Richard Hauptmann",
  "jahr": 1932,
  "zeitraum": "März 1932 bis April 1936",
  "ort": "Hopewell, New Jersey",
  "land": "USA",
  "lat": 40.424,
  "lon": -74.7677,
  "ortQuelle": "https://en.wikipedia.org/wiki/Lindbergh_kidnapping",
  "kategorie": "Entführung",
  "status": "aufgeklärt",
  "kurz": "Die Entführung des Kindes des berühmtesten Fliegers der Welt veränderte das amerikanische Strafrecht – und der Prozess gegen den Verurteilten wird bis heute angezweifelt.",
  "tat": "Am Abend des 1. März 1932 verschwand der 20 Monate alte Charles Augustus Lindbergh Jr. aus seinem Kinderzimmer im neuen Haus der Familie bei Hopewell in New Jersey. Unter dem Fenster lag eine selbstgebaute Leiter, auf dem Fensterbrett ein Erpresserbrief, der 50.000 Dollar forderte. Es folgten Wochen mit weiteren Briefen und Verhandlungen über einen Mittelsmann. Am 2. April 1932 wurde das Lösegeld auf einem Friedhof in der Bronx übergeben, doch die versprochene Auskunft über den Aufenthalt des Kindes war falsch. Am 12. Mai 1932 wurde das Kind wenige Kilometer vom Elternhaus entfernt tot aufgefunden. Nach Feststellung des Gerichtsmediziners war es bereits kurz nach der Entführung gestorben.",
  "opfer": "Charles Augustus Lindbergh Jr. wurde am 22. Juni 1930 geboren, als erstes Kind von Charles Lindbergh, der 1927 als Erster allein und ohne Zwischenlandung über den Atlantik geflogen war, und der Schriftstellerin Anne Morrow Lindbergh. Die Familie war eine der bekanntesten der Welt, das Kind wurde in der Presse schon vor der Tat begleitet. Unter dem Verdacht der Ermittler litten auch Hausangestellte: Violet Sharp, die im Haushalt der Familie Morrow arbeitete, nahm sich während der Vernehmungen das Leben; mit der Tat hatte sie nach allem, was bekannt ist, nichts zu tun.",
  "ermittlung": "Die Ermittlungen führte die Staatspolizei von New Jersey, doch Charles Lindbergh bestimmte vieles selbst, verhandelte mit angeblichen Kontaktleuten und ließ Betrüger gewähren, die sich als Vermittler ausgaben. Als Mittelsmann trat der pensionierte Schulleiter John F. Condon auf, der dem Erpresser zweimal begegnete. Wichtig wurde eine Vorsorge der Ermittler: Das Lösegeld bestand großteils aus Goldzertifikaten, deren Nummern notiert waren. Nachdem diese Scheine 1933 aus dem Verkehr gezogen worden waren, fielen sie auf. Im September 1934 notierte ein Tankwart das Kennzeichen eines Kunden, der damit bezahlte. Es führte zu Bruno Richard Hauptmann in der Bronx.",
  "taeter": "Bruno Richard Hauptmann, 1899 in Sachsen geboren, war in Deutschland vorbestraft, 1923 illegal in die USA eingereist und arbeitete als Zimmermann in New York. Bei seiner Festnahme am 19. September 1934 fanden Ermittler in seiner Garage mehr als 13.000 Dollar aus dem Lösegeld. Hauptmann erklärte, das Geld habe ihm ein inzwischen in Deutschland verstorbener Geschäftspartner, Isidor Fisch, zur Aufbewahrung gegeben. Belastet wurde er durch Schriftgutachten, die Aussage Condons und den Holzgutachter Arthur Koehler, der ein Brett der Leiter dem Dachboden von Hauptmanns Wohnung zuordnete. Hauptmann beteuerte bis zuletzt seine Unschuld.",
  "prozess": "Der Prozess fand vom 2. Januar bis 13. Februar 1935 im Gerichtsgebäude von Flemington statt und wurde als „Prozess des Jahrhunderts“ vermarktet; Hunderte Reporter belagerten den kleinen Ort. Die Anklage vertrat Generalstaatsanwalt David Wilentz. Die Geschworenen sprachen Hauptmann des Mordes schuldig, das Gericht verhängte die Todesstrafe. Berufungen blieben erfolglos; der Gouverneur von New Jersey, Harold Hoffman, äußerte öffentlich Zweifel und gewährte einen Aufschub. Am 3. April 1936 wurde Hauptmann im Staatsgefängnis von Trenton auf dem elektrischen Stuhl hingerichtet.",
  "legende": "Gesichert sind der Besitz eines großen Teils des Lösegelds und die Indizien gegen Hauptmann; deshalb halten viele Historiker, etwa Jim Fisher, ihn für schuldig. Zugleich gibt es bis heute geäußerte Zweifel: Kritiker wie der Journalist Ludovic Kennedy argumentierten, Zeugen seien beeinflusst, Gutachten überbewertet und entlastende Hinweise unterdrückt worden; seine Witwe Anna Hauptmann kämpfte bis zu ihrem Tod 1994 vergeblich um eine Rehabilitierung. Offen ist auch, ob Hauptmann allein handelte. Diese Einwände sind Zweifel, keine Beweise seiner Unschuld.",
  "bedeutung": "Im Juni 1932 verabschiedete der Kongress den Federal Kidnapping Act, bald „Lindbergh-Gesetz“ genannt: Wer Entführte über Staatsgrenzen bringt, begeht seither ein Bundesverbrechen, für das das spätere FBI zuständig ist. Die Verfolgung der Lösegeldscheine gilt als frühes Beispiel für Finanzermittlungen. Das Medienspektakel in Flemington führte dazu, dass die amerikanische Anwaltsvereinigung 1937 empfahl, Fotografen und Rundfunk aus Gerichtssälen fernzuhalten.",
  "zeitleiste": [
   {
    "datum": "1. März 1932",
    "jahr": 1932,
    "text": "Das Kind wird abends aus dem Haus der Lindberghs bei Hopewell entführt."
   },
   {
    "datum": "2. April 1932",
    "jahr": 1932,
    "text": "John F. Condon übergibt in der Bronx 50.000 Dollar Lösegeld."
   },
   {
    "datum": "12. Mai 1932",
    "jahr": 1932,
    "text": "Das Kind wird unweit des Elternhauses tot aufgefunden."
   },
   {
    "datum": "22. Juni 1932",
    "jahr": 1932,
    "text": "Der Federal Kidnapping Act tritt in Kraft."
   },
   {
    "datum": "19. September 1934",
    "jahr": 1934,
    "text": "Bruno Richard Hauptmann wird in der Bronx festgenommen."
   },
   {
    "datum": "2. Januar bis 13. Februar 1935",
    "jahr": 1935,
    "text": "Prozess in Flemington, Schuldspruch und Todesurteil."
   },
   {
    "datum": "3. April 1936",
    "jahr": 1936,
    "text": "Hauptmann wird in Trenton hingerichtet."
   }
  ],
  "quellen": [
   "FBI: Famous Cases – The Lindbergh Kidnapping",
   "Jim Fisher: The Lindbergh Case, 1987",
   "Ludovic Kennedy: The Airman and the Carpenter, 1985",
   "Lloyd C. Gardner: The Case That Never Dies, 2004"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/lindbergh-entfuehrung-0.jpg",
    "breite": 381,
    "hoehe": 640,
    "zeigt": "Suchplakat nach Charles Lindbergh Jr., 1932",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Lindbergh_baby_poster.jpg"
   },
   {
    "datei": "bilder/dark/lindbergh-entfuehrung-1.jpg",
    "breite": 722,
    "hoehe": 1100,
    "zeigt": "Das Gerichtsgebäude in Flemington, Schauplatz des Prozesses 1935 (Aufnahme 1970)",
    "urheber": "JERRYE & ROY KLOTZ MD",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hunterdon_County_Courthouse%2C_Flemington%2C_NJ_-_view_1.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "bonnie-und-clyde",
  "titel": "Bonnie und Clyde",
  "untertitel": "Raubzüge und Polizistenmorde im Süden der USA 1932–1934",
  "jahr": 1932,
  "zeitraum": "1932 bis 23. Mai 1934",
  "ort": "Texas, Oklahoma, Missouri, Louisiana",
  "land": "USA",
  "lat": 32.4412,
  "lon": -93.0926,
  "ortQuelle": "https://en.wikipedia.org/wiki/Bonnie_and_Clyde",
  "kategorie": "Raub",
  "status": "aufgeklärt",
  "kurz": "Kein anderes Verbrecherpaar wurde so verklärt. Hinter dem Mythos stehen kleine Raubüberfälle mit geringer Beute und eine Reihe getöteter Polizisten, deren Namen kaum jemand kennt.",
  "tat": "Clyde Barrow und Bonnie Parker zogen mit wechselnden Komplizen, darunter Clydes Bruder Buck, rund zwei Jahre lang durch Texas, Oklahoma, Missouri und angrenzende Staaten. Sie überfielen Tankstellen, Lebensmittelläden und kleine Banken, stahlen Autos und lebten auf der Flucht in Hütten und Motels. Die Beute war klein; nach Britannica überstieg sie bei keinem Überfall 1.500 Dollar. Wer ihnen in den Weg kam, wurde oft erschossen, vor allem Polizisten bei Kontrollen und Festnahmeversuchen. Im Januar 1934 befreite die Bande Häftlinge aus der Gefängnisfarm Eastham in Texas. Das FBI rechnet der Gruppe 13 Morde zu, nach gängiger Zählung darunter mindestens neun Polizeibeamte.",
  "opfer": "Die meisten Getöteten waren Polizisten und Gefängniswärter, oft junge Männer aus kleinen Orten. Im April 1933 starben in Joplin, Missouri, der Detektiv Harry McGinnis und der Constable Wes Harryman. Bei der Gefängnisbefreiung von Eastham wurde der Wärter Major Joe Crowson tödlich verletzt. Am Ostersonntag, dem 1. April 1934, wurden bei Grapevine in Texas die Streifenpolizisten E. B. Wheeler und H. D. Murphy erschossen; wenige Tage später starb im Nordosten Oklahomas der Constable Cal Campbell. Hinzu kamen Ladenbesitzer und andere Unbeteiligte.",
  "ermittlung": "Die Polizei der einzelnen Bundesstaaten durfte Staatsgrenzen nicht überschreiten, und die Bande nutzte das gezielt aus. Das Bureau of Investigation, Vorläufer des FBI, schaltete sich 1933 über ein Autodiebstahlgesetz ein, weil die Bande gestohlene Wagen über Staatsgrenzen brachte, und verfolgte Helfer wegen Unterschlupfgewährung. Im Februar 1934 beauftragte die texanische Gefängnisverwaltung den früheren Texas Ranger Frank Hamer mit der Jagd auf Barrow. Hamer verfolgte die Spur über Wochen; entscheidend wurde ein Kontakt zur Familie des Bandenmitglieds Henry Methvin in Louisiana, die den Behörden half, im Gegenzug für Nachsicht gegenüber ihrem Sohn.",
  "taeter": "Clyde Barrow wurde 1909 in Texas geboren und wuchs in Armut in West-Dallas auf; schon vor der Begegnung mit Bonnie war er wegen Diebstählen in Haft, im Gefängnis Eastham erlebte er schwere Misshandlungen. Bonnie Parker, 1910 geboren, war bei ihrer Begegnung mit Clyde im Januar 1930 mit einem inhaftierten Mann verheiratet. Ob sie selbst je auf Menschen geschossen hat, ist umstritten: Ein Zeuge behauptete, sie habe in Grapevine gefeuert, ihr früherer Komplize W. D. Jones gab später an, er habe sie nie auf Menschen schießen sehen. Gesichert ist, dass sie Clyde bei allen Taten begleitete.",
  "prozess": "Gegen Bonnie und Clyde gab es keinen Prozess. Am frühen Morgen des 23. Mai 1934 lauerte ein sechsköpfiges Aufgebot aus Texas und Louisiana, darunter Frank Hamer und der örtliche Sheriff Henderson Jordan, an einer Landstraße zwischen Gibsland und Sailes in Louisiana. Als der Wagen der beiden anhielt, eröffneten die Beamten ohne Warnung das Feuer; beide starben. Ob sie zur Aufgabe hätten aufgefordert werden können, wird bis heute diskutiert. 1935 verurteilte ein Bundesgericht in Dallas rund zwanzig Angehörige und Helfer wegen Unterschlupfgewährung zu Haft- und Geldstrafen.",
  "legende": "Das romantische Bild des Liebespaars, das gegen Banken und Obrigkeit kämpft, entstand zum Teil schon zu Lebzeiten: 1933 fand die Polizei in Joplin Filmrollen mit inszenierten Posen, darunter das bekannte Foto von Bonnie mit Zigarre und Revolver, die Zeitungen landesweit druckten. Bonnie schrieb Gedichte, die sie als tragische Gesetzlose zeigen. Den größten Anteil am Mythos hat der Film „Bonnie und Clyde“ von 1967. Gesichert ist dagegen: Die Beute war gering, das Leben auf der Flucht elend, und getötet wurden vor allem Polizisten, die Familien hinterließen.",
  "bedeutung": "Der Fall zeigte, wie machtlos eine an Staatsgrenzen gebundene Polizei gegen motorisierte Täter war, und gehört zu den Gründen, warum der Kongress 1934 die Befugnisse der Bundespolizei deutlich erweiterte. Er steht zugleich für die Ära der „Public Enemies“ während der Weltwirtschaftskrise, in der Teile der Öffentlichkeit Bankräuber bewunderten. Der Hinterhalt von 1934 bleibt ein Lehrstück in der Debatte über tödliche Gewalt durch die Polizei.",
  "zeitleiste": [
   {
    "datum": "Januar 1930",
    "jahr": 1930,
    "text": "Bonnie Parker und Clyde Barrow lernen sich in Texas kennen."
   },
   {
    "datum": "13. April 1933",
    "jahr": 1933,
    "text": "Schießerei in Joplin, Missouri: zwei Beamte sterben, die Bande lässt Fotos zurück."
   },
   {
    "datum": "16. Januar 1934",
    "jahr": 1934,
    "text": "Gefängnisbefreiung auf der Eastham-Farm in Texas."
   },
   {
    "datum": "1. April 1934",
    "jahr": 1934,
    "text": "Bei Grapevine, Texas, werden zwei Streifenpolizisten erschossen."
   },
   {
    "datum": "23. Mai 1934",
    "jahr": 1934,
    "text": "Bonnie und Clyde werden bei Gibsland, Louisiana, in einem Hinterhalt getötet."
   },
   {
    "datum": "Februar 1935",
    "jahr": 1935,
    "text": "Prozess in Dallas gegen Angehörige und Helfer wegen Unterschlupfgewährung."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Bonnie and Clyde",
   "FBI: Famous Cases – Bonnie and Clyde",
   "Jeff Guinn: Go Down Together. The True, Untold Story of Bonnie and Clyde, 2009"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/bonnie-und-clyde-0.jpg",
    "breite": 900,
    "hoehe": 850,
    "zeigt": "Fahndungsblatt des US-Justizministeriums für Bonnie Parker und Clyde Barrow, 21. Mai 1934",
    "urheber": "FBI",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bonnie_and_Clyde_DOJ_ID_Order_No._1227.jpg"
   },
   {
    "datei": "bilder/dark/bonnie-und-clyde-1.jpg",
    "breite": 736,
    "hoehe": 422,
    "zeigt": "Das sechsköpfige Aufgebot um Frank Hamer, 1934",
    "urheber": "FBI",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bonnie_Parker_and_Clyde_Barrow_posse_%281934%29.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "schwarze-dahlie",
  "titel": "Die Schwarze Dahlie",
  "untertitel": "Der Mord an Elizabeth Short, Los Angeles 1947",
  "jahr": 1947,
  "zeitraum": "Januar 1947",
  "ort": "Leimert Park, Los Angeles",
  "land": "USA",
  "lat": 34.0164,
  "lon": -118.333,
  "ortQuelle": "https://en.wikipedia.org/wiki/Black_Dahlia",
  "kategorie": "Mord",
  "status": "ungeklärt",
  "kurz": "Der Mord an einer 22-jährigen Frau wurde zum Medienereignis, das ihr Leben mit Gerüchten überschrieb. Der Täter wurde nie gefunden.",
  "tat": "Am Morgen des 15. Januar 1947 entdeckte eine Anwohnerin, die mit ihrem Kind unterwegs war, auf einem unbebauten Grundstück im Viertel Leimert Park in Los Angeles die Leiche einer jungen Frau. Sie war an einem anderen Ort getötet und dort abgelegt worden. Die Tote war Elizabeth Short. Zuletzt gesehen worden war sie am Abend des 9. Januar im Biltmore Hotel in der Innenstadt. Ende Januar schickte ein Unbekannter der Zeitung Los Angeles Examiner ein Päckchen mit persönlichen Dingen der Toten, darunter ihre Geburtsurkunde und ein Adressbuch. Die Polizei hielt es für möglich, dass es vom Täter stammte; verwertbare Spuren ergab es nicht.",
  "opfer": "Elizabeth Short wurde am 29. Juli 1924 in Boston geboren und wuchs mit ihren Schwestern in Medford, Massachusetts, bei ihrer Mutter auf. Als junge Frau zog sie nach Kalifornien, arbeitete unter anderem in einem Armeestützpunkt und lebte in Los Angeles und San Diego, oft in wechselnden Unterkünften und mit wenig Geld. Sie hatte Bekannte unter Soldaten und träumte, wie viele in der Stadt, vom Film. Nach ihrem Tod verbreiteten Zeitungen Behauptungen über ihr Privatleben, die sich nicht belegen ließen. Begraben ist sie in Oakland.",
  "ermittlung": "Die Polizei von Los Angeles setzte Dutzende Beamte ein und befragte mehr als hundert Personen. Das FBI identifizierte die Tote binnen kurzer Zeit über Fingerabdrücke, die von einer Bewerbung bei der Armee und einer Festnahme wegen Alkohols als Minderjährige 1943 vorlagen. Die Ermittlungen litten unter dem Wettlauf der Zeitungen, die Zeugen vor der Polizei befragten, Informationen zurückhielten und Spuren verwischten. Hinzu kamen zahlreiche falsche Geständnisse – allein in den ersten Wochen Dutzende. Eine Grand Jury untersuchte 1949 die Versäumnisse der Polizei bei ungeklärten Morden in der Stadt.",
  "taeter": "Der Täter ist unbekannt. Überprüft wurden unter anderem der Handelsvertreter Robert Manley, der Short zuletzt begleitet hatte und entlastet wurde, sowie Männer mit medizinischen Kenntnissen. In den Akten der Staatsanwaltschaft von 1950 erscheint der Arzt George Hodel als Verdächtiger; er wurde abgehört, aber nie angeklagt. Sein Sohn, ein ehemaliger Polizist, hat ihn später in Büchern als Täter bezeichnet. Andere Autoren nennen andere Namen. Keiner dieser Verdächtigen wurde je angeklagt oder verurteilt; für alle gilt die Unschuldsvermutung.",
  "prozess": "Einen Prozess gab es nicht, weil nie jemand wegen des Mordes angeklagt wurde. Alle Menschen, die sich selbst bezichtigten, wurden überprüft und als Täter ausgeschlossen; viele kannten den Fall nur aus der Zeitung. Der Fall gilt bei der Polizei von Los Angeles formal als offen. Das FBI schreibt auf seiner Website, der Mörder sei nie gefunden worden und werde angesichts der verstrichenen Zeit wahrscheinlich nie gefunden werden.",
  "legende": "Den Namen „Schwarze Dahlie“ prägte die Presse nach der Tat, wohl in Anspielung auf den Film „Die blaue Dahlie“ von 1946; wer ihn zuerst verwendete, ist umstritten. Die Zeitungen zeichneten Short als gescheiterte Schauspielerin oder Frau mit zweifelhaftem Ruf. Belegt ist davon wenig: Eine Filmrolle hatte sie nicht, und viele Behauptungen über ihr Leben stammen aus Boulevardberichten der Zeit. James Ellroys Roman „Die schwarze Dahlie“ von 1987 und die Verfilmung von 2006 sind Fiktion. Auch die vielen Täterbücher bieten Thesen, keine Beweise.",
  "bedeutung": "Der Fall gilt als Musterbeispiel dafür, wie Zeitungen eine Mordermittlung prägen und behindern können: Reporter kamen vor der Polizei an Zeugen, Konkurrenzblätter überboten sich mit Gerüchten. Er zeigte auch die Belastung durch falsche Geständnisse, die bis heute zum Standardproblem bei aufsehenerregenden Fällen gehören. In der Erinnerung wurde aus einem Opfer eine Kunstfigur; neuere Arbeiten versuchen, Elizabeth Short als Mensch zurückzugewinnen.",
  "zeitleiste": [
   {
    "datum": "29. Juli 1924",
    "jahr": 1924,
    "text": "Elizabeth Short wird in Boston geboren."
   },
   {
    "datum": "1943",
    "jahr": 1943,
    "text": "Short lebt in Kalifornien; ihre Fingerabdrücke werden bei einer Bewerbung und einer Festnahme erfasst."
   },
   {
    "datum": "9. Januar 1947",
    "jahr": 1947,
    "text": "Short wird zuletzt im Biltmore Hotel in Los Angeles gesehen."
   },
   {
    "datum": "15. Januar 1947",
    "jahr": 1947,
    "text": "Ihre Leiche wird in Leimert Park gefunden; das FBI identifiziert sie über Fingerabdrücke."
   },
   {
    "datum": "Ende Januar 1947",
    "jahr": 1947,
    "text": "Der Los Angeles Examiner erhält ein Päckchen mit ihren persönlichen Dingen."
   },
   {
    "datum": "1949",
    "jahr": 1949,
    "text": "Eine Grand Jury untersucht die Versäumnisse der Polizei bei ungeklärten Morden."
   }
  ],
  "quellen": [
   "FBI: Famous Cases – The Black Dahlia",
   "Encyclopaedia Britannica: Elizabeth Short (Black Dahlia)",
   "Piu Eatwell: Black Dahlia, Red Rose, 2017"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/schwarze-dahlie-0.jpg",
    "breite": 845,
    "hoehe": 1100,
    "zeigt": "Fahndungs- und Informationsblatt der Polizei von Los Angeles zu Elizabeth Short, Januar 1947",
    "urheber": "City of Los Angeles Police Department",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Elizabeth_Short_police_bulletin.png"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "teigin-vergiftung",
  "titel": "Die Teigin-Bank-Vergiftung",
  "untertitel": "Zwölf Tote in einer Tokioter Bank und ein umstrittenes Urteil, 1948",
  "jahr": 1948,
  "zeitraum": "26. Januar 1948; Verfahren bis 1955, Haft bis 1987",
  "ort": "Filiale Shiinamachi der Teikoku-Bank, Toshima, Tokio",
  "land": "Japan",
  "lat": 35.7271,
  "lon": 139.6949,
  "ortQuelle": "https://commons.wikimedia.org/wiki/File:Shiina-Machi_branch_of_the_Teikoku_Bank.JPG",
  "kategorie": "Mord",
  "status": "umstritten",
  "kurz": "Ein Mann vergiftet 1948 sechzehn Bankangestellte, zwölf sterben. Verurteilt wird ein Maler auf Grundlage eines widerrufenen Geständnisses – er stirbt nach 39 Jahren in der Todeszelle, nie hingerichtet.",
  "tat": "Am Nachmittag des 26. Januar 1948, nach Schalterschluss, betrat ein Mann die Filiale Shiinamachi der Teikoku-Bank im Tokioter Bezirk Toshima. Er gab sich als Gesundheitsbeamter aus und erklärte, in der Nachbarschaft sei die Ruhr ausgebrochen; die Besatzungsbehörden hätten eine vorbeugende Einnahme angeordnet. Er führte den sechzehn Anwesenden vor, wie die Flüssigkeit in zwei Schlucken zu trinken sei. Es war ein Gift auf Zyanidbasis. Zehn Menschen starben in der Bank, zwei weitere im Krankenhaus; vier überlebten. Der Täter nahm rund 160.000 Yen in bar und einen Scheck an sich und verschwand. In den Monaten zuvor hatte es in zwei anderen Tokioter Banken ähnliche Auftritte gegeben, bei denen niemand starb.",
  "opfer": "Die Toten waren überwiegend Angestellte der Filiale, Menschen, die im zerstörten Nachkriegs-Tokio einen geregelten Arbeitsplatz hatten und einer Anordnung der Gesundheitsbehörden vertrauten. Ihre Namen sind in japanischen Darstellungen überliefert, stehen aber in der Erinnerung an den Fall kaum im Vordergrund. Die vier Überlebenden wurden zu wichtigen Zeugen. Von allen Zeugen dieser Tat und der früheren Versuche erkannten nach den Prozessberichten nur wenige in Sadamichi Hirasawa sicher den Täter. Der Fall traf eine Bevölkerung, die nach Krieg, Hunger und Seuchen an behördliche Impf- und Desinfektionsaktionen gewöhnt war.",
  "ermittlung": "Die Polizei verfolgte zwei Spuren. Die eine führte zu ehemaligen Angehörigen militärischer Giftforschung, etwa der Einheit 731 und des Noborito-Instituts, denn Dosierung und Vorgehen deuteten auf Fachwissen. Diese Linie wurde nicht zu Ende verfolgt, nach verbreiteter Annahme auch wegen der Interessen der amerikanischen Besatzungsmacht, die ehemalige Mitglieder solcher Einheiten schützte; belegt ist das im Einzelnen nicht. Die andere Spur führte über eine Visitenkarte, die der Täter bei einem der früheren Versuche hinterlassen hatte, zu ihrem echten Inhaber und den Menschen, mit denen er Karten getauscht hatte. Einer davon, der Tempera-Maler Sadamichi Hirasawa, konnte seine Karte nicht vorweisen, hatte kein festes Alibi und besaß Geld unklarer Herkunft. Er wurde am 21. August 1948 in Otaru auf Hokkaidō festgenommen.",
  "taeter": "Verurteilt wurde Sadamichi Hirasawa, ein angesehener Maler, damals Mitte fünfzig. Nach wochenlangen Verhören gestand er, widerrief aber bald und beteuerte bis zu seinem Tod seine Unschuld. Gegen seine Täterschaft sprechen nach Ansicht der Verteidigung und vieler Beobachter die Zweifel an der Giftart, deren Wirkung eher zu einem militärischen Präparat passte als zu einfachem Kaliumcyanid, das Hirasawa fehlende Wissen über den Umgang damit und die schwache Identifizierung durch Zeugen. Die Verteidigung machte zudem geltend, eine Tollwutimpfung in den 1920er-Jahren habe bei ihm ein Korsakow-Syndrom ausgelöst, das ihn für suggestive Verhöre anfällig gemacht habe. Ob Hirasawa der Täter war, ist bis heute offen.",
  "prozess": "Die Ermittlungen liefen noch nach der alten Strafprozessordnung, die das Geständnis als wichtigstes Beweismittel behandelte; die neue Ordnung galt erst ab dem 1. Januar 1949. Das Bezirksgericht Tokio verurteilte Hirasawa 1950 zum Tode, der Oberste Gerichtshof bestätigte das Urteil 1955. Kein Justizminister unterschrieb je den Hinrichtungsbefehl. Hirasawa stellte zu Lebzeiten 18 Wiederaufnahmeanträge, alle erfolglos. Er starb am 10. Mai 1987 mit 95 Jahren im Gefängniskrankenhaus von Hachiōji. Sein Adoptivsohn Takehiko Hirasawa führte die Bemühungen weiter; nach dessen Tod 2013 stellte das Obergericht Tokio das Verfahren ein. Angehörige reichten 2015 einen weiteren Antrag ein.",
  "legende": "Der Schriftsteller Seichō Matsumoto vertrat 1959 und 1960 in zwei Büchern die These, der wahre Täter stamme aus dem Umfeld der Einheit 731, und prägte damit die öffentliche Wahrnehmung. Bewiesen ist das nicht, ebenso wenig Hirasawas Täterschaft. Gesichert ist, dass die Ermittler die Militärspur anfangs verfolgten und dass das Urteil im Kern auf einem widerrufenen Geständnis beruht. Matsumoto vermutete, Hirasawas unerklärtes Geld stamme aus dem Verkauf erotischer Bilder, die er aus Rücksicht auf seinen Ruf verschwiegen habe; auch das ist eine Vermutung. Der Fall regte zahlreiche Romane an, etwa David Peaces „Occupied City“ von 2009.",
  "bedeutung": "Der Teigin-Fall wurde zum Sinnbild der japanischen Debatte über erzwungene Geständnisse, lange Polizeihaft vor der Anklage und die Seltenheit erfolgreicher Wiederaufnahmen. Dass Hirasawa fast vier Jahrzehnte als Todeskandidat lebte, ohne hingerichtet zu werden, zeigt die Unsicherheit, die auch der Staat selbst empfand. Die neue Strafprozessordnung von 1949, die die Rechte von Beschuldigten im Verhör stärkte, kam für die Ermittlungen gegen ihn zu spät. Bis heute setzen sich Unterstützer für eine Wiederaufnahme ein.",
  "zeitleiste": [
   {
    "datum": "26. Januar 1948",
    "jahr": 1948,
    "text": "In der Filiale Shiinamachi der Teikoku-Bank sterben zwölf von sechzehn Anwesenden an Gift."
   },
   {
    "datum": "21. August 1948",
    "jahr": 1948,
    "text": "Sadamichi Hirasawa wird in Otaru festgenommen."
   },
   {
    "datum": "Herbst 1948",
    "jahr": 1948,
    "text": "Nach langen Verhören gesteht Hirasawa; beim ersten Verhandlungstag im Dezember widerruft er."
   },
   {
    "datum": "1950",
    "jahr": 1950,
    "text": "Das Bezirksgericht Tokio verurteilt ihn zum Tode."
   },
   {
    "datum": "1955",
    "jahr": 1955,
    "text": "Der Oberste Gerichtshof bestätigt das Todesurteil."
   },
   {
    "datum": "10. Mai 1987",
    "jahr": 1987,
    "text": "Hirasawa stirbt mit 95 Jahren in Haft, ohne dass das Urteil vollstreckt wurde."
   },
   {
    "datum": "Dezember 2013",
    "jahr": 2013,
    "text": "Nach dem Tod seines Adoptivsohns stellt das Obergericht Tokio dessen Wiederaufnahmeantrag ein."
   }
  ],
  "quellen": [
   "William Triplett: Flowering of the Bamboo, 1985",
   "Seichō Matsumoto: Shōsetsu Teigin jiken, 1959",
   "The Japan Times / Kyodo: Berichte über die Wiederaufnahmeanträge, 2013"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/teigin-vergiftung-0.jpg",
    "breite": 900,
    "hoehe": 1027,
    "zeigt": "Die Filiale Shiinamachi der Teikoku-Bank am Tag nach der Tat, 27. Januar 1948",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Shiina-Machi_branch_of_the_Teikoku_Bank.JPG"
   },
   {
    "datei": "bilder/dark/teigin-vergiftung-1.jpg",
    "breite": 900,
    "hoehe": 584,
    "zeigt": "Sadamichi Hirasawa in der ersten Instanz vor dem Bezirksgericht Tokio, Dezember 1948 (Asahi Graph)",
    "urheber": "朝日新聞社",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hirasawa_Sadamichi_at_the_1st_trial.JPG"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "timothy-evans",
  "titel": "Der Fall Timothy Evans",
  "untertitel": "10 Rillington Place – die Hinrichtung eines Unschuldigen, London 1950",
  "jahr": 1949,
  "zeitraum": "November 1949 bis März 1950, Aufarbeitung bis 1966",
  "ort": "10 Rillington Place, Notting Hill, London",
  "land": "Großbritannien",
  "lat": 51.5096,
  "lon": -0.2043,
  "ortQuelle": "https://en.wikipedia.org/wiki/Notting_Hill",
  "kategorie": "Justizirrtum",
  "status": "aufgeklärt",
  "kurz": "Timothy Evans wurde 1950 für den Mord an seiner Tochter gehängt – drei Jahre später zeigte sich, dass im selben Haus der Frauenmörder John Christie lebte. Der Fall wurde zum Argument gegen die Todesstrafe.",
  "tat": "Am 30. November 1949 meldete sich der 25-jährige Fahrer Timothy Evans auf einer Polizeiwache in Merthyr Tydfil in Wales und erklärte, seine Frau sei tot. Seine Angaben wechselten: Zuerst sagte er, er habe ihre Leiche in einen Abwasserschacht gelegt, dann beschuldigte er seinen Nachbarn John Christie, der bei einer illegalen Abtreibung ihren Tod verursacht habe. Am 2. Dezember 1949 fand die Polizei in der Waschküche des Hauses 10 Rillington Place in Notting Hill die Leichen von Beryl Evans und der gut einjährigen Tochter Geraldine; beide waren erdrosselt worden. Evans, nach London gebracht, legte dort Geständnisse ab, die er später widerrief. Im Erdgeschoss desselben Hauses wohnte Christie, der, wie sich 1953 zeigte, seit Jahren Frauen tötete.",
  "opfer": "Beryl Evans war etwa 20 Jahre alt, als sie im November 1949 starb, ihre Tochter Geraldine gut ein Jahr. Die junge Familie lebte beengt im obersten Stock eines heruntergekommenen Hauses, das Paar stritt häufig über Geld. Opfer des Falles wurde auch Timothy Evans selbst: Er konnte kaum lesen und schreiben, seine Intelligenz lag nach Tests weit unter dem Durchschnitt, und er neigte dazu, Geschichten zu erfinden, um sich wichtig zu machen. Gehängt wurde er als Mörder seines Kindes. Christie tötete in dem Haus zwischen 1943 und 1953 mindestens sechs weitere Frauen, darunter seine Ehefrau Ethel.",
  "ermittlung": "Die Polizei konzentrierte sich von Anfang an auf Evans. Seine Geständnisse wurden in der Nacht nach seiner Ankunft in London auf der Wache in Notting Hill protokolliert; ihre Formulierungen weckten später Zweifel, ob sie wirklich von ihm stammten. Spuren, die zu Christie hätten führen können, gingen unter: Haus und Garten wurden nur oberflächlich durchsucht, obwohl dort bereits die Überreste von zwei Frauen lagen, die Christie 1943 und 1944 getötet hatte. Christie, im Krieg Hilfspolizist, wirkte auf die Ermittler als glaubwürdiger Zeuge. Erst im März 1953, nachdem er ausgezogen war, entdeckte ein neuer Mieter hinter einer zutapezierten Nische in der Küche die Leichen von drei Frauen; unter den Dielen lag Ethel Christie.",
  "taeter": "John Reginald Halliday Christie (1899–1953) tötete nach den Funden in seinem Haus und nach eigenem Geständnis zwischen 1943 und 1953 mindestens sechs Frauen, darunter seine Ehefrau. Nach der Festnahme gestand er auch, Beryl Evans getötet zu haben, bestritt aber den Tod Geraldines; wegen der Morde von 1949 wurde er nie angeklagt. Dass Christie auch für diese Taten verantwortlich war, gilt heute als weithin anerkannt: Er lebte im Haus, die Todesart passte zu seinem Vorgehen, und Evans hatte schon 1949 ausgesagt, Christie habe eine Abtreibung angeboten. Timothy Evans (1924–1950) wurde 1966 begnadigt. Lord Brennan, als unabhängiger Gutachter mit der Entschädigung der Familie befasst, hielt fest, es gebe keinen Beweis, der Evans mit dem Tod seiner Frau in Verbindung bringe.",
  "prozess": "Angeklagt wurde Evans nur wegen des Mordes an Geraldine; die Anklage wegen Beryl blieb liegen. Im Prozess am Old Bailey im Januar 1950 beschuldigte er Christie, der als Hauptzeuge der Anklage auftrat. Am 13. Januar 1950 sprachen die Geschworenen Evans schuldig, er wurde zum Tod verurteilt. Die Berufung scheiterte, am 9. März 1950 wurde er im Gefängnis Pentonville gehängt. Christie wurde im Juni 1953 wegen des Mordes an seiner Frau verurteilt und am 15. Juli 1953 ebenfalls in Pentonville hingerichtet. Eine rasch angesetzte Untersuchung unter John Scott Henderson befand 1953, im Fall Evans liege kein Justizirrtum vor.",
  "legende": "Oft heißt es, Evans sei 1966 vollständig rehabilitiert worden. Das stimmt nur zum Teil. Die Untersuchung unter Richter Daniel Brabin kam zu dem Schluss, Evans habe seine Tochter wahrscheinlich nicht getötet, wohl aber vermutlich seine Frau – ein Befund, der der Anklage von 1950 widersprach. Auf dieser Grundlage empfahl Innenminister Roy Jenkins die Begnadigung, die am 18. Oktober 1966 erfolgte. Ein Gericht hob das Urteil nie auf: 2004 wies der High Court die Klage von Evans’ Halbschwester Mary Westlake ab, die Criminal Cases Review Commission zur Vorlage beim Berufungsgericht zu verpflichten; zugleich stellte das Gericht fest, Evans habe keinen der beiden Morde begangen. Die Vorstellung, dieser Fall allein habe die Todesstrafe beendet, greift ebenfalls zu kurz.",
  "bedeutung": "Der Fall erschütterte das Vertrauen in die Unfehlbarkeit der Justiz bei Todesurteilen. Zusammen mit den Hinrichtungen von Derek Bentley 1953 und Ruth Ellis 1955 prägte er die Debatte, die zum Murder (Abolition of Death Penalty) Act von 1965 führte: Das Gesetz setzte die Todesstrafe für Mord zunächst für fünf Jahre aus, 1969 machte das Parlament die Abschaffung dauerhaft. Ludovic Kennedys Buch „Ten Rillington Place“ (1961) trug wesentlich dazu bei, die öffentliche Meinung zu wenden. Die Straße wurde umbenannt und später abgerissen.",
  "zeitleiste": [
   {
    "datum": "30. November 1949",
    "jahr": 1949,
    "text": "Evans meldet sich bei der Polizei in Merthyr Tydfil."
   },
   {
    "datum": "2. Dezember 1949",
    "jahr": 1949,
    "text": "Die Leichen von Beryl und Geraldine Evans werden in der Waschküche gefunden."
   },
   {
    "datum": "13. Januar 1950",
    "jahr": 1950,
    "text": "Schuldspruch am Old Bailey; Christie ist Hauptzeuge der Anklage."
   },
   {
    "datum": "9. März 1950",
    "jahr": 1950,
    "text": "Evans wird in Pentonville gehängt."
   },
   {
    "datum": "März 1953",
    "jahr": 1953,
    "text": "Ein neuer Mieter entdeckt Leichen in Christies früherer Wohnung."
   },
   {
    "datum": "15. Juli 1953",
    "jahr": 1953,
    "text": "Christie wird hingerichtet."
   },
   {
    "datum": "November 1965",
    "jahr": 1965,
    "text": "Die Todesstrafe für Mord wird zunächst für fünf Jahre ausgesetzt."
   },
   {
    "datum": "18. Oktober 1966",
    "jahr": 1966,
    "text": "Posthume Begnadigung von Timothy Evans."
   }
  ],
  "quellen": [
   "The National Archives (UK), Find Case Law: Westlake v Criminal Cases Review Commission [2004] EWHC 2779 (Admin)",
   "Daniel Brabin: The Case of Timothy John Evans. Report of an Inquiry, London 1966",
   "Ludovic Kennedy: Ten Rillington Place, London 1961",
   "Encyclopaedia Britannica: Capital punishment (Abschnitt Großbritannien)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/timothy-evans-0.jpg",
    "breite": 900,
    "hoehe": 599,
    "zeigt": "Polizeifoto von John Christie nach seiner Festnahme, 31. März 1953",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:John_Christie_Mugshot.jpg"
   },
   {
    "datei": "bilder/dark/timothy-evans-1.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Das Gefängnis Pentonville an der Caledonian Road, Hinrichtungsort von Evans und Christie (Aufnahme 2014)",
    "urheber": "David Howard",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Pentonville_Prison_on_Caledonian_Road-geograph-4226995.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "sam-sheppard",
  "titel": "Der Fall Sam Sheppard",
  "untertitel": "Mord in Bay Village, Ohio 1954 – und ein Prozess unter dem Druck der Presse",
  "jahr": 1954,
  "zeitraum": "Juli 1954 bis November 1966",
  "ort": "Bay Village bei Cleveland, Ohio",
  "land": "USA",
  "lat": 41.4886,
  "lon": -81.9286,
  "ortQuelle": "https://en.wikipedia.org/wiki/Bay_Village,_Ohio",
  "kategorie": "Justizirrtum",
  "status": "umstritten",
  "kurz": "Ein Arzt wird nach einer beispiellosen Pressekampagne wegen Mordes an seiner Frau verurteilt. Zwölf Jahre später erklärt der Supreme Court das Verfahren für unfair – ein Grundsatzurteil über Medien und Justiz.",
  "tat": "In den frühen Morgenstunden des 4. Juli 1954 wurde Marilyn Reese Sheppard in ihrem Haus in Bay Village, einem Vorort von Cleveland am Eriesee, im Schlafzimmer erschlagen. Ihr Mann, der Osteopath und Neurochirurg Sam Sheppard, gab an, er sei auf dem Sofa im Erdgeschoss eingeschlafen, von den Schreien seiner Frau geweckt worden und oben auf einen Eindringling mit buschigem Haar getroffen. Er habe ihn bis zum Strand verfolgt und sei dort niedergeschlagen worden. Der siebenjährige Sohn des Paares schlief während der Tat im Nebenzimmer. Spuren eines Einbruchs fanden sich nicht eindeutig, die Ermittler hielten die Darstellung des Ehemanns früh für unglaubwürdig. Am 30. Juli 1954 wurde Sheppard festgenommen.",
  "opfer": "Marilyn Reese Sheppard war 31 Jahre alt und mit Sam Sheppard seit ihrer Schulzeit verbunden; die beiden hatten 1945 geheiratet. Sie lebte mit ihrem Mann und dem gemeinsamen Sohn Sam Reese Sheppard in einem Haus am Seeufer und war zum Zeitpunkt ihres Todes im vierten Monat schwanger, was die Obduktion bereits 1954 feststellte. Über ihr Leben wurde im Prozess vor allem im Zusammenhang mit den Affären ihres Mannes gesprochen – sie selbst trat hinter dem Medienereignis, das um ihren Tod entstand, fast völlig zurück.",
  "ermittlung": "Der Bezirks-Coroner Samuel Gerber zog den Fall rasch an sich und hielt im Juli 1954 eine öffentliche Leichenschau ab – in einer Schulturnhalle, vor Publikum, Reportern und laufenden Mikrofonen. Sheppard wurde dort stundenlang befragt, ohne dass sein Anwalt eingreifen durfte. Die Zeitung Cleveland Press forderte in Leitartikeln auf der Titelseite seine Verhaftung; wenige Stunden nach einem solchen Artikel wurde er festgenommen. Die Spurensicherung war lückenhaft: Das Haus blieb nicht durchgehend abgesperrt, Blutspuren wurden nur teilweise ausgewertet. Erst die Verteidigung ließ nach dem Urteil den Tatort von dem Kriminalisten Paul Kirk untersuchen, der eine Blutspur fand, die nicht von den Sheppards stammte. In den 1990er Jahren veranlasste der Sohn DNA-Analysen, deren Deutung vor Gericht umstritten blieb.",
  "taeter": "Sam Sheppard wurde 1954 verurteilt, 1966 aber im Wiederaufnahmeverfahren freigesprochen; rechtlich gilt er als nicht schuldig. Wer Marilyn Sheppard tötete, ist nie gerichtlich geklärt worden. Die Familie und von ihr beauftragte Gutachter benannten in den 1990er Jahren Richard Eberling, der früher als Fensterputzer im Haus gearbeitet hatte, als möglichen Täter. Eberling wurde in diesem Fall nie angeklagt; er wurde 1989 wegen des Mordes an einer älteren Witwe in einem anderen Fall verurteilt und starb 1998 in Haft. Die Staatsanwaltschaft hielt im Zivilprozess des Jahres 2000 weiter an Sam Sheppard als wahrscheinlichem Täter fest. Der Fall bleibt offen und umstritten.",
  "prozess": "Der Prozess vor Richter Edward Blythin dauerte vom 18. Oktober bis zum 21. Dezember 1954. Die Geschworenen sprachen Sheppard des Mordes zweiten Grades schuldig, er erhielt lebenslange Haft. Nach zehn Jahren Haft hob ein Bundesrichter das Urteil 1964 auf; Sheppard kam frei. Am 6. Juni 1966 entschied der Supreme Court in Sheppard v. Maxwell mit acht zu einer Stimme, dass ihm ein faires Verfahren verweigert worden war. Im neuen Prozess, in dem ihn der junge Anwalt F. Lee Bailey verteidigte, wurde er am 16. November 1966 freigesprochen. Eine Klage seines Sohnes auf Entschädigung wegen unrechtmäßiger Haft scheiterte im April 2000 vor einer Jury in Cleveland.",
  "legende": "Der Fall gilt oft als Vorlage der Fernsehserie „Auf der Flucht“ (The Fugitive, 1963–1967) und des Kinofilms von 1993, in denen ein unschuldig verurteilter Arzt einen einarmigen Mörder jagt. Die Ähnlichkeit ist offensichtlich, eine bewusste Vorlage haben die Macher jedoch bestritten – gesichert ist nur die öffentliche Verknüpfung. Ebenso verbreitet ist die Annahme, die DNA-Untersuchungen der 1990er Jahre hätten Sheppards Unschuld bewiesen. Tatsächlich deuteten sie auf einen weiteren Beteiligten hin, wurden aber im Zivilprozess 2000 angefochten, und die Jury sah die Unschuld nicht als erwiesen an. Gesichert ist: Das erste Verfahren war nach dem Urteil des höchsten Gerichts unfair, und Sheppard wurde rechtskräftig freigesprochen.",
  "bedeutung": "Sheppard v. Maxwell wurde zum Leiturteil über das Verhältnis von Presse und Strafprozess. Richter Tom C. Clark beschrieb eine „Jahrmarktsatmosphäre“: Reporter saßen im Gerichtssaal, die Namen und Fotos der Geschworenen standen in der Zeitung, der Richter hatte nichts dagegen unternommen. Das Gericht nannte Mittel, die Richter künftig einsetzen sollten – Vertagung, Verlegung des Verfahrens, Abschirmung der Geschworenen und Beschränkung von Äußerungen der Beteiligten gegenüber der Presse. Diese Instrumente prägen bis heute den Umgang amerikanischer Gerichte mit aufsehenerregenden Fällen.",
  "zeitleiste": [
   {
    "datum": "4. Juli 1954",
    "jahr": 1954,
    "text": "Marilyn Reese Sheppard wird in ihrem Haus in Bay Village erschlagen."
   },
   {
    "datum": "30. Juli 1954",
    "jahr": 1954,
    "text": "Nach Leitartikeln der Cleveland Press wird Sam Sheppard festgenommen."
   },
   {
    "datum": "21. Dezember 1954",
    "jahr": 1954,
    "text": "Schuldspruch wegen Mordes zweiten Grades, Strafe: lebenslange Haft."
   },
   {
    "datum": "Juli 1964",
    "jahr": 1964,
    "text": "Ein Bundesrichter hebt das Urteil auf, Sheppard kommt nach zehn Jahren frei."
   },
   {
    "datum": "6. Juni 1966",
    "jahr": 1966,
    "text": "Der Supreme Court entscheidet in Sheppard v. Maxwell, dass das Verfahren unfair war."
   },
   {
    "datum": "16. November 1966",
    "jahr": 1966,
    "text": "Freispruch im Wiederaufnahmeverfahren."
   },
   {
    "datum": "6. April 1970",
    "jahr": 1970,
    "text": "Sam Sheppard stirbt im Alter von 46 Jahren."
   },
   {
    "datum": "April 2000",
    "jahr": 2000,
    "text": "Eine Jury weist die Entschädigungsklage des Sohnes wegen unrechtmäßiger Haft ab."
   }
  ],
  "quellen": [
   "Supreme Court of the United States: Sheppard v. Maxwell, 384 U.S. 333 (1966)",
   "Encyclopaedia Britannica: F. Lee Bailey / Sam Sheppard",
   "The Free Speech Center (Middle Tennessee State University): Sheppard v. Maxwell (1966)",
   "Court News Ohio (Supreme Court of Ohio): Legal Legacy – Sam Sheppard, 2026"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/sam-sheppard-0.jpg",
    "breite": 320,
    "hoehe": 786,
    "zeigt": "Sam Sheppard während eines Interviews nach seiner Haftentlassung im Juli 1964 (Foto: Bernie Noble, The Cleveland Press)",
    "urheber": "Bernie Noble",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Sam_Sheppard_1964.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "emmett-till",
  "titel": "Emmett Till",
  "untertitel": "Ein Mord, ein Freispruch und ein offener Sarg, Mississippi 1955",
  "jahr": 1955,
  "zeitraum": "August bis September 1955",
  "ort": "Money, Mississippi",
  "land": "USA",
  "lat": 33.652,
  "lon": -90.209,
  "ortQuelle": "https://en.wikipedia.org/wiki/Money,_Mississippi",
  "kategorie": "Mord",
  "status": "aufgeklärt",
  "kurz": "Ein vierzehnjähriger Junge aus Chicago wird 1955 in Mississippi ermordet, seine Mörder werden freigesprochen und gestehen danach gegen Geld. Seine Mutter macht den Fall zum Weckruf der Bürgerrechtsbewegung.",
  "tat": "Im August 1955 besuchte der vierzehnjährige Emmett Till Verwandte im Mississippi-Delta. Am 24. August betrat er mit anderen Jugendlichen Bryant's Grocery in Money, einen Laden, den die weiße Carolyn Bryant führte. Was dort geschah, ist umstritten; seine Cousins berichteten, er habe draußen gepfiffen. In der Nacht zum 28. August holten ihr Mann Roy Bryant und dessen Halbbruder J. W. Milam den Jungen mit vorgehaltener Waffe aus dem Haus seines Großonkels Mose Wright. Am 31. August wurde seine Leiche aus dem Tallahatchie River geborgen. Er war schwer misshandelt und erschossen worden. Nach den Maßstäben der Zeit war es ein Lynchmord: Erwachsene Männer töteten ein schwarzes Kind, um eine angebliche Grenzüberschreitung zu bestrafen.",
  "opfer": "Emmett Louis Till, in der Familie „Bobo“ genannt, wurde am 25. Juli 1941 in Chicago geboren und wuchs bei seiner Mutter Mamie Till-Bradley auf, die als Zivilangestellte für die US Air Force arbeitete. Eine Polioerkrankung in der Kindheit hatte ihm ein leichtes Stottern hinterlassen. Freunde und Verwandte beschrieben ihn als lebhaften, zu Späßen aufgelegten Jungen, der gern half. Die Reise in den Süden war für ihn ein Sommerabenteuer bei Onkel und Cousins. Seine Mutter ließ seinen Leichnam nach Chicago bringen und bestand auf einem offenen Sarg, damit die Welt sehe, was man ihrem Sohn angetan hatte. Zehntausende kamen zur Aufbahrung.",
  "ermittlung": "Bryant und Milam wurden schon am 29. August wegen Entführung festgenommen; sie gaben zu, den Jungen geholt zu haben, behaupteten aber, ihn wieder freigelassen zu haben. Nach dem Leichenfund übernahm das Tallahatchie County, in dem der Fluss lag, das Verfahren. Der zuständige Sheriff zweifelte öffentlich an, dass die Leiche Emmett Till sei. Schwarze Journalisten und Bürgerrechtler aus dem Norden suchten selbst nach Zeugen, versteckten sie und brachten sie zum Prozess. Die Bundesbehörden griffen nicht ein. Erst 2004 eröffnete das US-Justizministerium neue Ermittlungen; 2005 wurde der Leichnam exhumiert und identifiziert. Ein Geschworenengremium in Mississippi lehnte 2007 jede Anklage ab, ebenso 2022.",
  "taeter": "Roy Bryant und J. W. Milam sind die Täter: Sie gaben die Entführung zu und schilderten die Tötung 1956 selbst. Bryants Frau Carolyn hatte im Prozess ohne die Geschworenen ausgesagt, der Junge habe sie gepackt und bedrängt. Der Historiker Timothy Tyson berichtete 2017, sie habe ihm gegenüber eingeräumt, dieser Teil sei nicht wahr gewesen; sie bestritt das später gegenüber Ermittlern, eine Aufnahme dieser Stelle gibt es nicht. Ob weitere Männer an Entführung und Tötung beteiligt waren, wie Zeugen andeuteten, ist nicht geklärt. Angeklagt wurde außer Bryant und Milam niemand. Carolyn Bryant Donham starb 2023 ohne Anklage.",
  "prozess": "Der Prozess fand vom 19. bis 23. September 1955 im Gerichtsgebäude von Sumner statt, vor zwölf weißen Männern als Geschworenen. Mose Wright stand im Zeugenstand auf und zeigte auf die Angeklagten, ein für einen Schwarzen im damaligen Mississippi lebensgefährlicher Schritt; er verließ den Staat bald darauf. Die Verteidigung behauptete, die Leiche sei nicht die von Emmett Till. Nach gut einer Stunde Beratung sprach die Jury beide frei. Im November lehnte eine Grand Jury auch die Anklage wegen Entführung ab. Weil niemand zweimal wegen derselben Tat angeklagt werden darf, blieben die beiden straflos.",
  "legende": "Oft wird erzählt, Emmett Till sei getötet worden, weil er eine weiße Frau angepfiffen habe. Gesichert ist nur, dass ein harmloses Verhalten eines Kindes zum Vorwand für einen Mord wurde; was im Laden geschah, lässt sich nicht mehr klären, und Carolyn Bryants dramatische Aussage gilt nach den Ermittlungen des Justizministeriums als zweifelhaft. Umgekehrt ist das Geständnis keine Legende: Im Januar 1956 veröffentlichte das Magazin „Look“ einen Bericht des Journalisten William Bradford Huie, in dem Milam und Bryant gegen Bezahlung die Tötung schilderten, geschützt durch den Freispruch. Das Justizministerium stellte 2021 fest, dass sich eine Falschaussage nicht mehr beweisen ließe.",
  "bedeutung": "Mamie Till-Bradleys Entscheidung, die Fotos ihres Sohnes in der Zeitschrift „Jet“ veröffentlichen zu lassen, machte die Gewalt des Südens für Millionen sichtbar. Rosa Parks sagte später, sie habe an Emmett Till gedacht, als sie im Dezember 1955 in Montgomery ihren Sitzplatz nicht räumte. Der Name steht heute in zwei Bundesgesetzen: dem Emmett Till Unsolved Civil Rights Crime Act von 2008 zur Aufarbeitung alter Fälle und dem Emmett Till Antilynching Act, den Präsident Biden am 29. März 2022 unterzeichnete. Er macht Lynchmord zum Bundesverbrechen, nach rund 200 gescheiterten Gesetzentwürfen seit Beginn des 20. Jahrhunderts.",
  "zeitleiste": [
   {
    "datum": "24. August 1955",
    "jahr": 1955,
    "text": "Emmett Till betritt mit anderen Jugendlichen Bryant's Grocery in Money."
   },
   {
    "datum": "28. August 1955",
    "jahr": 1955,
    "text": "Roy Bryant und J. W. Milam entführen ihn nachts aus dem Haus seines Großonkels."
   },
   {
    "datum": "31. August 1955",
    "jahr": 1955,
    "text": "Seine Leiche wird aus dem Tallahatchie River geborgen."
   },
   {
    "datum": "3. September 1955",
    "jahr": 1955,
    "text": "In Chicago beginnt die Aufbahrung im offenen Sarg."
   },
   {
    "datum": "23. September 1955",
    "jahr": 1955,
    "text": "Die rein weiße, rein männliche Jury in Sumner spricht beide Angeklagten frei."
   },
   {
    "datum": "Januar 1956",
    "jahr": 1956,
    "text": "Im Magazin „Look“ schildern die Freigesprochenen gegen Bezahlung die Tat."
   },
   {
    "datum": "Dezember 2021",
    "jahr": 2021,
    "text": "Das Justizministerium schließt seine neu aufgenommenen Ermittlungen ohne Anklage."
   },
   {
    "datum": "29. März 2022",
    "jahr": 2022,
    "text": "Der Emmett Till Antilynching Act macht Lynchmord zum Bundesverbrechen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Emmett Till",
   "U.S. Department of Justice, Civil Rights Division: Emmett Till – Notice to Close File, Dezember 2021",
   "Timothy B. Tyson: The Blood of Emmett Till, 2017",
   "Mamie Till-Mobley, Christopher Benson: Death of Innocence, 2003",
   "Devery S. Anderson: Emmett Till. The Murder That Shocked the World and Propelled the Civil Rights Movement, 2015"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/emmett-till-0.jpg",
    "breite": 825,
    "hoehe": 1100,
    "zeigt": "Emmett Till, aufgenommen von seiner Mutter an Weihnachten 1954",
    "urheber": "Mamie Till Bradley",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Emmett_Till_1954.jpg"
   },
   {
    "datei": "bilder/dark/emmett-till-1.jpg",
    "breite": 900,
    "hoehe": 632,
    "zeigt": "Mose Wright zeigt im Gerichtssaal von Sumner auf die Angeklagten, 21. September 1955 (Foto: Ernest Withers)",
    "urheber": "Ernest Withers",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mose_Wright_pointing_to_defendants_in_the_murder_trial_of_Emmett_Till_enhanced.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "fall-nanavati",
  "titel": "Der Fall Nanavati",
  "untertitel": "Ein Marineoffizier, ein Boulevardblatt und die Geschworenen, Bombay 1959",
  "jahr": 1959,
  "zeitraum": "27. April 1959; Verfahren bis November 1961",
  "ort": "Bombay (heute Mumbai)",
  "land": "Indien",
  "lat": 19.0761,
  "lon": 72.8775,
  "ortQuelle": "https://en.wikipedia.org/wiki/Mumbai",
  "kategorie": "Mord",
  "status": "aufgeklärt",
  "kurz": "Ein gefeierter Marineoffizier erschießt den Liebhaber seiner Frau, Geschworene sprechen ihn frei, höhere Gerichte verurteilen ihn. Der Fall gilt als Wendepunkt für das Geschworenengericht in Indien – zum Teil zu Unrecht.",
  "tat": "Am 27. April 1959 erfuhr Commander Kawas Manekshaw Nanavati, ein angesehener Offizier der indischen Marine, von seiner Frau Sylvia, dass sie eine Affäre mit dem Geschäftsmann Prem Ahuja hatte. Er brachte seine Frau und die Kinder ins Kino, holte sich von seinem Schiff unter einem Vorwand einen Revolver und fuhr erst in Ahujas Büro, dann in dessen Wohnung. Dort fielen drei Schüsse, Ahuja starb. Nanavati stellte sich kurz darauf der Polizei. Er gab an, er habe Ahuja zur Rede stellen wollen, es sei zu einem Handgemenge gekommen und die Waffe sei dabei losgegangen. Die Anklage sah eine geplante Tötung.",
  "opfer": "Prem Bhagwandas Ahuja war ein Geschäftsmann aus der Sindhi-Gemeinschaft, die nach der Teilung Indiens 1947 vielfach als Flüchtlinge nach Bombay gekommen war. Er war ein Bekannter des Ehepaars Nanavati. In der Berichterstattung wurde er rasch zum skrupellosen Verführer, während seine Familie kaum Gehör fand. Seine Schwester Mamie Ahuja stimmte Jahre später schriftlich der Begnadigung Nanavatis zu. Der Fall zeigt, wie leicht ein Getöteter in der öffentlichen Erzählung zum Schuldigen werden kann.",
  "ermittlung": "Die Ermittlung war vergleichsweise einfach, denn der Schütze stand fest und hatte sich selbst gestellt. Entscheidend waren die Umstände: Lagen zwischen dem Geständnis der Frau und den Schüssen Stunden der Überlegung, war es Mord; handelte Nanavati im Affekt oder bei einem Gerangel, kam eine mildere Bewertung in Betracht. Die Anklage stützte sich auf den Ablauf des Tages, den Weg zum Schiff und zur Wohnung, die Lage der Wunden und Aussagen von Hausangestellten. Die Verteidigung baute auf das Bild eines ehrenhaften Offiziers, dessen Familie zerstört worden war. Die Wochenzeitung Blitz unter Russi Karanjia ergriff offen Partei für Nanavati und machte den Fall zum nationalen Ereignis.",
  "taeter": "Kawas Manekshaw Nanavati, Angehöriger der Parsen-Gemeinschaft, war ein dekorierter Marineoffizier mit guten Verbindungen bis in die Regierung. Dass er geschossen hatte, bestritt er nicht. Strittig war allein, ob er vorsätzlich tötete. Der Oberste Gerichtshof Indiens stellte 1961 fest, dass er nach dem Geständnis seiner Frau genug Zeit hatte, sich zu fassen, und dass die Tat nicht unter die Ausnahme der schweren und plötzlichen Provokation fiel. Er wurde damit rechtskräftig des Mordes schuldig gesprochen. Nach seiner Begnadigung wanderte er mit seiner Familie nach Kanada aus, wo er 2003 starb.",
  "prozess": "Vor dem Schwurgericht in Bombay sprachen die neun Geschworenen Nanavati im Herbst 1959 mit acht zu eins vom Mordvorwurf frei. Richter Ratilal Mehta hielt das für ein Fehlurteil und legte den Fall nach dem damaligen Strafprozessrecht dem Bombay High Court vor. Dieser befand, die Geschworenen seien falsch belehrt worden, und verurteilte Nanavati 1960 zu lebenslanger Haft. Der Oberste Gerichtshof bestätigte das Urteil am 24. November 1961. Der Gouverneur hatte die Strafe zwischenzeitlich ausgesetzt, was zu einem eigenen Verfassungsstreit führte. Nach gut drei Jahren Haft begnadigte ihn die Gouverneurin von Maharashtra, Vijaya Lakshmi Pandit, mit schriftlicher Zustimmung von Mamie Ahuja.",
  "legende": "Oft heißt es, der Fall Nanavati sei der letzte Geschworenenprozess Indiens gewesen und habe das Schwurgericht abgeschafft. Das stimmt so nicht. Die Law Commission hatte die Abschaffung schon 1958 empfohlen, und mehrere Gebiete, darunter die Stadt Bombay, schafften die Geschworenen um 1961 ab. Nach einer Untersuchung in der National Law School of India Review gab es danach noch rund zwanzig Geschworenenverfahren, die meisten in Kalkutta, das letzte 1973. Endgültig fiel das Schwurgericht mit der neuen Strafprozessordnung von 1973. Der Fall Nanavati war ein starkes Argument der Gegner, nicht der Auslöser. Auch das Bild vom Ehrenmann und vom Schurken stammt vor allem aus der Berichterstattung von Blitz.",
  "bedeutung": "Der Fall zeigte, wie stark Presse und öffentliche Stimmung Geschworene beeinflussen können, und lieferte den Befürwortern einer reinen Berufsrichterjustiz ihr bekanntestes Beispiel. Das Urteil des Obersten Gerichtshofs von 1961 ist bis heute ein Grundsatzurteil zur Abgrenzung von Mord und Totschlag bei Provokation. Zugleich prägte der Fall die indische Populärkultur; er wurde mehrfach verfilmt, unter anderem 1963 als „Yeh Raaste Hain Pyar Ke“ und 2016 als „Rustom“.",
  "zeitleiste": [
   {
    "datum": "27. April 1959",
    "jahr": 1959,
    "text": "Kawas Nanavati erschießt Prem Ahuja in dessen Wohnung und stellt sich der Polizei."
   },
   {
    "datum": "Herbst 1959",
    "jahr": 1959,
    "text": "Die Geschworenen sprechen ihn mit acht zu eins frei; der Richter legt den Fall dem High Court vor."
   },
   {
    "datum": "1960",
    "jahr": 1960,
    "text": "Der Bombay High Court verurteilt Nanavati wegen Mordes zu lebenslanger Haft."
   },
   {
    "datum": "24. November 1961",
    "jahr": 1961,
    "text": "Der Oberste Gerichtshof Indiens bestätigt die Verurteilung."
   },
   {
    "datum": "um 1961",
    "jahr": 1961,
    "text": "Die Stadt Bombay schafft Geschworenengerichte ab."
   },
   {
    "datum": "1973",
    "jahr": 1973,
    "text": "In Kalkutta endet der letzte Geschworenenprozess; die neue Strafprozessordnung sieht keine Geschworenen mehr vor."
   },
   {
    "datum": "24. Juli 2003",
    "jahr": 2003,
    "text": "Nanavati stirbt in Kanada."
   }
  ],
  "quellen": [
   "Supreme Court of India: K. M. Nanavati v. State of Maharashtra, Urteil vom 24. November 1961, AIR 1962 SC 605",
   "Bachi Karkaria: In Hot Blood. The Nanavati Case that Shook India, 2017",
   "Law Commission of India: Fourteenth Report, Reform of Judicial Administration, 1958",
   "Business Standard: The Nanavati papers, 2016"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/fall-nanavati-0.jpg",
    "breite": 900,
    "hoehe": 596,
    "zeigt": "Das Gebäude des Bombay High Court, der Nanavati 1960 verurteilte (Aufnahme 2020)",
    "urheber": "Rangan Datta Wiki",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bombay_High_Court.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "postzugraub-1963",
  "titel": "Der Große Postzugraub",
  "untertitel": "Der Überfall auf den Glasgow–London-Postzug, Buckinghamshire 1963",
  "jahr": 1963,
  "zeitraum": "8. August 1963",
  "ort": "Bridego Bridge bei Ledburn, Buckinghamshire",
  "land": "Großbritannien",
  "lat": 51.8789,
  "lon": -0.6694,
  "ortQuelle": "https://en.wikipedia.org/wiki/Great_Train_Robbery_(1963)",
  "kategorie": "Raub",
  "status": "aufgeklärt",
  "kurz": "Eine Bande erbeutet rund 2,6 Millionen Pfund aus einem Postzug. Der Raub wird zur Legende von den „Gentlemen-Räubern“ – der niedergeschlagene Lokführer passt nicht in dieses Bild.",
  "tat": "In der Nacht zum 8. August 1963 war der Postzug von Glasgow nach London Euston unterwegs, ein fahrendes Postamt, in dessen Wagen Postbeamte Sendungen sortierten. Kurz nach drei Uhr hielt der Lokführer an einem Signal bei Sears Crossing in Buckinghamshire, das Rot zeigte: Die Täter hatten das grüne Licht mit einem Handschuh abgedeckt und das rote mit einer Batterie zum Leuchten gebracht. Als der Beimann ausstieg, um zu telefonieren, wurde er überwältigt; der Lokführer wurde mit einem Gegenstand auf den Kopf geschlagen. Die Bande ließ die vorderen Wagen bis zur nahen Bridego Bridge fahren und lud dort in kurzer Zeit gut 120 Postsäcke mit gebrauchten Banknoten in einen Lastwagen. Die Beute belief sich auf rund 2,6 Millionen Pfund.",
  "opfer": "Lokführer Jack Mills, damals 58 Jahre alt, erlitt durch den Schlag eine schwere Kopfverletzung und musste den Zug unter Zwang weiterfahren. Er kehrte später für leichtere Aufgaben in den Dienst zurück, erholte sich aber nach übereinstimmenden Berichten nie von den Folgen; er starb 1970 an Leukämie, eine Verbindung zum Überfall wurde nicht festgestellt. Sein Beimann David Whitby wurde überwältigt und gefesselt. Die Postbeamten in den Wagen wurden bedroht und mussten sich auf den Boden legen. In Crewe erinnert heute eine Gedenktafel an Mills und Whitby.",
  "ermittlung": "Die Polizei von Buckinghamshire bat Scotland Yard um Hilfe. Die Täter hatten sich auf dem abgelegenen Hof Leatherslade Farm versteckt und ihn überstürzt verlassen, nachdem bekannt geworden war, dass die Polizei Höfe in der Umgebung absuchte. Als die Ermittler das Anwesen am 13. August 1963 fanden, stießen sie auf Postsäcke, Lebensmittel und Fingerabdrücke – unter anderem auf einem Monopoly-Spiel, mit dem sich die Bande die Zeit vertrieben hatte. Die Spuren führten zu bekannten Londoner Kriminellen. Binnen weniger Monate waren die meisten Beteiligten gefasst. Der größte Teil des Geldes tauchte jedoch nie wieder auf.",
  "taeter": "An dem Überfall waren nach Angaben der Encyclopaedia Britannica 15 Männer beteiligt, dazu Helfer, die Informationen über Fahrplan und Ladung lieferten und das Versteck vermittelten. Zu den bekanntesten gehörten der Planer Bruce Reynolds, Charlie Wilson, Gordon Goody, Roy James und Ronnie Biggs. Biggs, heute der berühmteste Name, war eine Randfigur: Er sollte einen pensionierten Lokführer mitbringen, der den Zug fahren sollte, die Diesellok aber nicht bedienen konnte. Einige Beteiligte wurden nie ermittelt oder nie verurteilt. Wer genau Jack Mills schlug, ist bis heute nicht gerichtlich festgestellt.",
  "prozess": "Der Hauptprozess fand 1964 in Aylesbury statt. Richter Edmund Davies verhängte im April 1964 außergewöhnlich harte Strafen, um ein Zeichen zu setzen: Sieben Angeklagte erhielten 30 Jahre Haft, darunter Biggs, Wilson, Goody und James. Wilson entkam im August 1964 aus dem Gefängnis Winson Green, Biggs im Juli 1965 aus Wandsworth; er lebte später jahrzehntelang in Brasilien, das ihn nicht auslieferte. 2001 kehrte er freiwillig nach Großbritannien zurück, kam wieder in Haft und wurde im August 2009 aus Gesundheitsgründen entlassen. Er starb im Dezember 2013.",
  "legende": "Der Raub wurde schon bald als Abenteuer von „Gentlemen“ erzählt, die niemanden ernsthaft verletzt und nur einer anonymen Institution geschadet hätten. Ronnie Biggs pflegte dieses Bild in Brasilien, verkaufte Interviews und Andenken und wurde zur Popfigur. Dem steht gegenüber, dass ein Lokführer niedergeschlagen und schwer verletzt wurde und dass die Täter gewaltbereite Berufsverbrecher waren. Auch die Vorstellung, Biggs sei ein Kopf der Bande gewesen, ist falsch. Gesichert sind Ablauf, Beute und Urteile; unsicher bleiben die vollständige Liste der Beteiligten und der Verbleib des größten Teils des Geldes.",
  "bedeutung": "Der Überfall war einer der größten Raubzüge der britischen Geschichte und löste eine Debatte über die Sicherheit der Geldtransporte der Post aus. Die 30-jährigen Strafen gelten bis heute als Beispiel für bewusst abschreckende Urteile und wurden schon damals als unverhältnismäßig kritisiert, gemessen an Strafen für Gewaltverbrechen. Zugleich zeigt der Fall, wie Medien und Popkultur – Filme, Bücher, Biggs’ Auftritte – aus Tätern Volkshelden machen können, während die Geschädigten aus dem Blick geraten.",
  "zeitleiste": [
   {
    "datum": "8. August 1963",
    "jahr": 1963,
    "text": "Überfall auf den Postzug Glasgow–London bei Sears Crossing und Bridego Bridge."
   },
   {
    "datum": "13. August 1963",
    "jahr": 1963,
    "text": "Die Polizei entdeckt das verlassene Versteck Leatherslade Farm."
   },
   {
    "datum": "April 1964",
    "jahr": 1964,
    "text": "Urteile in Aylesbury: Sieben Angeklagte erhalten je 30 Jahre Haft."
   },
   {
    "datum": "August 1964",
    "jahr": 1964,
    "text": "Charlie Wilson entkommt aus dem Gefängnis Winson Green in Birmingham."
   },
   {
    "datum": "Juli 1965",
    "jahr": 1965,
    "text": "Ronnie Biggs flieht aus dem Gefängnis Wandsworth."
   },
   {
    "datum": "1970",
    "jahr": 1970,
    "text": "Lokführer Jack Mills stirbt an Leukämie."
   },
   {
    "datum": "Mai 2001",
    "jahr": 2001,
    "text": "Biggs kehrt freiwillig aus Brasilien zurück und kommt erneut in Haft."
   },
   {
    "datum": "Dezember 2013",
    "jahr": 2013,
    "text": "Biggs stirbt, vier Jahre nach seiner Entlassung aus Gesundheitsgründen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Great Train Robbery",
   "The National Archives (UK): Akten zum Great Train Robbery (Bestände MEPO und HO)",
   "BBC News: Ronnie Biggs dies aged 84, 18. Dezember 2013"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/postzugraub-1963-0.jpg",
    "breite": 640,
    "hoehe": 468,
    "zeigt": "Die Bridego Bridge bei Ledburn, an der die Postsäcke ausgeladen wurden, Aufnahme von 2008 (Rob Farrow)",
    "urheber": "Rob Farrow",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bridego_Bridge_-_Great_Train_Robbery_Site_-_View_eastwards_-_geograph.org.uk_-_1058912.jpg"
   },
   {
    "datei": "bilder/dark/postzugraub-1963-1.jpg",
    "breite": 900,
    "hoehe": 900,
    "zeigt": "Gedenktafel für Lokführer Jack Mills und Beimann David Whitby im Bahnhof Crewe",
    "urheber": "Iantresman",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Jack_Mills_and_David_Whitby_memorial_plaque.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "ernesto-miranda",
  "titel": "Der Fall Ernesto Miranda",
  "untertitel": "Ein Geständnis in Phoenix und das Recht zu schweigen, 1963–1966",
  "jahr": 1963,
  "zeitraum": "März 1963 bis Juni 1966",
  "ort": "Phoenix, Arizona",
  "land": "USA",
  "lat": 33.448,
  "lon": -112.074,
  "ortQuelle": "https://en.wikipedia.org/wiki/Phoenix,_Arizona",
  "kategorie": "Entführung",
  "status": "aufgeklärt",
  "kurz": "Ein Geständnis ohne Belehrung führt 1966 zu einem der folgenreichsten Urteile des Obersten Gerichtshofs der USA. Seitdem müssen Verdächtige vor dem Verhör über ihre Rechte aufgeklärt werden.",
  "tat": "Anfang März 1963 wurde in Phoenix eine junge Frau auf dem nächtlichen Heimweg von der Arbeit in ein Auto gezerrt, an den Stadtrand gebracht und vergewaltigt. Am 13. März nahm die Polizei den 22-jährigen Ernesto Miranda fest, nachdem Angehörige der Frau einen Wagen beobachtet hatten, der ihrer Beschreibung entsprach und zu Miranda führte. Bei einer Gegenüberstellung erkannte sie ihn nicht sicher. Zwei Kriminalbeamte verhörten ihn rund zwei Stunden lang; danach unterschrieb er ein handschriftliches Geständnis. Auf dem vorgedruckten Formular stand, die Aussage sei freiwillig und in voller Kenntnis seiner Rechte erfolgt. Über sein Recht zu schweigen und einen Anwalt hinzuzuziehen hatte ihn niemand aufgeklärt.",
  "opfer": "Die Frau war achtzehn Jahre alt und arbeitete abends in einem Kino in Phoenix. Ihr Name wurde in den Gerichtsakten und in der seriösen Berichterstattung geschützt und wird hier nicht genannt. Sie musste in zwei Prozessen, 1963 und 1967, gegen Miranda aussagen. Über den Juristenstreit um das Verhör ist ihr Schicksal oft in den Hintergrund geraten: Der Fall, der heute als Lehrstück über Beschuldigtenrechte gilt, begann mit einem schweren Gewaltverbrechen an ihr.",
  "ermittlung": "Die Ermittlung war nach den Maßstäben von 1963 gewöhnlich, und gerade das machte sie zum Präzedenzfall. Verhöre in Polizeigewahrsam fanden ohne Anwalt statt, oft ohne jeden Hinweis auf Rechte, und ein Geständnis galt als stärkster Beweis. Mirandas Pflichtverteidiger Alvin Moore beantragte im Prozess, das Geständnis nicht zu verwerten, weil sein Mandant nicht über seine Rechte belehrt worden war; das Gericht lehnte ab. Nach späteren Darstellungen hatten die Beamten Miranda zudem glauben lassen, er sei bei der Gegenüberstellung erkannt worden. Die Anwälte John J. Flynn und John P. Frank übernahmen den Fall für die Bürgerrechtsorganisation ACLU unentgeltlich und brachten ihn vor den Obersten Gerichtshof.",
  "taeter": "Ernesto Arturo Miranda, 1941 in Mesa, Arizona, geboren, war vor 1963 bereits mehrfach straffällig geworden, unter anderem wegen versuchter Vergewaltigung und Einbrüchen. Er hatte die Schule früh verlassen und arbeitete zur Zeit der Tat als Lagerarbeiter. An seiner Täterschaft ließ auch der zweite Prozess keinen Zweifel. Das berühmte Urteil sprach ihn nicht frei, sondern betraf allein die Frage, ob sein Geständnis verwertet werden durfte. Nach seiner Entlassung 1972 wurde er am 31. Januar 1976 bei einem Streit in einer Bar in Phoenix erstochen.",
  "prozess": "Im Juni 1963 wurde Miranda wegen Entführung und Vergewaltigung zu 20 bis 30 Jahren Haft verurteilt; das Oberste Gericht Arizonas bestätigte das 1965. Der Oberste Gerichtshof der USA hob das Urteil am 13. Juni 1966 mit fünf zu vier Stimmen auf. Chief Justice Earl Warren schrieb, ein Beschuldigter in Gewahrsam müsse vor jeder Befragung erfahren, dass er schweigen dürfe, dass alles gegen ihn verwendet werden könne und dass er Anspruch auf einen Anwalt habe, notfalls auf Staatskosten. Im neuen Prozess 1967 blieb das Geständnis ausgeschlossen; Miranda wurde aufgrund der Aussage seiner früheren Lebensgefährtin, der er die Tat gestanden hatte, erneut zu 20 bis 30 Jahren verurteilt.",
  "legende": "Aus Kriminalfilmen stammt die Vorstellung, eine Festnahme sei ungültig, wenn die Belehrung fehlt, und der Täter komme dann frei. Tatsächlich gilt die Pflicht nur vor einer Befragung in Gewahrsam; wird sie verletzt, darf allein die Aussage nicht als Beweis gegen den Beschuldigten verwendet werden, andere Beweise bleiben verwertbar. Der Wortlaut „You have the right to remain silent …“ steht so nicht im Urteil, sondern geht auf Formulierungen der Polizeibehörden zurück, die danach auf Karten gedruckt wurden. Dass Miranda selbst nach seiner Entlassung signierte Belehrungskarten verkaufte, wird in Presseberichten übereinstimmend erzählt, Details sind aber schlecht belegt.",
  "bedeutung": "Die Miranda-Belehrung verlegte den Schutz des Beschuldigten vom Gerichtssaal in den Verhörraum, wo die meisten Strafverfahren tatsächlich entschieden werden. Kritiker warnten, Geständnisse würden ausbleiben; der Kongress versuchte 1968, das Urteil per Gesetz zu umgehen. Der Oberste Gerichtshof bestätigte Miranda im Jahr 2000 im Fall Dickerson gegen die Vereinigten Staaten als Verfassungsrecht. Seither wurden die Regeln in vielen Entscheidungen eingeschränkt, 2022 etwa schloss das Gericht im Fall Vega gegen Tekoh Schadenersatzklagen wegen fehlender Belehrung aus. Ähnliche Belehrungspflichten kennen heute viele Rechtsordnungen, in Deutschland § 136 der Strafprozessordnung.",
  "zeitleiste": [
   {
    "datum": "März 1963",
    "jahr": 1963,
    "text": "Eine junge Frau wird in Phoenix entführt und vergewaltigt."
   },
   {
    "datum": "13. März 1963",
    "jahr": 1963,
    "text": "Ernesto Miranda wird festgenommen, verhört und unterschreibt ein Geständnis."
   },
   {
    "datum": "Juni 1963",
    "jahr": 1963,
    "text": "Ein Gericht in Phoenix verurteilt ihn zu 20 bis 30 Jahren Haft."
   },
   {
    "datum": "1965",
    "jahr": 1965,
    "text": "Das Oberste Gericht Arizonas bestätigt die Verurteilung."
   },
   {
    "datum": "13. Juni 1966",
    "jahr": 1966,
    "text": "Der Oberste Gerichtshof der USA entscheidet Miranda v. Arizona mit fünf zu vier Stimmen."
   },
   {
    "datum": "1967",
    "jahr": 1967,
    "text": "Im zweiten Prozess wird Miranda ohne das Geständnis erneut verurteilt."
   },
   {
    "datum": "31. Januar 1976",
    "jahr": 1976,
    "text": "Miranda wird in Phoenix bei einem Streit in einer Bar getötet."
   },
   {
    "datum": "26. Juni 2000",
    "jahr": 2000,
    "text": "Im Fall Dickerson bestätigt der Oberste Gerichtshof die Belehrungspflicht als Verfassungsrecht."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Miranda v. Arizona",
   "Miranda v. Arizona, 384 U.S. 436 (1966), Urteil des U.S. Supreme Court",
   "Gary L. Stuart: Miranda. The Story of America's Right to Remain Silent, 2004",
   "Arizona State Library, Archives and Public Records: Ernesto Miranda (Arizona Memory Project)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/ernesto-miranda-0.jpg",
    "breite": 900,
    "hoehe": 908,
    "zeigt": "Fingerabdruckkarte Ernesto Mirandas vom 15. Juli 1963 (Arizona Board of Pardons and Paroles)",
    "urheber": "Arizona Board Pardons and Paroles",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ernesto_Miranda_fingerprints.jpg"
   },
   {
    "datei": "bilder/dark/ernesto-miranda-1.jpg",
    "breite": 578,
    "hoehe": 1100,
    "zeigt": "Ernesto Miranda während seines zweiten Prozesses, Februar 1967 (Agenturfoto)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ernesto_Miranda_1967.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "zodiac",
  "titel": "Der Zodiac-Killer",
  "untertitel": "Morde und Chiffrenbriefe in Nordkalifornien 1968–1969",
  "jahr": 1968,
  "zeitraum": "Dezember 1968 bis Oktober 1969; Briefe bis 1974",
  "ort": "Vallejo, Lake Berryessa und San Francisco, Kalifornien",
  "land": "USA",
  "lat": 38.1131,
  "lon": -122.2358,
  "ortQuelle": "https://en.wikipedia.org/wiki/Vallejo,_California",
  "kategorie": "Serienmord",
  "status": "ungeklärt",
  "kurz": "Ein Unbekannter tötet in Nordkalifornien mindestens fünf Menschen und verhöhnt Polizei und Presse mit Briefen und Chiffren. Eine davon wurde erst 2020 entschlüsselt – der Täter ist bis heute nicht ermittelt.",
  "tat": "Zwischen Dezember 1968 und Oktober 1969 überfiel ein Täter in der Gegend um San Francisco junge Menschen, meist Paare an abgelegenen Orten. Am 20. Dezember 1968 wurden an der Lake Herman Road bei Vallejo zwei Jugendliche erschossen. Am 4. Juli 1969 griff er auf einem Parkplatz in Blue Rock Springs, ebenfalls Vallejo, ein Paar an; die Frau starb, der Mann überlebte. Am 27. September 1969 stach er am Lake Berryessa auf ein Studentenpaar ein, die Frau starb, der Mann überlebte. Am 11. Oktober 1969 erschoss er in San Francisco einen Taxifahrer. Ab Juli 1969 schickte er Briefe an Zeitungen, nannte sich selbst „Zodiac“ und forderte die Veröffentlichung seiner Chiffren.",
  "opfer": "Fünf Tötungen werden dem Täter von den Behörden zugerechnet. Die Getöteten waren David Faraday (17) und Betty Lou Jensen (16), zwei Schüler auf ihrer ersten Verabredung; Darlene Ferrin (22), Kellnerin und junge Mutter; Cecelia Shepard (22), Studentin; und Paul Stine (29), der neben seinem Studium Taxi fuhr. Zwei Männer überlebten schwer verletzt und konnten den Ermittlern Hinweise geben: Michael Mageau in Vallejo und Bryan Hartnell am Lake Berryessa.",
  "ermittlung": "Die Taten fielen in die Zuständigkeit mehrerer Behörden – der Polizei von Vallejo, des Sheriffs von Napa County und der Polizei von San Francisco –, was die Zusammenarbeit erschwerte. Nach dem Mord in San Francisco entstand aus Zeugenaussagen ein Phantombild, das die Polizei auf Fahndungsplakaten verbreitete. Handschrift, Fingerabdrücke und später DNA-Spuren von Briefmarken und Umschlägen wurden ausgewertet, ohne einen Treffer zu liefern. Die erste Chiffre, aufgeteilt auf drei Zeitungen, entschlüsselte im August 1969 das Ehepaar Donald und Bettye Harden. Die zweite, 340 Zeichen lange Chiffre vom November 1969 lösten erst Anfang Dezember 2020 der Amerikaner David Oranchak, der Australier Sam Blake und der Belgier Jarl Van Eycke mit Computerhilfe; das FBI bestätigte die Lösung am 11. Dezember 2020. Die Nachricht enthielt keinen Namen.",
  "taeter": "Der Täter ist unbekannt. Er wurde nie angeklagt, nie verurteilt und nie zweifelsfrei identifiziert. Als wichtigster Verdächtiger der Polizei galt in den 1970er und 1980er Jahren Arthur Leigh Allen. Er wurde nie angeklagt; Vergleiche von Handschrift, Fingerabdrücken und später DNA ergaben keinen belastbaren Beleg gegen ihn. Allen starb 1992. Immer wieder präsentieren Privatleute und selbsternannte Ermittlergruppen angebliche Täter; keine dieser Behauptungen wurde von den zuständigen Behörden bestätigt. Für diese Fallakte gilt: Ein Name, der nicht durch Ermittlungsergebnisse gestützt ist, wird nicht als Täter genannt.",
  "prozess": "Es gab keinen Prozess, weil niemand angeklagt wurde. Die Polizei von San Francisco stufte den Fall 2004 als inaktiv ein und öffnete ihn einige Jahre später wieder; die beteiligten Behörden in Vallejo, Napa County und San Francisco führen ihn weiterhin als offen. Nach der Entschlüsselung der 340-Zeichen-Chiffre erklärte das FBI im Dezember 2020 lediglich, die Lösung sei bekannt, und verwies auf die laufenden Ermittlungen.",
  "legende": "In seinen Briefen behauptete der Täter, weit mehr Menschen getötet zu haben, in einem späteren Schreiben nannte er 37 Opfer. Belegt sind fünf Tötungen und zwei Mordversuche; weitere Zuschreibungen sind Vermutungen. Ebenso verbreitet ist die Erwartung, die Chiffren enthielten seinen Namen. Die beiden gelösten Texte tun das nicht: Der erste spricht von Töten als Vergnügen und von „Sklaven“ im Jenseits, der zweite verspottet die Ermittler und weist zurück, er sei der Anrufer in einer Fernsehsendung gewesen. Zwei kurze Chiffren gelten wegen ihrer Kürze als kaum eindeutig lösbar.",
  "bedeutung": "Der Fall zeigte, wie ein Täter die Presse gezielt als Bühne nutzen konnte: Zeitungen druckten seine Chiffren auf Verlangen ab, und jede Veröffentlichung verstärkte die Angst in der Region. Die Zersplitterung der Zuständigkeiten wurde zum Lehrstück für die Notwendigkeit behördenübergreifender Ermittlungen. Die Lösung des Z340 nach 51 Jahren gilt in der Kryptologie als Beispiel dafür, wie Rechenleistung und die Zusammenarbeit von Amateuren alte Rätsel knacken können – auch wenn sie den Mordfall selbst nicht aufklärte.",
  "zeitleiste": [
   {
    "datum": "20. Dezember 1968",
    "jahr": 1968,
    "text": "Zwei Jugendliche werden an der Lake Herman Road bei Vallejo erschossen."
   },
   {
    "datum": "4. Juli 1969",
    "jahr": 1969,
    "text": "Angriff in Blue Rock Springs, Vallejo: eine Frau stirbt, ein Mann überlebt."
   },
   {
    "datum": "31. Juli 1969",
    "jahr": 1969,
    "text": "Drei Zeitungen erhalten Briefe mit je einem Teil einer Chiffre."
   },
   {
    "datum": "August 1969",
    "jahr": 1969,
    "text": "Donald und Bettye Harden entschlüsseln die erste Chiffre."
   },
   {
    "datum": "27. September 1969",
    "jahr": 1969,
    "text": "Messerangriff am Lake Berryessa: eine Studentin stirbt, ihr Begleiter überlebt."
   },
   {
    "datum": "11. Oktober 1969",
    "jahr": 1969,
    "text": "Ein Taxifahrer wird in San Francisco erschossen."
   },
   {
    "datum": "8. November 1969",
    "jahr": 1969,
    "text": "Der San Francisco Chronicle erhält die 340-Zeichen-Chiffre."
   },
   {
    "datum": "11. Dezember 2020",
    "jahr": 2020,
    "text": "Das FBI bestätigt die Entschlüsselung des Z340 durch drei private Codeknacker."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Zodiac killer",
   "CBS News: Zodiac Killer's cipher solved by amateur codebreakers after 51 years, 11. Dezember 2020",
   "FBI San Francisco: Stellungnahme zur Lösung der 340-Zeichen-Chiffre, 11. Dezember 2020",
   "Oranchak, David / Blake, Sam / Van Eycke, Jarl: The Solution of the Zodiac Killer’s 340-Character Cipher, Cryptologia, 2023"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/zodiac-0.jpg",
    "breite": 530,
    "hoehe": 799,
    "zeigt": "Die 340-Zeichen-Chiffre, die der San Francisco Chronicle im November 1969 erhielt und die erst 2020 entschlüsselt wurde",
    "urheber": "Verfasser unbekannt (Brief)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:4abc_-_San_Francisco_Chronicle_Dripping_Pen_Card_November_8_1969_340_Cipher_COLOR.jpg"
   },
   {
    "datei": "bilder/dark/zodiac-1.jpg",
    "breite": 826,
    "hoehe": 1100,
    "zeigt": "Zweite Seite des Briefes vom 31. Juli 1969 an die Zeitungen in San Francisco und Vallejo",
    "urheber": "Verfasser unbekannt (Brief)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Zodiac-July1969.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "isdal-frau",
  "titel": "Die Isdal-Frau",
  "untertitel": "Eine Tote ohne Namen im Isdalen bei Bergen, 1970",
  "jahr": 1970,
  "zeitraum": "November 1970; Ermittlungen wieder aufgenommen ab 2016",
  "ort": "Isdalen am Nordhang des Ulriken, Bergen",
  "land": "Norwegen",
  "lat": 60.3939,
  "lon": 5.3757,
  "ortQuelle": "https://commons.wikimedia.org/wiki/File:Isdalen.JPG",
  "kategorie": "Mord",
  "status": "ungeklärt",
  "kurz": "Eine Frau mit mindestens acht falschen Identitäten stirbt 1970 in einem Tal bei Bergen. Bis heute kennt niemand ihren Namen; Isotopenanalysen haben ihre Herkunft eingegrenzt, aber nicht geklärt.",
  "tat": "Am 29. November 1970 fanden ein Mann und seine beiden Töchter bei einer Wanderung im Isdalen, einem abgelegenen Tal am Hausberg Ulriken in Bergen, die teilweise verbrannte Leiche einer Frau. Um sie herum lagen verkohlte Gegenstände: eine Likörflasche, Plastikflaschen, Kleidung, ein Schirm, eine Uhr, Schmuck. Aus allen Kleidungsstücken waren die Etiketten entfernt worden. Die Obduktion ergab, dass sie eine große Menge des Schlafmittels Fenemal genommen hatte und an einer Kombination aus dieser Vergiftung und Kohlenmonoxid gestorben war; Ruß in der Lunge zeigte, dass sie beim Brand noch lebte. Ob sie sich selbst tötete oder getötet wurde, ist bis heute nicht geklärt.",
  "opfer": "Über die Frau ist vor allem bekannt, was sie verbarg. Zeugen in Hotels beschrieben sie als gepflegt, zurückhaltend und auffallend gut gekleidet. Sie sprach nach deren Angaben Deutsch, Flämisch und gebrochenes Englisch und reiste in den Monaten vor ihrem Tod durch Norwegen und andere europäische Länder. Sie benutzte mindestens acht Namen, darunter Fenella Lorch, Vera Jarle und Claudia Tielt. Ihr Alter wurde damals auf 25 bis 40 Jahre geschätzt. Sie wurde Anfang 1971 auf dem Friedhof Møllendal in Bergen beigesetzt, ohne dass ihr Name bekannt war.",
  "ermittlung": "Wenige Tage nach dem Fund entdeckte die Polizei im Bahnhof Bergen zwei Koffer, die ihr per Fingerabdruck zugeordnet wurden. Darin lagen Perücken, Kleidung, Brillen ohne Sehstärke, Sonnenbrillen, Landkarten, Fahrpläne, deutsches Geld und ein Notizblock mit verschlüsselten Einträgen. Diese ließen sich als Daten und Orte ihrer Reisen deuten, etwa nach Paris, Oslo, Stavanger und Trondheim. Die Ermittler verfolgten ihre Spur durch Hotels, fanden aber keinen Pass auf ihren echten Namen. Die Polizei schloss den Fall als wahrscheinlichen Suizid. Ab 2016 wurde der Fall neu aufgerollt, die Kriminalpolizeizentrale Kripos ließ erhaltene Proben neu untersuchen; 2017 wurde über Interpol eine internationale Suchmeldung veröffentlicht.",
  "taeter": "Ob es einen Täter gibt, ist offen. Die norwegische Polizei kam 1971 zu dem Schluss, dass es sich wahrscheinlich um einen Suizid handelte. Dagegen wird angeführt, dass die Menge der Tabletten und die Umstände des Brandes schwer mit einer Selbsttötung zu vereinbaren seien. Ein Verdächtiger wurde nie benannt. Die falschen Identitäten, die Perücken und die verschlüsselten Notizen haben früh Vermutungen genährt, die Frau sei als Agentin tätig gewesen, etwa weil manche ihrer Reisebewegungen nach später freigegebenen Unterlagen der Streitkräfte zeitlich zu geheimen Tests der norwegischen Seezielrakete Penguin passten. Ein Beleg für eine Agententätigkeit ist das nicht; die These bleibt Spekulation.",
  "prozess": "Es gab weder Anklage noch Prozess. Der Fall wurde 1971 polizeilich als wahrscheinlicher Suizid abgeschlossen und die Tote ohne Namen beigesetzt. Die Wiederaufnahme ab 2016 zielt in erster Linie darauf, die Frau zu identifizieren; ein Strafverfahren ist nicht anhängig. Sollte sich ihr Name klären, könnte das auch die Frage nach den Umständen ihres Todes neu aufwerfen.",
  "legende": "Um die Isdal-Frau hat sich eine Spionagelegende gebildet, die von Büchern, Dokumentationen und Podcasts immer wieder erzählt wird. Gesichert ist nur, dass sie mit falschen Namen reiste, Perücken besaß, ihre Spuren gezielt verwischte und verschlüsselte Notizen führte – Hinweise auf ein Doppelleben, aber kein Beweis für Spionage. Ob der norwegische Nachrichtendienst damals Einfluss auf die Polizeiarbeit nahm, wie ein Bericht der NZZ 2023 nahelegte, ist nicht abschließend geklärt. Unsicher bleibt bis heute auch, ob sie allein starb oder getötet wurde.",
  "bedeutung": "Der Fall zeigt, was moderne Forensik an jahrzehntealten Spuren leisten kann. Analysen stabiler Isotope in ihren Zähnen, über die NRK und BBC 2017 und 2018 berichteten, legen nahe, dass sie um 1930, mit einer Unsicherheit von einigen Jahren, in der Gegend um Nürnberg geboren wurde und als Kind nach Frankreich oder ins deutsch-französische Grenzgebiet zog. Erstmals wurde zudem ein DNA-Profil erstellt. Die gemeinsame Recherche von NRK und BBC World Service im Podcast „Death in Ice Valley“ machte den Fall international bekannt und brachte neue Zeugen hervor.",
  "zeitleiste": [
   {
    "datum": "23. November 1970",
    "jahr": 1970,
    "text": "Die Frau checkt aus dem Hotel Hordaheimen in Bergen aus."
   },
   {
    "datum": "29. November 1970",
    "jahr": 1970,
    "text": "Wanderer finden die teilweise verbrannte Leiche im Isdalen."
   },
   {
    "datum": "Anfang Dezember 1970",
    "jahr": 1970,
    "text": "Die Polizei entdeckt ihre beiden Koffer im Bahnhof Bergen."
   },
   {
    "datum": "Anfang 1971",
    "jahr": 1971,
    "text": "Beisetzung ohne Namen auf dem Friedhof Møllendal; der Fall wird als wahrscheinlicher Suizid geschlossen."
   },
   {
    "datum": "2016",
    "jahr": 2016,
    "text": "Der Fall wird neu aufgerollt, Proben werden mit modernen Methoden untersucht."
   },
   {
    "datum": "Mai 2017",
    "jahr": 2017,
    "text": "Kripos veröffentlicht über Interpol eine internationale Suchmeldung."
   },
   {
    "datum": "2017–2018",
    "jahr": 2017,
    "text": "Isotopenanalysen deuten auf eine Geburt um 1930 im Raum Nürnberg."
   }
  ],
  "quellen": [
   "NRK / BBC World Service: Death in Ice Valley (Podcast), 2018",
   "The Local Norway: Norway makes international appeal to solve 46-year-old mystery, 15. Mai 2017",
   "Kripos (Nationale Kriminalpolizei Norwegen): Suchmeldung zur Isdal-Frau, 2017"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/isdal-frau-0.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Das Isdalen in Bergen, das Tal, in dem die Frau 1970 gefunden wurde",
    "urheber": "Reinhardheydt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Isdalen.JPG"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "harold-shipman",
  "titel": "Harold Shipman",
  "untertitel": "Der Hausarzt von Hyde und die Shipman-Untersuchung",
  "jahr": 1971,
  "zeitraum": "1971 bis 1998 (nach den Feststellungen der Shipman-Untersuchung)",
  "ort": "Hyde, Greater Manchester",
  "land": "Großbritannien",
  "lat": 53.4474,
  "lon": -2.082,
  "ortQuelle": "https://en.wikipedia.org/wiki/Hyde,_Greater_Manchester",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Ein angesehener Hausarzt tötete über Jahrzehnte Patienten, ohne dass es auffiel – sein Fall veränderte in England die Kontrolle von Ärzten, Totenscheinen und Betäubungsmitteln.",
  "tat": "Harold Shipman war Allgemeinarzt, zuletzt mit eigener Praxis in der Kleinstadt Hyde bei Manchester. Über viele Jahre tötete er Patientinnen und Patienten mit Überdosen des Opioids Diamorphin, meist bei Hausbesuchen, und stellte anschließend selbst den Totenschein aus, in dem er eine natürliche Todesursache angab. Weil die Verstorbenen alt waren und der Arzt als fürsorglich galt, schöpfte lange kaum jemand Verdacht. Verurteilt wurde er für 15 Morde. Die öffentliche Untersuchung unter der Richterin Dame Janet Smith kam 2005 zu dem Schluss, dass er zwischen 1971 und 1998 etwa 250 Patienten getötet hatte, von denen sich 218 eindeutig benennen ließen.",
  "opfer": "Die meisten Opfer waren ältere Menschen, überwiegend Frauen, viele lebten allein und vertrauten ihrem Hausarzt seit Jahren. In der Kleinstadt galt Shipman als besonders aufmerksamer Arzt, der sich Zeit für Hausbesuche nahm. Sein letztes Opfer war die 81-jährige Kathleen Grundy, die im Juni 1998 starb. Für viele Familien kam die Gewissheit erst Jahre später, als die Untersuchung Fall für Fall prüfte, ob ein Angehöriger eines natürlichen Todes gestorben war oder nicht.",
  "ermittlung": "Im März 1998 meldete eine Ärztin aus einer Nachbarpraxis dem Coroner ihre Sorge über die hohe Zahl von Todesfällen unter Shipmans Patienten. Die Polizei von Greater Manchester ermittelte verdeckt, setzte dafür aber unerfahrene Beamte ein und schloss den Vorgang am 17. April 1998 ohne Ergebnis. Den Ausschlag gab ein plumper Fehler des Täters: Nach dem Tod von Kathleen Grundy tauchte ein Testament auf, das Shipman ihr Vermögen von rund 386.000 Pfund zusprach. Ihre Tochter hielt es für gefälscht und ging zur Polizei. Die Exhumierung ergab tödliche Mengen Diamorphin. Am 7. September 1998 wurde Shipman festgenommen. Weitere Exhumierungen und die Auswertung des Praxiscomputers, in dem er Krankenakten nachträglich verändert hatte, belasteten ihn in weiteren Fällen.",
  "taeter": "Harold Frederick Shipman wurde am 14. Januar 1946 in Nottingham geboren und schloss 1970 sein Medizinstudium in Leeds ab. Nach Jahren im Krankenhaus von Pontefract wurde er Hausarzt in Todmorden. Dort flog 1975 auf, dass er Rezepte für das Opioid Pethidin für den Eigenbedarf gefälscht hatte; 1976 wurde er zu einer Geldstrafe verurteilt, durfte aber weiter praktizieren. Ab 1977 arbeitete er in einer Gemeinschaftspraxis in Hyde, in den 1990er Jahren mit eigener Praxis. Ein Motiv hat Shipman nie genannt; er bestritt alle Vorwürfe bis zuletzt.",
  "prozess": "Der Prozess vor dem Crown Court in Preston dauerte vom 5. Oktober 1999 bis zum 31. Januar 2000. Die Geschworenen sprachen Shipman des Mordes an 15 Patientinnen und der Testamentsfälschung schuldig. Er erhielt 15 lebenslange Freiheitsstrafen; der Richter empfahl, dass er nie freikommen solle. Am 11. Februar 2000 strich ihn der General Medical Council aus dem Ärzteregister. Am 13. Januar 2004 nahm sich Shipman im Gefängnis von Wakefield das Leben. Für die übrigen Todesfälle gab es nie ein Strafverfahren.",
  "legende": "Häufig wird Shipman als Mörder von „250 Menschen“ bezeichnet. Gerichtlich festgestellt sind 15 Morde; die höheren Zahlen stammen aus der öffentlichen Untersuchung, die kein Strafgericht war, ihre Ergebnisse aber sorgfältig Fall für Fall begründete. Über sein Motiv wird viel spekuliert, etwa über einen Zusammenhang mit dem Krebstod seiner Mutter, den er als Jugendlicher miterlebte. Belegt ist ein solcher Zusammenhang nicht; Shipman selbst hat sich nie erklärt. Auch dass erst das gefälschte Testament ihn überführte, ist nur halb richtig: Ein Verdacht lag schon Monate zuvor bei der Polizei.",
  "bedeutung": "Die Shipman-Untersuchung legte von 2002 bis 2005 sechs Berichte vor und zeigte, wie leicht ein Arzt Todesfälle verschleiern konnte. Sie kritisierte die Totenscheinpraxis, die Arbeit der Coroner, die Kontrolle von Betäubungsmitteln und die Ärztekammer, die eher die Interessen der Ärzte als der Patienten schütze. Folgen waren strengere Regeln für Betäubungsmittel, die Pflicht zur regelmäßigen Wiederzulassung von Ärzten ab Dezember 2012 und, mit langer Verzögerung, das gesetzliche System unabhängiger Medical Examiner, das seit dem 9. September 2024 jeden Todesfall in England und Wales prüfen lässt.",
  "zeitleiste": [
   {
    "datum": "1976",
    "jahr": 1976,
    "text": "Shipman wird wegen gefälschter Pethidin-Rezepte zu einer Geldstrafe verurteilt und praktiziert weiter."
   },
   {
    "datum": "März 1998",
    "jahr": 1998,
    "text": "Eine Ärztin meldet Bedenken; die Polizei stellt ihre verdeckte Prüfung im April ohne Ergebnis ein."
   },
   {
    "datum": "24. Juni 1998",
    "jahr": 1998,
    "text": "Kathleen Grundy stirbt; kurz darauf taucht ein gefälschtes Testament zugunsten Shipmans auf."
   },
   {
    "datum": "7. September 1998",
    "jahr": 1998,
    "text": "Shipman wird festgenommen."
   },
   {
    "datum": "31. Januar 2000",
    "jahr": 2000,
    "text": "Das Gericht in Preston verurteilt ihn wegen 15 Morden zu lebenslanger Haft."
   },
   {
    "datum": "13. Januar 2004",
    "jahr": 2004,
    "text": "Shipman nimmt sich im Gefängnis Wakefield das Leben."
   },
   {
    "datum": "27. Januar 2005",
    "jahr": 2005,
    "text": "Der Abschlussbericht der Untersuchung geht von etwa 250 Opfern aus, 218 davon namentlich festgestellt."
   },
   {
    "datum": "9. September 2024",
    "jahr": 2024,
    "text": "In England und Wales wird die unabhängige Prüfung aller Todesfälle durch Medical Examiner Pflicht."
   }
  ],
  "quellen": [
   "The National Archives (Kew): Records of the Shipman Inquiry, Bestand C16350",
   "The Shipman Inquiry: Sixth Report – Shipman: The Final Report, 2005",
   "The Irish Times: Shipman killed 15 as a student doctor – report, 27.1.2005",
   "GOV.UK: An overview of the death certification reforms, 2024"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/harold-shipman-0.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Der „Garden of Tranquility“ im Hyde Park von Hyde, eine Gedenkstätte für die Opfer Shipmans (Aufnahme 2007)",
    "urheber": "Gerald England",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Garden_of_Tranquility_-_geograph.org.uk_-_1005040.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "ted-bundy",
  "titel": "Ted Bundy",
  "untertitel": "Mordserie in den USA 1974–1978",
  "jahr": 1974,
  "zeitraum": "Januar 1974 bis Februar 1978",
  "ort": "Washington, Oregon, Utah, Colorado, Idaho, Kalifornien und Florida; Hauptschauplatz der Anklage: Tallahassee",
  "land": "USA",
  "lat": 30.4428,
  "lon": -84.2147,
  "ortQuelle": "https://en.wikipedia.org/wiki/Tallahassee,_Florida",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Ein Mann tötet über vier Jahre in mehreren Bundesstaaten junge Frauen und Mädchen. Sein Prozess in Miami 1979 gehört zu den ersten, die landesweit im Fernsehen zu sehen waren.",
  "tat": "Ab Anfang 1974 verschwanden im Bundesstaat Washington und in Oregon junge Frauen, meist Studentinnen. Ab Herbst 1974 setzte sich die Serie in Utah fort, 1975 in Colorado. Der Täter sprach Frauen oft unter einem Vorwand an, etwa mit einem vorgetäuschten Armgips, und lockte sie zu seinem Auto. Nach zwei Fluchten aus der Haft in Colorado reiste er nach Florida. Am 15. Januar 1978 drang er in Tallahassee in das Haus der Studentinnenverbindung Chi Omega ein, tötete zwei Frauen und verletzte zwei weitere schwer; in derselben Nacht verletzte er eine weitere Studentin in einer nahe gelegenen Wohnung. Am 9. Februar 1978 entführte und tötete er in Lake City ein zwölfjähriges Mädchen.",
  "opfer": "Die meisten Opfer waren junge Frauen zwischen dem späten Teenageralter und Mitte zwanzig, viele Studentinnen, die auf dem Weg zu einer Veranstaltung, zur Arbeit oder nach Hause waren. Die Urteile in Florida betreffen Lisa Levy und Margaret Bowman, zwei Studentinnen der Florida State University, und die zwölfjährige Schülerin Kimberly Leach. Viele weitere Opfer wurden erst Jahre später oder nie gefunden; mehrere Familien erfuhren erst durch die Geständnisse vor der Hinrichtung, was mit ihren Angehörigen geschehen war. Überlebende sagten in den Prozessen aus und trugen so zu den Verurteilungen bei.",
  "ermittlung": "Die Ermittlungen litten darunter, dass Polizeibehörden verschiedener Staaten kaum Informationen austauschten. In Washington führten Zeugenaussagen zu einem Mann namens „Ted“ mit einem VW Käfer, doch die Hinweise wurden nicht zusammengeführt. Im August 1975 hielt ihn die Polizei in Utah bei einer Verkehrskontrolle an und fand Einbruchswerkzeug im Wagen; 1976 wurde er dort wegen schwerer Entführung einer jungen Frau verurteilt, die ihm entkommen war. Nach seiner Flucht aus Colorado wurde er am 15. Februar 1978 bei Pensacola in einem gestohlenen Auto festgenommen. Im Chi-Omega-Prozess stützte sich die Anklage unter anderem auf Zeugenaussagen und einen Bissspurenvergleich – eine Methode, die heute wissenschaftlich stark umstritten ist.",
  "taeter": "Theodore Robert Bundy, geboren 1946 in Burlington, Vermont, studierte Psychologie und begann ein Jurastudium. Er wurde dreimal zum Tode verurteilt. Bis kurz vor seiner Hinrichtung bestritt er alle Taten. In den Tagen davor gestand er Ermittlern aus mehreren Bundesstaaten nach Berichten der Zeitung St. Petersburg Times rund 30 Tötungen zwischen Washington und Florida. Die Ermittler bewerteten diese Geständnisse vorsichtig, weil sie teils vage blieben und zugleich dazu dienten, einen Aufschub der Hinrichtung zu erreichen. Die tatsächliche Zahl seiner Opfer ist nicht gesichert.",
  "prozess": "Wegen der Berichterstattung in Tallahassee wurde der Prozess um die Chi-Omega-Taten nach Miami verlegt. Er begann im Juni 1979 vor Richter Edward Cowart; Bundy übernahm dabei zeitweise selbst seine Verteidigung. Am 24. Juli 1979 sprachen ihn die Geschworenen schuldig, eine Woche später erhielt er zwei Todesurteile. Im Februar 1980 wurde er in Orlando wegen des Mordes an Kimberly Leach verurteilt und erneut zum Tode verurteilt. Nach fast zehn Jahren Berufungsverfahren wurde er am 24. Januar 1989 im Staatsgefängnis von Florida hingerichtet.",
  "legende": "Bundy wird in Büchern, Filmen und Serien oft als charmanter, hochintelligenter Täter dargestellt. Dieses Bild geht wesentlich auf seine eigene Selbstinszenierung im Gerichtssaal zurück und rückt den Täter statt der Opfer in den Mittelpunkt. Auch Opferzahlen von 100 und mehr kursieren; belegt sind die Verurteilungen in Utah und Florida, das Geständnis von rund 30 Tötungen und die vorsichtige Einschätzung der Ermittler. Verbreitet ist die Aussage, sein Prozess sei der erste landesweit übertragene in den USA gewesen. Das ist nicht eindeutig belegt: Florida erlaubte Kameras im Gerichtssaal versuchsweise schon ab 1977, und einzelne Prozesse waren dort bereits zuvor im Fernsehen zu sehen.",
  "bedeutung": "Der Fall zeigte, wie gefährlich fehlender Datenaustausch zwischen Polizeibehörden war, als ein Täter von Staat zu Staat zog; der Ruf nach zentralen Datenbanken für Gewaltverbrechen wurde lauter. Zugleich wurde der Prozess in Miami, den laut Miami New Times über hundert Medienleute vor Ort begleiteten, zu einem frühen Testfall für Kameras im Gerichtssaal. Dass Fernsehübertragungen faire Verfahren nicht grundsätzlich verletzen, bestätigte der Supreme Court 1981 im Fall Chandler v. Florida. Heute steht der Fall auch für die Kritik an einer Unterhaltungskultur, die Täter zu Ikonen macht.",
  "zeitleiste": [
   {
    "datum": "Januar 1974",
    "jahr": 1974,
    "text": "Beginn der Serie im Bundesstaat Washington."
   },
   {
    "datum": "August 1975",
    "jahr": 1975,
    "text": "Festnahme in Utah bei einer Verkehrskontrolle; 1976 Verurteilung wegen schwerer Entführung."
   },
   {
    "datum": "30. Dezember 1977",
    "jahr": 1977,
    "text": "Zweite Flucht aus der Haft in Glenwood Springs, Colorado."
   },
   {
    "datum": "15. Januar 1978",
    "jahr": 1978,
    "text": "Überfall auf das Chi-Omega-Haus in Tallahassee: zwei Studentinnen werden getötet."
   },
   {
    "datum": "15. Februar 1978",
    "jahr": 1978,
    "text": "Festnahme bei Pensacola in einem gestohlenen Wagen."
   },
   {
    "datum": "24. Juli 1979",
    "jahr": 1979,
    "text": "Schuldspruch im Prozess in Miami, der im Fernsehen übertragen wird."
   },
   {
    "datum": "Februar 1980",
    "jahr": 1980,
    "text": "Verurteilung in Orlando wegen des Mordes an Kimberly Leach."
   },
   {
    "datum": "24. Januar 1989",
    "jahr": 1989,
    "text": "Hinrichtung im Staatsgefängnis von Florida."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Ted Bundy",
   "St. Petersburg Times: Bundy confessions: gamble or guilt? One year later, the mystery persists, 21. Januar 1990",
   "UPI: Investigators luke-warm to Bundy confessions, 28. Januar 1989",
   "Miami New Times: Serial Killer Ted Bundy Found the Spotlight During His Miami Trial, 2019",
   "Supreme Court of the United States: Chandler v. Florida, 449 U.S. 560 (1981)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/ted-bundy-0.jpg",
    "breite": 600,
    "hoehe": 849,
    "zeigt": "Polizeifoto der Strafvollzugsbehörde Floridas vom 13. Februar 1980",
    "urheber": "Florida Department of Corrections",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ted_Bundy_mug_shot.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "birmingham-six",
  "titel": "Die Birmingham Six",
  "untertitel": "Pubanschläge, erzwungene Geständnisse und ein Fehlurteil, 1974–1991",
  "jahr": 1974,
  "zeitraum": "Anschläge 21. November 1974, Freilassung 14. März 1991",
  "ort": "Birmingham",
  "land": "Großbritannien",
  "lat": 52.4783,
  "lon": -1.8954,
  "ortQuelle": "https://en.wikipedia.org/wiki/Rotunda,_Birmingham",
  "kategorie": "Justizirrtum",
  "status": "ungeklärt",
  "kurz": "Sechs Männer aus Nordirland saßen über 16 Jahre unschuldig in Haft für einen der folgenschwersten IRA-Anschläge in England – der Fall veränderte die Überprüfung von Fehlurteilen.",
  "tat": "Am Abend des 21. November 1974, einem Donnerstag, explodierten in Birmingham kurz nacheinander zwei Bomben: im Pub Mulberry Bush am Fuß des Rotunda-Hochhauses und in der Tavern in the Town an der New Street. 21 Menschen starben, nach den meisten Angaben wurden rund 180 verletzt. Eine telefonische Warnung kam zu spät und war zu ungenau, um die Lokale zu räumen; ein dritter Sprengsatz zündete nicht. Die Anschläge fielen in die Bombenkampagne der Provisorischen IRA in England, die IRA bekannte sich aber nie offiziell dazu. In den folgenden Tagen kam es in Birmingham zu Übergriffen auf Iren und irische Einrichtungen, und das Parlament verabschiedete im Eilverfahren den Prevention of Terrorism Act.",
  "opfer": "Unter den 21 Toten waren überwiegend junge Menschen, die an diesem Abend in der Innenstadt ausgegangen waren. Ihre Angehörigen kämpften jahrzehntelang um Aufklärung. Erst 2019 stellte eine Jury in neu eröffneten Leichenschauverfahren fest, dass alle 21 rechtswidrig getötet worden waren und dass Mängel der Warnung zu den Todesfällen beigetragen hatten. Opfer der Justiz wurden zugleich die sechs Verurteilten: Hugh Callaghan, Patrick Hill, Gerard Hunter, Richard McIlkenny, William Power und John Walker, aus Nordirland stammende Männer, die seit Jahren in Birmingham lebten und arbeiteten und deren Familien die Jahre der Haft mittrugen.",
  "ermittlung": "Fünf der Männer wurden noch in der Nacht im Hafen Heysham festgehalten. Sie wollten nach Belfast zur Beerdigung eines IRA-Mitglieds reisen, das eine Woche zuvor in Coventry beim Hantieren mit einer Bombe ums Leben gekommen war; der sechste, Callaghan, wurde in Birmingham festgenommen. Ein Forensiker erklärte, mit dem Griess-Test bei zweien Spuren von Nitroglyzerin an den Händen gefunden zu haben. In tagelangen Vernehmungen durch Beamte der West Midlands Police unterschrieben vier der Männer Geständnisse. Sie gaben an, geschlagen, bedroht und am Schlafen gehindert worden zu sein; Fotos aus der Untersuchungshaft zeigten Verletzungen. Der Test erwies sich später als unzuverlässig, weil er auch auf harmlose Stoffe wie den Lack von Spielkarten anspricht.",
  "taeter": "Wer die Bomben legte, ist strafrechtlich nie festgestellt worden. Nach übereinstimmender Einschätzung von Ermittlern und Journalisten war es eine Einheit der IRA in Birmingham. Der Journalist und spätere Labour-Abgeordnete Chris Mullin recherchierte für sein Buch „Error of Judgement“ (1986) und sprach nach eigenen Angaben mit mutmaßlich Beteiligten, deren Namen er nicht preisgab. Ein früheres IRA-Mitglied übernahm 2017 in einem BBC-Interview eine allgemeine Mitverantwortung, ohne die Tat selbst einzuräumen; angeklagt wurde niemand. Die sechs Verurteilten hatten mit den Anschlägen nichts zu tun.",
  "prozess": "Der Prozess vor dem Crown Court in Lancaster endete am 15. August 1975 mit lebenslanger Haft für alle sechs wegen 21-fachen Mordes. Eine Zivilklage gegen die Polizei ließ Lord Denning 1980 scheitern: Hätten die Männer recht, eröffne das eine „entsetzliche Aussicht“, nämlich dass Polizisten gelogen, Gewalt angewandt und Geständnisse erzwungen hätten. 1988 bestätigte das Berufungsgericht unter Lord Lane die Urteile. Erst eine zweite Überprüfung ergab, dass Vernehmungsnotizen nachträglich verfasst worden waren und die forensischen Befunde nicht trugen. Am 14. März 1991 hob das Berufungsgericht die Urteile auf; die Männer kamen frei und erhielten später Entschädigungen.",
  "legende": "Verbreitet ist die Annahme, die Sechs seien freigekommen, weil die wahren Täter gefunden wurden. Tatsächlich hob das Berufungsgericht die Urteile auf, weil die Beweise gegen sie zusammenbrachen: die Geständnisse, die Polizeiprotokolle und der Sprengstofftest. Ebenso wenig wurden die beteiligten Polizisten bestraft: Ein Verfahren gegen drei Beamte wegen Meineids und Verschwörung wurde 1993 eingestellt, weil nach Ansicht des Gerichts wegen der Berichterstattung kein faires Verfahren mehr möglich war. Gesichert ist, dass die Männer unschuldig waren und dass Justiz und Polizei ihre Unschuld jahrelang zurückwiesen. Wer die Bomben legte, ist bis heute nicht gerichtlich geklärt.",
  "bedeutung": "Am Tag der Freilassung kündigte Innenminister Kenneth Baker eine Royal Commission on Criminal Justice an. Ihre Empfehlungen führten zur Gründung der Criminal Cases Review Commission, die seit 1997 mögliche Fehlurteile in England, Wales und Nordirland unabhängig prüft und an das Berufungsgericht verweisen kann. Zusammen mit den Guildford Four, die 1989 freikamen, wurde der Fall zum Sinnbild für die Gefahr erzwungener Geständnisse und für ein Klima, in dem Iren in England unter Generalverdacht standen.",
  "zeitleiste": [
   {
    "datum": "21. November 1974",
    "jahr": 1974,
    "text": "Bombenanschläge auf zwei Pubs in Birmingham, 21 Tote."
   },
   {
    "datum": "21./22. November 1974",
    "jahr": 1974,
    "text": "Festnahme von fünf Männern in Heysham, ein sechster in Birmingham."
   },
   {
    "datum": "29. November 1974",
    "jahr": 1974,
    "text": "Der Prevention of Terrorism Act tritt in Kraft."
   },
   {
    "datum": "15. August 1975",
    "jahr": 1975,
    "text": "Lebenslange Haftstrafen für alle sechs in Lancaster."
   },
   {
    "datum": "1980",
    "jahr": 1980,
    "text": "Lord Denning lässt die Zivilklage der Männer gegen die Polizei scheitern."
   },
   {
    "datum": "1988",
    "jahr": 1988,
    "text": "Das Berufungsgericht bestätigt die Urteile."
   },
   {
    "datum": "14. März 1991",
    "jahr": 1991,
    "text": "Aufhebung der Urteile und Freilassung."
   },
   {
    "datum": "April 2019",
    "jahr": 2019,
    "text": "Eine Jury stellt bei den neuen Leichenschauverfahren rechtswidrige Tötung fest."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Birmingham Six",
   "Chris Mullin: Error of Judgement. The Truth about the Birmingham Bombings, London 1986",
   "ITV News: Birmingham pub bombings inquests conclude 21 people were unlawfully killed, 5. April 2019"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/birmingham-six-0.jpg",
    "breite": 900,
    "hoehe": 676,
    "zeigt": "Gedenkstätte für die 21 Todesopfer der Pubanschläge vor der St Philip’s Cathedral in Birmingham",
    "urheber": "Elliott Brown",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Birmingham_St_Philips_pub_bomb_memorial_England.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "golden-state-killer",
  "titel": "Der Golden State Killer",
  "untertitel": "Eine kalifornische Verbrechensserie und der Durchbruch der genetischen Genealogie",
  "jahr": 1975,
  "zeitraum": "1975 bis 1986; Festnahme 2018",
  "ort": "Sacramento und weitere Orte in Kalifornien",
  "land": "USA",
  "lat": 38.5817,
  "lon": -121.4944,
  "ortQuelle": "https://en.wikipedia.org/wiki/Sacramento,_California",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Ein ehemaliger Polizist beging über ein Jahrzehnt Einbrüche, Vergewaltigungen und Morde – gefasst wurde er 2018 über die DNA entfernter Verwandter in einer Ahnenforschungsdatenbank.",
  "tat": "Zwischen 1975 und 1986 beging Joseph James DeAngelo in elf kalifornischen Countys eine Serie von Einbrüchen, Überfällen, Vergewaltigungen und Morden. Im Raum Sacramento drang er ab Mitte der 1970er Jahre nachts in Wohnhäuser ein und überfiel Frauen und Paare im Schlaf; die Behörden kannten den unbekannten Täter als „East Area Rapist“. Später verlagerte sich die Serie nach Südkalifornien, wo er Paare und Einzelpersonen in ihren Häusern tötete. Nach Angaben der Staatsanwaltschaften waren insgesamt 87 Menschen an 53 Tatorten betroffen; 13 Menschen wurden ermordet. Nach 1986 brach die Serie ab, der Täter blieb über drei Jahrzehnte unerkannt.",
  "opfer": "Die Opfer waren Frauen, Mädchen und Paare aus ganz gewöhnlichen Wohngegenden – Menschen, die sich in ihren eigenen Häusern sicher geglaubt hatten. Die Angst erfasste ganze Vorstädte im Raum Sacramento. Viele Überlebende lebten Jahrzehnte ohne zu wissen, wer der Täter war. Bei der Strafzumessung im August 2020 sprachen zahlreiche Überlebende und Angehörige von Getöteten vor Gericht und schilderten, wie die Taten ihr Leben geprägt hatten.",
  "ermittlung": "Die Taten verteilten sich auf viele Polizeibehörden, die lange getrennt ermittelten; dass die Serien im Norden und Süden Kaliforniens auf denselben Täter zurückgingen, belegte erst ein DNA-Abgleich Jahre später. Ein Treffer in staatlichen DNA-Datenbanken blieb aus. Den Durchbruch brachte 2018 ein neues Verfahren: Ermittler luden ein DNA-Profil aus Tatortspuren unter falscher Identität in die frei zugängliche Genealogie-Datenbank GEDmatch hoch und fanden entfernte Verwandte des Täters. Mithilfe von Stammbaumrecherchen engten sie den Kreis auf DeAngelo ein, sicherten heimlich DNA von einem weggeworfenen Gegenstand und erhielten eine Übereinstimmung. Am 24. April 2018 wurde er in Citrus Heights bei Sacramento festgenommen.",
  "taeter": "Joseph James DeAngelo Jr., geboren 1945, diente in der US-Marine und arbeitete in den 1970er Jahren als Polizist, zunächst in Exeter, dann in Auburn in Kalifornien. Als die Serie 1975 begann, war er im Polizeidienst. 1979 wurde er in Auburn nach einem Ladendiebstahl entlassen; die Taten setzte er fort. Danach arbeitete er jahrzehntelang als Mechaniker und lebte unauffällig in Citrus Heights, einem Vorort von Sacramento. Als er festgenommen wurde, war er 72 Jahre alt.",
  "prozess": "Weil Vergewaltigungen aus jener Zeit nach kalifornischem Recht verjährt waren, wurden nur Morde und Entführungen angeklagt. Um der Todesstrafe zu entgehen, bekannte sich DeAngelo am 29. Juni 2020 in 13 Fällen des Mordes und 13 Fällen der Entführung schuldig und räumte zudem 161 nicht angeklagte Taten an 61 weiteren Opfern ein. Wegen der Corona-Abstandsregeln fand die Anhörung im Ballsaal der Sacramento State University statt. Am 21. August 2020 wurde er zu mehreren aufeinanderfolgenden lebenslangen Freiheitsstrafen ohne Möglichkeit vorzeitiger Entlassung verurteilt.",
  "legende": "Den Namen „Golden State Killer“ prägte die Journalistin Michelle McNamara, deren Buch „I’ll Be Gone in the Dark“ 2018 nach ihrem Tod erschien und das Interesse am Fall wachhielt. Gefasst wurde der Täter jedoch nicht durch ihre Recherche, sondern durch die Arbeit von Ermittlern und Genealogen. Falsch ist auch die verbreitete Annahme, die Polizei habe Daten großer Testfirmen wie 23andMe oder Ancestry genutzt: Verwendet wurde die öffentliche Plattform GEDmatch, auf die Nutzer ihre Daten selbst hochgeladen hatten. Die Zahl der Opfer schwankt in Darstellungen; belastbar sind die Angaben der Staatsanwaltschaften.",
  "bedeutung": "Der Fall gilt als erster großer Erfolg der investigativen genetischen Genealogie; seither wurden mit ihr zahlreiche alte Mord- und Vergewaltigungsfälle gelöst. Zugleich entbrannte eine Datenschutzdebatte: Die Verwandten, über die der Täter gefunden wurde, hatten nie in eine polizeiliche Nutzung eingewilligt. GEDmatch stellte 2019 auf eine ausdrückliche Zustimmung der Nutzer um, wodurch der größte Teil der Profile für Ermittler unzugänglich wurde. Das US-Justizministerium erließ zum 1. November 2019 eine vorläufige Richtlinie, die solche Suchen auf schwere Gewaltverbrechen beschränkt und eine vorherige Ausschöpfung der staatlichen DNA-Datenbank verlangt.",
  "zeitleiste": [
   {
    "datum": "1975",
    "jahr": 1975,
    "text": "Beginn der Serie nach Angaben der Staatsanwaltschaften; DeAngelo ist zu dieser Zeit Polizist."
   },
   {
    "datum": "1979",
    "jahr": 1979,
    "text": "DeAngelo wird aus dem Polizeidienst in Auburn entlassen; die Taten gehen weiter."
   },
   {
    "datum": "1986",
    "jahr": 1986,
    "text": "Die letzte bekannte Tat der Serie; danach bleibt der Täter über 30 Jahre unerkannt."
   },
   {
    "datum": "24. April 2018",
    "jahr": 2018,
    "text": "Nach einem Abgleich über die Genealogie-Datenbank GEDmatch wird DeAngelo festgenommen."
   },
   {
    "datum": "1. November 2019",
    "jahr": 2019,
    "text": "Eine vorläufige Richtlinie des US-Justizministeriums regelt die polizeiliche Nutzung von Genealogie-Datenbanken."
   },
   {
    "datum": "29. Juni 2020",
    "jahr": 2020,
    "text": "DeAngelo bekennt sich in 13 Mordfällen und 13 Entführungsfällen schuldig."
   },
   {
    "datum": "21. August 2020",
    "jahr": 2020,
    "text": "Verurteilung zu lebenslanger Haft ohne Möglichkeit vorzeitiger Entlassung."
   }
  ],
  "quellen": [
   "Orange County District Attorney: Joseph James DeAngelo Jr. Pleads Guilty to 13 Murders, 13 Kidnappings and Dozens of Additional Uncharged Crimes, 29.6.2020",
   "Ventura County District Attorney: Pressemitteilung zur Strafzumessung, 21.8.2020",
   "U.S. Department of Justice: Interim Policy on Forensic Genetic Genealogical DNA Analysis and Searching, 2019",
   "Cornell Journal of Law and Public Policy: Do Not Access – Is Law Enforcement Access to Commercial DNA Databases a Substantial Privacy Concern?",
   "Michelle McNamara: I’ll Be Gone in the Dark, 2018"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/golden-state-killer-0.jpg",
    "breite": 843,
    "hoehe": 1100,
    "zeigt": "Phantomzeichnung des unbekannten Täters aus dem Fahndungsaufruf des FBI",
    "urheber": "FBI",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Original_Night_Stalker-East_Area_Rapist.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "charles-sobhraj",
  "titel": "Charles Sobhraj",
  "untertitel": "Verurteilungen in Indien und Nepal, 1976–2022",
  "jahr": 1975,
  "zeitraum": "Taten Mitte der 1970er-Jahre; Haft 1976–1997 und 2003–2022",
  "ort": "Kathmandu und Delhi",
  "land": "Nepal, Indien",
  "lat": 27.71,
  "lon": 85.32,
  "ortQuelle": "https://en.wikipedia.org/wiki/Kathmandu",
  "kategorie": "Mord",
  "status": "aufgeklärt",
  "kurz": "Ein Betrüger betäubt und beraubt in den 1970er-Jahren Rucksackreisende. Gerichte in Nepal verurteilen ihn für zwei Morde – für viele weitere Todesfälle, die ihm zugeschrieben werden, stand er nie vor Gericht.",
  "tat": "Charles Sobhraj, 1944 in Saigon geboren, bewegte sich Mitte der 1970er-Jahre auf der Reiseroute junger westlicher Reisender zwischen Thailand, Nepal und Indien. Er gewann ihr Vertrauen, verabreichte ihnen Betäubungsmittel und nahm ihnen Geld und Pässe ab. Gerichtlich festgestellt sind zwei Morde: Im Dezember 1975 wurden in der Gegend von Kathmandu die Amerikanerin Connie Jo Bronzich und der Kanadier Laurent Carrière getötet, für beide Taten verurteilten ihn nepalesische Gerichte. In Indien wurde er 1976 festgenommen, nachdem er einer Gruppe französischer Studenten in einem Hotel in Delhi Tabletten gegeben hatte, die er als Mittel gegen Durchfall ausgab. Weitere Todesfälle, vor allem in Thailand, werden ihm zugeschrieben, sind aber nie verhandelt worden.",
  "opfer": "Connie Jo Bronzich und Laurent Carrière waren junge Reisende, wie Tausende andere, die damals über Land nach Asien kamen. Ihre Namen sind durch die nepalesischen Urteile öffentlich. In Thailand gehören zu den Toten, deren Fälle mit Sobhraj in Verbindung gebracht wurden, die Amerikanerin Teresa Knowlton; ein Verfahren dazu gab es nie. Die französischen Studenten in Delhi überlebten; einige von ihnen alarmierten die Polizei. Für die Familien vieler Opfer blieb es dabei, dass ein Gericht ihre Fälle nie verhandelte.",
  "ermittlung": "Die Ermittlungen litten darunter, dass die Taten in mehreren Staaten geschahen und die Behörden kaum zusammenarbeiteten. In Bangkok trug der niederländische Diplomat Herman Knippenberg Hinweise zusammen und drängte die thailändische Polizei zum Handeln; ein Haftbefehl wurde ausgestellt, doch Sobhraj hatte das Land da bereits verlassen. Die Festnahme in Delhi im Juli 1976 kam zustande, weil die betäubten Studenten die Polizei alarmierten. In Nepal blieben die Akten von 1975 offen. Als Sobhraj 2003 nach Kathmandu zurückkehrte und dort öffentlich auftrat, wurde er im September 2003 in einem Kasino festgenommen, nachdem die Zeitung The Himalayan Times über ihn berichtet hatte.",
  "taeter": "Sobhraj, Sohn einer vietnamesischen Mutter und eines indischen Vaters, mit französischer Staatsangehörigkeit, war vor 1975 bereits mehrfach wegen Diebstahls und Betrugs inhaftiert gewesen. Rechtskräftig verurteilt ist er in Nepal für die Morde an Connie Jo Bronzich und Laurent Carrière. In Indien verbüßte er rund zwei Jahrzehnte Haft wegen der Betäubung der Studenten und weiterer Taten sowie wegen seines Ausbruchs; eine Verurteilung wegen Mordes in Indien wurde nach Angaben von Al Jazeera später in der Berufung aufgehoben. Die Angaben über weitere Morde, oft ist von mindestens zwölf die Rede, stammen aus Ermittlungsakten, Interviews und Büchern, nicht aus Urteilen.",
  "prozess": "Im März 1986 brach Sobhraj aus dem Tihar-Gefängnis in Delhi aus, nachdem er Wärter betäubt hatte, wurde wenige Wochen später in Goa gefasst und erhielt eine Zusatzstrafe. Am 17. Februar 1997 kam er frei und wurde nach Frankreich abgeschoben. In Nepal verurteilte ihn das Bezirksgericht Kathmandu im August 2004 wegen Mordes an Bronzich zu lebenslanger Haft, nach nepalesischem Recht 20 Jahre; der Oberste Gerichtshof bestätigte 2010. Das Bezirksgericht Bhaktapur verurteilte ihn 2014 wegen Mordes an Carrière. Am 21. Dezember 2022 ordnete der Oberste Gerichtshof wegen Alter und Gesundheit die Freilassung an; zwei Tage später folgte die Abschiebung nach Frankreich.",
  "legende": "Um Sobhraj ist ein Mythos vom charmanten Verführer und Meisterverbrecher entstanden, genährt von Büchern, Interviews, die er gegen Geld gab, und der Fernsehserie „The Serpent“ von 2021. Vieles davon stammt von ihm selbst und ist nicht belegt. Die Zahl seiner Opfer schwankt je nach Darstellung erheblich. Verbreitet ist auch die Deutung, er sei 1986 aus Tihar geflohen, um wegen des Ausbruchs länger in Indien zu bleiben, bis der thailändische Haftbefehl nach 20 Jahren verjährte; das ist eine plausible Vermutung, aber nicht bewiesen. Gesichert ist, dass er nach Thailand nie ausgeliefert wurde und dort nie vor Gericht stand.",
  "bedeutung": "Der Fall zeigt, wie ein Täter Grenzen, fehlende Polizeizusammenarbeit und Verjährungsfristen ausnutzen konnte; erst die Verurteilungen in Nepal fast 30 Jahre nach den Taten schlossen diese Lücke teilweise. Er steht zudem für eine Medienkultur, die einem Verurteilten Bühne und Honorare bot und die Opfer in den Hintergrund rückte. Die Freilassung 2022 löste in Nepal und unter Angehörigen der Opfer Kritik aus.",
  "zeitleiste": [
   {
    "datum": "Dezember 1975",
    "jahr": 1975,
    "text": "In Nepal werden Connie Jo Bronzich und Laurent Carrière getötet."
   },
   {
    "datum": "Juli 1976",
    "jahr": 1976,
    "text": "Festnahme in Delhi nach der Betäubung einer Gruppe französischer Studenten."
   },
   {
    "datum": "März 1986",
    "jahr": 1986,
    "text": "Ausbruch aus dem Tihar-Gefängnis; wenige Wochen später Festnahme in Goa."
   },
   {
    "datum": "17. Februar 1997",
    "jahr": 1997,
    "text": "Entlassung aus indischer Haft und Abschiebung nach Frankreich."
   },
   {
    "datum": "September 2003",
    "jahr": 2003,
    "text": "Festnahme in einem Kasino in Kathmandu."
   },
   {
    "datum": "August 2004",
    "jahr": 2004,
    "text": "Das Bezirksgericht Kathmandu verurteilt ihn wegen Mordes an Connie Jo Bronzich zu lebenslanger Haft."
   },
   {
    "datum": "2014",
    "jahr": 2014,
    "text": "Das Bezirksgericht Bhaktapur verurteilt ihn wegen Mordes an Laurent Carrière."
   },
   {
    "datum": "23. Dezember 2022",
    "jahr": 2022,
    "text": "Freilassung auf Anordnung des Obersten Gerichtshofs und Abschiebung nach Frankreich."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Charles Sobhraj",
   "The Kathmandu Post: Nepal deports Charles Sobhraj, 23. Dezember 2022",
   "Al Jazeera: Charles Sobhraj, convicted murderer, has a new story to tell, 25. August 2023",
   "Richard Neville, Julie Clarke: The Life and Crimes of Charles Sobhraj, 1979"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/charles-sobhraj-0.jpg",
    "breite": 825,
    "hoehe": 1100,
    "zeigt": "Eingangstor des Tihar-Gefängnisses in Delhi, aus dem Sobhraj 1986 ausbrach (Aufnahme 2024)",
    "urheber": "Zuck28",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Tihar_Jail%2C_Delhi.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "steve-biko",
  "titel": "Der Tod von Steve Biko",
  "untertitel": "Gestorben in Polizeigewahrsam, Südafrika 1977",
  "jahr": 1977,
  "zeitraum": "August und September 1977",
  "ort": "Port Elizabeth (heute Gqeberha) und Pretoria",
  "land": "Südafrika",
  "lat": -33.9581,
  "lon": 25.6,
  "ortQuelle": "https://en.wikipedia.org/wiki/Gqeberha",
  "kategorie": "Mord",
  "status": "ungeklärt",
  "kurz": "Der Vordenker der Schwarzen Bewusstseinsbewegung stirbt 1977 nach Misshandlungen in Polizeihaft. Fast fünfzig Jahre später ist noch immer niemand dafür vor Gericht gestellt worden.",
  "tat": "Steve Biko, Mitbegründer der Schwarzen Bewusstseinsbewegung, stand seit 1973 unter Bann und durfte den Bezirk King William's Town nicht verlassen. Im August 1977 wurde er mit seinem Mitstreiter Peter Jones an einer Straßensperre bei Grahamstown festgenommen und nach dem Terrorismusgesetz ohne Anklage festgehalten. Die Sicherheitspolizei verhörte ihn im Sanlam-Gebäude in Port Elizabeth. Am 6. oder 7. September erlitt er dort schwere Kopfverletzungen. Obwohl Ärzte Anzeichen einer Hirnschädigung sahen, blieb er gefesselt. Am 11. September wurde er nackt auf der Ladefläche eines Polizeifahrzeugs rund 1200 Kilometer nach Pretoria gebracht, wo er am 12. September 1977 allein in einer Zelle des Zentralgefängnisses starb.",
  "opfer": "Bantu Stephen Biko, geboren 1946 im Ostkap, studierte Medizin in Durban und gründete 1968 die schwarze Studentenorganisation SASO mit, deren erster Präsident er wurde. Seine Botschaft, Schwarze müssten sich von verinnerlichter Unterlegenheit befreien und ihre Befreiung selbst in die Hand nehmen, prägte eine Generation, auch die Schüler des Soweto-Aufstands von 1976. Er baute Gemeindeprojekte und eine Klinik auf. Biko war 30 Jahre alt, als er starb.",
  "ermittlung": "Justizminister Jimmy Kruger erklärte zunächst, Biko sei an den Folgen eines Hungerstreiks gestorben, und sagte, der Tod lasse ihn kalt. Der Journalist Donald Woods und die Zeitung Rand Daily Mail machten bekannt, dass die Obduktion Hirnverletzungen ergeben hatte. Bei der Leichenschau ab November 1977 in Pretoria vertrat der Anwalt Sydney Kentridge die Familie und legte die Widersprüche der Polizei offen, die von einem „Handgemenge“ sprach. Magistrat Marthinus Prins befand dennoch, die Verletzungen seien wahrscheinlich bei dem Handgemenge entstanden, und niemand sei für den Tod strafrechtlich verantwortlich. Die Ärzte, die Biko behandelt hatten, wurden erst nach einem Gerichtsurteil von 1985 berufsrechtlich belangt.",
  "taeter": "Wer die tödlichen Schläge führte, ist gerichtlich nie festgestellt worden. Vor der Wahrheits- und Versöhnungskommission beantragten fünf ehemalige Sicherheitspolizisten Amnestie: Harold Snyman, Gideon Nieuwoudt, Rubin Marx, Daniel Siebert und Johan Beneke. Sie räumten ein Handgemenge ein, bestritten aber eine Tötungsabsicht. Der Amnestieausschuss lehnte alle Anträge ab, im Dezember 1998 und im Februar 1999, weil ihre Darstellung unwahr und widersprüchlich sei und die Tat kein politisches Ziel verfolgt habe. Ohne Urteil gelten alle Genannten rechtlich als nicht verurteilt; Siebert und Beneke leben noch und sagten 2026 vor Gericht aus, wobei sie eine Verantwortung bestritten.",
  "prozess": "1979 zahlte der Staat der Familie ohne Schuldeingeständnis eine Entschädigung. Die Familie hatte sich 1996 vor dem Verfassungsgericht vergeblich gegen das Amnestiegesetz gewehrt. Nach der Ablehnung der Amnestie prüfte die Staatsanwaltschaft eine Anklage und verzichtete 2003 mangels Beweisen darauf. Im September 2025 eröffnete die Nationale Strafverfolgungsbehörde die Leichenschau neu, die Anhörungen begannen im August 2026 vor dem High Court in Gqeberha. Am 9. September 2026 wurde das Verfahren auf Antrag der Familie auf unbestimmte Zeit vertagt, damit ihre Anwälte die umfangreichen Akten auswerten können. Das Verfahren läuft (Stand Oktober 2026).",
  "legende": "Die amtliche Version vom Hungerstreik war von Anfang an falsch, die Obduktion belegte Hirnverletzungen durch stumpfe Gewalt. Die Rede vom „Handgemenge“, bei dem Biko mit dem Kopf gegen eine Wand gestoßen sei, wies der Amnestieausschuss als unglaubwürdig zurück. Umgekehrt ist bis heute nicht gerichtlich festgestellt, wer genau welche Schläge führte. Gesichert ist, dass Biko in staatlicher Obhut misshandelt, medizinisch im Stich gelassen und in lebensbedrohlichem Zustand quer durchs Land gefahren wurde.",
  "bedeutung": "Bikos Tod machte die Gewalt der Apartheid-Polizei weltweit sichtbar. Der UN-Sicherheitsrat verhängte im November 1977 ein verbindliches Waffenembargo gegen Südafrika. Donald Woods floh ins Exil und schrieb ein Buch, auf dem der Film „Cry Freedom“ (1987) beruht; Peter Gabriel widmete Biko 1980 ein Lied. Der Fall steht zugleich für die Grenzen der Wahrheitskommission: Wer keine Amnestie erhielt, sollte verfolgt werden, doch in den meisten Fällen geschah das jahrzehntelang nicht.",
  "zeitleiste": [
   {
    "datum": "März 1973",
    "jahr": 1973,
    "text": "Biko wird mit einem Bann belegt und auf den Bezirk King William's Town beschränkt."
   },
   {
    "datum": "18. August 1977",
    "jahr": 1977,
    "text": "Festnahme an einer Straßensperre bei Grahamstown (nach anderen Angaben in der Nacht zuvor)."
   },
   {
    "datum": "6./7. September 1977",
    "jahr": 1977,
    "text": "Bei Verhören im Sanlam-Gebäude in Port Elizabeth erleidet Biko schwere Kopfverletzungen."
   },
   {
    "datum": "12. September 1977",
    "jahr": 1977,
    "text": "Biko stirbt nach dem Transport nach Pretoria in einer Gefängniszelle."
   },
   {
    "datum": "2. Dezember 1977",
    "jahr": 1977,
    "text": "Die Leichenschau spricht die Polizei von strafrechtlicher Verantwortung frei."
   },
   {
    "datum": "16. Februar 1999",
    "jahr": 1999,
    "text": "Die Wahrheitskommission verweigert den letzten Antragstellern die Amnestie."
   },
   {
    "datum": "Oktober 2003",
    "jahr": 2003,
    "text": "Die Staatsanwaltschaft verzichtet mangels Beweisen auf eine Anklage."
   },
   {
    "datum": "9. September 2026",
    "jahr": 2026,
    "text": "Die 2025 neu eröffnete Leichenschau in Gqeberha wird auf unbestimmte Zeit vertagt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Steve Biko",
   "Truth and Reconciliation Commission: Amnesty Committee, Entscheidung im Fall Biko, 16. Februar 1999 (Pressemitteilung)",
   "National Prosecuting Authority of South Africa: Mitteilung zur Wiederaufnahme der Leichenschau, September 2025",
   "Daily Maverick / EWN: Berichte zur vertagten Leichenschau, August und September 2026",
   "Donald Woods: Biko, 1978"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/steve-biko-0.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Gedenktafel am Wohnblock Steve Biko Court in London mit dem Hinweis auf seinen Tod in Polizeigewahrsam am 12. September 1977",
    "urheber": "Megalit",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Steve_Biko_plaque.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "andrei-tschikatilo",
  "titel": "Andrei Tschikatilo",
  "untertitel": "Die Mordserie im Gebiet Rostow 1978–1990 und ein hingerichteter Unschuldiger",
  "jahr": 1978,
  "zeitraum": "Dezember 1978 bis November 1990",
  "ort": "Rostow am Don und Umgebung (Schachty, Nowotscherkassk)",
  "land": "Sowjetunion (heute Russland)",
  "lat": 47.2225,
  "lon": 39.71,
  "ortQuelle": "https://en.wikipedia.org/wiki/Rostov-on-Don",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Zwölf Jahre lang tötete Andrei Tschikatilo im Süden der Sowjetunion Kinder und junge Frauen – während für seinen ersten Mord ein anderer Mann erschossen wurde.",
  "tat": "Zwischen 1978 und 1990 tötete Andrei Tschikatilo, ein unauffälliger früherer Lehrer und späterer Versorgungsangestellter, nach den Feststellungen des Rostower Gebietsgerichts mehr als fünfzig Menschen. Die meisten Taten geschahen im Gebiet Rostow am Don, einige in anderen Teilen der Sowjetunion, wohin ihn Dienstreisen führten. Sein Vorgehen wiederholte sich: Er sprach seine Opfer an Bahnhöfen und Bushaltestellen an, versprach eine Abkürzung, Essen, Geld oder eine Unterkunft und lockte sie in die Windschutz-Waldstreifen entlang der Bahnlinien. Diese Waldstreifen gaben der späteren Großfahndung ihren Namen: „Lesopolossa“. Für die erste ihm zugeschriebene Tat, den Mord an der neunjährigen Jelena Sakotnowa im Dezember 1978 in Schachty, wurde zunächst ein anderer Mann verurteilt und hingerichtet.",
  "opfer": "Unter den Opfern waren Mädchen und Jungen, Jugendliche und junge Frauen; die jüngsten waren sieben Jahre alt. Viele waren allein unterwegs – auf dem Weg zur Schule, zur Arbeit, zu Verwandten –, manche lebten in prekären Verhältnissen oder hielten sich an Bahnhöfen auf. Gerade sie fielen leicht durch das Raster der Behörden. Eine breite öffentliche Warnung gab es lange nicht, denn die sowjetische Presse berichtete über Mordserien kaum. Wer die Opfer waren, geriet hinter der Zahl der Taten oft aus dem Blick; viele Familien warteten Jahre auf Gewissheit.",
  "ermittlung": "Anfang der 1980er Jahre erkannten die Ermittler einen Zusammenhang; der Kriminalist Viktor Burakow leitete die Spurenarbeit, ab Dezember 1985 lief die Großoperation „Lesopolossa“. Nach russischen Angaben wurden Hunderttausende Menschen überprüft – die Zahlen reichen bis zu einer halben Million – und über tausend andere Verbrechen aufgeklärt. Der Psychiater Alexander Buchanowski entwarf eines der ersten Täterprofile der Sowjetunion. Schwer wogen die Fehler: Im September 1984 wurde Tschikatilo in Rostow festgenommen, doch ein Blutgruppenabgleich schien ihn zu entlasten; verurteilt wurde er nur wegen Diebstahls, im Dezember kam er frei. Zugleich setzten Ermittler psychisch Kranke und Homosexuelle unter massiven Druck; mehrere nahmen sich das Leben. Im November 1990 fiel er einem verdeckten Beamten an einem Bahnhof auf, am 20. November folgte die Festnahme. Nach Verhören durch Issa Kostojews Gruppe und einem Gespräch mit Buchanowski gestand er.",
  "taeter": "Andrei Tschikatilo wurde am 16. Oktober 1936 im Dorf Jablutschne in der heutigen Ukraine geboren. Er studierte im Fernstudium, war verheiratet, hatte zwei Kinder und war Mitglied der KPdSU. Als Lehrer fiel er durch Übergriffe auf Schüler auf, wurde aber nicht angeklagt, sondern wechselte die Stelle. Später arbeitete er als Versorgungsangestellter für Betriebe im Raum Rostow und reiste dienstlich viel. Psychiatrische Gutachter des Moskauer Serbski-Instituts hielten ihn für schuldfähig. Für den ersten Mord von 1978 war zunächst Alexander Krawtschenko verurteilt worden, ein in der Nähe wohnender, wegen eines ähnlichen Verbrechens vorbestrafter junger Mann. Er hatte ein Alibi, gestand aber unter Druck, widerrief und wurde dennoch zum Tode verurteilt.",
  "prozess": "Der Prozess vor dem Rostower Gebietsgericht begann am 14. April 1992; Tschikatilo saß in einem Metallkäfig im Saal. Angeklagt waren 53 Morde, im Oktober 1992 wurde er in 52 Fällen schuldig gesprochen und zum Tode verurteilt. Nach russischen Angaben hob das Oberste Gericht später die Verurteilung in mehreren Fällen mangels Beweisen auf, darunter den Mord von 1978. Tschikatilo wurde am 14. Februar 1994 erschossen; die meisten Darstellungen nennen Nowotscherkassk als Ort, die Britannica Moskau. Alexander Krawtschenko war bereits am 5. Juli 1983 hingerichtet worden. Sein Urteil wurde erst nach Tschikatilos Festnahme aufgehoben; für das Jahr nennen die Quellen 1990 bis 1992.",
  "legende": "Gesichert sind die Hinrichtung Krawtschenkos und die spätere Aufhebung seines Urteils; das Jahr der Aufhebung wird unterschiedlich angegeben (1990 bis 1992). Die Rechtslage ist dennoch verworren: Weil das Oberste Gericht den Mord von 1978 später auch aus Tschikatilos Urteil strich, ist er formal keinem Täter zugeordnet. In russischen Debatten über die Todesstrafe ist zudem oft von „zwei unschuldig Erschossenen“ im Fall Tschikatilo die Rede – hingerichtet wurde aber nur Krawtschenko. Umstritten ist auch die gern erzählte Erklärung für die Blutgruppenpanne von 1984, Tschikatilo sei ein medizinischer Sonderfall gewesen; ebenso werden Fehler bei der Spurenauswertung genannt. Die Zahl der Opfer schwankt je nach Zählung: 53 angeklagt, 52 verurteilt, von ihm selbst mehr gestanden.",
  "bedeutung": "Der Fall zwang die sowjetischen Behörden, das Phänomen des Serienmörders anzuerkennen, und brachte mit Buchanowskis Arbeit die Täterprofilerstellung in die sowjetische Kriminalistik. Der Prozess war eines der ersten großen Medienereignisse im postsowjetischen Russland. Vor allem aber wurde der Fall Krawtschenko zu einem der meistzitierten Beispiele für erzwungene Geständnisse und für die Unumkehrbarkeit eines Todesurteils – ein Argument, das in der russischen Debatte über die Todesstrafe immer wieder auftaucht.",
  "zeitleiste": [
   {
    "datum": "22. Dezember 1978",
    "jahr": 1978,
    "text": "In Schachty wird ein neunjähriges Mädchen ermordet; die Polizei nimmt Alexander Krawtschenko fest."
   },
   {
    "datum": "5. Juli 1983",
    "jahr": 1983,
    "text": "Krawtschenko wird nach mehreren Verfahren als Mörder hingerichtet."
   },
   {
    "datum": "September 1984",
    "jahr": 1984,
    "text": "Tschikatilo wird in Rostow festgenommen, wegen der Blutgruppe aber nicht als Mörder verfolgt; im Dezember kommt er frei."
   },
   {
    "datum": "Dezember 1985",
    "jahr": 1985,
    "text": "Die Großoperation „Lesopolossa“ beginnt."
   },
   {
    "datum": "20. November 1990",
    "jahr": 1990,
    "text": "Tschikatilo wird festgenommen und legt wenig später ein Geständnis ab."
   },
   {
    "datum": "1990 bis 1992 (Angaben schwanken)",
    "jahr": 1990,
    "text": "Das Urteil gegen den bereits hingerichteten Krawtschenko wird aufgehoben."
   },
   {
    "datum": "14. April 1992",
    "jahr": 1992,
    "text": "Der Prozess vor dem Rostower Gebietsgericht beginnt; im Oktober folgt das Todesurteil."
   },
   {
    "datum": "14. Februar 1994",
    "jahr": 1994,
    "text": "Tschikatilo wird erschossen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Andrei Chikatilo",
   "Robert Cullen: The Killer Department, 1993",
   "Mikhail Krivich, Ol'gert Ol'gin: Comrade Chikatilo, 1993",
   "Nikolai Kitajew: Nepravosudnye prigovory k smertnoj kazni (Unrechtmäßige Todesurteile), 2004",
   "Urteil des Rostower Gebietsgerichts im Fall Tschikatilo, Oktober 1992"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/andrei-tschikatilo-0.jpg",
    "breite": 259,
    "hoehe": 301,
    "zeigt": "Polizeifoto Andrei Tschikatilos nach der Festnahme 1990",
    "urheber": "USSR Government",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Andrei_Chikatilo_%281990%29.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "unabomber",
  "titel": "Der Unabomber",
  "untertitel": "Siebzehn Jahre Briefbomben und ein Manifest, USA 1978–1995",
  "jahr": 1978,
  "zeitraum": "Mai 1978 bis April 1996",
  "ort": "Lincoln, Montana",
  "land": "USA",
  "lat": 46.955,
  "lon": -112.682,
  "ortQuelle": "https://en.wikipedia.org/wiki/Lincoln,_Montana",
  "kategorie": "Anschlag",
  "status": "aufgeklärt",
  "kurz": "Ein Einsiedler in Montana verschickt 17 Jahre lang Bomben an Universitäten, Fluggesellschaften und Manager. Gefasst wird er erst, als sein Bruder den Stil eines veröffentlichten Manifests wiedererkennt.",
  "tat": "Zwischen Mai 1978 und April 1995 verschickte oder legte ein unbekannter Täter nach Angaben des FBI 16 Sprengsätze, vor allem an Universitäten, an eine Fluggesellschaft und an Menschen, die er mit moderner Technik in Verbindung brachte. Drei Menschen wurden getötet, fast zwei Dutzend verletzt, manche schwer. Die erste Bombe explodierte 1978 an der Northwestern University bei Chicago, 1979 brach in einem Passagierflugzeug der American Airlines ein Brand aus, weil ein Sprengsatz im Frachtraum nicht vollständig zündete. Nach 1987 folgte eine Pause von sechs Jahren, ab 1993 kamen neue Bomben. Die Geräte waren sorgfältig von Hand gefertigt, oft aus Holz, und trugen die eingestanzten Buchstaben „FC“.",
  "opfer": "Getötet wurden Hugh Scrutton, Inhaber eines Computergeschäfts in Sacramento, im Dezember 1985; Thomas Mosser, Manager einer großen PR-Agentur, im Dezember 1994 in seinem Haus in New Jersey; und Gilbert Murray, Präsident eines Verbands der Forstwirtschaft, im April 1995 in Sacramento. Unter den Verletzten waren Studenten, Sekretärinnen, Professoren und Wissenschaftler, darunter ein Informatiker in Yale und ein Genetiker in Kalifornien. Viele von ihnen trugen bleibende Schäden davon. Die Opfer und ihre Angehörigen sprachen bei der Urteilsverkündung 1998 vor Gericht.",
  "ermittlung": "Weil die ersten Ziele Universitäten und Fluggesellschaften waren, gab das FBI dem Fall den Namen UNABOM. Die Bomben hinterließen kaum Spuren. 1987 sah eine Zeugin in Salt Lake City einen Mann mit Kapuze und Sonnenbrille, der einen Sprengsatz ablegte; daraus entstand die bekannte Phantomzeichnung. Nach den neuen Anschlägen ab 1993 arbeiteten FBI, die Waffenbehörde ATF und die Postinspektion in einer gemeinsamen Task Force in San Francisco, die nach Angaben des FBI auf über 150 Mitarbeiter anwuchs. 1995 verlangte der Täter, ein Text von rund 35.000 Wörtern solle in einer großen Zeitung erscheinen, dann höre er auf zu töten. Auf Empfehlung des FBI und mit Zustimmung von Justizministerin Janet Reno druckte die Washington Post das Manifest am 19. September 1995, in der Hoffnung, jemand erkenne den Verfasser.",
  "taeter": "Theodore John Kaczynski, 1942 in Chicago geboren, kam mit 16 Jahren nach Harvard, promovierte in Mathematik und lehrte ab 1967 an der University of California in Berkeley. 1969 gab er die Stelle auf und lebte ab 1971 in einer selbst gebauten Hütte ohne Strom und fließendes Wasser bei Lincoln in Montana. Sein Bruder David und dessen Frau Linda Patrik erkannten im veröffentlichten Manifest Gedanken und Formulierungen aus Teds Briefen. Nach langem Zögern ließ David das FBI Anfang 1996 über einen Anwalt informieren und stellte Briefe zur Verfügung; ein Sprachvergleich stützte den Verdacht. Am 3. April 1996 wurde Kaczynski in seiner Hütte festgenommen. Die Ermittler fanden Bombenteile, einen fertigen Sprengsatz und rund 40.000 Seiten Tagebuchaufzeichnungen.",
  "prozess": "Vor dem Bundesgericht in Sacramento wollten seine Anwälte auf psychische Krankheit plädieren; Kaczynski lehnte das ab und wollte sich selbst verteidigen, was das Gericht nicht zuließ. Eine gerichtlich bestellte Psychiaterin stellte eine vorläufige Diagnose paranoider Schizophrenie, die er bestritt und die unter Fachleuten umstritten blieb. Am 22. Januar 1998 bekannte er sich in allen Anklagepunkten schuldig, im Gegenzug verzichtete die Anklage auf die Todesstrafe. Am 4. Mai 1998 wurde er zu viermal lebenslanger Haft ohne Möglichkeit der Entlassung und weiteren 30 Jahren verurteilt. Er saß lange im Hochsicherheitsgefängnis in Florence, Colorado, wurde 2021 in ein Gefängniskrankenhaus in Butner, North Carolina, verlegt und starb dort im Juni 2023.",
  "legende": "Kaczynski wird gern als genialer Einzelgänger und früher Technikkritiker dargestellt, der zur Gewalt getrieben worden sei. Gesichert ist, dass er seine Taten über Jahre plante und in seinen Tagebüchern als persönliche Rache beschrieb. Die Teilnahme an einer belastenden psychologischen Versuchsreihe in Harvard um 1959 ist belegt; dass sie ihn zum Täter gemacht habe, ist Spekulation. Ebenso wenig stimmt, die Ermittler hätten ihn durch eigene Analyse überführt: Den entscheidenden Hinweis gab sein Bruder, die Sprachanalyse bestätigte ihn. Die Veröffentlichung des Manifests war umstritten, weil man einer Erpressung nachgab; im Ergebnis führte sie zur Festnahme.",
  "bedeutung": "Der Fall zeigte, dass eine gezielte Veröffentlichung zum Fahndungsmittel werden kann, und machte die forensische Sprachanalyse bekannt, die seither in Ermittlungen und vor Gericht häufiger eingesetzt wird. Er war eine der längsten und teuersten Ermittlungen in der Geschichte des FBI. David Kaczynski erhielt die ausgesetzte Belohnung von einer Million Dollar und gab sie nach Abzug seiner Kosten an Familien der Opfer weiter; später setzte er sich gegen die Todesstrafe ein. Das Manifest wird bis heute in Netzforen verbreitet, oft losgelöst von den Morden, aus denen es seine Aufmerksamkeit bezog.",
  "zeitleiste": [
   {
    "datum": "25. Mai 1978",
    "jahr": 1978,
    "text": "Die erste Bombe explodiert an der Northwestern University bei Chicago."
   },
   {
    "datum": "15. November 1979",
    "jahr": 1979,
    "text": "Ein Sprengsatz verursacht einen Brand an Bord eines Flugs der American Airlines; das FBI übernimmt."
   },
   {
    "datum": "11. Dezember 1985",
    "jahr": 1985,
    "text": "Hugh Scrutton wird in Sacramento als erstes Todesopfer getötet."
   },
   {
    "datum": "Februar 1987",
    "jahr": 1987,
    "text": "Nach einem Anschlag in Salt Lake City veröffentlicht das FBI eine Phantomzeichnung."
   },
   {
    "datum": "19. September 1995",
    "jahr": 1995,
    "text": "Die Washington Post druckt das Manifest „Industrial Society and Its Future“."
   },
   {
    "datum": "3. April 1996",
    "jahr": 1996,
    "text": "Theodore Kaczynski wird nach dem Hinweis seines Bruders in seiner Hütte in Montana festgenommen."
   },
   {
    "datum": "22. Januar 1998",
    "jahr": 1998,
    "text": "Kaczynski bekennt sich schuldig und entgeht damit der Todesstrafe."
   },
   {
    "datum": "4. Mai 1998",
    "jahr": 1998,
    "text": "Das Gericht in Sacramento verhängt viermal lebenslange Haft und 30 Jahre."
   }
  ],
  "quellen": [
   "Federal Bureau of Investigation: Famous Cases – Unabomber (fbi.gov)",
   "Encyclopaedia Britannica: Ted Kaczynski",
   "The Washington Post: Industrial Society and Its Future, 19. September 1995",
   "David Kaczynski: Every Last Tie. The Story of the Unabomber and His Family, 2016",
   "Alston Chase: Harvard and the Unabomber, 2003"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/unabomber-0.jpg",
    "breite": 900,
    "hoehe": 1064,
    "zeigt": "Phantomzeichnung des FBI nach dem Anschlag in Salt Lake City, Februar 1987",
    "urheber": "Federal Bureau of Investigation",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Unabomber_-_FBI_Sketch_1987.jpg"
   },
   {
    "datei": "bilder/dark/unabomber-1.jpg",
    "breite": 868,
    "hoehe": 1100,
    "zeigt": "Fahndungsplakat des FBI mit Belohnung für Hinweise auf den Unabomber, um 1995",
    "urheber": "Federal Bureau of Investigation photo",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:FBI_Reward_poster_Unabomber.jpg"
   },
   {
    "datei": "bilder/dark/unabomber-2.jpg",
    "breite": 900,
    "hoehe": 811,
    "zeigt": "Polizeifoto Theodore Kaczynskis nach der Festnahme, April 1996",
    "urheber": "Federal Bureau of Investigation",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ted_Kaczynski_2.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "azaria-chamberlain",
  "titel": "Der Fall Azaria Chamberlain",
  "untertitel": "Ein Dingo, ein Fehlurteil und 32 Jahre bis zur Wahrheit, Uluru 1980",
  "jahr": 1980,
  "zeitraum": "August 1980 bis Juni 2012",
  "ort": "Campingplatz am Uluru (Ayers Rock), Northern Territory",
  "land": "Australien",
  "lat": -25.345,
  "lon": 131.0361,
  "ortQuelle": "https://en.wikipedia.org/wiki/Uluru",
  "kategorie": "Justizirrtum",
  "status": "aufgeklärt",
  "kurz": "Eine Mutter sagt, ein Dingo habe ihr Baby geholt, und wird wegen Mordes verurteilt. Erst ein Zufallsfund befreit sie; erst 2012 bestätigt ein Coroner, was sie von Anfang an gesagt hatte.",
  "tat": "Am Abend des 17. August 1980 zeltete die Familie Chamberlain aus Mount Isa auf dem Campingplatz am Uluru. Lindy Chamberlain hatte ihre neun Wochen alte Tochter Azaria im Zelt schlafen gelegt. Kurz darauf hörten Camper ein Schreien, Lindy Chamberlain sah nach eigener Aussage einen Dingo aus dem Zelt kommen und rief, ein Dingo habe ihr Baby. Eine nächtliche Suche mit Polizei, Rangern und Anangu-Fährtenlesern blieb erfolglos; im Zelt fanden sich Blutspuren, Fährtenleser sahen Dingospuren. Eine Woche später entdeckte ein Tourist Azarias Strampelanzug mit Unterhemd und Windel nahe einem Dingobau, das Jäckchen, das sie getragen hatte, fehlte. Das Kind wurde nie gefunden.",
  "opfer": "Azaria Chantel Loren Chamberlain war am 11. Juni 1980 in Mount Isa geboren worden, ihre Eltern Michael und Lindy Chamberlain gehörten zur Kirche der Siebenten-Tags-Adventisten, Michael war Pastor. Opfer wurde neben dem Kind auch die Familie: Lindy Chamberlain verbrachte über drei Jahre im Gefängnis, beide Eltern wurden über Jahre öffentlich als Mörder behandelt, ihr Glaube wurde zum Gegenstand absurder Gerüchte. Michael Chamberlain starb 2017; Lindy Chamberlain-Creighton setzt sich seither gegen Justizirrtümer ein.",
  "ermittlung": "Eine erste Leichenschau in Alice Springs unter Coroner Denis Barritt kam im Februar 1981 zu dem Schluss, ein Dingo habe das Kind genommen, und kritisierte die Polizei; sie wurde als erste australische Gerichtsverhandlung live im Fernsehen übertragen. Die Polizei des Northern Territory ermittelte weiter. Der Londoner Rechtsmediziner James Cameron sah am Strampler Hinweise auf eine Schnittwunde und den Abdruck einer kleinen blutigen Hand. Die Biologin Joy Kuhl meldete fötales Hämoglobin, also Säuglingsblut, im Auto der Familie. Eine zweite Leichenschau ordnete daraufhin ein Strafverfahren an. Diese Gutachten erwiesen sich später als nicht tragfähig: Ein Teil des vermeintlichen Blutes war Schalldämmstoff aus der Fahrzeugfertigung, der Test reagierte auch auf andere Substanzen.",
  "taeter": "Einen menschlichen Täter gab es nicht. Nach dem Befund von 2012 wurde Azaria von einem Dingo angegriffen und fortgeschleppt. Zu den Belegen gehörten die Aussagen mehrerer Camper, die Spuren am Zelt, der Fundort der Kleidung und spätere dokumentierte Dingoangriffe auf Kinder in Queensland, darunter ein tödlicher Angriff auf einen Neunjährigen auf Fraser Island 2001, die eine solche Tat plausibel machten. Lindy und Michael Chamberlain waren zu Unrecht verurteilt worden; ihre Unschuld ist gerichtlich festgestellt.",
  "prozess": "Im Prozess in Darwin wurde Lindy Chamberlain am 29. Oktober 1982 des Mordes für schuldig befunden und zu lebenslanger Haft mit Zwangsarbeit verurteilt, Michael Chamberlain wegen Beihilfe nach der Tat zu einer Bewährungsstrafe. Berufungen scheiterten, 1984 auch vor dem High Court mit drei zu zwei Stimmen. Nach dem Fund des fehlenden Jäckchens am Uluru im Februar 1986 kam Lindy Chamberlain am 7. Februar frei. Die Untersuchungskommission unter Richter Trevor Morling verwarf 1987 die Beweisführung, am 15. September 1988 hob das Berufungsgericht des Northern Territory beide Urteile auf. 1992 erhielt die Familie 1,3 Millionen australische Dollar Entschädigung.",
  "legende": "Der Satz „The dingo ate my baby“ ist so nie gefallen; überliefert ist sinngemäß „Ein Dingo hat mein Baby“. Die Verballhornung wurde zum Spottvers in Comedy und Fernsehen. Gerüchte, der Name Azaria bedeute „Opfer in der Wüste“ oder die Adventisten brächten Kinderopfer, waren frei erfunden, prägten aber die öffentliche Meinung. Ebenso falsch war die verbreitete Annahme, Dingos seien zu einem solchen Angriff nicht fähig. Gesichert ist, dass die Verurteilung auf fehlerhaften forensischen Gutachten und einem Klima öffentlicher Vorverurteilung beruhte, in dem Lindy Chamberlains gefasstes Auftreten als Kälte gedeutet wurde.",
  "bedeutung": "Der Fall gilt als der bekannteste Justizirrtum Australiens. Er führte zu strengeren Anforderungen an forensische Gutachten und zu einer Debatte darüber, wie Medien Prozesse beeinflussen; der Film „A Cry in the Dark“ (Evil Angels) von 1988 machte ihn weltweit bekannt. Nach einer dritten Leichenschau 1995 mit offenem Ergebnis stellte Coroner Elizabeth Morris am 12. Juni 2012 fest, dass ein Dingo Azaria angegriffen und getötet hatte, und ließ die Sterbeurkunde ändern. Für die Familie war das die späte amtliche Bestätigung.",
  "zeitleiste": [
   {
    "datum": "17. August 1980",
    "jahr": 1980,
    "text": "Azaria verschwindet aus dem Zelt der Familie am Uluru."
   },
   {
    "datum": "20. Februar 1981",
    "jahr": 1981,
    "text": "Die erste Leichenschau kommt zu dem Schluss, ein Dingo habe das Kind genommen."
   },
   {
    "datum": "29. Oktober 1982",
    "jahr": 1982,
    "text": "Lindy Chamberlain wird in Darwin wegen Mordes zu lebenslanger Haft verurteilt."
   },
   {
    "datum": "Februar 1984",
    "jahr": 1984,
    "text": "Der High Court weist die Berufung mit drei zu zwei Stimmen ab."
   },
   {
    "datum": "7. Februar 1986",
    "jahr": 1986,
    "text": "Nach dem Fund von Azarias Jäckchen wird Lindy Chamberlain freigelassen."
   },
   {
    "datum": "15. September 1988",
    "jahr": 1988,
    "text": "Das Berufungsgericht des Northern Territory hebt die Urteile auf."
   },
   {
    "datum": "12. Juni 2012",
    "jahr": 2012,
    "text": "Coroner Elizabeth Morris stellt fest, dass ein Dingo Azaria getötet hat."
   }
  ],
  "quellen": [
   "Royal Commission of Inquiry into Chamberlain Convictions (T. R. Morling): Report, 1987",
   "Northern Territory Coroner's Court: Inquest into the death of Azaria Chantel Loren Chamberlain, Findings, 12. Juni 2012",
   "National Museum of Australia: Defining Moments – Azaria Chamberlain",
   "The Guardian / BBC: Berichte zum Coroner-Befund, Juni 2012",
   "John Bryson: Evil Angels, 1985"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/azaria-chamberlain-0.jpg",
    "breite": 900,
    "hoehe": 762,
    "zeigt": "Lindy Chamberlain bei ihrer Freilassung im Februar 1986, Standbild aus einem ABC-Nachrichtenbeitrag",
    "urheber": "*ABC_Lindy_Chamberlain_Free.ogv: THE DISAPPEARANCE OF AZARIA CHAMBERLAIN provided by the Australian Broadcasti",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Lindy_Chamberlain_1986_face_photo.jpg"
   },
   {
    "datei": "bilder/dark/azaria-chamberlain-1.jpg",
    "breite": 900,
    "hoehe": 517,
    "zeigt": "Der Uluru (Ayers Rock), an dessen Fuß der Campingplatz von 1980 lag",
    "urheber": "Australien-Links.ch",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ayers-Rock.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "brinks-mat-raub",
  "titel": "Der Brink’s-Mat-Raub",
  "untertitel": "Drei Tonnen Gold vom Flughafen Heathrow, London 1983",
  "jahr": 1983,
  "zeitraum": "26. November 1983, Ermittlungen und Prozesse bis in die 1990er-Jahre",
  "ort": "Heathrow International Trading Estate, am Flughafen London-Heathrow",
  "land": "Großbritannien",
  "lat": 51.4775,
  "lon": -0.4614,
  "ortQuelle": "https://en.wikipedia.org/wiki/Heathrow_Airport",
  "kategorie": "Raub",
  "status": "aufgeklärt",
  "kurz": "Ein Überfall auf ein Lagerhaus bei Heathrow brachte 1983 Gold im Wert von 26 Millionen Pfund ein – das meiste verschwand über ein Geldwäschenetz, das Ermittler und Gerichte jahrelang beschäftigte.",
  "tat": "Am frühen Morgen des 26. November 1983 drangen sechs bewaffnete und maskierte Männer in das Lagerhaus Unit 7 des Sicherheitsunternehmens Brink’s-Mat auf dem Heathrow International Trading Estate ein. Sie fesselten die Wachleute und übergossen Männer mit Benzin, um die Kombinationen der Tresore zu erzwingen. Nach verbreiteter Darstellung rechneten sie mit Bargeld. Stattdessen fanden sie rund 6800 Goldbarren mit einem Gesamtgewicht von etwa drei Tonnen, dazu Diamanten, Platin und Reiseschecks. Der Wert lag nach damaligen Angaben bei rund 26 Millionen Pfund und machte die Tat zu einem der größten Raubüberfälle der britischen Geschichte. Die Täter schafften die Beute mit einem Transporter fort.",
  "opfer": "Die Wachleute, die an diesem Morgen Dienst hatten, wurden gefesselt, geschlagen und mit dem Tod bedroht; die Drohung, das Benzin anzuzünden, blieb vielen Darstellungen zufolge prägend für den Fall. Getötet wurde bei dem Überfall niemand. Das spätere Todesopfer war Detective Constable John Fordham, ein Beamter der Observationseinheit der Metropolitan Police, der im Januar 1985 bei der Überwachung des Grundstücks von Kenneth Noye in Kent getötet wurde. Wirtschaftlich geschädigt waren die Eigentümer des Goldes und die Versicherer bei Lloyd’s of London, die den Schaden ersetzten.",
  "ermittlung": "Die Ermittler stießen schnell auf den Wachmann Anthony Black, dessen Schwager Brian Robinson als Berufsverbrecher bekannt war. Black gestand, den Tätern Schlüsselabdrücke, Fotos und Angaben über die Abläufe im Lager geliefert zu haben, und sagte gegen die Bande aus. Schwieriger war die Spur des Goldes. Es wurde eingeschmolzen, mit Kupfer vermischt, um seine Herkunft zu verschleiern, und über eine Edelmetallfirma in Bristol wieder in den Handel gebracht. Auffällige Bargeldbewegungen und Observationen führten zu Kenneth Noye. Nach dem Tod Fordhams fanden Polizisten bei der Durchsuchung von Noyes Anwesen elf Goldbarren. Ein Schmelzofen auf einem Grundstück bei Bath wurde im Januar 1985 entdeckt.",
  "taeter": "Als Täter des Überfalls verurteilt wurden nur Brian Robinson und Michael McAvoy; ein dritter Angeklagter wurde freigesprochen, die übrigen Mitglieder der Bande wurden für den Raub nie verurteilt. Kenneth Noye, ein Geschäftsmann aus Kent, war nach Erkenntnissen der Ermittler nicht beim Überfall dabei, sondern übernahm Gold und organisierte das Einschmelzen. Zum Netz, das die Erlöse über Firmen, Immobilien und Konten im Ausland wusch, gehörten unter anderem ein Anwalt und mehrere Geschäftsleute; manche wurden verurteilt, andere freigesprochen, darunter 1987 John Palmer, auf dessen Grundstück bei Bath der Schmelzofen stand. In den folgenden Jahrzehnten wurden mehrere Männer aus dem Umfeld ermordet; ein Zusammenhang mit dem Raub ist nicht in jedem Fall belegt.",
  "prozess": "Anthony Black erhielt sechs Jahre Haft. Robinson und McAvoy wurden im Dezember 1984 am Old Bailey zu je 25 Jahren verurteilt. Noye, der Fordham mit einem Messer getötet hatte, berief sich auf Notwehr, weil er den maskierten Beamten nachts in seinem Garten für einen Angreifer gehalten habe; die Geschworenen sprachen ihn im Dezember 1985 vom Mord frei. 1986 wurde er wegen Verschwörung zur Hehlerei mit dem Gold zu 14 Jahren verurteilt. Der Anwalt Michael Relton erhielt 1988 zwölf Jahre wegen Geldwäsche. Vor Zivilgerichten setzten die Versicherer gegen Beteiligte Schadenersatzforderungen in Millionenhöhe durch.",
  "legende": "Oft heißt es, wer in Großbritannien nach 1983 Goldschmuck gekauft habe, trage mit hoher Wahrscheinlichkeit Gold aus Heathrow. Das ist eine griffige Zuspitzung, aber nicht nachprüfbar: Eingeschmolzenes Gold lässt sich nicht zurückverfolgen, belastbare Zahlen über den Verbleib gibt es nicht. Gesichert ist, dass nur ein kleiner Teil der Barren sichergestellt wurde und der größte Teil über legale Händler wieder in den Kreislauf gelangte. Auch die Rede von einem „Fluch“, der wegen der späteren Morde auf der Beute liege, ist ein Medienbild. Und das Bild vom perfekten Coup trügt: Der Überfall wurde durch den Insider schnell aufgeklärt, die Geldwäsche hinterließ Spuren, die zu zahlreichen Verfahren führten.",
  "bedeutung": "Der Fall zeigte britischen Ermittlern, dass bei großen Raubzügen die schwierigste Arbeit nach der Tat beginnt: bei der Verfolgung der Erlöse. Er gilt als Lehrstück für die Verbindung von Gewaltkriminalität und Geldwäsche über scheinbar legale Firmen, Immobilien und Finanzplätze. Die Versicherer gingen über Jahre mit Zivilklagen gegen Beteiligte vor und zeigten, dass sich auf diesem Weg ein Teil des Schadens zurückholen ließ. Der Fall wurde vielfach verfilmt und erzählt, zuletzt in der BBC-Serie „The Gold“ (2023).",
  "zeitleiste": [
   {
    "datum": "26. November 1983",
    "jahr": 1983,
    "text": "Überfall auf das Brink’s-Mat-Lager bei Heathrow."
   },
   {
    "datum": "Dezember 1983",
    "jahr": 1983,
    "text": "Der Wachmann Anthony Black gesteht; Robinson und McAvoy werden festgenommen."
   },
   {
    "datum": "Dezember 1984",
    "jahr": 1984,
    "text": "Robinson und McAvoy werden zu je 25 Jahren verurteilt."
   },
   {
    "datum": "Januar 1985",
    "jahr": 1985,
    "text": "Detective Constable John Fordham wird auf Noyes Grundstück getötet."
   },
   {
    "datum": "Dezember 1985",
    "jahr": 1985,
    "text": "Noye wird vom Vorwurf des Mordes freigesprochen."
   },
   {
    "datum": "1986",
    "jahr": 1986,
    "text": "Noye erhält 14 Jahre wegen der Verwertung des Goldes."
   },
   {
    "datum": "1988",
    "jahr": 1988,
    "text": "Der Anwalt Michael Relton wird wegen Geldwäsche verurteilt."
   }
  ],
  "quellen": [
   "Andrew Hogg, Jim McDougall, Robin Morgan: Bullion. Brink’s-Mat – The Story of Britain’s Biggest Gold Robbery, London 1988",
   "World History Encyclopedia: The Brink’s-Mat Robbery",
   "BBC News: Berichterstattung zu Kenneth Noye und zum Brink’s-Mat-Raub"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/brinks-mat-raub-0.jpg",
    "breite": 640,
    "hoehe": 423,
    "zeigt": "Luftaufnahme des Heathrow International Trading Estate, des Gewerbegebiets am Flughafen, in dem das Brink’s-Mat-Lager lag (Aufnahme 2014)",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Heathrow_International_Trading_Estate_from_the_air_-_geograph.org.uk_-_4396984.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "mord-olof-palme",
  "titel": "Der Mord an Olof Palme",
  "untertitel": "Schüsse auf den schwedischen Ministerpräsidenten, Stockholm 1986",
  "jahr": 1986,
  "zeitraum": "28. Februar 1986; Ermittlungen bis Juni 2020",
  "ort": "Kreuzung Sveavägen/Tunnelgatan, Stockholm",
  "land": "Schweden",
  "lat": 59.3366,
  "lon": 18.0628,
  "ortQuelle": "https://en.wikipedia.org/wiki/Assassination_of_Olof_Palme",
  "kategorie": "Mord",
  "status": "umstritten",
  "kurz": "Ein Regierungschef wird auf offener Straße erschossen, die Ermittlung wird zur größten der schwedischen Geschichte – und endet 2020 mit einem toten Verdächtigen, der nie angeklagt wurde.",
  "tat": "Am Abend des 28. Februar 1986 gingen Ministerpräsident Olof Palme und seine Frau Lisbet nach einem Besuch des Kinos Grand zu Fuß nach Hause, ohne Leibwächter. Um 23.21 Uhr trat an der Ecke Sveavägen/Tunnelgatan ein Mann von hinten an das Paar heran und schoss Palme mit einem Revolver aus nächster Nähe in den Rücken. Ein zweiter Schuss streifte Lisbet Palme. Der Täter floh durch die Tunnelgatan und über eine Treppe in Richtung Malmskillnadsgatan. Palme starb kurz darauf im Krankenhaus. Passanten fanden in den folgenden Tagen zwei Geschosse vom Kaliber .357 Magnum; die Tatwaffe wurde nie gefunden.",
  "opfer": "Olof Palme, geboren 1927, war Sozialdemokrat und Ministerpräsident von 1969 bis 1976 und erneut ab 1982. International kannte man ihn als scharfen Kritiker des Vietnamkriegs und der Apartheid in Südafrika, als Fürsprecher von Abrüstung und Entspannung; im eigenen Land war er bewundert und zugleich heftig angefeindet. Seine Frau Lisbet Palme überlebte den Anschlag leicht verletzt und blieb die wichtigste Augenzeugin. Sie starb 2018.",
  "ermittlung": "Die ersten Stunden gelten als verpatzt: Kritiker bemängelten eine zu kleine Absperrung des Tatorts sowie eine schleppende Fahndung und Zeugenbefragung. Die Leitung übernahm der Stockholmer Polizeichef Hans Holmér, der ohne Erfahrung mit Mordermittlungen war und die Ermittlung auf die kurdische PKK lenkte, ohne Beweise zu finden. Er trat im März 1987 zurück. Die Ermittlung wuchs zu einer der größten der Welt: Nach Angaben der Staatsanwaltschaft wurden über 10.000 Menschen befragt, 134 Personen gestanden die Tat, doch keines dieser Geständnisse hielt einer Prüfung stand. Eine staatliche Prüfkommission kritisierte 1999 die Arbeit von Polizei und Staatsanwaltschaft scharf. Erst ab 2017 wurde der Fall unter Oberstaatsanwalt Krister Petersson neu geordnet.",
  "taeter": "Der Täter ist nicht gerichtlich festgestellt. 1988 wurde Christer Pettersson festgenommen, ein vorbestrafter Mann aus Stockholm, den Lisbet Palme bei einer Gegenüberstellung erkannt haben wollte. Er wurde 1989 in erster Instanz verurteilt, aber noch im selben Jahr vom Berufungsgericht einstimmig freigesprochen; er gilt als unschuldig und starb 2004. Am 10. Juni 2020 benannte Petersson den 2000 verstorbenen Grafiker Stig Engström als Hauptverdächtigen. Engström arbeitete im Skandia-Haus nahe dem Tatort und hatte sich selbst als Zeuge gemeldet. Er wurde nie angeklagt, konnte sich nicht verteidigen und gilt rechtlich als unschuldig.",
  "prozess": "Gegen Christer Pettersson verhandelte 1989 das Amtsgericht Stockholm, das ihn am 27. Juli 1989 in einem geteilten Urteil schuldig sprach – gegen die Stimmen der beiden Berufsrichter. Das Berufungsgericht Svea hovrätt sprach ihn am 2. November 1989 frei, weil die Identifizierung durch Lisbet Palme unter fehlerhaften Bedingungen zustande gekommen war. Ein späterer Antrag auf Wiederaufnahme scheiterte. Gegen Stig Engström gab es kein Verfahren: Weil er tot war, stellte die Staatsanwaltschaft die Ermittlung am 10. Juni 2020 ein. Ob die Indizien für eine Anklage oder gar eine Verurteilung gereicht hätten, ist umstritten.",
  "legende": "Um den Mord ranken sich zahlreiche Theorien: Die PKK, das südafrikanische Apartheid-Regime, ausländische Geheimdienste oder Kreise innerhalb der schwedischen Polizei sollen dahintergestanden haben. Keine dieser Spuren wurde belegt. Gesichert sind Tatzeit, Tatort, das Kaliber der Geschosse und die Freisprechung Christer Petterssons. Auch die Benennung Stig Engströms 2020 ist keine Aufklärung im juristischen Sinn: Die Staatsanwaltschaft räumte ein, dass sie ihn wegen seines Todes nicht anklagen könne. Seine Angehörigen weisen die Vorwürfe zurück, und Kritiker in Schweden sprachen von einem unbefriedigenden Abschluss.",
  "bedeutung": "Der Mord erschütterte das Selbstverständnis eines Landes, in dem Spitzenpolitiker ohne Schutz durch die Straßen gingen. Die Fehler der ersten Stunden wurden zum Lehrbeispiel für die Bedeutung der Tatortarbeit und einer klaren Ermittlungsführung. Die Einstellung 2020 löste zudem eine grundsätzliche Debatte aus: Darf eine Staatsanwaltschaft einen Toten öffentlich als Täter benennen, der sich nicht mehr verteidigen kann und nie vor Gericht stand?",
  "zeitleiste": [
   {
    "datum": "28. Februar 1986",
    "jahr": 1986,
    "text": "Olof Palme wird um 23.21 Uhr an der Ecke Sveavägen/Tunnelgatan erschossen."
   },
   {
    "datum": "März 1987",
    "jahr": 1987,
    "text": "Ermittlungsleiter Hans Holmér tritt nach der erfolglosen PKK-Spur zurück."
   },
   {
    "datum": "14. Dezember 1988",
    "jahr": 1988,
    "text": "Christer Pettersson wird festgenommen."
   },
   {
    "datum": "27. Juli 1989",
    "jahr": 1989,
    "text": "Das Amtsgericht Stockholm verurteilt Pettersson wegen Mordes."
   },
   {
    "datum": "2. November 1989",
    "jahr": 1989,
    "text": "Das Berufungsgericht spricht Pettersson frei."
   },
   {
    "datum": "1999",
    "jahr": 1999,
    "text": "Eine staatliche Prüfkommission rügt die Ermittlungen scharf."
   },
   {
    "datum": "10. Juni 2020",
    "jahr": 2020,
    "text": "Die Staatsanwaltschaft benennt den verstorbenen Stig Engström als Hauptverdächtigen und stellt das Verfahren ein."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Olof Palme",
   "Åklagarmyndigheten: Beslut i förundersökningen om mordet på Sveriges statsminister Olof Palme, 10.6.2020",
   "Statens offentliga utredningar SOU 1999:88: Brottsutredningen efter mordet på statsminister Olof Palme (Granskningskommissionen)",
   "CNN: Sweden closes investigation into 1986 murder of Prime Minister Olof Palme, 10.6.2020"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/mord-olof-palme-0.jpg",
    "breite": 900,
    "hoehe": 600,
    "zeigt": "Die Kreuzung Sveavägen/Tunnelgatan in Stockholm, der Tatort (Aufnahme 2005)",
    "urheber": "Tage Olsin",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Place_of_murder_of_Olof_Palme.jpg"
   },
   {
    "datei": "bilder/dark/mord-olof-palme-1.jpg",
    "breite": 900,
    "hoehe": 699,
    "zeigt": "Stockholmer legen am 3. März 1986 Blumen am Tatort nieder",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Palme_Trauer_1986.jpg"
   },
   {
    "datei": "bilder/dark/mord-olof-palme-2.jpg",
    "breite": 396,
    "hoehe": 283,
    "zeigt": "Olof Palme bei einer Mai-Kundgebung in Stockholm, frühe 1970er Jahre",
    "urheber": ":User:Oiving",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Olof_Palme_statsminister%2C_tidigt_70-tal.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hwaseong-mordserie",
  "titel": "Die Hwaseong-Mordserie",
  "untertitel": "Zehn Morde, ein falsch Verurteilter und die späte DNA-Lösung, Südkorea 1986–1991",
  "jahr": 1986,
  "zeitraum": "September 1986 bis April 1991; aufgeklärt 2019",
  "ort": "Hwaseong, Provinz Gyeonggi",
  "land": "Südkorea",
  "lat": 37.1806,
  "lon": 126.8264,
  "ortQuelle": "https://en.wikipedia.org/wiki/Hwaseong,_Gyeonggi",
  "kategorie": "Serienmord",
  "status": "aufgeklärt",
  "kurz": "Zehn Frauen und Mädchen werden in einer ländlichen Gegend Südkoreas getötet. Ein Unschuldiger sitzt 20 Jahre in Haft, bevor eine DNA-Spur 2019 den wahren Täter überführt.",
  "tat": "Zwischen dem 15. September 1986 und dem 3. April 1991 wurden in der damals ländlichen Gegend um Hwaseong südlich von Seoul zehn Frauen und Mädchen vergewaltigt und getötet, die jüngste ein Schulkind, die älteste über siebzig. Die meisten wurden auf Feldwegen oder an Wegrändern gefunden, oft auf dem Heimweg am Abend. Die Serie verbreitete in der Region lange Angst; Frauen mieden abends die Wege. Nach Angaben der Polizei von 2019 gestand der Täter neben diesen zehn Taten vier weitere Morde in der Umgebung und in Cheongju sowie über 30 Vergewaltigungen und Versuche. Gerichtlich verurteilt wurde er dafür nicht, weil die Taten verjährt waren.",
  "opfer": "Die zehn Opfer waren Bäuerinnen, Arbeiterinnen, Schülerinnen und ältere Frauen aus den Dörfern der Gegend, Menschen, die auf dem Weg nach Hause, zur Arbeit oder zum Bus waren. Ihre Namen sind in der koreanischen Öffentlichkeit nicht breit bekannt und werden hier nicht genannt. Dass der Fall jahrzehntelang vor allem als ungelöstes Rätsel und als Filmstoff erzählt wurde, empfanden Angehörige als zusätzliche Last. Mit der Aufklärung 2019 erhielten die Familien erstmals Gewissheit, wer für den Tod verantwortlich war.",
  "ermittlung": "Es war eine der größten Fahndungen der südkoreanischen Geschichte: Nach Polizeiangaben waren, nach Einsätzen gezählt, über zwei Millionen Polizisten beteiligt, und mehr als 21.000 Menschen wurden als mögliche Verdächtige befragt. Zugleich arbeitete die Polizei mit Methoden, die heute als Unrecht gelten: Verdächtige wurden ohne Haftbefehl festgehalten, geschlagen und am Schlafen gehindert. Die DNA-Analyse steckte in Korea noch in den Anfängen; Proben wurden zeitweise ins Ausland geschickt, ohne Ergebnis. Erst 2019 ließ eine Sonderkommission alte Beweisstücke erneut untersuchen. DNA-Spuren an Beweisstücken aus der fünften, siebten und neunten Tat passten zu einem Mann, der seit 1994 wegen eines anderen Mordes in Haft saß. Nach mehreren Vernehmungen gestand er.",
  "taeter": "Der Täter ist Lee Choon-jae, Jahrgang 1963, der aus der Gegend stammte. Er war 1994 in Cheongju festgenommen worden, weil er die Schwester seiner Frau vergewaltigt und getötet hatte, und verbüßt dafür eine lebenslange Haftstrafe; ein zunächst verhängtes Todesurteil wurde 1995 umgewandelt. Für die Hwaseong-Morde ist er nicht verurteilt, weil die Verjährungsfrist im April 2006 abgelaufen war. Er wurde aber im Wiederaufnahmeverfahren gegen den zu Unrecht Verurteilten als Zeuge gehört, gestand dort die achte Tat und bat um Entschuldigung. Polizei und Medien nennen den Fall seither nach ihm.",
  "prozess": "Für die achte Tat, den Mord an einer Jugendlichen in ihrem Elternhaus im September 1988, wurde 1989 Yoon Sung-yeo verurteilt, ein junger Mann, der seit einer Kinderlähmung gehbehindert ist. Grundlage waren ein unter Schlafentzug und Schlägen erzwungenes Geständnis und eine Haaranalyse. Er erhielt lebenslange Haft und kam 2009 nach rund 20 Jahren auf Bewährung frei. Nach Lees Geständnis beantragte er die Wiederaufnahme; am 17. Dezember 2020 sprach ihn das Bezirksgericht Suwon frei, und der Vorsitzende Richter entschuldigte sich im Namen der Justiz. Im März 2021 sprach ihm das Gericht eine Haftentschädigung von rund 2,5 Milliarden Won zu.",
  "legende": "Lange galt der Fall als Inbegriff des perfekten, unaufklärbaren Verbrechens, befördert durch Bong Joon-hos Film „Memories of Murder“ von 2003, der die Ermittlungen frei nachzeichnet. Dass der Täter längst wegen eines anderen Mordes im Gefängnis saß, zeigt jedoch, dass es weniger an seiner Raffinesse lag als an den Grenzen und Fehlern der Ermittlung. Die Annahme der Ermittler von 1989, die achte Tat sei eine Nachahmungstat und durch Yoons Verurteilung erledigt, hat sich als falsch erwiesen. Gerichtlich festgestellt ist Lees Täterschaft nur mittelbar, durch den Freispruch Yoons und Lees Aussage; die übrigen Taten stützen sich auf DNA-Treffer, sein Geständnis und den Abschlussbericht der Polizei.",
  "bedeutung": "Als Südkorea 2015 die Verjährung für Mord abschaffte, kam das für die Hwaseong-Morde zu spät, denn die Neuregelung gilt nicht für bereits verjährte Taten. Der Fall Yoon wurde zum wichtigsten Beispiel für erzwungene Geständnisse; die Polizei entschuldigte sich öffentlich für Folter und Fehlurteile. Zugleich zeigt die Aufklärung, was die erneute DNA-Untersuchung alter Beweisstücke leisten kann, ähnlich wie beim Golden State Killer in den USA, und warum sorgfältig aufbewahrte Asservate entscheidend sind.",
  "zeitleiste": [
   {
    "datum": "15. September 1986",
    "jahr": 1986,
    "text": "Die erste Tat der Serie in der Gegend von Hwaseong."
   },
   {
    "datum": "September 1988",
    "jahr": 1988,
    "text": "Achte Tat: Eine Jugendliche wird in ihrem Elternhaus getötet."
   },
   {
    "datum": "1989",
    "jahr": 1989,
    "text": "Yoon Sung-yeo wird nach einem erzwungenen Geständnis zu lebenslanger Haft verurteilt."
   },
   {
    "datum": "3. April 1991",
    "jahr": 1991,
    "text": "Die zehnte und letzte Tat der Serie."
   },
   {
    "datum": "April 2006",
    "jahr": 2006,
    "text": "Die Verjährungsfrist für die letzte Tat läuft ab."
   },
   {
    "datum": "September 2019",
    "jahr": 2019,
    "text": "Die Polizei gibt bekannt, dass DNA-Spuren zu Lee Choon-jae passen; er gesteht."
   },
   {
    "datum": "17. Dezember 2020",
    "jahr": 2020,
    "text": "Das Bezirksgericht Suwon spricht Yoon Sung-yeo im Wiederaufnahmeverfahren frei."
   }
  ],
  "quellen": [
   "CNN: Man wrongly convicted in South Korea's most notorious serial murder case found not guilty, 17. Dezember 2020",
   "Associated Press: Wrongfully accused South Korean man acquitted of murder, 17. Dezember 2020",
   "Korea JoongAng Daily: Retrial bound to clear name of convicted murderer, 2020",
   "HNGN / Yonhap: Ex-prisoner to receive 2.5 billion won compensation, März 2021"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hwaseong-mordserie-0.jpg",
    "breite": 900,
    "hoehe": 980,
    "zeigt": "Lage der Stadt Hwaseong in der Provinz Gyeonggi",
    "urheber": "Kladess",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hwaseong_Gyeonggi_South_Korea.svg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "geiseldrama-gladbeck",
  "titel": "Das Geiseldrama von Gladbeck",
  "untertitel": "54 Stunden Geiselnahme vor laufenden Kameras, August 1988",
  "jahr": 1988,
  "zeitraum": "16. bis 18. August 1988",
  "ort": "Gladbeck-Rentfort, Bremen, Niederlande, Köln, A3 bei Bad Honnef",
  "land": "Deutschland",
  "lat": 51.57291,
  "lon": 6.95246,
  "ortQuelle": "https://de.wikipedia.org/wiki/Rentfort",
  "kategorie": "Entführung",
  "status": "aufgeklärt",
  "kurz": "Zwei Bankräuber zogen mit Geiseln quer durch Deutschland, Reporter interviewten sie live – drei Menschen starben, und die Presse gab sich danach neue Regeln.",
  "tat": "Am Morgen des 16. August 1988 überfielen Hans-Jürgen Rösner und Dieter Degowski eine Filiale der Deutschen Bank im Gladbecker Stadtteil Rentfort und nahmen zwei Angestellte als Geiseln. Nach stundenlanger Belagerung verließen sie Gladbeck in einem Fluchtwagen, den die Polizei mit einem Peilsender präpariert hatte; Rösners Freundin Marion Löblich schloss sich an. Am Abend des 17. August brachten sie in Bremen-Huckelriede einen Linienbus mit Fahrgästen in ihre Gewalt. Die Flucht führte über die Autobahn in die Niederlande und zurück nach Köln, wo Reporter und Schaulustige den Fluchtwagen umringten. Am 18. August beendete ein Spezialeinsatzkommando die Geiselnahme auf der A3 bei Bad Honnef nach rund 54 Stunden.",
  "opfer": "Drei Menschen kamen ums Leben. Der 14-jährige italienische Schüler Emanuele De Giorgi wurde im entführten Bus erschossen. Die 18-jährige Silke Bischoff, Auszubildende zur Rechtsanwaltsgehilfin in Bremen, starb beim Zugriff auf der Autobahn. Der 31-jährige Bremer Polizeiobermeister Ingo Hagen kam auf dem Weg zum Einsatzort bei einem Zusammenstoß mit einem Lastwagen ums Leben. Überlebende Geiseln berichteten noch Jahrzehnte später von schweren seelischen Folgen. Seit 2019 erinnert eine Stele am Busbahnhof Huckelriede an die drei Toten.",
  "ermittlung": "Der Polizeieinsatz gilt als Lehrstück des Versagens. Mehrfach boten sich Gelegenheiten zum Zugriff, doch die Einsatzleitungen in Nordrhein-Westfalen und Bremen arbeiteten nebeneinander statt miteinander. An der Raststätte Grundbergsee nahmen Beamte Marion Löblich ohne Weisung fest; die Täter drohten, Geiseln zu töten, und bevor Löblich zurückgebracht war, erschoss Degowski Emanuele De Giorgi. Ein Rettungswagen stand nicht bereit; das Gericht stellte später fest, dass die Verzögerung für den Tod nicht ursächlich war. Auch der Zugriff auf der A3 wurde später als schlecht vorbereitet kritisiert. Parlamentarische Untersuchungsausschüsse in Nordrhein-Westfalen und Bremen arbeiteten die Fehler auf; der nordrhein-westfälische Innenminister Herbert Schnoor blieb im Amt.",
  "taeter": "Hans-Jürgen Rösner und Dieter Degowski stammten aus Gladbeck und waren seit der Schulzeit befreundet. Rösner führte während der Flucht das Wort, suchte die Kameras und gab Interviews mit der Waffe in der Hand. Degowski war der Schütze im Bremer Bus. Marion Löblich, Rösners Freundin, stieß am ersten Abend dazu. Alle drei wurden beim Zugriff auf der A3 festgenommen. Nach Feststellung des Gerichts traf Silke Bischoff ein Geschoss aus Rösners Waffe; ob er mit Tötungsabsicht schoss, ließ sich nicht klären.",
  "prozess": "Das Landgericht Essen verurteilte Rösner und Degowski am 22. März 1991 zu lebenslangen Freiheitsstrafen, Degowski wegen Mordes an Emanuele De Giorgi. Gegen Rösner ordnete das Gericht zusätzlich Sicherungsverwahrung an. Marion Löblich erhielt neun Jahre Haft und kam nach sechs Jahren vorzeitig frei. Degowski wurde 2018 nach fast 30 Jahren Haft entlassen. Rösners Anträge auf vorzeitige Entlassung wurden über Jahre abgelehnt.",
  "legende": "Ob Silke Bischoff durch eine Polizeikugel starb, war nach dem Schusswechsel mit 62 Polizeischüssen zunächst offen; das Gericht stellte fest, dass das tödliche Geschoss aus Rösners Waffe kam. Ebenso falsch ist das Bild von Journalisten als bloßen Beobachtern: Reporter führten Interviews mit den bewaffneten Tätern, während diese ihre Geiseln bedrohten, und ein Reporter des Kölner „Express“ stieg in den Fluchtwagen, um die Täter aus der Stadt zu lotsen. Nicht jeder Beitrag wurde gesendet, doch die Bilder aus der Kölner Fußgängerzone gingen um die Welt.",
  "bedeutung": "Gladbeck wurde zum Wendepunkt der deutschen Medienethik. Am 7. September 1988 erklärte der Deutsche Presserat, dass Geiselnehmer während einer Tat nicht interviewt werden und Journalisten nicht eigenmächtig vermitteln dürfen. Beides steht heute in Richtlinie 11.2 des Pressekodex: „Interviews mit Täterinnen und Tätern während des Tatgeschehens darf es nicht geben.“ Auch die Polizei zog Lehren für Führung, Abstimmung zwischen Ländern und den Einsatz von Spezialkräften bei mobilen Geiselnahmen.",
  "zeitleiste": [
   {
    "datum": "16. August 1988",
    "jahr": 1988,
    "text": "Rösner und Degowski überfallen eine Bankfiliale in Gladbeck-Rentfort und nehmen zwei Angestellte als Geiseln."
   },
   {
    "datum": "17. August 1988",
    "jahr": 1988,
    "text": "In Bremen-Huckelriede bringen die Täter einen Linienbus in ihre Gewalt; Emanuele De Giorgi wird erschossen, Polizist Ingo Hagen verunglückt tödlich."
   },
   {
    "datum": "18. August 1988",
    "jahr": 1988,
    "text": "In der Kölner Fußgängerzone umlagern Reporter den Fluchtwagen; beim Zugriff auf der A3 stirbt Silke Bischoff."
   },
   {
    "datum": "7. September 1988",
    "jahr": 1988,
    "text": "Der Deutsche Presserat untersagt Interviews mit Geiselnehmern während der Tat."
   },
   {
    "datum": "22. März 1991",
    "jahr": 1991,
    "text": "Das Landgericht Essen verurteilt Rösner und Degowski zu lebenslanger Haft."
   },
   {
    "datum": "2018",
    "jahr": 2018,
    "text": "Dieter Degowski wird aus der Haft entlassen."
   },
   {
    "datum": "März 2019",
    "jahr": 2019,
    "text": "Bremen weiht am Busbahnhof Huckelriede eine Gedenkstele für die drei Toten ein."
   }
  ],
  "quellen": [
   "Urteil des Landgerichts Essen vom 22. März 1991 (Geiselnahme von Gladbeck)",
   "Deutscher Presserat: 30 Jahre Gladbeck – Journalisten dürfen sich nicht instrumentalisieren lassen, 2018",
   "Deutscher Presserat: Pressekodex, Richtlinie 11.2",
   "Reiner Burger: Gladbecker Geiseldrama – 54 Stunden Staatsversagen, FAZ, 14.8.2013",
   "Legal Tribune Online: Jahrestag Geiseldrama Gladbeck"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/geiseldrama-gladbeck-0.jpg",
    "breite": 900,
    "hoehe": 1052,
    "zeigt": "Karte der Fluchtroute vom 16. bis 18. August 1988",
    "urheber": "Ætoms",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Gladbeck_hostage_crisis_route.svg"
   },
   {
    "datei": "bilder/dark/geiseldrama-gladbeck-1.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Die ehemalige Filiale der Deutschen Bank in Gladbeck-Rentfort (Aufnahme 2018)",
    "urheber": "Webwasher",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Rentfort_Deutsche_Bank.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "gardner-museum-kunstraub",
  "titel": "Der Kunstraub im Gardner Museum",
  "untertitel": "Dreizehn Werke, 81 Minuten und leere Rahmen, Boston 1990",
  "jahr": 1990,
  "zeitraum": "18. März 1990, bis heute ungeklärt",
  "ort": "Isabella Stewart Gardner Museum, Boston",
  "land": "USA",
  "lat": 42.3383,
  "lon": -71.0991,
  "ortQuelle": "https://en.wikipedia.org/wiki/Isabella_Stewart_Gardner_Museum",
  "kategorie": "Raub",
  "status": "ungeklärt",
  "kurz": "Zwei falsche Polizisten stehlen 1990 in Boston dreizehn Kunstwerke, darunter einen Vermeer und drei Rembrandts. Es ist der wertvollste ungeklärte Kunstraub der Welt; die Rahmen hängen bis heute leer.",
  "tat": "In der Nacht nach dem St. Patrick's Day, am frühen Morgen des 18. März 1990, klingelten zwei Männer in Polizeiuniform am Personaleingang des Isabella Stewart Gardner Museum und gaben an, wegen einer Störung gerufen worden zu sein. Der diensthabende Wachmann ließ sie entgegen den Vorschriften ein. Die Männer fesselten ihn und seinen Kollegen im Keller und blieben 81 Minuten im Haus; um 2.45 Uhr fuhren sie davon. Sie nahmen dreizehn Werke mit: Vermeers „Das Konzert“, Rembrandts „Sturm auf dem See Genezareth“, sein einziges Seestück, und sein Doppelbildnis „Dame und Herr in Schwarz“, eine kleine Selbstbildnis-Radierung Rembrandts, Manets „Chez Tortoni“, Govaert Flincks „Landschaft mit Obelisk“, fünf Zeichnungen von Degas, ein altchinesisches Bronzegefäß und einen bronzenen Adler von einer napoleonischen Fahnenstange.",
  "opfer": "Geschädigt ist vor allem die Öffentlichkeit: Die Sammlerin Isabella Stewart Gardner, 1840 bis 1924, hatte ihr Haus mit seinen Gemälden, Möbeln und Kunstgegenständen 1903 als Museum eröffnet und es Boston zur Bildung und Freude der Allgemeinheit vermacht. Ihr Testament schreibt vor, dass die Anordnung der Sammlung nicht verändert werden darf. Die beiden jungen Wachmänner blieben unverletzt, lagen aber gefesselt im Keller, bis die Polizei sie um 8.15 Uhr fand. Die beiden Rembrandt-Gemälde wurden aus ihren Rahmen geschnitten und dabei beschädigt.",
  "ermittlung": "Das FBI übernahm die Ermittlungen, weil Kunstwerke dieses Werts über Staatsgrenzen hinweg gehandelt werden könnten. Die Täter hatten die Videobänder der Überwachungsanlage mitgenommen; im Museum fanden sich kaum verwertbare Spuren. In den folgenden Jahrzehnten gingen Tausende Hinweise ein, darunter viele angebliche Angebote zum Rückkauf, die sich als Täuschungen erwiesen. 2013 erklärte das FBI, es kenne mit hoher Wahrscheinlichkeit die Identität der Täter, Angehörige einer kriminellen Gruppe aus dem Nordosten der USA; die Werke seien in die Gegend von Connecticut und Philadelphia gebracht und Anfang der 2000er-Jahre in Philadelphia zum Verkauf angeboten worden. 2015 hieß es, beide mutmaßlichen Täter seien tot. Namen nannte die Behörde nicht.",
  "taeter": "Die Täter sind offiziell unbekannt. Die Phantomzeichnungen nach den Angaben der Wachmänner zeigen zwei Männer, nach den Beschreibungen etwa Ende zwanzig bis Mitte dreißig. Im Lauf der Jahre wurden zahlreiche Personen aus dem Bostoner Milieu als Verdächtige genannt, darunter Mitglieder örtlicher Banden; mehrere wurden befragt, durchsucht oder wegen anderer Delikte verurteilt, aber niemand wurde wegen des Raubs angeklagt. Auch einer der Wachmänner geriet in den Blick, weil er die Tür geöffnet hatte; beschuldigt wurde er nie. Ein Mann aus Connecticut, bei dem das FBI 2012 nach Bildern suchte, bestritt bis zu seinem Tod jede Kenntnis. Keiner der Genannten ist überführt; sie bleiben Verdächtige.",
  "prozess": "Einen Prozess hat es nicht gegeben, weil niemand angeklagt wurde. Für den Raub selbst sind die Verjährungsfristen nach Bundesrecht längst abgelaufen; strafbar bleibt aber, wer die Werke heute besitzt oder verbirgt. Die Bundesstaatsanwaltschaft in Boston hat signalisiert, bei einer Rückgabe Straffreiheit zu prüfen. Das Museum bietet zehn Millionen Dollar für Hinweise, die zur Rückgabe aller Werke in gutem Zustand führen, anteilig auch für einzelne Stücke, und gesondert 100.000 Dollar für den Adler. Die Belohnung war 2017 von fünf auf zehn Millionen verdoppelt worden.",
  "legende": "Verbreitet ist die Vorstellung eines reichen Sammlers, der den Raub in Auftrag gab, um die Bilder heimlich zu betrachten. Dafür gibt es keinen Beleg; das FBI hält eine Tat aus dem kriminellen Milieu für wahrscheinlich. Gegen Kenner sprechen auch die Umstände: Die Täter schnitten Leinwände aus den Rahmen, nahmen eine Fahnenspitze von geringem Wert mit und ließen Tizians „Raub der Europa“, eines der bedeutendsten Bilder des Hauses, im oberen Stockwerk unberührt. Spekulationen über eine Beteiligung der IRA oder bekannter Bostoner Gangsterbosse wurden vielfach veröffentlicht, aber nie bewiesen. Die oft genannte Schadenssumme von rund 500 Millionen Dollar ist eine Schätzung.",
  "bedeutung": "Der Gardner-Raub gilt als größter Diebstahl von Privateigentum in der Geschichte der USA und als bekanntester Kunstraub nach dem der Mona Lisa 1911. Er führte dazu, dass Museen weltweit ihre Sicherheitsregeln überprüften, etwa wer nachts eine Tür öffnen darf. Vermeers „Konzert“ gilt als das wertvollste verschwundene Gemälde der Welt. Im Museum hängen die leeren Rahmen bis heute an ihren Plätzen, als Platzhalter für die fehlenden Werke und als Erinnerung daran, dass die Sammlung nach dem Willen der Stifterin unverändert bleiben soll.",
  "zeitleiste": [
   {
    "datum": "1903",
    "jahr": 1903,
    "text": "Isabella Stewart Gardner eröffnet ihr Haus in Boston als Museum."
   },
   {
    "datum": "1924",
    "jahr": 1924,
    "text": "Gardner stirbt; ihr Testament verbietet Änderungen an der Sammlung."
   },
   {
    "datum": "18. März 1990",
    "jahr": 1990,
    "text": "Zwei Männer in Polizeiuniform stehlen in 81 Minuten dreizehn Werke."
   },
   {
    "datum": "18. März 1990",
    "jahr": 1990,
    "text": "Um 8.15 Uhr findet die Polizei die gefesselten Wachmänner im Keller."
   },
   {
    "datum": "18. März 2013",
    "jahr": 2013,
    "text": "Das FBI erklärt, es kenne mit hoher Wahrscheinlichkeit die Täter, und bittet öffentlich um Hinweise."
   },
   {
    "datum": "2015",
    "jahr": 2015,
    "text": "Das FBI teilt mit, beide mutmaßlichen Täter seien inzwischen gestorben."
   },
   {
    "datum": "2017",
    "jahr": 2017,
    "text": "Das Museum verdoppelt die Belohnung auf zehn Millionen Dollar."
   }
  ],
  "quellen": [
   "Isabella Stewart Gardner Museum: The Theft (gardnermuseum.org)",
   "Federal Bureau of Investigation: Reward Offered for Return of Stolen Gardner Museum Artwork, März 2013",
   "Encyclopaedia Britannica: Isabella Stewart Gardner Museum",
   "Stephen Kurkjian: Master Thieves. The Boston Gangsters Who Pulled Off the World's Greatest Art Heist, 2015",
   "Ulrich Boser: The Gardner Heist, 2009"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/gardner-museum-kunstraub-0.jpg",
    "breite": 900,
    "hoehe": 596,
    "zeigt": "Leerer Rahmen an der Stelle, an der Rembrandts „Sturm auf dem See Genezareth“ hing (Aufnahme des FBI, 2013)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Empty_Frames_at_Isabella_Stewart_Gardner_Museum.jpg"
   },
   {
    "datei": "bilder/dark/gardner-museum-kunstraub-1.jpg",
    "breite": 879,
    "hoehe": 1100,
    "zeigt": "Fahndungsplakat des FBI von 2013 mit gestohlenen Werken von Manet, Rembrandt und Flinck",
    "urheber": "Artwork by various artists, last deceased 1917; poster by unknown FBI staff",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Isabella_Stewart_Gardner_Museum_theft%2C_FBI_%27Seeking_Information%27_poster_2013%2C_Manet%2C_Rembrandt%2C_and_Flinck.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "ayotzinapa",
  "titel": "Die 43 von Ayotzinapa",
  "untertitel": "Das Verschwinden von Lehramtsstudenten in Iguala, Mexiko 2014",
  "jahr": 2014,
  "zeitraum": "26./27. September 2014, Ermittlungen bis heute",
  "ort": "Iguala, Guerrero",
  "land": "Mexiko",
  "lat": 18.345,
  "lon": -99.5383,
  "ortQuelle": "https://en.wikipedia.org/wiki/Iguala",
  "kategorie": "Entführung",
  "status": "ungeklärt",
  "kurz": "In einer Nacht verschwinden 43 Studenten nach Angriffen der Polizei. Eine staatlich verbreitete „historische Wahrheit“ erweist sich als erzwungen – was wirklich geschah, ist nach zwölf Jahren offen.",
  "tat": "Am Abend des 26. September 2014 brachten Studenten der Escuela Normal Rural „Raúl Isidro Burgos“ in Ayotzinapa, einer Lehrerschule für Kinder armer Landfamilien, in Iguala mehrere Linienbusse in ihre Gewalt. Sie wollten damit, wie in den Jahren zuvor üblich, zur Gedenkdemonstration für das Massaker von Tlatelolco nach Mexiko-Stadt fahren. Städtische Polizisten aus Iguala und Nachbarorten stoppten die Busse, schossen auf sie und nahmen Studenten mit. In der Nacht wurden bei mehreren Angriffen sechs Menschen getötet, darunter drei Studenten, und Dutzende verletzt. 43 Studenten sind seither verschwunden. Nach den Ermittlungen übergaben Polizisten sie an die Drogenbande Guerreros Unidos.",
  "opfer": "Die 43 waren junge Männer, viele im ersten Studienjahr, die meisten aus Bauern- und Arbeiterfamilien in Guerrero. Die Normalschulen gelten als politisch engagiert und stehen seit Langem im Konflikt mit Behörden. Die Eltern der Verschwundenen haben sich zu einer Bewegung zusammengeschlossen, die seit 2014 jeden Monat demonstriert. Nach Angaben der Behörden wurden bislang Überreste von drei der 43 durch das Gerichtsmedizinische Institut der Universität Innsbruck identifiziert, 2014, 2020 und 2021. Bei weiteren untersuchten Überresten ergab sich nach Regierungsangaben bisher keine Übereinstimmung.",
  "ermittlung": "Generalstaatsanwalt Jesús Murillo Karam präsentierte im Januar 2015 die „historische Wahrheit“: Die Studenten seien auf der Müllkippe von Cocula verbrannt worden. Die Interdisziplinäre Gruppe unabhängiger Experten (GIEI), eingesetzt von der Interamerikanischen Menschenrechtskommission, widerlegte dies 2015: Ein Feuer dieser Größe habe dort nicht stattgefunden. Sie wies auf Folter an Festgenommenen hin und darauf, dass Armee und Bundespolizei die Ereignisse über ein Lagezentrum in Echtzeit verfolgten. Nach ihrem dritten Bericht 2022 zeigen Drohnenaufnahmen, dass Marinesoldaten die Müllkippe vor dem offiziellen Fund betreten hatten. In ihrem letzten Bericht im Juli 2023 beklagte die GIEI, dass das Militär nicht alle angeforderten Unterlagen herausgegeben habe, und beendete ihr Mandat.",
  "taeter": "Nach den Ermittlungen und den GIEI-Berichten wirkten städtische Polizisten mit der Bande Guerreros Unidos zusammen; über die Rolle von Bundespolizei und Armee wird bis heute gestritten. Eine Wahrheitskommission der Regierung nannte die Tat 2022 ein „Verbrechen des Staates“, Teile ihrer Belege stufte die GIEI allerdings als nicht überprüfbar ein. Angeklagt wurden seit 2014 weit über hundert Personen, darunter Polizisten, Bandenmitglieder und Soldaten. Nach übereinstimmenden Medienberichten ist für das Verschwindenlassen der 43 bis heute niemand rechtskräftig verurteilt. Für alle nicht rechtskräftig Verurteilten gilt die Unschuldsvermutung.",
  "prozess": "Der frühere Bürgermeister von Iguala, José Luis Abarca, wurde 2014 festgenommen; vom Vorwurf der Entführung der 43 wurde er freigesprochen, ein Berufungsgericht bestätigte das im Juni 2025; wegen anderer Taten bleibt er in Haft. Murillo Karam wurde im August 2022 wegen Verschwindenlassens, Folter und Behinderung der Justiz festgenommen; nachdem er seit 2024 aus Gesundheitsgründen im Hausarrest war, ersetzte ein Bundesrichter im Juli 2026 die Haft durch mildere Auflagen mit elektronischer Fußfessel; sein Verfahren läuft. Am 6. August 2026 wurde der damalige Gouverneur von Guerrero, Ángel Aguirre, auf Antrag der Bundesstaatsanwaltschaft festgenommen; ihm werden Verschwindenlassen und Delikte gegen die Rechtspflege vorgeworfen, vor allem, die Beseitigung von Videoaufnahmen aus jener Nacht angeordnet zu haben. Er sitzt in Untersuchungshaft. Diese Verfahren sind nicht abgeschlossen (Stand Oktober 2026).",
  "legende": "Die „historische Wahrheit“ ist die wirkmächtigste falsche Erzählung des Falls: Sie stützte sich auf Geständnisse, die nach Feststellung der GIEI und der UN unter Folter zustande kamen, und auf einen Tatort, dessen Befund nicht zur Spurenlage passte. Ebenso wenig belegt sind umgekehrt Behauptungen, die Studenten lebten noch in geheimen Militärlagern, oder einfache Erklärungen, die Armee habe sie allein verschwinden lassen. Gesichert ist, dass staatliche Stellen auf mehreren Ebenen beteiligt waren oder wegsahen und dass Ermittler Beweise manipulierten. Im September 2026 stellte die Regierung neue Ermittlungsansätze vor; die Eltern halten Teile davon für wenig plausibel und fordern weiterhin rund 800 Militärdokumente.",
  "bedeutung": "Ayotzinapa wurde zum Symbol für die über hunderttausend Verschwundenen in Mexiko und für die Verflechtung von Polizei, Politik und organisiertem Verbrechen. Die Proteste erschütterten die Regierung von Enrique Peña Nieto. Die Arbeit der GIEI gilt als Beispiel dafür, wie internationale Experten eine staatliche Ermittlung überprüfen können. Zugleich zeigt der Fall, wie schwer Aufklärung ist, wenn Ermittler selbst Teil des Problems sind: Zwölf Jahre und drei Regierungen später wissen die Familien nicht, wo ihre Söhne sind.",
  "zeitleiste": [
   {
    "datum": "26./27. September 2014",
    "jahr": 2014,
    "text": "Angriffe auf Studenten in Iguala; sechs Tote, 43 Verschwundene."
   },
   {
    "datum": "27. Januar 2015",
    "jahr": 2015,
    "text": "Generalstaatsanwalt Murillo Karam verkündet die „historische Wahrheit“."
   },
   {
    "datum": "6. September 2015",
    "jahr": 2015,
    "text": "Der erste GIEI-Bericht widerlegt die Verbrennung auf der Müllkippe von Cocula."
   },
   {
    "datum": "August 2022",
    "jahr": 2022,
    "text": "Eine Regierungskommission spricht von einem Staatsverbrechen; Murillo Karam wird festgenommen."
   },
   {
    "datum": "Juli 2023",
    "jahr": 2023,
    "text": "Die GIEI legt ihren letzten Bericht vor und beendet ihre Arbeit in Mexiko."
   },
   {
    "datum": "6. August 2026",
    "jahr": 2026,
    "text": "Festnahme des früheren Gouverneurs Ángel Aguirre."
   },
   {
    "datum": "September 2026",
    "jahr": 2026,
    "text": "Zum zwölften Jahrestag stellt die Regierung neue Ermittlungsansätze vor; die 43 bleiben verschwunden."
   }
  ],
  "quellen": [
   "GIEI / Comisión Interamericana de Derechos Humanos: Informe Ayotzinapa I (2015), II (2016) und Abschlussbericht (2023)",
   "Oficina en México del Alto Comisionado de la ONU para los Derechos Humanos: Doble injusticia, 2018, und Pressemitteilung vom 27. Juli 2023",
   "El País / The New York Times: Berichterstattung zum Fall Ayotzinapa, 2014–2026",
   "Infobae / Agencia EFE: Berichte zum zwölften Jahrestag, September 2026"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/ayotzinapa-0.jpg",
    "breite": 900,
    "hoehe": 600,
    "zeigt": "Vertreter der Eltern der 43 Verschwundenen bei einer Pressekonferenz an der UNAM zum zehnten Jahrestag, September 2024",
    "urheber": "Ehécatl Cabrera",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Representaci%C3%B3n_de_madres_y_padres_de_los_43_estudiantes_desaparecidos_de_Ayotzinapa.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "einbruch-gruenes-gewoelbe",
  "titel": "Der Einbruch ins Grüne Gewölbe",
  "untertitel": "Juwelendiebstahl im Dresdner Residenzschloss, 2019",
  "jahr": 2019,
  "zeitraum": "25. November 2019, Urteil Mai 2023, rechtskräftig seit April 2024",
  "ort": "Residenzschloss, Dresden",
  "land": "Deutschland",
  "lat": 51.0528,
  "lon": 13.7364,
  "ortQuelle": "https://en.wikipedia.org/wiki/Green_Vault",
  "kategorie": "Raub",
  "status": "aufgeklärt",
  "kurz": "In wenigen Minuten stahlen Einbrecher 2019 barocke Juwelen aus dem Grünen Gewölbe. Fünf Männer wurden verurteilt, vieles kam zurück – doch einige der wertvollsten Stücke fehlen bis heute.",
  "tat": "In den frühen Morgenstunden des 25. November 2019 legten die Täter an einem Stromverteiler nahe der Augustusbrücke Feuer; die Straßenbeleuchtung rund um das Residenzschloss fiel aus. Kurz darauf stiegen zwei Männer durch ein Fenster in das Juwelenzimmer des Historischen Grünen Gewölbes ein, dessen Gitter sie bereits Tage zuvor durchtrennt und notdürftig wieder eingesetzt hatten. Mit einer Axt zerschlugen sie eine Vitrine und rissen Schmuckstücke aus ihren Halterungen; im Gebäude waren sie nur wenige Minuten. Erbeutet wurden 21 Schmuckstücke aus den Juwelengarnituren der sächsischen Kurfürsten und Könige mit zusammen mehr als 4300 Diamanten und Brillanten. Ein Fluchtauto zündeten die Täter in einer Tiefgarage in Dresden an, bevor sie nach Berlin zurückkehrten.",
  "opfer": "Geschädigt sind die Staatlichen Kunstsammlungen Dresden und mit ihnen die Öffentlichkeit: Die Garnituren, im 18. Jahrhundert für August den Starken und seine Nachfolger gefertigt, zählen zu den bedeutendsten erhaltenen Juwelenensembles Europas. Der Wert der gestohlenen Stücke wurde im Verfahren mit rund 113 bis knapp 117 Millionen Euro angegeben, je nach Quelle als Versicherungswert oder als Angabe im Urteil; den kulturhistorischen Wert halten Fachleute für nicht bezifferbar. Hinzu kamen Schäden am Schloss von mehr als einer Million Euro. Menschen wurden bei dem Einbruch nicht verletzt.",
  "ermittlung": "Eine Sonderkommission der sächsischen Polizei wertete Videoaufnahmen, Funkzellendaten und Spuren rund um die Fluchtfahrzeuge aus. Am 17. November 2020 durchsuchten mehr als 1600 Polizisten Wohnungen in Berlin und nahmen drei Verdächtige fest, weitere Festnahmen folgten. Alle Beschuldigten gehörten der in Berlin ansässigen Großfamilie Remmo an; zwei von ihnen waren bereits wegen des Diebstahls einer 100 Kilogramm schweren Goldmünze aus dem Berliner Bode-Museum im Jahr 2017 verurteilt. Die Beute blieb lange verschwunden. Erst im Zuge von Verständigungsgesprächen im laufenden Prozess wurde im Dezember 2022 in Berlin ein großer Teil der Schmuckstücke an die Ermittler übergeben, manche beschädigt, mit herausgebrochenen Steinen oder Feuchtigkeitsschäden.",
  "taeter": "Angeklagt waren sechs junge Männer aus der Familie Remmo. Mehrere von ihnen legten im Rahmen der Verständigung Geständnisse ab und schilderten Vorbereitung, Einstieg und Flucht. Fünf wurden verurteilt; einer wurde freigesprochen, weil er für die Tatnacht ein Alibi hatte. Ob die Täter Hilfe von innen hatten, etwa Wissen über die Sicherheitstechnik, ist nicht belegt; Ermittlungen gegen vier Wachleute stellte die Staatsanwaltschaft Dresden im November 2022 mangels Beweisen ein. Gegen einen weiteren Angehörigen der Familie erhob die Staatsanwaltschaft Anklage wegen Beihilfe; er soll in der Tatnacht ein Auto gefahren und die Polizei abgelenkt haben. Für ihn gilt, solange er nicht rechtskräftig verurteilt ist, die Unschuldsvermutung.",
  "prozess": "Der Prozess vor dem Landgericht Dresden begann im Januar 2022. Nach der Rückgabe eines Großteils der Beute im Dezember 2022 kam im Januar 2023 eine Verständigung zustande: Geständnisse gegen eine Strafobergrenze. Am 16. Mai 2023 verurteilte das Gericht fünf Angeklagte unter anderem wegen Diebstahls mit Waffen und besonders schwerer Brandstiftung zu Freiheits- und Jugendstrafen zwischen vier Jahren und vier Monaten und sechs Jahren und drei Monaten. Die Staatsanwaltschaft hatte teils höhere Strafen gefordert. Der Bundesgerichtshof verwarf die Revisionen von vier Verurteilten am 12. April 2024, das Urteil ist rechtskräftig. Ein zweites Verfahren gegen den mutmaßlichen Helfer begann im Januar 2024 vor der Jugendkammer des Landgerichts Dresden.",
  "legende": "In den ersten Tagen nach dem Einbruch kursierten Schätzungen von bis zu einer Milliarde Euro; im Verfahren war von rund 113 bis knapp 117 Millionen die Rede. Ebenso verbreitet war die Annahme, die Juwelen seien längst zerlegt und verkauft – für den größten Teil hat sich das mit der Rückgabe 2022 als falsch erwiesen. Zurückgekehrt sind unter anderem der Hutschmuck mit Reiherstutz und der Bruststern des polnischen Weißen Adlerordens. Es fehlen aber weiterhin einige der wertvollsten Stücke, darunter die große Brustschleife der Königin Amalie Auguste und die Epaulette mit dem „Sächsischen Weißen“, einem Diamanten von knapp 50 Karat. Was mit ihnen geschah, ist ungeklärt.",
  "bedeutung": "Der Einbruch löste eine bundesweite Debatte über die Sicherheit von Museen aus: Das Gitter war vorab präpariert worden, ohne dass es auffiel, und die Täter konnten trotz Alarm in Minuten entkommen. Zugleich wurde der Fall zum Symbol der Debatte über Clankriminalität in Berlin. Juristisch bemerkenswert war die Verständigung, mit der die Justiz gegen Strafnachlass einen Großteil der Beute zurückbekam. Die zurückgegebenen Stücke sind seit August 2024 wieder im Grünen Gewölbe zu sehen; restauriert werden sollen sie nach Angaben von 2024 erst nach Abschluss aller Verfahren.",
  "zeitleiste": [
   {
    "datum": "25. November 2019",
    "jahr": 2019,
    "text": "Einbruch in das Juwelenzimmer des Historischen Grünen Gewölbes."
   },
   {
    "datum": "17. November 2020",
    "jahr": 2020,
    "text": "Großrazzia in Berlin, drei Festnahmen."
   },
   {
    "datum": "Januar 2022",
    "jahr": 2022,
    "text": "Prozessbeginn gegen sechs Angeklagte vor dem Landgericht Dresden."
   },
   {
    "datum": "Dezember 2022",
    "jahr": 2022,
    "text": "Im Zuge von Verständigungsgesprächen wird ein großer Teil der Beute in Berlin übergeben."
   },
   {
    "datum": "16. Mai 2023",
    "jahr": 2023,
    "text": "Fünf Schuldsprüche, ein Freispruch."
   },
   {
    "datum": "12. April 2024",
    "jahr": 2024,
    "text": "Der Bundesgerichtshof verwirft die Revisionen, das Urteil wird rechtskräftig."
   },
   {
    "datum": "August 2024",
    "jahr": 2024,
    "text": "Die zurückgegebenen Juwelen sind wieder ausgestellt."
   }
  ],
  "quellen": [
   "taz: Urteil im Prozess um den Diebstahl aus dem Grünen Gewölbe, 16. Mai 2023",
   "Der Tagesspiegel: Juwelendiebstahl aus dem Grünen Gewölbe – Urteil gegen Remmo-Mitglieder ist rechtskräftig, April 2024",
   "epd/evangelisch.de: Fünf Jahre nach Raub – Grünes Gewölbe: Noch immer offene Fragen, 24. November 2024",
   "NPR: Jewels stolen during a brazen 2019 heist are back on display in Germany, 14. August 2024",
   "beck-aktuell: Neuer Prozess gegen Remmo-Angehörigen, 4. Januar 2024"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/einbruch-gruenes-gewoelbe-0.jpg",
    "breite": 391,
    "hoehe": 1100,
    "zeigt": "Achselschleife (Epaulette) der Brillantgarnitur mit einem großen weißen Brillanten von 49,84 Karat, Dresden 1782/1789 – eines der bis heute fehlenden Stücke; Aufnahme von Paul Wolff um 1930/32",
    "urheber": "unbekannt",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Fotothek_df_hauptkatalog_0129075_Brillantgarnitur_des_s%C3%A4chsischen_F%C3%BCrstenhauses%2C_Gr%C3%BCnes_Gew%C3%B6lbe.jpg"
   },
   {
    "datei": "bilder/dark/einbruch-gruenes-gewoelbe-1.jpg",
    "breite": 798,
    "hoehe": 1100,
    "zeigt": "Das Juwelenzimmer des Grünen Gewölbes, Aufnahme um 1930/32",
    "urheber": "unbekannt",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Fotothek_df_hauptkatalog_0129061_Juwelenzimmer%2C_Gr%C3%BCnes_Gew%C3%B6lbe.jpg"
   },
   {
    "datei": "bilder/dark/einbruch-gruenes-gewoelbe-2.jpg",
    "breite": 806,
    "hoehe": 1100,
    "zeigt": "Das Dresdner Residenzschloss von Südwesten, 2007",
    "urheber": "Jörg Blobelt",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:20070325045DR_Dresden_Sophienstra%C3%9Fe_Residenzschlo%C3%9F.jpg"
   }
  ],
  "seit": "2026-10-06"
 }
];

const GEHEIMBUENDE = [
 {
  "id": "assassinen-nizariten",
  "titel": "Die Assassinen",
  "untertitel": "Die Nizariten zwischen Beleg und Legende",
  "gegruendet": 1090,
  "aufgeloest": null,
  "zeitraum": "1090–1256 (Persien), bis 1273 (Syrien)",
  "region": "Persien und Syrien",
  "art": "Orden",
  "kurz": "Eine verfolgte schiitische Minderheit hielt sich in Bergburgen gegen übermächtige Gegner, auch durch gezielte Morde. Europa machte aus ihr Haschischkrieger und einen geheimnisvollen Alten vom Berge.",
  "entstehung": "Die Nizariten sind ein Zweig der ismailitischen Schia. Als 1094 nach dem Tod des fatimidischen Kalifen al-Mustansir um die Nachfolge gestritten wurde, hielten sie an seinem Sohn Nizar fest, der in Kairo unterlag. Schon 1090 hatte der persische Missionar Hasan-i Sabbah die Festung Alamut im Elburs-Gebirge eingenommen. Von dort aus entstand ein Netz von Burgen in Persien und später in Syrien – ein Staat ohne zusammenhängendes Territorium, umgeben vom sunnitischen Seldschukenreich. Hasan starb 1124 in Alamut.",
  "ziele": "Die Nizariten wollten als religiöse Gemeinschaft unter einem verborgenen bzw. später sichtbaren Imam überleben und ihre Lehre verbreiten. Gegen das Seldschukenreich konnten sie keine Heere aufstellen. Gezielte Morde an Wesiren, Emiren, Richtern und Heerführern sollten Gegner abschrecken und Angriffe auf die Burgen verhindern. Sie richteten sich gegen Führungspersonen, nicht gegen die Bevölkerung.",
  "aufbau": "An der Spitze stand der Herr von Alamut, seit Hasan II. ab 1164 als Imam verstanden. In Syrien führte ein eigener Statthalter die Gemeinschaft; der bekannteste, Raschid ad-Din Sinan, war der Mann, den die Kreuzfahrer den Alten vom Berge nannten – die Übersetzung eines arabischen Titels für einen Anführer im Gebirge. Die Täter hießen fida'i, Opferbereite. Sie handelten meist öffentlich, oft in Moscheen oder bei Hof, und überlebten selten. Die Burgen besaßen Bibliotheken; Alamut war ein Ort der Gelehrsamkeit, an dem zeitweise auch der Astronom Nasir ad-Din at-Tusi arbeitete.",
  "wirkung": "Zu den Opfern, die zeitgenössische Chronisten den Nizariten zuschreiben, gehören 1092 der Wesir Nizam al-Mulk und 1192 Konrad von Montferrat, der gewählte König von Jerusalem; zwei Anschläge auf Saladin in den 1170er Jahren schlugen fehl. Die Morde verschafften den Burgen über anderthalb Jahrhunderte Ruhe vor überlegenen Gegnern. Zugleich lieferten sie den Vorwand für Massaker an Ismailiten in mehreren Städten. 1256 ergab sich der letzte Herr von Alamut den Mongolen unter Hülegü, die Festung wurde zerstört. Die syrischen Burgen nahm der Mamlukensultan Baibars bis 1273 ein.",
  "mythos": "Das Bild der Assassinen stammt fast ganz von ihren Gegnern. Die Bezeichnung haschischiyya taucht in einer fatimidischen Streitschrift der 1120er Jahre als Schimpfwort auf und meinte Gesindel; einen Beleg für Drogenkonsum vor Anschlägen gibt es nicht. Erst 1809 verband der Orientalist Silvestre de Sacy das Wort mit der Droge. Die Erzählung vom Alten vom Berge, der junge Männer betäubt in einen künstlichen Paradiesgarten bringen ließ, steht bei Marco Polo, der knapp zwei Jahrzehnte nach dem Fall Alamuts durch Persien zog und Hörensagen wiedergab. Belegt sind dagegen die Burgen, die Anschläge auf Führungspersonen und die Bereitschaft der Täter, zu sterben. Ob sich die Nizariten mit modernem Terrorismus vergleichen lassen, ist unter Historikern umstritten; gegen den Vergleich spricht vor allem, dass sie nicht gegen die Bevölkerung vorgingen.",
  "heute": "Die Nizariten bestehen als religiöse Gemeinschaft fort, mit mehreren Millionen Angehörigen in Zentral- und Südasien, Afrika und im Westen. Ihr Imam trägt seit dem 19. Jahrhundert den Titel Aga Khan. Das Institute of Ismaili Studies in London erforscht die Geschichte der Gemeinschaft anhand der erhaltenen eigenen Quellen.",
  "zeitleiste": [
   {
    "datum": "1090",
    "jahr": 1090,
    "text": "Hasan-i Sabbah nimmt die Festung Alamut im Elburs-Gebirge ein."
   },
   {
    "datum": "1092",
    "jahr": 1092,
    "text": "Der seldschukische Wesir Nizam al-Mulk wird ermordet; die Chronisten schreiben die Tat den Nizariten zu."
   },
   {
    "datum": "1094",
    "jahr": 1094,
    "text": "Im Streit um die fatimidische Nachfolge spalten sich die Anhänger Nizars ab."
   },
   {
    "datum": "1124",
    "jahr": 1124,
    "text": "Hasan-i Sabbah stirbt in Alamut."
   },
   {
    "datum": "28. April 1192",
    "jahr": 1192,
    "text": "Konrad von Montferrat wird in Tyrus von zwei Männern getötet, die den Nizariten zugerechnet werden."
   },
   {
    "datum": "1256",
    "jahr": 1256,
    "text": "Alamut ergibt sich den Mongolen; Festung und Bibliothek werden zerstört."
   },
   {
    "datum": "1273",
    "jahr": 1273,
    "text": "Mit dem Fall der letzten syrischen Burgen an Baibars endet die Herrschaft der Nizariten."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Assassin (Nizari Ismailis)",
   "Bernard Lewis: The Assassins. A Radical Sect in Islam, 1967",
   "Farhad Daftary: The Assassin Legends. Myths of the Isma'ilis, 1994",
   "Farhad Daftary: The Isma'ilis. Their History and Doctrines, 2. Aufl. 2007",
   "Marco Polo: Il Milione (als Legendenquelle)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/assassinen-nizariten-0.jpg",
    "breite": 900,
    "hoehe": 674,
    "zeigt": "Der Burgfelsen von Alamut in der Provinz Qazvin, Iran, 2022",
    "urheber": "ImanFakhri",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Alamut_Castle%2C_Qazvin_-_1.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "templer",
  "titel": "Die Templer",
  "untertitel": "Verhaftung 1307, Prozess und die Mythen danach",
  "gegruendet": 1120,
  "aufgeloest": 1312,
  "zeitraum": "um 1120 bis 1312",
  "region": "Levante, Frankreich, ganz Europa",
  "art": "Orden",
  "kurz": "Ein Ritterorden, der zwei Jahrhunderte Pilgerwege und Kreuzfahrerstaaten schützte, wurde an einem Tag verhaftet und in einem Prozess zerschlagen, der bis heute als Muster eines politischen Verfahrens gilt.",
  "entstehung": "Um 1120 schlossen sich in Jerusalem einige Ritter um Hugo von Payns zusammen, um Pilger auf dem Weg zu den heiligen Stätten zu schützen. König Balduin II. überließ ihnen einen Teil seines Palastes in der al-Aqsa-Moschee, die die Kreuzfahrer für den Tempel Salomos hielten – daher der Name Arme Ritter Christi und des Tempels Salomos. Auf dem Konzil von Troyes erhielt der Orden 1129 eine Regel, an der Bernhard von Clairvaux mitwirkte, der ihn auch publizistisch unterstützte. Päpstliche Privilegien, vor allem die Bulle Omne datum optimum von 1139, stellten die Templer unmittelbar unter den Papst und befreiten sie von Abgaben und bischöflicher Aufsicht.",
  "ziele": "Die Templer verbanden zum ersten Mal das Leben als Mönch – Armut, Keuschheit, Gehorsam – mit dem Kriegsdienst. Ihre Aufgabe war die Verteidigung der Kreuzfahrerstaaten. Dafür brauchten sie Geld: Schenkungen in ganz Europa wurden zu Gütern, deren Erträge in den Osten flossen. Weil sie Geld sicher über weite Strecken transportieren konnten, wurden sie auch zu Bankiers für Pilger, Adlige und Könige; der Pariser Temple diente zeitweise als Schatzkammer der französischen Krone.",
  "aufbau": "An der Spitze stand der Großmeister, unterstützt von einem Generalkapitel. Die Mitglieder gliederten sich in Ritter, die den weißen Mantel mit rotem Kreuz trugen, in dienende Brüder und in Kapläne. Die Mehrheit der Brüder lebte nicht im Osten, sondern verwaltete die Komtureien in Europa. Die Aufnahme fand in einer geschlossenen Zeremonie statt – ein Umstand, der den Anklägern 1307 die Behauptung erleichterte, dort geschehe Unaussprechliches.",
  "wirkung": "Nach dem Fall von Akkon 1291 verlor der Orden seine Aufgabe im Heiligen Land. Am 13. Oktober 1307 ließ Philipp IV. alle Templer in Frankreich verhaften. Die Anklage lautete auf Verleugnung Christi, Bespucken des Kreuzes, Unzucht und Götzendienst. Unter Folter gestanden die meisten, auch Großmeister Jacques de Molay. Papst Clemens V. zog das Verfahren an sich; das 2001 im Vatikanischen Archiv wiederentdeckte und 2007 veröffentlichte Chinon-Pergament zeigt, dass er die Ordensführung 1308 absolvierte. Unter dem Druck des Königs hob er den Orden auf dem Konzil von Vienne 1312 dennoch auf, ohne ihn zu verurteilen. Der Besitz ging an die Johanniter. Molay widerrief und wurde im März 1314 in Paris verbrannt.",
  "mythos": "Ein verborgener Templerschatz ist nicht belegt; der Besitz des Ordens bestand vor allem aus Ländereien, die an die Johanniter fielen, während Philipp IV. Bargeld und Forderungen einzog. Die Verbindung zum Gral geht auf Wolfram von Eschenbachs Parzival zurück, in dem Ritter namens templeise den Gral hüten – Dichtung, kein Zeugnis. Der Aberglaube um Freitag den 13. ist erst seit dem 19. Jahrhundert belegt; die Verknüpfung mit der Verhaftung von 1307, die tatsächlich an einem Freitag stattfand, ist eine spätere Zuschreibung. Ebenso legendär ist der Fluch, mit dem Molay König und Papst vor Gottes Gericht geladen haben soll; beide starben 1314, die Geschichte erscheint aber erst in späteren Quellen. Freimaurerische Hochgrade beanspruchten im 18. Jahrhundert Templer-Abstammung, ohne Beleg.",
  "heute": "Die Forschung ist sich weitgehend einig, dass die Anklagen haltlos waren und Philipp IV. aus Geldnot und Machtinteresse handelte. In Portugal ging der Orden 1319 im Christusorden auf, in Aragón im Orden von Montesa. Heutige Gruppen, die sich Templer nennen, sind Neugründungen. Bücher wie Der Heilige Gral und seine Erben von 1982 und Dan Browns Da Vinci Code haben die Mythen erst in jüngerer Zeit populär gemacht.",
  "zeitleiste": [
   {
    "datum": "um 1120",
    "jahr": 1120,
    "text": "Hugo von Payns und einige Gefährten gründen in Jerusalem die Gemeinschaft zum Schutz der Pilger."
   },
   {
    "datum": "1129",
    "jahr": 1129,
    "text": "Das Konzil von Troyes gibt dem Orden eine Regel."
   },
   {
    "datum": "1291",
    "jahr": 1291,
    "text": "Mit Akkon fällt die letzte große Bastion der Kreuzfahrer."
   },
   {
    "datum": "13. Oktober 1307",
    "jahr": 1307,
    "text": "Philipp IV. lässt alle Templer in Frankreich an einem Tag verhaften."
   },
   {
    "datum": "August 1308",
    "jahr": 1308,
    "text": "In Chinon absolvieren päpstliche Gesandte Molay und weitere Ordensobere."
   },
   {
    "datum": "Mai 1310",
    "jahr": 1310,
    "text": "Vierundfünfzig Templer, die ihre Geständnisse widerrufen haben, werden bei Paris verbrannt."
   },
   {
    "datum": "22. März 1312",
    "jahr": 1312,
    "text": "Clemens V. hebt den Orden mit der Bulle Vox in excelso auf, ohne ein Urteil zu sprechen."
   },
   {
    "datum": "März 1314",
    "jahr": 1314,
    "text": "Jacques de Molay und Geoffroy de Charnay werden in Paris verbrannt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Templar",
   "Malcolm Barber: The Trial of the Templars, 2. Aufl. 2006",
   "Barbara Frale: Il papato e il processo ai Templari, 2003",
   "Alain Demurger: Die Templer. Aufstieg und Untergang 1120–1314, 2004",
   "National Geographic: Friday the 13th and the Knights Templar, 2016"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/templer-0.jpg",
    "breite": 900,
    "hoehe": 938,
    "zeigt": "Das Chinon-Pergament vom August 1308 mit der päpstlichen Absolution der Ordensführung",
    "urheber": "Fue redactado en 1308 (se desconoce su autor)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Pergamino_de_chinon.jpg"
   },
   {
    "datei": "bilder/dark/templer-1.jpg",
    "breite": 900,
    "hoehe": 897,
    "zeigt": "Siegel der Templer, Umzeichnung aus einer Kreuzzugsgeschichte von 1894",
    "urheber": "Thomas Andrew Archer, Charles Lethbridge Kingsford",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Templ.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "yakuza",
  "titel": "Die Yakuza",
  "untertitel": "Japans organisiertes Verbrechen zwischen Duldung und Verbot",
  "gegruendet": null,
  "aufgeloest": null,
  "zeitraum": "Wurzeln in der Edo-Zeit (1603–1868), bis heute",
  "region": "Japan",
  "art": "kriminelle Organisation",
  "kurz": "Jahrzehntelang arbeiteten Japans Verbrechersyndikate fast offen, mit Büros und Visitenkarten. Seit 1992 drängen Gesetze sie zurück, die Mitgliederzahl ist auf einen Bruchteil gesunken.",
  "entstehung": "Die Yakuza gehen auf zwei Gruppen der mittleren Edo-Zeit zurück: die Bakuto, berufsmäßige Glücksspieler, und die Tekiya, fahrende Händler auf Märkten und Tempelfesten, die zum Teil mit zweifelhafter Ware handelten. Beide organisierten sich in festen Verbänden mit Anführern, die Gebiete kontrollierten. Der Name stammt vermutlich aus einem Kartenspiel: Die Zahlenfolge 8, 9, 3, japanisch ya-ku-za, ergibt das wertloseste Blatt. Im 20. Jahrhundert wuchsen aus diesen Wurzeln große Syndikate. Die bekannteste Gruppe, die Yamaguchi-gumi, wurde 1915 im Hafen von Kōbe gegründet und stieg nach dem Zweiten Weltkrieg unter Taoka Kazuo zur größten Organisation des Landes auf.",
  "ziele": "Die Yakuza sind auf Gewinn ausgerichtet. Klassische Geschäftsfelder waren Glücksspiel, Schutzgeld, Prostitution, der Handel mit Stimulanzien und die Erpressung von Unternehmen, etwa durch Störung von Hauptversammlungen. Dazu kamen Bauwirtschaft, Immobilien und Arbeitsvermittlung. Nach außen pflegten die Gruppen das Bild ehrenhafter Ritterlichkeit, das sogenannte Ninkyō. Dieses Selbstbild verdeckte, dass die Opfer meist Kleinunternehmer, Abhängige und Schuldner waren.",
  "aufbau": "Kern ist die Oyabun-Kobun-Beziehung, ein Verhältnis von Ziehvater und Ziehsohn. Aufgenommen wird man mit dem Sakazuki, einem Ritual, bei dem Sake aus einer Schale geteilt wird. Die großen Syndikate sind pyramidenförmig aufgebaut: Unter der Spitze stehen viele Untergruppen, die ihrerseits eigene Mitglieder führen und Abgaben nach oben zahlen. Als Sühne für Verfehlungen galt das Abtrennen eines Fingerglieds, das heute seltener geworden ist, auch weil es Mitglieder für die Polizei kenntlich macht. Großflächige Tätowierungen waren verbreitet. Die Polizei unterscheidet zwischen Mitgliedern und Unterstützern im Umfeld.",
  "wirkung": "Nach Angaben der Nationalen Polizeibehörde erreichten die Yakuza 1963 mit rund 184.100 Mitgliedern und Unterstützern ihren Höchststand. Lange duldete der Staat sie in einer Grauzone; ihre Büros trugen Schilder. Das änderte das 1991 verabschiedete und am 1. März 1992 in Kraft getretene Gesetz gegen unrechtmäßige Handlungen von Bōryokudan-Mitgliedern: Die Behörden können Gruppen als Bōryokudan einstufen und ihren Mitgliedern dann typische Handlungen wie Schutzgeldforderungen untersagen. Bis Oktober 2011 erließen alle 47 Präfekturen zudem Verordnungen, die auch Bürgern und Firmen Geschäfte mit Yakuza verbieten. Bankkonten, Mietverträge und Verträge wurden für Mitglieder schwer zugänglich.",
  "mythos": "Filme und Romane haben die Yakuza lange als Erben der Samurai und als Beschützer der kleinen Leute gezeigt. Dieses Bild stammt zum guten Teil aus der Selbstdarstellung der Gruppen. Nach dem Erdbeben von Kōbe 1995 und dem Tsunami 2011 verteilten Yakuza tatsächlich Hilfsgüter, was ihr Ansehen stützen sollte. Das ändert nichts an ihrem Geschäftsmodell, das auf Einschüchterung und Gewalt beruht. Wie konkret diese Gewalt sein konnte, zeigte 1992 der Angriff von Bandenmitgliedern auf den Regisseur Itami Jūzō, nachdem er einen Film über Yakuza-Erpressung gedreht hatte.",
  "heute": "Ende 2024 zählte die Nationale Polizeibehörde erstmals weniger als 10.000 Mitglieder, mit Unterstützern rund 18.800 Personen. Die Yamaguchi-gumi ist weiter die größte Gruppe; 2015 spaltete sich die Kōbe Yamaguchi-gumi ab, es folgten gewaltsame Auseinandersetzungen. Zugleich verlagert sich ein Teil der Kriminalität auf lose, wechselnde Netzwerke, die sich schwerer fassen lassen.",
  "zeitleiste": [
   {
    "datum": "1915",
    "jahr": 1915,
    "text": "In Kōbe wird die Yamaguchi-gumi gegründet."
   },
   {
    "datum": "1963",
    "jahr": 1963,
    "text": "Höchststand mit rund 184.100 Mitgliedern und Unterstützern nach Polizeiangaben."
   },
   {
    "datum": "1. März 1992",
    "jahr": 1992,
    "text": "Das Gesetz gegen Bōryokudan tritt in Kraft."
   },
   {
    "datum": "1995",
    "jahr": 1995,
    "text": "Nach dem Erdbeben von Kōbe verteilt die Yamaguchi-gumi öffentlichkeitswirksam Hilfsgüter."
   },
   {
    "datum": "Oktober 2011",
    "jahr": 2011,
    "text": "Mit Tokio und Okinawa haben alle 47 Präfekturen Verordnungen gegen Geschäfte mit Yakuza."
   },
   {
    "datum": "August 2015",
    "jahr": 2015,
    "text": "Die Kōbe Yamaguchi-gumi spaltet sich von der Yamaguchi-gumi ab."
   },
   {
    "datum": "Ende 2024",
    "jahr": 2024,
    "text": "Die Zahl der Mitglieder fällt erstmals unter 10.000."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Yakuza",
   "Peter B. E. Hill: The Japanese Mafia. Yakuza, Law, and the State, 2003",
   "Nationale Polizeibehörde Japans, Jahreszahlen zu Bōryokudan, berichtet von nippon.com (Japan Data), 2025"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/yakuza-0.jpg",
    "breite": 722,
    "hoehe": 1100,
    "zeigt": "Shimizu no Jirochō (1820–1893), Anführer eines Glücksspielerverbands der späten Edo-Zeit, Porträtfoto vor 1893",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Shimizu_no_Jirocho.jpg"
   },
   {
    "datei": "bilder/dark/yakuza-1.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Schild gegen Bōryokudan im Vergnügungsviertel Nakasu in Fukuoka, 2013",
    "urheber": "Nightingale",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:No_Boryokudan_Mark_01.JPG"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "rosenkreuzer",
  "titel": "Die Rosenkreuzer",
  "untertitel": "Drei Manifeste und ein Bund, den niemand fand",
  "gegruendet": 1614,
  "aufgeloest": null,
  "zeitraum": "Manifeste 1614–1616; Nachfolgebünde seit dem 18. Jahrhundert",
  "region": "Deutschland, Europa",
  "art": "erfundene Verschwörung",
  "kurz": "Drei anonyme Schriften kündigten 1614 bis 1616 eine geheime Bruderschaft an, die die Welt erneuern werde. Halb Europa suchte nach ihr – gefunden wurde sie nie, doch die Idee gründete echte Bünde.",
  "entstehung": "1614 erschien in Kassel beim Drucker Wilhelm Wessel die Fama Fraternitatis. Sie erzählt von Christian Rosenkreutz, der 1378 geboren worden sei, im Orient geheimes Wissen erworben und eine Bruderschaft gegründet habe; 120 Jahre nach seinem Tod habe man sein Grab mit unverwestem Leichnam entdeckt. Nun lade der Orden die Gelehrten Europas ein, sich zu melden. 1615 folgte die Confessio Fraternitatis, 1616 in Straßburg die Chymische Hochzeit Christiani Rosencreutz. Die Texte kursierten schon Jahre zuvor in Abschriften. Sie stammen aus einem Tübinger Kreis lutherischer Gelehrter um den Juristen und Paracelsisten Tobias Hess und den jungen Theologen Johann Valentin Andreae. Andreae gilt sicher als Verfasser der Chymischen Hochzeit; an den beiden anderen war er nach heutigem Forschungsstand zumindest als Bearbeiter beteiligt.",
  "ziele": "Die Manifeste verlangen eine allgemeine Reformation der Welt: eine Erneuerung von Wissenschaft, Medizin und Glauben aus dem Geist von Paracelsus und der lutherischen Frömmigkeit, gerichtet gegen Papsttum und scholastische Gelehrsamkeit. Dazu gehört eine Endzeiterwartung, wie sie im Vorfeld des Dreißigjährigen Krieges verbreitet war. Die Bruderschaft der Fama heilt Kranke umsonst, trägt keine besondere Kleidung und hält sich verborgen. Ob die Verfasser selbst an einen solchen Bund dachten oder ein Programm in eine Erzählung kleideten, ist in der Forschung umstritten.",
  "aufbau": "Nach der Fama bestand die Bruderschaft anfangs aus vier, später acht Brüdern, die sich jährlich im Haus des Heiligen Geistes trafen, auf Reisen gingen und jeder einen Nachfolger bestimmten. Belege für eine solche Organisation gibt es keine. Andreae selbst nannte die Bruderschaft später ein Spiel und eine Erfindung. Auch die Antwortenden fanden niemanden: Hunderte Schriften erschienen in den folgenden Jahren, viele mit offenen Briefen an die Brüder, die nie beantwortet wurden. Einige Autoren erklärten sich zu Rosenkreuzern, ohne je einem Orden beizutreten.",
  "wirkung": "Die Manifeste lösten eine der ersten publizistischen Debatten im frühneuzeitlichen Europa aus. Ärzte, Alchemisten und Theologen stritten über die Bruderschaft, Gegner warnten vor Betrug und Ketzerei. 1623 hingen in Paris Plakate, die das Erscheinen der Brüder ankündigten, und lösten eine kurze Aufregung aus. Gelehrte wie Robert Fludd und Michael Maier verteidigten die Rosenkreuzer, ohne Kontakt zu ihnen zu haben. Im 18. Jahrhundert griff der Orden der Gold- und Rosenkreuzer den Namen auf, ein Hochgradsystem im Umfeld der Freimaurerei; zu ihm gehörten Johann Christoph von Wöllner und der spätere König Friedrich Wilhelm II. von Preußen, der Wöllner zum Minister machte.",
  "mythos": "Der Mythos der Rosenkreuzer ist der eines uralten, unsichtbaren Ordens, der verborgenes Wissen über Jahrhunderte weiterreicht. Gesichert ist dagegen, dass Christian Rosenkreutz eine literarische Figur ist und der Bund vor 1614 nicht nachweisbar ist. Alle späteren Rosenkreuzergemeinschaften sind Neugründungen, die sich auf die Manifeste berufen, keine ununterbrochene Überlieferung. Die Historikerin Frances Yates deutete die Manifeste 1972 als Ausdruck einer politischen Bewegung um den Pfälzer Kurfürsten Friedrich V.; diese These hat die spätere Forschung, vor allem Carlos Gilly, in wichtigen Punkten zurückgewiesen. Die Verbindung zur Freimaurerei ist ebenfalls eine spätere: Rosenkreuzergrade entstehen dort erst im 18. Jahrhundert.",
  "heute": "Mehrere Organisationen führen den Namen weiter, darunter die 1865 gegründete Societas Rosicruciana in Anglia, der 1915 in den USA gegründete Orden AMORC und das in den Niederlanden entstandene Lectorium Rosicrucianum. Die Manifeste selbst sind gut erforscht; in Amsterdam sammelt die Bibliotheca Philosophica Hermetica ihre frühen Drucke und die Antwortschriften.",
  "zeitleiste": [
   {
    "datum": "um 1610",
    "jahr": 1610,
    "text": "Die Fama Fraternitatis kursiert handschriftlich im Tübinger Kreis und darüber hinaus."
   },
   {
    "datum": "1614",
    "jahr": 1614,
    "text": "Wilhelm Wessel druckt in Kassel die Fama Fraternitatis."
   },
   {
    "datum": "1615",
    "jahr": 1615,
    "text": "Die Confessio Fraternitatis erscheint, ebenfalls in Kassel."
   },
   {
    "datum": "1616",
    "jahr": 1616,
    "text": "In Straßburg erscheint die Chymische Hochzeit Christiani Rosencreutz, verfasst von Johann Valentin Andreae."
   },
   {
    "datum": "1623",
    "jahr": 1623,
    "text": "Plakate in Paris kündigen die Ankunft der unsichtbaren Brüder an."
   },
   {
    "datum": "1788",
    "jahr": 1788,
    "text": "Der Gold- und Rosenkreuzer Wöllner erlässt als preußischer Minister ein Religionsedikt gegen die Aufklärungstheologie."
   },
   {
    "datum": "1915",
    "jahr": 1915,
    "text": "In New York wird der Orden AMORC gegründet, eine der größten heutigen Rosenkreuzergemeinschaften."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Rosicrucian",
   "Carlos Gilly: Johann Valentin Andreae 1586–1986. Die Manifeste der Rosenkreuzerbruderschaft, 1986",
   "Helmut Zander: Rezension neuerer Veröffentlichungen zu den Rosenkreuzern, Universität Freiburg (Schweiz), 2004",
   "Frances A. Yates: The Rosicrucian Enlightenment, 1972"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/rosenkreuzer-0.jpg",
    "breite": 732,
    "hoehe": 1100,
    "zeigt": "Titelblatt der Fama Fraternitatis von 1614",
    "urheber": "Johann Valentin Andreae",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Fama_fraternitatis.jpg"
   },
   {
    "datei": "bilder/dark/rosenkreuzer-1.jpg",
    "breite": 874,
    "hoehe": 1100,
    "zeigt": "Der Tempel der Rosenkreuzer als rollende Festung, Kupferstich aus Theophilus Schweighardts Speculum sophicum Rhodostauroticum, 1618",
    "urheber": "Schweighardt, Theophilus",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Templeofrosycross_highres.png"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "freimaurer",
  "titel": "Die Freimaurer",
  "untertitel": "Logen, Rituale, Verschwörungsmythen",
  "gegruendet": 1717,
  "aufgeloest": null,
  "zeitraum": "seit 1717 bzw. 1721 (Großloge London)",
  "region": "Europa, Nordamerika, weltweit",
  "art": "Bund",
  "kurz": "Der älteste und größte der neuzeitlichen Bünde: ein Geselligkeitsverein der Aufklärung mit Ritualen und Schweigepflicht, der seit fast drei Jahrhunderten als Drahtzieher hinter allem verdächtigt wird.",
  "entstehung": "Die Wurzeln liegen bei den Steinmetzen des Mittelalters, die sich in Bauhütten organisierten und Erkennungszeichen pflegten. Im 17. Jahrhundert nahmen schottische und englische Logen zunehmend Mitglieder auf, die selbst keine Handwerker waren. Nach der Darstellung, die James Anderson 1738 veröffentlichte, schlossen sich am 24. Juni 1717 vier Londoner Logen in der Taverne Goose and Gridiron zu einer Großloge zusammen. Die Historiker Andrew Prescott und Susan Mitchell Sommers haben 2017 gezeigt, dass zeitgenössische Belege dafür fehlen; greifbar wird die Großloge erst 1721 mit dem Herzog von Montagu als Großmeister. 1723 erschienen die von Anderson verfassten Konstitutionen, die Grundordnung des Bundes. Von London aus breitete sich die Freimaurerei rasch aus; 1737 entstand in Hamburg die erste Loge im deutschen Sprachraum.",
  "ziele": "Die Freimaurerei versteht sich als ethischer Bund: Ihre Mitglieder sollen an sich arbeiten, symbolisch als Steine am Bau eines Tempels der Humanität. Die Konstitutionen von 1723 verlangten nur, ein Freimaurer solle kein dummer Atheist sein, und ließen die Konfession offen – eine bemerkenswerte Haltung im Europa der Konfessionsstaaten. Politik und Religion waren als Gesprächsthema in der Loge untersagt. Im 18. Jahrhundert wurden die Logen zu Orten, an denen Adlige, Kaufleute und Gelehrte einander jenseits der Standesgrenzen begegneten.",
  "aufbau": "Die Grundeinheit ist die Loge, die sich einer Großloge anschließt. Die drei Grade heißen Lehrling, Geselle und Meister; Hochgradsysteme wie der Schottische Ritus fügen weitere hinzu. Rituale arbeiten mit Werkzeugen des Bauhandwerks, Winkelmaß und Zirkel sind das bekannteste Zeichen. Geheim gehalten werden vor allem Erkennungszeichen und Ritualinhalte, die allerdings seit dem 18. Jahrhundert in Enthüllungsschriften vielfach gedruckt sind. Die angelsächsisch geprägte, sogenannte reguläre Freimaurerei verlangt den Glauben an ein höheres Wesen und nimmt nur Männer auf; der Grand Orient de France gab 1877 die Gottesformel auf, und seit dem späten 19. Jahrhundert gibt es auch gemischte Logen und Frauenlogen.",
  "wirkung": "Die Logen waren ein Übungsfeld der Aufklärung: Mitglieder wählten ihre Meister, beschlossen Satzungen und debattierten nach Regeln – Formen, die später Vereine und Parlamente prägten. Freimaurer waren unter anderem Friedrich II. von Preußen, Lessing, Mozart und George Washington; Mozarts Zauberflöte von 1791 nimmt Motive aus dem Ritual auf. Eine gemeinsame politische Linie hatte der Bund nie. Freimaurer standen auf beiden Seiten der Amerikanischen und der Französischen Revolution, viele Logen in Deutschland waren im 19. Jahrhundert ausgesprochen staatstreu. Wo einzelne Logen tatsächlich politische Netzwerke bildeten, geschah das gegen die eigenen Regeln.",
  "mythos": "Die katholische Kirche verurteilte die Freimaurerei 1738 in der Bulle In eminenti, wegen des Eides und der konfessionellen Offenheit. Nach 1789 erklärten Autoren wie der Abbé Barruel die Französische Revolution zum Werk der Logen; später wurde daraus die antisemitische Formel von der jüdisch-freimaurerischen Weltverschwörung – eine Erfindung ohne jeden Beleg, die das NS-Regime übernahm. Die Logen in Deutschland wurden 1935 aufgelöst, Freimaurer verfolgt. Der Journalist Léo Taxil verbreitete ab 1885 erfundene Berichte über Teufelskulte in Logen und gab am 19. April 1897 öffentlich zu, alles erfunden zu haben – seine Texte zirkulieren dennoch weiter. Ein realer Skandal war die italienische Loge Propaganda Due: 1981 fand die Polizei bei ihrem Meister Licio Gelli eine Mitgliederliste mit Politikern, Offizieren und Geheimdienstleuten; die Regierung trat zurück. Die P2 war allerdings von ihrer Großloge längst suspendiert.",
  "heute": "Die Freimaurerei besteht weltweit in zahlreichen, teils einander nicht anerkennenden Großlogen. Die Vereinigte Großloge von England, die älteste, gibt ihre Mitgliederzahl mit rund 175.000 an. Die meisten Logen öffnen sich inzwischen der Öffentlichkeit mit Gästeabenden und Museen. Die katholische Kirche hält die Mitgliedschaft weiterhin für unvereinbar mit dem Glauben; das hat die Glaubensbehörde zuletzt 2023 bekräftigt.",
  "zeitleiste": [
   {
    "datum": "24. Juni 1717",
    "jahr": 1717,
    "text": "Nach Andersons späterer Darstellung gründen vier Londoner Logen eine Großloge; zeitgenössisch belegt ist sie erst ab 1721."
   },
   {
    "datum": "1723",
    "jahr": 1723,
    "text": "Die Konstitutionen von James Anderson erscheinen und legen die Grundordnung fest."
   },
   {
    "datum": "1737",
    "jahr": 1737,
    "text": "In Hamburg entsteht die erste Loge im deutschen Sprachraum."
   },
   {
    "datum": "28. April 1738",
    "jahr": 1738,
    "text": "Papst Clemens XII. verurteilt die Freimaurerei in der Bulle In eminenti."
   },
   {
    "datum": "19. April 1897",
    "jahr": 1897,
    "text": "Léo Taxil gesteht in Paris, seine Enthüllungen über satanische Logen erfunden zu haben."
   },
   {
    "datum": "1935",
    "jahr": 1935,
    "text": "Die letzten Logen in Deutschland werden unter dem Druck des NS-Regimes aufgelöst."
   },
   {
    "datum": "März 1981",
    "jahr": 1981,
    "text": "In Italien wird die Mitgliederliste der Loge Propaganda Due gefunden; die Regierung tritt zurück."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Freemasonry",
   "Andrew Prescott, Susan Mitchell Sommers: Searching for the Apple Tree. Revisiting the Earliest Years of Organized English Freemasonry, 2017",
   "Margaret C. Jacob: Living the Enlightenment. Freemasonry and Politics in Eighteenth-Century Europe, 1991",
   "Helmut Reinalter: Die Freimaurer, 2000 (C. H. Beck Wissen)",
   "United Grand Lodge of England: What is Freemasonry?"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/freimaurer-0.jpg",
    "breite": 900,
    "hoehe": 566,
    "zeigt": "Aufnahme eines Lehrlings in eine Loge, Kupferstich um 1805 nach einer französischen Vorlage von 1745",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Freimaurer_Initiation.jpg"
   },
   {
    "datei": "bilder/dark/freimaurer-1.jpg",
    "breite": 793,
    "hoehe": 1100,
    "zeigt": "Werbeplakat für Léo Taxils erfundene Enthüllungen über die Freimaurerei, Paris 1896",
    "urheber": "Published by Imp. Edw. Ancourt & Cie (Paris)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Les_Myst%C3%A8res_de_la_franc-ma%C3%A7onnerie_d%C3%A9voil%C3%A9s_par_L%C3%A9o_Taxil.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "triaden",
  "titel": "Die Triaden",
  "untertitel": "Vom Geheimbund der Qing-Zeit zum organisierten Verbrechen",
  "gegruendet": 1761,
  "aufgeloest": null,
  "zeitraum": "seit etwa 1761 (Tiandihui in Fujian)",
  "region": "Südchina, Hongkong, Macau, chinesische Diaspora weltweit",
  "art": "kriminelle Organisation",
  "kurz": "Aus Bruderschaften der Qing-Zeit, die Schutz und gegenseitige Hilfe versprachen, wurden im 20. Jahrhundert international tätige Verbrechersyndikate.",
  "entstehung": "Als unmittelbarer Vorläufer der Triaden gilt die Tiandihui, die „Gesellschaft von Himmel und Erde“, auch Hongmen genannt. Nach heutiger Forschung entstand sie um 1761 im Kreis Zhangpu in der Provinz Fujian. Sie wuchs aus Netzwerken gegenseitiger Hilfe unter Wanderarbeitern, Händlern und Bootsleuten, die fern der Heimat Schutz brauchten. Die spätere Gründungslegende, Mönche des Shaolin-Klosters hätten den Bund als Widerstand gegen die mandschurische Qing-Dynastie gestiftet, halten Historiker für eine nachträgliche Erfindung. Erst mit der Zeit nahm der Bund die Losung „Gegen die Qing, für die Wiederherstellung der Ming“ an. Der englische Name „Triad“ geht auf das chinesische Sanhehui zurück, die Vereinigung von Himmel, Erde und Mensch.",
  "ziele": "Am Anfang standen Schutz und gegenseitige Unterstützung: Wer schwor, gehörte zu einer Ersatzfamilie, die Arbeit, Kredit und Beistand bot. Dazu trat eine politische Färbung, die sich gegen die Qing-Herrschaft richtete und mehrere Aufstände trug. Schon im 19. Jahrhundert verdienten viele Logen aber auch an Schmuggel, Glücksspiel und Schutzgeld. Nach dem Ende des Kaiserreichs 1912 verlor der politische Zweck an Bedeutung; übrig blieb in vielen Gruppen das kriminelle Geschäft.",
  "aufbau": "Die alten Bünde kannten einen Aufnahmeschwur, strenge Regeln, eine familienähnliche Bindung der Mitglieder und eine feste Rangordnung. Neue Mitglieder wurden in einer Zeremonie vor einem Altar aufgenommen und legten eine Reihe von Eiden ab. Heutige Triaden sind keine zentral geführte Organisation, sondern viele unabhängige, teils verfeindete Gruppen mit eigenen Untergliederungen. Ränge tragen überlieferte Zahlencodes, etwa 489 für den Anführer. Bekannte Gruppen in Hongkong sind die 14K, die Sun Yee On und die Wo Shing Wo. Zuverlässige Mitgliederzahlen gibt es nicht.",
  "wirkung": "Der Lin-Shuangwen-Aufstand auf Taiwan von 1786 bis 1788 ging von der Tiandihui aus, und in den 1850er Jahren bedrohten Triaden-Erhebungen Shanghai und Xiamen. Die britische Kolonialverwaltung in Hongkong stellte schon im Januar 1845 die Mitgliedschaft in der Triade unter Strafe. Auch die Revolution von 1911, die das Kaiserreich beendete, stützte sich teilweise auf Hongmen-Netzwerke in China und in Übersee. Im 20. Jahrhundert verschob sich der Schwerpunkt endgültig zur organisierten Kriminalität: Erpressung, Prostitution, illegales Glücksspiel und Drogenhandel. Nach 1949 brachten Flüchtlinge aus Guangdong neue Gruppen nach Hongkong; bei den Unruhen im Oktober 1956 spielten Triaden nach Darstellung der Kolonialregierung eine Rolle.",
  "mythos": "Das Bild vom patriotischen Geheimbund, der aus dem Shaolin-Kloster heraus gegen fremde Herrscher kämpfte, stammt aus der eigenen Überlieferung der Triaden und ist nicht belegt. Es diente schon früh dazu, Mitglieder zu binden und dem Bund Würde zu verleihen. Ebenso irreführend ist die Vorstellung einer einzigen, weltweit gesteuerten „chinesischen Mafia“: Die Gruppen arbeiten getrennt, konkurrieren und kooperieren je nach Geschäft. Auf der anderen Seite ist die Verklärung durch Kinofilme aus Hongkong, in denen Ehre und Bruderschaft im Vordergrund stehen, weit von der Wirklichkeit entfernt. Die Opfer von Erpressung, Menschenhandel und Drogenhandel sind real.",
  "heute": "In Hongkong ist die Mitgliedschaft in einer Triade nach der Societies Ordinance strafbar; seit 1994 erleichtert die Organized and Serious Crimes Ordinance zusätzlich die Verfolgung. In Macau wurde 1999 Wan Kuok-koi, Anführer einer 14K-Fraktion, zu einer langen Haftstrafe verurteilt. Triaden sind weiterhin in Ost- und Südostasien sowie in chinesischen Gemeinden im Ausland aktiv, unter anderem in Geldwäsche und Drogenhandel.",
  "zeitleiste": [
   {
    "datum": "um 1761",
    "jahr": 1761,
    "text": "In Zhangpu in der Provinz Fujian entsteht die Tiandihui, der Vorläufer der Triaden."
   },
   {
    "datum": "1786 bis 1788",
    "jahr": 1786,
    "text": "Der Lin-Shuangwen-Aufstand auf Taiwan, getragen von der Tiandihui, wird von Qing-Truppen niedergeschlagen."
   },
   {
    "datum": "8. Januar 1845",
    "jahr": 1845,
    "text": "Hongkong stellt die Mitgliedschaft in der Triade und anderen Geheimgesellschaften unter Strafe."
   },
   {
    "datum": "1850er Jahre",
    "jahr": 1853,
    "text": "Triaden-Erhebungen bedrohen Shanghai und Xiamen."
   },
   {
    "datum": "1911",
    "jahr": 1911,
    "text": "Die Revolution beendet das Kaiserreich; Hongmen-Netzwerke hatten sie mit unterstützt."
   },
   {
    "datum": "1949",
    "jahr": 1949,
    "text": "Mit Flüchtlingen aus Guangdong gelangen neue Gruppen, darunter die 14K, nach Hongkong."
   },
   {
    "datum": "1994",
    "jahr": 1994,
    "text": "Hongkong erlässt die Organized and Serious Crimes Ordinance."
   },
   {
    "datum": "1999",
    "jahr": 1999,
    "text": "In Macau wird der 14K-Anführer Wan Kuok-koi verurteilt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Triad",
   "Dian H. Murray, Qin Baoqi: The Origins of the Tiandihui. The Chinese Triads in Legend and History, 1994",
   "Historical Laws of Hong Kong Online (University of Hong Kong): Triad and Secret Societies Ordinance, No. 1 of 1845",
   "Yiu Kong Chu: The Triads as Business, 2000"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/triaden-0.jpg",
    "breite": 730,
    "hoehe": 1100,
    "zeigt": "Mitgliedsausweis der Triade, Illustration in einer britischen Zeitung vom 10. Dezember 1853 (Sammlung der Hong Kong Baptist University Library)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:The_rebellion_in_China._-_Credentials_of_a_member_of_the_Triad_Society._%281853%29.jpg"
   },
   {
    "datei": "bilder/dark/triaden-1.jpg",
    "breite": 691,
    "hoehe": 1100,
    "zeigt": "Darstellung eines Hongmen-Aufnahmerituals im National Museum of Singapore",
    "urheber": "User:CatOnMars",
    "lizenz": "CC BY 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hung_Men_Ritual%2C_National_Singapore_Museum%2C_2025-03-25.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "illuminaten",
  "titel": "Der Illuminatenorden",
  "untertitel": "Ein Aufklärerbund in Bayern und die Karriere eines Verschwörungsmythos",
  "gegruendet": 1776,
  "aufgeloest": 1785,
  "zeitraum": "1776–1785 (Reste bis 1787)",
  "region": "Bayern, Heiliges Römisches Reich",
  "art": "politischer Geheimbund",
  "kurz": "Ein Ingolstädter Professor gründete 1776 einen Bund, der Bayerns Verwaltung im Geist der Aufklärung durchdringen sollte. Nach neun Jahren war er verboten – und begann erst danach seine eigentliche Laufbahn.",
  "entstehung": "Adam Weishaupt, Professor für Kirchenrecht in Ingolstadt, gründete den Bund am 1. Mai 1776 mit einigen Studenten. Die Mitglieder nannten sich zunächst Perfektibilisten, bald Illuminaten, die Erleuchteten. Weishaupt, als Laie auf einem bis dahin von Jesuiten besetzten Lehrstuhl, wollte ein Gegengewicht zum Einfluss der Exjesuiten an Universität und Hof schaffen. Ab 1780 baute der Freiherr Adolph von Knigge den Bund aus, gab ihm ein Gradsystem nach freimaurerischem Vorbild und warb gezielt in Freimaurerlogen. Erst dadurch wuchs der Orden über Bayern hinaus, vor allem nach Mittel- und Norddeutschland. 1784 trennte sich Knigge im Streit mit Weishaupt.",
  "ziele": "Weishaupt wollte Menschen durch Erziehung moralisch vervollkommnen und auf lange Sicht die Herrschaft von Menschen über Menschen überflüssig machen. Praktisch hieß das: Anhänger der Aufklärung sollten in Ämter gebracht werden, um Bildung, Verwaltung und Rechtspflege zu verändern. Gewalt oder einen Umsturz sahen die erhaltenen Schriften nicht vor. Der Bund richtete sich gegen klerikalen Einfluss und Aberglauben, nicht gegen den Fürstenstaat als solchen.",
  "aufbau": "Der Orden war streng hierarchisch, die unteren Grade kannten die oberen nicht. Mitglieder trugen Decknamen aus der Antike – Weishaupt hieß Spartacus, Knigge Philo –, Orte erhielten Tarnnamen, Briefe wurden teils chiffriert. Neulinge mussten regelmäßig Berichte über sich und andere schreiben. Mitglieder waren überwiegend Beamte, Professoren, Geistliche und Adlige; Goethe, Herder und die Herzöge Ernst II. von Sachsen-Gotha und Carl August von Sachsen-Weimar gehörten zeitweise dazu. Die Forschung, vor allem Hermann Schüttler, hat knapp 1.400 Mitglieder über die gesamte Bestandszeit namentlich ermittelt; wie viele gleichzeitig aktiv waren, ist unsicher.",
  "wirkung": "Politisch erreichte der Orden wenig. Kurfürst Karl Theodor verbot 1784 alle nicht genehmigten Verbindungen und 1785 ausdrücklich Freimaurer und Illuminaten. Weishaupt verlor seine Professur und floh, zunächst nach Regensburg, dann nach Gotha, wo er 1830 starb. Unter dem Schutz Herzog Ernsts II. bestand dort bis 1787 ein Zentrum des Ordens. Die bayerische Regierung ließ 1787 beschlagnahmte Papiere als Einige Originalschriften des Illuminatenordens drucken – eine Bloßstellung, die dem Bund schadete und der Nachwelt seine Akten erhielt. Das Archiv des Gothaer Zweigs, die sogenannte Schwedenkiste, ist heute erschlossen.",
  "mythos": "Nach 1789 erklärten der französische Jesuit Augustin Barruel und der schottische Naturforscher John Robison 1797 die Französische Revolution zum Werk der Illuminaten, die im Verborgenen weiterbestünden. Belege legten sie nicht vor; der Orden war zu diesem Zeitpunkt seit Jahren aufgelöst. Seither dienen die Illuminaten als austauschbare Erklärung für Kriege, Revolutionen und Finanzkrisen, oft verbunden mit antisemitischen Motiven. Das Auge in der Pyramide auf der Dollarnote stammt aus dem Großen Siegel der USA von 1782 und hat mit dem Orden nichts zu tun. Romane wie die Illuminatus-Trilogie von 1975 und Dan Browns Illuminati machten den Namen zum Popkulturzeichen. Gesichert ist: Der Orden bestand rund ein Jahrzehnt, hatte keine nachweisbare Fortsetzung und ist aus seinen eigenen Akten gut bekannt.",
  "heute": "Die Forschung zum Orden ist dicht: Die Universität Erfurt betreibt in Gotha eine Arbeitsstelle Illuminatenforschung, die Briefwechsel ediert und Mitglieder in einer offenen Datenbank erfasst. Gruppen, die sich heute Illuminaten nennen, sind Neugründungen ohne Verbindung zum historischen Bund.",
  "zeitleiste": [
   {
    "datum": "1. Mai 1776",
    "jahr": 1776,
    "text": "Adam Weishaupt gründet in Ingolstadt den Bund der Perfektibilisten."
   },
   {
    "datum": "1780",
    "jahr": 1780,
    "text": "Adolph von Knigge tritt bei und baut den Orden nach freimaurerischem Vorbild aus."
   },
   {
    "datum": "1784",
    "jahr": 1784,
    "text": "Knigge verlässt den Orden; Kurfürst Karl Theodor verbietet alle nicht genehmigten Verbindungen."
   },
   {
    "datum": "März 1785",
    "jahr": 1785,
    "text": "Ein weiteres Edikt verbietet Freimaurer und Illuminaten ausdrücklich; Weishaupt flieht."
   },
   {
    "datum": "1787",
    "jahr": 1787,
    "text": "Die bayerische Regierung veröffentlicht beschlagnahmte Ordenspapiere; in Gotha endet die Ordensarbeit."
   },
   {
    "datum": "1797",
    "jahr": 1797,
    "text": "Barruel und Robison erklären die Französische Revolution zum Werk der Illuminaten."
   },
   {
    "datum": "1830",
    "jahr": 1830,
    "text": "Weishaupt stirbt in Gotha."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Illuminati",
   "Universität Erfurt, Forschungszentrum Gotha: Arbeitsstelle Illuminatenforschung",
   "Richard van Dülmen: Der Geheimbund der Illuminaten, 1975",
   "Hermann Schüttler: Die Mitglieder des Illuminatenordens 1776–1787/93, 1991",
   "National Geographic History: Adam Weishaupt and the Illuminati, 2016"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/illuminaten-0.jpg",
    "breite": 846,
    "hoehe": 1100,
    "zeigt": "Adam Weishaupt, Gründer des Illuminatenordens, Stich von Friedrich Rossmäßler, um 1799",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Johann_Adam_Weishaupt.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "carbonari",
  "titel": "Die Carbonari",
  "untertitel": "Köhler, Logen und Verfassungsrevolten im Italien des Vormärz",
  "gegruendet": 1806,
  "aufgeloest": null,
  "zeitraum": "etwa 1806 bis um 1831 (Gründung unsicher), in Frankreich als Charbonnerie vor allem in den 1820er Jahren",
  "region": "Italien (v. a. Königreich Neapel, Kirchenstaat, Lombardo-Venetien), Frankreich",
  "art": "politischer Geheimbund",
  "kurz": "Ein Netz geheimer Zellen, das 1820/21 Könige zu Verfassungen zwang und von Österreich zerschlagen wurde – Vorläufer der italienischen Einigungsbewegung.",
  "entstehung": "Woher die Carbonari genau kamen, ist nicht geklärt. Die ersten Zellen sind im frühen 19. Jahrhundert im Königreich Neapel belegt, als Süditalien unter französischer Herrschaft stand. Historiker vermuten einen Ableger der Freimaurerei oder einen Hilfsverein, der mit der napoleonischen Armee aus Frankreich kam; beides ist nicht sicher belegt. Der Name bedeutet „Köhler“: Die Mitglieder kleideten ihre Treffen in die Bildsprache der Holzkohlebrenner, sprachen von „Hütten“ und „Verkaufsstellen“ (vendite) und nannten einander „gute Vettern“. Nach dem Sturz Napoleons und der Rückkehr der alten Dynastien 1815 wurde der Bund zum Sammelbecken all jener, die Verfassungen und ein Ende der fremden Vorherrschaft wollten – Offiziere, Beamte, Anwälte, kleine Grundbesitzer, auch Adlige.",
  "ziele": "Ein gemeinsames Programm hatten die Carbonari nie. Manche wollten eine Republik, andere eine konstitutionelle Monarchie; manche ein föderales, andere ein zentral regiertes Italien. Einig waren sie sich im Wunsch nach einer geschriebenen Verfassung, nach Volksvertretung und nach Befreiung von der österreichischen Vorherrschaft. Hinzu kam eine deutliche Gegnerschaft zur politischen Macht der Kirche. Der Kirchenstaat galt ihnen als Hindernis jeder Reform.",
  "aufbau": "Der Bund war in kleine, voneinander abgeschottete Zellen gegliedert, die vendite. Es gab zwei Grade: Lehrling und Meister. Meister wurde, wer eine Zeit als Lehrling gedient hatte oder bereits Freimaurer war. Die Aufnahme folgte einem Ritual mit Eid und Symbolen aus dem Köhlerhandwerk; Außenstehende hießen „Heiden“. Weil die Zellen weitgehend selbständig handelten und nur lose verbunden waren, ließ sich der Bund schwer ausheben, aber ebenso schwer zu gemeinsamem Handeln bewegen. Wie viele Mitglieder es gab, ist unbekannt; zeitgenössische Polizeiberichte nannten hohe Zahlen, die vermutlich übertrieben waren.",
  "wirkung": "Im Juli 1820 lösten carbonarische Offiziere in Nola eine Erhebung aus, der sich Teile der Armee anschlossen. König Ferdinand I. von Neapel musste eine Verfassung gewähren. Die Großmächte der Heiligen Allianz beschlossen jedoch die Intervention: Im März 1821 schlug eine österreichische Armee die neapolitanischen Truppen, die Verfassung wurde aufgehoben. Ein Aufstand im Piemont im selben Monat scheiterte ebenfalls. In der Lombardei verhaftete die österreichische Polizei mutmaßliche Mitglieder, darunter den Schriftsteller Silvio Pellico, der viele Jahre in der Festung Spielberg bei Brünn saß; sein Bericht „Meine Gefängnisse“ (1832) machte die Haftbedingungen in ganz Europa bekannt. 1831 scheiterten Erhebungen in Modena, Parma und Bologna; ihr Anführer in Modena, Ciro Menotti, wurde hingerichtet. Danach verloren die Carbonari an Bedeutung, viele gingen zu Giuseppe Mazzinis „Junges Italien“.",
  "mythos": "Schon die Zeitgenossen überschätzten den Bund gewaltig. Für Metternich und die österreichische Polizei standen hinter fast jeder Unruhe die Carbonari, und Papst Pius VII. verurteilte sie 1821 in der Bulle „Ecclesiam a Jesu Christo“ als Freimaurer, deren Mitglieder exkommuniziert seien. Das Bild einer straff gelenkten europäischen Verschwörung stimmt nicht: Die Zellen handelten oft unabhängig voneinander, und die Erhebungen scheiterten gerade an mangelnder Abstimmung. Ebenso Legende ist die von den Carbonari selbst gepflegte Herkunftsgeschichte, nach der der Bund auf uralte Köhlergemeinschaften zurückgehe. Gesichert ist dagegen, dass bekannte Persönlichkeiten mit ihnen in Verbindung standen, darunter Lord Byron während seiner Zeit in Ravenna und der junge Mazzini, der als Carbonaro 1830 verhaftet wurde.",
  "heute": "Die Carbonari bestehen nicht mehr. In Italien gelten sie als frühe Vorkämpfer des Risorgimento; Gedenktafeln erinnern an Verurteilte, in Brünn auch ein Denkmal für die im Spielberg inhaftierten Italiener. Historisch zeigen sie, wie Geheimbünde in Staaten ohne legale Opposition zum Ersatz für Parteien wurden.",
  "zeitleiste": [
   {
    "datum": "frühes 19. Jahrhundert",
    "jahr": 1806,
    "text": "Erste Carbonari-Zellen im Königreich Neapel unter französischer Herrschaft (Datierung unsicher)."
   },
   {
    "datum": "Juli 1820",
    "jahr": 1820,
    "text": "Erhebung von Nola; Ferdinand I. von Neapel gewährt eine Verfassung."
   },
   {
    "datum": "März 1821",
    "jahr": 1821,
    "text": "Österreichische Truppen beenden die neapolitanische Verfassung; Aufstand im Piemont scheitert."
   },
   {
    "datum": "13. September 1821",
    "jahr": 1821,
    "text": "Papst Pius VII. verurteilt die Carbonari in der Bulle „Ecclesiam a Jesu Christo“."
   },
   {
    "datum": "1831",
    "jahr": 1831,
    "text": "Erhebungen in Modena, Parma und Bologna scheitern; Ciro Menotti wird hingerichtet."
   },
   {
    "datum": "1831",
    "jahr": 1831,
    "text": "Mazzini gründet im Exil „Junges Italien“, das die Carbonari ablöst."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Carbonari",
   "Lucy Riall: Risorgimento. The History of Italy from Napoleon to Nation-State, 2009",
   "John A. Davis (Hg.): Italy in the Nineteenth Century, 1796–1900, 2000",
   "Silvio Pellico: Le mie prigioni, 1832"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/carbonari-0.jpg",
    "breite": 679,
    "hoehe": 1100,
    "zeigt": "Die Verhaftung lombardo-venetischer Carbonari, Holzstich aus „L’illustrazione popolare“ (Mailand 1899)",
    "urheber": "unbekannt",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:L%E2%80%99arresto_dei_carbonari_Lombardo-Veneti_%28xilografia%29.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "skull-and-bones",
  "titel": "Skull and Bones",
  "untertitel": "Yales verschwiegene Studentenverbindung und die Mythen um sie",
  "gegruendet": 1832,
  "aufgeloest": null,
  "zeitraum": "seit 1832",
  "region": "New Haven, Connecticut, USA",
  "art": "Bund",
  "kurz": "Eine Verbindung von jährlich fünfzehn Yale-Studenten, aus der drei US-Präsidenten hervorgingen. Belegt ist ein einflussreiches Netzwerk, keine Weltverschwörung.",
  "entstehung": "Skull and Bones wurde 1832 an der Yale University in New Haven von den Studenten William Huntington Russell und Alphonso Taft gegründet. Die Verbindung nimmt nur Studenten im letzten Studienjahr auf. Der erste Jahrgang zählte fünfzehn Mitglieder, und bei dieser Zahl ist es geblieben. 1856 ließ Russell als Rechtsträger die Russell Trust Association eintragen; Schatzmeister war Daniel Coit Gilman, später erster Präsident der Johns Hopkins University. Im selben Jahr entstand das Vereinshaus an der High Street, wegen seiner fensterlosen Fassade „the Tomb“ genannt. Das Gebäude wurde 1903 erweitert.",
  "ziele": "Ein politisches Programm ist nicht bekannt. Skull and Bones ist eine elitäre Gemeinschaft, die ihre Mitglieder über das Studium hinaus verbinden soll. Gepflegt werden Rituale, Diskussionsabende und Verschwiegenheit über das Innenleben. Die Verbindung wirkt vor allem als Netzwerk: Mitglieder halten lebenslang Kontakt und fördern einander, wie es auch andere Eliteverbindungen tun.",
  "aufbau": "Jedes Jahr wählt die Verbindung fünfzehn Studenten des dritten Jahrgangs aus, die am „Tap Day“ mit einem Schlag auf die Schulter erfahren, dass sie aufgenommen werden. Symbol sind Totenkopf und gekreuzte Knochen mit der Zahl 322, deren Bedeutung nicht offiziell erklärt ist. Zum Besitz gehören das Tomb und Deer Island, eine Insel im St.-Lorenz-Strom. Frauen wurden erst spät zugelassen: 1991 wählte der Jahrgang erstmals Studentinnen aus, gegen erbitterten Widerstand von Altmitgliedern, die sogar vor Gericht zogen. Nach einer Abstimmung der Alten Herren sind Frauen seit dem Jahrgang 1992 Mitglieder.",
  "wirkung": "Zu den Mitgliedern gehörten drei Präsidenten der Vereinigten Staaten: William Howard Taft, Sohn des Mitbegründers, George H. W. Bush und George W. Bush. Hinzu kommen Senatoren, Richter, Diplomaten, Bankiers und Verleger. 2004 waren beide Präsidentschaftskandidaten Mitglieder, George W. Bush und John Kerry. Die Mitgliederlisten wurden lange veröffentlicht und sind heute weitgehend bekannt. Was sich daraus ablesen lässt, ist die Verflechtung einer kleinen Ostküstenelite, wie sie an amerikanischen Eliteuniversitäten typisch war.",
  "mythos": "Um die Verbindung ranken sich Verschwörungserzählungen: Sie steuere die Weltpolitik, kontrolliere den Geheimdienst CIA oder sei Teil der Illuminaten. Für nichts davon gibt es Belege; das Netzwerk ist einflussreich, aber nicht allmächtig. Am hartnäckigsten ist die Geschichte vom Schädel des Apachen-Anführers Geronimo. Ein Brief des Mitglieds Winter Mead von 1918, den ein Forscher 2005 im Yale-Archiv fand, behauptet, Mitglieder hätten den Schädel aus Geronimos Grab in Fort Sill geholt. Ob dies stimmt, ist ungeklärt; selbst der Finder hält einen Nachweis für kaum möglich. Eine 2009 eingereichte Klage von Nachkommen Geronimos wies ein Bundesgericht 2010 ab.",
  "heute": "Skull and Bones besteht weiter und nimmt jedes Jahr fünfzehn neue Mitglieder auf. Die Zusammensetzung ist vielfältiger geworden, seit die Verbindung Frauen und zunehmend Studenten unterschiedlicher Herkunft aufnimmt. Die Verschwiegenheit gilt fort, das Interesse der Öffentlichkeit ebenso.",
  "zeitleiste": [
   {
    "datum": "1832",
    "jahr": 1832,
    "text": "William Huntington Russell und Alphonso Taft gründen die Verbindung in Yale."
   },
   {
    "datum": "1856",
    "jahr": 1856,
    "text": "Eintragung der Russell Trust Association und Bau des Tomb."
   },
   {
    "datum": "1918",
    "jahr": 1918,
    "text": "Ein Brief des Mitglieds Winter Mead behauptet den Raub von Geronimos Schädel."
   },
   {
    "datum": "1991",
    "jahr": 1991,
    "text": "Erstmals werden Studentinnen ausgewählt; Altmitglieder streiten darüber vor Gericht."
   },
   {
    "datum": "1992",
    "jahr": 1992,
    "text": "Die ersten Frauen werden Mitglieder."
   },
   {
    "datum": "2004",
    "jahr": 2004,
    "text": "Beide Präsidentschaftskandidaten, Bush und Kerry, sind Mitglieder."
   },
   {
    "datum": "2009",
    "jahr": 2009,
    "text": "Nachkommen Geronimos klagen auf Herausgabe der Gebeine; die Klage wird 2010 abgewiesen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Skull and Bones",
   "Alexandra Robbins: Secrets of the Tomb. Skull and Bones, the Ivy League, and the Hidden Paths of Power, 2002",
   "CBS News / Associated Press: Letter May Back Yale Claim On Geronimo, 2006"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/skull-and-bones-0.jpg",
    "breite": 500,
    "hoehe": 193,
    "zeigt": "Wachssiegel der Verbindung mit Totenkopf, gekreuzten Knochen und der Zahl 322, um 1865 (Yale University Manuscripts & Archives)",
    "urheber": "unknown maker of seals (made for Skull and Bones)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Skull_and_Bones_wax_seals_circa_1865.jpg"
   },
   {
    "datei": "bilder/dark/skull-and-bones-1.jpg",
    "breite": 900,
    "hoehe": 472,
    "zeigt": "Das „Tomb“, das Vereinshaus in New Haven, um 2006",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Yale_Skull_and_Bones_Tomb.JPG"
   },
   {
    "datei": "bilder/dark/skull-and-bones-2.jpg",
    "breite": 350,
    "hoehe": 500,
    "zeigt": "Mitgründer William Huntington Russell, Foto aus dem Album des Yale-Jahrgangs 1833",
    "urheber": "Moulthrop, Phoenix Building, 298 Chapel Street, New Haven, Connecticut (photographer of Carte-de-visite)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:William_Huntington_Russell_Yale_class_of_1833.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "irish-republican-brotherhood",
  "titel": "Die Irish Republican Brotherhood",
  "untertitel": "Die Fenier: Eid, Zellen und der Weg zum Osteraufstand",
  "gegruendet": 1858,
  "aufgeloest": 1924,
  "zeitraum": "1858 bis 1924",
  "region": "Irland, Großbritannien, USA",
  "art": "politischer Geheimbund",
  "kurz": "Ein Eidbund, der sechs Jahrzehnte lang auf eine irische Republik hinarbeitete – und 1916 aus dem Verborgenen den Osteraufstand plante.",
  "entstehung": "Die Bruderschaft wurde am 17. März 1858, dem St. Patrick’s Day, in Dublin gegründet. Treibende Kraft war James Stephens, ein Veteran der gescheiterten Erhebung von 1848, der im Pariser Exil revolutionäre Geheimgesellschaften kennengelernt hatte. Zur gleichen Zeit entstand in New York unter John O’Mahony die Fenian Brotherhood, die unter den irischen Auswanderern Geld und Waffen sammelte. Nach ihr hießen bald beide Organisationen „Fenier“, ein Name, der auf die Fianna, die Kriegerschar der irischen Sage, anspielt. Den Hintergrund bildeten die Große Hungersnot der 1840er Jahre mit rund einer Million Toten und die massenhafte Auswanderung, die in Irland und Amerika eine Generation verbitterter Nationalisten hervorbrachte.",
  "ziele": "Das Ziel stand im Eid: eine unabhängige, demokratische irische Republik, zu erreichen notfalls mit Waffengewalt. Anders als die verfassungstreuen Nationalisten, die im Londoner Parlament für Selbstverwaltung (Home Rule) eintraten, hielt die Bruderschaft den bewaffneten Aufstand für den einzigen Weg. Zugleich war sie bereit, legale Bewegungen zu unterwandern und zu nutzen, wenn es ihr nützte.",
  "aufbau": "Die Mitglieder schworen Geheimhaltung und unbedingten Gehorsam gegenüber ihren Vorgesetzten. Die Organisation war in „Zirkel“ gegliedert, an deren Spitze ein „Centre“ stand; darunter folgten Ränge, die Hauptleuten und Unteroffizieren entsprachen, sodass jedes Mitglied nur wenige andere kannte. Nach dem gescheiterten Aufstand von 1867 lenkte ein Oberster Rat (Supreme Council) die Bruderschaft, dessen Präsident nach der Verfassung als rechtmäßiges Oberhaupt der künftigen Republik galt. Die katholische Kirche verurteilte den Bund wegen des Eides; viele Mitglieder blieben dennoch praktizierende Katholiken.",
  "wirkung": "Die erste große Probe endete im Scheitern: 1865 hob die Polizei die Zeitung „The Irish People“ aus und verhaftete führende Köpfe, Stephens entkam aus dem Gefängnis. Die Erhebung vom März 1867 brach rasch zusammen. In Manchester starb im September 1867 bei der Befreiung zweier Fenier der Polizist Charles Brett; drei Iren wurden dafür im November gehängt. Im Dezember 1867 tötete eine Sprengung an der Mauer des Gefängnisses Clerkenwell in London Anwohner, nach den meisten Angaben zwölf Menschen. Von amerikanischem Boden aus griffen Fenier zwischen 1866 und 1871 mehrmals Kanada an. Nach Jahrzehnten im Hintergrund unterwanderte die Bruderschaft ab 1913 die Irish Volunteers; ihr geheimer Militärrat plante den Osteraufstand vom April 1916, dessen Anführer die Briten hinrichten ließen. Unter Michael Collins spielte sie im Unabhängigkeitskrieg 1919–1921 eine zentrale Rolle.",
  "mythos": "Um die Fenier rankt sich bis heute eine Heldenerzählung, die vor allem auf die Hingerichteten von Manchester und 1916 zurückgeht. Dabei geraten die zivilen Opfer leicht aus dem Blick, etwa die Toten von Clerkenwell. Umgekehrt beschrieb die britische Presse die Fenier jahrzehntelang als allgegenwärtige Terrorverschwörung; tatsächlich war die Bruderschaft lange Zeit klein, gespalten und von Spitzeln durchsetzt. Oft fälschlich ihr zugerechnet werden die Phoenix-Park-Morde von 1882: Sie gingen auf die „Invincibles“ zurück, eine Absplitterung, nicht auf die Führung der Bruderschaft. Strittig ist auch, wie weit 1916 der Oberste Rat überhaupt eingeweiht war, denn der Militärrat handelte weitgehend auf eigene Faust.",
  "heute": "Die Bruderschaft löste sich nach dem Bürgerkrieg und der Armeemeuterei von 1924 auf; einen förmlichen Auflösungsbeschluss kennt die Forschung nicht sicher. Verschiedene spätere Gruppen beriefen sich auf ihr Erbe. In Dublin erinnert eine Gedenktafel an den Gründungsort in der Lombard Street.",
  "zeitleiste": [
   {
    "datum": "17. März 1858",
    "jahr": 1858,
    "text": "Gründung der Bruderschaft in Dublin unter James Stephens."
   },
   {
    "datum": "September 1865",
    "jahr": 1865,
    "text": "Die Polizei hebt die Zeitung „The Irish People“ aus; führende Mitglieder werden verhaftet."
   },
   {
    "datum": "März 1867",
    "jahr": 1867,
    "text": "Die Fenier-Erhebung in Irland scheitert binnen Tagen."
   },
   {
    "datum": "13. Dezember 1867",
    "jahr": 1867,
    "text": "Sprengung am Gefängnis Clerkenwell in London; zahlreiche Anwohner sterben."
   },
   {
    "datum": "1. August 1915",
    "jahr": 1915,
    "text": "Die Beerdigung des Feniers O’Donovan Rossa in Dublin wird zur Kundgebung der Bewegung."
   },
   {
    "datum": "24. April 1916",
    "jahr": 1916,
    "text": "Beginn des vom Militärrat der Bruderschaft geplanten Osteraufstands."
   },
   {
    "datum": "1924",
    "jahr": 1924,
    "text": "Die Bruderschaft hört faktisch auf zu bestehen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Fenian; Easter Rising",
   "Owen McGee: The IRB. The Irish Republican Brotherhood from the Land League to Sinn Féin, 2005",
   "León Ó Broin: Revolutionary Underground. The Story of the Irish Republican Brotherhood 1858–1924, 1976",
   "Dictionary of Irish Biography (Royal Irish Academy): James Stephens"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/irish-republican-brotherhood-0.jpg",
    "breite": 715,
    "hoehe": 1100,
    "zeigt": "Fahndungsaufruf mit einer Belohnung von 1000 Pfund für Hinweise zur Ergreifung von James Stephens (1866)",
    "urheber": "Office of the General-Governor of Ireland",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:James_Stephens_wanted_poster.jpg"
   },
   {
    "datei": "bilder/dark/irish-republican-brotherhood-1.jpg",
    "breite": 900,
    "hoehe": 702,
    "zeigt": "Titelseite der Fenier-Zeitung „The Irish People“, Dublin 1863",
    "urheber": "James Stephens",
    "lizenz": "CC BY 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:The_Irish_People_1863.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "ku-klux-klan",
  "titel": "Der Ku-Klux-Klan",
  "untertitel": "Terror gegen Schwarze Amerikaner in drei Wellen",
  "gegruendet": 1865,
  "aufgeloest": null,
  "zeitraum": "1865/66 bis Anfang der 1870er Jahre; 1915 bis 1944; ab den 1950er Jahren zersplitterte Gruppen",
  "region": "USA, vor allem die Südstaaten",
  "art": "politischer Geheimbund",
  "kurz": "Ein maskierter Terrorbund, der nach dem Bürgerkrieg die Gleichberechtigung Schwarzer Amerikaner mit Mord und Einschüchterung bekämpfte – und zweimal wiederkehrte.",
  "entstehung": "Der Klan entstand Ende 1865 oder Anfang 1866 in Pulaski, Tennessee, gegründet von sechs Veteranen der Konföderierten Armee. Der Name ist vermutlich vom griechischen „kyklos“ (Kreis) abgeleitet. Was anfangs als Geheimklub mit Verkleidungen und erfundenen Titeln begann, wurde innerhalb von zwei Jahren zu einem Netz bewaffneter Gruppen in den Südstaaten. Hintergrund war die Reconstruction: Nach dem Ende der Sklaverei erhielten Schwarze Männer das Wahlrecht, wurden in Ämter gewählt, Schulen entstanden. Der Klan richtete sich gegen diese neue Ordnung. Als erster Anführer mit dem Titel „Grand Wizard“ gilt der frühere Konföderierten-General Nathan Bedford Forrest. Der zweite Klan wurde 1915 von William J. Simmons am Stone Mountain in Georgia neu gegründet, im Jahr des Kinofilms „The Birth of a Nation“, der den ersten Klan verherrlichte.",
  "ziele": "Der erste Klan wollte die weiße Vorherrschaft im Süden wiederherstellen: Schwarze Bürger sollten nicht wählen, keine Ämter bekleiden, kein Land erwerben und sich nicht organisieren. Er diente faktisch als bewaffneter Arm der Demokratischen Partei gegen die Republikaner. Der Klan der 1920er Jahre richtete sich zusätzlich gegen Katholiken, Juden und Einwanderer. Der Klan der Bürgerrechtsära kämpfte gegen die Aufhebung der Rassentrennung.",
  "aufbau": "Der erste Klan hatte eine phantasievolle Hierarchie mit Titeln wie Grand Wizard, Grand Dragon und Grand Cyclops, doch in der Praxis handelten die örtlichen Gruppen weitgehend selbständig. Mitglieder ritten nachts maskiert und in uneinheitlichen Verkleidungen aus. Die einheitliche weiße Kutte mit spitzer Haube und das brennende Kreuz wurden erst mit dem zweiten Klan zum Kennzeichen, angeregt durch Roman und Film. Dieser zweite Klan war eine straff geführte, gewinnorientierte Massenorganisation mit Werbern, die an jedem Neumitglied verdienten. Mitte der 1920er Jahre zählte er nach Schätzungen von Historikern mehrere Millionen Mitglieder, auch im Norden und Mittleren Westen. Der dritte Klan bestand aus vielen kleinen, miteinander konkurrierenden Gruppen.",
  "wirkung": "Der erste Klan überfiel und ermordete vor allem vor Wahlen Schwarze Bürger, Lehrer und republikanische Politiker. Die Zahl der Toten ist nicht genau bekannt und geht nach Untersuchungen des Kongresses in die Hunderte. Der Kongress antwortete mit den Enforcement Acts von 1870 und 1871, die Angriffe auf Bürgerrechte unter Bundesstrafe stellten. Nach Massenverhaftungen in South Carolina brach der Klan weitgehend zusammen. Der zweite Klan zerfiel nach Skandalen ab 1925, etwa der Verurteilung des Indiana-Führers D. C. Stephenson wegen Mordes an Madge Oberholtzer. Der dritte Klan verübte in den 1960er Jahren Bombenanschläge und Morde: 1963 starben in der 16th Street Baptist Church in Birmingham Addie Mae Collins, Cynthia Wesley, Carole Robertson und Denise McNair, 1964 wurden in Mississippi die Bürgerrechtler James Chaney, Andrew Goodman und Michael Schwerner ermordet.",
  "mythos": "Hartnäckig hielt sich, auch durch „The Birth of a Nation“ verbreitet, das Bild vom Klan als Schutzmacht, die nach dem Bürgerkrieg Ordnung herstellte. Die Forschung, gestützt auf die umfangreichen Zeugenaussagen vor dem Kongress 1871/72, hat diese Legende widerlegt: Der Klan war eine Terrororganisation, deren Gewalt sich gezielt gegen politische Teilhabe richtete. Eine verbreitete Legende ist auch, Forrest habe den Klan 1869 aufgelöst und sich damit von ihm losgesagt; zwar ordnete er die Auflösung an, die Gewalt ging aber weiter, bis Bundesgesetze und Strafverfolgung sie eindämmten. Auch das Bild vom ersten Klan in einheitlicher weißer Kutte unter brennendem Kreuz stammt erst aus der Zeit des zweiten Klans. Zur Bilanz gehört, dass viele Taten der 1960er Jahre erst Jahrzehnte später geahndet wurden.",
  "heute": "Es gibt weiterhin kleine Gruppen, die sich Ku-Klux-Klan nennen; nach Angaben von Beobachtungsstellen wie dem Southern Poverty Law Center sind es wenige Tausend Mitglieder. Zivilklagen brachten einzelne Organisationen in den Ruin, etwa 1987 nach dem Lynchmord an Michael Donald in Mobile, Alabama. Späte Prozesse verurteilten Täter des Birminghamer Anschlags 1977, 2001 und 2002, 2005 den als Organisator der Morde von Mississippi geltenden Edgar Ray Killen wegen Totschlags.",
  "zeitleiste": [
   {
    "datum": "1865/66",
    "jahr": 1865,
    "text": "Gründung des Klans in Pulaski, Tennessee, durch sechs Veteranen der Konföderierten Armee."
   },
   {
    "datum": "20. April 1871",
    "jahr": 1871,
    "text": "Der Ku Klux Klan Act stellt Verschwörungen gegen Bürgerrechte unter Bundesstrafe."
   },
   {
    "datum": "Oktober 1871",
    "jahr": 1871,
    "text": "Präsident Grant setzt in neun Bezirken South Carolinas die Haftprüfung aus."
   },
   {
    "datum": "1915",
    "jahr": 1915,
    "text": "Neugründung des Klans am Stone Mountain in Georgia."
   },
   {
    "datum": "1925",
    "jahr": 1925,
    "text": "D. C. Stephenson wird wegen Mordes verurteilt; der zweite Klan verliert rasch Mitglieder."
   },
   {
    "datum": "15. September 1963",
    "jahr": 1963,
    "text": "Klan-Mitglieder töten in Birmingham vier Mädchen durch einen Bombenanschlag auf eine Kirche."
   },
   {
    "datum": "21. Juni 1964",
    "jahr": 1964,
    "text": "Chaney, Goodman und Schwerner werden in Mississippi ermordet."
   },
   {
    "datum": "2005",
    "jahr": 2005,
    "text": "Edgar Ray Killen wird wegen der Morde von 1964 des Totschlags in drei Fällen schuldig gesprochen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Ku Klux Klan",
   "Eric Foner: Reconstruction. America’s Unfinished Revolution, 1863–1877, 1988",
   "Allen W. Trelease: White Terror. The Ku Klux Klan Conspiracy and Southern Reconstruction, 1971",
   "Linda Gordon: The Second Coming of the KKK, 2017",
   "FBI: Mississippi Burning (Famous Cases)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/ku-klux-klan-0.jpg",
    "breite": 340,
    "hoehe": 446,
    "zeigt": "Zwei Klan-Mitglieder in der Verkleidung, in der sie im September 1871 in Tishomingo County, Mississippi, von Bundesbeamten festgenommen wurden (Harper’s Weekly, 27. Januar 1872)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mississippi_ku_klux.jpg"
   },
   {
    "datei": "bilder/dark/ku-klux-klan-1.jpg",
    "breite": 900,
    "hoehe": 648,
    "zeigt": "Anhörung zum Ku-Klux-Klan vor dem US-Repräsentantenhaus, Oktober 1921",
    "urheber": "National Photo Company Collection",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Klu_Klux_hearing%2C_10-11-21_LCCN2016845705.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "cosa-nostra",
  "titel": "Die Cosa Nostra",
  "untertitel": "Die sizilianische Mafia, das Schweigegebot und der Maxiprozess",
  "gegruendet": 1865,
  "aufgeloest": null,
  "zeitraum": "nachweisbar seit den 1860er Jahren (erste amtliche Erwähnung 1865), bis heute",
  "region": "Sizilien, mit Verbindungen nach Nordamerika",
  "art": "kriminelle Organisation",
  "kurz": "Siziliens Mafia, über ein Jahrhundert geleugnet, wurde erst im Maxiprozess 1986/87 gerichtlich als Organisation festgestellt – um den Preis vieler Leben.",
  "entstehung": "Die Mafia entstand im Sizilien des 19. Jahrhunderts, als der Feudalismus endete, der Staat schwach war und Grundbesitzer, Pächter und Händler Schutz suchten. Männer, die Gewalt anboten, um Besitz zu bewachen, Streit zu schlichten und Geschäfte abzusichern, schlossen sich zu Bünden zusammen. Der Präfekt von Palermo verwendete das Wort „Maffia“ 1865 in einem amtlichen Bericht; populär geworden war es kurz zuvor durch das Theaterstück „I mafiusi di la Vicaria“ (1863). 1876 beschrieb Leopoldo Franchetti in einer Untersuchung die Gewalt als regelrechte „Industrie“. Früh waren die Gruppen besonders im Hinterland Palermos mit seinen Zitrusplantagen verankert. Den Namen „Cosa Nostra“ („unsere Sache“) machte vor allem der Kronzeuge Tommaso Buscetta 1984 öffentlich bekannt.",
  "ziele": "Die Cosa Nostra verfolgt kein politisches Ziel, sondern Macht und Geld. Ihr Kerngeschäft ist die Kontrolle eines Territoriums: Schutzgeld, Einfluss auf öffentliche Aufträge und Bauwirtschaft, später der internationale Heroinhandel. Um ungestört zu bleiben, sucht sie die Nähe zu Politik und Verwaltung, kauft Stimmen und schüchtert ein. Wer sich widersetzt, Ermittler, Journalisten, Unternehmer, wird bedroht oder getötet.",
  "aufbau": "Nach den Aussagen der Kronzeugen besteht die Cosa Nostra aus „Familien“, die jeweils ein Gebiet beherrschen und von einem gewählten Oberhaupt geführt werden, mit Stellvertreter, Beratern und einfachen „Soldaten“. Mehrere Familien bilden einen Bezirk (mandamento), dessen Vertreter in der Provinzkommission sitzen, die in Palermo „Cupola“ genannt wird. Mitglied wird man durch ein Aufnahmeritual mit Blutstropfen und brennendem Heiligenbild. Grundregel ist die Omertà, das Schweigegebot gegenüber Polizei und Justiz; ihr Bruch gilt als todeswürdig. Die Mitglieder sprechen von sich als „Männer der Ehre“.",
  "wirkung": "Nach 1945 wuchs die Mafia mit Bauboom und Drogenhandel. Im Krieg der Clans 1981–1983 setzten sich die Corleonesi unter Salvatore Riina durch, begleitet von Morden an Staatsvertretern, darunter Pio La Torre und General Carlo Alberto dalla Chiesa 1982. Danach wurde die mafiöse Vereinigung strafbar (Artikel 416-bis). Der Antimafia-Pool in Palermo um Giovanni Falcone und Paolo Borsellino baute auf Buscettas Aussagen den Maxiprozess auf. Er begann am 10. Februar 1986 in einem eigens errichteten Bunkergerichtssaal am Ucciardone-Gefängnis gegen 475 Angeklagte. Am 16. Dezember 1987 ergingen 19 lebenslange Strafen und insgesamt 2665 Jahre Haft; die Zahl der Verurteilten wird mit rund 340 angegeben. Nachdem das Kassationsgericht die Urteile am 30. Januar 1992 bestätigt hatte, ließ die Cosa Nostra Falcone am 23. Mai 1992 bei Capaci und Borsellino am 19. Juli 1992 in Palermo durch Bomben töten.",
  "mythos": "Lange wurde die Mafia geleugnet: Es gebe keine Organisation, nur eine sizilianische Mentalität. Der Maxiprozess hat diese Behauptung gerichtlich widerlegt. Falsch ist auch das romantische Bild vom „ehrenwerten“ Mafioso, der Schwache schützt und Frauen und Kinder verschont; die Cosa Nostra ermordete auch Unbeteiligte und Kinder, darunter 1996 den 14-jährigen Giuseppe Di Matteo, Sohn eines Kronzeugen. Legende ist die Deutung des Wortes „Mafia“ als Abkürzung eines Schlachtrufs aus der Sizilianischen Vesper von 1282. Strittig bleibt bis heute, ob und wie weit Teile des Staates Anfang der 1990er Jahre mit der Mafia verhandelten; ein großer Prozess dazu endete 2023 mit Freisprüchen für die angeklagten Staatsvertreter. Gerichtlich festgestellt ist, dass die Ermittlungen zum Anschlag auf Borsellino durch einen falschen Kronzeugen jahrelang in die Irre geführt wurden.",
  "heute": "Die Cosa Nostra besteht fort, ist aber deutlich geschwächt; als mächtiger gilt heute die kalabrische ’Ndrangheta. Riina wurde 1993 verhaftet, Bernardo Provenzano 2006, Matteo Messina Denaro nach dreißig Jahren auf der Flucht im Januar 2023. Bei Capaci starben auch Francesca Morvillo, Antonio Montinaro, Rocco Dicillo und Vito Schifani, in der Via D’Amelio Emanuela Loi, Agostino Catalano, Vincenzo Li Muli, Walter Eddie Cosina und Claudio Traina.",
  "zeitleiste": [
   {
    "datum": "1865",
    "jahr": 1865,
    "text": "Erste Erwähnung der „Maffia“ in einem amtlichen Bericht aus Palermo."
   },
   {
    "datum": "1876",
    "jahr": 1876,
    "text": "Leopoldo Franchetti beschreibt die Gewaltwirtschaft in Sizilien."
   },
   {
    "datum": "1982",
    "jahr": 1982,
    "text": "Nach den Morden an La Torre und dalla Chiesa wird die mafiöse Vereinigung strafbar."
   },
   {
    "datum": "1984",
    "jahr": 1984,
    "text": "Tommaso Buscetta sagt vor Giovanni Falcone aus."
   },
   {
    "datum": "10. Februar 1986",
    "jahr": 1986,
    "text": "Beginn des Maxiprozesses im Bunkergerichtssaal von Palermo."
   },
   {
    "datum": "16. Dezember 1987",
    "jahr": 1987,
    "text": "Urteil: 19 lebenslange Strafen und 2665 Jahre Haft."
   },
   {
    "datum": "23. Mai 1992",
    "jahr": 1992,
    "text": "Anschlag von Capaci: Falcone, seine Frau und drei Polizisten sterben."
   },
   {
    "datum": "19. Juli 1992",
    "jahr": 1992,
    "text": "Anschlag in der Via D’Amelio: Borsellino und fünf Polizisten sterben."
   }
  ],
  "quellen": [
   "John Dickie: Cosa Nostra. A History of the Sicilian Mafia, 2004",
   "Salvatore Lupo: Storia della mafia dalle origini ai giorni nostri, 1993",
   "Letizia Paoli: Mafia Brotherhoods. Organized Crime, Italian Style, 2003",
   "Encyclopaedia Britannica: Mafia"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/cosa-nostra-0.jpg",
    "breite": 900,
    "hoehe": 507,
    "zeigt": "Giovanni Falcone, Paolo Borsellino und Antonino Caponnetto, Leiter des Antimafia-Pools (vor 1992)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Caponnetto_Falcone_Borsellino.jpg"
   },
   {
    "datei": "bilder/dark/cosa-nostra-1.jpg",
    "breite": 733,
    "hoehe": 1100,
    "zeigt": "Wandbild für Falcone und Borsellino in Palermo (Foto 2025)",
    "urheber": "Matthias Süßen",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Falcone_e_Borsellino%2C_Wandbild_in_Palermo_-_Exterior-2025-msu-3901-.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "protokolle-der-weisen-von-zion",
  "titel": "Die „Protokolle der Weisen von Zion“",
  "untertitel": "Eine antisemitische Fälschung und ihre Wirkung",
  "gegruendet": 1903,
  "aufgeloest": null,
  "zeitraum": "erstmals veröffentlicht 1903, verbreitet bis heute",
  "region": "Russland, Europa, Nordamerika, Nahost, weltweit",
  "art": "erfundene Verschwörung",
  "kurz": "Die Protokolle sind eine antisemitische Fälschung. Sie geben vor, Pläne einer jüdischen Weltverschwörung zu enthüllen, und gehören zu den folgenreichsten Lügen des 20. Jahrhunderts.",
  "entstehung": "Die Protokolle erschienen erstmals 1903 in Fortsetzungen in der Sankt Petersburger Zeitung „Snamja“ des antisemitischen Publizisten Pawel Kruschewan. 1905 nahm Sergej Nilus sie als Anhang in ein religiöses Buch über das Kommen des Antichrist auf. Der Text gibt sich als Mitschrift geheimer Sitzungen jüdischer Führer aus, angeblich in Basel zur Zeit des Ersten Zionistenkongresses 1897. Tatsächlich ist er in weiten Teilen abgeschrieben, vor allem aus Maurice Jolys Satire „Dialogue aux enfers entre Machiavel et Montesquieu“ von 1864, die sich gegen Napoleon III. richtete und Juden überhaupt nicht erwähnt, sowie aus Hermann Goedsches Roman „Biarritz“. Wer die Fälschung anfertigte, ist bis heute nicht sicher geklärt; vermutet wird das Umfeld der russischen Geheimpolizei.",
  "ziele": "Die Fälschung sollte Juden als Drahtzieher einer Verschwörung zur Weltherrschaft erscheinen lassen. Angeblich wollten sie durch Liberalismus, Presse, Finanzwesen und Revolution die christliche Ordnung zerstören – eine frei erfundene Unterstellung, für die es keinerlei Beleg gibt. Im Zarenreich diente sie dazu, Reformen und Revolution als jüdisches Werk hinzustellen und Hass zu schüren. Später nutzten antisemitische Bewegungen überall den Text, um Judenfeindschaft als angebliche Notwehr zu rechtfertigen.",
  "aufbau": "Die Protokolle sind keine Organisation, sondern ein Text. Es gab nie „Weise von Zion“, keine geheimen Sitzungen und keinen Plan. Die verbreitete Fassung von Nilus umfasst 24 Abschnitte, in denen ein namenloser, erfundener Sprecher einen ebenso erfundenen Plan zur Unterwerfung der Welt entwirft. Die vermeintliche Echtheit stützten Herausgeber mit wechselnden, einander widersprechenden Herkunftsgeschichten. Gerade das macht die Fälschung typisch für Verschwörungserzählungen: Jeder Gegenbeweis wird als weiterer Beweis für die Macht der Verschwörer gedeutet.",
  "wirkung": "Nach 1917 verbreiteten russische Emigranten die Protokolle in ganz Europa. 1919 erschien eine deutsche Ausgabe, 1920 folgten englische Ausgaben in London und den USA. Henry Ford ließ die Inhalte in seiner Zeitung „Dearborn Independent“ verbreiten; die daraus zusammengestellte Schrift „The International Jew“ verkaufte sich nach Angaben des US Holocaust Memorial Museum über 500.000 Mal. Hitler berief sich in „Mein Kampf“ auf die Protokolle, der Zentralverlag der NSDAP brachte bis 1938 zahlreiche Auflagen heraus, und die Fälschung gehörte zur antisemitischen Propaganda, die den Weg zum Holocaust bereitete.",
  "mythos": "Hier ist der Mythos das Ganze: Die Protokolle sind von Anfang bis Ende erfunden. Im August 1921 wies Philip Graves in der Londoner „Times“ Absatz für Absatz nach, dass der Text von Jolys Satire abgeschrieben ist. Im Berner Prozess, den der Schweizerische Israelitische Gemeindebund und die Israelitische Kultusgemeinde Bern gegen Verbreiter aus dem Umfeld der Schweizer Frontenbewegung angestrengt hatten, stellte Richter Walter Meyer am 14. Mai 1935 nach Anhörung von Gutachtern und Zeugen fest, dass es sich um eine Fälschung und um Schundliteratur handelt. Das Berner Obergericht sprach die Angeklagten am 1. November 1937 aus formalen Gründen frei, weil das Gesetz gegen Schundliteratur nicht für politische Schriften gelte. Ein Beleg für die Echtheit war das nicht, auch wenn Antisemiten es so darstellten.",
  "heute": "Die Protokolle werden bis heute gedruckt und vor allem im Internet verbreitet, in Europa, Amerika und besonders in der arabischen Welt. Die Charta der Hamas von 1988 beruft sich auf sie. Viele moderne Verschwörungserzählungen über geheime Eliten, die angeblich Medien und Finanzwelt lenken, wiederholen ihre haltlosen Muster, oft ohne den Ursprung zu nennen.",
  "zeitleiste": [
   {
    "datum": "1864",
    "jahr": 1864,
    "text": "Maurice Joly veröffentlicht seine Satire gegen Napoleon III., die später als Vorlage dient."
   },
   {
    "datum": "1903",
    "jahr": 1903,
    "text": "Erster Abdruck in der Sankt Petersburger Zeitung „Snamja“."
   },
   {
    "datum": "1905",
    "jahr": 1905,
    "text": "Sergej Nilus veröffentlicht die Protokolle als Anhang seines Buches."
   },
   {
    "datum": "1919 bis 1920",
    "jahr": 1920,
    "text": "Deutsche und englische Ausgaben erscheinen; Henry Fords Zeitung verbreitet die Inhalte in den USA."
   },
   {
    "datum": "16. bis 18. August 1921",
    "jahr": 1921,
    "text": "Philip Graves weist in der „Times“ die Fälschung nach."
   },
   {
    "datum": "14. Mai 1935",
    "jahr": 1935,
    "text": "Das Berner Gericht stellt fest, dass die Protokolle eine Fälschung sind."
   },
   {
    "datum": "1. November 1937",
    "jahr": 1937,
    "text": "Das Berner Obergericht spricht die Verbreiter aus formalen Gründen frei."
   },
   {
    "datum": "1988",
    "jahr": 1988,
    "text": "Die Charta der Hamas beruft sich auf die Protokolle."
   }
  ],
  "quellen": [
   "United States Holocaust Memorial Museum, Holocaust Encyclopedia: Protocols of the Elders of Zion",
   "Encyclopaedia Britannica: Protocols of the Elders of Zion",
   "Philip Graves: The Truth about the Protocols. A Literary Forgery, The Times, 16.–18. August 1921",
   "Michael Hagemeister: Die „Protokolle der Weisen von Zion“ vor Gericht. Der Berner Prozess 1933–1937 und die „antisemitische Internationale“, 2017"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/protokolle-der-weisen-von-zion-0.jpg",
    "breite": 900,
    "hoehe": 1068,
    "zeigt": "Bericht der New York Times vom 4. September 1921 über den Nachweis der Fälschung",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Proof_that_the_%22Jewish_Protocols%22_were_forged.jpg"
   },
   {
    "datei": "bilder/dark/protokolle-der-weisen-von-zion-1.jpg",
    "breite": 781,
    "hoehe": 1100,
    "zeigt": "Titelseite von Sergej Nilus' Buch von 1905, in dem die Protokolle erschienen, als Faksimile von 1920",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:1905_Velikoe_v_malom_-_Serge_Nilus_-_Title_page_-_Facsimile_-_1920.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "schwarze-hand",
  "titel": "Die Schwarze Hand",
  "untertitel": "„Vereinigung oder Tod“: Serbische Offiziere und das Attentat von Sarajevo",
  "gegruendet": 1911,
  "aufgeloest": 1917,
  "zeitraum": "1911 bis 1917",
  "region": "Serbien, Bosnien-Herzegowina",
  "art": "politischer Geheimbund",
  "kurz": "Ein Geheimbund serbischer Offiziere, aus dessen Reihen die Waffen für das Attentat von Sarajevo 1914 kamen – der Auslöser des Ersten Weltkriegs.",
  "entstehung": "Die Organisation „Vereinigung oder Tod“, bald „Schwarze Hand“ genannt, wurde im Mai 1911 in Belgrad von Offizieren der serbischen Armee gegründet. Ihr führender Kopf war Oberst Dragutin Dimitrijević, genannt Apis, später Chef des militärischen Nachrichtendienstes. Viele Gründer hatten schon 1903 an der Verschwörung teilgenommen, bei der König Alexander Obrenović und Königin Draga in Belgrad ermordet wurden. Den Anstoß zur Gründung gab die Annexion Bosnien-Herzegowinas durch Österreich-Ungarn 1908, die serbische Nationalisten als Demütigung empfanden. Die halbstaatliche Vereinigung „Narodna Odbrana“ erschien ihnen zu zahm. Historiker sehen Vorbilder für Aufbau und Satzung in nationalen Geheimbünden des 19. Jahrhunderts wie den Carbonari.",
  "ziele": "Laut Satzung wollte die Organisation alle Gebiete mit serbischer Bevölkerung, die außerhalb Serbiens lagen, mit dem Königreich vereinigen – vor allem Bosnien-Herzegowina, aber auch Gebiete im Osmanischen Reich. Sie setzte dabei ausdrücklich auf revolutionäre Gewalt statt auf Diplomatie. Innenpolitisch strebte sie nach Einfluss auf Regierung und Armee und stand in scharfem Gegensatz zu Ministerpräsident Nikola Pašić.",
  "aufbau": "Die Mitglieder, überwiegend Offiziere, ferner Beamte und Studenten, waren in Zellen von drei bis fünf Personen organisiert, die nur einander und ihren Vorgesetzten kannten. An der Spitze stand ein Zentralausschuss in Belgrad. Bei der Aufnahme leisteten die Neuen einen Eid bei Sonne, Erde, Gott und der Ehre der Vorfahren und unterwarfen sich unbedingtem Gehorsam; Verrat sollte mit dem Tod bestraft werden. Das Siegel zeigte unter anderem einen Totenschädel mit gekreuzten Knochen, einen Dolch, eine Bombe und ein Giftfläschchen. Die Zeitung „Pijemont“, benannt nach dem Königreich, das Italien geeint hatte, verbreitete die Ideen der Organisation. Wie viele Mitglieder sie bis 1914 hatte, ist unsicher; die Schätzungen gehen weit auseinander.",
  "wirkung": "Am 28. Juni 1914 erschoss der 19-jährige bosnische Serbe Gavrilo Princip in Sarajevo den österreichischen Thronfolger Franz Ferdinand und dessen Frau Sophie, Herzogin von Hohenberg. Princip und seine Mitverschwörer gehörten zum Umfeld der Jugendbewegung „Mlada Bosna“. Gesichert ist, dass sie in Belgrad Pistolen und Bomben aus serbischen Armeebeständen erhielten, vermittelt durch Mitglieder der Schwarzen Hand, darunter Major Vojislav Tankosić und Milan Ciganović, und dass ein Netz von Vertrauensleuten sie über die Grenze schleuste. Österreich-Ungarn nahm das Attentat zum Anlass für sein Ultimatum an Serbien; einen Monat später begann der Krieg. Im Prozess von Saloniki 1917 verurteilte die Exilregierung Apis und weitere Offiziere wegen eines angeblichen Komplotts gegen Prinzregent Alexander. Apis, Ljubomir Vulović und Rade Malobabić wurden am 26. Juni 1917 erschossen.",
  "mythos": "Lange hieß es, der serbische Staat habe das Attentat bestellt. Das ist so nicht belegt: Die Schwarze Hand war eine Verschwörung innerhalb des Staates, die mit der Regierung Pašić verfeindet war. Ob und wie viel Pašić vorab wusste, ist bis heute umstritten. Ebenso umstritten ist, ob der Zentralausschuss den Plan beschlossen hatte oder Apis eigenmächtig handelte. Apis selbst übernahm 1917 in einer schriftlichen Erklärung die Verantwortung für Sarajevo, möglicherweise in der Hoffnung, damit sein Leben zu retten. Der Prozess von Saloniki gilt in der Forschung weithin als politisch motiviert; der Vorwurf des Komplotts gegen den Prinzregenten wurde nie bewiesen. 1953 hob ein Gericht im sozialistischen Jugoslawien die Urteile auf. Mit der „Schwarzen Hand“ italienischer Erpresserbanden in den USA hat die serbische Organisation nichts zu tun.",
  "heute": "Die Organisation endete mit dem Prozess von Saloniki 1917. Ihre Rolle bleibt ein zentraler Streitpunkt in der Debatte über die Ursachen des Ersten Weltkriegs. In Serbien wird Apis teils als Patriot verehrt, teils als Verschwörer kritisch gesehen.",
  "zeitleiste": [
   {
    "datum": "Juni 1903",
    "jahr": 1903,
    "text": "Offiziere um Dimitrijević ermorden König Alexander Obrenović und Königin Draga."
   },
   {
    "datum": "Oktober 1908",
    "jahr": 1908,
    "text": "Österreich-Ungarn annektiert Bosnien-Herzegowina."
   },
   {
    "datum": "Mai 1911",
    "jahr": 1911,
    "text": "Gründung der Organisation „Vereinigung oder Tod“ in Belgrad."
   },
   {
    "datum": "28. Juni 1914",
    "jahr": 1914,
    "text": "Gavrilo Princip erschießt in Sarajevo Franz Ferdinand und Sophie von Hohenberg."
   },
   {
    "datum": "28. Juli 1914",
    "jahr": 1914,
    "text": "Österreich-Ungarn erklärt Serbien den Krieg."
   },
   {
    "datum": "Frühjahr 1917",
    "jahr": 1917,
    "text": "Prozess von Saloniki gegen Apis und weitere Mitglieder."
   },
   {
    "datum": "26. Juni 1917",
    "jahr": 1917,
    "text": "Apis, Vulović und Malobabić werden hingerichtet."
   },
   {
    "datum": "1953",
    "jahr": 1953,
    "text": "Ein jugoslawisches Gericht hebt die Urteile von Saloniki auf."
   }
  ],
  "quellen": [
   "David MacKenzie: Apis. The Congenial Conspirator, 1989",
   "David MacKenzie: The „Black Hand“ on Trial. Salonika, 1917, 1995",
   "Vladimir Dedijer: The Road to Sarajevo, 1966",
   "Christopher Clark: Die Schlafwandler. Wie Europa in den Ersten Weltkrieg zog, 2013",
   "Encyclopaedia Britannica: Assassination of Archduke Franz Ferdinand"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/schwarze-hand-0.jpg",
    "breite": 764,
    "hoehe": 1100,
    "zeigt": "Dragutin Dimitrijević, genannt Apis, in Uniform, um 1900",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Dragutin_Dimitrijevi%C4%87-Apis%2C_ca._1900.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "thule-gesellschaft",
  "titel": "Die Thule-Gesellschaft",
  "untertitel": "Völkischer Bund in München 1918–1925 und seine Legende",
  "gegruendet": 1918,
  "aufgeloest": 1925,
  "zeitraum": "1918 bis etwa 1925",
  "region": "München, Bayern",
  "art": "politischer Geheimbund",
  "kurz": "Ein völkisch-antisemitischer Zirkel, der 1918/19 in München die Gegenrevolution organisierte und am Rand der NSDAP-Gründung stand. Die Legende vom okkulten Ursprung des Nationalsozialismus ist eine Nachkriegserfindung.",
  "entstehung": "Die Thule-Gesellschaft ging aus dem 1912 gegründeten Germanenorden hervor, einer antisemitischen, logenartig organisierten Vereinigung. Rudolf von Sebottendorf, ein Abenteurer mit Interesse an Esoterik und Astrologie, baute 1918 in München die bayerische Gliederung eines Ablegers dieses Ordens auf. Um nicht als politischer Kampfbund aufzufallen, trat sie als „Studiengruppe für germanisches Altertum“ auf und nannte sich nach dem sagenhaften Nordland Thule. Die Angaben zum Gründungsdatum schwanken zwischen August und November 1918. Versammlungsort waren angemietete Räume im Hotel Vier Jahreszeiten. Der Name sollte an eine angebliche arische Urheimat im Norden erinnern.",
  "ziele": "Die Gesellschaft verband völkisches und alldeutsches Gedankengut mit rassistischer Germanenschwärmerei. Ihr Programm war antisemitisch, antirepublikanisch und antikommunistisch. Wer aufgenommen werden wollte, musste schriftlich versichern, kein jüdisches Blut zu haben. Nach der Revolution vom November 1918 ging es ihr vor allem darum, die neue Ordnung in Bayern zu bekämpfen und die Arbeiterschaft für den Nationalismus zu gewinnen.",
  "aufbau": "Nach Angaben des Deutschen Historischen Museums hatte die Gesellschaft bis zu 1500 Mitglieder in Bayern, nach dem Historiker Nicholas Goodrick-Clarke davon etwa 250 in München. Viele kamen aus Bürgertum und Adel. Als Mitglieder belegt sind Rudolf Heß und Hans Frank. Dietrich Eckart, Gottfried Feder und Alfred Rosenberg verkehrten dort; ob sie Mitglieder oder nur Gäste waren, beurteilt die Forschung unterschiedlich. Hitler war nach allen erhaltenen Unterlagen nie Mitglied und ist bei keiner Versammlung nachgewiesen. Als Zeichen diente ein Hakenkreuz mit Schwert.",
  "wirkung": "Die Gesellschaft kaufte 1918 den „Münchener Beobachter“, der ab August 1919 als „Völkischer Beobachter“ erschien und 1920 an die NSDAP überging. Ihr Mitglied Karl Harrer gründete am 5. Januar 1919 mit Anton Drexler die Deutsche Arbeiterpartei, in die Hitler im September 1919 eintrat. Mit dem Ausbau zur NSDAP 1920 wurde Harrer verdrängt, die Verbindung zur Thule riss ab. Während der Münchner Räterepublik organisierte die Gesellschaft einen Kampfbund, der mit den Freikorps gegen die Räte vorging. Am 30. April 1919 erschossen Rotarmisten im Luitpold-Gymnasium zehn Geiseln, darunter sieben Mitglieder der Gesellschaft. Danach zerfiel sie allmählich und löste sich um 1925 auf.",
  "mythos": "Aus Zirkeln wie der Thule-Gesellschaft stammen Motive und Personen, die in die frühe NSDAP einflossen; das ist belegt und gehört zur Vorgeschichte des Nationalsozialismus. Die populäre Vorstellung, eine okkulte Geheimloge habe Hitler geformt und das Dritte Reich gesteuert, geht dagegen auf Nachkriegsbücher zurück, besonders auf den Bestseller „Le Matin des magiciens“ von Louis Pauwels und Jacques Bergier aus dem Jahr 1960. Die Forschung, allen voran Goodrick-Clarke, hat sie als Legende zurückgewiesen. Auch Sebottendorfs eigenes Buch „Bevor Hitler kam“ von 1933 übertrieb die Bedeutung des Bundes; das Regime ließ es verbieten. Spätere Mythen um Vril-Kräfte oder Flugscheiben entbehren jeder Grundlage.",
  "heute": "Die Thule-Gesellschaft existiert seit Mitte der 1920er Jahre nicht mehr. Ihr Name lebt in esoterischen und rechtsextremen Kreisen sowie in Verschwörungserzählungen fort. Die Geschichtswissenschaft behandelt sie als Teil der völkischen Bewegung in München nach 1918, deren Bedeutung für die frühe NSDAP real, aber begrenzt war.",
  "zeitleiste": [
   {
    "datum": "1912",
    "jahr": 1912,
    "text": "Gründung des antisemitischen Germanenordens, aus dem die Thule-Gesellschaft hervorgeht."
   },
   {
    "datum": "August bis November 1918",
    "jahr": 1918,
    "text": "Sebottendorf baut in München die Thule-Gesellschaft auf und kauft den „Münchener Beobachter“."
   },
   {
    "datum": "5. Januar 1919",
    "jahr": 1919,
    "text": "Das Thule-Mitglied Karl Harrer und Anton Drexler gründen die Deutsche Arbeiterpartei."
   },
   {
    "datum": "30. April 1919",
    "jahr": 1919,
    "text": "Rotarmisten erschießen im Luitpold-Gymnasium zehn Geiseln, darunter sieben Mitglieder der Gesellschaft."
   },
   {
    "datum": "August 1919",
    "jahr": 1919,
    "text": "Der „Münchener Beobachter“ erscheint als „Völkischer Beobachter“."
   },
   {
    "datum": "1920",
    "jahr": 1920,
    "text": "Die DAP wird zur NSDAP, Harrer scheidet aus; die Zeitung geht an die Partei über."
   },
   {
    "datum": "um 1925",
    "jahr": 1925,
    "text": "Die Thule-Gesellschaft löst sich auf."
   },
   {
    "datum": "1960",
    "jahr": 1960,
    "text": "„Le Matin des magiciens“ begründet die populäre Legende vom okkulten Nationalsozialismus."
   }
  ],
  "quellen": [
   "Deutsches Historisches Museum, LeMO: Thule-Gesellschaft",
   "Nicholas Goodrick-Clarke: The Occult Roots of Nazism, 1985",
   "Nicholas Goodrick-Clarke: Black Sun. Aryan Cults, Esoteric Nazism, and the Politics of Identity, 2002"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/thule-gesellschaft-0.jpg",
    "breite": 900,
    "hoehe": 763,
    "zeigt": "Das Hotel Vier Jahreszeiten in München, Foto um 1880 bis 1910; hier versammelte sich die Thule-Gesellschaft 1918/19 (Rijksmuseum Amsterdam)",
    "urheber": "Rijksmuseum",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Hotel_Vier_Jahreszeiten%2C_M%C3%BCnchen%2C_Duitsland%2C_RP-F-00-6240-2.jpg"
   }
  ],
  "seit": "2026-10-06"
 }
];

const DOSSIERS = [
 {
  "id": "caesar-attentat",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Die Iden des März",
  "untertitel": "Die Ermordung Gaius Julius Caesars, Rom 44 v. Chr.",
  "jahr": -44,
  "zeitraum": "15. März 44 v. Chr.",
  "ort": "Curia des Pompeius, Rom",
  "land": "Italien",
  "lat": 41.8955,
  "lon": 12.4768,
  "ortQuelle": "https://en.wikipedia.org/wiki/Curia_of_Pompey",
  "status": "aufgeklärt",
  "kurz": "Senatoren erstachen den Diktator auf Lebenszeit, um die Republik zu retten – und beschleunigten damit ihr Ende. Das bekannteste Attentat der Antike.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Gaius Julius Caesar hatte den Bürgerkrieg gegen Pompeius und dessen Anhänger gewonnen und regierte Rom als Diktator. Anfang 44 v. Chr. ließ er sich zum Diktator auf Lebenszeit ernennen – ein Bruch mit der republikanischen Regel, dass außerordentliche Vollmachten befristet sind. Der Senat überhäufte ihn mit Ehren, er bestimmte die Besetzung der Ämter für Jahre im Voraus und bereitete einen Feldzug gegen die Parther vor, der am 18. März beginnen sollte. Für viele Senatoren, auch für solche, die er nach dem Krieg begnadigt hatte, war damit die Herrschaft des Einzelnen offen ausgesprochen. Gerüchte, er strebe den Königstitel an, verschärften die Stimmung."
   },
   {
    "titel": "Die Tat",
    "text": "Am 15. März 44 v. Chr., den Iden des März, tagte der Senat in der Curia des Pompeius am Marsfeld, weil das alte Rathaus am Forum noch im Umbau war. Gaius Trebonius hielt den Konsul Marcus Antonius draußen in ein Gespräch verwickelt; Plutarch nennt in seiner Caesar-Biografie stattdessen Decimus Brutus. Als Caesar Platz genommen hatte, umringten ihn die Verschworenen unter dem Vorwand einer Bittschrift, dann griffen sie mit Dolchen an. Sueton zählt 23 Stichwunden, von denen nach dem Urteil eines Arztes nur eine tödlich gewesen sei. Caesar starb nach Plutarch am Sockel einer Pompeius-Statue. Die Senatoren flohen, die Attentäter zogen auf das Kapitol."
   },
   {
    "titel": "Täter und Motive",
    "text": "Sueton spricht von mehr als sechzig Mitverschworenen. An der Spitze standen Marcus Junius Brutus und Gaius Cassius Longinus, beide nach dem Bürgerkrieg von Caesar begnadigt und befördert, sowie Decimus Junius Brutus, einer seiner engsten Offiziere. Sie verstanden sich als Befreier, die einen Tyrannen beseitigten; Brutus berief sich auf seinen Vorfahren, der der Überlieferung nach den letzten König vertrieben hatte. Neben der Sorge um die Republik spielten gekränkter Ehrgeiz und der Verlust senatorischer Macht eine Rolle. Ein Programm für die Zeit danach hatten die Verschworenen offenbar nicht: Sie rechneten damit, dass die alte Ordnung von selbst zurückkehren würde."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Einer Aufklärung bedurfte es nicht, die Täter waren bekannt. Am 17. März beschloss der Senat einen Kompromiss: Caesars Verfügungen blieben in Kraft, den Mördern wurde Straffreiheit gewährt. Die Stimmung kippte, als Caesars Testament bekannt wurde, das jedem Bürger Geld und dem Volk seine Gärten vermachte, und als Antonius bei der Leichenfeier die Menge aufwühlte, die den Leichnam daraufhin auf dem Forum verbrannte. Brutus und Cassius verließen Italien. 43 v. Chr. ließ Caesars Adoptivsohn Octavian die Mörder durch ein Sondergesetz, die Lex Pedia, in Abwesenheit verurteilen. Das eigentliche Urteil fiel auf dem Schlachtfeld."
   },
   {
    "titel": "Die Folgen",
    "text": "Octavian, Antonius und Lepidus schlossen sich 43 v. Chr. zum Zweiten Triumvirat zusammen und ließen ihre Gegner proskribieren, darunter Cicero. Im Herbst 42 v. Chr. unterlagen Cassius und Brutus bei Philippi in Makedonien und nahmen sich das Leben. Nach Sueton überlebte kaum einer der Mörder Caesar um mehr als drei Jahre, und kaum einer starb eines natürlichen Todes – die antike Überlieferung deutete das als Vergeltung. Statt die Republik zu retten, öffnete das Attentat den Weg zu einem neuen Bürgerkrieg, aus dem Octavian als Augustus und erster Kaiser hervorging."
   }
  ],
  "legende": "„Et tu, Brute?“ ist eine Erfindung der Bühne; der Satz wurde durch Shakespeares „Julius Caesar“ (1599) berühmt. Sueton berichtet, Caesar habe nur beim ersten Stich aufgestöhnt, erwähnt aber, manche überlieferten ein griechisches „Auch du, Kind?“ – ohne sich dem anzuschließen. Die Warnung des Sehers Spurinna vor den Iden des März und der Unglückstraum seiner Frau Calpurnia stehen bei Sueton und Plutarch, sind aber im Nachhinein ausgeschmückte Vorzeichen, wie sie antike Biografien liebten. Das Gerücht, Brutus sei Caesars leiblicher Sohn, kursierte schon in der Antike und ist nicht belegbar. Gesichert sind Datum, Ort, die Anführer und der Ablauf in groben Zügen.",
  "bedeutung": "Das Attentat zeigt, dass die Beseitigung eines Herrschers eine Ordnung nicht wiederherstellt, wenn die Verhältnisse, die ihn hervorbrachten, fortbestehen. Die Iden des März wurden zum Urbild des Tyrannenmords und zur ständigen Referenz späterer Attentäter: John Wilkes Booth rief 1865 „Sic semper tyrannis“, und Brutus selbst ließ Münzen mit Dolchen und der Aufschrift EID MAR prägen. In Literatur, politischer Theorie und Sprache ist das Datum bis heute ein Synonym für Verrat und Verschwörung.",
  "zeitleiste": [
   {
    "datum": "Februar 44 v. Chr.",
    "jahr": -44,
    "text": "Caesar wird Diktator auf Lebenszeit."
   },
   {
    "datum": "15. März 44 v. Chr.",
    "jahr": -44,
    "text": "Ermordung Caesars in der Curia des Pompeius."
   },
   {
    "datum": "17. März 44 v. Chr.",
    "jahr": -44,
    "text": "Der Senat gewährt den Attentätern Straffreiheit und bestätigt Caesars Verfügungen."
   },
   {
    "datum": "März 44 v. Chr.",
    "jahr": -44,
    "text": "Leichenfeier auf dem Forum; die Menge verbrennt den Leichnam, die Stimmung kippt gegen die Mörder."
   },
   {
    "datum": "43 v. Chr.",
    "jahr": -43,
    "text": "Lex Pedia verurteilt die Mörder; Bildung des Zweiten Triumvirats."
   },
   {
    "datum": "Oktober 42 v. Chr.",
    "jahr": -42,
    "text": "Niederlage bei Philippi; Cassius und Brutus nehmen sich das Leben."
   }
  ],
  "quellen": [
   "Sueton: Leben der Caesaren, Divus Iulius 80–89",
   "Plutarch: Caesar 62–69; Brutus",
   "Barry Strauss: The Death of Caesar, 2015",
   "Martin Jehne: Caesar, 4. Aufl. 2008",
   "Encyclopaedia Britannica: Julius Caesar"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/caesar-attentat-0.jpg",
    "breite": 900,
    "hoehe": 419,
    "zeigt": "Denar des Brutus, um 42 v. Chr.: Freiheitsmütze zwischen zwei Dolchen, Aufschrift EID MAR",
    "urheber": "Permission =",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Brutus_Eid_Mar.jpg"
   },
   {
    "datei": "bilder/dark/caesar-attentat-1.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Reste der Curia des Pompeius im heutigen Largo di Torre Argentina, Rom",
    "urheber": "Sotamies",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Curia_of_Pompey.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "thomas-becket",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Der Mord an Thomas Becket",
  "untertitel": "Ein Erzbischof, ein König und vier Ritter – Canterbury 1170",
  "jahr": 1170,
  "zeitraum": "29. Dezember 1170",
  "ort": "Kathedrale von Canterbury",
  "land": "Großbritannien",
  "lat": 51.2798,
  "lon": 1.0828,
  "ortQuelle": "https://en.wikipedia.org/wiki/Canterbury_Cathedral",
  "status": "aufgeklärt",
  "kurz": "Vier Ritter Heinrichs II. töteten den Erzbischof von Canterbury in seiner eigenen Kathedrale. Aus dem Opfer wurde binnen drei Jahren ein Heiliger, aus dem König ein Büßer.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Thomas Becket, um 1120 in London als Sohn eines Kaufmanns geboren, stieg im Dienst des Erzbischofs Theobald auf und wurde 1155 Kanzler König Heinrichs II., dessen enger Vertrauter er war. 1162 setzte der König ihn als Erzbischof von Canterbury durch, in der Erwartung, einen loyalen Mann an der Spitze der englischen Kirche zu haben. Becket verteidigte jedoch fortan die Rechte der Kirche gegen die Krone. Der Streit entzündete sich vor allem an der Frage, ob straffällige Geistliche vor königliche Gerichte gestellt werden durften. Becket verweigerte den Konstitutionen von Clarendon (1164) die Zustimmung und floh nach Frankreich, wo er sechs Jahre im Exil blieb."
   },
   {
    "titel": "Die Tat",
    "text": "Nach einer brüchigen Versöhnung kehrte Becket Anfang Dezember 1170 nach England zurück. Zuvor hatte er die Bischöfe gebannt, die im Juni den Sohn des Königs gekrönt hatten, ein Vorrecht Canterburys. Heinrich, der Weihnachten in der Normandie verbrachte, reagierte mit einem Wutausbruch. Daraufhin brachen vier Ritter seines Hofes auf: Reginald FitzUrse, Hugh de Morville, William de Tracy und Richard le Breton. Am Nachmittag des 29. Dezember 1170 stellten sie den Erzbischof in der Kathedrale zur Rede. Als er sich weigerte, die Bannsprüche aufzuheben und mitzukommen, töteten sie ihn mit Schwerthieben im nördlichen Querschiff. Der Mönch Edward Grim, der ihn zu schützen versuchte, wurde am Arm verletzt und schrieb später einen Augenzeugenbericht."
   },
   {
    "titel": "Täter und Motive",
    "text": "Die vier Ritter handelten nach eigener Darstellung im Sinne des Königs. Ob Heinrich einen Mord gewollt hatte, ist nicht belegt; er selbst bestritt es. Seine genauen Worte sind nicht gesichert, sie sind nur in unterschiedlichen, teils späteren Fassungen überliefert. Nach Edward Grim klagte er, er habe an seinem Hof nur elende Drohnen und Verräter genährt, die zuließen, dass ein niedrig geborener Kleriker ihren Herrn verhöhne. Für die Ritter, die um die Gunst des Königs wetteiferten, mochte das wie ein Auftrag klingen. Hinzu kamen persönliche Feindschaften gegen Becket, der Besitz der Kirche von Canterbury zurückforderte, den einige Barone an sich gebracht hatten."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Einen weltlichen Prozess gab es nicht. Mord an einem Geistlichen fiel nach damaligem Verständnis unter die Gerichtsbarkeit der Kirche, und die Ritter waren Männer des Königs. Papst Alexander III. exkommunizierte sie; der Überlieferung nach mussten sie als Buße ins Heilige Land ziehen, wo sie gestorben sein sollen, doch ihre späteren Lebenswege sind nur lückenhaft belegt. Heinrich II. schloss 1172 mit päpstlichen Gesandten den Kompromiss von Avranches, beteuerte seine Unschuld am Mord und gab umstrittene Ansprüche gegenüber der Kirche auf. Am 12. Juli 1174 tat er in Canterbury öffentlich Buße und ließ sich von den Mönchen geißeln."
   },
   {
    "titel": "Die Folgen",
    "text": "Schon kurz nach dem Mord wurden Wunder am Grab gemeldet, und Alexander III. sprach Becket am 21. Februar 1173 heilig. Canterbury wurde einer der wichtigsten Wallfahrtsorte Europas; Geoffrey Chaucers „Canterbury Tales“ handeln von einer solchen Pilgerfahrt. 1220 wurden die Gebeine in einen prachtvollen Schrein überführt. Im Streit um das Verhältnis von Krone und Kirche gewann die Kirche durch das Martyrium Spielraum zurück. 1538 ließ Heinrich VIII., der mit Rom gebrochen hatte, den Schrein zerstören und das Andenken an Becket als Verräter an der Krone tilgen."
   }
  ],
  "legende": "Der berühmte Satz „Will no one rid me of this turbulent priest?“ (Wird mich niemand von diesem lästigen Priester befreien?) ist eine spätere, zugespitzte Fassung; in den zeitgenössischen Berichten steht er so nicht. Gesichert ist durch mehrere Biografien, darunter die von Augenzeugen wie Edward Grim und William FitzStephen, der Ablauf des Mordes, die Namen der Ritter und der Ort im nördlichen Querschiff, das bis heute „The Martyrdom“ heißt. Dass die Ritter alle binnen weniger Jahre im Heiligen Land starben, ist fromme Überlieferung; ihre späteren Lebenswege sind nur bruchstückhaft belegt. Unsicher ist auch, ob Becket den Tod bewusst suchte, wie manche Historiker vermuten.",
  "bedeutung": "Der Mord machte Becket zu einem der meistverehrten Heiligen des Mittelalters und zwang einen der mächtigsten Könige Europas zu öffentlicher Buße. Er wurde zum Sinnbild des Konflikts zwischen weltlicher und geistlicher Gewalt, den England erst mit Heinrich VIII. zugunsten der Krone entschied. Der Fall zeigt auch, wie das Wort eines Herrschers von Gefolgsleuten als Befehl verstanden werden kann – eine Konstellation, für die der „turbulent priest“ bis heute sprichwörtlich steht.",
  "zeitleiste": [
   {
    "datum": "1162",
    "jahr": 1162,
    "text": "Thomas Becket wird Erzbischof von Canterbury."
   },
   {
    "datum": "1164",
    "jahr": 1164,
    "text": "Streit um die Konstitutionen von Clarendon; Becket flieht nach Frankreich."
   },
   {
    "datum": "Dezember 1170",
    "jahr": 1170,
    "text": "Rückkehr Beckets nach England."
   },
   {
    "datum": "29. Dezember 1170",
    "jahr": 1170,
    "text": "Vier Ritter töten Becket in der Kathedrale von Canterbury."
   },
   {
    "datum": "21. Februar 1173",
    "jahr": 1173,
    "text": "Papst Alexander III. spricht Becket heilig."
   },
   {
    "datum": "12. Juli 1174",
    "jahr": 1174,
    "text": "Heinrich II. tut am Grab Beckets öffentlich Buße."
   },
   {
    "datum": "1538",
    "jahr": 1538,
    "text": "Heinrich VIII. lässt den Schrein zerstören."
   }
  ],
  "quellen": [
   "Frank Barlow: Thomas Becket, 1986",
   "John Guy: Thomas Becket. Warrior, Priest, Rebel, Victim, 2012",
   "Edward Grim: Vita S. Thomae (zeitgenössischer Augenzeugenbericht)",
   "British Museum: Thomas Becket. Murder and the Making of a Saint, Ausstellung 2021",
   "Encyclopaedia Britannica: Saint Thomas Becket"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/thomas-becket-0.jpg",
    "breite": 828,
    "hoehe": 1100,
    "zeigt": "„The Martyrdom“, der Ort des Mordes im nördlichen Querschiff der Kathedrale von Canterbury, heute",
    "urheber": "Andy Li",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Martyrdom%2C_Canterbury_Cathedral_2024-12-29.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "wilhelm-von-oranien",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Der Mord an Wilhelm von Oranien",
  "untertitel": "Ein Kopfgeld, ein Pistolenschuss und der Vater der Niederlande – Delft 1584",
  "jahr": 1584,
  "zeitraum": "10. Juli 1584",
  "ort": "Prinsenhof, Delft",
  "land": "Niederlande",
  "lat": 52.0124,
  "lon": 4.3578,
  "ortQuelle": "https://en.wikipedia.org/wiki/Prinsenhof_(Delft)",
  "status": "aufgeklärt",
  "kurz": "Philipp II. setzte ein Kopfgeld auf den Anführer des niederländischen Aufstands aus, ein junger Katholik kassierte es posthum. Der Mord gilt als erstes Pistolenattentat auf ein Staatsoberhaupt.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Wilhelm von Oranien, 1533 in Dillenburg geboren, war einer der reichsten Adligen der Niederlande und Statthalter König Philipps II. von Spanien in Holland, Seeland und Utrecht. Gegen die harte Ketzerpolitik und die zentralistische Herrschaft Madrids wurde er zum Anführer des Aufstands, der 1568 in den Achtzigjährigen Krieg mündete. 1580 erklärte Philipp ihn in einem Bannedikt für vogelfrei und versprach jedem, der ihn tot oder lebendig ausliefere, 25.000 Goldkronen und den Adelsstand. Wilhelm antwortete mit einer öffentlichen Rechtfertigungsschrift, der „Apologie“. 1581 sagten sich die aufständischen Provinzen von Philipp los. Ein erster Mordversuch in Antwerpen 1582 verletzte Wilhelm schwer im Gesicht."
   },
   {
    "titel": "Die Tat",
    "text": "Am 10. Juli 1584 verließ Wilhelm nach dem Mittagessen den Speisesaal seines Quartiers im Prinsenhof in Delft, einem ehemaligen Kloster. Am Fuß der Treppe trat ihm Balthasar Gérard entgegen und schoss mit einer Pistole aus nächster Nähe auf ihn. Wilhelm starb kurz darauf. Gérard floh durch einen Hinterausgang, wurde aber auf dem Weg zum Stadtwall gefasst. Die Einschusslöcher in der Wand sind im heutigen Museum Prinsenhof noch zu sehen. Der Täter hatte sich seit Monaten als verfolgter Protestant ausgegeben und war so an den Hof gelangt; die Pistolen soll er von einem Geldgeschenk gekauft haben, das Wilhelm ihm selbst hatte zukommen lassen."
   },
   {
    "titel": "Täter und Motive",
    "text": "Balthasar Gérard stammte aus Vuillafans in der Franche-Comté, die damals zu den Besitzungen der spanischen Habsburger gehörte, und war um die 27 Jahre alt. Er war ein überzeugter Katholik, der Wilhelm als Rebellen gegen seinen rechtmäßigen König und als Feind des Glaubens ansah. Nach seinen Aussagen trug er sich schon vor dem Bannedikt mit dem Plan; das ausgesetzte Kopfgeld bestärkte ihn. Vor der Tat hatte er Kontakt zu Vertrauten des spanischen Statthalters Alessandro Farnese aufgenommen, die ihn ermutigten. Ein eigener Auftrag der spanischen Krone ist nicht belegt, das öffentlich ausgeschriebene Kopfgeld wirkte jedoch als Aufforderung."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Gérard gestand die Tat und blieb bei seiner Rechtfertigung. Das Gericht in Delft verurteilte ihn zum Tod, und am 14. Juli 1584 wurde er nach Folter auf dem Marktplatz öffentlich hingerichtet, mit einer selbst für damalige Verhältnisse ungewöhnlich grausamen Strafe. Philipp II. löste sein Versprechen gegenüber der Familie ein: 1589 erhob er sie in den Adelsstand, und statt des schwer aufzubringenden Geldbetrags übertrug er ihr 1590 drei Herrschaften in der Franche-Comté, die zuvor Wilhelm von Oranien gehört hatten. Die Urkunde darüber ist erhalten und liegt heute in der Königlichen Bibliothek in Den Haag."
   },
   {
    "titel": "Die Folgen",
    "text": "Der Aufstand brach nicht zusammen, geriet aber in eine schwere Krise. Alessandro Farnese eroberte bis 1585 Brügge, Gent und Antwerpen; die Generalstaaten suchten Hilfe bei Frankreich und England. Wilhelms Sohn Moritz von Oranien übernahm die militärische Führung und stabilisierte die Front. Aus den nördlichen Provinzen ging die Republik der Vereinigten Niederlande hervor. Wilhelm wurde in der Nieuwe Kerk in Delft beigesetzt, die bis heute Grablege des Hauses Oranien ist. Als „Vater des Vaterlandes“ ist er eine Gründerfigur der Niederlande; das Lied „Wilhelmus“, das von ihm handelt, ist die Nationalhymne."
   }
  ],
  "legende": "Der Mord wird oft als erstes Attentat mit einer Handfeuerwaffe auf ein Staatsoberhaupt bezeichnet, etwa im Titel des Buchs von Lisa Jardine. Diese Zuschreibung gilt als gängig, ist aber eine Frage der Definition: Wilhelm war Statthalter und Anführer des Aufstands, kein gekrönter Herrscher, und schon 1570 war der schottische Regent James Stewart, Earl of Moray, in Linlithgow aus einem Fenster mit einer Feuerwaffe erschossen worden. Wilhelms angebliche letzte Worte, Gott möge sich seiner Seele und des armen Volkes erbarmen, stehen in zeitgenössischen Berichten, ihre Echtheit ist aber umstritten. Gesichert sind Täter, Ort, Datum und die Belohnung der Familie durch Philipp II.",
  "bedeutung": "Der Mord zeigt, wie ein öffentlich ausgeschriebenes Kopfgeld auf einen politischen Gegner zur Tat führen konnte, und die neue Gefahr durch kleine, verdeckt tragbare Feuerwaffen, gegen die herkömmlicher Schutz wenig nützte. Für die junge Republik wurde Wilhelm zum Märtyrer und zur Identifikationsfigur. Sein Ende prägte die Erinnerung an den Aufstand gegen Spanien und machte das Haus Oranien zur politisch tragenden Familie der Niederlande bis heute.",
  "zeitleiste": [
   {
    "datum": "1568",
    "jahr": 1568,
    "text": "Beginn des Aufstands der Niederlande unter Führung Wilhelms."
   },
   {
    "datum": "1580",
    "jahr": 1580,
    "text": "Philipp II. erklärt Wilhelm in einem Bannedikt für vogelfrei und setzt ein Kopfgeld aus."
   },
   {
    "datum": "1581",
    "jahr": 1581,
    "text": "Die aufständischen Provinzen sagen sich von Philipp II. los."
   },
   {
    "datum": "18. März 1582",
    "jahr": 1582,
    "text": "Wilhelm überlebt einen Mordanschlag in Antwerpen schwer verletzt."
   },
   {
    "datum": "10. Juli 1584",
    "jahr": 1584,
    "text": "Balthasar Gérard erschießt Wilhelm im Prinsenhof in Delft."
   },
   {
    "datum": "14. Juli 1584",
    "jahr": 1584,
    "text": "Hinrichtung Gérards in Delft."
   },
   {
    "datum": "1589/1590",
    "jahr": 1589,
    "text": "Philipp II. adelt die Familie Gérards und überträgt ihr drei Herrschaften."
   }
  ],
  "quellen": [
   "Lisa Jardine: The Awful End of Prince William the Silent. The First Assassination of a Head of State with a Handgun, 2005",
   "K. W. Swart: William of Orange and the Revolt of the Netherlands, 1572–84, 2003",
   "Koninklijke Bibliotheek (Den Haag): Het loon van prinsendoder Balthasar Gerards, 2019",
   "Encyclopaedia Britannica: William I, prince of Orange"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/wilhelm-von-oranien-0.jpg",
    "breite": 900,
    "hoehe": 561,
    "zeigt": "Belohnungsurkunde Philipps II. für die Familie Balthasar Gérards, 1590, mit dem neuen Familienwappen",
    "urheber": "Alonso de Laloo, secretary of Philip II of Spain",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Beloningsbrief_van_koning_Filips_II_van_Spanje_aan_Balthasar_Gerards%2C_1590.jpg"
   },
   {
    "datei": "bilder/dark/wilhelm-von-oranien-1.jpg",
    "breite": 825,
    "hoehe": 1100,
    "zeigt": "Einschusslöcher in der Wand des Prinsenhofs in Delft",
    "urheber": "Juvarra",
    "lizenz": "CC BY 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:KogelgatenPrinsenhof.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "heinrich-iv-ravaillac",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Der Mord an Heinrich IV.",
  "untertitel": "Ravaillac und der König in der Rue de la Ferronnerie – Paris 1610",
  "jahr": 1610,
  "zeitraum": "14. Mai 1610",
  "ort": "Rue de la Ferronnerie, Paris",
  "land": "Frankreich",
  "lat": 48.8606,
  "lon": 2.3476,
  "ortQuelle": "https://fr.wikipedia.org/wiki/Rue_de_la_Ferronnerie",
  "status": "aufgeklärt",
  "kurz": "Ein katholischer Eiferer erstach den König, der die Religionskriege beendet hatte, als dessen Kutsche im Gedränge feststeckte. Die Frage nach Hintermännern wurde nie ganz geklärt.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Heinrich von Bourbon, König von Navarra, war als Protestant 1589 Erbe der französischen Krone geworden. Erst nach seinem Übertritt zum Katholizismus 1593 konnte er Paris für sich gewinnen. Mit dem Edikt von Nantes 1598 gewährte er den Hugenotten begrenzte Glaubensfreiheit und beendete die Religionskriege. Für radikale Katholiken blieb er ein Ketzer und Heuchler, für radikale Protestanten ein Abtrünniger. Er überlebte eine ganze Reihe von Mordanschlägen, darunter den Messerangriff des Studenten Jean Châtel 1594, der ihn an der Lippe verletzte. Im Frühjahr 1610 rüstete Heinrich zu einem Feldzug im Streit um das Erbe von Jülich-Kleve, der ihn gegen die Habsburger führen sollte."
   },
   {
    "titel": "Die Tat",
    "text": "Am 13. Mai 1610 ließ Heinrich seine Frau Maria von Medici in Saint-Denis krönen, damit sie während des Feldzugs als Regentin anerkannt wäre. Am Nachmittag des folgenden Tages fuhr er in offener Kutsche durch Paris, um seinen Minister Sully zu besuchen. In der engen Rue de la Ferronnerie blockierten Fuhrwerke die Durchfahrt, die Kutsche musste halten, und die meisten Diener waren zu Fuß vorausgegangen. François Ravaillac stieg auf ein Rad und stach mit einem Messer auf den König ein. Heinrich starb wenig später. Ravaillac versuchte nicht zu fliehen und wurde sofort festgenommen. Eine Gedenktafel in der Straße erinnert an die Stelle."
   },
   {
    "titel": "Täter und Motive",
    "text": "François Ravaillac, um 1578 in Angoulême geboren, hatte sich als Schreiber und Lehrer durchgeschlagen. Er hatte versucht, in den Orden der Feuillanten einzutreten, war aber nach kurzer Zeit wieder entlassen worden, auch weil er Visionen zu haben glaubte. Er war überzeugt, der König weigere sich, die Hugenotten zur katholischen Kirche zurückzuführen, und plane einen Krieg gegen den Papst. Mehrfach war er nach Paris gereist, um Heinrich persönlich zu warnen, und war nicht vorgelassen worden. Nach eigener Aussage handelte er allein und aus Gewissensgründen; Einflüsterungen von außen bestritt er bis zuletzt."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Das Pariser Parlament führte den Prozess. Ravaillac wurde wiederholt unter Folter verhört, nannte aber keine Mittäter. Am 27. Mai 1610 verurteilte ihn das Gericht als Königsmörder; das Urteil ist in den französischen Nationalarchiven erhalten. Noch am selben Tag wurde er auf der Place de Grève öffentlich hingerichtet, mit der für Königsmord vorgesehenen besonders grausamen Strafe. Sein Elternhaus wurde abgerissen, seine Eltern verbannt, der Familienname durfte nicht mehr getragen werden. Später beschuldigte eine Frau namens Jacqueline d'Escoman den Herzog von Épernon und die frühere Mätresse des Königs, Henriette d'Entragues, der Mitwisserschaft; beweisen ließ sich das nicht, und sie selbst wurde verurteilt."
   },
   {
    "titel": "Die Folgen",
    "text": "Heinrichs achtjähriger Sohn bestieg als Ludwig XIII. den Thron, Maria von Medici übernahm die Regentschaft. Der Feldzug gegen die Habsburger wurde abgesagt, die Außenpolitik wandte sich vorübergehend Spanien zu. Der Mord löste eine heftige Kampagne gegen die Jesuiten aus, denen Kritiker vorwarfen, mit der Lehre vom erlaubten Tyrannenmord den Boden bereitet zu haben; das Parlament ließ eine Schrift des spanischen Jesuiten Juan de Mariana verbrennen. Heinrich selbst wurde in der Erinnerung zum „guten König Heinrich“, eine Verklärung, die in der Zeit der Restauration noch zunahm."
   }
  ],
  "legende": "Seit 1610 gibt es Spekulationen über Hintermänner: die Jesuiten, Spanien, den Herzog von Épernon, der in der Kutsche saß, Henriette d'Entragues oder sogar Maria von Medici. Belegt ist keine dieser Thesen. Der Historiker Roland Mousnier kam in seiner grundlegenden Studie zu dem Schluss, dass Ravaillac allein handelte, auch wenn er von der aufgeheizten Stimmung und der Literatur zum Tyrannenmord beeinflusst war. Die Debatte bleibt offen, weil das Verfahren unter politischem Druck stand und Spuren nicht konsequent verfolgt wurden. Das berühmte Versprechen des Königs, jeder Bauer solle sonntags ein Huhn im Topf haben, ist erst Jahrzehnte nach seinem Tod überliefert.",
  "bedeutung": "Der Mord beendete die Herrschaft des Königs, der Frankreich nach Jahrzehnten der Religionskriege befriedet hatte, und warf das Land in eine unsichere Regentschaft. Er verschärfte die Debatte über die Lehre vom Tyrannenmord, die Theologen beider Konfessionen im 16. Jahrhundert vertreten hatten, und stärkte die Vorstellung vom unantastbaren, von Gott eingesetzten König, die das absolutistische Frankreich prägte.",
  "zeitleiste": [
   {
    "datum": "1589",
    "jahr": 1589,
    "text": "Heinrich von Navarra wird König von Frankreich."
   },
   {
    "datum": "1593",
    "jahr": 1593,
    "text": "Übertritt Heinrichs zum Katholizismus."
   },
   {
    "datum": "27. Dezember 1594",
    "jahr": 1594,
    "text": "Jean Châtel verletzt den König bei einem Messerangriff."
   },
   {
    "datum": "13. April 1598",
    "jahr": 1598,
    "text": "Das Edikt von Nantes gewährt den Hugenotten Rechte."
   },
   {
    "datum": "13. Mai 1610",
    "jahr": 1610,
    "text": "Krönung Marias von Medici in Saint-Denis."
   },
   {
    "datum": "14. Mai 1610",
    "jahr": 1610,
    "text": "Ravaillac ersticht Heinrich IV. in der Rue de la Ferronnerie."
   },
   {
    "datum": "27. Mai 1610",
    "jahr": 1610,
    "text": "Verurteilung und Hinrichtung Ravaillacs auf der Place de Grève."
   }
  ],
  "quellen": [
   "Roland Mousnier: L'Assassinat d'Henri IV, 14 mai 1610, 1964",
   "Jean-Christian Petitfils: L'Assassinat d'Henri IV. Mystères d'un crime, 2009",
   "Archives nationales: Arrêt du parlement de Paris condamnant à mort François Ravaillac, 1610",
   "Encyclopaedia Britannica: Henry IV, king of France"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/heinrich-iv-ravaillac-0.jpg",
    "breite": 856,
    "hoehe": 1100,
    "zeigt": "Urteil des Pariser Parlaments gegen François Ravaillac, 1610 (Archives nationales)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Arr%C3%AAt_du_parlement_de_Paris_condamnant_%C3%A0_mort_Fran%C3%A7ois_Ravaillac_Page_117_-_Archives_Nationales_-_AD-148.jpg"
   },
   {
    "datei": "bilder/dark/heinrich-iv-ravaillac-1.jpg",
    "breite": 677,
    "hoehe": 1100,
    "zeigt": "Heinrich IV. in schwarzer Kleidung, Gemälde von Frans Pourbus dem Jüngeren, um 1610",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Frans_Pourbus_%28II%29_-_Henry_IV%2C_King_of_France_in_Black_Dress_-_WGA18234.jpg"
   },
   {
    "datei": "bilder/dark/heinrich-iv-ravaillac-2.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Gedenktafel an der Stelle des Mordes in der Rue de la Ferronnerie",
    "urheber": "Erwmat",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Plaque_assassinat_Henri_IV_par_Ravaillac_rue_de_la_Ferronnerie_%C3%A0_Paris.JPG"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "lincoln-attentat",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Das Attentat auf Abraham Lincoln",
  "untertitel": "Ford's Theatre, die Verschwörung um John Wilkes Booth und der Prozess – Washington 1865",
  "jahr": 1865,
  "zeitraum": "14. April bis 7. Juli 1865",
  "ort": "Ford's Theatre, Washington, D.C.",
  "land": "USA",
  "lat": 38.8967,
  "lon": -77.0257,
  "ortQuelle": "https://en.wikipedia.org/wiki/Ford%27s_Theatre",
  "status": "aufgeklärt",
  "kurz": "Fünf Tage nach Lees Kapitulation erschoss ein konföderierter Sympathisant den Präsidenten im Theater. Lincoln war der erste ermordete US-Präsident – und das Ziel einer größeren Verschwörung.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Abraham Lincoln, 1809 in Kentucky geboren, war seit 1861 Präsident der Vereinigten Staaten und hatte die Union durch den Bürgerkrieg geführt. Mit der Emanzipationsproklamation von 1863 hatte er die Befreiung der Versklavten in den abtrünnigen Staaten zum Kriegsziel gemacht und den 13. Verfassungszusatz zur Abschaffung der Sklaverei vorangetrieben. 1864 war er wiedergewählt worden. Am 9. April 1865 kapitulierte General Robert E. Lee bei Appomattox. Zwei Tage später sprach Lincoln sich in einer Rede erstmals öffentlich dafür aus, gebildeten schwarzen Männern und schwarzen Veteranen das Wahlrecht zu geben."
   },
   {
    "titel": "Die Tat",
    "text": "Am Abend des 14. April 1865, Karfreitag, besuchte Lincoln mit seiner Frau Mary und einem jungen Paar, Major Henry Rathbone und Clara Harris, die Komödie „Our American Cousin“ in Ford's Theatre. Gegen 22.15 Uhr betrat der bekannte Schauspieler John Wilkes Booth die Präsidentenloge und schoss Lincoln mit einer Derringer-Pistole von hinten in den Kopf. Er verletzte Rathbone mit einem Messer, sprang auf die Bühne und rief „Sic semper tyrannis“, den Wahlspruch Virginias. Auf der Flucht brach er sich das linke Bein; ob beim Sprung oder bei einem späteren Sturz mit dem Pferd, ist strittig. Lincoln wurde in das Petersen House gegenüber getragen und starb am 15. April um 7.22 Uhr. In derselben Nacht drang Lewis Powell in das Haus von Außenminister William Seward ein und verletzte ihn und mehrere Hausbewohner schwer; Seward überlebte."
   },
   {
    "titel": "Täter und Motive",
    "text": "Booth, Sohn einer berühmten Schauspielerfamilie aus Maryland, war ein glühender Anhänger der Konföderation und der Sklaverei. Seit 1864 plante er mit einem Kreis von Helfern, Lincoln zu entführen und gegen konföderierte Kriegsgefangene auszutauschen; ein Versuch im März 1865 scheiterte. Nach Lees Kapitulation und Lincolns Rede zum Wahlrecht entschied er sich für Mord. Der Plan sah vor, am selben Abend auch Vizepräsident Andrew Johnson und Außenminister Seward zu töten, um die Regierung zu lähmen. George Atzerodt, der Johnson ermorden sollte, verlor den Mut. Booth floh mit David Herold nach Maryland, wo der Arzt Samuel Mudd sein Bein versorgte, und weiter nach Virginia."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Kriegsminister Edwin Stanton leitete eine der größten Fahndungen der amerikanischen Geschichte und setzte hohe Belohnungen aus, für Booth allein 50.000 Dollar. Am 26. April 1865 stellten Soldaten Booth und Herold in einer Tabakscheune auf einer Farm in Virginia. Herold ergab sich, Booth wurde erschossen. Acht Beschuldigte wurden nicht vor ein ziviles Gericht, sondern vor eine Militärkommission gestellt, was schon damals umstritten war. Am 30. Juni 1865 wurden alle schuldig gesprochen. Mary Surratt, in deren Pension sich die Verschwörer getroffen hatten, Lewis Powell, David Herold und George Atzerodt wurden am 7. Juli 1865 gehängt. Samuel Mudd, Samuel Arnold und Michael O'Laughlen erhielten lebenslange Haft, Edman Spangler sechs Jahre."
   },
   {
    "titel": "Die Folgen",
    "text": "Andrew Johnson, ein Demokrat aus Tennessee, wurde Präsident und verfolgte eine nachsichtige Politik gegenüber dem Süden, die ihn in einen erbitterten Konflikt mit dem Kongress führte und 1868 in ein Amtsenthebungsverfahren mündete. Wie Lincoln selbst den Wiederaufbau gestaltet hätte, bleibt offen. O'Laughlen starb 1867 in Haft; Johnson begnadigte Mudd, Arnold und Spangler 1869. John Surratt, der Sohn Mary Surratts, war nach Europa geflohen; ein Zivilprozess gegen ihn endete 1867 ohne Urteil, weil sich die Geschworenen nicht einigen konnten. Lincolns Leichnam wurde in einem Trauerzug per Eisenbahn nach Springfield in Illinois gebracht."
   }
  ],
  "legende": "Hartnäckig hält sich die Behauptung, Booth sei entkommen und habe unter falschem Namen weitergelebt; die Leiche wurde jedoch 1865 von mehreren Personen identifiziert, und die These ist widerlegt. Ebenso haltlos ist die in den 1930er-Jahren verbreitete Behauptung, Kriegsminister Stanton habe den Mord eingefädelt. Ob die konföderierte Regierung oder ihr Geheimdienst von Booths Plänen wusste, ist unter Historikern umstritten, eine Beteiligung am Mord ist nicht belegt. Dass die Redewendung „his name is mud“ auf Samuel Mudd zurückgeht, ist eine Volksetymologie, denn sie ist älter. Ob Mudd eingeweiht war, ist strittig; dass er Booth kannte, ist gesichert.",
  "bedeutung": "Lincoln war der erste Präsident der Vereinigten Staaten, der einem Attentat zum Opfer fiel. Sein Tod machte ihn zur Symbolfigur der Union und der Befreiung und belastete den Wiederaufbau des Südens schwer. Die Aburteilung von Zivilisten durch ein Militärgericht blieb ein Streitpunkt; 1866 entschied der Oberste Gerichtshof im Fall Ex parte Milligan, dass Militärkommissionen nicht über Zivilisten urteilen dürfen, wo zivile Gerichte arbeiten. Der Personenschutz des Präsidenten blieb dennoch lange lückenhaft und wurde erst nach dem Mord an McKinley 1901 dem Secret Service übertragen.",
  "zeitleiste": [
   {
    "datum": "9. April 1865",
    "jahr": 1865,
    "text": "Lee kapituliert bei Appomattox."
   },
   {
    "datum": "14. April 1865",
    "jahr": 1865,
    "text": "Booth schießt Lincoln in Ford's Theatre nieder; Powell greift Seward an."
   },
   {
    "datum": "15. April 1865",
    "jahr": 1865,
    "text": "Lincoln stirbt im Petersen House; Andrew Johnson wird Präsident."
   },
   {
    "datum": "26. April 1865",
    "jahr": 1865,
    "text": "Booth wird auf einer Farm in Virginia gestellt und erschossen."
   },
   {
    "datum": "Mai 1865",
    "jahr": 1865,
    "text": "Beginn des Verfahrens gegen acht Beschuldigte vor einer Militärkommission."
   },
   {
    "datum": "7. Juli 1865",
    "jahr": 1865,
    "text": "Mary Surratt, Powell, Herold und Atzerodt werden gehängt."
   },
   {
    "datum": "1869",
    "jahr": 1869,
    "text": "Präsident Johnson begnadigt Mudd, Arnold und Spangler."
   }
  ],
  "quellen": [
   "Michael W. Kauffman: American Brutus. John Wilkes Booth and the Lincoln Conspiracies, 2004",
   "Edward Steers Jr.: Blood on the Moon. The Assassination of Abraham Lincoln, 2001",
   "National Park Service: Ford's Theatre National Historic Site",
   "Encyclopaedia Britannica: Assassination of Abraham Lincoln"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/lincoln-attentat-0.jpg",
    "breite": 590,
    "hoehe": 1100,
    "zeigt": "Fahndungsplakat des Kriegsministeriums vom April 1865 mit Belohnungen für die Ergreifung von Booth, John Surratt und David Herold",
    "urheber": "unbekannt",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:-Broadside_for_the_Capture_of_John_Wilkes_Booth%2C_John_Surratt%2C_and_David_Herold-_MET_DP274835.jpg"
   },
   {
    "datei": "bilder/dark/lincoln-attentat-1.jpg",
    "breite": 900,
    "hoehe": 769,
    "zeigt": "Die Militärkommission von 1865 mit den Anklägern Joseph Holt und Henry L. Burnett",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Conspirators_Court%2C_Military_Commission%2C_1865%2C_Col._Henry_L._Burnett%2C_Judge_Joseph_Holt%2C_and_others_-_NARA_-_528360.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "attentat-von-sarajevo",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Das Attentat von Sarajevo",
  "untertitel": "Gavrilo Princip, Franz Ferdinand und der Weg in den Ersten Weltkrieg – 1914",
  "jahr": 1914,
  "zeitraum": "28. Juni 1914",
  "ort": "Lateinerbrücke, Sarajevo",
  "land": "Bosnien und Herzegowina",
  "lat": 43.8578,
  "lon": 18.429,
  "ortQuelle": "https://en.wikipedia.org/wiki/Latin_Bridge",
  "status": "aufgeklärt",
  "kurz": "Zwei Schüsse eines 19-Jährigen töteten den österreichischen Thronfolger und seine Frau. Einen Monat später begann der Krieg, der die Welt veränderte.",
  "abschnitte": [
   {
    "titel": "Die Opfer",
    "text": "Erzherzog Franz Ferdinand, Neffe Kaiser Franz Josephs, war seit 1896 Thronfolger Österreich-Ungarns und Generalinspektor der Armee. Er galt als schwierig und autoritär, trug sich aber mit Plänen, den Slawen der Monarchie mehr Gewicht zu geben, was serbische Nationalisten als Bedrohung ihres Ziels ansahen. Seine Frau Sophie, geborene Gräfin Chotek, Herzogin von Hohenberg, war nicht ebenbürtig; die Ehe war morganatisch, und bei Hofe wurde sie vielfach zurückgesetzt. Ende Juni 1914 besuchte Franz Ferdinand Manöver in Bosnien, das Österreich-Ungarn 1908 annektiert hatte. Der Besuch in Sarajevo fiel auf den 28. Juni, den Vidovdan, der an die Schlacht auf dem Amselfeld 1389 erinnert und für serbische Nationalisten hohe Bedeutung hatte."
   },
   {
    "titel": "Die Tat",
    "text": "Entlang der Route am Appel-Kai warteten sieben Verschwörer. Gegen 10.10 Uhr warf Nedeljko Čabrinović eine Bombe auf den offenen Wagen des Thronfolgers; sie prallte ab und explodierte unter dem folgenden Fahrzeug, wobei Begleiter und Zuschauer verletzt wurden. Nach dem Empfang im Rathaus wollte Franz Ferdinand die Verletzten im Krankenhaus besuchen. Die geänderte Route war dem Fahrer offenbar nicht mitgeteilt worden: Er bog an der Lateinerbrücke in die Franz-Joseph-Straße ein, wurde zurückgerufen und hielt an. Gavrilo Princip, der dort stand, schoss aus kurzer Distanz zweimal. Franz Ferdinand und Sophie starben kurz darauf. Princip sagte später aus, der zweite Schuss habe dem Landeschef General Oskar Potiorek gegolten."
   },
   {
    "titel": "Täter und Motive",
    "text": "Gavrilo Princip, ein 19-jähriger bosnischer Serbe aus ärmlichen Verhältnissen, gehörte wie die meisten Mitverschworenen zum Umfeld der Jugendbewegung „Mlada Bosna“ (Junges Bosnien). Sie wollten die Herrschaft Österreich-Ungarns über die Südslawen beenden und Bosnien mit Serbien vereinen. In Sarajevo hatte der Lehrer Danilo Ilić weitere junge Männer gewonnen. Princip, Čabrinović und Trifko Grabež erhielten in Belgrad Pistolen und Bomben aus serbischen Armeebeständen, vermittelt durch Mitglieder der Geheimorganisation „Vereinigung oder Tod“, der Schwarzen Hand, darunter Major Vojislav Tankosić und Milan Ciganović. Ein Netz von Vertrauensleuten schleuste sie über die Grenze. Das Zyankali, das sie nach der Tat schlucken sollten, wirkte nicht."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Princip und Čabrinović wurden noch am Tatort festgenommen, die Polizei fasste rasch weitere Beteiligte; nur Muhamed Mehmedbašić entkam nach Montenegro. Der Prozess in Sarajevo begann am 12. Oktober 1914 gegen mehr als zwanzig Angeklagte, darunter Bauern und Händler, die die Attentäter auf ihrem Weg unterstützt hatten. Am 28. Oktober fiel das Urteil. Princip, Čabrinović und Grabež waren zur Tatzeit unter 20 Jahre alt und konnten nach österreichischem Recht nicht zum Tod verurteilt werden; sie erhielten die Höchststrafe von 20 Jahren Kerker. Danilo Ilić, Veljko Čubrilović und Miško Jovanović wurden Anfang Februar 1915 hingerichtet. Princip starb am 28. April 1918 in der Festung Theresienstadt an Tuberkulose, Čabrinović und Grabež waren dort schon 1916 gestorben."
   },
   {
    "titel": "Die Folgen",
    "text": "In Sarajevo kam es nach dem Attentat zu gewaltsamen Ausschreitungen gegen Serben. Österreich-Ungarn sah die serbische Regierung in der Verantwortung und stellte ihr am 23. Juli 1914 mit deutscher Rückendeckung ein Ultimatum. Serbien nahm es in seiner Antwort weitgehend an, lehnte aber die Beteiligung österreichischer Beamter an Ermittlungen auf serbischem Boden ab. Am 28. Juli erklärte Österreich-Ungarn Serbien den Krieg; über die Bündnissysteme weitete er sich binnen einer Woche zum europäischen Krieg aus. Gegen Mitglieder der Schwarzen Hand, darunter ihren Anführer Dragutin Dimitrijević, genannt Apis, führte die serbische Exilregierung 1917 den Prozess von Saloniki. Wie viel Verantwortung das Attentat und wie viel die Entscheidungen der Regierungen im Juli 1914 am Kriegsausbruch tragen, ist bis heute Gegenstand der Forschung."
   }
  ],
  "legende": "Das berühmte Foto, auf dem Polizisten einen jungen Mann abführen, zeigt nach Ansicht mehrerer Historiker nicht Princip, sondern Ferdinand Behr, einen Zuschauer, der zunächst irrtümlich festgenommen wurde. Die Geschichte, Princip habe gerade ein Sandwich gegessen, als der Wagen vor ihm hielt, ist eine moderne Erfindung ohne Quelle aus der Zeit. Lange hieß es, der serbische Staat habe das Attentat bestellt. Belegt ist das nicht: Die Waffen kamen über die Schwarze Hand, eine Verschwörung innerhalb des Staates, die mit der Regierung Pašić verfeindet war; ob und wie viel Pašić vorab wusste, ist bis heute umstritten. Ebenso umstritten ist, ob Apis eigenmächtig handelte.",
  "bedeutung": "Das Attentat wurde zum Auslöser des Ersten Weltkriegs, in dem nach gängigen Schätzungen etwa 8,5 bis 10 Millionen Soldaten und weitere Millionen Zivilisten starben, und damit zum Ausgangspunkt der Umwälzungen des 20. Jahrhunderts. Es zeigt, wie eine kleine Gruppe junger Nationalisten mit Unterstützung aus Kreisen des serbischen Militärs aus dem Verborgenen eine Krise auslösen konnte, die Regierungen dann eskalieren ließen. In Jugoslawien wurde Princip später als Freiheitskämpfer verehrt, die Lateinerbrücke hieß zeitweise Principbrücke; seine Bewertung ist bis heute politisch umstritten.",
  "zeitleiste": [
   {
    "datum": "Oktober 1908",
    "jahr": 1908,
    "text": "Österreich-Ungarn annektiert Bosnien-Herzegowina."
   },
   {
    "datum": "Mai 1914",
    "jahr": 1914,
    "text": "Princip, Čabrinović und Grabež erhalten in Belgrad Waffen und reisen nach Bosnien."
   },
   {
    "datum": "28. Juni 1914",
    "jahr": 1914,
    "text": "Bombenwurf Čabrinovićs; wenig später erschießt Princip Franz Ferdinand und Sophie."
   },
   {
    "datum": "23. Juli 1914",
    "jahr": 1914,
    "text": "Ultimatum Österreich-Ungarns an Serbien."
   },
   {
    "datum": "28. Juli 1914",
    "jahr": 1914,
    "text": "Österreich-Ungarn erklärt Serbien den Krieg."
   },
   {
    "datum": "28. Oktober 1914",
    "jahr": 1914,
    "text": "Urteile im Prozess von Sarajevo."
   },
   {
    "datum": "Februar 1915",
    "jahr": 1915,
    "text": "Ilić, Veljko Čubrilović und Jovanović werden hingerichtet."
   },
   {
    "datum": "28. April 1918",
    "jahr": 1918,
    "text": "Princip stirbt in Theresienstadt."
   }
  ],
  "quellen": [
   "Christopher Clark: Die Schlafwandler. Wie Europa in den Ersten Weltkrieg zog, 2013",
   "Vladimir Dedijer: The Road to Sarajevo, 1966",
   "David James Smith: One Morning in Sarajevo. 28 June 1914, 2008",
   "Encyclopaedia Britannica: Gavrilo Princip"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/attentat-von-sarajevo-0.jpg",
    "breite": 900,
    "hoehe": 730,
    "zeigt": "Franz Ferdinand und Sophie steigen am 28. Juni 1914 am Rathaus von Sarajevo in den Wagen, kurz vor dem Attentat (Imperial War Museum)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Archduke_Franz_Ferdinand_in_Sarajevo%2C_June_1914_Q91848.jpg"
   },
   {
    "datei": "bilder/dark/attentat-von-sarajevo-1.jpg",
    "breite": 900,
    "hoehe": 633,
    "zeigt": "Angeklagte im Prozess von Sarajevo 1914, vorn von links Grabež, Čabrinović, Princip, Ilić und Jovanović",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Sarajevo_trial%2C_accused.jpg"
   },
   {
    "datei": "bilder/dark/attentat-von-sarajevo-2.jpg",
    "breite": 900,
    "hoehe": 578,
    "zeigt": "Festnahme eines jungen Mannes am 28. Juni 1914, oft als Princips Verhaftung ausgegeben, nach mehreren Historikern der Zuschauer Ferdinand Behr",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Ferdinand_Behr_arrested_in_Sarajevo_1914.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "rathenau-mord",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Der Mord an Walther Rathenau",
  "untertitel": "Ein Außenminister, eine Geheimorganisation und der Hass auf die Republik – Berlin 1922",
  "jahr": 1922,
  "zeitraum": "24. Juni bis Oktober 1922",
  "ort": "Koenigsallee, Berlin-Grunewald",
  "land": "Deutschland",
  "lat": 52.4906,
  "lon": 13.2763,
  "ortQuelle": "https://de.wikipedia.org/wiki/Walther_Rathenau",
  "status": "aufgeklärt",
  "kurz": "Junge Rechtsradikale aus dem Umfeld der Organisation Consul erschießen 1922 den jüdischen Außenminister Rathenau – der folgenreichste politische Mord der frühen Weimarer Republik.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Walther Rathenau, 1867 in Berlin geboren, war der Sohn des AEG-Gründers Emil Rathenau, selbst Industrieller, Bankier und viel gelesener Schriftsteller. Im Ersten Weltkrieg baute er ab August 1914 die Kriegsrohstoffabteilung im preußischen Kriegsministerium auf, die die Versorgung der Rüstung mit knappen Rohstoffen organisierte. Nach dem Krieg schloss er sich der linksliberalen DDP an, wurde 1921 Wiederaufbauminister im Kabinett Wirth und am 1. Februar 1922 Reichsaußenminister. Er vertrat die sogenannte Erfüllungspolitik: Deutschland sollte die Reparationsforderungen nach Kräften bedienen, um ihre Undurchführbarkeit zu zeigen und Spielraum zu gewinnen. Im April 1922 schloss er mit Sowjetrussland den Vertrag von Rapallo. Für die völkische Rechte war er als Jude und als Minister der Republik doppelt verhasst; auf Versammlungen wurde offen zu seiner Ermordung aufgerufen."
   },
   {
    "titel": "Die Tat",
    "text": "Am Vormittag des 24. Juni 1922 fuhr Rathenau wie gewohnt im offenen Wagen und ohne Polizeischutz von seiner Villa in der Koenigsallee ins Auswärtige Amt. Kurz nach seiner Abfahrt überholte ihn an der Einmündung der Erdener Straße ein Tourenwagen. Am Steuer saß der 20-jährige Ernst Werner Techow, im Fond Erwin Kern und Hermann Fischer, beide ehemalige Offiziere Anfang bis Mitte zwanzig. Kern schoss mit einer Maschinenpistole auf Rathenau, Fischer warf eine Handgranate in dessen Wagen. Rathenau starb noch am Tatort. Die Täter entkamen zunächst. Rathenaus Chauffeur überlebte. Persönlichen Schutz hatte Rathenau trotz Warnungen abgelehnt."
   },
   {
    "titel": "Täter und Motive",
    "text": "Kern, Fischer und Techow gehörten zum Umfeld der Organisation Consul, eines geheimen Netzwerks, das nach dem gescheiterten Kapp-Putsch 1920 aus der aufgelösten Marinebrigade Ehrhardt hervorgegangen war. Die Organisation stand hinter dem Mord an Matthias Erzberger im August 1921 und dem Blausäureanschlag auf Philipp Scheidemann am 4. Juni 1922. Ihr Ziel war, die Republik zu destabilisieren; nach Einschätzung des Historikers Martin Sabrow sollten die Morde auch einen linken Aufstand provozieren, der den Vorwand für eine Machtübernahme der Rechten geliefert hätte. Hinzu kam ein offener Antisemitismus: Rathenau wurde als Verkörperung einer angeblichen jüdischen Herrschaft über die Republik dargestellt. Der spätere Schriftsteller Ernst von Salomon half bei der Vorbereitung, unter anderem beim Beschaffen des Fahrers und des Wagens."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Die Polizei setzte eine hohe Belohnung aus, Hinweise führten rasch zu den Beteiligten. Kern und Fischer flohen und versteckten sich auf der Burg Saaleck bei Bad Kösen. Als die Polizei sie am 17. Juli 1922 dort stellte, wurde Kern erschossen, Fischer nahm sich das Leben. Vom 3. bis 14. Oktober 1922 verhandelte der neu geschaffene Staatsgerichtshof zum Schutze der Republik in Leipzig gegen Techow, Salomon und weitere Helfer. Techow erhielt 15 Jahre Zuchthaus, nicht die Todesstrafe, weil das Gericht ihm keinen eigenen Tötungsvorsatz nachwies; Salomon wurde zu fünf Jahren verurteilt, weitere Helfer erhielten kürzere Strafen. Die Rolle der Organisation Consul als Ganzes blieb im Verfahren weitgehend ungeklärt, ihre Führung wurde für den Mord nicht belangt."
   },
   {
    "titel": "Die Folgen",
    "text": "Der Mord löste die größten Massenkundgebungen der jungen Republik aus, Hunderttausende demonstrierten in Berlin und anderen Städten. Reichskanzler Joseph Wirth sagte am Tag danach im Reichstag mit Blick auf die Rechte: „Der Feind steht rechts!“ Am 18. Juli 1922 verabschiedete der Reichstag das Republikschutzgesetz, das am 21. Juli in Kraft trat, das republikfeindliche Vereinigungen verbot und den Staatsgerichtshof einrichtete. In der Praxis urteilten viele Gerichte gegen rechte Täter weiterhin milde. Rathenaus Mutter Mathilde schrieb Techows Mutter einen Brief, in dem sie ihrem Sohn verzieh – ein vielzitiertes Dokument. Nach 1933 ehrten die Nationalsozialisten Kern und Fischer mit einer Gedenktafel auf Burg Saaleck."
   }
  ],
  "legende": "Gesichert sind die Namen der unmittelbaren Täter, ihre Herkunft aus dem Milieu der Freikorps und der Organisation Consul sowie das Urteil von Leipzig. Ernst von Salomon hat die Tat später in seinem Roman „Die Geächteten“ (1930) und in „Der Fragebogen“ (1951) aus Tätersicht geschildert; diese Darstellungen stilisieren die Verschwörer zu tragischen Idealisten und sind als Quelle nur mit Vorsicht zu gebrauchen. Die nationalsozialistische Verklärung von Kern und Fischer als „Freiheitskämpfer“ ist Propaganda. Umstritten war lange, wie weit die Führung der Organisation Consul den Mord befohlen hat; die Forschung, vor allem Martin Sabrow, sieht die Tat heute als Teil einer planvollen Mordkampagne aus diesem Netzwerk, nicht als Einzelentschluss einiger junger Männer.",
  "bedeutung": "Der Rathenaumord zeigte, wie gefährdet die Weimarer Republik von rechts war, und gab ihr mit dem Republikschutzgesetz erstmals ein Instrument zur Selbstverteidigung. Zugleich wurde er zum Lehrstück für die Grenzen dieser Abwehr: Die Justiz verfolgte rechte Gewalt oft halbherzig, und viele Beteiligte machten nach 1933 Karriere. Im Gedächtnis der Bundesrepublik steht Rathenau für die Verbindung von Antisemitismus und Republikfeindschaft; Schulen, Straßen und Plätze tragen seinen Namen, und am Tatort erinnert seit 1946 ein Gedenkstein an ihn.",
  "zeitleiste": [
   {
    "datum": "1. Februar 1922",
    "jahr": 1922,
    "text": "Rathenau wird Reichsaußenminister im Kabinett Wirth."
   },
   {
    "datum": "16. April 1922",
    "jahr": 1922,
    "text": "Vertrag von Rapallo mit Sowjetrussland."
   },
   {
    "datum": "4. Juni 1922",
    "jahr": 1922,
    "text": "Blausäureanschlag auf Philipp Scheidemann in Kassel, der überlebt."
   },
   {
    "datum": "24. Juni 1922",
    "jahr": 1922,
    "text": "Rathenau wird auf der Fahrt ins Amt in Berlin-Grunewald ermordet."
   },
   {
    "datum": "17. Juli 1922",
    "jahr": 1922,
    "text": "Kern und Fischer sterben auf Burg Saaleck beim Zugriff der Polizei."
   },
   {
    "datum": "18. Juli 1922",
    "jahr": 1922,
    "text": "Der Reichstag beschließt das Republikschutzgesetz; es tritt am 21. Juli in Kraft."
   },
   {
    "datum": "3.–14. Oktober 1922",
    "jahr": 1922,
    "text": "Prozess vor dem Staatsgerichtshof in Leipzig; Techow erhält 15 Jahre Zuchthaus."
   }
  ],
  "quellen": [
   "Martin Sabrow: Der Rathenaumord. Rekonstruktion einer Verschwörung gegen die Republik von Weimar, 1994",
   "Shulamit Volkov: Walther Rathenau. Weimar's Fallen Statesman, 2012",
   "Deutsches Historisches Museum, LeMO: Walther Rathenau",
   "Encyclopaedia Britannica: Walther Rathenau"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/rathenau-mord-0.jpg",
    "breite": 788,
    "hoehe": 1100,
    "zeigt": "Walther Rathenau, Porträtfotografie der Agentur Bain News Service, um 1920",
    "urheber": "Bain News Service",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Walther_Rathenau.jpg"
   },
   {
    "datei": "bilder/dark/rathenau-mord-1.jpg",
    "breite": 900,
    "hoehe": 1075,
    "zeigt": "Gedenkstein am Tatort an der Koenigsallee in Berlin-Grunewald, 1946 enthüllt, Aufnahme 2010",
    "urheber": "Peter Kuley",
    "lizenz": "CC BY-SA 2.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Gedenkstein_Walther_Rathenau.JPG"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "attentat-20-juli-1944",
  "rubrik": "attentate",
  "unterart": "gescheitertes Attentat",
  "titel": "Das Attentat vom 20. Juli 1944",
  "untertitel": "Stauffenbergs Bombe in der Wolfsschanze und der gescheiterte Umsturz",
  "jahr": 1944,
  "zeitraum": "20. Juli 1944, Verfolgung bis April 1945",
  "ort": "Führerhauptquartier Wolfsschanze bei Rastenburg; Bendlerblock, Berlin",
  "land": "Polen (damals Ostpreußen, Deutsches Reich)",
  "lat": 54.0804,
  "lon": 21.4941,
  "ortQuelle": "https://en.wikipedia.org/wiki/Wolf%27s_Lair",
  "status": "aufgeklärt",
  "kurz": "Der bekannteste Versuch, Hitler zu töten und das NS-Regime von innen zu stürzen – gescheitert binnen Stunden, gefolgt von einer Verfolgungswelle gegen Hunderte Menschen und ihre Familien.",
  "abschnitte": [
   {
    "titel": "Das Ziel",
    "text": "Seit 1938 hatten Offiziere, Diplomaten und Zivilisten immer wieder Pläne geschmiedet, Hitler zu beseitigen. 1943 scheiterten mehrere Versuche, darunter eine Bombe, die Henning von Tresckow im März in Hitlers Flugzeug schmuggeln ließ und die nicht zündete. Im Sommer 1944 war der Krieg militärisch verloren: Die Alliierten waren in der Normandie gelandet, im Osten brach die Heeresgruppe Mitte zusammen. Den Verschwörern ging es darum, das Morden in Lagern und an den Fronten zu beenden und zu zeigen, dass es ein anderes Deutschland gab. Tresckow formulierte, es komme nicht mehr auf den praktischen Zweck an, sondern darauf, dass der Widerstand vor der Welt und der Geschichte den entscheidenden Wurf gewagt habe. Der Umsturzplan nutzte den Einsatzplan „Walküre“, mit dem das Ersatzheer bei inneren Unruhen mobilisiert werden sollte."
   },
   {
    "titel": "Der Attentäter",
    "text": "Claus Schenk Graf von Stauffenberg, 1907 geboren, war Berufsoffizier aus schwäbischem Adel. Er hatte die Machtübernahme anfangs nicht abgelehnt, wandte sich aber unter dem Eindruck der Verbrechen im Osten vom Regime ab. Im April 1943 wurde er in Tunesien schwer verwundet und verlor die rechte Hand, zwei Finger der linken und das linke Auge. Ab Juli 1944 war er Chef des Stabes beim Befehlshaber des Ersatzheeres, Generaloberst Friedrich Fromm, und hatte damit Zugang zu Hitlers Lagebesprechungen. So wurde er zugleich Attentäter und Organisator des Umsturzes in Berlin – eine Doppelrolle, die sich als Schwäche erweisen sollte."
   },
   {
    "titel": "Die Tat",
    "text": "Am 20. Juli 1944 flog Stauffenberg mit seinem Adjutanten Werner von Haeften in die Wolfsschanze. Weil die Besprechung kurzfristig vorverlegt wurde, konnte er nur einen der beiden mitgebrachten Sprengsätze scharf machen. Die Lage fand wegen der Hitze nicht im Bunker, sondern in einer Holzbaracke statt. Stauffenberg stellte die Aktentasche unter den Kartentisch und verließ den Raum unter einem Vorwand. Um 12.42 Uhr explodierte die Bombe. Vier Menschen starben an den Folgen, darunter ein Stenograf; Hitler wurde nur leicht verletzt, weil der schwere Tisch die Wucht abschirmte und die Druckwelle durch die Fenster entwich. Stauffenberg sah die Explosion, hielt Hitler für tot und flog nach Berlin."
   },
   {
    "titel": "Der Umsturzversuch",
    "text": "In Berlin zögerten die Verschwörer um General Friedrich Olbricht, weil die Nachrichten aus Ostpreußen widersprüchlich waren; die Walküre-Befehle gingen erst am Nachmittag hinaus. Fromm, der von Hitlers Überleben wusste, verweigerte sich und wurde im Bendlerblock festgesetzt. In Paris nahmen Truppen kurzzeitig SS- und SD-Leute fest, anderswo geschah wenig. Am Abend kehrte sich das Blatt: Das Wachbataillon unter Major Otto Ernst Remer, von Goebbels über Hitlers Überleben überzeugt, sperrte das Regierungsviertel ab, regimetreue Offiziere überwältigten die Verschwörer. Fromm ließ Stauffenberg, Haeften, Olbricht und Albrecht Mertz von Quirnheim kurz nach Mitternacht im Hof des Bendlerblocks erschießen; Ludwig Beck wurde zuvor zum Selbstmord gedrängt. Gegen ein Uhr sprach Hitler im Rundfunk."
   },
   {
    "titel": "Die Folgen für die Beteiligten",
    "text": "Eine Sonderkommission der Gestapo ermittelte monatelang, Hunderte wurden verhaftet. Der Volksgerichtshof unter Roland Freisler verurteilte ab dem 7. August 1944 in Schauprozessen zahlreiche Angeklagte zum Tod, viele wurden in Plötzensee erhängt. Nach gängigen Angaben wurden im Zusammenhang mit dem 20. Juli rund 200 Menschen hingerichtet, darunter Carl Goerdeler und Helmuth James von Moltke; die Zahlen schwanken je nach Abgrenzung. Tresckow nahm sich am 21. Juli an der Front das Leben, Erwin Rommel wurde im Oktober zum Selbstmord gezwungen. Auch Fromm wurde im März 1945 hingerichtet. Angehörige kamen in Sippenhaft: Stauffenbergs Frau Nina wurde inhaftiert, Kinder der Verschwörer wurden unter fremden Namen in einem Heim in Bad Sachsa festgehalten."
   }
  ],
  "legende": "Gesichert sind Ablauf, Uhrzeit und die Gründe für das Scheitern: nur ein scharfer Sprengsatz, die Holzbaracke statt des Bunkers, das Zögern in Berlin und Stauffenbergs Doppelrolle, die ihn stundenlang von der Zentrale fernhielt. Mythisch verklärt wurde Stauffenberg in beide Richtungen. Das NS-Regime sprach von einer „ganz kleinen Clique ehrgeiziger Offiziere“ – tatsächlich reichte das Netzwerk bis zu Gewerkschaftern, Sozialdemokraten und Kirchenleuten. In der frühen Bundesrepublik galten sie vielen noch als Verräter. Umgekehrt wird oft übersehen, dass etliche Beteiligte das Regime lange mitgetragen hatten und nicht alle eine Demokratie anstrebten. Stauffenbergs letzte Worte sind nur durch Zeugen überliefert, ihr Wortlaut („heiliges“ oder „geheimes Deutschland“) ist umstritten.",
  "bedeutung": "Der 20. Juli wurde zum zentralen Bezugspunkt für den militärischen und bürgerlichen Widerstand gegen den Nationalsozialismus. Im Remer-Prozess 1952 in Braunschweig, den Generalstaatsanwalt Fritz Bauer führte, stellte ein Gericht fest, dass der NS-Staat ein Unrechtsstaat war und der Widerstand nicht als Landesverrat gelten könne. Die Bundeswehr beruft sich auf das Erbe des 20. Juli, Rekruten werden jährlich am Bendlerblock vereidigt, wo heute die Gedenkstätte Deutscher Widerstand ihren Sitz hat. Die Debatte darüber, wie die Motive der Verschwörer zu bewerten sind, hält bis heute an.",
  "zeitleiste": [
   {
    "datum": "13. März 1943",
    "jahr": 1943,
    "text": "Eine von Tresckow in Hitlers Flugzeug geschmuggelte Bombe zündet nicht."
   },
   {
    "datum": "7. April 1943",
    "jahr": 1943,
    "text": "Stauffenberg wird in Tunesien schwer verwundet."
   },
   {
    "datum": "1. Juli 1944",
    "jahr": 1944,
    "text": "Stauffenberg wird Chef des Stabes beim Befehlshaber des Ersatzheeres."
   },
   {
    "datum": "20. Juli 1944, 12.42 Uhr",
    "jahr": 1944,
    "text": "Die Bombe explodiert in der Lagebaracke der Wolfsschanze; Hitler überlebt."
   },
   {
    "datum": "21. Juli 1944, nach Mitternacht",
    "jahr": 1944,
    "text": "Stauffenberg und drei Mitverschwörer werden im Bendlerblock erschossen."
   },
   {
    "datum": "7.–8. August 1944",
    "jahr": 1944,
    "text": "Erster Prozess vor dem Volksgerichtshof; die Verurteilten werden in Plötzensee hingerichtet."
   },
   {
    "datum": "März 1952",
    "jahr": 1952,
    "text": "Im Remer-Prozess in Braunschweig wird der Widerstand rechtlich rehabilitiert."
   }
  ],
  "quellen": [
   "Peter Hoffmann: Widerstand, Staatsstreich, Attentat. Der Kampf der Opposition gegen Hitler, 4. Aufl. 1985",
   "Peter Hoffmann: Claus Schenk Graf von Stauffenberg und seine Brüder, 1992",
   "Gedenkstätte Deutscher Widerstand: Der 20. Juli 1944",
   "Bundeszentrale für politische Bildung: Das Attentat vom 20. Juli 1944",
   "Encyclopaedia Britannica: July Plot"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/attentat-20-juli-1944-0.jpg",
    "breite": 797,
    "hoehe": 1100,
    "zeigt": "Stauffenberg (links) in der Wolfsschanze, fünf Tage vor dem Attentat, am 15. Juli 1944; rechts Hitler und Keitel",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 3.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_146-1984-079-02%2C_F%C3%BChrerhauptquartier%2C_Stauffenberg%2C_Hitler%2C_Keitel---Stauffenberg.jpg"
   },
   {
    "datei": "bilder/dark/attentat-20-juli-1944-1.jpg",
    "breite": 708,
    "hoehe": 1100,
    "zeigt": "Gedenkort im Hof des Bendlerblocks in Berlin, wo Stauffenberg, Olbricht, Haeften und Mertz von Quirnheim erschossen wurden",
    "urheber": "Mramoeba",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bendlerblock_memorial.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "gandhi-mord",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Die Ermordung Mahatma Gandhis",
  "untertitel": "Drei Schüsse vor dem Gebet – Neu-Delhi 1948",
  "jahr": 1948,
  "zeitraum": "20. Januar 1948 bis 15. November 1949",
  "ort": "Birla House (heute Gandhi Smriti), Neu-Delhi",
  "land": "Indien",
  "lat": 28.6019,
  "lon": 77.2144,
  "ortQuelle": "https://en.wikipedia.org/wiki/Gandhi_Smriti",
  "status": "aufgeklärt",
  "kurz": "Ein hindunationalistischer Extremist erschießt fünf Monate nach der Unabhängigkeit den Mann, der Indiens Freiheitsbewegung verkörperte – weil er ihm Nachgiebigkeit gegenüber Muslimen und Pakistan vorwarf.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Mohandas Karamchand Gandhi, 1869 in Porbandar geboren, hatte als Anwalt in Südafrika die Methode des gewaltlosen Widerstands entwickelt und seit 1920 die indische Unabhängigkeitsbewegung geprägt. Die Unabhängigkeit vom 15. August 1947 kam mit der Teilung in Indien und Pakistan, die er abgelehnt hatte, und mit Gewalt zwischen Hindus, Muslimen und Sikhs in bis dahin unbekanntem Ausmaß. Gandhi, inzwischen 78 Jahre alt, reiste in Unruhegebiete und fastete, um die Gewalt zu beenden. Im Januar 1948 hungerte er in Delhi fünf Tage lang, bis Vertreter der Gemeinschaften Frieden gelobten; in diese Zeit fiel auch die Entscheidung der indischen Regierung, Pakistan zurückgehaltene Gelder aus der Teilung des Staatsvermögens auszuzahlen."
   },
   {
    "titel": "Die Tat",
    "text": "Gandhi wohnte in Delhi im Birla House, dem Anwesen der Industriellenfamilie Birla, und hielt dort täglich am Abend eine öffentliche Gebetsversammlung im Garten ab. Schon am 20. Januar 1948 hatte Madanlal Pahwa an einer Mauer des Anwesens einen Sprengsatz gezündet, der niemanden verletzte; er wurde festgenommen, seine Mitverschwörer entkamen. Trotz dieser Warnung lehnte Gandhi Durchsuchungen der Besucher ab. Am 30. Januar 1948, kurz nach fünf Uhr nachmittags, ging er zum Gebetsplatz, als Nathuram Godse vor ihn trat, sich verneigte und aus nächster Nähe dreimal mit einer Pistole auf ihn schoss. Gandhi starb wenige Minuten später. Godse wurde am Ort festgehalten und der Polizei übergeben."
   },
   {
    "titel": "Täter und Motive",
    "text": "Nathuram Vinayak Godse, 1910 geboren, stammte aus einer Brahmanenfamilie in Maharashtra. Er war zeitweise im hindunationalistischen RSS aktiv gewesen und gehörte der Hindu Mahasabha an; mit Narayan Apte gab er in Pune eine Zeitung heraus. Die Verschwörer machten Gandhi für die Teilung verantwortlich, warfen ihm vor, die Muslime zu begünstigen, und sahen in seinem Fasten eine Erpressung zugunsten Pakistans. Godse rechtfertigte die Tat vor Gericht in einer langen Erklärung, die er als politisches Bekenntnis anlegte. Die Ideologie dahinter war die eines Hindu-Staates, in dem Gandhis Vorstellung eines Indiens für alle Religionen keinen Platz hatte."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Die Polizei hatte nach dem Anschlag vom 20. Januar Hinweise auf die Gruppe aus Pune und Bombay, verfolgte sie aber nicht wirksam – ein Versäumnis, das später scharf kritisiert wurde. Nach dem Mord wurden die Beteiligten rasch gefasst. Ein Sondergericht im Roten Fort von Delhi unter Richter Atma Charan verhandelte 1948 gegen acht Angeklagte. Am 10. Februar 1949 verurteilte es Godse und Apte zum Tod, fünf weitere Männer zu lebenslanger Haft; Vinayak Damodar Savarkar, der Vordenker der Hindutva-Ideologie, wurde mangels unabhängiger Beweise freigesprochen. Ein weiterer Beteiligter, Digambar Badge, hatte als Kronzeuge ausgesagt. Das Berufungsgericht in Shimla bestätigte im Juni 1949 die Todesurteile und sprach zwei Verurteilte frei. Godse und Apte wurden am 15. November 1949 im Gefängnis von Ambala gehängt."
   },
   {
    "titel": "Die Folgen",
    "text": "Premierminister Jawaharlal Nehru sagte am Abend im Rundfunk, das Licht sei aus ihrem Leben gegangen. Hunderttausende folgten dem Trauerzug, Gandhi wurde am 31. Januar am Raj Ghat an der Yamuna verbrannt. Die Regierung verbot am 4. Februar 1948 den RSS; das Verbot wurde im Juli 1949 aufgehoben. Der Schock dämpfte die Gewalt zwischen den Religionsgemeinschaften spürbar. 1966 setzte die Regierung eine Untersuchungskommission unter dem Richter Jivan Lal Kapur ein, die das Versagen der Behörden nach dem 20. Januar und die Hintergründe der Verschwörung erneut prüfte; sie legte ihren Bericht 1969 vor."
   }
  ],
  "legende": "Gesichert sind Tat, Täter und Urteil; Godse hat die Tat nie bestritten. Unsicher sind Gandhis letzte Worte: Die verbreitete Überlieferung, er habe „He Ram“ („O Gott“) gerufen, stützt sich auf Zeugenaussagen, andere Augenzeugen, darunter sein Sekretär V. Kalyanam, haben dem später widersprochen. Strittig ist bis heute die Rolle Savarkars: Er wurde 1949 freigesprochen, die Kapur-Kommission sah die Indizien für eine Mitwisserschaft seines Umfelds jedoch als gewichtig an; strafrechtlich blieb es beim Freispruch. In Teilen der hindunationalistischen Szene wird Godse heute als Held verehrt; seriöse Historiker lehnen diese Verklärung ab. Die Behauptung, die Regierung habe den Mord bewusst geschehen lassen, ist nicht belegt; belegt ist eine Kette von Nachlässigkeiten.",
  "bedeutung": "Die Ermordung Gandhis traf die junge Republik Indien in ihrer Gründungsphase und stärkte jene, die einen säkularen Staat für alle Religionen wollten; die Verfassung von 1950 trug diese Handschrift. Zugleich blieb der Konflikt um die Deutung des Landes – säkular oder hindunational – offen und prägt die indische Politik bis heute, einschließlich des Streits um die Rolle von RSS und Savarkar. Gandhis Todestag, der 30. Januar, ist in Indien als Märtyrertag ein nationaler Gedenktag. Das Birla House ist heute die Gedenkstätte Gandhi Smriti; Fußspuren aus Stein markieren seinen letzten Weg.",
  "zeitleiste": [
   {
    "datum": "15. August 1947",
    "jahr": 1947,
    "text": "Unabhängigkeit und Teilung in Indien und Pakistan."
   },
   {
    "datum": "13.–18. Januar 1948",
    "jahr": 1948,
    "text": "Gandhi fastet in Delhi für ein Ende der Gewalt zwischen den Religionsgemeinschaften."
   },
   {
    "datum": "20. Januar 1948",
    "jahr": 1948,
    "text": "Sprengstoffanschlag am Birla House; Madanlal Pahwa wird festgenommen."
   },
   {
    "datum": "30. Januar 1948",
    "jahr": 1948,
    "text": "Nathuram Godse erschießt Gandhi auf dem Weg zur Gebetsversammlung."
   },
   {
    "datum": "4. Februar 1948",
    "jahr": 1948,
    "text": "Die Regierung verbietet den RSS."
   },
   {
    "datum": "10. Februar 1949",
    "jahr": 1949,
    "text": "Urteil des Sondergerichts im Roten Fort: Todesstrafe für Godse und Apte, Freispruch für Savarkar."
   },
   {
    "datum": "15. November 1949",
    "jahr": 1949,
    "text": "Godse und Apte werden in Ambala hingerichtet."
   },
   {
    "datum": "1966–1969",
    "jahr": 1966,
    "text": "Die Kapur-Kommission untersucht die Verschwörung und das Behördenversagen erneut."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Mahatma Gandhi",
   "Report of the Commission of Inquiry into Conspiracy to Murder Mahatma Gandhi (Kapur-Kommission), Government of India, 1970",
   "Ramachandra Guha: Gandhi. The Years That Changed the World, 1914–1948, 2018",
   "Manohar Malgonkar: The Men Who Killed Gandhi, 1978"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/gandhi-mord-0.jpg",
    "breite": 900,
    "hoehe": 687,
    "zeigt": "Die Angeklagten vor dem Sondergericht im Roten Fort, 1948; vorn links Nathuram Godse, daneben Narayan Apte und Vishnu Karkare, in der zweiten Reihe unter anderem Savarkar",
    "urheber": "Photo Division, Ministry of Information & Broadcasting, Government of India",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Trial_of_persons_accused_of_participation_and_complicity_in_Gandhi%27s_assassination_in_the_Special_Court_in_Red_Fort_Delhi.jpg"
   },
   {
    "datei": "bilder/dark/gandhi-mord-1.jpg",
    "breite": 737,
    "hoehe": 1100,
    "zeigt": "Steinerne Fußspuren im Garten des Birla House (Gandhi Smriti), die Gandhis letzten Weg zum Gebetsplatz markieren",
    "urheber": "Hideyuki KAMON",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Gandhi%27s_last_footsteps_at_Gandhi_Smriti%2C_%28Birla_House%29%2C_New_Delhi.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "kennedy-attentat",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Das Attentat auf John F. Kennedy",
  "untertitel": "Dallas, 22. November 1963 – und zwei Untersuchungen mit unterschiedlichen Schlüssen",
  "jahr": 1963,
  "zeitraum": "22. November 1963, Untersuchungen bis 1979",
  "ort": "Dealey Plaza, Dallas, Texas",
  "land": "USA",
  "lat": 32.7786,
  "lon": -96.8086,
  "ortQuelle": "https://en.wikipedia.org/wiki/Dealey_Plaza",
  "status": "aufgeklärt",
  "kurz": "Der Mord am 35. Präsidenten der USA ist eines der am gründlichsten untersuchten Verbrechen des 20. Jahrhunderts – und zugleich der Ausgangspunkt der modernen Verschwörungskultur.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "John Fitzgerald Kennedy, 1917 geboren, war im Januar 1961 als jüngster gewählter Präsident der USA ins Amt gekommen. Seine Amtszeit stand im Zeichen des Kalten Krieges: die gescheiterte Invasion in der Schweinebucht, der Mauerbau in Berlin, die Kubakrise vom Oktober 1962 und das Raumfahrtprogramm. Im November 1963 reiste er nach Texas, um vor dem Wahljahr 1964 Spannungen in der dortigen Demokratischen Partei zu überbrücken. Begleitet wurde er von seiner Frau Jacqueline; Gouverneur John Connally und dessen Frau fuhren im selben offenen Wagen."
   },
   {
    "titel": "Die Tat",
    "text": "Am 22. November 1963 gegen 12.30 Uhr fuhr die Wagenkolonne über die Dealey Plaza im Zentrum von Dallas. Als der Wagen die Elm Street hinabrollte, fielen Schüsse; Kennedy wurde am Hals und am Kopf getroffen, Connally schwer verletzt. Kennedy wurde ins Parkland Hospital gebracht und dort um 13 Uhr für tot erklärt. Vizepräsident Lyndon B. Johnson legte noch am Nachmittag an Bord der Air Force One den Amtseid ab. Im sechsten Stock des Schulbuchlagers Texas School Book Depository fanden Polizisten ein Gewehr und eine Stellung am Fenster. Der Hobbyfilmer Abraham Zapruder hatte die Fahrt gefilmt; sein Film wurde zum wichtigsten Beweismittel."
   },
   {
    "titel": "Der Tatverdächtige",
    "text": "Lee Harvey Oswald, 24 Jahre alt, arbeitete seit Oktober im Schulbuchlager. Der ehemalige Marinesoldat war 1959 in die Sowjetunion übergesiedelt und 1962 mit seiner russischen Frau zurückgekehrt; im Herbst 1963 hatte er in Mexiko-Stadt die kubanische und die sowjetische Botschaft aufgesucht. Das Gewehr, ein italienischer Mannlicher-Carcano, hatte er unter falschem Namen per Post bestellt. Etwa 45 Minuten nach dem Attentat erschoss er den Polizisten J. D. Tippit und wurde wenig später in einem Kino festgenommen. Er bestritt die Tat. Am 24. November erschoss der Nachtclubbesitzer Jack Ruby Oswald im Keller des Polizeipräsidiums vor laufenden Fernsehkameras. Zu einem Prozess gegen Oswald kam es deshalb nie."
   },
   {
    "titel": "Die Warren-Kommission",
    "text": "Präsident Johnson setzte am 29. November 1963 eine Kommission unter dem Obersten Richter Earl Warren ein. Ihr Bericht, am 24. September 1964 übergeben, kam zu dem Schluss, Oswald habe allein gehandelt und aus dem Schulbuchlager drei Schüsse abgegeben; eine Kugel habe sowohl Kennedy als auch Connally getroffen. Für eine Verschwörung, auch mit Ruby, fand sie keine Belege. Später wurde bekannt, dass CIA und FBI der Kommission Informationen vorenthalten hatten, etwa über Mordpläne der CIA gegen Fidel Castro und über eine Notiz, die Oswald vor der Tat im FBI-Büro in Dallas hinterlassen hatte und die nach seinem Tod vernichtet wurde. Das beschädigte das Vertrauen in den Bericht nachhaltig, auch wo sein Kernbefund durch spätere Prüfungen gestützt wurde."
   },
   {
    "titel": "Die Untersuchung des Kongresses",
    "text": "Von 1976 bis 1979 untersuchte ein Ausschuss des Repräsentantenhauses, das House Select Committee on Assassinations (HSCA), die Morde an Kennedy und Martin Luther King. Er bestätigte, dass Oswald die Schüsse abgab, die Kennedy trafen und töteten. Gestützt auf die akustische Auswertung einer Tonaufnahme aus einem Polizeifunkgerät nahm er jedoch einen vierten Schuss vom Grashügel an und schloss, Kennedy sei „wahrscheinlich infolge einer Verschwörung“ ermordet worden, ohne einen zweiten Schützen oder Hintermänner benennen zu können. 1982 kam ein Gremium der National Academy of Sciences zu dem Ergebnis, dass die fraglichen Geräusche erst etwa eine Minute nach den Schüssen aufgezeichnet worden waren; die akustische Grundlage des Verschwörungsbefunds gilt seither als widerlegt."
   }
  ],
  "legende": "Gesichert ist nach beiden staatlichen Untersuchungen, dass Oswald aus dem Schulbuchlager auf Kennedy schoss und ihn tötete. Die Annahme eines zweiten Schützen auf dem Grashügel beruhte beim HSCA allein auf der Tonaufnahme, deren Auswertung 1982 widerlegt wurde. Die als „magische Kugel“ verspottete Einzelkugel-These lässt sich nach den Untersuchungen mit den Sitzpositionen im Wagen erklären. Für die vielen Theorien über Auftraggeber – CIA, Mafia, Exilkubaner, Castro, der KGB, Johnson – gibt es keine belastbaren Belege. Der einzige Prozess, Jim Garrisons Anklage gegen Clay Shaw 1969 in New Orleans, endete mit Freispruch. Die seit den 1990er-Jahren freigegebenen Akten zeigen Vertuschungen von Behördenversagen, aber keine Verschwörung zum Mord.",
  "bedeutung": "Die Tage nach dem Mord gehörten zu den ersten Großereignissen, die ein Massenpublikum live im Fernsehen verfolgte, und prägten eine ganze Generation. Seit 1965 ist die Ermordung eines Präsidenten ein Bundesverbrechen, der Personenschutz des Secret Service wurde grundlegend reformiert, und der 25. Verfassungszusatz von 1967 regelt die Nachfolge bei Amtsunfähigkeit. Die Lücken und Geheimhaltung der Behörden nährten ein dauerhaftes Misstrauen; Umfragen zeigen seit Jahrzehnten, dass eine Mehrheit der Amerikaner an eine Verschwörung glaubt. Nach dem Film „JFK“ von Oliver Stone verabschiedete der Kongress 1992 ein Gesetz, das die Freigabe der Akten vorschreibt.",
  "zeitleiste": [
   {
    "datum": "22. November 1963, 12.30 Uhr",
    "jahr": 1963,
    "text": "Schüsse auf die Wagenkolonne auf der Dealey Plaza; Kennedy stirbt eine halbe Stunde später."
   },
   {
    "datum": "22. November 1963",
    "jahr": 1963,
    "text": "Oswald erschießt den Polizisten J. D. Tippit und wird in einem Kino festgenommen."
   },
   {
    "datum": "24. November 1963",
    "jahr": 1963,
    "text": "Jack Ruby erschießt Oswald im Polizeipräsidium von Dallas."
   },
   {
    "datum": "24. September 1964",
    "jahr": 1964,
    "text": "Die Warren-Kommission übergibt ihren Bericht: Oswald handelte allein."
   },
   {
    "datum": "1969",
    "jahr": 1969,
    "text": "Clay Shaw wird in New Orleans von einer Geschworenenjury freigesprochen."
   },
   {
    "datum": "1979",
    "jahr": 1979,
    "text": "Der Schlussbericht des HSCA nennt eine „wahrscheinliche Verschwörung“."
   },
   {
    "datum": "1982",
    "jahr": 1982,
    "text": "Die National Academy of Sciences widerlegt die akustischen Belege für einen vierten Schuss."
   },
   {
    "datum": "1992",
    "jahr": 1992,
    "text": "Der JFK Records Act verpflichtet zur Freigabe der Ermittlungsakten."
   }
  ],
  "quellen": [
   "Report of the President's Commission on the Assassination of President John F. Kennedy (Warren-Bericht), 1964",
   "Report of the Select Committee on Assassinations, U.S. House of Representatives, 1979",
   "National Research Council: Report of the Committee on Ballistic Acoustics, 1982",
   "National Archives: JFK Assassination Records Collection",
   "Encyclopaedia Britannica: Assassination of John F. Kennedy"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/kennedy-attentat-0.jpg",
    "breite": 735,
    "hoehe": 1100,
    "zeigt": "Das Texas School Book Depository am 22. oder 23. November 1963, Aufnahme aus den FBI-Akten; die Markierung des Fensters stammt nicht vom FBI",
    "urheber": "Permission =",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Texas_School_Book_Depository_22_or_23_November_1963.jpg"
   },
   {
    "datei": "bilder/dark/kennedy-attentat-1.jpg",
    "breite": 900,
    "hoehe": 694,
    "zeigt": "Die Mitglieder der Warren-Kommission übergeben Präsident Johnson am 24. September 1964 im Weißen Haus ihren Bericht",
    "urheber": "Cecil W. Stoughton",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Warren_Commission_presenting_report_on_assassination_of_John_F._Kennedy_to_Lyndon_Johnson.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "martin-luther-king-attentat",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Der Mord an Martin Luther King",
  "untertitel": "Ein Schuss am Lorraine Motel – Memphis 1968",
  "jahr": 1968,
  "zeitraum": "4. April 1968, Nachprüfungen bis 2000",
  "ort": "Lorraine Motel, Memphis, Tennessee",
  "land": "USA",
  "lat": 35.1345,
  "lon": -90.0576,
  "ortQuelle": "https://en.wikipedia.org/wiki/National_Civil_Rights_Museum",
  "status": "aufgeklärt",
  "kurz": "Der Führer der Bürgerrechtsbewegung wird in Memphis erschossen; der verurteilte Täter widerruft sein Geständnis. Belege für eine Regierungsverschwörung fanden spätere Prüfungen nicht.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Martin Luther King Jr., 1929 in Atlanta geboren, war Baptistenpastor und seit dem Busboykott von Montgomery 1955/56 die bekannteste Stimme der Bürgerrechtsbewegung. 1963 hielt er beim Marsch auf Washington die Rede „I Have a Dream“, 1964 erhielt er den Friedensnobelpreis. In seinen letzten Jahren wandte er sich gegen den Vietnamkrieg und plante eine Kampagne für arme Menschen aller Hautfarben. Das FBI überwachte ihn seit Jahren, hörte ihn ab und versuchte, ihn zu diskreditieren. Im Frühjahr 1968 kam er nach Memphis, um die streikenden schwarzen Müllarbeiter der Stadt zu unterstützen, die für Anerkennung ihrer Gewerkschaft und sicherere Arbeitsbedingungen kämpften."
   },
   {
    "titel": "Die Tat",
    "text": "Am Abend des 3. April 1968 hielt King in der Mason Temple seine letzte Rede, in der er sagte, er habe vom Berg aus das gelobte Land gesehen. Am 4. April gegen 18 Uhr stand er auf dem Balkon vor seinem Zimmer im ersten Stock des Lorraine Motel, als ihn ein einzelner Gewehrschuss traf. Er starb gut eine Stunde später im St. Joseph's Hospital. Der Schuss kam nach den Ermittlungen aus dem Badezimmer einer Pension auf der anderen Straßenseite. Vor einem benachbarten Geschäft fand die Polizei ein Bündel mit einem Gewehr, Munition und weiteren Gegenständen, die der Täter auf der Flucht fallen gelassen hatte. In über hundert Städten kam es in den folgenden Tagen zu Unruhen."
   },
   {
    "titel": "Der Täter",
    "text": "Die Fingerabdrücke auf dem Gewehr führten das FBI zu James Earl Ray, einem 40-jährigen Gewohnheitsverbrecher, der im April 1967 aus dem Staatsgefängnis von Missouri ausgebrochen war. Ray hatte unter falschen Namen gelebt und das Gewehr in Birmingham gekauft. Nach der Tat floh er über Kanada, wo er einen Pass auf einen anderen Namen erhielt, nach Europa. Am 8. Juni 1968 wurde er am Flughafen London-Heathrow festgenommen und an die USA ausgeliefert. Sein Motiv blieb unklar; belegt sind rassistische Einstellungen und die Unterstützung des Präsidentschaftskandidaten George Wallace, der für die Rassentrennung eintrat."
   },
   {
    "titel": "Geständnis und Widerruf",
    "text": "Am 10. März 1969 bekannte sich Ray in Memphis schuldig und wurde ohne Geschworenenprozess zu 99 Jahren Haft verurteilt; das Geständnis ersparte ihm eine mögliche Todesstrafe. Drei Tage später widerrief er und behauptete, ein Mann namens „Raoul“ habe ihn benutzt. Ein neues Verfahren erhielt er nie. 1977 brach er für drei Tage aus dem Gefängnis Brushy Mountain aus. Das HSCA kam 1979 zu dem Ergebnis, Ray habe den tödlichen Schuss abgegeben; es hielt eine Verschwörung im Umfeld rassistischer Kreise in St. Louis für wahrscheinlich, fand aber keine Beteiligung von Bundesbehörden. In den 1990er-Jahren unterstützte die Familie King Rays Antrag auf einen Prozess. Ray starb am 23. April 1998 in Haft."
   },
   {
    "titel": "Zivilprozess und Prüfung durch das Justizministerium",
    "text": "1993 behauptete Loyd Jowers, Besitzer eines Lokals neben der Pension, im Fernsehen, er sei an einem Mordkomplott beteiligt gewesen. Die Familie King verklagte ihn zivilrechtlich. Am 8. Dezember 1999 befand eine Jury in Memphis, Jowers und „andere, darunter Regierungsbehörden“ hätten sich verschworen; die Familie hatte nur symbolischen Schadensersatz von 100 Dollar verlangt. Das Verfahren war kaum streitig geführt worden, die Verteidigung widersprach den Vorwürfen wenig. Das US-Justizministerium prüfte daraufhin die Behauptungen und veröffentlichte im Juni 2000 einen Bericht: Jowers' Angaben seien widersprüchlich und nicht glaubhaft, für „Raoul“ und eine Beteiligung von Behörden gebe es keine verlässlichen Belege. Eine weitere Untersuchung sei nicht gerechtfertigt."
   }
  ],
  "legende": "Gesichert ist, dass Ray das Gewehr kaufte, sich zur Tatzeit in der Pension einmietete, mit falschen Papieren floh und sich schuldig bekannte; das HSCA und das Justizministerium hielten ihn für den Schützen. Gesichert ist auch, dass das FBI King jahrelang bekämpft hat: Abhörprotokolle und ein anonymer Brief von 1964, der ihn zum Selbstmord drängen sollte, sind seit dem Church-Ausschuss 1975/76 belegt. Daraus folgt aber nicht, dass das FBI den Mord beging. Das Zivilurteil von 1999 wird oft als gerichtliche Bestätigung einer Regierungsverschwörung angeführt; es beruhte jedoch auf einem Verfahren ohne ernsthafte Gegenseite, und die Prüfung des Justizministeriums fand für die Behauptungen keine Belege. Ob Ray Helfer oder Geldgeber hatte, ist bis heute nicht geklärt.",
  "bedeutung": "Kings Tod nahm der gewaltfreien Bürgerrechtsbewegung ihre wichtigste Stimme; eine Woche danach unterzeichnete Präsident Johnson den Civil Rights Act von 1968 mit dem Verbot der Diskriminierung auf dem Wohnungsmarkt. Der Streik der Müllarbeiter in Memphis endete kurz darauf mit der Anerkennung ihrer Gewerkschaft. Seit 1986 ist der dritte Montag im Januar in den USA ein nationaler Feiertag zu Kings Ehren. Das Lorraine Motel beherbergt seit 1991 das National Civil Rights Museum. Die Enthüllungen über das FBI trugen zur Reform der Geheimdienstaufsicht in den 1970er-Jahren bei.",
  "zeitleiste": [
   {
    "datum": "23. April 1967",
    "jahr": 1967,
    "text": "James Earl Ray bricht aus dem Staatsgefängnis von Missouri aus."
   },
   {
    "datum": "3. April 1968",
    "jahr": 1968,
    "text": "King hält in Memphis seine letzte Rede."
   },
   {
    "datum": "4. April 1968",
    "jahr": 1968,
    "text": "King wird auf dem Balkon des Lorraine Motel erschossen."
   },
   {
    "datum": "8. Juni 1968",
    "jahr": 1968,
    "text": "Ray wird in London-Heathrow festgenommen."
   },
   {
    "datum": "10. März 1969",
    "jahr": 1969,
    "text": "Ray bekennt sich schuldig und erhält 99 Jahre Haft; drei Tage später widerruft er."
   },
   {
    "datum": "1979",
    "jahr": 1979,
    "text": "Das HSCA bestätigt Ray als Schützen und hält Mitwisser für wahrscheinlich."
   },
   {
    "datum": "8. Dezember 1999",
    "jahr": 1999,
    "text": "Eine Zivil-Jury in Memphis gibt der Klage der Familie King gegen Loyd Jowers statt."
   },
   {
    "datum": "Juni 2000",
    "jahr": 2000,
    "text": "Das Justizministerium findet keine verlässlichen Belege für die Verschwörungsbehauptungen."
   }
  ],
  "quellen": [
   "U.S. Department of Justice: Investigation of Recent Allegations Regarding the Assassination of Dr. Martin Luther King, Jr., Juni 2000",
   "Report of the Select Committee on Assassinations, U.S. House of Representatives, 1979",
   "Hampton Sides: Hellhound on His Trail. The Stalking of Martin Luther King, Jr. and the International Hunt for His Assassin, 2010",
   "Encyclopaedia Britannica: Martin Luther King, Jr."
  ],
  "bilder": [
   {
    "datei": "bilder/dark/martin-luther-king-attentat-0.jpg",
    "breite": 719,
    "hoehe": 1100,
    "zeigt": "Fahndungsplakat des FBI für James Earl Ray, 1968",
    "urheber": "United States Federal Bureau of Investigation",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:James_Earl_Ray-F.B.I._wanted_poster-.jpg"
   },
   {
    "datei": "bilder/dark/martin-luther-king-attentat-1.jpg",
    "breite": 786,
    "hoehe": 1100,
    "zeigt": "Das Lorraine Motel in Memphis, heute Teil des National Civil Rights Museum, Aufnahme 2020",
    "urheber": "Matthew T Rader",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Lorraine_Motel%2C_Memphis%2C_Tennessee.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "rabin-attentat",
  "rubrik": "attentate",
  "unterart": "Attentat",
  "titel": "Der Mord an Jitzchak Rabin",
  "untertitel": "Schüsse nach der Friedenskundgebung – Tel Aviv 1995",
  "jahr": 1995,
  "zeitraum": "4. November 1995 bis März 1996",
  "ort": "Platz der Könige Israels (heute Rabin-Platz), Tel Aviv",
  "land": "Israel",
  "lat": 32.0808,
  "lon": 34.7806,
  "ortQuelle": "https://en.wikipedia.org/wiki/Rabin_Square",
  "status": "aufgeklärt",
  "kurz": "Ein jüdischer Extremist erschießt den israelischen Ministerpräsidenten, um den Friedensprozess von Oslo zu stoppen – ein Mord, der die israelische Politik bis heute prägt.",
  "abschnitte": [
   {
    "titel": "Das Opfer",
    "text": "Jitzchak Rabin, 1922 in Jerusalem geboren, war Soldat, bevor er Politiker wurde: Offizier der Palmach im Krieg von 1948, Generalstabschef im Sechstagekrieg 1967, danach Botschafter in Washington. 1974 bis 1977 und wieder ab 1992 war er Ministerpräsident. In seiner zweiten Amtszeit vollzog er eine Wende: 1993 erkannten Israel und die PLO einander im Rahmen der Osloer Verträge an, im September 1993 gab er Jassir Arafat vor dem Weißen Haus die Hand. 1994 folgte der Friedensvertrag mit Jordanien, im selben Jahr erhielt er mit Schimon Peres und Arafat den Friedensnobelpreis. Gegner im rechten und religiös-nationalistischen Lager warfen ihm vor, das Land zu verraten; auf Kundgebungen wurde er als Verräter und Mörder beschimpft."
   },
   {
    "titel": "Die Tat",
    "text": "Am Abend des 4. November 1995 sprach Rabin auf einer großen Kundgebung für den Frieden auf dem Platz der Könige Israels in Tel Aviv, an der nach Medienberichten weit über hunderttausend Menschen teilnahmen. Er sang mit Peres und anderen das „Lied für den Frieden“. Als er gegen 21.40 Uhr die Treppe hinunter zu seinem Wagen ging, trat der 25-jährige Jigal Amir aus der Menge von hinten an ihn heran und schoss mit einer Pistole. Zwei Kugeln trafen Rabin, eine dritte verletzte einen Leibwächter. Rabin wurde ins nahe Ichilov-Krankenhaus gebracht und starb dort wenig später. Sein Büroleiter Eitan Haber gab den Tod vor dem Krankenhaus bekannt. Amir wurde noch am Ort überwältigt."
   },
   {
    "titel": "Täter und Motive",
    "text": "Jigal Amir, geboren 1970, studierte Jura an der religiösen Bar-Ilan-Universität und hatte sich in der Bewegung gegen die Osloer Verträge engagiert. Er gestand die Tat sofort und erklärte, er habe den Friedensprozess aufhalten und das Land vor der Rückgabe von Gebieten bewahren wollen. Zur Rechtfertigung berief er sich auf Begriffe des jüdischen Religionsgesetzes, nach denen die Tötung eines Menschen erlaubt sei, der das Leben anderer Juden gefährde – eine Auslegung, die von der großen Mehrheit der Rabbiner als Missbrauch zurückgewiesen wurde. Die Tat war geplant: Amir hatte schon früher Gelegenheiten gesucht, und sein Bruder Chagai sowie ein Freund, Dror Adani, wussten von den Plänen."
   },
   {
    "titel": "Ermittlung und Prozess",
    "text": "Das Bezirksgericht Tel Aviv verurteilte Amir am 27. März 1996 wegen Mordes zu lebenslanger Haft und zu weiteren sechs Jahren wegen der Verletzung des Leibwächters. In einem weiteren Verfahren wurden er, sein Bruder und Adani wegen Verschwörung verurteilt; Chagai Amir erhielt eine langjährige Haftstrafe und kam 2012 frei. Eine staatliche Untersuchungskommission unter dem früheren Präsidenten des Obersten Gerichts, Meir Schamgar, stellte schwere Versäumnisse des Inlandsgeheimdienstes Schin Bet beim Personenschutz fest; ihr Bericht wurde im März 1996 veröffentlicht, ein Teil blieb geheim. Ins Zwielicht geriet der Dienst auch, weil einer seiner Informanten, Avischai Raviv, eine militante rechte Gruppe geführt und Amir gekannt hatte."
   },
   {
    "titel": "Die Folgen",
    "text": "Zur Beerdigung auf dem Herzlberg in Jerusalem kamen am 6. November 1995 Staats- und Regierungschefs aus aller Welt, darunter König Hussein von Jordanien, Präsident Hosni Mubarak und Präsident Bill Clinton. Schimon Peres wurde Ministerpräsident, verlor aber die Wahl im Mai 1996 knapp gegen Benjamin Netanjahu, einen Gegner der Osloer Verträge. Der Friedensprozess verlor an Schwung und kam in den folgenden Jahren zum Stillstand. Der Platz wurde nach Rabin benannt; ein Denkmal aus Basaltsteinen markiert den Tatort. Ein Gesetz von 1997 machte den Todestag nach dem hebräischen Kalender zum staatlichen Gedenktag."
   }
  ],
  "legende": "Gesichert sind Täter, Tathergang und Urteil; Amir hat die Tat stets eingestanden. Gleichwohl kursieren in Israel Verschwörungstheorien, nach denen der Schin Bet oder politische Gegner hinter dem Mord stünden, Amir nur mit Platzpatronen geschossen habe oder Rabin erst im Wagen getötet worden sei. Sie stützen sich auf Widersprüche in Zeugenaussagen, auf einen Ruf „Platzpatronen!“ am Tatort und auf die Rolle des Informanten Raviv. Gericht und Schamgar-Kommission haben die Beweise geprüft und Amir als alleinigen Schützen festgestellt; Raviv wurde 2003 vom Vorwurf freigesprochen, die Tat nicht verhindert zu haben. Belegt ist das Versagen des Personenschutzes, nicht eine Beteiligung des Staates. Umstritten bleibt, wie viel Verantwortung die aufgeheizte politische Hetze vor dem Mord trägt.",
  "bedeutung": "Der Mord ist eines der tiefsten Traumata der israelischen Gesellschaft und gilt als Beispiel dafür, wie politische Hetze in Gewalt umschlagen kann. Er zeigte, dass die größte Gefahr für einen israelischen Regierungschef auch aus dem eigenen Lager kommen konnte; der Personenschutz wurde danach grundlegend umgebaut. Ob der Friedensprozess mit Rabin anders verlaufen wäre, ist eine offene historische Frage. Jedes Jahr erinnern Kundgebungen auf dem Rabin-Platz an ihn, und an Schulen ist der Gedenktag ein Anlass für Unterricht über Demokratie und politische Gewalt.",
  "zeitleiste": [
   {
    "datum": "13. September 1993",
    "jahr": 1993,
    "text": "Unterzeichnung der Grundsatzerklärung von Oslo in Washington."
   },
   {
    "datum": "26. Oktober 1994",
    "jahr": 1994,
    "text": "Friedensvertrag zwischen Israel und Jordanien."
   },
   {
    "datum": "10. Dezember 1994",
    "jahr": 1994,
    "text": "Rabin, Peres und Arafat erhalten den Friedensnobelpreis."
   },
   {
    "datum": "4. November 1995",
    "jahr": 1995,
    "text": "Jigal Amir erschießt Rabin nach der Friedenskundgebung in Tel Aviv."
   },
   {
    "datum": "6. November 1995",
    "jahr": 1995,
    "text": "Staatsbegräbnis auf dem Herzlberg in Jerusalem."
   },
   {
    "datum": "27. März 1996",
    "jahr": 1996,
    "text": "Amir wird zu lebenslanger Haft verurteilt; kurz darauf erscheint der Bericht der Schamgar-Kommission."
   },
   {
    "datum": "29. Mai 1996",
    "jahr": 1996,
    "text": "Benjamin Netanjahu gewinnt die Wahl gegen Schimon Peres."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Yitzhak Rabin",
   "Dan Ephron: Killing a King. The Assassination of Yitzhak Rabin and the Remaking of Israel, 2015",
   "Michael Karpin, Ina Friedman: Murder in the Name of God. The Plot to Kill Yitzhak Rabin, 1998",
   "Bericht der Untersuchungskommission zur Ermordung von Ministerpräsident Jitzchak Rabin (Schamgar-Kommission), 1996"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/rabin-attentat-0.jpg",
    "breite": 900,
    "hoehe": 600,
    "zeigt": "Rabin und Arafat reichen sich am 13. September 1993 vor dem Weißen Haus die Hand, in der Mitte Bill Clinton",
    "urheber": "Vince Musi / The White House",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bill_Clinton%2C_Yitzhak_Rabin%2C_Yasser_Arafat_at_the_White_House_1993-09-13.jpg"
   },
   {
    "datei": "bilder/dark/rabin-attentat-1.jpg",
    "breite": 900,
    "hoehe": 506,
    "zeigt": "Das Rabin-Denkmal aus Basaltsteinen am Tatort neben dem Rathaus von Tel Aviv, 1996 eingeweiht",
    "urheber": "Zeev Stein ( זאב שטיין)",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:AvneyMoreshet-67cc8c38-The_Yitzhak_Rabin_Memorial_-_Tel_Aviv-Yafo.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "prozess-jeanne-darc",
  "rubrik": "hexen",
  "unterart": "Prozess",
  "titel": "Der Prozess gegen Jeanne d'Arc",
  "untertitel": "Ketzerprozess in Rouen 1431 und Rehabilitierung 1456",
  "jahr": 1431,
  "zeitraum": "Januar bis Mai 1431; Revision 1455–1456",
  "ort": "Rouen",
  "land": "Frankreich",
  "lat": 49.4431,
  "lon": 1.0892,
  "ortQuelle": "https://en.wikipedia.org/wiki/Place_du_Vieux-March%C3%A9",
  "status": "aufgeklärt",
  "kurz": "Ein kirchliches Gericht unter englischer Kontrolle verurteilte die neunzehnjährige Jeanne als rückfällige Ketzerin. 25 Jahre später erklärte ein Revisionsverfahren dasselbe Urteil für nichtig.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Im Mai 1430 geriet Jeanne bei Compiègne in burgundische Gefangenschaft. Die Burgunder, Verbündete Englands, übergaben sie gegen eine Summe von 10.000 Livres an die Engländer. Für England war die Gefangene ein politisches Problem: Sie hatte Karl VII. nach Reims zur Krönung geführt und behauptete, im Auftrag Gottes zu handeln. Ein Urteil der Kirche, das ihre Stimmen als Täuschung oder Teufelswerk erklärte, sollte auch die Krönung Karls entwerten. Deshalb wurde kein weltliches Kriegsgericht eingesetzt, sondern ein Glaubensprozess vor einem kirchlichen Gericht in Rouen, dem Zentrum der englischen Verwaltung in der Normandie."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Vorsitzender Richter war Pierre Cauchon, Bischof von Beauvais und ein Parteigänger der Engländer; neben ihm saß als Vertreter der Inquisition Jean Le Maistre. Das Verfahren begann im Januar 1431, die öffentlichen Verhöre am 21. Februar. Jeanne hatte keinen Verteidiger und wurde, entgegen kirchlichem Brauch, nicht in einem Kirchengefängnis, sondern von englischen Soldaten bewacht. Die Anklage umfasste zunächst 70 Artikel, die auf zwölf verdichtet wurden: Kern waren ihre Stimmen, ihr Anspruch, Gott unmittelbar zu gehorchen statt der Kirche, und das Tragen von Männerkleidung. Am 9. Mai wurden ihr im Donjon der Burg die Folterwerkzeuge gezeigt; die Mehrheit der Beisitzer stimmte gegen die Anwendung."
   },
   {
    "titel": "Abschwörung und Hinrichtung",
    "text": "Am 24. Mai 1431 unterzeichnete Jeanne auf dem Friedhof von Saint-Ouen vor einer Menge eine Abschwörung und wurde zu lebenslanger Haft verurteilt. Wenige Tage später trug sie wieder Männerkleidung. Warum, ist bis heute nicht sicher geklärt; in der Revision sagten Zeugen aus, sie habe sich so gegen Übergriffe der Wächter geschützt oder man habe ihr die Frauenkleider weggenommen. Das Gericht wertete dies als Rückfall in die Ketzerei, der nach damaligem Recht nicht mehr verziehen werden konnte. Am 30. Mai 1431 wurde sie der weltlichen Gewalt übergeben und auf dem Place du Vieux-Marché in Rouen verbrannt. Sie war etwa neunzehn Jahre alt."
   },
   {
    "titel": "Der Revisionsprozess",
    "text": "Nachdem Karl VII. 1449 Rouen zurückerobert hatte, ließ er 1450 erste Zeugen befragen; 1452 folgte eine Untersuchung unter dem päpstlichen Legaten Guillaume d'Estouteville. Den formalen Weg öffnete Papst Calixtus III., der 1455 das Gesuch von Jeannes Mutter Isabelle Romée und ihren Brüdern annahm. Die Kommission hörte in Domrémy, Orléans, Paris und Rouen mehr als hundert Zeugen, darunter Notare und Beisitzer des ersten Prozesses. Am 7. Juli 1456 erklärte sie in Rouen das Urteil von 1431 für nichtig, wegen Verfahrensfehlern, Parteilichkeit und Betrugs. Ein Urteil über Jeannes Stimmen sprach das Gericht nicht."
   },
   {
    "titel": "Die Akten",
    "text": "Beide Verfahren sind außergewöhnlich gut dokumentiert. Vom ersten Prozess sind die von den Notaren, darunter Guillaume Manchon, geführten Protokolle in einer lateinischen Fassung und Teile einer französischen Mitschrift erhalten; vom Revisionsprozess die Zeugenaussagen. Historiker lesen beide kritisch: Das erste Protokoll stammt aus dem Lager der Verurteiler, die Aussagen von 1455/56 aus einer Zeit, in der viele Zeugen ihre frühere Mitwirkung herunterspielen wollten. Gerade das Nebeneinander macht den Fall zu einem der am besten belegten Gerichtsverfahren des Mittelalters, in dem die Angeklagte selbst ausführlich zu Wort kommt."
   }
  ],
  "legende": "Jeanne wurde nicht als Hexe verbrannt, sondern als rückfällige Ketzerin. Der Vorwurf der Zauberei tauchte in den ursprünglichen 70 Artikeln auf, etwa im Zusammenhang mit einem Feenbaum bei Domrémy, spielte im Urteil aber keine tragende Rolle. Ebenso wenig stimmt, dass „die Kirche“ als Ganzes sie verurteilt habe: Das Gericht war politisch zusammengesetzt und arbeitete im Interesse der englischen Krone; eine Berufung an den Papst, die Jeanne verlangte, wurde übergangen. Oft wird auch behauptet, sie sei gefoltert worden. Belegt ist nur die Drohung mit der Folter. Unsicher bleibt, ob sie die Abschwörungsformel, die in den Akten steht, in dieser Länge tatsächlich unterschrieben hat; Zeugen sprachen 1456 von einem viel kürzeren Text.",
  "bedeutung": "Der Fall zeigt beispielhaft, wie ein Glaubensverfahren politischen Zwecken dienen konnte, und ist zugleich ein frühes Beispiel dafür, dass ein Fehlurteil förmlich aufgehoben wurde. Der Revisionsprozess beruhte auf der Prüfung von Verfahrensfehlern, nicht auf einem Gnadenakt. Die Akten machten Jeanne im 19. Jahrhundert, nach der Edition durch Jules Quicherat, zu einer der bekanntesten Gestalten des Mittelalters. 1909 wurde sie selig-, 1920 heiliggesprochen.",
  "zeitleiste": [
   {
    "datum": "23. Mai 1430",
    "jahr": 1430,
    "text": "Gefangennahme bei Compiègne durch burgundische Truppen."
   },
   {
    "datum": "21. Februar 1431",
    "jahr": 1431,
    "text": "Beginn der öffentlichen Verhöre in Rouen unter Bischof Pierre Cauchon."
   },
   {
    "datum": "9. Mai 1431",
    "jahr": 1431,
    "text": "Jeanne werden die Folterwerkzeuge gezeigt; angewandt werden sie nicht."
   },
   {
    "datum": "24. Mai 1431",
    "jahr": 1431,
    "text": "Abschwörung auf dem Friedhof von Saint-Ouen, Urteil auf lebenslange Haft."
   },
   {
    "datum": "30. Mai 1431",
    "jahr": 1431,
    "text": "Verbrennung als rückfällige Ketzerin auf dem Place du Vieux-Marché."
   },
   {
    "datum": "1455",
    "jahr": 1455,
    "text": "Papst Calixtus III. lässt das Revisionsverfahren zu."
   },
   {
    "datum": "7. Juli 1456",
    "jahr": 1456,
    "text": "Das Urteil von 1431 wird in Rouen für nichtig erklärt."
   },
   {
    "datum": "16. Mai 1920",
    "jahr": 1920,
    "text": "Heiligsprechung durch Papst Benedikt XV."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Saint Joan of Arc",
   "Régine Pernoud, Marie-Véronique Clin: Jeanne d'Arc, Paris: Fayard 1986",
   "Pierre Duparc (Hrsg.): Procès en nullité de la condamnation de Jeanne d'Arc, 5 Bde., Paris 1977–1988",
   "Gerd Krumeich: Jeanne d'Arc. Seherin, Kriegerin, Heilige, München: C. H. Beck 2021"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/prozess-jeanne-darc-0.jpg",
    "breite": 900,
    "hoehe": 1001,
    "zeigt": "Randzeichnung des Pariser Parlamentsschreibers Clément de Fauquembergue im Register vom 10. Mai 1429 – die einzige Darstellung zu Lebzeiten, gezeichnet von jemandem, der Jeanne nie gesehen hatte",
    "urheber": "Clément de Fauquembergue, Registre du Parlement de Paris",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Jeanne_d%27Arc-Fauquembergue.jpg"
   },
   {
    "datei": "bilder/dark/prozess-jeanne-darc-1.jpg",
    "breite": 900,
    "hoehe": 600,
    "zeigt": "Der erhaltene Donjon der Burg von Rouen, heute „Tour Jeanne d'Arc“; hier wurde ihr am 9. Mai 1431 mit der Folter gedroht. Gefangen gehalten wurde sie in einem anderen, nicht erhaltenen Turm der Burg",
    "urheber": "Txllxt TxllxT",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Rouen_-_Rue_du_Donjon_-_View_SE_on_Tour_Jeanne_d%27Arc%2C_where_Jeanne_d%27Arc_was_imprisoned_in_1430.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "spanische-inquisition",
  "rubrik": "hexen",
  "unterart": "Institution",
  "titel": "Die Spanische Inquisition",
  "untertitel": "Glaubensgericht der spanischen Krone, 1478–1834",
  "jahr": 1478,
  "zeitraum": "1478–1834",
  "ort": "Sevilla",
  "land": "Spanien",
  "lat": 37.3886,
  "lon": -5.9823,
  "ortQuelle": "https://en.wikipedia.org/wiki/Seville",
  "status": null,
  "kurz": "Sie verfolgte vor allem getaufte Juden und Muslime und forderte nach heutiger Forschung einige tausend Todesopfer – weniger als die Legende behauptet, aber in den ersten Jahrzehnten sehr viele.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Nach den Pogromen von 1391 waren in Kastilien und Aragón Zehntausende Juden zum Christentum übergetreten, viele unter Zwang. Diese „Conversos“ standen im Verdacht, heimlich jüdisch zu leben. Auf Bitten Isabellas von Kastilien und Ferdinands von Aragón erlaubte Papst Sixtus IV. am 1. November 1478 mit der Bulle „Exigit sinceras devotionis affectus“ eine Inquisition, deren Richter die Krone ernannte. Anders als die mittelalterliche Inquisition war sie damit ein Instrument des Staates. 1480 nahm in Sevilla das erste Tribunal die Arbeit auf, 1483 wurde der Dominikaner Tomás de Torquemada Generalinquisitor."
   },
   {
    "titel": "Verfahren",
    "text": "Das Verfahren begann meist mit einem Gnadenedikt, das zur Selbstanzeige und zur Anzeige anderer aufforderte. Die Namen der Belastungszeugen blieben den Angeklagten verborgen, das Vermögen wurde beschlagnahmt, die Haft konnte Jahre dauern. Folter war erlaubt, nach den Akten aber in einer Minderheit der Fälle angewandt und an Regeln gebunden. Die Urteile wurden in öffentlichen Glaubensakten, den Autos de fe, verkündet. Die meisten Verurteilten erhielten Bußen, Geldstrafen, das Bußgewand „Sambenito“, Galeerendienst oder Haft. Wer zum Tode verurteilt war, wurde der weltlichen Obrigkeit übergeben und verbrannt; wer bereute, wurde vorher erdrosselt."
   },
   {
    "titel": "Die Opfer",
    "text": "In den ersten Jahrzehnten traf die Inquisition fast ausschließlich Conversos, besonders in Andalusien. Das erste Auto de fe fand am 6. Februar 1481 in Sevilla statt. Später rückten die Morisken, getaufte Muslime, ins Zentrum, außerdem Protestanten, die in den 1550er Jahren in Sevilla und Valladolid verfolgt wurden, sowie Bigamie, Gotteslästerung, Sexualdelikte und verbotene Bücher. Die Inquisition stand in einem engen Zusammenhang mit der Vertreibung der Juden 1492 und der Morisken ab 1609, ordnete diese aber nicht selbst an. Hexerei verfolgte sie vergleichsweise zurückhaltend."
   },
   {
    "titel": "Was die Zahlen sagen",
    "text": "Die Inquisition hinterließ umfangreiche Akten. Gustav Henningsen und Jaime Contreras werteten für die Jahre 1540 bis 1700 die Berichte von 44.674 Verfahren aus: Darin stehen 1.604 Todesurteile, davon 826 an Personen vollstreckte und 778 an Bildnissen von Geflohenen oder Verstorbenen; die tatsächlich Hingerichteten machen also etwa 1,8 Prozent der Verfahren aus. Für die Zeit vor 1530 sind die Akten lückenhaft, die Todesrate lag damals deutlich höher. Schätzungen für die gesamte Bestehenszeit reichen von etwa 3.000 Hinrichtungen bei Henry Kamen über 4.000 bis 5.000 bei Ricardo García Cárcel bis zu einer Obergrenze von 10.000 bei Joseph Pérez. Der größere Teil fällt in die ersten fünfzig Jahre."
   },
   {
    "titel": "Ende und Aufarbeitung",
    "text": "Im 18. Jahrhundert verlor die Behörde an Bedeutung. Napoleon schaffte sie im Dezember 1808 ab, die Cortes von Cádiz 1813 ebenfalls; König Ferdinand VII. führte sie 1814 wieder ein; 1820 wurde sie erneut aufgehoben und danach nicht mehr förmlich hergestellt. Als letztes Todesopfer gilt der Lehrer Cayetano Ripoll, der 1826 in Valencia als Deist hingerichtet wurde; verurteilt hatte ihn allerdings eine diözesane Glaubensjunta, in der frühere Inquisitoren saßen. Am 15. Juli 1834 wurde die Inquisition endgültig aufgelöst. Seit den 1970er Jahren hat die systematische Auswertung der Archive, vor allem im Archivo Histórico Nacional in Madrid, das Bild grundlegend versachlicht."
   }
  ],
  "legende": "Das Bild einer allgegenwärtigen Folter- und Mordmaschine mit Hunderttausenden Toten entstand großenteils in der Propaganda der Gegner Spaniens im 16. Jahrhundert, etwa in der 1567 in Heidelberg erschienenen Schrift eines Reginaldus Gonsalvius Montanus, die in den Niederlanden und England weite Verbreitung fand. Der spanische Publizist Julián Juderías machte 1914 dafür den Begriff „Schwarze Legende“ populär. Auch die Zahl von fast 32.000 Verbrannten, die der frühere Inquisitionssekretär Juan Antonio Llorente 1817 angab, gilt heute als stark überhöht. Umgekehrt ist die Entlastung nicht grenzenlos: Die Verfolgung der Conversos zerstörte Tausende Familien, und das Klima von Denunziation und Abstammungsprüfungen prägte Spanien über Generationen.",
  "bedeutung": "Die Spanische Inquisition war eine der ersten zentral verwalteten Behörden Europas mit einheitlichen Instruktionen, Berufungsinstanz und lückenloser Aktenführung. Das hatte paradoxe Folgen: Dieselbe Bürokratie, die Menschen wegen ihres Glaubens verfolgte, prüfte Hexereivorwürfe so streng, dass Spanien von der großen Hexenverfolgung weitgehend verschont blieb. Ihre Akten zählen heute zu den wichtigsten Quellen für den Alltag und die Mentalität der frühen Neuzeit.",
  "zeitleiste": [
   {
    "datum": "1. November 1478",
    "jahr": 1478,
    "text": "Papst Sixtus IV. erlaubt der spanischen Krone die Einsetzung von Inquisitoren."
   },
   {
    "datum": "6. Februar 1481",
    "jahr": 1481,
    "text": "Erstes Auto de fe in Sevilla."
   },
   {
    "datum": "1483",
    "jahr": 1483,
    "text": "Tomás de Torquemada wird Generalinquisitor."
   },
   {
    "datum": "1492",
    "jahr": 1492,
    "text": "Vertreibung der Juden aus den spanischen Königreichen."
   },
   {
    "datum": "1567",
    "jahr": 1567,
    "text": "Die Schrift des Reginaldus Gonsalvius Montanus begründet die Polemik gegen die Inquisition."
   },
   {
    "datum": "1808–1814",
    "jahr": 1808,
    "text": "Abschaffung durch Napoleon und die Cortes von Cádiz, Wiedereinführung 1814."
   },
   {
    "datum": "1826",
    "jahr": 1826,
    "text": "Hinrichtung von Cayetano Ripoll in Valencia durch eine Glaubensjunta; er gilt als letztes Todesopfer der Inquisition."
   },
   {
    "datum": "15. Juli 1834",
    "jahr": 1834,
    "text": "Endgültige Auflösung."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Spanish Inquisition",
   "Henry Kamen: The Spanish Inquisition. A Historical Revision, 4. Aufl., New Haven: Yale University Press 2014",
   "Joseph Pérez: The Spanish Inquisition. A History, London: Profile Books 2004",
   "Gustav Henningsen, Jaime Contreras: Forty-Four Thousand Cases of the Spanish Inquisition (1540–1700), in: Henningsen/Tedeschi (Hrsg.): The Inquisition in Early Modern Europe, 1986"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/spanische-inquisition-0.jpg",
    "breite": 900,
    "hoehe": 570,
    "zeigt": "Francisco Rizi: Auto de fe auf der Plaza Mayor in Madrid am 30. Juni 1680, Gemälde von 1683 (Museo del Prado); zu sehen ist die Urteilsverkündung vor dem König, Verurteilte im Sambenito",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Francisco_rizi-auto_de_fe.jpg"
   },
   {
    "datei": "bilder/dark/spanische-inquisition-1.jpg",
    "breite": 744,
    "hoehe": 1100,
    "zeigt": "Titelblatt einer Madrider Ausgabe der Instruktionen Torquemadas und seiner Nachfolger, 1667 (Biblioteca Nacional de España)",
    "urheber": "http://catalogo.bne.es/uhtbin/cgisirsi/0/x/0/05?searchdata1=bima0000107001",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Compilaci%C3%B3n_de_las_instrucciones_del_oficio_de_la_Santa_Inquisici%C3%B3n_hechas_por_dicho_Torquemada_1667.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hexenhammer",
  "rubrik": "hexen",
  "unterart": "Schrift",
  "titel": "Der Hexenhammer",
  "untertitel": "Heinrich Kramers „Malleus maleficarum“, Speyer 1486",
  "jahr": 1486,
  "zeitraum": "1484–1669 (Bulle bis letzte Ausgabe der Frühzeit)",
  "ort": "Speyer",
  "land": "Deutschland",
  "lat": 49.3172,
  "lon": 8.4311,
  "ortQuelle": "https://en.wikipedia.org/wiki/Speyer",
  "status": null,
  "kurz": "Das berüchtigtste Buch der Hexenverfolgung war das Werk eines in Innsbruck gescheiterten Inquisitors – nie amtlich, aber gedruckt und vielfach nachgedruckt.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Heinrich Kramer, latinisiert Institoris, war ein Dominikaner aus Schlettstadt im Elsass und seit den 1470er Jahren päpstlicher Inquisitor in Oberdeutschland. Er erwirkte 1484 von Papst Innozenz VIII. die Bulle „Summis desiderantes affectibus“, die ihm und seinem Ordensbruder Jakob Sprenger Vollmacht gab, in den Kirchenprovinzen Mainz, Köln, Trier, Salzburg und Bremen gegen Zauberei vorzugehen. Die Bulle beklagte, Geistliche und Laien behinderten die Inquisitoren. Kramer sollte sie später dem Hexenhammer voranstellen, als habe der Papst das Buch gebilligt, was nicht zutrifft."
   },
   {
    "titel": "Das Scheitern in Innsbruck",
    "text": "1485 führte Kramer in Innsbruck einen Hexenprozess gegen mehrere Frauen. Seine Befragungen, die sich auf das Sexualleben der Beschuldigten richteten, stießen auf Widerstand. Eine vom Brixener Bischof Georg Golser eingesetzte Kommission stellte Verfahrensfehler fest, die Frauen kamen frei, und Kramer wurde aus der Diözese gewiesen. Der Bischof nannte ihn in einem Brief aus Altersgründen kindisch. Aus dieser Niederlage heraus schrieb Kramer sein Buch: als Rechtfertigung und als Anleitung, damit sich ein solcher Fehlschlag nicht wiederhole."
   },
   {
    "titel": "Das Buch",
    "text": "Der „Malleus maleficarum“ erschien Ende 1486 oder Anfang 1487 bei Peter Drach in Speyer. Er hat drei Teile: Der erste soll beweisen, dass es Hexen gibt, und erklärt das Bestreiten zur Ketzerei; der zweite schildert Teufelspakt, Schadenzauber und Gegenmittel; der dritte ist eine Verfahrensordnung mit Regeln für Verhör, Folter und Urteil. Neu war die Zuspitzung auf Frauen, die Kramer mit frauenfeindlichen Topoi begründete, bis hin zu einer falschen Herleitung des Wortes „femina“. Ebenfalls auffällig ist die Empfehlung, die Verfahren weltlichen Gerichten zu überlassen."
   },
   {
    "titel": "Rezeption",
    "text": "Eine Billigung durch die Kirche erhielt das Buch nie. Ein Gutachten der Kölner Theologischen Fakultät von 1487, das Kramer beifügte, war nach heutiger Forschung zumindest teilweise manipuliert. Jakob Sprengers Mitautorschaft gilt vielen Historikern, darunter Wolfgang Behringer, als zweifelhaft; Kramer hat das Werk wohl allein verfasst. Dennoch verbreitete es sich rasch: Bis 1520 erschienen rund ein Dutzend Ausgaben, nach einer Pause folgten ab 1574 weitere bis 1669, insgesamt etwa dreißig. Andere Gelehrte wie Johann Weyer griffen es heftig an, und die Spanische Inquisition warnte ihre Richter 1538, nicht alles darin zu glauben. Kramer starb um 1505 in Mähren."
   },
   {
    "titel": "Die Opfer der Verfolgung",
    "text": "Der Hexenhammer hat die Verfolgung nicht ausgelöst und nicht allein getragen; die großen Wellen kamen erst nach 1560, Jahrzehnte nach den ersten Auflagen. Nach der heutigen Forschung, etwa bei Brian Levack und Wolfgang Behringer, gab es in Europa zwischen 1450 und 1750 rund 100.000 Hexenprozesse, von denen schätzungsweise 40.000 bis 60.000 mit einer Hinrichtung endeten. Etwa drei Viertel der Opfer waren Frauen, regional schwankte der Anteil stark. Fast die Hälfte der Hinrichtungen fällt auf das Gebiet des Heiligen Römischen Reiches."
   }
  ],
  "legende": "Die Zahl von neun Millionen Hexenopfern, die bis heute kursiert, ist widerlegt. Sie geht auf den Quedlinburger Gottfried Christian Voigt zurück, der 1784 aus den Prozesszahlen eines einzelnen Ortes auf ganz Europa hochrechnete; im 19. und 20. Jahrhundert wurde sie unter anderem in der nationalsozialistischen Propaganda und in Teilen der Frauenbewegung weitergetragen. Ebenso falsch ist die Vorstellung, der Hexenhammer sei ein kirchliches Gesetzbuch gewesen. Er war eine Privatschrift, die Theologen und Juristen zitierten, kritisierten oder ignorierten. Und die Verfolgung war kein Werk des „finsteren Mittelalters“: Ihr Höhepunkt lag zwischen etwa 1560 und 1630.",
  "bedeutung": "Der Hexenhammer bündelte die neue Lehre von der Hexe als Teufelsverbündeter zu einem Handbuch und machte sie durch den Buchdruck verfügbar. Seine Bedeutung liegt weniger in einer direkten Wirkung auf einzelne Prozesse als darin, dass er dem Hexenglauben ein gelehrtes, juristisch verwertbares Gerüst gab, auf das spätere Autoren aufbauten. Zugleich ist er ein frühes Beispiel dafür, wie ein Einzelner mit einer gedruckten Schrift den Anschein amtlicher Autorität erzeugen konnte.",
  "zeitleiste": [
   {
    "datum": "5. Dezember 1484",
    "jahr": 1484,
    "text": "Papst Innozenz VIII. erlässt die Bulle „Summis desiderantes affectibus“."
   },
   {
    "datum": "1485",
    "jahr": 1485,
    "text": "Kramers Hexenprozess in Innsbruck scheitert; der Bischof von Brixen weist ihn aus."
   },
   {
    "datum": "1486/87",
    "jahr": 1486,
    "text": "Erstdruck des „Malleus maleficarum“ bei Peter Drach in Speyer."
   },
   {
    "datum": "1487",
    "jahr": 1487,
    "text": "Kramer fügt ein teils manipuliertes Gutachten der Kölner Theologen bei."
   },
   {
    "datum": "um 1505",
    "jahr": 1505,
    "text": "Heinrich Kramer stirbt in Mähren."
   },
   {
    "datum": "1574",
    "jahr": 1574,
    "text": "Nach Jahrzehnten ohne Neuausgabe erscheint das Buch wieder in neuen Drucken."
   },
   {
    "datum": "1669",
    "jahr": 1669,
    "text": "Letzte Ausgabe der frühen Neuzeit in Lyon."
   },
   {
    "datum": "2000",
    "jahr": 2000,
    "text": "Erste kommentierte deutsche Neuübersetzung durch Behringer, Jerouschek und Tschacher."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Malleus maleficarum",
   "Heinrich Kramer (Institoris): Der Hexenhammer. Neu übers. und kommentiert von Wolfgang Behringer, Günter Jerouschek, Werner Tschacher, München: dtv 2000",
   "Wolfgang Behringer: Hexen. Glaube, Verfolgung, Vermarktung, München: C. H. Beck",
   "Brian P. Levack: The Witch-Hunt in Early Modern Europe, 4. Aufl. 2016"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hexenhammer-0.jpg",
    "breite": 900,
    "hoehe": 722,
    "zeigt": "Titelseite der Kölner Ausgabe von 1520 (University of Sydney)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Malleus_maleficarum%2C_K%C3%B6ln_1520%2C_Titelseite.jpg"
   },
   {
    "datei": "bilder/dark/hexenhammer-1.jpg",
    "breite": 770,
    "hoehe": 1100,
    "zeigt": "Titelseite der Lyoner Ausgabe von 1669, der letzten der frühen Neuzeit",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Malleus_maleficarum%2C_Lyon_1669%2C_Titelseite.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "trierer-hexenprozesse",
  "rubrik": "hexen",
  "unterart": "Verfolgungswelle",
  "titel": "Die Trierer Hexenprozesse",
  "untertitel": "Kurtrier und St. Maximin 1581–1593, der Fall Dietrich Flade",
  "jahr": 1581,
  "zeitraum": "1581–1593, Höhepunkt 1586–1593",
  "ort": "Trier",
  "land": "Deutschland",
  "lat": 49.7567,
  "lon": 6.6414,
  "ortQuelle": "https://en.wikipedia.org/wiki/Trier",
  "status": null,
  "kurz": "Eine der frühesten großen Verfolgungswellen im Reich: Hunderte Tote in wenigen Jahren, darunter der höchste Richter der Stadt, der zu milde geurteilt haben soll.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "1581 wurde Johann von Schönenberg Erzbischof und Kurfürst von Trier. Er betrieb eine strenge katholische Erneuerung, ließ Protestanten und Juden ausweisen und duldete und förderte die Hexenverfolgung. In den 1580er Jahren folgten im Moselland mehrere Missernten, Viehseuchen und Teuerungen aufeinander. In den Dörfern bildeten sich Ausschüsse, die auf Verfolgung drängten, Anzeigen sammelten und die Gerichte unter Druck setzten. Besonders hart traf es die Reichsabtei St. Maximin vor den Toren Triers, deren Amtmann Claudius Musiel seine Laufbahn auf Hexenprozesse gründete."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Die Prozesse folgten dem Muster, das Friedrich Spee später beschrieb: Folter erzwang Geständnisse, die Geständnisse mussten Mitschuldige nennen, die Genannten wurden verhaftet. So griff die Verfolgung von den Dörfern auf die Stadt über und erreichte Schöffen, Ratsherren und Geistliche. Der Trierer Weihbischof Peter Binsfeld lieferte die gelehrte Begründung. Sein „Tractatus de confessionibus maleficorum et sagarum“ von 1589 erklärte Besagungen, also Benennungen durch Geständige, für ausreichenden Grund zu Verhaftung und Folter. Das Buch erschien 1591 erweitert und wurde ins Deutsche übersetzt."
   },
   {
    "titel": "Dietrich Flade",
    "text": "Dietrich Flade, um 1534 in Trier geboren, war kurfürstlicher Rat, Stadtschultheiß und damit oberster Richter der Stadt, 1586 auch Rektor der Universität. Er hatte selbst Hexenprozessen vorgesessen, galt aber als zurückhaltend. 1587 wurde er durch die Aussage eines Jungen beschuldigt, den Hexensabbat angeführt zu haben, weitere Besagungen folgten. Ein Fluchtversuch 1588 scheiterte, 1589 wurde er verhaftet und gefoltert und gestand. Am 18. September 1589 wurde er auf der Richtstätte bei Euren erdrosselt und verbrannt. Sein Vermögen wurde eingezogen. Der Fall eines so mächtigen Mannes zeigte, dass die Prozesse niemanden verschonten."
   },
   {
    "titel": "Die Opfer",
    "text": "Wie viele Menschen starben, lässt sich nur schätzen, weil viele Akten verloren sind. Nach Rita Voltmer wurden allein im kleinen Gebiet der Abtei St. Maximin innerhalb von zehn Jahren nahezu 400 Menschen verbrannt. Für ganz Kurtrier sind zwischen 1487 und 1660 rund 800 Prozesse sicher belegt, die tatsächliche Zahl lag deutlich höher. Der Chronist Johann Linden berichtete, in einzelnen Dörfern seien kaum noch Frauen übrig geblieben; solche Angaben gelten als zugespitzt, zeigen aber, wie die Zeitgenossen die Welle erlebten. Unter den Opfern waren mehrheitlich Frauen, aber auch viele Männer, darunter Angehörige der städtischen Oberschicht."
   },
   {
    "titel": "Gegenstimmen",
    "text": "Der niederländische Theologe Cornelius Loos, der in Trier lehrte, schrieb 1592 die Schrift „De vera et falsa magia“. Er bestritt, dass es Hexenflug, Teufelsbuhlschaft und Sabbat gebe, und nannte die Folter ein Mittel, mit dem man Unschuldigen das Blut abpresse. Die Handschrift wurde beschlagnahmt, bevor sie gedruckt werden konnte. Loos wurde verhaftet und musste am 15. März 1593 vor Binsfeld und anderen Würdenträgern in St. Maximin widerrufen. Er starb 1595 in Brüssel; manche Darstellungen nennen 1596. Seine Schrift galt lange als verloren; Teile entdeckte der amerikanische Historiker George Lincoln Burr 1886 in einer Trierer Bibliothek."
   }
  ],
  "legende": "Häufig heißt es, Flade sei als Gegner der Hexenprozesse hingerichtet worden. Das ist zu einfach: Er hatte selbst Verfahren geleitet und Todesurteile mitgetragen. Was ihn gefährdete, war der Ruf der Milde, seine Machtstellung und eine Rivalität im Umfeld des Kurfürsten. Auch die oft genannte Zahl von 368 Verbrannten in 22 Dörfern stammt aus Lindens Chronik und ist keine geprüfte Statistik. Gesichert ist, dass die Trierer Prozesse zu den frühesten Massenverfolgungen im Reich gehören und als „reichskundiges Exempel“ andernorts, etwa in Bayern, als Vorbild dienten. Ein Flugblatt mit dem „Trierer Hexentanzplatz“ verbreitete 1594 die Vorstellung vom Sabbat weit über die Region hinaus.",
  "bedeutung": "Trier lieferte der Verfolgung im Reich ein Modell: die Kettenreaktion durch Besagungen, die Dorfausschüsse und mit Binsfelds Traktat die gelehrte Rechtfertigung. Zugleich entstanden hier mit Loos' Schrift und dem Fall Flade frühe Belege dafür, dass schon Zeitgenossen das Verfahren selbst für falsch hielten. Die Stadt Trier erinnert heute mit einer Gedenktafel am Simeonstift an die Opfer.",
  "zeitleiste": [
   {
    "datum": "1581",
    "jahr": 1581,
    "text": "Johann von Schönenberg wird Erzbischof und Kurfürst von Trier."
   },
   {
    "datum": "1586",
    "jahr": 1586,
    "text": "Beginn der Massenprozesse in St. Maximin; Flade wird Rektor der Universität."
   },
   {
    "datum": "1587",
    "jahr": 1587,
    "text": "Erste Beschuldigung Flades durch die Aussage eines Jungen."
   },
   {
    "datum": "1589",
    "jahr": 1589,
    "text": "Binsfelds Traktat über die Geständnisse der Hexen erscheint in Trier."
   },
   {
    "datum": "18. September 1589",
    "jahr": 1589,
    "text": "Dietrich Flade wird bei Euren erdrosselt und verbrannt."
   },
   {
    "datum": "1592",
    "jahr": 1592,
    "text": "Cornelius Loos schreibt „De vera et falsa magia“; das Manuskript wird beschlagnahmt."
   },
   {
    "datum": "15. März 1593",
    "jahr": 1593,
    "text": "Loos muss in St. Maximin widerrufen."
   },
   {
    "datum": "1594",
    "jahr": 1594,
    "text": "Ein Flugblatt vom „Trierer Hexentanzplatz“ verbreitet die Trierer Prozesse im Reich."
   }
  ],
  "quellen": [
   "Rita Voltmer: Hexenverfolgungen in Trier/Kurtrier und St. Maximin, in: Hexenwahn. Ängste der Neuzeit, Deutsches Historisches Museum, Berlin 2002",
   "Gunther Franz, Franz Irsigler (Hrsg.): Hexenglaube und Hexenprozesse im Raum Rhein-Mosel-Saar, Trier 1995",
   "George Lincoln Burr: The Fate of Dietrich Flade, New York 1891",
   "H. C. Erik Midelfort: Witch Hunting in Southwestern Germany 1562–1684, Stanford 1972"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/trierer-hexenprozesse-0.jpg",
    "breite": 786,
    "hoehe": 1100,
    "zeigt": "Titelblatt der deutschen Übersetzung von Peter Binsfelds Traktat „Von Bekanntnuß der Zauberer und Hexen“, München 1592",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Binsfeld_Traktat.JPG"
   },
   {
    "datei": "bilder/dark/trierer-hexenprozesse-1.jpg",
    "breite": 843,
    "hoehe": 1100,
    "zeigt": "Gedenktafel für die Opfer der Hexenprozesse am Stadtmuseum Simeonstift neben der Porta Nigra",
    "urheber": "Hegeler",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Trier_Gedenktafel_Opfer_der_Hexenprozesse_2015.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hexenprozesse-logrono",
  "rubrik": "hexen",
  "unterart": "Kritiker",
  "titel": "Die baskischen Hexenprozesse",
  "untertitel": "Logroño 1609–1614 und der Inquisitor Alonso de Salazar Frías",
  "jahr": 1609,
  "zeitraum": "1609–1614",
  "ort": "Logroño und Zugarramurdi",
  "land": "Spanien",
  "lat": 42.4653,
  "lon": -2.4456,
  "ortQuelle": "https://en.wikipedia.org/wiki/Logro%C3%B1o",
  "status": null,
  "kurz": "Die größte Hexenverfolgung Spaniens endete nicht mit Massenhinrichtungen, sondern mit einem Inquisitor, der rund 1.800 Aussagen prüfte und keinen einzigen Beweis fand.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Ende 1608 brachen im navarresischen Grenzdorf Zugarramurdi Anschuldigungen aus: Eine aus Frankreich zurückgekehrte junge Frau berichtete von Hexenversammlungen, mehrere Dorfbewohner gestanden unter dem Druck der Gemeinde. Die Gerüchte kamen aus dem benachbarten französischen Labourd, wo der Richter Pierre de Lancre 1609 eine Hexenjagd mit zahlreichen Verbrennungen führte. Zuständig auf spanischer Seite war das Inquisitionstribunal in Logroño mit drei Inquisitoren: Alonso Becerra Holguín, Juan del Valle Alvarado und dem jüngsten, dem Juristen Alonso de Salazar Frías, der erst 1609 hinzukam."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Valle Alvarado bereiste 1609 die Täler und sammelte Aussagen, die Zahl der Beschuldigten wuchs rasch. In den Dörfern beschuldigten sich Nachbarn und Verwandte, Predigten verbreiteten die Angst weiter, Kinder berichteten von nächtlichen Flügen zum Sabbat, dem „Akelarre“. Die Verhafteten wurden nach Logroño gebracht, wo einige in der Haft starben. Am 7. und 8. November 1610 hielt das Tribunal in Logroño ein großes Auto de fe ab, zu dem nach zeitgenössischen Angaben Tausende Zuschauer kamen. Unter den 31 vorgeführten Hexereiangeklagten wurden elf zum Tod verurteilt: sechs wurden verbrannt, weil sie nicht gestanden hatten, fünf, die in der Haft gestorben waren, im Bildnis."
   },
   {
    "titel": "Salazars Untersuchung",
    "text": "Schon im Urteil hatte Salazar Bedenken angemeldet. 1611 erließ die oberste Inquisitionsbehörde, die Suprema, ein Gnadenedikt und schickte ihn auf eine Visitation, die von Mai 1611 bis Januar 1612 dauerte. Nach den Akten, die Gustav Henningsen ausgewertet hat, meldeten sich rund 1.800 Menschen, darunter mehr als 1.300 Kinder und Jugendliche; viele widerriefen frühere Geständnisse. Salazar prüfte die Aussagen wie ein Ermittler: Er ließ angebliche Hexensalben untersuchen, verglich Ortsangaben und befragte Zeugen getrennt. Seine Bilanz lautete sinngemäß, er habe nicht einmal Anzeichen gefunden, aus denen sich schließen ließe, dass auch nur eine einzige Hexerei wirklich geschehen sei."
   },
   {
    "titel": "Gegenstimmen",
    "text": "Salazars Kollegen Becerra und Valle widersprachen heftig und hielten an der Realität der Hexensabbate fest. In mehreren Gutachten an die Suprema legte Salazar dar, dass die Geständnisse sich widersprachen, aus Angst oder unter Druck zustande gekommen seien und dass die Verfolgung selbst die Hexerei erst hervorbringe: Bevor darüber gepredigt und geschrieben worden sei, habe es keine Hexen gegeben. Unterstützung fand er beim Generalinquisitor Bernardo de Sandoval y Rojas und beim Humanisten Pedro de Valencia, der ebenfalls ein kritisches Gutachten schrieb. Salazar starb 1636 als Mitglied der Suprema."
   },
   {
    "titel": "Ende und Aufarbeitung",
    "text": "Am 29. August 1614 erließ die Suprema neue Instruktionen für Hexereiverfahren. Geständnisse durften nicht mehr allein als Beweis dienen, äußere Beweise mussten gesucht, Widerrufe ernst genommen werden, und die Vermögensbeschlagnahme wurde ausgesetzt. Die noch laufenden Verfahren wurden eingestellt. In der Folge wurden im Bereich der Spanischen Inquisition praktisch keine Menschen mehr wegen Hexerei hingerichtet. Wiederentdeckt hat den Fall der dänische Volkskundler Gustav Henningsen, dessen Studie „The Witches' Advocate“ 1980 erschien."
   }
  ],
  "legende": "Zugarramurdi gilt heute als „Hexendorf“, und die Höhle am Ortsrand wird als Ort der Akelarres vermarktet. Dass dort tatsächlich Versammlungen stattfanden, ist nicht belegt; die Höhle erscheint in Aussagen, die Salazar gerade als unzuverlässig erkannte. Ebenso ist der Name „Hexenanwalt“ für Salazar eine moderne Zuspitzung: Er verteidigte nicht die Angeklagten im Prozess, sondern zweifelte als Richter an den Beweisen, und er bestritt nicht grundsätzlich, dass es Hexerei geben könne. Die genauen Zahlen der Visitation schwanken je nach Zählung in der Literatur leicht; die Größenordnung von rund 1.800 Befragten ist durch Henningsens Aktenstudium gut belegt.",
  "bedeutung": "Logroño ist eines der wenigen Beispiele, in denen eine Hexenverfolgung auf ihrem Höhepunkt von innen gestoppt wurde, und zwar durch Aktenprüfung, nicht durch ein Machtwort. Salazars Argument, dass das Reden über Hexen die Hexen erst hervorbringe, nahm Einsichten vorweg, die die Forschung zu Massenpaniken und Falschgeständnissen heute bestätigt. Die Instruktionen von 1614 sind ein Hauptgrund dafür, dass Spanien von den großen Hexenverfolgungen weitgehend verschont blieb.",
  "zeitleiste": [
   {
    "datum": "Ende 1608",
    "jahr": 1608,
    "text": "Erste Anschuldigungen in Zugarramurdi."
   },
   {
    "datum": "1609",
    "jahr": 1609,
    "text": "Das Tribunal von Logroño ermittelt; Salazar wird dritter Inquisitor."
   },
   {
    "datum": "7.–8. November 1610",
    "jahr": 1610,
    "text": "Auto de fe in Logroño, sechs Verurteilte werden verbrannt, fünf im Bildnis."
   },
   {
    "datum": "Mai 1611",
    "jahr": 1611,
    "text": "Gnadenedikt und Beginn von Salazars Visitation."
   },
   {
    "datum": "Januar 1612",
    "jahr": 1612,
    "text": "Salazar kehrt mit rund 1.800 Aussagen zurück und meldet Zweifel."
   },
   {
    "datum": "29. August 1614",
    "jahr": 1614,
    "text": "Neue Instruktionen der Suprema beenden die Verfolgung."
   },
   {
    "datum": "1980",
    "jahr": 1980,
    "text": "Gustav Henningsen veröffentlicht „The Witches' Advocate“."
   }
  ],
  "quellen": [
   "Gustav Henningsen: The Witches' Advocate. Basque Witchcraft and the Spanish Inquisition (1609–1614), Reno: University of Nevada Press 1980",
   "Gustav Henningsen (Hrsg.): The Salazar Documents. Inquisitor Alonso de Salazar Frías and Others on the Basque Witch Persecution, Leiden: Brill 2004",
   "Henry Kamen: The Spanish Inquisition. A Historical Revision, New Haven 2014",
   "Brian P. Levack: The Witch-Hunt in Early Modern Europe, 4. Aufl. 2016"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hexenprozesse-logrono-0.jpg",
    "breite": 900,
    "hoehe": 675,
    "zeigt": "Die Höhle von Zugarramurdi, die in den Aussagen von 1609/10 als Versammlungsort genannt wird",
    "urheber": "Aloneibar",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Cueva_akelarre.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hexen-von-pendle",
  "rubrik": "hexen",
  "unterart": "Prozess",
  "titel": "Die Hexen von Pendle",
  "untertitel": "Der Prozess von Lancaster, 1612",
  "jahr": 1612,
  "zeitraum": "März bis August 1612",
  "ort": "Pendle Hill und Lancaster",
  "land": "Großbritannien",
  "lat": 53.8686,
  "lon": -2.2983,
  "ortQuelle": "https://en.wikipedia.org/wiki/Pendle_Hill",
  "status": null,
  "kurz": "Ein Streit mit einem Hausierer brachte zwei verarmte Familien vor Gericht. Ein neunjähriges Kind wurde zur Hauptzeugin, zehn Menschen wurden in Lancaster gehängt.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Der Wald von Pendle in Lancashire war um 1600 eine arme, abgelegene Gegend, in der der Katholizismus noch stark war. Jakob VI. von Schottland, seit 1603 als Jakob I. auch König von England, hatte 1597 eine Abhandlung über Dämonologie veröffentlicht, 1604 verschärfte ein Gesetz die Strafen für Hexerei, und Friedensrichter waren gehalten, verdächtige Katholiken und Hexen aufzuspüren. In Pendle lebten zwei Familien, die als Heilerinnen und Bettlerinnen bekannt waren und miteinander im Streit lagen: um die alte Elizabeth Southerns, genannt Demdike, mit ihrer Tochter Elizabeth Device und den Enkeln Alizon, James und Jennet, und um Anne Whittle, genannt Chattox, mit ihrer Tochter Anne Redferne."
   },
   {
    "titel": "Der Auslöser",
    "text": "Im März 1612 bat Alizon Device den Hausierer John Law um Stecknadeln. Er verweigerte sie, kurz darauf brach er zusammen und konnte eine Körperseite nicht mehr bewegen, nach heutiger Deutung vermutlich ein Schlaganfall. Alizon glaubte selbst, sie habe ihn verflucht, und gestand. Der Friedensrichter Roger Nowell verhörte die Familie, und die Befragten beschuldigten sich gegenseitig. Demdike, Chattox, Anne Redferne und Alizon kamen nach Lancaster in Haft. Am Karfreitag, dem 10. April 1612, trafen sich Angehörige und Bekannte im Haus Malkin Tower. Nowell deutete das Treffen als Hexenversammlung, die angeblich einen Anschlag auf die Burg von Lancaster geplant habe, und ließ weitere Personen verhaften."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Am 18. und 19. August 1612 verhandelten die Richter Sir Edward Bromley und Sir James Altham die Fälle bei den Assisen in Lancaster. Die wichtigste Zeugin gegen ihre eigene Mutter und ihre Geschwister war die etwa neunjährige Jennet Device. Ihre Mutter soll nach Potts geschrien haben, als das Kind in den Saal geführt wurde, und wurde hinausgebracht. Nach englischem Recht hätten Kinder dieses Alters eigentlich nicht aussagen dürfen; das Gericht berief sich auf die Abhandlung des Königs, nach der bei Hexerei Ausnahmen zulässig seien. Folter war in England nicht erlaubt, doch Geständnisse aus den Vorverhören und gegenseitige Beschuldigungen genügten."
   },
   {
    "titel": "Die Opfer",
    "text": "Elizabeth Southerns starb vor dem Prozess in der Haft. Am 20. August 1612 wurden in Lancaster gehängt: Elizabeth, Alizon und James Device, Anne Whittle, Anne Redferne, Alice Nutter, Katherine Hewitt, Jane und John Bulcock sowie Isabel Robey aus Windle, die nicht zur Pendle-Gruppe gehörte. Alice Gray wurde freigesprochen, Margaret Pearson zum Pranger verurteilt. Jennet Preston aus Gisburn war bereits Ende Juli in York gehängt worden. Alice Nutter fällt aus dem Rahmen, denn sie war eine wohlhabendere Witwe; warum sie angeklagt wurde, ist bis heute ungeklärt."
   },
   {
    "titel": "Gegenstimmen",
    "text": "In derselben Sitzung scheiterte ein anderer Fall. Drei Frauen aus Samlesbury waren von der vierzehnjährigen Grace Sowerbutts schwer belastet worden. Richter Bromley befragte das Mädchen genauer, und es gab zu, dass es zu seinen Aussagen angestiftet worden war; Thomas Potts nennt einen katholischen Priester als Urheber. Die drei Frauen wurden freigesprochen. Die Episode zeigt, dass dieselben Richter Kinderaussagen durchaus prüfen konnten, wenn sie wollten. Jennet Device selbst wurde 1634 im Zuge neuer Anschuldigungen in Pendle ihrerseits der Hexerei beschuldigt; über ihr weiteres Schicksal ist wenig bekannt."
   }
  ],
  "legende": "Was wir wissen, stammt fast ganz aus einer einzigen Quelle: dem Bericht „The Wonderfull Discoverie of Witches in the Countie of Lancaster“, den der Gerichtsschreiber Thomas Potts 1613 im Auftrag der Richter veröffentlichte und den Bromley vor dem Druck durchsah. Er ist daher auch eine Rechtfertigungsschrift. Die bekannten Spitznamen und die Vorstellung einer geheimen Hexensekte am Malkin Tower gehen auf diesen Bericht und die Verhöre zurück. Dass die Angeklagten Heil- und Segenssprüche kannten und einige sich selbst für zauberkundig hielten, ist belegt; dass sie jemandem geschadet hätten, nicht. Die genaue Lage des Malkin Tower ist unbekannt.",
  "bedeutung": "Der Prozess gehört zu den am besten dokumentierten Hexenprozessen Englands und mit zehn Hinrichtungen zu den folgenreichsten. Er zeigt, wie Armut, Nachbarschaftsstreit, die Sorge der Obrigkeit vor Katholiken und die Hexereilehre des Königs zusammenwirkten. Die Zulassung eines Kindes als Hauptzeugin unter Berufung auf die Hexereilehre des Königs blieb ein vielzitiertes Beispiel dafür, wie bei Hexerei die üblichen Beweisregeln außer Kraft gesetzt wurden. 2012, zum 400. Jahrestag, erinnerte Lancashire mit Ausstellungen und einer Statue von Alice Nutter in Roughlee an die Opfer.",
  "zeitleiste": [
   {
    "datum": "1604",
    "jahr": 1604,
    "text": "Ein neues Gesetz unter Jakob I. verschärft die Strafen für Hexerei."
   },
   {
    "datum": "März 1612",
    "jahr": 1612,
    "text": "Begegnung von Alizon Device mit dem Hausierer John Law."
   },
   {
    "datum": "10. April 1612",
    "jahr": 1612,
    "text": "Treffen am Malkin Tower, danach weitere Verhaftungen."
   },
   {
    "datum": "29. Juli 1612",
    "jahr": 1612,
    "text": "Jennet Preston wird in York gehängt."
   },
   {
    "datum": "18.–19. August 1612",
    "jahr": 1612,
    "text": "Prozess vor den Assisen in Lancaster."
   },
   {
    "datum": "20. August 1612",
    "jahr": 1612,
    "text": "Zehn Verurteilte werden in Lancaster gehängt."
   },
   {
    "datum": "1613",
    "jahr": 1613,
    "text": "Thomas Potts veröffentlicht seinen Bericht über den Prozess."
   },
   {
    "datum": "2012",
    "jahr": 2012,
    "text": "Gedenken zum 400. Jahrestag, Statue von Alice Nutter in Roughlee."
   }
  ],
  "quellen": [
   "Thomas Potts: The Wonderfull Discoverie of Witches in the Countie of Lancaster, London 1613",
   "Robert Poole (Hrsg.): The Lancashire Witches. Histories and Stories, Manchester University Press 2002",
   "Marion Gibson (Hrsg.): Early Modern Witches. Witchcraft Cases in Contemporary Writing, London: Routledge 2000",
   "James Sharpe: Instruments of Darkness. Witchcraft in England 1550–1750, London 1996"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hexen-von-pendle-0.jpg",
    "breite": 705,
    "hoehe": 1100,
    "zeigt": "Titelblatt von Thomas Potts' Prozessbericht „The Wonderfull Discoverie of Witches in the Countie of Lancaster“, 1613",
    "urheber": "ElinorD",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Potts.png"
   },
   {
    "datei": "bilder/dark/hexen-von-pendle-1.jpg",
    "breite": 900,
    "hoehe": 345,
    "zeigt": "Pendle Hill in Lancashire, Namensgeber der Gegend, aus der die Angeklagten stammten",
    "urheber": "Charles Rawding",
    "lizenz": "CC BY-SA 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Pendle_hill.jpg"
   },
   {
    "datei": "bilder/dark/hexen-von-pendle-2.jpg",
    "breite": 900,
    "hoehe": 600,
    "zeigt": "Torhaus der Burg von Lancaster, wo die Angeklagten in Haft saßen und verurteilt wurden",
    "urheber": "The wub",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Lancaster_Castle_-_2023-03-25.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "bamberger-hexenverfolgung",
  "rubrik": "hexen",
  "unterart": "Verfolgungswelle",
  "titel": "Die Bamberger Hexenverfolgung",
  "untertitel": "Der Brief des Bürgermeisters Johannes Junius, Bamberg 1628",
  "jahr": 1626,
  "zeitraum": "1626–1631 (Höhepunkt der Bamberger Verfolgungen)",
  "ort": "Bamberg",
  "land": "Deutschland",
  "lat": 49.8917,
  "lon": 10.8917,
  "ortQuelle": "https://en.wikipedia.org/wiki/Bamberg",
  "status": null,
  "kurz": "Im Hochstift Bamberg starben Hunderte Menschen als angebliche Hexen. Der Brief, den Bürgermeister Junius vor seiner Hinrichtung an seine Tochter schrieb, zeigt von innen, wie Folter Geständnisse erzeugte.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Das Hochstift Bamberg war ein geistliches Fürstentum: Der Bischof war zugleich Landesherr und oberster Gerichtsherr. Unter Fürstbischof Johann Georg II. Fuchs von Dornheim, der seit 1623 regierte, und seinem Weihbischof Friedrich Förner, der die Ausrottung einer vermeintlichen Hexensekte predigte, wurde die Verfolgung ab 1626 zu einer Massenbewegung. Missernten und Frostschäden in den Jahren der Kleinen Eiszeit, dazu der Dreißigjährige Krieg, lieferten den Boden. Eine eigene Kommission von Juristen führte die Verfahren, und 1627 ließ der Bischof ein besonderes Gefängnis errichten, das Malefiz- oder Drudenhaus, in dem Verhöre und Folter stattfanden."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Die Verfahren folgten einem Muster, das sich selbst nährte. Wer unter der Folter gestand, musste Mitschuldige nennen, die er auf nächtlichen Hexentänzen gesehen haben wollte. Diese Namen genügten für die nächste Verhaftung. Leugnen galt als Verstocktheit und führte zu weiterer Folter. Ein Freispruch war in diesem System kaum vorgesehen. So erfasste die Welle bald nicht nur arme und alte Frauen, sondern auch wohlhabende Bürger, Ratsherren und Bürgermeister, Kleriker und Kinder. Selbst der Hochstiftskanzler Georg Haan, der zur Mäßigung riet, wurde angeklagt und 1628 hingerichtet. Wer Vermögen hatte, verlor es durch Einziehung und Prozesskosten."
   },
   {
    "titel": "Der Brief des Johannes Junius",
    "text": "Johannes Junius, geboren 1573, war mehrfach Bürgermeister von Bamberg; auch seine Frau wurde als Hexe hingerichtet. Im Juni 1628 wurde er verhaftet, nachdem andere Gefangene ihn unter der Folter benannt hatten. Das Protokoll verzeichnet, dass er zunächst leugnete, gefoltert wurde und am 5. Juli ein Geständnis ablegte. Am 24. Juli 1628 schrieb er heimlich an seine Tochter Veronica. Er schildert, dass jedes Wort des Geständnisses erfunden war und dass ihn der Henker selbst gebeten habe, irgendetwas zu bekennen, ob wahr oder nicht, weil er die Folter sonst nicht überstehen werde. In heutiger Schreibung lautet sein bekanntester Satz: „Unschuldig bin ich in das Gefängnis gekommen, unschuldig bin ich gemartert worden, unschuldig muss ich sterben.“ Am 6. August 1628 wurde er hingerichtet."
   },
   {
    "titel": "Die Opfer",
    "text": "Nach Angaben der Universität Bamberg wurden im Hochstift zwischen 1612 und 1630 mindestens 880 Menschen als Hexen hingerichtet, Frauen, Männer und Kinder; der größte Teil davon in der Welle ab 1626. Die genaue Zahl ist nicht gesichert, weil die Akten unvollständig sind. Unter den Opfern waren Mägde und Witwen ebenso wie Angehörige der städtischen Führungsschicht. Gerade dieser Zugriff auf Ratsfamilien unterscheidet Bamberg von vielen anderen Verfolgungsgebieten und erklärt, warum aus Bamberg so ungewöhnliche Zeugnisse wie der Junius-Brief überliefert sind: Die Betroffenen konnten schreiben, hatten Angehörige mit Geld und Beziehungen und versuchten, sich zu wehren."
   },
   {
    "titel": "Ende und Aufarbeitung",
    "text": "Verwandte von Opfern wandten sich an den Kaiser. Der Reichshofrat in Wien griff ein, und ein kaiserliches Mandat vom Juni 1631 verlangte die Einstellung der Verfahren in der bisherigen Form. Weihbischof Förner war 1630 gestorben. Als schwedische Truppen Anfang 1632 auf Bamberg vorrückten, floh der Fürstbischof; er starb 1633. Das Malefizhaus wurde um 1635 abgerissen. An die Opfer erinnert heute unter anderem ein Mahnmal hinter dem Rathaus am Geyerswörth. Die Historikerin Britta Gehm hat die Verfolgung und das Eingreifen des Reichshofrates im Jahr 2000 umfassend aufgearbeitet."
   }
  ],
  "legende": "Der Junius-Brief wird oft als Beweis dafür zitiert, dass alle Beteiligten wussten, dass die Geständnisse falsch waren. Belegt ist nur, was Junius selbst schreibt: dass sein Geständnis erzwungen war und dass der Henker ihm riet, etwas zu erfinden. Ob die Richter selbst an die Hexensekte glaubten, lässt sich aus dem Brief nicht ablesen; viele taten es offenbar. Verbreitet ist auch die Vorstellung, die Kirche als Ganzes habe hier gerichtet. Tatsächlich handelte ein geistlicher Landesherr in seiner Eigenschaft als weltlicher Gerichtsherr, und es war eine kaiserliche Behörde, die einschritt. Die Opferzahlen schwanken je nach Zeitraum und Quelle; gesichert sind nach Angaben der Universität Bamberg mindestens 880 Hingerichtete, höhere Schätzungen sind möglich, aber nicht belegt.",
  "bedeutung": "Bamberg gehört mit dem benachbarten Würzburg zu den schwersten Verfolgungen im Heiligen Römischen Reich. Der Fall zeigt, wie ein Verfahren aus Folter und Denunziation eine Stadt bis in die Führungsschicht erfassen konnte, und er zeigt auch, dass die Reichsgerichte als Kontrollinstanz wirken konnten, wenn Angehörige sie anriefen. Der Brief des Johannes Junius ist eines der wenigen Zeugnisse, in denen ein Angeklagter selbst zu Wort kommt, und gehört heute zu den meistzitierten Quellen der Hexenforschung.",
  "zeitleiste": [
   {
    "datum": "1623",
    "jahr": 1623,
    "text": "Johann Georg II. Fuchs von Dornheim wird Fürstbischof von Bamberg."
   },
   {
    "datum": "1626",
    "jahr": 1626,
    "text": "Beginn der großen Verfolgungswelle im Hochstift."
   },
   {
    "datum": "1627",
    "jahr": 1627,
    "text": "Das Malefizhaus wird als eigenes Hexengefängnis errichtet."
   },
   {
    "datum": "Juni 1628",
    "jahr": 1628,
    "text": "Bürgermeister Johannes Junius wird verhaftet und gefoltert."
   },
   {
    "datum": "24. Juli 1628",
    "jahr": 1628,
    "text": "Junius schreibt heimlich an seine Tochter Veronica."
   },
   {
    "datum": "6. August 1628",
    "jahr": 1628,
    "text": "Junius wird hingerichtet."
   },
   {
    "datum": "12. Juni 1631",
    "jahr": 1631,
    "text": "Ein kaiserliches Mandat des Reichshofrats verlangt die Beendigung der Verfahren."
   },
   {
    "datum": "Februar 1632",
    "jahr": 1632,
    "text": "Schwedische Truppen rücken an, der Fürstbischof flieht."
   }
  ],
  "quellen": [
   "Britta Gehm: Die Hexenverfolgung im Hochstift Bamberg und das Eingreifen des Reichshofrates zu ihrer Beendigung, 2000",
   "Universität Bamberg: Hexenverfolgung in Bamberg (uni-bamberg.de)",
   "George L. Burr (Hrsg.): The Witch Persecutions, University of Pennsylvania, 1897 (Übersetzung des Junius-Briefs)",
   "Wolfgang Behringer: Hexen. Glaube, Verfolgung, Vermarktung, 1998"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/bamberger-hexenverfolgung-0.jpg",
    "breite": 900,
    "hoehe": 833,
    "zeigt": "Das Bamberger Malefizhaus mit Grundrissen, Kupferstich von 1627 (Staatsbibliothek Bamberg)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bamberger_Malefizhaus_1627_Staatsbiblithek_Bamberg.jpg"
   },
   {
    "datei": "bilder/dark/bamberger-hexenverfolgung-1.jpg",
    "breite": 900,
    "hoehe": 600,
    "zeigt": "Gedenktafel am früheren Standort des Malefizhauses in der Franz-Ludwig-Straße",
    "urheber": "Investigatio",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bamberg_Franz-Ludwig-Stra%C3%9Fe_7_Gedenktafel_Drudenhaus.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "spee-cautio-criminalis",
  "rubrik": "hexen",
  "unterart": "Kritiker",
  "titel": "Friedrich Spee und die Cautio Criminalis",
  "untertitel": "Ein Jesuit gegen das Hexenverfahren, Rinteln 1631",
  "jahr": 1631,
  "zeitraum": "1631–1632 (Erstausgabe und zweite Auflage)",
  "ort": "Rinteln",
  "land": "Deutschland",
  "lat": 52.1906,
  "lon": 9.0814,
  "ortQuelle": "https://en.wikipedia.org/wiki/Rinteln",
  "status": null,
  "kurz": "Ein anonymes Buch eines Jesuiten zerlegte 1631 das Hexenverfahren von innen: Nicht die Hexen seien das Problem, sondern ein Prozess, der jeden Beliebigen überführen könne.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Friedrich Spee wurde 1591 in Kaiserswerth bei Düsseldorf geboren und trat 1610 in den Jesuitenorden ein. Er lehrte an Ordensschulen und Universitäten, unter anderem in Paderborn und Köln, und war als Seelsorger tätig. 1629 wurde er bei einem Einsatz zur Rekatholisierung im Raum Peine überfallen und schwer verletzt. Die Jahre um 1630 waren der Höhepunkt der Hexenverfolgung im Reich, in Würzburg, Bamberg, Köln und im kurkölnischen Westfalen. Spee hatte nach eigener Aussage Angeklagte als Seelsorger begleitet. Bekannt ist er heute auch als Dichter geistlicher Lieder; das Adventslied „O Heiland, reiß die Himmel auf“ wird ihm zugeschrieben."
   },
   {
    "titel": "Das Buch",
    "text": "1631 erschien in Rinteln an der Weser die Cautio Criminalis, auf Deutsch etwa „Rechtliches Bedenken wegen der Hexenprozesse“. Der Titel nennt als Verfasser nur einen „ungenannten römischen Theologen“. Gedruckt wurde das Buch von Petrus Lucius, dem Drucker der lutherischen Universität Rinteln, also außerhalb der katholischen Zensur, der Spee als Jesuit unterlag. Eine zweite Auflage folgte 1632. Das Werk richtet sich ausdrücklich an Obrigkeiten, Räte, Beichtväter, Richter und Anwälte. Es ist in Fragen und Antworten gegliedert, im Stil eines juristischen Gutachtens, und vermeidet die Frage, ob es Hexen gebe; Spee bejaht sie sogar ausdrücklich."
   },
   {
    "titel": "Das Argument",
    "text": "Spees Kritik zielt auf das Verfahren. Ein Gerücht genüge für die Verhaftung. Wer verhaftet sei, gelte als verdächtig. Wer leugne, werde gefoltert, bis er gestehe; wer die Folter aushalte, gelte als vom Teufel gestärkt. Wer gestehe, müsse Mitschuldige nennen, die dann ihrerseits verhaftet würden. Auf diese Weise, schreibt Spee, könne man jeden Menschen zum Hexer machen, auch die Richter selbst und ihre Familien. Er fordert, die Folter drastisch einzuschränken, Verteidiger zuzulassen und Denunziationen aus Geständnissen nicht als Beweis zu werten. Er schreibt außerdem, unter den Verurteilten, die er begleitet habe, sei keiner gewesen, den er nach sorgfältiger Prüfung für schuldig gehalten habe."
   },
   {
    "titel": "Reaktionen",
    "text": "Die Verfasserschaft blieb nicht lange geheim. Die Ordensleitung in Rom reagierte verärgert über die Veröffentlichung ohne Erlaubnis; ein Ausschluss aus dem Orden wurde erwogen, aber nicht vollzogen. Spee wurde nach Trier versetzt. Dort pflegte er 1635 verwundete und kranke Soldaten und starb am 7. August 1635 an einer Infektion. Das Buch verbreitete sich in Nachdrucken und Übersetzungen, darunter deutschen, niederländischen und französischen Ausgaben. Es wurde von Juristen gelesen, nicht nur von Theologen, und das machte seine Wirkung aus."
   },
   {
    "titel": "Wirkung",
    "text": "Die Cautio Criminalis beendete die Verfolgung nicht, aber sie lieferte Argumente, auf die sich Kritiker berufen konnten. Johann Philipp von Schönborn, ab 1642 Fürstbischof von Würzburg und ab 1647 Erzbischof von Mainz, beschränkte in seinen Territorien die Hexenprozesse; eine Verbindung zu Spee ist in der Überlieferung behauptet, aber nicht urkundlich belegt. Gottfried Wilhelm Leibniz würdigte Spee später ausdrücklich. Der Hallenser Jurist Christian Thomasius knüpfte um 1700 an die Verfahrenskritik an. Bis die letzten Prozesse endeten, vergingen jedoch noch rund 150 Jahre."
   }
  ],
  "legende": "Häufig heißt es, Spee habe in Würzburg Hunderte Verurteilte zum Scheiterhaufen begleitet und sei davon vorzeitig ergraut. Die Geschichte geht auf eine Anekdote zurück, die Leibniz überlieferte: Der junge Schönborn habe Spee nach seinen grauen Haaren gefragt. Belegt ist sie nicht, und ein Aufenthalt Spees als Beichtvater in Würzburg lässt sich nicht nachweisen; wo er Angeklagte begleitete, ist offen. Eine zweite verbreitete Verkürzung lautet, Spee habe den Hexenglauben bekämpft. Er bestritt die Existenz von Hexen nicht. Sein Angriff galt dem Beweisverfahren, und gerade deshalb konnten ihm Juristen folgen, die selbst an Hexerei glaubten.",
  "bedeutung": "Spee formulierte als einer der Ersten in einer breit gelesenen Schrift, dass ein durch Folter erzwungenes Geständnis nichts beweist und ein Verfahren falsche Ergebnisse zuverlässig erzeugen kann, wenn es so gebaut ist. Dieser Gedanke ging über die Hexenprozesse hinaus in die Debatte um die Abschaffung der Folter im 18. Jahrhundert ein. Heute gilt die Cautio Criminalis als frühes Dokument einer rechtsstaatlichen Strafprozesskritik.",
  "zeitleiste": [
   {
    "datum": "25. Februar 1591",
    "jahr": 1591,
    "text": "Friedrich Spee wird in Kaiserswerth geboren."
   },
   {
    "datum": "1610",
    "jahr": 1610,
    "text": "Eintritt in den Jesuitenorden."
   },
   {
    "datum": "1629",
    "jahr": 1629,
    "text": "Spee wird bei Peine überfallen und schwer verletzt."
   },
   {
    "datum": "1631",
    "jahr": 1631,
    "text": "Die Cautio Criminalis erscheint anonym in Rinteln."
   },
   {
    "datum": "1632",
    "jahr": 1632,
    "text": "Eine zweite Auflage erscheint."
   },
   {
    "datum": "7. August 1635",
    "jahr": 1635,
    "text": "Spee stirbt in Trier, nachdem er kranke und verwundete Soldaten gepflegt hat."
   },
   {
    "datum": "1647",
    "jahr": 1647,
    "text": "Johann Philipp von Schönborn wird Erzbischof von Mainz und schränkt die Prozesse ein."
   }
  ],
  "quellen": [
   "Friedrich Spee: Cautio Criminalis, Rinteln 1631 (dt. Übers. von Joachim-Friedrich Ritter)",
   "Encyclopaedia Britannica: Friedrich von Spee",
   "Wolfgang Behringer: Hexen und Hexenprozesse in Deutschland",
   "Portal Rheinische Geschichte (LVR): Friedrich Spee von Langenfeld"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/spee-cautio-criminalis-0.jpg",
    "breite": 637,
    "hoehe": 1100,
    "zeigt": "Titelblatt der Erstausgabe der Cautio Criminalis, Rinteln 1631 (Stadtbibliothek Trier)",
    "urheber": "Friedrich Spee (1591-1635)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Cautio_criminalis_1631.jpg"
   },
   {
    "datei": "bilder/dark/spee-cautio-criminalis-1.jpg",
    "breite": 746,
    "hoehe": 1100,
    "zeigt": "Friedrich Spee von Langenfeld (1591–1635)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Friedrich_Spee.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "galilei-prozess",
  "rubrik": "hexen",
  "unterart": "Prozess",
  "titel": "Der Prozess gegen Galileo Galilei",
  "untertitel": "Vor der römischen Inquisition 1633 – und die Erklärung von 1992",
  "jahr": 1633,
  "zeitraum": "1616–1633, Aufarbeitung 1979–1992",
  "ort": "Rom",
  "land": "Italien",
  "lat": 41.898,
  "lon": 12.4778,
  "ortQuelle": "https://en.wikipedia.org/wiki/Santa_Maria_sopra_Minerva",
  "status": "aufgeklärt",
  "kurz": "1633 musste Galilei in Rom abschwören, dass die Erde sich um die Sonne bewegt. Erst 1992 räumte der Papst öffentlich Fehler ein. Der Fall wurde zum Sinnbild für Wissenschaft gegen Glaubensautorität.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Nikolaus Kopernikus hatte 1543 ein Weltbild mit der Sonne im Mittelpunkt veröffentlicht. Galileo Galilei, Mathematiker und Hofphilosoph der Medici in Florenz, beobachtete ab 1609/10 mit dem Fernrohr die Jupitermonde und die Phasen der Venus und trat offen für Kopernikus ein. 1616 erklärte eine Kommission des Heiligen Offiziums die Sonnenmittelpunktslehre für philosophisch unhaltbar und formell häretisch; die Indexkongregation suspendierte das Werk des Kopernikus bis zur Korrektur. Kardinal Robert Bellarmin ermahnte Galilei, die Lehre nicht als wahr zu vertreten. Was genau ihm damals auferlegt wurde, blieb später ein Kernpunkt des Prozesses."
   },
   {
    "titel": "Der Dialog",
    "text": "1623 wurde Maffeo Barberini als Urban VIII. Papst, ein Bewunderer Galileis. Galilei verstand das als Spielraum und veröffentlichte im Februar 1632 in Florenz seinen Dialog über die beiden hauptsächlichen Weltsysteme, das ptolemäische und das kopernikanische. Formal sollte er beide Seiten abwägen; tatsächlich führte er das kopernikanische System als überlegen vor. Ein Argument, das der Papst selbst gern vorbrachte, legte er der Figur Simplicio in den Mund, die im Gespräch den Kürzeren zieht. Urban VIII. fühlte sich getäuscht. Im Sommer 1632 wurde der Verkauf gestoppt, im Herbst wurde Galilei nach Rom vorgeladen."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Galilei kam im Februar 1633 nach Rom. Die erste Vernehmung vor der Inquisition fand am 12. April statt. Ihm wurde vorgehalten, gegen das Verbot von 1616 verstoßen zu haben. Galilei bestritt, das kopernikanische System im Dialog vertreten zu haben, was angesichts des Textes kaum glaubhaft war. Während des Verfahrens wohnte er überwiegend in der Residenz des toskanischen Botschafters, zeitweise in Räumen des Heiligen Offiziums, nicht in einem Kerker. Am 21. Juni wurde er unter der Androhung der Folter nach seiner Absicht befragt. Gefoltert wurde er nach Lage der Akten nicht."
   },
   {
    "titel": "Urteil und Abschwörung",
    "text": "Am 22. Juni 1633 verkündeten die Kardinäle der Inquisition das Urteil: Galilei sei der Häresie „dringend verdächtig“. Sieben der zehn Richter unterzeichneten. Der Dialog kam auf den Index, Galilei wurde zu Kerkerhaft auf unbestimmte Zeit verurteilt. Im Dominikanerkloster Santa Maria sopra Minerva schwor er kniend ab, dass die Erde sich bewege. Die Haft wurde umgehend in Hausarrest umgewandelt, zuerst in Siena, ab Ende 1633 in seiner Villa in Arcetri bei Florenz. Dort schrieb er die Discorsi über zwei neue Wissenschaften, die 1638 in Leiden erschienen, und starb am 8. Januar 1642."
   },
   {
    "titel": "Die Erklärung von 1992",
    "text": "Die Kirche rückte langsam ab: 1757/58 entfiel das allgemeine Verbot heliozentrischer Bücher im Index, 1822 erlaubte Rom den Druck von Werken, die die Erdbewegung als Tatsache lehrten, und ab 1835 fehlte der Dialog im Index. 1979 regte Johannes Paul II. eine neue Prüfung an, 1981 setzte er eine Kommission ein. Am 31. Oktober 1992 nahm er vor der Päpstlichen Akademie der Wissenschaften deren Ergebnis entgegen. Er sprach von einem tragischen gegenseitigen Unverständnis und räumte ein, die Theologen von damals hätten geirrt. Ein förmlicher Widerruf des Urteils von 1633 war das nicht, und Historiker kritisierten, dass die Erklärung die Verantwortung der Kirche als Institution klein halte."
   }
  ],
  "legende": "Der Satz „Und sie bewegt sich doch“ ist erst 1757 bei Giuseppe Baretti gedruckt belegt, mehr als hundert Jahre nach dem Prozess; dass Galilei ihn nach der Abschwörung gesagt hat, ist nicht überliefert. Auch saß er weder im Kerker, noch wurde er gefoltert oder verbrannt; eine Verwechslung mit Giordano Bruno, der 1600 in Rom aus anderen Gründen hingerichtet wurde, ist verbreitet. Gesichert ist dagegen, dass er unter Drohung abschwören musste und bis zum Tod unter Aufsicht lebte. Ebenso gesichert ist, dass ihm entscheidende Beweise fehlten: Die Sternparallaxe wurde erst 1838 gemessen, und seine Gezeitentheorie als Beweis der Erdbewegung war falsch. Die Rede von der „Rehabilitierung 1992“ ist eine Vereinfachung, da das Urteil formal nie aufgehoben wurde.",
  "bedeutung": "Der Prozess wurde zum bekanntesten Beispiel für einen Konflikt zwischen Naturforschung und kirchlicher Lehrautorität, eine Deutung, die im 19. Jahrhundert zugespitzt wurde. In Italien setzte er der kopernikanischen Forschung Grenzen, während sie im Norden Europas weiterging. Die lange Aufarbeitung bis 1992 zeigt, wie schwer es einer Institution fällt, ein eigenes Urteil zu korrigieren.",
  "zeitleiste": [
   {
    "datum": "1610",
    "jahr": 1610,
    "text": "Galilei veröffentlicht seine Fernrohrbeobachtungen im Sidereus Nuncius."
   },
   {
    "datum": "Februar und März 1616",
    "jahr": 1616,
    "text": "Die Lehre des Kopernikus wird verurteilt, Bellarmin ermahnt Galilei."
   },
   {
    "datum": "Februar 1632",
    "jahr": 1632,
    "text": "Der Dialog über die beiden Weltsysteme erscheint in Florenz."
   },
   {
    "datum": "12. April 1633",
    "jahr": 1633,
    "text": "Erste Vernehmung vor der Inquisition in Rom."
   },
   {
    "datum": "22. Juni 1633",
    "jahr": 1633,
    "text": "Urteil wegen dringenden Häresieverdachts und Abschwörung in Santa Maria sopra Minerva."
   },
   {
    "datum": "8. Januar 1642",
    "jahr": 1642,
    "text": "Galilei stirbt im Hausarrest in Arcetri."
   },
   {
    "datum": "1835",
    "jahr": 1835,
    "text": "Der Dialog erscheint nicht mehr im Index der verbotenen Bücher."
   },
   {
    "datum": "31. Oktober 1992",
    "jahr": 1992,
    "text": "Johannes Paul II. räumt vor der Päpstlichen Akademie der Wissenschaften Fehler ein."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Galileo",
   "Maurice A. Finocchiaro: The Galileo Affair. A Documentary History, 1989",
   "Ernan McMullin (Hrsg.): The Church and Galileo, 2005 (Vatikanische Sternwarte)",
   "Johannes Paul II.: Ansprache an die Päpstliche Akademie der Wissenschaften, 31. Oktober 1992"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/galilei-prozess-0.jpg",
    "breite": 900,
    "hoehe": 655,
    "zeigt": "Frontispiz und Titelblatt des Dialogs, Florenz 1632",
    "urheber": "Giovanni Battista Landini",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Galileos_Dialogue_Title_Page.png"
   },
   {
    "datei": "bilder/dark/galilei-prozess-1.jpg",
    "breite": 900,
    "hoehe": 571,
    "zeigt": "Galilei vor dem Heiligen Offizium, Gemälde von Joseph-Nicolas Robert-Fleury (19. Jahrhundert)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Galileo_before_the_Holy_Office.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "matthew-hopkins",
  "rubrik": "hexen",
  "unterart": "Verfolgungswelle",
  "titel": "Matthew Hopkins und die Hexenjagd in Ostengland",
  "untertitel": "Der selbst ernannte „Witchfinder General“, 1645–1647",
  "jahr": 1645,
  "zeitraum": "1645–1647",
  "ort": "Manningtree, Essex",
  "land": "Großbritannien",
  "lat": 51.945,
  "lon": 1.062,
  "ortQuelle": "https://en.wikipedia.org/wiki/Manningtree",
  "status": null,
  "kurz": "Mitten im Englischen Bürgerkrieg trieben zwei Männer aus Essex die größte Hexenjagd der englischen Geschichte voran. Innerhalb von gut zwei Jahren wurden etwa hundert Menschen gehängt.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Hexerei war in England seit dem Gesetz von 1563, verschärft 1604, ein Kapitalverbrechen, wurde aber vor weltlichen Gerichten verhandelt, den Assisen, und mit dem Strang bestraft, nicht mit dem Feuer. Die Folter war im gewöhnlichen Strafverfahren nicht zulässig. Bis in die 1640er Jahre blieben Hinrichtungen vergleichsweise selten. Dann zerbrach im Bürgerkrieg zwischen König und Parlament die gewohnte Ordnung: Richter reisten nicht mehr regelmäßig über Land, lokale Obrigkeiten handelten auf eigene Faust, und in den puritanisch geprägten Grafschaften Ostenglands herrschten Kriegsangst und religiöse Erregung."
   },
   {
    "titel": "Die Männer",
    "text": "Matthew Hopkins, um 1620 als Sohn eines Pfarrers in Great Wenham in Suffolk geboren, lebte in Manningtree in Essex. Über seinen Beruf ist wenig gesichert. Im Frühjahr 1645 begann er zusammen mit John Stearne, einem Grundbesitzer aus der Gegend, Frauen in Manningtree als Hexen anzuzeigen. Die Erste war Elizabeth Clarke, eine ältere, einbeinige Witwe. Aus ihren Aussagen folgten weitere Namen. Bald zogen die beiden mit Helferinnen, die die Körper der Beschuldigten durchsuchten, durch Essex, Suffolk, Norfolk, Cambridgeshire und Huntingdonshire. Gemeinden riefen sie und zahlten für ihre Dienste. Einen amtlichen Titel hatte Hopkins nie; die Bezeichnung „Witch Finder Generall“ stammt aus seiner eigenen Schrift."
   },
   {
    "titel": "Die Methoden",
    "text": "Weil die Folter verboten war, setzten Hopkins und Stearne auf Mittel, die formal keine waren. Sie suchten am Körper nach angeblichen Teufelsmalen, an denen Hausgeister, sogenannte Imps, gesaugt haben sollten. Sie ließen Beschuldigte tage- und nächtelang wach halten und beobachten, bis diese von Tierbesuchen erzählten oder gestanden. In der Anfangszeit wurde auch die Wasserprobe angewandt, bei der man eine gebundene Person ins Wasser warf; wer nicht unterging, galt als schuldig. Gegen diese Probe gab es schon damals Einspruch, und sie wurde bald nicht mehr genutzt. Die so gewonnenen Geständnisse dienten vor Gericht als Beweis."
   },
   {
    "titel": "Die Opfer",
    "text": "Im Juli 1645 wurden nach den Assisen in Chelmsford in Essex rund 19 Frauen gehängt, weitere starben in der Haft. Ende August 1645 folgten in Bury St Edmunds in Suffolk vor einem eigens eingesetzten Sondergericht 18 Hinrichtungen, darunter John Lowes, der etwa achtzigjährige Pfarrer von Brandeston. Nach der Schätzung des Historikers Malcolm Gaskill wurden in der Kampagne rund 250 Menschen verdächtigt und etwa 100 gehängt; die Encyclopaedia Britannica spricht von vielleicht 230 oder mehr Opfern im weiteren Sinn. Die meisten waren Frauen, oft arm, alt oder alleinstehend. Das ist ein beträchtlicher Teil aller Hinrichtungen wegen Hexerei in der englischen Geschichte."
   },
   {
    "titel": "Gegenstimmen und Ende",
    "text": "Schon 1646 veröffentlichte John Gaule, Pfarrer in Great Staughton in Huntingdonshire, seine „Select Cases of Conscience Touching Witches and Witchcrafts“, eine Kritik an den Methoden der Hexensucher. Richter und Geistliche wurden skeptischer, und Gemeinden fragten nach den Kosten. 1647 antwortete Hopkins mit der Schrift „The Discovery of Witches“ auf Vorwürfe gegen ihn. Im selben Jahr zog er sich nach Manningtree zurück und starb im August 1647, wahrscheinlich an Tuberkulose; beigesetzt wurde er in Mistley. Stearne verteidigte die Kampagne 1648 in einem eigenen Buch. Das englische Hexereigesetz wurde 1736 aufgehoben."
   }
  ],
  "legende": "Eine verbreitete Erzählung lautet, Hopkins sei am Ende selbst der Wasserprobe unterworfen und als Hexer gehängt worden. Dafür gibt es keinen Beleg; er starb nach allem, was überliefert ist, an einer Krankheit. Der Titel „Witchfinder General“ war keine Amtsbezeichnung, sondern eine Selbstbeschreibung; populär wurde er vor allem durch den gleichnamigen Film von 1968. Dass in England Hexen verbrannt worden seien, ist ebenfalls falsch: Verurteilte wurden gehängt. Die Zahl der Opfer schwankt je nach Zählweise, weil Verhöre, Gerichtsakten und Hinrichtungen nicht vollständig überliefert sind; Spannen von etwa 100 Hinrichtungen gelten als belastbar.",
  "bedeutung": "Die Kampagne zeigt, wie schnell der Schutz eines Rechtssystems wegfällt, wenn es im Krieg nicht mehr kontrolliert wird. In England, das die Folter offiziell nicht kannte, traten Schlafentzug und körperliche Untersuchungen an ihre Stelle und erfüllten denselben Zweck. Die Kritik von Gaule und anderen und die Rückkehr regulärer Gerichte beendeten die Welle. Hopkins wurde zur Figur der Populärkultur, die Opfer blieben weitgehend namenlos.",
  "zeitleiste": [
   {
    "datum": "um 1620",
    "jahr": 1620,
    "text": "Matthew Hopkins wird in Great Wenham, Suffolk, geboren."
   },
   {
    "datum": "Frühjahr 1645",
    "jahr": 1645,
    "text": "In Manningtree werden die ersten Frauen, darunter Elizabeth Clarke, beschuldigt."
   },
   {
    "datum": "Juli 1645",
    "jahr": 1645,
    "text": "Nach den Assisen in Chelmsford werden rund 19 Frauen gehängt."
   },
   {
    "datum": "August 1645",
    "jahr": 1645,
    "text": "In Bury St Edmunds werden 18 Menschen gehängt, darunter Pfarrer John Lowes."
   },
   {
    "datum": "1646",
    "jahr": 1646,
    "text": "John Gaule kritisiert die Hexensucher öffentlich."
   },
   {
    "datum": "1647",
    "jahr": 1647,
    "text": "Hopkins veröffentlicht „The Discovery of Witches“."
   },
   {
    "datum": "August 1647",
    "jahr": 1647,
    "text": "Hopkins stirbt in Manningtree."
   },
   {
    "datum": "1736",
    "jahr": 1736,
    "text": "Das englische Parlament hebt die Strafbarkeit der Hexerei auf."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Matthew Hopkins",
   "Malcolm Gaskill: Witchfinders. A Seventeenth-Century English Tragedy, 2005",
   "James Sharpe: Instruments of Darkness. Witchcraft in England 1550–1750, 1996",
   "Matthew Hopkins: The Discovery of Witches, London 1647 (British Library)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/matthew-hopkins-0.jpg",
    "breite": 900,
    "hoehe": 584,
    "zeigt": "Titelblatt von Hopkins' Schrift „The Discovery of Witches“, London 1647, mit dem „Witch Finder Generall“ (British Library)",
    "urheber": "London, Printed for R. Royston, at the Angell in Ivie Lane, publisher",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:The_discovery_of_witches%2C_Matthew_Hopkins.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "salem-hexenprozesse",
  "rubrik": "hexen",
  "unterart": "Prozess",
  "titel": "Die Hexenprozesse von Salem",
  "untertitel": "Massachusetts 1692 – zwanzig Hinrichtungen in einer puritanischen Kolonie",
  "jahr": 1692,
  "zeitraum": "Februar 1692 bis Mai 1693",
  "ort": "Salem, Massachusetts",
  "land": "USA",
  "lat": 42.5195,
  "lon": -70.8967,
  "ortQuelle": "https://en.wikipedia.org/wiki/Salem,_Massachusetts",
  "status": "aufgeklärt",
  "kurz": "In Salem wurden 1692 über zweihundert Menschen der Hexerei beschuldigt, neunzehn gehängt, einer zu Tode gepresst. Die Prozesse gelten bis heute als Sinnbild für Massenhysterie und Justiz ohne Beweise.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Salem Village, das heutige Danvers, war eine zerstrittene Bauerngemeinde neben der Hafenstadt Salem Town in der puritanischen Kolonie Massachusetts Bay. Die Kolonie hatte gerade ihre Charta verloren, eine neue war noch nicht in Kraft. Im Norden tobte ein Krieg gegen französische Siedler und mit ihnen verbündete indigene Völker, Flüchtlinge aus den Grenzgebieten kamen ins Land. Im Dorf stritten Familien um Land und um den Pfarrer Samuel Parris. Im Januar 1692 bekamen seine neunjährige Tochter Betty und seine elfjährige Nichte Abigail Williams Anfälle, die ein Arzt nicht erklären konnte und als Hexenwerk deutete."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Ende Februar 1692 benannten die Mädchen drei Frauen: Tituba, eine versklavte Frau im Haushalt Parris, die Bettlerin Sarah Good und die kranke Sarah Osborne. Tituba gestand und sprach von weiteren Hexen, die Zahl der Beschuldigten wuchs rasch. Gouverneur William Phips setzte am 27. Mai 1692 ein Sondergericht ein, den Court of Oyer and Terminer, unter dem Vizegouverneur William Stoughton. Es ließ sogenannte Spektralbeweise zu: Aussagen, der Geist eines Angeklagten sei einem Opfer erschienen und habe es gequält. Wer gestand, blieb meist am Leben; wer seine Unschuld beteuerte, wurde verurteilt."
   },
   {
    "titel": "Die Opfer",
    "text": "Als Erste wurde Bridget Bishop am 10. Juni 1692 gehängt. Bis zum 22. September folgten achtzehn weitere, darunter die angesehene Rebecca Nurse, über siebzig Jahre alt, der Farmer John Proctor und der frühere Dorfpfarrer George Burroughs. Giles Corey, ein älterer Farmer, verweigerte die Einlassung vor Gericht und wurde im September unter Steinen zu Tode gepresst, seine Frau Martha wurde gehängt. Mindestens fünf Beschuldigte starben in der Haft. Insgesamt wurden mehr als zweihundert Menschen beschuldigt, unter ihnen auch die vierjährige Dorothy Good, die monatelang im Gefängnis saß."
   },
   {
    "titel": "Gegenstimmen",
    "text": "Im Herbst 1692 wuchs der Widerstand. Der Kaufmann Thomas Brattle kritisierte in einem Brief die Spektralbeweise. Increase Mather, einer der führenden Geistlichen der Kolonie, legte im Oktober seine Schrift „Cases of Conscience“ vor und schrieb, es sei besser, zehn verdächtige Hexen entkämen, als dass ein Unschuldiger verurteilt werde. Als auch Personen aus dem Umfeld des Gouverneurs beschuldigt wurden, löste Phips das Sondergericht am 29. Oktober 1692 auf. Ein reguläres Obergericht verhandelte ab Januar 1693 die verbliebenen Fälle ohne Spektralbeweise und sprach die meisten frei. Im Mai 1693 begnadigte Phips alle noch Inhaftierten."
   },
   {
    "titel": "Ende und Aufarbeitung",
    "text": "1697 bat der Richter Samuel Sewall öffentlich in seiner Kirche um Vergebung, im selben Jahr auch zwölf Geschworene. 1706 entschuldigte sich Ann Putnam junior, eine der Hauptanklägerinnen. 1711 hob die Kolonie die Urteile für die meisten Verurteilten auf, deren Familien es beantragt hatten, und zahlte Entschädigungen. Massachusetts erklärte 1957 und 2001 die übrigen für unschuldig, zuletzt 2022 Elizabeth Johnson junior, deren Urteil nie aufgehoben worden war. 2016 identifizierten Forscher Proctor's Ledge in Salem als Hinrichtungsort; seit 2017 steht dort eine Gedenkstätte."
   }
  ],
  "legende": "In Salem wurde niemand verbrannt; die Verurteilten wurden gehängt, Giles Corey wurde zu Tode gepresst. Die Erzählung, Tituba habe die Mädchen in Voodoo oder afrikanische Magie eingeführt, findet sich in den Akten nicht; dort wird sie als „Indianerin“ bezeichnet, ihre Herkunft ist ungeklärt. Viel diskutiert ist die These der Psychologin Linnda Caporael von 1976, eine Mutterkornvergiftung habe die Anfälle ausgelöst. Sie wurde schon im selben Jahr widersprochen, und die meisten Historiker halten sie für unwahrscheinlich, weil sie weder den Verlauf noch die gezielten Anschuldigungen erklärt. Gesichert sind soziale Spannungen, Kriegsangst und ein Gericht, das unprüfbare Aussagen als Beweis zuließ.",
  "bedeutung": "Salem ist der bekannteste Hexenprozess Nordamerikas, mit rund zwanzig Toten aber klein gegenüber europäischen Verfolgungen. Seine Bedeutung liegt in der Aufarbeitung: Richter und Ankläger bekannten öffentlich ihre Schuld, und die Ablehnung von Spektralbeweisen wurde zu einem frühen Beispiel für den Grundsatz, dass Verurteilungen prüfbare Beweise brauchen. Arthur Millers Drama „Hexenjagd“ von 1953 machte Salem zum Gleichnis für die Kommunistenverfolgung der McCarthy-Ära.",
  "zeitleiste": [
   {
    "datum": "Januar 1692",
    "jahr": 1692,
    "text": "Betty Parris und Abigail Williams bekommen Anfälle."
   },
   {
    "datum": "29. Februar 1692",
    "jahr": 1692,
    "text": "Haftbefehle gegen Tituba, Sarah Good und Sarah Osborne."
   },
   {
    "datum": "27. Mai 1692",
    "jahr": 1692,
    "text": "Gouverneur Phips setzt den Court of Oyer and Terminer ein."
   },
   {
    "datum": "10. Juni 1692",
    "jahr": 1692,
    "text": "Bridget Bishop wird als Erste gehängt."
   },
   {
    "datum": "22. September 1692",
    "jahr": 1692,
    "text": "Letzte Hinrichtungen: acht Menschen werden gehängt."
   },
   {
    "datum": "29. Oktober 1692",
    "jahr": 1692,
    "text": "Phips löst das Sondergericht auf."
   },
   {
    "datum": "1711",
    "jahr": 1711,
    "text": "Die Kolonie hebt die meisten Urteile auf und zahlt Entschädigung."
   },
   {
    "datum": "Juli 2022",
    "jahr": 2022,
    "text": "Elizabeth Johnson junior wird als letzte Verurteilte für unschuldig erklärt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Salem witch trials",
   "Mary Beth Norton: In the Devil's Snare. The Salem Witchcraft Crisis of 1692, 2002",
   "Salem Witch Trials Documentary Archive, University of Virginia",
   "Smithsonian Magazine: A Brief History of the Salem Witch Trials"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/salem-hexenprozesse-0.jpg",
    "breite": 747,
    "hoehe": 1100,
    "zeigt": "Aussage der Sarah Holten gegen Rebecca Nurse vor Gericht, Juni 1692",
    "urheber": "Sarah Holten",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Deposition_of_Sarah_Holton_v._Rebecca_Nurse.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "anna-goeldi",
  "rubrik": "hexen",
  "unterart": "Prozess",
  "titel": "Anna Göldi",
  "untertitel": "Der letzte Hexenprozess mit Todesurteil in Westeuropa, Glarus 1782",
  "jahr": 1782,
  "zeitraum": "Oktober 1781 bis Juni 1782, Rehabilitierung 2008",
  "ort": "Glarus",
  "land": "Schweiz",
  "lat": 47.0404,
  "lon": 9.0672,
  "ortQuelle": "https://en.wikipedia.org/wiki/Glarus",
  "status": "aufgeklärt",
  "kurz": "Die Magd Anna Göldi wurde 1782 in Glarus enthauptet, offiziell als Giftmörderin, tatsächlich in einem Hexenprozess. 2008 rehabilitierte sie das Kantonsparlament als erste verurteilte „Hexe“ Europas durch ein Parlament.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Anna Göldi wurde 1734 in Sennwald im Rheintal geboren, als Tochter einer armen Familie, und arbeitete ab etwa achtzehn Jahren als Dienstmagd in verschiedenen Haushalten, unter anderem im Pfarrhaus von Sennwald und bei einer Familie in Mollis. Im September 1780 trat sie in den Dienst des Arztes Johann Jakob Tschudi in Glarus, der zugleich Ratsherr und Richter war und einer der angesehensten Familien des Landes angehörte. Im Kanton Glarus, damals einem Ort der Eidgenossenschaft, gab es getrennte evangelische und katholische Gerichte. Hexenprozesse waren im übrigen West- und Mitteleuropa zu dieser Zeit fast überall verschwunden."
   },
   {
    "titel": "Anklage und Verfahren",
    "text": "Im Oktober 1781 fand man Stecknadeln in der Milch von Tschudis achtjähriger Tochter. Das Kind bekam später Anfälle und soll Nadeln und Nägel erbrochen haben. Göldi wurde entlassen und floh. Am 9. Februar 1782 erschien ein Steckbrief in der Zürcher Zeitung, der heutigen NZZ. Wenig später wurde sie verhaftet und nach Glarus gebracht. Der evangelische Rat führte das Verfahren, in dem Tschudi selbst Partei und Einfluss hatte. Unter der Folter legte sie ein Geständnis ab, das sie später widerrief. Am 6. Juni 1782 wurde sie zum Tod durch das Schwert verurteilt, ausdrücklich als „Vergifterin“, nicht als Hexe, obwohl das Kind lebte."
   },
   {
    "titel": "Die Hinrichtung",
    "text": "Anna Göldi wurde nach dem damals in Glarus gebräuchlichen julianischen Kalender am 13. Juni 1782 enthauptet, nach heutigem Kalender am 24. Juni. Sie war 47 Jahre alt. Das Urteil verstieß nach heutiger Bewertung der Glarner Behörden gegen das damals geltende Recht, das für eine Vergiftung ohne Todesfolge keine Todesstrafe vorsah. Der Göttinger Gelehrte August Ludwig Schlözer machte den Fall 1783 in seiner Zeitschrift bekannt und nannte ihn einen „Justizmord“; der Begriff wurde durch ihn verbreitet. In ganz Europa wurde Glarus dafür kritisiert."
   },
   {
    "titel": "Motive",
    "text": "Warum ein angesehener Arzt und Richter seine Magd mit solcher Härte verfolgte, ist bis heute nicht abschließend geklärt. Der Glarner Jurist und Journalist Walter Hauser vertritt die These, Tschudi habe eine sexuelle Beziehung zu Göldi gehabt; ein Ehebruch hätte ihn seine Ämter kosten können, und der Prozess habe dazu gedient, sie zum Schweigen zu bringen. Bewiesen ist diese These nicht; die Rehabilitierung von 2008 begründeten die Glarner Behörden mit der fehlenden Zuständigkeit des Gerichts, der vorgefassten Schuldannahme und einer Strafe, die das Recht für eine Vergiftung ohne Todesfolge nicht vorsah. Belegt ist, dass Tschudi und seine Verwandten im Verfahren erheblichen Einfluss hatten und dass das Gericht von Anfang an von ihrer Schuld ausging."
   },
   {
    "titel": "Rehabilitierung",
    "text": "Auf Initiative von Walter Hauser beantragte der Glarner Regierungsrat im Juni 2008 die Rehabilitierung. Am 27. August 2008 beschloss der Landrat, das Kantonsparlament, Anna Göldi moralisch und rechtlich zu rehabilitieren. Das Gericht von 1782 sei nicht zuständig gewesen und das Urteil unrechtmäßig. Es war die erste Rehabilitierung einer als Hexe Hingerichteten in Europa durch ein Parlament. Seit 2017 erinnert das Anna-Göldi-Museum im Hänggiturm in Ennenda an sie und an Justizopfer allgemein."
   }
  ],
  "legende": "Anna Göldi wird oft „die letzte Hexe Europas“ genannt. Genauer: Ihr Prozess gilt als der letzte bekannte Hexenprozess mit vollstrecktem Todesurteil in West- und Mitteleuropa. Formal lautete das Urteil auf Vergiftung, weil die Richter das Wort Hexerei im aufgeklärten 18. Jahrhundert vermeiden wollten; Verhandelt wurde aber der Vorwurf eines Schadenzaubers, und Zeitgenossen wie Kritiker sahen in dem Verfahren einen Hexenprozess. Für Polen wird eine Hinrichtung zweier Frauen in Posen 1793 genannt, deren Überlieferung umstritten ist, und Lynchmorde an angeblichen Hexen gab es in Europa noch im 19. Jahrhundert. Die lange als letzte Hingerichtete im Reich geltende Anna Maria Schwägelin, 1775 in Kempten zum Tod verurteilt, wurde nach den Forschungen des Kemptener Historikers Wolfgang Petz nicht hingerichtet, sondern starb 1781 in Haft.",
  "bedeutung": "Der Fall zeigt, dass Hexenprozesse auch im Zeitalter der Aufklärung möglich blieben, wo eine kleine Obrigkeit ohne Kontrolle urteilte und ein Mächtiger ein Interesse daran hatte. Schlözers Kritik machte ihn zu einem europäischen Skandal und das Wort Justizmord zu einem festen Begriff. In den Jahren nach 2008 beschlossen auch zahlreiche Städte in Deutschland, die Opfer früherer Hexenprozesse zu rehabilitieren.",
  "zeitleiste": [
   {
    "datum": "24. Oktober 1734",
    "jahr": 1734,
    "text": "Anna Göldi wird in Sennwald geboren."
   },
   {
    "datum": "September 1780",
    "jahr": 1780,
    "text": "Sie tritt in den Dienst des Arztes Johann Jakob Tschudi in Glarus."
   },
   {
    "datum": "Oktober 1781",
    "jahr": 1781,
    "text": "Nadeln in der Milch der Tochter Tschudis; Göldi wird entlassen."
   },
   {
    "datum": "9. Februar 1782",
    "jahr": 1782,
    "text": "Die Zürcher Zeitung druckt einen Steckbrief."
   },
   {
    "datum": "6. Juni 1782",
    "jahr": 1782,
    "text": "Der evangelische Rat verurteilt sie als „Vergifterin“ zum Tod."
   },
   {
    "datum": "13. Juni 1782",
    "jahr": 1782,
    "text": "Hinrichtung in Glarus (24. Juni nach gregorianischem Kalender)."
   },
   {
    "datum": "1783",
    "jahr": 1783,
    "text": "August Ludwig Schlözer nennt den Fall einen Justizmord."
   },
   {
    "datum": "27. August 2008",
    "jahr": 2008,
    "text": "Der Glarner Landrat rehabilitiert Anna Göldi."
   }
  ],
  "quellen": [
   "Historisches Lexikon der Schweiz: Anna Göldi",
   "Walter Hauser: Der Justizmord an Anna Göldi, 2007",
   "swissinfo.ch: „Last witch in Europe“ cleared, 27. August 2008",
   "Smithsonian Magazine: Last Person Executed as a Witch in Europe Gets a Museum, 2017"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/anna-goeldi-0.jpg",
    "breite": 900,
    "hoehe": 1009,
    "zeigt": "Steckbrief gegen Anna Göldi in der Zürcher Zeitung vom 9. Februar 1782",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Nzz_anna_goeldin_gr.jpg"
   },
   {
    "datei": "bilder/dark/anna-goeldi-1.jpg",
    "breite": 900,
    "hoehe": 753,
    "zeigt": "Der Hänggiturm in Ennenda, seit 2017 Sitz des Anna-Göldi-Museums",
    "urheber": "Rudolf H. Boettcher",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:H%C3%A4nggiturm%2C_Tr%C3%BCmpyger_-_Jenny_%26_Co%2C_Ennenda.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "stoertebeker-vitalienbrueder",
  "rubrik": "piraten",
  "unterart": "Pirat",
  "titel": "Klaus Störtebeker und die Vitalienbrüder",
  "untertitel": "Kaperfahrer, Seeräuber, Volksheld – Nord- und Ostsee um 1400",
  "jahr": 1400,
  "zeitraum": "1392–1401",
  "ort": "Grasbrook, Hamburg",
  "land": "Deutschland",
  "lat": 53.537,
  "lon": 10,
  "ortQuelle": "https://en.wikipedia.org/wiki/Grasbrook",
  "status": "umstritten",
  "kurz": "Der berühmteste Seeräuber Norddeutschlands ist in den Quellen kaum greifbar. Gesichert sind ein Kaperkrieg, ein Prozess in Hamburg und eine Hinrichtung – fast alles andere ist Legende.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Ende der 1380er-Jahre stritten Königin Margarethe von Dänemark und Albrecht von Mecklenburg um die schwedische Krone. Albrecht geriet 1389 in dänische Gefangenschaft, seine Anhänger hielten nur noch Stockholm. Um die belagerte Stadt zu versorgen, stellten die mecklenburgischen Hafenstädte Rostock und Wismar ab 1392 Kaperbriefe aus: Wer Stockholm mit Lebensmitteln belieferte und dänische Schiffe angriff, handelte erlaubt. Nach den Lebensmitteln, lateinisch victualia, hießen diese Kaperfahrer Vitalienbrüder. Es waren Seeleute, verarmte Adlige, Abenteurer und entlaufene Knechte, die sich durch Beute selbst versorgten. Die Grenze zwischen geduldetem Kaperkrieg und Raub war von Anfang an dünn."
   },
   {
    "titel": "Vom Kaperkrieg zur Seeräuberei",
    "text": "Die Vitalienbrüder überfielen nicht nur dänische Schiffe, sondern auch hansische, englische und skandinavische Kauffahrer und plünderten 1393 das norwegische Bergen. Ab 1394 nutzten sie Gotland mit der Stadt Visby als Stützpunkt. Als 1395 der Frieden von Lindholm Albrecht freikommen ließ, verloren die Kaperbriefe ihren Sinn; aus Kaperfahrern wurden Seeräuber ohne Auftraggeber. Die Hanse, deren Handel litt, rüstete Gegenflotten aus. 1398 eroberte der Deutsche Orden Gotland und vertrieb die Vitalienbrüder. Ein Teil wich in die Nordsee aus, wo ostfriesische Häuptlinge sie aufnahmen und als Kämpfer in ihren eigenen Fehden nutzten. In dieser Zeit tauchte auch der Name Likedeeler auf, Gleichteiler, nach der Teilung der Beute."
   },
   {
    "titel": "Was über Störtebeker belegt ist",
    "text": "Die Quellen zu Störtebeker selbst sind dünn. Nach der Neuen Deutschen Biographie ist er wahrscheinlich identisch mit einem Nikolaus Stortebeker, der 1380 in Wismar erwähnt wird. Als Kaperer erscheint er erstmals 1394 in englischen Klageschriften über geraubte Schiffe, stets zusammen mit Gödeke Michels, der neben ihm als Anführer galt. Der Name, niederdeutsch etwa „Stürz den Becher“, war vermutlich ein Beiname. Über Herkunft, Aussehen, Familie und seine Rolle unter den Vitalienbrüdern ist nichts Sicheres überliefert. Dass er eine herausgehobene Figur war, lässt sich vor allem daraus schließen, dass Chronisten seinen Tod eigens vermerkten."
   },
   {
    "titel": "Gefangennahme und Hinrichtung",
    "text": "Hamburg und Lübeck schickten 1400 eine Flotte gegen die Seeräuber an der ostfriesischen Küste. Nach der Neuen Deutschen Biographie wurde Störtebeker wahrscheinlich im August 1400 bei Helgoland von Hamburger Schiffen überwältigt und mit großer Wahrscheinlichkeit am 21. Oktober 1400 auf dem Grasbrook, der Hamburger Richtstätte an der Elbe, enthauptet, zusammen mit einer größeren Zahl seiner Leute. Die ältere, bis heute verbreitete Datierung nennt den Oktober 1401. Die Köpfe wurden zur Abschreckung an der Elbe auf Pfählen ausgestellt. Gödeke Michels wurde wenig später gefasst und 1401 ebenfalls in Hamburg hingerichtet. Damit war die Seeräuberei in der Nordsee nicht beendet, doch die Vitalienbrüder als erkennbare Gruppe verschwanden in den folgenden Jahren."
   }
  ],
  "legende": "Das meiste, was man über Störtebeker zu wissen glaubt, stammt nicht aus seiner Zeit. Die Mythenbildung begann nach der Neuen Deutschen Biographie Mitte des 16. Jahrhunderts mit einem Volkslied. Die Erzählung, er sei nach der Enthauptung an seinen Männern entlanggegangen, um sie zu retten, ist eine spätere Sage ohne Beleg, ebenso der Mast aus Gold, mit dem angeblich die Turmspitze von St. Katharinen bezahlt wurde. Das Bild des Robin Hood der Meere, der mit den Armen teilte, ist eine Deutung des 19. und 20. Jahrhunderts. Das verbreitete Porträt mit Bart und Federhut ist apokryph und zeigte ursprünglich Kunz von der Rosen. Ein 1878 am Grasbrook gefundener, genagelter Schädel wird oft Störtebeker zugeschrieben; beweisen lässt sich das nicht.",
  "bedeutung": "Die Vitalienbrüder zeigen, wie fließend um 1400 die Grenze zwischen Krieg und Verbrechen auf See war: Städte und Fürsten heuerten Gewalt an und verloren dann die Kontrolle über sie. Die Hanse reagierte mit gemeinsamen Flotten und Prozessen und behauptete so ihre Ordnungsmacht im Nord- und Ostseehandel. Störtebeker selbst wurde erst Jahrhunderte später zur Symbolfigur, für Freiheitsromantik, Lokalstolz und Tourismus von Wismar bis Ralswiek. Gerade weil so wenig belegt ist, eignet sich sein Fall als Lehrstück darüber, wie Legenden historische Lücken füllen.",
  "zeitleiste": [
   {
    "datum": "1389",
    "jahr": 1389,
    "text": "Albrecht von Mecklenburg, König von Schweden, gerät in dänische Gefangenschaft; der Kampf um Stockholm beginnt."
   },
   {
    "datum": "1392",
    "jahr": 1392,
    "text": "Rostock und Wismar stellen Kaperbriefe aus, die Vitalienbrüder entstehen."
   },
   {
    "datum": "1394",
    "jahr": 1394,
    "text": "Störtebeker erscheint mit Gödeke Michels erstmals in englischen Klageakten; Gotland wird Stützpunkt."
   },
   {
    "datum": "1395",
    "jahr": 1395,
    "text": "Der Frieden von Lindholm beendet den Krieg, aus Kaperern werden Seeräuber."
   },
   {
    "datum": "1398",
    "jahr": 1398,
    "text": "Der Deutsche Orden erobert Gotland, die Vitalienbrüder weichen nach Ostfriesland aus."
   },
   {
    "datum": "August 1400",
    "jahr": 1400,
    "text": "Hamburger Schiffe überwältigen Störtebeker wahrscheinlich bei Helgoland."
   },
   {
    "datum": "21. Oktober 1400",
    "jahr": 1400,
    "text": "Hinrichtung auf dem Grasbrook nach heutiger Forschung; die ältere Überlieferung nennt 1401."
   },
   {
    "datum": "1401",
    "jahr": 1401,
    "text": "Gödeke Michels wird in Hamburg hingerichtet."
   }
  ],
  "quellen": [
   "Matthias Puhle: Störtebeker, Klaus. In: Neue Deutsche Biographie 25, 2013",
   "Matthias Puhle: Die Vitalienbrüder. Klaus Störtebeker und die Seeräuber der Hansezeit, 1992",
   "Museum für Hamburgische Geschichte (Störtebeker-Schädel)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/stoertebeker-vitalienbrueder-0.jpg",
    "breite": 809,
    "hoehe": 1100,
    "zeigt": "Wandmalerei in der Kirche von Bunge auf Gotland, um 1405; gilt als eine der wenigen zeitnahen Darstellungen bewaffneter Seeleute aus der Zeit der Vitalienbrüder",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Vitalienbrueder%2C_Wandmalerei_in_d%2C_Kirche_zu_Bunge_auf_Gotland%2C_gemalt_ca._1405.JPG"
   },
   {
    "datei": "bilder/dark/stoertebeker-vitalienbrueder-1.jpg",
    "breite": 659,
    "hoehe": 1100,
    "zeigt": "Die Gefangennahme Störtebekers, Historiengemälde von Anton Hoffmann, um 1899 – eine Vorstellung des 19. Jahrhunderts, keine zeitgenössische Quelle",
    "urheber": "Anton Hoffmann (Painter)",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Anton_Hoffmann_-_Capture_of_Klaus_St%C3%B6rtebeker%2C_1401.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "konstantinische-schenkung",
  "rubrik": "piraten",
  "unterart": "Fälschung",
  "titel": "Die Konstantinische Schenkung",
  "untertitel": "Die folgenreichste Fälschung des Mittelalters – entlarvt von Lorenzo Valla 1440",
  "jahr": 1440,
  "zeitraum": "Entstehung zwischen etwa 750 und 850, Entlarvung 1440",
  "ort": "Rom (Entstehungsort strittig)",
  "land": "Italien",
  "lat": 41.8859,
  "lon": 12.5057,
  "ortQuelle": "https://en.wikipedia.org/wiki/Archbasilica_of_Saint_John_Lateran",
  "status": "aufgeklärt",
  "kurz": "Eine Urkunde, in der Kaiser Konstantin dem Papst Rom und den Westen des Reiches überlässt, stützte jahrhundertelang päpstliche Machtansprüche. Sie war gefälscht, und ein Humanist bewies es mit Sprachkritik.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Das Constitutum Constantini gibt sich als Erlass Kaiser Konstantins des Großen an Papst Silvester I. (314–335). Es erzählt, Silvester habe den Kaiser vom Aussatz geheilt und getauft; zum Dank erhalte der Papst den Vorrang vor den Patriarchaten Antiochia, Alexandria, Konstantinopel und Jerusalem, den Lateranpalast, kaiserliche Insignien und die Herrschaft über Rom und die westlichen Provinzen. Der Kaiser selbst ziehe in den Osten. Die Urkunde passte genau in eine Zeit, in der sich das Papsttum im 8. Jahrhundert von Byzanz löste und mit den Franken verbündete: Sie lieferte eine alte Rechtsgrundlage für eine neue weltliche Macht."
   },
   {
    "titel": "Wie die Fälschung entstand",
    "text": "Wer den Text verfasste, ist unbekannt. Ältere Forschung verortete ihn in der päpstlichen Kanzlei des 8. Jahrhunderts, etwa unter Paul I. (757–767). Der Mediävist Johannes Fried vertrat 2007 die These, er sei erst um 830 im Frankenreich entstanden; die Frage ist bis heute offen, gängig ist eine Datierung zwischen etwa 750 und 850. Sicher ist, dass der Text Mitte des 9. Jahrhunderts in die pseudoisidorischen Dekretalen aufgenommen wurde, eine große Sammlung teils gefälschter Kirchenrechtstexte. Von dort gelangte er in spätere Rechtssammlungen, darunter als Zusatz in das Decretum Gratiani, das Grundbuch des mittelalterlichen Kirchenrechts."
   },
   {
    "titel": "Wie sie gebraucht wurde",
    "text": "Ab dem 11. Jahrhundert beriefen sich Päpste ausdrücklich auf die Schenkung, so Leo IX. 1054 in seinem Streit mit dem Patriarchen von Konstantinopel. Zugleich gab es Widerspruch: Eine Urkunde Kaiser Ottos III. aus dem Jahr 1001 bezeichnet die Schenkung als Erfindung, allerdings ohne Beweisführung. Dante hielt sie für echt, aber für ein Unglück, weil sie die Kirche reich und weltlich gemacht habe. Juristen stritten weniger über die Echtheit als darüber, ob ein Kaiser Reichsgut überhaupt verschenken durfte. Erst im 15. Jahrhundert wurde die Echtheit selbst zur Streitfrage."
   },
   {
    "titel": "Wie sie entlarvt wurde",
    "text": "Nikolaus von Kues legte 1433 in seiner Schrift De concordantia catholica dar, dass keine zeitgenössische Quelle die Schenkung kennt. Lorenzo Valla, Sekretär König Alfons' von Aragón und Neapel, der mit Papst Eugen IV. um Gebiete in Italien stritt, schrieb 1440 seine Abhandlung über die fälschlich geglaubte und erlogene Schenkung. Valla prüfte das Latein: Wendungen und Titel wie die „Satrapen“ am Kaiserhof gehörten nicht ins 4. Jahrhundert. Er wies auf Widersprüche hin, etwa dass Konstantinopel als Patriarchat genannt wird, obwohl die Stadt noch gar nicht gegründet war, und auf das Schweigen aller Geschichtsschreiber. Gedruckt wurde die Schrift erst 1517 durch Ulrich von Hutten."
   }
  ],
  "legende": "Gesichert ist, dass die Urkunde nicht aus dem 4. Jahrhundert stammt; daran zweifelt heute keine ernsthafte Forschung. Nicht gesichert sind Verfasser, Ort und genaue Zeit der Entstehung. Verbreitet ist die Vorstellung, Valla habe allein und als Erster die Fälschung erkannt. Tatsächlich hatten Nikolaus von Kues und wenig später der englische Bischof Reginald Pecock unabhängig ähnliche Zweifel. Vallas Leistung lag in der Methode: Er bewies die Fälschung aus Sprache und Sachwidersprüchen. Ebenso ist der Gedanke irreführend, die päpstliche Macht habe allein auf dieser Urkunde beruht. Sie war ein Argument unter vielen, und auch Gegner der Päpste bestritten oft nur ihre Gültigkeit, nicht ihre Echtheit.",
  "bedeutung": "Vallas Schrift gilt als Gründungsdokument der historischen Quellenkritik. Sie zeigte, dass sich Alter und Herkunft eines Textes aus seinem Wortgebrauch bestimmen lassen. Diese Methode wurde zur Grundlage von Philologie und Urkundenlehre und wird bis heute angewandt, wo Fälschungen geprüft werden. In der Reformation wurde Huttens Druck zur Waffe gegen Rom; Luther las ihn 1520 und sah sich in seiner Kritik am Papsttum bestärkt.",
  "zeitleiste": [
   {
    "datum": "um 750–850",
    "jahr": 800,
    "text": "Entstehung des Constitutum Constantini, Ort und Verfasser sind unbekannt."
   },
   {
    "datum": "Mitte 9. Jahrhundert",
    "jahr": 850,
    "text": "Der Text wird in die pseudoisidorischen Dekretalen aufgenommen."
   },
   {
    "datum": "1001",
    "jahr": 1001,
    "text": "Eine Urkunde Ottos III. nennt die Schenkung eine Erfindung."
   },
   {
    "datum": "1054",
    "jahr": 1054,
    "text": "Papst Leo IX. beruft sich im Streit mit Konstantinopel auf die Schenkung."
   },
   {
    "datum": "1433",
    "jahr": 1433,
    "text": "Nikolaus von Kues bezweifelt die Echtheit in De concordantia catholica."
   },
   {
    "datum": "1440",
    "jahr": 1440,
    "text": "Lorenzo Valla weist die Fälschung mit sprachlichen und historischen Argumenten nach."
   },
   {
    "datum": "1517",
    "jahr": 1517,
    "text": "Ulrich von Hutten lässt Vallas Schrift erstmals drucken."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Donation of Constantine",
   "Lorenzo Valla: The Treatise on the Donation of Constantine, hg. und übers. von Christopher B. Coleman, Yale University Press 1922",
   "Johannes Fried: Donation of Constantine and Constitutum Constantini, de Gruyter 2007",
   "Horst Fuhrmann (Hg.): Das Constitutum Constantini, MGH Fontes iuris 10, 1968"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/konstantinische-schenkung-0.jpg",
    "breite": 900,
    "hoehe": 578,
    "zeigt": "Fresko in der Silvesterkapelle von Santi Quattro Coronati in Rom (1247): Konstantin überreicht Papst Silvester die Zeichen der Herrschaft – die Legende der Schenkung als päpstliche Bildpropaganda.",
    "urheber": "Unknown medieval artist in Rome",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Sylvester_I_and_Constantine.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "barbaresken-korsaren",
  "rubrik": "piraten",
  "unterart": "Korsaren",
  "titel": "Die Barbaresken-Korsaren",
  "untertitel": "Kaperfahrt und Sklavenhandel von Algier, Tunis, Tripolis und Salé – 16. bis 19. Jahrhundert",
  "jahr": 1516,
  "zeitraum": "frühes 16. Jahrhundert bis 1830",
  "ort": "Algier",
  "land": "Algerien",
  "lat": 36.7538,
  "lon": 3.0588,
  "ortQuelle": "https://en.wikipedia.org/wiki/Algiers",
  "status": null,
  "kurz": "Über drei Jahrhunderte kaperten Korsaren aus Nordafrika Schiffe und überfielen Küsten bis Irland und Island. Hunderttausende Europäer gerieten in Sklaverei – wie viele genau, ist bis heute umstritten.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Die Barbareskenküste, benannt nach den Berbern, reichte von Marokko bis Libyen. Seit dem frühen 16. Jahrhundert standen Algier, Tunis und Tripolis unter osmanischer Oberhoheit; die Brüder Oruç und Hayreddin Barbarossa machten Algier zum Zentrum der Kaperfahrt und stellten sich unter den Schutz des Sultans. Später regierten dort weitgehend selbstständige Statthalter, Deys und Beys, Marokko blieb unabhängig, sein Hafen Salé wurde ein eigenes Korsarennest. Die Korsaren waren keine Gesetzlosen im engen Sinn: Sie fuhren mit Erlaubnis ihrer Herrscher, teilten die Beute mit dem Staat und galten im Krieg gegen christliche Mächte als legitim. Unter ihnen waren viele Konvertiten aus Europa, sogenannte Renegaten."
   },
   {
    "titel": "Raubzüge auf See und an Land",
    "text": "Ihre Beute waren Schiffe, Waren und vor allem Menschen. Neben Kaperungen im Mittelmeer und Atlantik überfielen Korsaren Küstendörfer in Italien, Spanien, Frankreich und auf den Inseln, was ganze Landstriche entvölkerte und den Bau von Wachtürmen nach sich zog. Die weitesten Fahrten führten 1627 nach Island, wo nach isländischen Berichten rund 400 Menschen verschleppt wurden, und 1631 nach Baltimore im Südwesten Irlands, wo über hundert Bewohner in Gefangenschaft gerieten. Angeführt wurde der Zug nach Irland von Murat Reis, einem zum Islam übergetretenen Niederländer namens Jan Janszoon. Auch einer der bekanntesten Gefangenen war Europäer: Miguel de Cervantes lebte von 1575 bis 1580 als Gefangener in Algier."
   },
   {
    "titel": "Leben in Gefangenschaft",
    "text": "Gefangene wurden auf Märkten verkauft oder blieben Eigentum des Herrschers. Viele mussten auf den Galeeren rudern, in Steinbrüchen und am Hafenbau arbeiten oder dienten in Haushalten; nachts wurden staatliche Sklaven in großen Gefängnissen, den Bagnos, untergebracht. Wer wohlhabend oder angesehen war, wurde gegen Lösegeld festgehalten. Die Bedingungen schwankten stark, von harter Zwangsarbeit bis zu gewissen Freiheiten, etwa eigenem Handel. Der Übertritt zum Islam brachte nicht automatisch die Freiheit, verbesserte aber oft die Lage. Viele Gefangene starben an Seuchen, besonders bei Pestwellen. Familien und Gemeinden zu Hause sammelten Geld, Kirchen hielten Kollekten ab, um ihre Angehörigen auszulösen."
   },
   {
    "titel": "Wie viele Menschen? Der Stand der Forschung",
    "text": "Verlässliche Gesamtzahlen gibt es nicht. Der Historiker Robert C. Davis schätzte 2003, dass zwischen 1530 und 1780 eine Million bis eineinviertel Millionen Europäer in nordafrikanische Sklaverei gerieten. Er rechnete dafür aus Angaben zum Sklavenbestand in Algier, Tunis und Tripolis und aus angenommenen Sterbe- und Freikaufraten hoch. Andere Historiker halten diese Zahl für zu hoch, weil sie auf wenigen, teils zeitgenössisch übertriebenen Bestandsangaben aus einzelnen Jahrzehnten beruht; ihre Schätzungen liegen deutlich niedriger. Unstrittig ist, dass es sich um Hunderttausende handelte und dass der Höhepunkt im frühen 17. Jahrhundert lag. Ebenso unstrittig ist, dass christliche Staaten, besonders der Malteserorden und die Toskana, im gleichen Zeitraum Zehntausende Muslime versklavten."
   },
   {
    "titel": "Freikauf, Tribut und das Ende",
    "text": "Auf den Freikauf spezialisiert waren katholische Orden, die Trinitarier und die Mercedarier, die regelmäßig Gesandtschaften mit Lösegeld nach Nordafrika schickten; Cervantes wurde 1580 von Trinitariern ausgelöst. Seemächte wie England, Frankreich und die Niederlande schlossen Verträge und zahlten Abgaben, um ihre Schiffe zu schützen, später auch die Vereinigten Staaten. Gegen Tripolis führten die USA 1801 bis 1805 Krieg, 1815 erneut gegen Algier. Am 27. August 1816 beschoss eine britisch-niederländische Flotte Algier und erzwang die Freilassung der christlichen Sklaven. Endgültig endete die Kaperfahrt mit der französischen Eroberung Algiers 1830."
   }
  ],
  "legende": "Zwei gegensätzliche Verzerrungen prägen das Thema. Lange wurde es in Europa vergessen, obwohl Hunderttausende Menschen betroffen waren. Heute wird die Barbareskensklaverei umgekehrt gern von Rechtsextremen als Gegenrechnung zum transatlantischen Sklavenhandel benutzt. Beides hält der Forschung nicht stand: Die Zahl der nach Amerika verschleppten Afrikaner lag mit über zwölf Millionen um ein Vielfaches höher, und die Mittelmeersklaverei war nicht an Hautfarbe gebunden und nicht erblich organisiert. Freikauf und Bekehrung boten Auswege. Auch das Bild vom Kampf Islam gegen Christentum vereinfacht: Unter den Korsaren waren viele Europäer, und christliche Mächte betrieben selbst Kaperfahrt und Sklavenhandel.",
  "bedeutung": "Die Korsarenzüge prägten jahrhundertelang das Leben an den Küsten des Mittelmeers, von Wachtürmen und befestigten Dörfern bis zu Votivbildern freigekaufter Gefangener. Gefangenschaftsberichte wurden in England, Frankreich und Spanien zu einer eigenen Literaturgattung. Der Konflikt um Tribut und Kaperungen war der erste Auslandskrieg der jungen Vereinigten Staaten und trug zum Aufbau ihrer Marine bei. Die Beschießung von Algier 1816 und die Eroberung 1830 lieferten zugleich Begründungen für die französische Kolonialherrschaft in Nordafrika.",
  "zeitleiste": [
   {
    "datum": "um 1516–1529",
    "jahr": 1516,
    "text": "Die Brüder Barbarossa machen Algier zum Stützpunkt unter osmanischer Oberhoheit."
   },
   {
    "datum": "September 1575",
    "jahr": 1575,
    "text": "Miguel de Cervantes gerät in Gefangenschaft und wird nach Algier gebracht."
   },
   {
    "datum": "1580",
    "jahr": 1580,
    "text": "Trinitarier kaufen Cervantes frei."
   },
   {
    "datum": "1627",
    "jahr": 1627,
    "text": "Korsaren überfallen Island und verschleppen nach isländischen Berichten rund 400 Menschen."
   },
   {
    "datum": "Juni 1631",
    "jahr": 1631,
    "text": "Überfall auf Baltimore in Irland unter Murat Reis."
   },
   {
    "datum": "1801–1805",
    "jahr": 1801,
    "text": "Krieg der Vereinigten Staaten gegen Tripolis."
   },
   {
    "datum": "27. August 1816",
    "jahr": 1816,
    "text": "Britisch-niederländische Beschießung von Algier, die christlichen Sklaven kommen frei."
   },
   {
    "datum": "Juli 1830",
    "jahr": 1830,
    "text": "Frankreich erobert Algier, die Kaperfahrt endet."
   }
  ],
  "quellen": [
   "Robert C. Davis: Christian Slaves, Muslim Masters. White Slavery in the Mediterranean, the Barbary Coast and Italy, 1500–1800, 2003",
   "Encyclopaedia Britannica: Barbary pirate",
   "Linda Colley: Captives. Britain, Empire and the World, 1600–1850, 2002",
   "Daniel Panzac: Barbary Corsairs. The End of a Legend, 1800–1820, 2005"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/barbaresken-korsaren-0.jpg",
    "breite": 900,
    "hoehe": 525,
    "zeigt": "Christliche Gefangene werden auf einem Platz in Algier als Sklaven verkauft, Radierung von Jan Luyken, 1684 (Rijksmuseum Amsterdam)",
    "urheber": "Jan Luyken",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Christelijke_gevangenen_worden_op_een_plein_te_Algiers_als_slaaf_verkocht%2C_Jan_Luyken%2C_1684.jpg"
   },
   {
    "datei": "bilder/dark/barbaresken-korsaren-1.jpg",
    "breite": 900,
    "hoehe": 653,
    "zeigt": "Ordensbrüder der Mercedarier beim Freikauf christlicher Gefangener in Nordafrika, Darstellung des 17. Jahrhunderts",
    "urheber": "Anonymous 17th century",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Purchase_of_Christian_captives_from_the_Barbary_States.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "ende-goldenes-zeitalter-piraterie",
  "rubrik": "piraten",
  "unterart": "Verfolgungswelle",
  "titel": "Das Ende des „Goldenen Zeitalters“ der Piraterie",
  "untertitel": "Begnadigung, Galgen und Woodes Rogers – Atlantik 1717–1726",
  "jahr": 1717,
  "zeitraum": "1717–1726",
  "ort": "Nassau, New Providence",
  "land": "Bahamas",
  "lat": 25.06,
  "lon": -77.345,
  "ortQuelle": "https://en.wikipedia.org/wiki/Nassau,_Bahamas",
  "status": null,
  "kurz": "Innerhalb eines Jahrzehnts beendeten Begnadigungen, Kriegsschiffe und Massenprozesse die große Welle der atlantischen Piraterie. Hunderte Männer starben am Galgen, die Seewege wurden wieder sicher.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Zwischen etwa 1716 und 1726 erreichte die Piraterie im Atlantik ihren Höhepunkt. Nach dem Ende des Spanischen Erbfolgekriegs waren Tausende Seeleute arbeitslos, die Arbeit auf Handels- und Kriegsschiffen war hart und schlecht bezahlt. Der Historiker Marcus Rediker schätzt, dass in diesem Jahrzehnt insgesamt rund 4000 Männer als Piraten fuhren. Ihr wichtigster Stützpunkt war Nassau auf New Providence in den Bahamas, wo es kaum eine Verwaltung gab. Von dort und später von Westafrika aus störten Piraten den Handel mit Zucker, Tabak und Sklaven so stark, dass Kaufleute in London und den Kolonien die Regierung zum Handeln drängten. Der Begriff „Goldenes Zeitalter“ stammt erst aus viel späterer Zeit."
   },
   {
    "titel": "Begnadigung und Woodes Rogers",
    "text": "Im September 1717 erließ König Georg I. eine Proklamation, die allen Piraten Straffreiheit versprach, wenn sie sich bis zu einer Frist im folgenden Jahr ergaben. Zugleich ernannte die Krone den Kaperkapitän Woodes Rogers zum Gouverneur der Bahamas. Rogers hatte 1708 bis 1711 die Welt umsegelt und dabei Alexander Selkirk von der Insel Juan Fernández geholt, das Vorbild für Robinson Crusoe. Im Juli 1718 traf er mit Kriegsschiffen in Nassau ein. Hunderte Piraten nahmen die Begnadigung an, darunter Benjamin Hornigold, der danach im Auftrag von Rogers Piraten jagte. Andere, wie Charles Vane, flohen. Als einige Begnadigte rückfällig wurden, ließ Rogers im Dezember 1718 in Nassau acht Männer nach einem Prozess hängen, ein neunter wurde begnadigt."
   },
   {
    "titel": "Prozesse und Galgen",
    "text": "Die rechtliche Grundlage bot ein Gesetz von 1700, das Gerichte für Piraterie direkt in den Kolonien erlaubte; Angeklagte mussten nicht mehr nach London gebracht werden. Ein weiteres Gesetz von 1721 stellte auch den Handel mit Piraten unter Strafe. Im November und Dezember 1718 wurden in Charleston Stede Bonnet und mehr als zwanzig seiner Männer gehängt, im November 1718 fiel Blackbeard vor North Carolina. 1720 folgten Rackham und seine Mannschaft in Jamaika. Den größten Prozess hielt ein Admiralitätsgericht 1722 in Cape Coast Castle an der Goldküste ab, nachdem ein Kriegsschiff die Mannschaft von Bartholomew Roberts gestellt hatte: Mehr als fünfzig Männer wurden gehängt, andere zu Zwangsarbeit verurteilt. Rediker schätzt die Zahl der hingerichteten Piraten in diesem Jahrzehnt auf mehrere hundert."
   },
   {
    "titel": "Wie es endete",
    "text": "Die Hinrichtungen waren öffentlich und als Abschreckung gedacht. Geistliche wie Cotton Mather in Boston predigten vor den Verurteilten, Predigten und letzte Worte wurden gedruckt und verkauft. Die Leichen bekannter Piraten wurden in Ketten an Hafeneinfahrten ausgestellt. Als im Juli 1726 in Boston William Fly gehängt wurde, galt die große Welle als gebrochen; danach blieb die Piraterie im Atlantik vereinzelt. Rogers kehrte 1729 für eine zweite Amtszeit nach Nassau zurück und starb dort 1732. Der Wahlspruch seiner Kolonie, „Expulsis Piratis, Restituta Commercia“, die Piraten vertrieben, der Handel wiederhergestellt, blieb bis zur Unabhängigkeit der Bahamas 1973 im Wappen."
   }
  ],
  "legende": "Das Bild dieser Zeit stammt weitgehend aus der „General History of the Pyrates“ von 1724, die Prozessakten mit erfundenen Szenen verband. Die Vorstellung einer „Piratenrepublik“ in Nassau mit eigener Verfassung ist eine Zuspitzung: Es gab dort keine gemeinsame Regierung, sondern eine lose Gemeinschaft von Schiffsmannschaften. Gesichert ist dagegen, dass viele Mannschaften Beute nach festen Anteilen teilten, ihren Kapitän wählten und Verletzte entschädigten. Das Planken-Laufen als übliche Hinrichtungsart der Piraten ist für diese Zeit kaum belegt. Auch der Ruf des edlen Rebellen hält nicht stand: Die Opfer waren meist einfache Seeleute und Passagiere, und auf Piratenschiffen wurden Afrikaner oft weiter als Sklaven behandelt.",
  "bedeutung": "Das Ende der großen Piratenwelle machte die Seewege des britischen Weltreichs sicher und schützte vor allem den Handel mit Zucker und versklavten Menschen. Es zeigt, wie ein Staat Seeräuberei mit einer Mischung aus Begnadigung, Kriegsschiffen, neuen Gesetzen und öffentlicher Abschreckung beendete. Die Prozesse von Nassau bis Cape Coast schufen eine Rechtspraxis, die Piraten als „Feinde aller Völker“ behandelte, eine Formel, an die auch das moderne Völkerrecht zur Piraterie anknüpft.",
  "zeitleiste": [
   {
    "datum": "5. September 1717",
    "jahr": 1717,
    "text": "Königliche Proklamation verspricht Piraten bei Aufgabe Straffreiheit."
   },
   {
    "datum": "Juli 1718",
    "jahr": 1718,
    "text": "Woodes Rogers trifft als Gouverneur in Nassau ein."
   },
   {
    "datum": "November 1718",
    "jahr": 1718,
    "text": "Blackbeard fällt vor North Carolina; in Charleston werden Bonnets Männer gehängt."
   },
   {
    "datum": "Dezember 1718",
    "jahr": 1718,
    "text": "Rogers lässt in Nassau acht rückfällige Piraten hängen; Stede Bonnet wird in Charleston hingerichtet."
   },
   {
    "datum": "1721",
    "jahr": 1721,
    "text": "Neues Gesetz gegen Piraterie stellt auch den Handel mit Piraten unter Strafe."
   },
   {
    "datum": "Februar 1722",
    "jahr": 1722,
    "text": "Bartholomew Roberts fällt vor Westafrika, im Frühjahr folgt der Prozess in Cape Coast Castle."
   },
   {
    "datum": "Juli 1726",
    "jahr": 1726,
    "text": "Hinrichtung von William Fly in Boston; die Welle der Piraterie gilt als gebrochen."
   },
   {
    "datum": "1732",
    "jahr": 1732,
    "text": "Woodes Rogers stirbt in Nassau."
   }
  ],
  "quellen": [
   "Marcus Rediker: Villains of All Nations. Atlantic Pirates in the Golden Age, 2004",
   "Colin Woodard: The Republic of Pirates, 2007",
   "Encyclopaedia Britannica: Woodes Rogers",
   "Royal Museums Greenwich: Woodes Rogers and his Family (William Hogarth, 1729)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/ende-goldenes-zeitalter-piraterie-0.jpg",
    "breite": 900,
    "hoehe": 660,
    "zeigt": "Woodes Rogers (rechts) mit Sohn und Tochter, Gemälde von William Hogarth, 1729 (National Maritime Museum Greenwich)",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Woodes_Rogers_and_his_Family_RMG_L9135.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "blackbeard",
  "rubrik": "piraten",
  "unterart": "Pirat",
  "titel": "Blackbeard",
  "untertitel": "Edward Teach und die Karibik, 1716–1718",
  "jahr": 1718,
  "zeitraum": "1716–1718",
  "ort": "Ocracoke Inlet, North Carolina",
  "land": "USA",
  "lat": 35.07,
  "lon": -76.02,
  "ortQuelle": "https://en.wikipedia.org/wiki/Ocracoke_Inlet",
  "status": null,
  "kurz": "Kaum zwei Jahre war Edward Teach als Pirat aktiv, doch keiner prägte das Bild des Seeräubers so sehr. Seine Laufbahn endete im November 1718 in einem Gefecht vor North Carolina.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Nach dem Spanischen Erbfolgekrieg, der 1713/14 endete, verloren Tausende Seeleute und Kaperfahrer ihre Arbeit. Viele sammelten sich auf New Providence in den Bahamas, wo es kaum eine Verwaltung gab; der Hafen Nassau wurde für einige Jahre zum Stützpunkt der Piraten in der Karibik. Hier taucht um 1716 ein Mann namens Edward Teach oder Thatch auf, der unter dem erfahrenen Piraten Benjamin Hornigold diente. Über seine Herkunft ist wenig sicher: Ältere Darstellungen nennen Bristol, neuere Forschung vermutet eine Familie aus Jamaika. Wann er geboren wurde und ob er zuvor als Kaperfahrer für die Krone gesegelt war, ist nicht belegt."
   },
   {
    "titel": "Die Laufbahn",
    "text": "Ende 1717 kaperte Teach bei Martinique das französische Sklavenschiff La Concorde, machte es zu seinem Flaggschiff und nannte es Queen Anne's Revenge. Mit mehreren Schiffen und einigen hundert Mann kreuzte er in der Karibik und vor der nordamerikanischen Küste. Im Mai 1718 sperrte er etwa eine Woche lang den Hafen von Charleston in South Carolina, hielt Schiffe und Passagiere fest und gab die Geiseln erst gegen eine Kiste mit Arzneimitteln frei. Kurz darauf lief die Queen Anne's Revenge bei Beaufort Inlet in North Carolina auf Grund, nach Ansicht vieler Historiker absichtlich, um die Mannschaft zu verkleinern und die Beute auf weniger Köpfe zu verteilen. Teach nahm anschließend in North Carolina die königliche Begnadigung an, kehrte aber bald zur Piraterie zurück."
   },
   {
    "titel": "Das Ende",
    "text": "Der Gouverneur von Virginia, Alexander Spotswood, misstraute der Duldung durch die Behörden North Carolinas und ließ ohne deren Zustimmung zwei kleine Schaluppen mit Matrosen der Royal Navy ausrüsten. Unter dem Befehl von Leutnant Robert Maynard stellten sie Teach am 22. November 1718 an der Ocracoke Inlet. Im Kampf an Bord wurden Teach und etwa zehn seiner Männer getötet, auch Maynard hatte Tote und Verwundete. Die überlebenden Piraten wurden 1719 in Williamsburg vor Gericht gestellt; die meisten wurden zum Tod verurteilt und gehängt. Sein früherer Steuermann Israel Hands, der beim Gefecht nicht an Bord war, sagte als Zeuge aus und wurde begnadigt."
   },
   {
    "titel": "Das Wrack",
    "text": "1996 entdeckte eine private Bergungsfirma vor Beaufort Inlet ein Wrack aus dem frühen 18. Jahrhundert. Nach jahrelanger Untersuchung erklärte der Staat North Carolina 2011, es handle sich um die Queen Anne's Revenge. Taucher und Archäologen haben seither Kanonen, Anker, Teile der Takelage, medizinische Geräte, Glas, Spuren von Goldstaub und eine große Zahl weiterer Fundstücke gehoben, die im North Carolina Maritime Museum in Beaufort ausgestellt und erforscht werden. Die Funde erlauben einen seltenen Blick auf den Alltag an Bord eines Piratenschiffs, das zuvor als Sklavenschiff gedient hatte. Ein Schatz im Sinn der Legende fand sich nicht."
   }
  ],
  "legende": "Das Bild von Blackbeard geht vor allem auf „A General History of the Pyrates“ zurück, 1724 unter dem Namen Captain Charles Johnson in London erschienen. Dort steht, er habe vor Gefechten brennende Lunten unter den Hut gesteckt, vierzehn Frauen gehabt und einen Schatz vergraben, dessen Versteck nur er und der Teufel kannten. Für keine dieser Angaben gibt es unabhängige Belege; das Buch mischt Gerichtsakten und Zeitungsberichte mit Erfindungen, um zu verkaufen. Gesichert ist dagegen, dass Teach bewusst mit seinem Aussehen und seinem Ruf einschüchterte. Für Morde an Gefangenen gibt es nach Auswertung der erhaltenen Quellen keine Belege; seine Opfer ergaben sich offenbar meist, weil sie das Schlimmste fürchteten.",
  "bedeutung": "Blackbeards Laufbahn fiel in den Höhepunkt der Piraterie in der Karibik und zugleich in den Beginn ihrer Bekämpfung. Spotswoods eigenmächtiger Einsatz zeigt, wie die britischen Kolonien begannen, Piraterie nicht mehr zu dulden. Nach seinem Tod wurde Teach zur Kunstfigur des Piraten schlechthin, von Johnsons Buch über Romane bis zu Filmen. Das Wrack der Queen Anne's Revenge ist heute eine der wichtigsten archäologischen Quellen zur Piraterie und erinnert zugleich daran, dass viele Piratenschiffe aus dem Sklavenhandel stammten.",
  "zeitleiste": [
   {
    "datum": "um 1716",
    "jahr": 1716,
    "text": "Teach segelt unter Benjamin Hornigold von New Providence aus."
   },
   {
    "datum": "November 1717",
    "jahr": 1717,
    "text": "Kaperung der La Concorde bei Martinique, die er in Queen Anne's Revenge umbenennt."
   },
   {
    "datum": "Mai 1718",
    "jahr": 1718,
    "text": "Blockade des Hafens von Charleston, Geiseln gegen Arzneimittel."
   },
   {
    "datum": "Juni 1718",
    "jahr": 1718,
    "text": "Die Queen Anne's Revenge läuft bei Beaufort Inlet auf Grund; Teach nimmt die Begnadigung an."
   },
   {
    "datum": "22. November 1718",
    "jahr": 1718,
    "text": "Teach fällt im Gefecht mit Robert Maynards Männern an der Ocracoke Inlet."
   },
   {
    "datum": "1719",
    "jahr": 1719,
    "text": "Prozess gegen seine überlebenden Männer in Williamsburg, Virginia."
   },
   {
    "datum": "1996",
    "jahr": 1996,
    "text": "Entdeckung des Wracks vor Beaufort Inlet, 2011 als Queen Anne's Revenge bestätigt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Blackbeard",
   "Angus Konstam: Blackbeard. America's Most Notorious Pirate, 2006",
   "Colin Woodard: The Republic of Pirates, 2007",
   "North Carolina Department of Natural and Cultural Resources: Queen Anne's Revenge Project"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/blackbeard-0.jpg",
    "breite": 663,
    "hoehe": 1100,
    "zeigt": "Blackbeard, Kupferstich von Benjamin Cole aus der zweiten Auflage der „General History of the Pyrates“, 1724 – ein Fantasiebild, kein Porträt nach dem Leben",
    "urheber": "Engraved by Benjamin Cole[http://catalogue.nla.gov.au/Record/1574667/Details?lookfor=subject%3A%22London+%28En",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Blackbeard_the_Pirate.jpg"
   },
   {
    "datei": "bilder/dark/blackbeard-1.jpg",
    "breite": 718,
    "hoehe": 1100,
    "zeigt": "„Captain Teach commonly call'd Black Beard“, Kupferstich aus einer Ausgabe von 1736 der „General History of the Pyrates“",
    "urheber": "Joseph Nicholls (fl. 1726&ndash;55).[https://books.google.com.sg/books?id=fp8aAAAAYAAJ&pg=PA176] Although Jame",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Edward_Teach_Commonly_Call%27d_Black_Beard.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "anne-bonny-mary-read",
  "rubrik": "piraten",
  "unterart": "Piratinnen",
  "titel": "Anne Bonny und Mary Read",
  "untertitel": "Zwei Frauen vor dem Piratengericht – Jamaika 1720",
  "jahr": 1720,
  "zeitraum": "August bis November 1720",
  "ort": "Spanish Town, Jamaika",
  "land": "Jamaika",
  "lat": 17.991,
  "lon": -76.957,
  "ortQuelle": "https://en.wikipedia.org/wiki/Spanish_Town",
  "status": "umstritten",
  "kurz": "Zwei Frauen fuhren 1720 als Piratinnen mit John Rackham und standen in Jamaika vor Gericht. Gesichert ist der Prozess – ihre Lebensgeschichten stammen großteils aus einem Buch voller Ausschmückungen.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Als Woodes Rogers 1718 Gouverneur der Bahamas wurde, nahmen viele Piraten in Nassau die königliche Begnadigung an; John Rackham, genannt Calico Jack, folgte 1719. In Nassau lebte auch Anne Bonny, die mit dem Seemann James Bonny verheiratet war und sich Rackham anschloss. Mary Read war wohl auf einem Schiff in die Bahamas gekommen, das Piraten gekapert hatten. Was über beider Leben vor 1720 erzählt wird, stammt fast ausschließlich aus der „General History of the Pyrates“ von 1724 und ist nicht unabhängig überprüfbar: Read soll als Junge erzogen worden sein und in Flandern als Soldat gedient haben, Bonny soll die Tochter eines irischen Anwalts gewesen sein, der nach Carolina auswanderte."
   },
   {
    "titel": "Die Fahrt",
    "text": "Im August 1720 stahlen Rackham, Bonny, Read und eine kleine Mannschaft in Nassau die Schaluppe William und kehrten zur Piraterie zurück. Am 5. September 1720 erklärte Gouverneur Rogers sie in einer Proklamation zu Piraten und nannte die beiden Frauen ausdrücklich mit Namen; Zeitungen in den Kolonien druckten den Text nach. Die Gruppe überfiel in den folgenden Wochen vor allem Fischerboote und kleine Handelsschiffe bei Kuba, Hispaniola und Jamaika. Ihre Beute war bescheiden. Im Oktober 1720 stellte der von Jamaikas Gouverneur beauftragte Kapitän Jonathan Barnet die William an der Westspitze Jamaikas; die Mannschaft ergab sich nach kurzem Widerstand."
   },
   {
    "titel": "Der Prozess",
    "text": "Rackham und seine Männer wurden am 16. November 1720 vor einem Admiralitätsgericht in Spanish Town, damals St. Jago de la Vega, verurteilt; Rackham wurde am 18. November in Port Royal gehängt. Bonny und Read standen am 28. November 1720 gesondert vor Gericht. Die Zeugin Dorothy Thomas, die sie gefangen genommen hatten, sagte aus, die Frauen hätten Männerjacken und lange Hosen getragen, Pistolen und Macheten geführt und seien nur an ihrer Gestalt als Frauen zu erkennen gewesen. Zwei weitere Zeugen sagten, die Frauen hätten bei Überfällen Männerkleidung getragen, sonst aber Frauenkleider. Beide wurden zum Tod verurteilt. Weil sie erklärten, schwanger zu sein, wurde die Vollstreckung nach damaligem Recht aufgeschoben. Das Protokoll erschien 1721 in Jamaika im Druck."
   },
   {
    "titel": "Wie es endete",
    "text": "Mary Read starb im Gefängnis; nach dem Kirchenbuch der Gemeinde St. Catherine wurde sie am 28. April 1721 begraben, vermutlich war sie an Fieber erkrankt. Über Anne Bonny schweigen die Quellen nach dem Prozess. Ob sie hingerichtet wurde, freikam oder entlassen wurde, ist nicht bekannt. Spätere Erzählungen, sie sei von ihrem Vater ausgelöst worden, habe in South Carolina geheiratet und sei hochbetagt gestorben, lassen sich nicht belegen."
   }
  ],
  "legende": "Die bekannten Lebensläufe der beiden Frauen stammen aus der „General History of the Pyrates“, erschienen 1724 unter dem Namen Captain Charles Johnson. Wer dahinter stand, ist ungeklärt; die lange verbreitete Zuschreibung an Daniel Defoe wird von den meisten Forschern heute abgelehnt. Das Buch nutzte das Prozessprotokoll, schmückte es aber mit Liebesgeschichten, Verkleidungen und Duellen aus, die sich nirgends sonst finden. Romantische Episoden wie Reads Liebe zu einem gefangenen Seemann sind daher Erzählung, nicht Befund. Gesichert sind dagegen die Proklamation von Rogers, die Aussagen vor Gericht und das Urteil. Bonny und Read waren auch nicht die einzigen Frauen auf See – aber ihr Prozess ist ungewöhnlich gut dokumentiert.",
  "bedeutung": "Der Fall ist eines der wenigen gut dokumentierten Beispiele für Frauen in der Piraterie des 18. Jahrhunderts. Er zeigt, dass Frauen sich in einer männlich bestimmten Seefahrtswelt an Gewalt beteiligen konnten, und dass Gerichte sie dafür ebenso verurteilten. Zugleich ist er ein Lehrstück über Quellen: Seit 1724 überlagern Romane, Theaterstücke und Filme die schmale Aktenlage. Für die Geschlechtergeschichte und die Erforschung der Piraterie sind Bonny und Read zu Schlüsselfiguren geworden, gerade weil die Akten so wenig über ihr eigenes Erleben verraten.",
  "zeitleiste": [
   {
    "datum": "Juli 1718",
    "jahr": 1718,
    "text": "Woodes Rogers trifft als Gouverneur in Nassau ein; Rackham nimmt die Begnadigung erst 1719 an."
   },
   {
    "datum": "August 1720",
    "jahr": 1720,
    "text": "Rackham, Bonny und Read stehlen in Nassau die Schaluppe William."
   },
   {
    "datum": "5. September 1720",
    "jahr": 1720,
    "text": "Rogers erklärt die Gruppe einschließlich der beiden Frauen öffentlich zu Piraten."
   },
   {
    "datum": "Oktober 1720",
    "jahr": 1720,
    "text": "Kapitän Jonathan Barnet nimmt die Mannschaft vor der Westspitze Jamaikas gefangen."
   },
   {
    "datum": "18. November 1720",
    "jahr": 1720,
    "text": "Rackham wird in Port Royal gehängt."
   },
   {
    "datum": "28. November 1720",
    "jahr": 1720,
    "text": "Bonny und Read werden verurteilt, die Vollstreckung wegen Schwangerschaft aufgeschoben."
   },
   {
    "datum": "28. April 1721",
    "jahr": 1721,
    "text": "Begräbnis von Mary Read in der Gemeinde St. Catherine."
   }
  ],
  "quellen": [
   "The Tryals of Captain John Rackam, and Other Pirates, Jamaika 1721 (The National Archives UK, CO 137/14)",
   "Encyclopaedia Britannica: Anne Bonny; Mary Read",
   "Marcus Rediker: Villains of All Nations. Atlantic Pirates in the Golden Age, 2004",
   "Colin Woodard: The Republic of Pirates, 2007"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/anne-bonny-mary-read-0.jpg",
    "breite": 900,
    "hoehe": 505,
    "zeigt": "„Ann Bonny and Mary Read convicted of Piracy Novr. 28th. 1720“, Kupferstich von Benjamin Cole aus der „General History of the Pyrates“, 1724",
    "urheber": "Engraved by Benjamin Cole[http://catalogue.nla.gov.au/Record/1574667/Details?lookfor=subject%3A%22London+%28En",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:General_History_of_the_Pyrates_-_Ann_Bonny_and_Mary_Read.jpg"
   },
   {
    "datei": "bilder/dark/anne-bonny-mary-read-1.jpg",
    "breite": 707,
    "hoehe": 1100,
    "zeigt": "Proklamation von Gouverneur Woodes Rogers vom 5. September 1720, die Rackham und seine Mannschaft samt Anne Bonny und Mary Read zu Piraten erklärt",
    "urheber": "Woodes Rogers",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Proclamation_from_Woodes_Rogers_naming_Jack_Rackham_and_crew_as_pirates.png"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "casanova-bleikammern",
  "rubrik": "piraten",
  "unterart": "Ausbruch",
  "titel": "Casanovas Flucht aus den Bleikammern",
  "untertitel": "Ausbruch über die Dächer des Dogenpalasts – Venedig 1756",
  "jahr": 1756,
  "zeitraum": "Juli 1755 bis November 1756",
  "ort": "Dogenpalast, Venedig",
  "land": "Italien",
  "lat": 45.4337,
  "lon": 12.3404,
  "ortQuelle": "https://en.wikipedia.org/wiki/Doge%27s_Palace",
  "status": "umstritten",
  "kurz": "In der Nacht zum 1. November 1756 entkam Giacomo Casanova aus dem Staatsgefängnis unter dem Dach des Dogenpalasts. Dass er floh, ist sicher; fast alles Weitere wissen wir nur von ihm selbst.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Giacomo Casanova, 1725 in Venedig geboren, hatte als Geistlicher, Geiger, Spieler und Abenteurer gelebt und war in der Stadt als Freigeist bekannt. Die Staatsinquisitoren, ein geheim arbeitendes Gremium der Republik Venedig für Fragen der Staatssicherheit, ließen ihn am 26. Juli 1755 verhaften. Eine Anklage wurde ihm nicht eröffnet. Die erhaltenen Akten und Spitzelberichte werfen ihm Gottlosigkeit, Umgang mit Magie und kabbalistischen Büchern sowie Verführung junger Patrizier vor; auch seine Mitgliedschaft bei den Freimaurern spielte vermutlich eine Rolle. Nach der Encyclopaedia Britannica lautete die Strafe auf fünf Jahre, was Casanova selbst nicht erfuhr."
   },
   {
    "titel": "Die Haft",
    "text": "Casanova kam in die Piombi, die Bleikammern: Zellen direkt unter dem mit Bleiplatten gedeckten Dach des Dogenpalasts, im Sommer heiß, im Winter kalt. Die Piombi waren für wenige, meist politische Häftlinge gedacht und galten als ausbruchssicher. Nach seiner Darstellung fand Casanova auf dem Dachboden, wo er sich zeitweise bewegen durfte, einen Eisenriegel, schliff ihn zu einer Spitze und grub monatelang ein Loch durch den Boden seiner Zelle. Kurz vor dem Ziel wurde er in eine andere Zelle verlegt, und der Plan war hinfällig. Über die Bücher, die Häftlinge austauschen durften, nahm er Kontakt zu dem Mönch Marino Balbi in der Nachbarzelle auf."
   },
   {
    "titel": "Die Flucht",
    "text": "Casanova schmuggelte die Eisenspitze nach eigener Schilderung in einer Bibel, über der ein Teller Nudeln lag, zu Balbi, der damit die Decke seiner Zelle durchbrach und Casanova von oben befreite. In der Nacht vom 31. Oktober auf den 1. November 1756 stiegen beide auf das Bleidach, gelangten durch ein Dachfenster in den Palast und irrten durch Räume der Kanzlei. Am Morgen sah ein Wächter sie hinter einem Fenster, hielt sie für Besucher, die versehentlich eingeschlossen worden waren, und öffnete die Tür. Die beiden verließen den Palast, nahmen eine Gondel und flohen auf das Festland. Von dort schlug sich Casanova über Bozen und München nach Paris durch."
   },
   {
    "titel": "Was danach geschah",
    "text": "In Paris wurde Casanova durch seine Erzählung bekannt und war 1757 an der Einrichtung einer Staatslotterie beteiligt. Fast zwanzig Jahre lang durfte er nicht nach Venedig zurück. Nach seiner Begnadigung kehrte er 1774 heim und arbeitete, wie die Britannica festhält, bis 1782 als Spitzel für eben jene Staatsinquisitoren, die ihn eingesperrt hatten. Nach einem neuen Konflikt verließ er die Stadt endgültig. Seine letzten Jahre verbrachte er als Bibliothekar des Grafen Waldstein auf Schloss Dux in Böhmen, wo er 1798 starb. 1788 veröffentlichte er in Leipzig die „Histoire de ma fuite“, die Geschichte seiner Flucht; später nahm er sie in seine Memoiren auf."
   }
  ],
  "legende": "Die einzige ausführliche Quelle für die Flucht ist Casanova selbst. Er erzählte die Geschichte jahrzehntelang in Salons, bevor er sie 1788 und dann in seinen Memoiren aufschrieb, und er war ein geübter Erzähler, der seine Rolle gern vergrößerte. Belegt sind durch venezianische Akten die Verhaftung, die Haft in den Piombi und die gemeinsame Flucht mit Balbi. Einzelheiten wie der Eisenriegel, die Bibel mit dem Nudelteller oder der arglose Wächter lassen sich nicht überprüfen. Forscher, die Casanovas Angaben an Archivalien gemessen haben, fanden ihn bei Namen und Daten oft erstaunlich genau, bei Dialogen und Gefühlen aber literarisch frei. Die Flucht ist daher als Tatsache sicher, ihre Ausgestaltung als Selbstdarstellung zu lesen.",
  "bedeutung": "Die Flucht machte Casanova berühmt, lange bevor seine Memoiren erschienen, und prägte sein Bild als Mann, den keine Mauer hält. Für die Republik Venedig war sie eine Blamage, weil die Piombi als sicherstes Gefängnis der Stadt galten. Casanovas Bericht ist bis heute eine wichtige Quelle für Haftbedingungen und Arbeitsweise der Staatsinquisition im 18. Jahrhundert, wenn man ihn kritisch liest. Die Bleikammern gehören heute zum Rundgang durch den Dogenpalast.",
  "zeitleiste": [
   {
    "datum": "2. April 1725",
    "jahr": 1725,
    "text": "Giacomo Casanova wird in Venedig geboren."
   },
   {
    "datum": "26. Juli 1755",
    "jahr": 1755,
    "text": "Verhaftung auf Befehl der Staatsinquisitoren, Haft in den Piombi."
   },
   {
    "datum": "Sommer 1756",
    "jahr": 1756,
    "text": "Kurz vor Vollendung seines Fluchtlochs wird Casanova in eine andere Zelle verlegt."
   },
   {
    "datum": "31. Oktober / 1. November 1756",
    "jahr": 1756,
    "text": "Flucht mit Marino Balbi über das Dach und durch den Palast."
   },
   {
    "datum": "Januar 1757",
    "jahr": 1757,
    "text": "Ankunft in Paris."
   },
   {
    "datum": "1774",
    "jahr": 1774,
    "text": "Begnadigung und Rückkehr nach Venedig, danach Tätigkeit als Spitzel der Inquisitoren."
   },
   {
    "datum": "1788",
    "jahr": 1788,
    "text": "In Leipzig erscheint die „Histoire de ma fuite“."
   },
   {
    "datum": "4. Juni 1798",
    "jahr": 1798,
    "text": "Casanova stirbt auf Schloss Dux in Böhmen."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Giacomo Casanova",
   "Giacomo Casanova: Histoire de ma fuite des prisons de la République de Venise qu'on appelle les Plombs, Leipzig 1788 (Digitalisat BnF Gallica)",
   "Giacomo Casanova: Histoire de ma vie, hg. von Gérard Lahouati und Marie-Françoise Luna, Bibliothèque de la Pléiade 2013–2015",
   "Ian Kelly: Casanova. Actor, Spy, Lover, Priest, Hodder & Stoughton 2008"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/casanova-bleikammern-0.jpg",
    "breite": 614,
    "hoehe": 1100,
    "zeigt": "Casanova auf dem Bleidach des Dogenpalasts, Kupferstich von Johann Berka aus der Erstausgabe der „Histoire de ma fuite“ (1788).",
    "urheber": "Johann Berka",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Casanova_Histoire_de_ma_fuite_1788_-_planche_2.jpg"
   },
   {
    "datei": "bilder/dark/casanova-bleikammern-1.jpg",
    "breite": 741,
    "hoehe": 1100,
    "zeigt": "Casanova im Alter von 63 Jahren, Medaillonbildnis von Johann Berka, 1788.",
    "urheber": "Johann Berka",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Giacomo_Girolamo_Casanova.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "zheng-yi-sao",
  "rubrik": "piraten",
  "unterart": "Piratin",
  "titel": "Zheng Yi Sao",
  "untertitel": "Die Piratenkonföderation im Südchinesischen Meer, 1801–1810",
  "jahr": 1807,
  "zeitraum": "1801–1810",
  "ort": "Perlflussmündung bei Lantau",
  "land": "China",
  "lat": 22.27,
  "lon": 113.94,
  "ortQuelle": "https://en.wikipedia.org/wiki/Lantau_Island",
  "status": null,
  "kurz": "Eine Frau aus Kanton führte nach 1807 einen der größten Piratenverbände der Geschichte – und handelte 1810 mit dem Kaiserreich einen Frieden aus, der ihr ein Leben in Freiheit sicherte.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Ende des 18. Jahrhunderts wuchs an der Küste Südchinas die Armut, während der Seehandel um Kanton, das heutige Guangzhou, blühte. Viele Fischer und Bootsleute verdienten sich nebenher als Piraten. In Vietnam unterstützte die Tây-Sơn-Regierung chinesische Piraten mit Stützpunkten und Titeln, weil sie Schiffe und Kämpfer brauchte. Als die Tây Sơn 1802 dem späteren Kaiser Gia Long unterlagen, kehrten die Piraten an die Küste von Guangdong zurück. 1805 schlossen sich sieben Anführer zu einer Konföderation aus sechs Flotten zusammen, die nach den Farben ihrer Flaggen benannt waren. Die stärkste war die Rote Flotte unter Zheng Yi."
   },
   {
    "titel": "Wer sie war",
    "text": "Ihr Name bedeutet schlicht „Ehefrau von Zheng Yi“, ihr Geburtsname ist nicht sicher überliefert; genannt wird Shi Yang oder Shi Xianggu. Sie stammte aus Guangdong und wurde um 1775 geboren. Nach der älteren Überlieferung arbeitete sie auf einem der schwimmenden Freudenhäuser von Kanton, bevor sie 1801 oder 1802 Zheng Yi heiratete. Mit ihm nahmen sie den Fischersohn Zhang Bao als Adoptivsohn an, der zum wichtigsten Unterführer aufstieg. Als Zheng Yi im November 1807 starb, nach den meisten Quellen in einem Sturm, übernahm sie die Führung der Roten Flotte. Sie sicherte sich die Unterstützung der Familie ihres Mannes und überließ Zhang Bao den Befehl auf See, behielt aber die Entscheidungen über Bündnisse, Geld und Verhandlungen in der Hand."
   },
   {
    "titel": "Die Konföderation auf ihrem Höhepunkt",
    "text": "Unter ihrer Führung erreichte der Verband um 1809 seine größte Stärke. Die Historikerin Dian Murray schätzt die Rote Flotte allein auf mehrere hundert Dschunken und bis zu 40.000 Menschen, die ganze Konföderation auf bis zu 70.000; genaue Zahlen gibt es nicht, und viele Mitglieder waren Familien an Bord. Die Piraten erhoben Schutzgelder von Küstendörfern, Salzhändlern und Fischern, kaperten Handelsschiffe und nahmen Geiseln gegen Lösegeld, darunter 1809 den Offizier der Ostindien-Kompanie Richard Glasspoole, der später darüber berichtete. Strenge Regeln, die Zhang Bao erließ, bestraften Ungehorsam und eigenmächtige Plünderung hart. Gefangene Frauen sollten nicht vergewaltigt werden; überliefert ist aber auch, dass Gefangene verkauft oder als Frauen genommen wurden. Gegen die Qing-Flotte errangen die Piraten 1808 schwere Siege."
   },
   {
    "titel": "Wie es endete",
    "text": "1809 wandte sich das Blatt. Der Generalgouverneur Bai Ling unterband die Versorgung der Piraten vom Land aus, und zum Jahresende blockierten Qing-Schiffe und portugiesische Schiffe aus Macau die Rote Flotte bei Lantau. Die Piraten brachen aus, doch zugleich zerfiel die Konföderation: Die Schwarze Flotte unter Guo Podai lief Anfang 1810 zur Regierung über. Zheng Yi Sao verhandelte daraufhin selbst. Im April 1810 erschien sie mit Frauen und Kindern ihrer Leute im Amtssitz Bai Lings in Kanton und erreichte eine Kapitulation zu günstigen Bedingungen: Die meisten Piraten wurden begnadigt, Zhang Bao erhielt einen Rang in der kaiserlichen Marine und durfte Schiffe behalten. Einige Hundert Piraten aber wurden hingerichtet oder verbannt. Sie heiratete Zhang Bao, der 1822 starb, lebte später wieder in Kanton und starb dort 1844."
   }
  ],
  "legende": "Im Westen wurde Zheng Yi Sao vor allem durch spätere Bücher bekannt: 1831 erschien eine englische Übersetzung der chinesischen Chronik „Jing hai fen ji“ von Yuan Yonglun, 1836 eine Piratengeschichte mit einem frei erfundenen Bild von ihr, 1935 die Erzählung „Die Witwe Ching“ von Jorge Luis Borges. Daraus entstand das Bild der „größten Piratin aller Zeiten“, oft mit Zahlen wie 1800 Schiffen und 80.000 Piraten unter ihrem Befehl. Diese Angaben sind nicht belegt und vermengen die ganze Konföderation mit ihrer eigenen Flotte. Unsicher ist auch ihre Herkunft aus einem Freudenhaus. Gesichert ist, dass sie die Rote Flotte nach 1807 führte, die Kapitulation von 1810 persönlich aushandelte und als eine der wenigen großen Piratenanführer friedlich starb.",
  "bedeutung": "Der Verband um Zheng Yi Sao war eine der größten Piratenorganisationen, von denen man weiß, und zeigt, wie Armut, Krieg und schwache Küstenverwaltung Seeräuberei zu einem eigenen Gemeinwesen machen konnten. Dass der Qing-Staat die Piraterie nicht militärisch, sondern durch Blockade, Spaltung und Begnadigung beendete, war ein politischer Kompromiss. Die Geschichte zeigt außerdem, dass eine Frau in der patriarchalen Gesellschaft Südchinas über Familie, Netzwerke und Verhandlungsgeschick zur Anführerin werden konnte. Für die Forschung zur Piraterie jenseits der Karibik ist sie ein zentraler Fall.",
  "zeitleiste": [
   {
    "datum": "um 1775",
    "jahr": 1775,
    "text": "Geburt in Guangdong; ihr eigener Name ist nicht sicher überliefert."
   },
   {
    "datum": "1801 oder 1802",
    "jahr": 1801,
    "text": "Heirat mit dem Piratenanführer Zheng Yi."
   },
   {
    "datum": "1805",
    "jahr": 1805,
    "text": "Sieben Anführer schließen die Konföderation der sechs Farbflotten."
   },
   {
    "datum": "November 1807",
    "jahr": 1807,
    "text": "Zheng Yi stirbt, sie übernimmt die Führung der Roten Flotte."
   },
   {
    "datum": "1808",
    "jahr": 1808,
    "text": "Die Piraten fügen der Qing-Flotte schwere Niederlagen zu."
   },
   {
    "datum": "Ende 1809",
    "jahr": 1809,
    "text": "Blockade bei Lantau durch Qing- und portugiesische Schiffe, die Piraten brechen aus."
   },
   {
    "datum": "April 1810",
    "jahr": 1810,
    "text": "Kapitulation in Kanton nach persönlichen Verhandlungen mit Generalgouverneur Bai Ling."
   },
   {
    "datum": "1844",
    "jahr": 1844,
    "text": "Tod in Kanton."
   }
  ],
  "quellen": [
   "Dian H. Murray: Pirates of the South China Coast, 1790–1810, 1987",
   "Robert J. Antony: Like Froth Floating on the Sea. The World of Pirates and Seafarers in Late Imperial South China, 2003",
   "Yuan Yonglun: Jing hai fen ji, 1830; englisch: History of the Pirates Who Infested the China Sea, übers. von Charles Fried Neumann, 1831"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/zheng-yi-sao-0.jpg",
    "breite": 900,
    "hoehe": 506,
    "zeigt": "Ausschnitt der Bildrolle „Jing hai quan tu“ (um 1810): Die Blockade der Piraten bei Lantau 1809",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:%E9%9D%96%E6%B5%B7%E5%85%A8%E5%9C%96_%E5%A4%A7%E5%B6%BC%E5%9B%B0%E8%B3%8A.jpg"
   },
   {
    "datei": "bilder/dark/zheng-yi-sao-1.jpg",
    "breite": 900,
    "hoehe": 794,
    "zeigt": "Zheng Yi Sao im Gefecht, Holzstich aus einer westlichen Piratengeschichte von 1836 – eine freie Erfindung, kein Porträt",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:%E9%84%AD%E4%B8%80%E5%AB%82.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "piltdown-mensch",
  "rubrik": "piraten",
  "unterart": "Fälschung",
  "titel": "Der Piltdown-Mensch",
  "untertitel": "Ein gefälschter Urmensch täuscht die Wissenschaft – Sussex 1912 bis 1953",
  "jahr": 1912,
  "zeitraum": "1912–1953",
  "ort": "Piltdown, East Sussex",
  "land": "Großbritannien",
  "lat": 50.98,
  "lon": 0.05,
  "ortQuelle": "https://en.wikipedia.org/wiki/Piltdown",
  "status": "aufgeklärt",
  "kurz": "Vierzig Jahre lang galt ein Schädel aus einer Kiesgrube in Sussex als frühester Engländer und Bindeglied zwischen Affe und Mensch. Er war aus einem Menschenschädel und einem Orang-Utan-Kiefer zusammengesetzt.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Um 1900 suchte die Paläoanthropologie nach Fossilien, die den Übergang vom Affen zum Menschen zeigen. Deutschland hatte den Neandertaler und den Unterkiefer von Mauer bei Heidelberg, Frankreich die Funde von Cro-Magnon; Großbritannien hatte nichts Vergleichbares. Viele Forscher erwarteten, dass sich zuerst das große Gehirn entwickelt habe und erst später Kiefer und Zähne menschlich geworden seien. Charles Dawson, Anwalt in Uckfield und bekannter Amateursammler, meldete 1912 dem Geologen Arthur Smith Woodward vom British Museum (Natural History), Arbeiter hätten in einer Kiesgrube bei Piltdown Schädelstücke gefunden."
   },
   {
    "titel": "Wie die Fälschung entstand",
    "text": "Dawson und Woodward gruben 1912 gemeinsam in der Grube und fanden weitere Schädelstücke, einen Unterkiefer mit zwei Backenzähnen, Tierknochen und Steinwerkzeuge. Am 18. Dezember 1912 stellten sie den Fund vor der Geological Society in London als Eoanthropus dawsoni vor: ein menschlich großes Hirn mit affenartigem Kiefer, genau das, was man erwartet hatte. 1913 fand der junge Jesuit Pierre Teilhard de Chardin einen passenden Eckzahn, 1915 meldete Dawson Reste eines zweiten Individuums von einem Ort in der Nähe. Die Knochen waren eingefärbt, die Zähne abgefeilt, damit sie zueinander passten. Eine Untersuchung von 2016 ergab, dass alle Kieferteile von einem einzigen Orang-Utan stammen und mindestens zwei menschliche Schädel verwendet wurden."
   },
   {
    "titel": "Zweifel und Duldung",
    "text": "Schon 1913 bezweifelten einzelne Anatomen, darunter David Waterston in London, dass Schädel und Kiefer zusammengehören; auch in den USA und Frankreich gab es Skepsis. Die führenden britischen Fachleute aber, Woodward, Arthur Keith und Grafton Elliot Smith, hielten an Piltdown fest. Ein Gemälde von 1915 zeigt sie im Kreis um den Schädel. Weil Piltdown als Maßstab galt, wurden echte Funde, die nicht dazu passten, lange unterschätzt, etwa das 1924 entdeckte Kind von Taung in Südafrika, das Raymond Dart 1925 als frühen Vormenschen beschrieb. Zugang zu den Originalen hatten nur wenige; die meisten Forscher arbeiteten mit Abgüssen."
   },
   {
    "titel": "Wie sie entlarvt wurde",
    "text": "Kenneth Oakley vom Natural History Museum bestimmte 1949 den Fluorgehalt der Knochen. Fossile Knochen nehmen im Boden über lange Zeit Fluor auf; die Piltdown-Funde enthielten wenig und mussten daher jung sein. Der Anatom Joseph Weiner kam 1953 zu dem Schluss, dass die Backenzähne absichtlich abgeschliffen worden waren. Zusammen mit Wilfrid Le Gros Clark veröffentlichten Weiner und Oakley im November 1953 den Nachweis: Der Kiefer stammte von einem Affen, die Knochen waren mit Eisen- und Chromverbindungen gefärbt, die Kratzspuren einer Feile waren unter dem Mikroskop sichtbar, und auch die Tierknochen waren an anderen Orten gesammelt worden."
   },
   {
    "titel": "Wer war der Fälscher?",
    "text": "Ein Geständnis gibt es nicht; Dawson war bereits 1916 gestorben. Verdächtigt wurden im Lauf der Jahrzehnte viele, darunter Teilhard de Chardin, der Museumsmitarbeiter Martin Hinton und sogar der Schriftsteller Arthur Conan Doyle, der in der Nähe wohnte. Für die meisten dieser Thesen fehlen Belege. Die Studie von Isabelle De Groote und Kollegen in Royal Society Open Science (2016) fand an beiden Fundorten dieselbe Arbeitsweise mit gleicher Färbung, eingeklebtem Kies und derselben Spachtelmasse. Das spricht für einen einzigen Täter, und die Spuren führen zu Dawson. Der Archäologe Miles Russell hat zudem zahlreiche weitere Funde aus Dawsons Sammlung als Fälschungen eingestuft."
   }
  ],
  "legende": "Gesichert ist, dass der Piltdown-Mensch eine bewusste Fälschung war und dass Dawson nach heutigem Stand mit großer Wahrscheinlichkeit der Täter ist. Bewiesen im juristischen Sinn ist das nicht, Mittäter lassen sich nicht ausschließen. Oft wird behauptet, die Wissenschaft sei vierzig Jahre lang geschlossen getäuscht worden. Tatsächlich gab es von Anfang an Zweifel, sie setzten sich aber gegen das Ansehen der Londoner Fachleute nicht durch. Die Erzählung, der Schwindel beweise, dass die Evolutionstheorie auf Fälschungen beruhe, verkehrt den Fall: Aufgedeckt wurde er von Evolutionsforschern, und zwar weil Piltdown immer schlechter zu den neuen echten Funden passte.",
  "bedeutung": "Piltdown ist der bekannteste Betrugsfall der Paläontologie. Er zeigt, wie Erwartungen, nationaler Ehrgeiz und das Vertrauen in Autoritäten eine Fälschung schützen können. Zugleich ist er ein Beispiel für die Selbstkorrektur der Wissenschaft: Neue Methoden wie die Fluordatierung und der Vergleich mit echten Fossilien brachten die Wahrheit ans Licht. Die Lehre, Originale zugänglich zu machen und Funde unabhängig zu prüfen, gehört seither zum Grundbestand der Disziplin.",
  "zeitleiste": [
   {
    "datum": "1912",
    "jahr": 1912,
    "text": "Charles Dawson legt Arthur Smith Woodward Schädelstücke aus der Kiesgrube von Piltdown vor."
   },
   {
    "datum": "18. Dezember 1912",
    "jahr": 1912,
    "text": "Vorstellung des Eoanthropus dawsoni vor der Geological Society in London."
   },
   {
    "datum": "1913",
    "jahr": 1913,
    "text": "Teilhard de Chardin findet in der Grube einen Eckzahn."
   },
   {
    "datum": "1915",
    "jahr": 1915,
    "text": "Dawson meldet Reste eines zweiten Piltdown-Menschen."
   },
   {
    "datum": "1916",
    "jahr": 1916,
    "text": "Charles Dawson stirbt; danach werden in Piltdown keine Funde mehr gemacht."
   },
   {
    "datum": "1949",
    "jahr": 1949,
    "text": "Kenneth Oakleys Fluortest zeigt, dass die Knochen nicht alt sein können."
   },
   {
    "datum": "November 1953",
    "jahr": 1953,
    "text": "Weiner, Oakley und Le Gros Clark weisen die Fälschung nach."
   },
   {
    "datum": "2016",
    "jahr": 2016,
    "text": "Eine Studie in Royal Society Open Science führt die Fälschung auf einen einzigen Täter zurück, sehr wahrscheinlich Dawson."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Piltdown man",
   "J. S. Weiner, K. P. Oakley, W. E. Le Gros Clark: The Solution of the Piltdown Problem, Bulletin of the British Museum (Natural History), Geology 2 (1953)",
   "I. De Groote u. a.: New genetic and morphological evidence suggests a single hoaxer created ‘Piltdown man’, Royal Society Open Science 3 (2016)",
   "Natural History Museum London: Piltdown Man (Sammlungsinformationen)",
   "Miles Russell: The Piltdown Man Hoax. Case Closed, The History Press 2012"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/piltdown-mensch-0.jpg",
    "breite": 900,
    "hoehe": 657,
    "zeigt": "Gemälde von John Cooke (1915): Arthur Keith untersucht den Piltdown-Schädel, umgeben von Woodward, Dawson, Elliot Smith und weiteren Fachleuten, an der Wand ein Bild Darwins.",
    "urheber": "John Cooke",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Piltdown_gang_%28dark%29.jpg"
   },
   {
    "datei": "bilder/dark/piltdown-mensch-1.jpg",
    "breite": 900,
    "hoehe": 788,
    "zeigt": "Rekonstruktion des Piltdown-Schädels („Eoanthropus dawsoni“), Wellcome Collection.",
    "urheber": "unbekannt",
    "lizenz": "CC BY 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Skull_of_the_%22Eoanthropus_Dawsoni%22_%28Piltdown_Man%29_Wellcome_M0013579.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "han-van-meegeren",
  "rubrik": "piraten",
  "unterart": "Fälschung",
  "titel": "Han van Meegeren",
  "untertitel": "Der Mann, der Vermeer malte und Göring betrog – Amsterdam 1947",
  "jahr": 1947,
  "zeitraum": "1937–1947",
  "ort": "Amsterdam",
  "land": "Niederlande",
  "lat": 52.3728,
  "lon": 4.8936,
  "ortQuelle": "https://en.wikipedia.org/wiki/Amsterdam",
  "status": "aufgeklärt",
  "kurz": "Ein Maler verkauft gefälschte Vermeers an Museen und an Hermann Göring. Nach dem Krieg als Kollaborateur angeklagt, rettet er sich mit dem Geständnis, die Bilder selbst gemalt zu haben.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Han van Meegeren, geboren 1889 in Deventer, war ein handwerklich geschulter Maler, der in den 1920er-Jahren mit Porträts und Genrebildern Erfolg hatte, von der Kritik aber als altmodisch abgetan wurde. In den 1930er-Jahren zog er nach Südfrankreich und begann dort, Gemälde im Stil alter Meister herzustellen. Sein Ziel war Johannes Vermeer, von dem nur rund drei Dutzend Werke bekannt sind. Forscher vermuteten damals, Vermeer habe in jungen Jahren religiöse Bilder gemalt, von denen kaum etwas erhalten sei. Genau diese Lücke füllte van Meegeren."
   },
   {
    "titel": "Wie die Fälschungen entstanden",
    "text": "Van Meegeren malte auf echten Leinwänden des 17. Jahrhunderts, von denen er die alte Farbe abkratzte, und mischte seine Farben mit Phenol-Formaldehyd-Harz, einem frühen Kunststoff. Im Ofen erhitzt, wurde die Farbe hart wie jahrhundertealte; durch Rollen über einen Zylinder entstand ein Netz von Rissen, das er mit Tusche füllte. 1937 begutachtete der angesehene Kunsthistoriker Abraham Bredius das „Emmausmahl“ als frühen Vermeer und feierte es in einer Fachzeitschrift. Museum Boijmans in Rotterdam kaufte das Bild nach Angaben des Fachportals CODART für 520.000 Gulden. Bis 1943 folgten weitere angebliche Vermeers und Bilder im Stil Pieter de Hoochs, die van Meegeren zu einem sehr reichen Mann machten."
   },
   {
    "titel": "Wie sie entlarvt wurde",
    "text": "Nach dem Krieg fanden alliierte Kunstschutzoffiziere in der Sammlung Hermann Görings einen unbekannten Vermeer, „Christus und die Ehebrecherin“. Göring hatte ihn 1942 über den Kunsthändler Alois Miedl erworben und mit einer großen Zahl von Gemälden bezahlt. Die Spur führte zu van Meegeren, der im Mai 1945 festgenommen wurde. Der Vorwurf lautete Kollaboration: Er habe nationales Kulturgut an den Feind verkauft, worauf schwere Strafen standen. Nach Wochen in Haft gestand er, das Bild selbst gemalt zu haben, ebenso das Emmausmahl. Um seine Behauptung zu beweisen, malte er 1945 unter Aufsicht einen weiteren „Vermeer“, „Jesus unter den Schriftgelehrten“."
   },
   {
    "titel": "Der Prozess",
    "text": "Eine internationale Kommission unter dem belgischen Chemiker Paul Coremans untersuchte die Bilder und fand Phenol-Formaldehyd-Harz in der Farbe sowie Spuren moderner Pigmente. Damit war die Fälschung naturwissenschaftlich belegt. Die Anklage wegen Kollaboration wurde fallen gelassen; vor Gericht in Amsterdam stand van Meegeren ab dem 29. Oktober 1947 wegen Betrugs und Fälschung von Signaturen. Am 12. November 1947 wurde er zu einem Jahr Gefängnis verurteilt. Bevor er die Strafe antrat, erlitt er einen Herzinfarkt und starb am 30. Dezember 1947 in Amsterdam."
   }
  ],
  "legende": "Van Meegeren stellte sich selbst als Künstler dar, der die Kritiker bloßstellen und den Feind betrügen wollte, und die niederländische Öffentlichkeit feierte ihn 1947 als den Mann, der Göring hereingelegt hatte. Gesichert ist der Betrug an Göring. Gesichert ist aber auch, dass van Meegeren vor allem für Geld fälschte, dass seine Opfer zum größten Teil niederländische Museen und Sammler waren und dass er Sympathien für die nationalsozialistische Ideologie gezeigt hatte: 1942 schenkte er Hitler einen Bildband mit eigener Widmung. Dass seine Fälschungen meisterhaft gewesen seien, sehen heutige Betrachter skeptisch; die Gesichter wirken auf uns wie Filmstars der 1930er-Jahre. Getäuscht hat damals vor allem die Erwartung der Experten.",
  "bedeutung": "Der Fall van Meegeren zeigte, wie sehr der Kunstmarkt sich auf die Augen einzelner Kenner verließ, und gab der naturwissenschaftlichen Gemäldeuntersuchung starken Auftrieb. Die Methoden der Kommission Coremans wurden später verfeinert: 1967 bestätigten Forscher der Carnegie-Mellon-Universität mit der Messung radioaktiven Bleis, dass die Farben des Emmausmahls modern sind. Bis heute ist der Fall Lehrstück für Echtheitsprüfung und für die Frage, warum Fachleute sich täuschen lassen.",
  "zeitleiste": [
   {
    "datum": "10. Oktober 1889",
    "jahr": 1889,
    "text": "Han van Meegeren wird in Deventer geboren."
   },
   {
    "datum": "1937",
    "jahr": 1937,
    "text": "Abraham Bredius erklärt das „Emmausmahl“ zum Vermeer; Museum Boijmans kauft es."
   },
   {
    "datum": "1942",
    "jahr": 1942,
    "text": "Hermann Göring erwirbt „Christus und die Ehebrecherin“."
   },
   {
    "datum": "Mai 1945",
    "jahr": 1945,
    "text": "Van Meegeren wird wegen Kollaboration festgenommen; nach Wochen in Haft gesteht er die Fälschungen."
   },
   {
    "datum": "1945",
    "jahr": 1945,
    "text": "Unter Aufsicht malt er „Jesus unter den Schriftgelehrten“ als Beweis."
   },
   {
    "datum": "29. Oktober 1947",
    "jahr": 1947,
    "text": "Prozessbeginn in Amsterdam wegen Betrugs und Fälschung."
   },
   {
    "datum": "12. November 1947",
    "jahr": 1947,
    "text": "Urteil: ein Jahr Gefängnis."
   },
   {
    "datum": "30. Dezember 1947",
    "jahr": 1947,
    "text": "Van Meegeren stirbt in Amsterdam an Herzversagen, ohne die Strafe angetreten zu haben."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Han van Meegeren",
   "P. B. Coremans: Van Meegeren's Faked Vermeers and De Hooghs, Amsterdam 1949",
   "CODART: New facts on forged Vermeer painting (Museum Boijmans Van Beuningen)",
   "Jonathan Lopez: The Man Who Made Vermeers, Harcourt 2008",
   "B. Keisch u. a.: Dating and Authenticating Works of Art by Measurement of Natural Alpha Emitters, Science 155 (1967)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/han-van-meegeren-0.jpg",
    "breite": 900,
    "hoehe": 615,
    "zeigt": "Der Prozess gegen Han van Meegeren in Amsterdam, 29. Oktober 1947 (Foto Harry Sagers / Anefo, Nationaal Archief).",
    "urheber": "Nationaal Archief",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Proces_Van_Meegeren%2C_Bestanddeelnr_902-4285.jpg"
   },
   {
    "datei": "bilder/dark/han-van-meegeren-1.jpg",
    "breite": 900,
    "hoehe": 750,
    "zeigt": "Van Meegeren 1945 bei der Arbeit an dem Beweisbild, das er unter Aufsicht malte (Foto Koos Raucamp / Anefo, Nationaal Archief).",
    "urheber": "Koos Raucamp / Anefo",
    "lizenz": "CC0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Han_van_Meegeren_aan_het_werk%2C_Bestanddeelnr_900-9593.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "flucht-von-alcatraz",
  "rubrik": "piraten",
  "unterart": "Ausbruch",
  "titel": "Die Flucht von Alcatraz",
  "untertitel": "Drei Häftlinge, ein Floß aus Regenmänteln – San Francisco 1962",
  "jahr": 1962,
  "zeitraum": "Dezember 1961 bis Juni 1962",
  "ort": "Alcatraz, San Francisco",
  "land": "USA",
  "lat": 37.8267,
  "lon": -122.423,
  "ortQuelle": "https://en.wikipedia.org/wiki/Alcatraz_Island",
  "status": "ungeklärt",
  "kurz": "In der Nacht zum 12. Juni 1962 verschwanden Frank Morris und die Brüder John und Clarence Anglin aus dem Hochsicherheitsgefängnis Alcatraz. Ob sie die Bucht von San Francisco überlebten, ist bis heute offen.",
  "abschnitte": [
   {
    "titel": "Die Haft",
    "text": "Alcatraz, eine Felseninsel in der Bucht von San Francisco, war von 1934 bis 1963 ein Bundesgefängnis für Häftlinge, die als besonders gefährlich oder fluchtgefährlich galten. Kaltes Wasser und starke Strömungen sollten jede Flucht aussichtslos machen. Frank Morris sowie John und Clarence Anglin saßen wegen Bankraubs und anderer Delikte und hatten nach Angaben des FBI alle schon Fluchtversuche aus anderen Anstalten hinter sich. Ihre Zellen lagen im Block B nebeneinander, ein vierter Mithäftling, Allen West, war in die Pläne eingeweiht. Hinter der Zellenreihe verlief ein unbewachter Versorgungsgang mit Rohren und Leitungen."
   },
   {
    "titel": "Die Vorbereitung",
    "text": "Nach Darstellung des FBI begannen die Männer im Dezember 1961 mit den Vorbereitungen. Mit Werkzeugen wie geschärften Löffeln und einem Bohrer, den sie aus dem Motor eines Staubsaugers bauten, lockerten sie die Lüftungsgitter unter den Waschbecken und vergrößerten die Öffnungen. Über den Versorgungsgang kletterten sie auf das Dach des Zellenblocks und richteten dort eine versteckte Werkstatt ein. Aus mehr als fünfzig Regenmänteln fertigten sie Schwimmwesten und ein etwa zwei mal vier Meter großes Schlauchfloß, dazu Paddel und einen Blasebalg aus einem Musikinstrument. In den Betten lagen Köpfe aus Pappmaché, Seife und echtem Haar aus dem Friseursalon."
   },
   {
    "titel": "Die Flucht",
    "text": "Am Abend des 11. Juni 1962 krochen Morris und die Anglins durch die Öffnungen in den Gang, stiegen durch einen Lüftungsschacht auf das Dach, kletterten an einem Rohr hinunter, überwanden den Zaun und ließen das Floß an der Nordostküste der Insel zu Wasser. Allen West blieb zurück, weil er sein Gitter nicht rechtzeitig lösen konnte. Die Wärter entdeckten die Attrappen erst bei der Zählung am Morgen des 12. Juni. FBI, Küstenwache und Gefängnispersonal suchten die Bucht ab. Gefunden wurden unter anderem ein Paddel, Reste der Schwimmwesten und ein wasserdicht verpacktes Bündel mit Fotos und Adressen aus dem Besitz der Anglins, aber keine Spur der Männer selbst."
   },
   {
    "titel": "Was danach geschah",
    "text": "Das FBI ermittelte siebzehn Jahre lang. Es fand keine glaubwürdigen Hinweise darauf, dass die drei überlebten, und hielt für wahrscheinlich, dass sie im kalten Wasser ertranken. Am 31. Dezember 1979 schloss es die Akte und übergab den Fall dem U.S. Marshals Service, der die Männer bis heute zur Fahndung ausschreibt und gealterte Phantombilder veröffentlicht hat. Alcatraz wurde im März 1963 geschlossen, vor allem wegen hoher Betriebskosten und baufälliger Anlagen. Heute gehört die Insel zum Golden Gate National Recreation Area; die präparierten Zellen sind Teil der Ausstellung."
   }
  ],
  "legende": "Gesichert sind nach der FBI-Akte die Vorbereitung, der Weg aus dem Zellenblock und der Start vom Ufer. Ungeklärt ist der Ausgang. Dass die Flucht die Schließung des Gefängnisses auslöste, ist eine verbreitete Vereinfachung; die Entscheidung war schon vorher aus Kostengründen gefallen. Immer wieder tauchen Behauptungen auf, die Männer hätten überlebt: Angehörige der Anglins berichteten von Postkarten und einem Foto aus Brasilien, und 2013 erhielt die Polizei von San Francisco einen Brief, der angeblich von John Anglin stammte. Nach Berichten seriöser Medien brachte die Prüfung des Briefes durch das FBI kein eindeutiges Ergebnis. Keine dieser Spuren ist bestätigt. Strömungsmodelle der TU Delft von 2014 zeigen, dass ein Überleben nur bei einer günstigen Startzeit möglich gewesen wäre; über den tatsächlichen Ausgang sagen sie nichts.",
  "bedeutung": "Die Flucht von 1962 ist neben dem Versuch von Theodore Cole und Ralph Roe 1937 der einzige Ausbruch aus Alcatraz, bei dem die Flüchtigen nie gefunden wurden, und der bekannteste. Sie entzauberte den Ruf des „ausbruchssicheren“ Gefängnisses und wurde 1979 mit „Escape from Alcatraz“ verfilmt. Für Strafvollzug und Sicherheitstechnik zeigte sie, wie wenig bauliche Abschreckung nützt, wenn Gebäude verfallen und Routinen vorhersehbar sind. Weil der Fall formal bis heute offen ist, bleibt er ein Gegenstand von Spekulation und erneuten Prüfungen.",
  "zeitleiste": [
   {
    "datum": "1934",
    "jahr": 1934,
    "text": "Alcatraz wird Bundesgefängnis für schwer zu bewachende Häftlinge."
   },
   {
    "datum": "Dezember 1961",
    "jahr": 1961,
    "text": "Morris und die Brüder Anglin beginnen nach FBI-Angaben mit den Fluchtvorbereitungen."
   },
   {
    "datum": "11. Juni 1962",
    "jahr": 1962,
    "text": "Am Abend verlassen die drei ihre Zellen und starten mit dem Floß von der Nordostküste."
   },
   {
    "datum": "12. Juni 1962",
    "jahr": 1962,
    "text": "Bei der Morgenzählung werden die Attrappen in den Betten entdeckt."
   },
   {
    "datum": "21. März 1963",
    "jahr": 1963,
    "text": "Das Gefängnis Alcatraz wird geschlossen."
   },
   {
    "datum": "31. Dezember 1979",
    "jahr": 1979,
    "text": "Das FBI schließt seine Ermittlungen und übergibt den Fall den U.S. Marshals."
   },
   {
    "datum": "2013",
    "jahr": 2013,
    "text": "Ein angeblicher Brief John Anglins erreicht die Polizei von San Francisco; seine Echtheit ist nicht bestätigt."
   }
  ],
  "quellen": [
   "FBI: A Byte Out of History – Escape from Alcatraz (2007)",
   "FBI Records: The Vault – Alcatraz Escape",
   "U.S. Marshals Service: Alcatraz Escape (Fahndungsinformationen)",
   "National Park Service: Alcatraz Island – The 1962 Escape",
   "Rolf Hut, Olivier Hoes: Strömungsmodellierung der Flucht, TU Delft 2014"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/flucht-von-alcatraz-0.jpg",
    "breite": 900,
    "hoehe": 954,
    "zeigt": "Die Kopfattrappe, die das FBI 1962 in der Zelle von Frank Morris sicherstellte.",
    "urheber": "FBI",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Dummy_head_made_by_Frank_Morris_to_facilitate_his_escape_from_Alcatraz_in_1962.jpg"
   },
   {
    "datei": "bilder/dark/flucht-von-alcatraz-1.jpg",
    "breite": 900,
    "hoehe": 894,
    "zeigt": "Fahndungsplakat des FBI für John Anglin vom 18. Juni 1962.",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:WantedJohnAnglin.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "hitler-tagebuecher",
  "rubrik": "piraten",
  "unterart": "Fälschung",
  "titel": "Die Hitler-Tagebücher",
  "untertitel": "Der „Stern“, ein Fälscher und ein Reporter – Hamburg 1983",
  "jahr": 1983,
  "zeitraum": "1981–1985",
  "ort": "Hamburg",
  "land": "Deutschland",
  "lat": 53.55,
  "lon": 10,
  "ortQuelle": "https://en.wikipedia.org/wiki/Hamburg",
  "status": "aufgeklärt",
  "kurz": "Im April 1983 präsentiert der „Stern“ angebliche Tagebücher Hitlers. Elf Tage später erklären Bundesbehörden sie zur plumpen Fälschung – einer der größten Presseskandale der Bundesrepublik.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Gerd Heidemann, Reporter des Hamburger Magazins „Stern“, bewegte sich seit den 1970er-Jahren in der Szene der Sammler von NS-Erinnerungsstücken. Er hörte von angeblichen Tagebüchern Hitlers, die aus einem Flugzeug stammen sollten, das im April 1945 bei Börnersdorf in Sachsen abgestürzt war und tatsächlich Kisten aus dem Führerbunker an Bord hatte. Über Mittelsleute kam er an den Stuttgarter Händler Konrad Kujau, der unter falschem Namen auftrat und behauptete, die Bände kämen über Verwandte aus der DDR. Ab 1981 kaufte der Verlag Gruner + Jahr unter größter Geheimhaltung Band um Band; die Chefredaktion des „Stern“ wurde lange nicht eingeweiht."
   },
   {
    "titel": "Wie die Fälschung entstand",
    "text": "Kujau, der schon zuvor Gemälde, Briefe und Dokumente „aus Hitlers Hand“ gefälscht und verkauft hatte, schrieb die Tagebücher selbst, in Kladden, die er künstlich alterte. Er ahmte Hitlers Handschrift nach; die Inhalte übernahm er großenteils aus veröffentlichten Quellen, vor allem aus einer Sammlung von Hitlers Reden und Proklamationen, samt deren Fehlern. Insgesamt wurden es nach den meisten Angaben gut sechzig Bände. Der Verlag zahlte dafür nach Angaben der Neuen Deutschen Biographie insgesamt 9,34 Millionen Mark, die über Heidemann liefen. Wie viel davon tatsächlich bei Kujau ankam und wie viel Heidemann für sich behielt, beschäftigte später das Gericht."
   },
   {
    "titel": "Die Veröffentlichung",
    "text": "Am 25. April 1983 stellte der „Stern“ die Tagebücher in Hamburg vor der Weltpresse vor und kündigte an, die Geschichte des Dritten Reiches müsse in Teilen neu geschrieben werden. Die britische „Sunday Times“ hatte Abdruckrechte erworben. Der britische Historiker Hugh Trevor-Roper hatte die Bände kurz zuvor in Zürich gesehen und für echt gehalten; auf der Pressekonferenz äußerte er bereits Zweifel. Gutachten zur Handschrift, die der Verlag vorab eingeholt hatte, waren positiv ausgefallen, weil die Vergleichsproben zum Teil selbst von Kujau stammten. Eine chemische Prüfung des Papiers hatte der Verlag vor der Veröffentlichung nicht abgewartet."
   },
   {
    "titel": "Wie sie entlarvt wurde",
    "text": "Das Bundesarchiv ließ einige Bände von der Bundesanstalt für Materialprüfung und vom Bundeskriminalamt untersuchen. Am 6. Mai 1983 gab es das Ergebnis bekannt: Papier, Leim und Bindefäden enthielten Stoffe, die erst nach dem Krieg hergestellt wurden, darunter optische Aufheller. Inhaltlich wies das Bundesarchiv zahlreiche offensichtliche Fehler nach. Kujau stellte sich Ende Mai 1983 und gestand. Der Prozess vor dem Landgericht Hamburg begann am 21. August 1984. Im Juli 1985 wurden Kujau zu viereinhalb Jahren und Heidemann zu vier Jahren und acht Monaten Freiheitsstrafe verurteilt, beide wegen Betrugs."
   }
  ],
  "legende": "Hartnäckig hält sich die Geschichte, die Fälschung sei an den Initialen „FH“ statt „AH“ auf dem Einband aufgeflogen. Die aufgeklebten Frakturbuchstaben sind tatsächlich als „FH“ lesbar, doch entlarvt wurden die Bände durch Materialanalyse und Inhaltsprüfung, nicht durch die Buchstaben. Ebenso falsch ist die Annahme, die Tagebücher hätten nie überzeugend gewirkt: Mehrere Schriftgutachter und ein namhafter Historiker hielten sie für echt. Das lag weniger an Kujaus Geschick als an Zeitdruck, Geheimhaltung und dem Wunsch des Verlags nach einer Weltsensation. Die Behauptung des Verlags, die Geschichte müsse neu geschrieben werden, wäre auch bei echten Tagebüchern übertrieben gewesen; die Texte waren inhaltsarm.",
  "bedeutung": "Der Skandal erschütterte das Ansehen des „Stern“ auf Jahre; zwei Chefredakteure mussten gehen. Für den Journalismus wurde der Fall zum Lehrbeispiel dafür, dass Quellen vor der Veröffentlichung unabhängig geprüft werden müssen und dass Exklusivität kein Ersatz für Sorgfalt ist. Zugleich zeigte er die Anziehungskraft, die Hitler-Devotionalien auf Sammler und Medien ausübten. Kujau wurde nach der Haft eine Art Medienfigur; 2023 veröffentlichte der NDR die gefälschten Texte vollständig, um sie mit Kommentaren historisch einzuordnen.",
  "zeitleiste": [
   {
    "datum": "1981",
    "jahr": 1981,
    "text": "Gruner + Jahr beginnt, über Gerd Heidemann angebliche Hitler-Tagebücher zu kaufen."
   },
   {
    "datum": "25. April 1983",
    "jahr": 1983,
    "text": "Der „Stern“ präsentiert die Tagebücher auf einer Pressekonferenz in Hamburg."
   },
   {
    "datum": "6. Mai 1983",
    "jahr": 1983,
    "text": "Das Bundesarchiv erklärt die Bände nach Material- und Inhaltsprüfung zur Fälschung."
   },
   {
    "datum": "Ende Mai 1983",
    "jahr": 1983,
    "text": "Konrad Kujau stellt sich den Behörden und gesteht die Fälschung."
   },
   {
    "datum": "21. August 1984",
    "jahr": 1984,
    "text": "Prozessbeginn vor dem Landgericht Hamburg."
   },
   {
    "datum": "Juli 1985",
    "jahr": 1985,
    "text": "Urteil: viereinhalb Jahre Haft für Kujau, vier Jahre und acht Monate für Heidemann."
   },
   {
    "datum": "2023",
    "jahr": 2023,
    "text": "Der NDR veröffentlicht die gefälschten Tagebücher mit historischer Einordnung."
   }
  ],
  "quellen": [
   "Bundesarchiv: Auftakt des Prozesses um die gefälschten Hitler-Tagebücher (Dokumente zur Zeitgeschichte)",
   "Bundesarchiv: Pressekonferenz des Bundesarchivs zu den Hitler-Tagebüchern, 6. Mai 1983",
   "German History in Documents and Images (GHI Washington): Stern presents Hitler's Diaries, April 1983",
   "Robert Harris: Selling Hitler, Faber & Faber 1986",
   "Encyclopaedia Britannica: Hitler Diaries"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/hitler-tagebuecher-0.jpg",
    "breite": 900,
    "hoehe": 900,
    "zeigt": "Konrad Kujau 1992 in seiner Galerie in Stuttgart, nach Verbüßung seiner Strafe.",
    "urheber": "Telephil",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Konrad_Kujau_01.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "babington-verschwoerung",
  "rubrik": "spionage",
  "unterart": "Codeknacker",
  "titel": "Walsingham und die Babington-Verschwörung",
  "untertitel": "Chiffren, Bierfässer und das Todesurteil für Maria Stuart – England 1586",
  "jahr": 1586,
  "zeitraum": "Dezember 1585 bis Februar 1587",
  "ort": "Chartley, Staffordshire",
  "land": "England",
  "lat": 52.854,
  "lon": -1.9866,
  "ortQuelle": "https://en.wikipedia.org/wiki/Chartley_Castle",
  "status": "aufgeklärt",
  "kurz": "Elisabeths Staatssekretär las die verschlüsselte Post der gefangenen Maria Stuart mit, ließ sie in die Falle laufen und lieferte so den Beweis, der sie aufs Schafott brachte.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Maria Stuart, die katholische Königin von Schottland, war 1568 nach England geflohen und lebte seither als Gefangene Elisabeths I. Für viele Katholiken war sie die rechtmäßige Thronfolgerin, und nach der Exkommunikation Elisabeths durch den Papst 1570 galt sie als Hoffnung jeder Verschwörung gegen die protestantische Königin. Sir Francis Walsingham, seit 1573 Staatssekretär, hatte bereits die Throckmorton-Verschwörung von 1583 aufgedeckt. Er unterhielt ein Netz von Informanten und Kurieren in England und auf dem Kontinent, das er zum Teil aus eigener Tasche bezahlte. Sein Ziel war ein Beweis, dass Maria selbst einem Anschlag auf Elisabeth zustimmte; ohne ihn wollte die Königin gegen ihre Verwandte nicht vorgehen."
   },
   {
    "titel": "Die Operation",
    "text": "Ende 1585 wurde Maria nach Chartley in Staffordshire verlegt und vollständig von der Außenwelt abgeschnitten. Dann öffnete Walsingham ihr einen scheinbar geheimen Kanal: Der katholische Kurier Gilbert Gifford, der in seine Dienste getreten war, ließ ihre Briefe in einem wasserdichten Behältnis im Spund eines Bierfasses aus- und einschmuggeln, das ein Brauer regelmäßig lieferte. Jeder Brief ging zuerst an Walsingham. Dort entschlüsselte ihn Thomas Phelippes, ein Sprachkundiger und Chiffrierexperte, kopierte ihn und ließ ihn weiterlaufen. Marias Schlüssel war ein sogenannter Nomenklator: Buchstaben wurden durch Zeichen ersetzt, häufige Wörter und Namen durch eigene Symbole, dazu kamen bedeutungslose Füllzeichen. Gegen die Häufigkeitsanalyse, die Phelippes beherrschte, bot das wenig Schutz."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Im Sommer 1586 schrieb der junge Adlige Anthony Babington an Maria. Er und eine Gruppe katholischer Freunde, angestoßen durch den Priester John Ballard, planten ihre Befreiung, eine Landung ausländischer Truppen und die Ermordung Elisabeths durch sechs Edelleute. Am 17. Juli 1586 antwortete Maria und billigte den Plan, auch den Satz, die sechs Herren ans Werk zu setzen. Phelippes zeichnete einen Galgen auf die Abschrift. Um auch die Namen der Beteiligten zu erfahren, ließ Walsingham dem Brief ein gefälschtes, in Marias Chiffre geschriebenes Postskriptum anfügen, das nach ihnen fragte. Anfang August wurde Ballard verhaftet, Babington floh und wurde wenig später gefasst. Marias Sekretäre bestätigten im Verhör, dass der Brief von ihr stammte."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Babington und dreizehn weitere Verschwörer wurden am 20. und 21. September 1586 als Hochverräter hingerichtet. Maria Stuart wurde im Oktober 1586 auf Schloss Fotheringhay vor eine Kommission gestellt; sie bestritt die Zuständigkeit eines englischen Gerichts über eine Königin und verteidigte sich ohne Anwalt und ohne Einsicht in die Originale. Das Urteil lautete auf Tod. Elisabeth zögerte monatelang und unterschrieb den Hinrichtungsbefehl am 1. Februar 1587; am 8. Februar wurde Maria in Fotheringhay enthauptet. Die Königin gab sich danach empört und ließ ihren Sekretär William Davison, der den Befehl weitergeleitet hatte, in den Tower bringen. Walsingham starb 1590 hoch verschuldet; sein Netz zerfiel nach seinem Tod."
   }
  ],
  "legende": "Walsingham gilt oft als Gründer des britischen Geheimdienstes. Das ist eine Rückprojektion: Er führte ein persönliches Netz, keine Behörde, und es überlebte ihn nicht; das Secret Service Bureau entstand erst 1909. Umstritten ist, wie weit die Verschwörung selbst ein Werk von Lockspitzeln war. Gifford arbeitete für Walsingham, und ohne den von ihm geschaffenen Kanal hätte der Briefwechsel nicht stattgefunden. Gesichert ist aber, dass Maria dem Plan in ihrem Brief vom 17. Juli zustimmte; gefälscht war nur das nachträglich angefügte Postskriptum, das nach den Namen fragte, nicht ihre Zustimmung. Die verbreitete Behauptung, Phelippes habe Marias ganzen Brief erfunden, lässt sich nicht belegen.",
  "bedeutung": "Der Fall ist eines der frühesten gut dokumentierten Beispiele dafür, wie das Mitlesen verschlüsselter Post eine Staatsaffäre entscheidet. Er zeigt das Grundmuster späterer Geheimdienstarbeit: einen kontrollierten Kanal, den der Gegner für sicher hält, und eine Chiffre, die schwächer ist, als ihre Nutzer glauben. Politisch beseitigte Marias Tod die katholische Alternative zu Elisabeth und war einer der Anlässe, aus denen Philipp II. von Spanien 1588 die Armada gegen England schickte. Die Originale und Abschriften, darunter Marias Chiffrentafeln, liegen heute in den National Archives in Kew.",
  "zeitleiste": [
   {
    "datum": "1568",
    "jahr": 1568,
    "text": "Maria Stuart flieht nach England und wird Gefangene Elisabeths I."
   },
   {
    "datum": "Dezember 1585",
    "jahr": 1585,
    "text": "Maria wird nach Chartley verlegt; Gifford beginnt, ihre Briefe über Bierfässer zu schmuggeln – und an Walsingham zu liefern."
   },
   {
    "datum": "17. Juli 1586",
    "jahr": 1586,
    "text": "Maria billigt in einem chiffrierten Brief an Babington den Plan, Elisabeth zu ermorden."
   },
   {
    "datum": "August 1586",
    "jahr": 1586,
    "text": "Ballard und Babington werden verhaftet."
   },
   {
    "datum": "20./21. September 1586",
    "jahr": 1586,
    "text": "Babington und dreizehn Mitverschwörer werden hingerichtet."
   },
   {
    "datum": "Oktober 1586",
    "jahr": 1586,
    "text": "Prozess gegen Maria Stuart in Fotheringhay; am 25. Oktober spricht die Kommission in Westminster das Todesurteil."
   },
   {
    "datum": "8. Februar 1587",
    "jahr": 1587,
    "text": "Maria Stuart wird in Fotheringhay enthauptet."
   }
  ],
  "quellen": [
   "The National Archives (UK): Ciphers used by Mary Queen of Scots; Babington postscript, SP 12/193/54",
   "British Library: The gallows letter",
   "NSA, Center for Cryptologic History: To Catch a Queen",
   "John Cooper: The Queen's Agent. Francis Walsingham at the Court of Elizabeth I, 2011",
   "Encyclopaedia Britannica: Babington Plot"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/babington-verschwoerung-0.jpg",
    "breite": 855,
    "hoehe": 1100,
    "zeigt": "Das gefälschte Postskriptum zu Marias Brief an Babington (National Archives SP 12/193/54) neben Babingtons Aufzeichnung der verwendeten Chiffre",
    "urheber": "Thomas Phelippes and Anthony Babington",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Babington_postscript.jpg"
   },
   {
    "datei": "bilder/dark/babington-verschwoerung-1.jpg",
    "breite": 822,
    "hoehe": 1100,
    "zeigt": "Chiffren- und Codetafeln Maria Stuarts aus den Staatspapieren (National Archives SP 53/22)",
    "urheber": "Mary, Queen of Scots",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mary-cipher-code.jpg"
   },
   {
    "datei": "bilder/dark/babington-verschwoerung-2.jpg",
    "breite": 898,
    "hoehe": 1100,
    "zeigt": "Sir Francis Walsingham, Bildnis aus dem Umkreis von John de Critz d. Ä.",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Sir_Francis_Walsingham_by_John_De_Critz_the_Elder.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "alfred-redl",
  "rubrik": "spionage",
  "unterart": "Spion",
  "titel": "Alfred Redl",
  "untertitel": "Der Spionageabwehrchef, der für Russland spionierte – Wien 1913",
  "jahr": 1913,
  "zeitraum": "etwa 1902/1907 bis Mai 1913",
  "ort": "Hotel Klomser, Herrengasse, Wien",
  "land": "Österreich-Ungarn",
  "lat": 48.2083,
  "lon": 16.3725,
  "ortQuelle": "https://en.wikipedia.org/wiki/Vienna",
  "status": "aufgeklärt",
  "kurz": "Ausgerechnet der Mann, der in Wien Spione jagte, verkaufte jahrelang Geheimnisse an Russland. Seine Enttarnung 1913 und die hastige Vertuschung wurden zum Skandal der Habsburgermonarchie.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Alfred Redl wurde am 14. März 1864 in Lemberg geboren, als Sohn eines Eisenbahnbeamten ohne Vermögen. Er machte in der k. u. k. Armee eine für seine Herkunft ungewöhnliche Karriere, wurde Generalstabsoffizier und kam ins Evidenzbureau, den militärischen Nachrichtendienst in Wien. Dort baute er die Spionageabwehr mit auf und galt als Neuerer: Ihm werden moderne Methoden wie heimliche Fotografien und Fingerabdrücke zugeschrieben, wobei spätere Darstellungen manches übertrieben haben dürften. 1907 war er stellvertretender Leiter des Dienstes, 1912 wurde er als Oberst Generalstabschef des VIII. Korps in Prag. Sein Lebensstil – Automobile, Wohnungen, teure Kleidung – lag weit über dem, was sein Sold erlaubte."
   },
   {
    "titel": "Die Operation",
    "text": "Wann genau Redl begann, für Russland zu arbeiten, ist nicht sicher; die Forschung nennt Anfänge um 1902 und regelmäßige Zahlungen spätestens ab etwa 1907. Nach den Untersuchungen nach seinem Tod lieferte er dem russischen Nachrichtendienst Aufmarschüberlegungen, Angaben zu Festungen, Mobilmachungsunterlagen und die Namen österreichischer Agenten in Russland. Zugleich half ihm seine Stellung, die eigenen Spuren zu verwischen. Ältere Darstellungen behaupteten, er sei wegen seiner Homosexualität erpresst und zur Spionage gezwungen worden. Die neuere Forschung, vor allem Verena Moritz und Hannes Leidinger, sieht dafür keinen Beleg und beschreibt ihn als Selbstanbieter, den vor allem das Geld trieb."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Im Frühjahr 1913 fiel der deutschen Postüberwachung auf, dass postlagernde Briefe mit Geld an einen Empfänger namens Nikon Nizetas in Wien zurückgekommen waren, abgeschickt aus Eydtkuhnen an der russischen Grenze. Der deutsche Nachrichtendienst informierte die Österreicher, deren Polizei das Hauptpostamt überwachen ließ. Am 24. Mai 1913 holte Redl die Briefe ab. Die Beamten folgten ihm bis ins Hotel Klomser in der Herrengasse; nach der verbreiteten Darstellung verriet ihn ein im Taxi liegen gelassenes Messeretui. In der Nacht suchten ihn vier Offiziere des Evidenzbureaus auf, darunter sein Nachfolger Maximilian Ronge. Redl gestand und erhielt eine Pistole. In den frühen Morgenstunden des 25. Mai erschoss er sich."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Die Armeeführung wollte einen Prozess und damit Öffentlichkeit vermeiden. Generalstabschef Franz Conrad von Hötzendorf billigte das Vorgehen; der Tod wurde zunächst als Selbstmord aus Überarbeitung gemeldet. Die Durchsuchung von Redls Prager Wohnung brachte jedoch Material zutage, und binnen Tagen berichtete die Presse über Spionage. Im Parlament wurden Anfragen gestellt; Kaiser Franz Joseph und Thronfolger Franz Ferdinand waren über die Art der Erledigung empört, weil man einem Verräter den Freitod gewährt und die Aufklärung seiner Kontakte verbaut hatte. Die Affäre beschädigte das Ansehen des Generalstabs ein Jahr vor Kriegsbeginn."
   }
  ],
  "legende": "Redls Geschichte ist früh literarisch überformt worden. Der Prager Journalist Egon Erwin Kisch trug zur Enthüllung bei; seine spätere Darstellung, wonach er durch einen Fußballspieler und Schlosser von der Hausdurchsuchung erfuhr, und sein Buch von 1924 gelten als stark ausgeschmückt. Filme wie Oberst Redl von István Szabó (1985) und John Osbornes Drama A Patriot for Me verfestigten das Bild vom erpressten homosexuellen Offizier. Belegt ist, dass Redl homosexuell war; dass Erpressung der Grund für den Verrat war, ist nicht belegt. Auch die Behauptung, sein Verrat sei schuld an den Niederlagen in Galizien und Serbien 1914, gilt heute als überzogen: Pläne wurden geändert, und Russland hatte weitere Quellen.",
  "bedeutung": "Der Fall wurde zum Lehrstück über das Risiko, dass ausgerechnet die Spionageabwehr selbst unterwandert ist, und über den Schaden, den Vertuschung anrichtet: Weil Redl sterben durfte, statt verhört zu werden, blieb unklar, was genau er verraten hatte. Für die Öffentlichkeit der späten Habsburgermonarchie war er ein Symbol für Fäulnis im Inneren der Armee. In der Geschichte der Nachrichtendienste steht er am Anfang einer Reihe von Maulwürfen in leitenden Positionen, die bis zu Kim Philby und Aldrich Ames reicht.",
  "zeitleiste": [
   {
    "datum": "14. März 1864",
    "jahr": 1864,
    "text": "Alfred Redl wird in Lemberg geboren."
   },
   {
    "datum": "um 1902 bis 1907",
    "jahr": 1902,
    "text": "Beginn der Spionage für Russland; der genaue Zeitpunkt ist strittig."
   },
   {
    "datum": "1907",
    "jahr": 1907,
    "text": "Redl ist stellvertretender Leiter des Evidenzbureaus in Wien."
   },
   {
    "datum": "1912",
    "jahr": 1912,
    "text": "Versetzung als Generalstabschef des VIII. Korps nach Prag."
   },
   {
    "datum": "24. Mai 1913",
    "jahr": 1913,
    "text": "Redl holt die überwachten postlagernden Briefe in Wien ab."
   },
   {
    "datum": "25. Mai 1913",
    "jahr": 1913,
    "text": "Nach dem Geständnis vor vier Offizieren erschießt er sich im Hotel Klomser."
   },
   {
    "datum": "Ende Mai 1913",
    "jahr": 1913,
    "text": "Die Presse enthüllt die Spionage; der Versuch der Vertuschung scheitert."
   }
  ],
  "quellen": [
   "Verena Moritz, Hannes Leidinger: Oberst Redl. Der Spionagefall, der Skandal, die Fakten, 2012",
   "Austria-Forum / AEIOU: Redl, Alfred",
   "1914-1918-online. International Encyclopedia of the First World War: Redl, Alfred",
   "Encyclopaedia Britannica: Alfred Redl"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/alfred-redl-0.jpg",
    "breite": 695,
    "hoehe": 633,
    "zeigt": "Alfred Redl als Oberst, um 1912 (Bildarchiv der Österreichischen Nationalbibliothek)",
    "urheber": "unbekannt/not known",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Redl_Alfred.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "mata-hari",
  "rubrik": "spionage",
  "unterart": "Spionin",
  "titel": "Mata Hari",
  "untertitel": "Tänzerin, Agentin, Sündenbock – Paris 1917",
  "jahr": 1917,
  "zeitraum": "1915/1916 bis Oktober 1917",
  "ort": "Paris",
  "land": "Frankreich",
  "lat": 48.8567,
  "lon": 2.3522,
  "ortQuelle": "https://en.wikipedia.org/wiki/Paris",
  "status": "umstritten",
  "kurz": "Ihr Name steht für die verführerische Spionin schlechthin. Tatsächlich ließ sie sich von beiden Seiten anwerben, lieferte kaum Brauchbares und wurde in einem Kriegsjahr voller Niederlagen erschossen.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Margaretha Geertruida Zelle wurde am 7. August 1876 in Leeuwarden in den Niederlanden geboren. 1895 heiratete sie den Kolonialoffizier Rudolf MacLeod und lebte mit ihm einige Jahre in Niederländisch-Indien; die Ehe war unglücklich und wurde geschieden. In Paris trat sie ab 1905 als Tänzerin Mata Hari auf, mit angeblich javanischen Tempeltänzen, und wurde berühmt, nicht zuletzt durch die Freizügigkeit ihrer Auftritte. Als ihre Karriere nachließ, lebte sie zunehmend von Beziehungen zu wohlhabenden Männern, darunter viele Offiziere. Als Staatsbürgerin der neutralen Niederlande konnte sie im Krieg zwischen den Ländern reisen, was sie für beide Seiten interessant machte."
   },
   {
    "titel": "Die Operation",
    "text": "Um die Jahreswende 1915/16 warb sie der deutsche Konsul Karl Kroemer in Den Haag an; sie erhielt die Kennung H-21 und nach eigener späterer Aussage 20.000 Francs, die sie als Entschädigung für verlorene Pelze betrachtet haben will. Belege, dass sie den Deutschen danach Wichtiges lieferte, gibt es nicht. Im Sommer 1916 ließ sie sich in Paris auch vom Chef der französischen Spionageabwehr, Hauptmann Georges Ladoux, anwerben, der ihr eine hohe Summe für Informationen aus dem deutschen Hauptquartier in Belgien in Aussicht stellte. Ende 1916 reiste sie nach Madrid und suchte den deutschen Militärattaché Arnold Kalle auf, um ihm Informationen zu entlocken, die sie Ladoux als Beweis ihrer Nützlichkeit bringen wollte."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Kalle meldete seine Gespräche mit H-21 per Funk nach Berlin, in einem Schlüssel, den die Franzosen mitlasen. Ob er das in der Absicht tat, eine wertlose Agentin zu opfern, ist eine Vermutung mancher Historiker, aber nicht belegt. Für Ladoux waren die abgefangenen Telegramme der Beweis, dass Mata Hari eine deutsche Agentin war. Am 13. Februar 1917 wurde sie im Pariser Hotel Élysée Palace verhaftet und im Frauengefängnis Saint-Lazare in zahlreichen Verhören befragt. Sie gab zu, von Kroemer Geld genommen zu haben, bestritt aber, je für Deutschland spioniert zu haben, und verwies auf ihre Arbeit für Frankreich."
   },
   {
    "titel": "Prozess und Hinrichtung",
    "text": "Am 24. und 25. Juli 1917 verhandelte ein Kriegsgericht in Paris unter Ausschluss der Öffentlichkeit. Ankläger war André Mornet. Die Anklage stützte sich auf die abgefangenen Telegramme, das Geld aus Den Haag und ihre zahlreichen Kontakte zu Offizieren; konkrete verratene Geheimnisse konnte sie nicht nennen. Das Gericht sprach sie in allen Punkten schuldig und verurteilte sie zum Tod. Ein Gnadengesuch lehnte Präsident Raymond Poincaré ab. Am Morgen des 15. Oktober 1917 wurde sie in Vincennes bei Paris erschossen. Frankreich erlebte 1917 Meutereien in der Armee, Streiks und eine gescheiterte Offensive; die Regierung brauchte Erfolge gegen den inneren Feind."
   },
   {
    "titel": "Forschungsstand",
    "text": "Die heutige Forschung hält Mata Hari überwiegend für eine Person, die mit dem Spionagegeschäft leichtsinnig spielte, aber keine bedeutende Agentin war. Die Akten des britischen Inlandsgeheimdienstes MI5, die heute in den National Archives liegen, enthalten keinen Hinweis auf wichtige Informationen, die sie geliefert hätte. Biografen wie Pat Shipman sehen in ihr einen Sündenbock für französische Niederlagen. Dafür spricht auch, dass Ladoux selbst noch 1917 unter Verdacht geriet, Doppelagent zu sein, später verhaftet und schließlich freigesprochen wurde. Ihr Fall ist bis heute nicht offiziell neu aufgerollt; Bemühungen in ihrer Heimatstadt Leeuwarden um eine Rehabilitierung blieben ohne Ergebnis."
   }
  ],
  "legende": "Die Anklage behauptete, Mata Hari habe den Tod von bis zu 50.000 französischen Soldaten verschuldet. Für diese Zahl gibt es keinerlei Beleg. Auch das Bild der Femme fatale, die Generälen im Bett Pläne entlockt, stammt aus Presse und Kino, vor allem aus dem Film mit Greta Garbo von 1931. Über ihre Hinrichtung kursieren Anekdoten: Sie habe den Soldaten eine Kusshand zugeworfen oder ihren Mantel geöffnet. Überliefert ist durch einen anwesenden Reporter, dass sie die Augenbinde ablehnte; die übrigen Ausschmückungen sind nicht belegt. Gesichert ist, dass sie deutsches Geld annahm und eine Kennung hatte, nicht aber, dass sie Frankreich ernsthaft geschadet hat.",
  "bedeutung": "Mata Hari wurde zur Chiffre für die Spionin als verführerische Gefahr, ein Bild, das Kriegspropaganda und spätere Filme prägten und das Frauen im Geheimdienst lange anhaftete. Ihr Fall zeigt, wie Kriegsjustiz unter politischem Druck aus Indizien ein Todesurteil machen kann: Ein Prozess hinter verschlossenen Türen, kaum Möglichkeiten der Verteidigung und eine Öffentlichkeit, die Schuldige suchte. Für die Geschichtswissenschaft ist er ein Beispiel, wie lange eine Legende die Aktenlage überdeckt.",
  "zeitleiste": [
   {
    "datum": "7. August 1876",
    "jahr": 1876,
    "text": "Margaretha Geertruida Zelle wird in Leeuwarden geboren."
   },
   {
    "datum": "13. März 1905",
    "jahr": 1905,
    "text": "Auftritt im Pariser Musée Guimet; Beginn ihrer Karriere als Mata Hari."
   },
   {
    "datum": "1915/1916",
    "jahr": 1916,
    "text": "Der deutsche Konsul Kroemer wirbt sie in Den Haag als Agentin H-21 an."
   },
   {
    "datum": "Sommer 1916",
    "jahr": 1916,
    "text": "Hauptmann Ladoux wirbt sie für die französische Spionageabwehr an."
   },
   {
    "datum": "Dezember 1916",
    "jahr": 1916,
    "text": "Treffen mit Militärattaché Kalle in Madrid; seine Funksprüche werden abgefangen."
   },
   {
    "datum": "13. Februar 1917",
    "jahr": 1917,
    "text": "Verhaftung im Hotel Élysée Palace in Paris."
   },
   {
    "datum": "24./25. Juli 1917",
    "jahr": 1917,
    "text": "Kriegsgerichtsverfahren unter Ausschluss der Öffentlichkeit; Todesurteil."
   },
   {
    "datum": "15. Oktober 1917",
    "jahr": 1917,
    "text": "Hinrichtung in Vincennes."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Mata Hari",
   "Ministère des Armées, Chemins de mémoire: Mata Hari",
   "Pat Shipman: Femme Fatale. Love, Lies and the Unknown Life of Mata Hari, 2007",
   "The National Archives (UK): MI5-Akte Mata Hari (KV 2)"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/mata-hari-0.jpg",
    "breite": 803,
    "hoehe": 1100,
    "zeigt": "Mata Hari am Tag ihrer Verhaftung, 13. Februar 1917 (nach Angabe aus der Sammlung des Fries Museum, Leeuwarden)",
    "urheber": "not named",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mata_Hari_on_the_day_of_her_arrest_13-2-1917.jpg"
   },
   {
    "datei": "bilder/dark/mata-hari-1.jpg",
    "breite": 812,
    "hoehe": 1100,
    "zeigt": "Auftritt in der Bibliothek des Musée Guimet in Paris am 13. März 1905",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Mata_Hari_dancing_in_the_Mus%C3%A9e_Guimet_%281905%29_-_1.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "zimmermann-telegramm",
  "rubrik": "spionage",
  "unterart": "Codeknacker",
  "titel": "Das Zimmermann-Telegramm",
  "untertitel": "Room 40, Mexiko und der Kriegseintritt der USA – 1917",
  "jahr": 1917,
  "zeitraum": "Januar bis April 1917",
  "ort": "Room 40, Admiralität, Whitehall, London",
  "land": "Großbritannien",
  "lat": 51.5042,
  "lon": -0.1264,
  "ortQuelle": "https://en.wikipedia.org/wiki/Whitehall",
  "status": "aufgeklärt",
  "kurz": "Ein deutsches Bündnisangebot an Mexiko, mitgelesen von britischen Codeknackern, half, die USA in den Ersten Weltkrieg zu ziehen – der folgenreichste Einbruch in eine Chiffre im Ersten Weltkrieg.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Anfang 1917 beschloss die deutsche Führung, ab dem 1. Februar den uneingeschränkten U-Boot-Krieg zu führen, also auch neutrale Handelsschiffe ohne Warnung zu versenken. Man rechnete damit, dass die USA darauf mit dem Kriegseintritt antworten würden, und hoffte, Großbritannien vorher in die Knie zu zwingen. Staatssekretär des Auswärtigen Arthur Zimmermann wollte die Amerikaner für diesen Fall an ihrer eigenen Grenze binden. Mexiko war nach Jahren der Revolution mit den USA verfeindet; 1916 waren amerikanische Truppen auf der Jagd nach Pancho Villa in Nordmexiko einmarschiert. In London las derweil die Entzifferungsabteilung der Admiralität, nach ihrem Büro Room 40 genannt, seit 1914 große Teile des deutschen Marine- und Diplomatenfunks mit."
   },
   {
    "titel": "Die Operation",
    "text": "Das Telegramm vom 16. Januar 1917 an den Gesandten Heinrich von Eckardt in Mexiko enthielt ein Angebot: Sollten die USA in den Krieg eintreten, möge Mexiko ein Bündnis mit Deutschland schließen; dafür werde es die im 19. Jahrhundert an die USA verlorenen Gebiete in Texas, New Mexico und Arizona zurückerhalten. Mexiko solle zudem Japan zum Seitenwechsel bewegen. Weil Großbritannien die deutschen Überseekabel gekappt hatte, schickte Berlin den Text verschlüsselt unter anderem über das Kabelnetz des amerikanischen Außenministeriums, das Präsident Wilson Deutschland für Friedensgespräche zur Verfügung gestellt hatte. Ausgerechnet dieser Weg führte über britische Leitungen. Die Kryptoanalytiker Nigel de Grey und William Montgomery entzifferten am 17. Januar die ersten Teile."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Der Chef des Marinenachrichtendienstes, Admiral William Reginald Hall, stand vor einem Problem: Er konnte das Telegramm nicht vorlegen, ohne zu verraten, dass Großbritannien deutsche Chiffren las und zugleich amerikanische Diplomatenleitungen anzapfte. Er ließ deshalb in Mexiko-Stadt die Fassung beschaffen, die die deutsche Botschaft in Washington in einem älteren, den Briten bekannten Code nach Mexiko weitergeleitet hatte. So ließ sich behaupten, der Text sei in Mexiko abgefangen worden. Wenige Tage vor dem 24. Februar 1917 übergaben die Briten, zuletzt Außenminister Arthur Balfour, ihn dem amerikanischen Botschafter Walter Hines Page; das genaue Datum der Übergabe wird unterschiedlich angegeben (22. oder 23. Februar). Am 24. Februar kabelte Page den Text nach Washington. Am 1. März stand das Telegramm in den amerikanischen Zeitungen."
   },
   {
    "titel": "Die Folgen",
    "text": "Viele Amerikaner hielten das Telegramm zunächst für eine britische Fälschung. Am 3. März 1917 bestätigte Zimmermann selbst vor Journalisten, dass es echt sei, und verteidigte es später im Reichstag. Seit dem 1. Februar versenkten deutsche U-Boote auch amerikanische Schiffe; die USA hatten am 3. Februar die diplomatischen Beziehungen abgebrochen. Am 2. April bat Wilson den Kongress um die Kriegserklärung, am 6. April 1917 erklärten die USA Deutschland den Krieg. Mexikos Präsident Venustiano Carranza ließ das Angebot prüfen und lehnte es ab, weil das Land weder die Mittel für einen Krieg mit den USA hatte noch eine Bevölkerung in den verlorenen Gebieten, die es hätte halten können."
   }
  ],
  "legende": "Häufig heißt es, das Telegramm allein habe die USA in den Krieg gebracht. Entscheidend war die Kombination mit dem uneingeschränkten U-Boot-Krieg; der Historiker Thomas Boghardt hat gezeigt, dass das Telegramm vor allem die Stimmung im Westen und Südwesten der USA drehte und Wilsons Gegnern im Kongress Argumente nahm, ohne für sich genommen kriegsentscheidend zu sein. Eine weitere verbreitete Annahme ist, die Briten hätten den Text in Mexiko abgefangen. Das war die von Hall gezielt gestreute Tarngeschichte; der eigentliche Zugriff erfolgte in London, über ein amerikanisches Kabel. Dass Zimmermann die Echtheit selbst zugab, gilt als einer der größten diplomatischen Fehler des Krieges, denn ein Dementi hätte die Zweifel genährt.",
  "bedeutung": "Der Fall machte erstmals einer breiten Öffentlichkeit klar, welche Macht die Kryptoanalyse in der Weltpolitik hat; der Kryptologiehistoriker David Kahn urteilte, keine andere einzelne Entzifferung habe so ungeheure Folgen gehabt. Mit den USA traten Truppen und Ressourcen in den Krieg ein, die 1918 die Lage an der Westfront veränderten. Zugleich zeigt der Fall die Grundregel der Fernmeldeaufklärung: Ein Geheimnis zu kennen ist nur die halbe Arbeit, die Quelle zu schützen die andere. Die Briten wahrten das Geheimnis ihres Erfolgs so gut, dass Berlin das Leck in Mexiko suchte und nicht in der eigenen Verschlüsselung.",
  "zeitleiste": [
   {
    "datum": "16. Januar 1917",
    "jahr": 1917,
    "text": "Zimmermann schickt das verschlüsselte Telegramm an den Gesandten in Mexiko."
   },
   {
    "datum": "17. Januar 1917",
    "jahr": 1917,
    "text": "In Room 40 entziffern de Grey und Montgomery die ersten Teile."
   },
   {
    "datum": "1. Februar 1917",
    "jahr": 1917,
    "text": "Deutschland beginnt den uneingeschränkten U-Boot-Krieg."
   },
   {
    "datum": "3. Februar 1917",
    "jahr": 1917,
    "text": "Die USA brechen die diplomatischen Beziehungen zu Deutschland ab."
   },
   {
    "datum": "24. Februar 1917",
    "jahr": 1917,
    "text": "Botschafter Page kabelt das ihm von den Briten übergebene entzifferte Telegramm nach Washington."
   },
   {
    "datum": "1. März 1917",
    "jahr": 1917,
    "text": "Amerikanische Zeitungen veröffentlichen das Telegramm."
   },
   {
    "datum": "3. März 1917",
    "jahr": 1917,
    "text": "Zimmermann bestätigt öffentlich die Echtheit."
   },
   {
    "datum": "6. April 1917",
    "jahr": 1917,
    "text": "Die USA erklären Deutschland den Krieg."
   }
  ],
  "quellen": [
   "U.S. National Archives: The Zimmermann Telegram",
   "Thomas Boghardt: The Zimmermann Telegram. Intelligence, Diplomacy, and America's Entry into World War I, 2012",
   "Barbara W. Tuchman: The Zimmermann Telegram, 1958",
   "David Kahn: The Codebreakers, 1967",
   "Encyclopaedia Britannica: Zimmermann Telegram"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/zimmermann-telegramm-0.jpg",
    "breite": 868,
    "hoehe": 1100,
    "zeigt": "Die verschlüsselte Fassung des Telegramms in Zahlengruppen, wie sie von Washington nach Mexiko weitergeleitet wurde (U.S. National Archives)",
    "urheber": "Place =",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Zimmermann_Telegram_as_Received_by_the_German_Ambassador_to_Mexico_-_NARA_-_302025.jpg"
   },
   {
    "datei": "bilder/dark/zimmermann-telegramm-1.jpg",
    "breite": 508,
    "hoehe": 600,
    "zeigt": "Die entzifferte und übersetzte Fassung des Telegramms (U.S. National Archives)",
    "urheber": "National Archives",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Zimmermann-telegramm-offen.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "richard-sorge",
  "rubrik": "spionage",
  "unterart": "Spion",
  "titel": "Richard Sorge",
  "untertitel": "Der Journalist in der deutschen Botschaft, der für Moskau spionierte – Tokio 1933–1944",
  "jahr": 1933,
  "zeitraum": "September 1933 bis November 1944",
  "ort": "Tokio",
  "land": "Japan",
  "lat": 35.6897,
  "lon": 139.6922,
  "ortQuelle": "https://en.wikipedia.org/wiki/Tokyo",
  "status": "aufgeklärt",
  "kurz": "Als NSDAP-Mitglied und Korrespondent genoss er das Vertrauen des deutschen Botschafters in Tokio – und meldete acht Jahre lang nach Moskau, was Deutschland und Japan planten.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Richard Sorge wurde am 4. Oktober 1895 in Sabuntschi bei Baku geboren, als Sohn eines deutschen Ingenieurs und einer Russin; die Familie zog bald nach Berlin. Im Ersten Weltkrieg meldete er sich freiwillig und wurde schwer verwundet. Unter dem Eindruck des Krieges wurde er Kommunist, promovierte in Hamburg in Staatswissenschaften und trat 1919 der KPD bei. Ab 1924 arbeitete er in Moskau für die Kommunistische Internationale, ab 1929 für den militärischen Nachrichtendienst der Roten Armee. Von 1930 bis 1932 baute er in Shanghai einen Agentenring auf; dort lernte er den japanischen Journalisten Hotsumi Ozaki kennen, der später sein wichtigster Mitarbeiter wurde."
   },
   {
    "titel": "Die Operation",
    "text": "Im September 1933 kam Sorge als Korrespondent deutscher Zeitungen und Zeitschriften nach Tokio, später schrieb er vor allem für die Frankfurter Zeitung, mit makelloser Tarnung als Nationalsozialist. Er wurde Vertrauter des Militärattachés und späteren Botschafters Eugen Ott und hatte in der Botschaft Zugang zu vertraulichen Berichten. Ozaki gehörte zum Beraterkreis von Ministerpräsident Fumimaro Konoe und kannte die Debatten der japanischen Führung. Zum Ring gehörten außerdem der Funker Max Clausen, der jugoslawische Journalist Branko Vukelić und der Maler Yotoku Miyagi. Ende Mai 1941 meldete Sorge, der deutsche Angriff auf die Sowjetunion werde in der zweiten Junihälfte beginnen. Stalin misstraute solchen Warnungen. Im Herbst 1941 berichtete der Ring, Japan werde nach Süden vorstoßen und die Sowjetunion vorerst nicht angreifen."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Die japanische Polizei kam dem Ring über Ermittlungen gegen Kommunisten auf die Spur, die zu Miyagi führten. Mitte Oktober 1941 wurden Miyagi und Ozaki festgenommen, am 18. Oktober 1941 auch Sorge und Clausen. Die deutsche Botschaft hielt die Verhaftung zunächst für einen Irrtum. In den Verhören legten Sorge und seine Mitarbeiter umfangreiche Geständnisse ab; Sorge schrieb eine lange Darstellung seines Lebens und seiner Arbeit. Die Sowjetunion reagierte nicht auf die Gelegenheit, ihn auszutauschen, und bestritt jede Verbindung. Das Gericht verurteilte Sorge und Ozaki zum Tod. Am 7. November 1944, dem Jahrestag der Oktoberrevolution, wurden beide im Tokioter Sugamo-Gefängnis gehängt."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Miyagi starb 1943 in der Haft, Vukelić Anfang 1945 in einem Gefängnis auf Hokkaido. Max Clausen und seine Frau Anna, die als Kurierin mitgearbeitet hatte, kamen nach Kriegsende frei und lebten später in der DDR. Sorges japanische Lebensgefährtin Hanako Ishii fand nach dem Krieg seine sterblichen Überreste und ließ sie auf dem Tama-Friedhof in Tokio beisetzen. In der Sowjetunion blieb Sorge unter Stalin eine Unperson. Erst 1964, nach dem Erfolg eines französischen Films über ihn, erhielt er postum den Titel Held der Sowjetunion; danach feierten ihn Sowjetunion und DDR mit Briefmarken, Straßennamen und Denkmälern."
   }
  ],
  "legende": "Oft heißt es, Sorge habe den genauen Tag des deutschen Überfalls nach Moskau gemeldet. Belegt sind Warnungen mit einer Spanne, zuletzt die zweite Junihälfte 1941; einzelne später veröffentlichte Funksprüche mit genauem Datum gelten in der Forschung als zweifelhaft. Auch die Formel vom Spion, der Moskau rettete, ist zu einfach: Sorges Meldung vom Herbst 1941, Japan greife nicht an, mag Stalins Entscheidung gestützt haben, Truppen aus Fernost nach Westen zu verlegen. Verlegungen hatten aber schon früher begonnen, und Moskau verfügte über weitere Quellen, darunter die eigene Fernmeldeaufklärung. Gesichert ist, dass Sorge über Jahre Informationen aus dem Herzen der deutschen Botschaft lieferte.",
  "bedeutung": "Sorge gilt als einer der erfolgreichsten Spione des 20. Jahrhunderts, gerade weil er nicht heimlich einbrach, sondern als geschätzter Kollege und Gesprächspartner Vertrauen gewann. Sein Fall zeigt zugleich die Grenze jeder Aufklärung: Die besten Informationen nützen wenig, wenn die eigene Führung sie nicht glauben will. Der Umgang Moskaus mit ihm, vom Verleugnen bis zum Heldenkult, macht ihn zudem zu einem Lehrstück darüber, wie Geheimdienste und Staaten ihre Agenten benutzen und ihre Geschichte nachträglich gestalten.",
  "zeitleiste": [
   {
    "datum": "4. Oktober 1895",
    "jahr": 1895,
    "text": "Richard Sorge wird in Sabuntschi bei Baku geboren."
   },
   {
    "datum": "1930–1932",
    "jahr": 1930,
    "text": "Sorge leitet einen sowjetischen Agentenring in Shanghai und lernt Ozaki kennen."
   },
   {
    "datum": "September 1933",
    "jahr": 1933,
    "text": "Ankunft in Tokio als Korrespondent deutscher Zeitungen."
   },
   {
    "datum": "Ende Mai 1941",
    "jahr": 1941,
    "text": "Sorge meldet den deutschen Angriff für die zweite Junihälfte."
   },
   {
    "datum": "Herbst 1941",
    "jahr": 1941,
    "text": "Der Ring meldet, Japan werde nach Süden vorstoßen statt die Sowjetunion anzugreifen."
   },
   {
    "datum": "18. Oktober 1941",
    "jahr": 1941,
    "text": "Sorge wird in Tokio verhaftet."
   },
   {
    "datum": "7. November 1944",
    "jahr": 1944,
    "text": "Sorge und Ozaki werden im Sugamo-Gefängnis hingerichtet."
   },
   {
    "datum": "November 1964",
    "jahr": 1964,
    "text": "Postume Auszeichnung als Held der Sowjetunion."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Richard Sorge",
   "Owen Matthews: An Impeccable Spy. Richard Sorge, Stalin's Master Agent, 2019",
   "Robert Whymant: Stalin's Spy. Richard Sorge and the Tokyo Espionage Ring, 1996",
   "David E. Murphy: What Stalin Knew. The Enigma of Barbarossa, 2005"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/richard-sorge-0.jpg",
    "breite": 900,
    "hoehe": 667,
    "zeigt": "Sorges Ausweis als ausländischer Korrespondent, ausgestellt vom japanischen Informationsamt, datiert Juli 1941",
    "urheber": "情報局第三部",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Richard_Sorge_press_pass.jpg"
   },
   {
    "datei": "bilder/dark/richard-sorge-1.jpg",
    "breite": 900,
    "hoehe": 1081,
    "zeigt": "Richard Sorge, Porträt um 1940 aus Familienbesitz (Bundesarchiv)",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 3.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-1985-1003-020%2C_Richard_Sorge.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "cambridge-five",
  "rubrik": "spionage",
  "unterart": "Spionagering",
  "titel": "Die Cambridge Five",
  "untertitel": "Sowjetische Spione im Herzen des britischen Establishments",
  "jahr": 1934,
  "zeitraum": "1934–1963",
  "ort": "Cambridge und London",
  "land": "Großbritannien",
  "lat": 52.205,
  "lon": 0.119,
  "ortQuelle": "https://en.wikipedia.org/wiki/Cambridge",
  "status": "aufgeklärt",
  "kurz": "Fünf Absolventen der Universität Cambridge spionieren jahrzehntelang für Moskau, einer von ihnen bis in die Spitze des britischen Auslandsgeheimdienstes. Ihre Enttarnung erschüttert das Vertrauen der USA.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "In den frühen 1930er-Jahren, unter dem Eindruck von Weltwirtschaftskrise und Aufstieg des Faschismus, sahen viele junge Akademiker in der Sowjetunion eine Alternative. Der sowjetische Anwerber Arnold Deutsch, der in London lebte, gewann ab 1934 eine Gruppe von Cambridge-Absolventen für den Geheimdienst NKWD: Kim Philby, Donald Maclean, Guy Burgess, den Kunsthistoriker Anthony Blunt und später John Cairncross. Sie sollten ihre kommunistischen Überzeugungen ablegen, zumindest nach außen, und Karrieren in Staat und Geheimdiensten anstreben. In Moskau wurden sie später als die „Glorreichen Fünf“ geführt; der Name „Cambridge Five“ setzte sich erst nach ihrer Enttarnung durch."
   },
   {
    "titel": "Die Operation",
    "text": "Alle fünf erreichten einflussreiche Stellen. Maclean wurde Diplomat und gab unter anderem Informationen über die amerikanisch-britische Atomzusammenarbeit weiter. Cairncross arbeitete zeitweise in Bletchley Park und lieferte entschlüsseltes deutsches Material, das der Sowjetunion vor der Schlacht bei Kursk 1943 nützte. Blunt diente im Krieg beim Inlandsgeheimdienst MI5. Burgess arbeitete für die BBC, den Auslandsgeheimdienst und das Außenministerium. Philby stieg am weitesten auf: Er leitete ab 1944 ausgerechnet die Abteilung des Secret Intelligence Service, die gegen die Sowjetunion arbeitete, und war ab 1949 Verbindungsmann zu CIA und FBI in Washington. Dadurch konnte er auch westliche Agenten verraten, die in den Ostblock eingeschleust wurden."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Den Anfang machten die amerikanischen Venona-Entschlüsselungen sowjetischer Funksprüche, die auf einen Spion mit dem Decknamen „Homer“ in der britischen Botschaft in Washington wiesen. Als sich der Verdacht 1951 auf Maclean verdichtete, wurde er offenbar über Philby und Burgess gewarnt. Am 25. Mai 1951 flohen Maclean und Burgess gemeinsam, 1956 traten sie in Moskau öffentlich auf. Philby geriet unter Verdacht, musste den Dienst verlassen, wurde 1955 vom Außenminister Harold Macmillan im Unterhaus aber öffentlich entlastet. Im Januar 1963 verschwand er aus Beirut und tauchte in Moskau auf. Blunt gestand 1964 gegen Zusicherung von Straffreiheit, Cairncross ebenfalls um diese Zeit; beides blieb lange geheim."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Burgess starb 1963 in Moskau, Maclean 1983 ebenda. Philby lebte bis zu seinem Tod 1988 in Moskau und wurde dort mit Ehren beigesetzt. Blunt war bis 1972 Hüter der königlichen Gemäldesammlung, danach deren Berater, und blieb ein angesehener Wissenschaftler, bis Premierministerin Margaret Thatcher ihn am 15. November 1979 im Unterhaus als sowjetischen Agenten benannte, nachdem ein Buch des Journalisten Andrew Boyle auf ihn hingewiesen hatte. Er verlor seine Ritterwürde und starb 1983. Cairncross wurde erst 1990 öffentlich als fünfter Mann bezeichnet, unter anderem durch Angaben des Überläufers Oleg Gordijewski; er starb 1995. Keiner der fünf stand je vor Gericht."
   }
  ],
  "legende": "Gesichert sind die Identität der fünf, ihre Anwerbung durch den sowjetischen Dienst und viele ihrer Lieferungen, belegt durch Venona, Geständnisse, britische Akten und Angaben sowjetischer Überläufer. Die Bezeichnung „Fünf“ ist eine nachträgliche Zuordnung; es gab weitere Cambridge-Rekruten und Spione aus Oxford, deren Rolle kleiner oder weniger klar ist. Jahrzehntelang kursierten Vermutungen über einen „sechsten“ oder „siebten Mann“, die teils Unbeteiligte trafen. Ebenso umstritten ist, wie viel Moskau den Informationen tatsächlich traute: Zeitweise hielt der sowjetische Dienst die Gruppe für zu ergiebig und verdächtigte sie, britische Doppelagenten zu sein.",
  "bedeutung": "Die Affäre zeigte, wie blind Institutionen für Verrat aus den eigenen Reihen sein können, wenn Herkunft, Schule und Universität als Gewähr für Loyalität gelten. Sie belastete das Vertrauen der USA in die britischen Dienste über Jahre und führte in Großbritannien zu strengeren Sicherheitsüberprüfungen. Philbys Verrat kostete nach westlichen Darstellungen eingeschleuste Agenten das Leben, etwa bei gescheiterten Operationen in Albanien um 1950. Die Geschichte prägte zudem die Spionageliteratur, besonders die Romane von John le Carré.",
  "zeitleiste": [
   {
    "datum": "1934",
    "jahr": 1934,
    "text": "Arnold Deutsch beginnt, Kim Philby und weitere Cambridge-Absolventen für den sowjetischen Dienst anzuwerben."
   },
   {
    "datum": "1944",
    "jahr": 1944,
    "text": "Philby übernimmt im Secret Intelligence Service die Abteilung gegen die Sowjetunion."
   },
   {
    "datum": "25. Mai 1951",
    "jahr": 1951,
    "text": "Donald Maclean und Guy Burgess fliehen aus Großbritannien."
   },
   {
    "datum": "November 1955",
    "jahr": 1955,
    "text": "Außenminister Harold Macmillan entlastet Philby öffentlich im Unterhaus."
   },
   {
    "datum": "Januar 1963",
    "jahr": 1963,
    "text": "Philby verschwindet aus Beirut und taucht in Moskau auf."
   },
   {
    "datum": "1964",
    "jahr": 1964,
    "text": "Anthony Blunt gesteht gegen Zusicherung von Straffreiheit."
   },
   {
    "datum": "15. November 1979",
    "jahr": 1979,
    "text": "Margaret Thatcher benennt Blunt im Unterhaus als sowjetischen Agenten."
   },
   {
    "datum": "1990",
    "jahr": 1990,
    "text": "John Cairncross wird öffentlich als fünfter Mann bezeichnet."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Cambridge spy ring",
   "Christopher Andrew: The Defence of the Realm. The Authorized History of MI5, 2009",
   "Christopher Andrew, Wassili Mitrochin: The Mitrokhin Archive, 1999",
   "MI5 (Security Service): The Cambridge Spies, Seite zur Dienstgeschichte"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/cambridge-five-0.jpg",
    "breite": 712,
    "hoehe": 1100,
    "zeigt": "Guy Burgess und Donald Maclean, Seite aus der freigegebenen FBI-Akte",
    "urheber": "FBI",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Burgess-maclean.JPG"
   },
   {
    "datei": "bilder/dark/cambridge-five-1.jpg",
    "breite": 900,
    "hoehe": 566,
    "zeigt": "Kim Philby auf einem Pressefoto, laut Commons von 1955",
    "urheber": "unbekannt",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Kim_Philby_1955.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "bletchley-park-enigma",
  "rubrik": "spionage",
  "unterart": "Codeknacker",
  "titel": "Bletchley Park und die Enigma",
  "untertitel": "Polnische Vorarbeit, britische Großindustrie des Entzifferns – 1939–1945",
  "jahr": 1939,
  "zeitraum": "1932 bis 1945, geheim bis 1974",
  "ort": "Bletchley Park, Buckinghamshire",
  "land": "Großbritannien",
  "lat": 51.9981,
  "lon": -0.7411,
  "ortQuelle": "https://en.wikipedia.org/wiki/Bletchley_Park",
  "status": null,
  "kurz": "Auf einem Landsitz nördlich von London lasen Tausende Frauen und Männer den Funkverkehr der Wehrmacht mit – aufbauend auf polnischer Vorarbeit und unter einem Schweigegebot, das fast dreißig Jahre hielt.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Die Enigma war eine elektromechanische Chiffriermaschine mit Walzen, die bei jedem Tastendruck weiterdrehten, sodass derselbe Buchstabe jedes Mal anders verschlüsselt wurde; ein Steckbrett vervielfachte die Möglichkeiten. Die Reichswehr führte sie Ende der 1920er Jahre ein und hielt sie für sicher. Den ersten Einbruch schafften polnische Mathematiker: Marian Rejewski rekonstruierte Ende 1932 die Verdrahtung der Walzen mithilfe der Permutationstheorie, unterstützt durch Unterlagen, die der französische Nachrichtendienst von dem deutschen Informanten Hans-Thilo Schmidt erhalten hatte. Mit Jerzy Różycki und Henryk Zygalski entwickelte er Verfahren und 1938 die Bomba, eine Maschine zur Schlüsselsuche."
   },
   {
    "titel": "Die Operation",
    "text": "Im Juli 1939, wenige Wochen vor dem deutschen Überfall, übergaben die Polen ihr Wissen und nachgebaute Enigmas bei einem Treffen bei Warschau an Briten und Franzosen. Im August 1939 zog die britische Government Code and Cypher School nach Bletchley Park. Alan Turing, der am 4. September 1939, dem Tag nach der britischen Kriegserklärung, eintraf, und Gordon Welchman entwarfen die britische Bombe, eine Weiterentwicklung der polnischen Idee, die ab 1940 arbeitete; bis Kriegsende liefen mehr als zweihundert davon. In Holzbaracken, den Huts, arbeiteten Teams an Heer, Luftwaffe und Marine. Die gewonnenen Erkenntnisse liefen unter dem Decknamen Ultra. Für den Fernschreibschlüssel der deutschen Führung entstand 1944 Colossus, ein früher elektronischer Rechner des Ingenieurs Tommy Flowers."
   },
   {
    "titel": "Menschen und Methoden",
    "text": "Gegen Kriegsende arbeiteten in Bletchley Park knapp 9.000 Menschen, rund drei Viertel davon Frauen, die die Bomben bedienten, Funksprüche erfassten und auswerteten. Entscheidend waren oft Fehler auf deutscher Seite: wiederkehrende Formeln wie Wetterberichte, bequeme Schlüsselwahl und Meldungen, deren Wortlaut man erraten konnte. Erbeutete Schlüsselunterlagen, etwa aus dem U-Boot U-110 im Mai 1941, halfen beim Marineschlüssel. Als die U-Boote im Februar 1942 eine Enigma mit vier Walzen bekamen, blieb ihr Funk für Bletchley bis Dezember 1942 weitgehend unlesbar, mit schweren Verlusten im Atlantik."
   },
   {
    "titel": "Geheimhaltung und Nachgeschichte",
    "text": "Alle Beschäftigten hatten sich zur Verschwiegenheit verpflichtet, und die meisten hielten sich jahrzehntelang daran, selbst gegenüber ihren Familien. Die Maschinen wurden nach dem Krieg großenteils zerstört. Erst 1973 schrieb der französische Offizier Gustave Bertrand über die Entzifferung, 1974 veröffentlichte der frühere britische Offizier Frederick Winterbotham The Ultra Secret; danach wurde das Thema öffentlich. Turing wurde 1952 wegen homosexueller Handlungen verurteilt und musste sich, um einer Haftstrafe zu entgehen, einer Hormonbehandlung unterziehen; er starb 1954, der Untersuchungsrichter stellte Suizid fest. 2009 entschuldigte sich die britische Regierung, 2013 wurde er postum begnadigt. Der polnische Anteil wurde im Westen lange übergangen."
   }
  ],
  "legende": "Die verbreitete Erzählung, Alan Turing habe die Enigma allein geknackt, ist falsch. Ohne die polnische Vorarbeit von Rejewski, Różycki und Zygalski hätte Bletchley Park 1939 bei null begonnen, und die Arbeit dort war ein Gemeinschaftswerk Tausender. Ebenso verbreitet ist die Zahl, Ultra habe den Krieg um zwei bis vier Jahre verkürzt. Sie stammt vom Historiker und früheren Bletchley-Mitarbeiter Harry Hinsley und ist eine Schätzung, die sich nicht beweisen lässt. Auch die Behauptung, Churchill habe die Bombardierung Coventrys im November 1940 bewusst geschehen lassen, um das Geheimnis zu schützen, gilt nach den Akten als widerlegt; das Ziel war vorher nicht rechtzeitig erkannt worden.",
  "bedeutung": "Bletchley Park war die erste Entzifferungsorganisation im industriellen Maßstab und gab den Alliierten in der Atlantikschlacht, in Nordafrika und bei der Landung in der Normandie einen entscheidenden Informationsvorsprung. Aus der Arbeit dort und aus Colossus gingen wichtige Impulse für die Informatik hervor. Die Nachfolgebehörde GCHQ besteht bis heute. Das jahrzehntelange Schweigen hat zudem die Geschichtsschreibung des Zweiten Weltkriegs verändert: Viele Darstellungen vor 1974 erklärten Siege ohne Wissen über Ultra und mussten danach neu bewertet werden.",
  "zeitleiste": [
   {
    "datum": "Ende 1932",
    "jahr": 1932,
    "text": "Marian Rejewski rekonstruiert die Verdrahtung der militärischen Enigma."
   },
   {
    "datum": "1938",
    "jahr": 1938,
    "text": "Die polnischen Kryptologen bauen die Bomba zur Schlüsselsuche."
   },
   {
    "datum": "Juli 1939",
    "jahr": 1939,
    "text": "Bei einem Treffen bei Warschau übergeben die Polen ihr Wissen an Briten und Franzosen."
   },
   {
    "datum": "August 1939",
    "jahr": 1939,
    "text": "Die Government Code and Cypher School zieht nach Bletchley Park."
   },
   {
    "datum": "1940",
    "jahr": 1940,
    "text": "Die erste britische Bombe nach Entwurf von Turing und Welchman geht in Betrieb."
   },
   {
    "datum": "1944",
    "jahr": 1944,
    "text": "Colossus entziffert den Fernschreibschlüssel der deutschen Führung."
   },
   {
    "datum": "1974",
    "jahr": 1974,
    "text": "Winterbothams Buch The Ultra Secret macht die Arbeit von Bletchley Park öffentlich."
   },
   {
    "datum": "2013",
    "jahr": 2013,
    "text": "Alan Turing wird postum begnadigt."
   }
  ],
  "quellen": [
   "Bletchley Park Trust: Geschichte und Personal von Bletchley Park",
   "GCHQ: The Polish codebreakers who helped break Enigma",
   "F. H. Hinsley u. a.: British Intelligence in the Second World War, 1979–1990",
   "David Kahn: Seizing the Enigma, 1991",
   "Encyclopaedia Britannica: Enigma; Bletchley Park"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/bletchley-park-enigma-0.jpg",
    "breite": 825,
    "hoehe": 1100,
    "zeigt": "Eine Enigma-Maschine, ausgestellt im National Cryptologic Museum der NSA",
    "urheber": "Permission =",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Enigma_Machine_at_NSA.jpg"
   },
   {
    "datei": "bilder/dark/bletchley-park-enigma-1.jpg",
    "breite": 803,
    "hoehe": 1100,
    "zeigt": "Marian Rejewski in Warschau, vermutlich um 1932",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 2.5",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Marian_Rejewski_1932_small.jpg"
   },
   {
    "datei": "bilder/dark/bletchley-park-enigma-2.jpg",
    "breite": 900,
    "hoehe": 530,
    "zeigt": "Das Herrenhaus von Bletchley Park, heute Museum",
    "urheber": "DeFacto",
    "lizenz": "CC BY-SA 4.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bletchley_Park_Mansion.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "atomspionage-fuchs-rosenberg",
  "rubrik": "spionage",
  "unterart": "Spion",
  "titel": "Atomspionage: Klaus Fuchs und die Rosenbergs",
  "untertitel": "Der Verrat der Bombe und ein umstrittenes Todesurteil",
  "jahr": 1941,
  "zeitraum": "1941–1953",
  "ort": "Los Alamos, London, New York",
  "land": "USA, Großbritannien",
  "lat": 35.88,
  "lon": -106.3,
  "ortQuelle": "https://en.wikipedia.org/wiki/Los_Alamos,_New_Mexico",
  "status": "umstritten",
  "kurz": "Der Physiker Klaus Fuchs verrät die Konstruktion der Atombombe an Moskau, seine Enttarnung führt zu Julius und Ethel Rosenberg. Das Ehepaar wird 1953 hingerichtet – ob Ethel den Tod verdiente, ist bis heute umstritten.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Klaus Fuchs, 1911 in Rüsselsheim geboren, war Kommunist und floh 1933 aus Deutschland nach Großbritannien. Als hochbegabter theoretischer Physiker arbeitete er ab 1941 am britischen Atomprogramm und nahm im selben Jahr von sich aus Kontakt zum sowjetischen Militärgeheimdienst auf. 1943 kam er mit der britischen Delegation in die USA zum Manhattan-Projekt, ab August 1944 arbeitete er in Los Alamos. In New York warb zur selben Zeit der Elektroingenieur Julius Rosenberg ein Netz von Informanten für den sowjetischen Dienst an, das vor allem militärische Elektronik lieferte. Zu ihm gehörte sein Schwager David Greenglass, der als Maschinist in Los Alamos eingesetzt war."
   },
   {
    "titel": "Die Operation",
    "text": "Fuchs übergab über einen Kurier, den Chemiker Harry Gold, detaillierte Angaben zur Plutoniumbombe, darunter zum Implosionsprinzip, und später Material zur Wasserstoffbombe. Die erste sowjetische Atombombe, im August 1949 gezündet, folgte weitgehend dem amerikanischen Vorbild; wie viele Jahre die Spionage der Sowjetunion ersparte, ist unter Historikern umstritten. Greenglass gab Skizzen und Beschreibungen von Bauteilen weiter, die er in Los Alamos gesehen hatte, deren Wert Fachleute deutlich geringer einschätzen. Daneben spionierten weitere Wissenschaftler, etwa der junge Physiker Theodore Hall, der nie angeklagt wurde."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Die amerikanischen Venona-Entschlüsselungen sowjetischer Telegramme lenkten 1949 den Verdacht auf Fuchs. Im Januar 1950 gestand er dem britischen Vernehmer William Skardon, am 1. März 1950 verurteilte ihn ein Londoner Gericht zu 14 Jahren Haft, der Höchststrafe für die Weitergabe von Staatsgeheimnissen. Seine Aussagen führten zu Harry Gold, Gold zu Greenglass, und Greenglass belastete Julius Rosenberg, der im Juli 1950 verhaftet wurde. Seine Frau Ethel wurde im August festgenommen, nach heutiger Kenntnis auch als Druckmittel gegen ihren Mann. Im Prozess in New York sagte Greenglass aus, Ethel habe seine Notizen abgetippt. Am 29. März 1951 wurden beide schuldig gesprochen, Richter Irving Kaufman verhängte am 5. April die Todesstrafe."
   },
   {
    "titel": "Die Debatte um Ethel Rosenberg",
    "text": "Julius Rosenbergs Spionage gilt heute als belegt, durch Venona-Telegramme, in denen er unter Decknamen erscheint, und durch Aussagen früherer Mitstreiter wie Morton Sobell, der 2008 einräumte, mit ihm spioniert zu haben. Für Ethel ergeben die Telegramme ein anderes Bild: Sie wusste von der Arbeit ihres Mannes, ein eigener Deckname oder eine aktive Rolle ist darin nicht erkennbar. 2001 räumte Greenglass gegenüber dem Journalisten Sam Roberts ein, er wisse nicht, wer die Notizen abgetippt habe, vermutlich seine Frau Ruth; er habe Ethel belastet, um Ruth zu schützen. 2015 freigegebene Protokolle seiner Aussage vor der Grand Jury zeigen, dass er Ethel dort nicht belastet hatte. Viele Historiker halten das Todesurteil gegen sie deshalb für ungerecht, unabhängig von der Frage, wie viel sie wusste."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Julius und Ethel Rosenberg wurden am 19. Juni 1953 im Gefängnis Sing Sing hingerichtet, trotz internationaler Proteste und Gnadengesuche. Ihre beiden Söhne wuchsen bei Adoptiveltern auf und setzen sich seit Jahrzehnten für die Rehabilitierung ihrer Mutter ein. Greenglass erhielt 15 Jahre Haft, Gold und Sobell jeweils 30 Jahre. Fuchs wurde 1959 vorzeitig entlassen, ging in die DDR und wurde stellvertretender Direktor des Zentralinstituts für Kernforschung in Rossendorf bei Dresden. Er starb 1988 in Ost-Berlin."
   }
  ],
  "legende": "Gesichert ist, dass Fuchs der Sowjetunion entscheidende Angaben zur Atombombe lieferte; er hat es selbst gestanden. Die verbreitete Darstellung, die Rosenbergs hätten „das Geheimnis der Atombombe“ verraten, ist dagegen schief: Ihr Netz lieferte vor allem andere Militärtechnik, und Greenglass' Atomskizzen waren vergleichsweise grob. Lange galt umgekehrt in Teilen der Öffentlichkeit, beide seien völlig unschuldige Opfer der antikommunistischen Hysterie gewesen. Seit der Freigabe der Venona-Unterlagen 1995 ist das für Julius widerlegt. Offen bleibt, wie weit Ethel beteiligt war; gesichert ist nur, dass die Aussage, auf die sich ihre Verurteilung wesentlich stützte, nach dem Eingeständnis des Zeugen falsch war.",
  "bedeutung": "Der Verlust des amerikanischen Atommonopols 1949 und die Spionagefälle schürten in den USA die Angst vor Unterwanderung, die in die Ära McCarthy mündete. Die Rosenbergs blieben die einzigen amerikanischen Zivilisten, die im Kalten Krieg wegen Spionage hingerichtet wurden. Ihr Fall wurde weltweit zum Symbol, für die einen staatlicher Willkür, für die anderen sowjetischen Verrats. Die späte Freigabe von Venona zeigte, wie viel die Behörden schon damals wussten, aber vor Gericht nicht verwenden wollten.",
  "zeitleiste": [
   {
    "datum": "1941",
    "jahr": 1941,
    "text": "Klaus Fuchs nimmt Kontakt zum sowjetischen Militärgeheimdienst auf."
   },
   {
    "datum": "August 1944",
    "jahr": 1944,
    "text": "Fuchs beginnt seine Arbeit in Los Alamos."
   },
   {
    "datum": "29. August 1949",
    "jahr": 1949,
    "text": "Die Sowjetunion zündet ihre erste Atombombe."
   },
   {
    "datum": "1. März 1950",
    "jahr": 1950,
    "text": "Fuchs wird in London zu 14 Jahren Haft verurteilt."
   },
   {
    "datum": "17. Juli 1950",
    "jahr": 1950,
    "text": "Julius Rosenberg wird verhaftet, Ethel im August."
   },
   {
    "datum": "5. April 1951",
    "jahr": 1951,
    "text": "Richter Irving Kaufman verurteilt beide zum Tod."
   },
   {
    "datum": "19. Juni 1953",
    "jahr": 1953,
    "text": "Julius und Ethel Rosenberg werden in Sing Sing hingerichtet."
   },
   {
    "datum": "1995",
    "jahr": 1995,
    "text": "Die USA geben die Venona-Entschlüsselungen frei."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Klaus Fuchs; Julius and Ethel Rosenberg",
   "National Security Agency: The Venona Story (freigegebene Dokumente, 1995)",
   "Sam Roberts: The Brother. The Untold Story of the Rosenberg Case, 2001",
   "The New York Times: Berichte zu Morton Sobell (2008) und den Grand-Jury-Protokollen (2015)",
   "John Earl Haynes, Harvey Klehr: Venona. Decoding Soviet Espionage in America, 1999"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/atomspionage-fuchs-rosenberg-0.jpg",
    "breite": 793,
    "hoehe": 1100,
    "zeigt": "Klaus Fuchs auf seinem Ausweisfoto aus Los Alamos, um 1944",
    "urheber": "Los Alamos Laboratory",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Klaus_Fuchs_Los_Alamos_identity_badge_photo.jpg"
   },
   {
    "datei": "bilder/dark/atomspionage-fuchs-rosenberg-1.jpg",
    "breite": 900,
    "hoehe": 819,
    "zeigt": "Julius und Ethel Rosenberg nach dem Schuldspruch beim Verlassen des Gerichts, 1951",
    "urheber": "Roger Higgins, photographer from \"New York World-Telegram and the Sun\"",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Julius_and_Ethel_Rosenberg_NYWTS.jpg"
   },
   {
    "datei": "bilder/dark/atomspionage-fuchs-rosenberg-2.jpg",
    "breite": 847,
    "hoehe": 1100,
    "zeigt": "Beweisstück 6 im Rosenberg-Prozess: Skizze einer Linsenform für die Atombombe, gezeichnet von David Greenglass",
    "urheber": "Place =",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:U.S._vs._Julius_%26_Ethel_Rosenberg_and_Martin_Sobell%2C_Government_Exhibit_6%2C_Lens_Mold_Sketch_-_NARA_-_278751.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "operation-mincemeat",
  "rubrik": "spionage",
  "unterart": "Täuschung",
  "titel": "Operation Mincemeat",
  "untertitel": "Der Tote mit den falschen Plänen – Huelva 1943",
  "jahr": 1943,
  "zeitraum": "Januar bis Juli 1943",
  "ort": "Huelva",
  "land": "Spanien",
  "lat": 37.25,
  "lon": -6.95,
  "ortQuelle": "https://en.wikipedia.org/wiki/Huelva",
  "status": null,
  "kurz": "Britische Geheimdienstler lassen 1943 eine Leiche mit gefälschten Briefen vor Spanien antreiben. Die Täuschung soll die Deutschen von Sizilien als Landungsziel ablenken und gilt als eine der erfolgreichsten des Krieges.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Nach dem Sieg in Nordafrika war Anfang 1943 für beide Seiten offensichtlich, dass die Alliierten als Nächstes Sizilien angreifen würden. Die britische Führung suchte deshalb nach einem Weg, die Wehrmacht glauben zu lassen, die Landung gelte Griechenland und Sardinien. Den Plan entwickelten der Offizier Charles Cholmondeley und der Marinegeheimdienstler Ewen Montagu im Umfeld des Twenty Committee, das deutsche Agenten in Großbritannien umdrehte. Die Grundidee, einem Toten falsche Dokumente mitzugeben, stand bereits 1939 in einer Ideenliste des Marinegeheimdienstes, die Admiral John Godfrey unterzeichnet hatte und an der wohl auch sein Assistent Ian Fleming mitschrieb."
   },
   {
    "titel": "Die Operation",
    "text": "Als Träger diente die Leiche von Glyndwr Michael, einem obdachlosen Waliser, der im Januar 1943 in London an Rattengift gestorben war. Er erhielt die Identität eines erfundenen Offiziers der Royal Marines, Major William Martin, samt Ausweis, Liebesbriefen, Theaterkarten und Rechnungen. In einer an seinen Mantel geketteten Aktentasche steckte ein persönlicher Brief des Generals Archibald Nye an General Harold Alexander, der beiläufig Griechenland als Ziel nannte. Das U-Boot HMS Seraph setzte den Toten am 30. April 1943 vor der Küste von Huelva aus, wo ein spanischer Fischer ihn fand. Spanien galt als neutral, aber deutschfreundlich, und in Huelva arbeitete ein aktiver Agent der deutschen Abwehr."
   },
   {
    "titel": "Wirkung und Grenzen",
    "text": "Die spanischen Behörden ließen die Dokumente öffnen und abfotografieren, bevor sie den Briten zurückgegeben wurden; Kopien gelangten nach Berlin. Mitgelesene deutsche Funksprüche zeigten der britischen Führung, dass die Täuschung geglaubt wurde. Am 12. Mai 1943 erklärte ein Befehl des Oberkommandos der Wehrmacht Sardinien und den Peloponnes zu vorrangigen Verteidigungsräumen, und Verbände, darunter eine Panzerdivision, wurden nach Griechenland verlegt. Als die Alliierten am 10. Juli 1943 auf Sizilien landeten, war die Insel schwächer verteidigt als befürchtet. Wie groß der Anteil von Mincemeat daran war, ist unter Historikern umstritten, denn zugleich liefen weitere Täuschungsmanöver und Hitler fürchtete ohnehin einen Angriff auf den Balkan."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Der Tote wurde in Huelva als William Martin mit militärischen Ehren beigesetzt. Seine wahre Identität blieb jahrzehntelang geheim; erst 1996 machte der Historiker Roger Morgan anhand freigegebener Akten den Namen Glyndwr Michael bekannt, und 1998 ergänzte die Commonwealth War Graves Commission den Grabstein. Montagu veröffentlichte 1953 mit Erlaubnis der Regierung das Buch „The Man Who Never Was“, auch um anderen, ungenauen Darstellungen zuvorzukommen; 1956 folgte die Verfilmung. Cholmondeley blieb zeitlebens im Hintergrund. Die vollständigen Akten wurden in den National Archives in Kew zugänglich gemacht."
   }
  ],
  "legende": "Gesichert ist der Ablauf durch die freigegebenen britischen Akten und mitgelesene deutsche Funksprüche. Legende ist, dass Mincemeat allein den Ausgang der Landung auf Sizilien entschieden habe; die Forschung sieht die Operation als einen wichtigen Baustein unter mehreren. Die oft erzählte Behauptung, der Tote sei ein Seemann oder Soldat gewesen, ist falsch: Glyndwr Michael war ein mittelloser Zivilist, dessen Einverständnis niemand einholen konnte. Spekulationen, es sei eine andere Leiche verwendet worden, etwa die eines Matrosen von einem gesunkenen Schiff, ließen sich nicht belegen. Ob Ian Fleming selbst die Idee hatte, ist unsicher; das Memorandum von 1939 trägt Godfreys Namen.",
  "bedeutung": "Mincemeat gilt als Lehrstück strategischer Täuschung: Ein einzelner, sorgfältig gestalteter Fund sollte die Lageeinschätzung des Gegners verändern, und die Briten konnten über die Entschlüsselung deutscher Funksprüche verfolgen, ob es gelang. Die Erfahrung floss in spätere Täuschungen ein, vor allem in die Operation Fortitude vor der Landung in der Normandie 1944. Zugleich wirft der Fall ethische Fragen auf, weil der Körper eines Verstorbenen ohne Zustimmung von Angehörigen benutzt wurde.",
  "zeitleiste": [
   {
    "datum": "29. September 1939",
    "jahr": 1939,
    "text": "Ein Memorandum des britischen Marinegeheimdienstes nennt die Idee, einem Toten falsche Papiere mitzugeben."
   },
   {
    "datum": "Januar 1943",
    "jahr": 1943,
    "text": "Glyndwr Michael stirbt in London an Phosphorvergiftung; seine Leiche wird für die Operation ausgewählt."
   },
   {
    "datum": "30. April 1943",
    "jahr": 1943,
    "text": "HMS Seraph setzt den Toten vor Huelva aus, ein Fischer findet ihn noch am selben Tag."
   },
   {
    "datum": "12. Mai 1943",
    "jahr": 1943,
    "text": "Ein Befehl des Oberkommandos der Wehrmacht erklärt Sardinien und den Peloponnes zu vorrangigen Verteidigungsräumen."
   },
   {
    "datum": "10. Juli 1943",
    "jahr": 1943,
    "text": "Die Alliierten landen auf Sizilien."
   },
   {
    "datum": "1953",
    "jahr": 1953,
    "text": "Ewen Montagu veröffentlicht „The Man Who Never Was“."
   },
   {
    "datum": "1996",
    "jahr": 1996,
    "text": "Der Historiker Roger Morgan macht die wahre Identität des Toten bekannt."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Operation Mincemeat",
   "The National Archives (UK): Akten zu Operation Mincemeat, CAB 154 und ADM 223",
   "Ben Macintyre: Operation Mincemeat. The True Spy Story That Changed the Course of World War II, 2010",
   "Ewen Montagu: The Man Who Never Was, 1953"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/operation-mincemeat-0.jpg",
    "breite": 900,
    "hoehe": 638,
    "zeigt": "Der gefälschte Dienstausweis des erfundenen „Major William Martin“, 1943",
    "urheber": "Ewen Montagu Team",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Major_Martin.jpg"
   },
   {
    "datei": "bilder/dark/operation-mincemeat-1.jpg",
    "breite": 900,
    "hoehe": 599,
    "zeigt": "Charles Cholmondeley und Ewen Montagu, die Planer der Operation, vor dem Transportfahrzeug, 1943",
    "urheber": "St. John \"Jock\" Horsfall",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Charles_Cholmondeley_and_Ewen_Montagu.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "oleg-penkowski",
  "rubrik": "spionage",
  "unterart": "Spion",
  "titel": "Oleg Penkowski",
  "untertitel": "Der Oberst, der dem Westen Moskaus Raketen erklärte",
  "jahr": 1960,
  "zeitraum": "1960–1963",
  "ort": "Moskau",
  "land": "Sowjetunion",
  "lat": 55.7558,
  "lon": 37.6173,
  "ortQuelle": "https://en.wikipedia.org/wiki/Moscow",
  "status": "aufgeklärt",
  "kurz": "Ein Oberst des sowjetischen Militärgeheimdienstes liefert CIA und MI6 Tausende geheime Dokumente. Seine Angaben helfen dem Westen, die Raketen auf Kuba 1962 richtig einzuschätzen; er bezahlt mit dem Leben.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Oleg Penkowski, 1919 geboren, war Artillerieoffizier im Zweiten Weltkrieg und später Oberst des Militärgeheimdienstes GRU. In Moskau arbeitete er im Staatskomitee für Wissenschaft und Technik, das Delegationen in den Westen schickte und dem Geheimdienst als Tarnung diente. Aus Enttäuschung über seine stockende Karriere und, nach eigenen Worten, aus Sorge vor der Politik Nikita Chruschtschows suchte er ab 1960 Kontakt zum Westen. Im August 1960 sprach er in Moskau amerikanische Touristen an und gab ihnen einen Brief für die US-Botschaft. Weitere Versuche scheiterten, bis er über den britischen Geschäftsmann Greville Wynne eine Verbindung herstellen konnte."
   },
   {
    "titel": "Die Operation",
    "text": "Im April 1961 trafen ihn Offiziere von CIA und MI6 während einer Dienstreise in London zum ersten Mal, weitere Befragungen folgten in London und Paris. In Moskau übergab er belichtete Filme einer Minox-Kamera an Wynne, an die Frau eines britischen Diplomaten oder über tote Briefkästen. Insgesamt lieferte er Tausende Aufnahmen geheimer Dokumente, darunter technische Handbücher sowjetischer Raketen und Angaben zur Militärdoktrin. Für die westlichen Analytiker war vor allem wichtig, dass sie nun wussten, wie schwach das sowjetische Interkontinentalraketen-Arsenal tatsächlich war, und wie die Mittelstreckenrakete R-12 und ihre Stellungen aussahen."
   },
   {
    "titel": "Penkowski und die Kubakrise",
    "text": "Als ein amerikanisches U-2-Flugzeug im Oktober 1962 Baustellen auf Kuba fotografierte, konnten die Auswerter mithilfe der von Penkowski gelieferten Handbücher die Raketentypen bestimmen und abschätzen, wie weit die Stellungen fertig waren. Das gab Präsident John F. Kennedy einige Tage Zeit, zwischen Angriff und Blockade abzuwägen. Wie groß der Einfluss auf die Entscheidungen tatsächlich war, bewerten Historiker unterschiedlich; dass seine Unterlagen für die Lagebeurteilung genutzt wurden, ist durch freigegebene CIA-Dokumente belegt. Penkowski selbst stand zu diesem Zeitpunkt bereits unter Beobachtung des KGB und wurde am 22. Oktober 1962 verhaftet, dem Tag, an dem Kennedy die Blockade öffentlich ankündigte."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Im November 1962 wurde ein Mitarbeiter der US-Botschaft an einem toten Briefkasten festgenommen und ausgewiesen, Greville Wynne wurde in Budapest verhaftet und nach Moskau gebracht. Im Mai 1963 verurteilte das Militärkollegium des Obersten Gerichts der Sowjetunion Penkowski in einem Schauprozess zum Tod, Wynne zu acht Jahren Haft. Nach sowjetischer Mitteilung wurde Penkowski am 16. Mai 1963 erschossen. Wynne kam 1964 im Austausch gegen den sowjetischen Agenten Konon Molodi frei. Der Chef des GRU, Iwan Serow, verlor nach der Affäre sein Amt."
   }
  ],
  "legende": "Gesichert sind Penkowskis Lieferungen, die Verhaftung und das Urteil, belegt durch freigegebene Unterlagen der CIA und die sowjetische Prozessberichterstattung. Die oft wiederholte Erzählung, er sei lebendig in einem Krematoriumsofen verbrannt worden, geht auf Schilderungen des Überläufers Viktor Suworow zurück und ist nicht belegt; nach offizieller Darstellung wurde er erschossen. Unhaltbar ist auch das Buch „The Penkovsky Papers“ von 1965 als authentisches Tagebuch: Es wurde unter Mitwirkung der CIA aus Befragungsprotokollen zusammengestellt. Vereinzelt wurde vermutet, Penkowski sei vom KGB gesteuert gewesen; dafür gibt es keine tragfähigen Belege.",
  "bedeutung": "Penkowski gilt als einer der wertvollsten Agenten des Westens im Kalten Krieg. Seine Informationen veränderten die amerikanische Einschätzung der sowjetischen Raketenmacht und trugen dazu bei, dass Kennedy in der Kubakrise mit genaueren Kenntnissen verhandeln konnte. Der Fall zeigte zugleich, wie eng die Zusammenarbeit von CIA und MI6 sein konnte, und wie gefährlich Treffen in Moskau unter KGB-Beobachtung waren.",
  "zeitleiste": [
   {
    "datum": "August 1960",
    "jahr": 1960,
    "text": "Penkowski übergibt amerikanischen Touristen in Moskau einen Brief für die US-Botschaft."
   },
   {
    "datum": "April 1961",
    "jahr": 1961,
    "text": "Erstes Treffen mit Offizieren von CIA und MI6 in London."
   },
   {
    "datum": "14. Oktober 1962",
    "jahr": 1962,
    "text": "Ein U-2-Flugzeug fotografiert sowjetische Raketenstellungen auf Kuba."
   },
   {
    "datum": "22. Oktober 1962",
    "jahr": 1962,
    "text": "Der KGB verhaftet Penkowski."
   },
   {
    "datum": "2. November 1962",
    "jahr": 1962,
    "text": "Greville Wynne wird in Budapest festgenommen."
   },
   {
    "datum": "11. Mai 1963",
    "jahr": 1963,
    "text": "Das Gericht verurteilt Penkowski zum Tod und Wynne zu acht Jahren Haft."
   },
   {
    "datum": "16. Mai 1963",
    "jahr": 1963,
    "text": "Penkowski wird nach sowjetischen Angaben hingerichtet."
   },
   {
    "datum": "April 1964",
    "jahr": 1964,
    "text": "Wynne wird gegen Konon Molodi ausgetauscht."
   }
  ],
  "quellen": [
   "Encyclopaedia Britannica: Oleg Vladimirovich Penkovsky",
   "Central Intelligence Agency: CIA Analysis of the Warsaw Pact Forces. The Importance of Clandestine Reporting, 2012",
   "Jerrold L. Schecter, Peter S. Deriabin: The Spy Who Saved the World, 1992",
   "Gordon Corera: The Art of Betrayal. The Secret History of MI6, 2011"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/oleg-penkowski-0.jpg",
    "breite": 900,
    "hoehe": 941,
    "zeigt": "Oleg Penkowski, Foto aus einer CIA-Veröffentlichung",
    "urheber": "Central Intelligence Agency",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Oleg_Penkovsky_CIA.png"
   },
   {
    "datei": "bilder/dark/oleg-penkowski-1.jpg",
    "breite": 900,
    "hoehe": 632,
    "zeigt": "Penkowskis Reisepass von 1960 für eine Dienstreise nach London",
    "urheber": "The Central Intelligence Agency",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:21_Penkovskiy_Passport_-_Flickr_-_The_Central_Intelligence_Agency.jpg"
   },
   {
    "datei": "bilder/dark/oleg-penkowski-2.jpg",
    "breite": 900,
    "hoehe": 632,
    "zeigt": "Minox-Filme, wie Penkowski sie für seine Aufnahmen nutzte, aus einer CIA-Veröffentlichung",
    "urheber": "The Central Intelligence Agency",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:22_Minox_Film_-_Flickr_-_The_Central_Intelligence_Agency.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "guillaume-affaere",
  "rubrik": "spionage",
  "unterart": "Spion",
  "titel": "Die Guillaume-Affäre",
  "untertitel": "Ein DDR-Spion im Kanzleramt und der Rücktritt Willy Brandts",
  "jahr": 1974,
  "zeitraum": "1956–1974",
  "ort": "Bonn",
  "land": "Bundesrepublik Deutschland",
  "lat": 50.7339,
  "lon": 7.0997,
  "ortQuelle": "https://en.wikipedia.org/wiki/Bonn",
  "status": "aufgeklärt",
  "kurz": "Ein Offizier der DDR-Staatssicherheit arbeitet als enger Mitarbeiter von Bundeskanzler Willy Brandt. Seine Verhaftung im April 1974 wird zum Anlass für Brandts Rücktritt.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Günter Guillaume, 1927 in Berlin geboren, und seine Frau Christel siedelten 1956 im Auftrag der Hauptverwaltung Aufklärung der DDR-Staatssicherheit als angebliche Flüchtlinge in die Bundesrepublik über. In Frankfurt am Main traten beide der SPD bei, Guillaume machte sich als zuverlässiger Parteiarbeiter einen Namen und wurde Geschäftsführer im Unterbezirk und Stadtverordneter. 1970 holte ihn das Bundeskanzleramt nach Bonn, obwohl eine Sicherheitsüberprüfung Hinweise auf frühere Kontakte in die DDR ergeben hatte. Ab 1972 war er als Referent für Parteiangelegenheiten einer der persönlichen Mitarbeiter von Willy Brandt."
   },
   {
    "titel": "Die Operation",
    "text": "Guillaume organisierte Termine, Reisen und den Kontakt zur Partei und war damit nah am Kanzler, ohne regulär an außenpolitischen Geheimakten zu arbeiten. Seine Berichte nach Ost-Berlin betrafen vor allem Stimmungen und Machtverhältnisse in SPD und Regierung. Im Sommer 1973 begleitete er Brandt in den Urlaub nach Norwegen und hatte dort Zugang zu vertraulichen Fernschreiben, auch aus dem Bündnis. Ob dieses Material die DDR erreichte, ist ungewiss. Christel Guillaume arbeitete in der hessischen Landesvertretung und ebenfalls für die Staatssicherheit."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Das Bundesamt für Verfassungsschutz stieß bei der Auswertung alter Funksprüche auf Hinweise, die zu den Guillaumes passten, unter anderem auf Glückwünsche zur Geburt eines Sohnes. Im Mai 1973 unterrichtete Verfassungsschutzpräsident Günther Nollau Innenminister Hans-Dietrich Genscher, der Brandt informierte. Man riet dem Kanzler, Guillaume vorerst auf seinem Posten zu lassen, um ihn zu beobachten und Beweise zu sammeln; deshalb fuhr er auch mit nach Norwegen. Am 24. April 1974 wurde das Ehepaar in Bonn festgenommen. Guillaume bezeichnete sich dabei nach Polizeiangaben selbst als Offizier der Nationalen Volksarmee und Mitarbeiter des Ministeriums für Staatssicherheit."
   },
   {
    "titel": "Der Rücktritt",
    "text": "Am 6. Mai 1974 schrieb Brandt an Bundespräsident Gustav Heinemann, er übernehme die politische Verantwortung für Fahrlässigkeiten im Zusammenhang mit der Agentenaffäre und trete zurück. Die Affäre war Auslöser, aber nicht der einzige Grund. Brandt war nach dem Wahlsieg 1972 geschwächt, in der SPD kritisierte ihn vor allem Fraktionschef Herbert Wehner, und Ermittler hatten Hinweise auf sein Privatleben gesammelt, die man in der DDR hätte ausnutzen können. Am 16. Mai 1974 wählte der Bundestag Helmut Schmidt zum Nachfolger. Ein Untersuchungsausschuss befasste sich bis 1975 mit den Versäumnissen der Behörden."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Das Oberlandesgericht Düsseldorf verurteilte Günter Guillaume im Dezember 1975 wegen Landesverrats zu 13 Jahren Haft, Christel Guillaume zu acht Jahren. 1981 kamen beide im Zuge eines Agentenaustauschs in die DDR, wo Guillaume als Held geehrt wurde. Das Ehepaar trennte sich; ihr Sohn Pierre, der in der Bundesrepublik aufgewachsen war, distanzierte sich von den Eltern. Günter Guillaume starb 1995. Brandt blieb SPD-Vorsitzender bis 1987 und starb 1992."
   }
  ],
  "legende": "Gesichert sind Guillaumes Tätigkeit für die Staatssicherheit, der Ablauf der Verhaftung und das Urteil. Legende ist, Guillaume habe allein den Kanzler gestürzt; Brandts Rücktritt hatte mehrere Ursachen, und wie stark jede wog, bewerten Historiker unterschiedlich. Ebenso wenig war der Sturz Brandts ein Ziel der DDR: Der Spionagechef Markus Wolf schrieb später, die Folgen seien für Ost-Berlin unerwünscht gewesen, weil Brandts Ostpolitik der DDR nützte. Der berühmte Satz bei der Festnahme ist nur in den Erinnerungen der Beamten überliefert, sein genauer Wortlaut daher nicht sicher.",
  "bedeutung": "Die Affäre ist der bekannteste Spionagefall der deutsch-deutschen Geschichte. Sie zeigte, wie weit die Auslandsaufklärung der DDR in Bonn vorgedrungen war, und offenbarte Mängel bei Sicherheitsüberprüfungen und in der Abstimmung zwischen Verfassungsschutz, Innenministerium und Kanzleramt. Politisch beendete sie die Kanzlerschaft Brandts, die Ostpolitik setzte Helmut Schmidt aber fort. Nach 1990 ergänzten Stasi-Unterlagen das Bild.",
  "zeitleiste": [
   {
    "datum": "1956",
    "jahr": 1956,
    "text": "Günter und Christel Guillaume siedeln als angebliche Flüchtlinge in die Bundesrepublik über."
   },
   {
    "datum": "1970",
    "jahr": 1970,
    "text": "Guillaume beginnt im Bundeskanzleramt in Bonn."
   },
   {
    "datum": "Mai 1973",
    "jahr": 1973,
    "text": "Brandt wird über den Verdacht gegen Guillaume unterrichtet."
   },
   {
    "datum": "Sommer 1973",
    "jahr": 1973,
    "text": "Guillaume begleitet Brandt in den Urlaub nach Norwegen."
   },
   {
    "datum": "24. April 1974",
    "jahr": 1974,
    "text": "Günter und Christel Guillaume werden in Bonn verhaftet."
   },
   {
    "datum": "6. Mai 1974",
    "jahr": 1974,
    "text": "Willy Brandt erklärt seinen Rücktritt als Bundeskanzler."
   },
   {
    "datum": "Dezember 1975",
    "jahr": 1975,
    "text": "Das Oberlandesgericht Düsseldorf verurteilt Guillaume zu 13 Jahren Haft."
   },
   {
    "datum": "1981",
    "jahr": 1981,
    "text": "Die Guillaumes kommen bei einem Agentenaustausch in die DDR."
   }
  ],
  "quellen": [
   "Bundesarchiv / Stasi-Unterlagen-Archiv: Dokumente zum Fall Guillaume",
   "Bundesstiftung Bundeskanzler-Willy-Brandt-Stiftung: Der Rücktritt 1974",
   "Eckard Michels: Guillaume, der Spion. Eine deutsch-deutsche Karriere, 2013",
   "Der Spiegel: Berichterstattung zur Guillaume-Affäre, 1974"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/guillaume-affaere-0.jpg",
    "breite": 900,
    "hoehe": 646,
    "zeigt": "Willy Brandt und Günter Guillaume bei einem SPD-Parteitag in Düsseldorf, zwischen 1972 und 1974",
    "urheber": "Pelz",
    "lizenz": "CC BY-SA 3.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Willy_Brandt_Guillaume.jpg"
   },
   {
    "datei": "bilder/dark/guillaume-affaere-1.jpg",
    "breite": 900,
    "hoehe": 565,
    "zeigt": "Der Untersuchungsausschuss des Bundestags zum Fall Guillaume vernimmt einen Zeugen, Bonn, 6. November 1974",
    "urheber": "unbekannt",
    "lizenz": "CC BY-SA 3.0 DE",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_B_145_Bild-F044088-0011%2C_Bonn%2C_Guillaume_Untersuchungsausschuss_Bundestag.jpg"
   }
  ],
  "seit": "2026-10-06"
 },
 {
  "id": "aldrich-ames",
  "rubrik": "spionage",
  "unterart": "Spion",
  "titel": "Aldrich Ames",
  "untertitel": "Der CIA-Offizier, der seine Agenten an Moskau verkaufte",
  "jahr": 1985,
  "zeitraum": "1985–1994",
  "ort": "Washington, D.C.",
  "land": "USA",
  "lat": 38.9072,
  "lon": -77.0369,
  "ortQuelle": "https://en.wikipedia.org/wiki/Washington,_D.C.",
  "status": "aufgeklärt",
  "kurz": "Ein Spionageabwehrexperte der CIA verrät ab 1985 fast alle Quellen des Dienstes in der Sowjetunion. Mehrere werden hingerichtet; erst 1994 wird er gefasst.",
  "abschnitte": [
   {
    "titel": "Hintergrund",
    "text": "Aldrich Ames, 1941 geboren, war Sohn eines CIA-Mitarbeiters und trat selbst 1962 in den Dienst ein. Er galt als mittelmäßiger Offizier mit Alkoholproblemen, arbeitete aber in der Sowjetabteilung und leitete ab 1983 die Spionageabwehr gegen sowjetische Operationen. Damit kannte er die Namen der Agenten, die die CIA in der Sowjetunion führte. Nach einer Scheidung und mit hohen Ausgaben für seine neue Partnerin Rosario, die er 1985 heiratete, war er verschuldet. Nach den Feststellungen der Ermittler war Geld sein Hauptmotiv."
   },
   {
    "titel": "Die Operation",
    "text": "Am 16. April 1985 ging Ames in die sowjetische Botschaft in Washington und bot seine Dienste an; bald darauf erhielt er 50.000 Dollar. Im Juni 1985 übergab er dem KGB Unterlagen, die die Identität fast aller damals aktiven CIA- und FBI-Quellen in der Sowjetunion preisgaben. Später spionierte er von Rom aus weiter, wo er von 1986 bis 1989 stationiert war, und danach wieder in der CIA-Zentrale. Nach Angaben des FBI erhielt er bis 1989 rund 1,9 Millionen Dollar, insgesamt nach Presseberichten etwa 2,5 Millionen. Er kaufte ein Haus gegen Barzahlung und fuhr einen Jaguar, was bei seinem Gehalt hätte auffallen müssen."
   },
   {
    "titel": "Die verratenen Quellen",
    "text": "Ab 1985 wurden in der Sowjetunion in kurzer Folge Agenten der CIA verhaftet. Nach Angaben des FBI wurden zehn von ihnen hingerichtet, darunter der GRU-General Dmitri Poljakow, der seit den 1960er-Jahren für die USA gearbeitet hatte. Mehr als hundert amerikanische Geheimdienstoperationen wurden nach FBI-Angaben gefährdet. Der KGB-Offizier Oleg Gordijewski, der für den britischen Dienst arbeitete, wurde im Mai 1985 nach Moskau zurückgerufen und entkam nur durch eine Fluchtaktion des MI6; ob und wann Ames ihn verriet, ist in der Forschung nicht abschließend geklärt. Ein Teil derselben Namen wurde nach heutigem Kenntnisstand zusätzlich vom FBI-Agenten Robert Hanssen verraten, was die Suche nach der Ursache der Verluste lange erschwerte."
   },
   {
    "titel": "Wie es aufflog",
    "text": "Die CIA erklärte die Verluste zunächst auch mit abgehörten Nachrichten oder dem 1985 übergelaufenen Edward Lee Howard. Ein kleines Ermittlerteam unter Jeanne Vertefeuille ging der Sache dennoch nach und stieß auf Ames' unerklärlichen Wohlstand. Im Mai 1993 eröffnete das FBI ein eigenes Ermittlungsverfahren. Es überwachte Ames, durchsuchte seinen Müll und beobachtete im Oktober 1993 ein Kreidezeichen an einem Briefkasten in Washington, mit dem er seinen sowjetischen, inzwischen russischen Kontaktleuten Treffen signalisierte. Am 21. Februar 1994 wurde er festgenommen."
   },
   {
    "titel": "Was aus den Beteiligten wurde",
    "text": "Am 28. April 1994 bekannten sich Ames und seine Frau schuldig. Er wurde zu lebenslanger Haft ohne Möglichkeit der Entlassung verurteilt, Rosario Ames im Oktober 1994 zu 63 Monaten. Ein Bericht des Geheimdienstausschusses des US-Senats warf der CIA im selben Jahr schwere Versäumnisse vor; CIA-Direktor James Woolsey trat Ende 1994 zurück. Ames starb Anfang Januar 2026 im Alter von 84 Jahren in einem Bundesgefängnis in Maryland."
   }
  ],
  "legende": "Gesichert sind durch Geständnis, Urteil und die Angaben von FBI und Senat der Beginn der Spionage, die Zahlungen und der Verrat zahlreicher Quellen. Die Zahl der getöteten Agenten wird in Darstellungen unterschiedlich angegeben, häufig mit zehn oder „mindestens zehn“; welche Verluste Ames und welche anderen Verrätern zuzurechnen sind, lässt sich nicht in jedem Fall trennen. Die Vorstellung, Ames sei ein raffinierter Meisterspion gewesen, trifft nicht zu: Er arbeitete oft nachlässig, sein Erfolg beruhte vor allem darauf, dass die CIA eigene Leute kaum verdächtigte und Warnzeichen wie seinen Lebensstil lange übersah.",
  "bedeutung": "Ames gilt als einer der folgenreichsten Verräter in der Geschichte der CIA. Der Fall erzwang Reformen: Finanzielle Überprüfungen von Mitarbeitern wurden verschärft, und eine Präsidialanweisung von 1994 stellte die Spionageabwehr unter stärkere Beteiligung des FBI. Für die verratenen Quellen und ihre Familien hatte er tödliche Folgen. Zugleich zeigte der Fall, dass der Kalte Krieg zwischen den Geheimdiensten mit dem Ende der Sowjetunion nicht aufgehört hatte.",
  "zeitleiste": [
   {
    "datum": "16. April 1985",
    "jahr": 1985,
    "text": "Ames bietet in der sowjetischen Botschaft in Washington seine Dienste an."
   },
   {
    "datum": "Juni 1985",
    "jahr": 1985,
    "text": "Er übergibt dem KGB die Namen fast aller CIA-Quellen in der Sowjetunion."
   },
   {
    "datum": "1986–1989",
    "jahr": 1986,
    "text": "Ames spioniert von seinem Posten in Rom aus weiter."
   },
   {
    "datum": "Mai 1993",
    "jahr": 1993,
    "text": "Das FBI eröffnet ein Ermittlungsverfahren gegen Ames."
   },
   {
    "datum": "21. Februar 1994",
    "jahr": 1994,
    "text": "Ames wird in Arlington, Virginia, festgenommen."
   },
   {
    "datum": "28. April 1994",
    "jahr": 1994,
    "text": "Ames bekennt sich schuldig und wird zu lebenslanger Haft verurteilt."
   },
   {
    "datum": "Januar 2026",
    "jahr": 2026,
    "text": "Ames stirbt im Alter von 84 Jahren in Haft."
   }
  ],
  "quellen": [
   "Federal Bureau of Investigation: Famous Cases – Aldrich Ames",
   "U.S. Senate Select Committee on Intelligence: An Assessment of the Aldrich H. Ames Espionage Case and Its Implications for U.S. Intelligence, 1994",
   "Encyclopaedia Britannica: Aldrich Ames",
   "Sandra Grimes, Jeanne Vertefeuille: Circle of Treason, 2012",
   "Associated Press: Meldung zum Tod von Aldrich Ames, Januar 2026"
  ],
  "bilder": [
   {
    "datei": "bilder/dark/aldrich-ames-0.jpg",
    "breite": 602,
    "hoehe": 768,
    "zeigt": "Polizeifoto von Aldrich Ames nach seiner Festnahme, 21. Februar 1994",
    "urheber": "staff, Federal Bureau of Investigation",
    "lizenz": "Public domain",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Aldrich_Ames_mugshot.jpg"
   },
   {
    "datei": "bilder/dark/aldrich-ames-1.jpg",
    "breite": 900,
    "hoehe": 731,
    "zeigt": "Briefkasten in Washington an der Stelle, an der Ames Kreidezeichen für seine Kontaktleute hinterließ (Nachbau des Originals)",
    "urheber": "dbking from Flickr",
    "lizenz": "CC BY 2.0",
    "herkunft": "https://commons.wikimedia.org/wiki/File:Aldrich_Ames_mailbox.jpg"
   }
  ],
  "seit": "2026-10-06"
 }
];

const DARK_RUBRIKEN = [
 { "id": "spionage", "titel": "Spionage & Geheimdienste", "kurz": "Agenten, Codeknacker und Täuschungen – von Walsinghams Chiffren bis zum Verrat im Kalten Krieg." },
 { "id": "attentate", "titel": "Attentate", "kurz": "Morde an Mächtigen und gescheiterte Anschläge – wer, warum, und was danach geschah." },
 { "id": "hexen", "titel": "Hexenverfolgung & Inquisition", "kurz": "Wie Verfahren Schuldige erzeugten, wer sich dagegenstellte und wie viele Opfer es wirklich waren." },
 { "id": "piraten", "titel": "Piraten, Fälscher & Ausbrüche", "kurz": "Seeräuber zwischen Mythos und Galgen, Fälschungen, die Jahrhunderte hielten, und Fluchten aus dem Unentrinnbaren." }
];

const DARK_THEMEN = ["verbrechen", "gift", "folter", "kulte"];

const DARK_MYSTERIEN = ["somerton", "franklin-expedition", "mary-celeste", "roanoke", "djatlow-pass", "kaspar-hauser", "wallenberg", "prinzen-im-tower", "db-cooper", "amber-room"];

/* =========================================================
   HISTORIA — DATEN: Dynastien und Herrscherlisten

   Aufbau je Reich: Perioden, darin Dynastien, darin Herrscher.
   Herrscher mit dem Feld "vertiefung" verweisen auf einen
   ausfuehrlichen Artikel in data-vertiefungen.js.

   Diese Datei enthaelt ausschliesslich Inhalte, keinen Code.
   Sie wird in index.html VOR app.js geladen.
   ========================================================= */

const DYNASTIEN = [
{
 "id": "aegypten",
 "reich": "Ägypten",
 "untertitel": "Pharaonen von der Reichseinigung bis Kleopatra",
 "zeitraum": "ca. 3100 v. Chr. – 30 v. Chr.",
 "farbe": "#c9a05a",
 "einleitung": "Über drei Jahrtausende und rund dreißig Dynastien – länger, als zwischen Kleopatra und uns liegt. Die Einteilung in Dynastien stammt von dem ägyptischen Priester Manetho, der um 280 v. Chr. auf Griechisch schrieb; sein Werk selbst ist verloren und nur in widersprüchlichen Auszügen späterer Autoren erhalten.",
 "hinweis": "Alle Jahreszahlen sind Konventionen, keine Messwerte. Die ägyptische Chronologie beruht auf Königslisten, die einzelne Herrscher bewusst ausließen, und auf astronomischen Bezugspunkten, deren Deutung strittig ist. Für das Alte Reich schwanken die Ansätze verschiedener Standardwerke um mehrere Jahrzehnte, für die Zwischenzeiten sind ganze Königsfolgen unsicher. Hier folgen die Angaben überwiegend der Oxford History of Ancient Egypt; abweichende Ansätze sind ebenso vertretbar.",
 "quellen": [
  "Ian Shaw (Hrsg.): The Oxford History of Ancient Egypt",
  "Jürgen von Beckerath: Handbuch der ägyptischen Königsnamen",
  "Encyclopaedia Britannica: Ancient Egypt; List of rulers of Ancient Egypt",
  "Turiner Königspapyrus, Königsliste von Abydos und Palermostein als antike Quellen"
 ],
 "perioden": [
  {
   "name": "Prädynastische Zeit und Reichseinigung",
   "zeitraum": "ca. 3300–3100 v. Chr.",
   "dynastien": [
    {
     "name": "0. Dynastie",
     "zeitraum": "ca. 3300–3100 v. Chr.",
     "kurz": "Herrscher Oberägyptens vor der Reichseinigung, nur durch Grabfunde und Serech-Zeichen belegt. Die Reihenfolge ist unsicher.",
     "herrscher": [
      {
       "name": "Skorpion II.",
       "regierung": "ca. 3150 v. Chr.",
       "kurz": "Von einem Keulenkopf aus Hierakonpolis bekannt, der ihn beim Öffnen eines Kanals zeigt. Ob er ein eigener König oder ein anderer Name für Narmer war, ist offen."
      },
      {
       "name": "Narmer",
       "regierung": "ca. 3100 v. Chr.",
       "kurz": "Die Narmer-Palette zeigt ihn mit der Krone Ober- und Unterägyptens – das früheste Bilddokument eines geeinten Reiches.",
       "vertiefung": "pharao-narmer"
      }
     ]
    }
   ]
  },
  {
   "name": "Frühdynastische Zeit",
   "zeitraum": "ca. 3100–2686 v. Chr.",
   "dynastien": [
    {
     "name": "1. Dynastie",
     "zeitraum": "ca. 3100–2890 v. Chr.",
     "kurz": "Die Königsgräber liegen in Abydos. Menschenopfer im Gefolge des Königs sind nur in dieser Dynastie belegt und hören danach auf.",
     "herrscher": [
      {
       "name": "Hor Aha",
       "regierung": "ca. 3080 v. Chr.",
       "kurz": "Möglicherweise identisch mit dem legendären Reichsgründer Menes. Ihm wird die Gründung von Memphis zugeschrieben."
      },
      {
       "name": "Djer",
       "regierung": "ca. 3050 v. Chr.",
       "kurz": "Sein Grab in Abydos wurde später als Osirisgrab verehrt und zum Wallfahrtsort."
      },
      {
       "name": "Djet",
       "regierung": "ca. 3000 v. Chr.",
       "kurz": "Seine Stele mit der Schlange über dem Palastfassaden-Zeichen gehört zu den bekanntesten Stücken des Louvre."
      },
      {
       "name": "Merneith",
       "regierung": "ca. 2990 v. Chr.",
       "kurz": "Regierte vermutlich für ihren minderjährigen Sohn Den. Sie erhielt ein Königsgrab – die früheste bekannte Herrscherin Ägyptens."
      },
      {
       "name": "Den",
       "regierung": "ca. 2970 v. Chr.",
       "kurz": "Erster König, der den Titel König von Ober- und Unterägypten führt. Aus seiner Zeit stammt die erste Darstellung des Sedfestes."
      },
      {
       "name": "Anedjib",
       "regierung": "ca. 2930 v. Chr.",
       "kurz": "Kurze Regierung; sein Name wurde auf mehreren Gefäßen später ausgemeißelt."
      },
      {
       "name": "Semerchet",
       "regierung": "ca. 2920 v. Chr.",
       "kurz": "Der Kairoer Annalenstein nennt ihm neun Regierungsjahre."
      },
      {
       "name": "Qaa",
       "regierung": "ca. 2900 v. Chr.",
       "kurz": "Letzter Herrscher der Dynastie; sein Grab zeigt bereits eine vereinfachte Anlage."
      }
     ]
    },
    {
     "name": "2. Dynastie",
     "zeitraum": "ca. 2890–2686 v. Chr.",
     "kurz": "Eine Zeit innerer Spannungen: Zwei Könige führen statt des Horus-Falken den Seth-Tiergott oder beide zugleich im Namen. Die Königsfolge ist lückenhaft.",
     "herrscher": [
      {
       "name": "Hetepsechemui",
       "regierung": "ca. 2890 v. Chr.",
       "kurz": "Sein Name bedeutet „Die beiden Mächte sind versöhnt“ – möglicherweise ein Hinweis auf einen beigelegten Konflikt."
      },
      {
       "name": "Nebre",
       "regierung": "ca. 2865 v. Chr.",
       "kurz": "Erster König, der den Sonnengott Re im Namen führt."
      },
      {
       "name": "Ninetjer",
       "regierung": "ca. 2840 v. Chr.",
       "kurz": "Lange Regierung, belegt durch den Palermostein mit Angaben zu Nilhochwasser und Festen."
      },
      {
       "name": "Peribsen",
       "regierung": "ca. 2740 v. Chr.",
       "kurz": "Ersetzte den Horus-Falken über seinem Namen durch das Seth-Tier – ein einmaliger Vorgang, dessen Grund umstritten ist."
      },
      {
       "name": "Chasechemui",
       "regierung": "ca. 2700 v. Chr.",
       "kurz": "Führte Horus und Seth gemeinsam. Sein Grab in Abydos ist das letzte dort; danach verlagert sich die Königsnekropole nach Sakkara."
      }
     ]
    }
   ]
  },
  {
   "name": "Altes Reich",
   "zeitraum": "ca. 2686–2181 v. Chr.",
   "dynastien": [
    {
     "name": "3. Dynastie",
     "zeitraum": "ca. 2686–2613 v. Chr.",
     "kurz": "Der Übergang vom Grabhügel zur Pyramide. Erstmals wird in großem Maßstab in Stein gebaut.",
     "herrscher": [
      {
       "name": "Djoser",
       "regierung": "ca. 2670 v. Chr.",
       "kurz": "Ließ von Imhotep die Stufenpyramide von Sakkara errichten – das älteste monumentale Steinbauwerk der Welt.",
       "vertiefung": "pharao-djoser"
      },
      {
       "name": "Sechemchet",
       "regierung": "ca. 2645 v. Chr.",
       "kurz": "Seine unvollendete Stufenpyramide wurde erst 1951 entdeckt; der Sarkophag war versiegelt und leer."
      },
      {
       "name": "Huni",
       "regierung": "ca. 2620 v. Chr.",
       "kurz": "Letzter König der Dynastie, ihm wird die Pyramide von Meidum zugeschrieben – die Zuordnung ist strittig."
      }
     ]
    },
    {
     "name": "4. Dynastie",
     "zeitraum": "ca. 2613–2494 v. Chr.",
     "kurz": "Die Zeit der größten Pyramiden. Der Staat organisiert Arbeitskraft und Versorgung in einem Ausmaß, das erst wieder in der Neuzeit erreicht wird.",
     "herrscher": [
      {
       "name": "Snofru",
       "regierung": "ca. 2613 v. Chr.",
       "kurz": "Ließ drei Pyramiden bauen und bewegte mehr Steinmasse als jeder andere Pharao. An der Knickpyramide ist der Lernprozess des Pyramidenbaus ablesbar."
      },
      {
       "name": "Cheops (Chufu)",
       "regierung": "ca. 2589 v. Chr.",
       "kurz": "Erbauer der Großen Pyramide von Gizeh, 3.800 Jahre lang das höchste Bauwerk der Welt. Von ihm selbst ist nur eine wenige Zentimeter große Elfenbeinstatuette erhalten.",
       "vertiefung": "pyramiden-giza"
      },
      {
       "name": "Djedefre",
       "regierung": "ca. 2566 v. Chr.",
       "kurz": "Baute als erster in Abu Roasch und führte als erster den Titel „Sohn des Re“."
      },
      {
       "name": "Chephren (Chafre)",
       "regierung": "ca. 2558 v. Chr.",
       "kurz": "Zweite Pyramide von Gizeh; ihm wird meist auch der Große Sphinx zugeschrieben."
      },
      {
       "name": "Mykerinos (Menkaure)",
       "regierung": "ca. 2532 v. Chr.",
       "kurz": "Dritte, deutlich kleinere Pyramide. Seine Triaden-Statuen gehören zu den Höhepunkten ägyptischer Bildhauerei."
      },
      {
       "name": "Schepseskaf",
       "regierung": "ca. 2503 v. Chr.",
       "kurz": "Baute keine Pyramide, sondern ein sargförmiges Grabmal – ein Bruch mit der Tradition."
      }
     ]
    },
    {
     "name": "5. Dynastie",
     "zeitraum": "ca. 2494–2345 v. Chr.",
     "kurz": "Der Sonnenkult tritt in den Vordergrund: Statt riesiger Pyramiden entstehen Sonnenheiligtümer. Am Ende der Dynastie erscheinen die Pyramidentexte, die ältesten religiösen Texte der Welt.",
     "herrscher": [
      {
       "name": "Userkaf",
       "regierung": "ca. 2494 v. Chr.",
       "kurz": "Errichtete das erste Sonnenheiligtum in Abusir."
      },
      {
       "name": "Sahure",
       "regierung": "ca. 2487 v. Chr.",
       "kurz": "Aus seiner Zeit stammt der erste Beleg einer Seeexpedition nach Punt."
      },
      {
       "name": "Niuserre",
       "regierung": "ca. 2445 v. Chr.",
       "kurz": "Sein Sonnenheiligtum ist das besterhaltene; die Reliefs zeigen den Jahreslauf."
      },
      {
       "name": "Djedkare Isesi",
       "regierung": "ca. 2414 v. Chr.",
       "kurz": "Verlagerte den Schwerpunkt zurück zur Pyramide und stärkte die Provinzverwaltung – ein Schritt, der die Zentralmacht langfristig schwächte."
      },
      {
       "name": "Unas",
       "regierung": "ca. 2375 v. Chr.",
       "kurz": "In seiner Pyramide stehen erstmals die Pyramidentexte an den Wänden."
      }
     ]
    },
    {
     "name": "6. Dynastie",
     "zeitraum": "ca. 2345–2181 v. Chr.",
     "kurz": "Die Gaufürsten werden mächtiger und erblich, die Königsmacht schwindet. Am Ende zerfällt der Staat.",
     "herrscher": [
      {
       "name": "Teti",
       "regierung": "ca. 2345 v. Chr.",
       "kurz": "Manetho berichtet, er sei von seiner Leibwache ermordet worden – bestätigt ist das nicht."
      },
      {
       "name": "Pepi I.",
       "regierung": "ca. 2321 v. Chr.",
       "kurz": "Aus seiner Regierung ist eine Haremsverschwörung überliefert, die in einem Beamtengrab erwähnt wird."
      },
      {
       "name": "Merenre I.",
       "regierung": "ca. 2287 v. Chr.",
       "kurz": "Unter ihm unternimmt der Beamte Harchuf seine Reisen nach Nubien."
      },
      {
       "name": "Pepi II.",
       "regierung": "ca. 2278 v. Chr.",
       "kurz": "Ihm werden bis zu 94 Regierungsjahre zugeschrieben – die längste Regierung der Geschichte, wenn die Zahl stimmt. Neuere Forschung hält 64 Jahre für wahrscheinlicher."
      },
      {
       "name": "Nitokris",
       "regierung": "ca. 2184 v. Chr.",
       "kurz": "Von Herodot und Manetho als Königin genannt. Heute gilt als wahrscheinlich, dass es sich um eine Fehllesung des Männernamens Neitiqerti handelt."
      }
     ]
    }
   ]
  },
  {
   "name": "Erste Zwischenzeit",
   "zeitraum": "ca. 2181–2055 v. Chr.",
   "dynastien": [
    {
     "name": "7. und 8. Dynastie",
     "zeitraum": "ca. 2181–2160 v. Chr.",
     "kurz": "Ein Zerfall der Zentralmacht in Memphis. Manetho spricht von siebzig Königen in siebzig Tagen – eine Übertreibung, die aber die Instabilität trifft. Die Namen sind großenteils unsicher.",
     "herrscher": [
      {
       "name": "Neferkare II. und Nachfolger",
       "regierung": "ca. 2181–2160 v. Chr.",
       "kurz": "Nur aus der Königsliste von Abydos bekannt, ohne archäologische Bestätigung. Eine gesicherte Reihenfolge lässt sich nicht angeben."
      },
      {
       "name": "Qakare Ibi",
       "regierung": "ca. 2169 v. Chr.",
       "kurz": "Einziger König dieser Zeit mit einer erhaltenen, sehr kleinen Pyramide in Sakkara."
      }
     ]
    },
    {
     "name": "9. und 10. Dynastie (Herakleopolis)",
     "zeitraum": "ca. 2160–2025 v. Chr.",
     "kurz": "Herrscher im Norden mit Sitz in Herakleopolis, gleichzeitig mit der thebanischen 11. Dynastie im Süden. Die Königsfolge ist bruchstückhaft.",
     "herrscher": [
      {
       "name": "Cheti I. (Achtoes)",
       "regierung": "ca. 2160 v. Chr.",
       "kurz": "Manetho beschreibt ihn als grausam und wahnsinnig – eine Charakterisierung ohne unabhängige Bestätigung."
      },
      {
       "name": "Merikare",
       "regierung": "ca. 2075 v. Chr.",
       "kurz": "Empfänger der „Lehre für Merikare“, einem der bedeutendsten Texte ägyptischer Staatsweisheit."
      }
     ]
    },
    {
     "name": "11. Dynastie (thebanischer Teil)",
     "zeitraum": "ca. 2125–2055 v. Chr.",
     "kurz": "Lokalfürsten aus Theben, die schrittweise das Land unter sich bringen.",
     "herrscher": [
      {
       "name": "Intef I.",
       "regierung": "ca. 2125 v. Chr.",
       "kurz": "Erster thebanischer Herrscher, der den Königstitel führt."
      },
      {
       "name": "Intef II.",
       "regierung": "ca. 2112 v. Chr.",
       "kurz": "Dehnt den thebanischen Einfluss bis Abydos aus."
      },
      {
       "name": "Intef III.",
       "regierung": "ca. 2063 v. Chr.",
       "kurz": "Kurze Regierung, sichert die Grenze gegen Herakleopolis."
      }
     ]
    }
   ]
  },
  {
   "name": "Mittleres Reich",
   "zeitraum": "ca. 2055–1650 v. Chr.",
   "dynastien": [
    {
     "name": "11. Dynastie (geeintes Reich)",
     "zeitraum": "ca. 2055–1985 v. Chr.",
     "kurz": "Die Wiedervereinigung des Landes von Theben aus.",
     "herrscher": [
      {
       "name": "Mentuhotep II.",
       "regierung": "ca. 2055 v. Chr.",
       "kurz": "Vereinigte Ägypten nach über hundert Jahren der Teilung wieder. Sein Terrassentempel in Deir el-Bahari wurde Vorbild für den späteren Bau der Hatschepsut.",
       "vertiefung": "pharao-mentuhotep"
      },
      {
       "name": "Mentuhotep III.",
       "regierung": "ca. 2004 v. Chr.",
       "kurz": "Schickte eine Expedition ins Rote Meer und nach Punt."
      },
      {
       "name": "Mentuhotep IV.",
       "regierung": "ca. 1992 v. Chr.",
       "kurz": "Fehlt in den offiziellen Königslisten. Sein Wesir Amenemhet könnte sein Nachfolger geworden sein."
      }
     ]
    },
    {
     "name": "12. Dynastie",
     "zeitraum": "ca. 1985–1773 v. Chr.",
     "kurz": "Die klassische Epoche Ägyptens: Verwaltung, Literatur und Kunst gelten späteren Generationen als Maßstab. Erste Mitregentschaften sichern die Nachfolge.",
     "herrscher": [
      {
       "name": "Amenemhet I.",
       "regierung": "ca. 1985 v. Chr.",
       "kurz": "Verlegte die Hauptstadt nach Itj-taui und richtete die „Fürstenmauer“ gegen Eindringlinge aus dem Osten ein. Wurde vermutlich ermordet."
      },
      {
       "name": "Sesostris I.",
       "regierung": "ca. 1956 v. Chr.",
       "kurz": "Dehnte die Herrschaft weit nach Nubien aus. In seine Zeit fällt die Erzählung des Sinuhe, das bekannteste Werk ägyptischer Literatur."
      },
      {
       "name": "Amenemhet II.",
       "regierung": "ca. 1911 v. Chr.",
       "kurz": "Aus seiner Regierung stammen Annalenfragmente mit Angaben zu Tributen und Expeditionen."
      },
      {
       "name": "Sesostris II.",
       "regierung": "ca. 1877 v. Chr.",
       "kurz": "Begann die Erschließung des Fayyum durch Bewässerungsanlagen."
      },
      {
       "name": "Sesostris III.",
       "regierung": "ca. 1870 v. Chr.",
       "kurz": "Entmachtete die Gaufürsten und zentralisierte die Verwaltung. Seine Porträts zeigen ein gealtertes, sorgenvolles Gesicht – ein Bruch mit dem idealisierten Königsbild.",
       "vertiefung": "pharao-sesostris3"
      },
      {
       "name": "Amenemhet III.",
       "regierung": "ca. 1831 v. Chr.",
       "kurz": "Höhepunkt des Mittleren Reiches. Sein Grabbezirk in Hawara war als „Labyrinth“ berühmt; Herodot hielt ihn für beeindruckender als die Pyramiden."
      },
      {
       "name": "Amenemhet IV.",
       "regierung": "ca. 1786 v. Chr.",
       "kurz": "Kurze Regierung am Beginn des Niedergangs."
      },
      {
       "name": "Sobekneferu",
       "regierung": "ca. 1777 v. Chr.",
       "kurz": "Erste Frau, die sicher belegt als Pharao mit vollem Königstitel regierte. Mit ihr endet die Dynastie."
      }
     ]
    }
   ]
  },
  {
   "name": "Zweite Zwischenzeit",
   "zeitraum": "ca. 1773–1550 v. Chr.",
   "dynastien": [
    {
     "name": "13. Dynastie",
     "zeitraum": "ca. 1773–1650 v. Chr.",
     "kurz": "Rund fünfzig bis siebzig Könige in gut hundert Jahren, viele nur wenige Monate im Amt. Der Turiner Königspapyrus nennt Namen, die sonst nirgends belegt sind. Eine belastbare Reihenfolge existiert nicht.",
     "herrscher": [
      {
       "name": "Sobekhotep III.",
       "regierung": "ca. 1745 v. Chr.",
       "kurz": "Einer der wenigen Könige dieser Dynastie mit zahlreichen Denkmälern."
      },
      {
       "name": "Neferhotep I.",
       "regierung": "ca. 1741 v. Chr.",
       "kurz": "Regierte etwa elf Jahre und unterhielt Beziehungen bis nach Byblos."
      },
      {
       "name": "Sobekhotep IV.",
       "regierung": "ca. 1730 v. Chr.",
       "kurz": "Mächtigster Herrscher der Dynastie; sein Einfluss reichte bis Nubien."
      }
     ]
    },
    {
     "name": "14. Dynastie",
     "zeitraum": "ca. 1725–1650 v. Chr.",
     "kurz": "Lokale Herrscher im östlichen Nildelta, überwiegend semitischer Herkunft. Fast ausschließlich durch Skarabäen bekannt.",
     "herrscher": [
      {
       "name": "Nehesi",
       "regierung": "ca. 1705 v. Chr.",
       "kurz": "Sein Name bedeutet „der Nubier“. Belegt durch Denkmäler in Avaris."
      }
     ]
    },
    {
     "name": "15. Dynastie (Hyksos)",
     "zeitraum": "ca. 1650–1550 v. Chr.",
     "kurz": "Fremdherrscher aus dem vorderasiatischen Raum mit Hauptstadt Avaris. Die ältere Vorstellung einer gewaltsamen Invasion gilt heute als überholt; Grabungen sprechen für eine über Generationen zugewanderte Bevölkerung, die die Macht übernahm.",
     "herrscher": [
      {
       "name": "Salitis",
       "regierung": "ca. 1650 v. Chr.",
       "kurz": "Von Manetho als erster Hyksos-König genannt, archäologisch nicht fassbar."
      },
      {
       "name": "Chajan",
       "regierung": "ca. 1600 v. Chr.",
       "kurz": "Objekte mit seinem Namen fanden sich bis Kreta und Mesopotamien – ein Hinweis auf weitreichende Handelsbeziehungen."
      },
      {
       "name": "Apophis",
       "regierung": "ca. 1580 v. Chr.",
       "kurz": "Letzter bedeutender Hyksos-König. Mit ihm beginnt der Konflikt mit Theben, den eine literarische Erzählung als Streit über nilpferdlärmende Nächte schildert."
      }
     ]
    },
    {
     "name": "16. und 17. Dynastie",
     "zeitraum": "ca. 1650–1550 v. Chr.",
     "kurz": "Thebanische Herrscher, die parallel zu den Hyksos regieren und den Befreiungskampf beginnen.",
     "herrscher": [
      {
       "name": "Seqenenre Tao",
       "regierung": "ca. 1560 v. Chr.",
       "kurz": "Seine Mumie zeigt fünf schwere Kopfverletzungen durch Waffen, die den Hyksos zugeschrieben werden – er fiel vermutlich im Kampf."
      },
      {
       "name": "Kamose",
       "regierung": "ca. 1555 v. Chr.",
       "kurz": "Setzte den Krieg gegen Avaris fort; seine Siegesstelen berichten davon in ungewöhnlicher Ausführlichkeit."
      }
     ]
    }
   ]
  },
  {
   "name": "Neues Reich",
   "zeitraum": "ca. 1550–1069 v. Chr.",
   "dynastien": [
    {
     "name": "18. Dynastie",
     "zeitraum": "ca. 1550–1295 v. Chr.",
     "kurz": "Ägypten wird Großmacht mit einem Reich von Nubien bis Syrien. Die bekanntesten Herrscher der ägyptischen Geschichte gehören hierher.",
     "herrscher": [
      {
       "name": "Ahmose I.",
       "regierung": "ca. 1550 v. Chr.",
       "kurz": "Vertrieb die Hyksos und begründete das Neue Reich."
      },
      {
       "name": "Amenophis I.",
       "regierung": "ca. 1525 v. Chr.",
       "kurz": "Wurde in Deir el-Medina später als Schutzgott der Handwerker verehrt."
      },
      {
       "name": "Thutmosis I.",
       "regierung": "ca. 1504 v. Chr.",
       "kurz": "Erster König mit Grab im Tal der Könige; sein Feldzug erreichte den Euphrat."
      },
      {
       "name": "Thutmosis II.",
       "regierung": "ca. 1492 v. Chr.",
       "kurz": "Kurze Regierung; Gemahl der Hatschepsut."
      },
      {
       "name": "Hatschepsut",
       "regierung": "ca. 1473 v. Chr.",
       "kurz": "Regierte über zwanzig Jahre als Pharao mit vollem Königstitel und ließ sich mit Königsbart darstellen. Ihre Punt-Expedition ist an ihrem Tempel in Bildern erzählt.",
       "vertiefung": "pharao-hatschepsut"
      },
      {
       "name": "Thutmosis III.",
       "regierung": "ca. 1479 v. Chr.",
       "kurz": "Siebzehn Feldzüge machten Ägypten zur beherrschenden Macht des Vorderen Orients. Wird gelegentlich „Napoleon Ägyptens“ genannt – ein Vergleich des 19. Jahrhunderts, der mehr über Europa sagt als über ihn.",
       "vertiefung": "pharao-thutmosis3"
      },
      {
       "name": "Amenophis II.",
       "regierung": "ca. 1427 v. Chr.",
       "kurz": "Rühmte sich außergewöhnlicher Körperkraft und sportlicher Leistungen."
      },
      {
       "name": "Thutmosis IV.",
       "regierung": "ca. 1400 v. Chr.",
       "kurz": "Ließ die Traumstele zwischen den Pfoten des Sphinx aufstellen."
      },
      {
       "name": "Amenophis III.",
       "regierung": "ca. 1390 v. Chr.",
       "kurz": "Regierungszeit größten Wohlstands und diplomatischer Beziehungen, dokumentiert in den Amarna-Briefen."
      },
      {
       "name": "Echnaton (Amenophis IV.)",
       "regierung": "ca. 1352 v. Chr.",
       "kurz": "Schaffte die alten Kulte weitgehend ab, erhob den Sonnenscheibe Aton zum alleinigen Gott und gründete eine neue Hauptstadt. Nach seinem Tod wurde alles rückgängig gemacht und sein Name getilgt.",
       "vertiefung": "pharao-echnaton"
      },
      {
       "name": "Semenchkare",
       "regierung": "ca. 1338 v. Chr.",
       "kurz": "Kurze Regierung; Identität und Geschlecht sind bis heute umstritten."
      },
      {
       "name": "Tutanchamun",
       "regierung": "ca. 1336 v. Chr.",
       "kurz": "Politisch unbedeutend, kehrte zum alten Glauben zurück. Weltberühmt allein deshalb, weil sein Grab 1922 fast ungeplündert gefunden wurde.",
       "vertiefung": "pharao-tutanchamun"
      },
      {
       "name": "Eje",
       "regierung": "ca. 1327 v. Chr.",
       "kurz": "Hoher Beamter, der nach Tutanchamuns Tod selbst König wurde."
      },
      {
       "name": "Haremhab",
       "regierung": "ca. 1323 v. Chr.",
       "kurz": "General ohne königliche Abstammung; ließ die Amarna-Zeit aus den Königslisten streichen."
      }
     ]
    },
    {
     "name": "19. Dynastie",
     "zeitraum": "ca. 1295–1186 v. Chr.",
     "kurz": "Die Ramessidenzeit beginnt. Der Kampf mit dem Hethiterreich um Syrien endet im ersten überlieferten Friedensvertrag der Geschichte.",
     "herrscher": [
      {
       "name": "Ramses I.",
       "regierung": "ca. 1295 v. Chr.",
       "kurz": "Regierte nur etwa zwei Jahre und begründete die Dynastie."
      },
      {
       "name": "Sethos I.",
       "regierung": "ca. 1294 v. Chr.",
       "kurz": "Sein Grab im Tal der Könige ist das längste und kunstvollste; sein Tempel in Abydos trägt die berühmte Königsliste."
      },
      {
       "name": "Ramses II.",
       "regierung": "ca. 1279 v. Chr.",
       "kurz": "66 Jahre Regierung, unzählige Bauten, über hundert Kinder. Nach der Schlacht bei Kadesch schloss er mit den Hethitern den ältesten erhaltenen Friedensvertrag der Welt.",
       "vertiefung": "pharao-ramses2"
      },
      {
       "name": "Merenptah",
       "regierung": "ca. 1213 v. Chr.",
       "kurz": "Auf seiner Siegesstele steht die früheste bekannte Erwähnung des Namens Israel."
      },
      {
       "name": "Sethos II.",
       "regierung": "ca. 1200 v. Chr.",
       "kurz": "Regierte in einer Zeit von Thronstreitigkeiten."
      },
      {
       "name": "Tausret",
       "regierung": "ca. 1188 v. Chr.",
       "kurz": "Regierte am Ende der Dynastie als Königin mit vollem Königstitel."
      }
     ]
    },
    {
     "name": "20. Dynastie",
     "zeitraum": "ca. 1186–1069 v. Chr.",
     "kurz": "Abwehr der Seevölker, dann wirtschaftlicher Niedergang: Streiks der Grabarbeiter, Inflation und Grabräuberprozesse sind aktenkundig.",
     "herrscher": [
      {
       "name": "Sethnacht",
       "regierung": "ca. 1186 v. Chr.",
       "kurz": "Beendete eine Zeit der Unordnung und begründete die Dynastie."
      },
      {
       "name": "Ramses III.",
       "regierung": "ca. 1184 v. Chr.",
       "kurz": "Letzter großer Pharao. Wehrte die Seevölker ab; unter ihm fand der erste dokumentierte Streik der Geschichte statt. Eine Haremsverschwörung kostete ihn das Leben – 2012 bestätigte eine Computertomografie den Kehlschnitt.",
       "vertiefung": "pharao-ramses3"
      },
      {
       "name": "Ramses IV. bis XI.",
       "regierung": "ca. 1155–1069 v. Chr.",
       "kurz": "Acht Könige gleichen Namens, unter denen die Macht schwindet. Die Hohepriester des Amun in Theben werden faktisch selbstständig. Einzelne Regierungszeiten sind nur teilweise gesichert."
      }
     ]
    }
   ]
  },
  {
   "name": "Dritte Zwischenzeit",
   "zeitraum": "ca. 1069–664 v. Chr.",
   "dynastien": [
    {
     "name": "21. Dynastie",
     "zeitraum": "ca. 1069–945 v. Chr.",
     "kurz": "Geteilte Macht: Könige in Tanis im Norden, Hohepriester des Amun in Theben im Süden.",
     "herrscher": [
      {
       "name": "Smendes",
       "regierung": "ca. 1069 v. Chr.",
       "kurz": "Begründer der Dynastie mit Sitz in Tanis."
      },
      {
       "name": "Psusennes I.",
       "regierung": "ca. 1039 v. Chr.",
       "kurz": "Sein ungeplündertes Grab in Tanis wurde 1940 gefunden – der Fund ging im Krieg fast unter, obwohl er dem Tutanchamuns kaum nachsteht."
      }
     ]
    },
    {
     "name": "22. Dynastie (Libyer)",
     "zeitraum": "ca. 945–715 v. Chr.",
     "kurz": "Herrscher libyscher Herkunft, deren Vorfahren als Söldner ins Land gekommen waren.",
     "herrscher": [
      {
       "name": "Scheschonq I.",
       "regierung": "ca. 945 v. Chr.",
       "kurz": "Führte einen Feldzug nach Palästina; die Liste eroberter Orte in Karnak wird mit dem biblischen Schischak verknüpft."
      },
      {
       "name": "Osorkon II.",
       "regierung": "ca. 872 v. Chr.",
       "kurz": "Beteiligte sich an der Koalition gegen Assyrien in der Schlacht von Qarqar."
      }
     ]
    },
    {
     "name": "23. bis 24. Dynastie",
     "zeitraum": "ca. 818–715 v. Chr.",
     "kurz": "Mehrere Herrscher regieren gleichzeitig in verschiedenen Städten des Deltas. Die Zuordnungen sind unter Fachleuten strittig.",
     "herrscher": [
      {
       "name": "Petubastis I.",
       "regierung": "ca. 818 v. Chr.",
       "kurz": "Begründete eine Nebenlinie in Leontopolis."
      },
      {
       "name": "Tefnachte",
       "regierung": "ca. 727 v. Chr.",
       "kurz": "Versuchte von Sais aus das Delta zu einen und geriet dabei mit Kusch aneinander."
      }
     ]
    },
    {
     "name": "25. Dynastie (Kusch)",
     "zeitraum": "ca. 747–656 v. Chr.",
     "kurz": "Nubische Könige aus dem Reich von Kusch beherrschen Ägypten. Sie verstehen sich als Bewahrer der altägyptischen Tradition und lassen wieder Pyramiden bauen.",
     "herrscher": [
      {
       "name": "Piye",
       "regierung": "ca. 747 v. Chr.",
       "kurz": "Eroberte Ägypten von Süden und ließ den Feldzug auf einer der ausführlichsten Siegesstelen Ägyptens schildern.",
       "vertiefung": "pharao-piye"
      },
      {
       "name": "Schabaka",
       "regierung": "ca. 716 v. Chr.",
       "kurz": "Ließ alte religiöse Texte kopieren, darunter den Denkmal memphitischer Theologie."
      },
      {
       "name": "Taharqa",
       "regierung": "ca. 690 v. Chr.",
       "kurz": "Bedeutendster Herrscher der Dynastie; scheiterte an den Assyrern, die 671 v. Chr. Memphis nahmen."
      },
      {
       "name": "Tanotamun",
       "regierung": "ca. 664 v. Chr.",
       "kurz": "Letzter kuschitischer Pharao; nach der assyrischen Plünderung Thebens zieht er sich nach Nubien zurück."
      }
     ]
    }
   ]
  },
  {
   "name": "Spätzeit",
   "zeitraum": "664–332 v. Chr.",
   "dynastien": [
    {
     "name": "26. Dynastie (Saïten)",
     "zeitraum": "664–525 v. Chr.",
     "kurz": "Eine letzte Blüte aus eigener Kraft: Rückgriff auf die Kunst des Alten Reiches, Öffnung für griechische Söldner und Händler.",
     "herrscher": [
      {
       "name": "Psammetich I.",
       "regierung": "664 v. Chr.",
       "kurz": "Befreite Ägypten von der assyrischen Oberherrschaft mit Hilfe griechischer und karischer Söldner."
      },
      {
       "name": "Necho II.",
       "regierung": "610 v. Chr.",
       "kurz": "Ließ nach Herodot Afrika von phönizischen Seefahrern umrunden und begann einen Kanal zum Roten Meer."
      },
      {
       "name": "Apries",
       "regierung": "589 v. Chr.",
       "kurz": "Wurde nach einer Niederlage in Libyen von seinem eigenen General gestürzt."
      },
      {
       "name": "Amasis",
       "regierung": "570 v. Chr.",
       "kurz": "Regierte lange und wohlhabend; überließ den Griechen Naukratis als Handelsstadt."
      },
      {
       "name": "Psammetich III.",
       "regierung": "526 v. Chr.",
       "kurz": "Verlor nach wenigen Monaten die Schlacht bei Pelusium gegen die Perser."
      }
     ]
    },
    {
     "name": "27. Dynastie (Erste Perserzeit)",
     "zeitraum": "525–404 v. Chr.",
     "kurz": "Ägypten ist Provinz des Achämenidenreiches. Die persischen Großkönige führen den Pharaonentitel.",
     "herrscher": [
      {
       "name": "Kambyses II.",
       "regierung": "525 v. Chr.",
       "kurz": "Eroberte Ägypten. Herodots Bericht über seine Grausamkeiten gilt heute als von ägyptischen Priestern gefärbt."
      },
      {
       "name": "Dareios I.",
       "regierung": "522 v. Chr.",
       "kurz": "Ließ den Kanal vom Nil zum Roten Meer vollenden und die ägyptischen Gesetze sammeln."
      },
      {
       "name": "Xerxes I. bis Dareios II.",
       "regierung": "486–404 v. Chr.",
       "kurz": "Mehrere Aufstände; die persische Kontrolle bleibt unsicher."
      }
     ]
    },
    {
     "name": "28. bis 30. Dynastie",
     "zeitraum": "404–343 v. Chr.",
     "kurz": "Sechzig Jahre wiedergewonnener Unabhängigkeit, ständig bedroht von persischen Rückeroberungsversuchen.",
     "herrscher": [
      {
       "name": "Amyrtaios",
       "regierung": "404 v. Chr.",
       "kurz": "Einziger König der 28. Dynastie, vertrieb die Perser."
      },
      {
       "name": "Hakor",
       "regierung": "393 v. Chr.",
       "kurz": "Wehrte mit griechischen Söldnern mehrere persische Angriffe ab."
      },
      {
       "name": "Nektanebos I.",
       "regierung": "380 v. Chr.",
       "kurz": "Baumeister zahlreicher Tempel; schlug 373 v. Chr. eine persische Invasion zurück."
      },
      {
       "name": "Nektanebos II.",
       "regierung": "360 v. Chr.",
       "kurz": "Letzter einheimischer Pharao Ägyptens. Floh 343 v. Chr. vor den Persern nach Nubien.",
       "vertiefung": "pharao-nektanebos2"
      }
     ]
    },
    {
     "name": "31. Dynastie (Zweite Perserzeit)",
     "zeitraum": "343–332 v. Chr.",
     "kurz": "Kurze erneute Perserherrschaft bis zur Ankunft Alexanders.",
     "herrscher": [
      {
       "name": "Artaxerxes III.",
       "regierung": "343 v. Chr.",
       "kurz": "Eroberte Ägypten zurück; die Überlieferung schreibt ihm harte Repressalien zu."
      },
      {
       "name": "Dareios III.",
       "regierung": "336 v. Chr.",
       "kurz": "Verlor Ägypten 332 v. Chr. kampflos an Alexander."
      }
     ]
    }
   ]
  },
  {
   "name": "Griechisch-römische Zeit",
   "zeitraum": "332–30 v. Chr.",
   "dynastien": [
    {
     "name": "Argeaden",
     "zeitraum": "332–305 v. Chr.",
     "kurz": "Alexander und seine unmittelbaren Nachfolger; Ägypten wird makedonisch regiert.",
     "herrscher": [
      {
       "name": "Alexander der Große",
       "regierung": "332 v. Chr.",
       "kurz": "Wurde in Ägypten als Befreier begrüßt und im Orakel von Siwa als Sohn des Amun anerkannt. Gründete Alexandria."
      }
     ]
    },
    {
     "name": "Ptolemäer",
     "zeitraum": "305–30 v. Chr.",
     "kurz": "Eine griechische Dynastie regiert Ägypten fast drei Jahrhunderte. Sie übernimmt Pharaonentitel und Tempelkult, spricht aber Griechisch; erst die letzte Herrscherin lernt Ägyptisch.",
     "herrscher": [
      {
       "name": "Ptolemaios I. Soter",
       "regierung": "305 v. Chr.",
       "kurz": "General Alexanders, begründete die Dynastie und ließ Museion und Bibliothek von Alexandria einrichten."
      },
      {
       "name": "Ptolemaios II. Philadelphos",
       "regierung": "285 v. Chr.",
       "kurz": "Unter ihm erreicht Alexandria seine kulturelle Blüte; der Leuchtturm auf Pharos entsteht."
      },
      {
       "name": "Ptolemaios III. Euergetes",
       "regierung": "246 v. Chr.",
       "kurz": "Größte Ausdehnung des Reiches. Sein Dekret von Kanopos ist ein Vorläufer des Steins von Rosetta."
      },
      {
       "name": "Ptolemaios IV. bis XII.",
       "regierung": "221–51 v. Chr.",
       "kurz": "Neun Herrscher in einer Zeit von Aufständen, Erbstreitigkeiten und wachsender römischer Einmischung."
      },
      {
       "name": "Kleopatra VII.",
       "regierung": "51 v. Chr.",
       "kurz": "Letzte Herrscherin des unabhängigen Ägypten. Sprach als erste ihrer Dynastie Ägyptisch, verband sich mit Caesar und Marcus Antonius und verlor 30 v. Chr. gegen Octavian.",
       "vertiefung": "pharao-kleopatra"
      }
     ]
    }
   ]
  }
 ]
},
{
 "id": "rom",
 "reich": "Römisches Reich",
 "untertitel": "Von den sagenhaften Königen bis zum Ende des Westens",
 "zeitraum": "753 v. Chr. – 476 n. Chr.",
 "farbe": "#a01f1f",
 "einleitung": "Rom war nacheinander Königtum, Republik und Kaiserreich – und behielt bis zuletzt die Formen der Republik bei, während längst ein Einzelner regierte. Kein Kaiser nannte sich je König: Das Wort war seit der Vertreibung des Tarquinius verbrannt.",
 "hinweis": "Die Königszeit ist Sage mit historischem Kern; die überlieferten Regierungsjahre sind rechnerisch unglaubwürdig. Für die Kaiserzeit sind die Daten dagegen weitgehend gesichert. Wer als rechtmäßiger Kaiser gilt, ist allerdings eine Frage der Zählung: Neben den hier genannten gab es dutzende Gegenkaiser und Usurpatoren, die zeitweise Gebiete beherrschten. Besonders in der Reichskrise des 3. Jahrhunderts ist die Grenze zwischen Kaiser und Usurpator eine Frage des Ausgangs, nicht des Rechts.",
 "quellen": [
  "Encyclopaedia Britannica: Ancient Rome; List of Roman emperors",
  "The Cambridge Ancient History, Bände 10–14",
  "Mary Beard: SPQR. Die tausendjährige Geschichte Roms"
 ],
 "perioden": [
  {
   "name": "Königszeit",
   "zeitraum": "753–509 v. Chr.",
   "dynastien": [
    {
     "name": "Die sieben Könige",
     "zeitraum": "753–509 v. Chr.",
     "kurz": "Die Überlieferung nennt sieben Könige für 244 Jahre – rechnerisch je 35 Jahre, was für eine erbliche Reihe unrealistisch ist. Die Königszeit ist Sage mit historischem Kern, keine gesicherte Geschichte.",
     "herrscher": [
      {
       "name": "Romulus",
       "regierung": "753–716 v. Chr.",
       "kurz": "Sagenhafter Stadtgründer. Die Zwillingslegende ist ein Gründungsmythos, kein Bericht."
      },
      {
       "name": "Servius Tullius",
       "regierung": "578–535 v. Chr.",
       "kurz": "Ihm wird die Einteilung der Bürger nach Vermögen zugeschrieben, die Grundlage der späteren Wahlordnung."
      },
      {
       "name": "Tarquinius Superbus",
       "regierung": "534–509 v. Chr.",
       "kurz": "Der letzte König; seine Vertreibung gilt als Geburtsstunde der Republik. Rom hasste den Königstitel danach so sehr, dass ihn auch die Kaiser nie führten."
      }
     ],
     "weitere": "Numa Pompilius (715–673), Tullus Hostilius (673–642), Ancus Marcius (642–617) und Tarquinius Priscus (616–579) sind nur literarisch überliefert."
    }
   ]
  },
  {
   "name": "Republik",
   "zeitraum": "509–27 v. Chr.",
   "dynastien": [
    {
     "name": "Republik ohne Monarchen",
     "zeitraum": "509–27 v. Chr.",
     "kurz": "Fünf Jahrhunderte ohne Alleinherrscher: Zwei jährlich gewählte Konsuln, dazu Senat und Volksversammlungen. Genannt sind hier nur die Männer, deren Macht das Amt sprengte – sie leiten zum Kaisertum über.",
     "herrscher": [
      {
       "name": "Sulla",
       "regierung": "82–79 v. Chr.",
       "kurz": "Erster Römer, der mit einem Heer die eigene Stadt eroberte, und erster Diktator ohne Zeitbegrenzung. Er legte die Macht freiwillig nieder – ein Vorbild, dem niemand folgte."
      },
      {
       "name": "Pompeius",
       "regierung": "70–48 v. Chr.",
       "kurz": "Feldherr mit außerordentlichen Vollmachten; sein Machtkampf mit Caesar führte in den Bürgerkrieg."
      },
      {
       "name": "Gaius Julius Caesar",
       "regierung": "49–44 v. Chr.",
       "kurz": "Diktator auf Lebenszeit, an den Iden des März ermordet. Sein Familienname wurde zum Herrschertitel – Kaiser und Zar gehen darauf zurück.",
       "vertiefung": "roemische-republik"
      },
      {
       "name": "Marcus Antonius und Octavian",
       "regierung": "43–31 v. Chr.",
       "kurz": "Das zweite Triumvirat teilte das Reich, bis Octavian bei Actium siegte."
      }
     ]
    }
   ]
  },
  {
   "name": "Prinzipat",
   "zeitraum": "27 v. Chr. – 284 n. Chr.",
   "dynastien": [
    {
     "name": "Julisch-claudische Dynastie",
     "zeitraum": "27 v. Chr. – 68 n. Chr.",
     "kurz": "Die Familie des Augustus. Vier von fünf Herrschern starben gewaltsam oder unter ungeklärten Umständen – die Nachfolge war nie geregelt.",
     "herrscher": [
      {
       "name": "Augustus",
       "regierung": "27 v. Chr. – 14 n. Chr.",
       "kurz": "Begründete die Kaiserherrschaft, ohne je König zu heißen. Er nannte sich Erster Bürger und behielt die Formen der Republik bei, während er alle Macht bündelte.",
       "vertiefung": "kaiser-augustus"
      },
      {
       "name": "Tiberius",
       "regierung": "14–37",
       "kurz": "Fähiger Verwalter und Feldherr, der sich auf Capri zurückzog und die Regierung Vertrauten überließ."
      },
      {
       "name": "Caligula",
       "regierung": "37–41",
       "kurz": "Nach vier Jahren von der eigenen Garde ermordet. Die Berichte über seinen Wahnsinn stammen von Autoren, die dem Senat nahestanden."
      },
      {
       "name": "Claudius",
       "regierung": "41–54",
       "kurz": "Von der Garde zum Kaiser gemacht, galt als unfähig und erwies sich als tüchtiger Verwalter. Unter ihm wurde Britannien Provinz."
      },
      {
       "name": "Nero",
       "regierung": "54–68",
       "kurz": "Sein Ruf ist von senatorischer Geschichtsschreibung geprägt. Beim Brand Roms 64 war er nachweislich nicht in der Stadt.",
       "vertiefung": "kaiser-nero"
      }
     ]
    },
    {
     "name": "Vierkaiserjahr",
     "zeitraum": "68–69",
     "kurz": "Nach Neros Sturz erhoben vier Feldherren in einem Jahr Anspruch auf den Thron. Tacitus zog daraus den Schluss, das Geheimnis der Herrschaft sei gelüftet: Kaiser konnte auch außerhalb Roms gemacht werden.",
     "herrscher": [
      {
       "name": "Galba, Otho, Vitellius",
       "regierung": "68–69",
       "kurz": "Drei Kaiser in zwölf Monaten, alle gewaltsam beseitigt. Keiner regierte lange genug, um zu regieren."
      },
      {
       "name": "Vespasian",
       "regierung": "69–79",
       "kurz": "Setzte sich durch und begründete die flavische Dynastie. Er besteuerte öffentliche Bedürfnisanstalten und antwortete auf den Einwand seines Sohnes, Geld stinke nicht."
      }
     ]
    },
    {
     "name": "Flavier",
     "zeitraum": "69–96",
     "kurz": "Eine Familie aus dem italischen Landadel ohne stadtrömische Vorfahren – der Kaiserthron öffnet sich über die Herkunft hinaus.",
     "herrscher": [
      {
       "name": "Titus",
       "regierung": "79–81",
       "kurz": "In seine kurze Regierung fallen der Vesuvausbruch und ein Großbrand Roms."
      },
      {
       "name": "Domitian",
       "regierung": "81–96",
       "kurz": "Straffte die Verwaltung, geriet mit dem Senat aneinander und wurde ermordet; der Senat verhängte über ihn die Verdammung des Andenkens."
      }
     ]
    },
    {
     "name": "Adoptivkaiser",
     "zeitraum": "96–180",
     "kurz": "Fünf Kaiser, die ihren Nachfolger nicht zeugten, sondern auswählten und adoptierten. Zeitgenossen erlebten die Zeit als beste des Reiches – bezeichnenderweise endete sie, als wieder ein leiblicher Sohn folgte.",
     "herrscher": [
      {
       "name": "Nerva",
       "regierung": "96–98",
       "kurz": "Übergangsfigur des Senats, die durch Adoption Trajans die Nachfolge sicherte."
      },
      {
       "name": "Trajan",
       "regierung": "98–117",
       "kurz": "Unter ihm erreichte das Reich seine größte Ausdehnung. Erster Kaiser aus einer Provinz, geboren in Spanien.",
       "vertiefung": "kaiser-trajan"
      },
      {
       "name": "Hadrian",
       "regierung": "117–138",
       "kurz": "Gab Trajans Ostgebiete auf und befestigte die Grenzen; der Hadrianswall in Britannien trägt seinen Namen."
      },
      {
       "name": "Antoninus Pius",
       "regierung": "138–161",
       "kurz": "23 Jahre ohne größeren Krieg – die ruhigste Regierung der Kaiserzeit."
      },
      {
       "name": "Mark Aurel",
       "regierung": "161–180",
       "kurz": "Führte fast durchgehend Krieg an der Donau und schrieb dabei seine Selbstbetrachtungen, das bekannteste Zeugnis stoischer Philosophie.",
       "vertiefung": "kaiser-markaurel"
      }
     ]
    },
    {
     "name": "Severer und Übergang",
     "zeitraum": "180–235",
     "kurz": "Mit Commodus kehrt die leibliche Erbfolge zurück. Die Severer stützen sich offen auf das Heer und erhöhen den Sold – der Anfang der Militärherrschaft.",
     "herrscher": [
      {
       "name": "Commodus",
       "regierung": "180–192",
       "kurz": "Mark Aurels Sohn, trat als Gladiator auf und wurde erdrosselt."
      },
      {
       "name": "Septimius Severus",
       "regierung": "193–211",
       "kurz": "Erster Kaiser afrikanischer Herkunft. Sein Rat an die Söhne: die Soldaten bereichern, alle anderen verachten."
      },
      {
       "name": "Caracalla",
       "regierung": "211–217",
       "kurz": "Verlieh 212 fast allen Reichsbewohnern das Bürgerrecht – die größte Statusänderung der römischen Geschichte, vermutlich auch aus fiskalischem Interesse.",
       "vertiefung": "roemisches-buergerrecht"
      }
     ],
     "weitere": "Geta (211), Macrinus (217–218), Elagabal (218–222) und Severus Alexander (222–235) regierten kurz und endeten sämtlich gewaltsam."
    },
    {
     "name": "Reichskrise des 3. Jahrhunderts",
     "zeitraum": "235–284",
     "kurz": "Rund fünfzig Jahre mit über zwanzig anerkannten Kaisern, dazu Gegenkaiser, Sonderreiche in Gallien und Palmyra, Seuchen, Inflation und Einfälle an allen Grenzen. Die meisten regierten Monate und starben durch die eigenen Truppen.",
     "herrscher": [
      {
       "name": "Decius",
       "regierung": "249–251",
       "kurz": "Ordnete das erste reichsweite Opfergebot an, das zur ersten systematischen Christenverfolgung führte. Fiel gegen die Goten."
      },
      {
       "name": "Valerian",
       "regierung": "253–260",
       "kurz": "Einziger römischer Kaiser, der in Gefangenschaft geriet – der Perserkönig Schapur I. ließ den Sieg in Fels hauen."
      },
      {
       "name": "Aurelian",
       "regierung": "270–275",
       "kurz": "Stellte die Reichseinheit wieder her, gab Dakien auf und ließ Rom eine Stadtmauer bauen – das erste Mal seit fünfhundert Jahren."
      }
     ],
     "weitere": "Weitere: Maximinus Thrax (235–238), Gordian I. bis III. (238–244), Philippus Arabs (244–249), Trebonianus Gallus (251–253), Gallienus (253–268), Claudius Gothicus (268–270), Tacitus (275–276), Probus (276–282), Carus und Söhne (282–285) – dazu die Kaiser des gallischen Sonderreichs."
    }
   ]
  },
  {
   "name": "Dominat und Spätantike",
   "zeitraum": "284–476",
   "dynastien": [
    {
     "name": "Tetrarchie",
     "zeitraum": "284–324",
     "kurz": "Diokletian teilte die Herrschaft auf vier Schultern: zwei Augusti, zwei Caesares. Das System sollte die Nachfolge regeln und zerbrach nach seinem Rücktritt an genau dieser Frage.",
     "herrscher": [
      {
       "name": "Diokletian",
       "regierung": "284–305",
       "kurz": "Beendete die Reichskrise durch grundlegende Reformen von Verwaltung, Heer und Steuer. Trat als einziger Kaiser freiwillig zurück und zog sich in seinen Palast in Split zurück.",
       "vertiefung": "kaiser-diokletian"
      },
      {
       "name": "Maximian",
       "regierung": "286–305",
       "kurz": "Mitkaiser für den Westen, wurde nach seinem Rücktritt erneut in die Machtkämpfe hineingezogen."
      },
      {
       "name": "Galerius",
       "regierung": "305–311",
       "kurz": "Betrieb die letzte große Christenverfolgung und erließ kurz vor seinem Tod ein Duldungsedikt."
      }
     ],
     "weitere": "Constantius I. (305–306), Severus (306–307), Maxentius (306–312), Licinius (308–324) und Maximinus Daia (310–313) regierten in wechselnden Konstellationen nebeneinander."
    },
    {
     "name": "Konstantinische Dynastie",
     "zeitraum": "306–363",
     "kurz": "Das Christentum wird von der verfolgten zur geförderten Religion, die Hauptstadt wandert an den Bosporus.",
     "herrscher": [
      {
       "name": "Konstantin der Große",
       "regierung": "306–337",
       "kurz": "Beendete die Verfolgung, berief das Konzil von Nicaea und gründete Konstantinopel. Getauft wurde er erst auf dem Sterbebett.",
       "vertiefung": "kaiser-konstantin"
      },
      {
       "name": "Constantius II.",
       "regierung": "337–361",
       "kurz": "Setzte die Christianisierung fort und stützte die arianische Richtung, die das Konzil verworfen hatte."
      },
      {
       "name": "Julian",
       "regierung": "361–363",
       "kurz": "Versuchte als letzter Kaiser, die alten Kulte wiederzubeleben. Fiel nach zwei Jahren im Perserfeldzug."
      }
     ],
     "weitere": "Constantin II. (337–340), Constans (337–350) und der Usurpator Magnentius (350–353) teilten sich zeitweise die Herrschaft."
    },
    {
     "name": "Valentinianische und theodosianische Dynastie",
     "zeitraum": "364–395",
     "kurz": "Das Reich wird dauerhaft in zwei Verwaltungshälften geführt. Nach 395 wächst es nie wieder zusammen.",
     "herrscher": [
      {
       "name": "Valentinian I.",
       "regierung": "364–375",
       "kurz": "Sicherte die Rhein- und Donaugrenze; sein Bruder Valens regierte den Osten."
      },
      {
       "name": "Valens",
       "regierung": "364–378",
       "kurz": "Fiel in der Schlacht von Adrianopel gegen die Goten – die schwerste römische Niederlage seit Jahrhunderten."
      },
      {
       "name": "Theodosius I.",
       "regierung": "379–395",
       "kurz": "Machte das Christentum zur Staatsreligion und teilte das Reich unter seinen Söhnen. Letzter Kaiser über Ost und West zugleich.",
       "vertiefung": "kaiser-theodosius"
      }
     ],
     "weitere": "Gratian (375–383) und Valentinian II. (375–392) regierten im Westen unter wechselndem Einfluss ihrer Heermeister."
    },
    {
     "name": "Weströmisches Reich",
     "zeitraum": "395–476",
     "kurz": "Achtzig Jahre, in denen die Kaiser meist Werkzeuge ihrer germanischen Heermeister sind. Die Provinzen gehen eine nach der anderen verloren.",
     "herrscher": [
      {
       "name": "Honorius",
       "regierung": "395–423",
       "kurz": "Unter ihm plünderten die Westgoten 410 Rom – erstmals seit achthundert Jahren fiel die Stadt an einen Feind."
      },
      {
       "name": "Valentinian III.",
       "regierung": "425–455",
       "kurz": "Ließ seinen fähigsten Feldherrn Aëtius eigenhändig töten und wurde ein Jahr später selbst ermordet."
      },
      {
       "name": "Romulus Augustulus",
       "regierung": "475–476",
       "kurz": "Der letzte weströmische Kaiser, ein Junge, den Odoaker absetzte. Zeitgenossen empfanden das kaum als Epochenbruch.",
       "vertiefung": "ende-westrom"
      }
     ],
     "weitere": "Zwischen 455 und 475 folgten neun kurzlebige Kaiser: Petronius Maximus, Avitus, Majorian, Libius Severus, Anthemius, Olybrius, Glycerius, Julius Nepos – die meisten von Heermeistern eingesetzt und wieder beseitigt."
    }
   ]
  }
 ]
},
{
 "id": "byzanz",
 "reich": "Byzantinisches Reich",
 "untertitel": "Das oströmische Kaisertum von 395 bis 1453",
 "zeitraum": "395–1453",
 "farbe": "#7d5b9a",
 "einleitung": "Byzanz ist ein Name der Neuzeit. Seine Bewohner nannten sich Rhomäer, also Römer, und ihr Staat war die ununterbrochene Fortsetzung des Römischen Reiches – nur griechischsprachig und christlich. Damit bestand das Römische Reich nicht bis 476, sondern bis 1453.",
 "hinweis": "Die Dynastienamen stammen überwiegend aus der modernen Forschung, nicht von den Byzantinern selbst. Mitkaiser und Regentschaften überlappen sich häufig, weshalb Zählungen abweichen: Je nachdem, ob man Mitkaiser und kurzlebige Usurpatoren mitzählt, kommt man auf rund 90 bis über 100 Kaiser. Angegeben sind hier die Alleinherrscher und die wichtigsten Mitkaiser.",
 "quellen": [
  "Encyclopaedia Britannica: Byzantine Empire; List of Byzantine emperors",
  "The Oxford History of Byzantium (Hrsg. Cyril Mango)",
  "Ralph-Johannes Lilie: Byzanz. Geschichte des oströmischen Reiches"
 ],
 "perioden": [
  {
   "name": "Frühbyzantinische Zeit",
   "zeitraum": "395–717",
   "dynastien": [
    {
     "name": "Theodosianische Dynastie im Osten",
     "zeitraum": "395–457",
     "kurz": "Der Osten übersteht, woran der Westen zerbricht: mehr Steuerkraft, kürzere Grenzen und eine uneinnehmbare Hauptstadt.",
     "herrscher": [
      {
       "name": "Arcadius",
       "regierung": "395–408",
       "kurz": "Erster Kaiser des dauerhaft eigenständigen Ostens."
      },
      {
       "name": "Theodosius II.",
       "regierung": "408–450",
       "kurz": "Ließ die Landmauer bauen, die Konstantinopel tausend Jahre schützte, und den Codex Theodosianus zusammenstellen."
      },
      {
       "name": "Marcian",
       "regierung": "450–457",
       "kurz": "Berief das Konzil von Chalkedon, dessen Beschlüsse die Ostkirchen bis heute spalten."
      }
     ]
    },
    {
     "name": "Leonidische Dynastie",
     "zeitraum": "457–518",
     "kurz": "Eine Zeit religiöser Streitigkeiten und wachsender Distanz zum Westen.",
     "herrscher": [
      {
       "name": "Leo I.",
       "regierung": "457–474",
       "kurz": "Ließ sich als erster Kaiser vom Patriarchen krönen – ein folgenreicher Vorgang."
      },
      {
       "name": "Anastasios I.",
       "regierung": "491–518",
       "kurz": "Sanierte die Finanzen so gründlich, dass sein Nachfolger einen gewaltigen Überschuss vorfand."
      }
     ],
     "weitere": "Leo II. (474), Zenon (474–491) und Basiliskos (475–476) regierten dazwischen kurz."
    },
    {
     "name": "Justinianische Dynastie",
     "zeitraum": "518–602",
     "kurz": "Der letzte Versuch, das Römische Reich in seiner alten Ausdehnung wiederherzustellen – erfolgreich und ruinös zugleich.",
     "herrscher": [
      {
       "name": "Justinian I.",
       "regierung": "527–565",
       "kurz": "Ließ das römische Recht sammeln, die Hagia Sophia bauen und Nordafrika und Italien zurückerobern. Die Kriege und die Pest von 541 erschöpften das Reich.",
       "vertiefung": "kaiser-justinian"
      },
      {
       "name": "Justin II.",
       "regierung": "565–578",
       "kurz": "Verlor einen Großteil Italiens an die Langobarden."
      },
      {
       "name": "Maurikios",
       "regierung": "582–602",
       "kurz": "Fähiger Feldherr, dessen Sparmaßnahmen im Heer eine Meuterei auslösten; er wurde mit seinen Söhnen hingerichtet."
      }
     ],
     "weitere": "Justin I. (518–527), Tiberios II. (578–582) und der Usurpator Phokas (602–610) gehören in diese Reihe."
    },
    {
     "name": "Herakleische Dynastie",
     "zeitraum": "610–711",
     "kurz": "Das Reich verliert binnen einer Generation die Hälfte seines Gebiets an die arabische Expansion – und erfindet sich als griechischer Staat neu.",
     "herrscher": [
      {
       "name": "Herakleios",
       "regierung": "610–641",
       "kurz": "Besiegte die Perser endgültig, verlor danach Syrien und Ägypten an die Araber. Ersetzte den lateinischen Kaisertitel durch den griechischen Basileus.",
       "vertiefung": "kaiser-herakleios"
      },
      {
       "name": "Konstans II.",
       "regierung": "641–668",
       "kurz": "Verlegte zeitweise die Residenz nach Syrakus und wurde dort im Bad erschlagen."
      },
      {
       "name": "Konstantin IV.",
       "regierung": "668–685",
       "kurz": "Wehrte die erste arabische Belagerung Konstantinopels ab – erstmals wird das Griechische Feuer erwähnt."
      }
     ],
     "weitere": "Konstantin III. und Heraklonas (641), Justinian II. (685–695 und 705–711), Leontios (695–698), Tiberios III. (698–705) sowie Philippikos, Anastasios II. und Theodosios III. (711–717) folgten in rascher Abfolge."
    }
   ]
  },
  {
   "name": "Mittelbyzantinische Zeit",
   "zeitraum": "717–1204",
   "dynastien": [
    {
     "name": "Isaurische Dynastie",
     "zeitraum": "717–802",
     "kurz": "Die Bilderfrage spaltet das Reich: Zwei Jahrhunderte Streit darüber, ob Christusbilder verehrt werden dürfen.",
     "herrscher": [
      {
       "name": "Leo III.",
       "regierung": "717–741",
       "kurz": "Rettete Konstantinopel vor der zweiten arabischen Belagerung und begann den Bildersturm."
      },
      {
       "name": "Konstantin V.",
       "regierung": "741–775",
       "kurz": "Militärisch erfolgreich, kirchlich verhasst; die späteren Quellen sind ihm gegenüber durchweg feindselig."
      },
      {
       "name": "Eirene",
       "regierung": "797–802",
       "kurz": "Erste Frau, die allein als Basileus regierte. Sie stellte die Bilderverehrung wieder her und ließ ihren Sohn blenden."
      }
     ],
     "weitere": "Leo IV. (775–780) und Nikephoros I. (802–811) schließen die Zeit ab."
    },
    {
     "name": "Amorische Dynastie",
     "zeitraum": "820–867",
     "kurz": "Das Ende des Bilderstreits und der Beginn einer kulturellen Erneuerung.",
     "herrscher": [
      {
       "name": "Theophilos",
       "regierung": "829–842",
       "kurz": "Letzter bilderfeindlicher Kaiser, zugleich Förderer von Kunst und Wissenschaft."
      },
      {
       "name": "Michael III.",
       "regierung": "842–867",
       "kurz": "Unter ihm begann die Slawenmission der Brüder Kyrill und Method, aus der die kyrillische Schrift hervorging."
      }
     ],
     "weitere": "Michael II. (820–829) begründete die Dynastie; die Regentschaft der Kaiserin Theodora (842–856) beendete den Bilderstreit."
    },
    {
     "name": "Makedonische Dynastie",
     "zeitraum": "867–1056",
     "kurz": "Die Blütezeit des Reiches: Rückeroberungen im Osten, wirtschaftlicher Aufschwung und eine Neuordnung des Rechts auf Griechisch.",
     "herrscher": [
      {
       "name": "Basileios I.",
       "regierung": "867–886",
       "kurz": "Aufstieg vom Bauernsohn und Pferdeknecht zum Kaiser – durch zwei Morde."
      },
      {
       "name": "Konstantin VII.",
       "regierung": "913–959",
       "kurz": "Regierte wenig und schrieb viel; seine Werke über Hofzeremoniell und Reichsverwaltung sind Hauptquellen der Byzantinistik."
      },
      {
       "name": "Basileios II.",
       "regierung": "976–1025",
       "kurz": "Unter ihm erreichte das Reich seine größte Ausdehnung seit Justinian. Nach dem Sieg über Bulgarien 1014 trug er den Beinamen Bulgarentöter.",
       "vertiefung": "kaiser-basileios2"
      }
     ],
     "weitere": "Leo VI. (886–912), Romanos I. (920–944), Nikephoros II. Phokas (963–969), Johannes I. Tzimiskes (969–976), Konstantin VIII. (1025–1028), Zoe und Theodora (1028–1056) sowie mehrere Mitkaiser gehören zur Dynastie."
    },
    {
     "name": "Dukas und Komnenen",
     "zeitraum": "1059–1185",
     "kurz": "Nach der Niederlage von Manzikert 1071 geht Kleinasien weitgehend verloren – die Kernlandschaft, aus der Heer und Steuern kamen.",
     "herrscher": [
      {
       "name": "Romanos IV.",
       "regierung": "1068–1071",
       "kurz": "Geriet bei Manzikert in seldschukische Gefangenschaft; die Niederlage war militärisch begrenzt, politisch verheerend."
      },
      {
       "name": "Alexios I. Komnenos",
       "regierung": "1081–1118",
       "kurz": "Stabilisierte das Reich und bat den Westen um Söldner – aus der Bitte wurde der Erste Kreuzzug.",
       "vertiefung": "kreuzzuege"
      },
      {
       "name": "Manuel I.",
       "regierung": "1143–1180",
       "kurz": "Letzter Kaiser mit westlicher Großmachtpolitik; seine Niederlage bei Myriokephalon 1176 beendete die Hoffnung auf Kleinasien."
      }
     ],
     "weitere": "Konstantin X. (1059–1067), Michael VII. (1071–1078), Nikephoros III. (1078–1081), Johannes II. (1118–1143), Alexios II. (1180–1183) und Andronikos I. (1183–1185) vervollständigen die Reihe."
    },
    {
     "name": "Angeloi",
     "zeitraum": "1185–1204",
     "kurz": "Zwanzig Jahre Thronstreitigkeiten, an deren Ende die eigene Hauptstadt von Verbündeten geplündert wird.",
     "herrscher": [
      {
       "name": "Isaak II.",
       "regierung": "1185–1195 und 1203–1204",
       "kurz": "Zweimal Kaiser, dazwischen geblendet; sein Hilfeversuch beim Westen zog den Vierten Kreuzzug nach Konstantinopel."
      },
      {
       "name": "Alexios III.",
       "regierung": "1195–1203",
       "kurz": "Floh bei der Ankunft der Kreuzfahrer mit dem Staatsschatz."
      }
     ],
     "weitere": "Alexios IV. und Alexios V. regierten 1203/04 wenige Monate bis zur Eroberung."
    }
   ]
  },
  {
   "name": "Spätbyzantinische Zeit",
   "zeitraum": "1204–1453",
   "dynastien": [
    {
     "name": "Exilreiche und Rückeroberung",
     "zeitraum": "1204–1261",
     "kurz": "Nach der Plünderung durch die Kreuzfahrer bestehen mehrere griechische Nachfolgestaaten. Nikaia setzt sich durch.",
     "herrscher": [
      {
       "name": "Theodoros I. Laskaris",
       "regierung": "1205–1221",
       "kurz": "Begründete das Kaiserreich Nikaia als Sammelpunkt des byzantinischen Widerstands."
      },
      {
       "name": "Johannes III. Vatatzes",
       "regierung": "1221–1254",
       "kurz": "Baute Nikaia wirtschaftlich und militärisch zur führenden Macht der Region aus."
      },
      {
       "name": "Michael VIII. Palaiologos",
       "regierung": "1259–1282",
       "kurz": "Eroberte Konstantinopel 1261 zurück und begründete die letzte Dynastie."
      }
     ],
     "weitere": "Theodoros II. Laskaris (1254–1258) und Johannes IV. (1258–1261, als Kind geblendet und beseitigt) gehören dazu."
    },
    {
     "name": "Palaiologen",
     "zeitraum": "1261–1453",
     "kurz": "Fast zwei Jahrhunderte Rückzug: Bürgerkriege, Pest und der Aufstieg der Osmanen. Am Ende ist das Reich kaum mehr als die Hauptstadt.",
     "herrscher": [
      {
       "name": "Andronikos II.",
       "regierung": "1282–1328",
       "kurz": "Löste die Flotte aus Geldmangel auf und machte das Reich von fremden Seemächten abhängig."
      },
      {
       "name": "Johannes VI. Kantakuzenos",
       "regierung": "1347–1354",
       "kurz": "Kam durch Bürgerkrieg an die Macht und holte osmanische Truppen als Verbündete nach Europa – ein Schritt mit weitreichenden Folgen."
      },
      {
       "name": "Manuel II.",
       "regierung": "1391–1425",
       "kurz": "Reiste jahrelang durch Westeuropa, um Hilfe zu erbitten – vergeblich."
      },
      {
       "name": "Konstantin XI.",
       "regierung": "1449–1453",
       "kurz": "Der letzte Kaiser fiel bei der Verteidigung der Stadtmauer. Sein Leichnam wurde nie sicher identifiziert.",
       "vertiefung": "fall-konstantinopel"
      }
     ],
     "weitere": "Michael IX. (1294–1320), Andronikos III. (1328–1341), Johannes V. (1341–1391 mit Unterbrechungen), Andronikos IV. (1376–1379) und Johannes VII. (1390) regierten teils gleichzeitig und gegeneinander."
    }
   ]
  }
 ]
},
{
 "id": "persien",
 "reich": "Persien und Iran",
 "untertitel": "Von Kyros bis zum Sturz des Schahs",
 "zeitraum": "559 v. Chr. – 1979",
 "farbe": "#6b4f9a",
 "einleitung": "Über 2.500 Jahre Monarchie, dreimal unterbrochen von Fremdherrschaft und jedes Mal kulturell wiederhergestellt. Griechen, Araber, Türken und Mongolen eroberten das Land – und übernahmen anschließend persische Verwaltung, Sprache und Hofkultur.",
 "hinweis": "Für die Achämeniden und Sasaniden sind die Daten weitgehend gesichert. Bei den Parthern ist die Lage schlecht: Fast alle Nachrichten stammen von römischen Gegnern, mehrere Könige regierten gleichzeitig, und Reihenfolge wie Regierungsjahre sind teils unsicher. Für die islamische Zeit sind hier Dynastien statt einzelner Herrscher aufgeführt, weil sich Gebiete und Ansprüche überlappten.",
 "quellen": [
  "Encyclopaedia Britannica: Ancient Iran; Achaemenian dynasty; Sasanian dynasty",
  "The Cambridge History of Iran, Bände 2–7",
  "Josef Wiesehöfer: Das antike Persien"
 ],
 "perioden": [
  {
   "name": "Altpersische Zeit",
   "zeitraum": "550–330 v. Chr.",
   "dynastien": [
    {
     "name": "Achämeniden",
     "zeitraum": "550–330 v. Chr.",
     "kurz": "Das erste Weltreich der Geschichte, von der Ägäis bis zum Indus. Es verwaltete dutzende Völker über Satrapien, ließ ihnen Sprache und Religion und band sie über ein Straßen- und Botensystem zusammen.",
     "herrscher": [
      {
       "name": "Kyros II.",
       "regierung": "559–530 v. Chr.",
       "kurz": "Eroberte Medien, Lydien und Babylon. Der nach ihm benannte Tonzylinder verkündet die Rückkehr verschleppter Gruppen und wird oft, aber irreführend, als erste Menschenrechtserklärung bezeichnet.",
       "vertiefung": "kyros2"
      },
      {
       "name": "Kambyses II.",
       "regierung": "530–522 v. Chr.",
       "kurz": "Eroberte Ägypten. Herodots Bericht über seine Grausamkeiten gilt heute als von ägyptischen Priestern gefärbt."
      },
      {
       "name": "Dareios I.",
       "regierung": "522–486 v. Chr.",
       "kurz": "Ordnete das Reich in Satrapien, führte eine Reichswährung ein und ließ die Königsstraße bauen. Die Inschrift von Behistun lieferte den Schlüssel zur Keilschrift.",
       "vertiefung": "dareios1"
      },
      {
       "name": "Xerxes I.",
       "regierung": "486–465 v. Chr.",
       "kurz": "Sein Griechenlandfeldzug scheiterte bei Salamis und Plataiai. In Persepolis vollendete er die Bauten seines Vaters."
      },
      {
       "name": "Artaxerxes I.",
       "regierung": "465–424 v. Chr.",
       "kurz": "Lange, vergleichsweise ruhige Regierung; unter ihm endeten die Perserkriege durch Vertrag."
      },
      {
       "name": "Artaxerxes II.",
       "regierung": "404–358 v. Chr.",
       "kurz": "Verlor Ägypten, hielt aber das Reich zusammen. In seiner Zeit spielt der Zug der Zehntausend."
      },
      {
       "name": "Dareios III.",
       "regierung": "336–330 v. Chr.",
       "kurz": "Verlor bei Issos und Gaugamela gegen Alexander und wurde auf der Flucht von einem eigenen Satrapen ermordet."
      }
     ],
     "weitere": "Weitere: Kyros I. und Kambyses I. als Kleinkönige vor der Reichsgründung, Bardiya/Smerdis (522), Dareios II. (424–404) und Artaxerxes III. (358–338), unter dem Ägypten zurückerobert wurde, sowie Artaxerxes IV. (338–336)."
    }
   ]
  },
  {
   "name": "Hellenistische und parthische Zeit",
   "zeitraum": "330 v. Chr. – 224 n. Chr.",
   "dynastien": [
    {
     "name": "Seleukiden in Iran",
     "zeitraum": "312–141 v. Chr.",
     "kurz": "Nach Alexanders Tod fiel der Osten an seinen General Seleukos. Griechische Städte und Verwaltung überlagerten die iranische Welt, ohne sie zu ersetzen.",
     "herrscher": [
      {
       "name": "Seleukos I.",
       "regierung": "312–281 v. Chr.",
       "kurz": "Begründete das Reich, tauschte seine indischen Gebiete gegen 500 Kriegselefanten und gründete Seleukia am Tigris."
      },
      {
       "name": "Antiochos III.",
       "regierung": "222–187 v. Chr.",
       "kurz": "Stellte die Reichsgrenzen kurzzeitig wieder her und scheiterte dann an Rom."
      }
     ],
     "weitere": "Rund zwanzig weitere Seleukidenherrscher regierten bis 141 v. Chr. über iranisches Gebiet, danach nur noch über Syrien."
    },
    {
     "name": "Arsakiden (Parther)",
     "zeitraum": "247 v. Chr. – 224 n. Chr.",
     "kurz": "Ein Reiternomadenvolk übernahm den iranischen Raum und hielt Rom fast drei Jahrhunderte in Schach. Die Quellenlage ist dünn: Fast alles Überlieferte stammt von römischen Gegnern.",
     "herrscher": [
      {
       "name": "Arsakes I.",
       "regierung": "ab ca. 247 v. Chr.",
       "kurz": "Namensgeber der Dynastie; alle Nachfolger führten den Titel Arsakes zusätzlich zum eigenen Namen."
      },
      {
       "name": "Mithridates I.",
       "regierung": "171–132 v. Chr.",
       "kurz": "Machte aus einem Randreich eine Großmacht, indem er Medien und Mesopotamien nahm."
      },
      {
       "name": "Orodes II.",
       "regierung": "57–37 v. Chr.",
       "kurz": "Unter ihm vernichteten die Parther bei Carrhae ein römisches Heer und töteten Crassus."
      },
      {
       "name": "Artabanos IV.",
       "regierung": "213–224",
       "kurz": "Letzter Partherkönig, unterlag dem sasanidischen Aufsteiger Ardaschir."
      }
     ],
     "weitere": "Über zwanzig weitere Könige regierten dazwischen, oft mehrere zugleich; die Reihenfolge ist wegen der schlechten Quellenlage teils unsicher."
    }
   ]
  },
  {
   "name": "Sasanidenreich",
   "zeitraum": "224–651",
   "dynastien": [
    {
     "name": "Sasaniden",
     "zeitraum": "224–651",
     "kurz": "Das letzte vorislamische Großreich Irans: zentralisiert, mit dem Zoroastrismus als Staatsreligion und über vier Jahrhunderte Roms ebenbürtiger Gegner.",
     "herrscher": [
      {
       "name": "Ardaschir I.",
       "regierung": "224–242",
       "kurz": "Stürzte die Parther und begründete die Dynastie; er berief sich auf die Achämeniden als Vorbild."
      },
      {
       "name": "Schapur I.",
       "regierung": "240–270",
       "kurz": "Besiegte drei römische Kaiser und nahm Valerian gefangen – der einzige römische Kaiser, der je in Gefangenschaft geriet. Ließ den Triumph in Fels hauen.",
       "vertiefung": "schapur1"
      },
      {
       "name": "Schapur II.",
       "regierung": "309–379",
       "kurz": "Wurde der Überlieferung nach schon als Ungeborener zum König ausgerufen und regierte siebzig Jahre."
      },
      {
       "name": "Chosrau I.",
       "regierung": "531–579",
       "kurz": "Reformierte Steuer und Heer, förderte Wissenschaft und Übersetzung. Griechische Philosophen fanden nach der Schließung der Athener Akademie an seinem Hof Aufnahme.",
       "vertiefung": "chosrau1"
      },
      {
       "name": "Chosrau II.",
       "regierung": "590–628",
       "kurz": "Eroberte Syrien, Ägypten und Jerusalem, verlor alles wieder an Herakleios und wurde vom eigenen Sohn gestürzt."
      },
      {
       "name": "Yazdegerd III.",
       "regierung": "632–651",
       "kurz": "Letzter Sasanidenkönig; nach der Niederlage gegen die arabischen Heere auf der Flucht ermordet."
      }
     ],
     "weitere": "Zwischen diesen regierten rund zwei Dutzend weitere Könige, darunter Bahram V. (420–438), Kavadh I. (488–531) und in den Wirren nach 628 mehrere Herrscher binnen weniger Jahre, unter ihnen die Königinnen Boran und Azarmidocht."
    }
   ]
  },
  {
   "name": "Iranische Dynastien der islamischen Zeit",
   "zeitraum": "651–1501",
   "dynastien": [
    {
     "name": "Frühe iranische Dynastien",
     "zeitraum": "821–1055",
     "kurz": "Nach der arabischen Eroberung entstanden im Osten Irans halbautonome Reiche, die das Persische als Literatursprache wiederbelebten.",
     "herrscher": [
      {
       "name": "Samaniden",
       "regierung": "819–999",
       "kurz": "Unter ihnen wurde Buchara ein Bildungszentrum; hier entstand die neupersische Literatursprache, hier wirkte Ibn Sina."
      },
      {
       "name": "Buyiden",
       "regierung": "934–1062",
       "kurz": "Schiitische Herrscher, die Bagdad beherrschten und den abbasidischen Kalifen zur Symbolfigur machten."
      }
     ],
     "weitere": "Dazu Tahiriden (821–873), Saffariden (861–1003) und Ziyariden (931–1090) in wechselnden Gebieten."
    },
    {
     "name": "Türkische und mongolische Herrschaft",
     "zeitraum": "1037–1501",
     "kurz": "Fremde Dynastien regieren Iran, übernehmen aber persische Verwaltung, Sprache und Hofkultur – die Eroberer werden kulturell erobert.",
     "herrscher": [
      {
       "name": "Seldschuken",
       "regierung": "1037–1194",
       "kurz": "Alp Arslan siegte 1071 bei Manzikert; sein Wesir Nizam al-Mulk schrieb ein Standardwerk der Staatskunst und gründete Hochschulen."
      },
      {
       "name": "Ilchane",
       "regierung": "1256–1335",
       "kurz": "Hülegü zerstörte 1258 Bagdad; sein Nachfahre Ghazan trat zum Islam über und förderte Wissenschaft und Geschichtsschreibung."
      },
      {
       "name": "Timuriden",
       "regierung": "1370–1507",
       "kurz": "Timur machte Samarkand zur Hauptstadt; sein Enkel Ulug Beg baute eine Sternwarte und erstellte den genauesten Sternkatalog seit Ptolemäus."
      }
     ],
     "weitere": "Dazwischen Choresm-Schahs (1077–1231), Muzaffariden und Dschalayiriden sowie die turkmenischen Verbände Qara Qoyunlu und Aq Qoyunlu (1375–1508)."
    }
   ]
  },
  {
   "name": "Neuzeitliches Iran",
   "zeitraum": "1501–1979",
   "dynastien": [
    {
     "name": "Safawiden",
     "zeitraum": "1501–1736",
     "kurz": "Die Dynastie, die Iran zum schiitischen Staat machte – eine Entscheidung, die die Region bis heute prägt.",
     "herrscher": [
      {
       "name": "Ismail I.",
       "regierung": "1501–1524",
       "kurz": "Erklärte mit fünfzehn Jahren die Zwölferschia zur Staatsreligion und setzte sie gegen Widerstand durch. Seine Niederlage gegen die Osmanen 1514 begrenzte das Reich nach Westen.",
       "vertiefung": "ismail1"
      },
      {
       "name": "Abbas I.",
       "regierung": "1588–1629",
       "kurz": "Machte Isfahan zu einer der prächtigsten Städte der Welt, öffnete das Land europäischem Handel und zentralisierte hart."
      },
      {
       "name": "Sultan Husayn",
       "regierung": "1694–1722",
       "kurz": "Unter ihm brach das Reich nach einer afghanischen Invasion zusammen."
      }
     ],
     "weitere": "Weitere: Tahmasp I. (1524–1576), Ismail II., Mohammad Chodabande, Safi I., Abbas II., Suleiman I. sowie zwei Gegenkönige in den Wirren nach 1722."
    },
    {
     "name": "Afschariden, Zand und Kadscharen",
     "zeitraum": "1736–1925",
     "kurz": "Zwei Jahrhunderte zwischen militärischer Erneuerung und wachsendem Druck durch Russland und Großbritannien.",
     "herrscher": [
      {
       "name": "Nader Schah",
       "regierung": "1736–1747",
       "kurz": "Feldherr aus einfachen Verhältnissen, eroberte Delhi und nahm den Pfauenthron mit. Wurde von eigenen Offizieren ermordet."
      },
      {
       "name": "Karim Khan Zand",
       "regierung": "1751–1779",
       "kurz": "Nannte sich bescheiden Anwalt des Volkes statt Schah; seine Regierung gilt als eine der friedlichsten der iranischen Neuzeit."
      },
      {
       "name": "Nasir ad-Din Schah",
       "regierung": "1848–1896",
       "kurz": "Regierte fast fünfzig Jahre, führte Telegrafen und Fotografie ein und musste eine Tabakkonzession an Briten nach landesweitem Boykott zurücknehmen – der erste erfolgreiche Massenprotest Irans."
      }
     ],
     "weitere": "Weitere: Agha Mohammad Khan (1789–1797), Fath Ali Schah (1797–1834), Mohammad Schah (1834–1848), Mozaffar ad-Din (1896–1907), unter dem die Verfassungsrevolution begann, Mohammad Ali (1907–1909) und Ahmad Schah (1909–1925)."
    },
    {
     "name": "Pahlavi",
     "zeitraum": "1925–1979",
     "kurz": "Zwei Herrscher in gut fünfzig Jahren, beide auf Modernisierung von oben ausgerichtet, beide mit fremder Hilfe an oder auf dem Thron gehalten.",
     "herrscher": [
      {
       "name": "Reza Schah",
       "regierung": "1925–1941",
       "kurz": "Offizier, der sich zum Schah erhob. Modernisierte Recht, Bildung und Infrastruktur, verbot den Schleier und unterdrückte jede Opposition. Wurde 1941 von Briten und Sowjets zur Abdankung gezwungen."
      },
      {
       "name": "Mohammad Reza Schah",
       "regierung": "1941–1979",
       "kurz": "Nach dem von CIA und britischem Geheimdienst gestützten Sturz Mossadeghs 1953 regierte er zunehmend autoritär. Die Revolution von 1979 beendete 2.500 Jahre Monarchie in Iran.",
       "vertiefung": "sturz-schah"
      }
     ]
    }
   ]
  }
 ]
},
{
 "id": "japan",
 "reich": "Japan",
 "untertitel": "Tennō und Shogune von der Sage bis heute",
 "zeitraum": "traditionell ab 660 v. Chr.",
 "farbe": "#a03a5a",
 "einleitung": "Japan hat die längste durchgehend überlieferte Herrscherreihe der Welt – und zugleich die ungewöhnlichste: Über den größten Teil der Geschichte regierte der Tennō nicht, sondern legitimierte den, der regierte. Deshalb stehen hier Tennō und Shogune nebeneinander.",
 "hinweis": "Die traditionelle Zählung von 126 Tennō beginnt 660 v. Chr. mit einer Sagengestalt. Die Tennō 2 bis 9 gelten in der Forschung als nachträglich eingefügt; belastbar wird die Überlieferung erst ab dem 6. Jahrhundert. Regierungsjahre bedeuten außerdem selten tatsächliche Macht: In der Heian-Zeit regierten die Fujiwara, in der Kamakura-Zeit die Hōjō, danach die Shogune. Genannt sind hier die Herrscher, deren Wirken erkennbar ist – die vollständige Reihe umfasst 126 Tennō und 47 Shogune dreier Shogunate.",
 "quellen": [
  "Encyclopaedia Britannica: Japan, history; List of emperors of Japan",
  "The Cambridge History of Japan, Bände 1–6",
  "Kojiki und Nihon Shoki als antike, legitimatorisch gefärbte Quellen"
 ],
 "perioden": [
  {
   "name": "Frühzeit und Legende",
   "zeitraum": "660 v. Chr. – 592 n. Chr.",
   "dynastien": [
    {
     "name": "Legendäre Tennō",
     "zeitraum": "660 v. Chr. – 5. Jh.",
     "kurz": "Die Reichsgründung wird traditionell auf 660 v. Chr. datiert. Die ersten Tennō sind Sagengestalten; die Chroniken Kojiki und Nihon Shoki entstanden erst im 8. Jahrhundert und dienten der Legitimation.",
     "herrscher": [
      {
       "name": "Jimmu",
       "regierung": "traditionell 660–585 v. Chr.",
       "kurz": "Erster Tennō der Überlieferung, Nachkomme der Sonnengöttin Amaterasu. Historisch nicht fassbar."
      },
      {
       "name": "Ōjin und Nintoku",
       "regierung": "4./5. Jahrhundert",
       "kurz": "Erste Herrscher, denen sich archäologisch etwas zuordnen lässt – die riesigen Schlüssellochgräber der Kofun-Zeit."
      }
     ],
     "weitere": "Die Tennō 2 bis 9 gelten in der Forschung als nachträglich eingefügt, um die Reihe zu verlängern. Ab Kinmei (539–571) wird die Überlieferung belastbar."
    }
   ]
  },
  {
   "name": "Asuka- und Nara-Zeit",
   "zeitraum": "592–794",
   "dynastien": [
    {
     "name": "Asuka-Zeit",
     "zeitraum": "592–710",
     "kurz": "Buddhismus, chinesische Schrift und ein nach chinesischem Vorbild geordneter Staat kommen ins Land.",
     "herrscher": [
      {
       "name": "Suiko",
       "regierung": "592–628",
       "kurz": "Erste Frau auf dem Thron, deren Herrschaft gesichert ist. Unter ihr wirkte der Regent Shōtoku, dem die Siebzehn-Artikel-Verfassung zugeschrieben wird.",
       "vertiefung": "japan-suiko"
      },
      {
       "name": "Tenji",
       "regierung": "661–672",
       "kurz": "Trieb nach der Niederlage gegen China die Taika-Reformen voran, die Land und Steuern neu ordneten."
      },
      {
       "name": "Temmu",
       "regierung": "673–686",
       "kurz": "Ließ die Reichschroniken beginnen und führte den Titel Tennō ein."
      }
     ],
     "weitere": "Weitere: Jomei, Kōgyoku/Saimei (zweimal regierend), Kōtoku, Jitō, Mommu und Gemmei."
    },
    {
     "name": "Nara-Zeit",
     "zeitraum": "710–794",
     "kurz": "Erste dauerhafte Hauptstadt in Nara. Der Buddhismus wird Staatsreligion – und die Klöster so mächtig, dass der Hof am Ende vor ihnen flieht.",
     "herrscher": [
      {
       "name": "Shōmu",
       "regierung": "724–749",
       "kurz": "Ließ den Großen Buddha von Nara gießen, für den fast der gesamte Kupfervorrat des Landes verbraucht wurde."
      },
      {
       "name": "Kōken/Shōtoku",
       "regierung": "749–758 und 764–770",
       "kurz": "Regierte zweimal; ihre Nähe zum Mönch Dōkyō führte fast zu einem buddhistischen Kaiser und danach zu einem faktischen Ausschluss von Frauen vom Thron."
      }
     ],
     "weitere": "Weitere: Gemmei, Genshō, Junnin, Kōnin."
    }
   ]
  },
  {
   "name": "Heian-Zeit",
   "zeitraum": "794–1185",
   "dynastien": [
    {
     "name": "Heian-Tennō und Fujiwara-Regenten",
     "zeitraum": "794–1185",
     "kurz": "Vier Jahrhunderte Hofkultur. Die tatsächliche Macht liegt bei der Familie Fujiwara, die als Regenten regiert und ihre Töchter mit den Tennō verheiratet – der Tennō herrscht, aber regiert nicht.",
     "herrscher": [
      {
       "name": "Kanmu",
       "regierung": "781–806",
       "kurz": "Verlegte die Hauptstadt nach Heian-kyō, dem heutigen Kyōto, um dem Einfluss der Klöster von Nara zu entkommen.",
       "vertiefung": "japan-kanmu"
      },
      {
       "name": "Fujiwara no Michinaga",
       "regierung": "als Regent 995–1027",
       "kurz": "Kein Tennō, aber der mächtigste Mann Japans. In seiner Zeit schrieb Murasaki Shikibu die Geschichte vom Prinzen Genji."
      },
      {
       "name": "Shirakawa",
       "regierung": "1073–1087, danach als Klosterkaiser",
       "kurz": "Begründete die Praxis, abzudanken und aus dem Kloster weiterzuregieren – ein System, in dem der amtierende Tennō noch weniger zu sagen hatte."
      },
      {
       "name": "Antoku",
       "regierung": "1180–1185",
       "kurz": "Ertrank als Sechsjähriger in der Seeschlacht von Dan-no-ura, mit der die Kriegerherrschaft begann."
      }
     ],
     "weitere": "Rund dreißig weitere Tennō regierten in dieser Zeit, meist als Kinder eingesetzt und früh zur Abdankung gebracht."
    }
   ]
  },
  {
   "name": "Zeit der Kriegerherrschaft",
   "zeitraum": "1185–1868",
   "dynastien": [
    {
     "name": "Kamakura-Shogunat",
     "zeitraum": "1185–1333",
     "kurz": "Erstmals regiert ein Krieger statt des Hofes. Der Tennō bleibt in Kyōto und behält die religiöse Würde, die Macht liegt in Kamakura – und bald nicht einmal beim Shogun, sondern bei dessen Regenten aus der Familie Hōjō.",
     "herrscher": [
      {
       "name": "Minamoto no Yoritomo",
       "regierung": "Shogun 1192–1199",
       "kurz": "Begründete das Shogunat. Nach dem Tod seiner Söhne ging die Macht an die Familie seiner Frau über."
      },
      {
       "name": "Hōjō Tokimune",
       "regierung": "Regent 1268–1284",
       "kurz": "Wehrte die beiden mongolischen Invasionen von 1274 und 1281 ab; die Stürme, die die Flotten zerstörten, gingen als Kamikaze in die Überlieferung ein."
      },
      {
       "name": "Go-Daigo",
       "regierung": "1318–1339",
       "kurz": "Versuchte, die Macht an den Thron zurückzuholen. Seine Kenmu-Restauration hielt drei Jahre und führte zur Spaltung in einen Nord- und einen Südhof.",
       "vertiefung": "japan-godaigo"
      }
     ],
     "weitere": "Neun Shogune und sechzehn Hōjō-Regenten folgten aufeinander; die meisten Shogune waren Kinder aus dem Hochadel ohne eigene Macht."
    },
    {
     "name": "Muromachi-Shogunat und Reichseinigung",
     "zeitraum": "1336–1603",
     "kurz": "Die Ashikaga regieren aus Kyōto, verlieren aber die Kontrolle über die Provinzen. Nach 1467 zerfällt das Land in ein Jahrhundert Bürgerkrieg, aus dem drei Männer die Einigung erzwingen.",
     "herrscher": [
      {
       "name": "Ashikaga Yoshimitsu",
       "regierung": "Shogun 1368–1394",
       "kurz": "Höhepunkt der Ashikaga-Macht; ließ den Goldenen Pavillon bauen und nahm vom chinesischen Kaiser den Titel König von Japan an."
      },
      {
       "name": "Oda Nobunaga",
       "regierung": "1568–1582",
       "kurz": "Brach die Macht der Klöster und setzte als Erster Feuerwaffen in großem Stil ein. Wurde von einem eigenen General zum Selbstmord gezwungen."
      },
      {
       "name": "Toyotomi Hideyoshi",
       "regierung": "1585–1598",
       "kurz": "Aus bäuerlicher Herkunft aufgestiegen, vollendete die Einigung, trennte Krieger und Bauern und scheiterte an der Invasion Koreas."
      },
      {
       "name": "Tokugawa Ieyasu",
       "regierung": "Shogun 1603–1605",
       "kurz": "Setzte sich 1600 bei Sekigahara durch und begründete ein Shogunat, das zweieinhalb Jahrhunderte hielt.",
       "vertiefung": "japan-ieyasu"
      }
     ],
     "weitere": "Fünfzehn Ashikaga-Shogune regierten zwischen 1338 und 1573, die späteren nur noch dem Namen nach."
    },
    {
     "name": "Tokugawa-Shogunat (Edo-Zeit)",
     "zeitraum": "1603–1868",
     "kurz": "Zweieinhalb Jahrhunderte Frieden bei weitgehender Abschottung. Der Tennō in Kyōto ist ohne politische Macht, aber unangetastet – gerade das macht ihn später zur Alternative.",
     "herrscher": [
      {
       "name": "Tokugawa Iemitsu",
       "regierung": "Shogun 1623–1651",
       "kurz": "Vollendete die Abschließung: Ausreiseverbot, Christenverbot, Handel nur noch über Nagasaki mit Niederländern und Chinesen."
      },
      {
       "name": "Tokugawa Yoshimune",
       "regierung": "Shogun 1716–1745",
       "kurz": "Reformierte Finanzen und Recht und lockerte das Verbot westlicher Bücher – der Beginn der Hollandkunde."
      },
      {
       "name": "Tokugawa Yoshinobu",
       "regierung": "Shogun 1866–1867",
       "kurz": "Letzter Shogun; gab die Macht an den Tennō zurück, um einen Bürgerkrieg zu vermeiden – der trotzdem kam."
      }
     ],
     "weitere": "Fünfzehn Tokugawa-Shogune regierten zwischen 1603 und 1868. Die Tennō dieser Zeit – von Go-Yōzei bis Kōmei – hatten keinerlei politische Macht."
    }
   ]
  },
  {
   "name": "Modernes Japan",
   "zeitraum": "1868–heute",
   "dynastien": [
    {
     "name": "Tennō der Moderne",
     "zeitraum": "1868–heute",
     "kurz": "Mit der Meiji-Restauration kehrt der Tennō ins Zentrum zurück – zunächst als Symbol der Modernisierung, dann als Legitimation des Krieges, schließlich als Symbol des Staates ohne Regierungsgewalt.",
     "herrscher": [
      {
       "name": "Meiji",
       "regierung": "1867–1912",
       "kurz": "In seinem Namen wurde Japan binnen einer Generation vom Feudalstaat zur Industriemacht umgebaut.",
       "vertiefung": "meiji"
      },
      {
       "name": "Taishō",
       "regierung": "1912–1926",
       "kurz": "Gesundheitlich schwer beeinträchtigt; in seiner Zeit gewann das Parlament vorübergehend an Gewicht."
      },
      {
       "name": "Shōwa (Hirohito)",
       "regierung": "1926–1989",
       "kurz": "Längste Regierung eines japanischen Tennō. Seine Rolle im Krieg ist bis heute umstritten; 1946 erklärte er öffentlich, kein Gott zu sein.",
       "vertiefung": "japan-showa"
      },
      {
       "name": "Heisei (Akihito)",
       "regierung": "1989–2019",
       "kurz": "Bemühte sich um Aussöhnung mit den Nachbarländern und dankte als erster Tennō seit 200 Jahren zu Lebzeiten ab."
      },
      {
       "name": "Reiwa (Naruhito)",
       "regierung": "seit 2019",
       "kurz": "126. Tennō der traditionellen Zählung."
      }
     ]
    }
   ]
  }
 ]
}
];

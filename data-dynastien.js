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
}
];

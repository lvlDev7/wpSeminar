// --- COMPONENT DATABASE (Employee Training Focus) ---
const components = [
  {
    id: "schlammabscheider",
    name: "Magnetit- & Schlammabscheider",
    category: "hydraulik",
    images: ["Magnetit und Schlammabscheider.jpg", "Magnetit und Schlammabscheider funktionsprinzip.jpg"],
    imageLabels: ["Reales Bauteil", "Funktionsprinzip"],
    desc: "Der Magnetit- und Schlammabscheider schützt das Herzstück der Kundenanlage vor Schwebeteilchen, Rost und metallischen Ablagerungen (Magnetit). Dies ist für uns ein Pflichtbauteil, um Verstopfungen des empfindlichen Plattenwärmetauschers im Außengerät zu verhindern.",
    bullets: [
      "<strong>Funktionsweise:</strong> Das Heizungswasser beruhigt sich im Gehäuse, wodurch schwere Schmutzpartikel absinken. Ein abziehbarer Neodym-Magnet hält metallischen Abrieb (Magnetit) fest.",
      "<strong>Einbauposition:</strong> Zwingend im Rücklauf des Heizungskreises, und zwar unmittelbar vor dem Austritt aus dem Haus zum Außengerät hin.",
      "<strong>Wartungsstandard:</strong> Bei der jährlichen Wartung zieht der Monteur den Magnetring nach unten ab und spült die Schmutzkammer über den integrierten Ablasshahn."
    ],
    tags: ["Schutz", "Rücklauf", "Wartung", "Magnetit"]
  },
  {
    id: "hydroeinheit",
    name: "Innengerät (Hydroeinheit) & Verschraubungen",
    category: "speicher",
    images: ["Hydroeineit.webp", "Verschraubung.jpg"],
    imageLabels: ["Hydroeinheit", "Verschraubung"],
    desc: "Die Hydroeinheit ist die zentrale hydraulische Schnittstelle im Haus. Sie beinhaltet das Umschaltventil für Warmwasser, den Zusatzheizstab und die Steuerung. Für den Anschluss nutzen wir ausschließlich flachdichtende Messing-Verschraubungen.",
    bullets: [
      "<strong>Montagevorteil:</strong> Flachdichtende Verbindungen ermöglichen es uns, die Hydroeinheit bei Servicearbeiten oder Gerätetausch schnell und ohne großen Demontageaufwand vom Rohrnetz zu trennen.",
      "<strong>Platzersparnis:</strong> Die Kombination aus kompakten Verschraubungen und flexiblen Anschlüssen erlaubt uns eine saubere Montage selbst unter engsten Verhältnissen.",
      "<strong>Vorgabe:</strong> Gewinde flachdichtender Verschraubungen dürfen niemals gehanft werden. Wir nutzen ausschließlich die vorgeschriebenen EPDM- oder Klingerit-Dichtungen."
    ],
    tags: ["Innengerät", "Messing", "Montage", "Dichtung"]
  },
  {
    id: "kfe-haehne",
    name: "KFE-Hähne & Gewinde T-Stücke",
    category: "anschluss",
    images: ["KfeHahnHeizung.jpg", "KFE Hahn für TW.jpg", "reduzier t stück.jpg"],
    imageLabels: ["KFE-Hahn Heizung", "KFE-Hahn Trinkwasser", "T-Stück Gewinde"],
    desc: "Kessel-Füll- und Entleerehähne (KFE) werden über Gewinde-T-Stücke in die Rohrleitungen eingebunden. Sie ermöglichen uns das Befüllen, Entlüften sowie Entleeren der einzelnen Abschnitte.",
    bullets: [
      "<strong>Trinkwasserschutz:</strong> Für Trinkwasserleitungen (Warmwasserspeicher-Zulauf) setzen wir zwingend KFE-Hähne mit DVGW-Zulassung ein (bleifreies Messing, spezielle Dichtungswerkstoffe).",
      "<strong>Gewinde-T-Stücke:</strong> Ermöglichen den schnellen Abzweig von Füll- und Entleerstationen direkt aus der Hauptleitung.",
      "<strong>Vorgabe:</strong> KFE-Hähne müssen an allen hydraulischen Tiefpunkten der Rohrleitung platziert werden, damit das System im Frost- oder Servicefall vollständig entleert werden kann."
    ],
    tags: ["Befüllen", "Trinkwasser", "Fitting", "Gewinde"]
  },
  {
    id: "frostschutzventil",
    name: "Frostschutzventil",
    category: "sicherheit",
    images: ["Frostschutzventil.jpg"],
    imageLabels: ["Frostschutzventil"],
    desc: "Ein rein mechanisch arbeitendes Sicherheitsventil. Es schützt die wasserführenden Leitungen des Monoblocks im Außenbereich bei Stromausfall oder Pumpenstopp im Winter vor dem Einfrieren.",
    bullets: [
      "<strong>Funktionsprinzip:</strong> Sinkt die Wassertemperatur im Rohr auf 3°C, öffnet ein Thermoelement das Ventil und lässt Wasser tröpfchenweise ab. Bei 4°C schließt es wieder.",
      "<strong>Betriebssicherheit:</strong> Funktioniert vollkommen autonom und ohne jeglichen Stromanschluss.",
      "<strong>Montageregel:</strong> Es müssen immer zwei Ventile (Vorlauf und Rücklauf) an der tiefsten Stelle der Außenleitung im Freien installiert werden. Freier Ablauf des Wassers ist zu gewährleisten."
    ],
    tags: ["Frostschutz", "Sicherheit", "Außenbereich", "Stromlos"]
  },
  {
    id: "kesselsicherheitsgruppe",
    name: "Kesselsicherheitsgruppe",
    category: "sicherheit",
    images: ["Kesselsicherheitsgruppe.jpg"],
    imageLabels: ["Sicherheitsgruppe"],
    desc: "Diese vormontierte Baugruppe schützt den Heizkreis vor unzulässigem Überdruck und sorgt für eine ständige Entlüftung am Wärmeerzeuger.",
    bullets: [
      "<strong>Ausstattung:</strong> Beinhaltet ein Membran-Sicherheitsventil (standardmäßig 3 Bar im Heizkreis), ein Manometer zur Druckkontrolle und einen automatischen Schnellentlüfter.",
      "<strong>Auslösung & Abwasser:</strong> Steigt der Druck durch Ausdehnung über 3 Bar, bläst das Ventil überschüssiges Wasser kontrolliert ab. Die Ausblaseleitung muss zwingend sicher und tropffrei über einen Trichter an das Abwassernetz angebunden werden.",
      "<strong>Montageort:</strong> Wird stets im Heizungsvorlauf, nah am Außengerät bzw. dem Kesselaustritt, installiert."
    ],
    tags: ["Sicherheit", "Druck", "Entlüftung", "Vorlauf"]
  },
  {
    id: "kappenventil",
    name: "Kappenventil",
    category: "sicherheit",
    images: ["Kappenventil.jpg"],
    imageLabels: ["Kappenventil"],
    desc: "Ein spezielles Absperrventil für Membranausdehnungsgefäße (MAG). Es schützt die Anlage vor Fehlbedienungen und erleichtert die jährliche Wartung.",
    bullets: [
      "<strong>Unbeabsichtigtes Schließen:</strong> Der Stellkopf ist mit einer Kappe und Plombe gesichert, damit das Gefäß nicht versehentlich im Betrieb vom System getrennt wird.",
      "<strong>Wartungsvorteil:</strong> Ermöglicht uns das Absperren und Entleeren des MAGs über die integrierte Entwässerung, um den Gasvordruck im drucklosen Zustand zu messen.",
      "<strong>Einbaupflicht:</strong> Nach DIN EN 12828 ist vor jedem Ausdehnungsgefäß in geschlossenen Heizungsanlagen ein Kappenventil einzubauen."
    ],
    tags: ["Sicherheit", "MAG", "Wartung", "Vorschrift"]
  },
  {
    id: "mag",
    name: "Membranausdehnungsgefäß (MAG)",
    category: "sicherheit",
    images: ["MAG.jpg"],
    imageLabels: ["MAG"],
    desc: "Das MAG kompensiert die temperaturabhängige Volumenänderung des Heizungswassers und stellt sicher, dass der Systemdruck im Haus konstant bleibt.",
    bullets: [
      "<strong>Aufbau:</strong> Eine flexible Gummimembran trennt den wasserführenden Raum von einem Gaspolster (Stickstoff), welches als kompressibler Puffer wirkt.",
      "<strong>Wichtigkeit:</strong> Ein defektes oder falsch eingestelltes MAG führt zu starken Druckschwankungen, was den häufigen Auswurf des Sicherheitsventils zur Folge hat.",
      "<strong>Berechnung:</strong> Die Dimensionierung muss passend zum Gesamtvolumen der Anlage und der statischen Höhe des Hauses berechnet werden."
    ],
    tags: ["Druckausgleich", "Stabilität", "Sicherheit", "Stickstoff"]
  },
  {
    id: "sicherheitsgruppe-kaltwasser",
    name: "Sicherheitsgruppe Kaltwasser",
    category: "sicherheit",
    images: ["Sicherheitsgruppe Kaltwasser.jpg"],
    imageLabels: ["Sicherheitsgruppe Kaltwasser"],
    desc: "Sichert den geschlossenen Trinkwarmwasserspeicher ab. Sie verhindert den Rückfluss von erwärmtem Wasser ins Kaltwassernetz und schützt vor Überdruck beim Aufheizvorgang.",
    bullets: [
      "<strong>Funktionen:</strong> Beinhaltet einen Rückflussverhinderer, Absperrung, Prüfanschluss und ein Trinkwasser-Sicherheitsventil (je nach Speicherauslegung 6, 8 oder 10 Bar).",
      "<strong>Abtropfen & Abwasser:</strong> Während des Aufheizens tritt systembedingt Wasser am Sicherheitsventil aus. Dieses muss zwingend über einen Trichter sicher an das Abwassernetz angebunden werden.",
      "<strong>Einbauregel & Niveau:</strong> Die Montage erfolgt zwingend direkt im Kaltwasserzulauf des Warmwasserspeichers. Nach Verlegerichtlinie sollte die Sicherheitsgruppe über dem Niveau des Warmwasserspeichers platziert werden."
    ],
    tags: ["Trinkwasser", "Speicherschutz", "Überdruck", "Kaltwasser"]
  },
  {
    id: "pufferspeicher",
    name: "Pufferspeicher",
    category: "speicher",
    images: ["Pufferspeicher.jpg"],
    imageLabels: ["Pufferspeicher"],
    desc: "Der Pufferspeicher dient der hydraulischen Optimierung. Er vergrößert das Wasservolumen im Heizkreis, verringert Taktzeiten der Wärmepumpe und sichert die Abtauenergie.",
    bullets: [
      "<strong>Verdichterschutz:</strong> Durch das zusätzliche Volumen läuft die Wärmepumpe länger am Stück durch, anstatt taktend ein- und auszuschalten. Das schont den Verdichter.",
      "<strong>Energiequelle zum Abtauen:</strong> Bei der zyklischen Reifbildung am Außenverdampfer kehrt die Wärmepumpe den Kältekreis um. Die benötigte Energie wird dem Pufferspeicher entzogen, ohne dass die Wohnräume abkühlen.",
      "<strong>Vorgabe:</strong> Wir binden Pufferspeicher je nach Systemauslegung als hocheffiziente Reihenspeicher im Rücklauf ein."
    ],
    tags: ["Speicher", "Effizienz", "Abtauung", "Laufzeit"]
  },
  {
    id: "warmwasserspeicher",
    name: "Warmwasserspeicher (Trinkwasser)",
    category: "speicher",
    images: ["Warmwasserspeicher.jpg"],
    imageLabels: ["Warmwasserspeicher"],
    desc: "Speichert das erwärmte Dusch- und Brauchwasser. Aufgrund der geringeren Vorlauftemperaturen von Wärmepumpen unterscheidet sich dieser Speicher grundlegend von Standard-Speichern.",
    bullets: [
      "<strong>Wärmetauscherfläche:</strong> Der interne Wärmetauscher (Glattrohrregister) muss extra groß dimensioniert sein. Richtwert: Mindestens 0.25 - 0.3 m² Fläche pro kW Wärmepumpenleistung.",
      "<strong>Hygiene:</strong> Um Legionellenbildung vorzubeugen, muss der Speicherinhalt wöchentlich durch ein Antilegionellen-Programm der Regelung thermisch desinfiziert werden.",
      "<strong>Schutzanode:</strong> Die eingebaute Magnesium- oder Fremdstromanode schützt die emaillierten Innenwände vor Korrosion und Lochfraß."
    ],
    tags: ["Trinkwasser", "Register", "Wärmetauscher", "Komfort"]
  },
  {
    id: "hubkombigeraet",
    name: "Hub-Kombigerät (Kombispeicher)",
    category: "speicher",
    images: ["HubKombigerät.jpg", "images.jpg"],
    imageLabels: ["Kombispeicher (Außenansicht)", "Kombispeicher (Innenleben)"],
    desc: "Ein integriertes Kombigerät, das den Warmwasserspeicher oben und einen Pufferspeicher unten in einem kompakten Standgehäuse vereint.",
    bullets: [
      "<strong>Optimale Raumnutzung:</strong> Reduziert die benötigte Stellfläche im Kundenkeller auf ein Minimum. Ideal für Reihenhäuser und kleine Hausanschlussräume.",
      "<strong>Reduzierter Montageaufwand:</strong> Verkürzt die Installationszeit unseres Teams erheblich, da viele Verbindungen intern bereits vorinstalliert sind.",
      "<strong>Wärmedämmung:</strong> Die Trennung der beiden Speicherbereiche verhindert den Wärmeübertrag von der heißen Trinkwasserzone zur kühleren Heizungszone."
    ],
    tags: ["Speicher", "Kompakt", "Kombigerät", "Keller"]
  },
  {
    id: "daemmung",
    name: "Isolierung & Wärmedämmung",
    category: "anschluss",
    images: ["SteinwolleIsolierungMantel.jpg", "IsolierungAluKaschiert.jpg"],
    imageLabels: ["Steinwoll-Isolierung", "Alu-kaschierte Dämmung"],
    desc: "Unsere Rohrleitungen müssen lückenlos gedämmt werden, um Energieverluste zu minimieren und Kondensatbildung (im Kühlbetrieb der Wärmepumpe) zu verhindern.",
    bullets: [
      "<strong>Steinwollschalen:</strong> Verwenden wir primär im Innenbereich und im Heizungsraum. Sie sind hochtemperaturbeständig und bieten exzellenten Brandschutz.",
      "<strong>Alukaschierung:</strong> Wirkt als Dampfsperre. Alle Stoßstellen müssen luftdicht mit Aluklebeband abgeklebt werden, um Diffusionsfeuchtigkeit zu vermeiden.",
      "<strong>GEG-Konformität:</strong> Wir montieren im unbeheizten Bereich ausschließlich Dämmstärken mit 100% Dämmdicke gemäß den gesetzlichen Vorgaben."
    ],
    tags: ["Dämmung", "GEG", "Energieverlust", "Kondensschutz"]
  },
  {
    id: "ventile",
    name: "Absperrarmaturen (Kugelhahn & Absperrventil)",
    category: "hydraulik",
    images: ["Kugelhahn.jpg", "Absperrventil.jpg"],
    imageLabels: ["Kugelhahn", "Schrägsitzventil"],
    desc: "Armaturen zum schnellen oder regulierbaren Absperren von Strömungskreisen. Unerlässlich für Wartungsarbeiten an einzelnen Komponenten.",
    bullets: [
      "<strong>Kugelhahn:</strong> Schließt extrem schnell mit einer 90-Grad-Drehung. Sollte einen vollen Durchgang haben, um den Strömungswiderstand für die Wärmepumpe minimal zu halten.",
      "<strong>Schrägsitzventil:</strong> Regulierbares Freistromventil. Bietet im voll geöffneten Zustand ebenfalls einen sehr geringen Druckverlust und verhindert Stagnationswasser.",
      "<strong>Praxis-Tipp:</strong> Platziere Kugelhähne direkt hinter den Mauerdurchführungen im Haus, um das Außengerät im Notfall separat abzusperren."
    ],
    tags: ["Absperrung", "Strömung", "Wartung", "Armatur"]
  },
  {
    id: "luftabscheidung",
    name: "Entlüfter & Luftabscheider",
    category: "hydraulik",
    images: ["Microluftabscheider.jpg", "Automatischer Schnellentlüfer.jpg"],
    imageLabels: ["Mikroblasenabscheider", "Schnellentlüfter"],
    desc: "Diese Bauteile entfernen Luft aus dem Heizsystem. Luft stört den Durchfluss, verursacht Fließgeräusche und führt zu Sauerstoffkorrosion.",
    bullets: [
      "<strong>Mikroblasenluftabscheider:</strong> Scheidet winzige Luftbläschen, die im Wasser gelöst sind, über ein spezielles Geflecht im Inneren ab. Wird im heißen Vorlauf montiert.",
      "<strong>Automatischer Schnellentlüfter:</strong> Entlässt Luftansammlungen selbsttätig nach oben aus dem System. Muss an der absolut höchsten Stelle der Verrohrung sitzen.",
      "<strong>Wichtigkeit:</strong> Wärmepumpen reagieren sehr empfindlich auf Luft im System, da dies den Mindestvolumenstrom stören kann."
    ],
    tags: ["Luft", "Korrosion", "Effizienz", "Entlüfter"]
  },
  {
    id: "regelung-pumpen",
    name: "Systemsteuerung & Pumpengruppen",
    category: "speicher",
    images: ["Regeleinheit.jpg", "Pumpengruppe mit Mischer.jpg", "Zirkulationspumpe.jpg"],
    imageLabels: ["Regeleinheit", "Pumpengruppe", "Zirkulationspumpe"],
    desc: "Komponenten zur Verteilung und Steuerung der Wärmeenergie im gesamten Haus.",
    bullets: [
      "<strong>Regeleinheit:</strong> Die Steuerung erfasst Außentemperatur und Raumtemperatur, berechnet die Heizkurve und regelt den Modulationsgrad des Verdichters.",
      "<strong>Pumpengruppe mit Mischer:</strong> Mischt heißes Vorlaufwasser mit kühlerem Rücklaufwasser, um die ideale Vorlauftemperatur für z.B. eine Fußbodenheizung bereitzustellen.",
      "<strong>Zirkulationspumpe:</strong> Wälzt das Trinkwarmwasser in einer Ringleitung um. Verhindert Stagnationswasser und sorgt für sofortiges Warmwasser an den Hähnen."
    ],
    tags: ["Steuerung", "Mischer", "Zirkulation", "Heizkreis"]
  },
  {
    id: "pumpen-diagnose",
    name: "Störung: Blockierte / Festsitzende Pumpen (Werksprüfung)",
    category: "diagnose",
    images: ["Pumpenproblem.png"],
    imageLabels: ["Pumpen-Fehlerbehebung"],
    desc: "Ein häufiges Anlaufproblem bei neuen Wärmepumpen nach längerer Lagerung: Hersteller prüfen die Geräte ab Werk mit Wasser auf Dichtigkeit. Restfeuchte im Gehäuse führt bei längerer Standzeit zu Korrosion oder Verkalkung, wodurch die Pumpe festsitzt.",
    bullets: [
      "<strong>Problem:</strong> Nach der Montage läuft die Anlage nicht an und zeigt einen Durchflussfehler. Die integrierte Umwälzpumpe brummt nur und blockiert.",
      "<strong>Sofortmaßnahme:</strong> Den Pumpenkopf demontieren, das Laufrad reinigen und die Welle vorsichtig von Hand (z.B. mit einem Schraubendreher) gangbar machen.",
      "<strong>Inbetriebnahmetest:</strong> Die ausgebaut angeschlossene Pumpe extern laufen lassen, bis sie die volle Leistung erreicht. Dies stellt man fest, wenn sie spürbar hochdreht und akustisch das typische, kraftvolle Arbeitsgeräusch erreicht."
    ],
    tags: ["Fehlersuche", "Pumpe blockiert", "Werksprüfung", "Anlaufschwierigkeiten"]
  },
  {
    id: "frostschutz-aussengeraet",
    name: "Frostschutz-Konzepte für das Außengerät",
    category: "sicherheit",
    images: ["Frostschutzventil.jpg"],
    imageLabels: ["Frostschutzventil als mechanischer Schutz"],
    desc: "Die Absicherung der wasserführenden Leitungen des Monoblock-Außengerätes gegen Einfrieren bei Stromausfall oder Pumpenstopp im Winter ist elementar. Es gibt drei etablierte Schutzmethoden mit spezifischen Vor- und Nachteilen:",
    bullets: [
      "<strong>1. 200%-Isolierung (Thermische Dämmung):</strong><br>• <em>Vorteile:</em> Kostengünstig, wartungsfrei, verschleißfrei und absolut umweltfreundlich.<br>• <em>Nachteile:</em> Bietet keinen unbegrenzten Schutz. Bei langanhaltendem Frost und komplettem Stillstand (z. B. tagelanger Stromausfall) verzögert die Dämmung das Einfrieren nur um einige Stunden, verhindert es aber letztlich nicht.",
      "<strong>2. Mechanische Frostschutzventile (z. B. Caleffi iFrost):</strong><br>• <em>Vorteile:</em> Arbeiten vollkommen autonom, stromlos und rein mechanisch. Sie öffnen bei ca. 3 °C Wassertemperatur und lassen das gefährdete Wasser kontrolliert abtropfen.<br>• <em>Nachteile:</em> Führen im Auslösefall zu Druckverlust in der Heizungsanlage durch Wasserverlust. Können bei stark verschmutztem Heizungswasser blockieren oder verkalken.",
      "<strong>3. Beimischung von Frostschutzmittel (Glykol):</strong><br>• <em>Vorteile:</em> Absoluter Frostschutz für das gesamte Leitungssystem und das Außengerät, unabhängig von der Dauer des Stromausfalls.<br>• <em>Nachteile:</em> Verringert die Wärmekapazität des Heizungswassers (schlechtere Effizienz der Wärmepumpe). Glykol muss regelmäßig auf Konzentration geprüft und nach einigen Jahren als Sondermüll getauscht werden. Zudem ist ein Netztrennungs-Systemtrenner nach DIN EN 1717 zum Schutz des Trinkwassers erforderlich."
    ],
    tags: ["Frostschutz", "Sicherheit", "Dämmung", "Glykol", "Ventil"]
  },
  {
    id: "aussengeraet",
    name: "Außengerät (Monoblock-Wärmepumpe)",
    category: "speicher",
    images: ["Hi-Master-V-Waermepumpe-Aussengeraet.webp"],
    imageLabels: ["Außengerät (Hi-Master V Serie)"],
    desc: "Das Außengerät ist die eigentliche Wärmepumpe vor dem Haus. Es entzieht der Umgebungsluft Wärmeenergie und gibt diese an den Heizwasserkreislauf ab. Da es sich um einen Monoblock handelt, ist der komplette Kältekreis bereits im Werk verschlossen worden.",
    bullets: [
      "<strong>Funktionsprinzip:</strong> Der integrierte Ventilator zieht Außenluft durch den Verdampfer, in dem das Kältemittel verdampft. Der Verdichter erhöht den Druck und die Temperatur, und ein Plattenwärmetauscher übergibt die Wärme an das Heizungswasser.",
      "<strong>Aufstellort & Schallschutz:</strong> Muss auf einem stabilen Betonfundament mit Kondensat-Kiesbett aufgestellt werden. Abstandsvorgaben zum Nachbargrundstück laut TA Lärm müssen zwingend eingehalten werden.",
      "<strong>Hydraulische Anbindung:</strong> Die Vor- und Rücklaufleitungen werden durch eine gedämmte Mauerdurchführung direkt ins Haus zur Hydroeinheit verlegt."
    ],
    tags: ["Außengerät", "Monoblock", "Kältekreis", "Wärmeerzeuger"]
  }
];

// --- INITIALIZE BASED ON PAGE ---
document.addEventListener("DOMContentLoaded", () => {
  // Check if we are on index.html (has quiz)
  if (document.getElementById("quiz-progress-bar")) {
    setupQuiz();
  }
  
  // Check if we are on komponenten.html (has components container)
  if (document.getElementById("components-deck-container")) {
    renderComponents("all");
    setupLexiconSearchAndFilters();
    updateCategoryCounts();
  }

  // Check if we are on spiel.html (has game schematic canvas)
  if (document.getElementById("schematic-canvas")) {
    setupGame();
  }

  setupScrollCTAs();
});

function setupScrollCTAs() {
  const ctaQuizBtn = document.getElementById("cta-quiz-btn");
  if (ctaQuizBtn) {
    ctaQuizBtn.addEventListener("click", () => {
      const quizSection = document.getElementById("quiz-anchor");
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// --- INTERACTIVE READY QUIZ (Client Assessment View) ---
function setupQuiz() {
  const quizSteps = document.querySelectorAll(".quiz-step");
  const prevBtn = document.getElementById("quiz-prev-btn");
  const nextBtn = document.getElementById("quiz-next-btn");
  const progressBar = document.getElementById("quiz-progress-bar");
  const controls = document.getElementById("quiz-controls");
  const resetBtn = document.getElementById("quiz-reset-btn");
  
  let currentStepIndex = 0;
  const totalSteps = quizSteps.length - 1; // Exclude result step
  
  const answers = {
    "heating-type": "",
    "insulation": "",
    "flow-temp": "",
    "consumption": ""
  };

  // Option selection
  const options = document.querySelectorAll(".quiz-option");
  options.forEach(option => {
    option.addEventListener("click", () => {
      const radio = option.querySelector("input[type='radio']");
      const name = radio.name;
      
      // Unselect siblings
      option.parentElement.querySelectorAll(".quiz-option").forEach(sibling => {
        sibling.classList.remove("selected");
      });
      
      // Select current
      option.classList.add("selected");
      radio.checked = true;
      answers[name] = radio.value;
      
      // Auto advance slightly delayed for UX
      setTimeout(() => {
        if (currentStepIndex < totalSteps - 1) {
          currentStepIndex++;
          showStep(currentStepIndex);
        }
      }, 300);
    });
  });

  const showStep = (index) => {
    quizSteps.forEach((step, idx) => {
      step.classList.remove("active");
      if (idx === index) {
        step.classList.add("active");
      }
    });

    // Progress bar
    const progressPercent = (index / totalSteps) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Footer controls
    if (index === totalSteps) { // Result Step
      controls.style.display = "none";
      calculateAndShowResult();
    } else {
      controls.style.display = "flex";
      prevBtn.disabled = index === 0;
      nextBtn.textContent = index === totalSteps - 1 ? "Auswerten" : "Weiter";
    }
  };

  nextBtn.addEventListener("click", () => {
    // Check if an option is selected for current step
    const currentStep = quizSteps[currentStepIndex];
    const radioSelected = currentStep.querySelector("input[type='radio']:checked");
    
    if (!radioSelected && currentStepIndex < totalSteps) {
      alert("Bitte wähle eine Option aus, um fortzufahren.");
      return;
    }

    if (currentStepIndex < totalSteps) {
      currentStepIndex++;
      showStep(currentStepIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      showStep(currentStepIndex);
    }
  });

  resetBtn.addEventListener("click", () => {
    currentStepIndex = 0;
    // Reset radio buttons
    options.forEach(opt => {
      opt.classList.remove("selected");
      opt.querySelector("input[type='radio']").checked = false;
    });
    // Reset answers
    for (let key in answers) {
      answers[key] = "";
    }
    showStep(0);
  });

  const calculateAndShowResult = () => {
    let score = 0;
    
    // Scoring logic
    if (answers["heating-type"] === "floor") score += 3;
    else if (answers["heating-type"] === "mixed") score += 2;
    else if (answers["heating-type"] === "radiators") score += 1;

    if (answers["insulation"] === "modern") score += 3;
    else if (answers["insulation"] === "partial") score += 2;
    else if (answers["insulation"] === "none") score += 1;

    if (answers["flow-temp"] === "low") score += 3;
    else if (answers["flow-temp"] === "medium") score += 2;
    else if (answers["flow-temp"] === "high") score += 1;

    if (answers["consumption"] === "low") score += 3;
    else if (answers["consumption"] === "medium") score += 2;
    else if (answers["consumption"] === "high") score += 1;

    const ratingElem = document.getElementById("result-rating");
    const badgeElem = document.getElementById("result-badge-elem");
    const textElem = document.getElementById("result-text");

    progressBar.style.width = "100%";

    if (score >= 10) {
      ratingElem.textContent = "100%";
      badgeElem.textContent = "Hervorragende Bedingungen";
      badgeElem.className = "result-badge ready";
      textElem.innerHTML = `<strong>Empfehlung für das Angebot:</strong> Das Gebäude hat exzellente Voraussetzungen. Dem Kunden kann eine Monoblock-Wärmepumpe ohne jegliche Zusatzmaßnahmen (wie Heizkörpertausch oder Dämmung) angeboten werden. Die JAZ (Jahresarbeitszahl) wird sehr hoch ausfallen.`;
    } else if (score >= 7) {
      ratingElem.textContent = "75%";
      badgeElem.textContent = "Machbar mit Optimierungen";
      badgeElem.className = "result-badge warning";
      textElem.innerHTML = `<strong>Empfehlung für das Angebot:</strong> Eine Installation ist absolut machbar. Du solltest im Angebot jedoch den Austausch von 1-2 kritischen Heizkörpern (z.B. im Wohnzimmer) gegen Typ 22- oder Typ 33-Heizkörper einkalkulieren. Zudem ist ein <strong>hydraulischer Abgleich</strong> zwingend erforderlich und muss dem Kunden angeboten werden, um die Vorlauftemperatur zu senken.`;
    } else {
      ratingElem.textContent = "40%";
      badgeElem.textContent = "Sanierung vorab erforderlich";
      badgeElem.className = "result-badge warning";
      badgeElem.style.backgroundColor = "#ffe5ec";
      badgeElem.style.color = "#d90429";
      textElem.innerHTML = `<strong>Achtung - Risiko für Fehlfunktion:</strong> In diesem ungedämmten Zustand bei Vorlauftemperaturen über 55°C wird die Wärmepumpe sehr ineffizient laufen. Informiere den Vertrieb. Dem Kunden sollte nahegelegt werden, vor dem Heizungstausch Teilsanierungen (Fenster, Dach) durchzuführen und Niedertemperatur-Heizkörper (oder Gebläsekonvektoren) einzuplanen. Kein direkter Tausch ohne Absprache.`;
    }
  };

  showStep(0);
}

// --- LEXICON GENERATION & SEARCH & FILTERS ---
function renderComponents(filter = "all", searchQuery = "") {
  const container = document.getElementById("components-deck-container");
  if (!container) return;
  container.innerHTML = "";

  const filtered = components.filter(comp => {
    const matchesFilter = filter === "all" || comp.category === filter;
    
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          comp.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          comp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="padding: 40px; background-color: var(--card-bg); border-radius: var(--radius-lg); border: 1px solid var(--card-border);">
        <p style="font-size:1.2rem;">Keine Komponenten für deine Filterung/Suche gefunden.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(comp => {
    const card = document.createElement("div");
    card.className = "component-card";
    card.setAttribute("data-id", comp.id);

    // Gallery / Image logic
    const hasMultipleImages = comp.images.length > 1;
    let slidesHTML = "";
    let dotsHTML = "";
    
    comp.images.forEach((img, idx) => {
      slidesHTML += `
        <div class="component-gallery-slide">
          <img src="${img}" alt="${comp.name} - ${comp.imageLabels[idx]}" loading="lazy">
        </div>
      `;
      dotsHTML += `
        <button class="component-gallery-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx+1}"></button>
      `;
    });

    const galleryHTML = `
      <div class="component-gallery" id="gallery-${comp.id}">
        ${hasMultipleImages ? `
          <button class="component-gallery-toggle-btn" id="toggle-btn-${comp.id}">
            Ansicht wechseln
          </button>
        ` : ''}
        <div class="component-gallery-slider" id="slider-${comp.id}">
          ${slidesHTML}
        </div>
        ${hasMultipleImages ? `
          <div class="component-gallery-nav">
            ${dotsHTML}
          </div>
        ` : ''}
      </div>
    `;

    // Bullet points
    let bulletsHTML = "";
    comp.bullets.forEach(bullet => {
      bulletsHTML += `
        <li>
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          <span>${bullet}</span>
        </li>
      `;
    });

    // Tags
    let tagsHTML = "";
    comp.tags.forEach(tag => {
      tagsHTML += `<span class="component-tag">#${tag}</span>`;
    });

    card.innerHTML = `
      ${galleryHTML}
      <div class="component-details">
        <span class="component-category">${getCategoryLabel(comp.category)}</span>
        <h3>${comp.name}</h3>
        <p class="component-desc">${comp.desc}</p>
        <ul class="component-bullets">
          ${bulletsHTML}
        </ul>
        <div class="component-meta-tags">
          ${tagsHTML}
        </div>
      </div>
    `;

    container.appendChild(card);

    // Attach slide gallery events if multiple images
    if (hasMultipleImages) {
      setupGallerySlider(comp.id, comp.images.length);
    }
  });
}

function setupGallerySlider(componentId, numImages) {
  const slider = document.getElementById(`slider-${componentId}`);
  const dots = document.querySelectorAll(`#gallery-${componentId} .component-gallery-dot`);
  const toggleBtn = document.getElementById(`toggle-btn-${componentId}`);
  
  let currentIdx = 0;

  const goToSlide = (idx) => {
    currentIdx = idx;
    if (slider) {
      slider.style.transform = `translateX(-${idx * 100}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === idx) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"));
      goToSlide(idx);
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nextIdx = (currentIdx + 1) % numImages;
      goToSlide(nextIdx);
    });
  }
}

function getCategoryLabel(category) {
  switch (category) {
    case "hydraulik": return "Hydraulik & Ventile";
    case "sicherheit": return "Sicherheit & Ausdehnung";
    case "speicher": return "Speicher & Regelung";
    case "anschluss": return "Fittinge & Dämmung";
    case "diagnose": return "Fehlersuche & Praxis";
    default: return "Allgemein";
  }
}

function setupLexiconSearchAndFilters() {
  const searchInput = document.getElementById("search-input");
  const filterBtns = document.querySelectorAll(".lexicon-sidebar .lexicon-filter-btn");

  if (!searchInput) return;

  let activeFilter = "all";
  let searchQuery = "";

  const performFilter = () => {
    renderComponents(activeFilter, searchQuery);
  };

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    performFilter();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      performFilter();
    });
  });
}

function updateCategoryCounts() {
  // Counts
  const counts = {
    all: components.length,
    hydraulik: 0,
    sicherheit: 0,
    speicher: 0,
    anschluss: 0,
    diagnose: 0
  };

  components.forEach(comp => {
    if (counts[comp.category] !== undefined) {
      counts[comp.category]++;
    }
  });

  for (let cat in counts) {
    const countElem = document.getElementById(`count-${cat}`);
    if (countElem) {
      countElem.textContent = counts[cat];
    }
  }
}

// --- INTERACTIVE SCHEMA PLACEMENT GAME ---
let selectedComponent = null;
const placedComponents = {}; // socketId -> componentId

const componentMetadata = {
  "ww-speicher": { name: "Warmwasserspeicher", file: "Warmwasserspeicher.jpg" },
  "pufferspeicher": { name: "Pufferspeicher", file: "Pufferspeicher.jpg" },
  "hydroeinheit": { name: "Hydroeinheit", file: "Hydroeineit.webp" },
  "schlammabscheider": { name: "Schlammabscheider", file: "Magnetit und Schlammabscheider.jpg" },
  "mag": { name: "Ausdehnungsgefäß", file: "MAG.jpg" },
  "kesselsicherheitsgruppe": { name: "Sicherheitsgruppe", file: "Kesselsicherheitsgruppe.jpg" },
  "frostschutzventil": { name: "Frostschutzventil", file: "Frostschutzventil.jpg" },
  "sicherheitsgruppe-kaltwasser": { name: "Sicherheitsgruppe Kaltwasser", file: "Sicherheitsgruppe Kaltwasser.jpg" }
};

function setupGame() {
  resetBoard();

  // Toolbox item selection
  const toolboxItems = document.querySelectorAll(".toolbox-item");
  toolboxItems.forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("placed")) return;

      toolboxItems.forEach(i => i.classList.remove("active-item"));
      
      const compId = item.getAttribute("data-component");
      if (selectedComponent === compId) {
        selectedComponent = null;
      } else {
        selectedComponent = compId;
        item.classList.add("active-item");
      }
    });
  });

  // Socket placement
  const sockets = document.querySelectorAll(".schematic-socket");
  sockets.forEach(socket => {
    socket.addEventListener("click", () => {
      const socketId = socket.id;
      
      if (selectedComponent) {
        // Clear socket if already occupied
        if (placedComponents[socketId]) {
          removeComponentFromSocket(socketId);
        }

        // If the selected component is already placed elsewhere, remove it first (only if it has reached its max count)
        const maxAllowed = (selectedComponent === "frostschutzventil" || selectedComponent === "mag") ? 2 : 1;
        const currentCount = getPlacedCountOfComponent(selectedComponent);
        if (currentCount >= maxAllowed) {
          // Find the first one and remove it
          for (let sId in placedComponents) {
            if (placedComponents[sId] === selectedComponent) {
              removeComponentFromSocket(sId);
              break; // only remove one
            }
          }
        }

        placeComponentInSocket(selectedComponent, socketId);
        selectedComponent = null;
        toolboxItems.forEach(i => i.classList.remove("active-item"));
      } else {
        // If no active selection, click to remove
        if (placedComponents[socketId]) {
          removeComponentFromSocket(socketId);
        }
      }
    });
  });

  // Action Buttons
  document.getElementById("game-simulate-btn").addEventListener("click", runSimulation);
  document.getElementById("game-clear-btn").addEventListener("click", resetBoard);
  document.getElementById("damage-ok-btn").addEventListener("click", closeDamageModal);
  document.getElementById("success-watch-btn").addEventListener("click", () => {
    document.getElementById("success-overlay").classList.remove("active");
  });
  document.getElementById("success-reset-btn").addEventListener("click", () => {
    document.getElementById("success-overlay").classList.remove("active");
    resetBoard();
  });
}

function getPlacedCountOfComponent(componentId) {
  return Object.values(placedComponents).filter(id => id === componentId).length;
}

function placeComponentInSocket(componentId, socketId) {
  placedComponents[socketId] = componentId;
  const socket = document.getElementById(socketId);
  
  socket.classList.add("occupied");
  const meta = componentMetadata[componentId];
  
  socket.innerHTML = `
    <img src="${meta.file}" class="placed-img" alt="${meta.name}">
  `;

  // Mark toolbox item as used only if it has reached its maximum allowed count
  const maxAllowed = (componentId === "frostschutzventil" || componentId === "mag") ? 2 : 1;
  const currentCount = getPlacedCountOfComponent(componentId);
  if (currentCount >= maxAllowed) {
    const toolboxItem = document.querySelector(`.toolbox-item[data-component="${componentId}"]`);
    if (toolboxItem) toolboxItem.classList.add("placed");
  }
}

function removeComponentFromSocket(socketId) {
  const componentId = placedComponents[socketId];
  delete placedComponents[socketId];

  const socket = document.getElementById(socketId);
  socket.classList.remove("occupied", "correct", "incorrect");
  
  socket.innerHTML = ``;

  // Restore toolbox item usability if it falls below its maximum allowed count
  const maxAllowed = (componentId === "frostschutzventil" || componentId === "mag") ? 2 : 1;
  const currentCount = getPlacedCountOfComponent(componentId);
  if (currentCount < maxAllowed) {
    const toolboxItem = document.querySelector(`.toolbox-item[data-component="${componentId}"]`);
    if (toolboxItem) toolboxItem.classList.remove("placed");
  }
}

function resetBoard() {
  selectedComponent = null;
  document.querySelectorAll(".toolbox-item").forEach(item => {
    item.classList.remove("placed", "active-item");
  });

  for (let socketId in { ...placedComponents }) {
    removeComponentFromSocket(socketId);
  }

  stopFlowAnimations();
  closeDamageModal();
}

function startFlowAnimations() {
  const pipes = document.querySelectorAll(".pipe-line");
  pipes.forEach(pipe => {
    if (!pipe.classList.contains("background-shadow")) {
      pipe.classList.add("pipe-flow-active");
    }
  });
}

function stopFlowAnimations() {
  const pipes = document.querySelectorAll(".pipe-line");
  pipes.forEach(pipe => {
    pipe.classList.remove("pipe-flow-active");
  });
}

function closeDamageModal() {
  document.getElementById("damage-modal").classList.remove("active");
  document.getElementById("alarm-overlay").classList.remove("active");
  stopFlowAnimations();
}

function runSimulation() {
  const placedCount = Object.keys(placedComponents).length;

  if (placedCount < 10) {
    alert("Bitte platziere alle 10 Bauteile auf den Platzhaltern (?) des Schemas, bevor du die Inbetriebnahme startest!");
    return;
  }

  // Clear previous validation styling
  document.querySelectorAll(".schematic-socket").forEach(socket => {
    socket.classList.remove("correct", "incorrect");
  });

  // Start animated water flow
  startFlowAnimations();

  // Run evaluation after 1.5s (so flow runs a bit, then stops/triggers alarm)
  setTimeout(() => {
    evaluateSchema();
  }, 1500);
}

function evaluateSchema() {
  let firstErrorType = null; // Storing the first failed component logic
  const errors = {}; // socketId -> boolean

  // Map sockets to check correctness
  const valMap = {
    "socket-frost-vl": "frostschutzventil",
    "socket-frost-rl": "frostschutzventil",
    "socket-hydro": "hydroeinheit",
    "socket-safety": "kesselsicherheitsgruppe",
    "socket-abscheider": "schlammabscheider",
    "socket-mag": "mag",
    "socket-puffer": "pufferspeicher",
    "socket-ww": "ww-speicher",
    "socket-safety-kw": "sicherheitsgruppe-kaltwasser",
    "socket-mag-tw": "mag"
  };

  // Check correctness of each socket placement
  for (let socketId in valMap) {
    const expected = valMap[socketId];
    const actual = placedComponents[socketId];

    if (actual !== expected) {
      errors[socketId] = true;
      document.getElementById(socketId).classList.add("incorrect");
      
      // Determine the first critical error type for Havarie-Simulation
      if (!firstErrorType) {
        firstErrorType = expected; // the missing/misplaced component
      }
    } else {
      document.getElementById(socketId).classList.add("correct");
    }
  }

  // If there is an error, stop flow, blink red, and show the Havarie modal
  if (firstErrorType) {
    stopFlowAnimations();
    document.getElementById("alarm-overlay").classList.add("active");
    triggerDamageSimulation(firstErrorType);
  } else {
    // Perfect layout! Keep flow running, wait 1s, show success panel
    setTimeout(() => {
      document.getElementById("success-overlay").classList.add("active");
    }, 1000);
  }
}

// 4 Custom Damage Scenarios (My Onboarding Idea)
function triggerDamageSimulation(componentType) {
  const modal = document.getElementById("damage-modal");
  const title = document.getElementById("damage-title");
  const cost = document.getElementById("damage-cost");
  const text = document.getElementById("damage-text");

  modal.classList.add("active");

  switch (componentType) {
    case "frostschutzventil":
      title.textContent = "Havarie: Frostschaden & Leitungsbruch!";
      cost.textContent = "Schadenshöhe: 4.500 € (Neues Außengerät)";
      text.innerHTML = `<strong>Was ist passiert?</strong> Es kommt zum Stromausfall bei -6°C im Winter. Da die mechanischen <strong>Frostschutzventile</strong> im Außenbereich fehlen (oder falsch platziert wurden), friert das stehende Heizwasser im Kupferrohr ein. Das Eis dehnt sich aus, sprengt die Rohrleitungen im Freien und zerreißt den Plattenwärmetauscher im Außengerät. 
      <br><br><strong>Lektion für Azubis:</strong> Monoblock-Wärmepumpen müssen außen IMMER mit Frostschutzventilen am Vor- und Rücklauf am absolut tiefsten Punkt ausgestattet werden, damit das Wasser im Notfall stromlos entweichen kann, bevor es gefriert.`;
      break;

    case "schlammabscheider":
      title.textContent = "Havarie: Wärmetauscher verstopft / Verdichterschaden!";
      cost.textContent = "Schadenshöhe: 3.200 € (Tausch Wärmetauscher + Verdichter)";
      text.innerHTML = `<strong>Was ist passiert?</strong> Rostpartikel, Zunder und Magnetit-Schlämme aus den alten Heizkörpern fließen ungehindert durch das System. Ohne <strong>Schlamm- & Magnetitabscheider</strong> im Rücklauf lagern sich diese Partikel im engen Plattenwärmetauscher des Außengeräts ab. Der Querschnitt verstopft, der Volumenstrom bricht ab und die Wärmepumpe erleidet einen thermischen Kollaps (Verdichterschaden).
      <br><br><strong>Lektion für Azubis:</strong> Der Schlammabscheider gehört zwingend in den Rücklauf direkt vor die Wärmepumpe, um das Systemwasser zu reinigen, bevor es das Außengerät erreicht.`;
      break;

    case "kesselsicherheitsgruppe":
      title.textContent = "Havarie: Rohrleitungsbersten durch Überdruck!";
      cost.textContent = "Schadenshöhe: 2.200 € (Überflutungsschaden)";
      text.innerHTML = `<strong>Was ist passiert?</strong> Beim Aufheizen des Heizwassers dehnt sich dieses physikalisch aus. Da die <strong>Kesselsicherheitsgruppe</strong> fehlt, kann der Überdruck nicht abgebaut werden. Der Druck steigt weit über 3,5 Bar, bis die schwächste Stelle (ein gelöteter Kupferbogen) im Keller birst und den Heizungsraum zentimeterhoch unter Wasser setzt.
      <br><br><strong>Lektion für Azubis:</strong> Die Sicherheitsgruppe mit dem 3-Bar-Sicherheitsventil gehört an den höchsten Punkt nahe der Hydroeinheit im Vorlauf, um Überdrücke sofort und sicher abzublasen.`;
      break;

    case "sicherheitsgruppe-kaltwasser":
      title.textContent = "Havarie: Trinkwasserspeicher geplatzt / Kellerüberflutung!";
      cost.textContent = "Schadenshöhe: 3.800 € (Speichertausch + Wasserschaden)";
      text.innerHTML = `<strong>Was ist passiert?</strong> Beim Aufheizen des Trinkwassers dehnt sich dieses im geschlossenen Warmwasserspeicher physikalisch aus. Da die <strong>Sicherheitsgruppe Kaltwasser</strong> im Zulauf fehlt, kann das Ausdehnungswasser nicht abtropfen. Der Druck übersteigt 10 Bar, wodurch der Emaillespeicher reißt und den Keller überflutet.
      <br><br><strong>Lektion für Azubis:</strong> Jeder geschlossene Trinkwasserspeicher muss im Kaltwasserzulauf zwingend mit einer Sicherheitsgruppe geschützt werden, um Überdruck abzubauen und das Rückfließen in das Kaltwassernetz zu verhindern.`;
      break;

    case "mag":
      title.textContent = "Anlagenstörung: Druckkollaps & Taktschäden!";
      cost.textContent = "Schadenshöhe: 800 € (Häufige Fehlzeiteinsätze)";
      text.innerHTML = `<strong>Was ist passiert?</strong> Ohne das <strong>Membranausdehnungsgefäß (MAG)</strong> schwankt der Systemdruck massiv. Bei Erwärmung bläst das Sicherheitsventil Wasser aus; kühlt die Anlage ab, fällt der Druck auf 0 Bar ab. Die Wärmepumpe geht wegen akuten Wassermangels permanent auf Fehler und schaltet ab. 
      <br><br><strong>Lektion für Azubis:</strong> Das MAG gleicht das veränderliche Wasservolumen aus und hält den Betriebsdruck stabil. Es gehört an den Rücklauf der Anlage angebunden.`;
      break;

    default:
      title.textContent = "Hydraulischer Montagefehler!";
      cost.textContent = "Schadenshöhe: 1.200 € (Umarbeitung)";
      text.innerHTML = `<strong>Was ist passiert?</strong> Du hast die Hauptbaugruppen (Innengerät, Pufferspeicher oder Warmwasserspeicher) vertauscht. Der Wasserstrom fließt in falsche Kreisläufe, wodurch das Brauchwasser kalt bleibt und die Heizkörper warm werden (oder umgekehrt). Wir müssen die gesamte Kellerverrohrung trennen und neu schweißen.
      <br><br><strong>Lektion für Azubis:</strong> Richte dich exakt nach den Vorgaben des Standard-Hydraulikschemas. Standgeräte gehören auf den Boden, Regelungen an die Wand.`;
      break;
  }
}



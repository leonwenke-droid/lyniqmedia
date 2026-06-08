export type ProjectRecord = {
  name: string;
  type: string;
  stack: string;
  url: string | null;
  description: string;
  problem: string;
  solution: string;
  result: string;
  stack_detail: string[];
  duration: string;
  seo: { title: string; description: string; keywords: string[] };
};

export const projectData: Record<string, ProjectRecord> = {
  "burgerstation-leer": {
    name: "Burgerstation Leer",
    type: "LIVE · WEB",
    stack: "React 19 · Vite · Tailwind v4 · SumUp",
    url: "https://burgerstation.vercel.app",
    description:
      "Vollständige digitale Präsenz für Burgerstation Leer: eine moderne Website mit animierter Speisekarte, eigenem Online-Bestellsystem und direkter SumUp-Kassenintegration für den hauseigenen Lieferservice. Das Projekt verbindet Markenauftritt, Bestelllogik und Zahlungsabwicklung in einer einzigen, schnellen Web-App — ohne externe Lieferplattform, ohne Provisionsabzug und mit voller Kontrolle über Menü, Preise und Kundendaten. Entwickelt für ein Restaurant in Leer, das von Tag eins an ausgebucht war und gleichzeitig einen eigenen Lieferstore starten wollte. Die Speisekarte ist interaktiv animiert, Bestellungen laufen direkt ins Kassensystem und Gäste finden Öffnungszeiten, Standort und Kontakt zentral an einem Ort.",
    problem:
      "Burgerstation Leer war von der Eröffnung an konstant ausgebucht — das Menü existierte praktisch nur auf Instagram, es gab keine eigene Website und kein strukturiertes Online-Bestellsystem. Mit dem geplanten Launch eines eigenen Lieferstores drohte die Abhängigkeit von Lieferando mit hohen Provisionsgebühren von bis zu 30 Prozent pro Bestellung, die die Marge des Restaurants direkt belasten. Gleichzeitig fehlte eine Google-sichtbare digitale Basis, über die Gäste Speisekarte, Öffnungszeiten und Bestellmöglichkeiten zuverlässig finden. Telefonische Bestellungen blockierten Personal am Tresen, und ohne Online-Kanal war der Lieferservice nicht skalierbar. Der Betrieb brauchte eine schnelle, professionelle Lösung, die Bestellungen, Zahlungen und Kassenprozesse in einem Flow vereint — ohne monatelange Agenturzyklen.",
    solution:
      "LYNIQ hat eine vollständige Website mit animierter digitaler Speisekarte, eigenem Online-Bestellsystem und direkter SumUp-Kassenintegration umgesetzt. Gäste können online bestellen, bezahlen und der Betrieb erhält Bestellungen strukturiert im Kassensystem — ohne Zwischenhändler. Die Oberfläche ist mobil optimiert, die Navigation klar auf Conversion ausgelegt und die technische Architektur bewusst schlank gehalten: React 19, Vite, Tailwind v4 und Framer Motion für flüssige Animationen. Checkout-Flow, Warenkorb und Zahlungsbestätigung sind auf minimale Klicks ausgelegt. Deployment und Hosting laufen über Vercel, sodass Menü-Updates und Preisänderungen innerhalb von Minuten live gehen können.",
    result:
      "Das Projekt wurde in einer Woche von Konzept bis Live-Deployment umgesetzt. Burgerstation ist erstmals strukturiert bei Google auffindbar und kann den eigenen Lieferstore mit eigenem Bestellsystem betreiben — ohne Lieferando-Abhängigkeit und ohne laufende Plattformprovisionen. Die volle Marge bleibt beim Restaurant, Bestellungen laufen digital und der Betrieb hat eine skalierbare Basis für weiteres Wachstum im Lieferservice. Stammgäste bestellen direkt über die eigene Seite, neue Kunden finden das Restaurant über lokale Suche — ein messbarer Schritt von Social-Media-only zu einer echten digitalen Infrastruktur.",
    stack_detail: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Framer Motion",
      "SumUp API",
      "Vercel",
    ],
    duration: "1 Woche",
    seo: {
      title:
        "Burgerstation Leer — Restaurant Website & Bestellsystem | LYNIQ",
      description:
        "Website, digitale Speisekarte und Online-Bestellsystem mit SumUp POS-Integration für Burgerstation Leer. In einer Woche entwickelt — kein Lieferando, keine Provisionen, volle Kontrolle. Entwickelt von LYNIQ.",
      keywords: [
        "Restaurant Website entwickeln",
        "Online Bestellsystem Restaurant",
        "SumUp Integration",
        "Lieferservice ohne Lieferando",
        "Restaurant App Leer Ostfriesland",
        "Kassensystem Website Anbindung",
      ],
    },
  },

  "ki-finanzanalyse-app": {
    name: "KI-Finanzanalyse App",
    type: "EIGENPROJEKT · KI",
    stack: "Next.js · Supabase · Anthropic API",
    url: null,
    description:
      "Persönliche Finanz-App mit KI-gestützter Analyse von Ein- und Ausgaben — entwickelt als Eigenprojekt für den täglichen Eigengebrauch. Das Dashboard aggregiert Konten und Transaktionen, visualisiert Cashflows über interaktive Charts und nutzt KI, um Ausgabenmuster, Anomalien und Sparpotenziale erkennbar zu machen. Alle Daten werden DSGVO-konform auf Servern in Deutschland verarbeitet. Transaktionslisten, Kategorien und monatliche Übersichten sind auf einen Blick erfassbar. Die App zeigt, wie individuelle KI-Finanztools für Selbstständige und KMU aussehen können — ohne generische Bank-Apps, ohne Kompromisse beim Datenschutz und mit voller Kontrolle über Modellwahl und Datenhaltung.",
    problem:
      "Auf dem Markt fehlte eine Finanz-App, die gleichzeitig deutschen Datenschutzstandard, echte KI-Analyse und eine intuitive Oberfläche für Konten, Investments und Transaktionen vereint. Viele Tools kategorisieren oberflächlich, liefern keine actionable Insights oder hosten Daten außerhalb der EU. Excel-Tabellen und manuelle Buchführung kosten Zeit und liefern keine proaktiven Warnungen bei Budgetüberschreitungen. Für den Eigenbedarf — klare Übersicht über Einnahmen und Ausgaben, automatische Kategorisierung und intelligente Empfehlungen — musste eine maßgeschneiderte Lösung entstehen, die Kontrolle über Daten, Modell und UX behält und sich an deutsche Anforderungen anpasst.",
    solution:
      "Ein Custom-Finanz-Dashboard mit Konten-Aggregation, automatischer Transaktionskategorisierung, Cashflow-Charts und KI-Analyse auf Basis der Anthropic Claude API. Die KI erkennt wiederkehrende Ausgabenmuster, markiert ungewöhnliche Buchungen und formuliert konkrete Handlungsempfehlungen in natürlicher Sprache. Backend und Auth laufen über Supabase mit Row-Level Security, Visualisierungen über Recharts, das Frontend über Next.js 14 mit Server Components für performante Datenabfragen. Die Architektur ist bewusst modular aufgebaut, damit weitere Datenquellen, Budgetziele und Analysemodule schrittweise ergänzt werden können.",
    result:
      "Die App ist produktiv im täglichen Eigengebrauch im Einsatz und ersetzt manuelle Tabellenarbeit vollständig. DSGVO-konform, mit Daten auf deutschen Servern und einem Workflow, der Ausgaben in Sekunden statt Stunden analysiert. Das Projekt demonstriert das Potenzial individueller KI-Finanztools — als Referenz für vergleichbare Lösungen bei Selbstständigen, Freelancern und kleinen Unternehmen, die ihre Finanzen nicht an generische SaaS-Produkte binden wollen. Typische Use Cases: Monatsabschluss, Sparziel-Tracking und Erkennung ungewöhnlicher Abbuchungen.",
    stack_detail: [
      "Next.js 14",
      "Supabase",
      "Anthropic Claude API",
      "Recharts",
      "Vercel",
    ],
    duration: "2 Wochen",
    seo: {
      title:
        "KI-Finanzanalyse App — DSGVO-konforme KI für persönliche Finanzen | LYNIQ",
      description:
        "Individuelle KI-Finanz-App mit Anthropic-Integration, automatischer Ausgabenkategorisierung und Cashflow-Analyse. DSGVO-konform, Server in Deutschland. Entwickelt von LYNIQ.",
      keywords: [
        "KI Finanzanalyse App",
        "DSGVO konforme Finanz App",
        "Anthropic Claude Integration",
        "persönliche Finanzverwaltung KI",
        "Custom Finanz Dashboard",
        "KI Ausgabenanalyse Deutschland",
      ],
    },
  },

  "fahrschule-lead-system": {
    name: "Fahrschule Lead-System",
    type: "KONZEPT · KI",
    stack: "Voice AI · Chatbot · n8n",
    url: null,
    description:
      "KI-System für Fahrschulen, das zwei kritische Engpässe adressiert: Erstanfragen über die Website und eingehende Anrufe während laufender Fahrstunden. Inspiriert durch echte Erfahrungen in der Fahrausbildung — wenn der Fahrlehrer am Steuer sitzt, gehen Anrufe verloren. Der Website-Chatbot beantwortet Fragen zu Führerscheinklassen, Preisen und Terminen und erfasst Leads strukturiert mit Kontaktdaten und Interessenprofil. Der KI-Telefonassistent nimmt Anrufe entgegen, qualifiziert Interessenten nach Klasse B, BE oder Motorrad und plant Rückrufe — damit Fahrlehrer sich auf die Fahrausbildung konzentrieren können. Ein zentrales Dashboard bündelt alle Leads, Conversion-Daten, Rückruf-Pipeline und Follow-up-Status.",
    problem:
      "Fahrlehrer sind während Fahrstunden nicht erreichbar — potenzielle Schüler rufen an, niemand hebt ab, Leads gehen verloren. Branchenstudien zeigen: Bis zu 40 Prozent der Erstanfragen bei lokalen Dienstleistern erfolgen außerhalb klassischer Erreichbarkeit. Gleichzeitig läuft das Onboarding neuer Schüler oft noch per E-Mail, manueller Vertragsversendung und unstrukturierten Telefonaten. Jeder verpasste Anruf ist ein potenziell verlorener Umsatz von mehreren hundert Euro pro Führerschein, besonders in Phasen hoher Nachfrage. Die Pain Points sind direkt aus eigenen Fahrstunden-Erfahrungen entstanden: Der Fahrlehrer war häufig am Telefon, während er eigentlich unterrichten musste.",
    solution:
      "Ein zweistufiges KI-System: Website-Chatbot für Erstinformation und Lead-Erfassung rund um die Uhr, plus Voice Agent für Telefonanfragen während Fahrstunden. Der Voice Agent qualifiziert Anrufer nach Führerscheinklasse, Terminwunsch und Dringlichkeit und hinterlegt strukturierte Daten im Dashboard. n8n automatisiert Follow-ups, WhatsApp-Benachrichtigungen an den Fahrlehrer und CRM-Updates. Das Analytics-Dashboard zeigt Conversion-Raten, verpasste Anrufe, durchschnittliche Reaktionszeit und Pipeline-Status auf einen Blick — inklusive Mockups für Landing Page, Voice-Agent-Interface und Lead-Übersicht.",
    result:
      "Das Konzept ist vollständig ausgearbeitet — inklusive Screenshots, User Flows und Dashboard-Mockups für Landing Page, Voice-Agent-Gespräch und Lead-Pipeline. Es zeigt messbaren Business-Impact: weniger verlorene Leads, schnellere Erstreaktion unter fünf Minuten und entlastete Fahrlehrer ohne zusätzliches Personal. Bereit für Pilotumsetzung mit einer Fahrschule, die Lead-Generierung und Kommunikation professionalisieren will. Geschätztes Potenzial: mehrere zusätzliche Führerschein-Anmeldungen pro Monat allein durch 24/7-Erreichbarkeit — bei durchschnittlich 1.500 bis 2.500 Euro Umsatz pro Schüler ein signifikanter Hebel.",
    stack_detail: [
      "Voice AI",
      "Website-Chatbot",
      "n8n Automation",
      "WhatsApp Integration",
      "Analytics Dashboard",
    ],
    duration: "Konzept bereit",
    seo: {
      title:
        "Fahrschule Lead-System — KI Voice Agent & Chatbot | LYNIQ",
      description:
        "KI-Lösung für Fahrschulen: Voice Agent nimmt Anrufe während Fahrstunden entgegen, Website-Chatbot erfasst Leads automatisch. Mehr Schüler, weniger manuelle Arbeit. Konzept von LYNIQ.",
      keywords: [
        "Fahrschule Lead Generierung",
        "KI Voice Agent Fahrschule",
        "Chatbot Fahrschule",
        "Fahrschule Digitalisierung",
        "Lead Management Fahrschule",
        "KI Telefon Fahrlehrer entlasten",
      ],
    },
  },

  "orgflow-saas": {
    name: "OrgFlow",
    type: "LIVE · SAAS",
    stack: "Next.js · Supabase · Stripe",
    url: "https://orgflow.de",
    description:
      "Multi-tenant SaaS-Plattform für Studentenorganisationen und Vereine — entstanden aus dem echten Organisationsproblem im eigenen Abitur-Jahrgang am Teletta-Groß-Gymnasium Leer. OrgFlow vereint Aufgabenverwaltung, Event-Planung, Schichtkoordination, Finanzübersicht und Team-Kommunikation in einem System mit klarer Rollenverteilung. Das Engagement-Score-System motiviert Mitglieder spielerisch, Verantwortung zu übernehmen und an Veranstaltungen teilzunehmen — mit sichtbaren Rankings und Belohnungen. Stripe-Integration ermöglicht Beitrags- und Ticketzahlungen direkt in der Plattform, ohne manuelle Überweisungsverfolgung.",
    problem:
      "Im eigenen Abitur-Jahrgang am Teletta-Groß-Gymnasium Leer waren Geldeinnahmen gering, weil Aufgaben, Veranstaltungen und Schichten chaotisch organisiert wurden — Excel-Tabellen, WhatsApp-Gruppen, keine klare Struktur, kein messbares Engagement und keine zentrale Übersicht. Verantwortliche wussten nicht, wer welche Schicht übernimmt, Events wurden schlecht besucht und Einnahmen blieben deutlich unter dem Potenzial. Schichtpläne wurden per Nachrichtenkette koordiniert, Aufgaben fielen immer denselben engagierten Personen zu. Es fehlte ein zentrales Tool, das Organisation, Motivation und Zahlungsabwicklung für Jugend- und Studentenverbände in einem Flow verbindet.",
    solution:
      "Eine Multi-tenant SaaS mit Engagement-Score-System, das Mitglieder spielerisch motiviert, Schichten zu übernehmen und an Veranstaltungen teilzunehmen. Aufgabenverwaltung, Event-Planung, Schichtkalender, Mitgliederübersicht, Finanzübersicht und Team-Kommunikation laufen in einer Oberfläche. Stripe übernimmt Zahlungen, Supabase die Datenhaltung mit Multi-Tenant-Isolation, Next.js 14 das Frontend. Jede Organisation erhält einen eigenen Tenant mit Branding und Mitgliederverwaltung — skalierbar für weitere Jahrgänge, Vereine und studentische Initiativen bundesweit.",
    result:
      "Im ersten Monat nach Einführung im eigenen Abitur-Jahrgang wurden bis zu 3.000 € zusätzliche Einnahmen generiert — direkt durch erhöhte Beteiligung an Schichten und Events. Die Schichtauslastung stieg messbar, weil das Score-System Freiwillige sichtbar belohnte und Nachzügler motivierte. Weniger WhatsApp-Chaos, weniger Excel-Dateien, mehr Transparenz für den Vorstand. Die Plattform ist live unter orgflow.de mit aktivem Nutzerstamm und wiederkehrenden Nutzern pro Woche. OrgFlow beweist, dass aus einem realen Schmerz im eigenen Umfeld ein messbares SaaS-Produkt entstehen kann — von Idee zu Live-Produkt in nur drei Wochen, mit einem konkreten ROI im ersten Monat und einem wiederholbaren Modell für weitere Jahrgänge und Vereine.",
    stack_detail: ["Next.js 14", "Supabase", "Stripe", "Vercel", "TypeScript"],
    duration: "3 Wochen",
    seo: {
      title: "OrgFlow — SaaS für Studentenorganisationen | LYNIQ",
      description:
        "Multi-tenant SaaS-Plattform die Engagement und Organisation in Studentenverbänden automatisiert. Entwickelt von LYNIQ — in 3 Wochen von Idee zu Live-Produkt mit messbarem Ergebnis: +3.000€ Mehreinnahmen im ersten Monat.",
      keywords: [
        "SaaS Entwicklung",
        "Studentenorganisation Software",
        "Vereinsverwaltung App",
        "Engagement Score System",
        "Next.js SaaS",
        "Multi-tenant Plattform",
      ],
    },
  },

  "cabisino-gaesteliste": {
    name: "Cabisino",
    type: "LIVE · EVENT",
    stack: "React · Vercel",
    url: null,
    description:
      "Digitale Gästeliste und Voranmeldung für den Abiball eines Gymnasiums — Gäste melden sich online an, am Abend reicht der QR-Code am Einlass. Kein Zettelchaos, kein Stau an der Tür, keine verlorenen Listen. Cabisino (ein Wortspiel mit dem Abitur-Motto) ist reines Event-Check-in: Voranmeldung über mehrere Termine, Begleitpersonen erfassen, QR-Tickets generieren und automatische Tischbelegung für Achter-Tische in einer schlanken Webapp. Das Organisationsteam sieht Anmeldungen in Echtzeit und kann Kapazitäten pro Termin steuern. In zwei Stunden von Problem zu Live-Deployment.",
    problem:
      "Vier getrennte Voranmeldungs-Termine für den Abiball, verschiedene Klassengruppen, individuelle Sitzplatzwünsche und Begleitpersonen — alles per Hand auf Listen gepflegt und zwischen Terminen abgeglichen. Am Abend entstanden lange Schlangen an der Tür, Namen mussten mühsam in alphabetischen Listen gesucht werden und Papierlisten stimmten nicht immer mit der Realität überein. Fehlende Gäste blockierten Plätze, Doppelbuchungen kamen vor. Das Organisationsteam mit über 200 erwarteten Gästen verlor Stunden mit manueller Koordination statt mit dem Event selbst. Ein digitaler Check-in-Flow fehlte komplett.",
    solution:
      "Webapp für Voranmeldung und digitale Gästelistenführung: Termine online buchen, Begleitpersonen erfassen, QR-Ticket für den Einlass generieren und Algorithmus für optimale Achter-Tischbelegung nach Gruppenzugehörigkeit. Gäste erhalten nach Anmeldung ein digitales Ticket per E-Mail, am Einlass wird per QR gescannt — schnell, nachvollziehbar, ohne Papierlisten. Das Organisationsteam sieht Live-Statistiken zu Anmeldungen pro Termin. React-Frontend, Deployment auf Vercel, bewusst minimal gehalten für maximale Geschwindigkeit bei der Umsetzung unter Abiball-Zeitdruck.",
    result:
      "In 2 Stunden gebaut und deployed. Voranmeldung und Einlass liefen komplett digital — schneller Durchlauf am Eingang mit unter 10 Sekunden pro Gast, keine verlorene Liste, optimale Tischbelegung durch den Sitzplatz-Algorithmus für Achter-Tische. Über 200 Gäste wurden ohne Papierchaos verwaltet, das Organisationsteam sparte geschätzt mehrere Stunden am Abend selbst. Kein manuelles Abhaken, keine Diskussionen an der Tür, keine vergessenen Begleitpersonen. Das Projekt zeigt, wie Event-Tools unter Abiball-Zeitdruck produktionsreif werden können, wenn Scope und Technik bewusst fokussiert bleiben — ein Blueprint für ähnliche Schul-Events.",
    stack_detail: [
      "React",
      "Vercel",
      "Digitale Gästeliste",
      "QR-Einlass",
      "Voranmeldung",
      "Sitzplatz-Algorithmus",
    ],
    duration: "2 Stunden",
    seo: {
      title:
        "Cabisino — Digitale Gästeliste & Voranmeldung Abiball | LYNIQ",
      description:
        "Voranmeldung und digitale Gästeliste für Abibälle: Online-Anmeldung, QR-Check-in am Einlass, automatische Tischbelegung. In 2 Stunden entwickelt von LYNIQ.",
      keywords: [
        "digitale Gästeliste Abiball",
        "Voranmeldung Event",
        "QR Code Einlass",
        "Abiball Organisation",
        "Gästelisten Webapp",
        "Event Check-in",
        "Sitzplatz Algorithmus",
      ],
    },
  },

  "abitur-lernplattformen": {
    name: "Abitur Lernplattformen",
    type: "LIVE · SAAS · KI",
    stack: "Next.js · Supabase · Vercel",
    url: null,
    description:
      "Drei interaktive Lernplattformen für die Leistungskurse Physik, Informatik und Politik-Wirtschaft im niedersächsischen Abitur — entstanden aus dem eigenen Lernbedarf als Schüler mit genau diesen drei Leistungskursen und dem Wunsch nach strukturierter Prüfungsvorbereitung. Jede Plattform bietet vollständige Lernpfade nach NDS-Kerncurriculum, interaktive Quizze mit sofortigem Feedback, Fortschrittstracking pro Themenblock und einen KI-Lernbot, der Fragen zum Stoff beantwortet und Konzepte erklärt. Skalierbare EdTech für ein spezifisches Curriculum statt generischer Lern-Apps — mit Dashboard für Lernfortschritt und Klausur-Countdown.",
    problem:
      "Als Schüler mit den drei Leistungskursen Physik, Informatik und Politik-Wirtschaft am Teletta-Groß-Gymnasium fehlten strukturierte, interaktive Lernplattformen, die auf das spezifische niedersächsische Kerncurriculum zugeschnitten sind. Generische Apps wie StudySmarter decken den Stoff nicht präzise ab, Lehrer-Materialien sind oft statische PDFs und ein durchgängiger Lernpfad mit Fortschrittsmessung und Klausurvorbereitung existierte nicht. Vor Abiturprüfungen fehlte eine zentrale Stelle zum Wiederholen, Üben und Nachfragen — besonders in Physik mit Formelsammlung und Rechenaufgaben.",
    solution:
      "Drei separate Lernplattformen mit vollständigen Lernpfaden nach NDS-Kerncurriculum, interaktiven Quizzen mit sofortigem Feedback, Fortschrittstracking pro Themenblock und KI-Lernbot auf Basis moderner Sprachmodelle. Der Bot beantwortet inhaltliche Fragen zum Stoff, erklärt Konzepte Schritt für Schritt und unterstützt beim Wiederholen vor Klausuren. Next.js und Supabase bilden die technische Basis mit Nutzer-Auth und Fortschrittsspeicherung, Deployment über Vercel. Jede Plattform ist eigenständig nutzbar und auf den jeweiligen Leistungskurs optimiert — Physik mit Formel-Übungen, Informatik mit Code-Beispielen, Politik mit Fallstudien.",
    result:
      "Live und aktiv genutzt von Abitur-Jahrgängen in Niedersachsen über mehrere Schuljahre hinweg. Jede Plattform trägt „Powered by LYNIQ“. Das Projekt zeigt die Möglichkeit skalierbarer EdTech-Produkte für spezifische Curricula — von eigenem Lernbedarf zu echten Nutzern im Schulalltag, mit messbarem Mehrwert bei Prüfungsvorbereitung und Stoffwiederholung. Feedback aus dem Jahrgang: strukturierteres Lernen, weniger Zeit mit unübersichtlichen Materialien und ein KI-Bot, der auch abends noch Fragen zum Stoff beantwortet — ohne auf Lehrer-Antworten warten zu müssen. Drei Fächer, drei Plattformen, ein wiederholbares Entwicklungsmodell für weitere Curricula.",
    stack_detail: ["Next.js", "Supabase", "KI-Lernbot", "Vercel", "TypeScript"],
    duration: "4 Wochen",
    seo: {
      title:
        "Abitur Lernplattform NDS — Physik, Informatik, Politik | LYNIQ",
      description:
        "Interaktive Lernplattformen für das niedersächsische Abitur in Physik, Informatik und Politik-Wirtschaft. Mit KI-Lernbot, Lernpfaden und Quizzen nach NDS-Kerncurriculum. Entwickelt von LYNIQ.",
      keywords: [
        "Abitur Lernplattform Niedersachsen",
        "Physik Abitur NDS",
        "Informatik Abitur App",
        "Politik Wirtschaft Abitur",
        "KI Lernbot Schule",
        "interaktive Lernplattform",
      ],
    },
  },

  "fussbodenheizung-website": {
    name: "Fußbodenheizung Website",
    type: "DEMO · WEB",
    stack: "React · Tailwind · Vercel",
    url: null,
    description:
      "Deutsche Website für einen niederländischen Fußbodenheizungs-Dienstleister — speziell ausgerichtet auf Kunden im deutsch-niederländischen Grenzgebiet zwischen Weener, Leer und dem Emsland. Die Demo zeigt Leistungsseiten für Neuinstallation, Sanierung und Wartung mit klarem Fokus auf Vertrauen und regionale Nähe. Die Demo zeigt, wie ein Handwerksbetrieb mit lokalem SEO, deutschsprachigem Kontaktformular, Referenzprojekten und klarer Leistungsübersicht gezielt Anfragen aus Deutschland generieren kann. Professioneller Auftritt mit Vertrauenselementen, mobile Optimierung und einem dedizierten deutschen Ansprechpartner als zentrale Conversion-Elemente für grenznahe Bauherren und Sanierer.",
    problem:
      "Das niederländische Fußbodenheizungs-Unternehmen hatte viele Bestandskunden im deutschen Grenzgebiet (Weener, Leer, Ostfriesland), aber keinen deutschen Online-Auftritt und keine SEO-Präsenz für deutsche Suchanfragen. Anfragen kamen eher zufällig über Empfehlungen und Mundpropaganda — keine gezielte Leadgenerierung für den deutschen Markt über Google und lokale Suche. Potenzielle Kunden suchten auf Deutsch nach „Fußbodenheizung Leer“ oder „Fußbodenheizung Weener“ und fanden keinen passenden, vertrauenswürdigen Anbieter mit lokaler Ansprache. Die Sprach- und Vertrauensbarriere kostete sichtbare Umsatzchancen bei Neubau- und Sanierungsprojekten.",
    solution:
      "Professionelle deutsche Website mit lokalem SEO-Fokus auf das Grenzgebiet, deutschsprachigem Kontaktformular, Leistungsübersicht für Installation, Wartung und Beratung sowie dediziertem deutschen Ansprechpartner für Anfragen aus Deutschland. React und Tailwind für schnelle, responsive Oberfläche, klare Informationsarchitektur für Leistungen, Referenzen mit Projektbildern und Kontaktseite mit Kartenintegration. Meta-Tags und Seitenstruktur sind auf regionale Keywords wie Fußbodenheizung Leer und Weener optimiert. Die Struktur ist bewusst auf Conversion und regionale Auffindbarkeit in Ostfriesland und dem Emsland ausgelegt.",
    result:
      "Erster gezielter digitaler Auftritt für den deutschen Markt in einer Woche umgesetzt — als Demo-Referenz für grenzüberschreitende Handwerks-Websites im Portfolio von LYNIQ. Kunden im Grenzgebiet können in ihrer Sprache anfragen, Leistungen verstehen und einen deutschen Ansprechpartner erreichen — ohne Sprachbarriere und ohne auf niederländische Seiten angewiesen zu sein. Referenzprojekte und Leistungsseiten schaffen Vertrauen bei Neukunden im Bau- und Sanierungssektor. Das Projekt illustriert, wie lokale Sichtbarkeit und mehrsprachige Zielgruppenansprache für Dienstleister mit regionalem Fokus in unter einer Woche umgesetzt werden.",
    stack_detail: ["React", "Tailwind CSS", "Vercel", "Kontaktformular"],
    duration: "1 Woche",
    seo: {
      title:
        "Fußbodenheizung Website — Deutsch-niederländisches Grenzgebiet | LYNIQ",
      description:
        "Deutsche Website für niederländischen Fußbodenheizungs-Dienstleister mit Fokus auf Kunden in Weener, Leer und Ostfriesland. Lokales SEO, deutschsprachige Anfragen. Entwickelt von LYNIQ.",
      keywords: [
        "Fußbodenheizung Leer Ostfriesland",
        "Fußbodenheizung Weener",
        "Fußbodenheizung Grenzgebiet Deutschland Niederlande",
        "Handwerker Website erstellen",
        "lokale SEO Handwerk",
        "Fußbodenheizung installieren lassen",
      ],
    },
  },

  "ai-agenten-kmu": {
    name: "AI Agenten",
    type: "EIGENPROJEKT · KI",
    stack: "Voice AI · Webhook · WhatsApp",
    url: null,
    description:
      "KI-Agenten für Unternehmen als Eigenprojekt und Live-Demo auf lyniqmedia.com: Voice Agent für Telefonanfragen, WhatsApp-Bot für automatisierte Kommunikation und Website-Chatbot für sofortige Informationsvermittlung. Drei Kanäle, ein Ziel — Leads qualifizieren, Erreichbarkeit erhöhen und manuelle Kommunikation reduzieren. Entwickelt für KMU in Handwerk, Dienstleistung und Beratung, die 24/7 erreichbar sein wollen, ohne Personal aufzustocken. Aktiv auf lyniqmedia.com als Referenz-Stack mit echten Gesprächs- und Chat-Flows.",
    problem:
      "Kleine und mittelständische Unternehmen in Deutschland verlieren Leads durch unbeantwortete Anrufe außerhalb der Geschäftszeiten, zeitintensive manuelle Kommunikation und Kunden, die auf der Website keine schnellen Antworten finden. Studien zeigen: Über 60 Prozent der Anrufer legen auf, wenn niemand innerhalb von 30 Sekunden antwortet. Jeder verpasste Anruf und jede unbeantwortete WhatsApp-Nachricht ist potenzieller Umsatzverlust. Gleichzeitig können kleine Betriebe sich kein dediziertes Call-Center leisten — sie brauchen intelligente Automation, die menschlich wirkt, DSGVO-konform arbeitet und strukturiert Daten hinterlässt.",
    solution:
      "Drei integrierte KI-Agenten: Voice Agent, der Anrufe entgegennimmt, Leads nach Bedarf und Dringlichkeit qualifiziert und Termine vorschlägt; WhatsApp-Bot für automatisierte Erst- und Folgekommunikation mit personalisierten Antworten auf häufige Kundenfragen; Website-Chatbot, der Unternehmensinfos, Preise, Leistungen und Verfügbarkeit sofort liefert — rund um die Uhr, auch an Wochenenden und Feiertagen. Webhook-Integration und n8n verbinden die Kanäle, Anfragen landen strukturiert im Dashboard mit Zeitstempel und Kanalherkunft. Die Architektur ist modular — einzelne Agenten oder der vollständige Stack können je nach Bedarf eingesetzt werden.",
    result:
      "Aktiv in Eigennutzung auf lyniqmedia.com als Live-Demo mit funktionierenden Voice-, WhatsApp- und Chat-Flows für echte Anfragen. Besucher können den Voice Agent direkt testen, Fragen stellen und sehen, wie Leads erfasst werden. Zeigt den vollständigen Stack für KMU, die Kommunikation automatisieren wollen, ohne Personal aufzustocken. Referenz für Voice AI, WhatsApp-Automation und Chatbot-Integration in unter einer Woche umsetzbar — als Eigenprojekt und als Vorlage für Kundenlösungen in Fahrschulen, Handwerk, Beratung und Dienstleistung. Typische Einsparung: mehrere Stunden manuelle Kommunikation pro Woche bei gleichzeitig deutlich höherer Erreichbarkeit.",
    stack_detail: [
      "Voice AI Platform",
      "Webhook-Integration",
      "WhatsApp Business API",
      "n8n",
      "Website-Chatbot",
    ],
    duration: "3 Tage",
    seo: {
      title:
        "AI Agenten für KMU — Voice Agent, WhatsApp Bot, Chatbot | LYNIQ",
      description:
        "KI-Agenten für kleine und mittelständische Unternehmen: Voice Agent für 24/7 Telefonbetreuung, WhatsApp-Automation und Website-Chatbot. DSGVO-konform. Entwickelt von LYNIQ.",
      keywords: [
        "AI Voice Agent Deutschland",
        "WhatsApp Bot KMU",
        "KI Telefonassistent",
        "Chatbot Website",
        "Lead Qualifizierung KI",
        "Automatisierung Kundenkommunikation",
      ],
    },
  },

  "gebaeudereinigung-mvp": {
    name: "Gebäudereinigung MVP",
    type: "KONZEPT · KI",
    stack: "Next.js · Vision API · Supabase",
    url: null,
    description:
      "KI-gestützte MVP-App für Gebäudereinigungsunternehmen — Mitarbeiter fotografieren Räume vor Ort mit dem Smartphone, die KI analysiert Verschmutzung und Raumgröße und erstellt automatisch Reinigungschecklisten sowie Kostenvoranschläge mit Aufwandsschätzung in Stunden. Der Geschäftsführer muss nicht mehr jeden neuen Standort persönlich besichtigen, sondern gibt Angebote per Tap frei. Mobile-first PWA mit Google Vision API, Supabase-Backend und klar definiertem Freigabe-Workflow. Zielgruppe: Reinigungsfirmen mit mehreren Standorten und wachsendem Angebotsvolumen.",
    problem:
      "Bei einem wachsenden Gebäudereinigungsunternehmen in Deutschland muss der Geschäftsführer jeden neuen Standort persönlich besichtigen, um Preise und Aufwand zu kalkulieren — zeitintensiv, nicht skalierbar, besonders beim Aufbau neuer Standorte und bei öffentlichen Ausschreibungen. Eine Besichtigung dauert oft zwei bis vier Stunden inklusive Anfahrt. Jede Besichtigung bindet Führungskapazität, verzögert Angebote um Tage und limitiert Wachstum auf die Verfügbarkeit einer Person. Mitarbeiter vor Ort haben das Wissen über den Zustand der Räume, aber kein System, das diese Information strukturiert erfasst und in kalkulierbare Angebote übersetzt.",
    solution:
      "Mobile-first App: Mitarbeiter fotografiert Räume vor Ort → KI analysiert Verschmutzungsgrad und Raumgröße über Google Vision API → generiert automatisch Reinigungscheckliste mit Aufgaben pro Raum und Kostenvoranschlag mit Stunden- und Materialkalkulation → Geschäftsführer bestätigt oder passt nur noch per App an. Next.js und Supabase bilden Backend und Frontend, der Flow ist auf Geschwindigkeit und Nachvollziehbarkeit optimiert. Scope, User Flows, Objektverwaltung und Tech-Stack sind vollständig definiert — inklusive Mockups für Foto-Upload, KI-Analyse und Angebotsfreigabe.",
    result:
      "MVP-Konzept vollständig ausgearbeitet — bereit für Entwicklung und Pilotphase sobald ein Pilotpartner gefunden ist. Geschätztes Einsparpotenzial: mehrere Besichtigungsstunden pro Woche für den GF, bei 10 neuen Standorten pro Quartal entspricht das Dutzenden eingesparter Arbeitsstunden. Das Projekt zeigt, wie KI-basierte Bildanalyse repetitive Schätzarbeit in der Gebäudereinigung ersetzen kann: schnellere Angebote innerhalb von Stunden statt Tagen, skalierbare Standort-Erfassung durch Vor-Ort-Mitarbeiter und weniger Abhängigkeit von GF-Präsenz vor Ort bei neuer Kundenakquise. Mockups für Foto-Upload, KI-Analyse, Objektverwaltung und Angebotsfreigabe sind vollständig fertig und einsatzbereit.",
    stack_detail: [
      "Next.js",
      "Supabase",
      "Google Vision API",
      "Mobile-first PWA",
    ],
    duration: "In Entwicklung",
    seo: {
      title:
        "Gebäudereinigung App mit KI — Kostenvoranschlag per Foto | LYNIQ",
      description:
        "KI-MVP für Gebäudereinigungsunternehmen: Foto → KI analysiert Verschmutzung → automatischer Kostenvoranschlag. Skalierbar ohne Geschäftsführer-Präsenz. Konzept von LYNIQ.",
      keywords: [
        "Gebäudereinigung Software",
        "KI Kostenvoranschlag",
        "Reinigungsunternehmen App",
        "Vision API Verschmutzungsanalyse",
        "Facility Management KI",
        "MVP Gebäudereinigung",
      ],
    },
  },
};

import LegalLayout, { LegalParagraphs } from "@/components/LegalLayout";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "AGB | LYNIQ" },
  robots: { index: false },
};

const LAST_UPDATED = "4. Juni 2026";

const sections = [
  {
    id: "geltungsbereich",
    title: "§ 1 Geltungsbereich",
    content: (
      <LegalParagraphs
        content={[
          "Diese AGB gelten für Verträge von LYNIQ Media („Auftragnehmer“) gegenüber Unternehmern, juristischen Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen.",
          "Sie gelten nicht gegenüber Verbrauchern.",
        ]}
      />
    ),
  },
  {
    id: "vertragsschluss",
    title: "§ 2 Vertragsschluss",
    content: (
      <LegalParagraphs
        content={[
          "Angebote sind freibleibend. Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder Beginn der Leistungserbringung zustande. Mündliche Nebenabreden bedürfen der Textform.",
        ]}
      />
    ),
  },
  {
    id: "leistungsumfang",
    title: "§ 3 Leistungsumfang",
    content: (
      <LegalParagraphs
        content={[
          "Maßgeblich ist die jeweilige Auftragsbestätigung bzw. das individuelle Angebot. Änderungen bedürfen der Textform und können Preis und Liefertermin anpassen.",
        ]}
      />
    ),
  },
  {
    id: "preise",
    title: "§ 4 Preise und Zahlung",
    content: (
      <LegalParagraphs
        content={[
          "Nettopreise. Als Kleinunternehmer (§ 19 UStG) keine USt. Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zahlbar. Bei Verzug gesetzliche Verzugszinsen.",
        ]}
      />
    ),
  },
  {
    id: "mitwirkung",
    title: "§ 5 Mitwirkungspflichten",
    content: (
      <LegalParagraphs
        content={[
          "Der Auftraggeber stellt erforderliche Informationen, Zugänge und Materialien rechtzeitig bereit. Verzögerungen durch fehlende Mitwirkung gehen nicht zu Lasten des Auftragnehmers.",
        ]}
      />
    ),
  },
  {
    id: "abnahme",
    title: "§ 6 Abnahme",
    content: (
      <LegalParagraphs
        content={[
          "Prüfung innerhalb von 7 Werktagen nach Fertigstellung; Abnahme oder Mängelrüge in Textform. Nach Fristablauf gilt die Leistung als abgenommen.",
        ]}
      />
    ),
  },
  {
    id: "gewaehrleistung",
    title: "§ 7 Gewährleistung",
    content: (
      <LegalParagraphs
        content={[
          "Mängel sind unverzüglich in Textform zu rügen. Recht zur Nacherfüllung; nach zweimaligem Fehlschlag gesetzliche Rechte. Gewährleistungsfrist 12 Monate ab Abnahme.",
        ]}
      />
    ),
  },
  {
    id: "haftung",
    title: "§ 8 Haftung",
    content: (
      <LegalParagraphs
        content={[
          "Unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vertragstypisch vorhersehbaren Schaden.",
          "Haftung für mittelbare Schäden/entgangenen Gewinn ausgeschlossen, soweit zulässig. Produkthaftungsgesetz bleibt unberührt.",
        ]}
      />
    ),
  },
  {
    id: "nutzungsrechte",
    title: "§ 9 Nutzungsrechte",
    content: (
      <LegalParagraphs
        content={[
          "Nach vollständiger Zahlung Übertragung der Nutzungsrechte an den erstellten Werken inkl. Quellcode, sofern im Angebot nicht anders vereinbart.",
          "Bei laufenden Leistungen (Wartung/Hosting) gelten gesonderte Vereinbarungen.",
        ]}
      />
    ),
  },
  {
    id: "laufende-leistungen",
    title: "§ 10 Laufende Leistungen (Wartung, Hosting)",
    content: (
      <LegalParagraphs
        content={[
          "Laufende Leistungen werden gesondert vereinbart, monatlich abgerechnet und können mit einer Frist von 4 Wochen zum Monatsende gekündigt werden.",
        ]}
      />
    ),
  },
  {
    id: "vertraulichkeit",
    title: "§ 11 Vertraulichkeit",
    content: (
      <LegalParagraphs
        content={[
          "Beide Parteien geben vertrauliche Informationen nicht an Dritte weiter; auch über das Vertragsende hinaus.",
        ]}
      />
    ),
  },
  {
    id: "schlussbestimmungen",
    title: "§ 12 Schlussbestimmungen",
    content: (
      <LegalParagraphs
        content={[
          "Deutsches Recht. Gerichtsstand für Kaufleute: Leer (Ostfriesland). Salvatorische Klausel.",
        ]}
      />
    ),
  },
];

export default function Agb() {
  return (
    <PageShell>
      <LegalLayout
        title="Allgemeine Geschäftsbedingungen"
        lastUpdated={LAST_UPDATED}
        intro="Gilt für individuelle Software-, Web- und Automatisierungsprojekte gegenüber Unternehmern (§ 14 BGB). Nicht für Verbraucher."
        sections={sections}
      />
    </PageShell>
  );
}

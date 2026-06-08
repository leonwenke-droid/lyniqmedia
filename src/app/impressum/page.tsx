import LegalLayout, { LegalParagraphs } from "@/components/LegalLayout";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Impressum",
  robots: { index: false },
};

const LAST_UPDATED = "4. Juni 2026";

const sections = [
  {
    id: "angaben-ddg",
    title: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)",
    content: (
      <LegalParagraphs
        content={[
          "LYNIQ Media",
          "Inhaber: Leon Wenke",
          "Alte Poststraße 17a",
          "26835 Holtland",
          "Deutschland",
        ]}
      />
    ),
  },
  {
    id: "kontakt",
    title: "Kontakt",
    content: (
      <LegalParagraphs
        content={[
          "Telefon: +49 (0) 1517 5007219",
          "E-Mail: info@lyniqmedia.com",
          "Web: www.lyniqmedia.com",
        ]}
      />
    ),
  },
  {
    id: "ust-id",
    title: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG",
    content: <LegalParagraphs content={["DE455122753"]} />,
  },
  {
    id: "kleinunternehmer",
    title: "Hinweis gemäß § 19 UStG",
    content: (
      <LegalParagraphs
        content={[
          "Als Kleinunternehmer im Sinne des § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.",
        ]}
      />
    ),
  },
  {
    id: "mstv",
    title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    content: <LegalParagraphs content={["Leon Wenke, Anschrift wie oben."]} />,
  },
  {
    id: "streitbeilegung",
    title: "Verbraucherstreitbeilegung",
    content: (
      <LegalParagraphs
        content={[
          "Die EU-OS-Plattform wurde zum 20.07.2025 eingestellt. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ]}
      />
    ),
  },
  {
    id: "haftung",
    title: "Haftungsausschluss",
    content: (
      <LegalParagraphs
        content={[
          "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. Die erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.",
        ]}
      />
    ),
  },
];

export default function Impressum() {
  return (
    <PageShell>
      <LegalLayout
        title="Impressum"
        lastUpdated={LAST_UPDATED}
        sections={sections}
      />
    </PageShell>
  );
}

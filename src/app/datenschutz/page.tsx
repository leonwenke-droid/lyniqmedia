import LegalLayout, { LegalParagraphs } from "@/components/LegalLayout";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

const LAST_UPDATED = "8. Juni 2026";

const sections = [
  {
    id: "verantwortlicher",
    title: "1. Verantwortlicher",
    content: (
      <LegalParagraphs content="Leon Wenke, LYNIQ Media, Alte Poststraße 17a, 26835 Holtland. E-Mail: info@lyniqmedia.com" />
    ),
  },
  {
    id: "allgemeines",
    title: "2. Allgemeines",
    content: (
      <LegalParagraphs content="Wir verarbeiten personenbezogene Daten nur, soweit zur Bereitstellung der Website und unserer Leistungen erforderlich oder soweit Sie eingewilligt haben. Rechtsgrundlagen: Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/vorvertraglich), lit. f (berechtigtes Interesse) DSGVO." />
    ),
  },
  {
    id: "hosting",
    title: "3. Hosting",
    content: (
      <LegalParagraphs content="Gehostet bei Vercel Inc.; Ausführung in der Region Frankfurt (eu-central-1, Deutschland). AVV vorhanden. Technisch notwendige Server-Logs (IP, Zeit, Ressource, Browsertyp). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO." />
    ),
  },
  {
    id: "datenbank",
    title: "4. Datenbank",
    content: (
      <LegalParagraphs content="Supabase, Server in Frankfurt, Deutschland. AVV vorhanden." />
    ),
  },
  {
    id: "kontaktformular",
    title: "5. Kontaktformular",
    content: (
      <LegalParagraphs
        content={[
          "Eingegebene Daten (Name, E-Mail, Nachricht) werden zur Bearbeitung Ihrer Anfrage verarbeitet; Übermittlung über Web3Forms.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO. Löschung nach Erledigung, soweit keine Aufbewahrungspflichten bestehen.",
          "Web3Forms kann Daten außerhalb der EU verarbeiten; in diesem Fall erfolgt die Übermittlung auf Grundlage geeigneter Garantien gemäß Art. 44 ff. DSGVO.",
        ]}
      />
    ),
  },
  {
    id: "ki-chat",
    title: "6. KI-Chat-Assistent („Frag LYNIQ“)",
    content: (
      <LegalParagraphs
        content={[
          "Auf der Website steht ein KI-gestützter Assistent zur Beantwortung von Fragen zu LYNIQ Media zur Verfügung. Ihre Nachricht wird serverseitig über unsere API (Vercel, Region Frankfurt) entgegengenommen und zur Generierung einer Antwort an OpenAI übermittelt (Modell: gpt-4o-mini). Pro Anfrage wird nur die jeweils eingegebene Nachricht gesendet — es wird kein Gesprächsverlauf gespeichert oder übermittelt.",
          "Zur Missbrauchsprävention verarbeiten wir vorübergehend die IP-Adresse in einem In-Memory-Rate-Limit (max. 20 Anfragen pro Stunde pro IP) auf unserem Server; diese IP wird nicht an OpenAI übermittelt.",
          "Wir speichern Chatinhalte nicht dauerhaft. OpenAI verarbeitet Eingaben als Auftragsverarbeiter im Rahmen des OpenAI Data Processing Addendum (AVV gemäß Art. 28 DSGVO), abgeschlossen zwischen LYNIQ Media und OpenAI (wirksam seit Mai 2026). Für Daten aus dem Europäischen Wirtschaftsraum ist Vertragspartner OpenAI Ireland Ltd.; die Verarbeitung kann über verbundene Unternehmen auch in Drittländern (u. a. USA) erfolgen.",
          "Für Übermittlungen in Drittländer gelten die im AVV vereinbarten EU-Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO. Eine aktuelle Liste der von OpenAI eingesetzten Unterauftragsverarbeiter: https://platform.openai.com/subprocessors",
          "Bitte geben Sie keine sensiblen oder besonderen personenbezogenen Daten (z. B. Gesundheitsdaten, vollständige Kontaktdaten Dritter) im Chat ein — laut AVV sind solche Daten nicht vorgesehen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Website-Anfragen).",
        ]}
      />
    ),
  },
  {
    id: "spline-3d",
    title: "7. 3D-Darstellung (Spline)",
    content: (
      <LegalParagraphs
        content={[
          "Für die interaktive 3D-Darstellung im Hero-Bereich dieser Website wird die Spline-Runtime verwendet. Dabei werden technisch notwendige Ressourcen von unpkg.com (USA, Betreiber: npm, Inc.) und fonts.gstatic.com (Google LLC, USA) geladen.",
          "Diese Übertragung erfolgt auf Grundlage von Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO. Die 3D-Szene selbst liegt lokal auf unserem Server und wird nicht von Spline-Servern geladen.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung).",
        ]}
      />
    ),
  },
  {
    id: "schriftarten",
    title: "8. Schriftarten",
    content: (
      <LegalParagraphs content="Lokal vom Server ausgeliefert (self-hosted via next/font). Keine Verbindung zu Drittservern beim Laden." />
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies und Einwilligung",
    content: (
      <LegalParagraphs
        content={[
          "Diese Website verwendet technisch notwendige Cookies sowie — nach Ihrer Einwilligung — Cookies für Webanalyse (siehe Ziff. 9).",
          "Beim ersten Besuch erhalten Sie ein Einwilligungsbanner, über das Sie nicht notwendige Cookies akzeptieren oder ablehnen können. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Link „Cookie-Einstellungen“ im Footer).",
          "Rechtsgrundlage für nicht notwendige Cookies: Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TTDSG.",
        ]}
      />
    ),
  },
  {
    id: "google-analytics",
    title: "10. Webanalyse mit Google Analytics",
    content: (
      <LegalParagraphs
        content={[
          "Diese Website nutzt Google Analytics, einen Dienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland). Google Analytics verwendet Cookies, die eine Analyse der Nutzung der Website ermöglichen (z. B. Seitenaufrufe, Verweildauer, Herkunft der Zugriffe). Die so erzeugten Informationen können an Server von Google, auch in den USA, übertragen und dort gespeichert werden.",
          "Die Erfassung erfolgt ausschließlich nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG.",
          "Bei der Übermittlung in die USA stützen wir uns auf die EU-Standardvertragsklauseln bzw. die Zertifizierung von Google unter dem EU-US Data Privacy Framework. Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen. IP-Anonymisierung ist aktiviert.",
          "Die Erfassung kann jederzeit über den Link „Cookie-Einstellungen“ im Footer dieser Website widerrufen werden.",
        ]}
      />
    ),
  },
  {
    id: "rechte",
    title: "11. Ihre Rechte",
    content: (
      <LegalParagraphs
        content={[
          "Auskunft (Art. 15), Berichtigung (16), Löschung (17), Einschränkung (18), Datenübertragbarkeit (20), Widerspruch (21 DSGVO).",
          "Beschwerderecht bei der Landesbeauftragten für den Datenschutz Niedersachsen (LfD Niedersachsen). Kontakt: info@lyniqmedia.com",
        ]}
      />
    ),
  },
];

export default function Datenschutz() {
  return (
    <PageShell>
      <LegalLayout
        title="Datenschutzerklärung"
        lastUpdated={LAST_UPDATED}
        intro="Reine Lead-Gen-Website ohne Online-Bezahlung. Kein Stripe-Abschnitt — Zahlungsabwicklung erfolgt nicht über lyniqmedia.com."
        sections={sections}
      />
    </PageShell>
  );
}

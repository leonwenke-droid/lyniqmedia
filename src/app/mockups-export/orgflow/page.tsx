import {
  OrgFlowAufgabenMockup,
  OrgFlowDashboardMockup,
  OrgFlowFinanzenMockup,
  OrgFlowKombiMockup,
  OrgFlowMitgliederMockup,
  OrgFlowSchichtenMockup,
} from "@/components/mockups/OrgFlowMockups";

const EXPORTS = [
  { id: "dashboard", Mockup: OrgFlowDashboardMockup, height: 580 },
  { id: "schichten", Mockup: OrgFlowSchichtenMockup, height: 520 },
  { id: "finanzen", Mockup: OrgFlowFinanzenMockup, height: 520 },
  { id: "aufgaben", Mockup: OrgFlowAufgabenMockup, height: 520 },
  { id: "kombi", Mockup: OrgFlowKombiMockup, height: 480 },
  { id: "mitglieder", Mockup: OrgFlowMitgliederMockup, height: 480 },
] as const;

export default function OrgFlowMockupExportPage() {
  return (
    <div
      style={{
        background: "#0c0c0b",
        padding: "32px",
        minHeight: "100vh",
      }}
    >
      {EXPORTS.map(({ id, Mockup, height }) => (
        <div
          key={id}
          id={id}
          data-mockup={id}
          style={{
            width: 900,
            height,
            marginBottom: 32,
            overflow: "hidden",
          }}
        >
          <Mockup bare />
        </div>
      ))}
    </div>
  );
}

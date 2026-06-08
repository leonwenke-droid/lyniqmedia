"use client";

import { MockupScaler } from "@/components/mockups/MockupScaler";
import { ScaledScreenshot } from "@/components/mockups/ScaledScreenshot";
import "./orgflow-mockup.css";

const ORG = "Abitur 2026 · Teletta-Groß-Gymnasium Leer";
const DESIGN_W = 900;

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "schichten", label: "Schichten", icon: "◫" },
  { id: "aufgaben", label: "Aufgaben", icon: "☑" },
  { id: "finanzen", label: "Finanzen", icon: "€" },
  { id: "mitglieder", label: "Mitglieder", icon: "◎" },
] as const;

type NavId = (typeof NAV)[number]["id"];

function Frame({
  children,
  height = 560,
  bare = false,
}: {
  children: React.ReactNode;
  height?: number;
  bare?: boolean;
}) {
  const inner = (
    <div
      role="presentation"
      aria-hidden={true}
      className="of-frame"
      style={bare ? { width: DESIGN_W, height } : undefined}
    >
      {children}
    </div>
  );

  if (bare) return inner;

  return (
    <MockupScaler width={DESIGN_W} height={height}>
      {inner}
    </MockupScaler>
  );
}

function OrgFlowMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1" y="1" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="10" y="1" width="7" height="7" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="1" y="10" width="7" height="7" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="10" y="10" width="7" height="7" rx="2" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

function WindowChrome() {
  return (
    <div className="of-chrome">
      <span className="of-chrome__dot of-chrome__dot--red" />
      <span className="of-chrome__dot of-chrome__dot--yellow" />
      <span className="of-chrome__dot of-chrome__dot--green" />
      <span className="of-chrome__url">app.orgflow.de</span>
    </div>
  );
}

function AppShell({
  active,
  children,
}: {
  active: NavId;
  children: React.ReactNode;
}) {
  return (
    <div className="of-app">
      <aside className="of-sidebar">
        <div className="of-sidebar__logo">
          <div className="of-sidebar__mark">
            <OrgFlowMark size={14} />
          </div>
          <span>OrgFlow</span>
        </div>
        <nav className="of-sidebar__nav">
          {NAV.map((item) => (
            <div
              key={item.id}
              className={`of-sidebar__link ${active === item.id ? "is-active" : ""}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
        <div className="of-sidebar__org">{ORG}</div>
      </aside>
      <main className="of-main">{children}</main>
    </div>
  );
}

function TopBar({
  greeting,
  user,
}: {
  greeting?: string;
  user?: string;
}) {
  return (
    <header className="of-topbar">
      <div>
        {greeting ? <p className="of-topbar__greeting">{greeting}</p> : null}
        {user ? <div className="of-topbar__user">{user}</div> : null}
      </div>
      <div className="of-topbar__actions">
        <button type="button" className="of-icon-btn" aria-hidden>
          ☀
        </button>
        <button type="button" className="of-icon-btn" aria-hidden>
          🔔
        </button>
        <button type="button" className="of-btn of-btn--ghost">
          Log out
        </button>
      </div>
    </header>
  );
}

export function OrgFlowDashboardMockup({ bare = false }: { bare?: boolean } = {}) {
  return (
    <Frame height={580} bare={bare}>
      <WindowChrome />
      <AppShell active="dashboard">
        <TopBar
          greeting="Guten Abend,"
          user="Leon Wenke"
        />
        <p className="of-lead">Hier ist, was heute noch wichtig ist.</p>

        <div className="of-grid of-grid--3">
          <div className="of-card of-card--score">
            <p className="of-label">Dein Score</p>
            <div className="of-score-row">
              <div className="of-ring">
                <strong>847</strong>
                <span>Pkt.</span>
              </div>
              <ul className="of-score-breakdown">
                <li><i className="of-dot of-dot--blue" /> Schichten <b>320 · 38%</b></li>
                <li><i className="of-dot of-dot--green" /> Aufgaben <b>412 · 49%</b></li>
                <li><i className="of-dot of-dot--amber" /> Events <b>115 · 13%</b></li>
              </ul>
            </div>
          </div>
          <div className="of-card">
            <p className="of-label">Rang in der Org</p>
            <strong className="of-stat-lg">#3</strong>
            <span className="of-muted">von 74 Mitgliedern</span>
          </div>
          <div className="of-card">
            <p className="of-label">Offene Aufgaben</p>
            <strong className="of-stat-lg of-stat-lg--amber">5</strong>
            <span className="of-danger-text">1 überfällig</span>
          </div>
        </div>

        <div className="of-grid of-grid--2 of-mt">
          <div className="of-card">
            <p className="of-label">Heute zu tun</p>
            <ul className="of-list">
              <li>Flyer-Druck bei Copyshop freigeben</li>
              <li>Deko-Team für Sa. 14.06. bestätigen</li>
              <li>Getränkeliste an Caterer senden</li>
            </ul>
          </div>
          <div className="of-card">
            <p className="of-label">Kommende Schichten</p>
            <div className="of-shift">
              <strong>Sa 14.06 · Einlass</strong>
              <span>18:00 – 23:00 · 3 Plätze frei</span>
            </div>
            <div className="of-shift">
              <strong>So 15.06 · Bar</strong>
              <span>20:00 – 02:00 · 2 Plätze frei</span>
            </div>
          </div>
        </div>
      </AppShell>
    </Frame>
  );
}

export function OrgFlowSchichtenMockup({ bare = false }: { bare?: boolean } = {}) {
  return (
    <Frame height={520} bare={bare}>
      <WindowChrome />
      <AppShell active="schichten">
        <header className="of-page-header">
          <div>
            <p className="of-label of-label--blue">Schichten</p>
            <h2 className="of-display">Schichtplan Abiball</h2>
          </div>
          <button type="button" className="of-btn of-btn--primary">
            + Schicht
          </button>
        </header>

        <div className="of-grid of-grid--3 of-mt-sm">
          {[
            { title: "Einlass", time: "18:00 – 23:00", free: 3, total: 8, tone: "green" },
            { title: "Catering", time: "17:00 – 22:00", free: 1, total: 6, tone: "amber" },
            { title: "Abbau", time: "02:00 – 04:00", free: 0, total: 5, tone: "red" },
          ].map((shift) => (
            <div key={shift.title} className="of-card">
              <div className="of-shift-card__head">
                <strong>{shift.title}</strong>
                <span className={`of-pill of-pill--${shift.tone}`}>
                  {shift.free} frei
                </span>
              </div>
              <span className="of-muted">{shift.time}</span>
              <div className="of-progress">
                <div
                  className={`of-progress__fill of-progress__fill--${shift.tone}`}
                  style={{ width: `${((shift.total - shift.free) / shift.total) * 100}%` }}
                />
              </div>
              <span className="of-muted">{shift.total - shift.free}/{shift.total} belegt</span>
            </div>
          ))}
        </div>

        <div className="of-card of-mt-sm">
          <p className="of-label">Nächste Einsätze</p>
          <table className="of-table">
            <tbody>
              <tr>
                <td>Sa 14.06.</td>
                <td>Einlass · Haupttor</td>
                <td>Anna M., Tom K., Lisa S.</td>
                <td><span className="of-pill of-pill--blue">Eingetragen</span></td>
              </tr>
              <tr>
                <td>So 15.06.</td>
                <td>Bar · Getränkestation</td>
                <td>Max R., Sarah L.</td>
                <td><span className="of-pill of-pill--green">Bestätigt</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </AppShell>
    </Frame>
  );
}

export function OrgFlowFinanzenMockup({ bare = false }: { bare?: boolean } = {}) {
  return (
    <Frame height={520} bare={bare}>
      <WindowChrome />
      <AppShell active="finanzen">
        <header className="of-page-header">
          <div>
            <p className="of-label of-label--blue">Finanzen</p>
            <h2 className="of-display">Kassenübersicht</h2>
          </div>
          <div className="of-btn-row">
            <button type="button" className="of-btn of-btn--ghost">Export CSV</button>
            <button type="button" className="of-btn of-btn--blue">+ Buchen</button>
          </div>
        </header>

        <div className="of-grid of-grid--3 of-mt-sm">
          <div className="of-card">
            <span className="of-muted">Kontostand</span>
            <strong className="of-stat-md">6.552,32 €</strong>
            <em className="of-caption">Stand: 08. Juni 2026</em>
          </div>
          <div className="of-card">
            <span className="of-muted">Einnahmen (30 Tage)</span>
            <strong className="of-stat-md of-success-text">+4.820,00 €</strong>
            <em className="of-caption">12 Buchungen</em>
          </div>
          <div className="of-card">
            <span className="of-muted">Ausgaben (30 Tage)</span>
            <strong className="of-stat-md of-danger-text">−1.267,68 €</strong>
            <em className="of-caption">8 Buchungen</em>
          </div>
        </div>

        <div className="of-grid of-grid--2 of-mt-sm">
          <div className="of-card">
            <p className="of-label">Verlauf (6 Monate)</p>
            <div className="of-chart">
              {["Jan", "Feb", "Mär", "Apr", "Mai", "Jun"].map((m, i) => {
                const h = [24, 38, 62, 48, 36, 28][i];
                return (
                  <div key={m} className="of-chart__col">
                    <div className="of-chart__bars">
                      <div className="of-chart__bar of-chart__bar--in" style={{ height: `${h}%` }} />
                      <div className="of-chart__bar of-chart__bar--out" style={{ height: `${Math.max(14, h - 18)}%` }} />
                    </div>
                    <span>{m}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="of-card">
            <p className="of-label">Letzte Buchungen</p>
            <table className="of-table of-table--compact">
              <tbody>
                <tr>
                  <td>08.06.</td>
                  <td>Ticketverkauf Abiball</td>
                  <td className="of-success-text">+2.480 €</td>
                </tr>
                <tr>
                  <td>05.06.</td>
                  <td>Location-Anzahlung</td>
                  <td className="of-danger-text">−850 €</td>
                </tr>
                <tr>
                  <td>02.06.</td>
                  <td>Sponsoring Gymnasium</td>
                  <td className="of-success-text">+1.200 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AppShell>
    </Frame>
  );
}

export function OrgFlowAufgabenMockup({ bare = false }: { bare?: boolean } = {}) {
  return (
    <Frame height={520} bare={bare}>
      <WindowChrome />
      <AppShell active="aufgaben">
        <header className="of-page-header">
          <div>
            <p className="of-label of-label--blue">Aufgaben</p>
            <h2 className="of-display">Projektplan Abiball</h2>
          </div>
          <button type="button" className="of-btn of-btn--primary">+ Aufgabe</button>
        </header>

        <div className="of-kanban of-mt-sm">
          {[
            {
              col: "Offen",
              tone: "neutral",
              items: ["Deko-Konzept finalisieren", "DJ-Briefing vorbereiten"],
            },
            {
              col: "In Arbeit",
              tone: "amber",
              items: ["Programmheft Layout", "Social-Media-Kampagne"],
            },
            {
              col: "Erledigt",
              tone: "green",
              items: ["Location reserviert", "Caterer gebucht", "Einladungskarten"],
            },
          ].map((column) => (
            <div key={column.col} className="of-kanban__col">
              <div className="of-kanban__head">
                <span>{column.col}</span>
                <b>{column.items.length}</b>
              </div>
              {column.items.map((item) => (
                <div key={item} className="of-kanban__card">
                  <p>{item}</p>
                  <span className={`of-pill of-pill--${column.tone}`}>
                    {column.col}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </AppShell>
    </Frame>
  );
}

export function OrgFlowKombiMockup({ bare = false }: { bare?: boolean } = {}) {
  return (
    <Frame height={480} bare={bare}>
      <WindowChrome />
      <AppShell active="dashboard">
        <KombiPanelContent />
      </AppShell>
    </Frame>
  );
}

/** Content-only panel for portfolio card (no chrome / sidebar) */
function KombiPanelContent() {
  return (
    <>
      <header className="of-page-header">
        <div>
          <p className="of-label of-label--blue">Admin</p>
          <h2 className="of-display">Master-Kombi-Dashboard</h2>
        </div>
        <span className="of-pill of-pill--green">Score #1 · Lars</span>
      </header>

      <div className="of-grid of-grid--4 of-mt-sm">
        <div className="of-card of-card--stat">
          <strong>74</strong>
          <span>Mitglieder</span>
        </div>
        <div className="of-card of-card--stat">
          <strong>4</strong>
          <span>Schichten frei</span>
        </div>
        <div className="of-card of-card--stat">
          <strong>6.552 €</strong>
          <span>Kontostand</span>
        </div>
        <div className="of-card of-card--stat">
          <strong>847</strong>
          <span>Engagement</span>
        </div>
      </div>

      <div className="of-grid of-grid--2 of-mt-sm">
        <div className="of-card">
          <p className="of-label">Offene Aufgaben</p>
          <ul className="of-task-list">
            <li>
              <i className="of-status of-status--green" />
              Einlasskontrolle <em>09:00–11:00</em>
              <span className="of-pill of-pill--blue">4 frei</span>
            </li>
            <li>
              <i className="of-status of-status--amber" />
              Programmheft Layout <em>Heute</em>
            </li>
            <li>
              <i className="of-status of-status--red" />
              Social-Media-Post
              <span className="of-pill of-pill--red">Dringend</span>
            </li>
          </ul>
        </div>
        <div className="of-card">
          <p className="of-label">Top Mitglieder</p>
          <ul className="of-members">
            <li><span>AM</span> Anna M. <strong>24 Pkt.</strong></li>
            <li><span>TK</span> Tom K. <strong>18 Pkt.</strong></li>
            <li><span>LS</span> Lisa S. <strong>12 Pkt.</strong></li>
            <li><span>MR</span> Max R. <strong>11 Pkt.</strong></li>
          </ul>
        </div>
      </div>
    </>
  );
}

const PANEL_W = 696;
const PANEL_H = 358;

/** Portfolio card slots — PNG screenshots with uniform scaling */
export function OrgFlowAufgabenCardShot() {
  return (
    <ScaledScreenshot
      src="/projects/orgflow/aufgaben.webp"
      alt="OrgFlow Aufgabenverwaltung — OrgFlow SaaS von LYNIQ"
      width={900}
      height={475}
    />
  );
}

export function OrgFlowSchichtenCardShot() {
  return (
    <ScaledScreenshot
      src="/projects/orgflow/schichten.webp"
      alt="OrgFlow Schichtenplanung — OrgFlow SaaS von LYNIQ"
      width={900}
      height={475}
    />
  );
}

export function OrgFlowKombiCardShot() {
  return (
    <ScaledScreenshot
      src="/projects/orgflow/kombi.png"
      alt="OrgFlow Dashboard — Aufgaben- und Schichtenverwaltung für Studentenorganisationen von LYNIQ"
      width={PANEL_W}
      height={PANEL_H}
    />
  );
}

export function OrgFlowMitgliederMockup({ bare = false }: { bare?: boolean } = {}) {
  return (
    <Frame height={480} bare={bare}>
      <WindowChrome />
      <AppShell active="mitglieder">
        <header className="of-page-header">
          <div>
            <p className="of-label of-label--blue">Mitglieder</p>
            <h2 className="of-display">Team Übersicht</h2>
          </div>
          <button type="button" className="of-btn of-btn--blue">+ Einladen</button>
        </header>

        <div className="of-card of-mt-sm">
          <table className="of-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rolle</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Anna M.", "Vorstand", "24", "green", "Aktiv"],
                ["Tom K.", "Schichtleitung", "18", "green", "Aktiv"],
                ["Lisa S.", "Finanzen", "12", "amber", "Eingeladen"],
                ["Max R.", "Mitglied", "11", "green", "Aktiv"],
                ["Sarah L.", "Mitglied", "9", "blue", "Neu"],
              ].map(([name, role, score, tone, status]) => (
                <tr key={name}>
                  <td><strong>{name}</strong></td>
                  <td>{role}</td>
                  <td>{score} Pkt.</td>
                  <td><span className={`of-pill of-pill--${tone}`}>{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppShell>
    </Frame>
  );
}

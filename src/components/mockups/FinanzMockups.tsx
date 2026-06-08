"use client";

import { MockupScaler } from "@/components/mockups/MockupScaler";
import "./finanz-mockup.css";

const W = 1024;
const H = 579;

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "konten", label: "Konten", icon: "◫" },
  { id: "investments", label: "Investments", icon: "↗" },
  { id: "geschaeft", label: "Geschäft", icon: "◆" },
  { id: "transaktionen", label: "Transaktionen", icon: "⇄" },
  { id: "kategorien", label: "Kategorien", icon: "◎" },
  { id: "abos", label: "Abos & Raten", icon: "↻" },
  { id: "analytics", label: "Analytics", icon: "◔" },
  { id: "import", label: "Import", icon: "↓" },
] as const;

type NavId = (typeof NAV)[number]["id"];

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <MockupScaler width={W} height={H}>
      <div className="fin-frame" role="presentation" aria-hidden={true}>
        {children}
      </div>
    </MockupScaler>
  );
}

function Sidebar({ active }: { active: NavId }) {
  return (
    <aside className="fin-sidebar">
      <div className="fin-sidebar__brand">
        <div className="fin-sidebar__logo" />
        <div>
          <strong>Finance</strong>
          <span>Personal Wealth</span>
        </div>
      </div>
      <nav className="fin-sidebar__nav">
        {NAV.map((item) => (
          <div
            key={item.id}
            className={`fin-sidebar__link ${active === item.id ? "is-active" : ""}`}
          >
            <i>{item.icon}</i>
            {item.label}
          </div>
        ))}
      </nav>
      <div className="fin-sidebar__foot">
        <div className="fin-sidebar__avatar">N</div>
        Einstellungen
      </div>
    </aside>
  );
}

function LineChart() {
  return (
    <svg viewBox="0 0 280 72" preserveAspectRatio="none">
      <defs>
        <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,52 L46,48 L92,38 L138,42 L184,28 L230,32 L280,18 L280,72 L0,72 Z"
        fill="url(#finGrad)"
      />
      <path
        d="M0,52 L46,48 L92,38 L138,42 L184,28 L230,32 L280,18"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
      />
    </svg>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="fin-sparkline">
      <path
        d="M0,40 L33,12 L66,48 L99,20 L132,36 L165,8 L200,28"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
      />
      {[0, 33, 66, 99, 132, 165, 200].map((x, i) => {
        const y = [40, 12, 48, 20, 36, 8, 28][i];
        return <circle key={x} cx={x} cy={y} r="3" fill="#22c55e" />;
      })}
    </svg>
  );
}

export function FinanzDashboardMockup() {
  return (
    <Frame>
      <Sidebar active="dashboard" />
      <main className="fin-main">
        <div className="fin-page-title">Dashboard</div>
        <p className="fin-page-sub">Dein finanzieller Überblick — Juni 2026</p>

        <div className="fin-kpi-row">
          {[
            ["Gesamtvermögen", "4.128,90 €", "+4.2%", "green"],
            ["Einnahmen", "412,50 €", "-32,1%", "red"],
            ["Ausgaben", "287,35 €", "-41,2%", "red"],
            ["Sparquote", "32,8%", "+9,5%", "green"],
          ].map(([label, val, badge, tone]) => (
            <div key={label} className="fin-kpi">
              <div className="fin-kpi__label">{label}</div>
              <div className="fin-kpi__value">{val}</div>
              <span className={`fin-badge fin-badge--${tone}`}>{badge}</span>
            </div>
          ))}
        </div>

        <div className="fin-grid-2">
          <div className="fin-card">
            <div className="fin-card__title">Nettovermögen · 4.129,00 €</div>
            <div className="fin-line-chart">
              <LineChart />
            </div>
          </div>
          <div className="fin-card">
            <div className="fin-card__title">Cashflow · Einnahmen vs. Ausgaben</div>
            <div className="fin-bar-chart">
              {["Jan", "Feb", "Mär", "Apr", "Mai", "Jun"].map((m, i) => {
                const inH = [28, 42, 55, 38, 48, 35][i];
                const outH = [22, 30, 40, 28, 32, 24][i];
                return (
                  <div key={m} className="fin-bar-group">
                    <div className="fin-bar fin-bar--in" style={{ height: `${inH}%` }} />
                    <div className="fin-bar fin-bar--out" style={{ height: `${outH}%` }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="fin-grid-3">
          <div className="fin-card">
            <div className="fin-card__title">Ausgaben nach Kategorie</div>
            <div className="fin-donut" />
            <ul className="fin-legend">
              <li><i className="fin-dot" style={{ background: "#ef4444" }} /> Shopping <b>241,20 €</b></li>
              <li><i className="fin-dot" style={{ background: "#14b8a6" }} /> Gesundheit <b>38,50 €</b></li>
              <li><i className="fin-dot" style={{ background: "#f97316" }} /> Essen <b>12,65 €</b></li>
            </ul>
          </div>
          <div className="fin-card">
            <div className="fin-card__title">Kontostände</div>
            <ul className="fin-list">
              <li><span className="fin-list__icon">₿</span><span className="fin-list__meta"><strong>Krypto</strong><span>Wallet</span></span><span className="fin-list__amount">3.284,50 €</span></li>
              <li><span className="fin-list__icon">🏦</span><span className="fin-list__meta"><strong>Girokonto</strong><span>Sparkasse</span></span><span className="fin-list__amount">562,30 €</span></li>
              <li><span className="fin-list__icon">📈</span><span className="fin-list__meta"><strong>Depot</strong><span>Scalable</span></span><span className="fin-list__amount">218,10 €</span></li>
              <li><span className="fin-list__icon">💵</span><span className="fin-list__meta"><strong>Bargeld</strong><span>CASH</span></span><span className="fin-list__amount">64,00 €</span></li>
            </ul>
          </div>
          <div className="fin-card">
            <div className="fin-card__title">Letzte Transaktionen</div>
            <ul className="fin-list">
              <li><span className="fin-list__icon">🍔</span><span className="fin-list__meta"><strong>McDonald&apos;s</strong><span>03.06. · Essen</span></span><span className="fin-list__amount fin-list__amount--neg">-7,45 €</span></li>
              <li><span className="fin-list__icon">🛒</span><span className="fin-list__meta"><strong>MULTI NORD</strong><span>03.06. · Essen</span></span><span className="fin-list__amount fin-list__amount--neg">-2,90 €</span></li>
              <li><span className="fin-list__icon">📦</span><span className="fin-list__meta"><strong>Klarna</strong><span>02.06. · Shopping</span></span><span className="fin-list__amount fin-list__amount--neg">-231,80 €</span></li>
            </ul>
          </div>
        </div>
      </main>
    </Frame>
  );
}

export function FinanzTransactionsMockup() {
  return (
    <Frame>
      <Sidebar active="transaktionen" />
      <main className="fin-main">
        <div className="fin-topbar">
          <div>
            <div className="fin-page-title">Transaktionen</div>
            <p className="fin-page-sub" style={{ margin: 0 }}>602 von 602 Buchungen</p>
          </div>
          <button type="button" className="fin-btn">+ Transaktion</button>
        </div>

        <div className="fin-search-row">
          <div className="fin-search">🔍 Buchungen suchen…</div>
          <div className="fin-filter">Alle Typen ▾</div>
          <div className="fin-filter">Alle Kategorien ▾</div>
          <div className="fin-ai-btn">✦ KI für offene</div>
        </div>

        {[
          {
            day: "Gestern",
            total: "-10,85 €",
            items: [
              ["🛍", "Bank AB Sveavagen 46", "Shopping · csv-import", "-7,45 €", "red"],
              ["🍽", "MULTI NORD", "Essen · sparkasse", "-2,90 €", "orange"],
            ],
          },
          {
            day: "Di. 02.06.",
            total: "+189,20 €",
            items: [
              ["🍽", "cBox 1701", "Essen", "-4,20 €", "orange"],
              ["🛍", "Klarna", "Shopping", "-231,80 €", "red"],
              ["💼", "TANJA BOELTS", "Gehalt · sparkasse", "+425,10 €", "blue"],
            ],
          },
        ].map((group) => (
          <div key={group.day} className="fin-day-group">
            <div className="fin-day-head">
              <span>{group.day}</span>
              <span>{group.total}</span>
            </div>
            {group.items.map(([icon, title, meta, amount, tone]) => (
              <div key={title} className="fin-tx">
                <div className={`fin-tx__icon fin-tx__icon--${tone}`}>{icon}</div>
                <div className="fin-list__meta">
                  <strong>{title}</strong>
                  <span>{meta}</span>
                </div>
                <span className={`fin-list__amount ${amount.startsWith("+") ? "fin-list__amount--pos" : "fin-list__amount--neg"}`}>
                  {amount}
                </span>
              </div>
            ))}
          </div>
        ))}
      </main>
    </Frame>
  );
}

export function FinanzAnalyticsMockup() {
  return (
    <Frame>
      <Sidebar active="analytics" />
      <main className="fin-main">
        <div className="fin-page-title">Analytics</div>
        <p className="fin-page-sub">Detaillierte Auswertung deiner Finanzen</p>

        <div className="fin-ai-card">
          <div className="fin-ai-card__left">
            <div className="fin-ai-card__icon">✦</div>
            <div>
              <strong style={{ display: "block", fontSize: 11 }}>KI Analyse</strong>
              <span style={{ fontSize: 9, color: "#737373" }}>
                Noch keine Analyse für die aktuellen Daten erstellt.
              </span>
            </div>
          </div>
          <button type="button" className="fin-ai-btn">Analyse starten</button>
        </div>

        <div className="fin-grid-2">
          <div className="fin-card">
            <div className="fin-card__title">Größte Ausgaben</div>
            <div className="fin-hbar-chart">
              {[
                ["Shopping", 88, "#ef4444"],
                ["Business", 62, "#3b82f6"],
                ["Essen", 48, "#f97316"],
                ["Abos", 32, "#a855f7"],
                ["Gesundheit", 18, "#14b8a6"],
              ].map(([label, w, color]) => (
                <div key={label} className="fin-hbar">
                  <span className="fin-hbar__label">{label}</span>
                  <div className="fin-hbar__track">
                    <div className="fin-hbar__fill" style={{ width: `${w}%`, background: color as string }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fin-card">
            <div className="fin-card__title">Spartrend</div>
            <Sparkline />
          </div>
        </div>

        <div className="fin-card" style={{ marginTop: 10 }}>
          <div className="fin-card__title">Erkannte Fixkosten</div>
          {[
            ["ChatGPT Plus", "Erwartet", "Monatlich", "19,99 €"],
            ["Claude Pro", "Erwartet", "Monatlich", "20,50 €"],
            ["Cursor AI", "Erwartet", "Monatlich", "19,80 €"],
            ["Finion Capital GmbH", "Zugeordnet", "Monatlich · 01.07.", "32,49 €"],
            ["Lexware", "Erwartet", "Monatlich", "20,90 €"],
          ].map(([name, tag, freq, amount]) => (
            <div key={name} className="fin-fixed-row">
              <div>
                <strong>{name}</strong>
                <div style={{ marginTop: 2 }}>
                  <span className={`fin-tag ${tag === "Zugeordnet" ? "fin-tag--green" : ""}`}>{tag}</span>
                  <span style={{ marginLeft: 6, color: "#737373", fontSize: 9 }}>{freq}</span>
                </div>
              </div>
              <strong>{amount}</strong>
            </div>
          ))}
        </div>
      </main>
    </Frame>
  );
}

export function FinanzDashboardCardShot() {
  return <FinanzDashboardMockup />;
}

export function FinanzTransactionsCardShot() {
  return <FinanzTransactionsMockup />;
}

export function FinanzAnalyticsCardShot() {
  return <FinanzAnalyticsMockup />;
}

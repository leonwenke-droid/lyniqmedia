"use client";

import { MockupScaler } from "@/components/mockups/MockupScaler";

const LANDING_SIZE = { width: 960, height: 720 };
const DASHBOARD_SIZE = { width: 1280, height: 800 };
const VOICE_SIZE = { width: 960, height: 620 };

export function FahrschuleDashboardCardShot() {
  const bg = "#0d1117";
  const sidebarBg = "#090d13";
  const cardBg = "rgba(255,255,255,0.04)";
  const border = "1px solid rgba(255,255,255,0.07)";
  const textPrimary = "#f1f5f9";
  const textSecondary = "#94a3b8";
  const textMuted = "#475569";
  const accent = "#2563eb";
  const accentLight = "#60a5fa";

  return (
    <div
      className="fahrschule-dashboard-shot"
      role="presentation"
      aria-hidden={true}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <MockupScaler
        width={DASHBOARD_SIZE.width}
        height={DASHBOARD_SIZE.height}
        background={bg}
        fit="cover"
        align="center"
        position="top"
      >
        <div
          style={{
            width: DASHBOARD_SIZE.width,
            height: DASHBOARD_SIZE.height,
            overflow: "hidden",
            background: bg,
            fontFamily: 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif',
            display: "flex",
            flexDirection: "column",
          }}
        >
        {/* Top bar */}
        <div
          style={{
            background: sidebarBg,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            height: 44,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: textPrimary,
                letterSpacing: "-0.02em",
              }}
            >
              DriveLeads <span style={{ color: accent }}>AI</span>
            </span>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flex: 1,
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              width: 210,
              background: sidebarBg,
              borderRight: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              padding: "16px 0",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                padding: "0 8px",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#334155",
                marginBottom: 8,
                paddingLeft: 16,
              }}
            >
              Hauptmenü
            </div>
            {[
              { label: "Übersicht", active: true, badge: null },
              { label: "Leads", active: false, badge: "128" },
              { label: "Termine", active: false, badge: null },
              { label: "Chatverläufe", active: false, badge: null },
              { label: "Statistiken", active: false, badge: null },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 16px",
                  margin: "1px 8px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: item.active ? accentLight : "#64748b",
                  background: item.active
                    ? "rgba(37,99,235,0.15)"
                    : "transparent",
                  fontWeight: item.active ? 500 : 400,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 3,
                    background: item.active
                      ? "rgba(37,99,235,0.3)"
                      : "rgba(255,255,255,0.06)",
                    flexShrink: 0,
                  }}
                />
                {item.label}
                {item.badge && (
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "rgba(37,99,235,0.2)",
                      color: accentLight,
                      borderRadius: 100,
                      padding: "1px 7px",
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.05)",
                margin: "10px 16px",
              }}
            />
            <div
              style={{
                padding: "0 8px",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#334155",
                marginBottom: 8,
                paddingLeft: 16,
              }}
            >
              KI Tools
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 16px",
                margin: "1px 8px",
                borderRadius: 8,
                fontSize: 13,
                color: "#64748b",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.06)",
                  flexShrink: 0,
                }}
              />
              KI Voice Agent
              <span
                style={{
                  marginLeft: "auto",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  flexShrink: 0,
                }}
              />
            </div>
            <div
              style={{
                marginTop: "auto",
                padding: "14px 16px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#1e3a5f,#2563eb)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  FM
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: textPrimary,
                    }}
                  >
                    Fahrschule Müller
                  </div>
                  <div style={{ fontSize: 11, color: textMuted }}>Pro Plan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              flex: 1,
              background: bg,
              overflow: "hidden",
              padding: 26,
              minHeight: 0,
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    color: textPrimary,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Übersicht
                </div>
                <div style={{ fontSize: 12, color: textMuted, marginTop: 2 }}>
                  Letzte 30 Tage · Aktualisiert vor 2 Min.
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border,
                    borderRadius: 8,
                    padding: "7px 13px",
                    fontSize: 12,
                    color: textSecondary,
                  }}
                >
                  📅 Letzten 30 Tage
                </div>
                <div
                  style={{
                    background: accent,
                    borderRadius: 8,
                    padding: "7px 14px",
                    fontSize: 12,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  + Neuer Lead
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
                marginBottom: 20,
              }}
            >
              {[
                { label: "Neue Leads", value: "128", pct: "+18%" },
                { label: "Qualifizierte Leads", value: "72", pct: "+25%" },
                { label: "Gebuchte Termine", value: "45", pct: "+12%" },
                { label: "Einschreibungen", value: "23", pct: "+28%" },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "#64748b",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      color: textPrimary,
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    {c.value}
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <span
                      style={{
                        background: "rgba(34,197,94,0.15)",
                        color: "#4ade80",
                        border: "1px solid rgba(34,197,94,0.2)",
                        borderRadius: 100,
                        padding: "2px 8px",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      ↑ {c.pct}
                    </span>
                    <span style={{ fontSize: 11, color: textMuted }}>
                      vs. Vormonat
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: 14,
                marginBottom: 20,
              }}
            >
              {/* Line chart card */}
              <div
                style={{
                  background: cardBg,
                  border,
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: textPrimary,
                      }}
                    >
                      Leads über Zeit
                    </div>
                    <div
                      style={{ fontSize: 11, color: textMuted, marginTop: 2 }}
                    >
                      Tägliche Leads im November 2024
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 5 }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 3,
                          background: accent,
                          borderRadius: 2,
                          display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: 11, color: "#64748b" }}>
                        Gesamt
                      </span>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 5 }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 3,
                          background: "#4ade80",
                          borderRadius: 2,
                          display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: 11, color: "#64748b" }}>
                        Qualifiziert
                      </span>
                    </div>
                  </div>
                </div>
                {/* SVG line chart */}
                <svg
                  viewBox="0 0 460 160"
                  width="100%"
                  height="160"
                  style={{ overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#2563eb"
                        stopOpacity="0.18"
                      />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#4ade80"
                        stopOpacity="0.12"
                      />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[0, 40, 80, 120, 160].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="460"
                      y2={y}
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                  ))}
                  {/* Blue area */}
                  <path
                    d="M0,140 C20,135 30,128 60,122 C80,118 100,110 120,105 C140,100 155,93 180,85 C200,78 220,72 240,62 C260,52 275,48 300,38 C320,30 340,24 360,18 C380,12 400,8 420,5 C440,3 455,2 460,2 L460,160 L0,160 Z"
                    fill="url(#gBlue)"
                  />
                  <path
                    d="M0,140 C20,135 30,128 60,122 C80,118 100,110 120,105 C140,100 155,93 180,85 C200,78 220,72 240,62 C260,52 275,48 300,38 C320,30 340,24 360,18 C380,12 400,8 420,5 C440,3 455,2 460,2"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Green area */}
                  <path
                    d="M0,152 C20,148 40,144 60,140 C90,135 110,128 140,122 C165,117 185,112 210,105 C235,98 255,90 280,82 C305,74 325,66 350,58 C375,50 400,44 430,38 C445,35 455,32 460,30 L460,160 L0,160 Z"
                    fill="url(#gGreen)"
                  />
                  <path
                    d="M0,152 C20,148 40,144 60,140 C90,135 110,128 140,122 C165,117 185,112 210,105 C235,98 255,90 280,82 C305,74 325,66 350,58 C375,50 400,44 430,38 C445,35 455,32 460,30"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* X axis labels */}
                  {["1 Nov", "5", "9", "13", "17", "21", "25", "29 Nov"].map(
                    (label, i) => (
                      <text
                        key={label}
                        x={i * 66}
                        y="175"
                        fill="#475569"
                        fontSize="10"
                        fontFamily='var(--font-dm-sans), "DM Sans", sans-serif'
                        textAnchor="middle"
                      >
                        {label}
                      </text>
                    ),
                  )}
                  {/* Y axis labels */}
                  {["0", "5", "10", "15", "20"].map((label, i) => (
                    <text
                      key={label}
                      x="-6"
                      y={160 - i * 40 + 4}
                      fill="#475569"
                      fontSize="10"
                      fontFamily='var(--font-dm-sans), "DM Sans", sans-serif'
                      textAnchor="end"
                    >
                      {label}
                    </text>
                  ))}
                </svg>
              </div>

              {/* Donut chart card */}
              <div
                style={{
                  background: cardBg,
                  border,
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: textPrimary,
                    marginBottom: 2,
                  }}
                >
                  Leads nach Quelle
                </div>
                <div
                  style={{ fontSize: 11, color: textMuted, marginBottom: 14 }}
                >
                  Letzten 30 Tage
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <svg viewBox="0 0 140 140" width="130" height="130">
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="20"
                    />
                    {/* Website 52% */}
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="20"
                      strokeDasharray="176.43 162.86"
                      strokeDashoffset="0"
                      strokeLinecap="butt"
                      transform="rotate(-90 70 70)"
                    />
                    {/* Google 24% */}
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="20"
                      strokeDasharray="81.43 257.86"
                      strokeDashoffset="-176.43"
                      strokeLinecap="butt"
                      transform="rotate(-90 70 70)"
                    />
                    {/* Instagram 15% */}
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="20"
                      strokeDasharray="50.89 288.40"
                      strokeDashoffset="-257.86"
                      strokeLinecap="butt"
                      transform="rotate(-90 70 70)"
                    />
                    {/* Facebook 9% */}
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="20"
                      strokeDasharray="30.54 308.75"
                      strokeDashoffset="-308.75"
                      strokeLinecap="butt"
                      transform="rotate(-90 70 70)"
                    />
                    <circle cx="70" cy="70" r="44" fill="#0d1117" />
                    <text
                      x="70"
                      y="66"
                      textAnchor="middle"
                      fill="#f1f5f9"
                      fontSize="18"
                      fontWeight="700"
                      fontFamily='var(--font-dm-sans), "DM Sans", sans-serif'
                    >
                      128
                    </text>
                    <text
                      x="70"
                      y="80"
                      textAnchor="middle"
                      fill="#475569"
                      fontSize="9"
                      fontFamily='var(--font-dm-sans), "DM Sans", sans-serif'
                    >
                      Leads total
                    </text>
                  </svg>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                    }}
                  >
                    {[
                      {
                        color: "#2563eb",
                        label: "Website",
                        count: "66",
                        pct: "52%",
                      },
                      {
                        color: "#8b5cf6",
                        label: "Google Ads",
                        count: "31",
                        pct: "24%",
                      },
                      {
                        color: "#ec4899",
                        label: "Instagram",
                        count: "19",
                        pct: "15%",
                      },
                      {
                        color: "#f97316",
                        label: "Facebook",
                        count: "12",
                        pct: "9%",
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 7,
                          }}
                        >
                          <span
                            style={{
                              width: 9,
                              height: 9,
                              borderRadius: 3,
                              background: row.color,
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ fontSize: 12, color: textSecondary }}>
                            {row.label}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: textPrimary,
                            }}
                          >
                            {row.count}
                          </span>
                          <span style={{ fontSize: 11, color: textMuted }}>
                            {row.pct}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div
              style={{
                background: cardBg,
                border,
                borderRadius: 12,
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: textPrimary,
                    }}
                  >
                    Letzte Leads
                  </div>
                  <div style={{ fontSize: 11, color: textMuted, marginTop: 2 }}>
                    Aktuellste Anfragen
                  </div>
                </div>
                <div
                  style={{
                    background: "transparent",
                    border,
                    borderRadius: 7,
                    padding: "5px 11px",
                    fontSize: 12,
                    color: "#64748b",
                  }}
                >
                  Alle anzeigen →
                </div>
              </div>
              {/* Table header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.8fr 1fr 1.2fr 1fr 1fr",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  paddingBottom: 7,
                  marginBottom: 2,
                }}
              >
                {["Name", "Quelle", "Anfrage", "Status", "Erhalten am"].map(
                  (h) => (
                    <div
                      key={h}
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: textMuted,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "0 10px",
                      }}
                    >
                      {h}
                    </div>
                  ),
                )}
              </div>
              {/* Rows */}
              {[
                {
                  initials: "LM",
                  bg: "linear-gradient(135deg,#1e3a5f,#2563eb)",
                  name: "Laura Maier",
                  email: "l.maier@gmail.com",
                  source: "Website Chat",
                  type: "Klasse B, Intensivkurs",
                  status: "Termin gebucht",
                  statusColor: "#facc15",
                  statusBg: "rgba(234,179,8,0.12)",
                  date: "Heute, 14:32",
                },
                {
                  initials: "KS",
                  bg: "linear-gradient(135deg,#1a2d4a,#8b5cf6)",
                  name: "Kevin Schmidt",
                  email: "k.schmidt@web.de",
                  source: "Google Ads",
                  type: "Klasse A, Motorrad",
                  status: "Qualifiziert",
                  statusColor: "#4ade80",
                  statusBg: "rgba(34,197,94,0.12)",
                  date: "Heute, 11:17",
                },
                {
                  initials: "AT",
                  bg: "linear-gradient(135deg,#1a2d2a,#16a34a)",
                  name: "Anna Thoma",
                  email: "anna.t@outlook.com",
                  source: "Instagram",
                  type: "Klasse B, Standard",
                  status: "Eingeschrieben",
                  statusColor: "#c084fc",
                  statusBg: "rgba(168,85,247,0.12)",
                  date: "Gestern, 16:05",
                },
                {
                  initials: "FK",
                  bg: "linear-gradient(135deg,#2d1a1a,#dc2626)",
                  name: "Felix Koch",
                  email: "f.koch@gmail.com",
                  source: "Facebook",
                  type: "Klasse BE, Anhänger",
                  status: "Neu",
                  statusColor: "#60a5fa",
                  statusBg: "rgba(37,99,235,0.15)",
                  date: "Gestern, 09:44",
                },
                {
                  initials: "MR",
                  bg: "linear-gradient(135deg,#1a1a2d,#7c3aed)",
                  name: "Marie Richter",
                  email: "marie.r@gmx.de",
                  source: "Voice Agent",
                  type: "Klasse B, Automatik",
                  status: "Qualifiziert",
                  statusColor: "#4ade80",
                  statusBg: "rgba(34,197,94,0.12)",
                  date: "02.12.2024",
                },
              ].map((row) => (
                <div
                  key={row.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.8fr 1fr 1.2fr 1fr 1fr",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "11px 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: row.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {row.initials}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: textPrimary,
                        }}
                      >
                        {row.name}
                      </div>
                      <div style={{ fontSize: 10, color: textMuted }}>
                        {row.email}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "11px 10px",
                      fontSize: 12,
                      color: textSecondary,
                    }}
                  >
                    {row.source}
                  </div>
                  <div
                    style={{
                      padding: "11px 10px",
                      fontSize: 12,
                      color: textSecondary,
                    }}
                  >
                    {row.type}
                  </div>
                  <div style={{ padding: "11px 10px" }}>
                    <span
                      style={{
                        background: row.statusBg,
                        color: row.statusColor,
                        borderRadius: 100,
                        padding: "3px 9px",
                        fontSize: 11,
                        fontWeight: 500,
                      }}
                    >
                      {row.status}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "11px 10px",
                      fontSize: 12,
                      color: textMuted,
                    }}
                  >
                    {row.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </MockupScaler>
    </div>
  );
}

export function FahrschuleLandingCardShot() {
  const border = "1px solid rgba(255,255,255,0.07)";
  const cardBg = "rgba(255,255,255,0.04)";

  return (
    <div
      className="fahrschule-landing-shot"
      role="presentation"
      aria-hidden={true}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <MockupScaler
        width={LANDING_SIZE.width}
        height={LANDING_SIZE.height}
        background="#0d1117"
        fit="cover"
        align="center"
        position="top"
      >
        <div
          style={{
            width: LANDING_SIZE.width,
            height: LANDING_SIZE.height,
            background: "#0d1117",
            fontFamily: 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif',
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "14px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: border,
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: "#2563eb",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                D
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
                DriveLeads AI
              </span>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {["Funktionen", "Preise", "Über uns", "Login"].map((l) => (
                <span key={l} style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                  {l}
                </span>
              ))}
            </div>
            <div
              style={{
                background: "#2563eb",
                color: "#fff",
                borderRadius: 6,
                padding: "8px 14px",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Kostenlos testen
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              flex: "1 1 auto",
              minHeight: 0,
            }}
          >
            <div
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.3)",
                  borderRadius: 999,
                  padding: "4px 12px",
                  fontSize: 10,
                  color: "#60a5fa",
                  display: "inline-flex",
                  marginBottom: 16,
                  width: "fit-content",
                }}
              >
                Fahrschul-Lead-Generierung mit KI
              </div>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.12,
                  marginBottom: 6,
                }}
              >
                Mehr Anfragen.
              </div>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#2563eb",
                  lineHeight: 1.12,
                  marginBottom: 14,
                }}
              >
                Mehr Schüler. Weniger Aufwand.
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                  maxWidth: 360,
                }}
              >
                KI-Chatbot und Voice Agent beantworten Anfragen, qualifizieren Leads und
                buchen Termine — auch während der Fahrstunde.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[
                  ["💬", "Chatbot", "24/7 auf der Website"],
                  ["📞", "Voice Agent", "Anrufe automatisch"],
                  ["📈", "Dashboard", "Leads im Blick"],
                ].map(([icon, title, desc]) => (
                  <div key={title}>
                    <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#60a5fa",
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", overflow: "hidden" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #1a2332 0%, #0d1117 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: 72, opacity: 0.12 }}>🚗</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "#fff",
                  borderRadius: 12,
                  padding: 14,
                  width: 210,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#1a1a1a" }}>
                      Fahrschule Müller
                    </div>
                    <div style={{ fontSize: 8, color: "#666" }}>AI Assistant</div>
                  </div>
                  <div style={{ fontSize: 14, color: "#999" }}>×</div>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#333",
                    marginBottom: 10,
                    lineHeight: 1.5,
                  }}
                >
                  Hallo! 👋
                  <br />
                  Wie kann ich dir helfen?
                </div>
                {["Führerscheinklassen", "Preise & Angebote", "Termin vereinbaren"].map(
                  (opt) => (
                    <div
                      key={opt}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 6,
                        padding: "6px 8px",
                        fontSize: 9,
                        color: "#2563eb",
                        marginBottom: 4,
                        textAlign: "center",
                      }}
                    >
                      {opt}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              padding: "16px 24px",
              borderTop: border,
              flexShrink: 0,
            }}
          >
            {[
              ["128", "Leads gesamt"],
              ["72", "Qualifiziert"],
              ["45", "Termine"],
              ["24/7", "Erreichbar"],
            ].map(([val, label]) => (
              <div
                key={label}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: 8,
                  padding: "12px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 700, color: "#60a5fa" }}>{val}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "14px 24px 18px",
              borderTop: border,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
              background: "rgba(37,99,235,0.08)",
            }}
          >
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
              Bereit für mehr Fahrschüler ohne Extra-Aufwand?
            </span>
            <span
              style={{
                background: "#2563eb",
                color: "#fff",
                borderRadius: 6,
                padding: "8px 16px",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Demo anfragen →
            </span>
          </div>
        </div>
      </MockupScaler>
    </div>
  );
}

const VOICE_WAVE_HEIGHTS = Array.from({ length: 30 }, (_, i) =>
  Math.round(8 + Math.abs(Math.sin(i * 0.5)) * 12 + (i % 4) * 2),
);

export function FahrschuleVoiceAgentCardShot() {
  return (
    <div
      className="fahrschule-voice-shot"
      role="presentation"
      aria-hidden={true}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <MockupScaler
        width={VOICE_SIZE.width}
        height={VOICE_SIZE.height}
        background="#0d1117"
        fit="cover"
        align="center"
        position="top"
      >
        <div
          style={{
            width: VOICE_SIZE.width,
            height: VOICE_SIZE.height,
            overflow: "hidden",
            background: "#0d1117",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
        <div style={{width:'160px',background:'#090d13',borderRight:'1px solid rgba(255,255,255,0.06)',padding:'16px 12px',flexShrink:0}}>
          <div style={{display:'flex',alignItems:'center',gap:'6px',marginBottom:'20px'}}>
            <div style={{width:'18px',height:'18px',background:'#2563eb',borderRadius:'3px',fontSize:'8px',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>D</div>
            <span style={{fontSize:'11px',fontWeight:700,color:'#fff'}}>DriveLeads AI</span>
          </div>
          {[['🏠','Übersicht'],['📞','Anrufe'],['👥','Leads'],['📅','Termine'],['🤖','KI Voice Agent']].map(([icon,label])=>(
            <div key={label} style={{padding:'8px 10px',borderRadius:'6px',marginBottom:'2px',background:label==='KI Voice Agent'?'rgba(37,99,235,0.15)':'transparent',display:'flex',gap:'6px',alignItems:'center'}}>
              <span style={{fontSize:'10px'}}>{icon}</span>
              <span style={{fontSize:'10px',color:label==='KI Voice Agent'?'#60a5fa':'rgba(255,255,255,0.4)'}}>{label}</span>
            </div>
          ))}
        </div>
        <div style={{flex:1,padding:'20px',overflow:'hidden'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'16px'}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'4px'}}>
                <div style={{fontSize:'16px',fontWeight:700,color:'#fff'}}>KI Voice Agent</div>
                <div style={{background:'rgba(34,197,94,0.15)',border:'1px solid rgba(34,197,94,0.3)',borderRadius:'999px',padding:'2px 8px',fontSize:'9px',color:'#22c55e'}}>● Aktiv</div>
              </div>
              <div style={{fontSize:'10px',color:'rgba(255,255,255,0.4)'}}>Dein KI Voice Agent telefoniert mit Interessenten automatisch.</div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'8px',padding:'14px'}}>
              <div style={{fontSize:'11px',fontWeight:600,color:'#fff',marginBottom:'12px'}}>Agent Vorschau</div>
              <div style={{display:'flex',alignItems:'center',gap:'2px',height:'32px',marginBottom:'12px'}}>
                {VOICE_WAVE_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 3,
                      height: h,
                      background: "#2563eb",
                      borderRadius: 1,
                      opacity: 0.8,
                    }}
                  />
                ))}
              </div>
              <div style={{background:'rgba(255,255,255,0.04)',borderRadius:'6px',padding:'10px',marginBottom:'8px'}}>
                {[['Agent:','Guten Tag! Hier ist die Fahrschule Müller.'],['Interessent:','Ich interessiere mich für den Führerschein.'],['Agent:','Sehr gerne! Klasse B ist eine gute Wahl!']].map(([who,text],i)=>(
                  <div key={i} style={{marginBottom:'6px'}}>
                    <span style={{fontSize:'9px',fontWeight:700,color:i%2===0?'#60a5fa':'rgba(255,255,255,0.6)'}}>{who} </span>
                    <span style={{fontSize:'9px',color:'rgba(255,255,255,0.5)'}}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'8px',padding:'14px'}}>
              <div style={{fontSize:'11px',fontWeight:600,color:'#fff',marginBottom:'12px'}}>Agent Einstellungen</div>
              {[['Stimme','Anna (Weiblich)'],['Sprache','Deutsch'],['Verhalten','Freundlich & Professionell'],['Verfügbarkeit','Mo - So, 08:00 - 20:00']].map(([l,v])=>(
                <div key={l} style={{marginBottom:'8px'}}>
                  <div style={{fontSize:'9px',color:'rgba(255,255,255,0.4)',marginBottom:'3px'}}>{l}</div>
                  <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'4px',padding:'6px 8px',fontSize:'10px',color:'rgba(255,255,255,0.7)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>{v}<span style={{color:'rgba(255,255,255,0.3)'}}>∨</span></div>
                </div>
              ))}
              <div style={{background:'#2563eb',borderRadius:'6px',padding:'8px',textAlign:'center',fontSize:'11px',fontWeight:600,color:'#fff',marginTop:'8px'}}>Testanruf starten</div>
            </div>
          </div>
        </div>
        </div>
      </MockupScaler>
    </div>
  );
}

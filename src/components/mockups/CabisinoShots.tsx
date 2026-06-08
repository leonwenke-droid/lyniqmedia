"use client";

import type { CSSProperties, ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";

const T = {
  gold: "#C9A227",
  goldLight: "#e8c84a",
  goldMuted: "#a07d15",
  cream: "#f0ead6",
  creamMuted: "#c8bfa8",
  surface: "#080f0a",
  felt: "#0d1810",
  feltBorder: "rgba(201, 162, 39, 0.18)",
  inputBg: "rgba(201, 162, 39, 0.06)",
  inputBorder: "rgba(201, 162, 39, 0.2)",
  red: "#ef4444",
  serif: 'var(--font-sora), "Sora", system-ui, sans-serif',
  sans: 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif',
} as const;

const MOCK = {
  vorname: "Leon",
  nachname: "Wenke",
  guests: ["Max Mustermann", "Erika Musterfrau"],
  totalPersons: 3,
  totalPrice: 192,
  pricePerPerson: 64,
  ticketId: "020ebd31-dfa0-4bb6-b8c4-dbfe992b266b",
  dates: [
    { date: "01.06.", done: true },
    { date: "11.06.", done: false },
    { date: "15.06.", done: false },
    { date: "17.06.", done: false },
  ],
};

const SUITS = ["♠", "♥", "♦", "♣"];

function ScaledFrame({ children }: { children: ReactNode }) {
  return (
    <div
      role="presentation"
      aria-hidden={true}
      className="cabisino-shot"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: T.surface,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div className="cabisino-shot__stage" style={{ width: 390, minHeight: 720 }}>
        {children}
      </div>
    </div>
  );
}

function FeltCard({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        backgroundColor: T.felt,
        border: `1px solid ${T.feltBorder}`,
        borderRadius: 16,
        padding: "24px 20px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px), repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

function GoldButton({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "14px 0",
        borderRadius: 12,
        background: `linear-gradient(135deg, #b8891e 0%, ${T.gold} 40%, ${T.goldLight} 60%, ${T.gold} 100%)`,
        color: "#0a0a0f",
        fontFamily: T.sans,
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        letterSpacing: "0.02em",
        boxShadow: "0 4px 24px rgba(201,162,39,0.25)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function InputMock({ value }: { value: string }) {
  return (
    <div
      style={{
        background: T.inputBg,
        border: `1px solid ${T.inputBorder}`,
        borderRadius: 8,
        padding: "10px 12px",
        color: T.cream,
        fontFamily: T.sans,
        fontSize: 14,
      }}
    >
      {value}
    </div>
  );
}

function ScreenShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100%",
        backgroundColor: T.surface,
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 5px), repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 5px)",
        padding: "28px 18px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 280,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,162,39,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "4%",
          left: "-8%",
          fontSize: 140,
          color: T.gold,
          opacity: 0.03,
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        ♠
      </span>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

function FooterMock() {
  return (
    <p
      style={{
        marginTop: 20,
        textAlign: "center",
        fontFamily: T.sans,
        fontSize: 12,
        color: T.creamMuted,
      }}
    >
      Powered by{" "}
      <span style={{ color: T.gold, fontWeight: 500 }}>LYNIQ Media</span>
    </p>
  );
}

function NameStepMock() {
  return (
    <ScreenShell>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            color: "rgba(201,162,39,0.6)",
            fontSize: 18,
            marginBottom: 16,
          }}
        >
          {SUITS.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div
          style={{
            margin: 0,
            fontFamily: T.serif,
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1,
            background: `linear-gradient(135deg, #b8891e 0%, ${T.gold} 35%, ${T.goldLight} 55%, ${T.gold} 80%, #b8891e 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Cabisino
        </div>
        <p
          style={{
            margin: "10px 0 0",
            fontFamily: T.sans,
            fontSize: 13,
            color: T.creamMuted,
            letterSpacing: "0.04em",
          }}
        >
          13 Jahre Pokern für den Jackpot
        </p>
        <p
          style={{
            margin: "6px 0 0",
            fontFamily: T.sans,
            fontSize: 12,
            color: "rgba(201,162,39,0.75)",
            letterSpacing: "0.06em",
          }}
        >
          Digitale Gästeliste · Voranmeldung
        </p>
        <div
          style={{
            margin: "14px auto 0",
            width: 96,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
          }}
        />
      </div>

      <div style={{ marginBottom: 22 }}>
        <p
          style={{
            textAlign: "center",
            fontFamily: T.sans,
            fontSize: 11,
            color: T.creamMuted,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}
        >
          Voranmeldung · Verkaufstermine
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          {MOCK.dates.map(({ date, done }) => (
            <span
              key={date}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                fontSize: 13,
                fontFamily: T.sans,
                border: `1px solid ${done ? "rgba(201,162,39,0.1)" : "rgba(201,162,39,0.3)"}`,
                background: done ? "rgba(0,0,0,0.1)" : "rgba(201,162,39,0.1)",
                color: done ? "rgba(200,191,168,0.3)" : T.gold,
                textDecoration: done ? "line-through" : "none",
              }}
            >
              {date}
            </span>
          ))}
        </div>
      </div>

      <FeltCard>
        <p
          style={{
            textAlign: "center",
            fontFamily: T.sans,
            fontSize: 11,
            color: T.creamMuted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: "0 0 18px",
          }}
        >
          Voranmeldung
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <div>
            <label
              style={{
                display: "block",
                fontFamily: T.sans,
                fontSize: 11,
                color: T.creamMuted,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 6,
              }}
            >
              Vorname <span style={{ color: T.gold }}>*</span>
            </label>
            <InputMock value={MOCK.vorname} />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontFamily: T.sans,
                fontSize: 11,
                color: T.creamMuted,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 6,
              }}
            >
              Nachname <span style={{ color: T.gold }}>*</span>
            </label>
            <InputMock value={MOCK.nachname} />
          </div>
        </div>
        <GoldButton>Weiter →</GoldButton>
      </FeltCard>
      <FooterMock />
    </ScreenShell>
  );
}

function PriceRow({ label, price }: { label: string; price: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 6,
        fontFamily: T.sans,
        fontSize: 14,
      }}
    >
      <span style={{ color: T.creamMuted }}>{label}</span>
      <span style={{ color: T.cream }}>{price} €</span>
    </div>
  );
}

function GuestsStepMock() {
  return (
    <ScreenShell>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <p style={{ color: "rgba(201,162,39,0.6)", fontSize: 16, margin: "0 0 6px" }}>♠ ♣</p>
        <h2 style={{ margin: 0, fontFamily: T.serif, fontSize: 28, color: T.cream }}>
          Hallo, {MOCK.vorname}!
        </h2>
        <p style={{ margin: "6px 0 0", fontFamily: T.sans, fontSize: 13, color: T.creamMuted }}>
          Trägst du Begleitpersonen ein?
        </p>
      </div>

      <FeltCard>
        <p
          style={{
            fontFamily: T.sans,
            fontSize: 11,
            color: T.creamMuted,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 12px",
          }}
        >
          Begleitpersonen
        </p>
        {MOCK.guests.map((guest) => (
          <div key={guest} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <InputMock value={guest} />
            <div
              style={{
                width: 36,
                height: 40,
                flexShrink: 0,
                borderRadius: 8,
                border: "1px solid rgba(239,68,68,0.25)",
                background: "rgba(239,68,68,0.1)",
                color: T.red,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              ×
            </div>
          </div>
        ))}
        <div
          style={{
            width: "100%",
            padding: "10px 0",
            borderRadius: 8,
            border: "1px dashed rgba(201,162,39,0.25)",
            color: "rgba(201,162,39,0.8)",
            fontFamily: T.sans,
            fontSize: 13,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          + Begleitperson hinzufügen
        </div>

        <div
          style={{
            borderRadius: 12,
            border: "1px solid rgba(201,162,39,0.2)",
            background: "rgba(0,0,0,0.2)",
            padding: 16,
            marginBottom: 16,
          }}
        >
          <PriceRow label={MOCK.vorname} price={MOCK.pricePerPerson} />
          {MOCK.guests.map((g) => (
            <PriceRow key={g} label={g} price={MOCK.pricePerPerson} />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
              marginTop: 8,
              borderTop: "1px solid rgba(201,162,39,0.15)",
            }}
          >
            <span style={{ fontFamily: T.sans, fontSize: 13, color: T.creamMuted }}>
              Gesamt · {MOCK.totalPersons} Personen
            </span>
            <span style={{ fontFamily: T.serif, fontSize: 24, color: T.gold, fontWeight: 600 }}>
              {MOCK.totalPrice} €
            </span>
          </div>
        </div>

        <GoldButton>Jetzt anmelden →</GoldButton>
        <p
          style={{
            textAlign: "center",
            margin: "12px 0 0",
            fontFamily: T.sans,
            fontSize: 13,
            color: T.creamMuted,
          }}
        >
          ← Zurück
        </p>
      </FeltCard>
      <FooterMock />
    </ScreenShell>
  );
}

function TicketRow({
  label,
  value,
  alignRight,
}: {
  label: string;
  value: string;
  alignRight?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, gap: 12 }}>
      <span style={{ color: T.creamMuted, flexShrink: 0 }}>{label}</span>
      <span
        style={{
          color: T.cream,
          fontWeight: 500,
          textAlign: alignRight ? "right" : "left",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function TicketMock() {
  return (
    <div
      style={{
        background: T.felt,
        border: `2px solid ${T.gold}`,
        borderRadius: 16,
        padding: 24,
        position: "relative",
        boxShadow:
          "0 0 0 6px rgba(201,162,39,0.08), 0 0 0 7px rgba(201,162,39,0.25), 0 20px 60px rgba(0,0,0,0.6)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 5,
          border: "1px solid rgba(201,162,39,0.35)",
          borderRadius: 12,
          pointerEvents: "none",
        }}
      />
      {[
        { s: "♠", top: 12, left: 16 },
        { s: "♥", top: 12, right: 16 },
        { s: "♣", bottom: 12, left: 16 },
        { s: "♦", bottom: 12, right: 16 },
      ].map(({ s, ...pos }) => (
        <span
          key={s}
          aria-hidden
          style={{
            position: "absolute",
            ...pos,
            color: "rgba(201,162,39,0.4)",
            fontSize: 16,
          }}
        >
          {s}
        </span>
      ))}

      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <p
          style={{
            fontFamily: T.serif,
            color: T.gold,
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Cabisino 2026
        </p>
        <div
          style={{
            width: 64,
            height: 1,
            margin: "6px auto",
            background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
        <div
          style={{
            padding: 12,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 30px rgba(0,0,0,0.5), 0 0 0 3px rgba(201,162,39,0.3)",
          }}
        >
          <QRCodeSVG
            value={MOCK.ticketId}
            size={160}
            level="H"
            fgColor="#080f0a"
            bgColor="#ffffff"
          />
        </div>
      </div>

      <div style={{ fontFamily: T.sans, fontSize: 13 }}>
        <TicketRow label="Name" value={`${MOCK.vorname} ${MOCK.nachname}`} />
        <TicketRow label="Begleitung" value={MOCK.guests.join(", ")} alignRight />
        <TicketRow label="Personen" value={String(MOCK.totalPersons)} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 12,
            marginTop: 8,
            borderTop: "1px solid rgba(201,162,39,0.25)",
          }}
        >
          <span style={{ color: T.creamMuted }}>Zu zahlen</span>
          <span style={{ fontFamily: T.serif, fontSize: 22, color: T.gold, fontWeight: 700 }}>
            {MOCK.totalPrice} €
          </span>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <div
          style={{
            width: 80,
            height: 1,
            margin: "0 auto 8px",
            background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
          }}
        />
        <p
          style={{
            margin: 0,
            fontFamily: T.sans,
            fontSize: 10,
            color: "rgba(201,162,39,0.4)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Einlass-Ticket · Abiball 2026
        </p>
      </div>
    </div>
  );
}

function ConfirmationStepMock() {
  return (
    <ScreenShell>
      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            color: T.gold,
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          {SUITS.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <h2 style={{ margin: 0, fontFamily: T.serif, fontSize: 30, color: T.cream }}>
          Angemeldet!
        </h2>
        <p style={{ margin: "6px 0 0", fontFamily: T.sans, fontSize: 13, color: T.creamMuted }}>
          QR-Ticket für den Einlass bereit.
        </p>
      </div>

      <TicketMock />

      <div
        style={{
          marginTop: 16,
          padding: "12px 0",
          borderRadius: 12,
          border: "1px solid rgba(201,162,39,0.3)",
          color: T.gold,
          fontFamily: T.sans,
          fontSize: 13,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        ↓ Ticket als Bild speichern
      </div>
      <FooterMock />
    </ScreenShell>
  );
}

export function CabisinoLandingShot() {
  return (
    <ScaledFrame>
      <NameStepMock />
    </ScaledFrame>
  );
}

export function CabisinoCompanionsShot() {
  return (
    <ScaledFrame>
      <GuestsStepMock />
    </ScaledFrame>
  );
}

export function CabisinoTicketShot() {
  return (
    <ScaledFrame>
      <ConfirmationStepMock />
    </ScaledFrame>
  );
}

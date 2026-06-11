"use client";

import SocialLinks from "@/components/SocialLinks";
import { trackGaEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const PROJEKTTYPEN = [
  "Website",
  "MVP / App",
  "KI-Integration",
  "Automatisierung",
  "Beratung",
  "Sonstiges",
] as const;

const BUDGETS = [
  "< 1.000€",
  "1.000–3.000€",
  "3.000–7.000€",
  "> 7.000€",
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const monoLegend = {
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "9px",
  letterSpacing: "2px",
  color: "#00c2cb",
  display: "block" as const,
  marginBottom: "8px",
};

const fieldLabel = {
  fontFamily: "DM Sans, sans-serif",
  fontSize: 13,
  color: "rgba(245,249,255,0.6)",
  display: "block" as const,
  marginBottom: 6,
};

const inputBase = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "0.5px solid rgba(0,194,203,0.1)",
  borderRadius: "6px",
  padding: "14px 16px",
  fontFamily: "DM Sans, sans-serif",
  fontSize: "14px",
  color: "#f5f9ff",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  boxSizing: "border-box" as const,
};

const chipBase = {
  border: "0.5px solid rgba(245,249,255,0.1)",
  background: "transparent",
  color: "rgba(245,249,255,0.3)",
  borderRadius: "999px",
  padding: "10px 18px",
  minHeight: 44,
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "10px",
  letterSpacing: "1.5px",
  cursor: "pointer",
  transition: "all 0.2s",
};

const chipSelected = {
  border: "0.5px solid rgba(0,194,203,0.5)",
  background: "rgba(0,194,203,0.08)",
  color: "#00c2cb",
};

function validateForm(form: { name: string; email: string; message: string }) {
  const errors: { name?: string; email?: string; message?: string } = {};

  if (form.name.trim().length < 2) {
    errors.name = "Bitte gib deinen Namen ein (mind. 2 Zeichen).";
  }
  if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }
  if (form.message.trim().length < 20) {
    errors.message = "Bitte beschreibe dein Projekt etwas ausführlicher (mind. 20 Zeichen).";
  }

  return errors;
}

export default function Contact() {
  const [status, setStatus] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          projekttyp: selectedTypes.join(", "),
          budget: selectedBudget ?? "",
          subject: `Projektanfrage von ${form.name}`,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const data = (await res.json()) as { success?: boolean };
      if (data.success) {
        trackGaEvent("contact_form_submit", {
          event_category: "engagement",
          event_label: selectedTypes.join(", ") || "keine Auswahl",
        });
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setSelectedTypes([]);
        setSelectedBudget(null);
        setFieldErrors({});
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(0,194,203,0.4)";
    e.target.style.background = "rgba(255,255,255,0.06)";
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(0,194,203,0.1)";
    e.target.style.background = "rgba(255,255,255,0.04)";
  };

  return (
    <section
      aria-labelledby="kontakt-heading"
      style={{
        position: "relative",
        background: "transparent",
        overflow: "hidden",
        padding: "120px 0",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 32px" : "0 56px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "48px" : "80px",
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div style={{ paddingTop: "8px" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#00c2cb",
              marginBottom: "24px",
            }}
          >
            {"// KONTAKT"}
          </div>

          <h2
            id="kontakt-heading"
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 800,
              color: "#f5f9ff",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            Dein Projekt.
            <br />
            Meine Expertise.
          </h2>

          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(245,249,255,0.45)",
              maxWidth: "420px",
              marginTop: "24px",
              lineHeight: 1.7,
              marginBottom: 0,
            }}
          >
            Kein monatelanger Agentur-Prozess. Erstes Gespräch kostenlos, MVP in
            einer Woche.
          </p>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                label: "E-MAIL",
                value: "info@lyniqmedia.com",
                href: "mailto:info@lyniqmedia.com",
              },
              {
                label: "TELEFON",
                value: "+49 (0) 1517 5007219",
                href: "tel:+4915175007219",
              },
              {
                label: "STANDORT",
                value: "Alte Poststraße 17a, 26835 Holtland",
                href: null,
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: "#00c2cb",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#f5f9ff",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#00c2cb";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#f5f9ff";
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#f5f9ff",
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px" }}>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "#00c2cb",
                marginBottom: "4px",
              }}
            >
              {"// REAKTIONSZEIT"}
            </div>
            <span
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "#f5f9ff",
              }}
            >
              {"< 24 Stunden"}
            </span>
          </div>

          <SocialLinks />
        </div>

        {/* Right column — glass card (scroll target for /#kontakt) */}
        <div
          id="lyniq-kontakt"
          style={{
            background: "rgba(6,13,24,0.45)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "0.5px solid rgba(0,194,203,0.15)",
            borderRadius: "24px",
            padding: "48px",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.05)",
            scrollMarginTop: "96px",
          }}
        >
          {status === "success" ? (
            <div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#00c2cb",
                  marginBottom: "16px",
                }}
              >
                {"// NACHRICHT GESENDET"}
              </div>
              <h3
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#f5f9ff",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}
              >
                Ich melde mich innerhalb von 24 Stunden.
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "rgba(245,249,255,0.5)",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                Du bekommst eine Kopie an deine E-Mail-Adresse.
              </p>
            </div>
          ) : (
            <>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#00c2cb",
                  marginBottom: "8px",
                }}
              >
                {"// PROJEKT ANFRAGEN"}
              </div>
              <h3
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#f5f9ff",
                  margin: "0 0 32px",
                  lineHeight: 1.3,
                }}
              >
                Erzähl mir von deinem Vorhaben.
              </h3>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div>
                  <label htmlFor="contact-name" style={fieldLabel}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Leon Mustermann"
                    value={form.name}
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={
                      fieldErrors.name ? "contact-name-error" : undefined
                    }
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, name: e.target.value }));
                      if (fieldErrors.name) {
                        setFieldErrors((prev) => ({ ...prev, name: undefined }));
                      }
                    }}
                    style={inputBase}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {fieldErrors.name && (
                    <span
                      id="contact-name-error"
                      role="alert"
                      style={{ fontSize: 12, color: "#ff6b6b", marginTop: 4, display: "block" }}
                    >
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" style={fieldLabel}>
                    E-Mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    value={form.email}
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={
                      fieldErrors.email ? "contact-email-error" : undefined
                    }
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, email: e.target.value }));
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    style={inputBase}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {fieldErrors.email && (
                    <span
                      id="contact-email-error"
                      role="alert"
                      style={{ fontSize: 12, color: "#ff6b6b", marginTop: 4, display: "block" }}
                    >
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" style={fieldLabel}>
                    Nachricht
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Beschreib dein Projekt kurz..."
                    value={form.message}
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={
                      fieldErrors.message ? "contact-message-error" : undefined
                    }
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                      if (fieldErrors.message) {
                        setFieldErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    style={{
                      ...inputBase,
                      minHeight: "120px",
                      resize: "vertical",
                    }}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {fieldErrors.message && (
                    <span
                      id="contact-message-error"
                      role="alert"
                      style={{ fontSize: 12, color: "#ff6b6b", marginTop: 4, display: "block" }}
                    >
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
                  <legend style={monoLegend}>{"// PROJEKTTYP"}</legend>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginTop: "4px",
                    }}
                  >
                    {PROJEKTTYPEN.map((type) => {
                      const selected = selectedTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          role="checkbox"
                          aria-checked={selected}
                          aria-label={type}
                          disabled={status === "loading"}
                          onClick={() => toggleType(type)}
                          style={{
                            ...chipBase,
                            ...(selected ? chipSelected : {}),
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
                  <legend style={monoLegend}>{"// BUDGET (OPTIONAL)"}</legend>
                  <div
                    role="radiogroup"
                    aria-label="Budget"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginTop: "4px",
                    }}
                  >
                    {BUDGETS.map((budget) => {
                      const selected = selectedBudget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          disabled={status === "loading"}
                          onClick={() =>
                            setSelectedBudget(selected ? null : budget)
                          }
                          style={{
                            ...chipBase,
                            ...(selected ? chipSelected : {}),
                          }}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: "#00c2cb",
                    color: "#060d18",
                    fontFamily: "Sora, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    width: "100%",
                    height: "52px",
                    transition: "opacity 0.2s",
                    marginTop: "8px",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.opacity = "0.85";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity =
                      status === "loading" ? "0.7" : "1";
                  }}
                >
                  {status === "loading" ? "Wird gesendet..." : "Nachricht senden →"}
                </button>

                {status === "error" && (
                  <p
                    role="alert"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "12px",
                      color: "rgba(239,68,68,0.7)",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Senden fehlgeschlagen. Bitte schreib direkt an
                    info@lyniqmedia.com.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

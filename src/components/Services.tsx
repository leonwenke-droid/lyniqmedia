"use client";

import { ServiceCarousel, type Service } from "@/components/ui/services-card";
import { servicesData } from "@/lib/services-data";
import { Brain, Globe, Rocket, Zap } from "lucide-react";

const iconMap = {
  brain: Brain,
  globe: Globe,
  zap: Zap,
  rocket: Rocket,
} as const;

const services: Service[] = servicesData.map((service) => ({
  number: service.number,
  title: service.title,
  description: service.description,
  icon: iconMap[service.icon],
}));

export default function Services() {
  return (
    <section
        id="services"
        aria-labelledby="services-heading"
        style={{
          padding: "64px 56px 100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#00c2cb",
              textTransform: "uppercase",
            }}
          >
            Leistungen
          </span>
        </div>

        <h2
          id="services-heading"
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            color: "#f5f9ff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "8px",
          }}
        >
          KI-Software & Automatisierung für KMU in Ostfriesland
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "rgba(245,249,255,0.5)",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
          Keine Buzzwords. Lösungen die in der Praxis funktionieren.
        </p>

        <ServiceCarousel services={services} />
    </section>
  );
}

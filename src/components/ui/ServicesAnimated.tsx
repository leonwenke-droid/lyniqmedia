"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Globe, Rocket, Zap, type LucideIcon } from "lucide-react";
import { useRef, type CSSProperties } from "react";
import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/services-card";
import type { servicesData } from "@/lib/services-data";

const iconMap: Record<(typeof servicesData)[number]["icon"], LucideIcon> = {
  brain: Brain,
  globe: Globe,
  zap: Zap,
  rocket: Rocket,
};

function FloatingShape({
  width,
  height,
  top,
  left,
  right,
  rotate,
  delay,
  gradient,
}: {
  width: number;
  height: number;
  top?: string;
  left?: string;
  right?: string;
  rotate: number;
  delay: number;
  gradient: string;
}) {
  return (
    <div
      style={
        {
          position: "absolute",
          top,
          left,
          right,
          width: `${width}px`,
          height: `${height}px`,
          transform: `rotate(${rotate}deg)`,
          animation: `lyniqFloat ${12 + delay * 2}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          "--rotate": `${rotate}deg`,
          pointerEvents: "none",
          zIndex: 0,
        } as CSSProperties
      }
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "999px",
          background: `linear-gradient(to right, ${gradient}, transparent)`,
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(0,194,203,0.08)",
          boxShadow: "0 8px 32px 0 rgba(0,194,203,0.04)",
        }}
      />
    </div>
  );
}

type ServicesAnimatedProps = {
  services: readonly {
    number: string;
    title: string;
    description: string;
    icon: (typeof servicesData)[number]["icon"];
  }[];
};

export default function ServicesAnimated({ services }: ServicesAnimatedProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const carouselServices: Service[] = services.map((service) => ({
    ...service,
    icon: iconMap[service.icon],
  }));

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBottom: "100px",
      }}
    >
      <FloatingShape
        width={500}
        height={120}
        top="10%"
        left="-8%"
        rotate={12}
        delay={0}
        gradient="rgba(0,194,203,0.06)"
      />
      <FloatingShape
        width={400}
        height={90}
        top="60%"
        right="-6%"
        rotate={-15}
        delay={1.5}
        gradient="rgba(26,106,255,0.05)"
      />
      <FloatingShape
        width={250}
        height={70}
        top="30%"
        right="5%"
        rotate={8}
        delay={0.8}
        gradient="rgba(0,194,203,0.04)"
      />
      <FloatingShape
        width={180}
        height={50}
        top="80%"
        left="10%"
        rotate={-20}
        delay={2}
        gradient="rgba(26,106,255,0.04)"
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <ServiceCarousel services={carouselServices} />
        </motion.div>
      </div>
    </div>
  );
}

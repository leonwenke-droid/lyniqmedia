"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const SplineHero = dynamic(() => import("./SplineHero"), {
  ssr: false,
  loading: () => null,
});
const RobotSpline = dynamic(() => import("./RobotSpline"), {
  ssr: false,
  loading: () => null,
});

const HEADLINE = "THE AI ERA";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;
const SPLINE_RISE_DURATION = 0.65;
const ROBOT_RISE_DURATION = 0.15;

const headlineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const headlineChar: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: RISE_EASE },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: RISE_EASE },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setShowSpline(mq.matches);
    const handler = (e: MediaQueryListEvent) => setShowSpline(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Nur Scale — Höhe bleibt fix, Pivot unten clippt Beine im Container */
  const robotScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 0.7, 1],
    reduceMotion ? [1, 1, 1, 1, 1] : [1, 1.1, 1.22, 1.34, 1.5],
  );

  return (
    <section ref={heroRef} id="hero" className="pointer-events-none relative">
      <motion.div
        className="hero-visual-stack absolute inset-0 z-0"
        initial={false}
        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: SPLINE_RISE_DURATION, ease: RISE_EASE }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {showSpline && <SplineHero />}
        </div>
        <div className="hero-overlay hero-overlay-bottom" />
        <div className="hero-overlay hero-overlay-left" />
      </motion.div>

      {/* Roboter: eigene, deutlich schnellere Einfahrt */}
      <motion.div
        className="hero-robot-scroll pointer-events-none absolute inset-x-0 bottom-0 z-[3]"
        initial={false}
        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: ROBOT_RISE_DURATION, ease: RISE_EASE }}
        style={
          reduceMotion
            ? undefined
            : {
                scale: robotScale,
                transformOrigin: "50% 100%",
              }
        }
      >
        {showSpline && <RobotSpline />}
      </motion.div>

      <div className="hero-ghost-layer" aria-hidden="true">
        <p className="hero-ghost">LYNIQ</p>
      </div>

      <div className="hero-headline-layer">
        <motion.div
          className="hero-headline"
          variants={headlineContainer}
          initial={false}
          animate="visible"
          aria-hidden="true"
        >
          {HEADLINE.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="hero-headline-char"
              variants={headlineChar}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.h1
          className="hero-message"
          variants={fadeUp}
          initial={false}
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          KI-Software & digitale Produkte für den Mittelstand — in einer Woche live.
        </motion.h1>
      </div>

      <div className="hero-corner">
        <motion.div
          className="hero-corner-text"
          variants={fadeUp}
          initial={false}
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {"// LYNIQ"}
          <br />
          KI-Software für den Mittelstand
        </motion.div>
        <motion.div
          className="hero-corner-text hero-corner-text--right"
          variants={fadeUp}
          initial={false}
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          {"// MVP in einer Woche"}
          <br />
          DSGVO-konform · Server in DE
        </motion.div>
      </div>
    </section>
  );
}

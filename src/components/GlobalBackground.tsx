"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        background: "none",
        backgroundColor: "transparent",
      }}
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="rgba(0,194,203,1)"
          strokeWidth={path.width}
          strokeOpacity={0.08 + path.id * 0.015}
          initial={{ pathLength: 0.3, opacity: 0.4 }}
          animate={{
            pathLength: 1,
            opacity: [0.2, 0.5, 0.2],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + (path.id % 10),
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export default function GlobalBackground() {
  const [isSafari, setIsSafari] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const isActiveRef = useRef(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

    document.body.style.setProperty(
      "--gradient-background-start",
      "rgb(6, 13, 24)",
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      "rgb(4, 9, 16)",
    );
    document.body.style.setProperty("--first-color", "0, 194, 203");
    document.body.style.setProperty("--second-color", "26, 106, 255");
    document.body.style.setProperty("--third-color", "0, 194, 203");
    document.body.style.setProperty("--fourth-color", "10, 21, 37");
    document.body.style.setProperty("--fifth-color", "26, 106, 255");
    document.body.style.setProperty("--pointer-color", "0, 194, 203");
    document.body.style.setProperty("--size", "60%");
    document.body.style.setProperty("--blending-value", "screen");
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      if (!isActiveRef.current) {
        isActiveRef.current = true;
        setIsActive(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #060d18 0%, #040910 60%, #060d18 100%)",
        }}
      >
        {/* Layer 1: Three slow ambient orbs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            filter: isSafari ? "blur(80px)" : "url(#lyniq-blur) blur(80px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(0,194,203,1) 0, rgba(0,194,203,0) 50%) no-repeat",
              mixBlendMode: "screen",
              width: "70%",
              height: "70%",
              top: "calc(50% - 35%)",
              left: "calc(50% - 35%)",
              animation: "lyniqMoveVertical 40s ease infinite",
              opacity: 0.12,
            }}
          />
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(26,106,255,0.8) 0, rgba(26,106,255,0) 50%) no-repeat",
              mixBlendMode: "screen",
              width: "60%",
              height: "60%",
              top: "calc(50% - 30%)",
              left: "calc(50% - 30%)",
              transformOrigin: "calc(50% - 500px)",
              animation: "lyniqMoveInCircle 35s reverse infinite",
              opacity: 0.09,
            }}
          />
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(0,194,203,0.6) 0, rgba(0,194,203,0) 50%) no-repeat",
              mixBlendMode: "screen",
              width: "55%",
              height: "55%",
              top: "calc(50% - 27%)",
              left: "calc(50% - 27%)",
              transformOrigin: "calc(50% + 500px)",
              animation: "lyniqMoveInCircle 55s linear infinite",
              opacity: 0.07,
            }}
          />
        </div>

        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />

        {/* Layer 3: Diagonal stripe */}
        <div
          style={{
            position: "absolute",
            inset: "-200%",
            opacity: 0.012,
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(0,194,203,1) 60px,
              rgba(0,194,203,1) 61px
            )`,
            animation: "lyniqStripeScroll 20s linear infinite",
            pointerEvents: "none",
          }}
        />

        {/* Cursor blob */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <div
            ref={glowRef}
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,194,203,0.06) 0%, rgba(26,106,255,0.03) 40%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              mixBlendMode: "screen",
              filter: isSafari ? "blur(40px)" : "blur(60px)",
              pointerEvents: "none",
            }}
          />
        </div>

        <svg style={{ display: "none" }} aria-hidden="true">
          <defs>
            <filter id="lyniq-blur">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="40"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>

      <style>{`
        @keyframes lyniqMoveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes lyniqMoveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes lyniqMoveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
        @keyframes lyniqFloat {
          0% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(15px) rotate(var(--rotate, 0deg)); }
          100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
        }
        @keyframes lyniqStripeScroll {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(120px) translateY(120px); }
        }
      `}</style>
    </>
  );
}

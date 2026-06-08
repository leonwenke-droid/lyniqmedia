"use client";

import { faqs } from "@/lib/faq-data";
import { contactHref, navigateToContact } from "@/lib/scroll-to-section";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";

const highlights = [
  {
    num: "// 01",
    text: "Festpreise nach dem kostenlosen Erstgespräch — keine versteckten Kosten.",
  },
  {
    num: "// 02",
    text: "MVP-Standard in unter einer Woche, DSGVO-konform mit Servern in DE.",
  },
  {
    num: "// 03",
    text: "Volle Übergabe mit Dokumentation — du bist nie abhängig.",
  },
] as const;

const ease = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const highlightStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      <div className="faq-layout">
        <motion.div
          className="faq-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div className="faq-label" variants={fadeUp}>
            <span className="faq-label__line" aria-hidden="true" />
            <span className="faq-label__text">FAQ</span>
          </motion.div>

          <motion.h2 className="faq-title" variants={fadeUp}>
            Häufige Fragen
          </motion.h2>
          <motion.p className="faq-subtitle" variants={fadeUp}>
            Direkte Antworten. Kein Geschwurbel.
          </motion.p>

          <motion.ul className="faq-highlights" variants={highlightStagger}>
            {highlights.map((item) => (
              <motion.li key={item.num} className="faq-highlight" variants={fadeUp}>
                <span className="faq-highlight__num">{item.num}</span>
                <span className="faq-highlight__text">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            href={contactHref(pathname)}
            className="faq-cta"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              navigateToContact(pathname, router);
            }}
          >
            Projekt anfragen →
          </motion.a>
        </motion.div>

        <motion.div
          className="faq-panel"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 28, scale: 0.98 }
          }
          transition={{ duration: 0.65, ease, delay: 0.12 }}
        >
          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = openIndexes.has(i);
              return (
                <motion.div
                  key={f.q}
                  className={`faq-item${isOpen ? " faq-item--open" : ""}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                  }
                  transition={{
                    duration: 0.45,
                    ease,
                    delay: 0.2 + i * 0.07,
                  }}
                >
                  <button
                    type="button"
                    className="faq-summary"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{f.q}</span>
                    <motion.span
                      className="faq-icon"
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <p className="faq-answer">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

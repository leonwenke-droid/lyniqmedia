"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, X } from "lucide-react";

import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

interface OrbProps {
  dimension?: string;
  className?: string;
  tones?: {
    base?: string;
    accent1?: string;
    accent2?: string;
    accent3?: string;
  };
  spinDuration?: number;
}

const LYNIQ_ORB_TONES = {
  base: "oklch(18% 0.02 240)",
  accent1: "oklch(72% 0.14 195)",
  accent2: "oklch(58% 0.18 250)",
  accent3: "oklch(65% 0.12 210)",
};

const ColorOrb: React.FC<OrbProps> = ({
  dimension = "192px",
  className,
  tones,
  spinDuration = 20,
}) => {
  const palette = { ...LYNIQ_ORB_TONES, ...tones };
  const dimValue = parseInt(dimension.replace("px", ""), 10);

  const blurStrength =
    dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4);
  const contrastStrength =
    dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5);
  const pixelDot =
    dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1);
  const shadowRange =
    dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2);
  const maskRadius =
    dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%";
  const adjustedContrast =
    dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrastStrength * 1.2, 1.3) : contrastStrength;

  return (
    <div
      className={cn("color-orb shrink-0", className)}
      style={
        {
          width: dimension,
          height: dimension,
          "--base": palette.base,
          "--accent1": palette.accent1,
          "--accent2": palette.accent2,
          "--accent3": palette.accent3,
          "--spin-duration": `${spinDuration}s`,
          "--blur": `${blurStrength}px`,
          "--contrast": adjustedContrast,
          "--dot": `${pixelDot}px`,
          "--shadow": `${shadowRange}px`,
          "--mask": maskRadius,
        } as React.CSSProperties
      }
    />
  );
};

const FORM_WIDTH = 360;
const DOCK_HEIGHT = 44;
const DOCK_WIDTH = 44;
const MOBILE_BREAKPOINT = 767;
const DESKTOP_COMPACT_HEIGHT = 168;
const DESKTOP_CHAT_HEIGHT = 360;
const DESKTOP_MAX_HEIGHT = 420;

const panelTransition = {
  type: "spring" as const,
  stiffness: 520,
  damping: 42,
  mass: 0.72,
};

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export type MorphPanelProps = {
  onAsk?: (message: string) => Promise<string>;
  dockLabel?: string;
  dockIconOnly?: boolean;
  title?: string;
  placeholder?: string;
  submitLabel?: string;
};

export function MorphPanel({
  onAsk,
  dockLabel = "Frag LYNIQ",
  dockIconOnly = true,
  title = "KI Input",
  placeholder = "Frag mich etwas…",
  submitLabel = "Frag LYNIQ",
}: MorphPanelProps) {
  const isMobile = useIsMobile();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLFormElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const messagesRef = React.useRef<HTMLDivElement>(null);
  const submitRef = React.useRef<HTMLButtonElement>(null);

  const [showForm, setShowForm] = React.useState(false);
  const [contentVisible, setContentVisible] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [openHeight, setOpenHeight] = React.useState(DESKTOP_COMPACT_HEIGHT);

  const isFullscreen = isMobile && showForm;
  const hasMessages = messages.length > 0;

  const triggerClose = React.useCallback(() => {
    setContentVisible(false);
    textareaRef.current?.blur();
  }, []);

  const finishClose = React.useCallback(() => {
    setShowForm(false);
    setMessages([]);
  }, []);

  const triggerOpen = React.useCallback(() => {
    setOpenHeight(DESKTOP_COMPACT_HEIGHT);
    setShowForm(true);
    requestAnimationFrame(() => setContentVisible(true));
    setTimeout(() => textareaRef.current?.focus(), 140);
  }, []);

  const scrollToBottom = React.useCallback(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  React.useEffect(() => {
    if (!showForm || contentVisible) return;
    const timer = window.setTimeout(finishClose, 130);
    return () => window.clearTimeout(timer);
  }, [showForm, contentVisible, finishClose]);

  React.useEffect(() => {
    if (!isFullscreen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isFullscreen]);

  React.useEffect(() => {
    if (!showForm || isFullscreen) return;
    function clickOutsideHandler(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        triggerClose();
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, [showForm, isFullscreen, triggerClose]);

  React.useLayoutEffect(() => {
    if (!showForm || isFullscreen) return;

    if (!hasMessages) {
      setOpenHeight(DESKTOP_COMPACT_HEIGHT);
      return;
    }

    // Panel wächst im Chat-Modus; scrollHeight misst den echten Inhalt (nicht abgeschnitten)
    setOpenHeight(DESKTOP_CHAT_HEIGHT);

    const form = contentRef.current;
    if (!form) return;

    requestAnimationFrame(() => {
      const natural = form.scrollHeight;
      setOpenHeight(
        Math.min(Math.max(natural, DESKTOP_CHAT_HEIGHT), DESKTOP_MAX_HEIGHT),
      );
    });
  }, [showForm, isFullscreen, messages, loading, contentVisible, hasMessages]);

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const message = new FormData(form).get("message")?.toString().trim() ?? "";
    if (!message) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: message,
    };
    setMessages((prev) => [...prev, userMsg]);
    form.reset();

    if (!onAsk) {
      triggerClose();
      return;
    }

    setLoading(true);
    try {
      const answer = await onAsk(message);
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content: answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          role: "assistant",
          content:
            "Verbindungsfehler — bitte nutze das Kontaktformular unten auf der Seite.",
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  }

  function handleKeys(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Escape") triggerClose();
    if (e.key === "Enter" && !e.shiftKey && (e.metaKey || isMobile)) {
      e.preventDefault();
      submitRef.current?.click();
    }
  }

  const panelHeight = showForm
    ? isFullscreen
      ? "100dvh"
      : openHeight
    : DOCK_HEIGHT;
  const panelWidth = showForm ? (isFullscreen ? "100%" : FORM_WIDTH) : DOCK_WIDTH;

  return (
    <>
      {isFullscreen ? (
        <button
          type="button"
          aria-label="Chat schließen"
          className="fixed inset-0 z-[59] bg-[rgba(4,9,16,0.72)] backdrop-blur-sm"
          onClick={triggerClose}
        />
      ) : null}

      <div
        className={cn(
          "flex items-end justify-end",
          isFullscreen && "fixed inset-0 z-[60] items-stretch justify-stretch",
        )}
      >
        <motion.div
          ref={wrapperRef}
          data-panel
          className={cn(
            "ai-input-panel relative flex flex-col overflow-hidden bg-[#060d18] shadow-[0_12px_48px_rgba(0,0,0,0.55),0_0_32px_rgba(0,194,203,0.06)]",
            isFullscreen
              ? "h-[100dvh] w-full border-0"
              : "z-[3] border border-[rgba(245,249,255,0.08)]",
          )}
          style={{ transformOrigin: isFullscreen ? "50% 100%" : "100% 100%" }}
          initial={false}
          animate={{
            width: panelWidth,
            height: panelHeight,
            borderRadius: showForm ? (isFullscreen ? 0 : 16) : 22,
          }}
          transition={panelTransition}
        >
          <AnimatePresence initial={false} mode="wait">
            {!showForm ? (
              <motion.button
                key="dock"
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                onClick={triggerOpen}
                aria-label={dockLabel}
                className="flex h-full w-full cursor-pointer items-center justify-center select-none"
              >
                <ColorOrb dimension={dockIconOnly ? "36px" : "24px"} />
                {!dockIconOnly ? (
                  <span className="ml-2.5 font-[family-name:var(--font-sora)] text-[14px] font-semibold whitespace-nowrap text-[#f5f9ff]">
                    {dockLabel}
                  </span>
                ) : null}
              </motion.button>
            ) : (
              <motion.form
                ref={contentRef}
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: contentVisible ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                onSubmit={handleSubmit}
                className={cn(
                  "flex w-full shrink-0 flex-col",
                  isFullscreen || hasMessages ? "h-full min-h-0" : "h-auto",
                )}
                style={{ pointerEvents: contentVisible ? "auto" : "none" }}
              >
                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-[rgba(245,249,255,0.06)] px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <ColorOrb dimension="28px" />
                    <span className="font-[family-name:var(--font-sora)] text-[15px] font-semibold text-[#f5f9ff]">
                      {title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin text-[#00c2cb]" />
                    ) : isFullscreen ? (
                      <button
                        type="button"
                        onClick={triggerClose}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-[rgba(245,249,255,0.1)] text-[#f5f9ff] hover:bg-[rgba(245,249,255,0.06)]"
                        aria-label="Schließen"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    ) : (
                      <>
                        <KeyHint>⌘</KeyHint>
                        <KeyHint>Enter</KeyHint>
                      </>
                    )}
                  </div>
                </div>

                {/* Chat-Verlauf */}
                <div
                  ref={messagesRef}
                  className={cn(
                    "min-h-0 overflow-y-auto px-4 py-3 [scrollbar-width:thin] [scrollbar-color:rgba(0,194,203,0.25)_transparent]",
                    isFullscreen
                      ? "flex-1"
                      : hasMessages
                        ? "min-h-[120px] flex-1"
                        : "hidden",
                  )}
                >
                  {hasMessages ? (
                    <div className="flex flex-col gap-2.5">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={cn(
                            "rounded-xl px-3 py-2.5 text-[13px] leading-[1.65]",
                            msg.role === "user"
                              ? "ml-6 border border-[rgba(0,194,203,0.14)] bg-[rgba(0,194,203,0.07)] text-[#f5f9ff]"
                              : "mr-2 border border-[rgba(245,249,255,0.08)] bg-[rgba(245,249,255,0.04)] text-[rgba(245,249,255,0.82)]",
                          )}
                        >
                          <p className="font-[family-name:var(--font-dm-sans)] font-light">
                            {msg.content}
                          </p>
                        </div>
                      ))}
                      {loading ? (
                        <div className="mr-2 flex items-center gap-2 rounded-xl border border-[rgba(245,249,255,0.08)] bg-[rgba(245,249,255,0.04)] px-3 py-2.5">
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-[#00c2cb]" />
                          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wide text-[rgba(245,249,255,0.4)]">
                            Denkt nach…
                          </span>
                        </div>
                      ) : null}
                    </div>
                  ) : isFullscreen ? (
                    <p className="font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-[rgba(245,249,255,0.35)]">
                      Stell eine Frage zu LYNIQ, Preisen oder MVPs.
                    </p>
                  ) : null}
                </div>

                <textarea
                  ref={textareaRef}
                  name="message"
                  placeholder={placeholder}
                  disabled={loading}
                  required
                  spellCheck={false}
                  onKeyDown={handleKeys}
                  className={cn(
                    "w-full shrink-0 resize-none border-0 bg-transparent px-4 py-2.5 font-[family-name:var(--font-dm-sans)] text-[15px] leading-relaxed text-[#f5f9ff] outline-none placeholder:text-[rgba(245,249,255,0.32)]",
                    isFullscreen
                      ? "min-h-[56px] max-h-[100px] border-t border-[rgba(245,249,255,0.06)]"
                      : hasMessages
                        ? "h-11 min-h-11 shrink-0 border-t border-[rgba(245,249,255,0.06)]"
                        : "h-[72px] shrink-0 py-3",
                  )}
                />

                {/* Submit */}
                <button
                  ref={submitRef}
                  type="submit"
                  disabled={loading}
                  className="flex h-11 shrink-0 cursor-pointer items-center justify-center border-t border-[rgba(245,249,255,0.06)] font-[family-name:var(--font-sora)] text-[14px] font-semibold text-[#f5f9ff] transition-colors hover:bg-[rgba(0,194,203,0.05)] disabled:opacity-40"
                >
                  {submitLabel}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

function KeyHint({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "flex h-[26px] min-w-[26px] items-center justify-center rounded-md border border-[rgba(245,249,255,0.14)] bg-[rgba(245,249,255,0.04)] px-1.5 font-sans text-[12px] text-[rgba(245,249,255,0.85)]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export default MorphPanel;

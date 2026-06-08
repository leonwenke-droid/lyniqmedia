import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const ACCENT = "#00c2cb";
const INK = "#f5f9ff";

type ImgProps = ComponentPropsWithoutRef<"img">;

function MdxImage({ src, alt }: ImgProps) {
  if (!src || typeof src !== "string") return null;
  return (
    <span
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        maxWidth: "100%",
        aspectRatio: "16 / 9",
        margin: "32px auto",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes="(max-width: 768px) 100vw, 740px"
        style={{ objectFit: "cover" }}
      />
    </span>
  );
}

export const mdxComponentMap: MDXComponents = {
    h1: ({ children }) => (
      <h1
        style={{
          fontFamily: "var(--font-sora), Sora, sans-serif",
          fontSize: 36,
          color: INK,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: 24,
          marginTop: 0,
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: "var(--font-sora), Sora, sans-serif",
          fontSize: 24,
          color: INK,
          fontWeight: 600,
          marginTop: 48,
          marginBottom: 16,
          borderLeft: `3px solid ${ACCENT}`,
          paddingLeft: 16,
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: "var(--font-sora), Sora, sans-serif",
          fontSize: 18,
          color: INK,
          fontWeight: 600,
          marginTop: 32,
          marginBottom: 12,
        }}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p
        style={{
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          fontSize: 16,
          color: "rgba(245,249,255,0.75)",
          lineHeight: 1.85,
          marginBottom: 20,
          maxWidth: "68ch",
          marginTop: 0,
        }}
      >
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="mdx-link"
        style={{
          color: ACCENT,
          textDecoration: "none",
        }}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong style={{ color: INK, fontWeight: 600 }}>{children}</strong>
    ),
    code: ({ children, className }) => {
      const isBlock = Boolean(className);
      if (isBlock) {
        return <code className={className}>{children}</code>;
      }
      return (
        <code
          style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: 13,
            background: "rgba(0,194,203,0.08)",
            border: "1px solid rgba(0,194,203,0.15)",
            borderRadius: 4,
            padding: "2px 6px",
            color: ACCENT,
          }}
        >
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: 24,
          overflowX: "auto",
          marginBottom: 28,
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: 13,
        }}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: `3px solid ${ACCENT}`,
          paddingLeft: 20,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 20,
          color: "rgba(245,249,255,0.5)",
          fontStyle: "italic",
        }}
      >
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul
        style={{
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          fontSize: 16,
          color: "rgba(245,249,255,0.75)",
          lineHeight: 1.85,
          paddingLeft: 24,
          marginBottom: 20,
          marginTop: 0,
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          fontSize: 16,
          color: "rgba(245,249,255,0.75)",
          lineHeight: 1.85,
          paddingLeft: 24,
          marginBottom: 20,
          marginTop: 0,
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ marginBottom: 8 }}>{children}</li>
    ),
    img: MdxImage,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponentMap,
  };
}

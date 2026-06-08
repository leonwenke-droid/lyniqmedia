"use client";

import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import { toSlug, type BlogPost } from "@/lib/blog-shared";
import Link from "next/link";
import { useMemo, useState } from "react";

type BlogListProps = {
  posts: BlogPost[];
  categories: string[];
  activeCategory?: string;
  showFilters?: boolean;
  heading?: string;
  subline?: string;
};

export default function BlogList({
  posts,
  categories,
  activeCategory,
  showFilters = true,
  heading = "Blog",
  subline = "KI-Praxis, lokale Digitalisierung und ehrliche Einblicke aus der Arbeit mit KMU.",
}: BlogListProps) {
  const [selected, setSelected] = useState(activeCategory ?? "alle");

  const filtered = useMemo(() => {
    if (selected === "alle") return posts;
    return posts.filter((post) => post.category === selected);
  }, [posts, selected]);

  return (
    <>
      <header style={{ marginBottom: 48 }}>
        <h1
          style={{
            fontFamily: "var(--font-sora), Sora, sans-serif",
            fontSize: "clamp(36px, 6vw, 48px)",
            fontWeight: 700,
            color: "#f5f9ff",
            letterSpacing: "-0.03em",
            margin: "0 0 12px",
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: 16,
            fontWeight: 300,
            color: "rgba(245,249,255,0.5)",
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 560,
          }}
        >
          {subline}
        </p>
      </header>

      {showFilters && categories.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <button
            type="button"
            onClick={() => setSelected("alle")}
            style={{
              fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.5px",
              padding: "8px 14px",
              borderRadius: 999,
              border:
                selected === "alle"
                  ? "1px solid rgba(0,194,203,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
              background:
                selected === "alle"
                  ? "rgba(0,194,203,0.12)"
                  : "rgba(255,255,255,0.05)",
              color: selected === "alle" ? "#00c2cb" : "rgba(245,249,255,0.55)",
              cursor: "pointer",
            }}
          >
            Alle
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              style={{
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                fontSize: 11,
                letterSpacing: "0.5px",
                padding: "8px 14px",
                borderRadius: 999,
                border:
                  selected === category
                    ? "1px solid rgba(0,194,203,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                background:
                  selected === category
                    ? "rgba(0,194,203,0.12)"
                    : "rgba(255,255,255,0.05)",
                color:
                  selected === category ? "#00c2cb" : "rgba(245,249,255,0.55)",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: 15,
            color: "rgba(245,249,255,0.45)",
          }}
        >
          Keine Artikel in dieser Kategorie.{" "}
          <Link href="/blog" style={{ color: "#00c2cb", textDecoration: "none" }}>
            Alle anzeigen
          </Link>
        </p>
      ) : (
        <div className="blog-grid">
          {filtered.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}

export function BlogTagLinks({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${toSlug(tag)}`}
          style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: 10,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "rgba(0,194,203,0.75)",
            textDecoration: "none",
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid rgba(0,194,203,0.2)",
          }}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}

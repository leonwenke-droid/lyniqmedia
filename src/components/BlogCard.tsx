import {
  formatBlogDate,
  toSlug,
  type BlogPost,
} from "@/lib/blog-shared";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: BlogPost;
  compact?: boolean;
};

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="blog-card"
      style={{
        display: "block",
        textDecoration: "none",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: compact ? 20 : 28,
      }}
    >
      {post.coverImage ? (
        <span
          style={{
            position: "relative",
            display: "block",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: 10,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            style={{ objectFit: "cover" }}
          />
        </span>
      ) : null}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 12,
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: 9,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "rgba(0,194,203,0.7)",
            padding: "4px 8px",
            borderRadius: 999,
            border: "1px solid rgba(0,194,203,0.2)",
          }}
        >
          {post.category}
        </span>
        {post.tags.slice(0, compact ? 2 : 3).map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "1px",
              color: "rgba(245,249,255,0.35)",
            }}
          >
            #{toSlug(tag)}
          </span>
        ))}
      </div>

      <h2
        style={{
          fontFamily: "var(--font-sora), Sora, sans-serif",
          fontSize: compact ? 17 : 20,
          fontWeight: 600,
          color: "#f5f9ff",
          lineHeight: 1.35,
          margin: "0 0 10px",
          letterSpacing: "-0.02em",
        }}
      >
        {post.title}
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          fontSize: 14,
          fontWeight: 300,
          color: "rgba(245,249,255,0.5)",
          lineHeight: 1.65,
          margin: "0 0 16px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {post.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          fontSize: 12,
          color: "rgba(245,249,255,0.4)",
        }}
      >
        <span>{formatBlogDate(post.date)}</span>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
        <span aria-hidden>·</span>
        <span style={{ color: "#00c2cb" }}>→ Lesen</span>
      </div>
    </Link>
  );
}

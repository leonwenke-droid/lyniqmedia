import BlogCard from "@/components/BlogCard";
import BlogNewsletter from "@/components/BlogNewsletter";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import {
  formatBlogDate,
  getAllPosts,
  getPostBySlug,
  toSlug,
} from "@/lib/blog";
import { MdxBody } from "@/lib/mdx-render";
import { LINKEDIN_URL } from "@/lib/social-links";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://lyniqmedia.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      tags: post.tags,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  const articleUrl = `https://lyniqmedia.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Leon Wenke",
      url: LINKEDIN_URL,
      sameAs: [LINKEDIN_URL],
    },
    publisher: {
      "@type": "Organization",
      name: "LYNIQ Media",
      url: "https://lyniqmedia.com",
    },
    mainEntityOfPage: articleUrl,
    keywords: post.tags.join(", "),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="blog-article-main">
        <Link
          href="/blog"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.5px",
            color: "#00c2cb",
            textDecoration: "none",
            marginBottom: 28,
          }}
        >
          ← Blog
        </Link>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Link
            href={`/blog/kategorie/${toSlug(post.category)}`}
            style={{
              fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#00c2cb",
              textDecoration: "none",
              padding: "5px 10px",
              borderRadius: 999,
              border: "1px solid rgba(0,194,203,0.25)",
              background: "rgba(0,194,203,0.08)",
            }}
          >
            {post.category}
          </Link>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${toSlug(tag)}`}
              style={{
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                fontSize: 10,
                letterSpacing: "1px",
                color: "rgba(245,249,255,0.4)",
                textDecoration: "none",
              }}
            >
              #{toSlug(tag)}
            </Link>
          ))}
        </div>

        <h1 className="blog-article-title">{post.title}</h1>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: 13,
            color: "rgba(245,249,255,0.4)",
            margin: "0 0 32px",
          }}
        >
          {formatBlogDate(post.date)}
          <span aria-hidden> · </span>
          {post.readingTime}
          <span aria-hidden> · </span>
          {post.author}
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            margin: "0 0 40px",
          }}
        />

        <div className="mdx-content">
          <MdxBody source={post.content} />
        </div>

        <BlogNewsletter />

        {related.length > 0 ? (
          <section style={{ marginTop: 56 }}>
            <h2
              style={{
                fontFamily: "var(--font-sora), Sora, sans-serif",
                fontSize: 22,
                fontWeight: 600,
                color: "#f5f9ff",
                margin: "0 0 20px",
              }}
            >
              Weitere Artikel
            </h2>
            <div className="blog-grid blog-grid--compact">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.05}>
                  <BlogCard post={item} compact />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </PageShell>
  );
}

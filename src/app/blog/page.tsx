import BlogList from "@/components/BlogList";
import PageShell from "@/components/PageShell";
import { getAllCategories, getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "KI-Praxis, lokale Digitalisierung und ehrliche Einblicke aus der Arbeit mit KMU — Artikel von LYNIQ Media.",
  alternates: { canonical: "https://lyniqmedia.com/blog" },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <PageShell>
      <main className="blog-page-main">
        <BlogList posts={posts} categories={categories} />
      </main>
    </PageShell>
  );
}

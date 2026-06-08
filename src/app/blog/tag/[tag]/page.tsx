import BlogList from "@/components/BlogList";
import PageShell from "@/components/PageShell";
import {
  findTagBySlug,
  getAllCategories,
  getAllTags,
  getPostsByTag,
  toSlug,
} from "@/lib/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: toSlug(tag) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const label = findTagBySlug(tag);
  if (!label) return {};

  return {
    title: `Tag: ${label}`,
    description: `Blog-Artikel zum Thema ${label} — LYNIQ Media.`,
    alternates: { canonical: `https://lyniqmedia.com/blog/tag/${tag}` },
    robots: { index: true, follow: true },
  };
}

export default async function BlogTagPage({ params }: PageProps) {
  const { tag } = await params;
  const label = findTagBySlug(tag);
  if (!label) notFound();

  const posts = getPostsByTag(tag);
  const categories = getAllCategories();

  return (
    <PageShell>
      <main className="blog-page-main">
        <BlogList
          posts={posts}
          categories={categories}
          showFilters={false}
          heading={`Tag: ${label}`}
          subline={`Alle Artikel mit dem Schlagwort „${label}".`}
        />
      </main>
    </PageShell>
  );
}

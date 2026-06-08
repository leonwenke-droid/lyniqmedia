import BlogList from "@/components/BlogList";
import PageShell from "@/components/PageShell";
import {
  findCategoryBySlug,
  getAllCategories,
  getPostsByCategory,
  toSlug,
} from "@/lib/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: toSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const label = findCategoryBySlug(category);
  if (!label) return {};

  return {
    title: `Kategorie: ${label}`,
    description: `Blog-Artikel in der Kategorie ${label} — LYNIQ Media.`,
    alternates: {
      canonical: `https://lyniqmedia.com/blog/kategorie/${category}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const label = findCategoryBySlug(category);
  if (!label) notFound();

  const posts = getPostsByCategory(category);
  const categories = getAllCategories();

  return (
    <PageShell>
      <main className="blog-page-main">
        <BlogList
          posts={posts}
          categories={categories}
          activeCategory={label}
          heading={`Kategorie: ${label}`}
          subline={`Alle Artikel in „${label}".`}
        />
      </main>
    </PageShell>
  );
}

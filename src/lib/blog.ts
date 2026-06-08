import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { toSlug, type BlogPost, type BlogPostWithContent } from "./blog-shared";

export type { BlogPost, BlogPostWithContent } from "./blog-shared";
export { formatBlogDate, toSlug } from "./blog-shared";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

type BlogFrontmatter = {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  category?: string;
  published?: boolean;
  coverImage?: string;
};

function parsePostFile(slug: string, raw: string): BlogPostWithContent {
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  const stats = readingTime(content);
  const minutes = Math.max(1, Math.ceil(stats.minutes));

  return {
    slug,
    title: fm.title ?? slug,
    description: fm.description ?? "",
    date: fm.date ?? new Date().toISOString().slice(0, 10),
    author: fm.author ?? "Leon Wenke",
    tags: fm.tags ?? [],
    category: fm.category ?? "Allgemein",
    readingTime: `${minutes} min`,
    published: fm.published !== false,
    coverImage: fm.coverImage,
    content,
  };
}

function readAllPostFiles(): BlogPostWithContent[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      return parsePostFile(slug, raw);
    });
}

export function getAllPosts(): BlogPost[] {
  return readAllPostFiles()
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content, ...post }) => {
      void content;
      return post;
    });
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const post = parsePostFile(slug, raw);
  if (!post.published) return null;
  return post;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return [...tags].sort((a, b) => a.localeCompare(b, "de"));
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  for (const post of getAllPosts()) {
    categories.add(post.category);
  }
  return [...categories].sort((a, b) => a.localeCompare(b, "de"));
}

export function getPostsByTag(tag: string): BlogPost[] {
  const needle = tag.toLowerCase();
  return getAllPosts().filter((post) =>
    post.tags.some((t) => toSlug(t) === needle || t.toLowerCase() === needle),
  );
}

export function getPostsByCategory(category: string): BlogPost[] {
  const needle = toSlug(category);
  return getAllPosts().filter((post) => toSlug(post.category) === needle);
}

export function findTagBySlug(slug: string): string | undefined {
  return getAllTags().find((tag) => toSlug(tag) === slug);
}

export function findCategoryBySlug(slug: string): string | undefined {
  return getAllCategories().find((category) => toSlug(category) === slug);
}

import { localBlogPosts, type BlogBlock } from "@/data/blogPosts";
import { getBlogPosts } from "@/lib/contentful";

const WORDS_PER_MINUTE = 200;

export function minutesToRead(words: number) {
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export const SITE_URL = "https://origin.co.ke";

function countWords(text: string) {
  // Count a link as its visible text only
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim().split(/\s+/).filter(Boolean).length;
}

export function blockWords(blocks: BlogBlock[]) {
  return blocks.reduce(
    (total, block) => total + (block.type === "ul" ? block.items.reduce((n, item) => n + countWords(item), 0) : countWords(block.text)),
    0
  );
}

export interface BlogListItem {
  slug: string;
  title: string;
  image: string | null;
  excerpt: string;
  author: string;
  date?: string;
  readingMinutes: number | null;
}

// Posts kept in the codebase plus posts from Contentful, newest first.
// If Contentful cannot be reached, the local posts are still returned.
export async function getAllBlogPosts(): Promise<BlogListItem[]> {
  const local: BlogListItem[] = localBlogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    image: post.image,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    readingMinutes: minutesToRead(blockWords(post.content)),
  }));

  let cms: BlogListItem[] = [];
  try {
    const localSlugs = new Set(local.map((p) => p.slug));
    cms = (await getBlogPosts())
      .filter((post) => !localSlugs.has(post.slug as string))
      .map((post) => ({
        slug: post.slug as string,
        title: post.title as string,
        image: post.image,
        excerpt: post.excerpt as string,
        author: post.author as string,
        date: post.date as string | undefined,
        readingMinutes: post.readingMinutes,
      }));
  } catch {
    // CMS unavailable
  }

  return [...local, ...cms].sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import ArticleHero from "@/components/ArticleHero";
import { getBlogPostBySlug } from "@/lib/contentful";
import { getAllBlogPosts, blockWords, minutesToRead, SITE_URL } from "@/lib/blog";
import { getLocalBlogPost, type BlogBlock } from "@/data/blogPosts";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: any) => (
      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: any) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700">
        {children}
      </ol>
    ),
    [BLOCKS.QUOTE]: (_node: any, children: any) => (
      <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-6 text-slate-600 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, file } = node.data.target.fields;
      return (
        <div className="my-6 rounded-xl overflow-hidden">
          <Image
            src={`https:${file.url}`}
            alt={title || "Blog image"}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-600 hover:text-teal-700 underline"
      >
        {children}
      </a>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const local = getLocalBlogPost(slug);
  let title = local?.title;
  let description = local?.excerpt;
  let date = local?.date;
  if (!local) {
    try {
      const cms = await getBlogPostBySlug(slug);
      title = cms?.title as string | undefined;
      description = cms?.excerpt as string | undefined;
      date = cms?.date as string | undefined;
    } catch {
      // fall through to the site defaults
    }
  }
  if (!title) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: `${title} | Origin`,
    description,
    keywords: local?.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Origin",
      publishedTime: date,
      images: [{ url: `${SITE_URL}${local?.image ?? "/heroes/blog.jpg"}` }],
    },
  };
}

// Turns [text](/path) into links; internal paths use the router, others open in a new tab
function renderInline(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    const className = "text-teal-700 font-medium underline underline-offset-2 hover:text-teal-800";
    return href.startsWith("/") ? (
      <Link key={i} href={href} className={className}>{label}</Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>
    );
  });
}

// Renders a post kept in src/data/blogPosts.ts, styled to match the Contentful posts
function renderBlocks(blocks: BlogBlock[]) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "h2":
        return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4">{block.text}</h2>;
      case "ul":
        return (
          <ul key={i} className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
            {block.items.map((item) => <li key={item}>{renderInline(item)}</li>)}
          </ul>
        );
      case "quote":
        return (
          <blockquote key={i} className="border-l-4 border-teal-500 pl-4 py-2 my-6 text-slate-600 italic">
            {block.text}
          </blockquote>
        );
      default:
        return <p key={i} className="text-slate-700 leading-relaxed mb-4">{renderInline(block.text)}</p>;
    }
  });
}

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const localPost = getLocalBlogPost(slug);

  let cmsPost: Awaited<ReturnType<typeof getBlogPostBySlug>> = null;
  if (!localPost) {
    try {
      cmsPost = await getBlogPostBySlug(slug);
    } catch {
      notFound();
    }
    if (!cmsPost) notFound();
  }

  const allPosts = await getAllBlogPosts();
  const listed = allPosts.find((p) => p.slug === slug);
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const post = {
    title: (localPost?.title ?? cmsPost?.title) as string,
    excerpt: (localPost?.excerpt ?? cmsPost?.excerpt) as string,
    author: (localPost?.author ?? cmsPost?.author) as string | undefined,
    date: (localPost?.date ?? cmsPost?.date) as string | undefined,
    // Local posts use their image on cards only; the page hero carries the shared blog photo
    image: localPost ? null : cmsPost?.image ?? null,
  };
  const readingMinutes = localPost ? minutesToRead(blockWords(localPost.content)) : listed?.readingMinutes;

  const stats = [
    ...(formatDate(post.date) ? [{ label: "Published", value: formatDate(post.date)! }] : []),
    ...(post.author ? [{ label: "Author", value: post.author }] : []),
    ...(readingMinutes ? [{ label: "Reading time", value: `${readingMinutes} min read` }] : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author ?? "Origin" },
    publisher: { "@type": "Organization", name: "Origin", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    image: `${SITE_URL}${localPost?.image ?? "/heroes/blog.jpg"}`,
    keywords: localPost?.keywords?.join(", "),
  };

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <ArticleHero
        backHref="/blog"
        backLabel="Blog"
        eyebrow="Blog"
        title={post.title}
        subtitle={post.excerpt}
        stats={stats}
        image="/heroes/blog.jpg"
      />

      <article className="px-4 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero image */}
          {post.image && (
            <div className="relative w-full aspect-[16/9] overflow-hidden mb-10 bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose-origin max-w-2xl mx-auto">
            {localPost
              ? renderBlocks(localPost.content)
              : cmsPost?.content
                ? documentToReactComponents(cmsPost.content as any, richTextOptions)
                : null}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="px-4 sm:px-8 pb-16 sm:pb-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 pt-16">
              More from the blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  post={p}
                  className="border-b border-slate-200 sm:max-lg:[&:nth-child(odd)]:border-r lg:[&:not(:nth-child(3n))]:border-r"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

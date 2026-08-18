import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsCard from "@/components/InsightsCard";
import ArticleHero from "@/components/ArticleHero";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug as string }));
  } catch {
    return [];
  }
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

  let post: Awaited<ReturnType<typeof getBlogPostBySlug>>;

  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  let related: Awaited<ReturnType<typeof getBlogPosts>> = [];
  try {
    const allPosts = await getBlogPosts();
    related = allPosts.filter((p) => p.slug !== slug).slice(0, 4);
  } catch {
    // ignore — related articles are optional
  }

  const stats = [
    ...(formatDate(post.date) ? [{ label: "Published", value: formatDate(post.date)! }] : []),
    ...(post.author ? [{ label: "Author", value: post.author as string }] : []),
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <ArticleHero
        backHref="/blog"
        backLabel="Insights & Updates"
        eyebrow="Blog"
        title={post.title as string}
        subtitle={post.excerpt as string}
        stats={stats}
      />

      <article className="px-4 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero image */}
          {post.image && (
            <div className="relative w-full aspect-[16/9] overflow-hidden mb-10 bg-slate-100">
              <Image
                src={post.image}
                alt={post.title as string}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose-origin max-w-2xl mx-auto">
            {post.content
              ? documentToReactComponents(post.content as any, richTextOptions)
              : null}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="px-4 sm:px-8 pb-16 sm:pb-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {related.map((p) => (
                <InsightsCard
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  image={p.image}
                  title={p.title as string}
                  date={p.date}
                  ctaLabel="Read Article →"
                  accent="blue"
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

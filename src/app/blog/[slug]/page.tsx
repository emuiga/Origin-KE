import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

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
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 text-slate-600 italic">
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
        className="text-blue-600 hover:text-blue-700 underline"
      >
        {children}
      </a>
    ),
  },
};

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="px-4 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {post.title as string}
          </h1>

          {/* Author */}
          {post.author && (
            <p className="text-slate-500 mb-8">By {post.author as string}</p>
          )}

          {/* Hero image */}
          {post.image && (
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-10 bg-slate-100">
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
          <div className="prose-origin">
            {post.content
              ? documentToReactComponents(post.content as any, richTextOptions)
              : null}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getCaseStudyBySlug, getCaseStudies } from "../../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.title} | Origin`,
    description: study.excerpt,
  };
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (_: any, children: any) => (
      <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: any) => (
      <h3 className="text-lg font-bold text-slate-900 mt-8 mb-2">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
      <p className="text-slate-700 leading-relaxed mb-4 text-[1.0625rem]">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-700 text-[1.0625rem]">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: any) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1 text-slate-700 text-[1.0625rem]">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: any) => <li className="leading-relaxed">{children}</li>,
    [BLOCKS.QUOTE]: (_: any, children: any) => (
      <blockquote className="border-l-2 border-slate-300 pl-5 italic text-slate-500 my-6">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-slate-200 my-8" />,
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  const sections = [
    { label: "The Challenge", content: study.challenge },
    { label: "Why We Were Selected", content: study.whySelected },
    { label: "What We Built", content: study.whatWeBuilt },
    { label: "The Results", content: study.results },
    { label: "References", content: study.references },
  ].filter((s) => s.content);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="max-w-2xl mx-auto px-5 pt-24 pb-32">

        {/* Back */}
        <Link
          href="/blog"
          className="text-xs tracking-widest uppercase text-slate-400 hover:text-slate-700 transition-colors"
        >
          ← Blog &amp; Case Studies
        </Link>

        {/* Tags */}
        {study.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {study.tags.map((tag: string) => (
              <span key={tag} className="text-xs text-slate-500 italic">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mt-4 mb-3 text-center">
          {study.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-slate-400 text-center mb-2">
          {study.date
            ? new Date(study.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </p>

        {study.award && (
          <p className="text-sm text-center text-yellow-600 font-semibold mb-6">
            🏆 {study.award}
          </p>
        )}

        <hr className="border-slate-200 mb-8" />

        {/* Excerpt */}
        <p className="text-slate-600 italic text-center mb-10 leading-relaxed">
          {study.excerpt}
        </p>

        <hr className="border-slate-200 mb-10" />

        {/* Sections */}
        {sections.map(({ label, content }) => (
          <section key={label} className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-3">{label}</h2>
            <hr className="border-slate-200 mb-4" />
            <div>{documentToReactComponents(content, richTextOptions)}</div>
          </section>
        ))}

        <hr className="border-slate-200 my-10" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-200 text-sm"
          >
            Partner with us →
          </Link>
          <Link
            href="/blog"
            className="border border-slate-200 text-slate-700 px-7 py-3 rounded-xl font-bold text-center hover:shadow-sm transition-all duration-200 text-sm"
          >
            More case studies
          </Link>
        </div>

      </article>

      <Footer />
    </div>
  );
}

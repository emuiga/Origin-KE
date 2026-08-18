import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ArticleHero from "../../../components/ArticleHero";
import { getCaseStudyBySlug, getCaseStudies } from "../../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

function excerptString(excerpt: any): string {
  if (!excerpt || typeof excerpt !== "string") return "";
  return excerpt;
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
    description: excerptString(study.excerpt),
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
    [BLOCKS.LIST_ITEM]: (_: any, children: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_: any, children: any) => (
      <blockquote className="border-l-2 border-slate-300 pl-5 italic text-slate-500 my-6">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-slate-200 my-8" />,
    // Suppress embedded entries/assets that have no renderer — prevents raw object rendering
    [BLOCKS.EMBEDDED_ENTRY]: () => null,
    [BLOCKS.EMBEDDED_ASSET]: () => null,
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-600 hover:underline"
      >
        {children}
      </a>
    ),
    [INLINES.EMBEDDED_ENTRY]: () => null,
  },
};

function renderField(field: any) {
  if (!field) return null;
  if (field?.nodeType) return documentToReactComponents(field, richTextOptions);
  return null;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  const isResearch = study.type === "research";

  const sections = (
    isResearch
      ? [{ label: "Overview", content: study.body }]
      : [
          { label: "The Challenge", content: study.challenge },
          { label: "Why We Were Selected", content: study.whySelected },
          { label: "What We Built", content: study.whatWeBuilt },
          { label: "The Results", content: study.results },
          { label: "References", content: study.references },
        ]
  ).filter((s) => s.content);

  const excerpt = excerptString(study.excerpt);

  const formattedDate = study.date
    ? new Date(study.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const stats = [
    ...(study.client ? [{ label: "Client", value: study.client }] : []),
    ...(formattedDate ? [{ label: "Date", value: formattedDate }] : []),
    ...(study.tags.length > 0 ? [{ label: "Focus", value: study.tags.join(", ") }] : []),
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <ArticleHero
        backHref="/blog"
        backLabel="Research & Case Studies"
        badge={study.award ? `🏆 ${study.award}` : null}
        badgeMeta={study.award && formattedDate ? formattedDate : null}
        eyebrow={study.client || "Case Study"}
        title={study.title}
        subtitle={excerpt}
        stats={stats}
      />

      <article className="max-w-2xl mx-auto px-5 py-16">

        {/* Sections */}
        {sections.map(({ label, content }) => (
          <section key={label} className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-3">{label}</h2>
            <hr className="border-slate-200 mb-4" />
            <div>{renderField(content)}</div>
          </section>
        ))}

        <hr className="border-slate-200 my-10" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-teal-600 text-white px-7 py-3 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-200 text-sm"
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

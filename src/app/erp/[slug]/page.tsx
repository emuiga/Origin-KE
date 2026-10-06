import { notFound } from "next/navigation";
import ArrowLink from "@/components/ArrowLink";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Check,
  SlidersHorizontal,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHero from "@/components/ArticleHero";
import ErpVisual from "@/components/ErpVisual";
import { erpModules, getErpModule } from "@/data/erp";
import { existingImage } from "@/lib/erpImages";
import { getAllBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const dynamicParams = false;

const reportIcons = [BarChart3, LineChart, PieChart, TrendingUp];

// Seven bar heights (30-100%) derived from the report name, so each tile's mini chart is stable but distinct
function chartBars(seed: string) {
  return Array.from({ length: 7 }, (_, i) => {
    const code = seed.charCodeAt((i * 3) % seed.length) + seed.length * (i + 1);
    return 30 + (code % 8) * 10;
  });
}

export function generateStaticParams() {
  return erpModules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const erpModule = getErpModule(slug);
  if (!erpModule) return {};
  return {
    title: `${erpModule.name} | Origin`,
    description: erpModule.subtitle,
  };
}

export default async function ErpModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const erpModule = getErpModule(slug);
  if (!erpModule) notFound();

  const quoteHref = `/contact?interest=${encodeURIComponent(erpModule.name)}`;
  const otherModules = erpModules.filter((m) => m.slug !== erpModule.slug);
  const allPosts = erpModule.relatedPosts?.length ? await getAllBlogPosts() : [];
  const relatedPosts = (erpModule.relatedPosts ?? [])
    .map((postSlug) => allPosts.find((p) => p.slug === postSlug))
    .filter((p) => p !== undefined);

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <ArticleHero
        backHref="/erp"
        backLabel="ERP Systems"
        eyebrow={erpModule.name}
        title={erpModule.headline}
        subtitle={erpModule.subtitle}
        image="/heroes/erp.jpg"
      />

      {/* Intro */}
      <section className="px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4 mb-8">
              {erpModule.intro.map((paragraph, i) => (
                <p key={paragraph} className={i === 0 ? "text-slate-900 text-xl leading-relaxed" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
            <ArrowLink href={quoteHref}>Get a quote</ArrowLink>
          </div>
          <ErpVisual
            icon={erpModule.icon}
            image={erpModule.image}
            alt={erpModule.name}
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Everything it covers</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              One system in place of the notebooks, spreadsheets and separate tools.
            </p>
          </div>
          <ul className="lg:col-span-2 flex flex-wrap gap-3">
            {erpModule.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-center gap-2.5 rounded-full bg-teal-50 border border-teal-100 pl-3 pr-5 py-2.5 font-medium text-slate-800"
              >
                <span className="w-2 h-2 rounded-full bg-teal-500" aria-hidden="true" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature sections */}
      <section className="px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
          {erpModule.sections.map((section, i) => (
            <div
              key={section.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{section.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{section.blurb}</p>
                {section.bulletsLead && (
                  <p className="font-semibold text-slate-900 mb-4">{section.bulletsLead}</p>
                )}
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-slate-700">
                      <Check className="mt-1 w-4 h-4 shrink-0 text-teal-600" strokeWidth={3} aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <ErpVisual
                icon={erpModule.icon}
                image={section.image}
                alt={section.title}
                className={`aspect-[16/10] ${existingImage(section.image) ? "" : "hidden lg:block"} ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Who it serves */}
      {erpModule.roles && (
        <section
          className="px-4 sm:px-8 py-16 sm:py-24 bg-brand-dark bg-cover bg-center text-white"
          style={{ backgroundImage: "url(/heroes/background.svg)" }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Built for everyone involved</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Each person gets what they need from the same system, without waiting on someone else for it.
              </p>
            </div>
            <dl className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {erpModule.roles.map(({ title, body }) => (
                <div key={title} className="border-t-2 border-teal-400 pt-5">
                  <dt className="text-2xl font-bold mb-2">{title}</dt>
                  <dd className="text-lg text-slate-200 leading-relaxed">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Customisation: shown as a settings panel */}
      {erpModule.customisation && (
        <section className="px-4 sm:px-8 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Set up to fit the way you work
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{erpModule.customisation.blurb}</p>
            </div>
            <div className="lg:col-span-3 rounded-2xl bg-white ring-1 ring-slate-200 shadow-lg overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
                <SlidersHorizontal className="w-5 h-5 text-teal-700" aria-hidden="true" />
                <p className="font-bold text-slate-900">Settings</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {erpModule.customisation.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-100 sm:odd:border-r"
                  >
                    <span className="font-medium text-slate-800">{item}</span>
                    {/* Decorative switch, drawn in the "on" position */}
                    <span className="shrink-0 w-10 h-6 rounded-full bg-teal-600 p-0.5 flex justify-end" aria-hidden="true">
                      <span className="w-5 h-5 rounded-full bg-white shadow" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Reports: shown as dashboard tiles */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Reports that show how things are going
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ready when you need them, for a day, a month or a year.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {erpModule.reports.map((report, i) => {
              const ReportIcon = reportIcons[i % reportIcons.length];
              return (
                <div key={report} className="flex flex-col rounded-2xl bg-surface ring-1 ring-slate-200 p-5">
                  <div className="w-10 h-10 rounded-lg bg-white ring-1 ring-slate-200 text-teal-700 flex items-center justify-center mb-4">
                    <ReportIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 leading-snug mb-5 flex-1">{report}</h3>
                  {/* Decorative mini chart */}
                  <div className="flex items-end gap-1.5 h-10" aria-hidden="true">
                    {chartBars(report).map((height, bar) => (
                      <span
                        key={bar}
                        className={`flex-1 rounded-sm ${bar === 6 ? "bg-teal-600" : "bg-teal-200"}`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Tailored to the way you run things
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            No two businesses work the same way. We set the system up around your process, bring your
            existing records across and train your team on it.
          </p>
          <ArrowLink href={quoteHref}>Get a quote</ArrowLink>
        </div>
      </section>

      {/* Related reading */}
      {relatedPosts.length > 0 && (
        <section className="px-4 sm:px-8 py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">Related reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200">
              {relatedPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  className="border-b border-slate-200 sm:max-lg:[&:nth-child(odd)]:border-r lg:[&:not(:nth-child(3n))]:border-r"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other systems */}
      <section className="px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Other systems</h2>
          <div className="flex flex-wrap gap-3">
            {otherModules.map((m) => (
              <Link
                key={m.slug}
                href={`/erp/${m.slug}`}
                className="border border-slate-200 bg-white rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                {m.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

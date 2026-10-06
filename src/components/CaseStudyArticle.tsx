import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Image from "next/image";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHero from "@/components/ArticleHero";
import type { LocalCaseStudy } from "@/data/caseStudies";

export default function CaseStudyArticle({ study }: { study: LocalCaseStudy }) {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <ArticleHero
        backHref="/case-studies"
        backLabel="Case Studies"
        badge={study.badge}
        badgeMeta={study.badge ? study.year : null}
        eyebrow={study.eyebrow}
        title={study.title}
        subtitle={study.excerpt}
        stats={study.stats}
        image="/heroes/casestudyhero.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-16 sm:space-y-20">
        <div className="relative aspect-[1904/964] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-lg bg-white">
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        {study.sections.map((section) => (
          <section key={section.kicker}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">{section.heading}</h2>

            {section.paragraphs && (
              <div className="text-slate-600 text-base leading-relaxed space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <Check className="mt-1 w-4 h-4 shrink-0 text-teal-600" strokeWidth={3} aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {section.cards && (
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${section.paragraphs ? "mt-6" : ""}`}>
                {section.cards.map(({ title, body }, cardIndex) => (
                  <div key={title} className="border border-slate-100 bg-white rounded-xl p-5">
                    {section.numbered && (
                      <p className="text-xs font-bold tracking-widest text-teal-500 uppercase mb-2">
                        {String(cardIndex + 1).padStart(2, "0")}
                      </p>
                    )}
                    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Stack */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Under the hood</h2>
          <div className="flex flex-wrap gap-2.5">
            {study.stack.map((item) => (
              <span key={item} className="border border-slate-200 bg-white rounded-full px-4 py-1.5 text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* External links */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">See it for yourself</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {study.links.map(({ label, detail, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 border border-slate-200 bg-white rounded-xl px-5 py-4 hover:border-teal-300 hover:shadow-sm transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors text-sm">{label}</p>
                  <p className="text-xs text-slate-400 truncate">{detail}</p>
                </div>
                <span className="text-slate-300 group-hover:text-teal-400 transition-colors">↗</span>
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-slate-200" />

        {/* CTAs */}
        <section className="text-center">
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Working on something where the technology has to be dependable and the stakes are real? We would
            like to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ArrowLink href="/contact">Partner with us</ArrowLink>
            <Link
              href="/case-studies"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:shadow-md transition-all duration-200"
            >
              More case studies
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

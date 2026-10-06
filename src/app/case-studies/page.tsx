import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtworkHero from "@/components/ArtworkHero";
import InsightsCard from "@/components/InsightsCard";
import { localCaseStudies } from "@/data/caseStudies";
import { getCaseStudies } from "@/lib/contentful";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Case Studies | Origin",
  description:
    "How Origin builds dependable technology for high-stakes work, from crisis damage reporting to AI for pipeline integrity.",
};

// E4C has its own hand-built page at /case-studies/e4c
const e4c = {
  slug: "e4c",
  eyebrow: "Engineering for Change · AI Pilot Competition",
  title: "Turning 15 years of sustainable development knowledge into decision-ready AI",
  excerpt:
    "How Origin won the E4C AI Pilot Competition with E4CInsights, an AI pipeline that produces cited, decision-grade policy briefs.",
  image: "/case-studies/e4c.jpg",
  imageAlt: "Engineering for Change home page: Together, We're Building a Sustainable World",
  imageClass: "object-cover object-top",
  badge: "🏆 Winner · E4C AI Pilot Competition",
};

const featured = [
  ...localCaseStudies.map((s) => ({ ...s, imageClass: "object-cover object-top" })),
  e4c,
];

export default async function CaseStudiesPage() {
  let cmsStudies: Awaited<ReturnType<typeof getCaseStudies>> = [];
  try {
    cmsStudies = await getCaseStudies();
  } catch {
    // CMS unavailable: the page still shows the studies kept in the codebase
  }

  // Pages that live in the codebase take precedence over a CMS entry with the same slug
  const featuredSlugs = new Set(featured.map((s) => s.slug));
  const moreStudies = cmsStudies.filter((s) => !featuredSlugs.has(s.slug));

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <ArtworkHero src="/heroes/casestudyhero.svg" title="Case Studies" />

      {/* Featured */}
      <section className="px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-10 sm:mb-14">Our work, in detail</h2>
          <div className="space-y-12 sm:space-y-20">
            {featured.map((study, i) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
              >
                <div
                  className={`relative aspect-[1904/964] overflow-hidden rounded-2xl ring-1 ring-slate-200 group-hover:ring-teal-300 shadow-md group-hover:shadow-xl transition-all bg-white ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className={study.imageClass}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
                <div>
                  {study.badge && (
                    <span className="inline-block text-xs font-bold tracking-widest text-yellow-700 uppercase bg-yellow-100 border border-yellow-200 px-3 py-1 rounded-full mb-4">
                      {study.badge}
                    </span>
                  )}
                  <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-3">{study.eyebrow}</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4 group-hover:text-teal-800 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{study.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="w-11 h-11 rounded-full border border-slate-300 text-slate-900 flex items-center justify-center transition-colors group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white">
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-semibold text-slate-900">Read case study</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More */}
      {moreStudies.length > 0 && (
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-10 sm:mb-14">More case studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {moreStudies.map((cs) => (
              <InsightsCard
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                image={cs.thumbnail}
                title={cs.title}
                excerpt={cs.excerpt}
                date={cs.date}
                eyebrow={cs.client}
                badge={cs.award ? "🏆" : null}
                ctaLabel="Read case study"
                accent="amber"
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

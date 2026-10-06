import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArrowLink from "@/components/ArrowLink";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtworkHero from "@/components/ArtworkHero";
import ErpVisual from "@/components/ErpVisual";
import { erpModules, erpCommonFeatures } from "@/data/erp";
import { getAllBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "ERP Systems | Origin",
  description:
    "ERP systems built and tailored for restaurants, retail and wholesale, hospitals, schools, property, payroll, security firms and petrol stations.",
};

const guideSlugs = ["what-is-an-erp-system", "custom-software-or-off-the-shelf", "the-spreadsheet-that-runs-your-company"];

export default async function ErpPage() {
  const allPosts = await getAllBlogPosts();
  const guides = guideSlugs.map((slug) => allPosts.find((p) => p.slug === slug)).filter((p) => p !== undefined);

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <ArtworkHero src="/heroes/erpsystemhero.svg" title="ERP Systems" />

      {/* Modules */}
      <section id="modules" className="px-4 sm:px-8 py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 max-w-2xl">
            Pick the system that fits your business
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10 sm:mb-14">
            We build and tailor ERP systems that connect your sales, stock, people and accounts, so the
            day-to-day runs on one set of numbers.
          </p>
          {/* Ruled catalogue grid: the 1px gaps over the slate background draw the lines between cells */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {erpModules.map((module) => (
              <Link
                key={module.slug}
                href={`/erp/${module.slug}`}
                className="group flex flex-col bg-white p-6 sm:p-7 hover:bg-teal-50 transition-colors"
              >
                <ErpVisual
                  icon={module.icon}
                  image={module.image}
                  alt=""
                  plain
                  className="aspect-[4/3] mb-6"
                />
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">{module.shortName}</h3>
                <p className="text-sm font-medium text-teal-700 mb-3">Management System</p>
                <p className="text-slate-600 leading-relaxed flex-1 mb-6">{module.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">See details</span>
                  <span className="w-11 h-11 rounded-full border border-slate-300 text-slate-900 flex items-center justify-center transition-colors group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white">
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common features */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-10 sm:mb-14 max-w-3xl">
            What you get in every system
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {erpCommonFeatures.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="px-4 sm:px-8 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8 sm:mb-12">New to ERP? Start here</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200">
              {guides.map((post) => (
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

      {/* CTA */}
      <section className="px-4 sm:px-8 pb-16 sm:pb-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Most of our work starts with a business that does not fit a template. Tell us how yours runs and
            we will scope a system around it.
          </p>
          <ArrowLink href="/contact?interest=custom%20ERP%20system">Talk to us</ArrowLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}

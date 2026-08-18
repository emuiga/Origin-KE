'use client';

import { useState } from 'react';
import BlogPostsGrid from './BlogPostsGrid';
import InsightsCard from './InsightsCard';

interface BlogPost {
  slug: string;
  title: string;
  image: string | null;
  excerpt: string;
  author: string;
  date?: string;
}

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  excerpt: string;
  date: string;
  award: string | null;
  tags: string[];
  thumbnail: string | null;
}

const TABS = [
  { id: 'blogs', label: 'Blogs', watermark: 'LATEST FEATURES', heading: 'OUR STORIES' },
  { id: 'case-studies', label: 'Case Studies', watermark: 'PROVEN RESULTS', heading: 'CASE STUDIES' },
] as const;

export default function InsightsSection({
  posts,
  caseStudies,
  postsError,
}: {
  posts: BlogPost[];
  caseStudies: CaseStudy[];
  postsError: boolean;
}) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('blogs');
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.2em] text-teal-700 uppercase mb-8 sm:mb-10 text-center">
          Insights &amp; Updates
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          {TABS.map((tab, i) => (
            <div key={tab.id} className="flex items-center gap-4 sm:gap-6">
              {i > 0 && <span className="text-slate-300 text-lg sm:text-xl">|</span>}
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`text-lg sm:text-2xl font-extrabold tracking-tight ${
                  activeTab === tab.id
                    ? 'text-amber-500'
                    : 'text-slate-900 hover:text-teal-700'
                }`}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>

        {/* Attention-grabbing headline block */}
        <div className="relative mb-10 sm:mb-16 select-none">
          <h2 className="w-full text-center text-5xl sm:text-7xl lg:text-8xl font-extrabold text-teal-800/15 tracking-tight leading-none whitespace-nowrap overflow-hidden">
            {active.watermark}
          </h2>
          <h3 className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {active.heading}
          </h3>
        </div>

        {/* Blogs panel */}
        {activeTab === 'blogs' && (
          postsError ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                Unable to load blog posts right now. Please try again later.
              </p>
            </div>
          ) : (
            <BlogPostsGrid posts={posts} />
          )
        )}

        {/* Case studies panel */}
        {activeTab === 'case-studies' && (
          caseStudies.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Coming Soon</h2>
              <p className="text-slate-500 text-lg max-w-md mx-auto">
                We&apos;re documenting our recent work. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {caseStudies.map((cs) => (
                <InsightsCard
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  image={cs.thumbnail}
                  title={cs.title}
                  excerpt={cs.excerpt}
                  date={cs.date}
                  eyebrow={cs.client}
                  badge={cs.award ? '🏆' : null}
                  ctaLabel="Read Case Study →"
                  accent="amber"
                />
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPatterns } from "@/components/DecorativePatterns";
import BlogPostsGrid from "@/components/BlogPostsGrid";
import { getBlogPosts, getCaseStudies } from "@/lib/contentful";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];
  let caseStudies: Awaited<ReturnType<typeof getCaseStudies>> = [];
  let postsError = false;

  // Fetch independently so a CMS error on one doesn't break the other
  try {
    posts = await getBlogPosts();
  } catch {
    postsError = true;
  }

  try {
    caseStudies = await getCaseStudies();
  } catch {
    // content type may not exist yet — silently fall back to hardcoded entries
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BlogPatterns />
      <Header />

      {/* Blog posts */}
      <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] text-blue-700 uppercase mb-8 sm:mb-10">
            Insights &amp; Updates
          </p>
          {postsError ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                Unable to load blog posts right now. Please try again later.
              </p>
            </div>
          ) : (
            <BlogPostsGrid posts={posts} />
          )}
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="px-4 sm:px-8 py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] text-blue-700 uppercase mb-8 sm:mb-10">
            Research &amp; Case Studies
          </p>

          <div className="divide-y divide-slate-200">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col sm:flex-row gap-6 py-8 hover:bg-white transition-colors"
              >
                {cs.thumbnail && (
                  <div className="shrink-0 relative w-full sm:w-44 h-32 rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={cs.thumbnail}
                      alt={cs.client}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 176px"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    {cs.award && (
                      <span className="text-xs font-semibold text-yellow-600">🏆 {cs.award}</span>
                    )}
                    <span className="text-xs text-slate-400">
                      {cs.date ? new Date(cs.date).getFullYear() : ""}
                    </span>
                  </div>
                  <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-1">{cs.client}</p>
                  <h2 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{cs.excerpt}</p>
                  <div className="flex gap-3 mt-2">
                    {cs.tags.map((tag: string) => (
                      <span key={tag} className="text-xs text-slate-400 italic">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

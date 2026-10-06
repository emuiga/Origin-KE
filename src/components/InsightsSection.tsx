import BlogPostsGrid from './BlogPostsGrid';
import type { BlogCardPost } from './BlogCard';

export default function InsightsSection({
  posts,
  postsError,
}: {
  posts: BlogCardPost[];
  postsError: boolean;
}) {
  return (
    <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.2em] text-teal-700 uppercase mb-8 sm:mb-10 text-center">
          Insights &amp; Updates
        </p>

        {/* Attention-grabbing headline block */}
        <div className="relative mb-10 sm:mb-16 select-none">
          <h2 className="w-full text-center text-5xl sm:text-7xl lg:text-8xl font-extrabold text-teal-800/15 tracking-tight leading-none whitespace-nowrap overflow-hidden">
            LATEST FEATURES
          </h2>
          <h3 className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR STORIES
          </h3>
        </div>

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
  );
}

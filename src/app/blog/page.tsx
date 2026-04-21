import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPatterns } from "@/components/DecorativePatterns";
import BlogPostsGrid from "@/components/BlogPostsGrid";
import { getBlogPosts } from "@/lib/contentful";

export const revalidate = 3600;

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];
  let error = false;

  try {
    posts = await getBlogPosts();
  } catch {
    error = true;
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BlogPatterns />
      <Header />

      <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Top-left label */}
          <p className="text-[13px] font-semibold tracking-[0.2em] text-blue-700 uppercase mb-8 sm:mb-10">
            Insights & Updates
          </p>

          {error ? (
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

      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPatterns } from "@/components/DecorativePatterns";
import InsightsSection from "@/components/InsightsSection";
import { getBlogPosts, getCaseStudies } from "@/lib/contentful";

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
    <div className="min-h-screen bg-surface relative overflow-hidden">
      <BlogPatterns />
      <Header />

      <InsightsSection posts={posts} caseStudies={caseStudies} postsError={postsError} />

      <Footer />
    </div>
  );
}

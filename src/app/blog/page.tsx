import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPatterns } from "@/components/DecorativePatterns";
import InsightsSection from "@/components/InsightsSection";
import type { Metadata } from "next";
import { getAllBlogPosts, SITE_URL } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Origin",
  description:
    "Practical writing on business systems, ERP, M-Pesa integration, websites and AI for Kenyan businesses, from the team at Origin.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden">
      <BlogPatterns />
      <Header />

      <InsightsSection posts={posts} postsError={false} />

      <Footer />
    </div>
  );
}

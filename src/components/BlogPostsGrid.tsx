'use client';

import { useState } from 'react';
import InsightsCard from './InsightsCard';

interface BlogPost {
  slug: string;
  title: string;
  image: string | null;
  excerpt: string;
  author: string;
  date?: string;
}

const POSTS_PER_PAGE = 6;

export default function BlogPostsGrid({ posts }: { posts: BlogPost[] }) {
  const [page, setPage] = useState(1);

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Coming Soon</h2>
        <p className="text-slate-500 text-lg max-w-md mx-auto">
          We&apos;re working on our first posts. Check back soon for insights on
          technology, design, and product development.
        </p>
      </div>
    );
  }

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <>
      {/* Posts — compact card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {paginatedPosts.map((post) => (
          <InsightsCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            image={post.image}
            title={post.title as string}
            excerpt={post.excerpt}
            date={post.date}
            ctaLabel="Read Article →"
            accent="blue"
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-10 h-10 text-sm font-medium transition-colors ${
                num === page
                  ? 'bg-teal-600 text-white'
                  : 'text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
}

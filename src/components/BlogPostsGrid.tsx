'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  image: string | null;
  excerpt: string;
  author: string;
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

  const heroPost = posts[0];
  const remainingPosts = posts.slice(1);
  const totalPages = Math.max(1, Math.ceil(remainingPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = remainingPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <>
      {/* Hero post — full width */}
      <Link href={`/blog/${heroPost.slug}`} className="group block mb-12 sm:mb-16">
        <article>
          {heroPost.image && (
            <div className="relative w-full aspect-[16/7] overflow-hidden mb-6 bg-slate-100">
              <Image
                src={heroPost.image}
                alt={heroPost.title as string}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {heroPost.title as string}
          </h2>
          {heroPost.excerpt && (
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-4">
              {heroPost.excerpt as string}
            </p>
          )}
          <p className="text-blue-600 font-medium text-sm underline underline-offset-4">
            Read Article
          </p>
        </article>
      </Link>

      {/* Remaining posts — 3-column grid */}
      {paginatedPosts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {paginatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full flex flex-col">
                {post.image && (
                  <div className="relative w-full aspect-[3/2] overflow-hidden mb-4 bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title as string}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title as string}
                </h3>
                {post.excerpt && (
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-3">
                    {post.excerpt as string}
                  </p>
                )}
                <p className="text-blue-600 font-medium text-sm underline underline-offset-4 text-center">
                  Read Article
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}

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
                  ? 'bg-blue-600 text-white'
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

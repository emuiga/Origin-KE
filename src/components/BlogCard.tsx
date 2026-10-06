import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface BlogCardPost {
  slug: string;
  title: string;
  image: string | null;
  excerpt?: string;
  date?: string;
  readingMinutes?: number | null;
}

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogCard({ post, className = "" }: { post: BlogCardPost; className?: string }) {
  const meta = [formatDate(post.date), post.readingMinutes ? `${post.readingMinutes} min read` : null].filter(Boolean);

  return (
    <Link href={`/blog/${post.slug}`} className={`group flex flex-col p-5 sm:p-6 ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100 mb-5">
        {post.image && (
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-snug mb-2 group-hover:text-teal-800 transition-colors">
        {post.title}
      </h3>
      {post.excerpt && <p className="text-slate-600 leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>}
      <div className="mt-auto flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">{meta.join("  ·  ")}</p>
        <span className="w-10 h-10 shrink-0 rounded-full border border-slate-300 text-slate-900 flex items-center justify-center transition-colors group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white">
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

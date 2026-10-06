import Link from 'next/link';
import ArrowCue from './ArrowCue';
import Image from 'next/image';

export function formatCardDate(date?: string | null) {
  if (!date) return null;
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface InsightsCardProps {
  href: string;
  image: string | null;
  title: string;
  excerpt?: string;
  date?: string | null;
  eyebrow?: string | null;
  badge?: string | null;
  ctaLabel: string;
  accent?: 'blue' | 'amber';
}

export default function InsightsCard({
  href,
  image,
  title,
  excerpt,
  date,
  eyebrow,
  badge,
  ctaLabel,
  accent = 'blue',
}: InsightsCardProps) {
  const ringHover = accent === 'amber' ? 'hover:ring-amber-300' : 'hover:ring-teal-300';

  return (
    <Link href={href} className="group block h-full">
      <article className={`h-full flex flex-col bg-white ring-1 ring-slate-200 ${ringHover}`}>
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          {formatCardDate(date) && (
            <span className="absolute top-3 left-3 text-[11px] font-bold text-white bg-slate-900/80 px-2.5 py-1">
              {formatCardDate(date)}
            </span>
          )}
          {badge && (
            <span className="absolute top-3 right-3 text-[11px] font-bold text-slate-900 bg-yellow-400 px-2 py-1">
              {badge}
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col p-4 sm:p-5">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-1.5">
              {eyebrow}
            </p>
          )}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2 line-clamp-2">
            {title}
          </h3>
          {excerpt && (
            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-3 line-clamp-3">
              {excerpt}
            </p>
          )}
          <ArrowCue label={ctaLabel} className="text-sm" />
        </div>
      </article>
    </Link>
  );
}

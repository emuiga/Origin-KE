import BackLink from "./BackLink";
import Image from "next/image";

interface StatItem {
  label: string;
  value: string;
}

interface ArticleHeroProps {
  backHref: string;
  backLabel: string;
  badge?: string | null;
  badgeMeta?: string | null;
  eyebrow: string;
  title: string;
  subtitle?: string | null;
  stats?: StatItem[];
  // Optional background photo, shown behind a dark overlay
  image?: string;
}

export default function ArticleHero({
  backHref,
  backLabel,
  badge,
  badgeMeta,
  eyebrow,
  title,
  subtitle,
  stats,
  image,
}: ArticleHeroProps) {
  return (
    <>
      <section className="px-4 sm:px-8 pt-24 pb-16 bg-slate-950 text-white relative overflow-hidden">
        {image && (
          <>
            <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/60" />
          </>
        )}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <circle cx="92%" cy="-10%" r="280" fill="none" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
          <circle cx="92%" cy="-10%" r="180" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
          <circle cx="6%" cy="105%" r="140" fill="none" stroke="rgba(20,184,166,0.10)" strokeWidth="1" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto">
          <BackLink href={backHref} label={backLabel} />

          {(badge || badgeMeta) && (
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {badge && (
                <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}
              {badgeMeta && (
                <span className="text-xs text-slate-400 tracking-widest uppercase">{badgeMeta}</span>
              )}
            </div>
          )}

          {eyebrow && (
            <p className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3">
              {eyebrow}
            </p>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>

      {stats && stats.length > 0 && (
        <section className="border-b border-slate-100 px-4 sm:px-8 py-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">{label}</p>
                <p className="text-base font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

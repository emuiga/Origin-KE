import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Back link for dark hero sections
export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm pl-1.5 pr-5 py-1.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-colors mb-10"
    >
      <span className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center transition-transform group-hover:-translate-x-0.5">
        <ArrowLeft className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
      </span>
      {label}
    </Link>
  );
}

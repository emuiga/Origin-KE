import { ArrowRight, ArrowUpRight } from "lucide-react";

// Label with an arrow in an outlined circle, for use inside a link or card that has the "group" class.
// The circle fills teal when the group is hovered.
export default function ArrowCue({
  label,
  external = false,
  className = "",
}: {
  label: string;
  // Use the up-right arrow for links that leave the site
  external?: boolean;
  className?: string;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <span className={`inline-flex items-center gap-3 font-semibold text-slate-900 ${className}`}>
      <span className="w-9 h-9 shrink-0 rounded-full border border-slate-300 flex items-center justify-center transition-colors group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </span>
      {label}
    </span>
  );
}

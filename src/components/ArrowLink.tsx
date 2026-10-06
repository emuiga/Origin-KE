import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  // "teal" for light backgrounds, "bright" for dark ones
  variant?: "teal" | "bright";
  className?: string;
}

const variants = {
  teal: {
    button: "bg-teal-600 text-white shadow-md hover:shadow-xl",
    chip: "bg-white text-teal-700",
  },
  bright: {
    button: "bg-teal-400 text-slate-900 hover:bg-teal-300 hover:shadow-xl",
    chip: "bg-slate-900 text-white",
  },
};

// Primary call-to-action button with the arrow in a circle, matching BackLink
export default function ArrowLink({ href, children, variant = "teal", className = "" }: ArrowLinkProps) {
  const style = variants[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-xl pl-7 pr-3 py-3 font-bold transition-all duration-200 ${style.button} ${className}`}
    >
      {children}
      <span
        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 ${style.chip}`}
      >
        <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
      </span>
    </Link>
  );
}

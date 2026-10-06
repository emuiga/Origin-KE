import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { existingImage } from "@/lib/erpImages";

interface ErpVisualProps {
  icon: LucideIcon;
  image?: string;
  alt: string;
  className?: string;
  // Show the illustration without the tinted, rounded panel behind it
  plain?: boolean;
}

// Shows the supplied illustration on a light panel, or an icon panel until one is added in src/data/erp.ts
export default function ErpVisual({ icon: Icon, image: wanted, alt, className = "", plain = false }: ErpVisualProps) {
  const image = existingImage(wanted);
  // In development, name the file an empty slot is waiting for
  const missing = process.env.NODE_ENV === "development" && wanted && !image ? wanted : null;

  return (
    <div
      className={`relative overflow-hidden ${
        image ? (plain ? "" : "rounded-2xl bg-teal-50") : "rounded-2xl bg-gradient-to-br from-brand-dark to-teal-700"
      } ${className}`}
    >
      {image ? (
        <Image src={image} alt={alt} fill className={plain ? "object-contain" : "object-contain p-4"} sizes="(max-width: 1024px) 100vw, 50vw" />
      ) : (
        <>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <circle cx="88%" cy="8%" r="120" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
            <circle cx="88%" cy="8%" r="70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <circle cx="8%" cy="100%" r="90" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-1/4 h-1/4 text-white/90" strokeWidth={1.25} aria-hidden="true" />
          </div>
          {missing && (
            <p className="absolute bottom-2 left-3 right-3 text-[11px] font-mono text-white/70 truncate">
              add public{missing}
            </p>
          )}
        </>
      )}
    </div>
  );
}

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AboutPatterns } from "@/components/DecorativePatterns";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface relative overflow-hidden">
      <AboutPatterns />

      <Header />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">
            WHO WE ARE
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            We are a lean team of builders
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Origin is a Nairobi-based digital agency. We work directly with business owners to design, build and ship websites, apps and internal tools that solve real problems.
          </p>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-slate-50">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">
            RECOGNITION
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-12">
            Award-winning work
          </h2>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-yellow-300 rounded-2xl px-8 py-8 shadow-md max-w-2xl mx-auto">
            <div className="text-6xl">🏆</div>
            <div className="text-left">
              <p className="text-xs font-bold tracking-widest text-yellow-600 uppercase mb-1">Winner @ The E4C AI Pilot Competition</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Engineering for Change</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We built <span className="font-semibold">#E4CInsights</span>, an AI pipeline that queries vetted sustainable-development knowledge, pulls live stats from World Bank and WHO, and synthesises fully cited, decision-grade policy briefs with a human in the loop.
              </p>
            </div>
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-dashed border-slate-300 rounded-2xl px-8 py-8 max-w-2xl mx-auto mt-6">
            <div className="text-6xl">📰</div>
            <div className="text-left">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Part of the team was also involved in</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Marine Cargo Insurance Platform</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                The digital marine cargo insurance module on the KIFWA platform, launched as{" "}
                <a href="https://marinebonds.co.ke/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">
                  Marine Bonds
                </a>
                {" "}for importers and clearing agents, covered on national TV and in the press ahead of its July 1 rollout.
              </p>
              <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 text-sm">
                <a href="https://youtu.be/LHrZX6vOT94?si=Hkw9tiJWXyD6ETO_" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">
                  Watch the TV feature →
                </a>
                <a href="https://newstrends.co.ke/importers-clearing-agents-get-new-digital-marine-cargo-insurance-kifwa-platform-ahead-of-july-1-deadline/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">
                  Read the NewsTrends article →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-24">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">
            JOIN THE CREW
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            We&apos;re always looking for curious, talented people
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            If you love building things that matter and solving real problems for real businesses, we should talk.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all duration-200"
          >
            Say hello &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

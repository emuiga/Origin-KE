import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E4C AI Pilot Competition: Case Study | Origin",
  description:
    "How Origin won the Engineering for Change AI Pilot Competition by building E4CInsights, an AI pipeline that turns sustainable development knowledge into decision-grade policy briefs.",
};

export default function E4CCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="px-4 sm:px-8 pt-24 pb-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Explore-feature-image2-470x470.jpg"
            alt="E4C AI Pilot"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        {/* Abstract shapes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          {/* Large circle ring — top right */}
          <circle cx="92%" cy="-10%" r="280" fill="none" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
          <circle cx="92%" cy="-10%" r="180" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
          {/* Small circle — bottom left */}
          <circle cx="6%" cy="105%" r="140" fill="none" stroke="rgba(59,130,246,0.10)" strokeWidth="1" />
          {/* Diagonal lines — top left */}
          <line x1="0" y1="30%" x2="12%" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="0" y1="50%" x2="20%" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          {/* Dot cluster — mid right */}
          {[0,1,2,3,4].map((col) =>
            [0,1,2,3].map((row) => (
              <circle
                key={`${col}-${row}`}
                cx={`${78 + col * 2.2}%`}
                cy={`${55 + row * 10}%`}
                r="1.5"
                fill="rgba(255,255,255,0.07)"
              />
            ))
          )}
          {/* Small square — lower center */}
          <rect x="48%" y="80%" width="32" height="32" fill="none" stroke="rgba(99,102,241,0.10)" strokeWidth="1" transform="rotate(20, 48%, 80%)" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/blog#case-studies"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors mb-10"
          >
            ← Research &amp; Case Studies
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
              🏆 Winner @ The E4C AI Pilot Competition
            </span>
            <span className="text-xs text-slate-400 tracking-widest uppercase">2026</span>
          </div>
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Engineering for Change
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Turning 15 Years of Sustainable Development Knowledge into Decision-Ready AI
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            E4C challenged builders to unlock their knowledge base with AI. Origin built E4CInsights and won Best Overall out of all competing teams.
          </p>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="border-b border-slate-100 px-4 sm:px-8 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Result", value: "1st Place" },
            { label: "Prize", value: "$2,500" },
            { label: "Track", value: "Track 1: Knowledge Access" },
            { label: "Year", value: "2026" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">{label}</p>
              <p className="text-base font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-20">

        {/* The Challenge */}
        <section>
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">01 / The Challenge</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            A decade and a half of knowledge, largely untapped
          </h2>
          <div className="text-slate-600 text-base leading-relaxed space-y-4">
            <p>
              Engineering for Change (E4C) has spent over 15 years building one of the most comprehensive vetted
              libraries of sustainable development resources on the web. The problem: that knowledge lived in a
              static form. Practitioners, students, and community members could search it but could not get
              it synthesised into something immediately useful at the point of a decision.
            </p>
            <p>
              E4C put up a $7,500 prize and issued a challenge across three tracks asking builders to answer
              three core questions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>How can AI improve access to the insights E4C has built over the years?</li>
              <li>How might AI increase the relevance of their data for practitioners and students?</li>
              <li>How can AI improve human interactions within E4C&apos;s global community?</li>
            </ul>
            <p>
              Track 1, which Origin entered, focused specifically on the first two questions: making knowledge
              accessible and turning it into something decision-ready.
            </p>
          </div>
        </section>

        <div className="border-t border-slate-100" />

        {/* Why Origin */}
        <section>
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">02 / Why Origin Was Selected</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            Trust, transparency, and a human in the loop
          </h2>
          <div className="text-slate-600 text-base leading-relaxed space-y-4">
            <p>
              Most AI approaches to knowledge retrieval summarise and present. Origin took a different
              position: every claim in any output had to be traceable to a verified source. We called it
              trust-but-verify.
            </p>
            <p>
              The judges at E4C selected E4CInsights as the Best Overall winner because it directly served
              E4C&apos;s mission of making engineering knowledge actionable for people making real decisions,
              while staying rigorous and transparent about where every piece of information came from.
            </p>
            <p>
              The human-in-the-loop review step was also a key differentiator. Before any policy brief reaches
              the end user, a human reviewer signs off on it. This was recognised as a responsible approach to
              deploying AI in high-stakes knowledge domains.
            </p>
          </div>
        </section>

        <div className="border-t border-slate-100" />

        {/* What We Built */}
        <section>
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">03 / What We Built</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            E4CInsights: an AI pipeline for decision-grade policy briefs
          </h2>
          <div className="text-slate-600 text-base leading-relaxed space-y-4">
            <p>
              E4CInsights is an AI pipeline with four core steps:
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                step: "01",
                title: "Knowledge Query",
                body: "The pipeline queries E4C's vetted sustainable development knowledge base to surface relevant, peer-reviewed material for any given topic.",
              },
              {
                step: "02",
                title: "Live Data Enrichment",
                body: "Real-time statistics are pulled from World Bank and WHO APIs, grounding every brief in current, authoritative figures rather than static snapshots.",
              },
              {
                step: "03",
                title: "Synthesis",
                body: "An AI layer synthesises the retrieved knowledge and live data into a structured, fully cited policy brief. No unsourced claims.",
              },
              {
                step: "04",
                title: "Human Review",
                body: "Before delivery, a human reviewer checks the output for accuracy and relevance. The system is designed so the AI assists the human, not the other way around.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="border border-slate-100 rounded-xl p-5">
                <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2">{step}</p>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-slate-100" />

        {/* Results */}
        <section>
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">04 / The Results</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            Best Overall, out of all teams across all tracks
          </h2>
          <div className="text-slate-600 text-base leading-relaxed space-y-4">
            <p>
              E4CInsights won Best Overall at the 2026 E4C AI Pilot Competition, the top award across all
              competing teams regardless of track.
            </p>
            <p>
              The judges highlighted the combination of citation rigour, live data integration, and the
              human-in-the-loop design as the standout qualities. The pipeline demonstrated that AI does not
              have to choose between being useful and being trustworthy.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { metric: "Best Overall", detail: "Top award across all tracks and teams" },
              { metric: "$2,500", detail: "Prize awarded" },
              { metric: "Track 1", detail: "Knowledge access and relevance" },
            ].map(({ metric, detail }) => (
              <div key={metric} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <p className="text-2xl font-extrabold text-slate-900 mb-1">{metric}</p>
                <p className="text-sm text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-slate-100" />

        {/* External links */}
        <section>
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">References</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">From E4C directly</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.engineeringforchange.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-slate-200 rounded-xl px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="flex-1">
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm">Engineering for Change</p>
                <p className="text-xs text-slate-400">engineeringforchange.org</p>
              </div>
              <span className="text-slate-300 group-hover:text-blue-400 transition-colors">↗</span>
            </a>
            <a
              href="https://www.engineeringforchange.org/news/solutions-built-on-transparency-trust-but-verify-and-design-for-failure-won-our-ai-hackathon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-slate-200 rounded-xl px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="flex-1">
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm">E4C Coverage</p>
                <p className="text-xs text-slate-400">engineeringforchange.org</p>
              </div>
              <span className="text-slate-300 group-hover:text-blue-400 transition-colors">↗</span>
            </a>
          </div>
        </section>

        <div className="border-t border-slate-100" />

        {/* CTAs */}
        <section className="text-center">
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
            We believe great technology and responsible innovation are the same thing. If you are working on
            something that matters in sustainability, development, or beyond, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl transition-all duration-200"
            >
              Partner with us →
            </Link>
            <Link
              href="/blog#case-studies"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:shadow-md transition-all duration-200"
            >
              More case studies
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

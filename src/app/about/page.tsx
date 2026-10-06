import Link from "next/link";
import ArrowCue from "@/components/ArrowCue";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowLink from "@/components/ArrowLink";
import { AboutPatterns } from "@/components/DecorativePatterns";

const whatWeDo = [
  {
    title: "Business systems",
    body: "ERP systems tailored to how an organisation runs, for schools, restaurants, retail, hospitals, property, payroll, security firms and petrol stations.",
    href: "/erp",
    linkLabel: "See our ERP systems",
  },
  {
    title: "Websites and apps",
    body: "Fast, clear websites and mobile-first apps, built to work on the phones and connections people actually have.",
    href: "/portfolio",
    linkLabel: "See our work",
  },
  {
    title: "AI you can check",
    body: "AI tools that answer from your own documents, cite their sources and keep a qualified person in the loop.",
    href: "/case-studies",
    linkLabel: "Read the case studies",
  },
  {
    title: "Internal tools and integrations",
    body: "Custom tools that replace spreadsheets and connect the systems you already use, including M-Pesa payments.",
    href: "/contact",
    linkLabel: "Tell us what you need",
  },
];

const beliefs = [
  {
    title: "Fix the system before the screen",
    body: "We start with how work moves through your organisation. The app or website comes after the records behind it can be trusted.",
  },
  {
    title: "Build for real conditions",
    body: "Older phones, weak signal and costly data are normal. Matata, our crisis reporting tool, saves a report on the phone and sends it when the network returns.",
  },
  {
    title: "Show the evidence",
    body: "When we use AI, every answer points to its source and high-stakes output is reviewed by a person before anyone acts on it.",
  },
  {
    title: "Work in the open",
    body: "You deal directly with the people building your product. Where a project allows it, we publish the code: Matata and PipelineGPT are both open source.",
  },
];

const clients = [
  { name: "KIFWA", sector: "Clearing and forwarding" },
  { name: "Bechfam.io", sector: "Cloud solutions" },
  { name: "Nyandarua County Assembly", sector: "Government and public sector" },
  { name: "Prime Voice Media", sector: "Voice-over and audio visual" },
  { name: "Primesoc", sector: "Cybersecurity" },
  { name: "Engineering for Change", sector: "Sustainable development" },
];

export const metadata: Metadata = {
  title: "About | Origin",
  description:
    "Origin is a Nairobi-based software company building business systems, websites, apps and trustworthy AI tools. Winner of the E4C AI Pilot Competition and a 2026 Hermann Rosen Award finalist.",
};

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

      {/* What we do */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-20 bg-white border-y border-slate-100">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-3xl">
            What we do
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10 sm:mb-14">
            Origin Africa Software Limited builds software for organisations that need it to work every day:
            shops and schools, clinics and county offices, and teams working on problems where a mistake is
            expensive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {whatWeDo.map(({ title, body, href, linkLabel }) => (
              <div key={title} className="bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{body}</p>
                <Link href={href} className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800">
                  {linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-20">
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              What we believe
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A few principles run through everything we build, whoever it is for.
            </p>
          </div>
          <dl className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {beliefs.map(({ title, body }) => (
              <div key={title} className="border-t-2 border-teal-500 pt-5">
                <dt className="text-xl font-bold text-slate-900 mb-2">{title}</dt>
                <dd className="text-slate-600 leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who we work with */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-20 bg-white border-y border-slate-100">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-3xl">
            Who we have worked with
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
            We operate from Nairobi and deliver to clients in Kenya and abroad, across the private sector,
            government and international development.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-8">
            {clients.map(({ name, sector }) => (
              <li key={name} className="bg-white px-6 py-5">
                <p className="text-lg font-bold text-slate-900">{name}</p>
                <p className="text-sm text-slate-500">{sector}</p>
              </li>
            ))}
          </ul>
          <Link href="/portfolio" className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800">
            See the portfolio
          </Link>
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
              <Link href="/case-studies/e4c" className="inline-block mt-3 text-sm font-semibold text-teal-600 hover:underline">
                Read the case study
              </Link>
            </div>
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-yellow-300 rounded-2xl px-8 py-8 shadow-md max-w-2xl mx-auto mt-6">
            <div className="text-6xl">🏅</div>
            <div className="text-left">
              <p className="text-xs font-bold tracking-widest text-yellow-600 uppercase mb-1">2026 Finalist @ The Hermann Rosen Award for Pipeline Innovation</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">ASME Foundation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="font-semibold">PipelineGPT</span>, led at Origin by Collins Kubu, was named one of three finalists. It lets pipeline operators ask questions of their own inspection and incident records in plain language, with a citation on every answer and an engineer reviewing high-risk recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 mt-3 text-sm">
                <Link href="/case-studies/pipelinegpt" className="font-semibold text-teal-600 hover:underline">
                  Read the case study
                </Link>
                <a href="https://www.asmefoundation.org/rosen-award/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">
                  See the finalists on asmefoundation.org
                </a>
              </div>
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
              <div className="flex flex-col sm:flex-row gap-x-6 gap-y-3 text-sm">
                <a href="https://youtu.be/LHrZX6vOT94?si=Hkw9tiJWXyD6ETO_" target="_blank" rel="noopener noreferrer" className="group">
                  <ArrowCue label="Watch the TV feature" external className="text-sm" />
                </a>
                <a href="https://newstrends.co.ke/importers-clearing-agents-get-new-digital-marine-cargo-insurance-kifwa-platform-ahead-of-july-1-deadline/" target="_blank" rel="noopener noreferrer" className="group">
                  <ArrowCue label="Read the NewsTrends article" external className="text-sm" />
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
          <ArrowLink href="/contact">Say hello</ArrowLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}

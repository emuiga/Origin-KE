import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AboutPatterns } from "@/components/DecorativePatterns";

const team = [
  {
    name: "Collins Kubu",
    role: "Software Engineer",
    focus: "Backend, Infrastructure & AI",
    bio: "Collins owns Origin\u2019s backend systems, infrastructure, and AI integrations. He designs scalable APIs, builds intelligent features with machine learning, manages cloud deployments, and ensures the reliability and performance of every platform the team ships.",
    image: "/kubu.png",
    linkedin: "https://www.linkedin.com/in/collins-kubu-388b7b280/",
  },
  {
    name: "Steve Muiga",
    role: "Software Engineer",
    focus: "FullStack & Product",
    bio: "Muiga drives product vision and frontend development at Origin. He combines strong engineering fundamentals with a product-oriented mindset, ensuring every solution is built with the end user in mind.",
    image: "/steve.png",
    linkedin: "https://www.linkedin.com/in/stevemuiga/",
  },
  {
    name: "Joy Karani",
    role: "Software Engineer",
    focus: "Frontend & Design Lead",
    bio: "Joy bridges the gap between design and code. As Origin\u2019s design lead, she crafts intuitive interfaces and cohesive visual identities, bringing both creative direction and technical execution to every project.",
    image: "/joy.png",
    linkedin: "https://www.linkedin.com/in/joy-k-aba15b206/",
  },
  {
    name: "Ken Komu",
    role: "Software Engineer",
    focus: "Blockchain & Web Development",
    bio: "Ken specialises in blockchain technology and full-stack web development. He architects decentralised solutions and builds robust web applications, bringing a deep understanding of modern distributed systems to Origin\u2019s technical stack.",
    image: "/komu.png",
    linkedin: "https://www.linkedin.com/in/kenneth-njoroge-2b2542211/",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AboutPatterns />

      <Header />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">
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
          <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">
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
                Our AI pipeline — <span className="font-semibold">#E4CInsights</span> — queries vetted sustainable-development knowledge, pulls live stats from World Bank and WHO, and synthesises fully cited, decision-grade policy briefs with a human in the loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-24">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">
              THE TEAM
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Meet the people behind Origin
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {team.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={member.name}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-16`}
                >
                  {/* Circular avatar */}
                  <div className="shrink-0">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-slate-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-[center_15%]"
                        sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div
                    className={`flex-1 text-center ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
                      {member.focus}
                    </p>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* "You?" — Join Us entry */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="group relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-dashed border-slate-300 hover:border-blue-400 flex items-center justify-center transition-colors duration-300 bg-slate-50 hover:bg-blue-50"
                >
                  <span className="text-5xl sm:text-6xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">
                    ?
                  </span>
                </Link>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                  You?
                </h3>
                <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
                  Join the crew
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-5">
                  We&apos;re always looking for curious, talented people who love building things that matter. If that sounds like you, we should talk.
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4 transition-colors"
                >
                  Say hello &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

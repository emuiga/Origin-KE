"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ProcessPatterns } from "../../components/DecorativePatterns";



export default function Process() {



  return (
    <div className="min-h-screen bg-surface overflow-hidden relative">
      <ProcessPatterns />
      <Header />

      {/* Process Hero */}
      <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(119,203,185,0.15),_transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-teal-300 font-bold tracking-widest text-sm uppercase mb-4">Our Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Concept to Launch
          </h2>
          <p className="text-lg sm:text-xl text-teal-100/70 max-w-3xl mx-auto leading-relaxed">
            Six steps. No surprises.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="px-4 sm:px-8 pt-16 sm:pt-24 py-16 sm:py-24 pb-6 bg-gradient-to-b from-teal-50/60 via-white to-white relative overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-amber-300/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 -left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto relative">
          <div className="relative">
            {/* Vertical line - positioned differently on mobile vs desktop */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-300 via-amber-300 to-teal-500"></div>

            {/* Process Steps */}
            {[
              {
                number: "01",
                title: "Listen",
                subtitle: "Discovery & Requirements",
                deliverables: ["Project brief", "Technical requirements", "User personas"],
                description: "We actively listen to understand your vision, goals, and challenges. Through detailed discovery sessions, we map out your business needs and technical requirements.",
                accent: "teal",
              },
              {
                number: "02",
                title: "Strategy",
                subtitle: "Planning & Architecture",
                deliverables: ["Project roadmap", "Technical architecture", "Timeline & milestones"],
                description: "Your thinking meets ours. Together, we craft a comprehensive roadmap that balances ambition with achievability, including detailed technical architecture and project timeline.",
                accent: "amber",
              },
              {
                number: "03",
                title: "Design",
                subtitle: "UI/UX & Prototyping",
                deliverables: ["Wireframes", "UI designs", "Interactive prototypes"],
                description: "Form follows function, and both need to impress. We create intuitive, engaging interfaces with detailed wireframes, visual designs, and interactive prototypes for your approval.",
                accent: "rose",
              },
              {
                number: "04",
                title: "Build",
                subtitle: "Development & Integration",
                deliverables: ["Core functionality", "Database setup", "API integration"],
                description: "Our developers write clean, efficient, and future-proof code. We build systems that scale with your success, implementing core features and integrating all necessary components.",
                accent: "indigo",
              },
              {
                number: "05",
                title: "Test",
                subtitle: "Quality Assurance",
                deliverables: ["Bug reports", "Performance optimization", "Security audit"],
                description: "We thoroughly test every feature, optimize performance, and ensure security. Our quality assurance process guarantees your product works flawlessly across all devices and scenarios.",
                accent: "emerald",
              },
              {
                number: "06",
                title: "Launch",
                subtitle: "Deployment & Support",
                deliverables: ["Live deployment", "Training materials", "Ongoing support"],
                description: "We orchestrate smooth launches and provide comprehensive training. Post-launch, we offer ongoing support, monitoring, and iterative improvements to ensure continued success.",
                accent: "teal",
              },
            ].map((step, index) => {
              const accentClasses: Record<string, { text: string; textLight: string; bg: string; chipBg: string; chipText: string; border: string; dot: string; line: string }> = {
                teal: { text: "text-teal-600", textLight: "text-teal-500/25", bg: "bg-teal-500", chipBg: "bg-teal-50", chipText: "text-teal-700", border: "border-t-teal-500", dot: "bg-teal-500", line: "from-teal-400 to-amber-400" },
                amber: { text: "text-amber-600", textLight: "text-amber-500/25", bg: "bg-amber-500", chipBg: "bg-amber-50", chipText: "text-amber-700", border: "border-t-amber-500", dot: "bg-amber-500", line: "from-amber-400 to-rose-400" },
                rose: { text: "text-rose-600", textLight: "text-rose-500/25", bg: "bg-rose-500", chipBg: "bg-rose-50", chipText: "text-rose-700", border: "border-t-rose-500", dot: "bg-rose-500", line: "from-rose-400 to-indigo-400" },
                indigo: { text: "text-indigo-600", textLight: "text-indigo-500/25", bg: "bg-indigo-500", chipBg: "bg-indigo-50", chipText: "text-indigo-700", border: "border-t-indigo-500", dot: "bg-indigo-500", line: "from-indigo-400 to-emerald-400" },
                emerald: { text: "text-emerald-600", textLight: "text-emerald-500/25", bg: "bg-emerald-500", chipBg: "bg-emerald-50", chipText: "text-emerald-700", border: "border-t-emerald-500", dot: "bg-emerald-500", line: "from-emerald-400 to-teal-400" },
              };
              const c = accentClasses[step.accent];
              return (
              <motion.div
                key={index}
                className={`relative mb-16 sm:mb-24 md:mb-32 pl-10 sm:pl-12 ${
                  index % 2 === 0 ? 'lg:pr-32 lg:text-right lg:pl-0' : 'lg:pl-32 lg:ml-auto lg:text-left'
                } ${index === 5 ? 'mb-0 sm:mb-0' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ zIndex: 10 }}
              >
                <div className={`lg:max-w-lg ${index % 2 === 0 ? 'lg:ml-auto' : ''} bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 border border-gray-100 border-t-4 ${c.border} transition-all duration-300 group`}>
                  <div className={`flex items-center mb-4 sm:mb-6 ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                    <div className={`text-6xl sm:text-7xl font-extrabold ${c.textLight}`}>{step.number}</div>
                    <div className={`h-[2px] bg-gradient-to-r ${c.line} flex-grow ${index % 2 === 0 ? 'lg:mr-4' : 'ml-4'}`}></div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">{step.title}</h3>
                  <h4 className={`text-xl sm:text-2xl ${c.text} font-semibold mb-4`}>{step.subtitle}</h4>

                  {/* Deliverables */}
                  <div className="mb-4">
                    <div className="mb-3">
                      <p className="text-lg font-semibold text-slate-600 mb-3">What You Get:</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span key={idx} className={`text-lg font-medium ${c.chipBg} ${c.chipText} px-4 py-2 rounded-full`}>
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl text-slate-700 leading-7">{step.description}</p>
                </div>

                {/* Circle marker on timeline - positioned differently on mobile vs desktop */}
                <div className={`absolute top-4 ${
                  index % 2 === 0 ? 'left-0 lg:left-1/2 lg:right-auto' : 'left-0 lg:left-1/2'
                } lg:transform lg:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full ${c.dot} border-4 border-white shadow-lg z-20`}></div>

                {/* Connecting Arrow - only show if not the last step */}
                {index < 5 && (
                  <div className={`absolute ${
                    index % 2 === 0 ? 'left-0 lg:left-1/2 lg:right-auto' : 'left-0 lg:left-1/2'
                  } lg:transform lg:-translate-x-1/2 top-8 sm:top-10 lg:top-12 w-0 h-0 z-10`}>
                    <div className="relative">
                      {/* Arrow line */}
                      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-16 sm:h-20 lg:h-24 bg-gradient-to-b ${c.line}`}></div>
                    </div>
                  </div>
                )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-8 py-20 sm:py-28 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(119,203,185,0.15),_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Have a project in mind? Let&apos;s scope it out.
          </h2>

          <p className="text-lg sm:text-xl text-teal-100/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Pick a time on the calendar and tell us what you need. We will come back with a scope, a timeline and a price.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <span className="inline-block py-4 px-8 bg-teal-400 text-slate-900 rounded-xl font-bold shadow-md hover:shadow-xl hover:bg-teal-300 hover:-translate-y-1 transition-all duration-200 text-lg">
                Book a free 30-minute call
              </span>
            </Link>
            <div className="text-sm text-teal-100/70">
              <span className="font-medium">✓</span> No obligation • <span className="font-medium">✓</span> 30-minute call • <span className="font-medium">✓</span> Custom proposal
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-teal-100/70">
              Join <span className="font-semibold text-teal-300">15+</span> businesses that shipped with Origin.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 
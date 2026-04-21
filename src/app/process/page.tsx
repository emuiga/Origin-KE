"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ProcessPatterns } from "../../components/DecorativePatterns";



export default function Process() {



  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <ProcessPatterns />
      <Header />

      {/* Process Steps */}
      <section id="process" className="px-4 sm:px-8 pt-16 sm:pt-24 py-16 sm:py-24 pb-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Concept to Launch
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Six steps. No surprises.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line - positioned differently on mobile vs desktop */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200"></div>
            
            {/* Process Steps */}
            {[
              {
                number: "01",
                title: "Listen",
                subtitle: "Discovery & Requirements",
                deliverables: ["Project brief", "Technical requirements", "User personas"],
                description: "We actively listen to understand your vision, goals, and challenges. Through detailed discovery sessions, we map out your business needs and technical requirements.",
              },
              {
                number: "02",
                title: "Strategy",
                subtitle: "Planning & Architecture",
                deliverables: ["Project roadmap", "Technical architecture", "Timeline & milestones"],
                description: "Your thinking meets ours. Together, we craft a comprehensive roadmap that balances ambition with achievability, including detailed technical architecture and project timeline.",
              },
              {
                number: "03",
                title: "Design",
                subtitle: "UI/UX & Prototyping",
                deliverables: ["Wireframes", "UI designs", "Interactive prototypes"],
                description: "Form follows function, and both need to impress. We create intuitive, engaging interfaces with detailed wireframes, visual designs, and interactive prototypes for your approval.",
              },
              {
                number: "04",
                title: "Build",
                subtitle: "Development & Integration",
                deliverables: ["Core functionality", "Database setup", "API integration"],
                description: "Our developers write clean, efficient, and future-proof code. We build systems that scale with your success, implementing core features and integrating all necessary components.",
              },
              {
                number: "05",
                title: "Test",
                subtitle: "Quality Assurance",
                deliverables: ["Bug reports", "Performance optimization", "Security audit"],
                description: "We thoroughly test every feature, optimize performance, and ensure security. Our quality assurance process guarantees your product works flawlessly across all devices and scenarios.",
              },
              {
                number: "06",
                title: "Launch",
                subtitle: "Deployment & Support",
                deliverables: ["Live deployment", "Training materials", "Ongoing support"],
                description: "We orchestrate smooth launches and provide comprehensive training. Post-launch, we offer ongoing support, monitoring, and iterative improvements to ensure continued success.",
              },
            ].map((step, index) => (
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
                <div className={`lg:max-w-lg ${index % 2 === 0 ? 'lg:ml-auto' : ''} bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 group`}>
                  <div className={`flex items-center mb-4 sm:mb-6 ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                    <div className="text-5xl sm:text-6xl font-light text-blue-100">{step.number}</div>
                    <div className={`h-[1px] bg-blue-200 flex-grow ${index % 2 === 0 ? 'lg:mr-4' : 'ml-4'}`}></div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">{step.title}</h3>
                  <h4 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">{step.subtitle}</h4>
                  
                  {/* Deliverables */}
                  <div className="mb-4">
                    <div className="mb-3">
                      <p className="text-lg font-semibold text-slate-600 mb-3">What You Get:</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="text-lg font-medium bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
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
                } lg:transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg z-20`}></div>
                
                {/* Connecting Arrow - only show if not the last step */}
                {index < 5 && (
                  <div className={`absolute ${
                    index % 2 === 0 ? 'left-0 lg:left-1/2 lg:right-auto' : 'left-0 lg:left-1/2'
                  } lg:transform lg:-translate-x-1/2 top-8 sm:top-10 lg:top-12 w-0 h-0 z-10`}>
                    <div className="relative">
                      {/* Arrow line */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-blue-500 to-blue-300"></div>
                      {/* Arrow head */}
                      <div className="absolute top-16 sm:top-20 lg:top-24 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-500"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-8 pt-6 pb-20 sm:pb-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Have a project in mind? Let&apos;s scope it out.
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Pick a time on the calendar and tell us what you need. We will come back with a scope, a timeline and a price.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <span className="inline-block py-4 px-8 bg-blue-600 text-white rounded-xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-lg">
                Book a free 30-minute call
              </span>
            </Link>
            <div className="text-sm text-gray-600">
              <span className="font-medium">✓</span> No obligation • <span className="font-medium">✓</span> 30-minute call • <span className="font-medium">✓</span> Custom proposal
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Join <span className="font-semibold text-blue-600">15+</span> businesses that shipped with Origin.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 
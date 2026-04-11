import React, { useEffect } from 'react';
import { BraceWrap } from '../react-components/Layout';
import { PROJECTS } from '../constants';

export const Initiative = () => {
  useEffect(() => {
    document.title = "100 Local Businesses Initiative | Noob{dev}";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "We are onboarding 100 local businesses to build high-converting websites and AI automation systems without agency overhead.");
    }
  }, []);

  return (
    <div className="page-transition bg-white">
      {/* 1. HERO SECTION (Brandpush style: Dark, strong typography, clear CTAs) */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-[#0a0a0a] text-white overflow-hidden relative">
        {/* Background subtle grid/pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8">
            LIMITED TO 100 BUSINESSES
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Get Your Business Online with a System That <span className="text-[#FF0000]">Actually Brings Leads</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are onboarding 100 businesses to build high-converting websites and automation systems <strong className="text-white">without agency overhead</strong>. The smartest <strong className="text-white">website development for local business</strong> in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apply" className="w-full sm:w-auto bg-[#FF0000] text-white font-bold py-4 px-10 rounded text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Apply to Get Onboard
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto bg-transparent border border-gray-600 text-white font-bold py-4 px-10 rounded text-lg hover:bg-gray-800 transition-all duration-300">
              See How It Works
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-gray-800">
            <p className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-6">Powered by industry-leading tools</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
              <img src="https://cdn.simpleicons.org/react/ffffff" alt="React" className="h-8" />
              <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" className="h-8" />
              <img src="https://cdn.simpleicons.org/zapier/ffffff" alt="Zapier" className="h-8" />
              <img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" className="h-8" />
              <img src="https://cdn.simpleicons.org/make/ffffff" alt="Make" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION / FEATURES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Instant Authority & Drive Leads with AI Automation for Small Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build a digital brochure. We craft a complete lead-generation machine designed specifically to turn visitors into paying customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Conversion-Focused Website",
                desc: "A fast, mobile-optimized business website india designed specifically to turn visitors into paying customers.",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              },
              {
                title: "WhatsApp & Call Integration",
                desc: "Make it frictionless for customers to reach you. Direct WhatsApp chat and one-click calling built right in.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              },
              {
                title: "Lead System Setup",
                desc: "Never lose a lead again. We set up structured forms that capture customer details and notify you instantly.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Basic Automation",
                desc: "Automated 'Thank You' emails, instant SMS notifications to your team, and basic CRM routing to save hours.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-[#FF0000]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Brandpush style steps) */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Here's How It Works</h2>
            <p className="text-xl text-gray-600">A streamlined process to get your business online and generating leads in record time with AI workflow automation.</p>
          </div>

          <div className="space-y-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-[28px] top-8 bottom-8 w-0.5 bg-gray-100 hidden md:block"></div>

            {[
              {
                step: "01",
                title: "Apply & Strategy Call",
                desc: "Fill out the application below. If you're a good fit, we'll hop on a quick call to map out your exact customer journey and identify where automation can save you time."
              },
              {
                step: "02",
                title: "We Build Your System",
                desc: "Our team gets to work. We design your high-converting website, set up your lead capture forms, and build the backend automations (WhatsApp, Email, CRM)."
              },
              {
                step: "03",
                title: "Launch & Handover",
                desc: "We go live. You get a fully functioning digital asset that works 24/7. We provide a simple training video so you know exactly how to manage your new leads."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
                <div className="flex-shrink-0 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white shadow-sm">
                  {item.step}
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex-grow hover:border-[#FF0000]/30 transition-colors">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ADVANTAGE / WHY US */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">The Noob<BraceWrap>dev</BraceWrap> Advantage: Your No-Code Automation Agency</h2>
              <p className="text-xl text-gray-400 mb-8">
                Big agencies charge lakhs because they have massive overhead, account managers, and slow processes. We use code and AI to deliver the same enterprise-grade systems at a fraction of the cost.
              </p>
              <ul className="space-y-4">
                {[
                  "No bloated agency fees",
                  "Direct access to the developers",
                  "Built for speed and conversion",
                  "Modern tech stack (React, Next.js)",
                  "Automated lead routing included"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-lg">
                    <svg className="w-6 h-6 text-[#FF0000] mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-[#111] p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-[#FF0000] mb-2">100</div>
                <div className="text-sm font-mono text-gray-400">Businesses Only</div>
              </div>
              <div className="bg-[#111] p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-[#FF0000] mb-2">15+</div>
                <div className="text-sm font-mono text-gray-400">Hours Saved/Wk</div>
              </div>
              <div className="bg-[#111] p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-[#FF0000] mb-2">24/7</div>
                <div className="text-sm font-mono text-gray-400">Lead Generation</div>
              </div>
              <div className="bg-[#111] p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-[#FF0000] mb-2">100%</div>
                <div className="text-sm font-mono text-gray-400">Done-For-You</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM */}
      <section id="apply" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#FF0000]"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for the Initiative</h2>
              <p className="text-gray-600">We are currently accepting applications. Fill out the form below and we will get back to you within 24 hours.</p>
            </div>
            
            <form action="https://formspree.io/f/mgollgzq" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Business Type *</label>
                  <input type="text" name="business_type" required className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all" placeholder="e.g. Dental Clinic, Gym, Real Estate" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">City / Location *</label>
                  <input type="text" name="location" required className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all" placeholder="e.g. Mumbai, Delhi" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Website (If any)</label>
                <input type="url" name="website" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all" placeholder="https://yourwebsite.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">What is your biggest bottleneck right now? *</label>
                <textarea name="bottleneck" required rows={4} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all" placeholder="e.g. Getting consistent leads, managing customer inquiries, outdated website..."></textarea>
              </div>

              <input type="hidden" name="_subject" value="New Application: 100 Business Initiative" />
              
              <button type="submit" className="w-full bg-[#FF0000] text-white font-bold py-4 rounded text-lg hover:bg-black transition-colors shadow-lg">
                Submit Application
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">Your data is secure. We will never spam you.</p>
            </form>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-20 px-6 bg-white text-center border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Losing Customers to Bad Websites</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join the initiative today and let us build a system that works as hard as you do.
        </p>
        <a href="#apply" className="inline-block bg-black text-white font-bold py-4 px-10 rounded text-lg hover:bg-[#FF0000] transition-colors">
          Claim Your Spot Now
        </a>
      </section>
    </div>
  );
};

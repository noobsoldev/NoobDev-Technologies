
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BraceWrap } from '../react-components/Layout';
import { Terminal, CodeSnippet } from '../react-components/Terminal';

export const About = () => {
  useEffect(() => {
    document.title = "About | Noob{dev}";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about Noobdev, our mission to democratize automation, and the team behind the code.");
    }
  }, []);

  return (
    <div className="page-transition section-padding">
      <div className="container-custom">
        <div className="mb-24 text-center">
          <h1 className="mb-6">About <BraceWrap>Noobdev</BraceWrap>: Your No-Code Automation Studio</h1>
          <p className="text-lg text-gray-500 font-mono uppercase tracking-[0.2em]">Making automation accessible to everyone</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="max-w-xl">
            <h2 className="mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                We believe powerful automation shouldn't require a Computer Science degree. Founded in 2025, Noob{`{Dev}`} Technologies was built to democratize <Link to="/services" className="text-[#FF0000] font-semibold hover:underline">high-end business automation</Link> for companies of all sizes. We are a global no-code automation agency dedicated to your growth.
              </p>
              <p>
                The gap between what modern software can do and how businesses actually use it is massive. Most teams are stuck doing repetitive work that an AI could handle in seconds.
              </p>
              <p>
                That's where we come in. We speak both "developer" and "business owner," translating complex API documentation into simple, effective workflows that actually drive <Link to="/showcase" className="text-[#FF0000] font-semibold hover:underline">real-world results</Link>.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-2 md:p-10 border border-gray-200">
             <Terminal title="about_us.ts">
                <CodeSnippet code={`function ourMission() {
  return {
    goal: "Make automation accessible",
    approach: "No-code solutions",
    impact: "Save businesses time & money",
    founded: 2025,
    team: "Noob{dev} Experts"
  };
}

// Result
console.log(ourMission().goal); 
// "Make automation accessible"`} />
             </Terminal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Simplicity', desc: 'Complex technology, simple user experience. We hide the cables so you just see the results.' },
            { title: 'Results', desc: 'We measure success by your ROI. If you aren\'t saving hours every week, we haven\'t done our job.' },
            { title: 'Transparency', desc: 'Clear pricing, clear communication. You\'ll always know exactly what we\'re building and why.' },
          ].map((v, i) => (
            <div key={i} className="bg-white p-12 border border-gray-100 hover:border-[#FF0000] transition-all duration-500 group">
              <div className="text-2xl font-semibold mb-6 group-hover:text-[#FF0000] transition-colors">
                <BraceWrap>{v.title}</BraceWrap>
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px]">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Meet the Founder */}
        <div className="mb-32 bg-gray-50 border border-gray-200 p-10 md:p-20 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3 w-full">
              <Terminal title="noob_bot.exe" className="w-full aspect-square">
                <div className="h-full flex flex-col items-center justify-center p-6">
                  <div className="relative w-32 h-32 mb-8">
                    {/* Bot Head */}
                    <div className="absolute inset-0 bg-[#27C93F]/10 border-2 border-[#27C93F] rounded-2xl animate-pulse">
                      {/* Eyes */}
                      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#27C93F] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#27C93F] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      {/* Mouth */}
                      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#27C93F] rounded-full"></div>
                    </div>
                    {/* Antennas */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#27C93F]"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#27C93F] rounded-full animate-ping"></div>
                  </div>
                  <div className="text-white font-mono text-xs text-center">
                    <div className="mb-2 text-[#27C93F]">$ status_check --all</div>
                    <div className="opacity-50">&gt; SYSTEM_READY</div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-[#27C93F] rounded-full animate-pulse"></span>
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>
              </Terminal>
            </div>
            <div className="md:w-2/3">
              <h2 className="mb-4">Hi, I'm a Noob Dev like you.</h2>
              <p className="text-[#FF0000] font-mono text-[11px] mb-8 uppercase tracking-[0.2em] font-semibold">Lead Automation Architect</p>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
                <p>
                  I started Noob{`{dev}`} because I saw too many great businesses bottlenecked by bad software. I was tired of seeing agencies charge $50,000 for custom software when a well-architected Zapier workflow and a headless CMS could do the job better, faster, and cheaper.
                </p>
                <p>
                  My approach is entirely practical. I don't care about using the trendiest new framework; I care about what actually solves your problem. Whether that means writing a custom Node.js script or simply connecting two apps via API, the goal is always the same: eliminate manual work so you can focus on growth.
                </p>
                <p>
                  When you work with us, you aren't getting handed off to a junior account manager. You're working directly with the engineers building your systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FF0000] text-white p-16 md:p-24 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-semibold mb-4 text-white">estd 2025</h3>
                <p className="text-white/70 font-mono uppercase tracking-widest text-xs">The year no-code changed everything.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 md:gap-24">
                <div className="text-center">
                    <div className="text-5xl font-semibold mb-3">500+</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">Automations</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-semibold mb-3">10k+</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">Hours Saved</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

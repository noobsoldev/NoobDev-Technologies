
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BraceWrap } from '../components/Layout';
import { Terminal, CodeSnippet } from '../components/Terminal';

export const About = () => {
  useEffect(() => {
    document.title = "About | Noob{dev}";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about Noobdev, our mission to democratize automation, and the team behind the code.");
    }
  }, []);

  return (
    <div className="page-transition pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About <BraceWrap>Noobdev</BraceWrap>: Your No-Code Automation Studio</h1>
          <p className="text-xl text-gray-700 font-mono italic underline decoration-[#FF0000] decoration-2 underline-offset-8">Making automation accessible to everyone</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                We believe powerful automation shouldn't require a Computer Science degree. Founded in 2025, Noobdev was built to democratize <Link to="/services" className="text-[#FF0000] underline decoration-gray-300 hover:decoration-[#FF0000] transition-colors">high-end business automation</Link> for companies of all sizes. We are a no-code automation agency dedicated to your growth.
              </p>
              <p>
                The gap between what modern software can do and how businesses actually use it is massive. Most teams are stuck doing repetitive work that an AI could handle in seconds.
              </p>
              <p>
                That's where we come in. We speak both "developer" and "business owner," translating complex API documentation into simple, effective workflows that actually drive <Link to="/showcase" className="text-[#FF0000] underline decoration-gray-300 hover:decoration-[#FF0000] transition-colors">real-world results</Link>.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-2 md:p-8 border border-gray-200">
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
            <div key={i} className="bg-white p-10 border border-gray-100 hover:border-[#FF0000] transition-colors">
              <div className="text-2xl font-bold mb-4">
                <BraceWrap>{v.title}</BraceWrap>
              </div>
              <p className="text-gray-700 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Meet the Founder */}
        <div className="mb-32 bg-gray-50 border border-gray-200 p-8 md:p-16 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 w-full">
              <Terminal title="noob_bot.exe" className="w-full aspect-square">
                <div className="h-full flex flex-col items-center justify-center pt-4 md:pt-12">
                  <pre className="text-[#27C93F] font-mono text-xl md:text-2xl leading-tight animate-bounce">
{`   _____
  [ o_o ]
  /|___|\\
   _|_|_`}
                  </pre>
                  <div className="mt-8 text-white font-mono text-sm">
                    &gt; echo "Hi!" <span className="inline-block w-2 h-4 bg-white ml-1 align-middle animate-pulse"></span>
                  </div>
                </div>
              </Terminal>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-2">Hi, I'm a noob Dev like you.</h2>
              <p className="text-[#FF0000] font-mono text-sm mb-6 uppercase tracking-widest">Lead Automation Architect</p>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
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

        <div className="bg-[#FF0000] text-white p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-bold mb-4">estd 2025</h3>
                <p className="text-white/80 font-mono">The year no-code changed everything.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-white/70">Automations</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">10k+</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-white/70">Hours Saved</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

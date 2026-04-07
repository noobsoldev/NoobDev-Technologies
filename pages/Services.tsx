
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BraceWrap } from '../components/Layout';
import { SERVICES } from '../constants';
import { Terminal, CodeSnippet } from '../components/Terminal';

export const Services = () => {
  useEffect(() => {
    document.title = "Services | Noob{dev}";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our technical expertise in AI workflows, custom web development, and business automation.");
    }
  }, []);

  return (
    <div className="page-transition pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <BraceWrap>Expertise</BraceWrap></h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">From AI workflows to custom web development, we provide the technical foundation your business needs to scale without the friction of traditional coding.</p>
        </div>

        {/* Services Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {SERVICES.map((s) => (
            <a 
              key={s.id}
              href={`#service-${s.id}`} 
              className="bg-white p-8 border border-gray-100 hover:border-[#FF0000] transition-all group"
            >
              <div className="text-2xl font-mono text-[#FF0000] mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{s.description}</p>
            </a>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-32">
          {SERVICES.map((s, idx) => (
            <section key={s.id} id={`service-${s.id}`} className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="text-sm font-mono text-[#FF0000] mb-4 uppercase tracking-[0.2em]">Service Details</div>
                <h2 className="text-4xl font-bold mb-8">
                  <BraceWrap>{s.title}</BraceWrap>
                </h2>
                <div className="text-xl text-gray-700 mb-8 leading-relaxed space-y-4">
                  {(s.detailedDescription || s.description).split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                {s.features && (
                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-sm font-mono text-gray-500">KEY FEATURES:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {s.features.map(f => (
                        <li key={f} className="flex items-center text-gray-700 text-sm">
                          <span className="text-[#FF0000] mr-2 font-mono">{"{"}✔{"}"}</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
                    {s.pricing && (
                        <div>
                            <div className="text-xs font-mono text-gray-500 uppercase mb-1">Starts at</div>
                            <div className="text-2xl font-bold text-black">{s.pricing}</div>
                        </div>
                    )}
                    {s.timeline && (
                        <div>
                            <div className="text-xs font-mono text-gray-500 uppercase mb-1">Timeline</div>
                            <div className="text-2xl font-bold text-black">{s.timeline}</div>
                        </div>
                    )}
                </div>

                <Link 
                  to="/contact"
                  className="mt-10 inline-block bg-black text-white px-8 py-4 font-bold hover:bg-[#FF0000] transition-colors"
                >
                  Start Your {s.title} →
                </Link>
              </div>

              <div className="lg:w-1/2 w-full">
                <Terminal title={`${s.id.replace('-', '_')}.config`}>
                   <CodeSnippet code={`{
  "service": "${s.title}",
  "capabilities": [
    ${(s.features || ['Custom Integration', 'No-code logic', 'API connection']).map(f => `"${f}"`).join(',\n    ')}
  ],
  "status": "Ready to Build"
}`} />
                </Terminal>
              </div>
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked <BraceWrap>Questions</BraceWrap></h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services and process.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "How much does custom business automation cost?",
                a: "Pricing depends entirely on the complexity of the workflow. Simple Zapier integrations start around $499, while complex, multi-platform AI automation systems can range from $2,000 to $10,000+. We always provide a clear, fixed-price quote after our initial discovery call."
              },
              {
                q: "Do I need to know how to code to manage these systems?",
                a: "Not at all. Our entire philosophy is built around 'no-code' and 'low-code' handoffs. We build the complex architecture, but we deliver it with user-friendly dashboards and comprehensive video training so your team can manage day-to-day operations easily."
              },
              {
                q: "What tools do you use for AI and automation?",
                a: "We are tool-agnostic, meaning we use the best tool for your specific problem. Our stack frequently includes Make.com, Zapier, n8n, OpenAI (ChatGPT), Anthropic (Claude), Airtable, and custom Node.js scripts when APIs require heavy lifting."
              },
              {
                q: "How long does it take to build a custom website or CRM?",
                a: "High-converting landing pages can be deployed in 48-72 hours. Full custom web applications (React/Next.js) or comprehensive CRM setups (HubSpot/Salesforce) typically take between 4 to 8 weeks, depending on data migration needs and custom feature requirements."
              },
              {
                q: "Will these automations break if an app updates?",
                a: "APIs do change, which is why we build robust error handling into our workflows. If a connection drops, the system alerts us immediately. We also offer ongoing monthly maintenance retainers to ensure your automations run smoothly 24/7 without you having to worry about technical updates."
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes. Every project includes a 30-day warranty period for bug fixes and minor adjustments. After that, we offer dedicated support and growth retainers for clients who want continuous optimization, SEO management, and new feature development."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 hover:border-[#FF0000] transition-colors">
                <h3 className="text-xl font-bold mb-3 flex items-start">
                  <span className="text-[#FF0000] mr-3 mt-1 font-mono">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

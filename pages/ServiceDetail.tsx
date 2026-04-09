import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { BraceWrap } from '../components/Layout';
import { Terminal, CodeSnippet } from '../components/Terminal';

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = SERVICES.find(s => s.id === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Noob{dev}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", service.description);
      }
    } else {
      navigate('/not-found', { replace: true });
    }
  }, [service, navigate]);

  if (!service) return null;

  // Generate a mock config for the terminal
  const mockConfig = `{
  "service_id": "${service.id}",
  "name": "${service.title}",
  "status": "active",
  "capabilities": [
    ${(service.features || ['Custom Integration', 'No-code logic', 'API connection']).map(f => `"${f}"`).join(',\n    ')}
  ],
  "stack": [
    ${(service.tools || ['Noobdev Engine', 'Custom APIs']).map(t => `"${t}"`).join(',\n    ')}
  ]
}`;

  return (
    <div className="page-transition pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link to="/services" className="text-xs font-mono text-gray-500 hover:text-[#FF0000] inline-flex items-center transition-colors uppercase tracking-widest">
            <span className="mr-2">←</span> Return to Services
          </Link>
        </div>
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-mono text-[#FF0000]">{service.icon}</span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <BraceWrap>{service.title.split(' ')[0]}</BraceWrap> {service.title.split(' ').slice(1).join(' ')}
              </h1>
            </div>
            <p className="text-2xl text-gray-700 leading-relaxed border-l-4 border-[#FF0000] pl-6 py-2">
              {service.description}
            </p>
          </div>
          <div className="hidden lg:block">
            <Terminal title={`init_${service.id.replace('-', '_')}.json`}>
              <CodeSnippet code={mockConfig} language="json" />
            </Terminal>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Detailed Description */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              {service.detailedDescription.split('\n\n').map((paragraph, idx) => {
                // Make the first paragraph slightly larger and bolder to act as a lead
                if (idx === 0) {
                  return (
                    <p key={idx} className="text-xl text-gray-900 font-medium mb-8 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Metadata */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              
              {/* Features */}
              {service.features && (
                <div className="bg-gray-50 border border-gray-100 p-8">
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Capabilities</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-800 font-medium">
                        <span className="text-[#FF0000] mr-3 font-mono mt-0.5">{"[x]"}</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Tools */}
              {service.tools && (
                <div>
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, idx) => (
                      <span key={idx} className="bg-black text-white px-3 py-1.5 text-xs font-mono tracking-wide">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing & Timeline */}
              {(service.pricing || service.timeline) && (
                <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-8">
                  {service.pricing && (
                    <div>
                      <div className="text-xs font-mono text-gray-500 uppercase mb-1">Investment</div>
                      <div className="text-lg font-bold text-black">{service.pricing}</div>
                    </div>
                  )}
                  {service.timeline && (
                    <div>
                      <div className="text-xs font-mono text-gray-500 uppercase mb-1">Timeline</div>
                      <div className="text-lg font-bold text-black">{service.timeline}</div>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-black text-white p-12 md:p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0000] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[#FF0000] font-mono text-sm mb-4">~/deploy/{service.id}</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to execute?</h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Let's discuss how our {service.title} architecture can scale your operations and eliminate bottlenecks.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="shrink-0 bg-[#FF0000] text-white px-8 py-4 font-bold font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-3"
            >
              <span>Initialize Project</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BraceWrap, Logo } from '../components/Layout';
import { Terminal, CodeSnippet } from '../components/Terminal';
import { SERVICES } from '../constants';

export const Home = () => {
  const [newsletterState, setNewsletterState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    document.title = "Home | Noob{dev}";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Noobdev: We build custom automation workflows and high-performance websites for modern businesses.");
    }
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterState('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mgollgzq", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setNewsletterState('success');
        form.reset();
      } else {
        setNewsletterState('idle');
      }
    } catch (error) {
      setNewsletterState('idle');
    }
  };

  const integrationPartners = [
    { name: 'Zapier', url: 'https://zapier.com', logo: 'https://cdn.simpleicons.org/zapier/FF6600' },
    { name: 'Make', url: 'https://make.com', logo: 'https://cdn.simpleicons.org/make/EA2127' },
    { name: 'Airtable', url: 'https://airtable.com', logo: 'https://cdn.simpleicons.org/airtable/18BFFF' },
    { name: 'HubSpot', url: 'https://hubspot.com', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { name: 'Notion', url: 'https://notion.so', logo: 'https://cdn.simpleicons.org/notion/000000' },
    { name: 'n8n', url: 'https://n8n.io', logo: 'https://cdn.simpleicons.org/n8n/FF6C37' }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Noobdev",
    "url": "https://noobdev.tech",
    "logo": "https://noobdev.tech/favicon.svg",
    "description": "The no-code automation studio that connects your apps, automates workflows, and scales your operations.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9810141789",
      "contactType": "customer service"
    }
  };

  return (
    <div className="page-transition">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-block bg-gray-100 px-3 py-1 text-xs font-mono mb-6 border-l-2 border-[#FF0000]">
              $ npm install growth --save-dev
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <BraceWrap>Automate</BraceWrap> Your Business Without Writing Code
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-xl">
              The no-code automation studio that connects your apps, automates workflows, and scales your operations — all without a single line of code. Looking to hire no-code developer India? We build your systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-[#FF0000] text-white px-8 py-4 font-bold text-lg hover:bg-black transition-all flex items-center justify-center group"
              >
                Start Automating <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                to="/services"
                className="border-2 border-[#FF0000] text-black px-8 py-4 font-bold text-lg hover:bg-[#FF0000] hover:text-white transition-all flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <Terminal className="transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <CodeSnippet code={`// Initialize business automation
const studio = new NoobDevStudio();

studio.on('manual_task', (task) => {
  console.log('Automating: ' + task.name);
  return studio.ai.solve(task);
});

// Connected Services
const tools = ['Zapier', 'Make', 'Airtable', 'HubSpot'];
studio.connect(tools);

studio.deploy({
  mode: 'scaling',
  code: false
});`} />
            </Terminal>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-mono text-gray-600 mb-10 uppercase tracking-widest">Integrating your favorite tools</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-12">
            {integrationPartners.map(partner => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  width="120" 
                  height="32" 
                  loading="lazy"
                  decoding="async"
                  className="h-6 md:h-8 w-auto object-contain" 
                />
                <span className="text-sm font-bold font-mono text-gray-900 group-hover:text-black">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Support Available', value: '24/7' },
              { label: 'Integrations', value: '10+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <BraceWrap>{stat.value}</BraceWrap>
                </div>
                <div className="text-sm font-mono text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Expert <BraceWrap>Website Development</BraceWrap> & AI Automation</h2>
              <p className="text-gray-700 max-w-lg">Everything you need to automate, scale, and thrive in the modern digital economy with powerful AI workflow automation.</p>
            </div>
            <Link 
                to="/services"
                className="text-[#FF0000] font-bold hover:underline"
            >
              View all services →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
                <div key={s.id} className={`bg-white p-8 border border-gray-100 hover:border-[#FF0000] hover:shadow-xl transition-all group ${idx >= 6 ? 'md:hidden lg:block' : ''}`}>
                  <div className="text-2xl font-mono text-[#FF0000] mb-6 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">{s.description}</p>
                <Link 
                    to={`/services#service-${s.id}`}
                    className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 group-hover:text-[#FF0000] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Who We <BraceWrap>Help</BraceWrap></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We build custom website development and AI automation for small business and specific industries.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Digital Agencies', desc: 'White-label web development and automated client reporting pipelines to increase your profit margins.' },
              { title: 'E-commerce Brands', desc: 'Headless Shopify builds, automated inventory syncing, and abandoned cart recovery workflows.' },
              { title: 'Healthcare Clinics', desc: 'HIPAA-compliant CRM setups, automated patient recall SMS, and secure appointment booking systems.' },
              { title: 'Local Businesses', desc: 'High-converting landing pages, local SEO optimization, and automated lead qualification bots.' }
            ].map((audience, idx) => (
              <div key={idx} className="bg-gray-50 p-8 border border-gray-100 hover:border-black transition-colors group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF0000] transition-colors">{audience.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our <BraceWrap>Website Development</BraceWrap> & Automation Process</h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { title: 'Consult', step: '01', desc: 'We understand your unique workflows and identify bottlenecks as a leading no-code automation agency.' },
                { title: 'Build', step: '02', desc: 'We design and deploy your custom no-code automation systems. As a Make.com automation agency, we also handle n8n setup and automation.' },
                { title: 'Launch', step: '03', desc: 'You save hours every day as your business runs on autopilot.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 text-center relative hover:translate-y-[-8px] transition-transform duration-300">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white font-mono px-3 py-1 text-xs">
                    STEP {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">
                    <BraceWrap className="text-lg">{item.title}</BraceWrap>
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Trusted by <BraceWrap>Forward Thinkers</BraceWrap></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'COO, TechFlow', text: "Noob{dev} completely transformed our onboarding process. We save 15 hours a week per account manager." },
              { name: 'Marcus Bell', role: 'Founder, RetailScale', text: "The ROI was immediate. Their AI automation handles our inventory updates perfectly." },
              { name: 'Elena Rodriguez', role: 'Director, MediaForge', text: "Cleanest integration we've ever seen. No more manual data entry between our CRM and Notion." },
            ].map((t, idx) => (
              <div key={idx} className="bg-[#111] p-10 border border-gray-800 relative">
                <div className="text-4xl text-[#FF0000] font-mono mb-6 leading-none">"</div>
                <p className="text-gray-500 mb-8 italic leading-relaxed">{t.text}</p>
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm font-mono text-[#FF0000]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <BraceWrap>Subscribe</BraceWrap> to Weekly Automation Tips
          </h2>
          <p className="text-gray-700 mb-10">Join 5,000+ forward-thinking business owners getting expert tips every Tuesday.</p>
          
          {newsletterState === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-lg mx-auto">
              <p className="text-xl font-bold text-green-800 mb-2">Thanks for subscribing! 🚀</p>
              <p className="text-green-700">Check your inbox for your first tip.</p>
              <button 
                onClick={() => setNewsletterState('idle')}
                className="mt-4 text-sm font-bold text-green-800 underline hover:text-green-900"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                required
                name="email"
                type="email" 
                placeholder="your@email.com" 
                aria-label="Email address for newsletter"
                className="flex-1 bg-gray-50 border border-gray-200 px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors" 
              />
              <button 
                type="submit"
                disabled={newsletterState === 'submitting'}
                className="bg-[#FF0000] text-white px-8 py-4 font-bold hover:bg-black transition-all disabled:bg-gray-400"
              >
                {newsletterState === 'submitting' ? 'Joining...' : 'Join Now'}
              </button>
            </form>
          )}
          
          {newsletterState !== 'success' && (
            <p className="mt-4 text-xs font-mono text-gray-500">0% Spam. 100% Value. Unsubscribe anytime.</p>
          )}
        </div>
      </section>
    </div>
  );
};

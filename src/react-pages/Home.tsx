import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BraceWrap } from '../react-components/Layout';
import { Terminal, CodeSnippet } from '../react-components/Terminal';
import { SERVICES } from '../constants';

export const Home = () => {
  const [newsletterState, setNewsletterState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    document.title = "Noob{Dev} Technologies | Websites & Automation Systems That Help Your Business Grow Faster";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Noob{Dev} Technologies is a global no-code automation studio. We build high-performance websites and automate business workflows using AI for businesses worldwide.");
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
      <section className="relative section-padding overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container-custom flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-block bg-gray-100 px-3 py-1 text-[10px] font-mono mb-4 border-l-2 border-[#FF0000] uppercase tracking-widest">
              NO-CODE AUTOMATION STUDIO
            </div>
            <h1 className="mb-8">
              Websites & <BraceWrap>Automation Systems</BraceWrap> That Help Your Business Grow Faster.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Noob{`{Dev}`} Technologies is a global web development and no-code automation agency. We connect your apps, automate workflows, and scale businesses, all without a single line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-[#FF0000] text-white px-8 py-4 font-semibold text-[15px] hover:bg-black transition-all flex items-center justify-center group"
              >
                Start Automating <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                to="/services"
                className="border-2 border-black text-black px-8 py-4 font-semibold text-[15px] hover:bg-black hover:text-white transition-all flex items-center justify-center"
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
      <section className="py-16 border-y border-gray-100 bg-gray-50">
        <div className="container-custom">
          <p className="text-center text-[10px] font-mono text-gray-400 mb-12 uppercase tracking-[0.2em]">Integrating your favorite tools</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
            {integrationPartners.map(partner => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 group"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  width="120" 
                  height="32" 
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-auto object-contain" 
                />
                <span className="text-[11px] font-semibold font-mono text-gray-400 group-hover:text-black uppercase tracking-wider">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Support Available', value: '24/7' },
              { label: 'Integrations', value: '10+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-semibold mb-3">
                  <BraceWrap>{stat.value}</BraceWrap>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="mb-6">Expert <BraceWrap>Website Development</BraceWrap> & AI Automation</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Everything you need to automate, scale, and thrive in the modern digital economy with powerful AI workflow automation.</p>
            </div>
            <Link 
                to="/services"
                className="text-[#FF0000] font-semibold text-sm hover:underline tracking-wide"
            >
              View all services →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s, idx) => (
                <div key={s.id} className={`bg-white p-10 border border-gray-100 hover:border-[#FF0000] hover:shadow-2xl transition-all duration-500 group ${idx >= 6 ? 'md:hidden lg:block' : ''}`}>
                  <div className="text-2xl font-mono text-[#FF0000] mb-8 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                  <h3 className="mb-4">{s.title}</h3>
                  <p className="text-gray-600 text-[15px] mb-8 leading-relaxed">{s.description}</p>
                <Link 
                    to={`/services#service-${s.id}`}
                    className="text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#FF0000] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="mb-6">Who We <BraceWrap>Help</BraceWrap></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">We build custom website development and AI automation for small business and specific industries.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Digital Agencies', desc: 'White-label web development and automated client reporting pipelines to increase your profit margins.' },
              { title: 'E-commerce Brands', desc: 'Headless Shopify builds, automated inventory syncing, and abandoned cart recovery workflows.' },
              { title: 'Healthcare Clinics', desc: 'HIPAA-compliant CRM setups, automated patient recall SMS, and secure appointment booking systems.' },
              { title: 'B2B Companies', desc: 'High-converting landing pages, global SEO optimization, and automated lead qualification bots.' }
            ].map((audience, idx) => (
              <div key={idx} className="bg-gray-50 p-10 border border-gray-100 hover:border-black transition-all duration-500 group">
                <h3 className="text-xl mb-4 group-hover:text-[#FF0000] transition-colors">{audience.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <h2 className="mb-20 text-center">Our <BraceWrap>Website Development</BraceWrap> & Automation Process</h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { title: 'Consult', step: '01', desc: 'We understand your unique workflows and identify bottlenecks as a leading no-code automation agency.' },
                { title: 'Build', step: '02', desc: 'We design and deploy your custom no-code automation systems. As a specialized automation agency, we handle Make.com, Zapier, and n8n setup.' },
                { title: 'Launch', step: '03', desc: 'You save hours every day as your business runs on autopilot.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-10 text-center relative hover:translate-y-[-8px] transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white font-mono px-3 py-1 text-[10px] tracking-widest uppercase">
                    STEP {item.step}
                  </div>
                  <h3 className="mb-4 mt-6">
                    <BraceWrap className="text-lg">{item.title}</BraceWrap>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <h2 className="mb-20 text-center text-white">Trusted by <BraceWrap>Forward Thinkers</BraceWrap></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'VibeNote Studio', 
                role: 'AI SaaS Platform', 
                text: "The AI website generator transformed our agency's workflow. We now deliver high-quality sites in minutes, not weeks. Prototyping time is down by 85%." 
              },
              { 
                name: 'Optiofy', 
                role: 'Healthcare CRM', 
                text: "Noob{dev} built a robust billing system that our clinic relies on daily. It completely eliminated transcription errors and saved our staff 15 hours a week." 
              },
              { 
                name: 'Aqua Republik', 
                role: 'RO Service Provider', 
                text: "Dominating local search in Crossing Republik was our goal, and Noob{dev} delivered. Our direct service inquiries increased by 150% in the first month." 
              },
              { 
                name: 'Lenswala', 
                role: 'E-commerce Retailer', 
                text: "Our online presence now matches the premium quality of our eyewear. The new headless architecture skyrocketed our mobile conversion rates by 45%." 
              },
              { 
                name: 'Akansha Rajput', 
                role: 'Creative Professional', 
                text: "The new portfolio acts as a powerful lead generation tool. I've seen a 60% increase in inbound inquiries from high-ticket clients since the launch." 
              },
              { 
                name: 'Green River Camp', 
                role: 'Nature Retreat', 
                text: "Direct reservations increased by 120% in the first season, saving us over $15,000 in OTA commission fees. The booking engine is flawless." 
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-[#0A0A0A] p-12 border border-white/5 relative hover:border-[#FF0000]/50 transition-all duration-500 group">
                <div className="text-5xl text-[#FF0000] font-mono mb-8 leading-none opacity-50">"</div>
                <p className="text-gray-400 mb-10 italic leading-relaxed group-hover:text-gray-200 transition-colors text-[15px]">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-[#FF0000]"></div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#FF0000] transition-colors">{t.name}</div>
                    <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-6">
            <BraceWrap>Subscribe</BraceWrap> to Weekly Automation Tips
          </h2>
          <p className="text-gray-600 mb-12 text-lg leading-relaxed">Join 5,000+ forward-thinking business owners getting expert tips every Tuesday.</p>
          
          {newsletterState === 'success' ? (
            <div className="bg-green-50 border border-green-100 rounded-xl p-10 max-w-lg mx-auto">
              <p className="text-xl font-semibold text-green-900 mb-2">Thanks for subscribing! 🚀</p>
              <p className="text-green-700">Check your inbox for your first tip.</p>
              <button 
                onClick={() => setNewsletterState('idle')}
                className="mt-6 text-xs font-semibold text-green-900 underline hover:text-green-950 uppercase tracking-widest"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="your@email.com" 
                  aria-label="Email address for newsletter"
                  className="flex-1 bg-gray-50 border border-gray-200 px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-all text-sm" 
                />
                <button 
                  type="submit"
                  disabled={newsletterState === 'submitting'}
                  className="bg-[#FF0000] text-white px-10 py-4 font-semibold text-sm hover:bg-black transition-all disabled:bg-gray-400 uppercase tracking-widest"
                >
                  {newsletterState === 'submitting' ? 'Joining...' : 'Join Now'}
                </button>
              </form>
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">0% Spam. 100% Value. Unsubscribe anytime.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

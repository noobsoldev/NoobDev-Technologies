
import React, { useState, useEffect } from 'react';
import { BraceWrap } from '../react-components/Layout';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = "Contact | Noob{dev}";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Ready to automate your workflows? Send us a message and we'll get back to you within 24 hours.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mlgwwqbw", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  const faqs = [
    { q: 'How fast can you start?', a: 'We typically initiate the discovery phase within 48 hours of contract signing.' },
    { q: 'What is your pricing model?', a: 'We offer both fixed-project pricing for specific builds and monthly retainers for ongoing automation support.' },
    { q: 'Do you offer support after launch?', a: 'Absolutely. Every build includes 30 days of complimentary support, with extended maintenance plans available.' },
    { q: 'Can you work with our existing tools?', a: 'Yes, our specialty is connecting existing SaaS ecosystems (Zapier, Make, HubSpot, etc.) to work in harmony.' },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Noobdev",
    "image": "https://noobdev.tech/favicon.svg",
    "telephone": "+919810141789",
    "email": "hello@noobdev.tech",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="page-transition section-padding">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="container-custom">
        <div className="mb-24 text-center">
          <h1 className="mb-6">Let's <BraceWrap>Build</BraceWrap> Something</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to automate your workflows? Send a message to Noob{`{Dev}`} Technologies and we'll get back to you within 24 hours. Whether you're looking for a custom website, AI-driven automation, or a complete digital transformation, our team is here to help you scale efficiently.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
            We specialize in connecting fragmented software ecosystems using tools like Make.com, Zapier, and custom APIs. Our goal is to eliminate the manual friction in your business so you can focus on high-level strategy and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl rounded-2xl">
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-6 text-green-500">✓</div>
                <h3 className="mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-8 text-base">Success! We've received your data and will contact you shortly.</p>
                <button 
                    onClick={() => setFormState('idle')}
                    className="text-[#FF0000] font-mono font-semibold hover:underline uppercase tracking-widest text-[10px]"
                >
                  $ send_another_message.sh
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2 tracking-widest font-semibold">Name *</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2 tracking-widest font-semibold">Email *</label>
                    <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm rounded-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2 tracking-widest font-semibold">Phone</label>
                    <div className="flex gap-2">
                      <select name="countryCode" className="w-24 bg-white border border-gray-200 px-2 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black appearance-none text-[11px] font-semibold rounded-lg">
                        <option value="+1">+1 (US)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+81">+81 (JP)</option>
                        <option value="+49">+49 (DE)</option>
                        <option value="+33">+33 (FR)</option>
                        <option value="+86">+86 (CN)</option>
                        <option value="+971">+971 (UAE)</option>
                      </select>
                      <input name="phone" type="tel" placeholder="9876543210" className="flex-1 w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2 tracking-widest font-semibold">Service Interest</label>
                    <select name="service" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black appearance-none text-sm font-semibold rounded-lg">
                      <option>AI Automation</option>
                      <option>Custom Website</option>
                      <option>Landing Pages</option>
                      <option>SEO Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2 tracking-widest font-semibold">Message *</label>
                  <textarea required name="message" rows={3} placeholder="Tell us about your project..." className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none transition-all text-sm rounded-lg"></textarea>
                </div>
                
                {formState === 'error' && (
                  <div className="text-red-600 text-[12px] font-semibold text-center bg-red-50 py-2 border border-red-100 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button 
                  disabled={formState === 'submitting'}
                  className="w-full bg-black text-white py-4 font-bold text-sm hover:bg-[#FF0000] transition-all disabled:bg-gray-400 uppercase tracking-[0.2em] rounded-lg shadow-lg shadow-black/10"
                >
                  {formState === 'submitting' ? 'Sending...' : '{Send Message} →'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & FAQ */}
          <div className="lg:pl-6">
            <div className="space-y-12 mb-16">
              <div>
                <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-3">Location & Hours</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <p className="font-semibold text-lg mb-2">Global Automation Services</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Serving clients worldwide with remote-first automation solutions</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-2">Mon - Fri</p>
                    <p className="text-gray-500 text-sm">9AM - 6PM (IST)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-3">Direct Contact</h4>
                <div className="space-y-4">
                  <a href="mailto:hello@noobdev.tech" className="block font-semibold text-3xl hover:text-[#FF0000] transition-colors tracking-tight">hello@noobdev.tech</a>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-3">Need urgent automation help?</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">Connect instantly on WhatsApp for quick discussions, audits, or urgent automation needs.</p>
                <a 
                  href="https://wa.me/919810141789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 font-semibold text-sm rounded-xl hover:bg-[#128C7E] transition-all duration-300 mb-4 uppercase tracking-widest shadow-lg shadow-green-200"
                >
                  Chat on WhatsApp →
                </a>
                <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Typically replies within a few minutes.</p>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-10 border-b border-gray-100 pb-3">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group border border-gray-100 bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#FF0000]/30 hover:shadow-lg hover:shadow-red-500/5">
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none group">
                      <span className="font-bold text-gray-700 group-hover:text-black transition-colors text-sm leading-snug flex items-start gap-3">
                        <span className="text-[#FF0000] font-mono text-xs">0{idx + 1}.</span>
                        {faq.q}
                      </span>
                      <span className="text-[#FF0000] transition-transform duration-500 group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-xs pl-12">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BraceWrap } from '../components/Layout';
import { Check, AlertCircle, ArrowRight, Shield, Zap, Target, BarChart3 } from 'lucide-react';

export const Apply = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = "Apply | Helping 100 Local Businesses Grow Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Apply for our limited initiative to help 100 local businesses build a complete online system to generate leads and grow consistently.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      // Using the same Formspree ID as Home.tsx for now, or a placeholder if preferred
      const response = await fetch("https://formspree.io/f/mgollgzq", {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-[#FF0000] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp} className="inline-block bg-[#FF0000] text-white px-4 py-1 text-xs font-mono font-bold uppercase tracking-widest mb-8 rounded-sm">
            Limited Initiative: 100 Businesses Only
          </motion.div>
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight"
          >
            Get a System That <BraceWrap>Actually</BraceWrap> Brings You Customers
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            We are helping 100 local businesses build a complete online system to generate leads, automate follow-ups, and grow consistently.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12"
          >
            {[
              "Conversion-focused website",
              "Google visibility setup",
              "Automated lead capture & follow-ups",
              "Agency-level execution at a subsidized cost"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <a 
              href="#apply-form"
              className="inline-block bg-[#FF0000] text-white px-8 py-4 font-bold text-xl hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg"
            >
              Apply Now
            </a>
            <p className="mt-4 text-sm font-mono text-[#FF0000] font-bold animate-pulse">
              ⚠️ Only 100 businesses will be selected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Why Most Local Businesses Don’t Get Results Online
            </h2>
            <div className="h-1.5 w-24 bg-[#FF0000] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "The 'Ghost' Website", desc: "They spend thousands on websites that look pretty but get zero leads. It's just a digital brochure that nobody visits." },
              { title: "Deliverables vs Outcomes", desc: "Agencies deliver 'work' (posts, pages, ads) but not 'outcomes' (calls, sales, growth). You pay for effort, not results." },
              { title: "The Leaky Bucket", desc: "No system for capturing and converting leads. Even if someone finds you, they leave because there's no follow-up." },
              { title: "Manual Chaos", desc: "Everything is manual and inconsistent. You're too busy running the business to chase every lead properly." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                <AlertCircle className="w-8 h-8 text-[#FF0000] mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              A Complete System, <BraceWrap>Not Just</BraceWrap> a Website
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              NoobDev builds the entire engine that powers your growth, from the first click to the final sale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, title: "Website that converts", desc: "Built for speed and psychological triggers that turn visitors into leads." },
              { icon: <Target />, title: "Google visibility", desc: "We put you where your customers are searching. Local SEO that actually works." },
              { icon: <Shield />, title: "Automation system", desc: "Automated follow-ups so no lead ever goes cold while you sleep." },
              { icon: <BarChart3 />, title: "Clear positioning", desc: "We help you stand out from competitors so you're the obvious choice." }
            ].map((card, i) => (
              <div key={i} className="p-6 border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#FF0000] transition-all group rounded-lg">
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 text-[#FF0000] group-hover:scale-110 transition-transform shadow-sm rounded-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU GET */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">What You Get</h2>
          
          <div className="space-y-8">
            {[
              { title: "High-converting website", desc: "A custom-built, lightning-fast site optimized for mobile and lead generation." },
              { title: "Local SEO setup", desc: "Google Business Profile optimization and local keyword targeting to dominate search." },
              { title: "WhatsApp + automation workflows", desc: "Instant notifications and automated replies to keep prospects engaged." },
              { title: "Lead tracking system", desc: "A simple dashboard to see exactly where your customers are coming from." },
              { title: "Done-for-you setup", desc: "We handle the technical heavy lifting. You just handle the new business." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start border-b border-gray-800 pb-8 last:border-0">
                <div className="text-[#FF0000] font-mono font-bold text-xl">0{i+1}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY THIS IS DIFFERENT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
            This Is Not a Typical Agency Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              { title: "No Retainers", desc: "We don't lock you into endless monthly fees. You pay for the system, and you own it." },
              { title: "No Delays", desc: "We move at the speed of business. No 3-month discovery phases. Just execution." },
              { title: "Focus on Outcomes", desc: "We don't care about 'impressions'. We care about calls, bookings, and revenue." },
              { title: "Real Experience", desc: "Built from real execution experience, not just theoretical marketing fluff." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#FF0000]"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUTCOME SECTION */}
      <section className="py-24 px-6 bg-[#FF0000] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">What Changes After This</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              "More calls and enquiries every single week",
              "Faster follow-ups without you lifting a finger",
              "Better conversion rates from your traffic",
              "Predictable growth you can actually plan for"
            ].map((text, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 flex items-center justify-center text-center rounded-lg">
                <p className="text-xl font-bold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SCARCITY SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#FF0000] font-mono font-bold mb-6">
            <AlertCircle className="w-5 h-5" />
            <span>IMPORTANT NOTICE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Only 100 Businesses Will Be Selected
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              To maintain the highest quality of execution, we are strictly limiting this initiative to 100 businesses. 
            </p>
            <p>
              We don't just "build websites"—we build growth engines. This requires deep focus and manual setup for every single partner.
            </p>
            <p className="font-bold text-black">
              Not everyone will be accepted. We are looking for businesses that are good at what they do but are currently being held back by their digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* 8. APPLICATION FORM */}
      <section id="apply-form" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 shadow-2xl border border-gray-100 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Application Form</h2>
            <p className="text-gray-600">Tell us about your business. We'll review your application and get back to you within 48 hours.</p>
          </div>

          {formState === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Received!</h3>
              <p className="text-gray-600 mb-8">Thank you for applying. Our team will review your details and reach out soon.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="text-[#FF0000] font-bold underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-500 mb-2">Full Name</label>
                  <input 
                    required 
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-500 mb-2">Business Name</label>
                  <input 
                    required 
                    name="business_name"
                    type="text" 
                    placeholder="Acme Corp"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors rounded-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                  <input 
                    required 
                    name="phone"
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-500 mb-2">City</label>
                  <input 
                    required 
                    name="city"
                    type="text" 
                    placeholder="New York"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-gray-500 mb-2">What do you do?</label>
                <textarea 
                  required 
                  name="description"
                  rows={3}
                  placeholder="Briefly describe your services..."
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-gray-500 mb-2">Current Problem</label>
                <textarea 
                  required 
                  name="problem"
                  rows={3}
                  placeholder="What is your biggest challenge with growing online right now?"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors rounded-lg"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-[#FF0000] text-white py-4 font-bold text-lg hover:bg-black transition-all disabled:bg-gray-400 flex items-center justify-center gap-2 rounded-lg"
              >
                {formState === 'submitting' ? 'Processing...' : 'Apply for the Program'}
                <ArrowRight className="w-5 h-5" />
              </button>
              
              {formState === 'error' && (
                <p className="text-center text-[#FF0000] text-sm font-bold">Something went wrong. Please try again or contact us directly.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 px-6 bg-white text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            If Your Business Is Good, But Not Growing Online — This Fixes That
          </h2>
          <a 
            href="#apply-form"
            className="inline-block bg-[#FF0000] text-white px-10 py-5 font-bold text-2xl hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

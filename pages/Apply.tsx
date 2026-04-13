import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BraceWrap } from '../components/Layout';
import { 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Globe, 
  MessageSquare, 
  TrendingUp,
  Clock,
  Star,
  Lock,
  ChevronDown
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#FF0000] transition-colors group"
      >
        <h4 className="text-lg font-bold pr-8">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="flex-shrink-0 text-gray-400 group-hover:text-[#FF0000]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 24 : 0
        }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 leading-relaxed pr-12">{answer}</p>
      </motion.div>
    </div>
  );
};

export const Apply = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stats = [
    { label: "Spots Left", value: "42/100", icon: <Users className="w-4 h-4" /> },
    { label: "Avg. Growth", value: "+140%", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Setup Time", value: "14 Days", icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <div ref={containerRef} className="bg-[#fcfcfc] text-black font-sans selection:bg-[#FF0000] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - SLEEK & CENTERED */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-8 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse"></span>
            Limited Initiative: 100 Businesses Only
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter"
          >
            Stop Chasing Leads. <br className="hidden md:block" /> <BraceWrap>Build</BraceWrap> a Growth System.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            We're helping 100 local businesses replace manual chaos with a complete growth engine. Website, SEO, and Automation—all in one sleek package.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a 
              href="#apply-form"
              className="bg-[#FF0000] text-white px-10 py-4 font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-none hover:translate-y-1 rounded-lg text-center"
            >
              Apply for the Program
            </a>
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-7 h-7 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-gray-500">58 businesses already joined</span>
            </div>
          </motion.div>

          {/* Sleek Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-left">
              <div className="bg-[#2a2a2a] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">growth_engine_v2.sys</div>
              </div>
              <div className="p-6 md:p-8 font-mono text-[12px] md:text-sm space-y-3">
                <div className="flex gap-4">
                  <span className="text-gray-600">01</span>
                  <span className="text-green-400">Initializing growth_matrix... [SUCCESS]</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">02</span>
                  <span className="text-white">Deploying local_seo_module... <span className="text-green-400">DONE</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-600">03</span>
                  <span className="text-white">Activating lead_capture_v3... <span className="text-green-400">ACTIVE</span></span>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">Avg. Growth</div>
                  <div className="text-lg font-bold tracking-tighter">+140%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 mb-8">Trusted by local leaders in</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['Real Estate', 'Healthcare', 'Legal', 'E-commerce', 'Consulting'].map(cat => (
              <span key={cat} className="text-xl font-bold tracking-tighter">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM - BENTO GRID */}
      <section className="py-32 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">The "Manual Trap" is Killing Your Growth</h2>
            <p className="text-xl text-gray-600">Most businesses aren't failing because they're bad at what they do. They're failing because their digital systems are broken.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div {...fadeInUp} className="md:col-span-2 bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-red-50 text-[#FF0000] rounded-lg flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">The "Ghost Town" Website</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  You spent thousands on a "pretty" website, but it gets zero traffic. It's not an asset; it's a digital paperweight. Without visibility, you don't exist.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-gray-50 flex items-center gap-4">
                <div className="text-sm font-mono text-gray-400">IMPACT:</div>
                <div className="text-sm font-bold text-red-600">90% of visitors leave in 3 seconds</div>
              </div>
            </motion.div>

            {/* Small Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-black text-white p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">The Leaky Bucket</h3>
                <p className="text-gray-400 leading-relaxed">
                  Leads come in, but you're too busy to reply. By the time you call back, they've already hired your competitor.
                </p>
              </div>
              <div className="mt-8 text-xs font-mono text-[#FF0000]">LEADS LOST: 65%+</div>
            </motion.div>

            {/* Small Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Manual Chaos</h3>
              <p className="text-gray-600 leading-relaxed">
                Chasing invoices, manually sending follow-ups, and managing leads in your head. It's not scalable.
              </p>
            </motion.div>

            {/* Medium Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="md:col-span-2 bg-gray-900 text-white p-10 rounded-2xl flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">The Solution? A System.</h3>
                <p className="text-gray-400 leading-relaxed">
                  We don't just build websites. We build automated engines that find, capture, and nurture leads until they buy.
                </p>
              </div>
              <div className="flex-shrink-0 w-32 h-32 bg-[#FF0000] rounded-full flex items-center justify-center text-white font-bold text-center p-4 leading-tight rotate-12">
                SYSTEMS {">"} EFFORT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE PROCESS - STEP BY STEP */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">How We Build Your Engine</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A proven 4-step framework to take you from invisible to industry leader.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gray-100 -z-10"></div>
            
            {[
              { step: "01", title: "Positioning", desc: "We find your unique angle that makes competitors irrelevant.", icon: <Target /> },
              { step: "02", title: "Visibility", desc: "We put you on the first page of Google where customers are searching.", icon: <Globe /> },
              { step: "03", title: "Conversion", desc: "We build a high-speed site designed to turn clicks into calls.", icon: <Zap /> },
              { step: "04", title: "Automation", desc: "We set up the follow-up systems so you never lose a lead again.", icon: <MessageSquare /> },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center text-[#FF0000] mb-8 group-hover:bg-[#FF0000] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="text-xs font-mono text-[#FF0000] font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU GET - DETAILED LIST */}
      <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000] opacity-10 blur-[150px]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">Everything You Need. <br/><span className="text-[#FF0000]">Nothing You Don't.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Custom Growth Website", desc: "Not a template. A custom-coded, lightning-fast lead machine." },
                  { title: "Local SEO Dominance", desc: "Google Business optimization and local keyword ranking." },
                  { title: "WhatsApp Automation", desc: "Instant lead notifications and automated customer replies." },
                  { title: "CRM & Lead Tracking", desc: "A simple dashboard to manage your growth without the mess." },
                  { title: "Positioning Strategy", desc: "Copywriting that sells and positioning that wins." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-all">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-center">
                <div className="text-center mb-10">
                  <div className="text-sm font-mono text-[#FF0000] mb-2 uppercase tracking-widest">The Investment</div>
                  <div className="text-6xl font-bold tracking-tighter mb-2">Subsidized</div>
                  <p className="text-gray-400">For the first 100 businesses only.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-gray-400">Market Value</span>
                    <span className="line-through text-gray-600">$5,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#FF0000]/10 rounded-lg border border-[#FF0000]/20">
                    <span className="font-bold">Your Cost</span>
                    <span className="font-bold text-[#FF0000]">Apply to See</span>
                  </div>
                </div>
                <a href="#apply-form" className="mt-10 w-full bg-white text-black py-4 font-bold text-center rounded-lg hover:bg-[#FF0000] hover:text-white transition-all">
                  Check Eligibility →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS / SOCIAL PROOF */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Real Systems. Real Results.</h2>
            <p className="text-xl text-gray-600">We don't care about vanity metrics. We care about the bottom line.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FF0000] text-[#FF0000]" />)}
              </div>
              <p className="text-xl italic text-gray-700 mb-8 leading-relaxed">
                "Before NoobDev, we were getting maybe 2 leads a month from our site. After they built our system, we're averaging 15-20 high-quality enquiries. The automation alone saved me 10 hours a week."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/client1/60/60" className="w-12 h-12 rounded-full" alt="Client" />
                <div>
                  <div className="font-bold">David Miller</div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Miller Real Estate</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FF0000] text-[#FF0000]" />)}
              </div>
              <p className="text-xl italic text-gray-700 mb-8 leading-relaxed">
                "The transparency is what I loved. I can see exactly where every dollar goes and exactly how many leads are coming in. It's the first time I've felt in control of my marketing."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/client2/60/60" className="w-12 h-12 rounded-full" alt="Client" />
                <div>
                  <div className="font-bold">Sarah Chen</div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Chen Consulting Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE FORM - HIGH CONVERSION */}
      <section id="apply-form" className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold mb-6 tracking-tighter">Apply for the 100 Businesses Initiative</h2>
                <p className="text-gray-600 mb-8">This is not a sales call. It's a discovery session to see if your business is a fit for the system we build.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[#FF0000]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">100% Secure & Confidential</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[#FF0000]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Takes less than 2 minutes</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-[#FF0000]">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Instant confirmation email</span>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-[#FF0000]/5 border border-[#FF0000]/10 rounded-2xl">
                  <div className="text-xs font-mono text-[#FF0000] font-bold mb-2 uppercase tracking-widest">Current Status</div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-bold tracking-tighter">58/100 Joined</span>
                    <span className="text-xs text-gray-500">42 spots left</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF0000]" style={{ width: '58%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-100">
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Application Received!</h3>
                    <p className="text-gray-600 mb-10 leading-relaxed">We've received your details. Our team will review your business and reach out within 48 hours to discuss next steps.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-[#FF0000] font-bold border-b-2 border-[#FF0000] pb-1 hover:text-black hover:border-black transition-all"
                    >
                      Submit another application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-widest">Full Name</label>
                          <input 
                            required 
                            name="name"
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-gray-50 border border-gray-100 px-5 py-4 focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all rounded-xl text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-widest">Business Name</label>
                          <input 
                            required 
                            name="business_name"
                            type="text" 
                            placeholder="Acme Corp"
                            className="w-full bg-gray-50 border border-gray-100 px-5 py-4 focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all rounded-xl text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-widest">Email Address</label>
                          <input 
                            required 
                            name="email"
                            type="email" 
                            placeholder="john@acme.com"
                            className="w-full bg-gray-50 border border-gray-100 px-5 py-4 focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all rounded-xl text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-widest">Phone Number</label>
                          <input 
                            required 
                            name="phone"
                            type="tel" 
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-gray-50 border border-gray-100 px-5 py-4 focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all rounded-xl text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-widest">What is your primary goal?</label>
                        <select 
                          name="goal"
                          className="w-full bg-gray-50 border border-gray-100 px-5 py-4 focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all rounded-xl text-sm appearance-none"
                        >
                          <option>More Leads/Enquiries</option>
                          <option>Better Online Visibility</option>
                          <option>Automate Follow-ups</option>
                          <option>Professional Brand Image</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-widest">Tell us about your business</label>
                        <textarea 
                          required 
                          name="description"
                          rows={3}
                          placeholder="What do you sell and who do you sell to?"
                          className="w-full bg-gray-50 border border-gray-100 px-5 py-4 focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all rounded-xl text-sm resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-[#FF0000] text-white py-5 font-bold text-xl hover:bg-black transition-all disabled:bg-gray-400 flex items-center justify-center gap-3 rounded-xl shadow-[0_20px_40px_rgba(255,0,0,0.2)] hover:shadow-none"
                    >
                      {formState === 'submitting' ? 'Processing Application...' : 'Submit Application'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <p className="text-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      By applying, you agree to our terms of service.
                    </p>

                    {formState === 'error' && (
                      <p className="text-center text-[#FF0000] text-sm font-bold">Something went wrong. Please try again or contact us directly.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION - TWO COLUMNS & ACCORDION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 tracking-tighter text-center">Common Questions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
            {[
              { 
                q: "Is this a monthly retainer?", 
                a: "No. We build the system, you own it. There are no hidden monthly fees or long-term contracts for the core build. We focus on building a permanent asset for your business." 
              },
              { 
                q: "How long does it take to see results?", 
                a: "The system is typically live within 14 days. Most businesses start seeing increased visibility and lead flow within the first 30 days of the system being active." 
              },
              { 
                q: "What if I already have a website?", 
                a: "Most existing websites are 'digital brochures'. We either rebuild or heavily optimize your current site to turn it into a high-performance conversion engine." 
              },
              { 
                q: "Do I need to be tech-savvy?", 
                a: "Not at all. We handle the technical heavy lifting. We provide a simple dashboard where you can see your leads and growth without touching a single line of code." 
              },
              { 
                q: "What industries do you work with?", 
                a: "We specialize in local service-based businesses like Real Estate, Healthcare, Legal, and Consulting where lead generation is the primary goal." 
              },
              { 
                q: "Is the subsidized cost permanent?", 
                a: "The subsidized pricing is only available for the first 100 businesses who join this initiative. Once the spots are filled, our standard agency rates will apply." 
              },
              { 
                q: "Do you handle Google Ads too?", 
                a: "While our core system focuses on organic visibility (SEO), we can integrate and manage Google Ads as an add-on to accelerate your growth." 
              },
              { 
                q: "What happens after the 100 spots?", 
                a: "Once we reach 100 businesses, we will close the initiative to focus on the success of our partners. We may open a waitlist for future cohorts." 
              },
              { 
                q: "Can I update the site myself?", 
                a: "Yes. We build on user-friendly platforms that allow you to make simple text and image updates yourself, or we can handle it for you." 
              },
              { 
                q: "Is hosting included?", 
                a: "We provide recommendations for the best hosting for your specific needs. We'll set everything up for you so it's completely hands-off." 
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 px-6 bg-[#FF0000] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter leading-[0.9]">Ready to Scale?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">Don't let another month go by with a broken system. Join the 100 businesses initiative today.</p>
          <a 
            href="#apply-form"
            className="inline-block bg-white text-[#FF0000] px-12 py-6 font-bold text-2xl hover:bg-black hover:text-white transition-all shadow-2xl hover:shadow-none hover:translate-y-1 rounded-xl"
          >
            Apply Now →
          </a>
          <p className="mt-8 text-sm font-mono uppercase tracking-[0.3em] opacity-60">Limited spots remaining for Q2 2024</p>
        </div>
      </section>
    </div>
  );
};

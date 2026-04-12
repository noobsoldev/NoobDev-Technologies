import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../data/case-studies';
import { PROJECTS } from '../constants';
import { BraceWrap } from '../react-components/Layout';

export const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? CASE_STUDIES[slug] : null;
  const projectInfo = slug ? PROJECTS.find(p => p.slug === slug) : null;

  useEffect(() => {
    if (caseStudy) {
      document.title = projectInfo?.seoTitle || caseStudy.seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", projectInfo?.seoDescription || caseStudy.seo.description);
      }
      
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", caseStudy.seo.keywords);
    }
  }, [caseStudy]);

  if (!caseStudy || !projectInfo) {
    return <Navigate to="/showcase" replace />;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": projectInfo?.seoTitle || caseStudy.seo.title,
    "description": projectInfo?.seoDescription || caseStudy.seo.description,
    "image": projectInfo.image,
    "datePublished": "2026-04-10T08:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Noobdev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Noobdev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://noobdev.tech/favicon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://noobdev.tech/projects/${slug}`
    }
  };

  return (
    <div className="page-transition pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex text-sm font-mono text-gray-600 mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-[#FF0000] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/showcase" className="hover:text-[#FF0000] transition-colors">Showcase</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-bold" aria-current="page">
              {caseStudy.clientName}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-gray-100 px-3 py-1 text-xs font-mono mb-6 border-l-2 border-[#FF0000] uppercase tracking-widest">
            Case Study // {projectInfo.industry}
          </div>
          <h1 className="mb-6 leading-tight">
            {caseStudy.clientName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed mb-0">
            {caseStudy.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#FF0000] text-white px-8 py-4 font-bold text-lg rounded-lg hover:bg-[#cc0000] transition-all flex items-center justify-center group shadow-md"
            >
              Get a Similar Website <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            {caseStudy.liveUrl && (
              <a 
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 text-black px-8 py-4 font-bold text-lg rounded-lg hover:border-black transition-all flex items-center justify-center"
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* Live Preview Screenshot */}
        <div className="mb-24">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white group relative">
            {/* Browser Mockup Header */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <div className="ml-4 text-[10px] font-mono text-gray-500 truncate flex-1 text-center">
                {caseStudy.liveUrl.replace('https://', '').replace('/', '')}
              </div>
              <div className="w-16"></div>
            </div>
            <div className="relative w-full aspect-video bg-gray-50 overflow-hidden">
              <img 
                src={projectInfo.image} 
                alt={`${caseStudy.clientName} Website Preview`}
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <a 
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-4 font-bold rounded-lg hover:bg-[#FF0000] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                >
                  Visit Live Website ↗
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4 font-mono">High-resolution preview of the actual website</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-16">
            
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-[#FF0000] mr-3">{"{"}</span> The Hook <span className="text-[#FF0000] ml-3">{"}"}</span>
              </h2>
              <p className="text-xl text-gray-800 leading-relaxed font-medium border-l-4 border-[#FF0000] pl-6 py-2">
                "{caseStudy.story.hook}"
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Context & Background</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.story.context}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">The Core Problem</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.story.problemDepth}
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#FF0000] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                Strategic Thinking
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                {caseStudy.story.strategicThinking}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Execution & Design</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.story.execution}
              </p>
            </section>

            <section className="bg-black text-white p-10 rounded-xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-[#FF0000]">The Outcome</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {caseStudy.story.outcome}
              </p>
              
              <div className="border-t border-gray-800 pt-8 mt-8">
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Success Factors</h4>
                <ul className="space-y-4">
                  {caseStudy.successFactors.map((factor, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#FF0000] mr-3 mt-1">✓</span>
                      <span className="text-gray-300">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Who is this for */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Who This Is For</h3>
              <p className="text-gray-800 font-medium leading-relaxed">
                {caseStudy.whoIsThisFor}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Key Takeaways</h3>
              <ul className="space-y-6">
                {caseStudy.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-gray-100 text-gray-600 font-mono text-xs px-2 py-1 rounded mr-3 mt-0.5">0{idx + 1}</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-50 border border-gray-100 text-gray-700 px-3 py-1.5 text-xs font-mono rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border border-gray-200 p-12 text-center rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to build your success story?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Whether you need a high-converting website, a custom CRM, or an automated workflow, we have the expertise to deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#FF0000] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#cc0000] transition-all shadow-md"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="border-2 border-gray-200 text-black px-8 py-4 font-bold rounded-lg hover:border-black transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

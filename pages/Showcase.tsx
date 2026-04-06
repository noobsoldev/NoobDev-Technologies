
import React, { useState } from 'react';
import { BraceWrap } from '../components/Layout';
import { PROJECTS } from '../constants';

export const Showcase = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Automation', 'Web Dev', 'SEO', 'CRM'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="page-transition pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><BraceWrap>Our Work</BraceWrap></h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Real results for real businesses. Browse our portfolio of automated success stories.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-mono text-sm border-b-2 transition-all ${
                filter === cat ? 'border-[#FF0000] text-[#FF0000] font-bold' : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              {filter === cat ? `{${cat}}` : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="group relative bg-white border border-gray-200 hover:border-black transition-all duration-500 overflow-hidden flex flex-col">
                {/* Browser Mockup Header */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <div className="ml-4 text-[10px] font-mono text-gray-400 truncate">
                    {project.link?.replace('https://', '').replace('/', '')}
                  </div>
                </div>
                
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img 
                    src={project.image} 
                    alt={`${project.title} project showcase`} 
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-mono text-[#FF0000] mb-2 uppercase tracking-widest">
                        [ {project.industry} // {project.category} ]
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#FF0000] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">Key Result</div>
                      <div className="font-bold text-gray-900">{project.metric}</div>
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white group-hover:bg-[#FF0000] transition-colors shadow-md"
                        aria-label={`Visit ${project.title}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Projects Incoming</h3>
              <p className="text-gray-500 font-mono">Real-world automation success stories are currently being uploaded. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

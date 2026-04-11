
import React, { useState } from 'react';
import { Service } from '../types';
import { Terminal, CodeSnippet } from './Terminal';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  services: Service[];
}

export const ServicesExplorer = ({ services }: Props) => {
  const [selectedId, setSelectedId] = useState<string>(services[0].id);
  const selectedService = services.find(s => s.id === selectedId) || services[0];

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Sidebar / Grid of Cards */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedId(s.id)}
            className={`p-6 text-left border transition-all duration-300 group relative overflow-hidden ${
              selectedId === s.id 
                ? 'border-[#FF0000] bg-white shadow-lg' 
                : 'border-gray-100 bg-white hover:border-gray-300'
            }`}
          >
            {selectedId === s.id && (
              <motion.div 
                layoutId="active-bg"
                className="absolute inset-0 bg-[#FF0000]/5 z-0"
              />
            )}
            <div className="relative z-10">
              <div className={`text-xl font-mono mb-3 transition-colors ${selectedId === s.id ? 'text-[#FF0000]' : 'text-gray-400 group-hover:text-black'}`}>
                {s.icon}
              </div>
              <h3 className={`font-bold mb-1 transition-colors ${selectedId === s.id ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                {s.title}
              </h3>
              <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                {s.id.replace('-', ' ')}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Code Window (Terminal) */}
      <div className="lg:w-1/2 w-full sticky top-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Terminal title={`${selectedId.replace('-', '_')}.config`}>
              <div className="mb-6">
                <CodeSnippet code={`{
  "service": "${selectedService.title}",
  "description": "${selectedService.description}",
  "capabilities": [
    ${(selectedService.features || ['Custom Integration', 'No-code logic', 'API connection']).map(f => `"${f}"`).join(',\n    ')}
  ],
  "status": "Ready to Build"
}`} />
              </div>
              
              <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex gap-8">
                  {selectedService.pricing && (
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Starts at</div>
                      <div className="text-lg font-bold text-white">{selectedService.pricing}</div>
                    </div>
                  )}
                  {selectedService.timeline && (
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Timeline</div>
                      <div className="text-lg font-bold text-white">{selectedService.timeline}</div>
                    </div>
                  )}
                </div>
                
                <a 
                  href={`/services/${selectedService.id}`}
                  className="w-full sm:w-auto bg-[#FF0000] text-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-all text-center text-sm"
                >
                  Know More →
                </a>
              </div>
            </Terminal>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-8 p-6 bg-gray-50 border border-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 leading-relaxed italic">
            "We don't just build tools; we architect solutions. Select a service to see how we can transform your business workflows."
          </p>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  // Double the testimonials for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-white">
      {/* Marquee Container */}
      <div className="flex group">
        <div className="flex animate-marquee group-hover:pause-marquee gap-6 px-4">
          {doubledTestimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>
      </div>
      
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="w-[300px] md:w-[380px] flex-shrink-0 p-8 border border-gray-100 bg-gray-50 hover:border-gray-300 transition-all duration-300">
      <div className="text-[#FF0000] font-mono text-xl mb-4 opacity-50">“</div>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 min-h-[80px]">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF0000] font-bold text-[10px] border border-gray-200">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-black text-xs tracking-tight">{testimonial.name}</div>
          <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-0.5">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

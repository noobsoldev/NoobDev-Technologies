import React, { useState } from 'react';

export const NewsletterForm = ({ minimal = false }: { minimal?: boolean }) => {
  const [newsletterState, setNewsletterState] = useState<'idle' | 'submitting' | 'success'>('idle');

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

  if (newsletterState === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg ${minimal ? 'p-4' : 'p-8'} max-w-lg mx-auto`}>
        <p className={`${minimal ? 'text-sm' : 'text-xl'} font-bold text-green-800 mb-1`}>Thanks! 🚀</p>
        <p className="text-green-700 text-xs">Check your inbox.</p>
      </div>
    );
  }

  return (
    <div className={minimal ? 'w-full' : 'max-w-lg mx-auto'}>
      <form onSubmit={handleNewsletterSubmit} className={`flex ${minimal ? 'flex-col gap-2' : 'flex-col sm:flex-row gap-4'}`}>
        <input 
          required
          name="email"
          type="email" 
          placeholder="your@email.com" 
          aria-label="Email address for newsletter"
          className={`flex-1 bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#FF0000] transition-colors text-sm rounded-lg`} 
        />
        <button 
          type="submit"
          disabled={newsletterState === 'submitting'}
          className={`bg-black text-white px-6 py-3 font-bold text-xs hover:bg-[#FF0000] transition-all disabled:bg-gray-400 uppercase tracking-widest rounded-lg`}
        >
          {newsletterState === 'submitting' ? '...' : 'Join'}
        </button>
      </form>
      {!minimal && <p className="mt-4 text-xs font-mono text-gray-500">0% Spam. 100% Value. Unsubscribe anytime.</p>}
    </div>
  );
};

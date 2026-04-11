import React, { useState } from 'react';

export const NewsletterForm = () => {
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
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
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
      <p className="mt-4 text-xs font-mono text-gray-500">0% Spam. 100% Value. Unsubscribe anytime.</p>
    </div>
  );
};

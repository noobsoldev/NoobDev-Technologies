import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BraceWrap } from '../react-components/Layout';

export const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found | Noob{dev}";
  }, []);

  return (
    <div className="page-transition min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-bold text-gray-100 mb-4 font-mono">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not <BraceWrap>Found</BraceWrap></h2>
      <p className="text-gray-600 max-w-md mx-auto mb-10">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link 
        to="/"
        className="bg-[#FF0000] text-white px-8 py-4 font-bold text-lg hover:bg-black transition-all"
      >
        Return Home →
      </Link>
    </div>
  );
};

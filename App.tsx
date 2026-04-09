
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Showcase = lazy(() => import('./pages/Showcase').then(module => ({ default: module.Showcase })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(module => ({ default: module.BlogPost })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(module => ({ default: module.ServiceDetail })));
const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy').then(module => ({ default: module.ProjectCaseStudy })));
const StartupPerks = lazy(() => import('./pages/StartupPerks').then(module => ({ default: module.StartupPerks })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Initiative = lazy(() => import('./pages/Initiative').then(module => ({ default: module.Initiative })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash in the new location, scroll to top and clear any lingering browser hash
    if (!hash) {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, '', pathname);
      }
    }
  }, [pathname, hash]);

  return null;
};

// Custom branded loading fallback
const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-5xl md:text-6xl font-mono font-bold flex items-center">
        <span className="text-[#FF0000]">{`{`}</span>
        <span className="flex space-x-3 mx-6">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full animate-dot-wave" style={{ animationDelay: '0ms' }}></span>
          <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full animate-dot-wave" style={{ animationDelay: '200ms' }}></span>
          <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full animate-dot-wave" style={{ animationDelay: '400ms' }}></span>
          <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full animate-dot-wave" style={{ animationDelay: '600ms' }}></span>
        </span>
        <span className="text-[#FF0000]">{`}`}</span>
      </div>
    </div>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/perks" element={<StartupPerks />} />
            <Route path="/100-business-initiative" element={<Initiative />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <ScrollProgress />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const h = document.documentElement, 
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
          const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
          setWidth(percent);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div 
      className="h-full bg-[#FF0000] transition-all duration-150 ease-out" 
      style={{ width: `${width}%` }}
    />
  );
};

export default App;

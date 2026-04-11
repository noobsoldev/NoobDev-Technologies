import React from 'react';

export const Link = ({ to, children, className, onClick }: any) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

export const useNavigate = () => {
  return (path: string) => {
    window.location.href = path;
  };
};

export const useLocation = () => {
  if (typeof window !== 'undefined') {
    return window.location;
  }
  return { pathname: '/' };
};

export const useParams = () => {
  // We will pass params via context or props in Astro, but for a quick shim, 
  // we can extract it from the URL if needed, or just rely on Astro passing props to the component.
  // Actually, since Astro pages will render the React component, we can pass the slug/id as a prop
  // and the component can read it. But if it uses useParams(), we can mock it by reading from window.location
  if (typeof window !== 'undefined') {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    // e.g. /blog/my-post -> ['blog', 'my-post']
    // e.g. /services/web-dev -> ['services', 'web-dev']
    if (pathParts[0] === 'blog' && pathParts[1]) return { slug: pathParts[1] };
    if (pathParts[0] === 'services' && pathParts[1]) return { id: pathParts[1] };
    if (pathParts[0] === 'showcase' && pathParts[1]) return { id: pathParts[1] };
  }
  return {};
};

export const Navigate = ({ to }: { to: string }) => {
  if (typeof window !== 'undefined') {
    window.location.href = to;
  }
  return null;
};

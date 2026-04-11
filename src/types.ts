
export type Page = 'home' | 'about' | 'services' | 'showcase' | 'blog' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  detailedDescription?: string;
  features?: string[];
  tools?: string[];
  pricing?: string;
  timeline?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  industry: string;
  metric: string;
  image: string;
  link?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  tagline: string;
  liveUrl: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  story: {
    hook: string;
    context: string;
    problemDepth: string;
    strategicThinking: string;
    execution: string;
    outcome: string;
  };
  keyTakeaways: string[];
  whoIsThisFor: string;
  successFactors: string[];
  techStack: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  image: string;
}


import React from 'react';
import { Service, Project, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Connect your apps and automate repetitive tasks with AI-powered workflows.',
    icon: '{AI}',
    detailedDescription: 'Most businesses are drowning in manual data entry, repetitive emails, and disconnected software. We build custom AI workflows that act as your digital workforce, operating 24/7 without errors.\n\nUsing industry-leading tools like OpenAI, Claude, Zapier, and Make.com, we connect your existing SaaS stack. Whether it\'s automatically qualifying leads from your website, parsing PDF invoices into your accounting software, or deploying intelligent customer service bots that actually resolve tickets, we handle the technical heavy lifting.\n\nStop paying humans to do robot work. Our AI automation solutions are designed for immediate ROI, typically saving teams 15-20 hours per week within the first month of deployment.\n\nImagine a scenario where a new lead fills out a form on your website. Instantly, a Make.com scenario triggers, sending the lead\'s data to OpenAI to analyze their intent and draft a personalized email response. Simultaneously, the lead is added to your CRM, and a Slack notification is sent to your sales team with a summary of the lead\'s needs. This entire process happens in seconds, without any human intervention. This is the power of AI automation.\n\nWe don\'t just set up basic triggers and actions. We architect robust, error-resistant systems. If an API fails, our workflows include fallback mechanisms and error logging, ensuring you are immediately notified without losing data. We utilize advanced features like webhooks, custom API requests, and data iteration to handle complex business logic that off-the-shelf software simply cannot manage.',
    features: ['Data entry and processing', 'Email workflows', 'Customer service bots', 'Report generation', 'Lead qualification'],
    tools: ['Zapier', 'Make', 'n8n', 'OpenAI', 'Claude'],
    pricing: 'From $499/mo',
    timeline: '1-2 weeks'
  },
  {
    id: 'landing-pages',
    title: 'Fast Landing Pages',
    description: 'High-converting landing pages delivered in 48 hours.',
    icon: '{LP}',
    detailedDescription: 'Speed meets quality. In digital marketing, a slow landing page kills your ad spend. We build lightning-fast, mobile-responsive landing pages optimized specifically for maximum conversion rates.\n\nWe don\'t just use generic templates. We analyze your target audience and implement proven UX/UI principles, clear call-to-actions, and persuasive copywriting structures. Every page is built with technical SEO in mind, ensuring a 90+ Google PageSpeed score out of the box.\n\nIntegrated seamlessly with your CRM (HubSpot, Salesforce) and analytics tools, our landing pages turn your paid traffic into qualified leads within 48 hours.\n\nOur process starts with understanding your offer. We map out the user journey, ensuring that every scroll and click leads the user closer to the conversion goal. We utilize A/B testing frameworks to continuously optimize headlines, button colors, and form placements based on real user data.\n\nFurthermore, we integrate advanced tracking pixels and server-side tagging to ensure your ad platforms receive accurate conversion data, lowering your cost-per-acquisition (CPA) over time. We also implement automated lead routing via Zapier or Make.com, ensuring that the moment a user submits a form, their data is instantly pushed to your sales team\'s CRM and an automated SMS or email sequence is triggered.',
    features: ['Responsive design', '90+ PageSpeed score', 'CRM integrations', 'SEO optimization'],
    pricing: 'From $999',
    timeline: '48-72 hours'
  },
  {
    id: 'custom-websites',
    title: 'Custom Websites',
    description: 'Modern, scalable web solutions tailored to your business needs.',
    icon: '{WEB}',
    detailedDescription: 'Your website is your most important digital asset. We build full-featured corporate websites and web applications using modern, scalable frameworks that outperform traditional WordPress setups.\n\nWhether you need a headless e-commerce platform, a custom portal for your clients, or a high-performance marketing site, we utilize React, Next.js, and Tailwind CSS to deliver pixel-perfect designs. We focus heavily on site architecture, ensuring your website is not only beautiful but also structured perfectly for search engine crawlers.\n\nWe also integrate user-friendly headless CMS solutions like Sanity or Contentful, empowering your marketing team to update content effortlessly without touching a line of code.\n\nBeyond just the frontend, we architect robust backend systems using Node.js, Supabase, or Firebase, ensuring your application can scale securely. We implement modern authentication flows, secure payment gateways via Stripe, and complex database structures tailored to your specific business logic.\n\nEvery custom website we build undergoes rigorous performance testing. We optimize image delivery, implement intelligent caching strategies, and ensure your site achieves near-perfect Core Web Vitals scores. This technical excellence not only provides a superior user experience but also significantly boosts your organic search rankings.',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'],
    timeline: '4-12 weeks'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Dominate traditional search results with data-driven technical and content strategies.',
    icon: '{SEO}',
    detailedDescription: 'Traditional Search Engine Optimization (SEO) is the bedrock of digital visibility. While AI is changing the landscape, Google still processes billions of searches daily. We focus on making your business the #1 choice for those users.\n\n**What is it?**\nSEO is the process of optimizing your website to rank higher in search engine results pages (SERPs) for specific keywords. It involves technical health, content quality, and authority building.\n\n**When do you need it?**\nYou need SEO when you want to build a long-term, sustainable source of organic traffic that doesn\'t depend on daily ad spend. It\'s essential for any business looking to establish authority in their niche.\n\n**How do we do it?**\nWe start with a deep technical audit to fix Core Web Vitals and site speed. Then, we perform exhaustive keyword research to identify "low-hanging fruit" and high-intent terms. We optimize your on-page content, structure your internal linking, and ensure your site is perfectly crawlable.\n\n**Why is it important?**\nOrganic search traffic is often the highest-converting traffic source. Ranking on the first page of Google builds instant trust with potential customers and provides a massive competitive advantage that compounds over time.',
    features: ['Technical SEO Audits', 'Keyword Research', 'On-page Optimization', 'Content Strategy', 'Backlink Analysis'],
    pricing: 'From $799/mo',
    timeline: 'Ongoing'
  },
  {
    id: 'geo',
    title: 'Generative Engine Optimization (GEO)',
    description: 'Ensure your brand is the definitive answer provided by AI search engines like ChatGPT and Gemini.',
    icon: '{GEO}',
    detailedDescription: 'The way people find information is fundamentally shifting from "searching" to "asking." Generative Engine Optimization (GEO) is the new frontier of digital marketing, ensuring your brand is cited by AI models.\n\n**What is it?**\nGEO is the practice of optimizing your digital footprint so that Large Language Models (LLMs) like ChatGPT, Claude, Gemini, and Perplexity recognize your business as a top authority and recommend you in their generated answers.\n\n**When do you need it?**\nYou need GEO now. As more users switch to AI-powered search, being "invisible" to these models means losing a rapidly growing segment of the market. If your competitors are being cited and you aren\'t, you\'re losing the future.\n\n**How do we do it?**\nAI models rely on structured data and clear entity relationships. We implement advanced JSON-LD schema markup, optimize for "natural language" queries, and ensure your brand information is consistent across high-authority data sources that LLMs use for training and grounding.\n\n**Why is it important?**\nWhen an AI recommends your business, it carries a high level of perceived objectivity and trust. GEO allows you to capture users at the "consideration" phase of their journey, often before they even visit a traditional search engine.',
    features: ['AI Citation Audit', 'Schema Markup (JSON-LD)', 'Entity Relationship Mapping', 'Natural Language Optimization', 'Brand Authority Building'],
    pricing: 'From $999/mo',
    timeline: 'Ongoing'
  },
  {
    id: 'press-releases',
    title: 'Press Releases',
    description: 'Professional distribution to 200+ major media outlets.',
    icon: '{PR}',
    detailedDescription: 'Get your brand news in front of the right audience. A well-executed press release builds instant authority, generates high-quality backlinks for SEO, and drives targeted referral traffic to your website.\n\nWe handle the entire process: from writing a compelling, journalist-friendly narrative to strategic media outreach and professional distribution across 200+ major news outlets, including Yahoo Finance, Bloomberg, and regional publications.\n\nWhether you are launching a new product, announcing a funding round, or sharing a major company milestone, our PR distribution ensures your story gets the visibility it deserves.'
  },
  {
    id: 'crm-setup',
    title: 'CRM Setup',
    description: 'Custom configuration and automation for your sales pipeline.',
    icon: '{CRM}',
    detailedDescription: 'Stop losing leads to a disorganized sales process. A CRM is only as good as its implementation. We implement, configure, and automate CRMs to ensure your sales team follows up with every single opportunity systematically.\n\nWe specialize in HubSpot, Salesforce, and Pipedrive. We don\'t just hand you login credentials; we map out your entire sales pipeline, set up automated email sequences, configure lead scoring, and build custom dashboards that give you real-time visibility into your revenue.\n\nBy automating data entry and follow-up reminders, we free your sales team to do what they do best: close deals.',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'ActiveCampaign']
  },
  {
    id: 'openclaw-bots',
    title: 'OpenClaw Bots',
    description: 'Custom bot installation for scraping and automation.',
    icon: '{BOT}',
    detailedDescription: 'Data is the new oil, but extracting it manually is incredibly inefficient. We provide specialized bot implementation for data monitoring, web scraping, and automated repetitive interactions across the web.\n\nWhether you need to monitor competitor pricing in real-time, aggregate industry news, or automate data transfer between legacy systems that lack APIs, our custom OpenClaw bots handle it reliably. We build resilient scrapers that can bypass basic anti-bot protections and handle dynamic, JavaScript-heavy websites.\n\nAll extracted data is automatically cleaned, formatted, and piped directly into your database, CRM, or analytics dashboard.'
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Audit and optimize your internal business workflows.',
    icon: '{BPA}',
    detailedDescription: 'Scaling a business shouldn\'t mean linearly scaling your headcount. We look under the hood of your business to find operational inefficiencies and replace them with smooth, automated systems.\n\nOur Business Process Automation (BPA) service starts with a deep-dive audit of your current standard operating procedures (SOPs). We identify bottlenecks in HR onboarding, invoice processing, inventory management, and client reporting.\n\nWe then architect and deploy custom internal tools and automated workflows that eliminate human error, reduce operational costs, and allow your team to focus on high-value, strategic work.'
  }
];

export const PROJECTS: Project[] = [
  { id: 1, slug: 'vibenote-studio', title: 'VibeNote Studio', link: 'https://vibenote.studio/', category: 'Web Dev', industry: 'SaaS', metric: 'AI Website Generator for Agencies', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://vibenote.studio/' },
  { id: 2, slug: 'optiofy', title: 'Optiofy', link: 'https://optiofy.com/', category: 'CRM', industry: 'Healthcare', metric: 'Optical Prescriptions & Billing App', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://optiofy.com/' },
  { id: 3, slug: 'lenswala', title: 'Lenswala', link: 'https://lenswala.in/', category: 'Web Dev', industry: 'Retail', metric: 'Premium Frames & Eye Care', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://lenswala.in/' },
  { id: 4, slug: 'akansha-rajput', title: 'Akansha Rajput', link: 'https://akansharajput.in/', category: 'Web Dev', industry: 'Personal Brand', metric: 'Professional Portfolio & Branding', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://akansharajput.in/' },
  { id: 5, slug: 'green-river-camp', title: 'Green River Camp', link: 'https://greenrivercamp.in/', category: 'Web Dev', industry: 'Hospitality', metric: 'Nature Retreat & Glamping', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://greenrivercamp.in/' },
  { id: 6, slug: 'exponential-coin', title: 'Exponential Coin', link: 'https://exponential.social/', category: 'Web3', industry: 'Crypto', metric: 'Solana Meme Coin Launch', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://exponential.social/' },
  { id: 7, slug: 'shri-ji-jewellers', title: 'Shri Ji Jewellers', link: 'https://shriji.jewelry/', category: 'Web Dev', industry: 'Retail', metric: 'Premium Jewelry Showroom', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://shriji.jewelry/' },
  { id: 8, slug: 'aqua-republik', title: 'Aqua Republik', link: 'https://aquarepublik.in/', category: 'Web Dev', industry: 'RO Water Purifier Service', metric: '#1 RO Service Provider', image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://aquarepublik.in/', seoTitle: 'Aqua Republik | #1 RO Service in Crossing Republik, Ghaziabad', seoDescription: 'Professional RO water purifier repair, installation, and AMC services in Crossing Republik and Gaur City. Same-day service with genuine spare parts.' }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 0, slug: 'seo-vs-geo-ai-search', title: 'SEO vs. GEO: Why Your Business Needs Both in the Age of AI', category: 'Strategy', date: '2026-04-10', excerpt: 'Is traditional SEO dead? We explore the rise of Generative Engine Optimization (GEO) and how to optimize your brand for ChatGPT, Gemini, and Claude.', readTime: '10 min', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80' },
  { id: 1, slug: '5-business-processes-to-automate', title: '5 Business Processes to Automate First', category: 'Strategy', date: '2025-10-12', excerpt: 'Discover the low-hanging fruit in your business that can be automated today.', readTime: '5 min', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
  { id: 2, slug: 'no-code-vs-low-code-difference', title: 'No-Code vs Low-Code: What\'s the Difference?', category: 'Education', date: '2025-10-08', excerpt: 'Understand which path is right for your next digital project.', readTime: '7 min', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80' },
  { id: 3, slug: 'how-we-saved-clientx-20-hours', title: 'How We Saved ClientX 20 Hours Per Week', category: 'Case Study', date: '2025-10-01', excerpt: 'A deep dive into our recent automation project for a logistics firm.', readTime: '10 min', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80' }
];

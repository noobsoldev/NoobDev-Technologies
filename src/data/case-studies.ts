import { CaseStudy } from '../../types';

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'vibenote-studio': {
    slug: 'vibenote-studio',
    clientName: 'VibeNote Studio',
    tagline: 'Empowering Agencies with AI-Driven Website Generation',
    liveUrl: 'https://vibenote.studio/',
    seo: {
      title: 'VibeNote Studio Case Study | AI Website Generator | Noob{dev}',
      description: 'Discover how Noob{dev} built VibeNote Studio, an AI-powered website generator that helps digital agencies scale their web development processes.',
      keywords: 'AI website generator, SaaS development, React, Node.js, OpenAI integration, web development automation'
    },
    story: {
      hook: 'Digital agencies were turning away profitable clients simply because building boilerplate website code took too long. The blank canvas syndrome was killing their profit margins.',
      context: 'VibeNote Studio is a B2B SaaS platform designed specifically for digital marketing agencies and freelance web developers. The goal was to create a tool that bridges the gap between natural language ideas and production-ready code.',
      problemDepth: 'Agencies were spending an average of 15-20 hours just wireframing and setting up the initial React/Tailwind repositories for new clients. Existing "no-code" builders were too rigid and produced bloated, unmaintainable spaghetti code that developers hated working with. They needed a solution that output clean, developer-friendly code instantly.',
      strategicThinking: 'We realized that the true value wasn\'t just in generating a website, but in generating *good code*. We decided to bypass traditional drag-and-drop interfaces entirely. Instead, we architected a system that takes natural language prompts, processes them through a fine-tuned LLM, and maps the output directly to a strict, pre-defined library of optimized React components.',
      execution: 'We built a custom AST (Abstract Syntax Tree) parser connecting the OpenAI API to our component library. To ensure a seamless user experience, we implemented a real-time live preview panel that renders the generated code instantly. We also integrated a one-click deployment pipeline to Vercel, allowing agencies to go from prompt to live URL in under 60 seconds.',
      outcome: 'The platform successfully reduced average website prototyping time by 85%. Within the first month of launch, VibeNote onboarded over 50 beta agencies who have since generated over 1,000 unique, production-ready website layouts. The code quality is so high that senior developers actively prefer starting projects within VibeNote.'
    },
    keyTakeaways: [
      'Natural language interfaces can drastically reduce development friction when mapped to strict component libraries.',
      'Real-time visual feedback is critical for user trust in AI-generated code.',
      'Clean code export is the ultimate differentiator in the crowded website builder market.'
    ],
    whoIsThisFor: 'SaaS founders, AI startups, and B2B software companies looking to build complex, scalable web applications with modern tech stacks.',
    successFactors: [
      'Strict adherence to clean code principles in the AI output.',
      'Seamless integration with modern deployment pipelines (Vercel).',
      'A highly responsive, real-time editing interface.'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'OpenAI API', 'Node.js', 'PostgreSQL']
  },
  'optiofy': {
    slug: 'optiofy',
    clientName: 'Optiofy',
    tagline: 'Modernizing Optical Practice Management',
    liveUrl: 'https://optiofy.com/',
    seo: {
      title: 'Optiofy Case Study | Healthcare CRM Development | Noob{dev}',
      description: 'Learn how Noob{dev} developed Optiofy, a custom CRM and billing application tailored for optical clinics to streamline prescriptions and patient management.',
      keywords: 'Healthcare CRM, optical billing software, custom CRM development, patient management system, HIPAA compliant software'
    },
    story: {
      hook: 'Eye clinics were losing critical patient records and missing out on thousands in recurring revenue because they were managing complex prescriptions in messy Excel sheets and paper files.',
      context: 'Optiofy is a specialized B2B Healthcare CRM built for optometrists, optical clinics, and eyewear retailers. The optical industry has highly specific data needs (Spherical, Cylindrical, Axis measurements) that generic CRMs simply cannot handle effectively.',
      problemDepth: 'The patient journey was completely disconnected. A doctor would write a prescription on paper, hand it to the patient, who would then hand it to the retail desk. This manual handoff led to transcription errors, lost inventory, and a frustrating billing process. Furthermore, clinics had no automated way to remind patients when their annual eye exam was due.',
      strategicThinking: 'We needed to unify the entire clinical and retail workflow into a single, HIPAA-compliant source of truth. The UI had to be incredibly fast for doctors to input complex data, and the backend needed to automatically trigger inventory updates and patient communications without any manual intervention from the staff.',
      execution: 'We engineered a cloud-based CRM using React and Firebase. For the doctors, we designed a specialized, numpad-friendly input interface that allows for rapid prescription entry. We integrated Twilio to automate WhatsApp and SMS recall campaigns based on the patient\'s last visit date. Finally, we built a custom invoicing engine that ties directly into their frame and lens inventory.',
      outcome: 'Optiofy completely eliminated prescription transcription errors. Clinic staff reported saving an average of 15 hours per week on administrative tasks and inventory reconciliation. Most importantly, the automated recall campaigns increased patient return rates by 22%, directly boosting the clinics\' bottom line.'
    },
    keyTakeaways: [
      'Industry-specific UI design (like numpad-optimized inputs) drastically improves software adoption rates among professionals.',
      'Automating the post-visit communication loop is the highest ROI feature for healthcare clinics.',
      'Unified data systems eliminate the friction between clinical care and retail sales.'
    ],
    whoIsThisFor: 'Healthcare providers, specialized retail clinics, and medical professionals needing custom, compliant patient management systems.',
    successFactors: [
      'Deep understanding of the specific optical prescription data structure.',
      'Seamless integration of clinical records with retail billing.',
      'Automated, reliable patient communication workflows.'
    ],
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Twilio API', 'Stripe']
  },
  'lenswala': {
    slug: 'lenswala',
    clientName: 'Lenswala',
    tagline: 'Elevating the Online Eyewear Shopping Experience',
    liveUrl: 'https://lenswala.in/',
    seo: {
      title: 'Lenswala E-Commerce Case Study | Retail Web Development | Noob{dev}',
      description: 'See how Noob{dev} built a high-performance, conversion-optimized e-commerce platform for Lenswala, a premium frames and eye care retailer.',
      keywords: 'E-commerce development, retail website, Shopify headless, premium eyewear website, high conversion web design'
    },
    story: {
      hook: 'A premium eyewear brand with a stunning physical store was suffering from a 70% mobile bounce rate because their legacy WooCommerce site was clunky, slow, and confusing.',
      context: 'Lenswala is a D2C retail e-commerce brand selling high-end frames and prescription lenses. They needed a digital storefront that matched the luxury and precision of their physical retail experience.',
      problemDepth: 'Buying prescription glasses online is inherently complex. Users have to select frames, choose lens types (single vision, progressive), enter complex prescription numbers, and select coatings. Lenswala\'s old site forced users through a confusing, multi-page maze that caused massive cart abandonment. Furthermore, high-resolution product images were tanking the site\'s load speed.',
      strategicThinking: 'We decided to move away from traditional monolithic e-commerce platforms. By adopting a headless architecture, we could separate the heavy backend inventory management from the frontend presentation. This allowed us to build a lightning-fast, highly customized shopping experience that guides the user step-by-step through the prescription process.',
      execution: 'We engineered a headless solution using Next.js connected to the Shopify Storefront API. We built a custom, visual, multi-step prescription lens selector that makes entering complex medical data feel like a premium onboarding experience. We implemented sticky "Add to Cart" buttons on mobile and optimized all imagery using modern WebP formats and lazy loading.',
      outcome: 'The new headless architecture achieved a 95+ Google PageSpeed score on both mobile and desktop. The streamlined, visual prescription process reduced cart abandonment by 30%, and overall mobile conversion rates skyrocketed by 45% within the first two months of launch.'
    },
    keyTakeaways: [
      'Headless e-commerce is essential for brands that require complex, multi-step product customization.',
      'Performance is a feature: sub-second load times directly correlate with higher conversion rates.',
      'Breaking complex forms (like prescriptions) into visual, bite-sized steps drastically reduces user friction.'
    ],
    whoIsThisFor: 'D2C brands, luxury retailers, and e-commerce businesses requiring complex product configurations and lightning-fast performance.',
    successFactors: [
      'Adoption of a modern headless architecture (Next.js + Shopify).',
      'Intuitive, visual UI design for complex data entry.',
      'Relentless focus on mobile performance and Core Web Vitals.'
    ],
    techStack: ['Next.js', 'Shopify Storefront API', 'Framer Motion', 'Tailwind CSS']
  },
  'akansha-rajput': {
    slug: 'akansha-rajput',
    clientName: 'Akansha Rajput',
    tagline: 'Crafting a Digital Identity for a Creative Professional',
    liveUrl: 'https://akansharajput.in/',
    seo: {
      title: 'Akansha Rajput Portfolio Case Study | Personal Branding | Noob{dev}',
      description: 'Explore the bespoke personal portfolio website Noob{dev} created for Akansha Rajput, designed to showcase creative work and attract high-ticket clients.',
      keywords: 'Personal portfolio website, creative professional branding, custom web design, minimalist website, fast portfolio site'
    },
    story: {
      hook: 'A top-tier creative professional was losing high-ticket pitches because her generic template portfolio failed to reflect her unique aesthetic and professional caliber.',
      context: 'Akansha Rajput is a highly sought-after creative professional. Her target audience consists of agency recruiters, high-end collaborators, and potential clients who judge her capabilities based on her digital presentation.',
      problemDepth: 'She was using a standard website builder that was rigid, slow, and looked exactly like thousands of other portfolios. It lacked the subtle micro-interactions and typographic finesse required to stand out in the creative industry. Furthermore, updating the site with new case studies was a frustrating, time-consuming process.',
      strategicThinking: 'The website itself needed to be a piece of art—a silent salesperson that communicates quality before the user even reads a word. However, heavy animations often ruin performance. We needed to balance high-impact visual design with instant load times, while also providing a frictionless way for her to manage content.',
      execution: 'We designed a bespoke, minimalist layout heavily reliant on whitespace and premium typography. We utilized Framer Motion to implement smooth, 60fps page transitions and subtle scroll animations that guide the user\'s eye without overwhelming them. To solve the content management issue, we integrated Sanity.io, a headless CMS, allowing her to publish new case studies via a simple dashboard.',
      outcome: 'The new portfolio acts as a powerful lead generation tool. The site\'s unique design has been featured on multiple web design inspiration galleries, increasing her organic visibility. Most importantly, she reported a 60% increase in inbound inquiries from high-ticket clients, and she now spends 80% less time managing her website content.'
    },
    keyTakeaways: [
      'In the creative industry, your website\'s UX/UI is the first piece of work a client judges.',
      'Subtle, performant micro-interactions elevate a brand\'s perceived value significantly.',
      'A headless CMS empowers non-technical users to maintain complex websites effortlessly.'
    ],
    whoIsThisFor: 'Creative directors, high-end freelancers, boutique agencies, and consultants who need a premium digital presence to attract high-ticket clients.',
    successFactors: [
      'Perfect balance of aesthetic minimalism and high performance.',
      'Implementation of smooth, purposeful animations.',
      'Seamless integration of a user-friendly headless CMS.'
    ],
    techStack: ['React', 'Gatsby', 'Sanity.io', 'Framer Motion']
  },
  'green-river-camp': {
    slug: 'green-river-camp',
    clientName: 'Green River Camp',
    tagline: 'Driving Direct Bookings for a Nature Retreat',
    liveUrl: 'https://greenrivercamp.in/',
    seo: {
      title: 'Green River Camp Case Study | Hospitality Web Design | Noob{dev}',
      description: 'How Noob{dev} transformed Green River Camp\'s digital presence with a stunning website and integrated booking engine to drive direct reservations.',
      keywords: 'Hospitality website development, hotel booking engine, glamping website, SEO for resorts, direct booking optimization'
    },
    story: {
      hook: 'A beautiful, highly-rated nature retreat was bleeding 20% of its revenue to OTA (Online Travel Agency) commissions because users didn\'t trust their outdated website enough to book directly.',
      context: 'Green River Camp is a premium glamping and nature retreat. Their business relies on weekend vacationers, adventure seekers, and nature lovers looking for a seamless escape from the city.',
      problemDepth: 'Their existing website was essentially a digital brochure. It lacked a real-time availability calendar and a secure checkout process. Users would discover the camp on social media, visit the site, get frustrated by the lack of booking options, and ultimately book through Booking.com or Airbnb—costing the camp massive commission fees.',
      strategicThinking: 'We needed to build a direct booking engine that felt as secure, fast, and intuitive as Airbnb. Simultaneously, the website needed to visually sell the "vibe" of the camp to convince users to commit. We also needed a robust local SEO strategy to capture high-intent searches like "weekend getaway near me".',
      execution: 'We built an immersive, visually rich website featuring high-quality video headers and interactive camp maps. We engineered a custom, zero-commission direct booking engine integrated with Stripe for secure payments. To build trust, we prominently displayed verified guest reviews and local trust signals. We also implemented automated post-booking email workflows to enhance the guest experience before they even arrived.',
      outcome: 'The impact was immediate. By providing a trustworthy and seamless direct booking experience, direct reservations increased by 120% in the first season alone. This saved the camp over $15,000 in OTA commission fees. Furthermore, our local SEO optimizations pushed them to the #1 spot on Google for their target regional tourism keywords.'
    },
    keyTakeaways: [
      'A seamless, secure direct booking experience is the most effective way to bypass OTA commissions.',
      'High-quality, immersive media is crucial for selling experiential hospitality.',
      'Local SEO and structured data are massive drivers of high-intent organic traffic.'
    ],
    whoIsThisFor: 'Boutique hotels, resorts, glamping sites, and hospitality businesses looking to increase direct bookings and reduce reliance on OTAs.',
    successFactors: [
      'Development of a frictionless, secure custom booking engine.',
      'Strategic use of immersive video and high-quality imagery.',
      'Dominant local SEO implementation.'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Stripe', 'Custom Booking API']
  },
  'exponential-coin': {
    slug: 'exponential-coin',
    clientName: 'Exponential Coin',
    tagline: 'High-Conversion Landing Page for a Web3 Launch',
    liveUrl: 'https://exponential.social/',
    seo: {
      title: 'Exponential Coin Case Study | Web3 Landing Page | Noob{dev}',
      description: 'Discover how Noob{dev} built a high-performance, secure landing page for the Exponential Coin Solana launch, handling massive traffic spikes.',
      keywords: 'Web3 landing page, crypto website development, Solana token launch, high traffic website, secure crypto site'
    },
    story: {
      hook: 'A highly anticipated Web3 token launch was at risk of catastrophic failure because their standard hosting infrastructure couldn\'t handle the projected traffic spikes of 50,000+ concurrent users.',
      context: 'Exponential Coin is a Web3 project launching on the Solana blockchain. Token Generation Events (TGEs) are notorious for generating massive, sudden surges in web traffic as investors rush to connect their wallets and participate.',
      problemDepth: 'If a landing page crashes during a crypto launch, investor trust evaporates instantly, often killing the project on day one. The client needed a site that was not only visually striking and "crypto-native" but possessed bulletproof reliability. Furthermore, integrating Web3 wallet connections securely under heavy load is a complex engineering challenge.',
      strategicThinking: 'We couldn\'t rely on traditional server architectures. We needed infinite scalability. The strategy was to utilize edge computing—serving static assets globally from the edge—while batching RPC (Remote Procedure Call) requests to the blockchain to prevent rate-limiting and node crashes.',
      execution: 'We deployed the entire application on Cloudflare Pages, utilizing their global edge network to guarantee 100% uptime. The UI was crafted with a neon-brutalist aesthetic, utilizing optimized Three.js WebGL animations to create an authentic Web3 atmosphere without bloating the load time. We integrated the Solana Wallet Adapter with robust fallback states and anti-bot protection mechanisms to ensure smooth transactions.',
      outcome: 'The launch was flawless. The site successfully handled over 50,000 concurrent users during the peak hour with zero downtime. The optimized UX resulted in a highly successful 12% wallet connection conversion rate, and global site load times remained under 1 second despite the extreme traffic.'
    },
    keyTakeaways: [
      'Edge-network deployment is non-negotiable for high-stakes, high-traffic launch events.',
      'Web3 aesthetics (WebGL, neon-brutalism) must be heavily optimized to prevent performance degradation.',
      'Robust error handling for wallet connections is critical for maintaining user trust during a launch.'
    ],
    whoIsThisFor: 'Web3 startups, crypto projects, NFT collections, and any business anticipating massive, sudden surges in web traffic.',
    successFactors: [
      'Bulletproof edge-computing infrastructure.',
      'Secure and reliable Solana wallet integration.',
      'Highly optimized, visually engaging WebGL animations.'
    ],
    techStack: ['React', 'Next.js', 'Solana Web3.js', 'Cloudflare Pages', 'Three.js']
  },
  'shri-ji-jewellers': {
    slug: 'shri-ji-jewellers',
    clientName: 'Shri Ji Jewellers',
    tagline: 'Bringing Heritage Jewelry to the Digital Era',
    liveUrl: 'https://shriji.jewelry/',
    seo: {
      title: 'Shri Ji Jewellers Case Study | Premium Retail Website | Noob{dev}',
      description: 'See how Noob{dev} crafted a luxurious digital showroom for Shri Ji Jewellers, enhancing their brand prestige and driving foot traffic to their physical store.',
      keywords: 'Jewelry website design, luxury retail web development, digital showroom, local SEO for jewelers, premium brand website'
    },
    story: {
      hook: 'A legacy jewelry brand with millions in physical inventory was losing market share to newer competitors because they had absolutely zero digital footprint.',
      context: 'Shri Ji Jewellers is a highly respected, heritage retail brand specializing in premium bridal and fine jewelry. For decades, they relied entirely on foot traffic and word-of-mouth. However, modern consumers—even for high-ticket items—research online before ever stepping foot in a store.',
      problemDepth: 'They needed a digital presence, but selling high-value gold and diamonds online introduces massive logistical, insurance, and liability challenges that they weren\'t ready for. Furthermore, they were deeply concerned about competitors easily scraping their proprietary jewelry designs from a standard e-commerce site.',
      strategicThinking: 'We pivoted the strategy from "e-commerce" to "digital showroom". The goal wasn\'t to process credit cards online; the goal was to sell the *appointment*. We needed to translate the physical luxury of their showroom into a digital interface, protect their imagery, and create a frictionless bridge between online browsing and offline purchasing.',
      execution: 'We designed a sophisticated, elegant digital catalog using high-end typography, subtle gold accents, and deep, rich background colors. To protect their assets, we implemented advanced image protection scripts to disable right-clicking and drag-and-drop scraping. Instead of an "Add to Cart" button, we placed prominent, sticky "Inquire on WhatsApp" buttons on every product. We also integrated a live gold rate ticker to establish local authority and trust.',
      outcome: 'The digital showroom successfully modernized the brand without compromising their heritage. In the first month alone, the site generated over 40 high-intent showroom appointments via WhatsApp. The brand successfully expanded its customer base beyond its immediate local radius and established a dominant digital presence over local competitors.'
    },
    keyTakeaways: [
      'For high-ticket retail, the goal of a website is often lead generation and appointment booking, not direct e-commerce.',
      'Digital design must accurately reflect the physical prestige of a luxury brand.',
      'Frictionless communication channels (like WhatsApp) drastically increase conversion rates for high-value inquiries.'
    ],
    whoIsThisFor: 'Luxury retailers, heritage brands, high-ticket service providers, and businesses looking to drive qualified online traffic to physical locations.',
    successFactors: [
      'Strategic pivot from e-commerce to a lead-generation digital showroom.',
      'Implementation of robust image protection measures.',
      'Seamless integration of WhatsApp for instant customer communication.'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Business API']
  }
};

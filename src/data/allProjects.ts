export type FullProject = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  /** Compact card (3-col grid) */
  categoryLabel: string;
  headlineMetrics: { label: string; value: string }[];
};

export const allProjectsFull: FullProject[] = [
  {
    id: 'mailchimp',
    categoryLabel: 'MARKETING WEB',
    headlineMetrics: [
      { label: 'INP + LCP improvement', value: '35–40%' },
      { label: 'Test coverage', value: 'Playwright E2E' },
    ],
    title: 'Mailchimp.com',
    description:
      'Built and shipped new customer-facing features on the Mailchimp dotcom platform using React, TypeScript, SCSS, and Contentful CMS — enabling flexible, content-managed components and faster page authoring. Identified and resolved INP and LCP bottlenecks on mobile, improving both Web Vitals by 35–40%. Launched A/B experiments across key user journeys, driving measurable gains in engagement and click-through. Modernized components against Mailchimp\'s design system, improved type safety via TypeScript, and maintained Playwright E2E coverage to reduce regressions across frequent releases.',
    highlights: [
      'INP + LCP improved 35–40% on mobile',
      'Contentful CMS integration for content-managed components',
      'A/B experiments across key user journeys',
      'Design system alignment & TypeScript adoption',
      'Playwright E2E coverage across critical flows',
      'PR reviews & cross-functional collaboration',
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'Contentful CMS',
      'Playwright',
      'A/B Testing',
      'Web Vitals',
      'INP Optimization',
      'LCP Optimization',
      'Design Systems',
    ],
  },
  {
    id: 'marketing-copilot-sdk',
    categoryLabel: 'AI Powered Chatbot',
    headlineMetrics: [
      { label: 'Load performance', value: '+30%' },
      { label: 'Uptime', value: '99.9%' },
    ],
    title: 'Marketing CoPilot SDK',
    description:
      'Lightweight, AI-powered Web SDK using React/Next.js with chat-driven graphs, reports, and pricing cards. Bundled with Rollup (UMD) for universal compatibility, uses Shadow DOM and CSS Modules for isolation, follows semantic release, optimized for minimal bundle size, and deployed to AWS S3 + CloudFront (99.9% uptime).',
    highlights: [
      '30% faster load performance',
      '99.9% uptime',
      'Lightweight & framework-agnostic',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Rollup',
      'Shadow DOM',
      'AI Integration',
      'AWS',
      'CloudFront',
      'CSS Modules',
      'Semantic Release',
    ],
  },
  {
    id: 'copilot-customer-dashboard',
    categoryLabel: 'DASHBOARD',
    headlineMetrics: [
      { label: 'Lead qualification', value: '+30%' },
      { label: 'Analytics', value: 'Real-time' },
    ],
    title: 'Copilot Customer Dashboard',
    description:
      'Customer dashboard to customize live SDKs and connect knowledge bases. Tools for data ingestion, goal setup, AI-generated email sequences, campaign editing, lead management, and real-time analytics. Integrated email/LinkedIn/call workflows, HubSpot and Salesforce CRMs, Factor.ai and Lusha for enrichment; RESTful APIs in Java; React Flow builder; features shipped to React Native app; deployed on Azure via CI/CD.',
    highlights: [
      '30% faster lead qualification',
      'Real-time analytics',
      'End-to-end engagement',
    ],
    technologies: [
      'React',
      'TypeScript',
      'React Flow',
      'Java',
      'REST APIs',
      'Data Visualization',
      'Azure',
      'CI/CD',
      'React Native',
      'HubSpot',
      'Salesforce',
      'Factor.ai',
      'Lusha',
    ],
  },
  {
    id: 'b2c-saas-chatbot',
    categoryLabel: 'B2C MULTI CHAT',
    headlineMetrics: [
      { label: 'Engagement', value: 'Real-time' },
      { label: 'Architecture', value: 'Scalable' },
    ],
    title: 'B2C SaaS Chatbot',
    description:
      'Real-time, AI-powered chatbot for B2C discovery and recommendations. WebSocket streaming for instant responses, interactive dashboards, AI-generated graphs, reports, and pricing cards. Frontend in React; backend in Spring Boot; integrates NLP, real-time analytics, and cloud deployment.',
    highlights: [
      'Real-time engagement',
      'AI-powered insights',
      'Interactive dashboards',
      'Scalable architecture',
    ],
    technologies: [
      'React',
      'Spring Boot',
      'WebSocket',
      'AI/NLP',
      'Data Visualization',
      'Cloud Deployment',
      'Real-time Analytics',
    ],
  },
  {
    id: 'wyzard-saas-tool',
    categoryLabel: 'SAAS',
    headlineMetrics: [
      { label: 'Manual effort', value: '-30%' },
      { label: 'Workflows', value: 'Secure' },
    ],
    title: 'Wyzard.ai SaaS Tool',
    description:
      'SaaS management and procurement platform built from the ground up. React + Next.js frontend architecture, interactive visualizations with Tailwind CSS, secure workflows for licenses, subscriptions, contracts, and payments, plus a centralized document vault.',
    highlights: [
      '30% manual effort reduction',
      'Secure workflows',
      'Responsive UI',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SaaS Architecture',
      'Payments',
      'Generative AI',
    ],
  },
  {
    id: 'generative-ai-solutions',
    categoryLabel: 'GEN AI',
    headlineMetrics: [
      { label: 'AI/ML', value: 'Integrated' },
      { label: 'Components', value: 'Reusable' },
    ],
    title: 'Generative AI Solutions',
    description:
      'Implemented AI/ML solutions including enterprise chatbots, synthetic data generation, and compliance tools. Full-stack development with React frontend and Python backend, along with reusable component library creation for scalable deployment.',
    highlights: [
      'AI/ML integration',
      'Reusable components',
      'Enterprise solutions',
    ],
    technologies: ['React', 'Python', 'AI/ML', 'Full-Stack', 'Component Library'],
  },
  {
    id: 'peoples-first-app',
    categoryLabel: 'ENTERPRISE',
    headlineMetrics: [
      { label: 'Users served', value: '200K+' },
      { label: 'Performance', value: 'High' },
    ],
    title: "People's First App (Reliance JIO)",
    description:
      "Developed an enterprise HR and payroll platform serving 200,000+ users. Built with Angular and Node.js, implemented shift planning solutions, attendance, payroll, and HR management, along with a universal UI component library and process automation.",
    highlights: ['200K+ users', 'High performance', 'Workflow optimization'],
    technologies: ['Angular', 'Node.js', 'Enterprise Scale', 'HR Solutions', 'Automation'],
  },
  {
    id: 'vendor-hiring-solutions',
    categoryLabel: 'HIRING',
    headlineMetrics: [
      { label: 'Recruiter load', value: '-75%' },
      { label: 'Automation', value: 'E2E' },
    ],
    title: 'Vendor Hiring Solutions',
    description:
      'Created an end-to-end automation platform for hiring, including reusable UI components and workflow optimizations. Streamlined HR processes, reducing recruiter workload by 75%, using React and Node.js for enterprise applications.',
    highlights: [
      'Process automation',
      'Reusable components',
      'Workflow optimization',
    ],
    technologies: ['React', 'Node.js', 'Component Library', 'Automation', 'UI/UX'],
  },
];

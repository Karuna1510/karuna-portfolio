import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const easeOut = [0.22, 1, 0.36, 1] as const;

const highlightListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.18,
    },
  },
} as const;

const highlightItemVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
} as const;

const techRowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
} as const;

const techChipVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
} as const;

const heroBullets = [
  'High-traffic customer-facing products , shipping iteratively with measurable experimentation and a strong focus on quality.',
  'Shipped platforms and client SDKs on cloud infrastructure with strong uptime and performance discipline.',
  'Enterprise-scale impact , including applications serving 200K+ users and automation that reduced manual effort.',
];

const experiences = [
  {
    company: 'Intuit',
    position: 'Senior Software Developer',
    period: 'Dec 2025 – Present',
    location: 'Toronto, ON, Canada',
    summary:
      'Building and enhancing mailchimp.com — high-traffic customer experiences with React, JavaScript, and SCSS, growing TypeScript adoption, plus experimentation, INP work, and Playwright E2E coverage.',
    quote:
      'Shipping experiments, performance improvements, and reliable releases on surfaces where data-driven optimization and quality matter every day.',
    highlights: [
      'mailchimp.com development — Built and enhanced high-traffic, customer-facing experiences on the mailchimp.com website using React, JavaScript, and SCSS, with increasing adoption of TypeScript to improve type safety and maintainability.',
      'Experimentation and A/B testing — Developed and shipped experiments to validate product and UX hypotheses, enabling data-driven optimization of user journeys and conversion flows.',
      'Frontend architecture and optimization — Contributed to modernizing frontend components and improving site performance by optimizing rendering efficiency, code structure, and alignment with Mailchimp\'s design system and engineering standards.',
      'Mobile performance and INP optimization — Improved mobile web responsiveness by identifying and resolving Interaction to Next Paint (INP) bottlenecks, enhancing overall user experience on mobile devices.',
      'Automated testing — Implemented and maintained end-to-end test coverage using Playwright, ensuring reliability of critical user journeys and reducing regressions across frequent releases.',
      'Engineering collaboration — Partnered closely with product managers, designers, and engineers to deliver production-ready features, participate in code reviews, and uphold high-quality engineering practices.',
    ],
    tech: [
      'React',
      'JavaScript',
      'TypeScript',
      'SCSS',
      'Playwright',
      'A/B Testing',
      'INP Optimization',
      'Design Systems',
      'E2E Testing',
    ],
  },
  {
    company: 'Wyzard.ai - RoundCircle Technologies',
    position: 'Senior Software Developer',
    period: 'May 2024 – Nov 2025',
    location: 'Remote from Canada',
    summary:
      'Built AI-powered SDKs, customer dashboards, SaaS products, and real-time chat — from Rollup bundles and Shadow DOM to Azure/AWS deployments and React Native delivery.',
    quote:
      'End-to-end ownership across SDKs, dashboards, APIs, mobile, and DevOps — shipping measurable gains in load time, uptime, and team efficiency.',
    highlights: [
      'Marketing CoPilot Web SDK — Built a lightweight SDK with AI integration using React and Next.js. Bundled with Rollup (UMD) for universal compatibility, improving load performance by 30%. Used Shadow DOM and CSS Modules for isolation, integrated chat that generates graphs, reports, and pricing cards, followed semantic release practices, and optimized bundle size. Deployed via AWS S3 and CloudFront achieving 99.9% uptime.',
      'Customer Dashboard — Enabled users to customize their live SDK and connect a knowledge base. Added tools for data ingestion, goal definition, AI-powered email sequence generation, campaign editing, lead management, and real-time analytics. Integrated email/LinkedIn/call workflows; connected HubSpot and Salesforce; integrated Factor.ai and Lusha for enrichment, resulting in 30% faster lead qualification and syncing.',
      'APIs & Flow Builder — Developed RESTful APIs in Java for setup, onboarding, and analytics exchange. Engineered a dynamic flow builder with React Flow to visually manage complex workflows.',
      'Mobile App — Shipped production-ready features in a React Native app with polished UI from Figma designs and seamless API integration.',
      'Deployment & DevOps — Deployed and scaled dashboard services on Azure using CI/CD pipelines for rapid, reliable releases.',
      'Wyzard.ai — Spearheaded frontend architecture using React and Next.js for a SaaS management and procurement tool. Built interactive data visualizations with Tailwind CSS and implemented secure workflows for licenses, subscriptions, contracts, and payments with a document vault, reducing manual effort by 30%.',
      'B2C SaaS Chatbot — Implemented WebSocket-based real-time communication across frontend (React) and backend (Spring Boot) to power discovery, instant recommendations, and automation.',
    ],
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Rollup',
      'Shadow DOM',
      'CSS Modules',
      'React Flow',
      'React Native',
      'Java',
      'Spring Boot',
      'Azure',
      'AWS',
      'CloudFront',
      'Tailwind CSS',
      'WebSocket',
      'Jest',
      'React Testing Library',
      'HubSpot',
      'Salesforce',
      'Factor.ai',
      'Lusha',
    ],
  },
  {
    company: 'EXL Service',
    position: 'Senior Software Developer',
    period: 'July 2023 – May 2024',
    location: 'Gurugram, Haryana, India',
    summary:
      'Led generative AI initiatives and full-stack delivery — React frontends, Python backends, reusable UI, and measurable performance gains.',
    quote:
      'Bridging generative AI, design systems, and performance so enterprise teams could ship faster with fewer defects.',
    highlights: [
      'Generative AI Solutions — Led implementation of generative AI across synthetic data generation, enterprise chatbots, and compliance/governance applications.',
      'Full-Stack Development — Built robust, scalable solutions with React frontends and Python backends.',
      'UI/UX & Frontend Architecture — Converted Figma designs to production UIs; delivered a new React-based frontend architecture with reusable, user-friendly components.',
      'Reusable Component Library — Created a component library that reduced development time for new projects by 40%.',
      'Performance & Scalability — Improved response times by 30% and optimized system efficiency and reliability.',
      'React Native Prototypes — Built scalable React Native prototypes extending web platforms to mobile.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Python',
      'React Native',
      'Component Libraries',
      'Performance Optimization',
      'Figma',
    ],
  },
  {
    company: 'JIO Platforms Limited',
    position: 'Software Developer',
    period: 'Aug 2019 – July 2023',
    location: 'Mumbai, Maharashtra, India',
    summary:
      "Led delivery of Reliance's enterprise HR and workforce products — Angular, Node.js, and large-scale UI standards serving 200,000+ users.",
    quote:
      'Owning HR, hiring, and performance-critical flows where reliability, speed, and consistent UX mattered at national scale.',
    highlights: [
      'People’s First App — Led cross-functional teams to deliver Reliance\'s enterprise HR and payroll app serving 200,000+ users (attendance, payroll, meeting rooms, daily activities) using Angular and Node.js.',
      'HR & Workforce Management — Built COVID-19 shift planning for Reliance Retail (reduced planning time by 50% and errors by 30%) and an end-to-end HR platform for job posting, interviews, and talent acquisition.',
      'UI Component Standardization & Automation — Pioneered a universal UI components repository and automation, reducing recruiter workload by 75%.',
      'Vendor Hiring Application — Built an end-to-end vendor hiring solution with React and Node.js, collaborating closely with design for coherence.',
      'Frontend Performance Tuning — Implemented lazy loading, code splitting, and caching, improving load times by 35% across devices. Architected reusable Angular component libraries to standardize UI across applications.',
    ],
    tech: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Enterprise Architecture',
      'UI Libraries',
      'Performance Optimization',
    ],
  },
];

export default function Experience() {
  return (
    <>
      {/* Hero — dark grid + headline + intro (taller band for breathing room) */}
      <section className="relative min-h-[min(78vh,920px)] overflow-hidden bg-[#0c0c0e] sm:min-h-[min(80vh,960px)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(195 100% 50% / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.35) 1px, transparent 1px)',
            backgroundSize: 'var(--cyber-grid-cell) var(--cyber-grid-cell)',
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-[min(480px,58vw)] w-[min(560px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-32 md:pb-40 md:pt-40 lg:pb-44 lg:pt-44">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-white/45">About</p>
              <h1 className="font-bungee text-4xl tracking-wide text-white md:text-6xl lg:text-[4.25rem] lg:leading-[1.15]">
                7+ years developing at scale.</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-3">
               
                <p className="text-base leading-relaxed text-white/65 md:text-lg">
                  Senior Software Developer focused on enterprise and high-traffic web products , from design systems
                  and performance to AI-assisted workflows and cloud delivery.
                </p>
              </div>
              <ul className="space-y-4">
                {heroBullets.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-white/70 md:text-[15px]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2.5} />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="cyber"
                size="lg"
                className="rounded-lg gap-2 text-sm font-semibold uppercase tracking-wide px-6 h-11 shadow-lg shadow-primary/25"
                asChild
              >
                <Link to="/contact">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline — light band */}
      <section id="experience" className="bg-[#eeeee9] text-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 flex items-center gap-4 md:mb-20"
          >
            <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">Experience</p>
            <div className="h-px flex-1 bg-zinc-300/90" />
          </motion.div>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-14% 0px' }}
                transition={{ duration: 0.55, ease: easeOut, delay: index * 0.04 }}
                className="border-b border-zinc-300/90 py-14 first:pt-0 last:border-b-0 md:py-16"
              >
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(140px,200px)_minmax(0,1fr)] lg:gap-16">
                  <div>
                    <p className="text-sm font-medium text-zinc-500 md:text-[15px]">{exp.period}</p>
                    <p className="mt-2 text-xs text-zinc-400 lg:hidden">{exp.location}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl lg:text-[2rem]">
                      {exp.position}
                    </h2>
                    <p className="mt-1 text-lg font-semibold text-primary md:text-xl">{exp.company}</p>
                    <p className="mt-2 hidden text-sm text-zinc-500 lg:block">{exp.location}</p>

                    <p className="mt-5 text-sm leading-relaxed text-zinc-600 md:text-base">{exp.summary}</p>

                    <blockquote className="mt-6 border-l-4 border-primary py-1 pl-4 text-sm italic leading-relaxed text-zinc-700 md:text-base">
                      {exp.quote}
                    </blockquote>

                    <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Key Projects & Achievements
                    </p>
                    <motion.ul
                      className="mt-4 space-y-4"
                      variants={highlightListVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-8% 0px', amount: 0.12 }}
                    >
                      {exp.highlights.map((h, hi) => (
                        <motion.li
                          key={`${exp.company}-${hi}`}
                          variants={highlightItemVariants}
                          className="flex gap-3 text-sm leading-relaxed text-zinc-700 md:text-[15px]"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 bg-primary" aria-hidden />
                          {h}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Technologies used
                    </p>
                    <motion.div
                      className="mt-4 flex flex-wrap gap-2"
                      variants={techRowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-6% 0px', amount: 0.2 }}
                    >
                      {exp.tech.map((t) => (
                        <motion.span
                          key={`${exp.company}-${t}`}
                          variants={techChipVariants}
                          className="rounded border border-zinc-300/90 bg-zinc-200/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-700"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

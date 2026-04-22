import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Zap, Cloud, Users } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Mailchimp.com',
    category: 'Marketing Website • Intuit',
    role: 'Senior Software Developer',
    description:
      'Built and shipped customer-facing features on the Mailchimp dotcom platform using React, TypeScript, SCSS, and Contentful CMS. Resolved INP and LCP bottlenecks on mobile, improving both Web Vitals by 35–40%. Launched A/B experiments across key user journeys, modernized components against the design system, and maintained Playwright E2E coverage to reduce regressions across frequent releases.',
    metrics: [
      { label: 'INP + LCP improvement', value: '35–40%' },
      { label: 'Test coverage', value: 'Playwright E2E' },
    ],
    tech: ['React', 'TypeScript', 'SCSS', 'Contentful CMS', 'Playwright', 'A/B Testing', 'Web Vitals'],
    icon: Mail,
  },
  {
    number: '02',
    title: 'Marketing CoPilot SDK',
    category: 'AI powered SDK • Wyzard.ai',
    role: 'Lead Developer, Frontend Architecture',
    description:
      'Lightweight AI-powered Web SDK with chat-driven graphs, reports, and pricing cards. Shadow DOM isolation, semantic release, AWS deployment.',
    metrics: [
      { label: 'Load Performance', value: '+30%' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tech: ['React', 'Next.js', 'Rollup', 'AWS', 'Shadow DOM'],
    icon: Zap,
  },
  {
    number: '03',
    title: 'SaaS Platform',
    category: 'SaaS • Wyzard.ai',
    role: 'Lead Developer, Frontend Architecture',
    description:
      'SaaS management and procurement platform with secure workflows for licenses, subscriptions, contracts, and payments with document vault.',
    metrics: [
      { label: 'Manual Effort', value: '-30%' },
      { label: 'Workflows', value: 'Automated' },
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    icon: Cloud,
  },
  {
    number: '04',
    title: "People's First App",
    category: 'Enterprise • JIO Platforms Limited',
    role: 'Developer, Team Lead',
    description:
      "Reliance's enterprise HR and payroll platform serving 200K+ users — attendance, payroll, shift planning, and hiring automation.",
    metrics: [
      { label: 'Users Served', value: '200K+' },
      { label: 'Load Time', value: '-35%' },
    ],
    tech: ['Angular', 'Node.js', 'TypeScript', 'Enterprise'],
    icon: Users,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#12121a] pt-10 pb-20 md:pt-12 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(195 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.4) 1px, transparent 1px)',
          backgroundSize: 'var(--cyber-grid-cell) var(--cyber-grid-cell)',
        }}
      />

      <div className="relative z-10 container-custom px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
            Featured Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Selected Work</h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 md:text-lg">
            Projects spanning enterprise apps, AI-powered SDKs, and SaaS platforms.
          </p>
          <Link
            to="/projects"
            className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-white/45 transition-colors hover:text-primary"
          >
            All Projects
            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="cyber-card p-6 md:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="min-w-0 flex-1">
                    <div className="mb-4 flex items-start gap-4">
                      <span className="shrink-0 font-mono text-3xl font-black leading-none text-foreground/10">
                        {project.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">{project.category}</p>
                        <p className="mt-1 text-xs text-secondary">{project.role}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4 lg:min-w-[160px] lg:flex-col lg:gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex-1 rounded-lg border border-border bg-muted/50 p-3 lg:flex-none"
                      >
                        <p className="text-lg font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

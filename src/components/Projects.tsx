import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Database, Cloud, Users } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Marketing CoPilot SDK',
    category: 'AI SDK • 2024',
    role: 'Lead Developer, Frontend Architecture',
    description: 'Lightweight AI-powered Web SDK with chat-driven graphs, reports, and pricing cards. Shadow DOM isolation, semantic release, AWS deployment.',
    metrics: [
      { label: 'Load Performance', value: '+30%' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tech: ['React', 'Next.js', 'Rollup', 'AWS', 'Shadow DOM'],
    icon: Zap,
  },
  {
    number: '02',
    title: 'Customer Dashboard & CRM',
    category: 'SaaS Platform • 2024',
    role: 'Lead Developer, Full Stack',
    description: 'Dashboard for SDK customization, knowledge base, AI email sequences, lead management. Integrated HubSpot, Salesforce, Factor.ai.',
    metrics: [
      { label: 'Lead Qualification', value: '+30%' },
      { label: 'CRM Integrations', value: '4+' },
    ],
    tech: ['React', 'TypeScript', 'React Flow', 'Java', 'Azure'],
    icon: Database,
  },
  {
    number: '03',
    title: 'Wyzard.ai SaaS Platform',
    category: 'SaaS • 2024',
    role: 'Lead Developer, Frontend Architecture',
    description: 'SaaS management and procurement platform with secure workflows for licenses, subscriptions, contracts, and payments with document vault.',
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
    category: 'Enterprise • 2019-2023',
    role: 'Developer, Team Lead',
    description: "Reliance's enterprise HR and payroll platform serving 200K+ users — attendance, payroll, shift planning, and hiring automation.",
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
    <section id="projects" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mt-4 md:mt-0">
            Projects spanning enterprise apps, AI-powered SDKs, and SaaS platforms.
          </p>
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
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left — number and title */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl font-black text-foreground/10 font-mono leading-none">
                        {project.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-1">
                          {project.category}
                        </p>
                        <p className="text-xs text-secondary mt-1">
                          {project.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded border border-border font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — metrics */}
                  <div className="flex lg:flex-col gap-4 lg:gap-3 lg:min-w-[160px]">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="bg-muted/50 rounded-lg p-3 border border-border flex-1 lg:flex-none">
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

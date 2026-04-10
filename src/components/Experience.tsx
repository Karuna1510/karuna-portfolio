import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    company: 'Intuit',
    position: 'Senior Software Developer',
    period: 'Dec 2025 – Present',
    location: 'Toronto, ON',
    summary: 'Building high-traffic customer-facing experiences on Mailchimp dotcom with React, TypeScript, A/B testing, INP optimization, and Playwright E2E testing.',
    highlights: [
      'Mailchimp dotcom — high-traffic customer-facing React experiences',
      'A/B testing and experimentation for data-driven optimization',
      'Mobile INP optimization for better responsiveness',
      'Playwright E2E testing for critical user journeys',
    ],
    tech: ['React', 'TypeScript', 'SCSS', 'Playwright', 'A/B Testing'],
  },
  {
    company: 'RoundCircle Technologies',
    position: 'Senior Software Developer',
    period: 'May 2024 – Nov 2025',
    location: 'Remote, Canada',
    summary: 'Built AI-powered SDKs, customer dashboards, and SaaS platforms. Deployed to AWS/Azure with 99.9% uptime.',
    highlights: [
      'Marketing CoPilot SDK — 30% faster load, 99.9% uptime',
      'Customer Dashboard with HubSpot/Salesforce integration',
      'Dynamic flow builder with React Flow',
      'Wyzard.ai SaaS platform — 30% manual effort reduction',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'AWS', 'Azure', 'React Flow'],
  },
  {
    company: 'EXL Service',
    position: 'Senior Software Developer',
    period: 'July 2023 – May 2024',
    location: 'Gurugram, India',
    summary: 'Led generative AI implementation across enterprise applications. Created reusable component library reducing dev time by 40%.',
    highlights: [
      'Generative AI — chatbots, synthetic data, compliance tools',
      'Reusable component library — 40% faster development',
      'Performance optimization — 30% faster response times',
      'React Native prototypes for mobile extension',
    ],
    tech: ['React', 'TypeScript', 'Python', 'React Native', 'AI/ML'],
  },
  {
    company: 'JIO Platforms',
    position: 'Software Developer',
    period: 'Aug 2019 – July 2023',
    location: 'Mumbai, India',
    summary: "Led development of Reliance's enterprise HR app serving 200K+ users. Built shift planning, hiring automation, and UI component libraries.",
    highlights: [
      "People's First App — 200K+ users, attendance & payroll",
      'COVID-19 shift planning — 50% faster, 30% fewer errors',
      'UI component standardization — 75% less recruiter workload',
      'Performance tuning — 35% faster load times',
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'Enterprise Architecture'],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono mb-4 block">
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="cyber-card p-6 cursor-pointer group"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-primary">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{exp.summary}</p>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border space-y-3">
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded border border-primary/20 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Node.js'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Angular', 'Redux', 'React Native', 'React Flow'],
  },
  {
    title: 'Styling',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'SCSS', 'Styled Components', 'Shadow DOM'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'CloudFront'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Cypress', 'Playwright', 'React Testing Library'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'JIRA', 'Confluence', 'Figma', 'Rollup'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="cyber-card p-6"
            >
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  GitBranch, 
  Laptop,
  Zap,
  Users,
  TestTube
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Node.js'],
    color: 'primary'
  },
  {
    title: 'Frameworks',
    icon: Zap,
    skills: ['React', 'Next.js', 'Angular', 'Redux', 'React Flow'],
    color: 'secondary'
  },
  {
    title: 'Styling',
    icon: Palette,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'SCSS', 'Styled Components'],
    color: 'accent'
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'CI/CD', 'JIRA', 'Confluence'],
    color: 'primary'
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'],
    color: 'secondary'
  },
  {
    title: 'Testing Framework',
    icon: TestTube,
    skills: ['Jest', 'Cypress', 'Playwright', 'React Testing Library'],
    color: 'accent'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-cyber-darker to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tools and technologies used to build scalable, modern applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card p-6 hover:cyber-glow-secondary group"
            >
              <div className="flex items-center mb-6">
                <div className={`
                  inline-flex items-center justify-center w-12 h-12 rounded-lg mr-4
                  ${category.color === 'primary' ? 'bg-gradient-primary' : 
                    category.color === 'secondary' ? 'bg-gradient-secondary' : 
                    'bg-gradient-to-r from-accent to-primary'}
                `}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`
                  text-xl font-bold
                  ${category.color === 'primary' ? 'text-primary' : 
                    category.color === 'secondary' ? 'text-secondary' : 
                    'text-accent'}
                `}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="font-medium text-foreground">{skill}</span>
                    <motion.div 
                      className={`
                        w-2 h-2 rounded-full
                        ${category.color === 'primary' ? 'bg-primary' : 
                          category.color === 'secondary' ? 'bg-secondary' : 
                          'bg-accent'}
                      `}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating animation elements */}
        <div className="relative mt-16 hidden lg:block">
          <motion.div
            className="absolute top-0 left-1/4 w-16 h-16 border-2 border-primary rounded-full opacity-20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute -top-8 right-1/4 w-12 h-12 border-2 border-secondary rounded-lg opacity-20"
            animate={{ 
              rotate: -360,
              y: [0, -10, 0]
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute top-8 right-1/3 w-8 h-8 bg-accent rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity 
            }}
          />
        </div>
      </div>
    </section>
  );
}
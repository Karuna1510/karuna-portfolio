import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'RoundCircle Technologies',
    position: 'Senior Software Developer',
    period: 'May 2024 – Present',
    location: 'Remote from Canada',
    projects: [
      'Marketing CoPilot Web SDK — Built a lightweight SDK with AI integration using React and Next.js. Bundled with Rollup (UMD) for universal compatibility, improving load performance by 30%. Used Shadow DOM and CSS Modules for isolation, integrated chat that generates graphs, reports, and pricing cards, followed semantic release practices, and optimized bundle size. Deployed via AWS S3 and CloudFront achieving 99.9% uptime.',
      'Customer Dashboard — Enabled users to customize their live SDK and connect a knowledge base. Added tools for data ingestion, goal definition, AI-powered email sequence generation, campaign editing, lead management, and real-time analytics. Integrated email/LinkedIn/call workflows; connected HubSpot and Salesforce; integrated Factor.ai and Lusha for enrichment, resulting in 30% faster lead qualification and syncing.',
      'APIs & Flow Builder — Developed RESTful APIs in Java for setup, onboarding, and analytics exchange. Engineered a dynamic flow builder with React Flow to visually manage complex workflows.',
      'Mobile App — Shipped production-ready features in a React Native app with polished UI from Figma designs and seamless API integration.',
      'Deployment & DevOps — Deployed and scaled dashboard services on Azure using CI/CD pipelines for rapid, reliable releases.',
      'Wyzard.ai — Spearheaded frontend architecture using React and Next.js for a SaaS management and procurement tool. Built interactive data visualizations with Tailwind CSS and implemented secure workflows for licenses, subscriptions, contracts, and payments with a document vault, reducing manual effort by 30%.',
      'B2C SaaS Chatbot — Implemented WebSocket-based real-time communication across frontend (React) and backend (Spring Boot) to power discovery, instant recommendations, and automation.'
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Rollup', 'Shadow DOM', 'CSS Modules', 'React Flow', 'React Native', 'Java', 'Spring Boot', 'Azure', 'AWS', 'CloudFront', 'Tailwind CSS', 'WebSocket', 'Jest', 'React Testing Library', 'HubSpot', 'Salesforce', 'Factor.ai', 'Lusha'
    ]
  },
  {
    company: 'EXL Service',
    position: 'Senior Software Developer',
    period: 'July 2023 – May 2024',
    location: 'Gurugram, Haryana, India',
    projects: [
      'Generative AI Solutions — Led implementation of generative AI across synthetic data generation, enterprise chatbots, and compliance/governance applications.',
      'Full-Stack Development — Built robust, scalable solutions with React frontends and Python backends.',
      'UI/UX & Frontend Architecture — Converted Figma designs to production UIs; delivered a new React-based frontend architecture with reusable, user-friendly components.',
      'Reusable Component Library — Created a component library that reduced development time for new projects by 40%.',
      'Performance & Scalability — Improved response times by 30% and optimized system efficiency and reliability.',
      'React Native Prototypes — Built scalable React Native prototypes extending web platforms to mobile.'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'React Native', 'Component Libraries', 'Performance Optimization', 'Figma']
  },
  {
    company: 'JIO Platforms Limited',
    position: 'Software Developer',
    period: 'Aug 2019 – July 2023',
    location: 'Mumbai, Maharashtra, India',
    projects: [
      'People’s First App — Led cross-functional teams to deliver Reliance’s enterprise HR and payroll app serving 200,000+ users (attendance, payroll, meeting rooms, daily activities) using Angular and Node.js.',
      'HR & Workforce Management — Built COVID-19 shift planning for Reliance Retail (reduced planning time by 50% and errors by 30%) and an end-to-end HR platform for job posting, interviews, and talent acquisition.',
      'UI Component Standardization & Automation — Pioneered a universal UI components repository and automation, reducing recruiter workload by 75%.',
      'Vendor Hiring Application — Built an end-to-end vendor hiring solution with React and Node.js, collaborating closely with design for coherence.',
      'Frontend Performance Tuning — Implemented lazy loading, code splitting, and caching, improving load times by 35% across devices. Architected reusable Angular component libraries to standardize UI across applications.'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Enterprise Architecture', 'UI Libraries', 'Performance Optimization']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-cyber-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through challenging projects and innovative solutions across different domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background cyber-glow"></div>
                
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="cyber-card p-6 hover:cyber-glow-secondary">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.position}</h3>
                        <div className="flex items-center text-secondary font-medium mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-accent">Key Projects & Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.projects.map((project, projIndex) => (
                          <li key={projIndex} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        <h5 className="text-sm font-semibold text-primary mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs bg-muted rounded-full border border-primary/20 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

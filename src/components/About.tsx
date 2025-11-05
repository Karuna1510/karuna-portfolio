import { motion } from 'framer-motion';
import { Code, Zap, Users, Award } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Years of Experience', value: '7+' },
  { icon: Zap, label: 'Projects Delivered', value: '50+' },
  { icon: Users, label: 'Users Impacted', value: '200K+' },
  { icon: Award, label: 'Technologies Mastered', value: '15+' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-cyber-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
             Full-Stack   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Developer</span> and a little bit of <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">everything</span>
            </h3>
            
            <p className="text-md text-muted-foreground leading-relaxed">
            I am Karuna Guglani , a proactive Full Stack Developer , dedicated to transforming ideas into powerful digital solutions. My work blends creativity and technology to craft seamless, intuitive user experiences that are as visually engaging as they are high-performing.
            </p>
            
            <p className="text-md text-muted-foreground leading-relaxed">
            I specialize in building scalable applications and elegant architectures, balancing user needs with business goals. By prioritizing performance, accessibility, and responsiveness, I create solutions that delight users while driving measurable impact.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-secondary mb-4">Key Specializations:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Frontend Architecture & UI/UX Design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Scalable Web Applications Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Backend Development & API Design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Cloud Platforms & Deployment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Performance Optimization & Code Quality
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Team Leadership & Mentoring
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-card p-6 text-center hover:cyber-glow-secondary"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
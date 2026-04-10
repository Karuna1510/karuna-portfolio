import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient */}
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
            Peek behind the avatar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* ID Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 relative overflow-hidden">
              {/* Card header stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              
              <div className="flex items-start gap-6 mb-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src="/karuna-portfolio/images/avatar-about.png"
                    alt="Karuna Guglani"
                    className="w-24 h-24 rounded-xl object-cover border-2 border-primary/20"
                  />
                </div>
                
                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">Karuna Guglani</h3>
                  <p className="text-sm text-muted-foreground font-mono">karunaguglani15@gmail.com</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Full Stack', 'React', 'AI/ML', 'Cloud'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded border border-primary/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Currently at</p>
                  <p className="text-sm font-semibold text-foreground">Intuit (Mailchimp)</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">ID No</p>
                  <a href="https://linkedin.com/in/karuna-guglani-7a8458152" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                    KG-2018-001
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Experience</p>
                  <p className="text-sm font-semibold text-foreground">7+ Years</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Department</p>
                  <p className="text-sm font-semibold text-foreground">Engineering</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Toronto, Ontario, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm Karuna Guglani, a proactive Full Stack Developer dedicated to transforming ideas into powerful digital solutions. My work blends creativity and technology to craft seamless, intuitive user experiences that are as visually engaging as they are high-performing.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I specialize in building scalable applications and elegant architectures, balancing user needs with business goals. By prioritizing performance, accessibility, and responsiveness, I create solutions that delight users while driving measurable impact.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Specializations:</strong> Frontend Architecture, Full-Stack Development, AI-Powered Applications, Cloud Platforms, Performance Optimization, and Team Leadership. Currently at Intuit working on Mailchimp.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="cyber" size="sm" asChild>
                <a href="#projects">Check Projects</a>
              </Button>
              <Button variant="cyber-outline" size="sm" asChild>
                <a href="#experience">My Experience</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

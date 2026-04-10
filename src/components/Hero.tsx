import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const nameLetters = [
  { letter: 'K', tool: 'Kubernetes' },
  { letter: 'A', tool: 'AWS' },
  { letter: 'R', tool: 'React' },
  { letter: 'U', tool: 'UI/UX' },
  { letter: 'N', tool: 'Node.js' },
  { letter: 'A', tool: 'Angular' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground font-mono">
              Full Stack Development
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground font-mono">
              AI & Automation
            </span>
          </motion.div>

          {/* Big Name Typography with Avatar */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Name behind avatar */}
            <div className="flex items-center justify-center gap-0 md:gap-1">
              {nameLetters.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="relative group"
                >
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-foreground/10 select-none leading-none tracking-tighter">
                    {item.letter}
                  </span>
                  {/* Tool tooltip */}
                  <motion.span
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  >
                    {item.tool}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Avatar overlaying the name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute z-10"
            >
              <div className="relative">
                <img
                  src="/karuna-portfolio/images/avatar-hero.png"
                  alt="Karuna Guglani"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover object-top rounded-2xl shadow-2xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                  }}
                />
                {/* Glow effect behind avatar */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-b from-primary via-secondary to-transparent rounded-2xl scale-110" />
              </div>
            </motion.div>
          </div>

          {/* Tagline and description */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mt-16 lg:mt-20">
            {/* Left side - tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                I build things that <span className="text-primary">scale.</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                Turning complex ideas into smooth, high-performance 
                applications that are as functional as they are beautiful.
              </p>
            </motion.div>

            {/* Right side - impact stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center lg:text-right"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Engineering Impact
              </h2>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-bold">200K+</span> users served
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-bold">7+</span> years of experience
              </p>
            </motion.div>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button variant="cyber" size="lg" asChild>
              <a href="#projects">
                Check Projects
              </a>
            </Button>
            <Button variant="cyber-outline" size="lg" asChild>
              <a href="#experience">
                See My Journey
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}

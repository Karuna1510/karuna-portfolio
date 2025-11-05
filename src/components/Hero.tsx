import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';
import ProfilePolaroid from './ProfilePolaroid';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <Hero3D />
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Polaroid and Text Content Side by Side */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Profile Polaroid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <ProfilePolaroid />
              </motion.div>

              {/* Text Content */}
              <div className="space-y-6 text-center lg:text-left">
                <motion.h1 
                  className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
Software Developer and Creative Coder
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
I design and build digital experiences that feel effortless, scale with ambition, and leave a lasting impression. By blending code and creativity, I turn complex ideas into smooth, interactive solutions that are as functional as they are beautiful.Passionate about LLM-Powered Applications, AI-Driven automation,and futuristic web experiences.
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                variant="cyber"
                size="lg" 
                className="text-lg px-8 py-3"
                asChild
              >
                <a 
                  href="/KarunaDeveloper.pdf" 
                  download="Karuna_Guglani_Resume.pdf"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="cyber-outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/karuna-guglani-7a8458152" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="cyber-outline" 
                  size="lg"
                  asChild
                >
                  <a href="#projects">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Work
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
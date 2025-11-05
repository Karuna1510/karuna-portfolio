import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cyber-darker border-t border-border">
      <div className="container-custom px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
           
            <Code className="h-4 w-4 text-primary" />
            <span>by Karuna Guglani</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Karuna Guglani. All rights reserved.</p>
            <p className="mt-1"> Software Engineer</p>
          </div>
          
          {/* Animated decorative elements */}
          <div className="flex justify-center space-x-4 mt-6">
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-secondary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
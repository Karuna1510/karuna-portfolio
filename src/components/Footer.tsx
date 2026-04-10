import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Karuna Guglani. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/karuna-guglani-7a8458152" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="mailto:karunaguglani15@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

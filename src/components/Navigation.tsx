import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'HOME', to: '/' },
  { name: 'PROJECTS', to: '/projects' },
  { name: 'SKILLS', to: '/skills' },
  { name: 'EXPERIENCE', to: '/experience' },
  { name: 'CONTACT', to: '/contact' },
] as const;

function navLinkClass(active: boolean) {
  return cn(
    'text-xs tracking-[0.15em] transition-colors font-medium border-b-2 pb-0.5',
    active ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
  );
}

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isRouteActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/#')) return false;
    return location.pathname === to;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[9px] font-bold tracking-widest text-amber-300/90"
              >
                KG
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={item.to} className={navLinkClass(isRouteActive(item.to))}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="container-custom px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn('block py-2', navLinkClass(isRouteActive(item.to)))}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}

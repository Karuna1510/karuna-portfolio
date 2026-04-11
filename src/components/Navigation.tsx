import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEntrancesReady } from '@/context/EntrancesReadyContext';

const navItems = [
  { name: 'HOME', to: '/' },
  { name: 'PROJECTS', to: '/projects' },
  { name: 'SKILLS', to: '/skills' },
  { name: 'EXPERIENCE', to: '/experience' },
  { name: 'CONTACT', to: '/contact' },
] as const;

function navLinkClass(active: boolean) {
  return cn(
    'text-sm tracking-[0.12em] transition-colors font-medium border-b-2 pb-1 md:text-[0.85rem] md:tracking-[0.14em]',
    active ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
  );
}

/** Same bar on every page — no scroll-based or route-based bg changes */
const NAV_BAR =
  'fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50';

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const entrancesReady = useEntrancesReady();

  const isRouteActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/#')) return false;
    return location.pathname === to;
  };

  return (
    <>
      <motion.nav
        className={NAV_BAR}
        initial={{ y: -14, opacity: 0 }}
        animate={
          entrancesReady ? { y: 0, opacity: 1 } : { y: -14, opacity: 0 }
        }
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Full width; horizontal padding gives breathing room without centering a narrow column */}
        <div className="w-full max-w-none px-4 py-3.5 sm:px-5 md:px-6 lg:px-8">
          <div className="flex w-full min-w-0 items-center justify-between gap-2">
            <div className="shrink-0 transition-transform hover:scale-105">
              <Link
                to="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[9px] font-bold tracking-widest text-amber-300/90"
              >
                KG
              </Link>
            </div>

            <div className="hidden shrink-0 items-center gap-7 md:flex lg:gap-9 xl:gap-10" key={location.pathname}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={
                    entrancesReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }
                  }
                  transition={{
                    duration: 0.38,
                    delay: entrancesReady ? 0.1 + index * 0.055 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
              className="shrink-0 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu — same bg as bar */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
        >
          <div className="w-full max-w-none space-y-3 px-4 py-4 sm:px-5 md:px-6 lg:px-8" key={location.pathname}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -12 }}
                animate={
                  entrancesReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                }
                transition={{
                  duration: 0.3,
                  delay: entrancesReady ? index * 0.05 : 0,
                }}
              >
                <Link
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('block py-2', navLinkClass(isRouteActive(item.to)))}
                >
                  {item.name}
                </Link>
              </motion.div>
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

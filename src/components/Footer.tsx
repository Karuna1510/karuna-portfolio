import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Building2,
  Cloud,
  CloudCog,
  Code2,
  Container,
  Cpu,
  Database,
  Eye,
  FileCode,
  Gauge,
  GitBranch,
  Globe2,
  Hexagon,
  Layers,
  Layout,
  Lightbulb,
  Link2,
  Monitor,
  Network,
  Package,
  Palette,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  TestTube,
  Wind,
  Workflow,
  Zap,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
] as const;

/** Icons + labels for the scrolling footer strip (duplicated in JSX for seamless loop) */
const stripItems: { label: string; Icon: LucideIcon }[] = [
  { label: 'React', Icon: Code2 },
  { label: 'TypeScript', Icon: FileCode },
  { label: 'Design systems', Icon: Layers },
  { label: 'Performance', Icon: Gauge },
  { label: 'Accessibility', Icon: Eye },
  { label: 'Cloud', Icon: Cloud },
  { label: 'CI/CD', Icon: GitBranch },
  { label: 'Full stack', Icon: Server },
  { label: 'Next.js', Icon: Rocket },
  { label: 'Node.js', Icon: Terminal },
  { label: 'AWS', Icon: CloudCog },
  { label: 'Azure', Icon: Building2 },
  { label: 'GraphQL', Icon: Network },
  { label: 'REST APIs', Icon: Link2 },
  { label: 'Microservices', Icon: Boxes },
  { label: 'Design tokens', Icon: Palette },
  { label: 'Playwright', Icon: TestTube },
  { label: 'Docker', Icon: Container },
  { label: 'Kubernetes', Icon: Hexagon },
  { label: 'Agile', Icon: RefreshCw },
  { label: 'UX', Icon: Layout },
  { label: 'UI', Icon: Monitor },
  { label: 'Responsive', Icon: Smartphone },
  { label: 'WCAG', Icon: ShieldCheck },
  { label: 'Lighthouse', Icon: Lightbulb },
  { label: 'Vite', Icon: Zap },
  { label: 'Tailwind', Icon: Wind },
  { label: 'Webpack', Icon: Package },
  { label: 'Web APIs', Icon: Globe2 },
  { label: 'AI / ML', Icon: Sparkles },
  { label: 'Architecture', Icon: Cpu },
  { label: 'Workflows', Icon: Workflow },
  { label: 'Data viz', Icon: Database },
];

function TickerStrip({ keyPrefix }: { keyPrefix: string }) {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10">
      {stripItems.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <span
            key={`${keyPrefix}-${idx}-${item.label}`}
            className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/95 sm:text-[11px] sm:tracking-[0.22em]"
          >
            <Icon className="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
            <span className="whitespace-nowrap">{item.label}</span>
            <span className="text-primary-foreground/35" aria-hidden>
              ·
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80">
      <div className="overflow-hidden bg-primary py-2.5" aria-hidden="true">
        <div className="footer-marquee-track">
          <TickerStrip keyPrefix="a" />
          <TickerStrip keyPrefix="b" />
        </div>
      </div>

      <div className="bg-[#f0f0ee] text-zinc-800">
        <div className="container-custom px-4 py-12 md:px-6 md:py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-10 xl:gap-14">
            {/* Quick links */}
            <div>
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Quick links</h2>
              <ul className="space-y-2.5">
                {quickLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-zinc-800 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Connect</h2>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://linkedin.com/in/karuna-guglani-7a8458152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-800 transition-colors hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:karunaguglani15@gmail.com" className="text-sm text-zinc-800 transition-colors hover:text-blue-600">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">About</h2>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-600">
                Karuna Guglani — Senior Software Developer specializing in enterprise
                applications, design systems, and AI-driven frontend development.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-300/80">
          <div className="container-custom flex flex-col gap-3 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <p className="text-xs leading-relaxed text-zinc-500">
              &copy; {year} Karuna Guglani. All rights reserved.
            </p>
            <p className="text-xs text-zinc-600">
              Karuna Guglani <span className="text-zinc-400">·</span> Senior Software Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

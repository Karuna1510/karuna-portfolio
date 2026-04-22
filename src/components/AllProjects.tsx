import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { allProjectsFull, type FullProject } from '@/data/allProjects';
import { cn } from '@/lib/utils';

function ProjectCard({ project, index }: { project: FullProject; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
      viewport={{ once: true }}
      className="group relative z-0 flex min-h-0 min-w-0 rounded-xl transition-[z-index] duration-0 hover:z-20"
    >
      <div className="flex w-full min-w-0 flex-col rounded-xl border border-white/[0.08] bg-[#0e0e12] p-5 transition-all duration-300 ease-out will-change-transform group-hover:border-primary/45 group-hover:shadow-[0_18px_44px_-12px_rgba(0,0,0,0.65),0_0_28px_-4px_hsl(195_100%_50%/0.12)] sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">{project.categoryLabel}</p>
        <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-primary sm:text-xl">
          {project.title}
        </h2>

        <div className="mt-3">
          <p
            className={cn(
              'text-sm leading-relaxed text-white/50 transition-all duration-300',
              !expanded && 'line-clamp-3',
            )}
          >
            {project.description}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-primary/70 transition-colors hover:text-primary"
          >
            {expanded ? (
              <>Show less <ChevronUp className="h-3 w-3" /></>
            ) : (
              <>Read more <ChevronDown className="h-3 w-3" /></>
            )}
          </button>
        </div>

        <div className="mt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Key Highlights</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[11px] leading-snug text-white/55 sm:text-xs">
            {project.highlights.map((h) => (
              <li key={h} className="marker:text-primary/60">
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] leading-snug text-white/45 sm:text-xs">
          {project.headlineMetrics.map((m) => (
            <span key={m.label}>
              {m.label}: <span className="font-semibold text-primary">{m.value}</span>
            </span>
          ))}
        </div>

        <div className="mt-4 border-t border-white/[0.06] pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Technologies</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-white/60 sm:text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AllProjects() {
  return (
    <section className="relative overflow-hidden bg-[#12121a] pb-20 pt-28 md:pb-28 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(195 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.4) 1px, transparent 1px)',
          backgroundSize: 'var(--cyber-grid-cell) var(--cyber-grid-cell)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl md:mb-12"
        >
          <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
            Portfolio
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">All Projects</h1>
          <p className="mt-4 text-base leading-relaxed text-white/55 md:text-lg">
            Detailed view of shipped work across mailchimp.com, AI-powered SDKs, SaaS platforms, and enterprise products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {allProjectsFull.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

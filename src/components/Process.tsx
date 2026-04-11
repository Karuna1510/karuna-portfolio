import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet';

/** Base stacking for fan; hover uses !z-[100] so the active card pops above neighbors */
const CARD_Z = ['z-[10]', 'z-[20]', 'z-[30]', 'z-[40]', 'z-[50]', 'z-[60]', 'z-[70]'] as const;

const cards = [
  { rank: 'A', suit: '♦', label: 'Requirements' },
  { rank: '2', suit: '♥', label: 'Architecture' },
  { rank: '3', suit: '♠', label: 'Implementation' },
  { rank: '4', suit: '♣', label: 'Testing & CI' },
  { rank: '5', suit: '♦', label: 'Code review' },
  { rank: '6', suit: '♥', label: 'Deploy & observe' },
  { rank: '7', suit: '♠', label: 'Iterate' },
];

type Activity = { title: string; description: string };

type ProcessStepDetail = {
  summary: string;
  activities: Activity[];
};

const PROCESS_SUBTITLE = 'Software delivery';

const PROCESS_DETAILS: ProcessStepDetail[] = [
  {
    summary:
      'Clarify goals, constraints, and success criteria so scope stays honest and stakeholders stay aligned before a line of production code is written.',
    activities: [
      { title: 'Discovery sessions', description: 'Align on problem, users, and business outcomes.' },
      { title: 'Scope & constraints', description: 'Document must-haves, non-goals, and timelines.' },
      { title: 'Acceptance outline', description: 'Define what “done” means in observable terms.' },
      { title: 'Risk & dependency map', description: 'Surface unknowns, integrations, and blockers early.' },
    ],
  },
  {
    summary:
      'Turn requirements into a maintainable structure, define boundaries, data flow, and tech choices that scale with the product.',
    activities: [
      { title: 'System boundaries', description: 'Services, modules, and ownership between them.' },
      { title: 'Data & APIs', description: 'Contracts, storage shape, and versioning strategy.' },
      { title: 'Quality attributes', description: 'Performance, security, and reliability targets.' },
      { title: 'Diagrams & ADRs', description: 'Lightweight docs the team can actually use.' },
    ],
  },
  {
    summary:
      'Ship incrementally with clean commits, readable code, and patterns that make the next change easier—not harder.',
    activities: [
      { title: 'Vertical slices', description: 'End-to-end features over horizontal layers.' },
      { title: 'Implementation standards', description: 'Linting, types, and naming consistency.' },
      { title: 'Observability hooks', description: 'Logging and metrics where failures show up first.' },
      { title: 'Incremental integration', description: 'Merge small, reviewable units of work.' },
    ],
  },
  {
    summary:
      'Automate confidence—tests, CI pipelines, and gates that catch regressions before users do.',
    activities: [
      { title: 'Test pyramid', description: 'Unit, integration, and e2e where they earn their keep.' },
      { title: 'CI pipeline', description: 'Build, test, and artifact on every push.' },
      { title: 'Quality gates', description: 'Coverage, typecheck, and security scans as policy.' },
      { title: 'Release readiness', description: 'Checklists for migrations and rollbacks.' },
    ],
  },
  {
    summary:
      'Use review as a quality multiplier—clear feedback, shared standards, and knowledge spread across the team.',
    activities: [
      { title: 'Structured review', description: 'PRs sized for human attention spans.' },
      { title: 'Design alignment', description: 'Behavior matches intent and edge cases.' },
      { title: 'Security & perf pass', description: 'Spot common footguns before merge.' },
      { title: 'Knowledge transfer', description: 'Comments and notes where the next reader needs them.' },
    ],
  },
  {
    summary:
      'Release safely, then watch—metrics, logs, and alerts that prove the change worked in the real world.',
    activities: [
      { title: 'Deployment strategy', description: 'Blue/green, canary, or staged as appropriate.' },
      { title: 'Runtime monitoring', description: 'Dashboards for latency, errors, and saturation.' },
      { title: 'Alerting', description: 'Actionable signals, not noise.' },
      { title: 'Incident readiness', description: 'Runbooks and rollback paths when things drift.' },
    ],
  },
  {
    summary:
      'Close the loop—use feedback from production and users to refine the next cycle of work.',
    activities: [
      { title: 'Retros & metrics', description: 'What shipped, what broke, what to improve.' },
      { title: 'Backlog refinement', description: 'Reprioritize using real usage and cost.' },
      { title: 'Debt vs. delivery', description: 'Balance fixes with new capability.' },
      { title: 'Next iteration', description: 'Feed learnings into requirements and architecture.' },
    ],
  },
];

const n = cards.length;

const CARD_W_PX = 160;
const CARD_H_PX = 270;
const OVERLAP = 0.5;

/** Upper semicircle for y; symmetric hand-fan rotation (not radial) so end cards overlap like center pairs */
function upperSemicircleFan(
  count: number,
  cardWidthPx: number,
  cardHeightPx: number,
  overlapFraction: number,
): { left: number; yBottom: number; rotate: number; z: number }[] {
  const step = cardWidthPx * overlapFraction;
  const totalW = (count - 1) * step + cardWidthPx;
  const cx = totalW / 2;
  const centersX = Array.from({ length: count }, (_, i) => i * step + cardWidthPx / 2);
  const maxDx = Math.max(...centersX.map((x) => Math.abs(x - cx)));
  const R = Math.max(maxDx * 1.22, cardWidthPx * 1.3);
  const cy = R + cardHeightPx + 32;
  const maxFanDeg = 34;

  return centersX.map((x, i) => {
    const dx = x - cx;
    const inner = R * R - dx * dx;
    const dy = inner > 0 ? Math.sqrt(inner) : 0;
    const yBottom = cy - dy;
    const rotate =
      count === 1 ? 0 : -maxFanDeg + (i / (count - 1)) * (2 * maxFanDeg);
    return { left: x - cardWidthPx / 2, yBottom, rotate, z: i };
  });
}

export default function Process() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const layout = upperSemicircleFan(n, CARD_W_PX, CARD_H_PX, OVERLAP);
  const minCardTop = Math.min(...layout.map((p) => p.yBottom - CARD_H_PX));
  const padTop = 20;
  const offsetY = padTop - minCardTop;
  const totalW = (n - 1) * CARD_W_PX * OVERLAP + CARD_W_PX;
  const maxBottomShifted = Math.max(...layout.map((p) => p.yBottom + offsetY));
  const fanHeight = maxBottomShifted + 28;

  const openStep = (index: number) => {
    setActiveIndex(index);
    setSheetOpen(true);
  };

  const detail = PROCESS_DETAILS[activeIndex];
  const card = cards[activeIndex];
  const progress = ((activeIndex + 1) / n) * 100;

  return (
    <section
      id="process"
      className="relative overflow-x-hidden overflow-y-visible bg-[#12121a] pt-10 pb-20 md:pt-12 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(195 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.4) 1px, transparent 1px)',
          backgroundSize: 'var(--cyber-grid-cell) var(--cyber-grid-cell)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
            From idea to production
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            How I ship real-world software
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 md:text-lg">
          An interactive exploration of the 7-step process I follow to transform complex challenges into elegant solutions.
          </p>
        </motion.div>

        {/* Upper semicircle fan: left → right, ~50% overlap */}
        <div className="relative mx-auto flex w-full max-w-[min(100%,720px)] justify-center overflow-x-auto overflow-y-visible pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:overflow-x-visible">
          <div
            className="relative max-[480px]:origin-top max-[480px]:scale-[0.72]"
            style={{
              width: totalW,
              height: fanHeight,
            }}
          >
            {cards.map((cardItem, i) => {
              const p = layout[i];
              const top = p.yBottom - CARD_H_PX + offsetY;
              return (
                <div
                  key={cardItem.label}
                  className={cn(
                    'group absolute transition-[z-index] duration-200 ease-out hover:!z-[100]',
                    CARD_Z[p.z],
                  )}
                  style={{
                    width: CARD_W_PX,
                    left: p.left,
                    top,
                    height: CARD_H_PX,
                    transform: `rotate(${p.rotate}deg)`,
                    transformOrigin: 'bottom center',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.04 * i }}
                    className="h-full w-full"
                  >
                    <div className="h-full w-full rounded-xl bg-zinc-200 p-[1.5px] shadow-[0_14px_44px_-10px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out group-hover:bg-gradient-primary group-hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.38),0_0_30px_hsl(var(--cyber-glow)/0.45)]">
                      <button
                        type="button"
                        onClick={() => openStep(i)}
                        data-cursor-theme="light"
                        className="relative h-full w-full cursor-pointer rounded-[12px] bg-white text-left transition duration-300 ease-out will-change-transform group-hover:-translate-y-3 group-hover:bg-zinc-50 group-hover:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.35)]"
                      >
                        <CardFace card={cardItem} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="mt-10 flex justify-center md:mt-14">
          <div className="h-2 w-2 rounded-full border border-white/30 bg-white/20" />
        </div> */}
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          hideCloseButton
          className={cn(
            'flex h-full w-full flex-col border-l border-white/10 bg-[#18181f] p-0 text-white shadow-2xl',
            '!max-w-[min(100vw,440px)] sm:!max-w-[440px]',
          )}
        >
          <div className="flex h-full min-h-0 flex-col">
            <SheetTitle className="sr-only">
              {card.label} — {PROCESS_SUBTITLE}
            </SheetTitle>
            <SheetDescription className="sr-only">{detail.summary}</SheetDescription>
            <header className="shrink-0 border-b border-white/10 px-6 pb-4 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-3">
                  <span className="mt-0.5 text-2xl text-primary" aria-hidden>
                    {card.suit}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">{card.label}</h2>
                    <p className="mt-1 text-sm text-white/50">{PROCESS_SUBTITLE}</p>
                  </div>
                </div>
                <SheetClose asChild>
                  <button
                    type="button"
                    className="shrink-0 rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
              <p className="text-sm italic leading-relaxed text-white/55 md:text-base">{detail.summary}</p>

              <h3 className="mt-8 text-sm font-bold text-white">Key activities:</h3>
              <ul className="mt-4 space-y-3">
                {detail.activities.map((activity, idx) => (
                  <li
                    key={activity.title}
                    className="flex gap-3 rounded-lg bg-white/[0.06] px-3 py-3 ring-1 ring-white/[0.06]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-white">{activity.title}</p>
                      <p className="mt-0.5 text-sm leading-snug text-white/55">{activity.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="shrink-0 border-t border-white/10 bg-[#14141a] px-4 py-4">
              <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-[width] duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <button
                  type="button"
                  disabled={activeIndex <= 0}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((k) => Math.max(0, k - 1));
                  }}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-2 py-1.5 font-medium transition-colors',
                    activeIndex <= 0
                      ? 'cursor-not-allowed text-white/25'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <span className="tabular-nums text-white/60">
                  {activeIndex + 1} of {n}
                </span>
                <button
                  type="button"
                  disabled={activeIndex >= n - 1}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((k) => Math.min(n - 1, k + 1));
                  }}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-2 py-1.5 font-medium transition-colors',
                    activeIndex >= n - 1
                      ? 'cursor-not-allowed text-white/25'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </footer>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

function CardFace({ card }: { card: (typeof cards)[0] }) {
  const corner = (
    <span className="text-xs font-bold leading-none text-black md:text-sm">
      {card.rank}
      <span className="text-black">{card.suit}</span>
    </span>
  );

  return (
    <div className="relative h-full w-full p-2.5 md:p-3">
      <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 md:left-3 md:top-3">
        {corner}
      </div>
      <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 rotate-180 md:bottom-3 md:right-3">
        {corner}
      </div>
      <div className="absolute inset-x-2.5 bottom-10 top-10 flex flex-col items-center justify-center gap-1 rounded border-[0.5px] border-zinc-200 px-2 py-2.5 md:inset-x-3 md:bottom-11 md:top-11 md:px-2.5 md:py-3">
        <span className="text-3xl leading-none text-black md:text-4xl">{card.suit}</span>
        <span className="text-center text-[8px] font-bold uppercase leading-tight tracking-wide text-black md:text-[9px]">
          {card.label}
        </span>
      </div>
    </div>
  );
}

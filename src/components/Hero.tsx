import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/avatar-hero.png';
import { playFlipSound } from '@/lib/flipSound';
import { useEntrancesReady } from '@/context/EntrancesReadyContext';

/** Home hero: nav (sibling) → avatar from below → dashed lines + eyebrow + name → mid/bottom lines → columns */
const EASE = [0.22, 1, 0.36, 1] as const;
const T = {
  avatar: 0.38,
  lineTop: 0.84,
  eyebrow: 0.88,
  name0: 0.7,
  nameStagger: 0.08,
  lineMid: 1.28,
  lineBottom: 1.48,
  bottomL: 1.36,
  bottomR: 1.44,
} as const;

function DashedLineReveal({
  delay,
  top,
  bottom,
  ready,
}: {
  delay: number;
  top?: string;
  bottom?: string;
  ready: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 z-[2] overflow-hidden"
      style={top !== undefined ? { top } : { bottom: bottom! }}
      aria-hidden
    >
      <motion.div
        className="h-0 w-full origin-left border-t border-dashed border-white/15"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: ready ? 1 : 0 }}
        transition={{ duration: 0.72, delay: ready ? delay : 0, ease: EASE }}
      />
    </div>
  );
}

const letters = [
  { char: 'K', term: 'Keyframes',     desc: 'CSS animations & motion',      symbol: '◇' },
  { char: 'A', term: 'Accessibility', desc: 'WCAG & inclusive design',       symbol: 'A11Y' },
  { char: 'R', term: 'Responsive',    desc: 'Mobile-first layouts',          symbol: '⊡' },
  { char: 'U', term: 'UI Systems',    desc: 'Design tokens & components',    symbol: '✦' },
  { char: 'N', term: 'Navigation',     desc: 'Routing & UX patterns',        symbol: '→' },
  { char: 'A', term: 'Animations',    desc: 'Micro-interactions & motion',   symbol: '~' },
];

function FlipLetter({ char, term, desc, symbol, delay, ready }: {
  char: string; term: string; desc: string; symbol: string; delay: number;
  ready: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.48, delay: ready ? delay : 0, ease: EASE }}
      className="group"
      style={{
        perspective: '700px',
        width: 'clamp(2.4rem, 8.5vw, 7rem)',
        height: 'clamp(3.2rem, 12vw, 10rem)',
      }}
      onPointerEnter={() => playFlipSound()}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front — letter */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span
            className="text-white leading-none group-hover:text-white/30 transition-colors duration-300"
            style={{ fontSize: 'clamp(3.2rem, 12vw, 10rem)', fontFamily: "'Bungee', sans-serif", letterSpacing: '0.04em' }}
          >
            {char}
          </span>
        </div>

        {/* Back — tech card */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-white/25 bg-zinc-950/90"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-white/60 font-mono font-bold leading-none" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)' }}>
            {symbol}
          </span>
          <span className="text-white font-semibold tracking-wide leading-none text-center px-1" style={{ fontSize: 'clamp(0.45rem, 1.1vw, 0.7rem)' }}>
            {term}
          </span>
          <span className="text-white/45 leading-none text-center px-1" style={{ fontSize: 'clamp(0.35rem, 0.8vw, 0.55rem)' }}>
            {desc}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ready = useEntrancesReady();

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden select-none">

      {/* Top dashed line — after avatar has mostly entered */}
      <DashedLineReveal top="20%" delay={T.lineTop} ready={ready} />

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: ready ? T.eyebrow : 0, ease: EASE }}
        className="absolute z-20 text-left text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white/55 font-medium px-4 sm:px-8 md:px-14 lg:px-20"
        style={{ top: 'calc(22% + 10px)' }}
      >
        Software Developer <span className="text-white/25 mx-2">•</span> Creative Coder
      </motion.p>

      {/* ── KARUNA — flip letter cards ── */}
      <div
        className="absolute inset-x-0 z-[5] flex items-center justify-center"
        style={{ top: '28%' }}
      >
        <div className="flex items-center justify-center" style={{ gap: '0.05em' }}>
          {/* KAR */}
          {letters.slice(0, 3).map((l, i) => (
            <FlipLetter key={i} {...l} delay={T.name0 + i * T.nameStagger} ready={ready} />
          ))}

          {/* Gap where avatar sits */}
          <div style={{ width: 'clamp(10rem, 22vw, 12rem)' }} />

          {/* UNA */}
          {letters.slice(3).map((l, i) => (
            <FlipLetter key={i + 3} {...l} delay={T.name0 + (3 + i) * T.nameStagger} ready={ready} />
          ))}
        </div>
      </div>

      <DashedLineReveal top="56%" delay={T.lineMid} ready={ready} />

      {/* Avatar — first focal motion on hero after nav */}
      <motion.div
        initial={{ opacity: 0, y: '30vh' }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: '30vh' }}
        transition={{ duration: 0.9, delay: ready ? T.avatar : 0, ease: EASE }}
        className="absolute inset-x-0 z-10 flex justify-center pointer-events-none"
        style={{ top: '20%', bottom: '12%' }}
      >
        <div className="relative mx-auto h-full w-max max-w-full">
          <img
            src={heroImage}
            alt="Karuna Guglani"
            className="block h-full w-auto max-h-full object-contain object-bottom"
            decoding="async"
          />
          {/* Soft fade into black at the feet — gradient sits on top of the image */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(45%,10.5rem)] bg-gradient-to-t from-black via-black/55 to-transparent sm:h-[min(40%,12rem)]"
            aria-hidden
          />
        </div>
      </motion.div>

      <DashedLineReveal bottom="12%" delay={T.lineBottom} ready={ready} />

      {/* Bottom content */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 flex justify-between items-start px-4 sm:px-8 md:px-14 lg:px-20"
        style={{ top: '60%' }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
          transition={{ duration: 0.58, delay: ready ? T.bottomL : 0, ease: EASE }}
          className="max-w-[190px] sm:max-w-xs pt-6"
        >
          <h1 className="text-base sm:text-lg md:text-xl font-semibold leading-snug mb-1.5 text-white">
            I build things that <span className="text-primary">scale.</span>
          </h1>
          <p className="text-[11px] sm:text-sm text-white/50 leading-relaxed mb-4">
            Turning <span className="text-white/80 font-medium">'complex ideas'</span> into{' '}
            <span className="text-white/80 font-medium">'high-performance applications'</span>.
          </p>
          <Button
            variant="cyber"
            size="sm"
            className="rounded-lg gap-1.5 text-sm font-semibold px-5 h-10 shadow-lg shadow-primary/25"
            asChild
          >
            <Link to="/projects">
              Check projects <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </Button>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
          transition={{ duration: 0.58, delay: ready ? T.bottomR : 0, ease: EASE }}
          className="max-w-[180px] sm:max-w-xs text-right pt-6"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5">
            Engineering Impact
          </h2>
          <p className="text-[9px] sm:text-sm text-white/55 leading-relaxed">
            <span className="text-white font-semibold">50% faster</span> feature delivery.
          </p>
          <p className="text-[9px] sm:text-sm text-white/55 leading-relaxed mt-1">
            <span className="text-white font-semibold">40% reduction</span> in page load time.
          </p>
          <p className="text-[9px] sm:text-sm text-white/55 leading-relaxed mt-1">
            <span className="text-white font-semibold">25% improvement</span> in application stability.
          </p>
          <p className="text-[9px] sm:text-sm text-white/55 leading-relaxed mt-1">
            <span className="text-white font-semibold">30% increase</span> in user engagement.
          </p>
          <Link
            to="/#process"
            className="inline-flex items-center justify-end gap-1 mt-3 text-[11px] sm:text-sm text-white/70 hover:text-primary transition-colors group"
          >
            See how I do things
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

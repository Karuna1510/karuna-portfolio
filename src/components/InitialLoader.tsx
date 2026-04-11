import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const CYAN = 'hsl(195, 100%, 50%)';
const PURPLE = 'hsl(258, 90%, 66%)';
const PINK = 'hsl(329, 86%, 70%)';

/** Cyber-themed splash: dual gradient arcs, orbit dots, soft core — no figurative art */
const InitialLoader = forwardRef<HTMLDivElement>(function InitialLoader(_, ref) {
  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 z-[2147483646] flex items-center justify-center bg-[#030306]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      {/* Soft bloom behind mark */}
      <motion.div
        className="pointer-events-none absolute h-48 w-48 rounded-full bg-primary/25 blur-[48px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute h-32 w-32 rounded-full bg-secondary/20 blur-[36px]"
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.4, 0.25, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative flex h-36 w-36 items-center justify-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          width={144}
          height={144}
          viewBox="0 0 100 100"
          className="overflow-visible text-primary"
          aria-hidden
        >
          <defs>
            <linearGradient id="loader-arc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={CYAN} />
              <stop offset="55%" stopColor={PURPLE} />
              <stop offset="100%" stopColor={PINK} />
            </linearGradient>
            <linearGradient id="loader-arc-soft" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={PURPLE} stopOpacity={0.95} />
              <stop offset="100%" stopColor={CYAN} stopOpacity={0.35} />
            </linearGradient>
            <radialGradient id="loader-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={CYAN} stopOpacity={0.9} />
              <stop offset="70%" stopColor={PURPLE} stopOpacity={0.5} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Faint track */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="hsl(240 10% 18%)"
            strokeWidth={1}
          />

          {/* Outer arc — clockwise */}
          <motion.g
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.35, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#loader-arc)"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray="68 196"
              opacity={0.95}
            />
          </motion.g>

          {/* Inner arc — counter, faster feel */}
          <motion.g
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="url(#loader-arc-soft)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="48 140"
              opacity={0.85}
            />
          </motion.g>

          {/* Orbiting dots */}
          <motion.g
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="50" cy="12" r="2.2" fill={CYAN} />
            <circle cx="50" cy="12" r="2.2" fill={PURPLE} transform="rotate(120 50 50)" />
            <circle cx="50" cy="12" r="2.2" fill={PINK} transform="rotate(240 50 50)" />
          </motion.g>

          <motion.g
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="50" cy="24" r="1.4" fill="white" opacity={0.85} />
            <circle cx="50" cy="24" r="1.4" fill="white" opacity={0.55} transform="rotate(180 50 50)" />
          </motion.g>

          {/* Core */}
          <motion.circle
            cx="50"
            cy="50"
            r="14"
            fill="url(#loader-core)"
            animate={{ r: [12, 15.5, 12], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="50" cy="50" r="4" fill="white" opacity={0.92} />
          <circle cx="50" cy="50" r="2" fill={CYAN} opacity={0.85} />
        </svg>
      </motion.div>
    </motion.div>
  );
});

export default InitialLoader;

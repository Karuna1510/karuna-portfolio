import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Intro sequence:
 *  1. White screen visible instantly.
 *  2. 5 dark strips slide DOWN from the top, right → left, one by one.
 *     Each strip is an overflow-hidden shell; the inner panel slides from y=-100% to y=0.
 *  3. Screen fully covered in site bg colour (#12121a).
 *  4. AnimatePresence exit fades the loader, revealing the hero already animating beneath.
 */

const STRIPS = 5;
const BG = 'black';

const InitialLoader = forwardRef<HTMLDivElement>(function InitialLoader(_, ref) {
  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 z-[2147483646] bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <div className="absolute inset-0 flex">
        {Array.from({ length: STRIPS }).map((_, i) => {
          // rightmost strip (i = STRIPS-1) starts first, leftmost (i=0) last
          const delay = (STRIPS - 1 - i) * 0.16;
          return (
            <div key={i} className="relative h-full flex-1 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: BG }}
                initial={{ y: '-900%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.90,
                  delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

export default InitialLoader;

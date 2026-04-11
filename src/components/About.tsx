import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import avatarSrc from '@/assets/avatar-about.png';

const HEADLINE_LINE1 = 'Senior Full Stack Developer';
/** NBSP keeps “enterprise experiences” on one line while typing (avoids orphan wrap). */
const HEADLINE_LINE2_PREFIX = 'with 7+ years crafting enterprise\u00A0experiences ';
const HEADLINE_LINE2_ITALIC = 'that scale.';
const HEADLINE_LINE2 = HEADLINE_LINE2_PREFIX + HEADLINE_LINE2_ITALIC;

/** ID badge column + card width (px); keep `sm:w-[300px]` / `300` in max-w-* in sync */
const ABOUT_CARD_W = 300;

function AboutTypingHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    if (!isInView) return;
    let cancelled = false;
    const ms = 34;

    const type = async () => {
      const reduced =
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        setLine1(HEADLINE_LINE1);
        setLine2(HEADLINE_LINE2);
        return;
      }
      for (let i = 0; i <= HEADLINE_LINE1.length; i++) {
        if (cancelled) return;
        setLine1(HEADLINE_LINE1.slice(0, i));
        await new Promise((r) => setTimeout(r, ms));
      }
      for (let i = 0; i <= HEADLINE_LINE2.length; i++) {
        if (cancelled) return;
        setLine2(HEADLINE_LINE2.slice(0, i));
        await new Promise((r) => setTimeout(r, ms));
      }
    };

    void type();
    return () => {
      cancelled = true;
    };
  }, [isInView]);

  const line1Done = line1.length === HEADLINE_LINE1.length;
  const done = line1Done && line2.length === HEADLINE_LINE2.length;

  const prefixLen = HEADLINE_LINE2_PREFIX.length;
  const line2Plain = line2.slice(0, Math.min(line2.length, prefixLen));
  const line2Italic = line2.slice(prefixLen);

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => setShowCaret((c) => !c), 500);
    return () => clearInterval(id);
  }, [done]);

  const Caret = () => (
    <span className={showCaret ? 'text-[#3b72f0]' : 'text-transparent'} aria-hidden>
      |
    </span>
  );

  return (
    <h2
      ref={ref}
      className="w-full max-w-none font-bold tracking-tight text-zinc-900 min-h-[4.25rem] sm:min-h-[5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem]"
      aria-live="polite"
    >
      <span className="block text-balance text-3xl leading-[1.12] sm:text-4xl md:text-[2.35rem] md:leading-[1.18] lg:text-[2.65rem] lg:leading-[1.15]">
        {line1}
        {!line1Done && <Caret />}
      </span>
      {line1Done ? (
        <span className="block w-full max-w-full text-balance text-3xl leading-[1.12] sm:text-4xl md:text-[2.35rem] md:leading-[1.18] lg:text-[2.65rem] lg:leading-[1.15]">
          {line2Plain}
          <span className="italic">{line2Italic}</span>
          {!done && <Caret />}
        </span>
      ) : null}
    </h2>
  );
}

export default function About() {
  return (
    <section
      id="about"
      data-cursor-theme="light"
      className="relative overflow-x-hidden overflow-y-visible bg-[#f0f0ee] pb-14 pl-6 pr-4 pt-0 sm:pl-8 sm:pr-6 md:pb-20 md:pl-10 md:pr-10 lg:pl-12 xl:pl-14"
    >
      {/* Flex (not centered max-w box) so the ID card sits near the viewport edge */}
      <div className="flex w-full flex-col items-stretch gap-20 lg:flex-row lg:items-start lg:gap-28 xl:gap-36 2xl:gap-44">
        {/* ── ID Card column — only section padding from the left edge ── */}
        <div
          className="flex w-full shrink-0 flex-col items-start sm:w-[300px]"
          style={{ maxWidth: `${ABOUT_CARD_W}px` }}
        >
          {/* Grommet — fixed, no swing */}
          <div className="flex w-full flex-col items-center">
            <div className="relative z-10 h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-200 via-white to-zinc-400 shadow-lg" />
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
              <div className="absolute inset-[8px] rounded-full bg-gradient-to-br from-zinc-900 to-black" />
            </div>
            <div className="-mt-1 h-20 w-[6px] bg-[#3b72f0]" />
          </div>

          {/* Card — oscillating swing from top */}
          <motion.div
            style={{ originX: '50%', originY: 0 }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mb-14 w-full max-w-[min(100%,300px)] overflow-visible rounded-2xl border border-white/5 bg-[#1a1a1a] shadow-2xl sm:w-[300px] sm:max-w-none"
          >
            {/* Dark cap — small area above blue header where lanyard clips in */}
            <div className="flex justify-center items-center rounded-t-2xl bg-[#1a1a1a] pb-2 pt-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#111]">
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
            </div>

            {/* Blue header — shimmer; label pinned high so avatar overlap doesn’t cover it */}
            <div className="relative flex min-h-[5rem] flex-col items-center justify-start overflow-hidden bg-[#3b72f0] px-5 pb-12 pt-3 text-center sm:min-h-[5.25rem] sm:pt-4">
              <div className="absolute inset-0 z-0 animate-[shimmer_3s_linear_infinite] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.08)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%]" />
              <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em] text-white sm:text-[12px]">
                About Me
              </span>
            </div>

            {/* Avatar — overlaps lower blue only; less negative margin so “About Me” stays clear */}
            <div className="relative z-[5] -mt-11 mb-2.5 flex justify-center">
              <div className="h-[7.25rem] w-[7.25rem] overflow-hidden rounded-full border-4 border-[#1a1a1a] bg-[#1a1a1a] shadow-xl ring-[3px] ring-[#1a1a1a] ring-offset-0">
                <img src={avatarSrc} alt="Karuna Guglani" className="h-full w-full object-cover object-top" />
              </div>
            </div>

            {/* Name + email */}
            <div className="px-5 pb-4 text-center">
              <h3 className="text-lg font-bold tracking-wide text-white sm:text-xl">Karuna Guglani</h3>
              <p className="mt-1 text-xs text-blue-400 sm:text-sm">karunaguglani15@gmail.com</p>
              <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
                {['Full Stack', 'Architecture', 'Performance'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-blue-400 sm:text-[9px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently at */}
            <div className="px-5 pb-4 text-center">
              <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">Currently at</p>
              <p className="text-xs font-bold text-white sm:text-sm">Intuit (Mailchimp)</p>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/10" />

            {/* Detail rows */}
            <div className="space-y-2.5 px-5 py-4">
                {[
                  { label: 'ID No', value: 'KG-2018-001', href: 'https://linkedin.com/in/karuna-guglani-7a8458152' },
                  { label: 'Experience', value: '7+ Years' },
                  { label: 'Department', value: 'Engineering' },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-white/35 text-[9px] uppercase tracking-wider">{row.label}</span>
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 text-[11px] font-semibold hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-white text-[11px] font-semibold">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
          </motion.div>
        </div>

        {/* ── Bio — line-length cap only; row is not mx-auto centered ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="min-w-0 max-w-3xl flex-1 space-y-6 pb-4 pt-24 text-left md:pb-6 md:pt-32 lg:max-w-4xl xl:max-w-5xl lg:pl-12 lg:pt-24 xl:pl-20 2xl:pl-24"
        >
            <AboutTypingHeadline />

            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
              I'm Karuna Guglani, a Full Stack Developer dedicated to transforming complex ideas into powerful digital solutions. My work blends creativity and technology to craft seamless, intuitive user experiences that are as visually engaging as they are high-performing.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
              I specialize in building scalable applications and elegant architectures, balancing user needs with business goals. By prioritizing performance, accessibility, and responsiveness, I create solutions that delight users while driving measurable impact.
            </p>

            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
              <strong className="text-zinc-700">Specializations:</strong> Frontend Architecture, Full-Stack Development, AI-Powered Applications, Cloud Platforms, Performance Optimization, and Team Leadership. Currently at Intuit working on Mailchimp.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-start">
              <Button
                variant="cyber"
                size="lg"
                className="rounded-lg gap-2 text-sm font-semibold px-6 h-11 shadow-lg shadow-primary/25"
                asChild
              >
                <Link to="/projects">
                  Check Projects <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </Button>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 px-2 py-3 text-zinc-800 text-sm font-semibold hover:text-blue-600 transition-colors"
              >
                My Experience <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

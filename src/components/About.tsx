import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const avatarSrc = `${import.meta.env.BASE_URL}images/avatar-about.png`;

const HEADLINE_LINE1 = 'Senior Full Stack Developer';
const HEADLINE_LINE2A = 'with 7+ years building at ';
const HEADLINE_LINE2B = 'scale.';

function AboutTypingHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [line1, setLine1] = useState('');
  const [line2a, setLine2a] = useState('');
  const [line2b, setLine2b] = useState('');
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
        setLine2a(HEADLINE_LINE2A);
        setLine2b(HEADLINE_LINE2B);
        return;
      }
      for (let i = 0; i <= HEADLINE_LINE1.length; i++) {
        if (cancelled) return;
        setLine1(HEADLINE_LINE1.slice(0, i));
        await new Promise((r) => setTimeout(r, ms));
      }
      for (let i = 0; i <= HEADLINE_LINE2A.length; i++) {
        if (cancelled) return;
        setLine2a(HEADLINE_LINE2A.slice(0, i));
        await new Promise((r) => setTimeout(r, ms));
      }
      for (let i = 0; i <= HEADLINE_LINE2B.length; i++) {
        if (cancelled) return;
        setLine2b(HEADLINE_LINE2B.slice(0, i));
        await new Promise((r) => setTimeout(r, ms));
      }
    };

    void type();
    return () => {
      cancelled = true;
    };
  }, [isInView]);

  const line1Done = line1.length === HEADLINE_LINE1.length;
  const done =
    line1Done &&
    line2a.length === HEADLINE_LINE2A.length &&
    line2b.length === HEADLINE_LINE2B.length;

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
      className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-zinc-900 leading-[1.22] md:leading-[1.28] tracking-tight max-w-2xl min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[6.5rem]"
      aria-live="polite"
    >
      <span className="block">
        {line1}
        {!line1Done && <Caret />}
      </span>
      <span className="mt-1.5 md:mt-2 block min-h-[1.35em]">
        {line1Done ? (
          <>
            {line2a}
            <span className="italic">{line2b}</span>
            {!done && <Caret />}
          </>
        ) : null}
      </span>
    </h2>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#f0f0ee] relative overflow-visible pt-0 pb-14 md:pb-20">

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── ID Card column — flush to left edge ── */}
          <div className="flex flex-col items-start -ml-6 md:-ml-12">
            {/* Grommet — fixed, no swing */}
            <div className="flex flex-col items-center w-[260px]">
              <div className="relative w-7 h-7 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-200 via-white to-zinc-400 shadow-lg" />
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
                <div className="absolute inset-[7px] rounded-full bg-gradient-to-br from-zinc-900 to-black" />
              </div>
              <div className="w-[6px] h-20 bg-[#3b72f0] -mt-1" />
            </div>

            {/* Card — oscillating swing from top */}
            <motion.div
              style={{ originX: '50%', originY: 0 }}
              animate={{ rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[260px] bg-[#1a1a1a] rounded-2xl overflow-visible shadow-2xl border border-white/5 mb-16"
            >

              {/* Dark cap — small area above blue header where lanyard clips in */}
              <div className="flex justify-center items-center bg-[#1a1a1a] rounded-t-2xl pt-3 pb-2">
                <div className="w-5 h-5 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/15" />
                </div>
              </div>

              {/* Blue header — shimmer */}
              <div className="relative bg-[#3b72f0] px-4 pt-6 pb-14 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.08)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_linear_infinite]" />
                <span className="relative text-white text-[11px] font-black tracking-[0.3em] uppercase">About Me</span>
              </div>

              {/* Avatar — overlaps the blue header */}
              <div className="flex justify-center -mt-14 mb-2 relative z-10">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-3 ring-[#1a1a1a] ring-offset-0 border-4 border-[#1a1a1a] shadow-xl bg-[#1a1a1a]">
                  <img src={avatarSrc} alt="Karuna Guglani" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Name + email */}
              <div className="text-center px-4 pb-4">
                <h3 className="text-white font-bold text-lg tracking-wide">Karuna Guglani</h3>
                <p className="text-blue-400 text-xs mt-1">karunaguglani15@gmail.com</p>
                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {['Full Stack', 'Architecture', 'Performance'].map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded text-[8px] uppercase tracking-wider text-blue-400 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Currently at */}
              <div className="px-4 pb-4 text-center">
                <p className="text-white/35 text-[9px] uppercase tracking-[0.2em] mb-1">Currently at</p>
                <p className="text-white text-xs font-bold">Intuit (Mailchimp)</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mx-4" />

              {/* Detail rows */}
              <div className="px-4 py-4 space-y-3">
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

          {/* ── Bio text — has its own vertical padding ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 pt-24 md:pt-32 lg:pt-36 pb-4 md:pb-6 text-left"
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
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Braces, LayoutGrid, Palette, Cloud, TestTube2, Wrench, type LucideIcon } from 'lucide-react';

type SkillGroup = {
  icon: LucideIcon;
  title: string;
  skills: string[];
};

/** Original capability groups — same coverage as before, presented as icon cards */
const buildStack: SkillGroup[] = [
  {
    icon: Braces,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Node.js'],
  },
  {
    icon: LayoutGrid,
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Angular', 'Redux', 'React Native', 'React Flow'],
  },
  {
    icon: Palette,
    title: 'Styling',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'SCSS', 'Styled Components', 'Shadow DOM'],
  },
];

const platformStack: SkillGroup[] = [
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'CloudFront'],
  },
  {
    icon: TestTube2,
    title: 'Testing',
    skills: ['Jest', 'Cypress', 'Playwright', 'React Testing Library'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'JIRA', 'Confluence', 'Figma', 'Rollup'],
  },
];

function ColumnHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h3 className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white">{title}</h3>
      <div className="mt-3 h-0.5 w-12 rounded-full bg-primary" />
    </div>
  );
}

function SkillCard({ group, cardIndex }: { group: SkillGroup; cardIndex: number }) {
  const Icon = group.icon;
  const description = group.skills.join(', ');

  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{
        duration: 0.5,
        delay: cardIndex * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-sm transition-colors hover:border-primary/25 hover:bg-white/[0.06]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#14141c] text-primary shadow-inner">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h4 className="font-semibold text-white">{group.title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-white/55">{description}</p>
      </div>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0c0c0e]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(195 100% 50% / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.35) 1px, transparent 1px)',
          backgroundSize: 'var(--cyber-grid-cell) var(--cyber-grid-cell)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[min(380px,50vw)] w-[min(480px,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">Expertise</p>
          <h1 className="font-bungee text-4xl tracking-wide text-white md:text-5xl lg:text-[3rem]">Skills & Capabilities</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 md:text-base">
            Languages, frameworks, styling, cloud, testing, and tooling , the full stack I use to design, ship, and
            maintain production software.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <ColumnHeader title="Languages, frameworks & styling" />
            <div className="space-y-4">
              {buildStack.map((group, index) => (
                <SkillCard key={group.title} group={group} cardIndex={index} />
              ))}
            </div>
          </div>

          <div>
            <ColumnHeader title="Cloud, testing & tools" />
            <div className="space-y-4">
              {platformStack.map((group, index) => (
                <SkillCard key={group.title} group={group} cardIndex={index + buildStack.length} />
              ))}
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

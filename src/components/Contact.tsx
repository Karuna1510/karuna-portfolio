import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const resumeFile = 'KarunaGuglani-FE-Developer.pdf';
/** Vite `BASE_URL` ends with `/`; file lives in `public/` */
const resumeHref = `${import.meta.env.BASE_URL}${resumeFile}`;

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'karunaguglani15@gmail.com', href: 'mailto:karunaguglani15@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'karuna-guglani', href: 'https://linkedin.com/in/karuna-guglani-7a8458152' },
  { icon: MapPin, label: 'Location', value: 'Toronto, Ontario, Canada', href: null },
];

const fieldClass =
  'border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus-visible:border-primary/50 focus-visible:ring-primary/20';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:karunaguglani15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Karuna,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0c0c0e]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(195 100% 50% / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.35) 1px, transparent 1px)',
          backgroundSize: 'var(--cyber-grid-cell) var(--cyber-grid-cell)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[min(380px,50vw)] w-[min(480px,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-28 md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:mb-16"
        >
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
            Get In Touch
          </span>
          <h2 className="font-bungee text-4xl tracking-wide text-white md:text-5xl">Let&apos;s Connect</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-white/65">
              Whether you need a frontend developer, full stack engineer, or consultation on your project, I&apos;m here
              to help. Let&apos;s build something exceptional together.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#14141c] text-primary">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/45">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-white transition-colors hover:text-primary"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="cyber" asChild>
                <a href={resumeHref} download={resumeFile}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="cyber-card p-5">
              <p className="mb-2 text-xs uppercase tracking-wider text-white/45">Education</p>
              <p className="text-sm font-semibold text-white">Bachelor of Engineering — Computer Science</p>
              <p className="mt-1 text-xs text-white/50">Chitkara University • 2014 – 2018</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-6 md:p-8">
              <h3 className="mb-6 text-lg font-bold text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={fieldClass}
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className={fieldClass}
                  />
                </div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className={fieldClass}
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className={`${fieldClass} resize-none`}
                />
                <Button type="submit" variant="cyber" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

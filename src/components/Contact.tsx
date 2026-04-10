import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'karunaguglani15@gmail.com', href: 'mailto:karunaguglani15@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'karuna-guglani', href: 'https://linkedin.com/in/karuna-guglani-7a8458152' },
  { icon: MapPin, label: 'Location', value: 'Toronto, Ontario, Canada', href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:karunaguglani15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Karuna,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you need a frontend developer, full stack engineer, or consultation on your project — I'm here to help. Let's build something exceptional together.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <link.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                    {link.href ? (
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm text-foreground hover:text-primary transition-colors">
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume */}
            <div className="pt-4">
              <Button variant="cyber" asChild>
                <a href="/karuna-portfolio/KarunaDeveloper.pdf" download="Karuna_Guglani_Resume.pdf">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Education */}
            <div className="cyber-card p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Education</p>
              <p className="text-sm font-semibold text-foreground">Bachelor of Engineering — Computer Science</p>
              <p className="text-xs text-muted-foreground mt-1">Chitkara University • 2014 – 2018</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="bg-muted border-border" />
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="bg-muted border-border" />
                </div>
                <Input name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="bg-muted border-border" />
                <Textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your message..." className="bg-muted border-border resize-none" />
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

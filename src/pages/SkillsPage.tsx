import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function SkillsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

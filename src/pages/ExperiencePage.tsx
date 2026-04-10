import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

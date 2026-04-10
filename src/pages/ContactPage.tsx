import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0e]">
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

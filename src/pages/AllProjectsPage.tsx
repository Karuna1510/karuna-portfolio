import { useEffect } from 'react';

import Navigation from '@/components/Navigation';
import AllProjects from '@/components/AllProjects';
import Footer from '@/components/Footer';

export default function AllProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#12121a]">
      <Navigation />
      <main>
        <AllProjects />
      </main>
      <Footer />
    </div>
  );
}

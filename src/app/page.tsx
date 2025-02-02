// src/app/page.tsx
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import TrainingWrapper from '@/components/sections/TrainingWrapper';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import MainChoices from '@/components/sections/MainChoices';
import Partners from '@/components/sections/Partners';
import ScrollToTop from '@/components/common/ScrollToTop';
import FDICSection from '@/components/sections/FDICSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <Hero />
      <MainChoices />
      <TrainingWrapper />
      <Partners />
      <FDICSection />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}

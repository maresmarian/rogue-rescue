// src/app/page.tsx
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Training from '@/components/sections/Training';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Navigation />
            <Hero />
            <Services />
            <Training />
            <Contact />
            <Footer />
        </main>
    );
}
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Training from '@/components/sections/Training';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import MainChoices from "@/components/sections/MainChoices";
import References from "@/components/sections/References";
import Partners from "@/components/sections/Partners";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Navigation />
            <Hero />
            <MainChoices />
            {/*<References />*/}
            <Training />
            <Partners />
            <Contact />
            <Footer />
        </main>
    );
}
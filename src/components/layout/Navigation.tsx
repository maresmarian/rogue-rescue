// src/components/layout/Navigation.tsx
import Link from 'next/link';
import { Shield } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                            <Shield className="text-white w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl text-gray-800">ROGUE RESCUE</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-colors">
                            Services
                        </Link>
                        <Link href="/training" className="text-gray-600 hover:text-orange-500 transition-colors">
                            Training
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                            Contact
                        </Link>
                        <a
                            href="tel:8337278534"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                        >
                            (833) 727-8534
                        </a>
                    </div>
                </div>
            </div>
            <MobileMenu />
        </nav>
    );
}
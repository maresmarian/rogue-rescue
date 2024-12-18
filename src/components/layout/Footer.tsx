// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Shield } from 'lucide-react';
import { CONTACT_INFO, COMPANY_INFO, SERVICES, MENU_ITEMS } from '@/data';
import Image from 'next/image';


// In the social media section:
const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin
} as const;
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-10 w-10 flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="Rogue Rescue Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="font-bold">{COMPANY_INFO.name}</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            {COMPANY_INFO.tagline}
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(CONTACT_INFO.social).map(([platform, url]) => {
                                const Icon = socialIcons[platform as keyof typeof socialIcons];
                                return Icon ? (
                                    <a
                                        key={platform}
                                        href={url}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="w-5 h-5"/>
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {MENU_ITEMS.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} className="text-gray-400 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            {Object.values(SERVICES).map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-5 h-5"/>
                                <a
                                    href={`mailto:${CONTACT_INFO.email.general}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {CONTACT_INFO.email.general}
                                </a>
                            </li>
                            <li className="text-gray-400">
                                {CONTACT_INFO.address.street}<br/>
                                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Shield, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                <Shield className="text-white w-6 h-6" />
                            </div>
                            <span className="font-bold">ROGUE RESCUE</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Professional rescue services and training solutions for challenging environments.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                                    Training
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/wildfire-ems" className="text-gray-400 hover:text-white transition-colors">
                                    Wildfire EMS
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/technical-rescue" className="text-gray-400 hover:text-white transition-colors">
                                    Technical Rescue
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/high-angle" className="text-gray-400 hover:text-white transition-colors">
                                    High Angle Rescue
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:contact@roguerescue.com" className="hover:text-white transition-colors">
                                    contact@roguerescue.com
                                </a>
                            </li>
                            <li className="text-gray-400">
                                123 Rescue Way<br />
                                Mountain View, CA 94043
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
                            © {new Date().getFullYear()} Rogue Rescue Services. All rights reserved.
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
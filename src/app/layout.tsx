import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import EmergencyModal from "@/components/common/EmergencyModal";
import { motion, AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
    title: "Rogue Rescue Services",
    description: "Professional rescue services and training solutions",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="font-sans">
        <Navigation />
        <AnimatePresence mode="wait">
            {children}
        </AnimatePresence>
        <EmergencyModal />
        </body>
        </html>
    );
}
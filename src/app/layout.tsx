import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import EmergencyModal from "@/components/common/EmergencyModal";
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
        <Navigation />
        <AnimatePresence mode="wait">
            {children}
        </AnimatePresence>
        <EmergencyModal />
        </body>
        </html>
    );
}
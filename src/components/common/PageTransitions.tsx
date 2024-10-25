'use client';

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};

interface PageTransitionsProps {
    children: React.ReactNode;
}

export default function PageTransitions({ children }: PageTransitionsProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
}
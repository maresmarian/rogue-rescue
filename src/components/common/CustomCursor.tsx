// src/components/common/CustomCursor.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleHoverStart);
            element.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleHoverStart);
                element.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 0.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            >
                <div className="w-full h-full rounded-full bg-orange-500 opacity-70" />
            </motion.div>

            {/* Trailing cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    mass: 0.2
                }}
            >
                <div className="w-full h-full rounded-full border-2 border-orange-500 opacity-30" />
            </motion.div>
        </>
    );
}
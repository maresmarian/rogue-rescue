// src/components/sections/Hero.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HERO_SLIDES } from '@/lib/constants';
import Link from "next/link";
import { TRAINING_STATS } from '@/data/training';

const CountUpAnimation = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span ref={nodeRef}>{count}</span>;
};

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.9,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1],
        },
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1],
        },
    }),
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1],
        },
    }),
};

export default function Hero() {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const slideIndex = Math.abs(page % HERO_SLIDES.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, page]);

    return (
        <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/80 z-10" />

            {/* Main content */}
            <div className="relative h-full z-20">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        {/* Background Image */}
                        <div className="relative h-full">
                            <Image
                                src={HERO_SLIDES[slideIndex].image}
                                alt={HERO_SLIDES[slideIndex].title}
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
                    <div className="w-full max-w-3xl">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="space-y-6 sm:space-y-8"
                        >
                            <motion.div
                                custom={0}
                                variants={contentVariants}
                                className="h-[180px] sm:h-[200px] flex flex-col justify-end"
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
                                    {HERO_SLIDES[slideIndex].title}
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-200">
                                    {HERO_SLIDES[slideIndex].subtitle}
                                </p>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                custom={1}
                                variants={contentVariants}
                                className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-8"
                            >
                                <div className="bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                                        <CountUpAnimation end={TRAINING_STATS.totalCourses} />+
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300">Training Programs</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                                        <CountUpAnimation end={TRAINING_STATS.totalTrainingDays} />+
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300">Training Days</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                                        <CountUpAnimation end={TRAINING_STATS.totalStudents} />+
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300">Students Trained</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                                        <CountUpAnimation end={TRAINING_STATS.successRate} />%
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                custom={2}
                                variants={contentVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                            >
                                <Link href="/services" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Our Services
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                                <Link href="/training" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/20 transition-all"
                                    >
                                        Training Programs
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-6 sm:bottom-12 right-4 sm:right-12 z-20">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex gap-1 sm:gap-2">
                            {HERO_SLIDES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPage([index, index > slideIndex ? 1 : -1])}
                                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
                                        index === slideIndex ? 'w-6 sm:w-8 bg-orange-500' : 'bg-white/50 hover:bg-white'
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-1 sm:gap-2">
                            <button
                                onClick={() => paginate(-1)}
                                className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all"
                            >
                                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all"
                            >
                                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </button>
                            <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all"
                            >
                                {isAutoPlaying ? (
                                    <Pause className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                ) : (
                                    <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 mx-auto flex justify-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-white/50 flex flex-col items-center gap-1 sm:gap-2"
                        >
                            <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6" />
                            <span className="text-xs sm:text-sm">Scroll to explore</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
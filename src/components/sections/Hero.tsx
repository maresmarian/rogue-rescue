'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HERO_SLIDES } from '@/lib/constants';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[80vh] min-h-[600px]">
            {/* Slides */}
            {HERO_SLIDES.map((slide, index) => (
                <motion.div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="relative h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>
                </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10 h-full">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            {HERO_SLIDES[currentSlide].title}
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            {HERO_SLIDES[currentSlide].subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                Our Services <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:shadow-xl transition-all"
                            >
                                Training
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-12 right-12 z-20 flex items-center gap-4">
                <div className="flex gap-2 mr-4">
                    {HERO_SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentSlide ? 'w-6 bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
        </section>
    );
}
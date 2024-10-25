'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HERO_SLIDES = [
    {
        image: '/images/hero/hero-1.jpg',
        title: 'Providing Vertical Excellence',
        subtitle: 'Expert rescue services and professional training'
    },
    {
        image: '/images/hero/hero-2.jpg',
        title: 'Professional Training',
        subtitle: 'Comprehensive programs for rescue professionals'
    },
    {
        image: '/images/hero/hero-3.jpg',
        title: 'Emergency Response',
        subtitle: '24/7 emergency rescue services'
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    };

    return (
        <section className="pt-20">
            <div className="relative bg-gray-900 h-[80vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out">
                    <Image
                        src={HERO_SLIDES[currentSlide].image}
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="max-w-xl">
                            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
                                {HERO_SLIDES[currentSlide].title}
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                {HERO_SLIDES[currentSlide].subtitle}
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center gap-2">
                                    Our Services <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:shadow-xl transition-all">
                                    Training
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-12 right-12 z-20 flex gap-4">
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
            </div>
        </section>
    );
}
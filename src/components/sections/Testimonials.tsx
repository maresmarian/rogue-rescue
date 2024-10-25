'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: "John Carter",
        role: "Search & Rescue Team Lead",
        image: "/images/testimonials/testimonial-1.jpg",
        content: "The training provided by Rogue Rescue has been instrumental in elevating our team's capabilities."
    },
    {
        name: "Sarah Martinez",
        role: "Emergency Response Director",
        image: "/images/testimonials/testimonial-2.jpg",
        content: "Outstanding service and professional training. Their expertise in high-angle rescue is unmatched."
    },
    {
        name: "Mike Thompson",
        role: "Fire Department Chief",
        image: "/images/testimonials/testimonial-3.jpg",
        content: "The best technical rescue training we've experienced. Highly recommended for any rescue team."
    }
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section className="py-24 px-6 bg-gray-900 overflow-hidden" ref={containerRef}>
            <motion.div
                className="max-w-7xl mx-auto"
                style={{ y }}
            >
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400">
                        Don't just take our word for it - hear from the professionals we've worked with.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-8 relative"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                                    <motion.img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
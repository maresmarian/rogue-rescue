'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
    {
        question: "What types of rescue services do you provide?",
        answer: "We provide a comprehensive range of rescue services including Wildfire EMS, Technical Rescue, and High Angle Rescue operations. Our team is equipped to handle various emergency situations in challenging environments."
    },
    {
        question: "How can I register for training programs?",
        answer: "You can register for our training programs through our training calendar page or by contacting our team directly. We offer both scheduled group sessions and custom training programs."
    },
    {
        question: "What certifications do your trainers hold?",
        answer: "Our trainers hold various international certifications and have extensive field experience. All our instructors are certified in their respective specialties and maintain current qualifications."
    },
    {
        question: "Do you provide emergency response services 24/7?",
        answer: "Yes, we maintain a 24/7 emergency response team ready to deploy at a moment's notice for rescue operations and emergency situations."
    },
    {
        question: "What equipment do you use for rescue operations?",
        answer: "We use state-of-the-art rescue equipment that meets or exceeds industry standards. Our gear is regularly maintained and updated to ensure optimal performance and safety."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900">{item.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="p-6 pt-0 text-gray-600">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
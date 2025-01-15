// src/components/common/TrainingEventCard.tsx

'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import type { TrainingEvent } from '@/types';
import { formatDateInPT } from "@/lib/formatDate";

interface TrainingEventCardProps {
    event: TrainingEvent;
    onClick?: () => void;
}

export default function TrainingEventCard({ event, onClick }: TrainingEventCardProps) {

    return (
        <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
            onClick={onClick}
        >
            <div className="h-16 w-16 bg-orange-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-orange-500 font-bold">
                    {formatDateInPT(event.date, {day: 'numeric'})}
                </span>
                <span className="text-orange-500 text-sm">
                    {formatDateInPT(event.date, {month: 'short'})}
                </span>
            </div>

            <div className="flex-grow">
                <h4 className="font-bold text-gray-900">{event.title}</h4>
                <p className="text-gray-600">{event.location}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                        {event.category}
                    </span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{event.spots} spots</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">${event.price}</span>
                </div>
            </div>

            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
        </motion.div>
    );
}
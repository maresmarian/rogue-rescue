// src/components/training/CalendarModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { TrainingEvent } from '@/types';
import Link from 'next/link';

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
    events: TrainingEvent[];
}

export default function CalendarModal({ isOpen, onClose, events }: CalendarModalProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Calendar helper functions
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    // Group events by date
    const eventsByDate = events.reduce((acc, event) => {
        const dateKey = event.date.toISOString().split('T')[0];
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(event);
        return acc;
    }, {} as Record<string, TrainingEvent[]>);

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDayOfMonth = getFirstDayOfMonth(currentDate);
        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-32" />);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const dateKey = date.toISOString().split('T')[0];
            const dayEvents = eventsByDate[dateKey] || [];

            days.push(
                <div
                    key={day}
                    className="border border-gray-200 p-2 min-h-[8rem] relative group hover:bg-gray-50 transition-colors"
                >
                    <span className="text-sm text-gray-500">{day}</span>

                    {dayEvents.length > 0 && (
                        <div className="mt-1 space-y-1">
                            {dayEvents.map((event) => (
                                <Link
                                    key={event.id}
                                    href={`/training/${event.slug}?date=${dateKey}`}
                                    className="block"
                                >
                                    <div className="bg-orange-100 text-orange-800 text-xs p-1 rounded truncate hover:bg-orange-200 transition-colors">
                                        {event.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return days;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-2xl shadow-xl w-full max-w-6xl"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Training Calendar
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={prevMonth}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <span className="text-lg font-medium">
                      {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </span>
                                        <button
                                            onClick={nextMonth}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            {/* Calendar header */}
                            <div className="grid grid-cols-7 gap-px mb-2">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                    <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-px bg-gray-200">
                                {renderCalendar()}
                            </div>

                            {/* Legend */}
                            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-orange-100 rounded" />
                                    <span>Training Available</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
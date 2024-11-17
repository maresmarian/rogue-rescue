'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getUpcomingEvents } from '@/data/training';
import { useEffect, useState } from 'react';
import type { TrainingEvent } from '@/types';
import CalendarModal from './CalendarModal';

interface CalendarProps {
    className?: string;
    limit?: number;
}

export default function TrainingCalendar({ className = '', limit }: CalendarProps) {
    const [events, setEvents] = useState<TrainingEvent[]>([]);
    const [showCalendarModal, setShowCalendarModal] = useState(false);

    useEffect(() => {
        const upcomingEvents = getUpcomingEvents();
        setEvents(upcomingEvents);
    }, []);

    const displayEvents = limit ? events.slice(0, limit) : events;

    return (
        <>
            <div className={`bg-white rounded-2xl p-8 ${className}`}>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Upcoming Training</h3>
                    <button
                        onClick={() => setShowCalendarModal(true)}
                        className="text-sm text-orange-500 cursor-pointer flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        <motion.span
                            whileHover={{x: 5}}
                            className="text-sm text-orange-500 cursor-pointer flex items-center gap-1"
                        >
                            View All
                            <ArrowRight className="w-4 h-4"/>
                        </motion.span>
                    </button>
                </div>

                <div className="space-y-6">
                    {displayEvents.length === 0 ? (
                        <p className="text-gray-600 text-center py-4">
                            No upcoming training sessions scheduled.
                    </p>
                ) : (
                    displayEvents.map((event) => (
                        <Link
                            key={event.id}
                            href={`/training/${event.slug}?date=${event.date.toISOString().split('T')[0]}`}
                        >
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                                <div className="h-16 w-16 bg-orange-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-bold">
                    {new Date(event.date).getDate()}
                  </span>
                                    <span className="text-orange-500 text-sm">
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
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
                        </Link>
                    ))
                )}
            </div>
            </div>

            <CalendarModal
                isOpen={showCalendarModal}
                onClose={() => setShowCalendarModal(false)}
                events={events}
            />
        </>
    );
}
'use client';

import { Users, Award, Calendar } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import StatCard from '@/components/common/StatCard';
import TrainingEventCard from '@/components/common/TrainingEventCard';
import { TRAINING_EVENTS } from '@/lib/constants';

export default function Training() {
    return (
        <section className="py-24 px-6 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle
                            title="Professional Training Programs"
                            subtitle="Comprehensive training programs designed to prepare professionals for challenging rescue scenarios."
                            light
                        />

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <StatCard
                                icon={Users}
                                value="500+"
                                label="Trained Professionals"
                            />
                            <StatCard
                                icon={Award}
                                value="15+"
                                label="Training Programs"
                            />
                        </div>

                        <div className="flex gap-4">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center gap-2">
                                View Calendar <Calendar className="w-5 h-5" />
                            </button>
                            <button className="bg-gray-800 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all border border-gray-700 hover:border-gray-600">
                                Request Training
                            </button>
                        </div>
                    </div>

                    {/* Training Preview Card */}
                    <div className="bg-white rounded-2xl p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Upcoming Training</h3>
                            <span className="text-sm text-orange-500">View All</span>
                        </div>

                        <div className="space-y-6">
                            {TRAINING_EVENTS.map((event, index) => (
                                <TrainingEventCard key={index} event={event} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
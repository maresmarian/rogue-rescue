// src/training/[slug]/loading.tsx

import BaseTemplate from '@/components/layout/BaseTemplate';

export default function Loading() {
    return (
        <BaseTemplate>
            <div className="relative h-[60vh] min-h-[500px] bg-gray-900 animate-pulse" />

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content Skeleton */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="h-8 bg-gray-200 rounded-md w-1/3 animate-pulse" />
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                                <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
                            </div>
                        </div>

                        {/* Sidebar Skeleton */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="h-10 bg-gray-200 rounded-md w-1/3 mb-6 animate-pulse" />
                                <div className="space-y-4 mb-6">
                                    <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
                                    <div className="h-6 bg-gray-200 rounded-lg w-2/3 animate-pulse" />
                                </div>
                                <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BaseTemplate>
    );
}
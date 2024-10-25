'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    if (pathname === '/') return null;

    return (
        <div className="bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center py-4 text-sm">
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <Home className="w-4 h-4" />
                    </Link>

                    {paths.map((path, index) => {
                        const href = `/${paths.slice(0, index + 1).join('/')}`;
                        const isLast = index === paths.length - 1;
                        const label = path.split('-').map(word =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');

                        return (
                            <div key={path} className="flex items-center">
                                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                                {isLast ? (
                                    <span className="text-orange-500 font-medium">{label}</span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
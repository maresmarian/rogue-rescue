'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface ImageLoaderProps {
    src: string;
    alt: string;
    fill?: boolean;
    priority?: boolean;
    className?: string;
    sizes?: string;
}

export default function ImageLoader({
                                        src,
                                        alt,
                                        fill = false,
                                        priority = false,
                                        className = "",
                                        sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    }: ImageLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative ${fill ? 'h-full' : ''} ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                priority={priority}
                sizes={sizes}
                className={`duration-700 ease-in-out ${
                    isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
                } object-cover`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}
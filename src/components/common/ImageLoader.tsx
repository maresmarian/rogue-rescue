// src/components/common/ImageLoader.tsx
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
    height?: number;
    width?: number;
}

export default function ImageLoader({
                                        src,
                                        alt,
                                        fill,
                                        priority,
                                        className,
                                        height = 400,  // default height
                                        width = 600    // default width
                                    }: ImageLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative ${fill ? 'h-full w-full' : ''} ${className}`}
             style={{ minHeight: fill ? '100%' : height }}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                </div>
            )}
            {fill ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    className="object-cover"
                    onLoad={() => setIsLoading(false)}
                    sizes="100vw"
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    priority={priority}
                    className="object-cover w-full h-full"
                    onLoad={() => setIsLoading(false)}
                />
            )}
        </div>
    );
}
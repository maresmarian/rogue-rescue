interface ImageLoaderProps {
    src: string;
    width?: number;
    quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return `${basePath}${src}?w=${width || 'auto'}&q=${quality || 75}`;
}
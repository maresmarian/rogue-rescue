// src/app/training/[slug]/loading.tsx
export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-gray-600">Loading course...</div>
        </div>
    );
}
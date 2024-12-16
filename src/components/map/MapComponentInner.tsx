// src/components/map/MapComponentInner.tsx
'use client';

import { useEffect, useRef } from 'react';
import { CONTACT_INFO } from '@/data';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

export default function MapComponentInner() {
    const mapRef = useRef<HTMLDivElement>(null);
    const { coordinates } = CONTACT_INFO.address;
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Create custom marker icon using Lucide
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                   </div>`,
            iconSize: [0, 0] // Size is handled by the div
        });

        // Initialize map with interactions enabled
        mapInstanceRef.current = L.map(mapRef.current, {
            zoomControl: true,
            dragging: true,
            touchZoom: true,
            doubleClickZoom: true,
            scrollWheelZoom: true,
            boxZoom: true
        }).setView([coordinates.lat, coordinates.lng], 15);

        // Add clean style tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '©OpenStreetMap, ©CartoDB',
            maxZoom: 19
        }).addTo(mapInstanceRef.current);

        // Create the marker with custom icon and popup
        const marker = L.marker([coordinates.lat, coordinates.lng], { icon: customIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup(`
                <div class="text-center">
                    <strong class="block mb-2">Rogue Rescue</strong>
                    <a href="https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}" 
                       target="_blank" 
                       class="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition-colors"
                    >
                        Open in Maps
                    </a>
                </div>
            `);

        // Make the whole map clickable to open Google Maps
        mapInstanceRef.current.on('click', () => {
            window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`, '_blank');
        });

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }
        };
    }, []);

    return (
        <div className="w-full h-[400px] relative rounded-xl overflow-hidden">
            <div ref={mapRef} className="h-full w-full" />
            {/* Add styles for custom marker */}
            <style jsx global>{`
                .custom-marker {
                    transition: transform 0.2s;
                }
                .custom-marker:hover {
                    transform: scale(1.1);
                }
                .leaflet-popup-content-wrapper {
                    border-radius: 1rem;
                    padding: 0.5rem;
                }
                .leaflet-popup-tip {
                    display: none;
                }
            `}</style>
        </div>
    );
}
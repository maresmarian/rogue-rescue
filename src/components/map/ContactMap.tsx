// src/components/map/ContactMap.tsx
'use client';

import { useEffect, useRef } from 'react';
import { CONTACT_INFO } from '@/data';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

// This will only render on client-side
const MapComponent = dynamic(() => import('./MapComponentInner'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 h-[400px] flex flex-col items-center justify-center">
      <MapPin className="w-12 h-12 text-orange-500 mb-4" />
      <div className="text-center">
        <h3 className="font-medium text-gray-900 mb-2">Loading Map...</h3>
        <p className="text-gray-600">
          {CONTACT_INFO.address.street}
          <br />
          {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
          {CONTACT_INFO.address.zip}
        </p>
      </div>
    </div>
  ),
});

export default function ContactMap() {
  return <MapComponent />;
}

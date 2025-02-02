'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const References = () => {
  const references = [
    {
      name: 'National Park Service',
      project: 'Technical Rescue Training Program',
      year: '2023',
      image: '/images/references/nps.jpg',
    },
    {
      name: 'Search & Rescue Teams',
      project: 'High Angle Rescue Certification',
      year: '2023',
      image: '/images/references/sar.jpg',
    },
    {
      name: 'Fire Departments',
      project: 'Wildland Fire Response Training',
      year: '2022',
      image: '/images/references/fire.jpg',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">References</h2>
          <p className="text-gray-600">
            Trusted by leading organizations in rescue and emergency services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={reference.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={reference.image}
                  alt={reference.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reference.name}
                </h3>
                <p className="text-gray-600 mb-2">{reference.project}</p>
                <p className="text-sm text-gray-500">{reference.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;

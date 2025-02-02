'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PARTNERS } from '@/data';

const Partners = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600">
            Working with industry leaders to provide the best rescue solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <Link
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-48 h-32 flex items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600">{partner.relationship}</p>
                {partner.description && (
                  <p className="text-sm text-gray-500 mt-2">
                    {partner.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

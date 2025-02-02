// src/app/about/page.tsx
'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TeamSection from '@/components/sections/TeamSection';
import FAQ from '@/components/sections/FAQ';
import { ABOUT_STATS, ABOUT_VALUES, ABOUT_CONTENT } from '@/data/about';

export default function AboutPage() {
  return (
    <BaseTemplate>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <Image
            src={ABOUT_CONTENT.hero.image}
            alt={ABOUT_CONTENT.hero.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {ABOUT_CONTENT.hero.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              {ABOUT_CONTENT.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {ABOUT_CONTENT.mission.title}
              </h2>
              {ABOUT_CONTENT.mission.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {ABOUT_STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {ABOUT_CONTENT.values.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {ABOUT_CONTENT.values.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <FAQ />
    </BaseTemplate>
  );
}

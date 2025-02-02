'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Clock, Users, Target, Award } from 'lucide-react';
import FadeInWhenVisible from '@/components/effects/FadeInWhenVisible';

const FEATURES = [
  {
    icon: Shield,
    title: 'Expert Team',
    description:
      'Highly trained professionals with years of experience in rescue operations.',
  },
  {
    icon: Clock,
    title: '24/7 Response',
    description: 'Round-the-clock emergency response and support services.',
  },
  {
    icon: Target,
    title: 'Precision Training',
    description: 'State-of-the-art training programs tailored to your needs.',
  },
  {
    icon: Heart,
    title: 'Safety First',
    description: 'Maintaining the highest safety standards in all operations.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working together to ensure successful rescue missions.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'Internationally recognized certifications and standards.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Rogue Rescue
            </h2>
            <p className="text-gray-600">
              We combine expertise, advanced technology, and unwavering
              commitment to provide the best rescue and training services.
            </p>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

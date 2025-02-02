'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
}

export default function ParallaxSection({
  children,
  offset = 50,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

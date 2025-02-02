// src/data/training/courses/nfpa-rope-rescue-technician.ts
import { TrainingCourse } from '@/types';

export const NFPARopeRescueTechnician: TrainingCourse = {
  id: 'nfpa-rrt-001',
  title: 'NFPA Rope Rescue Technician',
  slug: 'nfpa-rope-rescue-technician',
  category: 'Technical',
  description: `Take your rescue capabilities to the next level with our advanced technician-level training program.

        Advanced Skills Development:
        • Complex mechanical advantage systems
        • Advanced anchor point configurations
        • High-line operations setup and management
        • Technical rope system analysis
        • Advanced patient packaging techniques

        Vertical Environment Operations:
        Our course operates in a completely vertical environment, challenging students to master advanced techniques in real-world conditions.

        Technical Competencies:
        • Vertical litter attendance techniques
        • Guideline operations for various scenarios
        • High-line rescue methods
        • Advanced belay systems
        • Complex rope system management

        Leadership and Decision Making:
        • Risk assessment strategies
        • Team leadership development
        • Critical decision-making scenarios
        • Advanced safety management
        • Rescue scene organization

        Professional Development:
        This technician-level certification represents the highest standard in rope rescue operations. Successful completion demonstrates advanced proficiency and leadership capabilities in technical rescue operations.`,
  schedule: [
    {
      day: 1,
      focus: 'Advanced Systems and Complex Anchors',
      icon: 'Construction',
    },
    {
      day: 2,
      focus: 'Vertical Environment Operations',
      icon: 'MountainSnow',
    },
    {
      day: 3,
      focus: 'High Lines and Advanced Rigging',
      icon: 'Link2',
    },
    {
      day: 4,
      focus: 'Advanced Scenarios and Leadership',
      icon: 'Trophy',
    },
  ],
  duration: '4 days',
  price: 1100,
  level: 'Advanced',
  dates: [
    {
      date: '2025-04-04T12:00:00Z',
      spotsAvailable: 15,
    },
    {
      date: '2025-11-06T12:00:00Z',
      spotsAvailable: 15,
    },
  ],
  maxParticipants: 15,
  prerequisites: [
    'NFPA Rope Rescue Operations certification',
    'Physical fitness requirement',
    'Documented rope rescue experience',
    'Comfort working in vertical environments',
    'Previous rescue team experience',
  ],
  includes: [
    'Advanced rope rescue equipment',
    'NFPA compliant course materials',
    'Technician-level certification upon completion',
    'Daily refreshments',
    'Professional certification documentation',
    'Access to instructor expertise and networking opportunities',
    'Post-course support and resources',
  ],
  image: '/images/services/high-angle-rescue-2.jpg',
  location: 'Central Point, OR',
  type: 'technical',
  spotsAvailable: 15,
};

// src/data/training/courses/index.ts
import { NFPARopeRescueOperations } from './nfpa-rope-rescue-operations';
import { NFPARopeRescueTechnician } from './nfpa-rope-rescue-technician';
import { RopeRescueAdvancedTechnician } from './rope-rescue-advanced-technician';
import { PPEInspection } from './ppe-inspection';

// Export individual courses
export * from './nfpa-rope-rescue-operations';
export * from './nfpa-rope-rescue-technician';
export * from './rope-rescue-advanced-technician';
export * from './ppe-inspection';

export const TRAINING_COURSES = [
  NFPARopeRescueOperations,
  NFPARopeRescueTechnician,
  RopeRescueAdvancedTechnician,
  PPEInspection,
] as const;

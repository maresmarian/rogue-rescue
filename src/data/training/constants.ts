// src/data/training/constants.ts
export const TRAINING_LEVELS = [
    'Beginner',
    'Intermediate',
    'Advanced'
] as const;

export const TRAINING_CATEGORIES = [
    'Technical',
    'Medical',
    'Rescue',
    'Certification'
] as const;

export const TRAINING_STATS = {
    totalCourses: 15,
    totalTrainingDays: 60,
    professionals: 30,
    totalStudents: 100,
    averageRating: 4.9,
    successRate: 98,
    coursesCompleted: 250
} as const;
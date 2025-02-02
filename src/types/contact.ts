export interface EmergencyContact {
  name: string;
  description: string;
  number: {
    display: string;
    value: string;
  };
  priority: number; // Lower number = higher priority
  isPublicService?: boolean;
}

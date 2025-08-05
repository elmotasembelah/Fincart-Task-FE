export enum ServiceCategory {
  THERAPY = "Therapy",
  NUTRITION = "Nutrition",
  COACHING = "Coaching",
  FITNESS = "Fitness",
}

export interface ServiceProvider {
  id: string;
  fullName: string;
  email: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  provider: ServiceProvider;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

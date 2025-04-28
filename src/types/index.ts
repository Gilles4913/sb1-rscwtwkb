export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  image: string;
  sector: string;
}

export interface Product {
  id: number;
  name: string;
  category: 'indoor' | 'outdoor' | 'interactive';
  description: string;
  features: string[];
  image: string;
  specs: {
    [key: string]: string;
  };
}

export interface SectorInfo {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  testimonials: Testimonial[];
}
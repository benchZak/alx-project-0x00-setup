export interface PillProps {
  title: string;
}

export interface CardProps {
  title?: string;
  location?: string;
  price?: number;
  rating?: number;
  beds?: number;
  baths?: number;
  guests?: string;
  amenities?: string[];
}

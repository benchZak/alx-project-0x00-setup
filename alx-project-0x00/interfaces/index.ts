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

export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md'| 'rounded-lg' | 'rounded-full';
  styles?: string;  // Added this line
  className?: string;
  onClick?: () => void;
}

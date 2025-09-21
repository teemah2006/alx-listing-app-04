import { StaticImageData } from "next/image";

interface CardProps {
  
}

export interface PillProps {
    title: string;
    active?: boolean;
    onClick?: () => void;
}

interface ButtonProps {
  text?: string;
  color?: string;
}

export interface PropertyProps {
    name: string,
    address: {
      state: string,
      city: string,
      country: string
    },
    rating: number,
    category: string[],
    price: number,
    offers: {
      bed: string,
      shower: string,
      occupants: string
    },
    image: StaticImageData | string,
    discount: string
  }


export type { CardProps, ButtonProps };
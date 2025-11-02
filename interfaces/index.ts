import { StaticImageData } from "next/image";



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
    discount: string,
    description: string,
    reviews: {
      name: string,
      avatar: StaticImageData | string,
      rating: number,
      comment: string,
    }[]
  }

export interface reviewProps{
      name: string,
      avatar: StaticImageData | string,
      rating: number,
      comment: string,
}

interface CardProps {
  property: PropertyProps,
}

export type { CardProps, ButtonProps };
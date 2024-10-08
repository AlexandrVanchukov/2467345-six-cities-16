import { City } from './city';

export type OfferFull = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: City;
  location: Location;
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}

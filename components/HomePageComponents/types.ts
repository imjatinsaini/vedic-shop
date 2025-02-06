// import { Ionicons } from '@expo/vector-icons';

// export type Product = {
//   id: string;
//   name: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice?: number;
//   discountLabel?: string;
//   image: string;
//   description?: string;
//   category?: string;
//   subCategories?: string[];
//   stock?: number;
//   shop?: string;
//   features?: string[];
//   images?: string[];
// };

// export type Category = {
//   id: string;
//   title: string;
//   icon: keyof typeof Ionicons.glyphMap;
// };

// export type PopularItem = {
//   id: string;
//   name: string;
//   discountLabel: string;
// };


// components/HomePageComponents/types.ts

// export interface Product {
//   _id: string;                // The MongoDB _id
//   productId: string;
//   productName: string;
//   productCategory: {
//     id: string;
//     name: string;
//   };
//   description: string;
//   originalPrice: number;
//   discountedPrice: number;
//   subCategories?: string[];
//   stock: number;
//   productImages: string[];
//   productRating: number;
//   productReview: string;      // e.g. "10"
//   // ... any other fields from your backend
// }


// types.ts


export interface Product {
  _id: string;
  productId: string;
  productName: string;
  productCategory: {
    id: string;
    name: string;
  };
  description: string;
  originalPrice: number;
  discountedPrice: number;
  subCategories: string[];
  stock: number;
  productColors: string[];
  availableSizes: string[];
  dimensions: {
    length: { value: number; unit: string };
    width: { value: number; unit: string };
    height: { value: number; unit: string };
    weight: { value: number; unit: string };
  };
  productImages: string[];
  addedOn: string;
  shop: {
    id: string;
    name: string;
  };
  isActive: boolean;
  isFeatured: boolean;
  isApproved: boolean;
  productRating: number;
  productReview: string;
  __v: number;
  productBasePrice: number;
}

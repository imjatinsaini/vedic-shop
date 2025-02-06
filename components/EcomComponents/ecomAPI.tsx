// products.ts (or useProducts.ts)
import { useState, useEffect } from "react";

// Define the shape of your product data based on the API response
// (Extend or modify this as needed to match your actual data)
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
  productColors: string[]; // or custom type if needed
  availableSizes: string[]; // or custom type if needed
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
  // Add or remove fields based on your actual API response
}

// This custom hook fetches the products from your backend
export function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // Make the GET request to your backend
        const response = await fetch("http://192.168.1.42:5001/fetch-all-products");
        if (!response.ok) {
          throw new Error(`Network response was not OK (status ${response.status})`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong while fetching products.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { products, loading, error };
}

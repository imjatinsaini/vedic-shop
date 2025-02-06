import React from 'react';
import ProductSection from './ProductSection';

// ----- TYPES -----
type Product = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  discountLabel?: string;
  image: string;
};

type NewTrendingProductsProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const NewTrendingProducts: React.FC<NewTrendingProductsProps> = ({ data, onAddToCart, onBuyNow }) => {
  return (
    <ProductSection
      title="New Trending Products"
      data={data}
      bgColor="bg-blue-50"
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
    />
  );
};

export default NewTrendingProducts;

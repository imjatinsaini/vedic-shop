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

type WoodenTempleProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const WoodenTemple: React.FC<WoodenTempleProps> = ({ data, onAddToCart, onBuyNow }) => {
  return (
    <ProductSection
      title="Wooden Temple"
      data={data}
      bgColor="bg-orange-100"
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
    />
  );
};

export default WoodenTemple;

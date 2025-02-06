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

type RudrakshaProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const Rudraksha: React.FC<RudrakshaProps> = ({ data, onAddToCart, onBuyNow }) => {
  return (
    <ProductSection
      title="Rudraksha"
      data={data}
      bgColor="bg-purple-200"
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
    />
  );
};

export default Rudraksha;

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

type IdolsProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const Idols: React.FC<IdolsProps> = ({ data, onAddToCart, onBuyNow }) => {
  return (
    <ProductSection
      title="Idols"
      data={data}
      bgColor="bg-orange-50"
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
    />
  );
};

export default Idols;

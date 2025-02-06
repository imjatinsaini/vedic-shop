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

type VastuSastraProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const VastuSastra: React.FC<VastuSastraProps> = ({ data, onAddToCart, onBuyNow }) => {
  return (
    <ProductSection
      title="Vastu Shastra"
      data={data}
      bgColor="bg-blue-200"
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
    />
  );
};

export default VastuSastra;

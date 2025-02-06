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

type RecommendForYouProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const RecommendForYou: React.FC<RecommendForYouProps> = ({ data, onAddToCart, onBuyNow }) => {
  return (
    <ProductSection
      title="Recommended for you"
      data={data}
      bgColor="bg-white"
      showViewAll={true}
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
    />
  );
};

export default RecommendForYou;

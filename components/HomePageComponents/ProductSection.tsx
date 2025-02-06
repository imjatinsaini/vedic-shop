// components/ProductSection.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import ProductCard from './ProductCard';
import { Product } from './types';

type ProductSectionProps = {
  title: string;
  data: Product[];
  bgColor?: string;
  showViewAll?: boolean;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  data,
  bgColor = 'bg-white',
  showViewAll = false,
  onAddToCart,
  onBuyNow,
}) => {
  return (
    <View className={`w-full mt-4 px-4 py-3 ${bgColor} rounded-lg`}>
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold text-gray-800">{title}</Text>
        {showViewAll && (
          <Link href={`/products/${title.toLowerCase().replace(/\s+/g, '')}`}>
            <Text className="text-sm font-semibold text-blue-500">More</Text>
          </Link>
        )}
      </View>
      {/* Horizontal Scroll of products */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductSection;


// components/ProductSection.tsx


// import React from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { Link } from 'expo-router';
// import ProductCard from './ProductCard';
// import { Product } from './types';

// type ProductSectionProps = {
//   title: string;
//   data: Product[];
//   bgColor?: string;
//   showViewAll?: boolean;
//   onAddToCart: (product: Product) => void;
//   onBuyNow: (product: Product) => void;
// };

// const ProductSection: React.FC<ProductSectionProps> = ({
//   title,
//   data,
//   bgColor = 'bg-white',
//   showViewAll = false,
//   onAddToCart,
//   onBuyNow,
// }) => {
//   return (
//     <View className={`w-full mt-4 px-4 py-3 ${bgColor} rounded-lg`}>
//       <View className="flex-row justify-between items-center mb-3">
//         <Text className="text-lg font-bold text-gray-800">{title}</Text>
//         {showViewAll && (
//           <Link href={`/products/${title.toLowerCase().replace(/\s+/g, '')}`}>
//             <Text className="text-sm font-semibold text-blue-500">More</Text>
//           </Link>
//         )}
//       </View>
//       {/* Horizontal Scroll of products */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {data.map((item) => (
//           <ProductCard
//             key={item._id}
//             product={item}
//             onBuyNow={onBuyNow}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default ProductSection;

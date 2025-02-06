// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// // ----- TYPES -----
// type Product = {
//   id: string;
//   name: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice?: number;
//   discountLabel?: string;
//   image: string;
// };

// type ProductCardProps = {
//   product: Product;
//   onAddToCart: (product: Product) => void;
//   onBuyNow: (product: Product) => void;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onBuyNow }) => {
//   return (
//     <View className="bg-white mr-4 rounded-lg shadow-sm w-56 p-3">
//       <View className="relative">
//         {product.discountLabel && (
//           <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
//             <Text className="text-white text-xs">{product.discountLabel}</Text>
//           </View>
//         )}
//         <Image
//           source={{ uri: product.image }}
//           className="w-full h-32 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
//       <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
//         {product.name}
//       </Text>
//       <View className="flex-row items-center mt-1">
//         <Ionicons name="star" size={14} color="gold" />
//         <Text className="text-xs text-gray-500 ml-1">
//           {product.rating} ({product.reviews}+)
//         </Text>
//       </View>
//       <View className="flex-row items-center mt-1">
//         <Text className="text-base font-bold text-gray-900 mr-2">
//           ${product.price}
//         </Text>
//         {product.oldPrice && (
//           <Text className="text-xs line-through text-gray-400">
//             ${product.oldPrice}
//           </Text>
//         )}
//       </View>
//       {/* ACTION BUTTONS */}
//       <View className="mt-2 flex-row justify-between">
//         <TouchableOpacity
//           onPress={() => onBuyNow(product)}
//           className="bg-blue-600 rounded-md px-3 py-2 mr-1 flex-1 items-center"
//         >
//           <Text className="text-white text-sm font-medium">Buy Now</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => onAddToCart(product)}
//           className="bg-blue-500 rounded-md px-3 py-2 ml-1 flex-1 items-center"
//         >
//           <Text className="text-white text-sm font-medium">Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductCard;


// components/ProductCard.tsx


// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Product } from './types';
// import { useRouter } from 'expo-router';

// type ProductCardProps = {
//   product: Product;
//   onAddToCart: (product: Product) => void;
//   onBuyNow: (product: Product) => void;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onBuyNow }) => {
//   const router = useRouter();

//   const handlePress = () => {
//     router.push(`/product/${product.id}`);
//   };

//   return (
//     <TouchableOpacity 
//       className="bg-white mr-4 rounded-lg shadow-sm w-56  p-3" 
//       onPress={handlePress}
//       accessible={true}
//       accessibilityLabel={`View details for ${product.name}`}
//     >
//       <View className="relative">
//         {product.discountLabel && (
//           <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
//             <Text className="text-white text-xs">{product.discountLabel}</Text>
//           </View>
//         )}
//         <Image
//           source={{ uri: product.image }}
//           className="w-full h-32 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
//       <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
//         {product.name}
//       </Text>
//       <View className="flex-row items-center mt-1">
//         <Ionicons name="star" size={14} color="gold" />
//         <Text className="text-xs text-gray-500 ml-1">
//           {product.rating} ({product.reviews}+)
//         </Text>
//       </View>
//       <View className="flex-row items-center mt-1">
//         <Text className="text-base font-bold text-gray-900 mr-2">
//           ${product.price}
//         </Text>
//         {product.oldPrice && (
//           <Text className="text-xs line-through text-gray-400">
//             ${product.oldPrice}
//           </Text>
//         )}
//       </View>
//       {/* ACTION BUTTONS */}
//       <View className="mt-2 flex-row justify-between">
//         <TouchableOpacity
//           onPress={() => onBuyNow(product)}
//           className="bg-blue-600 rounded-md px-3 py-2 mr-1 flex-1 items-center"
//         >
//           <Text className="text-white text-sm font-medium">Buy Now</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => onAddToCart(product)}
//           className="bg-blue-500 rounded-md px-3 py-2 ml-1 flex-1 items-center"
//         >
//           <Text className="text-white text-sm font-medium">Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductCard;


 // components/ProductCard.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from './types';
import { useRouter } from 'expo-router';
import { useCart } from '@/app/contexts/CartContext';

type ProductCardProps = {
  product: Product;
  onBuyNow: (product: Product) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuyNow }) => {
  const router = useRouter();
  const { addItem } = useCart();

  const handlePress = () => {
    // Navigate to the product detail page
    router.push(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    addItem(product);
    // Optionally, you can show an alert or toast here
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-white mr-4  rounded-lg shadow-sm w-44 p-3"
      accessible={true}
      accessibilityLabel={`View details for ${product.name}`}
    >
      <View className="relative">
        {product.discountLabel && (
          <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
            <Text className="text-white text-xs">{product.discountLabel}</Text>
          </View>
        )}
        <Image
          source={{ uri: product.image }}
          className="w-full h-32 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
        {product.name}
      </Text>
      <View className="flex-row items-center mt-1">
        <Ionicons name="star" size={14} color="gold" />
        <Text className="text-xs text-gray-500 ml-1">
          {product.rating} ({product.reviews}+)
        </Text>
      </View>
      <View className="flex-row items-center mt-1">
        <Text className="text-base font-bold text-gray-900 mr-2">
          ${product.price}
        </Text>
        {product.oldPrice && (
          <Text className="text-xs line-through text-gray-400">
            ${product.oldPrice}
          </Text>
        )}
      </View>
      {/* ACTION BUTTONS */}
      <View className="mt-2 flex-row justify-between">
       
        <TouchableOpacity
          onPress={handleAddToCart}
          className="bg-blue-500 rounded-md px-3 py-2 ml-1 flex-1 items-center"
        >
          <Text className="text-white text-sm font-medium">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;


// // components/ProductCard.tsx
// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Product } from './types';
// import { useRouter } from 'expo-router';
// import { useCart } from '@/app/contexts/CartContext';

// type ProductCardProps = {
//   product: Product;
//   onBuyNow: (product: Product) => void;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, onBuyNow }) => {
//   const router = useRouter();
//   const { addItem } = useCart();

//   // Navigate to the product detail page when the card is pressed
//   const handlePress = () => {
//     router.push(`/product/${product._id}`);
//   };

//   // Add the product to cart
//   const handleAddToCart = () => {
//     addItem(product);
//     // Optionally, show an alert or toast here
//   };

//   // Safely get the first product image
//   const productImage = product.productImages && product.productImages.length > 0
//     ? product.productImages[0]
//     : 'https://via.placeholder.com/300'; // fallback image if none

//   // If you need to compute a discount label, you can do so here:
//   // e.g. "50% OFF" if (originalPrice - discountedPrice)/originalPrice * 100 is 50, etc.
//   // We'll omit for now since your API data does not provide 'discountLabel'.

//   return (
//     <TouchableOpacity
//       onPress={handlePress}
//       className="bg-white mr-4 rounded-lg shadow-sm w-44 p-3"
//       accessible={true}
//       accessibilityLabel={`View details for ${product.productName}`}
//     >
//       <View className="relative">
//         {/* If you had a discount label, you could compute and display it here */}
//         <Image
//           source={{ uri: productImage }}
//           className="w-full h-32 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
//       <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
//         {product.productName}
//       </Text>
//       <View className="flex-row items-center mt-1">
//         <Ionicons name="star" size={14} color="gold" />
//         <Text className="text-xs text-gray-500 ml-1">
//           {product.productRating} ({product.productReview}+)
//         </Text>
//       </View>
//       <View className="flex-row items-center mt-1">
//         <Text className="text-base font-bold text-gray-900 mr-2">
//           ₹{product.discountedPrice}
//         </Text>
//         {product.originalPrice && (
//           <Text className="text-xs line-through text-gray-400">
//             ₹{product.originalPrice}
//           </Text>
//         )}
//       </View>
//       {/* ACTION BUTTONS */}
//       <View className="mt-2 flex-row justify-between">
//         {/* Buy Now is optional in your card */}
//         {/* 
//         <TouchableOpacity
//           onPress={() => onBuyNow(product)}
//           className="bg-blue-600 rounded-md px-3 py-2 mr-1 flex-1 items-center"
//         >
//           <Text className="text-white text-sm font-medium">Buy Now</Text>
//         </TouchableOpacity>
//         */}
//         <TouchableOpacity
//           onPress={handleAddToCart}
//           className="bg-blue-500 rounded-md px-3 py-2 ml-1 flex-1 items-center"
//         >
//           <Text className="text-white text-sm font-medium">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductCard;

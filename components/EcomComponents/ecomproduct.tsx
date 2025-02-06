// // ecomproduct.tsx
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// // Define the product type based on your API (adjust the fields if needed)
// export interface EcomProductProps {
//   _id: string;
//   productId: string;
//   productName: string;
//   productCategory: { id: string; name: string };
//   description: string;
//   originalPrice: number;
//   discountedPrice: number;
//   subCategories: string[];
//   stock: number;
//   productColors: string[];
//   availableSizes: string[];
//   dimensions: {
//     length: { value: number; unit: string };
//     width: { value: number; unit: string };
//     height: { value: number; unit: string };
//     weight: { value: number; unit: string };
//   };
//   productImages: string[];
//   addedOn: string;
//   shop: { id: string; name: string };
//   isActive: boolean;
//   isFeatured: boolean;
//   isApproved: boolean;
//   productRating: number;
//   productReview: string;
//   __v: number;
//   productBasePrice: number;
// }

// const EcomProduct: React.FC<EcomProductProps> = (props) => {
//   const {
//     _id,
//     productId,
//     productName,
//     originalPrice,
//     discountedPrice,
//     productImages,
//     stock,
//     productRating,
//   } = props;
  
//   const router = useRouter();

//   // Calculate discount percentage if applicable
//   const discount =
//     originalPrice > discountedPrice
//       ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
//       : 0;

//   // Use the first image if available; otherwise, show a placeholder
//   const defaultImage =
//     productImages && productImages.length > 0
//       ? productImages[0]
//       : 'https://via.placeholder.com/150';

//   const handlePress = () => {
//     // Navigate to the product detail page (adjust the route as needed)
//     router.push(`/product/${productId}`);
//   };

//   const handleAddToCart = () => {
//     if (stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is out of stock.');
//       return;
//     }
//     // You can integrate your cart logic here.
//     Alert.alert('Added to Cart', `${productName} has been added to your cart.`);
//   };

//   return (
//     <TouchableOpacity
//       onPress={handlePress}
//       className="bg-white mr-4  border-gray-200 rounded-lg shadow-sm  w-44 p-3"
//       accessible={true}
//       accessibilityLabel={`View details for ${productName}`}
//     >
//       <View className="relative">
//         {discount > 0 && (
//           <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
//             <Text className="text-white text-xs">{discount}% Off</Text>
//           </View>
//         )}
//         <Image
//           source={{ uri: defaultImage }}
//           className="w-full h-32 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
//       <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
//         {productName}
//       </Text>
//       <View className="flex-row items-center mt-1">
//         <Ionicons name="star" size={14} color="gold" />
//         <Text className="text-xs text-gray-500 ml-1">
//           {productRating.toFixed(1)}
//         </Text>
//       </View>
//       <View className="flex-row items-center mt-1">
//         <Text className="text-base font-bold text-gray-900 mr-2">
//           ${discountedPrice.toFixed(2)}
//         </Text>
//         {originalPrice > discountedPrice && (
//           <Text className="text-xs line-through text-gray-400">
//             ${originalPrice.toFixed(2)}
//           </Text>
//         )}
//       </View>
//       <TouchableOpacity
//         onPress={handleAddToCart}
//         className="mt-2 bg-blue-500 rounded-md px-3 py-2 items-center"
//       >
//         <Text className="text-white text-sm font-medium">Add to Cart</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// export default EcomProduct;



// // ecomproduct.tsx
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// // Define the product type based on your API (adjust the fields if needed)
// export interface EcomProductProps {
//   _id: string;
//   productId: string;
//   productName: string;
//   productCategory: { id: string; name: string };
//   description: string;
//   originalPrice: number;
//   discountedPrice: number;
//   subCategories: string[];
//   stock: number;
//   productColors: string[];
//   availableSizes: string[];
//   dimensions: {
//     length: { value: number; unit: string };
//     width: { value: number; unit: string };
//     height: { value: number; unit: string };
//     weight: { value: number; unit: string };
//   };
//   productImages: string[];
//   addedOn: string;
//   shop: { id: string; name: string };
//   isActive: boolean;
//   isFeatured: boolean;
//   isApproved: boolean;
//   productRating: number;
//   productReview: string;
//   __v: number;
//   productBasePrice: number;
// }

// const EcomProduct: React.FC<EcomProductProps> = (props) => {
//   const {
//     _id,
//     productName,
//     originalPrice,
//     discountedPrice,
//     productImages,
//     stock,
//     productRating,
//   } = props;
  
//   const router = useRouter();

//   // Calculate discount percentage if applicable
//   const discount =
//     originalPrice > discountedPrice
//       ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
//       : 0;

//   // Use the first image if available; otherwise, show a placeholder
//   const defaultImage =
//     productImages && productImages.length > 0
//       ? productImages[0]
//       : 'https://via.placeholder.com/150';

//   const handlePress = () => {
//     // Use _id for unique identification when navigating to product detail page
//     router.push(`/product/${_id}`);
//   };

//   const handleAddToCart = () => {
//     if (stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is out of stock.');
//       return;
//     }
//     // You can integrate your cart logic here.
//     Alert.alert('Added to Cart', `${productName} has been added to your cart.`);
//   };

//   return (
//     <TouchableOpacity
//       onPress={handlePress}
//       className="bg-white mr-4 border-gray-200 rounded-lg shadow-sm w-44 p-3"
//       accessible={true}
//       accessibilityLabel={`View details for ${productName}`}
//     >
//       <View className="relative">
//         {discount > 0 && (
//           <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
//             <Text className="text-white text-xs">{discount}% Off</Text>
//           </View>
//         )}
//         <Image
//           source={{ uri: defaultImage }}
//           className="w-full h-32 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
//       <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
//         {productName}
//       </Text>
//       <View className="flex-row items-center mt-1">
//         <Ionicons name="star" size={14} color="gold" />
//         <Text className="text-xs text-gray-500 ml-1">
//           {productRating.toFixed(1)}
//         </Text>
//       </View>
//       <View className="flex-row items-center mt-1">
//         <Text className="text-base font-bold text-gray-900 mr-2">
//           ${discountedPrice.toFixed(2)}
//         </Text>
//         {originalPrice > discountedPrice && (
//           <Text className="text-xs line-through text-gray-400">
//             ${originalPrice.toFixed(2)}
//           </Text>
//         )}
//       </View>
//       <TouchableOpacity
//         onPress={handleAddToCart}
//         className="mt-2 bg-blue-500 rounded-md px-3 py-2 items-center"
//       >
//         <Text className="text-white text-sm font-medium">Add to Cart</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// export default EcomProduct;



// ecomproduct.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCart } from '@/app/contexts/CartContext';

export interface EcomProductProps {
  _id: string;
  productId: string;
  productName: string;
  productCategory: { id: string; name: string };
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
  shop: { id: string; name: string };
  isActive: boolean;
  isFeatured: boolean;
  isApproved: boolean;
  productRating: number;
  productReview: string;
  __v: number;
  productBasePrice: number;
}

const EcomProduct: React.FC<EcomProductProps> = (props) => {
  const {
    _id,
    productName,
    originalPrice,
    discountedPrice,
    productImages,
    stock,
    productRating,
  } = props;
  
  const router = useRouter();
  const { addItem } = useCart();

  // Calculate discount percentage if applicable
  const discount =
    originalPrice > discountedPrice
      ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
      : 0;

  // Use the first image if available; otherwise, show a placeholder
  const defaultImage =
    productImages && productImages.length > 0
      ? productImages[0]
      : 'https://via.placeholder.com/150';

  const handlePress = () => {
    // Use _id for unique identification when navigating to the product detail page
    router.push(`/product/${_id}`);
  };

  const handleAddToCart = () => {
    if (stock <= 0) {
      Alert.alert('Out of Stock', 'This product is out of stock.');
      return;
    }
    // Add product to cart with a default quantity of 1.
    addItem({ ...props }, 1);
    Alert.alert('Added to Cart', `${productName} has been added to your cart.`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-white mr-4 border-gray-200 rounded-lg shadow-sm w-44 p-3"
      accessible={true}
      accessibilityLabel={`View details for ${productName}`}
    >
      <View className="relative">
        {discount > 0 && (
          <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
            <Text className="text-white text-xs">{discount}% Off</Text>
          </View>
        )}
        <Image
          source={{ uri: defaultImage }}
          className="w-full h-32 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
        {productName}
      </Text>
      <View className="flex-row items-center mt-1">
        <Ionicons name="star" size={14} color="gold" />
        <Text className="text-xs text-gray-500 ml-1">
          {productRating.toFixed(1)}
        </Text>
      </View>
      <View className="flex-row items-center mt-1">
        <Text className="text-base font-bold text-gray-900 mr-2">
          ${discountedPrice.toFixed(2)}
        </Text>
        {originalPrice > discountedPrice && (
          <Text className="text-xs line-through text-gray-400">
            ${originalPrice.toFixed(2)}
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={handleAddToCart}
        className="mt-2 bg-blue-500 rounded-md px-3 py-2 items-center"
      >
        <Text className="text-white text-sm font-medium">Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


export default EcomProduct;

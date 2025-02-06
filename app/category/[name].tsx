// // app/category/[name].tsx
// import React from 'react';
// import { View, Text, ScrollView, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useGlobalSearchParams, useRouter} from 'expo-router';
// import { Product } from '@/components/HomePageComponents/types';
// import { productsData } from '../data/products';
// import ProductCard from '@/components/HomePageComponents/ProductCard';

// const CategoryScreen: React.FC = () => {
//   // Extract the dynamic parameter from the URL (e.g. "rudraksha")
//   const { name } = useGlobalSearchParams<{ name: string }>();
//   const router = useRouter();

//   // Filter products by category. Ensure you convert both to lower case for a case‑insensitive match.
//   const filteredProducts: Product[] = productsData.filter((product) => {
//     return product.category?.toLowerCase() === name?.toLowerCase();
//   });

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold capitalize">{name}</Text>
//         <TouchableOpacity onPress={() => Alert.alert('Menu', 'Menu pressed')}>
//           <Ionicons name="menu" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Main Content */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         {filteredProducts.length > 0 ? (
//           <View className="flex-wrap flex-row justify-between">
//             {filteredProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 // For demonstration, these handlers show alerts.
//                 // Replace them with your actual add-to-cart and buy-now logic.
//                 onAddToCart={(p) =>
//                   Alert.alert('Added to Cart', `${p.name} has been added to your cart.`)
//                 }
//                 onBuyNow={(p) =>
//                   Alert.alert('Buy Now', `Proceeding to buy ${p.name}.`)
//                 }
//               />
//             ))}
//           </View>
//         ) : (
//           <View className="items-center justify-center mt-10">
//             <Text className="text-gray-500">No products found in this category.</Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CategoryScreen;



// // app/category/[name].tsx
// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useGlobalSearchParams, useRouter,  } from 'expo-router';
//  // Adjust the path as needed
// import SubCategoryFilter from '../../components/filters/SubCategoryFilter';
// import PriceFilter from '../../components/filters/PriceFilter';
// import SortByFilter, { SortOption } from '../../components/filters/SortByFilter';
// import { Product } from '@/components/HomePageComponents/types';
// import ProductCard from '@/components/HomePageComponents/ProductCard';
// import { productsData } from '../data/products';

// const CategoryScreen: React.FC = () => {
//   // Extract the dynamic parameter from the URL (e.g. "rudraksha")
//   const { name } = useGlobalSearchParams<{ name: string }>();
//   const router = useRouter();

//   // Base filtering: products matching the selected category (case-insensitive)
//   let filteredProducts: Product[] = productsData.filter(
//     (product) => product.category?.toLowerCase() === name?.toLowerCase()
//   );

//   // --- Filter States ---
//   const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
//   const [sortOption, setSortOption] = useState<SortOption>('newest');

//   // Apply subcategory filter if any are selected
//   if (selectedSubCategories.length > 0) {
//     filteredProducts = filteredProducts.filter((product) => {
//       if (product.subCategories && product.subCategories.length > 0) {
//         const lowerSubCats = product.subCategories.map((sc) => sc.toLowerCase());
//         return selectedSubCategories.some((sel) =>
//           lowerSubCats.includes(sel.toLowerCase())
//         );
//       }
//       return false;
//     });
//   }

//   // Apply price filter
//   filteredProducts = filteredProducts.filter(
//     (product) => product.price >= priceRange.min && product.price <= priceRange.max
//   );

//   // Apply sort option
//   let sortedProducts = [...filteredProducts];
//   if (sortOption === 'lowToHigh') {
//     sortedProducts.sort((a, b) => a.price - b.price);
//   } else if (sortOption === 'highToLow') {
//     sortedProducts.sort((a, b) => b.price - a.price);
//   } else if (sortOption === 'discounted') {
//     sortedProducts.sort((a, b) => {
//       const discountA = a.oldPrice ? a.oldPrice - a.price : 0;
//       const discountB = b.oldPrice ? b.oldPrice - b.price : 0;
//       return discountB - discountA;
//     });
//   }
//   // For 'newest', you could sort by a date field if available; otherwise, assume default order.

//   // Collect unique subcategories available within this category for the filter
//   const availableSubCategories = Array.from(
//     new Set(filteredProducts.flatMap((product) => product.subCategories || []))
//   );

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold capitalize">{name}</Text>
//         <TouchableOpacity onPress={() => Alert.alert('Menu', 'Menu pressed')}>
//           <Ionicons name="menu" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Filters */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         <SubCategoryFilter
//           subCategories={availableSubCategories}
//           onChange={(selected) => setSelectedSubCategories(selected)}
//         />
//         <PriceFilter
//           minPrice={0}
//           maxPrice={1000}
//           onChange={(range) => setPriceRange(range)}
//         />
//         <SortByFilter onChange={(option) => setSortOption(option)} />

//         {/* Product List */}
//         {sortedProducts.length > 0 ? (
//           <View className="flex-wrap flex-row justify-between mt-4">
//             {sortedProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onAddToCart={(p) =>
//                   Alert.alert('Added to Cart', `${p.name} has been added to your cart.`)
//                 }
//                 onBuyNow={(p) =>
//                   Alert.alert('Buy Now', `Proceeding to buy ${p.name}.`)
//                 }
//               />
//             ))}
//           </View>
//         ) : (
//           <View className="items-center justify-center mt-10">
//             <Text className="text-gray-500">
//               No products found with the selected filters.
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CategoryScreen;



// // app/category/[name].tsx
// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useGlobalSearchParams, useRouter } from 'expo-router';
// import SubCategoryFilter from '../../components/filters/SubCategoryFilter';
// import PriceFilter from '../../components/filters/PriceFilter';
// import SortByFilter, { SortOption } from '../../components/filters/SortByFilter';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { useFetchProducts } from '@/components/EcomComponents/ecomAPI';

// const CategoryScreen: React.FC = () => {
//   // Extract the dynamic parameter (e.g. "rudraksha", "vastu shastra", etc.)
//   const { name } = useGlobalSearchParams<{ name: string }>();
//   const router = useRouter();

//   // Fetch products from the backend using your custom hook
//   const { products, loading, error } = useFetchProducts();

//   // Base filtering: products matching the selected category (case-insensitive)
//   let filteredProducts = products.filter(
//     (product) =>
//       product.productCategory?.name.toLowerCase() === name?.toLowerCase()
//   );

//   // --- Filter States ---
//   const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
//   const [sortOption, setSortOption] = useState<SortOption>('newest');

//   // Apply sub-category filter if any are selected
//   if (selectedSubCategories.length > 0) {
//     filteredProducts = filteredProducts.filter((product) => {
//       if (product.subCategories && product.subCategories.length > 0) {
//         const lowerSubCats = product.subCategories.map((sc) => sc.toLowerCase());
//         return selectedSubCategories.some((sel) =>
//           lowerSubCats.includes(sel.toLowerCase())
//         );
//       }
//       return false;
//     });
//   }

//   // Apply price filter using discountedPrice
//   filteredProducts = filteredProducts.filter(
//     (product) =>
//       product.discountedPrice >= priceRange.min &&
//       product.discountedPrice <= priceRange.max
//   );

//   // Apply sort option
//   let sortedProducts = [...filteredProducts];
//   if (sortOption === 'lowToHigh') {
//     sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
//   } else if (sortOption === 'highToLow') {
//     sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
//   } else if (sortOption === 'discounted') {
//     sortedProducts.sort((a, b) => {
//       const discountA = a.originalPrice - a.discountedPrice;
//       const discountB = b.originalPrice - b.discountedPrice;
//       return discountB - discountA;
//     });
//   }
//   // For 'newest', you can add additional logic based on a date field (if available)

//   // Collect unique sub-categories available within this category for filtering
//   const availableSubCategories = Array.from(
//     new Set(filteredProducts.flatMap((product) => product.subCategories || []))
//   );

//   // Show loading or error states if needed
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }
//   if (error) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Error: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold capitalize">{name}</Text>
//         <TouchableOpacity onPress={() => Alert.alert('Menu', 'Menu pressed')}>
//           <Ionicons name="menu" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Filters and Product List */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         <SubCategoryFilter
//           subCategories={availableSubCategories}
//           onChange={(selected) => setSelectedSubCategories(selected)}
//         />
//         <PriceFilter
//           minPrice={0}
//           maxPrice={10000}
//           onChange={(range) => setPriceRange(range)}
//         />
//         <SortByFilter onChange={(option) => setSortOption(option)} />

//         {/* Product List */}
//         {sortedProducts.length > 0 ? (
//           <View className="flex-wrap flex-row justify-between mt-4">
//             {sortedProducts.map((product) => (
//               <EcomProduct key={product._id} {...product} />
//             ))}
//           </View>
//         ) : (
//           <View className="items-center justify-center mt-10">
//             <Text className="text-gray-500">
//               No products found with the selected filters.
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CategoryScreen;



// app/category/[name].tsx

// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useGlobalSearchParams, useRouter } from 'expo-router';
// import SubCategoryFilter from '../../components/filters/SubCategoryFilter';
// import PriceFilter from '../../components/filters/PriceFilter';
// import SortByFilter, { SortOption } from '../../components/filters/SortByFilter';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { useFetchProducts } from '@/components/EcomComponents/ecomAPI';


// const normalizeCategory = (cat: string | undefined): string => {
//   if (!cat) return '';
//   let normalized = cat.toLowerCase().trim();
//   // Remove trailing "s" if exists (for plural cases)
//   if (normalized.endsWith('s')) {
//     normalized = normalized.slice(0, -1);
//   }
//   return normalized;
// };

// const CategoryScreen: React.FC = () => {
//   // Extract the dynamic parameter (e.g. "rudraksha", "vastu-shastra", etc.)
//   const { name } = useGlobalSearchParams<{ name: string }>();
//   const router = useRouter();

//   // Fetch products from the backend using your custom hook
//   const { products, loading, error } = useFetchProducts();

//   // Base filtering: products matching the selected category (using normalized values)
//   let filteredProducts = products.filter(
//     (product) =>
//       normalizeCategory(product.productCategory?.name) === normalizeCategory(name)
//   );

  

//   // --- Filter States ---
//   const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
//   const [sortOption, setSortOption] = useState<SortOption>('newest');

//   // Apply sub-category filter if any are selected
//   if (selectedSubCategories.length > 0) {
//     filteredProducts = filteredProducts.filter((product) => {
//       if (product.subCategories && product.subCategories.length > 0) {
//         const lowerSubCats = product.subCategories.map((sc) => sc.toLowerCase());
//         return selectedSubCategories.some((sel) =>
//           lowerSubCats.includes(sel.toLowerCase())
//         );
//       }
//       return false;
//     });
//   }

//   // Apply price filter using discountedPrice
//   filteredProducts = filteredProducts.filter(
//     (product) =>
//       product.discountedPrice >= priceRange.min &&
//       product.discountedPrice <= priceRange.max
//   );

//   // Apply sort option
//   let sortedProducts = [...filteredProducts];
//   if (sortOption === 'lowToHigh') {
//     sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
//   } else if (sortOption === 'highToLow') {
//     sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
//   } else if (sortOption === 'discounted') {
//     sortedProducts.sort((a, b) => {
//       const discountA =
//         a.originalPrice > a.discountedPrice
//           ? ((a.originalPrice - a.discountedPrice) / a.originalPrice) * 100
//           : 0;
//       const discountB =
//         b.originalPrice > b.discountedPrice
//           ? ((b.originalPrice - b.discountedPrice) / b.originalPrice) * 100
//           : 0;
//       return discountB - discountA;
//     });
//   }
//   // For 'newest', you can add additional logic based on a date field (if available)

//   // Collect unique sub-categories available within this category for filtering
//   const availableSubCategories = Array.from(
//     new Set(filteredProducts.flatMap((product) => product.subCategories || []))
//   );

//   // Show loading or error states if needed
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }
//   if (error) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Error: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold capitalize">{name}</Text>
//         <TouchableOpacity onPress={() => Alert.alert('Menu', 'Menu pressed')}>
//           <Ionicons name="menu" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Filters and Product List */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         <SubCategoryFilter
//           subCategories={availableSubCategories}
//           onChange={(selected) => setSelectedSubCategories(selected)}
//         />
//         <PriceFilter
//           minPrice={0}
//           maxPrice={10000}
//           onChange={(range) => setPriceRange(range)}
//         />
//         <SortByFilter onChange={(option) => setSortOption(option)} />

//         {/* Product List */}
//         {sortedProducts.length > 0 ? (
//           <View className="flex-wrap flex-row justify-between mt-4">
//             {sortedProducts.map((product) => (
//               <EcomProduct key={product._id} {...product} />
//             ))}
//           </View>
//         ) : (
//           <View className="items-center justify-center mt-10">
//             <Text className="text-gray-500">
//               No products found with the selected filters.
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CategoryScreen;



// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useGlobalSearchParams, useRouter } from 'expo-router';
// import SubCategoryFilter from '../../components/filters/SubCategoryFilter';
// import PriceFilter from '../../components/filters/PriceFilter';
// import SortByFilter, { SortOption } from '../../components/filters/SortByFilter';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { useFetchProducts } from '@/components/EcomComponents/ecomAPI';

// // Updated normalization: also replace hyphens with spaces before comparison.
// const normalizeCategory = (cat: string | undefined): string => {
//   if (!cat) return '';
//   let normalized = cat.toLowerCase().trim();
//   // Replace hyphens with spaces (e.g. "temple-offerings" → "temple offerings")
//   normalized = normalized.replace(/-/g, ' ');
//   // Remove trailing "s" if it exists (e.g. "offerings" → "offering")
//   if (normalized.endsWith('s')) {
//     normalized = normalized.slice(0, -1);
//   }
//   return normalized;
// };

// const CategoryScreen: React.FC = () => {
//   // Extract the dynamic parameter (e.g. "rudraksha", "vastu-sastra", etc.)
//   const { name } = useGlobalSearchParams<{ name: string }>();
//   const router = useRouter();

//   // Fetch products from the backend using your custom hook
//   const { products, loading, error } = useFetchProducts();

//   // Base filtering: products matching the selected category (using normalized values)
//   let filteredProducts = products.filter(
//     (product) =>
//       normalizeCategory(product.productCategory?.name) === normalizeCategory(name)
//   );

//   // --- Filter States ---
//   const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });
//   const [sortOption, setSortOption] = useState<SortOption>('newest');

//   // Apply sub-category filter if any are selected
//   if (selectedSubCategories.length > 0) {
//     filteredProducts = filteredProducts.filter((product) => {
//       if (product.subCategories && product.subCategories.length > 0) {
//         const lowerSubCats = product.subCategories.map((sc) => sc.toLowerCase());
//         return selectedSubCategories.some((sel) =>
//           lowerSubCats.includes(sel.toLowerCase())
//         );
//       }
//       return false;
//     });
//   }

//   // Apply price filter using discountedPrice
//   filteredProducts = filteredProducts.filter(
//     (product) =>
//       product.discountedPrice >= priceRange.min &&
//       product.discountedPrice <= priceRange.max
//   );

//   // Apply sort option
//   let sortedProducts = [...filteredProducts];
//   if (sortOption === 'lowToHigh') {
//     sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
//   } else if (sortOption === 'highToLow') {
//     sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
//   } else if (sortOption === 'discounted') {
//     sortedProducts.sort((a, b) => {
//       const discountA =
//         a.originalPrice > a.discountedPrice
//           ? ((a.originalPrice - a.discountedPrice) / a.originalPrice) * 100
//           : 0;
//       const discountB =
//         b.originalPrice > b.discountedPrice
//           ? ((b.originalPrice - b.discountedPrice) / b.originalPrice) * 100
//           : 0;
//       return discountB - discountA;
//     });
//   }
//   // For 'newest', you can add additional logic based on a date field (if available)

//   // Collect unique sub-categories available within this category for filtering
//   const availableSubCategories = Array.from(
//     new Set(filteredProducts.flatMap((product) => product.subCategories || []))
//   );

//   // Show loading or error states if needed
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }
//   if (error) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Error: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold capitalize">{name}</Text>
//         <TouchableOpacity onPress={() => Alert.alert('cart', 'cart pressed')}>
//           <Ionicons name="cart-outline" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Filters and Product List */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         <SubCategoryFilter
//           subCategories={availableSubCategories}
//           onChange={(selected) => setSelectedSubCategories(selected)}
//         />
//         <PriceFilter
//           minPrice={0}
//           maxPrice={10000}
//           onChange={(range) => setPriceRange(range)}
//         />
//         <SortByFilter onChange={(option) => setSortOption(option)} />

//         {/* Product List */}
//         {sortedProducts.length > 0 ? (
//           <View className="flex-wrap flex-row gap-8 justify-center mt-4">
//             {sortedProducts.map((product) => (
//               <EcomProduct key={product._id} {...product} />
//             ))} 
//           </View>
//         ) : (
//           <View className="items-center justify-center mt-10">
//             <Text className="text-gray-500">
//               No products found with the selected filters.
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CategoryScreen;



// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useGlobalSearchParams, useRouter } from 'expo-router';
// import SubCategoryFilter from '../../components/filters/SubCategoryFilter';
// import PriceFilter from '../../components/filters/PriceFilter';
// import SortByFilter, { SortOption } from '../../components/filters/SortByFilter';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { useFetchProducts } from '@/components/EcomComponents/ecomAPI';
// import { useCart } from '@/app/contexts/CartContext'; // Added import for cart context

// // Updated normalization: also replace hyphens with spaces before comparison.
// const normalizeCategory = (cat: string | undefined): string => {
//   if (!cat) return '';
//   let normalized = cat.toLowerCase().trim();
//   // Replace hyphens with spaces (e.g. "temple-offerings" → "temple offerings")
//   normalized = normalized.replace(/-/g, ' ');
//   // Remove trailing "s" if it exists (e.g. "offerings" → "offering")
//   if (normalized.endsWith('s')) {
//     normalized = normalized.slice(0, -1);
//   }
//   return normalized;
// };

// const CategoryScreen: React.FC = () => {
//   // Extract the dynamic parameter (e.g. "rudraksha", "vastu-sastra", etc.)
//   const { name } = useGlobalSearchParams<{ name: string }>();
//   const router = useRouter();

//   // Fetch products from the backend using your custom hook
//   const { products, loading, error } = useFetchProducts();

//   // Get cart items from the cart context and compute the total count.
//   const { cartItems } = useCart();
//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   // Base filtering: products matching the selected category (using normalized values)
//   let filteredProducts = products.filter(
//     (product) =>
//       normalizeCategory(product.productCategory?.name) === normalizeCategory(name)
//   );

//   // --- Filter States ---
//   const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });
//   const [sortOption, setSortOption] = useState<SortOption>('newest');

//   // Apply sub-category filter if any are selected
//   if (selectedSubCategories.length > 0) {
//     filteredProducts = filteredProducts.filter((product) => {
//       if (product.subCategories && product.subCategories.length > 0) {
//         const lowerSubCats = product.subCategories.map((sc) => sc.toLowerCase());
//         return selectedSubCategories.some((sel) =>
//           lowerSubCats.includes(sel.toLowerCase())
//         );
//       }
//       return false;
//     });
//   }

//   // Apply price filter using discountedPrice
//   filteredProducts = filteredProducts.filter(
//     (product) =>
//       product.discountedPrice >= priceRange.min &&
//       product.discountedPrice <= priceRange.max
//   );

//   // Apply sort option
//   let sortedProducts = [...filteredProducts];
//   if (sortOption === 'lowToHigh') {
//     sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
//   } else if (sortOption === 'highToLow') {
//     sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
//   } else if (sortOption === 'discounted') {
//     sortedProducts.sort((a, b) => {
//       const discountA =
//         a.originalPrice > a.discountedPrice
//           ? ((a.originalPrice - a.discountedPrice) / a.originalPrice) * 100
//           : 0;
//       const discountB =
//         b.originalPrice > b.discountedPrice
//           ? ((b.originalPrice - b.discountedPrice) / b.originalPrice) * 100
//           : 0;
//       return discountB - discountA;
//     });
//   }
//   // For 'newest', you can add additional logic based on a date field (if available)

//   // Collect unique sub-categories available within this category for filtering
//   const availableSubCategories = Array.from(
//     new Set(filteredProducts.flatMap((product) => product.subCategories || []))
//   );

//   // Show loading or error states if needed
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }
//   if (error) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Error: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold capitalize">{name}</Text>
//         <TouchableOpacity 
//           onPress={() => router.push('/cart')}
//           className="relative"
//         >
//           <Ionicons name="cart-outline" size={24} color="black" />
//           {cartCount > 0 && (
//             <View className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 items-center justify-center">
//               <Text className="text-xs text-white">{cartCount}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>

//       {/* Filters and Product List */}
//       <ScrollView contentContainerStyle={{ padding: 16 }}>
//         <SubCategoryFilter
//           subCategories={availableSubCategories}
//           onChange={(selected) => setSelectedSubCategories(selected)}
//         />
//         <PriceFilter
//           minPrice={0}
//           maxPrice={10000}
//           onChange={(range) => setPriceRange(range)}
//         />
//         <SortByFilter onChange={(option) => setSortOption(option)} />

//         {/* Product List */}
//         {sortedProducts.length > 0 ? (
//           <View className="flex-wrap flex-row gap-8 justify-center mt-4">
//             {sortedProducts.map((product) => (
//               <EcomProduct key={product._id} {...product} />
//             ))} 
//           </View>
//         ) : (
//           <View className="items-center justify-center mt-10">
//             <Text className="text-gray-500">
//               No products found with the selected filters.
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CategoryScreen;


import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import SubCategoryFilter from '../../components/filters/SubCategoryFilter';
import PriceFilter from '../../components/filters/PriceFilter';
import SortByFilter, { SortOption } from '../../components/filters/SortByFilter';
import EcomProduct from '@/components/EcomComponents/ecomproduct';
import { useFetchProducts } from '@/components/EcomComponents/ecomAPI';
import { useCart } from '@/app/contexts/CartContext';

// Helper: normalization function
const normalizeCategory = (cat: string | undefined): string => {
  if (!cat) return '';
  let normalized = cat.toLowerCase().trim();
  normalized = normalized.replace(/-/g, ' '); // Replace hyphens with spaces
  if (normalized.endsWith('s')) {
    normalized = normalized.slice(0, -1); // Remove trailing "s"
  }
  return normalized;
};

const CategoryScreen: React.FC = () => {
  // Extract the dynamic parameters; 'name' is the main category and 'sub' (optional) is the subcategory to pre‑select.
  const { name, sub } = useGlobalSearchParams<{ name: string; sub?: string }>();
  const router = useRouter();

  // Fetch products and cart info.
  const { products, loading, error } = useFetchProducts();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Base filtering: products matching the selected category (using normalized values)
  let filteredProducts = products.filter(
    (product) =>
      normalizeCategory(product.productCategory?.name) === normalizeCategory(name)
  );

  // Initialize the subcategory filter state with the passed "sub" parameter (if any)
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(sub ? [sub] : []);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  // Apply sub-category filter if any are selected
  if (selectedSubCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      if (product.subCategories && product.subCategories.length > 0) {
        const lowerSubCats = product.subCategories.map((sc) => sc.toLowerCase());
        return selectedSubCategories.some((sel) =>
          lowerSubCats.includes(sel.toLowerCase())
        );
      }
      return false;
    });
  }

  // Apply price filter using discountedPrice
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.discountedPrice >= priceRange.min &&
      product.discountedPrice <= priceRange.max
  );

  // Apply sort option
  let sortedProducts = [...filteredProducts];
  if (sortOption === 'lowToHigh') {
    sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortOption === 'highToLow') {
    sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
  } else if (sortOption === 'discounted') {
    sortedProducts.sort((a, b) => {
      const discountA =
        a.originalPrice > a.discountedPrice
          ? ((a.originalPrice - a.discountedPrice) / a.originalPrice) * 100
          : 0;
      const discountB =
        b.originalPrice > b.discountedPrice
          ? ((b.originalPrice - b.discountedPrice) / b.originalPrice) * 100
          : 0;
      return discountB - discountA;
    });
  }
  // (For 'newest' you can add additional sorting logic if needed)

  // Show loading or error states if needed
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between mt-14 px-4 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold capitalize">{name}</Text>
        <TouchableOpacity 
          onPress={() => router.push('/cart')}
          className="relative"
        >
          <Ionicons name="cart-outline" size={24} color="black" />
          {cartCount > 0 && (
            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 items-center justify-center">
              <Text className="text-xs text-white">{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Filters and Product List */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <SubCategoryFilter
          subCategories={Array.from(
            new Set(filteredProducts.flatMap((product) => product.subCategories || []))
          )}
          onChange={(selected) => setSelectedSubCategories(selected)}
        />
        <PriceFilter
          minPrice={0}
          maxPrice={10000}
          onChange={(range) => setPriceRange(range)}
        />
        <SortByFilter onChange={(option) => setSortOption(option)} />

        {/* Product List */}
        {sortedProducts.length > 0 ? (
          <View className="flex-wrap flex-row gap-8 justify-center mt-4">
            {sortedProducts.map((product) => (
              <EcomProduct key={product._id} {...product} />
            ))} 
          </View>
        ) : (
          <View className="items-center justify-center mt-10">
            <Text className="text-gray-500">
              No products found with the selected filters.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
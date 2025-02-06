// import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
// import React from 'react';

// export default function HomeScreen() {
//   return (
//     <ScrollView className="flex-1 bg-white px-4 pt-16 py-2">
//       {/* Header */}
//       <View className="flex-row justify-between items-center">
//         <Text className="text-lg font-bold text-gray-800">Welcome to Vedic Shop</Text>
//         <TouchableOpacity>
//           <Image
//             source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png' }}
//             className="w-6 h-6"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Subheading */}
//       <Text className="text-2xl font-bold text-gray-800 mt-2">Let's Explore Our Products</Text>

//       {/* Search Bar */}
//       <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mt-4">
//         <Image
//           source={{ uri: 'https://img.icons8.com/ios/50/000000/search.png' }}
//           className="w-5 h-5 mr-2"
//         />
//         <TextInput
//           placeholder="Search everything..."
//           className="flex-1 text-gray-700"
//         />
//       </View>

//       {/* Category Section */}
//       <View className="mt-6">
//         <View className="flex-row justify-between items-center">
//           <Text className="text-lg font-bold text-gray-800">Category</Text>
//           <TouchableOpacity>
//             <Text className="text-blue-500">More</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-4">
//           {['Vastu Shastra', 'Rudraksha', 'Idols', 'Temple Offering'].map((category, index) => (
//             <View key={index} className="items-center mr-4">
//               <View className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
//                 <Image
//                   source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/box.png' }} // Replace with actual icons
//                   className="w-10 h-10"
//                 />
//               </View>
//               <Text className="text-sm mt-2 text-gray-700">{category}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Recommended Products */}
//       <View className="mt-6">
//         <Text className="text-lg font-bold text-gray-800">Recommended for you</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-4">
//           {[1, 2, 3, 4].map((item) => (
//             <View
//               key={item}
//               className="w-40 h-48 bg-white rounded-lg shadow-sm mr-4 p-3"
//             >
//               <Image
//                 source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual product image
//                 className="w-full h-20 rounded-lg"
//               />
//               <Text className="text-sm font-bold mt-2 text-gray-700">
//                 Product {item}
//               </Text>
//               <Text className="text-xs text-gray-500">⭐ 4.5</Text>
//               <Text className="text-lg font-bold text-gray-800">$210.00</Text>
//               <View className="flex-row justify-between mt-2">
//                 <TouchableOpacity className="bg-blue-500 px-3 py-1 rounded-lg">
//                   <Text className="text-white text-sm">Buy</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity className="border border-blue-500 px-3 py-1 rounded-lg">
//                   <Text className="text-blue-500 text-sm">Wishlist</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Popular Products */}
//       <View className="mt-6">
//         <Text className="text-lg font-bold text-gray-800">Popular Products</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-4">
//           {[1, 2, 3].map((item) => (
//             <View
//               key={item}
//               className="w-40 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg mr-4 p-3"
//             >
//               <Text className="text-white text-sm font-bold">Popular Item {item}</Text>
//               <Text className="text-white text-xs mt-2">Min. 60% Off</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Trending Products */}
//       <View className="mt-6">
//         <Text className="text-lg font-bold text-gray-800">New Trending Products</Text>
//         <View className="grid grid-cols-2 gap-4 mt-4">
//           {[1, 2, 3, 4].map((item) => (
//             <View
//               key={item}
//               className="w-full h-32 bg-blue-100 rounded-lg p-3"
//             >
//               <Text className="text-blue-800 text-sm font-bold">Trending Item {item}</Text>
//               <Text className="text-blue-600 text-xs mt-2">Min. 60% Off</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }



// // import CategoriesBar from '@/components/component/CategoriesBar';
// // import Header from '@/components/component/Header';
// // import SearchBar from '@/components/component/SearchBar';
// // import Section from '@/components/component/Section';
// // import React from 'react';
// // import { ScrollView, View } from 'react-native';

// // export default function HomeScreen() {
// //   const dummyProducts = [
// //     {
// //       id: 1,
// //       title: 'White Mod with Shankh',
// //       price: '$210.00',
// //       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
// //     },
// //     {
// //       id: 2,
// //       title: 'Wooden Bracelet',
// //       price: '$210.00',
// //       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
// //     },
// //     // Add more products as needed
// //   ];

// //   return (
// //     <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
// //       {/* Header */}
// //       <Header />

// //       {/* Search Bar */}
// //       <SearchBar />

// //       {/* Categories Bar */}
// //       <CategoriesBar />

// //       {/* Sections */}
// //       <Section title="Recommended for You" products={dummyProducts} />
// //       <Section title="Popular Products" products={dummyProducts} />
// //       <Section title="New Trending Products" products={dummyProducts} />
// //       <Section title="Rudraksha" products={dummyProducts} />
// //     </ScrollView>
// //   );
// // }



// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// export default function HomeScreen() {
//   const renderProductCard = (title, price, image, isNew, isDiscount) => (
//     <View className="w-44 bg-white p-2 rounded-xl shadow m-2">
//       <Image
//         source={{ uri: image }}
//         className="h-28 w-full rounded-lg"
//         resizeMode="cover"
//       />
//       <Text className="mt-2 text-sm font-bold">{title}</Text>
//       {isDiscount && <Text className="text-xs text-red-500">60% OFF</Text>}
//       {isNew && <Text className="text-xs text-green-500">NEW</Text>}
//       <Text className="text-base font-bold text-gray-800">${price}</Text>
//       <TouchableOpacity className="mt-2 bg-blue-500 rounded-md py-1 items-center">
//         <Text className="text-white text-sm">Buy</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
//         <Text className="text-lg font-bold">VEDIC SHOP</Text>
//         <TouchableOpacity>
//           <Feather name="menu" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Search */}
//       <View className="flex-row items-center bg-gray-100 p-2 mx-4 mt-2 rounded-md">
//         <Feather name="search" size={20} color="gray" />
//         <Text className="ml-2 text-gray-500">Search everything...</Text>
//       </View>

//       {/* Categories */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 px-4">
//         {['Vastu', 'Rudraksha', 'Spiritual', 'Temple', 'Idols'].map((category, index) => (
//           <TouchableOpacity key={index} className="items-center mr-4">
//             <View className="h-12 w-12 bg-gray-100 rounded-full items-center justify-center">
//               <Feather name="box" size={20} color="black" />
//             </View>
//             <Text className="text-sm mt-1">{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Main Content */}
//       <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
//         {/* Recommended for You */}
//         <View className="px-4">
//           <View className="flex-row justify-between items-center">
//             <Text className="text-lg font-bold">Recommended for You</Text>
//             <Text className="text-blue-500">More</Text>
//           </View>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
//             {renderProductCard('White Motif with Shankh', '210.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', false, true)}
//             {renderProductCard('Wooden Bracelet', '210.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', false, true)}
//           </ScrollView>
//         </View>

//         {/* Popular Products */}
//         <View className="px-4 mt-6">
//           <Text className="text-lg font-bold">Popular Products</Text>
//           <View className="flex-row flex-wrap justify-between mt-2">
//             {renderProductCard('Golden Hanuman Idol', '210.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', true, false)}
//             {renderProductCard('Maha Mrityunjay Kavach', '210.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', false, false)}
//           </View>
//         </View>

//         {/* Other Categories */}
//         {['Rudraksha', 'Idols', 'Vastu Shastra', 'Wooden Temple'].map((section, index) => (
//           <View key={index} className="px-4 mt-6">
//             <View className="flex-row justify-between items-center">
//               <Text className="text-lg font-bold">{section}</Text>
//               <Text className="text-blue-500">More</Text>
//             </View>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
//               {renderProductCard(`${section} Item 1`, '200.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', false, true)}
//               {renderProductCard(`${section} Item 2`, '250.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', false, false)}
//               {renderProductCard(`${section} Item 3`, '300.00', 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg', true, false)}
//             </ScrollView>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }


// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   TextInput, 
//   TouchableOpacity, 
//   Image 
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // or any other icon library

// export default function HomeScreen() {
//   // Dummy data
//   const categories = [
//     { id: '1', title: 'Vastu Shastra', icon: 'home' },
//     { id: '2', title: 'Rudraksha', icon: 'flower' },
//     { id: '3', title: 'Spiritual Idols', icon: 'heart' },
//     { id: '4', title: 'Temple Offering', icon: 'flame' },
//     { id: '5', title: 'Temple Cleaning', icon: 'water' },
//   ];

//   const recommendedProducts = [
//     {
//       id: '1',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     {
//       id: '2',
//       name: 'Wooden Bracelet',
//       rating: 4.2,
//       reviews: 1345,
//       price: 210,
//       oldPrice: 300,
//       discountLabel: '30% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     {
//       id: '3',
//       name: 'Golden Hanuman Idol',
//       rating: 4.8,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 280,
//       discountLabel: '25% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     {
//       id: '4',
//       name: 'Maha Mrityunjay Kavach',
//       rating: 4.9,
//       reviews: 145,
//       price: 210,
//       oldPrice: 310,
//       discountLabel: 'New',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//   ];

//   const popularProducts = [
//     { id: '1', name: 'Idols', discountLabel: 'Min. 60% Off' },
//     { id: '2', name: 'Necklaces', discountLabel: 'Min. 60% Off' },
//     { id: '3', name: 'Bracelets', discountLabel: 'Min. 60% Off' },
//   ];

//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     // For demo: just push into state or do some logic
//     setCartItems([...cartItems, product]);
//     console.log('Added to cart:', product.name);
//   };

//   const renderCategoryItem = (cat) => {
//     return (
//       <TouchableOpacity key={cat.id} className="mr-4 items-center">
//         <View className="w-12 h-12 bg-gray-100 rounded-full justify-center items-center mb-1">
//           <Ionicons name={cat.icon} size={22} color="#333" />
//         </View>
//         <Text className="text-xs text-gray-600">{cat.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderProductCard = (product) => {
//     return (
//       <View key={product.id} className="bg-white mr-4 rounded-lg  shadow-sm w-56 p-3">
//         <View className="relative">
//           {product.discountLabel && (
//             <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
//               <Text className="text-white text-xs">{product.discountLabel}</Text>
//             </View>
//           )}
//           <Image 
//             source={{ uri: product.image }}
//             className="w-full h-32 rounded-lg"
//             resizeMode="cover"
//           />
//         </View>
//         <Text className="mt-2 font-bold text-gray-700" numberOfLines={1}>
//           {product.name}
//         </Text>
//         <View className="flex-row items-center mt-1">
//           <Ionicons name="star" size={14} color="gold" />
//           <Text className="text-xs text-gray-500 ml-1">{product.rating} ({product.reviews}+)</Text>
//         </View>
//         <View className="flex-row items-center mt-1">
//           <Text className="text-base font-bold text-gray-900 mr-2">${product.price}</Text>
//           {product.oldPrice && (
//             <Text className="text-xs line-through text-gray-400">${product.oldPrice}</Text>
//           )}
//         </View>
//         <TouchableOpacity
//           onPress={() => handleAddToCart(product)}
//           className="mt-2 bg-blue-500 rounded-md px-4 py-2 items-center"
//         >
//           <Text className="text-white font-medium">Buy</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderHorizontalProductSection = (title, data, bgColor = 'bg-white', showViewAll = false) => {
//     return (
//       <View className={`w-full mt-4 px-4 py-3 ${bgColor} rounded-lg`}>
//         <View className="flex-row justify-between items-center mb-3">
//           <Text className="text-lg font-bold text-gray-800">{title}</Text>
//           {showViewAll && (
//             <TouchableOpacity>
//               <Text className="text-sm font-semibold text-blue-500">More</Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Horizontal Scroll of products */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {data.map((item) => renderProductCard(item))}
//         </ScrollView>
//       </View>
//     );
//   };

//   return (
//     <View className="flex-1 bg-white">
//       {/* HEADER */}
//       <View className="flex-row items-center mt-16 justify-between px-4 py-4 bg-white shadow">
//         {/* Left: Logo + Title */}
//         <View className="flex-row items-center">
//           <Image 
//             source={{ uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg' }} 
//             className="w-8 h-8 rounded-full mr-2"
//           />
//           <Text className="text-xl font-bold text-gray-800">VEDIC SHOP</Text>
//         </View>
//         {/* Right: Menu Icon */}
//         <TouchableOpacity>
//           <Ionicons name="menu" size={24} color="#333" />
//         </TouchableOpacity>
//       </View>

//       {/* MAIN SCROLL */}
//       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//         {/* SEARCH BAR */}
//         <View className="px-4 mt-2 mb-4">
//           <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-2">
//             <Ionicons name="search" size={18} color="#666" />
//             <TextInput
//               placeholder="Search everything..."
//               className="ml-2 flex-1 text-sm text-gray-700"
//             />
//           </View>
//         </View>

//         {/* CATEGORY LIST (Horizontal) */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           className="px-4 pb-2"
//         >
//           {categories.map((cat) => renderCategoryItem(cat))}
//         </ScrollView>

//         {/* RECOMMENDED FOR YOU */}
//         {renderHorizontalProductSection('Recommended for you', recommendedProducts, 'bg-white', true)}

//         {/* POPULAR PRODUCTS */}
//         {/* You could also do a simpler horizontal display with minimal data */}
//         <View className="w-full px-4 py-3 mt-4 bg-orange-200 rounded-lg">
//           <Text className="text-lg font-bold text-gray-800 mb-3">Popular Products</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {popularProducts.map((item) => (
//               <View key={item.id} className="mr-4 bg-white rounded-lg p-4 w-32 items-center">
//                 <Image
//                   source={{ uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg' }}
//                   className="w-20 h-20 mb-2 rounded-lg"
//                 />
//                 <Text className="font-semibold text-gray-700">{item.name}</Text>
//                 <Text className="text-sm text-orange-600 mt-1">{item.discountLabel}</Text>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         {/* New Trending Products */}
//         {renderHorizontalProductSection('New Trending Products', recommendedProducts, 'bg-blue-50')}

//         {/* Rudraksha Section */}
//         {renderHorizontalProductSection('Rudraksha', recommendedProducts, 'bg-purple-200')}

//         {/* Idols Section */}
//         {renderHorizontalProductSection('Idols', recommendedProducts, 'bg-orange-50')}

//         {/* Vastu Shastra Section */}
//         {renderHorizontalProductSection('Vastu Shastra', recommendedProducts, 'bg-blue-200')}

//         {/* Wooden Temple Section */}
//         {renderHorizontalProductSection('Wooden Temple', recommendedProducts, 'bg-orange-100')}
//       </ScrollView>
//     </View>
//   );
// }






// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
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

// type Category = {
//   id: string;
//   title: string;
//   // Ionicon name must be one of the known icon glyphs
//   icon: keyof typeof Ionicons.glyphMap;
// };

// type PopularItem = {
//   id: string;
//   name: string;
//   discountLabel: string;
// };

// // ----- PRODUCT CARD COMPONENT -----
// type ProductCardProps = {
//   product: Product;
//   onAddToCart: (product: Product) => void;
//   onBuyNow: (product: Product) => void;
// };

// function ProductCard({ product, onAddToCart, onBuyNow }: ProductCardProps) {
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
// }

// // ----- HOME SCREEN -----
// export default function HomeScreen() {
//   // Dummy data
//   const categories: Category[] = [
//     { id: '1', title: 'Vastu Shastra', icon: 'home' },
//     { id: '2', title: 'Rudraksha', icon: 'flower' },
//     { id: '3', title: 'Spiritual Idols', icon: 'heart' },
//     { id: '4', title: 'Temple Offering', icon: 'flame' },
//     { id: '5', title: 'Temple Cleaning', icon: 'water' },
//   ];

//   const recommendedProducts: Product[] = [
//     {
//       id: '1',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     {
//       id: '2',
//       name: 'Wooden Bracelet',
//       rating: 4.2,
//       reviews: 1345,
//       price: 210,
//       oldPrice: 300,
//       discountLabel: '30% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     {
//       id: '3',
//       name: 'Golden Hanuman Idol',
//       rating: 4.8,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 280,
//       discountLabel: '25% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     {
//       id: '4',
//       name: 'Maha Mrityunjay Kavach',
//       rating: 4.9,
//       reviews: 145,
//       price: 210,
//       oldPrice: 310,
//       discountLabel: 'New',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//   ];

//   const popularItems: PopularItem[] = [
//     { id: '1', name: 'Idols', discountLabel: 'Min. 60% Off' },
//     { id: '2', name: 'Necklaces', discountLabel: 'Min. 60% Off' },
//     { id: '3', name: 'Bracelets', discountLabel: 'Min. 60% Off' },
//   ];

//   // Cart state
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // ----- HANDLERS -----
//   const handleAddToCart = (product: Product) => {
//     setCartItems((prev) => [...prev, product]);
//     console.log('Added to cart:', product.name);
//   };

//   const handleBuyNow = (product: Product) => {
//     console.log('Buy now clicked:', product.name);
//     // Insert your “buy now” logic here (navigation, immediate checkout, etc.)
//   };

//   // ----- RENDER FUNCTIONS -----
//   const renderCategoryItem = (cat: Category) => {
//     return (
//       <TouchableOpacity key={cat.id} className="mr-4 items-center">
//         <View className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center mb-1">
//           <Ionicons name={cat.icon} size={22} color="#333" />
//         </View>
//         <Text className="text-xs text-gray-600">{cat.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderHorizontalProductSection = (
//     title: string,
//     data: Product[],
//     bgColor: string = 'bg-white',
//     showViewAll: boolean = false
//   ) => {
//     return (
//       <View className={`w-full mt-4 px-4 py-3 ${bgColor} rounded-lg`}>
//         <View className="flex-row justify-between items-center mb-3">
//           <Text className="text-lg font-bold text-gray-800">{title}</Text>
//           {showViewAll && (
//             <TouchableOpacity>
//               <Text className="text-sm font-semibold text-blue-500">More</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         {/* Horizontal Scroll of products */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {data.map((item) => (
//             <ProductCard
//               key={item.id}
//               product={item}
//               onAddToCart={handleAddToCart}
//               onBuyNow={handleBuyNow}
//             />
//           ))}
//         </ScrollView>
//       </View>
//     );
//   };

//   return (
//     <View className="flex-1 bg-white">
//       {/* HEADER */}
//       <View className="flex-row items-center justify-between mt-16 px-4 rounded-2xl py-4 bg-white ">
//         {/* Left: Logo + Title */}
//         <View className="flex-row items-center">
//           <Image
//             source={{
//               uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//             }}
//             className="w-8 h-8 rounded-full mr-2"
//           />
//           <Text className="text-xl font-bold text-gray-800">VEDIC SHOP</Text>
//         </View>
//         {/* Right: Menu Icon */}
//         <TouchableOpacity>
//           <Ionicons name="menu" size={24} color="#333" />
//         </TouchableOpacity>
//       </View>

//       {/* MAIN SCROLL */}
//       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//         {/* SEARCH BAR (improved) */}
//         <View className="px-4 mt-3">
//           <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
//             <Ionicons name="search" size={18} color="#666" />
//             <TextInput
//               placeholder="Search everything..."
//               className="ml-2 flex-1 text-sm text-gray-700"
//               placeholderTextColor="#888"
//             />
//             <TouchableOpacity className="p-1">
//               <Ionicons name="mic" size={18} color="#666" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* CATEGORY LIST (Horizontal) */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           className="px-4 py-3"
//         >
//           {categories.map((cat) => renderCategoryItem(cat))}
//         </ScrollView>

//         {/* RECOMMENDED FOR YOU */}
//         {renderHorizontalProductSection(
//           'Recommended for you',
//           recommendedProducts,
//           'bg-white',
//           true
//         )}

//         {/* POPULAR PRODUCTS */}
//         <View className="w-full px-4 py-3 mt-4 bg-orange-200 rounded-lg">
//           <Text className="text-lg font-bold text-gray-800 mb-3">
//             Popular Products
//           </Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {popularItems.map((item) => (
//               <View
//                 key={item.id}
//                 className="mr-4 bg-white rounded-lg p-4 w-32 items-center"
//               >
//                 <Image
//                   source={{
//                     uri: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//                   }}
//                   className="w-20 h-20 mb-2 rounded-lg"
//                 />
//                 <Text className="font-semibold text-gray-700">{item.name}</Text>
//                 <Text className="text-sm text-orange-600 mt-1">
//                   {item.discountLabel}
//                 </Text>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         {/* New Trending Products */}
//         {renderHorizontalProductSection(
//           'New Trending Products',
//           recommendedProducts,
//           'bg-blue-50'
//         )}

//         {/* Rudraksha Section */}
//         {renderHorizontalProductSection(
//           'Rudraksha',
//           recommendedProducts,
//           'bg-purple-200'
//         )}

//         {/* Idols Section */}
//         {renderHorizontalProductSection(
//           'Idols',
//           recommendedProducts,
//           'bg-orange-50'
//         )}

//         {/* Vastu Shastra Section */}
//         {renderHorizontalProductSection(
//           'Vastu Shastra',
//           recommendedProducts,
//           'bg-blue-200'
//         )}

//         {/* Wooden Temple Section */}
//         {renderHorizontalProductSection(
//           'Wooden Temple',
//           recommendedProducts,
//           'bg-orange-100'
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// import Categories from '@/components/HomePageComponents/Categories';
// import Header from '@/components/HomePageComponents/Header';
// import PopularProducts from '@/components/HomePageComponents/PopularProducts';
// import ProductSection from '@/components/HomePageComponents/ProductSection';
// import Search from '@/components/HomePageComponents/Search';
// import { Category, PopularItem, Product } from '@/components/HomePageComponents/types';
// import React, { useState } from 'react';
// import { View, ScrollView, Alert } from 'react-native';

// // ... other imports and type definitions

// export default function HomeScreen() {
//   // Dummy data
//   const categories: Category[] = [
//     { id: '1', title: 'Vastu Shastra', icon: 'home' },
//     { id: '2', title: 'Rudraksha', icon: 'flower' },
//     { id: '3', title: 'Spiritual Idols', icon: 'heart' },
//     { id: '4', title: 'Temple Offering', icon: 'flame' },
//     { id: '5', title: 'Temple Cleaning', icon: 'water' },
//   ];

//   const recommendedProducts: Product[] = [
//     {
//       id: '1',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     }, {
//       id: '2',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     }, {
//       id: '3',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     }, {
//       id: '4',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     }, {
//       id: '5',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     }, {
//       id: '6',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     }, {
//       id: '7',
//       name: 'White Moti with Shankh',
//       rating: 4.5,
//       reviews: 2345,
//       price: 210,
//       oldPrice: 250,
//       discountLabel: '10% OFF',
//       image: 'https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg',
//     },
//     // ... other products
//   ];

//   const popularItems: PopularItem[] = [
//     { id: '1', name: 'Idols', discountLabel: 'Min. 60% Off' },
//     { id: '2', name: 'Necklaces', discountLabel: 'Min. 60% Off' },
//     { id: '3', name: 'Bracelets', discountLabel: 'Min. 60% Off' },
//   ];

//   // Cart state
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // ----- HANDLERS -----
//   const handleAddToCart = (product: Product) => {
//     setCartItems((prev) => [...prev, product]);
//     Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
//   };

//   const handleBuyNow = (product: Product) => {
//     Alert.alert('Buy Now', `Proceeding to buy ${product.name}.`);
//     // Insert your “buy now” logic here (navigation, immediate checkout, etc.)
//   };

//   const handleSearch = (query: string) => {
//     // Implement your search logic here
//     console.log('Searching for:', query);
//   };

//   const handleMenuPress = () => {
//     // Implement your menu logic here
//     Alert.alert('Menu', 'Menu button pressed.');
//   };

//   return (
//     <View className="flex-1 bg-white">
//       {/* HEADER */}
//       <Header onMenuPress={handleMenuPress} />

//       {/* MAIN SCROLL */}
//       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//         {/* SEARCH BAR */}
//         <Search onSearch={handleSearch} />

//         {/* CATEGORY LIST (Horizontal) */}
//         <Categories categories={categories} />

//         {/* RECOMMENDED FOR YOU */}
//         <ProductSection
//           title="Recommended for you"
//           data={recommendedProducts}
//           bgColor="bg-white"
//           showViewAll={true}
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* POPULAR PRODUCTS */}
//         <PopularProducts data={popularItems} />

//         {/* New Trending Products */}
//         <ProductSection
//           title="New Trending Products"
//           data={recommendedProducts} // Assuming you have separate data
//           bgColor="bg-blue-50"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Rudraksha Section */}
//         <ProductSection
//           title="Rudraksha"
//           data={recommendedProducts} // Replace with appropriate data
//           bgColor="bg-purple-200"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Idols Section */}
//         <ProductSection
//           title="Idols"
//           data={recommendedProducts} // Replace with appropriate data
//           bgColor="bg-orange-50"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Vastu Shastra Section */}
//         <ProductSection
//           title="Vastu Shastra"
//           data={recommendedProducts} // Replace with appropriate data
//           bgColor="bg-blue-200"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Wooden Temple Section */}
//         <ProductSection
//           title="Wooden Temple"
//           data={recommendedProducts} // Replace with appropriate data
//           bgColor="bg-orange-100"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />
//       </ScrollView>
//     </View>
//   );
// }

// app/index.tsx



// import React from 'react';
// import { View, ScrollView, Alert } from 'react-native';
// import { Link } from 'expo-router';

// import Header from '@/components/HomePageComponents/Header';
// import PopularProducts from '@/components/HomePageComponents/PopularProducts';
// import ProductSection from '@/components/HomePageComponents/ProductSection';
// import Search from '@/components/HomePageComponents/Search';
// import { productsData } from '../data/products';
// import { Category, PopularItem, Product } from '@/components/HomePageComponents/types';
// import Categories from '@/components/HomePageComponents/Categories';
// import EcomBestSelling from '@/components/EcomComponents/ecombestselling';

// const HomeScreen: React.FC = () => {
//   // Dummy data
//   const categories: Category[] = [
//     { id: '1', title: 'Vastu Shastra', icon: 'construct-outline' },
//     { id: '2', title: 'Rudraksha', icon: 'flower-outline' },
//     { id: '3', title: 'Spiritual Idols', icon: 'star-outline' },
//     { id: '4', title: 'Temple Offering', icon: 'gift-outline' },
//     { id: '5', title: 'Temple Cleaning', icon: 'water-outline' },
//   ];

//   const popularItems: PopularItem[] = [
//     { id: '1', name: 'Idols', discountLabel: 'Min. 60% Off' },
//     { id: '2', name: 'Necklaces', discountLabel: 'Min. 60% Off' },
//     { id: '3', name: 'Bracelets', discountLabel: 'Min. 60% Off' },
//   ];

//   // Cart state
//   const [cartItems, setCartItems] = React.useState<Product[]>([]);

//   // ----- HANDLERS -----
//   const handleAddToCart = (product: Product) => {
//     setCartItems((prev) => [...prev, product]);
//     Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
//   };

//   const handleBuyNow = (product: Product) => {
//     Alert.alert('Buy Now', `Proceeding to buy ${product.name}.`);
//     // Insert your “buy now” logic here (navigation, immediate checkout, etc.)
//   };

//   const handleSearch = (query: string) => {
//     // Implement your search logic here
//     console.log('Searching for:', query);
//   };

//   const handleMenuPress = () => {
//     // Implement your menu logic here
//     Alert.alert('Menu', 'Menu button pressed.');
//   };

//   return (
//     <View className="flex-1 bg-white">
//       {/* HEADER */}
//       <Header onMenuPress={handleMenuPress} />

//       {/* MAIN SCROLL */}
//       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//         {/* SEARCH BAR */}
//         <Search onSearch={handleSearch} />

//         {/* CATEGORY LIST (Horizontal) */}
//         <Categories categories={categories} />
//         <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Other components such as header, search bar, etc. */}
//         {/* <EcomBestSelling /> */}
//         {/* Other sections/components */}
//       </ScrollView>

//         {/* RECOMMENDED FOR YOU */}
//         <ProductSection
//           title="Recommended for you"
//           data={productsData}
//           bgColor="bg-white"
//           showViewAll={true}
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* POPULAR PRODUCTS */}
//         <PopularProducts data={popularItems} />

//         {/* New Trending Products */}
//         <ProductSection
//           title="New Trending Products"
//           data={productsData} // Replace with separate data if available
//           bgColor="bg-blue-50"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />
        

//        {/* Rudraksha Section */}
//         <ProductSection
//           title="Rudraksha"
//           data={productsData.filter(product => product.category === 'Rudraksha')}
//           bgColor="bg-purple-200"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Idols Section */}
//         <ProductSection
//           title="Idols"
//           data={productsData.filter(product => product.subCategories?.includes('Idols'))}
//           bgColor="bg-orange-50"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow} 
//         />

//         {/* Vastu Shastra Section */}
//         <ProductSection
//           title="Vastu Shastra"
//           data={productsData.filter(product => product.category === 'Vastu Shastra')}
//           bgColor="bg-blue-200"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Wooden Temple Section */}
//         <ProductSection
//           title="Wooden Temple"
//           data={productsData.filter(product => product.subCategories?.includes('Temple'))}
//           bgColor="bg-orange-100"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;



// import React from 'react';
// import { View, ScrollView, Alert } from 'react-native';
// import Header from '@/components/HomePageComponents/Header';
// import PopularProducts from '@/components/HomePageComponents/PopularProducts';
// import ProductSection from '@/components/HomePageComponents/ProductSection';
// import Search from '@/components/HomePageComponents/Search';
// // Removed Category and PopularItem imports because they are not exported from the types module
// import { Product } from '@/components/HomePageComponents/types';
// import Categories from '@/components/HomePageComponents/Categories';
// // The imported productsData is actually a hook that returns an object, so we rename it for clarity.
// import { productsData as fetchProductsData } from '../data/products';

// const HomeScreen: React.FC = () => {
//   // Example categories (using inferred types)
//   const categories = [
//     { id: '1', title: 'Vastu Shastra', icon: 'construct-outline' },
//     { id: '2', title: 'Rudraksha', icon: 'flower-outline' },
//     { id: '3', title: 'Spiritual Idols', icon: 'star-outline' },
//     { id: '4', title: 'Temple Offering', icon: 'gift-outline' },
//     { id: '5', title: 'Temple Cleaning', icon: 'water-outline' },
//   ];

//   const popularItems = [
//     { id: '1', name: 'Idols', discountLabel: 'Min. 60% Off' },
//     { id: '2', name: 'Necklaces', discountLabel: 'Min. 60% Off' },
//     { id: '3', name: 'Bracelets', discountLabel: 'Min. 60% Off' },
//   ];

//   // ----- HANDLERS -----
//   const handleAddToCart = (product: Product) => {
//     Alert.alert('Added to Cart', `${product.productName} has been added to your cart.`);
//   };

//   const handleBuyNow = (product: Product) => {
//     Alert.alert('Buy Now', `Proceeding to buy ${product.productName}.`);
//     // Insert your “buy now” logic here (navigation, immediate checkout, etc.)
//   };

//   const handleSearch = (query: string) => {
//     console.log('Searching for:', query);
//   };

//   const handleMenuPress = () => {
//     Alert.alert('Menu', 'Menu button pressed.');
//   };

//   // Call the hook to fetch products; destructure the products array and status flags.
//   const { productsData: products, loading, error } = fetchProductsData();

//   // Example "Rudraksha" filter
//   const rudrakshaProducts = products.filter(
//     (p) => p.productCategory?.name?.toLowerCase() === 'rudraksha'
//   );

//   // Example "Idols" filter
//   const idolsProducts = products.filter(
//     (p) => p.subCategories?.some((sub) => sub.toLowerCase() === 'idols')
//   );

//   // Example "Vastu Shastra" filter
//   const vastuProducts = products.filter(
//     (p) => p.productCategory?.name?.toLowerCase() === 'vastu shastra'
//   );

//   // Example "Temple" filter
//   const templeProducts = products.filter(
//     (p) => p.subCategories?.some((sub) => sub.toLowerCase().includes('temple'))
//   );

//   return (
//     <View className="flex-1 bg-white">
//       {/* HEADER */}
//       <Header onMenuPress={handleMenuPress} />

//       {/* MAIN SCROLL */}
//       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//         {/* SEARCH BAR */}
//         <Search onSearch={handleSearch} />

//         {/* CATEGORY LIST (Horizontal) */}
//         <Categories categories={categories} />

//         {/* RECOMMENDED FOR YOU */}
//         <ProductSection
//           title="Recommended for you"
//           data={products} // or some recommended subset
//           bgColor="bg-white"
//           showViewAll={true}
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* POPULAR PRODUCTS */}
//         <PopularProducts data={popularItems} />

//         {/* New Trending Products */}
//         <ProductSection
//           title="New Trending Products"
//           data={products} // Replace with separate data if available
//           bgColor="bg-blue-50"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Rudraksha Section */}
//         <ProductSection
//           title="Rudraksha"
//           data={rudrakshaProducts}
//           bgColor="bg-purple-200"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Idols Section */}
//         <ProductSection
//           title="Idols"
//           data={idolsProducts}
//           bgColor="bg-orange-50"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Vastu Shastra Section */}
//         <ProductSection
//           title="Vastu Shastra"
//           data={vastuProducts}
//           bgColor="bg-blue-200"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />

//         {/* Wooden Temple Section */}
//         <ProductSection
//           title="Wooden Temple"
//           data={templeProducts}
//           bgColor="bg-orange-100"
//           onAddToCart={handleAddToCart}
//           onBuyNow={handleBuyNow}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;






import React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Link } from 'expo-router';
import Header from '@/components/HomePageComponents/Header';
import PopularProducts from '@/components/HomePageComponents/PopularProducts';
import ProductSection from '@/components/HomePageComponents/ProductSection';
import Search from '@/components/HomePageComponents/Search';
import { productsData } from '../data/products';
import {  Product } from '@/components/HomePageComponents/types';
import EcomBestSelling from '@/components/EcomComponents/ecombestselling';
import EcomRecommended from '@/components/EcomComponents/ecomrecommended';
import EcomIdols from '@/components/EcomComponents/ecomidols';
import EcomRudraksha from '@/components/EcomComponents/ecomrudraksha';
import EcomVastuSastra from '@/components/EcomComponents/ecomVastuSastra';
import EcomBracelets from '@/components/EcomComponents/ecomBracelets';
import EcomTempleOfferings from '@/components/EcomComponents/ecomTempleOfferings';
import Categories from '@/components/HomePageComponents/Categories';

const HomeScreen: React.FC = () => {
  // Dummy data
 


  // Cart state
  const [cartItems, setCartItems] = React.useState<Product[]>([]);

  // ----- HANDLERS -----


  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log('Searching for:', query);
  };

  const handleMenuPress = () => {
    // Implement your menu logic here
    Alert.alert('Menu', 'Menu button pressed.');
  };

  return (
    <View className="flex-1 bg-white">
  
      <Header  />

 
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        <Search  />

         <Categories/>
        <ScrollView showsVerticalScrollIndicator={false}>
    
      </ScrollView>

      
    <EcomRecommended/>
    <EcomRudraksha/>
    <EcomIdols/>
    <EcomVastuSastra/>
    <EcomBracelets/>
    <EcomTempleOfferings/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

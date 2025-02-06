// import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';

// export default function OrderScreen() {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

//   return (
//     <ScrollView className="flex-1 bg-white px-4 py-4">
//       {/* Header */}
//       <View className="flex-row justify-between items-center mb-4">
//         <TouchableOpacity>
//           <Image
//             source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/back.png' }}
//             className="w-6 h-6"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image
//             source={{ uri: 'https://img.icons8.com/ios/30/000000/menu.png' }}
//             className="w-6 h-6"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Product Image Carousel */}
//       <View className="items-center">
//         <Image
//           source={{ uri: 'https://via.placeholder.com/200' }} // Replace with product image
//           className="w-64 h-64 rounded-lg"
//         />
//         <Text className="text-gray-500 mt-2">1/8</Text>
//       </View>

//       {/* Product Details */}
//       <View className="mt-6">
//         <Text className="text-xl font-bold text-gray-800">Golden Hanuman Idol</Text>
//         <Text className="text-yellow-500 text-sm mt-1">4.5 ⭐ (2,345 Reviews)</Text>
//         <Text className="text-red-500 text-xl font-bold mt-2">$210.00</Text>
//         <Text className="text-gray-500 line-through">$599.00</Text>

//         {/* Quantity Selector */}
//         <View className="flex-row items-center mt-4">
//           <Text className="text-gray-800 font-bold">Quantity:</Text>
//           <View className="flex-row items-center ml-4">
//             <TouchableOpacity
//               onPress={decreaseQuantity}
//               className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
//             >
//               <Text className="text-lg font-bold">-</Text>
//             </TouchableOpacity>
//             <Text className="mx-4">{quantity}</Text>
//             <TouchableOpacity
//               onPress={increaseQuantity}
//               className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
//             >
//               <Text className="text-lg font-bold">+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Stock and Sharing Info */}
//         <Text className="text-sm text-gray-500 mt-2">3 people viewing this product right now</Text>
//         <Text className="text-sm text-gray-500">12 products left in stock</Text>
//         <TouchableOpacity className="mt-4">
//           <Text className="text-blue-500 text-sm font-bold">Share Product</Text>
//         </TouchableOpacity>

//         {/* Product Meta */}
//         <View className="mt-6">
//           <Text className="text-gray-700">Shop: PickUse</Text>
//           <Text className="text-gray-700">Category: Rudraksha</Text>
//           <Text className="text-gray-700">Sub Categories: Bracelet, Wearable</Text>
//         </View>
//       </View>

//       {/* Checkout Options */}
//       <View className="mt-6">
//         <Text className="text-lg font-bold text-gray-800">Guaranteed Safe Checkout</Text>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/300x50' }} // Replace with payment icons
//           className="w-full h-10 mt-2"
//         />
//       </View>

//       {/* Description */}
//       <View className="mt-6">
//         <Text className="text-lg font-bold text-gray-800">Description</Text>
//         <Text className="text-gray-700 mt-2">
//           Golden Hanuman Idol (Size: Approx. 7 inches) is a magnificent symbol of devotion,
//           strength, and protection. This intricately crafted idol captures Lord Hanuman in a
//           majestic pose, radiating divine energy and spiritual power.
//         </Text>
//       </View>

//       {/* Features */}
//       <View className="mt-6 grid grid-cols-2 gap-4">
//         <View className="flex-row items-center">
//           <Image
//             source={{ uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-shipping-ecommerce-flatart-icons-outline-flatarticons.png' }}
//             className="w-6 h-6 mr-2"
//           />
//           <Text className="text-gray-700">Fast Shipping</Text>
//         </View>
//         <View className="flex-row items-center">
//           <Image
//             source={{ uri: 'https://img.icons8.com/ios/50/000000/quality.png' }}
//             className="w-6 h-6 mr-2"
//           />
//           <Text className="text-gray-700">Quality Material</Text>
//         </View>
//         <View className="flex-row items-center">
//           <Image
//             source={{ uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-certified-document-flatart-icons-outline-flatarticons.png' }}
//             className="w-6 h-6 mr-2"
//           />
//           <Text className="text-gray-700">Certified Quality</Text>
//         </View>
//         <View className="flex-row items-center">
//           <Image
//             source={{ uri: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-compatible-interface-kiranshastry-lineal-kiranshastry.png' }}
//             className="w-6 h-6 mr-2"
//           />
//           <Text className="text-gray-700">Highly Compatible</Text>
//         </View>
//       </View>

//       {/* Related Products */}
//       <View className="mt-6">
//         <Text className="text-lg font-bold text-gray-800">Related Products</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-4">
//           {[1, 2].map((item) => (
//             <View
//               key={item}
//               className="w-40 h-48 bg-white rounded-lg shadow-sm mr-4 p-3"
//             >
//               <Image
//                 source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual product image
//                 className="w-full h-20 rounded-lg"
//               />
//               <Text className="text-sm font-bold mt-2 text-gray-700">
//                 Related Product {item}
//               </Text>
//               <Text className="text-lg font-bold text-gray-800">$210.00</Text>
//               <TouchableOpacity className="bg-blue-500 px-3 py-1 mt-2 rounded-lg">
//                 <Text className="text-white text-sm">Buy</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Actions */}
//       <View className="flex-row justify-between items-center mt-6 mb-6">
//         <TouchableOpacity className="bg-blue-500 flex-1 mr-2 py-3 rounded-lg">
//           <Text className="text-white text-center font-bold">Buy</Text>
//         </TouchableOpacity>
//         <TouchableOpacity className="border border-blue-500 flex-1 py-3 rounded-lg">
//           <Text className="text-blue-500 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Share,
//   FlatList,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const ProductDetailScreen = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message:
//           "Check out this amazing product: Golden Hanuman Idol! $210.00. https://vedic.shop/",
//       });
//     } catch (error) {
//       if (error instanceof Error) {
//         // Handle the error as a standard Error object
//         console.log("Error sharing product:", error.message);
//       } else {
//         // Handle the case where error is not an instance of Error
//         console.log("Unexpected error occurred:", error);
//       }
//     }
//   };

//   // Replace with valid image URLs
//   const images = [
//     "https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg", // Replace with your product image
//     "https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg", // Placeholder image
//     "https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg",
//      "https://m.media-amazon.com/images/I/71QHq0m+rhL.jpg", // Another placeholder
//   ];

//   const screenWidth = Dimensions.get("window").width;

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center mt-14 justify-between px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity>
//           <Ionicons name="menu" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Scrollable Content */}
//       <ScrollView className="flex-1">
//         {/* Image Slider */}
//         <FlatList
//           data={images}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={(event) => {
//             const index = Math.round(
//               event.nativeEvent.contentOffset.x / screenWidth
//             );
//             setCurrentImageIndex(index);
//           }}
//           renderItem={({ item }) => (
//             <Image
//               source={{ uri: item }}
//               className="w-full h-96"
//               resizeMode="contain"
//               style={{ width: screenWidth, height: 300 }}
//             />
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">
//             Golden Hanuman Idol
//           </Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               4.5 (2,345 Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">$210.00</Text>
//             <Text className="text-sm text-gray-500 line-through ml-2">
//               $599.00
//             </Text>
//           </View>
//           <Text className="text-sm text-gray-500 mt-2">
//             3 people viewing this product right now
//           </Text>
//           <Text className="text-sm text-gray-500">
//             12 products left in stock
//           </Text>
//           <TouchableOpacity className="mt-2" onPress={handleShare}>
//             <Text className="text-blue-500 text-sm">Share Product</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Quantity Selector */}
//         <View className="flex-row items-center px-4 mt-4">
//           <Text className="text-lg font-bold">Quantity:</Text>
//           <View className="flex-row items-center ml-4 border border-gray-300 rounded-lg">
//             <TouchableOpacity
//               onPress={handleDecrease}
//               className="px-3 py-2 bg-gray-100 rounded-l-lg"
//             >
//               <Text className="text-lg font-bold">-</Text>
//             </TouchableOpacity>
//             <Text className="px-4 py-2">{quantity}</Text>
//             <TouchableOpacity
//               onPress={handleIncrease}
//               className="px-3 py-2 bg-gray-100 rounded-r-lg"
//             >
//               <Text className="text-lg font-bold">+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Shop Info */}
//         <View className="px-4 mt-6">
//           <Text className="text-sm text-gray-500">
//             <Text className="font-bold">Shop:</Text> PickUse
//           </Text>
//           <Text className="text-sm text-gray-500">
//             <Text className="font-bold">Category:</Text> Rudraksha
//           </Text>
//           <Text className="text-sm text-gray-500">
//             <Text className="font-bold">Sub Categories:</Text> Bracelet,
//             Wearable
//           </Text>
//         </View>

//         {/* Description */}
//         <View className="px-4 mt-6">
//           <Text className="text-lg font-bold text-gray-800">Description</Text>
//           <Text className="text-sm text-gray-600 mt-2">
//             Golden Hanuman Idol (Size: Approx. 7 inches) is a magnificent symbol
//             of devotion, strength, and protection. This intricately crafted idol
//             captures Lord Hanuman in a majestic pose, radiating divine energy
//             and spiritual power.
//           </Text>
//         </View>

//         {/* Features */}
//         <View className="px-4 mt-6">
//           <View className="flex-row items-center">
//             <Ionicons name="checkmark-circle" size={20} color="green" />
//             <Text className="ml-2 text-sm text-gray-600">
//               Free Shipping on orders over ₹1000/-
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Ionicons name="checkmark-circle" size={20} color="green" />
//             <Text className="ml-2 text-sm text-gray-600">
//               Support Everyday from 8:30 AM to 10:00 PM
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Ionicons name="checkmark-circle" size={20} color="green" />
//             <Text className="ml-2 text-sm text-gray-600">
//               Secure Packaging and Quality Assurance
//             </Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Sticky Bottom Buttons */}
//       <View className="flex-row items-center justify-between px-4 py-4 border-t border-gray-200 bg-white">
//         <TouchableOpacity className="flex-1 bg-blue-500 py-3 rounded-lg mr-2">
//           <Text className="text-white text-center font-bold">Buy Now</Text>
//         </TouchableOpacity>
//         <TouchableOpacity className="flex-1 bg-gray-200 py-3 rounded-lg ml-2">
//           <Text className="text-gray-700 text-center font-bold">
//             Add to Cart
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;






// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Modal,
//   ScrollView
// } from 'react-native';

// // Import any icons you like; here we use MaterialIcons from expo/vector-icons
// import { MaterialIcons } from '@expo/vector-icons';

// // ─────────────────────────────────────────────────────────────────────────────
// // Types (optional, if you're using TypeScript)
// // ─────────────────────────────────────────────────────────────────────────────
// type Order = {
//   ecomOrderID: string;
//   product: {
//     productName: string;
//     productImage: string;
//     quantity: number;
//     price: number;
//   };
//   itemStatus: string; // e.g. 'delivered', 'cancelled', 'shipped' ...
//   userDetails: {
//     userName?: string;
//     userContactNumber?: string;
//     userEmail?: string;
//   };
//   addressDetails: {
//     addressLine1?: string;
//     city?: string;
//     state?: string;
//     zipCode?: string;
//     country?: string;
//   };
//   grandTotal: number;
//   deliveryCharge: number;
//   paymentStatus: boolean; // true => Paid, false => Pending
//   orderDate: string;      // ISO string date, e.g. '2025-01-29'
//   deliveryDate?: string;
//   deliveryStatus?: string;
//   shopName?: string;
//   shopEmail?: string;
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // Sample data for 'Buy Again' + Orders
// // (In your actual code, fetch from your API or state management)
// // ─────────────────────────────────────────────────────────────────────────────
// const buyAgainData = [
//   {
//     id: 'b1',
//     title: 'Buddha Idol',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
//   {
//     id: 'b2',
//     title: 'Ganesha Idol',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
//   {
//     id: 'b3',
//     title: 'Hanuman Chalisa Tab',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
// ];

// const sampleOrderData: Order[] = [
//   {
//     ecomOrderID: 'W234Ateret14545-1',
//     product: {
//       productName: 'Golden Hanuman Idol',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'shipped',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2025-02-29',
//     deliveryDate: undefined,
//     deliveryStatus: 'Arriving today by 10am',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-2',
//     product: {
//       productName: 'Wooden Box with Swastik',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2024-12-20',
//     deliveryDate: '2024-12-23',
//     deliveryStatus: 'Delivered 23 December',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-3',
//     product: {
//       productName: 'Pyramid Wooden Box',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2024-10-10',
//     deliveryDate: '2024-10-13',
//     deliveryStatus: 'Delivered 13 October',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // Reusable Components
// // ─────────────────────────────────────────────────────────────────────────────
// const FilterButton = ({
//   filter,
//   label,
//   iconName,
//   count,
//   currentFilter,
//   setFilter,
// }: {
//   filter: string;
//   label: string;
//   iconName: keyof typeof MaterialIcons.glyphMap;
//   count: number;
//   currentFilter: string;
//   setFilter: React.Dispatch<React.SetStateAction<string>>;
// }) => {
//   // Simple style difference if active
//   const active = filter === currentFilter;
//   return (
//     <TouchableOpacity
//       onPress={() => setFilter(filter)}
//       className={`flex flex-col items-center bg-white p-4 m-1 h-28 rounded shadow ${
//         active ? 'border border-orange-400' : ''
//       }`}
//     >
//       <MaterialIcons name={iconName} size={24} color="#666" />
//       <Text className="font-bold text-lg">{label}</Text>
//       <Text className="text-gray-500">{count}</Text>
//     </TouchableOpacity>
//   );
// };

// const StatusBadge = ({ status }: { status: string }) => {
//   let color = 'text-gray-500';
//   let icon = 'local-shipping'; // default from MaterialIcons

//   switch (status) {
//     case 'confirmed':
//       color = 'text-blue-500';
//       icon = 'local-shipping';
//       break;
//     case 'delivered':
//       color = 'text-green-500';
//       icon = 'check-circle-outline';
//       break;
//     case 'cancelled':
//       color = 'text-red-500';
//       icon = 'cancel';
//       break;
//     case 'shipped':
//       color = 'text-purple-500';
//       icon = 'local-shipping';
//       break;
//     case 'outForDelivery':
//       color = 'text-orange-500';
//       icon = 'local-shipping';
//       break;
//     case 'delayed':
//       color = 'text-yellow-500';
//       icon = 'local-shipping';
//       break;
//     default:
//       color = 'text-gray-500';
//       icon = 'local-shipping';
//   }
 
//   return (
//     <View className={`flex flex-row items-center ${color}`}>
//       <MaterialIcons name={icon} size={16} />
//       <Text className="ml-1 capitalize">{status}</Text>
//     </View>
//   );
// };

// const TableRow = ({ label, value }: { label: string; value: string }) => (
//   <View className="flex-row border-b border-gray-200">
//     <Text className="w-1/2 p-2 font-semibold text-gray-600">{label}</Text>
//     <Text className="w-1/2 p-2 text-gray-800">{value}</Text>
//   </View>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // Main OrderScreen
// // ─────────────────────────────────────────────────────────────────────────────
// const OrderScreen = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [selectedOrderItem, setSelectedOrderItem] = useState<Order | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   // For “Need Help?” or any help submission:
//   const [helpModalVisible, setHelpModalVisible] = useState(false);
//   const [helpText, setHelpText] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Simulate a fetch of your orders on mount
//   useEffect(() => {
//     // Example: setOrders from sample data
//     setOrders(sampleOrderData);
//   }, []);

//   // Flatten your data if needed. In this sample, we already have single items.
//   // Then filter:
//   const filteredOrderItems = orders.filter((item) => {
//     const matchesStatus = filter === 'All' || item.itemStatus === filter;
//     const matchesSearch = item.product.productName
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   // Filter counts
//   const totalCount = orders.length;
//   const deliveredCount = orders.filter((o) => o.itemStatus === 'delivered').length;
//   const cancelledCount = orders.filter((o) => o.itemStatus === 'cancelled').length;
//   const shippedCount = orders.filter((o) => o.itemStatus === 'shipped').length;

//   const openModal = (item: Order) => {
//     setSelectedOrderItem(item);
//     setModalVisible(true);
//   };
//   const closeModal = () => setModalVisible(false);

//   const handleHelpSubmit = () => {
//     if (!helpText.trim()) {
//       // If you want to show an alert or a toast, do it here
//       return;
//     }
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setHelpText('');
//       setHelpModalVisible(false);
//       // Show success message
//     }, 2000);
//   };

//   // ─────────────────────────────────────────────────────────────────────────
//   // Render
//   // ─────────────────────────────────────────────────────────────────────────
//   return (
//     <View className="flex-1 mt-16 bg-[#FFF9F3]">
//       {/* Header with Search */}
//       <View className="bg-white px-4 py-3 shadow flex flex-row items-center justify-between">
//         <Text className="text-xl font-bold">YOUR ORDERS</Text>
//         <TextInput
//           placeholder="Search all Order"
//           className="border rounded px-2 py-1 w-1/2"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Buy Again Section */}
//       <View className="mt-2">
//         <View className="px-4 flex-row items-center justify-between">
//           <Text className="font-bold text-lg">Buy Again</Text>
//           <TouchableOpacity>
//             <Text className="text-blue-600">See More</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={buyAgainData}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View className="m-2 items-center">
//               <Image
//                 source={{ uri: item.image }}
//                 className="w-20 h-20 rounded"
//                 resizeMode="cover"
//               />
//               <Text className="text-center w-20" numberOfLines={2}>
//                 {item.title}
//               </Text>
//             </View>
//           )}
//         />
//       </View>

//       {/* Filter Buttons */}
//        <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         className='mt-3 pb-36 px-2'
//       >
//         <FilterButton
//           filter='All'
//           label='Total Orders'
//           iconName='shopping-basket'
//           count={totalCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter='delivered'
//           label='Delivered'
//           iconName='check-circle-outline'
//           count={deliveredCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter='cancelled'
//           label='Cancelled'
//           iconName='cancel'
//           count={cancelledCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter='shipped'
//           label='Shipped'
//           iconName='local-shipping'
//           count={shippedCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         {/* Add more FilterButtons here if needed */}
//       </ScrollView>
      
//       {/* Orders List */}
//       <FlatList 
      
//         data={filteredOrderItems}
//         keyExtractor={(item) => item.ecomOrderID}
//         contentContainerStyle={{ paddingBottom: 100 }}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             className="mx-3  my-2 p-3 bg-white rounded shadow"
//             onPress={() => openModal(item)}
//           >
//             <View className="flex-row">
//               <Image
//                 source={{ uri: item.product.productImage }}
//                 className="w-16 h-16 rounded mr-3"
//               />
//               <View className="flex-1">
//                 <Text className="font-semibold">
//                   Ecom Order ID : {item.ecomOrderID}
//                 </Text>
//                 <Text>Product : {item.product.productName}</Text>
//                 <Text>Quantity : {item.product.quantity} pieces</Text>
//                 <Text>Price : Rs. {item.product.price}/-</Text>
//                 <Text
//                   className={
//                     item.itemStatus.includes('Delivered') ||
//                     item.itemStatus.toLowerCase() === 'delivered'
//                       ? 'text-green-600'
//                       : 'text-orange-600'
//                   }
//                 >
//                   Status : {item.deliveryStatus}
//                 </Text>
//               </View>
//               {/* Right Arrow or Icon */}
//               <View className="justify-center">
//                 <MaterialIcons name="keyboard-arrow-right" size={24} color="#666" />
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//       {/* Main Modal (Product Details) */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closeModal}
//       >
//         {selectedOrderItem && (
//           <View className="flex-1 bg-orange-400 bg-opacity-20 justify-center">
//             <View className="mx-4 bg-white rounded-lg p-4">
//               <Text className="text-2xl font-bold mb-2">Product Details</Text>

//               {/* Contact + Shipping */}
//               <Text className="text-lg font-semibold">Contact Information</Text>
//               <Text>{selectedOrderItem.userDetails?.userName}</Text>
//               <Text>{selectedOrderItem.userDetails?.userContactNumber}</Text>
//               <Text>{selectedOrderItem.userDetails?.userEmail}</Text>

//               <Text className="text-lg font-semibold mt-4">Shipping Address</Text>
//               <Text>
//                 {selectedOrderItem.addressDetails?.addressLine1},{' '}
//                 {selectedOrderItem.addressDetails?.city},{' '}
//                 {selectedOrderItem.addressDetails?.state},{' '}
//                 {selectedOrderItem.addressDetails?.zipCode},{' '}
//                 {selectedOrderItem.addressDetails?.country}
//               </Text>

//               {/* Item */}
//               <Text className="text-lg font-semibold mt-4">Item</Text>
//               <View className="flex-row mt-2">
//                 <Image
//                   source={{ uri: selectedOrderItem.product.productImage }}
//                   className="w-16 h-16 rounded mr-4"
//                 />
//                 <View>
//                   <Text className="font-bold">
//                     {selectedOrderItem.product.productName}
//                   </Text>
//                   <Text>Quantity: {selectedOrderItem.product.quantity}</Text>
//                   <Text>Price: Rs.{selectedOrderItem.product.price}</Text>
//                   <Text>Delivery Status: {selectedOrderItem.deliveryStatus}</Text>
//                 </View>
//               </View>

//               {/* Shop Details */}
//               <Text className="text-lg font-semibold mt-4">Shop Details</Text>
//               <Text>Shop Name: {selectedOrderItem.shopName}</Text>
//               <Text>Shop Email: {selectedOrderItem.shopEmail}</Text>

//               {/* Additional Info */}
//               <View className="mt-4 border border-gray-300 rounded">
//                 <TableRow
//                   label="Order Date"
//                   value={new Date(selectedOrderItem.orderDate).toLocaleDateString()}
//                 />
//                 <TableRow
//                   label="Estimated Delivery Date"
//                   value={computeEstimatedDelivery(selectedOrderItem.orderDate)}
//                 />
//                 <TableRow
//                   label="Payment Status"
//                   value={selectedOrderItem.paymentStatus ? 'Paid' : 'Pending'}
//                 />
//                 <TableRow
//                   label="Delivery Charge"
//                   value={`Rs.${selectedOrderItem.deliveryCharge}`}
//                 />
//                 <TableRow
//                   label="Grand Total"
//                   value={`Rs.${selectedOrderItem.grandTotal}`}
//                 />
//                 <TableRow
//                   label="Line Total"
//                   value={`Rs.${
//                     selectedOrderItem.product.price *
//                     selectedOrderItem.product.quantity
//                   }`}
//                 />
//               </View>

//               <View className="mt-4 flex-row justify-end space-x-3">
//                 <TouchableOpacity
//                   className="bg-red-500 rounded px-4 py-2"
//                   onPress={closeModal}
//                 >
//                   <Text className="text-white">Close</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   className="bg-orange-500 rounded px-4 py-2"
//                   onPress={() => setHelpModalVisible(true)}
//                 >
//                   <Text className="text-white">Need Help?</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       </Modal>

//       {/* Need Help Modal */}
//       <Modal
//         visible={helpModalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setHelpModalVisible(false)}
//       >
//         <View className="flex-1 bg-black bg-opacity-30 justify-center">
//           <View className="mx-4 bg-white rounded-lg p-4">
//             {!isSubmitting ? (
//               <>
//                 <Text className="text-center text-xl font-bold">Need Help?</Text>
//                 <TextInput
//                   placeholder="Describe your query or problem..."
//                   multiline
//                   numberOfLines={4}
//                   className="border border-gray-300 mt-4 p-2 rounded"
//                   value={helpText}
//                   onChangeText={setHelpText}
//                 />
//                 <View className="flex-row justify-center mt-4 space-x-3">
//                   <TouchableOpacity
//                     className="bg-blue-500 rounded px-4 py-2"
//                     onPress={handleHelpSubmit}
//                   >
//                     <Text className="text-white">Submit</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     className="bg-gray-400 rounded px-4 py-2"
//                     onPress={() => setHelpModalVisible(false)}
//                   >
//                     <Text className="text-white">Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             ) : (
//               <View className="p-4 items-center">
//                 <MaterialIcons
//                   name="check-circle-outline"
//                   size={48}
//                   color="green"
//                 />
//                 <Text className="mt-2 text-lg font-semibold">
//                   Your problem has been submitted!
//                 </Text>
//                 <Text>We will contact you soon.</Text>
//                 <Text className="mt-2 text-center">
//                   You can also call us at +9660000146
//                   {'\n'}or contact us at vedicvaibhav72@gmail.com
//                 </Text>
//                 <TouchableOpacity
//                   className="bg-blue-500 rounded px-4 py-2 mt-4"
//                   onPress={() => setHelpModalVisible(false)}
//                 >
//                   <Text className="text-white">Close</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// // Helper to compute estimated delivery date
// function computeEstimatedDelivery(orderDateStr: string) {
//   const orderDate = new Date(orderDateStr);
//   const estimatedDelivery = new Date(orderDate);
//   estimatedDelivery.setDate(orderDate.getDate() + 6);
//   return estimatedDelivery.toLocaleDateString();
// }

// export default OrderScreen;




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Modal,
//   ScrollView
// } from 'react-native';
// import { styled } from 'nativewind';
// import { MaterialIcons } from '@expo/vector-icons';

// /** 
//  * Type for valid MaterialIcons name
//  * (All possible icon names from MaterialIcons.glyphMap.)
//  */
// type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

// type Order = {
//   ecomOrderID: string;
//   product: {
//     productName: string;
//     productImage: string;
//     quantity: number;
//     price: number;
//   };
//   itemStatus: string;
//   userDetails?: {
//     userName?: string;
//     userContactNumber?: string;
//     userEmail?: string;
//   };
//   addressDetails?: {
//     addressLine1?: string;
//     city?: string;
//     state?: string;
//     zipCode?: string;
//     country?: string;
//   };
//   grandTotal?: number;
//   deliveryCharge?: number;
//   paymentStatus?: boolean;
//   orderDate?: string;
//   deliveryDate?: string;
//   deliveryStatus?: string;
//   shopName?: string;
//   shopEmail?: string;
// };

// // Dummy sample data
// const sampleOrderData: Order[] = [
//   {
//     ecomOrderID: 'W234Ateret14545-1',
//     product: {
//       productName: 'Golden Hanuman Idol',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'shipped',
//     deliveryStatus: 'Arriving today by 10am',
//     orderDate: '2025-02-29',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },{
//     ecomOrderID: 'W234Ateret14545-1',
//     product: {
//       productName: 'Golden Hanuman Idol',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'shipped',
//     deliveryStatus: 'Arriving today by 10am',
//     orderDate: '2025-02-29',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },{
//     ecomOrderID: 'W234Ateret14545-1',
//     product: {
//       productName: 'Golden Hanuman Idol',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'shipped',
//     deliveryStatus: 'Arriving today by 10am',
//     orderDate: '2025-02-29',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-2',
//     product: {
//       productName: 'Wooden Box with Swastik',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     deliveryStatus: 'Delivered 23 December',
//     orderDate: '2024-12-20',
//     deliveryDate: '2024-12-23',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-3',
//     product: {
//       productName: 'Pyramid Wooden Box',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     deliveryStatus: 'Delivered 13 October',
//     orderDate: '2024-10-10',
//     deliveryDate: '2024-10-13',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },{
//     ecomOrderID: 'W234Ateret14545-3',
//     product: {
//       productName: 'Pyramid Wooden Box',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     deliveryStatus: 'Delivered 13 October',
//     orderDate: '2024-10-10',
//     deliveryDate: '2024-10-13',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },{
//     ecomOrderID: 'W234Ateret14545-3',
//     product: {
//       productName: 'Pyramid Wooden Box',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     deliveryStatus: 'Delivered 13 October',
//     orderDate: '2024-10-10',
//     deliveryDate: '2024-10-13',
//     paymentStatus: true,
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
// ];

// // For the horizontal “Buy Again”
// const buyAgainData = [
//   { id: 'b1', title: 'Buddha Idol', image: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp' },
//   { id: 'b2', title: 'Ganesha Idol', image: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp' },
//   { id: 'b3', title: 'Hanuman Chalisa Tab', image: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp' },
// ];

// const OrderScreen = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [selectedOrderItem, setSelectedOrderItem] = useState<Order | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   // For “Need Help?” modal
//   const [helpModalVisible, setHelpModalVisible] = useState(false);
//   const [helpText, setHelpText] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Simulate fetching
//   useEffect(() => {
//     // Suppose you fetched from your API:
//     // const data = await fetch(...)
//     // setOrders(data.orders)
//     setOrders(sampleOrderData);
//   }, []);

//   // 1) Filter + Search
//   const filteredOrderItems = orders.filter((o) => {
//     const matchesStatus = filter === 'All' || o.itemStatus === filter;
//     const matchesSearch = o.product.productName
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   // 2) Filter counts
//   const totalCount = orders.length;
//   const deliveredCount = orders.filter((o) => o.itemStatus === 'delivered').length;
//   const cancelledCount = orders.filter((o) => o.itemStatus === 'cancelled').length;
//   const shippedCount = orders.filter((o) => o.itemStatus === 'shipped').length;

//   // Open/Close modal
//   const openModal = (item: Order) => {
//     setSelectedOrderItem(item);
//     setModalVisible(true);
//   };
//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   // Need help submission
//   const handleHelpSubmit = () => {
//     if (!helpText.trim()) {
//       return;
//     }
//     setIsSubmitting(true);
//     // Simulate network call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setHelpText('');
//       setHelpModalVisible(false);
//       // Show success message, etc.
//     }, 1500);
//   };

//   return (
//     <View className='flex-1 mt-16 bg-[#FFF9F3]'>
//       {/* Header + Search */}
//       <View className='bg-white px-4 py-3 shadow flex-row items-center justify-between'>
//         <Text className='text-xl font-bold'>YOUR ORDERS</Text>
//         <TextInput
//           placeholder='Search all Order'
//           className='border rounded px-2 py-1 w-1/2'
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Buy Again (Horizontal Scroll) */}
//       <View className='mt-2'>
//         <View className='px-4 flex-row items-center justify-between'>
//           <Text className='font-bold text-lg'>Buy Again</Text>
//           <TouchableOpacity>
//             <Text className='text-blue-600'>See More</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={buyAgainData}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View className='m-2 items-center'>
//               <Image
//                 source={{ uri: item.image }}
//                 className='w-20 h-20 rounded'
//               />
//               <Text className='text-center w-20' numberOfLines={2}>
//                 {item.title}
//               </Text>
//             </View>
//           )}
//         />
//       </View>

//       {/* Filter Buttons - make them horizontally scrollable */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         className='mt-3 px-2'
//       >
//         <FilterButton
//           filterKey='All'
//           label='Total Orders'
//           iconName='shopping-basket'
//           count={totalCount}
//           currentFilter={filter}
//           onPressFilter={setFilter}
//         />
//         <FilterButton
//           filterKey='delivered'
//           label='Delivered'
//           iconName='check-circle-outline'
//           count={deliveredCount}
//           currentFilter={filter}
//           onPressFilter={setFilter}
//         />
//         <FilterButton
//           filterKey='cancelled'
//           label='Cancelled'
//           iconName='cancel'
//           count={cancelledCount}
//           currentFilter={filter}
//           onPressFilter={setFilter}
//         />
//         <FilterButton
//           filterKey='shipped'
//           label='Shipped'
//           iconName='local-shipping'
//           count={shippedCount}
//           currentFilter={filter}
//           onPressFilter={setFilter}
//         />
//         {/* Add more FilterButtons here if needed */}
//       </ScrollView>

//       {/* Orders List */}
//       <FlatList
//         data={filteredOrderItems}
//         keyExtractor={(item) => item.ecomOrderID}
//         contentContainerStyle={{ paddingBottom: 80 }}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             className='mx-3 my-3 p-3  bg-white rounded shadow'
//             onPress={() => openModal(item)}
//           >
//             <View className='flex-row'>
//               <Image
//                 source={{ uri: item.product.productImage }}
//                 className='w-16 h-16 rounded mr-3'
//               />
//               <View className='flex-1'>
//                 <Text className='font-semibold'>
//                   Ecom Order ID : {item.ecomOrderID}
//                 </Text>
//                 <Text>Product : {item.product.productName}</Text>
//                 <Text>Quantity : {item.product.quantity} pieces</Text>
//                 <Text>Price : Rs. {item.product.price}/-</Text>
//                 <Text
//                   className={
//                     item.itemStatus.toLowerCase().includes('deliver')
//                       ? 'text-green-600'
//                       : 'text-orange-600'
//                   }
//                 >
//                   Status : {item.deliveryStatus}
//                 </Text>
//               </View>
//               {/* Right arrow */}
//               <View className='justify-center'>
//                 <MaterialIcons name='keyboard-arrow-right' size={24} color='#666' />
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//       {/* Main Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType='slide'
//         onRequestClose={closeModal}
//       >
//         {selectedOrderItem && (
//           <View className='flex-1 bg-black bg-opacity-30 justify-center'>
//             <ScrollView className='m-4 bg-white rounded p-4'>
//               <Text className='text-2xl font-bold mb-2'>Product Details</Text>
//               {/* Contact Info */}
//               <Text className='text-lg font-semibold'>Contact Information</Text>
//               <Text>{selectedOrderItem.userDetails?.userName}</Text>
//               <Text>{selectedOrderItem.userDetails?.userContactNumber}</Text>
//               <Text>{selectedOrderItem.userDetails?.userEmail}</Text>

//               {/* Shipping Address */}
//               <Text className='text-lg font-semibold mt-4'>Shipping Address</Text>
//               <Text>
//                 {selectedOrderItem.addressDetails?.addressLine1},{' '}
//                 {selectedOrderItem.addressDetails?.city},{' '}
//                 {selectedOrderItem.addressDetails?.state},{' '}
//                 {selectedOrderItem.addressDetails?.zipCode},{' '}
//                 {selectedOrderItem.addressDetails?.country}
//               </Text>

//               {/* Item */}
//               <Text className='text-lg font-semibold mt-4'>Item</Text>
//               <View className='flex-row mt-2'>
//                 <Image
//                   source={{ uri: selectedOrderItem.product.productImage }}
//                   className='w-16 h-16 rounded mr-4'
//                 />
//                 <View>
//                   <Text className='font-bold'>
//                     {selectedOrderItem.product.productName}
//                   </Text>
//                   <Text>Quantity: {selectedOrderItem.product.quantity}</Text>
//                   <Text>Price: Rs.{selectedOrderItem.product.price}</Text>
//                   <Text>Delivery Status: {selectedOrderItem.deliveryStatus}</Text>
//                 </View>
//               </View>

//               {/* Shop Details */}
//               <Text className='text-lg font-semibold mt-4'>Shop Details</Text>
//               <Text>Shop Name: {selectedOrderItem.shopName}</Text>
//               <Text>Shop Email: {selectedOrderItem.shopEmail}</Text>

//               {/* Additional Info */}
//               <View className='mt-4 border border-gray-300 rounded'>
//                 <TableRow
//                   label='Order Date'
//                   value={
//                     selectedOrderItem.orderDate
//                       ? new Date(selectedOrderItem.orderDate).toLocaleDateString()
//                       : ''
//                   }
//                 />
//                 <TableRow
//                   label='Estimated Delivery Date'
//                   value={computeEstimatedDelivery(selectedOrderItem.orderDate)}
//                 />
//                 <TableRow
//                   label='Payment Status'
//                   value={selectedOrderItem.paymentStatus ? 'Paid' : 'Pending'}
//                 />
//                 <TableRow
//                   label='Delivery Charge'
//                   value={`Rs.${selectedOrderItem.deliveryCharge || 0}`}
//                 />
//                 <TableRow
//                   label='Grand Total'
//                   value={`Rs.${selectedOrderItem.grandTotal || 0}`}
//                 />
//                 <TableRow
//                   label='Line Total'
//                   value={`Rs.${
//                     selectedOrderItem.product.price *
//                     selectedOrderItem.product.quantity
//                   }`}
//                 />
//               </View>

//               {/* Buttons */}
//               <View className='mt-4 flex-row justify-end space-x-3'>
//                 <TouchableOpacity
//                   className='bg-red-500 rounded px-4 py-2'
//                   onPress={closeModal}
//                 >
//                   <Text className='text-white'>Close</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   className='bg-orange-500 rounded px-4 py-2'
//                   onPress={() => setHelpModalVisible(true)}
//                 >
//                   <Text className='text-white'>Need Help?</Text>
//                 </TouchableOpacity>
//               </View>
//             </ScrollView>
//           </View>
//         )}
//       </Modal>

//       {/* Need Help Modal */}
//       <Modal
//         visible={helpModalVisible}
//         transparent
//         animationType='fade'
//         onRequestClose={() => setHelpModalVisible(false)}
//       >
//         <View className='flex-1 bg-black bg-opacity-30 justify-center'>
//           <View className='mx-4 bg-white rounded-lg p-4'>
//             {!isSubmitting ? (
//               <>
//                 <Text className='text-center text-xl font-bold'>Need Help?</Text>
//                 <TextInput
//                   placeholder='Describe your query or problem...'
//                   multiline
//                   numberOfLines={4}
//                   className='border border-gray-300 mt-4 p-2 rounded'
//                   value={helpText}
//                   onChangeText={setHelpText}
//                 />
//                 <View className='flex-row justify-center mt-4 space-x-3'>
//                   <TouchableOpacity
//                     className='bg-blue-500 rounded px-4 py-2'
//                     onPress={handleHelpSubmit}
//                   >
//                     <Text className='text-white'>Submit</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     className='bg-gray-400 rounded px-4 py-2'
//                     onPress={() => setHelpModalVisible(false)}
//                   >
//                     <Text className='text-white'>Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             ) : (
//               <View className='p-4 items-center'>
//                 <MaterialIcons name='check-circle-outline' size={48} color='green' />
//                 <Text className='mt-2 text-lg font-semibold'>
//                   Your problem has been submitted!
//                 </Text>
//                 <Text>We will contact you soon.</Text>
//                 <Text className='mt-2 text-center'>
//                   You can also call us at +9660000146{'\n'}
//                   or contact us at vedicvaibhav72@gmail.com
//                 </Text>
//                 <TouchableOpacity
//                   className='bg-blue-500 rounded px-4 py-2 mt-4'
//                   onPress={() => setHelpModalVisible(false)}
//                 >
//                   <Text className='text-white'>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// // Helper: horizontally-scrollable Filter Button
// type FilterButtonProps = {
//   filterKey: string;
//   label: string;
//   iconName: MaterialIconName;
//   count: number;
//   currentFilter: string;
//   onPressFilter: React.Dispatch<React.SetStateAction<string>>;
// };

// const FilterButton = ({
//   filterKey,
//   label,
//   iconName,
//   count,
//   currentFilter,
//   onPressFilter,
// }: FilterButtonProps) => {
//   const active = filterKey === currentFilter;
//   return (
//     <TouchableOpacity
//       onPress={() => onPressFilter(filterKey)}
//       className={`flex flex-col items-center justify-center w-40 h-24 bg-white p-2 m-1 rounded shadow ${
//         active ? 'border border-orange-400' : ''
//       }`}
//     >
//       <MaterialIcons name={iconName} size={24} color='#666' />
//       <Text className='font-bold text-base'>{label}</Text>
//       <Text className='text-gray-500'>{count}</Text>
//     </TouchableOpacity>
//   );
// };

// // Helper: table row
// const TableRow = ({ label, value }: { label: string; value: string }) => (
//   <View className='flex-row border-b border-gray-200'>
//     <Text className='w-1/2 p-2 font-semibold text-gray-600'>{label}</Text>
//     <Text className='w-1/2 p-2 text-gray-800'>{value}</Text>
//   </View>
// );

// // Compute estimated date => orderDate + 6 days
// function computeEstimatedDelivery(orderDateStr?: string) {
//   if (!orderDateStr) return '';
//   const orderDate = new Date(orderDateStr);
//   const estimated = new Date(orderDate);
//   estimated.setDate(orderDate.getDate() + 6);
//   return estimated.toLocaleDateString();
// }

// export default OrderScreen;













// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Modal,
//   ScrollView,
//   StyleSheet
// } from 'react-native';
// // Import MaterialIcons from expo/vector-icons
// import { MaterialIcons } from '@expo/vector-icons';

// /* 
//   Types, Sample Data, etc. 
//   (unchanged; same as your code)
// */
// type Order = {
//   ecomOrderID: string;
//   product: {
//     productName: string;
//     productImage: string;
//     quantity: number;
//     price: number;
//   };
//   itemStatus: string; // e.g. 'delivered', 'cancelled', 'shipped' ...
//   userDetails: {
//     userName?: string;
//     userContactNumber?: string;
//     userEmail?: string;
//   };
//   addressDetails: {
//     addressLine1?: string;
//     city?: string;
//     state?: string;
//     zipCode?: string;
//     country?: string;
//   };
//   grandTotal: number;
//   deliveryCharge: number;
//   paymentStatus: boolean; // true => Paid, false => Pending
//   orderDate: string;      // ISO string date, e.g. '2025-01-29'
//   deliveryDate?: string;
//   deliveryStatus?: string;
//   shopName?: string;
//   shopEmail?: string;
// };


// const buyAgainData = [
//   {
//     id: 'b1',
//     title: 'Buddha Idol',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
//   {
//     id: 'b2',
//     title: 'Ganesha Idol',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
//   {
//     id: 'b3',
//     title: 'Hanuman Chalisa Tab',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
// ];

// const sampleOrderData: Order[] = [
//   {
//     ecomOrderID: 'W234Ateret14545-1',
//     product: {
//       productName: 'Golden Hanuman Idol',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'shipped',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2025-02-29',
//     deliveryDate: undefined,
//     deliveryStatus: 'Arriving today by 10am',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-2',
//     product: {
//       productName: 'Wooden Box with Swastik',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2024-12-20',
//     deliveryDate: '2024-12-23',
//     deliveryStatus: 'Delivered 23 December',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-3',
//     product: {
//       productName: 'Pyramid Wooden Box',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2024-10-10',
//     deliveryDate: '2024-10-13',
//     deliveryStatus: 'Delivered 13 October',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
// ];


// /* ---------------------------------------------------------------------
//    Reusable Components
//    --------------------------------------------------------------------- */

// // Tell TypeScript that iconName must be one of the valid MaterialIcon strings
// type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

// const FilterButton = ({
//   filter,
//   label,
//   iconName,
//   count,
//   currentFilter,
//   setFilter,
// }: {
//   filter: string;
//   label: string;
//   iconName: MaterialIconName; // <== typed as a valid MaterialIcons name
//   count: number;
//   currentFilter: string;
//   setFilter: React.Dispatch<React.SetStateAction<string>>;
// }) => {
//   const active = filter === currentFilter;
//   return (
//     <TouchableOpacity
//       onPress={() => setFilter(filter)}
//       style={[
//         styles.filterButton,
//         active && { borderWidth: 1, borderColor: '#FB923C' }
//       ]}
//     >
//       <MaterialIcons name={iconName} size={24} color="#666" />
//       <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{label}</Text>
//       <Text style={{ color: '#666' }}>{count}</Text>
//     </TouchableOpacity>
//   );
// };

// const StatusBadge = ({ status }: { status: string }) => {
//   let colorStyle = { color: '#6B7280' }; // default gray-500
//   let iconName: MaterialIconName = 'local-shipping'; // default

//   switch (status) {
//     case 'confirmed':
//       colorStyle = { color: '#3B82F6' }; // blue-500
//       iconName = 'local-shipping';
//       break;
//     case 'delivered':
//       colorStyle = { color: '#10B981' }; // green-500
//       iconName = 'check-circle-outline';
//       break;
//     case 'cancelled':
//       colorStyle = { color: '#EF4444' }; // red-500
//       iconName = 'cancel';
//       break;
//     case 'shipped':
//       colorStyle = { color: '#8B5CF6' }; // purple-500
//       iconName = 'local-shipping';
//       break;
//     case 'outForDelivery':
//       colorStyle = { color: '#F97316' }; // orange-500
//       iconName = 'local-shipping';
//       break;
//     case 'delayed':
//       colorStyle = { color: '#F59E0B' }; // yellow-500
//       iconName = 'local-shipping';
//       break;
//     default:
//       colorStyle = { color: '#6B7280' }; // gray-500
//       iconName = 'local-shipping';
//       break;
//   }

//   return (
//     <View style={[styles.statusBadgeContainer]}>
//       <MaterialIcons name={iconName} size={16} color={colorStyle.color} />
//       <Text style={[{ marginLeft: 4, textTransform: 'capitalize' }, colorStyle]}>
//         {status}
//       </Text>
//     </View>
//   );
// };

// const TableRow = ({ label, value }: { label: string; value: string }) => (
//   <View style={styles.tableRow}>
//     <Text style={[styles.tableLabel]}>{label}</Text>
//     <Text style={[styles.tableValue]}>{value}</Text>
//   </View>
// );

// /* ---------------------------------------------------------------------
//    Main OrderScreen
//    --------------------------------------------------------------------- */
// const OrderScreen = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [selectedOrderItem, setSelectedOrderItem] = useState<Order | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   // “Need Help?” Modal
//   const [helpModalVisible, setHelpModalVisible] = useState(false);
//   const [helpText, setHelpText] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Simulate a fetch of your orders on mount
//   useEffect(() => {
//     setOrders(sampleOrderData);
//   }, []);

//   // Filter
//   const filteredOrderItems = orders.filter((item) => {
//     const matchesStatus = filter === 'All' || item.itemStatus === filter;
//     const matchesSearch = item.product.productName
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   // Filter counts
//   const totalCount = orders.length;
//   const deliveredCount = orders.filter((o) => o.itemStatus === 'delivered').length;
//   const cancelledCount = orders.filter((o) => o.itemStatus === 'cancelled').length;
//   const shippedCount = orders.filter((o) => o.itemStatus === 'shipped').length;

//   /* -----------------------------
//      Modal Logic
//   ----------------------------- */
//   const openModal = (item: Order) => {
//     setSelectedOrderItem(item);
//     setModalVisible(true);
//   };
//   const closeModal = () => setModalVisible(false);

//   const handleHelpSubmit = () => {
//     if (!helpText.trim()) return;
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setHelpText('');
//       setHelpModalVisible(false);
//       // Show success message or toast
//     }, 2000);
//   };

//   // **Important**: close the details modal before opening Need Help, 
//   // so the second modal is visible.
//   const openHelpModal = () => {
//     setModalVisible(false);
//     setHelpModalVisible(true);
//   };

//   return (
//     <View style={{ flex: 1, marginTop: 40, backgroundColor: '#FFF9F3' }}>
//       {/* Header with Search */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerTitle}>YOUR ORDERS</Text>
//         <TextInput
//           placeholder="Search all Order"
//           style={styles.searchInput}
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Buy Again Section */}
//       <View style={{ marginTop: 8 }}>
//         <View style={styles.buyAgainHeader}>
//           <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Buy Again</Text>
//           <TouchableOpacity>
//             <Text style={{ color: '#2563EB' }}>See More</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={buyAgainData}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={{ margin: 8, alignItems: 'center' }}>
//               <Image
//                 source={{ uri: item.image }}
//                 style={{ width: 80, height: 80, borderRadius: 6 }}
//                 resizeMode="cover"
//               />
//               <Text style={{ width: 80, textAlign: 'center' }} numberOfLines={2}>
//                 {item.title}
//               </Text>
//             </View>
//           )}
//         />
//       </View>

//       {/* Filter Buttons - scrollable */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={{ marginTop: 8, marginBottom: 4, paddingLeft: 8 }}
//       >
//         <FilterButton
//           filter="All"
//           label="Total Orders"
//           iconName="shopping-basket"
//           count={totalCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter="delivered"
//           label="Delivered"
//           iconName="check-circle-outline"
//           count={deliveredCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter="cancelled"
//           label="Cancelled"
//           iconName="cancel"
//           count={cancelledCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter="shipped"
//           label="Shipped"
//           iconName="local-shipping"
//           count={shippedCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         {/* Add more FilterButtons as needed */}
//       </ScrollView>

//       {/* Orders List */}
//       <FlatList
//         data={filteredOrderItems}
//         keyExtractor={(item) => item.ecomOrderID}
//         contentContainerStyle={{ paddingBottom: 100 }}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.orderItemContainer}
//             onPress={() => openModal(item)}
//           >
//             <View style={{ flexDirection: 'row' }}>
//               <Image
//                 source={{ uri: item.product.productImage }}
//                 style={{
//                   width: 64,
//                   height: 64,
//                   borderRadius: 6,
//                   marginRight: 8
//                 }}
//               />
//               <View style={{ flex: 1 }}>
//                 <Text style={{ fontWeight: '600' }}>
//                   Ecom Order ID : {item.ecomOrderID}
//                 </Text>
//                 <Text>Product : {item.product.productName}</Text>
//                 <Text>Quantity : {item.product.quantity} pieces</Text>
//                 <Text>Price : Rs. {item.product.price}/-</Text>
//                 <Text
//                   style={
//                     item.itemStatus.toLowerCase() === 'delivered'
//                       ? { color: '#10B981' }
//                       : { color: '#F97316' }
//                   }
//                 >
//                   Status : {item.deliveryStatus}
//                 </Text>
//               </View>
//               <View style={{ justifyContent: 'center' }}>
//                 <MaterialIcons name="keyboard-arrow-right" size={24} color="#666" />
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//       {/* Main Modal (Product Details) */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closeModal}
//       >
//         {selectedOrderItem && (
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 6 }}>
//                 Product Details
//               </Text>

//               {/* Contact + Shipping */}
//               <Text style={{ fontSize: 16, fontWeight: '600' }}>Contact Information</Text>
//               <Text>{selectedOrderItem.userDetails?.userName}</Text>
//               <Text>{selectedOrderItem.userDetails?.userContactNumber}</Text>
//               <Text>{selectedOrderItem.userDetails?.userEmail}</Text>

//               <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 8 }}>
//                 Shipping Address
//               </Text>
//               <Text>
//                 {selectedOrderItem.addressDetails?.addressLine1},{' '}
//                 {selectedOrderItem.addressDetails?.city},{' '}
//                 {selectedOrderItem.addressDetails?.state},{' '}
//                 {selectedOrderItem.addressDetails?.zipCode},{' '}
//                 {selectedOrderItem.addressDetails?.country}
//               </Text>

//               {/* Item */}
//               <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 8 }}>Item</Text>
//               <View style={{ flexDirection: 'row', marginTop: 6 }}>
//                 <Image
//                   source={{ uri: selectedOrderItem.product.productImage }}
//                   style={{ width: 64, height: 64, borderRadius: 6, marginRight: 8 }}
//                 />
//                 <View>
//                   <Text style={{ fontWeight: 'bold' }}>
//                     {selectedOrderItem.product.productName}
//                   </Text>
//                   <Text>Quantity: {selectedOrderItem.product.quantity}</Text>
//                   <Text>Price: Rs.{selectedOrderItem.product.price}</Text>
//                   <Text>Delivery Status: {selectedOrderItem.deliveryStatus}</Text>
//                 </View>
//               </View>

//               {/* Shop Details */}
//               <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 8 }}>
//                 Shop Details
//               </Text>
//               <Text>Shop Name: {selectedOrderItem.shopName}</Text>
//               <Text>Shop Email: {selectedOrderItem.shopEmail}</Text>

//               {/* Additional Info */}
//               <View style={{ marginTop: 8, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4 }}>
//                 <TableRow
//                   label="Order Date"
//                   value={new Date(selectedOrderItem.orderDate).toLocaleDateString()}
//                 />
//                 <TableRow
//                   label="Estimated Delivery Date"
//                   value={computeEstimatedDelivery(selectedOrderItem.orderDate)}
//                 />
//                 <TableRow
//                   label="Payment Status"
//                   value={selectedOrderItem.paymentStatus ? 'Paid' : 'Pending'}
//                 />
//                 <TableRow
//                   label="Delivery Charge"
//                   value={`Rs.${selectedOrderItem.deliveryCharge}`}
//                 />
//                 <TableRow
//                   label="Grand Total"
//                   value={`Rs.${selectedOrderItem.grandTotal}`}
//                 />
//                 <TableRow
//                   label="Line Total"
//                   value={`Rs.${
//                     selectedOrderItem.product.price *
//                     selectedOrderItem.product.quantity
//                   }`}
//                 />
//               </View>

//               {/* Buttons */}
//               <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 12 }}>
//                 <TouchableOpacity
//                   style={[styles.button, { backgroundColor: '#EF4444', marginRight: 8 }]}
//                   onPress={closeModal}
//                 >
//                   <Text style={{ color: '#fff' }}>Close</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.button, { backgroundColor: '#F97316' }]}
//                   onPress={openHelpModal}
//                 >
//                   <Text style={{ color: '#fff' }}>Need Help?</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       </Modal>

//       {/* Need Help Modal */}
//       <Modal
//         visible={helpModalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setHelpModalVisible(false)}
//         presentationStyle="overFullScreen"
//       >
//         <View style={[styles.modalOverlay, { zIndex: 9999 }]}>
//           <View style={styles.helpModalContent}>
//             {!isSubmitting ? (
//               <>
//                 <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
//                   Need Help?
//                 </Text>
//                 <TextInput
//                   placeholder="Describe your query or problem..."
//                   multiline
//                   numberOfLines={4}
//                   style={styles.helpInput}
//                   value={helpText}
//                   onChangeText={setHelpText}
//                 />
//                 <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
//                   <TouchableOpacity
//                     style={[styles.button, { backgroundColor: '#3B82F6', marginRight: 8 }]}
//                     onPress={handleHelpSubmit}
//                   >
//                     <Text style={{ color: '#fff' }}>Submit</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={[styles.button, { backgroundColor: '#9CA3AF' }]}
//                     onPress={() => setHelpModalVisible(false)}
//                   >
//                     <Text style={{ color: '#fff' }}>Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             ) : (
//               <View style={{ alignItems: 'center' }}>
//                 <MaterialIcons name="check-circle-outline" size={48} color="green" />
//                 <Text style={{ marginTop: 8, fontSize: 16, fontWeight: '600' }}>
//                   Your problem has been submitted!
//                 </Text>
//                 <Text>We will contact you soon.</Text>
//                 <Text style={{ marginTop: 8, textAlign: 'center' }}>
//                   You can also call us at +9660000146{'\n'}
//                   or contact us at vedicvaibhav72@gmail.com
//                 </Text>
//                 <TouchableOpacity
//                   style={[styles.button, { backgroundColor: '#3B82F6', marginTop: 16 }]}
//                   onPress={() => setHelpModalVisible(false)}
//                 >
//                   <Text style={{ color: '#fff' }}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// /* ---------------------------------------------------------------------
//    Helper
//    --------------------------------------------------------------------- */
// function computeEstimatedDelivery(orderDateStr: string) {
//   const orderDate = new Date(orderDateStr);
//   const estimatedDelivery = new Date(orderDate);
//   estimatedDelivery.setDate(orderDate.getDate() + 6);
//   return estimatedDelivery.toLocaleDateString();
// }

// /* ---------------------------------------------------------------------
//    Styles
//    --------------------------------------------------------------------- */
// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     elevation: 2
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   searchInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     width: '50%'
//   },
//   buyAgainHeader: {
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   filterButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 12,
//     marginRight: 8,
//     width: 90,
//     height: 80,
//     borderRadius: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     elevation: 2
//   },
//   orderItemContainer: {
//     marginHorizontal: 12,
//     marginVertical: 4,
//     padding: 8,
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     elevation: 2
//   },
//   statusBadgeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB'
//   },
//   tableLabel: {
//     width: '50%',
//     padding: 6,
//     fontWeight: '600',
//     color: '#4B5563'
//   },
//   tableValue: {
//     width: '50%',
//     padding: 6,
//     color: '#1F2937'
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     justifyContent: 'center'
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     borderRadius: 8,
//     padding: 16
//   },
//   helpModalContent: {
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     borderRadius: 8,
//     padding: 16
//   },
//   helpInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     marginTop: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     textAlignVertical: 'top'
//   },
//   button: {
//     borderRadius: 6,
//     paddingVertical: 8,
//     paddingHorizontal: 12
//   }
// });

// export default OrderScreen;




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Modal,
//   ScrollView
// } from 'react-native';

// // For NativeWind – make sure you have installed & configured it.
// // import { styled } from 'nativewind'; // (Only if you need the 'styled()' API; we can just use className directly.)

// import { MaterialIcons } from '@expo/vector-icons';

// // ─────────────────────────────────────────────────────────────────────────────
// // Types (optional, if you're using TypeScript)
// // ─────────────────────────────────────────────────────────────────────────────
// type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

// type Order = {
//   ecomOrderID: string;
//   product: {
//     productName: string;
//     productImage: string;
//     quantity: number;
//     price: number;
//   };
//   itemStatus: string; // e.g. 'delivered', 'cancelled', 'shipped' ...
//   userDetails: {
//     userName?: string;
//     userContactNumber?: string;
//     userEmail?: string;
//   };
//   addressDetails: {
//     addressLine1?: string;
//     city?: string;
//     state?: string;
//     zipCode?: string;
//     country?: string;
//   };
//   grandTotal: number;
//   deliveryCharge: number;
//   paymentStatus: boolean; // true => Paid, false => Pending
//   orderDate: string;      // e.g. '2025-01-29'
//   deliveryDate?: string;
//   deliveryStatus?: string;
//   shopName?: string;
//   shopEmail?: string;
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // Sample 'Buy Again' + Orders (replace with your real data)
// // ─────────────────────────────────────────────────────────────────────────────

// const buyAgainData = [
//   {
//     id: 'b1',
//     title: 'Buddha Idol',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
//   {
//     id: 'b2',
//     title: 'Ganesha Idol',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
//   {
//     id: 'b3',
//     title: 'Hanuman Chalisa Tab',
//     image:
//       'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//   },
// ];

// const sampleOrderData: Order[] = [
//   {
//     ecomOrderID: 'W234Ateret14545-1',
//     product: {
//       productName: 'Golden Hanuman Idol',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'shipped',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2025-02-29',
//     deliveryDate: undefined,
//     deliveryStatus: 'Arriving today by 10am',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-2',
//     product: {
//       productName: 'Wooden Box with Swastik',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2024-12-20',
//     deliveryDate: '2024-12-23',
//     deliveryStatus: 'Delivered 23 December',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
//   {
//     ecomOrderID: 'W234Ateret14545-3',
//     product: {
//       productName: 'Pyramid Wooden Box',
//       productImage: 'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
//       quantity: 2,
//       price: 1223,
//     },
//     itemStatus: 'delivered',
//     userDetails: {
//       userName: 'John Doe',
//       userContactNumber: '1234567890',
//       userEmail: 'john@example.com',
//     },
//     addressDetails: {
//       addressLine1: 'Ist Floor, SCO 21 22',
//       city: 'Chandigarh',
//       state: 'Chandigarh',
//       zipCode: '160019',
//       country: 'India',
//     },
//     grandTotal: 0,
//     deliveryCharge: 0,
//     paymentStatus: true,
//     orderDate: '2024-10-10',
//     deliveryDate: '2024-10-13',
//     deliveryStatus: 'Delivered 13 October',
//     shopName: 'The Izzah',
//     shopEmail: 'support@theizzah.com',
//   },
// ];


// // ─────────────────────────────────────────────────────────────────────────────
// // Reusable Components (NativeWind className usage)
// // ─────────────────────────────────────────────────────────────────────────────
// const FilterButton = ({
//   filter,
//   label,
//   iconName,
//   count,
//   currentFilter,
//   setFilter,
// }: {
//   filter: string;
//   label: string;
//   iconName: MaterialIconName;
//   count: number;
//   currentFilter: string;
//   setFilter: React.Dispatch<React.SetStateAction<string>>;
// }) => {
//   const active = filter === currentFilter;
//   return (
//     <TouchableOpacity
//       onPress={() => setFilter(filter)}
//       className={`
//         items-center justify-center bg-white h-32 p-4 m-2 mr-3  
//         rounded shadow 
//         ${active ? 'border border-orange-400' : ''}
//       `}
//     >
//       <MaterialIcons name={iconName} size={24} color="#666" />
//       <Text className="font-bold text-base">{label}</Text>
//       <Text className="text-gray-500">{count}</Text>
//     </TouchableOpacity>
//   );
// };

// const TableRow = ({ label, value }: { label: string; value: string }) => (
//   <View className="flex-row border-b border-gray-300">
//     <Text className="w-1/2 p-2 font-semibold text-gray-600">{label}</Text>
//     <Text className="w-1/2 p-2 text-gray-800">{value}</Text>
//   </View>
// );

// const StatusBadge = ({ status }: { status: string }) => {
//   let color = 'text-gray-500';
//   let iconName: MaterialIconName = 'local-shipping';

//   switch (status) {
//     case 'confirmed':
//       color = 'text-blue-500';
//       iconName = 'local-shipping';
//       break;
//     case 'delivered':
//       color = 'text-green-500';
//       iconName = 'check-circle-outline';
//       break;
//     case 'cancelled':
//       color = 'text-red-500';
//       iconName = 'cancel';
//       break;
//     case 'shipped':
//       color = 'text-purple-500';
//       iconName = 'local-shipping';
//       break;
//     case 'outForDelivery':
//       color = 'text-orange-500';
//       iconName = 'local-shipping';
//       break;
//     case 'delayed':
//       color = 'text-yellow-500';
//       iconName = 'local-shipping';
//       break;
//     default:
//       color = 'text-gray-500';
//       iconName = 'local-shipping';
//       break;
//   }

//   return (
//     <View className="flex-row items-center">
//       <MaterialIcons name={iconName} size={16} className={color} />
//       <Text className={`ml-1 capitalize ${color}`}>{status}</Text>
//     </View>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // Main OrderScreen (with NativeWind className)
// // ─────────────────────────────────────────────────────────────────────────────
// export default function OrderScreen() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [selectedOrderItem, setSelectedOrderItem] = useState<Order | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   // “Need Help?” Modal
//   const [helpModalVisible, setHelpModalVisible] = useState(false);
//   const [helpText, setHelpText] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     // In real usage, fetch orders from your API
//     setOrders(sampleOrderData);
//   }, []);

//   // Filter
//   const filteredOrderItems = orders.filter((item) => {
//     const matchesStatus = filter === 'All' || item.itemStatus === filter;
//     const matchesSearch = item.product.productName
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   // Counts
//   const totalCount = orders.length;
//   const deliveredCount = orders.filter((o) => o.itemStatus === 'delivered').length;
//   const cancelledCount = orders.filter((o) => o.itemStatus === 'cancelled').length;
//   const shippedCount = orders.filter((o) => o.itemStatus === 'shipped').length;

//   // Modal logic
//   const openModal = (item: Order) => {
//     setSelectedOrderItem(item);
//     setModalVisible(true);
//   };
//   const closeModal = () => setModalVisible(false);

//   const openHelpModal = () => {
//     // close the detail modal first
//     setModalVisible(false);
//     setHelpModalVisible(true);
//   };
//   const closeHelpModal = () => setHelpModalVisible(false);

//   const handleHelpSubmit = () => {
//     if (!helpText.trim()) {
//       // Show an alert or do nothing
//       return;
//     }
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setHelpText('');
//       setHelpModalVisible(false);
//       // Show success message if you want
//     }, 2000);
//   };

//   return (
//     <View className="flex-1 mt-16 bg-[#FFF9F3]">
//       {/* Header with Search */}
//       <View className="bg-white px-4 py-3 shadow flex-row justify-between items-center">
//         <Text className="text-lg font-bold">YOUR ORDERS</Text>
//         <TextInput
//           placeholder="Search all Order"
//           className="border border-gray-300 rounded px-3 py-1 w-1/2"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Buy Again */}
//       <View className="mt-2">
//         <View className="px-4 flex-row items-center justify-between">
//           <Text className="font-bold text-base">Buy Again</Text>
//           <TouchableOpacity>
//             <Text className="text-blue-600">See More</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={buyAgainData}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View className="m-2 items-center">
//               <Image
//                 source={{ uri: item.image }}
//                 className="w-20 h-20 rounded"
//                 resizeMode="cover"
//               />
//               <Text className="text-center w-20" numberOfLines={2}>
//                 {item.title}
//               </Text>
//             </View>
//           )}
//         />
//       </View>

//       {/* Filter Buttons - horizontally scrollable */}
//      <View className=''>
//      <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         className="mt-2  px-2"
      
//       >
//         <FilterButton
//           filter="All"
//           label="Total Orders"
//           iconName="shopping-basket"
//           count={totalCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter="delivered"
//           label="Delivered"
//           iconName="check-circle-outline"
//           count={deliveredCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter="cancelled"
//           label="Cancelled"
//           iconName="cancel"
//           count={cancelledCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         <FilterButton
//           filter="shipped"
//           label="Shipped"
//           iconName="local-shipping"
//           count={shippedCount}
//           currentFilter={filter}
//           setFilter={setFilter}
//         />
//         {/* Add more FilterButtons if needed */}
//       </ScrollView>
//      </View>

//       {/* Orders List */}
//       <FlatList
//         data={filteredOrderItems}
//         keyExtractor={(item) => item.ecomOrderID}
//         contentContainerStyle={{ paddingBottom: 100 }}
//         className="mt-2"
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             className="mx-3 my-2 p-3 bg-white rounded shadow"
//             onPress={() => openModal(item)}
//           >
//             <View className="flex-row">
//               <Image
//                 source={{ uri: item.product.productImage }}
//                 className="w-20 h-20 mx-auto my-auto rounded mr-3"
//               />
//               <View className="flex-1">
//                 <Text className="font-semibold">
//                   Ecom Order ID : {item.ecomOrderID}
//                 </Text>
//                 <Text>Product : {item.product.productName}</Text>
//                 <Text>Quantity : {item.product.quantity} pieces</Text>
//                 <Text>Price : Rs. {item.product.price}/-</Text>
//                 <Text
//                   className={
//                     item.itemStatus.toLowerCase() === 'delivered'
//                       ? 'text-green-600'
//                       : 'text-orange-600'
//                   }
//                 >
//                   Status : {item.deliveryStatus}
//                 </Text>
//               </View>
//               <View className="justify-center">
//                 <MaterialIcons name="keyboard-arrow-right" size={24} color="#666" />
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//       {/* Main Modal (Product Details) */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={closeModal}
//       >
//         {selectedOrderItem && (
//           <View className="flex-1  bg-opacity-80 bg-orange-200 justify-center">
//             <View className="mx-4 bg-white rounded-lg p-4">
//               <Text className="text-2xl font-bold mb-2">Product Details</Text>

//               {/* Contact Info */}
//               <Text className="text-lg font-semibold">Contact Information</Text>
//               <Text>{selectedOrderItem.userDetails?.userName}</Text>
//               <Text>{selectedOrderItem.userDetails?.userContactNumber}</Text>
//               <Text>{selectedOrderItem.userDetails?.userEmail}</Text>

//               {/* Shipping Address */}
//               <Text className="text-lg font-semibold mt-4">Shipping Address</Text>
//               <Text>
//                 {selectedOrderItem.addressDetails?.addressLine1},{' '}
//                 {selectedOrderItem.addressDetails?.city},{' '}
//                 {selectedOrderItem.addressDetails?.state},{' '}
//                 {selectedOrderItem.addressDetails?.zipCode},{' '}
//                 {selectedOrderItem.addressDetails?.country}
//               </Text>

//               {/* Item */}
//               <Text className="text-lg font-semibold mt-4">Item</Text>
//               <View className="flex-row mt-2">
//                 <Image
//                   source={{ uri: selectedOrderItem.product.productImage }}
//                   className="w-16 h-16 rounded mr-4"
//                 />
//                 <View>
//                   <Text className="font-bold">
//                     {selectedOrderItem.product.productName}
//                   </Text>
//                   <Text>Quantity: {selectedOrderItem.product.quantity}</Text>
//                   <Text>Price: Rs.{selectedOrderItem.product.price}</Text>
//                   <Text>Delivery Status: {selectedOrderItem.deliveryStatus}</Text>
//                 </View>
//               </View>

//               {/* Shop Details */}
//               <Text className="text-lg font-semibold mt-4">Shop Details</Text>
//               <Text>Shop Name: {selectedOrderItem.shopName}</Text>
//               <Text>Shop Email: {selectedOrderItem.shopEmail}</Text>

//               {/* Additional Info */}
//               <View className="mt-4 border border-gray-300 rounded">
//                 <TableRow
//                   label="Order Date"
//                   value={new Date(selectedOrderItem.orderDate).toLocaleDateString()}
//                 />
//                 <TableRow
//                   label="Estimated Delivery Date"
//                   value={computeEstimatedDelivery(selectedOrderItem.orderDate)}
//                 />
//                 <TableRow
//                   label="Payment Status"
//                   value={selectedOrderItem.paymentStatus ? 'Paid' : 'Pending'}
//                 />
//                 <TableRow
//                   label="Delivery Charge"
//                   value={`Rs.${selectedOrderItem.deliveryCharge}`}
//                 />
//                 <TableRow
//                   label="Grand Total"
//                   value={`Rs.${selectedOrderItem.grandTotal}`}
//                 />
//                 <TableRow
//                   label="Line Total"
//                   value={`Rs.${
//                     selectedOrderItem.product.price *
//                     selectedOrderItem.product.quantity
//                   }`}
//                 />
//               </View>

//               {/* Buttons */}
//               <View className="flex-row justify-end mt-4 gap-4 space-x-3">
//                 <TouchableOpacity
//                   className="bg-red-500 rounded px-4 py-2"
//                   onPress={closeModal}
//                 >
//                   <Text className="text-white">Close</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   className="bg-orange-500 rounded px-4 py-2"
//                   onPress={openHelpModal}
//                 >
//                   <Text className="text-white">Need Help?</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       </Modal>

//       {/* Need Help Modal */}
//       <Modal
//         visible={helpModalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={closeHelpModal}
//         presentationStyle="overFullScreen"
//       >
//         <View className="flex-1 bg-orange-300 bg-opacity-50 justify-center">
//           <View className="mx-4 bg-white rounded-lg p-4">
//             {!isSubmitting ? (
//               <>
//                 <Text className="text-xl font-bold text-center">Need Help?</Text>
//                 <TextInput
//                   placeholder="Describe your query or problem..."
//                   multiline
//                   numberOfLines={4}
//                   className="border border-gray-300 mt-4 p-2 rounded text-base"
//                   value={helpText}
//                   onChangeText={setHelpText}
//                 />
//                 <View className="flex-row justify-center mt-4 gap-4 space-x-3">
//                   <TouchableOpacity
//                     className="bg-blue-500 rounded px-4 py-2"
//                     onPress={handleHelpSubmit}
//                   >
//                     <Text className="text-white">Submit</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     className="bg-gray-400 rounded px-4 py-2"
//                     onPress={closeHelpModal}
//                   >
//                     <Text className="text-white">Cancel</Text>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             ) : (
//               <View className="items-center">
//                 <MaterialIcons name="check-circle-outline" size={48} color="green" />
//                 <Text className="mt-2 text-lg font-semibold">
//                   Your problem has been submitted!
//                 </Text>
//                 <Text>We will contact you soon.</Text>
//                 <Text className="mt-2 text-center">
//                   You can also call us at +9660000146
//                   {'\n'}or contact us at vedicvaibhav72@gmail.com
//                 </Text>
//                 <TouchableOpacity
//                   className="bg-blue-500 rounded px-4 py-2 mt-4"
//                   onPress={closeHelpModal}
//                 >
//                   <Text className="text-white">Close</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// // Helper to compute estimated delivery date
// function computeEstimatedDelivery(orderDateStr: string) {
//   const orderDate = new Date(orderDateStr);
//   const estimatedDelivery = new Date(orderDate);
//   estimatedDelivery.setDate(orderDate.getDate() + 6);
//   return estimatedDelivery.toLocaleDateString();
// }



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

type Order = {
  ecomOrderID: string;
  product: {
    productName: string;
    productImage: string;
    quantity: number;
    price: number;
  };
  itemStatus: string;
  userDetails: {
    userName?: string;
    userContactNumber?: string;
    userEmail?: string;
  };
  addressDetails: {
    addressLine1?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  grandTotal: number;
  deliveryCharge: number;
  paymentStatus: boolean;
  orderDate: string;
  deliveryDate?: string;
  deliveryStatus?: string;
  shopName?: string;
  shopEmail?: string;
};



const sampleOrderData: Order[] = [
  {
    ecomOrderID: 'W234Ateret14545-1',
    product: {
      productName: 'Golden Hanuman Idol',
      productImage:
        'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
      quantity: 2,
      price: 1223,
    },
    itemStatus: 'shipped',
    userDetails: {
      userName: 'John Doe',
      userContactNumber: '1234567890',
      userEmail: 'john@example.com',
    },
    addressDetails: {
      addressLine1: 'Ist Floor, SCO 21 22',
      city: 'Chandigarh',
      state: 'Chandigarh',
      zipCode: '160019',
      country: 'India',
    },
    grandTotal: 0,
    deliveryCharge: 0,
    paymentStatus: true,
    orderDate: '2025-02-29',
    deliveryDate: undefined,
    deliveryStatus: 'Arriving today by 10am',
    shopName: 'The Izzah',
    shopEmail: 'support@theizzah.com',
  },
  {
    ecomOrderID: 'W234Ateret14545-2',
    product: {
      productName: 'Wooden Box with Swastik',
      productImage:
        'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
      quantity: 2,
      price: 1223,
    },
    itemStatus: 'delivered',
    userDetails: {
      userName: 'John Doe',
      userContactNumber: '1234567890',
      userEmail: 'john@example.com',
    },
    addressDetails: {
      addressLine1: 'Ist Floor, SCO 21 22',
      city: 'Chandigarh',
      state: 'Chandigarh',
      zipCode: '160019',
      country: 'India',
    },
    grandTotal: 0,
    deliveryCharge: 0,
    paymentStatus: true,
    orderDate: '2024-12-20',
    deliveryDate: '2024-12-23',
    deliveryStatus: 'Delivered 23 December',
    shopName: 'The Izzah',
    shopEmail: 'support@theizzah.com',
  },
  {
    ecomOrderID: 'W234Ateret14545-3',
    product: {
      productName: 'Pyramid Wooden Box',
      productImage:
        'https://vedic-vaibhav.blr1.digitaloceanspaces.com/vedic-vaibhav/product-images/images_1734430738642.webp',
      quantity: 2,
      price: 1223,
    },
    itemStatus: 'delivered',
    userDetails: {
      userName: 'John Doe',
      userContactNumber: '1234567890',
      userEmail: 'john@example.com',
    },
    addressDetails: {
      addressLine1: 'Ist Floor, SCO 21 22',
      city: 'Chandigarh',
      state: 'Chandigarh',
      zipCode: '160019',
      country: 'India',
    },
    grandTotal: 0,
    deliveryCharge: 0,
    paymentStatus: true,
    orderDate: '2024-10-10',
    deliveryDate: '2024-10-13',
    deliveryStatus: 'Delivered 13 October',
    shopName: 'The Izzah',
    shopEmail: 'support@theizzah.com',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Reusable Components
// ─────────────────────────────────────────────────────────────────────────────
const FilterButton = ({
  filter,
  label,
  iconName,
  count,
  currentFilter,
  setFilter,
}: {
  filter: string;
  label: string;
  iconName: MaterialIconName;
  count: number;
  currentFilter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const active = filter === currentFilter;
  return (
    <TouchableOpacity
      onPress={() => setFilter(filter)}
      className={`
        items-center justify-center bg-white h-32 p-4 m-2 mr-3  
        rounded shadow 
        ${active ? 'border border-orange-400' : ''}
      `}
    >
      <MaterialIcons name={iconName} size={24} color="#666" />
      <Text className="font-bold text-base">{label}</Text>
      <Text className="text-gray-500">{count}</Text>
    </TouchableOpacity>
  );
};

const TableRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row border-b border-gray-300">
    <Text className="w-1/2 p-2 font-semibold text-gray-600">{label}</Text>
    <Text className="w-1/2 p-2 text-gray-800">{value}</Text>
  </View>
);

const StatusBadge = ({ status }: { status: string }) => {
  let color = 'text-gray-500';
  let iconName: MaterialIconName = 'local-shipping';

  switch (status) {
    case 'confirmed':
      color = 'text-blue-500';
      iconName = 'local-shipping';
      break;
    case 'delivered':
      color = 'text-green-500';
      iconName = 'check-circle-outline';
      break;
    case 'cancelled':
      color = 'text-red-500';
      iconName = 'cancel';
      break;
    case 'shipped':
      color = 'text-purple-500';
      iconName = 'local-shipping';
      break;
    case 'outForDelivery':
      color = 'text-orange-500';
      iconName = 'local-shipping';
      break;
    case 'delayed':
      color = 'text-yellow-500';
      iconName = 'local-shipping';
      break;
    default:
      color = 'text-gray-500';
      iconName = 'local-shipping';
      break;
  }

  return (
    <View className="flex-row items-center">
      <MaterialIcons name={iconName} size={16} className={color} />
      <Text className={`ml-1 capitalize ${color}`}>{status}</Text>
    </View>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Screen
// ─────────────────────────────────────────────────────────────────────────────
export default function OrderScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedOrderItem, setSelectedOrderItem] = useState<Order | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // "Need Help?" Modal
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [helpText, setHelpText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // In real usage, fetch orders from your API
    setOrders(sampleOrderData);
  }, []);

  // Filter logic
  const filteredOrderItems = orders.filter((item) => {
    const matchesStatus = filter === 'All' || item.itemStatus === filter;
    const matchesSearch = item.product.productName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Counts
  const totalCount = orders.length;
  const deliveredCount = orders.filter((o) => o.itemStatus === 'delivered').length;
  const cancelledCount = orders.filter((o) => o.itemStatus === 'cancelled').length;
  const shippedCount = orders.filter((o) => o.itemStatus === 'shipped').length;

  // Modal logic
  const openModal = (item: Order) => {
    setSelectedOrderItem(item);
    setModalVisible(true);
  };
  const closeModal = () => setModalVisible(false);

  const openHelpModal = () => {
    setModalVisible(false);
    setHelpModalVisible(true);
  };
  const closeHelpModal = () => setHelpModalVisible(false);

  const handleHelpSubmit = () => {
    if (!helpText.trim()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setHelpText('');
      setHelpModalVisible(false);
    }, 2000);
  };

  // Helper to compute estimated delivery date
  function computeEstimatedDelivery(orderDateStr: string) {
    const orderDate = new Date(orderDateStr);
    const estimatedDelivery = new Date(orderDate);
    estimatedDelivery.setDate(orderDate.getDate() + 6);
    return estimatedDelivery.toLocaleDateString();
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Here is where we "add" the functionality to show sampleOrderData 
  // in the 'Buy Again' section, WITHOUT removing the original FlatList 
  // for buyAgainData. We simply add a second FlatList.
  // ─────────────────────────────────────────────────────────────────────────────
  const buyAgainFromOrders = sampleOrderData.map((ord) => ({
    id: ord.ecomOrderID,
    title: ord.product.productName,
    image: ord.product.productImage,
  }));

  return (
    <View className="flex-1 mt-16 bg-[#FFF9F3]">
      {/* Header with Search */}
      <View className="bg-white px-4 py-6  flex-row justify-between items-center">
        <Text className="text-xl font-bold">YOUR ORDERS</Text>
        <TextInput
          placeholder="Search all Order"
          className="border border-gray-300 rounded px-3 py-1 w-1/2"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Buy Again (original code) */}
      <View className="mt-2">
        <View className="px-4 flex-row items-center justify-between">
          <Text className="font-bold text-base">Buy Again</Text>
          <TouchableOpacity>
            <Text className="text-blue-600">See More</Text>
          </TouchableOpacity>
        </View>

        {/* 
          Additional FlatList (ADDED CODE):
          This one displays the exact products from the sample orders 
          so users can "buy again" whatever they have ordered. 
        */}

        <FlatList
          data={buyAgainFromOrders}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="m-2 items-center">
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded"
                resizeMode="cover"
              />
              <Text className="text-center w-20" numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Filter Buttons - horizontally scrollable */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-2 px-2"
        >
          <FilterButton
            filter="All"
            label="Total Orders"
            iconName="shopping-basket"
            count={totalCount}
            currentFilter={filter}
            setFilter={setFilter}
          />
          <FilterButton
            filter="delivered"
            label="Delivered"
            iconName="check-circle-outline"
            count={deliveredCount}
            currentFilter={filter}
            setFilter={setFilter}
          />
          <FilterButton
            filter="cancelled"
            label="Cancelled"
            iconName="cancel"
            count={cancelledCount}
            currentFilter={filter}
            setFilter={setFilter}
          />
          <FilterButton
            filter="shipped"
            label="Shipped"
            iconName="local-shipping"
            count={shippedCount}
            currentFilter={filter}
            setFilter={setFilter}
          />
        </ScrollView>
      </View>

      {/* Orders List */}
      <FlatList
        data={filteredOrderItems}
        keyExtractor={(item) => item.ecomOrderID}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="mt-2"
        renderItem={({ item }) => (
          <TouchableOpacity
            className="mx-3 my-2 p-3 bg-white rounded shadow"
            onPress={() => openModal(item)}
          >
            <View className="flex-row">
              <Image
                source={{ uri: item.product.productImage }}
                className="w-20 h-20 mx-auto my-auto rounded mr-3"
              />
              <View className="flex-1">
                <Text className="font-semibold">
                  Ecom Order ID : {item.ecomOrderID}
                </Text>
                <Text>Product : {item.product.productName}</Text>
                <Text>Quantity : {item.product.quantity} pieces</Text>
                <Text>Price : Rs. {item.product.price}/-</Text>
                <Text
                  className={
                    item.itemStatus.toLowerCase() === 'delivered'
                      ? 'text-green-600'
                      : 'text-orange-600'
                  }
                >
                  Status : {item.deliveryStatus}
                </Text>
              </View>
              <View className="justify-center">
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#666" />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Main Modal (Product Details) */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        {selectedOrderItem && (
          <View className="flex-1 bg-opacity-80 bg-orange-200 justify-center">
            <View className="mx-4 bg-white rounded-lg p-4">
              <Text className="text-2xl font-bold mb-2">Product Details</Text>

              {/* Contact Info */}
              <Text className="text-lg font-semibold">Contact Information</Text>
              <Text>{selectedOrderItem.userDetails?.userName}</Text>
              <Text>{selectedOrderItem.userDetails?.userContactNumber}</Text>
              <Text>{selectedOrderItem.userDetails?.userEmail}</Text>

              {/* Shipping Address */}
              <Text className="text-lg font-semibold mt-4">Shipping Address</Text>
              <Text>
                {selectedOrderItem.addressDetails?.addressLine1},{' '}
                {selectedOrderItem.addressDetails?.city},{' '}
                {selectedOrderItem.addressDetails?.state},{' '}
                {selectedOrderItem.addressDetails?.zipCode},{' '}
                {selectedOrderItem.addressDetails?.country}
              </Text>

              {/* Item */}
              <Text className="text-lg font-semibold mt-4">Item</Text>
              <View className="flex-row mt-2">
                <Image
                  source={{ uri: selectedOrderItem.product.productImage }}
                  className="w-16 h-16 rounded mr-4"
                />
                <View>
                  <Text className="font-bold">
                    {selectedOrderItem.product.productName}
                  </Text>
                  <Text>Quantity: {selectedOrderItem.product.quantity}</Text>
                  <Text>Price: Rs.{selectedOrderItem.product.price}</Text>
                  <Text>Delivery Status: {selectedOrderItem.deliveryStatus}</Text>
                </View>
              </View>

              {/* Shop Details */}
              <Text className="text-lg font-semibold mt-4">Shop Details</Text>
              <Text>Shop Name: {selectedOrderItem.shopName}</Text>
              <Text>Shop Email: {selectedOrderItem.shopEmail}</Text>

              {/* Additional Info */}
              <View className="mt-4 border border-gray-300 rounded">
                <TableRow
                  label="Order Date"
                  value={new Date(selectedOrderItem.orderDate).toLocaleDateString()}
                />
                <TableRow
                  label="Estimated Delivery Date"
                  value={computeEstimatedDelivery(selectedOrderItem.orderDate)}
                />
                <TableRow
                  label="Payment Status"
                  value={selectedOrderItem.paymentStatus ? 'Paid' : 'Pending'}
                />
                <TableRow
                  label="Delivery Charge"
                  value={`Rs.${selectedOrderItem.deliveryCharge}`}
                />
                <TableRow
                  label="Grand Total"
                  value={`Rs.${selectedOrderItem.grandTotal}`}
                />
                <TableRow
                  label="Line Total"
                  value={`Rs.${
                    selectedOrderItem.product.price *
                    selectedOrderItem.product.quantity
                  }`}
                />
              </View>

              {/* Buttons */}
              <View className="flex-row justify-end mt-4 gap-4 space-x-3">
                <TouchableOpacity
                  className="bg-red-500 rounded px-4 py-2"
                  onPress={closeModal}
                >
                  <Text className="text-white">Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-orange-500 rounded px-4 py-2"
                  onPress={openHelpModal}
                >
                  <Text className="text-white">Need Help?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Modal>

      {/* Need Help Modal */}
      <Modal
        visible={helpModalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeHelpModal}
        presentationStyle="overFullScreen"
      >
        <View className="flex-1 bg-orange-300 bg-opacity-50 justify-center">
          <View className="mx-4 bg-white rounded-lg p-4">
            {!isSubmitting ? (
              <>
                <Text className="text-xl font-bold text-center">Need Help?</Text>
                <TextInput
                  placeholder="Describe your query or problem..."
                  multiline
                  numberOfLines={4}
                  className="border border-gray-300 mt-4 p-2 rounded text-base"
                  value={helpText}
                  onChangeText={setHelpText}
                />
                <View className="flex-row justify-center mt-4 gap-4 space-x-3">
                  <TouchableOpacity
                    className="bg-blue-500 rounded px-4 py-2"
                    onPress={handleHelpSubmit}
                  >
                    <Text className="text-white">Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-gray-400 rounded px-4 py-2"
                    onPress={closeHelpModal}
                  >
                    <Text className="text-white">Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View className="items-center">
                <MaterialIcons name="check-circle-outline" size={48} color="green" />
                <Text className="mt-2 text-lg font-semibold">
                  Your problem has been submitted!
                </Text>
                <Text>We will contact you soon.</Text>
                <Text className="mt-2 text-center">
                  You can also call us at +9660000146
                  {'\n'}or contact us at vedicvaibhav72@gmail.com
                </Text>
                <TouchableOpacity
                  className="bg-blue-500 rounded px-4 py-2 mt-4"
                  onPress={closeHelpModal}
                >
                  <Text className="text-white">Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
// // app/product/[id].tsx
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
//   Alert,
// } from "react-native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons"; // Adjust the path as necessary // Adjust the path as necessary
// import { Product } from "@/components/HomePageComponents/types";
// import { productsData } from "../data/products";

// const ProductDetailScreen: React.FC = () => {
//   const { id } = useGlobalSearchParams(); // Extract the dynamic route parameter
//   const router = useRouter();

//   // Find the product based on the 'id'
//   const product: Product | undefined = productsData.find((item) => item.id === id);

//   // Handle case where product is not found
//   if (!product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">Product not found.</Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.name}! $${product.price}. https://vedic.shop/product/${product.id}`,
//       });
//     } catch (error) {
//       console.log("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   const handleBuyNow = () => {
//     // Implement your buy now logic here
//     Alert.alert("Buy Now", `Proceeding to buy ${product.name}.`);
//   };

//   const handleAddToCart = () => {
//     // Implement your add to cart logic here
//     Alert.alert("Add to Cart", `${product.name} has been added to your cart.`);
//   };

//   const images = product.images || [product.image];
//   const screenWidth = Dimensions.get("window").width;

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center mt-14 justify-between px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity onPress={() => Alert.alert('Menu', 'Menu pressed')}>
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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">{product.name}</Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.rating} ({product.reviews} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">${product.price.toFixed(2)}</Text>
//             {product.oldPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ${product.oldPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity className="mt-2" onPress={handleShare}>
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
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

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop}
//             </Text>
//           )}
//           {product.category && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.category}
//             </Text>
//           )}
//           {product.subCategories && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text>{" "}
//               {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">{product.description}</Text>
//           </View>
//         )}

//         {/* Features */}
//         {product.features && product.features.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Features</Text>
//             {product.features.map((feature, index) => (
//               <View key={index} className="flex-row items-center mt-2">
//                 <Ionicons name="checkmark-circle" size={20} color="green" />
//                 <Text className="ml-2 text-sm text-gray-600">{feature}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center mb-5 justify-between px-4 py-4 border-t border-gray-200 bg-white">
//         <TouchableOpacity
//           className="flex-1 bg-blue-500 py-3 rounded-lg mr-2"
//           onPress={handleBuyNow}
//         >
//           <Text className="text-white text-center font-bold">Buy Now</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
//           onPress={handleAddToCart}
//         >
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;


// // app/product/[id].tsx
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
//   Alert,
// } from "react-native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Product } from "@/components/HomePageComponents/types";
// import { productsData } from "../data/products";
// import { useCart } from "../contexts/CartContext"; // Import the cart context

// const ProductDetailScreen: React.FC = () => {
//   // Extract the product id from the URL
//   const { id } = useGlobalSearchParams(); 
//   const router = useRouter();
//   const { addItem, clearCart } = useCart(); // Access cart functions

//   // Find the product by id
//   const product: Product | undefined = productsData.find(
//     (item) => item.id === id
//   );

//   // If product is not found, show an error message with a back button
//   if (!product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">Product not found.</Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Local state for quantity and image slider
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.name}! $${product.price}. https://vedic.shop/product/${product.id}`,
//       });
//     } catch (error) {
//       console.log("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   // When the user clicks "Buy Now", clear the current cart,
//   // add this product (with its quantity) to the cart, and navigate to checkout.
//   const handleBuyNow = () => {
//     clearCart(); // Clear any existing items in the cart
//     addItem(product, quantity); // Add the current product with the chosen quantity
//     router.push("/checkout"); // Navigate to the checkout page
//   };

//   // When the user clicks "Add to Cart", simply add the product to the cart.
//   const handleAddToCart = () => {
//     addItem(product, quantity);
//     Alert.alert("Add to Cart", `${product.name} has been added to your cart.`);
//   };

//   // Use the product images array if available; otherwise, use the main image
//   const images = product.images || [product.image];
//   const screenWidth = Dimensions.get("window").width;

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center mt-14 justify-between px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity onPress={() => Alert.alert("Menu", "Menu pressed")}>
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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">
//             {product.name}
//           </Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.rating} ({product.reviews} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">
//               ${product.price.toFixed(2)}
//             </Text>
//             {product.oldPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ${product.oldPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity className="mt-2" onPress={handleShare}>
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
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

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop}
//             </Text>
//           )}
//           {product.category && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.category}
//             </Text>
//           )}
//           {product.subCategories && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text>{" "}
//               {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">
//               {product.description}
//             </Text>
//           </View>
//         )}

//         {/* Features */}
//         {product.features && product.features.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Features</Text>
//             {product.features.map((feature, index) => (
//               <View key={index} className="flex-row items-center mt-2">
//                 <Ionicons name="checkmark-circle" size={20} color="green" />
//                 <Text className="ml-2 text-sm text-gray-600">{feature}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center mb-5 justify-between px-4 py-4 border-t border-gray-200 bg-white">
       
//         <TouchableOpacity
//           className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
//           onPress={handleAddToCart}
//         >
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;




// app/product/[id].tsx

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Share,
//   FlatList,
//   Dimensions,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Product } from "@/components/HomePageComponents/types";
// import { useCart } from "../contexts/CartContext"; // Import the cart context

// const ProductDetailScreen: React.FC = () => {
//   // Extract the product id from the URL
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const { addItem, clearCart } = useCart(); // Access cart functions

//   // Local state for product, loading and error
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Local state for quantity and image slider index
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const screenWidth = Dimensions.get("window").width;

//   // Fetch product details from API in real time
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://192.168.1.42:5001/fetch-product-by-id/${id}`);
//         if (!response.ok) {
//           throw new Error(`Network error: ${response.status}`);
//         }
//         const data: Product = await response.json();
//         setProduct(data);
//       } catch (err: any) {
//         setError(err.message || "Something went wrong.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Display loading indicator
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   // Display error message if any error occurs or product is not found
//   if (error || !product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">
//           {error ? error : "Product not found."}
//         </Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Handlers for quantity selector
//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   // Handler for sharing product info
//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.name}! $${product.price}. https://vedic.shop/product/${product.id}`,
//       });
//     } catch (error) {
//       console.log("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   // When user clicks "Buy Now": clear cart, add this product with quantity, navigate to checkout.
//   const handleBuyNow = () => {
//     clearCart(); // Clear any existing items in the cart
//     addItem(product, quantity); // Add the current product with the chosen quantity
//     router.push("/checkout"); // Navigate to the checkout page
//   };

//   // When user clicks "Add to Cart": simply add product to cart.
//   const handleAddToCart = () => {
//     addItem(product, quantity);
//     Alert.alert("Add to Cart", `${product.name} has been added to your cart.`);
//   };

//   // Use product images array if available; otherwise, use main image.
//   const images = product.images && product.images.length > 0 ? product.images : [product.image];

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center mt-14 justify-between px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity onPress={() => Alert.alert("Menu", "Menu pressed")}>
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
//             const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">{product.name}</Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.rating} ({product.reviews} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">
//               ${product.price.toFixed(2)}
//             </Text>
//             {product.oldPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ${product.oldPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity className="mt-2" onPress={handleShare}>
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
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

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop}
//             </Text>
//           )}
//           {product.category && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.category}
//             </Text>
//           )}
//           {product.subCategories && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text> {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">{product.description}</Text>
//           </View>
//         )}

//         {/* Features */}
//         {product.features && product.features.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Features</Text>
//             {product.features.map((feature, index) => (
//               <View key={index} className="flex-row items-center mt-2">
//                 <Ionicons name="checkmark-circle" size={20} color="green" />
//                 <Text className="ml-2 text-sm text-gray-600">{feature}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center mb-5 justify-between px-4 py-4 border-t border-gray-200 bg-white">
//         <TouchableOpacity
//           className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
//           onPress={handleAddToCart}
//         >
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;



// // app/product/[id].tsx
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
//   Alert,
// } from "react-native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Product } from "@/components/HomePageComponents/types";
// import { productsData } from "../data/products";
// import { useCart } from "../contexts/CartContext"; // Import the cart context

// const ProductDetailScreen: React.FC = () => {
//   // Extract the product id from the URL (assumes the id matches the product's _id)
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const { addItem, clearCart } = useCart(); // Access cart functions

//   // Find the product by _id (ensure that your productsData contains the _id field)
//   const product: Product | undefined = productsData.find(
//     (item) => item._id === id
//   );

//   // If product is not found, show an error message with a back button
//   if (!product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">Product not found.</Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Local state for quantity and image slider
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.productName}! ₹${product.discountedPrice.toFixed(
//           2
//         )}. https://vedic.shop/product/${product._id}`,
//       });
//     } catch (error) {
//       console.log("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   // When the user clicks "Buy Now": clear the cart, add this product with quantity, and navigate to checkout.
//   const handleBuyNow = () => {
//     clearCart(); // Clear any existing items in the cart
//     addItem(product, quantity); // Add the current product with the chosen quantity
//     router.push("/checkout"); // Navigate to the checkout page
//   };

//   // When the user clicks "Add to Cart": simply add the product to the cart.
//   const handleAddToCart = () => {
//     addItem(product, quantity);
//     Alert.alert("Add to Cart", `${product.productName} has been added to your cart.`);
//   };

//   // Use the product images array if available; otherwise, use the main image.
//   const images = product.images && product.images.length > 0 ? product.images : [product.image];
//   const screenWidth = Dimensions.get("window").width;

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center mt-14 justify-between px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity onPress={() => Alert.alert("Menu", "Menu pressed")}>
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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">
//             {product.productName}
//           </Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.productRating} ({product.reviews} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">
//               ₹{product.discountedPrice.toFixed(2)}
//             </Text>
//             {product.originalPrice > product.discountedPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ₹{product.originalPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity className="mt-2" onPress={handleShare}>
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
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

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop}
//             </Text>
//           )}
//           {product.category && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.category}
//             </Text>
//           )}
//           {product.subCategories && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text> {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">
//               {product.description}
//             </Text>
//           </View>
//         )}

//         {/* Features */}
//         {product.features && product.features.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Features</Text>
//             {product.features.map((feature, index) => (
//               <View key={index} className="flex-row items-center mt-2">
//                 <Ionicons name="checkmark-circle" size={20} color="green" />
//                 <Text className="ml-2 text-sm text-gray-600">{feature}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center mb-5 justify-between px-4 py-4 border-t border-gray-200 bg-white">
//         <TouchableOpacity
//           className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
//           onPress={handleAddToCart}
//         >
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;





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
//   Alert,
// } from "react-native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Product } from "@/components/HomePageComponents/types";
// import { productsData } from "../data/products";
// import { useCart } from "../contexts/CartContext"; // Import the cart context

// const ProductDetailScreen: React.FC = () => {
//   // Extract the product id from the URL (using _id as unique identifier)
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const { addItem, clearCart } = useCart(); // Access cart functions

//   // Find the product by _id
//   const product: Product | undefined = productsData.find(
//     (item) => item._id === id
//   );

//   // If product is not found, show an error message with a back button
//   if (!product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">Product not found.</Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Local state for quantity and image slider
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.productName}! ₹${product.discountedPrice.toFixed(
//           2
//         )}. https://vedic.shop/product/${product._id}`,
//       });
//     } catch (error) {
//       console.log("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   // When the user clicks "Buy Now", clear the current cart,
//   // add this product (with its quantity) to the cart, and navigate to checkout.
//   const handleBuyNow = () => {
//     clearCart(); // Clear any existing items in the cart
//     addItem(product, quantity); // Add the current product with the chosen quantity
//     router.push("/checkout"); // Navigate to the checkout page
//   };

//   // When the user clicks "Add to Cart", simply add the product to the cart.
//   const handleAddToCart = () => {
//     addItem(product, quantity);
//     Alert.alert("Add to Cart", `${product.productName} has been added to your cart.`);
//   };

//   // Use the product images array if available; otherwise, use the main image
//   const images = (product.productImages && product.productImages.length > 0)
//     ? product.productImages
//     : [product.image];
//   const screenWidth = Dimensions.get("window").width;

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center mt-14 justify-between px-4 py-4 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity onPress={() => Alert.alert("Menu", "Menu pressed")}>
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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">
//             {product.productName}
//           </Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.productRating} ({product.productReview} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">
//               ₹{product.discountedPrice.toFixed(2)}
//             </Text>
//             {product.originalPrice > product.discountedPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ₹{product.originalPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity className="mt-2" onPress={handleShare}>
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
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

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop.name}
//             </Text>
//           )}
//           {product.productCategory && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.productCategory.name}
//             </Text>
//           )}
//           {product.subCategories && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text> {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">
//               {product.description}
//             </Text>
//           </View>
//         )}

//         {/* Features */}
//         {product.features && product.features.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Features</Text>
//             {product.features.map((feature, index) => (
//               <View key={index} className="flex-row items-center mt-2">
//                 <Ionicons name="checkmark-circle" size={20} color="green" />
//                 <Text className="ml-2 text-sm text-gray-600">{feature}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center mb-5 justify-between px-4 py-4 border-t border-gray-200 bg-white">
//         {/* You can also add a "Buy Now" button here if needed */}
//         <TouchableOpacity
//           className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
//           onPress={handleAddToCart}
//         >
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;



// // app/product/[id].tsx
// import React, { useEffect, useState } from 'react';
// import { 
//   View, 
//   Text, 
//   Image, 
//   ScrollView, 
//   ActivityIndicator, 
//   TouchableOpacity, 
//   Alert 
// } from 'react-native';
// import axios from 'axios';
// import { useLocalSearchParams } from 'expo-router';

// // Define the product interface based on your backend API response
// export interface Product {
//   _id: string;
//   productId: string;
//   productName: string;
//   productReview: string;
//   productRating: number;
//   originalPrice: number;
//   discountedPrice: number;
//   stock: number;
//   productImages: string[];
//   availableSizes: string[];
//   productColors: string[];
//   description: string;
//   dimensions: {
//     length: { value: number; unit: string };
//     width: { value: number; unit: string };
//     height: { value: number; unit: string };
//     weight: { value: number; unit: string };
//   };
//   shop: {
//     id: string;
//     name: string;
//   };
//   productCategory: { id: string; name: string };
//   subCategories: string[];
// }

// const ProductDetailScreen = () => {
//   // Extract the product id from the URL parameters
//   const { id } = useLocalSearchParams<{ id: string }>();

//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [quantity, setQuantity] = useState<number>(1);

//   useEffect(() => {
//     // Fetch product detail from the backend
//     axios
//       .get(`http://192.168.1.42:5001/fetch-product-by-id/${id}`)
//       .then((response) => {
//         const productData: Product = response.data.Product;
//         setProduct(productData);
//         if (productData.productImages && productData.productImages.length > 0) {
//           setSelectedImage(productData.productImages[0]);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching product:', error);
//         Alert.alert('Error', 'Product not found.');
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   if (!product) {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <Text className="text-lg text-gray-700">Product not found.</Text>
//       </View>
//     );
//   }

//   // Calculate discount percentage if applicable
//   const discountPercentage =
//     product.originalPrice > product.discountedPrice
//       ? Math.round(
//           ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
//         )
//       : 0;

//   const handleIncrement = () => {
//     if (quantity < product.stock) {
//       setQuantity(quantity + 1);
//     } else {
//       Alert.alert('Stock', `Only ${product.stock} item(s) available.`);
//     }
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     if (product.stock < 1) {
//       Alert.alert('Out of Stock', 'This product is out of stock.');
//       return;
//     }
//     // Insert your cart logic here. For now, we simply display an alert.
//     Alert.alert('Added to Cart', `${product.productName} has been added to your cart.`);
//   };

//   return (
//     <ScrollView className="flex-1 bg-white">
//       {/* Thumbnail Carousel */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false} 
//         className="mt-4 px-2"
//       >
//         {product.productImages.map((img, index) => (
//           <TouchableOpacity key={index} onPress={() => setSelectedImage(img)}>
//             <Image
//               source={{ uri: img }}
//               className={`w-20 h-20 rounded m-2 border ${selectedImage === img ? 'border-orange-500' : 'border-gray-300'}`}
//             />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Main Product Image */}
//       <Image 
//         source={{ uri: selectedImage }} 
//         className="w-full h-64 rounded mx-auto" 
//         resizeMode="cover" 
//       />

//       <View className="p-4">
//         {/* Product Title */}
//         <Text className="text-2xl font-bold text-gray-800">{product.productName}</Text>

//         {/* Price & Discount */}
//         <View className="flex-row items-center mt-2">
//           <Text className="text-xl text-green-600 font-bold">
//             ₹{product.discountedPrice.toFixed(2)}
//           </Text>
//           {discountPercentage > 0 && (
//             <>
//               <Text className="text-base text-gray-500 line-through ml-2">
//                 ₹{product.originalPrice.toFixed(2)}
//               </Text>
//               <Text className="text-sm text-red-500 ml-2">-{discountPercentage}%</Text>
//             </>
//           )}
//         </View>

//         {/* Rating & Reviews */}
//         <View className="flex-row items-center mt-2">
//           <Text className="text-yellow-500">
//             {'★'.repeat(Math.round(product.productRating))}{'☆'.repeat(5 - Math.round(product.productRating))}
//           </Text>
//           <Text className="ml-2 text-sm text-gray-600">
//             ({product.productReview} reviews)
//           </Text>
//         </View>

//         {/* Description */}
//         <Text className="mt-4 text-gray-700">{product.description}</Text>

//         {/* Quantity Selection */}
//         <View className="flex-row items-center mt-4">
//           <Text className="text-lg text-gray-800">Quantity: </Text>
//           <TouchableOpacity 
//             onPress={handleDecrement} 
//             className="bg-gray-200 p-2 rounded ml-2"
//           >
//             <Text className="text-xl">-</Text>
//           </TouchableOpacity>
//           <Text className="px-4 text-lg">{quantity}</Text>
//           <TouchableOpacity 
//             onPress={handleIncrement} 
//             className="bg-gray-200 p-2 rounded"
//           >
//             <Text className="text-xl">+</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Stock Information */}
//         <Text className="mt-2 text-sm text-gray-500">Stock: {product.stock}</Text>

//         {/* Add to Cart Button */}
//         <TouchableOpacity 
//           onPress={handleAddToCart} 
//           className="mt-6 bg-black py-3 rounded-lg items-center"
//         >
//           <Text className="text-white text-lg font-medium">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default ProductDetailScreen;


// // app/product/[id].tsx
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';
// import { useGlobalSearchParams } from 'expo-router';

// interface Dimensions {
//   length: { value: number; unit: string };
//   width: { value: number; unit: string };
//   height: { value: number; unit: string };
//   weight: { value: number; unit: string };
// }

// interface Product {
//   _id: string;
//   productId: string;
//   productName: string;
//   productCategory: {
//     id: string;
//     name: string;
//   };
//   description: string;
//   originalPrice: number;
//   discountedPrice: number;
//   subCategories: string[];
//   stock: number;
//   productColors: string[];
//   availableSizes: string[];
//   dimensions: Dimensions;
//   productImages: string[];
//   addedOn: string;
//   shop: {
//     id: string;
//     name: string;
//   };
//   isActive: boolean;
//   isFeatured: boolean;
//   isApproved: boolean;
//   productRating: number;
//   productReview: string;
//   __v: number;
//   productBasePrice: number;
// }

// const ProductDetailScreen = () => {
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;
//     axios
//     .get(`http://192.168.1.42:5001/fetch-product-by-id/${id}`)
//     .then(response => {
//       setProduct(response.data);
//     })
//     .catch(err => {
//       console.error('Error fetching product detail:', err.response || err);
//       setError('Something went wrong while fetching product details.');
//     })
//     .finally(() => {
//       setLoading(false);
//     });
  
//   }, [id]);

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   if (error || !product) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error || 'Product not found.'}</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {/* Product Images */}
//       <ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         style={styles.imageScrollContainer}
//       >
//         {product.productImages.map((uri, index) => (
//           <Image
//             key={index}
//             source={{ uri }}
//             style={styles.productImage}
//             resizeMode="cover"
//           />
//         ))}
//       </ScrollView>

//       {/* Product Name */}
//       <Text style={styles.productName}>{product.productName}</Text>

//       {/* Product Description */}
//       <Text style={styles.description}>{product.description}</Text>

//       {/* Pricing */}
//       <View style={styles.priceContainer}>
//         <Text style={styles.discountedPrice}>
//           ${product.discountedPrice.toFixed(2)}
//         </Text>
//         {product.originalPrice > product.discountedPrice && (
//           <Text style={styles.originalPrice}>
//             ${product.originalPrice.toFixed(2)}
//           </Text>
//         )}
//       </View>

//       {/* Category & Shop */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Category: </Text>
//         <Text style={styles.infoText}>{product.productCategory.name}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Shop: </Text>
//         <Text style={styles.infoText}>{product.shop.name}</Text>
//       </View>

//       {/* Stock and Rating */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Stock: </Text>
//         <Text style={styles.infoText}>{product.stock}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Rating: </Text>
//         <Text style={styles.infoText}>{product.productRating.toFixed(1)}</Text>
//       </View>

//       {/* Dimensions */}
//       <View style={styles.infoSection}>
//         <Text style={styles.sectionTitle}>Dimensions:</Text>
//         <Text style={styles.infoText}>
//           Length: {product.dimensions.length.value}{' '}
//           {product.dimensions.length.unit}
//         </Text>
//         <Text style={styles.infoText}>
//           Width: {product.dimensions.width.value}{' '}
//           {product.dimensions.width.unit}
//         </Text>
//         <Text style={styles.infoText}>
//           Height: {product.dimensions.height.value}{' '}
//           {product.dimensions.height.unit}
//         </Text>
//         <Text style={styles.infoText}>
//           Weight: {product.dimensions.weight.value}{' '}
//           {product.dimensions.weight.unit}
//         </Text>
//       </View>

//       {/* Available Colors */}
//       <View style={styles.infoSection}>
//         <Text style={styles.sectionTitle}>Available Colors:</Text>
//         <View style={styles.colorsContainer}>
//           {product.productColors.map((color, index) => (
//             <View
//               key={index}
//               style={[styles.colorCircle, { backgroundColor: color }]}
//             />
//           ))}
//         </View>
//       </View>

//       {/* Available Sizes */}
//       <View style={styles.infoSection}>
//         <Text style={styles.sectionTitle}>Available Sizes:</Text>
//         <View style={styles.sizesContainer}>
//           {product.availableSizes.map((size, index) => (
//             <View key={index} style={styles.sizeBox}>
//               <Text>{size}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Sub Categories */}
//       <View style={styles.infoSection}>
//         <Text style={styles.sectionTitle}>Sub Categories:</Text>
//         <Text style={styles.infoText}>{product.subCategories.join(', ')}</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default ProductDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   imageScrollContainer: {
//     marginBottom: 16,
//   },
//   productImage: {
//     width: 300,
//     height: 200,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 16,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   discountedPrice: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#000',
//     marginRight: 8,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   infoLabel: {
//     fontWeight: '600',
//   },
//   infoText: {
//     fontSize: 16,
//   },
//   infoSection: {
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontWeight: '600',
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   colorsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   colorCircle: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   sizesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   sizeBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 8,
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//   },
// });



// // app/product/[id].tsx
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';
// import { useGlobalSearchParams } from 'expo-router';

// interface Dimensions {
//   length: { value: number; unit: string };
//   width: { value: number; unit: string };
//   height: { value: number; unit: string };
//   weight: { value: number; unit: string };
// }

// interface Product {
//   _id: string;
//   productId: string;
//   productName: string;
//   productCategory: {
//     id: string;
//     name: string;
//   };
//   description: string;
//   originalPrice: number;
//   discountedPrice: number;
//   subCategories: string[];
//   stock: number;
//   productColors: string[];
//   availableSizes: string[];
//   dimensions: Dimensions;
//   productImages: string[];
//   addedOn: string;
//   shop: {
//     id: string;
//     name: string;
//   };
//   isActive: boolean;
//   isFeatured: boolean;
//   isApproved: boolean;
//   productRating: number;
//   productReview: string;
//   __v: number;
//   productBasePrice: number;
// }

// const ProductDetailScreen = () => {
//   // Extract the _id from the URL parameters
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://192.168.1.42:5001/fetch-product-by-id/${id}`)
//       .then((response) => {
//         // Since the API returns an object with the Product key, extract it
//         if (response.data && response.data.Product) {
//           setProduct(response.data.Product);
//         } else {
//           setError('Product not found.');
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching product detail:', err.response || err);
//         setError('Something went wrong while fetching product details.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   if (error || !product) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error || 'Product not found.'}</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {/* Product Images */}
//       <ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         style={styles.imageScrollContainer}
//       >
//         {product.productImages.map((uri, index) => (
//           <Image
//             key={index}
//             source={{ uri }}
//             style={styles.productImage}
//             resizeMode="cover"
//           />
//         ))}
//       </ScrollView>

//       {/* Product Name */}
//       <Text style={styles.productName}>{product.productName}</Text>

//       {/* Product Description */}
//       <Text style={styles.description}>{product.description}</Text>

//       {/* Pricing */}
//       <View style={styles.priceContainer}>
//         <Text style={styles.discountedPrice}>
//           ${product.discountedPrice.toFixed(2)}
//         </Text>
//         {product.originalPrice > product.discountedPrice && (
//           <Text style={styles.originalPrice}>
//             ${product.originalPrice.toFixed(2)}
//           </Text>
//         )}
//       </View>

//       {/* Category & Shop */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Category: </Text>
//         <Text style={styles.infoText}>{product.productCategory.name}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Shop: </Text>
//         <Text style={styles.infoText}>{product.shop.name}</Text>
//       </View>

//       {/* Stock and Rating */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Stock: </Text>
//         <Text style={styles.infoText}>{product.stock}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Rating: </Text>
//         <Text style={styles.infoText}>{product.productRating.toFixed(1)}</Text>
//       </View>

//       {/* Dimensions */}
//       <View style={styles.infoSection}>
//         <Text style={styles.sectionTitle}>Dimensions:</Text>
//         <Text style={styles.infoText}>
//           Length: {product.dimensions.length.value}{' '}
//           {product.dimensions.length.unit}
//         </Text>
//         <Text style={styles.infoText}>
//           Width: {product.dimensions.width.value}{' '}
//           {product.dimensions.width.unit}
//         </Text>
//         <Text style={styles.infoText}>
//           Height: {product.dimensions.height.value}{' '}
//           {product.dimensions.height.unit}
//         </Text>
//         <Text style={styles.infoText}>
//           Weight: {product.dimensions.weight.value}{' '}
//           {product.dimensions.weight.unit}
//         </Text>
//       </View>

//       {/* Available Colors */}
//       {product.productColors.length > 0 && (
//         <View style={styles.infoSection}>
//           <Text style={styles.sectionTitle}>Available Colors:</Text>
//           <View style={styles.colorsContainer}>
//             {product.productColors.map((color, index) => (
//               <View
//                 key={index}
//                 style={[styles.colorCircle, { backgroundColor: color }]}
//               />
//             ))}
//           </View>
//         </View>
//       )}

//       {/* Available Sizes */}
//       {product.availableSizes.length > 0 && (
//         <View style={styles.infoSection}>
//           <Text style={styles.sectionTitle}>Available Sizes:</Text>
//           <View style={styles.sizesContainer}>
//             {product.availableSizes.map((size, index) => (
//               <View key={index} style={styles.sizeBox}>
//                 <Text>{size}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       )}

//       {/* Sub Categories */}
//       <View style={styles.infoSection}>
//         <Text style={styles.sectionTitle}>Sub Categories:</Text>
//         <Text style={styles.infoText}>{product.subCategories.join(', ')}</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default ProductDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   imageScrollContainer: {
//     marginBottom: 16,
//   },
//   productImage: {
//     width: 300,
//     height: 200,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 16,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   discountedPrice: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#000',
//     marginRight: 8,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   infoLabel: {
//     fontWeight: '600',
//   },
//   infoText: {
//     fontSize: 16,
//   },
//   infoSection: {
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontWeight: '600',
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   colorsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   colorCircle: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   sizesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   sizeBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 8,
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//   },
// });



// // app/product/[id].tsx
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Share,
//   FlatList,
//   Dimensions,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import {  useGlobalSearchParams, useRouter } from "expo-router";
// import axios from "axios";
// import { Ionicons } from "@expo/vector-icons";

// // Define the Product interface based on your API response
// interface DimensionsType {
//   length: { value: number; unit: string };
//   width: { value: number; unit: string };
//   height: { value: number; unit: string };
//   weight: { value: number; unit: string };
// }

// interface Product {
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
//   dimensions: DimensionsType;
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

// const ProductDetailScreen = () => {
//   // Extract the _id from the URL parameters
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const screenWidth = Dimensions.get("window").width;

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://192.168.1.42:5001/fetch-product-by-id/${id}`)
//       .then((response) => {
//         if (response.data && response.data.Product) {
//           setProduct(response.data.Product);
//         } else {
//           setError("Product not found.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching product detail:", err.response || err);
//         setError("Something went wrong while fetching product details.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleShare = async () => {
//     if (!product) return;
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.productName}! $${product.discountedPrice.toFixed(
//           2
//         )}`,
//       });
//     } catch (error) {
//       console.error("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   const handleBuyNow = () => {
//     if (!product) return;
//     Alert.alert("Buy Now", `Proceeding to buy ${product.productName}.`);
//   };

//   const handleAddToCart = () => {
//     if (!product) return;
//     Alert.alert("Add to Cart", `${product.productName} has been added to your cart.`);
//   };

//   if (loading) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   if (error || !product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">{error || "Product not found."}</Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Use productImages if available; otherwise, fallback to a placeholder image
//   const images =
//     product.productImages && product.productImages.length > 0
//       ? product.productImages
//       : ["https://via.placeholder.com/300"];

//   return (
//     <View className="flex-1 pb-4 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between px-4 py-4 mt-14 border-b border-gray-200">
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text className="text-lg font-bold">Product Details</Text>
//         <TouchableOpacity onPress={() => Alert.alert("Menu", "Menu pressed")}>
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
//             const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">{product.productName}</Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.productRating.toFixed(1)} ({product.productReview} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">
//               ${product.discountedPrice.toFixed(2)}
//             </Text>
//             {product.originalPrice > product.discountedPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ${product.originalPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity onPress={handleShare} className="mt-2">
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Quantity Selector */}
//         <View className="flex-row items-center px-4 mt-4">
//           <Text className="text-lg font-bold">Quantity:</Text>
//           <View className="flex-row items-center ml-4 border border-gray-300 rounded-lg">
//             <TouchableOpacity onPress={handleDecrease} className="px-3 py-2 bg-gray-100 rounded-l-lg">
//               <Text className="text-lg font-bold">-</Text>
//             </TouchableOpacity>
//             <Text className="px-4 py-2">{quantity}</Text>
//             <TouchableOpacity onPress={handleIncrease} className="px-3 py-2 bg-gray-100 rounded-r-lg">
//               <Text className="text-lg font-bold">+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop.name}
//             </Text>
//           )}
//           {product.productCategory && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.productCategory.name}
//             </Text>
//           )}
//           {product.subCategories && product.subCategories.length > 0 && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text>{" "}
//               {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">
//               {product.description.replace(/<[^>]*>?/gm, "")}
//             </Text>
//           </View>
//         )}

//         {/* Dimensions */}
//         <View className="px-4 mt-6">
//           <Text className="text-lg font-bold text-gray-800">Dimensions</Text>
//           <Text className="text-sm text-gray-600 mt-2">
//             Length: {product.dimensions.length.value} {product.dimensions.length.unit}
//           </Text>
//           <Text className="text-sm text-gray-600 mt-1">
//             Width: {product.dimensions.width.value} {product.dimensions.width.unit}
//           </Text>
//           <Text className="text-sm text-gray-600 mt-1">
//             Height: {product.dimensions.height.value} {product.dimensions.height.unit}
//           </Text>
//           <Text className="text-sm text-gray-600 mt-1">
//             Weight: {product.dimensions.weight.value} {product.dimensions.weight.unit}
//           </Text>
//         </View>

//         {/* Available Colors */}
//         {product.productColors && product.productColors.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Available Colors</Text>
//             <View className="flex-row items-center mt-2">
//               {product.productColors.map((color, index) => (
//                 <View
//                   key={index}
//                   style={{ backgroundColor: color }}
//                   className="w-8 h-8 rounded-full mr-2"
//                 />
//               ))}
//             </View>
//           </View>
//         )}

//         {/* Available Sizes */}
//         {product.availableSizes && product.availableSizes.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Available Sizes</Text>
//             <View className="flex-row items-center mt-2">
//               {product.availableSizes.map((size, index) => (
//                 <View key={index} className="border border-gray-300 rounded-lg px-3 py-1 mr-2">
//                   <Text className="text-sm">{size}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center justify-between px-4 py-4 border-t border-gray-200 bg-white">
      
//         <TouchableOpacity onPress={handleAddToCart} className="flex-1 bg-gray-200 py-3 rounded-lg ml-2">
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;


// app/product/[id].tsx

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Share,
//   FlatList,
//   Dimensions,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import axios from "axios";
// import { Ionicons } from "@expo/vector-icons";
// import { useCart } from "@/app/contexts/CartContext";

// // Define the Product interface based on your API response
// interface DimensionsType {
//   length: { value: number; unit: string };
//   width: { value: number; unit: string };
//   height: { value: number; unit: string };
//   weight: { value: number; unit: string };
// }

// interface Product {
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
//   dimensions: DimensionsType;
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

// const ProductDetailScreen = () => {
//   // Extract the product _id from URL parameters
//   const { id } = useGlobalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const { addItem, clearCart } = useCart(); // Get cart functions

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const screenWidth = Dimensions.get("window").width;

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://192.168.1.42:5001/fetch-product-by-id/${id}`)
//       .then((response) => {
//         if (response.data && response.data.Product) {
//           setProduct(response.data.Product);
//         } else {
//           setError("Product not found.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching product detail:", err.response || err);
//         setError("Something went wrong while fetching product details.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);

//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleShare = async () => {
//     if (!product) return;
//     try {
//       await Share.share({
//         message: `Check out this amazing product: ${product.productName}! ₹${product.discountedPrice.toFixed(
//           2
//         )}`,
//       });
//     } catch (error) {
//       console.error("Error sharing product:", error);
//       Alert.alert("Share Error", "Unable to share the product at this time.");
//     }
//   };

//   // Buy Now: Clear the cart, add this product with selected quantity, then navigate to checkout
//   const handleBuyNow = () => {
//     if (!product) return;
//     clearCart();
//     addItem(product, quantity);
//     router.push("/checkout");
//   };

//   // Add to Cart: Just add the product with the selected quantity
//   const handleAddToCart = () => {
//     if (!product) return;
//     addItem(product, quantity);
//     Alert.alert("Add to Cart", `${product.productName} has been added to your cart.`);
//   };

//   if (loading) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   if (error || !product) {
//     return (
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-red-500 text-lg">{error || "Product not found."}</Text>
//         <TouchableOpacity onPress={() => router.back()} className="mt-4">
//           <Text className="text-blue-500">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Use productImages if available; otherwise, fallback to a placeholder image
//   const images =
//     product.productImages && product.productImages.length > 0
//       ? product.productImages
//       : ["https://via.placeholder.com/300"];

//   return (
//     <View className="flex-1 pb-4 bg-white">
//       {/* Header */}
      // <View className="flex-row items-center justify-between px-4 py-4 mt-14 border-b border-gray-200">
      //   <TouchableOpacity onPress={() => router.back()}>
      //     <Ionicons name="arrow-back" size={24} color="black" />
      //   </TouchableOpacity>
      //   <Text className="text-lg font-bold">Product Details</Text>
      //   <TouchableOpacity onPress={() => Alert.alert("cart", "cart pressed")}>
      //     <Ionicons name="cart-outline" size={24} color="black" />
      //   </TouchableOpacity>
      // </View>

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
//           keyExtractor={(_, index) => index.toString()}
//         />
//         <Text className="text-xs text-gray-500 text-center mt-1">
//           {currentImageIndex + 1}/{images.length}
//         </Text>

//         {/* Product Info */}
//         <View className="px-4 mt-4">
//           <Text className="text-2xl font-bold text-gray-800">
//             {product.productName}
//           </Text>
//           <View className="flex-row items-center mt-1">
//             <Ionicons name="star" size={18} color="gold" />
//             <Text className="text-sm text-gray-600 ml-1">
//               {product.productRating.toFixed(1)} ({product.productReview} Reviews)
//             </Text>
//           </View>
//           <View className="flex-row items-center mt-2">
//             <Text className="text-xl font-bold text-red-500">
//               ₹{product.discountedPrice.toFixed(2)}
//             </Text>
//             {product.originalPrice > product.discountedPrice && (
//               <Text className="text-sm text-gray-500 line-through ml-2">
//                 ₹{product.originalPrice.toFixed(2)}
//               </Text>
//             )}
//           </View>
//           {product.stock !== undefined && (
//             <Text className="text-sm text-gray-500 mt-2">
//               {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
//             </Text>
//           )}
//           {product.description && (
//             <TouchableOpacity onPress={handleShare} className="mt-2">
//               <Text className="text-blue-500 text-sm">Share Product</Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Quantity Selector */}
//         <View className="flex-row items-center px-4 mt-4">
//           <Text className="text-lg font-bold">Quantity:</Text>
//           <View className="flex-row items-center ml-4 border border-gray-300 rounded-lg">
//             <TouchableOpacity onPress={handleDecrease} className="px-3 py-2 bg-gray-100 rounded-l-lg">
//               <Text className="text-lg font-bold">-</Text>
//             </TouchableOpacity>
//             <Text className="px-4 py-2">{quantity}</Text>
//             <TouchableOpacity onPress={handleIncrease} className="px-3 py-2 bg-gray-100 rounded-r-lg">
//               <Text className="text-lg font-bold">+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Shop / Category Info */}
//         <View className="px-4 mt-6">
//           {product.shop && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Shop:</Text> {product.shop.name}
//             </Text>
//           )}
//           {product.productCategory && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Category:</Text> {product.productCategory.name}
//             </Text>
//           )}
//           {product.subCategories && product.subCategories.length > 0 && (
//             <Text className="text-sm text-gray-500">
//               <Text className="font-bold">Sub Categories:</Text>{" "}
//               {product.subCategories.join(", ")}
//             </Text>
//           )}
//         </View>

//         {/* Description */}
//         {product.description && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Description</Text>
//             <Text className="text-sm text-gray-600 mt-2">
//               {product.description.replace(/<[^>]*>?/gm, "")}
//             </Text>
//           </View>
//         )}

//         {/* Dimensions */}
//         <View className="px-4 mt-6">
//           <Text className="text-lg font-bold text-gray-800">Dimensions</Text>
//           <Text className="text-sm text-gray-600 mt-2">
//             Length: {product.dimensions.length.value} {product.dimensions.length.unit}
//           </Text>
//           <Text className="text-sm text-gray-600 mt-1">
//             Width: {product.dimensions.width.value} {product.dimensions.width.unit}
//           </Text>
//           <Text className="text-sm text-gray-600 mt-1">
//             Height: {product.dimensions.height.value} {product.dimensions.height.unit}
//           </Text>
//           <Text className="text-sm text-gray-600 mt-1">
//             Weight: {product.dimensions.weight.value} {product.dimensions.weight.unit}
//           </Text>
//         </View>

//         {/* Available Colors */}
//         {product.productColors && product.productColors.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Available Colors</Text>
//             <View className="flex-row items-center mt-2">
//               {product.productColors.map((color, index) => (
//                 <View
//                   key={index}
//                   style={{ backgroundColor: color }}
//                   className="w-8 h-8 rounded-full mr-2"
//                 />
//               ))}
//             </View>
//           </View>
//         )}

//         {/* Available Sizes */}
//         {product.availableSizes && product.availableSizes.length > 0 && (
//           <View className="px-4 mt-6">
//             <Text className="text-lg font-bold text-gray-800">Available Sizes</Text>
//             <View className="flex-row items-center mt-2">
//               {product.availableSizes.map((size, index) => (
//                 <View key={index} className="border border-gray-300 rounded-lg px-3 py-1 mr-2">
//                   <Text className="text-sm">{size}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         )}
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View className="flex-row items-center justify-between px-4 py-4 border-t border-gray-200 bg-white">
       
//         <TouchableOpacity
//           onPress={handleAddToCart}
//           className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
//         >
//           <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   ); 
// };

// export default ProductDetailScreen;



import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Share,
  FlatList,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/app/contexts/CartContext";

// Define the Product interface based on your API response
interface DimensionsType {
  length: { value: number; unit: string };
  width: { value: number; unit: string };
  height: { value: number; unit: string };
  weight: { value: number; unit: string };
}

interface Product {
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
  dimensions: DimensionsType;
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

const ProductDetailScreen = () => {
  // Extract the product _id from URL parameters
  const { id } = useGlobalSearchParams<{ id: string }>();
  const router = useRouter();
  // Get cart functions and cartItems from the cart context
  const { addItem, clearCart, cartItems } = useCart();

  // Compute total quantity count from the cart items
  const cartCount = cartItems.reduce((sum, item: any) => sum + item.quantity, 0);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://192.168.1.42:5001/fetch-product-by-id/${id}`)
      .then((response) => {
        if (response.data && response.data.Product) {
          setProduct(response.data.Product);
        } else {
          setError("Product not found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching product detail:", err.response || err);
        setError("Something went wrong while fetching product details.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleShare = async () => {
    if (!product) return;
    try {
      await Share.share({
        message: `Check out this amazing product: ${product.productName}! ₹${product.discountedPrice.toFixed(
          2
        )}`,
      });
    } catch (error) {
      console.error("Error sharing product:", error);
      Alert.alert("Share Error", "Unable to share the product at this time.");
    }
  };

  // Buy Now: Clear the cart, add this product with selected quantity, then navigate to checkout
  const handleBuyNow = () => {
    if (!product) return;
    clearCart();
    addItem(product, quantity);
    router.push("/checkout");
  };

  // Add to Cart: Just add the product with the selected quantity
  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, quantity);
    Alert.alert("Add to Cart", `${product.productName} has been added to your cart.`);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error || !product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500 text-lg">{error || "Product not found."}</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4">
          <Text className="text-blue-500">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Use productImages if available; otherwise, fallback to a placeholder image
  const images =
    product.productImages && product.productImages.length > 0
      ? product.productImages
      : ["https://via.placeholder.com/300"];

  return (
    <View className="flex-1 pb-4 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 mt-14 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Product Details</Text>
        <TouchableOpacity
          onPress={() => router.push("/cart")}
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

      {/* Scrollable Content */}
      <ScrollView className="flex-1">
        {/* Image Slider */}
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / screenWidth
            );
            setCurrentImageIndex(index);
          }}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              className="w-full h-96"
              resizeMode="contain"
              style={{ width: screenWidth, height: 300 }}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        <Text className="text-xs text-gray-500 text-center mt-1">
          {currentImageIndex + 1}/{images.length}
        </Text>

        {/* Product Info */}
        <View className="px-4 mt-4">
          <Text className="text-2xl font-bold text-gray-800">
            {product.productName}
          </Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="star" size={18} color="gold" />
            <Text className="text-sm text-gray-600 ml-1">
              {product.productRating.toFixed(1)} ({product.productReview} Reviews)
            </Text>
          </View>
          <View className="flex-row items-center mt-2">
            <Text className="text-xl font-bold text-red-500">
              ₹{product.discountedPrice.toFixed(2)}
            </Text>
            {product.originalPrice > product.discountedPrice && (
              <Text className="text-sm text-gray-500 line-through ml-2">
                ₹{product.originalPrice.toFixed(2)}
              </Text>
            )}
          </View>
          {product.stock !== undefined && (
            <Text className="text-sm text-gray-500 mt-2">
              {product.stock} {product.stock === 1 ? "product" : "products"} left in stock
            </Text>
          )}
          {product.description && (
            <TouchableOpacity onPress={handleShare} className="mt-2">
              <Text className="text-blue-500 text-sm">Share Product</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Quantity Selector */}
        <View className="flex-row items-center px-4 mt-4">
          <Text className="text-lg font-bold">Quantity:</Text>
          <View className="flex-row items-center ml-4 border border-gray-300 rounded-lg">
            <TouchableOpacity onPress={handleDecrease} className="px-3 py-2 bg-gray-100 rounded-l-lg">
              <Text className="text-lg font-bold">-</Text>
            </TouchableOpacity>
            <Text className="px-4 py-2">{quantity}</Text>
            <TouchableOpacity onPress={handleIncrease} className="px-3 py-2 bg-gray-100 rounded-r-lg">
              <Text className="text-lg font-bold">+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Shop / Category Info */}
        <View className="px-4 mt-6">
          {product.shop && (
            <Text className="text-sm text-gray-500">
              <Text className="font-bold">Shop:</Text> {product.shop.name}
            </Text>
          )}
          {product.productCategory && (
            <Text className="text-sm text-gray-500">
              <Text className="font-bold">Category:</Text> {product.productCategory.name}
            </Text>
          )}
          {product.subCategories && product.subCategories.length > 0 && (
            <Text className="text-sm text-gray-500">
              <Text className="font-bold">Sub Categories:</Text>{" "}
              {product.subCategories.join(", ")}
            </Text>
          )}
        </View>

        {/* Description */}
        {product.description && (
          <View className="px-4 mt-6">
            <Text className="text-lg font-bold text-gray-800">Description</Text>
            <Text className="text-sm text-gray-600 mt-2">
              {product.description.replace(/<[^>]*>?/gm, "")}
            </Text>
          </View>
        )}

        {/* Dimensions */}
        <View className="px-4 mt-6">
          <Text className="text-lg font-bold text-gray-800">Dimensions</Text>
          <Text className="text-sm text-gray-600 mt-2">
            Length: {product.dimensions.length.value} {product.dimensions.length.unit}
          </Text>
          <Text className="text-sm text-gray-600 mt-1">
            Width: {product.dimensions.width.value} {product.dimensions.width.unit}
          </Text>
          <Text className="text-sm text-gray-600 mt-1">
            Height: {product.dimensions.height.value} {product.dimensions.height.unit}
          </Text>
          <Text className="text-sm text-gray-600 mt-1">
            Weight: {product.dimensions.weight.value} {product.dimensions.weight.unit}
          </Text>
        </View>

        {/* Available Colors */}
        {product.productColors && product.productColors.length > 0 && (
          <View className="px-4 mt-6">
            <Text className="text-lg font-bold text-gray-800">Available Colors</Text>
            <View className="flex-row items-center mt-2">
              {product.productColors.map((color, index) => (
                <View
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 rounded-full mr-2"
                />
              ))}
            </View>
          </View>
        )}

        {/* Available Sizes */}
        {product.availableSizes && product.availableSizes.length > 0 && (
          <View className="px-4 mt-6">
            <Text className="text-lg font-bold text-gray-800">Available Sizes</Text>
            <View className="flex-row items-center mt-2">
              {product.availableSizes.map((size, index) => (
                <View key={index} className="border border-gray-300 rounded-lg px-3 py-1 mr-2">
                  <Text className="text-sm">{size}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Buttons */}
      <View className="flex-row items-center justify-between px-4 py-4 border-t border-gray-200 bg-white">
        <TouchableOpacity
          onPress={handleAddToCart}
          className="flex-1 bg-gray-200 py-3 rounded-lg ml-2"
        >
          <Text className="text-gray-700 text-center font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  ); 
};

export default ProductDetailScreen;
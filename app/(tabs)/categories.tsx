// import React, { useState, useRef } from 'react';
// import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
// import { useWindowDimensions } from 'react-native';

// const Categories = () => {
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
//   const rightScrollRef = useRef<ScrollView>(null);
//   const { height, width } = useWindowDimensions();

//   const categories = [
//     { id: 1, name: 'Temple offerings', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 2, name: 'Idols', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 3, name: 'Rudraksha', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 4, name: 'Vastu Shastra', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 5, name: 'Bracelets', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 6, name: 'Pendants', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//   ];

//   // Corrected: Ensure each category has unique subcategories
//   const subcategories = categories.map((category) => ({
//     categoryId: category.id,
//     subcategories: Array.from({ length: 20 }, (_, i) => ({
//       name: `${category.name} Subcategory ${i + 1}`,
//       image: category.image,
//     })),
//   }));

//   const scrollToCategory = (index: number) => {
//     if (rightScrollRef.current) {
//       rightScrollRef.current.scrollTo({
//         y: index * height,
//         animated: true,
//       });
//     }
//   };

//   const onCategoryPress = (index: number) => {
//     setSelectedCategoryIndex(index);
//     scrollToCategory(index);
//   };

//   const handleRightScroll = (event: any) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const index = Math.round(offsetY / height);
//     setSelectedCategoryIndex(index);
//   };

//   return (
//     <View className="flex-row h-full pt-16 bg-gray-50">
//       {/* Left Sidebar */}
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item, index }) => (
//           <TouchableOpacity
//             onPress={() => onCategoryPress(index)}
//             className={`flex-col items-center px-4 py-3 rounded-lg my-1 mx-2 ${
//               selectedCategoryIndex === index ? 'bg-blue-100' : 'bg-white'
//             }`}
//           >
//             <Image source={{ uri: item.image }} className="w-12 h-12 rounded-lg mr-3" />
//             <Text className={`text-lg font-medium ${selectedCategoryIndex === index ? 'text-blue-500' : 'text-gray-700'}`}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         style={{ width: width * 0.25 }}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Right Content */}
//       <ScrollView
//         ref={rightScrollRef}
//         onScroll={handleRightScroll}
//         scrollEventThrottle={16}
//         className="bg-white shadow-md rounded-lg"
//         style={{ width: width * 0.75 }}
//       >
//         {subcategories.map((category, index) => (
//           <Animated.View
//             key={category.categoryId}
//             className="mb-6 px-4 py-2"
//             entering={{ opacity: 0, translateY: 30, easing: Easing.ease }}
//             animate={{ opacity: 1, translateY: 0 }}
//             exiting={{ opacity: 0, translateY: -30 }}
//           >
//             <Text className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">{categories[index].name}</Text>
//             <View className="flex-row flex-wrap">
//               {category.subcategories.map((sub, subIndex) => (
//                 <View key={subIndex} className="w-1/2 p-2">
//                   <Image source={{ uri: sub.image }} className="w-full h-32 rounded-lg shadow-sm" />
//                   <Text className="text-center text-sm text-gray-600 mt-2">{sub.name}</Text>
//                 </View>
//               ))}
//             </View>
//           </Animated.View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default Categories;



// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, Animated, Easing, LayoutChangeEvent } from 'react-native';
// import { useWindowDimensions } from 'react-native';

// const Categories = () => {
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
//   const rightScrollRef = useRef<ScrollView>(null);
//   const categoryPositions = useRef<number[]>([]); // Store each category's Y position
//   const { height, width } = useWindowDimensions();

//   const categories = [
//     { id: 1, name: 'Temple offerings', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 2, name: 'Idols', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 3, name: 'Rudraksha', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 4, name: 'Vastu Shastra', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 5, name: 'Bracelets', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//     { id: 6, name: 'Pendants', image: 'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909' },
//   ];

//   // Assign different subcategory counts to simulate uneven distribution
//   const subcategories = [
//     { categoryId: 1, subcategories: Array.from({ length: 10 }, (_, i) => ({ name: `Temple Offerings ${i + 1}`, image: categories[0].image })) },
//     { categoryId: 2, subcategories: Array.from({ length: 5 }, (_, i) => ({ name: `Idols ${i + 1}`, image: categories[1].image })) },
//     { categoryId: 3, subcategories: Array.from({ length: 8 }, (_, i) => ({ name: `Rudraksha ${i + 1}`, image: categories[2].image })) },
//     { categoryId: 4, subcategories: Array.from({ length: 12 }, (_, i) => ({ name: `Vastu Shastra ${i + 1}`, image: categories[3].image })) },
//     { categoryId: 5, subcategories: Array.from({ length: 4 }, (_, i) => ({ name: `Bracelets ${i + 1}`, image: categories[4].image })) },
//     { categoryId: 6, subcategories: Array.from({ length: 7 }, (_, i) => ({ name: `Pendants ${i + 1}`, image: categories[5].image })) },
//   ];

//   // Track the Y-position of each category section dynamically
//   const measureCategoryPosition = (event: LayoutChangeEvent, index: number) => {
//     const { y } = event.nativeEvent.layout;
//     categoryPositions.current[index] = y;
//   };

//   useEffect(() => {
//     categoryPositions.current = [];
//   }, []);

//   const scrollToCategory = (index: number) => {
//     if (rightScrollRef.current) {
//       rightScrollRef.current.scrollTo({
//         y: categoryPositions.current[index] || 0,
//         animated: true,
//       });
//     }
//   };

//   const onCategoryPress = (index: number) => {
//     setSelectedCategoryIndex(index);
//     scrollToCategory(index);
//   };

//   const handleRightScroll = (event: any) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     let closestIndex = 0;
//     let minDiff = Math.abs(offsetY - categoryPositions.current[0]);

//     // Find the category index that has the closest Y position
//     categoryPositions.current.forEach((pos, index) => {
//       const diff = Math.abs(offsetY - pos);
//       if (diff < minDiff) {
//         minDiff = diff;
//         closestIndex = index;
//       }
//     });

//     setSelectedCategoryIndex(closestIndex);
//   };

//   return (
//     <View className="flex-row h-full pt-16 bg-gray-50">
//       {/* Left Sidebar */}
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item, index }) => (
//           <TouchableOpacity
//             onPress={() => onCategoryPress(index)}
//             className={`flex-col items-center px-4 py-3 rounded-lg my-1 mx-2 ${
//               selectedCategoryIndex === index ? 'bg-blue-100' : 'bg-white'
//             }`}
//           >
//             <Image source={{ uri: item.image }} className="w-12 h-12 rounded-lg mr-3" />
//             <Text className={`text-lg font-medium ${selectedCategoryIndex === index ? 'text-blue-500' : 'text-gray-700'}`}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         style={{ width: width * 0.25 }}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Right Content */}
//       <ScrollView
//         ref={rightScrollRef}
//         onScroll={handleRightScroll}
//         scrollEventThrottle={16}
//         className="bg-white shadow-md rounded-lg"
//         style={{ width: width * 0.75 }}
//       >
//         {subcategories.map((category, index) => (
//           <Animated.View
//             key={category.categoryId}
//             className="mb-6 px-4 py-2"
//             entering={{ opacity: 0, translateY: 30, easing: Easing.ease }}
//             animate={{ opacity: 1, translateY: 0 }}
//             exiting={{ opacity: 0, translateY: -30 }}
//             onLayout={(event) => measureCategoryPosition(event, index)}
//           >
//             <Text className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">{categories[index].name}</Text>
//             <View className="flex-row flex-wrap">
//               {category.subcategories.map((sub, subIndex) => (
//                 <View key={subIndex} className="w-1/2 p-2">
//                   <Image source={{ uri: sub.image }} className="w-full h-32 rounded-lg shadow-sm" />
//                   <Text className="text-center text-sm text-gray-600 mt-2">{sub.name}</Text>
//                 </View>
//               ))}
//             </View>
//           </Animated.View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default Categories;



























// import Header from '@/components/HomePageComponents/Header';
// import Search from '@/components/HomePageComponents/Search';
// import { Ionicons } from '@expo/vector-icons';
// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
//   LayoutChangeEvent,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
//   Alert,
// } from 'react-native';
// import { useWindowDimensions } from 'react-native';

// const Categories = () => {
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
//   const rightScrollRef = useRef<ScrollView>(null);
//   const { height: windowHeight, width } = useWindowDimensions();

//   const categories = [
//     {
//       id: 1,
//       name: 'Temple Offerings',
//       image:
//         'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909',
//     },
//     {
//       id: 2,
//       name: 'Idols',
//       image:
//         'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909',
//     },
//     {
//       id: 3,
//       name: 'Rudraksha',
//       image:
//         'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909',
//     },
//     {
//       id: 4,
//       name: 'Vastu Sastra',
//       image:
//         'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909',
//     },
//     {
//       id: 5,
//       name: 'Bracelets',
//       image:
//         'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909',
//     },
//     {
//       id: 6,
//       name: 'Pendants',
//       image:
//         'https://budhshiv.com/cdn/shop/products/handcrafted-pure-brass-hanuman-ji-statue-large-size-3-feetbsh35g-503021.jpg?v=1707026909',
//     },
//   ];

//   const subcategories = categories.map((category) => ({
//     categoryId: category.id,
//     subcategories: Array.from({ length: 20 }, (_, i) => ({
//       name: `${category.name} Subcategory ${i + 1}`,
//       image: category.image,
//     })),
//   }));

//   // State to store the y-offset of each category's subcategory section
//   const [categoryLayouts, setCategoryLayouts] = useState<{ [key: number]: number }>({});
//   // Ref to store the height of the ScrollView
//   const scrollViewHeight = useRef<number>(0);

//   // Function to handle category press
//   const onCategoryPress = (index: number) => {
//     setSelectedCategoryIndex(index);
//     const categoryId = categories[index].id;
//     const yOffset = categoryLayouts[categoryId];

//     if (yOffset !== undefined && rightScrollRef.current) {
//       rightScrollRef.current.scrollTo({
//         y: yOffset,
//         animated: true,
//       });
//     }
//   };

//   // Function to handle scroll events
//   const handleRightScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const midPoint = offsetY + scrollViewHeight.current / 2;

//     // Find the category whose subcategory section is closest to the midPoint
//     let currentCategoryIndex = selectedCategoryIndex;

//     for (let i = 0; i < categories.length; i++) {
//       const categoryId = categories[i].id;
//       const categoryY = categoryLayouts[categoryId];

//       if (categoryY !== undefined && categoryY <= midPoint) {
//         currentCategoryIndex = i;
//       } else {
//         break;
//       }
//     }

//     if (currentCategoryIndex !== selectedCategoryIndex) {
//       setSelectedCategoryIndex(currentCategoryIndex);
//     }
//   };

//   // Function to handle layout changes of each subcategory section
//   const handleLayout = (categoryId: number, event: LayoutChangeEvent) => {
//     const { y } = event.nativeEvent.layout;
//     setCategoryLayouts((prev) => {
//       // Avoid unnecessary re-renders
//       if (prev[categoryId] === y) return prev;
//       return { ...prev, [categoryId]: y };
//     });
//   };

//   // Optional: Scroll to the first category's subcategories on mount
//   useEffect(() => {
//     if (rightScrollRef.current && categoryLayouts[categories[0].id] !== undefined) {
//       rightScrollRef.current.scrollTo({
//         y: categoryLayouts[categories[0].id],
//         animated: false,
//       });
//     }
//   }, [categoryLayouts]);

//   return (
//     <>
//     <View className="flex-row items-center justify-center px-4 py-4 mt-14 border-b border-gray-200">
       
//        <Text className="text-lg font-bold">Product Categories </Text>
     
//      </View>
//     <View className="flex-row h-full pt-2 bg-gray-50">
//       {/* Left Sidebar */}
     
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item, index }) => (
//           <TouchableOpacity
//             onPress={() => onCategoryPress(index)}
//             className={`flex-col items-center px-4 py-3 rounded-lg my-1 mx-2 ${
//               selectedCategoryIndex === index ? 'bg-blue-100' : 'bg-white'
//             }`}
//           >
//             <Image source={{ uri: item.image }} className="w-12 h-12 rounded-lg mr-3" />
//             <Text
//               className={`text-lg font-medium ${
//                 selectedCategoryIndex === index ? 'text-blue-500' : 'text-gray-700'
//               }`}
//             >
//               {item.name}
//             </Text>
//           </TouchableOpacity>
//         )}
//         style={{ width: width * 0.25 }}
//         showsVerticalScrollIndicator={false}
//         extraData={selectedCategoryIndex}
//       />

//       {/* Right Content */}
//       <ScrollView
//         ref={rightScrollRef}
//         onScroll={handleRightScroll}
//         scrollEventThrottle={16}
//         className="bg-white shadow-md rounded-lg"
//         style={{ width: width * 0.75 }}
//         onLayout={(event) => {
//           // Capture the height of the ScrollView
//           const { height } = event.nativeEvent.layout;
//           scrollViewHeight.current = height;
//         }}
//       >
//         {subcategories.map((category, index) => (
//           <View
//             key={category.categoryId}
//             className="mb-6 px-4 py-2"
//             onLayout={(event) => handleLayout(category.categoryId, event)}
//           >
//             <Text className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
//               {categories[index].name}
//             </Text>
//             <View className="flex-row flex-wrap">
//               {category.subcategories.map((sub, subIndex) => (
//                 <View key={subIndex} className="w-1/2 p-2">
//                   <Image source={{ uri: sub.image }} className="w-full h-32 rounded-lg shadow-sm" />
//                   <Text className="text-center text-sm text-gray-600 mt-2">{sub.name}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//     </>
//   );
// };

// export default Categories;


// import Header from '@/components/HomePageComponents/Header';
// import Search from '@/components/HomePageComponents/Search';
// import { Ionicons } from '@expo/vector-icons';
// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
//   LayoutChangeEvent,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
//   Alert,
// } from 'react-native';
// import { useWindowDimensions } from 'react-native';
// import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';

// // Helper function to normalize category names
// const normalizeCategory = (cat: string | undefined): string => {
//   if (!cat) return '';
//   let normalized = cat.toLowerCase().trim();
//   normalized = normalized.replace(/-/g, ' '); // Replace hyphens with spaces
//   if (normalized.endsWith('s')) {
//     normalized = normalized.slice(0, -1); // Remove trailing "s"
//   }
//   return normalized;
// };

// const Categories = () => {
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
//   const rightScrollRef = useRef<ScrollView>(null);
//   const { height: windowHeight, width } = useWindowDimensions();

//   // Main categories (left sidebar) – you can adjust the image URLs as needed.
//   const categories = [
//     {
//       id: 1,
//       name: 'Temple Offerings',
//       image:
//         'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/hand.png',
//     },
//     {
//       id: 2,
//       name: 'Idols',
//       image:
//         'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/mata.png',
//     },
//     {
//       id: 3,
//       name: 'Rudraksha',
//       image:
//         'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/rudraksha.png',
//     },
//     {
//       id: 4,
//       name: 'Vastu Sastra',
//       image:
//         'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/hand.png',
//     },
//     {
//       id: 5,
//       name: 'Bracelets',
//       image:
//         'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/temple123.png',
//     },
//     // Add more main categories if needed.
//   ];

//   // Fetch products using your API hook
//   const { products, loading, error } = useFetchProducts();

//   // Compute the subcategories for each main category.
//   // For each category, we filter the products that belong to it (using normalized names),
//   // then extract all unique subcategory names.
//   // For each unique subcategory, we pick one random product’s image.
//   const computedSubcategories = categories.map((cat) => {
//     // Filter products whose productCategory name (normalized) matches the main category name.
//     const productsForCategory = products.filter(
//       (product: Product) =>
//         normalizeCategory(product.productCategory?.name) === normalizeCategory(cat.name)
//     );
//     // Create a set to hold unique subcategory names.
//     const subcatSet = new Set<string>();
//     productsForCategory.forEach((product) => {
//       if (product.subCategories) {
//         product.subCategories.forEach((sub) => subcatSet.add(sub));
//       }
//     });
//     const uniqueSubcategories = Array.from(subcatSet);

//     // For each subcategory, choose a random product (from productsForCategory)
//     // that contains that subcategory. Use its first product image.
//     const subcategoriesWithImage = uniqueSubcategories.map((subcat) => {
//       const productsForSubcat = productsForCategory.filter((product) =>
//         product.subCategories.includes(subcat)
//       );
//       let randomImage = cat.image; // fallback to the main category image
//       if (productsForSubcat.length > 0) {
//         const randomProduct =
//           productsForSubcat[Math.floor(Math.random() * productsForSubcat.length)];
//         if (randomProduct.productImages && randomProduct.productImages.length > 0) {
//           randomImage = randomProduct.productImages[0];
//         }
//       }
//       return { name: subcat, image: randomImage };
//     });
//     return { categoryId: cat.id, subcategories: subcategoriesWithImage };
//   });

//   // State to store the y-offset of each category's subcategory section
//   const [categoryLayouts, setCategoryLayouts] = useState<{ [key: number]: number }>({});
//   // Ref to store the height of the ScrollView
//   const scrollViewHeight = useRef<number>(0);

//   // Function to handle category press on the left sidebar
//   const onCategoryPress = (index: number) => {
//     setSelectedCategoryIndex(index);
//     const categoryId = categories[index].id;
//     const yOffset = categoryLayouts[categoryId];
//     if (yOffset !== undefined && rightScrollRef.current) {
//       rightScrollRef.current.scrollTo({
//         y: yOffset,
//         animated: true,
//       });
//     }
//   };

//   // Function to handle scroll events on the right section
//   const handleRightScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const midPoint = offsetY + scrollViewHeight.current / 2;
//     let currentCategoryIndex = selectedCategoryIndex;
//     for (let i = 0; i < categories.length; i++) {
//       const categoryId = categories[i].id;
//       const categoryY = categoryLayouts[categoryId];
//       if (categoryY !== undefined && categoryY <= midPoint) {
//         currentCategoryIndex = i;
//       } else {
//         break;
//       }
//     }
//     if (currentCategoryIndex !== selectedCategoryIndex) {
//       setSelectedCategoryIndex(currentCategoryIndex);
//     }
//   };

//   // Function to capture the layout of each subcategory section
//   const handleLayout = (categoryId: number, event: LayoutChangeEvent) => {
//     const { y } = event.nativeEvent.layout;
//     setCategoryLayouts((prev) => {
//       if (prev[categoryId] === y) return prev;
//       return { ...prev, [categoryId]: y };
//     });
//   };

//   // Optional: Scroll to the first category's subcategories on mount
//   useEffect(() => {
//     if (rightScrollRef.current && categoryLayouts[categories[0].id] !== undefined) {
//       rightScrollRef.current.scrollTo({
//         y: categoryLayouts[categories[0].id],
//         animated: false,
//       });
//     }
//   }, [categoryLayouts]);

//   // If products are still loading or there is an error, show loading/error state.
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <Text>Loading products...</Text>
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
//     <>
//       <View className="flex-row items-center justify-center px-4 py-4 mt-14 border-b border-gray-200">
//         <Text className="text-lg font-bold">Product Categories</Text>
//       </View>
//       <View className="flex-row h-full pt-2 bg-gray-50">
//         {/* Left Sidebar: Main Categories */}
//         <FlatList
//           data={categories}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity
//               onPress={() => onCategoryPress(index)}
//               className={`flex-col items-center px-4 py-3 gap-4  rounded-lg my-1 mx-2 ${
//                 selectedCategoryIndex === index ? 'bg-blue-100' : 'bg-white'
//               }`}
//             >
//               <Image source={{ uri: item.image }} className="w-12 h-20 rounded-lg mr-3" />
//               <Text
//                 className={`text-xs font-medium ${
//                   selectedCategoryIndex === index ? 'text-blue-500' : 'text-gray-700'
//                 }`}
//               >
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//           style={{ width: width * 0.25 }}
//           showsVerticalScrollIndicator={false}
//           extraData={selectedCategoryIndex}
//         />

//         {/* Right Content: Subcategories with product images */}
//         <ScrollView
//           ref={rightScrollRef}
//           onScroll={handleRightScroll}
//           scrollEventThrottle={16}
//           className="bg-white shadow-md rounded-lg"
//           style={{ width: width * 0.75 }}
//           onLayout={(event) => {
//             const { height } = event.nativeEvent.layout;
//             scrollViewHeight.current = height;
//           }}
//         >
//           {computedSubcategories.map((catSubs, index) => (
//             <View
//               key={catSubs.categoryId}
//               className="mb-6 px-4 py-2"
//               onLayout={(event) => handleLayout(categories[index].id, event)}
//             >
//               <Text className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
//                 {categories[index].name}
//               </Text>
//               <View className="flex-row flex-wrap">
//                 {catSubs.subcategories.map((sub, subIndex) => (
//                   <View key={subIndex} className="w-1/2 p-2">
//                     <Image
//                       source={{ uri: sub.image }}
//                       className="w-full h-32 rounded-lg shadow-sm"
//                     />
//                     <Text className="text-center text-sm text-gray-600 mt-2">{sub.name}</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// export default Categories;


import Header from '@/components/HomePageComponents/Header';
import Search from '@/components/HomePageComponents/Search';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Alert,
} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';
import { useRouter } from 'expo-router';

// Helper function to normalize category names
const normalizeCategory = (cat: string | undefined): string => {
  if (!cat) return '';
  let normalized = cat.toLowerCase().trim();
  normalized = normalized.replace(/-/g, ' '); // Replace hyphens with spaces
  if (normalized.endsWith('s')) {
    normalized = normalized.slice(0, -1); // Remove trailing "s"
  }
  return normalized;
};

const Categories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const rightScrollRef = useRef<ScrollView>(null);
  const { height: windowHeight, width } = useWindowDimensions();
  const router = useRouter();

  // Main categories (left sidebar) – you can adjust the image URLs as needed.
  const categories = [
    {
      id: 1,
      name: 'Temple Offerings',
      image:
        'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/hand.png',
    },
    {
      id: 2,
      name: 'Idols',
      image:
        'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/mata.png',
    },
    {
      id: 3,
      name: 'Rudraksha',
      image:
        'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/rudraksha.png',
    },
    {
      id: 4,
      name: 'Vastu Sastra',
      image:
        'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/hand.png',
    },
    {
      id: 5,
      name: 'Bracelets',
      image:
        'https://vedic-vaibhav.blr1.cdn.digitaloceanspaces.com/vedic-vaibhav/ShopApp/temple123.png',
    },
    // Add more main categories if needed.
  ];

  // Fetch products using your API hook
  const { products, loading, error } = useFetchProducts();

  // Compute the subcategories for each main category.
  // For each category, we filter the products that belong to it (using normalized names),
  // then extract all unique subcategory names.
  // For each unique subcategory, we pick one random product’s image.
  const computedSubcategories = categories.map((cat) => {
    // Filter products whose productCategory name (normalized) matches the main category name.
    const productsForCategory = products.filter(
      (product: Product) =>
        normalizeCategory(product.productCategory?.name) === normalizeCategory(cat.name)
    );
    // Create a set to hold unique subcategory names.
    const subcatSet = new Set<string>();
    productsForCategory.forEach((product) => {
      if (product.subCategories) {
        product.subCategories.forEach((sub) => subcatSet.add(sub));
      }
    });
    const uniqueSubcategories = Array.from(subcatSet);

    // For each subcategory, choose a random product (from productsForCategory)
    // that contains that subcategory. Use its first product image.
    const subcategoriesWithImage = uniqueSubcategories.map((subcat) => {
      const productsForSubcat = productsForCategory.filter((product) =>
        product.subCategories.includes(subcat)
      );
      let randomImage = cat.image; // fallback to the main category image
      if (productsForSubcat.length > 0) {
        const randomProduct =
          productsForSubcat[Math.floor(Math.random() * productsForSubcat.length)];
        if (randomProduct.productImages && randomProduct.productImages.length > 0) {
          randomImage = randomProduct.productImages[0];
        }
      }
      return { name: subcat, image: randomImage };
    });
    return { categoryId: cat.id, subcategories: subcategoriesWithImage };
  });

  // State to store the y-offset of each category's subcategory section
  const [categoryLayouts, setCategoryLayouts] = useState<{ [key: number]: number }>({});
  // Ref to store the height of the ScrollView
  const scrollViewHeight = useRef<number>(0);

  // Function to handle category press on the left sidebar
  const onCategoryPress = (index: number) => {
    setSelectedCategoryIndex(index);
    const categoryId = categories[index].id;
    const yOffset = categoryLayouts[categoryId];
    if (yOffset !== undefined && rightScrollRef.current) {
      rightScrollRef.current.scrollTo({
        y: yOffset,
        animated: true,
      });
    }
  };

  // Function to handle scroll events on the right section
  const handleRightScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const midPoint = offsetY + scrollViewHeight.current / 2;
    let currentCategoryIndex = selectedCategoryIndex;
    for (let i = 0; i < categories.length; i++) {
      const categoryId = categories[i].id;
      const categoryY = categoryLayouts[categoryId];
      if (categoryY !== undefined && categoryY <= midPoint) {
        currentCategoryIndex = i;
      } else {
        break;
      }
    }
    if (currentCategoryIndex !== selectedCategoryIndex) {
      setSelectedCategoryIndex(currentCategoryIndex);
    }
  };

  // Function to capture the layout of each subcategory section
  const handleLayout = (categoryId: number, event: LayoutChangeEvent) => {
    const { y } = event.nativeEvent.layout;
    setCategoryLayouts((prev) => {
      if (prev[categoryId] === y) return prev;
      return { ...prev, [categoryId]: y };
    });
  };

  // Optional: Scroll to the first category's subcategories on mount
  useEffect(() => {
    if (rightScrollRef.current && categoryLayouts[categories[0].id] !== undefined) {
      rightScrollRef.current.scrollTo({
        y: categoryLayouts[categories[0].id],
        animated: false,
      });
    }
  }, [categoryLayouts]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading products...</Text>
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
    <>
      <View className="flex-row items-center justify-center px-4 py-4 mt-14 border-b border-gray-200">
        <Text className="text-lg font-bold">Product Categories</Text>
      </View>
      <View className="flex-row h-full pt-2 bg-gray-50">
        {/* Left Sidebar: Main Categories */}
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onCategoryPress(index)}
              className={`flex-col items-center px-4 py-3 gap-4 rounded-lg my-1 mx-2 ${
                selectedCategoryIndex === index ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              <Image source={{ uri: item.image }} className="w-12 h-20 rounded-lg mr-3" />
              <Text
                className={`text-xs font-medium ${
                  selectedCategoryIndex === index ? 'text-blue-500' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          style={{ width: width * 0.25 }}
          showsVerticalScrollIndicator={false}
          extraData={selectedCategoryIndex}
        />

        {/* Right Content: Subcategories with product images */}
        <ScrollView
          ref={rightScrollRef}
          onScroll={handleRightScroll}
          scrollEventThrottle={16}
          className="bg-white shadow-md rounded-lg"
          style={{ width: width * 0.75 }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            scrollViewHeight.current = height;
          }}
        >
          {computedSubcategories.map((catSubs, index) => (
            <View
              key={catSubs.categoryId}
              className="mb-6 px-4 py-2"
              onLayout={(event) => handleLayout(categories[index].id, event)}
            >
              <Text className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                {categories[index].name}
              </Text>
              <View className="flex-row flex-wrap">
                {catSubs.subcategories.map((sub, subIndex) => (
                  <TouchableOpacity
                    key={subIndex}
                    className="w-1/2 p-2"
                    // Navigate to the CategoryScreen (or product list page) with the main category and subcategory as query parameters.
                    onPress={() =>
                      router.push({
                        pathname: '/category/[name]',
                        params: {
                          name: categories[index].name,
                          sub: sub.name,
                        },
                      })
                    }
                  >
                    <Image
                      source={{ uri: sub.image }}
                      className="w-full h-32 rounded-lg shadow-sm"
                    />
                    <Text className="text-center text-sm text-gray-600 mt-2">
                      {sub.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Categories;
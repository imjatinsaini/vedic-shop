// // app/searchresult.tsx
// import React from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';

// import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { useGlobalSearchParams } from 'expo-router';

// const SearchResult: React.FC = () => {
//   // Retrieve the query parameter from the route.
//   const { query } = useGlobalSearchParams<{ query: string }>();
//   const { products, loading, error } = useFetchProducts();

//   let matchingProducts: Product[] = [];
//   let trendingProducts: Product[] = [];

//   if (!loading && products.length > 0) {
//     // If the query is provided (and is not the 'random' flag)
//     if (query && query !== 'random') {
//       matchingProducts = products.filter((product) =>
//         product.productName.toLowerCase().includes(query.toLowerCase())
//       );
//     }
    
//     // If no matching products found, prepare trending products
//     // Here, we sort by productRating in descending order as a proxy for "maximum number of reviews"
//     if (matchingProducts.length === 0) {
//       trendingProducts = [...products]
//         .sort((a, b) => b.productRating - a.productRating)
//         .slice(0, 10);
//     }
//   }

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
//         <Text className="text-red-500">{error}</Text>
//       </View>
//     );
//   }

//   // Decide what to show: if there are matching products, use them; otherwise, use trending products.
//   const productsToShow = matchingProducts.length > 0 ? matchingProducts : trendingProducts;
//   // Determine if we have no matching products (and the query isn’t 'random')
//   const noMatch = matchingProducts.length === 0 && query && query !== 'random';

//   return (
//     <View className="p-4 bg-white flex-1">
//       {noMatch && (
//         <View className="mb-4">
//           <Text className="text-gray-700 font-bold">
//             No matching products found for "{query}". Showing trending products:
//           </Text>
//         </View>
//       )}
//       {productsToShow.length > 0 ? (
//         <FlatList
//           data={productsToShow}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => <EcomProduct {...item} />}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           contentContainerStyle={{ paddingBottom: 16 }}
//         />
//       ) : (
//         <View className="flex-1 justify-center items-center">
//           <Text>No products found.</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default SearchResult;




// // app/searchresults.tsx
// import React, { useContext } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { SearchContext } from './SearchContext';

// const SearchResult: React.FC = () => {
//   const { query } = useContext(SearchContext);
//   const { products, loading, error } = useFetchProducts();

//   let matchingProducts: Product[] = [];
//   let trendingProducts: Product[] = [];

//   if (!loading && products.length > 0) {
//     // If the query is non-empty, filter matching products
//     if (query && query.trim() !== '') {
//       matchingProducts = products.filter((product) =>
//         product.productName.toLowerCase().includes(query.toLowerCase())
//       );
//     }
    
//     // If no matching products found, prepare trending products
//     if (matchingProducts.length === 0) {
//       trendingProducts = [...products]
//         .sort((a, b) => b.productRating - a.productRating)
//         .slice(0, 10);
//     }
//   }

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
//         <Text className="text-red-500">{error}</Text>
//       </View>
//     );
//   }

//   const productsToShow = matchingProducts.length > 0 ? matchingProducts : trendingProducts;
//   const noMatch = matchingProducts.length === 0 && query && query.trim() !== '';

//   return (
//     <View className="p-4 bg-white flex-1">
//       {noMatch && (
//         <View className="mb-4">
//           <Text className="text-gray-700 font-bold">
//             No matching products found for "{query}". Showing trending products:
//           </Text>
//         </View>
//       )}
//       {productsToShow.length > 0 ? (
//         <FlatList
//           data={productsToShow}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => (
//             <EcomProduct {...item} searchText={query} />
//           )}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           contentContainerStyle={{ paddingBottom: 16 }}
//         />
//       ) : (
//         <View className="flex-1 justify-center items-center">
//           <Text>No products found.</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default SearchResult;


// app/searchresults.tsx


// // app/searchresults.tsx
// import React, { useContext } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { SearchContext } from './SearchContext';

// const SearchResult: React.FC = () => {
//   const { query } = useContext(SearchContext);
//   const { products, loading, error } = useFetchProducts();

//   let matchingProducts: Product[] = [];
//   let trendingProducts: Product[] = [];

//   if (!loading && products.length > 0) {
//     // If a non-empty query exists, filter matching products
//     if (query && query.trim() !== '') {
//       matchingProducts = products.filter((product) =>
//         product.productName.toLowerCase().includes(query.toLowerCase())
//       );
//     }

//     // Only if no matching products are found, select 10 random (trending) products
//     if (matchingProducts.length === 0) {
//       trendingProducts = [...products]
//         .sort(() => 0.5 - Math.random())
//         .slice(0, 10);
//     }
//   }

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
//         <Text className="text-red-500">{error}</Text>
//       </View>
//     );
//   }

//   // If any matching products exist, show them; otherwise, use trending products.
//   const productsToShow = matchingProducts.length > 0 ? matchingProducts : trendingProducts;
//   // Determine if we need to show the "no match" message
//   const noMatch = matchingProducts.length === 0 && query && query.trim() !== '';

//   return (
//     <View className="p-4 bg-white flex-1">
//       {noMatch && (
//         <View className="mb-4">
//           <Text className="text-gray-700 font-bold">
//             Sorry, no matching products found for "{query}".
//           </Text>
//           <Text className="text-gray-700">
//             Consider these trending products:
//           </Text>
//         </View>
//       )}
//       {productsToShow.length > 0 ? (
//         <FlatList
//           data={productsToShow}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => <EcomProduct {...item} searchText={query} />}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           contentContainerStyle={{ paddingBottom: 16 }}
//         />
//       ) : (
//         <View className="flex-1 justify-center items-center">
//           <Text>No products found.</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default SearchResult;



// // app/searchresults.tsx
// import React, { useContext } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';
// import EcomProduct from '@/components/EcomComponents/ecomproduct';
// import { SearchContext } from '@/app/SearchContext';

// const SearchResult: React.FC = () => {
//   const { query } = useContext(SearchContext);
//   const { products, loading, error } = useFetchProducts();

//   // Filter products based on the search query (ignoring case)
//   const matchingProducts: Product[] = products.filter((product) =>
//     product.productName.toLowerCase().includes(query.toLowerCase())
//   );

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
//         <Text className="text-red-500">{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="p-4 bg-white flex-1">
//       {matchingProducts.length > 0 ? (
//         <FlatList
//           data={matchingProducts}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => <EcomProduct {...item} searchText={query} />}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           contentContainerStyle={{ paddingBottom: 16 }}
//         />
//       ) : (
//         <View className="flex-1 justify-center items-center">
//           <Text className="text-gray-700 font-bold">
//             No matching products found for "{query}".
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default SearchResult;



// app/searchresults.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFetchProducts, Product } from '@/components/EcomComponents/ecomAPI';
import EcomProduct from '@/components/EcomComponents/ecomproduct';
import { SearchContext } from '@/app/SearchContext';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SearchResult: React.FC = () => {
  const { query } = useContext(SearchContext);
  const { products, loading, error } = useFetchProducts();

  // Filter products based on the search query (ignoring case)
  const matchingProducts: Product[] = products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

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
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <>
    {/* <Stack.Screen
        options={{
          title: 'Search Results',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.push('/')}
              style={{ marginLeft: 16 }}
              className="flex-row items-center"
            >
              <Ionicons name="arrow-back" size={24} color="#007aff" />
              <Text style={{ fontSize: 16, color: '#007aff' }}>Home </Text>
            </TouchableOpacity>
          ),
        }}
      /> */}
    <View className="p-8 bg-white gap-5 space-y-5 flex-1">
      {matchingProducts.length > 0 ? (
        <FlatList
          data={matchingProducts}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <EcomProduct {...item} searchText={query} />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', gap: 16 }}
          contentContainerStyle={{ paddingBottom: 16, gap: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-700 font-bold">
            No matching products found for "{query}".
          </Text>
        </View>
      )}
    </View>
    </>
  );
};

export default SearchResult;
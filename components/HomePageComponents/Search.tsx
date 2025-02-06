// import React from 'react';
// import { View, TextInput, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// type SearchProps = {
//   onSearch: (query: string) => void;
// };

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [query, setQuery] = React.useState('');

//   const handleInputChange = (text: string) => {
//     setQuery(text);
//     onSearch(text);
//   };

//   return (
//     <View className="px-4 mt-3">
//       <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
//         <Ionicons name="search" size={18} color="#666" />
//         <TextInput
//           placeholder="Search everything..."
//           className="ml-2 flex-1 text-sm text-gray-700"
//           placeholderTextColor="#888"
//           value={query}
//           onChangeText={handleInputChange}
//         />
//         <TouchableOpacity className="p-1">
//           <Ionicons name="mic" size={18} color="#666" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Search;




// // Search.tsx
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router'; // Adjust the import path as needed
// import { useFetchProducts } from '../EcomComponents/ecomAPI';
// import { Product } from './types';

// const Search: React.FC = () => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState<Product[]>([]);
//   const router = useRouter();
//   const { products, loading, error } = useFetchProducts();

//   // Update suggestions when the query or products list changes.
//   useEffect(() => {
//     if (query.trim() === '') {
//       setSuggestions([]);
//       return;
//     }
//     const filtered = products.filter((product) =>
//       product.productName.toLowerCase().includes(query.toLowerCase())
//     );
//     setSuggestions(filtered);
//   }, [query, products]);

//   const handleInputChange = (text: string) => {
//     setQuery(text);
//   };

//   // Called when the user presses "Enter" (return key)
//   const handleSubmitEditing = () => {
//     // Dismiss the keyboard
//     Keyboard.dismiss();

//     if (suggestions.length > 0) {
//       // If there are matching products, navigate to SearchResult.tsx with the query
//       router.push({
//         pathname: '/searchresult',
//         params: { query }, // You can handle filtering in SearchResult.tsx based on the query
//       });
//     } else {
//       // No match: navigate with a flag or query to show random products
//       router.push({
//         pathname: '/searchresult',
//         params: { query: 'random' },
//       });
//     }
//   };

//   // When a suggested product is tapped, navigate to its Product Detail Page.
//   const handleSuggestionPress = (product: Product) => {
//     router.push(`/product/${product._id}`);
//   };

//   return (
//     <View className="px-4 mt-3">
//       {/* Search Bar */}
//       <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
//         <Ionicons name="search" size={18} color="#666" />
//         <TextInput
//           placeholder="Search everything..."
//           className="ml-2 flex-1 text-sm text-gray-700"
//           placeholderTextColor="#888"
//           value={query}
//           onChangeText={handleInputChange}
//           onSubmitEditing={handleSubmitEditing}
//           returnKeyType="search"
//         />
//         <TouchableOpacity className="p-1">
//           <Ionicons name="mic" size={18} color="#666" />
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown for Suggestions */}
//       {query.length > 0 && (
//         <View className="bg-white shadow rounded mt-1">
//           {suggestions.length > 0 ? (
//             suggestions.map((item) => (
//               <TouchableOpacity
//                 key={item._id}
//                 onPress={() => handleSuggestionPress(item)}
//                 className="p-3 border-b border-gray-200"
//               >
//                 <Text>{item.productName}</Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <View className="p-3">
//               <Text className="text-gray-500">No search results found.</Text>
//             </View>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Search;



// // Search.tsx
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useFetchProducts } from '../EcomComponents/ecomAPI';
// import { Product } from './types';

// const Search: React.FC = () => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState<Product[]>([]);
//   const router = useRouter();
//   const { products } = useFetchProducts();

//   // Update suggestions when the query or products list changes.
//   useEffect(() => {
//     if (query.trim() === '') {
//       setSuggestions([]);
//       return;
//     }
//     const filtered = products.filter((product) =>
//       product.productName.toLowerCase().includes(query.toLowerCase())
//     );
//     setSuggestions(filtered);
//   }, [query, products]);

//   const handleInputChange = (text: string) => {
//     setQuery(text);
//   };

//   // Called when the user presses "Enter" (return key)
//   const handleSubmitEditing = () => {
//     // Dismiss the keyboard
//     Keyboard.dismiss();

//     // Navigate to SearchResult.tsx:
//     // - If there are matching suggestions, pass the query.
//     // - Otherwise, pass a "random" flag to show trending products.
//     if (suggestions.length > 0) {
//       router.push(`/searchresults`);
//     } else {
//       router.push(`/searchresults`);
//     }
//   };

//   // When a suggested product is tapped, navigate to its Product Detail Page.
//   const handleSuggestionPress = (product: Product) => {
//     router.push(`/product/${product._id}`);
//   };

//   return (
//     <View className="px-4 mt-3">
//       {/* Search Bar */}
//       <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
//         <Ionicons name="search" size={18} color="#666" />
//         <TextInput
//           placeholder="Search everything..."
//           className="ml-2 flex-1 text-sm text-gray-700"
//           placeholderTextColor="#888"
//           value={query}
//           onChangeText={handleInputChange}
//           onSubmitEditing={handleSubmitEditing}
//           returnKeyType="search"
//         />
//         <TouchableOpacity className="p-1">
//           <Ionicons name="mic" size={18} color="#666" />
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown for Suggestions */}
//       {query.length > 0 && (
//         <View className="bg-white shadow rounded mt-1">
//           {suggestions.length > 0 ? (
//             suggestions.map((item) => (
//               <TouchableOpacity
//                 key={item._id}
//                 onPress={() => handleSuggestionPress(item)}
//                 className="p-3 border-b border-gray-200"
//               >
//                 <Text>{item.productName}</Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <View className="p-3">
//               <Text className="text-gray-500">No search results found.</Text>
//             </View>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Search;




// // Search.tsx
// import React, { useState, useContext, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useFetchProducts } from '../EcomComponents/ecomAPI';
// import { Product } from './types';
// import { SearchContext } from '@/app/SearchContext';

// const Search: React.FC = () => {
//   const { query, setQuery } = useContext(SearchContext);
//   const [localQuery, setLocalQuery] = useState(query);
//   const [suggestions, setSuggestions] = useState<Product[]>([]);
//   const router = useRouter();
//   const { products } = useFetchProducts();

//   useEffect(() => {
//     if (localQuery.trim() === '') {
//       setSuggestions([]);
//       return;
//     }
//     const filtered = products.filter((product) =>
//       product.productName.toLowerCase().includes(localQuery.toLowerCase())
//     );
//     setSuggestions(filtered);
//   }, [localQuery, products]);

//   const handleInputChange = (text: string) => {
//     setLocalQuery(text);
//   };

//   // When user presses enter, update the global query and navigate.
//   const handleSubmitEditing = () => {
//     Keyboard.dismiss();
//     setQuery(localQuery); // update the global search query
//     router.push('/searchresults');
//   };

//   const handleSuggestionPress = (product: Product) => {
//     // Navigate directly to the product detail page if a suggestion is clicked.
//     router.push(`/product/${product._id}`);
//   };

//   return (
//     <View className="px-4 mt-3">
//       {/* Search Bar */}
//       <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
//         <Ionicons name="search" size={18} color="#666" />
//         <TextInput
//           placeholder="Search everything..."
//           className="ml-2 flex-1 text-sm text-gray-700"
//           placeholderTextColor="#888"
//           value={localQuery}
//           onChangeText={handleInputChange}
//           onSubmitEditing={handleSubmitEditing}
//           returnKeyType="search"
//         />
//         <TouchableOpacity className="p-1">
//           <Ionicons name="mic" size={18} color="#666" />
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown for Suggestions */}
//       {localQuery.length > 0 && (
//         <View className="bg-white shadow rounded mt-1">
//           {suggestions.length > 0 ? (
//             suggestions.map((item) => (
//               <TouchableOpacity
//                 key={item._id}
//                 onPress={() => handleSuggestionPress(item)}
//                 className="p-3 border-b border-gray-200"
//               >
//                 <Text>{item.productName}</Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <View className="p-3">
//               <Text className="text-gray-500">No search results found.</Text>
//             </View>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Search;



// // Search.tsx
// import React, { useState, useContext, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useFetchProducts } from '../EcomComponents/ecomAPI';
// import { Product } from './types';
// import { SearchContext } from '@/app/SearchContext';

// const Search: React.FC = () => {
//   const { query, setQuery } = useContext(SearchContext);
//   const [localQuery, setLocalQuery] = useState(query);
//   const [suggestions, setSuggestions] = useState<Product[]>([]);
//   const router = useRouter();
//   const { products } = useFetchProducts();

//   useEffect(() => {
//     if (localQuery.trim() === '') {
//       setSuggestions([]);
//       return;
//     }
//     // Filter products based on the local query (ignoring case)
//     const filtered = products.filter((product) =>
//       product.productName.toLowerCase().includes(localQuery.toLowerCase())
//     );
//     setSuggestions(filtered);
//   }, [localQuery, products]);

//   const handleInputChange = (text: string) => {
//     setLocalQuery(text);
//   };

//   // When user presses enter, update the global query and navigate to the search results screen.
//   const handleSubmitEditing = () => {
//     Keyboard.dismiss();
//     setQuery(localQuery); // Update global search query
//     router.push('/searchresults');
//   };

//   // Navigate to the product detail page when a suggestion is tapped.
//   const handleSuggestionPress = (product: Product) => {
//     router.push(`/product/${product._id}`);
//   };

//   return (
//     <View className="px-4 mt-3">
//       {/* Search Bar */}
//       <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
//         <Ionicons name="search" size={18} color="#666" />
//         <TextInput
//           placeholder="Search everything..."
//           className="ml-2 flex-1 text-sm text-gray-700"
//           placeholderTextColor="#888"
//           value={localQuery}
//           onChangeText={handleInputChange}
//           onSubmitEditing={handleSubmitEditing}
//           returnKeyType="search"
//         />
//         <TouchableOpacity className="p-1">
//           <Ionicons name="mic" size={18} color="#666" />
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown for Suggestions */}
//       {localQuery.length > 0 && (
//         <View className="bg-white shadow rounded mt-1">
//           {suggestions.length > 0 ? (
//             suggestions.map((item) => (
//               <TouchableOpacity
//                 key={item._id}
//                 onPress={() => handleSuggestionPress(item)}
//                 className="p-3 border-b border-gray-200"
//               >
//                 <Text>{item.productName}</Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <View className="p-3">
//               <Text className="text-gray-500">No search results found.</Text>
//             </View>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Search;




// Search.tsx
import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFetchProducts } from '../EcomComponents/ecomAPI';
import { Product } from './types';
import { SearchContext } from '@/app/SearchContext';

const Search: React.FC = () => {
  const { query, setQuery } = useContext(SearchContext);
  const [localQuery, setLocalQuery] = useState(query);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const router = useRouter();
  const { products } = useFetchProducts();

  useEffect(() => {
    if (localQuery.trim() === '') {
      setSuggestions([]);
      return;
    }
    // Filter products based on the local query (ignoring case)
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(localQuery.toLowerCase())
    );
    setSuggestions(filtered);
  }, [localQuery, products]);

  const handleInputChange = (text: string) => {
    setLocalQuery(text);
  };

  // When user presses enter, update the global query and navigate to the search results screen.
  const handleSubmitEditing = () => {
    Keyboard.dismiss();
    setQuery(localQuery); // Update global search query
    router.push('/searchresults');
  };

  // Navigate to the product detail page when a suggestion is tapped.
  const handleSuggestionPress = (product: Product) => {
    router.push(`/product/${product._id}`);
  };

  return (
    <View className="px-4 mt-3">
      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-2 shadow-sm">
        <Ionicons name="search" size={18} color="#666" />
        <TextInput
          placeholder="Search everything..."
          className="ml-2 flex-1 text-sm text-gray-700"
          placeholderTextColor="#888"
          value={localQuery}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSubmitEditing}
          returnKeyType="search"
        />
        <TouchableOpacity className="p-1">
          <Ionicons name="mic" size={18} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Dropdown for Suggestions */}
      {localQuery.length > 0 && (
        <View className="bg-white shadow rounded mt-1">
          {suggestions.length > 0 ? (
            suggestions.map((item) => {
              // Use the first product image if available; otherwise, use a placeholder.
              const imageUri =
                item.productImages && item.productImages.length > 0
                  ? item.productImages[0]
                  : 'https://via.placeholder.com/40';

              return (
                <TouchableOpacity
                  key={item._id}
                  onPress={() => handleSuggestionPress(item)}
                  className="p-3 border-b border-gray-200"
                >
                  <View className="flex-row items-center">
                    <Image
                      source={{ uri: imageUri }}
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                    <Text className="ml-2 text-gray-700 w-64 ">{item.productName}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View className="p-3">
              <Text className="text-gray-500">No search results found.</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Search;
